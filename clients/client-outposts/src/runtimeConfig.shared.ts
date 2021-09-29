import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OutpostsClientConfig } from "./OutpostsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OutpostsClientConfig) => ({
  apiVersion: "2019-12-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Outposts",
  urlParser: config?.urlParser ?? parseUrl,
});
