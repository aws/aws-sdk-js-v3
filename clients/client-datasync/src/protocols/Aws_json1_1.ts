// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
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
import { v4 as generateIdempotencyToken } from "uuid";

import { AddStorageSystemCommandInput, AddStorageSystemCommandOutput } from "../commands/AddStorageSystemCommand";
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
  DescribeDiscoveryJobCommandInput,
  DescribeDiscoveryJobCommandOutput,
} from "../commands/DescribeDiscoveryJobCommand";
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
import {
  DescribeStorageSystemCommandInput,
  DescribeStorageSystemCommandOutput,
} from "../commands/DescribeStorageSystemCommand";
import {
  DescribeStorageSystemResourceMetricsCommandInput,
  DescribeStorageSystemResourceMetricsCommandOutput,
} from "../commands/DescribeStorageSystemResourceMetricsCommand";
import {
  DescribeStorageSystemResourcesCommandInput,
  DescribeStorageSystemResourcesCommandOutput,
} from "../commands/DescribeStorageSystemResourcesCommand";
import { DescribeTaskCommandInput, DescribeTaskCommandOutput } from "../commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput,
} from "../commands/DescribeTaskExecutionCommand";
import {
  GenerateRecommendationsCommandInput,
  GenerateRecommendationsCommandOutput,
} from "../commands/GenerateRecommendationsCommand";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { ListDiscoveryJobsCommandInput, ListDiscoveryJobsCommandOutput } from "../commands/ListDiscoveryJobsCommand";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "../commands/ListLocationsCommand";
import { ListStorageSystemsCommandInput, ListStorageSystemsCommandOutput } from "../commands/ListStorageSystemsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput } from "../commands/ListTaskExecutionsCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import {
  RemoveStorageSystemCommandInput,
  RemoveStorageSystemCommandOutput,
} from "../commands/RemoveStorageSystemCommand";
import { StartDiscoveryJobCommandInput, StartDiscoveryJobCommandOutput } from "../commands/StartDiscoveryJobCommand";
import { StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput } from "../commands/StartTaskExecutionCommand";
import { StopDiscoveryJobCommandInput, StopDiscoveryJobCommandOutput } from "../commands/StopDiscoveryJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "../commands/UpdateAgentCommand";
import { UpdateDiscoveryJobCommandInput, UpdateDiscoveryJobCommandOutput } from "../commands/UpdateDiscoveryJobCommand";
import { UpdateLocationHdfsCommandInput, UpdateLocationHdfsCommandOutput } from "../commands/UpdateLocationHdfsCommand";
import { UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput } from "../commands/UpdateLocationNfsCommand";
import {
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
} from "../commands/UpdateLocationObjectStorageCommand";
import { UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput } from "../commands/UpdateLocationSmbCommand";
import {
  UpdateStorageSystemCommandInput,
  UpdateStorageSystemCommandOutput,
} from "../commands/UpdateStorageSystemCommand";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "../commands/UpdateTaskCommand";
import {
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
} from "../commands/UpdateTaskExecutionCommand";
import { DataSyncServiceException as __BaseException } from "../models/DataSyncServiceException";
import {
  AddStorageSystemRequest,
  CancelTaskExecutionRequest,
  CreateAgentRequest,
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
  Credentials,
  DeleteAgentRequest,
  DeleteLocationRequest,
  DeleteTaskRequest,
  DescribeAgentRequest,
  DescribeAgentResponse,
  DescribeDiscoveryJobRequest,
  DescribeDiscoveryJobResponse,
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
  DescribeStorageSystemRequest,
  DescribeStorageSystemResourceMetricsRequest,
  DescribeStorageSystemResourceMetricsResponse,
  DescribeStorageSystemResourcesRequest,
  DescribeStorageSystemResourcesResponse,
  DescribeStorageSystemResponse,
  DescribeTaskExecutionRequest,
  DescribeTaskExecutionResponse,
  DescribeTaskRequest,
  DescribeTaskResponse,
  DiscoveryServerConfiguration,
  Ec2Config,
  FilterRule,
  FsxProtocol,
  FsxProtocolNfs,
  FsxProtocolSmb,
  GenerateRecommendationsRequest,
  HdfsNameNode,
  InternalException,
  InvalidRequestException,
  IOPS,
  Latency,
  ListAgentsRequest,
  ListDiscoveryJobsRequest,
  ListLocationsRequest,
  ListStorageSystemsRequest,
  ListTagsForResourceRequest,
  ListTaskExecutionsRequest,
  ListTasksRequest,
  LocationFilter,
  MaxP95Performance,
  NetAppONTAPCluster,
  NetAppONTAPSVM,
  NetAppONTAPVolume,
  NfsMountOptions,
  OnPremConfig,
  Options,
  P95Metrics,
  QopConfiguration,
  RemoveStorageSystemRequest,
  ResourceDetails,
  ResourceMetrics,
  S3Config,
  SmbMountOptions,
  StartDiscoveryJobRequest,
  StartTaskExecutionRequest,
  StopDiscoveryJobRequest,
  TagListEntry,
  TagResourceRequest,
  TaskFilter,
  TaskSchedule,
  Throughput,
  UntagResourceRequest,
  UpdateAgentRequest,
  UpdateDiscoveryJobRequest,
  UpdateLocationHdfsRequest,
  UpdateLocationNfsRequest,
  UpdateLocationObjectStorageRequest,
  UpdateLocationSmbRequest,
  UpdateStorageSystemRequest,
  UpdateTaskExecutionRequest,
  UpdateTaskRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddStorageSystemCommand
 */
export const se_AddStorageSystemCommand = async (
  input: AddStorageSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddStorageSystem");
  let body: any;
  body = JSON.stringify(se_AddStorageSystemRequest(input, context));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1DescribeDiscoveryJobCommand
 */
export const se_DescribeDiscoveryJobCommand = async (
  input: DescribeDiscoveryJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDiscoveryJob");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1DescribeStorageSystemCommand
 */
export const se_DescribeStorageSystemCommand = async (
  input: DescribeStorageSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStorageSystem");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

/**
 * serializeAws_json1_1DescribeStorageSystemResourceMetricsCommand
 */
export const se_DescribeStorageSystemResourceMetricsCommand = async (
  input: DescribeStorageSystemResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStorageSystemResourceMetrics");
  let body: any;
  body = JSON.stringify(se_DescribeStorageSystemResourceMetricsRequest(input, context));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

/**
 * serializeAws_json1_1DescribeStorageSystemResourcesCommand
 */
export const se_DescribeStorageSystemResourcesCommand = async (
  input: DescribeStorageSystemResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStorageSystemResources");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1GenerateRecommendationsCommand
 */
export const se_GenerateRecommendationsCommand = async (
  input: GenerateRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1ListDiscoveryJobsCommand
 */
export const se_ListDiscoveryJobsCommand = async (
  input: ListDiscoveryJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDiscoveryJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1ListStorageSystemsCommand
 */
export const se_ListStorageSystemsCommand = async (
  input: ListStorageSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStorageSystems");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1RemoveStorageSystemCommand
 */
export const se_RemoveStorageSystemCommand = async (
  input: RemoveStorageSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveStorageSystem");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

/**
 * serializeAws_json1_1StartDiscoveryJobCommand
 */
export const se_StartDiscoveryJobCommand = async (
  input: StartDiscoveryJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDiscoveryJob");
  let body: any;
  body = JSON.stringify(se_StartDiscoveryJobRequest(input, context));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1StopDiscoveryJobCommand
 */
export const se_StopDiscoveryJobCommand = async (
  input: StopDiscoveryJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDiscoveryJob");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1UpdateDiscoveryJobCommand
 */
export const se_UpdateDiscoveryJobCommand = async (
  input: UpdateDiscoveryJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDiscoveryJob");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1UpdateLocationSmbCommand
 */
export const se_UpdateLocationSmbCommand = async (
  input: UpdateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLocationSmb");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStorageSystemCommand
 */
export const se_UpdateStorageSystemCommand = async (
  input: UpdateStorageSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStorageSystem");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "discovery-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * deserializeAws_json1_1AddStorageSystemCommand
 */
export const de_AddStorageSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddStorageSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddStorageSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddStorageSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddStorageSystemCommandError
 */
const de_AddStorageSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddStorageSystemCommandOutput> => {
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
      });
  }
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
  contents = _json(data);
  const response: CancelTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationFsxLustreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationFsxOntapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationFsxOpenZfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationFsxWindowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDiscoveryJobCommand
 */
export const de_DescribeDiscoveryJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDiscoveryJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDiscoveryJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDiscoveryJobResponse(data, context);
  const response: DescribeDiscoveryJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDiscoveryJobCommandError
 */
const de_DescribeDiscoveryJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDiscoveryJobCommandOutput> => {
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStorageSystemCommand
 */
export const de_DescribeStorageSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStorageSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStorageSystemResponse(data, context);
  const response: DescribeStorageSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStorageSystemCommandError
 */
const de_DescribeStorageSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageSystemCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStorageSystemResourceMetricsCommand
 */
export const de_DescribeStorageSystemResourceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageSystemResourceMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStorageSystemResourceMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStorageSystemResourceMetricsResponse(data, context);
  const response: DescribeStorageSystemResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStorageSystemResourceMetricsCommandError
 */
const de_DescribeStorageSystemResourceMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageSystemResourceMetricsCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStorageSystemResourcesCommand
 */
export const de_DescribeStorageSystemResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageSystemResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStorageSystemResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStorageSystemResourcesResponse(data, context);
  const response: DescribeStorageSystemResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStorageSystemResourcesCommandError
 */
const de_DescribeStorageSystemResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageSystemResourcesCommandOutput> => {
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GenerateRecommendationsCommand
 */
export const de_GenerateRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GenerateRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateRecommendationsCommandError
 */
const de_GenerateRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRecommendationsCommandOutput> => {
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
  contents = _json(data);
  const response: ListAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDiscoveryJobsCommand
 */
export const de_ListDiscoveryJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveryJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDiscoveryJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDiscoveryJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDiscoveryJobsCommandError
 */
const de_ListDiscoveryJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveryJobsCommandOutput> => {
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
  contents = _json(data);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListStorageSystemsCommand
 */
export const de_ListStorageSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageSystemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStorageSystemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListStorageSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListStorageSystemsCommandError
 */
const de_ListStorageSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageSystemsCommandOutput> => {
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTaskExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RemoveStorageSystemCommand
 */
export const de_RemoveStorageSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveStorageSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveStorageSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RemoveStorageSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RemoveStorageSystemCommandError
 */
const de_RemoveStorageSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveStorageSystemCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_json1_1StartDiscoveryJobCommand
 */
export const de_StartDiscoveryJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDiscoveryJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDiscoveryJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDiscoveryJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDiscoveryJobCommandError
 */
const de_StartDiscoveryJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDiscoveryJobCommandOutput> => {
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
  contents = _json(data);
  const response: StartTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopDiscoveryJobCommand
 */
export const de_StopDiscoveryJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDiscoveryJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDiscoveryJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopDiscoveryJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopDiscoveryJobCommandError
 */
const de_StopDiscoveryJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDiscoveryJobCommandOutput> => {
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDiscoveryJobCommand
 */
export const de_UpdateDiscoveryJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDiscoveryJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDiscoveryJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDiscoveryJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDiscoveryJobCommandError
 */
const de_UpdateDiscoveryJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDiscoveryJobCommandOutput> => {
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
  contents = _json(data);
  const response: UpdateLocationHdfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateLocationObjectStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateStorageSystemCommand
 */
export const de_UpdateStorageSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStorageSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateStorageSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateStorageSystemCommandError
 */
const de_UpdateStorageSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageSystemCommandOutput> => {
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
  contents = _json(data);
  const response: UpdateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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

/**
 * serializeAws_json1_1AddStorageSystemRequest
 */
const se_AddStorageSystemRequest = (input: AddStorageSystemRequest, context: __SerdeContext): any => {
  return take(input, {
    AgentArns: _json,
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CloudWatchLogGroupArn: [],
    Credentials: _json,
    Name: [],
    ServerConfiguration: _json,
    SystemType: [],
    Tags: _json,
  });
};

// se_AgentArnList omitted.

// se_CancelTaskExecutionRequest omitted.

// se_CreateAgentRequest omitted.

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

// se_CreateLocationSmbRequest omitted.

// se_CreateTaskRequest omitted.

// se_Credentials omitted.

// se_DeleteAgentRequest omitted.

// se_DeleteLocationRequest omitted.

// se_DeleteTaskRequest omitted.

// se_DescribeAgentRequest omitted.

// se_DescribeDiscoveryJobRequest omitted.

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

// se_DescribeStorageSystemRequest omitted.

/**
 * serializeAws_json1_1DescribeStorageSystemResourceMetricsRequest
 */
const se_DescribeStorageSystemResourceMetricsRequest = (
  input: DescribeStorageSystemResourceMetricsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DiscoveryJobArn: [],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    ResourceId: [],
    ResourceType: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DescribeStorageSystemResourcesRequest omitted.

// se_DescribeTaskExecutionRequest omitted.

// se_DescribeTaskRequest omitted.

// se_DiscoveryAgentArnList omitted.

// se_DiscoveryServerConfiguration omitted.

// se_Ec2Config omitted.

// se_Ec2SecurityGroupArnList omitted.

// se_FilterList omitted.

// se_FilterMembers omitted.

// se_FilterRule omitted.

// se_FilterValues omitted.

// se_FsxProtocol omitted.

// se_FsxProtocolNfs omitted.

// se_FsxProtocolSmb omitted.

// se_GenerateRecommendationsRequest omitted.

// se_HdfsNameNode omitted.

// se_HdfsNameNodeList omitted.

// se_InputTagList omitted.

// se_ListAgentsRequest omitted.

// se_ListDiscoveryJobsRequest omitted.

// se_ListLocationsRequest omitted.

// se_ListStorageSystemsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTaskExecutionsRequest omitted.

// se_ListTasksRequest omitted.

// se_LocationFilter omitted.

// se_LocationFilters omitted.

// se_NfsMountOptions omitted.

// se_OnPremConfig omitted.

// se_Options omitted.

// se_PLSecurityGroupArnList omitted.

// se_PLSubnetArnList omitted.

// se_QopConfiguration omitted.

// se_RemoveStorageSystemRequest omitted.

// se_ResourceFilters omitted.

// se_ResourceIds omitted.

// se_S3Config omitted.

// se_SmbMountOptions omitted.

/**
 * serializeAws_json1_1StartDiscoveryJobRequest
 */
const se_StartDiscoveryJobRequest = (input: StartDiscoveryJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CollectionDurationMinutes: [],
    StorageSystemArn: [],
    Tags: _json,
  });
};

// se_StartTaskExecutionRequest omitted.

// se_StopDiscoveryJobRequest omitted.

// se_TagKeyList omitted.

// se_TagListEntry omitted.

// se_TagResourceRequest omitted.

// se_TaskFilter omitted.

// se_TaskFilters omitted.

// se_TaskSchedule omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAgentRequest omitted.

// se_UpdateDiscoveryJobRequest omitted.

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
    LocationArn: [],
    SecretKey: [],
    ServerCertificate: context.base64Encoder,
    ServerPort: [],
    ServerProtocol: [],
    Subdirectory: [],
  });
};

// se_UpdateLocationSmbRequest omitted.

// se_UpdateStorageSystemRequest omitted.

// se_UpdateTaskExecutionRequest omitted.

// se_UpdateTaskRequest omitted.

// de_AddStorageSystemResponse omitted.

// de_AgentArnList omitted.

// de_AgentList omitted.

// de_AgentListEntry omitted.

// de_CancelTaskExecutionResponse omitted.

// de_Capacity omitted.

// de_CreateAgentResponse omitted.

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
    PrivateLinkConfig: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDiscoveryJobResponse
 */
const de_DescribeDiscoveryJobResponse = (output: any, context: __SerdeContext): DescribeDiscoveryJobResponse => {
  return take(output, {
    CollectionDurationMinutes: __expectInt32,
    DiscoveryJobArn: __expectString,
    JobEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StorageSystemArn: __expectString,
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
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LocationArn: __expectString,
    LocationUri: __expectString,
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
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Domain: __expectString,
    LocationArn: __expectString,
    LocationUri: __expectString,
    MountOptions: _json,
    User: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStorageSystemResourceMetricsResponse
 */
const de_DescribeStorageSystemResourceMetricsResponse = (
  output: any,
  context: __SerdeContext
): DescribeStorageSystemResourceMetricsResponse => {
  return take(output, {
    Metrics: (_: any) => de_Metrics(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStorageSystemResourcesResponse
 */
const de_DescribeStorageSystemResourcesResponse = (
  output: any,
  context: __SerdeContext
): DescribeStorageSystemResourcesResponse => {
  return take(output, {
    NextToken: __expectString,
    ResourceDetails: (_: any) => de_ResourceDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStorageSystemResponse
 */
const de_DescribeStorageSystemResponse = (output: any, context: __SerdeContext): DescribeStorageSystemResponse => {
  return take(output, {
    AgentArns: _json,
    CloudWatchLogGroupArn: __expectString,
    ConnectivityStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    Name: __expectString,
    SecretsManagerArn: __expectString,
    ServerConfiguration: _json,
    StorageSystemArn: __expectString,
    SystemType: __expectString,
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
    EstimatedBytesToTransfer: __expectLong,
    EstimatedFilesToTransfer: __expectLong,
    Excludes: _json,
    FilesTransferred: __expectLong,
    Includes: _json,
    Options: _json,
    Result: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TaskExecutionArn: __expectString,
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
    Name: __expectString,
    Options: _json,
    Schedule: _json,
    SourceLocationArn: __expectString,
    SourceNetworkInterfaceArns: _json,
    Status: __expectString,
    TaskArn: __expectString,
  }) as any;
};

// de_DestinationNetworkInterfaceArns omitted.

// de_DiscoveryAgentArnList omitted.

// de_DiscoveryJobList omitted.

// de_DiscoveryJobListEntry omitted.

// de_DiscoveryServerConfiguration omitted.

// de_Ec2Config omitted.

// de_Ec2SecurityGroupArnList omitted.

// de_EnabledProtocols omitted.

// de_FilterList omitted.

// de_FilterRule omitted.

// de_FsxProtocol omitted.

// de_FsxProtocolNfs omitted.

// de_FsxProtocolSmb omitted.

// de_GenerateRecommendationsResponse omitted.

// de_HdfsNameNode omitted.

// de_HdfsNameNodeList omitted.

// de_InternalException omitted.

// de_InvalidRequestException omitted.

/**
 * deserializeAws_json1_1IOPS
 */
const de_IOPS = (output: any, context: __SerdeContext): IOPS => {
  return take(output, {
    Other: __limitedParseDouble,
    Read: __limitedParseDouble,
    Total: __limitedParseDouble,
    Write: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1Latency
 */
const de_Latency = (output: any, context: __SerdeContext): Latency => {
  return take(output, {
    Other: __limitedParseDouble,
    Read: __limitedParseDouble,
    Write: __limitedParseDouble,
  }) as any;
};

// de_ListAgentsResponse omitted.

// de_ListDiscoveryJobsResponse omitted.

// de_ListLocationsResponse omitted.

// de_ListStorageSystemsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTaskExecutionsResponse omitted.

// de_ListTasksResponse omitted.

// de_LocationList omitted.

// de_LocationListEntry omitted.

/**
 * deserializeAws_json1_1MaxP95Performance
 */
const de_MaxP95Performance = (output: any, context: __SerdeContext): MaxP95Performance => {
  return take(output, {
    IopsOther: __limitedParseDouble,
    IopsRead: __limitedParseDouble,
    IopsTotal: __limitedParseDouble,
    IopsWrite: __limitedParseDouble,
    LatencyOther: __limitedParseDouble,
    LatencyRead: __limitedParseDouble,
    LatencyWrite: __limitedParseDouble,
    ThroughputOther: __limitedParseDouble,
    ThroughputRead: __limitedParseDouble,
    ThroughputTotal: __limitedParseDouble,
    ThroughputWrite: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1Metrics
 */
const de_Metrics = (output: any, context: __SerdeContext): ResourceMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceMetrics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NetAppONTAPCluster
 */
const de_NetAppONTAPCluster = (output: any, context: __SerdeContext): NetAppONTAPCluster => {
  return take(output, {
    CifsShareCount: __expectLong,
    ClusterBlockStorageLogicalUsed: __expectLong,
    ClusterBlockStorageSize: __expectLong,
    ClusterBlockStorageUsed: __expectLong,
    ClusterName: __expectString,
    MaxP95Performance: (_: any) => de_MaxP95Performance(_, context),
    NfsExportedVolumes: __expectLong,
    RecommendationStatus: __expectString,
    Recommendations: _json,
    ResourceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NetAppONTAPClusters
 */
const de_NetAppONTAPClusters = (output: any, context: __SerdeContext): NetAppONTAPCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetAppONTAPCluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NetAppONTAPSVM
 */
const de_NetAppONTAPSVM = (output: any, context: __SerdeContext): NetAppONTAPSVM => {
  return take(output, {
    CifsShareCount: __expectLong,
    ClusterUuid: __expectString,
    EnabledProtocols: _json,
    MaxP95Performance: (_: any) => de_MaxP95Performance(_, context),
    NfsExportedVolumes: __expectLong,
    RecommendationStatus: __expectString,
    Recommendations: _json,
    ResourceId: __expectString,
    SvmName: __expectString,
    TotalCapacityProvisioned: __expectLong,
    TotalCapacityUsed: __expectLong,
    TotalLogicalCapacityUsed: __expectLong,
    TotalSnapshotCapacityUsed: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1NetAppONTAPSVMs
 */
const de_NetAppONTAPSVMs = (output: any, context: __SerdeContext): NetAppONTAPSVM[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetAppONTAPSVM(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NetAppONTAPVolume
 */
const de_NetAppONTAPVolume = (output: any, context: __SerdeContext): NetAppONTAPVolume => {
  return take(output, {
    CapacityProvisioned: __expectLong,
    CapacityUsed: __expectLong,
    CifsShareCount: __expectLong,
    LogicalCapacityUsed: __expectLong,
    MaxP95Performance: (_: any) => de_MaxP95Performance(_, context),
    NfsExported: __expectBoolean,
    RecommendationStatus: __expectString,
    Recommendations: _json,
    ResourceId: __expectString,
    SecurityStyle: __expectString,
    SnapshotCapacityUsed: __expectLong,
    SvmName: __expectString,
    SvmUuid: __expectString,
    VolumeName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NetAppONTAPVolumes
 */
const de_NetAppONTAPVolumes = (output: any, context: __SerdeContext): NetAppONTAPVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetAppONTAPVolume(entry, context);
    });
  return retVal;
};

// de_NfsMountOptions omitted.

// de_OnPremConfig omitted.

// de_Options omitted.

// de_OutputTagList omitted.

/**
 * deserializeAws_json1_1P95Metrics
 */
const de_P95Metrics = (output: any, context: __SerdeContext): P95Metrics => {
  return take(output, {
    IOPS: (_: any) => de_IOPS(_, context),
    Latency: (_: any) => de_Latency(_, context),
    Throughput: (_: any) => de_Throughput(_, context),
  }) as any;
};

// de_PLSecurityGroupArnList omitted.

// de_PLSubnetArnList omitted.

// de_PrivateLinkConfig omitted.

// de_QopConfiguration omitted.

// de_Recommendation omitted.

// de_Recommendations omitted.

// de_RecommendationsConfigMap omitted.

// de_RemoveStorageSystemResponse omitted.

/**
 * deserializeAws_json1_1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return take(output, {
    NetAppONTAPClusters: (_: any) => de_NetAppONTAPClusters(_, context),
    NetAppONTAPSVMs: (_: any) => de_NetAppONTAPSVMs(_, context),
    NetAppONTAPVolumes: (_: any) => de_NetAppONTAPVolumes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceMetrics
 */
const de_ResourceMetrics = (output: any, context: __SerdeContext): ResourceMetrics => {
  return take(output, {
    Capacity: _json,
    P95Metrics: (_: any) => de_P95Metrics(_, context),
    ResourceId: __expectString,
    ResourceType: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_S3Config omitted.

// de_SmbMountOptions omitted.

// de_SourceNetworkInterfaceArns omitted.

// de_StartDiscoveryJobResponse omitted.

// de_StartTaskExecutionResponse omitted.

// de_StopDiscoveryJobResponse omitted.

// de_StorageSystemList omitted.

// de_StorageSystemListEntry omitted.

// de_TagListEntry omitted.

// de_TagResourceResponse omitted.

// de_TaskExecutionList omitted.

// de_TaskExecutionListEntry omitted.

// de_TaskExecutionResultDetail omitted.

// de_TaskList omitted.

// de_TaskListEntry omitted.

// de_TaskSchedule omitted.

/**
 * deserializeAws_json1_1Throughput
 */
const de_Throughput = (output: any, context: __SerdeContext): Throughput => {
  return take(output, {
    Other: __limitedParseDouble,
    Read: __limitedParseDouble,
    Total: __limitedParseDouble,
    Write: __limitedParseDouble,
  }) as any;
};

// de_UntagResourceResponse omitted.

// de_UpdateAgentResponse omitted.

// de_UpdateDiscoveryJobResponse omitted.

// de_UpdateLocationHdfsResponse omitted.

// de_UpdateLocationNfsResponse omitted.

// de_UpdateLocationObjectStorageResponse omitted.

// de_UpdateLocationSmbResponse omitted.

// de_UpdateStorageSystemResponse omitted.

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
