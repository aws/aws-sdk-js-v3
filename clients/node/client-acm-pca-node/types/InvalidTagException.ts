import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tag associated with the CA is not valid. The invalid argument is contained in the message field.</p>
 */
export interface InvalidTagException
  extends __ServiceException__<_InvalidTagExceptionDetails> {
  name: "InvalidTagException";
}

export interface _InvalidTagExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
