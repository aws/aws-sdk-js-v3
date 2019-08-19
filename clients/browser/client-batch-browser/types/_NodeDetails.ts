/**
 * <p>An object representing the details of a multi-node parallel job node.</p>
 */
export interface _NodeDetails {
  /**
   * <p>The node index for the node. Node index numbering begins at zero. This index is also available on the node with the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   */
  nodeIndex?: number;

  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   */
  isMainNode?: boolean;
}

export type _UnmarshalledNodeDetails = _NodeDetails;
