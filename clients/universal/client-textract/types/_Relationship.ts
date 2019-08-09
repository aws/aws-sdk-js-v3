/**
 * <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>
 */
export interface _Relationship {
  /**
   * <p>The type of relationship that the blocks in the IDs array have with the current block. The relationship can be <code>VALUE</code> or <code>CHILD</code>.</p>
   */
  Type?: "VALUE" | "CHILD" | string;

  /**
   * <p>An array of IDs for related blocks. You can get the type of the relationship from the <code>Type</code> element.</p>
   */
  Ids?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledRelationship extends _Relationship {
  /**
   * <p>An array of IDs for related blocks. You can get the type of the relationship from the <code>Type</code> element.</p>
   */
  Ids?: Array<string>;
}
