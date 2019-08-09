import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the software token TOTP multi-factor authentication (MFA) is not enabled for the user pool.</p>
 */
export interface SoftwareTokenMFANotFoundException
  extends __ServiceException__<_SoftwareTokenMFANotFoundExceptionDetails> {
  name: "SoftwareTokenMFANotFoundException";
}

export interface _SoftwareTokenMFANotFoundExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
