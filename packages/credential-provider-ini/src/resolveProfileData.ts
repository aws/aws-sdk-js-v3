import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { AwsCredentialIdentity, ParsedIniData } from "@aws-sdk/types";

import { FromIniInit } from "./fromIni";
import { isAssumeRoleProfile, resolveAssumeRoleCredentials } from "./resolveAssumeRoleCredentials";
import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";
import { isStaticCredsProfile, resolveStaticCredentials } from "./resolveStaticCredentials";
import { isWebIdentityProfile, resolveWebIdentityCredentials } from "./resolveWebIdentityCredentials";

export const resolveProfileData = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  visitedProfiles: Record<string, true> = {}
): Promise<AwsCredentialIdentity> => {
  const data = profiles[profileName];

  // If this is not the first profile visited, static credentials should be
  // preferred over role assumption metadata. This special treatment of
  // second and subsequent hops is to ensure compatibility with the AWS CLI.
  if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data);
  }

  // If this is the first profile visited, role assumption keys should be
  // given precedence over static credentials.
  if (isAssumeRoleProfile(data)) {
    return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
  }

  // If no role assumption metadata is present, attempt to load static
  // credentials from the selected profile.
  if (isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data);
  }

  // If no static credentials are present, attempt to assume role with
  // web identity if web_identity_token_file and role_arn is available
  if (isWebIdentityProfile(data)) {
    return resolveWebIdentityCredentials(data, options);
  }

  if (isSsoProfile(data)) {
    return resolveSsoCredentials(data);
  }

  // If the profile cannot be parsed or contains neither static credentials
  // nor role assumption metadata, throw an error. This should be considered a
  // terminal resolution error if a profile has been specified by the user
  // (whether via a parameter, an environment variable, or another profile's
  // `source_profile` key).
  throw new CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};
