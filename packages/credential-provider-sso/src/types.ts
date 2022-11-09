import { Profile } from "@aws-sdk/types";

/**
 * Cached SSO token retrieved from SSO login flow.
 */
export interface SSOToken {
  // A base64 encoded string returned by the sso-oidc service.
  accessToken: string;
  // RFC3339 format timestamp
  expiresAt: string;
  region?: string;
  startUrl?: string;
}

/**
 * @internal
 */
export interface SsoProfile extends Profile {
  sso_start_url: string;
  sso_session?: string;
  sso_account_id: string;
  sso_region: string;
  sso_role_name: string;
}
