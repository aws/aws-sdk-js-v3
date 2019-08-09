import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateExportTaskInput shape
 */
export interface CreateExportTaskInput {
  /**
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string;

  /**
   * <p>Export only log streams that match the provided prefix. If you don't specify a value, no prefix filter is applied.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * <p>The start time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp earlier than this time are not exported.</p>
   */
  from: number;

  /**
   * <p>The end time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.</p>
   */
  to: number;

  /**
   * <p>The name of S3 bucket for the exported log data. The bucket must be in the same AWS region.</p>
   */
  destination: string;

  /**
   * <p>The prefix used as the start of the key for every object exported. If you don't specify a value, the default is <code>exportedlogs</code>.</p>
   */
  destinationPrefix?: string;

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
