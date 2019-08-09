import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Polly can't find the specified lexicon. Verify that the lexicon's name is spelled correctly, and then try again.</p>
 */
export interface InvalidLexiconException
  extends __ServiceException__<_InvalidLexiconExceptionDetails> {
  name: "InvalidLexiconException";
}

export interface _InvalidLexiconExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
