import { Sha256 } from "@aws-crypto/sha256-js";
import { invalidFunction } from "@aws-sdk/invalid-dependency";
import { LexRuntimeV2ClientConfig } from "./LexRuntimeV2Client";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexRuntimeV2ClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    eventStreamPayloadHandlerProvider:
      config?.eventStreamPayloadHandlerProvider ??
      (() => ({ handle: invalidFunction("event stream request is not supported in ReactNative.") })),
    sha256: config?.sha256 ?? Sha256,
  };
};
