import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
} from "@aws-sdk/types";

import { PreviouslyResolved } from "./configuration";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { FlexibleChecksumsMiddlewareConfig } from "./getFlexibleChecksumsPlugin";
import { hasHeader } from "./hasHeader";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { stringHasher } from "./stringHasher";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

export const flexibleChecksumsMiddleware =
  (config: PreviouslyResolved, middlewareConfig: FlexibleChecksumsMiddlewareConfig): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request)) {
      return next(args);
    }

    const { request } = args;
    const { body: requestBody, headers } = request;
    const { base64Encoder, streamHasher } = config;
    const { input, requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;

    const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
      requestChecksumRequired,
      requestAlgorithmMember,
    });
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

    const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
    // @ts-ignore Element implicitly has an 'any' type for input[requestValidationModeMember]
    if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
      validateChecksumFromResponse(result.response as HttpResponse, {
        config,
        responseAlgorithms,
      });
    }

    return result;
  };
