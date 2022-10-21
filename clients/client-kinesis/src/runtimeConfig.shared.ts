// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KinesisClientConfig } from "./KinesisClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisClientConfig) => ({
  apiVersion: "2013-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Kinesis",
  urlParser: config?.urlParser ?? parseUrl,
});
