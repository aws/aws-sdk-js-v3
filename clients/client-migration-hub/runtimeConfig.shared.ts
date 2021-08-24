import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MigrationHubClientConfig } from "./MigrationHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubClientConfig) => ({
  apiVersion: "2017-05-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Migration Hub",
  urlParser: config?.urlParser ?? parseUrl,
});
