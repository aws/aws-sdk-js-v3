// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core/httpAuthSchemes";
import { AwsRestXmlProtocol } from "@aws-sdk/core/protocols";
import { NoOpLogger } from "@smithy/core/client";
import { parseUrl } from "@smithy/core/protocols";
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@smithy/core/serde";
import type { IdentityProviderConfig } from "@smithy/types";

import { defaultRoute53HttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import type { Route53ClientConfig } from "./Route53Client";
import { errorTypeRegistries } from "./schemas/schemas_0";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ClientConfig) => {
  return {
    apiVersion: "2013-04-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultRoute53HttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? AwsRestXmlProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.route53",
      errorTypeRegistries,
      xmlNamespace: "https://route53.amazonaws.com/doc/2013-04-01/",
      version: "2013-04-01",
      serviceTarget: "AWSDnsV20130401",
    },
    serviceId: config?.serviceId ?? "Route 53",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
