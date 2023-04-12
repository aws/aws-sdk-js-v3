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
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
} from "../commands/ConvertRecoveryPointToSnapshotCommand";
import {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "../commands/CreateEndpointAccessCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "../commands/CreateNamespaceCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "../commands/CreateUsageLimitCommand";
import { CreateWorkgroupCommandInput, CreateWorkgroupCommandOutput } from "../commands/CreateWorkgroupCommand";
import {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "../commands/DeleteEndpointAccessCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "../commands/DeleteSnapshotCommand";
import { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "../commands/DeleteUsageLimitCommand";
import { DeleteWorkgroupCommandInput, DeleteWorkgroupCommandOutput } from "../commands/DeleteWorkgroupCommand";
import { GetCredentialsCommandInput, GetCredentialsCommandOutput } from "../commands/GetCredentialsCommand";
import { GetEndpointAccessCommandInput, GetEndpointAccessCommandOutput } from "../commands/GetEndpointAccessCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "../commands/GetNamespaceCommand";
import { GetRecoveryPointCommandInput, GetRecoveryPointCommandOutput } from "../commands/GetRecoveryPointCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "../commands/GetSnapshotCommand";
import {
  GetTableRestoreStatusCommandInput,
  GetTableRestoreStatusCommandOutput,
} from "../commands/GetTableRestoreStatusCommand";
import { GetUsageLimitCommandInput, GetUsageLimitCommandOutput } from "../commands/GetUsageLimitCommand";
import { GetWorkgroupCommandInput, GetWorkgroupCommandOutput } from "../commands/GetWorkgroupCommand";
import { ListEndpointAccessCommandInput, ListEndpointAccessCommandOutput } from "../commands/ListEndpointAccessCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
import { ListRecoveryPointsCommandInput, ListRecoveryPointsCommandOutput } from "../commands/ListRecoveryPointsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "../commands/ListSnapshotsCommand";
import {
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "../commands/ListTableRestoreStatusCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUsageLimitsCommandInput, ListUsageLimitsCommandOutput } from "../commands/ListUsageLimitsCommand";
import { ListWorkgroupsCommandInput, ListWorkgroupsCommandOutput } from "../commands/ListWorkgroupsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
} from "../commands/RestoreFromRecoveryPointCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "../commands/RestoreFromSnapshotCommand";
import {
  RestoreTableFromSnapshotCommandInput,
  RestoreTableFromSnapshotCommandOutput,
} from "../commands/RestoreTableFromSnapshotCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateEndpointAccessCommandInput,
  UpdateEndpointAccessCommandOutput,
} from "../commands/UpdateEndpointAccessCommand";
import { UpdateNamespaceCommandInput, UpdateNamespaceCommandOutput } from "../commands/UpdateNamespaceCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "../commands/UpdateSnapshotCommand";
import { UpdateUsageLimitCommandInput, UpdateUsageLimitCommandOutput } from "../commands/UpdateUsageLimitCommand";
import { UpdateWorkgroupCommandInput, UpdateWorkgroupCommandOutput } from "../commands/UpdateWorkgroupCommand";
import {
  AccessDeniedException,
  ConfigParameter,
  ConflictException,
  ConvertRecoveryPointToSnapshotRequest,
  ConvertRecoveryPointToSnapshotResponse,
  CreateEndpointAccessRequest,
  CreateEndpointAccessResponse,
  CreateNamespaceRequest,
  CreateNamespaceResponse,
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateUsageLimitRequest,
  CreateUsageLimitResponse,
  CreateWorkgroupRequest,
  CreateWorkgroupResponse,
  DeleteEndpointAccessRequest,
  DeleteEndpointAccessResponse,
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteSnapshotRequest,
  DeleteSnapshotResponse,
  DeleteUsageLimitRequest,
  DeleteUsageLimitResponse,
  DeleteWorkgroupRequest,
  DeleteWorkgroupResponse,
  Endpoint,
  EndpointAccess,
  GetCredentialsRequest,
  GetCredentialsResponse,
  GetEndpointAccessRequest,
  GetEndpointAccessResponse,
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetRecoveryPointRequest,
  GetRecoveryPointResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetSnapshotRequest,
  GetSnapshotResponse,
  GetTableRestoreStatusRequest,
  GetTableRestoreStatusResponse,
  GetUsageLimitRequest,
  GetUsageLimitResponse,
  GetWorkgroupRequest,
  GetWorkgroupResponse,
  InsufficientCapacityException,
  InternalServerException,
  InvalidPaginationException,
  ListEndpointAccessRequest,
  ListEndpointAccessResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListRecoveryPointsRequest,
  ListRecoveryPointsResponse,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListTableRestoreStatusRequest,
  ListTableRestoreStatusResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUsageLimitsRequest,
  ListUsageLimitsResponse,
  ListWorkgroupsRequest,
  ListWorkgroupsResponse,
  LogExport,
  Namespace,
  NetworkInterface,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  RecoveryPoint,
  ResourceNotFoundException,
  ResourcePolicy,
  RestoreFromRecoveryPointRequest,
  RestoreFromRecoveryPointResponse,
  RestoreFromSnapshotRequest,
  RestoreFromSnapshotResponse,
  RestoreTableFromSnapshotRequest,
  RestoreTableFromSnapshotResponse,
  ServiceQuotaExceededException,
  Snapshot,
  TableRestoreStatus,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateEndpointAccessRequest,
  UpdateEndpointAccessResponse,
  UpdateNamespaceRequest,
  UpdateNamespaceResponse,
  UpdateSnapshotRequest,
  UpdateSnapshotResponse,
  UpdateUsageLimitRequest,
  UpdateUsageLimitResponse,
  UpdateWorkgroupRequest,
  UpdateWorkgroupResponse,
  UsageLimit,
  ValidationException,
  VpcEndpoint,
  VpcSecurityGroupMembership,
  Workgroup,
} from "../models/models_0";
import { RedshiftServerlessServiceException as __BaseException } from "../models/RedshiftServerlessServiceException";

/**
 * serializeAws_json1_1ConvertRecoveryPointToSnapshotCommand
 */
export const se_ConvertRecoveryPointToSnapshotCommand = async (
  input: ConvertRecoveryPointToSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConvertRecoveryPointToSnapshot");
  let body: any;
  body = JSON.stringify(se_ConvertRecoveryPointToSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointAccessCommand
 */
export const se_CreateEndpointAccessCommand = async (
  input: CreateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpointAccess");
  let body: any;
  body = JSON.stringify(se_CreateEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNamespaceCommand
 */
export const se_CreateNamespaceCommand = async (
  input: CreateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNamespace");
  let body: any;
  body = JSON.stringify(se_CreateNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSnapshot");
  let body: any;
  body = JSON.stringify(se_CreateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUsageLimitCommand
 */
export const se_CreateUsageLimitCommand = async (
  input: CreateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUsageLimit");
  let body: any;
  body = JSON.stringify(se_CreateUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkgroupCommand
 */
export const se_CreateWorkgroupCommand = async (
  input: CreateWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkgroup");
  let body: any;
  body = JSON.stringify(se_CreateWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointAccessCommand
 */
export const se_DeleteEndpointAccessCommand = async (
  input: DeleteEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpointAccess");
  let body: any;
  body = JSON.stringify(se_DeleteEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNamespaceCommand
 */
export const se_DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNamespace");
  let body: any;
  body = JSON.stringify(se_DeleteNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(se_DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSnapshotCommand
 */
export const se_DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSnapshot");
  let body: any;
  body = JSON.stringify(se_DeleteSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUsageLimitCommand
 */
export const se_DeleteUsageLimitCommand = async (
  input: DeleteUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUsageLimit");
  let body: any;
  body = JSON.stringify(se_DeleteUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkgroupCommand
 */
export const se_DeleteWorkgroupCommand = async (
  input: DeleteWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkgroup");
  let body: any;
  body = JSON.stringify(se_DeleteWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCredentialsCommand
 */
export const se_GetCredentialsCommand = async (
  input: GetCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCredentials");
  let body: any;
  body = JSON.stringify(se_GetCredentialsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEndpointAccessCommand
 */
export const se_GetEndpointAccessCommand = async (
  input: GetEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEndpointAccess");
  let body: any;
  body = JSON.stringify(se_GetEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNamespaceCommand
 */
export const se_GetNamespaceCommand = async (
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNamespace");
  let body: any;
  body = JSON.stringify(se_GetNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRecoveryPointCommand
 */
export const se_GetRecoveryPointCommand = async (
  input: GetRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecoveryPoint");
  let body: any;
  body = JSON.stringify(se_GetRecoveryPointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(se_GetResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSnapshotCommand
 */
export const se_GetSnapshotCommand = async (
  input: GetSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSnapshot");
  let body: any;
  body = JSON.stringify(se_GetSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTableRestoreStatusCommand
 */
export const se_GetTableRestoreStatusCommand = async (
  input: GetTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTableRestoreStatus");
  let body: any;
  body = JSON.stringify(se_GetTableRestoreStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUsageLimitCommand
 */
export const se_GetUsageLimitCommand = async (
  input: GetUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUsageLimit");
  let body: any;
  body = JSON.stringify(se_GetUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWorkgroupCommand
 */
export const se_GetWorkgroupCommand = async (
  input: GetWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkgroup");
  let body: any;
  body = JSON.stringify(se_GetWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointAccessCommand
 */
export const se_ListEndpointAccessCommand = async (
  input: ListEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpointAccess");
  let body: any;
  body = JSON.stringify(se_ListEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNamespacesCommand
 */
export const se_ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNamespaces");
  let body: any;
  body = JSON.stringify(se_ListNamespacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRecoveryPointsCommand
 */
export const se_ListRecoveryPointsCommand = async (
  input: ListRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRecoveryPoints");
  let body: any;
  body = JSON.stringify(se_ListRecoveryPointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSnapshotsCommand
 */
export const se_ListSnapshotsCommand = async (
  input: ListSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSnapshots");
  let body: any;
  body = JSON.stringify(se_ListSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTableRestoreStatusCommand
 */
export const se_ListTableRestoreStatusCommand = async (
  input: ListTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTableRestoreStatus");
  let body: any;
  body = JSON.stringify(se_ListTableRestoreStatusRequest(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsageLimitsCommand
 */
export const se_ListUsageLimitsCommand = async (
  input: ListUsageLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsageLimits");
  let body: any;
  body = JSON.stringify(se_ListUsageLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkgroupsCommand
 */
export const se_ListWorkgroupsCommand = async (
  input: ListWorkgroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkgroups");
  let body: any;
  body = JSON.stringify(se_ListWorkgroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreFromRecoveryPointCommand
 */
export const se_RestoreFromRecoveryPointCommand = async (
  input: RestoreFromRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreFromRecoveryPoint");
  let body: any;
  body = JSON.stringify(se_RestoreFromRecoveryPointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreFromSnapshotCommand
 */
export const se_RestoreFromSnapshotCommand = async (
  input: RestoreFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreFromSnapshot");
  let body: any;
  body = JSON.stringify(se_RestoreFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreTableFromSnapshotCommand
 */
export const se_RestoreTableFromSnapshotCommand = async (
  input: RestoreTableFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreTableFromSnapshot");
  let body: any;
  body = JSON.stringify(se_RestoreTableFromSnapshotRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointAccessCommand
 */
export const se_UpdateEndpointAccessCommand = async (
  input: UpdateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpointAccess");
  let body: any;
  body = JSON.stringify(se_UpdateEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNamespaceCommand
 */
export const se_UpdateNamespaceCommand = async (
  input: UpdateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNamespace");
  let body: any;
  body = JSON.stringify(se_UpdateNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSnapshotCommand
 */
export const se_UpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSnapshot");
  let body: any;
  body = JSON.stringify(se_UpdateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUsageLimitCommand
 */
export const se_UpdateUsageLimitCommand = async (
  input: UpdateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUsageLimit");
  let body: any;
  body = JSON.stringify(se_UpdateUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkgroupCommand
 */
export const se_UpdateWorkgroupCommand = async (
  input: UpdateWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkgroup");
  let body: any;
  body = JSON.stringify(se_UpdateWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommand
 */
export const de_ConvertRecoveryPointToSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConvertRecoveryPointToSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConvertRecoveryPointToSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConvertRecoveryPointToSnapshotResponse(data, context);
  const response: ConvertRecoveryPointToSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommandError
 */
const de_ConvertRecoveryPointToSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConvertRecoveryPointToSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateEndpointAccessCommand
 */
export const de_CreateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEndpointAccessResponse(data, context);
  const response: CreateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEndpointAccessCommandError
 */
const de_CreateEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.redshiftserverless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateNamespaceCommand
 */
export const de_CreateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNamespaceResponse(data, context);
  const response: CreateNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateNamespaceCommandError
 */
const de_CreateNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotResponse(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSnapshotCommandError
 */
const de_CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateUsageLimitCommand
 */
export const de_CreateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUsageLimitResponse(data, context);
  const response: CreateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUsageLimitCommandError
 */
const de_CreateUsageLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateWorkgroupCommand
 */
export const de_CreateWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkgroupResponse(data, context);
  const response: CreateWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWorkgroupCommandError
 */
const de_CreateWorkgroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkgroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientCapacityException":
    case "com.amazonaws.redshiftserverless#InsufficientCapacityException":
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteEndpointAccessCommand
 */
export const de_DeleteEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEndpointAccessResponse(data, context);
  const response: DeleteEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEndpointAccessCommandError
 */
const de_DeleteEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteNamespaceCommand
 */
export const de_DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteNamespaceCommandError
 */
const de_DeleteNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSnapshotCommand
 */
export const de_DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSnapshotResponse(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSnapshotCommandError
 */
const de_DeleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteUsageLimitCommand
 */
export const de_DeleteUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUsageLimitResponse(data, context);
  const response: DeleteUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUsageLimitCommandError
 */
const de_DeleteUsageLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteWorkgroupCommand
 */
export const de_DeleteWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkgroupResponse(data, context);
  const response: DeleteWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWorkgroupCommandError
 */
const de_DeleteWorkgroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkgroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCredentialsCommand
 */
export const de_GetCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCredentialsResponse(data, context);
  const response: GetCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCredentialsCommandError
 */
const de_GetCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetEndpointAccessCommand
 */
export const de_GetEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEndpointAccessResponse(data, context);
  const response: GetEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEndpointAccessCommandError
 */
const de_GetEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetNamespaceCommand
 */
export const de_GetNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetNamespaceResponse(data, context);
  const response: GetNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetNamespaceCommandError
 */
const de_GetNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRecoveryPointCommand
 */
export const de_GetRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRecoveryPointResponse(data, context);
  const response: GetRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRecoveryPointCommandError
 */
const de_GetRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommandError
 */
const de_GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSnapshotCommand
 */
export const de_GetSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSnapshotResponse(data, context);
  const response: GetSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSnapshotCommandError
 */
const de_GetSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTableRestoreStatusCommand
 */
export const de_GetTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTableRestoreStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableRestoreStatusResponse(data, context);
  const response: GetTableRestoreStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTableRestoreStatusCommandError
 */
const de_GetTableRestoreStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableRestoreStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetUsageLimitCommand
 */
export const de_GetUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUsageLimitResponse(data, context);
  const response: GetUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUsageLimitCommandError
 */
const de_GetUsageLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetWorkgroupCommand
 */
export const de_GetWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWorkgroupResponse(data, context);
  const response: GetWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetWorkgroupCommandError
 */
const de_GetWorkgroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkgroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEndpointAccessCommand
 */
export const de_ListEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointAccessResponse(data, context);
  const response: ListEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEndpointAccessCommandError
 */
const de_ListEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListNamespacesCommand
 */
export const de_ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNamespacesResponse(data, context);
  const response: ListNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListNamespacesCommandError
 */
const de_ListNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRecoveryPointsCommand
 */
export const de_ListRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRecoveryPointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecoveryPointsResponse(data, context);
  const response: ListRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRecoveryPointsCommandError
 */
const de_ListRecoveryPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSnapshotsCommand
 */
export const de_ListSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSnapshotsResponse(data, context);
  const response: ListSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSnapshotsCommandError
 */
const de_ListSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTableRestoreStatusCommand
 */
export const de_ListTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTableRestoreStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTableRestoreStatusResponse(data, context);
  const response: ListTableRestoreStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTableRestoreStatusCommandError
 */
const de_ListTableRestoreStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRestoreStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationException":
    case "com.amazonaws.redshiftserverless#InvalidPaginationException":
      throw await de_InvalidPaginationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.redshiftserverless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListUsageLimitsCommand
 */
export const de_ListUsageLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsageLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsageLimitsResponse(data, context);
  const response: ListUsageLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUsageLimitsCommandError
 */
const de_ListUsageLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidPaginationException":
    case "com.amazonaws.redshiftserverless#InvalidPaginationException":
      throw await de_InvalidPaginationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListWorkgroupsCommand
 */
export const de_ListWorkgroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkgroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkgroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkgroupsResponse(data, context);
  const response: ListWorkgroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWorkgroupsCommandError
 */
const de_ListWorkgroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkgroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreFromRecoveryPointCommand
 */
export const de_RestoreFromRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreFromRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreFromRecoveryPointResponse(data, context);
  const response: RestoreFromRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreFromRecoveryPointCommandError
 */
const de_RestoreFromRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreFromSnapshotCommand
 */
export const de_RestoreFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreFromSnapshotResponse(data, context);
  const response: RestoreFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreFromSnapshotCommandError
 */
const de_RestoreFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreTableFromSnapshotCommand
 */
export const de_RestoreTableFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreTableFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreTableFromSnapshotResponse(data, context);
  const response: RestoreTableFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreTableFromSnapshotCommandError
 */
const de_RestoreTableFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.redshiftserverless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.redshiftserverless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateEndpointAccessCommand
 */
export const de_UpdateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEndpointAccessResponse(data, context);
  const response: UpdateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEndpointAccessCommandError
 */
const de_UpdateEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.redshiftserverless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNamespaceCommand
 */
export const de_UpdateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNamespaceResponse(data, context);
  const response: UpdateNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNamespaceCommandError
 */
const de_UpdateNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSnapshotCommand
 */
export const de_UpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSnapshotResponse(data, context);
  const response: UpdateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSnapshotCommandError
 */
const de_UpdateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateUsageLimitCommand
 */
export const de_UpdateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUsageLimitResponse(data, context);
  const response: UpdateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUsageLimitCommandError
 */
const de_UpdateUsageLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsageLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateWorkgroupCommand
 */
export const de_UpdateWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkgroupResponse(data, context);
  const response: UpdateWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateWorkgroupCommandError
 */
const de_UpdateWorkgroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkgroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientCapacityException":
    case "com.amazonaws.redshiftserverless#InsufficientCapacityException":
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientCapacityExceptionRes
 */
const de_InsufficientCapacityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientCapacityException(body, context);
  const exception = new InsufficientCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPaginationExceptionRes
 */
const de_InvalidPaginationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPaginationException(body, context);
  const exception = new InvalidPaginationException({
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
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
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
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ConfigParameter
 */
const se_ConfigParameter = (input: ConfigParameter, context: __SerdeContext): any => {
  return {
    ...(input.parameterKey != null && { parameterKey: input.parameterKey }),
    ...(input.parameterValue != null && { parameterValue: input.parameterValue }),
  };
};

/**
 * serializeAws_json1_1ConfigParameterList
 */
const se_ConfigParameterList = (input: ConfigParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConfigParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1ConvertRecoveryPointToSnapshotRequest
 */
const se_ConvertRecoveryPointToSnapshotRequest = (
  input: ConvertRecoveryPointToSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recoveryPointId != null && { recoveryPointId: input.recoveryPointId }),
    ...(input.retentionPeriod != null && { retentionPeriod: input.retentionPeriod }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEndpointAccessRequest
 */
const se_CreateEndpointAccessRequest = (input: CreateEndpointAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetIdList(input.subnetIds, context) }),
    ...(input.vpcSecurityGroupIds != null && {
      vpcSecurityGroupIds: se_VpcSecurityGroupIdList(input.vpcSecurityGroupIds, context),
    }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1CreateNamespaceRequest
 */
const se_CreateNamespaceRequest = (input: CreateNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.adminUserPassword != null && { adminUserPassword: input.adminUserPassword }),
    ...(input.adminUsername != null && { adminUsername: input.adminUsername }),
    ...(input.dbName != null && { dbName: input.dbName }),
    ...(input.defaultIamRoleArn != null && { defaultIamRoleArn: input.defaultIamRoleArn }),
    ...(input.iamRoles != null && { iamRoles: se_IamRoleArnList(input.iamRoles, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logExports != null && { logExports: se_LogExportList(input.logExports, context) }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSnapshotRequest
 */
const se_CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.retentionPeriod != null && { retentionPeriod: input.retentionPeriod }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUsageLimitRequest
 */
const se_CreateUsageLimitRequest = (input: CreateUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.amount != null && { amount: input.amount }),
    ...(input.breachAction != null && { breachAction: input.breachAction }),
    ...(input.period != null && { period: input.period }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.usageType != null && { usageType: input.usageType }),
  };
};

/**
 * serializeAws_json1_1CreateWorkgroupRequest
 */
const se_CreateWorkgroupRequest = (input: CreateWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.baseCapacity != null && { baseCapacity: input.baseCapacity }),
    ...(input.configParameters != null && {
      configParameters: se_ConfigParameterList(input.configParameters, context),
    }),
    ...(input.enhancedVpcRouting != null && { enhancedVpcRouting: input.enhancedVpcRouting }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.port != null && { port: input.port }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: se_SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetIdList(input.subnetIds, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteEndpointAccessRequest
 */
const se_DeleteEndpointAccessRequest = (input: DeleteEndpointAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
  };
};

/**
 * serializeAws_json1_1DeleteNamespaceRequest
 */
const se_DeleteNamespaceRequest = (input: DeleteNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.finalSnapshotName != null && { finalSnapshotName: input.finalSnapshotName }),
    ...(input.finalSnapshotRetentionPeriod != null && {
      finalSnapshotRetentionPeriod: input.finalSnapshotRetentionPeriod,
    }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcePolicyRequest
 */
const se_DeleteResourcePolicyRequest = (input: DeleteResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteSnapshotRequest
 */
const se_DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
  };
};

/**
 * serializeAws_json1_1DeleteUsageLimitRequest
 */
const se_DeleteUsageLimitRequest = (input: DeleteUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.usageLimitId != null && { usageLimitId: input.usageLimitId }),
  };
};

/**
 * serializeAws_json1_1DeleteWorkgroupRequest
 */
const se_DeleteWorkgroupRequest = (input: DeleteWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1GetCredentialsRequest
 */
const se_GetCredentialsRequest = (input: GetCredentialsRequest, context: __SerdeContext): any => {
  return {
    ...(input.dbName != null && { dbName: input.dbName }),
    ...(input.durationSeconds != null && { durationSeconds: input.durationSeconds }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1GetEndpointAccessRequest
 */
const se_GetEndpointAccessRequest = (input: GetEndpointAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
  };
};

/**
 * serializeAws_json1_1GetNamespaceRequest
 */
const se_GetNamespaceRequest = (input: GetNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
  };
};

/**
 * serializeAws_json1_1GetRecoveryPointRequest
 */
const se_GetRecoveryPointRequest = (input: GetRecoveryPointRequest, context: __SerdeContext): any => {
  return {
    ...(input.recoveryPointId != null && { recoveryPointId: input.recoveryPointId }),
  };
};

/**
 * serializeAws_json1_1GetResourcePolicyRequest
 */
const se_GetResourcePolicyRequest = (input: GetResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1GetSnapshotRequest
 */
const se_GetSnapshotRequest = (input: GetSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
    ...(input.snapshotArn != null && { snapshotArn: input.snapshotArn }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
  };
};

/**
 * serializeAws_json1_1GetTableRestoreStatusRequest
 */
const se_GetTableRestoreStatusRequest = (input: GetTableRestoreStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.tableRestoreRequestId != null && { tableRestoreRequestId: input.tableRestoreRequestId }),
  };
};

/**
 * serializeAws_json1_1GetUsageLimitRequest
 */
const se_GetUsageLimitRequest = (input: GetUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.usageLimitId != null && { usageLimitId: input.usageLimitId }),
  };
};

/**
 * serializeAws_json1_1GetWorkgroupRequest
 */
const se_GetWorkgroupRequest = (input: GetWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1IamRoleArnList
 */
const se_IamRoleArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListEndpointAccessRequest
 */
const se_ListEndpointAccessRequest = (input: ListEndpointAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1ListNamespacesRequest
 */
const se_ListNamespacesRequest = (input: ListNamespacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListRecoveryPointsRequest
 */
const se_ListRecoveryPointsRequest = (input: ListRecoveryPointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespaceArn != null && { namespaceArn: input.namespaceArn }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListSnapshotsRequest
 */
const se_ListSnapshotsRequest = (input: ListSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespaceArn != null && { namespaceArn: input.namespaceArn }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListTableRestoreStatusRequest
 */
const se_ListTableRestoreStatusRequest = (input: ListTableRestoreStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1ListUsageLimitsRequest
 */
const se_ListUsageLimitsRequest = (input: ListUsageLimitsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.usageType != null && { usageType: input.usageType }),
  };
};

/**
 * serializeAws_json1_1ListWorkgroupsRequest
 */
const se_ListWorkgroupsRequest = (input: ListWorkgroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1LogExportList
 */
const se_LogExportList = (input: (LogExport | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.policy != null && { policy: input.policy }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1RestoreFromRecoveryPointRequest
 */
const se_RestoreFromRecoveryPointRequest = (input: RestoreFromRecoveryPointRequest, context: __SerdeContext): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.recoveryPointId != null && { recoveryPointId: input.recoveryPointId }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1RestoreFromSnapshotRequest
 */
const se_RestoreFromSnapshotRequest = (input: RestoreFromSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
    ...(input.snapshotArn != null && { snapshotArn: input.snapshotArn }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1RestoreTableFromSnapshotRequest
 */
const se_RestoreTableFromSnapshotRequest = (input: RestoreTableFromSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.activateCaseSensitiveIdentifier != null && {
      activateCaseSensitiveIdentifier: input.activateCaseSensitiveIdentifier,
    }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.newTableName != null && { newTableName: input.newTableName }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
    ...(input.sourceDatabaseName != null && { sourceDatabaseName: input.sourceDatabaseName }),
    ...(input.sourceSchemaName != null && { sourceSchemaName: input.sourceSchemaName }),
    ...(input.sourceTableName != null && { sourceTableName: input.sourceTableName }),
    ...(input.targetDatabaseName != null && { targetDatabaseName: input.targetDatabaseName }),
    ...(input.targetSchemaName != null && { targetSchemaName: input.targetSchemaName }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIdList
 */
const se_SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubnetIdList
 */
const se_SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateEndpointAccessRequest
 */
const se_UpdateEndpointAccessRequest = (input: UpdateEndpointAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
    ...(input.vpcSecurityGroupIds != null && {
      vpcSecurityGroupIds: se_VpcSecurityGroupIdList(input.vpcSecurityGroupIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateNamespaceRequest
 */
const se_UpdateNamespaceRequest = (input: UpdateNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.adminUserPassword != null && { adminUserPassword: input.adminUserPassword }),
    ...(input.adminUsername != null && { adminUsername: input.adminUsername }),
    ...(input.defaultIamRoleArn != null && { defaultIamRoleArn: input.defaultIamRoleArn }),
    ...(input.iamRoles != null && { iamRoles: se_IamRoleArnList(input.iamRoles, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logExports != null && { logExports: se_LogExportList(input.logExports, context) }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
  };
};

/**
 * serializeAws_json1_1UpdateSnapshotRequest
 */
const se_UpdateSnapshotRequest = (input: UpdateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.retentionPeriod != null && { retentionPeriod: input.retentionPeriod }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
  };
};

/**
 * serializeAws_json1_1UpdateUsageLimitRequest
 */
const se_UpdateUsageLimitRequest = (input: UpdateUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.amount != null && { amount: input.amount }),
    ...(input.breachAction != null && { breachAction: input.breachAction }),
    ...(input.usageLimitId != null && { usageLimitId: input.usageLimitId }),
  };
};

/**
 * serializeAws_json1_1UpdateWorkgroupRequest
 */
const se_UpdateWorkgroupRequest = (input: UpdateWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.baseCapacity != null && { baseCapacity: input.baseCapacity }),
    ...(input.configParameters != null && {
      configParameters: se_ConfigParameterList(input.configParameters, context),
    }),
    ...(input.enhancedVpcRouting != null && { enhancedVpcRouting: input.enhancedVpcRouting }),
    ...(input.port != null && { port: input.port }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: se_SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetIdList(input.subnetIds, context) }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_json1_1VpcSecurityGroupIdList
 */
const se_VpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountIdList
 */
const de_AccountIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ConfigParameter
 */
const de_ConfigParameter = (output: any, context: __SerdeContext): ConfigParameter => {
  return {
    parameterKey: __expectString(output.parameterKey),
    parameterValue: __expectString(output.parameterValue),
  } as any;
};

/**
 * deserializeAws_json1_1ConfigParameterList
 */
const de_ConfigParameterList = (output: any, context: __SerdeContext): ConfigParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConvertRecoveryPointToSnapshotResponse
 */
const de_ConvertRecoveryPointToSnapshotResponse = (
  output: any,
  context: __SerdeContext
): ConvertRecoveryPointToSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? de_Snapshot(output.snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateEndpointAccessResponse
 */
const de_CreateEndpointAccessResponse = (output: any, context: __SerdeContext): CreateEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? de_EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateNamespaceResponse
 */
const de_CreateNamespaceResponse = (output: any, context: __SerdeContext): CreateNamespaceResponse => {
  return {
    namespace: output.namespace != null ? de_Namespace(output.namespace, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSnapshotResponse
 */
const de_CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? de_Snapshot(output.snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateUsageLimitResponse
 */
const de_CreateUsageLimitResponse = (output: any, context: __SerdeContext): CreateUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? de_UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateWorkgroupResponse
 */
const de_CreateWorkgroupResponse = (output: any, context: __SerdeContext): CreateWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? de_Workgroup(output.workgroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteEndpointAccessResponse
 */
const de_DeleteEndpointAccessResponse = (output: any, context: __SerdeContext): DeleteEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? de_EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteNamespaceResponse
 */
const de_DeleteNamespaceResponse = (output: any, context: __SerdeContext): DeleteNamespaceResponse => {
  return {
    namespace: output.namespace != null ? de_Namespace(output.namespace, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyResponse
 */
const de_DeleteResourcePolicyResponse = (output: any, context: __SerdeContext): DeleteResourcePolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSnapshotResponse
 */
const de_DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? de_Snapshot(output.snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteUsageLimitResponse
 */
const de_DeleteUsageLimitResponse = (output: any, context: __SerdeContext): DeleteUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? de_UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteWorkgroupResponse
 */
const de_DeleteWorkgroupResponse = (output: any, context: __SerdeContext): DeleteWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? de_Workgroup(output.workgroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    address: __expectString(output.address),
    port: __expectInt32(output.port),
    vpcEndpoints: output.vpcEndpoints != null ? de_VpcEndpointList(output.vpcEndpoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EndpointAccess
 */
const de_EndpointAccess = (output: any, context: __SerdeContext): EndpointAccess => {
  return {
    address: __expectString(output.address),
    endpointArn: __expectString(output.endpointArn),
    endpointCreateTime:
      output.endpointCreateTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endpointCreateTime))
        : undefined,
    endpointName: __expectString(output.endpointName),
    endpointStatus: __expectString(output.endpointStatus),
    port: __expectInt32(output.port),
    subnetIds: output.subnetIds != null ? de_SubnetIdList(output.subnetIds, context) : undefined,
    vpcEndpoint: output.vpcEndpoint != null ? de_VpcEndpoint(output.vpcEndpoint, context) : undefined,
    vpcSecurityGroups:
      output.vpcSecurityGroups != null
        ? de_VpcSecurityGroupMembershipList(output.vpcSecurityGroups, context)
        : undefined,
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointAccessList
 */
const de_EndpointAccessList = (output: any, context: __SerdeContext): EndpointAccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointAccess(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetCredentialsResponse
 */
const de_GetCredentialsResponse = (output: any, context: __SerdeContext): GetCredentialsResponse => {
  return {
    dbPassword: __expectString(output.dbPassword),
    dbUser: __expectString(output.dbUser),
    expiration:
      output.expiration != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiration))) : undefined,
    nextRefreshTime:
      output.nextRefreshTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.nextRefreshTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetEndpointAccessResponse
 */
const de_GetEndpointAccessResponse = (output: any, context: __SerdeContext): GetEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? de_EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNamespaceResponse
 */
const de_GetNamespaceResponse = (output: any, context: __SerdeContext): GetNamespaceResponse => {
  return {
    namespace: output.namespace != null ? de_Namespace(output.namespace, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRecoveryPointResponse
 */
const de_GetRecoveryPointResponse = (output: any, context: __SerdeContext): GetRecoveryPointResponse => {
  return {
    recoveryPoint: output.recoveryPoint != null ? de_RecoveryPoint(output.recoveryPoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResourcePolicyResponse
 */
const de_GetResourcePolicyResponse = (output: any, context: __SerdeContext): GetResourcePolicyResponse => {
  return {
    resourcePolicy: output.resourcePolicy != null ? de_ResourcePolicy(output.resourcePolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSnapshotResponse
 */
const de_GetSnapshotResponse = (output: any, context: __SerdeContext): GetSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? de_Snapshot(output.snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTableRestoreStatusResponse
 */
const de_GetTableRestoreStatusResponse = (output: any, context: __SerdeContext): GetTableRestoreStatusResponse => {
  return {
    tableRestoreStatus:
      output.tableRestoreStatus != null ? de_TableRestoreStatus(output.tableRestoreStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetUsageLimitResponse
 */
const de_GetUsageLimitResponse = (output: any, context: __SerdeContext): GetUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? de_UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetWorkgroupResponse
 */
const de_GetWorkgroupResponse = (output: any, context: __SerdeContext): GetWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? de_Workgroup(output.workgroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IamRoleArnList
 */
const de_IamRoleArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1InsufficientCapacityException
 */
const de_InsufficientCapacityException = (output: any, context: __SerdeContext): InsufficientCapacityException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPaginationException
 */
const de_InvalidPaginationException = (output: any, context: __SerdeContext): InvalidPaginationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListEndpointAccessResponse
 */
const de_ListEndpointAccessResponse = (output: any, context: __SerdeContext): ListEndpointAccessResponse => {
  return {
    endpoints: output.endpoints != null ? de_EndpointAccessList(output.endpoints, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListNamespacesResponse
 */
const de_ListNamespacesResponse = (output: any, context: __SerdeContext): ListNamespacesResponse => {
  return {
    namespaces: output.namespaces != null ? de_NamespaceList(output.namespaces, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListRecoveryPointsResponse
 */
const de_ListRecoveryPointsResponse = (output: any, context: __SerdeContext): ListRecoveryPointsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recoveryPoints: output.recoveryPoints != null ? de_RecoveryPointList(output.recoveryPoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSnapshotsResponse
 */
const de_ListSnapshotsResponse = (output: any, context: __SerdeContext): ListSnapshotsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    snapshots: output.snapshots != null ? de_SnapshotList(output.snapshots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTableRestoreStatusResponse
 */
const de_ListTableRestoreStatusResponse = (output: any, context: __SerdeContext): ListTableRestoreStatusResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tableRestoreStatuses:
      output.tableRestoreStatuses != null ? de_TableRestoreStatusList(output.tableRestoreStatuses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUsageLimitsResponse
 */
const de_ListUsageLimitsResponse = (output: any, context: __SerdeContext): ListUsageLimitsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    usageLimits: output.usageLimits != null ? de_UsageLimits(output.usageLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWorkgroupsResponse
 */
const de_ListWorkgroupsResponse = (output: any, context: __SerdeContext): ListWorkgroupsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    workgroups: output.workgroups != null ? de_WorkgroupList(output.workgroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogExportList
 */
const de_LogExportList = (output: any, context: __SerdeContext): (LogExport | string)[] => {
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
 * deserializeAws_json1_1Namespace
 */
const de_Namespace = (output: any, context: __SerdeContext): Namespace => {
  return {
    adminUsername: __expectString(output.adminUsername),
    creationDate:
      output.creationDate != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationDate)) : undefined,
    dbName: __expectString(output.dbName),
    defaultIamRoleArn: __expectString(output.defaultIamRoleArn),
    iamRoles: output.iamRoles != null ? de_IamRoleArnList(output.iamRoles, context) : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
    logExports: output.logExports != null ? de_LogExportList(output.logExports, context) : undefined,
    namespaceArn: __expectString(output.namespaceArn),
    namespaceId: __expectString(output.namespaceId),
    namespaceName: __expectString(output.namespaceName),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1NamespaceList
 */
const de_NamespaceList = (output: any, context: __SerdeContext): Namespace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Namespace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    availabilityZone: __expectString(output.availabilityZone),
    networkInterfaceId: __expectString(output.networkInterfaceId),
    privateIpAddress: __expectString(output.privateIpAddress),
    subnetId: __expectString(output.subnetId),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterfaceList
 */
const de_NetworkInterfaceList = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {
    resourcePolicy: output.resourcePolicy != null ? de_ResourcePolicy(output.resourcePolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RecoveryPoint
 */
const de_RecoveryPoint = (output: any, context: __SerdeContext): RecoveryPoint => {
  return {
    namespaceArn: __expectString(output.namespaceArn),
    namespaceName: __expectString(output.namespaceName),
    recoveryPointCreateTime:
      output.recoveryPointCreateTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.recoveryPointCreateTime))
        : undefined,
    recoveryPointId: __expectString(output.recoveryPointId),
    totalSizeInMegaBytes: __limitedParseDouble(output.totalSizeInMegaBytes),
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

/**
 * deserializeAws_json1_1RecoveryPointList
 */
const de_RecoveryPointList = (output: any, context: __SerdeContext): RecoveryPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicy
 */
const de_ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    policy: __expectString(output.policy),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1RestoreFromRecoveryPointResponse
 */
const de_RestoreFromRecoveryPointResponse = (
  output: any,
  context: __SerdeContext
): RestoreFromRecoveryPointResponse => {
  return {
    namespace: output.namespace != null ? de_Namespace(output.namespace, context) : undefined,
    recoveryPointId: __expectString(output.recoveryPointId),
  } as any;
};

/**
 * deserializeAws_json1_1RestoreFromSnapshotResponse
 */
const de_RestoreFromSnapshotResponse = (output: any, context: __SerdeContext): RestoreFromSnapshotResponse => {
  return {
    namespace: output.namespace != null ? de_Namespace(output.namespace, context) : undefined,
    ownerAccount: __expectString(output.ownerAccount),
    snapshotName: __expectString(output.snapshotName),
  } as any;
};

/**
 * deserializeAws_json1_1RestoreTableFromSnapshotResponse
 */
const de_RestoreTableFromSnapshotResponse = (
  output: any,
  context: __SerdeContext
): RestoreTableFromSnapshotResponse => {
  return {
    tableRestoreStatus:
      output.tableRestoreStatus != null ? de_TableRestoreStatus(output.tableRestoreStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIdList
 */
const de_SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    accountsWithProvisionedRestoreAccess:
      output.accountsWithProvisionedRestoreAccess != null
        ? de_AccountIdList(output.accountsWithProvisionedRestoreAccess, context)
        : undefined,
    accountsWithRestoreAccess:
      output.accountsWithRestoreAccess != null
        ? de_AccountIdList(output.accountsWithRestoreAccess, context)
        : undefined,
    actualIncrementalBackupSizeInMegaBytes: __limitedParseDouble(output.actualIncrementalBackupSizeInMegaBytes),
    adminUsername: __expectString(output.adminUsername),
    backupProgressInMegaBytes: __limitedParseDouble(output.backupProgressInMegaBytes),
    currentBackupRateInMegaBytesPerSecond: __limitedParseDouble(output.currentBackupRateInMegaBytesPerSecond),
    elapsedTimeInSeconds: __expectLong(output.elapsedTimeInSeconds),
    estimatedSecondsToCompletion: __expectLong(output.estimatedSecondsToCompletion),
    kmsKeyId: __expectString(output.kmsKeyId),
    namespaceArn: __expectString(output.namespaceArn),
    namespaceName: __expectString(output.namespaceName),
    ownerAccount: __expectString(output.ownerAccount),
    snapshotArn: __expectString(output.snapshotArn),
    snapshotCreateTime:
      output.snapshotCreateTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.snapshotCreateTime))
        : undefined,
    snapshotName: __expectString(output.snapshotName),
    snapshotRemainingDays: __expectInt32(output.snapshotRemainingDays),
    snapshotRetentionPeriod: __expectInt32(output.snapshotRetentionPeriod),
    snapshotRetentionStartTime:
      output.snapshotRetentionStartTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.snapshotRetentionStartTime))
        : undefined,
    status: __expectString(output.status),
    totalBackupSizeInMegaBytes: __limitedParseDouble(output.totalBackupSizeInMegaBytes),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotList
 */
const de_SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Snapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetIdList
 */
const de_SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1TableRestoreStatus
 */
const de_TableRestoreStatus = (output: any, context: __SerdeContext): TableRestoreStatus => {
  return {
    message: __expectString(output.message),
    namespaceName: __expectString(output.namespaceName),
    newTableName: __expectString(output.newTableName),
    progressInMegaBytes: __expectLong(output.progressInMegaBytes),
    requestTime:
      output.requestTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.requestTime)))
        : undefined,
    snapshotName: __expectString(output.snapshotName),
    sourceDatabaseName: __expectString(output.sourceDatabaseName),
    sourceSchemaName: __expectString(output.sourceSchemaName),
    sourceTableName: __expectString(output.sourceTableName),
    status: __expectString(output.status),
    tableRestoreRequestId: __expectString(output.tableRestoreRequestId),
    targetDatabaseName: __expectString(output.targetDatabaseName),
    targetSchemaName: __expectString(output.targetSchemaName),
    totalDataInMegaBytes: __expectLong(output.totalDataInMegaBytes),
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

/**
 * deserializeAws_json1_1TableRestoreStatusList
 */
const de_TableRestoreStatusList = (output: any, context: __SerdeContext): TableRestoreStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableRestoreStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateEndpointAccessResponse
 */
const de_UpdateEndpointAccessResponse = (output: any, context: __SerdeContext): UpdateEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? de_EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateNamespaceResponse
 */
const de_UpdateNamespaceResponse = (output: any, context: __SerdeContext): UpdateNamespaceResponse => {
  return {
    namespace: output.namespace != null ? de_Namespace(output.namespace, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSnapshotResponse
 */
const de_UpdateSnapshotResponse = (output: any, context: __SerdeContext): UpdateSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? de_Snapshot(output.snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUsageLimitResponse
 */
const de_UpdateUsageLimitResponse = (output: any, context: __SerdeContext): UpdateUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? de_UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateWorkgroupResponse
 */
const de_UpdateWorkgroupResponse = (output: any, context: __SerdeContext): UpdateWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? de_Workgroup(output.workgroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsageLimit
 */
const de_UsageLimit = (output: any, context: __SerdeContext): UsageLimit => {
  return {
    amount: __expectLong(output.amount),
    breachAction: __expectString(output.breachAction),
    period: __expectString(output.period),
    resourceArn: __expectString(output.resourceArn),
    usageLimitArn: __expectString(output.usageLimitArn),
    usageLimitId: __expectString(output.usageLimitId),
    usageType: __expectString(output.usageType),
  } as any;
};

/**
 * deserializeAws_json1_1UsageLimits
 */
const de_UsageLimits = (output: any, context: __SerdeContext): UsageLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageLimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1VpcEndpoint
 */
const de_VpcEndpoint = (output: any, context: __SerdeContext): VpcEndpoint => {
  return {
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaceList(output.networkInterfaces, context) : undefined,
    vpcEndpointId: __expectString(output.vpcEndpointId),
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_json1_1VpcEndpointList
 */
const de_VpcEndpointList = (output: any, context: __SerdeContext): VpcEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcSecurityGroupMembership
 */
const de_VpcSecurityGroupMembership = (output: any, context: __SerdeContext): VpcSecurityGroupMembership => {
  return {
    status: __expectString(output.status),
    vpcSecurityGroupId: __expectString(output.vpcSecurityGroupId),
  } as any;
};

/**
 * deserializeAws_json1_1VpcSecurityGroupMembershipList
 */
const de_VpcSecurityGroupMembershipList = (output: any, context: __SerdeContext): VpcSecurityGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcSecurityGroupMembership(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Workgroup
 */
const de_Workgroup = (output: any, context: __SerdeContext): Workgroup => {
  return {
    baseCapacity: __expectInt32(output.baseCapacity),
    configParameters:
      output.configParameters != null ? de_ConfigParameterList(output.configParameters, context) : undefined,
    creationDate:
      output.creationDate != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationDate)) : undefined,
    endpoint: output.endpoint != null ? de_Endpoint(output.endpoint, context) : undefined,
    enhancedVpcRouting: __expectBoolean(output.enhancedVpcRouting),
    namespaceName: __expectString(output.namespaceName),
    port: __expectInt32(output.port),
    publiclyAccessible: __expectBoolean(output.publiclyAccessible),
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIdList(output.securityGroupIds, context) : undefined,
    status: __expectString(output.status),
    subnetIds: output.subnetIds != null ? de_SubnetIdList(output.subnetIds, context) : undefined,
    workgroupArn: __expectString(output.workgroupArn),
    workgroupId: __expectString(output.workgroupId),
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

/**
 * deserializeAws_json1_1WorkgroupList
 */
const de_WorkgroupList = (output: any, context: __SerdeContext): Workgroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Workgroup(entry, context);
    });
  return retVal;
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
    "x-amz-target": `RedshiftServerless.${operation}`,
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
