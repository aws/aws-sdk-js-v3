// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { OpsWorksServiceException as __BaseException } from "./OpsWorksServiceException";

/**
 * <p>Describes the configuration manager.</p>
 */
export interface StackConfigurationManager {
  /**
   * <p>The name. This parameter must be set to "Chef".</p>
   */
  Name?: string;

  /**
   * <p>The Chef version. This parameter must be set to 12, 11.10, or 11.4 for Linux stacks, and to 12.2 for Windows stacks. The default value for Linux stacks is 11.4.</p>
   */
  Version?: string;
}

/**
 * <p>Describes an agent version.</p>
 */
export interface AgentVersion {
  /**
   * <p>The agent version.</p>
   */
  Version?: string;

  /**
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: StackConfigurationManager;
}

export type SourceType = "archive" | "git" | "s3" | "svn";

/**
 * <p>Contains the information required to retrieve an app or cookbook from a repository. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and
 *         Cookbooks</a>.</p>
 */
export interface Source {
  /**
   * <p>The repository type.</p>
   */
  Type?: SourceType | string;

  /**
   * <p>The source URL. The following is an example of an Amazon S3 source URL:  <code>https://s3.amazonaws.com/opsworks-demo-bucket/opsworks_cookbook_demo.tar.gz</code>.</p>
   */
  Url?: string;

  /**
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
   * <p>In requests, the repository's SSH key.</p>
   *          <p>In responses, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>
   */
  SshKey?: string;

  /**
   * <p>The application's version. AWS OpsWorks Stacks enables you to easily deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.</p>
   */
  Revision?: string;
}

export type AppAttributesKeys = "AutoBundleOnDeploy" | "AwsFlowRubySettings" | "DocumentRoot" | "RailsEnv";

/**
 * <p>Describes an app's data source.</p>
 */
export interface DataSource {
  /**
   * <p>The data source's type, <code>AutoSelectOpsworksMysqlInstance</code>,
   *         <code>OpsworksMysqlInstance</code>, <code>RdsDbInstance</code>, or <code>None</code>.</p>
   */
  Type?: string;

  /**
   * <p>The data source's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The database name.</p>
   */
  DatabaseName?: string;
}

/**
 * <p>Represents an app's environment variable.</p>
 */
export interface EnvironmentVariable {
  /**
   * <p>(Required) The environment variable's name, which can consist of up to 64 characters and must be specified. The name can contain upper- and lowercase letters, numbers, and underscores (_), but it must start with a letter or underscore.</p>
   */
  Key: string | undefined;

  /**
   * <p>(Optional) The environment variable's value, which can be left empty. If you specify a value, it can contain up to 256 characters, which must all be printable.</p>
   */
  Value: string | undefined;

  /**
   * <p>(Optional) Whether the variable's value will be returned by the <a>DescribeApps</a> action.
   *       To conceal an environment variable's value, set <code>Secure</code> to <code>true</code>.
   *         <code>DescribeApps</code> then returns <code>*****FILTERED*****</code> instead of the actual
   *       value. The default value for <code>Secure</code> is <code>false</code>. </p>
   */
  Secure?: boolean;
}

/**
 * <p>Describes an app's SSL configuration.</p>
 */
export interface SslConfiguration {
  /**
   * <p>The contents of the certificate's domain.crt file.</p>
   */
  Certificate: string | undefined;

  /**
   * <p>The private key; the contents of the certificate's domain.kex file.</p>
   */
  PrivateKey: string | undefined;

  /**
   * <p>Optional. Can be used to specify an intermediate certificate authority key or client authentication.</p>
   */
  Chain?: string;
}

export type AppType = "aws-flow-ruby" | "java" | "nodejs" | "other" | "php" | "rails" | "static";

/**
 * <p>A description of the app.</p>
 */
export interface App {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The app stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The app's short name.</p>
   */
  Shortname?: string;

  /**
   * <p>The app name.</p>
   */
  Name?: string;

  /**
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * <p>The app's data sources.</p>
   */
  DataSources?: DataSource[];

  /**
   * <p>The app type.</p>
   */
  Type?: AppType | string;

  /**
   * <p>A <code>Source</code> object that describes the app repository.</p>
   */
  AppSource?: Source;

  /**
   * <p>The app vhost settings with multiple domains separated by commas. For example:
   *         <code>'www.example.com, example.com'</code>
   *          </p>
   */
  Domains?: string[];

  /**
   * <p>Whether to enable SSL for the app.</p>
   */
  EnableSsl?: boolean;

  /**
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: SslConfiguration;

  /**
   * <p>The stack attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>When the app was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be
   *       associated with the app. After you deploy the app, these variables are defined on the
   *       associated app server instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>. </p>
   *          <note>
   *             <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variable names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases, but if you do exceed it, you will cause an exception (API) with an "Environment: is too large (maximum is 20 KB)" message.</p>
   *          </note>
   */
  Environment?: EnvironmentVariable[];
}

export type Architecture = "i386" | "x86_64";

export interface AssignInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The layer ID, which must correspond to a custom layer. You cannot assign a registered instance to a built-in layer.</p>
   */
  LayerIds: string[] | undefined;
}

/**
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

export interface AssignVolumeRequest {
  /**
   * <p>The volume ID.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

export interface AssociateElasticIpRequest {
  /**
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

export interface AttachElasticLoadBalancerRequest {
  /**
   * <p>The Elastic Load Balancing instance's name.</p>
   */
  ElasticLoadBalancerName: string | undefined;

  /**
   * <p>The ID of the layer to which the Elastic Load Balancing instance is to be attached.</p>
   */
  LayerId: string | undefined;
}

/**
 * <p>Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.</p>
 */
export interface AutoScalingThresholds {
  /**
   * <p>The number of instances to add or remove when the load exceeds a threshold.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.</p>
   */
  ThresholdsWaitTime?: number;

  /**
   * <p>The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics
   *       and suppress additional scaling events. For example, AWS OpsWorks Stacks adds new instances following
   *       an upscaling event but the instances won't start reducing the load until they have been booted
   *       and configured. There is no point in raising additional scaling events during that operation,
   *       which typically takes several minutes. <code>IgnoreMetricsTime</code> allows you to direct
   *       AWS OpsWorks Stacks to suppress scaling events long enough to get the new instances online.</p>
   */
  IgnoreMetricsTime?: number;

  /**
   * <p>The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold.</p>
   */
  CpuThreshold?: number;

  /**
   * <p>The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold.</p>
   */
  MemoryThreshold?: number;

  /**
   * <p>The load threshold. A value of -1 disables the threshold. For more information about how load is computed, see <a href="http://en.wikipedia.org/wiki/Load_%28computing%29">Load (computing)</a>.</p>
   */
  LoadThreshold?: number;

  /**
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

export type AutoScalingType = "load" | "timer";

export type VolumeType = "gp2" | "io1" | "standard";

/**
 * <p>Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>
 *       data type.</p>
 */
export interface EbsBlockDevice {
  /**
   * <p>The snapshot ID.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.</p>
   */
  Iops?: number;

  /**
   * <p>The volume size, in GiB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. <code>gp2</code> for General Purpose (SSD) volumes, <code>io1</code> for
   *           Provisioned IOPS (SSD) volumes, <code>st1</code> for Throughput Optimized hard disk drives (HDD), <code>sc1</code> for Cold HDD,and <code>standard</code> for Magnetic volumes.</p>
   *          <p>If you specify the <code>io1</code> volume type, you must also specify a value for the <code>Iops</code> attribute.
   *           The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. AWS uses the default volume size (in GiB)
   *           specified in the AMI attributes to set IOPS to 50 x (volume size).</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;
}

/**
 * <p>Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type. </p>
 */
export interface BlockDeviceMapping {
  /**
   * <p>The device name that is exposed to the instance, such as <code>/dev/sdh</code>. For the root
   *       device, you can use the explicit device name or you can set this parameter to
   *         <code>ROOT_DEVICE</code> and AWS OpsWorks Stacks will provide the correct device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>Suppresses the specified device included in the AMI's block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a>.</p>
   */
  VirtualName?: string;

  /**
   * <p>An <code>EBSBlockDevice</code> that defines how to configure an Amazon EBS volume when the
   *       instance is launched.</p>
   */
  Ebs?: EbsBlockDevice;
}

/**
 * <p>Describes the Chef configuration.</p>
 */
export interface ChefConfiguration {
  /**
   * <p>Whether to enable Berkshelf.</p>
   */
  ManageBerkshelf?: boolean;

  /**
   * <p>The Berkshelf version.</p>
   */
  BerkshelfVersion?: string;
}

export type StackAttributesKeys = "Color";

export type RootDeviceType = "ebs" | "instance-store";

export interface CloneStackRequest {
  /**
   * <p>The source stack ID.</p>
   */
  SourceStackId: string | undefined;

  /**
   * <p>The cloned stack name.</p>
   */
  Name?: string;

  /**
   * <p>The cloned stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
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
   * <p>A list of stack attributes and values as key/value pairs to be added to the cloned stack.</p>
   */
  Attributes?: Record<string, string>;

  /**
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
   * <p>The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn?: string;

  /**
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
   * <p>The cloned stack's default Availability Zone, which must be in the specified region. For more
   *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and
   *         Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must
   *       be in the same zone. For more information, see the <code>VpcId</code> parameter description.
   *     </p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * <p>The stack's default VPC subnet ID. This parameter is required if you specify a value for the
   *         <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify
   *       otherwise when you create the instance. If you also specify a value for
   *         <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on
   *       default values and when this parameter is required, see the <code>VpcId</code> parameter
   *       description. </p>
   */
  DefaultSubnetId?: string;

  /**
   * <p>A string that contains user-defined, custom JSON. It is used to override the corresponding default stack configuration JSON values. The string should be in the following format:</p>
   *          <p>
   *             <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>
   *          </p>
   */
  CustomJson?: string;

  /**
   * <p>The configuration manager. When you clone a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * <p>Whether to use custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
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
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
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
   * <p>Whether to clone the source stack's permissions.</p>
   */
  ClonePermissions?: boolean;

  /**
   * <p>A list of source stack app IDs to be included in the cloned stack.</p>
   */
  CloneAppIds?: string[];

  /**
   * <p>The default root device type. This value is used by default for all instances in the cloned
   *       stack, but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType | string;

  /**
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
 * <p>Contains the response to a <code>CloneStack</code> request.</p>
 */
export interface CloneStackResult {
  /**
   * <p>The cloned stack ID.</p>
   */
  StackId?: string;
}

export type CloudWatchLogsEncoding =
  | "ascii"
  | "big5"
  | "big5hkscs"
  | "cp037"
  | "cp1006"
  | "cp1026"
  | "cp1140"
  | "cp1250"
  | "cp1251"
  | "cp1252"
  | "cp1253"
  | "cp1254"
  | "cp1255"
  | "cp1256"
  | "cp1257"
  | "cp1258"
  | "cp424"
  | "cp437"
  | "cp500"
  | "cp720"
  | "cp737"
  | "cp775"
  | "cp850"
  | "cp852"
  | "cp855"
  | "cp856"
  | "cp857"
  | "cp858"
  | "cp860"
  | "cp861"
  | "cp862"
  | "cp863"
  | "cp864"
  | "cp865"
  | "cp866"
  | "cp869"
  | "cp874"
  | "cp875"
  | "cp932"
  | "cp949"
  | "cp950"
  | "euc_jis_2004"
  | "euc_jisx0213"
  | "euc_jp"
  | "euc_kr"
  | "gb18030"
  | "gb2312"
  | "gbk"
  | "hz"
  | "iso2022_jp"
  | "iso2022_jp_1"
  | "iso2022_jp_2"
  | "iso2022_jp_2004"
  | "iso2022_jp_3"
  | "iso2022_jp_ext"
  | "iso2022_kr"
  | "iso8859_10"
  | "iso8859_13"
  | "iso8859_14"
  | "iso8859_15"
  | "iso8859_16"
  | "iso8859_2"
  | "iso8859_3"
  | "iso8859_4"
  | "iso8859_5"
  | "iso8859_6"
  | "iso8859_7"
  | "iso8859_8"
  | "iso8859_9"
  | "johab"
  | "koi8_r"
  | "koi8_u"
  | "latin_1"
  | "mac_cyrillic"
  | "mac_greek"
  | "mac_iceland"
  | "mac_latin2"
  | "mac_roman"
  | "mac_turkish"
  | "ptcp154"
  | "shift_jis"
  | "shift_jis_2004"
  | "shift_jisx0213"
  | "utf_16"
  | "utf_16_be"
  | "utf_16_le"
  | "utf_32"
  | "utf_32_be"
  | "utf_32_le"
  | "utf_7"
  | "utf_8"
  | "utf_8_sig";

export type CloudWatchLogsInitialPosition = "end_of_file" | "start_of_file";

export type CloudWatchLogsTimeZone = "LOCAL" | "UTC";

/**
 * <p>Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.</p>
 */
export interface CloudWatchLogsLogStream {
  /**
   * <p>Specifies the destination log group. A log group is created automatically if it doesn't already exist.
   *             Log group names can be between 1 and 512 characters long. Allowed characters include a-z, A-Z, 0-9, '_' (underscore),
   *             '-' (hyphen), '/' (forward slash), and '.' (period).</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies how the time stamp is extracted from logs. For more information, see the
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.</p>
   */
  DatetimeFormat?: string;

  /**
   * <p>Specifies the time zone of log event time stamps.</p>
   */
  TimeZone?: CloudWatchLogsTimeZone | string;

  /**
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
   * <p>Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers,
   *             such as '1', '2-5'. The default value is '1', meaning the first line is used to calculate the fingerprint. Fingerprint lines are
   *             not sent to CloudWatch Logs unless all specified lines are available.</p>
   */
  FileFingerprintLines?: string;

  /**
   * <p>Specifies the pattern for identifying the start of a log message.</p>
   */
  MultiLineStartPattern?: string;

  /**
   * <p>Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file.
   *             This setting is only used if there is no state persisted for that log stream.</p>
   */
  InitialPosition?: CloudWatchLogsInitialPosition | string;

  /**
   * <p>Specifies the encoding of the log file so that the file can be read correctly.
   *             The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.</p>
   */
  Encoding?: CloudWatchLogsEncoding | string;

  /**
   * <p>Specifies the time duration for the batching of log events. The minimum value is 5000ms and default value is 5000ms.</p>
   */
  BufferDuration?: number;

  /**
   * <p>Specifies the max number of log events in a batch, up to 10000. The default value is 1000.</p>
   */
  BatchCount?: number;

  /**
   * <p>Specifies the maximum size of log events in a batch, in bytes, up to 1048576 bytes.
   *             The default value is 32768 bytes. This size is calculated as the sum of all event messages
   *             in UTF-8, plus 26 bytes for each log event.</p>
   */
  BatchSize?: number;
}

/**
 * <p>Describes the Amazon CloudWatch logs configuration for a layer.</p>
 */
export interface CloudWatchLogsConfiguration {
  /**
   * <p>Whether CloudWatch Logs is enabled for a layer.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of configuration options for CloudWatch Logs.</p>
   */
  LogStreams?: CloudWatchLogsLogStream[];
}

/**
 * <p>Describes a command.</p>
 */
export interface Command {
  /**
   * <p>The command ID.</p>
   */
  CommandId?: string;

  /**
   * <p>The ID of the instance where the command was executed.</p>
   */
  InstanceId?: string;

  /**
   * <p>The command deployment ID.</p>
   */
  DeploymentId?: string;

  /**
   * <p>Date and time when the command was run.</p>
   */
  CreatedAt?: string;

  /**
   * <p>Date and time when the command was acknowledged.</p>
   */
  AcknowledgedAt?: string;

  /**
   * <p>Date when the command completed.</p>
   */
  CompletedAt?: string;

  /**
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
   * <p>The command exit code.</p>
   */
  ExitCode?: number;

  /**
   * <p>The URL of the command log.</p>
   */
  LogUrl?: string;

  /**
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

export interface CreateAppRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The app's short name.</p>
   */
  Shortname?: string;

  /**
   * <p>The app name.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * <p>The app's data source.</p>
   */
  DataSources?: DataSource[];

  /**
   * <p>The app type. Each supported type is associated with a particular layer. For example, PHP
   *       applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances
   *       that are members of the corresponding layer. If your app isn't one of the standard types, or
   *       you prefer to implement your own Deploy recipes, specify <code>other</code>.</p>
   */
  Type: AppType | string | undefined;

  /**
   * <p>A <code>Source</code> object that specifies the app repository.</p>
   */
  AppSource?: Source;

  /**
   * <p>The app virtual host settings, with multiple domains separated by commas. For example:
   *         <code>'www.example.com, example.com'</code>
   *          </p>
   */
  Domains?: string[];

  /**
   * <p>Whether to enable SSL for the app.</p>
   */
  EnableSsl?: boolean;

  /**
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: SslConfiguration;

  /**
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
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
 * <p>Contains the response to a <code>CreateApp</code> request.</p>
 */
export interface CreateAppResult {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;
}

export type DeploymentCommandName =
  | "configure"
  | "deploy"
  | "execute_recipes"
  | "install_dependencies"
  | "restart"
  | "rollback"
  | "setup"
  | "start"
  | "stop"
  | "undeploy"
  | "update_custom_cookbooks"
  | "update_dependencies";

/**
 * <p>Used to specify a stack or deployment command.</p>
 */
export interface DeploymentCommand {
  /**
   * <p>Specifies the operation. You can specify only one command.</p>
   *          <p>For stacks, the following commands are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>execute_recipes</code>: Execute one or more recipes. To specify the recipes, set an
   *           <code>Args</code> parameter named <code>recipes</code> to the list of recipes to be
   *         executed. For example, to execute <code>phpapp::appsetup</code>, set <code>Args</code> to
   *           <code>{"recipes":["phpapp::appsetup"]}</code>.</p>
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
   *         parameter named <code>migrate</code>. Set <code>Args</code> to {"migrate":["true"]} to
   *         migrate the database. The default setting is {"migrate":["false"]}.</p>
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
  Name: DeploymentCommandName | string | undefined;

  /**
   * <p>The arguments of those commands that take arguments. It should be set to a JSON object with the following format:</p>
   *          <p>
   *             <code>{"arg_name1" : ["value1", "value2", ...], "arg_name2" : ["value1", "value2", ...],
   *         ...}</code>
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
   *             <code> { "upgrade_os_to":["Amazon Linux 2016.09"], "allow_reboot":["true"] } </code>
   *          </p>
   */
  Args?: Record<string, string[]>;
}

export interface CreateDeploymentRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The app ID. This parameter is required for app deployments, but not for other deployment commands.</p>
   */
  AppId?: string;

  /**
   * <p>The instance IDs for the deployment targets.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The layer IDs for the deployment targets.</p>
   */
  LayerIds?: string[];

  /**
   * <p>A <code>DeploymentCommand</code> object that specifies the deployment command and any
   *       associated arguments.</p>
   */
  Command: DeploymentCommand | undefined;

  /**
   * <p>A user-defined comment.</p>
   */
  Comment?: string;

  /**
   * <p>A string that contains user-defined, custom JSON. You can use this parameter to override some corresponding default stack configuration JSON values. The string should be in the following format:</p>
   *          <p>
   *             <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *           Modify the Stack Configuration Attributes</a> and
   *           <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">Overriding Attributes With Custom JSON</a>.</p>
   */
  CustomJson?: string;
}

/**
 * <p>Contains the response to a <code>CreateDeployment</code> request.</p>
 */
export interface CreateDeploymentResult {
  /**
   * <p>The deployment ID, which can be used with other requests to identify the deployment.</p>
   */
  DeploymentId?: string;
}

export interface CreateInstanceRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * <p>An array that contains the instance's layer IDs.</p>
   */
  LayerIds: string[] | undefined;

  /**
   * <p>The instance type, such as <code>t2.micro</code>. For a list of supported instance types,
   *       open the stack in the console, choose <b>Instances</b>, and choose <b>+ Instance</b>.
   *       The <b>Size</b> list contains the currently supported types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *         Families and Types</a>. The parameter values that you use to specify the various types are
   *       in the <b>API Name</b> column of the <b>Available Instance Types</b> table.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>For load-based or time-based instances, the type. Windows stacks can use only time-based instances.</p>
   */
  AutoScalingType?: AutoScalingType | string;

  /**
   * <p>The instance host name.</p>
   */
  Hostname?: string;

  /**
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
   * <p>The instance architecture. The default option is <code>x86_64</code>. Instance types do not
   *       necessarily support both architectures. For a list of the architectures that are supported by
   *       the different instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Families and
   *         Types</a>.</p>
   */
  Architecture?: Architecture | string;

  /**
   * <p>The instance root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  RootDeviceType?: RootDeviceType | string;

  /**
   * <p>An array of <code>BlockDeviceMapping</code> objects that specify the instance's block
   *       devices. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block
   *         Device Mapping</a>. Note that block device mappings are not supported for custom AMIs.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
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
   * <p>Whether to create an Amazon EBS-optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
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
   * <p>The instance's tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter:  <code>dedicated</code>, <code>default</code>, or <code>host</code>. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Dedicated Hosts Overview</a> and <a href="http://aws.amazon.com/ec2/dedicated-hosts/">Amazon EC2 Dedicated Hosts</a>. For more information about dedicated instances, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> and <a href="http://aws.amazon.com/ec2/purchasing-options/dedicated-instances/">Amazon EC2 Dedicated Instances</a>.</p>
   */
  Tenancy?: string;
}

/**
 * <p>Contains the response to a <code>CreateInstance</code> request.</p>
 */
export interface CreateInstanceResult {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

export type LayerAttributesKeys =
  | "BundlerVersion"
  | "EcsClusterArn"
  | "EnableHaproxyStats"
  | "GangliaPassword"
  | "GangliaUrl"
  | "GangliaUser"
  | "HaproxyHealthCheckMethod"
  | "HaproxyHealthCheckUrl"
  | "HaproxyStatsPassword"
  | "HaproxyStatsUrl"
  | "HaproxyStatsUser"
  | "JavaAppServer"
  | "JavaAppServerVersion"
  | "Jvm"
  | "JvmOptions"
  | "JvmVersion"
  | "ManageBundler"
  | "MemcachedMemory"
  | "MysqlRootPassword"
  | "MysqlRootPasswordUbiquitous"
  | "NodejsVersion"
  | "PassengerVersion"
  | "RailsStack"
  | "RubyVersion"
  | "RubygemsVersion";

/**
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
   * <p>An array of custom recipe names to be run following a <code>setup</code> event.</p>
   */
  Setup?: string[];

  /**
   * <p>An array of custom recipe names to be run following a <code>configure</code> event.</p>
   */
  Configure?: string[];

  /**
   * <p>An array of custom recipe names to be run following a <code>deploy</code> event.</p>
   */
  Deploy?: string[];

  /**
   * <p>An array of custom recipe names to be run following a <code>undeploy</code> event.</p>
   */
  Undeploy?: string[];

  /**
   * <p>An array of custom recipe names to be run following a <code>shutdown</code> event.</p>
   */
  Shutdown?: string[];
}

/**
 * <p>The Shutdown event configuration.</p>
 */
export interface ShutdownEventConfiguration {
  /**
   * <p>The time, in seconds, that AWS OpsWorks Stacks will wait after triggering a Shutdown event before shutting down an instance.</p>
   */
  ExecutionTimeout?: number;

  /**
   * <p>Whether to enable Elastic Load Balancing connection draining. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#conn-drain">Connection Draining</a>
   *          </p>
   */
  DelayUntilElbConnectionsDrained?: boolean;
}

/**
 * <p>Specifies the lifecycle event configuration</p>
 */
export interface LifecycleEventConfiguration {
  /**
   * <p>A <code>ShutdownEventConfiguration</code> object that specifies the Shutdown event
   *       configuration.</p>
   */
  Shutdown?: ShutdownEventConfiguration;
}

export type LayerType =
  | "aws-flow-ruby"
  | "custom"
  | "db-master"
  | "ecs-cluster"
  | "java-app"
  | "lb"
  | "memcached"
  | "monitoring-master"
  | "nodejs-app"
  | "php-app"
  | "rails-app"
  | "web";

/**
 * <p>Describes an Amazon EBS volume configuration.</p>
 */
export interface VolumeConfiguration {
  /**
   * <p>The volume mount point. For example "/dev/sdh".</p>
   */
  MountPoint: string | undefined;

  /**
   * <p>The volume <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.</p>
   */
  RaidLevel?: number;

  /**
   * <p>The number of disks in the volume.</p>
   */
  NumberOfDisks: number | undefined;

  /**
   * <p>The volume size.</p>
   */
  Size: number | undefined;

  /**
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
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;

  /**
   * <p>Specifies whether an Amazon EBS volume is encrypted. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a>.</p>
   */
  Encrypted?: boolean;
}

export interface CreateLayerRequest {
  /**
   * <p>The layer stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The layer type. A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.</p>
   */
  Type: LayerType | string | undefined;

  /**
   * <p>The layer name, which is used by the console.</p>
   */
  Name: string | undefined;

  /**
   * <p>For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters, which are limited to the alphanumeric characters, '-', '_', and '.'.</p>
   *          <p>The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html">Layer Reference</a>.</p>
   */
  Shortname: string | undefined;

  /**
   * <p>One or more user-defined key-value pairs to be added to the stack attributes.</p>
   *          <p>To create a cluster layer, set the <code>EcsClusterArn</code> attribute to the cluster's ARN.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Specifies CloudWatch Logs configuration options for the layer. For more information, see <a>CloudWatchLogsLogStream</a>.</p>
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * <p>The ARN of an IAM profile to be used for the layer's EC2 instances. For more information
   *       about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * <p>A JSON-formatted string containing custom stack configuration and deployment attributes
   *      to be installed on the layer's instances. For more information, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">
   *         Using Custom JSON</a>. This feature is supported as of version 1.7.42 of the AWS CLI.
   *     </p>
   */
  CustomJson?: string;

  /**
   * <p>An array containing the layer custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: string[];

  /**
   * <p>An array of <code>Package</code> objects that describes the layer packages.</p>
   */
  Packages?: string[];

  /**
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?: VolumeConfiguration[];

  /**
   * <p>Whether to disable auto healing for the layer.</p>
   */
  EnableAutoHealing?: boolean;

  /**
   * <p>Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
   *         address</a> to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignElasticIps?: boolean;

  /**
   * <p>For stacks that are running in a VPC, whether to automatically assign a public IP address to
   *       the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignPublicIps?: boolean;

  /**
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer custom recipes.</p>
   */
  CustomRecipes?: Recipes;

  /**
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
   * <p>Whether to use Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * <p>A <code>LifeCycleEventConfiguration</code> object that you can use to configure the Shutdown event to
   *       specify an execution timeout and enable or disable Elastic Load Balancer connection
   *       draining.</p>
   */
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}

/**
 * <p>Contains the response to a <code>CreateLayer</code> request.</p>
 */
export interface CreateLayerResult {
  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;
}

export interface CreateStackRequest {
  /**
   * <p>The stack name.</p>
   */
  Name: string | undefined;

  /**
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
   * <p>One or more user-defined key-value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The stack's AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS
   *       resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an
   *       existing IAM role. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  ServiceRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn: string | undefined;

  /**
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
   * <p>The stack's default Availability Zone, which must be in the specified region. For more
   *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and
   *         Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must
   *       be in the same zone. For more information, see the <code>VpcId</code> parameter description.
   *     </p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * <p>The stack's default VPC subnet ID. This parameter is required if you specify a value for the
   *         <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify
   *       otherwise when you create the instance. If you also specify a value for
   *         <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on
   *       default values and when this parameter is required, see the <code>VpcId</code> parameter
   *       description. </p>
   */
  DefaultSubnetId?: string;

  /**
   * <p>A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * <p>The configuration manager. When you create a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * <p>Whether the stack uses custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
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
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or
   *             <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
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
   * <p>The default root device type. This value is the default for all instances in the stack,
   *       but you can override it when you create an instance. The default option is
   *         <code>instance-store</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType | string;

  /**
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
 * <p>Contains the response to a <code>CreateStack</code> request.</p>
 */
export interface CreateStackResult {
  /**
   * <p>The stack ID, which is an opaque string that you use to identify the stack when performing
   *       actions such as <code>DescribeStacks</code>.</p>
   */
  StackId?: string;
}

export interface CreateUserProfileRequest {
  /**
   * <p>The user's IAM ARN; this can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;

  /**
   * <p>The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If
   *       the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example,
   *         <code>my.name</code> will be changed to <code>myname</code>. If you do not specify an SSH
   *       user name, AWS OpsWorks Stacks generates one from the IAM user name. </p>
   */
  SshUsername?: string;

  /**
   * <p>The user's public SSH key.</p>
   */
  SshPublicKey?: string;

  /**
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Setting an IAM
   *         User's Public SSH Key</a>.</p>
   */
  AllowSelfManagement?: boolean;
}

/**
 * <p>Contains the response to a <code>CreateUserProfile</code> request.</p>
 */
export interface CreateUserProfileResult {
  /**
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;
}

export interface DeleteAppRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

export interface DeleteInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Whether to delete the instance Elastic IP address.</p>
   */
  DeleteElasticIp?: boolean;

  /**
   * <p>Whether to delete the instance's Amazon EBS volumes.</p>
   */
  DeleteVolumes?: boolean;
}

export interface DeleteLayerRequest {
  /**
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;
}

export interface DeleteStackRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

export interface DeleteUserProfileRequest {
  /**
   * <p>The user's IAM ARN. This can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;
}

/**
 * <p>Describes a deployment of a stack or app.</p>
 */
export interface Deployment {
  /**
   * <p>The deployment ID.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>Date when the deployment was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>Date when the deployment completed.</p>
   */
  CompletedAt?: string;

  /**
   * <p>The deployment duration.</p>
   */
  Duration?: number;

  /**
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * <p>A user-defined comment.</p>
   */
  Comment?: string;

  /**
   * <p>Used to specify a stack or deployment command.</p>
   */
  Command?: DeploymentCommand;

  /**
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
   * <p>A string that contains user-defined custom JSON. It can be used to override the corresponding default stack configuration attribute values for stack or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code>
   *          </p>
   *          <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * <p>The IDs of the target instances.</p>
   */
  InstanceIds?: string[];
}

export interface DeregisterEcsClusterRequest {
  /**
   * <p>The cluster's Amazon Resource Number (ARN).</p>
   */
  EcsClusterArn: string | undefined;
}

export interface DeregisterElasticIpRequest {
  /**
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;
}

export interface DeregisterInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

export interface DeregisterRdsDbInstanceRequest {
  /**
   * <p>The Amazon RDS instance's ARN.</p>
   */
  RdsDbInstanceArn: string | undefined;
}

export interface DeregisterVolumeRequest {
  /**
   * <p>The AWS OpsWorks Stacks volume ID, which is the GUID that AWS OpsWorks Stacks assigned to the instance when you registered the volume with the stack, not the Amazon EC2 volume ID.</p>
   */
  VolumeId: string | undefined;
}

export interface DescribeAgentVersionsRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: StackConfigurationManager;
}

/**
 * <p>Contains the response to a <code>DescribeAgentVersions</code> request.</p>
 */
export interface DescribeAgentVersionsResult {
  /**
   * <p>The agent versions for the specified stack or configuration manager. Note that this value is the complete version number, not the abbreviated number used by the console.</p>
   */
  AgentVersions?: AgentVersion[];
}

export interface DescribeAppsRequest {
  /**
   * <p>The app stack ID. If you use this parameter, <code>DescribeApps</code> returns a description
   *       of the apps in the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>An array of app IDs for the apps to be described. If you use this parameter,
   *         <code>DescribeApps</code> returns a description of the specified apps. Otherwise, it returns
   *       a description of every app.</p>
   */
  AppIds?: string[];
}

/**
 * <p>Contains the response to a <code>DescribeApps</code> request.</p>
 */
export interface DescribeAppsResult {
  /**
   * <p>An array of <code>App</code> objects that describe the specified apps. </p>
   */
  Apps?: App[];
}

export interface DescribeCommandsRequest {
  /**
   * <p>The deployment ID. If you include this parameter, <code>DescribeCommands</code> returns a
   *       description of the commands associated with the specified deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The instance ID. If you include this parameter, <code>DescribeCommands</code> returns a
   *       description of the commands associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>An array of command IDs. If you include this parameter, <code>DescribeCommands</code> returns
   *       a description of the specified commands. Otherwise, it returns a description of every
   *       command.</p>
   */
  CommandIds?: string[];
}

/**
 * <p>Contains the response to a <code>DescribeCommands</code> request.</p>
 */
export interface DescribeCommandsResult {
  /**
   * <p>An array of <code>Command</code> objects that describe each of the specified commands.</p>
   */
  Commands?: Command[];
}

export interface DescribeDeploymentsRequest {
  /**
   * <p>The stack ID. If you include this parameter, the command returns a
   *       description of the commands associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>The app ID. If you include this parameter, the command returns a
   *       description of the commands associated with the specified app.</p>
   */
  AppId?: string;

  /**
   * <p>An array of deployment IDs to be described. If you include this parameter,
   *         the command returns a description of the specified deployments.
   *       Otherwise, it returns a description of every deployment.</p>
   */
  DeploymentIds?: string[];
}

/**
 * <p>Contains the response to a <code>DescribeDeployments</code> request.</p>
 */
export interface DescribeDeploymentsResult {
  /**
   * <p>An array of <code>Deployment</code> objects that describe the deployments.</p>
   */
  Deployments?: Deployment[];
}

export interface DescribeEcsClustersRequest {
  /**
   * <p>A list of ARNs, one for each cluster to be described.</p>
   */
  EcsClusterArns?: string[];

  /**
   * <p>A stack ID.
   *       <code>DescribeEcsClusters</code> returns a description of the cluster that is registered with the stack.</p>
   */
  StackId?: string;

  /**
   * <p>If the previous paginated request did not return all of the remaining results,
   *       the response object's<code>NextToken</code> parameter value is set to a token.
   *       To retrieve the next set of results, call <code>DescribeEcsClusters</code>
   *       again and assign that token to the request object's <code>NextToken</code> parameter.
   *       If there are no remaining results, the previous response
   *       object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>To receive a paginated response, use this parameter to specify the maximum number
   *       of results to be returned with a single call. If the number of available results exceeds this maximum, the
   *       response includes a <code>NextToken</code> value that you can assign
   *       to the <code>NextToken</code> request parameter to get the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes a registered Amazon ECS cluster.</p>
 */
export interface EcsCluster {
  /**
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn?: string;

  /**
   * <p>The cluster name.</p>
   */
  EcsClusterName?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The time and date that the cluster was registered with the stack.</p>
   */
  RegisteredAt?: string;
}

/**
 * <p>Contains the response to a <code>DescribeEcsClusters</code> request.</p>
 */
export interface DescribeEcsClustersResult {
  /**
   * <p>A list of <code>EcsCluster</code> objects containing the cluster descriptions.</p>
   */
  EcsClusters?: EcsCluster[];

  /**
   * <p>If a paginated request does not return all of the remaining results, this parameter is set to a token that
   *       you can assign to the request object's <code>NextToken</code> parameter to retrieve the next set of results.
   *       If the previous paginated request returned all of the remaining results,
   *       this parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export interface DescribeElasticIpsRequest {
  /**
   * <p>The instance ID. If you include this parameter, <code>DescribeElasticIps</code> returns a
   *       description of the Elastic IP addresses associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A stack ID. If you include this parameter, <code>DescribeElasticIps</code> returns a
   *       description of the Elastic IP addresses that are registered with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>An array of Elastic IP addresses to be described. If you include this parameter,
   *         <code>DescribeElasticIps</code> returns a description of the specified Elastic IP addresses.
   *       Otherwise, it returns a description of every Elastic IP address.</p>
   */
  Ips?: string[];
}

/**
 * <p>Describes an Elastic IP address.</p>
 */
export interface ElasticIp {
  /**
   * <p>The IP address.</p>
   */
  Ip?: string;

  /**
   * <p>The name.</p>
   */
  Name?: string;

  /**
   * <p>The domain.</p>
   */
  Domain?: string;

  /**
   * <p>The AWS region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * <p>The ID of the instance that the address is attached to.</p>
   */
  InstanceId?: string;
}

/**
 * <p>Contains the response to a <code>DescribeElasticIps</code> request.</p>
 */
export interface DescribeElasticIpsResult {
  /**
   * <p>An <code>ElasticIps</code> object that describes the specified Elastic IP addresses.</p>
   */
  ElasticIps?: ElasticIp[];
}

export interface DescribeElasticLoadBalancersRequest {
  /**
   * <p>A stack ID. The action describes the stack's Elastic Load Balancing instances.</p>
   */
  StackId?: string;

  /**
   * <p>A list of layer IDs. The action describes the Elastic Load Balancing instances for the specified layers.</p>
   */
  LayerIds?: string[];
}

/**
 * <p>Describes an Elastic Load Balancing instance.</p>
 */
export interface ElasticLoadBalancer {
  /**
   * <p>The Elastic Load Balancing instance's name.</p>
   */
  ElasticLoadBalancerName?: string;

  /**
   * <p>The instance's AWS region.</p>
   */
  Region?: string;

  /**
   * <p>The instance's public DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the stack that the instance is associated with.</p>
   */
  StackId?: string;

  /**
   * <p>The ID of the layer that the instance is attached to.</p>
   */
  LayerId?: string;

  /**
   * <p>The VPC ID.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of Availability Zones.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>A list of subnet IDs, if the stack is running in a VPC.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A list of the EC2 instances that the Elastic Load Balancing instance is managing traffic for.</p>
   */
  Ec2InstanceIds?: string[];
}

/**
 * <p>Contains the response to a <code>DescribeElasticLoadBalancers</code> request.</p>
 */
export interface DescribeElasticLoadBalancersResult {
  /**
   * <p>A list of <code>ElasticLoadBalancer</code> objects that describe the specified Elastic Load Balancing
   *       instances.</p>
   */
  ElasticLoadBalancers?: ElasticLoadBalancer[];
}

export interface DescribeInstancesRequest {
  /**
   * <p>A stack ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of
   *       the instances associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>A layer ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of
   *       the instances associated with the specified layer.</p>
   */
  LayerId?: string;

  /**
   * <p>An array of instance IDs to be described. If you use this parameter,
   *         <code>DescribeInstances</code> returns a description of the specified instances. Otherwise,
   *       it returns a description of every instance.</p>
   */
  InstanceIds?: string[];
}

/**
 * <p>A registered instance's reported operating system.</p>
 */
export interface ReportedOs {
  /**
   * <p>The operating system family.</p>
   */
  Family?: string;

  /**
   * <p>The operating system name.</p>
   */
  Name?: string;

  /**
   * <p>The operating system version.</p>
   */
  Version?: string;
}

export type VirtualizationType = "hvm" | "paravirtual";

/**
 * <p>Describes an instance.</p>
 */
export interface Instance {
  /**
   * <p>The agent version. This parameter is set to <code>INHERIT</code> if
   *       the instance inherits the default stack setting or to a
   *       a version number for a fixed agent version.</p>
   */
  AgentVersion?: string;

  /**
   * <p>A custom AMI ID to be used to create the instance. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html">Instances</a>
   *          </p>
   */
  AmiId?: string;

  /**
   * <p>The instance architecture: "i386" or "x86_64".</p>
   */
  Architecture?: Architecture | string;

  /**
   * <p>The instance's Amazon Resource Number (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>For load-based or time-based instances, the type.</p>
   */
  AutoScalingType?: AutoScalingType | string;

  /**
   * <p>The instance Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>An array of <code>BlockDeviceMapping</code> objects that specify the instance's block device
   *       mappings.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

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
   * <p>For registered instances, the infrastructure class: <code>ec2</code> or
   *         <code>on-premises</code>.</p>
   */
  InfrastructureClass?: string;

  /**
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
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ARN of the instance's IAM profile. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  InstanceProfileArn?: string;

  /**
   * <p>The instance type, such as <code>t2.micro</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the last service error. For more information, call
   *       <a>DescribeServiceErrors</a>.</p>
   */
  LastServiceErrorId?: string;

  /**
   * <p>An array containing the instance layer IDs.</p>
   */
  LayerIds?: string[];

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
  ReportedOs?: ReportedOs;

  /**
   * <p>The instance's root device type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  RootDeviceType?: RootDeviceType | string;

  /**
   * <p>The root device volume ID.</p>
   */
  RootDeviceVolumeId?: string;

  /**
   * <p>An array containing the instance security group IDs.</p>
   */
  SecurityGroupIds?: string[];

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
  VirtualizationType?: VirtualizationType | string;
}

/**
 * <p>Contains the response to a <code>DescribeInstances</code> request.</p>
 */
export interface DescribeInstancesResult {
  /**
   * <p>An array of <code>Instance</code> objects that describe the instances.</p>
   */
  Instances?: Instance[];
}

export interface DescribeLayersRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>An array of layer IDs that specify the layers to be described. If you omit this parameter,
   *         <code>DescribeLayers</code> returns a description of every layer in the specified stack.</p>
   */
  LayerIds?: string[];
}

/**
 * <p>Describes a layer.</p>
 */
export interface Layer {
  /**
   * <p>The Amazon Resource Number (ARN) of a layer.</p>
   */
  Arn?: string;

  /**
   * <p>The layer stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * <p>The layer type.</p>
   */
  Type?: LayerType | string;

  /**
   * <p>The layer name.</p>
   */
  Name?: string;

  /**
   * <p>The layer short name.</p>
   */
  Shortname?: string;

  /**
   * <p>The layer attributes.</p>
   *          <p>For the <code>HaproxyStatsPassword</code>, <code>MysqlRootPassword</code>, and
   *         <code>GangliaPassword</code> attributes, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code>
   *       instead of the actual value</p>
   *          <p>For an ECS Cluster layer, AWS OpsWorks Stacks the <code>EcsClusterArn</code> attribute is set to the cluster's ARN.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The Amazon CloudWatch Logs configuration settings for the layer.</p>
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * <p>The ARN of the default IAM profile to be used for the layer's EC2 instances. For more
   *       information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * <p>A JSON formatted string containing the layer's custom stack configuration and deployment attributes.</p>
   */
  CustomJson?: string;

  /**
   * <p>An array containing the layer's custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: string[];

  /**
   * <p>An array containing the layer's security group names.</p>
   */
  DefaultSecurityGroupNames?: string[];

  /**
   * <p>An array of <code>Package</code> objects that describe the layer's packages.</p>
   */
  Packages?: string[];

  /**
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?: VolumeConfiguration[];

  /**
   * <p>Whether auto healing is disabled for the layer.</p>
   */
  EnableAutoHealing?: boolean;

  /**
   * <p>Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
   *         address</a> to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignElasticIps?: boolean;

  /**
   * <p>For stacks that are running in a VPC, whether to automatically assign a public IP address to
   *       the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignPublicIps?: boolean;

  /**
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
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.</p>
   */
  CustomRecipes?: Recipes;

  /**
   * <p>Date when the layer was created.</p>
   */
  CreatedAt?: string;

  /**
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
   * <p>Whether the layer uses Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * <p>A <code>LifeCycleEventConfiguration</code> object that specifies the Shutdown event
   *       configuration.</p>
   */
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}

/**
 * <p>Contains the response to a <code>DescribeLayers</code> request.</p>
 */
export interface DescribeLayersResult {
  /**
   * <p>An array of <code>Layer</code> objects that describe the layers.</p>
   */
  Layers?: Layer[];
}

export interface DescribeLoadBasedAutoScalingRequest {
  /**
   * <p>An array of layer IDs.</p>
   */
  LayerIds: string[] | undefined;
}

/**
 * <p>Describes a layer's load-based auto scaling configuration.</p>
 */
export interface LoadBasedAutoScalingConfiguration {
  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * <p>Whether load-based auto scaling is enabled for the layer.</p>
   */
  Enable?: boolean;

  /**
   * <p>An <code>AutoScalingThresholds</code> object that describes the upscaling configuration,
   *       which defines how and when AWS OpsWorks Stacks increases the number of instances.</p>
   */
  UpScaling?: AutoScalingThresholds;

  /**
   * <p>An <code>AutoScalingThresholds</code> object that describes the downscaling configuration,
   *       which defines how and when AWS OpsWorks Stacks reduces the number of instances.</p>
   */
  DownScaling?: AutoScalingThresholds;
}

/**
 * <p>Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.</p>
 */
export interface DescribeLoadBasedAutoScalingResult {
  /**
   * <p>An array of <code>LoadBasedAutoScalingConfiguration</code> objects that describe each layer's
   *       configuration.</p>
   */
  LoadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfiguration[];
}

/**
 * <p>Describes a user's SSH information.</p>
 */
export interface SelfUserProfile {
  /**
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * <p>The user's name.</p>
   */
  Name?: string;

  /**
   * <p>The user's SSH user name.</p>
   */
  SshUsername?: string;

  /**
   * <p>The user's SSH public key.</p>
   */
  SshPublicKey?: string;
}

/**
 * <p>Contains the response to a <code>DescribeMyUserProfile</code> request.</p>
 */
export interface DescribeMyUserProfileResult {
  /**
   * <p>A <code>UserProfile</code> object that describes the user's SSH information.</p>
   */
  UserProfile?: SelfUserProfile;
}

/**
 * <p>A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.</p>
 */
export interface OperatingSystemConfigurationManager {
  /**
   * <p>The name of the configuration manager, which is Chef.</p>
   */
  Name?: string;

  /**
   * <p>The versions of the configuration manager that are supported by an operating system.</p>
   */
  Version?: string;
}

/**
 * <p>Describes supported operating systems in AWS OpsWorks Stacks.</p>
 */
export interface OperatingSystem {
  /**
   * <p>The name of the operating system, such as <code>Amazon Linux 2018.03</code>.</p>
   */
  Name?: string;

  /**
   * <p>The ID of a supported operating system, such as <code>Amazon Linux 2018.03</code>.</p>
   */
  Id?: string;

  /**
   * <p>The type of a supported operating system, either <code>Linux</code> or <code>Windows</code>.</p>
   */
  Type?: string;

  /**
   * <p>Supported configuration manager name and versions for an AWS OpsWorks Stacks operating system.</p>
   */
  ConfigurationManagers?: OperatingSystemConfigurationManager[];

  /**
   * <p>A short name for the operating system manufacturer.</p>
   */
  ReportedName?: string;

  /**
   * <p>The version of the operating system, including the release and edition, if applicable.</p>
   */
  ReportedVersion?: string;

  /**
   * <p>Indicates that an operating system is not supported for new instances.</p>
   */
  Supported?: boolean;
}

/**
 * <p>The response to a <code>DescribeOperatingSystems</code> request.</p>
 */
export interface DescribeOperatingSystemsResponse {
  /**
   * <p>Contains information in response to a <code>DescribeOperatingSystems</code> request.</p>
   */
  OperatingSystems?: OperatingSystem[];
}

export interface DescribePermissionsRequest {
  /**
   * <p>The user's IAM ARN. This can also be a federated user's ARN. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  IamUserArn?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;
}

/**
 * <p>Describes stack or user permissions.</p>
 */
export interface Permission {
  /**
   * <p>A stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for an AWS Identity and Access Management (IAM) role. For more
   *       information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  IamUserArn?: string;

  /**
   * <p>Whether the user can use SSH.</p>
   */
  AllowSsh?: boolean;

  /**
   * <p>Whether the user can use <b>sudo</b>.</p>
   */
  AllowSudo?: boolean;

  /**
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
 * <p>Contains the response to a <code>DescribePermissions</code> request.</p>
 */
export interface DescribePermissionsResult {
  /**
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

export interface DescribeRaidArraysRequest {
  /**
   * <p>The instance ID. If you use this parameter, <code>DescribeRaidArrays</code> returns
   *       descriptions of the RAID arrays associated with the specified instance. </p>
   */
  InstanceId?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>An array of RAID array IDs. If you use this parameter, <code>DescribeRaidArrays</code>
   *       returns descriptions of the specified arrays. Otherwise, it returns a description of every
   *       array.</p>
   */
  RaidArrayIds?: string[];
}

/**
 * <p>Describes an instance's RAID array.</p>
 */
export interface RaidArray {
  /**
   * <p>The array ID.</p>
   */
  RaidArrayId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The array name.</p>
   */
  Name?: string;

  /**
   * <p>The <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.</p>
   */
  RaidLevel?: number;

  /**
   * <p>The number of disks in the array.</p>
   */
  NumberOfDisks?: number;

  /**
   * <p>The array's size.</p>
   */
  Size?: number;

  /**
   * <p>The array's Linux device. For example /dev/mdadm0.</p>
   */
  Device?: string;

  /**
   * <p>The array's mount point.</p>
   */
  MountPoint?: string;

  /**
   * <p>The array's Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>When the RAID array was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The volume type, standard or PIOPS.</p>
   */
  VolumeType?: string;

  /**
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;
}

/**
 * <p>Contains the response to a <code>DescribeRaidArrays</code> request.</p>
 */
export interface DescribeRaidArraysResult {
  /**
   * <p>A <code>RaidArrays</code> object that describes the specified RAID arrays.</p>
   */
  RaidArrays?: RaidArray[];
}

export interface DescribeRdsDbInstancesRequest {
  /**
   * <p>The ID of the stack with which the instances are registered. The operation returns descriptions of all registered Amazon RDS instances.</p>
   */
  StackId: string | undefined;

  /**
   * <p>An array containing the ARNs of the instances to be described.</p>
   */
  RdsDbInstanceArns?: string[];
}

/**
 * <p>Describes an Amazon RDS instance.</p>
 */
export interface RdsDbInstance {
  /**
   * <p>The instance's ARN.</p>
   */
  RdsDbInstanceArn?: string;

  /**
   * <p>The DB instance identifier.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The master user name.</p>
   */
  DbUser?: string;

  /**
   * <p>AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value.</p>
   */
  DbPassword?: string;

  /**
   * <p>The instance's AWS region.</p>
   */
  Region?: string;

  /**
   * <p>The instance's address.</p>
   */
  Address?: string;

  /**
   * <p>The instance's database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The ID of the stack with which the instance is registered.</p>
   */
  StackId?: string;

  /**
   * <p>Set to <code>true</code> if AWS OpsWorks Stacks is unable to discover the Amazon RDS instance. AWS OpsWorks Stacks attempts
   *       to discover the instance only once. If this value is set to <code>true</code>, you must
   *       deregister the instance, and then register it again.</p>
   */
  MissingOnRds?: boolean;
}

/**
 * <p>Contains the response to a <code>DescribeRdsDbInstances</code> request.</p>
 */
export interface DescribeRdsDbInstancesResult {
  /**
   * <p>An a array of <code>RdsDbInstance</code> objects that describe the instances.</p>
   */
  RdsDbInstances?: RdsDbInstance[];
}

export interface DescribeServiceErrorsRequest {
  /**
   * <p>The stack ID. If you use this parameter, <code>DescribeServiceErrors</code> returns
   *       descriptions of the errors associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>The instance ID. If you use this parameter, <code>DescribeServiceErrors</code> returns
   *       descriptions of the errors associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>An array of service error IDs. If you use this parameter, <code>DescribeServiceErrors</code>
   *       returns descriptions of the specified errors. Otherwise, it returns a description of every
   *       error.</p>
   */
  ServiceErrorIds?: string[];
}

/**
 * <p>Describes an AWS OpsWorks Stacks service error.</p>
 */
export interface ServiceError {
  /**
   * <p>The error ID.</p>
   */
  ServiceErrorId?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The error type.</p>
   */
  Type?: string;

  /**
   * <p>A message that describes the error.</p>
   */
  Message?: string;

  /**
   * <p>When the error occurred.</p>
   */
  CreatedAt?: string;
}

/**
 * <p>Contains the response to a <code>DescribeServiceErrors</code> request.</p>
 */
export interface DescribeServiceErrorsResult {
  /**
   * <p>An array of <code>ServiceError</code> objects that describe the specified service errors.</p>
   */
  ServiceErrors?: ServiceError[];
}

export interface DescribeStackProvisioningParametersRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * <p>Contains the response to a <code>DescribeStackProvisioningParameters</code> request.</p>
 */
export interface DescribeStackProvisioningParametersResult {
  /**
   * <p>The AWS OpsWorks Stacks agent installer's URL.</p>
   */
  AgentInstallerUrl?: string;

  /**
   * <p>An embedded object that contains the provisioning parameters.</p>
   */
  Parameters?: Record<string, string>;
}

export interface DescribeStacksRequest {
  /**
   * <p>An array of stack IDs that specify the stacks to be described. If you omit this parameter,
   *         <code>DescribeStacks</code> returns a description of every stack.</p>
   */
  StackIds?: string[];
}

/**
 * <p>Describes a stack.</p>
 */
export interface Stack {
  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The stack name.</p>
   */
  Name?: string;

  /**
   * <p>The stack's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * <p>The VPC ID; applicable only if the stack is running in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The stack's attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The stack AWS Identity and Access Management (IAM) role.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn?: string;

  /**
   * <p>The stack's default operating system.</p>
   */
  DefaultOs?: string;

  /**
   * <p>The stack host name theme, with spaces replaced by underscores.</p>
   */
  HostnameTheme?: string;

  /**
   * <p>The stack's default Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * <p>The default subnet ID; applicable only if the stack is running in a VPC.</p>
   */
  DefaultSubnetId?: string;

  /**
   * <p>A JSON object that contains user-defined attributes to be added to the stack configuration and deployment attributes. You can use custom JSON to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code>
   *          </p>
   *          <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * <p>Whether the stack uses custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
   * <p>Whether the stack automatically associates the AWS OpsWorks Stacks built-in security groups with the stack's layers.</p>
   */
  UseOpsworksSecurityGroups?: boolean;

  /**
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or
   *             <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
   * <p>A default Amazon EC2 key pair for the stack's instances. You can override this value when you create or update an instance.</p>
   */
  DefaultSshKeyName?: string;

  /**
   * <p>The date when the stack was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The default root device type. This value is used by default for all instances in the stack,
   *       but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType | string;

  /**
   * <p>The agent version. This parameter is set to <code>LATEST</code> for auto-update.
   *       or a version number for a fixed agent version.</p>
   */
  AgentVersion?: string;
}

/**
 * <p>Contains the response to a <code>DescribeStacks</code> request.</p>
 */
export interface DescribeStacksResult {
  /**
   * <p>An array of <code>Stack</code> objects that describe the stacks.</p>
   */
  Stacks?: Stack[];
}

export interface DescribeStackSummaryRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * <p>Describes how many instances a stack has for each status.</p>
 */
export interface InstancesCount {
  /**
   * <p>The number of instances in the Assigning state.</p>
   */
  Assigning?: number;

  /**
   * <p>The number of instances with <code>booting</code> status.</p>
   */
  Booting?: number;

  /**
   * <p>The number of instances with <code>connection_lost</code> status.</p>
   */
  ConnectionLost?: number;

  /**
   * <p>The number of instances in the Deregistering state.</p>
   */
  Deregistering?: number;

  /**
   * <p>The number of instances with <code>online</code> status.</p>
   */
  Online?: number;

  /**
   * <p>The number of instances with <code>pending</code> status.</p>
   */
  Pending?: number;

  /**
   * <p>The number of instances with <code>rebooting</code> status.</p>
   */
  Rebooting?: number;

  /**
   * <p>The number of instances in the Registered state.</p>
   */
  Registered?: number;

  /**
   * <p>The number of instances in the Registering state.</p>
   */
  Registering?: number;

  /**
   * <p>The number of instances with <code>requested</code> status.</p>
   */
  Requested?: number;

  /**
   * <p>The number of instances with <code>running_setup</code> status.</p>
   */
  RunningSetup?: number;

  /**
   * <p>The number of instances with <code>setup_failed</code> status.</p>
   */
  SetupFailed?: number;

  /**
   * <p>The number of instances with <code>shutting_down</code> status.</p>
   */
  ShuttingDown?: number;

  /**
   * <p>The number of instances with <code>start_failed</code> status.</p>
   */
  StartFailed?: number;

  /**
   * <p>The number of instances with <code>stop_failed</code> status.</p>
   */
  StopFailed?: number;

  /**
   * <p>The number of instances with <code>stopped</code> status.</p>
   */
  Stopped?: number;

  /**
   * <p>The number of instances with <code>stopping</code> status.</p>
   */
  Stopping?: number;

  /**
   * <p>The number of instances with <code>terminated</code> status.</p>
   */
  Terminated?: number;

  /**
   * <p>The number of instances with <code>terminating</code> status.</p>
   */
  Terminating?: number;

  /**
   * <p>The number of instances in the Unassigning state.</p>
   */
  Unassigning?: number;
}

/**
 * <p>Summarizes the number of layers, instances, and apps in a stack.</p>
 */
export interface StackSummary {
  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The stack name.</p>
   */
  Name?: string;

  /**
   * <p>The stack's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The number of layers.</p>
   */
  LayersCount?: number;

  /**
   * <p>The number of apps.</p>
   */
  AppsCount?: number;

  /**
   * <p>An <code>InstancesCount</code> object with the number of instances in each status.</p>
   */
  InstancesCount?: InstancesCount;
}

/**
 * <p>Contains the response to a <code>DescribeStackSummary</code> request.</p>
 */
export interface DescribeStackSummaryResult {
  /**
   * <p>A <code>StackSummary</code> object that contains the results.</p>
   */
  StackSummary?: StackSummary;
}

export interface DescribeTimeBasedAutoScalingRequest {
  /**
   * <p>An array of instance IDs.</p>
   */
  InstanceIds: string[] | undefined;
}

/**
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
 *             <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code>
 *          </p>
 */
export interface WeeklyAutoScalingSchedule {
  /**
   * <p>The schedule for Monday.</p>
   */
  Monday?: Record<string, string>;

  /**
   * <p>The schedule for Tuesday.</p>
   */
  Tuesday?: Record<string, string>;

  /**
   * <p>The schedule for Wednesday.</p>
   */
  Wednesday?: Record<string, string>;

  /**
   * <p>The schedule for Thursday.</p>
   */
  Thursday?: Record<string, string>;

  /**
   * <p>The schedule for Friday.</p>
   */
  Friday?: Record<string, string>;

  /**
   * <p>The schedule for Saturday.</p>
   */
  Saturday?: Record<string, string>;

  /**
   * <p>The schedule for Sunday.</p>
   */
  Sunday?: Record<string, string>;
}

/**
 * <p>Describes an instance's time-based auto scaling configuration.</p>
 */
export interface TimeBasedAutoScalingConfiguration {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>A <code>WeeklyAutoScalingSchedule</code> object with the instance schedule.</p>
   */
  AutoScalingSchedule?: WeeklyAutoScalingSchedule;
}

/**
 * <p>Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.</p>
 */
export interface DescribeTimeBasedAutoScalingResult {
  /**
   * <p>An array of <code>TimeBasedAutoScalingConfiguration</code> objects that describe the
   *       configuration for the specified instances.</p>
   */
  TimeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfiguration[];
}

export interface DescribeUserProfilesRequest {
  /**
   * <p>An array of IAM or federated user ARNs that identify the users to be described.</p>
   */
  IamUserArns?: string[];
}

/**
 * <p>Describes a user's SSH information.</p>
 */
export interface UserProfile {
  /**
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * <p>The user's name.</p>
   */
  Name?: string;

  /**
   * <p>The user's SSH user name.</p>
   */
  SshUsername?: string;

  /**
   * <p>The user's SSH public key.</p>
   */
  SshPublicKey?: string;

  /**
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Managing User
   *         Permissions</a>.</p>
   */
  AllowSelfManagement?: boolean;
}

/**
 * <p>Contains the response to a <code>DescribeUserProfiles</code> request.</p>
 */
export interface DescribeUserProfilesResult {
  /**
   * <p>A <code>Users</code> object that describes the specified users.</p>
   */
  UserProfiles?: UserProfile[];
}

export interface DescribeVolumesRequest {
  /**
   * <p>The instance ID. If you use this parameter, <code>DescribeVolumes</code> returns descriptions
   *       of the volumes associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A stack ID. The action describes the stack's registered Amazon EBS volumes.</p>
   */
  StackId?: string;

  /**
   * <p>The RAID array ID. If you use this parameter, <code>DescribeVolumes</code> returns
   *       descriptions of the volumes associated with the specified RAID array.</p>
   */
  RaidArrayId?: string;

  /**
   * <p>Am array of volume IDs. If you use this parameter, <code>DescribeVolumes</code> returns
   *       descriptions of the specified volumes. Otherwise, it returns a description of every
   *       volume.</p>
   */
  VolumeIds?: string[];
}

/**
 * <p>Describes an instance's Amazon EBS volume.</p>
 */
export interface Volume {
  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * <p>The Amazon EC2 volume ID.</p>
   */
  Ec2VolumeId?: string;

  /**
   * <p>The volume name.</p>
   */
  Name?: string;

  /**
   * <p>The RAID array ID.</p>
   */
  RaidArrayId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The value returned by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumes.html">DescribeVolumes</a>.</p>
   */
  Status?: string;

  /**
   * <p>The volume size.</p>
   */
  Size?: number;

  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>The volume mount point. For example, "/mnt/disk1".</p>
   */
  MountPoint?: string;

  /**
   * <p>The AWS region. For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * <p>The volume Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
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
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;

  /**
   * <p>Specifies whether an Amazon EBS volume is encrypted. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a>.</p>
   */
  Encrypted?: boolean;
}

/**
 * <p>Contains the response to a <code>DescribeVolumes</code> request.</p>
 */
export interface DescribeVolumesResult {
  /**
   * <p>An array of volume IDs.</p>
   */
  Volumes?: Volume[];
}

export interface DetachElasticLoadBalancerRequest {
  /**
   * <p>The Elastic Load Balancing instance's name.</p>
   */
  ElasticLoadBalancerName: string | undefined;

  /**
   * <p>The ID of the layer that the Elastic Load Balancing instance is attached to.</p>
   */
  LayerId: string | undefined;
}

export interface DisassociateElasticIpRequest {
  /**
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;
}

export interface GetHostnameSuggestionRequest {
  /**
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;
}

/**
 * <p>Contains the response to a <code>GetHostnameSuggestion</code> request.</p>
 */
export interface GetHostnameSuggestionResult {
  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * <p>The generated host name.</p>
   */
  Hostname?: string;
}

export interface GrantAccessRequest {
  /**
   * <p>The instance's AWS OpsWorks Stacks ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The length of time (in minutes) that the grant is valid. When the grant expires at the end of this period, the user will no longer be able to use the credentials to log in. If the user is logged in at the time, he or she automatically will be logged out.</p>
   */
  ValidForInMinutes?: number;
}

/**
 * <p>Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.</p>
 */
export interface TemporaryCredential {
  /**
   * <p>The user name.</p>
   */
  Username?: string;

  /**
   * <p>The password.</p>
   */
  Password?: string;

  /**
   * <p>The length of time (in minutes) that the grant is valid. When the grant expires, at the end of this period, the user will no longer be able to use the credentials to log in. If they are logged in at the time, they will be automatically logged out.</p>
   */
  ValidForInMinutes?: number;

  /**
   * <p>The instance's AWS OpsWorks Stacks ID.</p>
   */
  InstanceId?: string;
}

/**
 * <p>Contains the response to a <code>GrantAccess</code> request.</p>
 */
export interface GrantAccessResult {
  /**
   * <p>A <code>TemporaryCredential</code> object that contains the data needed to log in to the
   *       instance by RDP clients, such as the Microsoft Remote Desktop Connection.</p>
   */
  TemporaryCredential?: TemporaryCredential;
}

/**
 * <p>Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more
 *       information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.</p>
 */
export interface InstanceIdentity {
  /**
   * <p>A JSON document that contains the metadata.</p>
   */
  Document?: string;

  /**
   * <p>A signature that can be used to verify the document's accuracy and authenticity.</p>
   */
  Signature?: string;
}

export interface ListTagsRequest {
  /**
   * <p>The stack or layer's Amazon Resource Number (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Do not use. A validation exception occurs if you add a <code>MaxResults</code> parameter to a <code>ListTagsRequest</code> call.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>Do not use. A validation exception occurs if you add a <code>NextToken</code> parameter to a <code>ListTagsRequest</code> call.
   *       </p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the response to a <code>ListTags</code> request.</p>
 */
export interface ListTagsResult {
  /**
   * <p>A set of key-value pairs that contain tag keys and tag values that are attached to a stack or layer.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>If a paginated request does not return all of the remaining results, this parameter is set to a token that
   *             you can assign to the request object's <code>NextToken</code> parameter to get the next set of results.
   *             If the previous paginated request returned all of the remaining results,
   *             this parameter is set to <code>null</code>.
   *       </p>
   */
  NextToken?: string;
}

export interface RebootInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

export interface RegisterEcsClusterRequest {
  /**
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn: string | undefined;

  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * <p>Contains the response to a <code>RegisterEcsCluster</code> request.</p>
 */
export interface RegisterEcsClusterResult {
  /**
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn?: string;
}

export interface RegisterElasticIpRequest {
  /**
   * <p>The Elastic IP address.</p>
   */
  ElasticIp: string | undefined;

  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * <p>Contains the response to a <code>RegisterElasticIp</code> request.</p>
 */
export interface RegisterElasticIpResult {
  /**
   * <p>The Elastic IP address.</p>
   */
  ElasticIp?: string;
}

export interface RegisterInstanceRequest {
  /**
   * <p>The ID of the stack that the instance is to be registered with.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The instance's hostname.</p>
   */
  Hostname?: string;

  /**
   * <p>The instance's public IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The instance's private IP address.</p>
   */
  PrivateIp?: string;

  /**
   * <p>The instances public RSA key. This key is used to encrypt communication between the instance and the service.</p>
   */
  RsaPublicKey?: string;

  /**
   * <p>The instances public RSA key fingerprint.</p>
   */
  RsaPublicKeyFingerprint?: string;

  /**
   * <p>An InstanceIdentity object that contains the instance's identity.</p>
   */
  InstanceIdentity?: InstanceIdentity;
}

/**
 * <p>Contains the response to a <code>RegisterInstanceResult</code> request.</p>
 */
export interface RegisterInstanceResult {
  /**
   * <p>The registered instance's AWS OpsWorks Stacks ID.</p>
   */
  InstanceId?: string;
}

export interface RegisterRdsDbInstanceRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The Amazon RDS instance's ARN.</p>
   */
  RdsDbInstanceArn: string | undefined;

  /**
   * <p>The database's master user name.</p>
   */
  DbUser: string | undefined;

  /**
   * <p>The database password.</p>
   */
  DbPassword: string | undefined;
}

export interface RegisterVolumeRequest {
  /**
   * <p>The Amazon EBS volume ID.</p>
   */
  Ec2VolumeId?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

/**
 * <p>Contains the response to a <code>RegisterVolume</code> request.</p>
 */
export interface RegisterVolumeResult {
  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;
}

export interface SetLoadBasedAutoScalingRequest {
  /**
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;

  /**
   * <p>Enables load-based auto scaling for the layer.</p>
   */
  Enable?: boolean;

  /**
   * <p>An <code>AutoScalingThresholds</code> object with the upscaling threshold configuration. If
   *       the load exceeds these thresholds for a specified amount of time, AWS OpsWorks Stacks starts a specified
   *       number of instances.</p>
   */
  UpScaling?: AutoScalingThresholds;

  /**
   * <p>An <code>AutoScalingThresholds</code> object with the downscaling threshold configuration. If
   *       the load falls below these thresholds for a specified amount of time, AWS OpsWorks Stacks stops a specified
   *       number of instances.</p>
   */
  DownScaling?: AutoScalingThresholds;
}

export interface SetPermissionRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The user's IAM ARN. This can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;

  /**
   * <p>The user is allowed to use SSH to communicate with the instance.</p>
   */
  AllowSsh?: boolean;

  /**
   * <p>The user is allowed to use <b>sudo</b> to elevate privileges.</p>
   */
  AllowSudo?: boolean;

  /**
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

export interface SetTimeBasedAutoScalingRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>An <code>AutoScalingSchedule</code> with the instance schedule.</p>
   */
  AutoScalingSchedule?: WeeklyAutoScalingSchedule;
}

export interface StartInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

export interface StartStackRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

export interface StopInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Specifies whether to force an instance to stop. If the instance's root device type is <code>ebs</code>, or EBS-backed,
   *             adding the <code>Force</code> parameter to the <code>StopInstances</code> API call disassociates the AWS OpsWorks Stacks instance from EC2, and forces deletion of <i>only</i> the OpsWorks Stacks instance.
   *             You must also delete the formerly-associated instance in EC2 after troubleshooting and replacing the AWS OpsWorks Stacks instance with a new one.</p>
   */
  Force?: boolean;
}

export interface StopStackRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The stack or layer's Amazon Resource Number (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
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

export interface UnassignInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;
}

export interface UnassignVolumeRequest {
  /**
   * <p>The volume ID.</p>
   */
  VolumeId: string | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The stack or layer's Amazon Resource Number (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the keys of tags to be removed from a stack or layer.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateAppRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The app name.</p>
   */
  Name?: string;

  /**
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * <p>The app's data sources.</p>
   */
  DataSources?: DataSource[];

  /**
   * <p>The app type.</p>
   */
  Type?: AppType | string;

  /**
   * <p>A <code>Source</code> object that specifies the app repository.</p>
   */
  AppSource?: Source;

  /**
   * <p>The app's virtual host settings, with multiple domains separated by commas. For example:
   *         <code>'www.example.com, example.com'</code>
   *          </p>
   */
  Domains?: string[];

  /**
   * <p>Whether SSL is enabled for the app.</p>
   */
  EnableSsl?: boolean;

  /**
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: SslConfiguration;

  /**
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
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

export interface UpdateElasticIpRequest {
  /**
   * <p>The IP address for which you want to update the name.</p>
   */
  ElasticIp: string | undefined;

  /**
   * <p>The new name.</p>
   */
  Name?: string;
}

export interface UpdateInstanceRequest {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The instance's layer IDs.</p>
   */
  LayerIds?: string[];

  /**
   * <p>The instance type, such as <code>t2.micro</code>. For a list of supported instance types,
   *       open the stack in the console, choose <b>Instances</b>, and choose <b>+ Instance</b>.
   *       The <b>Size</b> list contains the currently supported types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *         Families and Types</a>. The parameter values that you use to specify the various types are
   *       in the <b>API Name</b> column of the <b>Available Instance Types</b> table.</p>
   */
  InstanceType?: string;

  /**
   * <p>For load-based or time-based instances, the type. Windows stacks can use only time-based instances.</p>
   */
  AutoScalingType?: AutoScalingType | string;

  /**
   * <p>The instance host name.</p>
   */
  Hostname?: string;

  /**
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
   * <p>The ID of the AMI that was used to create the instance. The value of this parameter must be the same AMI ID that the instance is already using.
   *           You cannot apply a new AMI to an instance by running UpdateInstance. UpdateInstance does not work on instances that are using custom AMIs.
   *       </p>
   */
  AmiId?: string;

  /**
   * <p>The instance's Amazon EC2 key name.</p>
   */
  SshKeyName?: string;

  /**
   * <p>The instance architecture. Instance types do not necessarily support both architectures. For
   *       a list of the architectures that are supported by the different instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *         Families and Types</a>.</p>
   */
  Architecture?: Architecture | string;

  /**
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
   * <p>This property cannot be updated.</p>
   */
  EbsOptimized?: boolean;

  /**
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

export interface UpdateLayerRequest {
  /**
   * <p>The layer ID.</p>
   */
  LayerId: string | undefined;

  /**
   * <p>The layer name, which is used by the console.</p>
   */
  Name?: string;

  /**
   * <p>For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters and must be in the following format: /\A[a-z0-9\-\_\.]+\Z/.</p>
   *          <p>The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html">Layer Reference</a>
   *          </p>
   */
  Shortname?: string;

  /**
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Specifies CloudWatch Logs configuration options for the layer. For more information, see <a>CloudWatchLogsLogStream</a>.</p>
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * <p>The ARN of an IAM profile to be used for all of the layer's EC2 instances. For more
   *       information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * <p>A JSON-formatted string containing custom stack configuration and deployment attributes
   *       to be installed on the layer's instances. For more information, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">
   *         Using Custom JSON</a>.
   *     </p>
   */
  CustomJson?: string;

  /**
   * <p>An array containing the layer's custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: string[];

  /**
   * <p>An array of <code>Package</code> objects that describe the layer's packages.</p>
   */
  Packages?: string[];

  /**
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?: VolumeConfiguration[];

  /**
   * <p>Whether to disable auto healing for the layer.</p>
   */
  EnableAutoHealing?: boolean;

  /**
   * <p>Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
   *         address</a> to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignElasticIps?: boolean;

  /**
   * <p>For stacks that are running in a VPC, whether to automatically assign a public IP address to
   *       the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit
   *         a Layer</a>.</p>
   */
  AutoAssignPublicIps?: boolean;

  /**
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.</p>
   */
  CustomRecipes?: Recipes;

  /**
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
   * <p>Whether to use Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * <p></p>
   */
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}

export interface UpdateMyUserProfileRequest {
  /**
   * <p>The user's SSH public key.</p>
   */
  SshPublicKey?: string;
}

export interface UpdateRdsDbInstanceRequest {
  /**
   * <p>The Amazon RDS instance's ARN.</p>
   */
  RdsDbInstanceArn: string | undefined;

  /**
   * <p>The master user name.</p>
   */
  DbUser?: string;

  /**
   * <p>The database password.</p>
   */
  DbPassword?: string;
}

export interface UpdateStackRequest {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The stack's new name.</p>
   */
  Name?: string;

  /**
   * <p>One or more user-defined key-value pairs to be added to the stack attributes.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Do not use this parameter. You cannot update a stack's service role.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances.
   *       For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using
   *       Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn?: string;

  /**
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
   * <p>The stack's default Availability Zone, which must be in the
   *       stack's region. For more
   *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and
   *         Endpoints</a>. If you also specify a value for <code>DefaultSubnetId</code>, the subnet must
   *       be in the same zone. For more information, see <a>CreateStack</a>. </p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * <p>The stack's default VPC subnet ID. This parameter is required if you specify a value for the
   *         <code>VpcId</code> parameter. All instances are launched into this subnet unless you specify
   *       otherwise when you create the instance. If you also specify a value for
   *         <code>DefaultAvailabilityZone</code>, the subnet must be in that zone. For information on
   *       default values and when this parameter is required, see the <code>VpcId</code> parameter
   *       description. </p>
   */
  DefaultSubnetId?: string;

  /**
   * <p>A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration JSON values or to pass data to recipes. The string should be in the following format:</p>
   *          <p>
   *             <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code>
   *          </p>
   *          <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to
   *         Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * <p>The configuration manager. When you update a stack, we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.</p>
   */
  ConfigurationManager?: StackConfigurationManager;

  /**
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the
   *       Berkshelf version on Chef 11.10 stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: ChefConfiguration;

  /**
   * <p>Whether the stack uses custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information,
   *             see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: Source;

  /**
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
   * <p>The default root device type. This value is used by default for all instances in the stack,
   *       but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: RootDeviceType | string;

  /**
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

export interface UpdateUserProfileRequest {
  /**
   * <p>The user IAM ARN. This can also be a federated user's ARN.</p>
   */
  IamUserArn: string | undefined;

  /**
   * <p>The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If
   *       the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example,
   *         <code>my.name</code> will be changed to <code>myname</code>. If you do not specify an SSH
   *       user name, AWS OpsWorks Stacks generates one from the IAM user name. </p>
   */
  SshUsername?: string;

  /**
   * <p>The user's new SSH public key.</p>
   */
  SshPublicKey?: string;

  /**
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Managing User
   *         Permissions</a>.</p>
   */
  AllowSelfManagement?: boolean;
}

export interface UpdateVolumeRequest {
  /**
   * <p>The volume ID.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The new name.</p>
   */
  Name?: string;

  /**
   * <p>The new mount point.</p>
   */
  MountPoint?: string;
}

/**
 * @internal
 */
export const StackConfigurationManagerFilterSensitiveLog = (obj: StackConfigurationManager): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentVersionFilterSensitiveLog = (obj: AgentVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceFilterSensitiveLog = (obj: Source): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceFilterSensitiveLog = (obj: DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentVariableFilterSensitiveLog = (obj: EnvironmentVariable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SslConfigurationFilterSensitiveLog = (obj: SslConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppFilterSensitiveLog = (obj: App): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignInstanceRequestFilterSensitiveLog = (obj: AssignInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignVolumeRequestFilterSensitiveLog = (obj: AssignVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateElasticIpRequestFilterSensitiveLog = (obj: AssociateElasticIpRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachElasticLoadBalancerRequestFilterSensitiveLog = (obj: AttachElasticLoadBalancerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingThresholdsFilterSensitiveLog = (obj: AutoScalingThresholds): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsBlockDeviceFilterSensitiveLog = (obj: EbsBlockDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlockDeviceMappingFilterSensitiveLog = (obj: BlockDeviceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChefConfigurationFilterSensitiveLog = (obj: ChefConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloneStackRequestFilterSensitiveLog = (obj: CloneStackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloneStackResultFilterSensitiveLog = (obj: CloneStackResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsLogStreamFilterSensitiveLog = (obj: CloudWatchLogsLogStream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsConfigurationFilterSensitiveLog = (obj: CloudWatchLogsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommandFilterSensitiveLog = (obj: Command): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppRequestFilterSensitiveLog = (obj: CreateAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppResultFilterSensitiveLog = (obj: CreateAppResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentCommandFilterSensitiveLog = (obj: DeploymentCommand): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeploymentRequestFilterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeploymentResultFilterSensitiveLog = (obj: CreateDeploymentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInstanceRequestFilterSensitiveLog = (obj: CreateInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInstanceResultFilterSensitiveLog = (obj: CreateInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipesFilterSensitiveLog = (obj: Recipes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShutdownEventConfigurationFilterSensitiveLog = (obj: ShutdownEventConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleEventConfigurationFilterSensitiveLog = (obj: LifecycleEventConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeConfigurationFilterSensitiveLog = (obj: VolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLayerRequestFilterSensitiveLog = (obj: CreateLayerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLayerResultFilterSensitiveLog = (obj: CreateLayerResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStackRequestFilterSensitiveLog = (obj: CreateStackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStackResultFilterSensitiveLog = (obj: CreateStackResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserProfileRequestFilterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserProfileResultFilterSensitiveLog = (obj: CreateUserProfileResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppRequestFilterSensitiveLog = (obj: DeleteAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInstanceRequestFilterSensitiveLog = (obj: DeleteInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLayerRequestFilterSensitiveLog = (obj: DeleteLayerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStackRequestFilterSensitiveLog = (obj: DeleteStackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserProfileRequestFilterSensitiveLog = (obj: DeleteUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentFilterSensitiveLog = (obj: Deployment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterEcsClusterRequestFilterSensitiveLog = (obj: DeregisterEcsClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterElasticIpRequestFilterSensitiveLog = (obj: DeregisterElasticIpRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterInstanceRequestFilterSensitiveLog = (obj: DeregisterInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterRdsDbInstanceRequestFilterSensitiveLog = (obj: DeregisterRdsDbInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterVolumeRequestFilterSensitiveLog = (obj: DeregisterVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentVersionsRequestFilterSensitiveLog = (obj: DescribeAgentVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentVersionsResultFilterSensitiveLog = (obj: DescribeAgentVersionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppsRequestFilterSensitiveLog = (obj: DescribeAppsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppsResultFilterSensitiveLog = (obj: DescribeAppsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCommandsRequestFilterSensitiveLog = (obj: DescribeCommandsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCommandsResultFilterSensitiveLog = (obj: DescribeCommandsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeploymentsRequestFilterSensitiveLog = (obj: DescribeDeploymentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeploymentsResultFilterSensitiveLog = (obj: DescribeDeploymentsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEcsClustersRequestFilterSensitiveLog = (obj: DescribeEcsClustersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsClusterFilterSensitiveLog = (obj: EcsCluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEcsClustersResultFilterSensitiveLog = (obj: DescribeEcsClustersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeElasticIpsRequestFilterSensitiveLog = (obj: DescribeElasticIpsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticIpFilterSensitiveLog = (obj: ElasticIp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeElasticIpsResultFilterSensitiveLog = (obj: DescribeElasticIpsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeElasticLoadBalancersRequestFilterSensitiveLog = (
  obj: DescribeElasticLoadBalancersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticLoadBalancerFilterSensitiveLog = (obj: ElasticLoadBalancer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeElasticLoadBalancersResultFilterSensitiveLog = (obj: DescribeElasticLoadBalancersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancesRequestFilterSensitiveLog = (obj: DescribeInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportedOsFilterSensitiveLog = (obj: ReportedOs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancesResultFilterSensitiveLog = (obj: DescribeInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLayersRequestFilterSensitiveLog = (obj: DescribeLayersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LayerFilterSensitiveLog = (obj: Layer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLayersResultFilterSensitiveLog = (obj: DescribeLayersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBasedAutoScalingRequestFilterSensitiveLog = (
  obj: DescribeLoadBasedAutoScalingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBasedAutoScalingConfigurationFilterSensitiveLog = (obj: LoadBasedAutoScalingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBasedAutoScalingResultFilterSensitiveLog = (obj: DescribeLoadBasedAutoScalingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelfUserProfileFilterSensitiveLog = (obj: SelfUserProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMyUserProfileResultFilterSensitiveLog = (obj: DescribeMyUserProfileResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OperatingSystemConfigurationManagerFilterSensitiveLog = (
  obj: OperatingSystemConfigurationManager
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OperatingSystemFilterSensitiveLog = (obj: OperatingSystem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOperatingSystemsResponseFilterSensitiveLog = (obj: DescribeOperatingSystemsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePermissionsRequestFilterSensitiveLog = (obj: DescribePermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PermissionFilterSensitiveLog = (obj: Permission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePermissionsResultFilterSensitiveLog = (obj: DescribePermissionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRaidArraysRequestFilterSensitiveLog = (obj: DescribeRaidArraysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RaidArrayFilterSensitiveLog = (obj: RaidArray): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRaidArraysResultFilterSensitiveLog = (obj: DescribeRaidArraysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRdsDbInstancesRequestFilterSensitiveLog = (obj: DescribeRdsDbInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RdsDbInstanceFilterSensitiveLog = (obj: RdsDbInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRdsDbInstancesResultFilterSensitiveLog = (obj: DescribeRdsDbInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServiceErrorsRequestFilterSensitiveLog = (obj: DescribeServiceErrorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceErrorFilterSensitiveLog = (obj: ServiceError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServiceErrorsResultFilterSensitiveLog = (obj: DescribeServiceErrorsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStackProvisioningParametersRequestFilterSensitiveLog = (
  obj: DescribeStackProvisioningParametersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStackProvisioningParametersResultFilterSensitiveLog = (
  obj: DescribeStackProvisioningParametersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStacksRequestFilterSensitiveLog = (obj: DescribeStacksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StackFilterSensitiveLog = (obj: Stack): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStacksResultFilterSensitiveLog = (obj: DescribeStacksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStackSummaryRequestFilterSensitiveLog = (obj: DescribeStackSummaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstancesCountFilterSensitiveLog = (obj: InstancesCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StackSummaryFilterSensitiveLog = (obj: StackSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStackSummaryResultFilterSensitiveLog = (obj: DescribeStackSummaryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTimeBasedAutoScalingRequestFilterSensitiveLog = (
  obj: DescribeTimeBasedAutoScalingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WeeklyAutoScalingScheduleFilterSensitiveLog = (obj: WeeklyAutoScalingSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeBasedAutoScalingConfigurationFilterSensitiveLog = (obj: TimeBasedAutoScalingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTimeBasedAutoScalingResultFilterSensitiveLog = (obj: DescribeTimeBasedAutoScalingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserProfilesRequestFilterSensitiveLog = (obj: DescribeUserProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserProfileFilterSensitiveLog = (obj: UserProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserProfilesResultFilterSensitiveLog = (obj: DescribeUserProfilesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesRequestFilterSensitiveLog = (obj: DescribeVolumesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeFilterSensitiveLog = (obj: Volume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesResultFilterSensitiveLog = (obj: DescribeVolumesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachElasticLoadBalancerRequestFilterSensitiveLog = (obj: DetachElasticLoadBalancerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateElasticIpRequestFilterSensitiveLog = (obj: DisassociateElasticIpRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHostnameSuggestionRequestFilterSensitiveLog = (obj: GetHostnameSuggestionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHostnameSuggestionResultFilterSensitiveLog = (obj: GetHostnameSuggestionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantAccessRequestFilterSensitiveLog = (obj: GrantAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemporaryCredentialFilterSensitiveLog = (obj: TemporaryCredential): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantAccessResultFilterSensitiveLog = (obj: GrantAccessResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceIdentityFilterSensitiveLog = (obj: InstanceIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsRequestFilterSensitiveLog = (obj: ListTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsResultFilterSensitiveLog = (obj: ListTagsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootInstanceRequestFilterSensitiveLog = (obj: RebootInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterEcsClusterRequestFilterSensitiveLog = (obj: RegisterEcsClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterEcsClusterResultFilterSensitiveLog = (obj: RegisterEcsClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterElasticIpRequestFilterSensitiveLog = (obj: RegisterElasticIpRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterElasticIpResultFilterSensitiveLog = (obj: RegisterElasticIpResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterInstanceRequestFilterSensitiveLog = (obj: RegisterInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterInstanceResultFilterSensitiveLog = (obj: RegisterInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterRdsDbInstanceRequestFilterSensitiveLog = (obj: RegisterRdsDbInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterVolumeRequestFilterSensitiveLog = (obj: RegisterVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterVolumeResultFilterSensitiveLog = (obj: RegisterVolumeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetLoadBasedAutoScalingRequestFilterSensitiveLog = (obj: SetLoadBasedAutoScalingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetPermissionRequestFilterSensitiveLog = (obj: SetPermissionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetTimeBasedAutoScalingRequestFilterSensitiveLog = (obj: SetTimeBasedAutoScalingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInstanceRequestFilterSensitiveLog = (obj: StartInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStackRequestFilterSensitiveLog = (obj: StartStackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInstanceRequestFilterSensitiveLog = (obj: StopInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopStackRequestFilterSensitiveLog = (obj: StopStackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignInstanceRequestFilterSensitiveLog = (obj: UnassignInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignVolumeRequestFilterSensitiveLog = (obj: UnassignVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppRequestFilterSensitiveLog = (obj: UpdateAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateElasticIpRequestFilterSensitiveLog = (obj: UpdateElasticIpRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInstanceRequestFilterSensitiveLog = (obj: UpdateInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLayerRequestFilterSensitiveLog = (obj: UpdateLayerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMyUserProfileRequestFilterSensitiveLog = (obj: UpdateMyUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRdsDbInstanceRequestFilterSensitiveLog = (obj: UpdateRdsDbInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStackRequestFilterSensitiveLog = (obj: UpdateStackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserProfileRequestFilterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVolumeRequestFilterSensitiveLog = (obj: UpdateVolumeRequest): any => ({
  ...obj,
});
