/**
 * <p>Summary information about a lifecycle policy.</p>
 */
export interface _LifecyclePolicySummary {
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
}

export type _UnmarshalledLifecyclePolicySummary = _LifecyclePolicySummary;
