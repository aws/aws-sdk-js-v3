// smithy-typescript generated code
export enum LaunchTemplateErrorCode {
  LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST = "launchTemplateIdDoesNotExist",
  LAUNCH_TEMPLATE_ID_MALFORMED = "launchTemplateIdMalformed",
  LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST = "launchTemplateNameDoesNotExist",
  LAUNCH_TEMPLATE_NAME_MALFORMED = "launchTemplateNameMalformed",
  LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST = "launchTemplateVersionDoesNotExist",
  UNEXPECTED_ERROR = "unexpectedError",
}

export enum DeleteQueuedReservedInstancesErrorCode {
  RESERVED_INSTANCES_ID_INVALID = "reserved-instances-id-invalid",
  RESERVED_INSTANCES_NOT_IN_QUEUED_STATE = "reserved-instances-not-in-queued-state",
  UNEXPECTED_ERROR = "unexpected-error",
}

export enum IpamPoolCidrFailureCode {
  cidr_not_available = "cidr-not-available",
}

export enum IpamPoolCidrState {
  deprovisioned = "deprovisioned",
  failed_deprovision = "failed-deprovision",
  failed_import = "failed-import",
  failed_provision = "failed-provision",
  pending_deprovision = "pending-deprovision",
  pending_import = "pending-import",
  pending_provision = "pending-provision",
  provisioned = "provisioned",
}

export type AvailabilityZoneOptInStatus = "not-opted-in" | "opt-in-not-required" | "opted-in";

export type AvailabilityZoneState = "available" | "impaired" | "information" | "unavailable";

export type ClientVpnConnectionStatusCode = "active" | "failed-to-terminate" | "terminated" | "terminating";

export type AssociatedNetworkType = "vpc";

export type ClientVpnEndpointAttributeStatusCode = "applied" | "applying";

export type VpnProtocol = "openvpn";

export type ConversionTaskState = "active" | "cancelled" | "cancelling" | "completed";

export enum ElasticGpuStatus {
  Impaired = "IMPAIRED",
  Ok = "OK",
}

export enum ElasticGpuState {
  Attached = "ATTACHED",
}

export enum FastLaunchResourceType {
  SNAPSHOT = "snapshot",
}

export enum FastLaunchStateCode {
  disabling = "disabling",
  disabling_failed = "disabling-failed",
  enabled = "enabled",
  enabled_failed = "enabled-failed",
  enabling = "enabling",
  enabling_failed = "enabling-failed",
}

export type FastSnapshotRestoreStateCode = "disabled" | "disabling" | "enabled" | "enabling" | "optimizing";

export enum FleetEventType {
  FLEET_CHANGE = "fleet-change",
  INSTANCE_CHANGE = "instance-change",
  SERVICE_ERROR = "service-error",
}

export enum FleetActivityStatus {
  ERROR = "error",
  FULFILLED = "fulfilled",
  PENDING_FULFILLMENT = "pending_fulfillment",
  PENDING_TERMINATION = "pending_termination",
}

export type FpgaImageAttributeName = "description" | "loadPermission" | "name" | "productCodes";

export type PermissionGroup = "all";

export type ProductCodeValues = "devpay" | "marketplace";

export type FpgaImageStateCode = "available" | "failed" | "pending" | "unavailable";

export enum PaymentOption {
  ALL_UPFRONT = "AllUpfront",
  NO_UPFRONT = "NoUpfront",
  PARTIAL_UPFRONT = "PartialUpfront",
}

export enum ReservationState {
  ACTIVE = "active",
  PAYMENT_FAILED = "payment-failed",
  PAYMENT_PENDING = "payment-pending",
  RETIRED = "retired",
}

export type ImageAttributeName =
  | "blockDeviceMapping"
  | "bootMode"
  | "description"
  | "kernel"
  | "lastLaunchedTime"
  | "launchPermission"
  | "productCodes"
  | "ramdisk"
  | "sriovNetSupport"
  | "tpmSupport"
  | "uefiData";

export type ArchitectureValues = "arm64" | "i386" | "x86_64" | "x86_64_mac";

export type BootModeValues = "legacy-bios" | "uefi";

export type HypervisorType = "ovm" | "xen";

export type ImageTypeValues = "kernel" | "machine" | "ramdisk";

export type DeviceType = "ebs" | "instance-store";

export type ImageState = "available" | "deregistered" | "error" | "failed" | "invalid" | "pending" | "transient";

export enum TpmSupportValues {
  v2_0 = "v2.0",
}

export type InstanceAttributeName =
  | "blockDeviceMapping"
  | "disableApiStop"
  | "disableApiTermination"
  | "ebsOptimized"
  | "enaSupport"
  | "enclaveOptions"
  | "groupSet"
  | "instanceInitiatedShutdownBehavior"
  | "instanceType"
  | "kernel"
  | "productCodes"
  | "ramdisk"
  | "rootDeviceName"
  | "sourceDestCheck"
  | "sriovNetSupport"
  | "userData";

export type InstanceLifecycleType = "scheduled" | "spot";

export enum InstanceAutoRecoveryState {
  default = "default",
  disabled = "disabled",
}

export type InstanceMetadataEndpointState = "disabled" | "enabled";

export enum InstanceMetadataProtocolState {
  disabled = "disabled",
  enabled = "enabled",
}

export enum HttpTokensState {
  optional = "optional",
  required = "required",
}

export enum InstanceMetadataTagsState {
  disabled = "disabled",
  enabled = "enabled",
}

export type InstanceMetadataOptionsState = "applied" | "pending";

export type MonitoringState = "disabled" | "disabling" | "enabled" | "pending";

export type InstanceStateName = "pending" | "running" | "shutting-down" | "stopped" | "stopping" | "terminated";

export type EventCode =
  | "instance-reboot"
  | "instance-retirement"
  | "instance-stop"
  | "system-maintenance"
  | "system-reboot";

export type StatusName = "reachability";

export type StatusType = "failed" | "initializing" | "insufficient-data" | "passed";

export type SummaryStatus = "impaired" | "initializing" | "insufficient-data" | "not-applicable" | "ok";

export type LocationType = "availability-zone" | "availability-zone-id" | "region";

export type EbsOptimizedSupport = "default" | "supported" | "unsupported";

export type EbsEncryptionSupport = "supported" | "unsupported";

export enum EbsNvmeSupport {
  REQUIRED = "required",
  SUPPORTED = "supported",
  UNSUPPORTED = "unsupported",
}

export enum InstanceTypeHypervisor {
  NITRO = "nitro",
  XEN = "xen",
}

export type DiskType = "hdd" | "ssd";

export enum InstanceStorageEncryptionSupport {
  required = "required",
  unsupported = "unsupported",
}

export enum EphemeralNvmeSupport {
  REQUIRED = "required",
  SUPPORTED = "supported",
  UNSUPPORTED = "unsupported",
}

export type EnaSupport = "required" | "supported" | "unsupported";

export type MoveStatus = "movingToVpc" | "restoringToClassic";

export enum FindingsFound {
  false = "false",
  true = "true",
  unknown = "unknown",
}

export type AnalysisStatus = "failed" | "running" | "succeeded";

export type NetworkInterfaceAttribute = "attachment" | "description" | "groupSet" | "sourceDestCheck";

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

export type RIProductDescription = "Linux/UNIX" | "Linux/UNIX (Amazon VPC)" | "Windows" | "Windows (Amazon VPC)";

export type RecurringChargeFrequency = "Hourly";

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

export type SnapshotAttributeName = "createVolumePermission" | "productCodes";

export enum TieringOperationStatus {
  archival_completed = "archival-completed",
  archival_failed = "archival-failed",
  archival_in_progress = "archival-in-progress",
  permanent_restore_completed = "permanent-restore-completed",
  permanent_restore_failed = "permanent-restore-failed",
  permanent_restore_in_progress = "permanent-restore-in-progress",
  temporary_restore_completed = "temporary-restore-completed",
  temporary_restore_failed = "temporary-restore-failed",
  temporary_restore_in_progress = "temporary-restore-in-progress",
}

export enum EventType {
  BATCH_CHANGE = "fleetRequestChange",
  ERROR = "error",
  INFORMATION = "information",
  INSTANCE_CHANGE = "instanceChange",
}

export enum ExcessCapacityTerminationPolicy {
  DEFAULT = "default",
  NO_TERMINATION = "noTermination",
}

export enum OnDemandAllocationStrategy {
  LOWEST_PRICE = "lowestPrice",
  PRIORITIZED = "prioritized",
}

export enum ReplacementStrategy {
  LAUNCH = "launch",
  LAUNCH_BEFORE_TERMINATE = "launch-before-terminate",
}

export type SpotInstanceState = "active" | "cancelled" | "closed" | "failed" | "open";

export type VolumeAttributeName = "autoEnableIO" | "productCodes";

export type VolumeModificationState = "completed" | "failed" | "modifying" | "optimizing";

export type VolumeStatusName = "io-enabled" | "io-performance";

export type VolumeStatusInfoStatus = "impaired" | "insufficient-data" | "ok";

export type VpcAttributeName = "enableDnsHostnames" | "enableDnsSupport";

export type TransitGatewayPropagationState = "disabled" | "disabling" | "enabled" | "enabling";

export type ClientCertificateRevocationListStatusCode = "active" | "pending";

export type UnlimitedSupportedInstanceFamily = "t2" | "t3" | "t3a" | "t4g";

export enum PartitionLoadFrequency {
  DAILY = "daily",
  MONTHLY = "monthly",
  NONE = "none",
  WEEKLY = "weekly",
}

export enum IpamComplianceStatus {
  compliant = "compliant",
  ignored = "ignored",
  noncompliant = "noncompliant",
  unmanaged = "unmanaged",
}

export enum IpamOverlapStatus {
  ignored = "ignored",
  nonoverlapping = "nonoverlapping",
  overlapping = "overlapping",
}

export enum IpamAddressHistoryResourceType {
  eip = "eip",
  instance = "instance",
  network_interface = "network-interface",
  subnet = "subnet",
  vpc = "vpc",
}

export enum IpamResourceType {
  eip = "eip",
  ipv6_pool = "ipv6-pool",
  public_ipv4_pool = "public-ipv4-pool",
  subnet = "subnet",
  vpc = "vpc",
}

export enum IpamManagementState {
  ignored = "ignored",
  managed = "managed",
  unmanaged = "unmanaged",
}

export type ModifyAvailabilityZoneOptInStatus = "not-opted-in" | "opted-in";

export type OperationType = "add" | "remove";

export enum UnsuccessfulInstanceCreditSpecificationErrorCode {
  INCORRECT_INSTANCE_STATE = "IncorrectInstanceState",
  INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED = "InstanceCreditSpecification.NotSupported",
  INSTANCE_NOT_FOUND = "InvalidInstanceID.NotFound",
  INVALID_INSTANCE_ID = "InvalidInstanceID.Malformed",
}

export type HostTenancy = "dedicated" | "host";

export enum TargetStorageTier {
  archive = "archive",
}

export type VpcTenancy = "default";

export enum Status {
  inClassic = "InClassic",
  inVpc = "InVpc",
  moveInProgress = "MoveInProgress",
}

export type ReportStatusType = "impaired" | "ok";

export type ResetFpgaImageAttributeName = "loadPermission";

export type ResetImageAttributeName = "launchPermission";

export type MembershipType = "igmp" | "static";
