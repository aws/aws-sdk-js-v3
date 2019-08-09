import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a verification code fails to deliver successfully.</p>
 */
export interface CodeDeliveryFailureException
  extends __ServiceException__<_CodeDeliveryFailureExceptionDetails> {
  name: "CodeDeliveryFailureException";
}

export interface _CodeDeliveryFailureExceptionDetails {
  /**
   * <p>The message sent when a verification code fails to deliver successfully.</p>
   */
  message?: string;
}
