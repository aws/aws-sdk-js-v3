import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseLogEventsInput shape
 */
export interface GetRelationalDatabaseLogEventsInput {
  /**
   * <p>The name of your database for which to get log events.</p>
   */
  relationalDatabaseName: string;

  /**
   * <p>The name of the log stream.</p> <p>Use the <code>get relational database log streams</code> operation to get a list of available log streams.</p>
   */
  logStreamName: string;

  /**
   * <p>The start of the time interval from which to get log events.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Universal Coordinated Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the start time.</p> </li> </ul>
   */
  startTime?: Date | string | number;

  /**
   * <p>The end of the time interval from which to get log events.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Universal Coordinated Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the end time.</p> </li> </ul>
   */
  endTime?: Date | string | number;

  /**
   * <p>Parameter to specify if the log should start from head or tail. If <code>true</code> is specified, the log event starts from the head of the log. If <code>false</code> is specified, the log event starts from the tail of the log.</p> <p>Default: <code>false</code> </p>
   */
  startFromHead?: boolean;

  /**
   * <p>A token used for advancing to a specific page of results for your <code>get relational database log events</code> request.</p>
   */
  pageToken?: string;

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
