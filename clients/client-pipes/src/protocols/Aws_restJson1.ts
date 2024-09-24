// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreatePipeCommandInput, CreatePipeCommandOutput } from "../commands/CreatePipeCommand";
import { DeletePipeCommandInput, DeletePipeCommandOutput } from "../commands/DeletePipeCommand";
import { DescribePipeCommandInput, DescribePipeCommandOutput } from "../commands/DescribePipeCommand";
import { ListPipesCommandInput, ListPipesCommandOutput } from "../commands/ListPipesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartPipeCommandInput, StartPipeCommandOutput } from "../commands/StartPipeCommand";
import { StopPipeCommandInput, StopPipeCommandOutput } from "../commands/StopPipeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdatePipeCommandInput, UpdatePipeCommandOutput } from "../commands/UpdatePipeCommand";
import {
  AwsVpcConfiguration,
  BatchArrayProperties,
  BatchContainerOverrides,
  BatchEnvironmentVariable,
  BatchJobDependency,
  BatchResourceRequirement,
  BatchRetryStrategy,
  CapacityProviderStrategyItem,
  CloudwatchLogsLogDestinationParameters,
  ConflictException,
  DeadLetterConfig,
  DimensionMapping,
  EcsContainerOverride,
  EcsEnvironmentFile,
  EcsEnvironmentVariable,
  EcsEphemeralStorage,
  EcsInferenceAcceleratorOverride,
  EcsResourceRequirement,
  EcsTaskOverride,
  Filter,
  FilterCriteria,
  FirehoseLogDestinationParameters,
  IncludeExecutionDataOption,
  InternalException,
  MQBrokerAccessCredentials,
  MSKAccessCredentials,
  MultiMeasureAttributeMapping,
  MultiMeasureMapping,
  NetworkConfiguration,
  NotFoundException,
  Pipe,
  PipeEnrichmentHttpParameters,
  PipeEnrichmentParameters,
  PipeLogConfigurationParameters,
  PipeSourceActiveMQBrokerParameters,
  PipeSourceDynamoDBStreamParameters,
  PipeSourceKinesisStreamParameters,
  PipeSourceManagedStreamingKafkaParameters,
  PipeSourceParameters,
  PipeSourceRabbitMQBrokerParameters,
  PipeSourceSelfManagedKafkaParameters,
  PipeSourceSqsQueueParameters,
  PipeTargetBatchJobParameters,
  PipeTargetCloudWatchLogsParameters,
  PipeTargetEcsTaskParameters,
  PipeTargetEventBridgeEventBusParameters,
  PipeTargetHttpParameters,
  PipeTargetKinesisStreamParameters,
  PipeTargetLambdaFunctionParameters,
  PipeTargetParameters,
  PipeTargetRedshiftDataParameters,
  PipeTargetSageMakerPipelineParameters,
  PipeTargetSqsQueueParameters,
  PipeTargetStateMachineParameters,
  PipeTargetTimestreamParameters,
  PlacementConstraint,
  PlacementStrategy,
  S3LogDestinationParameters,
  SageMakerPipelineParameter,
  SelfManagedKafkaAccessConfigurationCredentials,
  SelfManagedKafkaAccessConfigurationVpc,
  ServiceQuotaExceededException,
  SingleMeasureMapping,
  Tag,
  ThrottlingException,
  UpdatePipeSourceActiveMQBrokerParameters,
  UpdatePipeSourceDynamoDBStreamParameters,
  UpdatePipeSourceKinesisStreamParameters,
  UpdatePipeSourceManagedStreamingKafkaParameters,
  UpdatePipeSourceParameters,
  UpdatePipeSourceRabbitMQBrokerParameters,
  UpdatePipeSourceSelfManagedKafkaParameters,
  UpdatePipeSourceSqsQueueParameters,
  ValidationException,
} from "../models/models_0";
import { PipesServiceException as __BaseException } from "../models/PipesServiceException";

/**
 * serializeAws_restJson1CreatePipeCommand
 */
export const se_CreatePipeCommand = async (
  input: CreatePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/pipes/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DesiredState: [],
      Enrichment: [],
      EnrichmentParameters: (_) => _json(_),
      KmsKeyIdentifier: [],
      LogConfiguration: (_) => _json(_),
      RoleArn: [],
      Source: [],
      SourceParameters: (_) => se_PipeSourceParameters(_, context),
      Tags: (_) => _json(_),
      Target: [],
      TargetParameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePipeCommand
 */
export const se_DeletePipeCommand = async (
  input: DeletePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/pipes/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePipeCommand
 */
export const se_DescribePipeCommand = async (
  input: DescribePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/pipes/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPipesCommand
 */
export const se_ListPipesCommand = async (
  input: ListPipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/pipes");
  const query: any = map({
    [_NP]: [, input[_NP]!],
    [_DS]: [, input[_DS]!],
    [_CS]: [, input[_CS]!],
    [_SP]: [, input[_SP]!],
    [_TP]: [, input[_TP]!],
    [_NT]: [, input[_NT]!],
    [_L]: [() => input.Limit !== void 0, () => input[_L]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartPipeCommand
 */
export const se_StartPipeCommand = async (
  input: StartPipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/pipes/{Name}/start");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopPipeCommand
 */
export const se_StopPipeCommand = async (
  input: StopPipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/pipes/{Name}/stop");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePipeCommand
 */
export const se_UpdatePipeCommand = async (
  input: UpdatePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/pipes/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DesiredState: [],
      Enrichment: [],
      EnrichmentParameters: (_) => _json(_),
      KmsKeyIdentifier: [],
      LogConfiguration: (_) => _json(_),
      RoleArn: [],
      SourceParameters: (_) => _json(_),
      Target: [],
      TargetParameters: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreatePipeCommand
 */
export const de_CreatePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentState: __expectString,
    DesiredState: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePipeCommand
 */
export const de_DeletePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentState: __expectString,
    DesiredState: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePipeCommand
 */
export const de_DescribePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentState: __expectString,
    Description: __expectString,
    DesiredState: __expectString,
    Enrichment: __expectString,
    EnrichmentParameters: _json,
    KmsKeyIdentifier: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogConfiguration: _json,
    Name: __expectString,
    RoleArn: __expectString,
    Source: __expectString,
    SourceParameters: (_) => de_PipeSourceParameters(_, context),
    StateReason: __expectString,
    Tags: _json,
    Target: __expectString,
    TargetParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPipesCommand
 */
export const de_ListPipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Pipes: (_) => de_PipeList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartPipeCommand
 */
export const de_StartPipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentState: __expectString,
    DesiredState: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopPipeCommand
 */
export const de_StopPipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentState: __expectString,
    DesiredState: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipeCommand
 */
export const de_UpdatePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentState: __expectString,
    DesiredState: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.pipes#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pipes#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AwsVpcConfiguration omitted.

// se_BatchArrayProperties omitted.

// se_BatchContainerOverrides omitted.

// se_BatchDependsOn omitted.

// se_BatchEnvironmentVariable omitted.

// se_BatchEnvironmentVariableList omitted.

// se_BatchJobDependency omitted.

// se_BatchParametersMap omitted.

// se_BatchResourceRequirement omitted.

// se_BatchResourceRequirementsList omitted.

// se_BatchRetryStrategy omitted.

// se_CapacityProviderStrategy omitted.

// se_CapacityProviderStrategyItem omitted.

// se_CloudwatchLogsLogDestinationParameters omitted.

// se_DeadLetterConfig omitted.

// se_DimensionMapping omitted.

// se_DimensionMappings omitted.

// se_EcsContainerOverride omitted.

// se_EcsContainerOverrideList omitted.

// se_EcsEnvironmentFile omitted.

// se_EcsEnvironmentFileList omitted.

// se_EcsEnvironmentVariable omitted.

// se_EcsEnvironmentVariableList omitted.

// se_EcsEphemeralStorage omitted.

// se_EcsInferenceAcceleratorOverride omitted.

// se_EcsInferenceAcceleratorOverrideList omitted.

// se_EcsResourceRequirement omitted.

// se_EcsResourceRequirementsList omitted.

// se_EcsTaskOverride omitted.

// se_EventBridgeEventResourceList omitted.

// se_Filter omitted.

// se_FilterCriteria omitted.

// se_FilterList omitted.

// se_FirehoseLogDestinationParameters omitted.

// se_HeaderParametersMap omitted.

// se_IncludeExecutionData omitted.

// se_KafkaBootstrapServers omitted.

// se_MQBrokerAccessCredentials omitted.

// se_MSKAccessCredentials omitted.

// se_MultiMeasureAttributeMapping omitted.

// se_MultiMeasureAttributeMappings omitted.

// se_MultiMeasureMapping omitted.

// se_MultiMeasureMappings omitted.

// se_NetworkConfiguration omitted.

// se_PathParameterList omitted.

// se_PipeEnrichmentHttpParameters omitted.

// se_PipeEnrichmentParameters omitted.

// se_PipeLogConfigurationParameters omitted.

// se_PipeSourceActiveMQBrokerParameters omitted.

// se_PipeSourceDynamoDBStreamParameters omitted.

/**
 * serializeAws_restJson1PipeSourceKinesisStreamParameters
 */
const se_PipeSourceKinesisStreamParameters = (
  input: PipeSourceKinesisStreamParameters,
  context: __SerdeContext
): any => {
  return take(input, {
    BatchSize: [],
    DeadLetterConfig: _json,
    MaximumBatchingWindowInSeconds: [],
    MaximumRecordAgeInSeconds: [],
    MaximumRetryAttempts: [],
    OnPartialBatchItemFailure: [],
    ParallelizationFactor: [],
    StartingPosition: [],
    StartingPositionTimestamp: (_) => _.getTime() / 1_000,
  });
};

// se_PipeSourceManagedStreamingKafkaParameters omitted.

/**
 * serializeAws_restJson1PipeSourceParameters
 */
const se_PipeSourceParameters = (input: PipeSourceParameters, context: __SerdeContext): any => {
  return take(input, {
    ActiveMQBrokerParameters: _json,
    DynamoDBStreamParameters: _json,
    FilterCriteria: _json,
    KinesisStreamParameters: (_) => se_PipeSourceKinesisStreamParameters(_, context),
    ManagedStreamingKafkaParameters: _json,
    RabbitMQBrokerParameters: _json,
    SelfManagedKafkaParameters: _json,
    SqsQueueParameters: _json,
  });
};

// se_PipeSourceRabbitMQBrokerParameters omitted.

// se_PipeSourceSelfManagedKafkaParameters omitted.

// se_PipeSourceSqsQueueParameters omitted.

// se_PipeTargetBatchJobParameters omitted.

// se_PipeTargetCloudWatchLogsParameters omitted.

// se_PipeTargetEcsTaskParameters omitted.

// se_PipeTargetEventBridgeEventBusParameters omitted.

// se_PipeTargetHttpParameters omitted.

// se_PipeTargetKinesisStreamParameters omitted.

// se_PipeTargetLambdaFunctionParameters omitted.

// se_PipeTargetParameters omitted.

// se_PipeTargetRedshiftDataParameters omitted.

// se_PipeTargetSageMakerPipelineParameters omitted.

// se_PipeTargetSqsQueueParameters omitted.

// se_PipeTargetStateMachineParameters omitted.

// se_PipeTargetTimestreamParameters omitted.

// se_PlacementConstraint omitted.

// se_PlacementConstraints omitted.

// se_PlacementStrategies omitted.

// se_PlacementStrategy omitted.

// se_QueryStringParametersMap omitted.

// se_S3LogDestinationParameters omitted.

// se_SageMakerPipelineParameter omitted.

// se_SageMakerPipelineParameterList omitted.

// se_SecurityGroupIds omitted.

// se_SecurityGroups omitted.

// se_SelfManagedKafkaAccessConfigurationCredentials omitted.

// se_SelfManagedKafkaAccessConfigurationVpc omitted.

// se_SingleMeasureMapping omitted.

// se_SingleMeasureMappings omitted.

// se_Sqls omitted.

// se_StringList omitted.

// se_SubnetIds omitted.

// se_Subnets omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TagMap omitted.

// se_UpdatePipeSourceActiveMQBrokerParameters omitted.

// se_UpdatePipeSourceDynamoDBStreamParameters omitted.

// se_UpdatePipeSourceKinesisStreamParameters omitted.

// se_UpdatePipeSourceManagedStreamingKafkaParameters omitted.

// se_UpdatePipeSourceParameters omitted.

// se_UpdatePipeSourceRabbitMQBrokerParameters omitted.

// se_UpdatePipeSourceSelfManagedKafkaParameters omitted.

// se_UpdatePipeSourceSqsQueueParameters omitted.

// de_AwsVpcConfiguration omitted.

// de_BatchArrayProperties omitted.

// de_BatchContainerOverrides omitted.

// de_BatchDependsOn omitted.

// de_BatchEnvironmentVariable omitted.

// de_BatchEnvironmentVariableList omitted.

// de_BatchJobDependency omitted.

// de_BatchParametersMap omitted.

// de_BatchResourceRequirement omitted.

// de_BatchResourceRequirementsList omitted.

// de_BatchRetryStrategy omitted.

// de_CapacityProviderStrategy omitted.

// de_CapacityProviderStrategyItem omitted.

// de_CloudwatchLogsLogDestination omitted.

// de_DeadLetterConfig omitted.

// de_DimensionMapping omitted.

// de_DimensionMappings omitted.

// de_EcsContainerOverride omitted.

// de_EcsContainerOverrideList omitted.

// de_EcsEnvironmentFile omitted.

// de_EcsEnvironmentFileList omitted.

// de_EcsEnvironmentVariable omitted.

// de_EcsEnvironmentVariableList omitted.

// de_EcsEphemeralStorage omitted.

// de_EcsInferenceAcceleratorOverride omitted.

// de_EcsInferenceAcceleratorOverrideList omitted.

// de_EcsResourceRequirement omitted.

// de_EcsResourceRequirementsList omitted.

// de_EcsTaskOverride omitted.

// de_EventBridgeEventResourceList omitted.

// de_Filter omitted.

// de_FilterCriteria omitted.

// de_FilterList omitted.

// de_FirehoseLogDestination omitted.

// de_HeaderParametersMap omitted.

// de_IncludeExecutionData omitted.

// de_KafkaBootstrapServers omitted.

// de_MQBrokerAccessCredentials omitted.

// de_MSKAccessCredentials omitted.

// de_MultiMeasureAttributeMapping omitted.

// de_MultiMeasureAttributeMappings omitted.

// de_MultiMeasureMapping omitted.

// de_MultiMeasureMappings omitted.

// de_NetworkConfiguration omitted.

// de_PathParameterList omitted.

/**
 * deserializeAws_restJson1Pipe
 */
const de_Pipe = (output: any, context: __SerdeContext): Pipe => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentState: __expectString,
    DesiredState: __expectString,
    Enrichment: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Source: __expectString,
    StateReason: __expectString,
    Target: __expectString,
  }) as any;
};

// de_PipeEnrichmentHttpParameters omitted.

// de_PipeEnrichmentParameters omitted.

/**
 * deserializeAws_restJson1PipeList
 */
const de_PipeList = (output: any, context: __SerdeContext): Pipe[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Pipe(entry, context);
    });
  return retVal;
};

// de_PipeLogConfiguration omitted.

// de_PipeSourceActiveMQBrokerParameters omitted.

// de_PipeSourceDynamoDBStreamParameters omitted.

/**
 * deserializeAws_restJson1PipeSourceKinesisStreamParameters
 */
const de_PipeSourceKinesisStreamParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceKinesisStreamParameters => {
  return take(output, {
    BatchSize: __expectInt32,
    DeadLetterConfig: _json,
    MaximumBatchingWindowInSeconds: __expectInt32,
    MaximumRecordAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
    OnPartialBatchItemFailure: __expectString,
    ParallelizationFactor: __expectInt32,
    StartingPosition: __expectString,
    StartingPositionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_PipeSourceManagedStreamingKafkaParameters omitted.

/**
 * deserializeAws_restJson1PipeSourceParameters
 */
const de_PipeSourceParameters = (output: any, context: __SerdeContext): PipeSourceParameters => {
  return take(output, {
    ActiveMQBrokerParameters: _json,
    DynamoDBStreamParameters: _json,
    FilterCriteria: _json,
    KinesisStreamParameters: (_: any) => de_PipeSourceKinesisStreamParameters(_, context),
    ManagedStreamingKafkaParameters: _json,
    RabbitMQBrokerParameters: _json,
    SelfManagedKafkaParameters: _json,
    SqsQueueParameters: _json,
  }) as any;
};

// de_PipeSourceRabbitMQBrokerParameters omitted.

// de_PipeSourceSelfManagedKafkaParameters omitted.

// de_PipeSourceSqsQueueParameters omitted.

// de_PipeTargetBatchJobParameters omitted.

// de_PipeTargetCloudWatchLogsParameters omitted.

// de_PipeTargetEcsTaskParameters omitted.

// de_PipeTargetEventBridgeEventBusParameters omitted.

// de_PipeTargetHttpParameters omitted.

// de_PipeTargetKinesisStreamParameters omitted.

// de_PipeTargetLambdaFunctionParameters omitted.

// de_PipeTargetParameters omitted.

// de_PipeTargetRedshiftDataParameters omitted.

// de_PipeTargetSageMakerPipelineParameters omitted.

// de_PipeTargetSqsQueueParameters omitted.

// de_PipeTargetStateMachineParameters omitted.

// de_PipeTargetTimestreamParameters omitted.

// de_PlacementConstraint omitted.

// de_PlacementConstraints omitted.

// de_PlacementStrategies omitted.

// de_PlacementStrategy omitted.

// de_QueryStringParametersMap omitted.

// de_S3LogDestination omitted.

// de_SageMakerPipelineParameter omitted.

// de_SageMakerPipelineParameterList omitted.

// de_SecurityGroupIds omitted.

// de_SecurityGroups omitted.

// de_SelfManagedKafkaAccessConfigurationCredentials omitted.

// de_SelfManagedKafkaAccessConfigurationVpc omitted.

// de_SingleMeasureMapping omitted.

// de_SingleMeasureMappings omitted.

// de_Sqls omitted.

// de_StringList omitted.

// de_SubnetIds omitted.

// de_Subnets omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _CS = "CurrentState";
const _DS = "DesiredState";
const _L = "Limit";
const _NP = "NamePrefix";
const _NT = "NextToken";
const _SP = "SourcePrefix";
const _TP = "TargetPrefix";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
