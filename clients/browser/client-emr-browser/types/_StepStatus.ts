import {
  _StepStateChangeReason,
  _UnmarshalledStepStateChangeReason
} from "./_StepStateChangeReason";
import {
  _FailureDetails,
  _UnmarshalledFailureDetails
} from "./_FailureDetails";
import { _StepTimeline, _UnmarshalledStepTimeline } from "./_StepTimeline";

/**
 * <p>The execution status details of the cluster step.</p>
 */
export interface _StepStatus {
  /**
   * <p>The execution state of the cluster step.</p>
   */
  State?:
    | "PENDING"
    | "CANCEL_PENDING"
    | "RUNNING"
    | "COMPLETED"
    | "CANCELLED"
    | "FAILED"
    | "INTERRUPTED"
    | string;

  /**
   * <p>The reason for the step execution status change.</p>
   */
  StateChangeReason?: _StepStateChangeReason;

  /**
   * <p>The details for the step failure including reason, message, and log file path where the root cause was identified.</p>
   */
  FailureDetails?: _FailureDetails;

  /**
   * <p>The timeline of the cluster step status over time.</p>
   */
  Timeline?: _StepTimeline;
}

export interface _UnmarshalledStepStatus extends _StepStatus {
  /**
   * <p>The reason for the step execution status change.</p>
   */
  StateChangeReason?: _UnmarshalledStepStateChangeReason;

  /**
   * <p>The details for the step failure including reason, message, and log file path where the root cause was identified.</p>
   */
  FailureDetails?: _UnmarshalledFailureDetails;

  /**
   * <p>The timeline of the cluster step status over time.</p>
   */
  Timeline?: _UnmarshalledStepTimeline;
}
