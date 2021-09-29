import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OpsWorksClientConfig } from "./OpsWorksClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpsWorksClientConfig) => ({
  apiVersion: "2013-02-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "OpsWorks",
  urlParser: config?.urlParser ?? parseUrl,
});
