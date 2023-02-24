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

export const serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = async (
  input: AssociateConfigurationItemsToApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteImportDataCommand = async (
  input: BatchDeleteImportDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.BatchDeleteImportData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteImportDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.CreateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.CreateTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationsCommand = async (
  input: DeleteApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DeleteApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DeleteTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAgentsCommand = async (
  input: DescribeAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeAgents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigurationsCommand = async (
  input: DescribeConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeContinuousExportsCommand = async (
  input: DescribeContinuousExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeContinuousExports",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeContinuousExportsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExportConfigurationsCommand = async (
  input: DescribeExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExportConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeExportTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImportTasksCommand = async (
  input: DescribeImportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeImportTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = async (
  input: DisassociateConfigurationItemsFromApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExportConfigurationsCommand = async (
  input: ExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.ExportConfigurations",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiscoverySummaryCommand = async (
  input: GetDiscoverySummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.GetDiscoverySummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiscoverySummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.ListConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServerNeighborsCommand = async (
  input: ListServerNeighborsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.ListServerNeighbors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServerNeighborsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartContinuousExportCommand = async (
  input: StartContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartContinuousExport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartContinuousExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDataCollectionByAgentIdsCommand = async (
  input: StartDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDataCollectionByAgentIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartExportTaskCommand = async (
  input: StartExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartExportTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartExportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartImportTaskCommand = async (
  input: StartImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartImportTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartImportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopContinuousExportCommand = async (
  input: StopContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StopContinuousExport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopContinuousExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopDataCollectionByAgentIdsCommand = async (
  input: StopDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopDataCollectionByAgentIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.UpdateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConfigurationItemsToApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse(data, context);
  const response: AssociateConfigurationItemsToApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchDeleteImportDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteImportDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteImportDataResponse(data, context);
  const response: BatchDeleteImportDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteImportDataCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTagsResponse(data, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTagsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationsResponse(data, context);
  const response: DeleteApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsResponse(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTagsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAgentsResponse(data, context);
  const response: DescribeAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAgentsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigurationsResponse(data, context);
  const response: DescribeConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeContinuousExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeContinuousExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeContinuousExportsResponse(data, context);
  const response: DescribeContinuousExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeContinuousExportsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExportConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExportConfigurationsResponse(data, context);
  const response: DescribeExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExportConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExportTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExportTasksCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeImportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImportTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImportTasksResponse(data, context);
  const response: DescribeImportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImportTasksCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTagsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse(data, context);
  const response: DisassociateConfigurationItemsFromApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExportConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportConfigurationsResponse(data, context);
  const response: ExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExportConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDiscoverySummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDiscoverySummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiscoverySummaryResponse(data, context);
  const response: GetDiscoverySummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiscoverySummaryCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConfigurationsResponse(data, context);
  const response: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListServerNeighborsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServerNeighborsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServerNeighborsResponse(data, context);
  const response: ListServerNeighborsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServerNeighborsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartContinuousExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartContinuousExportResponse(data, context);
  const response: StartContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartContinuousExportCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "ConflictErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ConflictErrorException":
      throw await deserializeAws_json1_1ConflictErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDataCollectionByAgentIdsResponse(data, context);
  const response: StartDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartExportTaskResponse(data, context);
  const response: StartExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartExportTaskCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartImportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImportTaskResponse(data, context);
  const response: StartImportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartImportTaskCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopContinuousExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopContinuousExportResponse(data, context);
  const response: StopContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopContinuousExportCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDataCollectionByAgentIdsResponse(data, context);
  const response: StopDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
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
      throw await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context);
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      throw await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      throw await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AuthorizationErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthorizationErrorException(body, context);
  const exception = new AuthorizationErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictErrorException(body, context);
  const exception = new ConflictErrorException({
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

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
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

const deserializeAws_json1_1ServerInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerInternalErrorException(body, context);
  const exception = new ServerInternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AgentIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ApplicationIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest = (
  input: AssociateConfigurationItemsToApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationConfigurationId != null && { applicationConfigurationId: input.applicationConfigurationId }),
    ...(input.configurationIds != null && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
    }),
  };
};

const serializeAws_json1_1BatchDeleteImportDataRequest = (
  input: BatchDeleteImportDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.importTaskIds != null && {
      importTaskIds: serializeAws_json1_1ToDeleteIdentifierList(input.importTaskIds, context),
    }),
  };
};

const serializeAws_json1_1ConfigurationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ContinuousExportIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1CreateTagsRequest = (input: CreateTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationIds != null && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagSet(input.tags, context) }),
  };
};

const serializeAws_json1_1DeleteApplicationsRequest = (
  input: DeleteApplicationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationIds != null && {
      configurationIds: serializeAws_json1_1ApplicationIdsList(input.configurationIds, context),
    }),
  };
};

const serializeAws_json1_1DeleteTagsRequest = (input: DeleteTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.configurationIds != null && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagSet(input.tags, context) }),
  };
};

const serializeAws_json1_1DescribeAgentsRequest = (input: DescribeAgentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.agentIds != null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }),
    ...(input.filters != null && { filters: serializeAws_json1_1Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeConfigurationsRequest = (
  input: DescribeConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationIds != null && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
    }),
  };
};

const serializeAws_json1_1DescribeContinuousExportsRequest = (
  input: DescribeContinuousExportsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportIds != null && { exportIds: serializeAws_json1_1ContinuousExportIds(input.exportIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeExportConfigurationsRequest = (
  input: DescribeExportConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportIds != null && { exportIds: serializeAws_json1_1ExportIds(input.exportIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeExportTasksRequest = (
  input: DescribeExportTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportIds != null && { exportIds: serializeAws_json1_1ExportIds(input.exportIds, context) }),
    ...(input.filters != null && { filters: serializeAws_json1_1ExportFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeImportTasksFilterList = (input: ImportTaskFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ImportTaskFilter(entry, context);
    });
};

const serializeAws_json1_1DescribeImportTasksRequest = (
  input: DescribeImportTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && {
      filters: serializeAws_json1_1DescribeImportTasksFilterList(input.filters, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeTagsRequest = (input: DescribeTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: serializeAws_json1_1TagFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest = (
  input: DisassociateConfigurationItemsFromApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationConfigurationId != null && { applicationConfigurationId: input.applicationConfigurationId }),
    ...(input.configurationIds != null && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
    }),
  };
};

const serializeAws_json1_1ExportDataFormats = (input: (ExportDataFormat | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExportFilter = (input: ExportFilter, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_json1_1FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_1ExportFilters = (input: ExportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ExportFilter(entry, context);
    });
};

const serializeAws_json1_1ExportIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_json1_1FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetDiscoverySummaryRequest = (
  input: GetDiscoverySummaryRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ImportTaskFilter = (input: ImportTaskFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_json1_1ImportTaskFilterValueList(input.values, context) }),
  };
};

const serializeAws_json1_1ImportTaskFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListConfigurationsRequest = (
  input: ListConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationType != null && { configurationType: input.configurationType }),
    ...(input.filters != null && { filters: serializeAws_json1_1Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.orderBy != null && { orderBy: serializeAws_json1_1OrderByList(input.orderBy, context) }),
  };
};

const serializeAws_json1_1ListServerNeighborsRequest = (
  input: ListServerNeighborsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationId != null && { configurationId: input.configurationId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.neighborConfigurationIds != null && {
      neighborConfigurationIds: serializeAws_json1_1ConfigurationIdList(input.neighborConfigurationIds, context),
    }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.portInformationNeeded != null && { portInformationNeeded: input.portInformationNeeded }),
  };
};

const serializeAws_json1_1OrderByElement = (input: OrderByElement, context: __SerdeContext): any => {
  return {
    ...(input.fieldName != null && { fieldName: input.fieldName }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1OrderByList = (input: OrderByElement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OrderByElement(entry, context);
    });
};

const serializeAws_json1_1StartContinuousExportRequest = (
  input: StartContinuousExportRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1StartDataCollectionByAgentIdsRequest = (
  input: StartDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentIds != null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }),
  };
};

const serializeAws_json1_1StartExportTaskRequest = (input: StartExportTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.exportDataFormat != null && {
      exportDataFormat: serializeAws_json1_1ExportDataFormats(input.exportDataFormat, context),
    }),
    ...(input.filters != null && { filters: serializeAws_json1_1ExportFilters(input.filters, context) }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1StartImportTaskRequest = (input: StartImportTaskRequest, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.importUrl != null && { importUrl: input.importUrl }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1StopContinuousExportRequest = (
  input: StopContinuousExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportId != null && { exportId: input.exportId }),
  };
};

const serializeAws_json1_1StopDataCollectionByAgentIdsRequest = (
  input: StopDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentIds != null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_json1_1FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_1TagFilters = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TagFilter(entry, context);
    });
};

const serializeAws_json1_1TagSet = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1ToDeleteIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationId != null && { configurationId: input.configurationId }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  };
};

const deserializeAws_json1_1AgentConfigurationStatus = (
  output: any,
  context: __SerdeContext
): AgentConfigurationStatus => {
  return {
    agentId: __expectString(output.agentId),
    description: __expectString(output.description),
    operationSucceeded: __expectBoolean(output.operationSucceeded),
  } as any;
};

const deserializeAws_json1_1AgentConfigurationStatusList = (
  output: any,
  context: __SerdeContext
): AgentConfigurationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AgentConfigurationStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AgentInfo = (output: any, context: __SerdeContext): AgentInfo => {
  return {
    agentId: __expectString(output.agentId),
    agentNetworkInfoList:
      output.agentNetworkInfoList != null
        ? deserializeAws_json1_1AgentNetworkInfoList(output.agentNetworkInfoList, context)
        : undefined,
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

const deserializeAws_json1_1AgentNetworkInfo = (output: any, context: __SerdeContext): AgentNetworkInfo => {
  return {
    ipAddress: __expectString(output.ipAddress),
    macAddress: __expectString(output.macAddress),
  } as any;
};

const deserializeAws_json1_1AgentNetworkInfoList = (output: any, context: __SerdeContext): AgentNetworkInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AgentNetworkInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AgentsInfo = (output: any, context: __SerdeContext): AgentInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AgentInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse = (
  output: any,
  context: __SerdeContext
): AssociateConfigurationItemsToApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1AuthorizationErrorException = (
  output: any,
  context: __SerdeContext
): AuthorizationErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BatchDeleteImportDataError = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorDescription: __expectString(output.errorDescription),
    importTaskId: __expectString(output.importTaskId),
  } as any;
};

const deserializeAws_json1_1BatchDeleteImportDataErrorList = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDeleteImportDataError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchDeleteImportDataResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataResponse => {
  return {
    errors:
      output.errors != null ? deserializeAws_json1_1BatchDeleteImportDataErrorList(output.errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Configuration = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Configurations = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Configuration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfigurationTag = (output: any, context: __SerdeContext): ConfigurationTag => {
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

const deserializeAws_json1_1ConfigurationTagSet = (output: any, context: __SerdeContext): ConfigurationTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigurationTag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConflictErrorException = (output: any, context: __SerdeContext): ConflictErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ContinuousExportDescription = (
  output: any,
  context: __SerdeContext
): ContinuousExportDescription => {
  return {
    dataSource: __expectString(output.dataSource),
    exportId: __expectString(output.exportId),
    s3Bucket: __expectString(output.s3Bucket),
    schemaStorageConfig:
      output.schemaStorageConfig != null
        ? deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    statusDetail: __expectString(output.statusDetail),
    stopTime:
      output.stopTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1ContinuousExportDescriptions = (
  output: any,
  context: __SerdeContext
): ContinuousExportDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContinuousExportDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  return {
    configurationId: __expectString(output.configurationId),
  } as any;
};

const deserializeAws_json1_1CreateTagsResponse = (output: any, context: __SerdeContext): CreateTagsResponse => {
  return {} as any;
};

const deserializeAws_json1_1CustomerAgentInfo = (output: any, context: __SerdeContext): CustomerAgentInfo => {
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

const deserializeAws_json1_1CustomerAgentlessCollectorInfo = (
  output: any,
  context: __SerdeContext
): CustomerAgentlessCollectorInfo => {
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

const deserializeAws_json1_1CustomerConnectorInfo = (output: any, context: __SerdeContext): CustomerConnectorInfo => {
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

const deserializeAws_json1_1CustomerMeCollectorInfo = (
  output: any,
  context: __SerdeContext
): CustomerMeCollectorInfo => {
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

const deserializeAws_json1_1DeleteApplicationsResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationsResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTagsResponse = (output: any, context: __SerdeContext): DeleteTagsResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAgentsResponse = (output: any, context: __SerdeContext): DescribeAgentsResponse => {
  return {
    agentsInfo: output.agentsInfo != null ? deserializeAws_json1_1AgentsInfo(output.agentsInfo, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConfigurationsAttribute = (
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

const deserializeAws_json1_1DescribeConfigurationsAttributes = (
  output: any,
  context: __SerdeContext
): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DescribeConfigurationsAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationsResponse => {
  return {
    configurations:
      output.configurations != null
        ? deserializeAws_json1_1DescribeConfigurationsAttributes(output.configurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeContinuousExportsResponse = (
  output: any,
  context: __SerdeContext
): DescribeContinuousExportsResponse => {
  return {
    descriptions:
      output.descriptions != null
        ? deserializeAws_json1_1ContinuousExportDescriptions(output.descriptions, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportConfigurationsResponse => {
  return {
    exportsInfo:
      output.exportsInfo != null ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeExportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportTasksResponse => {
  return {
    exportsInfo:
      output.exportsInfo != null ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeImportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeImportTasksResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tasks: output.tasks != null ? deserializeAws_json1_1ImportTaskList(output.tasks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTagsResponse = (output: any, context: __SerdeContext): DescribeTagsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? deserializeAws_json1_1ConfigurationTagSet(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse = (
  output: any,
  context: __SerdeContext
): DisassociateConfigurationItemsFromApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1ExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ExportConfigurationsResponse => {
  return {
    exportId: __expectString(output.exportId),
  } as any;
};

const deserializeAws_json1_1ExportInfo = (output: any, context: __SerdeContext): ExportInfo => {
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

const deserializeAws_json1_1ExportsInfo = (output: any, context: __SerdeContext): ExportInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExportInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetDiscoverySummaryResponse = (
  output: any,
  context: __SerdeContext
): GetDiscoverySummaryResponse => {
  return {
    agentSummary:
      output.agentSummary != null ? deserializeAws_json1_1CustomerAgentInfo(output.agentSummary, context) : undefined,
    agentlessCollectorSummary:
      output.agentlessCollectorSummary != null
        ? deserializeAws_json1_1CustomerAgentlessCollectorInfo(output.agentlessCollectorSummary, context)
        : undefined,
    applications: __expectLong(output.applications),
    connectorSummary:
      output.connectorSummary != null
        ? deserializeAws_json1_1CustomerConnectorInfo(output.connectorSummary, context)
        : undefined,
    meCollectorSummary:
      output.meCollectorSummary != null
        ? deserializeAws_json1_1CustomerMeCollectorInfo(output.meCollectorSummary, context)
        : undefined,
    servers: __expectLong(output.servers),
    serversMappedToApplications: __expectLong(output.serversMappedToApplications),
    serversMappedtoTags: __expectLong(output.serversMappedtoTags),
  } as any;
};

const deserializeAws_json1_1HomeRegionNotSetException = (
  output: any,
  context: __SerdeContext
): HomeRegionNotSetException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ImportTask = (output: any, context: __SerdeContext): ImportTask => {
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

const deserializeAws_json1_1ImportTaskList = (output: any, context: __SerdeContext): ImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImportTask(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListConfigurationsResponse => {
  return {
    configurations:
      output.configurations != null ? deserializeAws_json1_1Configurations(output.configurations, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListServerNeighborsResponse = (
  output: any,
  context: __SerdeContext
): ListServerNeighborsResponse => {
  return {
    knownDependencyCount: __expectLong(output.knownDependencyCount),
    neighbors:
      output.neighbors != null ? deserializeAws_json1_1NeighborDetailsList(output.neighbors, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1NeighborConnectionDetail = (
  output: any,
  context: __SerdeContext
): NeighborConnectionDetail => {
  return {
    connectionsCount: __expectLong(output.connectionsCount),
    destinationPort: __expectInt32(output.destinationPort),
    destinationServerId: __expectString(output.destinationServerId),
    sourceServerId: __expectString(output.sourceServerId),
    transportProtocol: __expectString(output.transportProtocol),
  } as any;
};

const deserializeAws_json1_1NeighborDetailsList = (
  output: any,
  context: __SerdeContext
): NeighborConnectionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NeighborConnectionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SchemaStorageConfig = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ServerInternalErrorException = (
  output: any,
  context: __SerdeContext
): ServerInternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StartContinuousExportResponse = (
  output: any,
  context: __SerdeContext
): StartContinuousExportResponse => {
  return {
    dataSource: __expectString(output.dataSource),
    exportId: __expectString(output.exportId),
    s3Bucket: __expectString(output.s3Bucket),
    schemaStorageConfig:
      output.schemaStorageConfig != null
        ? deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1StartDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StartDataCollectionByAgentIdsResponse => {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus != null
        ? deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartExportTaskResponse = (
  output: any,
  context: __SerdeContext
): StartExportTaskResponse => {
  return {
    exportId: __expectString(output.exportId),
  } as any;
};

const deserializeAws_json1_1StartImportTaskResponse = (
  output: any,
  context: __SerdeContext
): StartImportTaskResponse => {
  return {
    task: output.task != null ? deserializeAws_json1_1ImportTask(output.task, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StopContinuousExportResponse = (
  output: any,
  context: __SerdeContext
): StopContinuousExportResponse => {
  return {
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    stopTime:
      output.stopTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1StopDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StopDataCollectionByAgentIdsResponse => {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus != null
        ? deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
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
