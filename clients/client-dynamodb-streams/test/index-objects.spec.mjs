import {
  DescribeStreamCommand,
  DynamoDBStreams,
  DynamoDBStreamsClient,
  DynamoDBStreamsServiceException,
  GetRecordsCommand,
  GetShardIteratorCommand,
  KeyType,
  ListStreamsCommand,
  OperationType,
  ShardFilterType,
  ShardIteratorType,
  StreamStatus,
  StreamViewType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DynamoDBStreamsClient === "function")
assert(typeof DynamoDBStreams === "function")
// commands
assert(typeof DescribeStreamCommand === "function")
assert(typeof GetRecordsCommand === "function")
assert(typeof GetShardIteratorCommand === "function")
assert(typeof ListStreamsCommand === "function")
// enums
assert(typeof KeyType === "object");
assert(typeof OperationType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamStatus === "object");
assert(typeof StreamViewType === "object");
// errors
assert(DynamoDBStreamsServiceException.prototype instanceof Error)
console.log(`DynamoDBStreams index test passed.`);
