import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TranslateTextInput shape
 */
export interface TranslateTextInput {
  /**
   * <p>The text to translate. The text string can be a maximum of 5,000 bytes long. Depending on your character set, this may be fewer than 5,000 characters.</p>
   */
  Text: string;

  /**
   * <p>The TerminologyNames list that is taken as input to the TranslateText request. This has a minimum length of 0 and a maximum length of 1.</p>
   */
  TerminologyNames?: Array<string> | Iterable<string>;

  /**
   * <p>The language code for the language of the source text. The language must be a language supported by Amazon Translate. </p> <p>To have Amazon Translate determine the source language of your text, you can specify <code>auto</code> in the <code>SourceLanguageCode</code> field. If you specify <code>auto</code>, Amazon Translate will call Amazon Comprehend to determine the source language.</p>
   */
  SourceLanguageCode: string;

  /**
   * <p>The language code requested for the language of the target text. The language must be a language supported by Amazon Translate.</p>
   */
  TargetLanguageCode: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
