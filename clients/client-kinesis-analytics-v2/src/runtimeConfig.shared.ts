// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KinesisAnalyticsV2ClientConfig } from "./KinesisAnalyticsV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisAnalyticsV2ClientConfig) => ({
  apiVersion: "2018-05-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Kinesis Analytics V2",
  urlParser: config?.urlParser ?? parseUrl,
});
