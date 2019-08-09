import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
 */
export interface CodeStorageExceededException
  extends __ServiceException__<_CodeStorageExceededExceptionDetails> {
  name: "CodeStorageExceededException";
}

export interface _CodeStorageExceededExceptionDetails {
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * _String shape
   */
  message?: string;
}
