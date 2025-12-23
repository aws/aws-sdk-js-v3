// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const NodeDataType = {
  BOOLEAN: "BOOLEAN",
  BOOLEAN_ARRAY: "BOOLEAN_ARRAY",
  DOUBLE: "DOUBLE",
  DOUBLE_ARRAY: "DOUBLE_ARRAY",
  FLOAT: "FLOAT",
  FLOAT_ARRAY: "FLOAT_ARRAY",
  INT16: "INT16",
  INT16_ARRAY: "INT16_ARRAY",
  INT32: "INT32",
  INT32_ARRAY: "INT32_ARRAY",
  INT64: "INT64",
  INT64_ARRAY: "INT64_ARRAY",
  INT8: "INT8",
  INT8_ARRAY: "INT8_ARRAY",
  STRING: "STRING",
  STRING_ARRAY: "STRING_ARRAY",
  STRUCT: "STRUCT",
  STRUCT_ARRAY: "STRUCT_ARRAY",
  UINT16: "UINT16",
  UINT16_ARRAY: "UINT16_ARRAY",
  UINT32: "UINT32",
  UINT32_ARRAY: "UINT32_ARRAY",
  UINT64: "UINT64",
  UINT64_ARRAY: "UINT64_ARRAY",
  UINT8: "UINT8",
  UINT8_ARRAY: "UINT8_ARRAY",
  UNIX_TIMESTAMP: "UNIX_TIMESTAMP",
  UNIX_TIMESTAMP_ARRAY: "UNIX_TIMESTAMP_ARRAY",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type NodeDataType = (typeof NodeDataType)[keyof typeof NodeDataType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const VehicleAssociationBehavior = {
  CREATE_IOT_THING: "CreateIotThing",
  VALIDATE_IOT_THING_EXISTS: "ValidateIotThingExists",
} as const;
/**
 * @public
 */
export type VehicleAssociationBehavior = (typeof VehicleAssociationBehavior)[keyof typeof VehicleAssociationBehavior];

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  HOUR: "HOUR",
  MILLISECOND: "MILLISECOND",
  MINUTE: "MINUTE",
  SECOND: "SECOND",
} as const;
/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

/**
 * @public
 * @enum
 */
export const UpdateMode = {
  MERGE: "Merge",
  OVERWRITE: "Overwrite",
} as const;
/**
 * @public
 */
export type UpdateMode = (typeof UpdateMode)[keyof typeof UpdateMode];

/**
 * @public
 * @enum
 */
export const TriggerMode = {
  ALWAYS: "ALWAYS",
  RISING_EDGE: "RISING_EDGE",
} as const;
/**
 * @public
 */
export type TriggerMode = (typeof TriggerMode)[keyof typeof TriggerMode];

/**
 * @public
 * @enum
 */
export const Compression = {
  OFF: "OFF",
  SNAPPY: "SNAPPY",
} as const;
/**
 * @public
 */
export type Compression = (typeof Compression)[keyof typeof Compression];

/**
 * @public
 * @enum
 */
export const DataFormat = {
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 * @enum
 */
export const StorageCompressionFormat = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type StorageCompressionFormat = (typeof StorageCompressionFormat)[keyof typeof StorageCompressionFormat];

/**
 * @public
 * @enum
 */
export const StorageMaximumSizeUnit = {
  GB: "GB",
  MB: "MB",
  TB: "TB",
} as const;
/**
 * @public
 */
export type StorageMaximumSizeUnit = (typeof StorageMaximumSizeUnit)[keyof typeof StorageMaximumSizeUnit];

/**
 * @public
 * @enum
 */
export const StorageMinimumTimeToLiveUnit = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  WEEKS: "WEEKS",
} as const;
/**
 * @public
 */
export type StorageMinimumTimeToLiveUnit =
  (typeof StorageMinimumTimeToLiveUnit)[keyof typeof StorageMinimumTimeToLiveUnit];

/**
 * @public
 * @enum
 */
export const DiagnosticsMode = {
  OFF: "OFF",
  SEND_ACTIVE_DTCS: "SEND_ACTIVE_DTCS",
} as const;
/**
 * @public
 */
export type DiagnosticsMode = (typeof DiagnosticsMode)[keyof typeof DiagnosticsMode];

/**
 * @public
 * @enum
 */
export const SpoolingMode = {
  OFF: "OFF",
  TO_DISK: "TO_DISK",
} as const;
/**
 * @public
 */
export type SpoolingMode = (typeof SpoolingMode)[keyof typeof SpoolingMode];

/**
 * @public
 * @enum
 */
export const CampaignStatus = {
  CREATING: "CREATING",
  RUNNING: "RUNNING",
  SUSPENDED: "SUSPENDED",
  WAITING_FOR_APPROVAL: "WAITING_FOR_APPROVAL",
} as const;
/**
 * @public
 */
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];

/**
 * @public
 * @enum
 */
export const ListResponseScope = {
  METADATA_ONLY: "METADATA_ONLY",
} as const;
/**
 * @public
 */
export type ListResponseScope = (typeof ListResponseScope)[keyof typeof ListResponseScope];

/**
 * @public
 * @enum
 */
export const UpdateCampaignAction = {
  APPROVE: "APPROVE",
  RESUME: "RESUME",
  SUSPEND: "SUSPEND",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type UpdateCampaignAction = (typeof UpdateCampaignAction)[keyof typeof UpdateCampaignAction];

/**
 * @public
 * @enum
 */
export const SignalValueType = {
  FLOATING_POINT: "FLOATING_POINT",
  INTEGER: "INTEGER",
} as const;
/**
 * @public
 */
export type SignalValueType = (typeof SignalValueType)[keyof typeof SignalValueType];

/**
 * @public
 * @enum
 */
export const LogType = {
  ERROR: "ERROR",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const DefaultForUnmappedSignalsType = {
  CUSTOM_DECODING: "CUSTOM_DECODING",
} as const;
/**
 * @public
 */
export type DefaultForUnmappedSignalsType =
  (typeof DefaultForUnmappedSignalsType)[keyof typeof DefaultForUnmappedSignalsType];

/**
 * @public
 * @enum
 */
export const NetworkInterfaceType = {
  CAN_INTERFACE: "CAN_INTERFACE",
  CUSTOM_DECODING_INTERFACE: "CUSTOM_DECODING_INTERFACE",
  OBD_INTERFACE: "OBD_INTERFACE",
  VEHICLE_MIDDLEWARE: "VEHICLE_MIDDLEWARE",
} as const;
/**
 * @public
 */
export type NetworkInterfaceType = (typeof NetworkInterfaceType)[keyof typeof NetworkInterfaceType];

/**
 * @public
 * @enum
 */
export const VehicleMiddlewareProtocol = {
  ROS_2: "ROS_2",
} as const;
/**
 * @public
 */
export type VehicleMiddlewareProtocol = (typeof VehicleMiddlewareProtocol)[keyof typeof VehicleMiddlewareProtocol];

/**
 * @public
 * @enum
 */
export const ROS2PrimitiveType = {
  BOOL: "BOOL",
  BYTE: "BYTE",
  CHAR: "CHAR",
  FLOAT32: "FLOAT32",
  FLOAT64: "FLOAT64",
  INT16: "INT16",
  INT32: "INT32",
  INT64: "INT64",
  INT8: "INT8",
  STRING: "STRING",
  UINT16: "UINT16",
  UINT32: "UINT32",
  UINT64: "UINT64",
  UINT8: "UINT8",
  WSTRING: "WSTRING",
} as const;
/**
 * @public
 */
export type ROS2PrimitiveType = (typeof ROS2PrimitiveType)[keyof typeof ROS2PrimitiveType];

/**
 * @public
 * @enum
 */
export const StructuredMessageListType = {
  DYNAMIC_BOUNDED_CAPACITY: "DYNAMIC_BOUNDED_CAPACITY",
  DYNAMIC_UNBOUNDED_CAPACITY: "DYNAMIC_UNBOUNDED_CAPACITY",
  FIXED_CAPACITY: "FIXED_CAPACITY",
} as const;
/**
 * @public
 */
export type StructuredMessageListType = (typeof StructuredMessageListType)[keyof typeof StructuredMessageListType];

/**
 * @public
 * @enum
 */
export const SignalDecoderType = {
  CAN_SIGNAL: "CAN_SIGNAL",
  CUSTOM_DECODING_SIGNAL: "CUSTOM_DECODING_SIGNAL",
  MESSAGE_SIGNAL: "MESSAGE_SIGNAL",
  OBD_SIGNAL: "OBD_SIGNAL",
} as const;
/**
 * @public
 */
export type SignalDecoderType = (typeof SignalDecoderType)[keyof typeof SignalDecoderType];

/**
 * @public
 * @enum
 */
export const NetworkInterfaceFailureReason = {
  CAN_NETWORK_INTERFACE_INFO_IS_NULL: "CAN_NETWORK_INTERFACE_INFO_IS_NULL",
  CONFLICTING_NETWORK_INTERFACE: "CONFLICTING_NETWORK_INTERFACE",
  CUSTOM_DECODING_SIGNAL_NETWORK_INTERFACE_INFO_IS_NULL: "CUSTOM_DECODING_SIGNAL_NETWORK_INTERFACE_INFO_IS_NULL",
  DUPLICATE_INTERFACE: "DUPLICATE_NETWORK_INTERFACE",
  NETWORK_INTERFACE_TO_ADD_ALREADY_EXISTS: "NETWORK_INTERFACE_TO_ADD_ALREADY_EXISTS",
  NETWORK_INTERFACE_TO_REMOVE_ASSOCIATED_WITH_SIGNALS: "NETWORK_INTERFACE_TO_REMOVE_ASSOCIATED_WITH_SIGNALS",
  OBD_NETWORK_INTERFACE_INFO_IS_NULL: "OBD_NETWORK_INTERFACE_INFO_IS_NULL",
  VEHICLE_MIDDLEWARE_NETWORK_INTERFACE_INFO_IS_NULL: "VEHICLE_MIDDLEWARE_NETWORK_INTERFACE_INFO_IS_NULL",
} as const;
/**
 * @public
 */
export type NetworkInterfaceFailureReason =
  (typeof NetworkInterfaceFailureReason)[keyof typeof NetworkInterfaceFailureReason];

/**
 * @public
 * @enum
 */
export const SignalDecoderFailureReason = {
  CAN_SIGNAL_INFO_IS_NULL: "CAN_SIGNAL_INFO_IS_NULL",
  CONFLICTING_SIGNAL: "CONFLICTING_SIGNAL",
  CUSTOM_DECODING_SIGNAL_INFO_IS_NULL: "CUSTOM_DECODING_SIGNAL_INFO_IS_NULL",
  DUPLICATE_SIGNAL: "DUPLICATE_SIGNAL",
  EMPTY_MESSAGE_SIGNAL: "EMPTY_MESSAGE_SIGNAL",
  MESSAGE_SIGNAL_INFO_IS_NULL: "MESSAGE_SIGNAL_INFO_IS_NULL",
  NETWORK_INTERFACE_TYPE_INCOMPATIBLE_WITH_SIGNAL_DECODER_TYPE: "NETWORK_INTERFACE_TYPE_INCOMPATIBLE_WITH_SIGNAL_DECODER_TYPE",
  NO_DECODER_INFO_FOR_SIGNAL_IN_MODEL: "NO_DECODER_INFO_FOR_SIGNAL_IN_MODEL",
  NO_SIGNAL_IN_CATALOG_FOR_DECODER_SIGNAL: "NO_SIGNAL_IN_CATALOG_FOR_DECODER_SIGNAL",
  OBD_SIGNAL_INFO_IS_NULL: "OBD_SIGNAL_INFO_IS_NULL",
  SIGNAL_DECODER_INCOMPATIBLE_WITH_SIGNAL_CATALOG: "SIGNAL_DECODER_INCOMPATIBLE_WITH_SIGNAL_CATALOG",
  SIGNAL_DECODER_TYPE_INCOMPATIBLE_WITH_MESSAGE_SIGNAL_TYPE: "SIGNAL_DECODER_TYPE_INCOMPATIBLE_WITH_MESSAGE_SIGNAL_TYPE",
  SIGNAL_NOT_ASSOCIATED_WITH_NETWORK_INTERFACE: "SIGNAL_NOT_ASSOCIATED_WITH_NETWORK_INTERFACE",
  SIGNAL_NOT_IN_MODEL: "SIGNAL_NOT_IN_MODEL",
  SIGNAL_TO_ADD_ALREADY_EXISTS: "SIGNAL_TO_ADD_ALREADY_EXISTS",
  STRUCT_SIZE_MISMATCH: "STRUCT_SIZE_MISMATCH",
} as const;
/**
 * @public
 */
export type SignalDecoderFailureReason = (typeof SignalDecoderFailureReason)[keyof typeof SignalDecoderFailureReason];

/**
 * @public
 * @enum
 */
export const NodeDataEncoding = {
  BINARY: "BINARY",
  TYPED: "TYPED",
} as const;
/**
 * @public
 */
export type NodeDataEncoding = (typeof NodeDataEncoding)[keyof typeof NodeDataEncoding];

/**
 * @public
 * @enum
 */
export const ManifestStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
  INVALID: "INVALID",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type ManifestStatus = (typeof ManifestStatus)[keyof typeof ManifestStatus];

/**
 * @public
 * @enum
 */
export const EncryptionStatus = {
  FAILURE: "FAILURE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  FLEETWISE_DEFAULT_ENCRYPTION: "FLEETWISE_DEFAULT_ENCRYPTION",
  KMS_BASED_ENCRYPTION: "KMS_BASED_ENCRYPTION",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  REGISTRATION_FAILURE: "REGISTRATION_FAILURE",
  REGISTRATION_PENDING: "REGISTRATION_PENDING",
  REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
} as const;
/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 * @enum
 */
export const VehicleState = {
  CREATED: "CREATED",
  DELETING: "DELETING",
  HEALTHY: "HEALTHY",
  READY: "READY",
  READY_FOR_CHECKIN: "READY_FOR_CHECKIN",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type VehicleState = (typeof VehicleState)[keyof typeof VehicleState];

/**
 * @public
 * @enum
 */
export const SignalNodeType = {
  ACTUATOR: "ACTUATOR",
  ATTRIBUTE: "ATTRIBUTE",
  BRANCH: "BRANCH",
  CUSTOM_PROPERTY: "CUSTOM_PROPERTY",
  CUSTOM_STRUCT: "CUSTOM_STRUCT",
  SENSOR: "SENSOR",
} as const;
/**
 * @public
 */
export type SignalNodeType = (typeof SignalNodeType)[keyof typeof SignalNodeType];
