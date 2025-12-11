import {
  AssignPublicIp,
  BatchJobDependencyType,
  BatchResourceRequirementType,
  ConflictException,
  CreatePipeCommand,
  DeletePipeCommand,
  DescribePipeCommand,
  DimensionValueType,
  DynamoDBStreamStartPosition,
  EcsEnvironmentFileType,
  EcsResourceRequirementType,
  EpochTimeUnit,
  IncludeExecutionDataOption,
  InternalException,
  KinesisStreamStartPosition,
  LaunchType,
  ListPipesCommand,
  ListTagsForResourceCommand,
  LogLevel,
  MSKStartPosition,
  MeasureValueType,
  NotFoundException,
  OnPartialBatchItemFailureStreams,
  PipeState,
  PipeTargetInvocationType,
  Pipes,
  PipesClient,
  PipesServiceException,
  PlacementConstraintType,
  PlacementStrategyType,
  PropagateTags,
  RequestedPipeState,
  RequestedPipeStateDescribeResponse,
  S3OutputFormat,
  SelfManagedKafkaStartPosition,
  ServiceQuotaExceededException,
  StartPipeCommand,
  StopPipeCommand,
  TagResourceCommand,
  ThrottlingException,
  TimeFieldType,
  UntagResourceCommand,
  UpdatePipeCommand,
  ValidationException,
  paginateListPipes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PipesClient === "function");
assert(typeof Pipes === "function");
// commands
assert(typeof CreatePipeCommand === "function");
assert(typeof DeletePipeCommand === "function");
assert(typeof DescribePipeCommand === "function");
assert(typeof ListPipesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartPipeCommand === "function");
assert(typeof StopPipeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdatePipeCommand === "function");
// enums
assert(typeof AssignPublicIp === "object");
assert(typeof BatchJobDependencyType === "object");
assert(typeof BatchResourceRequirementType === "object");
assert(typeof DimensionValueType === "object");
assert(typeof DynamoDBStreamStartPosition === "object");
assert(typeof EcsEnvironmentFileType === "object");
assert(typeof EcsResourceRequirementType === "object");
assert(typeof EpochTimeUnit === "object");
assert(typeof IncludeExecutionDataOption === "object");
assert(typeof KinesisStreamStartPosition === "object");
assert(typeof LaunchType === "object");
assert(typeof LogLevel === "object");
assert(typeof MeasureValueType === "object");
assert(typeof MSKStartPosition === "object");
assert(typeof OnPartialBatchItemFailureStreams === "object");
assert(typeof PipeState === "object");
assert(typeof PipeTargetInvocationType === "object");
assert(typeof PlacementConstraintType === "object");
assert(typeof PlacementStrategyType === "object");
assert(typeof PropagateTags === "object");
assert(typeof RequestedPipeState === "object");
assert(typeof RequestedPipeStateDescribeResponse === "object");
assert(typeof S3OutputFormat === "object");
assert(typeof SelfManagedKafkaStartPosition === "object");
assert(typeof TimeFieldType === "object");
// errors
assert(ConflictException.prototype instanceof PipesServiceException);
assert(InternalException.prototype instanceof PipesServiceException);
assert(NotFoundException.prototype instanceof PipesServiceException);
assert(ServiceQuotaExceededException.prototype instanceof PipesServiceException);
assert(ThrottlingException.prototype instanceof PipesServiceException);
assert(ValidationException.prototype instanceof PipesServiceException);
assert(PipesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPipes === "function");
console.log(`Pipes index test passed.`);
