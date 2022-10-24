// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WorkMailClientConfig } from "./WorkMailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailClientConfig) => ({
  apiVersion: "2017-10-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WorkMail",
  urlParser: config?.urlParser ?? parseUrl,
});
