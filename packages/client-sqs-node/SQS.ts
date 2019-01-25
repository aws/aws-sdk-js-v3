import {SQSClient} from './SQSClient';
import {AddPermissionInput} from './types/AddPermissionInput';
import {AddPermissionOutput} from './types/AddPermissionOutput';
import {BatchEntryIdsNotDistinct} from './types/BatchEntryIdsNotDistinct';
import {BatchRequestTooLong} from './types/BatchRequestTooLong';
import {ChangeMessageVisibilityBatchInput} from './types/ChangeMessageVisibilityBatchInput';
import {ChangeMessageVisibilityBatchOutput} from './types/ChangeMessageVisibilityBatchOutput';
import {ChangeMessageVisibilityInput} from './types/ChangeMessageVisibilityInput';
import {ChangeMessageVisibilityOutput} from './types/ChangeMessageVisibilityOutput';
import {CreateQueueInput} from './types/CreateQueueInput';
import {CreateQueueOutput} from './types/CreateQueueOutput';
import {DeleteMessageBatchInput} from './types/DeleteMessageBatchInput';
import {DeleteMessageBatchOutput} from './types/DeleteMessageBatchOutput';
import {DeleteMessageInput} from './types/DeleteMessageInput';
import {DeleteMessageOutput} from './types/DeleteMessageOutput';
import {DeleteQueueInput} from './types/DeleteQueueInput';
import {DeleteQueueOutput} from './types/DeleteQueueOutput';
import {EmptyBatchRequest} from './types/EmptyBatchRequest';
import {GetQueueAttributesInput} from './types/GetQueueAttributesInput';
import {GetQueueAttributesOutput} from './types/GetQueueAttributesOutput';
import {GetQueueUrlInput} from './types/GetQueueUrlInput';
import {GetQueueUrlOutput} from './types/GetQueueUrlOutput';
import {InvalidAttributeName} from './types/InvalidAttributeName';
import {InvalidBatchEntryId} from './types/InvalidBatchEntryId';
import {InvalidIdFormat} from './types/InvalidIdFormat';
import {InvalidMessageContents} from './types/InvalidMessageContents';
import {ListDeadLetterSourceQueuesInput} from './types/ListDeadLetterSourceQueuesInput';
import {ListDeadLetterSourceQueuesOutput} from './types/ListDeadLetterSourceQueuesOutput';
import {ListQueueTagsInput} from './types/ListQueueTagsInput';
import {ListQueueTagsOutput} from './types/ListQueueTagsOutput';
import {ListQueuesInput} from './types/ListQueuesInput';
import {ListQueuesOutput} from './types/ListQueuesOutput';
import {MessageNotInflight} from './types/MessageNotInflight';
import {OverLimit} from './types/OverLimit';
import {PurgeQueueInProgress} from './types/PurgeQueueInProgress';
import {PurgeQueueInput} from './types/PurgeQueueInput';
import {PurgeQueueOutput} from './types/PurgeQueueOutput';
import {QueueDeletedRecently} from './types/QueueDeletedRecently';
import {QueueDoesNotExist} from './types/QueueDoesNotExist';
import {QueueNameExists} from './types/QueueNameExists';
import {ReceiptHandleIsInvalid} from './types/ReceiptHandleIsInvalid';
import {ReceiveMessageInput} from './types/ReceiveMessageInput';
import {ReceiveMessageOutput} from './types/ReceiveMessageOutput';
import {RemovePermissionInput} from './types/RemovePermissionInput';
import {RemovePermissionOutput} from './types/RemovePermissionOutput';
import {SendMessageBatchInput} from './types/SendMessageBatchInput';
import {SendMessageBatchOutput} from './types/SendMessageBatchOutput';
import {SendMessageInput} from './types/SendMessageInput';
import {SendMessageOutput} from './types/SendMessageOutput';
import {SetQueueAttributesInput} from './types/SetQueueAttributesInput';
import {SetQueueAttributesOutput} from './types/SetQueueAttributesOutput';
import {TagQueueInput} from './types/TagQueueInput';
import {TagQueueOutput} from './types/TagQueueOutput';
import {TooManyEntriesInBatchRequest} from './types/TooManyEntriesInBatchRequest';
import {UnsupportedOperation} from './types/UnsupportedOperation';
import {UntagQueueInput} from './types/UntagQueueInput';
import {UntagQueueOutput} from './types/UntagQueueOutput';
import {AddPermissionCommand} from './commands/AddPermissionCommand';
import {ChangeMessageVisibilityBatchCommand} from './commands/ChangeMessageVisibilityBatchCommand';
import {ChangeMessageVisibilityCommand} from './commands/ChangeMessageVisibilityCommand';
import {CreateQueueCommand} from './commands/CreateQueueCommand';
import {DeleteMessageBatchCommand} from './commands/DeleteMessageBatchCommand';
import {DeleteMessageCommand} from './commands/DeleteMessageCommand';
import {DeleteQueueCommand} from './commands/DeleteQueueCommand';
import {GetQueueAttributesCommand} from './commands/GetQueueAttributesCommand';
import {GetQueueUrlCommand} from './commands/GetQueueUrlCommand';
import {ListDeadLetterSourceQueuesCommand} from './commands/ListDeadLetterSourceQueuesCommand';
import {ListQueueTagsCommand} from './commands/ListQueueTagsCommand';
import {ListQueuesCommand} from './commands/ListQueuesCommand';
import {PurgeQueueCommand} from './commands/PurgeQueueCommand';
import {ReceiveMessageCommand} from './commands/ReceiveMessageCommand';
import {RemovePermissionCommand} from './commands/RemovePermissionCommand';
import {SendMessageBatchCommand} from './commands/SendMessageBatchCommand';
import {SendMessageCommand} from './commands/SendMessageCommand';
import {SetQueueAttributesCommand} from './commands/SetQueueAttributesCommand';
import {TagQueueCommand} from './commands/TagQueueCommand';
import {UntagQueueCommand} from './commands/UntagQueueCommand';

export class SQS extends SQSClient {
    /**
     * <p>Adds a permission to a queue for a specific <a href="http://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <note> <p> <code>AddPermission</code> writes an Amazon-SQS-generated policy. If you want to write your own policy, use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information about writing your own policy, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <p>An Amazon SQS policy can have a maximum of 7 actions.</p> </note> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;Attribute.1=first</code> </p> <p> <code>&amp;Attribute.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {OverLimit} <p>The specified action violates a limit. For example, <code>ReceiveMessage</code> returns this error if the maximum number of inflight messages is reached and <code>AddPermission</code> returns this error if the maximum number of permissions for the queue is reached.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public addPermission(args: AddPermissionInput): Promise<AddPermissionOutput>;
    public addPermission(
        args: AddPermissionInput,
        cb: (err: any, data?: AddPermissionOutput) => void
    ): void;
    public addPermission(
        args: AddPermissionInput,
        cb?: (err: any, data?: AddPermissionOutput) => void
    ): Promise<AddPermissionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new AddPermissionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Changes the visibility timeout of a specified message in a queue to a new value. The maximum allowed timeout value is 12 hours. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <p>For example, you have a message with a visibility timeout of 5 minutes. After 3 minutes, you call <code>ChangeMessageVisibility</code> with a timeout of 10 minutes. You can continue to call <code>ChangeMessageVisibility</code> to extend the visibility timeout to a maximum of 12 hours. If you try to extend the visibility timeout beyond 12 hours, your request is rejected.</p> <p>A message is considered to be <i>in flight</i> after it's received from a queue by a consumer, but not yet deleted from the queue.</p> <p>For standard queues, there can be a maximum of 120,000 inflight messages per queue. If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages.</p> <p>For FIFO queues, there can be a maximum of 20,000 inflight messages per queue. If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>
     *
     * This operation may fail with one of the following errors:
     *   - {MessageNotInflight} <p>The specified message isn't in flight.</p>
     *   - {ReceiptHandleIsInvalid} <p>The specified receipt handle isn't valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public changeMessageVisibility(args: ChangeMessageVisibilityInput): Promise<ChangeMessageVisibilityOutput>;
    public changeMessageVisibility(
        args: ChangeMessageVisibilityInput,
        cb: (err: any, data?: ChangeMessageVisibilityOutput) => void
    ): void;
    public changeMessageVisibility(
        args: ChangeMessageVisibilityInput,
        cb?: (err: any, data?: ChangeMessageVisibilityOutput) => void
    ): Promise<ChangeMessageVisibilityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ChangeMessageVisibilityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;Attribute.1=first</code> </p> <p> <code>&amp;Attribute.2=second</code> </p>
     *
     * This operation may fail with one of the following errors:
     *   - {TooManyEntriesInBatchRequest} <p>The batch request contains more entries than permissible.</p>
     *   - {EmptyBatchRequest} <p>The batch request doesn't contain any entries.</p>
     *   - {BatchEntryIdsNotDistinct} <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
     *   - {InvalidBatchEntryId} <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public changeMessageVisibilityBatch(args: ChangeMessageVisibilityBatchInput): Promise<ChangeMessageVisibilityBatchOutput>;
    public changeMessageVisibilityBatch(
        args: ChangeMessageVisibilityBatchInput,
        cb: (err: any, data?: ChangeMessageVisibilityBatchOutput) => void
    ): void;
    public changeMessageVisibilityBatch(
        args: ChangeMessageVisibilityBatchInput,
        cb?: (err: any, data?: ChangeMessageVisibilityBatchOutput) => void
    ): Promise<ChangeMessageVisibilityBatchOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ChangeMessageVisibilityBatchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following caveats in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p> You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon Simple Queue Service Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;Attribute.1=first</code> </p> <p> <code>&amp;Attribute.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {QueueDeletedRecently} <p>You must wait 60 seconds after deleting a queue before you can create another queue with the same name.</p>
     *   - {QueueNameExists} <p>A queue with this name already exists. Amazon SQS returns this error only if the request includes attributes whose values differ from those of the existing queue.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createQueue(args: CreateQueueInput): Promise<CreateQueueOutput>;
    public createQueue(
        args: CreateQueueInput,
        cb: (err: any, data?: CreateQueueOutput) => void
    ): void;
    public createQueue(
        args: CreateQueueInput,
        cb?: (err: any, data?: CreateQueueOutput) => void
    ): Promise<CreateQueueOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateQueueCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message might not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidIdFormat} <p>The specified receipt handle isn't valid for the current version.</p>
     *   - {ReceiptHandleIsInvalid} <p>The specified receipt handle isn't valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteMessage(args: DeleteMessageInput): Promise<DeleteMessageOutput>;
    public deleteMessage(
        args: DeleteMessageInput,
        cb: (err: any, data?: DeleteMessageOutput) => void
    ): void;
    public deleteMessage(
        args: DeleteMessageInput,
        cb?: (err: any, data?: DeleteMessageOutput) => void
    ): Promise<DeleteMessageOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteMessageCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;Attribute.1=first</code> </p> <p> <code>&amp;Attribute.2=second</code> </p>
     *
     * This operation may fail with one of the following errors:
     *   - {TooManyEntriesInBatchRequest} <p>The batch request contains more entries than permissible.</p>
     *   - {EmptyBatchRequest} <p>The batch request doesn't contain any entries.</p>
     *   - {BatchEntryIdsNotDistinct} <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
     *   - {InvalidBatchEntryId} <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteMessageBatch(args: DeleteMessageBatchInput): Promise<DeleteMessageBatchOutput>;
    public deleteMessageBatch(
        args: DeleteMessageBatchInput,
        cb: (err: any, data?: DeleteMessageBatchOutput) => void
    ): void;
    public deleteMessageBatch(
        args: DeleteMessageBatchInput,
        cb?: (err: any, data?: DeleteMessageBatchOutput) => void
    ): Promise<DeleteMessageBatchOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteMessageBatchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents. If the specified queue doesn't exist, Amazon SQS returns a successful response.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteQueue(args: DeleteQueueInput): Promise<DeleteQueueOutput>;
    public deleteQueue(
        args: DeleteQueueInput,
        cb: (err: any, data?: DeleteQueueOutput) => void
    ): void;
    public deleteQueue(
        args: DeleteQueueInput,
        cb?: (err: any, data?: DeleteQueueOutput) => void
    ): Promise<DeleteQueueOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteQueueCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;Attribute.1=first</code> </p> <p> <code>&amp;Attribute.2=second</code> </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidAttributeName} <p>The specified attribute doesn't exist.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getQueueAttributes(args: GetQueueAttributesInput): Promise<GetQueueAttributesOutput>;
    public getQueueAttributes(
        args: GetQueueAttributesInput,
        cb: (err: any, data?: GetQueueAttributesOutput) => void
    ): void;
    public getQueueAttributes(
        args: GetQueueAttributesInput,
        cb?: (err: any, data?: GetQueueAttributesOutput) => void
    ): Promise<GetQueueAttributesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetQueueAttributesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon Simple Queue Service Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {QueueDoesNotExist} <p>The specified queue doesn't exist.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getQueueUrl(args: GetQueueUrlInput): Promise<GetQueueUrlOutput>;
    public getQueueUrl(
        args: GetQueueUrlInput,
        cb: (err: any, data?: GetQueueUrlOutput) => void
    ): void;
    public getQueueUrl(
        args: GetQueueUrlInput,
        cb?: (err: any, data?: GetQueueUrlOutput) => void
    ): Promise<GetQueueUrlOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetQueueUrlCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p>For more information about using dead-letter queues, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {QueueDoesNotExist} <p>The specified queue doesn't exist.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listDeadLetterSourceQueues(args: ListDeadLetterSourceQueuesInput): Promise<ListDeadLetterSourceQueuesOutput>;
    public listDeadLetterSourceQueues(
        args: ListDeadLetterSourceQueuesInput,
        cb: (err: any, data?: ListDeadLetterSourceQueuesOutput) => void
    ): void;
    public listDeadLetterSourceQueues(
        args: ListDeadLetterSourceQueuesInput,
        cb?: (err: any, data?: ListDeadLetterSourceQueuesOutput) => void
    ): Promise<ListDeadLetterSourceQueuesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListDeadLetterSourceQueuesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 5 TPS per AWS account. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Limits Related to Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listQueueTags(args: ListQueueTagsInput): Promise<ListQueueTagsOutput>;
    public listQueueTags(
        args: ListQueueTagsInput,
        cb: (err: any, data?: ListQueueTagsOutput) => void
    ): void;
    public listQueueTags(
        args: ListQueueTagsInput,
        cb?: (err: any, data?: ListQueueTagsOutput) => void
    ): Promise<ListQueueTagsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListQueueTagsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of your queues. The maximum number of queues that can be returned is 1,000. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listQueues(args: ListQueuesInput): Promise<ListQueuesOutput>;
    public listQueues(
        args: ListQueuesInput,
        cb: (err: any, data?: ListQueuesOutput) => void
    ): void;
    public listQueues(
        args: ListQueuesInput,
        cb?: (err: any, data?: ListQueuesOutput) => void
    ): Promise<ListQueuesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListQueuesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes the messages in a queue specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {QueueDoesNotExist} <p>The specified queue doesn't exist.</p>
     *   - {PurgeQueueInProgress} <p>Indicates that the specified queue previously received a <code>PurgeQueue</code> request within the last 60 seconds (the time it can take to delete the messages in the queue).</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public purgeQueue(args: PurgeQueueInput): Promise<PurgeQueueOutput>;
    public purgeQueue(
        args: PurgeQueueInput,
        cb: (err: any, data?: PurgeQueueOutput) => void
    ): void;
    public purgeQueue(
        args: PurgeQueueInput,
        cb?: (err: any, data?: PurgeQueueOutput) => void
    ): Promise<PurgeQueueOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PurgeQueueCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon Simple Queue Service Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {OverLimit} <p>The specified action violates a limit. For example, <code>ReceiveMessage</code> returns this error if the maximum number of inflight messages is reached and <code>AddPermission</code> returns this error if the maximum number of permissions for the queue is reached.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public receiveMessage(args: ReceiveMessageInput): Promise<ReceiveMessageOutput>;
    public receiveMessage(
        args: ReceiveMessageInput,
        cb: (err: any, data?: ReceiveMessageOutput) => void
    ): void;
    public receiveMessage(
        args: ReceiveMessageInput,
        cb?: (err: any, data?: ReceiveMessageOutput) => void
    ): Promise<ReceiveMessageOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ReceiveMessageCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <p>Only the owner of a queue can remove permissions from it.</p> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public removePermission(args: RemovePermissionInput): Promise<RemovePermissionOutput>;
    public removePermission(
        args: RemovePermissionInput,
        cb: (err: any, data?: RemovePermissionOutput) => void
    ): void;
    public removePermission(
        args: RemovePermissionInput,
        cb?: (err: any, data?: RemovePermissionOutput) => void
    ): Promise<RemovePermissionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new RemovePermissionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidMessageContents} <p>The message contains characters outside the allowed set.</p>
     *   - {UnsupportedOperation} <p>Error code 400. Unsupported operation.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public sendMessage(args: SendMessageInput): Promise<SendMessageOutput>;
    public sendMessage(
        args: SendMessageInput,
        cb: (err: any, data?: SendMessageOutput) => void
    ): void;
    public sendMessage(
        args: SendMessageInput,
        cb?: (err: any, data?: SendMessageOutput) => void
    ): Promise<SendMessageOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new SendMessageCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Delivers up to ten messages to the specified queue. This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important> <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;Attribute.1=first</code> </p> <p> <code>&amp;Attribute.2=second</code> </p>
     *
     * This operation may fail with one of the following errors:
     *   - {TooManyEntriesInBatchRequest} <p>The batch request contains more entries than permissible.</p>
     *   - {EmptyBatchRequest} <p>The batch request doesn't contain any entries.</p>
     *   - {BatchEntryIdsNotDistinct} <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
     *   - {BatchRequestTooLong} <p>The length of all the messages put together is more than the limit.</p>
     *   - {InvalidBatchEntryId} <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification.</p>
     *   - {UnsupportedOperation} <p>Error code 400. Unsupported operation.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public sendMessageBatch(args: SendMessageBatchInput): Promise<SendMessageBatchOutput>;
    public sendMessageBatch(
        args: SendMessageBatchInput,
        cb: (err: any, data?: SendMessageBatchOutput) => void
    ): void;
    public sendMessageBatch(
        args: SendMessageBatchInput,
        cb?: (err: any, data?: SendMessageBatchOutput) => void
    ): Promise<SendMessageBatchOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new SendMessageBatchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidAttributeName} <p>The specified attribute doesn't exist.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public setQueueAttributes(args: SetQueueAttributesInput): Promise<SetQueueAttributesOutput>;
    public setQueueAttributes(
        args: SetQueueAttributesInput,
        cb: (err: any, data?: SetQueueAttributesOutput) => void
    ): void;
    public setQueueAttributes(
        args: SetQueueAttributesInput,
        cb?: (err: any, data?: SetQueueAttributesOutput) => void
    ): Promise<SetQueueAttributesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new SetQueueAttributesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 5 TPS per AWS account. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Limits Related to Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public tagQueue(args: TagQueueInput): Promise<TagQueueOutput>;
    public tagQueue(
        args: TagQueueInput,
        cb: (err: any, data?: TagQueueOutput) => void
    ): void;
    public tagQueue(
        args: TagQueueInput,
        cb?: (err: any, data?: TagQueueOutput) => void
    ): Promise<TagQueueOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new TagQueueCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 5 TPS per AWS account. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Limits Related to Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public untagQueue(args: UntagQueueInput): Promise<UntagQueueOutput>;
    public untagQueue(
        args: UntagQueueInput,
        cb: (err: any, data?: UntagQueueOutput) => void
    ): void;
    public untagQueue(
        args: UntagQueueInput,
        cb?: (err: any, data?: UntagQueueOutput) => void
    ): Promise<UntagQueueOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UntagQueueCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
