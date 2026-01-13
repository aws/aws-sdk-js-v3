import {
  _Record$,
  _Stream$,
  AccessDeniedException,
  AccessDeniedException$,
  GetRecords$,
  GetRecordsCommand,
  GetRecordsInput$,
  GetRecordsOutput$,
  GetShardIterator$,
  GetShardIteratorCommand,
  GetShardIteratorInput$,
  GetShardIteratorOutput$,
  GetStream$,
  GetStreamCommand,
  GetStreamInput$,
  GetStreamOutput$,
  InternalServerException,
  InternalServerException$,
  KeyspacesCell$,
  KeyspacesCellMapDefinition$,
  KeyspacesCellValue$,
  KeyspacesMetadata$,
  KeyspacesRow$,
  KeyspacesStreams,
  KeyspacesStreamsClient,
  KeyspacesStreamsServiceException,
  ListStreams$,
  ListStreamsCommand,
  ListStreamsInput$,
  ListStreamsOutput$,
  OriginType,
  paginateGetStream,
  paginateListStreams,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SequenceNumberRange$,
  Shard$,
  ShardFilter$,
  ShardFilterType,
  ShardIteratorType,
  StreamStatus,
  StreamViewType,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
  ValidationExceptionType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KeyspacesStreamsClient === "function");
assert(typeof KeyspacesStreams === "function");
// commands
assert(typeof GetRecordsCommand === "function");
assert(typeof GetRecords$ === "object");
assert(typeof GetShardIteratorCommand === "function");
assert(typeof GetShardIterator$ === "object");
assert(typeof GetStreamCommand === "function");
assert(typeof GetStream$ === "object");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListStreams$ === "object");
// structural schemas
assert(typeof GetRecordsInput$ === "object");
assert(typeof GetRecordsOutput$ === "object");
assert(typeof GetShardIteratorInput$ === "object");
assert(typeof GetShardIteratorOutput$ === "object");
assert(typeof GetStreamInput$ === "object");
assert(typeof GetStreamOutput$ === "object");
assert(typeof KeyspacesCell$ === "object");
assert(typeof KeyspacesCellMapDefinition$ === "object");
assert(typeof KeyspacesCellValue$ === "object");
assert(typeof KeyspacesMetadata$ === "object");
assert(typeof KeyspacesRow$ === "object");
assert(typeof ListStreamsInput$ === "object");
assert(typeof ListStreamsOutput$ === "object");
assert(typeof _Record$ === "object");
assert(typeof SequenceNumberRange$ === "object");
assert(typeof Shard$ === "object");
assert(typeof ShardFilter$ === "object");
assert(typeof _Stream$ === "object");
// enums
assert(typeof OriginType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamStatus === "object");
assert(typeof StreamViewType === "object");
assert(typeof ValidationExceptionType === "object");
// errors
assert(AccessDeniedException.prototype instanceof KeyspacesStreamsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof KeyspacesStreamsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KeyspacesStreamsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof KeyspacesStreamsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof KeyspacesStreamsServiceException);
assert(typeof ValidationException$ === "object");
assert(KeyspacesStreamsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetStream === "function");
assert(typeof paginateListStreams === "function");
console.log(`KeyspacesStreams index test passed.`);
