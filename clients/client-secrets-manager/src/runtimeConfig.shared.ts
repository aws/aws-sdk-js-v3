import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SecretsManagerClientConfig } from "./SecretsManagerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecretsManagerClientConfig) => ({
  apiVersion: "2017-10-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Secrets Manager",
  urlParser: config?.urlParser ?? parseUrl,
});
