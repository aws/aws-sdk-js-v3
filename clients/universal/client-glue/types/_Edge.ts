/**
 * <p>An edge represents a directed connection between two AWS Glue components which are part of the workflow the edge belongs to.</p>
 */
export interface _Edge {
  /**
   * <p>The unique of the node within the workflow where the edge starts.</p>
   */
  SourceId?: string;

  /**
   * <p>The unique of the node within the workflow where the edge ends.</p>
   */
  DestinationId?: string;
}

export type _UnmarshalledEdge = _Edge;
