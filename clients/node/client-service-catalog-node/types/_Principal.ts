/**
 * <p>Information about a principal.</p>
 */
export interface _Principal {
  /**
   * <p>The ARN of the principal (IAM user, role, or group).</p>
   */
  PrincipalARN?: string;

  /**
   * <p>The principal type. The supported value is <code>IAM</code>.</p>
   */
  PrincipalType?: "IAM" | string;
}

export type _UnmarshalledPrincipal = _Principal;
