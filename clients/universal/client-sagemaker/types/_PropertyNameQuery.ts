/**
 * <p>A type of <code>SuggestionQuery</code>. A suggestion query for retrieving property names that match the specified hint.</p>
 */
export interface _PropertyNameQuery {
  /**
   * <p>Text that is part of a property's name. The property names of hyperparameter, metric, and tag key names that begin with the specified text in the <code>PropertyNameHint</code>.</p>
   */
  PropertyNameHint: string;
}

export type _UnmarshalledPropertyNameQuery = _PropertyNameQuery;
