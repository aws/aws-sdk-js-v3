// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SSMQuickSetupClientConfig } from "./SSMQuickSetupClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMQuickSetupClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
