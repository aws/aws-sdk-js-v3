import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RDSDataClientConfig } from "./RDSDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RDSDataClientConfig) => ({
  apiVersion: "2018-08-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "RDS Data",
  urlParser: config?.urlParser ?? parseUrl,
});
