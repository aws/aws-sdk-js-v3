import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KafkaConnectClientConfig } from "./KafkaConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KafkaConnectClientConfig) => ({
  apiVersion: "2021-09-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "KafkaConnect",
  urlParser: config?.urlParser ?? parseUrl,
});
