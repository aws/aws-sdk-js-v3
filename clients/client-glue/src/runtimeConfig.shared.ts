import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GlueClientConfig } from "./GlueClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlueClientConfig) => ({
  apiVersion: "2017-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Glue",
  urlParser: config?.urlParser ?? parseUrl,
});
