import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromContainerMetadata, fromInstanceMetadata } from "@aws-sdk/credential-provider-imds";
import { fromSSO, isSsoProfile, validateSsoProfile } from "@aws-sdk/credential-provider-sso";
import { AssumeRoleWithWebIdentityParams, fromTokenFile } from "@aws-sdk/credential-provider-web-identity";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { ParsedIniData, Profile } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { getMasterProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/util-credentials";

/**
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

export interface FromIniInit extends SourceProfileInit {
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
  roleAssumer?: (sourceCreds: Credentials, params: AssumeRoleParams) => Promise<Credentials>;

  /**
   * A function that assumes a role with web identity and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumerWithWebIdentity?: (params: AssumeRoleWithWebIdentityParams) => Promise<Credentials>;
}

interface StaticCredsProfile extends Profile {
  aws_access_key_id: string;
  aws_secret_access_key: string;
  aws_session_token?: string;
}

const isStaticCredsProfile = (arg: any): arg is StaticCredsProfile =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.aws_access_key_id === "string" &&
  typeof arg.aws_secret_access_key === "string" &&
  ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;

interface WebIdentityProfile extends Profile {
  web_identity_token_file: string;
  role_arn: string;
  role_session_name?: string;
}

const isWebIdentityProfile = (arg: any): arg is WebIdentityProfile =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.web_identity_token_file === "string" &&
  typeof arg.role_arn === "string" &&
  ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;

interface AssumeRoleWithSourceProfile extends Profile {
  role_arn: string;
  source_profile: string;
}

interface AssumeRoleWithProviderProfile extends Profile {
  role_arn: string;
  credential_source: string;
}

const isAssumeRoleProfile = (arg: any) =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.role_arn === "string" &&
  ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
  ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
  ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1;

const isAssumeRoleWithSourceProfile = (arg: any): arg is AssumeRoleWithSourceProfile =>
  isAssumeRoleProfile(arg) && typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";

const isAssumeRoleWithProviderProfile = (arg: any): arg is AssumeRoleWithProviderProfile =>
  isAssumeRoleProfile(arg) && typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";

/**
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
export const fromIni =
  (init: FromIniInit = {}): CredentialProvider =>
  async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProfileData(getMasterProfileName(init), profiles, init);
  };

const resolveProfileData = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  visitedProfiles: { [profileName: string]: true } = {}
): Promise<Credentials> => {
  const data = profiles[profileName];

  // If this is not the first profile visited, static credentials should be
  // preferred over role assumption metadata. This special treatment of
  // second and subsequent hops is to ensure compatibility with the AWS CLI.
  if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data);
  }

  // If this is the first profile visited, role assumption keys should be
  // given precedence over static credentials.
  if (isAssumeRoleWithSourceProfile(data) || isAssumeRoleWithProviderProfile(data)) {
    const {
      external_id: ExternalId,
      mfa_serial,
      role_arn: RoleArn,
      role_session_name: RoleSessionName = "aws-sdk-js-" + Date.now(),
      source_profile,
      credential_source,
    } = data;

    if (!options.roleAssumer) {
      throw new CredentialsProviderError(
        `Profile ${profileName} requires a role to be assumed, but no` + ` role assumption callback was provided.`,
        false
      );
    }

    if (source_profile && source_profile in visitedProfiles) {
      throw new CredentialsProviderError(
        `Detected a cycle attempting to resolve credentials for profile` +
          ` ${getMasterProfileName(options)}. Profiles visited: ` +
          Object.keys(visitedProfiles).join(", "),
        false
      );
    }

    const sourceCreds = source_profile
      ? resolveProfileData(source_profile, profiles, options, {
          ...visitedProfiles,
          [source_profile]: true,
        })
      : resolveCredentialSource(credential_source!, profileName)();

    const params: AssumeRoleParams = { RoleArn, RoleSessionName, ExternalId };
    if (mfa_serial) {
      if (!options.mfaCodeProvider) {
        throw new CredentialsProviderError(
          `Profile ${profileName} requires multi-factor authentication,` + ` but no MFA code callback was provided.`,
          false
        );
      }
      params.SerialNumber = mfa_serial;
      params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }

    return options.roleAssumer(await sourceCreds, params);
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
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = validateSsoProfile(data);
    return fromSSO({
      ssoStartUrl: sso_start_url,
      ssoAccountId: sso_account_id,
      ssoRegion: sso_region,
      ssoRoleName: sso_role_name,
    })();
  }

  // If the profile cannot be parsed or contains neither static credentials
  // nor role assumption metadata, throw an error. This should be considered a
  // terminal resolution error if a profile has been specified by the user
  // (whether via a parameter, an environment variable, or another profile's
  // `source_profile` key).
  throw new CredentialsProviderError(
    `Profile ${profileName} could not be found or parsed in shared` + ` credentials file.`
  );
};

/**
 * Resolve the `credential_source` entry from the profile, and return the
 * credential providers respectively. No memoization is needed for the
 * credential source providers because memoization should be added outside the
 * fromIni() provider. The source credential needs to be refreshed every time
 * fromIni() is called.
 */
const resolveCredentialSource = (credentialSource: string, profileName: string): CredentialProvider => {
  const sourceProvidersMap: { [name: string]: () => CredentialProvider } = {
    EcsContainer: fromContainerMetadata,
    Ec2InstanceMetadata: fromInstanceMetadata,
    Environment: fromEnv,
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource]();
  } else {
    throw new CredentialsProviderError(
      `Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
        `expected EcsContainer or Ec2InstanceMetadata or Environment.`
    );
  }
};

const resolveStaticCredentials = (profile: StaticCredsProfile): Promise<Credentials> =>
  Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
  });

const resolveWebIdentityCredentials = async (profile: WebIdentityProfile, options: FromIniInit): Promise<Credentials> =>
  fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
  })();
