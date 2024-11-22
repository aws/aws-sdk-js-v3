import { setFeature } from "@aws-sdk/core";
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
import { ChecksumAlgorithm } from "./constants";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { hasHeader } from "./hasHeader";
import { hasHeaderWithPrefix } from "./hasHeaderWithPrefix";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { stringHasher } from "./stringHasher";

export interface FlexibleChecksumsRequestMiddlewareConfig {
  /**
  /**
   * Indicates an operation requires a checksum in its HTTP request.
   */
  requestChecksumRequired: boolean;

  /**
   * Member that is used to configure request checksum behavior.
   */
  requestAlgorithmMember?: {
    /**
     * Defines a top-level operation input member that is used to configure request checksum behavior.
     */
    name: string;

    /**
     * The {@link httpHeader} value, if present.
     * {@link https://smithy.io/2.0/spec/http-bindings.html#httpheader-trait httpHeader}
     */
    httpHeader?: string;
  };
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

    if (hasHeaderWithPrefix("x-amz-checksum-", args.request.headers)) {
      return next(args);
    }

    const { request, input } = args;
    const { body: requestBody, headers } = request;
    const { base64Encoder, streamHasher } = config;
    const requestChecksumCalculation = await config.requestChecksumCalculation();
    const { requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;

    const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
      requestChecksumRequired,
      requestAlgorithmMember: requestAlgorithmMember?.name,
      requestChecksumCalculation,
    });
    let updatedBody = requestBody;
    let updatedHeaders = headers;

    if (checksumAlgorithm) {
      switch (checksumAlgorithm) {
        case ChecksumAlgorithm.CRC32:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
          break;
        case ChecksumAlgorithm.CRC32C:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
          break;
        case ChecksumAlgorithm.SHA1:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
          break;
        case ChecksumAlgorithm.SHA256:
          setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
          break;
      }
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
