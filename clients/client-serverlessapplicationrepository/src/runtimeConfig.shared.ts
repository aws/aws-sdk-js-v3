import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ServerlessApplicationRepositoryClientConfig } from "./ServerlessApplicationRepositoryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServerlessApplicationRepositoryClientConfig) => ({
  apiVersion: "2017-09-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ServerlessApplicationRepository",
  urlParser: config?.urlParser ?? parseUrl,
});
