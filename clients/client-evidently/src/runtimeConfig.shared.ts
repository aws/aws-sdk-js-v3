// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { EvidentlyClientConfig } from "./EvidentlyClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EvidentlyClientConfig) => ({
  apiVersion: "2021-02-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Evidently",
  urlParser: config?.urlParser ?? parseUrl,
});
