import type { AssumeRoleCommandInput, STSClient, STSClientConfig } from "@aws-sdk/nested-clients/sts";
import type {
  AwsIdentityProperties,
  CredentialProviderOptions,
  RuntimeConfigAwsCredentialIdentityProvider,
} from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider, Pluggable } from "@smithy/types";

export interface FromTemporaryCredentialsOptions extends CredentialProviderOptions {
  params: Omit<AssumeRoleCommandInput, "RoleSessionName"> & { RoleSessionName?: string };
  masterCredentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
}

export const fromTemporaryCredentials = (
  options: FromTemporaryCredentialsOptions,
  credentialDefaultProvider?: () => AwsCredentialIdentityProvider
): RuntimeConfigAwsCredentialIdentityProvider => {
  let stsClient: STSClient;
  return async (awsIdentityProperties: AwsIdentityProperties = {}): Promise<AwsCredentialIdentity> => {
    options.logger?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
    const params = { ...options.params, RoleSessionName: options.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
    if (params?.SerialNumber) {
      if (!options.mfaCodeProvider) {
        throw new CredentialsProviderError(
          `Temporary credential requires multi-factor authentication, but no MFA code callback was provided.`,
          {
            tryNextLink: false,
            logger: options.logger,
          }
        );
      }
      params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
    }

    const { AssumeRoleCommand, STSClient } = await import("./loadSts");

    if (!stsClient) {
      const defaultCredentialsOrError =
        typeof credentialDefaultProvider === "function" ? credentialDefaultProvider() : undefined;

      const { callerClientConfig } = awsIdentityProperties;
      stsClient = new STSClient({
        ...options.clientConfig,
        credentials:
          options.masterCredentials ??
          options.clientConfig?.credentials ??
          callerClientConfig?.credentialDefaultProvider?.() ??
          defaultCredentialsOrError,
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
        logger: options.logger,
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
