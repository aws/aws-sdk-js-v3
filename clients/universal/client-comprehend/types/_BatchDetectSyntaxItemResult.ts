import { _SyntaxToken, _UnmarshalledSyntaxToken } from "./_SyntaxToken";

/**
 * <p>The result of calling the operation. The operation returns one object that is successfully processed by the operation.</p>
 */
export interface _BatchDetectSyntaxItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The syntax tokens for the words in the document, one token for each word.</p>
   */
  SyntaxTokens?: Array<_SyntaxToken> | Iterable<_SyntaxToken>;
}

export interface _UnmarshalledBatchDetectSyntaxItemResult
  extends _BatchDetectSyntaxItemResult {
  /**
   * <p>The syntax tokens for the words in the document, one token for each word.</p>
   */
  SyntaxTokens?: Array<_UnmarshalledSyntaxToken>;
}
