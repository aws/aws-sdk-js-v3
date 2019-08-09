import { _BlockDeviceMapping } from "./_BlockDeviceMapping";
import { _InstanceIpv6Address } from "./_InstanceIpv6Address";
import { _RunInstancesMonitoringEnabled } from "./_RunInstancesMonitoringEnabled";
import { _Placement } from "./_Placement";
import { _IamInstanceProfileSpecification } from "./_IamInstanceProfileSpecification";
import { _InstanceNetworkInterfaceSpecification } from "./_InstanceNetworkInterfaceSpecification";
import { _ElasticGpuSpecification } from "./_ElasticGpuSpecification";
import { _ElasticInferenceAccelerator } from "./_ElasticInferenceAccelerator";
import { _TagSpecification } from "./_TagSpecification";
import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { _InstanceMarketOptionsRequest } from "./_InstanceMarketOptionsRequest";
import { _CreditSpecificationRequest } from "./_CreditSpecificationRequest";
import { _CpuOptionsRequest } from "./_CpuOptionsRequest";
import { _CapacityReservationSpecification } from "./_CapacityReservationSpecification";
import { _HibernationOptionsRequest } from "./_HibernationOptionsRequest";
import { _LicenseConfigurationRequest } from "./_LicenseConfigurationRequest";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RunInstancesInput shape
 */
export interface RunInstancesInput {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Default: <code>m1.small</code> </p>
   */
  InstanceType?:
    | "t1.micro"
    | "t2.nano"
    | "t2.micro"
    | "t2.small"
    | "t2.medium"
    | "t2.large"
    | "t2.xlarge"
    | "t2.2xlarge"
    | "t3.nano"
    | "t3.micro"
    | "t3.small"
    | "t3.medium"
    | "t3.large"
    | "t3.xlarge"
    | "t3.2xlarge"
    | "t3a.nano"
    | "t3a.micro"
    | "t3a.small"
    | "t3a.medium"
    | "t3a.large"
    | "t3a.xlarge"
    | "t3a.2xlarge"
    | "m1.small"
    | "m1.medium"
    | "m1.large"
    | "m1.xlarge"
    | "m3.medium"
    | "m3.large"
    | "m3.xlarge"
    | "m3.2xlarge"
    | "m4.large"
    | "m4.xlarge"
    | "m4.2xlarge"
    | "m4.4xlarge"
    | "m4.10xlarge"
    | "m4.16xlarge"
    | "m2.xlarge"
    | "m2.2xlarge"
    | "m2.4xlarge"
    | "cr1.8xlarge"
    | "r3.large"
    | "r3.xlarge"
    | "r3.2xlarge"
    | "r3.4xlarge"
    | "r3.8xlarge"
    | "r4.large"
    | "r4.xlarge"
    | "r4.2xlarge"
    | "r4.4xlarge"
    | "r4.8xlarge"
    | "r4.16xlarge"
    | "r5.large"
    | "r5.xlarge"
    | "r5.2xlarge"
    | "r5.4xlarge"
    | "r5.8xlarge"
    | "r5.12xlarge"
    | "r5.16xlarge"
    | "r5.24xlarge"
    | "r5.metal"
    | "r5a.large"
    | "r5a.xlarge"
    | "r5a.2xlarge"
    | "r5a.4xlarge"
    | "r5a.8xlarge"
    | "r5a.12xlarge"
    | "r5a.16xlarge"
    | "r5a.24xlarge"
    | "r5d.large"
    | "r5d.xlarge"
    | "r5d.2xlarge"
    | "r5d.4xlarge"
    | "r5d.8xlarge"
    | "r5d.12xlarge"
    | "r5d.16xlarge"
    | "r5d.24xlarge"
    | "r5d.metal"
    | "r5ad.large"
    | "r5ad.xlarge"
    | "r5ad.2xlarge"
    | "r5ad.4xlarge"
    | "r5ad.8xlarge"
    | "r5ad.12xlarge"
    | "r5ad.16xlarge"
    | "r5ad.24xlarge"
    | "x1.16xlarge"
    | "x1.32xlarge"
    | "x1e.xlarge"
    | "x1e.2xlarge"
    | "x1e.4xlarge"
    | "x1e.8xlarge"
    | "x1e.16xlarge"
    | "x1e.32xlarge"
    | "i2.xlarge"
    | "i2.2xlarge"
    | "i2.4xlarge"
    | "i2.8xlarge"
    | "i3.large"
    | "i3.xlarge"
    | "i3.2xlarge"
    | "i3.4xlarge"
    | "i3.8xlarge"
    | "i3.16xlarge"
    | "i3.metal"
    | "i3en.large"
    | "i3en.xlarge"
    | "i3en.2xlarge"
    | "i3en.3xlarge"
    | "i3en.6xlarge"
    | "i3en.12xlarge"
    | "i3en.24xlarge"
    | "hi1.4xlarge"
    | "hs1.8xlarge"
    | "c1.medium"
    | "c1.xlarge"
    | "c3.large"
    | "c3.xlarge"
    | "c3.2xlarge"
    | "c3.4xlarge"
    | "c3.8xlarge"
    | "c4.large"
    | "c4.xlarge"
    | "c4.2xlarge"
    | "c4.4xlarge"
    | "c4.8xlarge"
    | "c5.large"
    | "c5.xlarge"
    | "c5.2xlarge"
    | "c5.4xlarge"
    | "c5.9xlarge"
    | "c5.12xlarge"
    | "c5.18xlarge"
    | "c5.24xlarge"
    | "c5.metal"
    | "c5d.large"
    | "c5d.xlarge"
    | "c5d.2xlarge"
    | "c5d.4xlarge"
    | "c5d.9xlarge"
    | "c5d.18xlarge"
    | "c5n.large"
    | "c5n.xlarge"
    | "c5n.2xlarge"
    | "c5n.4xlarge"
    | "c5n.9xlarge"
    | "c5n.18xlarge"
    | "cc1.4xlarge"
    | "cc2.8xlarge"
    | "g2.2xlarge"
    | "g2.8xlarge"
    | "g3.4xlarge"
    | "g3.8xlarge"
    | "g3.16xlarge"
    | "g3s.xlarge"
    | "cg1.4xlarge"
    | "p2.xlarge"
    | "p2.8xlarge"
    | "p2.16xlarge"
    | "p3.2xlarge"
    | "p3.8xlarge"
    | "p3.16xlarge"
    | "p3dn.24xlarge"
    | "d2.xlarge"
    | "d2.2xlarge"
    | "d2.4xlarge"
    | "d2.8xlarge"
    | "f1.2xlarge"
    | "f1.4xlarge"
    | "f1.16xlarge"
    | "m5.large"
    | "m5.xlarge"
    | "m5.2xlarge"
    | "m5.4xlarge"
    | "m5.8xlarge"
    | "m5.12xlarge"
    | "m5.16xlarge"
    | "m5.24xlarge"
    | "m5.metal"
    | "m5a.large"
    | "m5a.xlarge"
    | "m5a.2xlarge"
    | "m5a.4xlarge"
    | "m5a.8xlarge"
    | "m5a.12xlarge"
    | "m5a.16xlarge"
    | "m5a.24xlarge"
    | "m5d.large"
    | "m5d.xlarge"
    | "m5d.2xlarge"
    | "m5d.4xlarge"
    | "m5d.8xlarge"
    | "m5d.12xlarge"
    | "m5d.16xlarge"
    | "m5d.24xlarge"
    | "m5d.metal"
    | "m5ad.large"
    | "m5ad.xlarge"
    | "m5ad.2xlarge"
    | "m5ad.4xlarge"
    | "m5ad.8xlarge"
    | "m5ad.12xlarge"
    | "m5ad.16xlarge"
    | "m5ad.24xlarge"
    | "h1.2xlarge"
    | "h1.4xlarge"
    | "h1.8xlarge"
    | "h1.16xlarge"
    | "z1d.large"
    | "z1d.xlarge"
    | "z1d.2xlarge"
    | "z1d.3xlarge"
    | "z1d.6xlarge"
    | "z1d.12xlarge"
    | "z1d.metal"
    | "u-6tb1.metal"
    | "u-9tb1.metal"
    | "u-12tb1.metal"
    | "a1.medium"
    | "a1.large"
    | "a1.xlarge"
    | "a1.2xlarge"
    | "a1.4xlarge"
    | string;

  /**
   * <p>[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch.</p> <p>You cannot specify this option and the network interfaces option in the same request.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.</p> <p>You cannot specify this option and the network interfaces option in the same request.</p>
   */
  Ipv6Addresses?: Array<_InstanceIpv6Address> | Iterable<_InstanceIpv6Address>;

  /**
   * <p>The ID of the kernel.</p> <important> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html"> PV-GRUB</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p> <important> <p>If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.</p> </important>
   */
  KeyName?: string;

  /**
   * <p>The maximum number of instances to launch. If you specify more instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible number of instances above <code>MinCount</code>.</p> <p>Constraints: Between 1 and the maximum number you're allowed for the specified instance type. For more information about the default limits, and how to request an increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I run in Amazon EC2</a> in the Amazon EC2 FAQ.</p>
   */
  MaxCount: number;

  /**
   * <p>The minimum number of instances to launch. If you specify a minimum that is more instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2 launches no instances.</p> <p>Constraints: Between 1 and the maximum number you're allowed for the specified instance type. For more information about the default limits, and how to request an increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I run in Amazon EC2</a> in the Amazon EC2 General FAQ.</p>
   */
  MinCount: number;

  /**
   * <p>Specifies whether detailed monitoring is enabled for the instance.</p>
   */
  Monitoring?: _RunInstancesMonitoringEnabled;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: _Placement;

  /**
   * <p>The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the AWS Resource Center and search for the kernel ID.</p> <important> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html"> PV-GRUB</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p> <p>If you specify a network interface, you must specify any security groups as part of the network interface.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>[EC2-Classic, default VPC] The names of the security groups. For a nondefault VPC, you must use security group IDs instead.</p> <p>If you specify a network interface, you must specify any security groups as part of the network interface.</p> <p>Default: Amazon EC2 uses the default security group.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>[EC2-VPC] The ID of the subnet to launch the instance into.</p> <p>If you specify a network interface, you must specify any subnets as part of the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The user data to make available to the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Running Commands on Your Linux Instance at Launch</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html#instancedata-add-user-data">Adding User Data</a> (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p> <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can terminate the instance by running the shutdown command from the instance.</p> <p>Default: <code>false</code> </p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p> <p>Default: <code>false</code> </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _IamInstanceProfileSpecification;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</p> <p>Default: <code>stop</code> </p>
   */
  InstanceInitiatedShutdownBehavior?: "stop" | "terminate" | string;

  /**
   * <p>The network interfaces to associate with the instance. If you specify a network interface, you must specify any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?:
    | Array<_InstanceNetworkInterfaceSpecification>
    | Iterable<_InstanceNetworkInterfaceSpecification>;

  /**
   * <p>[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.</p> <p>Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request.</p> <p>You cannot specify this option and the network interfaces option in the same request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>An elastic GPU to associate with the instance. An Elastic GPU is a GPU resource that you can attach to your Windows instance to accelerate the graphics performance of your applications. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html"> Amazon EC2 Elastic GPUs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ElasticGpuSpecification?:
    | Array<_ElasticGpuSpecification>
    | Iterable<_ElasticGpuSpecification>;

  /**
   * <p>An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads.</p>
   */
  ElasticInferenceAccelerators?:
    | Array<_ElasticInferenceAccelerator>
    | Iterable<_ElasticInferenceAccelerator>;

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and volumes on launch. The specified tags are applied to all instances or volumes that are created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

  /**
   * <p>The launch template to use to launch the instances. Any parameters that you specify in <a>RunInstances</a> override the same parameters in the launch template. You can specify either the name or ID of a launch template, but not both.</p>
   */
  LaunchTemplate?: _LaunchTemplateSpecification;

  /**
   * <p>The market (purchasing) option for the instances.</p> <p>For <a>RunInstances</a>, persistent Spot Instance requests are only supported when <b>InstanceInterruptionBehavior</b> is set to either <code>hibernate</code> or <code>stop</code>.</p>
   */
  InstanceMarketOptions?: _InstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the T2 or T3 instance. Valid values are <code>standard</code> and <code>unlimited</code>. To change this attribute after launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html"> ModifyInstanceCreditSpecification</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable Performance Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3 instances)</p>
   */
  CreditSpecification?: _CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  CpuOptions?: _CpuOptionsRequest;

  /**
   * <p>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to <code>open</code>, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: _CapacityReservationSpecification;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: _HibernationOptionsRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?:
    | Array<_LicenseConfigurationRequest>
    | Iterable<_LicenseConfigurationRequest>;

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
