// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SSMGuiConnectClientConfig } from "./SSMGuiConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMGuiConnectClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
