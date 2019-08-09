import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource ARN is invalid.</p>
 */
export interface InvalidArnException
  extends __ServiceException__<_InvalidArnExceptionDetails> {
  name: "InvalidArnException";
}

export interface _InvalidArnExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
