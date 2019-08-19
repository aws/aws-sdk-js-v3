import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
 */
export interface UnsupportedLanguageException
  extends __ServiceException__<_UnsupportedLanguageExceptionDetails> {
  name: "UnsupportedLanguageException";
}

export interface _UnsupportedLanguageExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
