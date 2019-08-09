import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLogStreamsInput shape
 */
export interface DescribeLogStreamsInput {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string;

  /**
   * <p>The prefix to match.</p> <p>If <code>orderBy</code> is <code>LastEventTime</code>,you cannot specify this parameter.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * <p>If the value is <code>LogStreamName</code>, the results are ordered by log stream name. If the value is <code>LastEventTime</code>, the results are ordered by the event time. The default value is <code>LogStreamName</code>.</p> <p>If you order the results by event time, you cannot specify the <code>logStreamNamePrefix</code> parameter.</p> <p>lastEventTimestamp represents the time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. lastEventTimeStamp updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but may take longer in some rare situations.</p>
   */
  orderBy?: "LogStreamName" | "LastEventTime" | string;

  /**
   * <p>If the value is true, results are returned in descending order. If the value is to false, results are returned in ascending order. The default value is false.</p>
   */
  descending?: boolean;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

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
