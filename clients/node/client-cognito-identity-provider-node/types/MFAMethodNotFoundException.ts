import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when Amazon Cognito cannot find a multi-factor authentication (MFA) method.</p>
 */
export interface MFAMethodNotFoundException
  extends __ServiceException__<_MFAMethodNotFoundExceptionDetails> {
  name: "MFAMethodNotFoundException";
}

export interface _MFAMethodNotFoundExceptionDetails {
  /**
   * <p>The message returned when Amazon Cognito throws an MFA method not found exception.</p>
   */
  message?: string;
}
