import { _PolicyDetails, _UnmarshalledPolicyDetails } from "./_PolicyDetails";

/**
 * <p>Detailed information about a lifecycle policy.</p>
 */
export interface _LifecyclePolicy {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   */
  State?: "ENABLED" | "DISABLED" | "ERROR" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The local date and time when the lifecycle policy was created.</p>
   */
  DateCreated?: Date | string | number;

  /**
   * <p>The local date and time when the lifecycle policy was last modified.</p>
   */
  DateModified?: Date | string | number;

  /**
   * <p>The configuration of the lifecycle policy</p>
   */
  PolicyDetails?: _PolicyDetails;
}

export interface _UnmarshalledLifecyclePolicy extends _LifecyclePolicy {
  /**
   * <p>The local date and time when the lifecycle policy was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The local date and time when the lifecycle policy was last modified.</p>
   */
  DateModified?: Date;

  /**
   * <p>The configuration of the lifecycle policy</p>
   */
  PolicyDetails?: _UnmarshalledPolicyDetails;
}
