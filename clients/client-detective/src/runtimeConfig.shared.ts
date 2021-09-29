import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DetectiveClientConfig } from "./DetectiveClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DetectiveClientConfig) => ({
  apiVersion: "2018-10-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Detective",
  urlParser: config?.urlParser ?? parseUrl,
});
