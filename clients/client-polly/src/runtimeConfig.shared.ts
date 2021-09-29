import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PollyClientConfig } from "./PollyClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PollyClientConfig) => ({
  apiVersion: "2016-06-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Polly",
  urlParser: config?.urlParser ?? parseUrl,
});
