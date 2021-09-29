import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RoboMakerClientConfig } from "./RoboMakerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RoboMakerClientConfig) => ({
  apiVersion: "2018-06-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "RoboMaker",
  urlParser: config?.urlParser ?? parseUrl,
});
