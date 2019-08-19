import {
  _EC2SecurityGroup,
  _UnmarshalledEC2SecurityGroup
} from "./_EC2SecurityGroup";
import { _IPRange, _UnmarshalledIPRange } from "./_IPRange";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a security group.</p>
 */
export interface _ClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group to which the operation was applied.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>A list of EC2 security groups that are permitted to access clusters associated with this cluster security group.</p>
   */
  EC2SecurityGroups?: Array<_EC2SecurityGroup> | Iterable<_EC2SecurityGroup>;

  /**
   * <p>A list of IP ranges (CIDR blocks) that are permitted to access clusters associated with this cluster security group.</p>
   */
  IPRanges?: Array<_IPRange> | Iterable<_IPRange>;

  /**
   * <p>The list of tags for the cluster security group.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledClusterSecurityGroup
  extends _ClusterSecurityGroup {
  /**
   * <p>A list of EC2 security groups that are permitted to access clusters associated with this cluster security group.</p>
   */
  EC2SecurityGroups?: Array<_UnmarshalledEC2SecurityGroup>;

  /**
   * <p>A list of IP ranges (CIDR blocks) that are permitted to access clusters associated with this cluster security group.</p>
   */
  IPRanges?: Array<_UnmarshalledIPRange>;

  /**
   * <p>The list of tags for the cluster security group.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
