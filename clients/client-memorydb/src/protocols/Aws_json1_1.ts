// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "../commands/DescribeReservedNodesCommand";
import {
  DescribeReservedNodesOfferingsCommandInput,
  DescribeReservedNodesOfferingsCommandOutput,
} from "../commands/DescribeReservedNodesOfferingsCommand";
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
  PurchaseReservedNodesOfferingCommandInput,
  PurchaseReservedNodesOfferingCommandOutput,
} from "../commands/PurchaseReservedNodesOfferingCommand";
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
import { MemoryDBServiceException as __BaseException } from "../models/MemoryDBServiceException";
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
  DescribeReservedNodesOfferingsRequest,
  DescribeReservedNodesOfferingsResponse,
  DescribeReservedNodesRequest,
  DescribeReservedNodesResponse,
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
  Node,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NoOperationFault,
  Parameter,
  ParameterGroup,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupNotFoundFault,
  ParameterGroupQuotaExceededFault,
  ParameterNameValue,
  PendingModifiedServiceUpdate,
  PurchaseReservedNodesOfferingRequest,
  PurchaseReservedNodesOfferingResponse,
  RecurringCharge,
  ReplicaConfigurationRequest,
  ReservedNode,
  ReservedNodeAlreadyExistsFault,
  ReservedNodeNotFoundFault,
  ReservedNodeQuotaExceededFault,
  ReservedNodesOffering,
  ReservedNodesOfferingNotFoundFault,
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

export const serializeAws_json1_1DescribeReservedNodesCommand = async (
  input: DescribeReservedNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeReservedNodes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReservedNodesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReservedNodesOfferingsCommand = async (
  input: DescribeReservedNodesOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.DescribeReservedNodesOfferings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReservedNodesOfferingsRequest(input, context));
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

export const serializeAws_json1_1PurchaseReservedNodesOfferingCommand = async (
  input: PurchaseReservedNodesOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonMemoryDB.PurchaseReservedNodesOffering",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PurchaseReservedNodesOfferingRequest(input, context));
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.memorydb#ServiceUpdateNotFoundFault":
      throw await deserializeAws_json1_1ServiceUpdateNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidSnapshotStateFault":
    case "com.amazonaws.memorydb#InvalidSnapshotStateFault":
      throw await deserializeAws_json1_1InvalidSnapshotStateFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      throw await deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.memorydb#SnapshotQuotaExceededFault":
      throw await deserializeAws_json1_1SnapshotQuotaExceededFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLAlreadyExistsFault":
    case "com.amazonaws.memorydb#ACLAlreadyExistsFault":
      throw await deserializeAws_json1_1ACLAlreadyExistsFaultResponse(parsedOutput, context);
    case "ACLQuotaExceededFault":
    case "com.amazonaws.memorydb#ACLQuotaExceededFault":
      throw await deserializeAws_json1_1ACLQuotaExceededFaultResponse(parsedOutput, context);
    case "DefaultUserRequired":
    case "com.amazonaws.memorydb#DefaultUserRequired":
      throw await deserializeAws_json1_1DefaultUserRequiredResponse(parsedOutput, context);
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      throw await deserializeAws_json1_1DuplicateUserNameFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "ClusterAlreadyExistsFault":
    case "com.amazonaws.memorydb#ClusterAlreadyExistsFault":
      throw await deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#ClusterQuotaForCustomerExceededFault":
      throw await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.memorydb#InsufficientClusterCapacityFault":
      throw await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.memorydb#InvalidCredentialsException":
      throw await deserializeAws_json1_1InvalidCredentialsExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.memorydb#InvalidVPCNetworkStateFault":
      throw await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "ShardsPerClusterQuotaExceededFault":
    case "com.amazonaws.memorydb#ShardsPerClusterQuotaExceededFault":
      throw await deserializeAws_json1_1ShardsPerClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupAlreadyExistsFault":
    case "com.amazonaws.memorydb#ParameterGroupAlreadyExistsFault":
      throw await deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "ParameterGroupQuotaExceededFault":
    case "com.amazonaws.memorydb#ParameterGroupQuotaExceededFault":
      throw await deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      throw await deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.memorydb#SnapshotQuotaExceededFault":
      throw await deserializeAws_json1_1SnapshotQuotaExceededFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubnet":
    case "com.amazonaws.memorydb#InvalidSubnet":
      throw await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupAlreadyExistsFault":
    case "com.amazonaws.memorydb#SubnetGroupAlreadyExistsFault":
      throw await deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "SubnetGroupQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetGroupQuotaExceededFault":
      throw await deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.memorydb#SubnetNotAllowedFault":
      throw await deserializeAws_json1_1SubnetNotAllowedFaultResponse(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetQuotaExceededFault":
      throw await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      throw await deserializeAws_json1_1DuplicateUserNameFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
    case "UserAlreadyExistsFault":
    case "com.amazonaws.memorydb#UserAlreadyExistsFault":
      throw await deserializeAws_json1_1UserAlreadyExistsFaultResponse(parsedOutput, context);
    case "UserQuotaExceededFault":
    case "com.amazonaws.memorydb#UserQuotaExceededFault":
      throw await deserializeAws_json1_1UserQuotaExceededFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      throw await deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidSnapshotStateFault":
    case "com.amazonaws.memorydb#InvalidSnapshotStateFault":
      throw await deserializeAws_json1_1InvalidSnapshotStateFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupInUseFault":
    case "com.amazonaws.memorydb#SubnetGroupInUseFault":
      throw await deserializeAws_json1_1SubnetGroupInUseFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidUserStateFault":
    case "com.amazonaws.memorydb#InvalidUserStateFault":
      throw await deserializeAws_json1_1InvalidUserStateFaultResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReservedNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReservedNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReservedNodesResponse(data, context);
  const response: DescribeReservedNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReservedNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReservedNodeNotFoundFault":
    case "com.amazonaws.memorydb#ReservedNodeNotFoundFault":
      throw await deserializeAws_json1_1ReservedNodeNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReservedNodesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReservedNodesOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReservedNodesOfferingsResponse(data, context);
  const response: DescribeReservedNodesOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReservedNodesOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReservedNodesOfferingNotFoundFault":
    case "com.amazonaws.memorydb#ReservedNodesOfferingNotFoundFault":
      throw await deserializeAws_json1_1ReservedNodesOfferingNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "APICallRateForCustomerExceededFault":
    case "com.amazonaws.memorydb#APICallRateForCustomerExceededFault":
      throw await deserializeAws_json1_1APICallRateForCustomerExceededFaultResponse(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.memorydb#InvalidKMSKeyFault":
      throw await deserializeAws_json1_1InvalidKMSKeyFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ShardNotFoundFault":
    case "com.amazonaws.memorydb#ShardNotFoundFault":
      throw await deserializeAws_json1_1ShardNotFoundFaultResponse(parsedOutput, context);
    case "TestFailoverNotAvailableFault":
    case "com.amazonaws.memorydb#TestFailoverNotAvailableFault":
      throw await deserializeAws_json1_1TestFailoverNotAvailableFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      throw await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PurchaseReservedNodesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedNodesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PurchaseReservedNodesOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PurchaseReservedNodesOfferingResponse(data, context);
  const response: PurchaseReservedNodesOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PurchaseReservedNodesOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedNodesOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReservedNodeAlreadyExistsFault":
    case "com.amazonaws.memorydb#ReservedNodeAlreadyExistsFault":
      throw await deserializeAws_json1_1ReservedNodeAlreadyExistsFaultResponse(parsedOutput, context);
    case "ReservedNodeQuotaExceededFault":
    case "com.amazonaws.memorydb#ReservedNodeQuotaExceededFault":
      throw await deserializeAws_json1_1ReservedNodeQuotaExceededFaultResponse(parsedOutput, context);
    case "ReservedNodesOfferingNotFoundFault":
    case "com.amazonaws.memorydb#ReservedNodesOfferingNotFoundFault":
      throw await deserializeAws_json1_1ReservedNodesOfferingNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      throw await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      throw await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await deserializeAws_json1_1SnapshotNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "TagNotFoundFault":
    case "com.amazonaws.memorydb#TagNotFoundFault":
      throw await deserializeAws_json1_1TagNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "DefaultUserRequired":
    case "com.amazonaws.memorydb#DefaultUserRequired":
      throw await deserializeAws_json1_1DefaultUserRequiredResponse(parsedOutput, context);
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      throw await deserializeAws_json1_1DuplicateUserNameFaultResponse(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await deserializeAws_json1_1ACLNotFoundFaultResponse(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#ClusterQuotaForCustomerExceededFault":
      throw await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await deserializeAws_json1_1InvalidACLStateFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.memorydb#InvalidKMSKeyFault":
      throw await deserializeAws_json1_1InvalidKMSKeyFaultResponse(parsedOutput, context);
    case "InvalidNodeStateFault":
    case "com.amazonaws.memorydb#InvalidNodeStateFault":
      throw await deserializeAws_json1_1InvalidNodeStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.memorydb#InvalidVPCNetworkStateFault":
      throw await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NoOperationFault":
    case "com.amazonaws.memorydb#NoOperationFault":
      throw await deserializeAws_json1_1NoOperationFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "ShardsPerClusterQuotaExceededFault":
    case "com.amazonaws.memorydb#ShardsPerClusterQuotaExceededFault":
      throw await deserializeAws_json1_1ShardsPerClusterQuotaExceededFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubnet":
    case "com.amazonaws.memorydb#InvalidSubnet":
      throw await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "SubnetInUse":
    case "com.amazonaws.memorydb#SubnetInUse":
      throw await deserializeAws_json1_1SubnetInUseResponse(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.memorydb#SubnetNotAllowedFault":
      throw await deserializeAws_json1_1SubnetNotAllowedFaultResponse(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetQuotaExceededFault":
      throw await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidUserStateFault":
    case "com.amazonaws.memorydb#InvalidUserStateFault":
      throw await deserializeAws_json1_1InvalidUserStateFaultResponse(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await deserializeAws_json1_1UserNotFoundFaultResponse(parsedOutput, context);
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

const deserializeAws_json1_1ACLAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ACLAlreadyExistsFault(body, context);
  const exception = new ACLAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ACLNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ACLNotFoundFault(body, context);
  const exception = new ACLNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ACLQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ACLQuotaExceededFault(body, context);
  const exception = new ACLQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1APICallRateForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<APICallRateForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1APICallRateForCustomerExceededFault(body, context);
  const exception = new APICallRateForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterAlreadyExistsFault(body, context);
  const exception = new ClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterNotFoundFault(body, context);
  const exception = new ClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(body, context);
  const exception = new ClusterQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DefaultUserRequiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUserRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DefaultUserRequired(body, context);
  const exception = new DefaultUserRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateUserNameFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateUserNameFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateUserNameFault(body, context);
  const exception = new DuplicateUserNameFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientClusterCapacityFault(body, context);
  const exception = new InsufficientClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidACLStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidACLStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidACLStateFault(body, context);
  const exception = new InvalidACLStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidARNFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidARNFault(body, context);
  const exception = new InvalidARNFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClusterStateFault(body, context);
  const exception = new InvalidClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCredentialsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCredentialsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCredentialsException(body, context);
  const exception = new InvalidCredentialsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidKMSKeyFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKMSKeyFault(body, context);
  const exception = new InvalidKMSKeyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNodeStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNodeStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNodeStateFault(body, context);
  const exception = new InvalidNodeStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterGroupStateFault(body, context);
  const exception = new InvalidParameterGroupStateFault({
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

const deserializeAws_json1_1InvalidSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSnapshotStateFault(body, context);
  const exception = new InvalidSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSubnet(body, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidUserStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUserStateFault(body, context);
  const exception = new InvalidUserStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidVPCNetworkStateFault(body, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForClusterExceededFault(body, context);
  const exception = new NodeQuotaForClusterExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(body, context);
  const exception = new NodeQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoOperationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoOperationFault(body, context);
  const exception = new NoOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(body, context);
  const exception = new ParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupNotFoundFault(body, context);
  const exception = new ParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupQuotaExceededFault(body, context);
  const exception = new ParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReservedNodeAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReservedNodeAlreadyExistsFault(body, context);
  const exception = new ReservedNodeAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReservedNodeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReservedNodeNotFoundFault(body, context);
  const exception = new ReservedNodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReservedNodeQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReservedNodeQuotaExceededFault(body, context);
  const exception = new ReservedNodeQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReservedNodesOfferingNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodesOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReservedNodesOfferingNotFoundFault(body, context);
  const exception = new ReservedNodesOfferingNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(body, context);
  const exception = new ServiceLinkedRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUpdateNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUpdateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUpdateNotFoundFault(body, context);
  const exception = new ServiceUpdateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ShardNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ShardNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ShardNotFoundFault(body, context);
  const exception = new ShardNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ShardsPerClusterQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ShardsPerClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ShardsPerClusterQuotaExceededFault(body, context);
  const exception = new ShardsPerClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotAlreadyExistsFault(body, context);
  const exception = new SnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotNotFoundFault(body, context);
  const exception = new SnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SnapshotQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotQuotaExceededFault(body, context);
  const exception = new SnapshotQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(body, context);
  const exception = new SubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupInUseFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupInUseFault(body, context);
  const exception = new SubnetGroupInUseFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupNotFoundFault(body, context);
  const exception = new SubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupQuotaExceededFault(body, context);
  const exception = new SubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetInUse(body, context);
  const exception = new SubnetInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetNotAllowedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotAllowedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetNotAllowedFault(body, context);
  const exception = new SubnetNotAllowedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetQuotaExceededFault(body, context);
  const exception = new SubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagNotFoundFault(body, context);
  const exception = new TagNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagQuotaPerResourceExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagQuotaPerResourceExceeded(body, context);
  const exception = new TagQuotaPerResourceExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TestFailoverNotAvailableFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TestFailoverNotAvailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TestFailoverNotAvailableFault(body, context);
  const exception = new TestFailoverNotAvailableFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UserAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserAlreadyExistsFault(body, context);
  const exception = new UserAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UserNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserNotFoundFault(body, context);
  const exception = new UserNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UserQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserQuotaExceededFault(body, context);
  const exception = new UserQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AuthenticationMode = (input: AuthenticationMode, context: __SerdeContext): any => {
  return {
    ...(input.Passwords != null && { Passwords: serializeAws_json1_1PasswordListInput(input.Passwords, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1BatchUpdateClusterRequest = (
  input: BatchUpdateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterNames != null && {
      ClusterNames: serializeAws_json1_1ClusterNameList(input.ClusterNames, context),
    }),
    ...(input.ServiceUpdate != null && {
      ServiceUpdate: serializeAws_json1_1ServiceUpdateRequest(input.ServiceUpdate, context),
    }),
  };
};

const serializeAws_json1_1ClusterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CopySnapshotRequest = (input: CopySnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SourceSnapshotName != null && { SourceSnapshotName: input.SourceSnapshotName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TargetBucket != null && { TargetBucket: input.TargetBucket }),
    ...(input.TargetSnapshotName != null && { TargetSnapshotName: input.TargetSnapshotName }),
  };
};

const serializeAws_json1_1CreateACLRequest = (input: CreateACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserNames != null && { UserNames: serializeAws_json1_1UserNameListInput(input.UserNames, context) }),
  };
};

const serializeAws_json1_1CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.AutoMinorVersionUpgrade != null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.DataTiering != null && { DataTiering: input.DataTiering }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MaintenanceWindow != null && { MaintenanceWindow: input.MaintenanceWindow }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.NumReplicasPerShard != null && { NumReplicasPerShard: input.NumReplicasPerShard }),
    ...(input.NumShards != null && { NumShards: input.NumShards }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdsList(input.SecurityGroupIds, context),
    }),
    ...(input.SnapshotArns != null && {
      SnapshotArns: serializeAws_json1_1SnapshotArnsList(input.SnapshotArns, context),
    }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
    ...(input.SnapshotRetentionLimit != null && { SnapshotRetentionLimit: input.SnapshotRetentionLimit }),
    ...(input.SnapshotWindow != null && { SnapshotWindow: input.SnapshotWindow }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.TLSEnabled != null && { TLSEnabled: input.TLSEnabled }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateParameterGroupRequest = (
  input: CreateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Family != null && { Family: input.Family }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSubnetGroupRequest = (
  input: CreateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessString != null && { AccessString: input.AccessString }),
    ...(input.AuthenticationMode != null && {
      AuthenticationMode: serializeAws_json1_1AuthenticationMode(input.AuthenticationMode, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DeleteACLRequest = (input: DeleteACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
  };
};

const serializeAws_json1_1DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.FinalSnapshotName != null && { FinalSnapshotName: input.FinalSnapshotName }),
  };
};

const serializeAws_json1_1DeleteParameterGroupRequest = (
  input: DeleteParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
  };
};

const serializeAws_json1_1DeleteSubnetGroupRequest = (
  input: DeleteSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DescribeACLsRequest = (input: DescribeACLsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ShowShardDetails != null && { ShowShardDetails: input.ShowShardDetails }),
  };
};

const serializeAws_json1_1DescribeEngineVersionsRequest = (
  input: DescribeEngineVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultOnly != null && { DefaultOnly: input.DefaultOnly }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupFamily != null && { ParameterGroupFamily: input.ParameterGroupFamily }),
  };
};

const serializeAws_json1_1DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SourceName != null && { SourceName: input.SourceName }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeParameterGroupsRequest = (
  input: DescribeParameterGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1DescribeParametersRequest = (
  input: DescribeParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1DescribeReservedNodesOfferingsRequest = (
  input: DescribeReservedNodesOfferingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.OfferingType != null && { OfferingType: input.OfferingType }),
    ...(input.ReservedNodesOfferingId != null && { ReservedNodesOfferingId: input.ReservedNodesOfferingId }),
  };
};

const serializeAws_json1_1DescribeReservedNodesRequest = (
  input: DescribeReservedNodesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.OfferingType != null && { OfferingType: input.OfferingType }),
    ...(input.ReservationId != null && { ReservationId: input.ReservationId }),
    ...(input.ReservedNodesOfferingId != null && { ReservedNodesOfferingId: input.ReservedNodesOfferingId }),
  };
};

const serializeAws_json1_1DescribeServiceUpdatesRequest = (
  input: DescribeServiceUpdatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterNames != null && {
      ClusterNames: serializeAws_json1_1ClusterNameList(input.ClusterNames, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceUpdateName != null && { ServiceUpdateName: input.ServiceUpdateName }),
    ...(input.Status != null && { Status: serializeAws_json1_1ServiceUpdateStatusList(input.Status, context) }),
  };
};

const serializeAws_json1_1DescribeSnapshotsRequest = (
  input: DescribeSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ShowDetail != null && { ShowDetail: input.ShowDetail }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
    ...(input.Source != null && { Source: input.Source }),
  };
};

const serializeAws_json1_1DescribeSubnetGroupsRequest = (
  input: DescribeSubnetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

const serializeAws_json1_1DescribeUsersRequest = (input: DescribeUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1FailoverShardRequest = (input: FailoverShardRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.ShardName != null && { ShardName: input.ShardName }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListAllowedNodeTypeUpdatesRequest = (
  input: ListAllowedNodeTypeUpdatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
  };
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ParameterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ParameterNameValue = (input: ParameterNameValue, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_json1_1ParameterNameValueList = (input: ParameterNameValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParameterNameValue(entry, context);
    });
};

const serializeAws_json1_1PasswordListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PurchaseReservedNodesOfferingRequest = (
  input: PurchaseReservedNodesOfferingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NodeCount != null && { NodeCount: input.NodeCount }),
    ...(input.ReservationId != null && { ReservationId: input.ReservationId }),
    ...(input.ReservedNodesOfferingId != null && { ReservedNodesOfferingId: input.ReservedNodesOfferingId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1ReplicaConfigurationRequest = (
  input: ReplicaConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicaCount != null && { ReplicaCount: input.ReplicaCount }),
  };
};

const serializeAws_json1_1ResetParameterGroupRequest = (
  input: ResetParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllParameters != null && { AllParameters: input.AllParameters }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNames != null && {
      ParameterNames: serializeAws_json1_1ParameterNameList(input.ParameterNames, context),
    }),
  };
};

const serializeAws_json1_1SecurityGroupIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ServiceUpdateRequest = (input: ServiceUpdateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceUpdateNameToApply != null && { ServiceUpdateNameToApply: input.ServiceUpdateNameToApply }),
  };
};

const serializeAws_json1_1ServiceUpdateStatusList = (
  input: (ServiceUpdateStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ShardConfigurationRequest = (
  input: ShardConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ShardCount != null && { ShardCount: input.ShardCount }),
  };
};

const serializeAws_json1_1SnapshotArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
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
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateACLRequest = (input: UpdateACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.UserNamesToAdd != null && {
      UserNamesToAdd: serializeAws_json1_1UserNameListInput(input.UserNamesToAdd, context),
    }),
    ...(input.UserNamesToRemove != null && {
      UserNamesToRemove: serializeAws_json1_1UserNameListInput(input.UserNamesToRemove, context),
    }),
  };
};

const serializeAws_json1_1UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.MaintenanceWindow != null && { MaintenanceWindow: input.MaintenanceWindow }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ReplicaConfiguration != null && {
      ReplicaConfiguration: serializeAws_json1_1ReplicaConfigurationRequest(input.ReplicaConfiguration, context),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdsList(input.SecurityGroupIds, context),
    }),
    ...(input.ShardConfiguration != null && {
      ShardConfiguration: serializeAws_json1_1ShardConfigurationRequest(input.ShardConfiguration, context),
    }),
    ...(input.SnapshotRetentionLimit != null && { SnapshotRetentionLimit: input.SnapshotRetentionLimit }),
    ...(input.SnapshotWindow != null && { SnapshotWindow: input.SnapshotWindow }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SnsTopicStatus != null && { SnsTopicStatus: input.SnsTopicStatus }),
  };
};

const serializeAws_json1_1UpdateParameterGroupRequest = (
  input: UpdateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNameValues != null && {
      ParameterNameValues: serializeAws_json1_1ParameterNameValueList(input.ParameterNameValues, context),
    }),
  };
};

const serializeAws_json1_1UpdateSubnetGroupRequest = (
  input: UpdateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessString != null && { AccessString: input.AccessString }),
    ...(input.AuthenticationMode != null && {
      AuthenticationMode: serializeAws_json1_1AuthenticationMode(input.AuthenticationMode, context),
    }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1UserNameListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1ACL = (output: any, context: __SerdeContext): ACL => {
  return {
    ARN: __expectString(output.ARN),
    Clusters: output.Clusters != null ? deserializeAws_json1_1ACLClusterNameList(output.Clusters, context) : undefined,
    MinimumEngineVersion: __expectString(output.MinimumEngineVersion),
    Name: __expectString(output.Name),
    PendingChanges:
      output.PendingChanges != null
        ? deserializeAws_json1_1ACLPendingChanges(output.PendingChanges, context)
        : undefined,
    Status: __expectString(output.Status),
    UserNames: output.UserNames != null ? deserializeAws_json1_1UserNameList(output.UserNames, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ACLAlreadyExistsFault = (output: any, context: __SerdeContext): ACLAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ACLClusterNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ACLList = (output: any, context: __SerdeContext): ACL[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ACL(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ACLNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ACLNotFoundFault = (output: any, context: __SerdeContext): ACLNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ACLPendingChanges = (output: any, context: __SerdeContext): ACLPendingChanges => {
  return {
    UserNamesToAdd:
      output.UserNamesToAdd != null ? deserializeAws_json1_1UserNameList(output.UserNamesToAdd, context) : undefined,
    UserNamesToRemove:
      output.UserNamesToRemove != null
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
      output.ProcessedClusters != null
        ? deserializeAws_json1_1ClusterList(output.ProcessedClusters, context)
        : undefined,
    UnprocessedClusters:
      output.UnprocessedClusters != null
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
      output.ClusterEndpoint != null ? deserializeAws_json1_1Endpoint(output.ClusterEndpoint, context) : undefined,
    DataTiering: __expectString(output.DataTiering),
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
      output.PendingUpdates != null
        ? deserializeAws_json1_1ClusterPendingUpdates(output.PendingUpdates, context)
        : undefined,
    SecurityGroups:
      output.SecurityGroups != null
        ? deserializeAws_json1_1SecurityGroupMembershipList(output.SecurityGroups, context)
        : undefined,
    Shards: output.Shards != null ? deserializeAws_json1_1ShardList(output.Shards, context) : undefined,
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
    Shards: output.Shards != null ? deserializeAws_json1_1ShardDetails(output.Shards, context) : undefined,
    SnapshotRetentionLimit: __expectInt32(output.SnapshotRetentionLimit),
    SnapshotWindow: __expectString(output.SnapshotWindow),
    SubnetGroupName: __expectString(output.SubnetGroupName),
    TopicArn: __expectString(output.TopicArn),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1ClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Cluster(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ClusterNotFoundFault = (output: any, context: __SerdeContext): ClusterNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ClusterPendingUpdates = (output: any, context: __SerdeContext): ClusterPendingUpdates => {
  return {
    ACLs: output.ACLs != null ? deserializeAws_json1_1ACLsUpdateStatus(output.ACLs, context) : undefined,
    Resharding:
      output.Resharding != null ? deserializeAws_json1_1ReshardingStatus(output.Resharding, context) : undefined,
    ServiceUpdates:
      output.ServiceUpdates != null
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
    Snapshot: output.Snapshot != null ? deserializeAws_json1_1Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateACLResponse = (output: any, context: __SerdeContext): CreateACLResponse => {
  return {
    ACL: output.ACL != null ? deserializeAws_json1_1ACL(output.ACL, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup != null ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? deserializeAws_json1_1Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup != null ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    User: output.User != null ? deserializeAws_json1_1User(output.User, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DefaultUserRequired = (output: any, context: __SerdeContext): DefaultUserRequired => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeleteACLResponse = (output: any, context: __SerdeContext): DeleteACLResponse => {
  return {
    ACL: output.ACL != null ? deserializeAws_json1_1ACL(output.ACL, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup != null ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? deserializeAws_json1_1Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup != null ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {
    User: output.User != null ? deserializeAws_json1_1User(output.User, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeACLsResponse = (output: any, context: __SerdeContext): DescribeACLsResponse => {
  return {
    ACLs: output.ACLs != null ? deserializeAws_json1_1ACLList(output.ACLs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    Clusters: output.Clusters != null ? deserializeAws_json1_1ClusterList(output.Clusters, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEngineVersionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEngineVersionsResponse => {
  return {
    EngineVersions:
      output.EngineVersions != null
        ? deserializeAws_json1_1EngineVersionInfoList(output.EngineVersions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    Events: output.Events != null ? deserializeAws_json1_1EventList(output.Events, context) : undefined,
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
      output.ParameterGroups != null
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
      output.Parameters != null ? deserializeAws_json1_1ParametersList(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReservedNodesOfferingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReservedNodesOfferingsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ReservedNodesOfferings:
      output.ReservedNodesOfferings != null
        ? deserializeAws_json1_1ReservedNodesOfferingList(output.ReservedNodesOfferings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReservedNodesResponse = (
  output: any,
  context: __SerdeContext
): DescribeReservedNodesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ReservedNodes:
      output.ReservedNodes != null ? deserializeAws_json1_1ReservedNodeList(output.ReservedNodes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServiceUpdatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceUpdatesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceUpdates:
      output.ServiceUpdates != null
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
    Snapshots: output.Snapshots != null ? deserializeAws_json1_1SnapshotList(output.Snapshots, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSubnetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubnetGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SubnetGroups:
      output.SubnetGroups != null ? deserializeAws_json1_1SubnetGroupList(output.SubnetGroups, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUsersResponse = (output: any, context: __SerdeContext): DescribeUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? deserializeAws_json1_1UserList(output.Users, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EngineVersionInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Message: __expectString(output.Message),
    SourceName: __expectString(output.SourceName),
    SourceType: __expectString(output.SourceType),
  } as any;
};

const deserializeAws_json1_1EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailoverShardResponse = (output: any, context: __SerdeContext): FailoverShardResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
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
      output.ScaleDownNodeTypes != null
        ? deserializeAws_json1_1NodeTypeList(output.ScaleDownNodeTypes, context)
        : undefined,
    ScaleUpNodeTypes:
      output.ScaleUpNodeTypes != null
        ? deserializeAws_json1_1NodeTypeList(output.ScaleUpNodeTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Node = (output: any, context: __SerdeContext): Node => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    Endpoint: output.Endpoint != null ? deserializeAws_json1_1Endpoint(output.Endpoint, context) : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Node(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterGroup(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Parameter(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PendingModifiedServiceUpdate(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PurchaseReservedNodesOfferingResponse = (
  output: any,
  context: __SerdeContext
): PurchaseReservedNodesOfferingResponse => {
  return {
    ReservedNode:
      output.ReservedNode != null ? deserializeAws_json1_1ReservedNode(output.ReservedNode, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    RecurringChargeAmount: __limitedParseDouble(output.RecurringChargeAmount),
    RecurringChargeFrequency: __expectString(output.RecurringChargeFrequency),
  } as any;
};

const deserializeAws_json1_1RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecurringCharge(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReservedNode = (output: any, context: __SerdeContext): ReservedNode => {
  return {
    ARN: __expectString(output.ARN),
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    NodeCount: __expectInt32(output.NodeCount),
    NodeType: __expectString(output.NodeType),
    OfferingType: __expectString(output.OfferingType),
    RecurringCharges:
      output.RecurringCharges != null
        ? deserializeAws_json1_1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservationId: __expectString(output.ReservationId),
    ReservedNodesOfferingId: __expectString(output.ReservedNodesOfferingId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ReservedNodeAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReservedNodeList = (output: any, context: __SerdeContext): ReservedNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservedNode(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReservedNodeNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReservedNodeQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReservedNodesOffering = (output: any, context: __SerdeContext): ReservedNodesOffering => {
  return {
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    NodeType: __expectString(output.NodeType),
    OfferingType: __expectString(output.OfferingType),
    RecurringCharges:
      output.RecurringCharges != null
        ? deserializeAws_json1_1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservedNodesOfferingId: __expectString(output.ReservedNodesOfferingId),
  } as any;
};

const deserializeAws_json1_1ReservedNodesOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedNodesOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservedNodesOffering(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReservedNodesOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodesOfferingNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResetParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): ResetParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup != null ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ReshardingStatus = (output: any, context: __SerdeContext): ReshardingStatus => {
  return {
    SlotMigration:
      output.SlotMigration != null ? deserializeAws_json1_1SlotMigration(output.SlotMigration, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityGroupMembership(entry, context);
    });
  return retVal;
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
      output.AutoUpdateStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AutoUpdateStartDate)))
        : undefined,
    ClusterName: __expectString(output.ClusterName),
    Description: __expectString(output.Description),
    NodesUpdated: __expectString(output.NodesUpdated),
    ReleaseDate:
      output.ReleaseDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReleaseDate)))
        : undefined,
    ServiceUpdateName: __expectString(output.ServiceUpdateName),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ServiceUpdateList = (output: any, context: __SerdeContext): ServiceUpdate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceUpdate(entry, context);
    });
  return retVal;
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
    Nodes: output.Nodes != null ? deserializeAws_json1_1NodeList(output.Nodes, context) : undefined,
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
      output.Configuration != null
        ? deserializeAws_json1_1ShardConfiguration(output.Configuration, context)
        : undefined,
    Name: __expectString(output.Name),
    Size: __expectString(output.Size),
    SnapshotCreationTime:
      output.SnapshotCreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SnapshotCreationTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ShardDetails = (output: any, context: __SerdeContext): ShardDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ShardDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ShardList = (output: any, context: __SerdeContext): Shard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Shard(entry, context);
    });
  return retVal;
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
      output.ClusterConfiguration != null
        ? deserializeAws_json1_1ClusterConfiguration(output.ClusterConfiguration, context)
        : undefined,
    DataTiering: __expectString(output.DataTiering),
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
      output.AvailabilityZone != null
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
    Subnets: output.Subnets != null ? deserializeAws_json1_1SubnetList(output.Subnets, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubnetGroup(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subnet(entry, context);
    });
  return retVal;
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
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnprocessedCluster(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateACLResponse = (output: any, context: __SerdeContext): UpdateACLResponse => {
  return {
    ACL: output.ACL != null ? deserializeAws_json1_1ACL(output.ACL, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup != null ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup != null ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {
    User: output.User != null ? deserializeAws_json1_1User(output.User, context) : undefined,
  } as any;
};

const deserializeAws_json1_1User = (output: any, context: __SerdeContext): User => {
  return {
    ACLNames: output.ACLNames != null ? deserializeAws_json1_1ACLNameList(output.ACLNames, context) : undefined,
    ARN: __expectString(output.ARN),
    AccessString: __expectString(output.AccessString),
    Authentication:
      output.Authentication != null ? deserializeAws_json1_1Authentication(output.Authentication, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1User(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UserNameList = (output: any, context: __SerdeContext): string[] => {
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
