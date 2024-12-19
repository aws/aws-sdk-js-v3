import { setFeature } from "@aws-sdk/core";
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
import { RequestChecksumCalculation, ResponseChecksumValidation } from "./constants";

export interface FlexibleChecksumsInputMiddlewareConfig {
  /**
   * Defines a top-level operation input member used to opt-in to best-effort validation
   * of a checksum returned in the HTTP response of the operation.
   */
  requestValidationModeMember?: string;
}

/**
 * @internal
 */
export const flexibleChecksumsInputMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "flexibleChecksumsInputMiddleware",
  toMiddleware: "serializerMiddleware",
  relation: "before",
  tags: ["BODY_CHECKSUM"],
  override: true,
};

/**
 * @internal
 *
 * The input counterpart to the flexibleChecksumsMiddleware.
 */
export const flexibleChecksumsInputMiddleware =
  (
    config: PreviouslyResolved,
    middlewareConfig: FlexibleChecksumsInputMiddlewareConfig
  ): SerializeMiddleware<any, any> =>
  <Output extends MetadataBearer>(
    next: SerializeHandler<any, Output>,
    context: HandlerExecutionContext
  ): SerializeHandler<any, Output> =>
  async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
    const input = args.input;
    const { requestValidationModeMember } = middlewareConfig;

    const requestChecksumCalculation = await config.requestChecksumCalculation();
    const responseChecksumValidation = await config.responseChecksumValidation();

    switch (requestChecksumCalculation) {
      case RequestChecksumCalculation.WHEN_REQUIRED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
        break;
      case RequestChecksumCalculation.WHEN_SUPPORTED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
        break;
    }

    switch (responseChecksumValidation) {
      case ResponseChecksumValidation.WHEN_REQUIRED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
        break;
      case ResponseChecksumValidation.WHEN_SUPPORTED:
        setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
        break;
    }

    // The value for input member to opt-in to best-effort validation of a checksum returned in the HTTP response is not set.
    if (requestValidationModeMember && !input[requestValidationModeMember]) {
      // Set requestValidationModeMember as ENABLED only if response checksum validation is supported.
      if (responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED) {
        input[requestValidationModeMember] = "ENABLED";
      }
    }

    return next(args);
  };
