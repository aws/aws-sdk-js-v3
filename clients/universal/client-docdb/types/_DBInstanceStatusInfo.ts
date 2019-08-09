/**
 * <p>Provides a list of status information for a DB instance.</p>
 */
export interface _DBInstanceStatusInfo {
  /**
   * <p>This value is currently "<code>read replication</code>."</p>
   */
  StatusType?: string;

  /**
   * <p>A Boolean value that is <code>true</code> if the instance is operating normally, or <code>false</code> if the instance is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the DB instance. For a <code>StatusType</code> of read replica, the values can be <code>replicating</code>, error, <code>stopped</code>, or <code>terminated</code>.</p>
   */
  Status?: string;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in an error state, this value is blank.</p>
   */
  Message?: string;
}

export type _UnmarshalledDBInstanceStatusInfo = _DBInstanceStatusInfo;
