import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppConfigClientConfig } from "./AppConfigClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppConfigClientConfig) => ({
  apiVersion: "2019-10-09",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "AppConfig",
  urlParser: config?.urlParser ?? parseUrl,
});
