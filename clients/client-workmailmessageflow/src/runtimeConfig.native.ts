// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { WorkMailMessageFlowClientConfig } from "./WorkMailMessageFlowClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailMessageFlowClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
