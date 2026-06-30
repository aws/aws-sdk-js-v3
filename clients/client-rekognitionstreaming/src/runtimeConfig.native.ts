// smithy-typescript generated code
import { invalidFunction } from "@smithy/core/client";

import type { RekognitionStreamingClientConfig } from "./RekognitionStreamingClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RekognitionStreamingClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    eventStreamPayloadHandlerProvider: config?.eventStreamPayloadHandlerProvider ?? (() => ({
      handle: invalidFunction("event stream request is not supported in ReactNative."),
    })),
  };
};
