// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { WisdomClientConfig } from "./WisdomClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WisdomClientConfig) => ({
  apiVersion: "2020-10-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Wisdom",
  urlParser: config?.urlParser ?? parseUrl,
});
