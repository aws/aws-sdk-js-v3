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
  parseRfc3339DateTime as __parseRfc3339DateTime,
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

export const serializeAws_json1_1ConvertRecoveryPointToSnapshotCommand = async (
  input: ConvertRecoveryPointToSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ConvertRecoveryPointToSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ConvertRecoveryPointToSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEndpointAccessCommand = async (
  input: CreateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.CreateEndpointAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNamespaceCommand = async (
  input: CreateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.CreateNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.CreateSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUsageLimitCommand = async (
  input: CreateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.CreateUsageLimit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkgroupCommand = async (
  input: CreateWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.CreateWorkgroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEndpointAccessCommand = async (
  input: DeleteEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.DeleteEndpointAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.DeleteNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.DeleteSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUsageLimitCommand = async (
  input: DeleteUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.DeleteUsageLimit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkgroupCommand = async (
  input: DeleteWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.DeleteWorkgroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCredentialsCommand = async (
  input: GetCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCredentialsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEndpointAccessCommand = async (
  input: GetEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetEndpointAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNamespaceCommand = async (
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRecoveryPointCommand = async (
  input: GetRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetRecoveryPoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRecoveryPointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSnapshotCommand = async (
  input: GetSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableRestoreStatusCommand = async (
  input: GetTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetTableRestoreStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableRestoreStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUsageLimitCommand = async (
  input: GetUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetUsageLimit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkgroupCommand = async (
  input: GetWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.GetWorkgroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEndpointAccessCommand = async (
  input: ListEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListEndpointAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListNamespaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNamespacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRecoveryPointsCommand = async (
  input: ListRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListRecoveryPoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRecoveryPointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSnapshotsCommand = async (
  input: ListSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTableRestoreStatusCommand = async (
  input: ListTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListTableRestoreStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTableRestoreStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsageLimitsCommand = async (
  input: ListUsageLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListUsageLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsageLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkgroupsCommand = async (
  input: ListWorkgroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.ListWorkgroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkgroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreFromRecoveryPointCommand = async (
  input: RestoreFromRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.RestoreFromRecoveryPoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreFromRecoveryPointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreFromSnapshotCommand = async (
  input: RestoreFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.RestoreFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreTableFromSnapshotCommand = async (
  input: RestoreTableFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.RestoreTableFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreTableFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.TagResource",
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
    "x-amz-target": "RedshiftServerless.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEndpointAccessCommand = async (
  input: UpdateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.UpdateEndpointAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEndpointAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNamespaceCommand = async (
  input: UpdateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.UpdateNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.UpdateSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUsageLimitCommand = async (
  input: UpdateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.UpdateUsageLimit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUsageLimitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWorkgroupCommand = async (
  input: UpdateWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftServerless.UpdateWorkgroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWorkgroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConvertRecoveryPointToSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConvertRecoveryPointToSnapshotResponse(data, context);
  const response: ConvertRecoveryPointToSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEndpointAccessResponse(data, context);
  const response: CreateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEndpointAccessCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNamespaceResponse(data, context);
  const response: CreateNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNamespaceCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotResponse(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUsageLimitResponse(data, context);
  const response: CreateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUsageLimitCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkgroupResponse(data, context);
  const response: CreateWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkgroupCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InsufficientCapacityException":
    case "com.amazonaws.redshiftserverless#InsufficientCapacityException":
      throw await deserializeAws_json1_1InsufficientCapacityExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEndpointAccessResponse(data, context);
  const response: DeleteEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEndpointAccessCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNamespaceCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSnapshotResponse(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUsageLimitResponse(data, context);
  const response: DeleteUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUsageLimitCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkgroupResponse(data, context);
  const response: DeleteWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkgroupCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCredentialsResponse(data, context);
  const response: GetCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCredentialsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEndpointAccessResponse(data, context);
  const response: GetEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEndpointAccessCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNamespaceResponse(data, context);
  const response: GetNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNamespaceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRecoveryPointResponse(data, context);
  const response: GetRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRecoveryPointCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSnapshotResponse(data, context);
  const response: GetSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableRestoreStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableRestoreStatusResponse(data, context);
  const response: GetTableRestoreStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableRestoreStatusCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUsageLimitResponse(data, context);
  const response: GetUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUsageLimitCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkgroupResponse(data, context);
  const response: GetWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkgroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEndpointAccessResponse(data, context);
  const response: ListEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEndpointAccessCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNamespacesResponse(data, context);
  const response: ListNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNamespacesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRecoveryPointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRecoveryPointsResponse(data, context);
  const response: ListRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRecoveryPointsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSnapshotsResponse(data, context);
  const response: ListSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTableRestoreStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTableRestoreStatusResponse(data, context);
  const response: ListTableRestoreStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTableRestoreStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidPaginationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.redshiftserverless#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListUsageLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUsageLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsageLimitsResponse(data, context);
  const response: ListUsageLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUsageLimitsCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidPaginationException":
    case "com.amazonaws.redshiftserverless#InvalidPaginationException":
      throw await deserializeAws_json1_1InvalidPaginationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListWorkgroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkgroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkgroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkgroupsResponse(data, context);
  const response: ListWorkgroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkgroupsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RestoreFromRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreFromRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreFromRecoveryPointResponse(data, context);
  const response: RestoreFromRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreFromRecoveryPointCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RestoreFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreFromSnapshotResponse(data, context);
  const response: RestoreFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreFromSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RestoreTableFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreTableFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreTableFromSnapshotResponse(data, context);
  const response: RestoreTableFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreTableFromSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.redshiftserverless#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.redshiftserverless#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEndpointAccessResponse(data, context);
  const response: UpdateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEndpointAccessCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNamespaceResponse(data, context);
  const response: UpdateNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNamespaceCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSnapshotResponse(data, context);
  const response: UpdateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUsageLimitResponse(data, context);
  const response: UpdateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUsageLimitCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWorkgroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWorkgroupResponse(data, context);
  const response: UpdateWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWorkgroupCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InsufficientCapacityException":
    case "com.amazonaws.redshiftserverless#InsufficientCapacityException":
      throw await deserializeAws_json1_1InsufficientCapacityExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientCapacityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientCapacityException(body, context);
  const exception = new InsufficientCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPaginationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationException(body, context);
  const exception = new InvalidPaginationException({
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

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ConfigParameter = (input: ConfigParameter, context: __SerdeContext): any => {
  return {
    ...(input.parameterKey != null && { parameterKey: input.parameterKey }),
    ...(input.parameterValue != null && { parameterValue: input.parameterValue }),
  };
};

const serializeAws_json1_1ConfigParameterList = (input: ConfigParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ConfigParameter(entry, context);
    });
};

const serializeAws_json1_1ConvertRecoveryPointToSnapshotRequest = (
  input: ConvertRecoveryPointToSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recoveryPointId != null && { recoveryPointId: input.recoveryPointId }),
    ...(input.retentionPeriod != null && { retentionPeriod: input.retentionPeriod }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateEndpointAccessRequest = (
  input: CreateEndpointAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_json1_1SubnetIdList(input.subnetIds, context) }),
    ...(input.vpcSecurityGroupIds != null && {
      vpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.vpcSecurityGroupIds, context),
    }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1CreateNamespaceRequest = (input: CreateNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.adminUserPassword != null && { adminUserPassword: input.adminUserPassword }),
    ...(input.adminUsername != null && { adminUsername: input.adminUsername }),
    ...(input.dbName != null && { dbName: input.dbName }),
    ...(input.defaultIamRoleArn != null && { defaultIamRoleArn: input.defaultIamRoleArn }),
    ...(input.iamRoles != null && { iamRoles: serializeAws_json1_1IamRoleArnList(input.iamRoles, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logExports != null && { logExports: serializeAws_json1_1LogExportList(input.logExports, context) }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.retentionPeriod != null && { retentionPeriod: input.retentionPeriod }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateUsageLimitRequest = (input: CreateUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.amount != null && { amount: input.amount }),
    ...(input.breachAction != null && { breachAction: input.breachAction }),
    ...(input.period != null && { period: input.period }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.usageType != null && { usageType: input.usageType }),
  };
};

const serializeAws_json1_1CreateWorkgroupRequest = (input: CreateWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.baseCapacity != null && { baseCapacity: input.baseCapacity }),
    ...(input.configParameters != null && {
      configParameters: serializeAws_json1_1ConfigParameterList(input.configParameters, context),
    }),
    ...(input.enhancedVpcRouting != null && { enhancedVpcRouting: input.enhancedVpcRouting }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.port != null && { port: input.port }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_json1_1SubnetIdList(input.subnetIds, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1DeleteEndpointAccessRequest = (
  input: DeleteEndpointAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
  };
};

const serializeAws_json1_1DeleteNamespaceRequest = (input: DeleteNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.finalSnapshotName != null && { finalSnapshotName: input.finalSnapshotName }),
    ...(input.finalSnapshotRetentionPeriod != null && {
      finalSnapshotRetentionPeriod: input.finalSnapshotRetentionPeriod,
    }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
  };
};

const serializeAws_json1_1DeleteUsageLimitRequest = (input: DeleteUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.usageLimitId != null && { usageLimitId: input.usageLimitId }),
  };
};

const serializeAws_json1_1DeleteWorkgroupRequest = (input: DeleteWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1GetCredentialsRequest = (input: GetCredentialsRequest, context: __SerdeContext): any => {
  return {
    ...(input.dbName != null && { dbName: input.dbName }),
    ...(input.durationSeconds != null && { durationSeconds: input.durationSeconds }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1GetEndpointAccessRequest = (
  input: GetEndpointAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
  };
};

const serializeAws_json1_1GetNamespaceRequest = (input: GetNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
  };
};

const serializeAws_json1_1GetRecoveryPointRequest = (input: GetRecoveryPointRequest, context: __SerdeContext): any => {
  return {
    ...(input.recoveryPointId != null && { recoveryPointId: input.recoveryPointId }),
  };
};

const serializeAws_json1_1GetResourcePolicyRequest = (
  input: GetResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1GetSnapshotRequest = (input: GetSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
    ...(input.snapshotArn != null && { snapshotArn: input.snapshotArn }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
  };
};

const serializeAws_json1_1GetTableRestoreStatusRequest = (
  input: GetTableRestoreStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.tableRestoreRequestId != null && { tableRestoreRequestId: input.tableRestoreRequestId }),
  };
};

const serializeAws_json1_1GetUsageLimitRequest = (input: GetUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.usageLimitId != null && { usageLimitId: input.usageLimitId }),
  };
};

const serializeAws_json1_1GetWorkgroupRequest = (input: GetWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1IamRoleArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListEndpointAccessRequest = (
  input: ListEndpointAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1ListNamespacesRequest = (input: ListNamespacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListRecoveryPointsRequest = (
  input: ListRecoveryPointsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespaceArn != null && { namespaceArn: input.namespaceArn }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListSnapshotsRequest = (input: ListSnapshotsRequest, context: __SerdeContext): any => {
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

const serializeAws_json1_1ListTableRestoreStatusRequest = (
  input: ListTableRestoreStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1ListUsageLimitsRequest = (input: ListUsageLimitsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.usageType != null && { usageType: input.usageType }),
  };
};

const serializeAws_json1_1ListWorkgroupsRequest = (input: ListWorkgroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1LogExportList = (input: (LogExport | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.policy != null && { policy: input.policy }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1RestoreFromRecoveryPointRequest = (
  input: RestoreFromRecoveryPointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.recoveryPointId != null && { recoveryPointId: input.recoveryPointId }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1RestoreFromSnapshotRequest = (
  input: RestoreFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
    ...(input.snapshotArn != null && { snapshotArn: input.snapshotArn }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1RestoreTableFromSnapshotRequest = (
  input: RestoreTableFromSnapshotRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateEndpointAccessRequest = (
  input: UpdateEndpointAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpointName != null && { endpointName: input.endpointName }),
    ...(input.vpcSecurityGroupIds != null && {
      vpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.vpcSecurityGroupIds, context),
    }),
  };
};

const serializeAws_json1_1UpdateNamespaceRequest = (input: UpdateNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.adminUserPassword != null && { adminUserPassword: input.adminUserPassword }),
    ...(input.adminUsername != null && { adminUsername: input.adminUsername }),
    ...(input.defaultIamRoleArn != null && { defaultIamRoleArn: input.defaultIamRoleArn }),
    ...(input.iamRoles != null && { iamRoles: serializeAws_json1_1IamRoleArnList(input.iamRoles, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logExports != null && { logExports: serializeAws_json1_1LogExportList(input.logExports, context) }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
  };
};

const serializeAws_json1_1UpdateSnapshotRequest = (input: UpdateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.retentionPeriod != null && { retentionPeriod: input.retentionPeriod }),
    ...(input.snapshotName != null && { snapshotName: input.snapshotName }),
  };
};

const serializeAws_json1_1UpdateUsageLimitRequest = (input: UpdateUsageLimitRequest, context: __SerdeContext): any => {
  return {
    ...(input.amount != null && { amount: input.amount }),
    ...(input.breachAction != null && { breachAction: input.breachAction }),
    ...(input.usageLimitId != null && { usageLimitId: input.usageLimitId }),
  };
};

const serializeAws_json1_1UpdateWorkgroupRequest = (input: UpdateWorkgroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.baseCapacity != null && { baseCapacity: input.baseCapacity }),
    ...(input.configParameters != null && {
      configParameters: serializeAws_json1_1ConfigParameterList(input.configParameters, context),
    }),
    ...(input.enhancedVpcRouting != null && { enhancedVpcRouting: input.enhancedVpcRouting }),
    ...(input.port != null && { port: input.port }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_json1_1SubnetIdList(input.subnetIds, context) }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

const serializeAws_json1_1VpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AccountIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ConfigParameter = (output: any, context: __SerdeContext): ConfigParameter => {
  return {
    parameterKey: __expectString(output.parameterKey),
    parameterValue: __expectString(output.parameterValue),
  } as any;
};

const deserializeAws_json1_1ConfigParameterList = (output: any, context: __SerdeContext): ConfigParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConvertRecoveryPointToSnapshotResponse = (
  output: any,
  context: __SerdeContext
): ConvertRecoveryPointToSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? deserializeAws_json1_1Snapshot(output.snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEndpointAccessResponse = (
  output: any,
  context: __SerdeContext
): CreateEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? deserializeAws_json1_1EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreateNamespaceResponse => {
  return {
    namespace: output.namespace != null ? deserializeAws_json1_1Namespace(output.namespace, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? deserializeAws_json1_1Snapshot(output.snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateUsageLimitResponse = (
  output: any,
  context: __SerdeContext
): CreateUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? deserializeAws_json1_1UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateWorkgroupResponse = (
  output: any,
  context: __SerdeContext
): CreateWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? deserializeAws_json1_1Workgroup(output.workgroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteEndpointAccessResponse = (
  output: any,
  context: __SerdeContext
): DeleteEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? deserializeAws_json1_1EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteNamespaceResponse = (
  output: any,
  context: __SerdeContext
): DeleteNamespaceResponse => {
  return {
    namespace: output.namespace != null ? deserializeAws_json1_1Namespace(output.namespace, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? deserializeAws_json1_1Snapshot(output.snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteUsageLimitResponse = (
  output: any,
  context: __SerdeContext
): DeleteUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? deserializeAws_json1_1UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteWorkgroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? deserializeAws_json1_1Workgroup(output.workgroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    address: __expectString(output.address),
    port: __expectInt32(output.port),
    vpcEndpoints:
      output.vpcEndpoints != null ? deserializeAws_json1_1VpcEndpointList(output.vpcEndpoints, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EndpointAccess = (output: any, context: __SerdeContext): EndpointAccess => {
  return {
    address: __expectString(output.address),
    endpointArn: __expectString(output.endpointArn),
    endpointCreateTime:
      output.endpointCreateTime != null
        ? __expectNonNull(__parseRfc3339DateTime(output.endpointCreateTime))
        : undefined,
    endpointName: __expectString(output.endpointName),
    endpointStatus: __expectString(output.endpointStatus),
    port: __expectInt32(output.port),
    subnetIds: output.subnetIds != null ? deserializeAws_json1_1SubnetIdList(output.subnetIds, context) : undefined,
    vpcEndpoint:
      output.vpcEndpoint != null ? deserializeAws_json1_1VpcEndpoint(output.vpcEndpoint, context) : undefined,
    vpcSecurityGroups:
      output.vpcSecurityGroups != null
        ? deserializeAws_json1_1VpcSecurityGroupMembershipList(output.vpcSecurityGroups, context)
        : undefined,
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

const deserializeAws_json1_1EndpointAccessList = (output: any, context: __SerdeContext): EndpointAccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EndpointAccess(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetCredentialsResponse = (output: any, context: __SerdeContext): GetCredentialsResponse => {
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

const deserializeAws_json1_1GetEndpointAccessResponse = (
  output: any,
  context: __SerdeContext
): GetEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? deserializeAws_json1_1EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetNamespaceResponse = (output: any, context: __SerdeContext): GetNamespaceResponse => {
  return {
    namespace: output.namespace != null ? deserializeAws_json1_1Namespace(output.namespace, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetRecoveryPointResponse = (
  output: any,
  context: __SerdeContext
): GetRecoveryPointResponse => {
  return {
    recoveryPoint:
      output.recoveryPoint != null ? deserializeAws_json1_1RecoveryPoint(output.recoveryPoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyResponse => {
  return {
    resourcePolicy:
      output.resourcePolicy != null ? deserializeAws_json1_1ResourcePolicy(output.resourcePolicy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetSnapshotResponse = (output: any, context: __SerdeContext): GetSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? deserializeAws_json1_1Snapshot(output.snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableRestoreStatusResponse = (
  output: any,
  context: __SerdeContext
): GetTableRestoreStatusResponse => {
  return {
    tableRestoreStatus:
      output.tableRestoreStatus != null
        ? deserializeAws_json1_1TableRestoreStatus(output.tableRestoreStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetUsageLimitResponse = (output: any, context: __SerdeContext): GetUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? deserializeAws_json1_1UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkgroupResponse = (output: any, context: __SerdeContext): GetWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? deserializeAws_json1_1Workgroup(output.workgroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1IamRoleArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InsufficientCapacityException = (
  output: any,
  context: __SerdeContext
): InsufficientCapacityException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPaginationException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListEndpointAccessResponse = (
  output: any,
  context: __SerdeContext
): ListEndpointAccessResponse => {
  return {
    endpoints:
      output.endpoints != null ? deserializeAws_json1_1EndpointAccessList(output.endpoints, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListNamespacesResponse = (output: any, context: __SerdeContext): ListNamespacesResponse => {
  return {
    namespaces: output.namespaces != null ? deserializeAws_json1_1NamespaceList(output.namespaces, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListRecoveryPointsResponse = (
  output: any,
  context: __SerdeContext
): ListRecoveryPointsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recoveryPoints:
      output.recoveryPoints != null
        ? deserializeAws_json1_1RecoveryPointList(output.recoveryPoints, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSnapshotsResponse = (output: any, context: __SerdeContext): ListSnapshotsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    snapshots: output.snapshots != null ? deserializeAws_json1_1SnapshotList(output.snapshots, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTableRestoreStatusResponse = (
  output: any,
  context: __SerdeContext
): ListTableRestoreStatusResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tableRestoreStatuses:
      output.tableRestoreStatuses != null
        ? deserializeAws_json1_1TableRestoreStatusList(output.tableRestoreStatuses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListUsageLimitsResponse = (
  output: any,
  context: __SerdeContext
): ListUsageLimitsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    usageLimits:
      output.usageLimits != null ? deserializeAws_json1_1UsageLimits(output.usageLimits, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkgroupsResponse = (output: any, context: __SerdeContext): ListWorkgroupsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    workgroups: output.workgroups != null ? deserializeAws_json1_1WorkgroupList(output.workgroups, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LogExportList = (output: any, context: __SerdeContext): (LogExport | string)[] => {
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

const deserializeAws_json1_1Namespace = (output: any, context: __SerdeContext): Namespace => {
  return {
    adminUsername: __expectString(output.adminUsername),
    creationDate:
      output.creationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.creationDate)) : undefined,
    dbName: __expectString(output.dbName),
    defaultIamRoleArn: __expectString(output.defaultIamRoleArn),
    iamRoles: output.iamRoles != null ? deserializeAws_json1_1IamRoleArnList(output.iamRoles, context) : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
    logExports: output.logExports != null ? deserializeAws_json1_1LogExportList(output.logExports, context) : undefined,
    namespaceArn: __expectString(output.namespaceArn),
    namespaceId: __expectString(output.namespaceId),
    namespaceName: __expectString(output.namespaceName),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1NamespaceList = (output: any, context: __SerdeContext): Namespace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Namespace(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    availabilityZone: __expectString(output.availabilityZone),
    networkInterfaceId: __expectString(output.networkInterfaceId),
    privateIpAddress: __expectString(output.privateIpAddress),
    subnetId: __expectString(output.subnetId),
  } as any;
};

const deserializeAws_json1_1NetworkInterfaceList = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NetworkInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    resourcePolicy:
      output.resourcePolicy != null ? deserializeAws_json1_1ResourcePolicy(output.resourcePolicy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RecoveryPoint = (output: any, context: __SerdeContext): RecoveryPoint => {
  return {
    namespaceArn: __expectString(output.namespaceArn),
    namespaceName: __expectString(output.namespaceName),
    recoveryPointCreateTime:
      output.recoveryPointCreateTime != null
        ? __expectNonNull(__parseRfc3339DateTime(output.recoveryPointCreateTime))
        : undefined,
    recoveryPointId: __expectString(output.recoveryPointId),
    totalSizeInMegaBytes: __limitedParseDouble(output.totalSizeInMegaBytes),
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

const deserializeAws_json1_1RecoveryPointList = (output: any, context: __SerdeContext): RecoveryPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecoveryPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

const deserializeAws_json1_1ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    policy: __expectString(output.policy),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_1RestoreFromRecoveryPointResponse = (
  output: any,
  context: __SerdeContext
): RestoreFromRecoveryPointResponse => {
  return {
    namespace: output.namespace != null ? deserializeAws_json1_1Namespace(output.namespace, context) : undefined,
    recoveryPointId: __expectString(output.recoveryPointId),
  } as any;
};

const deserializeAws_json1_1RestoreFromSnapshotResponse = (
  output: any,
  context: __SerdeContext
): RestoreFromSnapshotResponse => {
  return {
    namespace: output.namespace != null ? deserializeAws_json1_1Namespace(output.namespace, context) : undefined,
    ownerAccount: __expectString(output.ownerAccount),
    snapshotName: __expectString(output.snapshotName),
  } as any;
};

const deserializeAws_json1_1RestoreTableFromSnapshotResponse = (
  output: any,
  context: __SerdeContext
): RestoreTableFromSnapshotResponse => {
  return {
    tableRestoreStatus:
      output.tableRestoreStatus != null
        ? deserializeAws_json1_1TableRestoreStatus(output.tableRestoreStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    accountsWithProvisionedRestoreAccess:
      output.accountsWithProvisionedRestoreAccess != null
        ? deserializeAws_json1_1AccountIdList(output.accountsWithProvisionedRestoreAccess, context)
        : undefined,
    accountsWithRestoreAccess:
      output.accountsWithRestoreAccess != null
        ? deserializeAws_json1_1AccountIdList(output.accountsWithRestoreAccess, context)
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
        ? __expectNonNull(__parseRfc3339DateTime(output.snapshotCreateTime))
        : undefined,
    snapshotName: __expectString(output.snapshotName),
    snapshotRemainingDays: __expectInt32(output.snapshotRemainingDays),
    snapshotRetentionPeriod: __expectInt32(output.snapshotRetentionPeriod),
    snapshotRetentionStartTime:
      output.snapshotRetentionStartTime != null
        ? __expectNonNull(__parseRfc3339DateTime(output.snapshotRetentionStartTime))
        : undefined,
    status: __expectString(output.status),
    totalBackupSizeInMegaBytes: __limitedParseDouble(output.totalBackupSizeInMegaBytes),
  } as any;
};

const deserializeAws_json1_1SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Snapshot(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TableRestoreStatus = (output: any, context: __SerdeContext): TableRestoreStatus => {
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

const deserializeAws_json1_1TableRestoreStatusList = (output: any, context: __SerdeContext): TableRestoreStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableRestoreStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateEndpointAccessResponse = (
  output: any,
  context: __SerdeContext
): UpdateEndpointAccessResponse => {
  return {
    endpoint: output.endpoint != null ? deserializeAws_json1_1EndpointAccess(output.endpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateNamespaceResponse = (
  output: any,
  context: __SerdeContext
): UpdateNamespaceResponse => {
  return {
    namespace: output.namespace != null ? deserializeAws_json1_1Namespace(output.namespace, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateSnapshotResponse = (output: any, context: __SerdeContext): UpdateSnapshotResponse => {
  return {
    snapshot: output.snapshot != null ? deserializeAws_json1_1Snapshot(output.snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateUsageLimitResponse = (
  output: any,
  context: __SerdeContext
): UpdateUsageLimitResponse => {
  return {
    usageLimit: output.usageLimit != null ? deserializeAws_json1_1UsageLimit(output.usageLimit, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateWorkgroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateWorkgroupResponse => {
  return {
    workgroup: output.workgroup != null ? deserializeAws_json1_1Workgroup(output.workgroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UsageLimit = (output: any, context: __SerdeContext): UsageLimit => {
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

const deserializeAws_json1_1UsageLimits = (output: any, context: __SerdeContext): UsageLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UsageLimit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1VpcEndpoint = (output: any, context: __SerdeContext): VpcEndpoint => {
  return {
    networkInterfaces:
      output.networkInterfaces != null
        ? deserializeAws_json1_1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    vpcEndpointId: __expectString(output.vpcEndpointId),
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_json1_1VpcEndpointList = (output: any, context: __SerdeContext): VpcEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1VpcSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership => {
  return {
    status: __expectString(output.status),
    vpcSecurityGroupId: __expectString(output.vpcSecurityGroupId),
  } as any;
};

const deserializeAws_json1_1VpcSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcSecurityGroupMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Workgroup = (output: any, context: __SerdeContext): Workgroup => {
  return {
    baseCapacity: __expectInt32(output.baseCapacity),
    configParameters:
      output.configParameters != null
        ? deserializeAws_json1_1ConfigParameterList(output.configParameters, context)
        : undefined,
    creationDate:
      output.creationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.creationDate)) : undefined,
    endpoint: output.endpoint != null ? deserializeAws_json1_1Endpoint(output.endpoint, context) : undefined,
    enhancedVpcRouting: __expectBoolean(output.enhancedVpcRouting),
    namespaceName: __expectString(output.namespaceName),
    port: __expectInt32(output.port),
    publiclyAccessible: __expectBoolean(output.publiclyAccessible),
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_json1_1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    status: __expectString(output.status),
    subnetIds: output.subnetIds != null ? deserializeAws_json1_1SubnetIdList(output.subnetIds, context) : undefined,
    workgroupArn: __expectString(output.workgroupArn),
    workgroupId: __expectString(output.workgroupId),
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

const deserializeAws_json1_1WorkgroupList = (output: any, context: __SerdeContext): Workgroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Workgroup(entry, context);
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
