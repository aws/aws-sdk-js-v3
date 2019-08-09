import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client is sending more than the allowed number of requests per unit of time.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * <p>429</p>
   */
  ErrorCode?: string;

  /**
   * <p>The client is sending more than the allowed number of requests per unit of time.</p>
   */
  Message?: string;
}
