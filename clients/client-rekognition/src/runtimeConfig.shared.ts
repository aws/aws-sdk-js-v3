import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RekognitionClientConfig } from "./RekognitionClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RekognitionClientConfig) => ({
  apiVersion: "2016-06-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Rekognition",
  urlParser: config?.urlParser ?? parseUrl,
});
