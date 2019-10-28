import { invalidFunction } from "@aws-sdk/invalid-dependency";
import { Sha256 } from "@aws-crypto/sha256-browser";
import { FetchHttpHandler } from "@aws-sdk/fetch-http-handler";
import { parseUrl } from "@aws-sdk/url-parser-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { streamCollector } from "@aws-sdk/stream-collector-browser";
import { RestJsonProtocol } from "@aws-sdk/protocol-rest-json";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-browser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { name, version } from "./package.json";
import { RDSDataRuntimeDependencies } from "./RdsDataServiceClient";

export const RDSRuntimeConfiguration: Required<RDSDataRuntimeDependencies> = {
  protocolDefaultProvider: handler => new RestJsonProtocol(handler),
  signingName: "rds-data",
  service: "rds-data",
  httpHandler: new FetchHttpHandler(),
  sha256: Sha256,
  credentialDefaultProvider: invalidFunction("Credential is missing") as any,
  regionDefaultProvider: invalidFunction("Region is missing") as any,
  urlParser: parseUrl,
  bodyLengthChecker: calculateBodyLength,
  streamCollector,
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
  defaultUserAgent: defaultUserAgent(name, version)
};
