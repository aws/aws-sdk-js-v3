import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
} from "@aws-sdk/types";

import { getChecksum } from "./getChecksum";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { FlexibleChecksumsMiddlewareConfig } from "./getFlexibleChecksumsPlugin";
import { hasHeader } from "./hasHeader";
import { FlexibleChecksumsResolvedConfig } from "./resolveFlexibleChecksumsConfig";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

export const flexibleChecksumsMiddleware =
  (
    config: FlexibleChecksumsResolvedConfig,
    middlewareConfig: FlexibleChecksumsMiddlewareConfig
  ): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request)) {
      return next(args);
    }

    const { request } = args;
    const { body: requestBody, headers } = request;
    const { streamHasher, base64Encoder } = config;
    const { input, requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;

    const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
      requestChecksumRequired,
      requestAlgorithmMember,
    });
    let updatedHeaders = headers;

    if (checksumAlgorithm) {
      const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
      // ToDo: Update trailer instead if it is Unsigned-payload.
      if (!hasHeader(checksumLocationName, headers)) {
        const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config);
        const checksum = await getChecksum(requestBody, { streamHasher, checksumAlgorithmFn, base64Encoder });
        updatedHeaders = {
          ...headers,
          [checksumLocationName]: checksum,
        };
      }
    }

    const result = await next({
      ...args,
      request: {
        ...request,
        headers: updatedHeaders,
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
