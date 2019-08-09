import {
  _PropertyNameQuery,
  _UnmarshalledPropertyNameQuery
} from "./_PropertyNameQuery";

/**
 * <p>Limits the property names that are included in the response.</p>
 */
export interface _SuggestionQuery {
  /**
   * <p>A type of <code>SuggestionQuery</code>. Defines a property name hint. Only property names that match the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: _PropertyNameQuery;
}

export interface _UnmarshalledSuggestionQuery extends _SuggestionQuery {
  /**
   * <p>A type of <code>SuggestionQuery</code>. Defines a property name hint. Only property names that match the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: _UnmarshalledPropertyNameQuery;
}
