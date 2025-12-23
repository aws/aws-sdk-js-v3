import {
  AssignPublicIp,
  AwsVpcConfiguration$,
  BatchArrayProperties$,
  BatchContainerOverrides$,
  BatchEnvironmentVariable$,
  BatchJobDependency$,
  BatchJobDependencyType,
  BatchResourceRequirement$,
  BatchResourceRequirementType,
  BatchRetryStrategy$,
  CapacityProviderStrategyItem$,
  CloudwatchLogsLogDestination$,
  CloudwatchLogsLogDestinationParameters$,
  ConflictException,
  ConflictException$,
  CreatePipe$,
  CreatePipeCommand,
  CreatePipeRequest$,
  CreatePipeResponse$,
  DeadLetterConfig$,
  DeletePipe$,
  DeletePipeCommand,
  DeletePipeRequest$,
  DeletePipeResponse$,
  DescribePipe$,
  DescribePipeCommand,
  DescribePipeRequest$,
  DescribePipeResponse$,
  DimensionMapping$,
  DimensionValueType,
  DynamoDBStreamStartPosition,
  EcsContainerOverride$,
  EcsEnvironmentFile$,
  EcsEnvironmentFileType,
  EcsEnvironmentVariable$,
  EcsEphemeralStorage$,
  EcsInferenceAcceleratorOverride$,
  EcsResourceRequirement$,
  EcsResourceRequirementType,
  EcsTaskOverride$,
  EpochTimeUnit,
  Filter$,
  FilterCriteria$,
  FirehoseLogDestination$,
  FirehoseLogDestinationParameters$,
  IncludeExecutionDataOption,
  InternalException,
  InternalException$,
  KinesisStreamStartPosition,
  LaunchType,
  ListPipes$,
  ListPipesCommand,
  ListPipesRequest$,
  ListPipesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogLevel,
  MeasureValueType,
  MQBrokerAccessCredentials$,
  MSKAccessCredentials$,
  MSKStartPosition,
  MultiMeasureAttributeMapping$,
  MultiMeasureMapping$,
  NetworkConfiguration$,
  NotFoundException,
  NotFoundException$,
  OnPartialBatchItemFailureStreams,
  paginateListPipes,
  Pipe$,
  PipeEnrichmentHttpParameters$,
  PipeEnrichmentParameters$,
  PipeLogConfiguration$,
  PipeLogConfigurationParameters$,
  Pipes,
  PipesClient,
  PipeSourceActiveMQBrokerParameters$,
  PipeSourceDynamoDBStreamParameters$,
  PipeSourceKinesisStreamParameters$,
  PipeSourceManagedStreamingKafkaParameters$,
  PipeSourceParameters$,
  PipeSourceRabbitMQBrokerParameters$,
  PipeSourceSelfManagedKafkaParameters$,
  PipeSourceSqsQueueParameters$,
  PipesServiceException,
  PipeState,
  PipeTargetBatchJobParameters$,
  PipeTargetCloudWatchLogsParameters$,
  PipeTargetEcsTaskParameters$,
  PipeTargetEventBridgeEventBusParameters$,
  PipeTargetHttpParameters$,
  PipeTargetInvocationType,
  PipeTargetKinesisStreamParameters$,
  PipeTargetLambdaFunctionParameters$,
  PipeTargetParameters$,
  PipeTargetRedshiftDataParameters$,
  PipeTargetSageMakerPipelineParameters$,
  PipeTargetSqsQueueParameters$,
  PipeTargetStateMachineParameters$,
  PipeTargetTimestreamParameters$,
  PlacementConstraint$,
  PlacementConstraintType,
  PlacementStrategy$,
  PlacementStrategyType,
  PropagateTags,
  RequestedPipeState,
  RequestedPipeStateDescribeResponse,
  S3LogDestination$,
  S3LogDestinationParameters$,
  S3OutputFormat,
  SageMakerPipelineParameter$,
  SelfManagedKafkaAccessConfigurationCredentials$,
  SelfManagedKafkaAccessConfigurationVpc$,
  SelfManagedKafkaStartPosition,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SingleMeasureMapping$,
  StartPipe$,
  StartPipeCommand,
  StartPipeRequest$,
  StartPipeResponse$,
  StopPipe$,
  StopPipeCommand,
  StopPipeRequest$,
  StopPipeResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimeFieldType,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdatePipe$,
  UpdatePipeCommand,
  UpdatePipeRequest$,
  UpdatePipeResponse$,
  UpdatePipeSourceActiveMQBrokerParameters$,
  UpdatePipeSourceDynamoDBStreamParameters$,
  UpdatePipeSourceKinesisStreamParameters$,
  UpdatePipeSourceManagedStreamingKafkaParameters$,
  UpdatePipeSourceParameters$,
  UpdatePipeSourceRabbitMQBrokerParameters$,
  UpdatePipeSourceSelfManagedKafkaParameters$,
  UpdatePipeSourceSqsQueueParameters$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PipesClient === "function");
assert(typeof Pipes === "function");
// commands
assert(typeof CreatePipeCommand === "function");
assert(typeof CreatePipe$ === "object");
assert(typeof DeletePipeCommand === "function");
assert(typeof DeletePipe$ === "object");
assert(typeof DescribePipeCommand === "function");
assert(typeof DescribePipe$ === "object");
assert(typeof ListPipesCommand === "function");
assert(typeof ListPipes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartPipeCommand === "function");
assert(typeof StartPipe$ === "object");
assert(typeof StopPipeCommand === "function");
assert(typeof StopPipe$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePipeCommand === "function");
assert(typeof UpdatePipe$ === "object");
// structural schemas
assert(typeof AwsVpcConfiguration$ === "object");
assert(typeof BatchArrayProperties$ === "object");
assert(typeof BatchContainerOverrides$ === "object");
assert(typeof BatchEnvironmentVariable$ === "object");
assert(typeof BatchJobDependency$ === "object");
assert(typeof BatchResourceRequirement$ === "object");
assert(typeof BatchRetryStrategy$ === "object");
assert(typeof CapacityProviderStrategyItem$ === "object");
assert(typeof CloudwatchLogsLogDestination$ === "object");
assert(typeof CloudwatchLogsLogDestinationParameters$ === "object");
assert(typeof CreatePipeRequest$ === "object");
assert(typeof CreatePipeResponse$ === "object");
assert(typeof DeadLetterConfig$ === "object");
assert(typeof DeletePipeRequest$ === "object");
assert(typeof DeletePipeResponse$ === "object");
assert(typeof DescribePipeRequest$ === "object");
assert(typeof DescribePipeResponse$ === "object");
assert(typeof DimensionMapping$ === "object");
assert(typeof EcsContainerOverride$ === "object");
assert(typeof EcsEnvironmentFile$ === "object");
assert(typeof EcsEnvironmentVariable$ === "object");
assert(typeof EcsEphemeralStorage$ === "object");
assert(typeof EcsInferenceAcceleratorOverride$ === "object");
assert(typeof EcsResourceRequirement$ === "object");
assert(typeof EcsTaskOverride$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterCriteria$ === "object");
assert(typeof FirehoseLogDestination$ === "object");
assert(typeof FirehoseLogDestinationParameters$ === "object");
assert(typeof ListPipesRequest$ === "object");
assert(typeof ListPipesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MQBrokerAccessCredentials$ === "object");
assert(typeof MSKAccessCredentials$ === "object");
assert(typeof MultiMeasureAttributeMapping$ === "object");
assert(typeof MultiMeasureMapping$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof Pipe$ === "object");
assert(typeof PipeEnrichmentHttpParameters$ === "object");
assert(typeof PipeEnrichmentParameters$ === "object");
assert(typeof PipeLogConfiguration$ === "object");
assert(typeof PipeLogConfigurationParameters$ === "object");
assert(typeof PipeSourceActiveMQBrokerParameters$ === "object");
assert(typeof PipeSourceDynamoDBStreamParameters$ === "object");
assert(typeof PipeSourceKinesisStreamParameters$ === "object");
assert(typeof PipeSourceManagedStreamingKafkaParameters$ === "object");
assert(typeof PipeSourceParameters$ === "object");
assert(typeof PipeSourceRabbitMQBrokerParameters$ === "object");
assert(typeof PipeSourceSelfManagedKafkaParameters$ === "object");
assert(typeof PipeSourceSqsQueueParameters$ === "object");
assert(typeof PipeTargetBatchJobParameters$ === "object");
assert(typeof PipeTargetCloudWatchLogsParameters$ === "object");
assert(typeof PipeTargetEcsTaskParameters$ === "object");
assert(typeof PipeTargetEventBridgeEventBusParameters$ === "object");
assert(typeof PipeTargetHttpParameters$ === "object");
assert(typeof PipeTargetKinesisStreamParameters$ === "object");
assert(typeof PipeTargetLambdaFunctionParameters$ === "object");
assert(typeof PipeTargetParameters$ === "object");
assert(typeof PipeTargetRedshiftDataParameters$ === "object");
assert(typeof PipeTargetSageMakerPipelineParameters$ === "object");
assert(typeof PipeTargetSqsQueueParameters$ === "object");
assert(typeof PipeTargetStateMachineParameters$ === "object");
assert(typeof PipeTargetTimestreamParameters$ === "object");
assert(typeof PlacementConstraint$ === "object");
assert(typeof PlacementStrategy$ === "object");
assert(typeof S3LogDestination$ === "object");
assert(typeof S3LogDestinationParameters$ === "object");
assert(typeof SageMakerPipelineParameter$ === "object");
assert(typeof SelfManagedKafkaAccessConfigurationCredentials$ === "object");
assert(typeof SelfManagedKafkaAccessConfigurationVpc$ === "object");
assert(typeof SingleMeasureMapping$ === "object");
assert(typeof StartPipeRequest$ === "object");
assert(typeof StartPipeResponse$ === "object");
assert(typeof StopPipeRequest$ === "object");
assert(typeof StopPipeResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdatePipeRequest$ === "object");
assert(typeof UpdatePipeResponse$ === "object");
assert(typeof UpdatePipeSourceActiveMQBrokerParameters$ === "object");
assert(typeof UpdatePipeSourceDynamoDBStreamParameters$ === "object");
assert(typeof UpdatePipeSourceKinesisStreamParameters$ === "object");
assert(typeof UpdatePipeSourceManagedStreamingKafkaParameters$ === "object");
assert(typeof UpdatePipeSourceParameters$ === "object");
assert(typeof UpdatePipeSourceRabbitMQBrokerParameters$ === "object");
assert(typeof UpdatePipeSourceSelfManagedKafkaParameters$ === "object");
assert(typeof UpdatePipeSourceSqsQueueParameters$ === "object");
assert(typeof ValidationExceptionField$ === "object");
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
assert(typeof ConflictException$ === "object");
assert(InternalException.prototype instanceof PipesServiceException);
assert(typeof InternalException$ === "object");
assert(NotFoundException.prototype instanceof PipesServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PipesServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PipesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PipesServiceException);
assert(typeof ValidationException$ === "object");
assert(PipesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPipes === "function");
console.log(`Pipes index test passed.`);
