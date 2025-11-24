// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApplicationInstanceHealthStatus = {
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ApplicationInstanceHealthStatus =
  (typeof ApplicationInstanceHealthStatus)[keyof typeof ApplicationInstanceHealthStatus];

/**
 * @public
 * @enum
 */
export const DesiredState = {
  REMOVED: "REMOVED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type DesiredState = (typeof DesiredState)[keyof typeof DesiredState];

/**
 * @public
 * @enum
 */
export const DeviceReportedStatus = {
  INSTALL_ERROR: "INSTALL_ERROR",
  INSTALL_IN_PROGRESS: "INSTALL_IN_PROGRESS",
  LAUNCHED: "LAUNCHED",
  LAUNCH_ERROR: "LAUNCH_ERROR",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVAL_IN_PROGRESS: "REMOVAL_IN_PROGRESS",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_ERROR: "STOP_ERROR",
} as const;
/**
 * @public
 */
export type DeviceReportedStatus = (typeof DeviceReportedStatus)[keyof typeof DeviceReportedStatus];

/**
 * @public
 * @enum
 */
export const ApplicationInstanceStatus = {
  DEPLOYMENT_ERROR: "DEPLOYMENT_ERROR",
  DEPLOYMENT_FAILED: "DEPLOYMENT_FAILED",
  DEPLOYMENT_IN_PROGRESS: "DEPLOYMENT_IN_PROGRESS",
  DEPLOYMENT_PENDING: "DEPLOYMENT_PENDING",
  DEPLOYMENT_REQUESTED: "DEPLOYMENT_REQUESTED",
  DEPLOYMENT_SUCCEEDED: "DEPLOYMENT_SUCCEEDED",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVAL_IN_PROGRESS: "REMOVAL_IN_PROGRESS",
  REMOVAL_PENDING: "REMOVAL_PENDING",
  REMOVAL_REQUESTED: "REMOVAL_REQUESTED",
  REMOVAL_SUCCEEDED: "REMOVAL_SUCCEEDED",
} as const;
/**
 * @public
 */
export type ApplicationInstanceStatus = (typeof ApplicationInstanceStatus)[keyof typeof ApplicationInstanceStatus];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  DHCP: "DHCP",
  STATIC_IP: "STATIC_IP",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const JobType = {
  OTA: "OTA",
  REBOOT: "REBOOT",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobResourceType = {
  PACKAGE: "PACKAGE",
} as const;
/**
 * @public
 */
export type JobResourceType = (typeof JobResourceType)[keyof typeof JobResourceType];

/**
 * @public
 * @enum
 */
export const TemplateType = {
  RTSP_CAMERA_STREAM: "RTSP_CAMERA_STREAM",
} as const;
/**
 * @public
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

/**
 * @public
 * @enum
 */
export const PackageImportJobType = {
  MARKETPLACE_NODE_PACKAGE_VERSION: "MARKETPLACE_NODE_PACKAGE_VERSION",
  NODE_PACKAGE_VERSION: "NODE_PACKAGE_VERSION",
} as const;
/**
 * @public
 */
export type PackageImportJobType = (typeof PackageImportJobType)[keyof typeof PackageImportJobType];

/**
 * @public
 * @enum
 */
export const DeviceBrand = {
  AWS_PANORAMA: "AWS_PANORAMA",
  LENOVO: "LENOVO",
} as const;
/**
 * @public
 */
export type DeviceBrand = (typeof DeviceBrand)[keyof typeof DeviceBrand];

/**
 * @public
 * @enum
 */
export const NetworkConnectionStatus = {
  CONNECTED: "CONNECTED",
  CONNECTING: "CONNECTING",
  NOT_CONNECTED: "NOT_CONNECTED",
} as const;
/**
 * @public
 */
export type NetworkConnectionStatus = (typeof NetworkConnectionStatus)[keyof typeof NetworkConnectionStatus];

/**
 * @public
 * @enum
 */
export const DeviceAggregatedStatus = {
  AWAITING_PROVISIONING: "AWAITING_PROVISIONING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  LEASE_EXPIRED: "LEASE_EXPIRED",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  PENDING: "PENDING",
  REBOOTING: "REBOOTING",
  UPDATE_NEEDED: "UPDATE_NEEDED",
} as const;
/**
 * @public
 */
export type DeviceAggregatedStatus = (typeof DeviceAggregatedStatus)[keyof typeof DeviceAggregatedStatus];

/**
 * @public
 * @enum
 */
export const DeviceConnectionStatus = {
  AWAITING_CREDENTIALS: "AWAITING_CREDENTIALS",
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
} as const;
/**
 * @public
 */
export type DeviceConnectionStatus = (typeof DeviceConnectionStatus)[keyof typeof DeviceConnectionStatus];

/**
 * @public
 * @enum
 */
export const UpdateProgress = {
  COMPLETED: "COMPLETED",
  DOWNLOADING: "DOWNLOADING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REBOOTING: "REBOOTING",
  VERIFYING: "VERIFYING",
} as const;
/**
 * @public
 */
export type UpdateProgress = (typeof UpdateProgress)[keyof typeof UpdateProgress];

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  AWAITING_PROVISIONING: "AWAITING_PROVISIONING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  PANORAMA_APPLIANCE: "PANORAMA_APPLIANCE",
  PANORAMA_APPLIANCE_DEVELOPER_KIT: "PANORAMA_APPLIANCE_DEVELOPER_KIT",
} as const;
/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 * @enum
 */
export const NodeCategory = {
  BUSINESS_LOGIC: "BUSINESS_LOGIC",
  MEDIA_SINK: "MEDIA_SINK",
  MEDIA_SOURCE: "MEDIA_SOURCE",
  ML_MODEL: "ML_MODEL",
} as const;
/**
 * @public
 */
export type NodeCategory = (typeof NodeCategory)[keyof typeof NodeCategory];

/**
 * @public
 * @enum
 */
export const PortType = {
  BOOLEAN: "BOOLEAN",
  FLOAT32: "FLOAT32",
  INT32: "INT32",
  MEDIA: "MEDIA",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type PortType = (typeof PortType)[keyof typeof PortType];

/**
 * @public
 * @enum
 */
export const NodeFromTemplateJobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type NodeFromTemplateJobStatus = (typeof NodeFromTemplateJobStatus)[keyof typeof NodeFromTemplateJobStatus];

/**
 * @public
 * @enum
 */
export const PackageImportJobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type PackageImportJobStatus = (typeof PackageImportJobStatus)[keyof typeof PackageImportJobStatus];

/**
 * @public
 * @enum
 */
export const PackageVersionStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  REGISTER_COMPLETED: "REGISTER_COMPLETED",
  REGISTER_PENDING: "REGISTER_PENDING",
} as const;
/**
 * @public
 */
export type PackageVersionStatus = (typeof PackageVersionStatus)[keyof typeof PackageVersionStatus];

/**
 * @public
 * @enum
 */
export const NodeInstanceStatus = {
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type NodeInstanceStatus = (typeof NodeInstanceStatus)[keyof typeof NodeInstanceStatus];

/**
 * @public
 * @enum
 */
export const StatusFilter = {
  DEPLOYMENT_ERROR: "DEPLOYMENT_ERROR",
  DEPLOYMENT_FAILED: "DEPLOYMENT_FAILED",
  DEPLOYMENT_SUCCEEDED: "DEPLOYMENT_SUCCEEDED",
  PROCESSING_DEPLOYMENT: "PROCESSING_DEPLOYMENT",
  PROCESSING_REMOVAL: "PROCESSING_REMOVAL",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVAL_SUCCEEDED: "REMOVAL_SUCCEEDED",
} as const;
/**
 * @public
 */
export type StatusFilter = (typeof StatusFilter)[keyof typeof StatusFilter];

/**
 * @public
 * @enum
 */
export const ListDevicesSortBy = {
  CREATED_TIME: "CREATED_TIME",
  DEVICE_AGGREGATED_STATUS: "DEVICE_AGGREGATED_STATUS",
  DEVICE_ID: "DEVICE_ID",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type ListDevicesSortBy = (typeof ListDevicesSortBy)[keyof typeof ListDevicesSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const NodeSignalValue = {
  PAUSE: "PAUSE",
  RESUME: "RESUME",
} as const;
/**
 * @public
 */
export type NodeSignalValue = (typeof NodeSignalValue)[keyof typeof NodeSignalValue];
