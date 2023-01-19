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

export const serializeAws_restJson1CreatePipeCommand = async (
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
      EnrichmentParameters: serializeAws_restJson1PipeEnrichmentParameters(input.EnrichmentParameters, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.SourceParameters != null && {
      SourceParameters: serializeAws_restJson1PipeSourceParameters(input.SourceParameters, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TargetParameters != null && {
      TargetParameters: serializeAws_restJson1PipeTargetParameters(input.TargetParameters, context),
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

export const serializeAws_restJson1DeletePipeCommand = async (
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

export const serializeAws_restJson1DescribePipeCommand = async (
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

export const serializeAws_restJson1ListPipesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1StartPipeCommand = async (
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

export const serializeAws_restJson1StopPipeCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdatePipeCommand = async (
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
      EnrichmentParameters: serializeAws_restJson1PipeEnrichmentParameters(input.EnrichmentParameters, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceParameters != null && {
      SourceParameters: serializeAws_restJson1UpdatePipeSourceParameters(input.SourceParameters, context),
    }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TargetParameters != null && {
      TargetParameters: serializeAws_restJson1PipeTargetParameters(input.TargetParameters, context),
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

export const deserializeAws_restJson1CreatePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePipeCommandError(output, context);
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

const deserializeAws_restJson1CreatePipeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pipes#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePipeCommandError(output, context);
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

const deserializeAws_restJson1DeletePipeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePipeCommandError(output, context);
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
    contents.EnrichmentParameters = deserializeAws_restJson1PipeEnrichmentParameters(
      data.EnrichmentParameters,
      context
    );
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
    contents.SourceParameters = deserializeAws_restJson1PipeSourceParameters(data.SourceParameters, context);
  }
  if (data.StateReason != null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.Target != null) {
    contents.Target = __expectString(data.Target);
  }
  if (data.TargetParameters != null) {
    contents.TargetParameters = deserializeAws_restJson1PipeTargetParameters(data.TargetParameters, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribePipeCommandError = async (
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
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPipesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Pipes != null) {
    contents.Pipes = deserializeAws_restJson1PipeList(data.Pipes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPipesCommandError = async (
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
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartPipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartPipeCommandError(output, context);
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

const deserializeAws_restJson1StartPipeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopPipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopPipeCommandError(output, context);
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

const deserializeAws_restJson1StopPipeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipeCommandError(output, context);
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

const deserializeAws_restJson1UpdatePipeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.pipes#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pipes#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pipes#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pipes#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
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

const serializeAws_restJson1AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AssignPublicIp != null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups != null && {
      SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
    }),
    ...(input.Subnets != null && { Subnets: serializeAws_restJson1Subnets(input.Subnets, context) }),
  };
};

const serializeAws_restJson1BatchArrayProperties = (input: BatchArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.Size != null && { Size: input.Size }),
  };
};

const serializeAws_restJson1BatchContainerOverrides = (
  input: BatchContainerOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.Command != null && { Command: serializeAws_restJson1StringList(input.Command, context) }),
    ...(input.Environment != null && {
      Environment: serializeAws_restJson1BatchEnvironmentVariableList(input.Environment, context),
    }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.ResourceRequirements != null && {
      ResourceRequirements: serializeAws_restJson1BatchResourceRequirementsList(input.ResourceRequirements, context),
    }),
  };
};

const serializeAws_restJson1BatchDependsOn = (input: BatchJobDependency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchJobDependency(entry, context);
    });
};

const serializeAws_restJson1BatchEnvironmentVariable = (
  input: BatchEnvironmentVariable,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1BatchEnvironmentVariableList = (
  input: BatchEnvironmentVariable[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchEnvironmentVariable(entry, context);
    });
};

const serializeAws_restJson1BatchJobDependency = (input: BatchJobDependency, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1BatchParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1BatchResourceRequirement = (
  input: BatchResourceRequirement,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1BatchResourceRequirementsList = (
  input: BatchResourceRequirement[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchResourceRequirement(entry, context);
    });
};

const serializeAws_restJson1BatchRetryStrategy = (input: BatchRetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Attempts != null && { Attempts: input.Attempts }),
  };
};

const serializeAws_restJson1CapacityProviderStrategy = (
  input: CapacityProviderStrategyItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CapacityProviderStrategyItem(entry, context);
    });
};

const serializeAws_restJson1CapacityProviderStrategyItem = (
  input: CapacityProviderStrategyItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.base != null && { base: input.base }),
    ...(input.capacityProvider != null && { capacityProvider: input.capacityProvider }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

const serializeAws_restJson1DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

const serializeAws_restJson1EcsContainerOverride = (input: EcsContainerOverride, context: __SerdeContext): any => {
  return {
    ...(input.Command != null && { Command: serializeAws_restJson1StringList(input.Command, context) }),
    ...(input.Cpu != null && { Cpu: input.Cpu }),
    ...(input.Environment != null && {
      Environment: serializeAws_restJson1EcsEnvironmentVariableList(input.Environment, context),
    }),
    ...(input.EnvironmentFiles != null && {
      EnvironmentFiles: serializeAws_restJson1EcsEnvironmentFileList(input.EnvironmentFiles, context),
    }),
    ...(input.Memory != null && { Memory: input.Memory }),
    ...(input.MemoryReservation != null && { MemoryReservation: input.MemoryReservation }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceRequirements != null && {
      ResourceRequirements: serializeAws_restJson1EcsResourceRequirementsList(input.ResourceRequirements, context),
    }),
  };
};

const serializeAws_restJson1EcsContainerOverrideList = (
  input: EcsContainerOverride[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EcsContainerOverride(entry, context);
    });
};

const serializeAws_restJson1EcsEnvironmentFile = (input: EcsEnvironmentFile, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1EcsEnvironmentFileList = (input: EcsEnvironmentFile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EcsEnvironmentFile(entry, context);
    });
};

const serializeAws_restJson1EcsEnvironmentVariable = (input: EcsEnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1EcsEnvironmentVariableList = (
  input: EcsEnvironmentVariable[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EcsEnvironmentVariable(entry, context);
    });
};

const serializeAws_restJson1EcsEphemeralStorage = (input: EcsEphemeralStorage, context: __SerdeContext): any => {
  return {
    ...(input.sizeInGiB != null && { sizeInGiB: input.sizeInGiB }),
  };
};

const serializeAws_restJson1EcsInferenceAcceleratorOverride = (
  input: EcsInferenceAcceleratorOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.deviceName != null && { deviceName: input.deviceName }),
    ...(input.deviceType != null && { deviceType: input.deviceType }),
  };
};

const serializeAws_restJson1EcsInferenceAcceleratorOverrideList = (
  input: EcsInferenceAcceleratorOverride[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EcsInferenceAcceleratorOverride(entry, context);
    });
};

const serializeAws_restJson1EcsResourceRequirement = (input: EcsResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1EcsResourceRequirementsList = (
  input: EcsResourceRequirement[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EcsResourceRequirement(entry, context);
    });
};

const serializeAws_restJson1EcsTaskOverride = (input: EcsTaskOverride, context: __SerdeContext): any => {
  return {
    ...(input.ContainerOverrides != null && {
      ContainerOverrides: serializeAws_restJson1EcsContainerOverrideList(input.ContainerOverrides, context),
    }),
    ...(input.Cpu != null && { Cpu: input.Cpu }),
    ...(input.EphemeralStorage != null && {
      EphemeralStorage: serializeAws_restJson1EcsEphemeralStorage(input.EphemeralStorage, context),
    }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.InferenceAcceleratorOverrides != null && {
      InferenceAcceleratorOverrides: serializeAws_restJson1EcsInferenceAcceleratorOverrideList(
        input.InferenceAcceleratorOverrides,
        context
      ),
    }),
    ...(input.Memory != null && { Memory: input.Memory }),
    ...(input.TaskRoleArn != null && { TaskRoleArn: input.TaskRoleArn }),
  };
};

const serializeAws_restJson1EventBridgeEventResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Pattern != null && { Pattern: input.Pattern }),
  };
};

const serializeAws_restJson1FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1HeaderParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1KafkaBootstrapServers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1MQBrokerAccessCredentials = (
  input: MQBrokerAccessCredentials,
  context: __SerdeContext
): any => {
  return MQBrokerAccessCredentials.visit(input, {
    BasicAuth: (value) => ({ BasicAuth: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1MSKAccessCredentials = (input: MSKAccessCredentials, context: __SerdeContext): any => {
  return MSKAccessCredentials.visit(input, {
    ClientCertificateTlsAuth: (value) => ({ ClientCertificateTlsAuth: value }),
    SaslScram512Auth: (value) => ({ SaslScram512Auth: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration != null && {
      awsvpcConfiguration: serializeAws_restJson1AwsVpcConfiguration(input.awsvpcConfiguration, context),
    }),
  };
};

const serializeAws_restJson1PathParameterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1PipeEnrichmentHttpParameters = (
  input: PipeEnrichmentHttpParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.HeaderParameters != null && {
      HeaderParameters: serializeAws_restJson1HeaderParametersMap(input.HeaderParameters, context),
    }),
    ...(input.PathParameterValues != null && {
      PathParameterValues: serializeAws_restJson1PathParameterList(input.PathParameterValues, context),
    }),
    ...(input.QueryStringParameters != null && {
      QueryStringParameters: serializeAws_restJson1QueryStringParametersMap(input.QueryStringParameters, context),
    }),
  };
};

const serializeAws_restJson1PipeEnrichmentParameters = (
  input: PipeEnrichmentParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.HttpParameters != null && {
      HttpParameters: serializeAws_restJson1PipeEnrichmentHttpParameters(input.HttpParameters, context),
    }),
    ...(input.InputTemplate != null && { InputTemplate: input.InputTemplate }),
  };
};

const serializeAws_restJson1PipeSourceActiveMQBrokerParameters = (
  input: PipeSourceActiveMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1MQBrokerAccessCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.QueueName != null && { QueueName: input.QueueName }),
  };
};

const serializeAws_restJson1PipeSourceDynamoDBStreamParameters = (
  input: PipeSourceDynamoDBStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
    }),
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

const serializeAws_restJson1PipeSourceKinesisStreamParameters = (
  input: PipeSourceKinesisStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
    }),
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

const serializeAws_restJson1PipeSourceManagedStreamingKafkaParameters = (
  input: PipeSourceManagedStreamingKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.ConsumerGroupID != null && { ConsumerGroupID: input.ConsumerGroupID }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1MSKAccessCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

const serializeAws_restJson1PipeSourceParameters = (input: PipeSourceParameters, context: __SerdeContext): any => {
  return {
    ...(input.ActiveMQBrokerParameters != null && {
      ActiveMQBrokerParameters: serializeAws_restJson1PipeSourceActiveMQBrokerParameters(
        input.ActiveMQBrokerParameters,
        context
      ),
    }),
    ...(input.DynamoDBStreamParameters != null && {
      DynamoDBStreamParameters: serializeAws_restJson1PipeSourceDynamoDBStreamParameters(
        input.DynamoDBStreamParameters,
        context
      ),
    }),
    ...(input.FilterCriteria != null && {
      FilterCriteria: serializeAws_restJson1FilterCriteria(input.FilterCriteria, context),
    }),
    ...(input.KinesisStreamParameters != null && {
      KinesisStreamParameters: serializeAws_restJson1PipeSourceKinesisStreamParameters(
        input.KinesisStreamParameters,
        context
      ),
    }),
    ...(input.ManagedStreamingKafkaParameters != null && {
      ManagedStreamingKafkaParameters: serializeAws_restJson1PipeSourceManagedStreamingKafkaParameters(
        input.ManagedStreamingKafkaParameters,
        context
      ),
    }),
    ...(input.RabbitMQBrokerParameters != null && {
      RabbitMQBrokerParameters: serializeAws_restJson1PipeSourceRabbitMQBrokerParameters(
        input.RabbitMQBrokerParameters,
        context
      ),
    }),
    ...(input.SelfManagedKafkaParameters != null && {
      SelfManagedKafkaParameters: serializeAws_restJson1PipeSourceSelfManagedKafkaParameters(
        input.SelfManagedKafkaParameters,
        context
      ),
    }),
    ...(input.SqsQueueParameters != null && {
      SqsQueueParameters: serializeAws_restJson1PipeSourceSqsQueueParameters(input.SqsQueueParameters, context),
    }),
  };
};

const serializeAws_restJson1PipeSourceRabbitMQBrokerParameters = (
  input: PipeSourceRabbitMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1MQBrokerAccessCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.QueueName != null && { QueueName: input.QueueName }),
    ...(input.VirtualHost != null && { VirtualHost: input.VirtualHost }),
  };
};

const serializeAws_restJson1PipeSourceSelfManagedKafkaParameters = (
  input: PipeSourceSelfManagedKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalBootstrapServers != null && {
      AdditionalBootstrapServers: serializeAws_restJson1KafkaBootstrapServers(
        input.AdditionalBootstrapServers,
        context
      ),
    }),
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.ConsumerGroupID != null && { ConsumerGroupID: input.ConsumerGroupID }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1SelfManagedKafkaAccessConfigurationCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.ServerRootCaCertificate != null && { ServerRootCaCertificate: input.ServerRootCaCertificate }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
    ...(input.Vpc != null && { Vpc: serializeAws_restJson1SelfManagedKafkaAccessConfigurationVpc(input.Vpc, context) }),
  };
};

const serializeAws_restJson1PipeSourceSqsQueueParameters = (
  input: PipeSourceSqsQueueParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

const serializeAws_restJson1PipeTargetBatchJobParameters = (
  input: PipeTargetBatchJobParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArrayProperties != null && {
      ArrayProperties: serializeAws_restJson1BatchArrayProperties(input.ArrayProperties, context),
    }),
    ...(input.ContainerOverrides != null && {
      ContainerOverrides: serializeAws_restJson1BatchContainerOverrides(input.ContainerOverrides, context),
    }),
    ...(input.DependsOn != null && { DependsOn: serializeAws_restJson1BatchDependsOn(input.DependsOn, context) }),
    ...(input.JobDefinition != null && { JobDefinition: input.JobDefinition }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_restJson1BatchParametersMap(input.Parameters, context),
    }),
    ...(input.RetryStrategy != null && {
      RetryStrategy: serializeAws_restJson1BatchRetryStrategy(input.RetryStrategy, context),
    }),
  };
};

const serializeAws_restJson1PipeTargetCloudWatchLogsParameters = (
  input: PipeTargetCloudWatchLogsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogStreamName != null && { LogStreamName: input.LogStreamName }),
    ...(input.Timestamp != null && { Timestamp: input.Timestamp }),
  };
};

const serializeAws_restJson1PipeTargetEcsTaskParameters = (
  input: PipeTargetEcsTaskParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.CapacityProviderStrategy != null && {
      CapacityProviderStrategy: serializeAws_restJson1CapacityProviderStrategy(input.CapacityProviderStrategy, context),
    }),
    ...(input.EnableECSManagedTags != null && { EnableECSManagedTags: input.EnableECSManagedTags }),
    ...(input.EnableExecuteCommand != null && { EnableExecuteCommand: input.EnableExecuteCommand }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.LaunchType != null && { LaunchType: input.LaunchType }),
    ...(input.NetworkConfiguration != null && {
      NetworkConfiguration: serializeAws_restJson1NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.Overrides != null && { Overrides: serializeAws_restJson1EcsTaskOverride(input.Overrides, context) }),
    ...(input.PlacementConstraints != null && {
      PlacementConstraints: serializeAws_restJson1PlacementConstraints(input.PlacementConstraints, context),
    }),
    ...(input.PlacementStrategy != null && {
      PlacementStrategy: serializeAws_restJson1PlacementStrategies(input.PlacementStrategy, context),
    }),
    ...(input.PlatformVersion != null && { PlatformVersion: input.PlatformVersion }),
    ...(input.PropagateTags != null && { PropagateTags: input.PropagateTags }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TaskCount != null && { TaskCount: input.TaskCount }),
    ...(input.TaskDefinitionArn != null && { TaskDefinitionArn: input.TaskDefinitionArn }),
  };
};

const serializeAws_restJson1PipeTargetEventBridgeEventBusParameters = (
  input: PipeTargetEventBridgeEventBusParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DetailType != null && { DetailType: input.DetailType }),
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
    ...(input.Resources != null && {
      Resources: serializeAws_restJson1EventBridgeEventResourceList(input.Resources, context),
    }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Time != null && { Time: input.Time }),
  };
};

const serializeAws_restJson1PipeTargetHttpParameters = (
  input: PipeTargetHttpParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.HeaderParameters != null && {
      HeaderParameters: serializeAws_restJson1HeaderParametersMap(input.HeaderParameters, context),
    }),
    ...(input.PathParameterValues != null && {
      PathParameterValues: serializeAws_restJson1PathParameterList(input.PathParameterValues, context),
    }),
    ...(input.QueryStringParameters != null && {
      QueryStringParameters: serializeAws_restJson1QueryStringParametersMap(input.QueryStringParameters, context),
    }),
  };
};

const serializeAws_restJson1PipeTargetKinesisStreamParameters = (
  input: PipeTargetKinesisStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
  };
};

const serializeAws_restJson1PipeTargetLambdaFunctionParameters = (
  input: PipeTargetLambdaFunctionParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.InvocationType != null && { InvocationType: input.InvocationType }),
  };
};

const serializeAws_restJson1PipeTargetParameters = (input: PipeTargetParameters, context: __SerdeContext): any => {
  return {
    ...(input.BatchJobParameters != null && {
      BatchJobParameters: serializeAws_restJson1PipeTargetBatchJobParameters(input.BatchJobParameters, context),
    }),
    ...(input.CloudWatchLogsParameters != null && {
      CloudWatchLogsParameters: serializeAws_restJson1PipeTargetCloudWatchLogsParameters(
        input.CloudWatchLogsParameters,
        context
      ),
    }),
    ...(input.EcsTaskParameters != null && {
      EcsTaskParameters: serializeAws_restJson1PipeTargetEcsTaskParameters(input.EcsTaskParameters, context),
    }),
    ...(input.EventBridgeEventBusParameters != null && {
      EventBridgeEventBusParameters: serializeAws_restJson1PipeTargetEventBridgeEventBusParameters(
        input.EventBridgeEventBusParameters,
        context
      ),
    }),
    ...(input.HttpParameters != null && {
      HttpParameters: serializeAws_restJson1PipeTargetHttpParameters(input.HttpParameters, context),
    }),
    ...(input.InputTemplate != null && { InputTemplate: input.InputTemplate }),
    ...(input.KinesisStreamParameters != null && {
      KinesisStreamParameters: serializeAws_restJson1PipeTargetKinesisStreamParameters(
        input.KinesisStreamParameters,
        context
      ),
    }),
    ...(input.LambdaFunctionParameters != null && {
      LambdaFunctionParameters: serializeAws_restJson1PipeTargetLambdaFunctionParameters(
        input.LambdaFunctionParameters,
        context
      ),
    }),
    ...(input.RedshiftDataParameters != null && {
      RedshiftDataParameters: serializeAws_restJson1PipeTargetRedshiftDataParameters(
        input.RedshiftDataParameters,
        context
      ),
    }),
    ...(input.SageMakerPipelineParameters != null && {
      SageMakerPipelineParameters: serializeAws_restJson1PipeTargetSageMakerPipelineParameters(
        input.SageMakerPipelineParameters,
        context
      ),
    }),
    ...(input.SqsQueueParameters != null && {
      SqsQueueParameters: serializeAws_restJson1PipeTargetSqsQueueParameters(input.SqsQueueParameters, context),
    }),
    ...(input.StepFunctionStateMachineParameters != null && {
      StepFunctionStateMachineParameters: serializeAws_restJson1PipeTargetStateMachineParameters(
        input.StepFunctionStateMachineParameters,
        context
      ),
    }),
  };
};

const serializeAws_restJson1PipeTargetRedshiftDataParameters = (
  input: PipeTargetRedshiftDataParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.SecretManagerArn != null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.Sqls != null && { Sqls: serializeAws_restJson1Sqls(input.Sqls, context) }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WithEvent != null && { WithEvent: input.WithEvent }),
  };
};

const serializeAws_restJson1PipeTargetSageMakerPipelineParameters = (
  input: PipeTargetSageMakerPipelineParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.PipelineParameterList != null && {
      PipelineParameterList: serializeAws_restJson1SageMakerPipelineParameterList(input.PipelineParameterList, context),
    }),
  };
};

const serializeAws_restJson1PipeTargetSqsQueueParameters = (
  input: PipeTargetSqsQueueParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.MessageDeduplicationId != null && { MessageDeduplicationId: input.MessageDeduplicationId }),
    ...(input.MessageGroupId != null && { MessageGroupId: input.MessageGroupId }),
  };
};

const serializeAws_restJson1PipeTargetStateMachineParameters = (
  input: PipeTargetStateMachineParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.InvocationType != null && { InvocationType: input.InvocationType }),
  };
};

const serializeAws_restJson1PlacementConstraint = (input: PlacementConstraint, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1PlacementConstraints = (input: PlacementConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PlacementConstraint(entry, context);
    });
};

const serializeAws_restJson1PlacementStrategies = (input: PlacementStrategy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PlacementStrategy(entry, context);
    });
};

const serializeAws_restJson1PlacementStrategy = (input: PlacementStrategy, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1QueryStringParametersMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SageMakerPipelineParameter = (
  input: SageMakerPipelineParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1SageMakerPipelineParameterList = (
  input: SageMakerPipelineParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SageMakerPipelineParameter(entry, context);
    });
};

const serializeAws_restJson1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SelfManagedKafkaAccessConfigurationCredentials = (
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

const serializeAws_restJson1SelfManagedKafkaAccessConfigurationVpc = (
  input: SelfManagedKafkaAccessConfigurationVpc,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroup != null && {
      SecurityGroup: serializeAws_restJson1SecurityGroupIds(input.SecurityGroup, context),
    }),
    ...(input.Subnets != null && { Subnets: serializeAws_restJson1SubnetIds(input.Subnets, context) }),
  };
};

const serializeAws_restJson1Sqls = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UpdatePipeSourceActiveMQBrokerParameters = (
  input: UpdatePipeSourceActiveMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1MQBrokerAccessCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

const serializeAws_restJson1UpdatePipeSourceDynamoDBStreamParameters = (
  input: UpdatePipeSourceDynamoDBStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.OnPartialBatchItemFailure != null && { OnPartialBatchItemFailure: input.OnPartialBatchItemFailure }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
  };
};

const serializeAws_restJson1UpdatePipeSourceKinesisStreamParameters = (
  input: UpdatePipeSourceKinesisStreamParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.DeadLetterConfig != null && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.OnPartialBatchItemFailure != null && { OnPartialBatchItemFailure: input.OnPartialBatchItemFailure }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
  };
};

const serializeAws_restJson1UpdatePipeSourceManagedStreamingKafkaParameters = (
  input: UpdatePipeSourceManagedStreamingKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1MSKAccessCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

const serializeAws_restJson1UpdatePipeSourceParameters = (
  input: UpdatePipeSourceParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveMQBrokerParameters != null && {
      ActiveMQBrokerParameters: serializeAws_restJson1UpdatePipeSourceActiveMQBrokerParameters(
        input.ActiveMQBrokerParameters,
        context
      ),
    }),
    ...(input.DynamoDBStreamParameters != null && {
      DynamoDBStreamParameters: serializeAws_restJson1UpdatePipeSourceDynamoDBStreamParameters(
        input.DynamoDBStreamParameters,
        context
      ),
    }),
    ...(input.FilterCriteria != null && {
      FilterCriteria: serializeAws_restJson1FilterCriteria(input.FilterCriteria, context),
    }),
    ...(input.KinesisStreamParameters != null && {
      KinesisStreamParameters: serializeAws_restJson1UpdatePipeSourceKinesisStreamParameters(
        input.KinesisStreamParameters,
        context
      ),
    }),
    ...(input.ManagedStreamingKafkaParameters != null && {
      ManagedStreamingKafkaParameters: serializeAws_restJson1UpdatePipeSourceManagedStreamingKafkaParameters(
        input.ManagedStreamingKafkaParameters,
        context
      ),
    }),
    ...(input.RabbitMQBrokerParameters != null && {
      RabbitMQBrokerParameters: serializeAws_restJson1UpdatePipeSourceRabbitMQBrokerParameters(
        input.RabbitMQBrokerParameters,
        context
      ),
    }),
    ...(input.SelfManagedKafkaParameters != null && {
      SelfManagedKafkaParameters: serializeAws_restJson1UpdatePipeSourceSelfManagedKafkaParameters(
        input.SelfManagedKafkaParameters,
        context
      ),
    }),
    ...(input.SqsQueueParameters != null && {
      SqsQueueParameters: serializeAws_restJson1UpdatePipeSourceSqsQueueParameters(input.SqsQueueParameters, context),
    }),
  };
};

const serializeAws_restJson1UpdatePipeSourceRabbitMQBrokerParameters = (
  input: UpdatePipeSourceRabbitMQBrokerParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1MQBrokerAccessCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
  };
};

const serializeAws_restJson1UpdatePipeSourceSelfManagedKafkaParameters = (
  input: UpdatePipeSourceSelfManagedKafkaParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1SelfManagedKafkaAccessConfigurationCredentials(input.Credentials, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.ServerRootCaCertificate != null && { ServerRootCaCertificate: input.ServerRootCaCertificate }),
    ...(input.Vpc != null && { Vpc: serializeAws_restJson1SelfManagedKafkaAccessConfigurationVpc(input.Vpc, context) }),
  };
};

const serializeAws_restJson1UpdatePipeSourceSqsQueueParameters = (
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

const deserializeAws_restJson1AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    AssignPublicIp: __expectString(output.AssignPublicIp),
    SecurityGroups:
      output.SecurityGroups != null
        ? deserializeAws_restJson1SecurityGroups(output.SecurityGroups, context)
        : undefined,
    Subnets: output.Subnets != null ? deserializeAws_restJson1Subnets(output.Subnets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchArrayProperties = (output: any, context: __SerdeContext): BatchArrayProperties => {
  return {
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_restJson1BatchContainerOverrides = (
  output: any,
  context: __SerdeContext
): BatchContainerOverrides => {
  return {
    Command: output.Command != null ? deserializeAws_restJson1StringList(output.Command, context) : undefined,
    Environment:
      output.Environment != null
        ? deserializeAws_restJson1BatchEnvironmentVariableList(output.Environment, context)
        : undefined,
    InstanceType: __expectString(output.InstanceType),
    ResourceRequirements:
      output.ResourceRequirements != null
        ? deserializeAws_restJson1BatchResourceRequirementsList(output.ResourceRequirements, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchDependsOn = (output: any, context: __SerdeContext): BatchJobDependency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchJobDependency(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchEnvironmentVariable = (
  output: any,
  context: __SerdeContext
): BatchEnvironmentVariable => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1BatchEnvironmentVariableList = (
  output: any,
  context: __SerdeContext
): BatchEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchEnvironmentVariable(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchJobDependency = (output: any, context: __SerdeContext): BatchJobDependency => {
  return {
    JobId: __expectString(output.JobId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1BatchParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1BatchResourceRequirement = (
  output: any,
  context: __SerdeContext
): BatchResourceRequirement => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1BatchResourceRequirementsList = (
  output: any,
  context: __SerdeContext
): BatchResourceRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchResourceRequirement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchRetryStrategy = (output: any, context: __SerdeContext): BatchRetryStrategy => {
  return {
    Attempts: __expectInt32(output.Attempts),
  } as any;
};

const deserializeAws_restJson1CapacityProviderStrategy = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CapacityProviderStrategyItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CapacityProviderStrategyItem = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem => {
  return {
    base: __expectInt32(output.base),
    capacityProvider: __expectString(output.capacityProvider),
    weight: __expectInt32(output.weight),
  } as any;
};

const deserializeAws_restJson1DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_restJson1EcsContainerOverride = (output: any, context: __SerdeContext): EcsContainerOverride => {
  return {
    Command: output.Command != null ? deserializeAws_restJson1StringList(output.Command, context) : undefined,
    Cpu: __expectInt32(output.Cpu),
    Environment:
      output.Environment != null
        ? deserializeAws_restJson1EcsEnvironmentVariableList(output.Environment, context)
        : undefined,
    EnvironmentFiles:
      output.EnvironmentFiles != null
        ? deserializeAws_restJson1EcsEnvironmentFileList(output.EnvironmentFiles, context)
        : undefined,
    Memory: __expectInt32(output.Memory),
    MemoryReservation: __expectInt32(output.MemoryReservation),
    Name: __expectString(output.Name),
    ResourceRequirements:
      output.ResourceRequirements != null
        ? deserializeAws_restJson1EcsResourceRequirementsList(output.ResourceRequirements, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EcsContainerOverrideList = (
  output: any,
  context: __SerdeContext
): EcsContainerOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EcsContainerOverride(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EcsEnvironmentFile = (output: any, context: __SerdeContext): EcsEnvironmentFile => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1EcsEnvironmentFileList = (output: any, context: __SerdeContext): EcsEnvironmentFile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EcsEnvironmentFile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EcsEnvironmentVariable = (
  output: any,
  context: __SerdeContext
): EcsEnvironmentVariable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1EcsEnvironmentVariableList = (
  output: any,
  context: __SerdeContext
): EcsEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EcsEnvironmentVariable(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EcsEphemeralStorage = (output: any, context: __SerdeContext): EcsEphemeralStorage => {
  return {
    sizeInGiB: __expectInt32(output.sizeInGiB),
  } as any;
};

const deserializeAws_restJson1EcsInferenceAcceleratorOverride = (
  output: any,
  context: __SerdeContext
): EcsInferenceAcceleratorOverride => {
  return {
    deviceName: __expectString(output.deviceName),
    deviceType: __expectString(output.deviceType),
  } as any;
};

const deserializeAws_restJson1EcsInferenceAcceleratorOverrideList = (
  output: any,
  context: __SerdeContext
): EcsInferenceAcceleratorOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EcsInferenceAcceleratorOverride(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EcsResourceRequirement = (
  output: any,
  context: __SerdeContext
): EcsResourceRequirement => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1EcsResourceRequirementsList = (
  output: any,
  context: __SerdeContext
): EcsResourceRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EcsResourceRequirement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EcsTaskOverride = (output: any, context: __SerdeContext): EcsTaskOverride => {
  return {
    ContainerOverrides:
      output.ContainerOverrides != null
        ? deserializeAws_restJson1EcsContainerOverrideList(output.ContainerOverrides, context)
        : undefined,
    Cpu: __expectString(output.Cpu),
    EphemeralStorage:
      output.EphemeralStorage != null
        ? deserializeAws_restJson1EcsEphemeralStorage(output.EphemeralStorage, context)
        : undefined,
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    InferenceAcceleratorOverrides:
      output.InferenceAcceleratorOverrides != null
        ? deserializeAws_restJson1EcsInferenceAcceleratorOverrideList(output.InferenceAcceleratorOverrides, context)
        : undefined,
    Memory: __expectString(output.Memory),
    TaskRoleArn: __expectString(output.TaskRoleArn),
  } as any;
};

const deserializeAws_restJson1EventBridgeEventResourceList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Pattern: __expectString(output.Pattern),
  } as any;
};

const deserializeAws_restJson1FilterCriteria = (output: any, context: __SerdeContext): FilterCriteria => {
  return {
    Filters: output.Filters != null ? deserializeAws_restJson1FilterList(output.Filters, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Filter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HeaderParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1KafkaBootstrapServers = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MQBrokerAccessCredentials = (
  output: any,
  context: __SerdeContext
): MQBrokerAccessCredentials => {
  if (__expectString(output.BasicAuth) !== undefined) {
    return { BasicAuth: __expectString(output.BasicAuth) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1MSKAccessCredentials = (output: any, context: __SerdeContext): MSKAccessCredentials => {
  if (__expectString(output.ClientCertificateTlsAuth) !== undefined) {
    return { ClientCertificateTlsAuth: __expectString(output.ClientCertificateTlsAuth) as any };
  }
  if (__expectString(output.SaslScram512Auth) !== undefined) {
    return { SaslScram512Auth: __expectString(output.SaslScram512Auth) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration != null
        ? deserializeAws_restJson1AwsVpcConfiguration(output.awsvpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PathParameterList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Pipe = (output: any, context: __SerdeContext): Pipe => {
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

const deserializeAws_restJson1PipeEnrichmentHttpParameters = (
  output: any,
  context: __SerdeContext
): PipeEnrichmentHttpParameters => {
  return {
    HeaderParameters:
      output.HeaderParameters != null
        ? deserializeAws_restJson1HeaderParametersMap(output.HeaderParameters, context)
        : undefined,
    PathParameterValues:
      output.PathParameterValues != null
        ? deserializeAws_restJson1PathParameterList(output.PathParameterValues, context)
        : undefined,
    QueryStringParameters:
      output.QueryStringParameters != null
        ? deserializeAws_restJson1QueryStringParametersMap(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipeEnrichmentParameters = (
  output: any,
  context: __SerdeContext
): PipeEnrichmentParameters => {
  return {
    HttpParameters:
      output.HttpParameters != null
        ? deserializeAws_restJson1PipeEnrichmentHttpParameters(output.HttpParameters, context)
        : undefined,
    InputTemplate: __expectString(output.InputTemplate),
  } as any;
};

const deserializeAws_restJson1PipeList = (output: any, context: __SerdeContext): Pipe[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Pipe(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PipeSourceActiveMQBrokerParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceActiveMQBrokerParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    Credentials:
      output.Credentials != null
        ? deserializeAws_restJson1MQBrokerAccessCredentials(__expectUnion(output.Credentials), context)
        : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    QueueName: __expectString(output.QueueName),
  } as any;
};

const deserializeAws_restJson1PipeSourceDynamoDBStreamParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceDynamoDBStreamParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    DeadLetterConfig:
      output.DeadLetterConfig != null
        ? deserializeAws_restJson1DeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    MaximumRecordAgeInSeconds: __expectInt32(output.MaximumRecordAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
    OnPartialBatchItemFailure: __expectString(output.OnPartialBatchItemFailure),
    ParallelizationFactor: __expectInt32(output.ParallelizationFactor),
    StartingPosition: __expectString(output.StartingPosition),
  } as any;
};

const deserializeAws_restJson1PipeSourceKinesisStreamParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceKinesisStreamParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    DeadLetterConfig:
      output.DeadLetterConfig != null
        ? deserializeAws_restJson1DeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
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

const deserializeAws_restJson1PipeSourceManagedStreamingKafkaParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceManagedStreamingKafkaParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    ConsumerGroupID: __expectString(output.ConsumerGroupID),
    Credentials:
      output.Credentials != null
        ? deserializeAws_restJson1MSKAccessCredentials(__expectUnion(output.Credentials), context)
        : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    StartingPosition: __expectString(output.StartingPosition),
    TopicName: __expectString(output.TopicName),
  } as any;
};

const deserializeAws_restJson1PipeSourceParameters = (output: any, context: __SerdeContext): PipeSourceParameters => {
  return {
    ActiveMQBrokerParameters:
      output.ActiveMQBrokerParameters != null
        ? deserializeAws_restJson1PipeSourceActiveMQBrokerParameters(output.ActiveMQBrokerParameters, context)
        : undefined,
    DynamoDBStreamParameters:
      output.DynamoDBStreamParameters != null
        ? deserializeAws_restJson1PipeSourceDynamoDBStreamParameters(output.DynamoDBStreamParameters, context)
        : undefined,
    FilterCriteria:
      output.FilterCriteria != null
        ? deserializeAws_restJson1FilterCriteria(output.FilterCriteria, context)
        : undefined,
    KinesisStreamParameters:
      output.KinesisStreamParameters != null
        ? deserializeAws_restJson1PipeSourceKinesisStreamParameters(output.KinesisStreamParameters, context)
        : undefined,
    ManagedStreamingKafkaParameters:
      output.ManagedStreamingKafkaParameters != null
        ? deserializeAws_restJson1PipeSourceManagedStreamingKafkaParameters(
            output.ManagedStreamingKafkaParameters,
            context
          )
        : undefined,
    RabbitMQBrokerParameters:
      output.RabbitMQBrokerParameters != null
        ? deserializeAws_restJson1PipeSourceRabbitMQBrokerParameters(output.RabbitMQBrokerParameters, context)
        : undefined,
    SelfManagedKafkaParameters:
      output.SelfManagedKafkaParameters != null
        ? deserializeAws_restJson1PipeSourceSelfManagedKafkaParameters(output.SelfManagedKafkaParameters, context)
        : undefined,
    SqsQueueParameters:
      output.SqsQueueParameters != null
        ? deserializeAws_restJson1PipeSourceSqsQueueParameters(output.SqsQueueParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipeSourceRabbitMQBrokerParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceRabbitMQBrokerParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    Credentials:
      output.Credentials != null
        ? deserializeAws_restJson1MQBrokerAccessCredentials(__expectUnion(output.Credentials), context)
        : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    QueueName: __expectString(output.QueueName),
    VirtualHost: __expectString(output.VirtualHost),
  } as any;
};

const deserializeAws_restJson1PipeSourceSelfManagedKafkaParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceSelfManagedKafkaParameters => {
  return {
    AdditionalBootstrapServers:
      output.AdditionalBootstrapServers != null
        ? deserializeAws_restJson1KafkaBootstrapServers(output.AdditionalBootstrapServers, context)
        : undefined,
    BatchSize: __expectInt32(output.BatchSize),
    ConsumerGroupID: __expectString(output.ConsumerGroupID),
    Credentials:
      output.Credentials != null
        ? deserializeAws_restJson1SelfManagedKafkaAccessConfigurationCredentials(
            __expectUnion(output.Credentials),
            context
          )
        : undefined,
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    ServerRootCaCertificate: __expectString(output.ServerRootCaCertificate),
    StartingPosition: __expectString(output.StartingPosition),
    TopicName: __expectString(output.TopicName),
    Vpc:
      output.Vpc != null
        ? deserializeAws_restJson1SelfManagedKafkaAccessConfigurationVpc(output.Vpc, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipeSourceSqsQueueParameters = (
  output: any,
  context: __SerdeContext
): PipeSourceSqsQueueParameters => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
  } as any;
};

const deserializeAws_restJson1PipeTargetBatchJobParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetBatchJobParameters => {
  return {
    ArrayProperties:
      output.ArrayProperties != null
        ? deserializeAws_restJson1BatchArrayProperties(output.ArrayProperties, context)
        : undefined,
    ContainerOverrides:
      output.ContainerOverrides != null
        ? deserializeAws_restJson1BatchContainerOverrides(output.ContainerOverrides, context)
        : undefined,
    DependsOn: output.DependsOn != null ? deserializeAws_restJson1BatchDependsOn(output.DependsOn, context) : undefined,
    JobDefinition: __expectString(output.JobDefinition),
    JobName: __expectString(output.JobName),
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1BatchParametersMap(output.Parameters, context) : undefined,
    RetryStrategy:
      output.RetryStrategy != null
        ? deserializeAws_restJson1BatchRetryStrategy(output.RetryStrategy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipeTargetCloudWatchLogsParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetCloudWatchLogsParameters => {
  return {
    LogStreamName: __expectString(output.LogStreamName),
    Timestamp: __expectString(output.Timestamp),
  } as any;
};

const deserializeAws_restJson1PipeTargetEcsTaskParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetEcsTaskParameters => {
  return {
    CapacityProviderStrategy:
      output.CapacityProviderStrategy != null
        ? deserializeAws_restJson1CapacityProviderStrategy(output.CapacityProviderStrategy, context)
        : undefined,
    EnableECSManagedTags: __expectBoolean(output.EnableECSManagedTags),
    EnableExecuteCommand: __expectBoolean(output.EnableExecuteCommand),
    Group: __expectString(output.Group),
    LaunchType: __expectString(output.LaunchType),
    NetworkConfiguration:
      output.NetworkConfiguration != null
        ? deserializeAws_restJson1NetworkConfiguration(output.NetworkConfiguration, context)
        : undefined,
    Overrides:
      output.Overrides != null ? deserializeAws_restJson1EcsTaskOverride(output.Overrides, context) : undefined,
    PlacementConstraints:
      output.PlacementConstraints != null
        ? deserializeAws_restJson1PlacementConstraints(output.PlacementConstraints, context)
        : undefined,
    PlacementStrategy:
      output.PlacementStrategy != null
        ? deserializeAws_restJson1PlacementStrategies(output.PlacementStrategy, context)
        : undefined,
    PlatformVersion: __expectString(output.PlatformVersion),
    PropagateTags: __expectString(output.PropagateTags),
    ReferenceId: __expectString(output.ReferenceId),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
    TaskCount: __expectInt32(output.TaskCount),
    TaskDefinitionArn: __expectString(output.TaskDefinitionArn),
  } as any;
};

const deserializeAws_restJson1PipeTargetEventBridgeEventBusParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetEventBridgeEventBusParameters => {
  return {
    DetailType: __expectString(output.DetailType),
    EndpointId: __expectString(output.EndpointId),
    Resources:
      output.Resources != null
        ? deserializeAws_restJson1EventBridgeEventResourceList(output.Resources, context)
        : undefined,
    Source: __expectString(output.Source),
    Time: __expectString(output.Time),
  } as any;
};

const deserializeAws_restJson1PipeTargetHttpParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetHttpParameters => {
  return {
    HeaderParameters:
      output.HeaderParameters != null
        ? deserializeAws_restJson1HeaderParametersMap(output.HeaderParameters, context)
        : undefined,
    PathParameterValues:
      output.PathParameterValues != null
        ? deserializeAws_restJson1PathParameterList(output.PathParameterValues, context)
        : undefined,
    QueryStringParameters:
      output.QueryStringParameters != null
        ? deserializeAws_restJson1QueryStringParametersMap(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipeTargetKinesisStreamParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetKinesisStreamParameters => {
  return {
    PartitionKey: __expectString(output.PartitionKey),
  } as any;
};

const deserializeAws_restJson1PipeTargetLambdaFunctionParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetLambdaFunctionParameters => {
  return {
    InvocationType: __expectString(output.InvocationType),
  } as any;
};

const deserializeAws_restJson1PipeTargetParameters = (output: any, context: __SerdeContext): PipeTargetParameters => {
  return {
    BatchJobParameters:
      output.BatchJobParameters != null
        ? deserializeAws_restJson1PipeTargetBatchJobParameters(output.BatchJobParameters, context)
        : undefined,
    CloudWatchLogsParameters:
      output.CloudWatchLogsParameters != null
        ? deserializeAws_restJson1PipeTargetCloudWatchLogsParameters(output.CloudWatchLogsParameters, context)
        : undefined,
    EcsTaskParameters:
      output.EcsTaskParameters != null
        ? deserializeAws_restJson1PipeTargetEcsTaskParameters(output.EcsTaskParameters, context)
        : undefined,
    EventBridgeEventBusParameters:
      output.EventBridgeEventBusParameters != null
        ? deserializeAws_restJson1PipeTargetEventBridgeEventBusParameters(output.EventBridgeEventBusParameters, context)
        : undefined,
    HttpParameters:
      output.HttpParameters != null
        ? deserializeAws_restJson1PipeTargetHttpParameters(output.HttpParameters, context)
        : undefined,
    InputTemplate: __expectString(output.InputTemplate),
    KinesisStreamParameters:
      output.KinesisStreamParameters != null
        ? deserializeAws_restJson1PipeTargetKinesisStreamParameters(output.KinesisStreamParameters, context)
        : undefined,
    LambdaFunctionParameters:
      output.LambdaFunctionParameters != null
        ? deserializeAws_restJson1PipeTargetLambdaFunctionParameters(output.LambdaFunctionParameters, context)
        : undefined,
    RedshiftDataParameters:
      output.RedshiftDataParameters != null
        ? deserializeAws_restJson1PipeTargetRedshiftDataParameters(output.RedshiftDataParameters, context)
        : undefined,
    SageMakerPipelineParameters:
      output.SageMakerPipelineParameters != null
        ? deserializeAws_restJson1PipeTargetSageMakerPipelineParameters(output.SageMakerPipelineParameters, context)
        : undefined,
    SqsQueueParameters:
      output.SqsQueueParameters != null
        ? deserializeAws_restJson1PipeTargetSqsQueueParameters(output.SqsQueueParameters, context)
        : undefined,
    StepFunctionStateMachineParameters:
      output.StepFunctionStateMachineParameters != null
        ? deserializeAws_restJson1PipeTargetStateMachineParameters(output.StepFunctionStateMachineParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipeTargetRedshiftDataParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetRedshiftDataParameters => {
  return {
    Database: __expectString(output.Database),
    DbUser: __expectString(output.DbUser),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    Sqls: output.Sqls != null ? deserializeAws_restJson1Sqls(output.Sqls, context) : undefined,
    StatementName: __expectString(output.StatementName),
    WithEvent: __expectBoolean(output.WithEvent),
  } as any;
};

const deserializeAws_restJson1PipeTargetSageMakerPipelineParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetSageMakerPipelineParameters => {
  return {
    PipelineParameterList:
      output.PipelineParameterList != null
        ? deserializeAws_restJson1SageMakerPipelineParameterList(output.PipelineParameterList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipeTargetSqsQueueParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetSqsQueueParameters => {
  return {
    MessageDeduplicationId: __expectString(output.MessageDeduplicationId),
    MessageGroupId: __expectString(output.MessageGroupId),
  } as any;
};

const deserializeAws_restJson1PipeTargetStateMachineParameters = (
  output: any,
  context: __SerdeContext
): PipeTargetStateMachineParameters => {
  return {
    InvocationType: __expectString(output.InvocationType),
  } as any;
};

const deserializeAws_restJson1PlacementConstraint = (output: any, context: __SerdeContext): PlacementConstraint => {
  return {
    expression: __expectString(output.expression),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1PlacementConstraints = (output: any, context: __SerdeContext): PlacementConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PlacementConstraint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PlacementStrategies = (output: any, context: __SerdeContext): PlacementStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PlacementStrategy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PlacementStrategy = (output: any, context: __SerdeContext): PlacementStrategy => {
  return {
    field: __expectString(output.field),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1QueryStringParametersMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SageMakerPipelineParameter = (
  output: any,
  context: __SerdeContext
): SageMakerPipelineParameter => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1SageMakerPipelineParameterList = (
  output: any,
  context: __SerdeContext
): SageMakerPipelineParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SageMakerPipelineParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SelfManagedKafkaAccessConfigurationCredentials = (
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

const deserializeAws_restJson1SelfManagedKafkaAccessConfigurationVpc = (
  output: any,
  context: __SerdeContext
): SelfManagedKafkaAccessConfigurationVpc => {
  return {
    SecurityGroup:
      output.SecurityGroup != null
        ? deserializeAws_restJson1SecurityGroupIds(output.SecurityGroup, context)
        : undefined,
    Subnets: output.Subnets != null ? deserializeAws_restJson1SubnetIds(output.Subnets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Sqls = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Subnets = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
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
