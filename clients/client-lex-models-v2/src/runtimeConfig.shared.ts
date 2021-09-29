import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LexModelsV2ClientConfig } from "./LexModelsV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexModelsV2ClientConfig) => ({
  apiVersion: "2020-08-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Lex Models V2",
  urlParser: config?.urlParser ?? parseUrl,
});
