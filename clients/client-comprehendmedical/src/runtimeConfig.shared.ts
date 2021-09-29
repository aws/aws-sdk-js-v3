import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ComprehendMedicalClientConfig } from "./ComprehendMedicalClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ComprehendMedicalClientConfig) => ({
  apiVersion: "2018-10-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ComprehendMedical",
  urlParser: config?.urlParser ?? parseUrl,
});
