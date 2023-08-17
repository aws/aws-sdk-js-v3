// smithy-typescript generated code
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
  ACLAlreadyExistsFault,
  ACLNotFoundFault,
  ACLQuotaExceededFault,
  APICallRateForCustomerExceededFault,
  AuthenticationMode,
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
  CreateClusterRequest,
  CreateClusterResponse,
  CreateParameterGroupRequest,
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateSubnetGroupRequest,
  CreateUserRequest,
  DefaultUserRequired,
  DeleteACLRequest,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteParameterGroupRequest,
  DeleteSnapshotRequest,
  DeleteSnapshotResponse,
  DeleteSubnetGroupRequest,
  DeleteUserRequest,
  DescribeACLsRequest,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeEngineVersionsRequest,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeParameterGroupsRequest,
  DescribeParametersRequest,
  DescribeReservedNodesOfferingsRequest,
  DescribeReservedNodesOfferingsResponse,
  DescribeReservedNodesRequest,
  DescribeReservedNodesResponse,
  DescribeServiceUpdatesRequest,
  DescribeServiceUpdatesResponse,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResponse,
  DescribeSubnetGroupsRequest,
  DescribeUsersRequest,
  DuplicateUserNameFault,
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
  ListTagsRequest,
  Node,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NoOperationFault,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupNotFoundFault,
  ParameterGroupQuotaExceededFault,
  ParameterNameValue,
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
  ReshardingStatus,
  ServiceLinkedRoleNotFoundFault,
  ServiceUpdate,
  ServiceUpdateNotFoundFault,
  ServiceUpdateRequest,
  ServiceUpdateStatus,
  Shard,
  ShardConfigurationRequest,
  ShardDetail,
  ShardNotFoundFault,
  ShardsPerClusterQuotaExceededFault,
  SlotMigration,
  Snapshot,
  SnapshotAlreadyExistsFault,
  SnapshotNotFoundFault,
  SnapshotQuotaExceededFault,
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
  TestFailoverNotAvailableFault,
  UntagResourceRequest,
  UpdateACLRequest,
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateParameterGroupRequest,
  UpdateSubnetGroupRequest,
  UpdateUserRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1UpdateACLCommand
 */
export const se_UpdateACLCommand = async (
  input: UpdateACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateACL");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeACLsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListAllowedNodeTypeUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ResetParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UserQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AuthenticationMode omitted.

// se_BatchUpdateClusterRequest omitted.

// se_ClusterNameList omitted.

// se_CopySnapshotRequest omitted.

// se_CreateACLRequest omitted.

// se_CreateClusterRequest omitted.

// se_CreateParameterGroupRequest omitted.

// se_CreateSnapshotRequest omitted.

// se_CreateSubnetGroupRequest omitted.

// se_CreateUserRequest omitted.

// se_DeleteACLRequest omitted.

// se_DeleteClusterRequest omitted.

// se_DeleteParameterGroupRequest omitted.

// se_DeleteSnapshotRequest omitted.

// se_DeleteSubnetGroupRequest omitted.

// se_DeleteUserRequest omitted.

// se_DescribeACLsRequest omitted.

// se_DescribeClustersRequest omitted.

// se_DescribeEngineVersionsRequest omitted.

/**
 * serializeAws_json1_1DescribeEventsRequest
 */
const se_DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return take(input, {
    Duration: [],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SourceName: [],
    SourceType: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DescribeParameterGroupsRequest omitted.

// se_DescribeParametersRequest omitted.

// se_DescribeReservedNodesOfferingsRequest omitted.

// se_DescribeReservedNodesRequest omitted.

// se_DescribeServiceUpdatesRequest omitted.

// se_DescribeSnapshotsRequest omitted.

// se_DescribeSubnetGroupsRequest omitted.

// se_DescribeUsersRequest omitted.

// se_FailoverShardRequest omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FilterValueList omitted.

// se_KeyList omitted.

// se_ListAllowedNodeTypeUpdatesRequest omitted.

// se_ListTagsRequest omitted.

// se_ParameterNameList omitted.

// se_ParameterNameValue omitted.

// se_ParameterNameValueList omitted.

// se_PasswordListInput omitted.

// se_PurchaseReservedNodesOfferingRequest omitted.

// se_ReplicaConfigurationRequest omitted.

// se_ResetParameterGroupRequest omitted.

// se_SecurityGroupIdsList omitted.

// se_ServiceUpdateRequest omitted.

// se_ServiceUpdateStatusList omitted.

// se_ShardConfigurationRequest omitted.

// se_SnapshotArnsList omitted.

// se_SubnetIdentifierList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateACLRequest omitted.

// se_UpdateClusterRequest omitted.

// se_UpdateParameterGroupRequest omitted.

// se_UpdateSubnetGroupRequest omitted.

// se_UpdateUserRequest omitted.

// se_UserNameListInput omitted.

// de_ACL omitted.

// de_ACLAlreadyExistsFault omitted.

// de_ACLClusterNameList omitted.

// de_ACLList omitted.

// de_ACLNameList omitted.

// de_ACLNotFoundFault omitted.

// de_ACLPendingChanges omitted.

// de_ACLQuotaExceededFault omitted.

// de_ACLsUpdateStatus omitted.

// de_APICallRateForCustomerExceededFault omitted.

// de_Authentication omitted.

// de_AvailabilityZone omitted.

/**
 * deserializeAws_json1_1BatchUpdateClusterResponse
 */
const de_BatchUpdateClusterResponse = (output: any, context: __SerdeContext): BatchUpdateClusterResponse => {
  return take(output, {
    ProcessedClusters: (_: any) => de_ClusterList(_, context),
    UnprocessedClusters: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return take(output, {
    ACLName: __expectString,
    ARN: __expectString,
    AutoMinorVersionUpgrade: __expectBoolean,
    AvailabilityMode: __expectString,
    ClusterEndpoint: _json,
    DataTiering: __expectString,
    Description: __expectString,
    EnginePatchVersion: __expectString,
    EngineVersion: __expectString,
    KmsKeyId: __expectString,
    MaintenanceWindow: __expectString,
    Name: __expectString,
    NodeType: __expectString,
    NumberOfShards: __expectInt32,
    ParameterGroupName: __expectString,
    ParameterGroupStatus: __expectString,
    PendingUpdates: (_: any) => de_ClusterPendingUpdates(_, context),
    SecurityGroups: _json,
    Shards: (_: any) => de_ShardList(_, context),
    SnapshotRetentionLimit: __expectInt32,
    SnapshotWindow: __expectString,
    SnsTopicArn: __expectString,
    SnsTopicStatus: __expectString,
    Status: __expectString,
    SubnetGroupName: __expectString,
    TLSEnabled: __expectBoolean,
  }) as any;
};

// de_ClusterAlreadyExistsFault omitted.

/**
 * deserializeAws_json1_1ClusterConfiguration
 */
const de_ClusterConfiguration = (output: any, context: __SerdeContext): ClusterConfiguration => {
  return take(output, {
    Description: __expectString,
    EngineVersion: __expectString,
    MaintenanceWindow: __expectString,
    Name: __expectString,
    NodeType: __expectString,
    NumShards: __expectInt32,
    ParameterGroupName: __expectString,
    Port: __expectInt32,
    Shards: (_: any) => de_ShardDetails(_, context),
    SnapshotRetentionLimit: __expectInt32,
    SnapshotWindow: __expectString,
    SubnetGroupName: __expectString,
    TopicArn: __expectString,
    VpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterList
 */
const de_ClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Cluster(entry, context);
    });
  return retVal;
};

// de_ClusterNotFoundFault omitted.

/**
 * deserializeAws_json1_1ClusterPendingUpdates
 */
const de_ClusterPendingUpdates = (output: any, context: __SerdeContext): ClusterPendingUpdates => {
  return take(output, {
    ACLs: _json,
    Resharding: (_: any) => de_ReshardingStatus(_, context),
    ServiceUpdates: _json,
  }) as any;
};

// de_ClusterQuotaForCustomerExceededFault omitted.

/**
 * deserializeAws_json1_1CopySnapshotResponse
 */
const de_CopySnapshotResponse = (output: any, context: __SerdeContext): CopySnapshotResponse => {
  return take(output, {
    Snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

// de_CreateACLResponse omitted.

/**
 * deserializeAws_json1_1CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

// de_CreateParameterGroupResponse omitted.

/**
 * deserializeAws_json1_1CreateSnapshotResponse
 */
const de_CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return take(output, {
    Snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

// de_CreateSubnetGroupResponse omitted.

// de_CreateUserResponse omitted.

// de_DefaultUserRequired omitted.

// de_DeleteACLResponse omitted.

/**
 * deserializeAws_json1_1DeleteClusterResponse
 */
const de_DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

// de_DeleteParameterGroupResponse omitted.

/**
 * deserializeAws_json1_1DeleteSnapshotResponse
 */
const de_DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return take(output, {
    Snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

// de_DeleteSubnetGroupResponse omitted.

// de_DeleteUserResponse omitted.

// de_DescribeACLsResponse omitted.

/**
 * deserializeAws_json1_1DescribeClustersResponse
 */
const de_DescribeClustersResponse = (output: any, context: __SerdeContext): DescribeClustersResponse => {
  return take(output, {
    Clusters: (_: any) => de_ClusterList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeEngineVersionsResponse omitted.

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return take(output, {
    Events: (_: any) => de_EventList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeParameterGroupsResponse omitted.

// de_DescribeParametersResponse omitted.

/**
 * deserializeAws_json1_1DescribeReservedNodesOfferingsResponse
 */
const de_DescribeReservedNodesOfferingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReservedNodesOfferingsResponse => {
  return take(output, {
    NextToken: __expectString,
    ReservedNodesOfferings: (_: any) => de_ReservedNodesOfferingList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReservedNodesResponse
 */
const de_DescribeReservedNodesResponse = (output: any, context: __SerdeContext): DescribeReservedNodesResponse => {
  return take(output, {
    NextToken: __expectString,
    ReservedNodes: (_: any) => de_ReservedNodeList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeServiceUpdatesResponse
 */
const de_DescribeServiceUpdatesResponse = (output: any, context: __SerdeContext): DescribeServiceUpdatesResponse => {
  return take(output, {
    NextToken: __expectString,
    ServiceUpdates: (_: any) => de_ServiceUpdateList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSnapshotsResponse
 */
const de_DescribeSnapshotsResponse = (output: any, context: __SerdeContext): DescribeSnapshotsResponse => {
  return take(output, {
    NextToken: __expectString,
    Snapshots: (_: any) => de_SnapshotList(_, context),
  }) as any;
};

// de_DescribeSubnetGroupsResponse omitted.

// de_DescribeUsersResponse omitted.

// de_DuplicateUserNameFault omitted.

// de_Endpoint omitted.

// de_EngineVersionInfo omitted.

// de_EngineVersionInfoList omitted.

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    Date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    SourceName: __expectString,
    SourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailoverShardResponse
 */
const de_FailoverShardResponse = (output: any, context: __SerdeContext): FailoverShardResponse => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

// de_InsufficientClusterCapacityFault omitted.

// de_InvalidACLStateFault omitted.

// de_InvalidARNFault omitted.

// de_InvalidClusterStateFault omitted.

// de_InvalidCredentialsException omitted.

// de_InvalidKMSKeyFault omitted.

// de_InvalidNodeStateFault omitted.

// de_InvalidParameterCombinationException omitted.

// de_InvalidParameterGroupStateFault omitted.

// de_InvalidParameterValueException omitted.

// de_InvalidSnapshotStateFault omitted.

// de_InvalidSubnet omitted.

// de_InvalidUserStateFault omitted.

// de_InvalidVPCNetworkStateFault omitted.

// de_ListAllowedNodeTypeUpdatesResponse omitted.

// de_ListTagsResponse omitted.

/**
 * deserializeAws_json1_1Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  return take(output, {
    AvailabilityZone: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Endpoint: _json,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NodeList
 */
const de_NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Node(entry, context);
    });
  return retVal;
};

// de_NodeQuotaForClusterExceededFault omitted.

// de_NodeQuotaForCustomerExceededFault omitted.

// de_NodeTypeList omitted.

// de_NoOperationFault omitted.

// de_Parameter omitted.

// de_ParameterGroup omitted.

// de_ParameterGroupAlreadyExistsFault omitted.

// de_ParameterGroupList omitted.

// de_ParameterGroupNotFoundFault omitted.

// de_ParameterGroupQuotaExceededFault omitted.

// de_ParametersList omitted.

// de_PendingModifiedServiceUpdate omitted.

// de_PendingModifiedServiceUpdateList omitted.

/**
 * deserializeAws_json1_1PurchaseReservedNodesOfferingResponse
 */
const de_PurchaseReservedNodesOfferingResponse = (
  output: any,
  context: __SerdeContext
): PurchaseReservedNodesOfferingResponse => {
  return take(output, {
    ReservedNode: (_: any) => de_ReservedNode(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return take(output, {
    RecurringChargeAmount: __limitedParseDouble,
    RecurringChargeFrequency: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RecurringChargeList
 */
const de_RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecurringCharge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservedNode
 */
const de_ReservedNode = (output: any, context: __SerdeContext): ReservedNode => {
  return take(output, {
    ARN: __expectString,
    Duration: __expectInt32,
    FixedPrice: __limitedParseDouble,
    NodeCount: __expectInt32,
    NodeType: __expectString,
    OfferingType: __expectString,
    RecurringCharges: (_: any) => de_RecurringChargeList(_, context),
    ReservationId: __expectString,
    ReservedNodesOfferingId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

// de_ReservedNodeAlreadyExistsFault omitted.

/**
 * deserializeAws_json1_1ReservedNodeList
 */
const de_ReservedNodeList = (output: any, context: __SerdeContext): ReservedNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedNode(entry, context);
    });
  return retVal;
};

// de_ReservedNodeNotFoundFault omitted.

// de_ReservedNodeQuotaExceededFault omitted.

/**
 * deserializeAws_json1_1ReservedNodesOffering
 */
const de_ReservedNodesOffering = (output: any, context: __SerdeContext): ReservedNodesOffering => {
  return take(output, {
    Duration: __expectInt32,
    FixedPrice: __limitedParseDouble,
    NodeType: __expectString,
    OfferingType: __expectString,
    RecurringCharges: (_: any) => de_RecurringChargeList(_, context),
    ReservedNodesOfferingId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReservedNodesOfferingList
 */
const de_ReservedNodesOfferingList = (output: any, context: __SerdeContext): ReservedNodesOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedNodesOffering(entry, context);
    });
  return retVal;
};

// de_ReservedNodesOfferingNotFoundFault omitted.

// de_ResetParameterGroupResponse omitted.

/**
 * deserializeAws_json1_1ReshardingStatus
 */
const de_ReshardingStatus = (output: any, context: __SerdeContext): ReshardingStatus => {
  return take(output, {
    SlotMigration: (_: any) => de_SlotMigration(_, context),
  }) as any;
};

// de_SecurityGroupMembership omitted.

// de_SecurityGroupMembershipList omitted.

// de_ServiceLinkedRoleNotFoundFault omitted.

/**
 * deserializeAws_json1_1ServiceUpdate
 */
const de_ServiceUpdate = (output: any, context: __SerdeContext): ServiceUpdate => {
  return take(output, {
    AutoUpdateStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ClusterName: __expectString,
    Description: __expectString,
    NodesUpdated: __expectString,
    ReleaseDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServiceUpdateName: __expectString,
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ServiceUpdateList
 */
const de_ServiceUpdateList = (output: any, context: __SerdeContext): ServiceUpdate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceUpdate(entry, context);
    });
  return retVal;
};

// de_ServiceUpdateNotFoundFault omitted.

/**
 * deserializeAws_json1_1Shard
 */
const de_Shard = (output: any, context: __SerdeContext): Shard => {
  return take(output, {
    Name: __expectString,
    Nodes: (_: any) => de_NodeList(_, context),
    NumberOfNodes: __expectInt32,
    Slots: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ShardConfiguration omitted.

/**
 * deserializeAws_json1_1ShardDetail
 */
const de_ShardDetail = (output: any, context: __SerdeContext): ShardDetail => {
  return take(output, {
    Configuration: _json,
    Name: __expectString,
    Size: __expectString,
    SnapshotCreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ShardDetails
 */
const de_ShardDetails = (output: any, context: __SerdeContext): ShardDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Shard(entry, context);
    });
  return retVal;
};

// de_ShardNotFoundFault omitted.

// de_ShardsPerClusterQuotaExceededFault omitted.

/**
 * deserializeAws_json1_1SlotMigration
 */
const de_SlotMigration = (output: any, context: __SerdeContext): SlotMigration => {
  return take(output, {
    ProgressPercentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return take(output, {
    ARN: __expectString,
    ClusterConfiguration: (_: any) => de_ClusterConfiguration(_, context),
    DataTiering: __expectString,
    KmsKeyId: __expectString,
    Name: __expectString,
    Source: __expectString,
    Status: __expectString,
  }) as any;
};

// de_SnapshotAlreadyExistsFault omitted.

/**
 * deserializeAws_json1_1SnapshotList
 */
const de_SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Snapshot(entry, context);
    });
  return retVal;
};

// de_SnapshotNotFoundFault omitted.

// de_SnapshotQuotaExceededFault omitted.

// de_Subnet omitted.

// de_SubnetGroup omitted.

// de_SubnetGroupAlreadyExistsFault omitted.

// de_SubnetGroupInUseFault omitted.

// de_SubnetGroupList omitted.

// de_SubnetGroupNotFoundFault omitted.

// de_SubnetGroupQuotaExceededFault omitted.

// de_SubnetInUse omitted.

// de_SubnetList omitted.

// de_SubnetNotAllowedFault omitted.

// de_SubnetQuotaExceededFault omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagNotFoundFault omitted.

// de_TagQuotaPerResourceExceeded omitted.

// de_TagResourceResponse omitted.

// de_TestFailoverNotAvailableFault omitted.

// de_UnprocessedCluster omitted.

// de_UnprocessedClusterList omitted.

// de_UntagResourceResponse omitted.

// de_UpdateACLResponse omitted.

/**
 * deserializeAws_json1_1UpdateClusterResponse
 */
const de_UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

// de_UpdateParameterGroupResponse omitted.

// de_UpdateSubnetGroupResponse omitted.

// de_UpdateUserResponse omitted.

// de_User omitted.

// de_UserAlreadyExistsFault omitted.

// de_UserList omitted.

// de_UserNameList omitted.

// de_UserNotFoundFault omitted.

// de_UserQuotaExceededFault omitted.

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
