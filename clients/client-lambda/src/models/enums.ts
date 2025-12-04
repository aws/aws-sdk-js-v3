// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ThrottleReason = {
  CallerRateLimitExceeded: "CallerRateLimitExceeded",
  ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded",
  ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded",
  FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded",
  ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded",
  ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded",
} as const;
/**
 * @public
 */
export type ThrottleReason = (typeof ThrottleReason)[keyof typeof ThrottleReason];

/**
 * @public
 * @enum
 */
export const FunctionUrlAuthType = {
  AWS_IAM: "AWS_IAM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type FunctionUrlAuthType = (typeof FunctionUrlAuthType)[keyof typeof FunctionUrlAuthType];

/**
 * @public
 * @enum
 */
export const KafkaSchemaRegistryAuthType = {
  BASIC_AUTH: "BASIC_AUTH",
  CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
  SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
} as const;
/**
 * @public
 */
export type KafkaSchemaRegistryAuthType =
  (typeof KafkaSchemaRegistryAuthType)[keyof typeof KafkaSchemaRegistryAuthType];

/**
 * @public
 * @enum
 */
export const SchemaRegistryEventRecordFormat = {
  JSON: "JSON",
  SOURCE: "SOURCE",
} as const;
/**
 * @public
 */
export type SchemaRegistryEventRecordFormat =
  (typeof SchemaRegistryEventRecordFormat)[keyof typeof SchemaRegistryEventRecordFormat];

/**
 * @public
 * @enum
 */
export const KafkaSchemaValidationAttribute = {
  KEY: "KEY",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type KafkaSchemaValidationAttribute =
  (typeof KafkaSchemaValidationAttribute)[keyof typeof KafkaSchemaValidationAttribute];

/**
 * @public
 * @enum
 */
export const ApplicationLogLevel = {
  Debug: "DEBUG",
  Error: "ERROR",
  Fatal: "FATAL",
  Info: "INFO",
  Trace: "TRACE",
  Warn: "WARN",
} as const;
/**
 * @public
 */
export type ApplicationLogLevel = (typeof ApplicationLogLevel)[keyof typeof ApplicationLogLevel];

/**
 * @public
 * @enum
 */
export const Architecture = {
  arm64: "arm64",
  x86_64: "x86_64",
} as const;
/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * @public
 * @enum
 */
export const CapacityProviderScalingMode = {
  Auto: "Auto",
  Manual: "Manual",
} as const;
/**
 * @public
 */
export type CapacityProviderScalingMode =
  (typeof CapacityProviderScalingMode)[keyof typeof CapacityProviderScalingMode];

/**
 * @public
 * @enum
 */
export const CapacityProviderPredefinedMetricType = {
  LambdaCapacityProviderAverageCPUUtilization: "LambdaCapacityProviderAverageCPUUtilization",
} as const;
/**
 * @public
 */
export type CapacityProviderPredefinedMetricType =
  (typeof CapacityProviderPredefinedMetricType)[keyof typeof CapacityProviderPredefinedMetricType];

/**
 * @public
 * @enum
 */
export const CapacityProviderState = {
  Active: "Active",
  Deleting: "Deleting",
  Failed: "Failed",
  Pending: "Pending",
} as const;
/**
 * @public
 */
export type CapacityProviderState = (typeof CapacityProviderState)[keyof typeof CapacityProviderState];

/**
 * @public
 * @enum
 */
export const State = {
  Active: "Active",
  ActiveNonInvocable: "ActiveNonInvocable",
  Deactivated: "Deactivated",
  Deactivating: "Deactivating",
  Deleting: "Deleting",
  Failed: "Failed",
  Inactive: "Inactive",
  Pending: "Pending",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const OperationAction = {
  CANCEL: "CANCEL",
  FAIL: "FAIL",
  RETRY: "RETRY",
  START: "START",
  SUCCEED: "SUCCEED",
} as const;
/**
 * @public
 */
export type OperationAction = (typeof OperationAction)[keyof typeof OperationAction];

/**
 * @public
 * @enum
 */
export const OperationType = {
  CALLBACK: "CALLBACK",
  CHAINED_INVOKE: "CHAINED_INVOKE",
  CONTEXT: "CONTEXT",
  EXECUTION: "EXECUTION",
  STEP: "STEP",
  WAIT: "WAIT",
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
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  READY: "READY",
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const CodeSigningPolicy = {
  Enforce: "Enforce",
  Warn: "Warn",
} as const;
/**
 * @public
 */
export type CodeSigningPolicy = (typeof CodeSigningPolicy)[keyof typeof CodeSigningPolicy];

/**
 * @public
 * @enum
 */
export const FullDocument = {
  Default: "Default",
  UpdateLookup: "UpdateLookup",
} as const;
/**
 * @public
 */
export type FullDocument = (typeof FullDocument)[keyof typeof FullDocument];

/**
 * @public
 * @enum
 */
export const FunctionResponseType = {
  ReportBatchItemFailures: "ReportBatchItemFailures",
} as const;
/**
 * @public
 */
export type FunctionResponseType = (typeof FunctionResponseType)[keyof typeof FunctionResponseType];

/**
 * @public
 * @enum
 */
export const EventSourceMappingMetric = {
  EventCount: "EventCount",
} as const;
/**
 * @public
 */
export type EventSourceMappingMetric = (typeof EventSourceMappingMetric)[keyof typeof EventSourceMappingMetric];

/**
 * @public
 * @enum
 */
export const EndPointType = {
  KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS",
} as const;
/**
 * @public
 */
export type EndPointType = (typeof EndPointType)[keyof typeof EndPointType];

/**
 * @public
 * @enum
 */
export const SourceAccessType = {
  BASIC_AUTH: "BASIC_AUTH",
  CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
  SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH",
  SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH",
  SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
  VIRTUAL_HOST: "VIRTUAL_HOST",
  VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP",
  VPC_SUBNET: "VPC_SUBNET",
} as const;
/**
 * @public
 */
export type SourceAccessType = (typeof SourceAccessType)[keyof typeof SourceAccessType];

/**
 * @public
 * @enum
 */
export const EventSourcePosition = {
  AT_TIMESTAMP: "AT_TIMESTAMP",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type EventSourcePosition = (typeof EventSourcePosition)[keyof typeof EventSourcePosition];

/**
 * @public
 * @enum
 */
export const LogFormat = {
  Json: "JSON",
  Text: "Text",
} as const;
/**
 * @public
 */
export type LogFormat = (typeof LogFormat)[keyof typeof LogFormat];

/**
 * @public
 * @enum
 */
export const SystemLogLevel = {
  Debug: "DEBUG",
  Info: "INFO",
  Warn: "WARN",
} as const;
/**
 * @public
 */
export type SystemLogLevel = (typeof SystemLogLevel)[keyof typeof SystemLogLevel];

/**
 * @public
 * @enum
 */
export const PackageType = {
  Image: "Image",
  Zip: "Zip",
} as const;
/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

/**
 * @public
 * @enum
 */
export const FunctionVersionLatestPublished = {
  LATEST_PUBLISHED: "LATEST_PUBLISHED",
} as const;
/**
 * @public
 */
export type FunctionVersionLatestPublished =
  (typeof FunctionVersionLatestPublished)[keyof typeof FunctionVersionLatestPublished];

/**
 * @public
 * @enum
 */
export const Runtime = {
  dotnet6: "dotnet6",
  dotnet8: "dotnet8",
  dotnetcore10: "dotnetcore1.0",
  dotnetcore20: "dotnetcore2.0",
  dotnetcore21: "dotnetcore2.1",
  dotnetcore31: "dotnetcore3.1",
  go1x: "go1.x",
  java11: "java11",
  java17: "java17",
  java21: "java21",
  java25: "java25",
  java8: "java8",
  java8al2: "java8.al2",
  nodejs: "nodejs",
  nodejs10x: "nodejs10.x",
  nodejs12x: "nodejs12.x",
  nodejs14x: "nodejs14.x",
  nodejs16x: "nodejs16.x",
  nodejs18x: "nodejs18.x",
  nodejs20x: "nodejs20.x",
  nodejs22x: "nodejs22.x",
  nodejs24x: "nodejs24.x",
  nodejs43: "nodejs4.3",
  nodejs43edge: "nodejs4.3-edge",
  nodejs610: "nodejs6.10",
  nodejs810: "nodejs8.10",
  provided: "provided",
  providedal2: "provided.al2",
  providedal2023: "provided.al2023",
  python27: "python2.7",
  python310: "python3.10",
  python311: "python3.11",
  python312: "python3.12",
  python313: "python3.13",
  python314: "python3.14",
  python36: "python3.6",
  python37: "python3.7",
  python38: "python3.8",
  python39: "python3.9",
  ruby25: "ruby2.5",
  ruby27: "ruby2.7",
  ruby32: "ruby3.2",
  ruby33: "ruby3.3",
  ruby34: "ruby3.4",
} as const;
/**
 * @public
 */
export type Runtime = (typeof Runtime)[keyof typeof Runtime];

/**
 * @public
 * @enum
 */
export const SnapStartApplyOn = {
  None: "None",
  PublishedVersions: "PublishedVersions",
} as const;
/**
 * @public
 */
export type SnapStartApplyOn = (typeof SnapStartApplyOn)[keyof typeof SnapStartApplyOn];

/**
 * @public
 * @enum
 */
export const TenantIsolationMode = {
  PER_TENANT: "PER_TENANT",
} as const;
/**
 * @public
 */
export type TenantIsolationMode = (typeof TenantIsolationMode)[keyof typeof TenantIsolationMode];

/**
 * @public
 * @enum
 */
export const TracingMode = {
  Active: "Active",
  PassThrough: "PassThrough",
} as const;
/**
 * @public
 */
export type TracingMode = (typeof TracingMode)[keyof typeof TracingMode];

/**
 * @public
 * @enum
 */
export const LastUpdateStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Successful: "Successful",
} as const;
/**
 * @public
 */
export type LastUpdateStatus = (typeof LastUpdateStatus)[keyof typeof LastUpdateStatus];

/**
 * @public
 * @enum
 */
export const LastUpdateStatusReasonCode = {
  CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded",
  DisabledKMSKey: "DisabledKMSKey",
  DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl",
  EC2RequestLimitExceeded: "EC2RequestLimitExceeded",
  EFSIOError: "EFSIOError",
  EFSMountConnectivityError: "EFSMountConnectivityError",
  EFSMountFailure: "EFSMountFailure",
  EFSMountTimeout: "EFSMountTimeout",
  EniLimitExceeded: "EniLimitExceeded",
  FunctionError: "FunctionError",
  FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError",
  FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted",
  FunctionErrorInitTimeout: "FunctionError.InitTimeout",
  FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint",
  FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory",
  FunctionErrorPermissionDenied: "FunctionError.PermissionDenied",
  FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError",
  FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions",
  ImageAccessDenied: "ImageAccessDenied",
  ImageDeleted: "ImageDeleted",
  InsufficientCapacity: "InsufficientCapacity",
  InsufficientRolePermissions: "InsufficientRolePermissions",
  InternalError: "InternalError",
  InvalidConfiguration: "InvalidConfiguration",
  InvalidImage: "InvalidImage",
  InvalidRuntime: "InvalidRuntime",
  InvalidSecurityGroup: "InvalidSecurityGroup",
  InvalidStateKMSKey: "InvalidStateKMSKey",
  InvalidSubnet: "InvalidSubnet",
  InvalidZipFileException: "InvalidZipFileException",
  KMSKeyAccessDenied: "KMSKeyAccessDenied",
  KMSKeyNotFound: "KMSKeyNotFound",
  SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
  VcpuLimitExceeded: "VcpuLimitExceeded",
} as const;
/**
 * @public
 */
export type LastUpdateStatusReasonCode = (typeof LastUpdateStatusReasonCode)[keyof typeof LastUpdateStatusReasonCode];

/**
 * @public
 * @enum
 */
export const SnapStartOptimizationStatus = {
  Off: "Off",
  On: "On",
} as const;
/**
 * @public
 */
export type SnapStartOptimizationStatus =
  (typeof SnapStartOptimizationStatus)[keyof typeof SnapStartOptimizationStatus];

/**
 * @public
 * @enum
 */
export const StateReasonCode = {
  CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded",
  Creating: "Creating",
  DisabledKMSKey: "DisabledKMSKey",
  DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl",
  DrainingDurableExecutions: "DrainingDurableExecutions",
  EC2RequestLimitExceeded: "EC2RequestLimitExceeded",
  EFSIOError: "EFSIOError",
  EFSMountConnectivityError: "EFSMountConnectivityError",
  EFSMountFailure: "EFSMountFailure",
  EFSMountTimeout: "EFSMountTimeout",
  EniLimitExceeded: "EniLimitExceeded",
  FunctionError: "FunctionError",
  FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError",
  FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted",
  FunctionErrorInitTimeout: "FunctionError.InitTimeout",
  FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint",
  FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory",
  FunctionErrorPermissionDenied: "FunctionError.PermissionDenied",
  FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError",
  FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions",
  Idle: "Idle",
  ImageAccessDenied: "ImageAccessDenied",
  ImageDeleted: "ImageDeleted",
  InsufficientCapacity: "InsufficientCapacity",
  InsufficientRolePermissions: "InsufficientRolePermissions",
  InternalError: "InternalError",
  InvalidConfiguration: "InvalidConfiguration",
  InvalidImage: "InvalidImage",
  InvalidRuntime: "InvalidRuntime",
  InvalidSecurityGroup: "InvalidSecurityGroup",
  InvalidStateKMSKey: "InvalidStateKMSKey",
  InvalidSubnet: "InvalidSubnet",
  InvalidZipFileException: "InvalidZipFileException",
  KMSKeyAccessDenied: "KMSKeyAccessDenied",
  KMSKeyNotFound: "KMSKeyNotFound",
  Restoring: "Restoring",
  SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
  VcpuLimitExceeded: "VcpuLimitExceeded",
} as const;
/**
 * @public
 */
export type StateReasonCode = (typeof StateReasonCode)[keyof typeof StateReasonCode];

/**
 * @public
 * @enum
 */
export const InvokeMode = {
  BUFFERED: "BUFFERED",
  RESPONSE_STREAM: "RESPONSE_STREAM",
} as const;
/**
 * @public
 */
export type InvokeMode = (typeof InvokeMode)[keyof typeof InvokeMode];

/**
 * @public
 * @enum
 */
export const RecursiveLoop = {
  Allow: "Allow",
  Terminate: "Terminate",
} as const;
/**
 * @public
 */
export type RecursiveLoop = (typeof RecursiveLoop)[keyof typeof RecursiveLoop];

/**
 * @public
 * @enum
 */
export const UpdateRuntimeOn = {
  Auto: "Auto",
  FunctionUpdate: "FunctionUpdate",
  Manual: "Manual",
} as const;
/**
 * @public
 */
export type UpdateRuntimeOn = (typeof UpdateRuntimeOn)[keyof typeof UpdateRuntimeOn];

/**
 * @public
 * @enum
 */
export const InvocationType = {
  DryRun: "DryRun",
  Event: "Event",
  RequestResponse: "RequestResponse",
} as const;
/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * @public
 * @enum
 */
export const LogType = {
  None: "None",
  Tail: "Tail",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const ResponseStreamingInvocationType = {
  DryRun: "DryRun",
  RequestResponse: "RequestResponse",
} as const;
/**
 * @public
 */
export type ResponseStreamingInvocationType =
  (typeof ResponseStreamingInvocationType)[keyof typeof ResponseStreamingInvocationType];

/**
 * @public
 * @enum
 */
export const FunctionVersion = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type FunctionVersion = (typeof FunctionVersion)[keyof typeof FunctionVersion];

/**
 * @public
 * @enum
 */
export const ProvisionedConcurrencyStatusEnum = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ProvisionedConcurrencyStatusEnum =
  (typeof ProvisionedConcurrencyStatusEnum)[keyof typeof ProvisionedConcurrencyStatusEnum];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const EventType = {
  CallbackFailed: "CallbackFailed",
  CallbackStarted: "CallbackStarted",
  CallbackSucceeded: "CallbackSucceeded",
  CallbackTimedOut: "CallbackTimedOut",
  ChainedInvokeFailed: "ChainedInvokeFailed",
  ChainedInvokeStarted: "ChainedInvokeStarted",
  ChainedInvokeStopped: "ChainedInvokeStopped",
  ChainedInvokeSucceeded: "ChainedInvokeSucceeded",
  ChainedInvokeTimedOut: "ChainedInvokeTimedOut",
  ContextFailed: "ContextFailed",
  ContextStarted: "ContextStarted",
  ContextSucceeded: "ContextSucceeded",
  ExecutionFailed: "ExecutionFailed",
  ExecutionStarted: "ExecutionStarted",
  ExecutionStopped: "ExecutionStopped",
  ExecutionSucceeded: "ExecutionSucceeded",
  ExecutionTimedOut: "ExecutionTimedOut",
  InvocationCompleted: "InvocationCompleted",
  StepFailed: "StepFailed",
  StepStarted: "StepStarted",
  StepSucceeded: "StepSucceeded",
  WaitCancelled: "WaitCancelled",
  WaitStarted: "WaitStarted",
  WaitSucceeded: "WaitSucceeded",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];
