// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { GameSparksClientConfig } from "./GameSparksClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GameSparksClientConfig) => ({
  apiVersion: "2021-08-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "GameSparks",
  urlParser: config?.urlParser ?? parseUrl,
});
