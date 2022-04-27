import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ChimeSDKMediaPipelinesClientConfig } from "./ChimeSDKMediaPipelinesClient";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeSDKMediaPipelinesClientConfig) => ({
  apiVersion: "2021-07-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Chime SDK Media Pipelines",
  urlParser: config?.urlParser ?? parseUrl,
});
