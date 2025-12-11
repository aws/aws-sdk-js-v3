import {
  DescribeStreamCommand,
  DynamoDBStreams,
  DynamoDBStreamsClient,
  DynamoDBStreamsServiceException,
  ExpiredIteratorException,
  GetRecordsCommand,
  GetShardIteratorCommand,
  InternalServerError,
  KeyType,
  LimitExceededException,
  ListStreamsCommand,
  OperationType,
  ResourceNotFoundException,
  ShardFilterType,
  ShardIteratorType,
  StreamStatus,
  StreamViewType,
  TrimmedDataAccessException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DynamoDBStreamsClient === "function");
assert(typeof DynamoDBStreams === "function");
// commands
assert(typeof DescribeStreamCommand === "function");
assert(typeof GetRecordsCommand === "function");
assert(typeof GetShardIteratorCommand === "function");
assert(typeof ListStreamsCommand === "function");
// enums
assert(typeof KeyType === "object");
assert(typeof OperationType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamStatus === "object");
assert(typeof StreamViewType === "object");
// errors
assert(ExpiredIteratorException.prototype instanceof DynamoDBStreamsServiceException);
assert(InternalServerError.prototype instanceof DynamoDBStreamsServiceException);
assert(LimitExceededException.prototype instanceof DynamoDBStreamsServiceException);
assert(ResourceNotFoundException.prototype instanceof DynamoDBStreamsServiceException);
assert(TrimmedDataAccessException.prototype instanceof DynamoDBStreamsServiceException);
assert(DynamoDBStreamsServiceException.prototype instanceof Error);
console.log(`DynamoDBStreams index test passed.`);
