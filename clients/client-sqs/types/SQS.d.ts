import { SQSClient } from "./SQSClient";
import { AddPermissionCommandInput, AddPermissionCommandOutput } from "./commands/AddPermissionCommand";
import { ChangeMessageVisibilityBatchCommandInput, ChangeMessageVisibilityBatchCommandOutput } from "./commands/ChangeMessageVisibilityBatchCommand";
import { ChangeMessageVisibilityCommandInput, ChangeMessageVisibilityCommandOutput } from "./commands/ChangeMessageVisibilityCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import { DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput } from "./commands/DeleteMessageBatchCommand";
import { DeleteMessageCommandInput, DeleteMessageCommandOutput } from "./commands/DeleteMessageCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import { GetQueueAttributesCommandInput, GetQueueAttributesCommandOutput } from "./commands/GetQueueAttributesCommand";
import { GetQueueUrlCommandInput, GetQueueUrlCommandOutput } from "./commands/GetQueueUrlCommand";
import { ListDeadLetterSourceQueuesCommandInput, ListDeadLetterSourceQueuesCommandOutput } from "./commands/ListDeadLetterSourceQueuesCommand";
import { ListQueueTagsCommandInput, ListQueueTagsCommandOutput } from "./commands/ListQueueTagsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import { PurgeQueueCommandInput, PurgeQueueCommandOutput } from "./commands/PurgeQueueCommand";
import { ReceiveMessageCommandInput, ReceiveMessageCommandOutput } from "./commands/ReceiveMessageCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { SendMessageBatchCommandInput, SendMessageBatchCommandOutput } from "./commands/SendMessageBatchCommand";
import { SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import { SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput } from "./commands/SetQueueAttributesCommand";
import { TagQueueCommandInput, TagQueueCommandOutput } from "./commands/TagQueueCommand";
import { UntagQueueCommandInput, UntagQueueCommandOutput } from "./commands/UntagQueueCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Welcome to the <i>Amazon Simple Queue Service API Reference</i>.</p>
 *         <p>Amazon Simple Queue Service (Amazon SQS) is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components.</p>
 *         <p>You can use <a href="http://aws.amazon.com/tools/#sdk">AWS SDKs</a> to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:</p>
 *         <ul>
 *             <li>
 *                 <p>Cryptographically sign your service requests</p>
 *             </li>
 *             <li>
 *                 <p>Retry requests</p>
 *             </li>
 *             <li>
 *                 <p>Handle error responses</p>
 *             </li>
 *          </ul>
 *
 *         <p>
 *             <b>Additional Information</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <i>Amazon Simple Queue Service Developer Guide</i>
 *                </p>
 *                 <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html">Making API Requests</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html">Amazon SQS Message Attributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Amazon SQS Dead-Letter Queues</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="http://docs.aws.amazon.com/cli/latest/reference/sqs/index.html">Amazon SQS in the <i>AWS CLI Command Reference</i>
 *                   </a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <i>Amazon Web Services General Reference</i>
 *                </p>
 *                 <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and Endpoints</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export declare class SQS extends SQSClient {
    /**
     * <p>Adds a permission to a queue for a specific
     *       <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>.
     *       This allows sharing access to the queue.</p>
     *          <p>When you create a queue, you have full control access rights for the queue.
     *       Only you, the owner of the queue, can grant or deny permissions to the queue.
     *       For more information about these permissions, see
     *       <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow
     *       Developers to Write Messages to a Shared Queue</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                  <p>
     *                      <code>AddPermission</code> generates a policy for you. You can use
     *                      <code>
     *                         <a>SetQueueAttributes</a>
     *                      </code> to
     *                         upload your policy. For more information, see
     *                             <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in
     *                         the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *                </li>
     *                <li>
     *                  <p>An Amazon SQS policy can have a maximum of 7 actions.</p>
     *                </li>
     *                <li>
     *                     <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p>
     *                 </li>
     *             </ul>
     *          </note>
     *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
     *          <p>
     *             <code>&Attribute.1=first</code>
     *          </p>
     *          <p>
     *             <code>&Attribute.2=second</code>
     *          </p>
     *          <note>
     *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          </note>
     */
    addPermission(args: AddPermissionCommandInput, options?: __HttpHandlerOptions): Promise<AddPermissionCommandOutput>;
    addPermission(args: AddPermissionCommandInput, cb: (err: any, data?: AddPermissionCommandOutput) => void): void;
    addPermission(args: AddPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddPermissionCommandOutput) => void): void;
    /**
     * <p>Changes the visibility timeout of a specified message in a queue to a new value. The
     *             default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The
     *             maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          <p>For example, you have a message with a visibility timeout of 5 minutes. After 3
     *             minutes, you call <code>ChangeMessageVisibility</code> with a timeout of 10 minutes. You
     *             can continue to call <code>ChangeMessageVisibility</code> to extend the visibility
     *             timeout to the maximum allowed time. If you try to extend the visibility timeout beyond
     *             the maximum, your request is rejected.</p>
     *         <p>An Amazon SQS message has three basic states:</p>
     *          <ol>
     *             <li>
     *                <p>Sent to a queue by a producer.</p>
     *             </li>
     *             <li>
     *                <p>Received from the queue by a consumer.</p>
     *             </li>
     *             <li>
     *                <p>Deleted from the queue.</p>
     *             </li>
     *          </ol>
     *          <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages.
     *     A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of inflight messages.</p>
     *          <p>Limits that apply to inflight messages are unrelated to the <i>unlimited</i> number of stored messages.</p>
     *          <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue).
     *     If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message.
     *     To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages.
     *     To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-sqs">file a support request</a>.</p>
     *          <p>For FIFO queues, there can be a maximum of 20,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p>
     *
     *          <important>
     *             <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p>
     *             <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout
     *               for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p>
     *          </important>
     */
    changeMessageVisibility(args: ChangeMessageVisibilityCommandInput, options?: __HttpHandlerOptions): Promise<ChangeMessageVisibilityCommandOutput>;
    changeMessageVisibility(args: ChangeMessageVisibilityCommandInput, cb: (err: any, data?: ChangeMessageVisibilityCommandOutput) => void): void;
    changeMessageVisibility(args: ChangeMessageVisibilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ChangeMessageVisibilityCommandOutput) => void): void;
    /**
     * <p>Changes the visibility timeout of multiple messages. This is a batch version of <code>
     *                <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response.
     *           You can send up to 10 <code>
     *                <a>ChangeMessageVisibility</a>
     *             </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p>
     *          <important>
     *             <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
     *          </important>
     *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
     *          <p>
     *             <code>&Attribute.1=first</code>
     *          </p>
     *          <p>
     *             <code>&Attribute.2=second</code>
     *          </p>
     */
    changeMessageVisibilityBatch(args: ChangeMessageVisibilityBatchCommandInput, options?: __HttpHandlerOptions): Promise<ChangeMessageVisibilityBatchCommandOutput>;
    changeMessageVisibilityBatch(args: ChangeMessageVisibilityBatchCommandInput, cb: (err: any, data?: ChangeMessageVisibilityBatchCommandOutput) => void): void;
    changeMessageVisibilityBatch(args: ChangeMessageVisibilityBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ChangeMessageVisibilityBatchCommandOutput) => void): void;
    /**
     * <p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request.
     *           Keep the following caveats in mind:</p>
     *          <ul>
     *             <li>
     *               <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p>
     *               <note>
     *                   <p>You can't change the queue type after you create it and you can't convert
     *                         an existing standard queue into a FIFO queue. You must either create a new
     *                         FIFO queue for your application or delete your existing standard queue and
     *                         recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the
     *                             <i>Amazon Simple Queue Service Developer Guide</i>. </p>
     *               </note>
     *             </li>
     *             <li>
     *               <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p>
     *             </li>
     *             <li>
     *               <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p>
     *             </li>
     *          </ul>
     *
     *          <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p>
     *          <p>To get the queue URL, use the <code>
     *                <a>GetQueueUrl</a>
     *             </code> action. <code>
     *                <a>GetQueueUrl</a>
     *             </code> requires only the <code>QueueName</code> parameter.
     *           be aware of existing queue names:</p>
     *          <ul>
     *             <li>
     *                <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p>
     *             </li>
     *             <li>
     *                <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p>
     *             </li>
     *          </ul>
     *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
     *          <p>
     *             <code>&Attribute.1=first</code>
     *          </p>
     *          <p>
     *             <code>&Attribute.2=second</code>
     *          </p>
     *          <note>
     *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          </note>
     */
    createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
    createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
    createQueue(args: CreateQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
    /**
     * <p>Deletes the specified message from the specified queue. To select the message to
     *             delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the
     *                 <code>MessageId</code> which you receive when you send the message). Amazon SQS can
     *             delete a message from a queue even if a visibility timeout setting causes the message to
     *             be locked by another consumer. Amazon SQS automatically deletes messages left in a queue
     *             longer than the retention period configured for the queue. </p>
     *          <note>
     *             <p>The <code>ReceiptHandle</code> is associated with a <i>specific
     *                     instance</i> of receiving a message. If you receive a message more than
     *                 once, the <code>ReceiptHandle</code> is different each time you receive a message.
     *                 When you use the <code>DeleteMessage</code> action, you must provide the most
     *                 recently received <code>ReceiptHandle</code> for the message (otherwise, the request
     *                 succeeds, but the message might not be deleted).</p>
     *             <p>For standard queues, it is possible to receive a message even after you
     *                 delete it. This might happen on rare occasions if one of the servers which stores a
     *                 copy of the message is unavailable when you send the request to delete the message.
     *                 The copy remains on the server and might be returned to you during a subsequent
     *                 receive request. You should ensure that your application is idempotent, so that
     *                 receiving a message more than once does not cause issues.</p>
     *          </note>
     */
    deleteMessage(args: DeleteMessageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMessageCommandOutput>;
    deleteMessage(args: DeleteMessageCommandInput, cb: (err: any, data?: DeleteMessageCommandOutput) => void): void;
    deleteMessage(args: DeleteMessageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMessageCommandOutput) => void): void;
    /**
     * <p>Deletes up to ten messages from the specified queue. This is a batch version of <code>
     *                <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p>
     *          <important>
     *             <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
     *          </important>
     *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
     *          <p>
     *             <code>&Attribute.1=first</code>
     *          </p>
     *          <p>
     *             <code>&Attribute.2=second</code>
     *          </p>
     */
    deleteMessageBatch(args: DeleteMessageBatchCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMessageBatchCommandOutput>;
    deleteMessageBatch(args: DeleteMessageBatchCommandInput, cb: (err: any, data?: DeleteMessageBatchCommandOutput) => void): void;
    deleteMessageBatch(args: DeleteMessageBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMessageBatchCommandOutput) => void): void;
    /**
     * <p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents. If the specified queue doesn't exist, Amazon SQS returns a successful response.</p>
     *          <important>
     *             <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available.
     *       </p>
     *          </important>
     *          <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a
     *           <code>
     *                <a>SendMessage</a>
     *             </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p>
     *          <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p>
     *          <note>
     *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          </note>
     */
    deleteQueue(args: DeleteQueueCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueueCommandOutput>;
    deleteQueue(args: DeleteQueueCommandInput, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
    deleteQueue(args: DeleteQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
    /**
     * <p>Gets attributes for the specified queue.</p>
     *          <note>
     *             <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p>
     *          </note>
     *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
     *          <p>
     *             <code>&Attribute.1=first</code>
     *          </p>
     *          <p>
     *             <code>&Attribute.2=second</code>
     *          </p>
     */
    getQueueAttributes(args: GetQueueAttributesCommandInput, options?: __HttpHandlerOptions): Promise<GetQueueAttributesCommandOutput>;
    getQueueAttributes(args: GetQueueAttributesCommandInput, cb: (err: any, data?: GetQueueAttributesCommandOutput) => void): void;
    getQueueAttributes(args: GetQueueAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetQueueAttributesCommandOutput) => void): void;
    /**
     * <p>Returns the URL of an existing Amazon SQS queue.</p>
     *          <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue.
     *           For more information about shared queue access, see <code>
     *                <a>AddPermission</a>
     *             </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.
     *     </p>
     */
    getQueueUrl(args: GetQueueUrlCommandInput, options?: __HttpHandlerOptions): Promise<GetQueueUrlCommandOutput>;
    getQueueUrl(args: GetQueueUrlCommandInput, cb: (err: any, data?: GetQueueUrlCommandOutput) => void): void;
    getQueueUrl(args: GetQueueUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetQueueUrlCommandOutput) => void): void;
    /**
     * <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p>
     *
     *
     *          <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a>
     *           in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     */
    listDeadLetterSourceQueues(args: ListDeadLetterSourceQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListDeadLetterSourceQueuesCommandOutput>;
    listDeadLetterSourceQueues(args: ListDeadLetterSourceQueuesCommandInput, cb: (err: any, data?: ListDeadLetterSourceQueuesCommandOutput) => void): void;
    listDeadLetterSourceQueues(args: ListDeadLetterSourceQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeadLetterSourceQueuesCommandOutput) => void): void;
    /**
     * <p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *         <note>
     *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *         </note>
     */
    listQueueTags(args: ListQueueTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListQueueTagsCommandOutput>;
    listQueueTags(args: ListQueueTagsCommandInput, cb: (err: any, data?: ListQueueTagsCommandOutput) => void): void;
    listQueueTags(args: ListQueueTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQueueTagsCommandOutput) => void): void;
    /**
     * <p>Returns a list of your queues. The maximum number of queues that can be returned is 1,000. If you specify a value for the optional
     *           <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p>
     *          <note>
     *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          </note>
     */
    listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
    listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
    listQueues(args: ListQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
    /**
     * <p>Deletes the messages in a queue specified by the <code>QueueURL</code>
     *             parameter.</p>
     *
     *          <important>
     *             <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages
     *                 deleted from a queue.</p>
     *             <p>The message deletion process takes up to 60 seconds. We recommend waiting for
     *                 60 seconds regardless of your queue's size. </p>
     *          </important>
     *         <p>Messages sent to the queue <i>before</i> you call
     *                 <code>PurgeQueue</code> might be received but are deleted within the next
     *             minute.</p>
     *         <p>Messages sent to the queue <i>after</i> you call
     *                 <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
     */
    purgeQueue(args: PurgeQueueCommandInput, options?: __HttpHandlerOptions): Promise<PurgeQueueCommandOutput>;
    purgeQueue(args: PurgeQueueCommandInput, cb: (err: any, data?: PurgeQueueCommandOutput) => void): void;
    purgeQueue(args: PurgeQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurgeQueueCommandOutput) => void): void;
    /**
     * <p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support.
     *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.
     *     </p>
     *          <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned.
     *           If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small,
     *           you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request.
     *     </p>
     *          <p>For each message returned, the response includes the following:</p>
     *          <ul>
     *             <li>
     *                <p>The message body.</p>
     *             </li>
     *             <li>
     *                <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
     *             </li>
     *             <li>
     *                <p>The <code>MessageId</code> you received when you sent the message to the queue.</p>
     *             </li>
     *             <li>
     *                <p>The receipt handle.</p>
     *             </li>
     *             <li>
     *                <p>The message attributes.</p>
     *             </li>
     *             <li>
     *                <p>An MD5 digest of the message attributes.</p>
     *             </li>
     *          </ul>
     *          <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue
     *           and Message Identifiers</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue
     *           is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *          <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p>
     *          <note>
     *             <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
     *          </note>
     */
    receiveMessage(args: ReceiveMessageCommandInput, options?: __HttpHandlerOptions): Promise<ReceiveMessageCommandOutput>;
    receiveMessage(args: ReceiveMessageCommandInput, cb: (err: any, data?: ReceiveMessageCommandOutput) => void): void;
    receiveMessage(args: ReceiveMessageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReceiveMessageCommandOutput) => void): void;
    /**
     * <p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>Only the owner of a queue can remove permissions from it.</p>
     *               </li>
     *                <li>
     *                   <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *               </li>
     *                <li>
     *                   <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p>
     *               </li>
     *             </ul>
     *          </note>
     */
    removePermission(args: RemovePermissionCommandInput, options?: __HttpHandlerOptions): Promise<RemovePermissionCommandOutput>;
    removePermission(args: RemovePermissionCommandInput, cb: (err: any, data?: RemovePermissionCommandOutput) => void): void;
    removePermission(args: RemovePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemovePermissionCommandOutput) => void): void;
    /**
     * <p>Delivers a message to the specified queue.</p>
     *          <important>
     *            <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
     *            <p>
     *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
     *             </p>
     * 	           <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
     *          </important>
     */
    sendMessage(args: SendMessageCommandInput, options?: __HttpHandlerOptions): Promise<SendMessageCommandOutput>;
    sendMessage(args: SendMessageCommandInput, cb: (err: any, data?: SendMessageCommandOutput) => void): void;
    sendMessage(args: SendMessageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendMessageCommandOutput) => void): void;
    /**
     * <p>Delivers up to ten messages to the specified queue. This is a batch version of <code>
     *                <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p>
     *          <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
     *          <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes).</p>
     *          <important>
     *            <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
     *            <p>
     *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
     *             </p>
     * 	           <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
     *          </important>
     *          <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p>
     *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
     *          <p>
     *             <code>&Attribute.1=first</code>
     *          </p>
     *          <p>
     *             <code>&Attribute.2=second</code>
     *          </p>
     */
    sendMessageBatch(args: SendMessageBatchCommandInput, options?: __HttpHandlerOptions): Promise<SendMessageBatchCommandOutput>;
    sendMessageBatch(args: SendMessageBatchCommandInput, cb: (err: any, data?: SendMessageBatchCommandOutput) => void): void;
    sendMessageBatch(args: SendMessageBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendMessageBatchCommandOutput) => void): void;
    /**
     * <p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system.
     *       Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
     *               </li>
     *                <li>
     *                   <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *               </li>
     *                <li>
     *                   <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p>
     *               </li>
     *             </ul>
     *          </note>
     */
    setQueueAttributes(args: SetQueueAttributesCommandInput, options?: __HttpHandlerOptions): Promise<SetQueueAttributesCommandOutput>;
    setQueueAttributes(args: SetQueueAttributesCommandInput, cb: (err: any, data?: SetQueueAttributesCommandOutput) => void): void;
    setQueueAttributes(args: SetQueueAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetQueueAttributesCommandOutput) => void): void;
    /**
     * <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
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
     *          <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Limits Related to Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *         <note>
     *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *         </note>
     */
    tagQueue(args: TagQueueCommandInput, options?: __HttpHandlerOptions): Promise<TagQueueCommandOutput>;
    tagQueue(args: TagQueueCommandInput, cb: (err: any, data?: TagQueueCommandOutput) => void): void;
    tagQueue(args: TagQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagQueueCommandOutput) => void): void;
    /**
     * <p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *         <note>
     *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant Cross-Account Permissions to a Role and a User Name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     *         </note>
     */
    untagQueue(args: UntagQueueCommandInput, options?: __HttpHandlerOptions): Promise<UntagQueueCommandOutput>;
    untagQueue(args: UntagQueueCommandInput, cb: (err: any, data?: UntagQueueCommandOutput) => void): void;
    untagQueue(args: UntagQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagQueueCommandOutput) => void): void;
}
