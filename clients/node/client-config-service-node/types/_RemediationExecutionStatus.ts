import { _ResourceKey, _UnmarshalledResourceKey } from "./_ResourceKey";
import {
  _RemediationExecutionStep,
  _UnmarshalledRemediationExecutionStep
} from "./_RemediationExecutionStep";

/**
 * <p>Provides details of the current status of the invoked remediation action for that resource.</p>
 */
export interface _RemediationExecutionStatus {
  /**
   * <p>The details that identify a resource within AWS Config, including the resource type and resource ID.</p>
   */
  ResourceKey?: _ResourceKey;

  /**
   * <p>ENUM of the values.</p>
   */
  State?: "QUEUED" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>Details of every step.</p>
   */
  StepDetails?:
    | Array<_RemediationExecutionStep>
    | Iterable<_RemediationExecutionStep>;

  /**
   * <p>Start time when the remediation was executed.</p>
   */
  InvocationTime?: Date | string | number;

  /**
   * <p>The time when the remediation execution was last updated.</p>
   */
  LastUpdatedTime?: Date | string | number;
}

export interface _UnmarshalledRemediationExecutionStatus
  extends _RemediationExecutionStatus {
  /**
   * <p>The details that identify a resource within AWS Config, including the resource type and resource ID.</p>
   */
  ResourceKey?: _UnmarshalledResourceKey;

  /**
   * <p>Details of every step.</p>
   */
  StepDetails?: Array<_UnmarshalledRemediationExecutionStep>;

  /**
   * <p>Start time when the remediation was executed.</p>
   */
  InvocationTime?: Date;

  /**
   * <p>The time when the remediation execution was last updated.</p>
   */
  LastUpdatedTime?: Date;
}
