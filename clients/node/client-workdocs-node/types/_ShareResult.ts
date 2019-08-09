/**
 * <p>Describes the share results of a resource.</p>
 */
export interface _ShareResult {
  /**
   * <p>The ID of the principal.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The ID of the invited user.</p>
   */
  InviteePrincipalId?: string;

  /**
   * <p>The role.</p>
   */
  Role?: "VIEWER" | "CONTRIBUTOR" | "OWNER" | "COOWNER" | string;

  /**
   * <p>The status.</p>
   */
  Status?: "SUCCESS" | "FAILURE" | string;

  /**
   * <p>The ID of the resource that was shared.</p>
   */
  ShareId?: string;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;
}

export type _UnmarshalledShareResult = _ShareResult;
