import { name, version } from "./package.json";
import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { eventStreamSerdeProvider } from "@aws-sdk/eventstream-serde-node";
import { Hash } from "@aws-sdk/hash-node";
import { fileStreamHasher as streamHasher } from "@aws-sdk/hash-stream-node";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { defaultProvider as regionDefaultProvider } from "@aws-sdk/region-provider";
import { maxAttemptsProvider as maxAttemptsDefaultProvider } from "@aws-sdk/retry-config-provider";
import { HashConstructor as __HashConstructor } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { ClientDefaults } from "./S3Client";
import { ClientSharedValues } from "./runtimeConfig.shared";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  runtime: "node",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  credentialDefaultProvider,
  defaultUserAgent: defaultUserAgent(name, version),
  eventStreamSerdeProvider,
  maxAttemptsDefaultProvider,
  md5: Hash.bind(null, "md5"),
  regionDefaultProvider,
  requestHandler: new NodeHttpHandler(),
  sha256: Hash.bind(null, "sha256"),
  streamCollector,
  streamHasher,
  urlParser: parseUrl,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
};
