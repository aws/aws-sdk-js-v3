// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SQSServiceException as __BaseException } from "./SQSServiceException";

/**
 * <p>The specified ID is invalid.</p>
 * @public
 */
export class InvalidAddress extends __BaseException {
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
 * <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
 * @public
 */
export class InvalidSecurity extends __BaseException {
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
 * <p>The specified action violates a limit. For example, <code>ReceiveMessage</code>
 *             returns this error if the maximum number of in flight messages is reached and
 *                 <code>AddPermission</code> returns this error if the maximum number of permissions
 *             for the queue is reached.</p>
 * @public
 */
export class OverLimit extends __BaseException {
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
 * <p>Ensure that the <code>QueueUrl</code> is correct and that the queue has not been
 *             deleted.</p>
 * @public
 */
export class QueueDoesNotExist extends __BaseException {
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
 * <p>The request was denied due to request throttling.</p>
 *          <ul>
 *             <li>
 *                <p>Exceeds the permitted request rate for the queue or for the recipient of the
 *                     request.</p>
 *             </li>
 *             <li>
 *                <p>Ensure that the request rate is within the Amazon SQS limits for
 *                     sending messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests">Amazon SQS quotas</a> in the <i>Amazon SQS
 *                         Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class RequestThrottled extends __BaseException {
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
 * <p>Error code 400. Unsupported operation.</p>
 * @public
 */
export class UnsupportedOperation extends __BaseException {
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
 * <p>One or more specified resources don't exist.</p>
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
 * <p>The specified message isn't in flight.</p>
 * @public
 */
export class MessageNotInflight extends __BaseException {
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
 * <p>The specified receipt handle isn't valid.</p>
 * @public
 */
export class ReceiptHandleIsInvalid extends __BaseException {
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
 * <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 * @public
 */
export class BatchEntryIdsNotDistinct extends __BaseException {
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
 * <p>The batch request doesn't contain any entries.</p>
 * @public
 */
export class EmptyBatchRequest extends __BaseException {
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
 * <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the
 *             specification.</p>
 * @public
 */
export class InvalidBatchEntryId extends __BaseException {
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
 * <p>The batch request contains more entries than permissible. For Amazon SQS, the
 *             maximum number of entries you can include in a single <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html">SendMessageBatch</a>, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html">DeleteMessageBatch</a>, or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html">ChangeMessageVisibilityBatch</a> request is 10.</p>
 * @public
 */
export class TooManyEntriesInBatchRequest extends __BaseException {
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
 * <p>The specified attribute doesn't exist.</p>
 * @public
 */
export class InvalidAttributeName extends __BaseException {
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
 * <p>A queue attribute value is invalid.</p>
 * @public
 */
export class InvalidAttributeValue extends __BaseException {
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
 * <p>You must wait 60 seconds after deleting a queue before you can create another queue
 *             with the same name.</p>
 * @public
 */
export class QueueDeletedRecently extends __BaseException {
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
 * <p>A queue with this name already exists. Amazon SQS returns this error only if the request
 *             includes attributes whose values differ from those of the existing queue.</p>
 * @public
 */
export class QueueNameExists extends __BaseException {
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
 * <p>The specified receipt handle isn't valid for the current version.</p>
 *
 * @deprecated exception has been included in ReceiptHandleIsInvalid
 * @public
 */
export class InvalidIdFormat extends __BaseException {
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
 * <p>Indicates that the specified queue previously received a <code>PurgeQueue</code>
 *             request within the last 60 seconds (the time it can take to delete the messages in the
 *             queue).</p>
 * @public
 */
export class PurgeQueueInProgress extends __BaseException {
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
 * <p>The caller doesn't have the required KMS access.</p>
 * @public
 */
export class KmsAccessDenied extends __BaseException {
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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class KmsDisabled extends __BaseException {
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
 * <p>The request was rejected for one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>The KeyUsage value of the KMS key is incompatible with the API
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *                     incompatible with the type of key material in the KMS key (KeySpec).</p>
 *             </li>
 *          </ul>
 * @public
 */
export class KmsInvalidKeyUsage extends __BaseException {
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
 * <p>The request was rejected because the state of the specified resource is not valid for
 *             this request.</p>
 * @public
 */
export class KmsInvalidState extends __BaseException {
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
 * <p>The request was rejected because the specified entity or resource could not be found.
 *         </p>
 * @public
 */
export class KmsNotFound extends __BaseException {
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
 * <p>The request was rejected because the specified key policy isn't syntactically or
 *             semantically correct.</p>
 * @public
 */
export class KmsOptInRequired extends __BaseException {
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
 * <p>Amazon Web Services KMS throttles requests for the following conditions.</p>
 * @public
 */
export class KmsThrottled extends __BaseException {
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
 * <p>The message contains characters outside the allowed set.</p>
 * @public
 */
export class InvalidMessageContents extends __BaseException {
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
 * <p>The length of all the messages put together is more than the limit.</p>
 * @public
 */
export class BatchRequestTooLong extends __BaseException {
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
