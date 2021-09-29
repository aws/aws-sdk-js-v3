import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeStarConnectionsClientConfig } from "./CodeStarConnectionsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeStarConnectionsClientConfig) => ({
  apiVersion: "2019-12-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodeStar connections",
  urlParser: config?.urlParser ?? parseUrl,
});
