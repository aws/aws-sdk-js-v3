import { Provider } from "@smithy/types";
import { normalizeProvider } from "@smithy/util-middleware";

/**
 * @public
 */
export interface ApiKeyInputConfig {
  /**
   * The API key to use when making requests.
   *
   * This is optional because some operations may not require an API key.
   */
  apiKey?: string | Provider<string>;
}

export interface ApiKeyPreviouslyResolved {}

export interface ApiKeyResolvedConfig {
  /**
   * The API key to use when making requests.
   *
   * This is optional because some operations may not require an API key.
   */
  apiKey?: Provider<string>;
}

// We have to provide a resolve function when we have config, even if it doesn't
// actually do anything to the input value. "If any of inputConfig, resolvedConfig,
// or resolveFunction are set, then all of inputConfig, resolvedConfig, and
// resolveFunction must be set."
export const resolveApiKeyConfig = <T>(
  input: T & ApiKeyPreviouslyResolved & ApiKeyInputConfig
): T & ApiKeyResolvedConfig => {
  return {
    ...input,
    apiKey: input.apiKey ? normalizeProvider(input.apiKey) : undefined,
  };
};
