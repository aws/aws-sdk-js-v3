/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.</p>
 */
export interface _UserError {
  /**
   * <p>The user ID for which the action failed.</p>
   */
  UserId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?:
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
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledUserError = _UserError;
