// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WAFRegionalClientConfig } from "./WAFRegionalClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFRegionalClientConfig) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WAF Regional",
  urlParser: config?.urlParser ?? parseUrl,
});
