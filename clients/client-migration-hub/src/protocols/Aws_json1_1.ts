// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateCreatedArtifactCommandInput,
  AssociateCreatedArtifactCommandOutput,
} from "../commands/AssociateCreatedArtifactCommand";
import {
  AssociateDiscoveredResourceCommandInput,
  AssociateDiscoveredResourceCommandOutput,
} from "../commands/AssociateDiscoveredResourceCommand";
import {
  CreateProgressUpdateStreamCommandInput,
  CreateProgressUpdateStreamCommandOutput,
} from "../commands/CreateProgressUpdateStreamCommand";
import {
  DeleteProgressUpdateStreamCommandInput,
  DeleteProgressUpdateStreamCommandOutput,
} from "../commands/DeleteProgressUpdateStreamCommand";
import {
  DescribeApplicationStateCommandInput,
  DescribeApplicationStateCommandOutput,
} from "../commands/DescribeApplicationStateCommand";
import {
  DescribeMigrationTaskCommandInput,
  DescribeMigrationTaskCommandOutput,
} from "../commands/DescribeMigrationTaskCommand";
import {
  DisassociateCreatedArtifactCommandInput,
  DisassociateCreatedArtifactCommandOutput,
} from "../commands/DisassociateCreatedArtifactCommand";
import {
  DisassociateDiscoveredResourceCommandInput,
  DisassociateDiscoveredResourceCommandOutput,
} from "../commands/DisassociateDiscoveredResourceCommand";
import {
  ImportMigrationTaskCommandInput,
  ImportMigrationTaskCommandOutput,
} from "../commands/ImportMigrationTaskCommand";
import {
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput,
} from "../commands/ListApplicationStatesCommand";
import {
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput,
} from "../commands/ListCreatedArtifactsCommand";
import {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand";
import { ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput } from "../commands/ListMigrationTasksCommand";
import {
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput,
} from "../commands/ListProgressUpdateStreamsCommand";
import {
  NotifyApplicationStateCommandInput,
  NotifyApplicationStateCommandOutput,
} from "../commands/NotifyApplicationStateCommand";
import {
  NotifyMigrationTaskStateCommandInput,
  NotifyMigrationTaskStateCommandOutput,
} from "../commands/NotifyMigrationTaskStateCommand";
import {
  PutResourceAttributesCommandInput,
  PutResourceAttributesCommandOutput,
} from "../commands/PutResourceAttributesCommand";
import { MigrationHubServiceException as __BaseException } from "../models/MigrationHubServiceException";
import {
  AccessDeniedException,
  ApplicationState,
  AssociateCreatedArtifactRequest,
  AssociateCreatedArtifactResult,
  AssociateDiscoveredResourceRequest,
  AssociateDiscoveredResourceResult,
  CreatedArtifact,
  CreateProgressUpdateStreamRequest,
  CreateProgressUpdateStreamResult,
  DeleteProgressUpdateStreamRequest,
  DeleteProgressUpdateStreamResult,
  DescribeApplicationStateRequest,
  DescribeApplicationStateResult,
  DescribeMigrationTaskRequest,
  DescribeMigrationTaskResult,
  DisassociateCreatedArtifactRequest,
  DisassociateCreatedArtifactResult,
  DisassociateDiscoveredResourceRequest,
  DisassociateDiscoveredResourceResult,
  DiscoveredResource,
  DryRunOperation,
  HomeRegionNotSetException,
  ImportMigrationTaskRequest,
  ImportMigrationTaskResult,
  InternalServerError,
  InvalidInputException,
  ListApplicationStatesRequest,
  ListApplicationStatesResult,
  ListCreatedArtifactsRequest,
  ListCreatedArtifactsResult,
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesResult,
  ListMigrationTasksRequest,
  ListMigrationTasksResult,
  ListProgressUpdateStreamsRequest,
  ListProgressUpdateStreamsResult,
  MigrationTask,
  MigrationTaskSummary,
  NotifyApplicationStateRequest,
  NotifyApplicationStateResult,
  NotifyMigrationTaskStateRequest,
  NotifyMigrationTaskStateResult,
  PolicyErrorException,
  ProgressUpdateStreamSummary,
  PutResourceAttributesRequest,
  PutResourceAttributesResult,
  ResourceAttribute,
  ResourceNotFoundException,
  ServiceUnavailableException,
  Task,
  ThrottlingException,
  UnauthorizedOperation,
} from "../models/models_0";

export const serializeAws_json1_1AssociateCreatedArtifactCommand = async (
  input: AssociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.AssociateCreatedArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateCreatedArtifactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateDiscoveredResourceCommand = async (
  input: AssociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.AssociateDiscoveredResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateDiscoveredResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProgressUpdateStreamCommand = async (
  input: CreateProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.CreateProgressUpdateStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProgressUpdateStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProgressUpdateStreamCommand = async (
  input: DeleteProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.DeleteProgressUpdateStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProgressUpdateStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationStateCommand = async (
  input: DescribeApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.DescribeApplicationState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMigrationTaskCommand = async (
  input: DescribeMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.DescribeMigrationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMigrationTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateCreatedArtifactCommand = async (
  input: DisassociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.DisassociateCreatedArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateCreatedArtifactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDiscoveredResourceCommand = async (
  input: DisassociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.DisassociateDiscoveredResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateDiscoveredResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportMigrationTaskCommand = async (
  input: ImportMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.ImportMigrationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportMigrationTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationStatesCommand = async (
  input: ListApplicationStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.ListApplicationStates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCreatedArtifactsCommand = async (
  input: ListCreatedArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.ListCreatedArtifacts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCreatedArtifactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDiscoveredResourcesCommand = async (
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.ListDiscoveredResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDiscoveredResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMigrationTasksCommand = async (
  input: ListMigrationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.ListMigrationTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMigrationTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProgressUpdateStreamsCommand = async (
  input: ListProgressUpdateStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.ListProgressUpdateStreams",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProgressUpdateStreamsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyApplicationStateCommand = async (
  input: NotifyApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.NotifyApplicationState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1NotifyApplicationStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyMigrationTaskStateCommand = async (
  input: NotifyMigrationTaskStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.NotifyMigrationTaskState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1NotifyMigrationTaskStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourceAttributesCommand = async (
  input: PutResourceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMigrationHub.PutResourceAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourceAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateCreatedArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCreatedArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateCreatedArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateCreatedArtifactResult(data, context);
  const response: AssociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateCreatedArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCreatedArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateDiscoveredResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDiscoveredResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDiscoveredResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDiscoveredResourceResult(data, context);
  const response: AssociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDiscoveredResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDiscoveredResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateProgressUpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgressUpdateStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProgressUpdateStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProgressUpdateStreamResult(data, context);
  const response: CreateProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProgressUpdateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgressUpdateStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteProgressUpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgressUpdateStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProgressUpdateStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProgressUpdateStreamResult(data, context);
  const response: DeleteProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProgressUpdateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgressUpdateStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeApplicationStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationStateResult(data, context);
  const response: DescribeApplicationStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMigrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMigrationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMigrationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMigrationTaskResult(data, context);
  const response: DescribeMigrationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMigrationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMigrationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateCreatedArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCreatedArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateCreatedArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateCreatedArtifactResult(data, context);
  const response: DisassociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateCreatedArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCreatedArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateDiscoveredResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDiscoveredResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateDiscoveredResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDiscoveredResourceResult(data, context);
  const response: DisassociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDiscoveredResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDiscoveredResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportMigrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportMigrationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportMigrationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportMigrationTaskResult(data, context);
  const response: ImportMigrationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportMigrationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportMigrationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListApplicationStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationStatesResult(data, context);
  const response: ListApplicationStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationStatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationStatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCreatedArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreatedArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCreatedArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCreatedArtifactsResult(data, context);
  const response: ListCreatedArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCreatedArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreatedArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDiscoveredResourcesResult(data, context);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDiscoveredResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMigrationTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMigrationTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMigrationTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMigrationTasksResult(data, context);
  const response: ListMigrationTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMigrationTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMigrationTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListProgressUpdateStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProgressUpdateStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProgressUpdateStreamsResult(data, context);
  const response: ListProgressUpdateStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProgressUpdateStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1NotifyApplicationStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyApplicationStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1NotifyApplicationStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyApplicationStateResult(data, context);
  const response: NotifyApplicationStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyApplicationStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyApplicationStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1NotifyMigrationTaskStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyMigrationTaskStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1NotifyMigrationTaskStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyMigrationTaskStateResult(data, context);
  const response: NotifyMigrationTaskStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyMigrationTaskStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyMigrationTaskStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutResourceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourceAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourceAttributesResult(data, context);
  const response: PutResourceAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourceAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhub#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DryRunOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DryRunOperation(body, context);
  const exception = new DryRunOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HomeRegionNotSetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HomeRegionNotSetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HomeRegionNotSetException(body, context);
  const exception = new HomeRegionNotSetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyErrorException(body, context);
  const exception = new PolicyErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnauthorizedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthorizedOperation(body, context);
  const exception = new UnauthorizedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ApplicationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateCreatedArtifactRequest = (
  input: AssociateCreatedArtifactRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatedArtifact != null && {
      CreatedArtifact: serializeAws_json1_1CreatedArtifact(input.CreatedArtifact, context),
    }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1AssociateDiscoveredResourceRequest = (
  input: AssociateDiscoveredResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiscoveredResource != null && {
      DiscoveredResource: serializeAws_json1_1DiscoveredResource(input.DiscoveredResource, context),
    }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1CreatedArtifact = (input: CreatedArtifact, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateProgressUpdateStreamRequest = (
  input: CreateProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ProgressUpdateStreamName != null && { ProgressUpdateStreamName: input.ProgressUpdateStreamName }),
  };
};

const serializeAws_json1_1DeleteProgressUpdateStreamRequest = (
  input: DeleteProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ProgressUpdateStreamName != null && { ProgressUpdateStreamName: input.ProgressUpdateStreamName }),
  };
};

const serializeAws_json1_1DescribeApplicationStateRequest = (
  input: DescribeApplicationStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationId != null && { ApplicationId: input.ApplicationId }),
  };
};

const serializeAws_json1_1DescribeMigrationTaskRequest = (
  input: DescribeMigrationTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1DisassociateCreatedArtifactRequest = (
  input: DisassociateCreatedArtifactRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatedArtifactName != null && { CreatedArtifactName: input.CreatedArtifactName }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1DisassociateDiscoveredResourceRequest = (
  input: DisassociateDiscoveredResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationId != null && { ConfigurationId: input.ConfigurationId }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1DiscoveredResource = (input: DiscoveredResource, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationId != null && { ConfigurationId: input.ConfigurationId }),
    ...(input.Description != null && { Description: input.Description }),
  };
};

const serializeAws_json1_1ImportMigrationTaskRequest = (
  input: ImportMigrationTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1ListApplicationStatesRequest = (
  input: ListApplicationStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationIds != null && {
      ApplicationIds: serializeAws_json1_1ApplicationIds(input.ApplicationIds, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCreatedArtifactsRequest = (
  input: ListCreatedArtifactsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1ListDiscoveredResourcesRequest = (
  input: ListDiscoveredResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

const serializeAws_json1_1ListMigrationTasksRequest = (
  input: ListMigrationTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
  };
};

const serializeAws_json1_1ListProgressUpdateStreamsRequest = (
  input: ListProgressUpdateStreamsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1NotifyApplicationStateRequest = (
  input: NotifyApplicationStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationId != null && { ApplicationId: input.ApplicationId }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.UpdateDateTime != null && { UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1NotifyMigrationTaskStateRequest = (
  input: NotifyMigrationTaskStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.NextUpdateSeconds != null && { NextUpdateSeconds: input.NextUpdateSeconds }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    ...(input.Task != null && { Task: serializeAws_json1_1Task(input.Task, context) }),
    ...(input.UpdateDateTime != null && { UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1PutResourceAttributesRequest = (
  input: PutResourceAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    ...(input.ResourceAttributeList != null && {
      ResourceAttributeList: serializeAws_json1_1ResourceAttributeList(input.ResourceAttributeList, context),
    }),
  };
};

const serializeAws_json1_1ResourceAttribute = (input: ResourceAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ResourceAttributeList = (input: ResourceAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ResourceAttribute(entry, context);
    });
};

const serializeAws_json1_1Task = (input: Task, context: __SerdeContext): any => {
  return {
    ...(input.ProgressPercent != null && { ProgressPercent: input.ProgressPercent }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusDetail != null && { StatusDetail: input.StatusDetail }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ApplicationState = (output: any, context: __SerdeContext): ApplicationState => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    ApplicationStatus: __expectString(output.ApplicationStatus),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ApplicationStateList = (output: any, context: __SerdeContext): ApplicationState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociateCreatedArtifactResult = (
  output: any,
  context: __SerdeContext
): AssociateCreatedArtifactResult => {
  return {} as any;
};

const deserializeAws_json1_1AssociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): AssociateDiscoveredResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1CreatedArtifact = (output: any, context: __SerdeContext): CreatedArtifact => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreatedArtifactList = (output: any, context: __SerdeContext): CreatedArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CreatedArtifact(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): CreateProgressUpdateStreamResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): DeleteProgressUpdateStreamResult => {
  return {} as any;
};

const deserializeAws_json1_1DescribeApplicationStateResult = (
  output: any,
  context: __SerdeContext
): DescribeApplicationStateResult => {
  return {
    ApplicationStatus: __expectString(output.ApplicationStatus),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMigrationTaskResult = (
  output: any,
  context: __SerdeContext
): DescribeMigrationTaskResult => {
  return {
    MigrationTask:
      output.MigrationTask != null ? deserializeAws_json1_1MigrationTask(output.MigrationTask, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateCreatedArtifactResult = (
  output: any,
  context: __SerdeContext
): DisassociateCreatedArtifactResult => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): DisassociateDiscoveredResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1DiscoveredResource = (output: any, context: __SerdeContext): DiscoveredResource => {
  return {
    ConfigurationId: __expectString(output.ConfigurationId),
    Description: __expectString(output.Description),
  } as any;
};

const deserializeAws_json1_1DiscoveredResourceList = (output: any, context: __SerdeContext): DiscoveredResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DiscoveredResource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DryRunOperation = (output: any, context: __SerdeContext): DryRunOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1HomeRegionNotSetException = (
  output: any,
  context: __SerdeContext
): HomeRegionNotSetException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ImportMigrationTaskResult = (
  output: any,
  context: __SerdeContext
): ImportMigrationTaskResult => {
  return {} as any;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LatestResourceAttributeList = (
  output: any,
  context: __SerdeContext
): ResourceAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListApplicationStatesResult = (
  output: any,
  context: __SerdeContext
): ListApplicationStatesResult => {
  return {
    ApplicationStateList:
      output.ApplicationStateList != null
        ? deserializeAws_json1_1ApplicationStateList(output.ApplicationStateList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCreatedArtifactsResult = (
  output: any,
  context: __SerdeContext
): ListCreatedArtifactsResult => {
  return {
    CreatedArtifactList:
      output.CreatedArtifactList != null
        ? deserializeAws_json1_1CreatedArtifactList(output.CreatedArtifactList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDiscoveredResourcesResult = (
  output: any,
  context: __SerdeContext
): ListDiscoveredResourcesResult => {
  return {
    DiscoveredResourceList:
      output.DiscoveredResourceList != null
        ? deserializeAws_json1_1DiscoveredResourceList(output.DiscoveredResourceList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListMigrationTasksResult = (
  output: any,
  context: __SerdeContext
): ListMigrationTasksResult => {
  return {
    MigrationTaskSummaryList:
      output.MigrationTaskSummaryList != null
        ? deserializeAws_json1_1MigrationTaskSummaryList(output.MigrationTaskSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListProgressUpdateStreamsResult = (
  output: any,
  context: __SerdeContext
): ListProgressUpdateStreamsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ProgressUpdateStreamSummaryList:
      output.ProgressUpdateStreamSummaryList != null
        ? deserializeAws_json1_1ProgressUpdateStreamSummaryList(output.ProgressUpdateStreamSummaryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MigrationTask = (output: any, context: __SerdeContext): MigrationTask => {
  return {
    MigrationTaskName: __expectString(output.MigrationTaskName),
    ProgressUpdateStream: __expectString(output.ProgressUpdateStream),
    ResourceAttributeList:
      output.ResourceAttributeList != null
        ? deserializeAws_json1_1LatestResourceAttributeList(output.ResourceAttributeList, context)
        : undefined,
    Task: output.Task != null ? deserializeAws_json1_1Task(output.Task, context) : undefined,
    UpdateDateTime:
      output.UpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1MigrationTaskSummary = (output: any, context: __SerdeContext): MigrationTaskSummary => {
  return {
    MigrationTaskName: __expectString(output.MigrationTaskName),
    ProgressPercent: __expectInt32(output.ProgressPercent),
    ProgressUpdateStream: __expectString(output.ProgressUpdateStream),
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
    UpdateDateTime:
      output.UpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1MigrationTaskSummaryList = (
  output: any,
  context: __SerdeContext
): MigrationTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MigrationTaskSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotifyApplicationStateResult = (
  output: any,
  context: __SerdeContext
): NotifyApplicationStateResult => {
  return {} as any;
};

const deserializeAws_json1_1NotifyMigrationTaskStateResult = (
  output: any,
  context: __SerdeContext
): NotifyMigrationTaskStateResult => {
  return {} as any;
};

const deserializeAws_json1_1PolicyErrorException = (output: any, context: __SerdeContext): PolicyErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ProgressUpdateStreamSummary = (
  output: any,
  context: __SerdeContext
): ProgressUpdateStreamSummary => {
  return {
    ProgressUpdateStreamName: __expectString(output.ProgressUpdateStreamName),
  } as any;
};

const deserializeAws_json1_1ProgressUpdateStreamSummaryList = (
  output: any,
  context: __SerdeContext
): ProgressUpdateStreamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProgressUpdateStreamSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutResourceAttributesResult = (
  output: any,
  context: __SerdeContext
): PutResourceAttributesResult => {
  return {} as any;
};

const deserializeAws_json1_1ResourceAttribute = (output: any, context: __SerdeContext): ResourceAttribute => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Task = (output: any, context: __SerdeContext): Task => {
  return {
    ProgressPercent: __expectInt32(output.ProgressPercent),
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

const deserializeAws_json1_1UnauthorizedOperation = (output: any, context: __SerdeContext): UnauthorizedOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
