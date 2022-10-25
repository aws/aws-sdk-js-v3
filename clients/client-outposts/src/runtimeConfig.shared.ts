// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { OutpostsClientConfig } from "./OutpostsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OutpostsClientConfig) => ({
  apiVersion: "2019-12-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Outposts",
  urlParser: config?.urlParser ?? parseUrl,
});
