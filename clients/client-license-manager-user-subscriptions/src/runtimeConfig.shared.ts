// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { LicenseManagerUserSubscriptionsClientConfig } from "./LicenseManagerUserSubscriptionsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LicenseManagerUserSubscriptionsClientConfig) => ({
  apiVersion: "2018-05-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "License Manager User Subscriptions",
  urlParser: config?.urlParser ?? parseUrl,
});
