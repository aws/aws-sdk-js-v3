import {
  _HadoopStepConfig,
  _UnmarshalledHadoopStepConfig
} from "./_HadoopStepConfig";
import { _StepStatus, _UnmarshalledStepStatus } from "./_StepStatus";

/**
 * <p>The summary of the cluster step.</p>
 */
export interface _StepSummary {
  /**
   * <p>The identifier of the cluster step.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster step.</p>
   */
  Name?: string;

  /**
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: _HadoopStepConfig;

  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is available for backward compatibility. We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?:
    | "TERMINATE_JOB_FLOW"
    | "TERMINATE_CLUSTER"
    | "CANCEL_AND_WAIT"
    | "CONTINUE"
    | string;

  /**
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: _StepStatus;
}

export interface _UnmarshalledStepSummary extends _StepSummary {
  /**
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: _UnmarshalledHadoopStepConfig;

  /**
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: _UnmarshalledStepStatus;
}
