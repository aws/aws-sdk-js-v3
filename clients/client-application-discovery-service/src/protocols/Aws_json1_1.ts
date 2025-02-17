// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput,
} from "../commands/AssociateConfigurationItemsToApplicationCommand";
import { BatchDeleteAgentsCommandInput, BatchDeleteAgentsCommandOutput } from "../commands/BatchDeleteAgentsCommand";
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
  DescribeBatchDeleteConfigurationTaskCommandInput,
  DescribeBatchDeleteConfigurationTaskCommandOutput,
} from "../commands/DescribeBatchDeleteConfigurationTaskCommand";
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
  StartBatchDeleteConfigurationTaskCommandInput,
  StartBatchDeleteConfigurationTaskCommandOutput,
} from "../commands/StartBatchDeleteConfigurationTaskCommand";
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
  AssociateConfigurationItemsToApplicationRequest,
  AuthorizationErrorException,
  BatchDeleteAgentsRequest,
  BatchDeleteConfigurationTask,
  BatchDeleteImportDataRequest,
  ConfigurationTag,
  ConflictErrorException,
  ContinuousExportDescription,
  CreateApplicationRequest,
  CreateTagsRequest,
  DeleteAgent,
  DeleteApplicationsRequest,
  DeleteTagsRequest,
  DescribeAgentsRequest,
  DescribeBatchDeleteConfigurationTaskRequest,
  DescribeBatchDeleteConfigurationTaskResponse,
  DescribeConfigurationsRequest,
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
  Ec2RecommendationsExportPreferences,
  ExportDataFormat,
  ExportFilter,
  ExportInfo,
  ExportPreferences,
  Filter,
  GetDiscoverySummaryRequest,
  HomeRegionNotSetException,
  ImportTask,
  ImportTaskFilter,
  InvalidParameterException,
  InvalidParameterValueException,
  LimitExceededException,
  ListConfigurationsRequest,
  ListServerNeighborsRequest,
  OperationNotPermittedException,
  OrderByElement,
  ReservedInstanceOptions,
  ResourceInUseException,
  ResourceNotFoundException,
  ServerInternalErrorException,
  StartBatchDeleteConfigurationTaskRequest,
  StartContinuousExportRequest,
  StartContinuousExportResponse,
  StartDataCollectionByAgentIdsRequest,
  StartExportTaskRequest,
  StartImportTaskRequest,
  StartImportTaskResponse,
  StopContinuousExportRequest,
  StopContinuousExportResponse,
  StopDataCollectionByAgentIdsRequest,
  Tag,
  TagFilter,
  UpdateApplicationRequest,
  UsageMetricBasis,
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteAgentsCommand
 */
export const se_BatchDeleteAgentsCommand = async (
  input: BatchDeleteAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteAgents");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBatchDeleteConfigurationTaskCommand
 */
export const se_DescribeBatchDeleteConfigurationTaskCommand = async (
  input: DescribeBatchDeleteConfigurationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBatchDeleteConfigurationTask");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartBatchDeleteConfigurationTaskCommand
 */
export const se_StartBatchDeleteConfigurationTaskCommand = async (
  input: StartBatchDeleteConfigurationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartBatchDeleteConfigurationTask");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateConfigurationItemsToApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeleteAgentsCommand
 */
export const de_BatchDeleteAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeleteImportDataCommand
 */
export const de_BatchDeleteImportDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteImportDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationsCommand
 */
export const de_DeleteApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAgentsCommand
 */
export const de_DescribeAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBatchDeleteConfigurationTaskCommand
 */
export const de_DescribeBatchDeleteConfigurationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchDeleteConfigurationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBatchDeleteConfigurationTaskResponse(data, context);
  const response: DescribeBatchDeleteConfigurationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeConfigurationsCommand
 */
export const de_DescribeConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeContinuousExportsCommand
 */
export const de_DescribeContinuousExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContinuousExportsResponse(data, context);
  const response: DescribeContinuousExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeExportConfigurationsCommand
 */
export const de_DescribeExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExportConfigurationsResponse(data, context);
  const response: DescribeExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeExportTasksCommand
 */
export const de_DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExportTasksResponse(data, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeImportTasksCommand
 */
export const de_DescribeImportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImportTasksResponse(data, context);
  const response: DescribeImportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagsResponse(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand
 */
export const de_DisassociateConfigurationItemsFromApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateConfigurationItemsFromApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ExportConfigurationsCommand
 */
export const de_ExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDiscoverySummaryCommand
 */
export const de_GetDiscoverySummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDiscoverySummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListConfigurationsCommand
 */
export const de_ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListServerNeighborsCommand
 */
export const de_ListServerNeighborsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServerNeighborsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartBatchDeleteConfigurationTaskCommand
 */
export const de_StartBatchDeleteConfigurationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBatchDeleteConfigurationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartBatchDeleteConfigurationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartContinuousExportCommand
 */
export const de_StartContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartContinuousExportResponse(data, context);
  const response: StartContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDataCollectionByAgentIdsCommand
 */
export const de_StartDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartExportTaskCommand
 */
export const de_StartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartImportTaskCommand
 */
export const de_StartImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartImportTaskResponse(data, context);
  const response: StartImportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopContinuousExportCommand
 */
export const de_StopContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopContinuousExportResponse(data, context);
  const response: StopContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopDataCollectionByAgentIdsCommand
 */
export const de_StopDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationdiscoveryservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ConflictErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ConflictErrorException":
      throw await de_ConflictErrorExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ServerInternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AgentIds omitted.

// se_ApplicationIdsList omitted.

// se_AssociateConfigurationItemsToApplicationRequest omitted.

// se_BatchDeleteAgentsRequest omitted.

// se_BatchDeleteImportDataRequest omitted.

// se_ConfigurationIdList omitted.

// se_ContinuousExportIds omitted.

// se_CreateApplicationRequest omitted.

// se_CreateTagsRequest omitted.

// se_DeleteAgent omitted.

// se_DeleteAgents omitted.

// se_DeleteApplicationsRequest omitted.

// se_DeleteTagsRequest omitted.

// se_DescribeAgentsRequest omitted.

// se_DescribeBatchDeleteConfigurationTaskRequest omitted.

// se_DescribeConfigurationsRequest omitted.

// se_DescribeContinuousExportsRequest omitted.

// se_DescribeExportConfigurationsRequest omitted.

// se_DescribeExportTasksRequest omitted.

// se_DescribeImportTasksFilterList omitted.

// se_DescribeImportTasksRequest omitted.

// se_DescribeTagsRequest omitted.

// se_DisassociateConfigurationItemsFromApplicationRequest omitted.

/**
 * serializeAws_json1_1Ec2RecommendationsExportPreferences
 */
const se_Ec2RecommendationsExportPreferences = (
  input: Ec2RecommendationsExportPreferences,
  context: __SerdeContext
): any => {
  return take(input, {
    cpuPerformanceMetricBasis: (_) => se_UsageMetricBasis(_, context),
    enabled: [],
    excludedInstanceTypes: _json,
    preferredRegion: [],
    ramPerformanceMetricBasis: (_) => se_UsageMetricBasis(_, context),
    reservedInstanceOptions: _json,
    tenancy: [],
  });
};

// se_ExcludedInstanceTypes omitted.

// se_ExportDataFormats omitted.

// se_ExportFilter omitted.

// se_ExportFilters omitted.

// se_ExportIds omitted.

/**
 * serializeAws_json1_1ExportPreferences
 */
const se_ExportPreferences = (input: ExportPreferences, context: __SerdeContext): any => {
  return ExportPreferences.visit(input, {
    ec2RecommendationsPreferences: (value) => ({
      ec2RecommendationsPreferences: se_Ec2RecommendationsExportPreferences(value, context),
    }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_Filter omitted.

// se_Filters omitted.

// se_FilterValues omitted.

// se_GetDiscoverySummaryRequest omitted.

// se_ImportTaskFilter omitted.

// se_ImportTaskFilterValueList omitted.

// se_ListConfigurationsRequest omitted.

// se_ListServerNeighborsRequest omitted.

// se_OrderByElement omitted.

// se_OrderByList omitted.

// se_ReservedInstanceOptions omitted.

// se_StartBatchDeleteConfigurationTaskRequest omitted.

// se_StartContinuousExportRequest omitted.

// se_StartDataCollectionByAgentIdsRequest omitted.

/**
 * serializeAws_json1_1StartExportTaskRequest
 */
const se_StartExportTaskRequest = (input: StartExportTaskRequest, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => _.getTime() / 1_000,
    exportDataFormat: _json,
    filters: _json,
    preferences: (_) => se_ExportPreferences(_, context),
    startTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_json1_1StartImportTaskRequest
 */
const se_StartImportTaskRequest = (input: StartImportTaskRequest, context: __SerdeContext): any => {
  return take(input, {
    clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    importUrl: [],
    name: [],
  });
};

// se_StopContinuousExportRequest omitted.

// se_StopDataCollectionByAgentIdsRequest omitted.

// se_Tag omitted.

// se_TagFilter omitted.

// se_TagFilters omitted.

// se_TagSet omitted.

// se_ToDeleteIdentifierList omitted.

// se_UpdateApplicationRequest omitted.

/**
 * serializeAws_json1_1UsageMetricBasis
 */
const se_UsageMetricBasis = (input: UsageMetricBasis, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    percentageAdjust: __serializeFloat,
  });
};

// de_AgentConfigurationStatus omitted.

// de_AgentConfigurationStatusList omitted.

// de_AgentInfo omitted.

// de_AgentNetworkInfo omitted.

// de_AgentNetworkInfoList omitted.

// de_AgentsInfo omitted.

// de_AssociateConfigurationItemsToApplicationResponse omitted.

// de_AuthorizationErrorException omitted.

// de_BatchDeleteAgentError omitted.

// de_BatchDeleteAgentErrors omitted.

// de_BatchDeleteAgentsResponse omitted.

/**
 * deserializeAws_json1_1BatchDeleteConfigurationTask
 */
const de_BatchDeleteConfigurationTask = (output: any, context: __SerdeContext): BatchDeleteConfigurationTask => {
  return take(output, {
    configurationType: __expectString,
    deletedConfigurations: _json,
    deletionWarnings: _json,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failedConfigurations: _json,
    requestedConfigurations: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    taskId: __expectString,
  }) as any;
};

// de_BatchDeleteImportDataError omitted.

// de_BatchDeleteImportDataErrorList omitted.

// de_BatchDeleteImportDataResponse omitted.

// de_Configuration omitted.

// de_ConfigurationIdList omitted.

// de_Configurations omitted.

/**
 * deserializeAws_json1_1ConfigurationTag
 */
const de_ConfigurationTag = (output: any, context: __SerdeContext): ConfigurationTag => {
  return take(output, {
    configurationId: __expectString,
    configurationType: __expectString,
    key: __expectString,
    timeOfCreation: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigurationTagSet
 */
const de_ConfigurationTagSet = (output: any, context: __SerdeContext): ConfigurationTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationTag(entry, context);
    });
  return retVal;
};

// de_ConflictErrorException omitted.

/**
 * deserializeAws_json1_1ContinuousExportDescription
 */
const de_ContinuousExportDescription = (output: any, context: __SerdeContext): ContinuousExportDescription => {
  return take(output, {
    dataSource: __expectString,
    exportId: __expectString,
    s3Bucket: __expectString,
    schemaStorageConfig: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusDetail: __expectString,
    stopTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ContinuousExportDescriptions
 */
const de_ContinuousExportDescriptions = (output: any, context: __SerdeContext): ContinuousExportDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContinuousExportDescription(entry, context);
    });
  return retVal;
};

// de_CreateApplicationResponse omitted.

// de_CreateTagsResponse omitted.

// de_CustomerAgentInfo omitted.

// de_CustomerAgentlessCollectorInfo omitted.

// de_CustomerConnectorInfo omitted.

// de_CustomerMeCollectorInfo omitted.

// de_DeleteApplicationsResponse omitted.

// de_DeleteTagsResponse omitted.

// de_DeletionWarning omitted.

// de_DeletionWarningsList omitted.

// de_DescribeAgentsResponse omitted.

/**
 * deserializeAws_json1_1DescribeBatchDeleteConfigurationTaskResponse
 */
const de_DescribeBatchDeleteConfigurationTaskResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchDeleteConfigurationTaskResponse => {
  return take(output, {
    task: (_: any) => de_BatchDeleteConfigurationTask(_, context),
  }) as any;
};

// de_DescribeConfigurationsAttribute omitted.

// de_DescribeConfigurationsAttributes omitted.

// de_DescribeConfigurationsResponse omitted.

/**
 * deserializeAws_json1_1DescribeContinuousExportsResponse
 */
const de_DescribeContinuousExportsResponse = (
  output: any,
  context: __SerdeContext
): DescribeContinuousExportsResponse => {
  return take(output, {
    descriptions: (_: any) => de_ContinuousExportDescriptions(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeExportConfigurationsResponse
 */
const de_DescribeExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportConfigurationsResponse => {
  return take(output, {
    exportsInfo: (_: any) => de_ExportsInfo(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeExportTasksResponse
 */
const de_DescribeExportTasksResponse = (output: any, context: __SerdeContext): DescribeExportTasksResponse => {
  return take(output, {
    exportsInfo: (_: any) => de_ExportsInfo(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImportTasksResponse
 */
const de_DescribeImportTasksResponse = (output: any, context: __SerdeContext): DescribeImportTasksResponse => {
  return take(output, {
    nextToken: __expectString,
    tasks: (_: any) => de_ImportTaskList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTagsResponse
 */
const de_DescribeTagsResponse = (output: any, context: __SerdeContext): DescribeTagsResponse => {
  return take(output, {
    nextToken: __expectString,
    tags: (_: any) => de_ConfigurationTagSet(_, context),
  }) as any;
};

// de_DisassociateConfigurationItemsFromApplicationResponse omitted.

// de_ExportConfigurationsResponse omitted.

/**
 * deserializeAws_json1_1ExportInfo
 */
const de_ExportInfo = (output: any, context: __SerdeContext): ExportInfo => {
  return take(output, {
    configurationsDownloadUrl: __expectString,
    exportId: __expectString,
    exportRequestTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    exportStatus: __expectString,
    isTruncated: __expectBoolean,
    requestedEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    requestedStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    statusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ExportsInfo
 */
const de_ExportsInfo = (output: any, context: __SerdeContext): ExportInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportInfo(entry, context);
    });
  return retVal;
};

// de_FailedConfiguration omitted.

// de_FailedConfigurationList omitted.

// de_GetDiscoverySummaryResponse omitted.

// de_HomeRegionNotSetException omitted.

/**
 * deserializeAws_json1_1ImportTask
 */
const de_ImportTask = (output: any, context: __SerdeContext): ImportTask => {
  return take(output, {
    applicationImportFailure: __expectInt32,
    applicationImportSuccess: __expectInt32,
    clientRequestToken: __expectString,
    errorsAndFailedEntriesZip: __expectString,
    fileClassification: __expectString,
    importCompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    importDeletedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    importRequestTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    importTaskId: __expectString,
    importUrl: __expectString,
    name: __expectString,
    serverImportFailure: __expectInt32,
    serverImportSuccess: __expectInt32,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ImportTaskList
 */
const de_ImportTaskList = (output: any, context: __SerdeContext): ImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportTask(entry, context);
    });
  return retVal;
};

// de_InvalidParameterException omitted.

// de_InvalidParameterValueException omitted.

// de_LimitExceededException omitted.

// de_ListConfigurationsResponse omitted.

// de_ListServerNeighborsResponse omitted.

// de_NeighborConnectionDetail omitted.

// de_NeighborDetailsList omitted.

// de_OperationNotPermittedException omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_SchemaStorageConfig omitted.

// de_ServerInternalErrorException omitted.

// de_StartBatchDeleteConfigurationTaskResponse omitted.

/**
 * deserializeAws_json1_1StartContinuousExportResponse
 */
const de_StartContinuousExportResponse = (output: any, context: __SerdeContext): StartContinuousExportResponse => {
  return take(output, {
    dataSource: __expectString,
    exportId: __expectString,
    s3Bucket: __expectString,
    schemaStorageConfig: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_StartDataCollectionByAgentIdsResponse omitted.

// de_StartExportTaskResponse omitted.

/**
 * deserializeAws_json1_1StartImportTaskResponse
 */
const de_StartImportTaskResponse = (output: any, context: __SerdeContext): StartImportTaskResponse => {
  return take(output, {
    task: (_: any) => de_ImportTask(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopContinuousExportResponse
 */
const de_StopContinuousExportResponse = (output: any, context: __SerdeContext): StopContinuousExportResponse => {
  return take(output, {
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stopTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_StopDataCollectionByAgentIdsResponse omitted.

// de_UpdateApplicationResponse omitted.

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
    "x-amz-target": `AWSPoseidonService_V2015_11_01.${operation}`,
  };
}
