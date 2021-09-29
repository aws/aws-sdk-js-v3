import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { QLDBClientConfig } from "./QLDBClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QLDBClientConfig) => ({
  apiVersion: "2019-01-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "QLDB",
  urlParser: config?.urlParser ?? parseUrl,
});
