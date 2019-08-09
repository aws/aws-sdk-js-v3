import {
  _GroupIdentifier,
  _UnmarshalledGroupIdentifier
} from "./_GroupIdentifier";
import {
  _BlockDeviceMapping,
  _UnmarshalledBlockDeviceMapping
} from "./_BlockDeviceMapping";
import {
  _IamInstanceProfileSpecification,
  _UnmarshalledIamInstanceProfileSpecification
} from "./_IamInstanceProfileSpecification";
import {
  _SpotFleetMonitoring,
  _UnmarshalledSpotFleetMonitoring
} from "./_SpotFleetMonitoring";
import {
  _InstanceNetworkInterfaceSpecification,
  _UnmarshalledInstanceNetworkInterfaceSpecification
} from "./_InstanceNetworkInterfaceSpecification";
import { _SpotPlacement, _UnmarshalledSpotPlacement } from "./_SpotPlacement";
import {
  _SpotFleetTagSpecification,
  _UnmarshalledSpotFleetTagSpecification
} from "./_SpotFleetTagSpecification";

/**
 * <p>Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request, you can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
 */
export interface _SpotFleetLaunchSpecification {
  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: Array<_GroupIdentifier> | Iterable<_GroupIdentifier>;

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block devices that are mapped to the Spot instances. You can't specify both a snapshot ID and an encryption value. This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p> <p>Default: <code>false</code> </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
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
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: _SpotFleetMonitoring;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?:
    | Array<_InstanceNetworkInterfaceSpecification>
    | Iterable<_InstanceNetworkInterfaceSpecification>;

  /**
   * <p>The placement information.</p>
   */
  Placement?: _SpotPlacement;

  /**
   * <p>The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. If this value is not specified, the default is the Spot price specified for the fleet. To determine the Spot price per unit hour, divide the Spot price by the value of <code>WeightedCapacity</code>.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The ID of the subnet in which to launch the instances. To specify multiple subnets, separate them using commas; for example, "subnet-a61dafcf, subnet-65ea5f08".</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data that instances use when starting up.</p>
   */
  UserData?: string;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.</p> <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The tags to apply during creation.</p>
   */
  TagSpecifications?:
    | Array<_SpotFleetTagSpecification>
    | Iterable<_SpotFleetTagSpecification>;
}

export interface _UnmarshalledSpotFleetLaunchSpecification
  extends _SpotFleetLaunchSpecification {
  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>One or more block devices that are mapped to the Spot instances. You can't specify both a snapshot ID and an encryption value. This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledBlockDeviceMapping>;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _UnmarshalledIamInstanceProfileSpecification;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: _UnmarshalledSpotFleetMonitoring;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: Array<_UnmarshalledInstanceNetworkInterfaceSpecification>;

  /**
   * <p>The placement information.</p>
   */
  Placement?: _UnmarshalledSpotPlacement;

  /**
   * <p>The tags to apply during creation.</p>
   */
  TagSpecifications?: Array<_UnmarshalledSpotFleetTagSpecification>;
}
