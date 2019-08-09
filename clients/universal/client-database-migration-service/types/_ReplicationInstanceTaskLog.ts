/**
 * <p>Contains metadata for a replication instance task log.</p>
 */
export interface _ReplicationInstanceTaskLog {
  /**
   * <p>The name of the replication task.</p>
   */
  ReplicationTaskName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The size, in bytes, of the replication task log.</p>
   */
  ReplicationInstanceTaskLogSize?: number;
}

export type _UnmarshalledReplicationInstanceTaskLog = _ReplicationInstanceTaskLog;
