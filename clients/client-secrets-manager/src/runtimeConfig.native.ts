// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SecretsManagerClientConfig } from "./SecretsManagerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecretsManagerClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
