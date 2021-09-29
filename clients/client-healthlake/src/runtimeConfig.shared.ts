import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { HealthLakeClientConfig } from "./HealthLakeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HealthLakeClientConfig) => ({
  apiVersion: "2017-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "HealthLake",
  urlParser: config?.urlParser ?? parseUrl,
});
