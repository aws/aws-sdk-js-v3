/**
 * <p>Describes a policy version.</p>
 */
export interface _PolicyVersion {
  /**
   * <p>The policy version ID.</p>
   */
  versionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date | string | number;
}

export interface _UnmarshalledPolicyVersion extends _PolicyVersion {
  /**
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date;
}
