import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { AwsCredentialIdentity, ParsedIniData } from "@aws-sdk/types";
import { exec } from "child_process";
import { promisify } from "util";

import { getValidatedProcessCredentials } from "./getValidatedProcessCredentials";
import { ProcessCredentials } from "./ProcessCredentials";

export const resolveProcessCredentials = async (profileName: string, profiles: ParsedIniData): Promise<AwsCredentialIdentity> => {
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
        return getValidatedProcessCredentials(profileName, data as ProcessCredentials);
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
