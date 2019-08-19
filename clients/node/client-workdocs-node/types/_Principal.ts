import {
  _PermissionInfo,
  _UnmarshalledPermissionInfo
} from "./_PermissionInfo";

/**
 * <p>Describes a resource.</p>
 */
export interface _Principal {
  /**
   * <p>The ID of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The type of resource.</p>
   */
  Type?: "USER" | "GROUP" | "INVITE" | "ANONYMOUS" | "ORGANIZATION" | string;

  /**
   * <p>The permission information for the resource.</p>
   */
  Roles?: Array<_PermissionInfo> | Iterable<_PermissionInfo>;
}

export interface _UnmarshalledPrincipal extends _Principal {
  /**
   * <p>The permission information for the resource.</p>
   */
  Roles?: Array<_UnmarshalledPermissionInfo>;
}
