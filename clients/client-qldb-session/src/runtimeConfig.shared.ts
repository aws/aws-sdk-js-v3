import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { QLDBSessionClientConfig } from "./QLDBSessionClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QLDBSessionClientConfig) => ({
  apiVersion: "2019-07-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "QLDB Session",
  urlParser: config?.urlParser ?? parseUrl,
});
