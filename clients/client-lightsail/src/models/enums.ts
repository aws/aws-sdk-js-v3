// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDirection = {
  inbound: "inbound",
  outbound: "outbound",
} as const;
/**
 * @public
 */
export type AccessDirection = (typeof AccessDirection)[keyof typeof AccessDirection];

/**
 * @public
 * @enum
 */
export const StatusType = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * @enum
 */
export const AccessType = {
  Private: "private",
  Public: "public",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const BPAStatusMessage = {
  DEFAULTED_FOR_SLR_MISSING: "DEFAULTED_FOR_SLR_MISSING",
  DEFAULTED_FOR_SLR_MISSING_ON_HOLD: "DEFAULTED_FOR_SLR_MISSING_ON_HOLD",
  SYNC_ON_HOLD: "SYNC_ON_HOLD",
  Unknown: "Unknown",
} as const;
/**
 * @public
 */
export type BPAStatusMessage = (typeof BPAStatusMessage)[keyof typeof BPAStatusMessage];

/**
 * @public
 * @enum
 */
export const AccountLevelBpaSyncStatus = {
  Defaulted: "Defaulted",
  Failed: "Failed",
  InSync: "InSync",
  NeverSynced: "NeverSynced",
} as const;
/**
 * @public
 */
export type AccountLevelBpaSyncStatus = (typeof AccountLevelBpaSyncStatus)[keyof typeof AccountLevelBpaSyncStatus];

/**
 * @public
 * @enum
 */
export const AddOnType = {
  AutoSnapshot: "AutoSnapshot",
  StopInstanceOnIdle: "StopInstanceOnIdle",
} as const;
/**
 * @public
 */
export type AddOnType = (typeof AddOnType)[keyof typeof AddOnType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const ContactProtocol = {
  Email: "Email",
  SMS: "SMS",
} as const;
/**
 * @public
 */
export type ContactProtocol = (typeof ContactProtocol)[keyof typeof ContactProtocol];

/**
 * @public
 * @enum
 */
export const RegionName = {
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTHEAST_3: "ap-southeast-3",
  AP_SOUTH_1: "ap-south-1",
  CA_CENTRAL_1: "ca-central-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_NORTH_1: "eu-north-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  EU_WEST_3: "eu-west-3",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_1: "us-west-1",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type RegionName = (typeof RegionName)[keyof typeof RegionName];

/**
 * @public
 * @enum
 */
export const MetricName = {
  BurstCapacityPercentage: "BurstCapacityPercentage",
  BurstCapacityTime: "BurstCapacityTime",
  CPUUtilization: "CPUUtilization",
  ClientTLSNegotiationErrorCount: "ClientTLSNegotiationErrorCount",
  DatabaseConnections: "DatabaseConnections",
  DiskQueueDepth: "DiskQueueDepth",
  FreeStorageSpace: "FreeStorageSpace",
  HTTPCode_Instance_2XX_Count: "HTTPCode_Instance_2XX_Count",
  HTTPCode_Instance_3XX_Count: "HTTPCode_Instance_3XX_Count",
  HTTPCode_Instance_4XX_Count: "HTTPCode_Instance_4XX_Count",
  HTTPCode_Instance_5XX_Count: "HTTPCode_Instance_5XX_Count",
  HTTPCode_LB_4XX_Count: "HTTPCode_LB_4XX_Count",
  HTTPCode_LB_5XX_Count: "HTTPCode_LB_5XX_Count",
  HealthyHostCount: "HealthyHostCount",
  InstanceResponseTime: "InstanceResponseTime",
  NetworkIn: "NetworkIn",
  NetworkOut: "NetworkOut",
  NetworkReceiveThroughput: "NetworkReceiveThroughput",
  NetworkTransmitThroughput: "NetworkTransmitThroughput",
  RejectedConnectionCount: "RejectedConnectionCount",
  RequestCount: "RequestCount",
  StatusCheckFailed: "StatusCheckFailed",
  StatusCheckFailed_Instance: "StatusCheckFailed_Instance",
  StatusCheckFailed_System: "StatusCheckFailed_System",
  UnhealthyHostCount: "UnhealthyHostCount",
} as const;
/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  Alarm: "Alarm",
  Bucket: "Bucket",
  Certificate: "Certificate",
  CloudFormationStackRecord: "CloudFormationStackRecord",
  ContactMethod: "ContactMethod",
  ContainerService: "ContainerService",
  Disk: "Disk",
  DiskSnapshot: "DiskSnapshot",
  Distribution: "Distribution",
  Domain: "Domain",
  ExportSnapshotRecord: "ExportSnapshotRecord",
  Instance: "Instance",
  InstanceSnapshot: "InstanceSnapshot",
  KeyPair: "KeyPair",
  LoadBalancer: "LoadBalancer",
  LoadBalancerTlsCertificate: "LoadBalancerTlsCertificate",
  PeeredVpc: "PeeredVpc",
  RelationalDatabase: "RelationalDatabase",
  RelationalDatabaseSnapshot: "RelationalDatabaseSnapshot",
  StaticIp: "StaticIp",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const AlarmState = {
  ALARM: "ALARM",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;
/**
 * @public
 */
export type AlarmState = (typeof AlarmState)[keyof typeof AlarmState];

/**
 * @public
 * @enum
 */
export const MetricStatistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;
/**
 * @public
 */
export type MetricStatistic = (typeof MetricStatistic)[keyof typeof MetricStatistic];

/**
 * @public
 * @enum
 */
export const TreatMissingData = {
  Breaching: "breaching",
  Ignore: "ignore",
  Missing: "missing",
  NotBreaching: "notBreaching",
} as const;
/**
 * @public
 */
export type TreatMissingData = (typeof TreatMissingData)[keyof typeof TreatMissingData];

/**
 * @public
 * @enum
 */
export const MetricUnit = {
  Bits: "Bits",
  BitsSecond: "Bits/Second",
  Bytes: "Bytes",
  BytesSecond: "Bytes/Second",
  Count: "Count",
  CountSecond: "Count/Second",
  Gigabits: "Gigabits",
  GigabitsSecond: "Gigabits/Second",
  Gigabytes: "Gigabytes",
  GigabytesSecond: "Gigabytes/Second",
  Kilobits: "Kilobits",
  KilobitsSecond: "Kilobits/Second",
  Kilobytes: "Kilobytes",
  KilobytesSecond: "Kilobytes/Second",
  Megabits: "Megabits",
  MegabitsSecond: "Megabits/Second",
  Megabytes: "Megabytes",
  MegabytesSecond: "Megabytes/Second",
  Microseconds: "Microseconds",
  Milliseconds: "Milliseconds",
  None: "None",
  Percent: "Percent",
  Seconds: "Seconds",
  Terabits: "Terabits",
  TerabitsSecond: "Terabits/Second",
  Terabytes: "Terabytes",
  TerabytesSecond: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type MetricUnit = (typeof MetricUnit)[keyof typeof MetricUnit];

/**
 * @public
 * @enum
 */
export const OperationType = {
  AllocateStaticIp: "AllocateStaticIp",
  AttachCertificateToDistribution: "AttachCertificateToDistribution",
  AttachDisk: "AttachDisk",
  AttachInstancesToLoadBalancer: "AttachInstancesToLoadBalancer",
  AttachLoadBalancerTlsCertificate: "AttachLoadBalancerTlsCertificate",
  AttachStaticIp: "AttachStaticIp",
  CloseInstancePublicPorts: "CloseInstancePublicPorts",
  CreateBucket: "CreateBucket",
  CreateBucketAccessKey: "CreateBucketAccessKey",
  CreateCertificate: "CreateCertificate",
  CreateContactMethod: "CreateContactMethod",
  CreateContainerService: "CreateContainerService",
  CreateContainerServiceDeployment: "CreateContainerServiceDeployment",
  CreateContainerServiceRegistryLogin: "CreateContainerServiceRegistryLogin",
  CreateDisk: "CreateDisk",
  CreateDiskFromSnapshot: "CreateDiskFromSnapshot",
  CreateDiskSnapshot: "CreateDiskSnapshot",
  CreateDistribution: "CreateDistribution",
  CreateDomain: "CreateDomain",
  CreateInstance: "CreateInstance",
  CreateInstanceSnapshot: "CreateInstanceSnapshot",
  CreateInstancesFromSnapshot: "CreateInstancesFromSnapshot",
  CreateLoadBalancer: "CreateLoadBalancer",
  CreateLoadBalancerTlsCertificate: "CreateLoadBalancerTlsCertificate",
  CreateRelationalDatabase: "CreateRelationalDatabase",
  CreateRelationalDatabaseFromSnapshot: "CreateRelationalDatabaseFromSnapshot",
  CreateRelationalDatabaseSnapshot: "CreateRelationalDatabaseSnapshot",
  DeleteAlarm: "DeleteAlarm",
  DeleteBucket: "DeleteBucket",
  DeleteBucketAccessKey: "DeleteBucketAccessKey",
  DeleteCertificate: "DeleteCertificate",
  DeleteContactMethod: "DeleteContactMethod",
  DeleteContainerImage: "DeleteContainerImage",
  DeleteContainerService: "DeleteContainerService",
  DeleteDisk: "DeleteDisk",
  DeleteDiskSnapshot: "DeleteDiskSnapshot",
  DeleteDistribution: "DeleteDistribution",
  DeleteDomain: "DeleteDomain",
  DeleteDomainEntry: "DeleteDomainEntry",
  DeleteInstance: "DeleteInstance",
  DeleteInstanceSnapshot: "DeleteInstanceSnapshot",
  DeleteKnownHostKeys: "DeleteKnownHostKeys",
  DeleteLoadBalancer: "DeleteLoadBalancer",
  DeleteLoadBalancerTlsCertificate: "DeleteLoadBalancerTlsCertificate",
  DeleteRelationalDatabase: "DeleteRelationalDatabase",
  DeleteRelationalDatabaseSnapshot: "DeleteRelationalDatabaseSnapshot",
  DetachCertificateFromDistribution: "DetachCertificateFromDistribution",
  DetachDisk: "DetachDisk",
  DetachInstancesFromLoadBalancer: "DetachInstancesFromLoadBalancer",
  DetachStaticIp: "DetachStaticIp",
  DisableAddOn: "DisableAddOn",
  EnableAddOn: "EnableAddOn",
  GetAlarms: "GetAlarms",
  GetContactMethods: "GetContactMethods",
  OpenInstancePublicPorts: "OpenInstancePublicPorts",
  PutAlarm: "PutAlarm",
  PutInstancePublicPorts: "PutInstancePublicPorts",
  RebootInstance: "RebootInstance",
  RebootRelationalDatabase: "RebootRelationalDatabase",
  RegisterContainerImage: "RegisterContainerImage",
  ReleaseStaticIp: "ReleaseStaticIp",
  ResetDistributionCache: "ResetDistributionCache",
  SendContactMethodVerification: "SendContactMethodVerification",
  SetIpAddressType: "SetIpAddressType",
  SetResourceAccessForBucket: "SetResourceAccessForBucket",
  SetupInstanceHttps: "SetupInstanceHttps",
  StartGUISession: "StartGUISession",
  StartInstance: "StartInstance",
  StartRelationalDatabase: "StartRelationalDatabase",
  StopGUISession: "StopGUISession",
  StopInstance: "StopInstance",
  StopRelationalDatabase: "StopRelationalDatabase",
  TestAlarm: "TestAlarm",
  UpdateBucket: "UpdateBucket",
  UpdateBucketBundle: "UpdateBucketBundle",
  UpdateContainerService: "UpdateContainerService",
  UpdateDistribution: "UpdateDistribution",
  UpdateDistributionBundle: "UpdateDistributionBundle",
  UpdateDomainEntry: "UpdateDomainEntry",
  UpdateInstanceMetadataOptions: "UpdateInstanceMetadataOptions",
  UpdateLoadBalancerAttribute: "UpdateLoadBalancerAttribute",
  UpdateRelationalDatabase: "UpdateRelationalDatabase",
  UpdateRelationalDatabaseParameters: "UpdateRelationalDatabaseParameters",
} as const;
/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  Completed: "Completed",
  Failed: "Failed",
  NotStarted: "NotStarted",
  Started: "Started",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const AppCategory = {
  LfR: "LfR",
} as const;
/**
 * @public
 */
export type AppCategory = (typeof AppCategory)[keyof typeof AppCategory];

/**
 * @public
 * @enum
 */
export const AutoMountStatus = {
  Failed: "Failed",
  Mounted: "Mounted",
  NotMounted: "NotMounted",
  Pending: "Pending",
} as const;
/**
 * @public
 */
export type AutoMountStatus = (typeof AutoMountStatus)[keyof typeof AutoMountStatus];

/**
 * @public
 * @enum
 */
export const AutoSnapshotStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_FOUND: "NotFound",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type AutoSnapshotStatus = (typeof AutoSnapshotStatus)[keyof typeof AutoSnapshotStatus];

/**
 * @public
 * @enum
 */
export const BehaviorEnum = {
  CacheSetting: "cache",
  DontCacheSetting: "dont-cache",
} as const;
/**
 * @public
 */
export type BehaviorEnum = (typeof BehaviorEnum)[keyof typeof BehaviorEnum];

/**
 * @public
 * @enum
 */
export const InstancePlatform = {
  LinuxUnix: "LINUX_UNIX",
  Windows: "WINDOWS",
} as const;
/**
 * @public
 */
export type InstancePlatform = (typeof InstancePlatform)[keyof typeof InstancePlatform];

/**
 * @public
 * @enum
 */
export const BlueprintType = {
  app: "app",
  os: "os",
} as const;
/**
 * @public
 */
export type BlueprintType = (typeof BlueprintType)[keyof typeof BlueprintType];

/**
 * @public
 * @enum
 */
export const BucketMetricName = {
  BucketSizeBytes: "BucketSizeBytes",
  NumberOfObjects: "NumberOfObjects",
} as const;
/**
 * @public
 */
export type BucketMetricName = (typeof BucketMetricName)[keyof typeof BucketMetricName];

/**
 * @public
 * @enum
 */
export const ForwardValues = {
  all: "all",
  allowList: "allow-list",
  none: "none",
} as const;
/**
 * @public
 */
export type ForwardValues = (typeof ForwardValues)[keyof typeof ForwardValues];

/**
 * @public
 * @enum
 */
export const HeaderEnum = {
  accept: "Accept",
  acceptCharset: "Accept-Charset",
  acceptDatetime: "Accept-Datetime",
  acceptEncoding: "Accept-Encoding",
  acceptLanguage: "Accept-Language",
  authorization: "Authorization",
  cloudFrontForwardedProto: "CloudFront-Forwarded-Proto",
  cloudFrontIsDesktopViewer: "CloudFront-Is-Desktop-Viewer",
  cloudFrontIsMobileViewer: "CloudFront-Is-Mobile-Viewer",
  cloudFrontIsSmartTVViewer: "CloudFront-Is-SmartTV-Viewer",
  cloudFrontIsTabletViewer: "CloudFront-Is-Tablet-Viewer",
  cloudFrontViewerCountry: "CloudFront-Viewer-Country",
  host: "Host",
  origin: "Origin",
  referer: "Referer",
} as const;
/**
 * @public
 */
export type HeaderEnum = (typeof HeaderEnum)[keyof typeof HeaderEnum];

/**
 * @public
 * @enum
 */
export const DnsRecordCreationStateCode = {
  Failed: "FAILED",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DnsRecordCreationStateCode = (typeof DnsRecordCreationStateCode)[keyof typeof DnsRecordCreationStateCode];

/**
 * @public
 * @enum
 */
export const CertificateDomainValidationStatus = {
  Failed: "FAILED",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
} as const;
/**
 * @public
 */
export type CertificateDomainValidationStatus =
  (typeof CertificateDomainValidationStatus)[keyof typeof CertificateDomainValidationStatus];

/**
 * @public
 * @enum
 */
export const RenewalStatus = {
  Failed: "Failed",
  PendingAutoRenewal: "PendingAutoRenewal",
  PendingValidation: "PendingValidation",
  Success: "Success",
} as const;
/**
 * @public
 */
export type RenewalStatus = (typeof RenewalStatus)[keyof typeof RenewalStatus];

/**
 * @public
 * @enum
 */
export const CertificateStatus = {
  Expired: "EXPIRED",
  Failed: "FAILED",
  Inactive: "INACTIVE",
  Issued: "ISSUED",
  PendingValidation: "PENDING_VALIDATION",
  Revoked: "REVOKED",
  ValidationTimedOut: "VALIDATION_TIMED_OUT",
} as const;
/**
 * @public
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

/**
 * @public
 * @enum
 */
export const CertificateProvider = {
  LetsEncrypt: "LetsEncrypt",
} as const;
/**
 * @public
 */
export type CertificateProvider = (typeof CertificateProvider)[keyof typeof CertificateProvider];

/**
 * @public
 * @enum
 */
export const NetworkProtocol = {
  ALL: "all",
  ICMP: "icmp",
  ICMPV6: "icmpv6",
  TCP: "tcp",
  UDP: "udp",
} as const;
/**
 * @public
 */
export type NetworkProtocol = (typeof NetworkProtocol)[keyof typeof NetworkProtocol];

/**
 * @public
 * @enum
 */
export const CloudFormationStackRecordSourceType = {
  ExportSnapshotRecord: "ExportSnapshotRecord",
} as const;
/**
 * @public
 */
export type CloudFormationStackRecordSourceType =
  (typeof CloudFormationStackRecordSourceType)[keyof typeof CloudFormationStackRecordSourceType];

/**
 * @public
 * @enum
 */
export const RecordState = {
  Failed: "Failed",
  Started: "Started",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type RecordState = (typeof RecordState)[keyof typeof RecordState];

/**
 * @public
 * @enum
 */
export const ContactMethodStatus = {
  Invalid: "Invalid",
  PendingVerification: "PendingVerification",
  Valid: "Valid",
} as const;
/**
 * @public
 */
export type ContactMethodStatus = (typeof ContactMethodStatus)[keyof typeof ContactMethodStatus];

/**
 * @public
 * @enum
 */
export const ContactMethodVerificationProtocol = {
  Email: "Email",
} as const;
/**
 * @public
 */
export type ContactMethodVerificationProtocol =
  (typeof ContactMethodVerificationProtocol)[keyof typeof ContactMethodVerificationProtocol];

/**
 * @public
 * @enum
 */
export const ContainerServiceProtocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type ContainerServiceProtocol = (typeof ContainerServiceProtocol)[keyof typeof ContainerServiceProtocol];

/**
 * @public
 * @enum
 */
export const ContainerServiceDeploymentState = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ContainerServiceDeploymentState =
  (typeof ContainerServiceDeploymentState)[keyof typeof ContainerServiceDeploymentState];

/**
 * @public
 * @enum
 */
export const ContainerServicePowerName = {
  large: "large",
  medium: "medium",
  micro: "micro",
  nano: "nano",
  small: "small",
  xlarge: "xlarge",
} as const;
/**
 * @public
 */
export type ContainerServicePowerName = (typeof ContainerServicePowerName)[keyof typeof ContainerServicePowerName];

/**
 * @public
 * @enum
 */
export const ContainerServiceState = {
  DELETING: "DELETING",
  DEPLOYING: "DEPLOYING",
  DISABLED: "DISABLED",
  PENDING: "PENDING",
  READY: "READY",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ContainerServiceState = (typeof ContainerServiceState)[keyof typeof ContainerServiceState];

/**
 * @public
 * @enum
 */
export const ContainerServiceStateDetailCode = {
  ACTIVATING_DEPLOYMENT: "ACTIVATING_DEPLOYMENT",
  CERTIFICATE_LIMIT_EXCEEDED: "CERTIFICATE_LIMIT_EXCEEDED",
  CREATING_DEPLOYMENT: "CREATING_DEPLOYMENT",
  CREATING_NETWORK_INFRASTRUCTURE: "CREATING_NETWORK_INFRASTRUCTURE",
  CREATING_SYSTEM_RESOURCES: "CREATING_SYSTEM_RESOURCES",
  EVALUATING_HEALTH_CHECK: "EVALUATING_HEALTH_CHECK",
  PROVISIONING_CERTIFICATE: "PROVISIONING_CERTIFICATE",
  PROVISIONING_SERVICE: "PROVISIONING_SERVICE",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;
/**
 * @public
 */
export type ContainerServiceStateDetailCode =
  (typeof ContainerServiceStateDetailCode)[keyof typeof ContainerServiceStateDetailCode];

/**
 * @public
 * @enum
 */
export const ContainerServiceMetricName = {
  CPUUtilization: "CPUUtilization",
  MemoryUtilization: "MemoryUtilization",
} as const;
/**
 * @public
 */
export type ContainerServiceMetricName = (typeof ContainerServiceMetricName)[keyof typeof ContainerServiceMetricName];

/**
 * @public
 * @enum
 */
export const Currency = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

/**
 * @public
 * @enum
 */
export const PricingUnit = {
  Bundles: "Bundles",
  GB: "GB",
  GBMo: "GB-Mo",
  Hrs: "Hrs",
  Queries: "Queries",
} as const;
/**
 * @public
 */
export type PricingUnit = (typeof PricingUnit)[keyof typeof PricingUnit];

/**
 * @public
 * @enum
 */
export const PortInfoSourceType = {
  Closed: "CLOSED",
  Default: "DEFAULT",
  Instance: "INSTANCE",
  None: "NONE",
} as const;
/**
 * @public
 */
export type PortInfoSourceType = (typeof PortInfoSourceType)[keyof typeof PortInfoSourceType];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUALSTACK: "dualstack",
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const OriginProtocolPolicyEnum = {
  HTTPOnly: "http-only",
  HTTPSOnly: "https-only",
} as const;
/**
 * @public
 */
export type OriginProtocolPolicyEnum = (typeof OriginProtocolPolicyEnum)[keyof typeof OriginProtocolPolicyEnum];

/**
 * @public
 * @enum
 */
export const ViewerMinimumTlsProtocolVersionEnum = {
  TLSv11_2016: "TLSv1.1_2016",
  TLSv12_2018: "TLSv1.2_2018",
  TLSv12_2019: "TLSv1.2_2019",
  TLSv12_2021: "TLSv1.2_2021",
} as const;
/**
 * @public
 */
export type ViewerMinimumTlsProtocolVersionEnum =
  (typeof ViewerMinimumTlsProtocolVersionEnum)[keyof typeof ViewerMinimumTlsProtocolVersionEnum];

/**
 * @public
 * @enum
 */
export const Status = {
  FailedInstanceCreation: "failedInstanceCreation",
  FailedStartingGUISession: "failedStartingGUISession",
  FailedStoppingGUISession: "failedStoppingGUISession",
  NotStarted: "notStarted",
  SettingUpInstance: "settingUpInstance",
  StartExpired: "startExpired",
  Started: "started",
  Starting: "starting",
  Stopped: "stopped",
  Stopping: "stopping",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const DiskState = {
  Available: "available",
  Error: "error",
  InUse: "in-use",
  Pending: "pending",
  Unknown: "unknown",
} as const;
/**
 * @public
 */
export type DiskState = (typeof DiskState)[keyof typeof DiskState];

/**
 * @public
 * @enum
 */
export const DiskSnapshotState = {
  Completed: "completed",
  Error: "error",
  Pending: "pending",
  Unknown: "unknown",
} as const;
/**
 * @public
 */
export type DiskSnapshotState = (typeof DiskSnapshotState)[keyof typeof DiskSnapshotState];

/**
 * @public
 * @enum
 */
export const DistributionMetricName = {
  BytesDownloaded: "BytesDownloaded",
  BytesUploaded: "BytesUploaded",
  Http4xxErrorRate: "Http4xxErrorRate",
  Http5xxErrorRate: "Http5xxErrorRate",
  Requests: "Requests",
  TotalErrorRate: "TotalErrorRate",
} as const;
/**
 * @public
 */
export type DistributionMetricName = (typeof DistributionMetricName)[keyof typeof DistributionMetricName];

/**
 * @public
 * @enum
 */
export const NameServersUpdateStateCode = {
  Failed: "FAILED",
  Pending: "PENDING",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type NameServersUpdateStateCode = (typeof NameServersUpdateStateCode)[keyof typeof NameServersUpdateStateCode];

/**
 * @public
 * @enum
 */
export const R53HostedZoneDeletionStateCode = {
  Failed: "FAILED",
  Pending: "PENDING",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type R53HostedZoneDeletionStateCode =
  (typeof R53HostedZoneDeletionStateCode)[keyof typeof R53HostedZoneDeletionStateCode];

/**
 * @public
 * @enum
 */
export const ExportSnapshotRecordSourceType = {
  DiskSnapshot: "DiskSnapshot",
  InstanceSnapshot: "InstanceSnapshot",
} as const;
/**
 * @public
 */
export type ExportSnapshotRecordSourceType =
  (typeof ExportSnapshotRecordSourceType)[keyof typeof ExportSnapshotRecordSourceType];

/**
 * @public
 * @enum
 */
export const HttpEndpoint = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type HttpEndpoint = (typeof HttpEndpoint)[keyof typeof HttpEndpoint];

/**
 * @public
 * @enum
 */
export const HttpProtocolIpv6 = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type HttpProtocolIpv6 = (typeof HttpProtocolIpv6)[keyof typeof HttpProtocolIpv6];

/**
 * @public
 * @enum
 */
export const HttpTokens = {
  optional: "optional",
  required: "required",
} as const;
/**
 * @public
 */
export type HttpTokens = (typeof HttpTokens)[keyof typeof HttpTokens];

/**
 * @public
 * @enum
 */
export const InstanceMetadataState = {
  applied: "applied",
  pending: "pending",
} as const;
/**
 * @public
 */
export type InstanceMetadataState = (typeof InstanceMetadataState)[keyof typeof InstanceMetadataState];

/**
 * @public
 * @enum
 */
export const PortAccessType = {
  Private: "Private",
  Public: "Public",
} as const;
/**
 * @public
 */
export type PortAccessType = (typeof PortAccessType)[keyof typeof PortAccessType];

/**
 * @public
 * @enum
 */
export const InstanceAccessProtocol = {
  rdp: "rdp",
  ssh: "ssh",
} as const;
/**
 * @public
 */
export type InstanceAccessProtocol = (typeof InstanceAccessProtocol)[keyof typeof InstanceAccessProtocol];

/**
 * @public
 * @enum
 */
export const InstanceMetricName = {
  BurstCapacityPercentage: "BurstCapacityPercentage",
  BurstCapacityTime: "BurstCapacityTime",
  CPUUtilization: "CPUUtilization",
  MetadataNoToken: "MetadataNoToken",
  NetworkIn: "NetworkIn",
  NetworkOut: "NetworkOut",
  StatusCheckFailed: "StatusCheckFailed",
  StatusCheckFailed_Instance: "StatusCheckFailed_Instance",
  StatusCheckFailed_System: "StatusCheckFailed_System",
} as const;
/**
 * @public
 */
export type InstanceMetricName = (typeof InstanceMetricName)[keyof typeof InstanceMetricName];

/**
 * @public
 * @enum
 */
export const PortState = {
  Closed: "closed",
  Open: "open",
} as const;
/**
 * @public
 */
export type PortState = (typeof PortState)[keyof typeof PortState];

/**
 * @public
 * @enum
 */
export const InstanceSnapshotState = {
  Available: "available",
  Error: "error",
  Pending: "pending",
} as const;
/**
 * @public
 */
export type InstanceSnapshotState = (typeof InstanceSnapshotState)[keyof typeof InstanceSnapshotState];

/**
 * @public
 * @enum
 */
export const LoadBalancerAttributeName = {
  HealthCheckPath: "HealthCheckPath",
  HttpsRedirectionEnabled: "HttpsRedirectionEnabled",
  SessionStickinessEnabled: "SessionStickinessEnabled",
  SessionStickiness_LB_CookieDurationSeconds: "SessionStickiness_LB_CookieDurationSeconds",
  TlsPolicyName: "TlsPolicyName",
} as const;
/**
 * @public
 */
export type LoadBalancerAttributeName = (typeof LoadBalancerAttributeName)[keyof typeof LoadBalancerAttributeName];

/**
 * @public
 * @enum
 */
export const InstanceHealthState = {
  Draining: "draining",
  Healthy: "healthy",
  Initial: "initial",
  Unavailable: "unavailable",
  Unhealthy: "unhealthy",
  Unused: "unused",
} as const;
/**
 * @public
 */
export type InstanceHealthState = (typeof InstanceHealthState)[keyof typeof InstanceHealthState];

/**
 * @public
 * @enum
 */
export const InstanceHealthReason = {
  InstanceDeregistrationInProgress: "Instance.DeregistrationInProgress",
  InstanceFailedHealthChecks: "Instance.FailedHealthChecks",
  InstanceInvalidState: "Instance.InvalidState",
  InstanceIpUnusable: "Instance.IpUnusable",
  InstanceNotInUse: "Instance.NotInUse",
  InstanceNotRegistered: "Instance.NotRegistered",
  InstanceResponseCodeMismatch: "Instance.ResponseCodeMismatch",
  InstanceTimeout: "Instance.Timeout",
  LbInitialHealthChecking: "Lb.InitialHealthChecking",
  LbInternalError: "Lb.InternalError",
  LbRegistrationInProgress: "Lb.RegistrationInProgress",
} as const;
/**
 * @public
 */
export type InstanceHealthReason = (typeof InstanceHealthReason)[keyof typeof InstanceHealthReason];

/**
 * @public
 * @enum
 */
export const LoadBalancerProtocol = {
  HTTP: "HTTP",
  HTTP_HTTPS: "HTTP_HTTPS",
} as const;
/**
 * @public
 */
export type LoadBalancerProtocol = (typeof LoadBalancerProtocol)[keyof typeof LoadBalancerProtocol];

/**
 * @public
 * @enum
 */
export const LoadBalancerState = {
  Active: "active",
  ActiveImpaired: "active_impaired",
  Failed: "failed",
  Provisioning: "provisioning",
  Unknown: "unknown",
} as const;
/**
 * @public
 */
export type LoadBalancerState = (typeof LoadBalancerState)[keyof typeof LoadBalancerState];

/**
 * @public
 * @enum
 */
export const LoadBalancerMetricName = {
  ClientTLSNegotiationErrorCount: "ClientTLSNegotiationErrorCount",
  HTTPCode_Instance_2XX_Count: "HTTPCode_Instance_2XX_Count",
  HTTPCode_Instance_3XX_Count: "HTTPCode_Instance_3XX_Count",
  HTTPCode_Instance_4XX_Count: "HTTPCode_Instance_4XX_Count",
  HTTPCode_Instance_5XX_Count: "HTTPCode_Instance_5XX_Count",
  HTTPCode_LB_4XX_Count: "HTTPCode_LB_4XX_Count",
  HTTPCode_LB_5XX_Count: "HTTPCode_LB_5XX_Count",
  HealthyHostCount: "HealthyHostCount",
  InstanceResponseTime: "InstanceResponseTime",
  RejectedConnectionCount: "RejectedConnectionCount",
  RequestCount: "RequestCount",
  UnhealthyHostCount: "UnhealthyHostCount",
} as const;
/**
 * @public
 */
export type LoadBalancerMetricName = (typeof LoadBalancerMetricName)[keyof typeof LoadBalancerMetricName];

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateDnsRecordCreationStateCode = {
  Failed: "FAILED",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LoadBalancerTlsCertificateDnsRecordCreationStateCode =
  (typeof LoadBalancerTlsCertificateDnsRecordCreationStateCode)[keyof typeof LoadBalancerTlsCertificateDnsRecordCreationStateCode];

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateDomainStatus = {
  Failed: "FAILED",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
} as const;
/**
 * @public
 */
export type LoadBalancerTlsCertificateDomainStatus =
  (typeof LoadBalancerTlsCertificateDomainStatus)[keyof typeof LoadBalancerTlsCertificateDomainStatus];

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateFailureReason = {
  AdditionalVerificationRequired: "ADDITIONAL_VERIFICATION_REQUIRED",
  DomainNotAllowed: "DOMAIN_NOT_ALLOWED",
  InvalidPublicDomain: "INVALID_PUBLIC_DOMAIN",
  NoAvailableContacts: "NO_AVAILABLE_CONTACTS",
  Other: "OTHER",
} as const;
/**
 * @public
 */
export type LoadBalancerTlsCertificateFailureReason =
  (typeof LoadBalancerTlsCertificateFailureReason)[keyof typeof LoadBalancerTlsCertificateFailureReason];

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateRenewalStatus = {
  Failed: "FAILED",
  PendingAutoRenewal: "PENDING_AUTO_RENEWAL",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
} as const;
/**
 * @public
 */
export type LoadBalancerTlsCertificateRenewalStatus =
  (typeof LoadBalancerTlsCertificateRenewalStatus)[keyof typeof LoadBalancerTlsCertificateRenewalStatus];

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateRevocationReason = {
  AACompromise: "A_A_COMPROMISE",
  AffiliationChanged: "AFFILIATION_CHANGED",
  CaCompromise: "CA_COMPROMISE",
  CertificateHold: "CERTIFICATE_HOLD",
  CessationOfOperation: "CESSATION_OF_OPERATION",
  KeyCompromise: "KEY_COMPROMISE",
  PrivilegeWithdrawn: "PRIVILEGE_WITHDRAWN",
  RemoveFromCrl: "REMOVE_FROM_CRL",
  Superceded: "SUPERCEDED",
  Unspecified: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type LoadBalancerTlsCertificateRevocationReason =
  (typeof LoadBalancerTlsCertificateRevocationReason)[keyof typeof LoadBalancerTlsCertificateRevocationReason];

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateStatus = {
  Expired: "EXPIRED",
  Failed: "FAILED",
  Inactive: "INACTIVE",
  Issued: "ISSUED",
  PendingValidation: "PENDING_VALIDATION",
  Revoked: "REVOKED",
  Unknown: "UNKNOWN",
  ValidationTimedOut: "VALIDATION_TIMED_OUT",
} as const;
/**
 * @public
 */
export type LoadBalancerTlsCertificateStatus =
  (typeof LoadBalancerTlsCertificateStatus)[keyof typeof LoadBalancerTlsCertificateStatus];

/**
 * @public
 * @enum
 */
export const RelationalDatabaseEngine = {
  MYSQL: "mysql",
} as const;
/**
 * @public
 */
export type RelationalDatabaseEngine = (typeof RelationalDatabaseEngine)[keyof typeof RelationalDatabaseEngine];

/**
 * @public
 * @enum
 */
export const RelationalDatabasePasswordVersion = {
  CURRENT: "CURRENT",
  PENDING: "PENDING",
  PREVIOUS: "PREVIOUS",
} as const;
/**
 * @public
 */
export type RelationalDatabasePasswordVersion =
  (typeof RelationalDatabasePasswordVersion)[keyof typeof RelationalDatabasePasswordVersion];

/**
 * @public
 * @enum
 */
export const RelationalDatabaseMetricName = {
  CPUUtilization: "CPUUtilization",
  DatabaseConnections: "DatabaseConnections",
  DiskQueueDepth: "DiskQueueDepth",
  FreeStorageSpace: "FreeStorageSpace",
  NetworkReceiveThroughput: "NetworkReceiveThroughput",
  NetworkTransmitThroughput: "NetworkTransmitThroughput",
} as const;
/**
 * @public
 */
export type RelationalDatabaseMetricName =
  (typeof RelationalDatabaseMetricName)[keyof typeof RelationalDatabaseMetricName];

/**
 * @public
 * @enum
 */
export const SetupStatus = {
  Failed: "failed",
  InProgress: "inProgress",
  Succeeded: "succeeded",
} as const;
/**
 * @public
 */
export type SetupStatus = (typeof SetupStatus)[keyof typeof SetupStatus];

/**
 * @public
 * @enum
 */
export const ResourceBucketAccess = {
  Allow: "allow",
  Deny: "deny",
} as const;
/**
 * @public
 */
export type ResourceBucketAccess = (typeof ResourceBucketAccess)[keyof typeof ResourceBucketAccess];
