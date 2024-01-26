import type { SsoProfile } from "@aws-sdk/credential-provider-sso";
import type { Profile } from "@smithy/types";

/**
 * @internal
 */
export const resolveSsoCredentials = async (data: Partial<SsoProfile>) => {
  const { fromSSO, validateSsoProfile } = await import("@aws-sdk/credential-provider-sso");
  const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = validateSsoProfile(data);
  return fromSSO({
    ssoStartUrl: sso_start_url,
    ssoAccountId: sso_account_id,
    ssoSession: sso_session,
    ssoRegion: sso_region,
    ssoRoleName: sso_role_name,
  })();
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
