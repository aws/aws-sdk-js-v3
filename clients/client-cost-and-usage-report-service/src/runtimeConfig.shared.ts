// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CostAndUsageReportServiceClientConfig } from "./CostAndUsageReportServiceClient";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CostAndUsageReportServiceClientConfig) => ({
  apiVersion: "2017-01-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Cost and Usage Report Service",
  urlParser: config?.urlParser ?? parseUrl,
});
