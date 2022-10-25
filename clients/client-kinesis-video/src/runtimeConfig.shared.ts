// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KinesisVideoClientConfig } from "./KinesisVideoClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoClientConfig) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Kinesis Video",
  urlParser: config?.urlParser ?? parseUrl,
});
