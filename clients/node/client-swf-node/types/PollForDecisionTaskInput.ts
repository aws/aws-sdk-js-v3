import { _TaskList } from "./_TaskList";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PollForDecisionTaskInput shape
 */
export interface PollForDecisionTaskInput {
  /**
   * <p>The name of the domain containing the task lists to poll.</p>
   */
  domain: string;

  /**
   * <p>Specifies the task list to poll for decision tasks.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>
   */
  taskList: _TaskList;

  /**
   * <p>Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.</p>
   */
  identity?: string;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p> <note> <p>The <code>nextPageToken</code> returned by this action cannot be used with <a>GetWorkflowExecutionHistory</a> to get the next page. You must call <a>PollForDecisionTask</a> again (with the <code>nextPageToken</code>) to retrieve the next page of history records. Calling <a>PollForDecisionTask</a> with a <code>nextPageToken</code> doesn't return a new decision task.</p> </note>
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. </p> <p>This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.</p>
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the events in reverse order. By default the results are returned in ascending order of the <code>eventTimestamp</code> of the events.</p>
   */
  reverseOrder?: boolean;

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
