// smithy-typescript generated code
import { invalidFunction } from "@smithy/core/client";

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
    eventStreamPayloadHandlerProvider: config?.eventStreamPayloadHandlerProvider ?? (() => ({
      handle: invalidFunction("event stream request is not supported in ReactNative."),
    })),
  };
};
