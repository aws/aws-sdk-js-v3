import { setCredentialFeature } from "@aws-sdk/core/client";
import { AwsCredentialIdentity, ParsedIniData } from "@smithy/types";

import { ProcessCredentials } from "./ProcessCredentials";

/**
 * @internal
 */
export const getValidatedProcessCredentials = (
  profileName: string,
  data: ProcessCredentials,
  profiles: ParsedIniData
): AwsCredentialIdentity => {
  if (data.Version !== 1) {
    throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
  }

  if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
    throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
  }

  if (data.Expiration) {
    const currentTime = new Date();
    const expireTime = new Date(data.Expiration);
    if (expireTime < currentTime) {
      throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
    }
  }

  let accountId = data.AccountId;
  if (!accountId && profiles?.[profileName]?.aws_account_id) {
    accountId = profiles[profileName].aws_account_id;
  }

  const credentials = {
    accessKeyId: data.AccessKeyId,
    secretAccessKey: data.SecretAccessKey,
    ...(data.SessionToken && { sessionToken: data.SessionToken }),
    ...(data.Expiration && { expiration: new Date(data.Expiration) }),
    ...(data.CredentialScope && { credentialScope: data.CredentialScope }),
    ...(accountId && { accountId }),
  };

  setCredentialFeature(credentials, "CREDENTIALS_PROCESS", "w");

  return credentials;
};
