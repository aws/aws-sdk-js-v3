// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SageMakerMetricsClientConfig } from "./SageMakerMetricsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerMetricsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
