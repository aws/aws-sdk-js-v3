// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTEventsDataClientConfig } from "./IoTEventsDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsDataClientConfig) => ({
  apiVersion: "2018-10-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoT Events Data",
  urlParser: config?.urlParser ?? parseUrl,
});
