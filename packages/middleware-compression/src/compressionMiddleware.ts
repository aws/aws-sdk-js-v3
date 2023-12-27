import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  HandlerExecutionContext,
  MetadataBearer,
} from "@smithy/types";

import { compress, compressStream } from "./compress";
import { CompressionResolvedConfig } from "./configuration";
import { CLIENT_SUPPORTED_ALGORITHMS as supportedAlgorithms } from "./types";
import { isStreaming } from "./utils";

/**
 * @internal
 */
export const compressionMiddleware = (config: CompressionResolvedConfig): BuildMiddleware<any, any> => {
  return <Output extends MetadataBearer>(
      next: BuildHandler<any, Output>,
      context: HandlerExecutionContext
    ): BuildHandler<any, Output> =>
    async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
      if (!HttpRequest.isInstance(args.request) || config.disableRequestCompression) {
        return next(args);
      }

      const { request } = args;
      const { body, headers } = request;

      for (const algorithm of supportedAlgorithms) {
        // have to check for streaming length trait and @requiredLength trait; probably to be done in codegen part and not check in middleware
        if (isStreaming(body) && !isStreamingLengthRequired(body)) {
          // if isStreaming results in Transfer-Encoding: Chunked
          request.body = compressStream(body, algorithm);
          // body.length checks --> check for util body length in smithy pkg
        } else if (!isStreaming(body) && body.length >= config.minCompressionSizeInBytes) {
          request.body = await compress(body, algorithm);
        }
        if (headers["Content-Encoding"]) {
          headers["Content-Encoding"] += `,${algorithm}`;
        } else {
          headers["Content-Encoding"] = algorithm;
        }
        break;
      }

      return next({ ...args, request });
    };
};

export const compressionMiddlewareOptions: BuildHandlerOptions = {
  name: "compressionMiddleware",
  step: "build",
  tags: ["REQUEST_BODY_COMPRESSION", "GZIP"],
  override: true,
};
