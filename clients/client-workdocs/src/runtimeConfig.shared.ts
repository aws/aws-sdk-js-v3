// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WorkDocsClientConfig } from "./WorkDocsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkDocsClientConfig) => ({
  apiVersion: "2016-05-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WorkDocs",
  urlParser: config?.urlParser ?? parseUrl,
});
