// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { AwsRestJsonProtocol } from "@aws-sdk/core/protocols";
import { HttpBearerAuthSigner } from "@smithy/core";
import { NoOpLogger } from "@smithy/smithy-client";
import type { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultBedrockHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import type { BedrockClientConfig } from "./BedrockClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BedrockClientConfig) => {
  return {
    apiVersion: "2023-04-20",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultBedrockHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
      {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("smithy.api#httpBearerAuth"),
        signer: new HttpBearerAuthSigner(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? new AwsRestJsonProtocol({ defaultNamespace: "com.amazonaws.bedrock" }),
    serviceId: config?.serviceId ?? "Bedrock",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
