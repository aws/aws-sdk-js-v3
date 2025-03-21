import type { DefaultProviderInit } from "@aws-sdk/credential-provider-node";
import type { RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";

/**
 * @public
 */
export type AwsCliV2CompatibleProviderOptions = Partial<AwsCredentialIdentity> & DefaultProviderInit;

/**
 * Creates an alternate form of the AWS SDK for JavaScript's fromNodeProviderChain.
 * This differs in ways that makes it behave more like the AWS CLI v2:
 * 1. It allows inline static credentials.
 * 2. It checks AWS_DEFAULT_PROFILE in addition to AWS_PROFILE.
 * 3. It prioritizes fromIni if a profile is set.
 * Otherwise, it behaves as fromNodeProviderChain.
 *
 * @public
 *
 * @param _init - Configuration options for the provider chain.
 * @returns An AWS credential provider.
 */
export const fromAwsCliV2CompatibleProviderChain =
  (_init: AwsCliV2CompatibleProviderOptions = {}): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig } = {}): Promise<AwsCredentialIdentity> => {
    // Merge init with caller's client config (profile/region).
    const init: AwsCliV2CompatibleProviderOptions = {
      ..._init,
      profile:
        _init.profile ?? callerClientConfig?.profile ?? process.env.AWS_PROFILE ?? process.env.AWS_DEFAULT_PROFILE,
      logger: _init.logger ?? callerClientConfig?.logger,
    };
    const { profile, accessKeyId, secretAccessKey, sessionToken, expiration, accountId } = init;

    const debug = init.logger?.debug ?? (() => {});

    debug("@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - init");

    // 1. If credentials are explicitly provided, return them.
    if (accessKeyId && secretAccessKey) {
      debug("@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - static credentials from init");
      return {
        accessKeyId,
        secretAccessKey,
        ...(sessionToken && { sessionToken }),
        ...(expiration && { expiration }),
        ...(accountId && { accountId }),
      } as AwsCredentialIdentity;
    }

    // 2. If a profile is explicitly passed, use `fromIni`.
    if (profile) {
      debug(
        `@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - Using fromIni with profile: ${profile}`
      );
      const { fromIni } = await import("@aws-sdk/credential-provider-ini");
      return fromIni(init)({ callerClientConfig });
    }

    // 3. Defer to AWS SDK credential chain.
    debug("@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - defer to fromNodeProviderChain");
    const { defaultProvider: fromNodeProviderChain } = await import("@aws-sdk/credential-provider-node");
    return fromNodeProviderChain(init)({
      // todo: fromNodeProviderChain should be changed to RuntimeConfigAwsCredentialIdentityProvider.
    });
  };
