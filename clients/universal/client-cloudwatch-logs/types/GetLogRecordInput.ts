import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLogRecordInput shape
 */
export interface GetLogRecordInput {
  /**
   * <p>The pointer corresponding to the log event record you want to retrieve. You get this from the response of a <code>GetQueryResults</code> operation. In that response, the value of the <code>@ptr</code> field for a log event is the value to use as <code>logRecordPointer</code> to retrieve that complete log event record.</p>
   */
  logRecordPointer: string;

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
