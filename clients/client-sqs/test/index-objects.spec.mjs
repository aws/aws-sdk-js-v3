import {
  AddPermissionCommand,
  CancelMessageMoveTaskCommand,
  ChangeMessageVisibilityBatchCommand,
  ChangeMessageVisibilityCommand,
  CreateQueueCommand,
  DeleteMessageBatchCommand,
  DeleteMessageCommand,
  DeleteQueueCommand,
  GetQueueAttributesCommand,
  GetQueueUrlCommand,
  ListDeadLetterSourceQueuesCommand,
  ListMessageMoveTasksCommand,
  ListQueueTagsCommand,
  ListQueuesCommand,
  MessageSystemAttributeName,
  MessageSystemAttributeNameForSends,
  PurgeQueueCommand,
  QueueAttributeName,
  ReceiveMessageCommand,
  RemovePermissionCommand,
  SQS,
  SQSClient,
  SQSServiceException,
  SendMessageBatchCommand,
  SendMessageCommand,
  SetQueueAttributesCommand,
  StartMessageMoveTaskCommand,
  TagQueueCommand,
  UntagQueueCommand,
  paginateListDeadLetterSourceQueues,
  paginateListQueues,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SQSClient === "function");
assert(typeof SQS === "function");
// commands
assert(typeof AddPermissionCommand === "function");
assert(typeof CancelMessageMoveTaskCommand === "function");
assert(typeof ChangeMessageVisibilityCommand === "function");
assert(typeof ChangeMessageVisibilityBatchCommand === "function");
assert(typeof CreateQueueCommand === "function");
assert(typeof DeleteMessageCommand === "function");
assert(typeof DeleteMessageBatchCommand === "function");
assert(typeof DeleteQueueCommand === "function");
assert(typeof GetQueueAttributesCommand === "function");
assert(typeof GetQueueUrlCommand === "function");
assert(typeof ListDeadLetterSourceQueuesCommand === "function");
assert(typeof ListMessageMoveTasksCommand === "function");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListQueueTagsCommand === "function");
assert(typeof PurgeQueueCommand === "function");
assert(typeof ReceiveMessageCommand === "function");
assert(typeof RemovePermissionCommand === "function");
assert(typeof SendMessageCommand === "function");
assert(typeof SendMessageBatchCommand === "function");
assert(typeof SetQueueAttributesCommand === "function");
assert(typeof StartMessageMoveTaskCommand === "function");
assert(typeof TagQueueCommand === "function");
assert(typeof UntagQueueCommand === "function");
// enums
assert(typeof MessageSystemAttributeName === "object");
assert(typeof MessageSystemAttributeNameForSends === "object");
assert(typeof QueueAttributeName === "object");
// errors
assert(SQSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeadLetterSourceQueues === "function");
assert(typeof paginateListQueues === "function");
console.log(`SQS index test passed.`);
