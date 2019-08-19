import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export interface ThrottledClientException
  extends __ServiceException__<_ThrottledClientExceptionDetails> {
  name: "ThrottledClientException";
}

export interface _ThrottledClientExceptionDetails {
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
