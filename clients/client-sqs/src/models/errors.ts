// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { SQSServiceException as __BaseException } from "./SQSServiceException";

/**
 * The specified ID is invalid.
 *
 * @public
 */
export class InvalidAddress extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#InvalidAddress";
  readonly name = "InvalidAddress" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAddress, __BaseException>) {
    super({
      name: "InvalidAddress",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAddress.prototype);
  }
}

/**
 * The request was not made over HTTPS or did not use SigV4 for signing.
 *
 * @public
 */
export class InvalidSecurity extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#InvalidSecurity";
  readonly name = "InvalidSecurity" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecurity, __BaseException>) {
    super({
      name: "InvalidSecurity",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecurity.prototype);
  }
}

/**
 * The specified action violates a limit. For example, `ReceiveMessage` returns this error if the maximum number of in flight messages is reached and `AddPermission` returns this error if the maximum number of permissions for the queue is reached.
 *
 * @public
 */
export class OverLimit extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#OverLimit";
  readonly name = "OverLimit" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OverLimit, __BaseException>) {
    super({
      name: "OverLimit",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OverLimit.prototype);
  }
}

/**
 * Ensure that the `QueueUrl` is correct and that the queue has not been deleted.
 *
 * @public
 */
export class QueueDoesNotExist extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#QueueDoesNotExist";
  readonly name = "QueueDoesNotExist" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueueDoesNotExist, __BaseException>) {
    super({
      name: "QueueDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueueDoesNotExist.prototype);
  }
}

/**
 * The request was denied due to request throttling.
 *
 * - Exceeds the permitted request rate for the queue or for the recipient of the request.
 * - Ensure that the request rate is within the Amazon SQS limits for sending messages. For more information, see [Amazon SQS quotas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests) in the *Amazon SQS Developer Guide*.
 *
 * @public
 */
export class RequestThrottled extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#RequestThrottled";
  readonly name = "RequestThrottled" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestThrottled, __BaseException>) {
    super({
      name: "RequestThrottled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestThrottled.prototype);
  }
}

/**
 * Error code 400. Unsupported operation.
 *
 * @public
 */
export class UnsupportedOperation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#UnsupportedOperation";
  readonly name = "UnsupportedOperation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperation, __BaseException>) {
    super({
      name: "UnsupportedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperation.prototype);
  }
}

/**
 * One or more specified resources don't exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#ResourceNotFoundException";
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
 * The specified message isn't in flight.
 *
 * @public
 */
export class MessageNotInflight extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#MessageNotInflight";
  readonly name = "MessageNotInflight" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageNotInflight, __BaseException>) {
    super({
      name: "MessageNotInflight",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageNotInflight.prototype);
  }
}

/**
 * The specified receipt handle isn't valid.
 *
 * @public
 */
export class ReceiptHandleIsInvalid extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#ReceiptHandleIsInvalid";
  readonly name = "ReceiptHandleIsInvalid" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReceiptHandleIsInvalid, __BaseException>) {
    super({
      name: "ReceiptHandleIsInvalid",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReceiptHandleIsInvalid.prototype);
  }
}

/**
 * Two or more batch entries in the request have the same `Id`.
 *
 * @public
 */
export class BatchEntryIdsNotDistinct extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#BatchEntryIdsNotDistinct";
  readonly name = "BatchEntryIdsNotDistinct" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchEntryIdsNotDistinct, __BaseException>) {
    super({
      name: "BatchEntryIdsNotDistinct",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchEntryIdsNotDistinct.prototype);
  }
}

/**
 * The batch request doesn't contain any entries.
 *
 * @public
 */
export class EmptyBatchRequest extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#EmptyBatchRequest";
  readonly name = "EmptyBatchRequest" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EmptyBatchRequest, __BaseException>) {
    super({
      name: "EmptyBatchRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EmptyBatchRequest.prototype);
  }
}

/**
 * The `Id` of a batch entry in a batch request doesn't abide by the specification.
 *
 * @public
 */
export class InvalidBatchEntryId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#InvalidBatchEntryId";
  readonly name = "InvalidBatchEntryId" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBatchEntryId, __BaseException>) {
    super({
      name: "InvalidBatchEntryId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBatchEntryId.prototype);
  }
}

/**
 * The batch request contains more entries than permissible. For Amazon SQS, the maximum number of entries you can include in a single [SendMessageBatch](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html), [DeleteMessageBatch](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html), or [ChangeMessageVisibilityBatch](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html) request is 10.
 *
 * @public
 */
export class TooManyEntriesInBatchRequest extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#TooManyEntriesInBatchRequest";
  readonly name = "TooManyEntriesInBatchRequest" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyEntriesInBatchRequest, __BaseException>) {
    super({
      name: "TooManyEntriesInBatchRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyEntriesInBatchRequest.prototype);
  }
}

/**
 * The specified attribute doesn't exist.
 *
 * @public
 */
export class InvalidAttributeName extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#InvalidAttributeName";
  readonly name = "InvalidAttributeName" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAttributeName, __BaseException>) {
    super({
      name: "InvalidAttributeName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAttributeName.prototype);
  }
}

/**
 * A queue attribute value is invalid.
 *
 * @public
 */
export class InvalidAttributeValue extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#InvalidAttributeValue";
  readonly name = "InvalidAttributeValue" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAttributeValue, __BaseException>) {
    super({
      name: "InvalidAttributeValue",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAttributeValue.prototype);
  }
}

/**
 * You must wait 60 seconds after deleting a queue before you can create another queue with the same name.
 *
 * @public
 */
export class QueueDeletedRecently extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#QueueDeletedRecently";
  readonly name = "QueueDeletedRecently" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueueDeletedRecently, __BaseException>) {
    super({
      name: "QueueDeletedRecently",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueueDeletedRecently.prototype);
  }
}

/**
 * A queue with this name already exists. Amazon SQS returns this error only if the request includes attributes whose values differ from those of the existing queue.
 *
 * @public
 */
export class QueueNameExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#QueueNameExists";
  readonly name = "QueueNameExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueueNameExists, __BaseException>) {
    super({
      name: "QueueNameExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueueNameExists.prototype);
  }
}

/**
 * The specified receipt handle isn't valid for the current version.
 *
 * @deprecated exception has been included in ReceiptHandleIsInvalid.
 * @public
 */
export class InvalidIdFormat extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#InvalidIdFormat";
  readonly name = "InvalidIdFormat" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIdFormat, __BaseException>) {
    super({
      name: "InvalidIdFormat",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIdFormat.prototype);
  }
}

/**
 * Indicates that the specified queue previously received a `PurgeQueue` request within the last 60 seconds (the time it can take to delete the messages in the queue).
 *
 * @public
 */
export class PurgeQueueInProgress extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#PurgeQueueInProgress";
  readonly name = "PurgeQueueInProgress" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PurgeQueueInProgress, __BaseException>) {
    super({
      name: "PurgeQueueInProgress",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PurgeQueueInProgress.prototype);
  }
}

/**
 * The caller doesn't have the required KMS access.
 *
 * @public
 */
export class KmsAccessDenied extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#KmsAccessDenied";
  readonly name = "KmsAccessDenied" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsAccessDenied, __BaseException>) {
    super({
      name: "KmsAccessDenied",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsAccessDenied.prototype);
  }
}

/**
 * The request was denied due to request throttling.
 *
 * @public
 */
export class KmsDisabled extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#KmsDisabled";
  readonly name = "KmsDisabled" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsDisabled, __BaseException>) {
    super({
      name: "KmsDisabled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsDisabled.prototype);
  }
}

/**
 * The request was rejected for one of the following reasons:
 *
 * - The KeyUsage value of the KMS key is incompatible with the API operation.
 * - The encryption algorithm or signing algorithm specified for the operation is incompatible with the type of key material in the KMS key (KeySpec).
 *
 * @public
 */
export class KmsInvalidKeyUsage extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#KmsInvalidKeyUsage";
  readonly name = "KmsInvalidKeyUsage" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsInvalidKeyUsage, __BaseException>) {
    super({
      name: "KmsInvalidKeyUsage",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsInvalidKeyUsage.prototype);
  }
}

/**
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * @public
 */
export class KmsInvalidState extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#KmsInvalidState";
  readonly name = "KmsInvalidState" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsInvalidState, __BaseException>) {
    super({
      name: "KmsInvalidState",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsInvalidState.prototype);
  }
}

/**
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @public
 */
export class KmsNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#KmsNotFound";
  readonly name = "KmsNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsNotFound, __BaseException>) {
    super({
      name: "KmsNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsNotFound.prototype);
  }
}

/**
 * The request was rejected because the specified key policy isn't syntactically or semantically correct.
 *
 * @public
 */
export class KmsOptInRequired extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#KmsOptInRequired";
  readonly name = "KmsOptInRequired" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsOptInRequired, __BaseException>) {
    super({
      name: "KmsOptInRequired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsOptInRequired.prototype);
  }
}

/**
 * Amazon Web Services KMS throttles requests for the following conditions.
 *
 * @public
 */
export class KmsThrottled extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#KmsThrottled";
  readonly name = "KmsThrottled" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsThrottled, __BaseException>) {
    super({
      name: "KmsThrottled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsThrottled.prototype);
  }
}

/**
 * The message contains characters outside the allowed set.
 *
 * @public
 */
export class InvalidMessageContents extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#InvalidMessageContents";
  readonly name = "InvalidMessageContents" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMessageContents, __BaseException>) {
    super({
      name: "InvalidMessageContents",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMessageContents.prototype);
  }
}

/**
 * The length of all the messages put together is more than the limit.
 *
 * @public
 */
export class BatchRequestTooLong extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sqs#BatchRequestTooLong";
  readonly name = "BatchRequestTooLong" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchRequestTooLong, __BaseException>) {
    super({
      name: "BatchRequestTooLong",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchRequestTooLong.prototype);
  }
}
