// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { WorkSpacesThinClientClientConfig } from "./WorkSpacesThinClientClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesThinClientClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
