import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The permissions policy for the resource is too large. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
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
