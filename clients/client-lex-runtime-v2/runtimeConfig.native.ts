import { Sha256 } from "@aws-crypto/sha256-js";
import { invalidFunction } from "@aws-sdk/invalid-dependency";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { LexRuntimeV2ClientConfig } from "./LexRuntimeV2Client";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexRuntimeV2ClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    runtime: "react-native",
    eventStreamPayloadHandlerProvider: coalesce(config.eventStreamPayloadHandlerProvider, () => ({
      handle: invalidFunction("event stream request is not supported in ReactNative."),
    })),
    sha256: coalesce(config.sha256, Sha256),
  };
};
