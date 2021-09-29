import { BatchUpdateClusterCommandInput, BatchUpdateClusterCommandOutput } from "../commands/BatchUpdateClusterCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "../commands/CopySnapshotCommand";
import { CreateACLCommandInput, CreateACLCommandOutput } from "../commands/CreateACLCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
} from "../commands/CreateParameterGroupCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import { CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput } from "../commands/CreateSubnetGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteACLCommandInput, DeleteACLCommandOutput } from "../commands/DeleteACLCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput,
} from "../commands/DeleteParameterGroupCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "../commands/DeleteSnapshotCommand";
import { DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput } from "../commands/DeleteSubnetGroupCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DescribeACLsCommandInput, DescribeACLsCommandOutput } from "../commands/DescribeACLsCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import {
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "../commands/DescribeEngineVersionsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "../commands/DescribeParameterGroupsCommand";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "../commands/DescribeParametersCommand";
import {
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "../commands/DescribeServiceUpdatesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import {
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "../commands/DescribeSubnetGroupsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "../commands/DescribeUsersCommand";
import { FailoverShardCommandInput, FailoverShardCommandOutput } from "../commands/FailoverShardCommand";
import {
  ListAllowedNodeTypeUpdatesCommandInput,
  ListAllowedNodeTypeUpdatesCommandOutput,
} from "../commands/ListAllowedNodeTypeUpdatesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  ResetParameterGroupCommandInput,
  ResetParameterGroupCommandOutput,
} from "../commands/ResetParameterGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateACLCommandInput, UpdateACLCommandOutput } from "../commands/UpdateACLCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "../commands/UpdateClusterCommand";
import {
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
} from "../commands/UpdateParameterGroupCommand";
import { UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput } from "../commands/UpdateSubnetGroupCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  ACL,
  ACLAlreadyExistsFault,
  ACLNotFoundFault,
  ACLPendingChanges,
  ACLQuotaExceededFault,
  ACLsUpdateStatus,
  APICallRateForCustomerExceededFault,
  Authentication,
  AuthenticationMode,
  AvailabilityZone,
  BatchUpdateClusterRequest,
  BatchUpdateClusterResponse,
  Cluster,
  ClusterAlreadyExistsFault,
  ClusterConfiguration,
  ClusterNotFoundFault,
  ClusterPendingUpdates,
  ClusterQuotaForCustomerExceededFault,
  CopySnapshotRequest,
  CopySnapshotResponse,
  CreateACLRequest,
  CreateACLResponse,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateParameterGroupRequest,
  CreateParameterGroupResponse,
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateSubnetGroupRequest,
  CreateSubnetGroupResponse,
  CreateUserRequest,
  CreateUserResponse,
  DefaultUserRequired,
  DeleteACLRequest,
  DeleteACLResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteParameterGroupRequest,
  DeleteParameterGroupResponse,
  DeleteSnapshotRequest,
  DeleteSnapshotResponse,
  DeleteSubnetGroupRequest,
  DeleteSubnetGroupResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DescribeACLsRequest,
  DescribeACLsResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeEngineVersionsRequest,
  DescribeEngineVersionsResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeParameterGroupsRequest,
  DescribeParameterGroupsResponse,
  DescribeParametersRequest,
  DescribeParametersResponse,
  DescribeServiceUpdatesRequest,
  DescribeServiceUpdatesResponse,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResponse,
  DescribeSubnetGroupsRequest,
  DescribeSubnetGroupsResponse,
  DescribeUsersRequest,
  DescribeUsersResponse,
  DuplicateUserNameFault,
  Endpoint,
  EngineVersionInfo,
  Event,
  FailoverShardRequest,
  FailoverShardResponse,
  Filter,
  InsufficientClusterCapacityFault,
  InvalidACLStateFault,
  InvalidARNFault,
  InvalidClusterStateFault,
  InvalidCredentialsException,
  InvalidKMSKeyFault,
  InvalidNodeStateFault,
  InvalidParameterCombinationException,
  InvalidParameterGroupStateFault,
  InvalidParameterValueException,
  InvalidSnapshotStateFault,
  InvalidSubnet,
  InvalidUserStateFault,
  InvalidVPCNetworkStateFault,
  ListAllowedNodeTypeUpdatesRequest,
  ListAllowedNodeTypeUpdatesResponse,
  ListTagsRequest,
  ListTagsResponse,
  NoOperationFault,
  Node,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  Parameter,
  ParameterGroup,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupNotFoundFault,
  ParameterGroupQuotaExceededFault,
  ParameterNameValue,
  PendingModifiedServiceUpdate,
  ReplicaConfigurationRequest,
  ResetParameterGroupRequest,
  ResetParameterGroupResponse,
  ReshardingStatus,
  SecurityGroupMembership,
  ServiceLinkedRoleNotFoundFault,
  ServiceUpdate,
  ServiceUpdateNotFoundFault,
  ServiceUpdateRequest,
  ServiceUpdateStatus,
  Shard,
  ShardConfiguration,
  ShardConfigurationRequest,
  ShardDetail,
  ShardNotFoundFault,
  ShardsPerClusterQuotaExceededFault,
  SlotMigration,
  Snapshot,
  SnapshotAlreadyExistsFault,
  SnapshotNotFoundFault,
  SnapshotQuotaExceededFault,
  Subnet,
  SubnetGroup,
  SubnetGroupAlreadyExistsFault,
  SubnetGroupInUseFault,
  SubnetGroupNotFoundFault,
  SubnetGroupQuotaExceededFault,
  SubnetInUse,
  SubnetNotAllowedFault,
  SubnetQuotaExceededFault,
  Tag,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TagResourceRequest,
  TagResourceResponse,
  TestFailoverNotAvailableFault,
  UnprocessedCluster,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateACLRequest,
  UpdateACLResponse,
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateParameterGroupRequest,
  UpdateParameterGroupResponse,
  UpdateSubnetGroupRequest,
  UpdateSubnetGroupResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
  UserAlreadyExistsFault,
  UserNotFoundFault,
  UserQuotaExceededFault,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1BatchUpdateClusterCommand = async (
  input: BatchUpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.BatchUpdateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchUpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.CopySnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopySnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateACLCommand = async (
  input: CreateACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.CreateACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateParameterGroupCommand = async (
  input: CreateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.CreateParameterGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.CreateSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSubnetGroupCommand = async (
  input: CreateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.CreateSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.CreateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteACLCommand = async (
  input: DeleteACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DeleteACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DeleteCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteParameterGroupCommand = async (
  input: DeleteParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DeleteParameterGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DeleteSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubnetGroupCommand = async (
  input: DeleteSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DeleteSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeACLsCommand = async (
  input: DescribeACLsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeACLs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeACLsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEngineVersionsCommand = async (
  input: DescribeEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeEngineVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEngineVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeParameterGroupsCommand = async (
  input: DescribeParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeParameterGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeParameterGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServiceUpdatesCommand = async (
  input: DescribeServiceUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeServiceUpdates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServiceUpdatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubnetGroupsCommand = async (
  input: DescribeSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeSubnetGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSubnetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1FailoverShardCommand = async (
  input: FailoverShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.FailoverShard",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1FailoverShardRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAllowedNodeTypeUpdatesCommand = async (
  input: ListAllowedNodeTypeUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.ListAllowedNodeTypeUpdates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAllowedNodeTypeUpdatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.ListTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetParameterGroupCommand = async (
  input: ResetParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.ResetParameterGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.TagResource",
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
    "x-amz-target": "AmazonMemoryDB.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateACLCommand = async (
  input: UpdateACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.UpdateACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.UpdateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateParameterGroupCommand = async (
  input: UpdateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.UpdateParameterGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubnetGroupCommand = async (
  input: UpdateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.UpdateSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.UpdateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchUpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchUpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchUpdateClusterResponse(data, context);
  const response: BatchUpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchUpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.memorydb#ServiceUpdateNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceUpdateNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CopySnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopySnapshotResponse(data, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopySnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSnapshotStateFault":
    case "com.amazonaws.memorydb#InvalidSnapshotStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidSnapshotStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.memorydb#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateACLResponse(data, context);
  const response: CreateACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLAlreadyExistsFault":
    case "com.amazonaws.memorydb#ACLAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1ACLAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ACLQuotaExceededFault":
    case "com.amazonaws.memorydb#ACLQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1ACLQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DefaultUserRequired":
    case "com.amazonaws.memorydb#DefaultUserRequired":
      response = {
        ...(await deserializeAws_json1_1DefaultUserRequiredResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      response = {
        ...(await deserializeAws_json1_1DuplicateUserNameFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterAlreadyExistsFault":
    case "com.amazonaws.memorydb#ClusterAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#ClusterQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.memorydb#InsufficientClusterCapacityFault":
      response = {
        ...(await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCredentialsException":
    case "com.amazonaws.memorydb#InvalidCredentialsException":
      response = {
        ...(await deserializeAws_json1_1InvalidCredentialsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.memorydb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ShardsPerClusterQuotaExceededFault":
    case "com.amazonaws.memorydb#ShardsPerClusterQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1ShardsPerClusterQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateParameterGroupResponse(data, context);
  const response: CreateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupAlreadyExistsFault":
    case "com.amazonaws.memorydb#ParameterGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupQuotaExceededFault":
    case "com.amazonaws.memorydb#ParameterGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.memorydb#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSubnetGroupResponse(data, context);
  const response: CreateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubnet":
    case "com.amazonaws.memorydb#InvalidSubnet":
      response = {
        ...(await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupAlreadyExistsFault":
    case "com.amazonaws.memorydb#SubnetGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetNotAllowedFault":
    case "com.amazonaws.memorydb#SubnetNotAllowedFault":
      response = {
        ...(await deserializeAws_json1_1SubnetNotAllowedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      response = {
        ...(await deserializeAws_json1_1DuplicateUserNameFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserAlreadyExistsFault":
    case "com.amazonaws.memorydb#UserAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1UserAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserQuotaExceededFault":
    case "com.amazonaws.memorydb#UserQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1UserQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteACLResponse(data, context);
  const response: DeleteACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteParameterGroupResponse(data, context);
  const response: DeleteParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSnapshotStateFault":
    case "com.amazonaws.memorydb#InvalidSnapshotStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidSnapshotStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSubnetGroupResponse(data, context);
  const response: DeleteSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupInUseFault":
    case "com.amazonaws.memorydb#SubnetGroupInUseFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupInUseFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidUserStateFault":
    case "com.amazonaws.memorydb#InvalidUserStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidUserStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeACLsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeACLsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeACLsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeACLsResponse(data, context);
  const response: DescribeACLsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeACLsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeACLsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEngineVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEngineVersionsResponse(data, context);
  const response: DescribeEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeParameterGroupsResponse(data, context);
  const response: DescribeParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeParametersResponse(data, context);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeServiceUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServiceUpdatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServiceUpdatesResponse(data, context);
  const response: DescribeServiceUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServiceUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSnapshotsResponse(data, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubnetGroupsResponse(data, context);
  const response: DescribeSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUsersResponse(data, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1FailoverShardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverShardCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1FailoverShardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1FailoverShardResponse(data, context);
  const response: FailoverShardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1FailoverShardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverShardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "APICallRateForCustomerExceededFault":
    case "com.amazonaws.memorydb#APICallRateForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1APICallRateForCustomerExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSKeyFault":
    case "com.amazonaws.memorydb#InvalidKMSKeyFault":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSKeyFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ShardNotFoundFault":
    case "com.amazonaws.memorydb#ShardNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ShardNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TestFailoverNotAvailableFault":
    case "com.amazonaws.memorydb#TestFailoverNotAvailableFault":
      response = {
        ...(await deserializeAws_json1_1TestFailoverNotAvailableFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAllowedNodeTypeUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAllowedNodeTypeUpdatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAllowedNodeTypeUpdatesResponse(data, context);
  const response: ListAllowedNodeTypeUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAllowedNodeTypeUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      response = {
        ...(await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ResetParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetParameterGroupResponse(data, context);
  const response: ResetParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      response = {
        ...(await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      response = {
        ...(await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagNotFoundFault":
    case "com.amazonaws.memorydb#TagNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1TagNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateACLResponse(data, context);
  const response: UpdateACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DefaultUserRequired":
    case "com.amazonaws.memorydb#DefaultUserRequired":
      response = {
        ...(await deserializeAws_json1_1DefaultUserRequiredResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      response = {
        ...(await deserializeAws_json1_1DuplicateUserNameFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClusterResponse(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#ClusterQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSKeyFault":
    case "com.amazonaws.memorydb#InvalidKMSKeyFault":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSKeyFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNodeStateFault":
    case "com.amazonaws.memorydb#InvalidNodeStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidNodeStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.memorydb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoOperationFault":
    case "com.amazonaws.memorydb#NoOperationFault":
      response = {
        ...(await deserializeAws_json1_1NoOperationFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ShardsPerClusterQuotaExceededFault":
    case "com.amazonaws.memorydb#ShardsPerClusterQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1ShardsPerClusterQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateParameterGroupResponse(data, context);
  const response: UpdateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubnetGroupResponse(data, context);
  const response: UpdateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubnet":
    case "com.amazonaws.memorydb#InvalidSubnet":
      response = {
        ...(await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetInUse":
    case "com.amazonaws.memorydb#SubnetInUse":
      response = {
        ...(await deserializeAws_json1_1SubnetInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetNotAllowedFault":
    case "com.amazonaws.memorydb#SubnetNotAllowedFault":
      response = {
        ...(await deserializeAws_json1_1SubnetNotAllowedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidUserStateFault":
    case "com.amazonaws.memorydb#InvalidUserStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidUserStateFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ACLAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ACLAlreadyExistsFault(body, context);
  const contents: ACLAlreadyExistsFault = {
    name: "ACLAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ACLNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ACLNotFoundFault(body, context);
  const contents: ACLNotFoundFault = {
    name: "ACLNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ACLQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ACLQuotaExceededFault(body, context);
  const contents: ACLQuotaExceededFault = {
    name: "ACLQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1APICallRateForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<APICallRateForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1APICallRateForCustomerExceededFault(body, context);
  const contents: APICallRateForCustomerExceededFault = {
    name: "APICallRateForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterAlreadyExistsFault(body, context);
  const contents: ClusterAlreadyExistsFault = {
    name: "ClusterAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterNotFoundFault(body, context);
  const contents: ClusterNotFoundFault = {
    name: "ClusterNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(body, context);
  const contents: ClusterQuotaForCustomerExceededFault = {
    name: "ClusterQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DefaultUserRequiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUserRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DefaultUserRequired(body, context);
  const contents: DefaultUserRequired = {
    name: "DefaultUserRequired",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DuplicateUserNameFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateUserNameFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateUserNameFault(body, context);
  const contents: DuplicateUserNameFault = {
    name: "DuplicateUserNameFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientClusterCapacityFault(body, context);
  const contents: InsufficientClusterCapacityFault = {
    name: "InsufficientClusterCapacityFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidACLStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidACLStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidACLStateFault(body, context);
  const contents: InvalidACLStateFault = {
    name: "InvalidACLStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidARNFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidARNFault(body, context);
  const contents: InvalidARNFault = {
    name: "InvalidARNFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClusterStateFault(body, context);
  const contents: InvalidClusterStateFault = {
    name: "InvalidClusterStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCredentialsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCredentialsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCredentialsException(body, context);
  const contents: InvalidCredentialsException = {
    name: "InvalidCredentialsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidKMSKeyFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKMSKeyFault(body, context);
  const contents: InvalidKMSKeyFault = {
    name: "InvalidKMSKeyFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNodeStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNodeStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNodeStateFault(body, context);
  const contents: InvalidNodeStateFault = {
    name: "InvalidNodeStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterGroupStateFault(body, context);
  const contents: InvalidParameterGroupStateFault = {
    name: "InvalidParameterGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSnapshotStateFault(body, context);
  const contents: InvalidSnapshotStateFault = {
    name: "InvalidSnapshotStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSubnet(body, context);
  const contents: InvalidSubnet = {
    name: "InvalidSubnet",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidUserStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUserStateFault(body, context);
  const contents: InvalidUserStateFault = {
    name: "InvalidUserStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidVPCNetworkStateFault(body, context);
  const contents: InvalidVPCNetworkStateFault = {
    name: "InvalidVPCNetworkStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForClusterExceededFault(body, context);
  const contents: NodeQuotaForClusterExceededFault = {
    name: "NodeQuotaForClusterExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(body, context);
  const contents: NodeQuotaForCustomerExceededFault = {
    name: "NodeQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoOperationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoOperationFault(body, context);
  const contents: NoOperationFault = {
    name: "NoOperationFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(body, context);
  const contents: ParameterGroupAlreadyExistsFault = {
    name: "ParameterGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupNotFoundFault(body, context);
  const contents: ParameterGroupNotFoundFault = {
    name: "ParameterGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupQuotaExceededFault(body, context);
  const contents: ParameterGroupQuotaExceededFault = {
    name: "ParameterGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(body, context);
  const contents: ServiceLinkedRoleNotFoundFault = {
    name: "ServiceLinkedRoleNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUpdateNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUpdateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUpdateNotFoundFault(body, context);
  const contents: ServiceUpdateNotFoundFault = {
    name: "ServiceUpdateNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ShardNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ShardNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ShardNotFoundFault(body, context);
  const contents: ShardNotFoundFault = {
    name: "ShardNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ShardsPerClusterQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ShardsPerClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ShardsPerClusterQuotaExceededFault(body, context);
  const contents: ShardsPerClusterQuotaExceededFault = {
    name: "ShardsPerClusterQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotAlreadyExistsFault(body, context);
  const contents: SnapshotAlreadyExistsFault = {
    name: "SnapshotAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotNotFoundFault(body, context);
  const contents: SnapshotNotFoundFault = {
    name: "SnapshotNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SnapshotQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotQuotaExceededFault(body, context);
  const contents: SnapshotQuotaExceededFault = {
    name: "SnapshotQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(body, context);
  const contents: SubnetGroupAlreadyExistsFault = {
    name: "SubnetGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupInUseFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupInUseFault(body, context);
  const contents: SubnetGroupInUseFault = {
    name: "SubnetGroupInUseFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupNotFoundFault(body, context);
  const contents: SubnetGroupNotFoundFault = {
    name: "SubnetGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupQuotaExceededFault(body, context);
  const contents: SubnetGroupQuotaExceededFault = {
    name: "SubnetGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SubnetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetInUse(body, context);
  const contents: SubnetInUse = {
    name: "SubnetInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SubnetNotAllowedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotAllowedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetNotAllowedFault(body, context);
  const contents: SubnetNotAllowedFault = {
    name: "SubnetNotAllowedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetQuotaExceededFault(body, context);
  const contents: SubnetQuotaExceededFault = {
    name: "SubnetQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagNotFoundFault(body, context);
  const contents: TagNotFoundFault = {
    name: "TagNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagQuotaPerResourceExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagQuotaPerResourceExceeded(body, context);
  const contents: TagQuotaPerResourceExceeded = {
    name: "TagQuotaPerResourceExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TestFailoverNotAvailableFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TestFailoverNotAvailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TestFailoverNotAvailableFault(body, context);
  const contents: TestFailoverNotAvailableFault = {
    name: "TestFailoverNotAvailableFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UserAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserAlreadyExistsFault(body, context);
  const contents: UserAlreadyExistsFault = {
    name: "UserAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UserNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserNotFoundFault(body, context);
  const contents: UserNotFoundFault = {
    name: "UserNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UserQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserQuotaExceededFault(body, context);
  const contents: UserQuotaExceededFault = {
    name: "UserQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AuthenticationMode = (input: AuthenticationMode, context: __SerdeContext): any => {
  return {
    ...(input.Passwords !== undefined &&
      input.Passwords !== null && { Passwords: serializeAws_json1_1PasswordListInput(input.Passwords, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1BatchUpdateClusterRequest = (
  input: BatchUpdateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterNames !== undefined &&
      input.ClusterNames !== null && {
        ClusterNames: serializeAws_json1_1ClusterNameList(input.ClusterNames, context),
      }),
    ...(input.ServiceUpdate !== undefined &&
      input.ServiceUpdate !== null && {
        ServiceUpdate: serializeAws_json1_1ServiceUpdateRequest(input.ServiceUpdate, context),
      }),
  };
};

const serializeAws_json1_1ClusterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CopySnapshotRequest = (input: CopySnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SourceSnapshotName !== undefined &&
      input.SourceSnapshotName !== null && { SourceSnapshotName: input.SourceSnapshotName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TargetBucket !== undefined && input.TargetBucket !== null && { TargetBucket: input.TargetBucket }),
    ...(input.TargetSnapshotName !== undefined &&
      input.TargetSnapshotName !== null && { TargetSnapshotName: input.TargetSnapshotName }),
  };
};

const serializeAws_json1_1CreateACLRequest = (input: CreateACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName !== undefined && input.ACLName !== null && { ACLName: input.ACLName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserNames !== undefined &&
      input.UserNames !== null && { UserNames: serializeAws_json1_1UserNameListInput(input.UserNames, context) }),
  };
};

const serializeAws_json1_1CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName !== undefined && input.ACLName !== null && { ACLName: input.ACLName }),
    ...(input.AutoMinorVersionUpgrade !== undefined &&
      input.AutoMinorVersionUpgrade !== null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MaintenanceWindow !== undefined &&
      input.MaintenanceWindow !== null && { MaintenanceWindow: input.MaintenanceWindow }),
    ...(input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType }),
    ...(input.NumReplicasPerShard !== undefined &&
      input.NumReplicasPerShard !== null && { NumReplicasPerShard: input.NumReplicasPerShard }),
    ...(input.NumShards !== undefined && input.NumShards !== null && { NumShards: input.NumShards }),
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIdsList(input.SecurityGroupIds, context),
      }),
    ...(input.SnapshotArns !== undefined &&
      input.SnapshotArns !== null && {
        SnapshotArns: serializeAws_json1_1SnapshotArnsList(input.SnapshotArns, context),
      }),
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
    ...(input.SnapshotRetentionLimit !== undefined &&
      input.SnapshotRetentionLimit !== null && { SnapshotRetentionLimit: input.SnapshotRetentionLimit }),
    ...(input.SnapshotWindow !== undefined &&
      input.SnapshotWindow !== null && { SnapshotWindow: input.SnapshotWindow }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SubnetGroupName !== undefined &&
      input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.TLSEnabled !== undefined && input.TLSEnabled !== null && { TLSEnabled: input.TLSEnabled }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateParameterGroupRequest = (
  input: CreateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Family !== undefined && input.Family !== null && { Family: input.Family }),
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSubnetGroupRequest = (
  input: CreateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.SubnetGroupName !== undefined &&
      input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessString !== undefined && input.AccessString !== null && { AccessString: input.AccessString }),
    ...(input.AuthenticationMode !== undefined &&
      input.AuthenticationMode !== null && {
        AuthenticationMode: serializeAws_json1_1AuthenticationMode(input.AuthenticationMode, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DeleteACLRequest = (input: DeleteACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName !== undefined && input.ACLName !== null && { ACLName: input.ACLName }),
  };
};

const serializeAws_json1_1DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    ...(input.FinalSnapshotName !== undefined &&
      input.FinalSnapshotName !== null && { FinalSnapshotName: input.FinalSnapshotName }),
  };
};

const serializeAws_json1_1DeleteParameterGroupRequest = (
  input: DeleteParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
  };
};

const serializeAws_json1_1DeleteSubnetGroupRequest = (
  input: DeleteSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubnetGroupName !== undefined &&
      input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DescribeACLsRequest = (input: DescribeACLsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName !== undefined && input.ACLName !== null && { ACLName: input.ACLName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ShowShardDetails !== undefined &&
      input.ShowShardDetails !== null && { ShowShardDetails: input.ShowShardDetails }),
  };
};

const serializeAws_json1_1DescribeEngineVersionsRequest = (
  input: DescribeEngineVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultOnly !== undefined && input.DefaultOnly !== null && { DefaultOnly: input.DefaultOnly }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupFamily !== undefined &&
      input.ParameterGroupFamily !== null && { ParameterGroupFamily: input.ParameterGroupFamily }),
  };
};

const serializeAws_json1_1DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SourceName !== undefined && input.SourceName !== null && { SourceName: input.SourceName }),
    ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeParameterGroupsRequest = (
  input: DescribeParameterGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1DescribeParametersRequest = (
  input: DescribeParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1DescribeServiceUpdatesRequest = (
  input: DescribeServiceUpdatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterNames !== undefined &&
      input.ClusterNames !== null && {
        ClusterNames: serializeAws_json1_1ClusterNameList(input.ClusterNames, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServiceUpdateName !== undefined &&
      input.ServiceUpdateName !== null && { ServiceUpdateName: input.ServiceUpdateName }),
    ...(input.Status !== undefined &&
      input.Status !== null && { Status: serializeAws_json1_1ServiceUpdateStatusList(input.Status, context) }),
  };
};

const serializeAws_json1_1DescribeSnapshotsRequest = (
  input: DescribeSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ShowDetail !== undefined && input.ShowDetail !== null && { ShowDetail: input.ShowDetail }),
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
  };
};

const serializeAws_json1_1DescribeSubnetGroupsRequest = (
  input: DescribeSubnetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SubnetGroupName !== undefined &&
      input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

const serializeAws_json1_1DescribeUsersRequest = (input: DescribeUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1FailoverShardRequest = (input: FailoverShardRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    ...(input.ShardName !== undefined && input.ShardName !== null && { ShardName: input.ShardName }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListAllowedNodeTypeUpdatesRequest = (
  input: ListAllowedNodeTypeUpdatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
  };
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ParameterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ParameterNameValue = (input: ParameterNameValue, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName !== undefined && input.ParameterName !== null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue !== undefined &&
      input.ParameterValue !== null && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_json1_1ParameterNameValueList = (input: ParameterNameValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ParameterNameValue(entry, context);
    });
};

const serializeAws_json1_1PasswordListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ReplicaConfigurationRequest = (
  input: ReplicaConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicaCount !== undefined && input.ReplicaCount !== null && { ReplicaCount: input.ReplicaCount }),
  };
};

const serializeAws_json1_1ResetParameterGroupRequest = (
  input: ResetParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllParameters !== undefined && input.AllParameters !== null && { AllParameters: input.AllParameters }),
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNames !== undefined &&
      input.ParameterNames !== null && {
        ParameterNames: serializeAws_json1_1ParameterNameList(input.ParameterNames, context),
      }),
  };
};

const serializeAws_json1_1SecurityGroupIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ServiceUpdateRequest = (input: ServiceUpdateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceUpdateNameToApply !== undefined &&
      input.ServiceUpdateNameToApply !== null && { ServiceUpdateNameToApply: input.ServiceUpdateNameToApply }),
  };
};

const serializeAws_json1_1ServiceUpdateStatusList = (
  input: (ServiceUpdateStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ShardConfigurationRequest = (
  input: ShardConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ShardCount !== undefined && input.ShardCount !== null && { ShardCount: input.ShardCount }),
  };
};

const serializeAws_json1_1SnapshotArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateACLRequest = (input: UpdateACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName !== undefined && input.ACLName !== null && { ACLName: input.ACLName }),
    ...(input.UserNamesToAdd !== undefined &&
      input.UserNamesToAdd !== null && {
        UserNamesToAdd: serializeAws_json1_1UserNameListInput(input.UserNamesToAdd, context),
      }),
    ...(input.UserNamesToRemove !== undefined &&
      input.UserNamesToRemove !== null && {
        UserNamesToRemove: serializeAws_json1_1UserNameListInput(input.UserNamesToRemove, context),
      }),
  };
};

const serializeAws_json1_1UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName !== undefined && input.ACLName !== null && { ACLName: input.ACLName }),
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.MaintenanceWindow !== undefined &&
      input.MaintenanceWindow !== null && { MaintenanceWindow: input.MaintenanceWindow }),
    ...(input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType }),
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ReplicaConfiguration !== undefined &&
      input.ReplicaConfiguration !== null && {
        ReplicaConfiguration: serializeAws_json1_1ReplicaConfigurationRequest(input.ReplicaConfiguration, context),
      }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIdsList(input.SecurityGroupIds, context),
      }),
    ...(input.ShardConfiguration !== undefined &&
      input.ShardConfiguration !== null && {
        ShardConfiguration: serializeAws_json1_1ShardConfigurationRequest(input.ShardConfiguration, context),
      }),
    ...(input.SnapshotRetentionLimit !== undefined &&
      input.SnapshotRetentionLimit !== null && { SnapshotRetentionLimit: input.SnapshotRetentionLimit }),
    ...(input.SnapshotWindow !== undefined &&
      input.SnapshotWindow !== null && { SnapshotWindow: input.SnapshotWindow }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SnsTopicStatus !== undefined &&
      input.SnsTopicStatus !== null && { SnsTopicStatus: input.SnsTopicStatus }),
  };
};

const serializeAws_json1_1UpdateParameterGroupRequest = (
  input: UpdateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNameValues !== undefined &&
      input.ParameterNameValues !== null && {
        ParameterNameValues: serializeAws_json1_1ParameterNameValueList(input.ParameterNameValues, context),
      }),
  };
};

const serializeAws_json1_1UpdateSubnetGroupRequest = (
  input: UpdateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.SubnetGroupName !== undefined &&
      input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessString !== undefined && input.AccessString !== null && { AccessString: input.AccessString }),
    ...(input.AuthenticationMode !== undefined &&
      input.AuthenticationMode !== null && {
        AuthenticationMode: serializeAws_json1_1AuthenticationMode(input.AuthenticationMode, context),
      }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1UserNameListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1ACL = (output: any, context: __SerdeContext): ACL => {
  return {
    ARN: __expectString(output.ARN),
    Clusters:
      output.Clusters !== undefined && output.Clusters !== null
        ? deserializeAws_json1_1ACLClusterNameList(output.Clusters, context)
        : undefined,
    MinimumEngineVersion: __expectString(output.MinimumEngineVersion),
    Name: __expectString(output.Name),
    PendingChanges:
      output.PendingChanges !== undefined && output.PendingChanges !== null
        ? deserializeAws_json1_1ACLPendingChanges(output.PendingChanges, context)
        : undefined,
    Status: __expectString(output.Status),
    UserNames:
      output.UserNames !== undefined && output.UserNames !== null
        ? deserializeAws_json1_1UserNameList(output.UserNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ACLAlreadyExistsFault = (output: any, context: __SerdeContext): ACLAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ACLClusterNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ACLList = (output: any, context: __SerdeContext): ACL[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ACL(entry, context);
    });
};

const deserializeAws_json1_1ACLNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ACLNotFoundFault = (output: any, context: __SerdeContext): ACLNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ACLPendingChanges = (output: any, context: __SerdeContext): ACLPendingChanges => {
  return {
    UserNamesToAdd:
      output.UserNamesToAdd !== undefined && output.UserNamesToAdd !== null
        ? deserializeAws_json1_1UserNameList(output.UserNamesToAdd, context)
        : undefined,
    UserNamesToRemove:
      output.UserNamesToRemove !== undefined && output.UserNamesToRemove !== null
        ? deserializeAws_json1_1UserNameList(output.UserNamesToRemove, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ACLQuotaExceededFault = (output: any, context: __SerdeContext): ACLQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ACLsUpdateStatus = (output: any, context: __SerdeContext): ACLsUpdateStatus => {
  return {
    ACLToApply: __expectString(output.ACLToApply),
  } as any;
};

const deserializeAws_json1_1APICallRateForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): APICallRateForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Authentication = (output: any, context: __SerdeContext): Authentication => {
  return {
    PasswordCount: __expectInt32(output.PasswordCount),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1BatchUpdateClusterResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateClusterResponse => {
  return {
    ProcessedClusters:
      output.ProcessedClusters !== undefined && output.ProcessedClusters !== null
        ? deserializeAws_json1_1ClusterList(output.ProcessedClusters, context)
        : undefined,
    UnprocessedClusters:
      output.UnprocessedClusters !== undefined && output.UnprocessedClusters !== null
        ? deserializeAws_json1_1UnprocessedClusterList(output.UnprocessedClusters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    ACLName: __expectString(output.ACLName),
    ARN: __expectString(output.ARN),
    AutoMinorVersionUpgrade: __expectBoolean(output.AutoMinorVersionUpgrade),
    AvailabilityMode: __expectString(output.AvailabilityMode),
    ClusterEndpoint:
      output.ClusterEndpoint !== undefined && output.ClusterEndpoint !== null
        ? deserializeAws_json1_1Endpoint(output.ClusterEndpoint, context)
        : undefined,
    Description: __expectString(output.Description),
    EnginePatchVersion: __expectString(output.EnginePatchVersion),
    EngineVersion: __expectString(output.EngineVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    MaintenanceWindow: __expectString(output.MaintenanceWindow),
    Name: __expectString(output.Name),
    NodeType: __expectString(output.NodeType),
    NumberOfShards: __expectInt32(output.NumberOfShards),
    ParameterGroupName: __expectString(output.ParameterGroupName),
    ParameterGroupStatus: __expectString(output.ParameterGroupStatus),
    PendingUpdates:
      output.PendingUpdates !== undefined && output.PendingUpdates !== null
        ? deserializeAws_json1_1ClusterPendingUpdates(output.PendingUpdates, context)
        : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_json1_1SecurityGroupMembershipList(output.SecurityGroups, context)
        : undefined,
    Shards:
      output.Shards !== undefined && output.Shards !== null
        ? deserializeAws_json1_1ShardList(output.Shards, context)
        : undefined,
    SnapshotRetentionLimit: __expectInt32(output.SnapshotRetentionLimit),
    SnapshotWindow: __expectString(output.SnapshotWindow),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SnsTopicStatus: __expectString(output.SnsTopicStatus),
    Status: __expectString(output.Status),
    SubnetGroupName: __expectString(output.SubnetGroupName),
    TLSEnabled: __expectBoolean(output.TLSEnabled),
  } as any;
};

const deserializeAws_json1_1ClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ClusterConfiguration = (output: any, context: __SerdeContext): ClusterConfiguration => {
  return {
    Description: __expectString(output.Description),
    EngineVersion: __expectString(output.EngineVersion),
    MaintenanceWindow: __expectString(output.MaintenanceWindow),
    Name: __expectString(output.Name),
    NodeType: __expectString(output.NodeType),
    NumShards: __expectInt32(output.NumShards),
    ParameterGroupName: __expectString(output.ParameterGroupName),
    Port: __expectInt32(output.Port),
    Shards:
      output.Shards !== undefined && output.Shards !== null
        ? deserializeAws_json1_1ShardDetails(output.Shards, context)
        : undefined,
    SnapshotRetentionLimit: __expectInt32(output.SnapshotRetentionLimit),
    SnapshotWindow: __expectString(output.SnapshotWindow),
    SubnetGroupName: __expectString(output.SubnetGroupName),
    TopicArn: __expectString(output.TopicArn),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1ClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Cluster(entry, context);
    });
};

const deserializeAws_json1_1ClusterNotFoundFault = (output: any, context: __SerdeContext): ClusterNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ClusterPendingUpdates = (output: any, context: __SerdeContext): ClusterPendingUpdates => {
  return {
    ACLs:
      output.ACLs !== undefined && output.ACLs !== null
        ? deserializeAws_json1_1ACLsUpdateStatus(output.ACLs, context)
        : undefined,
    Resharding:
      output.Resharding !== undefined && output.Resharding !== null
        ? deserializeAws_json1_1ReshardingStatus(output.Resharding, context)
        : undefined,
    ServiceUpdates:
      output.ServiceUpdates !== undefined && output.ServiceUpdates !== null
        ? deserializeAws_json1_1PendingModifiedServiceUpdateList(output.ServiceUpdates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CopySnapshotResponse = (output: any, context: __SerdeContext): CopySnapshotResponse => {
  return {
    Snapshot:
      output.Snapshot !== undefined && output.Snapshot !== null
        ? deserializeAws_json1_1Snapshot(output.Snapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateACLResponse = (output: any, context: __SerdeContext): CreateACLResponse => {
  return {
    ACL: output.ACL !== undefined && output.ACL !== null ? deserializeAws_json1_1ACL(output.ACL, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup !== undefined && output.ParameterGroup !== null
        ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return {
    Snapshot:
      output.Snapshot !== undefined && output.Snapshot !== null
        ? deserializeAws_json1_1Snapshot(output.Snapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup !== undefined && output.SubnetGroup !== null
        ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    User:
      output.User !== undefined && output.User !== null ? deserializeAws_json1_1User(output.User, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DefaultUserRequired = (output: any, context: __SerdeContext): DefaultUserRequired => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeleteACLResponse = (output: any, context: __SerdeContext): DeleteACLResponse => {
  return {
    ACL: output.ACL !== undefined && output.ACL !== null ? deserializeAws_json1_1ACL(output.ACL, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup !== undefined && output.ParameterGroup !== null
        ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return {
    Snapshot:
      output.Snapshot !== undefined && output.Snapshot !== null
        ? deserializeAws_json1_1Snapshot(output.Snapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup !== undefined && output.SubnetGroup !== null
        ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {
    User:
      output.User !== undefined && output.User !== null ? deserializeAws_json1_1User(output.User, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeACLsResponse = (output: any, context: __SerdeContext): DescribeACLsResponse => {
  return {
    ACLs:
      output.ACLs !== undefined && output.ACLs !== null
        ? deserializeAws_json1_1ACLList(output.ACLs, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    Clusters:
      output.Clusters !== undefined && output.Clusters !== null
        ? deserializeAws_json1_1ClusterList(output.Clusters, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEngineVersionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEngineVersionsResponse => {
  return {
    EngineVersions:
      output.EngineVersions !== undefined && output.EngineVersions !== null
        ? deserializeAws_json1_1EngineVersionInfoList(output.EngineVersions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_json1_1EventList(output.Events, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeParameterGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeParameterGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParameterGroups:
      output.ParameterGroups !== undefined && output.ParameterGroups !== null
        ? deserializeAws_json1_1ParameterGroupList(output.ParameterGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeParametersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersList(output.Parameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServiceUpdatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceUpdatesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceUpdates:
      output.ServiceUpdates !== undefined && output.ServiceUpdates !== null
        ? deserializeAws_json1_1ServiceUpdateList(output.ServiceUpdates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Snapshots:
      output.Snapshots !== undefined && output.Snapshots !== null
        ? deserializeAws_json1_1SnapshotList(output.Snapshots, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSubnetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubnetGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SubnetGroups:
      output.SubnetGroups !== undefined && output.SubnetGroups !== null
        ? deserializeAws_json1_1SubnetGroupList(output.SubnetGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUsersResponse = (output: any, context: __SerdeContext): DescribeUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1UserList(output.Users, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DuplicateUserNameFault = (output: any, context: __SerdeContext): DuplicateUserNameFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_json1_1EngineVersionInfo = (output: any, context: __SerdeContext): EngineVersionInfo => {
  return {
    EnginePatchVersion: __expectString(output.EnginePatchVersion),
    EngineVersion: __expectString(output.EngineVersion),
    ParameterGroupFamily: __expectString(output.ParameterGroupFamily),
  } as any;
};

const deserializeAws_json1_1EngineVersionInfoList = (output: any, context: __SerdeContext): EngineVersionInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EngineVersionInfo(entry, context);
    });
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    Date:
      output.Date !== undefined && output.Date !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date)))
        : undefined,
    Message: __expectString(output.Message),
    SourceName: __expectString(output.SourceName),
    SourceType: __expectString(output.SourceType),
  } as any;
};

const deserializeAws_json1_1EventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
};

const deserializeAws_json1_1FailoverShardResponse = (output: any, context: __SerdeContext): FailoverShardResponse => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidACLStateFault = (output: any, context: __SerdeContext): InvalidACLStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidARNFault = (output: any, context: __SerdeContext): InvalidARNFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidCredentialsException = (
  output: any,
  context: __SerdeContext
): InvalidCredentialsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidKMSKeyFault = (output: any, context: __SerdeContext): InvalidKMSKeyFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidNodeStateFault = (output: any, context: __SerdeContext): InvalidNodeStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidParameterGroupStateFault => {
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

const deserializeAws_json1_1InvalidSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidSnapshotStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidUserStateFault = (output: any, context: __SerdeContext): InvalidUserStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidVPCNetworkStateFault = (
  output: any,
  context: __SerdeContext
): InvalidVPCNetworkStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListAllowedNodeTypeUpdatesResponse = (
  output: any,
  context: __SerdeContext
): ListAllowedNodeTypeUpdatesResponse => {
  return {
    ScaleDownNodeTypes:
      output.ScaleDownNodeTypes !== undefined && output.ScaleDownNodeTypes !== null
        ? deserializeAws_json1_1NodeTypeList(output.ScaleDownNodeTypes, context)
        : undefined,
    ScaleUpNodeTypes:
      output.ScaleUpNodeTypes !== undefined && output.ScaleUpNodeTypes !== null
        ? deserializeAws_json1_1NodeTypeList(output.ScaleUpNodeTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Node = (output: any, context: __SerdeContext): Node => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime)))
        : undefined,
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1NodeList = (output: any, context: __SerdeContext): Node[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Node(entry, context);
    });
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NodeTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1NoOperationFault = (output: any, context: __SerdeContext): NoOperationFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Parameter = (output: any, context: __SerdeContext): Parameter => {
  return {
    AllowedValues: __expectString(output.AllowedValues),
    DataType: __expectString(output.DataType),
    Description: __expectString(output.Description),
    MinimumEngineVersion: __expectString(output.MinimumEngineVersion),
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ParameterGroup = (output: any, context: __SerdeContext): ParameterGroup => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Family: __expectString(output.Family),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterGroupList = (output: any, context: __SerdeContext): ParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterGroup(entry, context);
    });
};

const deserializeAws_json1_1ParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParametersList = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Parameter(entry, context);
    });
};

const deserializeAws_json1_1PendingModifiedServiceUpdate = (
  output: any,
  context: __SerdeContext
): PendingModifiedServiceUpdate => {
  return {
    ServiceUpdateName: __expectString(output.ServiceUpdateName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1PendingModifiedServiceUpdateList = (
  output: any,
  context: __SerdeContext
): PendingModifiedServiceUpdate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PendingModifiedServiceUpdate(entry, context);
    });
};

const deserializeAws_json1_1ResetParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): ResetParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup !== undefined && output.ParameterGroup !== null
        ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReshardingStatus = (output: any, context: __SerdeContext): ReshardingStatus => {
  return {
    SlotMigration:
      output.SlotMigration !== undefined && output.SlotMigration !== null
        ? deserializeAws_json1_1SlotMigration(output.SlotMigration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership => {
  return {
    SecurityGroupId: __expectString(output.SecurityGroupId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1SecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityGroupMembership(entry, context);
    });
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ServiceUpdate = (output: any, context: __SerdeContext): ServiceUpdate => {
  return {
    AutoUpdateStartDate:
      output.AutoUpdateStartDate !== undefined && output.AutoUpdateStartDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AutoUpdateStartDate)))
        : undefined,
    ClusterName: __expectString(output.ClusterName),
    Description: __expectString(output.Description),
    NodesUpdated: __expectString(output.NodesUpdated),
    ReleaseDate:
      output.ReleaseDate !== undefined && output.ReleaseDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReleaseDate)))
        : undefined,
    ServiceUpdateName: __expectString(output.ServiceUpdateName),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ServiceUpdateList = (output: any, context: __SerdeContext): ServiceUpdate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceUpdate(entry, context);
    });
};

const deserializeAws_json1_1ServiceUpdateNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceUpdateNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Shard = (output: any, context: __SerdeContext): Shard => {
  return {
    Name: __expectString(output.Name),
    Nodes:
      output.Nodes !== undefined && output.Nodes !== null
        ? deserializeAws_json1_1NodeList(output.Nodes, context)
        : undefined,
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    Slots: __expectString(output.Slots),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ShardConfiguration = (output: any, context: __SerdeContext): ShardConfiguration => {
  return {
    ReplicaCount: __expectInt32(output.ReplicaCount),
    Slots: __expectString(output.Slots),
  } as any;
};

const deserializeAws_json1_1ShardDetail = (output: any, context: __SerdeContext): ShardDetail => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1ShardConfiguration(output.Configuration, context)
        : undefined,
    Name: __expectString(output.Name),
    Size: __expectString(output.Size),
    SnapshotCreationTime:
      output.SnapshotCreationTime !== undefined && output.SnapshotCreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SnapshotCreationTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ShardDetails = (output: any, context: __SerdeContext): ShardDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ShardDetail(entry, context);
    });
};

const deserializeAws_json1_1ShardList = (output: any, context: __SerdeContext): Shard[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Shard(entry, context);
    });
};

const deserializeAws_json1_1ShardNotFoundFault = (output: any, context: __SerdeContext): ShardNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ShardsPerClusterQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ShardsPerClusterQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SlotMigration = (output: any, context: __SerdeContext): SlotMigration => {
  return {
    ProgressPercentage: __limitedParseDouble(output.ProgressPercentage),
  } as any;
};

const deserializeAws_json1_1Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    ARN: __expectString(output.ARN),
    ClusterConfiguration:
      output.ClusterConfiguration !== undefined && output.ClusterConfiguration !== null
        ? deserializeAws_json1_1ClusterConfiguration(output.ClusterConfiguration, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    Name: __expectString(output.Name),
    Source: __expectString(output.Source),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1SnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SnapshotAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Snapshot(entry, context);
    });
};

const deserializeAws_json1_1SnapshotNotFoundFault = (output: any, context: __SerdeContext): SnapshotNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SnapshotQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Subnet = (output: any, context: __SerdeContext): Subnet => {
  return {
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? deserializeAws_json1_1AvailabilityZone(output.AvailabilityZone, context)
        : undefined,
    Identifier: __expectString(output.Identifier),
  } as any;
};

const deserializeAws_json1_1SubnetGroup = (output: any, context: __SerdeContext): SubnetGroup => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_json1_1SubnetList(output.Subnets, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetGroupInUseFault = (output: any, context: __SerdeContext): SubnetGroupInUseFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetGroupList = (output: any, context: __SerdeContext): SubnetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubnetGroup(entry, context);
    });
};

const deserializeAws_json1_1SubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetInUse = (output: any, context: __SerdeContext): SubnetInUse => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subnet(entry, context);
    });
};

const deserializeAws_json1_1SubnetNotAllowedFault = (output: any, context: __SerdeContext): SubnetNotAllowedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagNotFoundFault = (output: any, context: __SerdeContext): TagNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagQuotaPerResourceExceeded = (
  output: any,
  context: __SerdeContext
): TagQuotaPerResourceExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TestFailoverNotAvailableFault = (
  output: any,
  context: __SerdeContext
): TestFailoverNotAvailableFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnprocessedCluster = (output: any, context: __SerdeContext): UnprocessedCluster => {
  return {
    ClusterName: __expectString(output.ClusterName),
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
  } as any;
};

const deserializeAws_json1_1UnprocessedClusterList = (output: any, context: __SerdeContext): UnprocessedCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnprocessedCluster(entry, context);
    });
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateACLResponse = (output: any, context: __SerdeContext): UpdateACLResponse => {
  return {
    ACL: output.ACL !== undefined && output.ACL !== null ? deserializeAws_json1_1ACL(output.ACL, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup !== undefined && output.ParameterGroup !== null
        ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup !== undefined && output.SubnetGroup !== null
        ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {
    User:
      output.User !== undefined && output.User !== null ? deserializeAws_json1_1User(output.User, context) : undefined,
  } as any;
};

const deserializeAws_json1_1User = (output: any, context: __SerdeContext): User => {
  return {
    ACLNames:
      output.ACLNames !== undefined && output.ACLNames !== null
        ? deserializeAws_json1_1ACLNameList(output.ACLNames, context)
        : undefined,
    ARN: __expectString(output.ARN),
    AccessString: __expectString(output.AccessString),
    Authentication:
      output.Authentication !== undefined && output.Authentication !== null
        ? deserializeAws_json1_1Authentication(output.Authentication, context)
        : undefined,
    MinimumEngineVersion: __expectString(output.MinimumEngineVersion),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1UserAlreadyExistsFault = (output: any, context: __SerdeContext): UserAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UserList = (output: any, context: __SerdeContext): User[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1User(entry, context);
    });
};

const deserializeAws_json1_1UserNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1UserNotFoundFault = (output: any, context: __SerdeContext): UserNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UserQuotaExceededFault = (output: any, context: __SerdeContext): UserQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
