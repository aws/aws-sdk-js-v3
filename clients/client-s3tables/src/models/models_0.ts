// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  IcebergCompactionStrategy,
  IcebergNullOrder,
  IcebergSortDirection,
  JobStatus,
  MaintenanceStatus,
  OpenTableFormat,
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
} from "./enums";

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket to create the namespace in.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * A name for the namespace.
   *
   * @public
   */
  namespace: string[] | undefined;
}

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * The Amazon Resource Name (ARN) of the table bucket the namespace was created in.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The name of the namespace.
   *
   * @public
   */
  namespace: string[] | undefined;
}

/**
 * Configuration specifying how data should be encrypted. This structure defines the encryption algorithm and optional KMS key to be used for server-side encryption.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The server-side encryption algorithm to use. Valid values are `AES256` for S3-managed encryption keys, or `aws:kms` for Amazon Web Services KMS-managed encryption keys. If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see [Permissions requirements for S3 Tables SSE-KMS encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html).
   *
   * @public
   */
  sseAlgorithm: SSEAlgorithm | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to use for encryption. This field is required only when `sseAlgorithm` is set to `aws:kms`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Defines a single partition field in an Iceberg partition specification.
 *
 * @public
 */
export interface IcebergPartitionField {
  /**
   * The ID of the source schema field to partition by. This must reference a valid field ID from the table schema.
   *
   * @public
   */
  sourceId: number | undefined;

  /**
   * The partition transform to apply to the source field. Supported transforms include `identity`, `year`, `month`, `day`, `hour`, `bucket`, and `truncate`. For more information, see the [Apache Iceberg partition transforms documentation](https://iceberg.apache.org/spec/#partition-transforms).
   *
   * @public
   */
  transform: string | undefined;

  /**
   * The name for this partition field. This name is used in the partitioned file paths.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional unique identifier for this partition field. If not specified, S3 Tables automatically assigns a field ID.
   *
   * @public
   */
  fieldId?: number | undefined;
}

/**
 * Defines how data in an Iceberg table is partitioned. Partitioning helps optimize query performance by organizing data into separate files based on field values. Each partition field specifies a transform to apply to a source field.
 *
 * @public
 */
export interface IcebergPartitionSpec {
  /**
   * The list of partition fields that define how the table data is partitioned. Each field specifies a source field and a transform to apply. This field is required if `partitionSpec` is provided.
   *
   * @public
   */
  fields: IcebergPartitionField[] | undefined;

  /**
   * The unique identifier for this partition specification. If not specified, defaults to `0`.
   *
   * @public
   */
  specId?: number | undefined;
}

/**
 * Contains details about a schema field.
 *
 * @public
 */
export interface SchemaField {
  /**
   * An optional unique identifier for the schema field. Field IDs are used by Apache Iceberg to track schema evolution and maintain compatibility across schema changes. If not specified, S3 Tables automatically assigns field IDs.
   *
   * @public
   */
  id?: number | undefined;

  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The field type. S3 Tables supports all Apache Iceberg primitive types. For more information, see the [Apache Iceberg documentation](https://iceberg.apache.org/spec/#primitive-types).
   *
   * @public
   */
  type: string | undefined;

  /**
   * A Boolean value that specifies whether values are required for each row in this field. By default, this is `false` and null values are allowed in the field. If this is `true` the field does not allow null values.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * Contains details about the schema for an Iceberg table.
 *
 * @public
 */
export interface IcebergSchema {
  /**
   * The schema fields for the table
   *
   * @public
   */
  fields: SchemaField[] | undefined;
}

/**
 * Contains details about a schema field in the V2 format. This field format supports nested and complex data types such as `struct`, `list`, and `map`, in addition to primitive types.
 *
 * @public
 */
export interface SchemaV2Field {
  /**
   * The unique identifier for the schema field. Field IDs are used by Apache Iceberg to track schema evolution and maintain compatibility across schema changes.
   *
   * @public
   */
  id: number | undefined;

  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the field. This can be a primitive type string such as `boolean`, `int`, `long`, `float`, `double`, `string`, `binary`, `date`, `timestamp`, or `timestamptz`, or a complex type represented as a JSON object for nested types such as `struct`, `list`, or `map`. For more information, see the [Apache Iceberg schemas and data types documentation](https://iceberg.apache.org/spec/#schemas-and-data-types).
   *
   * @public
   */
  type: __DocumentType | undefined;

  /**
   * A Boolean value that specifies whether values are required for each row in this field. If this is `true`, the field does not allow null values.
   *
   * @public
   */
  required: boolean | undefined;

  /**
   * An optional description of the field.
   *
   * @public
   */
  doc?: string | undefined;
}

/**
 * Contains details about the schema for an Iceberg table using the V2 format. This schema format supports nested and complex data types such as `struct`, `list`, and `map`, in addition to primitive types.
 *
 * @public
 */
export interface IcebergSchemaV2 {
  /**
   * The type of the top-level schema, which is always a `struct` type as defined in the [Apache Iceberg specification](https://iceberg.apache.org/spec/#schemas-and-data-types). This value must be `struct`.
   *
   * @public
   */
  type: SchemaV2FieldType | undefined;

  /**
   * The schema fields for the table. Each field defines a column in the table, including its name, type, and whether it is required.
   *
   * @public
   */
  fields: SchemaV2Field[] | undefined;

  /**
   * An optional unique identifier for the schema. Schema IDs are used by Apache Iceberg to track schema evolution.
   *
   * @public
   */
  schemaId?: number | undefined;

  /**
   * A list of field IDs that are used as the identifier fields for the table. Identifier fields uniquely identify a row in the table.
   *
   * @public
   */
  identifierFieldIds?: number[] | undefined;
}

/**
 * Defines a single sort field in an Iceberg sort order specification.
 *
 * @public
 */
export interface IcebergSortField {
  /**
   * The ID of the source schema field to sort by. This must reference a valid field ID from the table schema.
   *
   * @public
   */
  sourceId: number | undefined;

  /**
   * The transform to apply to the source field before sorting. Use `identity` to sort by the field value directly, or specify other transforms as needed.
   *
   * @public
   */
  transform: string | undefined;

  /**
   * The sort direction. Valid values are `asc` for ascending order or `desc` for descending order.
   *
   * @public
   */
  direction: IcebergSortDirection | undefined;

  /**
   * Specifies how null values are ordered. Valid values are `nulls-first` to place nulls before non-null values, or `nulls-last` to place nulls after non-null values.
   *
   * @public
   */
  nullOrder: IcebergNullOrder | undefined;
}

/**
 * Defines the sort order for data within an Iceberg table. Sorting data can improve query performance by enabling more efficient data skipping.
 *
 * @public
 */
export interface IcebergSortOrder {
  /**
   * The unique identifier for this sort order. If not specified, defaults to `1`. The order ID is used by Apache Iceberg to track sort order evolution.
   *
   * @public
   */
  orderId: number | undefined;

  /**
   * The list of sort fields that define how data is sorted within files. Each field specifies a source field, sort direction, and null ordering. This field is required if `writeOrder` is provided.
   *
   * @public
   */
  fields: IcebergSortField[] | undefined;
}

/**
 * Contains details about the metadata for an Iceberg table.
 *
 * @public
 */
export interface IcebergMetadata {
  /**
   * The schema for an Iceberg table. Use this property to define table schemas with primitive types only. For schemas that include nested or complex types such as `struct`, `list`, or `map`, use `schemaV2` instead.
   *
   * @public
   */
  schema?: IcebergSchema | undefined;

  /**
   * The schema for an Iceberg table using the V2 format. Use this property to define table schemas that include nested or complex data types such as `struct`, `list`, or `map`, in addition to primitive types. For schemas with only primitive types, you can use either `schema` or `schemaV2`.
   *
   * @public
   */
  schemaV2?: IcebergSchemaV2 | undefined;

  /**
   * The partition specification for the Iceberg table. Partitioning organizes data into separate files based on the values of one or more fields, which can improve query performance by reducing the amount of data scanned. Each partition field applies a transform (such as identity, year, month, or bucket) to a single field.
   *
   * @public
   */
  partitionSpec?: IcebergPartitionSpec | undefined;

  /**
   * The sort order for the Iceberg table. Sort order defines how data is sorted within data files, which can improve query performance by enabling more efficient data skipping and filtering.
   *
   * @public
   */
  writeOrder?: IcebergSortOrder | undefined;

  /**
   * A map of custom configuration properties for the Iceberg table.
   *
   * @public
   */
  properties?: Record<string, string> | undefined;
}

/**
 * Contains details about the table metadata.
 *
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
   * Contains details about the metadata of an Iceberg table.
   *
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
 * The configuration details for the storage class of tables or table buckets. This allows you to optimize storage costs by selecting the appropriate storage class based on your access patterns and performance requirements.
 *
 * @public
 */
export interface StorageClassConfiguration {
  /**
   * The storage class for the table or table bucket. Valid values include storage classes optimized for different access patterns and cost profiles.
   *
   * @public
   */
  storageClass: StorageClass | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket to create the table in.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace to associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name for the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The format for the table.
   *
   * @public
   */
  format: OpenTableFormat | undefined;

  /**
   * The metadata for the table.
   *
   * @public
   */
  metadata?: TableMetadata | undefined;

  /**
   * The encryption configuration to use for the table. This configuration specifies the encryption algorithm and, if using SSE-KMS, the KMS key to use for encrypting the table.
   *
   * > **Note:** If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see [Permissions requirements for S3 Tables SSE-KMS encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html).
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The storage class configuration for the table. If not specified, the table inherits the storage class configuration from its table bucket. Specify this parameter to override the bucket's default storage class for this table.
   *
   * @public
   */
  storageClassConfiguration?: StorageClassConfiguration | undefined;

  /**
   * A map of user-defined tags that you would like to apply to the table that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize, track costs for, and control access to resources. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * > **Note:** You must have the `s3tables:TagResource` permission in addition to `s3tables:CreateTable` permission to create a table with tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableARN: string | undefined;

  /**
   * The version token of the table.
   *
   * @public
   */
  versionToken: string | undefined;
}

/**
 * @public
 */
export interface CreateTableBucketRequest {
  /**
   * The name for the table bucket.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The encryption configuration to use for the table bucket. This configuration specifies the default encryption settings that will be applied to all tables created in this bucket unless overridden at the table level. The configuration includes the encryption algorithm and, if using SSE-KMS, the KMS key to use.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The default storage class configuration for the table bucket. This configuration will be applied to all new tables created in this bucket unless overridden at the table level. If not specified, the service default storage class will be used.
   *
   * @public
   */
  storageClassConfiguration?: StorageClassConfiguration | undefined;

  /**
   * A map of user-defined tags that you would like to apply to the table bucket that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize and control access to resources. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * > **Note:** You must have the `s3tables:TagResource` permission in addition to `s3tables:CreateTableBucket` permisson to create a table bucket with tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTableBucketResponse {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket associated with the namespace.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The name of the namespace.
   *
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket that contains the table.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version token of the table.
   *
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketEncryptionRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketMetricsConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketReplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * A version token from a previous GetTableBucketReplication call. Use this token to ensure you're deleting the expected version of the configuration.
   *
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTablePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket that contains the table.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The table name.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableReplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableArn: string | undefined;

  /**
   * A version token from a previous GetTableReplication call. Use this token to ensure you're deleting the expected version of the configuration.
   *
   * @public
   */
  versionToken: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The name of the namespace.
   *
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceResponse {
  /**
   * The name of the namespace.
   *
   * @public
   */
  namespace: string[] | undefined;

  /**
   * The date and time the namespace was created at.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The ID of the account that created the namespace.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The ID of the account that owns the namespcace.
   *
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The unique identifier of the namespace.
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The unique identifier of the table bucket containing this namespace.
   *
   * @public
   */
  tableBucketId?: string | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket associated with the table.
   *
   * @public
   */
  tableBucketARN?: string | undefined;

  /**
   * The name of the namespace the table is associated with.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableArn?: string | undefined;
}

/**
 * Contains information about the source of a replicated table.
 *
 * @public
 */
export interface ReplicationInformation {
  /**
   * The Amazon Resource Name (ARN) of the source table from which this table is replicated.
   *
   * @public
   */
  sourceTableARN: string | undefined;
}

/**
 * Contains information about tables that are managed by S3 Tables, including replication information for replica tables.
 *
 * @public
 */
export interface ManagedTableInformation {
  /**
   * If this table is a replica, contains information about the source table from which it is replicated.
   *
   * @public
   */
  replicationInformation?: ReplicationInformation | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the table.
   *
   * @public
   */
  type: TableType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string[] | undefined;

  /**
   * The unique identifier of the namespace containing this table.
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The version token of the table.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The metadata location of the table.
   *
   * @public
   */
  metadataLocation?: string | undefined;

  /**
   * The warehouse location of the table.
   *
   * @public
   */
  warehouseLocation: string | undefined;

  /**
   * The date and time the table bucket was created at.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The ID of the account that created the table.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The service that manages the table.
   *
   * @public
   */
  managedByService?: string | undefined;

  /**
   * The date and time the table was last modified on.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The ID of the account that last modified the table.
   *
   * @public
   */
  modifiedBy: string | undefined;

  /**
   * The ID of the account that owns the table.
   *
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The format of the table.
   *
   * @public
   */
  format: OpenTableFormat | undefined;

  /**
   * The unique identifier of the table bucket containing this table.
   *
   * @public
   */
  tableBucketId?: string | undefined;

  /**
   * If this table is managed by S3 Tables, contains additional information such as replication details.
   *
   * @public
   */
  managedTableInformation?: ManagedTableInformation | undefined;
}

/**
 * @public
 */
export interface GetTableBucketRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketResponse {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the table bucket
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the account that owns the table bucket.
   *
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The date and time the table bucket was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The unique identifier of the table bucket.
   *
   * @public
   */
  tableBucketId?: string | undefined;

  /**
   * The type of the table bucket.
   *
   * @public
   */
  type?: TableBucketType | undefined;
}

/**
 * @public
 */
export interface GetTableBucketEncryptionRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketEncryptionResponse {
  /**
   * The encryption configuration for the table bucket.
   *
   * @public
   */
  encryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMaintenanceConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * Contains details about the unreferenced file removal settings for an Iceberg table bucket.
 *
 * @public
 */
export interface IcebergUnreferencedFileRemovalSettings {
  /**
   * The number of days an object has to be unreferenced before it is marked as non-current.
   *
   * @public
   */
  unreferencedDays?: number | undefined;

  /**
   * The number of days an object has to be non-current before it is deleted.
   *
   * @public
   */
  nonCurrentDays?: number | undefined;
}

/**
 * Contains details about the maintenance settings for the table bucket.
 *
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
   * The unreferenced file removal settings for the table bucket.
   *
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
 * Details about the values that define the maintenance configuration for a table bucket.
 *
 * @public
 */
export interface TableBucketMaintenanceConfigurationValue {
  /**
   * The status of the maintenance configuration.
   *
   * @public
   */
  status?: MaintenanceStatus | undefined;

  /**
   * Contains details about the settings of the maintenance configuration.
   *
   * @public
   */
  settings?: TableBucketMaintenanceSettings | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMaintenanceConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * Details about the maintenance configuration for the table bucket.
   *
   * @public
   */
  configuration: Partial<Record<TableBucketMaintenanceType, TableBucketMaintenanceConfigurationValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMetricsConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMetricsConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The unique identifier of the metrics configuration.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketPolicyResponse {
  /**
   * The `JSON` that defines the policy.
   *
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketReplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * Specifies a destination table bucket for replication.
 *
 * @public
 */
export interface ReplicationDestination {
  /**
   * The Amazon Resource Name (ARN) of the destination table bucket where tables will be replicated.
   *
   * @public
   */
  destinationTableBucketARN: string | undefined;
}

/**
 * Defines a rule for replicating tables from a source table bucket to one or more destination table buckets.
 *
 * @public
 */
export interface TableBucketReplicationRule {
  /**
   * An array of destination table buckets where tables should be replicated.
   *
   * @public
   */
  destinations: ReplicationDestination[] | undefined;
}

/**
 * The replication configuration for a table bucket. This configuration defines how tables in the source bucket are replicated to destination table buckets, including the IAM role used for replication.
 *
 * @public
 */
export interface TableBucketReplicationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that S3 Tables assumes to replicate tables on your behalf.
   *
   * @public
   */
  role: string | undefined;

  /**
   * An array of replication rules that define which tables to replicate and where to replicate them.
   *
   * @public
   */
  rules: TableBucketReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetTableBucketReplicationResponse {
  /**
   * A version token that represents the current state of the replication configuration. Use this token when updating the configuration to ensure consistency.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The replication configuration for the table bucket, including the IAM role and replication rules.
   *
   * @public
   */
  configuration: TableBucketReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableBucketStorageClassRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketStorageClassResponse {
  /**
   * The storage class configuration for the table bucket.
   *
   * @public
   */
  storageClassConfiguration: StorageClassConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableEncryptionRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket containing the table.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTableEncryptionResponse {
  /**
   * The encryption configuration for the table.
   *
   * @public
   */
  encryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Contains details about the compaction settings for an Iceberg table.
 *
 * @public
 */
export interface IcebergCompactionSettings {
  /**
   * The target file size for the table in MB.
   *
   * @public
   */
  targetFileSizeMB?: number | undefined;

  /**
   * The compaction strategy to use for the table. This determines how files are selected and combined during compaction operations.
   *
   * @public
   */
  strategy?: IcebergCompactionStrategy | undefined;
}

/**
 * Contains details about the snapshot management settings for an Iceberg table. The oldest snapshot expires when its age exceeds the `maxSnapshotAgeHours` and the total number of snapshots exceeds the value for the minimum number of snapshots to keep `minSnapshotsToKeep`.
 *
 * @public
 */
export interface IcebergSnapshotManagementSettings {
  /**
   * The minimum number of snapshots to keep.
   *
   * @public
   */
  minSnapshotsToKeep?: number | undefined;

  /**
   * The maximum age of a snapshot before it can be expired.
   *
   * @public
   */
  maxSnapshotAgeHours?: number | undefined;
}

/**
 * Contains details about maintenance settings for the table.
 *
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
   * Contains details about the Iceberg compaction settings for the table.
   *
   * @public
   */
  export interface IcebergCompactionMember {
    icebergCompaction: IcebergCompactionSettings;
    icebergSnapshotManagement?: never;
    $unknown?: never;
  }

  /**
   * Contains details about the Iceberg snapshot management settings for the table.
   *
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
 * The values that define a maintenance configuration for a table.
 *
 * @public
 */
export interface TableMaintenanceConfigurationValue {
  /**
   * The status of the maintenance configuration.
   *
   * @public
   */
  status?: MaintenanceStatus | undefined;

  /**
   * Contains details about the settings for the maintenance configuration.
   *
   * @public
   */
  settings?: TableMaintenanceSettings | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableARN: string | undefined;

  /**
   * Details about the maintenance configuration for the table bucket.
   *
   * @public
   */
  configuration: Partial<Record<TableMaintenanceType, TableMaintenanceConfigurationValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceJobStatusRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The name of the namespace the table is associated with.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table containing the maintenance job status you want to check.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Details about the status of a maintenance job.
 *
 * @public
 */
export interface TableMaintenanceJobStatusValue {
  /**
   * The status of the job.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The date and time that the maintenance job was last run.
   *
   * @public
   */
  lastRunTimestamp?: Date | undefined;

  /**
   * The failure message of a failed job.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceJobStatusResponse {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableARN: string | undefined;

  /**
   * The status of the maintenance job.
   *
   * @public
   */
  status: Partial<Record<TableMaintenanceJobType, TableMaintenanceJobStatusValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataLocationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace of the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataLocationResponse {
  /**
   * The version token.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The metadata location.
   *
   * @public
   */
  metadataLocation?: string | undefined;

  /**
   * The warehouse location.
   *
   * @public
   */
  warehouseLocation: string | undefined;
}

/**
 * @public
 */
export interface GetTablePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket that contains the table.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTablePolicyResponse {
  /**
   * The `JSON` that defines the policy.
   *
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableArn: string | undefined;
}

/**
 * The record expiration setting that specifies when records expire and are automatically removed from a table.
 *
 * @public
 */
export interface TableRecordExpirationSettings {
  /**
   * If you enable record expiration for a table, you can specify the number of days to retain your table records. For example, to retain your table records for one year, set this value to `365`.
   *
   * @public
   */
  days?: number | undefined;
}

/**
 * The expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is enabled, records expire and are automatically removed after the number of days specified in the record expiration settings for the table.
 *
 * @public
 */
export interface TableRecordExpirationConfigurationValue {
  /**
   * The status of the expiration settings for records in the table.
   *
   * @public
   */
  status?: TableRecordExpirationStatus | undefined;

  /**
   * The expiration settings for records in the table.
   *
   * @public
   */
  settings?: TableRecordExpirationSettings | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationConfigurationResponse {
  /**
   * The record expiration configuration for the table, including the status and retention settings.
   *
   * @public
   */
  configuration: TableRecordExpirationConfigurationValue | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationJobStatusRequest {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableArn: string | undefined;
}

/**
 * Provides metrics for the record expiration job that most recently ran for a table. The metrics provide insight into the amount of data that was removed when the job ran.
 *
 * @public
 */
export interface TableRecordExpirationJobMetrics {
  /**
   * The total number of data files that were removed when the job ran.
   *
   * @public
   */
  deletedDataFiles?: number | undefined;

  /**
   * The total number of records that were removed when the job ran.
   *
   * @public
   */
  deletedRecords?: number | undefined;

  /**
   * The total size (in bytes) of the data files that were removed when the job ran.
   *
   * @public
   */
  removedFilesSize?: number | undefined;
}

/**
 * @public
 */
export interface GetTableRecordExpirationJobStatusResponse {
  /**
   * The current status of the most recent expiration job.
   *
   * @public
   */
  status: TableRecordExpirationJobStatus | undefined;

  /**
   * The timestamp when the expiration job was last executed.
   *
   * @public
   */
  lastRunTimestamp?: Date | undefined;

  /**
   * If the job failed, this field contains an error message describing the failure reason.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * Metrics about the most recent expiration job execution, including the number of records and files deleted.
   *
   * @public
   */
  metrics?: TableRecordExpirationJobMetrics | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableArn: string | undefined;
}

/**
 * Defines a rule for replicating a table to one or more destination tables.
 *
 * @public
 */
export interface TableReplicationRule {
  /**
   * An array of destination table buckets where this table should be replicated.
   *
   * @public
   */
  destinations: ReplicationDestination[] | undefined;
}

/**
 * The replication configuration for an individual table. This configuration defines how the table is replicated to destination tables.
 *
 * @public
 */
export interface TableReplicationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that S3 Tables assumes to replicate the table on your behalf.
   *
   * @public
   */
  role: string | undefined;

  /**
   * An array of replication rules that define where this table should be replicated.
   *
   * @public
   */
  rules: TableReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationResponse {
  /**
   * A version token that represents the current state of the table's replication configuration. Use this token when updating the configuration to ensure consistency.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The replication configuration for the table, including the IAM role and replication rules.
   *
   * @public
   */
  configuration: TableReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationStatusRequest {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableArn: string | undefined;
}

/**
 * Contains information about the most recent successful replication update to a destination.
 *
 * @public
 */
export interface LastSuccessfulReplicatedUpdate {
  /**
   * The S3 location of the metadata that was successfully replicated.
   *
   * @public
   */
  metadataLocation: string | undefined;

  /**
   * The timestamp when the replication update completed successfully.
   *
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * Contains status information for a replication destination, including the current replication state, last successful update, and any error messages.
 *
 * @public
 */
export interface ReplicationDestinationStatusModel {
  /**
   * The current status of replication to this destination.
   *
   * @public
   */
  replicationStatus: ReplicationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination table bucket.
   *
   * @public
   */
  destinationTableBucketArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination table.
   *
   * @public
   */
  destinationTableArn?: string | undefined;

  /**
   * Information about the most recent successful replication update to this destination.
   *
   * @public
   */
  lastSuccessfulReplicatedUpdate?: LastSuccessfulReplicatedUpdate | undefined;

  /**
   * If replication has failed, this field contains an error message describing the failure reason.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetTableReplicationStatusResponse {
  /**
   * The Amazon Resource Name (ARN) of the source table being replicated.
   *
   * @public
   */
  sourceTableArn: string | undefined;

  /**
   * An array of status information for each replication destination, including the current state, last successful update, and any error messages.
   *
   * @public
   */
  destinations: ReplicationDestinationStatusModel[] | undefined;
}

/**
 * @public
 */
export interface GetTableStorageClassRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket that contains the table.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTableStorageClassResponse {
  /**
   * The storage class configuration for the table.
   *
   * @public
   */
  storageClassConfiguration: StorageClassConfiguration | undefined;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The prefix of the namespaces.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * `ContinuationToken` indicates to Amazon S3 that the list is being continued on this bucket with a token. `ContinuationToken` is obfuscated and is not a real key. You can use this `ContinuationToken` for pagination of the list results.
   *
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * The maximum number of namespaces to return in the list.
   *
   * @public
   */
  maxNamespaces?: number | undefined;
}

/**
 * Contains details about a namespace.
 *
 * @public
 */
export interface NamespaceSummary {
  /**
   * The name of the namespace.
   *
   * @public
   */
  namespace: string[] | undefined;

  /**
   * The date and time the namespace was created at.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The ID of the account that created the namespace.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The ID of the account that owns the namespace.
   *
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The system-assigned unique identifier for the namespace.
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The system-assigned unique identifier for the table bucket that contains this namespace.
   *
   * @public
   */
  tableBucketId?: string | undefined;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * A list of namespaces.
   *
   * @public
   */
  namespaces: NamespaceSummary[] | undefined;

  /**
   * The `ContinuationToken` for pagination of the list results.
   *
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableBucketsRequest {
  /**
   * The prefix of the table buckets.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * `ContinuationToken` indicates to Amazon S3 that the list is being continued on this bucket with a token. `ContinuationToken` is obfuscated and is not a real key. You can use this `ContinuationToken` for pagination of the list results.
   *
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * The maximum number of table buckets to return in the list.
   *
   * @public
   */
  maxBuckets?: number | undefined;

  /**
   * The type of table buckets to filter by in the list.
   *
   * @public
   */
  type?: TableBucketType | undefined;
}

/**
 * Contains details about a table bucket.
 *
 * @public
 */
export interface TableBucketSummary {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the table bucket.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the account that owns the table bucket.
   *
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The date and time the table bucket was created at.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The system-assigned unique identifier for the table bucket.
   *
   * @public
   */
  tableBucketId?: string | undefined;

  /**
   * The type of the table bucket.
   *
   * @public
   */
  type?: TableBucketType | undefined;
}

/**
 * @public
 */
export interface ListTableBucketsResponse {
  /**
   * A list of table buckets.
   *
   * @public
   */
  tableBuckets: TableBucketSummary[] | undefined;

  /**
   * You can use this `ContinuationToken` for pagination of the list results.
   *
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * The Amazon resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace of the tables.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The prefix of the tables.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * `ContinuationToken` indicates to Amazon S3 that the list is being continued on this bucket with a token. `ContinuationToken` is obfuscated and is not a real key. You can use this `ContinuationToken` for pagination of the list results.
   *
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * The maximum number of tables to return.
   *
   * @public
   */
  maxTables?: number | undefined;
}

/**
 * Contains details about a table.
 *
 * @public
 */
export interface TableSummary {
  /**
   * The name of the namespace.
   *
   * @public
   */
  namespace: string[] | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the table.
   *
   * @public
   */
  type: TableType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableARN: string | undefined;

  /**
   * The date and time the table was created at.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the table was last modified at.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The Amazon Web Services service managing this table, if applicable. For example, a replicated table is managed by the S3 Tables replication service.
   *
   * @public
   */
  managedByService?: string | undefined;

  /**
   * The unique identifier for the namespace that contains this table.
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The unique identifier for the table bucket that contains this table.
   *
   * @public
   */
  tableBucketId?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * A list of tables.
   *
   * @public
   */
  tables: TableSummary[] | undefined;

  /**
   * You can use this `ContinuationToken` for pagination of the list results.
   *
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you want to list tags for. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see [Managing tags for Amazon S3 resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html#manage-tags).
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The user-defined tags that are applied to the resource. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutTableBucketEncryptionRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The encryption configuration to apply to the table bucket.
   *
   * @public
   */
  encryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableBucketMaintenanceConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The type of the maintenance configuration.
   *
   * @public
   */
  type: TableBucketMaintenanceType | undefined;

  /**
   * Defines the values of the maintenance configuration for the table bucket.
   *
   * @public
   */
  value: TableBucketMaintenanceConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTableBucketMetricsConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface PutTableBucketPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The `JSON` that defines the policy.
   *
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutTableBucketReplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the source table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * A version token from a previous GetTableBucketReplication call. Use this token to ensure you're updating the expected version of the configuration.
   *
   * @public
   */
  versionToken?: string | undefined;

  /**
   * The replication configuration to apply, including the IAM role and replication rules.
   *
   * @public
   */
  configuration: TableBucketReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableBucketReplicationResponse {
  /**
   * A new version token representing the updated replication configuration.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The status of the replication configuration operation.
   *
   * @public
   */
  status: string | undefined;
}

/**
 * @public
 */
export interface PutTableBucketStorageClassRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The storage class configuration to apply to the table bucket. This configuration will serve as the default for new tables created in this bucket.
   *
   * @public
   */
  storageClassConfiguration: StorageClassConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableMaintenanceConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table associated with the maintenance configuration.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace of the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the maintenance configuration.
   *
   * @public
   */
  type: TableMaintenanceType | undefined;

  /**
   * Defines the values of the maintenance configuration for the table.
   *
   * @public
   */
  value: TableMaintenanceConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTablePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket that contains the table.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The `JSON` that defines the policy.
   *
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutTableRecordExpirationConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableArn: string | undefined;

  /**
   * The record expiration configuration to apply to the table, including the status (`enabled` or `disabled`) and retention period in days.
   *
   * @public
   */
  value: TableRecordExpirationConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTableReplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the source table.
   *
   * @public
   */
  tableArn: string | undefined;

  /**
   * A version token from a previous GetTableReplication call. Use this token to ensure you're updating the expected version of the configuration.
   *
   * @public
   */
  versionToken?: string | undefined;

  /**
   * The replication configuration to apply to the table, including the IAM role and replication rules.
   *
   * @public
   */
  configuration: TableReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutTableReplicationResponse {
  /**
   * A new version token representing the updated replication configuration.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The status of the replication configuration operation.
   *
   * @public
   */
  status: string | undefined;
}

/**
 * @public
 */
export interface RenameTableRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace associated with the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The current name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new name for the namespace.
   *
   * @public
   */
  newNamespaceName?: string | undefined;

  /**
   * The new name for the table.
   *
   * @public
   */
  newName?: string | undefined;

  /**
   * The version token of the table.
   *
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableMetadataLocationRequest {
  /**
   * The Amazon Resource Name (ARN) of the table bucket.
   *
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * The namespace of the table.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version token of the table.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The new metadata location for the table.
   *
   * @public
   */
  metadataLocation: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableMetadataLocationResponse {
  /**
   * The name of the table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  tableARN: string | undefined;

  /**
   * The namespace the table is associated with.
   *
   * @public
   */
  namespace: string[] | undefined;

  /**
   * The version token of the table.
   *
   * @public
   */
  versionToken: string | undefined;

  /**
   * The metadata location of the table.
   *
   * @public
   */
  metadataLocation: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you're applying tags to. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see [Managing tags for Amazon S3 resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html#manage-tags).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The user-defined tag that you want to add to the specified S3 Tables resource. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
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
   * The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you're removing tags from. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see [Managing tags for Amazon S3 resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html#manage-tags).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The array of tag keys that you're removing from the S3 Tables resource. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
