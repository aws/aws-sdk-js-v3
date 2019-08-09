/**
 * <p>Represents a parameter value that is applicable to a particular node type.</p>
 */
export interface _NodeTypeSpecificValue {
  /**
   * <p>A node type to which the parameter value applies.</p>
   */
  NodeType?: string;

  /**
   * <p>The parameter value for this node type.</p>
   */
  Value?: string;
}

export type _UnmarshalledNodeTypeSpecificValue = _NodeTypeSpecificValue;
