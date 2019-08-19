import { _Task } from "./_Task";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * NotifyMigrationTaskStateInput shape
 */
export interface NotifyMigrationTaskStateInput {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string;

  /**
   * <p>Unique identifier that references the migration task.</p>
   */
  MigrationTaskName: string;

  /**
   * <p>Information about the task's progress and status.</p>
   */
  Task: _Task;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime: Date | string | number;

  /**
   * <p>Number of seconds after the UpdateDateTime within which the Migration Hub can expect an update. If Migration Hub does not receive an update within the specified interval, then the migration task will be considered stale.</p>
   */
  NextUpdateSeconds: number;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

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
