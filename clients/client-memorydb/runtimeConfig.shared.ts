import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MemoryDBClientConfig } from "./MemoryDBClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MemoryDBClientConfig = {}) => ({
  apiVersion: "2021-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MemoryDB",
  urlParser: config.urlParser ?? parseUrl,
});
