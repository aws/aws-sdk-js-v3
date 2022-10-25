// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { LakeFormationClientConfig } from "./LakeFormationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LakeFormationClientConfig) => ({
  apiVersion: "2017-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "LakeFormation",
  urlParser: config?.urlParser ?? parseUrl,
});
