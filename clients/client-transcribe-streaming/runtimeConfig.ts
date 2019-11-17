import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { Hash } from "@aws-sdk/hash-node";
import { NodeHttp2Handler } from "@aws-sdk/node-http-handler";
import { defaultProvider as regionDefaultProvider } from "@aws-sdk/region-provider";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { streamCollector } from "@aws-sdk/stream-collector-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
// import { EventStreamMarshaller } from "@aws-sdk/util-eventstream-node";
import { name, version } from "./package.json";
import { TranscribeStreamingRuntimeDependencies } from "./TranscribeStreamingClient";

export const TranscribeStreamingRuntimeConfiguration: Required<
  TranscribeStreamingRuntimeDependencies
> = {
  protocol: "aws.json-1.1",
  signingName: "transcribestreaming",
  service: "transcribestreaming",
  requestHandler: new NodeHttp2Handler(),
  sha256: Hash.bind(null, "sha256"),
  credentialDefaultProvider,
  regionDefaultProvider,
  urlParser: parseUrl,
  bodyLengthChecker: calculateBodyLength,
  streamCollector,
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
  defaultUserAgent: defaultUserAgent(name, version)
  // eventStreamSerde: new EventStreamMarshaller(toUtf8, fromUtf8)
};
