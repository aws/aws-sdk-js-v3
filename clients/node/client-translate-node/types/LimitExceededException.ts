import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified limit has been exceeded. Review your request and retry it with a quantity below the stated limit.</p>
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
