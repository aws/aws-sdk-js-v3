import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GameLiftClientConfig } from "./GameLiftClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GameLiftClientConfig) => ({
  apiVersion: "2015-10-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "GameLift",
  urlParser: config?.urlParser ?? parseUrl,
});
