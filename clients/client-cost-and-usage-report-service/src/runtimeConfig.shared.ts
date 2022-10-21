// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CostAndUsageReportServiceClientConfig } from "./CostAndUsageReportServiceClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CostAndUsageReportServiceClientConfig) => ({
  apiVersion: "2017-01-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Cost and Usage Report Service",
  urlParser: config?.urlParser ?? parseUrl,
});
