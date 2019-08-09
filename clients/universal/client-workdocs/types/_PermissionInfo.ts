/**
 * <p>Describes the permissions.</p>
 */
export interface _PermissionInfo {
  /**
   * <p>The role of the user.</p>
   */
  Role?: "VIEWER" | "CONTRIBUTOR" | "OWNER" | "COOWNER" | string;

  /**
   * <p>The type of permissions.</p>
   */
  Type?: "DIRECT" | "INHERITED" | string;
}

export type _UnmarshalledPermissionInfo = _PermissionInfo;
