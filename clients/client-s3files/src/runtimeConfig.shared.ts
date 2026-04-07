// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core/httpAuthSchemes";
import { AwsRestJsonProtocol } from "@aws-sdk/core/protocols";
import { NoOpLogger } from "@smithy/smithy-client";
import type { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultS3FilesHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import type { S3FilesClientConfig } from "./S3FilesClient";
import { errorTypeRegistries } from "./schemas/schemas_0";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3FilesClientConfig) => {
  return {
    apiVersion: "2025-05-05",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultS3FilesHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? AwsRestJsonProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.s3files",
      errorTypeRegistries,
      xmlNamespace: "s3files",
      version: "2025-05-05",
      serviceTarget: "S3Files",
    },
    serviceId: config?.serviceId ?? "S3Files",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
