/**
 * <p>Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.</p>
 */
export interface _Ec2InstanceAttributes {
  /**
   * <p>The name of the Amazon EC2 key pair to use when connecting with SSH into the master node as a user named "hadoop".</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>To launch the cluster in Amazon VPC, set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value, the cluster is launched in the normal AWS cloud, outside of a VPC.</p> <p>Amazon VPC currently does not support cluster compute quadruple extra large (cc1.4xlarge) instances. Thus, you cannot specify the cc1.4xlarge instance type for nodes of a cluster launched in a VPC.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies the unique identifier of one or more Amazon EC2 subnets in which to launch EC2 cluster instances. Subnets must exist within the same VPC. Amazon EMR chooses the EC2 subnet with the best fit from among the list of <code>RequestedEc2SubnetIds</code>, and then launches all cluster instances within that Subnet. If this value is not specified, and the account and region support EC2-Classic networks, the cluster launches instances in the EC2-Classic network and uses <code>RequestedEc2AvailabilityZones</code> instead of this setting. If EC2-Classic is not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.</p>
   */
  RequestedEc2SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The Availability Zone in which the cluster will run. </p>
   */
  Ec2AvailabilityZone?: string;

  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies one or more Availability Zones in which to launch EC2 cluster instances when the EC2-Classic network configuration is supported. Amazon EMR chooses the Availability Zone with the best fit from among the list of <code>RequestedEc2AvailabilityZones</code>, and then launches all cluster instances within that Availability Zone. If you do not specify this value, Amazon EMR chooses the Availability Zone for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.</p>
   */
  RequestedEc2AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The IAM role that was specified when the cluster was launched. The EC2 instances of the cluster assume this role.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the master node.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the core and task nodes.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEc2InstanceAttributes
  extends _Ec2InstanceAttributes {
  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies the unique identifier of one or more Amazon EC2 subnets in which to launch EC2 cluster instances. Subnets must exist within the same VPC. Amazon EMR chooses the EC2 subnet with the best fit from among the list of <code>RequestedEc2SubnetIds</code>, and then launches all cluster instances within that Subnet. If this value is not specified, and the account and region support EC2-Classic networks, the cluster launches instances in the EC2-Classic network and uses <code>RequestedEc2AvailabilityZones</code> instead of this setting. If EC2-Classic is not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.</p>
   */
  RequestedEc2SubnetIds?: Array<string>;

  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies one or more Availability Zones in which to launch EC2 cluster instances when the EC2-Classic network configuration is supported. Amazon EMR chooses the Availability Zone with the best fit from among the list of <code>RequestedEc2AvailabilityZones</code>, and then launches all cluster instances within that Availability Zone. If you do not specify this value, Amazon EMR chooses the Availability Zone for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.</p>
   */
  RequestedEc2AvailabilityZones?: Array<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: Array<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: Array<string>;
}
