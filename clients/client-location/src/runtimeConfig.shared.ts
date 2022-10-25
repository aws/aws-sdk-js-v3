// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { LocationClientConfig } from "./LocationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LocationClientConfig) => ({
  apiVersion: "2020-11-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Location",
  urlParser: config?.urlParser ?? parseUrl,
});
