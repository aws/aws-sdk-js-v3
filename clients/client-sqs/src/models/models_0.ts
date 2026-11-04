// smithy-typescript generated code
import type { MessageSystemAttributeName, MessageSystemAttributeNameForSends, QueueAttributeName } from "./enums";

/**
 * @public
 */
export interface AddPermissionRequest {
  /**
   * The URL of the Amazon SQS queue to which permissions are added.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * The unique identification of the permission you're setting (for example, `AliceSendMessage`). Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (`-`), and underscores (`_`).
   *
   * @public
   */
  Label: string | undefined;

  /**
   * The Amazon Web Services account numbers of the [principals](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P) who are to receive permission. For information about locating the Amazon Web Services account identification, see [Your Amazon Web Services Identifiers](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html#sqs-api-request-authentication) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  AWSAccountIds: string[] | undefined;

  /**
   * The action the client wants to allow for the specified principal. Valid values: the name of any action or `*`.
   *
   * For more information about these actions, see [Overview of Managing Access Permissions to Your Amazon Simple Queue Service Resource](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-overview-of-managing-access.html) in the *Amazon SQS Developer Guide*.
   *
   * Specifying `SendMessage`, `DeleteMessage`, or `ChangeMessageVisibility` for `ActionName.n` also grants permissions for the corresponding batch versions of those actions: `SendMessageBatch`, `DeleteMessageBatch`, and `ChangeMessageVisibilityBatch`.
   *
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * @public
 */
export interface CancelMessageMoveTaskRequest {
  /**
   * An identifier associated with a message movement task.
   *
   * @public
   */
  TaskHandle: string | undefined;
}

/**
 * @public
 */
export interface CancelMessageMoveTaskResult {
  /**
   * The approximate number of messages already moved to the destination queue.
   *
   * @public
   */
  ApproximateNumberOfMessagesMoved?: number | undefined;
}

/**
 * @public
 */
export interface ChangeMessageVisibilityRequest {
  /**
   * The URL of the Amazon SQS queue whose message's visibility is changed.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * The receipt handle associated with the message, whose visibility timeout is changed. This parameter is returned by the `ReceiveMessage` action.
   *
   * @public
   */
  ReceiptHandle: string | undefined;

  /**
   * The new value for the message's visibility timeout (in seconds). Values range: `0` to `43200`. Maximum: 12 hours.
   *
   * @public
   */
  VisibilityTimeout: number | undefined;
}

/**
 * Encloses a receipt handle and an entry ID for each message in `ChangeMessageVisibilityBatch.`
 *
 * @public
 */
export interface ChangeMessageVisibilityBatchRequestEntry {
  /**
   * An identifier for this particular receipt handle used to communicate the result.
   *
   * > **Note:**
   * >
   * > The `Id`s of a batch request need to be unique within a request.
   * >
   * > This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A receipt handle.
   *
   * @public
   */
  ReceiptHandle: string | undefined;

  /**
   * The new value (in seconds) for the message's visibility timeout.
   *
   * @public
   */
  VisibilityTimeout?: number | undefined;
}

/**
 * @public
 */
export interface ChangeMessageVisibilityBatchRequest {
  /**
   * The URL of the Amazon SQS queue whose messages' visibility is changed.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * Lists the receipt handles of the messages for which the visibility timeout must be changed.
   *
   * @public
   */
  Entries: ChangeMessageVisibilityBatchRequestEntry[] | undefined;
}

/**
 * Gives a detailed description of the result of an action on each entry in the request.
 *
 * @public
 */
export interface BatchResultErrorEntry {
  /**
   * The `Id` of an entry in a batch request.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies whether the error happened due to the caller of the batch API action.
   *
   * @public
   */
  SenderFault: boolean | undefined;

  /**
   * An error code representing why the action failed on this entry.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A message explaining why the action failed on this entry.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Encloses the `Id` of an entry in `ChangeMessageVisibilityBatch.`
 *
 * @public
 */
export interface ChangeMessageVisibilityBatchResultEntry {
  /**
   * Represents a message whose visibility timeout has been changed successfully.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * For each message in the batch, the response contains a `ChangeMessageVisibilityBatchResultEntry` tag if the message succeeds or a `BatchResultErrorEntry` tag if the message fails.
 *
 * @public
 */
export interface ChangeMessageVisibilityBatchResult {
  /**
   * A list of `ChangeMessageVisibilityBatchResultEntry` items.
   *
   * @public
   */
  Successful: ChangeMessageVisibilityBatchResultEntry[] | undefined;

  /**
   * A list of `BatchResultErrorEntry` items.
   *
   * @public
   */
  Failed: BatchResultErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * The name of the new queue. The following limits apply to this name:
   *
   * - A queue name can have up to 80 characters.
   * - Valid values: alphanumeric characters, hyphens (`-`), and underscores (`_`).
   * - A FIFO queue name must end with the `.fifo` suffix.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueName: string | undefined;

  /**
   * A map of attributes with their corresponding values.
   *
   * The following lists the names, descriptions, and values of the special request parameters that the `CreateQueue` action uses:
   *
   * - `DelaySeconds` – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0.
   * - `MaximumMessageSize` – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).
   * - `MessageRetentionPeriod` – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the `MessageRetentionPeriod` attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the `MessageRetentionPeriod` is reduced below the age of existing messages.
   * - `Policy` – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see [Overview of Amazon Web Services IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html) in the *IAM User Guide*.
   * - `ReceiveMessageWaitTimeSeconds` – The length of time, in seconds, for which a `ReceiveMessage` action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0.
   * - `VisibilityTimeout` – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see [Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Amazon SQS Developer Guide*.
   *
   * The following attributes apply only to [dead-letter queues:](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)
   *
   * - `RedrivePolicy` – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:
   *
   *   - `deadLetterTargetArn` – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of `maxReceiveCount` is exceeded.
   *   - `maxReceiveCount` – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the `ReceiveCount` for a message exceeds the `maxReceiveCount` for a queue, Amazon SQS moves the message to the dead-letter-queue.
   * - `RedriveAllowPolicy` – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:
   *
   *   - `redrivePermission` – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
   *
   *     - `allowAll` – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.
   *     - `denyAll` – No source queues can specify this queue as the dead-letter queue.
   *     - `byQueue` – Only queues specified by the `sourceQueueArns` parameter can specify this queue as the dead-letter queue.
   *   - `sourceQueueArns` – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the `redrivePermission` parameter is set to `byQueue`. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the `redrivePermission` parameter to `allowAll`.
   *
   * > **Note:** The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
   *
   * The following attributes apply only to [server-side-encryption](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html):
   *
   * - `KmsMasterKeyId` – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms). While the alias of the Amazon Web Services managed CMK for Amazon SQS is always `alias/aws/sqs`, the alias of a custom CMK can, for example, be `alias/MyAlias`. For more examples, see [KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*.
   * - `KmsDataKeyReusePeriodSeconds` – The length of time, in seconds, for which Amazon SQS can reuse a [data key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys) to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see [How Does the Data Key Reuse Period Work?](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work)
   * - `SqsManagedSseEnabled` – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)).
   *
   * The following attributes apply only to [FIFO (first-in-first-out) queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html):
   *
   * - `FifoQueue` – Designates a queue as FIFO. Valid values are `true` and `false`. If you don't specify the `FifoQueue` attribute, Amazon SQS creates a standard queue. You can provide this attribute only during queue creation. You can't change it for an existing queue. When you set this attribute, you must also provide the `MessageGroupId` for your messages explicitly.
   *
   *   For more information, see [FIFO queue logic](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html) in the *Amazon SQS Developer Guide*.
   * - `ContentBasedDeduplication` – Enables content-based deduplication. Valid values are `true` and `false`. For more information, see [Exactly-once processing](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html) in the *Amazon SQS Developer Guide*. Note the following:
   *
   *   - Every message must have a unique `MessageDeduplicationId`.
   *
   *     - You may provide a `MessageDeduplicationId` explicitly.
   *     - If you aren't able to provide a `MessageDeduplicationId` and you enable `ContentBasedDeduplication` for your queue, Amazon SQS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *     - If you don't provide a `MessageDeduplicationId` and the queue doesn't have `ContentBasedDeduplication` set, the action fails with an error.
   *     - If the queue has `ContentBasedDeduplication` set, your `MessageDeduplicationId` overrides the generated one.
   *   - When `ContentBasedDeduplication` is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.
   *   - If you send one message with `ContentBasedDeduplication` enabled and then another message with a `MessageDeduplicationId` that is the same as the one generated for the first `MessageDeduplicationId`, the two messages are treated as duplicates and only one copy of the message is delivered.
   *
   * The following attributes apply only to [high throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html):
   *
   * - `DeduplicationScope` – Specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue`.
   * - `FifoThroughputLimit` – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` and `perMessageGroupId`. The `perMessageGroupId` value is allowed only when the value for `DeduplicationScope` is `messageGroup`.
   *
   * To enable high throughput for FIFO queues, do the following:
   *
   * - Set `DeduplicationScope` to `messageGroup`.
   * - Set `FifoThroughputLimit` to `perMessageGroupId`.
   *
   * If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.
   *
   * For information on throughput quotas, see [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  Attributes?: Partial<Record<QueueAttributeName, string>> | undefined;

  /**
   * Add cost allocation tags to the specified Amazon SQS queue. For an overview, see [Tagging Your Amazon SQS Queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html) in the *Amazon SQS Developer Guide*.
   *
   * When you use queue tags, keep the following guidelines in mind:
   *
   * - Adding more than 50 tags to a queue isn't recommended.
   * - Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.
   * - Tags are case-sensitive.
   * - A new tag with a key identical to that of an existing tag overwrites the existing tag.
   *
   * For a full list of tag restrictions, see [Quotas related to queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues) in the *Amazon SQS Developer Guide*.
   *
   * > **Note:**
   * >
   * > To be able to tag a queue on creation, you must have the `sqs:CreateQueue` and `sqs:TagQueue` permissions.
   * >
   * > Cross-account permissions don't apply to this action. For more information, see [Grant cross-account permissions to a role and a username](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Returns the `QueueUrl` attribute of the created queue.
 *
 * @public
 */
export interface CreateQueueResult {
  /**
   * The URL of the created Amazon SQS queue.
   *
   * @public
   */
  QueueUrl?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageRequest {
  /**
   * The URL of the Amazon SQS queue from which messages are deleted.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * The receipt handle associated with the message to delete.
   *
   * @public
   */
  ReceiptHandle: string | undefined;
}

/**
 * Encloses a receipt handle and an identifier for it.
 *
 * @public
 */
export interface DeleteMessageBatchRequestEntry {
  /**
   * The identifier for this particular receipt handle. This is used to communicate the result.
   *
   * > **Note:**
   * >
   * > The `Id`s of a batch request need to be unique within a request.
   * >
   * > This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A receipt handle.
   *
   * @public
   */
  ReceiptHandle: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageBatchRequest {
  /**
   * The URL of the Amazon SQS queue from which messages are deleted.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * Lists the receipt handles for the messages to be deleted.
   *
   * @public
   */
  Entries: DeleteMessageBatchRequestEntry[] | undefined;
}

/**
 * Encloses the `Id` of an entry in `DeleteMessageBatch.`
 *
 * @public
 */
export interface DeleteMessageBatchResultEntry {
  /**
   * Represents a successfully deleted message.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * For each message in the batch, the response contains a `DeleteMessageBatchResultEntry` tag if the message is deleted or a `BatchResultErrorEntry` tag if the message can't be deleted.
 *
 * @public
 */
export interface DeleteMessageBatchResult {
  /**
   * A list of `DeleteMessageBatchResultEntry` items.
   *
   * @public
   */
  Successful: DeleteMessageBatchResultEntry[] | undefined;

  /**
   * A list of `BatchResultErrorEntry` items.
   *
   * @public
   */
  Failed: BatchResultErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * The URL of the Amazon SQS queue to delete.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;
}

/**
 * @public
 */
export interface GetQueueAttributesRequest {
  /**
   * The URL of the Amazon SQS queue whose attribute information is retrieved.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * A list of attributes for which to retrieve information.
   *
   * The `AttributeNames` parameter is optional, but if you don't specify values for this parameter, the request returns empty results.
   *
   * > **Note:** In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.
   *
   * The following attributes are supported:
   *
   * > **Important:** The `ApproximateNumberOfMessagesDelayed`, `ApproximateNumberOfMessagesNotVisible`, and `ApproximateNumberOfMessages` metrics may not achieve consistency until at least 1 minute after the producers stop sending messages. This period is required for the queue metadata to reach eventual consistency.
   *
   * - `All` – Returns all values.
   * - `ApproximateNumberOfMessages` – Returns the approximate number of messages available for retrieval from the queue.
   * - `ApproximateNumberOfMessagesDelayed` – Returns the approximate number of messages in the queue that are delayed and not available for reading immediately. This can happen when the queue is configured as a delay queue or when a message has been sent with a delay parameter.
   * - `ApproximateNumberOfMessagesNotVisible` – Returns the approximate number of messages that are in flight. Messages are considered to be *in flight* if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window.
   * - `CreatedTimestamp` – Returns the time when the queue was created in seconds ([epoch time](http://en.wikipedia.org/wiki/Unix_time)).
   * - `DelaySeconds` – Returns the default delay on the queue in seconds.
   * - `LastModifiedTimestamp` – Returns the time when the queue was last changed in seconds ([epoch time](http://en.wikipedia.org/wiki/Unix_time)).
   * - `MaximumMessageSize` – Returns the limit of how many bytes a message can contain before Amazon SQS rejects it.
   * - `MessageRetentionPeriod` – Returns the length of time, in seconds, for which Amazon SQS retains a message. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the `MessageRetentionPeriod` attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the `MessageRetentionPeriod` is reduced below the age of existing messages.
   * - `Policy` – Returns the policy of the queue.
   * - `QueueArn` – Returns the Amazon resource name (ARN) of the queue.
   * - `ReceiveMessageWaitTimeSeconds` – Returns the length of time, in seconds, for which the `ReceiveMessage` action waits for a message to arrive.
   * - `VisibilityTimeout` – Returns the visibility timeout for the queue. For more information about the visibility timeout, see [Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Amazon SQS Developer Guide*.
   *
   * The following attributes apply only to [dead-letter queues:](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)
   *
   * - `RedrivePolicy` – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:
   *
   *   - `deadLetterTargetArn` – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of `maxReceiveCount` is exceeded.
   *   - `maxReceiveCount` – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the `ReceiveCount` for a message exceeds the `maxReceiveCount` for a queue, Amazon SQS moves the message to the dead-letter-queue.
   * - `RedriveAllowPolicy` – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:
   *
   *   - `redrivePermission` – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
   *
   *     - `allowAll` – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.
   *     - `denyAll` – No source queues can specify this queue as the dead-letter queue.
   *     - `byQueue` – Only queues specified by the `sourceQueueArns` parameter can specify this queue as the dead-letter queue.
   *   - `sourceQueueArns` – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the `redrivePermission` parameter is set to `byQueue`. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the `redrivePermission` parameter to `allowAll`.
   *
   * > **Note:** The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
   *
   * The following attributes apply only to [server-side-encryption](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html):
   *
   * - `KmsMasterKeyId` – Returns the ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms).
   * - `KmsDataKeyReusePeriodSeconds` – Returns the length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. For more information, see [How Does the Data Key Reuse Period Work?](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work).
   * - `SqsManagedSseEnabled` – Returns information about whether the queue is using SSE-SQS encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)).
   *
   * The following attributes apply only to [FIFO (first-in-first-out) queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html):
   *
   * - `FifoQueue` – Returns information about whether the queue is FIFO. For more information, see [FIFO queue logic](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html) in the *Amazon SQS Developer Guide*.
   *
   *   > **Note:** To determine whether a queue is [FIFO](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html), you can check whether `QueueName` ends with the `.fifo` suffix.
   * - `ContentBasedDeduplication` – Returns whether content-based deduplication is enabled for the queue. For more information, see [Exactly-once processing](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html) in the *Amazon SQS Developer Guide*.
   *
   * The following attributes apply only to [high throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html):
   *
   * - `DeduplicationScope` – Specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue`.
   * - `FifoThroughputLimit` – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` and `perMessageGroupId`. The `perMessageGroupId` value is allowed only when the value for `DeduplicationScope` is `messageGroup`.
   *
   * To enable high throughput for FIFO queues, do the following:
   *
   * - Set `DeduplicationScope` to `messageGroup`.
   * - Set `FifoThroughputLimit` to `perMessageGroupId`.
   *
   * If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.
   *
   * For information on throughput quotas, see [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  AttributeNames?: QueueAttributeName[] | undefined;
}

/**
 * A list of returned queue attributes.
 *
 * @public
 */
export interface GetQueueAttributesResult {
  /**
   * A map of attributes to their respective values.
   *
   * @public
   */
  Attributes?: Partial<Record<QueueAttributeName, string>> | undefined;
}

/**
 * Retrieves the URL of an existing queue based on its name and, optionally, the Amazon Web Services account ID.
 *
 * @public
 */
export interface GetQueueUrlRequest {
  /**
   * (Required) The name of the queue for which you want to fetch the URL. The name can be up to 80 characters long and can include alphanumeric characters, hyphens (-), and underscores (_). Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueName: string | undefined;

  /**
   * (Optional) The Amazon Web Services account ID of the account that created the queue. This is only required when you are attempting to access a queue owned by another Amazon Web Services account.
   *
   * @public
   */
  QueueOwnerAWSAccountId?: string | undefined;
}

/**
 * For more information, see [Interpreting Responses](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html) in the *Amazon SQS Developer Guide*.
 *
 * @public
 */
export interface GetQueueUrlResult {
  /**
   * The URL of the queue.
   *
   * @public
   */
  QueueUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListDeadLetterSourceQueuesRequest {
  /**
   * The URL of a dead-letter queue.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * Pagination token to request the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. Value range is 1 to 1000. You must set `MaxResults` to receive a value for `NextToken` in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A list of your dead letter source queues.
 *
 * @public
 */
export interface ListDeadLetterSourceQueuesResult {
  /**
   * A list of source queue URLs that have the `RedrivePolicy` queue attribute configured with a dead-letter queue.
   *
   * @public
   */
  queueUrls: string[] | undefined;

  /**
   * Pagination token to include in the next request. Token value is `null` if there are no additional results to request, or if you did not set `MaxResults` in the request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMessageMoveTasksRequest {
  /**
   * The ARN of the queue whose message movement tasks are to be listed.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The maximum number of results to include in the response. The default is 1, which provides the most recent message movement task. The upper limit is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the details of a message movement task.
 *
 * @public
 */
export interface ListMessageMoveTasksResultEntry {
  /**
   * An identifier associated with a message movement task. When this field is returned in the response of the `ListMessageMoveTasks` action, it is only populated for tasks that are in RUNNING status.
   *
   * @public
   */
  TaskHandle?: string | undefined;

  /**
   * The status of the message movement task. Possible values are: RUNNING, COMPLETED, CANCELLING, CANCELLED, and FAILED.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The ARN of the queue that contains the messages to be moved to another queue.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The ARN of the destination queue if it has been specified in the `StartMessageMoveTask` request. If a `DestinationArn` has not been specified in the `StartMessageMoveTask` request, this field value will be NULL.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The number of messages to be moved per second (the message movement rate), if it has been specified in the `StartMessageMoveTask` request. If a `MaxNumberOfMessagesPerSecond` has not been specified in the `StartMessageMoveTask` request, this field value will be NULL.
   *
   * @public
   */
  MaxNumberOfMessagesPerSecond?: number | undefined;

  /**
   * The approximate number of messages already moved to the destination queue.
   *
   * @public
   */
  ApproximateNumberOfMessagesMoved?: number | undefined;

  /**
   * The number of messages to be moved from the source queue. This number is obtained at the time of starting the message movement task and is only included after the message movement task is selected to start.
   *
   * @public
   */
  ApproximateNumberOfMessagesToMove?: number | undefined;

  /**
   * The task failure reason (only included if the task status is FAILED).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The timestamp of starting the message movement task.
   *
   * @public
   */
  StartedTimestamp?: number | undefined;
}

/**
 * @public
 */
export interface ListMessageMoveTasksResult {
  /**
   * A list of message movement tasks and their attributes.
   *
   * @public
   */
  Results?: ListMessageMoveTasksResultEntry[] | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueNamePrefix?: string | undefined;

  /**
   * Pagination token to request the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. Value range is 1 to 1000. You must set `MaxResults` to receive a value for `NextToken` in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A list of your queues.
 *
 * @public
 */
export interface ListQueuesResult {
  /**
   * A list of queue URLs, up to 1,000 entries, or the value of `MaxResults` that you sent in the request.
   *
   * @public
   */
  QueueUrls?: string[] | undefined;

  /**
   * Pagination token to include in the next request. Token value is `null` if there are no additional results to request, or if you did not set `MaxResults` in the request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueTagsRequest {
  /**
   * The URL of the queue.
   *
   * @public
   */
  QueueUrl: string | undefined;
}

/**
 * @public
 */
export interface ListQueueTagsResult {
  /**
   * The list of all tags added to the specified queue.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PurgeQueueRequest {
  /**
   * The URL of the queue from which the `PurgeQueue` action deletes messages.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;
}

/**
 * Retrieves one or more messages from a specified queue.
 *
 * @public
 */
export interface ReceiveMessageRequest {
  /**
   * The URL of the Amazon SQS queue from which messages are received.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * > **Important:** This parameter has been discontinued but will be supported for backward compatibility. To provide attribute names, you are encouraged to use `MessageSystemAttributeNames`.
   *
   * A list of attributes that need to be returned along with each message. These attributes include:
   *
   * - `All` – Returns all values.
   * - `ApproximateFirstReceiveTimestamp` – Returns the time the message was first received from the queue ([epoch time](http://en.wikipedia.org/wiki/Unix_time) in milliseconds).
   * - `ApproximateReceiveCount` – Returns the number of times a message has been received across all queues but not deleted.
   * - `AWSTraceHeader` – Returns the X-Ray trace header string.
   * - `SenderId`
   *
   *   - For a user, returns the user ID, for example `ABCDEFGHI1JKLMNOPQ23R`.
   *   - For an IAM role, returns the IAM role ID, for example `ABCDE1F2GH3I4JK5LMNOP:i-a123b456`.
   * - `SentTimestamp` – Returns the time the message was sent to the queue ([epoch time](http://en.wikipedia.org/wiki/Unix_time) in milliseconds).
   * - `SqsManagedSseEnabled` – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)).
   * - `MessageDeduplicationId` – Returns the value provided by the producer that calls the `SendMessage` action.
   * - `MessageGroupId` – Returns the value provided by the producer that calls the `SendMessage` action.
   * - `SequenceNumber` – Returns the value provided by Amazon SQS.
   *
   * @deprecated AttributeNames has been replaced by MessageSystemAttributeNames.
   * @public
   */
  AttributeNames?: QueueAttributeName[] | undefined;

  /**
   * A list of attributes that need to be returned along with each message. These attributes include:
   *
   * - `All` – Returns all values.
   * - `ApproximateFirstReceiveTimestamp` – Returns the time the message was first received from the queue ([epoch time](http://en.wikipedia.org/wiki/Unix_time) in milliseconds).
   * - `ApproximateReceiveCount` – Returns the number of times a message has been received across all queues but not deleted.
   * - `AWSTraceHeader` – Returns the X-Ray trace header string.
   * - `SenderId`
   *
   *   - For a user, returns the user ID, for example `ABCDEFGHI1JKLMNOPQ23R`.
   *   - For an IAM role, returns the IAM role ID, for example `ABCDE1F2GH3I4JK5LMNOP:i-a123b456`.
   * - `SentTimestamp` – Returns the time the message was sent to the queue ([epoch time](http://en.wikipedia.org/wiki/Unix_time) in milliseconds).
   * - `SqsManagedSseEnabled` – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)).
   * - `MessageDeduplicationId` – Returns the value provided by the producer that calls the `SendMessage` action.
   * - `MessageGroupId` – Returns the value provided by the producer that calls the `SendMessage` action.
   * - `SequenceNumber` – Returns the value provided by Amazon SQS.
   *
   * @public
   */
  MessageSystemAttributeNames?: MessageSystemAttributeName[] | undefined;

  /**
   * The name of the message attribute, where *N* is the index.
   *
   * - The name can contain alphanumeric characters and the underscore (`_`), hyphen (`-`), and period (`.`).
   * - The name is case-sensitive and must be unique among all attribute names for the message.
   * - The name must not start with AWS-reserved prefixes such as `AWS.` or `Amazon.` (or any casing variants).
   * - The name must not start or end with a period (`.`), and it should not have periods in succession (`..`).
   * - The name can be up to 256 characters long.
   *
   * When using `ReceiveMessage`, you can send a list of attribute names to receive, or you can return all of the attributes by specifying `All` or `.*` in your request. You can also use all message attributes starting with a prefix, for example `bar.*`.
   *
   * @public
   */
  MessageAttributeNames?: string[] | undefined;

  /**
   * The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1.
   *
   * @public
   */
  MaxNumberOfMessages?: number | undefined;

  /**
   * The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a `ReceiveMessage` request. If not specified, the default visibility timeout for the queue is used, which is 30 seconds.
   *
   * Understanding `VisibilityTimeout`:
   *
   * - When a message is received from a queue, it becomes temporarily invisible to other consumers for the duration of the visibility timeout. This prevents multiple consumers from processing the same message simultaneously. If the message is not deleted or its visibility timeout is not extended before the timeout expires, it becomes visible again and can be retrieved by other consumers.
   * - Setting an appropriate visibility timeout is crucial. If it's too short, the message might become visible again before processing is complete, leading to duplicate processing. If it's too long, it delays the reprocessing of messages if the initial processing fails.
   * - You can adjust the visibility timeout using the `--visibility-timeout` parameter in the `receive-message` command to match the processing time required by your application.
   * - A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.
   *
   * For more information, see [Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  VisibilityTimeout?: number | undefined;

  /**
   * The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than `WaitTimeSeconds`. If no messages are available and the wait time expires, the call does not return a message list. If you are using the Java SDK, it returns a `ReceiveMessageResponse` object, which has a empty list instead of a Null object.
   *
   * > **Important:** To avoid HTTP errors, ensure that the HTTP response timeout for `ReceiveMessage` requests is longer than the `WaitTimeSeconds` parameter. For example, with the Java SDK, you can set HTTP transport settings using the [NettyNioAsyncHttpClient](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/nio/netty/NettyNioAsyncHttpClient.html) for asynchronous clients, or the [ApacheHttpClient](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/apache/ApacheHttpClient.html) for synchronous clients.
   *
   * @public
   */
  WaitTimeSeconds?: number | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) queues.
   *
   * The token used for deduplication of `ReceiveMessage` calls. If a networking issue occurs after a `ReceiveMessage` action, and instead of a response you receive a generic error, it is possible to retry the same action with an identical `ReceiveRequestAttemptId` to retrieve the same set of messages, even if their visibility timeout has not yet expired.
   *
   * - You can use `ReceiveRequestAttemptId` only for 5 minutes after a `ReceiveMessage` action.
   * - When you set `FifoQueue`, a caller of the `ReceiveMessage` action can provide a `ReceiveRequestAttemptId` explicitly.
   * - It is possible to retry the `ReceiveMessage` action with the same `ReceiveRequestAttemptId` if none of the messages have been modified (deleted or had their visibility changes).
   * - During a visibility timeout, subsequent calls with the same `ReceiveRequestAttemptId` return the same messages and receipt handles. If a retry occurs within the deduplication interval, it resets the visibility timeout. For more information, see [Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Amazon SQS Developer Guide*.
   *
   *   > **Important:**
   *   >
   *   > If a caller of the `ReceiveMessage` action still processes messages when the visibility timeout expires and messages become visible, another worker consuming from the same queue can receive the same messages and therefore process duplicates. Also, if a consumer whose message processing time is longer than the visibility timeout tries to delete the processed messages, the action fails with an error.
   *   >
   *   > To mitigate this effect, ensure that your application observes a safe threshold before the visibility timeout expires and extend the visibility timeout as necessary.
   * - While messages with a particular `MessageGroupId` are invisible, no more messages belonging to the same `MessageGroupId` are returned until the visibility timeout expires. You can still receive messages with another `MessageGroupId` from your FIFO queue as long as they are visible.
   * - If a caller of `ReceiveMessage` can't track the `ReceiveRequestAttemptId`, no retries work until the original visibility timeout expires. As a result, delays might occur but the messages in the queue remain in a strict order.
   *
   * The maximum length of `ReceiveRequestAttemptId` is 128 characters. `ReceiveRequestAttemptId` can contain alphanumeric characters (`a-z`, `A-Z`, `0-9`) and punctuation (``!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~``).
   *
   * For best practices of using `ReceiveRequestAttemptId`, see [Using the ReceiveRequestAttemptId Request Parameter](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-receiverequestattemptid-request-parameter.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  ReceiveRequestAttemptId?: string | undefined;
}

/**
 * The user-specified message attribute value. For string data types, the `Value` attribute has the same restrictions on the content as the message body. For more information, see `SendMessage.`
 *
 * `Name`, `type`, `value` and the message body must not be empty or null. All parts of the message attribute, including `Name`, `Type`, and `Value`, are part of the message size restriction (1 MiB or 1,048,576 bytes).
 *
 * @public
 */
export interface MessageAttributeValue {
  /**
   * Strings are Unicode with UTF-8 binary encoding. For a list of code values, see [ASCII Printable Characters](http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters).
   *
   * @public
   */
  StringValue?: string | undefined;

  /**
   * Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.
   *
   * @public
   */
  BinaryValue?: Uint8Array | undefined;

  /**
   * Not implemented. Reserved for future use.
   *
   * @public
   */
  StringListValues?: string[] | undefined;

  /**
   * Not implemented. Reserved for future use.
   *
   * @public
   */
  BinaryListValues?: Uint8Array[] | undefined;

  /**
   * Amazon SQS supports the following logical data types: `String`, `Number`, and `Binary`. For the `Number` data type, you must use `StringValue`.
   *
   * You can also append custom labels. For more information, see [Amazon SQS Message Attributes](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  DataType: string | undefined;
}

/**
 * An Amazon SQS message.
 *
 * @public
 */
export interface Message {
  /**
   * A unique identifier for the message. A `MessageId`is considered unique across all Amazon Web Services accounts for an extended period of time.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * An identifier associated with the act of receiving the message. A new receipt handle is returned every time you receive a message. When deleting a message, you provide the last received receipt handle to delete the message.
   *
   * @public
   */
  ReceiptHandle?: string | undefined;

  /**
   * An MD5 digest of the non-URL-encoded message body string.
   *
   * @public
   */
  MD5OfBody?: string | undefined;

  /**
   * The message's contents (not URL-encoded).
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * A map of the attributes requested in `ReceiveMessage` to their respective values. Supported attributes:
   *
   * - `ApproximateReceiveCount`
   * - `ApproximateFirstReceiveTimestamp`
   * - `MessageDeduplicationId`
   * - `MessageGroupId`
   * - `SenderId`
   * - `SentTimestamp`
   * - `SequenceNumber`
   *
   * `ApproximateFirstReceiveTimestamp` and `SentTimestamp` are each returned as an integer representing the [epoch time](http://en.wikipedia.org/wiki/Unix_time) in milliseconds.
   *
   * @public
   */
  Attributes?: Partial<Record<MessageSystemAttributeName, string>> | undefined;

  /**
   * An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see [RFC1321](https://www.ietf.org/rfc/rfc1321.txt).
   *
   * @public
   */
  MD5OfMessageAttributes?: string | undefined;

  /**
   * Each message attribute consists of a `Name`, `Type`, and `Value`. For more information, see [Amazon SQS message attributes](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;
}

/**
 * A list of received messages.
 *
 * @public
 */
export interface ReceiveMessageResult {
  /**
   * A list of messages.
   *
   * @public
   */
  Messages?: Message[] | undefined;
}

/**
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * The URL of the Amazon SQS queue from which permissions are removed.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * The identification of the permission to remove. This is the label added using the `AddPermission` action.
   *
   * @public
   */
  Label: string | undefined;
}

/**
 * The user-specified message system attribute value. For string data types, the `Value` attribute has the same restrictions on the content as the message body. For more information, see `SendMessage.`
 *
 * `Name`, `type`, `value` and the message body must not be empty or null.
 *
 * @public
 */
export interface MessageSystemAttributeValue {
  /**
   * Strings are Unicode with UTF-8 binary encoding. For a list of code values, see [ASCII Printable Characters](http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters).
   *
   * @public
   */
  StringValue?: string | undefined;

  /**
   * Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.
   *
   * @public
   */
  BinaryValue?: Uint8Array | undefined;

  /**
   * Not implemented. Reserved for future use.
   *
   * @public
   */
  StringListValues?: string[] | undefined;

  /**
   * Not implemented. Reserved for future use.
   *
   * @public
   */
  BinaryListValues?: Uint8Array[] | undefined;

  /**
   * Amazon SQS supports the following logical data types: `String`, `Number`, and `Binary`. For the `Number` data type, you must use `StringValue`.
   *
   * You can also append custom labels. For more information, see [Amazon SQS Message Attributes](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  DataType: string | undefined;
}

/**
 * @public
 */
export interface SendMessageRequest {
  /**
   * The URL of the Amazon SQS queue to which a message is sent.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * The message to send. The minimum size is one character. The maximum size is 1 MiB or 1,048,576 bytes
   *
   * > **Important:**
   * >
   * > A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the [W3C specification for characters](http://www.w3.org/TR/REC-xml/#charsets).
   * >
   * > `#x9` | `#xA` | `#xD` | `#x20` to `#xD7FF` | `#xE000` to `#xFFFD` | `#x10000` to `#x10FFFF`
   * >
   * > If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.
   *
   * @public
   */
  MessageBody: string | undefined;

  /**
   * The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive `DelaySeconds` value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue applies.
   *
   * > **Note:** When you set `FifoQueue`, you can't set `DelaySeconds` per message. You can set this parameter only on a queue level.
   *
   * @public
   */
  DelaySeconds?: number | undefined;

  /**
   * Each message attribute consists of a `Name`, `Type`, and `Value`. For more information, see [Amazon SQS message attributes](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * The message system attribute to send. Each message system attribute consists of a `Name`, `Type`, and `Value`.
   *
   * > **Important:**
   * >
   * > - Currently, the only supported message system attribute is `AWSTraceHeader`. Its type must be `String` and its value must be a correctly formatted X-Ray trace header string.
   * > - The size of a message system attribute doesn't count towards the total size of a message.
   *
   * @public
   */
  MessageSystemAttributes?: Partial<Record<MessageSystemAttributeNameForSends, MessageSystemAttributeValue>> | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) queues.
   *
   * The token used for deduplication of sent messages. If a message with a particular `MessageDeduplicationId` is sent successfully, any messages sent with the same `MessageDeduplicationId` are accepted successfully but aren't delivered during the 5-minute deduplication interval. For more information, see [Exactly-once processing](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html) in the *Amazon SQS Developer Guide*.
   *
   * - Every message must have a unique `MessageDeduplicationId`,
   *
   *   - You may provide a `MessageDeduplicationId` explicitly.
   *   - If you aren't able to provide a `MessageDeduplicationId` and you enable `ContentBasedDeduplication` for your queue, Amazon SQS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *   - If you don't provide a `MessageDeduplicationId` and the queue doesn't have `ContentBasedDeduplication` set, the action fails with an error.
   *   - If the queue has `ContentBasedDeduplication` set, your `MessageDeduplicationId` overrides the generated one.
   * - When `ContentBasedDeduplication` is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.
   * - If you send one message with `ContentBasedDeduplication` enabled and then another message with a `MessageDeduplicationId` that is the same as the one generated for the first `MessageDeduplicationId`, the two messages are treated as duplicates and only one copy of the message is delivered.
   *
   * > **Note:**
   * >
   * > The `MessageDeduplicationId` is available to the consumer of the message (this can be useful for troubleshooting delivery issues).
   * >
   * > If a message is sent successfully but the acknowledgement is lost and the message is resent with the same `MessageDeduplicationId` after the deduplication interval, Amazon SQS can't detect duplicate messages.
   * >
   * > Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.
   *
   * The maximum length of `MessageDeduplicationId` is 128 characters. `MessageDeduplicationId` can contain alphanumeric characters (`a-z`, `A-Z`, `0-9`) and punctuation (``!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~``).
   *
   * For best practices of using `MessageDeduplicationId`, see [Using the MessageDeduplicationId Property](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * `MessageGroupId` is an attribute used in Amazon SQS FIFO (First-In-First-Out) and standard queues. In FIFO queues, `MessageGroupId` organizes messages into distinct groups. Messages within the same message group are always processed one at a time, in strict order, ensuring that no two messages from the same group are processed simultaneously. In standard queues, using `MessageGroupId` enables fair queues. It is used to identify the tenant a message belongs to, helping maintain consistent message dwell time across all tenants during noisy neighbor events. Unlike FIFO queues, messages with the same `MessageGroupId` can be processed in parallel, maintaining the high throughput of standard queues.
   *
   * - **FIFO queues:** `MessageGroupId` acts as the tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use `MessageGroupId` values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.
   *
   *   If you do not provide a `MessageGroupId` when sending a message to a FIFO queue, the action fails.
   *
   *   `ReceiveMessage` might return messages with multiple `MessageGroupId` values. For each `MessageGroupId`, the messages are sorted by time sent.
   * - **Standard queues:**Use `MessageGroupId` in standard queues to enable fair queues. The `MessageGroupId` identifies the tenant a message belongs to. A tenant can be any entity that shares a queue with others, such as your customer, a client application, or a request type. When one tenant sends a disproportionately large volume of messages or has messages that require longer processing time, fair queues ensure other tenants' messages maintain low dwell time. This preserves quality of service for all tenants while maintaining the scalability and throughput of standard queues. We recommend that you include a `MessageGroupId` in all messages when using fair queues.
   *
   * The length of `MessageGroupId` is 128 characters. Valid values: alphanumeric characters and punctuation ``(!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~)``.
   *
   * For best practices of using `MessageGroupId`, see [Using the MessageGroupId Property](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * The `MD5OfMessageBody` and `MessageId` elements.
 *
 * @public
 */
export interface SendMessageResult {
  /**
   * An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see [RFC1321](https://www.ietf.org/rfc/rfc1321.txt).
   *
   * @public
   */
  MD5OfMessageBody?: string | undefined;

  /**
   * An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see [RFC1321](https://www.ietf.org/rfc/rfc1321.txt).
   *
   * @public
   */
  MD5OfMessageAttributes?: string | undefined;

  /**
   * An MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest.
   *
   * @public
   */
  MD5OfMessageSystemAttributes?: string | undefined;

  /**
   * An attribute containing the `MessageId` of the message sent to the queue. For more information, see [Queue and Message Identifiers](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) queues.
   *
   * The large, non-consecutive number that Amazon SQS assigns to each message.
   *
   * The length of `SequenceNumber` is 128 bits. `SequenceNumber` continues to increase for a particular `MessageGroupId`.
   *
   * @public
   */
  SequenceNumber?: string | undefined;
}

/**
 * Contains the details of a single Amazon SQS message along with an `Id`.
 *
 * @public
 */
export interface SendMessageBatchRequestEntry {
  /**
   * An identifier for a message in this batch used to communicate the result.
   *
   * > **Note:**
   * >
   * > The `Id`s of a batch request need to be unique within a request.
   * >
   * > This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The body of the message.
   *
   * @public
   */
  MessageBody: string | undefined;

  /**
   * The length of time, in seconds, for which a specific message is delayed. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive `DelaySeconds` value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue is applied.
   *
   * > **Note:** When you set `FifoQueue`, you can't set `DelaySeconds` per message. You can set this parameter only on a queue level.
   *
   * @public
   */
  DelaySeconds?: number | undefined;

  /**
   * Each message attribute consists of a `Name`, `Type`, and `Value`. For more information, see [Amazon SQS message attributes](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * The message system attribute to send Each message system attribute consists of a `Name`, `Type`, and `Value`.
   *
   * > **Important:**
   * >
   * > - Currently, the only supported message system attribute is `AWSTraceHeader`. Its type must be `String` and its value must be a correctly formatted X-Ray trace header string.
   * > - The size of a message system attribute doesn't count towards the total size of a message.
   *
   * @public
   */
  MessageSystemAttributes?: Partial<Record<MessageSystemAttributeNameForSends, MessageSystemAttributeValue>> | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) queues.
   *
   * The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular `MessageDeduplicationId` is sent successfully, subsequent messages with the same `MessageDeduplicationId` are accepted successfully but aren't delivered. For more information, see [Exactly-once processing](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html) in the *Amazon SQS Developer Guide*.
   *
   * - Every message must have a unique `MessageDeduplicationId`,
   *
   *   - You may provide a `MessageDeduplicationId` explicitly.
   *   - If you aren't able to provide a `MessageDeduplicationId` and you enable `ContentBasedDeduplication` for your queue, Amazon SQS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *   - If you don't provide a `MessageDeduplicationId` and the queue doesn't have `ContentBasedDeduplication` set, the action fails with an error.
   *   - If the queue has `ContentBasedDeduplication` set, your `MessageDeduplicationId` overrides the generated one.
   * - When `ContentBasedDeduplication` is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.
   * - If you send one message with `ContentBasedDeduplication` enabled and then another message with a `MessageDeduplicationId` that is the same as the one generated for the first `MessageDeduplicationId`, the two messages are treated as duplicates and only one copy of the message is delivered.
   *
   * > **Note:**
   * >
   * > The `MessageDeduplicationId` is available to the consumer of the message (this can be useful for troubleshooting delivery issues).
   * >
   * > If a message is sent successfully but the acknowledgement is lost and the message is resent with the same `MessageDeduplicationId` after the deduplication interval, Amazon SQS can't detect duplicate messages.
   * >
   * > Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.
   *
   * The length of `MessageDeduplicationId` is 128 characters. `MessageDeduplicationId` can contain alphanumeric characters (`a-z`, `A-Z`, `0-9`) and punctuation (``!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~``).
   *
   * For best practices of using `MessageDeduplicationId`, see [Using the MessageDeduplicationId Property](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * `MessageGroupId` is an attribute used in Amazon SQS FIFO (First-In-First-Out) and standard queues. In FIFO queues, `MessageGroupId` organizes messages into distinct groups. Messages within the same message group are always processed one at a time, in strict order, ensuring that no two messages from the same group are processed simultaneously. In standard queues, using `MessageGroupId` enables fair queues. It is used to identify the tenant a message belongs to, helping maintain consistent message dwell time across all tenants during noisy neighbor events. Unlike FIFO queues, messages with the same `MessageGroupId` can be processed in parallel, maintaining the high throughput of standard queues.
   *
   * - **FIFO queues:** `MessageGroupId` acts as the tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use `MessageGroupId` values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.
   *
   *   If you do not provide a `MessageGroupId` when sending a message to a FIFO queue, the action fails.
   *
   *   `ReceiveMessage` might return messages with multiple `MessageGroupId` values. For each `MessageGroupId`, the messages are sorted by time sent.
   * - **Standard queues:**Use `MessageGroupId` in standard queues to enable fair queues. The `MessageGroupId` identifies the tenant a message belongs to. A tenant can be any entity that shares a queue with others, such as your customer, a client application, or a request type. When one tenant sends a disproportionately large volume of messages or has messages that require longer processing time, fair queues ensure other tenants' messages maintain low dwell time. This preserves quality of service for all tenants while maintaining the scalability and throughput of standard queues. We recommend that you include a `MessageGroupId` in all messages when using fair queues.
   *
   * The length of `MessageGroupId` is 128 characters. Valid values: alphanumeric characters and punctuation ``(!"#$%&'()*+,-./:;<=>?@[\]^_`\{|\}~)``.
   *
   * For best practices of using `MessageGroupId`, see [Using the MessageGroupId Property](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * @public
 */
export interface SendMessageBatchRequest {
  /**
   * The URL of the Amazon SQS queue to which batched messages are sent.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * A list of `SendMessageBatchRequestEntry` items.
   *
   * @public
   */
  Entries: SendMessageBatchRequestEntry[] | undefined;
}

/**
 * Encloses a `MessageId` for a successfully-enqueued message in a `SendMessageBatch.`
 *
 * @public
 */
export interface SendMessageBatchResultEntry {
  /**
   * An identifier for the message in this batch.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * An identifier for the message.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see [RFC1321](https://www.ietf.org/rfc/rfc1321.txt).
   *
   * @public
   */
  MD5OfMessageBody: string | undefined;

  /**
   * An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see [RFC1321](https://www.ietf.org/rfc/rfc1321.txt).
   *
   * @public
   */
  MD5OfMessageAttributes?: string | undefined;

  /**
   * An MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see [RFC1321](https://www.ietf.org/rfc/rfc1321.txt).
   *
   * @public
   */
  MD5OfMessageSystemAttributes?: string | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) queues.
   *
   * The large, non-consecutive number that Amazon SQS assigns to each message.
   *
   * The length of `SequenceNumber` is 128 bits. As `SequenceNumber` continues to increase for a particular `MessageGroupId`.
   *
   * @public
   */
  SequenceNumber?: string | undefined;
}

/**
 * For each message in the batch, the response contains a `SendMessageBatchResultEntry` tag if the message succeeds or a `BatchResultErrorEntry` tag if the message fails.
 *
 * @public
 */
export interface SendMessageBatchResult {
  /**
   * A list of `SendMessageBatchResultEntry` items.
   *
   * @public
   */
  Successful: SendMessageBatchResultEntry[] | undefined;

  /**
   * A list of `BatchResultErrorEntry` items with error details about each message that can't be enqueued.
   *
   * @public
   */
  Failed: BatchResultErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface SetQueueAttributesRequest {
  /**
   * The URL of the Amazon SQS queue whose attributes are set.
   *
   * Queue URLs and names are case-sensitive.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * A map of attributes to set.
   *
   * The following lists the names, descriptions, and values of the special request parameters that the `SetQueueAttributes` action uses:
   *
   * - `DelaySeconds` – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0.
   * - `MaximumMessageSize` – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) up to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).
   * - `MessageRetentionPeriod` – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer representing seconds, from 60 (1 minute) to 1,209,600 (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the `MessageRetentionPeriod` attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the `MessageRetentionPeriod` is reduced below the age of existing messages.
   * - `Policy` – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see [Overview of Amazon Web Services IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html) in the *Identity and Access Management User Guide*.
   * - `ReceiveMessageWaitTimeSeconds` – The length of time, in seconds, for which a `ReceiveMessage` action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0.
   * - `VisibilityTimeout` – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see [Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Amazon SQS Developer Guide*.
   *
   * The following attributes apply only to [dead-letter queues:](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)
   *
   * - `RedrivePolicy` – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:
   *
   *   - `deadLetterTargetArn` – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of `maxReceiveCount` is exceeded.
   *   - `maxReceiveCount` – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the `ReceiveCount` for a message exceeds the `maxReceiveCount` for a queue, Amazon SQS moves the message to the dead-letter-queue.
   * - `RedriveAllowPolicy` – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:
   *
   *   - `redrivePermission` – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
   *
   *     - `allowAll` – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.
   *     - `denyAll` – No source queues can specify this queue as the dead-letter queue.
   *     - `byQueue` – Only queues specified by the `sourceQueueArns` parameter can specify this queue as the dead-letter queue.
   *   - `sourceQueueArns` – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the `redrivePermission` parameter is set to `byQueue`. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the `redrivePermission` parameter to `allowAll`.
   *
   * > **Note:** The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
   *
   * The following attributes apply only to [server-side-encryption](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html):
   *
   * - `KmsMasterKeyId` – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms). While the alias of the AWS-managed CMK for Amazon SQS is always `alias/aws/sqs`, the alias of a custom CMK can, for example, be `alias/MyAlias`. For more examples, see [KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*.
   * - `KmsDataKeyReusePeriodSeconds` – The length of time, in seconds, for which Amazon SQS can reuse a [data key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys) to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see [How Does the Data Key Reuse Period Work?](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work).
   * - `SqsManagedSseEnabled` – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)).
   *
   * The following attribute applies only to [FIFO (first-in-first-out) queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html):
   *
   * - `ContentBasedDeduplication` – Enables content-based deduplication. For more information, see [Exactly-once processing](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html) in the *Amazon SQS Developer Guide*. Note the following:
   *
   *   - Every message must have a unique `MessageDeduplicationId`.
   *
   *     - You may provide a `MessageDeduplicationId` explicitly.
   *     - If you aren't able to provide a `MessageDeduplicationId` and you enable `ContentBasedDeduplication` for your queue, Amazon SQS uses a SHA-256 hash to generate the `MessageDeduplicationId` using the body of the message (but not the attributes of the message).
   *     - If you don't provide a `MessageDeduplicationId` and the queue doesn't have `ContentBasedDeduplication` set, the action fails with an error.
   *     - If the queue has `ContentBasedDeduplication` set, your `MessageDeduplicationId` overrides the generated one.
   *   - When `ContentBasedDeduplication` is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.
   *   - If you send one message with `ContentBasedDeduplication` enabled and then another message with a `MessageDeduplicationId` that is the same as the one generated for the first `MessageDeduplicationId`, the two messages are treated as duplicates and only one copy of the message is delivered.
   *
   * The following attributes apply only to [high throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html):
   *
   * - `DeduplicationScope` – Specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue`.
   * - `FifoThroughputLimit` – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` and `perMessageGroupId`. The `perMessageGroupId` value is allowed only when the value for `DeduplicationScope` is `messageGroup`.
   *
   * To enable high throughput for FIFO queues, do the following:
   *
   * - Set `DeduplicationScope` to `messageGroup`.
   * - Set `FifoThroughputLimit` to `perMessageGroupId`.
   *
   * If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.
   *
   * For information on throughput quotas, see [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  Attributes: Partial<Record<QueueAttributeName, string>> | undefined;
}

/**
 * @public
 */
export interface StartMessageMoveTaskRequest {
  /**
   * The ARN of the queue that contains the messages to be moved to another queue. Currently, only ARNs of dead-letter queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs whose sources are non-SQS queues, such as Lambda or Amazon SNS topics, are not currently supported.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN of the queue that receives the moved messages. You can use this field to specify the destination queue where you would like to redrive messages. If this field is left blank, the messages will be redriven back to their respective original source queues.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The number of messages to be moved per second (the message movement rate). You can use this field to define a fixed message movement rate. The maximum value for messages per second is 500. If this field is left blank, the system will optimize the rate based on the queue message backlog size, which may vary throughout the duration of the message movement task.
   *
   * @public
   */
  MaxNumberOfMessagesPerSecond?: number | undefined;
}

/**
 * @public
 */
export interface StartMessageMoveTaskResult {
  /**
   * An identifier associated with a message movement task. You can use this identifier to cancel a specified message movement task using the `CancelMessageMoveTask` action.
   *
   * @public
   */
  TaskHandle?: string | undefined;
}

/**
 * @public
 */
export interface TagQueueRequest {
  /**
   * The URL of the queue.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * The list of tags to be added to the specified queue.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagQueueRequest {
  /**
   * The URL of the queue.
   *
   * @public
   */
  QueueUrl: string | undefined;

  /**
   * The list of tags to be removed from the specified queue.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}
