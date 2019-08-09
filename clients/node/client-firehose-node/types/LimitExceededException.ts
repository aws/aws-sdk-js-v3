import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have already reached the limit for a requested resource.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
