import { CredentialProvider } from "@aws-sdk/types";
import { getMasterProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/util-credentials";

import { resolveProcessCredentials } from "./resolveProcessCredentials";

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
