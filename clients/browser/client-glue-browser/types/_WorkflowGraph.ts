import { _Node, _UnmarshalledNode } from "./_Node";
import { _Edge, _UnmarshalledEdge } from "./_Edge";

/**
 * <p>A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them.</p>
 */
export interface _WorkflowGraph {
  /**
   * <p>A list of the the AWS Glue components belong to the workflow represented as nodes.</p>
   */
  Nodes?: Array<_Node> | Iterable<_Node>;

  /**
   * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
   */
  Edges?: Array<_Edge> | Iterable<_Edge>;
}

export interface _UnmarshalledWorkflowGraph extends _WorkflowGraph {
  /**
   * <p>A list of the the AWS Glue components belong to the workflow represented as nodes.</p>
   */
  Nodes?: Array<_UnmarshalledNode>;

  /**
   * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
   */
  Edges?: Array<_UnmarshalledEdge>;
}
