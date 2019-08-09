import {
  _NodeRangeProperty,
  _UnmarshalledNodeRangeProperty
} from "./_NodeRangeProperty";

/**
 * <p>An object representing the node properties of a multi-node parallel job.</p>
 */
export interface _NodeProperties {
  /**
   * <p>The number of nodes associated with a multi-node parallel job.</p>
   */
  numNodes: number;

  /**
   * <p>Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.</p>
   */
  mainNode: number;

  /**
   * <p>A list of node ranges and their properties associated with a multi-node parallel job.</p>
   */
  nodeRangeProperties: Array<_NodeRangeProperty> | Iterable<_NodeRangeProperty>;
}

export interface _UnmarshalledNodeProperties extends _NodeProperties {
  /**
   * <p>A list of node ranges and their properties associated with a multi-node parallel job.</p>
   */
  nodeRangeProperties: Array<_UnmarshalledNodeRangeProperty>;
}
