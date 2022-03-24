import { getProfileName, parseKnownFiles } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider } from "@aws-sdk/types";

import { resolveProcessCredentials } from "./resolveProcessCredentials";

/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export const fromProcess = (): CredentialProvider => async () => {
  const profiles = await parseKnownFiles();
  return resolveProcessCredentials(getProfileName(), profiles);
};
