import { _KeyPhrase, _UnmarshalledKeyPhrase } from "./_KeyPhrase";

/**
 * <p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>
 */
export interface _BatchDetectKeyPhrasesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>KeyPhrase</a> objects, one for each key phrase detected in the document.</p>
   */
  KeyPhrases?: Array<_KeyPhrase> | Iterable<_KeyPhrase>;
}

export interface _UnmarshalledBatchDetectKeyPhrasesItemResult
  extends _BatchDetectKeyPhrasesItemResult {
  /**
   * <p>One or more <a>KeyPhrase</a> objects, one for each key phrase detected in the document.</p>
   */
  KeyPhrases?: Array<_UnmarshalledKeyPhrase>;
}
