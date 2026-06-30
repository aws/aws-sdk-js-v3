// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { StorageGatewayClientConfig } from "./StorageGatewayClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: StorageGatewayClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
