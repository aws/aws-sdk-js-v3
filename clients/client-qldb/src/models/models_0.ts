// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { QLDBServiceException as __BaseException } from "./QLDBServiceException";

/**
 * @public
 */
export interface CancelJournalKinesisStreamRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  LedgerName: string | undefined;

  /**
   * <p>The UUID (represented in Base62-encoded text) of the QLDB journal stream to be
   *          canceled.</p>
   * @public
   */
  StreamId: string | undefined;
}

/**
 * @public
 */
export interface CancelJournalKinesisStreamResponse {
  /**
   * <p>The UUID (Base62-encoded text) of the canceled QLDB journal stream.</p>
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * <p>One or more parameters in the request aren't valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The name of the invalid parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
    this.ParameterName = opts.ParameterName;
  }
}

/**
 * <p>The specified resource doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>The operation failed because a condition wasn't satisfied in advance.</p>
 * @public
 */
export class ResourcePreconditionNotMetException extends __BaseException {
  readonly name: "ResourcePreconditionNotMetException" = "ResourcePreconditionNotMetException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePreconditionNotMetException, __BaseException>) {
    super({
      name: "ResourcePreconditionNotMetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePreconditionNotMetException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 * @enum
 */
export const PermissionsMode = {
  ALLOW_ALL: "ALLOW_ALL",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type PermissionsMode = (typeof PermissionsMode)[keyof typeof PermissionsMode];

/**
 * @public
 */
export interface CreateLedgerRequest {
  /**
   * <p>The name of the ledger that you want to create. The name must be unique among all of the
   *          ledgers in your Amazon Web Services account in the current Region.</p>
   *          <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a>
   *          in the <i>Amazon QLDB Developer Guide</i>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The key-value pairs to add as tags to the ledger that you want to create. Tag keys are
   *          case sensitive. Tag values are case sensitive and can be null.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The permissions mode to assign to the ledger that you want to create. This parameter can
   *          have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with
   *                API-level granularity for ledgers.</p>
   *                <p>This mode allows users who have the <code>SendCommand</code> API permission for
   *                this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables
   *                in the specified ledger. This mode disregards any table-level or command-level IAM
   *                permissions policies that you create for the ledger.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that
   *                enables access control with finer granularity for ledgers, tables, and PartiQL
   *                commands.</p>
   *                <p>By default, this mode denies all user requests to run any PartiQL commands on any
   *                tables in this ledger. To allow PartiQL commands to run, you must create IAM
   *                permissions policies for specific table resources and PartiQL actions, in addition to
   *                the <code>SendCommand</code> API permission for the ledger. For information, see
   *                   <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting
   *                   started with the standard permissions mode</a> in the <i>Amazon QLDB
   *                   Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize
   *             the security of your ledger data.</p>
   *          </note>
   * @public
   */
  PermissionsMode: PermissionsMode | undefined;

  /**
   * <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during
   *       ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *       ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For
   *          more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in
   *          the <i>Amazon QLDB Developer Guide</i>.</p>
   *          <p>Use one of the following options to specify this parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services
   *                on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Undefined</b>: By default, use an Amazon Web Services owned KMS
   *                key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A valid symmetric customer managed KMS key</b>: Use
   *                the specified symmetric encryption KMS key in your account that you create, own, and
   *                manage.</p>
   *                <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer
   *                   Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name
   *          (ARN), alias name, or alias ARN. When using an alias name, prefix it with
   *             <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key
   *          ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                   <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN:
   *                <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in
   *          the <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LedgerState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type LedgerState = (typeof LedgerState)[keyof typeof LedgerState];

/**
 * @public
 */
export interface CreateLedgerResponse {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the ledger.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current status of the ledger.</p>
   * @public
   */
  State?: LedgerState | undefined;

  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * <p>The permissions mode of the ledger that you created.</p>
   * @public
   */
  PermissionsMode?: PermissionsMode | undefined;

  /**
   * <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during
   *       ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *       ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The ARN of the customer managed KMS key that the ledger uses for encryption at rest. If
   *          this parameter is undefined, the ledger uses an Amazon Web Services owned KMS key for encryption.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>You have reached the limit on the maximum number of resources allowed.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The specified resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>The specified resource can't be modified at this time.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface DeleteLedgerRequest {
  /**
   * <p>The name of the ledger that you want to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeJournalKinesisStreamRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  LedgerName: string | undefined;

  /**
   * <p>The UUID (represented in Base62-encoded text) of the QLDB journal stream to
   *          describe.</p>
   * @public
   */
  StreamId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCause = {
  IAM_PERMISSION_REVOKED: "IAM_PERMISSION_REVOKED",
  KINESIS_STREAM_NOT_FOUND: "KINESIS_STREAM_NOT_FOUND",
} as const;

/**
 * @public
 */
export type ErrorCause = (typeof ErrorCause)[keyof typeof ErrorCause];

/**
 * <p>The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal
 *          stream.</p>
 * @public
 */
export interface KinesisConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis Data Streams resource.</p>
   * @public
   */
  StreamArn: string | undefined;

  /**
   * <p>Enables QLDB to publish multiple data records in a single Kinesis Data Streams record, increasing the
   *          number of records sent per API call.</p>
   *          <p>Default: <code>True</code>
   *          </p>
   *          <important>
   *             <p>Record aggregation has important implications for processing records and requires
   *             de-aggregation in your stream consumer. To learn more, see <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-concepts.html">KPL Key Concepts</a> and
   *                <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-consumer-deaggregation.html">Consumer
   *                De-aggregation</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>
   *          </important>
   * @public
   */
  AggregationEnabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IMPAIRED: "IMPAIRED",
} as const;

/**
 * @public
 */
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];

/**
 * <p>Information about an Amazon QLDB journal stream, including the Amazon Resource Name
 *          (ARN), stream name, creation time, current status, and the parameters of the original
 *          stream creation request.</p>
 * @public
 */
export interface JournalKinesisStreamDescription {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  LedgerName: string | undefined;

  /**
   * <p>The date and time, in epoch time format, when the QLDB journal stream was created.
   *          (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970
   *          UTC.)</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The inclusive start date and time from which to start streaming journal data.</p>
   * @public
   */
  InclusiveStartTime?: Date | undefined;

  /**
   * <p>The exclusive date and time that specifies when the stream ends. If this parameter is
   *          undefined, the stream runs indefinitely until you cancel it.</p>
   * @public
   */
  ExclusiveEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
   *          journal stream to write data records to a Kinesis Data Streams resource.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The UUID (represented in Base62-encoded text) of the QLDB journal stream.</p>
   * @public
   */
  StreamId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the QLDB journal stream.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current state of the QLDB journal stream.</p>
   * @public
   */
  Status: StreamStatus | undefined;

  /**
   * <p>The configuration settings of the Amazon Kinesis Data Streams destination for a QLDB journal
   *          stream.</p>
   * @public
   */
  KinesisConfiguration: KinesisConfiguration | undefined;

  /**
   * <p>The error message that describes the reason that a stream has a status of
   *             <code>IMPAIRED</code> or <code>FAILED</code>. This is not applicable to streams that
   *          have other status values.</p>
   * @public
   */
  ErrorCause?: ErrorCause | undefined;

  /**
   * <p>The user-defined name of the QLDB journal stream.</p>
   * @public
   */
  StreamName: string | undefined;
}

/**
 * @public
 */
export interface DescribeJournalKinesisStreamResponse {
  /**
   * <p>Information about the QLDB journal stream returned by a
   *             <code>DescribeJournalS3Export</code> request.</p>
   * @public
   */
  Stream?: JournalKinesisStreamDescription | undefined;
}

/**
 * @public
 */
export interface DescribeJournalS3ExportRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The UUID (represented in Base62-encoded text) of the journal export job to
   *          describe.</p>
   * @public
   */
  ExportId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  ION_BINARY: "ION_BINARY",
  ION_TEXT: "ION_TEXT",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const S3ObjectEncryptionType = {
  NO_ENCRYPTION: "NO_ENCRYPTION",
  SSE_KMS: "SSE_KMS",
  SSE_S3: "SSE_S3",
} as const;

/**
 * @public
 */
export type S3ObjectEncryptionType = (typeof S3ObjectEncryptionType)[keyof typeof S3ObjectEncryptionType];

/**
 * <p>The encryption settings that are used by a journal export job to write data in an
 *          Amazon Simple Storage Service (Amazon S3) bucket.</p>
 * @public
 */
export interface S3EncryptionConfiguration {
  /**
   * <p>The Amazon S3 object encryption type.</p>
   *          <p>To learn more about server-side encryption options in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data
   *             Using Server-Side Encryption</a> in the <i>Amazon S3 Developer
   *          Guide</i>.</p>
   * @public
   */
  ObjectEncryptionType: S3ObjectEncryptionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric encryption key in Key Management Service (KMS). Amazon S3
   *          does not support asymmetric KMS keys.</p>
   *          <p>You must provide a <code>KmsKeyArn</code> if you specify <code>SSE_KMS</code> as the
   *             <code>ObjectEncryptionType</code>.</p>
   *          <p>
   *             <code>KmsKeyArn</code> is not required if you specify <code>SSE_S3</code> as the
   *             <code>ObjectEncryptionType</code>.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal
 *          contents.</p>
 * @public
 */
export interface S3ExportConfiguration {
  /**
   * <p>The Amazon S3 bucket name in which a journal export job writes the journal contents.</p>
   *          <p>The bucket name must comply with the Amazon S3 bucket naming conventions. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and
   *             Limitations</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix for the Amazon S3 bucket in which a journal export job writes the journal
   *          contents.</p>
   *          <p>The prefix must comply with Amazon S3 key naming rules and restrictions. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3 Developer
   *          Guide</i>.</p>
   *          <p>The following are examples of valid <code>Prefix</code> values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>JournalExports-ForMyLedger/Testing/</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JournalExports</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>My:Tests/</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Prefix: string | undefined;

  /**
   * <p>The encryption settings that are used by a journal export job to write data in an Amazon S3
   *          bucket.</p>
   * @public
   */
  EncryptionConfiguration: S3EncryptionConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * <p>Information about a journal export job, including the ledger name, export ID, creation
 *          time, current status, and the parameters of the original export creation request.</p>
 * @public
 */
export interface JournalS3ExportDescription {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  LedgerName: string | undefined;

  /**
   * <p>The UUID (represented in Base62-encoded text) of the journal export job.</p>
   * @public
   */
  ExportId: string | undefined;

  /**
   * <p>The date and time, in epoch time format, when the export job was created. (Epoch time
   *          format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   * @public
   */
  ExportCreationTime: Date | undefined;

  /**
   * <p>The current state of the journal export job.</p>
   * @public
   */
  Status: ExportStatus | undefined;

  /**
   * <p>The inclusive start date and time for the range of journal contents that was specified
   *          in the original export request.</p>
   * @public
   */
  InclusiveStartTime: Date | undefined;

  /**
   * <p>The exclusive end date and time for the range of journal contents that was specified in
   *          the original export request.</p>
   * @public
   */
  ExclusiveEndTime: Date | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal
   *          contents.</p>
   * @public
   */
  S3ExportConfiguration: S3ExportConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
   *          journal export job to do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p>
   *             </li>
   *             <li>
   *                <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side
   *                encryption of your exported data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The output format of the exported journal data.</p>
   * @public
   */
  OutputFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface DescribeJournalS3ExportResponse {
  /**
   * <p>Information about the journal export job returned by a
   *             <code>DescribeJournalS3Export</code> request.</p>
   * @public
   */
  ExportDescription: JournalS3ExportDescription | undefined;
}

/**
 * @public
 */
export interface DescribeLedgerRequest {
  /**
   * <p>The name of the ledger that you want to describe.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionStatus = {
  ENABLED: "ENABLED",
  KMS_KEY_INACCESSIBLE: "KMS_KEY_INACCESSIBLE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

/**
 * <p>Information about the encryption of data at rest in an Amazon QLDB ledger. This includes
 *          the current status, the key in Key Management Service (KMS), and when the key became inaccessible (in
 *          the case of an error).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in
 *          the <i>Amazon QLDB Developer Guide</i>.</p>
 * @public
 */
export interface LedgerEncryptionDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key that the ledger uses for
   *          encryption at rest. If this parameter is undefined, the ledger uses an Amazon Web Services owned KMS key
   *          for encryption. It will display <code>AWS_OWNED_KMS_KEY</code> when updating the ledger's encryption configuration to the Amazon Web Services owned KMS key.</p>
   * @public
   */
  KmsKeyArn: string | undefined;

  /**
   * <p>The current state of encryption at rest for the ledger. This can be one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: Encryption is fully enabled using the specified key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>: The ledger is actively processing the specified key
   *                change.</p>
   *                <p>Key changes in QLDB are asynchronous. The ledger is fully accessible without any
   *                performance impact while the key change is being processed. The amount of time it
   *                takes to update a key varies depending on the ledger size.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KMS_KEY_INACCESSIBLE</code>: The specified customer managed KMS key is not
   *                accessible, and the ledger is impaired. Either the key was disabled or deleted, or
   *                the grants on the key were revoked. When a ledger is impaired, it is not accessible
   *                and does not accept any read or write requests.</p>
   *                <p>An impaired ledger automatically returns to an active state after you restore the
   *                grants on the key, or re-enable the key that was disabled. However, deleting a
   *                customer managed KMS key is irreversible. After a key is deleted, you can no longer
   *                access the ledgers that are protected with that key, and the data becomes
   *                unrecoverable permanently.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionStatus: EncryptionStatus | undefined;

  /**
   * <p>The date and time, in epoch time format, when the KMS key first became inaccessible,
   *          in the case of an error. (Epoch time format is the number of seconds that have elapsed
   *          since 12:00:00 AM January 1, 1970 UTC.)</p>
   *          <p>This parameter is undefined if the KMS key is accessible.</p>
   * @public
   */
  InaccessibleKmsKeyDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLedgerResponse {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the ledger.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current status of the ledger.</p>
   * @public
   */
  State?: LedgerState | undefined;

  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * <p>The permissions mode of the ledger.</p>
   * @public
   */
  PermissionsMode?: PermissionsMode | undefined;

  /**
   * <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during
   *       ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *       ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Information about the encryption of data at rest in the ledger. This includes the
   *          current status, the KMS key, and when the key became inaccessible (in the case of an
   *          error). If this parameter is undefined, the ledger uses an Amazon Web Services owned KMS key for encryption.</p>
   * @public
   */
  EncryptionDescription?: LedgerEncryptionDescription | undefined;
}

/**
 * @public
 */
export interface ExportJournalToS3Request {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The inclusive start date and time for the range of journal contents to export.</p>
   *          <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time
   *          format and in Universal Coordinated Time (UTC). For example:
   *             <code>2019-06-13T21:36:34Z</code>.</p>
   *          <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p>
   *          <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's
   *             <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's
   *             <code>CreationDateTime</code>.</p>
   * @public
   */
  InclusiveStartTime: Date | undefined;

  /**
   * <p>The exclusive end date and time for the range of journal contents to export.</p>
   *          <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format
   *          and in Universal Coordinated Time (UTC). For example:
   *          <code>2019-06-13T21:36:34Z</code>.</p>
   *          <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and
   *          time.</p>
   * @public
   */
  ExclusiveEndTime: Date | undefined;

  /**
   * <p>The configuration settings of the Amazon S3 bucket destination for your export
   *          request.</p>
   * @public
   */
  S3ExportConfiguration: S3ExportConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
   *          journal export job to do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Write objects into your Amazon S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side
   *                encryption of your exported data.</p>
   *             </li>
   *          </ul>
   *          <p>To pass a role to QLDB when requesting a journal export, you must have permissions to
   *          perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for
   *          all journal export requests.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The output format of your exported journal data. A journal export job can write the data
   *          objects in either the text or binary representation of <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ion.html">Amazon Ion</a> format, or in <a href="https://jsonlines.org/">JSON Lines</a> text format.</p>
   *          <p>Default: <code>ION_TEXT</code>
   *          </p>
   *          <p>In JSON Lines format, each journal block in an exported data object is a valid JSON
   *          object that is delimited by a newline. You can use this format to directly integrate JSON
   *          exports with analytics tools such as Amazon Athena and Glue
   *          because these services can parse newline-delimited JSON automatically.</p>
   * @public
   */
  OutputFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface ExportJournalToS3Response {
  /**
   * <p>The UUID (represented in Base62-encoded text) that QLDB assigns to each journal export
   *          job.</p>
   *          <p>To describe your export request and check the status of the job, you can use
   *             <code>ExportId</code> to call <code>DescribeJournalS3Export</code>.</p>
   * @public
   */
  ExportId: string | undefined;
}

/**
 * <p>A structure that can contain a value in multiple encoding formats.</p>
 * @public
 */
export interface ValueHolder {
  /**
   * <p>An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.</p>
   * @public
   */
  IonText?: string | undefined;
}

/**
 * @public
 */
export interface GetBlockRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The location of the block that you want to request. An address is an Amazon Ion
   *          structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p>
   *          <p>For example: <code>\{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14\}</code>.</p>
   * @public
   */
  BlockAddress: ValueHolder | undefined;

  /**
   * <p>The latest block location covered by the digest for which to request a proof. An address
   *          is an Amazon Ion structure that has two fields: <code>strandId</code> and
   *             <code>sequenceNo</code>.</p>
   *          <p>For example: <code>\{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49\}</code>.</p>
   * @public
   */
  DigestTipAddress?: ValueHolder | undefined;
}

/**
 * @public
 */
export interface GetBlockResponse {
  /**
   * <p>The block data object in Amazon Ion format.</p>
   * @public
   */
  Block: ValueHolder | undefined;

  /**
   * <p>The proof object in Amazon Ion format returned by a <code>GetBlock</code> request. A
   *          proof contains the list of hash values required to recalculate the specified digest using a
   *          Merkle tree, starting with the specified block.</p>
   * @public
   */
  Proof?: ValueHolder | undefined;
}

/**
 * @public
 */
export interface GetDigestRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDigestResponse {
  /**
   * <p>The 256-bit hash value representing the digest returned by a <code>GetDigest</code>
   *          request.</p>
   * @public
   */
  Digest: Uint8Array | undefined;

  /**
   * <p>The latest block location covered by the digest that you requested. An address is an
   *          Amazon Ion structure that has two fields: <code>strandId</code> and
   *          <code>sequenceNo</code>.</p>
   * @public
   */
  DigestTipAddress: ValueHolder | undefined;
}

/**
 * @public
 */
export interface GetRevisionRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The block location of the document revision to be verified. An address is an Amazon Ion
   *          structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p>
   *          <p>For example: <code>\{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14\}</code>.</p>
   * @public
   */
  BlockAddress: ValueHolder | undefined;

  /**
   * <p>The UUID (represented in Base62-encoded text) of the document to be verified.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The latest block location covered by the digest for which to request a proof. An address
   *          is an Amazon Ion structure that has two fields: <code>strandId</code> and
   *             <code>sequenceNo</code>.</p>
   *          <p>For example: <code>\{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49\}</code>.</p>
   * @public
   */
  DigestTipAddress?: ValueHolder | undefined;
}

/**
 * @public
 */
export interface GetRevisionResponse {
  /**
   * <p>The proof object in Amazon Ion format returned by a <code>GetRevision</code> request. A
   *          proof contains the list of hash values that are required to recalculate the specified
   *          digest using a Merkle tree, starting with the specified document revision.</p>
   * @public
   */
  Proof?: ValueHolder | undefined;

  /**
   * <p>The document revision data object in Amazon Ion format.</p>
   * @public
   */
  Revision: ValueHolder | undefined;
}

/**
 * @public
 */
export interface ListJournalKinesisStreamsForLedgerRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  LedgerName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single
   *             <code>ListJournalKinesisStreamsForLedger</code> request. (The actual number of results
   *          returned might be fewer.)</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token, indicating that you want to retrieve the next page of results. If
   *          you received a value for <code>NextToken</code> in the response from a previous
   *             <code>ListJournalKinesisStreamsForLedger</code> call, you should use that value as input
   *          here.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJournalKinesisStreamsForLedgerResponse {
  /**
   * <p>The QLDB journal streams that are currently associated with the given ledger.</p>
   * @public
   */
  Streams?: JournalKinesisStreamDescription[] | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>If <code>NextToken</code> is empty, the last page of results has been processed
   *                and there are no more results to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>If <code>NextToken</code> is <i>not</i> empty, more results are
   *                available. To retrieve the next page of results, use the value of
   *                   <code>NextToken</code> in a subsequent
   *                   <code>ListJournalKinesisStreamsForLedger</code> call.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJournalS3ExportsRequest {
  /**
   * <p>The maximum number of results to return in a single <code>ListJournalS3Exports</code>
   *          request. (The actual number of results returned might be fewer.)</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token, indicating that you want to retrieve the next page of results. If
   *          you received a value for <code>NextToken</code> in the response from a previous
   *             <code>ListJournalS3Exports</code> call, then you should use that value as input
   *          here.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJournalS3ExportsResponse {
  /**
   * <p>The journal export jobs for all ledgers that are associated with the current
   *          Amazon Web Services account and Region.</p>
   * @public
   */
  JournalS3Exports?: JournalS3ExportDescription[] | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>If <code>NextToken</code> is empty, then the last page of results has been
   *                processed and there are no more results to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
   *                results available. To retrieve the next page of results, use the value of
   *                   <code>NextToken</code> in a subsequent <code>ListJournalS3Exports</code>
   *                call.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJournalS3ExportsForLedgerRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum number of results to return in a single
   *             <code>ListJournalS3ExportsForLedger</code> request. (The actual number of results
   *          returned might be fewer.)</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token, indicating that you want to retrieve the next page of results. If
   *          you received a value for <code>NextToken</code> in the response from a previous
   *             <code>ListJournalS3ExportsForLedger</code> call, then you should use that value as input
   *          here.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJournalS3ExportsForLedgerResponse {
  /**
   * <p>The journal export jobs that are currently associated with the specified ledger.</p>
   * @public
   */
  JournalS3Exports?: JournalS3ExportDescription[] | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>If <code>NextToken</code> is empty, then the last page of results has been
   *                processed and there are no more results to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
   *                results available. To retrieve the next page of results, use the value of
   *                   <code>NextToken</code> in a subsequent <code>ListJournalS3ExportsForLedger</code>
   *                call.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLedgersRequest {
  /**
   * <p>The maximum number of results to return in a single <code>ListLedgers</code> request.
   *          (The actual number of results returned might be fewer.)</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token, indicating that you want to retrieve the next page of results. If
   *          you received a value for <code>NextToken</code> in the response from a previous
   *             <code>ListLedgers</code> call, then you should use that value as input here.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a ledger, including its name, state, and when it was created.</p>
 * @public
 */
export interface LedgerSummary {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current status of the ledger.</p>
   * @public
   */
  State?: LedgerState | undefined;

  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   * @public
   */
  CreationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLedgersResponse {
  /**
   * <p>The ledgers that are associated with the current Amazon Web Services account and Region.</p>
   * @public
   */
  Ledgers?: LedgerSummary[] | undefined;

  /**
   * <p>A pagination token, indicating whether there are more results available:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>NextToken</code> is empty, then the last page of results has been
   *                processed and there are no more results to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
   *                results available. To retrieve the next page of results, use the value of
   *                   <code>NextToken</code> in a subsequent <code>ListLedgers</code> call.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for which to list the tags. For example:</p>
   *          <p>
   *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are currently associated with the specified Amazon QLDB resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StreamJournalToKinesisRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  LedgerName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
   *          journal stream to write data records to a Kinesis Data Streams resource.</p>
   *          <p>To pass a role to QLDB when requesting a journal stream, you must have permissions to
   *          perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for
   *          all journal stream requests.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The key-value pairs to add as tags to the stream that you want to create. Tag keys are
   *          case sensitive. Tag values are case sensitive and can be null.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The inclusive start date and time from which to start streaming journal data. This
   *          parameter must be in <code>ISO 8601</code> date and time format and in Universal
   *          Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p>
   *          <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before
   *             <code>ExclusiveEndTime</code>.</p>
   *          <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's
   *             <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's
   *             <code>CreationDateTime</code>.</p>
   * @public
   */
  InclusiveStartTime: Date | undefined;

  /**
   * <p>The exclusive date and time that specifies when the stream ends. If you don't define
   *          this parameter, the stream runs indefinitely until you cancel it.</p>
   *          <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format
   *          and in Universal Coordinated Time (UTC). For example:
   *          <code>2019-06-13T21:36:34Z</code>.</p>
   * @public
   */
  ExclusiveEndTime?: Date | undefined;

  /**
   * <p>The configuration settings of the Kinesis Data Streams destination for your stream request.</p>
   * @public
   */
  KinesisConfiguration: KinesisConfiguration | undefined;

  /**
   * <p>The name that you want to assign to the QLDB journal stream. User-defined names can
   *          help identify and indicate the purpose of a stream.</p>
   *          <p>Your stream name must be unique among other <i>active</i> streams for a
   *          given ledger. Stream names have the same naming constraints as ledger names, as defined in
   *             <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer
   *          Guide</i>.</p>
   * @public
   */
  StreamName: string | undefined;
}

/**
 * @public
 */
export interface StreamJournalToKinesisResponse {
  /**
   * <p>The UUID (represented in Base62-encoded text) that QLDB assigns to each QLDB journal
   *          stream.</p>
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to which you want to add the tags. For example:</p>
   *          <p>
   *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case
   *          sensitive. If you specify a key that already exists for the resource, your request fails
   *          and returns an error. Tag values are case sensitive and can be null.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) from which to remove the tags. For example:</p>
   *          <p>
   *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateLedgerRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during
   *       ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *       ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For
   *          more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in
   *          the <i>Amazon QLDB Developer Guide</i>.</p>
   *          <p>Use one of the following options to specify this parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services
   *                on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Undefined</b>: Make no changes to the KMS key of the
   *                ledger.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A valid symmetric customer managed KMS key</b>: Use
   *                the specified symmetric encryption KMS key in your account that you create, own, and
   *                manage.</p>
   *                <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer
   *                   Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name
   *          (ARN), alias name, or alias ARN. When using an alias name, prefix it with
   *             <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key
   *          ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                   <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN:
   *                <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in
   *          the <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLedgerResponse {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the ledger.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current status of the ledger.</p>
   * @public
   */
  State?: LedgerState | undefined;

  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during
   *       ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *       ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Information about the encryption of data at rest in the ledger. This includes the
   *          current status, the KMS key, and when the key became inaccessible (in the case of an
   *          error).</p>
   * @public
   */
  EncryptionDescription?: LedgerEncryptionDescription | undefined;
}

/**
 * @public
 */
export interface UpdateLedgerPermissionsModeRequest {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The permissions mode to assign to the ledger. This parameter can have one of the
   *          following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with
   *                API-level granularity for ledgers.</p>
   *                <p>This mode allows users who have the <code>SendCommand</code> API permission for
   *                this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables
   *                in the specified ledger. This mode disregards any table-level or command-level IAM
   *                permissions policies that you create for the ledger.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that
   *                enables access control with finer granularity for ledgers, tables, and PartiQL
   *                commands.</p>
   *                <p>By default, this mode denies all user requests to run any PartiQL commands on any
   *                tables in this ledger. To allow PartiQL commands to run, you must create IAM
   *                permissions policies for specific table resources and PartiQL actions, in addition to
   *                the <code>SendCommand</code> API permission for the ledger. For information, see
   *                   <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting
   *                   started with the standard permissions mode</a> in the <i>Amazon QLDB
   *                   Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize
   *             the security of your ledger data.</p>
   *          </note>
   * @public
   */
  PermissionsMode: PermissionsMode | undefined;
}

/**
 * @public
 */
export interface UpdateLedgerPermissionsModeResponse {
  /**
   * <p>The name of the ledger.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the ledger.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current permissions mode of the ledger.</p>
   * @public
   */
  PermissionsMode?: PermissionsMode | undefined;
}

/**
 * @internal
 */
export const ValueHolderFilterSensitiveLog = (obj: ValueHolder): any => ({
  ...obj,
  ...(obj.IonText && { IonText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetBlockRequestFilterSensitiveLog = (obj: GetBlockRequest): any => ({
  ...obj,
  ...(obj.BlockAddress && { BlockAddress: SENSITIVE_STRING }),
  ...(obj.DigestTipAddress && { DigestTipAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetBlockResponseFilterSensitiveLog = (obj: GetBlockResponse): any => ({
  ...obj,
  ...(obj.Block && { Block: SENSITIVE_STRING }),
  ...(obj.Proof && { Proof: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDigestResponseFilterSensitiveLog = (obj: GetDigestResponse): any => ({
  ...obj,
  ...(obj.DigestTipAddress && { DigestTipAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRevisionRequestFilterSensitiveLog = (obj: GetRevisionRequest): any => ({
  ...obj,
  ...(obj.BlockAddress && { BlockAddress: SENSITIVE_STRING }),
  ...(obj.DigestTipAddress && { DigestTipAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRevisionResponseFilterSensitiveLog = (obj: GetRevisionResponse): any => ({
  ...obj,
  ...(obj.Proof && { Proof: SENSITIVE_STRING }),
  ...(obj.Revision && { Revision: SENSITIVE_STRING }),
});
