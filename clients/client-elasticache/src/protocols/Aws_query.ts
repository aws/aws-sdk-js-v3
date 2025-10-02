// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeDateTime as __serializeDateTime,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "../commands/AddTagsToResourceCommand";
import {
  AuthorizeCacheSecurityGroupIngressCommandInput,
  AuthorizeCacheSecurityGroupIngressCommandOutput,
} from "../commands/AuthorizeCacheSecurityGroupIngressCommand";
import {
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput,
} from "../commands/BatchApplyUpdateActionCommand";
import {
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
} from "../commands/BatchStopUpdateActionCommand";
import { CompleteMigrationCommandInput, CompleteMigrationCommandOutput } from "../commands/CompleteMigrationCommand";
import {
  CopyServerlessCacheSnapshotCommandInput,
  CopyServerlessCacheSnapshotCommandOutput,
} from "../commands/CopyServerlessCacheSnapshotCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "../commands/CopySnapshotCommand";
import { CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput } from "../commands/CreateCacheClusterCommand";
import {
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput,
} from "../commands/CreateCacheParameterGroupCommand";
import {
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput,
} from "../commands/CreateCacheSecurityGroupCommand";
import {
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput,
} from "../commands/CreateCacheSubnetGroupCommand";
import {
  CreateGlobalReplicationGroupCommandInput,
  CreateGlobalReplicationGroupCommandOutput,
} from "../commands/CreateGlobalReplicationGroupCommand";
import {
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput,
} from "../commands/CreateReplicationGroupCommand";
import {
  CreateServerlessCacheCommandInput,
  CreateServerlessCacheCommandOutput,
} from "../commands/CreateServerlessCacheCommand";
import {
  CreateServerlessCacheSnapshotCommandInput,
  CreateServerlessCacheSnapshotCommandOutput,
} from "../commands/CreateServerlessCacheSnapshotCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { CreateUserGroupCommandInput, CreateUserGroupCommandOutput } from "../commands/CreateUserGroupCommand";
import {
  DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
} from "../commands/DecreaseNodeGroupsInGlobalReplicationGroupCommand";
import {
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput,
} from "../commands/DecreaseReplicaCountCommand";
import { DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput } from "../commands/DeleteCacheClusterCommand";
import {
  DeleteCacheParameterGroupCommandInput,
  DeleteCacheParameterGroupCommandOutput,
} from "../commands/DeleteCacheParameterGroupCommand";
import {
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput,
} from "../commands/DeleteCacheSecurityGroupCommand";
import {
  DeleteCacheSubnetGroupCommandInput,
  DeleteCacheSubnetGroupCommandOutput,
} from "../commands/DeleteCacheSubnetGroupCommand";
import {
  DeleteGlobalReplicationGroupCommandInput,
  DeleteGlobalReplicationGroupCommandOutput,
} from "../commands/DeleteGlobalReplicationGroupCommand";
import {
  DeleteReplicationGroupCommandInput,
  DeleteReplicationGroupCommandOutput,
} from "../commands/DeleteReplicationGroupCommand";
import {
  DeleteServerlessCacheCommandInput,
  DeleteServerlessCacheCommandOutput,
} from "../commands/DeleteServerlessCacheCommand";
import {
  DeleteServerlessCacheSnapshotCommandInput,
  DeleteServerlessCacheSnapshotCommandOutput,
} from "../commands/DeleteServerlessCacheSnapshotCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "../commands/DeleteSnapshotCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DeleteUserGroupCommandInput, DeleteUserGroupCommandOutput } from "../commands/DeleteUserGroupCommand";
import {
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
} from "../commands/DescribeCacheClustersCommand";
import {
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput,
} from "../commands/DescribeCacheEngineVersionsCommand";
import {
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
} from "../commands/DescribeCacheParameterGroupsCommand";
import {
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
} from "../commands/DescribeCacheParametersCommand";
import {
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
} from "../commands/DescribeCacheSecurityGroupsCommand";
import {
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
} from "../commands/DescribeCacheSubnetGroupsCommand";
import {
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeGlobalReplicationGroupsCommandInput,
  DescribeGlobalReplicationGroupsCommandOutput,
} from "../commands/DescribeGlobalReplicationGroupsCommand";
import {
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
} from "../commands/DescribeReplicationGroupsCommand";
import {
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
} from "../commands/DescribeReservedCacheNodesCommand";
import {
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
} from "../commands/DescribeReservedCacheNodesOfferingsCommand";
import {
  DescribeServerlessCachesCommandInput,
  DescribeServerlessCachesCommandOutput,
} from "../commands/DescribeServerlessCachesCommand";
import {
  DescribeServerlessCacheSnapshotsCommandInput,
  DescribeServerlessCacheSnapshotsCommandOutput,
} from "../commands/DescribeServerlessCacheSnapshotsCommand";
import {
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "../commands/DescribeServiceUpdatesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import {
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput,
} from "../commands/DescribeUpdateActionsCommand";
import { DescribeUserGroupsCommandInput, DescribeUserGroupsCommandOutput } from "../commands/DescribeUserGroupsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "../commands/DescribeUsersCommand";
import {
  DisassociateGlobalReplicationGroupCommandInput,
  DisassociateGlobalReplicationGroupCommandOutput,
} from "../commands/DisassociateGlobalReplicationGroupCommand";
import {
  ExportServerlessCacheSnapshotCommandInput,
  ExportServerlessCacheSnapshotCommandOutput,
} from "../commands/ExportServerlessCacheSnapshotCommand";
import {
  FailoverGlobalReplicationGroupCommandInput,
  FailoverGlobalReplicationGroupCommandOutput,
} from "../commands/FailoverGlobalReplicationGroupCommand";
import {
  IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
} from "../commands/IncreaseNodeGroupsInGlobalReplicationGroupCommand";
import {
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput,
} from "../commands/IncreaseReplicaCountCommand";
import {
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput,
} from "../commands/ListAllowedNodeTypeModificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput } from "../commands/ModifyCacheClusterCommand";
import {
  ModifyCacheParameterGroupCommandInput,
  ModifyCacheParameterGroupCommandOutput,
} from "../commands/ModifyCacheParameterGroupCommand";
import {
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput,
} from "../commands/ModifyCacheSubnetGroupCommand";
import {
  ModifyGlobalReplicationGroupCommandInput,
  ModifyGlobalReplicationGroupCommandOutput,
} from "../commands/ModifyGlobalReplicationGroupCommand";
import {
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput,
} from "../commands/ModifyReplicationGroupCommand";
import {
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput,
} from "../commands/ModifyReplicationGroupShardConfigurationCommand";
import {
  ModifyServerlessCacheCommandInput,
  ModifyServerlessCacheCommandOutput,
} from "../commands/ModifyServerlessCacheCommand";
import { ModifyUserCommandInput, ModifyUserCommandOutput } from "../commands/ModifyUserCommand";
import { ModifyUserGroupCommandInput, ModifyUserGroupCommandOutput } from "../commands/ModifyUserGroupCommand";
import {
  PurchaseReservedCacheNodesOfferingCommandInput,
  PurchaseReservedCacheNodesOfferingCommandOutput,
} from "../commands/PurchaseReservedCacheNodesOfferingCommand";
import {
  RebalanceSlotsInGlobalReplicationGroupCommandInput,
  RebalanceSlotsInGlobalReplicationGroupCommandOutput,
} from "../commands/RebalanceSlotsInGlobalReplicationGroupCommand";
import { RebootCacheClusterCommandInput, RebootCacheClusterCommandOutput } from "../commands/RebootCacheClusterCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "../commands/RemoveTagsFromResourceCommand";
import {
  ResetCacheParameterGroupCommandInput,
  ResetCacheParameterGroupCommandOutput,
} from "../commands/ResetCacheParameterGroupCommand";
import {
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput,
} from "../commands/RevokeCacheSecurityGroupIngressCommand";
import { StartMigrationCommandInput, StartMigrationCommandOutput } from "../commands/StartMigrationCommand";
import { TestFailoverCommandInput, TestFailoverCommandOutput } from "../commands/TestFailoverCommand";
import { TestMigrationCommandInput, TestMigrationCommandOutput } from "../commands/TestMigrationCommand";
import { ElastiCacheServiceException as __BaseException } from "../models/ElastiCacheServiceException";
import {
  AddTagsToResourceMessage,
  AllowedNodeTypeModificationsMessage,
  Authentication,
  AuthenticationMode,
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  AuthorizeCacheSecurityGroupIngressMessage,
  AuthorizeCacheSecurityGroupIngressResult,
  AvailabilityZone,
  BatchApplyUpdateActionMessage,
  BatchStopUpdateActionMessage,
  CacheCluster,
  CacheClusterAlreadyExistsFault,
  CacheClusterMessage,
  CacheClusterNotFoundFault,
  CacheEngineVersion,
  CacheEngineVersionMessage,
  CacheNode,
  CacheNodeTypeSpecificParameter,
  CacheNodeTypeSpecificValue,
  CacheNodeUpdateStatus,
  CacheParameterGroup,
  CacheParameterGroupAlreadyExistsFault,
  CacheParameterGroupDetails,
  CacheParameterGroupNameMessage,
  CacheParameterGroupNotFoundFault,
  CacheParameterGroupQuotaExceededFault,
  CacheParameterGroupsMessage,
  CacheParameterGroupStatus,
  CacheSecurityGroup,
  CacheSecurityGroupAlreadyExistsFault,
  CacheSecurityGroupMembership,
  CacheSecurityGroupMessage,
  CacheSecurityGroupNotFoundFault,
  CacheSecurityGroupQuotaExceededFault,
  CacheSubnetGroup,
  CacheSubnetGroupAlreadyExistsFault,
  CacheSubnetGroupInUse,
  CacheSubnetGroupMessage,
  CacheSubnetGroupNotFoundFault,
  CacheSubnetGroupQuotaExceededFault,
  CacheSubnetQuotaExceededFault,
  CacheUsageLimits,
  CloudWatchLogsDestinationDetails,
  ClusterQuotaForCustomerExceededFault,
  CompleteMigrationMessage,
  CompleteMigrationResponse,
  ConfigureShard,
  CopyServerlessCacheSnapshotRequest,
  CopyServerlessCacheSnapshotResponse,
  CopySnapshotMessage,
  CopySnapshotResult,
  CreateCacheClusterMessage,
  CreateCacheClusterResult,
  CreateCacheParameterGroupMessage,
  CreateCacheParameterGroupResult,
  CreateCacheSecurityGroupMessage,
  CreateCacheSecurityGroupResult,
  CreateCacheSubnetGroupMessage,
  CreateCacheSubnetGroupResult,
  CreateGlobalReplicationGroupMessage,
  CreateGlobalReplicationGroupResult,
  CreateReplicationGroupMessage,
  CreateReplicationGroupResult,
  CreateServerlessCacheRequest,
  CreateServerlessCacheResponse,
  CreateServerlessCacheSnapshotRequest,
  CreateServerlessCacheSnapshotResponse,
  CreateSnapshotMessage,
  CreateSnapshotResult,
  CreateUserGroupMessage,
  CreateUserMessage,
  DataStorage,
  DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  DecreaseNodeGroupsInGlobalReplicationGroupResult,
  DecreaseReplicaCountMessage,
  DecreaseReplicaCountResult,
  DefaultUserAssociatedToUserGroupFault,
  DefaultUserRequired,
  DeleteCacheClusterMessage,
  DeleteCacheClusterResult,
  DeleteCacheParameterGroupMessage,
  DeleteCacheSecurityGroupMessage,
  DeleteCacheSubnetGroupMessage,
  DeleteGlobalReplicationGroupMessage,
  DeleteGlobalReplicationGroupResult,
  DeleteReplicationGroupMessage,
  DeleteReplicationGroupResult,
  DeleteServerlessCacheRequest,
  DeleteServerlessCacheResponse,
  DeleteServerlessCacheSnapshotRequest,
  DeleteServerlessCacheSnapshotResponse,
  DeleteSnapshotMessage,
  DeleteSnapshotResult,
  DeleteUserGroupMessage,
  DeleteUserMessage,
  DescribeCacheClustersMessage,
  DescribeCacheEngineVersionsMessage,
  DescribeCacheParameterGroupsMessage,
  DescribeCacheParametersMessage,
  DescribeCacheSecurityGroupsMessage,
  DescribeCacheSubnetGroupsMessage,
  DescribeEngineDefaultParametersMessage,
  DescribeEngineDefaultParametersResult,
  DescribeEventsMessage,
  DescribeGlobalReplicationGroupsMessage,
  DescribeGlobalReplicationGroupsResult,
  DescribeReplicationGroupsMessage,
  DescribeReservedCacheNodesMessage,
  DescribeReservedCacheNodesOfferingsMessage,
  DescribeServerlessCacheSnapshotsRequest,
  DescribeServerlessCacheSnapshotsResponse,
  DescribeServerlessCachesRequest,
  DescribeServerlessCachesResponse,
  DescribeServiceUpdatesMessage,
  DescribeSnapshotsListMessage,
  DescribeSnapshotsMessage,
  DescribeUpdateActionsMessage,
  DescribeUserGroupsMessage,
  DescribeUserGroupsResult,
  DescribeUsersMessage,
  DescribeUsersResult,
  DestinationDetails,
  DisassociateGlobalReplicationGroupMessage,
  DisassociateGlobalReplicationGroupResult,
  DuplicateUserNameFault,
  EC2SecurityGroup,
  ECPUPerSecond,
  Endpoint,
  EngineDefaults,
  Event,
  EventsMessage,
  ExportServerlessCacheSnapshotRequest,
  ExportServerlessCacheSnapshotResponse,
  FailoverGlobalReplicationGroupMessage,
  FailoverGlobalReplicationGroupResult,
  Filter,
  GlobalNodeGroup,
  GlobalReplicationGroup,
  GlobalReplicationGroupAlreadyExistsFault,
  GlobalReplicationGroupInfo,
  GlobalReplicationGroupMember,
  GlobalReplicationGroupNotFoundFault,
  IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  IncreaseNodeGroupsInGlobalReplicationGroupResult,
  IncreaseReplicaCountMessage,
  IncreaseReplicaCountResult,
  InsufficientCacheClusterCapacityFault,
  InvalidARNFault,
  InvalidCacheClusterStateFault,
  InvalidCacheParameterGroupStateFault,
  InvalidCacheSecurityGroupStateFault,
  InvalidCredentialsException,
  InvalidGlobalReplicationGroupStateFault,
  InvalidKMSKeyFault,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  InvalidReplicationGroupStateFault,
  InvalidServerlessCacheSnapshotStateFault,
  InvalidServerlessCacheStateFault,
  InvalidSnapshotStateFault,
  InvalidSubnet,
  InvalidUserGroupStateFault,
  InvalidUserStateFault,
  InvalidVPCNetworkStateFault,
  KinesisFirehoseDestinationDetails,
  ListAllowedNodeTypeModificationsMessage,
  ListTagsForResourceMessage,
  LogDeliveryConfiguration,
  LogDeliveryConfigurationRequest,
  ModifyCacheClusterMessage,
  ModifyCacheClusterResult,
  ModifyCacheParameterGroupMessage,
  ModifyCacheSubnetGroupMessage,
  ModifyCacheSubnetGroupResult,
  ModifyGlobalReplicationGroupMessage,
  ModifyGlobalReplicationGroupResult,
  ModifyReplicationGroupMessage,
  ModifyReplicationGroupResult,
  ModifyReplicationGroupShardConfigurationMessage,
  ModifyReplicationGroupShardConfigurationResult,
  ModifyServerlessCacheRequest,
  ModifyServerlessCacheResponse,
  ModifyUserGroupMessage,
  ModifyUserMessage,
  NetworkType,
  NodeGroup,
  NodeGroupConfiguration,
  NodeGroupMember,
  NodeGroupMemberUpdateStatus,
  NodeGroupsPerReplicationGroupQuotaExceededFault,
  NodeGroupUpdateStatus,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NodeSnapshot,
  NoOperationFault,
  NotificationConfiguration,
  Parameter,
  ParameterNameValue,
  PendingLogDeliveryConfiguration,
  PendingModifiedValues,
  ProcessedUpdateAction,
  PurchaseReservedCacheNodesOfferingMessage,
  PurchaseReservedCacheNodesOfferingResult,
  RebalanceSlotsInGlobalReplicationGroupMessage,
  RebalanceSlotsInGlobalReplicationGroupResult,
  RebootCacheClusterMessage,
  RebootCacheClusterResult,
  RecurringCharge,
  RegionalConfiguration,
  RemoveTagsFromResourceMessage,
  ReplicationGroup,
  ReplicationGroupAlreadyExistsFault,
  ReplicationGroupMessage,
  ReplicationGroupNotFoundFault,
  ReplicationGroupNotUnderMigrationFault,
  ReplicationGroupPendingModifiedValues,
  ReservedCacheNode,
  ReservedCacheNodeAlreadyExistsFault,
  ReservedCacheNodeMessage,
  ReservedCacheNodeNotFoundFault,
  ReservedCacheNodeQuotaExceededFault,
  ReservedCacheNodesOffering,
  ReservedCacheNodesOfferingMessage,
  ReservedCacheNodesOfferingNotFoundFault,
  ResetCacheParameterGroupMessage,
  ReshardingConfiguration,
  ReshardingStatus,
  RevokeCacheSecurityGroupIngressMessage,
  ScaleConfig,
  SecurityGroupMembership,
  ServerlessCache,
  ServerlessCacheAlreadyExistsFault,
  ServerlessCacheConfiguration,
  ServerlessCacheNotFoundFault,
  ServerlessCacheQuotaForCustomerExceededFault,
  ServerlessCacheSnapshot,
  ServerlessCacheSnapshotAlreadyExistsFault,
  ServerlessCacheSnapshotNotFoundFault,
  ServerlessCacheSnapshotQuotaExceededFault,
  ServiceLinkedRoleNotFoundFault,
  ServiceUpdate,
  ServiceUpdateNotFoundFault,
  ServiceUpdatesMessage,
  ServiceUpdateStatus,
  SlotMigration,
  Snapshot,
  SnapshotAlreadyExistsFault,
  SnapshotFeatureNotSupportedFault,
  SnapshotNotFoundFault,
  SnapshotQuotaExceededFault,
  Subnet,
  SubnetInUse,
  SubnetNotAllowedFault,
  SubnetOutpost,
  Tag,
  TagListMessage,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TimeRangeFilter,
  UnprocessedUpdateAction,
  UpdateAction,
  UpdateActionResultsMessage,
  UpdateActionsMessage,
  UpdateActionStatus,
  User,
  UserAlreadyExistsFault,
  UserGroup,
  UserGroupAlreadyExistsFault,
  UserGroupNotFoundFault,
  UserGroupPendingChanges,
  UserGroupQuotaExceededFault,
  UserGroupsUpdateStatus,
  UserNotFoundFault,
  UserQuotaExceededFault,
} from "../models/models_0";
import {
  APICallRateForCustomerExceededFault,
  CustomerNodeEndpoint,
  NodeGroupNotFoundFault,
  ReplicationGroupAlreadyUnderMigrationFault,
  RevokeCacheSecurityGroupIngressResult,
  StartMigrationMessage,
  StartMigrationResponse,
  TestFailoverMessage,
  TestFailoverNotAvailableFault,
  TestFailoverResult,
  TestMigrationMessage,
  TestMigrationResponse,
} from "../models/models_1";

/**
 * serializeAws_queryAddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddTagsToResourceMessage(input, context),
    [_A]: _ATTR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand
 */
export const se_AuthorizeCacheSecurityGroupIngressCommand = async (
  input: AuthorizeCacheSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AuthorizeCacheSecurityGroupIngressMessage(input, context),
    [_A]: _ACSGI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBatchApplyUpdateActionCommand
 */
export const se_BatchApplyUpdateActionCommand = async (
  input: BatchApplyUpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BatchApplyUpdateActionMessage(input, context),
    [_A]: _BAUA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBatchStopUpdateActionCommand
 */
export const se_BatchStopUpdateActionCommand = async (
  input: BatchStopUpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BatchStopUpdateActionMessage(input, context),
    [_A]: _BSUA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCompleteMigrationCommand
 */
export const se_CompleteMigrationCommand = async (
  input: CompleteMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CompleteMigrationMessage(input, context),
    [_A]: _CM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopyServerlessCacheSnapshotCommand
 */
export const se_CopyServerlessCacheSnapshotCommand = async (
  input: CopyServerlessCacheSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopyServerlessCacheSnapshotRequest(input, context),
    [_A]: _CSCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopySnapshotCommand
 */
export const se_CopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopySnapshotMessage(input, context),
    [_A]: _CS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateCacheClusterCommand
 */
export const se_CreateCacheClusterCommand = async (
  input: CreateCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateCacheClusterMessage(input, context),
    [_A]: _CCC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateCacheParameterGroupCommand
 */
export const se_CreateCacheParameterGroupCommand = async (
  input: CreateCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateCacheParameterGroupMessage(input, context),
    [_A]: _CCPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateCacheSecurityGroupCommand
 */
export const se_CreateCacheSecurityGroupCommand = async (
  input: CreateCacheSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateCacheSecurityGroupMessage(input, context),
    [_A]: _CCSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateCacheSubnetGroupCommand
 */
export const se_CreateCacheSubnetGroupCommand = async (
  input: CreateCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateCacheSubnetGroupMessage(input, context),
    [_A]: _CCSGr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateGlobalReplicationGroupCommand
 */
export const se_CreateGlobalReplicationGroupCommand = async (
  input: CreateGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateGlobalReplicationGroupMessage(input, context),
    [_A]: _CGRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateReplicationGroupCommand
 */
export const se_CreateReplicationGroupCommand = async (
  input: CreateReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateReplicationGroupMessage(input, context),
    [_A]: _CRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateServerlessCacheCommand
 */
export const se_CreateServerlessCacheCommand = async (
  input: CreateServerlessCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateServerlessCacheRequest(input, context),
    [_A]: _CSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateServerlessCacheSnapshotCommand
 */
export const se_CreateServerlessCacheSnapshotCommand = async (
  input: CreateServerlessCacheSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateServerlessCacheSnapshotRequest(input, context),
    [_A]: _CSCSr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateSnapshotMessage(input, context),
    [_A]: _CSr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateUserMessage(input, context),
    [_A]: _CU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateUserGroupCommand
 */
export const se_CreateUserGroupCommand = async (
  input: CreateUserGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateUserGroupMessage(input, context),
    [_A]: _CUG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand
 */
export const se_DecreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DecreaseNodeGroupsInGlobalReplicationGroupMessage(input, context),
    [_A]: _DNGIGRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDecreaseReplicaCountCommand
 */
export const se_DecreaseReplicaCountCommand = async (
  input: DecreaseReplicaCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DecreaseReplicaCountMessage(input, context),
    [_A]: _DRC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteCacheClusterCommand
 */
export const se_DeleteCacheClusterCommand = async (
  input: DeleteCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteCacheClusterMessage(input, context),
    [_A]: _DCC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteCacheParameterGroupCommand
 */
export const se_DeleteCacheParameterGroupCommand = async (
  input: DeleteCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteCacheParameterGroupMessage(input, context),
    [_A]: _DCPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteCacheSecurityGroupCommand
 */
export const se_DeleteCacheSecurityGroupCommand = async (
  input: DeleteCacheSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteCacheSecurityGroupMessage(input, context),
    [_A]: _DCSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteCacheSubnetGroupCommand
 */
export const se_DeleteCacheSubnetGroupCommand = async (
  input: DeleteCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteCacheSubnetGroupMessage(input, context),
    [_A]: _DCSGe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteGlobalReplicationGroupCommand
 */
export const se_DeleteGlobalReplicationGroupCommand = async (
  input: DeleteGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteGlobalReplicationGroupMessage(input, context),
    [_A]: _DGRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteReplicationGroupCommand
 */
export const se_DeleteReplicationGroupCommand = async (
  input: DeleteReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteReplicationGroupMessage(input, context),
    [_A]: _DRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteServerlessCacheCommand
 */
export const se_DeleteServerlessCacheCommand = async (
  input: DeleteServerlessCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteServerlessCacheRequest(input, context),
    [_A]: _DSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteServerlessCacheSnapshotCommand
 */
export const se_DeleteServerlessCacheSnapshotCommand = async (
  input: DeleteServerlessCacheSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteServerlessCacheSnapshotRequest(input, context),
    [_A]: _DSCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSnapshotCommand
 */
export const se_DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSnapshotMessage(input, context),
    [_A]: _DS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteUserMessage(input, context),
    [_A]: _DU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteUserGroupCommand
 */
export const se_DeleteUserGroupCommand = async (
  input: DeleteUserGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteUserGroupMessage(input, context),
    [_A]: _DUG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCacheClustersCommand
 */
export const se_DescribeCacheClustersCommand = async (
  input: DescribeCacheClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCacheClustersMessage(input, context),
    [_A]: _DCCe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCacheEngineVersionsCommand
 */
export const se_DescribeCacheEngineVersionsCommand = async (
  input: DescribeCacheEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCacheEngineVersionsMessage(input, context),
    [_A]: _DCEV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCacheParameterGroupsCommand
 */
export const se_DescribeCacheParameterGroupsCommand = async (
  input: DescribeCacheParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCacheParameterGroupsMessage(input, context),
    [_A]: _DCPGe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCacheParametersCommand
 */
export const se_DescribeCacheParametersCommand = async (
  input: DescribeCacheParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCacheParametersMessage(input, context),
    [_A]: _DCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCacheSecurityGroupsCommand
 */
export const se_DescribeCacheSecurityGroupsCommand = async (
  input: DescribeCacheSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCacheSecurityGroupsMessage(input, context),
    [_A]: _DCSGes,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCacheSubnetGroupsCommand
 */
export const se_DescribeCacheSubnetGroupsCommand = async (
  input: DescribeCacheSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCacheSubnetGroupsMessage(input, context),
    [_A]: _DCSGesc,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEngineDefaultParametersCommand
 */
export const se_DescribeEngineDefaultParametersCommand = async (
  input: DescribeEngineDefaultParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEngineDefaultParametersMessage(input, context),
    [_A]: _DEDP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEventsMessage(input, context),
    [_A]: _DE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeGlobalReplicationGroupsCommand
 */
export const se_DescribeGlobalReplicationGroupsCommand = async (
  input: DescribeGlobalReplicationGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeGlobalReplicationGroupsMessage(input, context),
    [_A]: _DGRGe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReplicationGroupsCommand
 */
export const se_DescribeReplicationGroupsCommand = async (
  input: DescribeReplicationGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReplicationGroupsMessage(input, context),
    [_A]: _DRGe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReservedCacheNodesCommand
 */
export const se_DescribeReservedCacheNodesCommand = async (
  input: DescribeReservedCacheNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReservedCacheNodesMessage(input, context),
    [_A]: _DRCN,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReservedCacheNodesOfferingsCommand
 */
export const se_DescribeReservedCacheNodesOfferingsCommand = async (
  input: DescribeReservedCacheNodesOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReservedCacheNodesOfferingsMessage(input, context),
    [_A]: _DRCNO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeServerlessCachesCommand
 */
export const se_DescribeServerlessCachesCommand = async (
  input: DescribeServerlessCachesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeServerlessCachesRequest(input, context),
    [_A]: _DSCe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeServerlessCacheSnapshotsCommand
 */
export const se_DescribeServerlessCacheSnapshotsCommand = async (
  input: DescribeServerlessCacheSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeServerlessCacheSnapshotsRequest(input, context),
    [_A]: _DSCSe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeServiceUpdatesCommand
 */
export const se_DescribeServiceUpdatesCommand = async (
  input: DescribeServiceUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeServiceUpdatesMessage(input, context),
    [_A]: _DSU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeSnapshotsCommand
 */
export const se_DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeSnapshotsMessage(input, context),
    [_A]: _DSe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeUpdateActionsCommand
 */
export const se_DescribeUpdateActionsCommand = async (
  input: DescribeUpdateActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeUpdateActionsMessage(input, context),
    [_A]: _DUA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeUserGroupsCommand
 */
export const se_DescribeUserGroupsCommand = async (
  input: DescribeUserGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeUserGroupsMessage(input, context),
    [_A]: _DUGe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeUsersCommand
 */
export const se_DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeUsersMessage(input, context),
    [_A]: _DUe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisassociateGlobalReplicationGroupCommand
 */
export const se_DisassociateGlobalReplicationGroupCommand = async (
  input: DisassociateGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisassociateGlobalReplicationGroupMessage(input, context),
    [_A]: _DGRGi,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryExportServerlessCacheSnapshotCommand
 */
export const se_ExportServerlessCacheSnapshotCommand = async (
  input: ExportServerlessCacheSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ExportServerlessCacheSnapshotRequest(input, context),
    [_A]: _ESCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryFailoverGlobalReplicationGroupCommand
 */
export const se_FailoverGlobalReplicationGroupCommand = async (
  input: FailoverGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_FailoverGlobalReplicationGroupMessage(input, context),
    [_A]: _FGRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand
 */
export const se_IncreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_IncreaseNodeGroupsInGlobalReplicationGroupMessage(input, context),
    [_A]: _INGIGRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryIncreaseReplicaCountCommand
 */
export const se_IncreaseReplicaCountCommand = async (
  input: IncreaseReplicaCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_IncreaseReplicaCountMessage(input, context),
    [_A]: _IRC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListAllowedNodeTypeModificationsCommand
 */
export const se_ListAllowedNodeTypeModificationsCommand = async (
  input: ListAllowedNodeTypeModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListAllowedNodeTypeModificationsMessage(input, context),
    [_A]: _LANTM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTagsForResourceMessage(input, context),
    [_A]: _LTFR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCacheClusterCommand
 */
export const se_ModifyCacheClusterCommand = async (
  input: ModifyCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCacheClusterMessage(input, context),
    [_A]: _MCC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCacheParameterGroupCommand
 */
export const se_ModifyCacheParameterGroupCommand = async (
  input: ModifyCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCacheParameterGroupMessage(input, context),
    [_A]: _MCPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCacheSubnetGroupCommand
 */
export const se_ModifyCacheSubnetGroupCommand = async (
  input: ModifyCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCacheSubnetGroupMessage(input, context),
    [_A]: _MCSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyGlobalReplicationGroupCommand
 */
export const se_ModifyGlobalReplicationGroupCommand = async (
  input: ModifyGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyGlobalReplicationGroupMessage(input, context),
    [_A]: _MGRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyReplicationGroupCommand
 */
export const se_ModifyReplicationGroupCommand = async (
  input: ModifyReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyReplicationGroupMessage(input, context),
    [_A]: _MRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyReplicationGroupShardConfigurationCommand
 */
export const se_ModifyReplicationGroupShardConfigurationCommand = async (
  input: ModifyReplicationGroupShardConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyReplicationGroupShardConfigurationMessage(input, context),
    [_A]: _MRGSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyServerlessCacheCommand
 */
export const se_ModifyServerlessCacheCommand = async (
  input: ModifyServerlessCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyServerlessCacheRequest(input, context),
    [_A]: _MSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyUserCommand
 */
export const se_ModifyUserCommand = async (
  input: ModifyUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyUserMessage(input, context),
    [_A]: _MU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyUserGroupCommand
 */
export const se_ModifyUserGroupCommand = async (
  input: ModifyUserGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyUserGroupMessage(input, context),
    [_A]: _MUG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPurchaseReservedCacheNodesOfferingCommand
 */
export const se_PurchaseReservedCacheNodesOfferingCommand = async (
  input: PurchaseReservedCacheNodesOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PurchaseReservedCacheNodesOfferingMessage(input, context),
    [_A]: _PRCNO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand
 */
export const se_RebalanceSlotsInGlobalReplicationGroupCommand = async (
  input: RebalanceSlotsInGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RebalanceSlotsInGlobalReplicationGroupMessage(input, context),
    [_A]: _RSIGRG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRebootCacheClusterCommand
 */
export const se_RebootCacheClusterCommand = async (
  input: RebootCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RebootCacheClusterMessage(input, context),
    [_A]: _RCC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveTagsFromResourceCommand
 */
export const se_RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveTagsFromResourceMessage(input, context),
    [_A]: _RTFR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResetCacheParameterGroupCommand
 */
export const se_ResetCacheParameterGroupCommand = async (
  input: ResetCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResetCacheParameterGroupMessage(input, context),
    [_A]: _RCPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRevokeCacheSecurityGroupIngressCommand
 */
export const se_RevokeCacheSecurityGroupIngressCommand = async (
  input: RevokeCacheSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RevokeCacheSecurityGroupIngressMessage(input, context),
    [_A]: _RCSGI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartMigrationCommand
 */
export const se_StartMigrationCommand = async (
  input: StartMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartMigrationMessage(input, context),
    [_A]: _SM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTestFailoverCommand
 */
export const se_TestFailoverCommand = async (
  input: TestFailoverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TestFailoverMessage(input, context),
    [_A]: _TF,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTestMigrationCommand
 */
export const se_TestMigrationCommand = async (
  input: TestMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TestMigrationMessage(input, context),
    [_A]: _TM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagListMessage(data.AddTagsToResourceResult, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand
 */
export const de_AuthorizeCacheSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AuthorizeCacheSecurityGroupIngressResult(data.AuthorizeCacheSecurityGroupIngressResult, context);
  const response: AuthorizeCacheSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBatchApplyUpdateActionCommand
 */
export const de_BatchApplyUpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchApplyUpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateActionResultsMessage(data.BatchApplyUpdateActionResult, context);
  const response: BatchApplyUpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBatchStopUpdateActionCommand
 */
export const de_BatchStopUpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopUpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateActionResultsMessage(data.BatchStopUpdateActionResult, context);
  const response: BatchStopUpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCompleteMigrationCommand
 */
export const de_CompleteMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CompleteMigrationResponse(data.CompleteMigrationResult, context);
  const response: CompleteMigrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopyServerlessCacheSnapshotCommand
 */
export const de_CopyServerlessCacheSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyServerlessCacheSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyServerlessCacheSnapshotResponse(data.CopyServerlessCacheSnapshotResult, context);
  const response: CopyServerlessCacheSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopySnapshotCommand
 */
export const de_CopySnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopySnapshotResult(data.CopySnapshotResult, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateCacheClusterCommand
 */
export const de_CreateCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCacheClusterResult(data.CreateCacheClusterResult, context);
  const response: CreateCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateCacheParameterGroupCommand
 */
export const de_CreateCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCacheParameterGroupResult(data.CreateCacheParameterGroupResult, context);
  const response: CreateCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateCacheSecurityGroupCommand
 */
export const de_CreateCacheSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCacheSecurityGroupResult(data.CreateCacheSecurityGroupResult, context);
  const response: CreateCacheSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateCacheSubnetGroupCommand
 */
export const de_CreateCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCacheSubnetGroupResult(data.CreateCacheSubnetGroupResult, context);
  const response: CreateCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateGlobalReplicationGroupCommand
 */
export const de_CreateGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGlobalReplicationGroupResult(data.CreateGlobalReplicationGroupResult, context);
  const response: CreateGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateReplicationGroupCommand
 */
export const de_CreateReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReplicationGroupResult(data.CreateReplicationGroupResult, context);
  const response: CreateReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateServerlessCacheCommand
 */
export const de_CreateServerlessCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerlessCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServerlessCacheResponse(data.CreateServerlessCacheResult, context);
  const response: CreateServerlessCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateServerlessCacheSnapshotCommand
 */
export const de_CreateServerlessCacheSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerlessCacheSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServerlessCacheSnapshotResponse(data.CreateServerlessCacheSnapshotResult, context);
  const response: CreateServerlessCacheSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotResult(data.CreateSnapshotResult, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_User(data.CreateUserResult, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateUserGroupCommand
 */
export const de_CreateUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UserGroup(data.CreateUserGroupResult, context);
  const response: CreateUserGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand
 */
export const de_DecreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DecreaseNodeGroupsInGlobalReplicationGroupResult(
    data.DecreaseNodeGroupsInGlobalReplicationGroupResult,
    context
  );
  const response: DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDecreaseReplicaCountCommand
 */
export const de_DecreaseReplicaCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicaCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DecreaseReplicaCountResult(data.DecreaseReplicaCountResult, context);
  const response: DecreaseReplicaCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCacheClusterCommand
 */
export const de_DeleteCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCacheClusterResult(data.DeleteCacheClusterResult, context);
  const response: DeleteCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCacheParameterGroupCommand
 */
export const de_DeleteCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCacheSecurityGroupCommand
 */
export const de_DeleteCacheSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCacheSubnetGroupCommand
 */
export const de_DeleteCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteGlobalReplicationGroupCommand
 */
export const de_DeleteGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGlobalReplicationGroupResult(data.DeleteGlobalReplicationGroupResult, context);
  const response: DeleteGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteReplicationGroupCommand
 */
export const de_DeleteReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReplicationGroupResult(data.DeleteReplicationGroupResult, context);
  const response: DeleteReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteServerlessCacheCommand
 */
export const de_DeleteServerlessCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerlessCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServerlessCacheResponse(data.DeleteServerlessCacheResult, context);
  const response: DeleteServerlessCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteServerlessCacheSnapshotCommand
 */
export const de_DeleteServerlessCacheSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerlessCacheSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServerlessCacheSnapshotResponse(data.DeleteServerlessCacheSnapshotResult, context);
  const response: DeleteServerlessCacheSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSnapshotCommand
 */
export const de_DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSnapshotResult(data.DeleteSnapshotResult, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_User(data.DeleteUserResult, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserGroupCommand
 */
export const de_DeleteUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UserGroup(data.DeleteUserGroupResult, context);
  const response: DeleteUserGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeCacheClustersCommand
 */
export const de_DescribeCacheClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheClusterMessage(data.DescribeCacheClustersResult, context);
  const response: DescribeCacheClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeCacheEngineVersionsCommand
 */
export const de_DescribeCacheEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheEngineVersionMessage(data.DescribeCacheEngineVersionsResult, context);
  const response: DescribeCacheEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeCacheParameterGroupsCommand
 */
export const de_DescribeCacheParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheParameterGroupsMessage(data.DescribeCacheParameterGroupsResult, context);
  const response: DescribeCacheParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeCacheParametersCommand
 */
export const de_DescribeCacheParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheParameterGroupDetails(data.DescribeCacheParametersResult, context);
  const response: DescribeCacheParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeCacheSecurityGroupsCommand
 */
export const de_DescribeCacheSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheSecurityGroupMessage(data.DescribeCacheSecurityGroupsResult, context);
  const response: DescribeCacheSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeCacheSubnetGroupsCommand
 */
export const de_DescribeCacheSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheSubnetGroupMessage(data.DescribeCacheSubnetGroupsResult, context);
  const response: DescribeCacheSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEngineDefaultParametersCommand
 */
export const de_DescribeEngineDefaultParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEngineDefaultParametersResult(data.DescribeEngineDefaultParametersResult, context);
  const response: DescribeEngineDefaultParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EventsMessage(data.DescribeEventsResult, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeGlobalReplicationGroupsCommand
 */
export const de_DescribeGlobalReplicationGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalReplicationGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGlobalReplicationGroupsResult(data.DescribeGlobalReplicationGroupsResult, context);
  const response: DescribeGlobalReplicationGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReplicationGroupsCommand
 */
export const de_DescribeReplicationGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReplicationGroupMessage(data.DescribeReplicationGroupsResult, context);
  const response: DescribeReplicationGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReservedCacheNodesCommand
 */
export const de_DescribeReservedCacheNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReservedCacheNodeMessage(data.DescribeReservedCacheNodesResult, context);
  const response: DescribeReservedCacheNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand
 */
export const de_DescribeReservedCacheNodesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReservedCacheNodesOfferingMessage(data.DescribeReservedCacheNodesOfferingsResult, context);
  const response: DescribeReservedCacheNodesOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeServerlessCachesCommand
 */
export const de_DescribeServerlessCachesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerlessCachesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServerlessCachesResponse(data.DescribeServerlessCachesResult, context);
  const response: DescribeServerlessCachesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeServerlessCacheSnapshotsCommand
 */
export const de_DescribeServerlessCacheSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerlessCacheSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServerlessCacheSnapshotsResponse(data.DescribeServerlessCacheSnapshotsResult, context);
  const response: DescribeServerlessCacheSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeServiceUpdatesCommand
 */
export const de_DescribeServiceUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ServiceUpdatesMessage(data.DescribeServiceUpdatesResult, context);
  const response: DescribeServiceUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSnapshotsCommand
 */
export const de_DescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSnapshotsListMessage(data.DescribeSnapshotsResult, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeUpdateActionsCommand
 */
export const de_DescribeUpdateActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateActionsMessage(data.DescribeUpdateActionsResult, context);
  const response: DescribeUpdateActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeUserGroupsCommand
 */
export const de_DescribeUserGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserGroupsResult(data.DescribeUserGroupsResult, context);
  const response: DescribeUserGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeUsersCommand
 */
export const de_DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUsersResult(data.DescribeUsersResult, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisassociateGlobalReplicationGroupCommand
 */
export const de_DisassociateGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateGlobalReplicationGroupResult(data.DisassociateGlobalReplicationGroupResult, context);
  const response: DisassociateGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryExportServerlessCacheSnapshotCommand
 */
export const de_ExportServerlessCacheSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportServerlessCacheSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportServerlessCacheSnapshotResponse(data.ExportServerlessCacheSnapshotResult, context);
  const response: ExportServerlessCacheSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryFailoverGlobalReplicationGroupCommand
 */
export const de_FailoverGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FailoverGlobalReplicationGroupResult(data.FailoverGlobalReplicationGroupResult, context);
  const response: FailoverGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand
 */
export const de_IncreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IncreaseNodeGroupsInGlobalReplicationGroupResult(
    data.IncreaseNodeGroupsInGlobalReplicationGroupResult,
    context
  );
  const response: IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryIncreaseReplicaCountCommand
 */
export const de_IncreaseReplicaCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicaCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IncreaseReplicaCountResult(data.IncreaseReplicaCountResult, context);
  const response: IncreaseReplicaCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListAllowedNodeTypeModificationsCommand
 */
export const de_ListAllowedNodeTypeModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AllowedNodeTypeModificationsMessage(data.ListAllowedNodeTypeModificationsResult, context);
  const response: ListAllowedNodeTypeModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTagsForResourceCommand
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
  contents = de_TagListMessage(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCacheClusterCommand
 */
export const de_ModifyCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyCacheClusterResult(data.ModifyCacheClusterResult, context);
  const response: ModifyCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCacheParameterGroupCommand
 */
export const de_ModifyCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheParameterGroupNameMessage(data.ModifyCacheParameterGroupResult, context);
  const response: ModifyCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCacheSubnetGroupCommand
 */
export const de_ModifyCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyCacheSubnetGroupResult(data.ModifyCacheSubnetGroupResult, context);
  const response: ModifyCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyGlobalReplicationGroupCommand
 */
export const de_ModifyGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyGlobalReplicationGroupResult(data.ModifyGlobalReplicationGroupResult, context);
  const response: ModifyGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyReplicationGroupCommand
 */
export const de_ModifyReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyReplicationGroupResult(data.ModifyReplicationGroupResult, context);
  const response: ModifyReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyReplicationGroupShardConfigurationCommand
 */
export const de_ModifyReplicationGroupShardConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyReplicationGroupShardConfigurationResult(
    data.ModifyReplicationGroupShardConfigurationResult,
    context
  );
  const response: ModifyReplicationGroupShardConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyServerlessCacheCommand
 */
export const de_ModifyServerlessCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyServerlessCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyServerlessCacheResponse(data.ModifyServerlessCacheResult, context);
  const response: ModifyServerlessCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyUserCommand
 */
export const de_ModifyUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_User(data.ModifyUserResult, context);
  const response: ModifyUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyUserGroupCommand
 */
export const de_ModifyUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UserGroup(data.ModifyUserGroupResult, context);
  const response: ModifyUserGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand
 */
export const de_PurchaseReservedCacheNodesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PurchaseReservedCacheNodesOfferingResult(data.PurchaseReservedCacheNodesOfferingResult, context);
  const response: PurchaseReservedCacheNodesOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand
 */
export const de_RebalanceSlotsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebalanceSlotsInGlobalReplicationGroupResult(
    data.RebalanceSlotsInGlobalReplicationGroupResult,
    context
  );
  const response: RebalanceSlotsInGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRebootCacheClusterCommand
 */
export const de_RebootCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootCacheClusterResult(data.RebootCacheClusterResult, context);
  const response: RebootCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagListMessage(data.RemoveTagsFromResourceResult, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryResetCacheParameterGroupCommand
 */
export const de_ResetCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CacheParameterGroupNameMessage(data.ResetCacheParameterGroupResult, context);
  const response: ResetCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRevokeCacheSecurityGroupIngressCommand
 */
export const de_RevokeCacheSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCacheSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RevokeCacheSecurityGroupIngressResult(data.RevokeCacheSecurityGroupIngressResult, context);
  const response: RevokeCacheSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStartMigrationCommand
 */
export const de_StartMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMigrationResponse(data.StartMigrationResult, context);
  const response: StartMigrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTestFailoverCommand
 */
export const de_TestFailoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFailoverCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestFailoverResult(data.TestFailoverResult, context);
  const response: TestFailoverCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTestMigrationCommand
 */
export const de_TestMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestMigrationResponse(data.TestMigrationResult, context);
  const response: TestMigrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFound":
    case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
      throw await de_CacheClusterNotFoundFaultRes(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await de_CacheParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await de_CacheSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await de_CacheSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidARN":
    case "com.amazonaws.elasticache#InvalidARNFault":
      throw await de_InvalidARNFaultRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidServerlessCacheSnapshotStateFault":
    case "com.amazonaws.elasticache#InvalidServerlessCacheSnapshotStateFault":
      throw await de_InvalidServerlessCacheSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidServerlessCacheStateFault":
    case "com.amazonaws.elasticache#InvalidServerlessCacheStateFault":
      throw await de_InvalidServerlessCacheStateFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await de_ReservedCacheNodeNotFoundFaultRes(parsedOutput, context);
    case "ServerlessCacheNotFoundFault":
    case "com.amazonaws.elasticache#ServerlessCacheNotFoundFault":
      throw await de_ServerlessCacheNotFoundFaultRes(parsedOutput, context);
    case "ServerlessCacheSnapshotNotFoundFault":
    case "com.amazonaws.elasticache#ServerlessCacheSnapshotNotFoundFault":
      throw await de_ServerlessCacheSnapshotNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    case "AuthorizationAlreadyExists":
    case "com.amazonaws.elasticache#AuthorizationAlreadyExistsFault":
      throw await de_AuthorizationAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await de_InvalidCacheSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
      throw await de_ServiceUpdateNotFoundFaultRes(parsedOutput, context);
    case "ReplicationGroupNotUnderMigrationFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotUnderMigrationFault":
      throw await de_ReplicationGroupNotUnderMigrationFaultRes(parsedOutput, context);
    case "ServerlessCacheSnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#ServerlessCacheSnapshotAlreadyExistsFault":
      throw await de_ServerlessCacheSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "ServerlessCacheSnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#ServerlessCacheSnapshotQuotaExceededFault":
      throw await de_ServerlessCacheSnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "InvalidSnapshotState":
    case "com.amazonaws.elasticache#InvalidSnapshotStateFault":
      throw await de_InvalidSnapshotStateFaultRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "CacheClusterAlreadyExists":
    case "com.amazonaws.elasticache#CacheClusterAlreadyExistsFault":
      throw await de_CacheClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "CacheParameterGroupAlreadyExists":
    case "com.amazonaws.elasticache#CacheParameterGroupAlreadyExistsFault":
      throw await de_CacheParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "CacheParameterGroupQuotaExceeded":
    case "com.amazonaws.elasticache#CacheParameterGroupQuotaExceededFault":
      throw await de_CacheParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await de_InvalidCacheParameterGroupStateFaultRes(parsedOutput, context);
    case "CacheSecurityGroupAlreadyExists":
    case "com.amazonaws.elasticache#CacheSecurityGroupAlreadyExistsFault":
      throw await de_CacheSecurityGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "QuotaExceeded.CacheSecurityGroup":
    case "com.amazonaws.elasticache#CacheSecurityGroupQuotaExceededFault":
      throw await de_CacheSecurityGroupQuotaExceededFaultRes(parsedOutput, context);
    case "CacheSubnetGroupAlreadyExists":
    case "com.amazonaws.elasticache#CacheSubnetGroupAlreadyExistsFault":
      throw await de_CacheSubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "CacheSubnetGroupQuotaExceeded":
    case "com.amazonaws.elasticache#CacheSubnetGroupQuotaExceededFault":
      throw await de_CacheSubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "CacheSubnetQuotaExceededFault":
    case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault":
      throw await de_CacheSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticache#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.elasticache#SubnetNotAllowedFault":
      throw await de_SubnetNotAllowedFaultRes(parsedOutput, context);
    case "GlobalReplicationGroupAlreadyExistsFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupAlreadyExistsFault":
      throw await de_GlobalReplicationGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await de_InvalidUserGroupStateFaultRes(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await de_NodeGroupsPerReplicationGroupQuotaExceededFaultRes(parsedOutput, context);
    case "ReplicationGroupAlreadyExists":
    case "com.amazonaws.elasticache#ReplicationGroupAlreadyExistsFault":
      throw await de_ReplicationGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.elasticache#InvalidCredentialsException":
      throw await de_InvalidCredentialsExceptionRes(parsedOutput, context);
    case "ServerlessCacheAlreadyExistsFault":
    case "com.amazonaws.elasticache#ServerlessCacheAlreadyExistsFault":
      throw await de_ServerlessCacheAlreadyExistsFaultRes(parsedOutput, context);
    case "ServerlessCacheQuotaForCustomerExceededFault":
    case "com.amazonaws.elasticache#ServerlessCacheQuotaForCustomerExceededFault":
      throw await de_ServerlessCacheQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "SnapshotFeatureNotSupportedFault":
    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
      throw await de_SnapshotFeatureNotSupportedFaultRes(parsedOutput, context);
    case "DuplicateUserName":
    case "com.amazonaws.elasticache#DuplicateUserNameFault":
      throw await de_DuplicateUserNameFaultRes(parsedOutput, context);
    case "UserAlreadyExists":
    case "com.amazonaws.elasticache#UserAlreadyExistsFault":
      throw await de_UserAlreadyExistsFaultRes(parsedOutput, context);
    case "UserQuotaExceeded":
    case "com.amazonaws.elasticache#UserQuotaExceededFault":
      throw await de_UserQuotaExceededFaultRes(parsedOutput, context);
    case "DefaultUserRequired":
    case "com.amazonaws.elasticache#DefaultUserRequired":
      throw await de_DefaultUserRequiredRes(parsedOutput, context);
    case "UserGroupAlreadyExists":
    case "com.amazonaws.elasticache#UserGroupAlreadyExistsFault":
      throw await de_UserGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "UserGroupQuotaExceeded":
    case "com.amazonaws.elasticache#UserGroupQuotaExceededFault":
      throw await de_UserGroupQuotaExceededFaultRes(parsedOutput, context);
    case "NoOperationFault":
    case "com.amazonaws.elasticache#NoOperationFault":
      throw await de_NoOperationFaultRes(parsedOutput, context);
    case "CacheSubnetGroupInUse":
    case "com.amazonaws.elasticache#CacheSubnetGroupInUse":
      throw await de_CacheSubnetGroupInUseRes(parsedOutput, context);
    case "DefaultUserAssociatedToUserGroup":
    case "com.amazonaws.elasticache#DefaultUserAssociatedToUserGroupFault":
      throw await de_DefaultUserAssociatedToUserGroupFaultRes(parsedOutput, context);
    case "InvalidUserState":
    case "com.amazonaws.elasticache#InvalidUserStateFault":
      throw await de_InvalidUserStateFaultRes(parsedOutput, context);
    case "ReservedCacheNodesOfferingNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault":
      throw await de_ReservedCacheNodesOfferingNotFoundFaultRes(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await de_InvalidKMSKeyFaultRes(parsedOutput, context);
    case "SubnetInUse":
    case "com.amazonaws.elasticache#SubnetInUse":
      throw await de_SubnetInUseRes(parsedOutput, context);
    case "ReservedCacheNodeAlreadyExists":
    case "com.amazonaws.elasticache#ReservedCacheNodeAlreadyExistsFault":
      throw await de_ReservedCacheNodeAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedCacheNodeQuotaExceeded":
    case "com.amazonaws.elasticache#ReservedCacheNodeQuotaExceededFault":
      throw await de_ReservedCacheNodeQuotaExceededFaultRes(parsedOutput, context);
    case "TagNotFound":
    case "com.amazonaws.elasticache#TagNotFoundFault":
      throw await de_TagNotFoundFaultRes(parsedOutput, context);
    case "AuthorizationNotFound":
    case "com.amazonaws.elasticache#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "ReplicationGroupAlreadyUnderMigrationFault":
    case "com.amazonaws.elasticache#ReplicationGroupAlreadyUnderMigrationFault":
      throw await de_ReplicationGroupAlreadyUnderMigrationFaultRes(parsedOutput, context);
    case "APICallRateForCustomerExceeded":
    case "com.amazonaws.elasticache#APICallRateForCustomerExceededFault":
      throw await de_APICallRateForCustomerExceededFaultRes(parsedOutput, context);
    case "NodeGroupNotFoundFault":
    case "com.amazonaws.elasticache#NodeGroupNotFoundFault":
      throw await de_NodeGroupNotFoundFaultRes(parsedOutput, context);
    case "TestFailoverNotAvailableFault":
    case "com.amazonaws.elasticache#TestFailoverNotAvailableFault":
      throw await de_TestFailoverNotAvailableFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_queryAPICallRateForCustomerExceededFaultRes
 */
const de_APICallRateForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<APICallRateForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_APICallRateForCustomerExceededFault(body.Error, context);
  const exception = new APICallRateForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthorizationAlreadyExistsFaultRes
 */
const de_AuthorizationAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationAlreadyExistsFault(body.Error, context);
  const exception = new AuthorizationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthorizationNotFoundFaultRes
 */
const de_AuthorizationNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationNotFoundFault(body.Error, context);
  const exception = new AuthorizationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheClusterAlreadyExistsFaultRes
 */
const de_CacheClusterAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheClusterAlreadyExistsFault(body.Error, context);
  const exception = new CacheClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheClusterNotFoundFaultRes
 */
const de_CacheClusterNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheClusterNotFoundFault(body.Error, context);
  const exception = new CacheClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheParameterGroupAlreadyExistsFaultRes
 */
const de_CacheParameterGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheParameterGroupAlreadyExistsFault(body.Error, context);
  const exception = new CacheParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheParameterGroupNotFoundFaultRes
 */
const de_CacheParameterGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheParameterGroupNotFoundFault(body.Error, context);
  const exception = new CacheParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheParameterGroupQuotaExceededFaultRes
 */
const de_CacheParameterGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheParameterGroupQuotaExceededFault(body.Error, context);
  const exception = new CacheParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultRes
 */
const de_CacheSecurityGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSecurityGroupAlreadyExistsFault(body.Error, context);
  const exception = new CacheSecurityGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSecurityGroupNotFoundFaultRes
 */
const de_CacheSecurityGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSecurityGroupNotFoundFault(body.Error, context);
  const exception = new CacheSecurityGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSecurityGroupQuotaExceededFaultRes
 */
const de_CacheSecurityGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSecurityGroupQuotaExceededFault(body.Error, context);
  const exception = new CacheSecurityGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultRes
 */
const de_CacheSubnetGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSubnetGroupAlreadyExistsFault(body.Error, context);
  const exception = new CacheSubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSubnetGroupInUseRes
 */
const de_CacheSubnetGroupInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSubnetGroupInUse(body.Error, context);
  const exception = new CacheSubnetGroupInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSubnetGroupNotFoundFaultRes
 */
const de_CacheSubnetGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSubnetGroupNotFoundFault(body.Error, context);
  const exception = new CacheSubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSubnetGroupQuotaExceededFaultRes
 */
const de_CacheSubnetGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSubnetGroupQuotaExceededFault(body.Error, context);
  const exception = new CacheSubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCacheSubnetQuotaExceededFaultRes
 */
const de_CacheSubnetQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CacheSubnetQuotaExceededFault(body.Error, context);
  const exception = new CacheSubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterQuotaForCustomerExceededFaultRes
 */
const de_ClusterQuotaForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterQuotaForCustomerExceededFault(body.Error, context);
  const exception = new ClusterQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDefaultUserAssociatedToUserGroupFaultRes
 */
const de_DefaultUserAssociatedToUserGroupFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUserAssociatedToUserGroupFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DefaultUserAssociatedToUserGroupFault(body.Error, context);
  const exception = new DefaultUserAssociatedToUserGroupFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDefaultUserRequiredRes
 */
const de_DefaultUserRequiredRes = async (parsedOutput: any, context: __SerdeContext): Promise<DefaultUserRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DefaultUserRequired(body.Error, context);
  const exception = new DefaultUserRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateUserNameFaultRes
 */
const de_DuplicateUserNameFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateUserNameFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateUserNameFault(body.Error, context);
  const exception = new DuplicateUserNameFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryGlobalReplicationGroupAlreadyExistsFaultRes
 */
const de_GlobalReplicationGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalReplicationGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GlobalReplicationGroupAlreadyExistsFault(body.Error, context);
  const exception = new GlobalReplicationGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryGlobalReplicationGroupNotFoundFaultRes
 */
const de_GlobalReplicationGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalReplicationGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GlobalReplicationGroupNotFoundFault(body.Error, context);
  const exception = new GlobalReplicationGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientCacheClusterCapacityFaultRes
 */
const de_InsufficientCacheClusterCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCacheClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientCacheClusterCapacityFault(body.Error, context);
  const exception = new InsufficientCacheClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidARNFaultRes
 */
const de_InvalidARNFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidARNFault(body.Error, context);
  const exception = new InvalidARNFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCacheClusterStateFaultRes
 */
const de_InvalidCacheClusterStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCacheClusterStateFault(body.Error, context);
  const exception = new InvalidCacheClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCacheParameterGroupStateFaultRes
 */
const de_InvalidCacheParameterGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCacheParameterGroupStateFault(body.Error, context);
  const exception = new InvalidCacheParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCacheSecurityGroupStateFaultRes
 */
const de_InvalidCacheSecurityGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCacheSecurityGroupStateFault(body.Error, context);
  const exception = new InvalidCacheSecurityGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCredentialsExceptionRes
 */
const de_InvalidCredentialsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCredentialsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCredentialsException(body.Error, context);
  const exception = new InvalidCredentialsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidGlobalReplicationGroupStateFaultRes
 */
const de_InvalidGlobalReplicationGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGlobalReplicationGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGlobalReplicationGroupStateFault(body.Error, context);
  const exception = new InvalidGlobalReplicationGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidKMSKeyFaultRes
 */
const de_InvalidKMSKeyFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidKMSKeyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidKMSKeyFault(body.Error, context);
  const exception = new InvalidKMSKeyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterCombinationException(body.Error, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body.Error, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidReplicationGroupStateFaultRes
 */
const de_InvalidReplicationGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplicationGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidReplicationGroupStateFault(body.Error, context);
  const exception = new InvalidReplicationGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidServerlessCacheSnapshotStateFaultRes
 */
const de_InvalidServerlessCacheSnapshotStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidServerlessCacheSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidServerlessCacheSnapshotStateFault(body.Error, context);
  const exception = new InvalidServerlessCacheSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidServerlessCacheStateFaultRes
 */
const de_InvalidServerlessCacheStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidServerlessCacheStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidServerlessCacheStateFault(body.Error, context);
  const exception = new InvalidServerlessCacheStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSnapshotStateFaultRes
 */
const de_InvalidSnapshotStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSnapshotStateFault(body.Error, context);
  const exception = new InvalidSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSubnetRes
 */
const de_InvalidSubnetRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSubnet(body.Error, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidUserGroupStateFaultRes
 */
const de_InvalidUserGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUserGroupStateFault(body.Error, context);
  const exception = new InvalidUserGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidUserStateFaultRes
 */
const de_InvalidUserStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUserStateFault(body.Error, context);
  const exception = new InvalidUserStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidVPCNetworkStateFaultRes
 */
const de_InvalidVPCNetworkStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidVPCNetworkStateFault(body.Error, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNodeGroupNotFoundFaultRes
 */
const de_NodeGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeGroupNotFoundFault(body.Error, context);
  const exception = new NodeGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultRes
 */
const de_NodeGroupsPerReplicationGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeGroupsPerReplicationGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeGroupsPerReplicationGroupQuotaExceededFault(body.Error, context);
  const exception = new NodeGroupsPerReplicationGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNodeQuotaForClusterExceededFaultRes
 */
const de_NodeQuotaForClusterExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeQuotaForClusterExceededFault(body.Error, context);
  const exception = new NodeQuotaForClusterExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNodeQuotaForCustomerExceededFaultRes
 */
const de_NodeQuotaForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeQuotaForCustomerExceededFault(body.Error, context);
  const exception = new NodeQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNoOperationFaultRes
 */
const de_NoOperationFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoOperationFault(body.Error, context);
  const exception = new NoOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReplicationGroupAlreadyExistsFaultRes
 */
const de_ReplicationGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicationGroupAlreadyExistsFault(body.Error, context);
  const exception = new ReplicationGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultRes
 */
const de_ReplicationGroupAlreadyUnderMigrationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupAlreadyUnderMigrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicationGroupAlreadyUnderMigrationFault(body.Error, context);
  const exception = new ReplicationGroupAlreadyUnderMigrationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReplicationGroupNotFoundFaultRes
 */
const de_ReplicationGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicationGroupNotFoundFault(body.Error, context);
  const exception = new ReplicationGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReplicationGroupNotUnderMigrationFaultRes
 */
const de_ReplicationGroupNotUnderMigrationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupNotUnderMigrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicationGroupNotUnderMigrationFault(body.Error, context);
  const exception = new ReplicationGroupNotUnderMigrationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedCacheNodeAlreadyExistsFaultRes
 */
const de_ReservedCacheNodeAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedCacheNodeAlreadyExistsFault(body.Error, context);
  const exception = new ReservedCacheNodeAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedCacheNodeNotFoundFaultRes
 */
const de_ReservedCacheNodeNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedCacheNodeNotFoundFault(body.Error, context);
  const exception = new ReservedCacheNodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedCacheNodeQuotaExceededFaultRes
 */
const de_ReservedCacheNodeQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedCacheNodeQuotaExceededFault(body.Error, context);
  const exception = new ReservedCacheNodeQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultRes
 */
const de_ReservedCacheNodesOfferingNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodesOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedCacheNodesOfferingNotFoundFault(body.Error, context);
  const exception = new ReservedCacheNodesOfferingNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServerlessCacheAlreadyExistsFaultRes
 */
const de_ServerlessCacheAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerlessCacheAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerlessCacheAlreadyExistsFault(body.Error, context);
  const exception = new ServerlessCacheAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServerlessCacheNotFoundFaultRes
 */
const de_ServerlessCacheNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerlessCacheNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerlessCacheNotFoundFault(body.Error, context);
  const exception = new ServerlessCacheNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServerlessCacheQuotaForCustomerExceededFaultRes
 */
const de_ServerlessCacheQuotaForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerlessCacheQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerlessCacheQuotaForCustomerExceededFault(body.Error, context);
  const exception = new ServerlessCacheQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServerlessCacheSnapshotAlreadyExistsFaultRes
 */
const de_ServerlessCacheSnapshotAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerlessCacheSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerlessCacheSnapshotAlreadyExistsFault(body.Error, context);
  const exception = new ServerlessCacheSnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServerlessCacheSnapshotNotFoundFaultRes
 */
const de_ServerlessCacheSnapshotNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerlessCacheSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerlessCacheSnapshotNotFoundFault(body.Error, context);
  const exception = new ServerlessCacheSnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServerlessCacheSnapshotQuotaExceededFaultRes
 */
const de_ServerlessCacheSnapshotQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerlessCacheSnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerlessCacheSnapshotQuotaExceededFault(body.Error, context);
  const exception = new ServerlessCacheSnapshotQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServiceLinkedRoleNotFoundFaultRes
 */
const de_ServiceLinkedRoleNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceLinkedRoleNotFoundFault(body.Error, context);
  const exception = new ServiceLinkedRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServiceUpdateNotFoundFaultRes
 */
const de_ServiceUpdateNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUpdateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUpdateNotFoundFault(body.Error, context);
  const exception = new ServiceUpdateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotAlreadyExistsFaultRes
 */
const de_SnapshotAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotAlreadyExistsFault(body.Error, context);
  const exception = new SnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotFeatureNotSupportedFaultRes
 */
const de_SnapshotFeatureNotSupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotFeatureNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotFeatureNotSupportedFault(body.Error, context);
  const exception = new SnapshotFeatureNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotNotFoundFaultRes
 */
const de_SnapshotNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotNotFoundFault(body.Error, context);
  const exception = new SnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotQuotaExceededFaultRes
 */
const de_SnapshotQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotQuotaExceededFault(body.Error, context);
  const exception = new SnapshotQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubnetInUseRes
 */
const de_SubnetInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetInUse(body.Error, context);
  const exception = new SubnetInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubnetNotAllowedFaultRes
 */
const de_SubnetNotAllowedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotAllowedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetNotAllowedFault(body.Error, context);
  const exception = new SubnetNotAllowedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTagNotFoundFaultRes
 */
const de_TagNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagNotFoundFault(body.Error, context);
  const exception = new TagNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTagQuotaPerResourceExceededRes
 */
const de_TagQuotaPerResourceExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagQuotaPerResourceExceeded(body.Error, context);
  const exception = new TagQuotaPerResourceExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTestFailoverNotAvailableFaultRes
 */
const de_TestFailoverNotAvailableFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TestFailoverNotAvailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TestFailoverNotAvailableFault(body.Error, context);
  const exception = new TestFailoverNotAvailableFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUserAlreadyExistsFaultRes
 */
const de_UserAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserAlreadyExistsFault(body.Error, context);
  const exception = new UserAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUserGroupAlreadyExistsFaultRes
 */
const de_UserGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserGroupAlreadyExistsFault(body.Error, context);
  const exception = new UserGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUserGroupNotFoundFaultRes
 */
const de_UserGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserGroupNotFoundFault(body.Error, context);
  const exception = new UserGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUserGroupQuotaExceededFaultRes
 */
const de_UserGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserGroupQuotaExceededFault(body.Error, context);
  const exception = new UserGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUserNotFoundFaultRes
 */
const de_UserNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<UserNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserNotFoundFault(body.Error, context);
  const exception = new UserNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUserQuotaExceededFaultRes
 */
const de_UserQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserQuotaExceededFault(body.Error, context);
  const exception = new UserQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAddTagsToResourceMessage
 */
const se_AddTagsToResourceMessage = (input: AddTagsToResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAuthenticationMode
 */
const se_AuthenticationMode = (input: AuthenticationMode, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ty] != null) {
    entries[_Ty] = input[_Ty];
  }
  if (input[_P] != null) {
    const memberEntries = se_PasswordListInput(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Passwords = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Passwords.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage
 */
const se_AuthorizeCacheSecurityGroupIngressMessage = (
  input: AuthorizeCacheSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_ECSGN] != null) {
    entries[_ECSGN] = input[_ECSGN];
  }
  if (input[_ECSGOI] != null) {
    entries[_ECSGOI] = input[_ECSGOI];
  }
  return entries;
};

/**
 * serializeAws_queryAvailabilityZonesList
 */
const se_AvailabilityZonesList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`AvailabilityZone.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryBatchApplyUpdateActionMessage
 */
const se_BatchApplyUpdateActionMessage = (input: BatchApplyUpdateActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGI] != null) {
    const memberEntries = se_ReplicationGroupIdList(input[_RGI], context);
    if (input[_RGI]?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CCI] != null) {
    const memberEntries = se_CacheClusterIdList(input[_CCI], context);
    if (input[_CCI]?.length === 0) {
      entries.CacheClusterIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SUN] != null) {
    entries[_SUN] = input[_SUN];
  }
  return entries;
};

/**
 * serializeAws_queryBatchStopUpdateActionMessage
 */
const se_BatchStopUpdateActionMessage = (input: BatchStopUpdateActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGI] != null) {
    const memberEntries = se_ReplicationGroupIdList(input[_RGI], context);
    if (input[_RGI]?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CCI] != null) {
    const memberEntries = se_CacheClusterIdList(input[_CCI], context);
    if (input[_CCI]?.length === 0) {
      entries.CacheClusterIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SUN] != null) {
    entries[_SUN] = input[_SUN];
  }
  return entries;
};

/**
 * serializeAws_queryCacheClusterIdList
 */
const se_CacheClusterIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCacheNodeIdsList
 */
const se_CacheNodeIdsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`CacheNodeId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCacheSecurityGroupNameList
 */
const se_CacheSecurityGroupNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`CacheSecurityGroupName.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCacheUsageLimits
 */
const se_CacheUsageLimits = (input: CacheUsageLimits, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DSa] != null) {
    const memberEntries = se_DataStorage(input[_DSa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DataStorage.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ECPUPS] != null) {
    const memberEntries = se_ECPUPerSecond(input[_ECPUPS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ECPUPerSecond.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCloudWatchLogsDestinationDetails
 */
const se_CloudWatchLogsDestinationDetails = (input: CloudWatchLogsDestinationDetails, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LG] != null) {
    entries[_LG] = input[_LG];
  }
  return entries;
};

/**
 * serializeAws_queryCompleteMigrationMessage
 */
const se_CompleteMigrationMessage = (input: CompleteMigrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_F] != null) {
    entries[_F] = input[_F];
  }
  return entries;
};

/**
 * serializeAws_queryConfigureShard
 */
const se_ConfigureShard = (input: ConfigureShard, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NGI] != null) {
    entries[_NGI] = input[_NGI];
  }
  if (input[_NRC] != null) {
    entries[_NRC] = input[_NRC];
  }
  if (input[_PAZ] != null) {
    const memberEntries = se_PreferredAvailabilityZoneList(input[_PAZ], context);
    if (input[_PAZ]?.length === 0) {
      entries.PreferredAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_POA] != null) {
    const memberEntries = se_PreferredOutpostArnList(input[_POA], context);
    if (input[_POA]?.length === 0) {
      entries.PreferredOutpostArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredOutpostArns.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCopyServerlessCacheSnapshotRequest
 */
const se_CopyServerlessCacheSnapshotRequest = (
  input: CopyServerlessCacheSnapshotRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SSCSN] != null) {
    entries[_SSCSN] = input[_SSCSN];
  }
  if (input[_TSCSN] != null) {
    entries[_TSCSN] = input[_TSCSN];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCopySnapshotMessage
 */
const se_CopySnapshotMessage = (input: CopySnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_TSN] != null) {
    entries[_TSN] = input[_TSN];
  }
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateCacheClusterMessage
 */
const se_CreateCacheClusterMessage = (input: CreateCacheClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_AZM] != null) {
    entries[_AZM] = input[_AZM];
  }
  if (input[_PAZr] != null) {
    entries[_PAZr] = input[_PAZr];
  }
  if (input[_PAZ] != null) {
    const memberEntries = se_PreferredAvailabilityZoneList(input[_PAZ], context);
    if (input[_PAZ]?.length === 0) {
      entries.PreferredAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NCN] != null) {
    entries[_NCN] = input[_NCN];
  }
  if (input[_CNT] != null) {
    entries[_CNT] = input[_CNT];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_CSGNa] != null) {
    entries[_CSGNa] = input[_CSGNa];
  }
  if (input[_CSGNac] != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input[_CSGNac], context);
    if (input[_CSGNac]?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SGI] != null) {
    const memberEntries = se_SecurityGroupIdsList(input[_SGI], context);
    if (input[_SGI]?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SA] != null) {
    const memberEntries = se_SnapshotArnsList(input[_SA], context);
    if (input[_SA]?.length === 0) {
      entries.SnapshotArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SnapshotArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  if (input[_NTA] != null) {
    entries[_NTA] = input[_NTA];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_SRL] != null) {
    entries[_SRL] = input[_SRL];
  }
  if (input[_SW] != null) {
    entries[_SW] = input[_SW];
  }
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_OM] != null) {
    entries[_OM] = input[_OM];
  }
  if (input[_POAr] != null) {
    entries[_POAr] = input[_POAr];
  }
  if (input[_POA] != null) {
    const memberEntries = se_PreferredOutpostArnList(input[_POA], context);
    if (input[_POA]?.length === 0) {
      entries.PreferredOutpostArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredOutpostArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LDC] != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input[_LDC], context);
    if (input[_LDC]?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TEE] != null) {
    entries[_TEE] = input[_TEE];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_ID] != null) {
    entries[_ID] = input[_ID];
  }
  return entries;
};

/**
 * serializeAws_queryCreateCacheParameterGroupMessage
 */
const se_CreateCacheParameterGroupMessage = (input: CreateCacheParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_CPGF] != null) {
    entries[_CPGF] = input[_CPGF];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateCacheSecurityGroupMessage
 */
const se_CreateCacheSecurityGroupMessage = (input: CreateCacheSecurityGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateCacheSubnetGroupMessage
 */
const se_CreateCacheSubnetGroupMessage = (input: CreateCacheSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSGNa] != null) {
    entries[_CSGNa] = input[_CSGNa];
  }
  if (input[_CSGD] != null) {
    entries[_CSGD] = input[_CSGD];
  }
  if (input[_SI] != null) {
    const memberEntries = se_SubnetIdentifierList(input[_SI], context);
    if (input[_SI]?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateGlobalReplicationGroupMessage
 */
const se_CreateGlobalReplicationGroupMessage = (
  input: CreateGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGIS] != null) {
    entries[_GRGIS] = input[_GRGIS];
  }
  if (input[_GRGD] != null) {
    entries[_GRGD] = input[_GRGD];
  }
  if (input[_PRGI] != null) {
    entries[_PRGI] = input[_PRGI];
  }
  return entries;
};

/**
 * serializeAws_queryCreateReplicationGroupMessage
 */
const se_CreateReplicationGroupMessage = (input: CreateReplicationGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_RGD] != null) {
    entries[_RGD] = input[_RGD];
  }
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_PCI] != null) {
    entries[_PCI] = input[_PCI];
  }
  if (input[_AFE] != null) {
    entries[_AFE] = input[_AFE];
  }
  if (input[_MAZE] != null) {
    entries[_MAZE] = input[_MAZE];
  }
  if (input[_NCC] != null) {
    entries[_NCC] = input[_NCC];
  }
  if (input[_PCCAZ] != null) {
    const memberEntries = se_AvailabilityZonesList(input[_PCCAZ], context);
    if (input[_PCCAZ]?.length === 0) {
      entries.PreferredCacheClusterAZs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredCacheClusterAZs.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NNG] != null) {
    entries[_NNG] = input[_NNG];
  }
  if (input[_RPNG] != null) {
    entries[_RPNG] = input[_RPNG];
  }
  if (input[_NGC] != null) {
    const memberEntries = se_NodeGroupConfigurationList(input[_NGC], context);
    if (input[_NGC]?.length === 0) {
      entries.NodeGroupConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NodeGroupConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CNT] != null) {
    entries[_CNT] = input[_CNT];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_CSGNa] != null) {
    entries[_CSGNa] = input[_CSGNa];
  }
  if (input[_CSGNac] != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input[_CSGNac], context);
    if (input[_CSGNac]?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SGI] != null) {
    const memberEntries = se_SecurityGroupIdsList(input[_SGI], context);
    if (input[_SGI]?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SA] != null) {
    const memberEntries = se_SnapshotArnsList(input[_SA], context);
    if (input[_SA]?.length === 0) {
      entries.SnapshotArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SnapshotArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  if (input[_NTA] != null) {
    entries[_NTA] = input[_NTA];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_SRL] != null) {
    entries[_SRL] = input[_SRL];
  }
  if (input[_SW] != null) {
    entries[_SW] = input[_SW];
  }
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_TEE] != null) {
    entries[_TEE] = input[_TEE];
  }
  if (input[_AREE] != null) {
    entries[_AREE] = input[_AREE];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_UGI] != null) {
    const memberEntries = se_UserGroupIdListInput(input[_UGI], context);
    if (input[_UGI]?.length === 0) {
      entries.UserGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LDC] != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input[_LDC], context);
    if (input[_LDC]?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DTE] != null) {
    entries[_DTE] = input[_DTE];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_ID] != null) {
    entries[_ID] = input[_ID];
  }
  if (input[_TEM] != null) {
    entries[_TEM] = input[_TEM];
  }
  if (input[_CMl] != null) {
    entries[_CMl] = input[_CMl];
  }
  if (input[_SCSN] != null) {
    entries[_SCSN] = input[_SCSN];
  }
  return entries;
};

/**
 * serializeAws_queryCreateServerlessCacheRequest
 */
const se_CreateServerlessCacheRequest = (input: CreateServerlessCacheRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
  }
  if (input[_CUL] != null) {
    const memberEntries = se_CacheUsageLimits(input[_CUL], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheUsageLimits.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_SGI] != null) {
    const memberEntries = se_SecurityGroupIdsList(input[_SGI], context);
    if (input[_SGI]?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SATR] != null) {
    const memberEntries = se_SnapshotArnsList(input[_SATR], context);
    if (input[_SATR]?.length === 0) {
      entries.SnapshotArnsToRestore = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SnapshotArnsToRestore.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UGIs] != null) {
    entries[_UGIs] = input[_UGIs];
  }
  if (input[_SI] != null) {
    const memberEntries = se_SubnetIdsList(input[_SI], context);
    if (input[_SI]?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SRL] != null) {
    entries[_SRL] = input[_SRL];
  }
  if (input[_DST] != null) {
    entries[_DST] = input[_DST];
  }
  return entries;
};

/**
 * serializeAws_queryCreateServerlessCacheSnapshotRequest
 */
const se_CreateServerlessCacheSnapshotRequest = (
  input: CreateServerlessCacheSnapshotRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SCSN] != null) {
    entries[_SCSN] = input[_SCSN];
  }
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateSnapshotMessage
 */
const se_CreateSnapshotMessage = (input: CreateSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateUserGroupMessage
 */
const se_CreateUserGroupMessage = (input: CreateUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UGIs] != null) {
    entries[_UGIs] = input[_UGIs];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_UI] != null) {
    const memberEntries = se_UserIdListInput(input[_UI], context);
    if (input[_UI]?.length === 0) {
      entries.UserIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateUserMessage
 */
const se_CreateUserMessage = (input: CreateUserMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UIs] != null) {
    entries[_UIs] = input[_UIs];
  }
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_P] != null) {
    const memberEntries = se_PasswordListInput(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Passwords = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Passwords.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_NPR] != null) {
    entries[_NPR] = input[_NPR];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AM] != null) {
    const memberEntries = se_AuthenticationMode(input[_AM], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationMode.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCustomerNodeEndpoint
 */
const se_CustomerNodeEndpoint = (input: CustomerNodeEndpoint, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ad] != null) {
    entries[_Ad] = input[_Ad];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  return entries;
};

/**
 * serializeAws_queryCustomerNodeEndpointList
 */
const se_CustomerNodeEndpointList = (input: CustomerNodeEndpoint[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_CustomerNodeEndpoint(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDataStorage
 */
const se_DataStorage = (input: DataStorage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Mi] != null) {
    entries[_Mi] = input[_Mi];
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  return entries;
};

/**
 * serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage
 */
const se_DecreaseNodeGroupsInGlobalReplicationGroupMessage = (
  input: DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_NGCo] != null) {
    entries[_NGCo] = input[_NGCo];
  }
  if (input[_GNGTR] != null) {
    const memberEntries = se_GlobalNodeGroupIdList(input[_GNGTR], context);
    if (input[_GNGTR]?.length === 0) {
      entries.GlobalNodeGroupsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `GlobalNodeGroupsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_GNGTRl] != null) {
    const memberEntries = se_GlobalNodeGroupIdList(input[_GNGTRl], context);
    if (input[_GNGTRl]?.length === 0) {
      entries.GlobalNodeGroupsToRetain = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `GlobalNodeGroupsToRetain.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryDecreaseReplicaCountMessage
 */
const se_DecreaseReplicaCountMessage = (input: DecreaseReplicaCountMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_NRC] != null) {
    entries[_NRC] = input[_NRC];
  }
  if (input[_RC] != null) {
    const memberEntries = se_ReplicaConfigurationList(input[_RC], context);
    if (input[_RC]?.length === 0) {
      entries.ReplicaConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTR] != null) {
    const memberEntries = se_RemoveReplicasList(input[_RTR], context);
    if (input[_RTR]?.length === 0) {
      entries.ReplicasToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicasToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheClusterMessage
 */
const se_DeleteCacheClusterMessage = (input: DeleteCacheClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_FSI] != null) {
    entries[_FSI] = input[_FSI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheParameterGroupMessage
 */
const se_DeleteCacheParameterGroupMessage = (input: DeleteCacheParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheSecurityGroupMessage
 */
const se_DeleteCacheSecurityGroupMessage = (input: DeleteCacheSecurityGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheSubnetGroupMessage
 */
const se_DeleteCacheSubnetGroupMessage = (input: DeleteCacheSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSGNa] != null) {
    entries[_CSGNa] = input[_CSGNa];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteGlobalReplicationGroupMessage
 */
const se_DeleteGlobalReplicationGroupMessage = (
  input: DeleteGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_RPRG] != null) {
    entries[_RPRG] = input[_RPRG];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReplicationGroupMessage
 */
const se_DeleteReplicationGroupMessage = (input: DeleteReplicationGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_RPC] != null) {
    entries[_RPC] = input[_RPC];
  }
  if (input[_FSI] != null) {
    entries[_FSI] = input[_FSI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteServerlessCacheRequest
 */
const se_DeleteServerlessCacheRequest = (input: DeleteServerlessCacheRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_FSN] != null) {
    entries[_FSN] = input[_FSN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteServerlessCacheSnapshotRequest
 */
const se_DeleteServerlessCacheSnapshotRequest = (
  input: DeleteServerlessCacheSnapshotRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SCSN] != null) {
    entries[_SCSN] = input[_SCSN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSnapshotMessage
 */
const se_DeleteSnapshotMessage = (input: DeleteSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserGroupMessage
 */
const se_DeleteUserGroupMessage = (input: DeleteUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UGIs] != null) {
    entries[_UGIs] = input[_UGIs];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserMessage
 */
const se_DeleteUserMessage = (input: DeleteUserMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UIs] != null) {
    entries[_UIs] = input[_UIs];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheClustersMessage
 */
const se_DescribeCacheClustersMessage = (input: DescribeCacheClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_SCNI] != null) {
    entries[_SCNI] = input[_SCNI];
  }
  if (input[_SCCNIRG] != null) {
    entries[_SCCNIRG] = input[_SCCNIRG];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheEngineVersionsMessage
 */
const se_DescribeCacheEngineVersionsMessage = (
  input: DescribeCacheEngineVersionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_CPGF] != null) {
    entries[_CPGF] = input[_CPGF];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_DO] != null) {
    entries[_DO] = input[_DO];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheParameterGroupsMessage
 */
const se_DescribeCacheParameterGroupsMessage = (
  input: DescribeCacheParameterGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheParametersMessage
 */
const se_DescribeCacheParametersMessage = (input: DescribeCacheParametersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheSecurityGroupsMessage
 */
const se_DescribeCacheSecurityGroupsMessage = (
  input: DescribeCacheSecurityGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheSubnetGroupsMessage
 */
const se_DescribeCacheSubnetGroupsMessage = (input: DescribeCacheSubnetGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSGNa] != null) {
    entries[_CSGNa] = input[_CSGNa];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEngineDefaultParametersMessage
 */
const se_DescribeEngineDefaultParametersMessage = (
  input: DescribeEngineDefaultParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CPGF] != null) {
    entries[_CPGF] = input[_CPGF];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SIo] != null) {
    entries[_SIo] = input[_SIo];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_STt] != null) {
    entries[_STt] = __serializeDateTime(input[_STt]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_Du] != null) {
    entries[_Du] = input[_Du];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeGlobalReplicationGroupsMessage
 */
const se_DescribeGlobalReplicationGroupsMessage = (
  input: DescribeGlobalReplicationGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_SMI] != null) {
    entries[_SMI] = input[_SMI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReplicationGroupsMessage
 */
const se_DescribeReplicationGroupsMessage = (input: DescribeReplicationGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReservedCacheNodesMessage
 */
const se_DescribeReservedCacheNodesMessage = (
  input: DescribeReservedCacheNodesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RCNI] != null) {
    entries[_RCNI] = input[_RCNI];
  }
  if (input[_RCNOI] != null) {
    entries[_RCNOI] = input[_RCNOI];
  }
  if (input[_CNT] != null) {
    entries[_CNT] = input[_CNT];
  }
  if (input[_Du] != null) {
    entries[_Du] = input[_Du];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  if (input[_OT] != null) {
    entries[_OT] = input[_OT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReservedCacheNodesOfferingsMessage
 */
const se_DescribeReservedCacheNodesOfferingsMessage = (
  input: DescribeReservedCacheNodesOfferingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RCNOI] != null) {
    entries[_RCNOI] = input[_RCNOI];
  }
  if (input[_CNT] != null) {
    entries[_CNT] = input[_CNT];
  }
  if (input[_Du] != null) {
    entries[_Du] = input[_Du];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  if (input[_OT] != null) {
    entries[_OT] = input[_OT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeServerlessCacheSnapshotsRequest
 */
const se_DescribeServerlessCacheSnapshotsRequest = (
  input: DescribeServerlessCacheSnapshotsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_SCSN] != null) {
    entries[_SCSN] = input[_SCSN];
  }
  if (input[_STn] != null) {
    entries[_STn] = input[_STn];
  }
  if (input[_NTe] != null) {
    entries[_NTe] = input[_NTe];
  }
  if (input[_MRa] != null) {
    entries[_MRa] = input[_MRa];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeServerlessCachesRequest
 */
const se_DescribeServerlessCachesRequest = (input: DescribeServerlessCachesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_MRa] != null) {
    entries[_MRa] = input[_MRa];
  }
  if (input[_NTe] != null) {
    entries[_NTe] = input[_NTe];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeServiceUpdatesMessage
 */
const se_DescribeServiceUpdatesMessage = (input: DescribeServiceUpdatesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SUN] != null) {
    entries[_SUN] = input[_SUN];
  }
  if (input[_SUS] != null) {
    const memberEntries = se_ServiceUpdateStatusList(input[_SUS], context);
    if (input[_SUS]?.length === 0) {
      entries.ServiceUpdateStatus = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateStatus.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeSnapshotsMessage
 */
const se_DescribeSnapshotsMessage = (input: DescribeSnapshotsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_SS] != null) {
    entries[_SS] = input[_SS];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_SNGC] != null) {
    entries[_SNGC] = input[_SNGC];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeUpdateActionsMessage
 */
const se_DescribeUpdateActionsMessage = (input: DescribeUpdateActionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SUN] != null) {
    entries[_SUN] = input[_SUN];
  }
  if (input[_RGI] != null) {
    const memberEntries = se_ReplicationGroupIdList(input[_RGI], context);
    if (input[_RGI]?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CCI] != null) {
    const memberEntries = se_CacheClusterIdList(input[_CCI], context);
    if (input[_CCI]?.length === 0) {
      entries.CacheClusterIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_SUS] != null) {
    const memberEntries = se_ServiceUpdateStatusList(input[_SUS], context);
    if (input[_SUS]?.length === 0) {
      entries.ServiceUpdateStatus = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateStatus.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SUTR] != null) {
    const memberEntries = se_TimeRangeFilter(input[_SUTR], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateTimeRange.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UAS] != null) {
    const memberEntries = se_UpdateActionStatusList(input[_UAS], context);
    if (input[_UAS]?.length === 0) {
      entries.UpdateActionStatus = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UpdateActionStatus.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SNLUS] != null) {
    entries[_SNLUS] = input[_SNLUS];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeUserGroupsMessage
 */
const se_DescribeUserGroupsMessage = (input: DescribeUserGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UGIs] != null) {
    entries[_UGIs] = input[_UGIs];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeUsersMessage
 */
const se_DescribeUsersMessage = (input: DescribeUsersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_UIs] != null) {
    entries[_UIs] = input[_UIs];
  }
  if (input[_Fi] != null) {
    const memberEntries = se_FilterList(input[_Fi], context);
    if (input[_Fi]?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryDestinationDetails
 */
const se_DestinationDetails = (input: DestinationDetails, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CWLD] != null) {
    const memberEntries = se_CloudWatchLogsDestinationDetails(input[_CWLD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudWatchLogsDetails.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_KFD] != null) {
    const memberEntries = se_KinesisFirehoseDestinationDetails(input[_KFD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `KinesisFirehoseDetails.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDisassociateGlobalReplicationGroupMessage
 */
const se_DisassociateGlobalReplicationGroupMessage = (
  input: DisassociateGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_RGR] != null) {
    entries[_RGR] = input[_RGR];
  }
  return entries;
};

/**
 * serializeAws_queryECPUPerSecond
 */
const se_ECPUPerSecond = (input: ECPUPerSecond, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Mi] != null) {
    entries[_Mi] = input[_Mi];
  }
  return entries;
};

/**
 * serializeAws_queryExportServerlessCacheSnapshotRequest
 */
const se_ExportServerlessCacheSnapshotRequest = (
  input: ExportServerlessCacheSnapshotRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SCSN] != null) {
    entries[_SCSN] = input[_SCSN];
  }
  if (input[_SBN] != null) {
    entries[_SBN] = input[_SBN];
  }
  return entries;
};

/**
 * serializeAws_queryFailoverGlobalReplicationGroupMessage
 */
const se_FailoverGlobalReplicationGroupMessage = (
  input: FailoverGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_PR] != null) {
    entries[_PR] = input[_PR];
  }
  if (input[_PRGI] != null) {
    entries[_PRGI] = input[_PRGI];
  }
  return entries;
};

/**
 * serializeAws_queryFilter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    const memberEntries = se_FilterValueList(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryFilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Filter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryFilterValueList
 */
const se_FilterValueList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryGlobalNodeGroupIdList
 */
const se_GlobalNodeGroupIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`GlobalNodeGroupId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupMessage
 */
const se_IncreaseNodeGroupsInGlobalReplicationGroupMessage = (
  input: IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_NGCo] != null) {
    entries[_NGCo] = input[_NGCo];
  }
  if (input[_RCe] != null) {
    const memberEntries = se_RegionalConfigurationList(input[_RCe], context);
    if (input[_RCe]?.length === 0) {
      entries.RegionalConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RegionalConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryIncreaseReplicaCountMessage
 */
const se_IncreaseReplicaCountMessage = (input: IncreaseReplicaCountMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_NRC] != null) {
    entries[_NRC] = input[_NRC];
  }
  if (input[_RC] != null) {
    const memberEntries = se_ReplicaConfigurationList(input[_RC], context);
    if (input[_RC]?.length === 0) {
      entries.ReplicaConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryKeyList
 */
const se_KeyList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryKinesisFirehoseDestinationDetails
 */
const se_KinesisFirehoseDestinationDetails = (
  input: KinesisFirehoseDestinationDetails,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DSel] != null) {
    entries[_DSel] = input[_DSel];
  }
  return entries;
};

/**
 * serializeAws_queryListAllowedNodeTypeModificationsMessage
 */
const se_ListAllowedNodeTypeModificationsMessage = (
  input: ListAllowedNodeTypeModificationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  return entries;
};

/**
 * serializeAws_queryListTagsForResourceMessage
 */
const se_ListTagsForResourceMessage = (input: ListTagsForResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryLogDeliveryConfigurationRequest
 */
const se_LogDeliveryConfigurationRequest = (input: LogDeliveryConfigurationRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LT] != null) {
    entries[_LT] = input[_LT];
  }
  if (input[_DT] != null) {
    entries[_DT] = input[_DT];
  }
  if (input[_DD] != null) {
    const memberEntries = se_DestinationDetails(input[_DD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DestinationDetails.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LF] != null) {
    entries[_LF] = input[_LF];
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
  }
  return entries;
};

/**
 * serializeAws_queryLogDeliveryConfigurationRequestList
 */
const se_LogDeliveryConfigurationRequestList = (
  input: LogDeliveryConfigurationRequest[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_LogDeliveryConfigurationRequest(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`LogDeliveryConfigurationRequest.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryModifyCacheClusterMessage
 */
const se_ModifyCacheClusterMessage = (input: ModifyCacheClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_NCN] != null) {
    entries[_NCN] = input[_NCN];
  }
  if (input[_CNITR] != null) {
    const memberEntries = se_CacheNodeIdsList(input[_CNITR], context);
    if (input[_CNITR]?.length === 0) {
      entries.CacheNodeIdsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheNodeIdsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AZM] != null) {
    entries[_AZM] = input[_AZM];
  }
  if (input[_NAZ] != null) {
    const memberEntries = se_PreferredAvailabilityZoneList(input[_NAZ], context);
    if (input[_NAZ]?.length === 0) {
      entries.NewAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NewAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSGNac] != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input[_CSGNac], context);
    if (input[_CSGNac]?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SGI] != null) {
    const memberEntries = se_SecurityGroupIdsList(input[_SGI], context);
    if (input[_SGI]?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_NTA] != null) {
    entries[_NTA] = input[_NTA];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_NTS] != null) {
    entries[_NTS] = input[_NTS];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_SRL] != null) {
    entries[_SRL] = input[_SRL];
  }
  if (input[_SW] != null) {
    entries[_SW] = input[_SW];
  }
  if (input[_CNT] != null) {
    entries[_CNT] = input[_CNT];
  }
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_ATUS] != null) {
    entries[_ATUS] = input[_ATUS];
  }
  if (input[_LDC] != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input[_LDC], context);
    if (input[_LDC]?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ID] != null) {
    entries[_ID] = input[_ID];
  }
  if (input[_SC] != null) {
    const memberEntries = se_ScaleConfig(input[_SC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScaleConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyCacheParameterGroupMessage
 */
const se_ModifyCacheParameterGroupMessage = (input: ModifyCacheParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_PNV] != null) {
    const memberEntries = se_ParameterNameValueList(input[_PNV], context);
    if (input[_PNV]?.length === 0) {
      entries.ParameterNameValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterNameValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyCacheSubnetGroupMessage
 */
const se_ModifyCacheSubnetGroupMessage = (input: ModifyCacheSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSGNa] != null) {
    entries[_CSGNa] = input[_CSGNa];
  }
  if (input[_CSGD] != null) {
    entries[_CSGD] = input[_CSGD];
  }
  if (input[_SI] != null) {
    const memberEntries = se_SubnetIdentifierList(input[_SI], context);
    if (input[_SI]?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyGlobalReplicationGroupMessage
 */
const se_ModifyGlobalReplicationGroupMessage = (
  input: ModifyGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_CNT] != null) {
    entries[_CNT] = input[_CNT];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_GRGD] != null) {
    entries[_GRGD] = input[_GRGD];
  }
  if (input[_AFE] != null) {
    entries[_AFE] = input[_AFE];
  }
  return entries;
};

/**
 * serializeAws_queryModifyReplicationGroupMessage
 */
const se_ModifyReplicationGroupMessage = (input: ModifyReplicationGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_RGD] != null) {
    entries[_RGD] = input[_RGD];
  }
  if (input[_PCI] != null) {
    entries[_PCI] = input[_PCI];
  }
  if (input[_SCI] != null) {
    entries[_SCI] = input[_SCI];
  }
  if (input[_AFE] != null) {
    entries[_AFE] = input[_AFE];
  }
  if (input[_MAZE] != null) {
    entries[_MAZE] = input[_MAZE];
  }
  if (input[_NGI] != null) {
    entries[_NGI] = input[_NGI];
  }
  if (input[_CSGNac] != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input[_CSGNac], context);
    if (input[_CSGNac]?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SGI] != null) {
    const memberEntries = se_SecurityGroupIdsList(input[_SGI], context);
    if (input[_SGI]?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_NTA] != null) {
    entries[_NTA] = input[_NTA];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_NTS] != null) {
    entries[_NTS] = input[_NTS];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_SRL] != null) {
    entries[_SRL] = input[_SRL];
  }
  if (input[_SW] != null) {
    entries[_SW] = input[_SW];
  }
  if (input[_CNT] != null) {
    entries[_CNT] = input[_CNT];
  }
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_ATUS] != null) {
    entries[_ATUS] = input[_ATUS];
  }
  if (input[_UGITA] != null) {
    const memberEntries = se_UserGroupIdList(input[_UGITA], context);
    if (input[_UGITA]?.length === 0) {
      entries.UserGroupIdsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIdsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UGITR] != null) {
    const memberEntries = se_UserGroupIdList(input[_UGITR], context);
    if (input[_UGITR]?.length === 0) {
      entries.UserGroupIdsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIdsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RUG] != null) {
    entries[_RUG] = input[_RUG];
  }
  if (input[_LDC] != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input[_LDC], context);
    if (input[_LDC]?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ID] != null) {
    entries[_ID] = input[_ID];
  }
  if (input[_TEE] != null) {
    entries[_TEE] = input[_TEE];
  }
  if (input[_TEM] != null) {
    entries[_TEM] = input[_TEM];
  }
  if (input[_CMl] != null) {
    entries[_CMl] = input[_CMl];
  }
  return entries;
};

/**
 * serializeAws_queryModifyReplicationGroupShardConfigurationMessage
 */
const se_ModifyReplicationGroupShardConfigurationMessage = (
  input: ModifyReplicationGroupShardConfigurationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_NGCo] != null) {
    entries[_NGCo] = input[_NGCo];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_RCes] != null) {
    const memberEntries = se_ReshardingConfigurationList(input[_RCes], context);
    if (input[_RCes]?.length === 0) {
      entries.ReshardingConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReshardingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NGTR] != null) {
    const memberEntries = se_NodeGroupsToRemoveList(input[_NGTR], context);
    if (input[_NGTR]?.length === 0) {
      entries.NodeGroupsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NodeGroupsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NGTRo] != null) {
    const memberEntries = se_NodeGroupsToRetainList(input[_NGTRo], context);
    if (input[_NGTRo]?.length === 0) {
      entries.NodeGroupsToRetain = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NodeGroupsToRetain.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyServerlessCacheRequest
 */
const se_ModifyServerlessCacheRequest = (input: ModifyServerlessCacheRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_CUL] != null) {
    const memberEntries = se_CacheUsageLimits(input[_CUL], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheUsageLimits.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RUGe] != null) {
    entries[_RUGe] = input[_RUGe];
  }
  if (input[_UGIs] != null) {
    entries[_UGIs] = input[_UGIs];
  }
  if (input[_SGI] != null) {
    const memberEntries = se_SecurityGroupIdsList(input[_SGI], context);
    if (input[_SGI]?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SRL] != null) {
    entries[_SRL] = input[_SRL];
  }
  if (input[_DST] != null) {
    entries[_DST] = input[_DST];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
  }
  return entries;
};

/**
 * serializeAws_queryModifyUserGroupMessage
 */
const se_ModifyUserGroupMessage = (input: ModifyUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UGIs] != null) {
    entries[_UGIs] = input[_UGIs];
  }
  if (input[_UITA] != null) {
    const memberEntries = se_UserIdListInput(input[_UITA], context);
    if (input[_UITA]?.length === 0) {
      entries.UserIdsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIdsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UITR] != null) {
    const memberEntries = se_UserIdListInput(input[_UITR], context);
    if (input[_UITR]?.length === 0) {
      entries.UserIdsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIdsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_queryModifyUserMessage
 */
const se_ModifyUserMessage = (input: ModifyUserMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UIs] != null) {
    entries[_UIs] = input[_UIs];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_AAS] != null) {
    entries[_AAS] = input[_AAS];
  }
  if (input[_P] != null) {
    const memberEntries = se_PasswordListInput(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Passwords = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Passwords.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NPR] != null) {
    entries[_NPR] = input[_NPR];
  }
  if (input[_AM] != null) {
    const memberEntries = se_AuthenticationMode(input[_AM], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationMode.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_queryNodeGroupConfiguration
 */
const se_NodeGroupConfiguration = (input: NodeGroupConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NGI] != null) {
    entries[_NGI] = input[_NGI];
  }
  if (input[_Sl] != null) {
    entries[_Sl] = input[_Sl];
  }
  if (input[_RCep] != null) {
    entries[_RCep] = input[_RCep];
  }
  if (input[_PAZri] != null) {
    entries[_PAZri] = input[_PAZri];
  }
  if (input[_RAZ] != null) {
    const memberEntries = se_AvailabilityZonesList(input[_RAZ], context);
    if (input[_RAZ]?.length === 0) {
      entries.ReplicaAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_POAri] != null) {
    entries[_POAri] = input[_POAri];
  }
  if (input[_ROA] != null) {
    const memberEntries = se_OutpostArnsList(input[_ROA], context);
    if (input[_ROA]?.length === 0) {
      entries.ReplicaOutpostArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaOutpostArns.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryNodeGroupConfigurationList
 */
const se_NodeGroupConfigurationList = (input: NodeGroupConfiguration[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_NodeGroupConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`NodeGroupConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryNodeGroupsToRemoveList
 */
const se_NodeGroupsToRemoveList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`NodeGroupToRemove.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryNodeGroupsToRetainList
 */
const se_NodeGroupsToRetainList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`NodeGroupToRetain.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryOutpostArnsList
 */
const se_OutpostArnsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`OutpostArn.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryParameterNameValue
 */
const se_ParameterNameValue = (input: ParameterNameValue, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PV] != null) {
    entries[_PV] = input[_PV];
  }
  return entries;
};

/**
 * serializeAws_queryParameterNameValueList
 */
const se_ParameterNameValueList = (input: ParameterNameValue[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ParameterNameValue(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ParameterNameValue.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPasswordListInput
 */
const se_PasswordListInput = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPreferredAvailabilityZoneList
 */
const se_PreferredAvailabilityZoneList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`PreferredAvailabilityZone.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPreferredOutpostArnList
 */
const se_PreferredOutpostArnList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`PreferredOutpostArn.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPurchaseReservedCacheNodesOfferingMessage
 */
const se_PurchaseReservedCacheNodesOfferingMessage = (
  input: PurchaseReservedCacheNodesOfferingMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RCNOI] != null) {
    entries[_RCNOI] = input[_RCNOI];
  }
  if (input[_RCNI] != null) {
    entries[_RCNI] = input[_RCNI];
  }
  if (input[_CNC] != null) {
    entries[_CNC] = input[_CNC];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRebalanceSlotsInGlobalReplicationGroupMessage
 */
const se_RebalanceSlotsInGlobalReplicationGroupMessage = (
  input: RebalanceSlotsInGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GRGI] != null) {
    entries[_GRGI] = input[_GRGI];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryRebootCacheClusterMessage
 */
const se_RebootCacheClusterMessage = (input: RebootCacheClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CCIa] != null) {
    entries[_CCIa] = input[_CCIa];
  }
  if (input[_CNITRa] != null) {
    const memberEntries = se_CacheNodeIdsList(input[_CNITRa], context);
    if (input[_CNITRa]?.length === 0) {
      entries.CacheNodeIdsToReboot = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheNodeIdsToReboot.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRegionalConfiguration
 */
const se_RegionalConfiguration = (input: RegionalConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_RGR] != null) {
    entries[_RGR] = input[_RGR];
  }
  if (input[_RCes] != null) {
    const memberEntries = se_ReshardingConfigurationList(input[_RCes], context);
    if (input[_RCes]?.length === 0) {
      entries.ReshardingConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReshardingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRegionalConfigurationList
 */
const se_RegionalConfigurationList = (input: RegionalConfiguration[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RegionalConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`RegionalConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRemoveReplicasList
 */
const se_RemoveReplicasList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRemoveTagsFromResourceMessage
 */
const se_RemoveTagsFromResourceMessage = (input: RemoveTagsFromResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_TK] != null) {
    const memberEntries = se_KeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryReplicaConfigurationList
 */
const se_ReplicaConfigurationList = (input: ConfigureShard[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ConfigureShard(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ConfigureShard.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryReplicationGroupIdList
 */
const se_ReplicationGroupIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryResetCacheParameterGroupMessage
 */
const se_ResetCacheParameterGroupMessage = (input: ResetCacheParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_RAP] != null) {
    entries[_RAP] = input[_RAP];
  }
  if (input[_PNV] != null) {
    const memberEntries = se_ParameterNameValueList(input[_PNV], context);
    if (input[_PNV]?.length === 0) {
      entries.ParameterNameValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterNameValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryReshardingConfiguration
 */
const se_ReshardingConfiguration = (input: ReshardingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NGI] != null) {
    entries[_NGI] = input[_NGI];
  }
  if (input[_PAZ] != null) {
    const memberEntries = se_AvailabilityZonesList(input[_PAZ], context);
    if (input[_PAZ]?.length === 0) {
      entries.PreferredAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryReshardingConfigurationList
 */
const se_ReshardingConfigurationList = (input: ReshardingConfiguration[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ReshardingConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ReshardingConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRevokeCacheSecurityGroupIngressMessage
 */
const se_RevokeCacheSecurityGroupIngressMessage = (
  input: RevokeCacheSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_ECSGN] != null) {
    entries[_ECSGN] = input[_ECSGN];
  }
  if (input[_ECSGOI] != null) {
    entries[_ECSGOI] = input[_ECSGOI];
  }
  return entries;
};

/**
 * serializeAws_queryScaleConfig
 */
const se_ScaleConfig = (input: ScaleConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_SIM] != null) {
    entries[_SIM] = input[_SIM];
  }
  return entries;
};

/**
 * serializeAws_querySecurityGroupIdsList
 */
const se_SecurityGroupIdsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`SecurityGroupId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryServiceUpdateStatusList
 */
const se_ServiceUpdateStatusList = (input: ServiceUpdateStatus[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySnapshotArnsList
 */
const se_SnapshotArnsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`SnapshotArn.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryStartMigrationMessage
 */
const se_StartMigrationMessage = (input: StartMigrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_CNEL] != null) {
    const memberEntries = se_CustomerNodeEndpointList(input[_CNEL], context);
    if (input[_CNEL]?.length === 0) {
      entries.CustomerNodeEndpointList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomerNodeEndpointList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySubnetIdentifierList
 */
const se_SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`SubnetIdentifier.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySubnetIdsList
 */
const se_SubnetIdsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`SubnetId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  return entries;
};

/**
 * serializeAws_queryTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Tag.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTestFailoverMessage
 */
const se_TestFailoverMessage = (input: TestFailoverMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_NGI] != null) {
    entries[_NGI] = input[_NGI];
  }
  return entries;
};

/**
 * serializeAws_queryTestMigrationMessage
 */
const se_TestMigrationMessage = (input: TestMigrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RGIe] != null) {
    entries[_RGIe] = input[_RGIe];
  }
  if (input[_CNEL] != null) {
    const memberEntries = se_CustomerNodeEndpointList(input[_CNEL], context);
    if (input[_CNEL]?.length === 0) {
      entries.CustomerNodeEndpointList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomerNodeEndpointList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTimeRangeFilter
 */
const se_TimeRangeFilter = (input: TimeRangeFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_STt] != null) {
    entries[_STt] = __serializeDateTime(input[_STt]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  return entries;
};

/**
 * serializeAws_queryUpdateActionStatusList
 */
const se_UpdateActionStatusList = (input: UpdateActionStatus[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryUserGroupIdList
 */
const se_UserGroupIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryUserGroupIdListInput
 */
const se_UserGroupIdListInput = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryUserIdListInput
 */
const se_UserIdListInput = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * deserializeAws_queryAllowedNodeTypeModificationsMessage
 */
const de_AllowedNodeTypeModificationsMessage = (
  output: any,
  context: __SerdeContext
): AllowedNodeTypeModificationsMessage => {
  const contents: any = {};
  if (String(output.ScaleUpModifications).trim() === "") {
    contents[_SUM] = [];
  } else if (output[_SUM] != null && output[_SUM][_m] != null) {
    contents[_SUM] = de_NodeTypeList(__getArrayIfSingleItem(output[_SUM][_m]), context);
  }
  if (String(output.ScaleDownModifications).trim() === "") {
    contents[_SDM] = [];
  } else if (output[_SDM] != null && output[_SDM][_m] != null) {
    contents[_SDM] = de_NodeTypeList(__getArrayIfSingleItem(output[_SDM][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAPICallRateForCustomerExceededFault
 */
const de_APICallRateForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): APICallRateForCustomerExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthentication
 */
const de_Authentication = (output: any, context: __SerdeContext): Authentication => {
  const contents: any = {};
  if (output[_Ty] != null) {
    contents[_Ty] = __expectString(output[_Ty]);
  }
  if (output[_PC] != null) {
    contents[_PC] = __strictParseInt32(output[_PC]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationAlreadyExistsFault
 */
const de_AuthorizationAlreadyExistsFault = (output: any, context: __SerdeContext): AuthorizationAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationNotFoundFault
 */
const de_AuthorizationNotFoundFault = (output: any, context: __SerdeContext): AuthorizationNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult
 */
const de_AuthorizeCacheSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): AuthorizeCacheSecurityGroupIngressResult => {
  const contents: any = {};
  if (output[_CSG] != null) {
    contents[_CSG] = de_CacheSecurityGroup(output[_CSG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZonesList
 */
const de_AvailabilityZonesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCacheCluster
 */
const de_CacheCluster = (output: any, context: __SerdeContext): CacheCluster => {
  const contents: any = {};
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_CE] != null) {
    contents[_CE] = de_Endpoint(output[_CE], context);
  }
  if (output[_CDLP] != null) {
    contents[_CDLP] = __expectString(output[_CDLP]);
  }
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_CCS] != null) {
    contents[_CCS] = __expectString(output[_CCS]);
  }
  if (output[_NCN] != null) {
    contents[_NCN] = __strictParseInt32(output[_NCN]) as number;
  }
  if (output[_PAZr] != null) {
    contents[_PAZr] = __expectString(output[_PAZr]);
  }
  if (output[_POAr] != null) {
    contents[_POAr] = __expectString(output[_POAr]);
  }
  if (output[_CCCT] != null) {
    contents[_CCCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCCT]));
  }
  if (output[_PMW] != null) {
    contents[_PMW] = __expectString(output[_PMW]);
  }
  if (output[_PMV] != null) {
    contents[_PMV] = de_PendingModifiedValues(output[_PMV], context);
  }
  if (output[_NC] != null) {
    contents[_NC] = de_NotificationConfiguration(output[_NC], context);
  }
  if (String(output.CacheSecurityGroups).trim() === "") {
    contents[_CSGa] = [];
  } else if (output[_CSGa] != null && output[_CSGa][_CSG] != null) {
    contents[_CSGa] = de_CacheSecurityGroupMembershipList(__getArrayIfSingleItem(output[_CSGa][_CSG]), context);
  }
  if (output[_CPG] != null) {
    contents[_CPG] = de_CacheParameterGroupStatus(output[_CPG], context);
  }
  if (output[_CSGNa] != null) {
    contents[_CSGNa] = __expectString(output[_CSGNa]);
  }
  if (String(output.CacheNodes).trim() === "") {
    contents[_CN] = [];
  } else if (output[_CN] != null && output[_CN][_CNa] != null) {
    contents[_CN] = de_CacheNodeList(__getArrayIfSingleItem(output[_CN][_CNa]), context);
  }
  if (output[_AMVU] != null) {
    contents[_AMVU] = __parseBoolean(output[_AMVU]);
  }
  if (String(output.SecurityGroups).trim() === "") {
    contents[_SG] = [];
  } else if (output[_SG] != null && output[_SG][_m] != null) {
    contents[_SG] = de_SecurityGroupMembershipList(__getArrayIfSingleItem(output[_SG][_m]), context);
  }
  if (output[_RGIe] != null) {
    contents[_RGIe] = __expectString(output[_RGIe]);
  }
  if (output[_SRL] != null) {
    contents[_SRL] = __strictParseInt32(output[_SRL]) as number;
  }
  if (output[_SW] != null) {
    contents[_SW] = __expectString(output[_SW]);
  }
  if (output[_ATE] != null) {
    contents[_ATE] = __parseBoolean(output[_ATE]);
  }
  if (output[_ATLMD] != null) {
    contents[_ATLMD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ATLMD]));
  }
  if (output[_TEE] != null) {
    contents[_TEE] = __parseBoolean(output[_TEE]);
  }
  if (output[_AREE] != null) {
    contents[_AREE] = __parseBoolean(output[_AREE]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_RGLDE] != null) {
    contents[_RGLDE] = __parseBoolean(output[_RGLDE]);
  }
  if (String(output.LogDeliveryConfigurations).trim() === "") {
    contents[_LDC] = [];
  } else if (output[_LDC] != null && output[_LDC][_LDCo] != null) {
    contents[_LDC] = de_LogDeliveryConfigurationList(__getArrayIfSingleItem(output[_LDC][_LDCo]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_ID] != null) {
    contents[_ID] = __expectString(output[_ID]);
  }
  if (output[_TEM] != null) {
    contents[_TEM] = __expectString(output[_TEM]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheClusterAlreadyExistsFault
 */
const de_CacheClusterAlreadyExistsFault = (output: any, context: __SerdeContext): CacheClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheClusterList
 */
const de_CacheClusterList = (output: any, context: __SerdeContext): CacheCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheCluster(entry, context);
    });
};

/**
 * deserializeAws_queryCacheClusterMessage
 */
const de_CacheClusterMessage = (output: any, context: __SerdeContext): CacheClusterMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.CacheClusters).trim() === "") {
    contents[_CC] = [];
  } else if (output[_CC] != null && output[_CC][_CCa] != null) {
    contents[_CC] = de_CacheClusterList(__getArrayIfSingleItem(output[_CC][_CCa]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheClusterNotFoundFault
 */
const de_CacheClusterNotFoundFault = (output: any, context: __SerdeContext): CacheClusterNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheEngineVersion
 */
const de_CacheEngineVersion = (output: any, context: __SerdeContext): CacheEngineVersion => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_CPGF] != null) {
    contents[_CPGF] = __expectString(output[_CPGF]);
  }
  if (output[_CED] != null) {
    contents[_CED] = __expectString(output[_CED]);
  }
  if (output[_CEVD] != null) {
    contents[_CEVD] = __expectString(output[_CEVD]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheEngineVersionList
 */
const de_CacheEngineVersionList = (output: any, context: __SerdeContext): CacheEngineVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheEngineVersion(entry, context);
    });
};

/**
 * deserializeAws_queryCacheEngineVersionMessage
 */
const de_CacheEngineVersionMessage = (output: any, context: __SerdeContext): CacheEngineVersionMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.CacheEngineVersions).trim() === "") {
    contents[_CEV] = [];
  } else if (output[_CEV] != null && output[_CEV][_CEVa] != null) {
    contents[_CEV] = de_CacheEngineVersionList(__getArrayIfSingleItem(output[_CEV][_CEVa]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheNode
 */
const de_CacheNode = (output: any, context: __SerdeContext): CacheNode => {
  const contents: any = {};
  if (output[_CNI] != null) {
    contents[_CNI] = __expectString(output[_CNI]);
  }
  if (output[_CNS] != null) {
    contents[_CNS] = __expectString(output[_CNS]);
  }
  if (output[_CNCT] != null) {
    contents[_CNCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CNCT]));
  }
  if (output[_End] != null) {
    contents[_End] = de_Endpoint(output[_End], context);
  }
  if (output[_PGS] != null) {
    contents[_PGS] = __expectString(output[_PGS]);
  }
  if (output[_SCNIo] != null) {
    contents[_SCNIo] = __expectString(output[_SCNIo]);
  }
  if (output[_CAZ] != null) {
    contents[_CAZ] = __expectString(output[_CAZ]);
  }
  if (output[_COA] != null) {
    contents[_COA] = __expectString(output[_COA]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheNodeIdsList
 */
const de_CacheNodeIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCacheNodeList
 */
const de_CacheNodeList = (output: any, context: __SerdeContext): CacheNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheNode(entry, context);
    });
};

/**
 * deserializeAws_queryCacheNodeTypeSpecificParameter
 */
const de_CacheNodeTypeSpecificParameter = (output: any, context: __SerdeContext): CacheNodeTypeSpecificParameter => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_DTa] != null) {
    contents[_DTa] = __expectString(output[_DTa]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __expectString(output[_AV]);
  }
  if (output[_IM] != null) {
    contents[_IM] = __parseBoolean(output[_IM]);
  }
  if (output[_MEVi] != null) {
    contents[_MEVi] = __expectString(output[_MEVi]);
  }
  if (String(output.CacheNodeTypeSpecificValues).trim() === "") {
    contents[_CNTSV] = [];
  } else if (output[_CNTSV] != null && output[_CNTSV][_CNTSVa] != null) {
    contents[_CNTSV] = de_CacheNodeTypeSpecificValueList(__getArrayIfSingleItem(output[_CNTSV][_CNTSVa]), context);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheNodeTypeSpecificParametersList
 */
const de_CacheNodeTypeSpecificParametersList = (
  output: any,
  context: __SerdeContext
): CacheNodeTypeSpecificParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheNodeTypeSpecificParameter(entry, context);
    });
};

/**
 * deserializeAws_queryCacheNodeTypeSpecificValue
 */
const de_CacheNodeTypeSpecificValue = (output: any, context: __SerdeContext): CacheNodeTypeSpecificValue => {
  const contents: any = {};
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheNodeTypeSpecificValueList
 */
const de_CacheNodeTypeSpecificValueList = (output: any, context: __SerdeContext): CacheNodeTypeSpecificValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheNodeTypeSpecificValue(entry, context);
    });
};

/**
 * deserializeAws_queryCacheNodeUpdateStatus
 */
const de_CacheNodeUpdateStatus = (output: any, context: __SerdeContext): CacheNodeUpdateStatus => {
  const contents: any = {};
  if (output[_CNI] != null) {
    contents[_CNI] = __expectString(output[_CNI]);
  }
  if (output[_NUS] != null) {
    contents[_NUS] = __expectString(output[_NUS]);
  }
  if (output[_NDD] != null) {
    contents[_NDD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NDD]));
  }
  if (output[_NUSD] != null) {
    contents[_NUSD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUSD]));
  }
  if (output[_NUED] != null) {
    contents[_NUED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUED]));
  }
  if (output[_NUIB] != null) {
    contents[_NUIB] = __expectString(output[_NUIB]);
  }
  if (output[_NUID] != null) {
    contents[_NUID] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUID]));
  }
  if (output[_NUSMD] != null) {
    contents[_NUSMD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUSMD]));
  }
  return contents;
};

/**
 * deserializeAws_queryCacheNodeUpdateStatusList
 */
const de_CacheNodeUpdateStatusList = (output: any, context: __SerdeContext): CacheNodeUpdateStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheNodeUpdateStatus(entry, context);
    });
};

/**
 * deserializeAws_queryCacheParameterGroup
 */
const de_CacheParameterGroup = (output: any, context: __SerdeContext): CacheParameterGroup => {
  const contents: any = {};
  if (output[_CPGN] != null) {
    contents[_CPGN] = __expectString(output[_CPGN]);
  }
  if (output[_CPGF] != null) {
    contents[_CPGF] = __expectString(output[_CPGF]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_IG] != null) {
    contents[_IG] = __parseBoolean(output[_IG]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupAlreadyExistsFault
 */
const de_CacheParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupDetails
 */
const de_CacheParameterGroupDetails = (output: any, context: __SerdeContext): CacheParameterGroupDetails => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.Parameters).trim() === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  if (String(output.CacheNodeTypeSpecificParameters).trim() === "") {
    contents[_CNTSP] = [];
  } else if (output[_CNTSP] != null && output[_CNTSP][_CNTSPa] != null) {
    contents[_CNTSP] = de_CacheNodeTypeSpecificParametersList(__getArrayIfSingleItem(output[_CNTSP][_CNTSPa]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupList
 */
const de_CacheParameterGroupList = (output: any, context: __SerdeContext): CacheParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheParameterGroup(entry, context);
    });
};

/**
 * deserializeAws_queryCacheParameterGroupNameMessage
 */
const de_CacheParameterGroupNameMessage = (output: any, context: __SerdeContext): CacheParameterGroupNameMessage => {
  const contents: any = {};
  if (output[_CPGN] != null) {
    contents[_CPGN] = __expectString(output[_CPGN]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupNotFoundFault
 */
const de_CacheParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupQuotaExceededFault
 */
const de_CacheParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupsMessage
 */
const de_CacheParameterGroupsMessage = (output: any, context: __SerdeContext): CacheParameterGroupsMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.CacheParameterGroups).trim() === "") {
    contents[_CPGa] = [];
  } else if (output[_CPGa] != null && output[_CPGa][_CPG] != null) {
    contents[_CPGa] = de_CacheParameterGroupList(__getArrayIfSingleItem(output[_CPGa][_CPG]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupStatus
 */
const de_CacheParameterGroupStatus = (output: any, context: __SerdeContext): CacheParameterGroupStatus => {
  const contents: any = {};
  if (output[_CPGN] != null) {
    contents[_CPGN] = __expectString(output[_CPGN]);
  }
  if (output[_PAS] != null) {
    contents[_PAS] = __expectString(output[_PAS]);
  }
  if (String(output.CacheNodeIdsToReboot).trim() === "") {
    contents[_CNITRa] = [];
  } else if (output[_CNITRa] != null && output[_CNITRa][_CNI] != null) {
    contents[_CNITRa] = de_CacheNodeIdsList(__getArrayIfSingleItem(output[_CNITRa][_CNI]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroup
 */
const de_CacheSecurityGroup = (output: any, context: __SerdeContext): CacheSecurityGroup => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (output[_CSGN] != null) {
    contents[_CSGN] = __expectString(output[_CSGN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (String(output.EC2SecurityGroups).trim() === "") {
    contents[_ECSG] = [];
  } else if (output[_ECSG] != null && output[_ECSG][_ECSGe] != null) {
    contents[_ECSG] = de_EC2SecurityGroupList(__getArrayIfSingleItem(output[_ECSG][_ECSGe]), context);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroupAlreadyExistsFault
 */
const de_CacheSecurityGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroupMembership
 */
const de_CacheSecurityGroupMembership = (output: any, context: __SerdeContext): CacheSecurityGroupMembership => {
  const contents: any = {};
  if (output[_CSGN] != null) {
    contents[_CSGN] = __expectString(output[_CSGN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroupMembershipList
 */
const de_CacheSecurityGroupMembershipList = (output: any, context: __SerdeContext): CacheSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheSecurityGroupMembership(entry, context);
    });
};

/**
 * deserializeAws_queryCacheSecurityGroupMessage
 */
const de_CacheSecurityGroupMessage = (output: any, context: __SerdeContext): CacheSecurityGroupMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.CacheSecurityGroups).trim() === "") {
    contents[_CSGa] = [];
  } else if (output[_CSGa] != null && output[_CSGa][_CSG] != null) {
    contents[_CSGa] = de_CacheSecurityGroups(__getArrayIfSingleItem(output[_CSGa][_CSG]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroupNotFoundFault
 */
const de_CacheSecurityGroupNotFoundFault = (output: any, context: __SerdeContext): CacheSecurityGroupNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroupQuotaExceededFault
 */
const de_CacheSecurityGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroups
 */
const de_CacheSecurityGroups = (output: any, context: __SerdeContext): CacheSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheSecurityGroup(entry, context);
    });
};

/**
 * deserializeAws_queryCacheSubnetGroup
 */
const de_CacheSubnetGroup = (output: any, context: __SerdeContext): CacheSubnetGroup => {
  const contents: any = {};
  if (output[_CSGNa] != null) {
    contents[_CSGNa] = __expectString(output[_CSGNa]);
  }
  if (output[_CSGD] != null) {
    contents[_CSGD] = __expectString(output[_CSGD]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (String(output.Subnets).trim() === "") {
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_Sub] != null) {
    contents[_Su] = de_SubnetList(__getArrayIfSingleItem(output[_Su][_Sub]), context);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (String(output.SupportedNetworkTypes).trim() === "") {
    contents[_SNT] = [];
  } else if (output[_SNT] != null && output[_SNT][_m] != null) {
    contents[_SNT] = de_NetworkTypeList(__getArrayIfSingleItem(output[_SNT][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupAlreadyExistsFault
 */
const de_CacheSubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupInUse
 */
const de_CacheSubnetGroupInUse = (output: any, context: __SerdeContext): CacheSubnetGroupInUse => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupMessage
 */
const de_CacheSubnetGroupMessage = (output: any, context: __SerdeContext): CacheSubnetGroupMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.CacheSubnetGroups).trim() === "") {
    contents[_CSGac] = [];
  } else if (output[_CSGac] != null && output[_CSGac][_CSGach] != null) {
    contents[_CSGac] = de_CacheSubnetGroups(__getArrayIfSingleItem(output[_CSGac][_CSGach]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupNotFoundFault
 */
const de_CacheSubnetGroupNotFoundFault = (output: any, context: __SerdeContext): CacheSubnetGroupNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupQuotaExceededFault
 */
const de_CacheSubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroups
 */
const de_CacheSubnetGroups = (output: any, context: __SerdeContext): CacheSubnetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheSubnetGroup(entry, context);
    });
};

/**
 * deserializeAws_queryCacheSubnetQuotaExceededFault
 */
const de_CacheSubnetQuotaExceededFault = (output: any, context: __SerdeContext): CacheSubnetQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheUsageLimits
 */
const de_CacheUsageLimits = (output: any, context: __SerdeContext): CacheUsageLimits => {
  const contents: any = {};
  if (output[_DSa] != null) {
    contents[_DSa] = de_DataStorage(output[_DSa], context);
  }
  if (output[_ECPUPS] != null) {
    contents[_ECPUPS] = de_ECPUPerSecond(output[_ECPUPS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCloudWatchLogsDestinationDetails
 */
const de_CloudWatchLogsDestinationDetails = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDestinationDetails => {
  const contents: any = {};
  if (output[_LG] != null) {
    contents[_LG] = __expectString(output[_LG]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterIdList
 */
const de_ClusterIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryClusterQuotaForCustomerExceededFault
 */
const de_ClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCompleteMigrationResponse
 */
const de_CompleteMigrationResponse = (output: any, context: __SerdeContext): CompleteMigrationResponse => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyServerlessCacheSnapshotResponse
 */
const de_CopyServerlessCacheSnapshotResponse = (
  output: any,
  context: __SerdeContext
): CopyServerlessCacheSnapshotResponse => {
  const contents: any = {};
  if (output[_SCS] != null) {
    contents[_SCS] = de_ServerlessCacheSnapshot(output[_SCS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopySnapshotResult
 */
const de_CopySnapshotResult = (output: any, context: __SerdeContext): CopySnapshotResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheClusterResult
 */
const de_CreateCacheClusterResult = (output: any, context: __SerdeContext): CreateCacheClusterResult => {
  const contents: any = {};
  if (output[_CCa] != null) {
    contents[_CCa] = de_CacheCluster(output[_CCa], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheParameterGroupResult
 */
const de_CreateCacheParameterGroupResult = (output: any, context: __SerdeContext): CreateCacheParameterGroupResult => {
  const contents: any = {};
  if (output[_CPG] != null) {
    contents[_CPG] = de_CacheParameterGroup(output[_CPG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheSecurityGroupResult
 */
const de_CreateCacheSecurityGroupResult = (output: any, context: __SerdeContext): CreateCacheSecurityGroupResult => {
  const contents: any = {};
  if (output[_CSG] != null) {
    contents[_CSG] = de_CacheSecurityGroup(output[_CSG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheSubnetGroupResult
 */
const de_CreateCacheSubnetGroupResult = (output: any, context: __SerdeContext): CreateCacheSubnetGroupResult => {
  const contents: any = {};
  if (output[_CSGach] != null) {
    contents[_CSGach] = de_CacheSubnetGroup(output[_CSGach], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateGlobalReplicationGroupResult
 */
const de_CreateGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): CreateGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateReplicationGroupResult
 */
const de_CreateReplicationGroupResult = (output: any, context: __SerdeContext): CreateReplicationGroupResult => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateServerlessCacheResponse
 */
const de_CreateServerlessCacheResponse = (output: any, context: __SerdeContext): CreateServerlessCacheResponse => {
  const contents: any = {};
  if (output[_SCe] != null) {
    contents[_SCe] = de_ServerlessCache(output[_SCe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateServerlessCacheSnapshotResponse
 */
const de_CreateServerlessCacheSnapshotResponse = (
  output: any,
  context: __SerdeContext
): CreateServerlessCacheSnapshotResponse => {
  const contents: any = {};
  if (output[_SCS] != null) {
    contents[_SCS] = de_ServerlessCacheSnapshot(output[_SCS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateSnapshotResult
 */
const de_CreateSnapshotResult = (output: any, context: __SerdeContext): CreateSnapshotResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDataStorage
 */
const de_DataStorage = (output: any, context: __SerdeContext): DataStorage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Mi] != null) {
    contents[_Mi] = __strictParseInt32(output[_Mi]) as number;
  }
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  return contents;
};

/**
 * deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupResult
 */
const de_DecreaseNodeGroupsInGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DecreaseNodeGroupsInGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDecreaseReplicaCountResult
 */
const de_DecreaseReplicaCountResult = (output: any, context: __SerdeContext): DecreaseReplicaCountResult => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDefaultUserAssociatedToUserGroupFault
 */
const de_DefaultUserAssociatedToUserGroupFault = (
  output: any,
  context: __SerdeContext
): DefaultUserAssociatedToUserGroupFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDefaultUserRequired
 */
const de_DefaultUserRequired = (output: any, context: __SerdeContext): DefaultUserRequired => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteCacheClusterResult
 */
const de_DeleteCacheClusterResult = (output: any, context: __SerdeContext): DeleteCacheClusterResult => {
  const contents: any = {};
  if (output[_CCa] != null) {
    contents[_CCa] = de_CacheCluster(output[_CCa], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteGlobalReplicationGroupResult
 */
const de_DeleteGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DeleteGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteReplicationGroupResult
 */
const de_DeleteReplicationGroupResult = (output: any, context: __SerdeContext): DeleteReplicationGroupResult => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteServerlessCacheResponse
 */
const de_DeleteServerlessCacheResponse = (output: any, context: __SerdeContext): DeleteServerlessCacheResponse => {
  const contents: any = {};
  if (output[_SCe] != null) {
    contents[_SCe] = de_ServerlessCache(output[_SCe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteServerlessCacheSnapshotResponse
 */
const de_DeleteServerlessCacheSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DeleteServerlessCacheSnapshotResponse => {
  const contents: any = {};
  if (output[_SCS] != null) {
    contents[_SCS] = de_ServerlessCacheSnapshot(output[_SCS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteSnapshotResult
 */
const de_DeleteSnapshotResult = (output: any, context: __SerdeContext): DeleteSnapshotResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEngineDefaultParametersResult
 */
const de_DescribeEngineDefaultParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeEngineDefaultParametersResult => {
  const contents: any = {};
  if (output[_ED] != null) {
    contents[_ED] = de_EngineDefaults(output[_ED], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeGlobalReplicationGroupsResult
 */
const de_DescribeGlobalReplicationGroupsResult = (
  output: any,
  context: __SerdeContext
): DescribeGlobalReplicationGroupsResult => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.GlobalReplicationGroups).trim() === "") {
    contents[_GRGl] = [];
  } else if (output[_GRGl] != null && output[_GRGl][_GRG] != null) {
    contents[_GRGl] = de_GlobalReplicationGroupList(__getArrayIfSingleItem(output[_GRGl][_GRG]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeServerlessCacheSnapshotsResponse
 */
const de_DescribeServerlessCacheSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): DescribeServerlessCacheSnapshotsResponse => {
  const contents: any = {};
  if (output[_NTe] != null) {
    contents[_NTe] = __expectString(output[_NTe]);
  }
  if (String(output.ServerlessCacheSnapshots).trim() === "") {
    contents[_SCSe] = [];
  } else if (output[_SCSe] != null && output[_SCSe][_SCS] != null) {
    contents[_SCSe] = de_ServerlessCacheSnapshotList(__getArrayIfSingleItem(output[_SCSe][_SCS]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeServerlessCachesResponse
 */
const de_DescribeServerlessCachesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServerlessCachesResponse => {
  const contents: any = {};
  if (output[_NTe] != null) {
    contents[_NTe] = __expectString(output[_NTe]);
  }
  if (String(output.ServerlessCaches).trim() === "") {
    contents[_SCer] = [];
  } else if (output[_SCer] != null && output[_SCer][_m] != null) {
    contents[_SCer] = de_ServerlessCacheList(__getArrayIfSingleItem(output[_SCer][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeSnapshotsListMessage
 */
const de_DescribeSnapshotsListMessage = (output: any, context: __SerdeContext): DescribeSnapshotsListMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.Snapshots).trim() === "") {
    contents[_Sna] = [];
  } else if (output[_Sna] != null && output[_Sna][_Sn] != null) {
    contents[_Sna] = de_SnapshotList(__getArrayIfSingleItem(output[_Sna][_Sn]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeUserGroupsResult
 */
const de_DescribeUserGroupsResult = (output: any, context: __SerdeContext): DescribeUserGroupsResult => {
  const contents: any = {};
  if (String(output.UserGroups).trim() === "") {
    contents[_UG] = [];
  } else if (output[_UG] != null && output[_UG][_m] != null) {
    contents[_UG] = de_UserGroupList(__getArrayIfSingleItem(output[_UG][_m]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeUsersResult
 */
const de_DescribeUsersResult = (output: any, context: __SerdeContext): DescribeUsersResult => {
  const contents: any = {};
  if (String(output.Users).trim() === "") {
    contents[_Us] = [];
  } else if (output[_Us] != null && output[_Us][_m] != null) {
    contents[_Us] = de_UserList(__getArrayIfSingleItem(output[_Us][_m]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDestinationDetails
 */
const de_DestinationDetails = (output: any, context: __SerdeContext): DestinationDetails => {
  const contents: any = {};
  if (output[_CWLD] != null) {
    contents[_CWLD] = de_CloudWatchLogsDestinationDetails(output[_CWLD], context);
  }
  if (output[_KFD] != null) {
    contents[_KFD] = de_KinesisFirehoseDestinationDetails(output[_KFD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDisassociateGlobalReplicationGroupResult
 */
const de_DisassociateGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DisassociateGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateUserNameFault
 */
const de_DuplicateUserNameFault = (output: any, context: __SerdeContext): DuplicateUserNameFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryEC2SecurityGroup
 */
const de_EC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_ECSGN] != null) {
    contents[_ECSGN] = __expectString(output[_ECSGN]);
  }
  if (output[_ECSGOI] != null) {
    contents[_ECSGOI] = __expectString(output[_ECSGOI]);
  }
  return contents;
};

/**
 * deserializeAws_queryEC2SecurityGroupList
 */
const de_EC2SecurityGroupList = (output: any, context: __SerdeContext): EC2SecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EC2SecurityGroup(entry, context);
    });
};

/**
 * deserializeAws_queryECPUPerSecond
 */
const de_ECPUPerSecond = (output: any, context: __SerdeContext): ECPUPerSecond => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Mi] != null) {
    contents[_Mi] = __strictParseInt32(output[_Mi]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryEndpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {};
  if (output[_Ad] != null) {
    contents[_Ad] = __expectString(output[_Ad]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __strictParseInt32(output[_Po]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryEngineDefaults
 */
const de_EngineDefaults = (output: any, context: __SerdeContext): EngineDefaults => {
  const contents: any = {};
  if (output[_CPGF] != null) {
    contents[_CPGF] = __expectString(output[_CPGF]);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.Parameters).trim() === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  if (String(output.CacheNodeTypeSpecificParameters).trim() === "") {
    contents[_CNTSP] = [];
  } else if (output[_CNTSP] != null && output[_CNTSP][_CNTSPa] != null) {
    contents[_CNTSP] = de_CacheNodeTypeSpecificParametersList(__getArrayIfSingleItem(output[_CNTSP][_CNTSPa]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEvent
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  const contents: any = {};
  if (output[_SIo] != null) {
    contents[_SIo] = __expectString(output[_SIo]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_Da] != null) {
    contents[_Da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Da]));
  }
  return contents;
};

/**
 * deserializeAws_queryEventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
};

/**
 * deserializeAws_queryEventsMessage
 */
const de_EventsMessage = (output: any, context: __SerdeContext): EventsMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.Events).trim() === "") {
    contents[_Ev] = [];
  } else if (output[_Ev] != null && output[_Ev][_Eve] != null) {
    contents[_Ev] = de_EventList(__getArrayIfSingleItem(output[_Ev][_Eve]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryExportServerlessCacheSnapshotResponse
 */
const de_ExportServerlessCacheSnapshotResponse = (
  output: any,
  context: __SerdeContext
): ExportServerlessCacheSnapshotResponse => {
  const contents: any = {};
  if (output[_SCS] != null) {
    contents[_SCS] = de_ServerlessCacheSnapshot(output[_SCS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryFailoverGlobalReplicationGroupResult
 */
const de_FailoverGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): FailoverGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalNodeGroup
 */
const de_GlobalNodeGroup = (output: any, context: __SerdeContext): GlobalNodeGroup => {
  const contents: any = {};
  if (output[_GNGI] != null) {
    contents[_GNGI] = __expectString(output[_GNGI]);
  }
  if (output[_Sl] != null) {
    contents[_Sl] = __expectString(output[_Sl]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalNodeGroupList
 */
const de_GlobalNodeGroupList = (output: any, context: __SerdeContext): GlobalNodeGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GlobalNodeGroup(entry, context);
    });
};

/**
 * deserializeAws_queryGlobalReplicationGroup
 */
const de_GlobalReplicationGroup = (output: any, context: __SerdeContext): GlobalReplicationGroup => {
  const contents: any = {};
  if (output[_GRGI] != null) {
    contents[_GRGI] = __expectString(output[_GRGI]);
  }
  if (output[_GRGD] != null) {
    contents[_GRGD] = __expectString(output[_GRGD]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (String(output.Members).trim() === "") {
    contents[_Mem] = [];
  } else if (output[_Mem] != null && output[_Mem][_GRGM] != null) {
    contents[_Mem] = de_GlobalReplicationGroupMemberList(__getArrayIfSingleItem(output[_Mem][_GRGM]), context);
  }
  if (output[_CEl] != null) {
    contents[_CEl] = __parseBoolean(output[_CEl]);
  }
  if (String(output.GlobalNodeGroups).trim() === "") {
    contents[_GNG] = [];
  } else if (output[_GNG] != null && output[_GNG][_GNGl] != null) {
    contents[_GNG] = de_GlobalNodeGroupList(__getArrayIfSingleItem(output[_GNG][_GNGl]), context);
  }
  if (output[_ATE] != null) {
    contents[_ATE] = __parseBoolean(output[_ATE]);
  }
  if (output[_TEE] != null) {
    contents[_TEE] = __parseBoolean(output[_TEE]);
  }
  if (output[_AREE] != null) {
    contents[_AREE] = __parseBoolean(output[_AREE]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalReplicationGroupAlreadyExistsFault
 */
const de_GlobalReplicationGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalReplicationGroupInfo
 */
const de_GlobalReplicationGroupInfo = (output: any, context: __SerdeContext): GlobalReplicationGroupInfo => {
  const contents: any = {};
  if (output[_GRGI] != null) {
    contents[_GRGI] = __expectString(output[_GRGI]);
  }
  if (output[_GRGMR] != null) {
    contents[_GRGMR] = __expectString(output[_GRGMR]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalReplicationGroupList
 */
const de_GlobalReplicationGroupList = (output: any, context: __SerdeContext): GlobalReplicationGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GlobalReplicationGroup(entry, context);
    });
};

/**
 * deserializeAws_queryGlobalReplicationGroupMember
 */
const de_GlobalReplicationGroupMember = (output: any, context: __SerdeContext): GlobalReplicationGroupMember => {
  const contents: any = {};
  if (output[_RGIe] != null) {
    contents[_RGIe] = __expectString(output[_RGIe]);
  }
  if (output[_RGR] != null) {
    contents[_RGR] = __expectString(output[_RGR]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  if (output[_AF] != null) {
    contents[_AF] = __expectString(output[_AF]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalReplicationGroupMemberList
 */
const de_GlobalReplicationGroupMemberList = (output: any, context: __SerdeContext): GlobalReplicationGroupMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GlobalReplicationGroupMember(entry, context);
    });
};

/**
 * deserializeAws_queryGlobalReplicationGroupNotFoundFault
 */
const de_GlobalReplicationGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroupNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupResult
 */
const de_IncreaseNodeGroupsInGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): IncreaseNodeGroupsInGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIncreaseReplicaCountResult
 */
const de_IncreaseReplicaCountResult = (output: any, context: __SerdeContext): IncreaseReplicaCountResult => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientCacheClusterCapacityFault
 */
const de_InsufficientCacheClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientCacheClusterCapacityFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidARNFault
 */
const de_InvalidARNFault = (output: any, context: __SerdeContext): InvalidARNFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCacheClusterStateFault
 */
const de_InvalidCacheClusterStateFault = (output: any, context: __SerdeContext): InvalidCacheClusterStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCacheParameterGroupStateFault
 */
const de_InvalidCacheParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheParameterGroupStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCacheSecurityGroupStateFault
 */
const de_InvalidCacheSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheSecurityGroupStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCredentialsException
 */
const de_InvalidCredentialsException = (output: any, context: __SerdeContext): InvalidCredentialsException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidGlobalReplicationGroupStateFault
 */
const de_InvalidGlobalReplicationGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidGlobalReplicationGroupStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidKMSKeyFault
 */
const de_InvalidKMSKeyFault = (output: any, context: __SerdeContext): InvalidKMSKeyFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterCombinationException
 */
const de_InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidReplicationGroupStateFault
 */
const de_InvalidReplicationGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidReplicationGroupStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidServerlessCacheSnapshotStateFault
 */
const de_InvalidServerlessCacheSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidServerlessCacheSnapshotStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidServerlessCacheStateFault
 */
const de_InvalidServerlessCacheStateFault = (
  output: any,
  context: __SerdeContext
): InvalidServerlessCacheStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSnapshotStateFault
 */
const de_InvalidSnapshotStateFault = (output: any, context: __SerdeContext): InvalidSnapshotStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUserGroupStateFault
 */
const de_InvalidUserGroupStateFault = (output: any, context: __SerdeContext): InvalidUserGroupStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUserStateFault
 */
const de_InvalidUserStateFault = (output: any, context: __SerdeContext): InvalidUserStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidVPCNetworkStateFault
 */
const de_InvalidVPCNetworkStateFault = (output: any, context: __SerdeContext): InvalidVPCNetworkStateFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryKinesisFirehoseDestinationDetails
 */
const de_KinesisFirehoseDestinationDetails = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestinationDetails => {
  const contents: any = {};
  if (output[_DSel] != null) {
    contents[_DSel] = __expectString(output[_DSel]);
  }
  return contents;
};

/**
 * deserializeAws_queryLogDeliveryConfiguration
 */
const de_LogDeliveryConfiguration = (output: any, context: __SerdeContext): LogDeliveryConfiguration => {
  const contents: any = {};
  if (output[_LT] != null) {
    contents[_LT] = __expectString(output[_LT]);
  }
  if (output[_DT] != null) {
    contents[_DT] = __expectString(output[_DT]);
  }
  if (output[_DD] != null) {
    contents[_DD] = de_DestinationDetails(output[_DD], context);
  }
  if (output[_LF] != null) {
    contents[_LF] = __expectString(output[_LF]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryLogDeliveryConfigurationList
 */
const de_LogDeliveryConfigurationList = (output: any, context: __SerdeContext): LogDeliveryConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LogDeliveryConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryModifyCacheClusterResult
 */
const de_ModifyCacheClusterResult = (output: any, context: __SerdeContext): ModifyCacheClusterResult => {
  const contents: any = {};
  if (output[_CCa] != null) {
    contents[_CCa] = de_CacheCluster(output[_CCa], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyCacheSubnetGroupResult
 */
const de_ModifyCacheSubnetGroupResult = (output: any, context: __SerdeContext): ModifyCacheSubnetGroupResult => {
  const contents: any = {};
  if (output[_CSGach] != null) {
    contents[_CSGach] = de_CacheSubnetGroup(output[_CSGach], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyGlobalReplicationGroupResult
 */
const de_ModifyGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyReplicationGroupResult
 */
const de_ModifyReplicationGroupResult = (output: any, context: __SerdeContext): ModifyReplicationGroupResult => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyReplicationGroupShardConfigurationResult
 */
const de_ModifyReplicationGroupShardConfigurationResult = (
  output: any,
  context: __SerdeContext
): ModifyReplicationGroupShardConfigurationResult => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyServerlessCacheResponse
 */
const de_ModifyServerlessCacheResponse = (output: any, context: __SerdeContext): ModifyServerlessCacheResponse => {
  const contents: any = {};
  if (output[_SCe] != null) {
    contents[_SCe] = de_ServerlessCache(output[_SCe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkTypeList
 */
const de_NetworkTypeList = (output: any, context: __SerdeContext): NetworkType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryNodeGroup
 */
const de_NodeGroup = (output: any, context: __SerdeContext): NodeGroup => {
  const contents: any = {};
  if (output[_NGI] != null) {
    contents[_NGI] = __expectString(output[_NGI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_PE] != null) {
    contents[_PE] = de_Endpoint(output[_PE], context);
  }
  if (output[_RE] != null) {
    contents[_RE] = de_Endpoint(output[_RE], context);
  }
  if (output[_Sl] != null) {
    contents[_Sl] = __expectString(output[_Sl]);
  }
  if (String(output.NodeGroupMembers).trim() === "") {
    contents[_NGM] = [];
  } else if (output[_NGM] != null && output[_NGM][_NGMo] != null) {
    contents[_NGM] = de_NodeGroupMemberList(__getArrayIfSingleItem(output[_NGM][_NGMo]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupConfiguration
 */
const de_NodeGroupConfiguration = (output: any, context: __SerdeContext): NodeGroupConfiguration => {
  const contents: any = {};
  if (output[_NGI] != null) {
    contents[_NGI] = __expectString(output[_NGI]);
  }
  if (output[_Sl] != null) {
    contents[_Sl] = __expectString(output[_Sl]);
  }
  if (output[_RCep] != null) {
    contents[_RCep] = __strictParseInt32(output[_RCep]) as number;
  }
  if (output[_PAZri] != null) {
    contents[_PAZri] = __expectString(output[_PAZri]);
  }
  if (String(output.ReplicaAvailabilityZones).trim() === "") {
    contents[_RAZ] = [];
  } else if (output[_RAZ] != null && output[_RAZ][_AZ] != null) {
    contents[_RAZ] = de_AvailabilityZonesList(__getArrayIfSingleItem(output[_RAZ][_AZ]), context);
  }
  if (output[_POAri] != null) {
    contents[_POAri] = __expectString(output[_POAri]);
  }
  if (String(output.ReplicaOutpostArns).trim() === "") {
    contents[_ROA] = [];
  } else if (output[_ROA] != null && output[_ROA][_OA] != null) {
    contents[_ROA] = de_OutpostArnsList(__getArrayIfSingleItem(output[_ROA][_OA]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupList
 */
const de_NodeGroupList = (output: any, context: __SerdeContext): NodeGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeGroup(entry, context);
    });
};

/**
 * deserializeAws_queryNodeGroupMember
 */
const de_NodeGroupMember = (output: any, context: __SerdeContext): NodeGroupMember => {
  const contents: any = {};
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_CNI] != null) {
    contents[_CNI] = __expectString(output[_CNI]);
  }
  if (output[_REe] != null) {
    contents[_REe] = de_Endpoint(output[_REe], context);
  }
  if (output[_PAZr] != null) {
    contents[_PAZr] = __expectString(output[_PAZr]);
  }
  if (output[_POAr] != null) {
    contents[_POAr] = __expectString(output[_POAr]);
  }
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupMemberList
 */
const de_NodeGroupMemberList = (output: any, context: __SerdeContext): NodeGroupMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeGroupMember(entry, context);
    });
};

/**
 * deserializeAws_queryNodeGroupMemberUpdateStatus
 */
const de_NodeGroupMemberUpdateStatus = (output: any, context: __SerdeContext): NodeGroupMemberUpdateStatus => {
  const contents: any = {};
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_CNI] != null) {
    contents[_CNI] = __expectString(output[_CNI]);
  }
  if (output[_NUS] != null) {
    contents[_NUS] = __expectString(output[_NUS]);
  }
  if (output[_NDD] != null) {
    contents[_NDD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NDD]));
  }
  if (output[_NUSD] != null) {
    contents[_NUSD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUSD]));
  }
  if (output[_NUED] != null) {
    contents[_NUED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUED]));
  }
  if (output[_NUIB] != null) {
    contents[_NUIB] = __expectString(output[_NUIB]);
  }
  if (output[_NUID] != null) {
    contents[_NUID] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUID]));
  }
  if (output[_NUSMD] != null) {
    contents[_NUSMD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NUSMD]));
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupMemberUpdateStatusList
 */
const de_NodeGroupMemberUpdateStatusList = (output: any, context: __SerdeContext): NodeGroupMemberUpdateStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeGroupMemberUpdateStatus(entry, context);
    });
};

/**
 * deserializeAws_queryNodeGroupNotFoundFault
 */
const de_NodeGroupNotFoundFault = (output: any, context: __SerdeContext): NodeGroupNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault
 */
const de_NodeGroupsPerReplicationGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): NodeGroupsPerReplicationGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupUpdateStatus
 */
const de_NodeGroupUpdateStatus = (output: any, context: __SerdeContext): NodeGroupUpdateStatus => {
  const contents: any = {};
  if (output[_NGI] != null) {
    contents[_NGI] = __expectString(output[_NGI]);
  }
  if (String(output.NodeGroupMemberUpdateStatus).trim() === "") {
    contents[_NGMUS] = [];
  } else if (output[_NGMUS] != null && output[_NGMUS][_NGMUS] != null) {
    contents[_NGMUS] = de_NodeGroupMemberUpdateStatusList(__getArrayIfSingleItem(output[_NGMUS][_NGMUS]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupUpdateStatusList
 */
const de_NodeGroupUpdateStatusList = (output: any, context: __SerdeContext): NodeGroupUpdateStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeGroupUpdateStatus(entry, context);
    });
};

/**
 * deserializeAws_queryNodeQuotaForClusterExceededFault
 */
const de_NodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeQuotaForCustomerExceededFault
 */
const de_NodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeSnapshot
 */
const de_NodeSnapshot = (output: any, context: __SerdeContext): NodeSnapshot => {
  const contents: any = {};
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_NGI] != null) {
    contents[_NGI] = __expectString(output[_NGI]);
  }
  if (output[_CNI] != null) {
    contents[_CNI] = __expectString(output[_CNI]);
  }
  if (output[_NGC] != null) {
    contents[_NGC] = de_NodeGroupConfiguration(output[_NGC], context);
  }
  if (output[_CSa] != null) {
    contents[_CSa] = __expectString(output[_CSa]);
  }
  if (output[_CNCT] != null) {
    contents[_CNCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CNCT]));
  }
  if (output[_SCT] != null) {
    contents[_SCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SCT]));
  }
  return contents;
};

/**
 * deserializeAws_queryNodeSnapshotList
 */
const de_NodeSnapshotList = (output: any, context: __SerdeContext): NodeSnapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeSnapshot(entry, context);
    });
};

/**
 * deserializeAws_queryNodeTypeList
 */
const de_NodeTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryNoOperationFault
 */
const de_NoOperationFault = (output: any, context: __SerdeContext): NoOperationFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryNotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_TS] != null) {
    contents[_TS] = __expectString(output[_TS]);
  }
  return contents;
};

/**
 * deserializeAws_queryOutpostArnsList
 */
const de_OutpostArnsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryParameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PV] != null) {
    contents[_PV] = __expectString(output[_PV]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_DTa] != null) {
    contents[_DTa] = __expectString(output[_DTa]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __expectString(output[_AV]);
  }
  if (output[_IM] != null) {
    contents[_IM] = __parseBoolean(output[_IM]);
  }
  if (output[_MEVi] != null) {
    contents[_MEVi] = __expectString(output[_MEVi]);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
  }
  return contents;
};

/**
 * deserializeAws_queryParametersList
 */
const de_ParametersList = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Parameter(entry, context);
    });
};

/**
 * deserializeAws_queryPendingLogDeliveryConfiguration
 */
const de_PendingLogDeliveryConfiguration = (output: any, context: __SerdeContext): PendingLogDeliveryConfiguration => {
  const contents: any = {};
  if (output[_LT] != null) {
    contents[_LT] = __expectString(output[_LT]);
  }
  if (output[_DT] != null) {
    contents[_DT] = __expectString(output[_DT]);
  }
  if (output[_DD] != null) {
    contents[_DD] = de_DestinationDetails(output[_DD], context);
  }
  if (output[_LF] != null) {
    contents[_LF] = __expectString(output[_LF]);
  }
  return contents;
};

/**
 * deserializeAws_queryPendingLogDeliveryConfigurationList
 */
const de_PendingLogDeliveryConfigurationList = (
  output: any,
  context: __SerdeContext
): PendingLogDeliveryConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PendingLogDeliveryConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryPendingModifiedValues
 */
const de_PendingModifiedValues = (output: any, context: __SerdeContext): PendingModifiedValues => {
  const contents: any = {};
  if (output[_NCN] != null) {
    contents[_NCN] = __strictParseInt32(output[_NCN]) as number;
  }
  if (String(output.CacheNodeIdsToRemove).trim() === "") {
    contents[_CNITR] = [];
  } else if (output[_CNITR] != null && output[_CNITR][_CNI] != null) {
    contents[_CNITR] = de_CacheNodeIdsList(__getArrayIfSingleItem(output[_CNITR][_CNI]), context);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_ATS] != null) {
    contents[_ATS] = __expectString(output[_ATS]);
  }
  if (String(output.LogDeliveryConfigurations).trim() === "") {
    contents[_LDC] = [];
  } else if (output[_LDC] != null && output[_LDC][_m] != null) {
    contents[_LDC] = de_PendingLogDeliveryConfigurationList(__getArrayIfSingleItem(output[_LDC][_m]), context);
  }
  if (output[_TEE] != null) {
    contents[_TEE] = __parseBoolean(output[_TEE]);
  }
  if (output[_TEM] != null) {
    contents[_TEM] = __expectString(output[_TEM]);
  }
  if (output[_SC] != null) {
    contents[_SC] = de_ScaleConfig(output[_SC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessedUpdateAction
 */
const de_ProcessedUpdateAction = (output: any, context: __SerdeContext): ProcessedUpdateAction => {
  const contents: any = {};
  if (output[_RGIe] != null) {
    contents[_RGIe] = __expectString(output[_RGIe]);
  }
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_SUN] != null) {
    contents[_SUN] = __expectString(output[_SUN]);
  }
  if (output[_UAS] != null) {
    contents[_UAS] = __expectString(output[_UAS]);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessedUpdateActionList
 */
const de_ProcessedUpdateActionList = (output: any, context: __SerdeContext): ProcessedUpdateAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProcessedUpdateAction(entry, context);
    });
};

/**
 * deserializeAws_queryPurchaseReservedCacheNodesOfferingResult
 */
const de_PurchaseReservedCacheNodesOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedCacheNodesOfferingResult => {
  const contents: any = {};
  if (output[_RCN] != null) {
    contents[_RCN] = de_ReservedCacheNode(output[_RCN], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupResult
 */
const de_RebalanceSlotsInGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): RebalanceSlotsInGlobalReplicationGroupResult => {
  const contents: any = {};
  if (output[_GRG] != null) {
    contents[_GRG] = de_GlobalReplicationGroup(output[_GRG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRebootCacheClusterResult
 */
const de_RebootCacheClusterResult = (output: any, context: __SerdeContext): RebootCacheClusterResult => {
  const contents: any = {};
  if (output[_CCa] != null) {
    contents[_CCa] = de_CacheCluster(output[_CCa], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {};
  if (output[_RCA] != null) {
    contents[_RCA] = __strictParseFloat(output[_RCA]) as number;
  }
  if (output[_RCF] != null) {
    contents[_RCF] = __expectString(output[_RCF]);
  }
  return contents;
};

/**
 * deserializeAws_queryRecurringChargeList
 */
const de_RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecurringCharge(entry, context);
    });
};

/**
 * deserializeAws_queryReplicationGroup
 */
const de_ReplicationGroup = (output: any, context: __SerdeContext): ReplicationGroup => {
  const contents: any = {};
  if (output[_RGIe] != null) {
    contents[_RGIe] = __expectString(output[_RGIe]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_GRGIl] != null) {
    contents[_GRGIl] = de_GlobalReplicationGroupInfo(output[_GRGIl], context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_PMV] != null) {
    contents[_PMV] = de_ReplicationGroupPendingModifiedValues(output[_PMV], context);
  }
  if (String(output.MemberClusters).trim() === "") {
    contents[_MC] = [];
  } else if (output[_MC] != null && output[_MC][_CI] != null) {
    contents[_MC] = de_ClusterIdList(__getArrayIfSingleItem(output[_MC][_CI]), context);
  }
  if (String(output.NodeGroups).trim() === "") {
    contents[_NG] = [];
  } else if (output[_NG] != null && output[_NG][_NGo] != null) {
    contents[_NG] = de_NodeGroupList(__getArrayIfSingleItem(output[_NG][_NGo]), context);
  }
  if (output[_SCI] != null) {
    contents[_SCI] = __expectString(output[_SCI]);
  }
  if (output[_AF] != null) {
    contents[_AF] = __expectString(output[_AF]);
  }
  if (output[_MAZ] != null) {
    contents[_MAZ] = __expectString(output[_MAZ]);
  }
  if (output[_CE] != null) {
    contents[_CE] = de_Endpoint(output[_CE], context);
  }
  if (output[_SRL] != null) {
    contents[_SRL] = __strictParseInt32(output[_SRL]) as number;
  }
  if (output[_SW] != null) {
    contents[_SW] = __expectString(output[_SW]);
  }
  if (output[_CEl] != null) {
    contents[_CEl] = __parseBoolean(output[_CEl]);
  }
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_ATE] != null) {
    contents[_ATE] = __parseBoolean(output[_ATE]);
  }
  if (output[_ATLMD] != null) {
    contents[_ATLMD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ATLMD]));
  }
  if (output[_TEE] != null) {
    contents[_TEE] = __parseBoolean(output[_TEE]);
  }
  if (output[_AREE] != null) {
    contents[_AREE] = __parseBoolean(output[_AREE]);
  }
  if (String(output.MemberClustersOutpostArns).trim() === "") {
    contents[_MCOA] = [];
  } else if (output[_MCOA] != null && output[_MCOA][_RGOA] != null) {
    contents[_MCOA] = de_ReplicationGroupOutpostArnList(__getArrayIfSingleItem(output[_MCOA][_RGOA]), context);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (String(output.UserGroupIds).trim() === "") {
    contents[_UGI] = [];
  } else if (output[_UGI] != null && output[_UGI][_m] != null) {
    contents[_UGI] = de_UserGroupIdList(__getArrayIfSingleItem(output[_UGI][_m]), context);
  }
  if (String(output.LogDeliveryConfigurations).trim() === "") {
    contents[_LDC] = [];
  } else if (output[_LDC] != null && output[_LDC][_LDCo] != null) {
    contents[_LDC] = de_LogDeliveryConfigurationList(__getArrayIfSingleItem(output[_LDC][_LDCo]), context);
  }
  if (output[_RGCT] != null) {
    contents[_RGCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RGCT]));
  }
  if (output[_DTat] != null) {
    contents[_DTat] = __expectString(output[_DTat]);
  }
  if (output[_AMVU] != null) {
    contents[_AMVU] = __parseBoolean(output[_AMVU]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_ID] != null) {
    contents[_ID] = __expectString(output[_ID]);
  }
  if (output[_TEM] != null) {
    contents[_TEM] = __expectString(output[_TEM]);
  }
  if (output[_CMl] != null) {
    contents[_CMl] = __expectString(output[_CMl]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  return contents;
};

/**
 * deserializeAws_queryReplicationGroupAlreadyExistsFault
 */
const de_ReplicationGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault
 */
const de_ReplicationGroupAlreadyUnderMigrationFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupAlreadyUnderMigrationFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReplicationGroupList
 */
const de_ReplicationGroupList = (output: any, context: __SerdeContext): ReplicationGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationGroup(entry, context);
    });
};

/**
 * deserializeAws_queryReplicationGroupMessage
 */
const de_ReplicationGroupMessage = (output: any, context: __SerdeContext): ReplicationGroupMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.ReplicationGroups).trim() === "") {
    contents[_RGe] = [];
  } else if (output[_RGe] != null && output[_RGe][_RG] != null) {
    contents[_RGe] = de_ReplicationGroupList(__getArrayIfSingleItem(output[_RGe][_RG]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReplicationGroupNotFoundFault
 */
const de_ReplicationGroupNotFoundFault = (output: any, context: __SerdeContext): ReplicationGroupNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReplicationGroupNotUnderMigrationFault
 */
const de_ReplicationGroupNotUnderMigrationFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupNotUnderMigrationFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReplicationGroupOutpostArnList
 */
const de_ReplicationGroupOutpostArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryReplicationGroupPendingModifiedValues
 */
const de_ReplicationGroupPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): ReplicationGroupPendingModifiedValues => {
  const contents: any = {};
  if (output[_PCI] != null) {
    contents[_PCI] = __expectString(output[_PCI]);
  }
  if (output[_AFS] != null) {
    contents[_AFS] = __expectString(output[_AFS]);
  }
  if (output[_Re] != null) {
    contents[_Re] = de_ReshardingStatus(output[_Re], context);
  }
  if (output[_ATS] != null) {
    contents[_ATS] = __expectString(output[_ATS]);
  }
  if (output[_UG] != null) {
    contents[_UG] = de_UserGroupsUpdateStatus(output[_UG], context);
  }
  if (String(output.LogDeliveryConfigurations).trim() === "") {
    contents[_LDC] = [];
  } else if (output[_LDC] != null && output[_LDC][_m] != null) {
    contents[_LDC] = de_PendingLogDeliveryConfigurationList(__getArrayIfSingleItem(output[_LDC][_m]), context);
  }
  if (output[_TEE] != null) {
    contents[_TEE] = __parseBoolean(output[_TEE]);
  }
  if (output[_TEM] != null) {
    contents[_TEM] = __expectString(output[_TEM]);
  }
  if (output[_CMl] != null) {
    contents[_CMl] = __expectString(output[_CMl]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNode
 */
const de_ReservedCacheNode = (output: any, context: __SerdeContext): ReservedCacheNode => {
  const contents: any = {};
  if (output[_RCNI] != null) {
    contents[_RCNI] = __expectString(output[_RCNI]);
  }
  if (output[_RCNOI] != null) {
    contents[_RCNOI] = __expectString(output[_RCNOI]);
  }
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STt]));
  }
  if (output[_Du] != null) {
    contents[_Du] = __strictParseInt32(output[_Du]) as number;
  }
  if (output[_FP] != null) {
    contents[_FP] = __strictParseFloat(output[_FP]) as number;
  }
  if (output[_UP] != null) {
    contents[_UP] = __strictParseFloat(output[_UP]) as number;
  }
  if (output[_CNC] != null) {
    contents[_CNC] = __strictParseInt32(output[_CNC]) as number;
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  if (output[_OT] != null) {
    contents[_OT] = __expectString(output[_OT]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (String(output.RecurringCharges).trim() === "") {
    contents[_RCec] = [];
  } else if (output[_RCec] != null && output[_RCec][_RCecu] != null) {
    contents[_RCec] = de_RecurringChargeList(__getArrayIfSingleItem(output[_RCec][_RCecu]), context);
  }
  if (output[_RARN] != null) {
    contents[_RARN] = __expectString(output[_RARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodeAlreadyExistsFault
 */
const de_ReservedCacheNodeAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodeList
 */
const de_ReservedCacheNodeList = (output: any, context: __SerdeContext): ReservedCacheNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedCacheNode(entry, context);
    });
};

/**
 * deserializeAws_queryReservedCacheNodeMessage
 */
const de_ReservedCacheNodeMessage = (output: any, context: __SerdeContext): ReservedCacheNodeMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.ReservedCacheNodes).trim() === "") {
    contents[_RCNe] = [];
  } else if (output[_RCNe] != null && output[_RCNe][_RCN] != null) {
    contents[_RCNe] = de_ReservedCacheNodeList(__getArrayIfSingleItem(output[_RCNe][_RCN]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodeNotFoundFault
 */
const de_ReservedCacheNodeNotFoundFault = (output: any, context: __SerdeContext): ReservedCacheNodeNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodeQuotaExceededFault
 */
const de_ReservedCacheNodeQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodesOffering
 */
const de_ReservedCacheNodesOffering = (output: any, context: __SerdeContext): ReservedCacheNodesOffering => {
  const contents: any = {};
  if (output[_RCNOI] != null) {
    contents[_RCNOI] = __expectString(output[_RCNOI]);
  }
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_Du] != null) {
    contents[_Du] = __strictParseInt32(output[_Du]) as number;
  }
  if (output[_FP] != null) {
    contents[_FP] = __strictParseFloat(output[_FP]) as number;
  }
  if (output[_UP] != null) {
    contents[_UP] = __strictParseFloat(output[_UP]) as number;
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  if (output[_OT] != null) {
    contents[_OT] = __expectString(output[_OT]);
  }
  if (String(output.RecurringCharges).trim() === "") {
    contents[_RCec] = [];
  } else if (output[_RCec] != null && output[_RCec][_RCecu] != null) {
    contents[_RCec] = de_RecurringChargeList(__getArrayIfSingleItem(output[_RCec][_RCecu]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodesOfferingList
 */
const de_ReservedCacheNodesOfferingList = (output: any, context: __SerdeContext): ReservedCacheNodesOffering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedCacheNodesOffering(entry, context);
    });
};

/**
 * deserializeAws_queryReservedCacheNodesOfferingMessage
 */
const de_ReservedCacheNodesOfferingMessage = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOfferingMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.ReservedCacheNodesOfferings).trim() === "") {
    contents[_RCNO] = [];
  } else if (output[_RCNO] != null && output[_RCNO][_RCNOe] != null) {
    contents[_RCNO] = de_ReservedCacheNodesOfferingList(__getArrayIfSingleItem(output[_RCNO][_RCNOe]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodesOfferingNotFoundFault
 */
const de_ReservedCacheNodesOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOfferingNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryReshardingStatus
 */
const de_ReshardingStatus = (output: any, context: __SerdeContext): ReshardingStatus => {
  const contents: any = {};
  if (output[_SMl] != null) {
    contents[_SMl] = de_SlotMigration(output[_SMl], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRevokeCacheSecurityGroupIngressResult
 */
const de_RevokeCacheSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): RevokeCacheSecurityGroupIngressResult => {
  const contents: any = {};
  if (output[_CSG] != null) {
    contents[_CSG] = de_CacheSecurityGroup(output[_CSG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryScaleConfig
 */
const de_ScaleConfig = (output: any, context: __SerdeContext): ScaleConfig => {
  const contents: any = {};
  if (output[_SP] != null) {
    contents[_SP] = __strictParseInt32(output[_SP]) as number;
  }
  if (output[_SIM] != null) {
    contents[_SIM] = __strictParseInt32(output[_SIM]) as number;
  }
  return contents;
};

/**
 * deserializeAws_querySecurityGroupIdsList
 */
const de_SecurityGroupIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySecurityGroupMembership
 */
const de_SecurityGroupMembership = (output: any, context: __SerdeContext): SecurityGroupMembership => {
  const contents: any = {};
  if (output[_SGIe] != null) {
    contents[_SGIe] = __expectString(output[_SGIe]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_querySecurityGroupMembershipList
 */
const de_SecurityGroupMembershipList = (output: any, context: __SerdeContext): SecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecurityGroupMembership(entry, context);
    });
};

/**
 * deserializeAws_queryServerlessCache
 */
const de_ServerlessCache = (output: any, context: __SerdeContext): ServerlessCache => {
  const contents: any = {};
  if (output[_SCN] != null) {
    contents[_SCN] = __expectString(output[_SCN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
  }
  if (output[_FEV] != null) {
    contents[_FEV] = __expectString(output[_FEV]);
  }
  if (output[_CUL] != null) {
    contents[_CUL] = de_CacheUsageLimits(output[_CUL], context);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (String(output.SecurityGroupIds).trim() === "") {
    contents[_SGI] = [];
  } else if (output[_SGI] != null && output[_SGI][_SGIe] != null) {
    contents[_SGI] = de_SecurityGroupIdsList(__getArrayIfSingleItem(output[_SGI][_SGIe]), context);
  }
  if (output[_End] != null) {
    contents[_End] = de_Endpoint(output[_End], context);
  }
  if (output[_RE] != null) {
    contents[_RE] = de_Endpoint(output[_RE], context);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_UGIs] != null) {
    contents[_UGIs] = __expectString(output[_UGIs]);
  }
  if (String(output.SubnetIds).trim() === "") {
    contents[_SI] = [];
  } else if (output[_SI] != null && output[_SI][_SIu] != null) {
    contents[_SI] = de_SubnetIdsList(__getArrayIfSingleItem(output[_SI][_SIu]), context);
  }
  if (output[_SRL] != null) {
    contents[_SRL] = __strictParseInt32(output[_SRL]) as number;
  }
  if (output[_DST] != null) {
    contents[_DST] = __expectString(output[_DST]);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheAlreadyExistsFault
 */
const de_ServerlessCacheAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ServerlessCacheAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheConfiguration
 */
const de_ServerlessCacheConfiguration = (output: any, context: __SerdeContext): ServerlessCacheConfiguration => {
  const contents: any = {};
  if (output[_SCN] != null) {
    contents[_SCN] = __expectString(output[_SCN]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheList
 */
const de_ServerlessCacheList = (output: any, context: __SerdeContext): ServerlessCache[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServerlessCache(entry, context);
    });
};

/**
 * deserializeAws_queryServerlessCacheNotFoundFault
 */
const de_ServerlessCacheNotFoundFault = (output: any, context: __SerdeContext): ServerlessCacheNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheQuotaForCustomerExceededFault
 */
const de_ServerlessCacheQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ServerlessCacheQuotaForCustomerExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheSnapshot
 */
const de_ServerlessCacheSnapshot = (output: any, context: __SerdeContext): ServerlessCacheSnapshot => {
  const contents: any = {};
  if (output[_SCSN] != null) {
    contents[_SCSN] = __expectString(output[_SCSN]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_STn] != null) {
    contents[_STn] = __expectString(output[_STn]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_ETx] != null) {
    contents[_ETx] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ETx]));
  }
  if (output[_BUFC] != null) {
    contents[_BUFC] = __expectString(output[_BUFC]);
  }
  if (output[_SCC] != null) {
    contents[_SCC] = de_ServerlessCacheConfiguration(output[_SCC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheSnapshotAlreadyExistsFault
 */
const de_ServerlessCacheSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ServerlessCacheSnapshotAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheSnapshotList
 */
const de_ServerlessCacheSnapshotList = (output: any, context: __SerdeContext): ServerlessCacheSnapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServerlessCacheSnapshot(entry, context);
    });
};

/**
 * deserializeAws_queryServerlessCacheSnapshotNotFoundFault
 */
const de_ServerlessCacheSnapshotNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServerlessCacheSnapshotNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessCacheSnapshotQuotaExceededFault
 */
const de_ServerlessCacheSnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ServerlessCacheSnapshotQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceLinkedRoleNotFoundFault
 */
const de_ServiceLinkedRoleNotFoundFault = (output: any, context: __SerdeContext): ServiceLinkedRoleNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceUpdate
 */
const de_ServiceUpdate = (output: any, context: __SerdeContext): ServiceUpdate => {
  const contents: any = {};
  if (output[_SUN] != null) {
    contents[_SUN] = __expectString(output[_SUN]);
  }
  if (output[_SURD] != null) {
    contents[_SURD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SURD]));
  }
  if (output[_SUED] != null) {
    contents[_SUED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SUED]));
  }
  if (output[_SUSe] != null) {
    contents[_SUSe] = __expectString(output[_SUSe]);
  }
  if (output[_SURABD] != null) {
    contents[_SURABD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SURABD]));
  }
  if (output[_SUS] != null) {
    contents[_SUS] = __expectString(output[_SUS]);
  }
  if (output[_SUD] != null) {
    contents[_SUD] = __expectString(output[_SUD]);
  }
  if (output[_SUT] != null) {
    contents[_SUT] = __expectString(output[_SUT]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_AUARABD] != null) {
    contents[_AUARABD] = __parseBoolean(output[_AUARABD]);
  }
  if (output[_EUT] != null) {
    contents[_EUT] = __expectString(output[_EUT]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceUpdateList
 */
const de_ServiceUpdateList = (output: any, context: __SerdeContext): ServiceUpdate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceUpdate(entry, context);
    });
};

/**
 * deserializeAws_queryServiceUpdateNotFoundFault
 */
const de_ServiceUpdateNotFoundFault = (output: any, context: __SerdeContext): ServiceUpdateNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceUpdatesMessage
 */
const de_ServiceUpdatesMessage = (output: any, context: __SerdeContext): ServiceUpdatesMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.ServiceUpdates).trim() === "") {
    contents[_SU] = [];
  } else if (output[_SU] != null && output[_SU][_SUe] != null) {
    contents[_SU] = de_ServiceUpdateList(__getArrayIfSingleItem(output[_SU][_SUe]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySlotMigration
 */
const de_SlotMigration = (output: any, context: __SerdeContext): SlotMigration => {
  const contents: any = {};
  if (output[_PP] != null) {
    contents[_PP] = __strictParseFloat(output[_PP]) as number;
  }
  return contents;
};

/**
 * deserializeAws_querySnapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  const contents: any = {};
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_RGIe] != null) {
    contents[_RGIe] = __expectString(output[_RGIe]);
  }
  if (output[_RGD] != null) {
    contents[_RGD] = __expectString(output[_RGD]);
  }
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_SSn] != null) {
    contents[_SSn] = __expectString(output[_SSn]);
  }
  if (output[_SS] != null) {
    contents[_SS] = __expectString(output[_SS]);
  }
  if (output[_CNT] != null) {
    contents[_CNT] = __expectString(output[_CNT]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_NCN] != null) {
    contents[_NCN] = __strictParseInt32(output[_NCN]) as number;
  }
  if (output[_PAZr] != null) {
    contents[_PAZr] = __expectString(output[_PAZr]);
  }
  if (output[_POAr] != null) {
    contents[_POAr] = __expectString(output[_POAr]);
  }
  if (output[_CCCT] != null) {
    contents[_CCCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCCT]));
  }
  if (output[_PMW] != null) {
    contents[_PMW] = __expectString(output[_PMW]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __strictParseInt32(output[_Po]) as number;
  }
  if (output[_CPGN] != null) {
    contents[_CPGN] = __expectString(output[_CPGN]);
  }
  if (output[_CSGNa] != null) {
    contents[_CSGNa] = __expectString(output[_CSGNa]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_AMVU] != null) {
    contents[_AMVU] = __parseBoolean(output[_AMVU]);
  }
  if (output[_SRL] != null) {
    contents[_SRL] = __strictParseInt32(output[_SRL]) as number;
  }
  if (output[_SW] != null) {
    contents[_SW] = __expectString(output[_SW]);
  }
  if (output[_NNG] != null) {
    contents[_NNG] = __strictParseInt32(output[_NNG]) as number;
  }
  if (output[_AF] != null) {
    contents[_AF] = __expectString(output[_AF]);
  }
  if (String(output.NodeSnapshots).trim() === "") {
    contents[_NS] = [];
  } else if (output[_NS] != null && output[_NS][_NSo] != null) {
    contents[_NS] = de_NodeSnapshotList(__getArrayIfSingleItem(output[_NS][_NSo]), context);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_DTat] != null) {
    contents[_DTat] = __expectString(output[_DTat]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotAlreadyExistsFault
 */
const de_SnapshotAlreadyExistsFault = (output: any, context: __SerdeContext): SnapshotAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotFeatureNotSupportedFault
 */
const de_SnapshotFeatureNotSupportedFault = (
  output: any,
  context: __SerdeContext
): SnapshotFeatureNotSupportedFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotList
 */
const de_SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Snapshot(entry, context);
    });
};

/**
 * deserializeAws_querySnapshotNotFoundFault
 */
const de_SnapshotNotFoundFault = (output: any, context: __SerdeContext): SnapshotNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotQuotaExceededFault
 */
const de_SnapshotQuotaExceededFault = (output: any, context: __SerdeContext): SnapshotQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryStartMigrationResponse
 */
const de_StartMigrationResponse = (output: any, context: __SerdeContext): StartMigrationResponse => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_querySubnet
 */
const de_Subnet = (output: any, context: __SerdeContext): Subnet => {
  const contents: any = {};
  if (output[_SIub] != null) {
    contents[_SIub] = __expectString(output[_SIub]);
  }
  if (output[_SAZ] != null) {
    contents[_SAZ] = de_AvailabilityZone(output[_SAZ], context);
  }
  if (output[_SO] != null) {
    contents[_SO] = de_SubnetOutpost(output[_SO], context);
  }
  if (String(output.SupportedNetworkTypes).trim() === "") {
    contents[_SNT] = [];
  } else if (output[_SNT] != null && output[_SNT][_m] != null) {
    contents[_SNT] = de_NetworkTypeList(__getArrayIfSingleItem(output[_SNT][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetIdsList
 */
const de_SubnetIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySubnetInUse
 */
const de_SubnetInUse = (output: any, context: __SerdeContext): SubnetInUse => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetList
 */
const de_SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Subnet(entry, context);
    });
};

/**
 * deserializeAws_querySubnetNotAllowedFault
 */
const de_SubnetNotAllowedFault = (output: any, context: __SerdeContext): SubnetNotAllowedFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetOutpost
 */
const de_SubnetOutpost = (output: any, context: __SerdeContext): SubnetOutpost => {
  const contents: any = {};
  if (output[_SOA] != null) {
    contents[_SOA] = __expectString(output[_SOA]);
  }
  return contents;
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTagListMessage
 */
const de_TagListMessage = (output: any, context: __SerdeContext): TagListMessage => {
  const contents: any = {};
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Ta] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTagNotFoundFault
 */
const de_TagNotFoundFault = (output: any, context: __SerdeContext): TagNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagQuotaPerResourceExceeded
 */
const de_TagQuotaPerResourceExceeded = (output: any, context: __SerdeContext): TagQuotaPerResourceExceeded => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTestFailoverNotAvailableFault
 */
const de_TestFailoverNotAvailableFault = (output: any, context: __SerdeContext): TestFailoverNotAvailableFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTestFailoverResult
 */
const de_TestFailoverResult = (output: any, context: __SerdeContext): TestFailoverResult => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryTestMigrationResponse
 */
const de_TestMigrationResponse = (output: any, context: __SerdeContext): TestMigrationResponse => {
  const contents: any = {};
  if (output[_RG] != null) {
    contents[_RG] = de_ReplicationGroup(output[_RG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUGReplicationGroupIdList
 */
const de_UGReplicationGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryUGServerlessCacheIdList
 */
const de_UGServerlessCacheIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryUnprocessedUpdateAction
 */
const de_UnprocessedUpdateAction = (output: any, context: __SerdeContext): UnprocessedUpdateAction => {
  const contents: any = {};
  if (output[_RGIe] != null) {
    contents[_RGIe] = __expectString(output[_RGIe]);
  }
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_SUN] != null) {
    contents[_SUN] = __expectString(output[_SUN]);
  }
  if (output[_ETr] != null) {
    contents[_ETr] = __expectString(output[_ETr]);
  }
  if (output[_EM] != null) {
    contents[_EM] = __expectString(output[_EM]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnprocessedUpdateActionList
 */
const de_UnprocessedUpdateActionList = (output: any, context: __SerdeContext): UnprocessedUpdateAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnprocessedUpdateAction(entry, context);
    });
};

/**
 * deserializeAws_queryUpdateAction
 */
const de_UpdateAction = (output: any, context: __SerdeContext): UpdateAction => {
  const contents: any = {};
  if (output[_RGIe] != null) {
    contents[_RGIe] = __expectString(output[_RGIe]);
  }
  if (output[_CCIa] != null) {
    contents[_CCIa] = __expectString(output[_CCIa]);
  }
  if (output[_SUN] != null) {
    contents[_SUN] = __expectString(output[_SUN]);
  }
  if (output[_SURD] != null) {
    contents[_SURD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SURD]));
  }
  if (output[_SUSe] != null) {
    contents[_SUSe] = __expectString(output[_SUSe]);
  }
  if (output[_SUS] != null) {
    contents[_SUS] = __expectString(output[_SUS]);
  }
  if (output[_SURABD] != null) {
    contents[_SURABD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SURABD]));
  }
  if (output[_SUT] != null) {
    contents[_SUT] = __expectString(output[_SUT]);
  }
  if (output[_UAAD] != null) {
    contents[_UAAD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UAAD]));
  }
  if (output[_UAS] != null) {
    contents[_UAS] = __expectString(output[_UAS]);
  }
  if (output[_NU] != null) {
    contents[_NU] = __expectString(output[_NU]);
  }
  if (output[_UASMD] != null) {
    contents[_UASMD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UASMD]));
  }
  if (output[_SMla] != null) {
    contents[_SMla] = __expectString(output[_SMla]);
  }
  if (String(output.NodeGroupUpdateStatus).trim() === "") {
    contents[_NGUS] = [];
  } else if (output[_NGUS] != null && output[_NGUS][_NGUS] != null) {
    contents[_NGUS] = de_NodeGroupUpdateStatusList(__getArrayIfSingleItem(output[_NGUS][_NGUS]), context);
  }
  if (String(output.CacheNodeUpdateStatus).trim() === "") {
    contents[_CNUS] = [];
  } else if (output[_CNUS] != null && output[_CNUS][_CNUS] != null) {
    contents[_CNUS] = de_CacheNodeUpdateStatusList(__getArrayIfSingleItem(output[_CNUS][_CNUS]), context);
  }
  if (output[_EUT] != null) {
    contents[_EUT] = __expectString(output[_EUT]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateActionList
 */
const de_UpdateActionList = (output: any, context: __SerdeContext): UpdateAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UpdateAction(entry, context);
    });
};

/**
 * deserializeAws_queryUpdateActionResultsMessage
 */
const de_UpdateActionResultsMessage = (output: any, context: __SerdeContext): UpdateActionResultsMessage => {
  const contents: any = {};
  if (String(output.ProcessedUpdateActions).trim() === "") {
    contents[_PUA] = [];
  } else if (output[_PUA] != null && output[_PUA][_PUAr] != null) {
    contents[_PUA] = de_ProcessedUpdateActionList(__getArrayIfSingleItem(output[_PUA][_PUAr]), context);
  }
  if (String(output.UnprocessedUpdateActions).trim() === "") {
    contents[_UUA] = [];
  } else if (output[_UUA] != null && output[_UUA][_UUAn] != null) {
    contents[_UUA] = de_UnprocessedUpdateActionList(__getArrayIfSingleItem(output[_UUA][_UUAn]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateActionsMessage
 */
const de_UpdateActionsMessage = (output: any, context: __SerdeContext): UpdateActionsMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.UpdateActions).trim() === "") {
    contents[_UA] = [];
  } else if (output[_UA] != null && output[_UA][_UAp] != null) {
    contents[_UA] = de_UpdateActionList(__getArrayIfSingleItem(output[_UA][_UAp]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUser
 */
const de_User = (output: any, context: __SerdeContext): User => {
  const contents: any = {};
  if (output[_UIs] != null) {
    contents[_UIs] = __expectString(output[_UIs]);
  }
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_MEVi] != null) {
    contents[_MEVi] = __expectString(output[_MEVi]);
  }
  if (output[_AS] != null) {
    contents[_AS] = __expectString(output[_AS]);
  }
  if (String(output.UserGroupIds).trim() === "") {
    contents[_UGI] = [];
  } else if (output[_UGI] != null && output[_UGI][_m] != null) {
    contents[_UGI] = de_UserGroupIdList(__getArrayIfSingleItem(output[_UGI][_m]), context);
  }
  if (output[_Au] != null) {
    contents[_Au] = de_Authentication(output[_Au], context);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserAlreadyExistsFault
 */
const de_UserAlreadyExistsFault = (output: any, context: __SerdeContext): UserAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroup
 */
const de_UserGroup = (output: any, context: __SerdeContext): UserGroup => {
  const contents: any = {};
  if (output[_UGIs] != null) {
    contents[_UGIs] = __expectString(output[_UGIs]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (String(output.UserIds).trim() === "") {
    contents[_UI] = [];
  } else if (output[_UI] != null && output[_UI][_m] != null) {
    contents[_UI] = de_UserIdList(__getArrayIfSingleItem(output[_UI][_m]), context);
  }
  if (output[_MEVi] != null) {
    contents[_MEVi] = __expectString(output[_MEVi]);
  }
  if (output[_PCe] != null) {
    contents[_PCe] = de_UserGroupPendingChanges(output[_PCe], context);
  }
  if (String(output.ReplicationGroups).trim() === "") {
    contents[_RGe] = [];
  } else if (output[_RGe] != null && output[_RGe][_m] != null) {
    contents[_RGe] = de_UGReplicationGroupIdList(__getArrayIfSingleItem(output[_RGe][_m]), context);
  }
  if (String(output.ServerlessCaches).trim() === "") {
    contents[_SCer] = [];
  } else if (output[_SCer] != null && output[_SCer][_m] != null) {
    contents[_SCer] = de_UGServerlessCacheIdList(__getArrayIfSingleItem(output[_SCer][_m]), context);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupAlreadyExistsFault
 */
const de_UserGroupAlreadyExistsFault = (output: any, context: __SerdeContext): UserGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupIdList
 */
const de_UserGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryUserGroupList
 */
const de_UserGroupList = (output: any, context: __SerdeContext): UserGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserGroup(entry, context);
    });
};

/**
 * deserializeAws_queryUserGroupNotFoundFault
 */
const de_UserGroupNotFoundFault = (output: any, context: __SerdeContext): UserGroupNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupPendingChanges
 */
const de_UserGroupPendingChanges = (output: any, context: __SerdeContext): UserGroupPendingChanges => {
  const contents: any = {};
  if (String(output.UserIdsToRemove).trim() === "") {
    contents[_UITR] = [];
  } else if (output[_UITR] != null && output[_UITR][_m] != null) {
    contents[_UITR] = de_UserIdList(__getArrayIfSingleItem(output[_UITR][_m]), context);
  }
  if (String(output.UserIdsToAdd).trim() === "") {
    contents[_UITA] = [];
  } else if (output[_UITA] != null && output[_UITA][_m] != null) {
    contents[_UITA] = de_UserIdList(__getArrayIfSingleItem(output[_UITA][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupQuotaExceededFault
 */
const de_UserGroupQuotaExceededFault = (output: any, context: __SerdeContext): UserGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupsUpdateStatus
 */
const de_UserGroupsUpdateStatus = (output: any, context: __SerdeContext): UserGroupsUpdateStatus => {
  const contents: any = {};
  if (String(output.UserGroupIdsToAdd).trim() === "") {
    contents[_UGITA] = [];
  } else if (output[_UGITA] != null && output[_UGITA][_m] != null) {
    contents[_UGITA] = de_UserGroupIdList(__getArrayIfSingleItem(output[_UGITA][_m]), context);
  }
  if (String(output.UserGroupIdsToRemove).trim() === "") {
    contents[_UGITR] = [];
  } else if (output[_UGITR] != null && output[_UGITR][_m] != null) {
    contents[_UGITR] = de_UserGroupIdList(__getArrayIfSingleItem(output[_UGITR][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUserIdList
 */
const de_UserIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryUserList
 */
const de_UserList = (output: any, context: __SerdeContext): User[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_User(entry, context);
    });
};

/**
 * deserializeAws_queryUserNotFoundFault
 */
const de_UserNotFoundFault = (output: any, context: __SerdeContext): UserNotFoundFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserQuotaExceededFault
 */
const de_UserQuotaExceededFault = (output: any, context: __SerdeContext): UserQuotaExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const _ = "2015-02-02";
const _A = "Action";
const _AAS = "AppendAccessString";
const _ACSGI = "AuthorizeCacheSecurityGroupIngress";
const _AF = "AutomaticFailover";
const _AFE = "AutomaticFailoverEnabled";
const _AFS = "AutomaticFailoverStatus";
const _AI = "ApplyImmediately";
const _AM = "AuthenticationMode";
const _AMVU = "AutoMinorVersionUpgrade";
const _AREE = "AtRestEncryptionEnabled";
const _ARN = "ARN";
const _AS = "AccessString";
const _AT = "AuthToken";
const _ATE = "AuthTokenEnabled";
const _ATLMD = "AuthTokenLastModifiedDate";
const _ATS = "AuthTokenStatus";
const _ATTR = "AddTagsToResource";
const _ATUS = "AuthTokenUpdateStrategy";
const _AUARABD = "AutoUpdateAfterRecommendedApplyByDate";
const _AV = "AllowedValues";
const _AZ = "AvailabilityZone";
const _AZM = "AZMode";
const _Ad = "Address";
const _Au = "Authentication";
const _BAUA = "BatchApplyUpdateAction";
const _BSUA = "BatchStopUpdateAction";
const _BUFC = "BytesUsedForCache";
const _CAZ = "CustomerAvailabilityZone";
const _CC = "CacheClusters";
const _CCC = "CreateCacheCluster";
const _CCCT = "CacheClusterCreateTime";
const _CCI = "CacheClusterIds";
const _CCIa = "CacheClusterId";
const _CCPG = "CreateCacheParameterGroup";
const _CCS = "CacheClusterStatus";
const _CCSG = "CreateCacheSecurityGroup";
const _CCSGr = "CreateCacheSubnetGroup";
const _CCa = "CacheCluster";
const _CDLP = "ClientDownloadLandingPage";
const _CE = "ConfigurationEndpoint";
const _CED = "CacheEngineDescription";
const _CEV = "CacheEngineVersions";
const _CEVD = "CacheEngineVersionDescription";
const _CEVa = "CacheEngineVersion";
const _CEl = "ClusterEnabled";
const _CGRG = "CreateGlobalReplicationGroup";
const _CI = "ClusterId";
const _CM = "CompleteMigration";
const _CMl = "ClusterMode";
const _CN = "CacheNodes";
const _CNC = "CacheNodeCount";
const _CNCT = "CacheNodeCreateTime";
const _CNEL = "CustomerNodeEndpointList";
const _CNI = "CacheNodeId";
const _CNITR = "CacheNodeIdsToRemove";
const _CNITRa = "CacheNodeIdsToReboot";
const _CNS = "CacheNodeStatus";
const _CNT = "CacheNodeType";
const _CNTSP = "CacheNodeTypeSpecificParameters";
const _CNTSPa = "CacheNodeTypeSpecificParameter";
const _CNTSV = "CacheNodeTypeSpecificValues";
const _CNTSVa = "CacheNodeTypeSpecificValue";
const _CNUS = "CacheNodeUpdateStatus";
const _CNa = "CacheNode";
const _COA = "CustomerOutpostArn";
const _CPG = "CacheParameterGroup";
const _CPGF = "CacheParameterGroupFamily";
const _CPGN = "CacheParameterGroupName";
const _CPGa = "CacheParameterGroups";
const _CR = "CurrentRole";
const _CRG = "CreateReplicationGroup";
const _CS = "CopySnapshot";
const _CSC = "CreateServerlessCache";
const _CSCS = "CopyServerlessCacheSnapshot";
const _CSCSr = "CreateServerlessCacheSnapshot";
const _CSG = "CacheSecurityGroup";
const _CSGD = "CacheSubnetGroupDescription";
const _CSGN = "CacheSecurityGroupName";
const _CSGNa = "CacheSubnetGroupName";
const _CSGNac = "CacheSecurityGroupNames";
const _CSGa = "CacheSecurityGroups";
const _CSGac = "CacheSubnetGroups";
const _CSGach = "CacheSubnetGroup";
const _CSa = "CacheSize";
const _CSr = "CreateSnapshot";
const _CT = "ChangeType";
const _CTr = "CreateTime";
const _CU = "CreateUser";
const _CUG = "CreateUserGroup";
const _CUL = "CacheUsageLimits";
const _CWLD = "CloudWatchLogsDetails";
const _D = "Description";
const _DCC = "DeleteCacheCluster";
const _DCCe = "DescribeCacheClusters";
const _DCEV = "DescribeCacheEngineVersions";
const _DCP = "DescribeCacheParameters";
const _DCPG = "DeleteCacheParameterGroup";
const _DCPGe = "DescribeCacheParameterGroups";
const _DCSG = "DeleteCacheSecurityGroup";
const _DCSGe = "DeleteCacheSubnetGroup";
const _DCSGes = "DescribeCacheSecurityGroups";
const _DCSGesc = "DescribeCacheSubnetGroups";
const _DD = "DestinationDetails";
const _DE = "DescribeEvents";
const _DEDP = "DescribeEngineDefaultParameters";
const _DGRG = "DeleteGlobalReplicationGroup";
const _DGRGe = "DescribeGlobalReplicationGroups";
const _DGRGi = "DisassociateGlobalReplicationGroup";
const _DNGIGRG = "DecreaseNodeGroupsInGlobalReplicationGroup";
const _DO = "DefaultOnly";
const _DRC = "DecreaseReplicaCount";
const _DRCN = "DescribeReservedCacheNodes";
const _DRCNO = "DescribeReservedCacheNodesOfferings";
const _DRG = "DeleteReplicationGroup";
const _DRGe = "DescribeReplicationGroups";
const _DS = "DeleteSnapshot";
const _DSC = "DeleteServerlessCache";
const _DSCS = "DeleteServerlessCacheSnapshot";
const _DSCSe = "DescribeServerlessCacheSnapshots";
const _DSCe = "DescribeServerlessCaches";
const _DST = "DailySnapshotTime";
const _DSU = "DescribeServiceUpdates";
const _DSa = "DataStorage";
const _DSe = "DescribeSnapshots";
const _DSel = "DeliveryStream";
const _DT = "DestinationType";
const _DTE = "DataTieringEnabled";
const _DTa = "DataType";
const _DTat = "DataTiering";
const _DU = "DeleteUser";
const _DUA = "DescribeUpdateActions";
const _DUG = "DeleteUserGroup";
const _DUGe = "DescribeUserGroups";
const _DUe = "DescribeUsers";
const _Da = "Date";
const _Du = "Duration";
const _E = "Engine";
const _ECPUPS = "ECPUPerSecond";
const _ECSG = "EC2SecurityGroups";
const _ECSGN = "EC2SecurityGroupName";
const _ECSGOI = "EC2SecurityGroupOwnerId";
const _ECSGe = "EC2SecurityGroup";
const _ED = "EngineDefaults";
const _EM = "ErrorMessage";
const _ESCS = "ExportServerlessCacheSnapshot";
const _ET = "EndTime";
const _ETr = "ErrorType";
const _ETx = "ExpiryTime";
const _EUT = "EstimatedUpdateTime";
const _EV = "EngineVersion";
const _En = "Enabled";
const _End = "Endpoint";
const _Ev = "Events";
const _Eve = "Event";
const _F = "Force";
const _FEV = "FullEngineVersion";
const _FGRG = "FailoverGlobalReplicationGroup";
const _FP = "FixedPrice";
const _FSI = "FinalSnapshotIdentifier";
const _FSN = "FinalSnapshotName";
const _Fi = "Filters";
const _GNG = "GlobalNodeGroups";
const _GNGI = "GlobalNodeGroupId";
const _GNGTR = "GlobalNodeGroupsToRemove";
const _GNGTRl = "GlobalNodeGroupsToRetain";
const _GNGl = "GlobalNodeGroup";
const _GRG = "GlobalReplicationGroup";
const _GRGD = "GlobalReplicationGroupDescription";
const _GRGI = "GlobalReplicationGroupId";
const _GRGIS = "GlobalReplicationGroupIdSuffix";
const _GRGIl = "GlobalReplicationGroupInfo";
const _GRGM = "GlobalReplicationGroupMember";
const _GRGMR = "GlobalReplicationGroupMemberRole";
const _GRGl = "GlobalReplicationGroups";
const _ID = "IpDiscovery";
const _IG = "IsGlobal";
const _IM = "IsModifiable";
const _INGIGRG = "IncreaseNodeGroupsInGlobalReplicationGroup";
const _IRC = "IncreaseReplicaCount";
const _K = "Key";
const _KFD = "KinesisFirehoseDetails";
const _KKI = "KmsKeyId";
const _LANTM = "ListAllowedNodeTypeModifications";
const _LDC = "LogDeliveryConfigurations";
const _LDCo = "LogDeliveryConfiguration";
const _LF = "LogFormat";
const _LG = "LogGroup";
const _LT = "LogType";
const _LTFR = "ListTagsForResource";
const _M = "Maximum";
const _MAZ = "MultiAZ";
const _MAZE = "MultiAZEnabled";
const _MC = "MemberClusters";
const _MCC = "ModifyCacheCluster";
const _MCOA = "MemberClustersOutpostArns";
const _MCPG = "ModifyCacheParameterGroup";
const _MCSG = "ModifyCacheSubnetGroup";
const _MEV = "MajorEngineVersion";
const _MEVi = "MinimumEngineVersion";
const _MGRG = "ModifyGlobalReplicationGroup";
const _MR = "MaxRecords";
const _MRG = "ModifyReplicationGroup";
const _MRGSC = "ModifyReplicationGroupShardConfiguration";
const _MRa = "MaxResults";
const _MSC = "ModifyServerlessCache";
const _MU = "ModifyUser";
const _MUG = "ModifyUserGroup";
const _Ma = "Marker";
const _Me = "Message";
const _Mem = "Members";
const _Mi = "Minimum";
const _N = "Name";
const _NAZ = "NewAvailabilityZones";
const _NC = "NotificationConfiguration";
const _NCC = "NumCacheClusters";
const _NCN = "NumCacheNodes";
const _NDD = "NodeDeletionDate";
const _NG = "NodeGroups";
const _NGC = "NodeGroupConfiguration";
const _NGCo = "NodeGroupCount";
const _NGI = "NodeGroupId";
const _NGM = "NodeGroupMembers";
const _NGMUS = "NodeGroupMemberUpdateStatus";
const _NGMo = "NodeGroupMember";
const _NGTR = "NodeGroupsToRemove";
const _NGTRo = "NodeGroupsToRetain";
const _NGUS = "NodeGroupUpdateStatus";
const _NGo = "NodeGroup";
const _NNG = "NumNodeGroups";
const _NPR = "NoPasswordRequired";
const _NRC = "NewReplicaCount";
const _NS = "NodeSnapshots";
const _NSo = "NodeSnapshot";
const _NT = "NetworkType";
const _NTA = "NotificationTopicArn";
const _NTS = "NotificationTopicStatus";
const _NTe = "NextToken";
const _NU = "NodesUpdated";
const _NUED = "NodeUpdateEndDate";
const _NUIB = "NodeUpdateInitiatedBy";
const _NUID = "NodeUpdateInitiatedDate";
const _NUS = "NodeUpdateStatus";
const _NUSD = "NodeUpdateStartDate";
const _NUSMD = "NodeUpdateStatusModifiedDate";
const _OA = "OutpostArn";
const _OI = "OwnerId";
const _OM = "OutpostMode";
const _OT = "OfferingType";
const _P = "Passwords";
const _PAS = "ParameterApplyStatus";
const _PAZ = "PreferredAvailabilityZones";
const _PAZr = "PreferredAvailabilityZone";
const _PAZri = "PrimaryAvailabilityZone";
const _PC = "PasswordCount";
const _PCCAZ = "PreferredCacheClusterAZs";
const _PCI = "PrimaryClusterId";
const _PCe = "PendingChanges";
const _PD = "ProductDescription";
const _PE = "PrimaryEndpoint";
const _PGS = "ParameterGroupStatus";
const _PMV = "PendingModifiedValues";
const _PMW = "PreferredMaintenanceWindow";
const _PN = "ParameterName";
const _PNV = "ParameterNameValues";
const _POA = "PreferredOutpostArns";
const _POAr = "PreferredOutpostArn";
const _POAri = "PrimaryOutpostArn";
const _PP = "ProgressPercentage";
const _PR = "PrimaryRegion";
const _PRCNO = "PurchaseReservedCacheNodesOffering";
const _PRGI = "PrimaryReplicationGroupId";
const _PUA = "ProcessedUpdateActions";
const _PUAr = "ProcessedUpdateAction";
const _PV = "ParameterValue";
const _Pa = "Parameters";
const _Par = "Parameter";
const _Po = "Port";
const _R = "Role";
const _RAP = "ResetAllParameters";
const _RARN = "ReservationARN";
const _RAZ = "ReplicaAvailabilityZones";
const _RC = "ReplicaConfiguration";
const _RCA = "RecurringChargeAmount";
const _RCC = "RebootCacheCluster";
const _RCF = "RecurringChargeFrequency";
const _RCN = "ReservedCacheNode";
const _RCNI = "ReservedCacheNodeId";
const _RCNO = "ReservedCacheNodesOfferings";
const _RCNOI = "ReservedCacheNodesOfferingId";
const _RCNOe = "ReservedCacheNodesOffering";
const _RCNe = "ReservedCacheNodes";
const _RCPG = "ResetCacheParameterGroup";
const _RCSGI = "RevokeCacheSecurityGroupIngress";
const _RCe = "RegionalConfigurations";
const _RCec = "RecurringCharges";
const _RCecu = "RecurringCharge";
const _RCep = "ReplicaCount";
const _RCes = "ReshardingConfiguration";
const _RE = "ReaderEndpoint";
const _REe = "ReadEndpoint";
const _RG = "ReplicationGroup";
const _RGCT = "ReplicationGroupCreateTime";
const _RGD = "ReplicationGroupDescription";
const _RGI = "ReplicationGroupIds";
const _RGIe = "ReplicationGroupId";
const _RGLDE = "ReplicationGroupLogDeliveryEnabled";
const _RGOA = "ReplicationGroupOutpostArn";
const _RGR = "ReplicationGroupRegion";
const _RGe = "ReplicationGroups";
const _RN = "ResourceName";
const _ROA = "ReplicaOutpostArns";
const _RPC = "RetainPrimaryCluster";
const _RPNG = "ReplicasPerNodeGroup";
const _RPRG = "RetainPrimaryReplicationGroup";
const _RSIGRG = "RebalanceSlotsInGlobalReplicationGroup";
const _RTFR = "RemoveTagsFromResource";
const _RTR = "ReplicasToRemove";
const _RUG = "RemoveUserGroups";
const _RUGe = "RemoveUserGroup";
const _Re = "Resharding";
const _S = "Source";
const _SA = "SnapshotArns";
const _SATR = "SnapshotArnsToRestore";
const _SAZ = "SubnetAvailabilityZone";
const _SBN = "S3BucketName";
const _SC = "ScaleConfig";
const _SCC = "ServerlessCacheConfiguration";
const _SCCNIRG = "ShowCacheClustersNotInReplicationGroups";
const _SCI = "SnapshottingClusterId";
const _SCN = "ServerlessCacheName";
const _SCNI = "ShowCacheNodeInfo";
const _SCNIo = "SourceCacheNodeId";
const _SCS = "ServerlessCacheSnapshot";
const _SCSN = "ServerlessCacheSnapshotName";
const _SCSe = "ServerlessCacheSnapshots";
const _SCT = "SnapshotCreateTime";
const _SCe = "ServerlessCache";
const _SCer = "ServerlessCaches";
const _SDM = "ScaleDownModifications";
const _SG = "SecurityGroups";
const _SGI = "SecurityGroupIds";
const _SGIe = "SecurityGroupId";
const _SI = "SubnetIds";
const _SIM = "ScaleIntervalMinutes";
const _SIo = "SourceIdentifier";
const _SIu = "SubnetId";
const _SIub = "SubnetIdentifier";
const _SM = "StartMigration";
const _SMI = "ShowMemberInfo";
const _SMl = "SlotMigration";
const _SMla = "SlaMet";
const _SN = "SnapshotName";
const _SNGC = "ShowNodeGroupConfig";
const _SNLUS = "ShowNodeLevelUpdateStatus";
const _SNT = "SupportedNetworkTypes";
const _SO = "SubnetOutpost";
const _SOA = "SubnetOutpostArn";
const _SP = "ScalePercentage";
const _SRL = "SnapshotRetentionLimit";
const _SS = "SnapshotSource";
const _SSCSN = "SourceServerlessCacheSnapshotName";
const _SSN = "SourceSnapshotName";
const _SSn = "SnapshotStatus";
const _ST = "SourceType";
const _STn = "SnapshotType";
const _STt = "StartTime";
const _SU = "ServiceUpdates";
const _SUD = "ServiceUpdateDescription";
const _SUED = "ServiceUpdateEndDate";
const _SUM = "ScaleUpModifications";
const _SUN = "ServiceUpdateName";
const _SURABD = "ServiceUpdateRecommendedApplyByDate";
const _SURD = "ServiceUpdateReleaseDate";
const _SUS = "ServiceUpdateStatus";
const _SUSe = "ServiceUpdateSeverity";
const _SUT = "ServiceUpdateType";
const _SUTR = "ServiceUpdateTimeRange";
const _SUe = "ServiceUpdate";
const _SW = "SnapshotWindow";
const _Sl = "Slots";
const _Sn = "Snapshot";
const _Sna = "Snapshots";
const _St = "Status";
const _Sta = "State";
const _Su = "Subnets";
const _Sub = "Subnet";
const _T = "Tags";
const _TA = "TopicArn";
const _TB = "TargetBucket";
const _TEE = "TransitEncryptionEnabled";
const _TEM = "TransitEncryptionMode";
const _TF = "TestFailover";
const _TK = "TagKeys";
const _TL = "TagList";
const _TM = "TestMigration";
const _TS = "TopicStatus";
const _TSCSN = "TargetServerlessCacheSnapshotName";
const _TSN = "TargetSnapshotName";
const _Ta = "Tag";
const _Ty = "Type";
const _U = "Unit";
const _UA = "UpdateActions";
const _UAAD = "UpdateActionAvailableDate";
const _UAS = "UpdateActionStatus";
const _UASMD = "UpdateActionStatusModifiedDate";
const _UAp = "UpdateAction";
const _UG = "UserGroups";
const _UGI = "UserGroupIds";
const _UGITA = "UserGroupIdsToAdd";
const _UGITR = "UserGroupIdsToRemove";
const _UGIs = "UserGroupId";
const _UI = "UserIds";
const _UITA = "UserIdsToAdd";
const _UITR = "UserIdsToRemove";
const _UIs = "UserId";
const _UN = "UserName";
const _UP = "UsagePrice";
const _UUA = "UnprocessedUpdateActions";
const _UUAn = "UnprocessedUpdateAction";
const _Us = "Users";
const _V = "Version";
const _VI = "VpcId";
const _Va = "Values";
const _Val = "Value";
const _m = "member";
const _me = "message";

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
