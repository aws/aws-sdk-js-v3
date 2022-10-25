// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { RAMClientConfig } from "./RAMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RAMClientConfig) => ({
  apiVersion: "2018-01-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "RAM",
  urlParser: config?.urlParser ?? parseUrl,
});
