// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { ServiceDiscoveryClientConfig } from "./ServiceDiscoveryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceDiscoveryClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
