import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { NeptuneClientConfig } from "./NeptuneClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NeptuneClientConfig) => ({
  apiVersion: "2014-10-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Neptune",
  urlParser: config?.urlParser ?? parseUrl,
});
