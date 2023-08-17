import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
} from "@smithy/types";

import { PreviouslyResolved } from "./configurations";

export function addChecksumHeadersMiddleware(options: PreviouslyResolved): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
    async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
      const request = args.request;
      if (HttpRequest.isInstance(request)) {
        let headers = request.headers;
        const body = request.body;
        if (body) {
          const [contentHash, treeHash] = await options.bodyChecksumGenerator(request, options);

          for (const [headerName, hash] of <Array<[string, string]>>[
            ["x-amz-content-sha256", contentHash],
            ["x-amz-sha256-tree-hash", treeHash],
          ]) {
            if (!(headerName in headers) && hash) {
              headers = {
                ...headers,
                [headerName]: hash,
              };
            }
          }

          // Update request headers with new set of headers.
          request.headers = headers;
        }
      }

      return next({
        ...args,
        request,
      });
    };
}

export const addChecksumHeadersMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_CHECKSUM_HEADERS"],
  name: "addChecksumHeadersMiddleware",
  override: true,
};
