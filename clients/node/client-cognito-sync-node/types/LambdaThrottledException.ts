import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Lambda throttled your account, please contact AWS Support</p>
 */
export interface LambdaThrottledException
  extends __ServiceException__<_LambdaThrottledExceptionDetails> {
  name: "LambdaThrottledException";
}

export interface _LambdaThrottledExceptionDetails {
  /**
   * <p>A message returned when an LambdaThrottledException is thrown</p>
   */
  message: string;
}
