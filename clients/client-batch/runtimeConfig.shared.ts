import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { BatchClientConfig } from "./BatchClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BatchClientConfig) => ({
  apiVersion: "2016-08-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Batch",
  urlParser: config?.urlParser ?? parseUrl,
});
