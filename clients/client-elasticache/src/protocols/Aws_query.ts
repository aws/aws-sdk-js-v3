// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
import { XMLParser } from "fast-xml-parser";

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
  APICallRateForCustomerExceededFault,
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
  CloudWatchLogsDestinationDetails,
  ClusterQuotaForCustomerExceededFault,
  CompleteMigrationMessage,
  CompleteMigrationResponse,
  ConfigureShard,
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
  CreateSnapshotMessage,
  CreateSnapshotResult,
  CreateUserGroupMessage,
  CreateUserMessage,
  CustomerNodeEndpoint,
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
  Endpoint,
  EngineDefaults,
  Event,
  EventsMessage,
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
  InvalidGlobalReplicationGroupStateFault,
  InvalidKMSKeyFault,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  InvalidReplicationGroupStateFault,
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
  ModifyUserGroupMessage,
  ModifyUserMessage,
  NetworkType,
  NodeGroup,
  NodeGroupConfiguration,
  NodeGroupMember,
  NodeGroupMemberUpdateStatus,
  NodeGroupNotFoundFault,
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
  ReplicationGroupAlreadyUnderMigrationFault,
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
  RevokeCacheSecurityGroupIngressResult,
  SecurityGroupMembership,
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
  StartMigrationMessage,
  StartMigrationResponse,
  Subnet,
  SubnetInUse,
  SubnetNotAllowedFault,
  SubnetOutpost,
  Tag,
  TagListMessage,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TestFailoverMessage,
  TestFailoverNotAvailableFault,
  TestFailoverResult,
  TestMigrationMessage,
  TestMigrationResponse,
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
    Action: "AddTagsToResource",
    Version: "2015-02-02",
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
    Action: "AuthorizeCacheSecurityGroupIngress",
    Version: "2015-02-02",
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
    Action: "BatchApplyUpdateAction",
    Version: "2015-02-02",
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
    Action: "BatchStopUpdateAction",
    Version: "2015-02-02",
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
    Action: "CompleteMigration",
    Version: "2015-02-02",
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
    Action: "CopySnapshot",
    Version: "2015-02-02",
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
    Action: "CreateCacheCluster",
    Version: "2015-02-02",
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
    Action: "CreateCacheParameterGroup",
    Version: "2015-02-02",
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
    Action: "CreateCacheSecurityGroup",
    Version: "2015-02-02",
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
    Action: "CreateCacheSubnetGroup",
    Version: "2015-02-02",
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
    Action: "CreateGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "CreateReplicationGroup",
    Version: "2015-02-02",
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
    Action: "CreateSnapshot",
    Version: "2015-02-02",
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
    Action: "CreateUser",
    Version: "2015-02-02",
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
    Action: "CreateUserGroup",
    Version: "2015-02-02",
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
    Action: "DecreaseNodeGroupsInGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "DecreaseReplicaCount",
    Version: "2015-02-02",
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
    Action: "DeleteCacheCluster",
    Version: "2015-02-02",
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
    Action: "DeleteCacheParameterGroup",
    Version: "2015-02-02",
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
    Action: "DeleteCacheSecurityGroup",
    Version: "2015-02-02",
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
    Action: "DeleteCacheSubnetGroup",
    Version: "2015-02-02",
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
    Action: "DeleteGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "DeleteReplicationGroup",
    Version: "2015-02-02",
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
    Action: "DeleteSnapshot",
    Version: "2015-02-02",
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
    Action: "DeleteUser",
    Version: "2015-02-02",
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
    Action: "DeleteUserGroup",
    Version: "2015-02-02",
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
    Action: "DescribeCacheClusters",
    Version: "2015-02-02",
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
    Action: "DescribeCacheEngineVersions",
    Version: "2015-02-02",
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
    Action: "DescribeCacheParameterGroups",
    Version: "2015-02-02",
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
    Action: "DescribeCacheParameters",
    Version: "2015-02-02",
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
    Action: "DescribeCacheSecurityGroups",
    Version: "2015-02-02",
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
    Action: "DescribeCacheSubnetGroups",
    Version: "2015-02-02",
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
    Action: "DescribeEngineDefaultParameters",
    Version: "2015-02-02",
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
    Action: "DescribeEvents",
    Version: "2015-02-02",
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
    Action: "DescribeGlobalReplicationGroups",
    Version: "2015-02-02",
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
    Action: "DescribeReplicationGroups",
    Version: "2015-02-02",
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
    Action: "DescribeReservedCacheNodes",
    Version: "2015-02-02",
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
    Action: "DescribeReservedCacheNodesOfferings",
    Version: "2015-02-02",
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
    Action: "DescribeServiceUpdates",
    Version: "2015-02-02",
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
    Action: "DescribeSnapshots",
    Version: "2015-02-02",
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
    Action: "DescribeUpdateActions",
    Version: "2015-02-02",
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
    Action: "DescribeUserGroups",
    Version: "2015-02-02",
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
    Action: "DescribeUsers",
    Version: "2015-02-02",
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
    Action: "DisassociateGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "FailoverGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "IncreaseNodeGroupsInGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "IncreaseReplicaCount",
    Version: "2015-02-02",
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
    Action: "ListAllowedNodeTypeModifications",
    Version: "2015-02-02",
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
    Action: "ListTagsForResource",
    Version: "2015-02-02",
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
    Action: "ModifyCacheCluster",
    Version: "2015-02-02",
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
    Action: "ModifyCacheParameterGroup",
    Version: "2015-02-02",
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
    Action: "ModifyCacheSubnetGroup",
    Version: "2015-02-02",
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
    Action: "ModifyGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "ModifyReplicationGroup",
    Version: "2015-02-02",
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
    Action: "ModifyReplicationGroupShardConfiguration",
    Version: "2015-02-02",
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
    Action: "ModifyUser",
    Version: "2015-02-02",
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
    Action: "ModifyUserGroup",
    Version: "2015-02-02",
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
    Action: "PurchaseReservedCacheNodesOffering",
    Version: "2015-02-02",
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
    Action: "RebalanceSlotsInGlobalReplicationGroup",
    Version: "2015-02-02",
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
    Action: "RebootCacheCluster",
    Version: "2015-02-02",
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
    Action: "RemoveTagsFromResource",
    Version: "2015-02-02",
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
    Action: "ResetCacheParameterGroup",
    Version: "2015-02-02",
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
    Action: "RevokeCacheSecurityGroupIngress",
    Version: "2015-02-02",
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
    Action: "StartMigration",
    Version: "2015-02-02",
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
    Action: "TestFailover",
    Version: "2015-02-02",
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
    Action: "TestMigration",
    Version: "2015-02-02",
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
    return de_AddTagsToResourceCommandError(output, context);
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
 * deserializeAws_queryAddTagsToResourceCommandError
 */
const de_AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
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
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await de_ReservedCacheNodeNotFoundFaultRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand
 */
export const de_AuthorizeCacheSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AuthorizeCacheSecurityGroupIngressCommandError(output, context);
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
 * deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError
 */
const de_AuthorizeCacheSecurityGroupIngressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationAlreadyExists":
    case "com.amazonaws.elasticache#AuthorizationAlreadyExistsFault":
      throw await de_AuthorizationAlreadyExistsFaultRes(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await de_CacheSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await de_InvalidCacheSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBatchApplyUpdateActionCommand
 */
export const de_BatchApplyUpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchApplyUpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchApplyUpdateActionCommandError(output, context);
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
 * deserializeAws_queryBatchApplyUpdateActionCommandError
 */
const de_BatchApplyUpdateActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchApplyUpdateActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
      throw await de_ServiceUpdateNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBatchStopUpdateActionCommand
 */
export const de_BatchStopUpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopUpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchStopUpdateActionCommandError(output, context);
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
 * deserializeAws_queryBatchStopUpdateActionCommandError
 */
const de_BatchStopUpdateActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopUpdateActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
      throw await de_ServiceUpdateNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCompleteMigrationCommand
 */
export const de_CompleteMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CompleteMigrationCommandError(output, context);
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
 * deserializeAws_queryCompleteMigrationCommandError
 */
const de_CompleteMigrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMigrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "ReplicationGroupNotUnderMigrationFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotUnderMigrationFault":
      throw await de_ReplicationGroupNotUnderMigrationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCopySnapshotCommand
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
  contents = de_CopySnapshotResult(data.CopySnapshotResult, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopySnapshotCommandError
 */
const de_CopySnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidSnapshotState":
    case "com.amazonaws.elasticache#InvalidSnapshotStateFault":
      throw await de_InvalidSnapshotStateFaultRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateCacheClusterCommand
 */
export const de_CreateCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCacheClusterCommandError(output, context);
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
 * deserializeAws_queryCreateCacheClusterCommandError
 */
const de_CreateCacheClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterAlreadyExists":
    case "com.amazonaws.elasticache#CacheClusterAlreadyExistsFault":
      throw await de_CacheClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await de_CacheParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await de_CacheSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await de_CacheSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateCacheParameterGroupCommand
 */
export const de_CreateCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCacheParameterGroupCommandError(output, context);
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
 * deserializeAws_queryCreateCacheParameterGroupCommandError
 */
const de_CreateCacheParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheParameterGroupAlreadyExists":
    case "com.amazonaws.elasticache#CacheParameterGroupAlreadyExistsFault":
      throw await de_CacheParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "CacheParameterGroupQuotaExceeded":
    case "com.amazonaws.elasticache#CacheParameterGroupQuotaExceededFault":
      throw await de_CacheParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await de_InvalidCacheParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateCacheSecurityGroupCommand
 */
export const de_CreateCacheSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCacheSecurityGroupCommandError(output, context);
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
 * deserializeAws_queryCreateCacheSecurityGroupCommandError
 */
const de_CreateCacheSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSecurityGroupAlreadyExists":
    case "com.amazonaws.elasticache#CacheSecurityGroupAlreadyExistsFault":
      throw await de_CacheSecurityGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "QuotaExceeded.CacheSecurityGroup":
    case "com.amazonaws.elasticache#CacheSecurityGroupQuotaExceededFault":
      throw await de_CacheSecurityGroupQuotaExceededFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateCacheSubnetGroupCommand
 */
export const de_CreateCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCacheSubnetGroupCommandError(output, context);
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
 * deserializeAws_queryCreateCacheSubnetGroupCommandError
 */
const de_CreateCacheSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateGlobalReplicationGroupCommand
 */
export const de_CreateGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryCreateGlobalReplicationGroupCommandError
 */
const de_CreateGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupAlreadyExistsFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupAlreadyExistsFault":
      throw await de_GlobalReplicationGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateReplicationGroupCommand
 */
export const de_CreateReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryCreateReplicationGroupCommandError
 */
const de_CreateReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationGroupCommandOutput> => {
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
    case "ClusterQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await de_InvalidUserGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await de_NodeGroupsPerReplicationGroupQuotaExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ReplicationGroupAlreadyExists":
    case "com.amazonaws.elasticache#ReplicationGroupAlreadyExistsFault":
      throw await de_ReplicationGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateSnapshotCommand
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
  contents = de_CreateSnapshotResult(data.CreateSnapshotResult, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateSnapshotCommandError
 */
const de_CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFound":
    case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
      throw await de_CacheClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotFeatureNotSupportedFault":
    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
      throw await de_SnapshotFeatureNotSupportedFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateUserCommand
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
  contents = de_User(data.CreateUserResult, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateUserName":
    case "com.amazonaws.elasticache#DuplicateUserNameFault":
      throw await de_DuplicateUserNameFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    case "UserAlreadyExists":
    case "com.amazonaws.elasticache#UserAlreadyExistsFault":
      throw await de_UserAlreadyExistsFaultRes(parsedOutput, context);
    case "UserQuotaExceeded":
    case "com.amazonaws.elasticache#UserQuotaExceededFault":
      throw await de_UserQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateUserGroupCommand
 */
export const de_CreateUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserGroupCommandError(output, context);
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
 * deserializeAws_queryCreateUserGroupCommandError
 */
const de_CreateUserGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DefaultUserRequired":
    case "com.amazonaws.elasticache#DefaultUserRequired":
      throw await de_DefaultUserRequiredRes(parsedOutput, context);
    case "DuplicateUserName":
    case "com.amazonaws.elasticache#DuplicateUserNameFault":
      throw await de_DuplicateUserNameFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    case "UserGroupAlreadyExists":
    case "com.amazonaws.elasticache#UserGroupAlreadyExistsFault":
      throw await de_UserGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "UserGroupQuotaExceeded":
    case "com.amazonaws.elasticache#UserGroupQuotaExceededFault":
      throw await de_UserGroupQuotaExceededFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand
 */
export const de_DecreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DecreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommandError
 */
const de_DecreaseNodeGroupsInGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDecreaseReplicaCountCommand
 */
export const de_DecreaseReplicaCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicaCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DecreaseReplicaCountCommandError(output, context);
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
 * deserializeAws_queryDecreaseReplicaCountCommandError
 */
const de_DecreaseReplicaCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicaCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NoOperationFault":
    case "com.amazonaws.elasticache#NoOperationFault":
      throw await de_NoOperationFaultRes(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await de_NodeGroupsPerReplicationGroupQuotaExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteCacheClusterCommand
 */
export const de_DeleteCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCacheClusterCommandError(output, context);
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
 * deserializeAws_queryDeleteCacheClusterCommandError
 */
const de_DeleteCacheClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFound":
    case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
      throw await de_CacheClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotFeatureNotSupportedFault":
    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
      throw await de_SnapshotFeatureNotSupportedFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteCacheParameterGroupCommand
 */
export const de_DeleteCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCacheParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCacheParameterGroupCommandError
 */
const de_DeleteCacheParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await de_CacheParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await de_InvalidCacheParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteCacheSecurityGroupCommand
 */
export const de_DeleteCacheSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCacheSecurityGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCacheSecurityGroupCommandError
 */
const de_DeleteCacheSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await de_CacheSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await de_InvalidCacheSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteCacheSubnetGroupCommand
 */
export const de_DeleteCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCacheSubnetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCacheSubnetGroupCommandError
 */
const de_DeleteCacheSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSubnetGroupInUse":
    case "com.amazonaws.elasticache#CacheSubnetGroupInUse":
      throw await de_CacheSubnetGroupInUseRes(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await de_CacheSubnetGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteGlobalReplicationGroupCommand
 */
export const de_DeleteGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryDeleteGlobalReplicationGroupCommandError
 */
const de_DeleteGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteReplicationGroupCommand
 */
export const de_DeleteReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryDeleteReplicationGroupCommandError
 */
const de_DeleteReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await de_SnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotFeatureNotSupportedFault":
    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
      throw await de_SnapshotFeatureNotSupportedFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteSnapshotCommand
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
  contents = de_DeleteSnapshotResult(data.DeleteSnapshotResult, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSnapshotCommandError
 */
const de_DeleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidSnapshotState":
    case "com.amazonaws.elasticache#InvalidSnapshotStateFault":
      throw await de_InvalidSnapshotStateFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteUserCommand
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
  contents = de_User(data.DeleteUserResult, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DefaultUserAssociatedToUserGroup":
    case "com.amazonaws.elasticache#DefaultUserAssociatedToUserGroupFault":
      throw await de_DefaultUserAssociatedToUserGroupFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidUserState":
    case "com.amazonaws.elasticache#InvalidUserStateFault":
      throw await de_InvalidUserStateFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteUserGroupCommand
 */
export const de_DeleteUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserGroupCommandError(output, context);
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
 * deserializeAws_queryDeleteUserGroupCommandError
 */
const de_DeleteUserGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await de_InvalidUserGroupStateFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeCacheClustersCommand
 */
export const de_DescribeCacheClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCacheClustersCommandError(output, context);
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
 * deserializeAws_queryDescribeCacheClustersCommandError
 */
const de_DescribeCacheClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFound":
    case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
      throw await de_CacheClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeCacheEngineVersionsCommand
 */
export const de_DescribeCacheEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCacheEngineVersionsCommandError(output, context);
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
 * deserializeAws_queryDescribeCacheEngineVersionsCommandError
 */
const de_DescribeCacheEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheEngineVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeCacheParameterGroupsCommand
 */
export const de_DescribeCacheParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCacheParameterGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeCacheParameterGroupsCommandError
 */
const de_DescribeCacheParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await de_CacheParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeCacheParametersCommand
 */
export const de_DescribeCacheParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCacheParametersCommandError(output, context);
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
 * deserializeAws_queryDescribeCacheParametersCommandError
 */
const de_DescribeCacheParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await de_CacheParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeCacheSecurityGroupsCommand
 */
export const de_DescribeCacheSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCacheSecurityGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeCacheSecurityGroupsCommandError
 */
const de_DescribeCacheSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await de_CacheSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeCacheSubnetGroupsCommand
 */
export const de_DescribeCacheSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCacheSubnetGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeCacheSubnetGroupsCommandError
 */
const de_DescribeCacheSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSubnetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await de_CacheSubnetGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeEngineDefaultParametersCommand
 */
export const de_DescribeEngineDefaultParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEngineDefaultParametersCommandError(output, context);
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
 * deserializeAws_queryDescribeEngineDefaultParametersCommandError
 */
const de_DescribeEngineDefaultParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeEventsCommand
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
  contents = de_EventsMessage(data.DescribeEventsResult, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeGlobalReplicationGroupsCommand
 */
export const de_DescribeGlobalReplicationGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalReplicationGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGlobalReplicationGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeGlobalReplicationGroupsCommandError
 */
const de_DescribeGlobalReplicationGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalReplicationGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeReplicationGroupsCommand
 */
export const de_DescribeReplicationGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeReplicationGroupsCommandError
 */
const de_DescribeReplicationGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeReservedCacheNodesCommand
 */
export const de_DescribeReservedCacheNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedCacheNodesCommandError(output, context);
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
 * deserializeAws_queryDescribeReservedCacheNodesCommandError
 */
const de_DescribeReservedCacheNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await de_ReservedCacheNodeNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand
 */
export const de_DescribeReservedCacheNodesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedCacheNodesOfferingsCommandError(output, context);
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
 * deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError
 */
const de_DescribeReservedCacheNodesOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReservedCacheNodesOfferingNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault":
      throw await de_ReservedCacheNodesOfferingNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeServiceUpdatesCommand
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
  contents = de_ServiceUpdatesMessage(data.DescribeServiceUpdatesResult, context);
  const response: DescribeServiceUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeServiceUpdatesCommandError
 */
const de_DescribeServiceUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
      throw await de_ServiceUpdateNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeSnapshotsCommand
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
  contents = de_DescribeSnapshotsListMessage(data.DescribeSnapshotsResult, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSnapshotsCommandError
 */
const de_DescribeSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFound":
    case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
      throw await de_CacheClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeUpdateActionsCommand
 */
export const de_DescribeUpdateActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUpdateActionsCommandError(output, context);
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
 * deserializeAws_queryDescribeUpdateActionsCommandError
 */
const de_DescribeUpdateActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeUserGroupsCommand
 */
export const de_DescribeUserGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeUserGroupsCommandError
 */
const de_DescribeUserGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeUsersCommand
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
  contents = de_DescribeUsersResult(data.DescribeUsersResult, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeUsersCommandError
 */
const de_DescribeUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDisassociateGlobalReplicationGroupCommand
 */
export const de_DisassociateGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryDisassociateGlobalReplicationGroupCommandError
 */
const de_DisassociateGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryFailoverGlobalReplicationGroupCommand
 */
export const de_FailoverGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FailoverGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryFailoverGlobalReplicationGroupCommandError
 */
const de_FailoverGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand
 */
export const de_IncreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IncreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommandError
 */
const de_IncreaseNodeGroupsInGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryIncreaseReplicaCountCommand
 */
export const de_IncreaseReplicaCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicaCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IncreaseReplicaCountCommandError(output, context);
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
 * deserializeAws_queryIncreaseReplicaCountCommandError
 */
const de_IncreaseReplicaCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicaCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await de_InvalidKMSKeyFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NoOperationFault":
    case "com.amazonaws.elasticache#NoOperationFault":
      throw await de_NoOperationFaultRes(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await de_NodeGroupsPerReplicationGroupQuotaExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListAllowedNodeTypeModificationsCommand
 */
export const de_ListAllowedNodeTypeModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAllowedNodeTypeModificationsCommandError(output, context);
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
 * deserializeAws_queryListAllowedNodeTypeModificationsCommandError
 */
const de_ListAllowedNodeTypeModificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeModificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFound":
    case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
      throw await de_CacheClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListTagsForResourceCommand
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
  contents = de_TagListMessage(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await de_ReservedCacheNodeNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyCacheClusterCommand
 */
export const de_ModifyCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCacheClusterCommandError(output, context);
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
 * deserializeAws_queryModifyCacheClusterCommandError
 */
const de_ModifyCacheClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheClusterCommandOutput> => {
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
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await de_InvalidCacheSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyCacheParameterGroupCommand
 */
export const de_ModifyCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCacheParameterGroupCommandError(output, context);
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
 * deserializeAws_queryModifyCacheParameterGroupCommandError
 */
const de_ModifyCacheParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await de_CacheParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await de_InvalidCacheParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyCacheSubnetGroupCommand
 */
export const de_ModifyCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCacheSubnetGroupCommandError(output, context);
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
 * deserializeAws_queryModifyCacheSubnetGroupCommandError
 */
const de_ModifyCacheSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await de_CacheSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "CacheSubnetQuotaExceededFault":
    case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault":
      throw await de_CacheSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticache#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "SubnetInUse":
    case "com.amazonaws.elasticache#SubnetInUse":
      throw await de_SubnetInUseRes(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.elasticache#SubnetNotAllowedFault":
      throw await de_SubnetNotAllowedFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyGlobalReplicationGroupCommand
 */
export const de_ModifyGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryModifyGlobalReplicationGroupCommandError
 */
const de_ModifyGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyReplicationGroupCommand
 */
export const de_ModifyReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryModifyReplicationGroupCommandError
 */
const de_ModifyReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupCommandOutput> => {
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
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await de_InvalidCacheSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await de_InvalidKMSKeyFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await de_InvalidUserGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyReplicationGroupShardConfigurationCommand
 */
export const de_ModifyReplicationGroupShardConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyReplicationGroupShardConfigurationCommandError(output, context);
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
 * deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError
 */
const de_ModifyReplicationGroupShardConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await de_InsufficientCacheClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await de_InvalidKMSKeyFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await de_NodeGroupsPerReplicationGroupQuotaExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyUserCommand
 */
export const de_ModifyUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyUserCommandError(output, context);
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
 * deserializeAws_queryModifyUserCommandError
 */
const de_ModifyUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidUserState":
    case "com.amazonaws.elasticache#InvalidUserStateFault":
      throw await de_InvalidUserStateFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyUserGroupCommand
 */
export const de_ModifyUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyUserGroupCommandError(output, context);
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
 * deserializeAws_queryModifyUserGroupCommandError
 */
const de_ModifyUserGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DefaultUserRequired":
    case "com.amazonaws.elasticache#DefaultUserRequired":
      throw await de_DefaultUserRequiredRes(parsedOutput, context);
    case "DuplicateUserName":
    case "com.amazonaws.elasticache#DuplicateUserNameFault":
      throw await de_DuplicateUserNameFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await de_InvalidUserGroupStateFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand
 */
export const de_PurchaseReservedCacheNodesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PurchaseReservedCacheNodesOfferingCommandError(output, context);
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
 * deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError
 */
const de_PurchaseReservedCacheNodesOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ReservedCacheNodeAlreadyExists":
    case "com.amazonaws.elasticache#ReservedCacheNodeAlreadyExistsFault":
      throw await de_ReservedCacheNodeAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedCacheNodeQuotaExceeded":
    case "com.amazonaws.elasticache#ReservedCacheNodeQuotaExceededFault":
      throw await de_ReservedCacheNodeQuotaExceededFaultRes(parsedOutput, context);
    case "ReservedCacheNodesOfferingNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault":
      throw await de_ReservedCacheNodesOfferingNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand
 */
export const de_RebalanceSlotsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebalanceSlotsInGlobalReplicationGroupCommandError(output, context);
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
 * deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommandError
 */
const de_RebalanceSlotsInGlobalReplicationGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await de_GlobalReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRebootCacheClusterCommand
 */
export const de_RebootCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootCacheClusterCommandError(output, context);
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
 * deserializeAws_queryRebootCacheClusterCommandError
 */
const de_RebootCacheClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootCacheClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFound":
    case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
      throw await de_CacheClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromResourceCommandError(output, context);
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
 * deserializeAws_queryRemoveTagsFromResourceCommandError
 */
const de_RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
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
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await de_ReservedCacheNodeNotFoundFaultRes(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await de_SnapshotNotFoundFaultRes(parsedOutput, context);
    case "TagNotFound":
    case "com.amazonaws.elasticache#TagNotFoundFault":
      throw await de_TagNotFoundFaultRes(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await de_UserGroupNotFoundFaultRes(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await de_UserNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryResetCacheParameterGroupCommand
 */
export const de_ResetCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetCacheParameterGroupCommandError(output, context);
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
 * deserializeAws_queryResetCacheParameterGroupCommandError
 */
const de_ResetCacheParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await de_CacheParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await de_InvalidCacheParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await de_InvalidGlobalReplicationGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRevokeCacheSecurityGroupIngressCommand
 */
export const de_RevokeCacheSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCacheSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeCacheSecurityGroupIngressCommandError(output, context);
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
 * deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError
 */
const de_RevokeCacheSecurityGroupIngressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCacheSecurityGroupIngressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.elasticache#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await de_CacheSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await de_InvalidCacheSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryStartMigrationCommand
 */
export const de_StartMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMigrationCommandError(output, context);
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
 * deserializeAws_queryStartMigrationCommandError
 */
const de_StartMigrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "ReplicationGroupAlreadyUnderMigrationFault":
    case "com.amazonaws.elasticache#ReplicationGroupAlreadyUnderMigrationFault":
      throw await de_ReplicationGroupAlreadyUnderMigrationFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTestFailoverCommand
 */
export const de_TestFailoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFailoverCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestFailoverCommandError(output, context);
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
 * deserializeAws_queryTestFailoverCommandError
 */
const de_TestFailoverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFailoverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "APICallRateForCustomerExceeded":
    case "com.amazonaws.elasticache#APICallRateForCustomerExceededFault":
      throw await de_APICallRateForCustomerExceededFaultRes(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await de_InvalidCacheClusterStateFaultRes(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await de_InvalidKMSKeyFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "NodeGroupNotFoundFault":
    case "com.amazonaws.elasticache#NodeGroupNotFoundFault":
      throw await de_NodeGroupNotFoundFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    case "TestFailoverNotAvailableFault":
    case "com.amazonaws.elasticache#TestFailoverNotAvailableFault":
      throw await de_TestFailoverNotAvailableFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTestMigrationCommand
 */
export const de_TestMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestMigrationCommandError(output, context);
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
 * deserializeAws_queryTestMigrationCommandError
 */
const de_TestMigrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMigrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await de_InvalidReplicationGroupStateFaultRes(parsedOutput, context);
    case "ReplicationGroupAlreadyUnderMigrationFault":
    case "com.amazonaws.elasticache#ReplicationGroupAlreadyUnderMigrationFault":
      throw await de_ReplicationGroupAlreadyUnderMigrationFaultRes(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await de_ReplicationGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
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
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Passwords != null) {
    const memberEntries = se_PasswordListInput(input.Passwords, context);
    if (input.Passwords?.length === 0) {
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
  if (input.CacheSecurityGroupName != null) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.EC2SecurityGroupName != null) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupOwnerId != null) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
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
  if (input.ReplicationGroupIds != null) {
    const memberEntries = se_ReplicationGroupIdList(input.ReplicationGroupIds, context);
    if (input.ReplicationGroupIds?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheClusterIds != null) {
    const memberEntries = se_CacheClusterIdList(input.CacheClusterIds, context);
    if (input.CacheClusterIds?.length === 0) {
      entries.CacheClusterIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ServiceUpdateName != null) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  return entries;
};

/**
 * serializeAws_queryBatchStopUpdateActionMessage
 */
const se_BatchStopUpdateActionMessage = (input: BatchStopUpdateActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupIds != null) {
    const memberEntries = se_ReplicationGroupIdList(input.ReplicationGroupIds, context);
    if (input.ReplicationGroupIds?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheClusterIds != null) {
    const memberEntries = se_CacheClusterIdList(input.CacheClusterIds, context);
    if (input.CacheClusterIds?.length === 0) {
      entries.CacheClusterIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ServiceUpdateName != null) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
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
 * serializeAws_queryCloudWatchLogsDestinationDetails
 */
const se_CloudWatchLogsDestinationDetails = (input: CloudWatchLogsDestinationDetails, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LogGroup != null) {
    entries["LogGroup"] = input.LogGroup;
  }
  return entries;
};

/**
 * serializeAws_queryCompleteMigrationMessage
 */
const se_CompleteMigrationMessage = (input: CompleteMigrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.Force != null) {
    entries["Force"] = input.Force;
  }
  return entries;
};

/**
 * serializeAws_queryConfigureShard
 */
const se_ConfigureShard = (input: ConfigureShard, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.NewReplicaCount != null) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.PreferredAvailabilityZones != null) {
    const memberEntries = se_PreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
    if (input.PreferredAvailabilityZones?.length === 0) {
      entries.PreferredAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PreferredOutpostArns != null) {
    const memberEntries = se_PreferredOutpostArnList(input.PreferredOutpostArns, context);
    if (input.PreferredOutpostArns?.length === 0) {
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
 * serializeAws_queryCopySnapshotMessage
 */
const se_CopySnapshotMessage = (input: CopySnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceSnapshotName != null) {
    entries["SourceSnapshotName"] = input.SourceSnapshotName;
  }
  if (input.TargetSnapshotName != null) {
    entries["TargetSnapshotName"] = input.TargetSnapshotName;
  }
  if (input.TargetBucket != null) {
    entries["TargetBucket"] = input.TargetBucket;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.AZMode != null) {
    entries["AZMode"] = input.AZMode;
  }
  if (input.PreferredAvailabilityZone != null) {
    entries["PreferredAvailabilityZone"] = input.PreferredAvailabilityZone;
  }
  if (input.PreferredAvailabilityZones != null) {
    const memberEntries = se_PreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
    if (input.PreferredAvailabilityZones?.length === 0) {
      entries.PreferredAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NumCacheNodes != null) {
    entries["NumCacheNodes"] = input.NumCacheNodes;
  }
  if (input.CacheNodeType != null) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.CacheSecurityGroupNames != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = se_SecurityGroupIdsList(input.SecurityGroupIds, context);
    if (input.SecurityGroupIds?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SnapshotArns != null) {
    const memberEntries = se_SnapshotArnsList(input.SnapshotArns, context);
    if (input.SnapshotArns?.length === 0) {
      entries.SnapshotArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SnapshotArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SnapshotName != null) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.NotificationTopicArn != null) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.SnapshotRetentionLimit != null) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow != null) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  if (input.AuthToken != null) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.OutpostMode != null) {
    entries["OutpostMode"] = input.OutpostMode;
  }
  if (input.PreferredOutpostArn != null) {
    entries["PreferredOutpostArn"] = input.PreferredOutpostArn;
  }
  if (input.PreferredOutpostArns != null) {
    const memberEntries = se_PreferredOutpostArnList(input.PreferredOutpostArns, context);
    if (input.PreferredOutpostArns?.length === 0) {
      entries.PreferredOutpostArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredOutpostArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LogDeliveryConfigurations != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
    if (input.LogDeliveryConfigurations?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TransitEncryptionEnabled != null) {
    entries["TransitEncryptionEnabled"] = input.TransitEncryptionEnabled;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.IpDiscovery != null) {
    entries["IpDiscovery"] = input.IpDiscovery;
  }
  return entries;
};

/**
 * serializeAws_queryCreateCacheParameterGroupMessage
 */
const se_CreateCacheParameterGroupMessage = (input: CreateCacheParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.CacheParameterGroupFamily != null) {
    entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.CacheSecurityGroupName != null) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.CacheSubnetGroupDescription != null) {
    entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
  }
  if (input.SubnetIds != null) {
    const memberEntries = se_SubnetIdentifierList(input.SubnetIds, context);
    if (input.SubnetIds?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.GlobalReplicationGroupIdSuffix != null) {
    entries["GlobalReplicationGroupIdSuffix"] = input.GlobalReplicationGroupIdSuffix;
  }
  if (input.GlobalReplicationGroupDescription != null) {
    entries["GlobalReplicationGroupDescription"] = input.GlobalReplicationGroupDescription;
  }
  if (input.PrimaryReplicationGroupId != null) {
    entries["PrimaryReplicationGroupId"] = input.PrimaryReplicationGroupId;
  }
  return entries;
};

/**
 * serializeAws_queryCreateReplicationGroupMessage
 */
const se_CreateReplicationGroupMessage = (input: CreateReplicationGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.ReplicationGroupDescription != null) {
    entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
  }
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.PrimaryClusterId != null) {
    entries["PrimaryClusterId"] = input.PrimaryClusterId;
  }
  if (input.AutomaticFailoverEnabled != null) {
    entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
  }
  if (input.MultiAZEnabled != null) {
    entries["MultiAZEnabled"] = input.MultiAZEnabled;
  }
  if (input.NumCacheClusters != null) {
    entries["NumCacheClusters"] = input.NumCacheClusters;
  }
  if (input.PreferredCacheClusterAZs != null) {
    const memberEntries = se_AvailabilityZonesList(input.PreferredCacheClusterAZs, context);
    if (input.PreferredCacheClusterAZs?.length === 0) {
      entries.PreferredCacheClusterAZs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredCacheClusterAZs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NumNodeGroups != null) {
    entries["NumNodeGroups"] = input.NumNodeGroups;
  }
  if (input.ReplicasPerNodeGroup != null) {
    entries["ReplicasPerNodeGroup"] = input.ReplicasPerNodeGroup;
  }
  if (input.NodeGroupConfiguration != null) {
    const memberEntries = se_NodeGroupConfigurationList(input.NodeGroupConfiguration, context);
    if (input.NodeGroupConfiguration?.length === 0) {
      entries.NodeGroupConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NodeGroupConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheNodeType != null) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.CacheSecurityGroupNames != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = se_SecurityGroupIdsList(input.SecurityGroupIds, context);
    if (input.SecurityGroupIds?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SnapshotArns != null) {
    const memberEntries = se_SnapshotArnsList(input.SnapshotArns, context);
    if (input.SnapshotArns?.length === 0) {
      entries.SnapshotArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SnapshotArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SnapshotName != null) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.NotificationTopicArn != null) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.SnapshotRetentionLimit != null) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow != null) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  if (input.AuthToken != null) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.TransitEncryptionEnabled != null) {
    entries["TransitEncryptionEnabled"] = input.TransitEncryptionEnabled;
  }
  if (input.AtRestEncryptionEnabled != null) {
    entries["AtRestEncryptionEnabled"] = input.AtRestEncryptionEnabled;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.UserGroupIds != null) {
    const memberEntries = se_UserGroupIdListInput(input.UserGroupIds, context);
    if (input.UserGroupIds?.length === 0) {
      entries.UserGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LogDeliveryConfigurations != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
    if (input.LogDeliveryConfigurations?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DataTieringEnabled != null) {
    entries["DataTieringEnabled"] = input.DataTieringEnabled;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.IpDiscovery != null) {
    entries["IpDiscovery"] = input.IpDiscovery;
  }
  if (input.TransitEncryptionMode != null) {
    entries["TransitEncryptionMode"] = input.TransitEncryptionMode;
  }
  if (input.ClusterMode != null) {
    entries["ClusterMode"] = input.ClusterMode;
  }
  return entries;
};

/**
 * serializeAws_queryCreateSnapshotMessage
 */
const se_CreateSnapshotMessage = (input: CreateSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.SnapshotName != null) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.UserGroupId != null) {
    entries["UserGroupId"] = input.UserGroupId;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.UserIds != null) {
    const memberEntries = se_UserIdListInput(input.UserIds, context);
    if (input.UserIds?.length === 0) {
      entries.UserIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.UserId != null) {
    entries["UserId"] = input.UserId;
  }
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.Passwords != null) {
    const memberEntries = se_PasswordListInput(input.Passwords, context);
    if (input.Passwords?.length === 0) {
      entries.Passwords = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Passwords.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AccessString != null) {
    entries["AccessString"] = input.AccessString;
  }
  if (input.NoPasswordRequired != null) {
    entries["NoPasswordRequired"] = input.NoPasswordRequired;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AuthenticationMode != null) {
    const memberEntries = se_AuthenticationMode(input.AuthenticationMode, context);
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
  if (input.Address != null) {
    entries["Address"] = input.Address;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
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
 * serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage
 */
const se_DecreaseNodeGroupsInGlobalReplicationGroupMessage = (
  input: DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.NodeGroupCount != null) {
    entries["NodeGroupCount"] = input.NodeGroupCount;
  }
  if (input.GlobalNodeGroupsToRemove != null) {
    const memberEntries = se_GlobalNodeGroupIdList(input.GlobalNodeGroupsToRemove, context);
    if (input.GlobalNodeGroupsToRemove?.length === 0) {
      entries.GlobalNodeGroupsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `GlobalNodeGroupsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.GlobalNodeGroupsToRetain != null) {
    const memberEntries = se_GlobalNodeGroupIdList(input.GlobalNodeGroupsToRetain, context);
    if (input.GlobalNodeGroupsToRetain?.length === 0) {
      entries.GlobalNodeGroupsToRetain = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `GlobalNodeGroupsToRetain.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  return entries;
};

/**
 * serializeAws_queryDecreaseReplicaCountMessage
 */
const se_DecreaseReplicaCountMessage = (input: DecreaseReplicaCountMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.NewReplicaCount != null) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.ReplicaConfiguration != null) {
    const memberEntries = se_ReplicaConfigurationList(input.ReplicaConfiguration, context);
    if (input.ReplicaConfiguration?.length === 0) {
      entries.ReplicaConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplicasToRemove != null) {
    const memberEntries = se_RemoveReplicasList(input.ReplicasToRemove, context);
    if (input.ReplicasToRemove?.length === 0) {
      entries.ReplicasToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicasToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheClusterMessage
 */
const se_DeleteCacheClusterMessage = (input: DeleteCacheClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.FinalSnapshotIdentifier != null) {
    entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheParameterGroupMessage
 */
const se_DeleteCacheParameterGroupMessage = (input: DeleteCacheParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheSecurityGroupMessage
 */
const se_DeleteCacheSecurityGroupMessage = (input: DeleteCacheSecurityGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheSecurityGroupName != null) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCacheSubnetGroupMessage
 */
const se_DeleteCacheSubnetGroupMessage = (input: DeleteCacheSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
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
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.RetainPrimaryReplicationGroup != null) {
    entries["RetainPrimaryReplicationGroup"] = input.RetainPrimaryReplicationGroup;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReplicationGroupMessage
 */
const se_DeleteReplicationGroupMessage = (input: DeleteReplicationGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.RetainPrimaryCluster != null) {
    entries["RetainPrimaryCluster"] = input.RetainPrimaryCluster;
  }
  if (input.FinalSnapshotIdentifier != null) {
    entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSnapshotMessage
 */
const se_DeleteSnapshotMessage = (input: DeleteSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SnapshotName != null) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserGroupMessage
 */
const se_DeleteUserGroupMessage = (input: DeleteUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserGroupId != null) {
    entries["UserGroupId"] = input.UserGroupId;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserMessage
 */
const se_DeleteUserMessage = (input: DeleteUserMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserId != null) {
    entries["UserId"] = input.UserId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheClustersMessage
 */
const se_DescribeCacheClustersMessage = (input: DescribeCacheClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.ShowCacheNodeInfo != null) {
    entries["ShowCacheNodeInfo"] = input.ShowCacheNodeInfo;
  }
  if (input.ShowCacheClustersNotInReplicationGroups != null) {
    entries["ShowCacheClustersNotInReplicationGroups"] = input.ShowCacheClustersNotInReplicationGroups;
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
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.CacheParameterGroupFamily != null) {
    entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.DefaultOnly != null) {
    entries["DefaultOnly"] = input.DefaultOnly;
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
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheParametersMessage
 */
const se_DescribeCacheParametersMessage = (input: DescribeCacheParametersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.CacheSecurityGroupName != null) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCacheSubnetGroupsMessage
 */
const se_DescribeCacheSubnetGroupsMessage = (input: DescribeCacheSubnetGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.CacheParameterGroupFamily != null) {
    entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceIdentifier != null) {
    entries["SourceIdentifier"] = input.SourceIdentifier;
  }
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Duration != null) {
    entries["Duration"] = input.Duration;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.ShowMemberInfo != null) {
    entries["ShowMemberInfo"] = input.ShowMemberInfo;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReplicationGroupsMessage
 */
const se_DescribeReplicationGroupsMessage = (input: DescribeReplicationGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.ReservedCacheNodeId != null) {
    entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
  }
  if (input.ReservedCacheNodesOfferingId != null) {
    entries["ReservedCacheNodesOfferingId"] = input.ReservedCacheNodesOfferingId;
  }
  if (input.CacheNodeType != null) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.Duration != null) {
    entries["Duration"] = input.Duration;
  }
  if (input.ProductDescription != null) {
    entries["ProductDescription"] = input.ProductDescription;
  }
  if (input.OfferingType != null) {
    entries["OfferingType"] = input.OfferingType;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.ReservedCacheNodesOfferingId != null) {
    entries["ReservedCacheNodesOfferingId"] = input.ReservedCacheNodesOfferingId;
  }
  if (input.CacheNodeType != null) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.Duration != null) {
    entries["Duration"] = input.Duration;
  }
  if (input.ProductDescription != null) {
    entries["ProductDescription"] = input.ProductDescription;
  }
  if (input.OfferingType != null) {
    entries["OfferingType"] = input.OfferingType;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeServiceUpdatesMessage
 */
const se_DescribeServiceUpdatesMessage = (input: DescribeServiceUpdatesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ServiceUpdateName != null) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  if (input.ServiceUpdateStatus != null) {
    const memberEntries = se_ServiceUpdateStatusList(input.ServiceUpdateStatus, context);
    if (input.ServiceUpdateStatus?.length === 0) {
      entries.ServiceUpdateStatus = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateStatus.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeSnapshotsMessage
 */
const se_DescribeSnapshotsMessage = (input: DescribeSnapshotsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.SnapshotName != null) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  if (input.SnapshotSource != null) {
    entries["SnapshotSource"] = input.SnapshotSource;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.ShowNodeGroupConfig != null) {
    entries["ShowNodeGroupConfig"] = input.ShowNodeGroupConfig;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeUpdateActionsMessage
 */
const se_DescribeUpdateActionsMessage = (input: DescribeUpdateActionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ServiceUpdateName != null) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  if (input.ReplicationGroupIds != null) {
    const memberEntries = se_ReplicationGroupIdList(input.ReplicationGroupIds, context);
    if (input.ReplicationGroupIds?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheClusterIds != null) {
    const memberEntries = se_CacheClusterIdList(input.CacheClusterIds, context);
    if (input.CacheClusterIds?.length === 0) {
      entries.CacheClusterIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.ServiceUpdateStatus != null) {
    const memberEntries = se_ServiceUpdateStatusList(input.ServiceUpdateStatus, context);
    if (input.ServiceUpdateStatus?.length === 0) {
      entries.ServiceUpdateStatus = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateStatus.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ServiceUpdateTimeRange != null) {
    const memberEntries = se_TimeRangeFilter(input.ServiceUpdateTimeRange, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateTimeRange.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UpdateActionStatus != null) {
    const memberEntries = se_UpdateActionStatusList(input.UpdateActionStatus, context);
    if (input.UpdateActionStatus?.length === 0) {
      entries.UpdateActionStatus = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UpdateActionStatus.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ShowNodeLevelUpdateStatus != null) {
    entries["ShowNodeLevelUpdateStatus"] = input.ShowNodeLevelUpdateStatus;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeUserGroupsMessage
 */
const se_DescribeUserGroupsMessage = (input: DescribeUserGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserGroupId != null) {
    entries["UserGroupId"] = input.UserGroupId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeUsersMessage
 */
const se_DescribeUsersMessage = (input: DescribeUsersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.UserId != null) {
    entries["UserId"] = input.UserId;
  }
  if (input.Filters != null) {
    const memberEntries = se_FilterList(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDestinationDetails
 */
const se_DestinationDetails = (input: DestinationDetails, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CloudWatchLogsDetails != null) {
    const memberEntries = se_CloudWatchLogsDestinationDetails(input.CloudWatchLogsDetails, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudWatchLogsDetails.${key}`;
      entries[loc] = value;
    });
  }
  if (input.KinesisFirehoseDetails != null) {
    const memberEntries = se_KinesisFirehoseDestinationDetails(input.KinesisFirehoseDetails, context);
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
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.ReplicationGroupRegion != null) {
    entries["ReplicationGroupRegion"] = input.ReplicationGroupRegion;
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
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.PrimaryRegion != null) {
    entries["PrimaryRegion"] = input.PrimaryRegion;
  }
  if (input.PrimaryReplicationGroupId != null) {
    entries["PrimaryReplicationGroupId"] = input.PrimaryReplicationGroupId;
  }
  return entries;
};

/**
 * serializeAws_queryFilter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    const memberEntries = se_FilterValueList(input.Values, context);
    if (input.Values?.length === 0) {
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
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.NodeGroupCount != null) {
    entries["NodeGroupCount"] = input.NodeGroupCount;
  }
  if (input.RegionalConfigurations != null) {
    const memberEntries = se_RegionalConfigurationList(input.RegionalConfigurations, context);
    if (input.RegionalConfigurations?.length === 0) {
      entries.RegionalConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RegionalConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  return entries;
};

/**
 * serializeAws_queryIncreaseReplicaCountMessage
 */
const se_IncreaseReplicaCountMessage = (input: IncreaseReplicaCountMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.NewReplicaCount != null) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.ReplicaConfiguration != null) {
    const memberEntries = se_ReplicaConfigurationList(input.ReplicaConfiguration, context);
    if (input.ReplicaConfiguration?.length === 0) {
      entries.ReplicaConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
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
  if (input.DeliveryStream != null) {
    entries["DeliveryStream"] = input.DeliveryStream;
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
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

/**
 * serializeAws_queryListTagsForResourceMessage
 */
const se_ListTagsForResourceMessage = (input: ListTagsForResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  return entries;
};

/**
 * serializeAws_queryLogDeliveryConfigurationRequest
 */
const se_LogDeliveryConfigurationRequest = (input: LogDeliveryConfigurationRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LogType != null) {
    entries["LogType"] = input.LogType;
  }
  if (input.DestinationType != null) {
    entries["DestinationType"] = input.DestinationType;
  }
  if (input.DestinationDetails != null) {
    const memberEntries = se_DestinationDetails(input.DestinationDetails, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DestinationDetails.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LogFormat != null) {
    entries["LogFormat"] = input.LogFormat;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
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
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.NumCacheNodes != null) {
    entries["NumCacheNodes"] = input.NumCacheNodes;
  }
  if (input.CacheNodeIdsToRemove != null) {
    const memberEntries = se_CacheNodeIdsList(input.CacheNodeIdsToRemove, context);
    if (input.CacheNodeIdsToRemove?.length === 0) {
      entries.CacheNodeIdsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheNodeIdsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AZMode != null) {
    entries["AZMode"] = input.AZMode;
  }
  if (input.NewAvailabilityZones != null) {
    const memberEntries = se_PreferredAvailabilityZoneList(input.NewAvailabilityZones, context);
    if (input.NewAvailabilityZones?.length === 0) {
      entries.NewAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NewAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheSecurityGroupNames != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = se_SecurityGroupIdsList(input.SecurityGroupIds, context);
    if (input.SecurityGroupIds?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.NotificationTopicArn != null) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.NotificationTopicStatus != null) {
    entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.SnapshotRetentionLimit != null) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow != null) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  if (input.CacheNodeType != null) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.AuthToken != null) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.AuthTokenUpdateStrategy != null) {
    entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
  }
  if (input.LogDeliveryConfigurations != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
    if (input.LogDeliveryConfigurations?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IpDiscovery != null) {
    entries["IpDiscovery"] = input.IpDiscovery;
  }
  return entries;
};

/**
 * serializeAws_queryModifyCacheParameterGroupMessage
 */
const se_ModifyCacheParameterGroupMessage = (input: ModifyCacheParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.ParameterNameValues != null) {
    const memberEntries = se_ParameterNameValueList(input.ParameterNameValues, context);
    if (input.ParameterNameValues?.length === 0) {
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
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.CacheSubnetGroupDescription != null) {
    entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
  }
  if (input.SubnetIds != null) {
    const memberEntries = se_SubnetIdentifierList(input.SubnetIds, context);
    if (input.SubnetIds?.length === 0) {
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
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.CacheNodeType != null) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.GlobalReplicationGroupDescription != null) {
    entries["GlobalReplicationGroupDescription"] = input.GlobalReplicationGroupDescription;
  }
  if (input.AutomaticFailoverEnabled != null) {
    entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryModifyReplicationGroupMessage
 */
const se_ModifyReplicationGroupMessage = (input: ModifyReplicationGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.ReplicationGroupDescription != null) {
    entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
  }
  if (input.PrimaryClusterId != null) {
    entries["PrimaryClusterId"] = input.PrimaryClusterId;
  }
  if (input.SnapshottingClusterId != null) {
    entries["SnapshottingClusterId"] = input.SnapshottingClusterId;
  }
  if (input.AutomaticFailoverEnabled != null) {
    entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
  }
  if (input.MultiAZEnabled != null) {
    entries["MultiAZEnabled"] = input.MultiAZEnabled;
  }
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.CacheSecurityGroupNames != null) {
    const memberEntries = se_CacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = se_SecurityGroupIdsList(input.SecurityGroupIds, context);
    if (input.SecurityGroupIds?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.NotificationTopicArn != null) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.NotificationTopicStatus != null) {
    entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.SnapshotRetentionLimit != null) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow != null) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  if (input.CacheNodeType != null) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.AuthToken != null) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.AuthTokenUpdateStrategy != null) {
    entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
  }
  if (input.UserGroupIdsToAdd != null) {
    const memberEntries = se_UserGroupIdList(input.UserGroupIdsToAdd, context);
    if (input.UserGroupIdsToAdd?.length === 0) {
      entries.UserGroupIdsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIdsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserGroupIdsToRemove != null) {
    const memberEntries = se_UserGroupIdList(input.UserGroupIdsToRemove, context);
    if (input.UserGroupIdsToRemove?.length === 0) {
      entries.UserGroupIdsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIdsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RemoveUserGroups != null) {
    entries["RemoveUserGroups"] = input.RemoveUserGroups;
  }
  if (input.LogDeliveryConfigurations != null) {
    const memberEntries = se_LogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
    if (input.LogDeliveryConfigurations?.length === 0) {
      entries.LogDeliveryConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogDeliveryConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IpDiscovery != null) {
    entries["IpDiscovery"] = input.IpDiscovery;
  }
  if (input.TransitEncryptionEnabled != null) {
    entries["TransitEncryptionEnabled"] = input.TransitEncryptionEnabled;
  }
  if (input.TransitEncryptionMode != null) {
    entries["TransitEncryptionMode"] = input.TransitEncryptionMode;
  }
  if (input.ClusterMode != null) {
    entries["ClusterMode"] = input.ClusterMode;
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
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.NodeGroupCount != null) {
    entries["NodeGroupCount"] = input.NodeGroupCount;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.ReshardingConfiguration != null) {
    const memberEntries = se_ReshardingConfigurationList(input.ReshardingConfiguration, context);
    if (input.ReshardingConfiguration?.length === 0) {
      entries.ReshardingConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReshardingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NodeGroupsToRemove != null) {
    const memberEntries = se_NodeGroupsToRemoveList(input.NodeGroupsToRemove, context);
    if (input.NodeGroupsToRemove?.length === 0) {
      entries.NodeGroupsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NodeGroupsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NodeGroupsToRetain != null) {
    const memberEntries = se_NodeGroupsToRetainList(input.NodeGroupsToRetain, context);
    if (input.NodeGroupsToRetain?.length === 0) {
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
 * serializeAws_queryModifyUserGroupMessage
 */
const se_ModifyUserGroupMessage = (input: ModifyUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserGroupId != null) {
    entries["UserGroupId"] = input.UserGroupId;
  }
  if (input.UserIdsToAdd != null) {
    const memberEntries = se_UserIdListInput(input.UserIdsToAdd, context);
    if (input.UserIdsToAdd?.length === 0) {
      entries.UserIdsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIdsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserIdsToRemove != null) {
    const memberEntries = se_UserIdListInput(input.UserIdsToRemove, context);
    if (input.UserIdsToRemove?.length === 0) {
      entries.UserIdsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIdsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyUserMessage
 */
const se_ModifyUserMessage = (input: ModifyUserMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserId != null) {
    entries["UserId"] = input.UserId;
  }
  if (input.AccessString != null) {
    entries["AccessString"] = input.AccessString;
  }
  if (input.AppendAccessString != null) {
    entries["AppendAccessString"] = input.AppendAccessString;
  }
  if (input.Passwords != null) {
    const memberEntries = se_PasswordListInput(input.Passwords, context);
    if (input.Passwords?.length === 0) {
      entries.Passwords = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Passwords.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NoPasswordRequired != null) {
    entries["NoPasswordRequired"] = input.NoPasswordRequired;
  }
  if (input.AuthenticationMode != null) {
    const memberEntries = se_AuthenticationMode(input.AuthenticationMode, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationMode.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryNodeGroupConfiguration
 */
const se_NodeGroupConfiguration = (input: NodeGroupConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.Slots != null) {
    entries["Slots"] = input.Slots;
  }
  if (input.ReplicaCount != null) {
    entries["ReplicaCount"] = input.ReplicaCount;
  }
  if (input.PrimaryAvailabilityZone != null) {
    entries["PrimaryAvailabilityZone"] = input.PrimaryAvailabilityZone;
  }
  if (input.ReplicaAvailabilityZones != null) {
    const memberEntries = se_AvailabilityZonesList(input.ReplicaAvailabilityZones, context);
    if (input.ReplicaAvailabilityZones?.length === 0) {
      entries.ReplicaAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PrimaryOutpostArn != null) {
    entries["PrimaryOutpostArn"] = input.PrimaryOutpostArn;
  }
  if (input.ReplicaOutpostArns != null) {
    const memberEntries = se_OutpostArnsList(input.ReplicaOutpostArns, context);
    if (input.ReplicaOutpostArns?.length === 0) {
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
  if (input.ParameterName != null) {
    entries["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue != null) {
    entries["ParameterValue"] = input.ParameterValue;
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
  if (input.ReservedCacheNodesOfferingId != null) {
    entries["ReservedCacheNodesOfferingId"] = input.ReservedCacheNodesOfferingId;
  }
  if (input.ReservedCacheNodeId != null) {
    entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
  }
  if (input.CacheNodeCount != null) {
    entries["CacheNodeCount"] = input.CacheNodeCount;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.GlobalReplicationGroupId != null) {
    entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  return entries;
};

/**
 * serializeAws_queryRebootCacheClusterMessage
 */
const se_RebootCacheClusterMessage = (input: RebootCacheClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.CacheNodeIdsToReboot != null) {
    const memberEntries = se_CacheNodeIdsList(input.CacheNodeIdsToReboot, context);
    if (input.CacheNodeIdsToReboot?.length === 0) {
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
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.ReplicationGroupRegion != null) {
    entries["ReplicationGroupRegion"] = input.ReplicationGroupRegion;
  }
  if (input.ReshardingConfiguration != null) {
    const memberEntries = se_ReshardingConfigurationList(input.ReshardingConfiguration, context);
    if (input.ReshardingConfiguration?.length === 0) {
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
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_KeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.ResetAllParameters != null) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  if (input.ParameterNameValues != null) {
    const memberEntries = se_ParameterNameValueList(input.ParameterNameValues, context);
    if (input.ParameterNameValues?.length === 0) {
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
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.PreferredAvailabilityZones != null) {
    const memberEntries = se_AvailabilityZonesList(input.PreferredAvailabilityZones, context);
    if (input.PreferredAvailabilityZones?.length === 0) {
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
  if (input.CacheSecurityGroupName != null) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.EC2SecurityGroupName != null) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupOwnerId != null) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
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
const se_ServiceUpdateStatusList = (input: (ServiceUpdateStatus | string)[], context: __SerdeContext): any => {
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
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.CustomerNodeEndpointList != null) {
    const memberEntries = se_CustomerNodeEndpointList(input.CustomerNodeEndpointList, context);
    if (input.CustomerNodeEndpointList?.length === 0) {
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
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  return entries;
};

/**
 * serializeAws_queryTestMigrationMessage
 */
const se_TestMigrationMessage = (input: TestMigrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.CustomerNodeEndpointList != null) {
    const memberEntries = se_CustomerNodeEndpointList(input.CustomerNodeEndpointList, context);
    if (input.CustomerNodeEndpointList?.length === 0) {
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
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

/**
 * serializeAws_queryUpdateActionStatusList
 */
const se_UpdateActionStatusList = (input: (UpdateActionStatus | string)[], context: __SerdeContext): any => {
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
  if (output.ScaleUpModifications === "") {
    contents.ScaleUpModifications = [];
  } else if (output["ScaleUpModifications"] !== undefined && output["ScaleUpModifications"]["member"] !== undefined) {
    contents.ScaleUpModifications = de_NodeTypeList(
      __getArrayIfSingleItem(output["ScaleUpModifications"]["member"]),
      context
    );
  }
  if (output.ScaleDownModifications === "") {
    contents.ScaleDownModifications = [];
  } else if (
    output["ScaleDownModifications"] !== undefined &&
    output["ScaleDownModifications"]["member"] !== undefined
  ) {
    contents.ScaleDownModifications = de_NodeTypeList(
      __getArrayIfSingleItem(output["ScaleDownModifications"]["member"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthentication
 */
const de_Authentication = (output: any, context: __SerdeContext): Authentication => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["PasswordCount"] !== undefined) {
    contents.PasswordCount = __strictParseInt32(output["PasswordCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationAlreadyExistsFault
 */
const de_AuthorizationAlreadyExistsFault = (output: any, context: __SerdeContext): AuthorizationAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationNotFoundFault
 */
const de_AuthorizationNotFoundFault = (output: any, context: __SerdeContext): AuthorizationNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = de_CacheSecurityGroup(output["CacheSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
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
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["ConfigurationEndpoint"] !== undefined) {
    contents.ConfigurationEndpoint = de_Endpoint(output["ConfigurationEndpoint"], context);
  }
  if (output["ClientDownloadLandingPage"] !== undefined) {
    contents.ClientDownloadLandingPage = __expectString(output["ClientDownloadLandingPage"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["CacheClusterStatus"] !== undefined) {
    contents.CacheClusterStatus = __expectString(output["CacheClusterStatus"]);
  }
  if (output["NumCacheNodes"] !== undefined) {
    contents.NumCacheNodes = __strictParseInt32(output["NumCacheNodes"]) as number;
  }
  if (output["PreferredAvailabilityZone"] !== undefined) {
    contents.PreferredAvailabilityZone = __expectString(output["PreferredAvailabilityZone"]);
  }
  if (output["PreferredOutpostArn"] !== undefined) {
    contents.PreferredOutpostArn = __expectString(output["PreferredOutpostArn"]);
  }
  if (output["CacheClusterCreateTime"] !== undefined) {
    contents.CacheClusterCreateTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["CacheClusterCreateTime"])
    );
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = __expectString(output["PreferredMaintenanceWindow"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = de_PendingModifiedValues(output["PendingModifiedValues"], context);
  }
  if (output["NotificationConfiguration"] !== undefined) {
    contents.NotificationConfiguration = de_NotificationConfiguration(output["NotificationConfiguration"], context);
  }
  if (output.CacheSecurityGroups === "") {
    contents.CacheSecurityGroups = [];
  } else if (
    output["CacheSecurityGroups"] !== undefined &&
    output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined
  ) {
    contents.CacheSecurityGroups = de_CacheSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]),
      context
    );
  }
  if (output["CacheParameterGroup"] !== undefined) {
    contents.CacheParameterGroup = de_CacheParameterGroupStatus(output["CacheParameterGroup"], context);
  }
  if (output["CacheSubnetGroupName"] !== undefined) {
    contents.CacheSubnetGroupName = __expectString(output["CacheSubnetGroupName"]);
  }
  if (output.CacheNodes === "") {
    contents.CacheNodes = [];
  } else if (output["CacheNodes"] !== undefined && output["CacheNodes"]["CacheNode"] !== undefined) {
    contents.CacheNodes = de_CacheNodeList(__getArrayIfSingleItem(output["CacheNodes"]["CacheNode"]), context);
  }
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade = __parseBoolean(output["AutoMinorVersionUpgrade"]);
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = de_SecurityGroupMembershipList(
      __getArrayIfSingleItem(output["SecurityGroups"]["member"]),
      context
    );
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["SnapshotRetentionLimit"] !== undefined) {
    contents.SnapshotRetentionLimit = __strictParseInt32(output["SnapshotRetentionLimit"]) as number;
  }
  if (output["SnapshotWindow"] !== undefined) {
    contents.SnapshotWindow = __expectString(output["SnapshotWindow"]);
  }
  if (output["AuthTokenEnabled"] !== undefined) {
    contents.AuthTokenEnabled = __parseBoolean(output["AuthTokenEnabled"]);
  }
  if (output["AuthTokenLastModifiedDate"] !== undefined) {
    contents.AuthTokenLastModifiedDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["AuthTokenLastModifiedDate"])
    );
  }
  if (output["TransitEncryptionEnabled"] !== undefined) {
    contents.TransitEncryptionEnabled = __parseBoolean(output["TransitEncryptionEnabled"]);
  }
  if (output["AtRestEncryptionEnabled"] !== undefined) {
    contents.AtRestEncryptionEnabled = __parseBoolean(output["AtRestEncryptionEnabled"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["ReplicationGroupLogDeliveryEnabled"] !== undefined) {
    contents.ReplicationGroupLogDeliveryEnabled = __parseBoolean(output["ReplicationGroupLogDeliveryEnabled"]);
  }
  if (output.LogDeliveryConfigurations === "") {
    contents.LogDeliveryConfigurations = [];
  } else if (
    output["LogDeliveryConfigurations"] !== undefined &&
    output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"] !== undefined
  ) {
    contents.LogDeliveryConfigurations = de_LogDeliveryConfigurationList(
      __getArrayIfSingleItem(output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"]),
      context
    );
  }
  if (output["NetworkType"] !== undefined) {
    contents.NetworkType = __expectString(output["NetworkType"]);
  }
  if (output["IpDiscovery"] !== undefined) {
    contents.IpDiscovery = __expectString(output["IpDiscovery"]);
  }
  if (output["TransitEncryptionMode"] !== undefined) {
    contents.TransitEncryptionMode = __expectString(output["TransitEncryptionMode"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheClusterAlreadyExistsFault
 */
const de_CacheClusterAlreadyExistsFault = (output: any, context: __SerdeContext): CacheClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheClusters === "") {
    contents.CacheClusters = [];
  } else if (output["CacheClusters"] !== undefined && output["CacheClusters"]["CacheCluster"] !== undefined) {
    contents.CacheClusters = de_CacheClusterList(
      __getArrayIfSingleItem(output["CacheClusters"]["CacheCluster"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCacheClusterNotFoundFault
 */
const de_CacheClusterNotFoundFault = (output: any, context: __SerdeContext): CacheClusterNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheEngineVersion
 */
const de_CacheEngineVersion = (output: any, context: __SerdeContext): CacheEngineVersion => {
  const contents: any = {};
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["CacheParameterGroupFamily"] !== undefined) {
    contents.CacheParameterGroupFamily = __expectString(output["CacheParameterGroupFamily"]);
  }
  if (output["CacheEngineDescription"] !== undefined) {
    contents.CacheEngineDescription = __expectString(output["CacheEngineDescription"]);
  }
  if (output["CacheEngineVersionDescription"] !== undefined) {
    contents.CacheEngineVersionDescription = __expectString(output["CacheEngineVersionDescription"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheEngineVersions === "") {
    contents.CacheEngineVersions = [];
  } else if (
    output["CacheEngineVersions"] !== undefined &&
    output["CacheEngineVersions"]["CacheEngineVersion"] !== undefined
  ) {
    contents.CacheEngineVersions = de_CacheEngineVersionList(
      __getArrayIfSingleItem(output["CacheEngineVersions"]["CacheEngineVersion"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCacheNode
 */
const de_CacheNode = (output: any, context: __SerdeContext): CacheNode => {
  const contents: any = {};
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["CacheNodeStatus"] !== undefined) {
    contents.CacheNodeStatus = __expectString(output["CacheNodeStatus"]);
  }
  if (output["CacheNodeCreateTime"] !== undefined) {
    contents.CacheNodeCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CacheNodeCreateTime"]));
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = de_Endpoint(output["Endpoint"], context);
  }
  if (output["ParameterGroupStatus"] !== undefined) {
    contents.ParameterGroupStatus = __expectString(output["ParameterGroupStatus"]);
  }
  if (output["SourceCacheNodeId"] !== undefined) {
    contents.SourceCacheNodeId = __expectString(output["SourceCacheNodeId"]);
  }
  if (output["CustomerAvailabilityZone"] !== undefined) {
    contents.CustomerAvailabilityZone = __expectString(output["CustomerAvailabilityZone"]);
  }
  if (output["CustomerOutpostArn"] !== undefined) {
    contents.CustomerOutpostArn = __expectString(output["CustomerOutpostArn"]);
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
  if (output["ParameterName"] !== undefined) {
    contents.ParameterName = __expectString(output["ParameterName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Source"] !== undefined) {
    contents.Source = __expectString(output["Source"]);
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = __expectString(output["DataType"]);
  }
  if (output["AllowedValues"] !== undefined) {
    contents.AllowedValues = __expectString(output["AllowedValues"]);
  }
  if (output["IsModifiable"] !== undefined) {
    contents.IsModifiable = __parseBoolean(output["IsModifiable"]);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
  }
  if (output.CacheNodeTypeSpecificValues === "") {
    contents.CacheNodeTypeSpecificValues = [];
  } else if (
    output["CacheNodeTypeSpecificValues"] !== undefined &&
    output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"] !== undefined
  ) {
    contents.CacheNodeTypeSpecificValues = de_CacheNodeTypeSpecificValueList(
      __getArrayIfSingleItem(output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]),
      context
    );
  }
  if (output["ChangeType"] !== undefined) {
    contents.ChangeType = __expectString(output["ChangeType"]);
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
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["NodeUpdateStatus"] !== undefined) {
    contents.NodeUpdateStatus = __expectString(output["NodeUpdateStatus"]);
  }
  if (output["NodeDeletionDate"] !== undefined) {
    contents.NodeDeletionDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["NodeDeletionDate"]));
  }
  if (output["NodeUpdateStartDate"] !== undefined) {
    contents.NodeUpdateStartDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["NodeUpdateStartDate"]));
  }
  if (output["NodeUpdateEndDate"] !== undefined) {
    contents.NodeUpdateEndDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["NodeUpdateEndDate"]));
  }
  if (output["NodeUpdateInitiatedBy"] !== undefined) {
    contents.NodeUpdateInitiatedBy = __expectString(output["NodeUpdateInitiatedBy"]);
  }
  if (output["NodeUpdateInitiatedDate"] !== undefined) {
    contents.NodeUpdateInitiatedDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["NodeUpdateInitiatedDate"])
    );
  }
  if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
    contents.NodeUpdateStatusModifiedDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["NodeUpdateStatusModifiedDate"])
    );
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
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = __expectString(output["CacheParameterGroupName"]);
  }
  if (output["CacheParameterGroupFamily"] !== undefined) {
    contents.CacheParameterGroupFamily = __expectString(output["CacheParameterGroupFamily"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["IsGlobal"] !== undefined) {
    contents.IsGlobal = __parseBoolean(output["IsGlobal"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupDetails
 */
const de_CacheParameterGroupDetails = (output: any, context: __SerdeContext): CacheParameterGroupDetails => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = de_ParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
  }
  if (output.CacheNodeTypeSpecificParameters === "") {
    contents.CacheNodeTypeSpecificParameters = [];
  } else if (
    output["CacheNodeTypeSpecificParameters"] !== undefined &&
    output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined
  ) {
    contents.CacheNodeTypeSpecificParameters = de_CacheNodeTypeSpecificParametersList(
      __getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]),
      context
    );
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
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = __expectString(output["CacheParameterGroupName"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupsMessage
 */
const de_CacheParameterGroupsMessage = (output: any, context: __SerdeContext): CacheParameterGroupsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheParameterGroups === "") {
    contents.CacheParameterGroups = [];
  } else if (
    output["CacheParameterGroups"] !== undefined &&
    output["CacheParameterGroups"]["CacheParameterGroup"] !== undefined
  ) {
    contents.CacheParameterGroups = de_CacheParameterGroupList(
      __getArrayIfSingleItem(output["CacheParameterGroups"]["CacheParameterGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCacheParameterGroupStatus
 */
const de_CacheParameterGroupStatus = (output: any, context: __SerdeContext): CacheParameterGroupStatus => {
  const contents: any = {};
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = __expectString(output["CacheParameterGroupName"]);
  }
  if (output["ParameterApplyStatus"] !== undefined) {
    contents.ParameterApplyStatus = __expectString(output["ParameterApplyStatus"]);
  }
  if (output.CacheNodeIdsToReboot === "") {
    contents.CacheNodeIdsToReboot = [];
  } else if (
    output["CacheNodeIdsToReboot"] !== undefined &&
    output["CacheNodeIdsToReboot"]["CacheNodeId"] !== undefined
  ) {
    contents.CacheNodeIdsToReboot = de_CacheNodeIdsList(
      __getArrayIfSingleItem(output["CacheNodeIdsToReboot"]["CacheNodeId"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroup
 */
const de_CacheSecurityGroup = (output: any, context: __SerdeContext): CacheSecurityGroup => {
  const contents: any = {};
  if (output["OwnerId"] !== undefined) {
    contents.OwnerId = __expectString(output["OwnerId"]);
  }
  if (output["CacheSecurityGroupName"] !== undefined) {
    contents.CacheSecurityGroupName = __expectString(output["CacheSecurityGroupName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.EC2SecurityGroups === "") {
    contents.EC2SecurityGroups = [];
  } else if (
    output["EC2SecurityGroups"] !== undefined &&
    output["EC2SecurityGroups"]["EC2SecurityGroup"] !== undefined
  ) {
    contents.EC2SecurityGroups = de_EC2SecurityGroupList(
      __getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]),
      context
    );
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroupMembership
 */
const de_CacheSecurityGroupMembership = (output: any, context: __SerdeContext): CacheSecurityGroupMembership => {
  const contents: any = {};
  if (output["CacheSecurityGroupName"] !== undefined) {
    contents.CacheSecurityGroupName = __expectString(output["CacheSecurityGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheSecurityGroups === "") {
    contents.CacheSecurityGroups = [];
  } else if (
    output["CacheSecurityGroups"] !== undefined &&
    output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined
  ) {
    contents.CacheSecurityGroups = de_CacheSecurityGroups(
      __getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSecurityGroupNotFoundFault
 */
const de_CacheSecurityGroupNotFoundFault = (output: any, context: __SerdeContext): CacheSecurityGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["CacheSubnetGroupName"] !== undefined) {
    contents.CacheSubnetGroupName = __expectString(output["CacheSubnetGroupName"]);
  }
  if (output["CacheSubnetGroupDescription"] !== undefined) {
    contents.CacheSubnetGroupDescription = __expectString(output["CacheSubnetGroupDescription"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["Subnet"] !== undefined) {
    contents.Subnets = de_SubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output.SupportedNetworkTypes === "") {
    contents.SupportedNetworkTypes = [];
  } else if (output["SupportedNetworkTypes"] !== undefined && output["SupportedNetworkTypes"]["member"] !== undefined) {
    contents.SupportedNetworkTypes = de_NetworkTypeList(
      __getArrayIfSingleItem(output["SupportedNetworkTypes"]["member"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupInUse
 */
const de_CacheSubnetGroupInUse = (output: any, context: __SerdeContext): CacheSubnetGroupInUse => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupMessage
 */
const de_CacheSubnetGroupMessage = (output: any, context: __SerdeContext): CacheSubnetGroupMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheSubnetGroups === "") {
    contents.CacheSubnetGroups = [];
  } else if (
    output["CacheSubnetGroups"] !== undefined &&
    output["CacheSubnetGroups"]["CacheSubnetGroup"] !== undefined
  ) {
    contents.CacheSubnetGroups = de_CacheSubnetGroups(
      __getArrayIfSingleItem(output["CacheSubnetGroups"]["CacheSubnetGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCacheSubnetGroupNotFoundFault
 */
const de_CacheSubnetGroupNotFoundFault = (output: any, context: __SerdeContext): CacheSubnetGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["LogGroup"] !== undefined) {
    contents.LogGroup = __expectString(output["LogGroup"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCompleteMigrationResponse
 */
const de_CompleteMigrationResponse = (output: any, context: __SerdeContext): CompleteMigrationResponse => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopySnapshotResult
 */
const de_CopySnapshotResult = (output: any, context: __SerdeContext): CopySnapshotResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheClusterResult
 */
const de_CreateCacheClusterResult = (output: any, context: __SerdeContext): CreateCacheClusterResult => {
  const contents: any = {};
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = de_CacheCluster(output["CacheCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheParameterGroupResult
 */
const de_CreateCacheParameterGroupResult = (output: any, context: __SerdeContext): CreateCacheParameterGroupResult => {
  const contents: any = {};
  if (output["CacheParameterGroup"] !== undefined) {
    contents.CacheParameterGroup = de_CacheParameterGroup(output["CacheParameterGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheSecurityGroupResult
 */
const de_CreateCacheSecurityGroupResult = (output: any, context: __SerdeContext): CreateCacheSecurityGroupResult => {
  const contents: any = {};
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = de_CacheSecurityGroup(output["CacheSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCacheSubnetGroupResult
 */
const de_CreateCacheSubnetGroupResult = (output: any, context: __SerdeContext): CreateCacheSubnetGroupResult => {
  const contents: any = {};
  if (output["CacheSubnetGroup"] !== undefined) {
    contents.CacheSubnetGroup = de_CacheSubnetGroup(output["CacheSubnetGroup"], context);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateReplicationGroupResult
 */
const de_CreateReplicationGroupResult = (output: any, context: __SerdeContext): CreateReplicationGroupResult => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateSnapshotResult
 */
const de_CreateSnapshotResult = (output: any, context: __SerdeContext): CreateSnapshotResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDecreaseReplicaCountResult
 */
const de_DecreaseReplicaCountResult = (output: any, context: __SerdeContext): DecreaseReplicaCountResult => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDefaultUserRequired
 */
const de_DefaultUserRequired = (output: any, context: __SerdeContext): DefaultUserRequired => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteCacheClusterResult
 */
const de_DeleteCacheClusterResult = (output: any, context: __SerdeContext): DeleteCacheClusterResult => {
  const contents: any = {};
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = de_CacheCluster(output["CacheCluster"], context);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteReplicationGroupResult
 */
const de_DeleteReplicationGroupResult = (output: any, context: __SerdeContext): DeleteReplicationGroupResult => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteSnapshotResult
 */
const de_DeleteSnapshotResult = (output: any, context: __SerdeContext): DeleteSnapshotResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
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
  if (output["EngineDefaults"] !== undefined) {
    contents.EngineDefaults = de_EngineDefaults(output["EngineDefaults"], context);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.GlobalReplicationGroups === "") {
    contents.GlobalReplicationGroups = [];
  } else if (
    output["GlobalReplicationGroups"] !== undefined &&
    output["GlobalReplicationGroups"]["GlobalReplicationGroup"] !== undefined
  ) {
    contents.GlobalReplicationGroups = de_GlobalReplicationGroupList(
      __getArrayIfSingleItem(output["GlobalReplicationGroups"]["GlobalReplicationGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeSnapshotsListMessage
 */
const de_DescribeSnapshotsListMessage = (output: any, context: __SerdeContext): DescribeSnapshotsListMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Snapshots === "") {
    contents.Snapshots = [];
  } else if (output["Snapshots"] !== undefined && output["Snapshots"]["Snapshot"] !== undefined) {
    contents.Snapshots = de_SnapshotList(__getArrayIfSingleItem(output["Snapshots"]["Snapshot"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeUserGroupsResult
 */
const de_DescribeUserGroupsResult = (output: any, context: __SerdeContext): DescribeUserGroupsResult => {
  const contents: any = {};
  if (output.UserGroups === "") {
    contents.UserGroups = [];
  } else if (output["UserGroups"] !== undefined && output["UserGroups"]["member"] !== undefined) {
    contents.UserGroups = de_UserGroupList(__getArrayIfSingleItem(output["UserGroups"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeUsersResult
 */
const de_DescribeUsersResult = (output: any, context: __SerdeContext): DescribeUsersResult => {
  const contents: any = {};
  if (output.Users === "") {
    contents.Users = [];
  } else if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
    contents.Users = de_UserList(__getArrayIfSingleItem(output["Users"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDestinationDetails
 */
const de_DestinationDetails = (output: any, context: __SerdeContext): DestinationDetails => {
  const contents: any = {};
  if (output["CloudWatchLogsDetails"] !== undefined) {
    contents.CloudWatchLogsDetails = de_CloudWatchLogsDestinationDetails(output["CloudWatchLogsDetails"], context);
  }
  if (output["KinesisFirehoseDetails"] !== undefined) {
    contents.KinesisFirehoseDetails = de_KinesisFirehoseDestinationDetails(output["KinesisFirehoseDetails"], context);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateUserNameFault
 */
const de_DuplicateUserNameFault = (output: any, context: __SerdeContext): DuplicateUserNameFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEC2SecurityGroup
 */
const de_EC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EC2SecurityGroupName"] !== undefined) {
    contents.EC2SecurityGroupName = __expectString(output["EC2SecurityGroupName"]);
  }
  if (output["EC2SecurityGroupOwnerId"] !== undefined) {
    contents.EC2SecurityGroupOwnerId = __expectString(output["EC2SecurityGroupOwnerId"]);
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
 * deserializeAws_queryEndpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {};
  if (output["Address"] !== undefined) {
    contents.Address = __expectString(output["Address"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryEngineDefaults
 */
const de_EngineDefaults = (output: any, context: __SerdeContext): EngineDefaults => {
  const contents: any = {};
  if (output["CacheParameterGroupFamily"] !== undefined) {
    contents.CacheParameterGroupFamily = __expectString(output["CacheParameterGroupFamily"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = de_ParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
  }
  if (output.CacheNodeTypeSpecificParameters === "") {
    contents.CacheNodeTypeSpecificParameters = [];
  } else if (
    output["CacheNodeTypeSpecificParameters"] !== undefined &&
    output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined
  ) {
    contents.CacheNodeTypeSpecificParameters = de_CacheNodeTypeSpecificParametersList(
      __getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryEvent
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  const contents: any = {};
  if (output["SourceIdentifier"] !== undefined) {
    contents.SourceIdentifier = __expectString(output["SourceIdentifier"]);
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Date"]));
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["Event"] !== undefined) {
    contents.Events = de_EventList(__getArrayIfSingleItem(output["Events"]["Event"]), context);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalNodeGroup
 */
const de_GlobalNodeGroup = (output: any, context: __SerdeContext): GlobalNodeGroup => {
  const contents: any = {};
  if (output["GlobalNodeGroupId"] !== undefined) {
    contents.GlobalNodeGroupId = __expectString(output["GlobalNodeGroupId"]);
  }
  if (output["Slots"] !== undefined) {
    contents.Slots = __expectString(output["Slots"]);
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
  if (output["GlobalReplicationGroupId"] !== undefined) {
    contents.GlobalReplicationGroupId = __expectString(output["GlobalReplicationGroupId"]);
  }
  if (output["GlobalReplicationGroupDescription"] !== undefined) {
    contents.GlobalReplicationGroupDescription = __expectString(output["GlobalReplicationGroupDescription"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output.Members === "") {
    contents.Members = [];
  } else if (output["Members"] !== undefined && output["Members"]["GlobalReplicationGroupMember"] !== undefined) {
    contents.Members = de_GlobalReplicationGroupMemberList(
      __getArrayIfSingleItem(output["Members"]["GlobalReplicationGroupMember"]),
      context
    );
  }
  if (output["ClusterEnabled"] !== undefined) {
    contents.ClusterEnabled = __parseBoolean(output["ClusterEnabled"]);
  }
  if (output.GlobalNodeGroups === "") {
    contents.GlobalNodeGroups = [];
  } else if (output["GlobalNodeGroups"] !== undefined && output["GlobalNodeGroups"]["GlobalNodeGroup"] !== undefined) {
    contents.GlobalNodeGroups = de_GlobalNodeGroupList(
      __getArrayIfSingleItem(output["GlobalNodeGroups"]["GlobalNodeGroup"]),
      context
    );
  }
  if (output["AuthTokenEnabled"] !== undefined) {
    contents.AuthTokenEnabled = __parseBoolean(output["AuthTokenEnabled"]);
  }
  if (output["TransitEncryptionEnabled"] !== undefined) {
    contents.TransitEncryptionEnabled = __parseBoolean(output["TransitEncryptionEnabled"]);
  }
  if (output["AtRestEncryptionEnabled"] !== undefined) {
    contents.AtRestEncryptionEnabled = __parseBoolean(output["AtRestEncryptionEnabled"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalReplicationGroupInfo
 */
const de_GlobalReplicationGroupInfo = (output: any, context: __SerdeContext): GlobalReplicationGroupInfo => {
  const contents: any = {};
  if (output["GlobalReplicationGroupId"] !== undefined) {
    contents.GlobalReplicationGroupId = __expectString(output["GlobalReplicationGroupId"]);
  }
  if (output["GlobalReplicationGroupMemberRole"] !== undefined) {
    contents.GlobalReplicationGroupMemberRole = __expectString(output["GlobalReplicationGroupMemberRole"]);
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
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["ReplicationGroupRegion"] !== undefined) {
    contents.ReplicationGroupRegion = __expectString(output["ReplicationGroupRegion"]);
  }
  if (output["Role"] !== undefined) {
    contents.Role = __expectString(output["Role"]);
  }
  if (output["AutomaticFailover"] !== undefined) {
    contents.AutomaticFailover = __expectString(output["AutomaticFailover"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIncreaseReplicaCountResult
 */
const de_IncreaseReplicaCountResult = (output: any, context: __SerdeContext): IncreaseReplicaCountResult => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidARNFault
 */
const de_InvalidARNFault = (output: any, context: __SerdeContext): InvalidARNFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCacheClusterStateFault
 */
const de_InvalidCacheClusterStateFault = (output: any, context: __SerdeContext): InvalidCacheClusterStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidKMSKeyFault
 */
const de_InvalidKMSKeyFault = (output: any, context: __SerdeContext): InvalidKMSKeyFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSnapshotStateFault
 */
const de_InvalidSnapshotStateFault = (output: any, context: __SerdeContext): InvalidSnapshotStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUserGroupStateFault
 */
const de_InvalidUserGroupStateFault = (output: any, context: __SerdeContext): InvalidUserGroupStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUserStateFault
 */
const de_InvalidUserStateFault = (output: any, context: __SerdeContext): InvalidUserStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidVPCNetworkStateFault
 */
const de_InvalidVPCNetworkStateFault = (output: any, context: __SerdeContext): InvalidVPCNetworkStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["DeliveryStream"] !== undefined) {
    contents.DeliveryStream = __expectString(output["DeliveryStream"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLogDeliveryConfiguration
 */
const de_LogDeliveryConfiguration = (output: any, context: __SerdeContext): LogDeliveryConfiguration => {
  const contents: any = {};
  if (output["LogType"] !== undefined) {
    contents.LogType = __expectString(output["LogType"]);
  }
  if (output["DestinationType"] !== undefined) {
    contents.DestinationType = __expectString(output["DestinationType"]);
  }
  if (output["DestinationDetails"] !== undefined) {
    contents.DestinationDetails = de_DestinationDetails(output["DestinationDetails"], context);
  }
  if (output["LogFormat"] !== undefined) {
    contents.LogFormat = __expectString(output["LogFormat"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
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
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = de_CacheCluster(output["CacheCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyCacheSubnetGroupResult
 */
const de_ModifyCacheSubnetGroupResult = (output: any, context: __SerdeContext): ModifyCacheSubnetGroupResult => {
  const contents: any = {};
  if (output["CacheSubnetGroup"] !== undefined) {
    contents.CacheSubnetGroup = de_CacheSubnetGroup(output["CacheSubnetGroup"], context);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyReplicationGroupResult
 */
const de_ModifyReplicationGroupResult = (output: any, context: __SerdeContext): ModifyReplicationGroupResult => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
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
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkTypeList
 */
const de_NetworkTypeList = (output: any, context: __SerdeContext): (NetworkType | string)[] => {
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
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = __expectString(output["NodeGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["PrimaryEndpoint"] !== undefined) {
    contents.PrimaryEndpoint = de_Endpoint(output["PrimaryEndpoint"], context);
  }
  if (output["ReaderEndpoint"] !== undefined) {
    contents.ReaderEndpoint = de_Endpoint(output["ReaderEndpoint"], context);
  }
  if (output["Slots"] !== undefined) {
    contents.Slots = __expectString(output["Slots"]);
  }
  if (output.NodeGroupMembers === "") {
    contents.NodeGroupMembers = [];
  } else if (output["NodeGroupMembers"] !== undefined && output["NodeGroupMembers"]["NodeGroupMember"] !== undefined) {
    contents.NodeGroupMembers = de_NodeGroupMemberList(
      __getArrayIfSingleItem(output["NodeGroupMembers"]["NodeGroupMember"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupConfiguration
 */
const de_NodeGroupConfiguration = (output: any, context: __SerdeContext): NodeGroupConfiguration => {
  const contents: any = {};
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = __expectString(output["NodeGroupId"]);
  }
  if (output["Slots"] !== undefined) {
    contents.Slots = __expectString(output["Slots"]);
  }
  if (output["ReplicaCount"] !== undefined) {
    contents.ReplicaCount = __strictParseInt32(output["ReplicaCount"]) as number;
  }
  if (output["PrimaryAvailabilityZone"] !== undefined) {
    contents.PrimaryAvailabilityZone = __expectString(output["PrimaryAvailabilityZone"]);
  }
  if (output.ReplicaAvailabilityZones === "") {
    contents.ReplicaAvailabilityZones = [];
  } else if (
    output["ReplicaAvailabilityZones"] !== undefined &&
    output["ReplicaAvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.ReplicaAvailabilityZones = de_AvailabilityZonesList(
      __getArrayIfSingleItem(output["ReplicaAvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  if (output["PrimaryOutpostArn"] !== undefined) {
    contents.PrimaryOutpostArn = __expectString(output["PrimaryOutpostArn"]);
  }
  if (output.ReplicaOutpostArns === "") {
    contents.ReplicaOutpostArns = [];
  } else if (output["ReplicaOutpostArns"] !== undefined && output["ReplicaOutpostArns"]["OutpostArn"] !== undefined) {
    contents.ReplicaOutpostArns = de_OutpostArnsList(
      __getArrayIfSingleItem(output["ReplicaOutpostArns"]["OutpostArn"]),
      context
    );
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
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["ReadEndpoint"] !== undefined) {
    contents.ReadEndpoint = de_Endpoint(output["ReadEndpoint"], context);
  }
  if (output["PreferredAvailabilityZone"] !== undefined) {
    contents.PreferredAvailabilityZone = __expectString(output["PreferredAvailabilityZone"]);
  }
  if (output["PreferredOutpostArn"] !== undefined) {
    contents.PreferredOutpostArn = __expectString(output["PreferredOutpostArn"]);
  }
  if (output["CurrentRole"] !== undefined) {
    contents.CurrentRole = __expectString(output["CurrentRole"]);
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
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["NodeUpdateStatus"] !== undefined) {
    contents.NodeUpdateStatus = __expectString(output["NodeUpdateStatus"]);
  }
  if (output["NodeDeletionDate"] !== undefined) {
    contents.NodeDeletionDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["NodeDeletionDate"]));
  }
  if (output["NodeUpdateStartDate"] !== undefined) {
    contents.NodeUpdateStartDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["NodeUpdateStartDate"]));
  }
  if (output["NodeUpdateEndDate"] !== undefined) {
    contents.NodeUpdateEndDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["NodeUpdateEndDate"]));
  }
  if (output["NodeUpdateInitiatedBy"] !== undefined) {
    contents.NodeUpdateInitiatedBy = __expectString(output["NodeUpdateInitiatedBy"]);
  }
  if (output["NodeUpdateInitiatedDate"] !== undefined) {
    contents.NodeUpdateInitiatedDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["NodeUpdateInitiatedDate"])
    );
  }
  if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
    contents.NodeUpdateStatusModifiedDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["NodeUpdateStatusModifiedDate"])
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeGroupUpdateStatus
 */
const de_NodeGroupUpdateStatus = (output: any, context: __SerdeContext): NodeGroupUpdateStatus => {
  const contents: any = {};
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = __expectString(output["NodeGroupId"]);
  }
  if (output.NodeGroupMemberUpdateStatus === "") {
    contents.NodeGroupMemberUpdateStatus = [];
  } else if (
    output["NodeGroupMemberUpdateStatus"] !== undefined &&
    output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"] !== undefined
  ) {
    contents.NodeGroupMemberUpdateStatus = de_NodeGroupMemberUpdateStatusList(
      __getArrayIfSingleItem(output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNodeSnapshot
 */
const de_NodeSnapshot = (output: any, context: __SerdeContext): NodeSnapshot => {
  const contents: any = {};
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = __expectString(output["NodeGroupId"]);
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["NodeGroupConfiguration"] !== undefined) {
    contents.NodeGroupConfiguration = de_NodeGroupConfiguration(output["NodeGroupConfiguration"], context);
  }
  if (output["CacheSize"] !== undefined) {
    contents.CacheSize = __expectString(output["CacheSize"]);
  }
  if (output["CacheNodeCreateTime"] !== undefined) {
    contents.CacheNodeCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CacheNodeCreateTime"]));
  }
  if (output["SnapshotCreateTime"] !== undefined) {
    contents.SnapshotCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SnapshotCreateTime"]));
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  const contents: any = {};
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["TopicStatus"] !== undefined) {
    contents.TopicStatus = __expectString(output["TopicStatus"]);
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
  if (output["ParameterName"] !== undefined) {
    contents.ParameterName = __expectString(output["ParameterName"]);
  }
  if (output["ParameterValue"] !== undefined) {
    contents.ParameterValue = __expectString(output["ParameterValue"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Source"] !== undefined) {
    contents.Source = __expectString(output["Source"]);
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = __expectString(output["DataType"]);
  }
  if (output["AllowedValues"] !== undefined) {
    contents.AllowedValues = __expectString(output["AllowedValues"]);
  }
  if (output["IsModifiable"] !== undefined) {
    contents.IsModifiable = __parseBoolean(output["IsModifiable"]);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
  }
  if (output["ChangeType"] !== undefined) {
    contents.ChangeType = __expectString(output["ChangeType"]);
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
  if (output["LogType"] !== undefined) {
    contents.LogType = __expectString(output["LogType"]);
  }
  if (output["DestinationType"] !== undefined) {
    contents.DestinationType = __expectString(output["DestinationType"]);
  }
  if (output["DestinationDetails"] !== undefined) {
    contents.DestinationDetails = de_DestinationDetails(output["DestinationDetails"], context);
  }
  if (output["LogFormat"] !== undefined) {
    contents.LogFormat = __expectString(output["LogFormat"]);
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
  if (output["NumCacheNodes"] !== undefined) {
    contents.NumCacheNodes = __strictParseInt32(output["NumCacheNodes"]) as number;
  }
  if (output.CacheNodeIdsToRemove === "") {
    contents.CacheNodeIdsToRemove = [];
  } else if (
    output["CacheNodeIdsToRemove"] !== undefined &&
    output["CacheNodeIdsToRemove"]["CacheNodeId"] !== undefined
  ) {
    contents.CacheNodeIdsToRemove = de_CacheNodeIdsList(
      __getArrayIfSingleItem(output["CacheNodeIdsToRemove"]["CacheNodeId"]),
      context
    );
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["AuthTokenStatus"] !== undefined) {
    contents.AuthTokenStatus = __expectString(output["AuthTokenStatus"]);
  }
  if (output.LogDeliveryConfigurations === "") {
    contents.LogDeliveryConfigurations = [];
  } else if (
    output["LogDeliveryConfigurations"] !== undefined &&
    output["LogDeliveryConfigurations"]["member"] !== undefined
  ) {
    contents.LogDeliveryConfigurations = de_PendingLogDeliveryConfigurationList(
      __getArrayIfSingleItem(output["LogDeliveryConfigurations"]["member"]),
      context
    );
  }
  if (output["TransitEncryptionEnabled"] !== undefined) {
    contents.TransitEncryptionEnabled = __parseBoolean(output["TransitEncryptionEnabled"]);
  }
  if (output["TransitEncryptionMode"] !== undefined) {
    contents.TransitEncryptionMode = __expectString(output["TransitEncryptionMode"]);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessedUpdateAction
 */
const de_ProcessedUpdateAction = (output: any, context: __SerdeContext): ProcessedUpdateAction => {
  const contents: any = {};
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = __expectString(output["ServiceUpdateName"]);
  }
  if (output["UpdateActionStatus"] !== undefined) {
    contents.UpdateActionStatus = __expectString(output["UpdateActionStatus"]);
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
  if (output["ReservedCacheNode"] !== undefined) {
    contents.ReservedCacheNode = de_ReservedCacheNode(output["ReservedCacheNode"], context);
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
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = de_GlobalReplicationGroup(output["GlobalReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRebootCacheClusterResult
 */
const de_RebootCacheClusterResult = (output: any, context: __SerdeContext): RebootCacheClusterResult => {
  const contents: any = {};
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = de_CacheCluster(output["CacheCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {};
  if (output["RecurringChargeAmount"] !== undefined) {
    contents.RecurringChargeAmount = __strictParseFloat(output["RecurringChargeAmount"]) as number;
  }
  if (output["RecurringChargeFrequency"] !== undefined) {
    contents.RecurringChargeFrequency = __expectString(output["RecurringChargeFrequency"]);
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
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["GlobalReplicationGroupInfo"] !== undefined) {
    contents.GlobalReplicationGroupInfo = de_GlobalReplicationGroupInfo(output["GlobalReplicationGroupInfo"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = de_ReplicationGroupPendingModifiedValues(output["PendingModifiedValues"], context);
  }
  if (output.MemberClusters === "") {
    contents.MemberClusters = [];
  } else if (output["MemberClusters"] !== undefined && output["MemberClusters"]["ClusterId"] !== undefined) {
    contents.MemberClusters = de_ClusterIdList(__getArrayIfSingleItem(output["MemberClusters"]["ClusterId"]), context);
  }
  if (output.NodeGroups === "") {
    contents.NodeGroups = [];
  } else if (output["NodeGroups"] !== undefined && output["NodeGroups"]["NodeGroup"] !== undefined) {
    contents.NodeGroups = de_NodeGroupList(__getArrayIfSingleItem(output["NodeGroups"]["NodeGroup"]), context);
  }
  if (output["SnapshottingClusterId"] !== undefined) {
    contents.SnapshottingClusterId = __expectString(output["SnapshottingClusterId"]);
  }
  if (output["AutomaticFailover"] !== undefined) {
    contents.AutomaticFailover = __expectString(output["AutomaticFailover"]);
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = __expectString(output["MultiAZ"]);
  }
  if (output["ConfigurationEndpoint"] !== undefined) {
    contents.ConfigurationEndpoint = de_Endpoint(output["ConfigurationEndpoint"], context);
  }
  if (output["SnapshotRetentionLimit"] !== undefined) {
    contents.SnapshotRetentionLimit = __strictParseInt32(output["SnapshotRetentionLimit"]) as number;
  }
  if (output["SnapshotWindow"] !== undefined) {
    contents.SnapshotWindow = __expectString(output["SnapshotWindow"]);
  }
  if (output["ClusterEnabled"] !== undefined) {
    contents.ClusterEnabled = __parseBoolean(output["ClusterEnabled"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["AuthTokenEnabled"] !== undefined) {
    contents.AuthTokenEnabled = __parseBoolean(output["AuthTokenEnabled"]);
  }
  if (output["AuthTokenLastModifiedDate"] !== undefined) {
    contents.AuthTokenLastModifiedDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["AuthTokenLastModifiedDate"])
    );
  }
  if (output["TransitEncryptionEnabled"] !== undefined) {
    contents.TransitEncryptionEnabled = __parseBoolean(output["TransitEncryptionEnabled"]);
  }
  if (output["AtRestEncryptionEnabled"] !== undefined) {
    contents.AtRestEncryptionEnabled = __parseBoolean(output["AtRestEncryptionEnabled"]);
  }
  if (output.MemberClustersOutpostArns === "") {
    contents.MemberClustersOutpostArns = [];
  } else if (
    output["MemberClustersOutpostArns"] !== undefined &&
    output["MemberClustersOutpostArns"]["ReplicationGroupOutpostArn"] !== undefined
  ) {
    contents.MemberClustersOutpostArns = de_ReplicationGroupOutpostArnList(
      __getArrayIfSingleItem(output["MemberClustersOutpostArns"]["ReplicationGroupOutpostArn"]),
      context
    );
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output.UserGroupIds === "") {
    contents.UserGroupIds = [];
  } else if (output["UserGroupIds"] !== undefined && output["UserGroupIds"]["member"] !== undefined) {
    contents.UserGroupIds = de_UserGroupIdList(__getArrayIfSingleItem(output["UserGroupIds"]["member"]), context);
  }
  if (output.LogDeliveryConfigurations === "") {
    contents.LogDeliveryConfigurations = [];
  } else if (
    output["LogDeliveryConfigurations"] !== undefined &&
    output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"] !== undefined
  ) {
    contents.LogDeliveryConfigurations = de_LogDeliveryConfigurationList(
      __getArrayIfSingleItem(output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"]),
      context
    );
  }
  if (output["ReplicationGroupCreateTime"] !== undefined) {
    contents.ReplicationGroupCreateTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ReplicationGroupCreateTime"])
    );
  }
  if (output["DataTiering"] !== undefined) {
    contents.DataTiering = __expectString(output["DataTiering"]);
  }
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade = __parseBoolean(output["AutoMinorVersionUpgrade"]);
  }
  if (output["NetworkType"] !== undefined) {
    contents.NetworkType = __expectString(output["NetworkType"]);
  }
  if (output["IpDiscovery"] !== undefined) {
    contents.IpDiscovery = __expectString(output["IpDiscovery"]);
  }
  if (output["TransitEncryptionMode"] !== undefined) {
    contents.TransitEncryptionMode = __expectString(output["TransitEncryptionMode"]);
  }
  if (output["ClusterMode"] !== undefined) {
    contents.ClusterMode = __expectString(output["ClusterMode"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReplicationGroups === "") {
    contents.ReplicationGroups = [];
  } else if (
    output["ReplicationGroups"] !== undefined &&
    output["ReplicationGroups"]["ReplicationGroup"] !== undefined
  ) {
    contents.ReplicationGroups = de_ReplicationGroupList(
      __getArrayIfSingleItem(output["ReplicationGroups"]["ReplicationGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryReplicationGroupNotFoundFault
 */
const de_ReplicationGroupNotFoundFault = (output: any, context: __SerdeContext): ReplicationGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["PrimaryClusterId"] !== undefined) {
    contents.PrimaryClusterId = __expectString(output["PrimaryClusterId"]);
  }
  if (output["AutomaticFailoverStatus"] !== undefined) {
    contents.AutomaticFailoverStatus = __expectString(output["AutomaticFailoverStatus"]);
  }
  if (output["Resharding"] !== undefined) {
    contents.Resharding = de_ReshardingStatus(output["Resharding"], context);
  }
  if (output["AuthTokenStatus"] !== undefined) {
    contents.AuthTokenStatus = __expectString(output["AuthTokenStatus"]);
  }
  if (output["UserGroups"] !== undefined) {
    contents.UserGroups = de_UserGroupsUpdateStatus(output["UserGroups"], context);
  }
  if (output.LogDeliveryConfigurations === "") {
    contents.LogDeliveryConfigurations = [];
  } else if (
    output["LogDeliveryConfigurations"] !== undefined &&
    output["LogDeliveryConfigurations"]["member"] !== undefined
  ) {
    contents.LogDeliveryConfigurations = de_PendingLogDeliveryConfigurationList(
      __getArrayIfSingleItem(output["LogDeliveryConfigurations"]["member"]),
      context
    );
  }
  if (output["TransitEncryptionEnabled"] !== undefined) {
    contents.TransitEncryptionEnabled = __parseBoolean(output["TransitEncryptionEnabled"]);
  }
  if (output["TransitEncryptionMode"] !== undefined) {
    contents.TransitEncryptionMode = __expectString(output["TransitEncryptionMode"]);
  }
  if (output["ClusterMode"] !== undefined) {
    contents.ClusterMode = __expectString(output["ClusterMode"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNode
 */
const de_ReservedCacheNode = (output: any, context: __SerdeContext): ReservedCacheNode => {
  const contents: any = {};
  if (output["ReservedCacheNodeId"] !== undefined) {
    contents.ReservedCacheNodeId = __expectString(output["ReservedCacheNodeId"]);
  }
  if (output["ReservedCacheNodesOfferingId"] !== undefined) {
    contents.ReservedCacheNodesOfferingId = __expectString(output["ReservedCacheNodesOfferingId"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = __strictParseFloat(output["FixedPrice"]) as number;
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = __strictParseFloat(output["UsagePrice"]) as number;
  }
  if (output["CacheNodeCount"] !== undefined) {
    contents.CacheNodeCount = __strictParseInt32(output["CacheNodeCount"]) as number;
  }
  if (output["ProductDescription"] !== undefined) {
    contents.ProductDescription = __expectString(output["ProductDescription"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = __expectString(output["OfferingType"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  } else if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
    contents.RecurringCharges = de_RecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  if (output["ReservationARN"] !== undefined) {
    contents.ReservationARN = __expectString(output["ReservationARN"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedCacheNodes === "") {
    contents.ReservedCacheNodes = [];
  } else if (
    output["ReservedCacheNodes"] !== undefined &&
    output["ReservedCacheNodes"]["ReservedCacheNode"] !== undefined
  ) {
    contents.ReservedCacheNodes = de_ReservedCacheNodeList(
      __getArrayIfSingleItem(output["ReservedCacheNodes"]["ReservedCacheNode"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodeNotFoundFault
 */
const de_ReservedCacheNodeNotFoundFault = (output: any, context: __SerdeContext): ReservedCacheNodeNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedCacheNodesOffering
 */
const de_ReservedCacheNodesOffering = (output: any, context: __SerdeContext): ReservedCacheNodesOffering => {
  const contents: any = {};
  if (output["ReservedCacheNodesOfferingId"] !== undefined) {
    contents.ReservedCacheNodesOfferingId = __expectString(output["ReservedCacheNodesOfferingId"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = __strictParseFloat(output["FixedPrice"]) as number;
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = __strictParseFloat(output["UsagePrice"]) as number;
  }
  if (output["ProductDescription"] !== undefined) {
    contents.ProductDescription = __expectString(output["ProductDescription"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = __expectString(output["OfferingType"]);
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  } else if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
    contents.RecurringCharges = de_RecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedCacheNodesOfferings === "") {
    contents.ReservedCacheNodesOfferings = [];
  } else if (
    output["ReservedCacheNodesOfferings"] !== undefined &&
    output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"] !== undefined
  ) {
    contents.ReservedCacheNodesOfferings = de_ReservedCacheNodesOfferingList(
      __getArrayIfSingleItem(output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReshardingStatus
 */
const de_ReshardingStatus = (output: any, context: __SerdeContext): ReshardingStatus => {
  const contents: any = {};
  if (output["SlotMigration"] !== undefined) {
    contents.SlotMigration = de_SlotMigration(output["SlotMigration"], context);
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
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = de_CacheSecurityGroup(output["CacheSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_querySecurityGroupMembership
 */
const de_SecurityGroupMembership = (output: any, context: __SerdeContext): SecurityGroupMembership => {
  const contents: any = {};
  if (output["SecurityGroupId"] !== undefined) {
    contents.SecurityGroupId = __expectString(output["SecurityGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
 * deserializeAws_queryServiceLinkedRoleNotFoundFault
 */
const de_ServiceLinkedRoleNotFoundFault = (output: any, context: __SerdeContext): ServiceLinkedRoleNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceUpdate
 */
const de_ServiceUpdate = (output: any, context: __SerdeContext): ServiceUpdate => {
  const contents: any = {};
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = __expectString(output["ServiceUpdateName"]);
  }
  if (output["ServiceUpdateReleaseDate"] !== undefined) {
    contents.ServiceUpdateReleaseDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ServiceUpdateReleaseDate"])
    );
  }
  if (output["ServiceUpdateEndDate"] !== undefined) {
    contents.ServiceUpdateEndDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ServiceUpdateEndDate"]));
  }
  if (output["ServiceUpdateSeverity"] !== undefined) {
    contents.ServiceUpdateSeverity = __expectString(output["ServiceUpdateSeverity"]);
  }
  if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
    contents.ServiceUpdateRecommendedApplyByDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ServiceUpdateRecommendedApplyByDate"])
    );
  }
  if (output["ServiceUpdateStatus"] !== undefined) {
    contents.ServiceUpdateStatus = __expectString(output["ServiceUpdateStatus"]);
  }
  if (output["ServiceUpdateDescription"] !== undefined) {
    contents.ServiceUpdateDescription = __expectString(output["ServiceUpdateDescription"]);
  }
  if (output["ServiceUpdateType"] !== undefined) {
    contents.ServiceUpdateType = __expectString(output["ServiceUpdateType"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["AutoUpdateAfterRecommendedApplyByDate"] !== undefined) {
    contents.AutoUpdateAfterRecommendedApplyByDate = __parseBoolean(output["AutoUpdateAfterRecommendedApplyByDate"]);
  }
  if (output["EstimatedUpdateTime"] !== undefined) {
    contents.EstimatedUpdateTime = __expectString(output["EstimatedUpdateTime"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceUpdatesMessage
 */
const de_ServiceUpdatesMessage = (output: any, context: __SerdeContext): ServiceUpdatesMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ServiceUpdates === "") {
    contents.ServiceUpdates = [];
  } else if (output["ServiceUpdates"] !== undefined && output["ServiceUpdates"]["ServiceUpdate"] !== undefined) {
    contents.ServiceUpdates = de_ServiceUpdateList(
      __getArrayIfSingleItem(output["ServiceUpdates"]["ServiceUpdate"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_querySlotMigration
 */
const de_SlotMigration = (output: any, context: __SerdeContext): SlotMigration => {
  const contents: any = {};
  if (output["ProgressPercentage"] !== undefined) {
    contents.ProgressPercentage = __strictParseFloat(output["ProgressPercentage"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_querySnapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  const contents: any = {};
  if (output["SnapshotName"] !== undefined) {
    contents.SnapshotName = __expectString(output["SnapshotName"]);
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["ReplicationGroupDescription"] !== undefined) {
    contents.ReplicationGroupDescription = __expectString(output["ReplicationGroupDescription"]);
  }
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["SnapshotStatus"] !== undefined) {
    contents.SnapshotStatus = __expectString(output["SnapshotStatus"]);
  }
  if (output["SnapshotSource"] !== undefined) {
    contents.SnapshotSource = __expectString(output["SnapshotSource"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["NumCacheNodes"] !== undefined) {
    contents.NumCacheNodes = __strictParseInt32(output["NumCacheNodes"]) as number;
  }
  if (output["PreferredAvailabilityZone"] !== undefined) {
    contents.PreferredAvailabilityZone = __expectString(output["PreferredAvailabilityZone"]);
  }
  if (output["PreferredOutpostArn"] !== undefined) {
    contents.PreferredOutpostArn = __expectString(output["PreferredOutpostArn"]);
  }
  if (output["CacheClusterCreateTime"] !== undefined) {
    contents.CacheClusterCreateTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["CacheClusterCreateTime"])
    );
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = __expectString(output["PreferredMaintenanceWindow"]);
  }
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = __expectString(output["CacheParameterGroupName"]);
  }
  if (output["CacheSubnetGroupName"] !== undefined) {
    contents.CacheSubnetGroupName = __expectString(output["CacheSubnetGroupName"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade = __parseBoolean(output["AutoMinorVersionUpgrade"]);
  }
  if (output["SnapshotRetentionLimit"] !== undefined) {
    contents.SnapshotRetentionLimit = __strictParseInt32(output["SnapshotRetentionLimit"]) as number;
  }
  if (output["SnapshotWindow"] !== undefined) {
    contents.SnapshotWindow = __expectString(output["SnapshotWindow"]);
  }
  if (output["NumNodeGroups"] !== undefined) {
    contents.NumNodeGroups = __strictParseInt32(output["NumNodeGroups"]) as number;
  }
  if (output["AutomaticFailover"] !== undefined) {
    contents.AutomaticFailover = __expectString(output["AutomaticFailover"]);
  }
  if (output.NodeSnapshots === "") {
    contents.NodeSnapshots = [];
  } else if (output["NodeSnapshots"] !== undefined && output["NodeSnapshots"]["NodeSnapshot"] !== undefined) {
    contents.NodeSnapshots = de_NodeSnapshotList(
      __getArrayIfSingleItem(output["NodeSnapshots"]["NodeSnapshot"]),
      context
    );
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["DataTiering"] !== undefined) {
    contents.DataTiering = __expectString(output["DataTiering"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotAlreadyExistsFault
 */
const de_SnapshotAlreadyExistsFault = (output: any, context: __SerdeContext): SnapshotAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotQuotaExceededFault
 */
const de_SnapshotQuotaExceededFault = (output: any, context: __SerdeContext): SnapshotQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStartMigrationResponse
 */
const de_StartMigrationResponse = (output: any, context: __SerdeContext): StartMigrationResponse => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_querySubnet
 */
const de_Subnet = (output: any, context: __SerdeContext): Subnet => {
  const contents: any = {};
  if (output["SubnetIdentifier"] !== undefined) {
    contents.SubnetIdentifier = __expectString(output["SubnetIdentifier"]);
  }
  if (output["SubnetAvailabilityZone"] !== undefined) {
    contents.SubnetAvailabilityZone = de_AvailabilityZone(output["SubnetAvailabilityZone"], context);
  }
  if (output["SubnetOutpost"] !== undefined) {
    contents.SubnetOutpost = de_SubnetOutpost(output["SubnetOutpost"], context);
  }
  if (output.SupportedNetworkTypes === "") {
    contents.SupportedNetworkTypes = [];
  } else if (output["SupportedNetworkTypes"] !== undefined && output["SupportedNetworkTypes"]["member"] !== undefined) {
    contents.SupportedNetworkTypes = de_NetworkTypeList(
      __getArrayIfSingleItem(output["SupportedNetworkTypes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_querySubnetInUse
 */
const de_SubnetInUse = (output: any, context: __SerdeContext): SubnetInUse => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetOutpost
 */
const de_SubnetOutpost = (output: any, context: __SerdeContext): SubnetOutpost => {
  const contents: any = {};
  if (output["SubnetOutpostArn"] !== undefined) {
    contents.SubnetOutpostArn = __expectString(output["SubnetOutpostArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = de_TagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTagNotFoundFault
 */
const de_TagNotFoundFault = (output: any, context: __SerdeContext): TagNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagQuotaPerResourceExceeded
 */
const de_TagQuotaPerResourceExceeded = (output: any, context: __SerdeContext): TagQuotaPerResourceExceeded => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTestFailoverNotAvailableFault
 */
const de_TestFailoverNotAvailableFault = (output: any, context: __SerdeContext): TestFailoverNotAvailableFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTestFailoverResult
 */
const de_TestFailoverResult = (output: any, context: __SerdeContext): TestFailoverResult => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryTestMigrationResponse
 */
const de_TestMigrationResponse = (output: any, context: __SerdeContext): TestMigrationResponse => {
  const contents: any = {};
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = de_ReplicationGroup(output["ReplicationGroup"], context);
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
 * deserializeAws_queryUnprocessedUpdateAction
 */
const de_UnprocessedUpdateAction = (output: any, context: __SerdeContext): UnprocessedUpdateAction => {
  const contents: any = {};
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = __expectString(output["ServiceUpdateName"]);
  }
  if (output["ErrorType"] !== undefined) {
    contents.ErrorType = __expectString(output["ErrorType"]);
  }
  if (output["ErrorMessage"] !== undefined) {
    contents.ErrorMessage = __expectString(output["ErrorMessage"]);
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
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = __expectString(output["ServiceUpdateName"]);
  }
  if (output["ServiceUpdateReleaseDate"] !== undefined) {
    contents.ServiceUpdateReleaseDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ServiceUpdateReleaseDate"])
    );
  }
  if (output["ServiceUpdateSeverity"] !== undefined) {
    contents.ServiceUpdateSeverity = __expectString(output["ServiceUpdateSeverity"]);
  }
  if (output["ServiceUpdateStatus"] !== undefined) {
    contents.ServiceUpdateStatus = __expectString(output["ServiceUpdateStatus"]);
  }
  if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
    contents.ServiceUpdateRecommendedApplyByDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ServiceUpdateRecommendedApplyByDate"])
    );
  }
  if (output["ServiceUpdateType"] !== undefined) {
    contents.ServiceUpdateType = __expectString(output["ServiceUpdateType"]);
  }
  if (output["UpdateActionAvailableDate"] !== undefined) {
    contents.UpdateActionAvailableDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["UpdateActionAvailableDate"])
    );
  }
  if (output["UpdateActionStatus"] !== undefined) {
    contents.UpdateActionStatus = __expectString(output["UpdateActionStatus"]);
  }
  if (output["NodesUpdated"] !== undefined) {
    contents.NodesUpdated = __expectString(output["NodesUpdated"]);
  }
  if (output["UpdateActionStatusModifiedDate"] !== undefined) {
    contents.UpdateActionStatusModifiedDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["UpdateActionStatusModifiedDate"])
    );
  }
  if (output["SlaMet"] !== undefined) {
    contents.SlaMet = __expectString(output["SlaMet"]);
  }
  if (output.NodeGroupUpdateStatus === "") {
    contents.NodeGroupUpdateStatus = [];
  } else if (
    output["NodeGroupUpdateStatus"] !== undefined &&
    output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"] !== undefined
  ) {
    contents.NodeGroupUpdateStatus = de_NodeGroupUpdateStatusList(
      __getArrayIfSingleItem(output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"]),
      context
    );
  }
  if (output.CacheNodeUpdateStatus === "") {
    contents.CacheNodeUpdateStatus = [];
  } else if (
    output["CacheNodeUpdateStatus"] !== undefined &&
    output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"] !== undefined
  ) {
    contents.CacheNodeUpdateStatus = de_CacheNodeUpdateStatusList(
      __getArrayIfSingleItem(output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"]),
      context
    );
  }
  if (output["EstimatedUpdateTime"] !== undefined) {
    contents.EstimatedUpdateTime = __expectString(output["EstimatedUpdateTime"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
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
  if (output.ProcessedUpdateActions === "") {
    contents.ProcessedUpdateActions = [];
  } else if (
    output["ProcessedUpdateActions"] !== undefined &&
    output["ProcessedUpdateActions"]["ProcessedUpdateAction"] !== undefined
  ) {
    contents.ProcessedUpdateActions = de_ProcessedUpdateActionList(
      __getArrayIfSingleItem(output["ProcessedUpdateActions"]["ProcessedUpdateAction"]),
      context
    );
  }
  if (output.UnprocessedUpdateActions === "") {
    contents.UnprocessedUpdateActions = [];
  } else if (
    output["UnprocessedUpdateActions"] !== undefined &&
    output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"] !== undefined
  ) {
    contents.UnprocessedUpdateActions = de_UnprocessedUpdateActionList(
      __getArrayIfSingleItem(output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateActionsMessage
 */
const de_UpdateActionsMessage = (output: any, context: __SerdeContext): UpdateActionsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.UpdateActions === "") {
    contents.UpdateActions = [];
  } else if (output["UpdateActions"] !== undefined && output["UpdateActions"]["UpdateAction"] !== undefined) {
    contents.UpdateActions = de_UpdateActionList(
      __getArrayIfSingleItem(output["UpdateActions"]["UpdateAction"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryUser
 */
const de_User = (output: any, context: __SerdeContext): User => {
  const contents: any = {};
  if (output["UserId"] !== undefined) {
    contents.UserId = __expectString(output["UserId"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
  }
  if (output["AccessString"] !== undefined) {
    contents.AccessString = __expectString(output["AccessString"]);
  }
  if (output.UserGroupIds === "") {
    contents.UserGroupIds = [];
  } else if (output["UserGroupIds"] !== undefined && output["UserGroupIds"]["member"] !== undefined) {
    contents.UserGroupIds = de_UserGroupIdList(__getArrayIfSingleItem(output["UserGroupIds"]["member"]), context);
  }
  if (output["Authentication"] !== undefined) {
    contents.Authentication = de_Authentication(output["Authentication"], context);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserAlreadyExistsFault
 */
const de_UserAlreadyExistsFault = (output: any, context: __SerdeContext): UserAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroup
 */
const de_UserGroup = (output: any, context: __SerdeContext): UserGroup => {
  const contents: any = {};
  if (output["UserGroupId"] !== undefined) {
    contents.UserGroupId = __expectString(output["UserGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output.UserIds === "") {
    contents.UserIds = [];
  } else if (output["UserIds"] !== undefined && output["UserIds"]["member"] !== undefined) {
    contents.UserIds = de_UserIdList(__getArrayIfSingleItem(output["UserIds"]["member"]), context);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
  }
  if (output["PendingChanges"] !== undefined) {
    contents.PendingChanges = de_UserGroupPendingChanges(output["PendingChanges"], context);
  }
  if (output.ReplicationGroups === "") {
    contents.ReplicationGroups = [];
  } else if (output["ReplicationGroups"] !== undefined && output["ReplicationGroups"]["member"] !== undefined) {
    contents.ReplicationGroups = de_UGReplicationGroupIdList(
      __getArrayIfSingleItem(output["ReplicationGroups"]["member"]),
      context
    );
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupAlreadyExistsFault
 */
const de_UserGroupAlreadyExistsFault = (output: any, context: __SerdeContext): UserGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupPendingChanges
 */
const de_UserGroupPendingChanges = (output: any, context: __SerdeContext): UserGroupPendingChanges => {
  const contents: any = {};
  if (output.UserIdsToRemove === "") {
    contents.UserIdsToRemove = [];
  } else if (output["UserIdsToRemove"] !== undefined && output["UserIdsToRemove"]["member"] !== undefined) {
    contents.UserIdsToRemove = de_UserIdList(__getArrayIfSingleItem(output["UserIdsToRemove"]["member"]), context);
  }
  if (output.UserIdsToAdd === "") {
    contents.UserIdsToAdd = [];
  } else if (output["UserIdsToAdd"] !== undefined && output["UserIdsToAdd"]["member"] !== undefined) {
    contents.UserIdsToAdd = de_UserIdList(__getArrayIfSingleItem(output["UserIdsToAdd"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupQuotaExceededFault
 */
const de_UserGroupQuotaExceededFault = (output: any, context: __SerdeContext): UserGroupQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserGroupsUpdateStatus
 */
const de_UserGroupsUpdateStatus = (output: any, context: __SerdeContext): UserGroupsUpdateStatus => {
  const contents: any = {};
  if (output.UserGroupIdsToAdd === "") {
    contents.UserGroupIdsToAdd = [];
  } else if (output["UserGroupIdsToAdd"] !== undefined && output["UserGroupIdsToAdd"]["member"] !== undefined) {
    contents.UserGroupIdsToAdd = de_UserGroupIdList(
      __getArrayIfSingleItem(output["UserGroupIdsToAdd"]["member"]),
      context
    );
  }
  if (output.UserGroupIdsToRemove === "") {
    contents.UserGroupIdsToRemove = [];
  } else if (output["UserGroupIdsToRemove"] !== undefined && output["UserGroupIdsToRemove"]["member"] !== undefined) {
    contents.UserGroupIdsToRemove = de_UserGroupIdList(
      __getArrayIfSingleItem(output["UserGroupIdsToRemove"]["member"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserQuotaExceededFault
 */
const de_UserQuotaExceededFault = (output: any, context: __SerdeContext): UserQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

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
