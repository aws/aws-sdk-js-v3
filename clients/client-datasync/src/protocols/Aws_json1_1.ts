// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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

import {
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
} from "../commands/CancelTaskExecutionCommand";
import { CreateAgentCommandInput, CreateAgentCommandOutput } from "../commands/CreateAgentCommand";
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
import { UpdateLocationHdfsCommandInput, UpdateLocationHdfsCommandOutput } from "../commands/UpdateLocationHdfsCommand";
import { UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput } from "../commands/UpdateLocationNfsCommand";
import {
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
} from "../commands/UpdateLocationObjectStorageCommand";
import { UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput } from "../commands/UpdateLocationSmbCommand";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "../commands/UpdateTaskCommand";
import {
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
} from "../commands/UpdateTaskExecutionCommand";
import { DataSyncServiceException as __BaseException } from "../models/DataSyncServiceException";
import {
  AgentListEntry,
  CancelTaskExecutionRequest,
  CancelTaskExecutionResponse,
  CreateAgentRequest,
  CreateAgentResponse,
  CreateLocationEfsRequest,
  CreateLocationEfsResponse,
  CreateLocationFsxLustreRequest,
  CreateLocationFsxLustreResponse,
  CreateLocationFsxOntapRequest,
  CreateLocationFsxOntapResponse,
  CreateLocationFsxOpenZfsRequest,
  CreateLocationFsxOpenZfsResponse,
  CreateLocationFsxWindowsRequest,
  CreateLocationFsxWindowsResponse,
  CreateLocationHdfsRequest,
  CreateLocationHdfsResponse,
  CreateLocationNfsRequest,
  CreateLocationNfsResponse,
  CreateLocationObjectStorageRequest,
  CreateLocationObjectStorageResponse,
  CreateLocationS3Request,
  CreateLocationS3Response,
  CreateLocationSmbRequest,
  CreateLocationSmbResponse,
  CreateTaskRequest,
  CreateTaskResponse,
  DeleteAgentRequest,
  DeleteAgentResponse,
  DeleteLocationRequest,
  DeleteLocationResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
  DescribeAgentRequest,
  DescribeAgentResponse,
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
  HdfsNameNode,
  InternalException,
  InvalidRequestException,
  ListAgentsRequest,
  ListAgentsResponse,
  ListLocationsRequest,
  ListLocationsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTaskExecutionsRequest,
  ListTaskExecutionsResponse,
  ListTasksRequest,
  ListTasksResponse,
  LocationFilter,
  LocationListEntry,
  NfsMountOptions,
  OnPremConfig,
  Options,
  PrivateLinkConfig,
  QopConfiguration,
  S3Config,
  SmbMountOptions,
  StartTaskExecutionRequest,
  StartTaskExecutionResponse,
  TagListEntry,
  TagResourceRequest,
  TagResourceResponse,
  TaskExecutionListEntry,
  TaskExecutionResultDetail,
  TaskFilter,
  TaskListEntry,
  TaskSchedule,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAgentRequest,
  UpdateAgentResponse,
  UpdateLocationHdfsRequest,
  UpdateLocationHdfsResponse,
  UpdateLocationNfsRequest,
  UpdateLocationNfsResponse,
  UpdateLocationObjectStorageRequest,
  UpdateLocationObjectStorageResponse,
  UpdateLocationSmbRequest,
  UpdateLocationSmbResponse,
  UpdateTaskExecutionRequest,
  UpdateTaskExecutionResponse,
  UpdateTaskRequest,
  UpdateTaskResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1CancelTaskExecutionCommand
 */
export const se_CancelTaskExecutionCommand = async (
  input: CancelTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CancelTaskExecution",
  };
  let body: any;
  body = JSON.stringify(se_CancelTaskExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAgentCommand
 */
export const se_CreateAgentCommand = async (
  input: CreateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateAgent",
  };
  let body: any;
  body = JSON.stringify(se_CreateAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationEfsCommand
 */
export const se_CreateLocationEfsCommand = async (
  input: CreateLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationEfs",
  };
  let body: any;
  body = JSON.stringify(se_CreateLocationEfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxLustreCommand
 */
export const se_CreateLocationFsxLustreCommand = async (
  input: CreateLocationFsxLustreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxLustre",
  };
  let body: any;
  body = JSON.stringify(se_CreateLocationFsxLustreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxOntapCommand
 */
export const se_CreateLocationFsxOntapCommand = async (
  input: CreateLocationFsxOntapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxOntap",
  };
  let body: any;
  body = JSON.stringify(se_CreateLocationFsxOntapRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxOpenZfsCommand
 */
export const se_CreateLocationFsxOpenZfsCommand = async (
  input: CreateLocationFsxOpenZfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxOpenZfs",
  };
  let body: any;
  body = JSON.stringify(se_CreateLocationFsxOpenZfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationFsxWindowsCommand
 */
export const se_CreateLocationFsxWindowsCommand = async (
  input: CreateLocationFsxWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxWindows",
  };
  let body: any;
  body = JSON.stringify(se_CreateLocationFsxWindowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationHdfsCommand
 */
export const se_CreateLocationHdfsCommand = async (
  input: CreateLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationHdfs",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationNfs",
  };
  let body: any;
  body = JSON.stringify(se_CreateLocationNfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationObjectStorageCommand
 */
export const se_CreateLocationObjectStorageCommand = async (
  input: CreateLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationObjectStorage",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationS3",
  };
  let body: any;
  body = JSON.stringify(se_CreateLocationS3Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationSmbCommand
 */
export const se_CreateLocationSmbCommand = async (
  input: CreateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationSmb",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateTask",
  };
  let body: any;
  body = JSON.stringify(se_CreateTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAgentCommand
 */
export const se_DeleteAgentCommand = async (
  input: DeleteAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DeleteAgent",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLocationCommand
 */
export const se_DeleteLocationCommand = async (
  input: DeleteLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DeleteLocation",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLocationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTaskCommand
 */
export const se_DeleteTaskCommand = async (
  input: DeleteTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DeleteTask",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAgentCommand
 */
export const se_DescribeAgentCommand = async (
  input: DescribeAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeAgent",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationEfsCommand
 */
export const se_DescribeLocationEfsCommand = async (
  input: DescribeLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationEfs",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationEfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxLustreCommand
 */
export const se_DescribeLocationFsxLustreCommand = async (
  input: DescribeLocationFsxLustreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxLustre",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationFsxLustreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxOntapCommand
 */
export const se_DescribeLocationFsxOntapCommand = async (
  input: DescribeLocationFsxOntapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxOntap",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationFsxOntapRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxOpenZfsCommand
 */
export const se_DescribeLocationFsxOpenZfsCommand = async (
  input: DescribeLocationFsxOpenZfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxOpenZfs",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationFsxOpenZfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationFsxWindowsCommand
 */
export const se_DescribeLocationFsxWindowsCommand = async (
  input: DescribeLocationFsxWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxWindows",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationFsxWindowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationHdfsCommand
 */
export const se_DescribeLocationHdfsCommand = async (
  input: DescribeLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationHdfs",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationHdfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationNfsCommand
 */
export const se_DescribeLocationNfsCommand = async (
  input: DescribeLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationNfs",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationNfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationObjectStorageCommand
 */
export const se_DescribeLocationObjectStorageCommand = async (
  input: DescribeLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationObjectStorage",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationObjectStorageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationS3Command
 */
export const se_DescribeLocationS3Command = async (
  input: DescribeLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationS3",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationS3Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationSmbCommand
 */
export const se_DescribeLocationSmbCommand = async (
  input: DescribeLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationSmb",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLocationSmbRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskCommand
 */
export const se_DescribeTaskCommand = async (
  input: DescribeTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeTask",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskExecutionCommand
 */
export const se_DescribeTaskExecutionCommand = async (
  input: DescribeTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeTaskExecution",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTaskExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAgentsCommand
 */
export const se_ListAgentsCommand = async (
  input: ListAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListAgents",
  };
  let body: any;
  body = JSON.stringify(se_ListAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLocationsCommand
 */
export const se_ListLocationsCommand = async (
  input: ListLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListLocations",
  };
  let body: any;
  body = JSON.stringify(se_ListLocationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTaskExecutionsCommand
 */
export const se_ListTaskExecutionsCommand = async (
  input: ListTaskExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListTaskExecutions",
  };
  let body: any;
  body = JSON.stringify(se_ListTaskExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTasksCommand
 */
export const se_ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListTasks",
  };
  let body: any;
  body = JSON.stringify(se_ListTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTaskExecutionCommand
 */
export const se_StartTaskExecutionCommand = async (
  input: StartTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.StartTaskExecution",
  };
  let body: any;
  body = JSON.stringify(se_StartTaskExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAgentCommand
 */
export const se_UpdateAgentCommand = async (
  input: UpdateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateAgent",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationHdfsCommand
 */
export const se_UpdateLocationHdfsCommand = async (
  input: UpdateLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationHdfs",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationNfs",
  };
  let body: any;
  body = JSON.stringify(se_UpdateLocationNfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationObjectStorageCommand
 */
export const se_UpdateLocationObjectStorageCommand = async (
  input: UpdateLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationObjectStorage",
  };
  let body: any;
  body = JSON.stringify(se_UpdateLocationObjectStorageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLocationSmbCommand
 */
export const se_UpdateLocationSmbCommand = async (
  input: UpdateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationSmb",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateTask",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTaskExecutionCommand
 */
export const se_UpdateTaskExecutionCommand = async (
  input: UpdateTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateTaskExecution",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTaskExecutionRequest(input, context));
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
    return de_CancelTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelTaskExecutionResponse(data, context);
  const response: CancelTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelTaskExecutionCommandError
 */
const de_CancelTaskExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTaskExecutionCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAgentCommand
 */
export const de_CreateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAgentResponse(data, context);
  const response: CreateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAgentCommandError
 */
const de_CreateAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationEfsCommand
 */
export const de_CreateLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationEfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationEfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationEfsResponse(data, context);
  const response: CreateLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationEfsCommandError
 */
const de_CreateLocationEfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationEfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationFsxLustreCommand
 */
export const de_CreateLocationFsxLustreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxLustreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationFsxLustreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationFsxLustreResponse(data, context);
  const response: CreateLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationFsxLustreCommandError
 */
const de_CreateLocationFsxLustreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxLustreCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationFsxOntapCommand
 */
export const de_CreateLocationFsxOntapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOntapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationFsxOntapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationFsxOntapResponse(data, context);
  const response: CreateLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationFsxOntapCommandError
 */
const de_CreateLocationFsxOntapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOntapCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationFsxOpenZfsCommand
 */
export const de_CreateLocationFsxOpenZfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOpenZfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationFsxOpenZfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationFsxOpenZfsResponse(data, context);
  const response: CreateLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationFsxOpenZfsCommandError
 */
const de_CreateLocationFsxOpenZfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOpenZfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationFsxWindowsCommand
 */
export const de_CreateLocationFsxWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationFsxWindowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationFsxWindowsResponse(data, context);
  const response: CreateLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationFsxWindowsCommandError
 */
const de_CreateLocationFsxWindowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxWindowsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationHdfsCommand
 */
export const de_CreateLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationHdfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationHdfsResponse(data, context);
  const response: CreateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationHdfsCommandError
 */
const de_CreateLocationHdfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationHdfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationNfsCommand
 */
export const de_CreateLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationNfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationNfsResponse(data, context);
  const response: CreateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationNfsCommandError
 */
const de_CreateLocationNfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationNfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationObjectStorageCommand
 */
export const de_CreateLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationObjectStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationObjectStorageResponse(data, context);
  const response: CreateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationObjectStorageCommandError
 */
const de_CreateLocationObjectStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationObjectStorageCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationS3Command
 */
export const de_CreateLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationS3Response(data, context);
  const response: CreateLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationS3CommandError
 */
const de_CreateLocationS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationS3CommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLocationSmbCommand
 */
export const de_CreateLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationSmbCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLocationSmbResponse(data, context);
  const response: CreateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLocationSmbCommandError
 */
const de_CreateLocationSmbCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationSmbCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTaskCommand
 */
export const de_CreateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTaskResponse(data, context);
  const response: CreateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTaskCommandError
 */
const de_CreateTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAgentCommand
 */
export const de_DeleteAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAgentResponse(data, context);
  const response: DeleteAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAgentCommandError
 */
const de_DeleteAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteLocationCommand
 */
export const de_DeleteLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLocationResponse(data, context);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLocationCommandError
 */
const de_DeleteLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTaskCommand
 */
export const de_DeleteTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTaskResponse(data, context);
  const response: DeleteTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTaskCommandError
 */
const de_DeleteTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAgentCommand
 */
export const de_DescribeAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAgentResponse(data, context);
  const response: DescribeAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAgentCommandError
 */
const de_DescribeAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationEfsCommand
 */
export const de_DescribeLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationEfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationEfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationEfsResponse(data, context);
  const response: DescribeLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationEfsCommandError
 */
const de_DescribeLocationEfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationEfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationFsxLustreCommand
 */
export const de_DescribeLocationFsxLustreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxLustreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationFsxLustreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxLustreResponse(data, context);
  const response: DescribeLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationFsxLustreCommandError
 */
const de_DescribeLocationFsxLustreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxLustreCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOntapCommand
 */
export const de_DescribeLocationFsxOntapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOntapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationFsxOntapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxOntapResponse(data, context);
  const response: DescribeLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOntapCommandError
 */
const de_DescribeLocationFsxOntapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOntapCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOpenZfsCommand
 */
export const de_DescribeLocationFsxOpenZfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOpenZfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationFsxOpenZfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxOpenZfsResponse(data, context);
  const response: DescribeLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOpenZfsCommandError
 */
const de_DescribeLocationFsxOpenZfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOpenZfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationFsxWindowsCommand
 */
export const de_DescribeLocationFsxWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationFsxWindowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationFsxWindowsResponse(data, context);
  const response: DescribeLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationFsxWindowsCommandError
 */
const de_DescribeLocationFsxWindowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxWindowsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationHdfsCommand
 */
export const de_DescribeLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationHdfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationHdfsResponse(data, context);
  const response: DescribeLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationHdfsCommandError
 */
const de_DescribeLocationHdfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationHdfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationNfsCommand
 */
export const de_DescribeLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationNfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationNfsResponse(data, context);
  const response: DescribeLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationNfsCommandError
 */
const de_DescribeLocationNfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationNfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationObjectStorageCommand
 */
export const de_DescribeLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationObjectStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationObjectStorageResponse(data, context);
  const response: DescribeLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationObjectStorageCommandError
 */
const de_DescribeLocationObjectStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationObjectStorageCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationS3Command
 */
export const de_DescribeLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationS3Response(data, context);
  const response: DescribeLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationS3CommandError
 */
const de_DescribeLocationS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationS3CommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationSmbCommand
 */
export const de_DescribeLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationSmbCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLocationSmbResponse(data, context);
  const response: DescribeLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationSmbCommandError
 */
const de_DescribeLocationSmbCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationSmbCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTaskCommand
 */
export const de_DescribeTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskResponse(data, context);
  const response: DescribeTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTaskCommandError
 */
const de_DescribeTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTaskExecutionCommand
 */
export const de_DescribeTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskExecutionResponse(data, context);
  const response: DescribeTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTaskExecutionCommandError
 */
const de_DescribeTaskExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskExecutionCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAgentsCommand
 */
export const de_ListAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAgentsResponse(data, context);
  const response: ListAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAgentsCommandError
 */
const de_ListAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListLocationsCommand
 */
export const de_ListLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLocationsResponse(data, context);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLocationsCommandError
 */
const de_ListLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "com.amazonaws.datasync#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTaskExecutionsCommand
 */
export const de_ListTaskExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTaskExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTaskExecutionsResponse(data, context);
  const response: ListTaskExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTaskExecutionsCommandError
 */
const de_ListTaskExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskExecutionsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTasksCommand
 */
export const de_ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTasksResponse(data, context);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTasksCommandError
 */
const de_ListTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartTaskExecutionCommand
 */
export const de_StartTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartTaskExecutionResponse(data, context);
  const response: StartTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartTaskExecutionCommandError
 */
const de_StartTaskExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskExecutionCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "com.amazonaws.datasync#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "com.amazonaws.datasync#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAgentCommand
 */
export const de_UpdateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAgentResponse(data, context);
  const response: UpdateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAgentCommandError
 */
const de_UpdateAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateLocationHdfsCommand
 */
export const de_UpdateLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLocationHdfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLocationHdfsResponse(data, context);
  const response: UpdateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLocationHdfsCommandError
 */
const de_UpdateLocationHdfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationHdfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateLocationNfsCommand
 */
export const de_UpdateLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLocationNfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLocationNfsResponse(data, context);
  const response: UpdateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLocationNfsCommandError
 */
const de_UpdateLocationNfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationNfsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateLocationObjectStorageCommand
 */
export const de_UpdateLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLocationObjectStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLocationObjectStorageResponse(data, context);
  const response: UpdateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLocationObjectStorageCommandError
 */
const de_UpdateLocationObjectStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationObjectStorageCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateLocationSmbCommand
 */
export const de_UpdateLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLocationSmbCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLocationSmbResponse(data, context);
  const response: UpdateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLocationSmbCommandError
 */
const de_UpdateLocationSmbCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationSmbCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTaskCommand
 */
export const de_UpdateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTaskResponse(data, context);
  const response: UpdateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTaskCommandError
 */
const de_UpdateTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTaskExecutionCommand
 */
export const de_UpdateTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTaskExecutionResponse(data, context);
  const response: UpdateTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTaskExecutionCommandError
 */
const de_UpdateTaskExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskExecutionCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalException(body, context);
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
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AgentArnList
 */
const se_AgentArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CancelTaskExecutionRequest
 */
const se_CancelTaskExecutionRequest = (input: CancelTaskExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskExecutionArn != null && { TaskExecutionArn: input.TaskExecutionArn }),
  };
};

/**
 * serializeAws_json1_1CreateAgentRequest
 */
const se_CreateAgentRequest = (input: CreateAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActivationKey != null && { ActivationKey: input.ActivationKey }),
    ...(input.AgentName != null && { AgentName: input.AgentName }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: se_PLSecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.SubnetArns != null && { SubnetArns: se_PLSubnetArnList(input.SubnetArns, context) }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
    ...(input.VpcEndpointId != null && { VpcEndpointId: input.VpcEndpointId }),
  };
};

/**
 * serializeAws_json1_1CreateLocationEfsRequest
 */
const se_CreateLocationEfsRequest = (input: CreateLocationEfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessPointArn != null && { AccessPointArn: input.AccessPointArn }),
    ...(input.Ec2Config != null && { Ec2Config: se_Ec2Config(input.Ec2Config, context) }),
    ...(input.EfsFilesystemArn != null && { EfsFilesystemArn: input.EfsFilesystemArn }),
    ...(input.FileSystemAccessRoleArn != null && { FileSystemAccessRoleArn: input.FileSystemAccessRoleArn }),
    ...(input.InTransitEncryption != null && { InTransitEncryption: input.InTransitEncryption }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationFsxLustreRequest
 */
const se_CreateLocationFsxLustreRequest = (input: CreateLocationFsxLustreRequest, context: __SerdeContext): any => {
  return {
    ...(input.FsxFilesystemArn != null && { FsxFilesystemArn: input.FsxFilesystemArn }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: se_Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationFsxOntapRequest
 */
const se_CreateLocationFsxOntapRequest = (input: CreateLocationFsxOntapRequest, context: __SerdeContext): any => {
  return {
    ...(input.Protocol != null && { Protocol: se_FsxProtocol(input.Protocol, context) }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: se_Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.StorageVirtualMachineArn != null && { StorageVirtualMachineArn: input.StorageVirtualMachineArn }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationFsxOpenZfsRequest
 */
const se_CreateLocationFsxOpenZfsRequest = (input: CreateLocationFsxOpenZfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FsxFilesystemArn != null && { FsxFilesystemArn: input.FsxFilesystemArn }),
    ...(input.Protocol != null && { Protocol: se_FsxProtocol(input.Protocol, context) }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: se_Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationFsxWindowsRequest
 */
const se_CreateLocationFsxWindowsRequest = (input: CreateLocationFsxWindowsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.FsxFilesystemArn != null && { FsxFilesystemArn: input.FsxFilesystemArn }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: se_Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
    ...(input.User != null && { User: input.User }),
  };
};

/**
 * serializeAws_json1_1CreateLocationHdfsRequest
 */
const se_CreateLocationHdfsRequest = (input: CreateLocationHdfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.BlockSize != null && { BlockSize: input.BlockSize }),
    ...(input.KerberosKeytab != null && { KerberosKeytab: context.base64Encoder(input.KerberosKeytab) }),
    ...(input.KerberosKrb5Conf != null && { KerberosKrb5Conf: context.base64Encoder(input.KerberosKrb5Conf) }),
    ...(input.KerberosPrincipal != null && { KerberosPrincipal: input.KerberosPrincipal }),
    ...(input.KmsKeyProviderUri != null && { KmsKeyProviderUri: input.KmsKeyProviderUri }),
    ...(input.NameNodes != null && { NameNodes: se_HdfsNameNodeList(input.NameNodes, context) }),
    ...(input.QopConfiguration != null && { QopConfiguration: se_QopConfiguration(input.QopConfiguration, context) }),
    ...(input.ReplicationFactor != null && { ReplicationFactor: input.ReplicationFactor }),
    ...(input.SimpleUser != null && { SimpleUser: input.SimpleUser }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationNfsRequest
 */
const se_CreateLocationNfsRequest = (input: CreateLocationNfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MountOptions != null && { MountOptions: se_NfsMountOptions(input.MountOptions, context) }),
    ...(input.OnPremConfig != null && { OnPremConfig: se_OnPremConfig(input.OnPremConfig, context) }),
    ...(input.ServerHostname != null && { ServerHostname: input.ServerHostname }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationObjectStorageRequest
 */
const se_CreateLocationObjectStorageRequest = (
  input: CreateLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKey != null && { AccessKey: input.AccessKey }),
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.SecretKey != null && { SecretKey: input.SecretKey }),
    ...(input.ServerCertificate != null && { ServerCertificate: context.base64Encoder(input.ServerCertificate) }),
    ...(input.ServerHostname != null && { ServerHostname: input.ServerHostname }),
    ...(input.ServerPort != null && { ServerPort: input.ServerPort }),
    ...(input.ServerProtocol != null && { ServerProtocol: input.ServerProtocol }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationS3Request
 */
const se_CreateLocationS3Request = (input: CreateLocationS3Request, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
    ...(input.S3BucketArn != null && { S3BucketArn: input.S3BucketArn }),
    ...(input.S3Config != null && { S3Config: se_S3Config(input.S3Config, context) }),
    ...(input.S3StorageClass != null && { S3StorageClass: input.S3StorageClass }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLocationSmbRequest
 */
const se_CreateLocationSmbRequest = (input: CreateLocationSmbRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.MountOptions != null && { MountOptions: se_SmbMountOptions(input.MountOptions, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.ServerHostname != null && { ServerHostname: input.ServerHostname }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
    ...(input.User != null && { User: input.User }),
  };
};

/**
 * serializeAws_json1_1CreateTaskRequest
 */
const se_CreateTaskRequest = (input: CreateTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogGroupArn != null && { CloudWatchLogGroupArn: input.CloudWatchLogGroupArn }),
    ...(input.DestinationLocationArn != null && { DestinationLocationArn: input.DestinationLocationArn }),
    ...(input.Excludes != null && { Excludes: se_FilterList(input.Excludes, context) }),
    ...(input.Includes != null && { Includes: se_FilterList(input.Includes, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Options != null && { Options: se_Options(input.Options, context) }),
    ...(input.Schedule != null && { Schedule: se_TaskSchedule(input.Schedule, context) }),
    ...(input.SourceLocationArn != null && { SourceLocationArn: input.SourceLocationArn }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteAgentRequest
 */
const se_DeleteAgentRequest = (input: DeleteAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArn != null && { AgentArn: input.AgentArn }),
  };
};

/**
 * serializeAws_json1_1DeleteLocationRequest
 */
const se_DeleteLocationRequest = (input: DeleteLocationRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DeleteTaskRequest
 */
const se_DeleteTaskRequest = (input: DeleteTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAgentRequest
 */
const se_DescribeAgentRequest = (input: DescribeAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArn != null && { AgentArn: input.AgentArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationEfsRequest
 */
const se_DescribeLocationEfsRequest = (input: DescribeLocationEfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationFsxLustreRequest
 */
const se_DescribeLocationFsxLustreRequest = (input: DescribeLocationFsxLustreRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationFsxOntapRequest
 */
const se_DescribeLocationFsxOntapRequest = (input: DescribeLocationFsxOntapRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationFsxOpenZfsRequest
 */
const se_DescribeLocationFsxOpenZfsRequest = (
  input: DescribeLocationFsxOpenZfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationFsxWindowsRequest
 */
const se_DescribeLocationFsxWindowsRequest = (
  input: DescribeLocationFsxWindowsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationHdfsRequest
 */
const se_DescribeLocationHdfsRequest = (input: DescribeLocationHdfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationNfsRequest
 */
const se_DescribeLocationNfsRequest = (input: DescribeLocationNfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationObjectStorageRequest
 */
const se_DescribeLocationObjectStorageRequest = (
  input: DescribeLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationS3Request
 */
const se_DescribeLocationS3Request = (input: DescribeLocationS3Request, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeLocationSmbRequest
 */
const se_DescribeLocationSmbRequest = (input: DescribeLocationSmbRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeTaskExecutionRequest
 */
const se_DescribeTaskExecutionRequest = (input: DescribeTaskExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskExecutionArn != null && { TaskExecutionArn: input.TaskExecutionArn }),
  };
};

/**
 * serializeAws_json1_1DescribeTaskRequest
 */
const se_DescribeTaskRequest = (input: DescribeTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

/**
 * serializeAws_json1_1Ec2Config
 */
const se_Ec2Config = (input: Ec2Config, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: se_Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.SubnetArn != null && { SubnetArn: input.SubnetArn }),
  };
};

/**
 * serializeAws_json1_1Ec2SecurityGroupArnList
 */
const se_Ec2SecurityGroupArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FilterList
 */
const se_FilterList = (input: FilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterRule(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterRule
 */
const se_FilterRule = (input: FilterRule, context: __SerdeContext): any => {
  return {
    ...(input.FilterType != null && { FilterType: input.FilterType }),
    ...(input.Value != null && { Value: input.Value }),
  };
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
 * serializeAws_json1_1FsxProtocol
 */
const se_FsxProtocol = (input: FsxProtocol, context: __SerdeContext): any => {
  return {
    ...(input.NFS != null && { NFS: se_FsxProtocolNfs(input.NFS, context) }),
    ...(input.SMB != null && { SMB: se_FsxProtocolSmb(input.SMB, context) }),
  };
};

/**
 * serializeAws_json1_1FsxProtocolNfs
 */
const se_FsxProtocolNfs = (input: FsxProtocolNfs, context: __SerdeContext): any => {
  return {
    ...(input.MountOptions != null && { MountOptions: se_NfsMountOptions(input.MountOptions, context) }),
  };
};

/**
 * serializeAws_json1_1FsxProtocolSmb
 */
const se_FsxProtocolSmb = (input: FsxProtocolSmb, context: __SerdeContext): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.MountOptions != null && { MountOptions: se_SmbMountOptions(input.MountOptions, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.User != null && { User: input.User }),
  };
};

/**
 * serializeAws_json1_1HdfsNameNode
 */
const se_HdfsNameNode = (input: HdfsNameNode, context: __SerdeContext): any => {
  return {
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

/**
 * serializeAws_json1_1HdfsNameNodeList
 */
const se_HdfsNameNodeList = (input: HdfsNameNode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HdfsNameNode(entry, context);
    });
};

/**
 * serializeAws_json1_1InputTagList
 */
const se_InputTagList = (input: TagListEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagListEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1ListAgentsRequest
 */
const se_ListAgentsRequest = (input: ListAgentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLocationsRequest
 */
const se_ListLocationsRequest = (input: ListLocationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_LocationFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListTaskExecutionsRequest
 */
const se_ListTaskExecutionsRequest = (input: ListTaskExecutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

/**
 * serializeAws_json1_1ListTasksRequest
 */
const se_ListTasksRequest = (input: ListTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_TaskFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1LocationFilter
 */
const se_LocationFilter = (input: LocationFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1LocationFilters
 */
const se_LocationFilters = (input: LocationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LocationFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1NfsMountOptions
 */
const se_NfsMountOptions = (input: NfsMountOptions, context: __SerdeContext): any => {
  return {
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1OnPremConfig
 */
const se_OnPremConfig = (input: OnPremConfig, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
  };
};

/**
 * serializeAws_json1_1Options
 */
const se_Options = (input: Options, context: __SerdeContext): any => {
  return {
    ...(input.Atime != null && { Atime: input.Atime }),
    ...(input.BytesPerSecond != null && { BytesPerSecond: input.BytesPerSecond }),
    ...(input.Gid != null && { Gid: input.Gid }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.Mtime != null && { Mtime: input.Mtime }),
    ...(input.ObjectTags != null && { ObjectTags: input.ObjectTags }),
    ...(input.OverwriteMode != null && { OverwriteMode: input.OverwriteMode }),
    ...(input.PosixPermissions != null && { PosixPermissions: input.PosixPermissions }),
    ...(input.PreserveDeletedFiles != null && { PreserveDeletedFiles: input.PreserveDeletedFiles }),
    ...(input.PreserveDevices != null && { PreserveDevices: input.PreserveDevices }),
    ...(input.SecurityDescriptorCopyFlags != null && {
      SecurityDescriptorCopyFlags: input.SecurityDescriptorCopyFlags,
    }),
    ...(input.TaskQueueing != null && { TaskQueueing: input.TaskQueueing }),
    ...(input.TransferMode != null && { TransferMode: input.TransferMode }),
    ...(input.Uid != null && { Uid: input.Uid }),
    ...(input.VerifyMode != null && { VerifyMode: input.VerifyMode }),
  };
};

/**
 * serializeAws_json1_1PLSecurityGroupArnList
 */
const se_PLSecurityGroupArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PLSubnetArnList
 */
const se_PLSubnetArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1QopConfiguration
 */
const se_QopConfiguration = (input: QopConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataTransferProtection != null && { DataTransferProtection: input.DataTransferProtection }),
    ...(input.RpcProtection != null && { RpcProtection: input.RpcProtection }),
  };
};

/**
 * serializeAws_json1_1S3Config
 */
const se_S3Config = (input: S3Config, context: __SerdeContext): any => {
  return {
    ...(input.BucketAccessRoleArn != null && { BucketAccessRoleArn: input.BucketAccessRoleArn }),
  };
};

/**
 * serializeAws_json1_1SmbMountOptions
 */
const se_SmbMountOptions = (input: SmbMountOptions, context: __SerdeContext): any => {
  return {
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1StartTaskExecutionRequest
 */
const se_StartTaskExecutionRequest = (input: StartTaskExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Excludes != null && { Excludes: se_FilterList(input.Excludes, context) }),
    ...(input.Includes != null && { Includes: se_FilterList(input.Includes, context) }),
    ...(input.OverrideOptions != null && { OverrideOptions: se_Options(input.OverrideOptions, context) }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagListEntry
 */
const se_TagListEntry = (input: TagListEntry, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_InputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TaskFilter
 */
const se_TaskFilter = (input: TaskFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1TaskFilters
 */
const se_TaskFilters = (input: TaskFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TaskFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1TaskSchedule
 */
const se_TaskSchedule = (input: TaskSchedule, context: __SerdeContext): any => {
  return {
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Keys != null && { Keys: se_TagKeyList(input.Keys, context) }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1UpdateAgentRequest
 */
const se_UpdateAgentRequest = (input: UpdateAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArn != null && { AgentArn: input.AgentArn }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateLocationHdfsRequest
 */
const se_UpdateLocationHdfsRequest = (input: UpdateLocationHdfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.BlockSize != null && { BlockSize: input.BlockSize }),
    ...(input.KerberosKeytab != null && { KerberosKeytab: context.base64Encoder(input.KerberosKeytab) }),
    ...(input.KerberosKrb5Conf != null && { KerberosKrb5Conf: context.base64Encoder(input.KerberosKrb5Conf) }),
    ...(input.KerberosPrincipal != null && { KerberosPrincipal: input.KerberosPrincipal }),
    ...(input.KmsKeyProviderUri != null && { KmsKeyProviderUri: input.KmsKeyProviderUri }),
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.NameNodes != null && { NameNodes: se_HdfsNameNodeList(input.NameNodes, context) }),
    ...(input.QopConfiguration != null && { QopConfiguration: se_QopConfiguration(input.QopConfiguration, context) }),
    ...(input.ReplicationFactor != null && { ReplicationFactor: input.ReplicationFactor }),
    ...(input.SimpleUser != null && { SimpleUser: input.SimpleUser }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
  };
};

/**
 * serializeAws_json1_1UpdateLocationNfsRequest
 */
const se_UpdateLocationNfsRequest = (input: UpdateLocationNfsRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.MountOptions != null && { MountOptions: se_NfsMountOptions(input.MountOptions, context) }),
    ...(input.OnPremConfig != null && { OnPremConfig: se_OnPremConfig(input.OnPremConfig, context) }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
  };
};

/**
 * serializeAws_json1_1UpdateLocationObjectStorageRequest
 */
const se_UpdateLocationObjectStorageRequest = (
  input: UpdateLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKey != null && { AccessKey: input.AccessKey }),
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.SecretKey != null && { SecretKey: input.SecretKey }),
    ...(input.ServerCertificate != null && { ServerCertificate: context.base64Encoder(input.ServerCertificate) }),
    ...(input.ServerPort != null && { ServerPort: input.ServerPort }),
    ...(input.ServerProtocol != null && { ServerProtocol: input.ServerProtocol }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
  };
};

/**
 * serializeAws_json1_1UpdateLocationSmbRequest
 */
const se_UpdateLocationSmbRequest = (input: UpdateLocationSmbRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: se_AgentArnList(input.AgentArns, context) }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.MountOptions != null && { MountOptions: se_SmbMountOptions(input.MountOptions, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.User != null && { User: input.User }),
  };
};

/**
 * serializeAws_json1_1UpdateTaskExecutionRequest
 */
const se_UpdateTaskExecutionRequest = (input: UpdateTaskExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Options != null && { Options: se_Options(input.Options, context) }),
    ...(input.TaskExecutionArn != null && { TaskExecutionArn: input.TaskExecutionArn }),
  };
};

/**
 * serializeAws_json1_1UpdateTaskRequest
 */
const se_UpdateTaskRequest = (input: UpdateTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogGroupArn != null && { CloudWatchLogGroupArn: input.CloudWatchLogGroupArn }),
    ...(input.Excludes != null && { Excludes: se_FilterList(input.Excludes, context) }),
    ...(input.Includes != null && { Includes: se_FilterList(input.Includes, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Options != null && { Options: se_Options(input.Options, context) }),
    ...(input.Schedule != null && { Schedule: se_TaskSchedule(input.Schedule, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

/**
 * deserializeAws_json1_1AgentArnList
 */
const de_AgentArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AgentList
 */
const de_AgentList = (output: any, context: __SerdeContext): AgentListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AgentListEntry
 */
const de_AgentListEntry = (output: any, context: __SerdeContext): AgentListEntry => {
  return {
    AgentArn: __expectString(output.AgentArn),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1CancelTaskExecutionResponse
 */
const de_CancelTaskExecutionResponse = (output: any, context: __SerdeContext): CancelTaskExecutionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateAgentResponse
 */
const de_CreateAgentResponse = (output: any, context: __SerdeContext): CreateAgentResponse => {
  return {
    AgentArn: __expectString(output.AgentArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationEfsResponse
 */
const de_CreateLocationEfsResponse = (output: any, context: __SerdeContext): CreateLocationEfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationFsxLustreResponse
 */
const de_CreateLocationFsxLustreResponse = (output: any, context: __SerdeContext): CreateLocationFsxLustreResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationFsxOntapResponse
 */
const de_CreateLocationFsxOntapResponse = (output: any, context: __SerdeContext): CreateLocationFsxOntapResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationFsxOpenZfsResponse
 */
const de_CreateLocationFsxOpenZfsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationFsxOpenZfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationFsxWindowsResponse
 */
const de_CreateLocationFsxWindowsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationFsxWindowsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationHdfsResponse
 */
const de_CreateLocationHdfsResponse = (output: any, context: __SerdeContext): CreateLocationHdfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationNfsResponse
 */
const de_CreateLocationNfsResponse = (output: any, context: __SerdeContext): CreateLocationNfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationObjectStorageResponse
 */
const de_CreateLocationObjectStorageResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationObjectStorageResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationS3Response
 */
const de_CreateLocationS3Response = (output: any, context: __SerdeContext): CreateLocationS3Response => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationSmbResponse
 */
const de_CreateLocationSmbResponse = (output: any, context: __SerdeContext): CreateLocationSmbResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateTaskResponse
 */
const de_CreateTaskResponse = (output: any, context: __SerdeContext): CreateTaskResponse => {
  return {
    TaskArn: __expectString(output.TaskArn),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAgentResponse
 */
const de_DeleteAgentResponse = (output: any, context: __SerdeContext): DeleteAgentResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteLocationResponse
 */
const de_DeleteLocationResponse = (output: any, context: __SerdeContext): DeleteLocationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteTaskResponse
 */
const de_DeleteTaskResponse = (output: any, context: __SerdeContext): DeleteTaskResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAgentResponse
 */
const de_DescribeAgentResponse = (output: any, context: __SerdeContext): DescribeAgentResponse => {
  return {
    AgentArn: __expectString(output.AgentArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EndpointType: __expectString(output.EndpointType),
    LastConnectionTime:
      output.LastConnectionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastConnectionTime)))
        : undefined,
    Name: __expectString(output.Name),
    PrivateLinkConfig:
      output.PrivateLinkConfig != null ? de_PrivateLinkConfig(output.PrivateLinkConfig, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationEfsResponse
 */
const de_DescribeLocationEfsResponse = (output: any, context: __SerdeContext): DescribeLocationEfsResponse => {
  return {
    AccessPointArn: __expectString(output.AccessPointArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Ec2Config: output.Ec2Config != null ? de_Ec2Config(output.Ec2Config, context) : undefined,
    FileSystemAccessRoleArn: __expectString(output.FileSystemAccessRoleArn),
    InTransitEncryption: __expectString(output.InTransitEncryption),
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxLustreResponse
 */
const de_DescribeLocationFsxLustreResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxLustreResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    SecurityGroupArns:
      output.SecurityGroupArns != null ? de_Ec2SecurityGroupArnList(output.SecurityGroupArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOntapResponse
 */
const de_DescribeLocationFsxOntapResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxOntapResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FsxFilesystemArn: __expectString(output.FsxFilesystemArn),
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    Protocol: output.Protocol != null ? de_FsxProtocol(output.Protocol, context) : undefined,
    SecurityGroupArns:
      output.SecurityGroupArns != null ? de_Ec2SecurityGroupArnList(output.SecurityGroupArns, context) : undefined,
    StorageVirtualMachineArn: __expectString(output.StorageVirtualMachineArn),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxOpenZfsResponse
 */
const de_DescribeLocationFsxOpenZfsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxOpenZfsResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    Protocol: output.Protocol != null ? de_FsxProtocol(output.Protocol, context) : undefined,
    SecurityGroupArns:
      output.SecurityGroupArns != null ? de_Ec2SecurityGroupArnList(output.SecurityGroupArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationFsxWindowsResponse
 */
const de_DescribeLocationFsxWindowsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationFsxWindowsResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Domain: __expectString(output.Domain),
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    SecurityGroupArns:
      output.SecurityGroupArns != null ? de_Ec2SecurityGroupArnList(output.SecurityGroupArns, context) : undefined,
    User: __expectString(output.User),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationHdfsResponse
 */
const de_DescribeLocationHdfsResponse = (output: any, context: __SerdeContext): DescribeLocationHdfsResponse => {
  return {
    AgentArns: output.AgentArns != null ? de_AgentArnList(output.AgentArns, context) : undefined,
    AuthenticationType: __expectString(output.AuthenticationType),
    BlockSize: __expectInt32(output.BlockSize),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    KerberosPrincipal: __expectString(output.KerberosPrincipal),
    KmsKeyProviderUri: __expectString(output.KmsKeyProviderUri),
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    NameNodes: output.NameNodes != null ? de_HdfsNameNodeList(output.NameNodes, context) : undefined,
    QopConfiguration:
      output.QopConfiguration != null ? de_QopConfiguration(output.QopConfiguration, context) : undefined,
    ReplicationFactor: __expectInt32(output.ReplicationFactor),
    SimpleUser: __expectString(output.SimpleUser),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationNfsResponse
 */
const de_DescribeLocationNfsResponse = (output: any, context: __SerdeContext): DescribeLocationNfsResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    MountOptions: output.MountOptions != null ? de_NfsMountOptions(output.MountOptions, context) : undefined,
    OnPremConfig: output.OnPremConfig != null ? de_OnPremConfig(output.OnPremConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationObjectStorageResponse
 */
const de_DescribeLocationObjectStorageResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationObjectStorageResponse => {
  return {
    AccessKey: __expectString(output.AccessKey),
    AgentArns: output.AgentArns != null ? de_AgentArnList(output.AgentArns, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    ServerCertificate: output.ServerCertificate != null ? context.base64Decoder(output.ServerCertificate) : undefined,
    ServerPort: __expectInt32(output.ServerPort),
    ServerProtocol: __expectString(output.ServerProtocol),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationS3Response
 */
const de_DescribeLocationS3Response = (output: any, context: __SerdeContext): DescribeLocationS3Response => {
  return {
    AgentArns: output.AgentArns != null ? de_AgentArnList(output.AgentArns, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    S3Config: output.S3Config != null ? de_S3Config(output.S3Config, context) : undefined,
    S3StorageClass: __expectString(output.S3StorageClass),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLocationSmbResponse
 */
const de_DescribeLocationSmbResponse = (output: any, context: __SerdeContext): DescribeLocationSmbResponse => {
  return {
    AgentArns: output.AgentArns != null ? de_AgentArnList(output.AgentArns, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Domain: __expectString(output.Domain),
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    MountOptions: output.MountOptions != null ? de_SmbMountOptions(output.MountOptions, context) : undefined,
    User: __expectString(output.User),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTaskExecutionResponse
 */
const de_DescribeTaskExecutionResponse = (output: any, context: __SerdeContext): DescribeTaskExecutionResponse => {
  return {
    BytesCompressed: __expectLong(output.BytesCompressed),
    BytesTransferred: __expectLong(output.BytesTransferred),
    BytesWritten: __expectLong(output.BytesWritten),
    EstimatedBytesToTransfer: __expectLong(output.EstimatedBytesToTransfer),
    EstimatedFilesToTransfer: __expectLong(output.EstimatedFilesToTransfer),
    Excludes: output.Excludes != null ? de_FilterList(output.Excludes, context) : undefined,
    FilesTransferred: __expectLong(output.FilesTransferred),
    Includes: output.Includes != null ? de_FilterList(output.Includes, context) : undefined,
    Options: output.Options != null ? de_Options(output.Options, context) : undefined,
    Result: output.Result != null ? de_TaskExecutionResultDetail(output.Result, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    TaskExecutionArn: __expectString(output.TaskExecutionArn),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTaskResponse
 */
const de_DescribeTaskResponse = (output: any, context: __SerdeContext): DescribeTaskResponse => {
  return {
    CloudWatchLogGroupArn: __expectString(output.CloudWatchLogGroupArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CurrentTaskExecutionArn: __expectString(output.CurrentTaskExecutionArn),
    DestinationLocationArn: __expectString(output.DestinationLocationArn),
    DestinationNetworkInterfaceArns:
      output.DestinationNetworkInterfaceArns != null
        ? de_DestinationNetworkInterfaceArns(output.DestinationNetworkInterfaceArns, context)
        : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    ErrorDetail: __expectString(output.ErrorDetail),
    Excludes: output.Excludes != null ? de_FilterList(output.Excludes, context) : undefined,
    Includes: output.Includes != null ? de_FilterList(output.Includes, context) : undefined,
    Name: __expectString(output.Name),
    Options: output.Options != null ? de_Options(output.Options, context) : undefined,
    Schedule: output.Schedule != null ? de_TaskSchedule(output.Schedule, context) : undefined,
    SourceLocationArn: __expectString(output.SourceLocationArn),
    SourceNetworkInterfaceArns:
      output.SourceNetworkInterfaceArns != null
        ? de_SourceNetworkInterfaceArns(output.SourceNetworkInterfaceArns, context)
        : undefined,
    Status: __expectString(output.Status),
    TaskArn: __expectString(output.TaskArn),
  } as any;
};

/**
 * deserializeAws_json1_1DestinationNetworkInterfaceArns
 */
const de_DestinationNetworkInterfaceArns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Ec2Config
 */
const de_Ec2Config = (output: any, context: __SerdeContext): Ec2Config => {
  return {
    SecurityGroupArns:
      output.SecurityGroupArns != null ? de_Ec2SecurityGroupArnList(output.SecurityGroupArns, context) : undefined,
    SubnetArn: __expectString(output.SubnetArn),
  } as any;
};

/**
 * deserializeAws_json1_1Ec2SecurityGroupArnList
 */
const de_Ec2SecurityGroupArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): FilterRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FilterRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FilterRule
 */
const de_FilterRule = (output: any, context: __SerdeContext): FilterRule => {
  return {
    FilterType: __expectString(output.FilterType),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1FsxProtocol
 */
const de_FsxProtocol = (output: any, context: __SerdeContext): FsxProtocol => {
  return {
    NFS: output.NFS != null ? de_FsxProtocolNfs(output.NFS, context) : undefined,
    SMB: output.SMB != null ? de_FsxProtocolSmb(output.SMB, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FsxProtocolNfs
 */
const de_FsxProtocolNfs = (output: any, context: __SerdeContext): FsxProtocolNfs => {
  return {
    MountOptions: output.MountOptions != null ? de_NfsMountOptions(output.MountOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FsxProtocolSmb
 */
const de_FsxProtocolSmb = (output: any, context: __SerdeContext): FsxProtocolSmb => {
  return {
    Domain: __expectString(output.Domain),
    MountOptions: output.MountOptions != null ? de_SmbMountOptions(output.MountOptions, context) : undefined,
    Password: __expectString(output.Password),
    User: __expectString(output.User),
  } as any;
};

/**
 * deserializeAws_json1_1HdfsNameNode
 */
const de_HdfsNameNode = (output: any, context: __SerdeContext): HdfsNameNode => {
  return {
    Hostname: __expectString(output.Hostname),
    Port: __expectInt32(output.Port),
  } as any;
};

/**
 * deserializeAws_json1_1HdfsNameNodeList
 */
const de_HdfsNameNodeList = (output: any, context: __SerdeContext): HdfsNameNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HdfsNameNode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalException
 */
const de_InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    datasyncErrorCode: __expectString(output.datasyncErrorCode),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAgentsResponse
 */
const de_ListAgentsResponse = (output: any, context: __SerdeContext): ListAgentsResponse => {
  return {
    Agents: output.Agents != null ? de_AgentList(output.Agents, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLocationsResponse
 */
const de_ListLocationsResponse = (output: any, context: __SerdeContext): ListLocationsResponse => {
  return {
    Locations: output.Locations != null ? de_LocationList(output.Locations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_OutputTagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTaskExecutionsResponse
 */
const de_ListTaskExecutionsResponse = (output: any, context: __SerdeContext): ListTaskExecutionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TaskExecutions: output.TaskExecutions != null ? de_TaskExecutionList(output.TaskExecutions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTasksResponse
 */
const de_ListTasksResponse = (output: any, context: __SerdeContext): ListTasksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tasks: output.Tasks != null ? de_TaskList(output.Tasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LocationList
 */
const de_LocationList = (output: any, context: __SerdeContext): LocationListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LocationListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LocationListEntry
 */
const de_LocationListEntry = (output: any, context: __SerdeContext): LocationListEntry => {
  return {
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
  } as any;
};

/**
 * deserializeAws_json1_1NfsMountOptions
 */
const de_NfsMountOptions = (output: any, context: __SerdeContext): NfsMountOptions => {
  return {
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1OnPremConfig
 */
const de_OnPremConfig = (output: any, context: __SerdeContext): OnPremConfig => {
  return {
    AgentArns: output.AgentArns != null ? de_AgentArnList(output.AgentArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Options
 */
const de_Options = (output: any, context: __SerdeContext): Options => {
  return {
    Atime: __expectString(output.Atime),
    BytesPerSecond: __expectLong(output.BytesPerSecond),
    Gid: __expectString(output.Gid),
    LogLevel: __expectString(output.LogLevel),
    Mtime: __expectString(output.Mtime),
    ObjectTags: __expectString(output.ObjectTags),
    OverwriteMode: __expectString(output.OverwriteMode),
    PosixPermissions: __expectString(output.PosixPermissions),
    PreserveDeletedFiles: __expectString(output.PreserveDeletedFiles),
    PreserveDevices: __expectString(output.PreserveDevices),
    SecurityDescriptorCopyFlags: __expectString(output.SecurityDescriptorCopyFlags),
    TaskQueueing: __expectString(output.TaskQueueing),
    TransferMode: __expectString(output.TransferMode),
    Uid: __expectString(output.Uid),
    VerifyMode: __expectString(output.VerifyMode),
  } as any;
};

/**
 * deserializeAws_json1_1OutputTagList
 */
const de_OutputTagList = (output: any, context: __SerdeContext): TagListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PLSecurityGroupArnList
 */
const de_PLSecurityGroupArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PLSubnetArnList
 */
const de_PLSubnetArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PrivateLinkConfig
 */
const de_PrivateLinkConfig = (output: any, context: __SerdeContext): PrivateLinkConfig => {
  return {
    PrivateLinkEndpoint: __expectString(output.PrivateLinkEndpoint),
    SecurityGroupArns:
      output.SecurityGroupArns != null ? de_PLSecurityGroupArnList(output.SecurityGroupArns, context) : undefined,
    SubnetArns: output.SubnetArns != null ? de_PLSubnetArnList(output.SubnetArns, context) : undefined,
    VpcEndpointId: __expectString(output.VpcEndpointId),
  } as any;
};

/**
 * deserializeAws_json1_1QopConfiguration
 */
const de_QopConfiguration = (output: any, context: __SerdeContext): QopConfiguration => {
  return {
    DataTransferProtection: __expectString(output.DataTransferProtection),
    RpcProtection: __expectString(output.RpcProtection),
  } as any;
};

/**
 * deserializeAws_json1_1S3Config
 */
const de_S3Config = (output: any, context: __SerdeContext): S3Config => {
  return {
    BucketAccessRoleArn: __expectString(output.BucketAccessRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1SmbMountOptions
 */
const de_SmbMountOptions = (output: any, context: __SerdeContext): SmbMountOptions => {
  return {
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1SourceNetworkInterfaceArns
 */
const de_SourceNetworkInterfaceArns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1StartTaskExecutionResponse
 */
const de_StartTaskExecutionResponse = (output: any, context: __SerdeContext): StartTaskExecutionResponse => {
  return {
    TaskExecutionArn: __expectString(output.TaskExecutionArn),
  } as any;
};

/**
 * deserializeAws_json1_1TagListEntry
 */
const de_TagListEntry = (output: any, context: __SerdeContext): TagListEntry => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TaskExecutionList
 */
const de_TaskExecutionList = (output: any, context: __SerdeContext): TaskExecutionListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskExecutionListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TaskExecutionListEntry
 */
const de_TaskExecutionListEntry = (output: any, context: __SerdeContext): TaskExecutionListEntry => {
  return {
    Status: __expectString(output.Status),
    TaskExecutionArn: __expectString(output.TaskExecutionArn),
  } as any;
};

/**
 * deserializeAws_json1_1TaskExecutionResultDetail
 */
const de_TaskExecutionResultDetail = (output: any, context: __SerdeContext): TaskExecutionResultDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorDetail: __expectString(output.ErrorDetail),
    PrepareDuration: __expectLong(output.PrepareDuration),
    PrepareStatus: __expectString(output.PrepareStatus),
    TotalDuration: __expectLong(output.TotalDuration),
    TransferDuration: __expectLong(output.TransferDuration),
    TransferStatus: __expectString(output.TransferStatus),
    VerifyDuration: __expectLong(output.VerifyDuration),
    VerifyStatus: __expectString(output.VerifyStatus),
  } as any;
};

/**
 * deserializeAws_json1_1TaskList
 */
const de_TaskList = (output: any, context: __SerdeContext): TaskListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TaskListEntry
 */
const de_TaskListEntry = (output: any, context: __SerdeContext): TaskListEntry => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    TaskArn: __expectString(output.TaskArn),
  } as any;
};

/**
 * deserializeAws_json1_1TaskSchedule
 */
const de_TaskSchedule = (output: any, context: __SerdeContext): TaskSchedule => {
  return {
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAgentResponse
 */
const de_UpdateAgentResponse = (output: any, context: __SerdeContext): UpdateAgentResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLocationHdfsResponse
 */
const de_UpdateLocationHdfsResponse = (output: any, context: __SerdeContext): UpdateLocationHdfsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLocationNfsResponse
 */
const de_UpdateLocationNfsResponse = (output: any, context: __SerdeContext): UpdateLocationNfsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLocationObjectStorageResponse
 */
const de_UpdateLocationObjectStorageResponse = (
  output: any,
  context: __SerdeContext
): UpdateLocationObjectStorageResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLocationSmbResponse
 */
const de_UpdateLocationSmbResponse = (output: any, context: __SerdeContext): UpdateLocationSmbResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateTaskExecutionResponse
 */
const de_UpdateTaskExecutionResponse = (output: any, context: __SerdeContext): UpdateTaskExecutionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateTaskResponse
 */
const de_UpdateTaskResponse = (output: any, context: __SerdeContext): UpdateTaskResponse => {
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
