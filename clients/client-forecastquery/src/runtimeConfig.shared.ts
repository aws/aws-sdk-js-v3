// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ForecastqueryClientConfig } from "./ForecastqueryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ForecastqueryClientConfig) => ({
  apiVersion: "2018-06-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "forecastquery",
  urlParser: config?.urlParser ?? parseUrl,
});
