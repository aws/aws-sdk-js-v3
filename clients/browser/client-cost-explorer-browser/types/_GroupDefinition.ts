/**
 * <p>Represents a group when you specify a group by criteria or in the response to a query with a specific grouping.</p>
 */
export interface _GroupDefinition {
  /**
   * <p>The string that represents the type of group.</p>
   */
  Type?: "DIMENSION" | "TAG" | string;

  /**
   * <p>The string that represents a key for a specified group.</p>
   */
  Key?: string;
}

export type _UnmarshalledGroupDefinition = _GroupDefinition;
