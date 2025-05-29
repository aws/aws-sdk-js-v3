// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
} from "../commands/CancelTaskExecutionCommand";
import { CreateAgentCommandInput, CreateAgentCommandOutput } from "../commands/CreateAgentCommand";
import {
  CreateLocationAzureBlobCommandInput,
  CreateLocationAzureBlobCommandOutput,
} from "../commands/CreateLocationAzureBlobCommand";
import { CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput } from "../commands/CreateLocationEfsCommand";
import {
  CreateLocationFsxLustreCommandInput,
  CreateLocationFsxLustreCommandOutput,
} from "../commands/CreateLocationFsxLustreCommand";
import {
  CreateLocationFsxOntapCommandInput,
  CreateLocationFsxOntapCommandOutput,
} from "../commands/CreateLocationFsxOntapCommand";
import {
  CreateLocationFsxOpenZfsCommandInput,
  CreateLocationFsxOpenZfsCommandOutput,
} from "../commands/CreateLocationFsxOpenZfsCommand";
import {
  CreateLocationFsxWindowsCommandInput,
  CreateLocationFsxWindowsCommandOutput,
} from "../commands/CreateLocationFsxWindowsCommand";
import { CreateLocationHdfsCommandInput, CreateLocationHdfsCommandOutput } from "../commands/CreateLocationHdfsCommand";
import { CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput } from "../commands/CreateLocationNfsCommand";
import {
  CreateLocationObjectStorageCommandInput,
  CreateLocationObjectStorageCommandOutput,
} from "../commands/CreateLocationObjectStorageCommand";
import { CreateLocationS3CommandInput, CreateLocationS3CommandOutput } from "../commands/CreateLocationS3Command";
import { CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput } from "../commands/CreateLocationSmbCommand";
import { CreateTaskCommandInput, CreateTaskCommandOutput } from "../commands/CreateTaskCommand";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "../commands/DeleteAgentCommand";
import { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "../commands/DeleteLocationCommand";
import { DeleteTaskCommandInput, DeleteTaskCommandOutput } from "../commands/DeleteTaskCommand";
import { DescribeAgentCommandInput, DescribeAgentCommandOutput } from "../commands/DescribeAgentCommand";
import {
  DescribeLocationAzureBlobCommandInput,
  DescribeLocationAzureBlobCommandOutput,
} from "../commands/DescribeLocationAzureBlobCommand";
import {
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput,
} from "../commands/DescribeLocationEfsCommand";
import {
  DescribeLocationFsxLustreCommandInput,
  DescribeLocationFsxLustreCommandOutput,
} from "../commands/DescribeLocationFsxLustreCommand";
import {
  DescribeLocationFsxOntapCommandInput,
  DescribeLocationFsxOntapCommandOutput,
} from "../commands/DescribeLocationFsxOntapCommand";
import {
  DescribeLocationFsxOpenZfsCommandInput,
  DescribeLocationFsxOpenZfsCommandOutput,
} from "../commands/DescribeLocationFsxOpenZfsCommand";
import {
  DescribeLocationFsxWindowsCommandInput,
  DescribeLocationFsxWindowsCommandOutput,
} from "../commands/DescribeLocationFsxWindowsCommand";
import {
  DescribeLocationHdfsCommandInput,
  DescribeLocationHdfsCommandOutput,
} from "../commands/DescribeLocationHdfsCommand";
import {
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput,
} from "../commands/DescribeLocationNfsCommand";
import {
  DescribeLocationObjectStorageCommandInput,
  DescribeLocationObjectStorageCommandOutput,
} from "../commands/DescribeLocationObjectStorageCommand";
import { DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput } from "../commands/DescribeLocationS3Command";
import {
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput,
} from "../commands/DescribeLocationSmbCommand";
import { DescribeTaskCommandInput, DescribeTaskCommandOutput } from "../commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput,
} from "../commands/DescribeTaskExecutionCommand";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "../commands/ListLocationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput } from "../commands/ListTaskExecutionsCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput } from "../commands/StartTaskExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "../commands/UpdateAgentCommand";
import {
  UpdateLocationAzureBlobCommandInput,
  UpdateLocationAzureBlobCommandOutput,
} from "../commands/UpdateLocationAzureBlobCommand";
import { UpdateLocationEfsCommandInput, UpdateLocationEfsCommandOutput } from "../commands/UpdateLocationEfsCommand";
import {
  UpdateLocationFsxLustreCommandInput,
  UpdateLocationFsxLustreCommandOutput,
} from "../commands/UpdateLocationFsxLustreCommand";
import {
  UpdateLocationFsxOntapCommandInput,
  UpdateLocationFsxOntapCommandOutput,
} from "../commands/UpdateLocationFsxOntapCommand";
import {
  UpdateLocationFsxOpenZfsCommandInput,
  UpdateLocationFsxOpenZfsCommandOutput,
} from "../commands/UpdateLocationFsxOpenZfsCommand";
import {
  UpdateLocationFsxWindowsCommandInput,
  UpdateLocationFsxWindowsCommandOutput,
} from "../commands/UpdateLocationFsxWindowsCommand";
import { UpdateLocationHdfsCommandInput, UpdateLocationHdfsCommandOutput } from "../commands/UpdateLocationHdfsCommand";
import { UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput } from "../commands/UpdateLocationNfsCommand";
import {
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
} from "../commands/UpdateLocationObjectStorageCommand";
import { UpdateLocationS3CommandInput, UpdateLocationS3CommandOutput } from "../commands/UpdateLocationS3Command";
import { UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput } from "../commands/UpdateLocationSmbCommand";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "../commands/UpdateTaskCommand";
import {
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
} from "../commands/UpdateTaskExecutionCommand";
import { DataSyncServiceException as __BaseException } from "../models/DataSyncServiceException";
import {
  AzureBlobSasConfiguration,
  CancelTaskExecutionRequest,
  CmkSecretConfig,
  CreateAgentRequest,
  CreateLocationAzureBlobRequest,
  CreateLocationEfsRequest,
  CreateLocationFsxLustreRequest,
  CreateLocationFsxOntapRequest,
  CreateLocationFsxOpenZfsRequest,
  CreateLocationFsxWindowsRequest,
  CreateLocationHdfsRequest,
  CreateLocationNfsRequest,
  CreateLocationObjectStorageRequest,
  CreateLocationS3Request,
  CreateLocationSmbRequest,
  CreateTaskRequest,
  CustomSecretConfig,
  DeleteAgentRequest,
  DeleteLocationRequest,
  DeleteTaskRequest,
  DescribeAgentRequest,
  DescribeAgentResponse,
  DescribeLocationAzureBlobRequest,
  DescribeLocationAzureBlobResponse,
  DescribeLocationEfsRequest,
  DescribeLocationEfsResponse,
  DescribeLocationFsxLustreRequest,
  DescribeLocationFsxLustreResponse,
  DescribeLocationFsxOntapRequest,
  DescribeLocationFsxOntapResponse,
  DescribeLocationFsxOpenZfsRequest,
  DescribeLocationFsxOpenZfsResponse,
  DescribeLocationFsxWindowsRequest,
  DescribeLocationFsxWindowsResponse,
  DescribeLocationHdfsRequest,
  DescribeLocationHdfsResponse,
  DescribeLocationNfsRequest,
  DescribeLocationNfsResponse,
  DescribeLocationObjectStorageRequest,
  DescribeLocationObjectStorageResponse,
  DescribeLocationS3Request,
  DescribeLocationS3Response,
  DescribeLocationSmbRequest,
  DescribeLocationSmbResponse,
  DescribeTaskExecutionRequest,
  DescribeTaskExecutionResponse,
  DescribeTaskRequest,
  DescribeTaskResponse,
  Ec2Config,
  FilterRule,
  FsxProtocol,
  FsxProtocolNfs,
  FsxProtocolSmb,
  FsxUpdateProtocol,
  FsxUpdateProtocolSmb,
  HdfsNameNode,
  InternalException,
  InvalidRequestException,
  ListAgentsRequest,
  ListLocationsRequest,
  ListTagsForResourceRequest,
  ListTaskExecutionsRequest,
  ListTasksRequest,
  LocationFilter,
  ManifestConfig,
  NfsMountOptions,
  OnPremConfig,
  Options,
  QopConfiguration,
  ReportDestination,
  ReportDestinationS3,
  ReportOverride,
  ReportOverrides,
  S3Config,
  S3ManifestConfig,
  SmbMountOptions,
  SourceManifestConfig,
  StartTaskExecutionRequest,
  TagListEntry,
  TagResourceRequest,
  TaskFilter,
  TaskReportConfig,
  TaskSchedule,
  TaskScheduleDetails,
  UntagResourceRequest,
  UpdateAgentRequest,
  UpdateLocationAzureBlobRequest,
  UpdateLocationEfsRequest,
  UpdateLocationFsxLustreRequest,
  UpdateLocationFsxOntapRequest,
  UpdateLocationFsxOpenZfsRequest,
  UpdateLocationFsxWindowsRequest,
  UpdateLocationHdfsRequest,
  UpdateLocationNfsRequest,
  UpdateLocationObjectStorageRequest,
  UpdateLocationS3Request,
  UpdateLocationSmbRequest,
  UpdateTaskExecutionRequest,
  UpdateTaskRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1CancelTaskExecutionCommand
 */
export const se_CancelTaskExecutionCommand = async (
  input: CancelTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelTaskExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAgentCommand
 */
export const se_CreateAgentCommand = async (
  input: CreateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAgent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationAzureBlobCommand
 */
export const se_CreateLocationAzureBlobCommand = async (
  input: CreateLocationAzureBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationAzureBlob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationEfsCommand
 */
export const se_CreateLocationEfsCommand = async (
  input: CreateLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationEfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxLustreCommand
 */
export const se_CreateLocationFsxLustreCommand = async (
  input: CreateLocationFsxLustreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationFsxLustre");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxOntapCommand
 */
export const se_CreateLocationFsxOntapCommand = async (
  input: CreateLocationFsxOntapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationFsxOntap");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxOpenZfsCommand
 */
export const se_CreateLocationFsxOpenZfsCommand = async (
  input: CreateLocationFsxOpenZfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationFsxOpenZfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxWindowsCommand
 */
export const se_CreateLocationFsxWindowsCommand = async (
  input: CreateLocationFsxWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationFsxWindows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationHdfsCommand
 */
export const se_CreateLocationHdfsCommand = async (
  input: CreateLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationHdfs");
  let body: any;
  body = JSON.stringify(se_CreateLocationHdfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationNfsCommand
 */
export const se_CreateLocationNfsCommand = async (
  input: CreateLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationNfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationObjectStorageCommand
 */
export const se_CreateLocationObjectStorageCommand = async (
  input: CreateLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationObjectStorage");
  let body: any;
  body = JSON.stringify(se_CreateLocationObjectStorageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationS3Command
 */
export const se_CreateLocationS3Command = async (
  input: CreateLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationS3");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationSmbCommand
 */
export const se_CreateLocationSmbCommand = async (
  input: CreateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocationSmb");
  let body: any;
  body = JSON.stringify(se_CreateLocationSmbRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTaskCommand
 */
export const se_CreateTaskCommand = async (
  input: CreateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAgentCommand
 */
export const se_DeleteAgentCommand = async (
  input: DeleteAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAgent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLocationCommand
 */
export const se_DeleteLocationCommand = async (
  input: DeleteLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLocation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTaskCommand
 */
export const se_DeleteTaskCommand = async (
  input: DeleteTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAgentCommand
 */
export const se_DescribeAgentCommand = async (
  input: DescribeAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAgent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationAzureBlobCommand
 */
export const se_DescribeLocationAzureBlobCommand = async (
  input: DescribeLocationAzureBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationAzureBlob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationEfsCommand
 */
export const se_DescribeLocationEfsCommand = async (
  input: DescribeLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationEfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxLustreCommand
 */
export const se_DescribeLocationFsxLustreCommand = async (
  input: DescribeLocationFsxLustreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationFsxLustre");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxOntapCommand
 */
export const se_DescribeLocationFsxOntapCommand = async (
  input: DescribeLocationFsxOntapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationFsxOntap");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxOpenZfsCommand
 */
export const se_DescribeLocationFsxOpenZfsCommand = async (
  input: DescribeLocationFsxOpenZfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationFsxOpenZfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxWindowsCommand
 */
export const se_DescribeLocationFsxWindowsCommand = async (
  input: DescribeLocationFsxWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationFsxWindows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationHdfsCommand
 */
export const se_DescribeLocationHdfsCommand = async (
  input: DescribeLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationHdfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationNfsCommand
 */
export const se_DescribeLocationNfsCommand = async (
  input: DescribeLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationNfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationObjectStorageCommand
 */
export const se_DescribeLocationObjectStorageCommand = async (
  input: DescribeLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationObjectStorage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationS3Command
 */
export const se_DescribeLocationS3Command = async (
  input: DescribeLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationS3");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationSmbCommand
 */
export const se_DescribeLocationSmbCommand = async (
  input: DescribeLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocationSmb");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskCommand
 */
export const se_DescribeTaskCommand = async (
  input: DescribeTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskExecutionCommand
 */
export const se_DescribeTaskExecutionCommand = async (
  input: DescribeTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTaskExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAgentsCommand
 */
export const se_ListAgentsCommand = async (
  input: ListAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAgents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLocationsCommand
 */
export const se_ListLocationsCommand = async (
  input: ListLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLocations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTaskExecutionsCommand
 */
export const se_ListTaskExecutionsCommand = async (
  input: ListTaskExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTaskExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTasksCommand
 */
export const se_ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTaskExecutionCommand
 */
export const se_StartTaskExecutionCommand = async (
  input: StartTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTaskExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAgentCommand
 */
export const se_UpdateAgentCommand = async (
  input: UpdateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAgent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationAzureBlobCommand
 */
export const se_UpdateLocationAzureBlobCommand = async (
  input: UpdateLocationAzureBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationAzureBlob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationEfsCommand
 */
export const se_UpdateLocationEfsCommand = async (
  input: UpdateLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationEfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationFsxLustreCommand
 */
export const se_UpdateLocationFsxLustreCommand = async (
  input: UpdateLocationFsxLustreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationFsxLustre");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationFsxOntapCommand
 */
export const se_UpdateLocationFsxOntapCommand = async (
  input: UpdateLocationFsxOntapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationFsxOntap");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationFsxOpenZfsCommand
 */
export const se_UpdateLocationFsxOpenZfsCommand = async (
  input: UpdateLocationFsxOpenZfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationFsxOpenZfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationFsxWindowsCommand
 */
export const se_UpdateLocationFsxWindowsCommand = async (
  input: UpdateLocationFsxWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationFsxWindows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationHdfsCommand
 */
export const se_UpdateLocationHdfsCommand = async (
  input: UpdateLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationHdfs");
  let body: any;
  body = JSON.stringify(se_UpdateLocationHdfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationNfsCommand
 */
export const se_UpdateLocationNfsCommand = async (
  input: UpdateLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationNfs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationObjectStorageCommand
 */
export const se_UpdateLocationObjectStorageCommand = async (
  input: UpdateLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationObjectStorage");
  let body: any;
  body = JSON.stringify(se_UpdateLocationObjectStorageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationS3Command
 */
export const se_UpdateLocationS3Command = async (
  input: UpdateLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationS3");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationSmbCommand
 */
export const se_UpdateLocationSmbCommand = async (
  input: UpdateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationSmb");
  let body: any;
  body = JSON.stringify(se_UpdateLocationSmbRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTaskCommand
 */
export const se_UpdateTaskCommand = async (
  input: UpdateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTaskExecutionCommand
 */
export const se_UpdateTaskExecutionCommand = async (
  input: UpdateTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTaskExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CancelTaskExecutionCommand
 */
export const de_CancelTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAgentCommand
 */
export const de_CreateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationAzureBlobCommand
 */
export const de_CreateLocationAzureBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationAzureBlobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationAzureBlobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationEfsCommand
 */
export const de_CreateLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationEfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationFsxLustreCommand
 */
export const de_CreateLocationFsxLustreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxLustreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationFsxOntapCommand
 */
export const de_CreateLocationFsxOntapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOntapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationFsxOpenZfsCommand
 */
export const de_CreateLocationFsxOpenZfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOpenZfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationFsxWindowsCommand
 */
export const de_CreateLocationFsxWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationHdfsCommand
 */
export const de_CreateLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationNfsCommand
 */
export const de_CreateLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationObjectStorageCommand
 */
export const de_CreateLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationS3Command
 */
export const de_CreateLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationSmbCommand
 */
export const de_CreateLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTaskCommand
 */
export const de_CreateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAgentCommand
 */
export const de_DeleteAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLocationCommand
 */
export const de_DeleteLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTaskCommand
 */
export const de_DeleteTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAgentCommand
 */
export const de_DescribeAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAgentResponse(data, context);
  const response: DescribeAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationAzureBlobCommand
 */
export const de_DescribeLocationAzureBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationAzureBlobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationAzureBlobResponse(data, context);
  const response: DescribeLocationAzureBlobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationEfsCommand
 */
export const de_DescribeLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationEfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationEfsResponse(data, context);
  const response: DescribeLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxLustreCommand
 */
export const de_DescribeLocationFsxLustreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxLustreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxLustreResponse(data, context);
  const response: DescribeLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOntapCommand
 */
export const de_DescribeLocationFsxOntapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOntapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxOntapResponse(data, context);
  const response: DescribeLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOpenZfsCommand
 */
export const de_DescribeLocationFsxOpenZfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOpenZfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxOpenZfsResponse(data, context);
  const response: DescribeLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxWindowsCommand
 */
export const de_DescribeLocationFsxWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxWindowsResponse(data, context);
  const response: DescribeLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationHdfsCommand
 */
export const de_DescribeLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationHdfsResponse(data, context);
  const response: DescribeLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationNfsCommand
 */
export const de_DescribeLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationNfsResponse(data, context);
  const response: DescribeLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationObjectStorageCommand
 */
export const de_DescribeLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationObjectStorageResponse(data, context);
  const response: DescribeLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationS3Command
 */
export const de_DescribeLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationS3Response(data, context);
  const response: DescribeLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLocationSmbCommand
 */
export const de_DescribeLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationSmbResponse(data, context);
  const response: DescribeLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTaskCommand
 */
export const de_DescribeTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskResponse(data, context);
  const response: DescribeTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTaskExecutionCommand
 */
export const de_DescribeTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskExecutionResponse(data, context);
  const response: DescribeTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAgentsCommand
 */
export const de_ListAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLocationsCommand
 */
export const de_ListLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTaskExecutionsCommand
 */
export const de_ListTaskExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTaskExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTasksCommand
 */
export const de_ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartTaskExecutionCommand
 */
export const de_StartTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAgentCommand
 */
export const de_UpdateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationAzureBlobCommand
 */
export const de_UpdateLocationAzureBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationAzureBlobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationAzureBlobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationEfsCommand
 */
export const de_UpdateLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationEfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationFsxLustreCommand
 */
export const de_UpdateLocationFsxLustreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationFsxLustreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationFsxOntapCommand
 */
export const de_UpdateLocationFsxOntapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationFsxOntapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationFsxOpenZfsCommand
 */
export const de_UpdateLocationFsxOpenZfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationFsxOpenZfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationFsxWindowsCommand
 */
export const de_UpdateLocationFsxWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationFsxWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationHdfsCommand
 */
export const de_UpdateLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationNfsCommand
 */
export const de_UpdateLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationObjectStorageCommand
 */
export const de_UpdateLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationS3Command
 */
export const de_UpdateLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLocationSmbCommand
 */
export const de_UpdateLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTaskCommand
 */
export const de_UpdateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTaskExecutionCommand
 */
export const de_UpdateTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTaskExecutionCommandOutput = {
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
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AgentArnList omitted.

// se_AzureBlobSasConfiguration omitted.

// se_CancelTaskExecutionRequest omitted.

// se_CmkSecretConfig omitted.

// se_CreateAgentRequest omitted.

// se_CreateLocationAzureBlobRequest omitted.

// se_CreateLocationEfsRequest omitted.

// se_CreateLocationFsxLustreRequest omitted.

// se_CreateLocationFsxOntapRequest omitted.

// se_CreateLocationFsxOpenZfsRequest omitted.

// se_CreateLocationFsxWindowsRequest omitted.

/**
 * serializeAws_json1_1CreateLocationHdfsRequest
 */
const se_CreateLocationHdfsRequest = (input: CreateLocationHdfsRequest, context: __SerdeContext): any => {
  return take(input, {
    AgentArns: _json,
    AuthenticationType: [],
    BlockSize: [],
    KerberosKeytab: context.base64Encoder,
    KerberosKrb5Conf: context.base64Encoder,
    KerberosPrincipal: [],
    KmsKeyProviderUri: [],
    NameNodes: _json,
    QopConfiguration: _json,
    ReplicationFactor: [],
    SimpleUser: [],
    Subdirectory: [],
    Tags: _json,
  });
};

// se_CreateLocationNfsRequest omitted.

/**
 * serializeAws_json1_1CreateLocationObjectStorageRequest
 */
const se_CreateLocationObjectStorageRequest = (
  input: CreateLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccessKey: [],
    AgentArns: _json,
    BucketName: [],
    CmkSecretConfig: _json,
    CustomSecretConfig: _json,
    SecretKey: [],
    ServerCertificate: context.base64Encoder,
    ServerHostname: [],
    ServerPort: [],
    ServerProtocol: [],
    Subdirectory: [],
    Tags: _json,
  });
};

// se_CreateLocationS3Request omitted.

/**
 * serializeAws_json1_1CreateLocationSmbRequest
 */
const se_CreateLocationSmbRequest = (input: CreateLocationSmbRequest, context: __SerdeContext): any => {
  return take(input, {
    AgentArns: _json,
    AuthenticationType: [],
    DnsIpAddresses: _json,
    Domain: [],
    KerberosKeytab: context.base64Encoder,
    KerberosKrb5Conf: context.base64Encoder,
    KerberosPrincipal: [],
    MountOptions: _json,
    Password: [],
    ServerHostname: [],
    Subdirectory: [],
    Tags: _json,
    User: [],
  });
};

// se_CreateTaskRequest omitted.

// se_CustomSecretConfig omitted.

// se_DeleteAgentRequest omitted.

// se_DeleteLocationRequest omitted.

// se_DeleteTaskRequest omitted.

// se_DescribeAgentRequest omitted.

// se_DescribeLocationAzureBlobRequest omitted.

// se_DescribeLocationEfsRequest omitted.

// se_DescribeLocationFsxLustreRequest omitted.

// se_DescribeLocationFsxOntapRequest omitted.

// se_DescribeLocationFsxOpenZfsRequest omitted.

// se_DescribeLocationFsxWindowsRequest omitted.

// se_DescribeLocationHdfsRequest omitted.

// se_DescribeLocationNfsRequest omitted.

// se_DescribeLocationObjectStorageRequest omitted.

// se_DescribeLocationS3Request omitted.

// se_DescribeLocationSmbRequest omitted.

// se_DescribeTaskExecutionRequest omitted.

// se_DescribeTaskRequest omitted.

// se_DnsIpList omitted.

// se_Ec2Config omitted.

// se_Ec2SecurityGroupArnList omitted.

// se_FilterList omitted.

// se_FilterRule omitted.

// se_FilterValues omitted.

// se_FsxProtocol omitted.

// se_FsxProtocolNfs omitted.

// se_FsxProtocolSmb omitted.

// se_FsxUpdateProtocol omitted.

// se_FsxUpdateProtocolSmb omitted.

// se_HdfsNameNode omitted.

// se_HdfsNameNodeList omitted.

// se_InputTagList omitted.

// se_ListAgentsRequest omitted.

// se_ListLocationsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTaskExecutionsRequest omitted.

// se_ListTasksRequest omitted.

// se_LocationFilter omitted.

// se_LocationFilters omitted.

// se_ManifestConfig omitted.

// se_NfsMountOptions omitted.

// se_OnPremConfig omitted.

// se_Options omitted.

// se_PLSecurityGroupArnList omitted.

// se_PLSubnetArnList omitted.

// se_QopConfiguration omitted.

// se_ReportDestination omitted.

// se_ReportDestinationS3 omitted.

// se_ReportOverride omitted.

// se_ReportOverrides omitted.

// se_S3Config omitted.

// se_S3ManifestConfig omitted.

// se_SmbMountOptions omitted.

// se_SourceManifestConfig omitted.

// se_StartTaskExecutionRequest omitted.

// se_TagKeyList omitted.

// se_TagListEntry omitted.

// se_TagResourceRequest omitted.

// se_TaskFilter omitted.

// se_TaskFilters omitted.

// se_TaskReportConfig omitted.

// se_TaskSchedule omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAgentRequest omitted.

// se_UpdateLocationAzureBlobRequest omitted.

// se_UpdateLocationEfsRequest omitted.

// se_UpdateLocationFsxLustreRequest omitted.

// se_UpdateLocationFsxOntapRequest omitted.

// se_UpdateLocationFsxOpenZfsRequest omitted.

// se_UpdateLocationFsxWindowsRequest omitted.

/**
 * serializeAws_json1_1UpdateLocationHdfsRequest
 */
const se_UpdateLocationHdfsRequest = (input: UpdateLocationHdfsRequest, context: __SerdeContext): any => {
  return take(input, {
    AgentArns: _json,
    AuthenticationType: [],
    BlockSize: [],
    KerberosKeytab: context.base64Encoder,
    KerberosKrb5Conf: context.base64Encoder,
    KerberosPrincipal: [],
    KmsKeyProviderUri: [],
    LocationArn: [],
    NameNodes: _json,
    QopConfiguration: _json,
    ReplicationFactor: [],
    SimpleUser: [],
    Subdirectory: [],
  });
};

// se_UpdateLocationNfsRequest omitted.

/**
 * serializeAws_json1_1UpdateLocationObjectStorageRequest
 */
const se_UpdateLocationObjectStorageRequest = (
  input: UpdateLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccessKey: [],
    AgentArns: _json,
    CmkSecretConfig: _json,
    CustomSecretConfig: _json,
    LocationArn: [],
    SecretKey: [],
    ServerCertificate: context.base64Encoder,
    ServerHostname: [],
    ServerPort: [],
    ServerProtocol: [],
    Subdirectory: [],
  });
};

// se_UpdateLocationS3Request omitted.

/**
 * serializeAws_json1_1UpdateLocationSmbRequest
 */
const se_UpdateLocationSmbRequest = (input: UpdateLocationSmbRequest, context: __SerdeContext): any => {
  return take(input, {
    AgentArns: _json,
    AuthenticationType: [],
    DnsIpAddresses: _json,
    Domain: [],
    KerberosKeytab: context.base64Encoder,
    KerberosKrb5Conf: context.base64Encoder,
    KerberosPrincipal: [],
    LocationArn: [],
    MountOptions: _json,
    Password: [],
    ServerHostname: [],
    Subdirectory: [],
    User: [],
  });
};

// se_UpdateTaskExecutionRequest omitted.

// se_UpdateTaskRequest omitted.

// de_AgentArnList omitted.

// de_AgentList omitted.

// de_AgentListEntry omitted.

// de_CancelTaskExecutionResponse omitted.

// de_CmkSecretConfig omitted.

// de_CreateAgentResponse omitted.

// de_CreateLocationAzureBlobResponse omitted.

// de_CreateLocationEfsResponse omitted.

// de_CreateLocationFsxLustreResponse omitted.

// de_CreateLocationFsxOntapResponse omitted.

// de_CreateLocationFsxOpenZfsResponse omitted.

// de_CreateLocationFsxWindowsResponse omitted.

// de_CreateLocationHdfsResponse omitted.

// de_CreateLocationNfsResponse omitted.

// de_CreateLocationObjectStorageResponse omitted.

// de_CreateLocationS3Response omitted.

// de_CreateLocationSmbResponse omitted.

// de_CreateTaskResponse omitted.

// de_CustomSecretConfig omitted.

// de_DeleteAgentResponse omitted.

// de_DeleteLocationResponse omitted.

// de_DeleteTaskResponse omitted.

/**
 * deserializeAws_json1_1DescribeAgentResponse
 */
const de_DescribeAgentResponse = (output: any, context: __SerdeContext): DescribeAgentResponse => {
  return take(output, {
    AgentArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointType: __expectString,
    LastConnectionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Platform: _json,
    PrivateLinkConfig: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationAzureBlobResponse
 */
const de_DescribeLocationAzureBlobResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationAzureBlobResponse => {
  return take(output, {
    AccessTier: __expectString,
    AgentArns: _json,
    AuthenticationType: __expectString,
    BlobType: __expectString,
    CmkSecretConfig: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomSecretConfig: _json,
    LocationArn: __expectString,
    LocationUri: __expectString,
    ManagedSecretConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationEfsResponse
 */
const de_DescribeLocationEfsResponse = (output: any, context: __SerdeContext): DescribeLocationEfsResponse => {
  return take(output, {
    AccessPointArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Ec2Config: _json,
    FileSystemAccessRoleArn: __expectString,
    InTransitEncryption: __expectString,
    LocationArn: __expectString,
    LocationUri: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxLustreResponse
 */
const de_DescribeLocationFsxLustreResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxLustreResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationArn: __expectString,
    LocationUri: __expectString,
    SecurityGroupArns: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOntapResponse
 */
const de_DescribeLocationFsxOntapResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxOntapResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FsxFilesystemArn: __expectString,
    LocationArn: __expectString,
    LocationUri: __expectString,
    Protocol: _json,
    SecurityGroupArns: _json,
    StorageVirtualMachineArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOpenZfsResponse
 */
const de_DescribeLocationFsxOpenZfsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxOpenZfsResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationArn: __expectString,
    LocationUri: __expectString,
    Protocol: _json,
    SecurityGroupArns: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxWindowsResponse
 */
const de_DescribeLocationFsxWindowsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxWindowsResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Domain: __expectString,
    LocationArn: __expectString,
    LocationUri: __expectString,
    SecurityGroupArns: _json,
    User: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationHdfsResponse
 */
const de_DescribeLocationHdfsResponse = (output: any, context: __SerdeContext): DescribeLocationHdfsResponse => {
  return take(output, {
    AgentArns: _json,
    AuthenticationType: __expectString,
    BlockSize: __expectInt32,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KerberosPrincipal: __expectString,
    KmsKeyProviderUri: __expectString,
    LocationArn: __expectString,
    LocationUri: __expectString,
    NameNodes: _json,
    QopConfiguration: _json,
    ReplicationFactor: __expectInt32,
    SimpleUser: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationNfsResponse
 */
const de_DescribeLocationNfsResponse = (output: any, context: __SerdeContext): DescribeLocationNfsResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationArn: __expectString,
    LocationUri: __expectString,
    MountOptions: _json,
    OnPremConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationObjectStorageResponse
 */
const de_DescribeLocationObjectStorageResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationObjectStorageResponse => {
  return take(output, {
    AccessKey: __expectString,
    AgentArns: _json,
    CmkSecretConfig: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomSecretConfig: _json,
    LocationArn: __expectString,
    LocationUri: __expectString,
    ManagedSecretConfig: _json,
    ServerCertificate: context.base64Decoder,
    ServerPort: __expectInt32,
    ServerProtocol: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationS3Response
 */
const de_DescribeLocationS3Response = (output: any, context: __SerdeContext): DescribeLocationS3Response => {
  return take(output, {
    AgentArns: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationArn: __expectString,
    LocationUri: __expectString,
    S3Config: _json,
    S3StorageClass: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLocationSmbResponse
 */
const de_DescribeLocationSmbResponse = (output: any, context: __SerdeContext): DescribeLocationSmbResponse => {
  return take(output, {
    AgentArns: _json,
    AuthenticationType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsIpAddresses: _json,
    Domain: __expectString,
    KerberosPrincipal: __expectString,
    LocationArn: __expectString,
    LocationUri: __expectString,
    MountOptions: _json,
    User: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTaskExecutionResponse
 */
const de_DescribeTaskExecutionResponse = (output: any, context: __SerdeContext): DescribeTaskExecutionResponse => {
  return take(output, {
    BytesCompressed: __expectLong,
    BytesTransferred: __expectLong,
    BytesWritten: __expectLong,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EstimatedBytesToTransfer: __expectLong,
    EstimatedFilesToDelete: __expectLong,
    EstimatedFilesToTransfer: __expectLong,
    Excludes: _json,
    FilesDeleted: __expectLong,
    FilesFailed: _json,
    FilesListed: _json,
    FilesPrepared: __expectLong,
    FilesSkipped: __expectLong,
    FilesTransferred: __expectLong,
    FilesVerified: __expectLong,
    Includes: _json,
    LaunchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ManifestConfig: _json,
    Options: _json,
    ReportResult: _json,
    Result: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TaskExecutionArn: __expectString,
    TaskMode: __expectString,
    TaskReportConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTaskResponse
 */
const de_DescribeTaskResponse = (output: any, context: __SerdeContext): DescribeTaskResponse => {
  return take(output, {
    CloudWatchLogGroupArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentTaskExecutionArn: __expectString,
    DestinationLocationArn: __expectString,
    DestinationNetworkInterfaceArns: _json,
    ErrorCode: __expectString,
    ErrorDetail: __expectString,
    Excludes: _json,
    Includes: _json,
    ManifestConfig: _json,
    Name: __expectString,
    Options: _json,
    Schedule: _json,
    ScheduleDetails: (_: any) => de_TaskScheduleDetails(_, context),
    SourceLocationArn: __expectString,
    SourceNetworkInterfaceArns: _json,
    Status: __expectString,
    TaskArn: __expectString,
    TaskMode: __expectString,
    TaskReportConfig: _json,
  }) as any;
};

// de_DestinationNetworkInterfaceArns omitted.

// de_DnsIpList omitted.

// de_Ec2Config omitted.

// de_Ec2SecurityGroupArnList omitted.

// de_FilterList omitted.

// de_FilterRule omitted.

// de_FsxProtocol omitted.

// de_FsxProtocolNfs omitted.

// de_FsxProtocolSmb omitted.

// de_HdfsNameNode omitted.

// de_HdfsNameNodeList omitted.

// de_InternalException omitted.

// de_InvalidRequestException omitted.

// de_ListAgentsResponse omitted.

// de_ListLocationsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTaskExecutionsResponse omitted.

// de_ListTasksResponse omitted.

// de_LocationList omitted.

// de_LocationListEntry omitted.

// de_ManagedSecretConfig omitted.

// de_ManifestConfig omitted.

// de_NfsMountOptions omitted.

// de_OnPremConfig omitted.

// de_Options omitted.

// de_OutputTagList omitted.

// de_Platform omitted.

// de_PLSecurityGroupArnList omitted.

// de_PLSubnetArnList omitted.

// de_PrivateLinkConfig omitted.

// de_QopConfiguration omitted.

// de_ReportDestination omitted.

// de_ReportDestinationS3 omitted.

// de_ReportOverride omitted.

// de_ReportOverrides omitted.

// de_ReportResult omitted.

// de_S3Config omitted.

// de_S3ManifestConfig omitted.

// de_SmbMountOptions omitted.

// de_SourceManifestConfig omitted.

// de_SourceNetworkInterfaceArns omitted.

// de_StartTaskExecutionResponse omitted.

// de_TagListEntry omitted.

// de_TagResourceResponse omitted.

// de_TaskExecutionFilesFailedDetail omitted.

// de_TaskExecutionFilesListedDetail omitted.

// de_TaskExecutionList omitted.

// de_TaskExecutionListEntry omitted.

// de_TaskExecutionResultDetail omitted.

// de_TaskList omitted.

// de_TaskListEntry omitted.

// de_TaskReportConfig omitted.

// de_TaskSchedule omitted.

/**
 * deserializeAws_json1_1TaskScheduleDetails
 */
const de_TaskScheduleDetails = (output: any, context: __SerdeContext): TaskScheduleDetails => {
  return take(output, {
    DisabledBy: __expectString,
    DisabledReason: __expectString,
    StatusUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_UntagResourceResponse omitted.

// de_UpdateAgentResponse omitted.

// de_UpdateLocationAzureBlobResponse omitted.

// de_UpdateLocationEfsResponse omitted.

// de_UpdateLocationFsxLustreResponse omitted.

// de_UpdateLocationFsxOntapResponse omitted.

// de_UpdateLocationFsxOpenZfsResponse omitted.

// de_UpdateLocationFsxWindowsResponse omitted.

// de_UpdateLocationHdfsResponse omitted.

// de_UpdateLocationNfsResponse omitted.

// de_UpdateLocationObjectStorageResponse omitted.

// de_UpdateLocationS3Response omitted.

// de_UpdateLocationSmbResponse omitted.

// de_UpdateTaskExecutionResponse omitted.

// de_UpdateTaskResponse omitted.

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
    "x-amz-target": `FmrsService.${operation}`,
  };
}
