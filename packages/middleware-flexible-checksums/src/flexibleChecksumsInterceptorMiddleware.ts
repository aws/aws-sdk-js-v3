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

export interface FlexibleChecksumsInterceptorMiddlewareConfig {
  /**
   * Defines a top-level operation input member used to opt-in to best-effort validation
   * of a checksum returned in the HTTP response of the operation.
   */
  requestValidationModeMember?: string;
}

/**
 * @internal
 */
export const flexibleChecksumsInterceptorMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "flexibleChecksumsInterceptorMiddleware",
  toMiddleware: "serializerMiddleware",
  relation: "before",
  tags: ["BODY_CHECKSUM"],
  override: true,
};

/**
 * @internal
 *
 * The interceptor counterpart to the flexibleChecksumsMiddleware.
 */
export const flexibleChecksumsInterceptorMiddleware =
  (
    config: PreviouslyResolved,
    middlewareConfig: FlexibleChecksumsInterceptorMiddlewareConfig
  ): SerializeMiddleware<any, any> =>
  <Output extends MetadataBearer>(
    next: SerializeHandler<any, Output>,
    context: HandlerExecutionContext
  ): SerializeHandler<any, Output> =>
  async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
    const input = args.input;
    const { requestValidationModeMember } = middlewareConfig;
    const responseChecksumValidation = await config.responseChecksumValidation();

    const isResponseChecksumValidationNeeded =
      requestValidationModeMember &&
      (input[requestValidationModeMember] === "ENABLED" ||
        responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED);

    if (isResponseChecksumValidationNeeded) {
      input[requestValidationModeMember] = "ENABLED";
    }

    return next(args);
  };
