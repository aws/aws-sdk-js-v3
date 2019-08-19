import {
  _VpcSecurityGroupMembership,
  _UnmarshalledVpcSecurityGroupMembership
} from "./_VpcSecurityGroupMembership";
import {
  _ReplicationSubnetGroup,
  _UnmarshalledReplicationSubnetGroup
} from "./_ReplicationSubnetGroup";
import {
  _ReplicationPendingModifiedValues,
  _UnmarshalledReplicationPendingModifiedValues
} from "./_ReplicationPendingModifiedValues";

/**
 * <p/>
 */
export interface _ReplicationInstance {
  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>myrepinstance</code> </p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * <p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The status of the replication instance.</p>
   */
  ReplicationInstanceStatus?: string;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The time the replication instance was created.</p>
   */
  InstanceCreateTime?: Date | string | number;

  /**
   * <p>The VPC security group for the instance.</p>
   */
  VpcSecurityGroups?:
    | Array<_VpcSecurityGroupMembership>
    | Iterable<_VpcSecurityGroupMembership>;

  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The subnet group for the replication instance.</p>
   */
  ReplicationSubnetGroup?: _ReplicationSubnetGroup;

  /**
   * <p>The maintenance window times for the replication instance.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The pending modification values.</p>
   */
  PendingModifiedValues?: _ReplicationPendingModifiedValues;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Boolean value indicating if minor version upgrades will be automatically applied to the instance.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the data on the replication instance.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then AWS DMS uses your default encryption key.</p> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The public IP address of the replication instance.</p>
   */
  ReplicationInstancePublicIpAddress?: string;

  /**
   * <p>The private IP address of the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddress?: string;

  /**
   * <p>One or more public IP addresses for the replication instance.</p>
   */
  ReplicationInstancePublicIpAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>One or more private IP addresses for the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddresses?: Array<string> | Iterable<string>;

  /**
   * <p> Specifies the accessibility options for the replication instance. A value of <code>true</code> represents an instance with a public IP address. A value of <code>false</code> represents an instance with a private IP address. The default value is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The availability zone of the standby replication instance in a Multi-AZ deployment.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p> The expiration date of the free replication instance that is part of the Free DMS program. </p>
   */
  FreeUntil?: Date | string | number;

  /**
   * <p>The DNS name servers for the replication instance.</p>
   */
  DnsNameServers?: string;
}

export interface _UnmarshalledReplicationInstance extends _ReplicationInstance {
  /**
   * <p>The time the replication instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>The VPC security group for the instance.</p>
   */
  VpcSecurityGroups?: Array<_UnmarshalledVpcSecurityGroupMembership>;

  /**
   * <p>The subnet group for the replication instance.</p>
   */
  ReplicationSubnetGroup?: _UnmarshalledReplicationSubnetGroup;

  /**
   * <p>The pending modification values.</p>
   */
  PendingModifiedValues?: _UnmarshalledReplicationPendingModifiedValues;

  /**
   * <p>One or more public IP addresses for the replication instance.</p>
   */
  ReplicationInstancePublicIpAddresses?: Array<string>;

  /**
   * <p>One or more private IP addresses for the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddresses?: Array<string>;

  /**
   * <p> The expiration date of the free replication instance that is part of the Free DMS program. </p>
   */
  FreeUntil?: Date;
}
