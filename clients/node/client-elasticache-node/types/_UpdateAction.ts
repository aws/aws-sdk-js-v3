import {
  _NodeGroupUpdateStatus,
  _UnmarshalledNodeGroupUpdateStatus
} from "./_NodeGroupUpdateStatus";

/**
 * <p>The status of the service update for a specific replication group</p>
 */
export interface _UpdateAction {
  /**
   * <p>The ID of the replication group</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The date the update is first available</p>
   */
  ServiceUpdateReleaseDate?: Date | string | number;

  /**
   * <p>The severity of the service update</p>
   */
  ServiceUpdateSeverity?: "critical" | "important" | "medium" | "low" | string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: "available" | "cancelled" | "expired" | string;

  /**
   * <p>The recommended date to apply the service update to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date | string | number;

  /**
   * <p>Reflects the nature of the service update </p>
   */
  ServiceUpdateType?: "security-update" | string;

  /**
   * <p>The date that the service update is available to a replication group</p>
   */
  UpdateActionAvailableDate?: Date | string | number;

  /**
   * <p>The status of the update action</p>
   */
  UpdateActionStatus?:
    | "not-applied"
    | "waiting-to-start"
    | "in-progress"
    | "stopping"
    | "stopped"
    | "complete"
    | string;

  /**
   * <p>The progress of the service update on the replication group</p>
   */
  NodesUpdated?: string;

  /**
   * <p>The date when the UpdateActionStatus was last modified</p>
   */
  UpdateActionStatusModifiedDate?: Date | string | number;

  /**
   * <p>If yes, all nodes in the replication group have been updated by the recommended apply-by date. If no, at least one node in the replication group have not been updated by the recommended apply-by date. If N/A, the replication group was created after the recommended apply-by date.</p>
   */
  SlaMet?: "yes" | "no" | "n/a" | string;

  /**
   * <p>The status of the service update on the node group</p>
   */
  NodeGroupUpdateStatus?:
    | Array<_NodeGroupUpdateStatus>
    | Iterable<_NodeGroupUpdateStatus>;

  /**
   * <p>The estimated length of time for the update to complete</p>
   */
  EstimatedUpdateTime?: string;
}

export interface _UnmarshalledUpdateAction extends _UpdateAction {
  /**
   * <p>The date the update is first available</p>
   */
  ServiceUpdateReleaseDate?: Date;

  /**
   * <p>The recommended date to apply the service update to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date;

  /**
   * <p>The date that the service update is available to a replication group</p>
   */
  UpdateActionAvailableDate?: Date;

  /**
   * <p>The date when the UpdateActionStatus was last modified</p>
   */
  UpdateActionStatusModifiedDate?: Date;

  /**
   * <p>The status of the service update on the node group</p>
   */
  NodeGroupUpdateStatus?: Array<_UnmarshalledNodeGroupUpdateStatus>;
}
