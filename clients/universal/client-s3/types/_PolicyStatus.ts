/**
 * <p>The container element for a bucket's policy status.</p>
 */
export interface _PolicyStatus {
  /**
   * <p>The policy status for this bucket. <code>TRUE</code> indicates that this bucket is public. <code>FALSE</code> indicates that the bucket is not public.</p>
   */
  IsPublic?: boolean;
}

export type _UnmarshalledPolicyStatus = _PolicyStatus;
