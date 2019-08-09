import { _UnmarshalledWorkflowExecution } from "./_WorkflowExecution";
import { _UnmarshalledActivityType } from "./_ActivityType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Unit of work sent to an activity worker.</p>
 */
export interface PollForActivityTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.</p>
   */
  taskToken: string;

  /**
   * <p>The unique ID of the task.</p>
   */
  activityId: string;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded in the history.</p>
   */
  startedEventId: number;

  /**
   * <p>The workflow execution that started this activity task.</p>
   */
  workflowExecution: _UnmarshalledWorkflowExecution;

  /**
   * <p>The type of this activity task.</p>
   */
  activityType: _UnmarshalledActivityType;

  /**
   * <p>The inputs provided when the activity task was scheduled. The form of the input is user defined and should be meaningful to the activity implementation.</p>
   */
  input?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
