import { eventStreamSerdeProvider } from "@aws-sdk/eventstream-serde-browser";
import { blobHasher as streamHasher } from "@aws-sdk/hash-blob-browser";
import { invalidFunction } from "@aws-sdk/invalid-dependency";
import { Md5 } from "@aws-sdk/md5-js";
import { Sha256 } from "@aws-crypto/sha256-browser";
import { FetchHttpHandler } from "@aws-sdk/fetch-http-handler";
import { parseUrl } from "@aws-sdk/url-parser-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { streamCollector } from "@aws-sdk/stream-collector-browser";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-browser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { name, version } from "./package.json";
import { ClientDefaults } from "./S3Client";
import { ClientSharedValues } from "./runtimeConfig.shared";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  requestHandler: new FetchHttpHandler(),
  sha256: Sha256,
  urlParser: parseUrl,
  bodyLengthChecker: calculateBodyLength,
  streamCollector,
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
  defaultUserAgent: defaultUserAgent(name, version),
  runtime: "browser",
  credentialDefaultProvider: invalidFunction("Credential is missing") as any,
  regionDefaultProvider: invalidFunction("Region is missing") as any,
  md5: Md5,
  streamHasher,
  eventStreamSerdeProvider
};
