// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GuardDutyClientConfig } from "./GuardDutyClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GuardDutyClientConfig) => ({
  apiVersion: "2017-11-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "GuardDuty",
  urlParser: config?.urlParser ?? parseUrl,
});
