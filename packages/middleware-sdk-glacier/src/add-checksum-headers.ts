import { ResolvedGlacierMiddlewareConfig } from "./configurations";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  Hash,
  MetadataBearer
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { TreeHash } from "@aws-sdk/sha256-tree-hash";
import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { toHex } from "@aws-sdk/util-hex-encoding";

const MiB = 1024 * 1024;

export function addChecksumHeadersMiddleware(
  options: ResolvedGlacierMiddlewareConfig
): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let request = args.request;
    if (HttpRequest.isInstance(request)) {
      let headers = request.headers;
      const body = request.body;
      if (body) {
        const treeHash = !("x-amz-sha256-tree-hash" in headers)
          ? new TreeHash(options.sha256, options.utf8Decoder)
          : null;
        const contentHash = !("x-amz-content-sha256" in headers)
          ? new options.sha256()
          : null;
        if (
          typeof body === "string" ||
          ArrayBuffer.isView(body) ||
          isArrayBuffer(body)
        ) {
          contentHash && contentHash.update(body);
          treeHash && treeHash.update(body);
        } else {
          if (options.runtime === "node") {
            if (typeof body.path !== "string") {
              throw new Error(
                "Unable to calculate checksums for non-file streams."
              );
            }
            const bodyTee = options.createReadStream(body.path, {
              start: (body as any).start,
              end: (body as any).end
            });

            await options.streamReader(bodyTee, (chunk: any) => {
              treeHash && treeHash.update(chunk);
              contentHash && contentHash.update(chunk);
            });
          }

          if (options.runtime === "browser") {
            if (
              Boolean(body) &&
              Object.prototype.toString.call(body) === "[object Blob]"
            ) {
              await options.blobReader(
                body,
                (chunk: any) => {
                  treeHash && treeHash.update(chunk);
                  contentHash && contentHash.update(chunk);
                },
                MiB
              );
            }
          }
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

        // Update request headers with new set of headers.
        request.headers = headers;
      }
    }

    return next({
      ...args,
      request
    });
  };
}

export const addChecksumHeadersMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_CHECKSUM_HEADERS"],
  name: "addChecksumHeadersMiddleware"
};
