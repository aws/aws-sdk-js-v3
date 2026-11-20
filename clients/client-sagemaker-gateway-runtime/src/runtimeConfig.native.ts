// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SageMakerGatewayRuntimeClientConfig } from "./SageMakerGatewayRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerGatewayRuntimeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
