import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SESClientConfig } from "./SESClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SESClientConfig) => ({
  apiVersion: "2010-12-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SES",
  urlParser: config?.urlParser ?? parseUrl,
});
