import { setCredentialFeature } from "@aws-sdk/core/client";
import { AwsCredentialIdentity, Profile } from "@smithy/types";

import { FromIniInit } from "./fromIni";

/**
 * @internal
 */
export interface StaticCredsProfile extends Profile {
  aws_access_key_id: string;
  aws_secret_access_key: string;
  aws_session_token?: string;
  aws_credential_scope?: string;
  aws_account_id?: string;
}

/**
 * @internal
 */
export const isStaticCredsProfile = (arg: any): arg is StaticCredsProfile =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.aws_access_key_id === "string" &&
  typeof arg.aws_secret_access_key === "string" &&
  ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1 &&
  ["undefined", "string"].indexOf(typeof arg.aws_account_id) > -1;

/**
 * @internal
 */
export const resolveStaticCredentials = async (
  profile: StaticCredsProfile,
  options?: FromIniInit
): Promise<AwsCredentialIdentity> => {
  options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");

  const credentials = {
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
    ...(profile.aws_credential_scope && { credentialScope: profile.aws_credential_scope }),
    ...(profile.aws_account_id && { accountId: profile.aws_account_id }),
  };

  return setCredentialFeature(credentials, "CREDENTIALS_PROFILE", "n");
};
