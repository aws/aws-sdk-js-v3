import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WorkDocsClientConfig } from "./WorkDocsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkDocsClientConfig) => ({
  apiVersion: "2016-05-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WorkDocs",
  urlParser: config?.urlParser ?? parseUrl,
});
