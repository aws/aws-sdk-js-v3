import { AwsCredentialIdentity } from "@aws-sdk/types";

import { ProcessCredentials } from "./ProcessCredentials";

export const getValidatedProcessCredentials = (profileName: string, data: ProcessCredentials): AwsCredentialIdentity => {
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

  return {
    accessKeyId: data.AccessKeyId,
    secretAccessKey: data.SecretAccessKey,
    ...(data.SessionToken && { sessionToken: data.SessionToken }),
    ...(data.Expiration && { expiration: new Date(data.Expiration) }),
  };
};
