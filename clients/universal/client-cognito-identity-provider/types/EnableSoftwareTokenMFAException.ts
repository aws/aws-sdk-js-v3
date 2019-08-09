import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when there is a code mismatch and the service fails to configure the software token TOTP multi-factor authentication (MFA).</p>
 */
export interface EnableSoftwareTokenMFAException
  extends __ServiceException__<_EnableSoftwareTokenMFAExceptionDetails> {
  name: "EnableSoftwareTokenMFAException";
}

export interface _EnableSoftwareTokenMFAExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
