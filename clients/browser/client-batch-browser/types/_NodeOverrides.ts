import {
  _NodePropertyOverride,
  _UnmarshalledNodePropertyOverride
} from "./_NodePropertyOverride";

/**
 * <p>Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation.</p>
 */
export interface _NodeOverrides {
  /**
   * <p>The number of nodes to use with a multi-node parallel job. This value overrides the number of nodes that are specified in the job definition. To use this override:</p> <ul> <li> <p>There must be at least one node range in your job definition that has an open upper boundary (such as <code>:</code> or <code>n:</code>).</p> </li> <li> <p>The lower boundary of the node range specified in the job definition must be fewer than the number of nodes specified in the override.</p> </li> <li> <p>The main node index specified in the job definition must be fewer than the number of nodes specified in the override.</p> </li> </ul>
   */
  numNodes?: number;

  /**
   * <p>The node property overrides for the job.</p>
   */
  nodePropertyOverrides?:
    | Array<_NodePropertyOverride>
    | Iterable<_NodePropertyOverride>;
}

export interface _UnmarshalledNodeOverrides extends _NodeOverrides {
  /**
   * <p>The node property overrides for the job.</p>
   */
  nodePropertyOverrides?: Array<_UnmarshalledNodePropertyOverride>;
}
