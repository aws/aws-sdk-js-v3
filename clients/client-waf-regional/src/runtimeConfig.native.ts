// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { WAFRegionalClientConfig } from "./WAFRegionalClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFRegionalClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
