// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTFleetHubClientConfig } from "./IoTFleetHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTFleetHubClientConfig) => ({
  apiVersion: "2020-11-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoTFleetHub",
  urlParser: config?.urlParser ?? parseUrl,
});
