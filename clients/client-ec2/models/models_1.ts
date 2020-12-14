import {
  AddPrefixListEntry,
  ApplianceModeSupportValue,
  AttachmentStatus,
  CapacityReservationPreference,
  CarrierGateway,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CreditSpecificationRequest,
  CurrencyCodeValues,
  DnsSupportValue,
  ElasticGpuSpecification,
  GatewayType,
  InstanceInterruptionBehavior,
  Ipv6SupportValue,
  LaunchTemplateBlockDeviceMappingRequest,
  LaunchTemplateCapacityReservationSpecificationRequest,
  LaunchTemplateCpuOptionsRequest,
  LaunchTemplateElasticInferenceAccelerator,
  LaunchTemplateEnclaveOptionsRequest,
  LaunchTemplateHibernationOptionsRequest,
  LaunchTemplateIamInstanceProfileSpecificationRequest,
  MarketType,
  ReservedInstancesListing,
  ResourceType,
  RouteTableAssociationState,
  ShutdownBehavior,
  SpotInstanceType,
  Subnet,
  Tag,
  TagSpecification,
  Tenancy,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VolumeAttachment,
  VolumeType,
  Vpc,
  VpcAttachment,
  VpcPeeringConnection,
  _InstanceType,
} from "./models_0";

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request.
   *             For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached.
   *             If the request is persistent, it remains active until it is canceled or this date and time is reached.
   *             The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace LaunchTemplateSpotMarketOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateSpotMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest;
}

export namespace LaunchTemplateInstanceMarketOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LaunchTemplateLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export type LaunchTemplateInstanceMetadataEndpointState = "disabled" | "enabled";

export enum LaunchTemplateHttpTokensState {
  optional = "optional",
  required = "required",
}

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
 *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned.</p>
   *             <p>If the state is <code>required</code>, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.</p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your instance metadata.
   * </p>
   *          </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;
}

export namespace LaunchTemplateInstanceMetadataOptionsRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * <p>Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplatesMonitoringRequest {
  export const filterSensitiveLog = (obj: LaunchTemplatesMonitoringRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6AddressRequest {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace InstanceIpv6AddressRequest {
  export const filterSensitiveLog = (obj: InstanceIpv6AddressRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 */
export interface PrivateIpAddressSpecification {
  /**
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only
   *             one IPv4 address can be designated as primary.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddress?: string;
}

export namespace PrivateIpAddressSpecification {
  export const filterSensitiveLog = (obj: PrivateIpAddressSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>Associates a Carrier IP address with eth0 for a new network interface.</p>
   *         <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>AWS Wavelength Developer
   *                 Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   * 			<code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the
   * 			<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * 		       <p>If you are not creating an EFA, specify <code>interface</code> or omit this parameter.</p>
   * 		       <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   */
  NetworkCardIndex?: number;
}

export namespace LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy
   *         	of dedicated runs on single-tenant hardware.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. If you specify a host
   * 		resource group ARN, omit the <b>Tenancy</b> parameter
   * 		or set it to <code>host</code>.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;
}

export namespace LaunchTemplatePlacementRequest {
  export const filterSensitiveLog = (obj: LaunchTemplatePlacementRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The tags specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The type of resource to tag. Currently, the resource types that support tagging on
   *             creation are <code>instance</code> and <code>volume</code>. To tag a resource after it
   *         	has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplateTagSpecificationRequest {
  export const filterSensitiveLog = (obj: LaunchTemplateTagSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The information to include in the launch template.</p>
 */
export interface RequestLaunchTemplateData {
  /**
   * <p>The ID of the kernel.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided
   *                     Kernels</a> in the <i>Amazon Elastic Compute Cloud User
   *                     Guide</i>.</p>
   *         </important>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * <p>The block device mapping.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[];

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *             any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[];

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *         <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *         </important>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoringRequest;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: LaunchTemplatePlacementRequest;

  /**
   * <p>The ID of the RAM disk.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided
   *                     Kernels</a> in the <i>Amazon Elastic Compute Cloud User
   *                     Guide</i>.</p>
   *         </important>
   */
  RamDiskId?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *     		the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch,
   *     		use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>.
   *     		Alternatively, if you set <code>InstanceInitiatedShutdownBehavior</code> to
   *     		<code>terminate</code>, you can terminate the instance by running the shutdown
   *     		command from the instance.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from
   *             the instance (using the operating system command for system shutdown).</p>
   *         <p>Default: <code>stop</code>
   *         </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The Base64-encoded user data to make available to the instance. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Running Commands on Your Linux Instance
   *                 at Launch</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html#instancedata-add-user-data">Adding User Data</a> (Windows).</p>
   */
  UserData?: string;

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and
   *             volumes on launch. The specified tags are applied to all instances or volumes that are
   *             created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecificationRequest[];

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[];

  /**
   * <p>
   *             The elastic inference accelerator for the instance.
   *         </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[];

  /**
   * <p>One or more security group IDs. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>[EC2-Classic, default VPC] One or more security group names. For a nondefault VPC,
   *             you must use security group IDs instead. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the instance. Valid for T2, T3, or T3a instances
   *             only.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User
   * 				Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest;

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the
   * 			instance's Capacity Reservation preference defaults to <code>open</code>, which enables it
   * 			to run in any open Capacity Reservation that has matching attributes (instance type,
   * 			platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[];

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
   *                 prerequisites</a>. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;

  /**
   * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information,
   * 			see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
   * 				What is AWS Nitro Enclaves?</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
   * 		       <p>You can't enable AWS Nitro Enclaves and hibernation on the same instance.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest;
}

export namespace RequestLaunchTemplateData {
  export const filterSensitiveLog = (obj: RequestLaunchTemplateData): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>A name for the launch template.</p>
   */
  LaunchTemplateName: string | undefined;

  /**
   * <p>A description for the first version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>The tags to apply to the launch template during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateLaunchTemplateRequest {
  export const filterSensitiveLog = (obj: CreateLaunchTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template.</p>
 */
export interface LaunchTemplate {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The time launch template was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the launch template. </p>
   */
  CreatedBy?: string;

  /**
   * <p>The version number of the default version of the launch template.</p>
   */
  DefaultVersionNumber?: number;

  /**
   * <p>The version number of the latest version of the launch template.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The tags for the launch template.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplate {
  export const filterSensitiveLog = (obj: LaunchTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>The error code and error message that is returned for a parameter or parameter combination that is not valid when a new launch template or new version of a launch template is created.</p>
 */
export interface ValidationError {
  /**
   * <p>The error code that indicates why the parameter or parameter combination is not valid. For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  Code?: string;

  /**
   * <p>The error message that describes why the parameter or parameter combination is not valid. For more
   *             information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  Message?: string;
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

/**
 * <p>The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.</p>
 */
export interface ValidationWarning {
  /**
   * <p>The error codes and error messages.</p>
   */
  Errors?: ValidationError[];
}

export namespace ValidationWarning {
  export const filterSensitiveLog = (obj: ValidationWarning): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;

  /**
   * <p>If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.</p>
   */
  Warning?: ValidationWarning;
}

export namespace CreateLaunchTemplateResult {
  export const filterSensitiveLog = (obj: CreateLaunchTemplateResult): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template version on which to base the new version.
   *             The new version inherits the same launch parameters as the source version, except for
   *             parameters that you specify in <code>LaunchTemplateData</code>. Snapshots applied
   *             to the block device mapping are ignored when creating a new version unless they
   *             are explicitly included.</p>
   */
  SourceVersion?: string;

  /**
   * <p>A description for the version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;
}

export namespace CreateLaunchTemplateVersionRequest {
  export const filterSensitiveLog = (obj: CreateLaunchTemplateVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   */
  Iops?: number;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

export namespace LaunchTemplateEbsBlockDevice {
  export const filterSensitiveLog = (obj: LaunchTemplateEbsBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN).</p>
   */
  VirtualName?: string;

  /**
   * <p>Information about the block device for an EBS volume.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDevice;

  /**
   * <p>Suppresses the specified device included in the block device mapping of the AMI.</p>
   */
  NoDevice?: string;
}

export namespace LaunchTemplateBlockDeviceMapping {
  export const filterSensitiveLog = (obj: LaunchTemplateBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTargetResponse {
  /**
   * <p>The ID of the targeted Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ARN of the targeted Capacity Reservation group.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

export namespace CapacityReservationTargetResponse {
  export const filterSensitiveLog = (obj: CapacityReservationTargetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Capacity Reservation targeting option.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance
   * 				runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

export namespace LaunchTemplateCapacityReservationSpecificationResponse {
  export const filterSensitiveLog = (obj: LaunchTemplateCapacityReservationSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance.</p>
 */
export interface LaunchTemplateCpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

export namespace LaunchTemplateCpuOptions {
  export const filterSensitiveLog = (obj: LaunchTemplateCpuOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credit option for CPU usage of a T2, T3, or T3a instance.</p>
 */
export interface CreditSpecification {
  /**
   * <p>The credit option for CPU usage of a T2, T3, or T3a instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace CreditSpecification {
  export const filterSensitiveLog = (obj: CreditSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an elastic GPU.</p>
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * <p>The elastic GPU type.</p>
   */
  Type?: string;
}

export namespace ElasticGpuSpecificationResponse {
  export const filterSensitiveLog = (obj: ElasticGpuSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes an elastic inference accelerator.
 *         </p>
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * <p>
   *             The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   *         </p>
   */
  Type?: string;

  /**
   * <p>
   *     		The number of elastic inference accelerators to attach to the instance.
   *     	</p>
   *     	    <p>Default: 1</p>
   */
  Count?: number;
}

export namespace LaunchTemplateElasticInferenceAcceleratorResponse {
  export const filterSensitiveLog = (obj: LaunchTemplateElasticInferenceAcceleratorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves.</p>
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for AWS Nitro Enclaves;
   * 		otherwise, it is not enabled for AWS Nitro Enclaves.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplateEnclaveOptions {
  export const filterSensitiveLog = (obj: LaunchTemplateEnclaveOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether an instance is configured for hibernation.</p>
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

export namespace LaunchTemplateHibernationOptions {
  export const filterSensitiveLog = (obj: LaunchTemplateHibernationOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export namespace LaunchTemplateIamInstanceProfileSpecification {
  export const filterSensitiveLog = (obj: LaunchTemplateIamInstanceProfileSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request. For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date and time is reached.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace LaunchTemplateSpotMarketOptions {
  export const filterSensitiveLog = (obj: LaunchTemplateSpotMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions;
}

export namespace LaunchTemplateInstanceMarketOptions {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LaunchTemplateLicenseConfiguration {
  export const filterSensitiveLog = (obj: LaunchTemplateLicenseConfiguration): any => ({
    ...obj,
  });
}

export type LaunchTemplateInstanceMetadataOptionsState = "applied" | "pending";

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * <p>The state of the metadata option changes.</p>
   *          <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not ready to process metadata traffic with the new selection.</p>
   *          <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the instance.</p>
   */
  State?: LaunchTemplateInstanceMetadataOptionsState | string;

  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.</p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is <code>enabled</code>.</p>
   *         <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your instance metadata.
   *             </p>
   *         </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;
}

export namespace LaunchTemplateInstanceMetadataOptions {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMetadataOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplatesMonitoring {
  export const filterSensitiveLog = (obj: LaunchTemplatesMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace InstanceIpv6Address {
  export const filterSensitiveLog = (obj: InstanceIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to associate a Carrier IP address with eth0 for a new network interface.</p>
   *         <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>AWS Wavelength Developer
   *                     Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses for the network interface.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;
}

export namespace LaunchTemplateInstanceNetworkInterfaceSpecification {
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceNetworkInterfaceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacement {
  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of <code>dedicated</code> runs on single-tenant hardware. </p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances.
   *     	</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;
}

export namespace LaunchTemplatePlacement {
  export const filterSensitiveLog = (obj: LaunchTemplatePlacement): any => ({
    ...obj,
  });
}

/**
 * <p>The tag specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecification {
  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplateTagSpecification {
  export const filterSensitiveLog = (obj: LaunchTemplateTagSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The information for a launch template. </p>
 */
export interface ResponseLaunchTemplateData {
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
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;

  /**
   * <p>The block device mappings.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];

  /**
   * <p>The ID of the AMI that was used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoring;

  /**
   * <p>The placement of the instance.</p>
   */
  Placement?: LaunchTemplatePlacement;

  /**
   * <p>The ID of the RAM disk, if applicable.</p>
   */
  RamDiskId?: string;

  /**
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using
   *             the Amazon EC2 console, command line tool, or API.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from
   *             the instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The user data for the instance. </p>
   */
  UserData?: string;

  /**
   * <p>The tags.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecification[];

  /**
   * <p>The elastic GPU specification.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[];

  /**
   * <p>
   *             The elastic inference accelerator for the instance.
   *         </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];

  /**
   * <p>The security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The security group names.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   */
  CreditSpecification?: CreditSpecification;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User
   * 				Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptions;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[];

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptions;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions;

  /**
   * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions;
}

export namespace ResponseLaunchTemplateData {
  export const filterSensitiveLog = (obj: ResponseLaunchTemplateData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version.</p>
 */
export interface LaunchTemplateVersion {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The description for the version.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The time the version was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the version.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Indicates whether the version is the default version.</p>
   */
  DefaultVersion?: boolean;

  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export namespace LaunchTemplateVersion {
  export const filterSensitiveLog = (obj: LaunchTemplateVersion): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateVersionResult {
  /**
   * <p>Information about the launch template version.</p>
   */
  LaunchTemplateVersion?: LaunchTemplateVersion;

  /**
   * <p>If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.</p>
   */
  Warning?: ValidationWarning;
}

export namespace CreateLaunchTemplateVersionResult {
  export const filterSensitiveLog = (obj: CreateLaunchTemplateVersionResult): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on
   *         the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateLocalGatewayRouteRequest {
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteRequest): any => ({
    ...obj,
  });
}

export type LocalGatewayRouteState = "active" | "blackhole" | "deleted" | "deleting" | "pending";

export type LocalGatewayRouteType = "propagated" | "static";

/**
 * <p>Describes a route for a local gateway route table.</p>
 */
export interface LocalGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The route type.</p>
   */
  Type?: LocalGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: LocalGatewayRouteState | string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The AWS account ID that owns the local gateway route.</p>
   */
  OwnerId?: string;
}

export namespace LocalGatewayRoute {
  export const filterSensitiveLog = (obj: LocalGatewayRoute): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export namespace CreateLocalGatewayRouteResult {
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the local gateway route table VPC association.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateLocalGatewayRouteTableVpcAssociationRequest {
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteTableVpcAssociationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a local gateway route table and a VPC.</p>
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the association.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The AWS account ID that owns the local gateway route table for the association.</p>
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

export namespace LocalGatewayRouteTableVpcAssociation {
  export const filterSensitiveLog = (obj: LocalGatewayRouteTableVpcAssociation): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export namespace CreateLocalGatewayRouteTableVpcAssociationResult {
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteTableVpcAssociationResult): any => ({
    ...obj,
  });
}

export interface CreateManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the prefix list.</p>
   *         <p>Constraints: Up to 255 characters in length. The name cannot start with <code>com.amazonaws</code>.</p>
   */
  PrefixListName: string | undefined;

  /**
   * <p>One or more entries for the prefix list.</p>
   */
  Entries?: AddPrefixListEntry[];

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries: number | undefined;

  /**
   * <p>The tags to apply to the prefix list during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The IP address type.</p>
   *         <p>Valid Values: <code>IPv4</code> | <code>IPv6</code>
   *          </p>
   */
  AddressFamily: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraints: Up to 255 UTF-8 characters in length.</p>
   */
  ClientToken?: string;
}

export namespace CreateManagedPrefixListRequest {
  export const filterSensitiveLog = (obj: CreateManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export type PrefixListState =
  | "create-complete"
  | "create-failed"
  | "create-in-progress"
  | "delete-complete"
  | "delete-failed"
  | "delete-in-progress"
  | "modify-complete"
  | "modify-failed"
  | "modify-in-progress"
  | "restore-complete"
  | "restore-failed"
  | "restore-in-progress";

/**
 * <p>Describes a managed prefix list.</p>
 */
export interface ManagedPrefixList {
  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The IP address version.</p>
   */
  AddressFamily?: string;

  /**
   * <p>The state of the prefix list.</p>
   */
  State?: PrefixListState | string;

  /**
   * <p>The state message.</p>
   */
  StateMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the prefix list.</p>
   */
  PrefixListArn?: string;

  /**
   * <p>The name of the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries?: number;

  /**
   * <p>The version of the prefix list.</p>
   */
  Version?: number;

  /**
   * <p>The tags for the prefix list.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the owner of the prefix list.</p>
   */
  OwnerId?: string;
}

export namespace ManagedPrefixList {
  export const filterSensitiveLog = (obj: ManagedPrefixList): any => ({
    ...obj,
  });
}

export interface CreateManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace CreateManagedPrefixListResult {
  export const filterSensitiveLog = (obj: CreateManagedPrefixListResult): any => ({
    ...obj,
  });
}

export interface CreateNatGatewayRequest {
  /**
   * <p>The allocation ID of an Elastic IP address to associate with the NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.</p>
   */
  AllocationId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure
   * 				Idempotency</a>.</p>
   *          <p>Constraint: Maximum 64 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The subnet in which to create the NAT gateway.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to assign to the NAT gateway.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateNatGatewayRequest {
  export const filterSensitiveLog = (obj: CreateNatGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IP addresses and network interface associated with a NAT gateway.</p>
 */
export interface NatGatewayAddress {
  /**
   * <p>The allocation ID of the Elastic IP address that's associated with the NAT gateway.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the network interface associated with the NAT gateway.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP address associated with the Elastic IP address.</p>
   */
  PrivateIp?: string;

  /**
   * <p>The Elastic IP address associated with the NAT gateway.</p>
   */
  PublicIp?: string;
}

export namespace NatGatewayAddress {
  export const filterSensitiveLog = (obj: NatGatewayAddress): any => ({
    ...obj,
  });
}

/**
 * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
 */
export interface ProvisionedBandwidth {
  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Provisioned?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  RequestTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Requested?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Status?: string;
}

export namespace ProvisionedBandwidth {
  export const filterSensitiveLog = (obj: ProvisionedBandwidth): any => ({
    ...obj,
  });
}

export enum NatGatewayState {
  AVAILABLE = "available",
  DELETED = "deleted",
  DELETING = "deleting",
  FAILED = "failed",
  PENDING = "pending",
}

/**
 * <p>Describes a NAT gateway.</p>
 */
export interface NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   */
  DeleteTime?: Date;

  /**
   * <p>If the NAT gateway could not be created, specifies the error code for the failure.
   *         (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> |
   *          <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> |
   *          <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   */
  FailureCode?: string;

  /**
   * <p>If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code.</p>
   *          <ul>
   *             <li>
   *                <p>For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached"</p>
   *             </li>
   *             <li>
   *                <p>For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated"</p>
   *             </li>
   *             <li>
   *                <p>For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again."</p>
   *             </li>
   *             <li>
   *                <p>For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."</p>
   *             </li>
   *          </ul>
   */
  FailureMessage?: string;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionedBandwidth?: ProvisionedBandwidth;

  /**
   * <p>The state of the NAT gateway.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The NAT gateway is being created and is not ready to process
   *           traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>: The NAT gateway could not be created. Check the
   *             <code>failureCode</code> and <code>failureMessage</code> fields for the reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The NAT gateway is able to process traffic. This status remains
   *           until you delete the NAT gateway, and does not indicate the health of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The NAT gateway is in the process of being terminated and may
   *           still be processing traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The NAT gateway has been terminated and is no longer processing
   *           traffic.</p>
   *             </li>
   *          </ul>
   */
  State?: NatGatewayState | string;

  /**
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags for the NAT gateway.</p>
   */
  Tags?: Tag[];
}

export namespace NatGateway {
  export const filterSensitiveLog = (obj: NatGateway): any => ({
    ...obj,
  });
}

export interface CreateNatGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the NAT gateway.</p>
   */
  NatGateway?: NatGateway;
}

export namespace CreateNatGatewayResult {
  export const filterSensitiveLog = (obj: CreateNatGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclRequest {
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

  /**
   * <p>The tags to assign to the network ACL.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateNetworkAclRequest {
  export const filterSensitiveLog = (obj: CreateNetworkAclRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a network ACL and a subnet.</p>
 */
export interface NetworkAclAssociation {
  /**
   * <p>The ID of the association between a network ACL and a subnet.</p>
   */
  NetworkAclAssociationId?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace NetworkAclAssociation {
  export const filterSensitiveLog = (obj: NetworkAclAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ICMP type and code.</p>
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP code. A value of -1 means all codes for the specified ICMP type.</p>
   */
  Code?: number;

  /**
   * <p>The ICMP type. A value of -1 means all types.</p>
   */
  Type?: number;
}

export namespace IcmpTypeCode {
  export const filterSensitiveLog = (obj: IcmpTypeCode): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a range of ports.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the range.</p>
   */
  From?: number;

  /**
   * <p>The last port in the range.</p>
   */
  To?: number;
}

export namespace PortRange {
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

export type RuleAction = "allow" | "deny";

/**
 * <p>Describes an entry in a network ACL.</p>
 */
export interface NetworkAclEntry {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   */
  Egress?: boolean;

  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction?: RuleAction | string;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;
}

export namespace NetworkAclEntry {
  export const filterSensitiveLog = (obj: NetworkAclEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network ACL.</p>
 */
export interface NetworkAcl {
  /**
   * <p>Any associations between the network ACL and one or more subnets</p>
   */
  Associations?: NetworkAclAssociation[];

  /**
   * <p>One or more entries (rules) in the network ACL.</p>
   */
  Entries?: NetworkAclEntry[];

  /**
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC for the network ACL.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the network ACL.</p>
   */
  OwnerId?: string;
}

export namespace NetworkAcl {
  export const filterSensitiveLog = (obj: NetworkAcl): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclResult {
  /**
   * <p>Information about the network ACL.</p>
   */
  NetworkAcl?: NetworkAcl;
}

export namespace CreateNetworkAclResult {
  export const filterSensitiveLog = (obj: CreateNetworkAclResult): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclEntryRequest {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   * 		        <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:db8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *   			protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   * 			allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   * 			protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   * 			codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   * 			and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | string | undefined;

  /**
   * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p>
   *          <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
   */
  RuleNumber: number | undefined;
}

export namespace CreateNetworkAclEntryRequest {
  export const filterSensitiveLog = (obj: CreateNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export type Protocol = "tcp" | "udp";

export interface CreateNetworkInsightsPathRequest {
  /**
   * <p>The IP address of the AWS resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the AWS resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The AWS resource that is the source of the path.</p>
   */
  Source: string | undefined;

  /**
   * <p>The AWS resource that is the destination of the path.</p>
   */
  Destination: string | undefined;

  /**
   * <p>The protocol.</p>
   */
  Protocol: Protocol | string | undefined;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags to add to the path.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateNetworkInsightsPathRequest {
  export const filterSensitiveLog = (obj: CreateNetworkInsightsPathRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path.</p>
 */
export interface NetworkInsightsPath {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the path.</p>
   */
  NetworkInsightsPathArn?: string;

  /**
   * <p>The time stamp when the path was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The AWS resource that is the source of the path.</p>
   */
  Source?: string;

  /**
   * <p>The AWS resource that is the destination of the path.</p>
   */
  Destination?: string;

  /**
   * <p>The IP address of the AWS resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the AWS resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The protocol.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags associated with the path.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsPath {
  export const filterSensitiveLog = (obj: NetworkInsightsPath): any => ({
    ...obj,
  });
}

export interface CreateNetworkInsightsPathResult {
  /**
   * <p>Information about the path.</p>
   */
  NetworkInsightsPath?: NetworkInsightsPath;
}

export namespace CreateNetworkInsightsPathResult {
  export const filterSensitiveLog = (obj: CreateNetworkInsightsPathResult): any => ({
    ...obj,
  });
}

export type NetworkInterfaceCreationType = "efa";

/**
 * <p>Contains the parameters for CreateNetworkInterface.</p>
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses. If your subnet has the <code>AssignIpv6AddressOnCreation</code> attribute set
   *             to <code>true</code>, you can specify <code>0</code> to override this setting.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *             You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The primary private IPv4 address of the network interface. If you don't specify an
   *             IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you
   *             specify an IP address, you cannot indicate any IP addresses specified in
   *             <code>privateIpAddresses</code> as primary (only one IP address can be designated as
   *             primary).</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface. When
   *             you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses
   *             within the subnet's IPv4 CIDR range. You can't specify this option and specify more than
   *             one private IP address using <code>privateIpAddresses</code>.</p>
   *         <p>The number of IP addresses you can assign to a network interface varies by instance
   *             type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per ENI Per
   *                 Instance Type</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>Indicates the type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   * 			<code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">
   * 		    Elastic Fabric Adapter</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  InterfaceType?: NetworkInterfaceCreationType | string;

  /**
   * <p>The ID of the subnet to associate with the network interface.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to apply to the new network interface.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateNetworkInterfaceRequest {
  export const filterSensitiveLog = (obj: CreateNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4 only), or a Carrier
 *             IP address (for a network interface which resides in a subnet in a Wavelength
 *             Zone).</p>
 */
export interface NetworkInterfaceAssociation {
  /**
   * <p>The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the Elastic IP address owner.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The address of the Elastic IP address bound to the network
   *             interface.</p>
   */
  PublicIp?: string;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The carrier IP address associated with the network interface.</p>
   *         <p>This option is only available when the network interface is in a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierIp?: string;
}

export namespace NetworkInterfaceAssociation {
  export const filterSensitiveLog = (obj: NetworkInterfaceAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface attachment.</p>
 */
export interface NetworkInterfaceAttachment {
  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The AWS account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;
}

export namespace NetworkInterfaceAttachment {
  export const filterSensitiveLog = (obj: NetworkInterfaceAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface GroupIdentifier {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;
}

export namespace GroupIdentifier {
  export const filterSensitiveLog = (obj: GroupIdentifier): any => ({
    ...obj,
  });
}

export type NetworkInterfaceType = "efa" | "interface" | "natGateway";

/**
 * <p>Describes an IPv6 address associated with a network interface.</p>
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace NetworkInterfaceIpv6Address {
  export const filterSensitiveLog = (obj: NetworkInterfaceIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the private IPv4 address of a network interface.</p>
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IPv4 address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace NetworkInterfacePrivateIpAddress {
  export const filterSensitiveLog = (obj: NetworkInterfacePrivateIpAddress): any => ({
    ...obj,
  });
}

export type NetworkInterfaceStatus = "associated" | "attaching" | "available" | "detaching" | "in-use";

/**
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>Any security groups for the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: NetworkInterfaceType | string;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: NetworkInterfaceIpv6Address[];

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The AWS account ID of the owner of the network interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: NetworkInterfacePrivateIpAddress[];

  /**
   * <p>The ID of the entity that launched the instance on your behalf (for example, AWS Management Console or Auto Scaling).</p>
   */
  RequesterId?: string;

  /**
   * <p>Indicates whether the network interface is being managed by AWS.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>Indicates whether traffic to or from the instance is validated.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>Any tags assigned to the network interface.</p>
   */
  TagSet?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace NetworkInterface {
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateNetworkInterface.</p>
 */
export interface CreateNetworkInterfaceResult {
  /**
   * <p>Information about the network interface.</p>
   */
  NetworkInterface?: NetworkInterface;
}

export namespace CreateNetworkInterfaceResult {
  export const filterSensitiveLog = (obj: CreateNetworkInterfaceResult): any => ({
    ...obj,
  });
}

export type InterfacePermissionType = "EIP-ASSOCIATE" | "INSTANCE-ATTACH";

/**
 * <p>Contains the parameters for CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The AWS service. Currently not supported.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission to grant.</p>
   */
  Permission: InterfacePermissionType | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateNetworkInterfacePermissionRequest {
  export const filterSensitiveLog = (obj: CreateNetworkInterfacePermissionRequest): any => ({
    ...obj,
  });
}

export type NetworkInterfacePermissionStateCode = "granted" | "pending" | "revoked" | "revoking";

/**
 * <p>Describes the state of a network interface permission.</p>
 */
export interface NetworkInterfacePermissionState {
  /**
   * <p>The state of the permission.</p>
   */
  State?: NetworkInterfacePermissionStateCode | string;

  /**
   * <p>A status message, if applicable.</p>
   */
  StatusMessage?: string;
}

export namespace NetworkInterfacePermissionState {
  export const filterSensitiveLog = (obj: NetworkInterfacePermissionState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a permission for a network interface.</p>
 */
export interface NetworkInterfacePermission {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The AWS service.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission.</p>
   */
  Permission?: InterfacePermissionType | string;

  /**
   * <p>Information about the state of the permission.</p>
   */
  PermissionState?: NetworkInterfacePermissionState;
}

export namespace NetworkInterfacePermission {
  export const filterSensitiveLog = (obj: NetworkInterfacePermission): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * <p>Information about the permission for the network interface.</p>
   */
  InterfacePermission?: NetworkInterfacePermission;
}

export namespace CreateNetworkInterfacePermissionResult {
  export const filterSensitiveLog = (obj: CreateNetworkInterfacePermissionResult): any => ({
    ...obj,
  });
}

export type PlacementStrategy = "cluster" | "partition" | "spread";

export interface CreatePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the placement group. Must be unique within the scope of your account for
   *             the Region.</p>
   *         <p>Constraints: Up to 255 ASCII characters</p>
   */
  GroupName?: string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only when <b>Strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The tags to apply to the new placement group.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreatePlacementGroupRequest {
  export const filterSensitiveLog = (obj: CreatePlacementGroupRequest): any => ({
    ...obj,
  });
}

export type PlacementGroupState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a placement group.</p>
 */
export interface PlacementGroup {
  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The state of the placement group.</p>
   */
  State?: PlacementGroupState | string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only if <b>strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The ID of the placement group.</p>
   */
  GroupId?: string;

  /**
   * <p>Any tags applied to the placement group.</p>
   */
  Tags?: Tag[];
}

export namespace PlacementGroup {
  export const filterSensitiveLog = (obj: PlacementGroup): any => ({
    ...obj,
  });
}

export interface CreatePlacementGroupResult {
  /**
   * <p>Describes a placement group.</p>
   */
  PlacementGroup?: PlacementGroup;
}

export namespace CreatePlacementGroupResult {
  export const filterSensitiveLog = (obj: CreatePlacementGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceScheduleSpecification {
  /**
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The fixed price for the term.</p>
   */
  Price?: number;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   */
  Term?: number;
}

export namespace PriceScheduleSpecification {
  export const filterSensitiveLog = (obj: PriceScheduleSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of your
   * 				listings. This helps avoid duplicate listings. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.</p>
   */
  PriceSchedules: PriceScheduleSpecification[] | undefined;

  /**
   * <p>The ID of the active Standard Reserved Instance.</p>
   */
  ReservedInstancesId: string | undefined;
}

export namespace CreateReservedInstancesListingRequest {
  export const filterSensitiveLog = (obj: CreateReservedInstancesListingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingResult {
  /**
   * <p>Information about the Standard Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export namespace CreateReservedInstancesListingResult {
  export const filterSensitiveLog = (obj: CreateReservedInstancesListingResult): any => ({
    ...obj,
  });
}

export interface CreateRouteRequest {
  /**
   * <p>The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of a prefix list used for the destination match.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of an internet gateway or virtual private gateway attached to your
   * 			VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.</p>
   */
  InstanceId?: string;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the carrier gateway.</p>
   *         <p>You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the route table for the route.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace CreateRouteRequest {
  export const filterSensitiveLog = (obj: CreateRouteRequest): any => ({
    ...obj,
  });
}

export interface CreateRouteResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace CreateRouteResult {
  export const filterSensitiveLog = (obj: CreateRouteResult): any => ({
    ...obj,
  });
}

export interface CreateRouteTableRequest {
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

  /**
   * <p>The tags to assign to the route table.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateRouteTableRequest {
  export const filterSensitiveLog = (obj: CreateRouteTableRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociation {
  /**
   * <p>Indicates whether this is the main route table.</p>
   */
  Main?: boolean;

  /**
   * <p>The ID of the association.</p>
   */
  RouteTableAssociationId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The ID of the subnet. A subnet ID is not returned for an implicit association.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export namespace RouteTableAssociation {
  export const filterSensitiveLog = (obj: RouteTableAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual private gateway propagating route.</p>
 */
export interface PropagatingVgw {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId?: string;
}

export namespace PropagatingVgw {
  export const filterSensitiveLog = (obj: PropagatingVgw): any => ({
    ...obj,
  });
}

export type RouteOrigin = "CreateRoute" | "CreateRouteTable" | "EnableVgwRoutePropagation";

export type RouteState = "active" | "blackhole";

/**
 * <p>Describes a route in a route table.</p>
 */
export interface Route {
  /**
   * <p>The IPv4 CIDR block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The prefix of the AWS service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of a gateway attached to your VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>The AWS account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created.</p>
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
  Origin?: RouteOrigin | string;

  /**
   * <p>The state of the route. The <code>blackhole</code> state indicates that the
   * 				route's target isn't available (for example, the specified gateway isn't attached to the
   * 				VPC, or the specified NAT instance has been terminated).</p>
   */
  State?: RouteState | string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace Route {
  export const filterSensitiveLog = (obj: Route): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table.</p>
 */
export interface RouteTable {
  /**
   * <p>The associations between the route table and one or more subnets or a gateway.</p>
   */
  Associations?: RouteTableAssociation[];

  /**
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   */
  PropagatingVgws?: PropagatingVgw[];

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The routes in the route table.</p>
   */
  Routes?: Route[];

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the route table.</p>
   */
  OwnerId?: string;
}

export namespace RouteTable {
  export const filterSensitiveLog = (obj: RouteTable): any => ({
    ...obj,
  });
}

export interface CreateRouteTableResult {
  /**
   * <p>Information about the route table.</p>
   */
  RouteTable?: RouteTable;
}

export namespace CreateRouteTableResult {
  export const filterSensitiveLog = (obj: CreateRouteTableResult): any => ({
    ...obj,
  });
}

export interface CreateSecurityGroupRequest {
  /**
   * <p>A description for the security group. This is informational only.</p>
   * 		       <p>Constraints: Up to 255 characters in length</p>
   * 		       <p>Constraints for EC2-Classic: ASCII characters</p>
   * 		       <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the security group.</p>
   *          <p>Constraints: Up to 255 characters in length. Cannot start with
   *             <code>sg-</code>.</p>
   *          <p>Constraints for EC2-Classic: ASCII characters</p>
   *          <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  GroupName: string | undefined;

  /**
   * <p>[EC2-VPC] The ID of the VPC. Required for EC2-VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags to assign to the security group.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateSecurityGroupRequest {
  export const filterSensitiveLog = (obj: CreateSecurityGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateSecurityGroupResult {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The tags assigned to the security group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSecurityGroupResult {
  export const filterSensitiveLog = (obj: CreateSecurityGroupResult): any => ({
    ...obj,
  });
}

export interface CreateSnapshotRequest {
  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The tags to apply to the snapshot during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
    ...obj,
  });
}

export type SnapshotState = "completed" | "error" | "pending";

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The data encryption key identifier for the snapshot. This value is a unique identifier
   *       that corresponds to the data encryption key that was used to encrypt the original volume or
   *       snapshot copy. Because data encryption keys are inherited by volumes created from snapshots,
   *       and vice versa, if snapshots share the same data encryption key identifier, then they belong
   *       to the same volume/snapshot lineage. This parameter is only returned by <a>DescribeSnapshots</a>.</p>
   */
  DataEncryptionKeyId?: string;

  /**
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the
   *       volume encryption key for the parent volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The AWS account ID of the EBS snapshot owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   */
  Progress?: string;

  /**
   * <p>The ID of the snapshot. Each snapshot receives a unique identifier when it is
   *       created.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The snapshot state.</p>
   */
  State?: SnapshotState | string;

  /**
   * <p>Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails
   *       (for example, if the proper AWS Key Management Service (AWS KMS) permissions are not obtained) this field displays error
   *       state details to help you diagnose why the error occurred. This parameter is only returned by
   *       <a>DescribeSnapshots</a>.</p>
   */
  StateMessage?: string;

  /**
   * <p>The ID of the volume that was used to create the snapshot. Snapshots created by the <a>CopySnapshot</a> action have an arbitrary volume ID that should not be used for any
   *       purpose.</p>
   */
  VolumeId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The AWS owner alias, from an Amazon-maintained list (<code>amazon</code>). This is not
   *       the user-configured AWS account alias set using the IAM console.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>Any tags assigned to the snapshot.</p>
   */
  Tags?: Tag[];
}

export namespace Snapshot {
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export type CopyTagsFromSource = "volume";

/**
 * <p>The instance details to specify which volumes should be snapshotted.</p>
 */
export interface InstanceSpecification {
  /**
   * <p>The instance to specify which volumes should be snapshotted.</p>
   */
  InstanceId?: string;

  /**
   * <p>Excludes the root volume from being snapshotted.</p>
   */
  ExcludeBootVolume?: boolean;
}

export namespace InstanceSpecification {
  export const filterSensitiveLog = (obj: InstanceSpecification): any => ({
    ...obj,
  });
}

export interface CreateSnapshotsRequest {
  /**
   * <p> A description propagated to every snapshot specified by the instance.</p>
   */
  Description?: string;

  /**
   * <p>The instance to specify which volumes should be included in the snapshots.</p>
   */
  InstanceSpecification: InstanceSpecification | undefined;

  /**
   * <p>Tags to apply to every snapshot specified by the instance.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Copies the tags from the specified volume to corresponding snapshot.</p>
   */
  CopyTagsFromSource?: CopyTagsFromSource | string;
}

export namespace CreateSnapshotsRequest {
  export const filterSensitiveLog = (obj: CreateSnapshotsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a snapshot.</p>
 */
export interface SnapshotInfo {
  /**
   * <p>Description specified by the CreateSnapshotRequest that has been applied to all
   *     snapshots.</p>
   */
  Description?: string;

  /**
   * <p>Tags associated with this snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Source volume from which this snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * <p>Current state of the snapshot.</p>
   */
  State?: SnapshotState | string;

  /**
   * <p>Size of the volume from which this snapshot was created.</p>
   */
  VolumeSize?: number;

  /**
   * <p>Time this snapshot was started. This is the same for all snapshots initiated by the
   *     same request.</p>
   */
  StartTime?: Date;

  /**
   * <p>Progress this snapshot has made towards completing.</p>
   */
  Progress?: string;

  /**
   * <p>Account id used when creating this snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>Snapshot id that can be used to describe this snapshot.</p>
   */
  SnapshotId?: string;
}

export namespace SnapshotInfo {
  export const filterSensitiveLog = (obj: SnapshotInfo): any => ({
    ...obj,
  });
}

export interface CreateSnapshotsResult {
  /**
   * <p>List of snapshots.</p>
   */
  Snapshots?: SnapshotInfo[];
}

export namespace CreateSnapshotsResult {
  export const filterSensitiveLog = (obj: CreateSnapshotsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionRequest {
  /**
   * <p>The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For more information
   *          about bucket names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules">Rules for bucket naming</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The prefix for the data feed file names.</p>
   */
  Prefix?: string;
}

export namespace CreateSpotDatafeedSubscriptionRequest {
  export const filterSensitiveLog = (obj: CreateSpotDatafeedSubscriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Instance state change.</p>
 */
export interface SpotInstanceStateFault {
  /**
   * <p>The reason code for the Spot Instance state change.</p>
   */
  Code?: string;

  /**
   * <p>The message for the Spot Instance state change.</p>
   */
  Message?: string;
}

export namespace SpotInstanceStateFault {
  export const filterSensitiveLog = (obj: SpotInstanceStateFault): any => ({
    ...obj,
  });
}

export type DatafeedSubscriptionState = "Active" | "Inactive";

/**
 * <p>Describes the data feed for a Spot Instance.</p>
 */
export interface SpotDatafeedSubscription {
  /**
   * <p>The name of the Amazon S3 bucket where the Spot Instance data feed is located.</p>
   */
  Bucket?: string;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * <p>The AWS account ID of the account.</p>
   */
  OwnerId?: string;

  /**
   * <p>The prefix for the data feed files.</p>
   */
  Prefix?: string;

  /**
   * <p>The state of the Spot Instance data feed subscription.</p>
   */
  State?: DatafeedSubscriptionState | string;
}

export namespace SpotDatafeedSubscription {
  export const filterSensitiveLog = (obj: SpotDatafeedSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

export namespace CreateSpotDatafeedSubscriptionResult {
  export const filterSensitiveLog = (obj: CreateSpotDatafeedSubscriptionResult): any => ({
    ...obj,
  });
}

export interface CreateSubnetRequest {
  /**
   * <p>The tags to assign to the subnet.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The Availability Zone or Local Zone for the subnet.</p>
   *          <p>Default: AWS selects one for you. If you create more than one subnet in your VPC, we
   *           do not necessarily select a different zone for each subnet.</p>
   *          <p>To create a subnet in a Local Zone, set this value to the Local Zone ID, for example
   *           <code>us-west-2-lax-1a</code>. For information about the Regions that support Local Zones,
   *            see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">Available Regions</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>To create a subnet in an Outpost, set this value to the Availability Zone for the
   *            Outpost and specify the Outpost ARN.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The AZ ID or the Local Zone ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The IPv4 network range for the subnet, in CIDR notation. For example, <code>10.0.0.0/24</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock: string | undefined;

  /**
   * <p>The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a
   *             /64 prefix length.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also
   *         specify the Availability Zone of the Outpost subnet.</p>
   */
  OutpostArn?: string;

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

export namespace CreateSubnetRequest {
  export const filterSensitiveLog = (obj: CreateSubnetRequest): any => ({
    ...obj,
  });
}

export interface CreateSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

export namespace CreateSubnetResult {
  export const filterSensitiveLog = (obj: CreateSubnetResult): any => ({
    ...obj,
  });
}

export interface CreateTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *    	     <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags. The <code>value</code> parameter is required, but if you don't want the tag to have a value,
   *         specify the parameter with no value, and we set the value to an empty string.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRequest {
  /**
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror filter.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRequest {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Traffic Mirror port range.</p>
 */
export interface TrafficMirrorPortRange {
  /**
   * <p>The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export namespace TrafficMirrorPortRange {
  export const filterSensitiveLog = (obj: TrafficMirrorPortRange): any => ({
    ...obj,
  });
}

export type TrafficMirrorRuleAction = "accept" | "reject";

export type TrafficDirection = "egress" | "ingress";

/**
 * <p>Describes the Traffic Mirror rule.</p>
 */
export interface TrafficMirrorFilterRule {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter that the rule is associated with.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The traffic direction assigned to the Traffic Mirror rule.</p>
   */
  TrafficDirection?: TrafficDirection | string;

  /**
   * <p>The rule number of the Traffic Mirror rule.</p>
   */
  RuleNumber?: number;

  /**
   * <p>The action assigned to the Traffic Mirror rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction | string;

  /**
   * <p>The protocol assigned to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination port range assigned to the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRange;

  /**
   * <p>The source port range assigned to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRange;

  /**
   * <p>The destination CIDR block assigned to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The source CIDR block assigned to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;
}

export namespace TrafficMirrorFilterRule {
  export const filterSensitiveLog = (obj: TrafficMirrorFilterRule): any => ({
    ...obj,
  });
}

export type TrafficMirrorNetworkService = "amazon-dns";

/**
 * <p>Describes the Traffic Mirror filter.</p>
 */
export interface TrafficMirrorFilter {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   */
  IngressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   */
  EgressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   */
  NetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorFilter {
  export const filterSensitiveLog = (obj: TrafficMirrorFilter): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterResult {
  /**
   * <p>Information about the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterResult {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Traffic Mirror filter rule port range.</p>
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * <p>The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export namespace TrafficMirrorPortRangeRequest {
  export const filterSensitiveLog = (obj: TrafficMirrorPortRangeRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the filter that this rule is associated with.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The type of traffic (<code>ingress</code> | <code>egress</code>).</p>
   */
  TrafficDirection: TrafficDirection | string | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber: number | undefined;

  /**
   * <p>The action to take (<code>accept</code> | <code>reject</code>) on the filtered traffic.</p>
   */
  RuleAction: TrafficMirrorRuleAction | string | undefined;

  /**
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The source port range.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p>
   *          <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the  Internet Assigned Numbers Authority (IANA) website.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRuleRequest {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRuleRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * <p>The Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRuleResult {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRuleResult): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the source network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do
   *          not specify this parameter when you want to mirror the entire packet. To mirror a subset of
   *          the packet, set this to the length (in bytes) that you want to mirror. For example, if you
   *          set this value to 100, then the first 100 bytes that meet the filter criteria are copied to
   *          the target.</p>
   *          <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber: number | undefined;

  /**
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN
   *          protocol, see <a href="https://tools.ietf.org/html/rfc7348">RFC 7348</a>. If you do
   *          not specify a <code>VirtualNetworkId</code>, an account-wide unique id is chosen at
   *          random.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror session.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorSessionRequest {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Traffic Mirror session.</p>
 */
export interface TrafficMirrorSession {
  /**
   * <p>The ID for the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The ID of the Traffic Mirror session's network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror session.</p>
   */
  OwnerId?: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * <p>The virtual network ID associated with the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror session.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorSession {
  export const filterSensitiveLog = (obj: TrafficMirrorSession): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorSessionResult {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorTargetRequest {
  /**
   * <p>The network interface ID that is associated with the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The description of the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to the Traffic Mirror target.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorTargetRequest {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorTargetRequest): any => ({
    ...obj,
  });
}

export type TrafficMirrorTargetType = "network-interface" | "network-load-balancer";

/**
 * <p>Describes a Traffic Mirror target.</p>
 */
export interface TrafficMirrorTarget {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The network interface ID that is attached to the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The type of Traffic Mirror target.</p>
   */
  Type?: TrafficMirrorTargetType | string;

  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorTarget {
  export const filterSensitiveLog = (obj: TrafficMirrorTarget): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorTargetResult {
  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  TrafficMirrorTarget?: TrafficMirrorTarget;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorTargetResult {
  export const filterSensitiveLog = (obj: CreateTrafficMirrorTargetResult): any => ({
    ...obj,
  });
}

export type AutoAcceptSharedAttachmentsValue = "disable" | "enable";

export type DefaultRouteTableAssociationValue = "disable" | "enable";

export type DefaultRouteTablePropagationValue = "disable" | "enable";

export type MulticastSupportValue = "disable" | "enable";

export type VpnEcmpSupportValue = "disable" | "enable";

/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayRequestOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs. The default is <code>64512</code>.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests. Disabled by default.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Enable or disable automatic association with the default association route table. Enabled by default.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support. Enabled by default.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Enable or disable DNS support. Enabled by default.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue | string;

  /**
   * <p>One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  TransitGatewayCidrBlocks?: string[];
}

export namespace TransitGatewayRequestOptions {
  export const filterSensitiveLog = (obj: TransitGatewayRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRequest {
  /**
   * <p>A description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayRequestOptions;

  /**
   * <p>The tags to apply to the transit gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>The transit gateway CIDR blocks.</p>
   */
  TransitGatewayCidrBlocks?: string[];

  /**
   * <p>Indicates whether attachment requests are automatically accepted.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Indicates whether resource attachments are automatically associated with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether resource attachments automatically propagate routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether Equal Cost Multipath Protocol support is enabled.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue | string;
}

export namespace TransitGatewayOptions {
  export const filterSensitiveLog = (obj: TransitGatewayOptions): any => ({
    ...obj,
  });
}

export type TransitGatewayState = "available" | "deleted" | "deleting" | "modifying" | "pending";

/**
 * <p>Describes a transit gateway.</p>
 */
export interface TransitGateway {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway.</p>
   */
  State?: TransitGatewayState | string;

  /**
   * <p>The ID of the AWS account ID that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayOptions;

  /**
   * <p>The tags for the transit gateway.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGateway {
  export const filterSensitiveLog = (obj: TransitGateway): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export namespace CreateTransitGatewayResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayResult): any => ({
    ...obj,
  });
}

export type ProtocolValue = "gre";

/**
 * <p>The options for a Connect attachment.</p>
 */
export interface CreateTransitGatewayConnectRequestOptions {
  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol: ProtocolValue | string | undefined;
}

export namespace CreateTransitGatewayConnectRequestOptions {
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectRequest {
  /**
   * <p>The ID of the transit gateway attachment. You can specify a VPC attachment or a AWS Direct Connect attachment.</p>
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * <p>The tags to apply to the Connect attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayConnectRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Connect attachment options.</p>
 */
export interface TransitGatewayConnectOptions {
  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;
}

export namespace TransitGatewayConnectOptions {
  export const filterSensitiveLog = (obj: TransitGatewayConnectOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a transit gateway Connect attachment.</p>
 */
export interface TransitGatewayConnect {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the attachment from which the Connect attachment was created.</p>
   */
  TransportTransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options?: TransitGatewayConnectOptions;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayConnect {
  export const filterSensitiveLog = (obj: TransitGatewayConnect): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectResult {
  /**
   * <p>Information about the Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

export namespace CreateTransitGatewayConnectResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectResult): any => ({
    ...obj,
  });
}

/**
 * <p>The BGP options for the Connect attachment.</p>
 */
export interface TransitGatewayConnectRequestBgpOptions {
  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;
}

export namespace TransitGatewayConnectRequestBgpOptions {
  export const filterSensitiveLog = (obj: TransitGatewayConnectRequestBgpOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be
   *             specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns
   *             the first available IP address from the transit gateway CIDR block.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</p>
   */
  PeerAddress: string | undefined;

  /**
   * <p>The BGP options for the Connect peer.</p>
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions;

  /**
   * <p>The range of inside IP addresses that are used for BGP peering. You must specify a
   *             size /29 IPv4 CIDR block from the <code>169.254.0.0/16</code> range. The first address
   *             from the range must be configured on the appliance as the BGP IP address. You can also
   *             optionally specify a size /125 IPv6 CIDR block from the <code>fd00::/8</code>
   *             range.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags to apply to the Connect peer.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayConnectPeerRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export type BgpStatus = "down" | "up";

/**
 * <p>The BGP configuration information.</p>
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * <p>The transit gateway Autonomous System Number (ASN).</p>
   */
  TransitGatewayAsn?: number;

  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;

  /**
   * <p>The interior BGP peer IP address for the transit gateway.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The interior BGP peer IP address for the appliance.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The BGP status.</p>
   */
  BgpStatus?: BgpStatus | string;
}

export namespace TransitGatewayAttachmentBgpConfiguration {
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentBgpConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Connect peer details.</p>
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * <p>The Connect peer IP address on the transit gateway side of the tunnel.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The Connect peer IP address on the appliance side of the tunnel.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The range of interior BGP peer IP addresses.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;

  /**
   * <p>The BGP configuration details.</p>
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[];
}

export namespace TransitGatewayConnectPeerConfiguration {
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeerConfiguration): any => ({
    ...obj,
  });
}

export type TransitGatewayConnectPeerState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a transit gateway Connect peer.</p>
 */
export interface TransitGatewayConnectPeer {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId?: string;

  /**
   * <p>The state of the Connect peer.</p>
   */
  State?: TransitGatewayConnectPeerState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect peer details.</p>
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;

  /**
   * <p>The tags for the Connect peer.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayConnectPeer {
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeer): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

export namespace CreateTransitGatewayConnectPeerResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectPeerResult): any => ({
    ...obj,
  });
}

export type AutoAcceptSharedAssociationsValue = "disable" | "enable";

export type Igmpv2SupportValue = "disable" | "enable";

export type StaticSourcesSupportValue = "disable" | "enable";

/**
 * <p>The options for the transit gateway multicast domain.</p>
 */
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * <p>Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue | string;

  /**
   * <p>Specify whether to enable support for statically configuring multicast group sources for a domain.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | string;

  /**
   * <p>Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | string;
}

export namespace CreateTransitGatewayMulticastDomainRequestOptions {
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayMulticastDomainRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * <p>Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue | string;

  /**
   * <p>Indicates whether support for statically configuring transit gateway multicast group sources is turned on.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | string;

  /**
   * <p>Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | string;
}

export namespace TransitGatewayMulticastDomainOptions {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainOptions): any => ({
    ...obj,
  });
}

export type TransitGatewayMulticastDomainState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomain {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainArn?: string;

  /**
   * <p> The ID of the AWS account that owns the transit gateway multiicast domain.</p>
   */
  OwnerId?: string;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: TransitGatewayMulticastDomainOptions;

  /**
   * <p>The state of the transit gateway multicast domain.</p>
   */
  State?: TransitGatewayMulticastDomainState | string;

  /**
   * <p>The time the transit gateway multicast domain was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayMulticastDomain {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomain): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

export namespace CreateTransitGatewayMulticastDomainResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the peer transit gateway with which to create the peering attachment.</p>
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * <p>The AWS account ID of the owner of the peer transit gateway.</p>
   */
  PeerAccountId: string | undefined;

  /**
   * <p>The Region where the peer transit gateway is located.</p>
   */
  PeerRegion: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway peering attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayPeeringAttachmentRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace CreateTransitGatewayPeeringAttachmentResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list that is used for destination matches.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayPrefixListReferenceRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayPrefixListReferenceRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayPrefixListReferenceState = "available" | "deleting" | "modifying" | "pending";

/**
 * <p>Describes a transit gateway prefix list attachment.</p>
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace TransitGatewayPrefixListAttachment {
  export const filterSensitiveLog = (obj: TransitGatewayPrefixListAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a prefix list reference.</p>
 */
export interface TransitGatewayPrefixListReference {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the prefix list owner.</p>
   */
  PrefixListOwnerId?: string;

  /**
   * <p>The state of the prefix list reference.</p>
   */
  State?: TransitGatewayPrefixListReferenceState | string;

  /**
   * <p>Indicates whether traffic that matches this route is dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Information about the transit gateway attachment.</p>
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment;
}

export namespace TransitGatewayPrefixListReference {
  export const filterSensitiveLog = (obj: TransitGatewayPrefixListReference): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export namespace CreateTransitGatewayPrefixListReferenceResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayPrefixListReferenceResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on the
   *          most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRouteRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteState = "active" | "blackhole" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a route attachment.</p>
 */
export interface TransitGatewayRouteAttachment {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated. </p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;
}

export namespace TransitGatewayRouteAttachment {
  export const filterSensitiveLog = (obj: TransitGatewayRouteAttachment): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteType = "propagated" | "static";

/**
 * <p>Describes a route for a transit gateway route table.</p>
 */
export interface TransitGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the prefix list used for destination matches.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[];

  /**
   * <p>The route type.</p>
   */
  Type?: TransitGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: TransitGatewayRouteState | string;
}

export namespace TransitGatewayRoute {
  export const filterSensitiveLog = (obj: TransitGatewayRoute): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export namespace CreateTransitGatewayRouteResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway route table.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRouteTableRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteTableState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a transit gateway route table.</p>
 */
export interface TransitGatewayRouteTable {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the transit gateway route table.</p>
   */
  State?: TransitGatewayRouteTableState | string;

  /**
   * <p>Indicates whether this is the default association route table for the transit gateway.</p>
   */
  DefaultAssociationRouteTable?: boolean;

  /**
   * <p>Indicates whether this is the default propagation route table for the transit gateway.</p>
   */
  DefaultPropagationRouteTable?: boolean;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayRouteTable {
  export const filterSensitiveLog = (obj: TransitGatewayRouteTable): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export namespace CreateTransitGatewayRouteTableResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable IPv6 support.  The default is <code>disable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

export namespace CreateTransitGatewayVpcAttachmentRequestOptions {
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone.
   *          You must specify at least one subnet, but we recommend that you specify two subnets for better availability.
   *          The transit gateway uses one IP address from each specified subnet.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>The tags to apply to the VPC attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayVpcAttachmentRequest {
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace CreateTransitGatewayVpcAttachmentResult {
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface CreateVolumeRequest {
  /**
   * <p>The Availability Zone in which to create the volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Indicates whether the volume should be encrypted.
   *       The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">Encryption by default</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
   *         instance types</a>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io1</code> and <code>io2</code> volumes, we guarantee 64,000 IOPS only for
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families guarantee performance
   *       up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes.
   *       The default for <code>gp3</code> volumes is 3,000 IOPS.
   *       This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.
   *       If this parameter is not specified, your AWS managed CMK for EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the CMK using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       If you specify a snapshot, the default is the snapshot size. You can specify a volume
   *       size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  Size?: number;

  /**
   * <p>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume type. This parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD: <code>gp2</code> | <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD: <code>io1</code> | <code>io2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD: <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD: <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic: <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the volume during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   *     	volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the same Availability Zone. This parameter is
   *     	supported with  <code>io1</code> volumes only. For more information,
   *     	see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   *     		Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput to provision for a volume, with a maximum of 1,000 MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *   	      <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;
}

export namespace CreateVolumeRequest {
  export const filterSensitiveLog = (obj: CreateVolumeRequest): any => ({
    ...obj,
  });
}

export type VolumeState = "available" | "creating" | "deleted" | "deleting" | "error" | "in-use";

/**
 * <p>Describes a volume.</p>
 */
export interface Volume {
  /**
   * <p>Information about the volume attachments.</p>
   */
  Attachments?: VolumeAttachment[];

  /**
   * <p>The Availability Zone for the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time stamp when volume creation was initiated.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Indicates whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the
   *       volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;

  /**
   * <p>The snapshot from which the volume was created, if applicable.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume state.</p>
   */
  State?: VolumeState | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   */
  Iops?: number;

  /**
   * <p>Any tags assigned to the volume.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Indicates whether the volume was created using fast snapshot restore.</p>
   */
  FastRestored?: boolean;

  /**
   * <p>Indicates whether Amazon EBS Multi-Attach is enabled.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

export namespace Volume {
  export const filterSensitiveLog = (obj: Volume): any => ({
    ...obj,
  });
}

export interface CreateVpcRequest {
  /**
   * <p>The IPv4 network range for the VPC, in CIDR notation. For example,
   * 		        <code>10.0.0.0/16</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock: string | undefined;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
   *             You cannot specify the range of IP addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;

  /**
   * <p>The IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tenancy options for instances launched into the VPC. For <code>default</code>, instances
   *       are launched with shared tenancy by default. You can launch instances with any tenancy into a
   *       shared tenancy VPC. For <code>dedicated</code>, instances are launched as dedicated tenancy
   *       instances by default. You can only launch instances with a tenancy of <code>dedicated</code>
   *       or <code>host</code> into a dedicated tenancy VPC. </p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>The tags to assign to the VPC.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcRequest {
  export const filterSensitiveLog = (obj: CreateVpcRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcResult {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

export namespace CreateVpcResult {
  export const filterSensitiveLog = (obj: CreateVpcResult): any => ({
    ...obj,
  });
}

export enum VpcEndpointType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>Contains the parameters for CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of endpoint.</p>
   *         <p>Default: Gateway</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC in which the endpoint will be used.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The service name. To get a list of available services, use the <a>DescribeVpcEndpointServices</a> request, or get the name from the service
   *             provider.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the
   *             service. The policy must be in valid JSON format. If this parameter is not specified, we
   *             attach a default policy that allows full access to the service.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route table IDs.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The ID of one or more subnets in which to create an endpoint
   *             network interface. For a Gateway Load Balancer endpoint, you can specify one subnet only.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) The ID of one or more security groups to associate with the
   *             endpoint network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>(Interface endpoint) Indicates whether to associate a private hosted zone with the
   *             specified VPC. The private hosted zone contains a record set for the default public DNS
   *             name for the service for the Region (for example,
   *                 <code>kinesis.us-east-1.amazonaws.com</code>), which resolves to the private IP
   *             addresses of the endpoint network interfaces in the VPC. This enables you to make
   *             requests to the default public DNS name for the service instead of the public DNS names
   *             that are automatically generated by the VPC endpoint service.</p>
   *         <p>To use a private hosted zone, you must set the following VPC attributes to
   *             <code>true</code>: <code>enableDnsHostnames</code> and
   *             <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC
   *             attributes.</p>
   *         <p>Default: <code>true</code>
   *          </p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>The tags to associate with the endpoint.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcEndpointRequest {
  export const filterSensitiveLog = (obj: CreateVpcEndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a DNS entry.</p>
 */
export interface DnsEntry {
  /**
   * <p>The DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the private hosted zone.</p>
   */
  HostedZoneId?: string;
}

export namespace DnsEntry {
  export const filterSensitiveLog = (obj: DnsEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface SecurityGroupIdentifier {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;
}

export namespace SecurityGroupIdentifier {
  export const filterSensitiveLog = (obj: SecurityGroupIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>The last error that occurred for a VPC endpoint.</p>
 */
export interface LastError {
  /**
   * <p>The error message for the VPC endpoint error.</p>
   */
  Message?: string;

  /**
   * <p>The error code for the VPC endpoint error.</p>
   */
  Code?: string;
}

export namespace LastError {
  export const filterSensitiveLog = (obj: LastError): any => ({
    ...obj,
  });
}

export enum State {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Expired = "Expired",
  Failed = "Failed",
  Pending = "Pending",
  PendingAcceptance = "PendingAcceptance",
  Rejected = "Rejected",
}

/**
 * <p>Describes a VPC endpoint.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of endpoint.</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the service to which the endpoint is associated.</p>
   */
  ServiceName?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  State?: State | string;

  /**
   * <p>The policy document associated with the endpoint, if applicable.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables associated with the endpoint.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface endpoint) One or more subnets in which the endpoint is located.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) Information about the security groups that are associated with
   *             the network interface.</p>
   */
  Groups?: SecurityGroupIdentifier[];

  /**
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>Indicates whether the VPC endpoint is being managed by its service.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>(Interface endpoint) One or more network interfaces for the endpoint.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>Any tags assigned to the VPC endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the AWS account that owns the VPC endpoint.</p>
   */
  OwnerId?: string;

  /**
   * <p>The last error that occurred for VPC endpoint.</p>
   */
  LastError?: LastError;
}

export namespace VpcEndpoint {
  export const filterSensitiveLog = (obj: VpcEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointResult {
  /**
   * <p>Information about the endpoint.</p>
   */
  VpcEndpoint?: VpcEndpoint;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointResult {
  export const filterSensitiveLog = (obj: CreateVpcEndpointResult): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The ARN of the SNS topic for the notifications.</p>
   */
  ConnectionNotificationArn: string | undefined;

  /**
   * <p>One or more endpoint events for which to receive notifications. Valid values are
   *                 <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and
   *                 <code>Reject</code>.</p>
   */
  ConnectionEvents: string[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointConnectionNotificationRequest {
  export const filterSensitiveLog = (obj: CreateVpcEndpointConnectionNotificationRequest): any => ({
    ...obj,
  });
}

export enum ConnectionNotificationState {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

export enum ConnectionNotificationType {
  Topic = "Topic",
}

/**
 * <p>Describes a connection notification for a VPC endpoint or VPC endpoint
 *             service.</p>
 */
export interface ConnectionNotification {
  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of notification.</p>
   */
  ConnectionNotificationType?: ConnectionNotificationType | string;

  /**
   * <p>The ARN of the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>The events for the notification. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];

  /**
   * <p>The state of the notification.</p>
   */
  ConnectionNotificationState?: ConnectionNotificationState | string;
}

export namespace ConnectionNotification {
  export const filterSensitiveLog = (obj: ConnectionNotification): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * <p>Information about the notification.</p>
   */
  ConnectionNotification?: ConnectionNotification;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointConnectionNotificationResult {
  export const filterSensitiveLog = (obj: CreateVpcEndpointConnectionNotificationResult): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether requests from service consumers to create an endpoint to your service must
   *             be accepted. To accept a request, use <a>AcceptVpcEndpointConnections</a>.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Network Load Balancers for your
   *             service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Gateway Load Balancers.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to associate with the service.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcEndpointServiceConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateVpcEndpointServiceConfigurationRequest): any => ({
    ...obj,
  });
}

export enum DnsNameState {
  Failed = "failed",
  PendingVerification = "pendingVerification",
  Verified = "verified",
}

/**
 * <p>Information about the private DNS name for the service endpoint. For more information
 *             about these parameters, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/ndpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export interface PrivateDnsNameConfiguration {
  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>>Consumers
   *             of the endpoint service can use the private name only when the state is
   *                 <code>verified</code>.</p>
   */
  State?: DnsNameState | string;

  /**
   * <p>The endpoint service verification type, for example TXT.</p>
   */
  Type?: string;

  /**
   * <p>The value the service provider adds to the private DNS name domain record before verification.</p>
   */
  Value?: string;

  /**
   * <p>The name of the record subdomain the service provider needs to create. The service provider adds the <code>value</code> text to the <code>name</code>.</p>
   */
  Name?: string;
}

export namespace PrivateDnsNameConfiguration {
  export const filterSensitiveLog = (obj: PrivateDnsNameConfiguration): any => ({
    ...obj,
  });
}

export enum ServiceState {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Failed = "Failed",
  Pending = "Pending",
}

export enum ServiceType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>Describes the type of service for a VPC endpoint.</p>
 */
export interface ServiceTypeDetail {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceType | string;
}

export namespace ServiceTypeDetail {
  export const filterSensitiveLog = (obj: ServiceTypeDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a service configuration for a VPC endpoint service.</p>
 */
export interface ServiceConfiguration {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The service state.</p>
   */
  ServiceState?: ServiceState | string;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Indicates whether requests from other AWS accounts to create an endpoint to the service must first be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Information about the endpoint service private DNS name configuration.</p>
   */
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];
}

export namespace ServiceConfiguration {
  export const filterSensitiveLog = (obj: ServiceConfiguration): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * <p>Information about the service configuration.</p>
   */
  ServiceConfiguration?: ServiceConfiguration;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointServiceConfigurationResult {
  export const filterSensitiveLog = (obj: CreateVpcEndpointServiceConfigurationResult): any => ({
    ...obj,
  });
}

export interface CreateVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The AWS account ID of the owner of the accepter VPC.</p>
   *          <p>Default: Your AWS account ID</p>
   */
  PeerOwnerId?: string;

  /**
   * <p>The ID of the VPC with which you are creating the VPC peering connection. You must
   * 			specify this parameter in the request.</p>
   */
  PeerVpcId?: string;

  /**
   * <p>The ID of the requester VPC. You must specify this parameter in the
   * 			request.</p>
   */
  VpcId?: string;

  /**
   * <p>The Region code for the accepter VPC, if the accepter VPC is located in a Region
   *             other than the Region in which you make the request.</p>
   * 		       <p>Default: The Region in which you make the request.</p>
   */
  PeerRegion?: string;

  /**
   * <p>The tags to assign to the peering connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcPeeringConnectionRequest {
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
}

export namespace CreateVpcPeeringConnectionResult {
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

export type TunnelInsideIpVersion = "ipv4" | "ipv6";

/**
 * <p>The IKE version that is permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsRequestListValue {
  /**
   * <p>The IKE version.</p>
   */
  Value?: string;
}

export namespace IKEVersionsRequestListValue {
  export const filterSensitiveLog = (obj: IKEVersionsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE negotiations.</p>
 */
export interface Phase1DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase1DHGroupNumbersRequestListValue {
  export const filterSensitiveLog = (obj: Phase1DHGroupNumbersRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1EncryptionAlgorithmsRequestListValue {
  export const filterSensitiveLog = (obj: Phase1EncryptionAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1IntegrityAlgorithmsRequestListValue {
  export const filterSensitiveLog = (obj: Phase1IntegrityAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE negotiations.</p>
 */
export interface Phase2DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase2DHGroupNumbersRequestListValue {
  export const filterSensitiveLog = (obj: Phase2DHGroupNumbersRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2EncryptionAlgorithmsRequestListValue {
  export const filterSensitiveLog = (obj: Phase2EncryptionAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2IntegrityAlgorithmsRequestListValue {
  export const filterSensitiveLog = (obj: Phase2IntegrityAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The tunnel options for a single VPN tunnel.</p>
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be unique
   * 			across all VPN connections that use the same virtual private gateway. </p>
   * 		       <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   * 			following CIDR blocks are reserved and cannot be used:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.</p>
   *         <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual private
   * 			gateway and customer gateway.</p>
   * 		       <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores
   *             (_). Must be between 8 and 64 characters in length and cannot start with zero
   *             (0).</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 28,800.</p>
   *         <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 3,600. The value must be less than the value for <code>Phase1LifetimeSeconds</code>.</p>
   *         <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for <code>RekeyFuzzPercentage</code>.</p>
   *         <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *         <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>) during which the rekey time is randomly selected.</p>
   *         <p>Constraints: A value between 0 and 100.</p>
   *         <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *         <p>Constraints: A value between 64 and 2048.</p>
   *         <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *         <p>Constraints: A value between 0 and 30.</p>
   *         <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *         <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *         <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *         <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify <code>start</code> for AWS to initiate the IKE negotiation.</p>
   *         <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *         <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;
}

export namespace VpnTunnelOptionsSpecification {
  export const filterSensitiveLog = (obj: VpnTunnelOptionsSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptionsSpecification {
  /**
   * <p>Indicate whether to enable acceleration for the VPN connection.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  EnableAcceleration?: boolean;

  /**
   * <p>Indicate whether the VPN connection uses static routes only. If you are creating a
   *             VPN connection for a device that does not support BGP, you must specify
   *                 <code>true</code>. Use <a>CreateVpnConnectionRoute</a> to create a static route.</p>
   * 		       <p>Default: <code>false</code>
   *          </p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   *         <p>Default: <code>ipv4</code>
   *          </p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | string;

  /**
   * <p>The tunnel options for the VPN connection.</p>
   */
  TunnelOptions?: VpnTunnelOptionsSpecification[];

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the AWS side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the AWS side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;
}

export namespace VpnConnectionOptionsSpecification {
  export const filterSensitiveLog = (obj: VpnConnectionOptionsSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>The type of VPN connection (<code>ipsec.1</code>).</p>
   */
  Type: string | undefined;

  /**
   * <p>The ID of the virtual private gateway. If you specify a virtual private gateway, you cannot specify a transit gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The options for the VPN connection.</p>
   */
  Options?: VpnConnectionOptionsSpecification;

  /**
   * <p>The tags to apply to the VPN connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpnConnectionRequest {
  export const filterSensitiveLog = (obj: CreateVpnConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The internet key exchange (IKE) version permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsListValue {
  /**
   * <p>The IKE version.</p>
   */
  Value?: string;
}

export namespace IKEVersionsListValue {
  export const filterSensitiveLog = (obj: IKEVersionsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The Diffie-Hellmann group number for phase 1 IKE negotiations.</p>
 */
export interface Phase1DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase1DHGroupNumbersListValue {
  export const filterSensitiveLog = (obj: Phase1DHGroupNumbersListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1EncryptionAlgorithmsListValue {
  export const filterSensitiveLog = (obj: Phase1EncryptionAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The integrity algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1IntegrityAlgorithmsListValue {
  export const filterSensitiveLog = (obj: Phase1IntegrityAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The Diffie-Hellmann group number for phase 2 IKE negotiations.</p>
 */
export interface Phase2DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase2DHGroupNumbersListValue {
  export const filterSensitiveLog = (obj: Phase2DHGroupNumbersListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2EncryptionAlgorithmsListValue {
  export const filterSensitiveLog = (obj: Phase2EncryptionAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The integrity algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2IntegrityAlgorithmsListValue {
  export const filterSensitiveLog = (obj: Phase2IntegrityAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The VPN tunnel options.</p>
 */
export interface TunnelOption {
  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey.</p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window determined by <code>RekeyMarginTimeSeconds</code> during which the rekey time is randomly selected.</p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   */
  DpdTimeoutSeconds?: number;

  /**
   * <p>The action to take after a DPD timeout occurs.</p>
   */
  DpdTimeoutAction?: string;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE negotiations.</p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE negotiations.</p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE negotiations.</p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE negotiations.</p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE negotiations.</p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE negotiations.</p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   */
  IkeVersions?: IKEVersionsListValue[];

  /**
   * <p>The action to take when the establishing the VPN tunnels for a VPN connection.</p>
   */
  StartupAction?: string;
}

export namespace TunnelOption {
  export const filterSensitiveLog = (obj: TunnelOption): any => ({
    ...obj,
  });
}

/**
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptions {
  /**
   * <p>Indicates whether acceleration is enabled for the VPN connection.</p>
   */
  EnableAcceleration?: boolean;

  /**
   * <p>Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.</p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the AWS side of the VPN connection.</p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the AWS side of the VPN connection.</p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | string;

  /**
   * <p>Indicates the VPN tunnel options.</p>
   */
  TunnelOptions?: TunnelOption[];
}

export namespace VpnConnectionOptions {
  export const filterSensitiveLog = (obj: VpnConnectionOptions): any => ({
    ...obj,
  });
}

export type VpnStaticRouteSource = "Static";

export type VpnState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a static route for a VPN connection.</p>
 */
export interface VpnStaticRoute {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Indicates how the routes were provided.</p>
   */
  Source?: VpnStaticRouteSource | string;

  /**
   * <p>The current state of the static route.</p>
   */
  State?: VpnState | string;
}

export namespace VpnStaticRoute {
  export const filterSensitiveLog = (obj: VpnStaticRoute): any => ({
    ...obj,
  });
}

export type TelemetryStatus = "DOWN" | "UP";

/**
 * <p>Describes telemetry for a VPN tunnel.</p>
 */
export interface VgwTelemetry {
  /**
   * <p>The number of accepted routes.</p>
   */
  AcceptedRouteCount?: number;

  /**
   * <p>The date and time of the last change in status.</p>
   */
  LastStatusChange?: Date;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The status of the VPN tunnel.</p>
   */
  Status?: TelemetryStatus | string;

  /**
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.</p>
   */
  CertificateArn?: string;
}

export namespace VgwTelemetry {
  export const filterSensitiveLog = (obj: VgwTelemetry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPN connection.</p>
 */
export interface VpnConnection {
  /**
   * <p>The configuration information for the VPN connection's customer gateway (in the native XML
   *             format). This element is always present in the <a>CreateVpnConnection</a> response; however,
   *             it's present in the <a>DescribeVpnConnections</a> response only if the VPN connection is in
   *             the <code>pending</code> or <code>available</code> state.</p>
   */
  CustomerGatewayConfiguration?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The category of the VPN connection. A value of <code>VPN</code> indicates an AWS VPN
   * 			connection. A value of <code>VPN-Classic</code> indicates an AWS Classic VPN connection.</p>
   */
  Category?: string;

  /**
   * <p>The current state of the VPN connection.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId?: string;

  /**
   * <p>The ID of the virtual private gateway at the AWS side of the VPN connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The VPN connection options.</p>
   */
  Options?: VpnConnectionOptions;

  /**
   * <p>The static routes associated with the VPN connection.</p>
   */
  Routes?: VpnStaticRoute[];

  /**
   * <p>Any tags assigned to the VPN connection.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: VgwTelemetry[];
}

export namespace VpnConnection {
  export const filterSensitiveLog = (obj: VpnConnection): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace CreateVpnConnectionResult {
  export const filterSensitiveLog = (obj: CreateVpnConnectionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnConnectionRoute.</p>
 */
export interface CreateVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

export namespace CreateVpnConnectionRouteRequest {
  export const filterSensitiveLog = (obj: CreateVpnConnectionRouteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayRequest {
  /**
   * <p>The Availability Zone for the virtual private gateway.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The type of VPN connection this virtual private gateway supports.</p>
   */
  Type: GatewayType | string | undefined;

  /**
   * <p>The tags to apply to the virtual private gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a 32-bit ASN, it must be in the 4200000000 to 4294967294 range.</p>
   * 		       <p>Default: 64512</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateVpnGatewayRequest {
  export const filterSensitiveLog = (obj: CreateVpnGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual private gateway.</p>
 */
export interface VpnGateway {
  /**
   * <p>The Availability Zone where the virtual private gateway was created, if applicable. This field may be empty or not returned.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The current state of the virtual private gateway.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection the virtual private gateway supports.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>Any VPCs attached to the virtual private gateway.</p>
   */
  VpcAttachments?: VpcAttachment[];

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The private Autonomous System Number (ASN) for the Amazon side of a BGP session.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Any tags assigned to the virtual private gateway.</p>
   */
  Tags?: Tag[];
}

export namespace VpnGateway {
  export const filterSensitiveLog = (obj: VpnGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayResult {
  /**
   * <p>Information about the virtual private gateway.</p>
   */
  VpnGateway?: VpnGateway;
}

export namespace CreateVpnGatewayResult {
  export const filterSensitiveLog = (obj: CreateVpnGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteCarrierGatewayRequest {
  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteCarrierGatewayRequest {
  export const filterSensitiveLog = (obj: DeleteCarrierGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

export namespace DeleteCarrierGatewayResult {
  export const filterSensitiveLog = (obj: DeleteCarrierGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteClientVpnEndpointRequest {
  export const filterSensitiveLog = (obj: DeleteClientVpnEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnEndpointResult {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;
}

export namespace DeleteClientVpnEndpointResult {
  export const filterSensitiveLog = (obj: DeleteClientVpnEndpointResult): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which the route is to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target subnet used by the route.</p>
   */
  TargetVpcSubnetId?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route to be deleted.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteClientVpnRouteRequest {
  export const filterSensitiveLog = (obj: DeleteClientVpnRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

export namespace DeleteClientVpnRouteResult {
  export const filterSensitiveLog = (obj: DeleteClientVpnRouteResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteCustomerGateway.</p>
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteCustomerGatewayRequest {
  export const filterSensitiveLog = (obj: DeleteCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set.</p>
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteDhcpOptionsRequest {
  export const filterSensitiveLog = (obj: DeleteDhcpOptionsRequest): any => ({
    ...obj,
  });
}

export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId: string | undefined;
}

export namespace DeleteEgressOnlyInternetGatewayRequest {
  export const filterSensitiveLog = (obj: DeleteEgressOnlyInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnCode?: boolean;
}

export namespace DeleteEgressOnlyInternetGatewayResult {
  export const filterSensitiveLog = (obj: DeleteEgressOnlyInternetGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   */
  FleetIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate the instances when the EC2 Fleet is deleted. The default is to
   *          terminate the instances.</p>
   *          <p>To let the instances continue to run after the EC2 Fleet is deleted, specify
   *             <code>NoTerminateInstances</code>. Supported only for fleets of type
   *             <code>maintain</code> and <code>request</code>.</p>
   *          <p>For <code>instant</code> fleets, you cannot specify <code>NoTerminateInstances</code>. A
   *          deleted <code>instant</code> fleet with running instances is not supported.</p>
   */
  TerminateInstances: boolean | undefined;
}

export namespace DeleteFleetsRequest {
  export const filterSensitiveLog = (obj: DeleteFleetsRequest): any => ({
    ...obj,
  });
}

export enum FleetStateCode {
  ACTIVE = "active",
  DELETED = "deleted",
  DELETED_RUNNING = "deleted_running",
  DELETED_TERMINATING_INSTANCES = "deleted_terminating",
  FAILED = "failed",
  MODIFYING = "modifying",
  SUBMITTED = "submitted",
}

/**
 * <p>Describes an EC2 Fleet that was successfully deleted.</p>
 */
export interface DeleteFleetSuccessItem {
  /**
   * <p>The current state of the EC2 Fleet.</p>
   */
  CurrentFleetState?: FleetStateCode | string;

  /**
   * <p>The previous state of the EC2 Fleet.</p>
   */
  PreviousFleetState?: FleetStateCode | string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DeleteFleetSuccessItem {
  export const filterSensitiveLog = (obj: DeleteFleetSuccessItem): any => ({
    ...obj,
  });
}

export enum DeleteFleetErrorCode {
  FLEET_ID_DOES_NOT_EXIST = "fleetIdDoesNotExist",
  FLEET_ID_MALFORMED = "fleetIdMalformed",
  FLEET_NOT_IN_DELETABLE_STATE = "fleetNotInDeletableState",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes an EC2 Fleet error.</p>
 */
export interface DeleteFleetError {
  /**
   * <p>The error code.</p>
   */
  Code?: DeleteFleetErrorCode | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

export namespace DeleteFleetError {
  export const filterSensitiveLog = (obj: DeleteFleetError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet that was not successfully deleted.</p>
 */
export interface DeleteFleetErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: DeleteFleetError;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DeleteFleetErrorItem {
  export const filterSensitiveLog = (obj: DeleteFleetErrorItem): any => ({
    ...obj,
  });
}

export interface DeleteFleetsResult {
  /**
   * <p>Information about the EC2 Fleets that are successfully deleted.</p>
   */
  SuccessfulFleetDeletions?: DeleteFleetSuccessItem[];

  /**
   * <p>Information about the EC2 Fleets that are not successfully deleted.</p>
   */
  UnsuccessfulFleetDeletions?: DeleteFleetErrorItem[];
}

export namespace DeleteFleetsResult {
  export const filterSensitiveLog = (obj: DeleteFleetsResult): any => ({
    ...obj,
  });
}

export interface DeleteFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more flow log IDs.</p>
   *         <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds: string[] | undefined;
}

export namespace DeleteFlowLogsRequest {
  export const filterSensitiveLog = (obj: DeleteFlowLogsRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowLogsResult {
  /**
   * <p>Information about the flow logs that could not be deleted successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteFlowLogsResult {
  export const filterSensitiveLog = (obj: DeleteFlowLogsResult): any => ({
    ...obj,
  });
}

export interface DeleteFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;
}

export namespace DeleteFpgaImageRequest {
  export const filterSensitiveLog = (obj: DeleteFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteFpgaImageResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace DeleteFpgaImageResult {
  export const filterSensitiveLog = (obj: DeleteFpgaImageResult): any => ({
    ...obj,
  });
}

export interface DeleteInternetGatewayRequest {
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
}

export namespace DeleteInternetGatewayRequest {
  export const filterSensitiveLog = (obj: DeleteInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteKeyPairRequest {
  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteKeyPairRequest {
  export const filterSensitiveLog = (obj: DeleteKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;
}

export namespace DeleteLaunchTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export namespace DeleteLaunchTemplateResult {
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateResult): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version numbers of one or more launch template versions to delete.</p>
   */
  Versions: string[] | undefined;
}

export namespace DeleteLaunchTemplateVersionsRequest {
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version that was successfully deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;
}

export namespace DeleteLaunchTemplateVersionsResponseSuccessItem {
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResponseSuccessItem): any => ({
    ...obj,
  });
}

export enum LaunchTemplateErrorCode {
  LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST = "launchTemplateIdDoesNotExist",
  LAUNCH_TEMPLATE_ID_MALFORMED = "launchTemplateIdMalformed",
  LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST = "launchTemplateNameDoesNotExist",
  LAUNCH_TEMPLATE_NAME_MALFORMED = "launchTemplateNameMalformed",
  LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST = "launchTemplateVersionDoesNotExist",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes the error that's returned when you cannot delete a launch template
 *             version.</p>
 */
export interface ResponseError {
  /**
   * <p>The error code.</p>
   */
  Code?: LaunchTemplateErrorCode | string;

  /**
   * <p>The error message, if applicable.</p>
   */
  Message?: string;
}

export namespace ResponseError {
  export const filterSensitiveLog = (obj: ResponseError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version that could not be deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;

  /**
   * <p>Information about the error.</p>
   */
  ResponseError?: ResponseError;
}

export namespace DeleteLaunchTemplateVersionsResponseErrorItem {
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResponseErrorItem): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions that were successfully
   *             deleted.</p>
   */
  SuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];

  /**
   * <p>Information about the launch template versions that could not be deleted.</p>
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];
}

export namespace DeleteLaunchTemplateVersionsResult {
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResult): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteLocalGatewayRouteRequest {
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export namespace DeleteLocalGatewayRouteResult {
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteLocalGatewayRouteTableVpcAssociationRequest {
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteTableVpcAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export namespace DeleteLocalGatewayRouteTableVpcAssociationResult {
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteTableVpcAssociationResult): any => ({
    ...obj,
  });
}

export interface DeleteManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;
}

export namespace DeleteManagedPrefixListRequest {
  export const filterSensitiveLog = (obj: DeleteManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export interface DeleteManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace DeleteManagedPrefixListResult {
  export const filterSensitiveLog = (obj: DeleteManagedPrefixListResult): any => ({
    ...obj,
  });
}

export interface DeleteNatGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId: string | undefined;
}

export namespace DeleteNatGatewayRequest {
  export const filterSensitiveLog = (obj: DeleteNatGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteNatGatewayResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;
}

export namespace DeleteNatGatewayResult {
  export const filterSensitiveLog = (obj: DeleteNatGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;
}

export namespace DeleteNetworkAclRequest {
  export const filterSensitiveLog = (obj: DeleteNetworkAclRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the rule is an egress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number of the entry to delete.</p>
   */
  RuleNumber: number | undefined;
}

export namespace DeleteNetworkAclEntryRequest {
  export const filterSensitiveLog = (obj: DeleteNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAnalysisRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId: string | undefined;
}

export namespace DeleteNetworkInsightsAnalysisRequest {
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAnalysisRequest): any => ({
    ...obj,
  });
}
