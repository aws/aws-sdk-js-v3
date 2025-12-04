import {
  GetRecordsCommand,
  GetShardIteratorCommand,
  GetStreamCommand,
  KeyspacesStreams,
  KeyspacesStreamsClient,
  KeyspacesStreamsServiceException,
  ListStreamsCommand,
  OriginType,
  ShardFilterType,
  ShardIteratorType,
  StreamStatus,
  StreamViewType,
  paginateGetStream,
  paginateListStreams,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KeyspacesStreamsClient === "function")
assert(typeof KeyspacesStreams === "function")
// commands
assert(typeof GetRecordsCommand === "function")
assert(typeof GetShardIteratorCommand === "function")
assert(typeof GetStreamCommand === "function")
assert(typeof ListStreamsCommand === "function")
// enums
assert(typeof OriginType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamStatus === "object");
assert(typeof StreamViewType === "object");
// errors
assert(KeyspacesStreamsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetStream === "function")
assert(typeof paginateListStreams === "function")
console.log(`KeyspacesStreams index test passed.`);
