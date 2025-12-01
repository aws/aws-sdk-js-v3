// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";
import { invalidFunction } from "@smithy/invalid-dependency";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SageMakerRuntimeHTTP2ClientConfig } from "./SageMakerRuntimeHTTP2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerRuntimeHTTP2ClientConfig) => {
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
