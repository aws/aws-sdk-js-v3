// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AssociateDiscoveredResourceRequest,
  CreatedArtifact,
  CreateProgressUpdateStreamRequest,
  DeleteProgressUpdateStreamRequest,
  DescribeApplicationStateRequest,
  DescribeApplicationStateResult,
  DescribeMigrationTaskRequest,
  DescribeMigrationTaskResult,
  DisassociateCreatedArtifactRequest,
  DisassociateDiscoveredResourceRequest,
  DiscoveredResource,
  DryRunOperation,
  HomeRegionNotSetException,
  ImportMigrationTaskRequest,
  InternalServerError,
  InvalidInputException,
  ListApplicationStatesRequest,
  ListApplicationStatesResult,
  ListCreatedArtifactsRequest,
  ListDiscoveredResourcesRequest,
  ListMigrationTasksRequest,
  ListMigrationTasksResult,
  ListProgressUpdateStreamsRequest,
  MigrationTask,
  MigrationTaskSummary,
  NotifyApplicationStateRequest,
  NotifyMigrationTaskStateRequest,
  PolicyErrorException,
  PutResourceAttributesRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AssociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ImportMigrationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCreatedArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListProgressUpdateStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: NotifyApplicationStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: NotifyMigrationTaskStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutResourceAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnauthorizedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ApplicationIds omitted.

// se_AssociateCreatedArtifactRequest omitted.

// se_AssociateDiscoveredResourceRequest omitted.

// se_CreatedArtifact omitted.

// se_CreateProgressUpdateStreamRequest omitted.

// se_DeleteProgressUpdateStreamRequest omitted.

// se_DescribeApplicationStateRequest omitted.

// se_DescribeMigrationTaskRequest omitted.

// se_DisassociateCreatedArtifactRequest omitted.

// se_DisassociateDiscoveredResourceRequest omitted.

// se_DiscoveredResource omitted.

// se_ImportMigrationTaskRequest omitted.

// se_ListApplicationStatesRequest omitted.

// se_ListCreatedArtifactsRequest omitted.

// se_ListDiscoveredResourcesRequest omitted.

// se_ListMigrationTasksRequest omitted.

// se_ListProgressUpdateStreamsRequest omitted.

/**
 * serializeAws_json1_1NotifyApplicationStateRequest
 */
const se_NotifyApplicationStateRequest = (input: NotifyApplicationStateRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationId: [],
    DryRun: [],
    Status: [],
    UpdateDateTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1NotifyMigrationTaskStateRequest
 */
const se_NotifyMigrationTaskStateRequest = (input: NotifyMigrationTaskStateRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    MigrationTaskName: [],
    NextUpdateSeconds: [],
    ProgressUpdateStream: [],
    Task: _json,
    UpdateDateTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_PutResourceAttributesRequest omitted.

// se_ResourceAttribute omitted.

// se_ResourceAttributeList omitted.

// se_Task omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1ApplicationState
 */
const de_ApplicationState = (output: any, context: __SerdeContext): ApplicationState => {
  return take(output, {
    ApplicationId: __expectString,
    ApplicationStatus: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ApplicationStateList
 */
const de_ApplicationStateList = (output: any, context: __SerdeContext): ApplicationState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationState(entry, context);
    });
  return retVal;
};

// de_AssociateCreatedArtifactResult omitted.

// de_AssociateDiscoveredResourceResult omitted.

// de_CreatedArtifact omitted.

// de_CreatedArtifactList omitted.

// de_CreateProgressUpdateStreamResult omitted.

// de_DeleteProgressUpdateStreamResult omitted.

/**
 * deserializeAws_json1_1DescribeApplicationStateResult
 */
const de_DescribeApplicationStateResult = (output: any, context: __SerdeContext): DescribeApplicationStateResult => {
  return take(output, {
    ApplicationStatus: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMigrationTaskResult
 */
const de_DescribeMigrationTaskResult = (output: any, context: __SerdeContext): DescribeMigrationTaskResult => {
  return take(output, {
    MigrationTask: (_: any) => de_MigrationTask(_, context),
  }) as any;
};

// de_DisassociateCreatedArtifactResult omitted.

// de_DisassociateDiscoveredResourceResult omitted.

// de_DiscoveredResource omitted.

// de_DiscoveredResourceList omitted.

// de_DryRunOperation omitted.

// de_HomeRegionNotSetException omitted.

// de_ImportMigrationTaskResult omitted.

// de_InternalServerError omitted.

// de_InvalidInputException omitted.

// de_LatestResourceAttributeList omitted.

/**
 * deserializeAws_json1_1ListApplicationStatesResult
 */
const de_ListApplicationStatesResult = (output: any, context: __SerdeContext): ListApplicationStatesResult => {
  return take(output, {
    ApplicationStateList: (_: any) => de_ApplicationStateList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListCreatedArtifactsResult omitted.

// de_ListDiscoveredResourcesResult omitted.

/**
 * deserializeAws_json1_1ListMigrationTasksResult
 */
const de_ListMigrationTasksResult = (output: any, context: __SerdeContext): ListMigrationTasksResult => {
  return take(output, {
    MigrationTaskSummaryList: (_: any) => de_MigrationTaskSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListProgressUpdateStreamsResult omitted.

/**
 * deserializeAws_json1_1MigrationTask
 */
const de_MigrationTask = (output: any, context: __SerdeContext): MigrationTask => {
  return take(output, {
    MigrationTaskName: __expectString,
    ProgressUpdateStream: __expectString,
    ResourceAttributeList: _json,
    Task: _json,
    UpdateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1MigrationTaskSummary
 */
const de_MigrationTaskSummary = (output: any, context: __SerdeContext): MigrationTaskSummary => {
  return take(output, {
    MigrationTaskName: __expectString,
    ProgressPercent: __expectInt32,
    ProgressUpdateStream: __expectString,
    Status: __expectString,
    StatusDetail: __expectString,
    UpdateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1MigrationTaskSummaryList
 */
const de_MigrationTaskSummaryList = (output: any, context: __SerdeContext): MigrationTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MigrationTaskSummary(entry, context);
    });
  return retVal;
};

// de_NotifyApplicationStateResult omitted.

// de_NotifyMigrationTaskStateResult omitted.

// de_PolicyErrorException omitted.

// de_ProgressUpdateStreamSummary omitted.

// de_ProgressUpdateStreamSummaryList omitted.

// de_PutResourceAttributesResult omitted.

// de_ResourceAttribute omitted.

// de_ResourceNotFoundException omitted.

// de_ServiceUnavailableException omitted.

// de_Task omitted.

// de_ThrottlingException omitted.

// de_UnauthorizedOperation omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
