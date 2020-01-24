import { fromUtf8 } from "@aws-sdk/util-utf8-node";
import { Sha256 } from "@aws-crypto/sha256-js";
import { streamReader } from "@aws-sdk/chunked-stream-reader-node";
import { createReadStream } from "fs";
import { blobReader } from "@aws-sdk/chunked-blob-reader";

export const minimalRequest = {
  method: "POST",
  protocol: "https:",
  path: "/",
  headers: {},
  hostname: "foo.us-east-1.amazonaws.com"
};
export const commonConfig = {
  apiVersion: "1970-01-01",
  sha256: Sha256,
  utf8Decoder: fromUtf8,
  createReadStream,
  streamReader,
  blobReader
};
