// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SagemakerEdgeClientConfig } from "./SagemakerEdgeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SagemakerEdgeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
