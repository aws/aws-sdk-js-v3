import {
  _ReplicationTaskStats,
  _UnmarshalledReplicationTaskStats
} from "./_ReplicationTaskStats";

/**
 * <p/>
 */
export interface _ReplicationTask {
  /**
   * <p>The user-assigned replication task identifier or name.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  SourceEndpointArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  TargetEndpointArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The type of migration.</p>
   */
  MigrationType?: "full-load" | "cdc" | "full-load-and-cdc" | string;

  /**
   * <p>Table mappings specified in the task.</p>
   */
  TableMappings?: string;

  /**
   * <p>The settings for the replication task.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * <p>The status of the replication task.</p>
   */
  Status?: string;

  /**
   * <p>The last error (failure) message generated for the replication instance.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The reason the replication task was stopped.</p>
   */
  StopReason?: string;

  /**
   * <p>The date the replication task was created.</p>
   */
  ReplicationTaskCreationDate?: Date | string | number;

  /**
   * <p>The date the replication task is scheduled to start.</p>
   */
  ReplicationTaskStartDate?: Date | string | number;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want the CDC operation to start. Specifying both values results in an error.</p> <p>The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   */
  CdcStartPosition?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * <p>Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the <code>CdcStartPosition</code> parameter to start a CDC operation that begins at that checkpoint.</p>
   */
  RecoveryCheckpoint?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The statistics for the task, including elapsed time, tables loaded, and table errors.</p>
   */
  ReplicationTaskStats?: _ReplicationTaskStats;
}

export interface _UnmarshalledReplicationTask extends _ReplicationTask {
  /**
   * <p>The date the replication task was created.</p>
   */
  ReplicationTaskCreationDate?: Date;

  /**
   * <p>The date the replication task is scheduled to start.</p>
   */
  ReplicationTaskStartDate?: Date;

  /**
   * <p>The statistics for the task, including elapsed time, tables loaded, and table errors.</p>
   */
  ReplicationTaskStats?: _UnmarshalledReplicationTaskStats;
}
