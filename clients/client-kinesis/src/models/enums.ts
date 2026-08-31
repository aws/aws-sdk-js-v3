// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ChannelStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
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
export const ChannelEncryptionType = {
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type ChannelEncryptionType = (typeof ChannelEncryptionType)[keyof typeof ChannelEncryptionType];

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
export const S3TablesCompressionType = {
  NONE: "NONE",
  SNAPPY: "SNAPPY",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type S3TablesCompressionType = (typeof S3TablesCompressionType)[keyof typeof S3TablesCompressionType];

/**
 * @public
 * @enum
 */
export const PartitionTransform = {
  TIME_HOUR: "TIME_HOUR",
} as const;
/**
 * @public
 */
export type PartitionTransform = (typeof PartitionTransform)[keyof typeof PartitionTransform];

/**
 * @public
 * @enum
 */
export const RecordFormatType = {
  BYTE_ARRAY: "BYTE_ARRAY",
  GSR_JSON: "GSR_JSON",
  JSON: "JSON",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type RecordFormatType = (typeof RecordFormatType)[keyof typeof RecordFormatType];

/**
 * @public
 * @enum
 */
export const ChannelDestinationType = {
  S3: "S3",
  S3_TABLES: "S3_TABLES",
} as const;
/**
 * @public
 */
export type ChannelDestinationType = (typeof ChannelDestinationType)[keyof typeof ChannelDestinationType];

/**
 * @public
 * @enum
 */
export const ConsumerStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ConsumerStatus = (typeof ConsumerStatus)[keyof typeof ConsumerStatus];

/**
 * @public
 * @enum
 */
export const StreamMode = {
  ON_DEMAND: "ON_DEMAND",
  PROVISIONED: "PROVISIONED",
} as const;
/**
 * @public
 */
export type StreamMode = (typeof StreamMode)[keyof typeof StreamMode];

/**
 * @public
 * @enum
 */
export const MinimumThroughputBillingCommitmentOutputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_UNTIL_EARLIEST_ALLOWED_END: "ENABLED_UNTIL_EARLIEST_ALLOWED_END",
} as const;
/**
 * @public
 */
export type MinimumThroughputBillingCommitmentOutputStatus =
  (typeof MinimumThroughputBillingCommitmentOutputStatus)[keyof typeof MinimumThroughputBillingCommitmentOutputStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const MetricsName = {
  ALL: "ALL",
  INCOMING_BYTES: "IncomingBytes",
  INCOMING_RECORDS: "IncomingRecords",
  ITERATOR_AGE_MILLISECONDS: "IteratorAgeMilliseconds",
  OUTGOING_BYTES: "OutgoingBytes",
  OUTGOING_RECORDS: "OutgoingRecords",
  READ_PROVISIONED_THROUGHPUT_EXCEEDED: "ReadProvisionedThroughputExceeded",
  WRITE_PROVISIONED_THROUGHPUT_EXCEEDED: "WriteProvisionedThroughputExceeded",
} as const;
/**
 * @public
 */
export type MetricsName = (typeof MetricsName)[keyof typeof MetricsName];

/**
 * @public
 * @enum
 */
export const StreamStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];

/**
 * @public
 * @enum
 */
export const ShardIteratorType = {
  AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER",
  AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER",
  AT_TIMESTAMP: "AT_TIMESTAMP",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type ShardIteratorType = (typeof ShardIteratorType)[keyof typeof ShardIteratorType];

/**
 * @public
 * @enum
 */
export const ShardFilterType = {
  AFTER_SHARD_ID: "AFTER_SHARD_ID",
  AT_LATEST: "AT_LATEST",
  AT_TIMESTAMP: "AT_TIMESTAMP",
  AT_TRIM_HORIZON: "AT_TRIM_HORIZON",
  FROM_TIMESTAMP: "FROM_TIMESTAMP",
  FROM_TRIM_HORIZON: "FROM_TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type ShardFilterType = (typeof ShardFilterType)[keyof typeof ShardFilterType];

/**
 * @public
 * @enum
 */
export const MinimumThroughputBillingCommitmentInputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MinimumThroughputBillingCommitmentInputStatus =
  (typeof MinimumThroughputBillingCommitmentInputStatus)[keyof typeof MinimumThroughputBillingCommitmentInputStatus];

/**
 * @public
 * @enum
 */
export const ScalingType = {
  UNIFORM_SCALING: "UNIFORM_SCALING",
} as const;
/**
 * @public
 */
export type ScalingType = (typeof ScalingType)[keyof typeof ScalingType];
