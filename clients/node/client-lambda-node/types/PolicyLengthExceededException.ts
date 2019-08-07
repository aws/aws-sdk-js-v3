import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lambda function access policy is limited to 20 KB.</p>
 */
export interface PolicyLengthExceededException
  extends __ServiceException__<_PolicyLengthExceededExceptionDetails> {
  name: "PolicyLengthExceededException";
}

export interface _PolicyLengthExceededExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  message?: string;
}
