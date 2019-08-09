import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There are too many instances of the specified resource type.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}
