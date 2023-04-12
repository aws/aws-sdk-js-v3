// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput,
} from "../commands/AssociateConfigurationItemsToApplicationCommand";
import {
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput,
} from "../commands/BatchDeleteImportDataCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput } from "../commands/DeleteApplicationsCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DescribeAgentsCommandInput, DescribeAgentsCommandOutput } from "../commands/DescribeAgentsCommand";
import {
  DescribeConfigurationsCommandInput,
  DescribeConfigurationsCommandOutput,
} from "../commands/DescribeConfigurationsCommand";
import {
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "../commands/DescribeContinuousExportsCommand";
import {
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput,
} from "../commands/DescribeExportConfigurationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import {
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "../commands/DescribeImportTasksCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DisassociateConfigurationItemsFromApplicationCommandInput,
  DisassociateConfigurationItemsFromApplicationCommandOutput,
} from "../commands/DisassociateConfigurationItemsFromApplicationCommand";
import {
  ExportConfigurationsCommandInput,
  ExportConfigurationsCommandOutput,
} from "../commands/ExportConfigurationsCommand";
import {
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput,
} from "../commands/GetDiscoverySummaryCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "../commands/ListConfigurationsCommand";
import {
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput,
} from "../commands/ListServerNeighborsCommand";
import {
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput,
} from "../commands/StartContinuousExportCommand";
import {
  StartDataCollectionByAgentIdsCommandInput,
  StartDataCollectionByAgentIdsCommandOutput,
} from "../commands/StartDataCollectionByAgentIdsCommand";
import { StartExportTaskCommandInput, StartExportTaskCommandOutput } from "../commands/StartExportTaskCommand";
import { StartImportTaskCommandInput, StartImportTaskCommandOutput } from "../commands/StartImportTaskCommand";
import {
  StopContinuousExportCommandInput,
  StopContinuousExportCommandOutput,
} from "../commands/StopContinuousExportCommand";
import {
  StopDataCollectionByAgentIdsCommandInput,
  StopDataCollectionByAgentIdsCommandOutput,
} from "../commands/StopDataCollectionByAgentIdsCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { ApplicationDiscoveryServiceServiceException as __BaseException } from "../models/ApplicationDiscoveryServiceServiceException";
import {
  AgentConfigurationStatus,
  AgentInfo,
  AgentNetworkInfo,
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
  AuthorizationErrorException,
  BatchDeleteImportDataError,
  BatchDeleteImportDataRequest,
  BatchDeleteImportDataResponse,
  ConfigurationTag,
  ConflictErrorException,
  ContinuousExportDescription,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateTagsRequest,
  CreateTagsResponse,
  CustomerAgentInfo,
  CustomerAgentlessCollectorInfo,
  CustomerConnectorInfo,
  CustomerMeCollectorInfo,
  DeleteApplicationsRequest,
  DeleteApplicationsResponse,
  DeleteTagsRequest,
  DeleteTagsResponse,
  DescribeAgentsRequest,
  DescribeAgentsResponse,
  DescribeConfigurationsRequest,
  DescribeConfigurationsResponse,
  DescribeContinuousExportsRequest,
  DescribeContinuousExportsResponse,
  DescribeExportConfigurationsRequest,
  DescribeExportConfigurationsResponse,
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
  DescribeImportTasksRequest,
  DescribeImportTasksResponse,
  DescribeTagsRequest,
  DescribeTagsResponse,
  DisassociateConfigurationItemsFromApplicationRequest,
  DisassociateConfigurationItemsFromApplicationResponse,
  ExportConfigurationsResponse,
  ExportDataFormat,
  ExportFilter,
  ExportInfo,
  Filter,
  GetDiscoverySummaryRequest,
  GetDiscoverySummaryResponse,
  HomeRegionNotSetException,
  ImportTask,
  ImportTaskFilter,
  InvalidParameterException,
  InvalidParameterValueException,
  ListConfigurationsRequest,
  ListConfigurationsResponse,
  ListServerNeighborsRequest,
  ListServerNeighborsResponse,
  NeighborConnectionDetail,
  OperationNotPermittedException,
  OrderByElement,
  ResourceInUseException,
  ResourceNotFoundException,
  ServerInternalErrorException,
  StartContinuousExportRequest,
  StartContinuousExportResponse,
  StartDataCollectionByAgentIdsRequest,
  StartDataCollectionByAgentIdsResponse,
  StartExportTaskRequest,
  StartExportTaskResponse,
  StartImportTaskRequest,
  StartImportTaskResponse,
  StopContinuousExportRequest,
  StopContinuousExportResponse,
  StopDataCollectionByAgentIdsRequest,
  StopDataCollectionByAgentIdsResponse,
  Tag,
  TagFilter,
  UpdateApplicationRequest,
  UpdateApplicationResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand
 */
export const se_AssociateConfigurationItemsToApplicationCommand = async (
  input: AssociateConfigurationItemsToApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateConfigurationItemsToApplication");
  let body: any;
  body = JSON.stringify(se_AssociateConfigurationItemsToApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteImportDataCommand
 */
export const se_BatchDeleteImportDataCommand = async (
  input: BatchDeleteImportDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteImportData");
  let body: any;
  body = JSON.stringify(se_BatchDeleteImportDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplication");
  let body: any;
  body = JSON.stringify(se_CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTagsCommand
 */
export const se_CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTags");
  let body: any;
  body = JSON.stringify(se_CreateTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationsCommand
 */
export const se_DeleteApplicationsCommand = async (
  input: DeleteApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplications");
  let body: any;
  body = JSON.stringify(se_DeleteApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTags");
  let body: any;
  body = JSON.stringify(se_DeleteTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAgentsCommand
 */
export const se_DescribeAgentsCommand = async (
  input: DescribeAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAgents");
  let body: any;
  body = JSON.stringify(se_DescribeAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConfigurationsCommand
 */
export const se_DescribeConfigurationsCommand = async (
  input: DescribeConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigurations");
  let body: any;
  body = JSON.stringify(se_DescribeConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeContinuousExportsCommand
 */
export const se_DescribeContinuousExportsCommand = async (
  input: DescribeContinuousExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeContinuousExports");
  let body: any;
  body = JSON.stringify(se_DescribeContinuousExportsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExportConfigurationsCommand
 */
export const se_DescribeExportConfigurationsCommand = async (
  input: DescribeExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExportConfigurations");
  let body: any;
  body = JSON.stringify(se_DescribeExportConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExportTasksCommand
 */
export const se_DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExportTasks");
  let body: any;
  body = JSON.stringify(se_DescribeExportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImportTasksCommand
 */
export const se_DescribeImportTasksCommand = async (
  input: DescribeImportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImportTasks");
  let body: any;
  body = JSON.stringify(se_DescribeImportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTags");
  let body: any;
  body = JSON.stringify(se_DescribeTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand
 */
export const se_DisassociateConfigurationItemsFromApplicationCommand = async (
  input: DisassociateConfigurationItemsFromApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateConfigurationItemsFromApplication");
  let body: any;
  body = JSON.stringify(se_DisassociateConfigurationItemsFromApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExportConfigurationsCommand
 */
export const se_ExportConfigurationsCommand = async (
  input: ExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportConfigurations");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDiscoverySummaryCommand
 */
export const se_GetDiscoverySummaryCommand = async (
  input: GetDiscoverySummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDiscoverySummary");
  let body: any;
  body = JSON.stringify(se_GetDiscoverySummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListConfigurationsCommand
 */
export const se_ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConfigurations");
  let body: any;
  body = JSON.stringify(se_ListConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServerNeighborsCommand
 */
export const se_ListServerNeighborsCommand = async (
  input: ListServerNeighborsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServerNeighbors");
  let body: any;
  body = JSON.stringify(se_ListServerNeighborsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartContinuousExportCommand
 */
export const se_StartContinuousExportCommand = async (
  input: StartContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartContinuousExport");
  let body: any;
  body = JSON.stringify(se_StartContinuousExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDataCollectionByAgentIdsCommand
 */
export const se_StartDataCollectionByAgentIdsCommand = async (
  input: StartDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDataCollectionByAgentIds");
  let body: any;
  body = JSON.stringify(se_StartDataCollectionByAgentIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartExportTaskCommand
 */
export const se_StartExportTaskCommand = async (
  input: StartExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartExportTask");
  let body: any;
  body = JSON.stringify(se_StartExportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartImportTaskCommand
 */
export const se_StartImportTaskCommand = async (
  input: StartImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartImportTask");
  let body: any;
  body = JSON.stringify(se_StartImportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopContinuousExportCommand
 */
export const se_StopContinuousExportCommand = async (
  input: StopContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopContinuousExport");
  let body: any;
  body = JSON.stringify(se_StopContinuousExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopDataCollectionByAgentIdsCommand
 */
export const se_StopDataCollectionByAgentIdsCommand = async (
  input: StopDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDataCollectionByAgentIds");
  let body: any;
  body = JSON.stringify(se_StopDataCollectionByAgentIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplication");
  let body: any;
  body = JSON.stringify(se_UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand
 */
export const de_AssociateConfigurationItemsToApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConfigurationItemsToApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateConfigurationItemsToApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateConfigurationItemsToApplicationResponse(data, context);
  const response: AssociateConfigurationItemsToApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError
 */
const de_AssociateConfigurationItemsToApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConfigurationItemsToApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BatchDeleteImportDataCommand
 */
export const de_BatchDeleteImportDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteImportDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDeleteImportDataResponse(data, context);
  const response: BatchDeleteImportDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchDeleteImportDataCommandError
 */
const de_BatchDeleteImportDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTagsResponse(data, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTagsCommandError
 */
const de_CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteApplicationsCommand
 */
export const de_DeleteApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteApplicationsResponse(data, context);
  const response: DeleteApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteApplicationsCommandError
 */
const de_DeleteApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTagsResponse(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAgentsCommand
 */
export const de_DescribeAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAgentsResponse(data, context);
  const response: DescribeAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAgentsCommandError
 */
const de_DescribeAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeConfigurationsCommand
 */
export const de_DescribeConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigurationsResponse(data, context);
  const response: DescribeConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConfigurationsCommandError
 */
const de_DescribeConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeContinuousExportsCommand
 */
export const de_DescribeContinuousExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeContinuousExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContinuousExportsResponse(data, context);
  const response: DescribeContinuousExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeContinuousExportsCommandError
 */
const de_DescribeContinuousExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeExportConfigurationsCommand
 */
export const de_DescribeExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExportConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExportConfigurationsResponse(data, context);
  const response: DescribeExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeExportConfigurationsCommandError
 */
const de_DescribeExportConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeExportTasksCommand
 */
export const de_DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExportTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExportTasksResponse(data, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeExportTasksCommandError
 */
const de_DescribeExportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeImportTasksCommand
 */
export const de_DescribeImportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImportTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImportTasksResponse(data, context);
  const response: DescribeImportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImportTasksCommandError
 */
const de_DescribeImportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagsResponse(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand
 */
export const de_DisassociateConfigurationItemsFromApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateConfigurationItemsFromApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateConfigurationItemsFromApplicationResponse(data, context);
  const response: DisassociateConfigurationItemsFromApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError
 */
const de_DisassociateConfigurationItemsFromApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ExportConfigurationsCommand
 */
export const de_ExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportConfigurationsResponse(data, context);
  const response: ExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExportConfigurationsCommandError
 */
const de_ExportConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDiscoverySummaryCommand
 */
export const de_GetDiscoverySummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDiscoverySummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDiscoverySummaryResponse(data, context);
  const response: GetDiscoverySummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDiscoverySummaryCommandError
 */
const de_GetDiscoverySummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListConfigurationsCommand
 */
export const de_ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConfigurationsResponse(data, context);
  const response: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListConfigurationsCommandError
 */
const de_ListConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListServerNeighborsCommand
 */
export const de_ListServerNeighborsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServerNeighborsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServerNeighborsResponse(data, context);
  const response: ListServerNeighborsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServerNeighborsCommandError
 */
const de_ListServerNeighborsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartContinuousExportCommand
 */
export const de_StartContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartContinuousExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartContinuousExportResponse(data, context);
  const response: StartContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartContinuousExportCommandError
 */
const de_StartContinuousExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "ConflictErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ConflictErrorException":
      throw await de_ConflictErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartDataCollectionByAgentIdsCommand
 */
export const de_StartDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDataCollectionByAgentIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDataCollectionByAgentIdsResponse(data, context);
  const response: StartDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError
 */
const de_StartDataCollectionByAgentIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartExportTaskCommand
 */
export const de_StartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartExportTaskResponse(data, context);
  const response: StartExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartExportTaskCommandError
 */
const de_StartExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartImportTaskCommand
 */
export const de_StartImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartImportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartImportTaskResponse(data, context);
  const response: StartImportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartImportTaskCommandError
 */
const de_StartImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopContinuousExportCommand
 */
export const de_StopContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopContinuousExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopContinuousExportResponse(data, context);
  const response: StopContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopContinuousExportCommandError
 */
const de_StopContinuousExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopDataCollectionByAgentIdsCommand
 */
export const de_StopDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDataCollectionByAgentIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopDataCollectionByAgentIdsResponse(data, context);
  const response: StopDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError
 */
const de_StopDataCollectionByAgentIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await de_HomeRegionNotSetExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await de_ServerInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AuthorizationErrorExceptionRes
 */
const de_AuthorizationErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationErrorException(body, context);
  const exception = new AuthorizationErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictErrorExceptionRes
 */
const de_ConflictErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictErrorException(body, context);
  const exception = new ConflictErrorException({
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
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotPermittedExceptionRes
 */
const de_OperationNotPermittedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
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
 * deserializeAws_json1_1ServerInternalErrorExceptionRes
 */
const de_ServerInternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerInternalErrorException(body, context);
  const exception = new ServerInternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AgentIds
 */
const se_AgentIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ApplicationIdsList
 */
const se_ApplicationIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest
 */
const se_AssociateConfigurationItemsToApplicationRequest = (
  input: AssociateConfigurationItemsToApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationConfigurationId != null && { applicationConfigurationId: input.applicationConfigurationId }),
    ...(input.configurationIds != null && {
      configurationIds: se_ConfigurationIdList(input.configurationIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1BatchDeleteImportDataRequest
 */
const se_BatchDeleteImportDataRequest = (input: BatchDeleteImportDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.importTaskIds != null && { importTaskIds: se_ToDeleteIdentifierList(input.importTaskIds, context) }),
  };
};

/**
 * serializeAws_json1_1ConfigurationIdList
 */
const se_ConfigurationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ContinuousExportIds
 */
const se_ContinuousExportIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateApplicationRequest
 */
const se_CreateApplicationRequest = (input: CreateApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1CreateTagsRequest
 */
const se_CreateTagsRequest = (input: CreateTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationIds != null && {
      configurationIds: se_ConfigurationIdList(input.configurationIds, context),
    }),
    ...(input.tags != null && { tags: se_TagSet(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationsRequest
 */
const se_DeleteApplicationsRequest = (input: DeleteApplicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationIds != null && { configurationIds: se_ApplicationIdsList(input.configurationIds, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteTagsRequest
 */
const se_DeleteTagsRequest = (input: DeleteTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationIds != null && {
      configurationIds: se_ConfigurationIdList(input.configurationIds, context),
    }),
    ...(input.tags != null && { tags: se_TagSet(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeAgentsRequest
 */
const se_DescribeAgentsRequest = (input: DescribeAgentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.agentIds != null && { agentIds: se_AgentIds(input.agentIds, context) }),
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigurationsRequest
 */
const se_DescribeConfigurationsRequest = (input: DescribeConfigurationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationIds != null && {
      configurationIds: se_ConfigurationIdList(input.configurationIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeContinuousExportsRequest
 */
const se_DescribeContinuousExportsRequest = (input: DescribeContinuousExportsRequest, context: __SerdeContext): any => {
  return {
    ...(input.exportIds != null && { exportIds: se_ContinuousExportIds(input.exportIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeExportConfigurationsRequest
 */
const se_DescribeExportConfigurationsRequest = (
  input: DescribeExportConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportIds != null && { exportIds: se_ExportIds(input.exportIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeExportTasksRequest
 */
const se_DescribeExportTasksRequest = (input: DescribeExportTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.exportIds != null && { exportIds: se_ExportIds(input.exportIds, context) }),
    ...(input.filters != null && { filters: se_ExportFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeImportTasksFilterList
 */
const se_DescribeImportTasksFilterList = (input: ImportTaskFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ImportTaskFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1DescribeImportTasksRequest
 */
const se_DescribeImportTasksRequest = (input: DescribeImportTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_DescribeImportTasksFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeTagsRequest
 */
const se_DescribeTagsRequest = (input: DescribeTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_TagFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest
 */
const se_DisassociateConfigurationItemsFromApplicationRequest = (
  input: DisassociateConfigurationItemsFromApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationConfigurationId != null && { applicationConfigurationId: input.applicationConfigurationId }),
    ...(input.configurationIds != null && {
      configurationIds: se_ConfigurationIdList(input.configurationIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1ExportDataFormats
 */
const se_ExportDataFormats = (input: (ExportDataFormat | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExportFilter
 */
const se_ExportFilter = (input: ExportFilter, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_1ExportFilters
 */
const se_ExportFilters = (input: ExportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExportFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1ExportIds
 */
const se_ExportIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetDiscoverySummaryRequest
 */
const se_GetDiscoverySummaryRequest = (input: GetDiscoverySummaryRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1ImportTaskFilter
 */
const se_ImportTaskFilter = (input: ImportTaskFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_ImportTaskFilterValueList(input.values, context) }),
  };
};

/**
 * serializeAws_json1_1ImportTaskFilterValueList
 */
const se_ImportTaskFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListConfigurationsRequest
 */
const se_ListConfigurationsRequest = (input: ListConfigurationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationType != null && { configurationType: input.configurationType }),
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.orderBy != null && { orderBy: se_OrderByList(input.orderBy, context) }),
  };
};

/**
 * serializeAws_json1_1ListServerNeighborsRequest
 */
const se_ListServerNeighborsRequest = (input: ListServerNeighborsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationId != null && { configurationId: input.configurationId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.neighborConfigurationIds != null && {
      neighborConfigurationIds: se_ConfigurationIdList(input.neighborConfigurationIds, context),
    }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.portInformationNeeded != null && { portInformationNeeded: input.portInformationNeeded }),
  };
};

/**
 * serializeAws_json1_1OrderByElement
 */
const se_OrderByElement = (input: OrderByElement, context: __SerdeContext): any => {
  return {
    ...(input.fieldName != null && { fieldName: input.fieldName }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1OrderByList
 */
const se_OrderByList = (input: OrderByElement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OrderByElement(entry, context);
    });
};

/**
 * serializeAws_json1_1StartContinuousExportRequest
 */
const se_StartContinuousExportRequest = (input: StartContinuousExportRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1StartDataCollectionByAgentIdsRequest
 */
const se_StartDataCollectionByAgentIdsRequest = (
  input: StartDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentIds != null && { agentIds: se_AgentIds(input.agentIds, context) }),
  };
};

/**
 * serializeAws_json1_1StartExportTaskRequest
 */
const se_StartExportTaskRequest = (input: StartExportTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.exportDataFormat != null && { exportDataFormat: se_ExportDataFormats(input.exportDataFormat, context) }),
    ...(input.filters != null && { filters: se_ExportFilters(input.filters, context) }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1StartImportTaskRequest
 */
const se_StartImportTaskRequest = (input: StartImportTaskRequest, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.importUrl != null && { importUrl: input.importUrl }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1StopContinuousExportRequest
 */
const se_StopContinuousExportRequest = (input: StopContinuousExportRequest, context: __SerdeContext): any => {
  return {
    ...(input.exportId != null && { exportId: input.exportId }),
  };
};

/**
 * serializeAws_json1_1StopDataCollectionByAgentIdsRequest
 */
const se_StopDataCollectionByAgentIdsRequest = (
  input: StopDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentIds != null && { agentIds: se_AgentIds(input.agentIds, context) }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagFilter
 */
const se_TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_1TagFilters
 */
const se_TagFilters = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1TagSet
 */
const se_TagSet = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1ToDeleteIdentifierList
 */
const se_ToDeleteIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UpdateApplicationRequest
 */
const se_UpdateApplicationRequest = (input: UpdateApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationId != null && { configurationId: input.configurationId }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * deserializeAws_json1_1AgentConfigurationStatus
 */
const de_AgentConfigurationStatus = (output: any, context: __SerdeContext): AgentConfigurationStatus => {
  return {
    agentId: __expectString(output.agentId),
    description: __expectString(output.description),
    operationSucceeded: __expectBoolean(output.operationSucceeded),
  } as any;
};

/**
 * deserializeAws_json1_1AgentConfigurationStatusList
 */
const de_AgentConfigurationStatusList = (output: any, context: __SerdeContext): AgentConfigurationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentConfigurationStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AgentInfo
 */
const de_AgentInfo = (output: any, context: __SerdeContext): AgentInfo => {
  return {
    agentId: __expectString(output.agentId),
    agentNetworkInfoList:
      output.agentNetworkInfoList != null ? de_AgentNetworkInfoList(output.agentNetworkInfoList, context) : undefined,
    agentType: __expectString(output.agentType),
    collectionStatus: __expectString(output.collectionStatus),
    connectorId: __expectString(output.connectorId),
    health: __expectString(output.health),
    hostName: __expectString(output.hostName),
    lastHealthPingTime: __expectString(output.lastHealthPingTime),
    registeredTime: __expectString(output.registeredTime),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1AgentNetworkInfo
 */
const de_AgentNetworkInfo = (output: any, context: __SerdeContext): AgentNetworkInfo => {
  return {
    ipAddress: __expectString(output.ipAddress),
    macAddress: __expectString(output.macAddress),
  } as any;
};

/**
 * deserializeAws_json1_1AgentNetworkInfoList
 */
const de_AgentNetworkInfoList = (output: any, context: __SerdeContext): AgentNetworkInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentNetworkInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AgentsInfo
 */
const de_AgentsInfo = (output: any, context: __SerdeContext): AgentInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse
 */
const de_AssociateConfigurationItemsToApplicationResponse = (
  output: any,
  context: __SerdeContext
): AssociateConfigurationItemsToApplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AuthorizationErrorException
 */
const de_AuthorizationErrorException = (output: any, context: __SerdeContext): AuthorizationErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDeleteImportDataError
 */
const de_BatchDeleteImportDataError = (output: any, context: __SerdeContext): BatchDeleteImportDataError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorDescription: __expectString(output.errorDescription),
    importTaskId: __expectString(output.importTaskId),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDeleteImportDataErrorList
 */
const de_BatchDeleteImportDataErrorList = (output: any, context: __SerdeContext): BatchDeleteImportDataError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteImportDataError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchDeleteImportDataResponse
 */
const de_BatchDeleteImportDataResponse = (output: any, context: __SerdeContext): BatchDeleteImportDataResponse => {
  return {
    errors: output.errors != null ? de_BatchDeleteImportDataErrorList(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Configurations
 */
const de_Configurations = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfigurationTag
 */
const de_ConfigurationTag = (output: any, context: __SerdeContext): ConfigurationTag => {
  return {
    configurationId: __expectString(output.configurationId),
    configurationType: __expectString(output.configurationType),
    key: __expectString(output.key),
    timeOfCreation:
      output.timeOfCreation != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timeOfCreation)))
        : undefined,
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ConfigurationTagSet
 */
const de_ConfigurationTagSet = (output: any, context: __SerdeContext): ConfigurationTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictErrorException
 */
const de_ConflictErrorException = (output: any, context: __SerdeContext): ConflictErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ContinuousExportDescription
 */
const de_ContinuousExportDescription = (output: any, context: __SerdeContext): ContinuousExportDescription => {
  return {
    dataSource: __expectString(output.dataSource),
    exportId: __expectString(output.exportId),
    s3Bucket: __expectString(output.s3Bucket),
    schemaStorageConfig:
      output.schemaStorageConfig != null ? de_SchemaStorageConfig(output.schemaStorageConfig, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    statusDetail: __expectString(output.statusDetail),
    stopTime:
      output.stopTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContinuousExportDescriptions
 */
const de_ContinuousExportDescriptions = (output: any, context: __SerdeContext): ContinuousExportDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContinuousExportDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateApplicationResponse
 */
const de_CreateApplicationResponse = (output: any, context: __SerdeContext): CreateApplicationResponse => {
  return {
    configurationId: __expectString(output.configurationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateTagsResponse
 */
const de_CreateTagsResponse = (output: any, context: __SerdeContext): CreateTagsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CustomerAgentInfo
 */
const de_CustomerAgentInfo = (output: any, context: __SerdeContext): CustomerAgentInfo => {
  return {
    activeAgents: __expectInt32(output.activeAgents),
    blackListedAgents: __expectInt32(output.blackListedAgents),
    healthyAgents: __expectInt32(output.healthyAgents),
    shutdownAgents: __expectInt32(output.shutdownAgents),
    totalAgents: __expectInt32(output.totalAgents),
    unhealthyAgents: __expectInt32(output.unhealthyAgents),
    unknownAgents: __expectInt32(output.unknownAgents),
  } as any;
};

/**
 * deserializeAws_json1_1CustomerAgentlessCollectorInfo
 */
const de_CustomerAgentlessCollectorInfo = (output: any, context: __SerdeContext): CustomerAgentlessCollectorInfo => {
  return {
    activeAgentlessCollectors: __expectInt32(output.activeAgentlessCollectors),
    denyListedAgentlessCollectors: __expectInt32(output.denyListedAgentlessCollectors),
    healthyAgentlessCollectors: __expectInt32(output.healthyAgentlessCollectors),
    shutdownAgentlessCollectors: __expectInt32(output.shutdownAgentlessCollectors),
    totalAgentlessCollectors: __expectInt32(output.totalAgentlessCollectors),
    unhealthyAgentlessCollectors: __expectInt32(output.unhealthyAgentlessCollectors),
    unknownAgentlessCollectors: __expectInt32(output.unknownAgentlessCollectors),
  } as any;
};

/**
 * deserializeAws_json1_1CustomerConnectorInfo
 */
const de_CustomerConnectorInfo = (output: any, context: __SerdeContext): CustomerConnectorInfo => {
  return {
    activeConnectors: __expectInt32(output.activeConnectors),
    blackListedConnectors: __expectInt32(output.blackListedConnectors),
    healthyConnectors: __expectInt32(output.healthyConnectors),
    shutdownConnectors: __expectInt32(output.shutdownConnectors),
    totalConnectors: __expectInt32(output.totalConnectors),
    unhealthyConnectors: __expectInt32(output.unhealthyConnectors),
    unknownConnectors: __expectInt32(output.unknownConnectors),
  } as any;
};

/**
 * deserializeAws_json1_1CustomerMeCollectorInfo
 */
const de_CustomerMeCollectorInfo = (output: any, context: __SerdeContext): CustomerMeCollectorInfo => {
  return {
    activeMeCollectors: __expectInt32(output.activeMeCollectors),
    denyListedMeCollectors: __expectInt32(output.denyListedMeCollectors),
    healthyMeCollectors: __expectInt32(output.healthyMeCollectors),
    shutdownMeCollectors: __expectInt32(output.shutdownMeCollectors),
    totalMeCollectors: __expectInt32(output.totalMeCollectors),
    unhealthyMeCollectors: __expectInt32(output.unhealthyMeCollectors),
    unknownMeCollectors: __expectInt32(output.unknownMeCollectors),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationsResponse
 */
const de_DeleteApplicationsResponse = (output: any, context: __SerdeContext): DeleteApplicationsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteTagsResponse
 */
const de_DeleteTagsResponse = (output: any, context: __SerdeContext): DeleteTagsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAgentsResponse
 */
const de_DescribeAgentsResponse = (output: any, context: __SerdeContext): DescribeAgentsResponse => {
  return {
    agentsInfo: output.agentsInfo != null ? de_AgentsInfo(output.agentsInfo, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConfigurationsAttribute
 */
const de_DescribeConfigurationsAttribute = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1DescribeConfigurationsAttributes
 */
const de_DescribeConfigurationsAttributes = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DescribeConfigurationsAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeConfigurationsResponse
 */
const de_DescribeConfigurationsResponse = (output: any, context: __SerdeContext): DescribeConfigurationsResponse => {
  return {
    configurations:
      output.configurations != null ? de_DescribeConfigurationsAttributes(output.configurations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeContinuousExportsResponse
 */
const de_DescribeContinuousExportsResponse = (
  output: any,
  context: __SerdeContext
): DescribeContinuousExportsResponse => {
  return {
    descriptions:
      output.descriptions != null ? de_ContinuousExportDescriptions(output.descriptions, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExportConfigurationsResponse
 */
const de_DescribeExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportConfigurationsResponse => {
  return {
    exportsInfo: output.exportsInfo != null ? de_ExportsInfo(output.exportsInfo, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExportTasksResponse
 */
const de_DescribeExportTasksResponse = (output: any, context: __SerdeContext): DescribeExportTasksResponse => {
  return {
    exportsInfo: output.exportsInfo != null ? de_ExportsInfo(output.exportsInfo, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeImportTasksResponse
 */
const de_DescribeImportTasksResponse = (output: any, context: __SerdeContext): DescribeImportTasksResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tasks: output.tasks != null ? de_ImportTaskList(output.tasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTagsResponse
 */
const de_DescribeTagsResponse = (output: any, context: __SerdeContext): DescribeTagsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_ConfigurationTagSet(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse
 */
const de_DisassociateConfigurationItemsFromApplicationResponse = (
  output: any,
  context: __SerdeContext
): DisassociateConfigurationItemsFromApplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ExportConfigurationsResponse
 */
const de_ExportConfigurationsResponse = (output: any, context: __SerdeContext): ExportConfigurationsResponse => {
  return {
    exportId: __expectString(output.exportId),
  } as any;
};

/**
 * deserializeAws_json1_1ExportInfo
 */
const de_ExportInfo = (output: any, context: __SerdeContext): ExportInfo => {
  return {
    configurationsDownloadUrl: __expectString(output.configurationsDownloadUrl),
    exportId: __expectString(output.exportId),
    exportRequestTime:
      output.exportRequestTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.exportRequestTime)))
        : undefined,
    exportStatus: __expectString(output.exportStatus),
    isTruncated: __expectBoolean(output.isTruncated),
    requestedEndTime:
      output.requestedEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.requestedEndTime)))
        : undefined,
    requestedStartTime:
      output.requestedStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.requestedStartTime)))
        : undefined,
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1ExportsInfo
 */
const de_ExportsInfo = (output: any, context: __SerdeContext): ExportInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetDiscoverySummaryResponse
 */
const de_GetDiscoverySummaryResponse = (output: any, context: __SerdeContext): GetDiscoverySummaryResponse => {
  return {
    agentSummary: output.agentSummary != null ? de_CustomerAgentInfo(output.agentSummary, context) : undefined,
    agentlessCollectorSummary:
      output.agentlessCollectorSummary != null
        ? de_CustomerAgentlessCollectorInfo(output.agentlessCollectorSummary, context)
        : undefined,
    applications: __expectLong(output.applications),
    connectorSummary:
      output.connectorSummary != null ? de_CustomerConnectorInfo(output.connectorSummary, context) : undefined,
    meCollectorSummary:
      output.meCollectorSummary != null ? de_CustomerMeCollectorInfo(output.meCollectorSummary, context) : undefined,
    servers: __expectLong(output.servers),
    serversMappedToApplications: __expectLong(output.serversMappedToApplications),
    serversMappedtoTags: __expectLong(output.serversMappedtoTags),
  } as any;
};

/**
 * deserializeAws_json1_1HomeRegionNotSetException
 */
const de_HomeRegionNotSetException = (output: any, context: __SerdeContext): HomeRegionNotSetException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ImportTask
 */
const de_ImportTask = (output: any, context: __SerdeContext): ImportTask => {
  return {
    applicationImportFailure: __expectInt32(output.applicationImportFailure),
    applicationImportSuccess: __expectInt32(output.applicationImportSuccess),
    clientRequestToken: __expectString(output.clientRequestToken),
    errorsAndFailedEntriesZip: __expectString(output.errorsAndFailedEntriesZip),
    importCompletionTime:
      output.importCompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.importCompletionTime)))
        : undefined,
    importDeletedTime:
      output.importDeletedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.importDeletedTime)))
        : undefined,
    importRequestTime:
      output.importRequestTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.importRequestTime)))
        : undefined,
    importTaskId: __expectString(output.importTaskId),
    importUrl: __expectString(output.importUrl),
    name: __expectString(output.name),
    serverImportFailure: __expectInt32(output.serverImportFailure),
    serverImportSuccess: __expectInt32(output.serverImportSuccess),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1ImportTaskList
 */
const de_ImportTaskList = (output: any, context: __SerdeContext): ImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListConfigurationsResponse
 */
const de_ListConfigurationsResponse = (output: any, context: __SerdeContext): ListConfigurationsResponse => {
  return {
    configurations: output.configurations != null ? de_Configurations(output.configurations, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListServerNeighborsResponse
 */
const de_ListServerNeighborsResponse = (output: any, context: __SerdeContext): ListServerNeighborsResponse => {
  return {
    knownDependencyCount: __expectLong(output.knownDependencyCount),
    neighbors: output.neighbors != null ? de_NeighborDetailsList(output.neighbors, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1NeighborConnectionDetail
 */
const de_NeighborConnectionDetail = (output: any, context: __SerdeContext): NeighborConnectionDetail => {
  return {
    connectionsCount: __expectLong(output.connectionsCount),
    destinationPort: __expectInt32(output.destinationPort),
    destinationServerId: __expectString(output.destinationServerId),
    sourceServerId: __expectString(output.sourceServerId),
    transportProtocol: __expectString(output.transportProtocol),
  } as any;
};

/**
 * deserializeAws_json1_1NeighborDetailsList
 */
const de_NeighborDetailsList = (output: any, context: __SerdeContext): NeighborConnectionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NeighborConnectionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OperationNotPermittedException
 */
const de_OperationNotPermittedException = (output: any, context: __SerdeContext): OperationNotPermittedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SchemaStorageConfig
 */
const de_SchemaStorageConfig = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ServerInternalErrorException
 */
const de_ServerInternalErrorException = (output: any, context: __SerdeContext): ServerInternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StartContinuousExportResponse
 */
const de_StartContinuousExportResponse = (output: any, context: __SerdeContext): StartContinuousExportResponse => {
  return {
    dataSource: __expectString(output.dataSource),
    exportId: __expectString(output.exportId),
    s3Bucket: __expectString(output.s3Bucket),
    schemaStorageConfig:
      output.schemaStorageConfig != null ? de_SchemaStorageConfig(output.schemaStorageConfig, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartDataCollectionByAgentIdsResponse
 */
const de_StartDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StartDataCollectionByAgentIdsResponse => {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus != null
        ? de_AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartExportTaskResponse
 */
const de_StartExportTaskResponse = (output: any, context: __SerdeContext): StartExportTaskResponse => {
  return {
    exportId: __expectString(output.exportId),
  } as any;
};

/**
 * deserializeAws_json1_1StartImportTaskResponse
 */
const de_StartImportTaskResponse = (output: any, context: __SerdeContext): StartImportTaskResponse => {
  return {
    task: output.task != null ? de_ImportTask(output.task, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopContinuousExportResponse
 */
const de_StopContinuousExportResponse = (output: any, context: __SerdeContext): StopContinuousExportResponse => {
  return {
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    stopTime:
      output.stopTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopDataCollectionByAgentIdsResponse
 */
const de_StopDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StopDataCollectionByAgentIdsResponse => {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus != null
        ? de_AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateApplicationResponse
 */
const de_UpdateApplicationResponse = (output: any, context: __SerdeContext): UpdateApplicationResponse => {
  return {} as any;
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
    "x-amz-target": `AWSPoseidonService_V2015_11_01.${operation}`,
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
