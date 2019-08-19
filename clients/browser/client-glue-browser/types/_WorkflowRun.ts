import {
  _WorkflowRunStatistics,
  _UnmarshalledWorkflowRunStatistics
} from "./_WorkflowRunStatistics";
import { _WorkflowGraph, _UnmarshalledWorkflowGraph } from "./_WorkflowGraph";

/**
 * <p>A workflow run is an execution of a workflow providing all the runtime information.</p>
 */
export interface _WorkflowRun {
  /**
   * <p>Name of the workflow which was executed.</p>
   */
  Name?: string;

  /**
   * <p>The ID of this workflow run.</p>
   */
  WorkflowRunId?: string;

  /**
   * <p>The workflow run properties which were set during the run.</p>
   */
  WorkflowRunProperties?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>The date and time when the workflow run was started.</p>
   */
  StartedOn?: Date | string | number;

  /**
   * <p>The date and time when the workflow run completed.</p>
   */
  CompletedOn?: Date | string | number;

  /**
   * <p>The status of the workflow run.</p>
   */
  Status?: "RUNNING" | "COMPLETED" | string;

  /**
   * <p>The statistics of the run.</p>
   */
  Statistics?: _WorkflowRunStatistics;

  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed connections between them as edges.</p>
   */
  Graph?: _WorkflowGraph;
}

export interface _UnmarshalledWorkflowRun extends _WorkflowRun {
  /**
   * <p>The workflow run properties which were set during the run.</p>
   */
  WorkflowRunProperties?: { [key: string]: string };

  /**
   * <p>The date and time when the workflow run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when the workflow run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The statistics of the run.</p>
   */
  Statistics?: _UnmarshalledWorkflowRunStatistics;

  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed connections between them as edges.</p>
   */
  Graph?: _UnmarshalledWorkflowGraph;
}
