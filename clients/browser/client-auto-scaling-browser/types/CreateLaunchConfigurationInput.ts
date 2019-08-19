import { _BlockDeviceMapping } from "./_BlockDeviceMapping";
import { _InstanceMonitoring } from "./_InstanceMonitoring";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLaunchConfigurationInput shape
 */
export interface CreateLaunchConfigurationInput {
  /**
   * <p>The name of the launch configuration. This name must be unique per Region per account.</p>
   */
  LaunchConfigurationName: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) to use to launch your EC2 instances.</p> <p>If you do not specify <code>InstanceId</code>, you must specify <code>ImageId</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding an AMI</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the key pair. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 Key Pairs</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  KeyName?: string;

  /**
   * <p>One or more security groups with which to associate the instances.</p> <p>If your instances are launched in EC2-Classic, you can either specify security group names or the security group IDs. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>If your instances are launched into a VPC, specify security group IDs. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. This parameter is supported only if you are launching EC2-Classic instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ClassicLinkVPCId?: string;

  /**
   * <p>The IDs of one or more security groups for the specified ClassicLink-enabled VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Conditional: This parameter is required if you specify a ClassicLink-enabled VPC, and is not supported otherwise.</p>
   */
  ClassicLinkVPCSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The user data to make available to the launched EC2 instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  UserData?: string;

  /**
   * <p>The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping.</p> <p>To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-lc-with-instanceID.html">Create a Launch Configuration Using an EC2 Instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you do not specify <code>InstanceId</code>, you must specify both <code>ImageId</code> and <code>InstanceType</code>.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type of the EC2 instance.</p> <p>For information about available instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available Instance Types</a> in the <i>Amazon EC2 User Guide for Linux Instances.</i> </p> <p>If you do not specify <code>InstanceId</code>, you must specify <code>InstanceType</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the kernel associated with the AMI.</p>
   */
  KernelId?: string;

  /**
   * <p>The ID of the RAM disk associated with the AMI.</p>
   */
  RamdiskId?: string;

  /**
   * <p>One or more mappings that specify how block devices are exposed to the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block Device Mapping</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>Enables detailed monitoring (<code>true</code>) or basic monitoring (<code>false</code>) for the Auto Scaling instances. The default value is <code>true</code>.</p>
   */
  InstanceMonitoring?: _InstanceMonitoring;

  /**
   * <p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot market price. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-launch-spot-instances.html">Launching Spot Instances in Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.</p> <p>EC2 instances launched with an IAM role automatically have AWS security credentials available. You can use IAM roles with Amazon EC2 Auto Scaling to automatically enable applications running on your EC2 instances to securely access other AWS resources. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM Role for Applications That Run on Amazon EC2 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. By default, the instance is not optimized for EBS I/O. The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional usage charges apply. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-Optimized Instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Used for groups that launch instances into a virtual private cloud (VPC). Specifies whether to assign a public IP address to each instance. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling Instances in a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you specify this parameter, be sure to specify at least one subnet when you create your group.</p> <p>Default: If the instance is launched into a default subnet, the default is to assign a public IP address. If the instance is launched into a nondefault subnet, the default is not to assign a public IP address.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>The tenancy of the instance. An instance with a tenancy of <code>dedicated</code> runs on single-tenant hardware and can only be launched into a VPC.</p> <p>To launch Dedicated Instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to <code>default</code>), you must set the value of this parameter to <code>dedicated</code>.</p> <p>If you specify <code>PlacementTenancy</code>, be sure to specify at least one subnet when you create your group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-vpc-tenancy">Instance Placement Tenancy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid values: <code>default</code> | <code>dedicated</code> </p>
   */
  PlacementTenancy?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
