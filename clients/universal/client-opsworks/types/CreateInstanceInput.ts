import { _BlockDeviceMapping } from "./_BlockDeviceMapping";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInstanceInput shape
 */
export interface CreateInstanceInput {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string;

  /**
   * <p>An array that contains the instance's layer IDs.</p>
   */
  LayerIds: Array<string> | Iterable<string>;

  /**
   * <p>The instance type, such as <code>t2.micro</code>. For a list of supported instance types, open the stack in the console, choose <b>Instances</b>, and choose <b>+ Instance</b>. The <b>Size</b> list contains the currently supported types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and Types</a>. The parameter values that you use to specify the various types are in the <b>API Name</b> column of the <b>Available Instance Types</b> table.</p>
   */
  InstanceType: string;

  /**
   * <p>For load-based or time-based instances, the type. Windows stacks can use only time-based instances.</p>
   */
  AutoScalingType?: "load" | "timer" | string;

  /**
   * <p>The instance host name.</p>
   */
  Hostname?: string;

  /**
   * <p>The instance's operating system, which must be set to one of the following.</p> <ul> <li> <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p> </li> <li> <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p> </li> <li> <p> <code>CentOS Linux 7</code> </p> </li> <li> <p> <code>Red Hat Enterprise Linux 7</code> </p> </li> <li> <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p> </li> <li> <p>A custom AMI: <code>Custom</code>.</p> </li> </ul> <p>For more information about the supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p> <p>The default option is the current Amazon Linux version. If you set this parameter to <code>Custom</code>, you must use the <a>CreateInstance</a> action's AmiId parameter to specify the custom AMI that you want to use. Block device mappings are not supported if the value is <code>Custom</code>. For more information about supported operating systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">Operating Systems</a>For more information about how to use custom AMIs with AWS OpsWorks Stacks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p>
   */
  Os?: string;

  /**
   * <p>A custom AMI ID to be used to create the instance. The AMI should be based on one of the supported operating systems. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p> <note> <p>If you specify a custom AMI, you must set <code>Os</code> to <code>Custom</code>.</p> </note>
   */
  AmiId?: string;

  /**
   * <p>The instance's Amazon EC2 key-pair name.</p>
   */
  SshKeyName?: string;

  /**
   * <p>The instance Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The instance's virtualization type, <code>paravirtual</code> or <code>hvm</code>.</p>
   */
  VirtualizationType?: string;

  /**
   * <p>The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The instance architecture. The default option is <code>x86_64</code>. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and Types</a>.</p>
   */
  Architecture?: "x86_64" | "i386" | string;

  /**
   * <p>The instance root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  RootDeviceType?: "ebs" | "instance-store" | string;

  /**
   * <p>An array of <code>BlockDeviceMapping</code> objects that specify the instance's block devices. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block Device Mapping</a>. Note that block device mappings are not supported for custom AMIs.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. To control when updates are installed, set this value to <code>false</code>. You must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code> to ensure that your instances have the latest security updates.</p> </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * <p>Whether to create an Amazon EBS-optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The default AWS OpsWorks Stacks agent version. You have the following options:</p> <ul> <li> <p> <code>INHERIT</code> - Use the stack's default agent version setting.</p> </li> <li> <p> <i>version_number</i> - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, edit the instance configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the instance.</p> </li> </ul> <p>The default setting is <code>INHERIT</code>. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p>
   */
  AgentVersion?: string;

  /**
   * <p>The instance's tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter: <code>dedicated</code>, <code>default</code>, or <code>host</code>. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Dedicated Hosts Overview</a> and <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Amazon EC2 Dedicated Hosts</a>. For more information about dedicated instances, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> and <a href="http://aws.amazon.com/ec2/purchasing-options/dedicated-instances/">Amazon EC2 Dedicated Instances</a>.</p>
   */
  Tenancy?: string;

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
