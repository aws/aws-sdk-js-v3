import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Thrown when the limit on the number of objects or operations has been exceeded.
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * Message returned by LimitExceededException.
   */
  message: string;
}
