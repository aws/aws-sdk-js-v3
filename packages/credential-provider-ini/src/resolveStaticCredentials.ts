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
}

/**
 * @internal
 */
export const isStaticCredsProfile = (arg: any): arg is StaticCredsProfile =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.aws_access_key_id === "string" &&
  typeof arg.aws_secret_access_key === "string" &&
  ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;

/**
 * @internal
 */
export const resolveStaticCredentials = (
  profile: StaticCredsProfile,
  options?: FromIniInit
): Promise<AwsCredentialIdentity> => {
  options?.logger?.debug("@aws-sdk/credential-provider-ini", "resolveStaticCredentials");
  return Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
    credentialScope: profile.aws_credential_scope,
  });
};
