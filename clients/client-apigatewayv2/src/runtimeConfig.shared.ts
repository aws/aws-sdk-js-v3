import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApiGatewayV2ClientConfig } from "./ApiGatewayV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApiGatewayV2ClientConfig) => ({
  apiVersion: "2018-11-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ApiGatewayV2",
  urlParser: config?.urlParser ?? parseUrl,
});
