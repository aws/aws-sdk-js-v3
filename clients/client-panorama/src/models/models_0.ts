// smithy-typescript generated code
import {
  ApplicationInstanceHealthStatus,
  ApplicationInstanceStatus,
  ConnectionType,
  DesiredState,
  DeviceAggregatedStatus,
  DeviceBrand,
  DeviceConnectionStatus,
  DeviceReportedStatus,
  DeviceStatus,
  DeviceType,
  JobResourceType,
  JobType,
  ListDevicesSortBy,
  NetworkConnectionStatus,
  NodeCategory,
  NodeFromTemplateJobStatus,
  NodeInstanceStatus,
  NodeSignalValue,
  PackageImportJobStatus,
  PackageImportJobType,
  PackageVersionStatus,
  PortType,
  SortOrder,
  StatusFilter,
  TemplateType,
  UpdateProgress,
} from "./enums";

/**
 * <p>Details about a beta appliance software update.</p>
 * @public
 */
export interface AlternateSoftwareMetadata {
  /**
   * <p>The appliance software version.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>An application instance's state.</p>
 * @public
 */
export interface ReportedRuntimeContextState {
  /**
   * <p>The application's desired state.</p>
   * @public
   */
  DesiredState: DesiredState | undefined;

  /**
   * <p>The device's name.</p>
   * @public
   */
  RuntimeContextName: string | undefined;

  /**
   * <p>The application's reported status.</p>
   * @public
   */
  DeviceReportedStatus: DeviceReportedStatus | undefined;

  /**
   * <p>When the device reported the application's state.</p>
   * @public
   */
  DeviceReportedTime: Date | undefined;
}

/**
 * <p>An application instance on a device.</p>
 * @public
 */
export interface ApplicationInstance {
  /**
   * <p>The application instance's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The application instance's ID.</p>
   * @public
   */
  ApplicationInstanceId?: string | undefined;

  /**
   * <p>The device's ID.</p>
   * @public
   */
  DefaultRuntimeContextDevice?: string | undefined;

  /**
   * <p>The device's name.</p>
   * @public
   */
  DefaultRuntimeContextDeviceName?: string | undefined;

  /**
   * <p>The application instance's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The application instance's status.</p>
   * @public
   */
  Status?: ApplicationInstanceStatus | undefined;

  /**
   * <p>The application instance's health status.</p>
   * @public
   */
  HealthStatus?: ApplicationInstanceHealthStatus | undefined;

  /**
   * <p>The application instance's status description.</p>
   * @public
   */
  StatusDescription?: string | undefined;

  /**
   * <p>When the application instance was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The application instance's ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The application instance's tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The application's state.</p>
   * @public
   */
  RuntimeContextStates?: ReportedRuntimeContextState[] | undefined;
}

/**
 * <p>A conflict exception error argument.</p>
 * @public
 */
export interface ConflictExceptionErrorArgument {
  /**
   * <p>The error argument's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The error argument's value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Parameter overrides for an application instance. This is a JSON document that has a single key
 *         (<code>PayloadData</code>) where the value is an escaped string representation of the overrides document.</p>
 * @public
 */
export type ManifestOverridesPayload =
  | ManifestOverridesPayload.PayloadDataMember
  | ManifestOverridesPayload.$UnknownMember;

/**
 * @public
 */
export namespace ManifestOverridesPayload {
  /**
   * <p>The overrides document.</p>
   * @public
   */
  export interface PayloadDataMember {
    PayloadData: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PayloadData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PayloadData: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A application verion's manifest file. This is a JSON document that has a single key (<code>PayloadData</code>)
 *       where the value is an escaped string representation of the application manifest (<code>graph.json</code>). This
 *       file is located in the <code>graphs</code> folder in your application source.</p>
 * @public
 */
export type ManifestPayload = ManifestPayload.PayloadDataMember | ManifestPayload.$UnknownMember;

/**
 * @public
 */
export namespace ManifestPayload {
  /**
   * <p>The application manifest.</p>
   * @public
   */
  export interface PayloadDataMember {
    PayloadData: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PayloadData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PayloadData: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateApplicationInstanceRequest {
  /**
   * <p>A name for the application instance.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description for the application instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The application's manifest document.</p>
   * @public
   */
  ManifestPayload: ManifestPayload | undefined;

  /**
   * <p>Setting overrides for the application manifest.</p>
   * @public
   */
  ManifestOverridesPayload?: ManifestOverridesPayload | undefined;

  /**
   * <p>The ID of an application instance to replace with the new instance.</p>
   * @public
   */
  ApplicationInstanceIdToReplace?: string | undefined;

  /**
   * <p>The ARN of a runtime role for the application instance.</p>
   * @public
   */
  RuntimeRoleArn?: string | undefined;

  /**
   * <p>A device's ID.</p>
   * @public
   */
  DefaultRuntimeContextDevice: string | undefined;

  /**
   * <p>Tags for the application instance.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationInstanceResponse {
  /**
   * <p>The application instance's ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * <p>A validation exception error argument.</p>
 * @public
 */
export interface ValidationExceptionErrorArgument {
  /**
   * <p>The argument's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The argument's value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>A validation exception field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The field's message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>An over-the-air update (OTA) job configuration.</p>
 * @public
 */
export interface OTAJobConfig {
  /**
   * <p>The target version of the device software.</p>
   * @public
   */
  ImageVersion: string | undefined;

  /**
   * <p>Whether to apply the update if it is a major version change.</p>
   * @public
   */
  AllowMajorVersionUpdate?: boolean | undefined;
}

/**
 * <p>A job's configuration.</p>
 * @public
 */
export interface DeviceJobConfig {
  /**
   * <p>A configuration for an over-the-air (OTA) upgrade. Required for OTA jobs.</p>
   * @public
   */
  OTAJobConfig?: OTAJobConfig | undefined;
}

/**
 * @public
 */
export interface CreateJobForDevicesRequest {
  /**
   * <p>ID of target device.</p>
   * @public
   */
  DeviceIds: string[] | undefined;

  /**
   * <p>Configuration settings for a software update job.</p>
   * @public
   */
  DeviceJobConfig?: DeviceJobConfig | undefined;

  /**
   * <p>The type of job to run.</p>
   * @public
   */
  JobType: JobType | undefined;
}

/**
 * <p>A job for a device.</p>
 * @public
 */
export interface Job {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The target device's ID.</p>
   * @public
   */
  DeviceId?: string | undefined;
}

/**
 * @public
 */
export interface CreateJobForDevicesResponse {
  /**
   * <p>A list of jobs.</p>
   * @public
   */
  Jobs: Job[] | undefined;
}

/**
 * <p>Tags for a job.</p>
 * @public
 */
export interface JobResourceTags {
  /**
   * <p>The job's type.</p>
   * @public
   */
  ResourceType: JobResourceType | undefined;

  /**
   * <p>The job's tags.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNodeFromTemplateJobRequest {
  /**
   * <p>The type of node.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>An output package name for the node.</p>
   * @public
   */
  OutputPackageName: string | undefined;

  /**
   * <p>An output package version for the node.</p>
   * @public
   */
  OutputPackageVersion: string | undefined;

  /**
   * <p>A name for the node.</p>
   * @public
   */
  NodeName: string | undefined;

  /**
   * <p>A description for the node.</p>
   * @public
   */
  NodeDescription?: string | undefined;

  /**
   * <p>Template parameters for the node.</p>
   * @public
   */
  TemplateParameters: Record<string, string> | undefined;

  /**
   * <p>Tags for the job.</p>
   * @public
   */
  JobTags?: JobResourceTags[] | undefined;
}

/**
 * @public
 */
export interface CreateNodeFromTemplateJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface CreatePackageRequest {
  /**
   * <p>A name for the package.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>Tags for the package.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>A storage location.</p>
 * @public
 */
export interface StorageLocation {
  /**
   * <p>The location's bucket.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The location's repo prefix.</p>
   * @public
   */
  RepoPrefixLocation: string | undefined;

  /**
   * <p>The location's generated prefix.</p>
   * @public
   */
  GeneratedPrefixLocation: string | undefined;

  /**
   * <p>The location's binary prefix.</p>
   * @public
   */
  BinaryPrefixLocation: string | undefined;

  /**
   * <p>The location's manifest prefix.</p>
   * @public
   */
  ManifestPrefixLocation: string | undefined;
}

/**
 * @public
 */
export interface CreatePackageResponse {
  /**
   * <p>The package's ID.</p>
   * @public
   */
  PackageId?: string | undefined;

  /**
   * <p>The package's ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The package's storage location.</p>
   * @public
   */
  StorageLocation: StorageLocation | undefined;
}

/**
 * <p>A location in Amazon S3.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The bucket's Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>A bucket name.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>An object key.</p>
   * @public
   */
  ObjectKey: string | undefined;
}

/**
 * <p>A package version input configuration.</p>
 * @public
 */
export interface PackageVersionInputConfig {
  /**
   * <p>A location in Amazon S3.</p>
   * @public
   */
  S3Location: S3Location | undefined;
}

/**
 * <p>A configuration for a package import job.</p>
 * @public
 */
export interface PackageImportJobInputConfig {
  /**
   * <p>The package version's input configuration.</p>
   * @public
   */
  PackageVersionInputConfig?: PackageVersionInputConfig | undefined;
}

/**
 * <p>A package version output configuration.</p>
 * @public
 */
export interface PackageVersionOutputConfig {
  /**
   * <p>The output's package name.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>The output's package version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>Indicates that the version is recommended for all users.</p>
   * @public
   */
  MarkLatest?: boolean | undefined;
}

/**
 * <p>An output configuration for a package import job.</p>
 * @public
 */
export interface PackageImportJobOutputConfig {
  /**
   * <p>The package version's output configuration.</p>
   * @public
   */
  PackageVersionOutputConfig?: PackageVersionOutputConfig | undefined;
}

/**
 * @public
 */
export interface CreatePackageImportJobRequest {
  /**
   * <p>A job type for the package import job.</p>
   * @public
   */
  JobType: PackageImportJobType | undefined;

  /**
   * <p>An input config for the package import job.</p>
   * @public
   */
  InputConfig: PackageImportJobInputConfig | undefined;

  /**
   * <p>An output config for the package import job.</p>
   * @public
   */
  OutputConfig: PackageImportJobOutputConfig | undefined;

  /**
   * <p>A client token for the package import job.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>Tags for the package import job.</p>
   * @public
   */
  JobTags?: JobResourceTags[] | undefined;
}

/**
 * @public
 */
export interface CreatePackageImportJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceResponse {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePackageRequest {
  /**
   * <p>The package's ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>Delete the package even if it has artifacts stored in its access point. Deletes the package's artifacts from
   *       Amazon S3.</p>
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeletePackageResponse {}

/**
 * @public
 */
export interface DeregisterPackageVersionRequest {
  /**
   * <p>An owner account.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>A package ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>A package version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>A patch version.</p>
   * @public
   */
  PatchVersion: string | undefined;

  /**
   * <p>If the version was marked latest, the new version to maker as latest.</p>
   * @public
   */
  UpdatedLatestPatchVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterPackageVersionResponse {}

/**
 * @public
 */
export interface DescribeApplicationInstanceRequest {
  /**
   * <p>The application instance's ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationInstanceResponse {
  /**
   * <p>The application instance's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The application instance's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The device's ID.</p>
   * @public
   */
  DefaultRuntimeContextDevice?: string | undefined;

  /**
   * <p>The device's bane.</p>
   * @public
   */
  DefaultRuntimeContextDeviceName?: string | undefined;

  /**
   * <p>The ID of the application instance that this instance replaced.</p>
   * @public
   */
  ApplicationInstanceIdToReplace?: string | undefined;

  /**
   * <p>The application instance's runtime role ARN.</p>
   * @public
   */
  RuntimeRoleArn?: string | undefined;

  /**
   * <p>The application instance's status.</p>
   * @public
   */
  Status?: ApplicationInstanceStatus | undefined;

  /**
   * <p>The application instance's health status.</p>
   * @public
   */
  HealthStatus?: ApplicationInstanceHealthStatus | undefined;

  /**
   * <p>The application instance's status description.</p>
   * @public
   */
  StatusDescription?: string | undefined;

  /**
   * <p>When the application instance was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The application instance was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The application instance's ID.</p>
   * @public
   */
  ApplicationInstanceId?: string | undefined;

  /**
   * <p>The application instance's ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The application instance's tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The application instance's state.</p>
   * @public
   */
  RuntimeContextStates?: ReportedRuntimeContextState[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationInstanceDetailsRequest {
  /**
   * <p>The application instance's ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationInstanceDetailsResponse {
  /**
   * <p>The application instance's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The application instance's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The application instance's default runtime context device.</p>
   * @public
   */
  DefaultRuntimeContextDevice?: string | undefined;

  /**
   * <p>The application instance's configuration manifest.</p>
   * @public
   */
  ManifestPayload?: ManifestPayload | undefined;

  /**
   * <p>Parameter overrides for the configuration manifest.</p>
   * @public
   */
  ManifestOverridesPayload?: ManifestOverridesPayload | undefined;

  /**
   * <p>The ID of the application instance that this instance replaced.</p>
   * @public
   */
  ApplicationInstanceIdToReplace?: string | undefined;

  /**
   * <p>When the application instance was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The application instance's ID.</p>
   * @public
   */
  ApplicationInstanceId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * <p>A device's Ethernet status.</p>
 * @public
 */
export interface EthernetStatus {
  /**
   * <p>The device's IP address.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The device's connection status.</p>
   * @public
   */
  ConnectionStatus?: NetworkConnectionStatus | undefined;

  /**
   * <p>The device's physical address.</p>
   * @public
   */
  HwAddress?: string | undefined;
}

/**
 * <p>Details about an NTP server connection.</p>
 * @public
 */
export interface NtpStatus {
  /**
   * <p>The connection's status.</p>
   * @public
   */
  ConnectionStatus?: NetworkConnectionStatus | undefined;

  /**
   * <p>The IP address of the server.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The domain name of the server.</p>
   * @public
   */
  NtpServerName?: string | undefined;
}

/**
 * <p>The network status of a device.</p>
 * @public
 */
export interface NetworkStatus {
  /**
   * <p>The status of Ethernet port 0.</p>
   * @public
   */
  Ethernet0Status?: EthernetStatus | undefined;

  /**
   * <p>The status of Ethernet port 1.</p>
   * @public
   */
  Ethernet1Status?: EthernetStatus | undefined;

  /**
   * <p>Details about a network time protocol (NTP) server connection.</p>
   * @public
   */
  NtpStatus?: NtpStatus | undefined;

  /**
   * <p>When the network status changed.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * <p>Returns information about the latest device job.</p>
 * @public
 */
export interface LatestDeviceJob {
  /**
   * <p>The target version of the device software.</p>
   * @public
   */
  ImageVersion?: string | undefined;

  /**
   * <p>Status of the latest device job.</p>
   * @public
   */
  Status?: UpdateProgress | undefined;

  /**
   * <p>The job's type.</p>
   * @public
   */
  JobType?: JobType | undefined;
}

/**
 * <p>A static IP configuration.</p>
 * @public
 */
export interface StaticIpConnectionInfo {
  /**
   * <p>The connection's IP address.</p>
   * @public
   */
  IpAddress: string | undefined;

  /**
   * <p>The connection's DNS mask.</p>
   * @public
   */
  Mask: string | undefined;

  /**
   * <p>The connection's DNS address.</p>
   * @public
   */
  Dns: string[] | undefined;

  /**
   * <p>The connection's default gateway.</p>
   * @public
   */
  DefaultGateway: string | undefined;
}

/**
 * <p>A device's network configuration.</p>
 * @public
 */
export interface EthernetPayload {
  /**
   * <p>How the device gets an IP address.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>Network configuration for a static IP connection.</p>
   * @public
   */
  StaticIpConnectionInfo?: StaticIpConnectionInfo | undefined;
}

/**
 * <p>Network time protocol (NTP) server settings. Use this option to connect to local NTP servers instead of
 *         <code>pool.ntp.org</code>.</p>
 * @public
 */
export interface NtpPayload {
  /**
   * <p>NTP servers to use, in order of preference.</p>
   * @public
   */
  NtpServers: string[] | undefined;
}

/**
 * <p>The network configuration for a device.</p>
 * @public
 */
export interface NetworkPayload {
  /**
   * <p>Settings for Ethernet port 0.</p>
   * @public
   */
  Ethernet0?: EthernetPayload | undefined;

  /**
   * <p>Settings for Ethernet port 1.</p>
   * @public
   */
  Ethernet1?: EthernetPayload | undefined;

  /**
   * <p>Network time protocol (NTP) server settings.</p>
   * @public
   */
  Ntp?: NtpPayload | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The device's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The device's ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The device's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The device's type.</p>
   * @public
   */
  Type?: DeviceType | undefined;

  /**
   * <p>The device's connection status.</p>
   * @public
   */
  DeviceConnectionStatus?: DeviceConnectionStatus | undefined;

  /**
   * <p>When the device was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The device's provisioning status.</p>
   * @public
   */
  ProvisioningStatus?: DeviceStatus | undefined;

  /**
   * <p>The latest software version available for the device.</p>
   * @public
   */
  LatestSoftware?: string | undefined;

  /**
   * <p>The device's current software version.</p>
   * @public
   */
  CurrentSoftware?: string | undefined;

  /**
   * <p>The device's serial number.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The device's tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The device's networking configuration.</p>
   * @public
   */
  NetworkingConfiguration?: NetworkPayload | undefined;

  /**
   * <p>The device's networking status.</p>
   * @public
   */
  CurrentNetworkingStatus?: NetworkStatus | undefined;

  /**
   * <p>The device's lease expiration time.</p>
   * @public
   */
  LeaseExpirationTime?: Date | undefined;

  /**
   * <p>Beta software releases available for the device.</p>
   * @public
   */
  AlternateSoftwares?: AlternateSoftwareMetadata[] | undefined;

  /**
   * <p>The most recent beta software release.</p>
   * @public
   */
  LatestAlternateSoftware?: string | undefined;

  /**
   * <p>The device's maker.</p>
   * @public
   */
  Brand?: DeviceBrand | undefined;

  /**
   * <p>A device's latest job. Includes the target image version, and the job status.</p>
   * @public
   */
  LatestDeviceJob?: LatestDeviceJob | undefined;

  /**
   * <p>A device's aggregated status. Including the device's connection status, provisioning status, and lease status.</p>
   * @public
   */
  DeviceAggregatedStatus?: DeviceAggregatedStatus | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceJobRequest {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The device's ARN.</p>
   * @public
   */
  DeviceArn?: string | undefined;

  /**
   * <p>The device's name.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The device's type.</p>
   * @public
   */
  DeviceType?: DeviceType | undefined;

  /**
   * <p>For an OTA job, the target version of the device software.</p>
   * @public
   */
  ImageVersion?: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  Status?: UpdateProgress | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The job's type.</p>
   * @public
   */
  JobType?: JobType | undefined;
}

/**
 * @public
 */
export interface DescribeNodeRequest {
  /**
   * <p>The node's ID.</p>
   * @public
   */
  NodeId: string | undefined;

  /**
   * <p>The account ID of the node's owner.</p>
   * @public
   */
  OwnerAccount?: string | undefined;
}

/**
 * <p>A node input port.</p>
 * @public
 */
export interface NodeInputPort {
  /**
   * <p>The input port's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The input port's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The input port's type.</p>
   * @public
   */
  Type?: PortType | undefined;

  /**
   * <p>The input port's default value.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>The input port's max connections.</p>
   * @public
   */
  MaxConnections?: number | undefined;
}

/**
 * <p>A node output port.</p>
 * @public
 */
export interface NodeOutputPort {
  /**
   * <p>The output port's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The output port's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The output port's type.</p>
   * @public
   */
  Type?: PortType | undefined;
}

/**
 * <p>A node interface.</p>
 * @public
 */
export interface NodeInterface {
  /**
   * <p>The node interface's inputs.</p>
   * @public
   */
  Inputs: NodeInputPort[] | undefined;

  /**
   * <p>The node interface's outputs.</p>
   * @public
   */
  Outputs: NodeOutputPort[] | undefined;
}

/**
 * @public
 */
export interface DescribeNodeResponse {
  /**
   * <p>The node's ID.</p>
   * @public
   */
  NodeId: string | undefined;

  /**
   * <p>The node's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The node's category.</p>
   * @public
   */
  Category: NodeCategory | undefined;

  /**
   * <p>The account ID of the node's owner.</p>
   * @public
   */
  OwnerAccount: string | undefined;

  /**
   * <p>The node's package name.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>The node's package ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>The node's ARN.</p>
   * @public
   */
  PackageArn?: string | undefined;

  /**
   * <p>The node's package version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>The node's patch version.</p>
   * @public
   */
  PatchVersion: string | undefined;

  /**
   * <p>The node's interface.</p>
   * @public
   */
  NodeInterface: NodeInterface | undefined;

  /**
   * <p>The node's asset name.</p>
   * @public
   */
  AssetName?: string | undefined;

  /**
   * <p>The node's description.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>When the node was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>When the node was updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeNodeFromTemplateJobRequest {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeNodeFromTemplateJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  Status: NodeFromTemplateJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  StatusMessage: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The job's output package name.</p>
   * @public
   */
  OutputPackageName: string | undefined;

  /**
   * <p>The job's output package version.</p>
   * @public
   */
  OutputPackageVersion: string | undefined;

  /**
   * <p>The node's name.</p>
   * @public
   */
  NodeName: string | undefined;

  /**
   * <p>The node's description.</p>
   * @public
   */
  NodeDescription?: string | undefined;

  /**
   * <p>The job's template type.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>The job's template parameters.</p>
   * @public
   */
  TemplateParameters: Record<string, string> | undefined;

  /**
   * <p>The job's tags.</p>
   * @public
   */
  JobTags?: JobResourceTags[] | undefined;
}

/**
 * @public
 */
export interface DescribePackageRequest {
  /**
   * <p>The package's ID.</p>
   * @public
   */
  PackageId: string | undefined;
}

/**
 * @public
 */
export interface DescribePackageResponse {
  /**
   * <p>The package's ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>The package's name.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>The package's ARN.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The package's storage location.</p>
   * @public
   */
  StorageLocation: StorageLocation | undefined;

  /**
   * <p>ARNs of accounts that have read access to the package.</p>
   * @public
   */
  ReadAccessPrincipalArns?: string[] | undefined;

  /**
   * <p>ARNs of accounts that have write access to the package.</p>
   * @public
   */
  WriteAccessPrincipalArns?: string[] | undefined;

  /**
   * <p>When the package was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The package's tags.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribePackageImportJobRequest {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>The location of an output object in Amazon S3.</p>
 * @public
 */
export interface OutPutS3Location {
  /**
   * <p>The object's bucket.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The object's key.</p>
   * @public
   */
  ObjectKey: string | undefined;
}

/**
 * <p>Results of a package import job.</p>
 * @public
 */
export interface PackageImportJobOutput {
  /**
   * <p>The package's ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>The package's version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>The package's patch version.</p>
   * @public
   */
  PatchVersion: string | undefined;

  /**
   * <p>The package's output location.</p>
   * @public
   */
  OutputS3Location: OutPutS3Location | undefined;
}

/**
 * @public
 */
export interface DescribePackageImportJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The job's client token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The job's type.</p>
   * @public
   */
  JobType: PackageImportJobType | undefined;

  /**
   * <p>The job's input config.</p>
   * @public
   */
  InputConfig: PackageImportJobInputConfig | undefined;

  /**
   * <p>The job's output config.</p>
   * @public
   */
  OutputConfig: PackageImportJobOutputConfig | undefined;

  /**
   * <p>The job's output.</p>
   * @public
   */
  Output: PackageImportJobOutput | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  Status: PackageImportJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  StatusMessage: string | undefined;

  /**
   * <p>The job's tags.</p>
   * @public
   */
  JobTags?: JobResourceTags[] | undefined;
}

/**
 * @public
 */
export interface DescribePackageVersionRequest {
  /**
   * <p>The version's owner account.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>The version's ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>The version's version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>The version's patch version.</p>
   * @public
   */
  PatchVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribePackageVersionResponse {
  /**
   * <p>The account ID of the version's owner.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>The version's ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>The ARN of the package.</p>
   * @public
   */
  PackageArn?: string | undefined;

  /**
   * <p>The version's name.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>The version's version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>The version's patch version.</p>
   * @public
   */
  PatchVersion: string | undefined;

  /**
   * <p>Whether the version is the latest available.</p>
   * @public
   */
  IsLatestPatch: boolean | undefined;

  /**
   * <p>The version's status.</p>
   * @public
   */
  Status: PackageVersionStatus | undefined;

  /**
   * <p>The version's status description.</p>
   * @public
   */
  StatusDescription?: string | undefined;

  /**
   * <p>The version's registered time.</p>
   * @public
   */
  RegisteredTime?: Date | undefined;
}

/**
 * <p>A device.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The device's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>When the device was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The device's provisioning status.</p>
   * @public
   */
  ProvisioningStatus?: DeviceStatus | undefined;

  /**
   * <p>When the device was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The device's lease expiration time.</p>
   * @public
   */
  LeaseExpirationTime?: Date | undefined;

  /**
   * <p>The device's maker.</p>
   * @public
   */
  Brand?: DeviceBrand | undefined;

  /**
   * <p>A device's current software.</p>
   * @public
   */
  CurrentSoftware?: string | undefined;

  /**
   * <p>A description for the device.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The device's tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The device's type.</p>
   * @public
   */
  Type?: DeviceType | undefined;

  /**
   * <p>A device's latest job. Includes the target image version, and the update job status.</p>
   * @public
   */
  LatestDeviceJob?: LatestDeviceJob | undefined;

  /**
   * <p>A device's aggregated status. Including the device's connection status, provisioning status, and lease status.</p>
   * @public
   */
  DeviceAggregatedStatus?: DeviceAggregatedStatus | undefined;
}

/**
 * <p>A job that runs on a device.</p>
 * @public
 */
export interface DeviceJob {
  /**
   * <p>The name of the target device</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The ID of the target device.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The job's type.</p>
   * @public
   */
  JobType?: JobType | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstanceDependenciesRequest {
  /**
   * <p>The application instance's ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;

  /**
   * <p>The maximum number of application instance dependencies to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A package object.</p>
 * @public
 */
export interface PackageObject {
  /**
   * <p>The object's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The object's package version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>The object's patch version.</p>
   * @public
   */
  PatchVersion: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstanceDependenciesResponse {
  /**
   * <p>A list of package objects.</p>
   * @public
   */
  PackageObjects?: PackageObject[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstanceNodeInstancesRequest {
  /**
   * <p>The node instances' application instance ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;

  /**
   * <p>The maximum number of node instances to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A node instance.</p>
 * @public
 */
export interface NodeInstance {
  /**
   * <p>The instance's ID.</p>
   * @public
   */
  NodeInstanceId: string | undefined;

  /**
   * <p>The node's ID.</p>
   * @public
   */
  NodeId?: string | undefined;

  /**
   * <p>The instance's package name.</p>
   * @public
   */
  PackageName?: string | undefined;

  /**
   * <p>The instance's package version.</p>
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * <p>The instance's package patch version.</p>
   * @public
   */
  PackagePatchVersion?: string | undefined;

  /**
   * <p>The instance's name.</p>
   * @public
   */
  NodeName?: string | undefined;

  /**
   * <p>The instance's current status.</p>
   * @public
   */
  CurrentStatus: NodeInstanceStatus | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstanceNodeInstancesResponse {
  /**
   * <p>A list of node instances.</p>
   * @public
   */
  NodeInstances?: NodeInstance[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstancesRequest {
  /**
   * <p>The application instances' device ID.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>Only include instances with a specific status.</p>
   * @public
   */
  StatusFilter?: StatusFilter | undefined;

  /**
   * <p>The maximum number of application instances to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstancesResponse {
  /**
   * <p>A list of application instances.</p>
   * @public
   */
  ApplicationInstances?: ApplicationInstance[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of devices to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The target column to be sorted on. Default column sort is CREATED_TIME.</p>
   * @public
   */
  SortBy?: ListDevicesSortBy | undefined;

  /**
   * <p>The sorting order for the returned list. SortOrder is DESCENDING by default based on CREATED_TIME. Otherwise, SortOrder is ASCENDING.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>Filter based on device's name. Prefixes supported.</p>
   * @public
   */
  NameFilter?: string | undefined;

  /**
   * <p>Filter based on a device's status.</p>
   * @public
   */
  DeviceAggregatedStatusFilter?: DeviceAggregatedStatus | undefined;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>A list of devices.</p>
   * @public
   */
  Devices: Device[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesJobsRequest {
  /**
   * <p>Filter results by the job's target device ID.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of device jobs to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDevicesJobsResponse {
  /**
   * <p>A list of jobs.</p>
   * @public
   */
  DeviceJobs?: DeviceJob[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodeFromTemplateJobsRequest {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of node from template jobs to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A job to create a camera stream node.</p>
 * @public
 */
export interface NodeFromTemplateJob {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The job's template type.</p>
   * @public
   */
  TemplateType?: TemplateType | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  Status?: NodeFromTemplateJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The node's name.</p>
   * @public
   */
  NodeName?: string | undefined;
}

/**
 * @public
 */
export interface ListNodeFromTemplateJobsResponse {
  /**
   * <p>A list of jobs.</p>
   * @public
   */
  NodeFromTemplateJobs: NodeFromTemplateJob[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesRequest {
  /**
   * <p>Search for nodes by category.</p>
   * @public
   */
  Category?: NodeCategory | undefined;

  /**
   * <p>Search for nodes by the account ID of the nodes' owner.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>Search for nodes by name.</p>
   * @public
   */
  PackageName?: string | undefined;

  /**
   * <p>Search for nodes by version.</p>
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * <p>Search for nodes by patch version.</p>
   * @public
   */
  PatchVersion?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of nodes to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>An application node that represents a camera stream, a model, code, or output.</p>
 * @public
 */
export interface Node {
  /**
   * <p>The node's ID.</p>
   * @public
   */
  NodeId: string | undefined;

  /**
   * <p>The node's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The node's category.</p>
   * @public
   */
  Category: NodeCategory | undefined;

  /**
   * <p>The account ID of the node's owner.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>The node's package name.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>The node's package ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>The node's ARN.</p>
   * @public
   */
  PackageArn?: string | undefined;

  /**
   * <p>The node's package version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>The node's patch version.</p>
   * @public
   */
  PatchVersion: string | undefined;

  /**
   * <p>The node's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>When the node was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListNodesResponse {
  /**
   * <p>A list of nodes.</p>
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageImportJobsRequest {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of package import jobs to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A job to import a package version.</p>
 * @public
 */
export interface PackageImportJob {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The job's type.</p>
   * @public
   */
  JobType?: PackageImportJobType | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  Status?: PackageImportJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPackageImportJobsResponse {
  /**
   * <p>A list of package import jobs.</p>
   * @public
   */
  PackageImportJobs: PackageImportJob[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackagesRequest {
  /**
   * <p>The maximum number of packages to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A package summary.</p>
 * @public
 */
export interface PackageListItem {
  /**
   * <p>The package's ID.</p>
   * @public
   */
  PackageId?: string | undefined;

  /**
   * <p>The package's name.</p>
   * @public
   */
  PackageName?: string | undefined;

  /**
   * <p>The package's ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>When the package was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The package's tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPackagesResponse {
  /**
   * <p>A list of packages.</p>
   * @public
   */
  Packages?: PackageListItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>A signal to a camera node to start or stop processing video.</p>
 * @public
 */
export interface NodeSignal {
  /**
   * <p>The camera node's name, from the application manifest.</p>
   * @public
   */
  NodeInstanceId: string | undefined;

  /**
   * <p>The signal value.</p>
   * @public
   */
  Signal: NodeSignalValue | undefined;
}

/**
 * @public
 */
export interface ProvisionDeviceRequest {
  /**
   * <p>A name for the device.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the device.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Tags for the device.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A networking configuration for the device.</p>
   * @public
   */
  NetworkingConfiguration?: NetworkPayload | undefined;
}

/**
 * @public
 */
export interface ProvisionDeviceResponse {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The device's ARN.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The device's status.</p>
   * @public
   */
  Status: DeviceStatus | undefined;

  /**
   * <p>The device's configuration bundle.</p>
   * @public
   */
  Certificates?: Uint8Array | undefined;

  /**
   * <p>The device's IoT thing name.</p>
   * @public
   */
  IotThingName?: string | undefined;
}

/**
 * @public
 */
export interface RegisterPackageVersionRequest {
  /**
   * <p>An owner account.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>A package ID.</p>
   * @public
   */
  PackageId: string | undefined;

  /**
   * <p>A package version.</p>
   * @public
   */
  PackageVersion: string | undefined;

  /**
   * <p>A patch version.</p>
   * @public
   */
  PatchVersion: string | undefined;

  /**
   * <p>Whether to mark the new version as the latest version.</p>
   * @public
   */
  MarkLatest?: boolean | undefined;
}

/**
 * @public
 */
export interface RegisterPackageVersionResponse {}

/**
 * @public
 */
export interface RemoveApplicationInstanceRequest {
  /**
   * <p>An application instance ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface RemoveApplicationInstanceResponse {}

/**
 * @public
 */
export interface SignalApplicationInstanceNodeInstancesRequest {
  /**
   * <p>An application instance ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;

  /**
   * <p>A list of signals.</p>
   * @public
   */
  NodeSignals: NodeSignal[] | undefined;
}

/**
 * @public
 */
export interface SignalApplicationInstanceNodeInstancesResponse {
  /**
   * <p>An application instance ID.</p>
   * @public
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags for the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tag keys to remove.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDeviceMetadataRequest {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>A description for the device.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceMetadataResponse {
  /**
   * <p>The device's ID.</p>
   * @public
   */
  DeviceId?: string | undefined;
}
