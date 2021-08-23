import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DataSyncClientConfig } from "./DataSyncClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataSyncClientConfig) => ({
  apiVersion: "2018-11-09",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "DataSync",
  urlParser: config?.urlParser ?? parseUrl,
});
