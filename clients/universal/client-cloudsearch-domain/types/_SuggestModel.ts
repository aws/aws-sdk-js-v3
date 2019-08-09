import {
  _SuggestionMatch,
  _UnmarshalledSuggestionMatch
} from "./_SuggestionMatch";

/**
 * <p>Container for the suggestion information returned in a <code>SuggestResponse</code>.</p>
 */
export interface _SuggestModel {
  /**
   * <p>The query string specified in the suggest request.</p>
   */
  query?: string;

  /**
   * <p>The number of documents that were found to match the query string.</p>
   */
  found?: number;

  /**
   * <p>The documents that match the query string.</p>
   */
  suggestions?: Array<_SuggestionMatch> | Iterable<_SuggestionMatch>;
}

export interface _UnmarshalledSuggestModel extends _SuggestModel {
  /**
   * <p>The documents that match the query string.</p>
   */
  suggestions?: Array<_UnmarshalledSuggestionMatch>;
}
