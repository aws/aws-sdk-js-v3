import { Sha256 } from "@aws-crypto/sha256-js";
import { WebSocketHandler, eventStreamPayloadHandler } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { TranscribeStreamingClientConfig } from "./TranscribeStreamingClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranscribeStreamingClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    runtime: "react-native",
    eventStreamPayloadHandlerProvider: coalesce(
      config.eventStreamPayloadHandlerProvider,
      () => eventStreamPayloadHandler
    ),
    requestHandler: coalesce(config.requestHandler, new WebSocketHandler()),
    sha256: coalesce(config.sha256, Sha256),
  };
};
