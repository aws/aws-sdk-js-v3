import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLogEventsInput shape
 */
export interface GetLogEventsInput {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string;

  /**
   * <p>The start of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to this time or later than this time are included. Events with a timestamp earlier than this time are not included.</p>
   */
  startTime?: number;

  /**
   * <p>The end of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to or later than this time are not included.</p>
   */
  endTime?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of log events returned. If you don't specify a value, the maximum is as many log events as can fit in a response size of 1 MB, up to 10,000 log events.</p>
   */
  limit?: number;

  /**
   * <p>If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is false.</p> <p>If you are using <code>nextToken</code> in this operation, you must specify <code>true</code> for <code>startFromHead</code>.</p>
   */
  startFromHead?: boolean;

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
