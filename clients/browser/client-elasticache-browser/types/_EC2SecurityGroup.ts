/**
 * <p>Provides ownership and status information for an Amazon EC2 security group.</p>
 */
export interface _EC2SecurityGroup {
  /**
   * <p>The status of the Amazon EC2 security group.</p>
   */
  Status?: string;

  /**
   * <p>The name of the Amazon EC2 security group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The AWS account ID of the Amazon EC2 security group owner.</p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export type _UnmarshalledEC2SecurityGroup = _EC2SecurityGroup;
