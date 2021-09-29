import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeGuruProfilerClientConfig } from "./CodeGuruProfilerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeGuruProfilerClientConfig) => ({
  apiVersion: "2019-07-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodeGuruProfiler",
  urlParser: config?.urlParser ?? parseUrl,
});
