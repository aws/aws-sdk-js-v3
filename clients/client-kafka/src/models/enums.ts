// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ChannelDestinationType = {
  ICEBERG: "ICEBERG",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ChannelDestinationType = (typeof ChannelDestinationType)[keyof typeof ChannelDestinationType];

/**
 * @public
 * @enum
 */
export const ChannelStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus];

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
export const PartitionStrategy = {
  TIME_HOUR: "TIME_HOUR",
} as const;
/**
 * @public
 */
export type PartitionStrategy = (typeof PartitionStrategy)[keyof typeof PartitionStrategy];

/**
 * @public
 * @enum
 */
export const KafkaClusterSaslScramMechanism = {
  SHA256: "SHA256",
  SHA512: "SHA512",
} as const;
/**
 * @public
 */
export type KafkaClusterSaslScramMechanism =
  (typeof KafkaClusterSaslScramMechanism)[keyof typeof KafkaClusterSaslScramMechanism];

/**
 * @public
 * @enum
 */
export const KafkaClusterEncryptionInTransitType = {
  TLS: "TLS",
} as const;
/**
 * @public
 */
export type KafkaClusterEncryptionInTransitType =
  (typeof KafkaClusterEncryptionInTransitType)[keyof typeof KafkaClusterEncryptionInTransitType];

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
export const ConsumerGroupOffsetSyncMode = {
  ENHANCED: "ENHANCED",
  LEGACY: "LEGACY",
} as const;
/**
 * @public
 */
export type ConsumerGroupOffsetSyncMode =
  (typeof ConsumerGroupOffsetSyncMode)[keyof typeof ConsumerGroupOffsetSyncMode];

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
export const ValueConverter = {
  BYTE_ARRAY: "BYTE_ARRAY",
  JSON: "JSON",
  JSON_SCHEMA_GSR: "JSON_SCHEMA_GSR",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type ValueConverter = (typeof ValueConverter)[keyof typeof ValueConverter];

/**
 * @public
 * @enum
 */
export const IcebergCompressionType = {
  SNAPPY: "SNAPPY",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type IcebergCompressionType = (typeof IcebergCompressionType)[keyof typeof IcebergCompressionType];

/**
 * @public
 * @enum
 */
export const S3CompressionType = {
  GZIP: "GZIP",
  NONE: "NONE",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type S3CompressionType = (typeof S3CompressionType)[keyof typeof S3CompressionType];

/**
 * @public
 * @enum
 */
export const S3StorageClass = {
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type S3StorageClass = (typeof S3StorageClass)[keyof typeof S3StorageClass];

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
