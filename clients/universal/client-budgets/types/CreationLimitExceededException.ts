import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've exceeded the notification or subscriber limit.</p>
 */
export interface CreationLimitExceededException
  extends __ServiceException__<_CreationLimitExceededExceptionDetails> {
  name: "CreationLimitExceededException";
}

export interface _CreationLimitExceededExceptionDetails {
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}
