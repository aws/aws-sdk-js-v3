import {
  _FailureDetails,
  _UnmarshalledFailureDetails
} from "./_FailureDetails";
import { _Target, _UnmarshalledTarget } from "./_Target";
import {
  _TargetLocation,
  _UnmarshalledTargetLocation
} from "./_TargetLocation";

/**
 * <p>Detailed information about an the execution state of an Automation step.</p>
 */
export interface _StepExecution {
  /**
   * <p>The name of this execution step.</p>
   */
  StepName?: string;

  /**
   * <p>The action this step performs. The action determines the behavior of the step.</p>
   */
  Action?: string;

  /**
   * <p>The timeout seconds of the step.</p>
   */
  TimeoutSeconds?: number;

  /**
   * <p>The action to take if the step fails. The default value is Abort.</p>
   */
  OnFailure?: string;

  /**
   * <p>The maximum number of tries to run the action of the step. The default value is 1.</p>
   */
  MaxAttempts?: number;

  /**
   * <p>If a step has begun execution, this contains the time the step started. If the step is in Pending status, this field is not populated.</p>
   */
  ExecutionStartTime?: Date | string | number;

  /**
   * <p>If a step has finished execution, this contains the time the execution ended. If the step has not yet concluded, this field is not populated.</p>
   */
  ExecutionEndTime?: Date | string | number;

  /**
   * <p>The execution status for this step. Valid values include: Pending, InProgress, Success, Cancelled, Failed, and TimedOut.</p>
   */
  StepStatus?:
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
   * <p>The response code returned by the execution of the step.</p>
   */
  ResponseCode?: string;

  /**
   * <p>Fully-resolved values passed into the step before execution.</p>
   */
  Inputs?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Returned values from the execution of the step.</p>
   */
  Outputs?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>A message associated with the response code for an execution.</p>
   */
  Response?: string;

  /**
   * <p>If a step failed, this message explains why the execution failed.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Information about the Automation failure.</p>
   */
  FailureDetails?: _FailureDetails;

  /**
   * <p>The unique ID of a step execution.</p>
   */
  StepExecutionId?: string;

  /**
   * <p>A user-specified list of parameters to override when running a step.</p>
   */
  OverriddenParameters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The flag which can be used to end automation no matter whether the step succeeds or fails.</p>
   */
  IsEnd?: boolean;

  /**
   * <p>The next step after the step succeeds.</p>
   */
  NextStep?: string;

  /**
   * <p>The flag which can be used to help decide whether the failure of current step leads to the Automation failure.</p>
   */
  IsCritical?: boolean;

  /**
   * <p>Strategies used when step fails, we support Continue and Abort. Abort will fail the automation when the step fails. Continue will ignore the failure of current step and allow automation to run the next step. With conditional branching, we add step:stepName to support the automation to go to another specific step.</p>
   */
  ValidNextSteps?: Array<string> | Iterable<string>;

  /**
   * <p>The targets for the step execution.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>The combination of AWS Regions and accounts targeted by the current Automation execution.</p>
   */
  TargetLocation?: _TargetLocation;
}

export interface _UnmarshalledStepExecution extends _StepExecution {
  /**
   * <p>If a step has begun execution, this contains the time the step started. If the step is in Pending status, this field is not populated.</p>
   */
  ExecutionStartTime?: Date;

  /**
   * <p>If a step has finished execution, this contains the time the execution ended. If the step has not yet concluded, this field is not populated.</p>
   */
  ExecutionEndTime?: Date;

  /**
   * <p>Fully-resolved values passed into the step before execution.</p>
   */
  Inputs?: { [key: string]: string };

  /**
   * <p>Returned values from the execution of the step.</p>
   */
  Outputs?: { [key: string]: Array<string> };

  /**
   * <p>Information about the Automation failure.</p>
   */
  FailureDetails?: _UnmarshalledFailureDetails;

  /**
   * <p>A user-specified list of parameters to override when running a step.</p>
   */
  OverriddenParameters?: { [key: string]: Array<string> };

  /**
   * <p>Strategies used when step fails, we support Continue and Abort. Abort will fail the automation when the step fails. Continue will ignore the failure of current step and allow automation to run the next step. With conditional branching, we add step:stepName to support the automation to go to another specific step.</p>
   */
  ValidNextSteps?: Array<string>;

  /**
   * <p>The targets for the step execution.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The combination of AWS Regions and accounts targeted by the current Automation execution.</p>
   */
  TargetLocation?: _UnmarshalledTargetLocation;
}
