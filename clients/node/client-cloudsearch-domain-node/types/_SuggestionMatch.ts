/**
 * <p>An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>. </p>
 */
export interface _SuggestionMatch {
  /**
   * <p>The string that matches the query string specified in the <code>SuggestRequest</code>. </p>
   */
  suggestion?: string;

  /**
   * <p>The relevance score of a suggested match.</p>
   */
  score?: number;

  /**
   * <p>The document ID of the suggested document.</p>
   */
  id?: string;
}

export type _UnmarshalledSuggestionMatch = _SuggestionMatch;
