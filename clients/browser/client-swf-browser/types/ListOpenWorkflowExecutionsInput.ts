import { _ExecutionTimeFilter } from "./_ExecutionTimeFilter";
import { _WorkflowTypeFilter } from "./_WorkflowTypeFilter";
import { _TagFilter } from "./_TagFilter";
import { _WorkflowExecutionFilter } from "./_WorkflowExecutionFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListOpenWorkflowExecutionsInput shape
 */
export interface ListOpenWorkflowExecutionsInput {
  /**
   * <p>The name of the domain that contains the workflow executions to list.</p>
   */
  domain: string;

  /**
   * <p>Workflow executions are included in the returned results based on whether their start times are within the range specified by this filter.</p>
   */
  startTimeFilter: _ExecutionTimeFilter;

  /**
   * <p>If specified, only executions of the type specified in the filter are returned.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>
   */
  typeFilter?: _WorkflowTypeFilter;

  /**
   * <p>If specified, only executions that have the matching tag are listed.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>
   */
  tagFilter?: _TagFilter;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default the results are returned in descending order of the start time of the executions.</p>
   */
  reverseOrder?: boolean;

  /**
   * <p>If specified, only workflow executions matching the workflow ID specified in the filter are returned.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>
   */
  executionFilter?: _WorkflowExecutionFilter;

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
