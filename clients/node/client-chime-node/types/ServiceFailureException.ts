import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service encountered an unexpected error.</p>
 */
export interface ServiceFailureException
  extends __ServiceException__<_ServiceFailureExceptionDetails> {
  name: "ServiceFailureException";
}

export interface _ServiceFailureExceptionDetails {
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
