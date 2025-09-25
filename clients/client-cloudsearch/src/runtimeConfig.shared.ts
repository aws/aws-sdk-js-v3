// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { AwsQueryProtocol } from "@aws-sdk/core/protocols";
import { NoOpLogger } from "@smithy/smithy-client";
import { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultCloudSearchHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { CloudSearchClientConfig } from "./CloudSearchClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudSearchClientConfig) => {
  return {
    apiVersion: "2013-01-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultCloudSearchHttpAuthSchemeProvider,
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
      new AwsQueryProtocol({
        defaultNamespace: "com.amazonaws.cloudsearch",
        xmlNamespace: "http://cloudsearch.amazonaws.com/doc/2013-01-01/",
        version: "2013-01-01",
      }),
    serviceId: config?.serviceId ?? "CloudSearch",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
