import type { AwsCredentialIdentity, Profile } from "@aws-sdk/types";
import type { IniSection } from "@smithy/types";

import type { FromIniInit } from "./fromIni";

/**
 * @internal
 */
export interface CredentialDaemonProfile extends Profile {
  credential_daemon: string;
}

/**
 * The profile names a credential of the credential daemon. Its value comes from the config file only.
 * @internal
 */
export const isCredentialDaemonProfile = (arg: any): arg is CredentialDaemonProfile =>
  Boolean(arg) && typeof arg === "object" && typeof arg.credential_daemon === "string";

const hasSsoStartSettings = (profile: IniSection) =>
  typeof profile.sso_session === "string" || typeof profile.sso_start_url === "string";

/**
 * An SSO profile with credential_daemon but neither sso_account_id nor sso_role_name
 * resolves as if it had no credential_daemon.
 * @internal
 */
export const isSsoProfileWithoutAccountOrRole = (profile: IniSection): boolean =>
  hasSsoStartSettings(profile) && profile.sso_account_id === undefined && profile.sso_role_name === undefined;

/**
 * Gets the profile's credentials from the credential daemon, and uses none of its other credential settings.
 * @internal
 */
export const resolveCredentialDaemonCredentials = async (
  profileName: string,
  profile: CredentialDaemonProfile,
  options: FromIniInit
): Promise<AwsCredentialIdentity> => {
  const { logger } = options;
  const { fromCredentialDaemon, CredentialDaemonProviderError } = await import("@aws-sdk/credential-provider-daemon");

  const isSso = hasSsoStartSettings(profile);
  const hasAccount = profile.sso_account_id !== undefined;
  const hasRole = profile.sso_role_name !== undefined;
  if (isSso && hasAccount !== hasRole) {
    // Only one of sso_account_id and sso_role_name: the SSO provider's validation error, which it always
    // raises for this profile, with no daemon call.
    const { validateSsoProfile } = await import("@aws-sdk/credential-provider-sso");
    validateSsoProfile(profile, logger);
  }

  if (profile.web_identity_token_file !== undefined) {
    // checked before role_arn, because a web identity profile usually sets both.
    throw new CredentialDaemonProviderError(
      `Profile ${profileName} has two credential sources, credential_daemon and web_identity_token_file. ` +
        `Remove one of them.`,
      "INVALID_CONFIG",
      { logger }
    );
  }
  if (profile.role_arn !== undefined) {
    throw new CredentialDaemonProviderError(
      `Profile ${profileName} sets both credential_daemon and role_arn. Move the role to its own profile ` +
        `that uses source_profile = ${profileName}.`,
      "INVALID_CONFIG",
      { logger }
    );
  }

  return fromCredentialDaemon({
    credential: profile.credential_daemon,
    logger,
    ...(isSso ? { accountId: profile.sso_account_id, roleName: profile.sso_role_name } : {}),
    socketPath: options.credentialDaemon?.socketPath,
    connectTimeout: options.credentialDaemon?.connectTimeout,
    timeout: options.credentialDaemon?.timeout,
  })();
};
