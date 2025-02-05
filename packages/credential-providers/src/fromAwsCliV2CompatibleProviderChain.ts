import { remoteProvider } from "@aws-sdk/credential-provider-node/src/remoteProvider";
import { createCredentialChain } from "@aws-sdk/credential-providers";
import type { RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";

interface AwsCliV2CompatibleProviderOptions extends Partial<AwsCredentialIdentity> {
  profile?: string;
  logger?: Console;
}

/**
 * Custom AWS CLI V2 Compatible Credential Provider Chain.
 * Uses dynamic imports and `createCredentialChain` to mimic AWS CLI V2 behavior.
 */
export const fromAwsCliV2CompatibleProviderChain =
  (_init: AwsCliV2CompatibleProviderOptions = {}): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig } = {}): Promise<AwsCredentialIdentity> => {
    // Merge init with caller's client config (profile/region).
    const init: AwsCliV2CompatibleProviderOptions = {
      ..._init,
      ...callerClientConfig,
      logger: (_init.logger ?? callerClientConfig?.logger ?? console) as Console,
    };

    init.logger?.debug("@aws-sdk/custom-credential-chain - Initializing credential chain");

    const { profile, ...awsCredentials } = init;

    // 1. If credentials are explicitly provided, return them.
    if (awsCredentials.accessKeyId && awsCredentials.secretAccessKey) {
      init.logger?.debug("@aws-sdk/custom-credential-chain - Using credentials from constructor");
      return awsCredentials as AwsCredentialIdentity;
    }

    // 2. If a profile is explicitly passed, use `fromIni`.
    if (profile) {
      init.logger?.debug("@aws-sdk/custom-credential-chain - Using fromIni with profile:", profile);
      const { fromIni } = await import("@aws-sdk/credential-provider-ini");
      return createCredentialChain(fromIni({ profile }))();
    }

    init.logger?.debug("@aws-sdk/cli-compatible-chain - Using from custom credential chain.");
    return createCredentialChain(
      async () => {
        init.logger?.debug("@aws-sdk/cli-compatible-chain - Trying fromEnv");
        const { fromEnv } = await import("@aws-sdk/credential-provider-env");
        return fromEnv()();
      },
      async () => {
        init.logger?.debug("@aws-sdk/cli-compatible-chain - Trying fromTokenFile");
        const { fromTokenFile } = await import("@aws-sdk/credential-provider-web-identity");
        return fromTokenFile()();
      },
      async () => {
        init.logger?.debug("@aws-sdk/cli-compatible-chain - Trying fromSSO");
        const { fromSSO } = await import("@aws-sdk/credential-provider-sso");
        return fromSSO()();
      },
      async () => {
        init.logger?.debug("@aws-sdk/cli-compatible-chain- Trying fromProcess");
        const { fromProcess } = await import("@aws-sdk/credential-provider-process");
        return fromProcess()();
      },
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
        return (await remoteProvider(init))();
      },
      async () => {
        init.logger?.debug("@aws-sdk/custom-credential-chain - No valid credentials found. Throwing error.");
        throw new CredentialsProviderError("Could not load credentials from any providers", {
          tryNextLink: false,
          logger: init.logger,
        });
      }
    )();
  };
