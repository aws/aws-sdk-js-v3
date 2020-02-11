import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { defaultProvider as regionDefaultProvider } from "@aws-sdk/region-provider";
import { Hash } from "@aws-sdk/hash-node";
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { streamCollector } from "@aws-sdk/stream-collector-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { name, version } from "./package.json";
import { ClientDefaults } from "./CognitoIdentityClient";
import { ClientSharedValues } from "./runtimeConfig.shared";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  requestHandler: new NodeHttpHandler(),
  sha256: Hash.bind(null, "sha256"),
  urlParser: parseUrl,
  bodyLengthChecker: calculateBodyLength,
  streamCollector,
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
  defaultUserAgent: defaultUserAgent(name, version),
  runtime: "node",
  credentialDefaultProvider: ((options: any) => {
    try {
      return credentialDefaultProvider(options);
    } catch (e) {}
    return {};
  }) as any,
  regionDefaultProvider
};
