// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  ConflictException,
  DeadLetterConfig,
  EcsContainerOverride,
  EcsEnvironmentFile,
  EcsEnvironmentVariable,
  EcsEphemeralStorage,
  EcsInferenceAcceleratorOverride,
  EcsResourceRequirement,
  EcsTaskOverride,
  Filter,
  FilterCriteria,
  InternalException,
  MQBrokerAccessCredentials,
  MSKAccessCredentials,
  NetworkConfiguration,
  NotFoundException,
  Pipe,
  PipeEnrichmentHttpParameters,
  PipeEnrichmentParameters,
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
  PlacementConstraint,
  PlacementStrategy,
  SageMakerPipelineParameter,
  SelfManagedKafkaAccessConfigurationCredentials,
  SelfManagedKafkaAccessConfigurationVpc,
  ServiceQuotaExceededException,
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
  ValidationExceptionField,
} from "../models/models_0";
import { PipesServiceException as __BaseException } from "../models/PipesServiceException";

/**
 * serializeAws_restJson1CreatePipeCommand
 */
export const se_CreatePipeCommand = async (
  input: CreatePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/pipes/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.Enrichment != null && { Enrichment: input.Enrichment }),
    ...(input.EnrichmentParameters != null && {
      EnrichmentParameters: se_PipeEnrichmentParameters(input.EnrichmentParameters, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.SourceParameters != null && {
      SourceParameters: se_PipeSourceParameters(input.SourceParameters, context),
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TargetParameters != null && {
      TargetParameters: se_PipeTargetParameters(input.TargetParameters, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeletePipeCommand
 */
export const se_DeletePipeCommand = async (
  input: DeletePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/pipes/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribePipeCommand
 */
export const se_DescribePipeCommand = async (
  input: DescribePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/pipes/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListPipesCommand
 */
export const se_ListPipesCommand = async (
  input: ListPipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/pipes";
  const query: any = map({
    NamePrefix: [, input.NamePrefix!],
    DesiredState: [, input.DesiredState!],
    CurrentState: [, input.CurrentState!],
    SourcePrefix: [, input.SourcePrefix!],
    TargetPrefix: [, input.TargetPrefix!],
    NextToken: [, input.NextToken!],
    Limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartPipeCommand
 */
export const se_StartPipeCommand = async (
  input: StartPipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/pipes/{Name}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopPipeCommand
 */
export const se_StopPipeCommand = async (
  input: StopPipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/pipes/{Name}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePipeCommand
 */
export const se_UpdatePipeCommand = async (
  input: UpdatePipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/pipes/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.Enrichment != null && { Enrichment: input.Enrichment }),
    ...(input.EnrichmentParameters != null && {
      EnrichmentParameters: se_PipeEnrichmentParameters(input.EnrichmentParameters, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceParameters != null && {
      SourceParameters: se_UpdatePipeSourceParameters(input.SourceParameters, context),
    }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TargetParameters != null && {
      TargetParameters: se_PipeTargetParameters(input.TargetParameters, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreatePipeCommand
 */
export const de_CreatePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CurrentState != null) {
    contents.CurrentState = __expectString(data.CurrentState);
  }
  if (data.DesiredState != null) {
    contents.DesiredState = __expectString(data.DesiredState);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePipeCommandError
 */
const de_CreatePipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipeCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeletePipeCommand
 */
export const de_DeletePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CurrentState != null) {
    contents.CurrentState = __expectString(data.CurrentState);
  }
  if (data.DesiredState != null) {
    contents.DesiredState = __expectString(data.DesiredState);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeletePipeCommandError
 */
const de_DeletePipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipeCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribePipeCommand
 */
export const de_DescribePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CurrentState != null) {
    contents.CurrentState = __expectString(data.CurrentState);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.DesiredState != null) {
    contents.DesiredState = __expectString(data.DesiredState);
  }
  if (data.Enrichment != null) {
    contents.Enrichment = __expectString(data.Enrichment);
  }
  if (data.EnrichmentParameters != null) {
    contents.EnrichmentParameters = de_PipeEnrichmentParameters(data.EnrichmentParameters, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RoleArn != null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  if (data.Source != null) {
    contents.Source = __expectString(data.Source);
  }
  if (data.SourceParameters != null) {
    contents.SourceParameters = de_PipeSourceParameters(data.SourceParameters, context);
  }
  if (data.StateReason != null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.Target != null) {
    contents.Target = __expectString(data.Target);
  }
  if (data.TargetParameters != null) {
    contents.TargetParameters = de_PipeTargetParameters(data.TargetParameters, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePipeCommandError
 */
const de_DescribePipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPipesCommand
 */
export const de_ListPipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPipesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Pipes != null) {
    contents.Pipes = de_PipeList(data.Pipes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPipesCommandError
 */
const de_ListPipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartPipeCommand
 */
export const de_StartPipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartPipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CurrentState != null) {
    contents.CurrentState = __expectString(data.CurrentState);
  }
  if (data.DesiredState != null) {
    contents.DesiredState = __expectString(data.DesiredState);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartPipeCommandError
 */
const de_StartPipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipeCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopPipeCommand
 */
export const de_StopPipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopPipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CurrentState != null) {
    contents.CurrentState = __expectString(data.CurrentState);
  }
  if (data.DesiredState != null) {
    contents.DesiredState = __expectString(data.DesiredState);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopPipeCommandError
 */
const de_StopPipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipeCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePipeCommand
 */
export const de_UpdatePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CurrentState != null) {
    contents.CurrentState = __expectString(data.CurrentState);
  }
  if (data.DesiredState != null) {
    contents.DesiredState = __expectString(data.DesiredState);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipeCommandError
 */
const de_UpdatePipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipeCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
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
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
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
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
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
  if (data.fieldList != null) {
    contents.fieldList = de_ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AwsVpcConfiguration
 */
const se_AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AssignPublicIp != null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups != null && { SecurityGroups: se_SecurityGroups(input.SecurityGroups, context) }),
    ...(input.Subnets != null && { Subnets: se_Subnets(input.Subnets, context) }),
  };
};

/**
 * serializeAws_restJson1BatchArrayProperties
 */
const se_BatchArrayProperties = (input: BatchArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.Size != null && { Size: input.Size }),
  };
};

/**
 * serializeAws_restJson1BatchContainerOverrides
 */
const se_BatchContainerOverrides = (input: BatchContainerOverrides, context: __SerdeContext): any => {
  return {
    ...(input.Command != null && { Command: se_StringList(input.Command, context) }),
    ...(input.Environment != null && { Environment: se_BatchEnvironmentVariableList(input.Environment, context) }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.ResourceRequirements != null && {
      ResourceRequirements: se_BatchResourceRequirementsList(input.ResourceRequirements, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchDependsOn
 */
const se_BatchDependsOn = (input: BatchJobDependency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchJobDependency(entry, context);
    });
};

/**
 * serializeAws_restJson1BatchEnvironmentVariable
 */
const se_BatchEnvironmentVariable = (input: BatchEnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1BatchEnvironmentVariableList
 */
const se_BatchEnvironmentVariableList = (input: BatchEnvironmentVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchEnvironmentVariable(entry, context);
    });
};

/**
 * serializeAws_restJson1BatchJobDependency
 */
const se_BatchJobDependency = (input: BatchJobDependency, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1BatchParametersMap
 */
const se_BatchParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1BatchResourceRequirement
 */
const se_BatchResourceRequirement = (input: BatchResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1BatchResourceRequirementsList
 */
const se_BatchResourceRequirementsList = (input: BatchResourceRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchResourceRequirement(entry, context);
    });
};

/**
 * serializeAws_restJson1BatchRetryStrategy
 */
const se_BatchRetryStrategy = (input: BatchRetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Attempts != null && { Attempts: input.Attempts }),
  };
};

/**
 * serializeAws_restJson1CapacityProviderStrategy
 */
const se_CapacityProviderStrategy = (input: CapacityProviderStrategyItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CapacityProviderStrategyItem(entry, context);
    });
};

/**
 * serializeAws_restJson1CapacityProviderStrategyItem
 */
const se_CapacityProviderStrategyItem = (input: CapacityProviderStrategyItem, context: __SerdeContext): any => {
  return {
    ...(input.base != null && { base: input.base }),
    ...(input.capacityProvider != null && { capacityProvider: input.capacityProvider }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

/**
 * serializeAws_restJson1DeadLetterConfig
 */
const se_DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_restJson1EcsContainerOverride
 */
const se_EcsContainerOverride = (input: EcsContainerOverride, context: __SerdeContext): any => {
  return {
    ...(input.Command != null && { Command: se_StringList(input.Command, context) }),
    ...(input.Cpu != null && { Cpu: input.Cpu }),
    ...(input.Environment != null && { Environment: se_EcsEnvironmentVariableList(input.Environment, context) }),
    ...(input.EnvironmentFiles != null && {
      EnvironmentFiles: se_EcsEnvironmentFileList(input.EnvironmentFiles, context),
    }),
    ...(input.Memory != null && { Memory: input.Memory }),
    ...(input.MemoryReservation != null && { MemoryReservation: input.MemoryReservation }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceRequirements != null && {
      ResourceRequirements: se_EcsResourceRequirementsList(input.ResourceRequirements, context),
    }),
  };
};

/**
 * serializeAws_restJson1EcsContainerOverrideList
 */
const se_EcsContainerOverrideList = (input: EcsContainerOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EcsContainerOverride(entry, context);
    });
};

/**
 * serializeAws_restJson1EcsEnvironmentFile
 */
const se_EcsEnvironmentFile = (input: EcsEnvironmentFile, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1EcsEnvironmentFileList
 */
const se_EcsEnvironmentFileList = (input: EcsEnvironmentFile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EcsEnvironmentFile(entry, context);
    });
};

/**
 * serializeAws_restJson1EcsEnvironmentVariable
 */
const se_EcsEnvironmentVariable = (input: EcsEnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1EcsEnvironmentVariableList
 */
const se_EcsEnvironmentVariableList = (input: EcsEnvironmentVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EcsEnvironmentVariable(entry, context);
    });
};

/**
 * serializeAws_restJson1EcsEphemeralStorage
 */
const se_EcsEphemeralStorage = (input: EcsEphemeralStorage, context: __SerdeContext): any => {
  return {
    ...(input.sizeInGiB != null && { sizeInGiB: input.sizeInGiB }),
  };
};

/**
 * serializeAws_restJson1EcsInferenceAcceleratorOverride
 */
const se_EcsInferenceAcceleratorOverride = (input: EcsInferenceAcceleratorOverride, context: __SerdeContext): any => {
  return {
    ...(input.deviceName != null && { deviceName: input.deviceName }),
    ...(input.deviceType != null && { deviceType: input.deviceType }),
  };
};

/**
 * serializeAws_restJson1EcsInferenceAcceleratorOverrideList
 */
const se_EcsInferenceAcceleratorOverrideList = (
  input: EcsInferenceAcceleratorOverride[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EcsInferenceAcceleratorOverride(entry, context);
    });
};

/**
 * serializeAws_restJson1EcsResourceRequirement
 */
const se_EcsResourceRequirement = (input: EcsResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1EcsResourceRequirementsList
 */
const se_EcsResourceRequirementsList = (input: EcsResourceRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EcsResourceRequirement(entry, context);
    });
};

/**
 * serializeAws_restJson1EcsTaskOverride
 */
const se_EcsTaskOverride = (input: EcsTaskOverride, context: __SerdeContext): any => {
  return {
    ...(input.ContainerOverrides != null && {
      ContainerOverrides: se_EcsContainerOverrideList(input.ContainerOverrides, context),
    }),
    ...(input.Cpu != null && { Cpu: input.Cpu }),
    ...(input.EphemeralStorage != null && {
      EphemeralStorage: se_EcsEphemeralStorage(input.EphemeralStorage, context),
    }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.InferenceAcceleratorOverrides != null && {
      InferenceAcceleratorOverrides: se_EcsInferenceAcceleratorOverrideList(
        input.InferenceAcceleratorOverrides,
        context
      ),
    }),
    ...(input.Memory != null && { Memory: input.Memory }),
    ...(input.TaskRoleArn != null && { TaskRoleArn: input.TaskRoleArn }),
  };
};

/**
 * serializeAws_restJson1EventBridgeEventResourceList
 */
const se_EventBridgeEventResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Pattern != null && { Pattern: input.Pattern }),
  };
};

/**
 * serializeAws_restJson1FilterCriteria
 */
const se_FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1HeaderParametersMap
 */
const se_HeaderParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1KafkaBootstrapServers
 */
const se_KafkaBootstrapServers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MQBrokerAccessCredentials
 */
const se_MQBrokerAccessCredentials = (input: MQBrokerAccessCredentials, context: __SerdeContext): any => {
  return MQBrokerAccessCredentials.visit(input, {
    BasicAuth: (value) => ({ BasicAuth: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1MSKAccessCredentials
 */
const se_MSKAccessCredentials = (input: MSKAccessCredentials, context: __SerdeContext): any => {
  return MSKAccessCredentials.visit(input, {
    ClientCertificateTlsAuth: (value) => ({ ClientCertificateTlsAuth: value }),
    SaslScram512Auth: (value) => ({ SaslScram512Auth: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1NetworkConfiguration
 */
const se_NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration != null && {
      awsvpcConfiguration: se_AwsVpcConfiguration(input.awsvpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1PathParameterList
 */
const se_PathParameterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PipeEnrichmentHttpParameters
 */
const se_PipeEnrichmentHttpParameters = (input: PipeEnrichmentHttpParameters, context: __SerdeContext): any => {
  return {
    ...(input.HeaderParameters != null && {
      HeaderParameters: se_HeaderParametersMap(input.HeaderParameters, context),
    }),
    ...(input.PathParameterValues != null && {
      PathParameterValues: se_PathParameterList(input.PathParameterValues, context),
    }),
    ...(input.QueryStringParameters != null && {
      QueryStringParameters: se_QueryStringParametersMap(input.QueryStringParameters, context),
    }),
  };
};

/**
 * serializeAws_restJson1PipeEnrichmentParameters
 */
const se_PipeEnrichmentParameters = (input: PipeEnrichmentParameters, context: __SerdeContext): any => {
  return {
    ...(input.HttpParameters != null && {
      HttpParameters: se_PipeEnrichmentHttpParameters(input.HttpParameters, context),
    }),
    ...(input.InputTemplate != null && { InputTemplate: input.InputTemplate }),
  };
};

/**
 * serializeAws_restJson1PipeSourceActiveMQBrokerParameters
 */
const se_PipeSourceActiveMQBrokerParameters = (
  input: PipeSourceActiveMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && { Credentials: se_MQBrokerAccessCredentials(input.Credentials, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.QueueName != null && { QueueName: input.QueueName }),
  };
};

/**
 * serializeAws_restJson1PipeSourceDynamoDBStreamParameters
 */
const se_PipeSourceDynamoDBStreamParameters = (
  input: PipeSourceDynamoDBStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.OnPartialBatchItemFailure != null && { OnPartialBatchItemFailure: input.OnPartialBatchItemFailure }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
  };
};

/**
 * serializeAws_restJson1PipeSourceKinesisStreamParameters
 */
const se_PipeSourceKinesisStreamParameters = (
  input: PipeSourceKinesisStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.OnPartialBatchItemFailure != null && { OnPartialBatchItemFailure: input.OnPartialBatchItemFailure }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.StartingPositionTimestamp != null && {
      StartingPositionTimestamp: Math.round(input.StartingPositionTimestamp.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_restJson1PipeSourceManagedStreamingKafkaParameters
 */
const se_PipeSourceManagedStreamingKafkaParameters = (
  input: PipeSourceManagedStreamingKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.ConsumerGroupID != null && { ConsumerGroupID: input.ConsumerGroupID }),
    ...(input.Credentials != null && { Credentials: se_MSKAccessCredentials(input.Credentials, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

/**
 * serializeAws_restJson1PipeSourceParameters
 */
const se_PipeSourceParameters = (input: PipeSourceParameters, context: __SerdeContext): any => {
  return {
    ...(input.ActiveMQBrokerParameters != null && {
      ActiveMQBrokerParameters: se_PipeSourceActiveMQBrokerParameters(input.ActiveMQBrokerParameters, context),
    }),
    ...(input.DynamoDBStreamParameters != null && {
      DynamoDBStreamParameters: se_PipeSourceDynamoDBStreamParameters(input.DynamoDBStreamParameters, context),
    }),
    ...(input.FilterCriteria != null && { FilterCriteria: se_FilterCriteria(input.FilterCriteria, context) }),
    ...(input.KinesisStreamParameters != null && {
      KinesisStreamParameters: se_PipeSourceKinesisStreamParameters(input.KinesisStreamParameters, context),
    }),
    ...(input.ManagedStreamingKafkaParameters != null && {
      ManagedStreamingKafkaParameters: se_PipeSourceManagedStreamingKafkaParameters(
        input.ManagedStreamingKafkaParameters,
        context
      ),
    }),
    ...(input.RabbitMQBrokerParameters != null && {
      RabbitMQBrokerParameters: se_PipeSourceRabbitMQBrokerParameters(input.RabbitMQBrokerParameters, context),
    }),
    ...(input.SelfManagedKafkaParameters != null && {
      SelfManagedKafkaParameters: se_PipeSourceSelfManagedKafkaParameters(input.SelfManagedKafkaParameters, context),
    }),
    ...(input.SqsQueueParameters != null && {
      SqsQueueParameters: se_PipeSourceSqsQueueParameters(input.SqsQueueParameters, context),
    }),
  };
};

/**
 * serializeAws_restJson1PipeSourceRabbitMQBrokerParameters
 */
const se_PipeSourceRabbitMQBrokerParameters = (
  input: PipeSourceRabbitMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && { Credentials: se_MQBrokerAccessCredentials(input.Credentials, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.QueueName != null && { QueueName: input.QueueName }),
    ...(input.VirtualHost != null && { VirtualHost: input.VirtualHost }),
  };
};

/**
 * serializeAws_restJson1PipeSourceSelfManagedKafkaParameters
 */
const se_PipeSourceSelfManagedKafkaParameters = (
  input: PipeSourceSelfManagedKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalBootstrapServers != null && {
      AdditionalBootstrapServers: se_KafkaBootstrapServers(input.AdditionalBootstrapServers, context),
    }),
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.ConsumerGroupID != null && { ConsumerGroupID: input.ConsumerGroupID }),
    ...(input.Credentials != null && {
      Credentials: se_SelfManagedKafkaAccessConfigurationCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.ServerRootCaCertificate != null && { ServerRootCaCertificate: input.ServerRootCaCertificate }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
    ...(input.Vpc != null && { Vpc: se_SelfManagedKafkaAccessConfigurationVpc(input.Vpc, context) }),
  };
};

/**
 * serializeAws_restJson1PipeSourceSqsQueueParameters
 */
const se_PipeSourceSqsQueueParameters = (input: PipeSourceSqsQueueParameters, context: __SerdeContext): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

/**
 * serializeAws_restJson1PipeTargetBatchJobParameters
 */
const se_PipeTargetBatchJobParameters = (input: PipeTargetBatchJobParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArrayProperties != null && { ArrayProperties: se_BatchArrayProperties(input.ArrayProperties, context) }),
    ...(input.ContainerOverrides != null && {
      ContainerOverrides: se_BatchContainerOverrides(input.ContainerOverrides, context),
    }),
    ...(input.DependsOn != null && { DependsOn: se_BatchDependsOn(input.DependsOn, context) }),
    ...(input.JobDefinition != null && { JobDefinition: input.JobDefinition }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.Parameters != null && { Parameters: se_BatchParametersMap(input.Parameters, context) }),
    ...(input.RetryStrategy != null && { RetryStrategy: se_BatchRetryStrategy(input.RetryStrategy, context) }),
  };
};

/**
 * serializeAws_restJson1PipeTargetCloudWatchLogsParameters
 */
const se_PipeTargetCloudWatchLogsParameters = (
  input: PipeTargetCloudWatchLogsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogStreamName != null && { LogStreamName: input.LogStreamName }),
    ...(input.Timestamp != null && { Timestamp: input.Timestamp }),
  };
};

/**
 * serializeAws_restJson1PipeTargetEcsTaskParameters
 */
const se_PipeTargetEcsTaskParameters = (input: PipeTargetEcsTaskParameters, context: __SerdeContext): any => {
  return {
    ...(input.CapacityProviderStrategy != null && {
      CapacityProviderStrategy: se_CapacityProviderStrategy(input.CapacityProviderStrategy, context),
    }),
    ...(input.EnableECSManagedTags != null && { EnableECSManagedTags: input.EnableECSManagedTags }),
    ...(input.EnableExecuteCommand != null && { EnableExecuteCommand: input.EnableExecuteCommand }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.LaunchType != null && { LaunchType: input.LaunchType }),
    ...(input.NetworkConfiguration != null && {
      NetworkConfiguration: se_NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.Overrides != null && { Overrides: se_EcsTaskOverride(input.Overrides, context) }),
    ...(input.PlacementConstraints != null && {
      PlacementConstraints: se_PlacementConstraints(input.PlacementConstraints, context),
    }),
    ...(input.PlacementStrategy != null && {
      PlacementStrategy: se_PlacementStrategies(input.PlacementStrategy, context),
    }),
    ...(input.PlatformVersion != null && { PlatformVersion: input.PlatformVersion }),
    ...(input.PropagateTags != null && { PropagateTags: input.PropagateTags }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TaskCount != null && { TaskCount: input.TaskCount }),
    ...(input.TaskDefinitionArn != null && { TaskDefinitionArn: input.TaskDefinitionArn }),
  };
};

/**
 * serializeAws_restJson1PipeTargetEventBridgeEventBusParameters
 */
const se_PipeTargetEventBridgeEventBusParameters = (
  input: PipeTargetEventBridgeEventBusParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DetailType != null && { DetailType: input.DetailType }),
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
    ...(input.Resources != null && { Resources: se_EventBridgeEventResourceList(input.Resources, context) }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Time != null && { Time: input.Time }),
  };
};

/**
 * serializeAws_restJson1PipeTargetHttpParameters
 */
const se_PipeTargetHttpParameters = (input: PipeTargetHttpParameters, context: __SerdeContext): any => {
  return {
    ...(input.HeaderParameters != null && {
      HeaderParameters: se_HeaderParametersMap(input.HeaderParameters, context),
    }),
    ...(input.PathParameterValues != null && {
      PathParameterValues: se_PathParameterList(input.PathParameterValues, context),
    }),
    ...(input.QueryStringParameters != null && {
      QueryStringParameters: se_QueryStringParametersMap(input.QueryStringParameters, context),
    }),
  };
};

/**
 * serializeAws_restJson1PipeTargetKinesisStreamParameters
 */
const se_PipeTargetKinesisStreamParameters = (
  input: PipeTargetKinesisStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
  };
};

/**
 * serializeAws_restJson1PipeTargetLambdaFunctionParameters
 */
const se_PipeTargetLambdaFunctionParameters = (
  input: PipeTargetLambdaFunctionParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.InvocationType != null && { InvocationType: input.InvocationType }),
  };
};

/**
 * serializeAws_restJson1PipeTargetParameters
 */
const se_PipeTargetParameters = (input: PipeTargetParameters, context: __SerdeContext): any => {
  return {
    ...(input.BatchJobParameters != null && {
      BatchJobParameters: se_PipeTargetBatchJobParameters(input.BatchJobParameters, context),
    }),
    ...(input.CloudWatchLogsParameters != null && {
      CloudWatchLogsParameters: se_PipeTargetCloudWatchLogsParameters(input.CloudWatchLogsParameters, context),
    }),
    ...(input.EcsTaskParameters != null && {
      EcsTaskParameters: se_PipeTargetEcsTaskParameters(input.EcsTaskParameters, context),
    }),
    ...(input.EventBridgeEventBusParameters != null && {
      EventBridgeEventBusParameters: se_PipeTargetEventBridgeEventBusParameters(
        input.EventBridgeEventBusParameters,
        context
      ),
    }),
    ...(input.HttpParameters != null && { HttpParameters: se_PipeTargetHttpParameters(input.HttpParameters, context) }),
    ...(input.InputTemplate != null && { InputTemplate: input.InputTemplate }),
    ...(input.KinesisStreamParameters != null && {
      KinesisStreamParameters: se_PipeTargetKinesisStreamParameters(input.KinesisStreamParameters, context),
    }),
    ...(input.LambdaFunctionParameters != null && {
      LambdaFunctionParameters: se_PipeTargetLambdaFunctionParameters(input.LambdaFunctionParameters, context),
    }),
    ...(input.RedshiftDataParameters != null && {
      RedshiftDataParameters: se_PipeTargetRedshiftDataParameters(input.RedshiftDataParameters, context),
    }),
    ...(input.SageMakerPipelineParameters != null && {
      SageMakerPipelineParameters: se_PipeTargetSageMakerPipelineParameters(input.SageMakerPipelineParameters, context),
    }),
    ...(input.SqsQueueParameters != null && {
      SqsQueueParameters: se_PipeTargetSqsQueueParameters(input.SqsQueueParameters, context),
    }),
    ...(input.StepFunctionStateMachineParameters != null && {
      StepFunctionStateMachineParameters: se_PipeTargetStateMachineParameters(
        input.StepFunctionStateMachineParameters,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1PipeTargetRedshiftDataParameters
 */
const se_PipeTargetRedshiftDataParameters = (input: PipeTargetRedshiftDataParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.SecretManagerArn != null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.Sqls != null && { Sqls: se_Sqls(input.Sqls, context) }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WithEvent != null && { WithEvent: input.WithEvent }),
  };
};

/**
 * serializeAws_restJson1PipeTargetSageMakerPipelineParameters
 */
const se_PipeTargetSageMakerPipelineParameters = (
  input: PipeTargetSageMakerPipelineParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.PipelineParameterList != null && {
      PipelineParameterList: se_SageMakerPipelineParameterList(input.PipelineParameterList, context),
    }),
  };
};

/**
 * serializeAws_restJson1PipeTargetSqsQueueParameters
 */
const se_PipeTargetSqsQueueParameters = (input: PipeTargetSqsQueueParameters, context: __SerdeContext): any => {
  return {
    ...(input.MessageDeduplicationId != null && { MessageDeduplicationId: input.MessageDeduplicationId }),
    ...(input.MessageGroupId != null && { MessageGroupId: input.MessageGroupId }),
  };
};

/**
 * serializeAws_restJson1PipeTargetStateMachineParameters
 */
const se_PipeTargetStateMachineParameters = (input: PipeTargetStateMachineParameters, context: __SerdeContext): any => {
  return {
    ...(input.InvocationType != null && { InvocationType: input.InvocationType }),
  };
};

/**
 * serializeAws_restJson1PlacementConstraint
 */
const se_PlacementConstraint = (input: PlacementConstraint, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1PlacementConstraints
 */
const se_PlacementConstraints = (input: PlacementConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementConstraint(entry, context);
    });
};

/**
 * serializeAws_restJson1PlacementStrategies
 */
const se_PlacementStrategies = (input: PlacementStrategy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementStrategy(entry, context);
    });
};

/**
 * serializeAws_restJson1PlacementStrategy
 */
const se_PlacementStrategy = (input: PlacementStrategy, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1QueryStringParametersMap
 */
const se_QueryStringParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SageMakerPipelineParameter
 */
const se_SageMakerPipelineParameter = (input: SageMakerPipelineParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1SageMakerPipelineParameterList
 */
const se_SageMakerPipelineParameterList = (input: SageMakerPipelineParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SageMakerPipelineParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SecurityGroups
 */
const se_SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SelfManagedKafkaAccessConfigurationCredentials
 */
const se_SelfManagedKafkaAccessConfigurationCredentials = (
  input: SelfManagedKafkaAccessConfigurationCredentials,
  context: __SerdeContext
): any => {
  return SelfManagedKafkaAccessConfigurationCredentials.visit(input, {
    BasicAuth: (value) => ({ BasicAuth: value }),
    ClientCertificateTlsAuth: (value) => ({ ClientCertificateTlsAuth: value }),
    SaslScram256Auth: (value) => ({ SaslScram256Auth: value }),
    SaslScram512Auth: (value) => ({ SaslScram512Auth: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1SelfManagedKafkaAccessConfigurationVpc
 */
const se_SelfManagedKafkaAccessConfigurationVpc = (
  input: SelfManagedKafkaAccessConfigurationVpc,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroup != null && { SecurityGroup: se_SecurityGroupIds(input.SecurityGroup, context) }),
    ...(input.Subnets != null && { Subnets: se_SubnetIds(input.Subnets, context) }),
  };
};

/**
 * serializeAws_restJson1Sqls
 */
const se_Sqls = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Subnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UpdatePipeSourceActiveMQBrokerParameters
 */
const se_UpdatePipeSourceActiveMQBrokerParameters = (
  input: UpdatePipeSourceActiveMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && { Credentials: se_MQBrokerAccessCredentials(input.Credentials, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

/**
 * serializeAws_restJson1UpdatePipeSourceDynamoDBStreamParameters
 */
const se_UpdatePipeSourceDynamoDBStreamParameters = (
  input: UpdatePipeSourceDynamoDBStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.OnPartialBatchItemFailure != null && { OnPartialBatchItemFailure: input.OnPartialBatchItemFailure }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
  };
};

/**
 * serializeAws_restJson1UpdatePipeSourceKinesisStreamParameters
 */
const se_UpdatePipeSourceKinesisStreamParameters = (
  input: UpdatePipeSourceKinesisStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.OnPartialBatchItemFailure != null && { OnPartialBatchItemFailure: input.OnPartialBatchItemFailure }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
  };
};

/**
 * serializeAws_restJson1UpdatePipeSourceManagedStreamingKafkaParameters
 */
const se_UpdatePipeSourceManagedStreamingKafkaParameters = (
  input: UpdatePipeSourceManagedStreamingKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && { Credentials: se_MSKAccessCredentials(input.Credentials, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

/**
 * serializeAws_restJson1UpdatePipeSourceParameters
 */
const se_UpdatePipeSourceParameters = (input: UpdatePipeSourceParameters, context: __SerdeContext): any => {
  return {
    ...(input.ActiveMQBrokerParameters != null && {
      ActiveMQBrokerParameters: se_UpdatePipeSourceActiveMQBrokerParameters(input.ActiveMQBrokerParameters, context),
    }),
    ...(input.DynamoDBStreamParameters != null && {
      DynamoDBStreamParameters: se_UpdatePipeSourceDynamoDBStreamParameters(input.DynamoDBStreamParameters, context),
    }),
    ...(input.FilterCriteria != null && { FilterCriteria: se_FilterCriteria(input.FilterCriteria, context) }),
    ...(input.KinesisStreamParameters != null && {
      KinesisStreamParameters: se_UpdatePipeSourceKinesisStreamParameters(input.KinesisStreamParameters, context),
    }),
    ...(input.ManagedStreamingKafkaParameters != null && {
      ManagedStreamingKafkaParameters: se_UpdatePipeSourceManagedStreamingKafkaParameters(
        input.ManagedStreamingKafkaParameters,
        context
      ),
    }),
    ...(input.RabbitMQBrokerParameters != null && {
      RabbitMQBrokerParameters: se_UpdatePipeSourceRabbitMQBrokerParameters(input.RabbitMQBrokerParameters, context),
    }),
    ...(input.SelfManagedKafkaParameters != null && {
      SelfManagedKafkaParameters: se_UpdatePipeSourceSelfManagedKafkaParameters(
        input.SelfManagedKafkaParameters,
        context
      ),
    }),
    ...(input.SqsQueueParameters != null && {
      SqsQueueParameters: se_UpdatePipeSourceSqsQueueParameters(input.SqsQueueParameters, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdatePipeSourceRabbitMQBrokerParameters
 */
const se_UpdatePipeSourceRabbitMQBrokerParameters = (
  input: UpdatePipeSourceRabbitMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && { Credentials: se_MQBrokerAccessCredentials(input.Credentials, context) }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

/**
 * serializeAws_restJson1UpdatePipeSourceSelfManagedKafkaParameters
 */
const se_UpdatePipeSourceSelfManagedKafkaParameters = (
  input: UpdatePipeSourceSelfManagedKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && {
      Credentials: se_SelfManagedKafkaAccessConfigurationCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.ServerRootCaCertificate != null && { ServerRootCaCertificate: input.ServerRootCaCertificate }),
    ...(input.Vpc != null && { Vpc: se_SelfManagedKafkaAccessConfigurationVpc(input.Vpc, context) }),
  };
};

/**
 * serializeAws_restJson1UpdatePipeSourceSqsQueueParameters
 */
const se_UpdatePipeSourceSqsQueueParameters = (
  input: UpdatePipeSourceSqsQueueParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

/**
 * deserializeAws_restJson1AwsVpcConfiguration
 */
const de_AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    AssignPublicIp: __expectString(output.AssignPublicIp),
    SecurityGroups: output.SecurityGroups != null ? de_SecurityGroups(output.SecurityGroups, context) : undefined,
    Subnets: output.Subnets != null ? de_Subnets(output.Subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchArrayProperties
 */
const de_BatchArrayProperties = (output: any, context: __SerdeContext): BatchArrayProperties => {
  return {
    Size: __expectInt32(output.Size),
  } as any;
};

/**
 * deserializeAws_restJson1BatchContainerOverrides
 */
const de_BatchContainerOverrides = (output: any, context: __SerdeContext): BatchContainerOverrides => {
  return {
    Command: output.Command != null ? de_StringList(output.Command, context) : undefined,
    Environment: output.Environment != null ? de_BatchEnvironmentVariableList(output.Environment, context) : undefined,
    InstanceType: __expectString(output.InstanceType),
    ResourceRequirements:
      output.ResourceRequirements != null
        ? de_BatchResourceRequirementsList(output.ResourceRequirements, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchDependsOn
 */
const de_BatchDependsOn = (output: any, context: __SerdeContext): BatchJobDependency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchJobDependency(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchEnvironmentVariable
 */
const de_BatchEnvironmentVariable = (output: any, context: __SerdeContext): BatchEnvironmentVariable => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1BatchEnvironmentVariableList
 */
const de_BatchEnvironmentVariableList = (output: any, context: __SerdeContext): BatchEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchEnvironmentVariable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchJobDependency
 */
const de_BatchJobDependency = (output: any, context: __SerdeContext): BatchJobDependency => {
  return {
    JobId: __expectString(output.JobId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1BatchParametersMap
 */
const de_BatchParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BatchResourceRequirement
 */
const de_BatchResourceRequirement = (output: any, context: __SerdeContext): BatchResourceRequirement => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1BatchResourceRequirementsList
 */
const de_BatchResourceRequirementsList = (output: any, context: __SerdeContext): BatchResourceRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchResourceRequirement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchRetryStrategy
 */
const de_BatchRetryStrategy = (output: any, context: __SerdeContext): BatchRetryStrategy => {
  return {
    Attempts: __expectInt32(output.Attempts),
  } as any;
};

/**
 * deserializeAws_restJson1CapacityProviderStrategy
 */
const de_CapacityProviderStrategy = (output: any, context: __SerdeContext): CapacityProviderStrategyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CapacityProviderStrategyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CapacityProviderStrategyItem
 */
const de_CapacityProviderStrategyItem = (output: any, context: __SerdeContext): CapacityProviderStrategyItem => {
  return {
    base: __expectInt32(output.base),
    capacityProvider: __expectString(output.capacityProvider),
    weight: __expectInt32(output.weight),
  } as any;
};

/**
 * deserializeAws_restJson1DeadLetterConfig
 */
const de_DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_restJson1EcsContainerOverride
 */
const de_EcsContainerOverride = (output: any, context: __SerdeContext): EcsContainerOverride => {
  return {
    Command: output.Command != null ? de_StringList(output.Command, context) : undefined,
    Cpu: __expectInt32(output.Cpu),
    Environment: output.Environment != null ? de_EcsEnvironmentVariableList(output.Environment, context) : undefined,
    EnvironmentFiles:
      output.EnvironmentFiles != null ? de_EcsEnvironmentFileList(output.EnvironmentFiles, context) : undefined,
    Memory: __expectInt32(output.Memory),
    MemoryReservation: __expectInt32(output.MemoryReservation),
    Name: __expectString(output.Name),
    ResourceRequirements:
      output.ResourceRequirements != null
        ? de_EcsResourceRequirementsList(output.ResourceRequirements, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EcsContainerOverrideList
 */
const de_EcsContainerOverrideList = (output: any, context: __SerdeContext): EcsContainerOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EcsContainerOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EcsEnvironmentFile
 */
const de_EcsEnvironmentFile = (output: any, context: __SerdeContext): EcsEnvironmentFile => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1EcsEnvironmentFileList
 */
const de_EcsEnvironmentFileList = (output: any, context: __SerdeContext): EcsEnvironmentFile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EcsEnvironmentFile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EcsEnvironmentVariable
 */
const de_EcsEnvironmentVariable = (output: any, context: __SerdeContext): EcsEnvironmentVariable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1EcsEnvironmentVariableList
 */
const de_EcsEnvironmentVariableList = (output: any, context: __SerdeContext): EcsEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EcsEnvironmentVariable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EcsEphemeralStorage
 */
const de_EcsEphemeralStorage = (output: any, context: __SerdeContext): EcsEphemeralStorage => {
  return {
    sizeInGiB: __expectInt32(output.sizeInGiB),
  } as any;
};

/**
 * deserializeAws_restJson1EcsInferenceAcceleratorOverride
 */
const de_EcsInferenceAcceleratorOverride = (output: any, context: __SerdeContext): EcsInferenceAcceleratorOverride => {
  return {
    deviceName: __expectString(output.deviceName),
    deviceType: __expectString(output.deviceType),
  } as any;
};

/**
 * deserializeAws_restJson1EcsInferenceAcceleratorOverrideList
 */
const de_EcsInferenceAcceleratorOverrideList = (
  output: any,
  context: __SerdeContext
): EcsInferenceAcceleratorOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EcsInferenceAcceleratorOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EcsResourceRequirement
 */
const de_EcsResourceRequirement = (output: any, context: __SerdeContext): EcsResourceRequirement => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1EcsResourceRequirementsList
 */
const de_EcsResourceRequirementsList = (output: any, context: __SerdeContext): EcsResourceRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EcsResourceRequirement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EcsTaskOverride
 */
const de_EcsTaskOverride = (output: any, context: __SerdeContext): EcsTaskOverride => {
  return {
    ContainerOverrides:
      output.ContainerOverrides != null ? de_EcsContainerOverrideList(output.ContainerOverrides, context) : undefined,
    Cpu: __expectString(output.Cpu),
    EphemeralStorage:
      output.EphemeralStorage != null ? de_EcsEphemeralStorage(output.EphemeralStorage, context) : undefined,
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    InferenceAcceleratorOverrides:
      output.InferenceAcceleratorOverrides != null
        ? de_EcsInferenceAcceleratorOverrideList(output.InferenceAcceleratorOverrides, context)
        : undefined,
    Memory: __expectString(output.Memory),
    TaskRoleArn: __expectString(output.TaskRoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1EventBridgeEventResourceList
 */
const de_EventBridgeEventResourceList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Pattern: __expectString(output.Pattern),
  } as any;
};

/**
 * deserializeAws_restJson1FilterCriteria
 */
const de_FilterCriteria = (output: any, context: __SerdeContext): FilterCriteria => {
  return {
    Filters: output.Filters != null ? de_FilterList(output.Filters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HeaderParametersMap
 */
const de_HeaderParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1KafkaBootstrapServers
 */
const de_KafkaBootstrapServers = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MQBrokerAccessCredentials
 */
const de_MQBrokerAccessCredentials = (output: any, context: __SerdeContext): MQBrokerAccessCredentials => {
  if (__expectString(output.BasicAuth) !== undefined) {
    return { BasicAuth: __expectString(output.BasicAuth) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1MSKAccessCredentials
 */
const de_MSKAccessCredentials = (output: any, context: __SerdeContext): MSKAccessCredentials => {
  if (__expectString(output.ClientCertificateTlsAuth) !== undefined) {
    return { ClientCertificateTlsAuth: __expectString(output.ClientCertificateTlsAuth) as any };
  }
  if (__expectString(output.SaslScram512Auth) !== undefined) {
    return { SaslScram512Auth: __expectString(output.SaslScram512Auth) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1NetworkConfiguration
 */
const de_NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration != null ? de_AwsVpcConfiguration(output.awsvpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PathParameterList
 */
const de_PathParameterList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Pipe
 */
const de_Pipe = (output: any, context: __SerdeContext): Pipe => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CurrentState: __expectString(output.CurrentState),
    DesiredState: __expectString(output.DesiredState),
    Enrichment: __expectString(output.Enrichment),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Source: __expectString(output.Source),
    StateReason: __expectString(output.StateReason),
    Target: __expectString(output.Target),
  } as any;
};

/**
 * deserializeAws_restJson1PipeEnrichmentHttpParameters
 */
const de_PipeEnrichmentHttpParameters = (output: any, context: __SerdeContext): PipeEnrichmentHttpParameters => {
  return {
    HeaderParameters:
      output.HeaderParameters != null ? de_HeaderParametersMap(output.HeaderParameters, context) : undefined,
    PathParameterValues:
      output.PathParameterValues != null ? de_PathParameterList(output.PathParameterValues, context) : undefined,
    QueryStringParameters:
      output.QueryStringParameters != null
        ? de_QueryStringParametersMap(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeEnrichmentParameters
 */
const de_PipeEnrichmentParameters = (output: any, context: __SerdeContext): PipeEnrichmentParameters => {
  return {
    HttpParameters:
      output.HttpParameters != null ? de_PipeEnrichmentHttpParameters(output.HttpParameters, context) : undefined,
    InputTemplate: __expectString(output.InputTemplate),
  } as any;
};

/**
 * deserializeAws_restJson1PipeList
 */
const de_PipeList = (output: any, context: __SerdeContext): Pipe[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Pipe(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PipeSourceActiveMQBrokerParameters
 */
const de_PipeSourceActiveMQBrokerParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceActiveMQBrokerParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    Credentials:
      output.Credentials != null ? de_MQBrokerAccessCredentials(__expectUnion(output.Credentials), context) : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    QueueName: __expectString(output.QueueName),
  } as any;
};

/**
 * deserializeAws_restJson1PipeSourceDynamoDBStreamParameters
 */
const de_PipeSourceDynamoDBStreamParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceDynamoDBStreamParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    DeadLetterConfig:
      output.DeadLetterConfig != null ? de_DeadLetterConfig(output.DeadLetterConfig, context) : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    MaximumRecordAgeInSeconds: __expectInt32(output.MaximumRecordAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
    OnPartialBatchItemFailure: __expectString(output.OnPartialBatchItemFailure),
    ParallelizationFactor: __expectInt32(output.ParallelizationFactor),
    StartingPosition: __expectString(output.StartingPosition),
  } as any;
};

/**
 * deserializeAws_restJson1PipeSourceKinesisStreamParameters
 */
const de_PipeSourceKinesisStreamParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceKinesisStreamParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    DeadLetterConfig:
      output.DeadLetterConfig != null ? de_DeadLetterConfig(output.DeadLetterConfig, context) : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    MaximumRecordAgeInSeconds: __expectInt32(output.MaximumRecordAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
    OnPartialBatchItemFailure: __expectString(output.OnPartialBatchItemFailure),
    ParallelizationFactor: __expectInt32(output.ParallelizationFactor),
    StartingPosition: __expectString(output.StartingPosition),
    StartingPositionTimestamp:
      output.StartingPositionTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartingPositionTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeSourceManagedStreamingKafkaParameters
 */
const de_PipeSourceManagedStreamingKafkaParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceManagedStreamingKafkaParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    ConsumerGroupID: __expectString(output.ConsumerGroupID),
    Credentials:
      output.Credentials != null ? de_MSKAccessCredentials(__expectUnion(output.Credentials), context) : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    StartingPosition: __expectString(output.StartingPosition),
    TopicName: __expectString(output.TopicName),
  } as any;
};

/**
 * deserializeAws_restJson1PipeSourceParameters
 */
const de_PipeSourceParameters = (output: any, context: __SerdeContext): PipeSourceParameters => {
  return {
    ActiveMQBrokerParameters:
      output.ActiveMQBrokerParameters != null
        ? de_PipeSourceActiveMQBrokerParameters(output.ActiveMQBrokerParameters, context)
        : undefined,
    DynamoDBStreamParameters:
      output.DynamoDBStreamParameters != null
        ? de_PipeSourceDynamoDBStreamParameters(output.DynamoDBStreamParameters, context)
        : undefined,
    FilterCriteria: output.FilterCriteria != null ? de_FilterCriteria(output.FilterCriteria, context) : undefined,
    KinesisStreamParameters:
      output.KinesisStreamParameters != null
        ? de_PipeSourceKinesisStreamParameters(output.KinesisStreamParameters, context)
        : undefined,
    ManagedStreamingKafkaParameters:
      output.ManagedStreamingKafkaParameters != null
        ? de_PipeSourceManagedStreamingKafkaParameters(output.ManagedStreamingKafkaParameters, context)
        : undefined,
    RabbitMQBrokerParameters:
      output.RabbitMQBrokerParameters != null
        ? de_PipeSourceRabbitMQBrokerParameters(output.RabbitMQBrokerParameters, context)
        : undefined,
    SelfManagedKafkaParameters:
      output.SelfManagedKafkaParameters != null
        ? de_PipeSourceSelfManagedKafkaParameters(output.SelfManagedKafkaParameters, context)
        : undefined,
    SqsQueueParameters:
      output.SqsQueueParameters != null
        ? de_PipeSourceSqsQueueParameters(output.SqsQueueParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeSourceRabbitMQBrokerParameters
 */
const de_PipeSourceRabbitMQBrokerParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceRabbitMQBrokerParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    Credentials:
      output.Credentials != null ? de_MQBrokerAccessCredentials(__expectUnion(output.Credentials), context) : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    QueueName: __expectString(output.QueueName),
    VirtualHost: __expectString(output.VirtualHost),
  } as any;
};

/**
 * deserializeAws_restJson1PipeSourceSelfManagedKafkaParameters
 */
const de_PipeSourceSelfManagedKafkaParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceSelfManagedKafkaParameters => {
  return {
    AdditionalBootstrapServers:
      output.AdditionalBootstrapServers != null
        ? de_KafkaBootstrapServers(output.AdditionalBootstrapServers, context)
        : undefined,
    BatchSize: __expectInt32(output.BatchSize),
    ConsumerGroupID: __expectString(output.ConsumerGroupID),
    Credentials:
      output.Credentials != null
        ? de_SelfManagedKafkaAccessConfigurationCredentials(__expectUnion(output.Credentials), context)
        : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    ServerRootCaCertificate: __expectString(output.ServerRootCaCertificate),
    StartingPosition: __expectString(output.StartingPosition),
    TopicName: __expectString(output.TopicName),
    Vpc: output.Vpc != null ? de_SelfManagedKafkaAccessConfigurationVpc(output.Vpc, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeSourceSqsQueueParameters
 */
const de_PipeSourceSqsQueueParameters = (output: any, context: __SerdeContext): PipeSourceSqsQueueParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetBatchJobParameters
 */
const de_PipeTargetBatchJobParameters = (output: any, context: __SerdeContext): PipeTargetBatchJobParameters => {
  return {
    ArrayProperties:
      output.ArrayProperties != null ? de_BatchArrayProperties(output.ArrayProperties, context) : undefined,
    ContainerOverrides:
      output.ContainerOverrides != null ? de_BatchContainerOverrides(output.ContainerOverrides, context) : undefined,
    DependsOn: output.DependsOn != null ? de_BatchDependsOn(output.DependsOn, context) : undefined,
    JobDefinition: __expectString(output.JobDefinition),
    JobName: __expectString(output.JobName),
    Parameters: output.Parameters != null ? de_BatchParametersMap(output.Parameters, context) : undefined,
    RetryStrategy: output.RetryStrategy != null ? de_BatchRetryStrategy(output.RetryStrategy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetCloudWatchLogsParameters
 */
const de_PipeTargetCloudWatchLogsParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetCloudWatchLogsParameters => {
  return {
    LogStreamName: __expectString(output.LogStreamName),
    Timestamp: __expectString(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetEcsTaskParameters
 */
const de_PipeTargetEcsTaskParameters = (output: any, context: __SerdeContext): PipeTargetEcsTaskParameters => {
  return {
    CapacityProviderStrategy:
      output.CapacityProviderStrategy != null
        ? de_CapacityProviderStrategy(output.CapacityProviderStrategy, context)
        : undefined,
    EnableECSManagedTags: __expectBoolean(output.EnableECSManagedTags),
    EnableExecuteCommand: __expectBoolean(output.EnableExecuteCommand),
    Group: __expectString(output.Group),
    LaunchType: __expectString(output.LaunchType),
    NetworkConfiguration:
      output.NetworkConfiguration != null ? de_NetworkConfiguration(output.NetworkConfiguration, context) : undefined,
    Overrides: output.Overrides != null ? de_EcsTaskOverride(output.Overrides, context) : undefined,
    PlacementConstraints:
      output.PlacementConstraints != null ? de_PlacementConstraints(output.PlacementConstraints, context) : undefined,
    PlacementStrategy:
      output.PlacementStrategy != null ? de_PlacementStrategies(output.PlacementStrategy, context) : undefined,
    PlatformVersion: __expectString(output.PlatformVersion),
    PropagateTags: __expectString(output.PropagateTags),
    ReferenceId: __expectString(output.ReferenceId),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TaskCount: __expectInt32(output.TaskCount),
    TaskDefinitionArn: __expectString(output.TaskDefinitionArn),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetEventBridgeEventBusParameters
 */
const de_PipeTargetEventBridgeEventBusParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetEventBridgeEventBusParameters => {
  return {
    DetailType: __expectString(output.DetailType),
    EndpointId: __expectString(output.EndpointId),
    Resources: output.Resources != null ? de_EventBridgeEventResourceList(output.Resources, context) : undefined,
    Source: __expectString(output.Source),
    Time: __expectString(output.Time),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetHttpParameters
 */
const de_PipeTargetHttpParameters = (output: any, context: __SerdeContext): PipeTargetHttpParameters => {
  return {
    HeaderParameters:
      output.HeaderParameters != null ? de_HeaderParametersMap(output.HeaderParameters, context) : undefined,
    PathParameterValues:
      output.PathParameterValues != null ? de_PathParameterList(output.PathParameterValues, context) : undefined,
    QueryStringParameters:
      output.QueryStringParameters != null
        ? de_QueryStringParametersMap(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetKinesisStreamParameters
 */
const de_PipeTargetKinesisStreamParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetKinesisStreamParameters => {
  return {
    PartitionKey: __expectString(output.PartitionKey),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetLambdaFunctionParameters
 */
const de_PipeTargetLambdaFunctionParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetLambdaFunctionParameters => {
  return {
    InvocationType: __expectString(output.InvocationType),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetParameters
 */
const de_PipeTargetParameters = (output: any, context: __SerdeContext): PipeTargetParameters => {
  return {
    BatchJobParameters:
      output.BatchJobParameters != null
        ? de_PipeTargetBatchJobParameters(output.BatchJobParameters, context)
        : undefined,
    CloudWatchLogsParameters:
      output.CloudWatchLogsParameters != null
        ? de_PipeTargetCloudWatchLogsParameters(output.CloudWatchLogsParameters, context)
        : undefined,
    EcsTaskParameters:
      output.EcsTaskParameters != null ? de_PipeTargetEcsTaskParameters(output.EcsTaskParameters, context) : undefined,
    EventBridgeEventBusParameters:
      output.EventBridgeEventBusParameters != null
        ? de_PipeTargetEventBridgeEventBusParameters(output.EventBridgeEventBusParameters, context)
        : undefined,
    HttpParameters:
      output.HttpParameters != null ? de_PipeTargetHttpParameters(output.HttpParameters, context) : undefined,
    InputTemplate: __expectString(output.InputTemplate),
    KinesisStreamParameters:
      output.KinesisStreamParameters != null
        ? de_PipeTargetKinesisStreamParameters(output.KinesisStreamParameters, context)
        : undefined,
    LambdaFunctionParameters:
      output.LambdaFunctionParameters != null
        ? de_PipeTargetLambdaFunctionParameters(output.LambdaFunctionParameters, context)
        : undefined,
    RedshiftDataParameters:
      output.RedshiftDataParameters != null
        ? de_PipeTargetRedshiftDataParameters(output.RedshiftDataParameters, context)
        : undefined,
    SageMakerPipelineParameters:
      output.SageMakerPipelineParameters != null
        ? de_PipeTargetSageMakerPipelineParameters(output.SageMakerPipelineParameters, context)
        : undefined,
    SqsQueueParameters:
      output.SqsQueueParameters != null
        ? de_PipeTargetSqsQueueParameters(output.SqsQueueParameters, context)
        : undefined,
    StepFunctionStateMachineParameters:
      output.StepFunctionStateMachineParameters != null
        ? de_PipeTargetStateMachineParameters(output.StepFunctionStateMachineParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetRedshiftDataParameters
 */
const de_PipeTargetRedshiftDataParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetRedshiftDataParameters => {
  return {
    Database: __expectString(output.Database),
    DbUser: __expectString(output.DbUser),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    Sqls: output.Sqls != null ? de_Sqls(output.Sqls, context) : undefined,
    StatementName: __expectString(output.StatementName),
    WithEvent: __expectBoolean(output.WithEvent),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetSageMakerPipelineParameters
 */
const de_PipeTargetSageMakerPipelineParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetSageMakerPipelineParameters => {
  return {
    PipelineParameterList:
      output.PipelineParameterList != null
        ? de_SageMakerPipelineParameterList(output.PipelineParameterList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetSqsQueueParameters
 */
const de_PipeTargetSqsQueueParameters = (output: any, context: __SerdeContext): PipeTargetSqsQueueParameters => {
  return {
    MessageDeduplicationId: __expectString(output.MessageDeduplicationId),
    MessageGroupId: __expectString(output.MessageGroupId),
  } as any;
};

/**
 * deserializeAws_restJson1PipeTargetStateMachineParameters
 */
const de_PipeTargetStateMachineParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetStateMachineParameters => {
  return {
    InvocationType: __expectString(output.InvocationType),
  } as any;
};

/**
 * deserializeAws_restJson1PlacementConstraint
 */
const de_PlacementConstraint = (output: any, context: __SerdeContext): PlacementConstraint => {
  return {
    expression: __expectString(output.expression),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1PlacementConstraints
 */
const de_PlacementConstraints = (output: any, context: __SerdeContext): PlacementConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlacementStrategies
 */
const de_PlacementStrategies = (output: any, context: __SerdeContext): PlacementStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlacementStrategy
 */
const de_PlacementStrategy = (output: any, context: __SerdeContext): PlacementStrategy => {
  return {
    field: __expectString(output.field),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1QueryStringParametersMap
 */
const de_QueryStringParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SageMakerPipelineParameter
 */
const de_SageMakerPipelineParameter = (output: any, context: __SerdeContext): SageMakerPipelineParameter => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1SageMakerPipelineParameterList
 */
const de_SageMakerPipelineParameterList = (output: any, context: __SerdeContext): SageMakerPipelineParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SageMakerPipelineParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SelfManagedKafkaAccessConfigurationCredentials
 */
const de_SelfManagedKafkaAccessConfigurationCredentials = (
  output: any,
  context: __SerdeContext
): SelfManagedKafkaAccessConfigurationCredentials => {
  if (__expectString(output.BasicAuth) !== undefined) {
    return { BasicAuth: __expectString(output.BasicAuth) as any };
  }
  if (__expectString(output.ClientCertificateTlsAuth) !== undefined) {
    return { ClientCertificateTlsAuth: __expectString(output.ClientCertificateTlsAuth) as any };
  }
  if (__expectString(output.SaslScram256Auth) !== undefined) {
    return { SaslScram256Auth: __expectString(output.SaslScram256Auth) as any };
  }
  if (__expectString(output.SaslScram512Auth) !== undefined) {
    return { SaslScram512Auth: __expectString(output.SaslScram512Auth) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SelfManagedKafkaAccessConfigurationVpc
 */
const de_SelfManagedKafkaAccessConfigurationVpc = (
  output: any,
  context: __SerdeContext
): SelfManagedKafkaAccessConfigurationVpc => {
  return {
    SecurityGroup: output.SecurityGroup != null ? de_SecurityGroupIds(output.SecurityGroup, context) : undefined,
    Subnets: output.Subnets != null ? de_SubnetIds(output.Subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Sqls
 */
const de_Sqls = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Subnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
