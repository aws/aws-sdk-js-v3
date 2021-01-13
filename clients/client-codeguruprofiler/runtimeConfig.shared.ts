import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2019-07-18",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "CodeGuruProfiler",
  urlParser: parseUrl,
};
