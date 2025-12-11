// smithy-typescript generated code
import {
  IcebergCompactionStrategy,
  JobStatus,
  MaintenanceStatus,
  OpenTableFormat,
  ReplicationStatus,
  SSEAlgorithm,
  StorageClass,
  TableBucketMaintenanceType,
  TableBucketType,
  TableMaintenanceJobType,
  TableMaintenanceType,
  TableRecordExpirationJobStatus,
  TableRecordExpirationStatus,
  TableType,
} from "./enums";

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket to create the namespace in.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>A name for the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;
}

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket the namespace was created in.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;
}

/**
 * <p>Configuration specifying how data should be encrypted. This structure defines the encryption algorithm and optional KMS key to be used for server-side encryption.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The server-side encryption algorithm to use. Valid values are <code>AES256</code> for S3-managed encryption keys, or <code>aws:kms</code> for Amazon Web Services KMS-managed encryption keys. If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html">Permissions requirements for S3 Tables SSE-KMS encryption</a>.</p>
   * @public
   */
  sseAlgorithm: SSEAlgorithm | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use for encryption. This field is required only when <code>sseAlgorithm</code> is set to <code>aws:kms</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Contains details about a schema field.</p>
 * @public
 */
export interface SchemaField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The field type. S3 Tables supports all Apache Iceberg primitive types. For more information, see the <a href="https://iceberg.apache.org/spec/#primitive-types">Apache Iceberg documentation</a>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>A Boolean value that specifies whether values are required for each row in this field. By default, this is <code>false</code> and null values are allowed in the field. If this is <code>true</code> the field does not allow null values.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * <p>Contains details about the schema for an Iceberg table.</p>
 * @public
 */
export interface IcebergSchema {
  /**
   * <p>The schema fields for the table</p>
   * @public
   */
  fields: SchemaField[] | undefined;
}

/**
 * <p>Contains details about the metadata for an Iceberg table.</p>
 * @public
 */
export interface IcebergMetadata {
  /**
   * <p>The schema for an Iceberg table.</p>
   * @public
   */
  schema: IcebergSchema | undefined;

  /**
   * <p>Contains configuration properties for an Iceberg table.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;
}

/**
 * <p>Contains details about the table metadata.</p>
 * @public
 */
export type TableMetadata = TableMetadata.IcebergMember | TableMetadata.$UnknownMember;

/**
 * @public
 */
export namespace TableMetadata {
  /**
   * <p>Contains details about the metadata of an Iceberg table.</p>
   * @public
   */
  export interface IcebergMember {
    iceberg: IcebergMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    iceberg?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    iceberg: (value: IcebergMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration details for the storage class of tables or table buckets. This allows you to optimize storage costs by selecting the appropriate storage class based on your access patterns and performance requirements.</p>
 * @public
 */
export interface StorageClassConfiguration {
  /**
   * <p>The storage class for the table or table bucket. Valid values include storage classes optimized for different access patterns and cost profiles.</p>
   * @public
   */
  storageClass: StorageClass | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket to create the table in.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace to associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name for the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The format for the table.</p>
   * @public
   */
  format: OpenTableFormat | undefined;

  /**
   * <p>The metadata for the table.</p>
   * @public
   */
  metadata?: TableMetadata | undefined;

  /**
   * <p>The encryption configuration to use for the table. This configuration specifies the encryption algorithm and, if using SSE-KMS, the KMS key to use for encrypting the table. </p> <note> <p>If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html">Permissions requirements for S3 Tables SSE-KMS encryption</a>.</p> </note>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The storage class configuration for the table. If not specified, the table inherits the storage class configuration from its table bucket. Specify this parameter to override the bucket's default storage class for this table.</p>
   * @public
   */
  storageClassConfiguration?: StorageClassConfiguration | undefined;

  /**
   * <p>A map of user-defined tags that you would like to apply to the table that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize, track costs for, and control access to resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p> <note> <p>You must have the <code>s3tables:TagResource</code> permission in addition to <code>s3tables:CreateTable</code> permission to create a table with tags.</p> </note>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken: string | undefined;
}

/**
 * @public
 */
export interface CreateTableBucketRequest {
  /**
   * <p>The name for the table bucket.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The encryption configuration to use for the table bucket. This configuration specifies the default encryption settings that will be applied to all tables created in this bucket unless overridden at the table level. The configuration includes the encryption algorithm and, if using SSE-KMS, the KMS key to use.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The default storage class configuration for the table bucket. This configuration will be applied to all new tables created in this bucket unless overridden at the table level. If not specified, the service default storage class will be used.</p>
   * @public
   */
  storageClassConfiguration?: StorageClassConfiguration | undefined;

  /**
   * <p>A map of user-defined tags that you would like to apply to the table bucket that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize and control access to resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p> <note> <p>You must have the <code>s3tables:TagResource</code> permission in addition to <code>s3tables:CreateTableBucket</code> permisson to create a table bucket with tags.</p> </note>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTableBucketResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the namespace.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketEncryptionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketMetricsConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketReplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>A version token from a previous GetTableBucketReplication call. Use this token to ensure you're deleting the expected version of the configuration.</p>
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTablePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table. </p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The table name.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableReplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableArn: string | undefined;

  /**
   * <p>A version token from a previous GetTableReplication call. Use this token to ensure you're deleting the expected version of the configuration.</p>
   * @public
   */
  versionToken: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceResponse {
  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The date and time the namespace was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the account that created the namespace.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The ID of the account that owns the namespcace.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The unique identifier of the namespace.</p>
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * <p>The unique identifier of the table bucket containing this namespace.</p>
   * @public
   */
  tableBucketId?: string | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the table.</p>
   * @public
   */
  tableBucketARN?: string | undefined;

  /**
   * <p>The name of the namespace the table is associated with.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableArn?: string | undefined;
}

/**
 * <p>Contains information about the source of a replicated table.</p>
 * @public
 */
export interface ReplicationInformation {
  /**
   * <p>The Amazon Resource Name (ARN) of the source table from which this table is replicated.</p>
   * @public
   */
  sourceTableARN: string | undefined;
}

/**
 * <p>Contains information about tables that are managed by S3 Tables, including replication information for replica tables.</p>
 * @public
 */
export interface ManagedTableInformation {
  /**
   * <p>If this table is a replica, contains information about the source table from which it is replicated.</p>
   * @public
   */
  replicationInformation?: ReplicationInformation | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the table.</p>
   * @public
   */
  type: TableType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The unique identifier of the namespace containing this table.</p>
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The metadata location of the table.</p>
   * @public
   */
  metadataLocation?: string | undefined;

  /**
   * <p>The warehouse location of the table.</p>
   * @public
   */
  warehouseLocation: string | undefined;

  /**
   * <p>The date and time the table bucket was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the account that created the table.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The service that manages the table.</p>
   * @public
   */
  managedByService?: string | undefined;

  /**
   * <p>The date and time the table was last modified on.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The ID of the account that last modified the table.</p>
   * @public
   */
  modifiedBy: string | undefined;

  /**
   * <p>The ID of the account that owns the table.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The format of the table.</p>
   * @public
   */
  format: OpenTableFormat | undefined;

  /**
   * <p>The unique identifier of the table bucket containing this table.</p>
   * @public
   */
  tableBucketId?: string | undefined;

  /**
   * <p>If this table is managed by S3 Tables, contains additional information such as replication details.</p>
   * @public
   */
  managedTableInformation?: ManagedTableInformation | undefined;
}

/**
 * @public
 */
export interface GetTableBucketRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the table bucket</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the account that owns the table bucket.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The date and time the table bucket was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The unique identifier of the table bucket.</p>
   * @public
   */
  tableBucketId?: string | undefined;

  /**
   * <p>The type of the table bucket.</p>
   * @public
   */
  type?: TableBucketType | undefined;
}

/**
 * @public
 */
export interface GetTableBucketEncryptionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketEncryptionResponse {
  /**
   * <p>The encryption configuration for the table bucket.</p>
   * @public
   */
  encryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * <p>Contains details about the unreferenced file removal settings for an Iceberg table bucket.</p>
 * @public
 */
export interface IcebergUnreferencedFileRemovalSettings {
  /**
   * <p>The number of days an object has to be unreferenced before it is marked as non-current.</p>
   * @public
   */
  unreferencedDays?: number | undefined;

  /**
   * <p>The number of days an object has to be non-current before it is deleted.</p>
   * @public
   */
  nonCurrentDays?: number | undefined;
}

/**
 * <p>Contains details about the maintenance settings for the table bucket.</p>
 * @public
 */
export type TableBucketMaintenanceSettings =
  | TableBucketMaintenanceSettings.IcebergUnreferencedFileRemovalMember
  | TableBucketMaintenanceSettings.$UnknownMember;

/**
 * @public
 */
export namespace TableBucketMaintenanceSettings {
  /**
   * <p>The unreferenced file removal settings for the table bucket.</p>
   * @public
   */
  export interface IcebergUnreferencedFileRemovalMember {
    icebergUnreferencedFileRemoval: IcebergUnreferencedFileRemovalSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    icebergUnreferencedFileRemoval?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    icebergUnreferencedFileRemoval: (value: IcebergUnreferencedFileRemovalSettings) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Details about the values that define the maintenance configuration for a table bucket.</p>
 * @public
 */
export interface TableBucketMaintenanceConfigurationValue {
  /**
   * <p>The status of the maintenance configuration.</p>
   * @public
   */
  status?: MaintenanceStatus | undefined;

  /**
   * <p>Contains details about the settings of the maintenance configuration.</p>
   * @public
   */
  settings?: TableBucketMaintenanceSettings | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMaintenanceConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>Details about the maintenance configuration for the table bucket.</p>
   * @public
   */
  configuration: Partial<Record<TableBucketMaintenanceType, TableBucketMaintenanceConfigurationValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMetricsConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMetricsConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The unique identifier of the metrics configuration.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketPolicyResponse {
  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketReplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * <p>Specifies a destination table bucket for replication.</p>
 * @public
 */
export interface ReplicationDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination table bucket where tables will be replicated.</p>
   * @public
   */
  destinationTableBucketARN: string | undefined;
}

/**
 * <p>Defines a rule for replicating tables from a source table bucket to one or more destination table buckets.</p>
 * @public
 */
export interface TableBucketReplicationRule {
  /**
   * <p>An array of destination table buckets where tables should be replicated.</p>
   * @public
   */
  destinations: ReplicationDestination[] | undefined;
}

/**
 * <p>The replication configuration for a table bucket. This configuration defines how tables in the source bucket are replicated to destination table buckets, including the IAM role used for replication.</p>
 * @public
 */
export interface TableBucketReplicationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that S3 Tables assumes to replicate tables on your behalf.</p>
   * @public
   */
  role: string | undefined;

  /**
   * <p>An array of replication rules that define which tables to replicate and where to replicate them.</p>
   * @public
   */
  rules: TableBucketReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetTableBucketReplicationResponse {
  /**
   * <p>A version token that represents the current state of the replication configuration. Use this token when updating the configuration to ensure consistency.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The replication configuration for the table bucket, including the IAM role and replication rules.</p>
   * @public
   */
  configuration: TableBucketReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableBucketStorageClassRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketStorageClassResponse {
  /**
   * <p>The storage class configuration for the table bucket.</p>
   * @public
   */
  storageClassConfiguration: StorageClassConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableEncryptionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket containing the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTableEncryptionResponse {
  /**
   * <p>The encryption configuration for the table.</p>
   * @public
   */
  encryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Contains details about the compaction settings for an Iceberg table.</p>
 * @public
 */
export interface IcebergCompactionSettings {
  /**
   * <p>The target file size for the table in MB.</p>
   * @public
   */
  targetFileSizeMB?: number | undefined;

  /**
   * <p>The compaction strategy to use for the table. This determines how files are selected and combined during compaction operations.</p>
   * @public
   */
  strategy?: IcebergCompactionStrategy | undefined;
}

/**
 * <p>Contains details about the snapshot management settings for an Iceberg table. The oldest snapshot expires when its age exceeds the <code>maxSnapshotAgeHours</code> and the total number of snapshots exceeds the value for the minimum number of snapshots to keep <code>minSnapshotsToKeep</code>.</p>
 * @public
 */
export interface IcebergSnapshotManagementSettings {
  /**
   * <p>The minimum number of snapshots to keep.</p>
   * @public
   */
  minSnapshotsToKeep?: number | undefined;

  /**
   * <p>The maximum age of a snapshot before it can be expired.</p>
   * @public
   */
  maxSnapshotAgeHours?: number | undefined;
}

/**
 * <p>Contains details about maintenance settings for the table.</p>
 * @public
 */
export type TableMaintenanceSettings =
  | TableMaintenanceSettings.IcebergCompactionMember
  | TableMaintenanceSettings.IcebergSnapshotManagementMember
  | TableMaintenanceSettings.$UnknownMember;

/**
 * @public
 */
export namespace TableMaintenanceSettings {
  /**
   * <p>Contains details about the Iceberg compaction settings for the table.</p>
   * @public
   */
  export interface IcebergCompactionMember {
    icebergCompaction: IcebergCompactionSettings;
    icebergSnapshotManagement?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains details about the Iceberg snapshot management settings for the table.</p>
   * @public
   */
  export interface IcebergSnapshotManagementMember {
    icebergCompaction?: never;
    icebergSnapshotManagement: IcebergSnapshotManagementSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    icebergCompaction?: never;
    icebergSnapshotManagement?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    icebergCompaction: (value: IcebergCompactionSettings) => T;
    icebergSnapshotManagement: (value: IcebergSnapshotManagementSettings) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The values that define a maintenance configuration for a table.</p>
 * @public
 */
export interface TableMaintenanceConfigurationValue {
  /**
   * <p>The status of the maintenance configuration.</p>
   * @public
   */
  status?: MaintenanceStatus | undefined;

  /**
   * <p>Contains details about the settings for the maintenance configuration.</p>
   * @public
   */
  settings?: TableMaintenanceSettings | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>Details about the maintenance configuration for the table bucket.</p>
   * @public
   */
  configuration: Partial<Record<TableMaintenanceType, TableMaintenanceConfigurationValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceJobStatusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace the table is associated with. </p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table containing the maintenance job status you want to check.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Details about the status of a maintenance job.</p>
 * @public
 */
export interface TableMaintenanceJobStatusValue {
  /**
   * <p>The status of the job.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The date and time that the maintenance job was last run.</p>
   * @public
   */
  lastRunTimestamp?: Date | undefined;

  /**
   * <p>The failure message of a failed job.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceJobStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The status of the maintenance job.</p>
   * @public
   */
  status: Partial<Record<TableMaintenanceJobType, TableMaintenanceJobStatusValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataLocationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataLocationResponse {
  /**
   * <p>The version token.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The metadata location.</p>
   * @public
   */
  metadataLocation?: string | undefined;

  /**
   * <p>The warehouse location.</p>
   * @public
   */
  warehouseLocation: string | undefined;
}

/**
 * @public
 */
export interface GetTablePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTablePolicyResponse {
  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableArn: string | undefined;
}

/**
 * <p>The record expiration setting that specifies when records expire and are automatically removed from a table.</p>
 * @public
 */
export interface TableRecordExpirationSettings {
  /**
   * <p>If you enable record expiration for a table, you can specify the number of days to retain your table records. For example, to retain your table records for one year, set this value to <code>365</code>.</p>
   * @public
   */
  days?: number | undefined;
}

/**
 * <p>The expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is enabled, records expire and are automatically removed after the number of days specified in the record expiration settings for the table.</p>
 * @public
 */
export interface TableRecordExpirationConfigurationValue {
  /**
   * <p>The status of the expiration settings for records in the table.</p>
   * @public
   */
  status?: TableRecordExpirationStatus | undefined;

  /**
   * <p>The expiration settings for records in the table.</p>
   * @public
   */
  settings?: TableRecordExpirationSettings | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationConfigurationResponse {
  /**
   * <p>The record expiration configuration for the table, including the status and retention settings.</p>
   * @public
   */
  configuration: TableRecordExpirationConfigurationValue | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationJobStatusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableArn: string | undefined;
}

/**
 * <p>Provides metrics for the record expiration job that most recently ran for a table. The metrics provide insight into the amount of data that was removed when the job ran.</p>
 * @public
 */
export interface TableRecordExpirationJobMetrics {
  /**
   * <p>The total number of data files that were removed when the job ran.</p>
   * @public
   */
  deletedDataFiles?: number | undefined;

  /**
   * <p>The total number of records that were removed when the job ran.</p>
   * @public
   */
  deletedRecords?: number | undefined;

  /**
   * <p>The total size (in bytes) of the data files that were removed when the job ran.</p>
   * @public
   */
  removedFilesSize?: number | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationJobStatusResponse {
  /**
   * <p>The current status of the most recent expiration job.</p>
   * @public
   */
  status: TableRecordExpirationJobStatus | undefined;

  /**
   * <p>The timestamp when the expiration job was last executed.</p>
   * @public
   */
  lastRunTimestamp?: Date | undefined;

  /**
   * <p>If the job failed, this field contains an error message describing the failure reason.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>Metrics about the most recent expiration job execution, including the number of records and files deleted.</p>
   * @public
   */
  metrics?: TableRecordExpirationJobMetrics | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableArn: string | undefined;
}

/**
 * <p>Defines a rule for replicating a table to one or more destination tables.</p>
 * @public
 */
export interface TableReplicationRule {
  /**
   * <p>An array of destination table buckets where this table should be replicated.</p>
   * @public
   */
  destinations: ReplicationDestination[] | undefined;
}

/**
 * <p>The replication configuration for an individual table. This configuration defines how the table is replicated to destination tables.</p>
 * @public
 */
export interface TableReplicationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that S3 Tables assumes to replicate the table on your behalf.</p>
   * @public
   */
  role: string | undefined;

  /**
   * <p>An array of replication rules that define where this table should be replicated.</p>
   * @public
   */
  rules: TableReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationResponse {
  /**
   * <p>A version token that represents the current state of the table's replication configuration. Use this token when updating the configuration to ensure consistency.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The replication configuration for the table, including the IAM role and replication rules.</p>
   * @public
   */
  configuration: TableReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationStatusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableArn: string | undefined;
}

/**
 * <p>Contains information about the most recent successful replication update to a destination.</p>
 * @public
 */
export interface LastSuccessfulReplicatedUpdate {
  /**
   * <p>The S3 location of the metadata that was successfully replicated.</p>
   * @public
   */
  metadataLocation: string | undefined;

  /**
   * <p>The timestamp when the replication update completed successfully.</p>
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * <p>Contains status information for a replication destination, including the current replication state, last successful update, and any error messages.</p>
 * @public
 */
export interface ReplicationDestinationStatusModel {
  /**
   * <p>The current status of replication to this destination.</p>
   * @public
   */
  replicationStatus: ReplicationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination table bucket.</p>
   * @public
   */
  destinationTableBucketArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination table.</p>
   * @public
   */
  destinationTableArn?: string | undefined;

  /**
   * <p>Information about the most recent successful replication update to this destination.</p>
   * @public
   */
  lastSuccessfulReplicatedUpdate?: LastSuccessfulReplicatedUpdate | undefined;

  /**
   * <p>If replication has failed, this field contains an error message describing the failure reason.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the source table being replicated.</p>
   * @public
   */
  sourceTableArn: string | undefined;

  /**
   * <p>An array of status information for each replication destination, including the current state, last successful update, and any error messages.</p>
   * @public
   */
  destinations: ReplicationDestinationStatusModel[] | undefined;
}

/**
 * @public
 */
export interface GetTableStorageClassRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTableStorageClassResponse {
  /**
   * <p>The storage class configuration for the table.</p>
   * @public
   */
  storageClassConfiguration: StorageClassConfiguration | undefined;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The prefix of the namespaces.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p> <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real key. You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The maximum number of namespaces to return in the list.</p>
   * @public
   */
  maxNamespaces?: number | undefined;
}

/**
 * <p>Contains details about a namespace.</p>
 * @public
 */
export interface NamespaceSummary {
  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The date and time the namespace was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the account that created the namespace.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The ID of the account that owns the namespace.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The system-assigned unique identifier for the namespace.</p>
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * <p>The system-assigned unique identifier for the table bucket that contains this namespace.</p>
   * @public
   */
  tableBucketId?: string | undefined;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * <p>A list of namespaces.</p>
   * @public
   */
  namespaces: NamespaceSummary[] | undefined;

  /**
   * <p>The <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableBucketsRequest {
  /**
   * <p>The prefix of the table buckets.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p> <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real key. You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The maximum number of table buckets to return in the list.</p>
   * @public
   */
  maxBuckets?: number | undefined;

  /**
   * <p>The type of table buckets to filter by in the list.</p>
   * @public
   */
  type?: TableBucketType | undefined;
}

/**
 * <p>Contains details about a table bucket.</p>
 * @public
 */
export interface TableBucketSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the table bucket.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the account that owns the table bucket.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The date and time the table bucket was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The system-assigned unique identifier for the table bucket.</p>
   * @public
   */
  tableBucketId?: string | undefined;

  /**
   * <p>The type of the table bucket.</p>
   * @public
   */
  type?: TableBucketType | undefined;
}

/**
 * @public
 */
export interface ListTableBucketsResponse {
  /**
   * <p>A list of table buckets.</p>
   * @public
   */
  tableBuckets: TableBucketSummary[] | undefined;

  /**
   * <p>You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * <p>The Amazon resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the tables.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The prefix of the tables.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p> <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real key. You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The maximum number of tables to return.</p>
   * @public
   */
  maxTables?: number | undefined;
}

/**
 * <p>Contains details about a table.</p>
 * @public
 */
export interface TableSummary {
  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the table.</p>
   * @public
   */
  type: TableType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The date and time the table was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the table was last modified at.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The Amazon Web Services service managing this table, if applicable. For example, a replicated table is managed by the S3 Tables replication service.</p>
   * @public
   */
  managedByService?: string | undefined;

  /**
   * <p>The unique identifier for the namespace that contains this table.</p>
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * <p>The unique identifier for the table bucket that contains this table.</p>
   * @public
   */
  tableBucketId?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * <p>A list of tables.</p>
   * @public
   */
  tables: TableSummary[] | undefined;

  /**
   * <p>You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you want to list tags for. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html#manage-tags">Managing tags for Amazon S3 resources</a>.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The user-defined tags that are applied to the resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutTableBucketEncryptionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The encryption configuration to apply to the table bucket.</p>
   * @public
   */
  encryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableBucketMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The type of the maintenance configuration.</p>
   * @public
   */
  type: TableBucketMaintenanceType | undefined;

  /**
   * <p>Defines the values of the maintenance configuration for the table bucket.</p>
   * @public
   */
  value: TableBucketMaintenanceConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTableBucketMetricsConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface PutTableBucketPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutTableBucketReplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>A version token from a previous GetTableBucketReplication call. Use this token to ensure you're updating the expected version of the configuration.</p>
   * @public
   */
  versionToken?: string | undefined;

  /**
   * <p>The replication configuration to apply, including the IAM role and replication rules.</p>
   * @public
   */
  configuration: TableBucketReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableBucketReplicationResponse {
  /**
   * <p>A new version token representing the updated replication configuration.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The status of the replication configuration operation.</p>
   * @public
   */
  status: string | undefined;
}

/**
 * @public
 */
export interface PutTableBucketStorageClassRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The storage class configuration to apply to the table bucket. This configuration will serve as the default for new tables created in this bucket.</p>
   * @public
   */
  storageClassConfiguration: StorageClassConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table associated with the maintenance configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the maintenance configuration.</p>
   * @public
   */
  type: TableMaintenanceType | undefined;

  /**
   * <p>Defines the values of the maintenance configuration for the table.</p>
   * @public
   */
  value: TableMaintenanceConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTablePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutTableRecordExpirationConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableArn: string | undefined;

  /**
   * <p>The record expiration configuration to apply to the table, including the status (<code>enabled</code> or <code>disabled</code>) and retention period in days.</p>
   * @public
   */
  value: TableRecordExpirationConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTableReplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source table.</p>
   * @public
   */
  tableArn: string | undefined;

  /**
   * <p>A version token from a previous GetTableReplication call. Use this token to ensure you're updating the expected version of the configuration.</p>
   * @public
   */
  versionToken?: string | undefined;

  /**
   * <p>The replication configuration to apply to the table, including the IAM role and replication rules.</p>
   * @public
   */
  configuration: TableReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableReplicationResponse {
  /**
   * <p>A new version token representing the updated replication configuration.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The status of the replication configuration operation.</p>
   * @public
   */
  status: string | undefined;
}

/**
 * @public
 */
export interface RenameTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket. </p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table. </p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The current name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new name for the namespace.</p>
   * @public
   */
  newNamespaceName?: string | undefined;

  /**
   * <p>The new name for the table.</p>
   * @public
   */
  newName?: string | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableMetadataLocationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket. </p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version token of the table. </p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The new metadata location for the table. </p>
   * @public
   */
  metadataLocation: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableMetadataLocationResponse {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The namespace the table is associated with.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The metadata location of the table.</p>
   * @public
   */
  metadataLocation: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you're applying tags to. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html#manage-tags">Managing tags for Amazon S3 resources</a>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The user-defined tag that you want to add to the specified S3 Tables resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you're removing tags from. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html#manage-tags">Managing tags for Amazon S3 resources</a>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The array of tag keys that you're removing from the S3 Tables resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
