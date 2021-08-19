import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { HealthClientConfig } from "./HealthClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HealthClientConfig) => ({
  apiVersion: "2016-08-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Health",
  urlParser: config?.urlParser ?? parseUrl,
});
