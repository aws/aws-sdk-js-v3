import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartQueryInput shape
 */
export interface StartQueryInput {
  /**
   * <p>The log group on which to perform the query.</p> <p>A <code>StartQuery</code> operation must include a <code>logGroupNames</code> or a <code>logGroupName</code> parameter, but not both.</p>
   */
  logGroupName?: string;

  /**
   * <p>The list of log groups to be queried. You can include up to 20 log groups.</p> <p>A <code>StartQuery</code> operation must include a <code>logGroupNames</code> or a <code>logGroupName</code> parameter, but not both.</p>
   */
  logGroupNames?: Array<string> | Iterable<string>;

  /**
   * <p>The beginning of the time range to query. The range is inclusive, so the specified start time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.</p>
   */
  startTime: number;

  /**
   * <p>The end of the time range to query. The range is inclusive, so the specified end time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.</p>
   */
  endTime: number;

  /**
   * <p>The query string to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString: string;

  /**
   * <p>The maximum number of log events to return in the query. If the query string uses the <code>fields</code> command, only the specified fields and their values are returned.</p>
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
