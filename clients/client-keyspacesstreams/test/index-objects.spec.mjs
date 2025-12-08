import {
  AccessDeniedException,
  GetRecordsCommand,
  GetShardIteratorCommand,
  GetStreamCommand,
  InternalServerException,
  KeyspacesStreams,
  KeyspacesStreamsClient,
  KeyspacesStreamsServiceException,
  ListStreamsCommand,
  OriginType,
  ResourceNotFoundException,
  ShardFilterType,
  ShardIteratorType,
  StreamStatus,
  StreamViewType,
  ThrottlingException,
  ValidationException,
  ValidationExceptionType,
  paginateGetStream,
  paginateListStreams,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KeyspacesStreamsClient === "function");
assert(typeof KeyspacesStreams === "function");
// commands
assert(typeof GetRecordsCommand === "function");
assert(typeof GetShardIteratorCommand === "function");
assert(typeof GetStreamCommand === "function");
assert(typeof ListStreamsCommand === "function");
// enums
assert(typeof OriginType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamStatus === "object");
assert(typeof StreamViewType === "object");
assert(typeof ValidationExceptionType === "object");
// errors
assert(AccessDeniedException.prototype instanceof KeyspacesStreamsServiceException);
assert(InternalServerException.prototype instanceof KeyspacesStreamsServiceException);
assert(ResourceNotFoundException.prototype instanceof KeyspacesStreamsServiceException);
assert(ThrottlingException.prototype instanceof KeyspacesStreamsServiceException);
assert(ValidationException.prototype instanceof KeyspacesStreamsServiceException);
assert(KeyspacesStreamsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetStream === "function");
assert(typeof paginateListStreams === "function");
console.log(`KeyspacesStreams index test passed.`);
