// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ResiliencehubClientConfig } from "./ResiliencehubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ResiliencehubClientConfig) => ({
  apiVersion: "2020-04-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "resiliencehub",
  urlParser: config?.urlParser ?? parseUrl,
});
