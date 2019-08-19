import { _InputLogEvent } from "./_InputLogEvent";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutLogEventsInput shape
 */
export interface PutLogEventsInput {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string;

  /**
   * <p>The log events.</p>
   */
  logEvents: Array<_InputLogEvent> | Iterable<_InputLogEvent>;

  /**
   * <p>The sequence token obtained from the response of the previous <code>PutLogEvents</code> call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using <a>DescribeLogStreams</a>. If you call <code>PutLogEvents</code> twice within a narrow time period using the same value for <code>sequenceToken</code>, both calls may be successful, or one may be rejected.</p>
   */
  sequenceToken?: string;

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
