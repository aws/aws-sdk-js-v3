// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KeyspacesServiceException as __BaseException } from "./KeyspacesServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action. </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ThroughputMode = {
  PAY_PER_REQUEST: "PAY_PER_REQUEST",
  PROVISIONED: "PROVISIONED",
} as const;

/**
 * @public
 */
export type ThroughputMode = (typeof ThroughputMode)[keyof typeof ThroughputMode];

/**
 * @public
 * <p>Amazon Keyspaces has two read/write capacity modes for processing reads and writes on your tables: </p>
 *          <ul>
 *             <li>
 *                <p>On-demand (default)</p>
 *             </li>
 *             <li>
 *                <p>Provisioned</p>
 *             </li>
 *          </ul>
 *          <p>The read/write capacity mode that you choose controls how you are charged for read and
 *          write throughput and how table throughput capacity is managed.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface CapacitySpecification {
  /**
   * @public
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  throughputMode: ThroughputMode | string | undefined;

  /**
   * @public
   * <p>The throughput capacity specified for <code>read</code> operations defined in <code>read capacity units</code>
   *             <code>(RCUs)</code>.</p>
   */
  readCapacityUnits?: number;

  /**
   * @public
   * <p>The throughput capacity specified for <code>write</code> operations defined in <code>write capacity units</code>
   *             <code>(WCUs)</code>.</p>
   */
  writeCapacityUnits?: number;
}

/**
 * @public
 * <p>The read/write throughput capacity mode for a table. The options are:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>throughputMode:PROVISIONED</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface CapacitySpecificationSummary {
  /**
   * @public
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  throughputMode: ThroughputMode | string | undefined;

  /**
   * @public
   * <p>The throughput capacity specified for <code>read</code> operations defined in <code>read capacity units</code>
   *             <code>(RCUs)</code>.</p>
   */
  readCapacityUnits?: number;

  /**
   * @public
   * <p>The throughput capacity specified for <code>write</code> operations defined in <code>write capacity units</code>
   *             <code>(WCUs)</code>.</p>
   */
  writeCapacityUnits?: number;

  /**
   * @public
   * <p>The timestamp of the last operation that changed the provisioned throughput capacity of a table.</p>
   */
  lastUpdateToPayPerRequestTimestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const ClientSideTimestampsStatus = {
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ClientSideTimestampsStatus = (typeof ClientSideTimestampsStatus)[keyof typeof ClientSideTimestampsStatus];

/**
 * @public
 * <p>The client-side timestamp setting of the table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps-how-it-works.html">How it works: Amazon Keyspaces client-side timestamps</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface ClientSideTimestamps {
  /**
   * @public
   * <p>Shows how to enable client-side timestamps settings for the specified table.</p>
   */
  status: ClientSideTimestampsStatus | string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition.</p>
 */
export interface ClusteringKey {
  /**
   * @public
   * <p>The name(s) of the clustering column(s).</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Sets the ascendant (<code>ASC</code>) or descendant (<code>DESC</code>) order modifier.</p>
   */
  orderBy: SortOrder | string | undefined;
}

/**
 * @public
 * <p>The names and data types of regular columns.</p>
 */
export interface ColumnDefinition {
  /**
   * @public
   * <p>The name of the column.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The data type of the column. For a list of available data types, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  type: string | undefined;
}

/**
 * @public
 * <p>An optional comment that describes the table.</p>
 */
export interface Comment {
  /**
   * @public
   * <p>An optional description of the table.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>Amazon Keyspaces could not complete the requested action. This error may occur if you try to
 *          perform an action and the same or a different action is already
 *          in progress, or if you try to create a resource that already exists. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Rs = {
  MULTI_REGION: "MULTI_REGION",
  SINGLE_REGION: "SINGLE_REGION",
} as const;

/**
 * @public
 */
export type Rs = (typeof Rs)[keyof typeof Rs];

/**
 * @public
 * <p>
 *             The replication specification of the keyspace includes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>regionList</code> - up to six Amazon Web Services Regions where the keyspace is replicated in.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>replicationStrategy</code> - the required value is <code>SINGLE_REGION</code> or
 *                <code>MULTI_REGION</code>.</p>
 *             </li>
 *          </ul>
 */
export interface ReplicationSpecification {
  /**
   * @public
   * <p>
   *          The <code>replicationStrategy</code> of a keyspace, the required value is <code>SINGLE_REGION</code> or
   *             <code>MULTI_REGION</code>.
   *       </p>
   */
  replicationStrategy: Rs | string | undefined;

  /**
   * @public
   * <p>
   *          The <code>regionList</code> can contain up to six Amazon Web Services Regions where the keyspace is replicated in.
   *       </p>
   */
  regionList?: string[];
}

/**
 * @public
 * <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource.</p>
 *          <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign.
 *          Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the
 *          prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag. Tag keys are case sensitive. Each Amazon Keyspaces resource can only have up to one tag with the same key. If you try to add an
   *          existing tag (same key), the existing tag value will be updated to the new value.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of the tag. Tag values are case-sensitive and can be null.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyspaceRequest {
  /**
   * @public
   * <p>The name of the keyspace to be created.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>A list of key-value pair tags to be attached to the keyspace.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>
   *          The replication specification of the keyspace includes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>replicationStrategy</code> - the required value is <code>SINGLE_REGION</code> or
   *             <code>MULTI_REGION</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>regionList</code> - if the <code>replicationStrategy</code> is <code>MULTI_REGION</code>, the
   *             <code>regionList</code> requires the current Region and at least one additional Amazon Web Services Region where
   *             the keyspace is going to be replicated in. The maximum number of supported replication Regions including the current
   *             Region is six.</p>
   *             </li>
   *          </ul>
   */
  replicationSpecification?: ReplicationSpecification;
}

/**
 * @public
 */
export interface CreateKeyspaceResponse {
  /**
   * @public
   * <p>The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 * <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>The operation failed due to an invalid or malformed request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * <p>Amazon Keyspaces encrypts and decrypts the table data at rest transparently and integrates with Key Management Service for storing and managing the encryption key.
 *          You can choose one of the following KMS keys (KMS keys):</p>
 *          <ul>
 *             <li>
 *                <p>Amazon Web Services owned key - This is the default encryption type. The key is owned by Amazon Keyspaces (no additional charge). </p>
 *             </li>
 *             <li>
 *                <p>Customer managed key - This key is stored in your account and is created, owned, and managed by you. You have full control over the customer
 *             managed key (KMS charges apply).</p>
 *             </li>
 *          </ul>
 *          <p>For more information about encryption at rest in Amazon Keyspaces, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *          <p>For more information about KMS, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">KMS management service concepts</a> in the <i>Key Management Service Developer Guide</i>.</p>
 */
export interface EncryptionSpecification {
  /**
   * @public
   * <p>The encryption option specified for the table. You can choose one of the following KMS keys (KMS keys):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  type: EncryptionType | string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key, for example <code>kms_key_identifier:ARN</code>.</p>
   */
  kmsKeyIdentifier?: string;
}

/**
 * @public
 * @enum
 */
export const PointInTimeRecoveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PointInTimeRecoveryStatus = (typeof PointInTimeRecoveryStatus)[keyof typeof PointInTimeRecoveryStatus];

/**
 * @public
 * <p>Point-in-time recovery (PITR) helps protect your Amazon Keyspaces tables from accidental write or delete operations by providing you continuous backups of your table data.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface PointInTimeRecovery {
  /**
   * @public
   * <p>The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status: PointInTimeRecoveryStatus | string | undefined;
}

/**
 * @public
 * <p>The partition key portion of the primary key is required
 *          and determines how Amazon Keyspaces stores the data.
 *          The partition key can be a single column, or it can be a compound value composed of two or more columns.</p>
 */
export interface PartitionKey {
  /**
   * @public
   * <p>The name(s) of the partition key column(s).</p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>The static columns of the table. Static columns store values that are shared by all rows in the same partition.</p>
 */
export interface StaticColumn {
  /**
   * @public
   * <p>The name of the static column.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>Describes the schema of the table.</p>
 */
export interface SchemaDefinition {
  /**
   * @public
   * <p>The regular columns of the table.</p>
   */
  allColumns: ColumnDefinition[] | undefined;

  /**
   * @public
   * <p>The columns that are part of the partition key of the table .</p>
   */
  partitionKeys: PartitionKey[] | undefined;

  /**
   * @public
   * <p>The columns that are part of the clustering key of the table.</p>
   */
  clusteringKeys?: ClusteringKey[];

  /**
   * @public
   * <p>The columns that have been defined as <code>STATIC</code>. Static columns store values that are shared by all rows in the same partition.</p>
   */
  staticColumns?: StaticColumn[];
}

/**
 * @public
 * @enum
 */
export const TimeToLiveStatus = {
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type TimeToLiveStatus = (typeof TimeToLiveStatus)[keyof typeof TimeToLiveStatus];

/**
 * @public
 * <p>Enable custom Time to Live (TTL) settings for rows and columns without setting a TTL default for the specified table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_enabling">Enabling TTL on tables</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface TimeToLive {
  /**
   * @public
   * <p>Shows how to enable custom Time to Live (TTL) settings for the specified table.</p>
   */
  status: TimeToLiveStatus | string | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * @public
   * <p>The name of the keyspace that the table is going to be created in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>The <code>schemaDefinition</code> consists of the
   *          following parameters.</p>
   *          <p>For each column to be created:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>  -  The name
   *             of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>  -  An Amazon Keyspaces
   *             data type. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *                   Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>The primary key of the table consists of the
   *                      following columns:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>partitionKeys</code> - The partition key can be a single column, or it can be a
   *             compound value composed of two or more columns. The partition
   *             key portion of the primary key is required and determines how
   *             Amazon Keyspaces stores your data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of each partition key column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>clusteringKeys</code> - The optional clustering column portion of your primary key
   *             determines how the data is clustered and sorted within each
   *             partition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the clustering column. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>orderBy</code> - Sets the
   *             ascendant (<code>ASC</code>) or descendant (<code>DESC</code>) order modifier.</p>
   *                <p>To define a column as static use <code>staticColumns</code>  -
   *                Static columns store values that are shared by all rows in the same partition:</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code>  -  The name
   *             of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>  -  An Amazon Keyspaces
   *             data type.</p>
   *             </li>
   *          </ul>
   */
  schemaDefinition: SchemaDefinition | undefined;

  /**
   * @public
   * <p>This parameter allows to enter a description of the table.</p>
   */
  comment?: Comment;

  /**
   * @public
   * <p>Specifies the read/write throughput capacity mode for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is
   *          <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  capacitySpecification?: CapacitySpecification;

  /**
   * @public
   * <p>Specifies how the encryption key for encryption at rest is managed for the table.
   *          You can choose one of the following KMS key (KMS key):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  encryptionSpecification?: EncryptionSpecification;

  /**
   * @public
   * <p>Specifies if <code>pointInTimeRecovery</code> is enabled or disabled for the
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the
   *                default is <code>status=DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  pointInTimeRecovery?: PointInTimeRecovery;

  /**
   * @public
   * <p>Enables Time to Live custom settings for the
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status:enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status:disabled</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>status:disabled</code>. After
   *             <code>ttl</code> is enabled, you can't disable it
   *             for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html">Expiring data by using Amazon Keyspaces Time to Live (TTL)</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  ttl?: TimeToLive;

  /**
   * @public
   * <p>The default Time to Live setting in seconds for the
   *          table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl">Setting the default TTL value for a table</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  defaultTimeToLive?: number;

  /**
   * @public
   * <p>A list of key-value pair tags to be
   *          attached to the resource. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>
   *          Enables client-side timestamps for the table. By default, the setting is disabled. You can enable
   *             client-side timestamps with the following option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status: "enabled"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Once client-side timestamps are enabled for a table, this setting cannot be disabled.</p>
   */
  clientSideTimestamps?: ClientSideTimestamps;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * @public
   * <p>The unique identifier of the table in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 * <p>The operation tried to access a keyspace or table that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique identifier in the format of Amazon Resource Name (ARN), for the resource not found.</p>
   */
  resourceArn?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * @public
 */
export interface DeleteKeyspaceRequest {
  /**
   * @public
   * <p>The name of the keyspace to be deleted.</p>
   */
  keyspaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyspaceResponse {}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * @public
   * <p>The name of the keyspace of the to be deleted table.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the table to be deleted.</p>
   */
  tableName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableResponse {}

/**
 * @public
 */
export interface GetKeyspaceRequest {
  /**
   * @public
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;
}

/**
 * @public
 */
export interface GetKeyspaceResponse {
  /**
   * @public
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>Returns the ARN of the keyspace.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>
   *          Returns the replication strategy of the keyspace. The options are <code>SINGLE_REGION</code> or <code>MULTI_REGION</code>.
   *       </p>
   */
  replicationStrategy: Rs | string | undefined;

  /**
   * @public
   * <p>
   *          If the <code>replicationStrategy</code> of the keyspace is <code>MULTI_REGION</code>, a list of replication Regions is returned.
   *       </p>
   */
  replicationRegions?: string[];
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * @public
   * <p>The name of the keyspace that the table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;
}

/**
 * @public
 * <p>The point-in-time recovery status of the specified table.</p>
 */
export interface PointInTimeRecoverySummary {
  /**
   * @public
   * <p>Shows if point-in-time recovery is enabled or disabled for the specified table.</p>
   */
  status: PointInTimeRecoveryStatus | string | undefined;

  /**
   * @public
   * <p>Specifies the earliest possible restore point of the table in ISO 8601 format.</p>
   */
  earliestRestorableTimestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const TableStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
  RESTORING: "RESTORING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus];

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * @public
   * <p>The name of the keyspace that the specified table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the specified table.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the specified table.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The creation timestamp of the specified table.</p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The current status of the specified table.</p>
   */
  status?: TableStatus | string;

  /**
   * @public
   * <p>The schema definition of the specified table.</p>
   */
  schemaDefinition?: SchemaDefinition;

  /**
   * @public
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  capacitySpecification?: CapacitySpecificationSummary;

  /**
   * @public
   * <p>The encryption settings of the specified table.</p>
   */
  encryptionSpecification?: EncryptionSpecification;

  /**
   * @public
   * <p>The point-in-time recovery status of the specified table.</p>
   */
  pointInTimeRecovery?: PointInTimeRecoverySummary;

  /**
   * @public
   * <p>The custom Time to Live settings of the specified table.</p>
   */
  ttl?: TimeToLive;

  /**
   * @public
   * <p>The default Time to Live settings in seconds of the specified table.</p>
   */
  defaultTimeToLive?: number;

  /**
   * @public
   * <p>The the description of the specified table.</p>
   */
  comment?: Comment;

  /**
   * @public
   * <p>
   *          The client-side timestamps setting of the table.</p>
   */
  clientSideTimestamps?: ClientSideTimestamps;
}

/**
 * @public
 */
export interface ListKeyspacesRequest {
  /**
   * @public
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The total number of keyspaces to return in the output. If the total number of keyspaces available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Represents the properties of a keyspace.</p>
 */
export interface KeyspaceSummary {
  /**
   * @public
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>
   *       This property specifies if a keyspace is a single Region keyspace or a multi-Region keyspace.  The available
   *       values are <code>SINGLE_REGION</code> or <code>MULTI_REGION</code>.
   *    </p>
   */
  replicationStrategy: Rs | string | undefined;

  /**
   * @public
   * <p>
   *          If the <code>replicationStrategy</code> of the keyspace is <code>MULTI_REGION</code>, a list of replication Regions is returned.
   *       </p>
   */
  replicationRegions?: string[];
}

/**
 * @public
 */
export interface ListKeyspacesResponse {
  /**
   * @public
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of keyspaces.</p>
   */
  keyspaces: KeyspaceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * @public
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The total number of tables to return in the output. If the total number of tables available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;
}

/**
 * @public
 * <p>Returns the name of the specified table, the keyspace it is stored in, and the unique identifier in the format of an Amazon Resource Name (ARN).</p>
 */
export interface TableSummary {
  /**
   * @public
   * <p>The name of the keyspace that the table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the table in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * @public
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of tables.</p>
   */
  tables?: TableSummary[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Keyspaces resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The total number of tags to return in the output. If the total number of tags available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of tags.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface RestoreTableRequest {
  /**
   * @public
   * <p>The keyspace name of the source table.</p>
   */
  sourceKeyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the source table.</p>
   */
  sourceTableName: string | undefined;

  /**
   * @public
   * <p>The name of the target keyspace.</p>
   */
  targetKeyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the target table.</p>
   */
  targetTableName: string | undefined;

  /**
   * @public
   * <p>The restore timestamp in ISO 8601 format.</p>
   */
  restoreTimestamp?: Date;

  /**
   * @public
   * <p>Specifies the read/write throughput capacity mode for the target table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  capacitySpecificationOverride?: CapacitySpecification;

  /**
   * @public
   * <p>Specifies the encryption settings for the target table. You can choose one of the following KMS key (KMS key):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  encryptionSpecificationOverride?: EncryptionSpecification;

  /**
   * @public
   * <p>Specifies the <code>pointInTimeRecovery</code> settings for the target
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the default is <code>status=DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *                Guide</i>.</p>
   */
  pointInTimeRecoveryOverride?: PointInTimeRecovery;

  /**
   * @public
   * <p>A list of key-value pair tags to be
   *          attached to the restored table. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  tagsOverride?: Tag[];
}

/**
 * @public
 */
export interface RestoreTableResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the restored table.</p>
   */
  restoredTableARN: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Keyspaces resource to which to add tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the Amazon Keyspaces resource.</p>
   */
  tags: Tag[] | undefined;
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
   * @public
   * <p>The Amazon Keyspaces resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of existing tags to be removed from the Amazon Keyspaces resource.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateTableRequest {
  /**
   * @public
   * <p>The name of the keyspace the specified table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * @public
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>For each column to be added to the specified table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>  -  The name
   *             of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>  -  An Amazon Keyspaces
   *             data type. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *                   Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  addColumns?: ColumnDefinition[];

  /**
   * @public
   * <p>Modifies the read/write throughput capacity mode for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  capacitySpecification?: CapacitySpecification;

  /**
   * @public
   * <p>Modifies the encryption settings of the table. You can choose one of the following KMS key (KMS key):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>AWS_OWNED_KMS_KEY</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  encryptionSpecification?: EncryptionSpecification;

  /**
   * @public
   * <p>Modifies the <code>pointInTimeRecovery</code> settings of the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the default is <code>status=DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  pointInTimeRecovery?: PointInTimeRecovery;

  /**
   * @public
   * <p>Modifies Time to Live custom settings for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status:enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status:disabled</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>status:disabled</code>. After
   *          <code>ttl</code> is enabled, you can't disable it
   *          for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html">Expiring data by using Amazon Keyspaces Time to Live (TTL)</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  ttl?: TimeToLive;

  /**
   * @public
   * <p>The default Time to Live setting in seconds for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl">Setting the default TTL value for a table</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  defaultTimeToLive?: number;

  /**
   * @public
   * <p>Enables client-side timestamps for the table. By default, the setting is disabled. You can enable
   *             client-side timestamps with the following option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status: "enabled"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Once client-side timestamps are enabled for a table, this setting cannot be disabled.</p>
   */
  clientSideTimestamps?: ClientSideTimestamps;
}

/**
 * @public
 */
export interface UpdateTableResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the modified table.</p>
   */
  resourceArn: string | undefined;
}
