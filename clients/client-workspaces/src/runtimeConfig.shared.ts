import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WorkSpacesClientConfig } from "./WorkSpacesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesClientConfig) => ({
  apiVersion: "2015-04-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WorkSpaces",
  urlParser: config?.urlParser ?? parseUrl,
});
