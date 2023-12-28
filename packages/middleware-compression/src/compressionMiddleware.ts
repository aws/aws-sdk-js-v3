import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
} from "@smithy/types";

import { compressStream } from "./compressStream";
import { compressString } from "./compressString";
import { CompressionResolvedConfig } from "./configurations";
import { CLIENT_SUPPORTED_ALGORITHMS, CompressionAlgorithm } from "./constants";
import { isStreaming } from "./isStreaming";

/**
 * @internal
 */
export interface CompressionMiddlewareConfig {
  /**
   * Defines the priority-ordered list of compression algorithms supported by the service operation.
   */
  encodings: string[];

  /**
   * Indicates that the streaming blob MUST be finite and have a known size when sending data from a client to a server.
   * Populated if smithy requiresLength is set https://smithy.io/2.0/spec/streaming.html#requireslength-trait
   */
  streamRequiresLength?: boolean;
}

/**
 * @internal
 */
export const compressionMiddleware =
  (config: CompressionResolvedConfig, middlewareConfig: CompressionMiddlewareConfig): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request) || config.disableRequestCompression) {
      return next(args);
    }

    const { request } = args;
    const { body, headers } = request;
    const { encodings, streamRequiresLength } = middlewareConfig;

    for (const algorithm of encodings) {
      if (CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm as CompressionAlgorithm)) {
        // have to check for streaming length trait and @requiredLength trait;
        // probably to be done in codegen part and not check in middleware
        if (isStreaming(body)) {
          if (!streamRequiresLength) {
            // if isStreaming results in Transfer-Encoding: Chunked
            request.body = compressStream(body);
            // body.length checks --> check for util body length in smithy pkg
          } else {
            // Invalid case.
          }
        } else if (body.length >= config.requestMinCompressionSizeBytes) {
          request.body = await compressString(body);
        }

        // Either append to the header if it already exists, else set it
        if (headers["Content-Encoding"]) {
          headers["Content-Encoding"] += `,${algorithm}`;
        } else {
          headers["Content-Encoding"] = algorithm;
        }

        // We've matched on one supported algorithm in the
        // priority-ordered list, so we're finished.
        break;
      }
    }

    return next({ ...args, request });
  };

export const compressionMiddlewareOptions: BuildHandlerOptions = {
  name: "compressionMiddleware",
  step: "build",
  tags: ["REQUEST_BODY_COMPRESSION", "GZIP"],
  override: true,
};
