import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export interface UnprocessableEntityException
  extends __ServiceException__<_UnprocessableEntityExceptionDetails> {
  name: "UnprocessableEntityException";
}

export interface _UnprocessableEntityExceptionDetails {
  /**
   * _ErrorCode shape
   */
  Code?:
    | "Unauthorized"
    | "Forbidden"
    | "NotFound"
    | "BadRequest"
    | "Conflict"
    | "ServiceFailure"
    | "ServiceUnavailable"
    | "Unprocessable"
    | "Throttled"
    | "PreconditionFailed"
    | string;

  /**
   * _String shape
   */
  Message?: string;
}
