// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
} from "./commands/AddPermissionCommand";
import {
  CancelMessageMoveTaskCommand,
  CancelMessageMoveTaskCommandInput,
  CancelMessageMoveTaskCommandOutput,
} from "./commands/CancelMessageMoveTaskCommand";
import {
  ChangeMessageVisibilityBatchCommand,
  ChangeMessageVisibilityBatchCommandInput,
  ChangeMessageVisibilityBatchCommandOutput,
} from "./commands/ChangeMessageVisibilityBatchCommand";
import {
  ChangeMessageVisibilityCommand,
  ChangeMessageVisibilityCommandInput,
  ChangeMessageVisibilityCommandOutput,
} from "./commands/ChangeMessageVisibilityCommand";
import { CreateQueueCommand, CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import {
  DeleteMessageBatchCommand,
  DeleteMessageBatchCommandInput,
  DeleteMessageBatchCommandOutput,
} from "./commands/DeleteMessageBatchCommand";
import {
  DeleteMessageCommand,
  DeleteMessageCommandInput,
  DeleteMessageCommandOutput,
} from "./commands/DeleteMessageCommand";
import { DeleteQueueCommand, DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import {
  GetQueueAttributesCommand,
  GetQueueAttributesCommandInput,
  GetQueueAttributesCommandOutput,
} from "./commands/GetQueueAttributesCommand";
import { GetQueueUrlCommand, GetQueueUrlCommandInput, GetQueueUrlCommandOutput } from "./commands/GetQueueUrlCommand";
import {
  ListDeadLetterSourceQueuesCommand,
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput,
} from "./commands/ListDeadLetterSourceQueuesCommand";
import {
  ListMessageMoveTasksCommand,
  ListMessageMoveTasksCommandInput,
  ListMessageMoveTasksCommandOutput,
} from "./commands/ListMessageMoveTasksCommand";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import {
  ListQueueTagsCommand,
  ListQueueTagsCommandInput,
  ListQueueTagsCommandOutput,
} from "./commands/ListQueueTagsCommand";
import { PurgeQueueCommand, PurgeQueueCommandInput, PurgeQueueCommandOutput } from "./commands/PurgeQueueCommand";
import {
  ReceiveMessageCommand,
  ReceiveMessageCommandInput,
  ReceiveMessageCommandOutput,
} from "./commands/ReceiveMessageCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  SendMessageBatchCommand,
  SendMessageBatchCommandInput,
  SendMessageBatchCommandOutput,
} from "./commands/SendMessageBatchCommand";
import { SendMessageCommand, SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import {
  SetQueueAttributesCommand,
  SetQueueAttributesCommandInput,
  SetQueueAttributesCommandOutput,
} from "./commands/SetQueueAttributesCommand";
import {
  StartMessageMoveTaskCommand,
  StartMessageMoveTaskCommandInput,
  StartMessageMoveTaskCommandOutput,
} from "./commands/StartMessageMoveTaskCommand";
import { TagQueueCommand, TagQueueCommandInput, TagQueueCommandOutput } from "./commands/TagQueueCommand";
import { UntagQueueCommand, UntagQueueCommandInput, UntagQueueCommandOutput } from "./commands/UntagQueueCommand";
import { SQSClient, SQSClientConfig } from "./SQSClient";

const commands = {
  AddPermissionCommand,
  CancelMessageMoveTaskCommand,
  ChangeMessageVisibilityCommand,
  ChangeMessageVisibilityBatchCommand,
  CreateQueueCommand,
  DeleteMessageCommand,
  DeleteMessageBatchCommand,
  DeleteQueueCommand,
  GetQueueAttributesCommand,
  GetQueueUrlCommand,
  ListDeadLetterSourceQueuesCommand,
  ListMessageMoveTasksCommand,
  ListQueuesCommand,
  ListQueueTagsCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  RemovePermissionCommand,
  SendMessageCommand,
  SendMessageBatchCommand,
  SetQueueAttributesCommand,
  StartMessageMoveTaskCommand,
  TagQueueCommand,
  UntagQueueCommand,
};

export interface SQS {
  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(args: AddPermissionCommandInput, options?: __HttpHandlerOptions): Promise<AddPermissionCommandOutput>;
  addPermission(args: AddPermissionCommandInput, cb: (err: any, data?: AddPermissionCommandOutput) => void): void;
  addPermission(
    args: AddPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMessageMoveTaskCommand}
   */
  cancelMessageMoveTask(
    args: CancelMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMessageMoveTaskCommandOutput>;
  cancelMessageMoveTask(
    args: CancelMessageMoveTaskCommandInput,
    cb: (err: any, data?: CancelMessageMoveTaskCommandOutput) => void
  ): void;
  cancelMessageMoveTask(
    args: CancelMessageMoveTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMessageMoveTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeMessageVisibilityCommand}
   */
  changeMessageVisibility(
    args: ChangeMessageVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeMessageVisibilityCommandOutput>;
  changeMessageVisibility(
    args: ChangeMessageVisibilityCommandInput,
    cb: (err: any, data?: ChangeMessageVisibilityCommandOutput) => void
  ): void;
  changeMessageVisibility(
    args: ChangeMessageVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeMessageVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeMessageVisibilityBatchCommand}
   */
  changeMessageVisibilityBatch(
    args: ChangeMessageVisibilityBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeMessageVisibilityBatchCommandOutput>;
  changeMessageVisibilityBatch(
    args: ChangeMessageVisibilityBatchCommandInput,
    cb: (err: any, data?: ChangeMessageVisibilityBatchCommandOutput) => void
  ): void;
  changeMessageVisibilityBatch(
    args: ChangeMessageVisibilityBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeMessageVisibilityBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
  createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
  createQueue(
    args: CreateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMessageCommand}
   */
  deleteMessage(args: DeleteMessageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMessageCommandOutput>;
  deleteMessage(args: DeleteMessageCommandInput, cb: (err: any, data?: DeleteMessageCommandOutput) => void): void;
  deleteMessage(
    args: DeleteMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMessageBatchCommand}
   */
  deleteMessageBatch(
    args: DeleteMessageBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMessageBatchCommandOutput>;
  deleteMessageBatch(
    args: DeleteMessageBatchCommandInput,
    cb: (err: any, data?: DeleteMessageBatchCommandOutput) => void
  ): void;
  deleteMessageBatch(
    args: DeleteMessageBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMessageBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(args: DeleteQueueCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueueCommandOutput>;
  deleteQueue(args: DeleteQueueCommandInput, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
  deleteQueue(
    args: DeleteQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueAttributesCommand}
   */
  getQueueAttributes(
    args: GetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueueAttributesCommandOutput>;
  getQueueAttributes(
    args: GetQueueAttributesCommandInput,
    cb: (err: any, data?: GetQueueAttributesCommandOutput) => void
  ): void;
  getQueueAttributes(
    args: GetQueueAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueUrlCommand}
   */
  getQueueUrl(args: GetQueueUrlCommandInput, options?: __HttpHandlerOptions): Promise<GetQueueUrlCommandOutput>;
  getQueueUrl(args: GetQueueUrlCommandInput, cb: (err: any, data?: GetQueueUrlCommandOutput) => void): void;
  getQueueUrl(
    args: GetQueueUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeadLetterSourceQueuesCommand}
   */
  listDeadLetterSourceQueues(
    args: ListDeadLetterSourceQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeadLetterSourceQueuesCommandOutput>;
  listDeadLetterSourceQueues(
    args: ListDeadLetterSourceQueuesCommandInput,
    cb: (err: any, data?: ListDeadLetterSourceQueuesCommandOutput) => void
  ): void;
  listDeadLetterSourceQueues(
    args: ListDeadLetterSourceQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeadLetterSourceQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMessageMoveTasksCommand}
   */
  listMessageMoveTasks(
    args: ListMessageMoveTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMessageMoveTasksCommandOutput>;
  listMessageMoveTasks(
    args: ListMessageMoveTasksCommandInput,
    cb: (err: any, data?: ListMessageMoveTasksCommandOutput) => void
  ): void;
  listMessageMoveTasks(
    args: ListMessageMoveTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMessageMoveTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
  listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
  listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueTagsCommand}
   */
  listQueueTags(args: ListQueueTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListQueueTagsCommandOutput>;
  listQueueTags(args: ListQueueTagsCommandInput, cb: (err: any, data?: ListQueueTagsCommandOutput) => void): void;
  listQueueTags(
    args: ListQueueTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link PurgeQueueCommand}
   */
  purgeQueue(args: PurgeQueueCommandInput, options?: __HttpHandlerOptions): Promise<PurgeQueueCommandOutput>;
  purgeQueue(args: PurgeQueueCommandInput, cb: (err: any, data?: PurgeQueueCommandOutput) => void): void;
  purgeQueue(
    args: PurgeQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurgeQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link ReceiveMessageCommand}
   */
  receiveMessage(
    args: ReceiveMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReceiveMessageCommandOutput>;
  receiveMessage(args: ReceiveMessageCommandInput, cb: (err: any, data?: ReceiveMessageCommandOutput) => void): void;
  receiveMessage(
    args: ReceiveMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReceiveMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(args: SendMessageCommandInput, options?: __HttpHandlerOptions): Promise<SendMessageCommandOutput>;
  sendMessage(args: SendMessageCommandInput, cb: (err: any, data?: SendMessageCommandOutput) => void): void;
  sendMessage(
    args: SendMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessageBatchCommand}
   */
  sendMessageBatch(
    args: SendMessageBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendMessageBatchCommandOutput>;
  sendMessageBatch(
    args: SendMessageBatchCommandInput,
    cb: (err: any, data?: SendMessageBatchCommandOutput) => void
  ): void;
  sendMessageBatch(
    args: SendMessageBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMessageBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link SetQueueAttributesCommand}
   */
  setQueueAttributes(
    args: SetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetQueueAttributesCommandOutput>;
  setQueueAttributes(
    args: SetQueueAttributesCommandInput,
    cb: (err: any, data?: SetQueueAttributesCommandOutput) => void
  ): void;
  setQueueAttributes(
    args: SetQueueAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetQueueAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMessageMoveTaskCommand}
   */
  startMessageMoveTask(
    args: StartMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMessageMoveTaskCommandOutput>;
  startMessageMoveTask(
    args: StartMessageMoveTaskCommandInput,
    cb: (err: any, data?: StartMessageMoveTaskCommandOutput) => void
  ): void;
  startMessageMoveTask(
    args: StartMessageMoveTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMessageMoveTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagQueueCommand}
   */
  tagQueue(args: TagQueueCommandInput, options?: __HttpHandlerOptions): Promise<TagQueueCommandOutput>;
  tagQueue(args: TagQueueCommandInput, cb: (err: any, data?: TagQueueCommandOutput) => void): void;
  tagQueue(
    args: TagQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagQueueCommand}
   */
  untagQueue(args: UntagQueueCommandInput, options?: __HttpHandlerOptions): Promise<UntagQueueCommandOutput>;
  untagQueue(args: UntagQueueCommandInput, cb: (err: any, data?: UntagQueueCommandOutput) => void): void;
  untagQueue(
    args: UntagQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagQueueCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Welcome to the <i>Amazon SQS API Reference</i>.</p>
 *          <p>Amazon SQS is a reliable, highly-scalable hosted queue for storing messages as they travel
 *             between applications or microservices. Amazon SQS moves data between distributed application
 *             components and helps you decouple these components.</p>
 *          <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html">Identity and access management</a> in the <i>Amazon SQS Developer
 *                 Guide.</i>
 *          </p>
 *          <p>You can use <a href="http://aws.amazon.com/tools/#sdk">Amazon Web Services SDKs</a> to access
 *             Amazon SQS using your favorite programming language. The SDKs perform tasks such as the
 *             following automatically:</p>
 *          <ul>
 *             <li>
 *                <p>Cryptographically sign your service requests</p>
 *             </li>
 *             <li>
 *                <p>Retry requests</p>
 *             </li>
 *             <li>
 *                <p>Handle error responses</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Additional information</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Amazon SQS Developer Guide</i>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html">Making API Requests</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a>
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
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/cli/latest/reference/sqs/index.html">Amazon SQS in the <i>Command Line Interface</i>
 *                   </a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Amazon Web Services General Reference</i>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and
 *                                 Endpoints</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export class SQS extends SQSClient implements SQS {}
createAggregatedClient(commands, SQS);
