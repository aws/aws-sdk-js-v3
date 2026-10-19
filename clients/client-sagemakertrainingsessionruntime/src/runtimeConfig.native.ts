// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SageMakerTrainingSessionRuntimeClientConfig } from "./SageMakerTrainingSessionRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerTrainingSessionRuntimeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
