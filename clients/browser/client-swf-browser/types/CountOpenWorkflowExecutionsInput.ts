import { _ExecutionTimeFilter } from "./_ExecutionTimeFilter";
import { _WorkflowTypeFilter } from "./_WorkflowTypeFilter";
import { _TagFilter } from "./_TagFilter";
import { _WorkflowExecutionFilter } from "./_WorkflowExecutionFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CountOpenWorkflowExecutionsInput shape
 */
export interface CountOpenWorkflowExecutionsInput {
  /**
   * <p>The name of the domain containing the workflow executions to count.</p>
   */
  domain: string;

  /**
   * <p>Specifies the start time criteria that workflow executions must meet in order to be counted.</p>
   */
  startTimeFilter: _ExecutionTimeFilter;

  /**
   * <p>Specifies the type of the workflow executions to be counted.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>
   */
  typeFilter?: _WorkflowTypeFilter;

  /**
   * <p>If specified, only executions that have a tag that matches the filter are counted.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>
   */
  tagFilter?: _TagFilter;

  /**
   * <p>If specified, only workflow executions matching the <code>WorkflowId</code> in the filter are counted.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>
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
