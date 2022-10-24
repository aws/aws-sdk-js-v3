// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SnowballClientConfig } from "./SnowballClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SnowballClientConfig) => ({
  apiVersion: "2016-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Snowball",
  urlParser: config?.urlParser ?? parseUrl,
});
