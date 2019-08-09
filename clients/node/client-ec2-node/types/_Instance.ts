import { _Monitoring, _UnmarshalledMonitoring } from "./_Monitoring";
import { _Placement, _UnmarshalledPlacement } from "./_Placement";
import { _ProductCode, _UnmarshalledProductCode } from "./_ProductCode";
import { _InstanceState, _UnmarshalledInstanceState } from "./_InstanceState";
import {
  _InstanceBlockDeviceMapping,
  _UnmarshalledInstanceBlockDeviceMapping
} from "./_InstanceBlockDeviceMapping";
import {
  _IamInstanceProfile,
  _UnmarshalledIamInstanceProfile
} from "./_IamInstanceProfile";
import {
  _ElasticGpuAssociation,
  _UnmarshalledElasticGpuAssociation
} from "./_ElasticGpuAssociation";
import {
  _ElasticInferenceAcceleratorAssociation,
  _UnmarshalledElasticInferenceAcceleratorAssociation
} from "./_ElasticInferenceAcceleratorAssociation";
import {
  _InstanceNetworkInterface,
  _UnmarshalledInstanceNetworkInterface
} from "./_InstanceNetworkInterface";
import {
  _GroupIdentifier,
  _UnmarshalledGroupIdentifier
} from "./_GroupIdentifier";
import { _StateReason, _UnmarshalledStateReason } from "./_StateReason";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _CpuOptions, _UnmarshalledCpuOptions } from "./_CpuOptions";
import {
  _CapacityReservationSpecificationResponse,
  _UnmarshalledCapacityReservationSpecificationResponse
} from "./_CapacityReservationSpecificationResponse";
import {
  _HibernationOptions,
  _UnmarshalledHibernationOptions
} from "./_HibernationOptions";
import {
  _LicenseConfiguration,
  _UnmarshalledLicenseConfiguration
} from "./_LicenseConfiguration";

/**
 * <p>Describes an instance.</p>
 */
export interface _Instance {
  /**
   * <p>The AMI launch index, which can be used to find this instance in the launch group.</p>
   */
  AmiLaunchIndex?: number;

  /**
   * <p>The ID of the AMI used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

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
   * <p>The kernel associated with this instance, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair, if this instance was launched with an associated key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The time the instance was launched.</p>
   */
  LaunchTime?: Date | string | number;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _Monitoring;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: _Placement;

  /**
   * <p>The value is <code>Windows</code> for Windows instances; otherwise blank.</p>
   */
  Platform?: "Windows" | string;

  /**
   * <p>(IPv4 only) The private DNS hostname name assigned to the instance. This DNS hostname can only be used inside the Amazon EC2 network. This name is not available until the instance enters the <code>running</code> state. </p> <p>[EC2-VPC] The Amazon-provided DNS server resolves Amazon-provided private DNS hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not using the Amazon-provided DNS server in your VPC, your custom domain name servers must resolve the hostname as appropriate.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address assigned to the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The product codes attached to this instance, if applicable.</p>
   */
  ProductCodes?: Array<_ProductCode> | Iterable<_ProductCode>;

  /**
   * <p>(IPv4 only) The public DNS name assigned to the instance. This name is not available until the instance enters the <code>running</code> state. For EC2-VPC, this name is only available if you've enabled DNS hostnames for your VPC.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IPv4 address assigned to the instance, if applicable.</p>
   */
  PublicIpAddress?: string;

  /**
   * <p>The RAM disk associated with this instance, if applicable.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The current state of the instance.</p>
   */
  State?: _InstanceState;

  /**
   * <p>The reason for the most recent state transition. This might be an empty string.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which the instance is running.</p>
   */
  SubnetId?: string;

  /**
   * <p>[EC2-VPC] The ID of the VPC in which the instance is running.</p>
   */
  VpcId?: string;

  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: "i386" | "x86_64" | "arm64" | string;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   */
  BlockDeviceMappings?:
    | Array<_InstanceBlockDeviceMapping>
    | Iterable<_InstanceBlockDeviceMapping>;

  /**
   * <p>The idempotency token you provided when you launched the instance, if applicable.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The hypervisor type of the instance.</p>
   */
  Hypervisor?: "ovm" | "xen" | string;

  /**
   * <p>The IAM instance profile associated with the instance, if applicable.</p>
   */
  IamInstanceProfile?: _IamInstanceProfile;

  /**
   * <p>Indicates whether this is a Spot Instance or a Scheduled Instance.</p>
   */
  InstanceLifecycle?: "spot" | "scheduled" | string;

  /**
   * <p>The Elastic GPU associated with the instance.</p>
   */
  ElasticGpuAssociations?:
    | Array<_ElasticGpuAssociation>
    | Iterable<_ElasticGpuAssociation>;

  /**
   * <p> The elastic inference accelerator associated with the instance. </p>
   */
  ElasticInferenceAcceleratorAssociations?:
    | Array<_ElasticInferenceAcceleratorAssociation>
    | Iterable<_ElasticInferenceAcceleratorAssociation>;

  /**
   * <p>[EC2-VPC] The network interfaces for the instance.</p>
   */
  NetworkInterfaces?:
    | Array<_InstanceNetworkInterface>
    | Iterable<_InstanceNetworkInterface>;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The root device type used by the AMI. The AMI can use an EBS volume or an instance store volume.</p>
   */
  RootDeviceType?: "ebs" | "instance-store" | string;

  /**
   * <p>The security groups for the instance.</p>
   */
  SecurityGroups?: Array<_GroupIdentifier> | Iterable<_GroupIdentifier>;

  /**
   * <p>Specifies whether to enable an instance launched in a VPC to perform NAT. This controls whether source/destination checking is enabled on the instance. A value of <code>true</code> means that checking is enabled, and <code>false</code> means that checking is disabled. The value must be <code>false</code> for the instance to perform NAT. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>If the request is a Spot Instance request, the ID of the request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The reason for the most recent state transition.</p>
   */
  StateReason?: _StateReason;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The virtualization type of the instance.</p>
   */
  VirtualizationType?: "hvm" | "paravirtual" | string;

  /**
   * <p>The CPU options for the instance.</p>
   */
  CpuOptions?: _CpuOptions;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: _CapacityReservationSpecificationResponse;

  /**
   * <p>Indicates whether the instance is enabled for hibernation.</p>
   */
  HibernationOptions?: _HibernationOptions;

  /**
   * <p>The license configurations.</p>
   */
  Licenses?: Array<_LicenseConfiguration> | Iterable<_LicenseConfiguration>;
}

export interface _UnmarshalledInstance extends _Instance {
  /**
   * <p>The time the instance was launched.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _UnmarshalledMonitoring;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: _UnmarshalledPlacement;

  /**
   * <p>The product codes attached to this instance, if applicable.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>The current state of the instance.</p>
   */
  State?: _UnmarshalledInstanceState;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledInstanceBlockDeviceMapping>;

  /**
   * <p>The IAM instance profile associated with the instance, if applicable.</p>
   */
  IamInstanceProfile?: _UnmarshalledIamInstanceProfile;

  /**
   * <p>The Elastic GPU associated with the instance.</p>
   */
  ElasticGpuAssociations?: Array<_UnmarshalledElasticGpuAssociation>;

  /**
   * <p> The elastic inference accelerator associated with the instance. </p>
   */
  ElasticInferenceAcceleratorAssociations?: Array<
    _UnmarshalledElasticInferenceAcceleratorAssociation
  >;

  /**
   * <p>[EC2-VPC] The network interfaces for the instance.</p>
   */
  NetworkInterfaces?: Array<_UnmarshalledInstanceNetworkInterface>;

  /**
   * <p>The security groups for the instance.</p>
   */
  SecurityGroups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>The reason for the most recent state transition.</p>
   */
  StateReason?: _UnmarshalledStateReason;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The CPU options for the instance.</p>
   */
  CpuOptions?: _UnmarshalledCpuOptions;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: _UnmarshalledCapacityReservationSpecificationResponse;

  /**
   * <p>Indicates whether the instance is enabled for hibernation.</p>
   */
  HibernationOptions?: _UnmarshalledHibernationOptions;

  /**
   * <p>The license configurations.</p>
   */
  Licenses?: Array<_UnmarshalledLicenseConfiguration>;
}
