// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { AwsJson1_1Protocol } from "@aws-sdk/core/protocols";
import { NoOpLogger } from "@smithy/smithy-client";
import type { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultWorkMailHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import type { WorkMailClientConfig } from "./WorkMailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailClientConfig) => {
  return {
    apiVersion: "2017-10-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultWorkMailHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol:
      config?.protocol ??
      new AwsJson1_1Protocol({
        defaultNamespace: "com.amazonaws.workmail",
        serviceTarget: "WorkMailService",
        awsQueryCompatible: false,
      }),
    serviceId: config?.serviceId ?? "WorkMail",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
