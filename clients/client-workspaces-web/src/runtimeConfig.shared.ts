// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { WorkSpacesWebClientConfig } from "./WorkSpacesWebClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesWebClientConfig) => ({
  apiVersion: "2020-07-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WorkSpaces Web",
  urlParser: config?.urlParser ?? parseUrl,
});
