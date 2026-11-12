import { setCredentialFeature } from "@aws-sdk/core/client";
import type { AwsIdentityProperties } from "@aws-sdk/types";
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
  options: FromIniInit,
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"],
  rejectedAccessKeyId?: string
): Promise<AwsCredentialIdentity> => {
  const { fromLoginCredentials } = await import("@aws-sdk/credential-provider-login");
  // Forwarded so Login refreshes when a service rejected the profile's credentials.
  const properties: AwsIdentityProperties & { rejectedAccessKeyId?: string } = {
    callerClientConfig,
    rejectedAccessKeyId,
  };
  const credentials = await fromLoginCredentials({
    ...options,
    profile: profileName,
  })(properties);

  return setCredentialFeature(credentials, "CREDENTIALS_PROFILE_LOGIN", "AC");
};
