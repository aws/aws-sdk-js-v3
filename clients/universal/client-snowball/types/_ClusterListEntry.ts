/**
 * <p>Contains a cluster's state, a cluster's ID, and other important information.</p>
 */
export interface _ClusterListEntry {
  /**
   * <p>The 39-character ID for the cluster that you want to list, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId?: string;

  /**
   * <p>The current state of this cluster. For information about the state of a specific node, see <a>JobListEntry$JobState</a>.</p>
   */
  ClusterState?:
    | "AwaitingQuorum"
    | "Pending"
    | "InUse"
    | "Complete"
    | "Cancelled"
    | string;

  /**
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>Defines an optional description of the cluster, for example <code>Environmental Data Cluster-01</code>.</p>
   */
  Description?: string;
}

export interface _UnmarshalledClusterListEntry extends _ClusterListEntry {
  /**
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date;
}
