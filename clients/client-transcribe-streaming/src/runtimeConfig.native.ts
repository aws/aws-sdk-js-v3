// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";
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
    sha256: config?.sha256 ?? Sha256,
  };
};
