/**
 * <p>An object that contains details about how a service-linked role is used, if that information is returned by the service.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
 */
export interface _RoleUsageType {
  /**
   * <p>The name of the Region where the service-linked role is being used.</p>
   */
  Region?: string;

  /**
   * <p>The name of the resource that is using the service-linked role.</p>
   */
  Resources?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledRoleUsageType extends _RoleUsageType {
  /**
   * <p>The name of the resource that is using the service-linked role.</p>
   */
  Resources?: Array<string>;
}
