// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SecurityAgentClientConfig } from "./SecurityAgentClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecurityAgentClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
