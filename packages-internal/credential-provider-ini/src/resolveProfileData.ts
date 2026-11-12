import type { AwsIdentityProperties } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/core/config";
import type { AwsCredentialIdentity, IniSection, ParsedIniData } from "@smithy/types";

import type { FromIniInit } from "./fromIni";
import { isAssumeRoleProfile, resolveAssumeRoleCredentials } from "./resolveAssumeRoleCredentials";
import { isLoginProfile, resolveLoginCredentials } from "./resolveLoginCredentials";
import { isProcessProfile, resolveProcessCredentials } from "./resolveProcessCredentials";
import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";
import { isStaticCredsProfile, resolveStaticCredentials } from "./resolveStaticCredentials";
import { isWebIdentityProfile, resolveWebIdentityCredentials } from "./resolveWebIdentityCredentials";

/**
 * @internal
 */
export type ResolveProfileData = typeof resolveProfileData;

export type ProfileCredentialSource = "assumeRole" | "static" | "webIdentity" | "process" | "sso" | "login" | "unknown";

/** Returns the credential source selected by the same precedence as {@link resolveProfileData}. */
export const getProfileCredentialSource = (
  data: IniSection | undefined,
  profileName: string,
  logger?: FromIniInit["logger"]
): ProfileCredentialSource => {
  if (!data) {
    return "unknown";
  }
  if (isAssumeRoleProfile(data, { profile: profileName, logger })) {
    return "assumeRole";
  }
  if (isStaticCredsProfile(data)) {
    return "static";
  }
  if (isWebIdentityProfile(data)) {
    return "webIdentity";
  }
  if (isProcessProfile(data)) {
    return "process";
  }
  if (isSsoProfile(data)) {
    return "sso";
  }
  if (isLoginProfile(data)) {
    return "login";
  }
  return "unknown";
};

/** Whether a profile source is covered by the credential refresh spec. */
export const isCredentialRefreshSource = (source: ProfileCredentialSource): boolean =>
  ["assumeRole", "webIdentity", "sso", "login"].includes(source);

/** Whether a profile is covered by the credential refresh spec. */
export const isProfileInCredentialRefreshScope = (
  data: IniSection | undefined,
  profileName: string,
  logger?: FromIniInit["logger"]
): boolean => isCredentialRefreshSource(getProfileCredentialSource(data, profileName, logger));

/** Resolves the source type selected when the provider was first used. @internal */
export const resolveProfileDataForSource = (
  source: ProfileCredentialSource,
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"],
  rejectedAccessKeyId?: string
): Promise<AwsCredentialIdentity> => {
  const data = profiles[profileName];
  if (!data) {
    return Promise.reject(
      new CredentialsProviderError(
        `Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`,
        { logger: options.logger }
      )
    );
  }
  switch (source) {
    case "assumeRole":
      return resolveAssumeRoleCredentials(profileName, profiles, options, callerClientConfig, {}, resolveProfileData);
    case "static":
      return resolveStaticCredentials(data as Parameters<typeof resolveStaticCredentials>[0], options);
    case "webIdentity":
      return resolveWebIdentityCredentials(
        data as Parameters<typeof resolveWebIdentityCredentials>[0],
        options,
        callerClientConfig
      );
    case "process":
      return resolveProcessCredentials(options, profileName);
    case "sso":
      return resolveSsoCredentials(profileName, data, options, callerClientConfig);
    case "login":
      return resolveLoginCredentials(profileName, options, callerClientConfig, rejectedAccessKeyId);
    default:
      return Promise.reject(
        new CredentialsProviderError(
          `Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`,
          { logger: options.logger }
        )
      );
  }
};

/**
 * @internal
 */
export const resolveProfileData = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"],
  visitedProfiles: Record<string, true> = {},
  /**
   * This override comes from recursive calls only.
   * It is used to flag a recursive profile section
   * that does not have a role_arn, e.g. a credential_source
   * with no role_arn, as part of a larger recursive assume-role
   * call stack, and to re-enter the assume-role resolver function.
   */
  isAssumeRoleRecursiveCall = false
): Promise<AwsCredentialIdentity> => {
  const data = profiles[profileName];

  // If this is not the first profile visited, static credentials should be
  // preferred over role assumption metadata. This special treatment of
  // second and subsequent hops is to ensure compatibility with the AWS CLI.
  if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data, options);
  }

  // If this is the first profile visited, role assumption keys should be
  // given precedence over static credentials.
  if (isAssumeRoleRecursiveCall || isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
    return resolveAssumeRoleCredentials(
      profileName,
      profiles,
      options,
      callerClientConfig,
      visitedProfiles,
      resolveProfileData
    );
  }

  // If no role assumption metadata is present, attempt to load static
  // credentials from the selected profile.
  if (isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data, options);
  }

  // If no static credentials are present, attempt to assume role with
  // web identity if web_identity_token_file and role_arn is available
  if (isWebIdentityProfile(data)) {
    return resolveWebIdentityCredentials(data, options, callerClientConfig);
  }

  // If no web identity is present, attempt to assume role with
  // process if credential_process is available
  if (isProcessProfile(data)) {
    return resolveProcessCredentials(options, profileName);
  }

  if (isSsoProfile(data)) {
    return await resolveSsoCredentials(profileName, data, options, callerClientConfig);
  }

  if (isLoginProfile(data)) {
    return resolveLoginCredentials(profileName, options, callerClientConfig);
  }

  // If the profile cannot be parsed or contains neither static credentials
  // nor role assumption metadata, throw an error. This should be considered a
  // terminal resolution error if a profile has been specified by the user
  // (whether via a parameter, an environment variable, or another profile's
  // `source_profile` key).
  throw new CredentialsProviderError(
    `Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`,
    { logger: options.logger }
  );
};
