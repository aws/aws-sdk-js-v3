/**
 * <p>Update action that has been processed for the corresponding apply/stop request</p>
 */
export interface _ProcessedUpdateAction {
  /**
   * <p>The ID of the replication group</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the update action on the Redis cluster</p>
   */
  UpdateActionStatus?:
    | "not-applied"
    | "waiting-to-start"
    | "in-progress"
    | "stopping"
    | "stopped"
    | "complete"
    | string;
}

export type _UnmarshalledProcessedUpdateAction = _ProcessedUpdateAction;
