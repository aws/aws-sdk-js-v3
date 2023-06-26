import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName } from "@smithy/shared-ini-file-loader";
import { ParsedIniData, Profile } from "@smithy/types";

import { FromIniInit } from "./fromIni";
import { resolveCredentialSource } from "./resolveCredentialSource";
import { resolveProfileData } from "./resolveProfileData";

/**
 * @internal
 *
 * @see http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/STS.html#assumeRole-property
 * TODO update the above to link to V3 docs
 */
export interface AssumeRoleParams {
  /**
   * The identifier of the role to be assumed.
   */
  RoleArn: string;

  /**
   * A name for the assumed role session.
   */
  RoleSessionName: string;

  /**
   * A unique identifier that is used by third parties when assuming roles in
   * their customers' accounts.
   */
  ExternalId?: string;

  /**
   * The identification number of the MFA device that is associated with the
   * user who is making the `AssumeRole` call.
   */
  SerialNumber?: string;

  /**
   * The value provided by the MFA device.
   */
  TokenCode?: string;
}

interface AssumeRoleWithSourceProfile extends Profile {
  role_arn: string;
  source_profile: string;
}

interface AssumeRoleWithProviderProfile extends Profile {
  role_arn: string;
  credential_source: string;
}

/**
 * @internal
 */
export const isAssumeRoleProfile = (arg: any) =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.role_arn === "string" &&
  ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
  ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
  ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
  (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));

const isAssumeRoleWithSourceProfile = (arg: any): arg is AssumeRoleWithSourceProfile =>
  typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";

const isAssumeRoleWithProviderProfile = (arg: any): arg is AssumeRoleWithProviderProfile =>
  typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";

/**
 * @internal
 */
export const resolveAssumeRoleCredentials = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  visitedProfiles: Record<string, true> = {}
) => {
  const data = profiles[profileName];

  if (!options.roleAssumer) {
    throw new CredentialsProviderError(
      `Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`,
      false
    );
  }

  const { source_profile } = data;
  if (source_profile && source_profile in visitedProfiles) {
    throw new CredentialsProviderError(
      `Detected a cycle attempting to resolve credentials for profile` +
        ` ${getProfileName(options)}. Profiles visited: ` +
        Object.keys(visitedProfiles).join(", "),
      false
    );
  }

  const sourceCredsProvider = source_profile
    ? resolveProfileData(source_profile, profiles, options, {
        ...visitedProfiles,
        [source_profile]: true,
      })
    : resolveCredentialSource(data.credential_source!, profileName)();

  const params: AssumeRoleParams = {
    RoleArn: data.role_arn!,
    RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
    ExternalId: data.external_id,
  };

  const { mfa_serial } = data;
  if (mfa_serial) {
    if (!options.mfaCodeProvider) {
      throw new CredentialsProviderError(
        `Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`,
        false
      );
    }
    params.SerialNumber = mfa_serial;
    params.TokenCode = await options.mfaCodeProvider(mfa_serial);
  }

  const sourceCreds = await sourceCredsProvider;
  return options.roleAssumer(sourceCreds, params);
};
