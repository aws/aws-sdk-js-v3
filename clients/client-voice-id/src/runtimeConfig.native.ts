// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { VoiceIDClientConfig } from "./VoiceIDClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: VoiceIDClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
