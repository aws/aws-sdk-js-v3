import { _IpPermission, _UnmarshalledIpPermission } from "./_IpPermission";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a security group</p>
 */
export interface _SecurityGroup {
  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: Array<_IpPermission> | Iterable<_IpPermission>;

  /**
   * <p>The AWS account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: Array<_IpPermission> | Iterable<_IpPermission>;

  /**
   * <p>Any tags assigned to the security group.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export interface _UnmarshalledSecurityGroup extends _SecurityGroup {
  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: Array<_UnmarshalledIpPermission>;

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: Array<_UnmarshalledIpPermission>;

  /**
   * <p>Any tags assigned to the security group.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
