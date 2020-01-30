import { createReadStream } from "fs";
import { TreeHash } from "@aws-sdk/sha256-tree-hash";
import { Decoder, HttpRequest, HashConstructor } from "@aws-sdk/types";
import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { streamReader } from "@aws-sdk/chunked-stream-reader-node";

export async function bodyChecksumGenerator(
  request: HttpRequest,
  options: {
    sha256: HashConstructor;
    utf8Decoder: Decoder;
  }
): Promise<[string, string]> {
  const contentHash = new options.sha256();
  const treeHash = new TreeHash(options.sha256, options.utf8Decoder);
  const { body } = request;
  if (
    typeof body === "string" ||
    ArrayBuffer.isView(body) ||
    isArrayBuffer(body)
  ) {
    contentHash && contentHash.update(body);
    treeHash && treeHash.update(body);
  } else {
    if (typeof body.path !== "string") {
      throw new Error("Unable to calculate checksums for non-file streams.");
    }
    const bodyTee = createReadStream(body.path, {
      start: (body as any).start,
      end: (body as any).end
    });

    await streamReader(bodyTee, (chunk: any) => {
      contentHash && contentHash.update(chunk);
      treeHash && treeHash.update(chunk);
    });
  }

  return [toHex(await contentHash.digest()), toHex(await treeHash.digest())];
}
