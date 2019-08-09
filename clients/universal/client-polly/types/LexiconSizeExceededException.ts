import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum size of the specified lexicon would be exceeded by this operation.</p>
 */
export interface LexiconSizeExceededException
  extends __ServiceException__<_LexiconSizeExceededExceptionDetails> {
  name: "LexiconSizeExceededException";
}

export interface _LexiconSizeExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
