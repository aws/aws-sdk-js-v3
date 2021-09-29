import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ServiceQuotasClientConfig } from "./ServiceQuotasClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceQuotasClientConfig) => ({
  apiVersion: "2019-06-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Service Quotas",
  urlParser: config?.urlParser ?? parseUrl,
});
