import { AssumeRoleCommand, AssumeRoleCommandInput, STSClient, STSClientConfig } from "@aws-sdk/client-sts";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider, Credentials } from "@aws-sdk/types";

export interface FromTemporaryCredentialsOptions {
  params: AssumeRoleCommandInput;
  masterCredentials?: Credentials | CredentialProvider;
  stsConfig?: STSClientConfig;
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;
}

export const fromTemporaryCredentials = (options: FromTemporaryCredentialsOptions): CredentialProvider => {
  let stsClient: STSClient;
  return async (): Promise<Credentials> => {
    const params = { ...options.params };
    if (params?.SerialNumber) {
      if (!options.mfaCodeProvider) {
        throw new CredentialsProviderError(
          `Temporary credential requires multi-factor authentication,` + ` but no MFA code callback was provided.`,
          false
        );
      }
      params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
    }
    if (!stsClient) stsClient = new STSClient({ ...options.stsConfig, credentials: options.masterCredentials });
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
