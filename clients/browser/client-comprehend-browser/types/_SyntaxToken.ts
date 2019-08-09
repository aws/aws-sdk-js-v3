import {
  _PartOfSpeechTag,
  _UnmarshalledPartOfSpeechTag
} from "./_PartOfSpeechTag";

/**
 * <p>Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.</p>
 */
export interface _SyntaxToken {
  /**
   * <p>A unique identifier for a token.</p>
   */
  TokenId?: number;

  /**
   * <p>The word that was recognized in the source text.</p>
   */
  Text?: string;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the word.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the word.</p>
   */
  EndOffset?: number;

  /**
   * <p>Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of speech was correctly identified. For more information, see <a>how-syntax</a>.</p>
   */
  PartOfSpeech?: _PartOfSpeechTag;
}

export interface _UnmarshalledSyntaxToken extends _SyntaxToken {
  /**
   * <p>Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of speech was correctly identified. For more information, see <a>how-syntax</a>.</p>
   */
  PartOfSpeech?: _UnmarshalledPartOfSpeechTag;
}
