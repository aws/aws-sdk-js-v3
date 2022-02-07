import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { ParsedIniData } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { getMasterProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/util-credentials";
import { exec } from "child_process";
import { promisify } from "util";

/**
 * @internal
 */
export const ENV_PROFILE = "AWS_PROFILE";

export interface FromProcessInit extends SourceProfileInit {}

/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export const fromProcess =
  (init: FromProcessInit = {}): CredentialProvider =>
  async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProcessCredentials(getMasterProfileName(init), profiles);
  };

const resolveProcessCredentials = async (profileName: string, profiles: ParsedIniData): Promise<Credentials> => {
  const profile = profiles[profileName];

  if (profiles[profileName]) {
    const credentialProcess = profile["credential_process"];
    if (credentialProcess !== undefined) {
      const execPromise = promisify(exec);
      try {
        const { stdout } = await execPromise(credentialProcess);
        let data;
        try {
          data = JSON.parse(stdout.trim());
        } catch {
          throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
        }
        return validateCredentialsFromProcess(profileName, data);
      } catch (error) {
        throw new CredentialsProviderError(error.message);
      }
    } else {
      throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
    }
  } else {
    // If the profile cannot be parsed or does not contain the default or
    // specified profile throw an error. This should be considered a terminal
    // resolution error if a profile has been specified by the user (whether via
    // a parameter, anenvironment variable, or another profile's `source_profile` key).
    throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
  }
};

const validateCredentialsFromProcess = (profileName: string, data: unknown): Credentials => {
  if (!isProcessCredentials(profileName, data)) {
    return;
  }

  if (data.Version !== 1) {
    throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
  }

  if (data.Expiration) {
    const currentTime = new Date();
    const expireTime = new Date(data.Expiration);
    if (expireTime < currentTime) {
      throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
    }
  }

  return {
    accessKeyId: data.AccessKeyId,
    secretAccessKey: data.SecretAccessKey,
    ...(data.SessionToken && { sessionToken: data.SessionToken }),
    ...(data.Expiration && { expiration: new Date(data.Expiration) }),
  };
};

type ProcessCredentials = {
  Version: number;
  AccessKeyId: string;
  SecretAccessKey: string;
  SessionToken?: string;
  Expiration?: string;
};

const isProcessCredentials = (profileName: string, data: unknown): data is ProcessCredentials => {
  for (const key in ["Version", "AccessKeyId", "SecretAccessKey"]) {
    if ((data as ProcessCredentials)[key] === undefined) {
      throw new Error(`Profile ${profileName} credential_process returned missing value for "${key}".`);
    }
  }
  return true;
};
