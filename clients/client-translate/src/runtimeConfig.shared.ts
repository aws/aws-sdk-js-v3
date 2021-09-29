import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { TranslateClientConfig } from "./TranslateClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranslateClientConfig) => ({
  apiVersion: "2017-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Translate",
  urlParser: config?.urlParser ?? parseUrl,
});
