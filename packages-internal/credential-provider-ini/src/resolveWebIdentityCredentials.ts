import { setCredentialFeature } from "@aws-sdk/core/client";
import type { AwsIdentityProperties } from "@aws-sdk/types";
import { AwsCredentialIdentity, Profile } from "@smithy/types";

import { FromIniInit } from "./fromIni";

/**
 * @internal
 */
export interface WebIdentityProfile extends Profile {
  web_identity_token_file: string;
  role_arn: string;
  role_session_name?: string;
}

/**
 * @internal
 */
export const isWebIdentityProfile = (arg: any): arg is WebIdentityProfile =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.web_identity_token_file === "string" &&
  typeof arg.role_arn === "string" &&
  ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;

/**
 * @internal
 */
export const resolveWebIdentityCredentials = async (
  profile: WebIdentityProfile,
  options: FromIniInit,
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"]
): Promise<AwsCredentialIdentity> =>
  import("@aws-sdk/credential-provider-web-identity").then(({ fromTokenFile }) =>
    fromTokenFile({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
      logger: options.logger,
      parentClientConfig: options.parentClientConfig,
    })({
      callerClientConfig,
    }).then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))
  );
