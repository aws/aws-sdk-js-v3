import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppIntegrationsClientConfig } from "./AppIntegrationsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppIntegrationsClientConfig) => ({
  apiVersion: "2020-07-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "AppIntegrations",
  urlParser: config?.urlParser ?? parseUrl,
});
