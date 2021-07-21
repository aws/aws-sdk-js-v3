import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ComputeOptimizerClientConfig } from "./ComputeOptimizerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ComputeOptimizerClientConfig) => ({
  apiVersion: "2019-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Compute Optimizer",
  urlParser: config.urlParser ?? parseUrl,
});
