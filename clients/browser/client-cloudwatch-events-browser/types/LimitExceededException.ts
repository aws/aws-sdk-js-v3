import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You tried to create more resources than is allowed.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}
