// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Tier = {
  ACTIVE_DIRECTORY: "ACTIVE_DIRECTORY",
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  DOT_NET_CORE: "DOT_NET_CORE",
  DOT_NET_WEB: "DOT_NET_WEB",
  DOT_NET_WEB_TIER: "DOT_NET_WEB_TIER",
  DOT_NET_WORKER: "DOT_NET_WORKER",
  JAVA_JMX: "JAVA_JMX",
  MYSQL: "MYSQL",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  SAP_ASE_HIGH_AVAILABILITY: "SAP_ASE_HIGH_AVAILABILITY",
  SAP_ASE_SINGLE_NODE: "SAP_ASE_SINGLE_NODE",
  SAP_HANA_HIGH_AVAILABILITY: "SAP_HANA_HIGH_AVAILABILITY",
  SAP_HANA_MULTI_NODE: "SAP_HANA_MULTI_NODE",
  SAP_HANA_SINGLE_NODE: "SAP_HANA_SINGLE_NODE",
  SAP_NETWEAVER_DISTRIBUTED: "SAP_NETWEAVER_DISTRIBUTED",
  SAP_NETWEAVER_HIGH_AVAILABILITY: "SAP_NETWEAVER_HIGH_AVAILABILITY",
  SAP_NETWEAVER_STANDARD: "SAP_NETWEAVER_STANDARD",
  SHAREPOINT: "SHAREPOINT",
  SQL_SERVER: "SQL_SERVER",
  SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP: "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP",
  SQL_SERVER_FAILOVER_CLUSTER_INSTANCE: "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE",
} as const;
/**
 * @public
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

/**
 * @public
 * @enum
 */
export const OsType = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type OsType = (typeof OsType)[keyof typeof OsType];

/**
 * @public
 * @enum
 */
export const DiscoveryType = {
  ACCOUNT_BASED: "ACCOUNT_BASED",
  RESOURCE_GROUP_BASED: "RESOURCE_GROUP_BASED",
} as const;
/**
 * @public
 */
export type DiscoveryType = (typeof DiscoveryType)[keyof typeof DiscoveryType];

/**
 * @public
 * @enum
 */
export const CloudWatchEventSource = {
  CODE_DEPLOY: "CODE_DEPLOY",
  EC2: "EC2",
  HEALTH: "HEALTH",
  RDS: "RDS",
} as const;
/**
 * @public
 */
export type CloudWatchEventSource = (typeof CloudWatchEventSource)[keyof typeof CloudWatchEventSource];

/**
 * @public
 * @enum
 */
export const ConfigurationEventResourceType = {
  CLOUDFORMATION: "CLOUDFORMATION",
  CLOUDWATCH_ALARM: "CLOUDWATCH_ALARM",
  CLOUDWATCH_LOG: "CLOUDWATCH_LOG",
  SSM_ASSOCIATION: "SSM_ASSOCIATION",
} as const;
/**
 * @public
 */
export type ConfigurationEventResourceType =
  (typeof ConfigurationEventResourceType)[keyof typeof ConfigurationEventResourceType];

/**
 * @public
 * @enum
 */
export const ConfigurationEventStatus = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type ConfigurationEventStatus = (typeof ConfigurationEventStatus)[keyof typeof ConfigurationEventStatus];

/**
 * @public
 * @enum
 */
export const GroupingType = {
  ACCOUNT_BASED: "ACCOUNT_BASED",
} as const;
/**
 * @public
 */
export type GroupingType = (typeof GroupingType)[keyof typeof GroupingType];

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  ALL: "ALL",
  INFRA_ONLY: "INFRA_ONLY",
  WORKLOAD_ONLY: "WORKLOAD_ONLY",
} as const;
/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * @enum
 */
export const LogFilter = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type LogFilter = (typeof LogFilter)[keyof typeof LogFilter];

/**
 * @public
 * @enum
 */
export const FeedbackKey = {
  INSIGHTS_FEEDBACK: "INSIGHTS_FEEDBACK",
} as const;
/**
 * @public
 */
export type FeedbackKey = (typeof FeedbackKey)[keyof typeof FeedbackKey];

/**
 * @public
 * @enum
 */
export const FeedbackValue = {
  NOT_SPECIFIED: "NOT_SPECIFIED",
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;
/**
 * @public
 */
export type FeedbackValue = (typeof FeedbackValue)[keyof typeof FeedbackValue];

/**
 * @public
 * @enum
 */
export const ResolutionMethod = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
  UNRESOLVED: "UNRESOLVED",
} as const;
/**
 * @public
 */
export type ResolutionMethod = (typeof ResolutionMethod)[keyof typeof ResolutionMethod];

/**
 * @public
 * @enum
 */
export const SeverityLevel = {
  High: "High",
  Informative: "Informative",
  Low: "Low",
  Medium: "Medium",
} as const;
/**
 * @public
 */
export type SeverityLevel = (typeof SeverityLevel)[keyof typeof SeverityLevel];

/**
 * @public
 * @enum
 */
export const Status = {
  IGNORE: "IGNORE",
  PENDING: "PENDING",
  RECOVERING: "RECOVERING",
  RECURRING: "RECURRING",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const Visibility = {
  IGNORED: "IGNORED",
  VISIBLE: "VISIBLE",
} as const;
/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];
