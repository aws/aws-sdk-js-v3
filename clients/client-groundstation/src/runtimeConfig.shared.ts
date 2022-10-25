// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GroundStationClientConfig } from "./GroundStationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GroundStationClientConfig) => ({
  apiVersion: "2019-05-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "GroundStation",
  urlParser: config?.urlParser ?? parseUrl,
});
