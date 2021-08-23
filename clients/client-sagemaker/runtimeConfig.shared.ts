import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SageMakerClientConfig } from "./SageMakerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerClientConfig) => ({
  apiVersion: "2017-07-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SageMaker",
  urlParser: config?.urlParser ?? parseUrl,
});
