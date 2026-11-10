// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  CompressionCodec,
  DataFileFormat,
  FindingCategory,
  IcebergCompactionStrategy,
  IcebergNullOrder,
  IcebergSortDirection,
  IncompatibleValuesPolicy,
  JobStatus,
  MaintenanceStatus,
  MigrationFailureCode,
  MigrationRequestedState,
  MigrationSourceType,
  MigrationState,
  MigrationType,
  OpenTableFormat,
  PartitionDateSource,
  ReplicationStatus,
  SchemaV2FieldType,
  SSEAlgorithm,
  StorageClass,
  TableBucketMaintenanceType,
  TableBucketType,
  TableMaintenanceJobType,
  TableMaintenanceType,
  TableRecordExpirationJobStatus,
  TableRecordExpirationStatus,
  TableType,
  UnmatchedSourceFieldsPolicy,
} from "./enums";

/**
 * @public
 */
export interface CompleteTableMigrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the migrated table to complete the migration of.</p>
   * @public
   */
  tableARN: string | undefined;
}

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
 * <p>Defines a single partition field in an Iceberg partition specification.</p>
 * @public
 */
export interface IcebergPartitionField {
  /**
   * <p>The ID of the source schema field to partition by. This must reference a valid field ID from the table schema.</p>
   * @public
   */
  sourceId: number | undefined;

  /**
   * <p>The partition transform to apply to the source field. Supported transforms include <code>identity</code>, <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>bucket</code>, and <code>truncate</code>. For more information, see the <a href="https://iceberg.apache.org/spec/#partition-transforms">Apache Iceberg partition transforms documentation</a>.</p>
   * @public
   */
  transform: string | undefined;

  /**
   * <p>The name for this partition field. This name is used in the partitioned file paths.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional unique identifier for this partition field. If not specified, S3 Tables automatically assigns a field ID.</p>
   * @public
   */
  fieldId?: number | undefined;
}

/**
 * <p>Defines how data in an Iceberg table is partitioned. Partitioning helps optimize query performance by organizing data into separate files based on field values. Each partition field specifies a transform to apply to a source field.</p>
 * @public
 */
export interface IcebergPartitionSpec {
  /**
   * <p>The list of partition fields that define how the table data is partitioned. Each field specifies a source field and a transform to apply. This field is required if <code>partitionSpec</code> is provided.</p>
   * @public
   */
  fields: IcebergPartitionField[] | undefined;

  /**
   * <p>The unique identifier for this partition specification. If not specified, defaults to <code>0</code>.</p>
   * @public
   */
  specId?: number | undefined;
}

/**
 * <p>Contains details about a schema field.</p>
 * @public
 */
export interface SchemaField {
  /**
   * <p>An optional unique identifier for the schema field. Field IDs are used by Apache Iceberg to track schema evolution and maintain compatibility across schema changes. If not specified, S3 Tables automatically assigns field IDs.</p>
   * @public
   */
  id?: number | undefined;

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
 * <p>Contains details about a schema field in the V2 format. This field format supports nested and complex data types such as <code>struct</code>, <code>list</code>, and <code>map</code>, in addition to primitive types.</p>
 * @public
 */
export interface SchemaV2Field {
  /**
   * <p>The unique identifier for the schema field. Field IDs are used by Apache Iceberg to track schema evolution and maintain compatibility across schema changes.</p>
   * @public
   */
  id: number | undefined;

  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the field. This can be a primitive type string such as <code>boolean</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>string</code>, <code>binary</code>, <code>date</code>, <code>timestamp</code>, or <code>timestamptz</code>, or a complex type represented as a JSON object for nested types such as <code>struct</code>, <code>list</code>, or <code>map</code>. For more information, see the <a href="https://iceberg.apache.org/spec/#schemas-and-data-types">Apache Iceberg schemas and data types documentation</a>.</p>
   * @public
   */
  type: __DocumentType | undefined;

  /**
   * <p>A Boolean value that specifies whether values are required for each row in this field. If this is <code>true</code>, the field does not allow null values.</p>
   * @public
   */
  required: boolean | undefined;

  /**
   * <p>An optional description of the field.</p>
   * @public
   */
  doc?: string | undefined;
}

/**
 * <p>Contains details about the schema for an Iceberg table using the V2 format. This schema format supports nested and complex data types such as <code>struct</code>, <code>list</code>, and <code>map</code>, in addition to primitive types.</p>
 * @public
 */
export interface IcebergSchemaV2 {
  /**
   * <p>The type of the top-level schema, which is always a <code>struct</code> type as defined in the <a href="https://iceberg.apache.org/spec/#schemas-and-data-types">Apache Iceberg specification</a>. This value must be <code>struct</code>.</p>
   * @public
   */
  type: SchemaV2FieldType | undefined;

  /**
   * <p>The schema fields for the table. Each field defines a column in the table, including its name, type, and whether it is required.</p>
   * @public
   */
  fields: SchemaV2Field[] | undefined;

  /**
   * <p>An optional unique identifier for the schema. Schema IDs are used by Apache Iceberg to track schema evolution.</p>
   * @public
   */
  schemaId?: number | undefined;

  /**
   * <p>A list of field IDs that are used as the identifier fields for the table. Identifier fields uniquely identify a row in the table.</p>
   * @public
   */
  identifierFieldIds?: number[] | undefined;
}

/**
 * <p>Defines a single sort field in an Iceberg sort order specification.</p>
 * @public
 */
export interface IcebergSortField {
  /**
   * <p>The ID of the source schema field to sort by. This must reference a valid field ID from the table schema.</p>
   * @public
   */
  sourceId: number | undefined;

  /**
   * <p>The transform to apply to the source field before sorting. Use <code>identity</code> to sort by the field value directly, or specify other transforms as needed.</p>
   * @public
   */
  transform: string | undefined;

  /**
   * <p>The sort direction. Valid values are <code>asc</code> for ascending order or <code>desc</code> for descending order.</p>
   * @public
   */
  direction: IcebergSortDirection | undefined;

  /**
   * <p>Specifies how null values are ordered. Valid values are <code>nulls-first</code> to place nulls before non-null values, or <code>nulls-last</code> to place nulls after non-null values.</p>
   * @public
   */
  nullOrder: IcebergNullOrder | undefined;
}

/**
 * <p>Defines the sort order for data within an Iceberg table. Sorting data can improve query performance by enabling more efficient data skipping.</p>
 * @public
 */
export interface IcebergSortOrder {
  /**
   * <p>The unique identifier for this sort order. If not specified, defaults to <code>1</code>. The order ID is used by Apache Iceberg to track sort order evolution.</p>
   * @public
   */
  orderId: number | undefined;

  /**
   * <p>The list of sort fields that define how data is sorted within files. Each field specifies a source field, sort direction, and null ordering. This field is required if <code>writeOrder</code> is provided.</p>
   * @public
   */
  fields: IcebergSortField[] | undefined;
}

/**
 * <p>Contains details about the metadata for an Iceberg table.</p>
 * @public
 */
export interface IcebergMetadata {
  /**
   * <p>The schema for an Iceberg table. Use this property to define table schemas with primitive types only. For schemas that include nested or complex types such as <code>struct</code>, <code>list</code>, or <code>map</code>, use <code>schemaV2</code> instead.</p>
   * @public
   */
  schema?: IcebergSchema | undefined;

  /**
   * <p>The schema for an Iceberg table using the V2 format. Use this property to define table schemas that include nested or complex data types such as <code>struct</code>, <code>list</code>, or <code>map</code>, in addition to primitive types. For schemas with only primitive types, you can use either <code>schema</code> or <code>schemaV2</code>.</p>
   * @public
   */
  schemaV2?: IcebergSchemaV2 | undefined;

  /**
   * <p>The partition specification for the Iceberg table. Partitioning organizes data into separate files based on the values of one or more fields, which can improve query performance by reducing the amount of data scanned. Each partition field applies a transform (such as identity, year, month, or bucket) to a single field.</p>
   * @public
   */
  partitionSpec?: IcebergPartitionSpec | undefined;

  /**
   * <p>The sort order for the Iceberg table. Sort order defines how data is sorted within data files, which can improve query performance by enabling more efficient data skipping and filtering.</p>
   * @public
   */
  writeOrder?: IcebergSortOrder | undefined;

  /**
   * <p>A map of custom configuration properties for the Iceberg table.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;
}

/**
 * <p>Contains details about the table metadata.</p>
 * @public
 */
export type TableMetadata =
  | TableMetadata.IcebergMember
  | TableMetadata.$UnknownMember;

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
 * <p>The compaction settings that a migration applies to the destination table.</p>
 * @public
 */
export interface MigrationCompactionSettings {
  /**
   * <p>The target size, from 64 to 512 MB, of the data files that the migration writes, and of the files that compaction writes after you complete the migration. The default is 512.</p>
   * @public
   */
  targetFileSizeMB?: number | undefined;

  /**
   * <p>The compaction strategy. The only valid value is <code>binpack</code>, which is the default.</p>
   * @public
   */
  strategy?: IcebergCompactionStrategy | undefined;
}

/**
 * <p>The snapshot management settings that a migration applies to the destination table.</p>
 * @public
 */
export interface MigrationSnapshotManagementSettings {
  /**
   * <p>The minimum number of snapshots to keep. The value must be 3 or more. The default is 3.</p>
   * @public
   */
  minSnapshotsToKeep?: number | undefined;

  /**
   * <p>The maximum age, in hours, of a snapshot before it can be expired. The default is 120.</p>
   * @public
   */
  maxSnapshotAgeHours?: number | undefined;
}

/**
 * <p>The maintenance settings for the destination table. The migration applies them when it creates the table: snapshot management starts then, and compaction starts after you complete the migration. If you don't specify a setting, the migration uses its default: a target file size of 512 MB, the binpack compaction strategy, at least 3 snapshots, and a maximum snapshot age of 120 hours. Unreferenced file removal follows the table bucket's configuration after you complete the migration.</p>
 * @public
 */
export interface MaintenanceSettings {
  /**
   * <p>The compaction settings.</p>
   * @public
   */
  icebergCompaction?: MigrationCompactionSettings | undefined;

  /**
   * <p>The snapshot management settings.</p>
   * @public
   */
  icebergSnapshotManagement?: MigrationSnapshotManagementSettings | undefined;
}

/**
 * <p>The policies for source data that doesn't fit the destination schema.</p>
 * @public
 */
export interface MigrationPolicies {
  /**
   * <p>The migration policy for a source field that has no matching column in the destination schema. Valid values:</p> <ul> <li> <p> <code>fail</code> - Fails the migration. This is the default.</p> </li> <li> <p> <code>drop</code> - Leaves source columns that the destination schema doesn't have out of the destination table, and doesn't migrate source objects outside the Amazon Web Services Glue table's partition locations.</p> </li> </ul> <p>A destination schema that leaves out a partition column or a field of a struct column fails the migration under either value.</p>
   * @public
   */
  unmatchedSourceFieldsPolicy?: UnmatchedSourceFieldsPolicy | undefined;

  /**
   * <p>The migration policy for a source value that the destination column's type can't hold. Valid values:</p> <ul> <li> <p> <code>fail</code> - Fails the migration. This is the default.</p> </li> <li> <p> <code>setNull</code> - Writes null for a value that the destination column's type can't hold. If a column's type in a source object is incompatible with the destination column's type, the column is null for that whole object.</p> </li> </ul> <p>A required column, or a type that migration doesn't support, fails the migration under either value.</p>
   * @public
   */
  incompatibleValuesPolicy?: IncompatibleValuesPolicy | undefined;
}

/**
 * <p>The maintenance settings and migration policies for the destination table.</p>
 * @public
 */
export interface DataMigrationOverview {
  /**
   * <p>The maintenance settings for the destination table. The migration applies them when it creates the table: snapshot management starts then, and compaction starts after you complete the migration. If you don't specify a setting, the migration uses its default: a target file size of 512 MB, the binpack compaction strategy, at least 3 snapshots, and a maximum snapshot age of 120 hours. Unreferenced file removal follows the table bucket's configuration after you complete the migration.</p>
   * @public
   */
  maintenanceSettings: MaintenanceSettings | undefined;

  /**
   * <p>The policies for source data that doesn't fit the destination schema.</p>
   * @public
   */
  migrationPolicies: MigrationPolicies | undefined;
}

/**
 * <p>The maintenance settings and migration policies for the destination table.</p>
 * @public
 */
export interface DataMigrationSettings {
  /**
   * <p>The maintenance settings for the destination table. The migration applies them when it creates the table: snapshot management starts then, and compaction starts after you complete the migration. If you don't specify a setting, the migration uses its default: a target file size of 512 MB, the binpack compaction strategy, at least 3 snapshots, and a maximum snapshot age of 120 hours. Unreferenced file removal follows the table bucket's configuration after you complete the migration.</p>
   * @public
   */
  maintenanceSettings?: MaintenanceSettings | undefined;

  /**
   * <p>The policies for source data that doesn't fit the destination schema.</p>
   * @public
   */
  migrationPolicies?: MigrationPolicies | undefined;
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
 * <p>The properties of the data files that a migration writes. The migration also sets the compression codec and dictionary encoding as the destination table's write properties, so they remain the table's defaults after you complete the migration.</p>
 * @public
 */
export interface MigrationTableProperties {
  /**
   * <p>The file format of the data files. The only supported format is <code>parquet</code>, the default.</p>
   * @public
   */
  writeFormat?: DataFileFormat | undefined;

  /**
   * <p>The Iceberg format version of the destination table. Valid values are <code>2</code> and <code>3</code>. The default is <code>2</code>.</p>
   * @public
   */
  icebergFormatVersion?: number | undefined;

  /**
   * <p>The compression codec of the data files. The default is <code>zstd</code>.</p>
   * @public
   */
  compressionCodec?: CompressionCodec | undefined;

  /**
   * <p>Specifies whether the data files use dictionary encoding. The default is <code>true</code>.</p>
   * @public
   */
  dictionaryEncoding?: boolean | undefined;
}

/**
 * <p>The table that a migration creates in a table bucket and migrates the source into.</p>
 * @public
 */
export interface DestinationTable {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket to create the table in.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace to create the table in.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The encryption configuration for the table. If you don't specify one, the table uses the default encryption configuration of its table bucket. If you specify an encryption configuration, the migration role must have the <code>s3tables:PutTableEncryption</code> permission. If you choose SSE-KMS, the migration role must have the <code>kms:DescribeKey</code>, <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permissions on the KMS key, and the S3 Tables maintenance principal must have access to it. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html">Permissions requirements for S3 Tables SSE-KMS encryption</a>.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The storage class configuration for the table. If you don't specify one, the table inherits the storage class configuration of its table bucket. If you specify a storage class configuration, the migration role must have the <code>s3tables:PutTableStorageClass</code> permission.</p>
   * @public
   */
  storageClassConfiguration?: StorageClassConfiguration | undefined;

  /**
   * <p>The tags to add to the table. A tag is a key-value pair that you apply to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>. If you specify tags, the migration role must have the <code>s3tables:TagResource</code> permission.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The properties of the destination table, such as its Iceberg format version and the format of its data files.</p>
   * @public
   */
  properties?: MigrationTableProperties | undefined;

  /**
   * <p>The schema of the table to create. If you don't specify a schema, the migration infers it from the source table, with every column optional. A schema that you specify must include every partition column of the source table. It can leave out other columns only if <code>unmatchedSourceFieldsPolicy</code> is <code>drop</code>. A struct column must have the same fields as the source column. Column default values aren't supported. If you mark a column as required, every source object must have a value for it: an object with a null value in a required column fails to migrate. The destination table is partitioned in the same way as the source table. To specify fields in <code>icebergSortOrder</code>, you must specify a schema.</p>
   * @public
   */
  schema?: IcebergSchemaV2 | undefined;

  /**
   * <p>The sort order of the rows within each data file that the migration writes. A sort order can have up to five fields, each naming a column of the schema that you specify by its field ID, so to use a sort order you must specify a schema. <code>StartTableMigration</code> rejects a field that names no column of the schema, or whose transform doesn't fit the column's type.</p>
   * @public
   */
  icebergSortOrder?: IcebergSortOrder | undefined;
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
export interface GetTableBucketLoggingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * <p>Amazon S3 keys for log objects are partitioned in the following format: <code>[targetPrefix][SourceAccountId]/[SourceRegion]/[SourceTableBucket]/[YYYY]/[MM]/[DD]/[YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]</code> </p>
 * @public
 */
export interface PartitionedPrefix {
  /**
   * <p>The date to use for the log object key partitions. Valid values are <code>EventTime</code>, the time that the requests in the log were made, and <code>DeliveryTime</code>, the time that the log was delivered.</p>
   * @public
   */
  partitionDateSource: PartitionDateSource | undefined;
}

/**
 * <p>The key format of the log objects. Only <code>partitionedPrefix</code> is supported.</p>
 * @public
 */
export interface TargetObjectKeyFormat {
  /**
   * <p>Partitions log object keys by date.</p>
   * @public
   */
  partitionedPrefix: PartitionedPrefix | undefined;
}

/**
 * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a table bucket.</p>
 * @public
 */
export interface LoggingEnabled {
  /**
   * <p>The name of the general purpose bucket that logs are delivered to. The bucket must be in the same Amazon Web Services Region and owned by the same Amazon Web Services account as the table bucket. The bucket can't use SSE-KMS or DSSE-KMS default encryption, can't have S3 Object Lock enabled, and can't have Requester Pays enabled. You can deliver logs from multiple table buckets to the same target bucket. In this case, choose a different <code>targetPrefix</code> for each table bucket so that you can tell their log objects apart.</p>
   * @public
   */
  targetBucket: string | undefined;

  /**
   * <p>The prefix for the keys of the log objects that are delivered to the target bucket.</p>
   * @public
   */
  targetPrefix: string | undefined;

  /**
   * <p>The key format of the log objects. Log object keys are always partitioned by date.</p>
   * @public
   */
  targetObjectKeyFormat: TargetObjectKeyFormat | undefined;
}

/**
 * <p>The server access logging status of a table bucket. To enable logging, specify <code>loggingEnabled</code>. To disable logging, specify an empty <code>TableBucketLoggingStatus</code>.</p>
 * @public
 */
export interface TableBucketLoggingStatus {
  /**
   * <p>Where logs for the table bucket are delivered and how the log objects are named. Must be populated to enable logging.</p>
   * @public
   */
  loggingEnabled?: LoggingEnabled | undefined;
}

/**
 * @public
 */
export interface GetTableBucketLoggingResponse {
  /**
   * <p>The logging status of the table bucket. If logging is disabled, <code>loggingEnabled</code> is absent.</p>
   * @public
   */
  tableBucketLoggingStatus: TableBucketLoggingStatus | undefined;
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
export interface GetTableMigrationRequest {
  /**
   * <p>The ID of the migration to get. Specify either <code>migrationId</code> or <code>tableARN</code>, not both.</p>
   * @public
   */
  migrationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination table. Gets the table's most recent migration. Specify either <code>tableARN</code> or <code>migrationId</code>, not both.</p>
   * @public
   */
  tableARN?: string | undefined;
}

/**
 * <p>The reason that a migration failed: a code and, when there is one, the resource or reason it applies to. This value is returned only when the migration is in the <code>failed</code> state.</p>
 * @public
 */
export interface MigrationFailureReason {
  /**
   * <p>The failure code. It names the cause or the report that lists the findings. Valid values:</p> <ul> <li> <p> <code>rolePermissions</code> - S3 Tables couldn't assume the migration role, or the role doesn't have a permission that the migration needs. <code>detail</code> is the role ARN.</p> </li> <li> <p> <code>sourcePermissions</code> - The migration role couldn't read the Amazon Web Services Glue table or the source objects. <code>detail</code> names the table (<code>database.table</code>) or the source bucket.</p> </li> <li> <p> <code>destinationPermissions</code> - The migration role couldn't write to the table bucket or the report bucket. <code>detail</code> names the bucket.</p> </li> <li> <p> <code>resourceNotFound</code> - A resource that you specified doesn't exist, such as the Amazon Web Services Glue table or the source bucket. <code>detail</code> names it.</p> </li> <li> <p> <code>sourceNotSupported</code> - The source table can't be migrated, for example because it is empty, has too many objects, or has columns or partitions that can't be migrated. The table compatibility report lists the findings.</p> </li> <li> <p> <code>tableCompatibilityReport</code> - The migration couldn't create the destination table, for example because a table with that name already exists or the KMS key can't be used. For a sync, the destination table changed after the previous migration. The table compatibility report lists the finding.</p> </li> <li> <p> <code>objectCompatibilityReport</code> - Some source objects can't be migrated, for example because they are archived, or because they were overwritten after an earlier migration migrated them. The object compatibility report lists them.</p> </li> <li> <p> <code>objectMigrationReport</code> - Some source objects failed to migrate. The object migration report lists them and the cause for each.</p> </li> <li> <p> <code>reportBucketNotSupported</code> - The report bucket can't receive the migration's reports, for example because it is in a different Region than the table bucket.</p> </li> <li> <p> <code>internalError</code> - S3 Tables encountered an internal error. Retry the migration, and contact Amazon Web Services Support if the error persists.</p> </li> </ul>
   * @public
   */
  code: MigrationFailureCode | undefined;

  /**
   * <p>The resource that the failure applies to, such as the role ARN, the Amazon Web Services Glue table (<code>database.table</code>) or a bucket. For <code>sourceNotSupported</code>, the reason that the source isn't supported, such as <code>EMPTY_TABLE</code>. This value isn't returned for the report codes or for <code>internalError</code>.</p>
   * @public
   */
  detail?: string | undefined;
}

/**
 * <p>A report of a migration: the prefix it is written under and, once it is written, its key, its checksum and, for the compatibility reports, the number of blocking findings in each category.</p>
 * @public
 */
export interface ReportOverview {
  /**
   * <p>The key prefix that the report is written under.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>The key of the report object in the bucket. For the object compatibility and object migration reports, this is the report's manifest; for the table compatibility report, it is the report itself. This value is returned after the migration writes the report. A migration doesn't always write every report. For example, a migration that fails during planning doesn't write the object migration report.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The Base64-encoded CRC64NVME checksum of the object that <code>key</code> names. For a report that has a manifest, the manifest lists the checksum of each report file. This value is returned after the migration writes the report.</p>
   * @public
   */
  checksumCRC64NVME?: string | undefined;

  /**
   * <p>For the compatibility reports, the number of blocking findings in each category. The object compatibility report counts each blocked object once, under its most severe finding. Categories with no blocking findings are left out.</p>
   * @public
   */
  invalidFindings?: Partial<Record<FindingCategory, number>> | undefined;
}

/**
 * <p>Where a migration writes its reports, and the location of each report once it is written.</p>
 * @public
 */
export interface MigrationOutputOverview {
  /**
   * <p>The general purpose bucket that the migration writes every report to.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The table compatibility report: the sample object that the schema is inferred from, the table-level findings, and one row for each destination column with its type change and how the migration policies apply to it. The migration writes it when planning finishes, before any data migrates. If planning fails, the report might not be written.</p>
   * @public
   */
  tableCompatibilityReport: ReportOverview | undefined;

  /**
   * <p>The object compatibility report: one row for each source object under the source table's location, with whether the migration includes the object and its most severe finding. The migration writes it when planning finishes. If planning fails, the report might not be written.</p>
   * @public
   */
  objectCompatibilityReport: ReportOverview | undefined;

  /**
   * <p>The object migration report: one row for each source object that the migration tried to migrate, with whether it migrated, how it was transformed, and why it failed. The migration writes it once, when the migration ends. It isn't written if planning fails or if a sync has nothing to migrate.</p>
   * @public
   */
  objectMigrationReport: ReportOverview | undefined;
}

/**
 * <p>The number of source objects that migrated, failed or are pending. For a sync, the counts cover every object of the table after the sync, including objects that earlier migrations migrated. The counts are set when planning finishes and updated when the migration ends.</p>
 * @public
 */
export interface MigrationStats {
  /**
   * <p>The number of source objects whose data the migration wrote to the destination table. Migrated data can be queried after the migration commits it. If the migration fails or is cancelled, some migrated objects might not be committed.</p>
   * @public
   */
  objectsMigrated?: number | undefined;

  /**
   * <p>The number of source objects that didn't migrate, because they failed or because another object, such as an object in the same partition, failed. The object migration report lists the cause for each object.</p>
   * @public
   */
  objectsFailedMigration?: number | undefined;

  /**
   * <p>The number of source objects that haven't migrated or failed yet. When a migration fails or is cancelled, these are the objects that it didn't migrate.</p>
   * @public
   */
  objectsPendingMigration?: number | undefined;
}

/**
 * <p>Statistics about the source and the partitions in a migration.</p>
 * @public
 */
export interface PlanningStats {
  /**
   * <p>The number of source objects that the migration found under the source table's location, whether or not it migrates them. The object compatibility report has one row for each.</p>
   * @public
   */
  objectsScanned?: number | undefined;

  /**
   * <p>The number of source objects in the migration. For a start, these are the data files in the Amazon Web Services Glue table's partitions, or under the table's location if the table isn't partitioned. For a sync, these are all the data files of the table after the sync, including files that earlier migrations migrated.</p>
   * @public
   */
  objectsPlanned?: number | undefined;

  /**
   * <p>The number of partitions in the destination table after this migration, or 0 if the source table isn't partitioned. This value is returned when planning produces a valid plan.</p>
   * @public
   */
  partitionCount?: number | undefined;
}

/**
 * <p>An Amazon Web Services Glue Data Catalog table to migrate. The table must be an external Apache Hive table whose data is stored as Parquet in a general purpose bucket in the same account and Region as the table bucket. Views, transactional (ACID) tables, tables in an open table format such as Apache Iceberg, and tables registered with Amazon Web Services Lake Formation can't be migrated. If the table can't be migrated, the migration fails, and the table compatibility report lists the reason.</p>
 * @public
 */
export interface GlueTableSource {
  /**
   * <p>The ID of the Data Catalog that contains the table. It must be your account ID.</p>
   * @public
   */
  catalogId: string | undefined;

  /**
   * <p>The name of the database that contains the table.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName: string | undefined;
}

/**
 * <p>The source to migrate from. Set exactly one member, and set <code>sourceType</code> to match it.</p>
 * @public
 */
export type SourceConfiguration =
  | SourceConfiguration.GlueTableMember
  | SourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace SourceConfiguration {
  /**
   * <p>An Amazon Web Services Glue Data Catalog table to migrate. The table must be an external Apache Hive table whose data is stored as Parquet in a general purpose bucket in the same account and Region as the table bucket. Views, transactional (ACID) tables, tables in an open table format such as Apache Iceberg, and tables registered with Amazon Web Services Lake Formation can't be migrated. If the table can't be migrated, the migration fails, and the table compatibility report lists the reason.</p>
   * @public
   */
  export interface GlueTableMember {
    glueTable: GlueTableSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueTable?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glueTable: (value: GlueTableSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetTableMigrationResponse {
  /**
   * <p>The ID of the migration.</p>
   * @public
   */
  migrationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the destination table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the destination table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination table, once the migration creates it.</p>
   * @public
   */
  tableARN?: string | undefined;

  /**
   * <p>The name of the destination table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the migration. Valid values:</p> <ul> <li> <p> <code>start</code> - A migration that <code>StartTableMigration</code> started.</p> </li> <li> <p> <code>sync</code> - A migration that <code>SyncTableMigration</code> started.</p> </li> </ul>
   * @public
   */
  type: MigrationType | undefined;

  /**
   * <p>The state of the migration. Valid values:</p> <ul> <li> <p> <code>new</code> - S3 Tables accepted the request.</p> </li> <li> <p> <code>planning</code> - The migration is checking the source table, its objects and the destination for compatibility, and writing the compatibility reports.</p> </li> <li> <p> <code>pendingReview</code> - Planning finished, and the migration waits for you to continue or cancel it with <code>UpdateTableMigration</code>.</p> </li> <li> <p> <code>queued</code> - The migration is waiting to start migrating data.</p> </li> <li> <p> <code>migrating</code> - The migration is running the plan from the <code>planning</code> state: it copies data and commits it to the destination table. A migration reaches this state only if <code>hasValidPlan</code> is <code>true</code>.</p> </li> <li> <p> <code>succeeded</code> - Every planned object migrated.</p> </li> <li> <p> <code>failed</code> - The migration failed. Check <code>failureReason</code> for the cause.</p> </li> <li> <p> <code>cancelling</code> - You cancelled the migration, and it is finishing the work in progress.</p> </li> <li> <p> <code>cancelled</code> - The migration is cancelled.</p> </li> </ul> <p>A migration ends in the <code>succeeded</code>, <code>failed</code> or <code>cancelled</code> state. You can cancel it until it ends.</p>
   * @public
   */
  state: MigrationState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the migration uses.</p>
   * @public
   */
  roleARN: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the migration waits in the <code>pendingReview</code> state, so that you can review the compatibility reports before it migrates any data.</p>
   * @public
   */
  reviewMigrationPlan: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether planning produced a plan that the migration can run. If planning hasn't finished, this value isn't returned.</p>
   * @public
   */
  hasValidPlan?: boolean | undefined;

  /**
   * <p>The date and time that the migration was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the migration's state last changed.</p>
   * @public
   */
  stateUpdatedAt: Date | undefined;

  /**
   * <p>The reason that the migration failed. The code names the cause, such as a migration role that S3 Tables can't assume or an Amazon Web Services Glue table that doesn't exist, or the report that lists the findings. This value is returned only when the migration is in the <code>failed</code> state.</p>
   * @public
   */
  failureReason?: MigrationFailureReason | undefined;

  /**
   * <p>Statistics about the source and the partitions in the migration. This value is returned after planning finishes.</p>
   * @public
   */
  planningStats?: PlanningStats | undefined;

  /**
   * <p>The number of objects that migrated, failed or are pending. These counts are set when planning finishes and updated when the migration ends.</p>
   * @public
   */
  migrationStats?: MigrationStats | undefined;

  /**
   * <p>The type of the migration's source.</p>
   * @public
   */
  sourceType: MigrationSourceType | undefined;

  /**
   * <p>The source table of the migration.</p>
   * @public
   */
  source: SourceConfiguration | undefined;

  /**
   * <p>The maintenance settings and migration policies for the destination table.</p>
   * @public
   */
  dataMigration: DataMigrationOverview | undefined;

  /**
   * <p>The bucket and prefixes for the migration's reports, and the location of each report once it is written.</p>
   * @public
   */
  migrationOutput: MigrationOutputOverview | undefined;
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
export interface ListTableMigrationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket to list migrations for.</p>
   * @public
   */
  tableBucketARN?: string | undefined;

  /**
   * <p>The namespace to list migrations for. Requires <code>tableBucketARN</code>.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the table to list migrations for. Requires <code>tableBucketARN</code> and <code>namespace</code>.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table to list migrations for. The list includes the migrations into this table. To also list migrations into an earlier table of the same name, specify <code>tableBucketARN</code>, <code>namespace</code> and <code>name</code> instead. Specify either <code>tableARN</code> or <code>tableBucketARN</code>, not both.</p>
   * @public
   */
  tableARN?: string | undefined;

  /**
   * <p>The state to filter the list by. For the valid values, see the <code>state</code> member of <code>GetTableMigration</code>.</p>
   * @public
   */
  state?: MigrationState | undefined;

  /**
   * <p>The <code>hasValidPlan</code> value to filter the list by. Migrations that are still planning aren't listed, whichever value you specify.</p>
   * @public
   */
  hasValidPlan?: boolean | undefined;

  /**
   * <p>The maximum number of migrations to return, from 1 to 1,000. If you don't specify a value, the default is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> from a previous response, to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A summary of a migration.</p>
 * @public
 */
export interface MigrationSummary {
  /**
   * <p>The ID of the migration.</p>
   * @public
   */
  migrationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the destination table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the destination table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination table, once the migration creates it.</p>
   * @public
   */
  tableARN?: string | undefined;

  /**
   * <p>The name of the destination table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the migration. Valid values:</p> <ul> <li> <p> <code>start</code> - A migration that <code>StartTableMigration</code> started.</p> </li> <li> <p> <code>sync</code> - A migration that <code>SyncTableMigration</code> started.</p> </li> </ul>
   * @public
   */
  type: MigrationType | undefined;

  /**
   * <p>The state of the migration. Valid values:</p> <ul> <li> <p> <code>new</code> - S3 Tables accepted the request.</p> </li> <li> <p> <code>planning</code> - The migration is checking the source table, its objects and the destination for compatibility, and writing the compatibility reports.</p> </li> <li> <p> <code>pendingReview</code> - Planning finished, and the migration waits for you to continue or cancel it with <code>UpdateTableMigration</code>.</p> </li> <li> <p> <code>queued</code> - The migration is waiting to start migrating data.</p> </li> <li> <p> <code>migrating</code> - The migration is running the plan from the <code>planning</code> state: it copies data and commits it to the destination table. A migration reaches this state only if <code>hasValidPlan</code> is <code>true</code>.</p> </li> <li> <p> <code>succeeded</code> - Every planned object migrated.</p> </li> <li> <p> <code>failed</code> - The migration failed. Check <code>failureReason</code> for the cause.</p> </li> <li> <p> <code>cancelling</code> - You cancelled the migration, and it is finishing the work in progress.</p> </li> <li> <p> <code>cancelled</code> - The migration is cancelled.</p> </li> </ul>
   * @public
   */
  state: MigrationState | undefined;

  /**
   * <p>A Boolean value that specifies whether planning produced a plan that the migration can run. If planning hasn't finished, this value isn't returned.</p>
   * @public
   */
  hasValidPlan?: boolean | undefined;

  /**
   * <p>The date and time that the migration was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the migration's state last changed.</p>
   * @public
   */
  stateUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTableMigrationsResponse {
  /**
   * <p>The migrations, newest first.</p>
   * @public
   */
  migrations: MigrationSummary[] | undefined;

  /**
   * <p>A token to pass as <code>nextToken</code> to get the next page of results. If there are no more results, this value isn't returned.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>The key prefix for each report. If you don't specify a prefix for a report, its keys start at the root of the bucket.</p>
 * @public
 */
export interface MigrationReportPrefixes {
  /**
   * <p>The key prefix for the table compatibility report, up to 512 bytes. If not specified, the report's keys start at the root of the bucket.</p>
   * @public
   */
  tableCompatibilityReport?: string | undefined;

  /**
   * <p>The key prefix for the object compatibility report, up to 512 bytes. If not specified, the report's keys start at the root of the bucket.</p>
   * @public
   */
  objectCompatibilityReport?: string | undefined;

  /**
   * <p>The key prefix for the object migration report, up to 512 bytes. If not specified, the report's keys start at the root of the bucket.</p>
   * @public
   */
  objectMigrationReport?: string | undefined;
}

/**
 * <p>The bucket and prefixes that a migration writes its reports to. Every report goes to one bucket, each under its own prefix.</p>
 * @public
 */
export interface MigrationOutputConfiguration {
  /**
   * <p>The general purpose bucket that the migration writes every report to.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The key prefix for each report.</p>
   * @public
   */
  prefixes?: MigrationReportPrefixes | undefined;
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
export interface PutTableBucketLoggingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The logging status to apply to the table bucket. To disable logging, specify an empty <code>tableBucketLoggingStatus</code>.</p>
   * @public
   */
  tableBucketLoggingStatus: TableBucketLoggingStatus | undefined;
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
export interface StartTableMigrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the migration uses to read the source table and its data and to write the destination table and the reports. The role must be in your account, and its trust policy must allow <code>migration.s3tables.amazonaws.com</code> to assume it. You can limit the trust policy to the destination table bucket with the <code>aws:SourceArn</code> and <code>aws:SourceAccount</code> condition keys.</p>
   * @public
   */
  roleARN: string | undefined;

  /**
   * <p>The table to create and migrate the source into.</p>
   * @public
   */
  destinationTable: DestinationTable | undefined;

  /**
   * <p>The type of the source. It must match the member that you set in <code>source</code>.</p>
   * @public
   */
  sourceType: MigrationSourceType | undefined;

  /**
   * <p>The source table to migrate.</p>
   * @public
   */
  source: SourceConfiguration | undefined;

  /**
   * <p>The maintenance settings and migration policies for the destination table.</p>
   * @public
   */
  dataMigration?: DataMigrationSettings | undefined;

  /**
   * <p>Specifies whether the migration waits in the <code>pendingReview</code> state, so that you can review the compatibility reports before it migrates any data. If <code>true</code>, the migration continues when you call <code>UpdateTableMigration</code> with <code>requestedState</code> set to <code>queued</code>. If you don't continue or cancel the migration within 30 days, the migration fails. The default is <code>false</code>.</p>
   * @public
   */
  reviewMigrationPlan?: boolean | undefined;

  /**
   * <p>The bucket and prefixes that the migration writes its reports to. The bucket must be a general purpose bucket in your account and in the same Region as the table bucket, and the migration role must be able to write objects to it. Otherwise, the migration fails when it writes its first report.</p>
   * @public
   */
  migrationOutput: MigrationOutputConfiguration | undefined;
}

/**
 * @public
 */
export interface StartTableMigrationResponse {
  /**
   * <p>The ID of the migration.</p>
   * @public
   */
  migrationId: string | undefined;

  /**
   * <p>The state of the migration when the request is accepted, such as <code>planning</code>.</p>
   * @public
   */
  state: MigrationState | undefined;
}

/**
 * @public
 */
export interface SyncTableMigrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the sync uses to read the source table and its data and to write the destination table and the reports. The role must be in your account, and its trust policy must allow <code>migration.s3tables.amazonaws.com</code> to assume it. You can limit the trust policy to the destination table bucket with the <code>aws:SourceArn</code> and <code>aws:SourceAccount</code> condition keys.</p>
   * @public
   */
  roleARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination table to sync. The table must have a migration, and you must not have called <code>CompleteTableMigration</code> for it.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>Specifies whether the sync waits in the <code>pendingReview</code> state, so that you can review the compatibility reports before it migrates any data. If <code>true</code>, the migration continues when you call <code>UpdateTableMigration</code> with <code>requestedState</code> set to <code>queued</code>. If you don't continue or cancel the migration within 30 days, the migration fails. The default is <code>false</code>.</p>
   * @public
   */
  reviewMigrationPlan?: boolean | undefined;

  /**
   * <p>The bucket and prefixes that the sync writes its reports to. The bucket must be a general purpose bucket in your account and in the same Region as the table bucket, and the migration role must be able to write objects to it. Otherwise, the migration fails when it writes its first report.</p>
   * @public
   */
  migrationOutput: MigrationOutputConfiguration | undefined;
}

/**
 * @public
 */
export interface SyncTableMigrationResponse {
  /**
   * <p>The migration ID of the sync.</p>
   * @public
   */
  migrationId: string | undefined;

  /**
   * <p>The state of the migration when the request is accepted, such as <code>planning</code>.</p>
   * @public
   */
  state: MigrationState | undefined;
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
export interface UpdateTableMigrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination table. Updates the table's most recent migration. Until the migration creates the destination table, specify <code>migrationId</code>. Specify either <code>tableARN</code> or <code>migrationId</code>, not both.</p>
   * @public
   */
  tableARN?: string | undefined;

  /**
   * <p>The ID of the migration to update. Specify either <code>migrationId</code> or <code>tableARN</code>, not both.</p>
   * @public
   */
  migrationId?: string | undefined;

  /**
   * <p>The state to move the migration to: <code>queued</code> to continue a migration in the <code>pendingReview</code> state, or <code>cancelled</code> to cancel a migration in the <code>new</code>, <code>planning</code>, <code>pendingReview</code>, <code>queued</code> or <code>migrating</code> state.</p>
   * @public
   */
  requestedState: MigrationRequestedState | undefined;

  /**
   * <p>A description of the update, up to 1,024 characters, with no control characters. <code>GetTableMigration</code> doesn't return it.</p>
   * @public
   */
  updateDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableMigrationResponse {
  /**
   * <p>The ID of the migration.</p>
   * @public
   */
  migrationId: string | undefined;

  /**
   * <p>The state of the migration after the update, such as <code>queued</code>, <code>migrating</code> or <code>cancelling</code>.</p>
   * @public
   */
  state: MigrationState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination table.</p>
   * @public
   */
  tableARN?: string | undefined;
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
