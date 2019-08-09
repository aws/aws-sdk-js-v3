import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
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
