import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { KeyspacesServiceException as __BaseException } from "./KeyspacesServiceException";

/**
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

export enum ThroughputMode {
  PAY_PER_REQUEST = "PAY_PER_REQUEST",
  PROVISIONED = "PROVISIONED",
}

/**
 * <p>Amazon Keyspaces has two read/write capacity modes for processing reads and writes on your tables: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                On-demand (default)
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                Provisioned
 *             </p>
 *             </li>
 *          </ul>
 *
 *          <p> The read/write capacity mode that you choose controls how you are charged for read and
 *          write throughput and how table throughput capacity is managed. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface CapacitySpecification {
  /**
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>. The provisioned capacity mode requires
   *                <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as inputs. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  throughputMode: ThroughputMode | string | undefined;

  /**
   * <p>The throughput capacity specified for <code>read</code> operations defined in <code>read capacity units</code>
   *             <code>(RCUs)</code>.</p>
   */
  readCapacityUnits?: number;

  /**
   * <p>The throughput capacity specified for <code>write</code> operations defined in <code>write capacity units</code>
   *             <code>(WCUs)</code>.</p>
   */
  writeCapacityUnits?: number;
}

export namespace CapacitySpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacitySpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The read/write throughput capacity mode for a table. The options are:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>throughputMode:PROVISIONED</code>. </p>
 *             </li>
 *          </ul>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface CapacitySpecificationSummary {
  /**
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>. The provisioned capacity mode requires
   *                <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as inputs. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  throughputMode: ThroughputMode | string | undefined;

  /**
   * <p>The throughput capacity specified for <code>read</code> operations defined in <code>read capacity units</code>
   *             <code>(RCUs)</code>.</p>
   */
  readCapacityUnits?: number;

  /**
   * <p>The throughput capacity specified for <code>write</code> operations defined in <code>write capacity units</code>
   *             <code>(WCUs)</code>.</p>
   */
  writeCapacityUnits?: number;

  /**
   * <p>The timestamp of the last operation that changed the provisioned throughput capacity of a table.</p>
   */
  lastUpdateToPayPerRequestTimestamp?: Date;
}

export namespace CapacitySpecificationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacitySpecificationSummary): any => ({
    ...obj,
  });
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition.</p>
 */
export interface ClusteringKey {
  /**
   * <p>The name(s) of the clustering column(s).</p>
   */
  name: string | undefined;

  /**
   * <p>Sets the ascendant (<code>ASC</code>) or descendant (<code>DESC</code>) order modifier.</p>
   */
  orderBy: SortOrder | string | undefined;
}

export namespace ClusteringKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusteringKey): any => ({
    ...obj,
  });
}

/**
 * <p>The names and data types of regular columns.</p>
 */
export interface ColumnDefinition {
  /**
   * <p>The name of the column.</p>
   */
  name: string | undefined;

  /**
   * <p>The data type of the column. For a list of available data types, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  type: string | undefined;
}

export namespace ColumnDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>An optional comment that describes the table.</p>
 */
export interface Comment {
  /**
   * <p>An optional description of the table.</p>
   */
  message: string | undefined;
}

export namespace Comment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Comment): any => ({
    ...obj,
  });
}

/**
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
 * <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource. </p>
 *          <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign.
 *          Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the
 *          prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag. Tag keys are case sensitive. Each Amazon Keyspaces resource can only have up to one tag with the same key. If you try to add an
   *          existing tag (same key), the existing tag value will be updated to the new value.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of the tag. Tag values are case-sensitive and can be null.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateKeyspaceRequest {
  /**
   * <p>The name of the keyspace to be created.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>A list of key-value pair tags to be attached to the keyspace.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  tags?: Tag[];
}

export namespace CreateKeyspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyspaceRequest): any => ({
    ...obj,
  });
}

export interface CreateKeyspaceResponse {
  /**
   * <p>The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

export namespace CreateKeyspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyspaceResponse): any => ({
    ...obj,
  });
}

/**
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

export enum EncryptionType {
  AWS_OWNED_KMS_KEY = "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY = "CUSTOMER_MANAGED_KMS_KEY",
}

/**
 * <p>
 *          Amazon Keyspaces encrypts and decrypts the table data at rest transparently and integrates with Key Management Service for storing and managing the encryption key.
 *          You can choose one of the following KMS keys (KMS keys):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                Amazon Web Services owned key - This is the default encryption type. The key is owned by Amazon Keyspaces (no additional charge). </p>
 *             </li>
 *             <li>
 *                <p>Customer managed key - This key is stored in your account and is created, owned, and managed by you. You have full control over the customer
 *                managed key (KMS charges apply).</p>
 *             </li>
 *          </ul>
 *          <p>For more information about encryption at rest in Amazon Keyspaces, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *          <p>For more information about KMS, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">KMS management service concepts</a> in the <i>Key Management Service Developer Guide</i>.</p>
 */
export interface EncryptionSpecification {
  /**
   * <p>
   *          The encryption option specified for the table. You can choose one of the following KMS keys (KMS keys):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *                This option
   *                requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  type: EncryptionType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key, for example <code>kms_key_identifier:ARN</code>.
   *          </p>
   */
  kmsKeyIdentifier?: string;
}

export namespace EncryptionSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionSpecification): any => ({
    ...obj,
  });
}

export enum PointInTimeRecoveryStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Point-in-time recovery (PITR) helps protect your Amazon Keyspaces tables from accidental write or delete operations by providing you continuous backups of your table data.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface PointInTimeRecovery {
  /**
   * <p>The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status: PointInTimeRecoveryStatus | string | undefined;
}

export namespace PointInTimeRecovery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PointInTimeRecovery): any => ({
    ...obj,
  });
}

/**
 * <p>The partition key portion of the primary key is required
 *          and determines how Amazon Keyspaces stores the data.
 *          The partition key can be a single column, or it can be a compound value composed of two or more columns. </p>
 */
export interface PartitionKey {
  /**
   * <p>The name(s) of the partition key column(s).</p>
   */
  name: string | undefined;
}

export namespace PartitionKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionKey): any => ({
    ...obj,
  });
}

/**
 * <p>The static columns of the table. Static columns store values that are shared by all rows in the same partition.</p>
 */
export interface StaticColumn {
  /**
   * <p>The name of the static column.</p>
   */
  name: string | undefined;
}

export namespace StaticColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticColumn): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the schema of the table.</p>
 */
export interface SchemaDefinition {
  /**
   * <p>The regular columns of the table.</p>
   */
  allColumns: ColumnDefinition[] | undefined;

  /**
   * <p>The columns that are part of the partition key of the table .</p>
   */
  partitionKeys: PartitionKey[] | undefined;

  /**
   * <p>The columns that are part of the clustering key of the table.</p>
   */
  clusteringKeys?: ClusteringKey[];

  /**
   * <p>The columns that have been defined as <code>STATIC</code>. Static columns store values that are shared by all rows in the same partition.</p>
   */
  staticColumns?: StaticColumn[];
}

export namespace SchemaDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaDefinition): any => ({
    ...obj,
  });
}

export enum TimeToLiveStatus {
  ENABLED = "ENABLED",
}

/**
 * <p>Enable custom Time to Live (TTL) settings for rows and columns without setting a TTL default for the specified table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_enabling">Enabling TTL on tables</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 */
export interface TimeToLive {
  /**
   * <p>Shows how to enable custom Time to Live (TTL) settings for the specified table.</p>
   */
  status: TimeToLiveStatus | string | undefined;
}

export namespace TimeToLive {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeToLive): any => ({
    ...obj,
  });
}

export interface CreateTableRequest {
  /**
   * <p>The name of the keyspace that the table is going to be created in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The <code>schemaDefinition</code> consists of the
   *          following parameters.</p>
   *          <p>For each column to be created:</p>
   *                   <ul>
   *             <li>
   *                         <p>
   *                            <i>
   *                      <code>name</code>
   *                   </i>  -  The name
   *                            of the column.</p>
   *                      </li>
   *             <li>
   *                         <p>
   *                   <code>
   *                      <i>type</i>
   *                   </code>  -  An Amazon Keyspaces
   *                            data type. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *                                  Guide</i>.</p>
   *                      </li>
   *          </ul>
   *
   *          <p>The primary key of the table consists of the
   *                      following columns:</p>
   *                   <ul>
   *             <li>
   *                         <p>
   *                   <code>partitionKeys</code> - The partition key can be a single column, or it can be a
   *                            compound value composed of two or more columns. The partition
   *                            key portion of the primary key is required and determines how
   *                            Amazon Keyspaces stores your data.</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>name</code>
   *                         </i> - The name of each partition key column.</p>
   *                   </li>
   *                </ul>
   *                      </li>
   *             <li>
   *                         <p>
   *                   <code>clusteringKeys</code> - The optional clustering column portion of your primary key
   *                            determines how the data is clustered and sorted within each
   *                            partition.</p>
   *                          <ul>
   *                   <li>
   *                               <p>
   *                                  <i>
   *                            <code>name</code>
   *                         </i> - The name of the clustering column. </p>
   *                            </li>
   *                   <li>
   *                               <p>
   *                                  <i>
   *                            <code>orderBy</code>
   *                         </i> - Sets the
   *                                  ascendant (<code>ASC</code>) or descendant (<code>DESC</code>) order modifier.</p>
   *                      </li>
   *                </ul>
   *                      </li>
   *          </ul>
   *          <p>To define a column as static use <code>
   *                <i>staticColumns</i>
   *             </code>  -
   *          Static columns store values that are shared by all rows in the same partition:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>name</code>
   *                   </i>  -  The name
   *                of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>type</i>
   *                   </code>  -  An Amazon Keyspaces
   *                data type.</p>
   *             </li>
   *          </ul>
   */
  schemaDefinition: SchemaDefinition | undefined;

  /**
   * <p>This parameter allows to enter a description of the table.</p>
   */
  comment?: Comment;

  /**
   * <p>Specifies the read/write throughput capacity mode for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>. The provisioned capacity mode requires
   *                   <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as inputs. </p>
   *             </li>
   *          </ul>
   *          <p>The default is
   *          <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  capacitySpecification?: CapacitySpecification;

  /**
   * <p>Specifies how the encryption key for encryption at rest is managed for the table.  You can choose one of the following KMS key (KMS key):</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *                This option
   *                requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  encryptionSpecification?: EncryptionSpecification;

  /**
   * <p>
   *             Specifies if <code>pointInTimeRecovery</code> is enabled or disabled for the
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>If it's not specified, the default is <code>DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  pointInTimeRecovery?: PointInTimeRecovery;

  /**
   * <p>
   *             Enables Time to Live custom settings for the
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
   *            <p>The default is <code>status:disabled</code>. After
   *             <code>ttl</code> is enabled, you can't disable it
   *             for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html">Expiring data by using Amazon Keyspaces Time to Live (TTL)</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  ttl?: TimeToLive;

  /**
   * <p>The default Time to Live setting in seconds for the
   *          table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl">Setting the default TTL value for a table</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  defaultTimeToLive?: number;

  /**
   * <p>A list of key-value pair tags to be
   *          attached to the resource. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  tags?: Tag[];
}

export namespace CreateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableRequest): any => ({
    ...obj,
  });
}

export interface CreateTableResponse {
  /**
   * <p>The unique identifier of the table in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

export namespace CreateTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation tried to access a keyspace or table that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
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

export interface DeleteKeyspaceRequest {
  /**
   * <p>The name of the keyspace to be deleted.</p>
   */
  keyspaceName: string | undefined;
}

export namespace DeleteKeyspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyspaceRequest): any => ({
    ...obj,
  });
}

export interface DeleteKeyspaceResponse {}

export namespace DeleteKeyspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyspaceResponse): any => ({
    ...obj,
  });
}

export interface DeleteTableRequest {
  /**
   * <p>The name of the keyspace of the to be deleted table.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table to be deleted.</p>
   */
  tableName: string | undefined;
}

export namespace DeleteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableResponse {}

export namespace DeleteTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableResponse): any => ({
    ...obj,
  });
}

export interface GetKeyspaceRequest {
  /**
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;
}

export namespace GetKeyspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyspaceRequest): any => ({
    ...obj,
  });
}

export interface GetKeyspaceResponse {
  /**
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The ARN of the keyspace.</p>
   */
  resourceArn: string | undefined;
}

export namespace GetKeyspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyspaceResponse): any => ({
    ...obj,
  });
}

export interface GetTableRequest {
  /**
   * <p>The name of the keyspace that the table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;
}

export namespace GetTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The point-in-time recovery status of the specified table.</p>
 */
export interface PointInTimeRecoverySummary {
  /**
   * <p>Shows if point-in-time recovery is enabled or disabled for the specified table.</p>
   */
  status: PointInTimeRecoveryStatus | string | undefined;

  /**
   * <p>Specifies the earliest possible restore point of the table in ISO 8601 format.</p>
   */
  earliestRestorableTimestamp?: Date;
}

export namespace PointInTimeRecoverySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PointInTimeRecoverySummary): any => ({
    ...obj,
  });
}

export enum TableStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDENTIALS = "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
  RESTORING = "RESTORING",
  UPDATING = "UPDATING",
}

export interface GetTableResponse {
  /**
   * <p>The name of the keyspace that the specified table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the specified table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified table.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The creation timestamp of the specified table.</p>
   */
  creationTimestamp?: Date;

  /**
   * <p>The current status of the specified table.</p>
   */
  status?: TableStatus | string;

  /**
   * <p>The schema definition of the specified table.</p>
   */
  schemaDefinition?: SchemaDefinition;

  /**
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>. </p>
   *             </li>
   *          </ul>
   */
  capacitySpecification?: CapacitySpecificationSummary;

  /**
   * <p>The encryption settings of the specified table.</p>
   */
  encryptionSpecification?: EncryptionSpecification;

  /**
   * <p>The point-in-time recovery status of the specified table.</p>
   */
  pointInTimeRecovery?: PointInTimeRecoverySummary;

  /**
   * <p>The custom Time to Live settings of the specified table.</p>
   */
  ttl?: TimeToLive;

  /**
   * <p>The default Time to Live settings of the specified table.</p>
   */
  defaultTimeToLive?: number;

  /**
   * <p>The the description of the specified table.</p>
   */
  comment?: Comment;
}

export namespace GetTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableResponse): any => ({
    ...obj,
  });
}

export interface ListKeyspacesRequest {
  /**
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * <p>The total number of keyspaces to return in the output. If the total number of keyspaces available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  maxResults?: number;
}

export namespace ListKeyspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyspacesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a keyspace.</p>
 */
export interface KeyspaceSummary {
  /**
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

export namespace KeyspaceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyspaceSummary): any => ({
    ...obj,
  });
}

export interface ListKeyspacesResponse {
  /**
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of keyspaces.</p>
   */
  keyspaces: KeyspaceSummary[] | undefined;
}

export namespace ListKeyspacesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyspacesResponse): any => ({
    ...obj,
  });
}

export interface ListTablesRequest {
  /**
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * <p>The total number of tables to return in the output. If the total number of tables available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the keyspace.</p>
   */
  keyspaceName: string | undefined;
}

export namespace ListTablesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTablesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the name of the specified table, the keyspace it is stored in, and the unique identifier in the format of an Amazon Resource Name (ARN).</p>
 */
export interface TableSummary {
  /**
   * <p>The name of the keyspace that the table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The unique identifier of the table in the format of an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

export namespace TableSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableSummary): any => ({
    ...obj,
  });
}

export interface ListTablesResponse {
  /**
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of tables.</p>
   */
  tables?: TableSummary[];
}

export namespace ListTablesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTablesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Keyspaces resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * <p>The total number of tags to return in the output. If the total number of tags available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   */
  maxResults?: number;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of tags.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface RestoreTableRequest {
  /**
   * <p>The keyspace name of the source table.</p>
   */
  sourceKeyspaceName: string | undefined;

  /**
   * <p>The name of the source table.</p>
   */
  sourceTableName: string | undefined;

  /**
   * <p>The name of the target keyspace.</p>
   */
  targetKeyspaceName: string | undefined;

  /**
   * <p>The name of the target table.</p>
   */
  targetTableName: string | undefined;

  /**
   * <p>The restore timestamp in ISO 8601 format.</p>
   */
  restoreTimestamp?: Date;

  /**
   * <p>Specifies the read/write throughput capacity mode for the target table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>. The provisioned capacity mode requires
   *                <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as inputs. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  capacitySpecificationOverride?: CapacitySpecification;

  /**
   * <p>
   *          Specifies the encryption settings for the target table. You can choose one of the following KMS key (KMS key):</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *                This option
   *                requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  encryptionSpecificationOverride?: EncryptionSpecification;

  /**
   * <p>
   *             Specifies the <code>pointInTimeRecovery</code> settings for the target
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the default is <code>DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *                Guide</i>.</p>
   */
  pointInTimeRecoveryOverride?: PointInTimeRecovery;

  /**
   * <p>A list of key-value pair tags to be
   *          attached to the restored table. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  tagsOverride?: Tag[];
}

export namespace RestoreTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreTableRequest): any => ({
    ...obj,
  });
}

export interface RestoreTableResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the restored table.</p>
   */
  restoredTableARN: string | undefined;
}

export namespace RestoreTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreTableResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Keyspaces resource to which to add tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon Keyspaces resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Keyspaces resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of existing tags to be removed from the Amazon Keyspaces resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateTableRequest {
  /**
   * <p>The name of the keyspace the specified table is stored in.</p>
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>For each column to be added to the specified table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>name</code>
   *                   </i>  -  The name
   *                of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>type</i>
   *                   </code>  -  An Amazon Keyspaces
   *                data type. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *                      Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  addColumns?: ColumnDefinition[];

  /**
   * <p>Modifies the read/write throughput capacity mode for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>. The provisioned capacity mode requires
   *                <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as inputs. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  capacitySpecification?: CapacitySpecification;

  /**
   * <p>
   *          Modifies the encryption settings of the table. You can choose one of the following KMS key (KMS key):</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *                This option
   *                requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>AWS_OWNED_KMS_KEY</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  encryptionSpecification?: EncryptionSpecification;

  /**
   * <p>
   *          Modifies the <code>pointInTimeRecovery</code> settings of the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the default is <code>DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  pointInTimeRecovery?: PointInTimeRecovery;

  /**
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
   * <p>The default Time to Live setting in seconds for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl">Setting the default TTL value for a table</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   */
  defaultTimeToLive?: number;
}

export namespace UpdateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the modified table.</p>
   */
  resourceArn: string | undefined;
}

export namespace UpdateTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableResponse): any => ({
    ...obj,
  });
}
