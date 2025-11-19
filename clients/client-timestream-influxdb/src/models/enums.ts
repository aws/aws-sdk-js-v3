// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DbInstanceType = {
  DB_INFLUX_12XLARGE: "db.influx.12xlarge",
  DB_INFLUX_16XLARGE: "db.influx.16xlarge",
  DB_INFLUX_24XLARGE: "db.influx.24xlarge",
  DB_INFLUX_2XLARGE: "db.influx.2xlarge",
  DB_INFLUX_4XLARGE: "db.influx.4xlarge",
  DB_INFLUX_8XLARGE: "db.influx.8xlarge",
  DB_INFLUX_LARGE: "db.influx.large",
  DB_INFLUX_MEDIUM: "db.influx.medium",
  DB_INFLUX_XLARGE: "db.influx.xlarge",
} as const;
/**
 * @public
 */
export type DbInstanceType = (typeof DbInstanceType)[keyof typeof DbInstanceType];

/**
 * @public
 * @enum
 */
export const DbStorageType = {
  INFLUX_IO_INCLUDED_T1: "InfluxIOIncludedT1",
  INFLUX_IO_INCLUDED_T2: "InfluxIOIncludedT2",
  INFLUX_IO_INCLUDED_T3: "InfluxIOIncludedT3",
} as const;
/**
 * @public
 */
export type DbStorageType = (typeof DbStorageType)[keyof typeof DbStorageType];

/**
 * @public
 * @enum
 */
export const ClusterDeploymentType = {
  MULTI_NODE_READ_REPLICAS: "MULTI_NODE_READ_REPLICAS",
} as const;
/**
 * @public
 */
export type ClusterDeploymentType = (typeof ClusterDeploymentType)[keyof typeof ClusterDeploymentType];

/**
 * @public
 * @enum
 */
export const FailoverMode = {
  AUTOMATIC: "AUTOMATIC",
  NO_FAILOVER: "NO_FAILOVER",
} as const;
/**
 * @public
 */
export type FailoverMode = (typeof FailoverMode)[keyof typeof FailoverMode];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL: "DUAL",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MAINTENANCE: "MAINTENANCE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const EngineType = {
  INFLUXDB_V2: "INFLUXDB_V2",
  INFLUXDB_V3_CORE: "INFLUXDB_V3_CORE",
  INFLUXDB_V3_ENTERPRISE: "INFLUXDB_V3_ENTERPRISE",
} as const;
/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  SINGLE_AZ: "SINGLE_AZ",
  WITH_MULTIAZ_STANDBY: "WITH_MULTIAZ_STANDBY",
} as const;
/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * @enum
 */
export const InstanceMode = {
  COMPACT: "COMPACT",
  INGEST: "INGEST",
  PRIMARY: "PRIMARY",
  PROCESS: "PROCESS",
  QUERY: "QUERY",
  REPLICA: "REPLICA",
  STANDBY: "STANDBY",
} as const;
/**
 * @public
 */
export type InstanceMode = (typeof InstanceMode)[keyof typeof InstanceMode];

/**
 * @public
 * @enum
 */
export const Status = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MAINTENANCE: "MAINTENANCE",
  MODIFYING: "MODIFYING",
  UPDATING: "UPDATING",
  UPDATING_DEPLOYMENT_TYPE: "UPDATING_DEPLOYMENT_TYPE",
  UPDATING_INSTANCE_TYPE: "UPDATING_INSTANCE_TYPE",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const DurationType = {
  DAYS: "days",
  HOURS: "hours",
  MILLISECONDS: "milliseconds",
  MINUTES: "minutes",
  SECONDS: "seconds",
} as const;
/**
 * @public
 */
export type DurationType = (typeof DurationType)[keyof typeof DurationType];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "debug",
  ERROR: "error",
  INFO: "info",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const TracingType = {
  DISABLED: "disabled",
  JAEGER: "jaeger",
  LOG: "log",
} as const;
/**
 * @public
 */
export type TracingType = (typeof TracingType)[keyof typeof TracingType];

/**
 * @public
 * @enum
 */
export const DataFusionRuntimeType = {
  MULTI_THREAD: "multi-thread",
  MULTI_THREAD_ALT: "multi-thread-alt",
} as const;
/**
 * @public
 */
export type DataFusionRuntimeType = (typeof DataFusionRuntimeType)[keyof typeof DataFusionRuntimeType];

/**
 * @public
 * @enum
 */
export const LogFormats = {
  FULL: "full",
} as const;
/**
 * @public
 */
export type LogFormats = (typeof LogFormats)[keyof typeof LogFormats];
