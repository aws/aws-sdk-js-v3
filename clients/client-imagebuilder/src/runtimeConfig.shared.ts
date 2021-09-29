import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ImagebuilderClientConfig } from "./ImagebuilderClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ImagebuilderClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "imagebuilder",
  urlParser: config?.urlParser ?? parseUrl,
});
