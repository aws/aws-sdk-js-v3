import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the maximum number of trails is reached.</p>
 */
export interface MaximumNumberOfTrailsExceededException
  extends __ServiceException__<_MaximumNumberOfTrailsExceededExceptionDetails> {
  name: "MaximumNumberOfTrailsExceededException";
}

export interface _MaximumNumberOfTrailsExceededExceptionDetails {}
