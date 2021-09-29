import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KafkaClientConfig } from "./KafkaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KafkaClientConfig) => ({
  apiVersion: "2018-11-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kafka",
  urlParser: config?.urlParser ?? parseUrl,
});
