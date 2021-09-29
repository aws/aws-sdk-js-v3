import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IdentitystoreClientConfig } from "./IdentitystoreClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IdentitystoreClientConfig) => ({
  apiVersion: "2020-06-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "identitystore",
  urlParser: config?.urlParser ?? parseUrl,
});
