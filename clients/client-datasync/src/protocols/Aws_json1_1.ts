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

export const serializeAws_json1_1CancelTaskExecutionCommand = async (
  input: CancelTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CancelTaskExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelTaskExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAgentCommand = async (
  input: CreateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateAgent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationEfsCommand = async (
  input: CreateLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationEfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationEfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationFsxLustreCommand = async (
  input: CreateLocationFsxLustreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxLustre",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationFsxLustreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationFsxOntapCommand = async (
  input: CreateLocationFsxOntapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxOntap",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationFsxOntapRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationFsxOpenZfsCommand = async (
  input: CreateLocationFsxOpenZfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxOpenZfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationFsxOpenZfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationFsxWindowsCommand = async (
  input: CreateLocationFsxWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationFsxWindows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationFsxWindowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationHdfsCommand = async (
  input: CreateLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationHdfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationHdfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationNfsCommand = async (
  input: CreateLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationNfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationNfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationObjectStorageCommand = async (
  input: CreateLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationObjectStorage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationObjectStorageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationS3Command = async (
  input: CreateLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationS3",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationS3Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationSmbCommand = async (
  input: CreateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateLocationSmb",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationSmbRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTaskCommand = async (
  input: CreateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.CreateTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAgentCommand = async (
  input: DeleteAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DeleteAgent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLocationCommand = async (
  input: DeleteLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DeleteLocation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLocationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTaskCommand = async (
  input: DeleteTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DeleteTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAgentCommand = async (
  input: DescribeAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeAgent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationEfsCommand = async (
  input: DescribeLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationEfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationEfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationFsxLustreCommand = async (
  input: DescribeLocationFsxLustreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxLustre",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationFsxLustreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationFsxOntapCommand = async (
  input: DescribeLocationFsxOntapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxOntap",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationFsxOntapRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationFsxOpenZfsCommand = async (
  input: DescribeLocationFsxOpenZfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxOpenZfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationFsxOpenZfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationFsxWindowsCommand = async (
  input: DescribeLocationFsxWindowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationFsxWindows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationFsxWindowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationHdfsCommand = async (
  input: DescribeLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationHdfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationHdfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationNfsCommand = async (
  input: DescribeLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationNfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationNfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationObjectStorageCommand = async (
  input: DescribeLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationObjectStorage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationObjectStorageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationS3Command = async (
  input: DescribeLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationS3",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationS3Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationSmbCommand = async (
  input: DescribeLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeLocationSmb",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLocationSmbRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskCommand = async (
  input: DescribeTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskExecutionCommand = async (
  input: DescribeTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.DescribeTaskExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTaskExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAgentsCommand = async (
  input: ListAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListAgents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLocationsCommand = async (
  input: ListLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListLocations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLocationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTaskExecutionsCommand = async (
  input: ListTaskExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListTaskExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTaskExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.ListTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTaskExecutionCommand = async (
  input: StartTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.StartTaskExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTaskExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAgentCommand = async (
  input: UpdateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateAgent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLocationHdfsCommand = async (
  input: UpdateLocationHdfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationHdfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLocationHdfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLocationNfsCommand = async (
  input: UpdateLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationNfs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLocationNfsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLocationObjectStorageCommand = async (
  input: UpdateLocationObjectStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationObjectStorage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLocationObjectStorageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLocationSmbCommand = async (
  input: UpdateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateLocationSmb",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLocationSmbRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTaskCommand = async (
  input: UpdateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTaskExecutionCommand = async (
  input: UpdateTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "FmrsService.UpdateTaskExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTaskExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CancelTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelTaskExecutionResponse(data, context);
  const response: CancelTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelTaskExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAgentResponse(data, context);
  const response: CreateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAgentCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationEfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationEfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationEfsResponse(data, context);
  const response: CreateLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationEfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationFsxLustreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxLustreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationFsxLustreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationFsxLustreResponse(data, context);
  const response: CreateLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationFsxLustreCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationFsxOntapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOntapCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationFsxOntapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationFsxOntapResponse(data, context);
  const response: CreateLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationFsxOntapCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationFsxOpenZfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxOpenZfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationFsxOpenZfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationFsxOpenZfsResponse(data, context);
  const response: CreateLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationFsxOpenZfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationFsxWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationFsxWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationFsxWindowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationFsxWindowsResponse(data, context);
  const response: CreateLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationFsxWindowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationHdfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationHdfsResponse(data, context);
  const response: CreateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationHdfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationNfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationNfsResponse(data, context);
  const response: CreateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationNfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationObjectStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationObjectStorageResponse(data, context);
  const response: CreateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationObjectStorageCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationS3Response(data, context);
  const response: CreateLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationS3CommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationSmbCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationSmbResponse(data, context);
  const response: CreateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationSmbCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTaskResponse(data, context);
  const response: CreateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTaskCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAgentResponse(data, context);
  const response: DeleteAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAgentCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLocationResponse(data, context);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLocationCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTaskResponse(data, context);
  const response: DeleteTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTaskCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAgentResponse(data, context);
  const response: DescribeAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAgentCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationEfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationEfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationEfsResponse(data, context);
  const response: DescribeLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationEfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationFsxLustreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxLustreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationFsxLustreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationFsxLustreResponse(data, context);
  const response: DescribeLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationFsxLustreCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationFsxOntapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOntapCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationFsxOntapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationFsxOntapResponse(data, context);
  const response: DescribeLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationFsxOntapCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationFsxOpenZfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxOpenZfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationFsxOpenZfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationFsxOpenZfsResponse(data, context);
  const response: DescribeLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationFsxOpenZfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationFsxWindowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationFsxWindowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationFsxWindowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationFsxWindowsResponse(data, context);
  const response: DescribeLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationFsxWindowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationHdfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationHdfsResponse(data, context);
  const response: DescribeLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationHdfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationNfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationNfsResponse(data, context);
  const response: DescribeLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationNfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationObjectStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationObjectStorageResponse(data, context);
  const response: DescribeLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationObjectStorageCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationS3Response(data, context);
  const response: DescribeLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationS3CommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLocationSmbCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationSmbResponse(data, context);
  const response: DescribeLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationSmbCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskResponse(data, context);
  const response: DescribeTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTaskCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskExecutionResponse(data, context);
  const response: DescribeTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTaskExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAgentsResponse(data, context);
  const response: ListAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAgentsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLocationsResponse(data, context);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLocationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTaskExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTaskExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTaskExecutionsResponse(data, context);
  const response: ListTaskExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTaskExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTasksResponse(data, context);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTasksCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTaskExecutionResponse(data, context);
  const response: StartTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTaskExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAgentResponse(data, context);
  const response: UpdateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAgentCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLocationHdfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationHdfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLocationHdfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLocationHdfsResponse(data, context);
  const response: UpdateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLocationHdfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationNfsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLocationNfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLocationNfsResponse(data, context);
  const response: UpdateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLocationNfsCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLocationObjectStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationObjectStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLocationObjectStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLocationObjectStorageResponse(data, context);
  const response: UpdateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLocationObjectStorageCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLocationSmbCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLocationSmbCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLocationSmbResponse(data, context);
  const response: UpdateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLocationSmbCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTaskResponse(data, context);
  const response: UpdateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTaskCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTaskExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTaskExecutionResponse(data, context);
  const response: UpdateTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTaskExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(body, context);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AgentArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CancelTaskExecutionRequest = (
  input: CancelTaskExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskExecutionArn != null && { TaskExecutionArn: input.TaskExecutionArn }),
  };
};

const serializeAws_json1_1CreateAgentRequest = (input: CreateAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActivationKey != null && { ActivationKey: input.ActivationKey }),
    ...(input.AgentName != null && { AgentName: input.AgentName }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: serializeAws_json1_1PLSecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.SubnetArns != null && { SubnetArns: serializeAws_json1_1PLSubnetArnList(input.SubnetArns, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    ...(input.VpcEndpointId != null && { VpcEndpointId: input.VpcEndpointId }),
  };
};

const serializeAws_json1_1CreateLocationEfsRequest = (
  input: CreateLocationEfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPointArn != null && { AccessPointArn: input.AccessPointArn }),
    ...(input.Ec2Config != null && { Ec2Config: serializeAws_json1_1Ec2Config(input.Ec2Config, context) }),
    ...(input.EfsFilesystemArn != null && { EfsFilesystemArn: input.EfsFilesystemArn }),
    ...(input.FileSystemAccessRoleArn != null && { FileSystemAccessRoleArn: input.FileSystemAccessRoleArn }),
    ...(input.InTransitEncryption != null && { InTransitEncryption: input.InTransitEncryption }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationFsxLustreRequest = (
  input: CreateLocationFsxLustreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FsxFilesystemArn != null && { FsxFilesystemArn: input.FsxFilesystemArn }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationFsxOntapRequest = (
  input: CreateLocationFsxOntapRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Protocol != null && { Protocol: serializeAws_json1_1FsxProtocol(input.Protocol, context) }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.StorageVirtualMachineArn != null && { StorageVirtualMachineArn: input.StorageVirtualMachineArn }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationFsxOpenZfsRequest = (
  input: CreateLocationFsxOpenZfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FsxFilesystemArn != null && { FsxFilesystemArn: input.FsxFilesystemArn }),
    ...(input.Protocol != null && { Protocol: serializeAws_json1_1FsxProtocol(input.Protocol, context) }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationFsxWindowsRequest = (
  input: CreateLocationFsxWindowsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.FsxFilesystemArn != null && { FsxFilesystemArn: input.FsxFilesystemArn }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    ...(input.User != null && { User: input.User }),
  };
};

const serializeAws_json1_1CreateLocationHdfsRequest = (
  input: CreateLocationHdfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.BlockSize != null && { BlockSize: input.BlockSize }),
    ...(input.KerberosKeytab != null && { KerberosKeytab: context.base64Encoder(input.KerberosKeytab) }),
    ...(input.KerberosKrb5Conf != null && { KerberosKrb5Conf: context.base64Encoder(input.KerberosKrb5Conf) }),
    ...(input.KerberosPrincipal != null && { KerberosPrincipal: input.KerberosPrincipal }),
    ...(input.KmsKeyProviderUri != null && { KmsKeyProviderUri: input.KmsKeyProviderUri }),
    ...(input.NameNodes != null && { NameNodes: serializeAws_json1_1HdfsNameNodeList(input.NameNodes, context) }),
    ...(input.QopConfiguration != null && {
      QopConfiguration: serializeAws_json1_1QopConfiguration(input.QopConfiguration, context),
    }),
    ...(input.ReplicationFactor != null && { ReplicationFactor: input.ReplicationFactor }),
    ...(input.SimpleUser != null && { SimpleUser: input.SimpleUser }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationNfsRequest = (
  input: CreateLocationNfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MountOptions != null && {
      MountOptions: serializeAws_json1_1NfsMountOptions(input.MountOptions, context),
    }),
    ...(input.OnPremConfig != null && { OnPremConfig: serializeAws_json1_1OnPremConfig(input.OnPremConfig, context) }),
    ...(input.ServerHostname != null && { ServerHostname: input.ServerHostname }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationObjectStorageRequest = (
  input: CreateLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKey != null && { AccessKey: input.AccessKey }),
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.SecretKey != null && { SecretKey: input.SecretKey }),
    ...(input.ServerCertificate != null && { ServerCertificate: context.base64Encoder(input.ServerCertificate) }),
    ...(input.ServerHostname != null && { ServerHostname: input.ServerHostname }),
    ...(input.ServerPort != null && { ServerPort: input.ServerPort }),
    ...(input.ServerProtocol != null && { ServerProtocol: input.ServerProtocol }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationS3Request = (input: CreateLocationS3Request, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    ...(input.S3BucketArn != null && { S3BucketArn: input.S3BucketArn }),
    ...(input.S3Config != null && { S3Config: serializeAws_json1_1S3Config(input.S3Config, context) }),
    ...(input.S3StorageClass != null && { S3StorageClass: input.S3StorageClass }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLocationSmbRequest = (
  input: CreateLocationSmbRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.MountOptions != null && {
      MountOptions: serializeAws_json1_1SmbMountOptions(input.MountOptions, context),
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.ServerHostname != null && { ServerHostname: input.ServerHostname }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    ...(input.User != null && { User: input.User }),
  };
};

const serializeAws_json1_1CreateTaskRequest = (input: CreateTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogGroupArn != null && { CloudWatchLogGroupArn: input.CloudWatchLogGroupArn }),
    ...(input.DestinationLocationArn != null && { DestinationLocationArn: input.DestinationLocationArn }),
    ...(input.Excludes != null && { Excludes: serializeAws_json1_1FilterList(input.Excludes, context) }),
    ...(input.Includes != null && { Includes: serializeAws_json1_1FilterList(input.Includes, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Options != null && { Options: serializeAws_json1_1Options(input.Options, context) }),
    ...(input.Schedule != null && { Schedule: serializeAws_json1_1TaskSchedule(input.Schedule, context) }),
    ...(input.SourceLocationArn != null && { SourceLocationArn: input.SourceLocationArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DeleteAgentRequest = (input: DeleteAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArn != null && { AgentArn: input.AgentArn }),
  };
};

const serializeAws_json1_1DeleteLocationRequest = (input: DeleteLocationRequest, context: __SerdeContext): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DeleteTaskRequest = (input: DeleteTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

const serializeAws_json1_1DescribeAgentRequest = (input: DescribeAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArn != null && { AgentArn: input.AgentArn }),
  };
};

const serializeAws_json1_1DescribeLocationEfsRequest = (
  input: DescribeLocationEfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationFsxLustreRequest = (
  input: DescribeLocationFsxLustreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationFsxOntapRequest = (
  input: DescribeLocationFsxOntapRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationFsxOpenZfsRequest = (
  input: DescribeLocationFsxOpenZfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationFsxWindowsRequest = (
  input: DescribeLocationFsxWindowsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationHdfsRequest = (
  input: DescribeLocationHdfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationNfsRequest = (
  input: DescribeLocationNfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationObjectStorageRequest = (
  input: DescribeLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationS3Request = (
  input: DescribeLocationS3Request,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeLocationSmbRequest = (
  input: DescribeLocationSmbRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
  };
};

const serializeAws_json1_1DescribeTaskExecutionRequest = (
  input: DescribeTaskExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskExecutionArn != null && { TaskExecutionArn: input.TaskExecutionArn }),
  };
};

const serializeAws_json1_1DescribeTaskRequest = (input: DescribeTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

const serializeAws_json1_1Ec2Config = (input: Ec2Config, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupArns != null && {
      SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
    }),
    ...(input.SubnetArn != null && { SubnetArn: input.SubnetArn }),
  };
};

const serializeAws_json1_1Ec2SecurityGroupArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FilterList = (input: FilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1FilterRule(entry, context);
    });
};

const serializeAws_json1_1FilterRule = (input: FilterRule, context: __SerdeContext): any => {
  return {
    ...(input.FilterType != null && { FilterType: input.FilterType }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FsxProtocol = (input: FsxProtocol, context: __SerdeContext): any => {
  return {
    ...(input.NFS != null && { NFS: serializeAws_json1_1FsxProtocolNfs(input.NFS, context) }),
    ...(input.SMB != null && { SMB: serializeAws_json1_1FsxProtocolSmb(input.SMB, context) }),
  };
};

const serializeAws_json1_1FsxProtocolNfs = (input: FsxProtocolNfs, context: __SerdeContext): any => {
  return {
    ...(input.MountOptions != null && {
      MountOptions: serializeAws_json1_1NfsMountOptions(input.MountOptions, context),
    }),
  };
};

const serializeAws_json1_1FsxProtocolSmb = (input: FsxProtocolSmb, context: __SerdeContext): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.MountOptions != null && {
      MountOptions: serializeAws_json1_1SmbMountOptions(input.MountOptions, context),
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.User != null && { User: input.User }),
  };
};

const serializeAws_json1_1HdfsNameNode = (input: HdfsNameNode, context: __SerdeContext): any => {
  return {
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_json1_1HdfsNameNodeList = (input: HdfsNameNode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1HdfsNameNode(entry, context);
    });
};

const serializeAws_json1_1InputTagList = (input: TagListEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TagListEntry(entry, context);
    });
};

const serializeAws_json1_1ListAgentsRequest = (input: ListAgentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLocationsRequest = (input: ListLocationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1LocationFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListTaskExecutionsRequest = (
  input: ListTaskExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

const serializeAws_json1_1ListTasksRequest = (input: ListTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1TaskFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1LocationFilter = (input: LocationFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1LocationFilters = (input: LocationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1LocationFilter(entry, context);
    });
};

const serializeAws_json1_1NfsMountOptions = (input: NfsMountOptions, context: __SerdeContext): any => {
  return {
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1OnPremConfig = (input: OnPremConfig, context: __SerdeContext): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
  };
};

const serializeAws_json1_1Options = (input: Options, context: __SerdeContext): any => {
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

const serializeAws_json1_1PLSecurityGroupArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PLSubnetArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1QopConfiguration = (input: QopConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataTransferProtection != null && { DataTransferProtection: input.DataTransferProtection }),
    ...(input.RpcProtection != null && { RpcProtection: input.RpcProtection }),
  };
};

const serializeAws_json1_1S3Config = (input: S3Config, context: __SerdeContext): any => {
  return {
    ...(input.BucketAccessRoleArn != null && { BucketAccessRoleArn: input.BucketAccessRoleArn }),
  };
};

const serializeAws_json1_1SmbMountOptions = (input: SmbMountOptions, context: __SerdeContext): any => {
  return {
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1StartTaskExecutionRequest = (
  input: StartTaskExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Excludes != null && { Excludes: serializeAws_json1_1FilterList(input.Excludes, context) }),
    ...(input.Includes != null && { Includes: serializeAws_json1_1FilterList(input.Includes, context) }),
    ...(input.OverrideOptions != null && {
      OverrideOptions: serializeAws_json1_1Options(input.OverrideOptions, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagListEntry = (input: TagListEntry, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TaskFilter = (input: TaskFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1TaskFilters = (input: TaskFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TaskFilter(entry, context);
    });
};

const serializeAws_json1_1TaskSchedule = (input: TaskSchedule, context: __SerdeContext): any => {
  return {
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Keys != null && { Keys: serializeAws_json1_1TagKeyList(input.Keys, context) }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1UpdateAgentRequest = (input: UpdateAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentArn != null && { AgentArn: input.AgentArn }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateLocationHdfsRequest = (
  input: UpdateLocationHdfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.BlockSize != null && { BlockSize: input.BlockSize }),
    ...(input.KerberosKeytab != null && { KerberosKeytab: context.base64Encoder(input.KerberosKeytab) }),
    ...(input.KerberosKrb5Conf != null && { KerberosKrb5Conf: context.base64Encoder(input.KerberosKrb5Conf) }),
    ...(input.KerberosPrincipal != null && { KerberosPrincipal: input.KerberosPrincipal }),
    ...(input.KmsKeyProviderUri != null && { KmsKeyProviderUri: input.KmsKeyProviderUri }),
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.NameNodes != null && { NameNodes: serializeAws_json1_1HdfsNameNodeList(input.NameNodes, context) }),
    ...(input.QopConfiguration != null && {
      QopConfiguration: serializeAws_json1_1QopConfiguration(input.QopConfiguration, context),
    }),
    ...(input.ReplicationFactor != null && { ReplicationFactor: input.ReplicationFactor }),
    ...(input.SimpleUser != null && { SimpleUser: input.SimpleUser }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
  };
};

const serializeAws_json1_1UpdateLocationNfsRequest = (
  input: UpdateLocationNfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.MountOptions != null && {
      MountOptions: serializeAws_json1_1NfsMountOptions(input.MountOptions, context),
    }),
    ...(input.OnPremConfig != null && { OnPremConfig: serializeAws_json1_1OnPremConfig(input.OnPremConfig, context) }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
  };
};

const serializeAws_json1_1UpdateLocationObjectStorageRequest = (
  input: UpdateLocationObjectStorageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKey != null && { AccessKey: input.AccessKey }),
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.SecretKey != null && { SecretKey: input.SecretKey }),
    ...(input.ServerCertificate != null && { ServerCertificate: context.base64Encoder(input.ServerCertificate) }),
    ...(input.ServerPort != null && { ServerPort: input.ServerPort }),
    ...(input.ServerProtocol != null && { ServerProtocol: input.ServerProtocol }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
  };
};

const serializeAws_json1_1UpdateLocationSmbRequest = (
  input: UpdateLocationSmbRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArns != null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.LocationArn != null && { LocationArn: input.LocationArn }),
    ...(input.MountOptions != null && {
      MountOptions: serializeAws_json1_1SmbMountOptions(input.MountOptions, context),
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Subdirectory != null && { Subdirectory: input.Subdirectory }),
    ...(input.User != null && { User: input.User }),
  };
};

const serializeAws_json1_1UpdateTaskExecutionRequest = (
  input: UpdateTaskExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Options != null && { Options: serializeAws_json1_1Options(input.Options, context) }),
    ...(input.TaskExecutionArn != null && { TaskExecutionArn: input.TaskExecutionArn }),
  };
};

const serializeAws_json1_1UpdateTaskRequest = (input: UpdateTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogGroupArn != null && { CloudWatchLogGroupArn: input.CloudWatchLogGroupArn }),
    ...(input.Excludes != null && { Excludes: serializeAws_json1_1FilterList(input.Excludes, context) }),
    ...(input.Includes != null && { Includes: serializeAws_json1_1FilterList(input.Includes, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Options != null && { Options: serializeAws_json1_1Options(input.Options, context) }),
    ...(input.Schedule != null && { Schedule: serializeAws_json1_1TaskSchedule(input.Schedule, context) }),
    ...(input.TaskArn != null && { TaskArn: input.TaskArn }),
  };
};

const deserializeAws_json1_1AgentArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AgentList = (output: any, context: __SerdeContext): AgentListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AgentListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AgentListEntry = (output: any, context: __SerdeContext): AgentListEntry => {
  return {
    AgentArn: __expectString(output.AgentArn),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1CancelTaskExecutionResponse = (
  output: any,
  context: __SerdeContext
): CancelTaskExecutionResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateAgentResponse = (output: any, context: __SerdeContext): CreateAgentResponse => {
  return {
    AgentArn: __expectString(output.AgentArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationEfsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationEfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationFsxLustreResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationFsxLustreResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationFsxOntapResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationFsxOntapResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationFsxOpenZfsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationFsxOpenZfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationFsxWindowsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationFsxWindowsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationHdfsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationHdfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationNfsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationNfsResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationObjectStorageResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationObjectStorageResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationS3Response = (
  output: any,
  context: __SerdeContext
): CreateLocationS3Response => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateLocationSmbResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationSmbResponse => {
  return {
    LocationArn: __expectString(output.LocationArn),
  } as any;
};

const deserializeAws_json1_1CreateTaskResponse = (output: any, context: __SerdeContext): CreateTaskResponse => {
  return {
    TaskArn: __expectString(output.TaskArn),
  } as any;
};

const deserializeAws_json1_1DeleteAgentResponse = (output: any, context: __SerdeContext): DeleteAgentResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLocationResponse = (output: any, context: __SerdeContext): DeleteLocationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTaskResponse = (output: any, context: __SerdeContext): DeleteTaskResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAgentResponse = (output: any, context: __SerdeContext): DescribeAgentResponse => {
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
      output.PrivateLinkConfig != null
        ? deserializeAws_json1_1PrivateLinkConfig(output.PrivateLinkConfig, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeLocationEfsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationEfsResponse => {
  return {
    AccessPointArn: __expectString(output.AccessPointArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Ec2Config: output.Ec2Config != null ? deserializeAws_json1_1Ec2Config(output.Ec2Config, context) : undefined,
    FileSystemAccessRoleArn: __expectString(output.FileSystemAccessRoleArn),
    InTransitEncryption: __expectString(output.InTransitEncryption),
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
  } as any;
};

const deserializeAws_json1_1DescribeLocationFsxLustreResponse = (
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
      output.SecurityGroupArns != null
        ? deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeLocationFsxOntapResponse = (
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
    Protocol: output.Protocol != null ? deserializeAws_json1_1FsxProtocol(output.Protocol, context) : undefined,
    SecurityGroupArns:
      output.SecurityGroupArns != null
        ? deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context)
        : undefined,
    StorageVirtualMachineArn: __expectString(output.StorageVirtualMachineArn),
  } as any;
};

const deserializeAws_json1_1DescribeLocationFsxOpenZfsResponse = (
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
    Protocol: output.Protocol != null ? deserializeAws_json1_1FsxProtocol(output.Protocol, context) : undefined,
    SecurityGroupArns:
      output.SecurityGroupArns != null
        ? deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeLocationFsxWindowsResponse = (
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
      output.SecurityGroupArns != null
        ? deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context)
        : undefined,
    User: __expectString(output.User),
  } as any;
};

const deserializeAws_json1_1DescribeLocationHdfsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationHdfsResponse => {
  return {
    AgentArns: output.AgentArns != null ? deserializeAws_json1_1AgentArnList(output.AgentArns, context) : undefined,
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
    NameNodes: output.NameNodes != null ? deserializeAws_json1_1HdfsNameNodeList(output.NameNodes, context) : undefined,
    QopConfiguration:
      output.QopConfiguration != null
        ? deserializeAws_json1_1QopConfiguration(output.QopConfiguration, context)
        : undefined,
    ReplicationFactor: __expectInt32(output.ReplicationFactor),
    SimpleUser: __expectString(output.SimpleUser),
  } as any;
};

const deserializeAws_json1_1DescribeLocationNfsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationNfsResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    MountOptions:
      output.MountOptions != null ? deserializeAws_json1_1NfsMountOptions(output.MountOptions, context) : undefined,
    OnPremConfig:
      output.OnPremConfig != null ? deserializeAws_json1_1OnPremConfig(output.OnPremConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeLocationObjectStorageResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationObjectStorageResponse => {
  return {
    AccessKey: __expectString(output.AccessKey),
    AgentArns: output.AgentArns != null ? deserializeAws_json1_1AgentArnList(output.AgentArns, context) : undefined,
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

const deserializeAws_json1_1DescribeLocationS3Response = (
  output: any,
  context: __SerdeContext
): DescribeLocationS3Response => {
  return {
    AgentArns: output.AgentArns != null ? deserializeAws_json1_1AgentArnList(output.AgentArns, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    S3Config: output.S3Config != null ? deserializeAws_json1_1S3Config(output.S3Config, context) : undefined,
    S3StorageClass: __expectString(output.S3StorageClass),
  } as any;
};

const deserializeAws_json1_1DescribeLocationSmbResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationSmbResponse => {
  return {
    AgentArns: output.AgentArns != null ? deserializeAws_json1_1AgentArnList(output.AgentArns, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Domain: __expectString(output.Domain),
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
    MountOptions:
      output.MountOptions != null ? deserializeAws_json1_1SmbMountOptions(output.MountOptions, context) : undefined,
    User: __expectString(output.User),
  } as any;
};

const deserializeAws_json1_1DescribeTaskExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskExecutionResponse => {
  return {
    BytesCompressed: __expectLong(output.BytesCompressed),
    BytesTransferred: __expectLong(output.BytesTransferred),
    BytesWritten: __expectLong(output.BytesWritten),
    EstimatedBytesToTransfer: __expectLong(output.EstimatedBytesToTransfer),
    EstimatedFilesToTransfer: __expectLong(output.EstimatedFilesToTransfer),
    Excludes: output.Excludes != null ? deserializeAws_json1_1FilterList(output.Excludes, context) : undefined,
    FilesTransferred: __expectLong(output.FilesTransferred),
    Includes: output.Includes != null ? deserializeAws_json1_1FilterList(output.Includes, context) : undefined,
    Options: output.Options != null ? deserializeAws_json1_1Options(output.Options, context) : undefined,
    Result: output.Result != null ? deserializeAws_json1_1TaskExecutionResultDetail(output.Result, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    TaskExecutionArn: __expectString(output.TaskExecutionArn),
  } as any;
};

const deserializeAws_json1_1DescribeTaskResponse = (output: any, context: __SerdeContext): DescribeTaskResponse => {
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
        ? deserializeAws_json1_1DestinationNetworkInterfaceArns(output.DestinationNetworkInterfaceArns, context)
        : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    ErrorDetail: __expectString(output.ErrorDetail),
    Excludes: output.Excludes != null ? deserializeAws_json1_1FilterList(output.Excludes, context) : undefined,
    Includes: output.Includes != null ? deserializeAws_json1_1FilterList(output.Includes, context) : undefined,
    Name: __expectString(output.Name),
    Options: output.Options != null ? deserializeAws_json1_1Options(output.Options, context) : undefined,
    Schedule: output.Schedule != null ? deserializeAws_json1_1TaskSchedule(output.Schedule, context) : undefined,
    SourceLocationArn: __expectString(output.SourceLocationArn),
    SourceNetworkInterfaceArns:
      output.SourceNetworkInterfaceArns != null
        ? deserializeAws_json1_1SourceNetworkInterfaceArns(output.SourceNetworkInterfaceArns, context)
        : undefined,
    Status: __expectString(output.Status),
    TaskArn: __expectString(output.TaskArn),
  } as any;
};

const deserializeAws_json1_1DestinationNetworkInterfaceArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Ec2Config = (output: any, context: __SerdeContext): Ec2Config => {
  return {
    SecurityGroupArns:
      output.SecurityGroupArns != null
        ? deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context)
        : undefined,
    SubnetArn: __expectString(output.SubnetArn),
  } as any;
};

const deserializeAws_json1_1Ec2SecurityGroupArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1FilterList = (output: any, context: __SerdeContext): FilterRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FilterRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterRule = (output: any, context: __SerdeContext): FilterRule => {
  return {
    FilterType: __expectString(output.FilterType),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1FsxProtocol = (output: any, context: __SerdeContext): FsxProtocol => {
  return {
    NFS: output.NFS != null ? deserializeAws_json1_1FsxProtocolNfs(output.NFS, context) : undefined,
    SMB: output.SMB != null ? deserializeAws_json1_1FsxProtocolSmb(output.SMB, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FsxProtocolNfs = (output: any, context: __SerdeContext): FsxProtocolNfs => {
  return {
    MountOptions:
      output.MountOptions != null ? deserializeAws_json1_1NfsMountOptions(output.MountOptions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FsxProtocolSmb = (output: any, context: __SerdeContext): FsxProtocolSmb => {
  return {
    Domain: __expectString(output.Domain),
    MountOptions:
      output.MountOptions != null ? deserializeAws_json1_1SmbMountOptions(output.MountOptions, context) : undefined,
    Password: __expectString(output.Password),
    User: __expectString(output.User),
  } as any;
};

const deserializeAws_json1_1HdfsNameNode = (output: any, context: __SerdeContext): HdfsNameNode => {
  return {
    Hostname: __expectString(output.Hostname),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_json1_1HdfsNameNodeList = (output: any, context: __SerdeContext): HdfsNameNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HdfsNameNode(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    datasyncErrorCode: __expectString(output.datasyncErrorCode),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListAgentsResponse = (output: any, context: __SerdeContext): ListAgentsResponse => {
  return {
    Agents: output.Agents != null ? deserializeAws_json1_1AgentList(output.Agents, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLocationsResponse = (output: any, context: __SerdeContext): ListLocationsResponse => {
  return {
    Locations: output.Locations != null ? deserializeAws_json1_1LocationList(output.Locations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1OutputTagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTaskExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListTaskExecutionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TaskExecutions:
      output.TaskExecutions != null
        ? deserializeAws_json1_1TaskExecutionList(output.TaskExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTasksResponse = (output: any, context: __SerdeContext): ListTasksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tasks: output.Tasks != null ? deserializeAws_json1_1TaskList(output.Tasks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LocationList = (output: any, context: __SerdeContext): LocationListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LocationListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LocationListEntry = (output: any, context: __SerdeContext): LocationListEntry => {
  return {
    LocationArn: __expectString(output.LocationArn),
    LocationUri: __expectString(output.LocationUri),
  } as any;
};

const deserializeAws_json1_1NfsMountOptions = (output: any, context: __SerdeContext): NfsMountOptions => {
  return {
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1OnPremConfig = (output: any, context: __SerdeContext): OnPremConfig => {
  return {
    AgentArns: output.AgentArns != null ? deserializeAws_json1_1AgentArnList(output.AgentArns, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Options = (output: any, context: __SerdeContext): Options => {
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

const deserializeAws_json1_1OutputTagList = (output: any, context: __SerdeContext): TagListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PLSecurityGroupArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PLSubnetArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PrivateLinkConfig = (output: any, context: __SerdeContext): PrivateLinkConfig => {
  return {
    PrivateLinkEndpoint: __expectString(output.PrivateLinkEndpoint),
    SecurityGroupArns:
      output.SecurityGroupArns != null
        ? deserializeAws_json1_1PLSecurityGroupArnList(output.SecurityGroupArns, context)
        : undefined,
    SubnetArns:
      output.SubnetArns != null ? deserializeAws_json1_1PLSubnetArnList(output.SubnetArns, context) : undefined,
    VpcEndpointId: __expectString(output.VpcEndpointId),
  } as any;
};

const deserializeAws_json1_1QopConfiguration = (output: any, context: __SerdeContext): QopConfiguration => {
  return {
    DataTransferProtection: __expectString(output.DataTransferProtection),
    RpcProtection: __expectString(output.RpcProtection),
  } as any;
};

const deserializeAws_json1_1S3Config = (output: any, context: __SerdeContext): S3Config => {
  return {
    BucketAccessRoleArn: __expectString(output.BucketAccessRoleArn),
  } as any;
};

const deserializeAws_json1_1SmbMountOptions = (output: any, context: __SerdeContext): SmbMountOptions => {
  return {
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1SourceNetworkInterfaceArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1StartTaskExecutionResponse = (
  output: any,
  context: __SerdeContext
): StartTaskExecutionResponse => {
  return {
    TaskExecutionArn: __expectString(output.TaskExecutionArn),
  } as any;
};

const deserializeAws_json1_1TagListEntry = (output: any, context: __SerdeContext): TagListEntry => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TaskExecutionList = (output: any, context: __SerdeContext): TaskExecutionListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaskExecutionListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TaskExecutionListEntry = (output: any, context: __SerdeContext): TaskExecutionListEntry => {
  return {
    Status: __expectString(output.Status),
    TaskExecutionArn: __expectString(output.TaskExecutionArn),
  } as any;
};

const deserializeAws_json1_1TaskExecutionResultDetail = (
  output: any,
  context: __SerdeContext
): TaskExecutionResultDetail => {
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

const deserializeAws_json1_1TaskList = (output: any, context: __SerdeContext): TaskListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaskListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TaskListEntry = (output: any, context: __SerdeContext): TaskListEntry => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    TaskArn: __expectString(output.TaskArn),
  } as any;
};

const deserializeAws_json1_1TaskSchedule = (output: any, context: __SerdeContext): TaskSchedule => {
  return {
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateAgentResponse = (output: any, context: __SerdeContext): UpdateAgentResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLocationHdfsResponse = (
  output: any,
  context: __SerdeContext
): UpdateLocationHdfsResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLocationNfsResponse = (
  output: any,
  context: __SerdeContext
): UpdateLocationNfsResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLocationObjectStorageResponse = (
  output: any,
  context: __SerdeContext
): UpdateLocationObjectStorageResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLocationSmbResponse = (
  output: any,
  context: __SerdeContext
): UpdateLocationSmbResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateTaskExecutionResponse = (
  output: any,
  context: __SerdeContext
): UpdateTaskExecutionResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateTaskResponse = (output: any, context: __SerdeContext): UpdateTaskResponse => {
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
