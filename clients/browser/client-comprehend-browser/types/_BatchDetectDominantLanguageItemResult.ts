import {
  _DominantLanguage,
  _UnmarshalledDominantLanguage
} from "./_DominantLanguage";

/**
 * <p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>
 */
export interface _BatchDetectDominantLanguageItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>DominantLanguage</a> objects describing the dominant languages in the document.</p>
   */
  Languages?: Array<_DominantLanguage> | Iterable<_DominantLanguage>;
}

export interface _UnmarshalledBatchDetectDominantLanguageItemResult
  extends _BatchDetectDominantLanguageItemResult {
  /**
   * <p>One or more <a>DominantLanguage</a> objects describing the dominant languages in the document.</p>
   */
  Languages?: Array<_UnmarshalledDominantLanguage>;
}
