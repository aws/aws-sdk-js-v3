// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTSiteWiseClientConfig } from "./IoTSiteWiseClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTSiteWiseClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoTSiteWise",
  urlParser: config?.urlParser ?? parseUrl,
});
