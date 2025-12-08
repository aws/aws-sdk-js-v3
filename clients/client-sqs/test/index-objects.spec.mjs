import {
  AddPermissionCommand,
  BatchEntryIdsNotDistinct,
  BatchRequestTooLong,
  CancelMessageMoveTaskCommand,
  ChangeMessageVisibilityBatchCommand,
  ChangeMessageVisibilityCommand,
  CreateQueueCommand,
  DeleteMessageBatchCommand,
  DeleteMessageCommand,
  DeleteQueueCommand,
  EmptyBatchRequest,
  GetQueueAttributesCommand,
  GetQueueUrlCommand,
  InvalidAddress,
  InvalidAttributeName,
  InvalidAttributeValue,
  InvalidBatchEntryId,
  InvalidIdFormat,
  InvalidMessageContents,
  InvalidSecurity,
  KmsAccessDenied,
  KmsDisabled,
  KmsInvalidKeyUsage,
  KmsInvalidState,
  KmsNotFound,
  KmsOptInRequired,
  KmsThrottled,
  ListDeadLetterSourceQueuesCommand,
  ListMessageMoveTasksCommand,
  ListQueueTagsCommand,
  ListQueuesCommand,
  MessageNotInflight,
  MessageSystemAttributeName,
  MessageSystemAttributeNameForSends,
  OverLimit,
  PurgeQueueCommand,
  PurgeQueueInProgress,
  QueueAttributeName,
  QueueDeletedRecently,
  QueueDoesNotExist,
  QueueNameExists,
  ReceiptHandleIsInvalid,
  ReceiveMessageCommand,
  RemovePermissionCommand,
  RequestThrottled,
  ResourceNotFoundException,
  SQS,
  SQSClient,
  SQSServiceException,
  SendMessageBatchCommand,
  SendMessageCommand,
  SetQueueAttributesCommand,
  StartMessageMoveTaskCommand,
  TagQueueCommand,
  TooManyEntriesInBatchRequest,
  UnsupportedOperation,
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
assert(BatchEntryIdsNotDistinct.prototype instanceof SQSServiceException);
assert(BatchRequestTooLong.prototype instanceof SQSServiceException);
assert(EmptyBatchRequest.prototype instanceof SQSServiceException);
assert(InvalidAddress.prototype instanceof SQSServiceException);
assert(InvalidAttributeName.prototype instanceof SQSServiceException);
assert(InvalidAttributeValue.prototype instanceof SQSServiceException);
assert(InvalidBatchEntryId.prototype instanceof SQSServiceException);
assert(InvalidIdFormat.prototype instanceof SQSServiceException);
assert(InvalidMessageContents.prototype instanceof SQSServiceException);
assert(InvalidSecurity.prototype instanceof SQSServiceException);
assert(KmsAccessDenied.prototype instanceof SQSServiceException);
assert(KmsDisabled.prototype instanceof SQSServiceException);
assert(KmsInvalidKeyUsage.prototype instanceof SQSServiceException);
assert(KmsInvalidState.prototype instanceof SQSServiceException);
assert(KmsNotFound.prototype instanceof SQSServiceException);
assert(KmsOptInRequired.prototype instanceof SQSServiceException);
assert(KmsThrottled.prototype instanceof SQSServiceException);
assert(MessageNotInflight.prototype instanceof SQSServiceException);
assert(OverLimit.prototype instanceof SQSServiceException);
assert(PurgeQueueInProgress.prototype instanceof SQSServiceException);
assert(QueueDeletedRecently.prototype instanceof SQSServiceException);
assert(QueueDoesNotExist.prototype instanceof SQSServiceException);
assert(QueueNameExists.prototype instanceof SQSServiceException);
assert(ReceiptHandleIsInvalid.prototype instanceof SQSServiceException);
assert(RequestThrottled.prototype instanceof SQSServiceException);
assert(ResourceNotFoundException.prototype instanceof SQSServiceException);
assert(TooManyEntriesInBatchRequest.prototype instanceof SQSServiceException);
assert(UnsupportedOperation.prototype instanceof SQSServiceException);
assert(SQSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeadLetterSourceQueues === "function");
assert(typeof paginateListQueues === "function");
console.log(`SQS index test passed.`);
