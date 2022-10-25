// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PanoramaClientConfig } from "./PanoramaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PanoramaClientConfig) => ({
  apiVersion: "2019-07-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Panorama",
  urlParser: config?.urlParser ?? parseUrl,
});
