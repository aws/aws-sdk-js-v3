// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WorkLinkClientConfig } from "./WorkLinkClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkLinkClientConfig) => ({
  apiVersion: "2018-09-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WorkLink",
  urlParser: config?.urlParser ?? parseUrl,
});
