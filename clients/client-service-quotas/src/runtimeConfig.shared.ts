// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ServiceQuotasClientConfig } from "./ServiceQuotasClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceQuotasClientConfig) => ({
  apiVersion: "2019-06-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Service Quotas",
  urlParser: config?.urlParser ?? parseUrl,
});
