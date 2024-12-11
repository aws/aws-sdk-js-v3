import type { AssumeRoleWithWebIdentityParams } from "@aws-sdk/credential-provider-web-identity";
import type { CredentialProviderOptions } from "@aws-sdk/types";
import type { RegionalAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { getProfileName, parseKnownFiles, SourceProfileInit } from "@smithy/shared-ini-file-loader";
import type { AwsCredentialIdentity, Pluggable } from "@smithy/types";

import { AssumeRoleParams } from "./resolveAssumeRoleCredentials";
import { resolveProfileData } from "./resolveProfileData";

/**
 * @public
 */
export interface FromIniInit extends SourceProfileInit, CredentialProviderOptions {
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
   * STSClientConfig or SSOClientConfig to be used for creating inner client
   * for auth operations.
   * @internal
   */
  clientConfig?: any;

  clientPlugins?: Pluggable<any, any>[];
}

/**
 * @internal
 *
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
export const fromIni =
  (_init: FromIniInit = {}): RegionalAwsCredentialIdentityProvider =>
  async (props = {}) => {
    const init: FromIniInit = {
      ..._init,
    };
    if (props.contextClientConfig?.region) {
      init.parentClientConfig = {
        region: props.contextClientConfig.region,
        ..._init.parentClientConfig,
      };
    }
    init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
    const profiles = await parseKnownFiles(init);
    return resolveProfileData(getProfileName(init), profiles, init);
  };
