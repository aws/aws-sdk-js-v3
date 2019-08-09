import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface StartReplicationTaskInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task to be started.</p>
   */
  ReplicationTaskArn: string;

  /**
   * <p>The type of replication task.</p>
   */
  StartReplicationTaskType:
    | "start-replication"
    | "resume-processing"
    | "reload-target"
    | string;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date | string | number;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   */
  CdcStartPosition?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
