// smithy-typescript generated code
import type { KinesisVideoWebRTCStorageClientConfig } from "./KinesisVideoWebRTCStorageClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoWebRTCStorageClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
