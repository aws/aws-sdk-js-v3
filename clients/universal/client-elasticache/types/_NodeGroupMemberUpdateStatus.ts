/**
 * <p>The status of the service update on the node group member </p>
 */
export interface _NodeGroupMemberUpdateStatus {
  /**
   * <p>The cache cluster ID</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The node ID of the cache cluster</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The update status of the node</p>
   */
  NodeUpdateStatus?:
    | "not-applied"
    | "waiting-to-start"
    | "in-progress"
    | "stopping"
    | "stopped"
    | "complete"
    | string;

  /**
   * <p>The deletion date of the node</p>
   */
  NodeDeletionDate?: Date | string | number;

  /**
   * <p>The start date of the update for a node</p>
   */
  NodeUpdateStartDate?: Date | string | number;

  /**
   * <p>The end date of the update for a node</p>
   */
  NodeUpdateEndDate?: Date | string | number;

  /**
   * <p>Reflects whether the update was initiated by the customer or automatically applied</p>
   */
  NodeUpdateInitiatedBy?: "system" | "customer" | string;

  /**
   * <p>The date when the update is triggered</p>
   */
  NodeUpdateInitiatedDate?: Date | string | number;

  /**
   * <p>The date when the NodeUpdateStatus was last modified</p>
   */
  NodeUpdateStatusModifiedDate?: Date | string | number;
}

export interface _UnmarshalledNodeGroupMemberUpdateStatus
  extends _NodeGroupMemberUpdateStatus {
  /**
   * <p>The deletion date of the node</p>
   */
  NodeDeletionDate?: Date;

  /**
   * <p>The start date of the update for a node</p>
   */
  NodeUpdateStartDate?: Date;

  /**
   * <p>The end date of the update for a node</p>
   */
  NodeUpdateEndDate?: Date;

  /**
   * <p>The date when the update is triggered</p>
   */
  NodeUpdateInitiatedDate?: Date;

  /**
   * <p>The date when the NodeUpdateStatus was last modified</p>
   */
  NodeUpdateStatusModifiedDate?: Date;
}
