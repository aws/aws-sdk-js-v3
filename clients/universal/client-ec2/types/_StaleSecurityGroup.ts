import {
  _StaleIpPermission,
  _UnmarshalledStaleIpPermission
} from "./_StaleIpPermission";

/**
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 */
export interface _StaleSecurityGroup {
  /**
   * <p>The description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   */
  StaleIpPermissions?: Array<_StaleIpPermission> | Iterable<_StaleIpPermission>;

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   */
  StaleIpPermissionsEgress?:
    | Array<_StaleIpPermission>
    | Iterable<_StaleIpPermission>;

  /**
   * <p>The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export interface _UnmarshalledStaleSecurityGroup extends _StaleSecurityGroup {
  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   */
  StaleIpPermissions?: Array<_UnmarshalledStaleIpPermission>;

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   */
  StaleIpPermissionsEgress?: Array<_UnmarshalledStaleIpPermission>;
}
