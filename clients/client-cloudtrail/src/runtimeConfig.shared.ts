import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudTrailClientConfig } from "./CloudTrailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudTrailClientConfig) => ({
  apiVersion: "2013-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudTrail",
  urlParser: config?.urlParser ?? parseUrl,
});
