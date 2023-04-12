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

/**
 * serializeAws_json1_1AssociateCreatedArtifactCommand
 */
export const se_AssociateCreatedArtifactCommand = async (
  input: AssociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateCreatedArtifact");
  let body: any;
  body = JSON.stringify(se_AssociateCreatedArtifactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateDiscoveredResourceCommand
 */
export const se_AssociateDiscoveredResourceCommand = async (
  input: AssociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateDiscoveredResource");
  let body: any;
  body = JSON.stringify(se_AssociateDiscoveredResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProgressUpdateStreamCommand
 */
export const se_CreateProgressUpdateStreamCommand = async (
  input: CreateProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProgressUpdateStream");
  let body: any;
  body = JSON.stringify(se_CreateProgressUpdateStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProgressUpdateStreamCommand
 */
export const se_DeleteProgressUpdateStreamCommand = async (
  input: DeleteProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProgressUpdateStream");
  let body: any;
  body = JSON.stringify(se_DeleteProgressUpdateStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationStateCommand
 */
export const se_DescribeApplicationStateCommand = async (
  input: DescribeApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicationState");
  let body: any;
  body = JSON.stringify(se_DescribeApplicationStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMigrationTaskCommand
 */
export const se_DescribeMigrationTaskCommand = async (
  input: DescribeMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMigrationTask");
  let body: any;
  body = JSON.stringify(se_DescribeMigrationTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateCreatedArtifactCommand
 */
export const se_DisassociateCreatedArtifactCommand = async (
  input: DisassociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateCreatedArtifact");
  let body: any;
  body = JSON.stringify(se_DisassociateCreatedArtifactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateDiscoveredResourceCommand
 */
export const se_DisassociateDiscoveredResourceCommand = async (
  input: DisassociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateDiscoveredResource");
  let body: any;
  body = JSON.stringify(se_DisassociateDiscoveredResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportMigrationTaskCommand
 */
export const se_ImportMigrationTaskCommand = async (
  input: ImportMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportMigrationTask");
  let body: any;
  body = JSON.stringify(se_ImportMigrationTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationStatesCommand
 */
export const se_ListApplicationStatesCommand = async (
  input: ListApplicationStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationStates");
  let body: any;
  body = JSON.stringify(se_ListApplicationStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCreatedArtifactsCommand
 */
export const se_ListCreatedArtifactsCommand = async (
  input: ListCreatedArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCreatedArtifacts");
  let body: any;
  body = JSON.stringify(se_ListCreatedArtifactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDiscoveredResourcesCommand
 */
export const se_ListDiscoveredResourcesCommand = async (
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDiscoveredResources");
  let body: any;
  body = JSON.stringify(se_ListDiscoveredResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMigrationTasksCommand
 */
export const se_ListMigrationTasksCommand = async (
  input: ListMigrationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMigrationTasks");
  let body: any;
  body = JSON.stringify(se_ListMigrationTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProgressUpdateStreamsCommand
 */
export const se_ListProgressUpdateStreamsCommand = async (
  input: ListProgressUpdateStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProgressUpdateStreams");
  let body: any;
  body = JSON.stringify(se_ListProgressUpdateStreamsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyApplicationStateCommand
 */
export const se_NotifyApplicationStateCommand = async (
  input: NotifyApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyApplicationState");
  let body: any;
  body = JSON.stringify(se_NotifyApplicationStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyMigrationTaskStateCommand
 */
export const se_NotifyMigrationTaskStateCommand = async (
  input: NotifyMigrationTaskStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyMigrationTaskState");
  let body: any;
  body = JSON.stringify(se_NotifyMigrationTaskStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourceAttributesCommand
 */
export const se_PutResourceAttributesCommand = async (
  input: PutResourceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourceAttributes");
  let body: any;
  body = JSON.stringify(se_PutResourceAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateCreatedArtifactCommand
 */
export const de_AssociateCreatedArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCreatedArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateCreatedArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateCreatedArtifactResult(data, context);
  const response: AssociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateCreatedArtifactCommandError
 */
const de_AssociateCreatedArtifactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateDiscoveredResourceCommand
 */
export const de_AssociateDiscoveredResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDiscoveredResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDiscoveredResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateDiscoveredResourceResult(data, context);
  const response: AssociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateDiscoveredResourceCommandError
 */
const de_AssociateDiscoveredResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await de_PolicyErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateProgressUpdateStreamCommand
 */
export const de_CreateProgressUpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgressUpdateStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProgressUpdateStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProgressUpdateStreamResult(data, context);
  const response: CreateProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProgressUpdateStreamCommandError
 */
const de_CreateProgressUpdateStreamCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteProgressUpdateStreamCommand
 */
export const de_DeleteProgressUpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgressUpdateStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProgressUpdateStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProgressUpdateStreamResult(data, context);
  const response: DeleteProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProgressUpdateStreamCommandError
 */
const de_DeleteProgressUpdateStreamCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeApplicationStateCommand
 */
export const de_DescribeApplicationStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationStateResult(data, context);
  const response: DescribeApplicationStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeApplicationStateCommandError
 */
const de_DescribeApplicationStateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await de_PolicyErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeMigrationTaskCommand
 */
export const de_DescribeMigrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMigrationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMigrationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMigrationTaskResult(data, context);
  const response: DescribeMigrationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMigrationTaskCommandError
 */
const de_DescribeMigrationTaskCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateCreatedArtifactCommand
 */
export const de_DisassociateCreatedArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCreatedArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateCreatedArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateCreatedArtifactResult(data, context);
  const response: DisassociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateCreatedArtifactCommandError
 */
const de_DisassociateCreatedArtifactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateDiscoveredResourceCommand
 */
export const de_DisassociateDiscoveredResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDiscoveredResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateDiscoveredResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateDiscoveredResourceResult(data, context);
  const response: DisassociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateDiscoveredResourceCommandError
 */
const de_DisassociateDiscoveredResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportMigrationTaskCommand
 */
export const de_ImportMigrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportMigrationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportMigrationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportMigrationTaskResult(data, context);
  const response: ImportMigrationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportMigrationTaskCommandError
 */
const de_ImportMigrationTaskCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListApplicationStatesCommand
 */
export const de_ListApplicationStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApplicationStatesResult(data, context);
  const response: ListApplicationStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListApplicationStatesCommandError
 */
const de_ListApplicationStatesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCreatedArtifactsCommand
 */
export const de_ListCreatedArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreatedArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCreatedArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCreatedArtifactsResult(data, context);
  const response: ListCreatedArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCreatedArtifactsCommandError
 */
const de_ListCreatedArtifactsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDiscoveredResourcesCommand
 */
export const de_ListDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDiscoveredResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDiscoveredResourcesResult(data, context);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesCommandError
 */
const de_ListDiscoveredResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListMigrationTasksCommand
 */
export const de_ListMigrationTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMigrationTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMigrationTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMigrationTasksResult(data, context);
  const response: ListMigrationTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMigrationTasksCommandError
 */
const de_ListMigrationTasksCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await de_PolicyErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListProgressUpdateStreamsCommand
 */
export const de_ListProgressUpdateStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProgressUpdateStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProgressUpdateStreamsResult(data, context);
  const response: ListProgressUpdateStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListProgressUpdateStreamsCommandError
 */
const de_ListProgressUpdateStreamsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1NotifyApplicationStateCommand
 */
export const de_NotifyApplicationStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyApplicationStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyApplicationStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyApplicationStateResult(data, context);
  const response: NotifyApplicationStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyApplicationStateCommandError
 */
const de_NotifyApplicationStateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      throw await de_PolicyErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1NotifyMigrationTaskStateCommand
 */
export const de_NotifyMigrationTaskStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyMigrationTaskStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyMigrationTaskStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyMigrationTaskStateResult(data, context);
  const response: NotifyMigrationTaskStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyMigrationTaskStateCommandError
 */
const de_NotifyMigrationTaskStateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutResourceAttributesCommand
 */
export const de_PutResourceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourceAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourceAttributesResult(data, context);
  const response: PutResourceAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourceAttributesCommandError
 */
const de_PutResourceAttributesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      throw await de_DryRunOperationRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DryRunOperationRes
 */
const de_DryRunOperationRes = async (parsedOutput: any, context: __SerdeContext): Promise<DryRunOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DryRunOperation(body, context);
  const exception = new DryRunOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HomeRegionNotSetExceptionRes
 */
const de_HomeRegionNotSetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HomeRegionNotSetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HomeRegionNotSetException(body, context);
  const exception = new HomeRegionNotSetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyErrorExceptionRes
 */
const de_PolicyErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyErrorException(body, context);
  const exception = new PolicyErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnauthorizedOperationRes
 */
const de_UnauthorizedOperationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnauthorizedOperation(body, context);
  const exception = new UnauthorizedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ApplicationIds
 */
const se_ApplicationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateCreatedArtifactRequest
 */
const se_AssociateCreatedArtifactRequest = (input: AssociateCreatedArtifactRequest, context: __SerdeContext): any => {
  return {
    ...(input.CreatedArtifact != null && { CreatedArtifact: se_CreatedArtifact(input.CreatedArtifact, context) }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

/**
 * serializeAws_json1_1AssociateDiscoveredResourceRequest
 */
const se_AssociateDiscoveredResourceRequest = (
  input: AssociateDiscoveredResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiscoveredResource != null && {
      DiscoveredResource: se_DiscoveredResource(input.DiscoveredResource, context),
    }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

/**
 * serializeAws_json1_1CreatedArtifact
 */
const se_CreatedArtifact = (input: CreatedArtifact, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateProgressUpdateStreamRequest
 */
const se_CreateProgressUpdateStreamRequest = (
  input: CreateProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ProgressUpdateStreamName != null && { ProgressUpdateStreamName: input.ProgressUpdateStreamName }),
  };
};

/**
 * serializeAws_json1_1DeleteProgressUpdateStreamRequest
 */
const se_DeleteProgressUpdateStreamRequest = (
  input: DeleteProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ProgressUpdateStreamName != null && { ProgressUpdateStreamName: input.ProgressUpdateStreamName }),
  };
};

/**
 * serializeAws_json1_1DescribeApplicationStateRequest
 */
const se_DescribeApplicationStateRequest = (input: DescribeApplicationStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationId != null && { ApplicationId: input.ApplicationId }),
  };
};

/**
 * serializeAws_json1_1DescribeMigrationTaskRequest
 */
const se_DescribeMigrationTaskRequest = (input: DescribeMigrationTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

/**
 * serializeAws_json1_1DisassociateCreatedArtifactRequest
 */
const se_DisassociateCreatedArtifactRequest = (
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

/**
 * serializeAws_json1_1DisassociateDiscoveredResourceRequest
 */
const se_DisassociateDiscoveredResourceRequest = (
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

/**
 * serializeAws_json1_1DiscoveredResource
 */
const se_DiscoveredResource = (input: DiscoveredResource, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationId != null && { ConfigurationId: input.ConfigurationId }),
    ...(input.Description != null && { Description: input.Description }),
  };
};

/**
 * serializeAws_json1_1ImportMigrationTaskRequest
 */
const se_ImportMigrationTaskRequest = (input: ImportMigrationTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

/**
 * serializeAws_json1_1ListApplicationStatesRequest
 */
const se_ListApplicationStatesRequest = (input: ListApplicationStatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationIds != null && { ApplicationIds: se_ApplicationIds(input.ApplicationIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCreatedArtifactsRequest
 */
const se_ListCreatedArtifactsRequest = (input: ListCreatedArtifactsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

/**
 * serializeAws_json1_1ListDiscoveredResourcesRequest
 */
const se_ListDiscoveredResourcesRequest = (input: ListDiscoveredResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
  };
};

/**
 * serializeAws_json1_1ListMigrationTasksRequest
 */
const se_ListMigrationTasksRequest = (input: ListMigrationTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
  };
};

/**
 * serializeAws_json1_1ListProgressUpdateStreamsRequest
 */
const se_ListProgressUpdateStreamsRequest = (input: ListProgressUpdateStreamsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1NotifyApplicationStateRequest
 */
const se_NotifyApplicationStateRequest = (input: NotifyApplicationStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationId != null && { ApplicationId: input.ApplicationId }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.UpdateDateTime != null && { UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1NotifyMigrationTaskStateRequest
 */
const se_NotifyMigrationTaskStateRequest = (input: NotifyMigrationTaskStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.NextUpdateSeconds != null && { NextUpdateSeconds: input.NextUpdateSeconds }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    ...(input.Task != null && { Task: se_Task(input.Task, context) }),
    ...(input.UpdateDateTime != null && { UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1PutResourceAttributesRequest
 */
const se_PutResourceAttributesRequest = (input: PutResourceAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName != null && { MigrationTaskName: input.MigrationTaskName }),
    ...(input.ProgressUpdateStream != null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    ...(input.ResourceAttributeList != null && {
      ResourceAttributeList: se_ResourceAttributeList(input.ResourceAttributeList, context),
    }),
  };
};

/**
 * serializeAws_json1_1ResourceAttribute
 */
const se_ResourceAttribute = (input: ResourceAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ResourceAttributeList
 */
const se_ResourceAttributeList = (input: ResourceAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1Task
 */
const se_Task = (input: Task, context: __SerdeContext): any => {
  return {
    ...(input.ProgressPercent != null && { ProgressPercent: input.ProgressPercent }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusDetail != null && { StatusDetail: input.StatusDetail }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationState
 */
const de_ApplicationState = (output: any, context: __SerdeContext): ApplicationState => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    ApplicationStatus: __expectString(output.ApplicationStatus),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationStateList
 */
const de_ApplicationStateList = (output: any, context: __SerdeContext): ApplicationState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateCreatedArtifactResult
 */
const de_AssociateCreatedArtifactResult = (output: any, context: __SerdeContext): AssociateCreatedArtifactResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateDiscoveredResourceResult
 */
const de_AssociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): AssociateDiscoveredResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreatedArtifact
 */
const de_CreatedArtifact = (output: any, context: __SerdeContext): CreatedArtifact => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1CreatedArtifactList
 */
const de_CreatedArtifactList = (output: any, context: __SerdeContext): CreatedArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CreatedArtifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateProgressUpdateStreamResult
 */
const de_CreateProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): CreateProgressUpdateStreamResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProgressUpdateStreamResult
 */
const de_DeleteProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): DeleteProgressUpdateStreamResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationStateResult
 */
const de_DescribeApplicationStateResult = (output: any, context: __SerdeContext): DescribeApplicationStateResult => {
  return {
    ApplicationStatus: __expectString(output.ApplicationStatus),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMigrationTaskResult
 */
const de_DescribeMigrationTaskResult = (output: any, context: __SerdeContext): DescribeMigrationTaskResult => {
  return {
    MigrationTask: output.MigrationTask != null ? de_MigrationTask(output.MigrationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateCreatedArtifactResult
 */
const de_DisassociateCreatedArtifactResult = (
  output: any,
  context: __SerdeContext
): DisassociateCreatedArtifactResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateDiscoveredResourceResult
 */
const de_DisassociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): DisassociateDiscoveredResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DiscoveredResource
 */
const de_DiscoveredResource = (output: any, context: __SerdeContext): DiscoveredResource => {
  return {
    ConfigurationId: __expectString(output.ConfigurationId),
    Description: __expectString(output.Description),
  } as any;
};

/**
 * deserializeAws_json1_1DiscoveredResourceList
 */
const de_DiscoveredResourceList = (output: any, context: __SerdeContext): DiscoveredResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DiscoveredResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DryRunOperation
 */
const de_DryRunOperation = (output: any, context: __SerdeContext): DryRunOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1HomeRegionNotSetException
 */
const de_HomeRegionNotSetException = (output: any, context: __SerdeContext): HomeRegionNotSetException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ImportMigrationTaskResult
 */
const de_ImportMigrationTaskResult = (output: any, context: __SerdeContext): ImportMigrationTaskResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LatestResourceAttributeList
 */
const de_LatestResourceAttributeList = (output: any, context: __SerdeContext): ResourceAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListApplicationStatesResult
 */
const de_ListApplicationStatesResult = (output: any, context: __SerdeContext): ListApplicationStatesResult => {
  return {
    ApplicationStateList:
      output.ApplicationStateList != null ? de_ApplicationStateList(output.ApplicationStateList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCreatedArtifactsResult
 */
const de_ListCreatedArtifactsResult = (output: any, context: __SerdeContext): ListCreatedArtifactsResult => {
  return {
    CreatedArtifactList:
      output.CreatedArtifactList != null ? de_CreatedArtifactList(output.CreatedArtifactList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesResult
 */
const de_ListDiscoveredResourcesResult = (output: any, context: __SerdeContext): ListDiscoveredResourcesResult => {
  return {
    DiscoveredResourceList:
      output.DiscoveredResourceList != null
        ? de_DiscoveredResourceList(output.DiscoveredResourceList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMigrationTasksResult
 */
const de_ListMigrationTasksResult = (output: any, context: __SerdeContext): ListMigrationTasksResult => {
  return {
    MigrationTaskSummaryList:
      output.MigrationTaskSummaryList != null
        ? de_MigrationTaskSummaryList(output.MigrationTaskSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListProgressUpdateStreamsResult
 */
const de_ListProgressUpdateStreamsResult = (output: any, context: __SerdeContext): ListProgressUpdateStreamsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    ProgressUpdateStreamSummaryList:
      output.ProgressUpdateStreamSummaryList != null
        ? de_ProgressUpdateStreamSummaryList(output.ProgressUpdateStreamSummaryList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MigrationTask
 */
const de_MigrationTask = (output: any, context: __SerdeContext): MigrationTask => {
  return {
    MigrationTaskName: __expectString(output.MigrationTaskName),
    ProgressUpdateStream: __expectString(output.ProgressUpdateStream),
    ResourceAttributeList:
      output.ResourceAttributeList != null
        ? de_LatestResourceAttributeList(output.ResourceAttributeList, context)
        : undefined,
    Task: output.Task != null ? de_Task(output.Task, context) : undefined,
    UpdateDateTime:
      output.UpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MigrationTaskSummary
 */
const de_MigrationTaskSummary = (output: any, context: __SerdeContext): MigrationTaskSummary => {
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

/**
 * deserializeAws_json1_1MigrationTaskSummaryList
 */
const de_MigrationTaskSummaryList = (output: any, context: __SerdeContext): MigrationTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MigrationTaskSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotifyApplicationStateResult
 */
const de_NotifyApplicationStateResult = (output: any, context: __SerdeContext): NotifyApplicationStateResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1NotifyMigrationTaskStateResult
 */
const de_NotifyMigrationTaskStateResult = (output: any, context: __SerdeContext): NotifyMigrationTaskStateResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PolicyErrorException
 */
const de_PolicyErrorException = (output: any, context: __SerdeContext): PolicyErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ProgressUpdateStreamSummary
 */
const de_ProgressUpdateStreamSummary = (output: any, context: __SerdeContext): ProgressUpdateStreamSummary => {
  return {
    ProgressUpdateStreamName: __expectString(output.ProgressUpdateStreamName),
  } as any;
};

/**
 * deserializeAws_json1_1ProgressUpdateStreamSummaryList
 */
const de_ProgressUpdateStreamSummaryList = (output: any, context: __SerdeContext): ProgressUpdateStreamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProgressUpdateStreamSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutResourceAttributesResult
 */
const de_PutResourceAttributesResult = (output: any, context: __SerdeContext): PutResourceAttributesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ResourceAttribute
 */
const de_ResourceAttribute = (output: any, context: __SerdeContext): ResourceAttribute => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Task
 */
const de_Task = (output: any, context: __SerdeContext): Task => {
  return {
    ProgressPercent: __expectInt32(output.ProgressPercent),
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
  } as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1UnauthorizedOperation
 */
const de_UnauthorizedOperation = (output: any, context: __SerdeContext): UnauthorizedOperation => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSMigrationHub.${operation}`,
  };
}

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
