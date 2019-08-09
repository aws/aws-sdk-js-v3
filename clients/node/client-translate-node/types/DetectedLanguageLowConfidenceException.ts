import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The confidence that Amazon Comprehend accurately detected the source language is low. If a low confidence level is acceptable for your application, you can use the language in the exception to call Amazon Translate again. For more information, see the <a href="https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html">DetectDominantLanguage</a> operation in the <i>Amazon Comprehend Developer Guide</i>. </p>
 */
export interface DetectedLanguageLowConfidenceException
  extends __ServiceException__<_DetectedLanguageLowConfidenceExceptionDetails> {
  name: "DetectedLanguageLowConfidenceException";
}

export interface _DetectedLanguageLowConfidenceExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The language code of the auto-detected language from Amazon Comprehend.</p>
   */
  DetectedLanguageCode?: string;
}
