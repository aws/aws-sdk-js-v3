import { _UnmarshalledWorkflowExecution } from "./_WorkflowExecution";
import { _UnmarshalledWorkflowType } from "./_WorkflowType";
import { _UnmarshalledHistoryEvent } from "./_HistoryEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.</p>
 */
export interface PollForDecisionTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.</p>
   */
  taskToken: string;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded in the history.</p>
   */
  startedEventId: number;

  /**
   * <p>The workflow execution for which this decision task was created.</p>
   */
  workflowExecution: _UnmarshalledWorkflowExecution;

  /**
   * <p>The type of the workflow execution for which this decision task was created.</p>
   */
  workflowType: _UnmarshalledWorkflowType;

  /**
   * <p>A paginated list of history events of the workflow execution. The decider uses this during the processing of the decision task.</p>
   */
  events: Array<_UnmarshalledHistoryEvent>;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;

  /**
   * <p>The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was processed by the decider. This can be used to determine the events in the history new since the last decision task received by the decider.</p>
   */
  previousStartedEventId?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
