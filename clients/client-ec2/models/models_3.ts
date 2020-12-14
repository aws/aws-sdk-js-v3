import {
  ActiveInstance,
  ActivityStatus,
  AllocationStrategy,
  AllowedPrincipal,
  AlternatePathHint,
  AssociationStatus,
  AttributeValue,
  BatchState,
  BlockDeviceMapping,
  CurrencyCodeValues,
  FleetLaunchTemplateSpecification,
  FleetType,
  IamInstanceProfileSpecification,
  InstanceInterruptionBehavior,
  InternetGateway,
  IpPermission,
  ReservedInstancesListing,
  ResourceType,
  SpotInstanceType,
  Subnet,
  Tag,
  TagSpecification,
  Tenancy,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UserIdGroupPair,
  VolumeType,
  Vpc,
  VpcPeeringConnection,
  _InstanceType,
} from "./models_0";
import {
  ConnectionNotification,
  DnsEntry,
  DnsNameState,
  GroupIdentifier,
  InstanceIpv6Address,
  LaunchTemplate,
  LaunchTemplateVersion,
  LocalGatewayRouteTableVpcAssociation,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  PlacementGroup,
  PortRange,
  PrivateIpAddressSpecification,
  RouteTable,
  ServiceConfiguration,
  ServiceTypeDetail,
  Snapshot,
  SpotDatafeedSubscription,
  SpotInstanceStateFault,
  State,
  TrafficMirrorFilter,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayRouteTable,
  Volume,
  VpcEndpoint,
  VpnConnection,
  VpnGateway,
} from "./models_1";
import {
  AttributeBooleanValue,
  EbsInfo,
  EventInformation,
  FastSnapshotRestoreStateCode,
  Filter,
  FpgaDeviceMemoryInfo,
  IdFormat,
  PermissionGroup,
  ProductCode,
  VirtualizationType,
} from "./models_2";

/**
 * <p>Describes the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceInfo {
  /**
   * <p>The name of the FPGA accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the FPGA accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The count of FPGA accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
   */
  MemoryInfo?: FpgaDeviceMemoryInfo;
}

export namespace FpgaDeviceInfo {
  export const filterSensitiveLog = (obj: FpgaDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the FPGAs for the instance type.</p>
 */
export interface FpgaInfo {
  /**
   * <p>Describes the FPGAs for the instance type.</p>
   */
  Fpgas?: FpgaDeviceInfo[];

  /**
   * <p>The total memory of all FPGA accelerators for the instance type.</p>
   */
  TotalFpgaMemoryInMiB?: number;
}

export namespace FpgaInfo {
  export const filterSensitiveLog = (obj: FpgaInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory available to the GPU accelerator.</p>
 */
export interface GpuDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the GPU accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace GpuDeviceMemoryInfo {
  export const filterSensitiveLog = (obj: GpuDeviceMemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuDeviceInfo {
  /**
   * <p>The name of the GPU accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the GPU accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The number of GPUs for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>Describes the memory available to the GPU accelerator.</p>
   */
  MemoryInfo?: GpuDeviceMemoryInfo;
}

export namespace GpuDeviceInfo {
  export const filterSensitiveLog = (obj: GpuDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuInfo {
  /**
   * <p>Describes the GPU accelerators for the instance type.</p>
   */
  Gpus?: GpuDeviceInfo[];

  /**
   * <p>The total size of the memory for the GPU accelerators for the instance type, in MiB.</p>
   */
  TotalGpuMemoryInMiB?: number;
}

export namespace GpuInfo {
  export const filterSensitiveLog = (obj: GpuInfo): any => ({
    ...obj,
  });
}

export enum InstanceTypeHypervisor {
  NITRO = "nitro",
  XEN = "xen",
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceDeviceInfo {
  /**
   * <p>The number of Inference accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>The name of the Inference accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the Inference accelerator.</p>
   */
  Manufacturer?: string;
}

export namespace InferenceDeviceInfo {
  export const filterSensitiveLog = (obj: InferenceDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceAcceleratorInfo {
  /**
   * <p>Describes the Inference accelerators for the instance type.</p>
   */
  Accelerators?: InferenceDeviceInfo[];
}

export namespace InferenceAcceleratorInfo {
  export const filterSensitiveLog = (obj: InferenceAcceleratorInfo): any => ({
    ...obj,
  });
}

export type DiskType = "hdd" | "ssd";

/**
 * <p>Describes the disk.</p>
 */
export interface DiskInfo {
  /**
   * <p>The size of the disk in GB.</p>
   */
  SizeInGB?: number;

  /**
   * <p>The number of disks with this configuration.</p>
   */
  Count?: number;

  /**
   * <p>The type of disk.</p>
   */
  Type?: DiskType | string;
}

export namespace DiskInfo {
  export const filterSensitiveLog = (obj: DiskInfo): any => ({
    ...obj,
  });
}

export enum EphemeralNvmeSupport {
  REQUIRED = "required",
  SUPPORTED = "supported",
  UNSUPPORTED = "unsupported",
}

/**
 * <p>Describes the disks that are available for the instance type.</p>
 */
export interface InstanceStorageInfo {
  /**
   * <p>The total size of the disks, in GB.</p>
   */
  TotalSizeInGB?: number;

  /**
   * <p>Describes the disks that are available for the instance type.</p>
   */
  Disks?: DiskInfo[];

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported for instance store.</p>
   */
  NvmeSupport?: EphemeralNvmeSupport | string;
}

export namespace InstanceStorageInfo {
  export const filterSensitiveLog = (obj: InstanceStorageInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory for the instance type.</p>
 */
export interface MemoryInfo {
  /**
   * <p>The size of the memory, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace MemoryInfo {
  export const filterSensitiveLog = (obj: MemoryInfo): any => ({
    ...obj,
  });
}

export type EnaSupport = "required" | "supported" | "unsupported";

/**
 * <p>Describes the network card support of the instance type.</p>
 */
export interface NetworkCardInfo {
  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>The network performance of the network card.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p>The maximum number of network interfaces for the network card.</p>
   */
  MaximumNetworkInterfaces?: number;
}

export namespace NetworkCardInfo {
  export const filterSensitiveLog = (obj: NetworkCardInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the networking features of the instance type.</p>
 */
export interface NetworkInfo {
  /**
   * <p>The network performance.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p>The maximum number of network interfaces for the instance type.</p>
   */
  MaximumNetworkInterfaces?: number;

  /**
   * <p>The maximum number of physical network cards that can be allocated to the instance.</p>
   */
  MaximumNetworkCards?: number;

  /**
   * <p>The index of the default network card, starting at 0.</p>
   */
  DefaultNetworkCardIndex?: number;

  /**
   * <p>Describes the network cards for the instance type.</p>
   */
  NetworkCards?: NetworkCardInfo[];

  /**
   * <p>The maximum number of IPv4 addresses per network interface.</p>
   */
  Ipv4AddressesPerInterface?: number;

  /**
   * <p>The maximum number of IPv6 addresses per network interface.</p>
   */
  Ipv6AddressesPerInterface?: number;

  /**
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Supported?: boolean;

  /**
   * <p>Indicates whether Elastic Network Adapter (ENA) is supported.</p>
   */
  EnaSupport?: EnaSupport | string;

  /**
   * <p>Indicates whether Elastic Fabric Adapter (EFA) is supported.</p>
   */
  EfaSupported?: boolean;
}

export namespace NetworkInfo {
  export const filterSensitiveLog = (obj: NetworkInfo): any => ({
    ...obj,
  });
}

export type PlacementGroupStrategy = "cluster" | "partition" | "spread";

/**
 * <p>Describes the placement group support of the instance type.</p>
 */
export interface PlacementGroupInfo {
  /**
   * <p>The supported placement group types.</p>
   */
  SupportedStrategies?: (PlacementGroupStrategy | string)[];
}

export namespace PlacementGroupInfo {
  export const filterSensitiveLog = (obj: PlacementGroupInfo): any => ({
    ...obj,
  });
}

export type ArchitectureType = "arm64" | "i386" | "x86_64";

/**
 * <p>Describes the processor used by the instance type.</p>
 */
export interface ProcessorInfo {
  /**
   * <p>The architectures supported by the instance type.</p>
   */
  SupportedArchitectures?: (ArchitectureType | string)[];

  /**
   * <p>The speed of the processor, in GHz.</p>
   */
  SustainedClockSpeedInGhz?: number;
}

export namespace ProcessorInfo {
  export const filterSensitiveLog = (obj: ProcessorInfo): any => ({
    ...obj,
  });
}

export type BootModeType = "legacy-bios" | "uefi";

export type RootDeviceType = "ebs" | "instance-store";

export type UsageClassType = "on-demand" | "spot";

/**
 * <p>Describes the vCPU configurations for the instance type.</p>
 */
export interface VCpuInfo {
  /**
   * <p>The default number of vCPUs for the instance type.</p>
   */
  DefaultVCpus?: number;

  /**
   * <p>The default number of cores for the instance type.</p>
   */
  DefaultCores?: number;

  /**
   * <p>The default number of threads per core for the instance type.</p>
   */
  DefaultThreadsPerCore?: number;

  /**
   * <p>The valid number of cores that can be configured for the instance type.</p>
   */
  ValidCores?: number[];

  /**
   * <p>The valid number of threads per core that can be configured for the instance type. </p>
   */
  ValidThreadsPerCore?: number[];
}

export namespace VCpuInfo {
  export const filterSensitiveLog = (obj: VCpuInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instance type.</p>
 */
export interface InstanceTypeInfo {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute
   *     Cloud User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Indicates whether the instance type is current generation.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Indicates whether the instance type is eligible for the free tier.</p>
   */
  FreeTierEligible?: boolean;

  /**
   * <p>Indicates whether the instance type is offered for spot or On-Demand.</p>
   */
  SupportedUsageClasses?: (UsageClassType | string)[];

  /**
   * <p>The supported root device types.</p>
   */
  SupportedRootDeviceTypes?: (RootDeviceType | string)[];

  /**
   * <p>The supported virtualization types.</p>
   */
  SupportedVirtualizationTypes?: (VirtualizationType | string)[];

  /**
   * <p>Indicates whether the instance is a bare metal instance type.</p>
   */
  BareMetal?: boolean;

  /**
   * <p>The hypervisor for the instance type.</p>
   */
  Hypervisor?: InstanceTypeHypervisor | string;

  /**
   * <p>Describes the processor.</p>
   */
  ProcessorInfo?: ProcessorInfo;

  /**
   * <p>Describes the vCPU configurations for the instance type.</p>
   */
  VCpuInfo?: VCpuInfo;

  /**
   * <p>Describes the memory for the instance type.</p>
   */
  MemoryInfo?: MemoryInfo;

  /**
   * <p>Indicates whether instance storage is supported.</p>
   */
  InstanceStorageSupported?: boolean;

  /**
   * <p>Describes the instance storage for the instance type.</p>
   */
  InstanceStorageInfo?: InstanceStorageInfo;

  /**
   * <p>Describes the Amazon EBS settings for the instance type.</p>
   */
  EbsInfo?: EbsInfo;

  /**
   * <p>Describes the network settings for the instance type.</p>
   */
  NetworkInfo?: NetworkInfo;

  /**
   * <p>Describes the GPU accelerator settings for the instance type.</p>
   */
  GpuInfo?: GpuInfo;

  /**
   * <p>Describes the FPGA accelerator settings for the instance type.</p>
   */
  FpgaInfo?: FpgaInfo;

  /**
   * <p>Describes the placement group settings for the instance type.</p>
   */
  PlacementGroupInfo?: PlacementGroupInfo;

  /**
   * <p>Describes the Inference accelerator settings for the instance type.</p>
   */
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo;

  /**
   * <p>Indicates whether On-Demand hibernation is supported.</p>
   */
  HibernationSupported?: boolean;

  /**
   * <p>Indicates whether the instance type is a burstable performance instance type.</p>
   */
  BurstablePerformanceSupported?: boolean;

  /**
   * <p>Indicates whether Dedicated Hosts are supported on the instance type.</p>
   */
  DedicatedHostsSupported?: boolean;

  /**
   * <p>Indicates whether auto recovery is supported.</p>
   */
  AutoRecoverySupported?: boolean;

  SupportedBootModes?: (BootModeType | string)[];
}

export namespace InstanceTypeInfo {
  export const filterSensitiveLog = (obj: InstanceTypeInfo): any => ({
    ...obj,
  });
}

export interface DescribeInstanceTypesResult {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute
   *     Cloud User Guide</i>.</p>
   */
  InstanceTypes?: InstanceTypeInfo[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceTypesResult {
  export const filterSensitiveLog = (obj: DescribeInstanceTypesResult): any => ({
    ...obj,
  });
}

export interface DescribeInternetGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>attachment.state</code> - The current state of the attachment between the gateway
   *                     and the VPC (<code>available</code>). Present only if a VPC is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>internet-gateway-id</code> - The ID of the Internet gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the internet gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more internet gateway IDs.</p>
   *         <p>Default: Describes all your internet gateways.</p>
   */
  InternetGatewayIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeInternetGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeInternetGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeInternetGatewaysResult {
  /**
   * <p>Information about one or more internet gateways.</p>
   */
  InternetGateways?: InternetGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInternetGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeInternetGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeIpv6PoolsRequest {
  /**
   * <p>The IDs of the IPv6 address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeIpv6PoolsRequest {
  export const filterSensitiveLog = (obj: DescribeIpv6PoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a CIDR block for an address pool.</p>
 */
export interface PoolCidrBlock {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;
}

export namespace PoolCidrBlock {
  export const filterSensitiveLog = (obj: PoolCidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address pool.</p>
 */
export interface Ipv6Pool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The description for the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The CIDR blocks for the address pool.</p>
   */
  PoolCidrBlocks?: PoolCidrBlock[];

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace Ipv6Pool {
  export const filterSensitiveLog = (obj: Ipv6Pool): any => ({
    ...obj,
  });
}

export interface DescribeIpv6PoolsResult {
  /**
   * <p>Information about the IPv6 address pools.</p>
   */
  Ipv6Pools?: Ipv6Pool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeIpv6PoolsResult {
  export const filterSensitiveLog = (obj: DescribeIpv6PoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeKeyPairsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *      		        <p>
   *      			          <code>key-pair-id</code> - The ID of the key pair.</p>
   *      	      </li>
   *             <li>
   *                <p>
   *                   <code>fingerprint</code> - The fingerprint of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair.</p>
   *             </li>
   *             <li>
   *      		        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *      	      </li>
   *             <li>
   *      		        <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *      	      </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The key pair names.</p>
   *          <p>Default: Describes all your key pairs.</p>
   */
  KeyNames?: string[];

  /**
   * <p>The IDs of the key pairs.</p>
   */
  KeyPairIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeKeyPairsRequest {
  export const filterSensitiveLog = (obj: DescribeKeyPairsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPairInfo {
  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>If you used <a>CreateKeyPair</a> to create the key pair, this is the SHA-1 digest of the DER encoded private key.
   *         If you used <a>ImportKeyPair</a> to provide AWS the public key, this is the MD5 public key fingerprint as specified in section 4 of RFC4716.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];
}

export namespace KeyPairInfo {
  export const filterSensitiveLog = (obj: KeyPairInfo): any => ({
    ...obj,
  });
}

export interface DescribeKeyPairsResult {
  /**
   * <p>Information about the key pairs.</p>
   */
  KeyPairs?: KeyPairInfo[];
}

export namespace DescribeKeyPairsResult {
  export const filterSensitiveLog = (obj: DescribeKeyPairsResult): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplatesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more launch template IDs.</p>
   */
  LaunchTemplateIds?: string[];

  /**
   * <p>One or more launch template names.</p>
   */
  LaunchTemplateNames?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>create-time</code> - The time the launch template was created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-template-name</code> - The name of the launch template.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;
}

export namespace DescribeLaunchTemplatesRequest {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplatesRequest): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplatesResult {
  /**
   * <p>Information about the launch templates.</p>
   */
  LaunchTemplates?: LaunchTemplate[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLaunchTemplatesResult {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplatesResult): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. To describe one or more versions of a specified launch
   *             template, you must specify either the launch template ID or the launch template name in
   *             the request. To describe all the latest or default launch template versions in your
   *             account, you must omit this parameter.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. To describe one or more versions of a specified
   *             launch template, you must specify either the launch template ID or the launch template
   *             name in the request. To describe all the latest or default launch template versions in
   *             your account, you must omit this parameter.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>One or more versions of the launch template. Valid values depend on whether you are describing a specified launch template (by ID or name) or all launch templates in your account.</p>
   *             <p>To describe one or more versions of a specified launch template, valid values are <code>$Latest</code>, <code>$Default</code>, and numbers.</p>
   *             <p>To describe all launch templates in your account that are defined as the latest
   *             version, the valid value is <code>$Latest</code>. To describe all launch templates in
   *             your account that are defined as the default version, the valid value is
   *                 <code>$Default</code>. You can specify <code>$Latest</code> and
   *                 <code>$Default</code> in the same call. You cannot specify numbers.</p>
   */
  Versions?: string[];

  /**
   * <p>The version number after which to describe launch template versions.</p>
   */
  MinVersion?: string;

  /**
   * <p>The version number up to which to describe launch template versions.</p>
   */
  MaxVersion?: string;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time the launch template version was created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ebs-optimized</code> - A boolean that indicates whether the instance
   *                     is optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>iam-instance-profile</code> - The ARN of the IAM instance
   *                     profile.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-default-version</code> - A boolean that indicates whether the
   *                     launch template version is the default version.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ram-disk-id</code> - The RAM disk ID.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeLaunchTemplateVersionsRequest {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplateVersionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions.</p>
   */
  LaunchTemplateVersions?: LaunchTemplateVersion[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLaunchTemplateVersionsResult {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplateVersionsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the local gateway route tables.</p>
   */
  LocalGatewayRouteTableIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of a local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the local gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeLocalGatewayRouteTablesRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTablesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway route table.</p>
 */
export interface LocalGatewayRouteTable {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The AWS account ID that owns the local gateway route table.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the local gateway route table.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the local gateway route table.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayRouteTable {
  export const filterSensitiveLog = (obj: LocalGatewayRouteTable): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * <p>Information about the local gateway route tables.</p>
   */
  LocalGatewayRouteTables?: LocalGatewayRouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayRouteTablesResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTablesResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest
  ): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The AWS account ID that owns the local gateway virtual interface group association.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  export const filterSensitiveLog = (obj: LocalGatewayRouteTableVirtualInterfaceGroupAssociation): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  export const filterSensitiveLog = (
    obj: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
  ): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociationIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-vpc-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTableVpcAssociationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayRouteTableVpcAssociationsResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTableVpcAssociationsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *          </ul>
   */
  LocalGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeLocalGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway.</p>
 */
export interface LocalGateway {
  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The AWS account ID that owns the local gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the local gateway.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the local gateway.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGateway {
  export const filterSensitiveLog = (obj: LocalGateway): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewaysResult {
  /**
   * <p>Information about the local gateways.</p>
   */
  LocalGateways?: LocalGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * <p>The IDs of the virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroupIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfaceGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway virtual interface group.</p>
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The AWS account ID that owns the local gateway virtual interface group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface group.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayVirtualInterfaceGroup {
  export const filterSensitiveLog = (obj: LocalGatewayVirtualInterfaceGroup): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * <p>The virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayVirtualInterfaceGroupsResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfaceGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * <p>One or more filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeLocalGatewayVirtualInterfacesRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfacesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway virtual interface.</p>
 */
export interface LocalGatewayVirtualInterface {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  LocalGatewayVirtualInterfaceId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  Vlan?: number;

  /**
   * <p>The local address.</p>
   */
  LocalAddress?: string;

  /**
   * <p>The peer address.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.</p>
   */
  LocalBgpAsn?: number;

  /**
   * <p>The peer BGP ASN.</p>
   */
  PeerBgpAsn?: number;

  /**
   * <p>The AWS account ID that owns the local gateway virtual interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayVirtualInterface {
  export const filterSensitiveLog = (obj: LocalGatewayVirtualInterface): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * <p>Information about the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayVirtualInterfacesResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfacesResult): any => ({
    ...obj,
  });
}

export interface DescribeManagedPrefixListsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the prefix list owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-name</code> - The name of the prefix list.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

export namespace DescribeManagedPrefixListsRequest {
  export const filterSensitiveLog = (obj: DescribeManagedPrefixListsRequest): any => ({
    ...obj,
  });
}

export interface DescribeManagedPrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the prefix lists.</p>
   */
  PrefixLists?: ManagedPrefixList[];
}

export namespace DescribeManagedPrefixListsResult {
  export const filterSensitiveLog = (obj: DescribeManagedPrefixListsResult): any => ({
    ...obj,
  });
}

export interface DescribeMovingAddressesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>moving-status</code> - The status of the Elastic IP address
   *           (<code>MovingToVpc</code> | <code>RestoringToClassic</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *       <code>NextToken</code> value. This value can be between 5 and 1000; if
   *       <code>MaxResults</code> is given a value outside of this range, an error is returned.</p>
   *          <p>Default: If no value is provided, the default is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more Elastic IP addresses.</p>
   */
  PublicIps?: string[];
}

export namespace DescribeMovingAddressesRequest {
  export const filterSensitiveLog = (obj: DescribeMovingAddressesRequest): any => ({
    ...obj,
  });
}

export type MoveStatus = "movingToVpc" | "restoringToClassic";

/**
 * <p>Describes the status of a moving Elastic IP address.</p>
 */
export interface MovingAddressStatus {
  /**
   * <p>The status of the Elastic IP address that's being moved to the EC2-VPC platform, or restored to the EC2-Classic platform.</p>
   */
  MoveStatus?: MoveStatus | string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;
}

export namespace MovingAddressStatus {
  export const filterSensitiveLog = (obj: MovingAddressStatus): any => ({
    ...obj,
  });
}

export interface DescribeMovingAddressesResult {
  /**
   * <p>The status for each Elastic IP address.</p>
   */
  MovingAddressStatuses?: MovingAddressStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeMovingAddressesResult {
  export const filterSensitiveLog = (obj: DescribeMovingAddressesResult): any => ({
    ...obj,
  });
}

export interface DescribeNatGatewaysRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>nat-gateway-id</code> - The ID of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the NAT gateway (<code>pending</code> |
   *               <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet in which the NAT gateway resides.</p>
   *             </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the NAT gateway resides.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more NAT gateway IDs.</p>
   */
  NatGatewayIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeNatGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeNatGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeNatGatewaysResult {
  /**
   * <p>Information about the NAT gateways.</p>
   */
  NatGateways?: NatGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNatGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeNatGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkAclsRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>association.association-id</code> - The ID of an association ID for the ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.network-acl-id</code> - The ID of the network ACL involved in the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>default</code> - Indicates whether the ACL is the default network ACL for the VPC.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.cidr</code> - The IPv4 CIDR range specified in the entry.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.icmp.code</code> - The ICMP code specified in the entry, if any.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.icmp.type</code> - The ICMP type specified in the entry, if any.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>entry.ipv6-cidr</code> - The IPv6 CIDR range specified in the entry.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.port-range.from</code> - The start of the port range specified in the entry. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.port-range.to</code> - The end of the port range specified in the entry. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.protocol</code> - The protocol specified in the entry (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.rule-action</code> - Allows or denies the matching traffic (<code>allow</code> | <code>deny</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.rule-number</code> - The number of an entry (in other words, rule) in
   *                     the set of ACL entries.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>network-acl-id</code> - The ID of the network ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the network ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the network ACL.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more network ACL IDs.</p>
   * 		       <p>Default: Describes all your network ACLs.</p>
   */
  NetworkAclIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeNetworkAclsRequest {
  export const filterSensitiveLog = (obj: DescribeNetworkAclsRequest): any => ({
    ...obj,
  });
}

export interface DescribeNetworkAclsResult {
  /**
   * <p>Information about one or more network ACLs.</p>
   */
  NetworkAcls?: NetworkAcl[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkAclsResult {
  export const filterSensitiveLog = (obj: DescribeNetworkAclsResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAnalysesRequest {
  /**
   * <p>The ID of the network insights analyses. You must specify either analysis IDs or a path ID.</p>
   */
  NetworkInsightsAnalysisIds?: string[];

  /**
   * <p>The ID of the path. You must specify either a path ID or analysis IDs.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The time when the network insights analyses started.</p>
   */
  AnalysisStartTime?: Date;

  /**
   * <p>The time when the network insights analyses ended.</p>
   */
  AnalysisEndTime?: Date;

  /**
   * <p>The filters. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>PathFound - A Boolean value that indicates whether a feasible path is found.</p>
   *             </li>
   *             <li>
   *                <p>Status - The status of the analysis (running | succeeded | failed).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsAnalysesRequest {
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAnalysesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path component.</p>
 */
export interface AnalysisComponent {
  /**
   * <p>The ID of the component.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  Arn?: string;
}

export namespace AnalysisComponent {
  export const filterSensitiveLog = (obj: AnalysisComponent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network access control (ACL) rule.</p>
 */
export interface AnalysisAclRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>Indicates whether the rule is an outbound rule.</p>
   */
  Egress?: boolean;

  /**
   * <p>The range of ports.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny traffic that matches the rule.</p>
   */
  RuleAction?: string;

  /**
   * <p>The rule number.</p>
   */
  RuleNumber?: number;
}

export namespace AnalysisAclRule {
  export const filterSensitiveLog = (obj: AnalysisAclRule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer listener.</p>
 */
export interface AnalysisLoadBalancerListener {
  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  LoadBalancerPort?: number;

  /**
   * <p>[Classic Load Balancers] The back-end port for the listener.</p>
   */
  InstancePort?: number;
}

export namespace AnalysisLoadBalancerListener {
  export const filterSensitiveLog = (obj: AnalysisLoadBalancerListener): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer target.</p>
 */
export interface AnalysisLoadBalancerTarget {
  /**
   * <p>The IP address.</p>
   */
  Address?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instance.</p>
   */
  Instance?: AnalysisComponent;

  /**
   * <p>The port on which the target is listening.</p>
   */
  Port?: number;
}

export namespace AnalysisLoadBalancerTarget {
  export const filterSensitiveLog = (obj: AnalysisLoadBalancerTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table route.</p>
 */
export interface AnalysisRouteTableRoute {
  /**
   * <p>The destination IPv4 address, in CIDR notation.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The prefix of the AWS service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of the gateway, such as an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of the instance, such as a NAT instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateRoute</code> - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   */
  Origin?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace AnalysisRouteTableRoute {
  export const filterSensitiveLog = (obj: AnalysisRouteTableRoute): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group rule.</p>
 */
export interface AnalysisSecurityGroupRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The direction. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   */
  Direction?: string;

  /**
   * <p>The security group ID.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The port range.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The prefix list ID.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The protocol name.</p>
   */
  Protocol?: string;
}

export namespace AnalysisSecurityGroupRule {
  export const filterSensitiveLog = (obj: AnalysisSecurityGroupRule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
 */
export interface Explanation {
  /**
   * <p>The network ACL.</p>
   */
  Acl?: AnalysisComponent;

  /**
   * <p>The network ACL rule.</p>
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The IPv4 address, in CIDR notation.</p>
   */
  Address?: string;

  /**
   * <p>The IPv4 addresses, in CIDR notation.</p>
   */
  Addresses?: string[];

  /**
   * <p>The resource to which the component is attached.</p>
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The Availability Zones.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The CIDR ranges.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The component.</p>
   */
  Component?: AnalysisComponent;

  /**
   * <p>The customer gateway.</p>
   */
  CustomerGateway?: AnalysisComponent;

  /**
   * <p>The destination.</p>
   */
  Destination?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The direction. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   */
  Direction?: string;

  /**
   * <p>The explanation code.</p>
   */
  ExplanationCode?: string;

  /**
   * <p>The route table.</p>
   */
  IngressRouteTable?: AnalysisComponent;

  /**
   * <p>The internet gateway.</p>
   */
  InternetGateway?: AnalysisComponent;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The listener for a Classic Load Balancer.</p>
   */
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;

  /**
   * <p>The listener port of the load balancer.</p>
   */
  LoadBalancerListenerPort?: number;

  /**
   * <p>The target.</p>
   */
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;

  /**
   * <p>The target group.</p>
   */
  LoadBalancerTargetGroup?: AnalysisComponent;

  /**
   * <p>The target groups.</p>
   */
  LoadBalancerTargetGroups?: AnalysisComponent[];

  /**
   * <p>The target port.</p>
   */
  LoadBalancerTargetPort?: number;

  /**
   * <p>The load balancer listener.</p>
   */
  ElasticLoadBalancerListener?: AnalysisComponent;

  /**
   * <p>The missing component.</p>
   */
  MissingComponent?: string;

  /**
   * <p>The NAT gateway.</p>
   */
  NatGateway?: AnalysisComponent;

  /**
   * <p>The network interface.</p>
   */
  NetworkInterface?: AnalysisComponent;

  /**
   * <p>The packet field.</p>
   */
  PacketField?: string;

  /**
   * <p>The VPC peering connection.</p>
   */
  VpcPeeringConnection?: AnalysisComponent;

  /**
   * <p>The port.</p>
   */
  Port?: number;

  /**
   * <p>The port ranges.</p>
   */
  PortRanges?: PortRange[];

  /**
   * <p>The prefix list.</p>
   */
  PrefixList?: AnalysisComponent;

  /**
   * <p>The protocols.</p>
   */
  Protocols?: string[];

  /**
   * <p>The route table route.</p>
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The route table.</p>
   */
  RouteTable?: AnalysisComponent;

  /**
   * <p>The security group.</p>
   */
  SecurityGroup?: AnalysisComponent;

  /**
   * <p>The security group rule.</p>
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The security groups.</p>
   */
  SecurityGroups?: AnalysisComponent[];

  /**
   * <p>The source VPC.</p>
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The state.</p>
   */
  State?: string;

  /**
   * <p>The subnet.</p>
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The route table for the subnet.</p>
   */
  SubnetRouteTable?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The VPC endpoint.</p>
   */
  VpcEndpoint?: AnalysisComponent;

  /**
   * <p>The VPN connection.</p>
   */
  VpnConnection?: AnalysisComponent;

  /**
   * <p>The VPN gateway.</p>
   */
  VpnGateway?: AnalysisComponent;
}

export namespace Explanation {
  export const filterSensitiveLog = (obj: Explanation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a header. Reflects any changes made by a component as traffic passes through.
 *          The fields of an inbound header are null except for the first component of a path.</p>
 */
export interface AnalysisPacketHeader {
  /**
   * <p>The destination addresses.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>The destination port ranges.</p>
   */
  DestinationPortRanges?: PortRange[];

  /**
   * <p>The protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The source addresses.</p>
   */
  SourceAddresses?: string[];

  /**
   * <p>The source port ranges.</p>
   */
  SourcePortRanges?: PortRange[];
}

export namespace AnalysisPacketHeader {
  export const filterSensitiveLog = (obj: AnalysisPacketHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path component.</p>
 */
export interface PathComponent {
  /**
   * <p>The sequence number.</p>
   */
  SequenceNumber?: number;

  /**
   * <p>The network ACL rule.</p>
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The component.</p>
   */
  Component?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The outbound header.</p>
   */
  OutboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The inbound header.</p>
   */
  InboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The route table route.</p>
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The security group rule.</p>
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The source VPC.</p>
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The subnet.</p>
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   */
  Vpc?: AnalysisComponent;
}

export namespace PathComponent {
  export const filterSensitiveLog = (obj: PathComponent): any => ({
    ...obj,
  });
}

export type AnalysisStatus = "failed" | "running" | "succeeded";

/**
 * <p>Describes a network insights analysis.</p>
 */
export interface NetworkInsightsAnalysis {
  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisArn?: string;

  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the AWS resources that the path must traverse.</p>
   */
  FilterInArns?: string[];

  /**
   * <p>The time the analysis started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The status of the network insights analysis.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * <p>The status message, if the status is <code>failed</code>.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Indicates whether the destination is reachable from the source.</p>
   */
  NetworkPathFound?: boolean;

  /**
   * <p>The components in the path from source to destination.</p>
   */
  ForwardPathComponents?: PathComponent[];

  /**
   * <p>The components in the path from destination to source.</p>
   */
  ReturnPathComponents?: PathComponent[];

  /**
   * <p>The explanations. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
   */
  Explanations?: Explanation[];

  /**
   * <p>Potential intermediate components.</p>
   */
  AlternatePathHints?: AlternatePathHint[];

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsAnalysis {
  export const filterSensitiveLog = (obj: NetworkInsightsAnalysis): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAnalysesResult {
  /**
   * <p>Information about the network insights analyses.</p>
   */
  NetworkInsightsAnalyses?: NetworkInsightsAnalysis[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsAnalysesResult {
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAnalysesResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsPathsRequest {
  /**
   * <p>The IDs of the paths.</p>
   */
  NetworkInsightsPathIds?: string[];

  /**
   * <p>The filters. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>Destination - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>DestinationPort - The destination port.</p>
   *             </li>
   *             <li>
   *                <p>Name - The path name.</p>
   *             </li>
   *             <li>
   *                <p>Protocol - The protocol.</p>
   *             </li>
   *             <li>
   *                <p>Source - The ID of the resource.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsPathsRequest {
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsPathsRequest): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsPathsResult {
  /**
   * <p>Information about the paths.</p>
   */
  NetworkInsightsPaths?: NetworkInsightsPath[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsPathsResult {
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsPathsResult): any => ({
    ...obj,
  });
}

export type NetworkInterfaceAttribute = "attachment" | "description" | "groupSet" | "sourceDestCheck";

/**
 * <p>Contains the parameters for DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeRequest {
  /**
   * <p>The attribute of the network interface. This parameter is required.</p>
   */
  Attribute?: NetworkInterfaceAttribute | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace DescribeNetworkInterfaceAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * <p>The attachment (if any) of the network interface.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * <p>The description of the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The security groups associated with the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

export namespace DescribeNetworkInterfaceAttributeResult {
  export const filterSensitiveLog = (obj: DescribeNetworkInterfaceAttributeResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * <p>One or more network interface permission IDs.</p>
   */
  NetworkInterfacePermissionIds?: string[];

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-permission-id</code> - The ID of the
   * 				permission.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.network-interface-id</code> - The ID of
   * 					the network interface.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.aws-account-id</code> - The AWS account
   * 					ID.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.aws-service</code> - The AWS
   * 					service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.permission</code> - The type of
   * 					permission (<code>INSTANCE-ATTACH</code> |
   * 					<code>EIP-ASSOCIATE</code>).</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results,
   * 			make another call with the returned <code>NextToken</code> value. If this parameter is not specified, up to 50 results are returned by default.</p>
   */
  MaxResults?: number;
}

export namespace DescribeNetworkInterfacePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacePermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * <p>The network interface permissions.</p>
   */
  NetworkInterfacePermissions?: NetworkInterfacePermission[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInterfacePermissionsResult {
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacePermissionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>addresses.private-ip-address</code> - The private IPv4 addresses
   *                     associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.primary</code> - Whether the private IPv4 address is the primary
   *                     IP address associated with the network interface. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.association.public-ip</code> - The association ID returned when
   *                     the network interface was associated with the Elastic IP address
   *                     (IPv4).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.association.owner-id</code> - The owner ID of the addresses associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.association-id</code> - The association ID returned when the
   *                     network interface was associated with an IPv4 address.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.allocation-id</code> - The allocation ID returned when you
   *                     allocated the Elastic IP address (IPv4) for your network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.ip-owner-id</code> - The owner of the Elastic IP address
   *                     (IPv4) associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.public-ip</code> - The address of the Elastic IP address
   *                     (IPv4) bound to the network interface.</p>
   * 		          </li>
   *             <li>
   * 		 		          <p>
   *                   <code>association.public-dns-name</code> - The public DNS name for the network
   *                     interface (IPv4).</p>
   * 		 	        </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.attachment-id</code> - The ID of the interface attachment.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.attach-time</code> - The time that the network interface was attached to an instance.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.delete-on-termination</code> - Indicates whether the attachment is deleted when an instance is terminated.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.device-index</code> - The device index to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.instance-owner-id</code> - The owner ID of the instance to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.status</code> - The status of the attachment (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>availability-zone</code> - The Availability Zone of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>description</code> - The description of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>group-id</code> - The ID of a security group associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>group-name</code> - The name of a security group associated with the network interface.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with
   *                     the network interface.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>mac-address</code> - The MAC address of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>network-interface-id</code> - The ID of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The AWS account ID of the network interface owner.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>private-ip-address</code> - The private IPv4 address or addresses of the
   *                     network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>private-dns-name</code> - The private DNS name of the network interface (IPv4).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>requester-id</code> - The ID of the entity that launched the instance on your behalf (for example, AWS Management Console, Auto Scaling, and so on).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>requester-managed</code> - Indicates whether the network interface is being managed by an AWS service (for example, AWS Management Console, Auto Scaling, and so on).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>source-dest-check</code> - Indicates whether the network interface performs source/destination checking.
   * 		            A value of <code>true</code> means checking is enabled, and <code>false</code> means checking is disabled.
   * 		            The value must be <code>false</code> for the network interface to perform network address translation (NAT) in your VPC. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>status</code> - The status of the network interface. If the network interface is not attached to an instance, the status is <code>available</code>;
   * 		            if a network interface is attached to an instance the status is <code>in-use</code>.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the network interface.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more network interface IDs.</p>
   * 		       <p>Default: Describes all your network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you
   *             can specify in a subsequent call to get the next set of results. You cannot specify this
   *             parameter and the network interface IDs parameter in the same request.</p>
   */
  MaxResults?: number;
}

export namespace DescribeNetworkInterfacesRequest {
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * <p>Information about one or more network interfaces.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInterfacesResult {
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacesResult): any => ({
    ...obj,
  });
}

export interface DescribePlacementGroupsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>group-name</code> - The name of the placement group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state</code> - The state of the placement group (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>strategy</code> - The strategy of the placement group
   *                         (<code>cluster</code> | <code>spread</code> |
   *                     <code>partition</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The names of the placement groups.</p>
   *         <p>Default: Describes all your placement groups, or only those otherwise
   *             specified.</p>
   */
  GroupNames?: string[];

  /**
   * <p>The IDs of the placement groups.</p>
   */
  GroupIds?: string[];
}

export namespace DescribePlacementGroupsRequest {
  export const filterSensitiveLog = (obj: DescribePlacementGroupsRequest): any => ({
    ...obj,
  });
}

export interface DescribePlacementGroupsResult {
  /**
   * <p>Information about the placement groups.</p>
   */
  PlacementGroups?: PlacementGroup[];
}

export namespace DescribePlacementGroupsResult {
  export const filterSensitiveLog = (obj: DescribePlacementGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribePrefixListsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>prefix-list-id</code>: The ID of a prefix list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>prefix-list-name</code>: The name of a prefix list.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

export namespace DescribePrefixListsRequest {
  export const filterSensitiveLog = (obj: DescribePrefixListsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes prefixes for AWS services.</p>
 */
export interface PrefixList {
  /**
   * <p>The IP address range of the AWS service.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The name of the prefix.</p>
   */
  PrefixListName?: string;
}

export namespace PrefixList {
  export const filterSensitiveLog = (obj: PrefixList): any => ({
    ...obj,
  });
}

export interface DescribePrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>All available prefix lists.</p>
   */
  PrefixLists?: PrefixList[];
}

export namespace DescribePrefixListsResult {
  export const filterSensitiveLog = (obj: DescribePrefixListsResult): any => ({
    ...obj,
  });
}

export interface DescribePrincipalIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of resource: <code>bundle</code> |
   *             <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *             <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *             <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *             <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *             <code>network-acl</code> | <code>network-acl-association</code> |
   *             <code>network-interface</code> | <code>network-interface-attachment</code> |
   *             <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *             <code>route-table-association</code> | <code>security-group</code> |
   *             <code>snapshot</code> | <code>subnet</code> |
   *             <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *             | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *             <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resources?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned NextToken value. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribePrincipalIdFormatRequest {
  export const filterSensitiveLog = (obj: DescribePrincipalIdFormatRequest): any => ({
    ...obj,
  });
}

/**
 * <p>PrincipalIdFormat description</p>
 */
export interface PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatARN description</p>
   */
  Arn?: string;

  /**
   * <p>PrincipalIdFormatStatuses description</p>
   */
  Statuses?: IdFormat[];
}

export namespace PrincipalIdFormat {
  export const filterSensitiveLog = (obj: PrincipalIdFormat): any => ({
    ...obj,
  });
}

export interface DescribePrincipalIdFormatResult {
  /**
   * <p>Information about the ID format settings for the ARN.</p>
   */
  Principals?: PrincipalIdFormat[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribePrincipalIdFormatResult {
  export const filterSensitiveLog = (obj: DescribePrincipalIdFormatResult): any => ({
    ...obj,
  });
}

export interface DescribePublicIpv4PoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribePublicIpv4PoolsRequest {
  export const filterSensitiveLog = (obj: DescribePublicIpv4PoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 */
export interface PublicIpv4PoolRange {
  /**
   * <p>The first IP address in the range.</p>
   */
  FirstAddress?: string;

  /**
   * <p>The last IP address in the range.</p>
   */
  LastAddress?: string;

  /**
   * <p>The number of addresses in the range.</p>
   */
  AddressCount?: number;

  /**
   * <p>The number of available addresses in the range.</p>
   */
  AvailableAddressCount?: number;
}

export namespace PublicIpv4PoolRange {
  export const filterSensitiveLog = (obj: PublicIpv4PoolRange): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 address pool.</p>
 */
export interface PublicIpv4Pool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>A description of the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?: PublicIpv4PoolRange[];

  /**
   * <p>The total number of addresses.</p>
   */
  TotalAddressCount?: number;

  /**
   * <p>The total number of available addresses.</p>
   */
  TotalAvailableAddressCount?: number;

  /**
   * <p>The name of the location from which the address pool is advertised. A network border group is a unique set of Availability Zones or Local Zones from where AWS advertises public IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace PublicIpv4Pool {
  export const filterSensitiveLog = (obj: PublicIpv4Pool): any => ({
    ...obj,
  });
}

export interface DescribePublicIpv4PoolsResult {
  /**
   * <p>Information about the address pools.</p>
   */
  PublicIpv4Pools?: PublicIpv4Pool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribePublicIpv4PoolsResult {
  export const filterSensitiveLog = (obj: DescribePublicIpv4PoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeRegionsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>endpoint</code> - The endpoint of the Region (for example, <code>ec2.us-east-1.amazonaws.com</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status of the Region (<code>opt-in-not-required</code> | <code>opted-in</code> |
   *                  <code>not-opted-in</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region (for example, <code>us-east-1</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   */
  RegionNames?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   */
  AllRegions?: boolean;
}

export namespace DescribeRegionsRequest {
  export const filterSensitiveLog = (obj: DescribeRegionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Region.</p>
 */
export interface Region {
  /**
   * <p>The Region service endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   */
  OptInStatus?: string;
}

export namespace Region {
  export const filterSensitiveLog = (obj: Region): any => ({
    ...obj,
  });
}

export interface DescribeRegionsResult {
  /**
   * <p>Information about the Regions.</p>
   */
  Regions?: Region[];
}

export namespace DescribeRegionsResult {
  export const filterSensitiveLog = (obj: DescribeRegionsResult): any => ({
    ...obj,
  });
}

export enum OfferingClassType {
  CONVERTIBLE = "convertible",
  STANDARD = "standard",
}

export type OfferingTypeValues =
  | "All Upfront"
  | "Heavy Utilization"
  | "Light Utilization"
  | "Medium Utilization"
  | "No Upfront"
  | "Partial Upfront";

/**
 * <p>Contains the parameters for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (one year or three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end</code> - The time when the Reserved Instance expires (for example, 2015-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example, 9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Region</code> or <code>Availability Zone</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description.
   *               Instances that include <code>(Amazon VPC)</code> in the product platform description will
   *               only be displayed to EC2-Classic account holders and are for use with Amazon VPC
   *               (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE
   *               Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise
   *               Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Windows</code>
   *               | <code>Windows (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> |
   *               <code>Windows with SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL
   *               Server Web</code> | <code>Windows with SQL Server Web (Amazon VPC)</code> |
   *               <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL Server
   *               Enterprise (Amazon VPC)</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code> - The time at which the Reserved Instance purchase request was placed (for example, 2014-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Reserved Instance (<code>payment-pending</code> | <code>active</code> | <code>payment-failed</code> | <code>retired</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for example, 0.84).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Describes whether the Reserved Instance is Standard or Convertible.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>One or more Reserved Instance IDs.</p>
   *          <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   */
  ReservedInstancesIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;
}

export namespace DescribeReservedInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesRequest): any => ({
    ...obj,
  });
}

export type RIProductDescription = "Linux/UNIX" | "Linux/UNIX (Amazon VPC)" | "Windows" | "Windows (Amazon VPC)";

export type RecurringChargeFrequency = "Hourly";

/**
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   */
  Amount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  Frequency?: RecurringChargeFrequency | string;
}

export namespace RecurringCharge {
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

export enum Scope {
  AVAILABILITY_ZONE = "Availability Zone",
  REGIONAL = "Region",
}

export type ReservedInstanceState =
  | "active"
  | "payment-failed"
  | "payment-pending"
  | "queued"
  | "queued-deleted"
  | "retired";

/**
 * <p>Describes a Reserved Instance.</p>
 */
export interface ReservedInstances {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The time when the Reserved Instance expires.</p>
   */
  End?: Date;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The number of reservations purchased.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The date and time the Reserved Instance started.</p>
   */
  Start?: Date;

  /**
   * <p>The state of the Reserved Instance purchase.</p>
   */
  State?: ReservedInstanceState | string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency codes.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The offering class of the Reserved Instance.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The scope of the Reserved Instance.</p>
   */
  Scope?: Scope | string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace ReservedInstances {
  export const filterSensitiveLog = (obj: ReservedInstances): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesResult {
  /**
   * <p>A list of Reserved Instances.</p>
   */
  ReservedInstances?: ReservedInstances[];
}

export namespace DescribeReservedInstancesResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-listing-id</code> - The ID of the Reserved Instances listing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instance listing (<code>pending</code> | <code>active</code> |
   *            <code>cancelled</code> | <code>closed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more Reserved Instance IDs.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>One or more Reserved Instance listing IDs.</p>
   */
  ReservedInstancesListingId?: string;
}

export namespace DescribeReservedInstancesListingsRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesListingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * <p>Information about the Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export namespace DescribeReservedInstancesListingsResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesListingsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token for the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-date</code> - The time when the modification request was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>effective-date</code> - The time when the modification becomes effective.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.reserved-instances-id</code> - The ID for the Reserved Instances created as part of the modification request. This ID is only available when the status of the modification is <code>fulfilled</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone</code> - The Availability Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-count </code> - The number of new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-type</code> - The instance type of the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.platform</code> - The network platform of the new Reserved Instances (<code>EC2-Classic</code> | <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-modification-id</code> - The ID of the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instances modification request
   *            (<code>processing</code> | <code>fulfilled</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-date</code> - The time when the modification request was last updated.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>IDs for the submitted modification request.</p>
   */
  ReservedInstancesModificationIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeReservedInstancesModificationsRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesModificationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration settings for the modified Reserved Instances.</p>
 */
export interface ReservedInstancesConfiguration {
  /**
   * <p>The Availability Zone for the modified Reserved Instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of modified Reserved Instances.</p>
   *          <note>
   *             <p>This is a required field for a request.</p>
   *          </note>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type for the modified Reserved Instances.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The network platform of the modified Reserved Instances, which is either EC2-Classic or EC2-VPC.</p>
   */
  Platform?: string;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or instances in a specific Availability Zone.</p>
   */
  Scope?: Scope | string;
}

export namespace ReservedInstancesConfiguration {
  export const filterSensitiveLog = (obj: ReservedInstancesConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the modification request/s.</p>
 */
export interface ReservedInstancesModificationResult {
  /**
   * <p>The ID for the Reserved Instances that were created as part of the modification request. This field is only available when the modification is fulfilled.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification request.</p>
   */
  TargetConfiguration?: ReservedInstancesConfiguration;
}

export namespace ReservedInstancesModificationResult {
  export const filterSensitiveLog = (obj: ReservedInstancesModificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ID of a Reserved Instance.</p>
 */
export interface ReservedInstancesId {
  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace ReservedInstancesId {
  export const filterSensitiveLog = (obj: ReservedInstancesId): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance modification.</p>
 */
export interface ReservedInstancesModification {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   * 				Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The time when the modification request was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The time for the modification to become effective.</p>
   */
  EffectiveDate?: Date;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance IDs.</p>
   */
  ModificationResults?: ReservedInstancesModificationResult[];

  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   */
  ReservedInstancesIds?: ReservedInstancesId[];

  /**
   * <p>A unique ID for the Reserved Instance modification.</p>
   */
  ReservedInstancesModificationId?: string;

  /**
   * <p>The status of the Reserved Instances modification request.</p>
   */
  Status?: string;

  /**
   * <p>The reason for the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The time when the modification request was last updated.</p>
   */
  UpdateDate?: Date;
}

export namespace ReservedInstancesModification {
  export const filterSensitiveLog = (obj: ReservedInstancesModification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The Reserved Instance modification information.</p>
   */
  ReservedInstancesModifications?: ReservedInstancesModification[];
}

export namespace DescribeReservedInstancesModificationsResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesModificationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (for example, one year or
   *           three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example,
   *           9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the
   *           reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>marketplace</code> - Set to <code>true</code> to show only Reserved Instance
   *           Marketplace offerings. When this filter is not used, which is the default behavior, all
   *           offerings from both AWS and the Reserved Instance Marketplace are listed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description.
   *           Instances that include <code>(Amazon VPC)</code> in the product platform description will
   *           only be displayed to EC2-Classic account holders and are for use with Amazon VPC.
   *             (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE
   *             Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise
   *             Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Windows</code>
   *           | <code>Windows (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> |
   *             <code>Windows with SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL
   *             Server Web</code> | <code> Windows with SQL Server Web (Amazon VPC)</code> |
   *             <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL Server
   *             Enterprise (Amazon VPC)</code>) </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-offering-id</code> - The Reserved Instances offering
   *           ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Availability Zone</code> or
   *             <code>Region</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for
   *           example, 0.84).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Include Reserved Instance Marketplace offerings in the response.</p>
   */
  IncludeMarketplace?: boolean;

  /**
   * <p>The instance type that the reservation will cover (for example, <code>m1.small</code>). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum duration (in seconds) to filter when searching for offerings.</p>
   * 		       <p>Default: 94608000 (3 years)</p>
   */
  MaxDuration?: number;

  /**
   * <p>The maximum number of instances to filter when searching for offerings.</p>
   * 		       <p>Default: 20</p>
   */
  MaxInstanceCount?: number;

  /**
   * <p>The minimum duration (in seconds) to filter when searching for offerings.</p>
   * 		       <p>Default: 2592000 (1 month)</p>
   */
  MinDuration?: number;

  /**
   * <p>The offering class of the Reserved Instance. Can be <code>standard</code> or <code>convertible</code>.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance product platform description. Instances that include <code>(Amazon
   *         VPC)</code> in the description are for use with Amazon VPC.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>One or more Reserved Instances offering IDs.</p>
   */
  ReservedInstancesOfferingIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tenancy of the instances covered by the reservation. A Reserved Instance with a tenancy
   *       of <code>dedicated</code> is applied to instances that run in a VPC on single-tenant hardware
   *       (i.e., Dedicated Instances).</p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   * 			results of the initial request can be seen by sending another request with the returned
   * 				<code>NextToken</code> value. The maximum is 100.</p>
   * 		       <p>Default: 100</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type. </p>
   */
  OfferingType?: OfferingTypeValues | string;
}

export namespace DescribeReservedInstancesOfferingsRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface PricingDetail {
  /**
   * <p>The number of reservations available for the price.</p>
   */
  Count?: number;

  /**
   * <p>The price per instance.</p>
   */
  Price?: number;
}

export namespace PricingDetail {
  export const filterSensitiveLog = (obj: PricingDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface ReservedInstancesOffering {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Reserved Instance offering. This is the offering ID used in <a>GetReservedInstancesExchangeQuote</a>
   *      to confirm that an exchange can be made.</p>
   */
  ReservedInstancesOfferingId?: string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency of the Reserved Instance offering you are purchasing. It's
   * 				specified using ISO 4217 standard currency codes. At this time,
   * 				the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>Indicates whether the offering is available through the Reserved Instance Marketplace (resale) or AWS.
   *         If it's a Reserved Instance Marketplace offering, this is <code>true</code>.</p>
   */
  Marketplace?: boolean;

  /**
   * <p>If <code>convertible</code> it can be exchanged for Reserved Instances of
   *       the same or higher monetary value, with different configurations. If <code>standard</code>, it is not
   *       possible to perform an exchange.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The pricing details of the Reserved Instance offering.</p>
   */
  PricingDetails?: PricingDetail[];

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or an Availability Zone.</p>
   */
  Scope?: Scope | string;
}

export namespace ReservedInstancesOffering {
  export const filterSensitiveLog = (obj: ReservedInstancesOffering): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * <p>A list of Reserved Instances offerings.</p>
   */
  ReservedInstancesOfferings?: ReservedInstancesOffering[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeReservedInstancesOfferingsResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesOfferingsResult): any => ({
    ...obj,
  });
}

export interface DescribeRouteTablesRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>association.route-table-association-id</code> - The ID of an association
   *                     ID for the route table.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.route-table-id</code> - The ID of the route table involved in
   *                     the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the
   *                     association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.main</code> - Indicates whether the route table is the main
   *                     route table for the VPC (<code>true</code> | <code>false</code>). Route tables
   *                     that do not have an association ID are not returned in the response.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the route table.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>route-table-id</code> - The ID of the route table.</p>
   * 		          </li>
   *             <li>
   * 				           <p>
   *                   <code>route.destination-cidr-block</code> - The IPv4 CIDR range specified in a
   *                     route in the table.</p>
   * 			         </li>
   *             <li>
   *                   <p>
   *                   <code>route.destination-ipv6-cidr-block</code> - The IPv6 CIDR range specified in a route in the route table.</p>
   *                </li>
   *             <li>
   * 				           <p>
   *                   <code>route.destination-prefix-list-id</code> - The ID (prefix) of the AWS
   *                     service specified in a route in the table.</p>
   * 			         </li>
   *             <li>
   *                   <p>
   *                   <code>route.egress-only-internet-gateway-id</code> - The ID of an
   *                     egress-only Internet gateway specified in a route in the route table.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>route.gateway-id</code> - The ID of a gateway specified in a route in the table.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>route.instance-id</code> - The ID of an instance specified in a route in the table.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                   <code>route.nat-gateway-id</code> - The ID of a NAT gateway.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>route.transit-gateway-id</code> - The ID of a transit gateway.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>route.origin</code> - Describes how the route was created.
   *                         <code>CreateRouteTable</code> indicates that the route was automatically
   *                     created when the route table was created; <code>CreateRoute</code> indicates
   *                     that the route was manually added to the route table;
   *                         <code>EnableVgwRoutePropagation</code> indicates that the route was
   *                     propagated by route propagation.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>route.state</code> - The state of a route in the route table
   *                         (<code>active</code> | <code>blackhole</code>). The blackhole state
   *                     indicates that the route's target isn't available (for example, the specified
   *                     gateway isn't attached to the VPC, the specified NAT instance has been
   *                     terminated, and so on).</p>
   *                </li>
   *             <li>
   * 		            <p>
   *                   <code>route.vpc-peering-connection-id</code> - The ID of a VPC peering
   * 		                connection specified in a route in the table.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the route table.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more route table IDs.</p>
   * 		       <p>Default: Describes all your route tables.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeRouteTablesRequest {
  export const filterSensitiveLog = (obj: DescribeRouteTablesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeRouteTables.</p>
 */
export interface DescribeRouteTablesResult {
  /**
   * <p>Information about one or more route tables.</p>
   */
  RouteTables?: RouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeRouteTablesResult {
  export const filterSensitiveLog = (obj: DescribeRouteTablesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.</p>
 */
export interface SlotDateTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime: Date | undefined;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start. This value must be later than or equal to the earliest date and at most three months in the future.</p>
   */
  LatestTime: Date | undefined;
}

export namespace SlotDateTimeRangeRequest {
  export const filterSensitiveLog = (obj: SlotDateTimeRangeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>Frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday). You can't specify this value with a daily schedule. If the occurrence is relative to the end of the month, you can specify only a single day.</p>
   */
  OccurrenceDays?: number[];

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month. You can't specify this value with a daily schedule.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * <p>The unit for <code>OccurrenceDays</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).
   *         This value is required for a monthly schedule.
   *         You can't specify <code>DayOfWeek</code> with a weekly schedule.
   *         You can't specify this value with a daily schedule.</p>
   */
  OccurrenceUnit?: string;
}

export namespace ScheduledInstanceRecurrenceRequest {
  export const filterSensitiveLog = (obj: ScheduledInstanceRecurrenceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-platform</code> - The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest | undefined;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 300.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The maximum available duration, in hours. This value must be greater than <code>MinSlotDurationInHours</code>
   *          and less than 1,720.</p>
   */
  MaxSlotDurationInHours?: number;

  /**
   * <p>The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
   */
  MinSlotDurationInHours?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence: ScheduledInstanceRecurrenceRequest | undefined;
}

export namespace DescribeScheduledInstanceAvailabilityRequest {
  export const filterSensitiveLog = (obj: DescribeScheduledInstanceAvailabilityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrence {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).</p>
   */
  OccurrenceDaySet?: number[];

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * <p>The unit for <code>occurrenceDaySet</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).</p>
   */
  OccurrenceUnit?: string;
}

export namespace ScheduledInstanceRecurrence {
  export const filterSensitiveLog = (obj: ScheduledInstanceRecurrence): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 */
export interface ScheduledInstanceAvailability {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of available instances.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTime?: Date;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   */
  InstanceType?: string;

  /**
   * <p>The maximum term. The only possible value is 365 days.</p>
   */
  MaxTermDurationInDays?: number;

  /**
   * <p>The minimum term. The only possible value is 365 days.</p>
   */
  MinTermDurationInDays?: number;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The purchase token. This token expires in two hours.</p>
   */
  PurchaseToken?: string;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

export namespace ScheduledInstanceAvailability {
  export const filterSensitiveLog = (obj: ScheduledInstanceAvailability): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the available Scheduled Instances.</p>
   */
  ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[];
}

export namespace DescribeScheduledInstanceAvailabilityResult {
  export const filterSensitiveLog = (obj: DescribeScheduledInstanceAvailabilityResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule.</p>
 */
export interface SlotStartTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  LatestTime?: Date;
}

export namespace SlotStartTimeRangeRequest {
  export const filterSensitiveLog = (obj: SlotStartTimeRangeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-platform</code> - The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 100.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Scheduled Instance IDs.</p>
   */
  ScheduledInstanceIds?: string[];

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  SlotStartTimeRange?: SlotStartTimeRangeRequest;
}

export namespace DescribeScheduledInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeScheduledInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Scheduled Instance.</p>
 */
export interface ScheduledInstance {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The number of instances.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The time for the next schedule to start.</p>
   */
  NextSlotStartTime?: Date;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   */
  PreviousSlotEndTime?: Date;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId?: string;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   */
  TermEndDate?: Date;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   */
  TermStartDate?: Date;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

export namespace ScheduledInstance {
  export const filterSensitiveLog = (obj: ScheduledInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

export namespace DescribeScheduledInstancesResult {
  export const filterSensitiveLog = (obj: DescribeScheduledInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupReferencesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the security groups in your account.</p>
   */
  GroupId: string[] | undefined;
}

export namespace DescribeSecurityGroupReferencesRequest {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupReferencesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC with a security group that references your security group.</p>
 */
export interface SecurityGroupReference {
  /**
   * <p>The ID of your security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the VPC with the referencing security group.</p>
   */
  ReferencingVpcId?: string;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace SecurityGroupReference {
  export const filterSensitiveLog = (obj: SecurityGroupReference): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupReferencesResult {
  /**
   * <p>Information about the VPCs with the referencing security groups.</p>
   */
  SecurityGroupReferenceSet?: SecurityGroupReference[];
}

export namespace DescribeSecurityGroupReferencesResult {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupReferencesResult): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupsRequest {
  /**
   * <p>The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the security group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.cidr</code> - An IPv4 CIDR block for an outbound
   *                     security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.from-port</code> - For an outbound rule, the
   *                     start of port range for the TCP and UDP protocols, or an ICMP type
   *                     number.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.group-id</code> - The ID of a security group
   *                     that has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.group-name</code> - The name of a security group
   *                     that has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an
   *                     outbound security group rule.</p>
   *             </li>
   *             <li>
   *      		        <p>
   *                   <code>egress.ip-permission.prefix-list-id</code> - The ID of a prefix list to which a security group rule allows outbound access.</p>
   *      	      </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.protocol</code> - The IP protocol for an
   *                     outbound security group rule (<code>tcp</code> | <code>udp</code> |
   *                         <code>icmp</code> or a protocol number).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.to-port</code> - For an outbound rule, the end
   *                     of port range for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.user-id</code> - The ID of an AWS account that
   *                     has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the security group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.cidr</code> - An IPv4 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.from-port</code> - For an inbound rule, the start of port
   *                     range for the TCP and UDP protocols, or an ICMP type number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.group-id</code> - The ID of a security group that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                     <code>ip-permission.group-name</code> - The name of a security group that has
   *                     been referenced in an inbound security group rule.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ip-permission.prefix-list-id</code> - The ID of a prefix list from which a security group rule allows inbound access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.protocol</code> - The IP protocol for an inbound security
   *                     group rule (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a
   *                     protocol number).</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.to-port</code> - For an inbound rule, the end of port range
   *                     for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.user-id</code> - The ID of an AWS account that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The AWS account ID of the owner of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC specified when the security group was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the security groups. Required for security groups in a nondefault VPC.</p>
   *          <p>Default: Describes all your security groups.</p>
   */
  GroupIds?: string[];

  /**
   * <p>[EC2-Classic and default VPC only] The names of the security groups. You can specify either
   * 			the security group name or the security group ID. For security groups in a nondefault VPC, use
   * 			the <code>group-name</code> filter to describe security groups by name.</p>
   *          <p>Default: Describes all your security groups.</p>
   */
  GroupNames?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. If this parameter is not specified, then all results are
   *             returned.</p>
   */
  MaxResults?: number;
}

export namespace DescribeSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group</p>
 */
export interface SecurityGroup {
  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The AWS account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: IpPermission[];

  /**
   * <p>Any tags assigned to the security group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export namespace SecurityGroup {
  export const filterSensitiveLog = (obj: SecurityGroup): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupsResult {
  /**
   * <p>Information about the security groups.</p>
   */
  SecurityGroups?: SecurityGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSecurityGroupsResult {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupsResult): any => ({
    ...obj,
  });
}

export type SnapshotAttributeName = "createVolumePermission" | "productCodes";

export interface DescribeSnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute you would like to view.</p>
   */
  Attribute: SnapshotAttributeName | string | undefined;

  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeSnapshotAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeSnapshotAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the user or group to be added or removed from the list of create volume
 *       permissions for a volume.</p>
 */
export interface CreateVolumePermission {
  /**
   * <p>The group to be added or removed. The possible value is <code>all</code>.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * <p>The AWS account ID to be added or removed.</p>
   */
  UserId?: string;
}

export namespace CreateVolumePermission {
  export const filterSensitiveLog = (obj: CreateVolumePermission): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotAttributeResult {
  /**
   * <p>The users and groups that have the permissions for creating volumes from the
   *       snapshot.</p>
   */
  CreateVolumePermissions?: CreateVolumePermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId?: string;
}

export namespace DescribeSnapshotAttributeResult {
  export const filterSensitiveLog = (obj: DescribeSnapshotAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - A description of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>encrypted</code> - Indicates whether the snapshot is encrypted
   *             (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias, from an Amazon-maintained list
   *           (<code>amazon</code>).
   *           This is not the user-configured AWS account alias set using the IAM console.
   *           We recommend that you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The AWS account ID of the owner. We recommend that
   *           you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The progress of the snapshot, as a percentage (for example,
   *           80%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time stamp when the snapshot was initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the snapshot (<code>pending</code> |
   *             <code>completed</code> | <code>error</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume the snapshot is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-size</code> - The size of the volume, in GiB.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of snapshot results returned by <code>DescribeSnapshots</code> in
   *       paginated output. When this parameter is used, <code>DescribeSnapshots</code> only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeSnapshots</code> request with the returned <code>NextToken</code> value. This
   *       value can be between 5 and 1,000; if <code>MaxResults</code> is given a value larger than 1,000,
   *       only 1,000 results are returned. If this parameter is not used, then
   *         <code>DescribeSnapshots</code> returns all results. You cannot specify this parameter and
   *       the snapshot IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *         <code>DescribeSnapshots</code> request where <code>MaxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>NextToken</code> value. This value is
   *         <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Scopes the results to snapshots with the specified owners. You can specify a combination of
   *       AWS account IDs, <code>self</code>, and <code>amazon</code>.</p>
   */
  OwnerIds?: string[];

  /**
   * <p>The IDs of the AWS accounts that can create volumes from the snapshot.</p>
   */
  RestorableByUserIds?: string[];

  /**
   * <p>The snapshot IDs.</p>
   *          <p>Default: Describes the snapshots for which you have create volume permissions.</p>
   */
  SnapshotIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeSnapshotsRequest {
  export const filterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotsResult {
  /**
   * <p>Information about the snapshots.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeSnapshots</code>
   *       request. When the results of a <code>DescribeSnapshots</code> request exceed
   *         <code>MaxResults</code>, this value can be used to retrieve the next page of results. This
   *       value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSnapshotsResult {
  export const filterSensitiveLog = (obj: DescribeSnapshotsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeSpotDatafeedSubscriptionRequest {
  export const filterSensitiveLog = (obj: DescribeSpotDatafeedSubscriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

export namespace DescribeSpotDatafeedSubscriptionResult {
  export const filterSensitiveLog = (obj: DescribeSpotDatafeedSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call.
   *       Specify a value between 1 and 1000. The default value is 1000.
   *       To retrieve the remaining results, make another call with the returned
   *       <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;
}

export namespace DescribeSpotFleetInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeSpotFleetInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *             date.</p>
   */
  ActiveInstances?: ActiveInstance[];

  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export namespace DescribeSpotFleetInstancesResponse {
  export const filterSensitiveLog = (obj: DescribeSpotFleetInstancesResponse): any => ({
    ...obj,
  });
}

export enum EventType {
  BATCH_CHANGE = "fleetRequestChange",
  ERROR = "error",
  INFORMATION = "information",
  INSTANCE_CHANGE = "instanceChange",
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: EventType | string;

  /**
   * <p>The maximum number of results to return in a single call.
   *       Specify a value between 1 and 1000. The default value is 1000.
   *       To retrieve the remaining results, make another call with the returned
   *       <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The starting date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;
}

export namespace DescribeSpotFleetRequestHistoryRequest {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 */
export interface HistoryRecord {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * <p>The event type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>error</code> - An error with the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleetRequestChange</code> - A change in the status or configuration of the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instanceChange</code> - An instance was launched or terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Information</code> - An informational event.</p>
   *             </li>
   *          </ul>
   */
  EventType?: EventType | string;

  /**
   * <p>The date and time of the event, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

export namespace HistoryRecord {
  export const filterSensitiveLog = (obj: HistoryRecord): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * <p>Information about the events in the history of the Spot Fleet request.</p>
   */
  HistoryRecords?: HistoryRecord[];

  /**
   * <p>The last date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *       All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more results, this value is not present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The starting date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

export namespace DescribeSpotFleetRequestHistoryResponse {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestHistoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call.
   *       Specify a value between 1 and 1000. The default value is 1000.
   *       To retrieve the remaining results, make another call with the returned
   *       <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   */
  SpotFleetRequestIds?: string[];
}

export namespace DescribeSpotFleetRequestsRequest {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestsRequest): any => ({
    ...obj,
  });
}

export enum ExcessCapacityTerminationPolicy {
  DEFAULT = "default",
  NO_TERMINATION = "noTermination",
}

/**
 * <p>Describes whether monitoring is enabled.</p>
 */
export interface SpotFleetMonitoring {
  /**
   * <p>Enables monitoring for the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Enabled?: boolean;
}

export namespace SpotFleetMonitoring {
  export const filterSensitiveLog = (obj: SpotFleetMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. The
   *             public IP address can only be assigned to a network interface for eth0, and can only be
   *             assigned to a new network interface, not an existing one. You cannot specify more than one
   *             network interface in the request. If launching into a default subnet, the default value is
   *             <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>If set to <code>true</code>, the interface is deleted when the instance is terminated. You can
   *             specify <code>true</code> only if creating a new network interface when launching an
   *             instance.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The description of the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Description?: string;

  /**
   * <p>The position of the network interface in the attachment order.
   *           A primary network interface has a device index of 0.</p>
   *         <p>If you specify a network interface when launching an instance,
   *           you must specify the device index.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Groups?: string[];

  /**
   * <p>A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses
   *             the IPv6 addresses from the range of the subnet. You cannot specify this option and the
   *             option to assign specific IPv6 addresses in the same request. You can specify this
   *             option if you've specified a minimum number of instances to launch.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more IPv6 addresses to assign to the network interface. You cannot specify
   *             this option and the option to assign a number of IPv6 addresses in the same request. You
   *             cannot specify this option if you've specified a minimum number of instances to
   *             launch.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   *         <p>If you are creating a Spot Fleet, omit this parameter because you can’t specify a network interface ID in a launch specification.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IPv4 address of the network interface. Applies only if creating a network interface when launching an instance. You cannot specify this option if you're launching
   *         	more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses. You can't specify this option and specify more than one private IP address using the private IP addresses option. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet associated with the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>Indicates whether to assign a carrier IP address to the network interface.</p>
   *         <p>You can only assign a carrier IP address to a network interface that is in a subnet in a Wavelength Zone. For more information about carrier IP addresses, see Carrier IP addresses in the AWS Wavelength Developer Guide.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>The type of network interface.</p>
   * 	        <p>To create an Elastic Fabric Adapter (EFA), specify
   * 			<code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the
   * 			<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * 		       <p>If you are not creating an EFA, specify <code>interface</code> or omit this parameter.</p>
   * 		       <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   */
  NetworkCardIndex?: number;
}

export namespace InstanceNetworkInterfaceSpecification {
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes Spot Instance placement.</p>
 */
export interface SpotPlacement {
  /**
   * <p>The Availability Zone.</p>
   *          <p>[Spot Fleet only] To specify multiple Availability Zones, separate them using commas; for example, "us-west-2a, us-west-2b".</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy
   *        of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code> tenancy is not
   *        supported for Spot Instances.</p>
   */
  Tenancy?: Tenancy | string;
}

export namespace SpotPlacement {
  export const filterSensitiveLog = (obj: SpotPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>The tags for a Spot Fleet resource.</p>
 */
export interface SpotFleetTagSpecification {
  /**
   * <p>The type of resource. Currently, the only resource type that is supported is
   *                 <code>instance</code>. To tag the Spot Fleet request on creation, use the
   *             <code>TagSpecifications</code> parameter in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html">
   *                <code>SpotFleetRequestConfigData</code>
   *             </a>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace SpotFleetTagSpecification {
  export const filterSensitiveLog = (obj: SpotFleetTagSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for one or more Spot Instances. If you include
 *             On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use
 *                 <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
 */
export interface SpotFleetLaunchSpecification {
  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block devices that are mapped to the Spot Instances. You can't specify both
   *             a snapshot ID and an encryption value. This is because only blank volumes can be
   *             encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its
   *             encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

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
  Monitoring?: SpotFleetMonitoring;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *           subnet IDs and security group IDs using the network interface.</p>
   *          <note>
   *             <p>
   *                <code>SpotFleetLaunchSpecification</code> currently does not support Elastic Fabric Adapter (EFA). To specify an EFA, you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
   *          </note>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.
   *           If this value is not specified, the default is the Spot price specified for the fleet.
   *           To determine the Spot price per unit hour, divide the Spot price by the
   *           value of <code>WeightedCapacity</code>.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate
   *           them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data that instances use when starting up.</p>
   */
  UserData?: string;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The tags to apply during creation.</p>
   */
  TagSpecifications?: SpotFleetTagSpecification[];
}

export namespace SpotFleetLaunchSpecification {
  export const filterSensitiveLog = (obj: SpotFleetLaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface LaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The priority for the launch template override. If <b>OnDemandAllocationStrategy</b> is set to <code>prioritized</code>, Spot Fleet uses
   *             priority to determine which launch template override to use first in fulfilling
   *             On-Demand capacity. The highest priority is launched first. Valid values are whole numbers starting at <code>0</code>. The lower
   *             the number, the higher the priority. If no number is set, the launch template override
   *             has the lowest priority.</p>
   */
  Priority?: number;
}

export namespace LaunchTemplateOverrides {
  export const filterSensitiveLog = (obj: LaunchTemplateOverrides): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?: LaunchTemplateOverrides[];
}

export namespace LaunchTemplateConfig {
  export const filterSensitiveLog = (obj: LaunchTemplateConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Classic Load Balancer.</p>
 */
export interface ClassicLoadBalancer {
  /**
   * <p>The name of the load balancer.</p>
   */
  Name?: string;
}

export namespace ClassicLoadBalancer {
  export const filterSensitiveLog = (obj: ClassicLoadBalancer): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances
 *             with these Classic Load Balancers.</p>
 */
export interface ClassicLoadBalancersConfig {
  /**
   * <p>One or more Classic Load Balancers.</p>
   */
  ClassicLoadBalancers?: ClassicLoadBalancer[];
}

export namespace ClassicLoadBalancersConfig {
  export const filterSensitiveLog = (obj: ClassicLoadBalancersConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer target group.</p>
 */
export interface TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  Arn?: string;
}

export namespace TargetGroup {
  export const filterSensitiveLog = (obj: TargetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances
 *             with these target groups.</p>
 */
export interface TargetGroupsConfig {
  /**
   * <p>One or more target groups.</p>
   */
  TargetGroups?: TargetGroup[];
}

export namespace TargetGroupsConfig {
  export const filterSensitiveLog = (obj: TargetGroupsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.</p>
 */
export interface LoadBalancersConfig {
  /**
   * <p>The Classic Load Balancers.</p>
   */
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig;

  /**
   * <p>The target groups.</p>
   */
  TargetGroupsConfig?: TargetGroupsConfig;
}

export namespace LoadBalancersConfig {
  export const filterSensitiveLog = (obj: LoadBalancersConfig): any => ({
    ...obj,
  });
}

export enum OnDemandAllocationStrategy {
  LOWEST_PRICE = "lowestPrice",
  PRIORITIZED = "prioritized",
}

export enum ReplacementStrategy {
  LAUNCH = "launch",
}

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
 *             Spot Instance is at an elevated risk of being interrupted. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#spot-fleet-capacity-rebalance">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface SpotCapacityRebalance {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *                 <code>maintain</code>. You must specify a value, otherwise you get an error.</p>
   *         <p>To allow Spot Fleet to launch a replacement Spot Instance when an instance rebalance
   *             notification is emitted for a Spot Instance in the fleet, specify
   *             <code>launch</code>.</p>
   *         <note>
   *             <p>When a replacement instance is launched, the instance marked for rebalance is not
   *                 automatically terminated. You can terminate it, or you can leave it running. You are
   *                 charged for all instances while they are running.</p>
   *         </note>
   */
  ReplacementStrategy?: ReplacementStrategy | string;
}

export namespace SpotCapacityRebalance {
  export const filterSensitiveLog = (obj: SpotCapacityRebalance): any => ({
    ...obj,
  });
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *             interrupted.</p>
 */
export interface SpotMaintenanceStrategies {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *             elevated risk of being interrupted.</p>
   */
  CapacityRebalance?: SpotCapacityRebalance;
}

export namespace SpotMaintenanceStrategies {
  export const filterSensitiveLog = (obj: SpotMaintenanceStrategies): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfigData {
  /**
   * <p>Indicates how to allocate the target Spot Instance capacity across the Spot Instance pools specified by
   *             the Spot Fleet request.</p>
   *         <p>If the allocation strategy is <code>lowestPrice</code>, Spot Fleet launches instances from
   *             the Spot Instance pools with the lowest price. This is the default allocation strategy.</p>
   *         <p>If the allocation strategy is <code>diversified</code>, Spot Fleet launches instances from
   *             all the Spot Instance pools that you specify.</p>
   *         <p>If the allocation strategy is <code>capacityOptimized</code>, Spot Fleet launches instances
   *             from Spot Instance pools with optimal capacity for the number of instances that are
   *             launching.</p>
   */
  AllocationStrategy?: AllocationStrategy | string;

  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity.
   *             If you specify <code>lowestPrice</code>, Spot Fleet uses price to determine the order,
   *             launching the lowest price first. If you specify <code>prioritized</code>, Spot Fleet uses the
   *             priority that you assign to each Spot Fleet launch template override, launching the highest
   *             priority first. If you do not specify a value, Spot Fleet defaults to
   *             <code>lowestPrice</code>.</p>
   */
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy | string;

  /**
   * <p>The strategies for managing your Spot Instances that are at an
   *             elevated risk of being interrupted.</p>
   */
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of
   *             your listings. This helps to avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether running Spot Instances should be terminated if you decrease the target
   *             capacity of the Spot Fleet request below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The number of units fulfilled by this request compared to the set target capacity. You cannot set this value.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The number of On-Demand units fulfilled by this request compared to the set target On-Demand capacity.</p>
   */
  OnDemandFulfilledCapacity?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that
   *             grants the Spot Fleet the permission to request, launch, terminate, and tag instances on
   *             your behalf. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites">Spot
   *                 Fleet prerequisites</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>. Spot Fleet
   *             can terminate Spot Instances on your behalf when you cancel its Spot Fleet request using
   *           <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests">CancelSpotFleetRequests</a> or when the Spot Fleet request expires, if
   *             you set <code>TerminateInstancesWithExpiration</code>.</p>
   */
  IamFleetRole: string | undefined;

  /**
   * <p>The launch specifications for the Spot Fleet request. If you specify
   *                 <code>LaunchSpecifications</code>, you can't specify
   *                 <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your
   *             request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchSpecifications?: SpotFleetLaunchSpecification[];

  /**
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>,
   *             you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity
   *             in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. The default is the On-Demand price.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The number of units to request for the Spot Fleet. You can choose to set the target
   *             capacity in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The number of On-Demand units to request. You can choose to set the target capacity
   *             in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.
   *             You can use the <code>onDemandMaxTotalPrice</code> parameter, the <code>spotMaxTotalPrice</code>
   *             parameter, or both parameters to ensure that your fleet cost does not exceed
   *             your budget. If you set a maximum price per hour for the On-Demand Instances and
   *             Spot Instances in your request, Spot Fleet will launch instances until it reaches
   *             the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached,
   *             the fleet stops launching instances even if it hasn’t met the target capacity.</p>
   */
  OnDemandMaxTotalPrice?: string;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay.
   *             You can use the <code>spotdMaxTotalPrice</code> parameter, the <code>onDemandMaxTotalPrice</code>
   *             parameter, or both parameters to ensure that your fleet cost does not exceed
   *             your budget. If you set a maximum price per hour for the On-Demand Instances and
   *             Spot Instances in your request, Spot Fleet will launch instances until it reaches
   *             the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached,
   *             the fleet stops launching instances even if it hasn’t met the target capacity.</p>
   */
  SpotMaxTotalPrice?: string;

  /**
   * <p>Indicates whether running Spot Instances are terminated when the Spot Fleet request
   *             expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The type of request. Indicates whether the Spot Fleet only requests the target capacity
   *             or also attempts to maintain it. When this value is <code>request</code>, the Spot Fleet
   *             only places the required requests. It does not attempt to replenish Spot Instances if
   *             capacity is diminished, nor does it submit requests in alternative Spot pools if
   *             capacity is not available. When this value is <code>maintain</code>, the Spot Fleet
   *             maintains the target capacity. The Spot Fleet places the required requests to meet
   *             capacity and automatically replenishes any interrupted instances. Default:
   *                 <code>maintain</code>. <code>instant</code> is listed but is not used by Spot
   *             Fleet.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The start date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             By default, Amazon EC2 starts fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             After the end date and time, no new Spot Instance requests are placed or able to fulfill the request.
   *             If no value is specified, the Spot Fleet request remains until you cancel it.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>Indicates whether Spot Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;

  /**
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet request.
   *           Spot Fleet registers the running Spot Instances with the specified Classic Load Balancers and target groups.</p>
   *          <p>With Network Load Balancers, Spot Fleet cannot register instances that have the following instance types:
   *           C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1.</p>
   */
  LoadBalancersConfig?: LoadBalancersConfig;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid
   *             only when Spot <b>AllocationStrategy</b> is set to
   *                 <code>lowest-price</code>. Spot Fleet selects the cheapest Spot pools and evenly
   *             allocates your target Spot capacity across the number of Spot pools that you
   *             specify.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>The key-value pair for tagging the Spot Fleet request on creation. The value for
   *                 <code>ResourceType</code> must be <code>spot-fleet-request</code>, otherwise the
   *             Spot Fleet request fails. To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
   *                 template</a> (valid only if you use <code>LaunchTemplateConfigs</code>) or in
   *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetTagSpecification.html">
   *                <code>SpotFleetTagSpecification</code>
   *             </a> (valid only if you use
   *                 <code>LaunchSpecifications</code>). For information about tagging after launch, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging Your Resources</a>.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace SpotFleetRequestConfigData {
  export const filterSensitiveLog = (obj: SpotFleetRequestConfigData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfig {
  /**
   * <p>The progress of the Spot Fleet request.
   *           If there is an error, the status is <code>error</code>.
   *           After all requests are placed, the status is <code>pending_fulfillment</code>.
   *           If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *           If the size of the fleet is decreased, the status is <code>pending_termination</code>
   *           while Spot Instances are terminating.</p>
   */
  ActivityStatus?: ActivityStatus | string;

  /**
   * <p>The creation date and time of the request.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The state of the Spot Fleet request.</p>
   */
  SpotFleetRequestState?: BatchState | string;

  /**
   * <p>The tags for a Spot Fleet resource.</p>
   */
  Tags?: Tag[];
}

export namespace SpotFleetRequestConfig {
  export const filterSensitiveLog = (obj: SpotFleetRequestConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the configuration of your Spot Fleet.</p>
   */
  SpotFleetRequestConfigs?: SpotFleetRequestConfig[];
}

export namespace DescribeSpotFleetRequestsResponse {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone-group</code> - The Availability Zone group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time stamp when the Spot Instance request was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fault-code</code> - The fault code related to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fault-message</code> - The fault message related to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance that fulfilled the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-group</code> - The Spot Instance launch group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.delete-on-termination</code> - Indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.device-name</code> - The device name for the volume in the block device mapping (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.snapshot-id</code> - The ID of the snapshot for the EBS volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-size</code> - The size of the EBS volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-type</code> - The type of EBS volume:
   *                <code>gp2</code> for General Purpose SSD, <code>io1</code> or <code>io2</code> for Provisioned IOPS SSD, <code>st1</code> for
   *                Throughput Optimized HDD, <code>sc1</code>for Cold HDD, or <code>standard</code> for Magnetic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-id</code> - The ID of the security group for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-name</code> - The name of the security group for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.instance-type</code> - The type of instance (for example, <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.key-name</code> - The name of the key pair the instance launched with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.monitoring-enabled</code> - Whether detailed monitoring is enabled for the Spot Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launched-availability-zone</code> - The Availability Zone in which the request is launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Indicates whether the IP address is
   *                the primary private IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.delete-on-termination</code> - Indicates whether the network
   *                interface is deleted when the instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.description</code> - A description of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.device-index</code> - The index of the device for the network
   *                interface attachment on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-id</code> - The ID of the security group associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-ip-address</code> - The primary private IP address of
   *                the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The product description associated with the instance (<code>Linux/UNIX</code> | <code>Windows</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-instance-request-id</code> - The Spot Instance request ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The maximum hourly price for any Spot Instance launched to fulfill the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Spot Instance request (<code>open</code>
   *                     | <code>active</code> | <code>closed</code> | <code>cancelled</code> |
   *                         <code>failed</code>). Spot request status information can help you track
   *                     your Amazon EC2 Spot Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html">Spot
   *                         request status</a> in the
   *                     <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-code</code> - The short code describing the most recent evaluation of your Spot Instance request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The message explaining the status of the Spot Instance request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of Spot Instance request (<code>one-time</code> | <code>persistent</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>valid-from</code> - The start date of the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>valid-until</code> - The end date of the request.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Spot Instance request IDs.</p>
   */
  SpotInstanceRequestIds?: string[];

  /**
   * <p>The token to request the next set of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 5
   *             and 1000. To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeSpotInstanceRequestsRequest {
  export const filterSensitiveLog = (obj: DescribeSpotInstanceRequestsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled: boolean | undefined;
}

export namespace RunInstancesMonitoringEnabled {
  export const filterSensitiveLog = (obj: RunInstancesMonitoringEnabled): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for an instance.</p>
 */
export interface LaunchSpecification {
  /**
   * <p>The Base64-encoded user data for the instance.</p>
   */
  UserData?: string;

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>Describes the monitoring of an instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;
}

export namespace LaunchSpecification {
  export const filterSensitiveLog = (obj: LaunchSpecification): any => ({
    ...obj,
  });
}

export type SpotInstanceState = "active" | "cancelled" | "closed" | "failed" | "open";

/**
 * <p>Describes the status of a Spot Instance request.</p>
 */
export interface SpotInstanceStatus {
  /**
   * <p>The status code. For a list of status codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html#spot-instance-bid-status-understand">Spot status codes</a>
   *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  Code?: string;

  /**
   * <p>The description for the status code.</p>
   */
  Message?: string;

  /**
   * <p>The date and time of the most recent status update, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  UpdateTime?: Date;
}

export namespace SpotInstanceStatus {
  export const filterSensitiveLog = (obj: SpotInstanceStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Instance request.</p>
 */
export interface SpotInstanceRequest {
  /**
   * <p>If you specified a duration and your Spot Instance request was fulfilled, this is the fixed hourly price in effect for the Spot Instance while it runs.</p>
   */
  ActualBlockHourlyPrice?: string;

  /**
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>The duration for the Spot Instance, in minutes.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  CreateTime?: Date;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   */
  LaunchGroup?: string;

  /**
   * <p>Additional information for launching instances.</p>
   */
  LaunchSpecification?: LaunchSpecification;

  /**
   * <p>The Availability Zone in which the request is launched.</p>
   */
  LaunchedAvailabilityZone?: string;

  /**
   * <p>The product description associated with the Spot Instance.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The state of the Spot Instance request. Spot status information helps track your Spot
   *             Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html">Spot status</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  State?: SpotInstanceState | string;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   */
  Status?: SpotInstanceStatus;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Spot Instance request type.</p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The start date of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *         The request becomes active at this date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the <code>validUntil</code> date
   *                     and time is reached. Otherwise, the request remains active until you cancel it.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>validUntil</code> date and time is reached. By default, the
   *                     request is valid for 7 days from the date the request was created.</p>
   *            </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace SpotInstanceRequest {
  export const filterSensitiveLog = (obj: SpotInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];

  /**
   * <p>The token to use to retrieve the next set of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSpotInstanceRequestsResult {
  export const filterSensitiveLog = (obj: DescribeSpotInstanceRequestsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for which prices should be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example, <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>product-description</code> - The product description for the Spot price
   *                         (<code>Linux/UNIX</code> | <code>Red Hat Enterprise Linux</code> |
   *                         <code>SUSE Linux</code> | <code>Windows</code> | <code>Linux/UNIX (Amazon
   *                         VPC)</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code>
   *                         | <code>SUSE Linux (Amazon VPC)</code> | <code>Windows (Amazon
   *                     VPC)</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The Spot price. The value must match exactly (or use wildcards; greater than or less than comparison is not supported).</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>timestamp</code> - The time stamp of the Spot price history, in UTC format
   *                     (for example,
   *                         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *                     You can use wildcards (* and ?). Greater than or less than comparison is not
   *                     supported.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Filters the results by the specified Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The date and time, up to the current date, from which to stop retrieving the price history data,
   *        in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  EndTime?: Date;

  /**
   * <p>Filters the results by the specified instance types.</p>
   */
  InstanceTypes?: (_InstanceType | string)[];

  /**
   * <p>The maximum number of results to return in a single call.
   *        Specify a value between 1 and 1000. The default value is 1000.
   *        To retrieve the remaining results, make another call with the returned
   *        <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters the results by the specified basic product descriptions.</p>
   */
  ProductDescriptions?: string[];

  /**
   * <p>The date and time, up to the past 90 days, from which to start retrieving the price history data,
   *        in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

export namespace DescribeSpotPriceHistoryRequest {
  export const filterSensitiveLog = (obj: DescribeSpotPriceHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the maximum price per hour that you are willing to pay for a Spot Instance.</p>
 */
export interface SpotPrice {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A general description of the AMI.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The date and time the request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

export namespace SpotPrice {
  export const filterSensitiveLog = (obj: SpotPrice): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is null or an empty
   *             string when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The historical Spot prices.</p>
   */
  SpotPriceHistory?: SpotPrice[];
}

export namespace DescribeSpotPriceHistoryResult {
  export const filterSensitiveLog = (obj: DescribeSpotPriceHistoryResult): any => ({
    ...obj,
  });
}

export interface DescribeStaleSecurityGroupsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace DescribeStaleSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeStaleSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stale rule in a security group.</p>
 */
export interface StaleIpPermission {
  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (for <code>tcp</code>, <code>udp</code>, and <code>icmp</code>) or number  (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   */
  IpRanges?: string[];

  /**
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   */
  PrefixListIds?: string[];

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  ToPort?: number;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   */
  UserIdGroupPairs?: UserIdGroupPair[];
}

export namespace StaleIpPermission {
  export const filterSensitiveLog = (obj: StaleIpPermission): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 */
export interface StaleSecurityGroup {
  /**
   * <p>The description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   */
  StaleIpPermissions?: StaleIpPermission[];

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   */
  StaleIpPermissionsEgress?: StaleIpPermission[];

  /**
   * <p>The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export namespace StaleSecurityGroup {
  export const filterSensitiveLog = (obj: StaleSecurityGroup): any => ({
    ...obj,
  });
}

export interface DescribeStaleSecurityGroupsResult {
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the stale security groups.</p>
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[];
}

export namespace DescribeStaleSecurityGroupsResult {
  export const filterSensitiveLog = (obj: DescribeStaleSecurityGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribeSubnetsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone for the subnet. You can also use
   *                     <code>availabilityZone</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone for the subnet.
   *                     You can also use <code>availabilityZoneId</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>available-ip-address-count</code> - The number of IPv4 addresses in the
   *                     subnet that are available.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block</code> - The IPv4 CIDR block of the subnet. The CIDR block you
   *                     specify must exactly match the subnet's CIDR block for information to be
   *                     returned for the subnet. You can also use <code>cidr</code> or
   *                     <code>cidrBlock</code> as the filter names.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>default-for-az</code> - Indicates whether this is the default subnet for the
   *                     Availability Zone. You can also use <code>defaultForAz</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - An association ID
   *                     for an IPv6 CIDR block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the subnet (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-arn</code> - The Amazon Resource Name (ARN) of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the subnet.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more subnet IDs.</p>
   * 		       <p>Default: Describes all your subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeSubnetsRequest {
  export const filterSensitiveLog = (obj: DescribeSubnetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeSubnetsResult {
  /**
   * <p>Information about one or more subnets.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSubnetsResult {
  export const filterSensitiveLog = (obj: DescribeSubnetsResult): any => ({
    ...obj,
  });
}

export interface DescribeTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>key</code> - The tag key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type (<code>customer-gateway</code> | <code>dedicated-host</code> | <code>dhcp-options</code> | <code>elastic-ip</code> | <code>fleet</code> | <code>fpga-image</code> | <code>host-reservation</code> | <code>image</code> | <code>instance</code> | <code>internet-gateway</code> | <code>key-pair</code> | <code>launch-template</code> | <code>natgateway</code> | <code>network-acl</code> | <code>network-interface</code> | <code>placement-group</code> | <code>reserved-instances</code> | <code>route-table</code> | <code>security-group</code> | <code>snapshot</code> | <code>spot-instances-request</code> | <code>subnet</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-endpoint</code> | <code>vpc-endpoint-service</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of the tag. For example,
   *                 specify "tag:Owner" for the filter name and "TeamA" for the filter value to find
   *                 resources with the tag "Owner=TeamA".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>value</code> - The tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call.
   *       This value can be between 5 and 1000.
   * 			To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeTagsRequest {
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag.</p>
 */
export interface TagDescription {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;
}

export namespace TagDescription {
  export const filterSensitiveLog = (obj: TagDescription): any => ({
    ...obj,
  });
}

export interface DescribeTagsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *          <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: TagDescription[];
}

export namespace DescribeTagsResult {
  export const filterSensitiveLog = (obj: DescribeTagsResult): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror filter description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorFiltersRequest {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorFiltersRequest): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorFiltersResult {
  /**
   * <p>Information about one or more Traffic Mirror filters.</p>
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorFiltersResult {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorFiltersResult): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror session description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>packet-length</code>: The assigned number of packets to mirror. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>session-number</code>: The assigned session number. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-session-id</code>: The ID of the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtual-network-id</code>: The virtual network ID of the Traffic Mirror session.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorSessionsRequest {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorSessionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorSessionsResult {
  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   */
  TrafficMirrorSessions?: TrafficMirrorSession[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorSessionsResult {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorSessionsResult): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * <p>The ID of the Traffic Mirror targets.</p>
   */
  TrafficMirrorTargetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror target description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-load-balancer-arn</code>: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorTargetsRequest {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorTargetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorTargetsResult {
  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorTargetsResult {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorTargetsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.state</code> - The state of the association (<code>associating</code> | <code>associated</code> |
   *                <code>disassociating</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.transit-gateway-route-table-id</code> - The ID of the route table for the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-owner-id</code> - The ID of the AWS account that owns the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-owner-id</code> - The ID of the AWS account that owns the transit gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayAttachmentsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayAttachmentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association.</p>
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * <p>The ID of the route table for the transit gateway.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export namespace TransitGatewayAttachmentAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 */
export interface TransitGatewayAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the transit gateway.</p>
   */
  TransitGatewayOwnerId?: string;

  /**
   * <p>The ID of the AWS account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The attachment state. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The association.</p>
   */
  Association?: TransitGatewayAttachmentAssociation;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayAttachment {
  export const filterSensitiveLog = (obj: TransitGatewayAttachment): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * <p>Information about the attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayAttachmentsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayAttachmentsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayConnectPeersRequest {
  /**
   * <p>The IDs of the Connect peers.</p>
   */
  TransitGatewayConnectPeerIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Connect peer (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer-id</code> - The ID of the Connect peer.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayConnectPeersRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayConnectPeersRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayConnectPeersResult {
  /**
   * <p>Information about the Connect peers.</p>
   */
  TransitGatewayConnectPeers?: TransitGatewayConnectPeer[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayConnectPeersResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayConnectPeersResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayConnectsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>options.protocol</code> - The tunnel protocol (<code>gre</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment (<code>initiating</code> |
   *                         <code>initiatingRequest</code> | <code>pendingAcceptance</code> |
   *                         <code>rollingBack</code> | <code>pending</code> | <code>available</code> |
   *                         <code>modifying</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>failed</code> | <code>rejected</code> | <code>rejecting</code> |
   *                         <code>failing</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the
   *                     Connect attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-transit-gateway-attachment-id</code> - The ID of the transit gateway attachment from which the Connect attachment was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayConnectsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayConnectsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayConnectsResult {
  /**
   * <p>Information about the Connect attachments.</p>
   */
  TransitGatewayConnects?: TransitGatewayConnect[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayConnectsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayConnectsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the transit gateway multicast domain. Valid values are <code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-multicast-domain-id</code> - The ID of the transit gateway multicast domain.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayMulticastDomainsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayMulticastDomainsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * <p>Information about the transit gateway multicast domains.</p>
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayMulticastDomainsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayMulticastDomainsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * <p>One or more IDs of the transit gateway peering attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>local-owner-id</code> - The ID of your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>remote-owner-id</code> - The ID of the AWS account in the remote Region that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the peering attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayPeeringAttachmentsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayPeeringAttachmentsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * <p>The transit gateway peering attachments.</p>
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayPeeringAttachmentsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayPeeringAttachmentsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the transit gateway route tables.</p>
   */
  TransitGatewayRouteTableIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default-association-route-table</code> - Indicates whether this is the default
   *                 association route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-propagation-route-table</code> - Indicates whether this is the default
   *                propagation route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route table (<code>available</code> | <code>deleting</code> | <code>deleted</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayRouteTablesRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayRouteTablesRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * <p>Information about the transit gateway route tables.</p>
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayRouteTablesResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayRouteTablesResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewaysRequest {
  /**
   * <p>The IDs of the transit gateways.</p>
   */
  TransitGatewayIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>options.propagation-default-route-table-id</code> - The ID of the default propagation route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.amazon-side-asn</code> - The private ASN for the Amazon side of a BGP session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.association-default-route-table-id</code> - The ID of the default association route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.auto-accept-shared-attachments</code> - Indicates whether there is automatic acceptance of attachment requests (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-association</code> - Indicates whether resource attachments are automatically
   *                associated with the default association route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-propagation</code> - Indicates whether resource attachments automatically propagate
   *                routes to the default propagation route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.dns-support</code> - Indicates whether DNS support is enabled (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.vpn-ecmp-support</code> - Indicates whether Equal Cost Multipath Protocol support is enabled  (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the transit gateway (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>modifying</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewaysResult {
  /**
   * <p>Information about the transit gateways.</p>
   */
  TransitGateways?: TransitGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayVpcAttachmentsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayVpcAttachmentsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * <p>Information about the VPC attachments.</p>
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayVpcAttachmentsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayVpcAttachmentsResult): any => ({
    ...obj,
  });
}

export type VolumeAttributeName = "autoEnableIO" | "productCodes";

export interface DescribeVolumeAttributeRequest {
  /**
   * <p>The attribute of the volume. This parameter is required.</p>
   */
  Attribute: VolumeAttributeName | string | undefined;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVolumeAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeVolumeAttributeRequest): any => ({
    ...obj,
  });
}

export interface DescribeVolumeAttributeResult {
  /**
   * <p>The state of <code>autoEnableIO</code> attribute.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;
}

export namespace DescribeVolumeAttributeResult {
  export const filterSensitiveLog = (obj: DescribeVolumeAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeVolumesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.attach-time</code> - The time stamp when the attachment
   *           initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.delete-on-termination</code> - Whether the volume is deleted on
   *           instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.device</code> - The device name specified in the block device mapping
   *           (for example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance the volume is attached
   *           to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.status</code> - The attachment state (<code>attaching</code> |
   *             <code>attached</code> | <code>detaching</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone in which the volume was
   *           created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time stamp when the volume was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>encrypted</code> - Indicates whether the volume is encrypted (<code>true</code>
   *           | <code>false</code>)</p>
   *             </li>
   *             <li>
   *     		         <p>
   *                   <code>multi-attach-enabled</code> - Indicates whether the volume is enabled for Multi-Attach (<code>true</code>
   *     			| <code>false</code>)</p>
   *     	       </li>
   *             <li>
   *                <p>
   *                   <code>fast-restored</code> - Indicates whether the volume was created from a
   *           snapshot that is enabled for fast snapshot restore (<code>true</code> |
   *           <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>size</code> - The size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot from which the volume was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The state of the volume (<code>creating</code> |
   *             <code>available</code> | <code>in-use</code> | <code>deleting</code> |
   *             <code>deleted</code> | <code>error</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The volume ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-type</code> - The Amazon EBS volume type (<code>gp2</code> | <code>gp3</code> | <code>io1</code> | <code>io2</code> |
   *           <code>st1</code> | <code>sc1</code>| <code>standard</code>)</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The volume IDs.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumes</code> in paginated
   *       output. When this parameter is used, <code>DescribeVolumes</code> only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeVolumes</code> request with the returned <code>NextToken</code> value. This
   *       value can be between 5 and 500; if <code>MaxResults</code> is given a value larger than 500,
   *       only 500 results are returned. If this parameter is not used, then
   *         <code>DescribeVolumes</code> returns all results. You cannot specify this parameter and the
   *       volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *         <code>DescribeVolumes</code> request where <code>MaxResults</code> was used and the results
   *       exceeded the value of that parameter. Pagination continues from the end of the previous
   *       results that returned the <code>NextToken</code> value. This value is <code>null</code> when
   *       there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVolumesRequest {
  export const filterSensitiveLog = (obj: DescribeVolumesRequest): any => ({
    ...obj,
  });
}

export interface DescribeVolumesResult {
  /**
   * <p>Information about the volumes.</p>
   */
  Volumes?: Volume[];

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumes</code>
   *       request. When the results of a <code>DescribeVolumes</code> request exceed
   *         <code>MaxResults</code>, this value can be used to retrieve the next page of results. This
   *       value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVolumesResult {
  export const filterSensitiveLog = (obj: DescribeVolumesResult): any => ({
    ...obj,
  });
}

export interface DescribeVolumesModificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the volumes.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>modification-state</code> - The current modification state (modifying |
   *           optimizing | completed | failed).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-iops</code> - The original IOPS rate of the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-size</code> - The original size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-volume-type</code> - The original volume type of the volume (standard |
   *           io1 | io2 | gp2 | sc1 | st1).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>originalMultiAttachEnabled</code> - Indicates whether Multi-Attach support was enabled (true | false).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The modification start time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-iops</code> - The target IOPS rate of the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-size</code> - The target size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-volume-type</code> - The target volume type of the volume (standard |
   *           io1 | io2 | gp2 | sc1 | st1).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targetMultiAttachEnabled</code> - Indicates whether Multi-Attach support is to be enabled (true | false).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The <code>nextToken</code> value returned by a previous paginated request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results (up to a limit of 500) to be returned in a paginated
   *       request.</p>
   */
  MaxResults?: number;
}

export namespace DescribeVolumesModificationsRequest {
  export const filterSensitiveLog = (obj: DescribeVolumesModificationsRequest): any => ({
    ...obj,
  });
}

export type VolumeModificationState = "completed" | "failed" | "modifying" | "optimizing";

/**
 * <p>Describes the modification status of an EBS volume.</p>
 *          <p>If the volume has never been modified, some element values will be null.</p>
 */
export interface VolumeModification {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The current modification state. The modification state is null for unmodified
   *       volumes.</p>
   */
  ModificationState?: VolumeModificationState | string;

  /**
   * <p>A status message about the modification progress or failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The target size of the volume, in GiB.</p>
   */
  TargetSize?: number;

  /**
   * <p>The target IOPS rate of the volume.</p>
   */
  TargetIops?: number;

  /**
   * <p>The target EBS volume type of the volume.</p>
   */
  TargetVolumeType?: VolumeType | string;

  /**
   * <p>The target throughput of the volume, in MiB/s.</p>
   */
  TargetThroughput?: number;

  TargetMultiAttachEnabled?: boolean;
  /**
   * <p>The original size of the volume, in GiB.</p>
   */
  OriginalSize?: number;

  /**
   * <p>The original IOPS rate of the volume.</p>
   */
  OriginalIops?: number;

  /**
   * <p>The original EBS volume type of the volume.</p>
   */
  OriginalVolumeType?: VolumeType | string;

  /**
   * <p>The original throughput of the volume, in MiB/s.</p>
   */
  OriginalThroughput?: number;

  OriginalMultiAttachEnabled?: boolean;
  /**
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   */
  Progress?: number;

  /**
   * <p>The modification start time.</p>
   */
  StartTime?: Date;

  /**
   * <p>The modification completion or failure time.</p>
   */
  EndTime?: Date;
}

export namespace VolumeModification {
  export const filterSensitiveLog = (obj: VolumeModification): any => ({
    ...obj,
  });
}

export interface DescribeVolumesModificationsResult {
  /**
   * <p>Information about the volume modifications.</p>
   */
  VolumesModifications?: VolumeModification[];

  /**
   * <p>Token for pagination, null if there are no more results </p>
   */
  NextToken?: string;
}

export namespace DescribeVolumesModificationsResult {
  export const filterSensitiveLog = (obj: DescribeVolumesModificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeVolumeStatusRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>action.code</code> - The action code for the event (for example,
   *             <code>enable-volume-io</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>action.description</code> - A description of the action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>action.event-id</code> - The event ID associated with the action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.description</code> - A description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.event-id</code> - The event ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.event-type</code> - The event type (for <code>io-enabled</code>:
   *             <code>passed</code> | <code>failed</code>; for <code>io-performance</code>:
   *             <code>io-performance:degraded</code> | <code>io-performance:severely-degraded</code> |
   *             <code>io-performance:stalled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-after</code> - The latest end time for the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-before</code> - The earliest start time for the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.details-name</code> - The cause for
   *             <code>volume-status.status</code> (<code>io-enabled</code> |
   *           <code>io-performance</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.details-status</code> - The status of
   *             <code>volume-status.details-name</code> (for <code>io-enabled</code>:
   *             <code>passed</code> | <code>failed</code>; for <code>io-performance</code>:
   *             <code>normal</code> | <code>degraded</code> | <code>severely-degraded</code> |
   *             <code>stalled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.status</code> - The status of the volume (<code>ok</code> |
   *             <code>impaired</code> | <code>warning</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumeStatus</code> in
   *       paginated output. When this parameter is used, the request only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *       request with the returned <code>NextToken</code> value. This value can be between 5 and 1,000;
   *       if <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are returned.
   *       If this parameter is not used, then <code>DescribeVolumeStatus</code> returns all results. You
   *       cannot specify this parameter and the volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumeStatus</code>
   *       request. When the results of the request exceed <code>MaxResults</code>, this value can be
   *       used to retrieve the next page of results. This value is <code>null</code> when there are no
   *       more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the volumes.</p>
   *          <p>Default: Describes all your volumes.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVolumeStatusRequest {
  export const filterSensitiveLog = (obj: DescribeVolumeStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume status operation code.</p>
 */
export interface VolumeStatusAction {
  /**
   * <p>The code identifying the operation, for example, <code>enable-volume-io</code>.</p>
   */
  Code?: string;

  /**
   * <p>A description of the operation.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the event associated with this operation.</p>
   */
  EventId?: string;

  /**
   * <p>The event type associated with this operation.</p>
   */
  EventType?: string;
}

export namespace VolumeStatusAction {
  export const filterSensitiveLog = (obj: VolumeStatusAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the instances to which the volume is attached.</p>
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * <p>The maximum IOPS supported by the attached instance.</p>
   */
  IoPerformance?: string;

  /**
   * <p>The ID of the attached instance.</p>
   */
  InstanceId?: string;
}

export namespace VolumeStatusAttachmentStatus {
  export const filterSensitiveLog = (obj: VolumeStatusAttachmentStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume status event.</p>
 */
export interface VolumeStatusEvent {
  /**
   * <p>A description of the event.</p>
   */
  Description?: string;

  /**
   * <p>The ID of this event.</p>
   */
  EventId?: string;

  /**
   * <p>The type of this event.</p>
   */
  EventType?: string;

  /**
   * <p>The latest end time of the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The earliest start time of the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The ID of the instance associated with the event.</p>
   */
  InstanceId?: string;
}

export namespace VolumeStatusEvent {
  export const filterSensitiveLog = (obj: VolumeStatusEvent): any => ({
    ...obj,
  });
}

export type VolumeStatusName = "io-enabled" | "io-performance";

/**
 * <p>Describes a volume status.</p>
 */
export interface VolumeStatusDetails {
  /**
   * <p>The name of the volume status.</p>
   */
  Name?: VolumeStatusName | string;

  /**
   * <p>The intended status of the volume status.</p>
   */
  Status?: string;
}

export namespace VolumeStatusDetails {
  export const filterSensitiveLog = (obj: VolumeStatusDetails): any => ({
    ...obj,
  });
}

export type VolumeStatusInfoStatus = "impaired" | "insufficient-data" | "ok";

/**
 * <p>Describes the status of a volume.</p>
 */
export interface VolumeStatusInfo {
  /**
   * <p>The details of the volume status.</p>
   */
  Details?: VolumeStatusDetails[];

  /**
   * <p>The status of the volume.</p>
   */
  Status?: VolumeStatusInfoStatus | string;
}

export namespace VolumeStatusInfo {
  export const filterSensitiveLog = (obj: VolumeStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the volume status.</p>
 */
export interface VolumeStatusItem {
  /**
   * <p>The details of the operation.</p>
   */
  Actions?: VolumeStatusAction[];

  /**
   * <p>The Availability Zone of the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>A list of events associated with the volume.</p>
   */
  Events?: VolumeStatusEvent[];

  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * <p>The volume status.</p>
   */
  VolumeStatus?: VolumeStatusInfo;

  /**
   * <p>Information about the instances to which the volume is attached.</p>
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[];
}

export namespace VolumeStatusItem {
  export const filterSensitiveLog = (obj: VolumeStatusItem): any => ({
    ...obj,
  });
}

export interface DescribeVolumeStatusResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the status of the volumes.</p>
   */
  VolumeStatuses?: VolumeStatusItem[];
}

export namespace DescribeVolumeStatusResult {
  export const filterSensitiveLog = (obj: DescribeVolumeStatusResult): any => ({
    ...obj,
  });
}

export type VpcAttributeName = "enableDnsHostnames" | "enableDnsSupport";

export interface DescribeVpcAttributeRequest {
  /**
   * <p>The VPC attribute.</p>
   */
  Attribute: VpcAttributeName | string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVpcAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeVpcAttributeRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcAttributeResult {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;
}

export namespace DescribeVpcAttributeResult {
  export const filterSensitiveLog = (obj: DescribeVpcAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>is-classic-link-enabled</code> - Whether the VPC is enabled for ClassicLink
   * 					   (<code>true</code> | <code>false</code>).</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   *     			        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPCs for which you want to describe the ClassicLink status.</p>
   */
  VpcIds?: string[];
}

export namespace DescribeVpcClassicLinkRequest {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface VpcClassicLink {
  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace VpcClassicLink {
  export const filterSensitiveLog = (obj: VpcClassicLink): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkResult {
  /**
   * <p>The ClassicLink status of one or more VPCs.</p>
   */
  Vpcs?: VpcClassicLink[];
}

export namespace DescribeVpcClassicLinkResult {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more VPC IDs.</p>
   */
  VpcIds?: string[];
}

export namespace DescribeVpcClassicLinkDnsSupportRequest {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ClassicLink DNS support status of a VPC.</p>
 */
export interface ClassicLinkDnsSupport {
  /**
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace ClassicLinkDnsSupport {
  export const filterSensitiveLog = (obj: ClassicLinkDnsSupport): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   */
  Vpcs?: ClassicLinkDnsSupport[];
}

export namespace DescribeVpcClassicLinkDnsSupportResult {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-arn</code> - The ARN of the SNS topic for the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-id</code> - The ID of the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-state</code> - The state of the notification
   *                         (<code>Enabled</code> | <code>Disabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-type</code> - The type of notification
   *                         (<code>Topic</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the endpoint service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the VPC endpoint.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionNotificationsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionNotificationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * <p>One or more notifications.</p>
   */
  ConnectionNotificationSet?: ConnectionNotification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionNotificationsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionNotificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-owner</code> - The AWS account number of the owner of the
   *                     endpoint.</p>
   *             </li>
   *             <li>
   * 			            <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   * 			        (<code>pendingAcceptance</code> | <code>pending</code> |
   * 			        <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   * 			        <code>rejected</code> | <code>failed</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The AWS account ID of the owner of the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?: State | string;

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];
}

export namespace VpcEndpointConnection {
  export const filterSensitiveLog = (obj: VpcEndpointConnection): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionsResult {
  /**
   * <p>Information about one or more VPC endpoint connections.</p>
   */
  VpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more endpoint IDs.</p>
   */
  VpcEndpointIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-id</code> - The ID of the VPC in which the endpoint resides.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   *                         (<code>pendingAcceptance</code> | <code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>rejected</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-type</code> - The type of VPC endpoint (<code>Interface</code> | <code>Gateway</code> | <code>GatewayLoadBalancer</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsResult {
  /**
   * <p>Information about the endpoints.</p>
   */
  VpcEndpoints?: VpcEndpoint[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds?: string[];

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>service-name</code> - The name of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-state</code> - The state of the service (<code>Pending</code> |
   *                         <code>Available</code> | <code>Deleting</code> | <code>Deleted</code> |
   *                         <code>Failed</code>). </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServiceConfigurationsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServiceConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about one or more services.</p>
   */
  ServiceConfigurations?: ServiceConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServiceConfigurationsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServiceConfigurationsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>principal</code> - The ARN of the principal.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>principal-type</code> - The principal type (<code>All</code> |
   * 						<code>Service</code> | <code>OrganizationUnit</code> | <code>Account</code>
   * 					| <code>User</code> | <code>Role</code>).</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about one or more allowed principals.</p>
   */
  AllowedPrincipals?: AllowedPrincipal[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicePermissionsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicePermissionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more service names.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicesRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Private DNS name for interface endpoints.</p>
 */
export interface PrivateDnsDetails {
  /**
   * <p>The private DNS name assigned to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;
}

export namespace PrivateDnsDetails {
  export const filterSensitiveLog = (obj: PrivateDnsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint service.</p>
 */
export interface ServiceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The AWS account ID of the service owner.</p>
   */
  Owner?: string;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private DNS names assigned to the VPC endpoint service. </p>
   */
  PrivateDnsNames?: PrivateDnsDetails[];

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   */
  PrivateDnsNameVerificationState?: DnsNameState | string;
}

export namespace ServiceDetail {
  export const filterSensitiveLog = (obj: ServiceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * <p>A list of supported services.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>Information about the service.</p>
   */
  ServiceDetails?: ServiceDetail[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointServicesResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicesResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.cidr-block</code> - The IPv4 CIDR block of the accepter
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.owner-id</code> - The AWS account ID of the owner of the
   *                     accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.vpc-id</code> - The ID of the accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiration-time</code> - The expiration date and time for the VPC peering
   *           connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>requester-vpc-info.cidr-block</code> - The IPv4 CIDR block of the
   *                     requester's VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.owner-id</code> - The AWS account ID of the owner of the
   *           requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.vpc-id</code> - The ID of the requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>status-code</code> - The status of the VPC peering connection
   *                         (<code>pending-acceptance</code> | <code>failed</code> |
   *                         <code>expired</code> | <code>provisioning</code> | <code>active</code> |
   *                         <code>deleting</code> | <code>deleted</code> |
   *                     <code>rejected</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - A message that provides more information about the status
   *           of the VPC peering connection, if applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-peering-connection-id</code> - The ID of the VPC peering connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC peering connection IDs.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   */
  VpcPeeringConnectionIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeVpcPeeringConnectionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcPeeringConnectionsResult {
  /**
   * <p>Information about the VPC peering connections.</p>
   */
  VpcPeeringConnections?: VpcPeeringConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcPeeringConnectionsResult {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>cidr</code> - The primary IPv4 CIDR block of the VPC. The CIDR block you
   *                     specify must exactly match the VPC's CIDR block for information to be returned
   *                     for the VPC. Must contain the slash followed by one or two digits (for example,
   *                     <code>/28</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.cidr-block</code> - An IPv4 CIDR block associated with the
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.association-id</code> - The association ID for
   *                     an IPv4 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.state</code> - The state of an IPv4 CIDR block
   *                     associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dhcp-options-id</code> - The ID of a set of DHCP options.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-pool</code> - The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - The association
   *                     ID for an IPv6 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>isDefault</code> - Indicates whether the VPC is the default VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPC (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPC IDs.</p>
   * 		       <p>Default: Describes all your VPCs.</p>
   */
  VpcIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeVpcsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcsResult {
  /**
   * <p>Information about one or more VPCs.</p>
   */
  Vpcs?: Vpc[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcsResult {
  export const filterSensitiveLog = (obj: DescribeVpcsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-configuration</code> - The configuration information for the customer gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-id</code> - The ID of a customer gateway associated with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPN connection (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>option.static-routes-only</code> - Indicates whether the connection has static routes only. Used for devices that do not support Border Gateway Protocol (BGP).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>route.destination-cidr-block</code> - The destination CIDR block. This corresponds to the subnet used in a customer data center.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>bgp-asn</code> - The BGP Autonomous System Number (ASN) associated with a BGP device.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of VPN connection. Currently the only supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection-id</code> - The ID of the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of a virtual private gateway associated with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of a transit gateway associated with the VPN connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPN connection IDs.</p>
   *         <p>Default: Describes your VPN connections.</p>
   */
  VpnConnectionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVpnConnectionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpnConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsResult {
  /**
   * <p>Information about one or more VPN connections.</p>
   */
  VpnConnections?: VpnConnection[];
}

export namespace DescribeVpnConnectionsResult {
  export const filterSensitiveLog = (obj: DescribeVpnConnectionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   * 				           <p>
   *                   <code>amazon-side-asn</code> - The Autonomous System Number (ASN) for the Amazon side of the gateway.</p>
   * 			         </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.state</code> - The current state of the attachment between the gateway and the VPC (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone for the virtual private gateway (if applicable).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the virtual private gateway (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of virtual private gateway. Currently the only supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of the virtual private gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more virtual private gateway IDs.</p>
   *         <p>Default: Describes all your virtual private gateways.</p>
   */
  VpnGatewayIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVpnGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeVpnGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysResult {
  /**
   * <p>Information about one or more virtual private gateways.</p>
   */
  VpnGateways?: VpnGateway[];
}

export namespace DescribeVpnGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeVpnGatewaysResult): any => ({
    ...obj,
  });
}

export interface DetachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance to unlink from the VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the VPC to which the instance is linked.</p>
   */
  VpcId: string | undefined;
}

export namespace DetachClassicLinkVpcRequest {
  export const filterSensitiveLog = (obj: DetachClassicLinkVpcRequest): any => ({
    ...obj,
  });
}

export interface DetachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DetachClassicLinkVpcResult {
  export const filterSensitiveLog = (obj: DetachClassicLinkVpcResult): any => ({
    ...obj,
  });
}

export interface DetachInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace DetachInternetGatewayRequest {
  export const filterSensitiveLog = (obj: DetachInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DetachNetworkInterface.</p>
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether to force a detachment.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>Use the <code>Force</code> parameter only as a last resort to detach a network interface from a failed instance. </p>
   *                 </li>
   *                <li>
   *                     <p>If you use the <code>Force</code> parameter to detach a network interface, you might not be able to attach a different network interface to the same index on the instance without first stopping and starting the instance.</p>
   *                 </li>
   *                <li>
   *                     <p>If you force the detachment of a network interface, the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">instance metadata</a>
   *                         might not get updated. This means that the attributes associated
   *                         with the detached network interface might still be visible. The
   *                         instance metadata will get updated when you stop and start the
   *                         instance.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  Force?: boolean;
}

export namespace DetachNetworkInterfaceRequest {
  export const filterSensitiveLog = (obj: DetachNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

export interface DetachVolumeRequest {
  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>Forces detachment if the previous detachment attempt did not occur cleanly (for example,
   *       logging into an instance, unmounting the volume, and detaching normally). This option can lead
   *       to data loss or a corrupted file system. Use this option only as a last resort to detach a
   *       volume from a failed instance. The instance won't have an opportunity to flush file system
   *       caches or file system metadata. If you use this option, you must perform file system check and
   *       repair procedures.</p>
   */
  Force?: boolean;

  /**
   * <p>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DetachVolumeRequest {
  export const filterSensitiveLog = (obj: DetachVolumeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DetachVpnGateway.</p>
 */
export interface DetachVpnGatewayRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DetachVpnGatewayRequest {
  export const filterSensitiveLog = (obj: DetachVpnGatewayRequest): any => ({
    ...obj,
  });
}

export interface DisableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableEbsEncryptionByDefaultRequest {
  export const filterSensitiveLog = (obj: DisableEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface DisableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace DisableEbsEncryptionByDefaultResult {
  export const filterSensitiveLog = (obj: DisableEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface DisableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableFastSnapshotRestoresRequest {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the AWS account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The AWS owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

export namespace DisableFastSnapshotRestoreSuccessItem {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace DisableFastSnapshotRestoreStateError {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: DisableFastSnapshotRestoreStateError;
}

export namespace DisableFastSnapshotRestoreStateErrorItem {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
}

export namespace DisableFastSnapshotRestoreErrorItem {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
}

export interface DisableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
}

export namespace DisableFastSnapshotRestoresResult {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableTransitGatewayRouteTablePropagationRequest {
  export const filterSensitiveLog = (obj: DisableTransitGatewayRouteTablePropagationRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayPropagationState = "disabled" | "disabling" | "enabled" | "enabling";

/**
 * <p>Describes route propagation.</p>
 */
export interface TransitGatewayPropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayPropagation {
  export const filterSensitiveLog = (obj: TransitGatewayPropagation): any => ({
    ...obj,
  });
}

export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

export namespace DisableTransitGatewayRouteTablePropagationResult {
  export const filterSensitiveLog = (obj: DisableTransitGatewayRouteTablePropagationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DisableVgwRoutePropagation.</p>
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableVgwRoutePropagationRequest {
  export const filterSensitiveLog = (obj: DisableVgwRoutePropagationRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace DisableVpcClassicLinkRequest {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisableVpcClassicLinkResult {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace DisableVpcClassicLinkDnsSupportRequest {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisableVpcClassicLinkDnsSupportResult {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface DisassociateAddressRequest {
  /**
   * <p>[EC2-VPC] The association ID. Required for EC2-VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateAddressRequest {
  export const filterSensitiveLog = (obj: DisassociateAddressRequest): any => ({
    ...obj,
  });
}

export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which to disassociate the target network.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateClientVpnTargetNetworkRequest {
  export const filterSensitiveLog = (obj: DisassociateClientVpnTargetNetworkRequest): any => ({
    ...obj,
  });
}

export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;
}

export namespace DisassociateClientVpnTargetNetworkResult {
  export const filterSensitiveLog = (obj: DisassociateClientVpnTargetNetworkResult): any => ({
    ...obj,
  });
}

export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate from which to disassociate the IAM role.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The ARN of the IAM role to disassociate.</p>
   */
  RoleArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateEnclaveCertificateIamRoleRequest {
  export const filterSensitiveLog = (obj: DisassociateEnclaveCertificateIamRoleRequest): any => ({
    ...obj,
  });
}

export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisassociateEnclaveCertificateIamRoleResult {
  export const filterSensitiveLog = (obj: DisassociateEnclaveCertificateIamRoleResult): any => ({
    ...obj,
  });
}
