import { TreeHash } from "@aws-sdk/sha256-tree-hash";
import { blobReader } from "@smithy/chunked-blob-reader";
import { ChecksumConstructor, Decoder, HashConstructor, HttpRequest } from "@smithy/types";
import { toHex } from "@smithy/util-hex-encoding";
import { toUint8Array } from "@smithy/util-utf8";

const MiB = 1024 * 1024;

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
  if (typeof body === "string") {
    contentHash.update(toUint8Array(body));
    treeHash.update(body);
  } else {
    if (Boolean(body) && Object.prototype.toString.call(body) === "[object Blob]") {
      await blobReader(
        body,
        (chunk: any) => {
          treeHash?.update(chunk);
          contentHash?.update(chunk);
        },
        MiB
      );
    } else {
      throw new Error("Unable to calculate checksums for non-blob streams.");
    }
  }

  return [toHex(await contentHash.digest()), toHex(await treeHash.digest())];
}
