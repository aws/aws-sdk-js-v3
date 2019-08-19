import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client is sending more than the allowed number of requests per unit of time.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}
