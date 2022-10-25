// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KafkaClientConfig } from "./KafkaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KafkaClientConfig) => ({
  apiVersion: "2018-11-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Kafka",
  urlParser: config?.urlParser ?? parseUrl,
});
