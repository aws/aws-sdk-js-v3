import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 */
export interface InvalidArnException
  extends __ServiceException__<_InvalidArnExceptionDetails> {
  name: "InvalidArnException";
}

export interface _InvalidArnExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
