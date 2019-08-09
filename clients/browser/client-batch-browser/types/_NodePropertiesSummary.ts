/**
 * <p>An object representing the properties of a node that is associated with a multi-node parallel job.</p>
 */
export interface _NodePropertiesSummary {
  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   */
  isMainNode?: boolean;

  /**
   * <p>The number of nodes associated with a multi-node parallel job.</p>
   */
  numNodes?: number;

  /**
   * <p>The node index for the node. Node index numbering begins at zero. This index is also available on the node with the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   */
  nodeIndex?: number;
}

export type _UnmarshalledNodePropertiesSummary = _NodePropertiesSummary;
