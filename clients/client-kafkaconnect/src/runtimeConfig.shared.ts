// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KafkaConnectClientConfig } from "./KafkaConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KafkaConnectClientConfig) => ({
  apiVersion: "2021-09-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "KafkaConnect",
  urlParser: config?.urlParser ?? parseUrl,
});
