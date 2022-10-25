// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { HoneycodeClientConfig } from "./HoneycodeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HoneycodeClientConfig) => ({
  apiVersion: "2020-03-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Honeycode",
  urlParser: config?.urlParser ?? parseUrl,
});
