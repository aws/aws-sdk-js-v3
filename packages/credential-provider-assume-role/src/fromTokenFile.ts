import { AssumeRoleCommandInput, AssumeRoleWithWebIdentityCommandInput } from "@aws-sdk/client-sts";
import { getMasterProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/credential-provider-ini";
import { ProviderError } from "@aws-sdk/property-provider";
import { ParsedIniData, Profile } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { readFileSync } from "fs";

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";

export interface FromTokenFileInit extends SourceProfileInit {
  /**
   * A function that assumes a role with web identity and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumerWithWebIdentity: (params: AssumeRoleWithWebIdentityCommandInput) => Promise<Credentials>;
  /**
   * A function that assumes a role and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumer?: (sourceCreds: Credentials, params: AssumeRoleCommandInput) => Promise<Credentials>;
}

/**
 * Represents OIDC credentials from a file on disk.
 */
export const fromTokenFile = (init: FromTokenFileInit): CredentialProvider => async () => {
  if (process.env[ENV_TOKEN_FILE] && process.env[ENV_ROLE_ARN]) {
    return resolveCredentialsFromEnv(init);
  }
  const profiles = await parseKnownFiles(init);
  return resolveCredentialsFromIni(getMasterProfileName(init), profiles, init);
};

const resolveCredentialsFromEnv = async (options: FromTokenFileInit) => {
  if (!options.roleAssumerWithWebIdentity) {
    throw new ProviderError(
      `Role Arn '${process.env[ENV_ROLE_ARN]}' needs to be assumed with web identity,` +
        ` but no role assumption callback was provided.`,
      false
    );
  }
  return options.roleAssumerWithWebIdentity({
    WebIdentityToken: readFileSync(process.env[ENV_TOKEN_FILE]!, { encoding: "ascii" }),
    RoleArn: process.env[ENV_ROLE_ARN],
    RoleSessionName: process.env[ENV_ROLE_SESSION_NAME] || `aws-sdk-js-session-${Date.now()}`,
  });
};

const resolveCredentialsFromIni = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromTokenFileInit,
  visitedProfiles: { [profileName: string]: true } = {}
): Promise<Credentials> => {
  const data = profiles[profileName];

  if (isAssumeRoleSourceProfile(data)) {
    const {
      role_arn: RoleArn,
      role_session_name: RoleSessionName = `aws-sdk-js-session-${Date.now()}`,
      source_profile,
    } = data;

    if (!options.roleAssumer) {
      throw new ProviderError(
        `Profile '${profileName}' requires a role to be assumed,` + ` but no role assumption callback was provided.`,
        false
      );
    }

    if (source_profile in visitedProfiles) {
      throw new ProviderError(
        `Detected a cycle attempting to resolve credentials for profile` +
          ` ${getMasterProfileName(options)}. Profiles visited: ` +
          Object.keys(visitedProfiles).join(", "),
        false
      );
    }

    const sourceCreds = resolveCredentialsFromIni(source_profile, profiles, options, {
      ...visitedProfiles,
      [source_profile]: true,
    });

    return options.roleAssumer(await sourceCreds, { RoleArn, RoleSessionName });
  } else {
    const {
      web_identity_token_file,
      role_arn: RoleArn,
      role_session_name: RoleSessionName = `aws-sdk-js-session-${Date.now()}`,
    } = data;

    if (!options.roleAssumerWithWebIdentity) {
      throw new ProviderError(
        `Profile '${profileName}' requires a role to be assumed with web identity,` +
          ` but no role assumption callback was provided.`,
        false
      );
    }

    const WebIdentityToken = readFileSync(web_identity_token_file!, { encoding: "ascii" });
    return options.roleAssumerWithWebIdentity({ WebIdentityToken, RoleArn, RoleSessionName });
  }
};

interface AssumeRoleSourceProfile extends Profile {
  role_arn: string;
  source_profile: string;
}

const isAssumeRoleSourceProfile = (arg: any): arg is AssumeRoleSourceProfile =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.role_arn === "string" &&
  typeof arg.source_profile === "string" &&
  ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
  ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
  ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1;
