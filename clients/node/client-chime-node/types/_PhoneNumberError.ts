/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
 */
export interface _PhoneNumberError {
  /**
   * <p>The phone number ID for which the action failed.</p>
   */
  PhoneNumberId?: string;

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

export type _UnmarshalledPhoneNumberError = _PhoneNumberError;
