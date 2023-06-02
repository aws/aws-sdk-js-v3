// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";
import { sdkStreamMixin } from "@aws-sdk/util-stream";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8";

import { BackupStorageClientConfig } from "./BackupStorageClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BackupStorageClientConfig) => ({
  apiVersion: "2018-04-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin,
  serviceId: config?.serviceId ?? "BackupStorage",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf8,
  utf8Encoder: config?.utf8Encoder ?? toUtf8,
});
