import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The language specified in the lexicon is unsupported. For a list of supported languages, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.</p>
 */
export interface UnsupportedPlsLanguageException
  extends __ServiceException__<_UnsupportedPlsLanguageExceptionDetails> {
  name: "UnsupportedPlsLanguageException";
}

export interface _UnsupportedPlsLanguageExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
