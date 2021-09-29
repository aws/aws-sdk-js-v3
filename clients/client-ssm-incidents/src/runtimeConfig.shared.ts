import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SSMIncidentsClientConfig } from "./SSMIncidentsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMIncidentsClientConfig) => ({
  apiVersion: "2018-05-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SSM Incidents",
  urlParser: config?.urlParser ?? parseUrl,
});
