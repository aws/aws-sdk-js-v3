// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { NimbleClientConfig } from "./NimbleClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NimbleClientConfig) => ({
  apiVersion: "2020-08-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "nimble",
  urlParser: config?.urlParser ?? parseUrl,
});
