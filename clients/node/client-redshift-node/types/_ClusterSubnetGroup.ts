import { _Subnet, _UnmarshalledSubnet } from "./_Subnet";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a subnet group.</p>
 */
export interface _ClusterSubnetGroup {
  /**
   * <p>The name of the cluster subnet group.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The description of the cluster subnet group.</p>
   */
  Description?: string;

  /**
   * <p>The VPC ID of the cluster subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>The status of the cluster subnet group. Possible values are <code>Complete</code>, <code>Incomplete</code> and <code>Invalid</code>. </p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>A list of the VPC <a>Subnet</a> elements. </p>
   */
  Subnets?: Array<_Subnet> | Iterable<_Subnet>;

  /**
   * <p>The list of tags for the cluster subnet group.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledClusterSubnetGroup extends _ClusterSubnetGroup {
  /**
   * <p>A list of the VPC <a>Subnet</a> elements. </p>
   */
  Subnets?: Array<_UnmarshalledSubnet>;

  /**
   * <p>The list of tags for the cluster subnet group.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
