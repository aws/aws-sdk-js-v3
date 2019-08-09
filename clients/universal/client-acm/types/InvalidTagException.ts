import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or both of the values that make up the key-value pair is not valid. For example, you cannot specify a tag value that begins with <code>aws:</code>.</p>
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
