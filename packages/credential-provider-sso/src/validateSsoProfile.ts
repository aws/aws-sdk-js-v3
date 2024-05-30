import { CredentialsProviderError } from "@smithy/property-provider";
import { Logger } from "@smithy/types";

import { SsoProfile } from "./types";

/**
 * @internal
 */
export const validateSsoProfile = (profile: Partial<SsoProfile>, logger?: Logger): SsoProfile => {
  const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
  if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
    throw new CredentialsProviderError(
      `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` +
        `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(
          ", "
        )}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
      { tryNextLink: false, logger }
    );
  }
  return profile as SsoProfile;
};
