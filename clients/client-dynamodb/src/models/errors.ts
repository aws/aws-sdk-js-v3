// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { DynamoDBServiceException as __BaseException } from "./DynamoDBServiceException";
import type { AttributeValue, CancellationReason, ThrottlingReason } from "./models_0";

/**
 * There is another ongoing conflicting backup control plane operation on the table. The backup is either being created, deleted or restored to a table.
 *
 * @public
 */
export class BackupInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#BackupInUseException";
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
 * Backup not found for the given BackupARN.
 *
 * @public
 */
export class BackupNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#BackupNotFoundException";
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
 * An error occurred on the server side.
 *
 * @public
 */
export class InternalServerError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#InternalServerError";
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
 * Throughput exceeds the current throughput quota for your account. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception. Contact [Amazon Web Services Support](https://aws.amazon.com/support) to request a quota increase.
 *
 * @public
 */
export class RequestLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#RequestLimitExceeded";
  readonly name = "RequestLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * A list of [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) that provide detailed diagnostic information about why the request was throttled.
   *
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
 * The request was denied due to request throttling. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * A list of [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) that provide detailed diagnostic information about why the request was throttled.
   *
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
  public static readonly shapeId: string = "com.amazonaws.dynamodb#InvalidEndpointException";
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
 * The request was denied due to request throttling. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception. The Amazon Web Services SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to [Error Retries and Exponential Backoff](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff) in the *Amazon DynamoDB Developer Guide*.
 *
 * @public
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ProvisionedThroughputExceededException";
  readonly name = "ProvisionedThroughputExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * A list of [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) that provide detailed diagnostic information about why the request was throttled.
   *
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
 * The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ResourceNotFoundException";
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
 * An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.
 *
 * @public
 */
export class ItemCollectionSizeLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException";
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
 * The request was rejected because one or more items in the request are being modified by a request in another Region.
 *
 * @public
 */
export class ReplicatedWriteConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ReplicatedWriteConflictException";
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
 * Backups have not yet been enabled for this table.
 *
 * @public
 */
export class ContinuousBackupsUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException";
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
 * There is no limit to the number of daily on-demand backups that can be taken.
 *
 * For most purposes, up to 500 simultaneous table operations are allowed per account. These operations include `CreateTable`, `UpdateTable`, `DeleteTable`,`UpdateTimeToLive`, `RestoreTableFromBackup`, and `RestoreTableToPointInTime`.
 *
 * When you are creating a table with one or more secondary indexes, you can have up to 250 such requests running at a time. However, if the table or index specifications are complex, then DynamoDB might temporarily reduce the number of concurrent operations.
 *
 * When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.
 *
 * There is a soft account quota of 2,500 tables.
 *
 * GetRecords was called with a value of more than 1000 for the limit request parameter.
 *
 * More than 2 processes are reading from the same streams shard at the same time. Exceeding this limit may result in request throttling.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#LimitExceededException";
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
 * A target table with the specified name is either being created or deleted.
 *
 * @public
 */
export class TableInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#TableInUseException";
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
 * A source table with the name `TableName` does not currently exist within the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.
 *
 * @public
 */
export class TableNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#TableNotFoundException";
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
 * The specified global table already exists.
 *
 * @public
 */
export class GlobalTableAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException";
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
 * The operation conflicts with the resource's availability. For example:
 *
 * - You attempted to recreate an existing table.
 * - You tried to delete a table currently in the `CREATING` state.
 * - You tried to update a resource that was already being updated.
 *
 * When appropriate, wait for the ongoing update to complete and attempt the request again.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ResourceInUseException";
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
 * Operation was rejected because there is an ongoing transaction for the item.
 *
 * @public
 */
export class TransactionConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#TransactionConflictException";
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
 * The operation tried to access a nonexistent resource-based policy.
 *
 * If you specified an `ExpectedRevisionId`, it's possible that a policy is present for the resource but its revision ID didn't match the expected value.
 *
 * @public
 */
export class PolicyNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#PolicyNotFoundException";
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
 * The specified export was not found.
 *
 * @public
 */
export class ExportNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ExportNotFoundException";
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
 * The specified global table does not exist.
 *
 * @public
 */
export class GlobalTableNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#GlobalTableNotFoundException";
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
 * The specified import was not found.
 *
 * @public
 */
export class ImportNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ImportNotFoundException";
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
 * There was an attempt to insert an item with the same primary key as an item that already exists in the DynamoDB table.
 *
 * @public
 */
export class DuplicateItemException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#DuplicateItemException";
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
 * DynamoDB rejected the request because you retried a request with a different payload but with an idempotent token that was already used.
 *
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#IdempotentParameterMismatchException";
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
 * The transaction with the given request token is already in progress.
 *
 * Recommended Settings
 *
 * > **Note:** This is a general recommendation for handling the `TransactionInProgressException`. These settings help ensure that the client retries will trigger completion of the ongoing `TransactWriteItems` request.
 *
 * - Set `clientExecutionTimeout` to a value that allows at least one retry to be processed after 5 seconds have elapsed since the first attempt for the `TransactWriteItems` operation.
 * - Set `socketTimeout` to a value a little lower than the `requestTimeout` setting.
 * - `requestTimeout` should be set based on the time taken for the individual retries of a single HTTP request for your use case, but setting it to 1 second or higher should work well to reduce chances of retries and `TransactionInProgressException` errors.
 * - Use exponential backoff when retrying and tune backoff if needed.
 *
 * Assuming [default retry policy](https://github.com/aws/aws-sdk-java/blob/fd409dee8ae23fb8953e0bb4dbde65536a7e0514/aws-java-sdk-core/src/main/java/com/amazonaws/retry/PredefinedRetryPolicies.java#L97), example timeout settings based on the guidelines above are as follows:
 *
 * Example timeline:
 *
 * - 0-1000 first attempt
 * - 1000-1500 first sleep/delay (default retry policy uses 500 ms as base delay for 4xx errors)
 * - 1500-2500 second attempt
 * - 2500-3500 second sleep/delay (500 * 2, exponential backoff)
 * - 3500-4500 third attempt
 * - 4500-6500 third sleep/delay (500 * 2^2)
 * - 6500-7500 fourth attempt (this can trigger inline recovery since 5 seconds have elapsed since the first attempt reached TC)
 *
 * @public
 */
export class TransactionInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#TransactionInProgressException";
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
 * There was a conflict when writing to the specified S3 bucket.
 *
 * @public
 */
export class ExportConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ExportConflictException";
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
 * The specified `ExportTime` is outside of the point in time recovery window.
 *
 * @public
 */
export class InvalidExportTimeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#InvalidExportTimeException";
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
 * Point in time recovery has not yet been enabled for this source table.
 *
 * @public
 */
export class PointInTimeRecoveryUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException";
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
 * There was a conflict when importing from the specified S3 source. This can occur when the current import conflicts with a previous import request that had the same client token.
 *
 * @public
 */
export class ImportConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ImportConflictException";
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
 * A target table with the specified name already exists.
 *
 * @public
 */
export class TableAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#TableAlreadyExistsException";
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
 * An invalid restore time was specified. RestoreDateTime must be between EarliestRestorableDateTime and LatestRestorableDateTime.
 *
 * @public
 */
export class InvalidRestoreTimeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#InvalidRestoreTimeException";
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
 * The specified replica is already part of the global table.
 *
 * @public
 */
export class ReplicaAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ReplicaAlreadyExistsException";
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
 * The specified replica is no longer part of the global table.
 *
 * @public
 */
export class ReplicaNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ReplicaNotFoundException";
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
 * The operation tried to access a nonexistent index.
 *
 * @public
 */
export class IndexNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#IndexNotFoundException";
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
 * A condition specified in the operation failed to be evaluated.
 *
 * @public
 */
export class ConditionalCheckFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#ConditionalCheckFailedException";
  readonly name = "ConditionalCheckFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * Item which caused the `ConditionalCheckFailedException`.
   *
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
 * The entire transaction request was canceled.
 *
 * DynamoDB cancels a `TransactWriteItems` request under the following circumstances:
 *
 * - A condition in one of the condition expressions is not met.
 * - A table in the `TransactWriteItems` request is in a different account or region.
 * - More than one action in the `TransactWriteItems` operation targets the same item.
 * - There is insufficient provisioned capacity for the transaction to be completed.
 * - An item size becomes too large (larger than 400 KB), or a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.
 * - There is a user error, such as an invalid data format.
 * - There is an ongoing `TransactWriteItems` operation that conflicts with a concurrent `TransactWriteItems` request. In this case the `TransactWriteItems` operation fails with a `TransactionCanceledException`.
 *
 * DynamoDB cancels a `TransactGetItems` request under the following circumstances:
 *
 * - There is an ongoing `TransactGetItems` operation that conflicts with a concurrent `PutItem`, `UpdateItem`, `DeleteItem` or `TransactWriteItems` request. In this case the `TransactGetItems` operation fails with a `TransactionCanceledException`.
 * - A table in the `TransactGetItems` request is in a different account or region.
 * - There is insufficient provisioned capacity for the transaction to be completed.
 * - There is a user error, such as an invalid data format.
 *
 * > **Note:** DynamoDB lists the cancellation reasons on the `CancellationReasons` property. Transaction cancellation reasons are ordered in the order of requested items, if an item has no error it will have `None` code and `Null` message. The `None` code is returned as the literal string `"None"`, not a null or absent value; the message field is omitted entirely for an item that has no error. This is important to note when using an SDK that surfaces the code as an optional or nullable type.
 *
 * Cancellation reason codes and possible error messages:
 *
 * - No Errors:
 *
 *   - Code: `None`
 *   - Message: `null`
 * - Conditional Check Failed:
 *
 *   - Code: `ConditionalCheckFailed`
 *   - Message: The conditional request failed.
 * - Item Collection Size Limit Exceeded:
 *
 *   - Code: `ItemCollectionSizeLimitExceeded`
 *   - Message: Collection size exceeded.
 * - Transaction Conflict:
 *
 *   - Code: `TransactionConflict`
 *   - Message: Transaction is ongoing for the item.
 * - Provisioned Throughput Exceeded:
 *
 *   - Code: `ProvisionedThroughputExceeded`
 *   - Messages:
 *
 *     - The level of configured provisioned throughput for the table was exceeded. Consider increasing your provisioning level with the UpdateTable API.
 *
 *       > **Note:** This Message is received when provisioned throughput is exceeded is on a provisioned DynamoDB table.
 *     - The level of configured provisioned throughput for one or more global secondary indexes of the table was exceeded. Consider increasing your provisioning level for the under-provisioned global secondary indexes with the UpdateTable API.
 *
 *       > **Note:** This message is returned when provisioned throughput is exceeded is on a provisioned GSI.
 * - Throttling Error:
 *
 *   - Code: `ThrottlingError`
 *   - Messages:
 *
 *     - Throughput exceeds the current capacity of your table or index. DynamoDB is automatically scaling your table or index so please try again shortly. If exceptions persist, check if you have a hot key: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html.
 *
 *       > **Note:** This message is returned when writes get throttled on an On-Demand table as DynamoDB is automatically scaling the table.
 *     - Throughput exceeds the current capacity for one or more global secondary indexes. DynamoDB is automatically scaling your index so please try again shortly.
 *
 *       > **Note:** This message is returned when writes get throttled on an On-Demand GSI as DynamoDB is automatically scaling the GSI.
 * - Validation Error:
 *
 *   - Code: `ValidationError`
 *   - Messages:
 *
 *     - One or more parameter values were invalid.
 *     - The update expression attempted to update the secondary index key beyond allowed size limits.
 *     - The update expression attempted to update the secondary index key to unsupported type.
 *     - An operand in the update expression has an incorrect data type.
 *     - Item size to update has exceeded the maximum allowed size.
 *     - Number overflow. Attempting to store a number with magnitude larger than supported range.
 *     - Type mismatch for attribute to update.
 *     - Nesting Levels have exceeded supported limits.
 *     - The document path provided in the update expression is invalid for update.
 *     - The provided expression refers to an attribute that does not exist in the item.
 *
 * @public
 */
export class TransactionCanceledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dynamodb#TransactionCanceledException";
  readonly name = "TransactionCanceledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * A list of cancellation reasons.
   *
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
