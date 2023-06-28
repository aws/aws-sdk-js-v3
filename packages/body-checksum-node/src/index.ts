import { streamReader } from "@aws-sdk/chunked-stream-reader-node";
import { TreeHash } from "@aws-sdk/sha256-tree-hash";
import { isArrayBuffer } from "@smithy/is-array-buffer";
import { ChecksumConstructor, Decoder, HashConstructor, HttpRequest } from "@smithy/types";
import { toHex } from "@smithy/util-hex-encoding";
import { toUint8Array } from "@smithy/util-utf8";
import { createReadStream } from "fs";

/**
 * @internal
 */
export async function bodyChecksumGenerator(
  request: HttpRequest,
  options: {
    sha256: ChecksumConstructor | HashConstructor;
    utf8Decoder: Decoder;
  }
): Promise<[string, string]> {
  const contentHash = new options.sha256();
  const treeHash = new TreeHash(options.sha256, options.utf8Decoder);
  const { body } = request;
  if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    contentHash?.update(toUint8Array(body));
    treeHash?.update(toUint8Array(body));
  } else {
    if (typeof body.path !== "string") {
      throw new Error("Unable to calculate checksums for non-file streams.");
    }
    const bodyTee = createReadStream(body.path, {
      start: (body as any).start,
      end: (body as any).end,
    });

    await streamReader(bodyTee, (chunk: any) => {
      contentHash?.update(toUint8Array(chunk));
      treeHash?.update(toUint8Array(chunk));
    });
  }

  return [toHex(await contentHash.digest()), toHex(await treeHash.digest())];
}
