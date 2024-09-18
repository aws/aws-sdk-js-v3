import { HttpResponse } from "@smithy/protocol-http";
import {
  HandlerExecutionContext,
  MetadataBearer,
  RelativeMiddlewareOptions,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm, ResponseChecksumValidation } from "./constants";
import { getChecksumAlgorithmListForResponse } from "./getChecksumAlgorithmListForResponse";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { isChecksumWithPartNumber } from "./isChecksumWithPartNumber";
import { isStreaming } from "./isStreaming";
import { createReadStreamOnBuffer } from "./streams/create-read-stream-on-buffer";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

export interface FlexibleChecksumsResponseMiddlewareConfig {
  /**
   * Defines a top-level operation input member used to opt-in to best-effort validation
   * of a checksum returned in the HTTP response of the operation.
   */
  requestValidationModeMember?: string;

  /**
   * Defines the checksum algorithms clients SHOULD look for when validating checksums
   * returned in the HTTP response.
   */
  responseAlgorithms?: string[];
}

/**
 * @internal
 */
export const flexibleChecksumsResponseMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "flexibleChecksumsResponseMiddleware",
  toMiddleware: "serializerMiddleware",
  relation: "before",
  tags: ["BODY_CHECKSUM"],
  override: true,
};

/**
 * @internal
 *
 * The validation counterpart to the flexibleChecksumsMiddleware.
 */
export const flexibleChecksumsResponseMiddleware =
  (
    config: PreviouslyResolved,
    middlewareConfig: FlexibleChecksumsResponseMiddlewareConfig
  ): SerializeMiddleware<any, any> =>
  <Output extends MetadataBearer>(
    next: SerializeHandler<any, Output>,
    context: HandlerExecutionContext
  ): SerializeHandler<any, Output> =>
  async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
    const input = args.input;
    const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
    const responseChecksumValidation = await config.responseChecksumValidation();

    const isResponseChecksumValidationNeeded =
      requestValidationModeMember &&
      (input[requestValidationModeMember] === "ENABLED" ||
        responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED);

    if (isResponseChecksumValidationNeeded) {
      input[requestValidationModeMember] = "ENABLED";
    }

    const result = await next(args);

    const response = result.response as HttpResponse;
    let collectedStream: Uint8Array | undefined = undefined;

    if (isResponseChecksumValidationNeeded) {
      const { clientName, commandName } = context;
      const isS3WholeObjectMultipartGetResponseChecksum =
        clientName === "S3Client" &&
        commandName === "GetObjectCommand" &&
        getChecksumAlgorithmListForResponse(responseAlgorithms).every((algorithm: ChecksumAlgorithm) => {
          const responseHeader = getChecksumLocationName(algorithm);
          const checksumFromResponse = response.headers?.[responseHeader];
          return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
        });
      if (isS3WholeObjectMultipartGetResponseChecksum) {
        return result;
      }

      const isStreamingBody = isStreaming(response.body);

      if (isStreamingBody) {
        collectedStream = await config.streamCollector(response.body);
        response.body = createReadStreamOnBuffer(collectedStream);
      }

      await validateChecksumFromResponse(result.response as HttpResponse, {
        config,
        responseAlgorithms,
      });

      if (isStreamingBody && collectedStream) {
        response.body = createReadStreamOnBuffer(collectedStream);
      }
    }

    return result;
  };
