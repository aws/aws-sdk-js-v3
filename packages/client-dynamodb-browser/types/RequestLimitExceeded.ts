import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
 */
export interface RequestLimitExceeded
  extends __ServiceException__<_RequestLimitExceededDetails> {
  name: "RequestLimitExceeded";
}

export interface _RequestLimitExceededDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
