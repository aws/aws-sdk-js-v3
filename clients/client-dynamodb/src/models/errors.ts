// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DynamoDBServiceException as __BaseException } from "./DynamoDBServiceException";
import { AttributeValue, CancellationReason, ThrottlingReason } from "./models_0";

/**
 * <p>There is another ongoing conflicting backup control plane operation on the table.
 *             The backup is either being created, deleted or restored to a table.</p>
 * @public
 */
export class BackupInUseException extends __BaseException {
  readonly name = "BackupInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupInUseException, __BaseException>) {
    super({
      name: "BackupInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupInUseException.prototype);
  }
}

/**
 * <p>Backup not found for the given BackupARN. </p>
 * @public
 */
export class BackupNotFoundException extends __BaseException {
  readonly name = "BackupNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupNotFoundException, __BaseException>) {
    super({
      name: "BackupNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupNotFoundException.prototype);
  }
}

/**
 * <p>An error occurred on the server side.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * <p>Throughput exceeds the current throughput quota for your account. For detailed
 *             information about why the request was throttled and the ARN of the impacted resource,
 *             find the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> field in the returned exception. Contact <a href="https://aws.amazon.com/support">Amazon Web Services Support</a> to request a quota
 *             increase.</p>
 * @public
 */
export class RequestLimitExceeded extends __BaseException {
  readonly name = "RequestLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> that
   *      provide detailed diagnostic information about why the request was throttled.
   *     </p>
   * @public
   */
  ThrottlingReasons?: ThrottlingReason[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestLimitExceeded, __BaseException>) {
    super({
      name: "RequestLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestLimitExceeded.prototype);
    this.ThrottlingReasons = opts.ThrottlingReasons;
  }
}

/**
 * <p>The request was denied due to request throttling. For detailed information about why
 *             the request was throttled and the ARN of the impacted resource, find the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> field in the returned exception.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> that
   *      provide detailed diagnostic information about why the request was throttled.
   *     </p>
   * @public
   */
  throttlingReasons?: ThrottlingReason[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.throttlingReasons = opts.throttlingReasons;
  }
}

/**
 * @public
 */
export class InvalidEndpointException extends __BaseException {
  readonly name = "InvalidEndpointException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointException, __BaseException>) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling. For detailed information about
 *             why the request was throttled and the ARN of the impacted resource, find the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> field in the returned exception. The Amazon Web Services
 *             SDKs for DynamoDB automatically retry requests that receive this exception.
 *             Your request is eventually successful, unless your retry queue is too large to finish.
 *             Reduce the frequency of requests and use exponential backoff. For more information, go
 *             to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 * @public
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  readonly name = "ProvisionedThroughputExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html">ThrottlingReason</a> that
   *      provide detailed diagnostic information about why the request was throttled.
   *     </p>
   * @public
   */
  ThrottlingReasons?: ThrottlingReason[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
    this.ThrottlingReasons = opts.ThrottlingReasons;
  }
}

/**
 * <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>An item collection is too large. This exception is only returned for tables that
 *             have one or more local secondary indexes.</p>
 * @public
 */
export class ItemCollectionSizeLimitExceededException extends __BaseException {
  readonly name = "ItemCollectionSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ItemCollectionSizeLimitExceededException, __BaseException>) {
    super({
      name: "ItemCollectionSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ItemCollectionSizeLimitExceededException.prototype);
  }
}

/**
 * <p>The request was rejected because one or more items in the request are being modified
 *             by a request in another Region. </p>
 * @public
 */
export class ReplicatedWriteConflictException extends __BaseException {
  readonly name = "ReplicatedWriteConflictException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicatedWriteConflictException, __BaseException>) {
    super({
      name: "ReplicatedWriteConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicatedWriteConflictException.prototype);
  }
}

/**
 * <p>Backups have not yet been enabled for this table.</p>
 * @public
 */
export class ContinuousBackupsUnavailableException extends __BaseException {
  readonly name = "ContinuousBackupsUnavailableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContinuousBackupsUnavailableException, __BaseException>) {
    super({
      name: "ContinuousBackupsUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContinuousBackupsUnavailableException.prototype);
  }
}

/**
 * <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account.
 *             These operations include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary indexes, you can have up
 *             to 250 such requests running at a time. However, if the table or index specifications
 *             are complex, then DynamoDB might temporarily reduce the number of concurrent
 *             operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are
 *             allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request
 *             parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time.
 *             Exceeding this limit may result in request throttling.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>A target table with the specified name is either being created or deleted.
 *         </p>
 * @public
 */
export class TableInUseException extends __BaseException {
  readonly name = "TableInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableInUseException, __BaseException>) {
    super({
      name: "TableInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableInUseException.prototype);
  }
}

/**
 * <p>A source table with the name <code>TableName</code> does not currently exist within
 *             the subscriber's account or the subscriber is operating in the wrong Amazon Web Services
 *             Region.</p>
 * @public
 */
export class TableNotFoundException extends __BaseException {
  readonly name = "TableNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableNotFoundException, __BaseException>) {
    super({
      name: "TableNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableNotFoundException.prototype);
  }
}

/**
 * <p>The specified global table already exists.</p>
 * @public
 */
export class GlobalTableAlreadyExistsException extends __BaseException {
  readonly name = "GlobalTableAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalTableAlreadyExistsException, __BaseException>) {
    super({
      name: "GlobalTableAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalTableAlreadyExistsException.prototype);
  }
}

/**
 * <p>The operation conflicts with the resource's availability. For example:</p>
 *          <ul>
 *             <li>
 *                <p>You attempted to recreate an existing table.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a table currently in the <code>CREATING</code>
 *                     state.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a resource that was already being updated.</p>
 *             </li>
 *          </ul>
 *          <p>When appropriate, wait for the ongoing update to complete and attempt the request
 *             again.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>Operation was rejected because there is an ongoing transaction for the
 *             item.</p>
 * @public
 */
export class TransactionConflictException extends __BaseException {
  readonly name = "TransactionConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionConflictException, __BaseException>) {
    super({
      name: "TransactionConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionConflictException.prototype);
  }
}

/**
 * <p>The operation tried to access a nonexistent resource-based policy.</p>
 *          <p>If you specified an <code>ExpectedRevisionId</code>, it's possible that a policy is
 *             present for the resource but its revision ID didn't match the expected value.</p>
 * @public
 */
export class PolicyNotFoundException extends __BaseException {
  readonly name = "PolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFoundException, __BaseException>) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
  }
}

/**
 * <p>The specified export was not found.</p>
 * @public
 */
export class ExportNotFoundException extends __BaseException {
  readonly name = "ExportNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExportNotFoundException, __BaseException>) {
    super({
      name: "ExportNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExportNotFoundException.prototype);
  }
}

/**
 * <p>The specified global table does not exist.</p>
 * @public
 */
export class GlobalTableNotFoundException extends __BaseException {
  readonly name = "GlobalTableNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalTableNotFoundException, __BaseException>) {
    super({
      name: "GlobalTableNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalTableNotFoundException.prototype);
  }
}

/**
 * <p> The specified import was not found. </p>
 * @public
 */
export class ImportNotFoundException extends __BaseException {
  readonly name = "ImportNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImportNotFoundException, __BaseException>) {
    super({
      name: "ImportNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImportNotFoundException.prototype);
  }
}

/**
 * <p> There was an attempt to insert an item with the same primary key as an item that
 *             already exists in the DynamoDB table.</p>
 * @public
 */
export class DuplicateItemException extends __BaseException {
  readonly name = "DuplicateItemException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateItemException, __BaseException>) {
    super({
      name: "DuplicateItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateItemException.prototype);
  }
}

/**
 * <p>DynamoDB rejected the request because you retried a request with a
 *             different payload but with an idempotent token that was already used.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The transaction with the given request token is already in progress.</p>
 *          <p> Recommended Settings </p>
 *          <note>
 *             <p> This is a general recommendation for handling the
 *                     <code>TransactionInProgressException</code>. These settings help ensure that the
 *                 client retries will trigger completion of the ongoing
 *                     <code>TransactWriteItems</code> request. </p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p> Set <code>clientExecutionTimeout</code> to a value that allows at least one
 *                     retry to be processed after 5 seconds have elapsed since the first attempt for
 *                     the <code>TransactWriteItems</code> operation. </p>
 *             </li>
 *             <li>
 *                <p> Set <code>socketTimeout</code> to a value a little lower than the
 *                         <code>requestTimeout</code> setting. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>requestTimeout</code> should be set based on the time taken for the
 *                     individual retries of a single HTTP request for your use case, but setting it to
 *                     1 second or higher should work well to reduce chances of retries and
 *                         <code>TransactionInProgressException</code> errors. </p>
 *             </li>
 *             <li>
 *                <p> Use exponential backoff when retrying and tune backoff if needed. </p>
 *             </li>
 *          </ul>
 *          <p> Assuming <a href="https://github.com/aws/aws-sdk-java/blob/fd409dee8ae23fb8953e0bb4dbde65536a7e0514/aws-java-sdk-core/src/main/java/com/amazonaws/retry/PredefinedRetryPolicies.java#L97">default retry policy</a>, example timeout settings based on the guidelines
 *             above are as follows: </p>
 *          <p>Example timeline:</p>
 *          <ul>
 *             <li>
 *                <p>0-1000 first attempt</p>
 *             </li>
 *             <li>
 *                <p>1000-1500 first sleep/delay (default retry policy uses 500 ms as base delay
 *                     for 4xx errors)</p>
 *             </li>
 *             <li>
 *                <p>1500-2500 second attempt</p>
 *             </li>
 *             <li>
 *                <p>2500-3500 second sleep/delay (500 * 2, exponential backoff)</p>
 *             </li>
 *             <li>
 *                <p>3500-4500 third attempt</p>
 *             </li>
 *             <li>
 *                <p>4500-6500 third sleep/delay (500 * 2^2)</p>
 *             </li>
 *             <li>
 *                <p>6500-7500 fourth attempt (this can trigger inline recovery since 5 seconds
 *                     have elapsed since the first attempt reached TC)</p>
 *             </li>
 *          </ul>
 * @public
 */
export class TransactionInProgressException extends __BaseException {
  readonly name = "TransactionInProgressException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionInProgressException, __BaseException>) {
    super({
      name: "TransactionInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was a conflict when writing to the specified S3 bucket.</p>
 * @public
 */
export class ExportConflictException extends __BaseException {
  readonly name = "ExportConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExportConflictException, __BaseException>) {
    super({
      name: "ExportConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExportConflictException.prototype);
  }
}

/**
 * <p>The specified <code>ExportTime</code> is outside of the point in time recovery
 *             window.</p>
 * @public
 */
export class InvalidExportTimeException extends __BaseException {
  readonly name = "InvalidExportTimeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportTimeException, __BaseException>) {
    super({
      name: "InvalidExportTimeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportTimeException.prototype);
  }
}

/**
 * <p>Point in time recovery has not yet been enabled for this source table.</p>
 * @public
 */
export class PointInTimeRecoveryUnavailableException extends __BaseException {
  readonly name = "PointInTimeRecoveryUnavailableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PointInTimeRecoveryUnavailableException, __BaseException>) {
    super({
      name: "PointInTimeRecoveryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PointInTimeRecoveryUnavailableException.prototype);
  }
}

/**
 * <p> There was a conflict when importing from the specified S3 source. This can occur when
 *             the current import conflicts with a previous import request that had the same client
 *             token. </p>
 * @public
 */
export class ImportConflictException extends __BaseException {
  readonly name = "ImportConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImportConflictException, __BaseException>) {
    super({
      name: "ImportConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImportConflictException.prototype);
  }
}

/**
 * <p>A target table with the specified name already exists. </p>
 * @public
 */
export class TableAlreadyExistsException extends __BaseException {
  readonly name = "TableAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableAlreadyExistsException, __BaseException>) {
    super({
      name: "TableAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableAlreadyExistsException.prototype);
  }
}

/**
 * <p>An invalid restore time was specified. RestoreDateTime must be between
 *             EarliestRestorableDateTime and LatestRestorableDateTime.</p>
 * @public
 */
export class InvalidRestoreTimeException extends __BaseException {
  readonly name = "InvalidRestoreTimeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRestoreTimeException, __BaseException>) {
    super({
      name: "InvalidRestoreTimeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRestoreTimeException.prototype);
  }
}

/**
 * <p>The specified replica is already part of the global table.</p>
 * @public
 */
export class ReplicaAlreadyExistsException extends __BaseException {
  readonly name = "ReplicaAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicaAlreadyExistsException, __BaseException>) {
    super({
      name: "ReplicaAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicaAlreadyExistsException.prototype);
  }
}

/**
 * <p>The specified replica is no longer part of the global table.</p>
 * @public
 */
export class ReplicaNotFoundException extends __BaseException {
  readonly name = "ReplicaNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicaNotFoundException, __BaseException>) {
    super({
      name: "ReplicaNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicaNotFoundException.prototype);
  }
}

/**
 * <p>The operation tried to access a nonexistent index.</p>
 * @public
 */
export class IndexNotFoundException extends __BaseException {
  readonly name = "IndexNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IndexNotFoundException, __BaseException>) {
    super({
      name: "IndexNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IndexNotFoundException.prototype);
  }
}

/**
 * <p>A condition specified in the operation failed to be evaluated.</p>
 * @public
 */
export class ConditionalCheckFailedException extends __BaseException {
  readonly name = "ConditionalCheckFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Item which caused the <code>ConditionalCheckFailedException</code>.</p>
   * @public
   */
  Item?: Record<string, AttributeValue> | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionalCheckFailedException, __BaseException>) {
    super({
      name: "ConditionalCheckFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionalCheckFailedException.prototype);
    this.Item = opts.Item;
  }
}

/**
 * <p>The entire transaction request was canceled.</p>
 *          <p>DynamoDB cancels a <code>TransactWriteItems</code> request under the following
 *             circumstances:</p>
 *          <ul>
 *             <li>
 *                <p>A condition in one of the condition expressions is not met.</p>
 *             </li>
 *             <li>
 *                <p>A table in the <code>TransactWriteItems</code> request is in a different
 *                     account or region.</p>
 *             </li>
 *             <li>
 *                <p>More than one action in the <code>TransactWriteItems</code> operation
 *                     targets the same item.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction to be
 *                     completed.</p>
 *             </li>
 *             <li>
 *                <p>An item size becomes too large (larger than 400 KB), or a local secondary
 *                     index (LSI) becomes too large, or a similar validation error occurs because of
 *                     changes made by the transaction.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *             <li>
 *                <p> There is an ongoing <code>TransactWriteItems</code> operation that
 *                     conflicts with a concurrent <code>TransactWriteItems</code> request. In this
 *                     case the <code>TransactWriteItems</code> operation fails with a
 *                         <code>TransactionCanceledException</code>. </p>
 *             </li>
 *          </ul>
 *          <p>DynamoDB cancels a <code>TransactGetItems</code> request under the
 *             following circumstances:</p>
 *          <ul>
 *             <li>
 *                <p>There is an ongoing <code>TransactGetItems</code> operation that conflicts
 *                     with a concurrent <code>PutItem</code>, <code>UpdateItem</code>,
 *                         <code>DeleteItem</code> or <code>TransactWriteItems</code> request. In this
 *                     case the <code>TransactGetItems</code> operation fails with a
 *                         <code>TransactionCanceledException</code>.</p>
 *             </li>
 *             <li>
 *                <p>A table in the <code>TransactGetItems</code> request is in a different
 *                     account or region.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction to be
 *                     completed.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If using Java, DynamoDB lists the cancellation reasons on the
 *                     <code>CancellationReasons</code> property. This property is not set for other
 *                 languages. Transaction cancellation reasons are ordered in the order of requested
 *                 items, if an item has no error it will have <code>None</code> code and
 *                     <code>Null</code> message.</p>
 *          </note>
 *          <p>Cancellation reason codes and possible error messages:</p>
 *          <ul>
 *             <li>
 *                <p>No Errors:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>None</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: <code>null</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Conditional Check Failed:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ConditionalCheckFailed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: The conditional request failed. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Item Collection Size Limit Exceeded:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ItemCollectionSizeLimitExceeded</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: Collection size exceeded.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Transaction Conflict:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>TransactionConflict</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: Transaction is ongoing for the item.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Provisioned Throughput Exceeded:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ProvisionedThroughputExceeded</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages:</p>
 *                      <ul>
 *                         <li>
 *                            <p>The level of configured provisioned throughput for the
 *                                     table was exceeded. Consider increasing your provisioning level
 *                                     with the UpdateTable API.</p>
 *                            <note>
 *                               <p>This Message is received when provisioned throughput is
 *                                         exceeded is on a provisioned DynamoDB
 *                                         table.</p>
 *                            </note>
 *                         </li>
 *                         <li>
 *                            <p>The level of configured provisioned throughput for one or
 *                                     more global secondary indexes of the table was exceeded.
 *                                     Consider increasing your provisioning level for the
 *                                     under-provisioned global secondary indexes with the UpdateTable
 *                                     API.</p>
 *                            <note>
 *                               <p>This message is returned when provisioned throughput is
 *                                         exceeded is on a provisioned GSI.</p>
 *                            </note>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Throttling Error:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ThrottlingError</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages: </p>
 *                      <ul>
 *                         <li>
 *                            <p>Throughput exceeds the current capacity of your table or
 *                                     index. DynamoDB is automatically scaling your table or
 *                                     index so please try again shortly. If exceptions persist, check
 *                                     if you have a hot key:
 *                                     https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html.</p>
 *                            <note>
 *                               <p>This message is returned when writes get throttled on an
 *                                         On-Demand table as DynamoDB is automatically
 *                                         scaling the table.</p>
 *                            </note>
 *                         </li>
 *                         <li>
 *                            <p>Throughput exceeds the current capacity for one or more
 *                                     global secondary indexes. DynamoDB is automatically
 *                                     scaling your index so please try again shortly.</p>
 *                            <note>
 *                               <p>This message is returned when writes get throttled on an
 *                                         On-Demand GSI as DynamoDB is automatically scaling
 *                                         the GSI.</p>
 *                            </note>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Validation Error:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ValidationError</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages: </p>
 *                      <ul>
 *                         <li>
 *                            <p>One or more parameter values were invalid.</p>
 *                         </li>
 *                         <li>
 *                            <p>The update expression attempted to update the secondary
 *                                     index key beyond allowed size limits.</p>
 *                         </li>
 *                         <li>
 *                            <p>The update expression attempted to update the secondary
 *                                     index key to unsupported type.</p>
 *                         </li>
 *                         <li>
 *                            <p>An operand in the update expression has an incorrect data
 *                                     type.</p>
 *                         </li>
 *                         <li>
 *                            <p>Item size to update has exceeded the maximum allowed
 *                                     size.</p>
 *                         </li>
 *                         <li>
 *                            <p>Number overflow. Attempting to store a number with
 *                                     magnitude larger than supported range.</p>
 *                         </li>
 *                         <li>
 *                            <p>Type mismatch for attribute to update.</p>
 *                         </li>
 *                         <li>
 *                            <p>Nesting Levels have exceeded supported limits.</p>
 *                         </li>
 *                         <li>
 *                            <p>The document path provided in the update expression is
 *                                     invalid for update.</p>
 *                         </li>
 *                         <li>
 *                            <p>The provided expression refers to an attribute that does
 *                                     not exist in the item.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @public
 */
export class TransactionCanceledException extends __BaseException {
  readonly name = "TransactionCanceledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>A list of cancellation reasons.</p>
   * @public
   */
  CancellationReasons?: CancellationReason[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionCanceledException, __BaseException>) {
    super({
      name: "TransactionCanceledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionCanceledException.prototype);
    this.Message = opts.Message;
    this.CancellationReasons = opts.CancellationReasons;
  }
}
