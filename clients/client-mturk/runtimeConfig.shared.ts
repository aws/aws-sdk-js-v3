import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MTurkClientConfig } from "./MTurkClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MTurkClientConfig) => ({
  apiVersion: "2017-01-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MTurk",
  urlParser: config?.urlParser ?? parseUrl,
});
