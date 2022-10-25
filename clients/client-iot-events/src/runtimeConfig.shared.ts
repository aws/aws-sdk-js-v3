// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTEventsClientConfig } from "./IoTEventsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsClientConfig) => ({
  apiVersion: "2018-07-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoT Events",
  urlParser: config?.urlParser ?? parseUrl,
});
