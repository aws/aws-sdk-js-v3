/**
 * <p>Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.</p>
 */
export interface _LifecyclePolicy {
  /**
   * <p> A value that describes the period of time that a file is not accessed, after which it transitions to the IA storage class. Metadata operations such as listing the contents of a directory don't count as file access events.</p>
   */
  TransitionToIA?:
    | "AFTER_14_DAYS"
    | "AFTER_30_DAYS"
    | "AFTER_60_DAYS"
    | "AFTER_90_DAYS"
    | string;
}

export type _UnmarshalledLifecyclePolicy = _LifecyclePolicy;
