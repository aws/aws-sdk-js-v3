import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export interface UnauthorizedClientException
  extends __ServiceException__<_UnauthorizedClientExceptionDetails> {
  name: "UnauthorizedClientException";
}

export interface _UnauthorizedClientExceptionDetails {
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
