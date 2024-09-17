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

import { PreviouslyResolved } from "./configuration";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { hasHeader } from "./hasHeader";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { stringHasher } from "./stringHasher";

export interface FlexibleChecksumsRequestMiddlewareConfig {
  /**
   * The input object for the operation.
   */
  input: Object;

  /**
   * Indicates an operation requires a checksum in its HTTP request.
   */
  requestChecksumRequired: boolean;

  /**
   * Defines a top-level operation input member that is used to configure request checksum behavior.
   */
  requestAlgorithmMember?: string;
}

export const flexibleChecksumsMiddlewareOptions: BuildHandlerOptions = {
  name: "flexibleChecksumsMiddleware",
  step: "build",
  tags: ["BODY_CHECKSUM"],
  override: true,
};

/**
 * @internal
 */
export const flexibleChecksumsMiddleware =
  (config: PreviouslyResolved, middlewareConfig: FlexibleChecksumsRequestMiddlewareConfig): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>,
    context: HandlerExecutionContext
  ): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request)) {
      return next(args);
    }

    const { request } = args;
    const { body: requestBody, headers } = request;
    const { base64Encoder, streamHasher } = config;
    const requestChecksumCalculation = await config.requestChecksumCalculation();
    const { input, requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;

    const checksumAlgorithm = getChecksumAlgorithmForRequest(
      input,
      {
        requestChecksumRequired,
        requestAlgorithmMember,
        requestChecksumCalculation,
      },
      !!context.isS3ExpressBucket
    );
    let updatedBody = requestBody;
    let updatedHeaders = headers;

    if (checksumAlgorithm) {
      const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
      const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config);
      if (isStreaming(requestBody)) {
        const { getAwsChunkedEncodingStream, bodyLengthChecker } = config;
        updatedBody = getAwsChunkedEncodingStream(requestBody, {
          base64Encoder,
          bodyLengthChecker,
          checksumLocationName,
          checksumAlgorithmFn,
          streamHasher,
        });
        updatedHeaders = {
          ...headers,
          "content-encoding": headers["content-encoding"]
            ? `${headers["content-encoding"]},aws-chunked`
            : "aws-chunked",
          "transfer-encoding": "chunked",
          "x-amz-decoded-content-length": headers["content-length"],
          "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
          "x-amz-trailer": checksumLocationName,
        };
        delete updatedHeaders["content-length"];
      } else if (!hasHeader(checksumLocationName, headers)) {
        const rawChecksum = await stringHasher(checksumAlgorithmFn, requestBody);
        updatedHeaders = {
          ...headers,
          [checksumLocationName]: base64Encoder(rawChecksum),
        };
      }
    }

    const result = await next({
      ...args,
      request: {
        ...request,
        headers: updatedHeaders,
        body: updatedBody,
      },
    });

    return result;
  };
