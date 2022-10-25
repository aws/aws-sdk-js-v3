// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTClientConfig } from "./IoTClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTClientConfig) => ({
  apiVersion: "2015-05-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoT",
  urlParser: config?.urlParser ?? parseUrl,
});
