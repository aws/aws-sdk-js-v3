import type { FromLoginCredentialsInit } from "@aws-sdk/credential-provider-login";
import type { AssumeRoleWithWebIdentityParams } from "@aws-sdk/credential-provider-web-identity";
import type { CredentialProviderOptions, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import type { SourceProfileInit } from "@smithy/core/config";
import { getProfileName } from "@smithy/core/config";
import type { AwsCredentialIdentity, Pluggable } from "@smithy/types";

import { loadProfiles } from "./loadProfiles";
import type { AssumeRoleParams } from "./resolveAssumeRoleCredentials";
import { resolveProfileData } from "./resolveProfileData";

/**
 * @public
 */
export interface FromIniInit extends SourceProfileInit, CredentialProviderOptions, FromLoginCredentialsInit {
  /**
   * A function that returns a promise fulfilled with an MFA token code for
   * the provided MFA Serial code. If a profile requires an MFA code and
   * `mfaCodeProvider` is not a valid function, the credential provider
   * promise will be rejected.
   *
   * @param mfaSerial The serial code of the MFA device specified.
   */
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;

  /**
   * A function that assumes a role and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumer?: (sourceCreds: AwsCredentialIdentity, params: AssumeRoleParams) => Promise<AwsCredentialIdentity>;

  /**
   * A function that assumes a role with web identity and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumerWithWebIdentity?: (params: AssumeRoleWithWebIdentityParams) => Promise<AwsCredentialIdentity>;

  /**
   * AWS SDK Client configuration to be used for creating inner client
   * for auth operations. Inner clients include STS, SSO, and Signin clients.
   * @internal
   */
  clientConfig?: any;

  clientPlugins?: Pluggable<any, any>[];

  /**
   * When true, always reload credentials from the file system instead of using cached values.
   * This is useful when you need to detect changes to the credentials file.
   */
  ignoreCache?: boolean;

  /**
   * Timeouts for profiles that get credentials from the credential daemon (daemon_credential).
   * They can be set only here, in code.
   */
  credentialDaemon?: {
    /**
     * Milliseconds to wait for the connection to the credential daemon. Defaults to 1000.
     */
    connectTimeout?: number;
    /**
     * Milliseconds to wait for the whole call to the credential daemon. Defaults to 5000.
     */
    timeout?: number;
  };
}

/**
 * @internal
 *
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
export const fromIni =
  (init: FromIniInit = {}): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig } = {}) => {
    init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
    const profiles = await loadProfiles(init);
    return resolveProfileData(
      getProfileName({
        profile: init.profile ?? callerClientConfig?.profile,
      }),
      profiles,
      init,
      callerClientConfig
    );
  };
