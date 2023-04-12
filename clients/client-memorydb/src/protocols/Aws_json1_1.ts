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

/**
 * serializeAws_json1_1BatchUpdateClusterCommand
 */
export const se_BatchUpdateClusterCommand = async (
  input: BatchUpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchUpdateCluster");
  let body: any;
  body = JSON.stringify(se_BatchUpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopySnapshotCommand
 */
export const se_CopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CopySnapshot");
  let body: any;
  body = JSON.stringify(se_CopySnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateACLCommand
 */
export const se_CreateACLCommand = async (
  input: CreateACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateACL");
  let body: any;
  body = JSON.stringify(se_CreateACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCluster");
  let body: any;
  body = JSON.stringify(se_CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateParameterGroupCommand
 */
export const se_CreateParameterGroupCommand = async (
  input: CreateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateParameterGroup");
  let body: any;
  body = JSON.stringify(se_CreateParameterGroupRequest(input, context));
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
 * serializeAws_json1_1CreateSubnetGroupCommand
 */
export const se_CreateSubnetGroupCommand = async (
  input: CreateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSubnetGroup");
  let body: any;
  body = JSON.stringify(se_CreateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUser");
  let body: any;
  body = JSON.stringify(se_CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteACLCommand
 */
export const se_DeleteACLCommand = async (
  input: DeleteACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteACL");
  let body: any;
  body = JSON.stringify(se_DeleteACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCluster");
  let body: any;
  body = JSON.stringify(se_DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteParameterGroupCommand
 */
export const se_DeleteParameterGroupCommand = async (
  input: DeleteParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteParameterGroup");
  let body: any;
  body = JSON.stringify(se_DeleteParameterGroupRequest(input, context));
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
 * serializeAws_json1_1DeleteSubnetGroupCommand
 */
export const se_DeleteSubnetGroupCommand = async (
  input: DeleteSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSubnetGroup");
  let body: any;
  body = JSON.stringify(se_DeleteSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(se_DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeACLsCommand
 */
export const se_DescribeACLsCommand = async (
  input: DescribeACLsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeACLs");
  let body: any;
  body = JSON.stringify(se_DescribeACLsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClustersCommand
 */
export const se_DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClusters");
  let body: any;
  body = JSON.stringify(se_DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEngineVersionsCommand
 */
export const se_DescribeEngineVersionsCommand = async (
  input: DescribeEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEngineVersions");
  let body: any;
  body = JSON.stringify(se_DescribeEngineVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEvents");
  let body: any;
  body = JSON.stringify(se_DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeParameterGroupsCommand
 */
export const se_DescribeParameterGroupsCommand = async (
  input: DescribeParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeParameterGroups");
  let body: any;
  body = JSON.stringify(se_DescribeParameterGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeParametersCommand
 */
export const se_DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeParameters");
  let body: any;
  body = JSON.stringify(se_DescribeParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReservedNodesCommand
 */
export const se_DescribeReservedNodesCommand = async (
  input: DescribeReservedNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReservedNodes");
  let body: any;
  body = JSON.stringify(se_DescribeReservedNodesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReservedNodesOfferingsCommand
 */
export const se_DescribeReservedNodesOfferingsCommand = async (
  input: DescribeReservedNodesOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReservedNodesOfferings");
  let body: any;
  body = JSON.stringify(se_DescribeReservedNodesOfferingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServiceUpdatesCommand
 */
export const se_DescribeServiceUpdatesCommand = async (
  input: DescribeServiceUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServiceUpdates");
  let body: any;
  body = JSON.stringify(se_DescribeServiceUpdatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSnapshotsCommand
 */
export const se_DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSnapshots");
  let body: any;
  body = JSON.stringify(se_DescribeSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubnetGroupsCommand
 */
export const se_DescribeSubnetGroupsCommand = async (
  input: DescribeSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSubnetGroups");
  let body: any;
  body = JSON.stringify(se_DescribeSubnetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUsersCommand
 */
export const se_DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUsers");
  let body: any;
  body = JSON.stringify(se_DescribeUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1FailoverShardCommand
 */
export const se_FailoverShardCommand = async (
  input: FailoverShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("FailoverShard");
  let body: any;
  body = JSON.stringify(se_FailoverShardRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAllowedNodeTypeUpdatesCommand
 */
export const se_ListAllowedNodeTypeUpdatesCommand = async (
  input: ListAllowedNodeTypeUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAllowedNodeTypeUpdates");
  let body: any;
  body = JSON.stringify(se_ListAllowedNodeTypeUpdatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(se_ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PurchaseReservedNodesOfferingCommand
 */
export const se_PurchaseReservedNodesOfferingCommand = async (
  input: PurchaseReservedNodesOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PurchaseReservedNodesOffering");
  let body: any;
  body = JSON.stringify(se_PurchaseReservedNodesOfferingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetParameterGroupCommand
 */
export const se_ResetParameterGroupCommand = async (
  input: ResetParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResetParameterGroup");
  let body: any;
  body = JSON.stringify(se_ResetParameterGroupRequest(input, context));
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
 * serializeAws_json1_1UpdateACLCommand
 */
export const se_UpdateACLCommand = async (
  input: UpdateACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateACL");
  let body: any;
  body = JSON.stringify(se_UpdateACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterCommand
 */
export const se_UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCluster");
  let body: any;
  body = JSON.stringify(se_UpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateParameterGroupCommand
 */
export const se_UpdateParameterGroupCommand = async (
  input: UpdateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateParameterGroup");
  let body: any;
  body = JSON.stringify(se_UpdateParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSubnetGroupCommand
 */
export const se_UpdateSubnetGroupCommand = async (
  input: UpdateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSubnetGroup");
  let body: any;
  body = JSON.stringify(se_UpdateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUser");
  let body: any;
  body = JSON.stringify(se_UpdateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchUpdateClusterCommand
 */
export const de_BatchUpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchUpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchUpdateClusterResponse(data, context);
  const response: BatchUpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchUpdateClusterCommandError
 */
const de_BatchUpdateClusterCommandError = async (
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
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.memorydb#ServiceUpdateNotFoundFault":
      throw await de_ServiceUpdateNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CopySnapshotCommand
 */
export const de_CopySnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopySnapshotResponse(data, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CopySnapshotCommandError
 */
const de_CopySnapshotCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidSnapshotStateFault":
    case "com.amazonaws.memorydb#InvalidSnapshotStateFault":
      throw await de_InvalidSnapshotStateFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.memorydb#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateACLCommand
 */
export const de_CreateACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateACLResponse(data, context);
  const response: CreateACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateACLCommandError
 */
const de_CreateACLCommandError = async (
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
      throw await de_ACLAlreadyExistsFaultRes(parsedOutput, context);
    case "ACLQuotaExceededFault":
    case "com.amazonaws.memorydb#ACLQuotaExceededFault":
      throw await de_ACLQuotaExceededFaultRes(parsedOutput, context);
    case "DefaultUserRequired":
    case "com.amazonaws.memorydb#DefaultUserRequired":
      throw await de_DefaultUserRequiredRes(parsedOutput, context);
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      throw await de_DuplicateUserNameFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateClusterCommandError
 */
const de_CreateClusterCommandError = async (
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
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "ClusterAlreadyExistsFault":
    case "com.amazonaws.memorydb#ClusterAlreadyExistsFault":
      throw await de_ClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.memorydb#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await de_InvalidACLStateFaultRes(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.memorydb#InvalidCredentialsException":
      throw await de_InvalidCredentialsExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.memorydb#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "ShardsPerClusterQuotaExceededFault":
    case "com.amazonaws.memorydb#ShardsPerClusterQuotaExceededFault":
      throw await de_ShardsPerClusterQuotaExceededFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateParameterGroupCommand
 */
export const de_CreateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateParameterGroupResponse(data, context);
  const response: CreateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateParameterGroupCommandError
 */
const de_CreateParameterGroupCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupAlreadyExistsFault":
    case "com.amazonaws.memorydb#ParameterGroupAlreadyExistsFault":
      throw await de_ParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "ParameterGroupQuotaExceededFault":
    case "com.amazonaws.memorydb#ParameterGroupQuotaExceededFault":
      throw await de_ParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.memorydb#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSubnetGroupCommand
 */
export const de_CreateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSubnetGroupResponse(data, context);
  const response: CreateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSubnetGroupCommandError
 */
const de_CreateSubnetGroupCommandError = async (
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
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupAlreadyExistsFault":
    case "com.amazonaws.memorydb#SubnetGroupAlreadyExistsFault":
      throw await de_SubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "SubnetGroupQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetGroupQuotaExceededFault":
      throw await de_SubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.memorydb#SubnetNotAllowedFault":
      throw await de_SubnetNotAllowedFaultRes(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetQuotaExceededFault":
      throw await de_SubnetQuotaExceededFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
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
      throw await de_DuplicateUserNameFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    case "UserAlreadyExistsFault":
    case "com.amazonaws.memorydb#UserAlreadyExistsFault":
      throw await de_UserAlreadyExistsFaultRes(parsedOutput, context);
    case "UserQuotaExceededFault":
    case "com.amazonaws.memorydb#UserQuotaExceededFault":
      throw await de_UserQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteACLCommand
 */
export const de_DeleteACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteACLResponse(data, context);
  const response: DeleteACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteACLCommandError
 */
const de_DeleteACLCommandError = async (
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
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await de_InvalidACLStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteClusterCommandError
 */
const de_DeleteClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.memorydb#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteParameterGroupCommand
 */
export const de_DeleteParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteParameterGroupResponse(data, context);
  const response: DeleteParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteParameterGroupCommandError
 */
const de_DeleteParameterGroupCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidSnapshotStateFault":
    case "com.amazonaws.memorydb#InvalidSnapshotStateFault":
      throw await de_InvalidSnapshotStateFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSubnetGroupCommand
 */
export const de_DeleteSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSubnetGroupResponse(data, context);
  const response: DeleteSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSubnetGroupCommandError
 */
const de_DeleteSubnetGroupCommandError = async (
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
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupInUseFault":
    case "com.amazonaws.memorydb#SubnetGroupInUseFault":
      throw await de_SubnetGroupInUseFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
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
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidUserStateFault":
    case "com.amazonaws.memorydb#InvalidUserStateFault":
      throw await de_InvalidUserStateFaultRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeACLsCommand
 */
export const de_DescribeACLsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeACLsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeACLsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeACLsResponse(data, context);
  const response: DescribeACLsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeACLsCommandError
 */
const de_DescribeACLsCommandError = async (
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
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClustersCommandError
 */
const de_DescribeClustersCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEngineVersionsCommand
 */
export const de_DescribeEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEngineVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEngineVersionsResponse(data, context);
  const response: DescribeEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEngineVersionsCommandError
 */
const de_DescribeEngineVersionsCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeParameterGroupsCommand
 */
export const de_DescribeParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeParameterGroupsResponse(data, context);
  const response: DescribeParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeParameterGroupsCommandError
 */
const de_DescribeParameterGroupsCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeParametersCommand
 */
export const de_DescribeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeParametersResponse(data, context);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeParametersCommandError
 */
const de_DescribeParametersCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeReservedNodesCommand
 */
export const de_DescribeReservedNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReservedNodesResponse(data, context);
  const response: DescribeReservedNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeReservedNodesCommandError
 */
const de_DescribeReservedNodesCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReservedNodeNotFoundFault":
    case "com.amazonaws.memorydb#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeReservedNodesOfferingsCommand
 */
export const de_DescribeReservedNodesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedNodesOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReservedNodesOfferingsResponse(data, context);
  const response: DescribeReservedNodesOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeReservedNodesOfferingsCommandError
 */
const de_DescribeReservedNodesOfferingsCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReservedNodesOfferingNotFoundFault":
    case "com.amazonaws.memorydb#ReservedNodesOfferingNotFoundFault":
      throw await de_ReservedNodesOfferingNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeServiceUpdatesCommand
 */
export const de_DescribeServiceUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServiceUpdatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceUpdatesResponse(data, context);
  const response: DescribeServiceUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServiceUpdatesCommandError
 */
const de_DescribeServiceUpdatesCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSnapshotsCommand
 */
export const de_DescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSnapshotsResponse(data, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSnapshotsCommandError
 */
const de_DescribeSnapshotsCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSubnetGroupsCommand
 */
export const de_DescribeSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSubnetGroupsResponse(data, context);
  const response: DescribeSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSubnetGroupsCommandError
 */
const de_DescribeSubnetGroupsCommandError = async (
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
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeUsersCommand
 */
export const de_DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUsersResponse(data, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUsersCommandError
 */
const de_DescribeUsersCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1FailoverShardCommand
 */
export const de_FailoverShardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverShardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FailoverShardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FailoverShardResponse(data, context);
  const response: FailoverShardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1FailoverShardCommandError
 */
const de_FailoverShardCommandError = async (
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
      throw await de_APICallRateForCustomerExceededFaultRes(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.memorydb#InvalidKMSKeyFault":
      throw await de_InvalidKMSKeyFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ShardNotFoundFault":
    case "com.amazonaws.memorydb#ShardNotFoundFault":
      throw await de_ShardNotFoundFaultRes(parsedOutput, context);
    case "TestFailoverNotAvailableFault":
    case "com.amazonaws.memorydb#TestFailoverNotAvailableFault":
      throw await de_TestFailoverNotAvailableFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAllowedNodeTypeUpdatesCommand
 */
export const de_ListAllowedNodeTypeUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAllowedNodeTypeUpdatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAllowedNodeTypeUpdatesResponse(data, context);
  const response: ListAllowedNodeTypeUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAllowedNodeTypeUpdatesCommandError
 */
const de_ListAllowedNodeTypeUpdatesCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
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
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      throw await de_InvalidARNFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1PurchaseReservedNodesOfferingCommand
 */
export const de_PurchaseReservedNodesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedNodesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PurchaseReservedNodesOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PurchaseReservedNodesOfferingResponse(data, context);
  const response: PurchaseReservedNodesOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PurchaseReservedNodesOfferingCommandError
 */
const de_PurchaseReservedNodesOfferingCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReservedNodeAlreadyExistsFault":
    case "com.amazonaws.memorydb#ReservedNodeAlreadyExistsFault":
      throw await de_ReservedNodeAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedNodeQuotaExceededFault":
    case "com.amazonaws.memorydb#ReservedNodeQuotaExceededFault":
      throw await de_ReservedNodeQuotaExceededFaultRes(parsedOutput, context);
    case "ReservedNodesOfferingNotFoundFault":
    case "com.amazonaws.memorydb#ReservedNodesOfferingNotFoundFault":
      throw await de_ReservedNodesOfferingNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_1ResetParameterGroupCommand
 */
export const de_ResetParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResetParameterGroupResponse(data, context);
  const response: ResetParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResetParameterGroupCommandError
 */
const de_ResetParameterGroupCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      throw await de_InvalidARNFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.memorydb#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
    case "ACLNotFoundFault":
    case "com.amazonaws.memorydb#ACLNotFoundFault":
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.memorydb#InvalidARNFault":
      throw await de_InvalidARNFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.memorydb#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "TagNotFoundFault":
    case "com.amazonaws.memorydb#TagNotFoundFault":
      throw await de_TagNotFoundFaultRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateACLCommand
 */
export const de_UpdateACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateACLResponse(data, context);
  const response: UpdateACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateACLCommandError
 */
const de_UpdateACLCommandError = async (
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
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "DefaultUserRequired":
    case "com.amazonaws.memorydb#DefaultUserRequired":
      throw await de_DefaultUserRequiredRes(parsedOutput, context);
    case "DuplicateUserNameFault":
    case "com.amazonaws.memorydb#DuplicateUserNameFault":
      throw await de_DuplicateUserNameFaultRes(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await de_InvalidACLStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateClusterCommand
 */
export const de_UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateClusterResponse(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateClusterCommandError
 */
const de_UpdateClusterCommandError = async (
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
      throw await de_ACLNotFoundFaultRes(parsedOutput, context);
    case "ClusterNotFoundFault":
    case "com.amazonaws.memorydb#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "InvalidACLStateFault":
    case "com.amazonaws.memorydb#InvalidACLStateFault":
      throw await de_InvalidACLStateFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.memorydb#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.memorydb#InvalidKMSKeyFault":
      throw await de_InvalidKMSKeyFaultRes(parsedOutput, context);
    case "InvalidNodeStateFault":
    case "com.amazonaws.memorydb#InvalidNodeStateFault":
      throw await de_InvalidNodeStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.memorydb#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.memorydb#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NoOperationFault":
    case "com.amazonaws.memorydb#NoOperationFault":
      throw await de_NoOperationFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.memorydb#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "ShardsPerClusterQuotaExceededFault":
    case "com.amazonaws.memorydb#ShardsPerClusterQuotaExceededFault":
      throw await de_ShardsPerClusterQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateParameterGroupCommand
 */
export const de_UpdateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateParameterGroupResponse(data, context);
  const response: UpdateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateParameterGroupCommandError
 */
const de_UpdateParameterGroupCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.memorydb#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.memorydb#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSubnetGroupCommand
 */
export const de_UpdateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSubnetGroupResponse(data, context);
  const response: UpdateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSubnetGroupCommandError
 */
const de_UpdateSubnetGroupCommandError = async (
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
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.memorydb#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "SubnetInUse":
    case "com.amazonaws.memorydb#SubnetInUse":
      throw await de_SubnetInUseRes(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.memorydb#SubnetNotAllowedFault":
      throw await de_SubnetNotAllowedFaultRes(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.memorydb#SubnetQuotaExceededFault":
      throw await de_SubnetQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserCommandError
 */
const de_UpdateUserCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.memorydb#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidUserStateFault":
    case "com.amazonaws.memorydb#InvalidUserStateFault":
      throw await de_InvalidUserStateFaultRes(parsedOutput, context);
    case "UserNotFoundFault":
    case "com.amazonaws.memorydb#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ACLAlreadyExistsFaultRes
 */
const de_ACLAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ACLAlreadyExistsFault(body, context);
  const exception = new ACLAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ACLNotFoundFaultRes
 */
const de_ACLNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<ACLNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ACLNotFoundFault(body, context);
  const exception = new ACLNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ACLQuotaExceededFaultRes
 */
const de_ACLQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ACLQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ACLQuotaExceededFault(body, context);
  const exception = new ACLQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1APICallRateForCustomerExceededFaultRes
 */
const de_APICallRateForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<APICallRateForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_APICallRateForCustomerExceededFault(body, context);
  const exception = new APICallRateForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterAlreadyExistsFaultRes
 */
const de_ClusterAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterAlreadyExistsFault(body, context);
  const exception = new ClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterNotFoundFaultRes
 */
const de_ClusterNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterNotFoundFault(body, context);
  const exception = new ClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultRes
 */
const de_ClusterQuotaForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterQuotaForCustomerExceededFault(body, context);
  const exception = new ClusterQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DefaultUserRequiredRes
 */
const de_DefaultUserRequiredRes = async (parsedOutput: any, context: __SerdeContext): Promise<DefaultUserRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DefaultUserRequired(body, context);
  const exception = new DefaultUserRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateUserNameFaultRes
 */
const de_DuplicateUserNameFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateUserNameFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateUserNameFault(body, context);
  const exception = new DuplicateUserNameFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientClusterCapacityFaultRes
 */
const de_InsufficientClusterCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientClusterCapacityFault(body, context);
  const exception = new InsufficientClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidACLStateFaultRes
 */
const de_InvalidACLStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidACLStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidACLStateFault(body, context);
  const exception = new InvalidACLStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidARNFaultRes
 */
const de_InvalidARNFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidARNFault(body, context);
  const exception = new InvalidARNFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidClusterStateFaultRes
 */
const de_InvalidClusterStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterStateFault(body, context);
  const exception = new InvalidClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCredentialsExceptionRes
 */
const de_InvalidCredentialsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCredentialsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCredentialsException(body, context);
  const exception = new InvalidCredentialsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKMSKeyFaultRes
 */
const de_InvalidKMSKeyFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidKMSKeyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidKMSKeyFault(body, context);
  const exception = new InvalidKMSKeyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNodeStateFaultRes
 */
const de_InvalidNodeStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNodeStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNodeStateFault(body, context);
  const exception = new InvalidNodeStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterGroupStateFaultRes
 */
const de_InvalidParameterGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterGroupStateFault(body, context);
  const exception = new InvalidParameterGroupStateFault({
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
  const deserialized: any = de_InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSnapshotStateFaultRes
 */
const de_InvalidSnapshotStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSnapshotStateFault(body, context);
  const exception = new InvalidSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSubnetRes
 */
const de_InvalidSubnetRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSubnet(body, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidUserStateFaultRes
 */
const de_InvalidUserStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUserStateFault(body, context);
  const exception = new InvalidUserStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidVPCNetworkStateFaultRes
 */
const de_InvalidVPCNetworkStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidVPCNetworkStateFault(body, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NodeQuotaForClusterExceededFaultRes
 */
const de_NodeQuotaForClusterExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeQuotaForClusterExceededFault(body, context);
  const exception = new NodeQuotaForClusterExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NodeQuotaForCustomerExceededFaultRes
 */
const de_NodeQuotaForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeQuotaForCustomerExceededFault(body, context);
  const exception = new NodeQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoOperationFaultRes
 */
const de_NoOperationFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoOperationFault(body, context);
  const exception = new NoOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterGroupAlreadyExistsFaultRes
 */
const de_ParameterGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterGroupAlreadyExistsFault(body, context);
  const exception = new ParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterGroupNotFoundFaultRes
 */
const de_ParameterGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterGroupNotFoundFault(body, context);
  const exception = new ParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterGroupQuotaExceededFaultRes
 */
const de_ParameterGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterGroupQuotaExceededFault(body, context);
  const exception = new ParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReservedNodeAlreadyExistsFaultRes
 */
const de_ReservedNodeAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeAlreadyExistsFault(body, context);
  const exception = new ReservedNodeAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReservedNodeNotFoundFaultRes
 */
const de_ReservedNodeNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeNotFoundFault(body, context);
  const exception = new ReservedNodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReservedNodeQuotaExceededFaultRes
 */
const de_ReservedNodeQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeQuotaExceededFault(body, context);
  const exception = new ReservedNodeQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReservedNodesOfferingNotFoundFaultRes
 */
const de_ReservedNodesOfferingNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodesOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodesOfferingNotFoundFault(body, context);
  const exception = new ReservedNodesOfferingNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultRes
 */
const de_ServiceLinkedRoleNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceLinkedRoleNotFoundFault(body, context);
  const exception = new ServiceLinkedRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUpdateNotFoundFaultRes
 */
const de_ServiceUpdateNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUpdateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUpdateNotFoundFault(body, context);
  const exception = new ServiceUpdateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ShardNotFoundFaultRes
 */
const de_ShardNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<ShardNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ShardNotFoundFault(body, context);
  const exception = new ShardNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ShardsPerClusterQuotaExceededFaultRes
 */
const de_ShardsPerClusterQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ShardsPerClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ShardsPerClusterQuotaExceededFault(body, context);
  const exception = new ShardsPerClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SnapshotAlreadyExistsFaultRes
 */
const de_SnapshotAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotAlreadyExistsFault(body, context);
  const exception = new SnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SnapshotNotFoundFaultRes
 */
const de_SnapshotNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotNotFoundFault(body, context);
  const exception = new SnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SnapshotQuotaExceededFaultRes
 */
const de_SnapshotQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotQuotaExceededFault(body, context);
  const exception = new SnapshotQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupAlreadyExistsFaultRes
 */
const de_SubnetGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupAlreadyExistsFault(body, context);
  const exception = new SubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupInUseFaultRes
 */
const de_SubnetGroupInUseFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupInUseFault(body, context);
  const exception = new SubnetGroupInUseFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupNotFoundFaultRes
 */
const de_SubnetGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupNotFoundFault(body, context);
  const exception = new SubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupQuotaExceededFaultRes
 */
const de_SubnetGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupQuotaExceededFault(body, context);
  const exception = new SubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetInUseRes
 */
const de_SubnetInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetInUse(body, context);
  const exception = new SubnetInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetNotAllowedFaultRes
 */
const de_SubnetNotAllowedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotAllowedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetNotAllowedFault(body, context);
  const exception = new SubnetNotAllowedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetQuotaExceededFaultRes
 */
const de_SubnetQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetQuotaExceededFault(body, context);
  const exception = new SubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagNotFoundFaultRes
 */
const de_TagNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagNotFoundFault(body, context);
  const exception = new TagNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagQuotaPerResourceExceededRes
 */
const de_TagQuotaPerResourceExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagQuotaPerResourceExceeded(body, context);
  const exception = new TagQuotaPerResourceExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TestFailoverNotAvailableFaultRes
 */
const de_TestFailoverNotAvailableFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TestFailoverNotAvailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TestFailoverNotAvailableFault(body, context);
  const exception = new TestFailoverNotAvailableFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserAlreadyExistsFaultRes
 */
const de_UserAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserAlreadyExistsFault(body, context);
  const exception = new UserAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserNotFoundFaultRes
 */
const de_UserNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<UserNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserNotFoundFault(body, context);
  const exception = new UserNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserQuotaExceededFaultRes
 */
const de_UserQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserQuotaExceededFault(body, context);
  const exception = new UserQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AuthenticationMode
 */
const se_AuthenticationMode = (input: AuthenticationMode, context: __SerdeContext): any => {
  return {
    ...(input.Passwords != null && { Passwords: se_PasswordListInput(input.Passwords, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1BatchUpdateClusterRequest
 */
const se_BatchUpdateClusterRequest = (input: BatchUpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterNames != null && { ClusterNames: se_ClusterNameList(input.ClusterNames, context) }),
    ...(input.ServiceUpdate != null && { ServiceUpdate: se_ServiceUpdateRequest(input.ServiceUpdate, context) }),
  };
};

/**
 * serializeAws_json1_1ClusterNameList
 */
const se_ClusterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CopySnapshotRequest
 */
const se_CopySnapshotRequest = (input: CopySnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SourceSnapshotName != null && { SourceSnapshotName: input.SourceSnapshotName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetBucket != null && { TargetBucket: input.TargetBucket }),
    ...(input.TargetSnapshotName != null && { TargetSnapshotName: input.TargetSnapshotName }),
  };
};

/**
 * serializeAws_json1_1CreateACLRequest
 */
const se_CreateACLRequest = (input: CreateACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserNames != null && { UserNames: se_UserNameListInput(input.UserNames, context) }),
  };
};

/**
 * serializeAws_json1_1CreateClusterRequest
 */
const se_CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
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
      SecurityGroupIds: se_SecurityGroupIdsList(input.SecurityGroupIds, context),
    }),
    ...(input.SnapshotArns != null && { SnapshotArns: se_SnapshotArnsList(input.SnapshotArns, context) }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
    ...(input.SnapshotRetentionLimit != null && { SnapshotRetentionLimit: input.SnapshotRetentionLimit }),
    ...(input.SnapshotWindow != null && { SnapshotWindow: input.SnapshotWindow }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.TLSEnabled != null && { TLSEnabled: input.TLSEnabled }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateParameterGroupRequest
 */
const se_CreateParameterGroupRequest = (input: CreateParameterGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Family != null && { Family: input.Family }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSnapshotRequest
 */
const se_CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSubnetGroupRequest
 */
const se_CreateSubnetGroupRequest = (input: CreateSubnetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdentifierList(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessString != null && { AccessString: input.AccessString }),
    ...(input.AuthenticationMode != null && {
      AuthenticationMode: se_AuthenticationMode(input.AuthenticationMode, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DeleteACLRequest
 */
const se_DeleteACLRequest = (input: DeleteACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
  };
};

/**
 * serializeAws_json1_1DeleteClusterRequest
 */
const se_DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.FinalSnapshotName != null && { FinalSnapshotName: input.FinalSnapshotName }),
  };
};

/**
 * serializeAws_json1_1DeleteParameterGroupRequest
 */
const se_DeleteParameterGroupRequest = (input: DeleteParameterGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteSnapshotRequest
 */
const se_DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
  };
};

/**
 * serializeAws_json1_1DeleteSubnetGroupRequest
 */
const se_DeleteSubnetGroupRequest = (input: DeleteSubnetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DescribeACLsRequest
 */
const se_DescribeACLsRequest = (input: DescribeACLsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeClustersRequest
 */
const se_DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ShowShardDetails != null && { ShowShardDetails: input.ShowShardDetails }),
  };
};

/**
 * serializeAws_json1_1DescribeEngineVersionsRequest
 */
const se_DescribeEngineVersionsRequest = (input: DescribeEngineVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultOnly != null && { DefaultOnly: input.DefaultOnly }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupFamily != null && { ParameterGroupFamily: input.ParameterGroupFamily }),
  };
};

/**
 * serializeAws_json1_1DescribeEventsRequest
 */
const se_DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DescribeParameterGroupsRequest
 */
const se_DescribeParameterGroupsRequest = (input: DescribeParameterGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

/**
 * serializeAws_json1_1DescribeParametersRequest
 */
const se_DescribeParametersRequest = (input: DescribeParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

/**
 * serializeAws_json1_1DescribeReservedNodesOfferingsRequest
 */
const se_DescribeReservedNodesOfferingsRequest = (
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

/**
 * serializeAws_json1_1DescribeReservedNodesRequest
 */
const se_DescribeReservedNodesRequest = (input: DescribeReservedNodesRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DescribeServiceUpdatesRequest
 */
const se_DescribeServiceUpdatesRequest = (input: DescribeServiceUpdatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterNames != null && { ClusterNames: se_ClusterNameList(input.ClusterNames, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceUpdateName != null && { ServiceUpdateName: input.ServiceUpdateName }),
    ...(input.Status != null && { Status: se_ServiceUpdateStatusList(input.Status, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeSnapshotsRequest
 */
const se_DescribeSnapshotsRequest = (input: DescribeSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ShowDetail != null && { ShowDetail: input.ShowDetail }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
    ...(input.Source != null && { Source: input.Source }),
  };
};

/**
 * serializeAws_json1_1DescribeSubnetGroupsRequest
 */
const se_DescribeSubnetGroupsRequest = (input: DescribeSubnetGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

/**
 * serializeAws_json1_1DescribeUsersRequest
 */
const se_DescribeUsersRequest = (input: DescribeUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1FailoverShardRequest
 */
const se_FailoverShardRequest = (input: FailoverShardRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.ShardName != null && { ShardName: input.ShardName }),
  };
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValueList
 */
const se_FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1KeyList
 */
const se_KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListAllowedNodeTypeUpdatesRequest
 */
const se_ListAllowedNodeTypeUpdatesRequest = (
  input: ListAllowedNodeTypeUpdatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
  };
};

/**
 * serializeAws_json1_1ListTagsRequest
 */
const se_ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ParameterNameList
 */
const se_ParameterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ParameterNameValue
 */
const se_ParameterNameValue = (input: ParameterNameValue, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

/**
 * serializeAws_json1_1ParameterNameValueList
 */
const se_ParameterNameValueList = (input: ParameterNameValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterNameValue(entry, context);
    });
};

/**
 * serializeAws_json1_1PasswordListInput
 */
const se_PasswordListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PurchaseReservedNodesOfferingRequest
 */
const se_PurchaseReservedNodesOfferingRequest = (
  input: PurchaseReservedNodesOfferingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NodeCount != null && { NodeCount: input.NodeCount }),
    ...(input.ReservationId != null && { ReservationId: input.ReservationId }),
    ...(input.ReservedNodesOfferingId != null && { ReservedNodesOfferingId: input.ReservedNodesOfferingId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1ReplicaConfigurationRequest
 */
const se_ReplicaConfigurationRequest = (input: ReplicaConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReplicaCount != null && { ReplicaCount: input.ReplicaCount }),
  };
};

/**
 * serializeAws_json1_1ResetParameterGroupRequest
 */
const se_ResetParameterGroupRequest = (input: ResetParameterGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllParameters != null && { AllParameters: input.AllParameters }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNames != null && { ParameterNames: se_ParameterNameList(input.ParameterNames, context) }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIdsList
 */
const se_SecurityGroupIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ServiceUpdateRequest
 */
const se_ServiceUpdateRequest = (input: ServiceUpdateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceUpdateNameToApply != null && { ServiceUpdateNameToApply: input.ServiceUpdateNameToApply }),
  };
};

/**
 * serializeAws_json1_1ServiceUpdateStatusList
 */
const se_ServiceUpdateStatusList = (input: (ServiceUpdateStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ShardConfigurationRequest
 */
const se_ShardConfigurationRequest = (input: ShardConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ShardCount != null && { ShardCount: input.ShardCount }),
  };
};

/**
 * serializeAws_json1_1SnapshotArnsList
 */
const se_SnapshotArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubnetIdentifierList
 */
const se_SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
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
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
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
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_KeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateACLRequest
 */
const se_UpdateACLRequest = (input: UpdateACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.UserNamesToAdd != null && { UserNamesToAdd: se_UserNameListInput(input.UserNamesToAdd, context) }),
    ...(input.UserNamesToRemove != null && {
      UserNamesToRemove: se_UserNameListInput(input.UserNamesToRemove, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateClusterRequest
 */
const se_UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ACLName != null && { ACLName: input.ACLName }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.MaintenanceWindow != null && { MaintenanceWindow: input.MaintenanceWindow }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ReplicaConfiguration != null && {
      ReplicaConfiguration: se_ReplicaConfigurationRequest(input.ReplicaConfiguration, context),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: se_SecurityGroupIdsList(input.SecurityGroupIds, context),
    }),
    ...(input.ShardConfiguration != null && {
      ShardConfiguration: se_ShardConfigurationRequest(input.ShardConfiguration, context),
    }),
    ...(input.SnapshotRetentionLimit != null && { SnapshotRetentionLimit: input.SnapshotRetentionLimit }),
    ...(input.SnapshotWindow != null && { SnapshotWindow: input.SnapshotWindow }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SnsTopicStatus != null && { SnsTopicStatus: input.SnsTopicStatus }),
  };
};

/**
 * serializeAws_json1_1UpdateParameterGroupRequest
 */
const se_UpdateParameterGroupRequest = (input: UpdateParameterGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNameValues != null && {
      ParameterNameValues: se_ParameterNameValueList(input.ParameterNameValues, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateSubnetGroupRequest
 */
const se_UpdateSubnetGroupRequest = (input: UpdateSubnetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateUserRequest
 */
const se_UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessString != null && { AccessString: input.AccessString }),
    ...(input.AuthenticationMode != null && {
      AuthenticationMode: se_AuthenticationMode(input.AuthenticationMode, context),
    }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1UserNameListInput
 */
const se_UserNameListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1ACL
 */
const de_ACL = (output: any, context: __SerdeContext): ACL => {
  return {
    ARN: __expectString(output.ARN),
    Clusters: output.Clusters != null ? de_ACLClusterNameList(output.Clusters, context) : undefined,
    MinimumEngineVersion: __expectString(output.MinimumEngineVersion),
    Name: __expectString(output.Name),
    PendingChanges: output.PendingChanges != null ? de_ACLPendingChanges(output.PendingChanges, context) : undefined,
    Status: __expectString(output.Status),
    UserNames: output.UserNames != null ? de_UserNameList(output.UserNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ACLAlreadyExistsFault
 */
const de_ACLAlreadyExistsFault = (output: any, context: __SerdeContext): ACLAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ACLClusterNameList
 */
const de_ACLClusterNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ACLList
 */
const de_ACLList = (output: any, context: __SerdeContext): ACL[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ACL(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ACLNameList
 */
const de_ACLNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ACLNotFoundFault
 */
const de_ACLNotFoundFault = (output: any, context: __SerdeContext): ACLNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ACLPendingChanges
 */
const de_ACLPendingChanges = (output: any, context: __SerdeContext): ACLPendingChanges => {
  return {
    UserNamesToAdd: output.UserNamesToAdd != null ? de_UserNameList(output.UserNamesToAdd, context) : undefined,
    UserNamesToRemove:
      output.UserNamesToRemove != null ? de_UserNameList(output.UserNamesToRemove, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ACLQuotaExceededFault
 */
const de_ACLQuotaExceededFault = (output: any, context: __SerdeContext): ACLQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ACLsUpdateStatus
 */
const de_ACLsUpdateStatus = (output: any, context: __SerdeContext): ACLsUpdateStatus => {
  return {
    ACLToApply: __expectString(output.ACLToApply),
  } as any;
};

/**
 * deserializeAws_json1_1APICallRateForCustomerExceededFault
 */
const de_APICallRateForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): APICallRateForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Authentication
 */
const de_Authentication = (output: any, context: __SerdeContext): Authentication => {
  return {
    PasswordCount: __expectInt32(output.PasswordCount),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1AvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1BatchUpdateClusterResponse
 */
const de_BatchUpdateClusterResponse = (output: any, context: __SerdeContext): BatchUpdateClusterResponse => {
  return {
    ProcessedClusters: output.ProcessedClusters != null ? de_ClusterList(output.ProcessedClusters, context) : undefined,
    UnprocessedClusters:
      output.UnprocessedClusters != null ? de_UnprocessedClusterList(output.UnprocessedClusters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    ACLName: __expectString(output.ACLName),
    ARN: __expectString(output.ARN),
    AutoMinorVersionUpgrade: __expectBoolean(output.AutoMinorVersionUpgrade),
    AvailabilityMode: __expectString(output.AvailabilityMode),
    ClusterEndpoint: output.ClusterEndpoint != null ? de_Endpoint(output.ClusterEndpoint, context) : undefined,
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
      output.PendingUpdates != null ? de_ClusterPendingUpdates(output.PendingUpdates, context) : undefined,
    SecurityGroups:
      output.SecurityGroups != null ? de_SecurityGroupMembershipList(output.SecurityGroups, context) : undefined,
    Shards: output.Shards != null ? de_ShardList(output.Shards, context) : undefined,
    SnapshotRetentionLimit: __expectInt32(output.SnapshotRetentionLimit),
    SnapshotWindow: __expectString(output.SnapshotWindow),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SnsTopicStatus: __expectString(output.SnsTopicStatus),
    Status: __expectString(output.Status),
    SubnetGroupName: __expectString(output.SubnetGroupName),
    TLSEnabled: __expectBoolean(output.TLSEnabled),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterAlreadyExistsFault
 */
const de_ClusterAlreadyExistsFault = (output: any, context: __SerdeContext): ClusterAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterConfiguration
 */
const de_ClusterConfiguration = (output: any, context: __SerdeContext): ClusterConfiguration => {
  return {
    Description: __expectString(output.Description),
    EngineVersion: __expectString(output.EngineVersion),
    MaintenanceWindow: __expectString(output.MaintenanceWindow),
    Name: __expectString(output.Name),
    NodeType: __expectString(output.NodeType),
    NumShards: __expectInt32(output.NumShards),
    ParameterGroupName: __expectString(output.ParameterGroupName),
    Port: __expectInt32(output.Port),
    Shards: output.Shards != null ? de_ShardDetails(output.Shards, context) : undefined,
    SnapshotRetentionLimit: __expectInt32(output.SnapshotRetentionLimit),
    SnapshotWindow: __expectString(output.SnapshotWindow),
    SubnetGroupName: __expectString(output.SubnetGroupName),
    TopicArn: __expectString(output.TopicArn),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterList
 */
const de_ClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Cluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterNotFoundFault
 */
const de_ClusterNotFoundFault = (output: any, context: __SerdeContext): ClusterNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterPendingUpdates
 */
const de_ClusterPendingUpdates = (output: any, context: __SerdeContext): ClusterPendingUpdates => {
  return {
    ACLs: output.ACLs != null ? de_ACLsUpdateStatus(output.ACLs, context) : undefined,
    Resharding: output.Resharding != null ? de_ReshardingStatus(output.Resharding, context) : undefined,
    ServiceUpdates:
      output.ServiceUpdates != null ? de_PendingModifiedServiceUpdateList(output.ServiceUpdates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ClusterQuotaForCustomerExceededFault
 */
const de_ClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CopySnapshotResponse
 */
const de_CopySnapshotResponse = (output: any, context: __SerdeContext): CopySnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? de_Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateACLResponse
 */
const de_CreateACLResponse = (output: any, context: __SerdeContext): CreateACLResponse => {
  return {
    ACL: output.ACL != null ? de_ACL(output.ACL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateParameterGroupResponse
 */
const de_CreateParameterGroupResponse = (output: any, context: __SerdeContext): CreateParameterGroupResponse => {
  return {
    ParameterGroup: output.ParameterGroup != null ? de_ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSnapshotResponse
 */
const de_CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? de_Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSubnetGroupResponse
 */
const de_CreateSubnetGroupResponse = (output: any, context: __SerdeContext): CreateSubnetGroupResponse => {
  return {
    SubnetGroup: output.SubnetGroup != null ? de_SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserResponse
 */
const de_CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    User: output.User != null ? de_User(output.User, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DefaultUserRequired
 */
const de_DefaultUserRequired = (output: any, context: __SerdeContext): DefaultUserRequired => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteACLResponse
 */
const de_DeleteACLResponse = (output: any, context: __SerdeContext): DeleteACLResponse => {
  return {
    ACL: output.ACL != null ? de_ACL(output.ACL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteClusterResponse
 */
const de_DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteParameterGroupResponse
 */
const de_DeleteParameterGroupResponse = (output: any, context: __SerdeContext): DeleteParameterGroupResponse => {
  return {
    ParameterGroup: output.ParameterGroup != null ? de_ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSnapshotResponse
 */
const de_DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? de_Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSubnetGroupResponse
 */
const de_DeleteSubnetGroupResponse = (output: any, context: __SerdeContext): DeleteSubnetGroupResponse => {
  return {
    SubnetGroup: output.SubnetGroup != null ? de_SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteUserResponse
 */
const de_DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {
    User: output.User != null ? de_User(output.User, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeACLsResponse
 */
const de_DescribeACLsResponse = (output: any, context: __SerdeContext): DescribeACLsResponse => {
  return {
    ACLs: output.ACLs != null ? de_ACLList(output.ACLs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeClustersResponse
 */
const de_DescribeClustersResponse = (output: any, context: __SerdeContext): DescribeClustersResponse => {
  return {
    Clusters: output.Clusters != null ? de_ClusterList(output.Clusters, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEngineVersionsResponse
 */
const de_DescribeEngineVersionsResponse = (output: any, context: __SerdeContext): DescribeEngineVersionsResponse => {
  return {
    EngineVersions:
      output.EngineVersions != null ? de_EngineVersionInfoList(output.EngineVersions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    Events: output.Events != null ? de_EventList(output.Events, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeParameterGroupsResponse
 */
const de_DescribeParameterGroupsResponse = (output: any, context: __SerdeContext): DescribeParameterGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParameterGroups:
      output.ParameterGroups != null ? de_ParameterGroupList(output.ParameterGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeParametersResponse
 */
const de_DescribeParametersResponse = (output: any, context: __SerdeContext): DescribeParametersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? de_ParametersList(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReservedNodesOfferingsResponse
 */
const de_DescribeReservedNodesOfferingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReservedNodesOfferingsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ReservedNodesOfferings:
      output.ReservedNodesOfferings != null
        ? de_ReservedNodesOfferingList(output.ReservedNodesOfferings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReservedNodesResponse
 */
const de_DescribeReservedNodesResponse = (output: any, context: __SerdeContext): DescribeReservedNodesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ReservedNodes: output.ReservedNodes != null ? de_ReservedNodeList(output.ReservedNodes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServiceUpdatesResponse
 */
const de_DescribeServiceUpdatesResponse = (output: any, context: __SerdeContext): DescribeServiceUpdatesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceUpdates: output.ServiceUpdates != null ? de_ServiceUpdateList(output.ServiceUpdates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSnapshotsResponse
 */
const de_DescribeSnapshotsResponse = (output: any, context: __SerdeContext): DescribeSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Snapshots: output.Snapshots != null ? de_SnapshotList(output.Snapshots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSubnetGroupsResponse
 */
const de_DescribeSubnetGroupsResponse = (output: any, context: __SerdeContext): DescribeSubnetGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SubnetGroups: output.SubnetGroups != null ? de_SubnetGroupList(output.SubnetGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUsersResponse
 */
const de_DescribeUsersResponse = (output: any, context: __SerdeContext): DescribeUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? de_UserList(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateUserNameFault
 */
const de_DuplicateUserNameFault = (output: any, context: __SerdeContext): DuplicateUserNameFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    Port: __expectInt32(output.Port),
  } as any;
};

/**
 * deserializeAws_json1_1EngineVersionInfo
 */
const de_EngineVersionInfo = (output: any, context: __SerdeContext): EngineVersionInfo => {
  return {
    EnginePatchVersion: __expectString(output.EnginePatchVersion),
    EngineVersion: __expectString(output.EngineVersion),
    ParameterGroupFamily: __expectString(output.ParameterGroupFamily),
  } as any;
};

/**
 * deserializeAws_json1_1EngineVersionInfoList
 */
const de_EngineVersionInfoList = (output: any, context: __SerdeContext): EngineVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EngineVersionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Message: __expectString(output.Message),
    SourceName: __expectString(output.SourceName),
    SourceType: __expectString(output.SourceType),
  } as any;
};

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailoverShardResponse
 */
const de_FailoverShardResponse = (output: any, context: __SerdeContext): FailoverShardResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientClusterCapacityFault
 */
const de_InsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidACLStateFault
 */
const de_InvalidACLStateFault = (output: any, context: __SerdeContext): InvalidACLStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidARNFault
 */
const de_InvalidARNFault = (output: any, context: __SerdeContext): InvalidARNFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidClusterStateFault
 */
const de_InvalidClusterStateFault = (output: any, context: __SerdeContext): InvalidClusterStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCredentialsException
 */
const de_InvalidCredentialsException = (output: any, context: __SerdeContext): InvalidCredentialsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidKMSKeyFault
 */
const de_InvalidKMSKeyFault = (output: any, context: __SerdeContext): InvalidKMSKeyFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNodeStateFault
 */
const de_InvalidNodeStateFault = (output: any, context: __SerdeContext): InvalidNodeStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationException
 */
const de_InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterGroupStateFault
 */
const de_InvalidParameterGroupStateFault = (output: any, context: __SerdeContext): InvalidParameterGroupStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSnapshotStateFault
 */
const de_InvalidSnapshotStateFault = (output: any, context: __SerdeContext): InvalidSnapshotStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidUserStateFault
 */
const de_InvalidUserStateFault = (output: any, context: __SerdeContext): InvalidUserStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidVPCNetworkStateFault
 */
const de_InvalidVPCNetworkStateFault = (output: any, context: __SerdeContext): InvalidVPCNetworkStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAllowedNodeTypeUpdatesResponse
 */
const de_ListAllowedNodeTypeUpdatesResponse = (
  output: any,
  context: __SerdeContext
): ListAllowedNodeTypeUpdatesResponse => {
  return {
    ScaleDownNodeTypes:
      output.ScaleDownNodeTypes != null ? de_NodeTypeList(output.ScaleDownNodeTypes, context) : undefined,
    ScaleUpNodeTypes: output.ScaleUpNodeTypes != null ? de_NodeTypeList(output.ScaleUpNodeTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsResponse
 */
const de_ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    Endpoint: output.Endpoint != null ? de_Endpoint(output.Endpoint, context) : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1NodeList
 */
const de_NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Node(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NodeQuotaForClusterExceededFault
 */
const de_NodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NodeQuotaForCustomerExceededFault
 */
const de_NodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NodeTypeList
 */
const de_NodeTypeList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1NoOperationFault
 */
const de_NoOperationFault = (output: any, context: __SerdeContext): NoOperationFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Parameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  return {
    AllowedValues: __expectString(output.AllowedValues),
    DataType: __expectString(output.DataType),
    Description: __expectString(output.Description),
    MinimumEngineVersion: __expectString(output.MinimumEngineVersion),
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroup
 */
const de_ParameterGroup = (output: any, context: __SerdeContext): ParameterGroup => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Family: __expectString(output.Family),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroupAlreadyExistsFault
 */
const de_ParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroupList
 */
const de_ParameterGroupList = (output: any, context: __SerdeContext): ParameterGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterGroupNotFoundFault
 */
const de_ParameterGroupNotFoundFault = (output: any, context: __SerdeContext): ParameterGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroupQuotaExceededFault
 */
const de_ParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParametersList
 */
const de_ParametersList = (output: any, context: __SerdeContext): Parameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Parameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PendingModifiedServiceUpdate
 */
const de_PendingModifiedServiceUpdate = (output: any, context: __SerdeContext): PendingModifiedServiceUpdate => {
  return {
    ServiceUpdateName: __expectString(output.ServiceUpdateName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1PendingModifiedServiceUpdateList
 */
const de_PendingModifiedServiceUpdateList = (output: any, context: __SerdeContext): PendingModifiedServiceUpdate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PendingModifiedServiceUpdate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PurchaseReservedNodesOfferingResponse
 */
const de_PurchaseReservedNodesOfferingResponse = (
  output: any,
  context: __SerdeContext
): PurchaseReservedNodesOfferingResponse => {
  return {
    ReservedNode: output.ReservedNode != null ? de_ReservedNode(output.ReservedNode, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    RecurringChargeAmount: __limitedParseDouble(output.RecurringChargeAmount),
    RecurringChargeFrequency: __expectString(output.RecurringChargeFrequency),
  } as any;
};

/**
 * deserializeAws_json1_1RecurringChargeList
 */
const de_RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecurringCharge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservedNode
 */
const de_ReservedNode = (output: any, context: __SerdeContext): ReservedNode => {
  return {
    ARN: __expectString(output.ARN),
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    NodeCount: __expectInt32(output.NodeCount),
    NodeType: __expectString(output.NodeType),
    OfferingType: __expectString(output.OfferingType),
    RecurringCharges:
      output.RecurringCharges != null ? de_RecurringChargeList(output.RecurringCharges, context) : undefined,
    ReservationId: __expectString(output.ReservationId),
    ReservedNodesOfferingId: __expectString(output.ReservedNodesOfferingId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1ReservedNodeAlreadyExistsFault
 */
const de_ReservedNodeAlreadyExistsFault = (output: any, context: __SerdeContext): ReservedNodeAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReservedNodeList
 */
const de_ReservedNodeList = (output: any, context: __SerdeContext): ReservedNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservedNode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservedNodeNotFoundFault
 */
const de_ReservedNodeNotFoundFault = (output: any, context: __SerdeContext): ReservedNodeNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReservedNodeQuotaExceededFault
 */
const de_ReservedNodeQuotaExceededFault = (output: any, context: __SerdeContext): ReservedNodeQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReservedNodesOffering
 */
const de_ReservedNodesOffering = (output: any, context: __SerdeContext): ReservedNodesOffering => {
  return {
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    NodeType: __expectString(output.NodeType),
    OfferingType: __expectString(output.OfferingType),
    RecurringCharges:
      output.RecurringCharges != null ? de_RecurringChargeList(output.RecurringCharges, context) : undefined,
    ReservedNodesOfferingId: __expectString(output.ReservedNodesOfferingId),
  } as any;
};

/**
 * deserializeAws_json1_1ReservedNodesOfferingList
 */
const de_ReservedNodesOfferingList = (output: any, context: __SerdeContext): ReservedNodesOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservedNodesOffering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservedNodesOfferingNotFoundFault
 */
const de_ReservedNodesOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodesOfferingNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResetParameterGroupResponse
 */
const de_ResetParameterGroupResponse = (output: any, context: __SerdeContext): ResetParameterGroupResponse => {
  return {
    ParameterGroup: output.ParameterGroup != null ? de_ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReshardingStatus
 */
const de_ReshardingStatus = (output: any, context: __SerdeContext): ReshardingStatus => {
  return {
    SlotMigration: output.SlotMigration != null ? de_SlotMigration(output.SlotMigration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupMembership
 */
const de_SecurityGroupMembership = (output: any, context: __SerdeContext): SecurityGroupMembership => {
  return {
    SecurityGroupId: __expectString(output.SecurityGroupId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupMembershipList
 */
const de_SecurityGroupMembershipList = (output: any, context: __SerdeContext): SecurityGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityGroupMembership(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceLinkedRoleNotFoundFault
 */
const de_ServiceLinkedRoleNotFoundFault = (output: any, context: __SerdeContext): ServiceLinkedRoleNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceUpdate
 */
const de_ServiceUpdate = (output: any, context: __SerdeContext): ServiceUpdate => {
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

/**
 * deserializeAws_json1_1ServiceUpdateList
 */
const de_ServiceUpdateList = (output: any, context: __SerdeContext): ServiceUpdate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceUpdate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceUpdateNotFoundFault
 */
const de_ServiceUpdateNotFoundFault = (output: any, context: __SerdeContext): ServiceUpdateNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Shard
 */
const de_Shard = (output: any, context: __SerdeContext): Shard => {
  return {
    Name: __expectString(output.Name),
    Nodes: output.Nodes != null ? de_NodeList(output.Nodes, context) : undefined,
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    Slots: __expectString(output.Slots),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ShardConfiguration
 */
const de_ShardConfiguration = (output: any, context: __SerdeContext): ShardConfiguration => {
  return {
    ReplicaCount: __expectInt32(output.ReplicaCount),
    Slots: __expectString(output.Slots),
  } as any;
};

/**
 * deserializeAws_json1_1ShardDetail
 */
const de_ShardDetail = (output: any, context: __SerdeContext): ShardDetail => {
  return {
    Configuration: output.Configuration != null ? de_ShardConfiguration(output.Configuration, context) : undefined,
    Name: __expectString(output.Name),
    Size: __expectString(output.Size),
    SnapshotCreationTime:
      output.SnapshotCreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SnapshotCreationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ShardDetails
 */
const de_ShardDetails = (output: any, context: __SerdeContext): ShardDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ShardDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ShardList
 */
const de_ShardList = (output: any, context: __SerdeContext): Shard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Shard(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ShardNotFoundFault
 */
const de_ShardNotFoundFault = (output: any, context: __SerdeContext): ShardNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ShardsPerClusterQuotaExceededFault
 */
const de_ShardsPerClusterQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ShardsPerClusterQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SlotMigration
 */
const de_SlotMigration = (output: any, context: __SerdeContext): SlotMigration => {
  return {
    ProgressPercentage: __limitedParseDouble(output.ProgressPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    ARN: __expectString(output.ARN),
    ClusterConfiguration:
      output.ClusterConfiguration != null ? de_ClusterConfiguration(output.ClusterConfiguration, context) : undefined,
    DataTiering: __expectString(output.DataTiering),
    KmsKeyId: __expectString(output.KmsKeyId),
    Name: __expectString(output.Name),
    Source: __expectString(output.Source),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotAlreadyExistsFault
 */
const de_SnapshotAlreadyExistsFault = (output: any, context: __SerdeContext): SnapshotAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
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
 * deserializeAws_json1_1SnapshotNotFoundFault
 */
const de_SnapshotNotFoundFault = (output: any, context: __SerdeContext): SnapshotNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotQuotaExceededFault
 */
const de_SnapshotQuotaExceededFault = (output: any, context: __SerdeContext): SnapshotQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Subnet
 */
const de_Subnet = (output: any, context: __SerdeContext): Subnet => {
  return {
    AvailabilityZone:
      output.AvailabilityZone != null ? de_AvailabilityZone(output.AvailabilityZone, context) : undefined,
    Identifier: __expectString(output.Identifier),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroup
 */
const de_SubnetGroup = (output: any, context: __SerdeContext): SubnetGroup => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Subnets: output.Subnets != null ? de_SubnetList(output.Subnets, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupAlreadyExistsFault
 */
const de_SubnetGroupAlreadyExistsFault = (output: any, context: __SerdeContext): SubnetGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupInUseFault
 */
const de_SubnetGroupInUseFault = (output: any, context: __SerdeContext): SubnetGroupInUseFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupList
 */
const de_SubnetGroupList = (output: any, context: __SerdeContext): SubnetGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubnetGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetGroupNotFoundFault
 */
const de_SubnetGroupNotFoundFault = (output: any, context: __SerdeContext): SubnetGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupQuotaExceededFault
 */
const de_SubnetGroupQuotaExceededFault = (output: any, context: __SerdeContext): SubnetGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetInUse
 */
const de_SubnetInUse = (output: any, context: __SerdeContext): SubnetInUse => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetList
 */
const de_SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Subnet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetNotAllowedFault
 */
const de_SubnetNotAllowedFault = (output: any, context: __SerdeContext): SubnetNotAllowedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetQuotaExceededFault
 */
const de_SubnetQuotaExceededFault = (output: any, context: __SerdeContext): SubnetQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
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
 * deserializeAws_json1_1TagNotFoundFault
 */
const de_TagNotFoundFault = (output: any, context: __SerdeContext): TagNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagQuotaPerResourceExceeded
 */
const de_TagQuotaPerResourceExceeded = (output: any, context: __SerdeContext): TagQuotaPerResourceExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TestFailoverNotAvailableFault
 */
const de_TestFailoverNotAvailableFault = (output: any, context: __SerdeContext): TestFailoverNotAvailableFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedCluster
 */
const de_UnprocessedCluster = (output: any, context: __SerdeContext): UnprocessedCluster => {
  return {
    ClusterName: __expectString(output.ClusterName),
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedClusterList
 */
const de_UnprocessedClusterList = (output: any, context: __SerdeContext): UnprocessedCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedCluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateACLResponse
 */
const de_UpdateACLResponse = (output: any, context: __SerdeContext): UpdateACLResponse => {
  return {
    ACL: output.ACL != null ? de_ACL(output.ACL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateClusterResponse
 */
const de_UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateParameterGroupResponse
 */
const de_UpdateParameterGroupResponse = (output: any, context: __SerdeContext): UpdateParameterGroupResponse => {
  return {
    ParameterGroup: output.ParameterGroup != null ? de_ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSubnetGroupResponse
 */
const de_UpdateSubnetGroupResponse = (output: any, context: __SerdeContext): UpdateSubnetGroupResponse => {
  return {
    SubnetGroup: output.SubnetGroup != null ? de_SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUserResponse
 */
const de_UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {
    User: output.User != null ? de_User(output.User, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return {
    ACLNames: output.ACLNames != null ? de_ACLNameList(output.ACLNames, context) : undefined,
    ARN: __expectString(output.ARN),
    AccessString: __expectString(output.AccessString),
    Authentication: output.Authentication != null ? de_Authentication(output.Authentication, context) : undefined,
    MinimumEngineVersion: __expectString(output.MinimumEngineVersion),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1UserAlreadyExistsFault
 */
const de_UserAlreadyExistsFault = (output: any, context: __SerdeContext): UserAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserList
 */
const de_UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_User(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserNameList
 */
const de_UserNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1UserNotFoundFault
 */
const de_UserNotFoundFault = (output: any, context: __SerdeContext): UserNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserQuotaExceededFault
 */
const de_UserQuotaExceededFault = (output: any, context: __SerdeContext): UserQuotaExceededFault => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonMemoryDB.${operation}`,
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
