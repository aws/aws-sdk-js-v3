// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GlacierClientConfig } from "./GlacierClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlacierClientConfig) => ({
  apiVersion: "2012-06-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Glacier",
  urlParser: config?.urlParser ?? parseUrl,
});
