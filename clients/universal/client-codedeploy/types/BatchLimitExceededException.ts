import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 */
export interface BatchLimitExceededException
  extends __ServiceException__<_BatchLimitExceededExceptionDetails> {
  name: "BatchLimitExceededException";
}

export interface _BatchLimitExceededExceptionDetails {}
