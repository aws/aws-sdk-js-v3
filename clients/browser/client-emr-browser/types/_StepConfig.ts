import {
  _HadoopJarStepConfig,
  _UnmarshalledHadoopJarStepConfig
} from "./_HadoopJarStepConfig";

/**
 * <p>Specification of a cluster (job flow) step.</p>
 */
export interface _StepConfig {
  /**
   * <p>The name of the step.</p>
   */
  Name: string;

  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is provided for backward compatibility. We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?:
    | "TERMINATE_JOB_FLOW"
    | "TERMINATE_CLUSTER"
    | "CANCEL_AND_WAIT"
    | "CONTINUE"
    | string;

  /**
   * <p>The JAR file used for the step.</p>
   */
  HadoopJarStep: _HadoopJarStepConfig;
}

export interface _UnmarshalledStepConfig extends _StepConfig {
  /**
   * <p>The JAR file used for the step.</p>
   */
  HadoopJarStep: _UnmarshalledHadoopJarStepConfig;
}
