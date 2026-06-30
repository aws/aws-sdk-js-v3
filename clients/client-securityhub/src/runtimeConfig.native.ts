// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SecurityHubClientConfig } from "./SecurityHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecurityHubClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
