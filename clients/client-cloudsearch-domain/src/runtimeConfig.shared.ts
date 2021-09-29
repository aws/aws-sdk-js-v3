import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudSearchDomainClientConfig } from "./CloudSearchDomainClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudSearchDomainClientConfig) => ({
  apiVersion: "2013-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudSearch Domain",
  urlParser: config?.urlParser ?? parseUrl,
});
