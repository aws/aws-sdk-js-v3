// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SustainabilityClientConfig } from "./SustainabilityClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SustainabilityClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
