// smithy-typescript generated code
import { invalidFunction } from "@smithy/core/client";

import type { BedrockRuntimeClientConfig } from "./BedrockRuntimeClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BedrockRuntimeClientConfig) => {
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
