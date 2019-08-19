import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The allowed limit for the resource has been reached.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>The message.</p>
   */
  Message?: string;
}
