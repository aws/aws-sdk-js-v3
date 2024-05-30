import type { AssumeRoleCommandInput, STSClient, STSClientConfig } from "@aws-sdk/client-sts";
import type { CredentialProviderOptions } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider, Pluggable } from "@smithy/types";

export interface FromTemporaryCredentialsOptions extends CredentialProviderOptions {
  params: Omit<AssumeRoleCommandInput, "RoleSessionName"> & { RoleSessionName?: string };
  masterCredentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
}

/**
 * Creates a credential provider function that retrieves temporary credentials from STS AssumeRole API.
 *
 * ```javascript
 * import { fromTemporaryCredentials } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromTemporaryCredentials } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   region,
 *   credentials: fromTemporaryCredentials(
 *     // Optional. The master credentials used to get and refresh temporary credentials from AWS STS. If skipped, it uses
 *     // the default credential resolved by internal STS client.
 *     masterCredentials: fromTemporaryCredentials({
 *       params: { RoleArn: "arn:aws:iam::1234567890:role/RoleA" }
 *     }),
 *     // Required. Options passed to STS AssumeRole operation.
 *     params: {
 *       // Required. ARN of role to assume.
 *       RoleArn: "arn:aws:iam::1234567890:role/RoleB",
 *       // Optional. An identifier for the assumed role session. If skipped, it generates a random session name with
 *       // prefix of 'aws-sdk-js-'.
 *       RoleSessionName: "aws-sdk-js-123",
 *       // Optional. The duration, in seconds, of the role session.
 *       DurationSeconds: 3600
 *       //... For more options see https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
 *     },
 *     // Optional. Custom STS client configurations overriding the default ones.
 *     clientConfig: { region },
 *     // Optional. Custom STS client middleware plugin to modify the client default behavior.
 *     // e.g. adding custom headers.
 *     clientPlugins: [addFooHeadersPlugin],
 *     // Optional. A function that returns a promise fulfilled with an MFA token code for the provided MFA Serial code.
 *     // Required if `params` has `SerialNumber` config.
 *     mfaCodeProvider: async mfaSerial => {
 *       return "token"
 *     }
 *   ),
 * });
 * ```
 */
export const fromTemporaryCredentials = (options: FromTemporaryCredentialsOptions): AwsCredentialIdentityProvider => {
  let stsClient: STSClient;
  return async (): Promise<AwsCredentialIdentity> => {
    options.logger?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
    const params = { ...options.params, RoleSessionName: options.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
    if (params?.SerialNumber) {
      if (!options.mfaCodeProvider) {
        throw new CredentialsProviderError(
          `Temporary credential requires multi-factor authentication,` + ` but no MFA code callback was provided.`,
          {
            tryNextLink: false,
            logger: options.logger,
          }
        );
      }
      params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
    }

    const { AssumeRoleCommand, STSClient } = await import("./loadSts");

    if (!stsClient) stsClient = new STSClient({ ...options.clientConfig, credentials: options.masterCredentials });
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
