import { CredentialsProviderError } from "@smithy/property-provider";
import type { AwsCredentialIdentity, ParsedIniData } from "@smithy/types";

import { FromIniInit } from "./fromIni";
import { isAssumeRoleProfile, resolveAssumeRoleCredentials } from "./resolveAssumeRoleCredentials";
import { isProcessProfile, resolveProcessCredentials } from "./resolveProcessCredentials";
import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";
import { isStaticCredsProfile, resolveStaticCredentials } from "./resolveStaticCredentials";
import { isWebIdentityProfile, resolveWebIdentityCredentials } from "./resolveWebIdentityCredentials";

/**
 * @internal
 */
export type ResolveProfileData = typeof resolveProfileData;

/**
 * @internal
 */
export const resolveProfileData = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
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
    return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles, resolveProfileData);
  }

  // If no role assumption metadata is present, attempt to load static
  // credentials from the selected profile.
  if (isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data, options);
  }

  // If no static credentials are present, attempt to assume role with
  // web identity if web_identity_token_file and role_arn is available
  if (isWebIdentityProfile(data)) {
    return resolveWebIdentityCredentials(data, options);
  }

  // If no web identity is present, attempt to assume role with
  // process if credential_process is available
  if (isProcessProfile(data)) {
    return resolveProcessCredentials(options, profileName);
  }

  if (isSsoProfile(data)) {
    return await resolveSsoCredentials(profileName, data, options);
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
