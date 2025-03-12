import type { FromEnvInit } from "@aws-sdk/credential-provider-env";
import type { FromIniInit } from "@aws-sdk/credential-provider-ini";
import type { FromProcessInit } from "@aws-sdk/credential-provider-process";
import type { FromSSOInit } from "@aws-sdk/credential-provider-sso";
import type { FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import type { RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { type RemoteProviderInit, fromInstanceMetadata } from "@smithy/credential-provider-imds";
import { CredentialsProviderError } from "@smithy/property-provider";
import type { AwsCredentialIdentity, Logger } from "@smithy/types";

import { createCredentialChain } from "./createCredentialChain";

/**
 * @public
 */

export type AwsCliV2CompatibleProviderOptions = Partial<AwsCredentialIdentity> &
  FromEnvInit &
  FromIniInit &
  RemoteProviderInit &
  FromProcessInit &
  FromSSOInit &
  FromTokenFileInit & {
    /**
     * The name of the profile to use while loading credentials.
     * If specified, credentials will be loaded from the shared credentials file
     * or shared config file using this profile.
     * If not specified, the provider chain will attempt to load credentials from
     * other sources according to order of precedence.
     *
     */
    profile?: string;

    /**
     * Optional logger for logging debug/info/warn/error.
     */
    logger?: Logger;
  };

/**
 * @public
 *
 * Creates a credential provider that sources credentials using the same priority
 * chain as the AWS CLI v2:
 *
 * 1. Static credentials from initialization.
 * 2. Profile credentials (if profile specified).
 * 3. Environment variables.
 * 4. Web Identity Token credentials.
 * 5. SSO credentials.
 * 6. Process credentials.
 * 7. Remote credentials (ECS, EC2 Instance Metadata).
 *
 * Uses dynamic imports and `createCredentialChain` to mimic AWS CLI V2 behavior.
 *
 * @param init - Configuration options for the provider chain
 * @returns An AWS credential provider function
 */

export const fromAwsCliV2CompatibleProviderChain =
  (_init: AwsCliV2CompatibleProviderOptions = {}): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig } = {}): Promise<AwsCredentialIdentity> => {
    // Merge init with caller's client config (profile/region).
    const init: AwsCliV2CompatibleProviderOptions = {
      ..._init,
      ...callerClientConfig,
      profile: _init.profile ?? callerClientConfig?.profile,
      logger: _init.logger ?? callerClientConfig?.logger,
    };

    init.logger?.debug(
      "@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - Initializing credential chain"
    );

    const { profile, logger, accessKeyId, secretAccessKey, sessionToken, expiration, ...rest } = init;

    // 1. If credentials are explicitly provided, return them.
    if (accessKeyId && secretAccessKey) {
      logger?.debug(
        "@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - using static credentials from initialization"
      );
      return {
        accessKeyId,
        secretAccessKey,
        ...(sessionToken && { sessionToken }),
        ...(expiration && { expiration }),
      } as AwsCredentialIdentity;
    }

    // 2. If a profile is explicitly passed, use `fromIni`.
    if (profile) {
      logger?.debug(
        "@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - Using fromIni with profile:" + profile
      );
      const { fromIni } = await import("@aws-sdk/credential-provider-ini");
      return fromIni({ profile, logger, ...init })();
    }

    logger?.debug(
      "@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - Using from custom credential chain."
    );
    return createCredentialChain(
      async () => {
        const { fromEnv } = await import("@aws-sdk/credential-provider-env");
        return fromEnv(init)();
      },
      async () => {
        const { fromTokenFile } = await import("@aws-sdk/credential-provider-web-identity");
        return fromTokenFile(init)();
      },
      async () => {
        const { fromSSO } = await import("@aws-sdk/credential-provider-sso");
        return fromSSO(init)();
      },
      async () => {
        const { fromProcess } = await import("@aws-sdk/credential-provider-process");
        return fromProcess(init)();
      },
      async () => {
        logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
        return fromInstanceMetadata(init)();
      },
      async () => {
        throw new CredentialsProviderError("Could not load credentials from any providers", {
          tryNextLink: false,
          logger,
        });
      }
    )();
  };
