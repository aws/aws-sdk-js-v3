import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MigrationHubConfigClientConfig } from "./MigrationHubConfigClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubConfigClientConfig) => ({
  apiVersion: "2019-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MigrationHub Config",
  urlParser: config?.urlParser ?? parseUrl,
});
