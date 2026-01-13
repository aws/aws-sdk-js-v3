import {
  _Record$,
  _Stream$,
  AttributeValue$,
  DescribeStream$,
  DescribeStreamCommand,
  DescribeStreamInput$,
  DescribeStreamOutput$,
  DynamoDBStreams,
  DynamoDBStreamsClient,
  DynamoDBStreamsServiceException,
  ExpiredIteratorException,
  ExpiredIteratorException$,
  GetRecords$,
  GetRecordsCommand,
  GetRecordsInput$,
  GetRecordsOutput$,
  GetShardIterator$,
  GetShardIteratorCommand,
  GetShardIteratorInput$,
  GetShardIteratorOutput$,
  Identity$,
  InternalServerError,
  InternalServerError$,
  KeySchemaElement$,
  KeyType,
  LimitExceededException,
  LimitExceededException$,
  ListStreams$,
  ListStreamsCommand,
  ListStreamsInput$,
  ListStreamsOutput$,
  OperationType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SequenceNumberRange$,
  Shard$,
  ShardFilter$,
  ShardFilterType,
  ShardIteratorType,
  StreamDescription$,
  StreamRecord$,
  StreamStatus,
  StreamViewType,
  TrimmedDataAccessException,
  TrimmedDataAccessException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DynamoDBStreamsClient === "function");
assert(typeof DynamoDBStreams === "function");
// commands
assert(typeof DescribeStreamCommand === "function");
assert(typeof DescribeStream$ === "object");
assert(typeof GetRecordsCommand === "function");
assert(typeof GetRecords$ === "object");
assert(typeof GetShardIteratorCommand === "function");
assert(typeof GetShardIterator$ === "object");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListStreams$ === "object");
// structural schemas
assert(typeof AttributeValue$ === "object");
assert(typeof DescribeStreamInput$ === "object");
assert(typeof DescribeStreamOutput$ === "object");
assert(typeof GetRecordsInput$ === "object");
assert(typeof GetRecordsOutput$ === "object");
assert(typeof GetShardIteratorInput$ === "object");
assert(typeof GetShardIteratorOutput$ === "object");
assert(typeof Identity$ === "object");
assert(typeof KeySchemaElement$ === "object");
assert(typeof ListStreamsInput$ === "object");
assert(typeof ListStreamsOutput$ === "object");
assert(typeof _Record$ === "object");
assert(typeof SequenceNumberRange$ === "object");
assert(typeof Shard$ === "object");
assert(typeof ShardFilter$ === "object");
assert(typeof _Stream$ === "object");
assert(typeof StreamDescription$ === "object");
assert(typeof StreamRecord$ === "object");
// enums
assert(typeof KeyType === "object");
assert(typeof OperationType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamStatus === "object");
assert(typeof StreamViewType === "object");
// errors
assert(ExpiredIteratorException.prototype instanceof DynamoDBStreamsServiceException);
assert(typeof ExpiredIteratorException$ === "object");
assert(InternalServerError.prototype instanceof DynamoDBStreamsServiceException);
assert(typeof InternalServerError$ === "object");
assert(LimitExceededException.prototype instanceof DynamoDBStreamsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DynamoDBStreamsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TrimmedDataAccessException.prototype instanceof DynamoDBStreamsServiceException);
assert(typeof TrimmedDataAccessException$ === "object");
assert(DynamoDBStreamsServiceException.prototype instanceof Error);
console.log(`DynamoDBStreams index test passed.`);
