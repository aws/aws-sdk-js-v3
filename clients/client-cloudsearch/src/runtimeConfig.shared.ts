// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CloudSearchClientConfig } from "./CloudSearchClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudSearchClientConfig) => ({
  apiVersion: "2013-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "CloudSearch",
  urlParser: config?.urlParser ?? parseUrl,
});
