/**
 * <p>Represents a directional edge in a directed acyclic graph (DAG).</p>
 */
export interface _CodeGenEdge {
  /**
   * <p>The ID of the node at which the edge starts.</p>
   */
  Source: string;

  /**
   * <p>The ID of the node at which the edge ends.</p>
   */
  Target: string;

  /**
   * <p>The target of the edge.</p>
   */
  TargetParameter?: string;
}

export type _UnmarshalledCodeGenEdge = _CodeGenEdge;
