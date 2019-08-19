import {
  _EC2SecurityGroup,
  _UnmarshalledEC2SecurityGroup
} from "./_EC2SecurityGroup";
import { _IPRange, _UnmarshalledIPRange } from "./_IPRange";

/**
 * <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
 */
export interface _DBSecurityGroup {
  /**
   * <p>Provides the AWS ID of the owner of a specific DB security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>Specifies the name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>Provides the description of the DB security group.</p>
   */
  DBSecurityGroupDescription?: string;

  /**
   * <p>Provides the VpcId of the DB security group.</p>
   */
  VpcId?: string;

  /**
   * <p> Contains a list of <code>EC2SecurityGroup</code> elements. </p>
   */
  EC2SecurityGroups?: Array<_EC2SecurityGroup> | Iterable<_EC2SecurityGroup>;

  /**
   * <p> Contains a list of <code>IPRange</code> elements. </p>
   */
  IPRanges?: Array<_IPRange> | Iterable<_IPRange>;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB security group.</p>
   */
  DBSecurityGroupArn?: string;
}

export interface _UnmarshalledDBSecurityGroup extends _DBSecurityGroup {
  /**
   * <p> Contains a list of <code>EC2SecurityGroup</code> elements. </p>
   */
  EC2SecurityGroups?: Array<_UnmarshalledEC2SecurityGroup>;

  /**
   * <p> Contains a list of <code>IPRange</code> elements. </p>
   */
  IPRanges?: Array<_UnmarshalledIPRange>;
}
