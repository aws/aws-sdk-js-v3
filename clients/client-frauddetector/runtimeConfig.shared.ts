import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FraudDetectorClientConfig } from "./FraudDetectorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FraudDetectorClientConfig) => ({
  apiVersion: "2019-11-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "FraudDetector",
  urlParser: config?.urlParser ?? parseUrl,
});
