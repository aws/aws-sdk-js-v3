/**
 * <p>Describes a placement group.</p>
 */
export interface _PlacementGroup {
  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The state of the placement group.</p>
   */
  State?: "pending" | "available" | "deleting" | "deleted" | string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: "cluster" | "spread" | "partition" | string;

  /**
   * <p>The number of partitions. Valid only if <b>strategy</b> is set to <code>partition</code>.</p>
   */
  PartitionCount?: number;
}

export type _UnmarshalledPlacementGroup = _PlacementGroup;
