/**
 * <p>Provides a list of status information for a DB instance.</p>
 */
export interface _DBInstanceStatusInfo {
  /**
   * <p>This value is currently "read replication."</p>
   */
  StatusType?: string;

  /**
   * <p>Boolean value that is true if the instance is operating normally, or false if the instance is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the DB instance. For a StatusType of Read Replica, the values can be replicating, replication stop point set, replication stop point reached, error, stopped, or terminated.</p>
   */
  Status?: string;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in an error state, this value is blank.</p>
   */
  Message?: string;
}

export type _UnmarshalledDBInstanceStatusInfo = _DBInstanceStatusInfo;
