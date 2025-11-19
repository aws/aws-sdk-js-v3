import { setCredentialFeature } from "@aws-sdk/core/client";
import { fromLoginCredentials } from "@aws-sdk/credential-provider-login";
import type { AwsCredentialIdentity, ParsedIniData } from "@smithy/types";

import type { FromIniInit } from "./fromIni";

/**
 * @internal
 */
export const isLoginProfile = (data: ParsedIniData[string]): boolean => {
  return Boolean(data && data.login_session);
};

/**
 * @internal
 */
export const resolveLoginCredentials = async (
  profileName: string,
  options: FromIniInit
): Promise<AwsCredentialIdentity> => {
  const credentials = await fromLoginCredentials({
    ...options,
    profile: profileName,
  })();

  return setCredentialFeature(credentials, "CREDENTIALS_PROFILE_LOGIN", "AC");
};
