import { _UnmarshalledWorkflowExecutionInfo } from "./_WorkflowExecutionInfo";
import { _UnmarshalledWorkflowExecutionConfiguration } from "./_WorkflowExecutionConfiguration";
import { _UnmarshalledWorkflowExecutionOpenCounts } from "./_WorkflowExecutionOpenCounts";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains details about a workflow execution.</p>
 */
export interface DescribeWorkflowExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the workflow execution.</p>
   */
  executionInfo: _UnmarshalledWorkflowExecutionInfo;

  /**
   * <p>The configuration settings for this workflow execution including timeout values, tasklist etc.</p>
   */
  executionConfiguration: _UnmarshalledWorkflowExecutionConfiguration;

  /**
   * <p>The number of tasks for this workflow execution. This includes open and closed tasks of all types.</p>
   */
  openCounts: _UnmarshalledWorkflowExecutionOpenCounts;

  /**
   * <p>The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.</p>
   */
  latestActivityTaskTimestamp?: Date;

  /**
   * <p>The latest executionContext provided by the decider for this workflow execution. A decider can provide an executionContext (a free-form string) when closing a decision task using <a>RespondDecisionTaskCompleted</a>.</p>
   */
  latestExecutionContext?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
