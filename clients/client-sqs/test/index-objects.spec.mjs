import {
  AddPermission$,
  AddPermissionCommand,
  AddPermissionRequest$,
  BatchEntryIdsNotDistinct,
  BatchEntryIdsNotDistinct$,
  BatchRequestTooLong,
  BatchRequestTooLong$,
  BatchResultErrorEntry$,
  CancelMessageMoveTask$,
  CancelMessageMoveTaskCommand,
  CancelMessageMoveTaskRequest$,
  CancelMessageMoveTaskResult$,
  ChangeMessageVisibility$,
  ChangeMessageVisibilityBatch$,
  ChangeMessageVisibilityBatchCommand,
  ChangeMessageVisibilityBatchRequest$,
  ChangeMessageVisibilityBatchRequestEntry$,
  ChangeMessageVisibilityBatchResult$,
  ChangeMessageVisibilityBatchResultEntry$,
  ChangeMessageVisibilityCommand,
  ChangeMessageVisibilityRequest$,
  CreateQueue$,
  CreateQueueCommand,
  CreateQueueRequest$,
  CreateQueueResult$,
  DeleteMessage$,
  DeleteMessageBatch$,
  DeleteMessageBatchCommand,
  DeleteMessageBatchRequest$,
  DeleteMessageBatchRequestEntry$,
  DeleteMessageBatchResult$,
  DeleteMessageBatchResultEntry$,
  DeleteMessageCommand,
  DeleteMessageRequest$,
  DeleteQueue$,
  DeleteQueueCommand,
  DeleteQueueRequest$,
  EmptyBatchRequest,
  EmptyBatchRequest$,
  GetQueueAttributes$,
  GetQueueAttributesCommand,
  GetQueueAttributesRequest$,
  GetQueueAttributesResult$,
  GetQueueUrl$,
  GetQueueUrlCommand,
  GetQueueUrlRequest$,
  GetQueueUrlResult$,
  InvalidAddress,
  InvalidAddress$,
  InvalidAttributeName,
  InvalidAttributeName$,
  InvalidAttributeValue,
  InvalidAttributeValue$,
  InvalidBatchEntryId,
  InvalidBatchEntryId$,
  InvalidIdFormat,
  InvalidIdFormat$,
  InvalidMessageContents,
  InvalidMessageContents$,
  InvalidSecurity,
  InvalidSecurity$,
  KmsAccessDenied,
  KmsAccessDenied$,
  KmsDisabled,
  KmsDisabled$,
  KmsInvalidKeyUsage,
  KmsInvalidKeyUsage$,
  KmsInvalidState,
  KmsInvalidState$,
  KmsNotFound,
  KmsNotFound$,
  KmsOptInRequired,
  KmsOptInRequired$,
  KmsThrottled,
  KmsThrottled$,
  ListDeadLetterSourceQueues$,
  ListDeadLetterSourceQueuesCommand,
  ListDeadLetterSourceQueuesRequest$,
  ListDeadLetterSourceQueuesResult$,
  ListMessageMoveTasks$,
  ListMessageMoveTasksCommand,
  ListMessageMoveTasksRequest$,
  ListMessageMoveTasksResult$,
  ListMessageMoveTasksResultEntry$,
  ListQueues$,
  ListQueuesCommand,
  ListQueuesRequest$,
  ListQueuesResult$,
  ListQueueTags$,
  ListQueueTagsCommand,
  ListQueueTagsRequest$,
  ListQueueTagsResult$,
  Message$,
  MessageAttributeValue$,
  MessageNotInflight,
  MessageNotInflight$,
  MessageSystemAttributeName,
  MessageSystemAttributeNameForSends,
  MessageSystemAttributeValue$,
  OverLimit,
  OverLimit$,
  paginateListDeadLetterSourceQueues,
  paginateListQueues,
  PurgeQueue$,
  PurgeQueueCommand,
  PurgeQueueInProgress,
  PurgeQueueInProgress$,
  PurgeQueueRequest$,
  QueueAttributeName,
  QueueDeletedRecently,
  QueueDeletedRecently$,
  QueueDoesNotExist,
  QueueDoesNotExist$,
  QueueNameExists,
  QueueNameExists$,
  ReceiptHandleIsInvalid,
  ReceiptHandleIsInvalid$,
  ReceiveMessage$,
  ReceiveMessageCommand,
  ReceiveMessageRequest$,
  ReceiveMessageResult$,
  RemovePermission$,
  RemovePermissionCommand,
  RemovePermissionRequest$,
  RequestThrottled,
  RequestThrottled$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SendMessage$,
  SendMessageBatch$,
  SendMessageBatchCommand,
  SendMessageBatchRequest$,
  SendMessageBatchRequestEntry$,
  SendMessageBatchResult$,
  SendMessageBatchResultEntry$,
  SendMessageCommand,
  SendMessageRequest$,
  SendMessageResult$,
  SetQueueAttributes$,
  SetQueueAttributesCommand,
  SetQueueAttributesRequest$,
  SQS,
  SQSClient,
  SQSServiceException,
  StartMessageMoveTask$,
  StartMessageMoveTaskCommand,
  StartMessageMoveTaskRequest$,
  StartMessageMoveTaskResult$,
  TagQueue$,
  TagQueueCommand,
  TagQueueRequest$,
  TooManyEntriesInBatchRequest,
  TooManyEntriesInBatchRequest$,
  UnsupportedOperation,
  UnsupportedOperation$,
  UntagQueue$,
  UntagQueueCommand,
  UntagQueueRequest$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SQSClient === "function");
assert(typeof SQS === "function");
// commands
assert(typeof AddPermissionCommand === "function");
assert(typeof AddPermission$ === "object");
assert(typeof CancelMessageMoveTaskCommand === "function");
assert(typeof CancelMessageMoveTask$ === "object");
assert(typeof ChangeMessageVisibilityCommand === "function");
assert(typeof ChangeMessageVisibility$ === "object");
assert(typeof ChangeMessageVisibilityBatchCommand === "function");
assert(typeof ChangeMessageVisibilityBatch$ === "object");
assert(typeof CreateQueueCommand === "function");
assert(typeof CreateQueue$ === "object");
assert(typeof DeleteMessageCommand === "function");
assert(typeof DeleteMessage$ === "object");
assert(typeof DeleteMessageBatchCommand === "function");
assert(typeof DeleteMessageBatch$ === "object");
assert(typeof DeleteQueueCommand === "function");
assert(typeof DeleteQueue$ === "object");
assert(typeof GetQueueAttributesCommand === "function");
assert(typeof GetQueueAttributes$ === "object");
assert(typeof GetQueueUrlCommand === "function");
assert(typeof GetQueueUrl$ === "object");
assert(typeof ListDeadLetterSourceQueuesCommand === "function");
assert(typeof ListDeadLetterSourceQueues$ === "object");
assert(typeof ListMessageMoveTasksCommand === "function");
assert(typeof ListMessageMoveTasks$ === "object");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListQueues$ === "object");
assert(typeof ListQueueTagsCommand === "function");
assert(typeof ListQueueTags$ === "object");
assert(typeof PurgeQueueCommand === "function");
assert(typeof PurgeQueue$ === "object");
assert(typeof ReceiveMessageCommand === "function");
assert(typeof ReceiveMessage$ === "object");
assert(typeof RemovePermissionCommand === "function");
assert(typeof RemovePermission$ === "object");
assert(typeof SendMessageCommand === "function");
assert(typeof SendMessage$ === "object");
assert(typeof SendMessageBatchCommand === "function");
assert(typeof SendMessageBatch$ === "object");
assert(typeof SetQueueAttributesCommand === "function");
assert(typeof SetQueueAttributes$ === "object");
assert(typeof StartMessageMoveTaskCommand === "function");
assert(typeof StartMessageMoveTask$ === "object");
assert(typeof TagQueueCommand === "function");
assert(typeof TagQueue$ === "object");
assert(typeof UntagQueueCommand === "function");
assert(typeof UntagQueue$ === "object");
// structural schemas
assert(typeof AddPermissionRequest$ === "object");
assert(typeof BatchResultErrorEntry$ === "object");
assert(typeof CancelMessageMoveTaskRequest$ === "object");
assert(typeof CancelMessageMoveTaskResult$ === "object");
assert(typeof ChangeMessageVisibilityBatchRequest$ === "object");
assert(typeof ChangeMessageVisibilityBatchRequestEntry$ === "object");
assert(typeof ChangeMessageVisibilityBatchResult$ === "object");
assert(typeof ChangeMessageVisibilityBatchResultEntry$ === "object");
assert(typeof ChangeMessageVisibilityRequest$ === "object");
assert(typeof CreateQueueRequest$ === "object");
assert(typeof CreateQueueResult$ === "object");
assert(typeof DeleteMessageBatchRequest$ === "object");
assert(typeof DeleteMessageBatchRequestEntry$ === "object");
assert(typeof DeleteMessageBatchResult$ === "object");
assert(typeof DeleteMessageBatchResultEntry$ === "object");
assert(typeof DeleteMessageRequest$ === "object");
assert(typeof DeleteQueueRequest$ === "object");
assert(typeof GetQueueAttributesRequest$ === "object");
assert(typeof GetQueueAttributesResult$ === "object");
assert(typeof GetQueueUrlRequest$ === "object");
assert(typeof GetQueueUrlResult$ === "object");
assert(typeof ListDeadLetterSourceQueuesRequest$ === "object");
assert(typeof ListDeadLetterSourceQueuesResult$ === "object");
assert(typeof ListMessageMoveTasksRequest$ === "object");
assert(typeof ListMessageMoveTasksResult$ === "object");
assert(typeof ListMessageMoveTasksResultEntry$ === "object");
assert(typeof ListQueuesRequest$ === "object");
assert(typeof ListQueuesResult$ === "object");
assert(typeof ListQueueTagsRequest$ === "object");
assert(typeof ListQueueTagsResult$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageAttributeValue$ === "object");
assert(typeof MessageSystemAttributeValue$ === "object");
assert(typeof PurgeQueueRequest$ === "object");
assert(typeof ReceiveMessageRequest$ === "object");
assert(typeof ReceiveMessageResult$ === "object");
assert(typeof RemovePermissionRequest$ === "object");
assert(typeof SendMessageBatchRequest$ === "object");
assert(typeof SendMessageBatchRequestEntry$ === "object");
assert(typeof SendMessageBatchResult$ === "object");
assert(typeof SendMessageBatchResultEntry$ === "object");
assert(typeof SendMessageRequest$ === "object");
assert(typeof SendMessageResult$ === "object");
assert(typeof SetQueueAttributesRequest$ === "object");
assert(typeof StartMessageMoveTaskRequest$ === "object");
assert(typeof StartMessageMoveTaskResult$ === "object");
assert(typeof TagQueueRequest$ === "object");
assert(typeof UntagQueueRequest$ === "object");
// enums
assert(typeof MessageSystemAttributeName === "object");
assert(typeof MessageSystemAttributeNameForSends === "object");
assert(typeof QueueAttributeName === "object");
// errors
assert(BatchEntryIdsNotDistinct.prototype instanceof SQSServiceException);
assert(typeof BatchEntryIdsNotDistinct$ === "object");
assert(BatchRequestTooLong.prototype instanceof SQSServiceException);
assert(typeof BatchRequestTooLong$ === "object");
assert(EmptyBatchRequest.prototype instanceof SQSServiceException);
assert(typeof EmptyBatchRequest$ === "object");
assert(InvalidAddress.prototype instanceof SQSServiceException);
assert(typeof InvalidAddress$ === "object");
assert(InvalidAttributeName.prototype instanceof SQSServiceException);
assert(typeof InvalidAttributeName$ === "object");
assert(InvalidAttributeValue.prototype instanceof SQSServiceException);
assert(typeof InvalidAttributeValue$ === "object");
assert(InvalidBatchEntryId.prototype instanceof SQSServiceException);
assert(typeof InvalidBatchEntryId$ === "object");
assert(InvalidIdFormat.prototype instanceof SQSServiceException);
assert(typeof InvalidIdFormat$ === "object");
assert(InvalidMessageContents.prototype instanceof SQSServiceException);
assert(typeof InvalidMessageContents$ === "object");
assert(InvalidSecurity.prototype instanceof SQSServiceException);
assert(typeof InvalidSecurity$ === "object");
assert(KmsAccessDenied.prototype instanceof SQSServiceException);
assert(typeof KmsAccessDenied$ === "object");
assert(KmsDisabled.prototype instanceof SQSServiceException);
assert(typeof KmsDisabled$ === "object");
assert(KmsInvalidKeyUsage.prototype instanceof SQSServiceException);
assert(typeof KmsInvalidKeyUsage$ === "object");
assert(KmsInvalidState.prototype instanceof SQSServiceException);
assert(typeof KmsInvalidState$ === "object");
assert(KmsNotFound.prototype instanceof SQSServiceException);
assert(typeof KmsNotFound$ === "object");
assert(KmsOptInRequired.prototype instanceof SQSServiceException);
assert(typeof KmsOptInRequired$ === "object");
assert(KmsThrottled.prototype instanceof SQSServiceException);
assert(typeof KmsThrottled$ === "object");
assert(MessageNotInflight.prototype instanceof SQSServiceException);
assert(typeof MessageNotInflight$ === "object");
assert(OverLimit.prototype instanceof SQSServiceException);
assert(typeof OverLimit$ === "object");
assert(PurgeQueueInProgress.prototype instanceof SQSServiceException);
assert(typeof PurgeQueueInProgress$ === "object");
assert(QueueDeletedRecently.prototype instanceof SQSServiceException);
assert(typeof QueueDeletedRecently$ === "object");
assert(QueueDoesNotExist.prototype instanceof SQSServiceException);
assert(typeof QueueDoesNotExist$ === "object");
assert(QueueNameExists.prototype instanceof SQSServiceException);
assert(typeof QueueNameExists$ === "object");
assert(ReceiptHandleIsInvalid.prototype instanceof SQSServiceException);
assert(typeof ReceiptHandleIsInvalid$ === "object");
assert(RequestThrottled.prototype instanceof SQSServiceException);
assert(typeof RequestThrottled$ === "object");
assert(ResourceNotFoundException.prototype instanceof SQSServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyEntriesInBatchRequest.prototype instanceof SQSServiceException);
assert(typeof TooManyEntriesInBatchRequest$ === "object");
assert(UnsupportedOperation.prototype instanceof SQSServiceException);
assert(typeof UnsupportedOperation$ === "object");
assert(SQSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeadLetterSourceQueues === "function");
assert(typeof paginateListQueues === "function");
console.log(`SQS index test passed.`);
