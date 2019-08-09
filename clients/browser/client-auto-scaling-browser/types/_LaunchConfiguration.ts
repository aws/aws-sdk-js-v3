import {
  _BlockDeviceMapping,
  _UnmarshalledBlockDeviceMapping
} from "./_BlockDeviceMapping";
import {
  _InstanceMonitoring,
  _UnmarshalledInstanceMonitoring
} from "./_InstanceMonitoring";

/**
 * <p>Describes a launch configuration.</p>
 */
export interface _LaunchConfiguration {
  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the launch configuration.</p>
   */
  LaunchConfigurationARN?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   */
  ImageId: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The security groups to associate with the instances.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. This parameter can only be used if you are launching EC2-Classic instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ClassicLinkVPCId?: string;

  /**
   * <p>The IDs of one or more security groups for the VPC specified in <code>ClassicLinkVPCId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Conditional: This parameter is required if you specify a ClassicLink-enabled VPC, and cannot be used otherwise.</p>
   */
  ClassicLinkVPCSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The user data available to the instances.</p>
   */
  UserData?: string;

  /**
   * <p>The instance type for the instances.</p>
   */
  InstanceType: string;

  /**
   * <p>The ID of the kernel associated with the AMI.</p>
   */
  KernelId?: string;

  /**
   * <p>The ID of the RAM disk associated with the AMI.</p>
   */
  RamdiskId?: string;

  /**
   * <p>A block device mapping, which specifies the block devices for the instance.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>Controls whether instances in this group are launched with detailed (<code>true</code>) or basic (<code>false</code>) monitoring.</p>
   */
  InstanceMonitoring?: _InstanceMonitoring;

  /**
   * <p>The price to bid when launching Spot Instances.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>The creation date and time for the launch configuration.</p>
   */
  CreatedTime: Date | string | number;

  /**
   * <p>Controls whether the instance is optimized for EBS I/O (<code>true</code>) or not (<code>false</code>).</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>[EC2-VPC] Indicates whether to assign a public IP address to each instance.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>The tenancy of the instance, either <code>default</code> or <code>dedicated</code>. An instance with <code>dedicated</code> tenancy runs in an isolated, single-tenant hardware and can only be launched into a VPC.</p>
   */
  PlacementTenancy?: string;
}

export interface _UnmarshalledLaunchConfiguration extends _LaunchConfiguration {
  /**
   * <p>The security groups to associate with the instances.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>The IDs of one or more security groups for the VPC specified in <code>ClassicLinkVPCId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Conditional: This parameter is required if you specify a ClassicLink-enabled VPC, and cannot be used otherwise.</p>
   */
  ClassicLinkVPCSecurityGroups?: Array<string>;

  /**
   * <p>A block device mapping, which specifies the block devices for the instance.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledBlockDeviceMapping>;

  /**
   * <p>Controls whether instances in this group are launched with detailed (<code>true</code>) or basic (<code>false</code>) monitoring.</p>
   */
  InstanceMonitoring?: _UnmarshalledInstanceMonitoring;

  /**
   * <p>The creation date and time for the launch configuration.</p>
   */
  CreatedTime: Date;
}
