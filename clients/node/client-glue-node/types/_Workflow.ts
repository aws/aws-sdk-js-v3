import { _WorkflowRun, _UnmarshalledWorkflowRun } from "./_WorkflowRun";
import { _WorkflowGraph, _UnmarshalledWorkflowGraph } from "./_WorkflowGraph";

/**
 * <p>A workflow represents a flow in which AWS Glue components should be executed to complete a logical task.</p>
 */
export interface _Workflow {
  /**
   * <p>The name of the workflow representing the flow.</p>
   */
  Name?: string;

  /**
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The date and time when the workflow was created.</p>
   */
  CreatedOn?: Date | string | number;

  /**
   * <p>The date and time when the workflow was last modified.</p>
   */
  LastModifiedOn?: Date | string | number;

  /**
   * <p>The information about the last execution of the workflow.</p>
   */
  LastRun?: _WorkflowRun;

  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed connections between them as edges.</p>
   */
  Graph?: _WorkflowGraph;
}

export interface _UnmarshalledWorkflow extends _Workflow {
  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>The date and time when the workflow was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time when the workflow was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The information about the last execution of the workflow.</p>
   */
  LastRun?: _UnmarshalledWorkflowRun;

  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed connections between them as edges.</p>
   */
  Graph?: _UnmarshalledWorkflowGraph;
}
