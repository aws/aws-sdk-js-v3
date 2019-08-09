import { _Target, _UnmarshalledTarget } from "./_Target";
import {
  _ResolvedTargets,
  _UnmarshalledResolvedTargets
} from "./_ResolvedTargets";

/**
 * <p>Details about a specific Automation execution.</p>
 */
export interface _AutomationExecutionMetadata {
  /**
   * <p>The execution ID.</p>
   */
  AutomationExecutionId?: string;

  /**
   * <p>The name of the Automation document used during execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The document version used during the execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The status of the execution. Valid values include: Running, Succeeded, Failed, Timed out, or Cancelled.</p>
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
   * <p>The time the execution started.&gt;</p>
   */
  ExecutionStartTime?: Date | string | number;

  /**
   * <p>The time the execution finished. This is not populated if the execution is still in progress.</p>
   */
  ExecutionEndTime?: Date | string | number;

  /**
   * <p>The IAM role ARN of the user who ran the Automation.</p>
   */
  ExecutedBy?: string;

  /**
   * <p>An Amazon S3 bucket where execution information is stored.</p>
   */
  LogFile?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  Outputs?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The Automation execution mode.</p>
   */
  Mode?: "Auto" | "Interactive" | string;

  /**
   * <p>The ExecutionId of the parent Automation.</p>
   */
  ParentAutomationExecutionId?: string;

  /**
   * <p>The name of the step that is currently running.</p>
   */
  CurrentStepName?: string;

  /**
   * <p>The action of the step that is currently running.</p>
   */
  CurrentAction?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  FailureMessage?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>The targets defined by the user when starting the Automation.</p>
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
   * <p>A list of targets that resolved during the execution.</p>
   */
  ResolvedTargets?: _ResolvedTargets;

  /**
   * <p>The MaxConcurrency value specified by the user when starting the Automation.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The MaxErrors value specified by the user when starting the Automation.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  Target?: string;

  /**
   * <p>Use this filter with <a>DescribeAutomationExecutions</a>. Specify either Local or CrossAccount. CrossAccount is an Automation that runs in multiple AWS Regions and accounts. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Executing Automations in Multiple AWS Regions and Accounts</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   */
  AutomationType?: "CrossAccount" | "Local" | string;
}

export interface _UnmarshalledAutomationExecutionMetadata
  extends _AutomationExecutionMetadata {
  /**
   * <p>The time the execution started.&gt;</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>The time the execution finished. This is not populated if the execution is still in progress.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>The list of execution outputs as defined in the Automation document.</p>
   */
  Outputs?: { [key: string]: Array<string> };

  /**
   * <p>The targets defined by the user when starting the Automation.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The specified key-value mapping of document parameters to target resources.</p>
   */
  TargetMaps?: Array<{ [key: string]: Array<string> }>;

  /**
   * <p>A list of targets that resolved during the execution.</p>
   */
  ResolvedTargets?: _UnmarshalledResolvedTargets;
}
