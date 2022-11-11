// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoT1ClickDevicesServiceClientConfig } from "./IoT1ClickDevicesServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoT1ClickDevicesServiceClientConfig) => ({
  apiVersion: "2018-05-14",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "IoT 1Click Devices Service",
  urlParser: config?.urlParser ?? parseUrl,
});
