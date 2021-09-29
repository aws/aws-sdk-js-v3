import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p></p>
 */
export interface AddPermissionRequest {
  /**
   * <p>The URL of the Amazon SQS queue to which permissions are added.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>The unique identification of the permission you're setting (for example, <code>AliceSendMessage</code>). Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p>
   */
  Label: string | undefined;

  /**
   * <p>The account numbers of the <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principals</a> who are to receive
   *             permission. For information about locating the account identification, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html#sqs-api-request-authentication">Your Amazon Web Services Identifiers</a> in the <i>Amazon SQS Developer
   *             Guide</i>.</p>
   */
  AWSAccountIds: string[] | undefined;

  /**
   * <p>The action the client wants to allow for the specified principal. Valid values: the name of any action or <code>*</code>.</p>
   *          <p>For more information about these actions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-overview-of-managing-access.html">Overview of Managing Access Permissions to Your Amazon Simple Queue Service Resource</a>
   *           in the <i>Amazon SQS Developer Guide</i>.</p>
   *          <p>Specifying <code>SendMessage</code>, <code>DeleteMessage</code>, or <code>ChangeMessageVisibility</code> for <code>ActionName.n</code> also grants permissions for the corresponding batch versions of those actions: <code>SendMessageBatch</code>,
   *         <code>DeleteMessageBatch</code>, and <code>ChangeMessageVisibilityBatch</code>.</p>
   */
  Actions: string[] | undefined;
}

export namespace AddPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddPermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified action violates a limit. For example, <code>ReceiveMessage</code>
 *             returns this error if the maximum number of inflight messages is reached and
 *                 <code>AddPermission</code> returns this error if the maximum number of permissions
 *             for the queue is reached.</p>
 */
export interface OverLimit extends __SmithyException, $MetadataBearer {
  name: "OverLimit";
  $fault: "client";
}

export namespace OverLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OverLimit): any => ({
    ...obj,
  });
}

export interface ChangeMessageVisibilityRequest {
  /**
   * <p>The URL of the Amazon SQS queue whose message's visibility is changed.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>The receipt handle associated with the message whose visibility timeout is changed. This parameter is returned by the <code>
   *                <a>ReceiveMessage</a>
   *             </code> action.</p>
   */
  ReceiptHandle: string | undefined;

  /**
   * <p>The new value for the message's visibility timeout (in seconds). Values range: <code>0</code> to <code>43200</code>. Maximum: 12 hours.</p>
   */
  VisibilityTimeout: number | undefined;
}

export namespace ChangeMessageVisibilityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeMessageVisibilityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified message isn't in flight.</p>
 */
export interface MessageNotInflight extends __SmithyException, $MetadataBearer {
  name: "MessageNotInflight";
  $fault: "client";
}

export namespace MessageNotInflight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessageNotInflight): any => ({
    ...obj,
  });
}

/**
 * <p>The specified receipt handle isn't valid.</p>
 */
export interface ReceiptHandleIsInvalid extends __SmithyException, $MetadataBearer {
  name: "ReceiptHandleIsInvalid";
  $fault: "client";
}

export namespace ReceiptHandleIsInvalid {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReceiptHandleIsInvalid): any => ({
    ...obj,
  });
}

/**
 * <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 */
export interface BatchEntryIdsNotDistinct extends __SmithyException, $MetadataBearer {
  name: "BatchEntryIdsNotDistinct";
  $fault: "client";
}

export namespace BatchEntryIdsNotDistinct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEntryIdsNotDistinct): any => ({
    ...obj,
  });
}

/**
 * <p>Encloses a receipt handle and an entry id for each message in <code>
 *                <a>ChangeMessageVisibilityBatch</a>.</code>
 *          </p>
 *          <important>
 *             <p>All of the following list parameters must be prefixed with <code>ChangeMessageVisibilityBatchRequestEntry.n</code>, where <code>n</code> is an integer value starting with <code>1</code>. For example, a parameter list for this action might look like this:</p>
 *          </important>
 *          <p>
 *             <code>&ChangeMessageVisibilityBatchRequestEntry.1.Id=change_visibility_msg_2</code>
 *         </p>
 *          <p>
 *             <code>&ChangeMessageVisibilityBatchRequestEntry.1.ReceiptHandle=your_receipt_handle</code>
 *         </p>
 *          <p>
 *             <code>&ChangeMessageVisibilityBatchRequestEntry.1.VisibilityTimeout=45</code>
 *         </p>
 */
export interface ChangeMessageVisibilityBatchRequestEntry {
  /**
   * <p>An identifier for this particular receipt handle used to communicate the result.</p>
   *          <note>
   *             <p>The <code>Id</code>s of a batch request need to be unique within a request.</p>
   *             <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p>
   *          </note>
   */
  Id: string | undefined;

  /**
   * <p>A receipt handle.</p>
   */
  ReceiptHandle: string | undefined;

  /**
   * <p>The new value (in seconds) for the message's visibility timeout.</p>
   */
  VisibilityTimeout?: number;
}

export namespace ChangeMessageVisibilityBatchRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeMessageVisibilityBatchRequestEntry): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ChangeMessageVisibilityBatchRequest {
  /**
   * <p>The URL of the Amazon SQS queue whose messages' visibility is changed.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>A list of receipt handles of the messages for which the visibility timeout must be changed.</p>
   */
  Entries: ChangeMessageVisibilityBatchRequestEntry[] | undefined;
}

export namespace ChangeMessageVisibilityBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeMessageVisibilityBatchRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Gives a detailed description of the result of an action on each entry in the
 *             request.</p>
 */
export interface BatchResultErrorEntry {
  /**
   * <p>The <code>Id</code> of an entry in a batch request.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies whether the error happened due to the caller of the batch API action.</p>
   */
  SenderFault: boolean | undefined;

  /**
   * <p>An error code representing why the action failed on this entry.</p>
   */
  Code: string | undefined;

  /**
   * <p>A message explaining why the action failed on this entry.</p>
   */
  Message?: string;
}

export namespace BatchResultErrorEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchResultErrorEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Encloses the <code>Id</code> of an entry in <code>
 *                <a>ChangeMessageVisibilityBatch</a>.</code>
 *          </p>
 */
export interface ChangeMessageVisibilityBatchResultEntry {
  /**
   * <p>Represents a message whose visibility timeout has been changed successfully.</p>
   */
  Id: string | undefined;
}

export namespace ChangeMessageVisibilityBatchResultEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeMessageVisibilityBatchResultEntry): any => ({
    ...obj,
  });
}

/**
 * <p>For each message in the batch, the response contains a <code>
 *                <a>ChangeMessageVisibilityBatchResultEntry</a>
 *             </code> tag if the message succeeds or a <code>
 *                <a>BatchResultErrorEntry</a>
 *             </code> tag if the message fails.</p>
 */
export interface ChangeMessageVisibilityBatchResult {
  /**
   * <p>A list of <code>
   *                <a>ChangeMessageVisibilityBatchResultEntry</a>
   *             </code> items.</p>
   */
  Successful: ChangeMessageVisibilityBatchResultEntry[] | undefined;

  /**
   * <p>A list of <code>
   *                <a>BatchResultErrorEntry</a>
   *             </code> items.</p>
   */
  Failed: BatchResultErrorEntry[] | undefined;
}

export namespace ChangeMessageVisibilityBatchResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeMessageVisibilityBatchResult): any => ({
    ...obj,
  });
}

/**
 * <p>The batch request doesn't contain any entries.</p>
 */
export interface EmptyBatchRequest extends __SmithyException, $MetadataBearer {
  name: "EmptyBatchRequest";
  $fault: "client";
}

export namespace EmptyBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyBatchRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification.</p>
 */
export interface InvalidBatchEntryId extends __SmithyException, $MetadataBearer {
  name: "InvalidBatchEntryId";
  $fault: "client";
}

export namespace InvalidBatchEntryId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidBatchEntryId): any => ({
    ...obj,
  });
}

/**
 * <p>The batch request contains more entries than permissible.</p>
 */
export interface TooManyEntriesInBatchRequest extends __SmithyException, $MetadataBearer {
  name: "TooManyEntriesInBatchRequest";
  $fault: "client";
}

export namespace TooManyEntriesInBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyEntriesInBatchRequest): any => ({
    ...obj,
  });
}

export type QueueAttributeName =
  | "All"
  | "ApproximateNumberOfMessages"
  | "ApproximateNumberOfMessagesDelayed"
  | "ApproximateNumberOfMessagesNotVisible"
  | "ContentBasedDeduplication"
  | "CreatedTimestamp"
  | "DeduplicationScope"
  | "DelaySeconds"
  | "FifoQueue"
  | "FifoThroughputLimit"
  | "KmsDataKeyReusePeriodSeconds"
  | "KmsMasterKeyId"
  | "LastModifiedTimestamp"
  | "MaximumMessageSize"
  | "MessageRetentionPeriod"
  | "Policy"
  | "QueueArn"
  | "ReceiveMessageWaitTimeSeconds"
  | "RedriveAllowPolicy"
  | "RedrivePolicy"
  | "VisibilityTimeout";

/**
 * <p></p>
 */
export interface CreateQueueRequest {
  /**
   * <p>The name of the new queue. The following limits apply to this name:</p>
   *          <ul>
   *             <li>
   *               <p>A queue name can have up to 80 characters.</p>
   *             </li>
   *             <li>
   *               <p>Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p>
   *             </li>
   *             <li>
   *               <p>A FIFO queue name must end with the <code>.fifo</code> suffix.</p>
   *             </li>
   *          </ul>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueName: string | undefined;

  /**
   * <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging
   * Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   *
   *          <p>When you use queue tags, keep the following guidelines in mind:</p>
   *          <ul>
   *             <li>
   *                <p>Adding more than 50 tags to a queue isn't recommended.</p>
   *             </li>
   *             <li>
   *                <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p>
   *             </li>
   *             <li>
   *                <p>Tags are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p>
   *             </li>
   *          </ul>
   *          <p>For a full list of tag restrictions, see
   * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a>
   * in the <i>Amazon SQS Developer Guide</i>.</p>
   *          <note>
   *             <p>To be able to tag a queue on creation, you must have the
   *                     <code>sqs:CreateQueue</code> and <code>sqs:TagQueue</code> permissions.</p>
   *             <p>Cross-account permissions don't apply to this action. For more information,
   * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
   * cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   *          </note>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A map of attributes with their corresponding values.</p>
   *          <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateQueue</code> action uses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB).
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days).
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Policy</code> – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>Amazon IAM User Guide</i>.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code>
   *                      <a>ReceiveMessage</a>
   *                   </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0.
   *             </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see
   *                   <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality
   *             of the source queue as a JSON object. The parameters are as follows:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to
   *                   which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being
   *                  moved to the dead-letter queue. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code>
   *                  for a queue, Amazon SQS moves the message to the dead-letter-queue.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter
   *             queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p>
   *                <ul>
   *                   <li>
   *                     <p>
   *                         <code>redrivePermission</code> – The permission type that defines which source queues can
   *                     specify the current queue as the dead-letter queue. Valid values are:</p>
   *                     <ul>
   *                         <li>
   *                           <p>
   *                               <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can
   *                           specify this queue as the dead-letter queue.</p>
   *                        </li>
   *                         <li>
   *                           <p>
   *                               <code>denyAll</code> – No source queues can specify this queue as the dead-letter
   *                           queue.</p>
   *                        </li>
   *                         <li>
   *                            <p>
   *                               <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify
   *                          this queue as the dead-letter queue.</p>
   *                        </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                     <p>
   *                         <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify
   *                     this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the
   *                     <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs.
   *                     To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter
   *                     to <code>allowAll</code>.</p>
   *                   </li>
   *                </ul>
   *               </li>
   *          </ul>
   *               <note>
   *             <p>The dead-letter queue of a
   *               FIFO queue must also be a FIFO queue. Similarly, the dead-letter
   *               queue of a standard queue must also be a standard queue.</p>
   *          </note>
   *
   *
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>.
   *                   While the alias of the Amazon Web Services managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i>
   *                   </code>.
   *                   For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>.
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt
   *                   or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security
   *                   but results in more calls to KMS which might incur charges after Free Tier. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>.
   *               </p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>FifoQueue</code> – Designates a queue as FIFO. Valid values are <code>true</code> and <code>false</code>. If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.
   *                   You can provide this attribute only during queue creation. You can't change it for an existing queue.
   *                   When you set this attribute, you must also provide the <code>MessageGroupId</code> for your messages explicitly.</p>
   *                <p>For more information, see
   *                       <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a>
   *                   in the <i>Amazon SQS Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>ContentBasedDeduplication</code> – Enables content-based deduplication. Valid values are <code>true</code> and <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the
   *                       <i>Amazon SQS Developer Guide</i>. Note the following:
   *               </p>
   *               <ul>
   *                   <li>
   *                       <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p>
   *                       <ul>
   *                         <li>
   *                               <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p>
   *                           </li>
   *                         <li>
   *                               <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue,
   *                                   Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).
   *                               </p>
   *                           </li>
   *                         <li>
   *                               <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set,
   *                                   the action fails with an error.</p>
   *                           </li>
   *                         <li>
   *                               <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p>
   *                           </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                       <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates
   *                           and only one copy of the message is delivered.</p>
   *                   </li>
   *                   <li>
   *                       <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same
   *                           as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered.
   *                       </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   *
   *          <p>The following attributes apply only to
   * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput
   * for FIFO queues</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the
   *       message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput
   *       quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>.
   *       The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To enable high throughput for FIFO queues, do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you set these attributes to anything other than the values shown for enabling high
   *   throughput, normal throughput is in effect and deduplication occurs as specified.</p>
   *          <p>For information on throughput quotas,
   *   see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a>
   *   in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace CreateQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQueueRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the <code>QueueUrl</code> attribute of the created queue.</p>
 */
export interface CreateQueueResult {
  /**
   * <p>The URL of the created Amazon SQS queue.</p>
   */
  QueueUrl?: string;
}

export namespace CreateQueueResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQueueResult): any => ({
    ...obj,
  });
}

/**
 * <p>You must wait 60 seconds after deleting a queue before you can create another queue
 *             with the same name.</p>
 */
export interface QueueDeletedRecently extends __SmithyException, $MetadataBearer {
  name: "QueueDeletedRecently";
  $fault: "client";
}

export namespace QueueDeletedRecently {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueDeletedRecently): any => ({
    ...obj,
  });
}

/**
 * <p>A queue with this name already exists. Amazon SQS returns this error only if the request
 *             includes attributes whose values differ from those of the existing queue.</p>
 */
export interface QueueNameExists extends __SmithyException, $MetadataBearer {
  name: "QueueNameExists";
  $fault: "client";
}

export namespace QueueNameExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueNameExists): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteMessageRequest {
  /**
   * <p>The URL of the Amazon SQS queue from which messages are deleted.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>The receipt handle associated with the message to delete.</p>
   */
  ReceiptHandle: string | undefined;
}

export namespace DeleteMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMessageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified receipt handle isn't valid for the current version.</p>
 */
export interface InvalidIdFormat extends __SmithyException, $MetadataBearer {
  name: "InvalidIdFormat";
  $fault: "client";
}

export namespace InvalidIdFormat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidIdFormat): any => ({
    ...obj,
  });
}

/**
 * <p>Encloses a receipt handle and an identifier for it.</p>
 */
export interface DeleteMessageBatchRequestEntry {
  /**
   * <p>An identifier for this particular receipt handle. This is used to communicate the result.</p>
   *          <note>
   *             <p>The <code>Id</code>s of a batch request need to be unique within a request.</p>
   *             <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p>
   *          </note>
   */
  Id: string | undefined;

  /**
   * <p>A receipt handle.</p>
   */
  ReceiptHandle: string | undefined;
}

export namespace DeleteMessageBatchRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMessageBatchRequestEntry): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteMessageBatchRequest {
  /**
   * <p>The URL of the Amazon SQS queue from which messages are deleted.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>A list of receipt handles for the messages to be deleted.</p>
   */
  Entries: DeleteMessageBatchRequestEntry[] | undefined;
}

export namespace DeleteMessageBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMessageBatchRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Encloses the <code>Id</code> of an entry in <code>
 *                <a>DeleteMessageBatch</a>.</code>
 *          </p>
 */
export interface DeleteMessageBatchResultEntry {
  /**
   * <p>Represents a successfully deleted message.</p>
   */
  Id: string | undefined;
}

export namespace DeleteMessageBatchResultEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMessageBatchResultEntry): any => ({
    ...obj,
  });
}

/**
 * <p>For each message in the batch, the response contains a  <code>
 *                <a>DeleteMessageBatchResultEntry</a>
 *             </code> tag if the message is deleted or a <code>
 *                <a>BatchResultErrorEntry</a>
 *             </code> tag if the message can't be deleted.</p>
 */
export interface DeleteMessageBatchResult {
  /**
   * <p>A list of <code>
   *                <a>DeleteMessageBatchResultEntry</a>
   *             </code> items.</p>
   */
  Successful: DeleteMessageBatchResultEntry[] | undefined;

  /**
   * <p>A list of <code>
   *                <a>BatchResultErrorEntry</a>
   *             </code> items.</p>
   */
  Failed: BatchResultErrorEntry[] | undefined;
}

export namespace DeleteMessageBatchResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMessageBatchResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteQueueRequest {
  /**
   * <p>The URL of the Amazon SQS queue to delete.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;
}

export namespace DeleteQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueueRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetQueueAttributesRequest {
  /**
   * <p>The URL of the Amazon SQS queue whose attribute information is retrieved.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>A list of attributes for which to retrieve information.</p>
   *          <p>The <code>AttributeName.N</code> parameter is optional, but if you don't specify values for this parameter,
   *                 the request returns empty results.</p>
   *          <note>
   *             <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
   *          </note>
   *          <p>The following attributes are supported:</p>
   *          <important>
   *             <p>The <code>ApproximateNumberOfMessagesDelayed</code>, <code>ApproximateNumberOfMessagesNotVisible</code>,
   *               and <code>ApproximateNumberOfMessagesVisible</code> metrics may not achieve consistency
   *               until at least 1 minute after the producers stop sending messages. This period is required for
   *               the queue metadata to reach eventual consistency. </p>
   *          </important>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>All</code> – Returns all values. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApproximateNumberOfMessages</code> – Returns the approximate number of
   *                     messages available for retrieval from the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApproximateNumberOfMessagesDelayed</code> – Returns the approximate number
   *                     of messages in the queue that are delayed and not available for reading
   *                     immediately. This can happen when the queue is configured as a delay queue or
   *                     when a message has been sent with a delay parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApproximateNumberOfMessagesNotVisible</code> – Returns the approximate
   *                     number of messages that are in flight. Messages are considered to be
   *                         <i>in flight</i> if they have been sent to a client but have
   *                     not yet been deleted or have not yet reached the end of their visibility window. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreatedTimestamp</code> – Returns the time when the queue was created in
   *                     seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch
   *                     time</a>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DelaySeconds</code> – Returns the default delay on the queue in
   *                     seconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModifiedTimestamp</code> – Returns the time when the queue was last
   *                     changed in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch
   *                         time</a>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaximumMessageSize</code> – Returns the limit of how many bytes a message
   *                     can contain before Amazon SQS rejects it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MessageRetentionPeriod</code> – Returns the length of time, in seconds,
   *                     for which Amazon SQS retains a message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Policy</code> – Returns the policy of the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QueueArn</code> – Returns the Amazon resource name (ARN) of the
   *                     queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReceiveMessageWaitTimeSeconds</code> – Returns the length of time, in
   *                     seconds, for which the <code>ReceiveMessage</code> action waits for a message to
   *                     arrive. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityTimeout</code> – Returns the visibility timeout for the queue. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.
   *             </p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality
   *             of the source queue as a JSON object. The parameters are as follows:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to
   *                   which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being
   *                  moved to the dead-letter queue. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code>
   *                  for a queue, Amazon SQS moves the message to the dead-letter-queue.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter
   *             queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p>
   *                <ul>
   *                   <li>
   *                     <p>
   *                         <code>redrivePermission</code> – The permission type that defines which source queues can
   *                     specify the current queue as the dead-letter queue. Valid values are:</p>
   *                     <ul>
   *                         <li>
   *                           <p>
   *                               <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can
   *                           specify this queue as the dead-letter queue.</p>
   *                        </li>
   *                         <li>
   *                           <p>
   *                               <code>denyAll</code> – No source queues can specify this queue as the dead-letter
   *                           queue.</p>
   *                        </li>
   *                         <li>
   *                            <p>
   *                               <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify
   *                          this queue as the dead-letter queue.</p>
   *                        </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                     <p>
   *                         <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify
   *                     this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the
   *                     <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs.
   *                     To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter
   *                     to <code>allowAll</code>.</p>
   *                   </li>
   *                </ul>
   *               </li>
   *          </ul>
   *               <note>
   *             <p>The dead-letter queue of a
   *               FIFO queue must also be a FIFO queue. Similarly, the dead-letter
   *               queue of a standard queue must also be a standard queue.</p>
   *          </note>
   *
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>KmsMasterKeyId</code> – Returns the ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>.
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>KmsDataKeyReusePeriodSeconds</code> – Returns the length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.
   *                   For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>.
   *               </p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>FifoQueue</code> – Returns information about whether the queue is FIFO. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   *               <note>
   *                   <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p>
   *                </note>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>ContentBasedDeduplication</code> – Returns whether content-based deduplication is enabled for the queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.
   *               </p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>The following attributes apply only to
   * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput
   * for FIFO queues</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the
   *       message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput
   *       quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>.
   *       The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To enable high throughput for FIFO queues, do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you set these attributes to anything other than the values shown for enabling high
   *   throughput, normal throughput is in effect and deduplication occurs as specified.</p>
   *          <p>For information on throughput quotas,
   *   see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a>
   *   in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  AttributeNames?: (QueueAttributeName | string)[];
}

export namespace GetQueueAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueueAttributesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of returned queue attributes.</p>
 */
export interface GetQueueAttributesResult {
  /**
   * <p>A map of attributes to their respective values.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace GetQueueAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueueAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified attribute doesn't exist.</p>
 */
export interface InvalidAttributeName extends __SmithyException, $MetadataBearer {
  name: "InvalidAttributeName";
  $fault: "client";
}

export namespace InvalidAttributeName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAttributeName): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetQueueUrlRequest {
  /**
   * <p>The name of the queue whose URL must be fetched. Maximum 80 characters. Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueName: string | undefined;

  /**
   * <p>The account ID of the account that created the queue.</p>
   */
  QueueOwnerAWSAccountId?: string;
}

export namespace GetQueueUrlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueueUrlRequest): any => ({
    ...obj,
  });
}

/**
 * <p>For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 */
export interface GetQueueUrlResult {
  /**
   * <p>The URL of the queue.</p>
   */
  QueueUrl?: string;
}

export namespace GetQueueUrlResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueueUrlResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified queue doesn't exist.</p>
 */
export interface QueueDoesNotExist extends __SmithyException, $MetadataBearer {
  name: "QueueDoesNotExist";
  $fault: "client";
}

export namespace QueueDoesNotExist {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueDoesNotExist): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListDeadLetterSourceQueuesRequest {
  /**
   * <p>The URL of a dead-letter queue.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>Pagination token to request the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. Value range is 1 to 1000.
   *           You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListDeadLetterSourceQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeadLetterSourceQueuesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of your dead letter source queues.</p>
 */
export interface ListDeadLetterSourceQueuesResult {
  /**
   * <p>A list of source queue URLs that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p>
   */
  queueUrls: string[] | undefined;

  /**
   * <p>Pagination token to include in the next request. Token value is <code>null</code> if there are no additional
   *           results to request, or if you did not set <code>MaxResults</code> in the request.</p>
   */
  NextToken?: string;
}

export namespace ListDeadLetterSourceQueuesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeadLetterSourceQueuesResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListQueuesRequest {
  /**
   * <p>A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueNamePrefix?: string;

  /**
   * <p>Pagination token to request the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. Value range is 1 to 1000.
   *           You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of your queues.</p>
 */
export interface ListQueuesResult {
  /**
   * <p>Pagination token to include in the next request. Token value is <code>null</code> if there are no additional
   *         results to request, or if you did not set <code>MaxResults</code> in the request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of queue URLs, up to 1,000 entries, or the value of MaxResults that you sent in the request.</p>
   */
  QueueUrls?: string[];
}

export namespace ListQueuesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuesResult): any => ({
    ...obj,
  });
}

export interface ListQueueTagsRequest {
  /**
   * <p>The URL of the queue.</p>
   */
  QueueUrl: string | undefined;
}

export namespace ListQueueTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueueTagsRequest): any => ({
    ...obj,
  });
}

export interface ListQueueTagsResult {
  /**
   * <p>The list of all tags added to the specified queue.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListQueueTagsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueueTagsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates that the specified queue previously received a <code>PurgeQueue</code> request within the last 60 seconds (the time it can take to delete the messages in the queue).</p>
 */
export interface PurgeQueueInProgress extends __SmithyException, $MetadataBearer {
  name: "PurgeQueueInProgress";
  $fault: "client";
}

export namespace PurgeQueueInProgress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurgeQueueInProgress): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PurgeQueueRequest {
  /**
   * <p>The URL of the queue from which the <code>PurgeQueue</code> action deletes messages.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;
}

export namespace PurgeQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurgeQueueRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ReceiveMessageRequest {
  /**
   * <p>The URL of the Amazon SQS queue from which messages are received.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>A list of attributes that need to be returned along with each message. These attributes
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>All</code> – Returns all values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApproximateFirstReceiveTimestamp</code> – Returns the time the message was first received from the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApproximateReceiveCount</code> – Returns the number of times a message has been received across all queues but not deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWSTraceHeader</code> – Returns the X-Ray trace header string.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SenderId</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                        <p>For an IAM user, returns the IAM user ID, for example <code>ABCDEFGHI1JKLMNOPQ23R</code>.</p>
   *                    </li>
   *                   <li>
   *                        <p>For an IAM role, returns the IAM role ID, for example <code>ABCDE1F2GH3I4JK5LMNOP:i-a123b456</code>.</p>
   *                    </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SentTimestamp</code> – Returns the time the message was sent to the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MessageDeduplicationId</code> – Returns the value provided by the
   *                     producer that calls the <code>
   *                      <a>SendMessage</a>
   *                   </code>
   *                     action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MessageGroupId</code> – Returns the value provided by the producer that
   *                     calls the <code>
   *                      <a>SendMessage</a>
   *                   </code> action. Messages with the
   *                     same <code>MessageGroupId</code> are returned in sequence.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SequenceNumber</code> – Returns the value provided by Amazon SQS.</p>
   *             </li>
   *          </ul>
   */
  AttributeNames?: (QueueAttributeName | string)[];

  /**
   * <p>The name of the message attribute, where <i>N</i> is the index.</p>
   *          <ul>
   *             <li>
   *                <p>The name can contain alphanumeric characters and the underscore (<code>_</code>), hyphen (<code>-</code>), and period (<code>.</code>).</p>
   *             </li>
   *             <li>
   *                <p>The name is case-sensitive and must be unique among all attribute names for the message.</p>
   *             </li>
   *             <li>
   *                <p>The name must not start with AWS-reserved prefixes such as <code>AWS.</code> or <code>Amazon.</code> (or any casing variants).</p>
   *             </li>
   *             <li>
   *                <p>The name must not start or end with a period (<code>.</code>), and it should not have periods in succession (<code>..</code>).</p>
   *             </li>
   *             <li>
   *                <p>The name can be up to 256 characters long.</p>
   *             </li>
   *          </ul>
   *
   *          <p>When using <code>ReceiveMessage</code>, you can send a list of attribute names to receive, or you can return all of the attributes by specifying <code>All</code> or <code>.*</code> in your request.
   *           You can also use all message attributes starting with a prefix, for example <code>bar.*</code>.</p>
   */
  MessageAttributeNames?: string[];

  /**
   * <p>The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1.</p>
   */
  MaxNumberOfMessages?: number;

  /**
   * <p>The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a <code>ReceiveMessage</code> request.</p>
   */
  VisibilityTimeout?: number;

  /**
   * <p>The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than <code>WaitTimeSeconds</code>.
   *           If no messages are available and the wait time expires, the call returns successfully with an empty list of messages.</p>
   *          <important>
   *             <p>To avoid HTTP errors, ensure that the HTTP response timeout for <code>ReceiveMessage</code>
   *                 requests is longer than the <code>WaitTimeSeconds</code> parameter. For example,
   *                 with the Java SDK, you can set HTTP transport settings using the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/nio/netty/NettyNioAsyncHttpClient.html"> NettyNioAsyncHttpClient</a> for asynchronous clients, or the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/apache/ApacheHttpClient.html"> ApacheHttpClient</a> for synchronous clients. </p>
   *          </important>
   */
  WaitTimeSeconds?: number;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The token used for deduplication of <code>ReceiveMessage</code> calls. If a networking issue occurs after a <code>ReceiveMessage</code> action, and instead of a response you receive a generic error,
   *           it is possible to retry the same action with an identical <code>ReceiveRequestAttemptId</code> to retrieve the same set of messages, even if their visibility timeout has not yet expired.</p>
   *          <ul>
   *             <li>
   *                <p>You can use <code>ReceiveRequestAttemptId</code> only for 5 minutes after a <code>ReceiveMessage</code> action.</p>
   *             </li>
   *             <li>
   *                <p>When you set <code>FifoQueue</code>, a caller of the <code>ReceiveMessage</code> action can provide a <code>ReceiveRequestAttemptId</code> explicitly.</p>
   *             </li>
   *             <li>
   *                <p>If a caller of the <code>ReceiveMessage</code> action doesn't provide a <code>ReceiveRequestAttemptId</code>, Amazon SQS generates a <code>ReceiveRequestAttemptId</code>.</p>
   *             </li>
   *             <li>
   *                <p>It is possible to retry the <code>ReceiveMessage</code> action with the same <code>ReceiveRequestAttemptId</code> if none of the messages have been modified (deleted or had their visibility changes).</p>
   *             </li>
   *             <li>
   *                <p>During a visibility timeout, subsequent calls with the same <code>ReceiveRequestAttemptId</code> return the same messages and receipt handles. If a retry occurs within the deduplication interval,
   *               it resets the visibility timeout. For more information, see
   *               <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a>
   *               in the <i>Amazon SQS Developer Guide</i>.</p>
   *               <important>
   *                   <p>If a caller of the <code>ReceiveMessage</code> action still processes
   *                         messages when the visibility timeout expires and messages become visible,
   *                         another worker consuming from the same queue can receive the same messages
   *                         and therefore process duplicates. Also, if a consumer whose message
   *                         processing time is longer than the visibility timeout tries to delete the
   *                         processed messages, the action fails with an error.</p>
   *                   <p>To mitigate this effect, ensure that your application observes a safe threshold before the visibility timeout expires and extend the visibility timeout as necessary.</p>
   *               </important>
   *             </li>
   *             <li>
   *                <p>While messages with a particular <code>MessageGroupId</code> are invisible, no more messages belonging to the same <code>MessageGroupId</code> are returned until the visibility timeout expires. You can still receive
   *               messages with another <code>MessageGroupId</code> as long as it is also visible.</p>
   *             </li>
   *             <li>
   *                <p>If a caller of <code>ReceiveMessage</code> can't track the <code>ReceiveRequestAttemptId</code>, no retries work until the original visibility timeout expires. As a result, delays might occur but
   *               the messages in the queue remain in a strict order.</p>
   *             </li>
   *          </ul>
   *          <p>The maximum length of <code>ReceiveRequestAttemptId</code> is 128 characters. <code>ReceiveRequestAttemptId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and
   *           punctuation (<code>!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~</code>).</p>
   *          <p>For best practices of using <code>ReceiveRequestAttemptId</code>, see
   *           <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-receiverequestattemptid-request-parameter.html">Using the ReceiveRequestAttemptId Request Parameter</a>
   *           in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  ReceiveRequestAttemptId?: string;
}

export namespace ReceiveMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReceiveMessageRequest): any => ({
    ...obj,
  });
}

export type MessageSystemAttributeName =
  | "AWSTraceHeader"
  | "ApproximateFirstReceiveTimestamp"
  | "ApproximateReceiveCount"
  | "MessageDeduplicationId"
  | "MessageGroupId"
  | "SenderId"
  | "SentTimestamp"
  | "SequenceNumber";

/**
 * <p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code>
 *                <a>SendMessage</a>.</code>
 *          </p>
 *          <p>
 *             <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KB or 262,144 bytes).</p>
 */
export interface MessageAttributeValue {
  /**
   * <p>Strings are Unicode with UTF-8 binary encoding. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable Characters</a>.</p>
   */
  StringValue?: string;

  /**
   * <p>Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.</p>
   */
  BinaryValue?: Uint8Array;

  /**
   * <p>Not implemented. Reserved for future use.</p>
   */
  StringListValues?: string[];

  /**
   * <p>Not implemented. Reserved for future use.</p>
   */
  BinaryListValues?: Uint8Array[];

  /**
   * <p>Amazon SQS supports the following logical data types: <code>String</code>, <code>Number</code>, and <code>Binary</code>. For the <code>Number</code> data type, you must use <code>StringValue</code>.</p>
   *          <p>You can also append custom labels. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  DataType: string | undefined;
}

export namespace MessageAttributeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessageAttributeValue): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon SQS message.</p>
 */
export interface Message {
  /**
   * <p>A unique identifier for the message. A <code>MessageId</code>is considered unique across all accounts for an extended period of time.</p>
   */
  MessageId?: string;

  /**
   * <p>An identifier associated with the act of receiving the message. A new receipt handle is returned every time you receive a message. When deleting a message, you provide the last received receipt handle to delete the message.</p>
   */
  ReceiptHandle?: string;

  /**
   * <p>An MD5 digest of the non-URL-encoded message body string.</p>
   */
  MD5OfBody?: string;

  /**
   * <p>The message's contents (not URL-encoded).</p>
   */
  Body?: string;

  /**
   * <p>A map of the attributes requested in <code>
   *                <a>ReceiveMessage</a>
   *             </code> to their respective values.
   *           Supported attributes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ApproximateReceiveCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApproximateFirstReceiveTimestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MessageDeduplicationId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MessageGroupId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SenderId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SentTimestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SequenceNumber</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>ApproximateFirstReceiveTimestamp</code> and <code>SentTimestamp</code> are each returned as an integer representing the
   *         <a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
   */
  MD5OfMessageAttributes?: string;

  /**
   * <p>Each message attribute consists of a <code>Name</code>, <code>Type</code>,
   * and <code>Value</code>. For more information, see
   * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS
   * message attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  MessageAttributes?: { [key: string]: MessageAttributeValue };
}

export namespace Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

/**
 * <p>A list of received messages.</p>
 */
export interface ReceiveMessageResult {
  /**
   * <p>A list of messages.</p>
   */
  Messages?: Message[];
}

export namespace ReceiveMessageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReceiveMessageResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RemovePermissionRequest {
  /**
   * <p>The URL of the Amazon SQS queue from which permissions are removed.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>The identification of the permission to remove. This is the label added using the <code>
   *                <a>AddPermission</a>
   *             </code> action.</p>
   */
  Label: string | undefined;
}

export namespace RemovePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemovePermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The message contains characters outside the allowed set.</p>
 */
export interface InvalidMessageContents extends __SmithyException, $MetadataBearer {
  name: "InvalidMessageContents";
  $fault: "client";
}

export namespace InvalidMessageContents {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidMessageContents): any => ({
    ...obj,
  });
}

export type MessageSystemAttributeNameForSends = "AWSTraceHeader";

/**
 * <p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code>
 *                <a>SendMessage</a>.</code>
 *          </p>
 *          <p>
 *             <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>
 */
export interface MessageSystemAttributeValue {
  /**
   * <p>Strings are Unicode with UTF-8 binary encoding. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable Characters</a>.</p>
   */
  StringValue?: string;

  /**
   * <p>Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.</p>
   */
  BinaryValue?: Uint8Array;

  /**
   * <p>Not implemented. Reserved for future use.</p>
   */
  StringListValues?: string[];

  /**
   * <p>Not implemented. Reserved for future use.</p>
   */
  BinaryListValues?: Uint8Array[];

  /**
   * <p>Amazon SQS supports the following logical data types: <code>String</code>, <code>Number</code>, and <code>Binary</code>. For the <code>Number</code> data type, you must use <code>StringValue</code>.</p>
   *          <p>You can also append custom labels. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  DataType: string | undefined;
}

export namespace MessageSystemAttributeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessageSystemAttributeValue): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SendMessageRequest {
  /**
   * <p>The URL of the Amazon SQS queue to which a message is sent.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>The message to send. The minimum size is one character. The maximum size is 256 KB.</p>
   *          <important>
   *            <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
   *            <p>
   *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
   *             </p>
   * 	           <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
   *          </important>
   */
  MessageBody: string | undefined;

  /**
   * <p>
   *           The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished.
   *           If you don't specify a value, the default value for the queue applies.
   *     </p>
   *          <note>
   *             <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p>
   *          </note>
   */
  DelaySeconds?: number;

  /**
   * <p>Each message attribute consists of a <code>Name</code>, <code>Type</code>,
   * and <code>Value</code>. For more information, see
   * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS
   * message attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  MessageAttributes?: { [key: string]: MessageAttributeValue };

  /**
   * <p>The message system attribute to send. Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p>
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>.
   *                     Its type must be <code>String</code> and its value must be a correctly formatted
   *                     X-Ray trace header string.</p>
   *               </li>
   *                <li>
   *                   <p>The size of a message system attribute doesn't count towards the total size of a message.</p>
   *               </li>
   *             </ul>
   *          </important>
   */
  MessageSystemAttributes?: { [key: string]: MessageSystemAttributeValue };

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any messages sent with the same <code>MessageDeduplicationId</code>
   *           are accepted successfully but aren't delivered during the 5-minute deduplication interval. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">
   *           Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   *          <ul>
   *             <li>
   *               <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p>
   *               <ul>
   *                   <li>
   *                       <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p>
   *                   </li>
   *                   <li>
   *                       <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue,
   *                           Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).
   *                       </p>
   *                   </li>
   *                   <li>
   *                       <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set,
   *                           the action fails with an error.</p>
   *                   </li>
   *                   <li>
   *                       <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *               <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates
   *                   and only one copy of the message is delivered.</p>
   *             </li>
   *             <li>
   *               <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same
   *                   as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered.
   *               </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>MessageDeduplicationId</code> is available to the consumer of the
   *                 message (this can be useful for troubleshooting delivery issues).</p>
   *             <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same
   *               <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p>
   *             <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p>
   *          </note>
   *          <p>The maximum length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and
   *           punctuation (<code>!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~</code>).</p>
   *          <p>For best practices of using <code>MessageDeduplicationId</code>, see
   *           <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the MessageDeduplicationId Property</a>
   *           in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  MessageDeduplicationId?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The tag that specifies that a message belongs to a specific message group. Messages
   *             that belong to the same message group are processed in a FIFO manner (however,
   *             messages in different message groups might be processed out of order). To interleave
   *             multiple ordered streams within a single queue, use <code>MessageGroupId</code> values
   *             (for example, session data for multiple users). In this scenario, multiple consumers can
   *             process the queue, but the session data of each user is processed in a FIFO
   *             fashion.</p>
   *          <ul>
   *             <li>
   *                <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't
   *               specify a <code>MessageGroupId</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)</code>.</p>
   *          <p>For best practices of using <code>MessageGroupId</code>, see
   *           <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html">Using the MessageGroupId Property</a>
   *           in the <i>Amazon SQS Developer Guide</i>.</p>
   *          <important>
   *             <p>
   *                <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p>
   *          </important>
   */
  MessageGroupId?: string;
}

export namespace SendMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.</p>
 */
export interface SendMessageResult {
  /**
   * <p>An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
   */
  MD5OfMessageBody?: string;

  /**
   * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
   */
  MD5OfMessageAttributes?: string;

  /**
   * <p>An MD5 digest of the non-URL-encoded message system attribute string. You can use this
   * attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest.</p>
   */
  MD5OfMessageSystemAttributes?: string;

  /**
   * <p>An attribute containing the <code>MessageId</code> of the message sent to the queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a>
   *             in the <i>Amazon SQS Developer Guide</i>.
   *     </p>
   */
  MessageId?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The large, non-consecutive number that Amazon SQS assigns to each message.</p>
   *          <p>The length of <code>SequenceNumber</code> is 128 bits. <code>SequenceNumber</code> continues to increase for a particular <code>MessageGroupId</code>.</p>
   */
  SequenceNumber?: string;
}

export namespace SendMessageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Error code 400. Unsupported operation.</p>
 */
export interface UnsupportedOperation extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperation";
  $fault: "client";
}

export namespace UnsupportedOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperation): any => ({
    ...obj,
  });
}

/**
 * <p>The length of all the messages put together is more than the limit.</p>
 */
export interface BatchRequestTooLong extends __SmithyException, $MetadataBearer {
  name: "BatchRequestTooLong";
  $fault: "client";
}

export namespace BatchRequestTooLong {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchRequestTooLong): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of a single Amazon SQS message along with an <code>Id</code>.</p>
 */
export interface SendMessageBatchRequestEntry {
  /**
   * <p>An identifier for a message in this batch used to communicate the result.</p>
   *          <note>
   *             <p>The <code>Id</code>s of a batch request need to be unique within a request.</p>
   *             <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).</p>
   *          </note>
   */
  Id: string | undefined;

  /**
   * <p>The body of the message.</p>
   */
  MessageBody: string | undefined;

  /**
   * <p>The length of time, in seconds, for which a specific message is delayed. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished.
   *           If you don't specify a value, the default value for the queue is applied.
   *       </p>
   *          <note>
   *             <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p>
   *          </note>
   */
  DelaySeconds?: number;

  /**
   * <p>Each message attribute consists of a <code>Name</code>, <code>Type</code>,
   * and <code>Value</code>. For more information, see
   * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS
   * message attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  MessageAttributes?: { [key: string]: MessageAttributeValue };

  /**
   * <p>The message system attribute to send Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p>
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>.
   *                     Its type must be <code>String</code> and its value must be a correctly formatted
   *                     X-Ray trace header string.</p>
   *               </li>
   *                <li>
   *                   <p>The size of a message system attribute doesn't count towards the total size of a message.</p>
   *               </li>
   *             </ul>
   *          </important>
   */
  MessageSystemAttributes?: { [key: string]: MessageSystemAttributeValue };

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular
   *           <code>MessageDeduplicationId</code> is sent successfully, subsequent messages with the same <code>MessageDeduplicationId</code> are
   *           accepted successfully but aren't delivered. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">
   *           Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   *          <ul>
   *             <li>
   *               <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p>
   *               <ul>
   *                   <li>
   *                       <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p>
   *                   </li>
   *                   <li>
   *                       <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue,
   *                           Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).
   *                       </p>
   *                   </li>
   *                   <li>
   *                       <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set,
   *                           the action fails with an error.</p>
   *                   </li>
   *                   <li>
   *                       <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *               <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates
   *                   and only one copy of the message is delivered.</p>
   *             </li>
   *             <li>
   *               <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same
   *                   as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered.
   *               </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>MessageDeduplicationId</code> is available to the consumer of the
   *                 message (this can be useful for troubleshooting delivery issues).</p>
   *             <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same
   *               <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p>
   *             <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p>
   *          </note>
   *          <p>The length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and
   *           punctuation (<code>!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~</code>).</p>
   *          <p>For best practices of using <code>MessageDeduplicationId</code>, see
   *           <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the MessageDeduplicationId Property</a>
   *           in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  MessageDeduplicationId?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The tag that specifies that a message belongs to a specific message group. Messages
   *             that belong to the same message group are processed in a FIFO manner (however,
   *             messages in different message groups might be processed out of order). To interleave
   *             multiple ordered streams within a single queue, use <code>MessageGroupId</code> values
   *             (for example, session data for multiple users). In this scenario, multiple consumers can
   *             process the queue, but the session data of each user is processed in a FIFO
   *             fashion.</p>
   *          <ul>
   *             <li>
   *                <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't
   *               specify a <code>MessageGroupId</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)</code>.</p>
   *          <p>For best practices of using <code>MessageGroupId</code>, see
   *           <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html">Using the MessageGroupId Property</a>
   *           in the <i>Amazon SQS Developer Guide</i>.</p>
   *          <important>
   *             <p>
   *                <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p>
   *          </important>
   */
  MessageGroupId?: string;
}

export namespace SendMessageBatchRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessageBatchRequestEntry): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SendMessageBatchRequest {
  /**
   * <p>The URL of the Amazon SQS queue to which batched messages are sent.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>A list of <code>
   *                <a>SendMessageBatchRequestEntry</a>
   *             </code> items.</p>
   */
  Entries: SendMessageBatchRequestEntry[] | undefined;
}

export namespace SendMessageBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessageBatchRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code>
 *                <a>SendMessageBatch</a>.</code>
 *          </p>
 */
export interface SendMessageBatchResultEntry {
  /**
   * <p>An identifier for the message in this batch.</p>
   */
  Id: string | undefined;

  /**
   * <p>An identifier for the message.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
   */
  MD5OfMessageBody: string | undefined;

  /**
   * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
   */
  MD5OfMessageAttributes?: string;

  /**
   * <p>An MD5 digest of the non-URL-encoded message system attribute string. You can use this
   * attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
   */
  MD5OfMessageSystemAttributes?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The large, non-consecutive number that Amazon SQS assigns to each message.</p>
   *          <p>The length of <code>SequenceNumber</code> is 128 bits. As <code>SequenceNumber</code> continues to increase for a particular <code>MessageGroupId</code>.</p>
   */
  SequenceNumber?: string;
}

export namespace SendMessageBatchResultEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessageBatchResultEntry): any => ({
    ...obj,
  });
}

/**
 * <p>For each message in the batch, the response contains a <code>
 *                <a>SendMessageBatchResultEntry</a>
 *             </code> tag if the message succeeds or a <code>
 *                <a>BatchResultErrorEntry</a>
 *             </code> tag if the message fails.</p>
 */
export interface SendMessageBatchResult {
  /**
   * <p>A list of <code>
   *                <a>SendMessageBatchResultEntry</a>
   *             </code> items.</p>
   */
  Successful: SendMessageBatchResultEntry[] | undefined;

  /**
   * <p>A list of <code>
   *                <a>BatchResultErrorEntry</a>
   *             </code> items with error details about each message that can't be enqueued.</p>
   */
  Failed: BatchResultErrorEntry[] | undefined;
}

export namespace SendMessageBatchResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessageBatchResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SetQueueAttributesRequest {
  /**
   * <p>The URL of the Amazon SQS queue whose attributes are set.</p>
   *          <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>A map of attributes to set.</p>
   *          <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetQueueAttributes</code> action uses:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0.
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) up to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB).
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer representing seconds, from 60 (1 minute) to 1,209,600 (14 days). Default: 345,600 (4 days).
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>Policy</code> – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a>
   *                   in the <i>Identity and Access Management User Guide</i>.
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code>
   *                      <a>ReceiveMessage</a>
   *                   </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0.
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout,
   *                   see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality
   *             of the source queue as a JSON object. The parameters are as follows:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to
   *                   which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being
   *                  moved to the dead-letter queue. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code>
   *                  for a queue, Amazon SQS moves the message to the dead-letter-queue.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter
   *             queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p>
   *                <ul>
   *                   <li>
   *                     <p>
   *                         <code>redrivePermission</code> – The permission type that defines which source queues can
   *                     specify the current queue as the dead-letter queue. Valid values are:</p>
   *                     <ul>
   *                         <li>
   *                           <p>
   *                               <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can
   *                           specify this queue as the dead-letter queue.</p>
   *                        </li>
   *                         <li>
   *                           <p>
   *                               <code>denyAll</code> – No source queues can specify this queue as the dead-letter
   *                           queue.</p>
   *                        </li>
   *                         <li>
   *                            <p>
   *                               <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify
   *                          this queue as the dead-letter queue.</p>
   *                        </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                     <p>
   *                         <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify
   *                     this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the
   *                     <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs.
   *                     To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter
   *                     to <code>allowAll</code>.</p>
   *                   </li>
   *                </ul>
   *               </li>
   *          </ul>
   *               <note>
   *             <p>The dead-letter queue of a
   *               FIFO queue must also be a FIFO queue. Similarly, the dead-letter
   *               queue of a standard queue must also be a standard queue.</p>
   *          </note>
   *
   *
   *          <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>.
   *                   While the alias of the AWS-managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i>
   *                   </code>.
   *                   For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>.
   *               </p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt
   *                   or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security
   *                   but results in more calls to KMS which might incur charges after Free Tier. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>.
   *               </p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>ContentBasedDeduplication</code> – Enables content-based deduplication. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the
   *                   <i>Amazon SQS Developer Guide</i>. Note the following:
   *               </p>
   *               <ul>
   *                   <li>
   *                       <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p>
   *                       <ul>
   *                         <li>
   *                               <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p>
   *                           </li>
   *                         <li>
   *                               <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue,
   *                                   Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).
   *                               </p>
   *                           </li>
   *                         <li>
   *                               <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set,
   *                                   the action fails with an error.</p>
   *                           </li>
   *                         <li>
   *                               <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p>
   *                           </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                       <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates
   *                           and only one copy of the message is delivered.</p>
   *                   </li>
   *                   <li>
   *                       <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same
   *                           as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered.
   *                       </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   *
   *          <p>The following attributes apply only to
   * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput
   * for FIFO queues</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the
   *       message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput
   *       quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>.
   *       The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To enable high throughput for FIFO queues, do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you set these attributes to anything other than the values shown for enabling high
   *   throughput, normal throughput is in effect and deduplication occurs as specified.</p>
   *          <p>For information on throughput quotas,
   *   see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a>
   *   in the <i>Amazon SQS Developer Guide</i>.</p>
   */
  Attributes: { [key: string]: string } | undefined;
}

export namespace SetQueueAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetQueueAttributesRequest): any => ({
    ...obj,
  });
}

export interface TagQueueRequest {
  /**
   * <p>The URL of the queue.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>The list of tags to be added to the specified queue.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagQueueRequest): any => ({
    ...obj,
  });
}

export interface UntagQueueRequest {
  /**
   * <p>The URL of the queue.</p>
   */
  QueueUrl: string | undefined;

  /**
   * <p>The list of tags to be removed from the specified queue.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagQueueRequest): any => ({
    ...obj,
  });
}
