/**
 * <p>Update action that has failed to be processed for the corresponding apply/stop request</p>
 */
export interface _UnprocessedUpdateAction {
  /**
   * <p>The replication group ID</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The error type for requests that are not processed</p>
   */
  ErrorType?: string;

  /**
   * <p>The error message that describes the reason the request was not processed</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledUnprocessedUpdateAction = _UnprocessedUpdateAction;
