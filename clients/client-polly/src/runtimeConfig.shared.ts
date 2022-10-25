// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PollyClientConfig } from "./PollyClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PollyClientConfig) => ({
  apiVersion: "2016-06-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Polly",
  urlParser: config?.urlParser ?? parseUrl,
});
