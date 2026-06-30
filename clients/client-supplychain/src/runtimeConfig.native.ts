// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SupplyChainClientConfig } from "./SupplyChainClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupplyChainClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
