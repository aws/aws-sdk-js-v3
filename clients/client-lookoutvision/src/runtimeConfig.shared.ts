// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { LookoutVisionClientConfig } from "./LookoutVisionClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LookoutVisionClientConfig) => ({
  apiVersion: "2020-11-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "LookoutVision",
  urlParser: config?.urlParser ?? parseUrl,
});
