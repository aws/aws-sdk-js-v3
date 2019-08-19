import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
