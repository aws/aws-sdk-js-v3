import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudDirectoryClientConfig } from "./CloudDirectoryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudDirectoryClientConfig) => ({
  apiVersion: "2017-01-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudDirectory",
  urlParser: config?.urlParser ?? parseUrl,
});
