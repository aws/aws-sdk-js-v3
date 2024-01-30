import type { SsoProfile } from "@aws-sdk/credential-provider-sso";
import type { Profile } from "@smithy/types";

/**
 * @internal
 */
export const resolveSsoCredentials = async (profile: string) => {
  const { fromSSO } = await import("@aws-sdk/credential-provider-sso");
  return fromSSO({
    profile,
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
