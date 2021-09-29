import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CognitoIdentityProviderClientConfig } from "./CognitoIdentityProviderClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoIdentityProviderClientConfig) => ({
  apiVersion: "2016-04-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Cognito Identity Provider",
  urlParser: config?.urlParser ?? parseUrl,
});
