import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Two clients are using the same AWS account, Amazon Lex bot, and user ID. </p>
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
