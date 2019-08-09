import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation exceeded one or more limits.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}
