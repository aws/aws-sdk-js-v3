import type { AssumeRoleCommandInput, STSClient, STSClientConfig } from "@aws-sdk/nested-clients/sts";
import type {
  AwsIdentityProperties,
  CredentialProviderOptions,
  RuntimeConfigAwsCredentialIdentityProvider,
} from "@aws-sdk/types";
import { normalizeProvider } from "@smithy/core";
import { CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider, Logger, Pluggable, RequestHandler } from "@smithy/types";

export interface FromTemporaryCredentialsOptions extends CredentialProviderOptions {
  params: Omit<AssumeRoleCommandInput, "RoleSessionName"> & { RoleSessionName?: string };
  masterCredentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  clientConfig?: STSClientConfig;
  logger?: Logger;
  clientPlugins?: Pluggable<any, any>[];
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
}

const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";

export const fromTemporaryCredentials = (
  options: FromTemporaryCredentialsOptions,
  credentialDefaultProvider?: () => AwsCredentialIdentityProvider
): RuntimeConfigAwsCredentialIdentityProvider => {
  let stsClient: STSClient;
  return async (awsIdentityProperties: AwsIdentityProperties = {}): Promise<AwsCredentialIdentity> => {
    const { callerClientConfig } = awsIdentityProperties;
    const logger = options.logger ?? callerClientConfig?.logger;
    logger?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");

    const params = { ...options.params, RoleSessionName: options.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
    if (params?.SerialNumber) {
      if (!options.mfaCodeProvider) {
        throw new CredentialsProviderError(
          `Temporary credential requires multi-factor authentication, but no MFA code callback was provided.`,
          {
            tryNextLink: false,
            logger,
          }
        );
      }
      params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
    }

    const { AssumeRoleCommand, STSClient } = await import("./loadSts");

    if (!stsClient) {
      const defaultCredentialsOrError =
        typeof credentialDefaultProvider === "function" ? credentialDefaultProvider() : undefined;

      const credentialSources = [
        options.masterCredentials,
        options.clientConfig?.credentials,
        /**
         * Important (!): callerClientConfig?.credentials is not a valid
         * credential source for this provider, because this function
         * is the caller client's credential provider function.
         */
        void callerClientConfig?.credentials,
        callerClientConfig?.credentialDefaultProvider?.(),
        defaultCredentialsOrError,
      ];
      let credentialSource = "STS client default credentials";
      if (credentialSources[0]) {
        credentialSource = "options.masterCredentials";
      } else if (credentialSources[1]) {
        credentialSource = "options.clientConfig.credentials";
      } else if (credentialSources[2]) {
        // This branch is not possible, see above void note.
        // This code is here to prevent accidental attempts to utilize
        // the invalid credential source.
        credentialSource = "caller client's credentials";
        throw new Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");
      } else if (credentialSources[3]) {
        credentialSource = "caller client's credentialDefaultProvider";
      } else if (credentialSources[4]) {
        credentialSource = "AWS SDK default credentials";
      }

      const regionSources = [options.clientConfig?.region, callerClientConfig?.region, ASSUME_ROLE_DEFAULT_REGION];
      let regionSource = "default partition's default region";
      if (regionSources[0]) {
        regionSource = "options.clientConfig.region";
      } else if (regionSources[1]) {
        regionSource = "caller client's region";
      }

      const requestHandlerSources = [
        filterRequestHandler(options.clientConfig?.requestHandler),
        filterRequestHandler(callerClientConfig?.requestHandler),
      ];
      let requestHandlerSource = "STS default requestHandler";
      if (requestHandlerSources[0]) {
        requestHandlerSource = "options.clientConfig.requestHandler";
      } else if (requestHandlerSources[1]) {
        requestHandlerSource = "caller client's requestHandler";
      }

      logger?.debug?.(
        `@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ` +
          `${regionSource}=${await normalizeProvider(
            coalesce(regionSources)
          )()}, ${credentialSource}, ${requestHandlerSource}.`
      );

      stsClient = new STSClient({
        ...options.clientConfig,
        credentials: coalesce(credentialSources),
        logger,
        profile: options.clientConfig?.profile ?? callerClientConfig?.profile,
        region: coalesce(regionSources),
        requestHandler: coalesce(requestHandlerSources),
      });
    }
    if (options.clientPlugins) {
      for (const plugin of options.clientPlugins) {
        stsClient.middlewareStack.use(plugin);
      }
    }
    const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`, {
        logger,
      });
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
      // TODO(credentialScope): access normally when shape is updated.
      credentialScope: (Credentials as any).CredentialScope,
    };
  };
};

/**
 * @internal
 */
const filterRequestHandler = (requestHandler: STSClientConfig["requestHandler"]): undefined | typeof requestHandler => {
  return (requestHandler as RequestHandler<any, any>)?.metadata?.handlerProtocol === "h2" ? undefined : requestHandler;
};

/**
 * @internal
 */
const coalesce = (args: any) => {
  for (const item of args) {
    if (item !== undefined) {
      return item;
    }
  }
};
