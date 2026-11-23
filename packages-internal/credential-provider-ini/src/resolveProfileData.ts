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

/**
 * The kind of credentials a profile resolves to.
 *
 * @internal
 */
export type ProfileCredentialSource = "assumeRole" | "static" | "webIdentity" | "process" | "sso" | "login" | "unknown";

/**
 * Returns the kind of credentials a profile resolves to, in the order `resolveProfileData` tries them.
 *
 * @internal
 */
export const getProfileCredentialSource = (
  data: IniSection | undefined,
  profileName: string,
  logger?: FromIniInit["logger"]
): ProfileCredentialSource => {
  if (!data) {
    return "unknown";
  }

  // Role assumption keys take precedence over static credentials in the first profile visited.
  if (isAssumeRoleProfile(data, { profile: profileName, logger })) {
    return "assumeRole";
  }

  // If no role assumption metadata is present, load static credentials from the selected profile.
  if (isStaticCredsProfile(data)) {
    return "static";
  }

  // If no static credentials are present, assume role with web identity if web_identity_token_file and role_arn
  // are available.
  if (isWebIdentityProfile(data)) {
    return "webIdentity";
  }

  // If no web identity is present, use credential_process if available.
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

/**
 * Profile source types that use the credential refresh lifecycle. Static and process profiles keep the
 * existing caching.
 *
 * @internal
 */
export const CREDENTIAL_REFRESH_SOURCES: ReadonlySet<ProfileCredentialSource> = new Set([
  "assumeRole",
  "webIdentity",
  "sso",
  "login",
]);

/**
 * Resolves credentials for the source type selected when the provider was first used.
 *
 * @internal
 */
export const resolveProfileDataForSource = (
  source: ProfileCredentialSource,
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"],
  rejectedAccessKeyId?: string
): Promise<AwsCredentialIdentity> =>
  resolveCredentialsForSource({
    // A profile removed since it was first used can no longer be resolved.
    source: profiles[profileName] ? source : "unknown",
    profileName,
    profiles,
    options,
    callerClientConfig,
    rejectedAccessKeyId,
  });

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

  return resolveCredentialsForSource({
    source: isAssumeRoleRecursiveCall ? "assumeRole" : getProfileCredentialSource(data, profileName, options.logger),
    profileName,
    profiles,
    options,
    callerClientConfig,
    visitedProfiles,
  });
};

/**
 * Calls the resolver for one source type. Shared by `resolveProfileData` and `resolveProfileDataForSource`.
 */
const resolveCredentialsForSource = async ({
  source,
  profileName,
  profiles,
  options,
  callerClientConfig,
  visitedProfiles = {},
  rejectedAccessKeyId,
}: {
  source: ProfileCredentialSource;
  profileName: string;
  profiles: ParsedIniData;
  options: FromIniInit;
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"];
  visitedProfiles?: Record<string, true>;
  rejectedAccessKeyId?: string;
}): Promise<AwsCredentialIdentity> => {
  const data = profiles[profileName];
  switch (source) {
    case "assumeRole":
      return resolveAssumeRoleCredentials(
        profileName,
        profiles,
        options,
        callerClientConfig,
        visitedProfiles,
        resolveProfileData
      );
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
      // If the profile cannot be parsed or contains neither static credentials
      // nor role assumption metadata, throw an error. This should be considered a
      // terminal resolution error if a profile has been specified by the user
      // (whether via a parameter, an environment variable, or another profile's
      // `source_profile` key).
      throw new CredentialsProviderError(
        `Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`,
        { logger: options.logger }
      );
  }
};
