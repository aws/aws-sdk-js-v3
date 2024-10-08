import { setCredentialFeature } from "@aws-sdk/core/client";
import type { SsoProfile } from "@aws-sdk/credential-provider-sso";
import type { CredentialProviderOptions } from "@aws-sdk/types";
import type { IniSection, Profile } from "@smithy/types";

/**
 * @internal
 */
export const resolveSsoCredentials = async (
  profile: string,
  profileData: IniSection,
  options: CredentialProviderOptions = {}
) => {
  const { fromSSO } = await import("@aws-sdk/credential-provider-sso");
  return fromSSO({
    profile,
    logger: options.logger,
  })().then((creds) => {
    if (profileData.sso_session) {
      return setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO", "r");
    } else {
      return setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
    }
  });
};

/**
 * @internal
 * duplicated from \@aws-sdk/credential-provider-sso to defer import.
 */
export const isSsoProfile = (arg: Profile): arg is Partial<SsoProfile> =>
  arg &&
  (typeof arg.sso_start_url === "string" ||
    typeof arg.sso_account_id === "string" ||
    typeof arg.sso_session === "string" ||
    typeof arg.sso_region === "string" ||
    typeof arg.sso_role_name === "string");
