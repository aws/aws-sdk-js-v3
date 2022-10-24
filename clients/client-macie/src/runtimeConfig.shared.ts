// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MacieClientConfig } from "./MacieClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MacieClientConfig) => ({
  apiVersion: "2017-12-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Macie",
  urlParser: config?.urlParser ?? parseUrl,
});
