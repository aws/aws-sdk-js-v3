// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTAnalyticsClientConfig } from "./IoTAnalyticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTAnalyticsClientConfig) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoTAnalytics",
  urlParser: config?.urlParser ?? parseUrl,
});
