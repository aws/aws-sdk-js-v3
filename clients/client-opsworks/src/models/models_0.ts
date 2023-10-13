// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OpsWorksServiceException as __BaseException } from "./OpsWorksServiceException";

/**
 * @public
 * <p>Describes the configuration manager.</p>
 */
export interface StackConfigurationManager {
  /**
   * @public
   * <p>The name. This parameter must be set to "Chef".</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Chef version. This parameter must be set to 12, 11.10, or 11.4 for Linux stacks, and to 12.2 for Windows stacks. The default value for Linux stacks is 11.4.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Describes an agent version.</p>
 */
export interface AgentVersion {
  /**
   * @public
   * <p>The agent version.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: StackConfigurationManager;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  archive: "archive",
  git: "git",
  s3: "s3",
  svn: "svn",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * <p>Contains the information required to retrieve an app or cookbook from a repository. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and
 *         Cookbooks</a>.</p>
 */
export interface Source {
  /**
   * @public
   * <p>The repository type.</p>
   */
  Type?: SourceType;

  /**
   * @public
   * <p>The source URL. The following is an example of an Amazon S3 source URL:  <code>https://s3.amazonaws.com/opsworks-demo-bucket/opsworks_cookbook_demo.tar.gz</code>.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>This parameter depends on the repository type.</p>
   *          <ul>
   *             <li>
   *                <p>For Amazon S3 bundles, set <code>Username</code> to the appropriate IAM access key
   *         ID.</p>
   *             </li>
   *             <li>
   *                <p>For HTTP bundles, Git repositories, and Subversion repositories, set <code>Username</code>
   *         to the user name.</p>
   *             </li>
   *          </ul>
   */
  Username?: string;

  /**
   * @public
   * <p>When included in a request, the parameter depends on the repository type.</p>
   *          <ul>
   *             <li>
   *                <p>For Amazon S3 bundles, set <code>Password</code> to the appropriate IAM secret access
   *         key.</p>
   *             </li>
   *             <li>
   *                <p>For HTTP bundles and Subversion repositories, set <code>Password</code> to the
   *         password.</p>
   *             </li>
   *          </ul>
   *          <p>For more information on how to safely handle IAM credentials, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html</a>.</p>
   *          <p>In responses, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>In requests, the repository's SSH key.</p>
   *          <p>In responses, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>
   */
  SshKey?: string;

  /**
   * @public
   * <p>The application's version. AWS OpsWorks Stacks enables you to easily deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.</p>
   */
  Revision?: string;
}

/**
 * @public
 * @enum
 */
export const AppAttributesKeys = {
  AutoBundleOnDeploy: "AutoBundleOnDeploy",
  AwsFlowRubySettings: "AwsFlowRubySettings",
  DocumentRoot: "DocumentRoot",
  RailsEnv: "RailsEnv",
} as const;

/**
 * @public
 */
export type AppAttributesKeys = (typeof AppAttributesKeys)[keyof typeof AppAttributesKeys];

/**
 * @public
 * <p>Describes an app's data source.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>The data source's type, <code>AutoSelectOpsworksMysqlInstance</code>,
   *         <code>OpsworksMysqlInstance</code>, <code>RdsDbInstance</code>, or <code>None</code>.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The data source's ARN.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The database name.</p>
   */
  DatabaseName?: string;
}

/**
 * @public
 * <p>Represents an app's environment variable.</p>
 */
export interface EnvironmentVariable {
  /**
   * @public
   * <p>(Required) The environment variable's name, which can consist of up to 64 characters and must be specified. The name can contain upper- and lowercase letters, numbers, and underscores (_), but it must start with a letter or underscore.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>(Optional) The environment variable's value, which can be left empty. If you specify a value, it can contain up to 256 characters, which must all be printable.</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>(Optional) Whether the variable's value will be returned by the <a>DescribeApps</a> action.
   *       To conceal an environment variable's value, set <code>Secure</code> to <code>true</code>.
   *         <code>DescribeApps</code> then returns <code>*****FILTERED*****</code> instead of the actual
   *       value. The default value for <code>Secure</code> is <code>false</code>. </p>
   */
  Secure?: boolean;
}

/**
 * @public
 * <p>Describes an app's SSL configuration.</p>
 */
export interface SslConfiguration {
  /**
   * @public
   * <p>The contents of the certificate's domain.crt file.</p>
   */
  Certificate: string | undefined;

  /**
   * @public
   * <p>The private key; the contents of the certificate's domain.kex file.</p>
   */
  PrivateKey: string | undefined;

  /**
   * @public
   * <p>Optional. Can be used to specify an intermediate certificate authority key or client authentication.</p>
   */
  Chain?: string;
}

/**
 * @public
 * @enum
 */
export const AppType = {
  aws_flow_ruby: "aws-flow-ruby",
  java: "java",
  nodejs: "nodejs",
  other: "other",
  php: "php",
  rails: "rails",
  static: "static",
} as const;

/**
 * @public
 */
export type AppType = (typeof AppType)[keyof typeof AppType];

/**
 * @public
 * <p>A description of the app.</p>
 */
export interface App {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The app stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The app's short name.</p>
   */
  Shortname?: string;

  /**
   * @public
   * <p>The app name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The app's data sources.</p>
   */
  DataSources?: DataSource[];

  /**
   * @public
   * <p>The app type.</p>
   */
  Type?: AppType;

  /**
   * @public
   * <p>A <code>Source</code> object that describes the app repository.</p>
   */
  AppSource?: Source;

  /**
   * @public
   * <p>The app vhost settings with multiple domains separated by commas. For example:
   *         <code>'www.example.com, example.com'</code>
   *          </p>
   */
  Domains?: string[];

  /**
   * @public
   * <p>Whether to enable SSL for the app.</p>
   */
  EnableSsl?: boolean;

  /**
   * @public
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: SslConfiguration;

  /**
   * @public
   * <p>The stack attributes.</p>
   */
  Attributes?: Record<AppAttributesKeys, string>;

  /**
   * @public
   * <p>When the app was created.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be
   *       associated with the app. After you deploy the app, these variables are defined on the
   *       associated app server instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>. </p>
   *          <note>
   *             <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variable names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases, but if you do exceed it, you will cause an exception (API) with an "Environment: is too large (maximum is 20 KB)" message.</p>
   *          </note>
   */
  Environment?: EnvironmentVariable[];
}

/**
 * @public
 * @enum
 */
export const Architecture = {
  i386: "i386",
  x86_64: "x86_64",
} as const;

/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * @public
 */
export interface AssignInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The layer ID, which must correspond to a custom layer. You cannot assign a registered instance to a built-in layer.</p>
   */
  LayerIds: string[] | undefined;
}

/**
 * @public
 * <p>Indicates that a resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>Indicates that a request was not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface AssignVolumeRequest {
  /**
   * @public
   * <p>The volume ID.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 */
export interface AssociateElasticIpRequest {
  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;

  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 */
export interface AttachElasticLoadBalancerRequest {
  /**
   * @public
   * <p>The Elastic Load Balancing instance's name.</p>
   */
  ElasticLoadBalancerName: string | undefined;

  /**
   * @public
   * <p>The ID of the layer to which the Elastic Load Balancing instance is to be attached.</p>
   */
  LayerId: string | undefined;
}

/**
 * @public
 * <p>Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.</p>
 */
export interface AutoScalingThresholds {
  /**
   * @public
   * <p>The number of instances to add or remove when the load exceeds a threshold.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.</p>
   */
  ThresholdsWaitTime?: number;

  /**
   * @public
   * <p>The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics
   *       and suppress additional scaling events. For example, AWS OpsWorks Stacks adds new instances following
   *       an upscaling event but the instances won't start reducing the load until they have been booted
   *       and configured. There is no point in raising additional scaling events during that operation,
   *       which typically takes several minutes. <code>IgnoreMetricsTime</code> allows you to direct
   *       AWS OpsWorks Stacks to suppress scaling events long enough to get the new instances online.</p>
   */
  IgnoreMetricsTime?: number;

  /**
   * @public
   * <p>The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold.</p>
   */
  CpuThreshold?: number;

  /**
   * @public
   * <p>The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold.</p>
   */
  MemoryThreshold?: number;

  /**
   * @public
   * <p>The load threshold. A value of -1 disables the threshold. For more information about how load is computed, see <a href="http://en.wikipedia.org/wiki/Load_%28computing%29">Load (computing)</a>.</p>
   */
  LoadThreshold?: number;

  /**
   * @public
   * <p>Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names,
   *           which are case sensitive and must be in the same region as the stack.</p>
   *          <note>
   *             <p>To use custom alarms, you must update your service role to allow
   *         <code>cloudwatch:DescribeAlarms</code>. You can either have AWS OpsWorks Stacks update the role for
   *       you when you first use this feature or you can edit the role manually. For more information,
   *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-servicerole.html">Allowing AWS OpsWorks Stacks to Act on Your Behalf</a>.</p>
   *          </note>
   */
  Alarms?: string[];
}

/**
 * @public
 * @enum
 */
export const AutoScalingType = {
  load: "load",
  timer: "timer",
} as const;

/**
 * @public
 */
export type AutoScalingType = (typeof AutoScalingType)[keyof typeof AutoScalingType];

/**
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  io1: "io1",
  standard: "standard",
} as const;

/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * <p>Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>
 *       data type.</p>
 */
export interface EbsBlockDevice {
  /**
   * @public
   * <p>The snapshot ID.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The number of I/O operations per second (IOPS) that the volume supports. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The volume size, in GiB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>The volume type. <code>gp2</code> for General Purpose (SSD) volumes, <code>io1</code> for
   *           Provisioned IOPS (SSD) volumes, <code>st1</code> for Throughput Optimized hard disk drives (HDD), <code>sc1</code> for Cold HDD,and <code>standard</code> for Magnetic volumes.</p>
   *          <p>If you specify the <code>io1</code> volume type, you must also specify a value for the <code>Iops</code> attribute.
   *           The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. AWS uses the default volume size (in GiB)
   *           specified in the AMI attributes to set IOPS to 50 x (volume size).</p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p>Whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;
}

/**
 * @public
 * <p>Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type. </p>
 */
export interface BlockDeviceMapping {
  /**
   * @public
   * <p>The device name that is exposed to the instance, such as <code>/dev/sdh</code>. For the root
   *       device, you can use the explicit device name or you can set this parameter to
   *         <code>ROOT_DEVICE</code> and AWS OpsWorks Stacks will provide the correct device name.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>Suppresses the specified device included in the AMI's block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * @public
   * <p>The virtual device name. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a>.</p>
   */
  VirtualName?: string;

  /**
   * @public
   * <p>An <code>EBSBlockDevice</code> that defines how to configure an Amazon EBS volume when the
   *       instance is launched.</p>
   */
  Ebs?: EbsBlockDevice;
}

/**
 * @public
 * <p>Describes the Chef configuration.</p>
 */
export interface ChefConfiguration {
  /**
   * @public
   * <p>Whether to enable Berkshelf.</p>
   */
  ManageBerkshelf?: boolean;

  /**
   * @public
   * <p>The Berkshelf version.</p>
   */
  BerkshelfVersion?: string;
}

/**
 * @public
 * @enum
 */
export const StackAttributesKeys = {
  Color: "Color",
} as const;

/**
 * @public
 */
export type StackAttributesKeys = (typeof StackAttributesKeys)[keyof typeof StackAttributesKeys];

/**
 * @public
 * @enum
 */
export const RootDeviceType = {
  ebs: "ebs",
  instance_store: "instance-store",
} as const;

/**
 * @public
 */
export type RootDeviceType = (typeof RootDeviceType)[keyof typeof RootDeviceType];

/**
 * @public
 */
export interface CloneStackRequest {
  /**
   * @public
   * <p>The source stack ID.</p>
   */
  SourceStackId: string | undefined;

  /**
   * @public
   * <p>The cloned stack name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The cloned stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The ID of the VPC that the cloned stack is to be launched into. It must be in the specified region. All
   *           instances are launched into this VPC, and you cannot change the ID later.</p>
   *          <ul>
   *             <li>
   *                <p>If your account supports EC2 Classic, the default value is no VPC.</p>
   *             </li>
   *             <li>
   *                <p>If your account does not support EC2 Classic, the default value is the default VPC for the specified region.</p>
   *             </li>
   *          </ul>
   *          <p>If the VPC ID corresponds to a default VPC and you have specified either the
   *         <code>DefaultAvailabilityZone</code> or the <code>DefaultSubnetId</code> parameter only,
   *       AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets
   *       these parameters to the first valid Availability Zone for the specified region and the
   *       corresponding default VPC subnet ID, respectively. </p>
   *          <p>If you specify a nondefault VPC ID, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>It must belong to a VPC in your account that is in the specified region.</p>
   *             </li>
   *             <li>
   *                <p>You must specify a value for <code>DefaultSubnetId</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about how to use AWS OpsWorks Stacks with a VPC, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html">Running a Stack in a
   *         VPC</a>. For more information about default VPC and EC2 Classic, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported
   *         Platforms</a>. </p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>A list of stack attributes and values as key/value pairs to be added to the cloned stack.</p>
   */
  Attributes?: Record<StackAttributesKeys, string>;

  /**
   * @public
   * <p>The stack AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS
   *       resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an
   *       existing IAM role. If you create a stack by using the AWS OpsWorks Stacks console, it creates the role for
   *       you. You can obtain an existing stack's IAM ARN programmatically by calling
   *         <a>DescribePermissions</a>. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   *          <note>
   *             <p>You must set this parameter to a valid service role ARN or the action will fail; there is no default value. You can specify the source stack's service role ARN, if you prefer, but you must do so explicitly.</p>
   *          </note>
   */
  ServiceRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn?: string;

  /**
   * @public
   * <p>The stack's operating system, which must be set to one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux
   *         2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p>
   *             </li>
   *             <li>
   *                <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CentOS Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Red Hat Enterprise Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>,
   *               <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p>
   *             </li>
   *             <li>
   *                <p>A custom AMI: <code>Custom</code>. You specify the custom AMI you want to use when
   *         you create instances. For more information about how to use custom AMIs with OpsWorks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using
   *           Custom AMIs</a>.</p>
   *             </li>
   *          </ul>
   *          <p>The default option is the parent stack's operating system.
   *       For more information about supported operating systems,
   *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p>
   *          <note>
   *             <p>You can specify a different Linux operating system for the cloned stack, but you cannot change from Linux to Windows or Windows to Linux.</p>
   *          </note>
   */
  DefaultOs?: string;

  /**
   * @public
   * <p>The stack's host name theme, with spaces are replaced by underscores. The theme is used to
   *       generate host names for the stack's instances. By default, <code>HostnameTheme</code> is set
   *       to <code>Layer_Dependent</code>, which creates host names by appending integers to the layer's
   *       short name. The other themes are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Baked_Goods</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Clouds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Europe_Cities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fruits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Greek_Deities_and_Titans</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Legendary_creatures_from_Japan</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Planets_and_Moons</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Roman_Deities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Scottish_Islands</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>US_Cities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Wild_Cats</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To obtain a generated host name, call <code>GetHostNameSuggestion</code>, which returns a
   *       host name based on the current theme.</p>
   */
  HostnameTheme?: string;

  /**
   * @public
   * <p>The cloned stack's default Availability Zone, which must be in the specified region. For more
   *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and
   *         Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must
   *       be in the same zone. For more information, see the <code>VpcId</code> parameter description.
   *     </p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * @public
   * <p>The stack's default VPC subnet ID. This parameter is required if you specify a value for the
   *         <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify
   *       otherwise when you create the instance. If you also specify a value for
   *         <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on
   *       default values and when this parameter is required, see the <code>VpcId</code> parameter
   *       description. </p>
   */
  DefaultSubnetId?: string;

  /**
   * @public
   * <p>A string that contains user-defined, custom JSON. It is used to override the corresponding default stack configuration JSON values. The string should be in the following format:</p>
   *          <p>
   *             <code>"\{\"key1\": \"value1\", \"key2\": \"value2\",...\}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>
   *          </p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>The configuration manager. When you clone a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * @public
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * @public
   * <p>Whether to use custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
   * @public
   * <p>Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers.</p>
   *          <p>AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are
   *       associated with layers by default. With <code>UseOpsworksSecurityGroups</code> you can instead
   *       provide your own custom security groups. <code>UseOpsworksSecurityGroups</code> has the
   *       following settings: </p>
   *          <ul>
   *             <li>
   *                <p>True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it but you cannot delete the built-in security group.</p>
   *             </li>
   *             <li>
   *                <p>False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate Amazon Elastic Compute Cloud (Amazon EC2) security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New
   *         Stack</a>.</p>
   */
  UseOpsworksSecurityGroups?: boolean;

  /**
   * @public
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
   * @public
   * <p>A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS
   *       OpsWorks installs the public key on the instance and you can use the private key with an SSH
   *       client to log in to the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html"> Using SSH to
   *         Communicate with an Instance</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html"> Managing SSH
   *         Access</a>. You can override this setting by specifying a different key pair, or no key
   *       pair, when you <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">
   *         create an instance</a>. </p>
   */
  DefaultSshKeyName?: string;

  /**
   * @public
   * <p>Whether to clone the source stack's permissions.</p>
   */
  ClonePermissions?: boolean;

  /**
   * @public
   * <p>A list of source stack app IDs to be included in the cloned stack.</p>
   */
  CloneAppIds?: string[];

  /**
   * @public
   * <p>The default root device type. This value is used by default for all instances in the cloned
   *       stack, but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType;

  /**
   * @public
   * <p>The default AWS OpsWorks Stacks agent version. You have the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Auto-update - Set this parameter to <code>LATEST</code>. AWS OpsWorks Stacks
   *       automatically installs new agent versions on the stack's instances as soon as
   *       they are available.</p>
   *             </li>
   *             <li>
   *                <p>Fixed version - Set this parameter to your preferred agent version. To update
   *              the agent version, you must edit the stack configuration and specify a new version.
   *              AWS OpsWorks Stacks then automatically installs that version on the stack's instances.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting is <code>LATEST</code>. To specify an agent version,
   *       you must use the complete version number, not the abbreviated number shown on the console.
   *       For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p>
   *          <note>
   *             <p>You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.</p>
   *          </note>
   */
  AgentVersion?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>CloneStack</code> request.</p>
 */
export interface CloneStackResult {
  /**
   * @public
   * <p>The cloned stack ID.</p>
   */
  StackId?: string;
}

/**
 * @public
 * @enum
 */
export const CloudWatchLogsEncoding = {
  ascii: "ascii",
  big5: "big5",
  big5hkscs: "big5hkscs",
  cp037: "cp037",
  cp1006: "cp1006",
  cp1026: "cp1026",
  cp1140: "cp1140",
  cp1250: "cp1250",
  cp1251: "cp1251",
  cp1252: "cp1252",
  cp1253: "cp1253",
  cp1254: "cp1254",
  cp1255: "cp1255",
  cp1256: "cp1256",
  cp1257: "cp1257",
  cp1258: "cp1258",
  cp424: "cp424",
  cp437: "cp437",
  cp500: "cp500",
  cp720: "cp720",
  cp737: "cp737",
  cp775: "cp775",
  cp850: "cp850",
  cp852: "cp852",
  cp855: "cp855",
  cp856: "cp856",
  cp857: "cp857",
  cp858: "cp858",
  cp860: "cp860",
  cp861: "cp861",
  cp862: "cp862",
  cp863: "cp863",
  cp864: "cp864",
  cp865: "cp865",
  cp866: "cp866",
  cp869: "cp869",
  cp874: "cp874",
  cp875: "cp875",
  cp932: "cp932",
  cp949: "cp949",
  cp950: "cp950",
  euc_jis_2004: "euc_jis_2004",
  euc_jisx0213: "euc_jisx0213",
  euc_jp: "euc_jp",
  euc_kr: "euc_kr",
  gb18030: "gb18030",
  gb2312: "gb2312",
  gbk: "gbk",
  hz: "hz",
  iso2022_jp: "iso2022_jp",
  iso2022_jp_1: "iso2022_jp_1",
  iso2022_jp_2: "iso2022_jp_2",
  iso2022_jp_2004: "iso2022_jp_2004",
  iso2022_jp_3: "iso2022_jp_3",
  iso2022_jp_ext: "iso2022_jp_ext",
  iso2022_kr: "iso2022_kr",
  iso8859_10: "iso8859_10",
  iso8859_13: "iso8859_13",
  iso8859_14: "iso8859_14",
  iso8859_15: "iso8859_15",
  iso8859_16: "iso8859_16",
  iso8859_2: "iso8859_2",
  iso8859_3: "iso8859_3",
  iso8859_4: "iso8859_4",
  iso8859_5: "iso8859_5",
  iso8859_6: "iso8859_6",
  iso8859_7: "iso8859_7",
  iso8859_8: "iso8859_8",
  iso8859_9: "iso8859_9",
  johab: "johab",
  koi8_r: "koi8_r",
  koi8_u: "koi8_u",
  latin_1: "latin_1",
  mac_cyrillic: "mac_cyrillic",
  mac_greek: "mac_greek",
  mac_iceland: "mac_iceland",
  mac_latin2: "mac_latin2",
  mac_roman: "mac_roman",
  mac_turkish: "mac_turkish",
  ptcp154: "ptcp154",
  shift_jis: "shift_jis",
  shift_jis_2004: "shift_jis_2004",
  shift_jisx0213: "shift_jisx0213",
  utf_16: "utf_16",
  utf_16_be: "utf_16_be",
  utf_16_le: "utf_16_le",
  utf_32: "utf_32",
  utf_32_be: "utf_32_be",
  utf_32_le: "utf_32_le",
  utf_7: "utf_7",
  utf_8: "utf_8",
  utf_8_sig: "utf_8_sig",
} as const;

/**
 * @public
 */
export type CloudWatchLogsEncoding = (typeof CloudWatchLogsEncoding)[keyof typeof CloudWatchLogsEncoding];

/**
 * @public
 * @enum
 */
export const CloudWatchLogsInitialPosition = {
  end_of_file: "end_of_file",
  start_of_file: "start_of_file",
} as const;

/**
 * @public
 */
export type CloudWatchLogsInitialPosition =
  (typeof CloudWatchLogsInitialPosition)[keyof typeof CloudWatchLogsInitialPosition];

/**
 * @public
 * @enum
 */
export const CloudWatchLogsTimeZone = {
  LOCAL: "LOCAL",
  UTC: "UTC",
} as const;

/**
 * @public
 */
export type CloudWatchLogsTimeZone = (typeof CloudWatchLogsTimeZone)[keyof typeof CloudWatchLogsTimeZone];

/**
 * @public
 * <p>Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.</p>
 */
export interface CloudWatchLogsLogStream {
  /**
   * @public
   * <p>Specifies the destination log group. A log group is created automatically if it doesn't already exist.
   *             Log group names can be between 1 and 512 characters long. Allowed characters include a-z, A-Z, 0-9, '_' (underscore),
   *             '-' (hyphen), '/' (forward slash), and '.' (period).</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>Specifies how the time stamp is extracted from logs. For more information, see the
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.</p>
   */
  DatetimeFormat?: string;

  /**
   * @public
   * <p>Specifies the time zone of log event time stamps.</p>
   */
  TimeZone?: CloudWatchLogsTimeZone;

  /**
   * @public
   * <p>Specifies log files that you want to push to CloudWatch Logs.</p>
   *         <p>
   *             <code>File</code> can point to a specific file or multiple files (by using wild card characters such as <code>/var/log/system.log*</code>).
   *             Only the latest file is pushed to CloudWatch Logs, based on file modification time. We recommend that you use wild card characters to specify a series
   *             of files of the same type, such as <code>access_log.2014-06-01-01</code>, <code>access_log.2014-06-01-02</code>, and so on
   *             by using a pattern like <code>access_log.*</code>. Don't use a wildcard to match multiple file types,
   *             such as <code>access_log_80</code> and <code>access_log_443</code>. To specify multiple, different file types, add another
   *             log stream entry to the configuration file, so that each log file type is stored in a different log group.</p>
   *         <p>Zipped files are not supported.</p>
   */
  File?: string;

  /**
   * @public
   * <p>Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers,
   *             such as '1', '2-5'. The default value is '1', meaning the first line is used to calculate the fingerprint. Fingerprint lines are
   *             not sent to CloudWatch Logs unless all specified lines are available.</p>
   */
  FileFingerprintLines?: string;

  /**
   * @public
   * <p>Specifies the pattern for identifying the start of a log message.</p>
   */
  MultiLineStartPattern?: string;

  /**
   * @public
   * <p>Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file.
   *             This setting is only used if there is no state persisted for that log stream.</p>
   */
  InitialPosition?: CloudWatchLogsInitialPosition;

  /**
   * @public
   * <p>Specifies the encoding of the log file so that the file can be read correctly.
   *             The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.</p>
   */
  Encoding?: CloudWatchLogsEncoding;

  /**
   * @public
   * <p>Specifies the time duration for the batching of log events. The minimum value is 5000ms and default value is 5000ms.</p>
   */
  BufferDuration?: number;

  /**
   * @public
   * <p>Specifies the max number of log events in a batch, up to 10000. The default value is 1000.</p>
   */
  BatchCount?: number;

  /**
   * @public
   * <p>Specifies the maximum size of log events in a batch, in bytes, up to 1048576 bytes.
   *             The default value is 32768 bytes. This size is calculated as the sum of all event messages
   *             in UTF-8, plus 26 bytes for each log event.</p>
   */
  BatchSize?: number;
}

/**
 * @public
 * <p>Describes the Amazon CloudWatch logs configuration for a layer.</p>
 */
export interface CloudWatchLogsConfiguration {
  /**
   * @public
   * <p>Whether CloudWatch Logs is enabled for a layer.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>A list of configuration options for CloudWatch Logs.</p>
   */
  LogStreams?: CloudWatchLogsLogStream[];
}

/**
 * @public
 * <p>Describes a command.</p>
 */
export interface Command {
  /**
   * @public
   * <p>The command ID.</p>
   */
  CommandId?: string;

  /**
   * @public
   * <p>The ID of the instance where the command was executed.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The command deployment ID.</p>
   */
  DeploymentId?: string;

  /**
   * @public
   * <p>Date and time when the command was run.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>Date and time when the command was acknowledged.</p>
   */
  AcknowledgedAt?: string;

  /**
   * @public
   * <p>Date when the command completed.</p>
   */
  CompletedAt?: string;

  /**
   * @public
   * <p>The command status:</p>
   *          <ul>
   *             <li>
   *                <p>failed</p>
   *             </li>
   *             <li>
   *                <p>successful</p>
   *             </li>
   *             <li>
   *                <p>skipped</p>
   *             </li>
   *             <li>
   *                <p>pending</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * @public
   * <p>The command exit code.</p>
   */
  ExitCode?: number;

  /**
   * @public
   * <p>The URL of the command log.</p>
   */
  LogUrl?: string;

  /**
   * @public
   * <p>The command type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>configure</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>execute_recipes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>install_dependencies</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>restart</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rollback</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>setup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stop</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undeploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update_custom_cookbooks</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update_dependencies</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The app's short name.</p>
   */
  Shortname?: string;

  /**
   * @public
   * <p>The app name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The app's data source.</p>
   */
  DataSources?: DataSource[];

  /**
   * @public
   * <p>The app type. Each supported type is associated with a particular layer. For example, PHP
   *       applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances
   *       that are members of the corresponding layer. If your app isn't one of the standard types, or
   *       you prefer to implement your own Deploy recipes, specify <code>other</code>.</p>
   */
  Type: AppType | undefined;

  /**
   * @public
   * <p>A <code>Source</code> object that specifies the app repository.</p>
   */
  AppSource?: Source;

  /**
   * @public
   * <p>The app virtual host settings, with multiple domains separated by commas. For example:
   *         <code>'www.example.com, example.com'</code>
   *          </p>
   */
  Domains?: string[];

  /**
   * @public
   * <p>Whether to enable SSL for the app.</p>
   */
  EnableSsl?: boolean;

  /**
   * @public
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: SslConfiguration;

  /**
   * @public
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<AppAttributesKeys, string>;

  /**
   * @public
   * <p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be
   *       associated with the app. After you deploy the app, these variables are defined on the
   *       associated app server instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>.</p>
   *          <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 20KB)."</p>
   *          <note>
   *             <p>If you have specified one or more environment variables, you cannot modify the stack's Chef version.</p>
   *          </note>
   */
  Environment?: EnvironmentVariable[];
}

/**
 * @public
 * <p>Contains the response to a <code>CreateApp</code> request.</p>
 */
export interface CreateAppResult {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;
}

/**
 * @public
 * @enum
 */
export const DeploymentCommandName = {
  configure: "configure",
  deploy: "deploy",
  execute_recipes: "execute_recipes",
  install_dependencies: "install_dependencies",
  restart: "restart",
  rollback: "rollback",
  setup: "setup",
  start: "start",
  stop: "stop",
  undeploy: "undeploy",
  update_custom_cookbooks: "update_custom_cookbooks",
  update_dependencies: "update_dependencies",
} as const;

/**
 * @public
 */
export type DeploymentCommandName = (typeof DeploymentCommandName)[keyof typeof DeploymentCommandName];

/**
 * @public
 * <p>Used to specify a stack or deployment command.</p>
 */
export interface DeploymentCommand {
  /**
   * @public
   * <p>Specifies the operation. You can specify only one command.</p>
   *          <p>For stacks, the following commands are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>execute_recipes</code>: Execute one or more recipes. To specify the recipes, set an
   *           <code>Args</code> parameter named <code>recipes</code> to the list of recipes to be
   *         executed. For example, to execute <code>phpapp::appsetup</code>, set <code>Args</code> to
   *           <code>\{"recipes":["phpapp::appsetup"]\}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>install_dependencies</code>: Install the stack's dependencies.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update_custom_cookbooks</code>: Update the stack's custom cookbooks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update_dependencies</code>: Update the stack's dependencies.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The update_dependencies and install_dependencies commands are supported only for Linux instances. You can run the commands successfully on Windows instances, but they do nothing.</p>
   *          </note>
   *          <p>For apps, the following commands are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deploy</code>: Deploy an app. Ruby on Rails apps have an optional <code>Args</code>
   *         parameter named <code>migrate</code>. Set <code>Args</code> to \{"migrate":["true"]\} to
   *         migrate the database. The default setting is \{"migrate":["false"]\}.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rollback</code> Roll the app back to the previous version. When you update an app,
   *         AWS OpsWorks Stacks stores the previous version, up to a maximum of five versions. You can use this
   *         command to roll an app back as many as four versions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code>: Start the app's web or application server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stop</code>: Stop the app's web or application server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>restart</code>: Restart the app's web or application server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undeploy</code>: Undeploy the app.</p>
   *             </li>
   *          </ul>
   */
  Name: DeploymentCommandName | undefined;

  /**
   * @public
   * <p>The arguments of those commands that take arguments. It should be set to a JSON object with the following format:</p>
   *          <p>
   *             <code>\{"arg_name1" : ["value1", "value2", ...], "arg_name2" : ["value1", "value2", ...],
   *         ...\}</code>
   *          </p>
   *          <p>The <code>update_dependencies</code> command takes two arguments:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>upgrade_os_to</code> - Specifies the desired Amazon Linux version for instances
   *         whose OS you want to upgrade, such as <code>Amazon Linux 2016.09</code>. You must also set
   *         the <code>allow_reboot</code> argument to true.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allow_reboot</code> - Specifies whether to allow AWS OpsWorks Stacks to reboot the instances if
   *         necessary, after installing the updates. This argument can be set to either
   *           <code>true</code> or <code>false</code>. The default value is <code>false</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to upgrade an instance to Amazon Linux 2016.09, set <code>Args</code> to the
   *       following.</p>
   *          <p>
   *             <code> \{ "upgrade_os_to":["Amazon Linux 2016.09"], "allow_reboot":["true"] \} </code>
   *          </p>
   */
  Args?: Record<string, string[]>;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The app ID. This parameter is required for app deployments, but not for other deployment commands.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The instance IDs for the deployment targets.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>The layer IDs for the deployment targets.</p>
   */
  LayerIds?: string[];

  /**
   * @public
   * <p>A <code>DeploymentCommand</code> object that specifies the deployment command and any
   *       associated arguments.</p>
   */
  Command: DeploymentCommand | undefined;

  /**
   * @public
   * <p>A user-defined comment.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>A string that contains user-defined, custom JSON. You can use this parameter to override some corresponding default stack configuration JSON values. The string should be in the following format:</p>
   *          <p>
   *             <code>"\{\"key1\": \"value1\", \"key2\": \"value2\",...\}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *           Modify the Stack Configuration Attributes</a> and
   *           <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">Overriding Attributes With Custom JSON</a>.</p>
   */
  CustomJson?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>CreateDeployment</code> request.</p>
 */
export interface CreateDeploymentResult {
  /**
   * @public
   * <p>The deployment ID, which can be used with other requests to identify the deployment.</p>
   */
  DeploymentId?: string;
}

/**
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>An array that contains the instance's layer IDs.</p>
   */
  LayerIds: string[] | undefined;

  /**
   * @public
   * <p>The instance type, such as <code>t2.micro</code>. For a list of supported instance types,
   *       open the stack in the console, choose <b>Instances</b>, and choose <b>+ Instance</b>.
   *       The <b>Size</b> list contains the currently supported types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *         Families and Types</a>. The parameter values that you use to specify the various types are
   *       in the <b>API Name</b> column of the <b>Available Instance Types</b> table.</p>
   */
  InstanceType: string | undefined;

  /**
   * @public
   * <p>For load-based or time-based instances, the type. Windows stacks can use only time-based instances.</p>
   */
  AutoScalingType?: AutoScalingType;

  /**
   * @public
   * <p>The instance host name.</p>
   */
  Hostname?: string;

  /**
   * @public
   * <p>The instance's operating system, which must be set to one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>,
   *               <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p>
   *             </li>
   *             <li>
   *                <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CentOS Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Red Hat Enterprise Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>,
   * 			   <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p>
   *             </li>
   *             <li>
   *                <p>A custom AMI: <code>Custom</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about the supported operating systems,
   *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p>
   *          <p>The default option is the current Amazon Linux version. If you set this parameter to
   *         <code>Custom</code>, you must use the <a>CreateInstance</a> action's AmiId parameter to
   *       specify the custom AMI that you want to use. Block device mappings are not supported if the value is <code>Custom</code>. For more information about supported operating
   *       systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">Operating Systems</a>For more information about how to use custom AMIs with AWS OpsWorks Stacks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using
   *         Custom AMIs</a>.</p>
   */
  Os?: string;

  /**
   * @public
   * <p>A custom AMI ID to be used to create the instance. The AMI should be based on one of the
   *       supported operating systems.
   *       For more information, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using Custom AMIs</a>.</p>
   *          <note>
   *             <p>If you specify a custom AMI, you must set <code>Os</code> to <code>Custom</code>.</p>
   *          </note>
   */
  AmiId?: string;

  /**
   * @public
   * <p>The instance's Amazon EC2 key-pair name.</p>
   */
  SshKeyName?: string;

  /**
   * @public
   * <p>The instance Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The instance's virtualization type, <code>paravirtual</code> or <code>hvm</code>.</p>
   */
  VirtualizationType?: string;

  /**
   * @public
   * <p>The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The instance architecture. The default option is <code>x86_64</code>. Instance types do not
   *       necessarily support both architectures. For a list of the architectures that are supported by
   *       the different instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and
   *         Types</a>.</p>
   */
  Architecture?: Architecture;

  /**
   * @public
   * <p>The instance root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  RootDeviceType?: RootDeviceType;

  /**
   * @public
   * <p>An array of <code>BlockDeviceMapping</code> objects that specify the instance's block
   *       devices. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block
   *         Device Mapping</a>. Note that block device mappings are not supported for custom AMIs.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>Whether to install operating system and package updates when the instance boots. The default
   *       value is <code>true</code>. To control when updates are installed, set this value to
   *         <code>false</code>. You must then update your instances manually by using
   *         <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or
   *       by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the
   *       instances. </p>
   *          <note>
   *             <p>We strongly recommend using the default value of <code>true</code> to ensure that your
   *         instances have the latest security updates.</p>
   *          </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * @public
   * <p>Whether to create an Amazon EBS-optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The default AWS OpsWorks Stacks agent version. You have the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INHERIT</code> - Use the stack's default agent version setting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>version_number</i> - Use the specified agent version.
   *         This value overrides the stack's default setting.
   *         To update the agent version, edit the instance configuration and specify a
   *         new version.
   *         AWS OpsWorks Stacks then automatically installs that version on the instance.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting is <code>INHERIT</code>. To specify an agent version,
   *       you must use the complete version number, not the abbreviated number shown on the console.
   *       For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p>
   */
  AgentVersion?: string;

  /**
   * @public
   * <p>The instance's tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter:  <code>dedicated</code>, <code>default</code>, or <code>host</code>. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Dedicated Hosts Overview</a> and <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Amazon EC2 Dedicated Hosts</a>. For more information about dedicated instances, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> and <a href="http://aws.amazon.com/ec2/purchasing-options/dedicated-instances/">Amazon EC2 Dedicated Instances</a>.</p>
   */
  Tenancy?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>CreateInstance</code> request.</p>
 */
export interface CreateInstanceResult {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * @enum
 */
export const LayerAttributesKeys = {
  BundlerVersion: "BundlerVersion",
  EcsClusterArn: "EcsClusterArn",
  EnableHaproxyStats: "EnableHaproxyStats",
  GangliaPassword: "GangliaPassword",
  GangliaUrl: "GangliaUrl",
  GangliaUser: "GangliaUser",
  HaproxyHealthCheckMethod: "HaproxyHealthCheckMethod",
  HaproxyHealthCheckUrl: "HaproxyHealthCheckUrl",
  HaproxyStatsPassword: "HaproxyStatsPassword",
  HaproxyStatsUrl: "HaproxyStatsUrl",
  HaproxyStatsUser: "HaproxyStatsUser",
  JavaAppServer: "JavaAppServer",
  JavaAppServerVersion: "JavaAppServerVersion",
  Jvm: "Jvm",
  JvmOptions: "JvmOptions",
  JvmVersion: "JvmVersion",
  ManageBundler: "ManageBundler",
  MemcachedMemory: "MemcachedMemory",
  MysqlRootPassword: "MysqlRootPassword",
  MysqlRootPasswordUbiquitous: "MysqlRootPasswordUbiquitous",
  NodejsVersion: "NodejsVersion",
  PassengerVersion: "PassengerVersion",
  RailsStack: "RailsStack",
  RubyVersion: "RubyVersion",
  RubygemsVersion: "RubygemsVersion",
} as const;

/**
 * @public
 */
export type LayerAttributesKeys = (typeof LayerAttributesKeys)[keyof typeof LayerAttributesKeys];

/**
 * @public
 * <p>AWS OpsWorks Stacks supports five
 *       lifecycle events:
 *         <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For
 *       each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide
 *       custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the
 *       standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a
 *       particular layer to be run in response to each of the five events. </p>
 *
 *          <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>
 */
export interface Recipes {
  /**
   * @public
   * <p>An array of custom recipe names to be run following a <code>setup</code> event.</p>
   */
  Setup?: string[];

  /**
   * @public
   * <p>An array of custom recipe names to be run following a <code>configure</code> event.</p>
   */
  Configure?: string[];

  /**
   * @public
   * <p>An array of custom recipe names to be run following a <code>deploy</code> event.</p>
   */
  Deploy?: string[];

  /**
   * @public
   * <p>An array of custom recipe names to be run following a <code>undeploy</code> event.</p>
   */
  Undeploy?: string[];

  /**
   * @public
   * <p>An array of custom recipe names to be run following a <code>shutdown</code> event.</p>
   */
  Shutdown?: string[];
}

/**
 * @public
 * <p>The Shutdown event configuration.</p>
 */
export interface ShutdownEventConfiguration {
  /**
   * @public
   * <p>The time, in seconds, that AWS OpsWorks Stacks will wait after triggering a Shutdown event before shutting down an instance.</p>
   */
  ExecutionTimeout?: number;

  /**
   * @public
   * <p>Whether to enable Elastic Load Balancing connection draining. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#conn-drain">Connection Draining</a>
   *          </p>
   */
  DelayUntilElbConnectionsDrained?: boolean;
}

/**
 * @public
 * <p>Specifies the lifecycle event configuration</p>
 */
export interface LifecycleEventConfiguration {
  /**
   * @public
   * <p>A <code>ShutdownEventConfiguration</code> object that specifies the Shutdown event
   *       configuration.</p>
   */
  Shutdown?: ShutdownEventConfiguration;
}

/**
 * @public
 * @enum
 */
export const LayerType = {
  aws_flow_ruby: "aws-flow-ruby",
  custom: "custom",
  db_master: "db-master",
  ecs_cluster: "ecs-cluster",
  java_app: "java-app",
  lb: "lb",
  memcached: "memcached",
  monitoring_master: "monitoring-master",
  nodejs_app: "nodejs-app",
  php_app: "php-app",
  rails_app: "rails-app",
  web: "web",
} as const;

/**
 * @public
 */
export type LayerType = (typeof LayerType)[keyof typeof LayerType];

/**
 * @public
 * <p>Describes an Amazon EBS volume configuration.</p>
 */
export interface VolumeConfiguration {
  /**
   * @public
   * <p>The volume mount point. For example "/dev/sdh".</p>
   */
  MountPoint: string | undefined;

  /**
   * @public
   * <p>The volume <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.</p>
   */
  RaidLevel?: number;

  /**
   * @public
   * <p>The number of disks in the volume.</p>
   */
  NumberOfDisks: number | undefined;

  /**
   * @public
   * <p>The volume size.</p>
   */
  Size: number | undefined;

  /**
   * @public
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">
   *           Amazon EBS Volume Types</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard</code> - Magnetic. Magnetic volumes must have a minimum size of 1 GiB and a maximum size of 1024 GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> - Provisioned IOPS (SSD). PIOPS volumes must have a minimum size of 4 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gp2</code> - General Purpose (SSD). General purpose volumes must have a minimum size of 1 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>st1</code> - Throughput Optimized hard disk drive (HDD). Throughput optimized HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>sc1</code> - Cold HDD. Cold HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *          </ul>
   */
  VolumeType?: string;

  /**
   * @public
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>Specifies whether an Amazon EBS volume is encrypted. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a>.</p>
   */
  Encrypted?: boolean;
}

/**
 * @public
 */
export interface CreateLayerRequest {
  /**
   * @public
   * <p>The layer stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The layer type. A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.</p>
   */
  Type: LayerType | undefined;

  /**
   * @public
   * <p>The layer name, which is used by the console.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters, which are limited to the alphanumeric characters, '-', '_', and '.'.</p>
   *          <p>The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html">Layer Reference</a>.</p>
   */
  Shortname: string | undefined;

  /**
   * @public
   * <p>One or more user-defined key-value pairs to be added to the stack attributes.</p>
   *          <p>To create a cluster layer, set the <code>EcsClusterArn</code> attribute to the cluster's ARN.</p>
   */
  Attributes?: Record<LayerAttributesKeys, string>;

  /**
   * @public
   * <p>Specifies CloudWatch Logs configuration options for the layer. For more information, see <a>CloudWatchLogsLogStream</a>.</p>
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * @public
   * <p>The ARN of an IAM profile to be used for the layer's EC2 instances. For more information
   *       about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * @public
   * <p>A JSON-formatted string containing custom stack configuration and deployment attributes
   *      to be installed on the layer's instances. For more information, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">
   *         Using Custom JSON</a>. This feature is supported as of version 1.7.42 of the AWS CLI.
   *     </p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>An array containing the layer custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: string[];

  /**
   * @public
   * <p>An array of <code>Package</code> objects that describes the layer packages.</p>
   */
  Packages?: string[];

  /**
   * @public
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?: VolumeConfiguration[];

  /**
   * @public
   * <p>Whether to disable auto healing for the layer.</p>
   */
  EnableAutoHealing?: boolean;

  /**
   * @public
   * <p>Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
   *         address</a> to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignElasticIps?: boolean;

  /**
   * @public
   * <p>For stacks that are running in a VPC, whether to automatically assign a public IP address to
   *       the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignPublicIps?: boolean;

  /**
   * @public
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer custom recipes.</p>
   */
  CustomRecipes?: Recipes;

  /**
   * @public
   * <p>Whether to install operating system and package updates when the instance boots. The default
   *       value is <code>true</code>. To control when updates are installed, set this value to
   *         <code>false</code>. You must then update your instances manually by using
   *         <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or
   *       by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the
   *       instances. </p>
   *          <note>
   *             <p>To ensure that your
   *         instances have the latest security updates, we strongly recommend using the default value of <code>true</code>.</p>
   *          </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * @public
   * <p>Whether to use Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * @public
   * <p>A <code>LifeCycleEventConfiguration</code> object that you can use to configure the Shutdown event to
   *       specify an execution timeout and enable or disable Elastic Load Balancer connection
   *       draining.</p>
   */
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}

/**
 * @public
 * <p>Contains the response to a <code>CreateLayer</code> request.</p>
 */
export interface CreateLayerResult {
  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId?: string;
}

/**
 * @public
 */
export interface CreateStackRequest {
  /**
   * @public
   * <p>The stack name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The stack's AWS region, such as <code>ap-south-1</code>. For more information about
   *             Amazon regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   *          <note>
   *             <p>In the AWS CLI, this API maps to the <code>--stack-region</code> parameter. If the
   *                     <code>--stack-region</code> parameter and the AWS CLI common parameter
   *                     <code>--region</code> are set to the same value, the stack uses a
   *                     <i>regional</i> endpoint. If the <code>--stack-region</code>
   *                 parameter is not set, but the AWS CLI <code>--region</code> parameter is, this also
   *                 results in a stack with a <i>regional</i> endpoint. However, if the
   *                     <code>--region</code> parameter is set to <code>us-east-1</code>, and the
   *                     <code>--stack-region</code> parameter is set to one of the following, then the
   *                 stack uses a legacy or <i>classic</i> region: <code>us-west-1,
   *                     us-west-2, sa-east-1, eu-central-1, eu-west-1, ap-northeast-1, ap-southeast-1,
   *                     ap-southeast-2</code>. In this case, the actual API endpoint of the stack is in
   *                     <code>us-east-1</code>. Only the preceding regions are supported as classic
   *                 regions in the <code>us-east-1</code> API endpoint. Because it is a best practice to
   *                 choose the regional endpoint that is closest to where you manage AWS, we recommend
   *                 that you use regional endpoints for new stacks. The AWS CLI common
   *                     <code>--region</code> parameter always specifies a regional API endpoint; it
   *                 cannot be used to specify a classic AWS OpsWorks Stacks region.</p>
   *          </note>
   */
  Region: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC that the stack is to be launched into. The VPC must be in the stack's region. All instances are launched into this VPC. You cannot change the ID later.</p>
   *          <ul>
   *             <li>
   *                <p>If your account supports EC2-Classic, the default value is <code>no VPC</code>.</p>
   *             </li>
   *             <li>
   *                <p>If your account does not support EC2-Classic, the default value is the default VPC for the specified region.</p>
   *             </li>
   *          </ul>
   *          <p>If the VPC ID corresponds to a default VPC and you have specified either the
   *         <code>DefaultAvailabilityZone</code> or the <code>DefaultSubnetId</code> parameter only,
   *       AWS OpsWorks Stacks infers the value of the
   *       other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets
   *       these parameters to the first valid Availability Zone for the specified region and the
   *       corresponding default VPC subnet ID, respectively.</p>
   *          <p>If you specify a nondefault VPC ID, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>It must belong to a VPC in your account that is in the specified region.</p>
   *             </li>
   *             <li>
   *                <p>You must specify a value for <code>DefaultSubnetId</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about how to use AWS OpsWorks Stacks with a VPC, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html">Running a Stack in a
   *         VPC</a>. For more information about default VPC and EC2-Classic, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported
   *         Platforms</a>. </p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>One or more user-defined key-value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<StackAttributesKeys, string>;

  /**
   * @public
   * <p>The stack's AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS
   *       resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an
   *       existing IAM role. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  ServiceRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn: string | undefined;

  /**
   * @public
   * <p>The stack's default operating system, which is installed on every instance unless you specify a different operating system when you create the instance. You can specify one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>,
   *               <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p>
   *             </li>
   *             <li>
   *                <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CentOS Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Red Hat Enterprise Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>,
   *               <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>,
   *               <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or
   *               <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p>
   *             </li>
   *             <li>
   *                <p>A custom AMI: <code>Custom</code>. You specify the custom AMI you want to use when
   *         you create instances. For more
   *         information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">
   *         Using Custom AMIs</a>.</p>
   *             </li>
   *          </ul>
   *          <p>The default option is the current Amazon Linux version.
   *       For more information about supported operating systems,
   *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p>
   */
  DefaultOs?: string;

  /**
   * @public
   * <p>The stack's host name theme, with spaces replaced by underscores. The theme is used to
   *       generate host names for the stack's instances. By default, <code>HostnameTheme</code> is set
   *       to <code>Layer_Dependent</code>, which creates host names by appending integers to the layer's
   *       short name. The other themes are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Baked_Goods</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Clouds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Europe_Cities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fruits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Greek_Deities_and_Titans</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Legendary_creatures_from_Japan</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Planets_and_Moons</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Roman_Deities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Scottish_Islands</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>US_Cities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Wild_Cats</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To obtain a generated host name, call <code>GetHostNameSuggestion</code>, which returns a
   *       host name based on the current theme.</p>
   */
  HostnameTheme?: string;

  /**
   * @public
   * <p>The stack's default Availability Zone, which must be in the specified region. For more
   *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and
   *         Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must
   *       be in the same zone. For more information, see the <code>VpcId</code> parameter description.
   *     </p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * @public
   * <p>The stack's default VPC subnet ID. This parameter is required if you specify a value for the
   *         <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify
   *       otherwise when you create the instance. If you also specify a value for
   *         <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on
   *       default values and when this parameter is required, see the <code>VpcId</code> parameter
   *       description. </p>
   */
  DefaultSubnetId?: string;

  /**
   * @public
   * <p>A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"\{\"key1\": \"value1\", \"key2\": \"value2\",...\}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>The configuration manager. When you create a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * @public
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * @public
   * <p>Whether the stack uses custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
   * @public
   * <p>Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers.</p>
   *          <p>AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are
   *       associated with layers by default. With <code>UseOpsworksSecurityGroups</code> you can instead
   *       provide your own custom security groups. <code>UseOpsworksSecurityGroups</code> has the
   *       following settings: </p>
   *          <ul>
   *             <li>
   *                <p>True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.</p>
   *             </li>
   *             <li>
   *                <p>False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New
   *         Stack</a>.</p>
   */
  UseOpsworksSecurityGroups?: boolean;

  /**
   * @public
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or
   *             <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
   * @public
   * <p>A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS
   *       OpsWorks installs the public key on the instance and you can use the private key with an SSH
   *       client to log in to the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html"> Using SSH to
   *         Communicate with an Instance</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html"> Managing SSH
   *         Access</a>. You can override this setting by specifying a different key pair, or no key
   *       pair, when you <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">
   *         create an instance</a>. </p>
   */
  DefaultSshKeyName?: string;

  /**
   * @public
   * <p>The default root device type. This value is the default for all instances in the stack,
   *       but you can override it when you create an instance. The default option is
   *         <code>instance-store</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType;

  /**
   * @public
   * <p>The default AWS OpsWorks Stacks agent version. You have the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Auto-update - Set this parameter to <code>LATEST</code>. AWS OpsWorks Stacks
   *         automatically installs new agent versions on the stack's instances as soon as
   *         they are available.</p>
   *             </li>
   *             <li>
   *                <p>Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting is the most recent release of the agent. To specify an agent version,
   *       you must use the complete version number, not the abbreviated number shown on the console.
   *       For a list of available agent version numbers, call <a>DescribeAgentVersions</a>. AgentVersion cannot be set to Chef 12.2.</p>
   *          <note>
   *             <p>You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.</p>
   *          </note>
   */
  AgentVersion?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>CreateStack</code> request.</p>
 */
export interface CreateStackResult {
  /**
   * @public
   * <p>The stack ID, which is an opaque string that you use to identify the stack when performing
   *       actions such as <code>DescribeStacks</code>.</p>
   */
  StackId?: string;
}

/**
 * @public
 */
export interface CreateUserProfileRequest {
  /**
   * @public
   * <p>The user's IAM ARN; this can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;

  /**
   * @public
   * <p>The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If
   *       the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example,
   *         <code>my.name</code> will be changed to <code>myname</code>. If you do not specify an SSH
   *       user name, AWS OpsWorks Stacks generates one from the IAM user name. </p>
   */
  SshUsername?: string;

  /**
   * @public
   * <p>The user's public SSH key.</p>
   */
  SshPublicKey?: string;

  /**
   * @public
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Setting an IAM
   *         User's Public SSH Key</a>.</p>
   */
  AllowSelfManagement?: boolean;
}

/**
 * @public
 * <p>Contains the response to a <code>CreateUserProfile</code> request.</p>
 */
export interface CreateUserProfileResult {
  /**
   * @public
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Whether to delete the instance Elastic IP address.</p>
   */
  DeleteElasticIp?: boolean;

  /**
   * @public
   * <p>Whether to delete the instance's Amazon EBS volumes.</p>
   */
  DeleteVolumes?: boolean;
}

/**
 * @public
 */
export interface DeleteLayerRequest {
  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStackRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserProfileRequest {
  /**
   * @public
   * <p>The user's IAM ARN. This can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;
}

/**
 * @public
 * <p>Describes a deployment of a stack or app.</p>
 */
export interface Deployment {
  /**
   * @public
   * <p>The deployment ID.</p>
   */
  DeploymentId?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>Date when the deployment was created.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>Date when the deployment completed.</p>
   */
  CompletedAt?: string;

  /**
   * @public
   * <p>The deployment duration.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * @public
   * <p>A user-defined comment.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>Used to specify a stack or deployment command.</p>
   */
  Command?: DeploymentCommand;

  /**
   * @public
   * <p>The deployment status:</p>
   *          <ul>
   *             <li>
   *                <p>running</p>
   *             </li>
   *             <li>
   *                <p>successful</p>
   *             </li>
   *             <li>
   *                <p>failed</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * @public
   * <p>A string that contains user-defined custom JSON. It can be used to override the corresponding default stack configuration attribute values for stack or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"\{\"key1\": \"value1\", \"key2\": \"value2\",...\}"</code>
   *          </p>
   *          <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>The IDs of the target instances.</p>
   */
  InstanceIds?: string[];
}

/**
 * @public
 */
export interface DeregisterEcsClusterRequest {
  /**
   * @public
   * <p>The cluster's Amazon Resource Number (ARN).</p>
   */
  EcsClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterElasticIpRequest {
  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterRdsDbInstanceRequest {
  /**
   * @public
   * <p>The Amazon RDS instance's ARN.</p>
   */
  RdsDbInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterVolumeRequest {
  /**
   * @public
   * <p>The AWS OpsWorks Stacks volume ID, which is the GUID that AWS OpsWorks Stacks assigned to the instance when you registered the volume with the stack, not the Amazon EC2 volume ID.</p>
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentVersionsRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: StackConfigurationManager;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeAgentVersions</code> request.</p>
 */
export interface DescribeAgentVersionsResult {
  /**
   * @public
   * <p>The agent versions for the specified stack or configuration manager. Note that this value is the complete version number, not the abbreviated number used by the console.</p>
   */
  AgentVersions?: AgentVersion[];
}

/**
 * @public
 */
export interface DescribeAppsRequest {
  /**
   * @public
   * <p>The app stack ID. If you use this parameter, <code>DescribeApps</code> returns a description
   *       of the apps in the specified stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>An array of app IDs for the apps to be described. If you use this parameter,
   *         <code>DescribeApps</code> returns a description of the specified apps. Otherwise, it returns
   *       a description of every app.</p>
   */
  AppIds?: string[];
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeApps</code> request.</p>
 */
export interface DescribeAppsResult {
  /**
   * @public
   * <p>An array of <code>App</code> objects that describe the specified apps. </p>
   */
  Apps?: App[];
}

/**
 * @public
 */
export interface DescribeCommandsRequest {
  /**
   * @public
   * <p>The deployment ID. If you include this parameter, <code>DescribeCommands</code> returns a
   *       description of the commands associated with the specified deployment.</p>
   */
  DeploymentId?: string;

  /**
   * @public
   * <p>The instance ID. If you include this parameter, <code>DescribeCommands</code> returns a
   *       description of the commands associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>An array of command IDs. If you include this parameter, <code>DescribeCommands</code> returns
   *       a description of the specified commands. Otherwise, it returns a description of every
   *       command.</p>
   */
  CommandIds?: string[];
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeCommands</code> request.</p>
 */
export interface DescribeCommandsResult {
  /**
   * @public
   * <p>An array of <code>Command</code> objects that describe each of the specified commands.</p>
   */
  Commands?: Command[];
}

/**
 * @public
 */
export interface DescribeDeploymentsRequest {
  /**
   * @public
   * <p>The stack ID. If you include this parameter, the command returns a
   *       description of the commands associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The app ID. If you include this parameter, the command returns a
   *       description of the commands associated with the specified app.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>An array of deployment IDs to be described. If you include this parameter,
   *         the command returns a description of the specified deployments.
   *       Otherwise, it returns a description of every deployment.</p>
   */
  DeploymentIds?: string[];
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeDeployments</code> request.</p>
 */
export interface DescribeDeploymentsResult {
  /**
   * @public
   * <p>An array of <code>Deployment</code> objects that describe the deployments.</p>
   */
  Deployments?: Deployment[];
}

/**
 * @public
 */
export interface DescribeEcsClustersRequest {
  /**
   * @public
   * <p>A list of ARNs, one for each cluster to be described.</p>
   */
  EcsClusterArns?: string[];

  /**
   * @public
   * <p>A stack ID.
   *       <code>DescribeEcsClusters</code> returns a description of the cluster that is registered with the stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results,
   *       the response object's<code>NextToken</code> parameter value is set to a token.
   *       To retrieve the next set of results, call <code>DescribeEcsClusters</code>
   *       again and assign that token to the request object's <code>NextToken</code> parameter.
   *       If there are no remaining results, the previous response
   *       object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>To receive a paginated response, use this parameter to specify the maximum number
   *       of results to be returned with a single call. If the number of available results exceeds this maximum, the
   *       response includes a <code>NextToken</code> value that you can assign
   *       to the <code>NextToken</code> request parameter to get the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes a registered Amazon ECS cluster.</p>
 */
export interface EcsCluster {
  /**
   * @public
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn?: string;

  /**
   * @public
   * <p>The cluster name.</p>
   */
  EcsClusterName?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The time and date that the cluster was registered with the stack.</p>
   */
  RegisteredAt?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeEcsClusters</code> request.</p>
 */
export interface DescribeEcsClustersResult {
  /**
   * @public
   * <p>A list of <code>EcsCluster</code> objects containing the cluster descriptions.</p>
   */
  EcsClusters?: EcsCluster[];

  /**
   * @public
   * <p>If a paginated request does not return all of the remaining results, this parameter is set to a token that
   *       you can assign to the request object's <code>NextToken</code> parameter to retrieve the next set of results.
   *       If the previous paginated request returned all of the remaining results,
   *       this parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeElasticIpsRequest {
  /**
   * @public
   * <p>The instance ID. If you include this parameter, <code>DescribeElasticIps</code> returns a
   *       description of the Elastic IP addresses associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>A stack ID. If you include this parameter, <code>DescribeElasticIps</code> returns a
   *       description of the Elastic IP addresses that are registered with the specified stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>An array of Elastic IP addresses to be described. If you include this parameter,
   *         <code>DescribeElasticIps</code> returns a description of the specified Elastic IP addresses.
   *       Otherwise, it returns a description of every Elastic IP address.</p>
   */
  Ips?: string[];
}

/**
 * @public
 * <p>Describes an Elastic IP address.</p>
 */
export interface ElasticIp {
  /**
   * @public
   * <p>The IP address.</p>
   */
  Ip?: string;

  /**
   * @public
   * <p>The name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The domain.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The AWS region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The ID of the instance that the address is attached to.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeElasticIps</code> request.</p>
 */
export interface DescribeElasticIpsResult {
  /**
   * @public
   * <p>An <code>ElasticIps</code> object that describes the specified Elastic IP addresses.</p>
   */
  ElasticIps?: ElasticIp[];
}

/**
 * @public
 */
export interface DescribeElasticLoadBalancersRequest {
  /**
   * @public
   * <p>A stack ID. The action describes the stack's Elastic Load Balancing instances.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>A list of layer IDs. The action describes the Elastic Load Balancing instances for the specified layers.</p>
   */
  LayerIds?: string[];
}

/**
 * @public
 * <p>Describes an Elastic Load Balancing instance.</p>
 */
export interface ElasticLoadBalancer {
  /**
   * @public
   * <p>The Elastic Load Balancing instance's name.</p>
   */
  ElasticLoadBalancerName?: string;

  /**
   * @public
   * <p>The instance's AWS region.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The instance's public DNS name.</p>
   */
  DnsName?: string;

  /**
   * @public
   * <p>The ID of the stack that the instance is associated with.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The ID of the layer that the instance is attached to.</p>
   */
  LayerId?: string;

  /**
   * @public
   * <p>The VPC ID.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>A list of Availability Zones.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>A list of subnet IDs, if the stack is running in a VPC.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>A list of the EC2 instances that the Elastic Load Balancing instance is managing traffic for.</p>
   */
  Ec2InstanceIds?: string[];
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeElasticLoadBalancers</code> request.</p>
 */
export interface DescribeElasticLoadBalancersResult {
  /**
   * @public
   * <p>A list of <code>ElasticLoadBalancer</code> objects that describe the specified Elastic Load Balancing
   *       instances.</p>
   */
  ElasticLoadBalancers?: ElasticLoadBalancer[];
}

/**
 * @public
 */
export interface DescribeInstancesRequest {
  /**
   * @public
   * <p>A stack ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of
   *       the instances associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>A layer ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of
   *       the instances associated with the specified layer.</p>
   */
  LayerId?: string;

  /**
   * @public
   * <p>An array of instance IDs to be described. If you use this parameter,
   *         <code>DescribeInstances</code> returns a description of the specified instances. Otherwise,
   *       it returns a description of every instance.</p>
   */
  InstanceIds?: string[];
}

/**
 * @public
 * <p>A registered instance's reported operating system.</p>
 */
export interface ReportedOs {
  /**
   * @public
   * <p>The operating system family.</p>
   */
  Family?: string;

  /**
   * @public
   * <p>The operating system name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The operating system version.</p>
   */
  Version?: string;
}

/**
 * @public
 * @enum
 */
export const VirtualizationType = {
  hvm: "hvm",
  paravirtual: "paravirtual",
} as const;

/**
 * @public
 */
export type VirtualizationType = (typeof VirtualizationType)[keyof typeof VirtualizationType];

/**
 * @public
 * <p>Describes an instance.</p>
 */
export interface Instance {
  /**
   * @public
   * <p>The agent version. This parameter is set to <code>INHERIT</code> if
   *       the instance inherits the default stack setting or to a
   *       a version number for a fixed agent version.</p>
   */
  AgentVersion?: string;

  /**
   * @public
   * <p>A custom AMI ID to be used to create the instance. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Instances</a>
   *          </p>
   */
  AmiId?: string;

  /**
   * @public
   * <p>The instance architecture: "i386" or "x86_64".</p>
   */
  Architecture?: Architecture;

  /**
   * @public
   * <p>The instance's Amazon Resource Number (ARN).</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>For load-based or time-based instances, the type.</p>
   */
  AutoScalingType?: AutoScalingType;

  /**
   * @public
   * <p>The instance Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>An array of <code>BlockDeviceMapping</code> objects that specify the instance's block device
   *       mappings.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>The time that the instance was created.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>Whether this is an Amazon EBS-optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The ID of the associated Amazon EC2 instance.</p>
   */
  Ec2InstanceId?: string;

  /**
   * @public
   * <p>For container instances, the Amazon ECS cluster's ARN.</p>
   */
  EcsClusterArn?: string;

  /**
   * @public
   * <p>For container instances, the instance's ARN.</p>
   */
  EcsContainerInstanceArn?: string;

  /**
   * @public
   * <p>The instance <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP address </a>.</p>
   */
  ElasticIp?: string;

  /**
   * @public
   * <p>The instance host name.</p>
   */
  Hostname?: string;

  /**
   * @public
   * <p>For registered instances, the infrastructure class: <code>ec2</code> or
   *         <code>on-premises</code>.</p>
   */
  InfrastructureClass?: string;

  /**
   * @public
   * <p>Whether to install operating system and package updates when the instance boots. The default
   *       value is <code>true</code>. If this value is set to <code>false</code>, you must then update
   *       your instances manually by using <a>CreateDeployment</a> to run the
   *         <code>update_dependencies</code> stack command or
   *       by manually running <code>yum</code> (Amazon
   *       Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p>
   *          <note>
   *             <p>We strongly recommend using the default value of <code>true</code>, to ensure that your
   *         instances have the latest security updates.</p>
   *          </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The ARN of the instance's IAM profile. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  InstanceProfileArn?: string;

  /**
   * @public
   * <p>The instance type, such as <code>t2.micro</code>.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The ID of the last service error. For more information, call
   *       <a>DescribeServiceErrors</a>.</p>
   */
  LastServiceErrorId?: string;

  /**
   * @public
   * <p>An array containing the instance layer IDs.</p>
   */
  LayerIds?: string[];

  /**
   * @public
   * <p>The instance's operating system.</p>
   */
  Os?: string;

  /**
   * @public
   * <p>The instance's platform.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The instance's private DNS name.</p>
   */
  PrivateDns?: string;

  /**
   * @public
   * <p>The instance's private IP address.</p>
   */
  PrivateIp?: string;

  /**
   * @public
   * <p>The instance public DNS name.</p>
   */
  PublicDns?: string;

  /**
   * @public
   * <p>The instance public IP address.</p>
   */
  PublicIp?: string;

  /**
   * @public
   * <p>For registered instances, who performed the registration.</p>
   */
  RegisteredBy?: string;

  /**
   * @public
   * <p>The instance's reported AWS OpsWorks Stacks agent version.</p>
   */
  ReportedAgentVersion?: string;

  /**
   * @public
   * <p>For registered instances, the reported operating system.</p>
   */
  ReportedOs?: ReportedOs;

  /**
   * @public
   * <p>The instance's root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  RootDeviceType?: RootDeviceType;

  /**
   * @public
   * <p>The root device volume ID.</p>
   */
  RootDeviceVolumeId?: string;

  /**
   * @public
   * <p>An array containing the instance security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The SSH key's Deep Security Agent (DSA) fingerprint.</p>
   */
  SshHostDsaKeyFingerprint?: string;

  /**
   * @public
   * <p>The SSH key's RSA fingerprint.</p>
   */
  SshHostRsaKeyFingerprint?: string;

  /**
   * @public
   * <p>The instance's Amazon EC2 key-pair name.</p>
   */
  SshKeyName?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The instance status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>booting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>connection_lost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>online</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rebooting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>running_setup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>setup_failed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shutting_down</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start_failed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stop_failed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopped</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopping</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>terminated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>terminating</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * @public
   * <p>The instance's subnet ID; applicable only if the stack is running in a VPC.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The instance's tenancy option, such as <code>dedicated</code> or <code>host</code>.</p>
   */
  Tenancy?: string;

  /**
   * @public
   * <p>The instance's virtualization type: <code>paravirtual</code> or <code>hvm</code>.</p>
   */
  VirtualizationType?: VirtualizationType;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeInstances</code> request.</p>
 */
export interface DescribeInstancesResult {
  /**
   * @public
   * <p>An array of <code>Instance</code> objects that describe the instances.</p>
   */
  Instances?: Instance[];
}

/**
 * @public
 */
export interface DescribeLayersRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>An array of layer IDs that specify the layers to be described. If you omit this parameter,
   *         <code>DescribeLayers</code> returns a description of every layer in the specified stack.</p>
   */
  LayerIds?: string[];
}

/**
 * @public
 * <p>Describes a layer.</p>
 */
export interface Layer {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of a layer.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The layer stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * @public
   * <p>The layer type.</p>
   */
  Type?: LayerType;

  /**
   * @public
   * <p>The layer name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The layer short name.</p>
   */
  Shortname?: string;

  /**
   * @public
   * <p>The layer attributes.</p>
   *          <p>For the <code>HaproxyStatsPassword</code>, <code>MysqlRootPassword</code>, and
   *         <code>GangliaPassword</code> attributes, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code>
   *       instead of the actual value</p>
   *          <p>For an ECS Cluster layer, AWS OpsWorks Stacks the <code>EcsClusterArn</code> attribute is set to the cluster's ARN.</p>
   */
  Attributes?: Record<LayerAttributesKeys, string>;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs configuration settings for the layer.</p>
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * @public
   * <p>The ARN of the default IAM profile to be used for the layer's EC2 instances. For more
   *       information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * @public
   * <p>A JSON formatted string containing the layer's custom stack configuration and deployment attributes.</p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>An array containing the layer's custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: string[];

  /**
   * @public
   * <p>An array containing the layer's security group names.</p>
   */
  DefaultSecurityGroupNames?: string[];

  /**
   * @public
   * <p>An array of <code>Package</code> objects that describe the layer's packages.</p>
   */
  Packages?: string[];

  /**
   * @public
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?: VolumeConfiguration[];

  /**
   * @public
   * <p>Whether auto healing is disabled for the layer.</p>
   */
  EnableAutoHealing?: boolean;

  /**
   * @public
   * <p>Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
   *         address</a> to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignElasticIps?: boolean;

  /**
   * @public
   * <p>For stacks that are running in a VPC, whether to automatically assign a public IP address to
   *       the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignPublicIps?: boolean;

  /**
   * @public
   * <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>,
   *             <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>.
   *             For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. You can also provide
   *             custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard
   *             recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of
   *             the five events.</p>
   *         <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe
   *             name, which is the recipe's file name without the <code>.rb</code> extension. For example: <code>phpapp2::dbsetup</code> specifies the
   *             <code>dbsetup.rb</code> recipe in the repository's <code>phpapp2</code> folder.</p>
   */
  DefaultRecipes?: Recipes;

  /**
   * @public
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.</p>
   */
  CustomRecipes?: Recipes;

  /**
   * @public
   * <p>Date when the layer was created.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>Whether to install operating system and package updates when the instance boots. The default
   *       value is <code>true</code>. If this value is set to <code>false</code>, you must then update
   *       your instances manually by using <a>CreateDeployment</a> to run the
   *         <code>update_dependencies</code> stack command or manually running <code>yum</code> (Amazon
   *       Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p>
   *          <note>
   *             <p>We strongly recommend using the default value of <code>true</code>, to ensure that your
   *         instances have the latest security updates.</p>
   *          </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * @public
   * <p>Whether the layer uses Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * @public
   * <p>A <code>LifeCycleEventConfiguration</code> object that specifies the Shutdown event
   *       configuration.</p>
   */
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeLayers</code> request.</p>
 */
export interface DescribeLayersResult {
  /**
   * @public
   * <p>An array of <code>Layer</code> objects that describe the layers.</p>
   */
  Layers?: Layer[];
}

/**
 * @public
 */
export interface DescribeLoadBasedAutoScalingRequest {
  /**
   * @public
   * <p>An array of layer IDs.</p>
   */
  LayerIds: string[] | undefined;
}

/**
 * @public
 * <p>Describes a layer's load-based auto scaling configuration.</p>
 */
export interface LoadBasedAutoScalingConfiguration {
  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * @public
   * <p>Whether load-based auto scaling is enabled for the layer.</p>
   */
  Enable?: boolean;

  /**
   * @public
   * <p>An <code>AutoScalingThresholds</code> object that describes the upscaling configuration,
   *       which defines how and when AWS OpsWorks Stacks increases the number of instances.</p>
   */
  UpScaling?: AutoScalingThresholds;

  /**
   * @public
   * <p>An <code>AutoScalingThresholds</code> object that describes the downscaling configuration,
   *       which defines how and when AWS OpsWorks Stacks reduces the number of instances.</p>
   */
  DownScaling?: AutoScalingThresholds;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.</p>
 */
export interface DescribeLoadBasedAutoScalingResult {
  /**
   * @public
   * <p>An array of <code>LoadBasedAutoScalingConfiguration</code> objects that describe each layer's
   *       configuration.</p>
   */
  LoadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfiguration[];
}

/**
 * @public
 * <p>Describes a user's SSH information.</p>
 */
export interface SelfUserProfile {
  /**
   * @public
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * @public
   * <p>The user's name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The user's SSH user name.</p>
   */
  SshUsername?: string;

  /**
   * @public
   * <p>The user's SSH public key.</p>
   */
  SshPublicKey?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeMyUserProfile</code> request.</p>
 */
export interface DescribeMyUserProfileResult {
  /**
   * @public
   * <p>A <code>UserProfile</code> object that describes the user's SSH information.</p>
   */
  UserProfile?: SelfUserProfile;
}

/**
 * @public
 * <p>A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.</p>
 */
export interface OperatingSystemConfigurationManager {
  /**
   * @public
   * <p>The name of the configuration manager, which is Chef.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The versions of the configuration manager that are supported by an operating system.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Describes supported operating systems in AWS OpsWorks Stacks.</p>
 */
export interface OperatingSystem {
  /**
   * @public
   * <p>The name of the operating system, such as <code>Amazon Linux 2018.03</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of a supported operating system, such as <code>Amazon Linux 2018.03</code>.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of a supported operating system, either <code>Linux</code> or <code>Windows</code>.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>Supported configuration manager name and versions for an AWS OpsWorks Stacks operating system.</p>
   */
  ConfigurationManagers?: OperatingSystemConfigurationManager[];

  /**
   * @public
   * <p>A short name for the operating system manufacturer.</p>
   */
  ReportedName?: string;

  /**
   * @public
   * <p>The version of the operating system, including the release and edition, if applicable.</p>
   */
  ReportedVersion?: string;

  /**
   * @public
   * <p>Indicates that an operating system is not supported for new instances.</p>
   */
  Supported?: boolean;
}

/**
 * @public
 * <p>The response to a <code>DescribeOperatingSystems</code> request.</p>
 */
export interface DescribeOperatingSystemsResponse {
  /**
   * @public
   * <p>Contains information in response to a <code>DescribeOperatingSystems</code> request.</p>
   */
  OperatingSystems?: OperatingSystem[];
}

/**
 * @public
 */
export interface DescribePermissionsRequest {
  /**
   * @public
   * <p>The user's IAM ARN. This can also be a federated user's ARN. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  IamUserArn?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;
}

/**
 * @public
 * <p>Describes stack or user permissions.</p>
 */
export interface Permission {
  /**
   * @public
   * <p>A stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for an AWS Identity and Access Management (IAM) role. For more
   *       information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  IamUserArn?: string;

  /**
   * @public
   * <p>Whether the user can use SSH.</p>
   */
  AllowSsh?: boolean;

  /**
   * @public
   * <p>Whether the user can use <b>sudo</b>.</p>
   */
  AllowSudo?: boolean;

  /**
   * @public
   * <p>The user's permission level, which must be the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deny</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>show</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam_only</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information on the permissions associated with these levels, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>
   *          </p>
   */
  Level?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribePermissions</code> request.</p>
 */
export interface DescribePermissionsResult {
  /**
   * @public
   * <p>An array of <code>Permission</code> objects that describe the stack permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If the request object contains only a stack ID, the array contains a
   *           <code>Permission</code> object with permissions for each of the stack IAM ARNs.</p>
   *             </li>
   *             <li>
   *                <p>If the request object contains only an IAM ARN, the array contains a
   *           <code>Permission</code> object with permissions for each of the user's stack IDs.</p>
   *             </li>
   *             <li>
   *                <p>If the request contains a stack ID and an IAM ARN, the array contains a single
   *           <code>Permission</code> object with permissions for the specified stack and IAM ARN.</p>
   *             </li>
   *          </ul>
   */
  Permissions?: Permission[];
}

/**
 * @public
 */
export interface DescribeRaidArraysRequest {
  /**
   * @public
   * <p>The instance ID. If you use this parameter, <code>DescribeRaidArrays</code> returns
   *       descriptions of the RAID arrays associated with the specified instance. </p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>An array of RAID array IDs. If you use this parameter, <code>DescribeRaidArrays</code>
   *       returns descriptions of the specified arrays. Otherwise, it returns a description of every
   *       array.</p>
   */
  RaidArrayIds?: string[];
}

/**
 * @public
 * <p>Describes an instance's RAID array.</p>
 */
export interface RaidArray {
  /**
   * @public
   * <p>The array ID.</p>
   */
  RaidArrayId?: string;

  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The array name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.</p>
   */
  RaidLevel?: number;

  /**
   * @public
   * <p>The number of disks in the array.</p>
   */
  NumberOfDisks?: number;

  /**
   * @public
   * <p>The array's size.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The array's Linux device. For example /dev/mdadm0.</p>
   */
  Device?: string;

  /**
   * @public
   * <p>The array's mount point.</p>
   */
  MountPoint?: string;

  /**
   * @public
   * <p>The array's Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>When the RAID array was created.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The volume type, standard or PIOPS.</p>
   */
  VolumeType?: string;

  /**
   * @public
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeRaidArrays</code> request.</p>
 */
export interface DescribeRaidArraysResult {
  /**
   * @public
   * <p>A <code>RaidArrays</code> object that describes the specified RAID arrays.</p>
   */
  RaidArrays?: RaidArray[];
}

/**
 * @public
 */
export interface DescribeRdsDbInstancesRequest {
  /**
   * @public
   * <p>The ID of the stack with which the instances are registered. The operation returns descriptions of all registered Amazon RDS instances.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>An array containing the ARNs of the instances to be described.</p>
   */
  RdsDbInstanceArns?: string[];
}

/**
 * @public
 * <p>Describes an Amazon RDS instance.</p>
 */
export interface RdsDbInstance {
  /**
   * @public
   * <p>The instance's ARN.</p>
   */
  RdsDbInstanceArn?: string;

  /**
   * @public
   * <p>The DB instance identifier.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * @public
   * <p>The master user name.</p>
   */
  DbUser?: string;

  /**
   * @public
   * <p>AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>
   */
  DbPassword?: string;

  /**
   * @public
   * <p>The instance's AWS region.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The instance's address.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The instance's database engine.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The ID of the stack with which the instance is registered.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>Set to <code>true</code> if AWS OpsWorks Stacks is unable to discover the Amazon RDS instance. AWS OpsWorks Stacks attempts
   *       to discover the instance only once. If this value is set to <code>true</code>, you must
   *       deregister the instance, and then register it again.</p>
   */
  MissingOnRds?: boolean;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeRdsDbInstances</code> request.</p>
 */
export interface DescribeRdsDbInstancesResult {
  /**
   * @public
   * <p>An a array of <code>RdsDbInstance</code> objects that describe the instances.</p>
   */
  RdsDbInstances?: RdsDbInstance[];
}

/**
 * @public
 */
export interface DescribeServiceErrorsRequest {
  /**
   * @public
   * <p>The stack ID. If you use this parameter, <code>DescribeServiceErrors</code> returns
   *       descriptions of the errors associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The instance ID. If you use this parameter, <code>DescribeServiceErrors</code> returns
   *       descriptions of the errors associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>An array of service error IDs. If you use this parameter, <code>DescribeServiceErrors</code>
   *       returns descriptions of the specified errors. Otherwise, it returns a description of every
   *       error.</p>
   */
  ServiceErrorIds?: string[];
}

/**
 * @public
 * <p>Describes an AWS OpsWorks Stacks service error.</p>
 */
export interface ServiceError {
  /**
   * @public
   * <p>The error ID.</p>
   */
  ServiceErrorId?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The error type.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>A message that describes the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the error occurred.</p>
   */
  CreatedAt?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeServiceErrors</code> request.</p>
 */
export interface DescribeServiceErrorsResult {
  /**
   * @public
   * <p>An array of <code>ServiceError</code> objects that describe the specified service errors.</p>
   */
  ServiceErrors?: ServiceError[];
}

/**
 * @public
 */
export interface DescribeStackProvisioningParametersRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeStackProvisioningParameters</code> request.</p>
 */
export interface DescribeStackProvisioningParametersResult {
  /**
   * @public
   * <p>The AWS OpsWorks Stacks agent installer's URL.</p>
   */
  AgentInstallerUrl?: string;

  /**
   * @public
   * <p>An embedded object that contains the provisioning parameters.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeStacksRequest {
  /**
   * @public
   * <p>An array of stack IDs that specify the stacks to be described. If you omit this parameter,
   *         <code>DescribeStacks</code> returns a description of every stack.</p>
   */
  StackIds?: string[];
}

/**
 * @public
 * <p>Describes a stack.</p>
 */
export interface Stack {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The stack name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The stack's ARN.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The VPC ID; applicable only if the stack is running in a VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The stack's attributes.</p>
   */
  Attributes?: Record<StackAttributesKeys, string>;

  /**
   * @public
   * <p>The stack AWS Identity and Access Management (IAM) role.</p>
   */
  ServiceRoleArn?: string;

  /**
   * @public
   * <p>The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn?: string;

  /**
   * @public
   * <p>The stack's default operating system.</p>
   */
  DefaultOs?: string;

  /**
   * @public
   * <p>The stack host name theme, with spaces replaced by underscores.</p>
   */
  HostnameTheme?: string;

  /**
   * @public
   * <p>The stack's default Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * @public
   * <p>The default subnet ID; applicable only if the stack is running in a VPC.</p>
   */
  DefaultSubnetId?: string;

  /**
   * @public
   * <p>A JSON object that contains user-defined attributes to be added to the stack configuration and deployment attributes. You can use custom JSON to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"\{\"key1\": \"value1\", \"key2\": \"value2\",...\}"</code>
   *          </p>
   *          <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * @public
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * @public
   * <p>Whether the stack uses custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
   * @public
   * <p>Whether the stack automatically associates the AWS OpsWorks Stacks built-in security groups with the stack's layers.</p>
   */
  UseOpsworksSecurityGroups?: boolean;

  /**
   * @public
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or
   *             <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
   * @public
   * <p>A default Amazon EC2 key pair for the stack's instances. You can override this value when you create or update an instance.</p>
   */
  DefaultSshKeyName?: string;

  /**
   * @public
   * <p>The date when the stack was created.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>The default root device type. This value is used by default for all instances in the stack,
   *       but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType;

  /**
   * @public
   * <p>The agent version. This parameter is set to <code>LATEST</code> for auto-update.
   *       or a version number for a fixed agent version.</p>
   */
  AgentVersion?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeStacks</code> request.</p>
 */
export interface DescribeStacksResult {
  /**
   * @public
   * <p>An array of <code>Stack</code> objects that describe the stacks.</p>
   */
  Stacks?: Stack[];
}

/**
 * @public
 */
export interface DescribeStackSummaryRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 * <p>Describes how many instances a stack has for each status.</p>
 */
export interface InstancesCount {
  /**
   * @public
   * <p>The number of instances in the Assigning state.</p>
   */
  Assigning?: number;

  /**
   * @public
   * <p>The number of instances with <code>booting</code> status.</p>
   */
  Booting?: number;

  /**
   * @public
   * <p>The number of instances with <code>connection_lost</code> status.</p>
   */
  ConnectionLost?: number;

  /**
   * @public
   * <p>The number of instances in the Deregistering state.</p>
   */
  Deregistering?: number;

  /**
   * @public
   * <p>The number of instances with <code>online</code> status.</p>
   */
  Online?: number;

  /**
   * @public
   * <p>The number of instances with <code>pending</code> status.</p>
   */
  Pending?: number;

  /**
   * @public
   * <p>The number of instances with <code>rebooting</code> status.</p>
   */
  Rebooting?: number;

  /**
   * @public
   * <p>The number of instances in the Registered state.</p>
   */
  Registered?: number;

  /**
   * @public
   * <p>The number of instances in the Registering state.</p>
   */
  Registering?: number;

  /**
   * @public
   * <p>The number of instances with <code>requested</code> status.</p>
   */
  Requested?: number;

  /**
   * @public
   * <p>The number of instances with <code>running_setup</code> status.</p>
   */
  RunningSetup?: number;

  /**
   * @public
   * <p>The number of instances with <code>setup_failed</code> status.</p>
   */
  SetupFailed?: number;

  /**
   * @public
   * <p>The number of instances with <code>shutting_down</code> status.</p>
   */
  ShuttingDown?: number;

  /**
   * @public
   * <p>The number of instances with <code>start_failed</code> status.</p>
   */
  StartFailed?: number;

  /**
   * @public
   * <p>The number of instances with <code>stop_failed</code> status.</p>
   */
  StopFailed?: number;

  /**
   * @public
   * <p>The number of instances with <code>stopped</code> status.</p>
   */
  Stopped?: number;

  /**
   * @public
   * <p>The number of instances with <code>stopping</code> status.</p>
   */
  Stopping?: number;

  /**
   * @public
   * <p>The number of instances with <code>terminated</code> status.</p>
   */
  Terminated?: number;

  /**
   * @public
   * <p>The number of instances with <code>terminating</code> status.</p>
   */
  Terminating?: number;

  /**
   * @public
   * <p>The number of instances in the Unassigning state.</p>
   */
  Unassigning?: number;
}

/**
 * @public
 * <p>Summarizes the number of layers, instances, and apps in a stack.</p>
 */
export interface StackSummary {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The stack name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The stack's ARN.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The number of layers.</p>
   */
  LayersCount?: number;

  /**
   * @public
   * <p>The number of apps.</p>
   */
  AppsCount?: number;

  /**
   * @public
   * <p>An <code>InstancesCount</code> object with the number of instances in each status.</p>
   */
  InstancesCount?: InstancesCount;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeStackSummary</code> request.</p>
 */
export interface DescribeStackSummaryResult {
  /**
   * @public
   * <p>A <code>StackSummary</code> object that contains the results.</p>
   */
  StackSummary?: StackSummary;
}

/**
 * @public
 */
export interface DescribeTimeBasedAutoScalingRequest {
  /**
   * @public
   * <p>An array of instance IDs.</p>
   */
  InstanceIds: string[] | undefined;
}

/**
 * @public
 * <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p>
 *          <ul>
 *             <li>
 *                <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p>
 *             </li>
 *             <li>
 *                <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p>
 *             </li>
 *          </ul>
 *          <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p>
 *          <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p>
 *          <p>
 *             <code> \{ "12":"on", "13":"on", "14":"on", "15":"on" \} </code>
 *          </p>
 */
export interface WeeklyAutoScalingSchedule {
  /**
   * @public
   * <p>The schedule for Monday.</p>
   */
  Monday?: Record<string, string>;

  /**
   * @public
   * <p>The schedule for Tuesday.</p>
   */
  Tuesday?: Record<string, string>;

  /**
   * @public
   * <p>The schedule for Wednesday.</p>
   */
  Wednesday?: Record<string, string>;

  /**
   * @public
   * <p>The schedule for Thursday.</p>
   */
  Thursday?: Record<string, string>;

  /**
   * @public
   * <p>The schedule for Friday.</p>
   */
  Friday?: Record<string, string>;

  /**
   * @public
   * <p>The schedule for Saturday.</p>
   */
  Saturday?: Record<string, string>;

  /**
   * @public
   * <p>The schedule for Sunday.</p>
   */
  Sunday?: Record<string, string>;
}

/**
 * @public
 * <p>Describes an instance's time-based auto scaling configuration.</p>
 */
export interface TimeBasedAutoScalingConfiguration {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>A <code>WeeklyAutoScalingSchedule</code> object with the instance schedule.</p>
   */
  AutoScalingSchedule?: WeeklyAutoScalingSchedule;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.</p>
 */
export interface DescribeTimeBasedAutoScalingResult {
  /**
   * @public
   * <p>An array of <code>TimeBasedAutoScalingConfiguration</code> objects that describe the
   *       configuration for the specified instances.</p>
   */
  TimeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfiguration[];
}

/**
 * @public
 */
export interface DescribeUserProfilesRequest {
  /**
   * @public
   * <p>An array of IAM or federated user ARNs that identify the users to be described.</p>
   */
  IamUserArns?: string[];
}

/**
 * @public
 * <p>Describes a user's SSH information.</p>
 */
export interface UserProfile {
  /**
   * @public
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * @public
   * <p>The user's name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The user's SSH user name.</p>
   */
  SshUsername?: string;

  /**
   * @public
   * <p>The user's SSH public key.</p>
   */
  SshPublicKey?: string;

  /**
   * @public
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Managing User
   *         Permissions</a>.</p>
   */
  AllowSelfManagement?: boolean;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeUserProfiles</code> request.</p>
 */
export interface DescribeUserProfilesResult {
  /**
   * @public
   * <p>A <code>Users</code> object that describes the specified users.</p>
   */
  UserProfiles?: UserProfile[];
}

/**
 * @public
 */
export interface DescribeVolumesRequest {
  /**
   * @public
   * <p>The instance ID. If you use this parameter, <code>DescribeVolumes</code> returns descriptions
   *       of the volumes associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>A stack ID. The action describes the stack's registered Amazon EBS volumes.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The RAID array ID. If you use this parameter, <code>DescribeVolumes</code> returns
   *       descriptions of the volumes associated with the specified RAID array.</p>
   */
  RaidArrayId?: string;

  /**
   * @public
   * <p>Am array of volume IDs. If you use this parameter, <code>DescribeVolumes</code> returns
   *       descriptions of the specified volumes. Otherwise, it returns a description of every
   *       volume.</p>
   */
  VolumeIds?: string[];
}

/**
 * @public
 * <p>Describes an instance's Amazon EBS volume.</p>
 */
export interface Volume {
  /**
   * @public
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The Amazon EC2 volume ID.</p>
   */
  Ec2VolumeId?: string;

  /**
   * @public
   * <p>The volume name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The RAID array ID.</p>
   */
  RaidArrayId?: string;

  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The value returned by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumes.html">DescribeVolumes</a>.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The volume size.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * @public
   * <p>The volume mount point. For example, "/mnt/disk1".</p>
   */
  MountPoint?: string;

  /**
   * @public
   * <p>The AWS region. For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The volume Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">
   *           Amazon EBS Volume Types</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard</code> - Magnetic. Magnetic volumes must have a minimum size of 1 GiB and a maximum size of 1024 GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> - Provisioned IOPS (SSD). PIOPS volumes must have a minimum size of 4 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gp2</code> - General Purpose (SSD). General purpose volumes must have a minimum size of 1 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>st1</code> - Throughput Optimized hard disk drive (HDD). Throughput optimized HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>sc1</code> - Cold HDD. Cold HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p>
   *             </li>
   *          </ul>
   */
  VolumeType?: string;

  /**
   * @public
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>Specifies whether an Amazon EBS volume is encrypted. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a>.</p>
   */
  Encrypted?: boolean;
}

/**
 * @public
 * <p>Contains the response to a <code>DescribeVolumes</code> request.</p>
 */
export interface DescribeVolumesResult {
  /**
   * @public
   * <p>An array of volume IDs.</p>
   */
  Volumes?: Volume[];
}

/**
 * @public
 */
export interface DetachElasticLoadBalancerRequest {
  /**
   * @public
   * <p>The Elastic Load Balancing instance's name.</p>
   */
  ElasticLoadBalancerName: string | undefined;

  /**
   * @public
   * <p>The ID of the layer that the Elastic Load Balancing instance is attached to.</p>
   */
  LayerId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateElasticIpRequest {
  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;
}

/**
 * @public
 */
export interface GetHostnameSuggestionRequest {
  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;
}

/**
 * @public
 * <p>Contains the response to a <code>GetHostnameSuggestion</code> request.</p>
 */
export interface GetHostnameSuggestionResult {
  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * @public
   * <p>The generated host name.</p>
   */
  Hostname?: string;
}

/**
 * @public
 */
export interface GrantAccessRequest {
  /**
   * @public
   * <p>The instance's AWS OpsWorks Stacks ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The length of time (in minutes) that the grant is valid. When the grant expires at the end of this period, the user will no longer be able to use the credentials to log in. If the user is logged in at the time, he or she automatically will be logged out.</p>
   */
  ValidForInMinutes?: number;
}

/**
 * @public
 * <p>Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.</p>
 */
export interface TemporaryCredential {
  /**
   * @public
   * <p>The user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The length of time (in minutes) that the grant is valid. When the grant expires, at the end of this period, the user will no longer be able to use the credentials to log in. If they are logged in at the time, they will be automatically logged out.</p>
   */
  ValidForInMinutes?: number;

  /**
   * @public
   * <p>The instance's AWS OpsWorks Stacks ID.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>GrantAccess</code> request.</p>
 */
export interface GrantAccessResult {
  /**
   * @public
   * <p>A <code>TemporaryCredential</code> object that contains the data needed to log in to the
   *       instance by RDP clients, such as the Microsoft Remote Desktop Connection.</p>
   */
  TemporaryCredential?: TemporaryCredential;
}

/**
 * @public
 * <p>Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more
 *       information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.</p>
 */
export interface InstanceIdentity {
  /**
   * @public
   * <p>A JSON document that contains the metadata.</p>
   */
  Document?: string;

  /**
   * @public
   * <p>A signature that can be used to verify the document's accuracy and authenticity.</p>
   */
  Signature?: string;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>The stack or layer's Amazon Resource Number (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Do not use. A validation exception occurs if you add a <code>MaxResults</code> parameter to a <code>ListTagsRequest</code> call.
   *       </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Do not use. A validation exception occurs if you add a <code>NextToken</code> parameter to a <code>ListTagsRequest</code> call.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the response to a <code>ListTags</code> request.</p>
 */
export interface ListTagsResult {
  /**
   * @public
   * <p>A set of key-value pairs that contain tag keys and tag values that are attached to a stack or layer.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>If a paginated request does not return all of the remaining results, this parameter is set to a token that
   *             you can assign to the request object's <code>NextToken</code> parameter to get the next set of results.
   *             If the previous paginated request returned all of the remaining results,
   *             this parameter is set to <code>null</code>.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RebootInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface RegisterEcsClusterRequest {
  /**
   * @public
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn: string | undefined;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 * <p>Contains the response to a <code>RegisterEcsCluster</code> request.</p>
 */
export interface RegisterEcsClusterResult {
  /**
   * @public
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn?: string;
}

/**
 * @public
 */
export interface RegisterElasticIpRequest {
  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 * <p>Contains the response to a <code>RegisterElasticIp</code> request.</p>
 */
export interface RegisterElasticIpResult {
  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  ElasticIp?: string;
}

/**
 * @public
 */
export interface RegisterInstanceRequest {
  /**
   * @public
   * <p>The ID of the stack that the instance is to be registered with.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The instance's hostname.</p>
   */
  Hostname?: string;

  /**
   * @public
   * <p>The instance's public IP address.</p>
   */
  PublicIp?: string;

  /**
   * @public
   * <p>The instance's private IP address.</p>
   */
  PrivateIp?: string;

  /**
   * @public
   * <p>The instances public RSA key. This key is used to encrypt communication between the instance and the service.</p>
   */
  RsaPublicKey?: string;

  /**
   * @public
   * <p>The instances public RSA key fingerprint.</p>
   */
  RsaPublicKeyFingerprint?: string;

  /**
   * @public
   * <p>An InstanceIdentity object that contains the instance's identity.</p>
   */
  InstanceIdentity?: InstanceIdentity;
}

/**
 * @public
 * <p>Contains the response to a <code>RegisterInstanceResult</code> request.</p>
 */
export interface RegisterInstanceResult {
  /**
   * @public
   * <p>The registered instance's AWS OpsWorks Stacks ID.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 */
export interface RegisterRdsDbInstanceRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The Amazon RDS instance's ARN.</p>
   */
  RdsDbInstanceArn: string | undefined;

  /**
   * @public
   * <p>The database's master user name.</p>
   */
  DbUser: string | undefined;

  /**
   * @public
   * <p>The database password.</p>
   */
  DbPassword: string | undefined;
}

/**
 * @public
 */
export interface RegisterVolumeRequest {
  /**
   * @public
   * <p>The Amazon EBS volume ID.</p>
   */
  Ec2VolumeId?: string;

  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 * <p>Contains the response to a <code>RegisterVolume</code> request.</p>
 */
export interface RegisterVolumeResult {
  /**
   * @public
   * <p>The volume ID.</p>
   */
  VolumeId?: string;
}

/**
 * @public
 */
export interface SetLoadBasedAutoScalingRequest {
  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;

  /**
   * @public
   * <p>Enables load-based auto scaling for the layer.</p>
   */
  Enable?: boolean;

  /**
   * @public
   * <p>An <code>AutoScalingThresholds</code> object with the upscaling threshold configuration. If
   *       the load exceeds these thresholds for a specified amount of time, AWS OpsWorks Stacks starts a specified
   *       number of instances.</p>
   */
  UpScaling?: AutoScalingThresholds;

  /**
   * @public
   * <p>An <code>AutoScalingThresholds</code> object with the downscaling threshold configuration. If
   *       the load falls below these thresholds for a specified amount of time, AWS OpsWorks Stacks stops a specified
   *       number of instances.</p>
   */
  DownScaling?: AutoScalingThresholds;
}

/**
 * @public
 */
export interface SetPermissionRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The user's IAM ARN. This can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;

  /**
   * @public
   * <p>The user is allowed to use SSH to communicate with the instance.</p>
   */
  AllowSsh?: boolean;

  /**
   * @public
   * <p>The user is allowed to use <b>sudo</b> to elevate privileges.</p>
   */
  AllowSudo?: boolean;

  /**
   * @public
   * <p>The user's permission level, which must be set to one of the following strings. You cannot set your own permissions level.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deny</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>show</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam_only</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the permissions associated with these levels, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   */
  Level?: string;
}

/**
 * @public
 */
export interface SetTimeBasedAutoScalingRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>An <code>AutoScalingSchedule</code> with the instance schedule.</p>
   */
  AutoScalingSchedule?: WeeklyAutoScalingSchedule;
}

/**
 * @public
 */
export interface StartInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface StartStackRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 */
export interface StopInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Specifies whether to force an instance to stop. If the instance's root device type is <code>ebs</code>, or EBS-backed,
   *             adding the <code>Force</code> parameter to the <code>StopInstances</code> API call disassociates the AWS OpsWorks Stacks instance from EC2, and forces deletion of <i>only</i> the OpsWorks Stacks instance.
   *             You must also delete the formerly-associated instance in EC2 after troubleshooting and replacing the AWS OpsWorks Stacks instance with a new one.</p>
   */
  Force?: boolean;
}

/**
 * @public
 */
export interface StopStackRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The stack or layer's Amazon Resource Number (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to a stack or layer.</p>
   *          <ul>
   *             <li>
   *                <p>The key cannot be empty.</p>
   *             </li>
   *             <li>
   *                <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Leading and trailing white spaces are trimmed from both the key and value.</p>
   *             </li>
   *             <li>
   *                <p>A maximum of 40 tags is allowed for any resource.</p>
   *             </li>
   *          </ul>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UnassignInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UnassignVolumeRequest {
  /**
   * @public
   * <p>The volume ID.</p>
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The stack or layer's Amazon Resource Number (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the keys of tags to be removed from a stack or layer.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAppRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The app name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The app's data sources.</p>
   */
  DataSources?: DataSource[];

  /**
   * @public
   * <p>The app type.</p>
   */
  Type?: AppType;

  /**
   * @public
   * <p>A <code>Source</code> object that specifies the app repository.</p>
   */
  AppSource?: Source;

  /**
   * @public
   * <p>The app's virtual host settings, with multiple domains separated by commas. For example:
   *         <code>'www.example.com, example.com'</code>
   *          </p>
   */
  Domains?: string[];

  /**
   * @public
   * <p>Whether SSL is enabled for the app.</p>
   */
  EnableSsl?: boolean;

  /**
   * @public
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: SslConfiguration;

  /**
   * @public
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<AppAttributesKeys, string>;

  /**
   * @public
   * <p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be
   *       associated with the app. After you deploy the app, these variables are defined on the
   *       associated app server instances.For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>.</p>
   *          <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 20 KB)."</p>
   *          <note>
   *             <p>If you have specified one or more environment variables, you cannot modify the stack's Chef version.</p>
   *          </note>
   */
  Environment?: EnvironmentVariable[];
}

/**
 * @public
 */
export interface UpdateElasticIpRequest {
  /**
   * @public
   * <p>The IP address for which you want to update the name.</p>
   */
  ElasticIp: string | undefined;

  /**
   * @public
   * <p>The new name.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateInstanceRequest {
  /**
   * @public
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The instance's layer IDs.</p>
   */
  LayerIds?: string[];

  /**
   * @public
   * <p>The instance type, such as <code>t2.micro</code>. For a list of supported instance types,
   *       open the stack in the console, choose <b>Instances</b>, and choose <b>+ Instance</b>.
   *       The <b>Size</b> list contains the currently supported types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *         Families and Types</a>. The parameter values that you use to specify the various types are
   *       in the <b>API Name</b> column of the <b>Available Instance Types</b> table.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>For load-based or time-based instances, the type. Windows stacks can use only time-based instances.</p>
   */
  AutoScalingType?: AutoScalingType;

  /**
   * @public
   * <p>The instance host name.</p>
   */
  Hostname?: string;

  /**
   * @public
   * <p>The instance's operating system, which must be set to one of the following. You cannot update an instance that is using a custom AMI.</p>
   *          <ul>
   *             <li>
   *                <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>, <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux
   *         2015.03</code>.</p>
   *             </li>
   *             <li>
   *                <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CentOS Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Red Hat Enterprise Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>,
   *               <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about supported operating systems,
   *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p>
   *          <p>The default option is the current Amazon Linux version. If you set this parameter to
   *         <code>Custom</code>, you must use the AmiId parameter to
   *       specify the custom AMI that you want to use. For more information about supported operating
   *       systems, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">Operating Systems</a>. For more information about how to use custom AMIs with OpsWorks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using
   *         Custom AMIs</a>.</p>
   *          <note>
   *             <p>You can specify a different Linux operating system for the updated stack, but you cannot change from Linux to Windows or Windows to Linux.</p>
   *          </note>
   */
  Os?: string;

  /**
   * @public
   * <p>The ID of the AMI that was used to create the instance. The value of this parameter must be the same AMI ID that the instance is already using.
   *           You cannot apply a new AMI to an instance by running UpdateInstance. UpdateInstance does not work on instances that are using custom AMIs.
   *       </p>
   */
  AmiId?: string;

  /**
   * @public
   * <p>The instance's Amazon EC2 key name.</p>
   */
  SshKeyName?: string;

  /**
   * @public
   * <p>The instance architecture. Instance types do not necessarily support both architectures. For
   *       a list of the architectures that are supported by the different instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *         Families and Types</a>.</p>
   */
  Architecture?: Architecture;

  /**
   * @public
   * <p>Whether to install operating system and package updates when the instance boots. The default
   *       value is <code>true</code>. To control when updates are installed, set this value to
   *         <code>false</code>. You must then update your instances manually by using
   *         <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or
   *       by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the
   *       instances. </p>
   *          <note>
   *             <p>We strongly recommend using the default value of <code>true</code>, to ensure that your
   *         instances have the latest security updates.</p>
   *          </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * @public
   * <p>This property cannot be updated.</p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The default AWS OpsWorks Stacks agent version. You have the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INHERIT</code> - Use the stack's default agent version setting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>version_number</i> - Use the specified agent version.
   *         This value overrides the stack's default setting.
   *         To update the agent version, you must edit the instance configuration and specify a
   *         new version.
   *         AWS OpsWorks Stacks then automatically installs that version on the instance.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting is <code>INHERIT</code>. To specify an agent version,
   *       you must use the complete version number, not the abbreviated number shown on the console.
   *       For a list of available agent version numbers, call <a>DescribeAgentVersions</a>.</p>
   *          <p>AgentVersion cannot be set to Chef 12.2.</p>
   */
  AgentVersion?: string;
}

/**
 * @public
 */
export interface UpdateLayerRequest {
  /**
   * @public
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;

  /**
   * @public
   * <p>The layer name, which is used by the console.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters and must be in the following format: /\A[a-z0-9\-\_\.]+\Z/.</p>
   *          <p>The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html">Layer Reference</a>
   *          </p>
   */
  Shortname?: string;

  /**
   * @public
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<LayerAttributesKeys, string>;

  /**
   * @public
   * <p>Specifies CloudWatch Logs configuration options for the layer. For more information, see <a>CloudWatchLogsLogStream</a>.</p>
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * @public
   * <p>The ARN of an IAM profile to be used for all of the layer's EC2 instances. For more
   *       information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * @public
   * <p>A JSON-formatted string containing custom stack configuration and deployment attributes
   *       to be installed on the layer's instances. For more information, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">
   *         Using Custom JSON</a>.
   *     </p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>An array containing the layer's custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: string[];

  /**
   * @public
   * <p>An array of <code>Package</code> objects that describe the layer's packages.</p>
   */
  Packages?: string[];

  /**
   * @public
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?: VolumeConfiguration[];

  /**
   * @public
   * <p>Whether to disable auto healing for the layer.</p>
   */
  EnableAutoHealing?: boolean;

  /**
   * @public
   * <p>Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
   *         address</a> to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignElasticIps?: boolean;

  /**
   * @public
   * <p>For stacks that are running in a VPC, whether to automatically assign a public IP address to
   *       the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignPublicIps?: boolean;

  /**
   * @public
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.</p>
   */
  CustomRecipes?: Recipes;

  /**
   * @public
   * <p>Whether to install operating system and package updates when the instance boots. The default
   *       value is <code>true</code>. To control when updates are installed, set this value to
   *         <code>false</code>. You must then update your instances manually by using
   *         <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or
   *       manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the
   *       instances. </p>
   *          <note>
   *             <p>We strongly recommend using the default value of <code>true</code>, to ensure that your
   *         instances have the latest security updates.</p>
   *          </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * @public
   * <p>Whether to use Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * @public
   * <p></p>
   */
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}

/**
 * @public
 */
export interface UpdateMyUserProfileRequest {
  /**
   * @public
   * <p>The user's SSH public key.</p>
   */
  SshPublicKey?: string;
}

/**
 * @public
 */
export interface UpdateRdsDbInstanceRequest {
  /**
   * @public
   * <p>The Amazon RDS instance's ARN.</p>
   */
  RdsDbInstanceArn: string | undefined;

  /**
   * @public
   * <p>The master user name.</p>
   */
  DbUser?: string;

  /**
   * @public
   * <p>The database password.</p>
   */
  DbPassword?: string;
}

/**
 * @public
 */
export interface UpdateStackRequest {
  /**
   * @public
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The stack's new name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>One or more user-defined key-value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<StackAttributesKeys, string>;

  /**
   * @public
   * <p>Do not use this parameter. You cannot update a stack's service role.</p>
   */
  ServiceRoleArn?: string;

  /**
   * @public
   * <p>The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn?: string;

  /**
   * @public
   * <p>The stack's operating system, which must be set to one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>A supported Linux operating system: An Amazon Linux version, such as <code>Amazon Linux 2018.03</code>, <code>Amazon Linux 2017.09</code>, <code>Amazon Linux 2017.03</code>, <code>Amazon Linux 2016.09</code>,
   *               <code>Amazon Linux 2016.03</code>, <code>Amazon Linux 2015.09</code>, or <code>Amazon Linux 2015.03</code>.</p>
   *             </li>
   *             <li>
   *                <p>A supported Ubuntu operating system, such as <code>Ubuntu 16.04 LTS</code>, <code>Ubuntu 14.04 LTS</code>, or <code>Ubuntu 12.04 LTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CentOS Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Red Hat Enterprise Linux 7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A supported Windows operating system, such as <code>Microsoft Windows Server 2012 R2 Base</code>, <code>Microsoft Windows Server 2012 R2 with SQL Server Express</code>,
   *               <code>Microsoft Windows Server 2012 R2 with SQL Server Standard</code>, or <code>Microsoft Windows Server 2012 R2 with SQL Server Web</code>.</p>
   *             </li>
   *             <li>
   *                <p>A custom AMI: <code>Custom</code>. You specify the custom AMI you want to use when
   *         you create instances. For more information about how to use custom AMIs with OpsWorks, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Using
   *           Custom AMIs</a>.</p>
   *             </li>
   *          </ul>
   *          <p>The default option is the stack's current operating system.
   *       For more information about supported operating systems,
   *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html">AWS OpsWorks Stacks Operating Systems</a>.</p>
   */
  DefaultOs?: string;

  /**
   * @public
   * <p>The stack's new host name theme, with spaces replaced by underscores.
   *       The theme is used to generate host names for the stack's instances.
   *       By default, <code>HostnameTheme</code> is set to <code>Layer_Dependent</code>, which creates host names by appending integers to the
   *       layer's short name. The other themes are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Baked_Goods</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Clouds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Europe_Cities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fruits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Greek_Deities_and_Titans</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Legendary_creatures_from_Japan</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Planets_and_Moons</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Roman_Deities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Scottish_Islands</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>US_Cities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Wild_Cats</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To obtain a generated host name, call <code>GetHostNameSuggestion</code>, which returns a
   *       host name based on the current theme.</p>
   */
  HostnameTheme?: string;

  /**
   * @public
   * <p>The stack's default Availability Zone, which must be in the
   *       stack's region. For more
   *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and
   *         Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must
   *       be in the same zone. For more information, see <a>CreateStack</a>. </p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * @public
   * <p>The stack's default VPC subnet ID. This parameter is required if you specify a value for the
   *         <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify
   *       otherwise when you create the instance. If you also specify a value for
   *         <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on
   *       default values and when this parameter is required, see the <code>VpcId</code> parameter
   *       description. </p>
   */
  DefaultSubnetId?: string;

  /**
   * @public
   * <p>A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration JSON values or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"\{\"key1\": \"value1\", \"key2\": \"value2\",...\}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * @public
   * <p>The configuration manager. When you update a stack, we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * @public
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * @public
   * <p>Whether the stack uses custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
   * @public
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
   * @public
   * <p>A default Amazon EC2 key-pair name. The default value is
   *       <code>none</code>. If you specify a key-pair name,
   *       AWS OpsWorks Stacks installs the public key on the instance and you can use the private key with an SSH
   *       client to log in to the instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html"> Using SSH to
   *         Communicate with an Instance</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html"> Managing SSH
   *         Access</a>. You can override this setting by specifying a different key pair, or no key
   *       pair, when you <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">
   *         create an instance</a>. </p>
   */
  DefaultSshKeyName?: string;

  /**
   * @public
   * <p>The default root device type. This value is used by default for all instances in the stack,
   *       but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType;

  /**
   * @public
   * <p>Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers.</p>
   *          <p>AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are
   *       associated with layers by default. <code>UseOpsworksSecurityGroups</code> allows you to
   *       provide your own custom security groups
   *       instead of using the built-in groups. <code>UseOpsworksSecurityGroups</code> has
   *       the following settings: </p>
   *          <ul>
   *             <li>
   *                <p>True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.</p>
   *             </li>
   *             <li>
   *                <p>False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on. Custom security groups are required only for those layers that need custom settings.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New
   *         Stack</a>.</p>
   */
  UseOpsworksSecurityGroups?: boolean;

  /**
   * @public
   * <p>The default AWS OpsWorks Stacks agent version. You have the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Auto-update - Set this parameter to <code>LATEST</code>. AWS OpsWorks Stacks
   *         automatically installs new agent versions on the stack's instances as soon as
   *         they are available.</p>
   *             </li>
   *             <li>
   *                <p>Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting is <code>LATEST</code>. To specify an agent version,
   *       you must use the complete version number, not the abbreviated number shown on the console.
   *       For a list of available agent version numbers, call <a>DescribeAgentVersions</a>.
   *           AgentVersion cannot be set to Chef 12.2.</p>
   *          <note>
   *             <p>You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.</p>
   *          </note>
   */
  AgentVersion?: string;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * @public
   * <p>The user IAM ARN. This can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;

  /**
   * @public
   * <p>The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If
   *       the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example,
   *         <code>my.name</code> will be changed to <code>myname</code>. If you do not specify an SSH
   *       user name, AWS OpsWorks Stacks generates one from the IAM user name. </p>
   */
  SshUsername?: string;

  /**
   * @public
   * <p>The user's new SSH public key.</p>
   */
  SshPublicKey?: string;

  /**
   * @public
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Managing User
   *         Permissions</a>.</p>
   */
  AllowSelfManagement?: boolean;
}

/**
 * @public
 */
export interface UpdateVolumeRequest {
  /**
   * @public
   * <p>The volume ID.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>The new name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The new mount point.</p>
   */
  MountPoint?: string;
}
