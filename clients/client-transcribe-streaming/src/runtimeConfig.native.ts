// smithy-typescript generated code
import { eventStreamPayloadHandler } from "@aws-sdk/middleware-sdk-transcribe-streaming";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { TranscribeStreamingClientConfig } from "./TranscribeStreamingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranscribeStreamingClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    eventStreamPayloadHandlerProvider: config?.eventStreamPayloadHandlerProvider ?? (() => eventStreamPayloadHandler),
  };
};
