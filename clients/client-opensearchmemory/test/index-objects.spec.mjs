import {
  AccessDeniedException,
  AccessDeniedException$,
  BatchGetEvent$,
  BatchGetEventCommand,
  BatchGetEventError$,
  BatchGetEventErrorCode,
  BatchGetEventInput$,
  BatchGetEventOutput$,
  BlobContentType,
  BlobPayload$,
  BlobSource$,
  ConflictException,
  ConflictException$,
  ConversationalPayload$,
  CreateEvent$,
  CreateEventCommand,
  CreateEventInput$,
  CreateEventOutput$,
  CreateMemory$,
  CreateMemoryCommand,
  CreateMemoryDetail$,
  CreateMemoryInput$,
  CreateMemoryOutput$,
  CreateSpace$,
  CreateSpaceCommand,
  CreateSpaceRequest$,
  CreateSpaceResponse$,
  DeleteEvent$,
  DeleteEventCommand,
  DeleteEventInput$,
  DeleteEventOutput$,
  DeleteMemory$,
  DeleteMemoryCommand,
  DeleteMemoryInput$,
  DeleteMemoryOutput$,
  DeleteSpace$,
  DeleteSpaceCommand,
  DeleteSpaceRequest$,
  DeleteSpaceResponse$,
  EncryptionConfiguration$,
  Event$,
  EventDetail$,
  EventPayload$,
  EventSearchSummary$,
  EventSummary$,
  GetEvent$,
  GetEventCommand,
  GetEventInput$,
  GetEventOutput$,
  GetMemory$,
  GetMemoryCommand,
  GetMemoryInput$,
  GetMemoryOutput$,
  GetSpace$,
  GetSpaceCommand,
  GetSpaceRequest$,
  GetSpaceResponse$,
  InternalServerException,
  InternalServerException$,
  ListEvents$,
  ListEventsCommand,
  ListEventsInput$,
  ListEventsOutput$,
  ListMemories$,
  ListMemoriesCommand,
  ListMemoriesInput$,
  ListMemoriesOutput$,
  ListSpaces$,
  ListSpacesCommand,
  ListSpacesRequest$,
  ListSpacesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Memory$,
  MemoryListSummary$,
  MemorySearchSummary$,
  MemorySortField,
  MemoryStrategy$,
  MemoryStrategyConfiguration$,
  MemoryStrategyType,
  MemoryType,
  Message$,
  MessageContent$,
  MessageRole,
  MetadataMode,
  OpenSearchMemory,
  OpenSearchMemoryClient,
  OpenSearchMemoryServiceException,
  paginateListEvents,
  paginateListMemories,
  paginateListSpaces,
  paginateSearchEvents,
  paginateSearchMemories,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Location$,
  SearchEvents$,
  SearchEventsCommand,
  SearchEventsInput$,
  SearchEventsOutput$,
  SearchMemories$,
  SearchMemoriesCommand,
  SearchMemoriesInput$,
  SearchMemoriesOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortOrder,
  SpaceStatus,
  SpaceSummary$,
  StrategySelector$,
  StructuredDataPayload$,
  StructuredDataSource$,
  SystemMetadata$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UnifiedConversational$,
  UnifiedConversationalObject$,
  UnifiedConversationalSource$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateMemory$,
  UpdateMemoryCommand,
  UpdateMemoryInput$,
  UpdateMemoryOutput$,
  UpdateSpace$,
  UpdateSpaceCommand,
  UpdateSpaceRequest$,
  UpdateSpaceResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  waitForSpaceActive,
  waitForSpaceDeleted,
  waitUntilSpaceActive,
  waitUntilSpaceDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OpenSearchMemoryClient === "function");
assert(typeof OpenSearchMemory === "function");
// commands
assert(typeof BatchGetEventCommand === "function");
assert(typeof BatchGetEvent$ === "object");
assert(typeof CreateEventCommand === "function");
assert(typeof CreateEvent$ === "object");
assert(typeof CreateMemoryCommand === "function");
assert(typeof CreateMemory$ === "object");
assert(typeof CreateSpaceCommand === "function");
assert(typeof CreateSpace$ === "object");
assert(typeof DeleteEventCommand === "function");
assert(typeof DeleteEvent$ === "object");
assert(typeof DeleteMemoryCommand === "function");
assert(typeof DeleteMemory$ === "object");
assert(typeof DeleteSpaceCommand === "function");
assert(typeof DeleteSpace$ === "object");
assert(typeof GetEventCommand === "function");
assert(typeof GetEvent$ === "object");
assert(typeof GetMemoryCommand === "function");
assert(typeof GetMemory$ === "object");
assert(typeof GetSpaceCommand === "function");
assert(typeof GetSpace$ === "object");
assert(typeof ListEventsCommand === "function");
assert(typeof ListEvents$ === "object");
assert(typeof ListMemoriesCommand === "function");
assert(typeof ListMemories$ === "object");
assert(typeof ListSpacesCommand === "function");
assert(typeof ListSpaces$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SearchEventsCommand === "function");
assert(typeof SearchEvents$ === "object");
assert(typeof SearchMemoriesCommand === "function");
assert(typeof SearchMemories$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMemoryCommand === "function");
assert(typeof UpdateMemory$ === "object");
assert(typeof UpdateSpaceCommand === "function");
assert(typeof UpdateSpace$ === "object");
// structural schemas
assert(typeof BatchGetEventError$ === "object");
assert(typeof BatchGetEventInput$ === "object");
assert(typeof BatchGetEventOutput$ === "object");
assert(typeof BlobPayload$ === "object");
assert(typeof BlobSource$ === "object");
assert(typeof ConversationalPayload$ === "object");
assert(typeof CreateEventInput$ === "object");
assert(typeof CreateEventOutput$ === "object");
assert(typeof CreateMemoryDetail$ === "object");
assert(typeof CreateMemoryInput$ === "object");
assert(typeof CreateMemoryOutput$ === "object");
assert(typeof CreateSpaceRequest$ === "object");
assert(typeof CreateSpaceResponse$ === "object");
assert(typeof DeleteEventInput$ === "object");
assert(typeof DeleteEventOutput$ === "object");
assert(typeof DeleteMemoryInput$ === "object");
assert(typeof DeleteMemoryOutput$ === "object");
assert(typeof DeleteSpaceRequest$ === "object");
assert(typeof DeleteSpaceResponse$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventDetail$ === "object");
assert(typeof EventPayload$ === "object");
assert(typeof EventSearchSummary$ === "object");
assert(typeof EventSummary$ === "object");
assert(typeof GetEventInput$ === "object");
assert(typeof GetEventOutput$ === "object");
assert(typeof GetMemoryInput$ === "object");
assert(typeof GetMemoryOutput$ === "object");
assert(typeof GetSpaceRequest$ === "object");
assert(typeof GetSpaceResponse$ === "object");
assert(typeof ListEventsInput$ === "object");
assert(typeof ListEventsOutput$ === "object");
assert(typeof ListMemoriesInput$ === "object");
assert(typeof ListMemoriesOutput$ === "object");
assert(typeof ListSpacesRequest$ === "object");
assert(typeof ListSpacesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Memory$ === "object");
assert(typeof MemoryListSummary$ === "object");
assert(typeof MemorySearchSummary$ === "object");
assert(typeof MemoryStrategy$ === "object");
assert(typeof MemoryStrategyConfiguration$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageContent$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SearchEventsInput$ === "object");
assert(typeof SearchEventsOutput$ === "object");
assert(typeof SearchMemoriesInput$ === "object");
assert(typeof SearchMemoriesOutput$ === "object");
assert(typeof SpaceSummary$ === "object");
assert(typeof StrategySelector$ === "object");
assert(typeof StructuredDataPayload$ === "object");
assert(typeof StructuredDataSource$ === "object");
assert(typeof SystemMetadata$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UnifiedConversational$ === "object");
assert(typeof UnifiedConversationalObject$ === "object");
assert(typeof UnifiedConversationalSource$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateMemoryInput$ === "object");
assert(typeof UpdateMemoryOutput$ === "object");
assert(typeof UpdateSpaceRequest$ === "object");
assert(typeof UpdateSpaceResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof BatchGetEventErrorCode === "object");
assert(typeof BlobContentType === "object");
assert(typeof MemorySortField === "object");
assert(typeof MemoryStrategyType === "object");
assert(typeof MemoryType === "object");
assert(typeof MessageRole === "object");
assert(typeof MetadataMode === "object");
assert(typeof SortOrder === "object");
assert(typeof SpaceStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof OpenSearchMemoryServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof OpenSearchMemoryServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof OpenSearchMemoryServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof OpenSearchMemoryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof OpenSearchMemoryServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof OpenSearchMemoryServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof OpenSearchMemoryServiceException);
assert(typeof ValidationException$ === "object");
assert(OpenSearchMemoryServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForSpaceActive === "function");
assert(typeof waitForSpaceDeleted === "function");
assert(typeof waitUntilSpaceActive === "function");
assert(typeof waitUntilSpaceDeleted === "function");
// paginators
assert(typeof paginateListEvents === "function");
assert(typeof paginateListMemories === "function");
assert(typeof paginateListSpaces === "function");
assert(typeof paginateSearchEvents === "function");
assert(typeof paginateSearchMemories === "function");
console.log(`OpenSearchMemory index test passed.`);
