import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RedshiftDataClientConfig } from "./RedshiftDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftDataClientConfig) => ({
  apiVersion: "2019-12-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Redshift Data",
  urlParser: config?.urlParser ?? parseUrl,
});
