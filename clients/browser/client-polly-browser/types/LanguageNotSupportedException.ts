import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The language specified is not currently supported by Amazon Polly in this capacity.</p>
 */
export interface LanguageNotSupportedException
  extends __ServiceException__<_LanguageNotSupportedExceptionDetails> {
  name: "LanguageNotSupportedException";
}

export interface _LanguageNotSupportedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
