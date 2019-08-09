import {
  _LaunchTemplateIamInstanceProfileSpecification,
  _UnmarshalledLaunchTemplateIamInstanceProfileSpecification
} from "./_LaunchTemplateIamInstanceProfileSpecification";
import {
  _LaunchTemplateBlockDeviceMapping,
  _UnmarshalledLaunchTemplateBlockDeviceMapping
} from "./_LaunchTemplateBlockDeviceMapping";
import {
  _LaunchTemplateInstanceNetworkInterfaceSpecification,
  _UnmarshalledLaunchTemplateInstanceNetworkInterfaceSpecification
} from "./_LaunchTemplateInstanceNetworkInterfaceSpecification";
import {
  _LaunchTemplatesMonitoring,
  _UnmarshalledLaunchTemplatesMonitoring
} from "./_LaunchTemplatesMonitoring";
import {
  _LaunchTemplatePlacement,
  _UnmarshalledLaunchTemplatePlacement
} from "./_LaunchTemplatePlacement";
import {
  _LaunchTemplateTagSpecification,
  _UnmarshalledLaunchTemplateTagSpecification
} from "./_LaunchTemplateTagSpecification";
import {
  _ElasticGpuSpecificationResponse,
  _UnmarshalledElasticGpuSpecificationResponse
} from "./_ElasticGpuSpecificationResponse";
import {
  _LaunchTemplateElasticInferenceAcceleratorResponse,
  _UnmarshalledLaunchTemplateElasticInferenceAcceleratorResponse
} from "./_LaunchTemplateElasticInferenceAcceleratorResponse";
import {
  _LaunchTemplateInstanceMarketOptions,
  _UnmarshalledLaunchTemplateInstanceMarketOptions
} from "./_LaunchTemplateInstanceMarketOptions";
import {
  _CreditSpecification,
  _UnmarshalledCreditSpecification
} from "./_CreditSpecification";
import {
  _LaunchTemplateCpuOptions,
  _UnmarshalledLaunchTemplateCpuOptions
} from "./_LaunchTemplateCpuOptions";
import {
  _LaunchTemplateCapacityReservationSpecificationResponse,
  _UnmarshalledLaunchTemplateCapacityReservationSpecificationResponse
} from "./_LaunchTemplateCapacityReservationSpecificationResponse";
import {
  _LaunchTemplateLicenseConfiguration,
  _UnmarshalledLaunchTemplateLicenseConfiguration
} from "./_LaunchTemplateLicenseConfiguration";
import {
  _LaunchTemplateHibernationOptions,
  _UnmarshalledLaunchTemplateHibernationOptions
} from "./_LaunchTemplateHibernationOptions";

/**
 * <p>The information for a launch template. </p>
 */
export interface _ResponseLaunchTemplateData {
  /**
   * <p>The ID of the kernel, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _LaunchTemplateIamInstanceProfileSpecification;

  /**
   * <p>The block device mappings.</p>
   */
  BlockDeviceMappings?:
    | Array<_LaunchTemplateBlockDeviceMapping>
    | Iterable<_LaunchTemplateBlockDeviceMapping>;

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?:
    | Array<_LaunchTemplateInstanceNetworkInterfaceSpecification>
    | Iterable<_LaunchTemplateInstanceNetworkInterfaceSpecification>;

  /**
   * <p>The ID of the AMI that was used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
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
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _LaunchTemplatesMonitoring;

  /**
   * <p>The placement of the instance.</p>
   */
  Placement?: _LaunchTemplatePlacement;

  /**
   * <p>The ID of the RAM disk, if applicable.</p>
   */
  RamDiskId?: string;

  /**
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using the Amazon EC2 console, command line tool, or API.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: "stop" | "terminate" | string;

  /**
   * <p>The user data for the instance. </p>
   */
  UserData?: string;

  /**
   * <p>The tags.</p>
   */
  TagSpecifications?:
    | Array<_LaunchTemplateTagSpecification>
    | Iterable<_LaunchTemplateTagSpecification>;

  /**
   * <p>The elastic GPU specification.</p>
   */
  ElasticGpuSpecifications?:
    | Array<_ElasticGpuSpecificationResponse>
    | Iterable<_ElasticGpuSpecificationResponse>;

  /**
   * <p> The elastic inference accelerator for the instance. </p>
   */
  ElasticInferenceAccelerators?:
    | Array<_LaunchTemplateElasticInferenceAcceleratorResponse>
    | Iterable<_LaunchTemplateElasticInferenceAcceleratorResponse>;

  /**
   * <p>The security group IDs.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The security group names.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: _LaunchTemplateInstanceMarketOptions;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   */
  CreditSpecification?: _CreditSpecification;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  CpuOptions?: _LaunchTemplateCpuOptions;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: _LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?:
    | Array<_LaunchTemplateLicenseConfiguration>
    | Iterable<_LaunchTemplateLicenseConfiguration>;

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: _LaunchTemplateHibernationOptions;
}

export interface _UnmarshalledResponseLaunchTemplateData
  extends _ResponseLaunchTemplateData {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _UnmarshalledLaunchTemplateIamInstanceProfileSpecification;

  /**
   * <p>The block device mappings.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledLaunchTemplateBlockDeviceMapping>;

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: Array<
    _UnmarshalledLaunchTemplateInstanceNetworkInterfaceSpecification
  >;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _UnmarshalledLaunchTemplatesMonitoring;

  /**
   * <p>The placement of the instance.</p>
   */
  Placement?: _UnmarshalledLaunchTemplatePlacement;

  /**
   * <p>The tags.</p>
   */
  TagSpecifications?: Array<_UnmarshalledLaunchTemplateTagSpecification>;

  /**
   * <p>The elastic GPU specification.</p>
   */
  ElasticGpuSpecifications?: Array<
    _UnmarshalledElasticGpuSpecificationResponse
  >;

  /**
   * <p> The elastic inference accelerator for the instance. </p>
   */
  ElasticInferenceAccelerators?: Array<
    _UnmarshalledLaunchTemplateElasticInferenceAcceleratorResponse
  >;

  /**
   * <p>The security group IDs.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>The security group names.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: _UnmarshalledLaunchTemplateInstanceMarketOptions;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   */
  CreditSpecification?: _UnmarshalledCreditSpecification;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  CpuOptions?: _UnmarshalledLaunchTemplateCpuOptions;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: _UnmarshalledLaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: Array<
    _UnmarshalledLaunchTemplateLicenseConfiguration
  >;

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: _UnmarshalledLaunchTemplateHibernationOptions;
}
