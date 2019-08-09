import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have reached the maximum number of resources that can be created.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}
