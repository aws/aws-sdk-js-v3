// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTThingsGraphClientConfig } from "./IoTThingsGraphClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTThingsGraphClientConfig) => ({
  apiVersion: "2018-09-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoTThingsGraph",
  urlParser: config?.urlParser ?? parseUrl,
});
