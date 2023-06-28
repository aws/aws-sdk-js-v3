import { getProfileName, parseKnownFiles, SourceProfileInit } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentityProvider } from "@smithy/types";

import { resolveProcessCredentials } from "./resolveProcessCredentials";

/**
 * @internal
 */
export interface FromProcessInit extends SourceProfileInit {}

/**
 * @internal
 *
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export const fromProcess =
  (init: FromProcessInit = {}): AwsCredentialIdentityProvider =>
  async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProcessCredentials(getProfileName(init), profiles);
  };
