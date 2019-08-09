import {
  _LaunchTemplateIamInstanceProfileSpecificationRequest,
  _UnmarshalledLaunchTemplateIamInstanceProfileSpecificationRequest
} from "./_LaunchTemplateIamInstanceProfileSpecificationRequest";
import {
  _LaunchTemplateBlockDeviceMappingRequest,
  _UnmarshalledLaunchTemplateBlockDeviceMappingRequest
} from "./_LaunchTemplateBlockDeviceMappingRequest";
import {
  _LaunchTemplateInstanceNetworkInterfaceSpecificationRequest,
  _UnmarshalledLaunchTemplateInstanceNetworkInterfaceSpecificationRequest
} from "./_LaunchTemplateInstanceNetworkInterfaceSpecificationRequest";
import {
  _LaunchTemplatesMonitoringRequest,
  _UnmarshalledLaunchTemplatesMonitoringRequest
} from "./_LaunchTemplatesMonitoringRequest";
import {
  _LaunchTemplatePlacementRequest,
  _UnmarshalledLaunchTemplatePlacementRequest
} from "./_LaunchTemplatePlacementRequest";
import {
  _LaunchTemplateTagSpecificationRequest,
  _UnmarshalledLaunchTemplateTagSpecificationRequest
} from "./_LaunchTemplateTagSpecificationRequest";
import {
  _ElasticGpuSpecification,
  _UnmarshalledElasticGpuSpecification
} from "./_ElasticGpuSpecification";
import {
  _LaunchTemplateElasticInferenceAccelerator,
  _UnmarshalledLaunchTemplateElasticInferenceAccelerator
} from "./_LaunchTemplateElasticInferenceAccelerator";
import {
  _LaunchTemplateInstanceMarketOptionsRequest,
  _UnmarshalledLaunchTemplateInstanceMarketOptionsRequest
} from "./_LaunchTemplateInstanceMarketOptionsRequest";
import {
  _CreditSpecificationRequest,
  _UnmarshalledCreditSpecificationRequest
} from "./_CreditSpecificationRequest";
import {
  _LaunchTemplateCpuOptionsRequest,
  _UnmarshalledLaunchTemplateCpuOptionsRequest
} from "./_LaunchTemplateCpuOptionsRequest";
import {
  _LaunchTemplateCapacityReservationSpecificationRequest,
  _UnmarshalledLaunchTemplateCapacityReservationSpecificationRequest
} from "./_LaunchTemplateCapacityReservationSpecificationRequest";
import {
  _LaunchTemplateLicenseConfigurationRequest,
  _UnmarshalledLaunchTemplateLicenseConfigurationRequest
} from "./_LaunchTemplateLicenseConfigurationRequest";
import {
  _LaunchTemplateHibernationOptionsRequest,
  _UnmarshalledLaunchTemplateHibernationOptionsRequest
} from "./_LaunchTemplateHibernationOptionsRequest";

/**
 * <p>The information to include in the launch template.</p>
 */
export interface _RequestLaunchTemplateData {
  /**
   * <p>The ID of the kernel.</p> <important> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided Kernels</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * <p>The block device mapping.</p> <important> <p>Supplying both a snapshot ID and an encryption value as arguments for block-device mapping results in an error. This is because only blank volumes can be encrypted on start, and these are not created from a snapshot. If a snapshot is the basis for the volume, it contains data by definition and its encryption status cannot be changed using this action.</p> </important>
   */
  BlockDeviceMappings?:
    | Array<_LaunchTemplateBlockDeviceMappingRequest>
    | Iterable<_LaunchTemplateBlockDeviceMappingRequest>;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?:
    | Array<_LaunchTemplateInstanceNetworkInterfaceSpecificationRequest>
    | Iterable<_LaunchTemplateInstanceNetworkInterfaceSpecificationRequest>;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
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
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p> <important> <p>If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.</p> </important>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _LaunchTemplatesMonitoringRequest;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: _LaunchTemplatePlacementRequest;

  /**
   * <p>The ID of the RAM disk.</p> <important> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided Kernels</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
   */
  RamDiskId?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can terminate the instance by running the shutdown command from the instance.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</p> <p>Default: <code>stop</code> </p>
   */
  InstanceInitiatedShutdownBehavior?: "stop" | "terminate" | string;

  /**
   * <p>The Base64-encoded user data to make available to the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Running Commands on Your Linux Instance at Launch</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html#instancedata-add-user-data">Adding User Data</a> (Windows).</p>
   */
  UserData?: string;

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and volumes on launch. The specified tags are applied to all instances or volumes that are created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?:
    | Array<_LaunchTemplateTagSpecificationRequest>
    | Iterable<_LaunchTemplateTagSpecificationRequest>;

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   */
  ElasticGpuSpecifications?:
    | Array<_ElasticGpuSpecification>
    | Iterable<_ElasticGpuSpecification>;

  /**
   * <p> The elastic inference accelerator for the instance. </p>
   */
  ElasticInferenceAccelerators?:
    | Array<_LaunchTemplateElasticInferenceAccelerator>
    | Iterable<_LaunchTemplateElasticInferenceAccelerator>;

  /**
   * <p>One or more security group IDs. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>. You cannot specify both a security group ID and security name in the same request.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>[EC2-Classic, default VPC] One or more security group names. For a nondefault VPC, you must use security group IDs instead. You cannot specify both a security group ID and security name in the same request.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: _LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the instance. Valid for T2 or T3 instances only.</p>
   */
  CreditSpecification?: _CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  CpuOptions?: _LaunchTemplateCpuOptionsRequest;

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to <code>open</code>, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: _LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?:
    | Array<_LaunchTemplateLicenseConfigurationRequest>
    | Iterable<_LaunchTemplateLicenseConfigurationRequest>;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. Hibernation is currently supported only for Amazon Linux. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: _LaunchTemplateHibernationOptionsRequest;
}

export interface _UnmarshalledRequestLaunchTemplateData
  extends _RequestLaunchTemplateData {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _UnmarshalledLaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * <p>The block device mapping.</p> <important> <p>Supplying both a snapshot ID and an encryption value as arguments for block-device mapping results in an error. This is because only blank volumes can be encrypted on start, and these are not created from a snapshot. If a snapshot is the basis for the volume, it contains data by definition and its encryption status cannot be changed using this action.</p> </important>
   */
  BlockDeviceMappings?: Array<
    _UnmarshalledLaunchTemplateBlockDeviceMappingRequest
  >;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: Array<
    _UnmarshalledLaunchTemplateInstanceNetworkInterfaceSpecificationRequest
  >;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _UnmarshalledLaunchTemplatesMonitoringRequest;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: _UnmarshalledLaunchTemplatePlacementRequest;

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and volumes on launch. The specified tags are applied to all instances or volumes that are created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: Array<_UnmarshalledLaunchTemplateTagSpecificationRequest>;

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   */
  ElasticGpuSpecifications?: Array<_UnmarshalledElasticGpuSpecification>;

  /**
   * <p> The elastic inference accelerator for the instance. </p>
   */
  ElasticInferenceAccelerators?: Array<
    _UnmarshalledLaunchTemplateElasticInferenceAccelerator
  >;

  /**
   * <p>One or more security group IDs. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>. You cannot specify both a security group ID and security name in the same request.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>[EC2-Classic, default VPC] One or more security group names. For a nondefault VPC, you must use security group IDs instead. You cannot specify both a security group ID and security name in the same request.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: _UnmarshalledLaunchTemplateInstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the instance. Valid for T2 or T3 instances only.</p>
   */
  CreditSpecification?: _UnmarshalledCreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  CpuOptions?: _UnmarshalledLaunchTemplateCpuOptionsRequest;

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to <code>open</code>, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: _UnmarshalledLaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: Array<
    _UnmarshalledLaunchTemplateLicenseConfigurationRequest
  >;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. Hibernation is currently supported only for Amazon Linux. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: _UnmarshalledLaunchTemplateHibernationOptionsRequest;
}
