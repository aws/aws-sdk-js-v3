import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Translate does not support translation from the language of the source text into the requested target language. For more information, see <a>how-to-error-msg</a>. </p>
 */
export interface UnsupportedLanguagePairException
  extends __ServiceException__<_UnsupportedLanguagePairExceptionDetails> {
  name: "UnsupportedLanguagePairException";
}

export interface _UnsupportedLanguagePairExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The language code for the language of the input text. </p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language code for the language of the translated text. </p>
   */
  TargetLanguageCode?: string;
}
