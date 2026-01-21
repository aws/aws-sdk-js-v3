import type { CredentialProviderOptions, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { getProfileName, parseKnownFiles, SourceProfileInit } from "@smithy/shared-ini-file-loader";

import { resolveProcessCredentials } from "./resolveProcessCredentials";

/**
 * @internal
 */
export interface FromProcessInit extends SourceProfileInit, CredentialProviderOptions {}

/**
 * @internal
 *
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export const fromProcess =
  (init: FromProcessInit = {}): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig } = {}) => {
    init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
    const profiles = await parseKnownFiles(init);
    return resolveProcessCredentials(
      getProfileName({
        profile: init.profile ?? callerClientConfig?.profile,
      }),
      profiles,
      init.logger
    );
  };
