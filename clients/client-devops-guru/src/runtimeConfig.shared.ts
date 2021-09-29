import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DevOpsGuruClientConfig } from "./DevOpsGuruClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DevOpsGuruClientConfig) => ({
  apiVersion: "2020-12-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "DevOps Guru",
  urlParser: config?.urlParser ?? parseUrl,
});
