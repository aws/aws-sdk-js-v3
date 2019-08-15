import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the customer already owns the maximum allowed number of topics.</p>
 */
export interface TopicLimitExceededException
  extends __ServiceException__<_TopicLimitExceededExceptionDetails> {
  name: "TopicLimitExceededException";
}

export interface _TopicLimitExceededExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
