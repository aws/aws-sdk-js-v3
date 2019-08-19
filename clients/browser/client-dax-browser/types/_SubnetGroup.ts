import { _Subnet, _UnmarshalledSubnet } from "./_Subnet";

/**
 * <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>
 */
export interface _SubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName?: string;

  /**
   * <p>The description of the subnet group.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnets associated with the subnet group. </p>
   */
  Subnets?: Array<_Subnet> | Iterable<_Subnet>;
}

export interface _UnmarshalledSubnetGroup extends _SubnetGroup {
  /**
   * <p>A list of subnets associated with the subnet group. </p>
   */
  Subnets?: Array<_UnmarshalledSubnet>;
}
