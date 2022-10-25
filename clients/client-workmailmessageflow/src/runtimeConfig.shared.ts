// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WorkMailMessageFlowClientConfig } from "./WorkMailMessageFlowClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailMessageFlowClientConfig) => ({
  apiVersion: "2019-05-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WorkMailMessageFlow",
  urlParser: config?.urlParser ?? parseUrl,
});
