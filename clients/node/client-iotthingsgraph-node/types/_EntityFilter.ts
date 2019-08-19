/**
 * <p>An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.</p>
 */
export interface _EntityFilter {
  /**
   * <p>The name of the entity search filter field. <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example, you can filter on the ID of a property that is used in a state.</p>
   */
  name?:
    | "NAME"
    | "NAMESPACE"
    | "SEMANTIC_TYPE_PATH"
    | "REFERENCED_ENTITY_ID"
    | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEntityFilter extends _EntityFilter {
  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value?: Array<string>;
}
