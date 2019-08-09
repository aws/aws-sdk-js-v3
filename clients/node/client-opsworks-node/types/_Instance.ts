import {
  _BlockDeviceMapping,
  _UnmarshalledBlockDeviceMapping
} from "./_BlockDeviceMapping";
import { _ReportedOs, _UnmarshalledReportedOs } from "./_ReportedOs";

/**
 * <p>Describes an instance.</p>
 */
export interface _Instance {
  /**
   * <p>The agent version. This parameter is set to <code>INHERIT</code> if the instance inherits the default stack setting or to a a version number for a fixed agent version.</p>
   */
  AgentVersion?: string;

  /**
   * <p>A custom AMI ID to be used to create the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Instances</a> </p>
   */
  AmiId?: string;

  /**
   * <p>The instance architecture: "i386" or "x86_64".</p>
   */
  Architecture?: "x86_64" | "i386" | string;

  /**
   * <p>The instance's Amazon Resource Number (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>For load-based or time-based instances, the type.</p>
   */
  AutoScalingType?: "load" | "timer" | string;

  /**
   * <p>The instance Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>An array of <code>BlockDeviceMapping</code> objects that specify the instance's block device mappings.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>The time that the instance was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>Whether this is an Amazon EBS-optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The ID of the associated Amazon EC2 instance.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>For container instances, the Amazon ECS cluster's ARN.</p>
   */
  EcsClusterArn?: string;

  /**
   * <p>For container instances, the instance's ARN.</p>
   */
  EcsContainerInstanceArn?: string;

  /**
   * <p>The instance <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP address </a>.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The instance host name.</p>
   */
  Hostname?: string;

  /**
   * <p>For registered instances, the infrastructure class: <code>ec2</code> or <code>on-premises</code>.</p>
   */
  InfrastructureClass?: string;

  /**
   * <p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. If this value is set to <code>false</code>, you must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code>, to ensure that your instances have the latest security updates.</p> </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ARN of the instance's IAM profile. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  InstanceProfileArn?: string;

  /**
   * <p>The instance type, such as <code>t2.micro</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the last service error. For more information, call <a>DescribeServiceErrors</a>.</p>
   */
  LastServiceErrorId?: string;

  /**
   * <p>An array containing the instance layer IDs.</p>
   */
  LayerIds?: Array<string> | Iterable<string>;

  /**
   * <p>The instance's operating system.</p>
   */
  Os?: string;

  /**
   * <p>The instance's platform.</p>
   */
  Platform?: string;

  /**
   * <p>The instance's private DNS name.</p>
   */
  PrivateDns?: string;

  /**
   * <p>The instance's private IP address.</p>
   */
  PrivateIp?: string;

  /**
   * <p>The instance public DNS name.</p>
   */
  PublicDns?: string;

  /**
   * <p>The instance public IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>For registered instances, who performed the registration.</p>
   */
  RegisteredBy?: string;

  /**
   * <p>The instance's reported AWS OpsWorks Stacks agent version.</p>
   */
  ReportedAgentVersion?: string;

  /**
   * <p>For registered instances, the reported operating system.</p>
   */
  ReportedOs?: _ReportedOs;

  /**
   * <p>The instance's root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  RootDeviceType?: "ebs" | "instance-store" | string;

  /**
   * <p>The root device volume ID.</p>
   */
  RootDeviceVolumeId?: string;

  /**
   * <p>An array containing the instance security group IDs.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The SSH key's Deep Security Agent (DSA) fingerprint.</p>
   */
  SshHostDsaKeyFingerprint?: string;

  /**
   * <p>The SSH key's RSA fingerprint.</p>
   */
  SshHostRsaKeyFingerprint?: string;

  /**
   * <p>The instance's Amazon EC2 key-pair name.</p>
   */
  SshKeyName?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The instance status:</p> <ul> <li> <p> <code>booting</code> </p> </li> <li> <p> <code>connection_lost</code> </p> </li> <li> <p> <code>online</code> </p> </li> <li> <p> <code>pending</code> </p> </li> <li> <p> <code>rebooting</code> </p> </li> <li> <p> <code>requested</code> </p> </li> <li> <p> <code>running_setup</code> </p> </li> <li> <p> <code>setup_failed</code> </p> </li> <li> <p> <code>shutting_down</code> </p> </li> <li> <p> <code>start_failed</code> </p> </li> <li> <p> <code>stop_failed</code> </p> </li> <li> <p> <code>stopped</code> </p> </li> <li> <p> <code>stopping</code> </p> </li> <li> <p> <code>terminated</code> </p> </li> <li> <p> <code>terminating</code> </p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>The instance's subnet ID; applicable only if the stack is running in a VPC.</p>
   */
  SubnetId?: string;

  /**
   * <p>The instance's tenancy option, such as <code>dedicated</code> or <code>host</code>.</p>
   */
  Tenancy?: string;

  /**
   * <p>The instance's virtualization type: <code>paravirtual</code> or <code>hvm</code>.</p>
   */
  VirtualizationType?: "paravirtual" | "hvm" | string;
}

export interface _UnmarshalledInstance extends _Instance {
  /**
   * <p>An array of <code>BlockDeviceMapping</code> objects that specify the instance's block device mappings.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledBlockDeviceMapping>;

  /**
   * <p>An array containing the instance layer IDs.</p>
   */
  LayerIds?: Array<string>;

  /**
   * <p>For registered instances, the reported operating system.</p>
   */
  ReportedOs?: _UnmarshalledReportedOs;

  /**
   * <p>An array containing the instance security group IDs.</p>
   */
  SecurityGroupIds?: Array<string>;
}
