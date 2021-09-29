import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AlexaForBusinessClientConfig } from "./AlexaForBusinessClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AlexaForBusinessClientConfig) => ({
  apiVersion: "2017-11-09",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Alexa For Business",
  urlParser: config?.urlParser ?? parseUrl,
});
