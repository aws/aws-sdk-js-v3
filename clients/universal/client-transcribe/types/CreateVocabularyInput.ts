import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateVocabularyInput shape
 */
export interface CreateVocabularyInput {
  /**
   * <p>The name of the vocabulary. The name must be unique within an AWS account. The name is case-sensitive.</p>
   */
  VocabularyName: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode:
    | "en-US"
    | "es-US"
    | "en-AU"
    | "fr-CA"
    | "en-GB"
    | "de-DE"
    | "pt-BR"
    | "fr-FR"
    | "it-IT"
    | "ko-KR"
    | "es-ES"
    | "en-IN"
    | "hi-IN"
    | "ar-SA"
    | string;

  /**
   * <p>An array of strings that contains the vocabulary entries. </p>
   */
  Phrases?: Array<string> | Iterable<string>;

  /**
   * <p>The S3 location of the text file that contains the definition of the custom vocabulary. The URI must be in the same region as the API endpoint that you are calling. The general form is </p> <p> <code> https://s3-&lt;aws-region&gt;.amazonaws.com/&lt;bucket-name&gt;/&lt;keyprefix&gt;/&lt;objectkey&gt; </code> </p> <p>For example:</p> <p> <code>https://s3-us-east-1.amazonaws.com/examplebucket/vocab.txt</code> </p> <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p> <p>For more information about custom vocabularies, see <a href="http://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;

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
