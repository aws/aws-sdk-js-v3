import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The input text was not in valid UTF-8 character encoding. Check your text then retry your request.</p>
 */
export interface InvalidEncodingException
  extends __ServiceException__<_InvalidEncodingExceptionDetails> {
  name: "InvalidEncodingException";
}

export interface _InvalidEncodingExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
