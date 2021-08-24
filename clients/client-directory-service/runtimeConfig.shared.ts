import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DirectoryServiceClientConfig } from "./DirectoryServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DirectoryServiceClientConfig) => ({
  apiVersion: "2015-04-16",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Directory Service",
  urlParser: config?.urlParser ?? parseUrl,
});
