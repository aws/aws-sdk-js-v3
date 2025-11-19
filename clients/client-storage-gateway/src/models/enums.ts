// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ActivationKeyExpired: "ActivationKeyExpired",
  ActivationKeyInvalid: "ActivationKeyInvalid",
  ActivationKeyNotFound: "ActivationKeyNotFound",
  AuthenticationFailure: "AuthenticationFailure",
  BandwidthThrottleScheduleNotFound: "BandwidthThrottleScheduleNotFound",
  Blocked: "Blocked",
  CannotExportSnapshot: "CannotExportSnapshot",
  ChapCredentialNotFound: "ChapCredentialNotFound",
  DiskAlreadyAllocated: "DiskAlreadyAllocated",
  DiskDoesNotExist: "DiskDoesNotExist",
  DiskSizeGreaterThanVolumeMaxSize: "DiskSizeGreaterThanVolumeMaxSize",
  DiskSizeLessThanVolumeSize: "DiskSizeLessThanVolumeSize",
  DiskSizeNotGigAligned: "DiskSizeNotGigAligned",
  DuplicateCertificateInfo: "DuplicateCertificateInfo",
  DuplicateSchedule: "DuplicateSchedule",
  EndpointNotFound: "EndpointNotFound",
  GatewayInternalError: "GatewayInternalError",
  GatewayNotConnected: "GatewayNotConnected",
  GatewayNotFound: "GatewayNotFound",
  GatewayProxyNetworkConnectionBusy: "GatewayProxyNetworkConnectionBusy",
  IAMNotSupported: "IAMNotSupported",
  InitiatorInvalid: "InitiatorInvalid",
  InitiatorNotFound: "InitiatorNotFound",
  InternalError: "InternalError",
  InvalidEndpoint: "InvalidEndpoint",
  InvalidGateway: "InvalidGateway",
  InvalidParameters: "InvalidParameters",
  InvalidSchedule: "InvalidSchedule",
  JoinDomainInProgress: "JoinDomainInProgress",
  LocalStorageLimitExceeded: "LocalStorageLimitExceeded",
  LunAlreadyAllocated_: "LunAlreadyAllocated ",
  LunInvalid: "LunInvalid",
  MaximumContentLengthExceeded: "MaximumContentLengthExceeded",
  MaximumTapeCartridgeCountExceeded: "MaximumTapeCartridgeCountExceeded",
  MaximumVolumeCountExceeded: "MaximumVolumeCountExceeded",
  NetworkConfigurationChanged: "NetworkConfigurationChanged",
  NoDisksAvailable: "NoDisksAvailable",
  NotImplemented: "NotImplemented",
  NotSupported: "NotSupported",
  OperationAborted: "OperationAborted",
  OutdatedGateway: "OutdatedGateway",
  ParametersNotImplemented: "ParametersNotImplemented",
  RegionInvalid: "RegionInvalid",
  RequestTimeout: "RequestTimeout",
  ServiceUnavailable: "ServiceUnavailable",
  SnapshotDeleted: "SnapshotDeleted",
  SnapshotIdInvalid: "SnapshotIdInvalid",
  SnapshotInProgress: "SnapshotInProgress",
  SnapshotNotFound: "SnapshotNotFound",
  SnapshotScheduleNotFound: "SnapshotScheduleNotFound",
  StagingAreaFull: "StagingAreaFull",
  StorageFailure: "StorageFailure",
  TapeCartridgeNotFound: "TapeCartridgeNotFound",
  TargetAlreadyExists: "TargetAlreadyExists",
  TargetInvalid: "TargetInvalid",
  TargetNotFound: "TargetNotFound",
  UnauthorizedOperation: "UnauthorizedOperation",
  VolumeAlreadyExists: "VolumeAlreadyExists",
  VolumeIdInvalid: "VolumeIdInvalid",
  VolumeInUse: "VolumeInUse",
  VolumeNotFound: "VolumeNotFound",
  VolumeNotReady: "VolumeNotReady",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const ActiveDirectoryStatus = {
  ACCESS_DENIED: "ACCESS_DENIED",
  DETACHED: "DETACHED",
  INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
  JOINED: "JOINED",
  JOINING: "JOINING",
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT: "TIMEOUT",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;
/**
 * @public
 */
export type ActiveDirectoryStatus = (typeof ActiveDirectoryStatus)[keyof typeof ActiveDirectoryStatus];

/**
 * @public
 * @enum
 */
export const AutomaticUpdatePolicy = {
  ALL_VERSIONS: "ALL_VERSIONS",
  EMERGENCY_VERSIONS_ONLY: "EMERGENCY_VERSIONS_ONLY",
} as const;
/**
 * @public
 */
export type AutomaticUpdatePolicy = (typeof AutomaticUpdatePolicy)[keyof typeof AutomaticUpdatePolicy];

/**
 * @public
 * @enum
 */
export const AvailabilityMonitorTestStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type AvailabilityMonitorTestStatus =
  (typeof AvailabilityMonitorTestStatus)[keyof typeof AvailabilityMonitorTestStatus];

/**
 * @public
 * @enum
 */
export const CacheReportFilterName = {
  UploadFailureReason: "UploadFailureReason",
  UploadState: "UploadState",
} as const;
/**
 * @public
 */
export type CacheReportFilterName = (typeof CacheReportFilterName)[keyof typeof CacheReportFilterName];

/**
 * @public
 * @enum
 */
export const CacheReportStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CacheReportStatus = (typeof CacheReportStatus)[keyof typeof CacheReportStatus];

/**
 * @public
 * @enum
 */
export const CaseSensitivity = {
  CaseSensitive: "CaseSensitive",
  ClientSpecified: "ClientSpecified",
} as const;
/**
 * @public
 */
export type CaseSensitivity = (typeof CaseSensitivity)[keyof typeof CaseSensitivity];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  DsseKms: "DsseKms",
  SseKms: "SseKms",
  SseS3: "SseS3",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const ObjectACL = {
  authenticated_read: "authenticated-read",
  aws_exec_read: "aws-exec-read",
  bucket_owner_full_control: "bucket-owner-full-control",
  bucket_owner_read: "bucket-owner-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;
/**
 * @public
 */
export type ObjectACL = (typeof ObjectACL)[keyof typeof ObjectACL];

/**
 * @public
 * @enum
 */
export const RetentionLockType = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type RetentionLockType = (typeof RetentionLockType)[keyof typeof RetentionLockType];

/**
 * @public
 * @enum
 */
export const TapeStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
} as const;
/**
 * @public
 */
export type TapeStorageClass = (typeof TapeStorageClass)[keyof typeof TapeStorageClass];

/**
 * @public
 * @enum
 */
export const GatewayCapacity = {
  Large: "Large",
  Medium: "Medium",
  Small: "Small",
} as const;
/**
 * @public
 */
export type GatewayCapacity = (typeof GatewayCapacity)[keyof typeof GatewayCapacity];

/**
 * @public
 * @enum
 */
export const HostEnvironment = {
  EC2: "EC2",
  HYPER_V: "HYPER-V",
  KVM: "KVM",
  OTHER: "OTHER",
  SNOWBALL: "SNOWBALL",
  VMWARE: "VMWARE",
} as const;
/**
 * @public
 */
export type HostEnvironment = (typeof HostEnvironment)[keyof typeof HostEnvironment];

/**
 * @public
 * @enum
 */
export const SMBSecurityStrategy = {
  ClientSpecified: "ClientSpecified",
  MandatoryEncryption: "MandatoryEncryption",
  MandatoryEncryptionNoAes128: "MandatoryEncryptionNoAes128",
  MandatorySigning: "MandatorySigning",
} as const;
/**
 * @public
 */
export type SMBSecurityStrategy = (typeof SMBSecurityStrategy)[keyof typeof SMBSecurityStrategy];

/**
 * @public
 * @enum
 */
export const FileShareType = {
  NFS: "NFS",
  SMB: "SMB",
} as const;
/**
 * @public
 */
export type FileShareType = (typeof FileShareType)[keyof typeof FileShareType];

/**
 * @public
 * @enum
 */
export const PoolStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
} as const;
/**
 * @public
 */
export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus];
