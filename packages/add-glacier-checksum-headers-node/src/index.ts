import { createReadStream, ReadStream } from "fs";
import { Readable } from "stream";
import {
  BuildHandler,
  BuildHandlerArguments,
  Decoder,
  HandlerExecutionContext,
  Hash,
  HashConstructor
} from "@aws-sdk/types";
import { streamReader } from "@aws-sdk/chunked-stream-reader-node";
import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { TreeHash } from "@aws-sdk/sha256-tree-hash";

export function addChecksumHeaders(Sha256: HashConstructor, fromUtf8: Decoder) {
  return (next: BuildHandler<any, any, Readable>) => async ({
    request: { body, headers, ...requestRest },
    ...rest
  }: BuildHandlerArguments<any, Readable>) => {
    if (body) {
      const treeHash = !("x-amz-sha256-tree-hash" in headers)
        ? new TreeHash(Sha256, fromUtf8)
        : null;
      const contentHash = !("x-amz-content-sha256" in headers)
        ? new Sha256()
        : null;

      if (
        typeof body === "string" ||
        ArrayBuffer.isView(body) ||
        isArrayBuffer(body)
      ) {
        contentHash && contentHash.update(body);
        treeHash && treeHash.update(body);
      } else {
        // eventually we'll want to support rewindable streams as well
        if (!isReadStream(body)) {
          throw new Error(
            "Unable to calculate checksums for non-file streams."
          );
        }
        const bodyTee = createReadStream(body.path, {
          start: (body as any).start,
          end: (body as any).end
        });

        await streamReader(bodyTee, chunk => {
          treeHash && treeHash.update(chunk);
          contentHash && contentHash.update(chunk);
        });
      }

      for (const [headerName, hash] of <Array<[string, Hash]>>[
        ["x-amz-content-sha256", contentHash],
        ["x-amz-sha256-tree-hash", treeHash]
      ]) {
        if (hash) {
          headers = {
            ...headers,
            [headerName]: toHex(await hash.digest())
          };
        }
      }
    }

    return next({
      ...rest,
      request: {
        ...requestRest,
        headers
      }
    });
  };
}

function isReadStream(stream: Readable): stream is ReadStream {
  return typeof (stream as ReadStream).path === "string";
}
