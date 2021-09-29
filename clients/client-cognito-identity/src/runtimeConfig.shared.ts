import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CognitoIdentityClientConfig } from "./CognitoIdentityClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoIdentityClientConfig) => ({
  apiVersion: "2014-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Cognito Identity",
  urlParser: config?.urlParser ?? parseUrl,
});
