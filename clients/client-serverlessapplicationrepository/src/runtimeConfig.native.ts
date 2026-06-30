// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { ServerlessApplicationRepositoryClientConfig } from "./ServerlessApplicationRepositoryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServerlessApplicationRepositoryClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
