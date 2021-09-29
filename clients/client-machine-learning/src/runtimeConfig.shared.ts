import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MachineLearningClientConfig } from "./MachineLearningClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MachineLearningClientConfig) => ({
  apiVersion: "2014-12-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Machine Learning",
  urlParser: config?.urlParser ?? parseUrl,
});
