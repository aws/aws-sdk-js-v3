// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTFleetWiseClientConfig } from "./IoTFleetWiseClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTFleetWiseClientConfig) => ({
  apiVersion: "2021-06-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoTFleetWise",
  urlParser: config?.urlParser ?? parseUrl,
});
