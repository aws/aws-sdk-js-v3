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
import { ResponseChecksumValidation } from "./constants";

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
    const responseChecksumValidation = await config.responseChecksumValidation();

    if (responseChecksumValidation === ResponseChecksumValidation.WHEN_REQUIRED) {
      setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
    } else {
      setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
    }

    if (requestValidationModeMember && responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED) {
      input[requestValidationModeMember] = "ENABLED";
    }

    return next(args);
  };
