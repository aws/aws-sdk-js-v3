import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RedshiftClientConfig } from "./RedshiftClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftClientConfig) => ({
  apiVersion: "2012-12-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Redshift",
  urlParser: config?.urlParser ?? parseUrl,
});
