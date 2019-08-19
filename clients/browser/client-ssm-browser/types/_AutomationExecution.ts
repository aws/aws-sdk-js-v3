import { _StepExecution, _UnmarshalledStepExecution } from "./_StepExecution";
import { _Target, _UnmarshalledTarget } from "./_Target";
import {
  _ResolvedTargets,
  _UnmarshalledResolvedTargets
} from "./_ResolvedTargets";
import {
  _TargetLocation,
  _UnmarshalledTargetLocation
} from "./_TargetLocation";
import {
  _ProgressCounters,
  _UnmarshalledProgressCounters
} from "./_ProgressCounters";

/**
 * <p>Detailed information about the current state of an individual Automation execution.</p>
 */
export interface _AutomationExecution {
  /**
   * <p>The execution ID.</p>
   */
  AutomationExecutionId?: string;

  /**
   * <p>The name of the Automation document used during the execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The version of the document to use during execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The time the execution started.</p>
   */
  ExecutionStartTime?: Date | string | number;

  /**
   * <p>The time the execution finished.</p>
   */
  ExecutionEndTime?: Date | string | number;

  /**
   * <p>The execution status of the Automation.</p>
   */
  AutomationExecutionStatus?:
    | "Pending"
    | "InProgress"
    | "Waiting"
    | "Success"
    | "TimedOut"
    | "Cancelling"
    | "Cancelled"
    | "Failed"
    | string;

  /**
   * <p>A list of details about the current state of all steps that comprise an execution. An Automation document contains a list of steps that are run in order.</p>
   */
  StepExecutions?: Array<_StepExecution> | Iterable<_StepExecution>;

  /**
   * <p>A boolean value that indicates if the response contains the full list of the Automation step executions. If true, use the DescribeAutomationStepExecutions API action to get the full list of step executions.</p>
   */
  StepExecutionsTruncated?: boolean;

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling StartAutomationExecution.</p>
   */
  Parameters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The list of execution outputs as defined in the automation document.</p>
   */
  Outputs?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>A message describing why an execution has failed, if the status is set to Failed.</p>
   */
  FailureMessage?: string;

  /**
   * <p>The automation execution mode.</p>
   */
  Mode?: "Auto" | "Interactive" | string;

  /**
   * <p>The AutomationExecutionId of the parent automation.</p>
   */
  ParentAutomationExecutionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who ran the automation.</p>
   */
  ExecutedBy?: string;

  /**
   * <p>The name of the step that is currently running.</p>
   */
  CurrentStepName?: string;

  /**
   * <p>The action of the step that is currently running.</p>
   */
  CurrentAction?: string;

  /**
   * <p>The parameter name.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>The specified targets.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   */
  TargetMaps?:
    | Array<
        | { [key: string]: Array<string> | Iterable<string> }
        | Iterable<[string, Array<string> | Iterable<string>]>
      >
    | Iterable<
        | { [key: string]: Array<string> | Iterable<string> }
        | Iterable<[string, Array<string> | Iterable<string>]>
      >;

  /**
   * <p>A list of resolved targets in the rate control execution.</p>
   */
  ResolvedTargets?: _ResolvedTargets;

  /**
   * <p>The MaxConcurrency value specified by the user when the execution started.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The MaxErrors value specified by the user when the execution started.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The target of the execution.</p>
   */
  Target?: string;

  /**
   * <p>The combination of AWS Regions and/or AWS accounts where you want to run the Automation.</p>
   */
  TargetLocations?: Array<_TargetLocation> | Iterable<_TargetLocation>;

  /**
   * <p>An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution.</p>
   */
  ProgressCounters?: _ProgressCounters;
}

export interface _UnmarshalledAutomationExecution extends _AutomationExecution {
  /**
   * <p>The time the execution started.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>The time the execution finished.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>A list of details about the current state of all steps that comprise an execution. An Automation document contains a list of steps that are run in order.</p>
   */
  StepExecutions?: Array<_UnmarshalledStepExecution>;

  /**
   * <p>The key-value map of execution parameters, which were supplied when calling StartAutomationExecution.</p>
   */
  Parameters?: { [key: string]: Array<string> };

  /**
   * <p>The list of execution outputs as defined in the automation document.</p>
   */
  Outputs?: { [key: string]: Array<string> };

  /**
   * <p>The specified targets.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   */
  TargetMaps?: Array<{ [key: string]: Array<string> }>;

  /**
   * <p>A list of resolved targets in the rate control execution.</p>
   */
  ResolvedTargets?: _UnmarshalledResolvedTargets;

  /**
   * <p>The combination of AWS Regions and/or AWS accounts where you want to run the Automation.</p>
   */
  TargetLocations?: Array<_UnmarshalledTargetLocation>;

  /**
   * <p>An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution.</p>
   */
  ProgressCounters?: _UnmarshalledProgressCounters;
}
