// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WAFClientConfig } from "./WAFClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFClientConfig) => ({
  apiVersion: "2015-08-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WAF",
  urlParser: config?.urlParser ?? parseUrl,
});
