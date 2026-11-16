// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OrgMembershipStatus = {
  IN_ORG: "IN_ORG",
  NOT_IN_ORG: "NOT_IN_ORG",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type OrgMembershipStatus = (typeof OrgMembershipStatus)[keyof typeof OrgMembershipStatus];

/**
 * @public
 * @enum
 */
export const MonitorLocalResourceType = {
  AWS_AZ: "AWS::AvailabilityZone",
  AWS_REGION: "AWS::Region",
  AWS_SUBNET: "AWS::EC2::Subnet",
  AWS_VPC: "AWS::EC2::VPC",
  EKS_CLUSTER: "AWS::EKS::Cluster",
} as const;
/**
 * @public
 */
export type MonitorLocalResourceType = (typeof MonitorLocalResourceType)[keyof typeof MonitorLocalResourceType];

/**
 * @public
 * @enum
 */
export const MonitorRemoteResourceType = {
  AWS_AZ: "AWS::AvailabilityZone",
  AWS_REGION: "AWS::Region",
  AWS_SERVICE: "AWS::AWSService",
  AWS_SUBNET: "AWS::EC2::Subnet",
  AWS_VPC: "AWS::EC2::VPC",
} as const;
/**
 * @public
 */
export type MonitorRemoteResourceType = (typeof MonitorRemoteResourceType)[keyof typeof MonitorRemoteResourceType];

/**
 * @public
 * @enum
 */
export const MonitorStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type MonitorStatus = (typeof MonitorStatus)[keyof typeof MonitorStatus];

/**
 * @public
 * @enum
 */
export const PerformanceMonitorTargetType = {
  AWS_VPC: "AWS::EC2::VPC",
} as const;
/**
 * @public
 */
export type PerformanceMonitorTargetType =
  (typeof PerformanceMonitorTargetType)[keyof typeof PerformanceMonitorTargetType];

/**
 * @public
 * @enum
 */
export const PerformanceMonitorType = {
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type PerformanceMonitorType = (typeof PerformanceMonitorType)[keyof typeof PerformanceMonitorType];

/**
 * @public
 * @enum
 */
export const TargetType = {
  ACCOUNT: "ACCOUNT",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const ScopeStatus = {
  DEACTIVATED: "DEACTIVATED",
  DEACTIVATING: "DEACTIVATING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ScopeStatus = (typeof ScopeStatus)[keyof typeof ScopeStatus];

/**
 * @public
 * @enum
 */
export const DestinationCategory = {
  AMAZON_DYNAMODB: "AMAZON_DYNAMODB",
  AMAZON_S3: "AMAZON_S3",
  AWS_SERVICE: "AWS_SERVICE",
  INTERNET: "INTERNET",
  INTER_AZ: "INTER_AZ",
  INTER_REGION: "INTER_REGION",
  INTER_VPC: "INTER_VPC",
  INTRA_AZ: "INTRA_AZ",
  LOCAL_ZONE: "LOCAL_ZONE",
  TRANSIT_GATEWAY: "TRANSIT_GATEWAY",
  UNCLASSIFIED: "UNCLASSIFIED",
} as const;
/**
 * @public
 */
export type DestinationCategory = (typeof DestinationCategory)[keyof typeof DestinationCategory];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  IN: "IN",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * @public
 * @enum
 */
export const ScopeCoverageStatus = {
  COMPLETE: "COMPLETE",
  INCOMPLETE: "INCOMPLETE",
  PENDING: "PENDING",
  STALE: "STALE",
} as const;
/**
 * @public
 */
export type ScopeCoverageStatus = (typeof ScopeCoverageStatus)[keyof typeof ScopeCoverageStatus];

/**
 * @public
 * @enum
 */
export const MetricUnit = {
  BITS: "Bits",
  BITS_PER_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_PER_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_PER_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_PER_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_PER_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_PER_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_PER_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_PER_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_PER_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_PER_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_PER_SECOND: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type MetricUnit = (typeof MetricUnit)[keyof typeof MetricUnit];

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 * @enum
 */
export const MonitorMetric = {
  DATA_TRANSFERRED: "DATA_TRANSFERRED",
  RETRANSMISSIONS: "RETRANSMISSIONS",
  ROUND_TRIP_TIME: "ROUND_TRIP_TIME",
  TIMEOUTS: "TIMEOUTS",
} as const;
/**
 * @public
 */
export type MonitorMetric = (typeof MonitorMetric)[keyof typeof MonitorMetric];

/**
 * @public
 * @enum
 */
export const PerformanceMonitorQueryType = {
  TOP_PATHS: "TOP_PATHS",
} as const;
/**
 * @public
 */
export type PerformanceMonitorQueryType =
  (typeof PerformanceMonitorQueryType)[keyof typeof PerformanceMonitorQueryType];

/**
 * @public
 * @enum
 */
export const WorkloadInsightsMetric = {
  DATA_TRANSFERRED: "DATA_TRANSFERRED",
  RETRANSMISSIONS: "RETRANSMISSIONS",
  TIMEOUTS: "TIMEOUTS",
} as const;
/**
 * @public
 */
export type WorkloadInsightsMetric = (typeof WorkloadInsightsMetric)[keyof typeof WorkloadInsightsMetric];
