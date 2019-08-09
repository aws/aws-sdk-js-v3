import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation timed out.</p>
 */
export interface OperationTimeoutException
  extends __ServiceException__<_OperationTimeoutExceptionDetails> {
  name: "OperationTimeoutException";
}

export interface _OperationTimeoutExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
