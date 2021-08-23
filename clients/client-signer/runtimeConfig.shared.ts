import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SignerClientConfig } from "./SignerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerClientConfig) => ({
  apiVersion: "2017-08-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "signer",
  urlParser: config?.urlParser ?? parseUrl,
});
