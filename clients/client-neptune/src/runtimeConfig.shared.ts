// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { NeptuneClientConfig } from "./NeptuneClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NeptuneClientConfig) => ({
  apiVersion: "2014-10-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Neptune",
  urlParser: config?.urlParser ?? parseUrl,
});
