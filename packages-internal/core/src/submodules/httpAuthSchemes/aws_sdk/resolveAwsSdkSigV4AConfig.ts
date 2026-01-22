import { normalizeProvider } from "@smithy/core";
import { LoadedConfigSelectors } from "@smithy/node-config-provider";
import { ProviderError } from "@smithy/property-provider";
import type { Profile, Provider } from "@smithy/types";

/**
 * @public
 */
export interface AwsSdkSigV4AAuthInputConfig {
  /**
   * This option will override the AWS sigv4a
   * signing regionSet from any other source.
   *
   * The lookup order is:
   * 1. this value
   * 2. configuration file value of sigv4a_signing_region_set.
   * 3. environment value of AWS_SIGV4A_SIGNING_REGION_SET.
   * 4. signingRegionSet given by endpoint resolution.
   * 5. the singular region of the SDK client.
   */
  sigv4aSigningRegionSet?: string[] | undefined | Provider<string[] | undefined>;
}

/**
 * @internal
 */
export interface AwsSdkSigV4APreviouslyResolved {}

/**
 * @internal
 */
export interface AwsSdkSigV4AAuthResolvedConfig {
  sigv4aSigningRegionSet: Provider<string[] | undefined>;
}

/**
 * @internal
 */
export const resolveAwsSdkSigV4AConfig = <T>(
  config: T & AwsSdkSigV4AAuthInputConfig & AwsSdkSigV4APreviouslyResolved
): T & AwsSdkSigV4AAuthResolvedConfig => {
  config.sigv4aSigningRegionSet = normalizeProvider(config.sigv4aSigningRegionSet);
  return config as T & AwsSdkSigV4AAuthResolvedConfig;
};

/**
 * @internal
 */
export const NODE_SIGV4A_CONFIG_OPTIONS: LoadedConfigSelectors<string[] | undefined> = {
  environmentVariableSelector(env: Record<string, string | undefined>): string[] | undefined {
    if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
      return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_) => _.trim());
    }
    throw new ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
      tryNextLink: true,
    });
  },
  configFileSelector(profile: Profile): string[] | undefined {
    if (profile.sigv4a_signing_region_set) {
      return ((profile.sigv4a_signing_region_set as string) ?? "").split(",").map((_) => _.trim());
    }
    throw new ProviderError("sigv4a_signing_region_set not set in profile.", {
      tryNextLink: true,
    });
  },
  default: undefined,
};
