import { streamReader } from "@aws-sdk/chunked-stream-reader-node";
import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { TreeHash } from "@aws-sdk/sha256-tree-hash";
import { Decoder, HashConstructor, HttpRequest } from "@aws-sdk/types";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { createReadStream } from "fs";

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
  if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    contentHash?.update(body);
    treeHash?.update(body);
  } else {
    if (typeof body.path !== "string") {
      throw new Error("Unable to calculate checksums for non-file streams.");
    }
    const bodyTee = createReadStream(body.path, {
      start: (body as any).start,
      end: (body as any).end,
    });

    await streamReader(bodyTee, (chunk: any) => {
      contentHash?.update(chunk);
      treeHash?.update(chunk);
    });
  }

  return [toHex(await contentHash.digest()), toHex(await treeHash.digest())];
}
