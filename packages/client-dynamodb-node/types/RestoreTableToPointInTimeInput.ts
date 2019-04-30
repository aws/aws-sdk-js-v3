import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreTableToPointInTimeInput shape
 */
export interface RestoreTableToPointInTimeInput {
  /**
   * <p>Name of the source table that is being restored.</p>
   */
  SourceTableName: string;

  /**
   * <p>The name of the new table to which it must be restored to.</p>
   */
  TargetTableName: string;

  /**
   * <p>Restore the table to the latest possible time. <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. </p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>Time in the past to restore the table to.</p>
   */
  RestoreDateTime?: Date | string | number;

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
