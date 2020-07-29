import { name, version } from "./package.json";
import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { Hash } from "@aws-sdk/hash-node";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { defaultProvider as regionDefaultProvider } from "@aws-sdk/region-provider";
import { maxAttemptsProvider as maxAttemptsDefaultProvider } from "@aws-sdk/retry-config-provider";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { ClientDefaults } from "./PersonalizeEventsClient";
import { ClientSharedValues } from "./runtimeConfig.shared";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  runtime: "node",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  credentialDefaultProvider,
  defaultUserAgent: defaultUserAgent(name, version),
  maxAttemptsDefaultProvider,
  regionDefaultProvider,
  requestHandler: new NodeHttpHandler(),
  sha256: Hash.bind(null, "sha256"),
  streamCollector,
  urlParser: parseUrl,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
};
