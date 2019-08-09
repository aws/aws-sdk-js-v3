import { _Selector, _UnmarshalledSelector } from "./_Selector";

/**
 * <p>Defines the query to run against an object.</p>
 */
export interface _Query {
  /**
   * <p>List of selectors that define the query. An object must satisfy all of the selectors to match the query.</p>
   */
  selectors?: Array<_Selector> | Iterable<_Selector>;
}

export interface _UnmarshalledQuery extends _Query {
  /**
   * <p>List of selectors that define the query. An object must satisfy all of the selectors to match the query.</p>
   */
  selectors?: Array<_UnmarshalledSelector>;
}
