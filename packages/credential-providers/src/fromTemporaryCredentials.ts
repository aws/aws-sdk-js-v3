import { AssumeRoleCommand, AssumeRoleCommandInput, STSClient, STSClientConfig } from "@aws-sdk/client-sts";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider, Credentials } from "@aws-sdk/types";

export interface FromTemporaryCredentialsOptions {
  params: Omit<AssumeRoleCommandInput, "RoleSessionName"> & { RoleSessionName?: string };
  masterCredentials?: Credentials | CredentialProvider;
  clientConfig?: STSClientConfig;
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
 *     // Optional. A function that returns a promise fulfilled with an MFA token code for the provided MFA Serial code.
 *     // Required if `params` has `SerialNumber` config.
 *     mfaCodeProvider: async mfaSerial => {
 *       return "token"
 *     }
 *   ),
 * });
 * ```
 */
export const fromTemporaryCredentials = (options: FromTemporaryCredentialsOptions): CredentialProvider => {
  let stsClient: STSClient;
  return async (): Promise<Credentials> => {
    const params = { ...options.params, RoleSessionName: options.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
    if (params?.SerialNumber) {
      if (!options.mfaCodeProvider) {
        throw new CredentialsProviderError(
          `Temporary credential requires multi-factor authentication,` + ` but no MFA code callback was provided.`,
          false
        );
      }
      params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
    }
    if (!stsClient) stsClient = new STSClient({ ...options.clientConfig, credentials: options.masterCredentials });
    const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
    };
  };
};
