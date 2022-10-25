// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTDataPlaneClientConfig } from "./IoTDataPlaneClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTDataPlaneClientConfig) => ({
  apiVersion: "2015-05-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoT Data Plane",
  urlParser: config?.urlParser ?? parseUrl,
});
