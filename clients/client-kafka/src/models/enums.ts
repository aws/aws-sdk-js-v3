// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const VpcConnectionState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DEACTIVATING: "DEACTIVATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
} as const;
/**
 * @public
 */
export type VpcConnectionState = (typeof VpcConnectionState)[keyof typeof VpcConnectionState];

/**
 * @public
 * @enum
 */
export const ClusterType = {
  PROVISIONED: "PROVISIONED",
  SERVERLESS: "SERVERLESS",
} as const;
/**
 * @public
 */
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

/**
 * @public
 * @enum
 */
export const BrokerAZDistribution = {
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type BrokerAZDistribution = (typeof BrokerAZDistribution)[keyof typeof BrokerAZDistribution];

/**
 * @public
 * @enum
 */
export const CustomerActionStatus = {
  ACTION_RECOMMENDED: "ACTION_RECOMMENDED",
  CRITICAL_ACTION_REQUIRED: "CRITICAL_ACTION_REQUIRED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type CustomerActionStatus = (typeof CustomerActionStatus)[keyof typeof CustomerActionStatus];

/**
 * @public
 * @enum
 */
export const ClientBroker = {
  PLAINTEXT: "PLAINTEXT",
  TLS: "TLS",
  TLS_PLAINTEXT: "TLS_PLAINTEXT",
} as const;
/**
 * @public
 */
export type ClientBroker = (typeof ClientBroker)[keyof typeof ClientBroker];

/**
 * @public
 * @enum
 */
export const EnhancedMonitoring = {
  DEFAULT: "DEFAULT",
  PER_BROKER: "PER_BROKER",
  PER_TOPIC_PER_BROKER: "PER_TOPIC_PER_BROKER",
  PER_TOPIC_PER_PARTITION: "PER_TOPIC_PER_PARTITION",
} as const;
/**
 * @public
 */
export type EnhancedMonitoring = (typeof EnhancedMonitoring)[keyof typeof EnhancedMonitoring];

/**
 * @public
 * @enum
 */
export const RebalancingStatus = {
  ACTIVE: "ACTIVE",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type RebalancingStatus = (typeof RebalancingStatus)[keyof typeof RebalancingStatus];

/**
 * @public
 * @enum
 */
export const StorageMode = {
  LOCAL: "LOCAL",
  TIERED: "TIERED",
} as const;
/**
 * @public
 */
export type StorageMode = (typeof StorageMode)[keyof typeof StorageMode];

/**
 * @public
 * @enum
 */
export const ClusterState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  HEALING: "HEALING",
  MAINTENANCE: "MAINTENANCE",
  REBOOTING_BROKER: "REBOOTING_BROKER",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * @public
 * @enum
 */
export const UserIdentityType = {
  AWSACCOUNT: "AWSACCOUNT",
  AWSSERVICE: "AWSSERVICE",
} as const;
/**
 * @public
 */
export type UserIdentityType = (typeof UserIdentityType)[keyof typeof UserIdentityType];

/**
 * @public
 * @enum
 */
export const ConfigurationState = {
  ACTIVE: "ACTIVE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

/**
 * @public
 * @enum
 */
export const KafkaVersionStatus = {
  ACTIVE: "ACTIVE",
  DEPRECATED: "DEPRECATED",
} as const;
/**
 * @public
 */
export type KafkaVersionStatus = (typeof KafkaVersionStatus)[keyof typeof KafkaVersionStatus];

/**
 * @public
 * @enum
 */
export const NodeType = {
  BROKER: "BROKER",
} as const;
/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * @enum
 */
export const TargetCompressionType = {
  GZIP: "GZIP",
  LZ4: "LZ4",
  NONE: "NONE",
  SNAPPY: "SNAPPY",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type TargetCompressionType = (typeof TargetCompressionType)[keyof typeof TargetCompressionType];

/**
 * @public
 * @enum
 */
export const ReplicationStartingPositionType = {
  EARLIEST: "EARLIEST",
  LATEST: "LATEST",
} as const;
/**
 * @public
 */
export type ReplicationStartingPositionType =
  (typeof ReplicationStartingPositionType)[keyof typeof ReplicationStartingPositionType];

/**
 * @public
 * @enum
 */
export const ReplicationTopicNameConfigurationType = {
  IDENTICAL: "IDENTICAL",
  PREFIXED_WITH_SOURCE_CLUSTER_ALIAS: "PREFIXED_WITH_SOURCE_CLUSTER_ALIAS",
} as const;
/**
 * @public
 */
export type ReplicationTopicNameConfigurationType =
  (typeof ReplicationTopicNameConfigurationType)[keyof typeof ReplicationTopicNameConfigurationType];

/**
 * @public
 * @enum
 */
export const ReplicatorState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ReplicatorState = (typeof ReplicatorState)[keyof typeof ReplicatorState];

/**
 * @public
 * @enum
 */
export const TopicState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type TopicState = (typeof TopicState)[keyof typeof TopicState];
