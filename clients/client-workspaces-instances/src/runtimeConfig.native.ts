// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { WorkspacesInstancesClientConfig } from "./WorkspacesInstancesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkspacesInstancesClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
