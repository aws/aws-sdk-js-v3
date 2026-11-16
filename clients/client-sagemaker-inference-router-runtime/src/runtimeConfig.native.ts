// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SageMakerInferenceRouterRuntimeClientConfig } from "./SageMakerInferenceRouterRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerInferenceRouterRuntimeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
