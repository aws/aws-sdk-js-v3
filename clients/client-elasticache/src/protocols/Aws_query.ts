// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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

export const serializeAws_queryAddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddTagsToResourceMessage(input, context),
    Action: "AddTagsToResource",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = async (
  input: AuthorizeCacheSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage(input, context),
    Action: "AuthorizeCacheSecurityGroupIngress",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchApplyUpdateActionCommand = async (
  input: BatchApplyUpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchApplyUpdateActionMessage(input, context),
    Action: "BatchApplyUpdateAction",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchStopUpdateActionCommand = async (
  input: BatchStopUpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchStopUpdateActionMessage(input, context),
    Action: "BatchStopUpdateAction",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCompleteMigrationCommand = async (
  input: CompleteMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCompleteMigrationMessage(input, context),
    Action: "CompleteMigration",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopySnapshotMessage(input, context),
    Action: "CopySnapshot",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateCacheClusterCommand = async (
  input: CreateCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateCacheClusterMessage(input, context),
    Action: "CreateCacheCluster",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateCacheParameterGroupCommand = async (
  input: CreateCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateCacheParameterGroupMessage(input, context),
    Action: "CreateCacheParameterGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateCacheSecurityGroupCommand = async (
  input: CreateCacheSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateCacheSecurityGroupMessage(input, context),
    Action: "CreateCacheSecurityGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateCacheSubnetGroupCommand = async (
  input: CreateCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateCacheSubnetGroupMessage(input, context),
    Action: "CreateCacheSubnetGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateGlobalReplicationGroupCommand = async (
  input: CreateGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateGlobalReplicationGroupMessage(input, context),
    Action: "CreateGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateReplicationGroupCommand = async (
  input: CreateReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateReplicationGroupMessage(input, context),
    Action: "CreateReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateSnapshotMessage(input, context),
    Action: "CreateSnapshot",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateUserMessage(input, context),
    Action: "CreateUser",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateUserGroupCommand = async (
  input: CreateUserGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateUserGroupMessage(input, context),
    Action: "CreateUserGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage(input, context),
    Action: "DecreaseNodeGroupsInGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDecreaseReplicaCountCommand = async (
  input: DecreaseReplicaCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDecreaseReplicaCountMessage(input, context),
    Action: "DecreaseReplicaCount",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteCacheClusterCommand = async (
  input: DeleteCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteCacheClusterMessage(input, context),
    Action: "DeleteCacheCluster",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteCacheParameterGroupCommand = async (
  input: DeleteCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteCacheParameterGroupMessage(input, context),
    Action: "DeleteCacheParameterGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteCacheSecurityGroupCommand = async (
  input: DeleteCacheSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteCacheSecurityGroupMessage(input, context),
    Action: "DeleteCacheSecurityGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteCacheSubnetGroupCommand = async (
  input: DeleteCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteCacheSubnetGroupMessage(input, context),
    Action: "DeleteCacheSubnetGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteGlobalReplicationGroupCommand = async (
  input: DeleteGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteGlobalReplicationGroupMessage(input, context),
    Action: "DeleteGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteReplicationGroupCommand = async (
  input: DeleteReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteReplicationGroupMessage(input, context),
    Action: "DeleteReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSnapshotMessage(input, context),
    Action: "DeleteSnapshot",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteUserMessage(input, context),
    Action: "DeleteUser",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteUserGroupCommand = async (
  input: DeleteUserGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteUserGroupMessage(input, context),
    Action: "DeleteUserGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCacheClustersCommand = async (
  input: DescribeCacheClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCacheClustersMessage(input, context),
    Action: "DescribeCacheClusters",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCacheEngineVersionsCommand = async (
  input: DescribeCacheEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCacheEngineVersionsMessage(input, context),
    Action: "DescribeCacheEngineVersions",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCacheParameterGroupsCommand = async (
  input: DescribeCacheParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCacheParameterGroupsMessage(input, context),
    Action: "DescribeCacheParameterGroups",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCacheParametersCommand = async (
  input: DescribeCacheParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCacheParametersMessage(input, context),
    Action: "DescribeCacheParameters",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCacheSecurityGroupsCommand = async (
  input: DescribeCacheSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCacheSecurityGroupsMessage(input, context),
    Action: "DescribeCacheSecurityGroups",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCacheSubnetGroupsCommand = async (
  input: DescribeCacheSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCacheSubnetGroupsMessage(input, context),
    Action: "DescribeCacheSubnetGroups",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEngineDefaultParametersCommand = async (
  input: DescribeEngineDefaultParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEngineDefaultParametersMessage(input, context),
    Action: "DescribeEngineDefaultParameters",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventsMessage(input, context),
    Action: "DescribeEvents",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeGlobalReplicationGroupsCommand = async (
  input: DescribeGlobalReplicationGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeGlobalReplicationGroupsMessage(input, context),
    Action: "DescribeGlobalReplicationGroups",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReplicationGroupsCommand = async (
  input: DescribeReplicationGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReplicationGroupsMessage(input, context),
    Action: "DescribeReplicationGroups",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReservedCacheNodesCommand = async (
  input: DescribeReservedCacheNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReservedCacheNodesMessage(input, context),
    Action: "DescribeReservedCacheNodes",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReservedCacheNodesOfferingsCommand = async (
  input: DescribeReservedCacheNodesOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReservedCacheNodesOfferingsMessage(input, context),
    Action: "DescribeReservedCacheNodesOfferings",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeServiceUpdatesCommand = async (
  input: DescribeServiceUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeServiceUpdatesMessage(input, context),
    Action: "DescribeServiceUpdates",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeSnapshotsMessage(input, context),
    Action: "DescribeSnapshots",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeUpdateActionsCommand = async (
  input: DescribeUpdateActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeUpdateActionsMessage(input, context),
    Action: "DescribeUpdateActions",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeUserGroupsCommand = async (
  input: DescribeUserGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeUserGroupsMessage(input, context),
    Action: "DescribeUserGroups",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeUsersMessage(input, context),
    Action: "DescribeUsers",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisassociateGlobalReplicationGroupCommand = async (
  input: DisassociateGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisassociateGlobalReplicationGroupMessage(input, context),
    Action: "DisassociateGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryFailoverGlobalReplicationGroupCommand = async (
  input: FailoverGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryFailoverGlobalReplicationGroupMessage(input, context),
    Action: "FailoverGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupMessage(input, context),
    Action: "IncreaseNodeGroupsInGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryIncreaseReplicaCountCommand = async (
  input: IncreaseReplicaCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryIncreaseReplicaCountMessage(input, context),
    Action: "IncreaseReplicaCount",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListAllowedNodeTypeModificationsCommand = async (
  input: ListAllowedNodeTypeModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListAllowedNodeTypeModificationsMessage(input, context),
    Action: "ListAllowedNodeTypeModifications",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTagsForResourceMessage(input, context),
    Action: "ListTagsForResource",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyCacheClusterCommand = async (
  input: ModifyCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyCacheClusterMessage(input, context),
    Action: "ModifyCacheCluster",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyCacheParameterGroupCommand = async (
  input: ModifyCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyCacheParameterGroupMessage(input, context),
    Action: "ModifyCacheParameterGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyCacheSubnetGroupCommand = async (
  input: ModifyCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyCacheSubnetGroupMessage(input, context),
    Action: "ModifyCacheSubnetGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyGlobalReplicationGroupCommand = async (
  input: ModifyGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyGlobalReplicationGroupMessage(input, context),
    Action: "ModifyGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyReplicationGroupCommand = async (
  input: ModifyReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyReplicationGroupMessage(input, context),
    Action: "ModifyReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyReplicationGroupShardConfigurationCommand = async (
  input: ModifyReplicationGroupShardConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyReplicationGroupShardConfigurationMessage(input, context),
    Action: "ModifyReplicationGroupShardConfiguration",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyUserCommand = async (
  input: ModifyUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyUserMessage(input, context),
    Action: "ModifyUser",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyUserGroupCommand = async (
  input: ModifyUserGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyUserGroupMessage(input, context),
    Action: "ModifyUserGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPurchaseReservedCacheNodesOfferingCommand = async (
  input: PurchaseReservedCacheNodesOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPurchaseReservedCacheNodesOfferingMessage(input, context),
    Action: "PurchaseReservedCacheNodesOffering",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = async (
  input: RebalanceSlotsInGlobalReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRebalanceSlotsInGlobalReplicationGroupMessage(input, context),
    Action: "RebalanceSlotsInGlobalReplicationGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRebootCacheClusterCommand = async (
  input: RebootCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRebootCacheClusterMessage(input, context),
    Action: "RebootCacheCluster",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveTagsFromResourceMessage(input, context),
    Action: "RemoveTagsFromResource",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResetCacheParameterGroupCommand = async (
  input: ResetCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResetCacheParameterGroupMessage(input, context),
    Action: "ResetCacheParameterGroup",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRevokeCacheSecurityGroupIngressCommand = async (
  input: RevokeCacheSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRevokeCacheSecurityGroupIngressMessage(input, context),
    Action: "RevokeCacheSecurityGroupIngress",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartMigrationCommand = async (
  input: StartMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartMigrationMessage(input, context),
    Action: "StartMigration",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTestFailoverCommand = async (
  input: TestFailoverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTestFailoverMessage(input, context),
    Action: "TestFailover",
    Version: "2015-02-02",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagListMessage(data.AddTagsToResourceResult, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddTagsToResourceCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARN":
    case "com.amazonaws.elasticache#InvalidARNFault":
      throw await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult(
    data.AuthorizeCacheSecurityGroupIngressResult,
    context
  );
  const response: AuthorizeCacheSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError = async (
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
      throw await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryBatchApplyUpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchApplyUpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchApplyUpdateActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchApplyUpdateActionResult, context);
  const response: BatchApplyUpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchApplyUpdateActionCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
      throw await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryBatchStopUpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopUpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchStopUpdateActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchStopUpdateActionResult, context);
  const response: BatchStopUpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchStopUpdateActionCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
      throw await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCompleteMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCompleteMigrationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCompleteMigrationResponse(data.CompleteMigrationResult, context);
  const response: CompleteMigrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCompleteMigrationCommandError = async (
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
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotUnderMigrationFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotUnderMigrationFault":
      throw await deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCopySnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopySnapshotResult(data.CopySnapshotResult, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopySnapshotCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidSnapshotState":
    case "com.amazonaws.elasticache#InvalidSnapshotStateFault":
      throw await deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheClusterResult(data.CreateCacheClusterResult, context);
  const response: CreateCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateCacheClusterCommandError = async (
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
      throw await deserializeAws_queryCacheClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
      throw await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateCacheParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheParameterGroupResult(data.CreateCacheParameterGroupResult, context);
  const response: CreateCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateCacheParameterGroupCommandError = async (
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
      throw await deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "CacheParameterGroupQuotaExceeded":
    case "com.amazonaws.elasticache#CacheParameterGroupQuotaExceededFault":
      throw await deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateCacheSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateCacheSecurityGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheSecurityGroupResult(data.CreateCacheSecurityGroupResult, context);
  const response: CreateCacheSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateCacheSecurityGroupCommandError = async (
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
      throw await deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "QuotaExceeded.CacheSecurityGroup":
    case "com.amazonaws.elasticache#CacheSecurityGroupQuotaExceededFault":
      throw await deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateCacheSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheSubnetGroupResult(data.CreateCacheSubnetGroupResult, context);
  const response: CreateCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateCacheSubnetGroupCommandError = async (
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
      throw await deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "CacheSubnetGroupQuotaExceeded":
    case "com.amazonaws.elasticache#CacheSubnetGroupQuotaExceededFault":
      throw await deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "CacheSubnetQuotaExceededFault":
    case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault":
      throw await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticache#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.elasticache#SubnetNotAllowedFault":
      throw await deserializeAws_querySubnetNotAllowedFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateGlobalReplicationGroupResult(data.CreateGlobalReplicationGroupResult, context);
  const response: CreateGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateReplicationGroupResult(data.CreateReplicationGroupResult, context);
  const response: CreateReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
      throw await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "GlobalReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ReplicationGroupAlreadyExists":
    case "com.amazonaws.elasticache#ReplicationGroupAlreadyExistsFault":
      throw await deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateSnapshotResult(data.CreateSnapshotResult, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateSnapshotCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotFeatureNotSupportedFault":
    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
      throw await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUser(data.CreateUserResult, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateUserCommandError = async (
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
      throw await deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    case "UserAlreadyExists":
    case "com.amazonaws.elasticache#UserAlreadyExistsFault":
      throw await deserializeAws_queryUserAlreadyExistsFaultResponse(parsedOutput, context);
    case "UserQuotaExceeded":
    case "com.amazonaws.elasticache#UserQuotaExceededFault":
      throw await deserializeAws_queryUserQuotaExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateUserGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUserGroup(data.CreateUserGroupResult, context);
  const response: CreateUserGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateUserGroupCommandError = async (
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
      throw await deserializeAws_queryDefaultUserRequiredResponse(parsedOutput, context);
    case "DuplicateUserName":
    case "com.amazonaws.elasticache#DuplicateUserNameFault":
      throw await deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    case "UserGroupAlreadyExists":
    case "com.amazonaws.elasticache#UserGroupAlreadyExistsFault":
      throw await deserializeAws_queryUserGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "UserGroupQuotaExceeded":
    case "com.amazonaws.elasticache#UserGroupQuotaExceededFault":
      throw await deserializeAws_queryUserGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupResult(
    data.DecreaseNodeGroupsInGlobalReplicationGroupResult,
    context
  );
  const response: DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDecreaseReplicaCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicaCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDecreaseReplicaCountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDecreaseReplicaCountResult(data.DecreaseReplicaCountResult, context);
  const response: DecreaseReplicaCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDecreaseReplicaCountCommandError = async (
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
      throw await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NoOperationFault":
    case "com.amazonaws.elasticache#NoOperationFault":
      throw await deserializeAws_queryNoOperationFaultResponse(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteCacheClusterResult(data.DeleteCacheClusterResult, context);
  const response: DeleteCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteCacheClusterCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotFeatureNotSupportedFault":
    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
      throw await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteCacheParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteCacheParameterGroupCommandError = async (
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
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteCacheSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteCacheSecurityGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteCacheSecurityGroupCommandError = async (
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
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteCacheSubnetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteCacheSubnetGroupCommandError = async (
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
      throw await deserializeAws_queryCacheSubnetGroupInUseResponse(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteGlobalReplicationGroupResult(data.DeleteGlobalReplicationGroupResult, context);
  const response: DeleteGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteReplicationGroupResult(data.DeleteReplicationGroupResult, context);
  const response: DeleteReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotAlreadyExistsFault":
    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
      throw await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotFeatureNotSupportedFault":
    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
      throw await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
      throw await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteSnapshotResult(data.DeleteSnapshotResult, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSnapshotCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidSnapshotState":
    case "com.amazonaws.elasticache#InvalidSnapshotStateFault":
      throw await deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUser(data.DeleteUserResult, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteUserCommandError = async (
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
      throw await deserializeAws_queryDefaultUserAssociatedToUserGroupFaultResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidUserState":
    case "com.amazonaws.elasticache#InvalidUserStateFault":
      throw await deserializeAws_queryInvalidUserStateFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteUserGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUserGroup(data.DeleteUserGroupResult, context);
  const response: DeleteUserGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteUserGroupCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeCacheClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeCacheClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheClusterMessage(data.DescribeCacheClustersResult, context);
  const response: DescribeCacheClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCacheClustersCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeCacheEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeCacheEngineVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheEngineVersionMessage(data.DescribeCacheEngineVersionsResult, context);
  const response: DescribeCacheEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCacheEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheEngineVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeCacheParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeCacheParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupsMessage(data.DescribeCacheParameterGroupsResult, context);
  const response: DescribeCacheParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCacheParameterGroupsCommandError = async (
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
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeCacheParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeCacheParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupDetails(data.DescribeCacheParametersResult, context);
  const response: DescribeCacheParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCacheParametersCommandError = async (
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
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeCacheSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeCacheSecurityGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheSecurityGroupMessage(data.DescribeCacheSecurityGroupsResult, context);
  const response: DescribeCacheSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCacheSecurityGroupsCommandError = async (
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
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeCacheSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeCacheSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheSubnetGroupMessage(data.DescribeCacheSubnetGroupsResult, context);
  const response: DescribeCacheSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCacheSubnetGroupsCommandError = async (
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
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEngineDefaultParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEngineDefaultParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEngineDefaultParametersResult(
    data.DescribeEngineDefaultParametersResult,
    context
  );
  const response: DescribeEngineDefaultParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEngineDefaultParametersCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventsMessage(data.DescribeEventsResult, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventsCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeGlobalReplicationGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalReplicationGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeGlobalReplicationGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeGlobalReplicationGroupsResult(
    data.DescribeGlobalReplicationGroupsResult,
    context
  );
  const response: DescribeGlobalReplicationGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeGlobalReplicationGroupsCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeReplicationGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReplicationGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReplicationGroupMessage(data.DescribeReplicationGroupsResult, context);
  const response: DescribeReplicationGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReplicationGroupsCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeReservedCacheNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReservedCacheNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedCacheNodeMessage(data.DescribeReservedCacheNodesResult, context);
  const response: DescribeReservedCacheNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReservedCacheNodesCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedCacheNodesOfferingMessage(
    data.DescribeReservedCacheNodesOfferingsResult,
    context
  );
  const response: DescribeReservedCacheNodesOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReservedCacheNodesOfferingNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault":
      throw await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeServiceUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeServiceUpdatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryServiceUpdatesMessage(data.DescribeServiceUpdatesResult, context);
  const response: DescribeServiceUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeServiceUpdatesCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUpdateNotFoundFault":
    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
      throw await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeSnapshotsListMessage(data.DescribeSnapshotsResult, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeSnapshotsCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeUpdateActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeUpdateActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateActionsMessage(data.DescribeUpdateActionsResult, context);
  const response: DescribeUpdateActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeUpdateActionsCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeUserGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeUserGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeUserGroupsResult(data.DescribeUserGroupsResult, context);
  const response: DescribeUserGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeUserGroupsCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeUsersResult(data.DescribeUsersResult, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeUsersCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDisassociateGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisassociateGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDisassociateGlobalReplicationGroupResult(
    data.DisassociateGlobalReplicationGroupResult,
    context
  );
  const response: DisassociateGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisassociateGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryFailoverGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryFailoverGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryFailoverGlobalReplicationGroupResult(
    data.FailoverGlobalReplicationGroupResult,
    context
  );
  const response: FailoverGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryFailoverGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupResult(
    data.IncreaseNodeGroupsInGlobalReplicationGroupResult,
    context
  );
  const response: IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryIncreaseReplicaCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicaCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryIncreaseReplicaCountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryIncreaseReplicaCountResult(data.IncreaseReplicaCountResult, context);
  const response: IncreaseReplicaCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryIncreaseReplicaCountCommandError = async (
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
      throw await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NoOperationFault":
    case "com.amazonaws.elasticache#NoOperationFault":
      throw await deserializeAws_queryNoOperationFaultResponse(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryListAllowedNodeTypeModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListAllowedNodeTypeModificationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAllowedNodeTypeModificationsMessage(
    data.ListAllowedNodeTypeModificationsResult,
    context
  );
  const response: ListAllowedNodeTypeModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListAllowedNodeTypeModificationsCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagListMessage(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTagsForResourceCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARN":
    case "com.amazonaws.elasticache#InvalidARNFault":
      throw await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyCacheClusterResult(data.ModifyCacheClusterResult, context);
  const response: ModifyCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyCacheClusterCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyCacheParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ModifyCacheParameterGroupResult, context);
  const response: ModifyCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyCacheParameterGroupCommandError = async (
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
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyCacheSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyCacheSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyCacheSubnetGroupResult(data.ModifyCacheSubnetGroupResult, context);
  const response: ModifyCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyCacheSubnetGroupCommandError = async (
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
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSubnetQuotaExceededFault":
    case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault":
      throw await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticache#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "SubnetInUse":
    case "com.amazonaws.elasticache#SubnetInUse":
      throw await deserializeAws_querySubnetInUseResponse(parsedOutput, context);
    case "SubnetNotAllowedFault":
    case "com.amazonaws.elasticache#SubnetNotAllowedFault":
      throw await deserializeAws_querySubnetNotAllowedFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyGlobalReplicationGroupResult(data.ModifyGlobalReplicationGroupResult, context);
  const response: ModifyGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyReplicationGroupResult(data.ModifyReplicationGroupResult, context);
  const response: ModifyReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientCacheClusterCapacity":
    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
      throw await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyReplicationGroupShardConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyReplicationGroupShardConfigurationResult(
    data.ModifyReplicationGroupShardConfigurationResult,
    context
  );
  const response: ModifyReplicationGroupShardConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError = async (
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
      throw await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeGroupsPerReplicationGroupQuotaExceeded":
    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
      throw await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceeded":
    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUser(data.ModifyUserResult, context);
  const response: ModifyUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyUserCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidUserState":
    case "com.amazonaws.elasticache#InvalidUserStateFault":
      throw await deserializeAws_queryInvalidUserStateFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyUserGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUserGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyUserGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUserGroup(data.ModifyUserGroupResult, context);
  const response: ModifyUserGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyUserGroupCommandError = async (
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
      throw await deserializeAws_queryDefaultUserRequiredResponse(parsedOutput, context);
    case "DuplicateUserName":
    case "com.amazonaws.elasticache#DuplicateUserNameFault":
      throw await deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidUserGroupState":
    case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
      throw await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPurchaseReservedCacheNodesOfferingResult(
    data.PurchaseReservedCacheNodesOfferingResult,
    context
  );
  const response: PurchaseReservedCacheNodesOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ReservedCacheNodeAlreadyExists":
    case "com.amazonaws.elasticache#ReservedCacheNodeAlreadyExistsFault":
      throw await deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse(parsedOutput, context);
    case "ReservedCacheNodeQuotaExceeded":
    case "com.amazonaws.elasticache#ReservedCacheNodeQuotaExceededFault":
      throw await deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse(parsedOutput, context);
    case "ReservedCacheNodesOfferingNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault":
      throw await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
      throw await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupResult(
    data.RebalanceSlotsInGlobalReplicationGroupResult,
    context
  );
  const response: RebalanceSlotsInGlobalReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommandError = async (
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
      throw await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRebootCacheClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootCacheClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRebootCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRebootCacheClusterResult(data.RebootCacheClusterResult, context);
  const response: RebootCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRebootCacheClusterCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagListMessage(data.RemoveTagsFromResourceResult, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveTagsFromResourceCommandError = async (
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
      throw await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context);
    case "CacheParameterGroupNotFound":
    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "CacheSubnetGroupNotFoundFault":
    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
      throw await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARN":
    case "com.amazonaws.elasticache#InvalidARNFault":
      throw await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "ReservedCacheNodeNotFound":
    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
      throw await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotNotFoundFault":
    case "com.amazonaws.elasticache#SnapshotNotFoundFault":
      throw await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context);
    case "TagNotFound":
    case "com.amazonaws.elasticache#TagNotFoundFault":
      throw await deserializeAws_queryTagNotFoundFaultResponse(parsedOutput, context);
    case "UserGroupNotFound":
    case "com.amazonaws.elasticache#UserGroupNotFoundFault":
      throw await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context);
    case "UserNotFound":
    case "com.amazonaws.elasticache#UserNotFoundFault":
      throw await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryResetCacheParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResetCacheParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ResetCacheParameterGroupResult, context);
  const response: ResetCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResetCacheParameterGroupCommandError = async (
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
      throw await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheParameterGroupState":
    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
      throw await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRevokeCacheSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCacheSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRevokeCacheSecurityGroupIngressResult(
    data.RevokeCacheSecurityGroupIngressResult,
    context
  );
  const response: RevokeCacheSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "CacheSecurityGroupNotFound":
    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
      throw await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCacheSecurityGroupState":
    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryStartMigrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartMigrationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartMigrationResponse(data.StartMigrationResult, context);
  const response: StartMigrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartMigrationCommandError = async (
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
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "ReplicationGroupAlreadyUnderMigrationFault":
    case "com.amazonaws.elasticache#ReplicationGroupAlreadyUnderMigrationFault":
      throw await deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryTestFailoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFailoverCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTestFailoverCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTestFailoverResult(data.TestFailoverResult, context);
  const response: TestFailoverCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTestFailoverCommandError = async (
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
      throw await deserializeAws_queryAPICallRateForCustomerExceededFaultResponse(parsedOutput, context);
    case "InvalidCacheClusterState":
    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
      throw await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context);
    case "InvalidKMSKeyFault":
    case "com.amazonaws.elasticache#InvalidKMSKeyFault":
      throw await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.elasticache#InvalidParameterCombinationException":
      throw await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.elasticache#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidReplicationGroupState":
    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
      throw await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context);
    case "NodeGroupNotFoundFault":
    case "com.amazonaws.elasticache#NodeGroupNotFoundFault":
      throw await deserializeAws_queryNodeGroupNotFoundFaultResponse(parsedOutput, context);
    case "ReplicationGroupNotFoundFault":
    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
      throw await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context);
    case "TestFailoverNotAvailableFault":
    case "com.amazonaws.elasticache#TestFailoverNotAvailableFault":
      throw await deserializeAws_queryTestFailoverNotAvailableFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_queryAPICallRateForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<APICallRateForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAPICallRateForCustomerExceededFault(body.Error, context);
  const exception = new APICallRateForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthorizationAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationAlreadyExistsFault(body.Error, context);
  const exception = new AuthorizationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthorizationNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationNotFoundFault(body.Error, context);
  const exception = new AuthorizationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheClusterAlreadyExistsFault(body.Error, context);
  const exception = new CacheClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheClusterNotFoundFault(body.Error, context);
  const exception = new CacheClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheParameterGroupAlreadyExistsFault(body.Error, context);
  const exception = new CacheParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheParameterGroupNotFoundFault(body.Error, context);
  const exception = new CacheParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheParameterGroupQuotaExceededFault(body.Error, context);
  const exception = new CacheParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSecurityGroupAlreadyExistsFault(body.Error, context);
  const exception = new CacheSecurityGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSecurityGroupNotFoundFault(body.Error, context);
  const exception = new CacheSecurityGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSecurityGroupQuotaExceededFault(body.Error, context);
  const exception = new CacheSecurityGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupAlreadyExistsFault(body.Error, context);
  const exception = new CacheSubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSubnetGroupInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupInUse(body.Error, context);
  const exception = new CacheSubnetGroupInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupNotFoundFault(body.Error, context);
  const exception = new CacheSubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupQuotaExceededFault(body.Error, context);
  const exception = new CacheSubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCacheSubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetQuotaExceededFault(body.Error, context);
  const exception = new CacheSubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterQuotaForCustomerExceededFault(body.Error, context);
  const exception = new ClusterQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDefaultUserAssociatedToUserGroupFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUserAssociatedToUserGroupFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDefaultUserAssociatedToUserGroupFault(body.Error, context);
  const exception = new DefaultUserAssociatedToUserGroupFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDefaultUserRequiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUserRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDefaultUserRequired(body.Error, context);
  const exception = new DefaultUserRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateUserNameFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateUserNameFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateUserNameFault(body.Error, context);
  const exception = new DuplicateUserNameFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryGlobalReplicationGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalReplicationGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryGlobalReplicationGroupAlreadyExistsFault(body.Error, context);
  const exception = new GlobalReplicationGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalReplicationGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryGlobalReplicationGroupNotFoundFault(body.Error, context);
  const exception = new GlobalReplicationGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCacheClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientCacheClusterCapacityFault(body.Error, context);
  const exception = new InsufficientCacheClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidARNFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidARNFault(body.Error, context);
  const exception = new InvalidARNFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidCacheClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCacheClusterStateFault(body.Error, context);
  const exception = new InvalidCacheClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCacheParameterGroupStateFault(body.Error, context);
  const exception = new InvalidCacheParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCacheSecurityGroupStateFault(body.Error, context);
  const exception = new InvalidCacheSecurityGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGlobalReplicationGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidGlobalReplicationGroupStateFault(body.Error, context);
  const exception = new InvalidGlobalReplicationGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidKMSKeyFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidKMSKeyFault(body.Error, context);
  const exception = new InvalidKMSKeyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterCombinationException(body.Error, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterValueException(body.Error, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidReplicationGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplicationGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidReplicationGroupStateFault(body.Error, context);
  const exception = new InvalidReplicationGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSnapshotStateFault(body.Error, context);
  const exception = new InvalidSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnet(body.Error, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidUserGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidUserGroupStateFault(body.Error, context);
  const exception = new InvalidUserGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidUserStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidUserStateFault(body.Error, context);
  const exception = new InvalidUserStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidVPCNetworkStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidVPCNetworkStateFault(body.Error, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNodeGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeGroupNotFoundFault(body.Error, context);
  const exception = new NodeGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeGroupsPerReplicationGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault(body.Error, context);
  const exception = new NodeGroupsPerReplicationGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNodeQuotaForClusterExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeQuotaForClusterExceededFault(body.Error, context);
  const exception = new NodeQuotaForClusterExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeQuotaForCustomerExceededFault(body.Error, context);
  const exception = new NodeQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNoOperationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNoOperationFault(body.Error, context);
  const exception = new NoOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupAlreadyExistsFault(body.Error, context);
  const exception = new ReplicationGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupAlreadyUnderMigrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault(body.Error, context);
  const exception = new ReplicationGroupAlreadyUnderMigrationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReplicationGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupNotFoundFault(body.Error, context);
  const exception = new ReplicationGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupNotUnderMigrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupNotUnderMigrationFault(body.Error, context);
  const exception = new ReplicationGroupNotUnderMigrationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodeAlreadyExistsFault(body.Error, context);
  const exception = new ReservedCacheNodeAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedCacheNodeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodeNotFoundFault(body.Error, context);
  const exception = new ReservedCacheNodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodeQuotaExceededFault(body.Error, context);
  const exception = new ReservedCacheNodeQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodesOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodesOfferingNotFoundFault(body.Error, context);
  const exception = new ReservedCacheNodesOfferingNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceLinkedRoleNotFoundFault(body.Error, context);
  const exception = new ServiceLinkedRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryServiceUpdateNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUpdateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceUpdateNotFoundFault(body.Error, context);
  const exception = new ServiceUpdateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotAlreadyExistsFault(body.Error, context);
  const exception = new SnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotFeatureNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotFeatureNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotFeatureNotSupportedFault(body.Error, context);
  const exception = new SnapshotFeatureNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotNotFoundFault(body.Error, context);
  const exception = new SnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotQuotaExceededFault(body.Error, context);
  const exception = new SnapshotQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubnetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetInUse(body.Error, context);
  const exception = new SubnetInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubnetNotAllowedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotAllowedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetNotAllowedFault(body.Error, context);
  const exception = new SubnetNotAllowedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTagNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagNotFoundFault(body.Error, context);
  const exception = new TagNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTagQuotaPerResourceExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagQuotaPerResourceExceeded(body.Error, context);
  const exception = new TagQuotaPerResourceExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTestFailoverNotAvailableFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TestFailoverNotAvailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTestFailoverNotAvailableFault(body.Error, context);
  const exception = new TestFailoverNotAvailableFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUserAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUserAlreadyExistsFault(body.Error, context);
  const exception = new UserAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUserGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUserGroupAlreadyExistsFault(body.Error, context);
  const exception = new UserGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUserGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUserGroupNotFoundFault(body.Error, context);
  const exception = new UserGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUserGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUserGroupQuotaExceededFault(body.Error, context);
  const exception = new UserGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUserNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUserNotFoundFault(body.Error, context);
  const exception = new UserNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUserQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUserQuotaExceededFault(body.Error, context);
  const exception = new UserQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryAddTagsToResourceMessage = (input: AddTagsToResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryAuthenticationMode = (input: AuthenticationMode, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Passwords != null) {
    const memberEntries = serializeAws_queryPasswordListInput(input.Passwords, context);
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

const serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage = (
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

const serializeAws_queryAvailabilityZonesList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryBatchApplyUpdateActionMessage = (
  input: BatchApplyUpdateActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReplicationGroupIds != null) {
    const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
    if (input.ReplicationGroupIds?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheClusterIds != null) {
    const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
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

const serializeAws_queryBatchStopUpdateActionMessage = (
  input: BatchStopUpdateActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReplicationGroupIds != null) {
    const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
    if (input.ReplicationGroupIds?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheClusterIds != null) {
    const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
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

const serializeAws_queryCacheClusterIdList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryCacheNodeIdsList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryCacheSecurityGroupNameList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryCloudWatchLogsDestinationDetails = (
  input: CloudWatchLogsDestinationDetails,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogGroup != null) {
    entries["LogGroup"] = input.LogGroup;
  }
  return entries;
};

const serializeAws_queryCompleteMigrationMessage = (input: CompleteMigrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.Force != null) {
    entries["Force"] = input.Force;
  }
  return entries;
};

const serializeAws_queryConfigureShard = (input: ConfigureShard, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.NewReplicaCount != null) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.PreferredAvailabilityZones != null) {
    const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
    if (input.PreferredAvailabilityZones?.length === 0) {
      entries.PreferredAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PreferredOutpostArns != null) {
    const memberEntries = serializeAws_queryPreferredOutpostArnList(input.PreferredOutpostArns, context);
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

const serializeAws_queryCopySnapshotMessage = (input: CopySnapshotMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateCacheClusterMessage = (
  input: CreateCacheClusterMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
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
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
    if (input.SecurityGroupIds?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SnapshotArns != null) {
    const memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
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
    const memberEntries = serializeAws_queryPreferredOutpostArnList(input.PreferredOutpostArns, context);
    if (input.PreferredOutpostArns?.length === 0) {
      entries.PreferredOutpostArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PreferredOutpostArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LogDeliveryConfigurations != null) {
    const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(
      input.LogDeliveryConfigurations,
      context
    );
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

const serializeAws_queryCreateCacheParameterGroupMessage = (
  input: CreateCacheParameterGroupMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateCacheSecurityGroupMessage = (
  input: CreateCacheSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSecurityGroupName != null) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateCacheSubnetGroupMessage = (
  input: CreateCacheSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.CacheSubnetGroupDescription != null) {
    entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
  }
  if (input.SubnetIds != null) {
    const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
    if (input.SubnetIds?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateGlobalReplicationGroupMessage = (
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

const serializeAws_queryCreateReplicationGroupMessage = (
  input: CreateReplicationGroupMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredCacheClusterAZs, context);
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
    const memberEntries = serializeAws_queryNodeGroupConfigurationList(input.NodeGroupConfiguration, context);
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
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
    if (input.SecurityGroupIds?.length === 0) {
      entries.SecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SnapshotArns != null) {
    const memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
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
    const memberEntries = serializeAws_queryUserGroupIdListInput(input.UserGroupIds, context);
    if (input.UserGroupIds?.length === 0) {
      entries.UserGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LogDeliveryConfigurations != null) {
    const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(
      input.LogDeliveryConfigurations,
      context
    );
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
  return entries;
};

const serializeAws_queryCreateSnapshotMessage = (input: CreateSnapshotMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateUserGroupMessage = (input: CreateUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserGroupId != null) {
    entries["UserGroupId"] = input.UserGroupId;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.UserIds != null) {
    const memberEntries = serializeAws_queryUserIdListInput(input.UserIds, context);
    if (input.UserIds?.length === 0) {
      entries.UserIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateUserMessage = (input: CreateUserMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryPasswordListInput(input.Passwords, context);
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AuthenticationMode != null) {
    const memberEntries = serializeAws_queryAuthenticationMode(input.AuthenticationMode, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationMode.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCustomerNodeEndpoint = (input: CustomerNodeEndpoint, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Address != null) {
    entries["Address"] = input.Address;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  return entries;
};

const serializeAws_queryCustomerNodeEndpointList = (input: CustomerNodeEndpoint[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryCustomerNodeEndpoint(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage = (
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
    const memberEntries = serializeAws_queryGlobalNodeGroupIdList(input.GlobalNodeGroupsToRemove, context);
    if (input.GlobalNodeGroupsToRemove?.length === 0) {
      entries.GlobalNodeGroupsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `GlobalNodeGroupsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.GlobalNodeGroupsToRetain != null) {
    const memberEntries = serializeAws_queryGlobalNodeGroupIdList(input.GlobalNodeGroupsToRetain, context);
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

const serializeAws_queryDecreaseReplicaCountMessage = (
  input: DecreaseReplicaCountMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.NewReplicaCount != null) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.ReplicaConfiguration != null) {
    const memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
    if (input.ReplicaConfiguration?.length === 0) {
      entries.ReplicaConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicaConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplicasToRemove != null) {
    const memberEntries = serializeAws_queryRemoveReplicasList(input.ReplicasToRemove, context);
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

const serializeAws_queryDeleteCacheClusterMessage = (
  input: DeleteCacheClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.FinalSnapshotIdentifier != null) {
    entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteCacheParameterGroupMessage = (
  input: DeleteCacheParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteCacheSecurityGroupMessage = (
  input: DeleteCacheSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSecurityGroupName != null) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteCacheSubnetGroupMessage = (
  input: DeleteCacheSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteGlobalReplicationGroupMessage = (
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

const serializeAws_queryDeleteReplicationGroupMessage = (
  input: DeleteReplicationGroupMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDeleteSnapshotMessage = (input: DeleteSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SnapshotName != null) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  return entries;
};

const serializeAws_queryDeleteUserGroupMessage = (input: DeleteUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserGroupId != null) {
    entries["UserGroupId"] = input.UserGroupId;
  }
  return entries;
};

const serializeAws_queryDeleteUserMessage = (input: DeleteUserMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserId != null) {
    entries["UserId"] = input.UserId;
  }
  return entries;
};

const serializeAws_queryDescribeCacheClustersMessage = (
  input: DescribeCacheClustersMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeCacheEngineVersionsMessage = (
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

const serializeAws_queryDescribeCacheParameterGroupsMessage = (
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

const serializeAws_queryDescribeCacheParametersMessage = (
  input: DescribeCacheParametersMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeCacheSecurityGroupsMessage = (
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

const serializeAws_queryDescribeCacheSubnetGroupsMessage = (
  input: DescribeCacheSubnetGroupsMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeEngineDefaultParametersMessage = (
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

const serializeAws_queryDescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
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

const serializeAws_queryDescribeGlobalReplicationGroupsMessage = (
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

const serializeAws_queryDescribeReplicationGroupsMessage = (
  input: DescribeReplicationGroupsMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeReservedCacheNodesMessage = (
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

const serializeAws_queryDescribeReservedCacheNodesOfferingsMessage = (
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

const serializeAws_queryDescribeServiceUpdatesMessage = (
  input: DescribeServiceUpdatesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceUpdateName != null) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  if (input.ServiceUpdateStatus != null) {
    const memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
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

const serializeAws_queryDescribeSnapshotsMessage = (input: DescribeSnapshotsMessage, context: __SerdeContext): any => {
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

const serializeAws_queryDescribeUpdateActionsMessage = (
  input: DescribeUpdateActionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceUpdateName != null) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  if (input.ReplicationGroupIds != null) {
    const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
    if (input.ReplicationGroupIds?.length === 0) {
      entries.ReplicationGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheClusterIds != null) {
    const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
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
    const memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
    if (input.ServiceUpdateStatus?.length === 0) {
      entries.ServiceUpdateStatus = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateStatus.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ServiceUpdateTimeRange != null) {
    const memberEntries = serializeAws_queryTimeRangeFilter(input.ServiceUpdateTimeRange, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceUpdateTimeRange.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UpdateActionStatus != null) {
    const memberEntries = serializeAws_queryUpdateActionStatusList(input.UpdateActionStatus, context);
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

const serializeAws_queryDescribeUserGroupsMessage = (
  input: DescribeUserGroupsMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeUsersMessage = (input: DescribeUsersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.UserId != null) {
    entries["UserId"] = input.UserId;
  }
  if (input.Filters != null) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
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

const serializeAws_queryDestinationDetails = (input: DestinationDetails, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CloudWatchLogsDetails != null) {
    const memberEntries = serializeAws_queryCloudWatchLogsDestinationDetails(input.CloudWatchLogsDetails, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudWatchLogsDetails.${key}`;
      entries[loc] = value;
    });
  }
  if (input.KinesisFirehoseDetails != null) {
    const memberEntries = serializeAws_queryKinesisFirehoseDestinationDetails(input.KinesisFirehoseDetails, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `KinesisFirehoseDetails.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDisassociateGlobalReplicationGroupMessage = (
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

const serializeAws_queryFailoverGlobalReplicationGroupMessage = (
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

const serializeAws_queryFilter = (input: Filter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_queryFilterValueList(input.Values, context);
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

const serializeAws_queryFilterList = (input: Filter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryFilterValueList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryGlobalNodeGroupIdList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupMessage = (
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
    const memberEntries = serializeAws_queryRegionalConfigurationList(input.RegionalConfigurations, context);
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

const serializeAws_queryIncreaseReplicaCountMessage = (
  input: IncreaseReplicaCountMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.NewReplicaCount != null) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.ReplicaConfiguration != null) {
    const memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
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

const serializeAws_queryKeyList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryKinesisFirehoseDestinationDetails = (
  input: KinesisFirehoseDestinationDetails,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DeliveryStream != null) {
    entries["DeliveryStream"] = input.DeliveryStream;
  }
  return entries;
};

const serializeAws_queryListAllowedNodeTypeModificationsMessage = (
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

const serializeAws_queryListTagsForResourceMessage = (
  input: ListTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  return entries;
};

const serializeAws_queryLogDeliveryConfigurationRequest = (
  input: LogDeliveryConfigurationRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LogType != null) {
    entries["LogType"] = input.LogType;
  }
  if (input.DestinationType != null) {
    entries["DestinationType"] = input.DestinationType;
  }
  if (input.DestinationDetails != null) {
    const memberEntries = serializeAws_queryDestinationDetails(input.DestinationDetails, context);
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

const serializeAws_queryLogDeliveryConfigurationRequestList = (
  input: LogDeliveryConfigurationRequest[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryLogDeliveryConfigurationRequest(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`LogDeliveryConfigurationRequest.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryModifyCacheClusterMessage = (
  input: ModifyCacheClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.NumCacheNodes != null) {
    entries["NumCacheNodes"] = input.NumCacheNodes;
  }
  if (input.CacheNodeIdsToRemove != null) {
    const memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToRemove, context);
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
    const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.NewAvailabilityZones, context);
    if (input.NewAvailabilityZones?.length === 0) {
      entries.NewAvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NewAvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CacheSecurityGroupNames != null) {
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(
      input.LogDeliveryConfigurations,
      context
    );
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

const serializeAws_queryModifyCacheParameterGroupMessage = (
  input: ModifyCacheParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.ParameterNameValues != null) {
    const memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
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

const serializeAws_queryModifyCacheSubnetGroupMessage = (
  input: ModifyCacheSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupName != null) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.CacheSubnetGroupDescription != null) {
    entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
  }
  if (input.SubnetIds != null) {
    const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
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

const serializeAws_queryModifyGlobalReplicationGroupMessage = (
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

const serializeAws_queryModifyReplicationGroupMessage = (
  input: ModifyReplicationGroupMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
    if (input.CacheSecurityGroupNames?.length === 0) {
      entries.CacheSecurityGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroupIds != null) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryUserGroupIdList(input.UserGroupIdsToAdd, context);
    if (input.UserGroupIdsToAdd?.length === 0) {
      entries.UserGroupIdsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserGroupIdsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserGroupIdsToRemove != null) {
    const memberEntries = serializeAws_queryUserGroupIdList(input.UserGroupIdsToRemove, context);
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
    const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(
      input.LogDeliveryConfigurations,
      context
    );
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
  return entries;
};

const serializeAws_queryModifyReplicationGroupShardConfigurationMessage = (
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
    const memberEntries = serializeAws_queryReshardingConfigurationList(input.ReshardingConfiguration, context);
    if (input.ReshardingConfiguration?.length === 0) {
      entries.ReshardingConfiguration = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReshardingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NodeGroupsToRemove != null) {
    const memberEntries = serializeAws_queryNodeGroupsToRemoveList(input.NodeGroupsToRemove, context);
    if (input.NodeGroupsToRemove?.length === 0) {
      entries.NodeGroupsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NodeGroupsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NodeGroupsToRetain != null) {
    const memberEntries = serializeAws_queryNodeGroupsToRetainList(input.NodeGroupsToRetain, context);
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

const serializeAws_queryModifyUserGroupMessage = (input: ModifyUserGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserGroupId != null) {
    entries["UserGroupId"] = input.UserGroupId;
  }
  if (input.UserIdsToAdd != null) {
    const memberEntries = serializeAws_queryUserIdListInput(input.UserIdsToAdd, context);
    if (input.UserIdsToAdd?.length === 0) {
      entries.UserIdsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `UserIdsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserIdsToRemove != null) {
    const memberEntries = serializeAws_queryUserIdListInput(input.UserIdsToRemove, context);
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

const serializeAws_queryModifyUserMessage = (input: ModifyUserMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryPasswordListInput(input.Passwords, context);
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
    const memberEntries = serializeAws_queryAuthenticationMode(input.AuthenticationMode, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationMode.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryNodeGroupConfiguration = (input: NodeGroupConfiguration, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryAvailabilityZonesList(input.ReplicaAvailabilityZones, context);
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
    const memberEntries = serializeAws_queryOutpostArnsList(input.ReplicaOutpostArns, context);
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

const serializeAws_queryNodeGroupConfigurationList = (
  input: NodeGroupConfiguration[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryNodeGroupConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`NodeGroupConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryNodeGroupsToRemoveList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryNodeGroupsToRetainList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryOutpostArnsList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryParameterNameValue = (input: ParameterNameValue, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ParameterName != null) {
    entries["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue != null) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  return entries;
};

const serializeAws_queryParameterNameValueList = (input: ParameterNameValue[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryParameterNameValue(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ParameterNameValue.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPasswordListInput = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPreferredAvailabilityZoneList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPreferredOutpostArnList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPurchaseReservedCacheNodesOfferingMessage = (
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryRebalanceSlotsInGlobalReplicationGroupMessage = (
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

const serializeAws_queryRebootCacheClusterMessage = (
  input: RebootCacheClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId != null) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.CacheNodeIdsToReboot != null) {
    const memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToReboot, context);
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

const serializeAws_queryRegionalConfiguration = (input: RegionalConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.ReplicationGroupRegion != null) {
    entries["ReplicationGroupRegion"] = input.ReplicationGroupRegion;
  }
  if (input.ReshardingConfiguration != null) {
    const memberEntries = serializeAws_queryReshardingConfigurationList(input.ReshardingConfiguration, context);
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

const serializeAws_queryRegionalConfigurationList = (input: RegionalConfiguration[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryRegionalConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`RegionalConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRemoveReplicasList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryRemoveTagsFromResourceMessage = (
  input: RemoveTagsFromResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryKeyList(input.TagKeys, context);
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

const serializeAws_queryReplicaConfigurationList = (input: ConfigureShard[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryConfigureShard(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ConfigureShard.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryReplicationGroupIdList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryResetCacheParameterGroupMessage = (
  input: ResetCacheParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName != null) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.ResetAllParameters != null) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  if (input.ParameterNameValues != null) {
    const memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
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

const serializeAws_queryReshardingConfiguration = (input: ReshardingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.PreferredAvailabilityZones != null) {
    const memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredAvailabilityZones, context);
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

const serializeAws_queryReshardingConfigurationList = (
  input: ReshardingConfiguration[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryReshardingConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ReshardingConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRevokeCacheSecurityGroupIngressMessage = (
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

const serializeAws_querySecurityGroupIdsList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryServiceUpdateStatusList = (
  input: (ServiceUpdateStatus | string)[],
  context: __SerdeContext
): any => {
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

const serializeAws_querySnapshotArnsList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryStartMigrationMessage = (input: StartMigrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.CustomerNodeEndpointList != null) {
    const memberEntries = serializeAws_queryCustomerNodeEndpointList(input.CustomerNodeEndpointList, context);
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

const serializeAws_querySubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Tag.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTestFailoverMessage = (input: TestFailoverMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReplicationGroupId != null) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.NodeGroupId != null) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  return entries;
};

const serializeAws_queryTimeRangeFilter = (input: TimeRangeFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryUpdateActionStatusList = (
  input: (UpdateActionStatus | string)[],
  context: __SerdeContext
): any => {
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

const serializeAws_queryUserGroupIdList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryUserGroupIdListInput = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryUserIdListInput = (input: string[], context: __SerdeContext): any => {
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

const deserializeAws_queryAllowedNodeTypeModificationsMessage = (
  output: any,
  context: __SerdeContext
): AllowedNodeTypeModificationsMessage => {
  const contents: any = {
    ScaleUpModifications: undefined,
    ScaleDownModifications: undefined,
  };
  if (output.ScaleUpModifications === "") {
    contents.ScaleUpModifications = [];
  } else if (output["ScaleUpModifications"] !== undefined && output["ScaleUpModifications"]["member"] !== undefined) {
    contents.ScaleUpModifications = deserializeAws_queryNodeTypeList(
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
    contents.ScaleDownModifications = deserializeAws_queryNodeTypeList(
      __getArrayIfSingleItem(output["ScaleDownModifications"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAPICallRateForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): APICallRateForCustomerExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthentication = (output: any, context: __SerdeContext): Authentication => {
  const contents: any = {
    Type: undefined,
    PasswordCount: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["PasswordCount"] !== undefined) {
    contents.PasswordCount = __strictParseInt32(output["PasswordCount"]) as number;
  }
  return contents;
};

const deserializeAws_queryAuthorizationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): AuthorizationAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthorizationNotFoundFault = (
  output: any,
  context: __SerdeContext
): AuthorizationNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): AuthorizeCacheSecurityGroupIngressResult => {
  const contents: any = {
    CacheSecurityGroup: undefined,
  };
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_queryAvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_queryAvailabilityZonesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCacheCluster = (output: any, context: __SerdeContext): CacheCluster => {
  const contents: any = {
    CacheClusterId: undefined,
    ConfigurationEndpoint: undefined,
    ClientDownloadLandingPage: undefined,
    CacheNodeType: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    CacheClusterStatus: undefined,
    NumCacheNodes: undefined,
    PreferredAvailabilityZone: undefined,
    PreferredOutpostArn: undefined,
    CacheClusterCreateTime: undefined,
    PreferredMaintenanceWindow: undefined,
    PendingModifiedValues: undefined,
    NotificationConfiguration: undefined,
    CacheSecurityGroups: undefined,
    CacheParameterGroup: undefined,
    CacheSubnetGroupName: undefined,
    CacheNodes: undefined,
    AutoMinorVersionUpgrade: undefined,
    SecurityGroups: undefined,
    ReplicationGroupId: undefined,
    SnapshotRetentionLimit: undefined,
    SnapshotWindow: undefined,
    AuthTokenEnabled: undefined,
    AuthTokenLastModifiedDate: undefined,
    TransitEncryptionEnabled: undefined,
    AtRestEncryptionEnabled: undefined,
    ARN: undefined,
    ReplicationGroupLogDeliveryEnabled: undefined,
    LogDeliveryConfigurations: undefined,
    NetworkType: undefined,
    IpDiscovery: undefined,
    TransitEncryptionMode: undefined,
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["ConfigurationEndpoint"] !== undefined) {
    contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(output["ConfigurationEndpoint"], context);
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
    contents.CacheClusterCreateTime = __expectNonNull(__parseRfc3339DateTime(output["CacheClusterCreateTime"]));
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = __expectString(output["PreferredMaintenanceWindow"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(
      output["PendingModifiedValues"],
      context
    );
  }
  if (output["NotificationConfiguration"] !== undefined) {
    contents.NotificationConfiguration = deserializeAws_queryNotificationConfiguration(
      output["NotificationConfiguration"],
      context
    );
  }
  if (output.CacheSecurityGroups === "") {
    contents.CacheSecurityGroups = [];
  } else if (
    output["CacheSecurityGroups"] !== undefined &&
    output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined
  ) {
    contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]),
      context
    );
  }
  if (output["CacheParameterGroup"] !== undefined) {
    contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroupStatus(
      output["CacheParameterGroup"],
      context
    );
  }
  if (output["CacheSubnetGroupName"] !== undefined) {
    contents.CacheSubnetGroupName = __expectString(output["CacheSubnetGroupName"]);
  }
  if (output.CacheNodes === "") {
    contents.CacheNodes = [];
  } else if (output["CacheNodes"] !== undefined && output["CacheNodes"]["CacheNode"] !== undefined) {
    contents.CacheNodes = deserializeAws_queryCacheNodeList(
      __getArrayIfSingleItem(output["CacheNodes"]["CacheNode"]),
      context
    );
  }
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade = __parseBoolean(output["AutoMinorVersionUpgrade"]);
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = deserializeAws_querySecurityGroupMembershipList(
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
    contents.AuthTokenLastModifiedDate = __expectNonNull(__parseRfc3339DateTime(output["AuthTokenLastModifiedDate"]));
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
    contents.LogDeliveryConfigurations = deserializeAws_queryLogDeliveryConfigurationList(
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

const deserializeAws_queryCacheClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheClusterAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheClusterList = (output: any, context: __SerdeContext): CacheCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheCluster(entry, context);
    });
};

const deserializeAws_queryCacheClusterMessage = (output: any, context: __SerdeContext): CacheClusterMessage => {
  const contents: any = {
    Marker: undefined,
    CacheClusters: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheClusters === "") {
    contents.CacheClusters = [];
  } else if (output["CacheClusters"] !== undefined && output["CacheClusters"]["CacheCluster"] !== undefined) {
    contents.CacheClusters = deserializeAws_queryCacheClusterList(
      __getArrayIfSingleItem(output["CacheClusters"]["CacheCluster"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheClusterNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheClusterNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheEngineVersion = (output: any, context: __SerdeContext): CacheEngineVersion => {
  const contents: any = {
    Engine: undefined,
    EngineVersion: undefined,
    CacheParameterGroupFamily: undefined,
    CacheEngineDescription: undefined,
    CacheEngineVersionDescription: undefined,
  };
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

const deserializeAws_queryCacheEngineVersionList = (output: any, context: __SerdeContext): CacheEngineVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheEngineVersion(entry, context);
    });
};

const deserializeAws_queryCacheEngineVersionMessage = (
  output: any,
  context: __SerdeContext
): CacheEngineVersionMessage => {
  const contents: any = {
    Marker: undefined,
    CacheEngineVersions: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheEngineVersions === "") {
    contents.CacheEngineVersions = [];
  } else if (
    output["CacheEngineVersions"] !== undefined &&
    output["CacheEngineVersions"]["CacheEngineVersion"] !== undefined
  ) {
    contents.CacheEngineVersions = deserializeAws_queryCacheEngineVersionList(
      __getArrayIfSingleItem(output["CacheEngineVersions"]["CacheEngineVersion"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheNode = (output: any, context: __SerdeContext): CacheNode => {
  const contents: any = {
    CacheNodeId: undefined,
    CacheNodeStatus: undefined,
    CacheNodeCreateTime: undefined,
    Endpoint: undefined,
    ParameterGroupStatus: undefined,
    SourceCacheNodeId: undefined,
    CustomerAvailabilityZone: undefined,
    CustomerOutpostArn: undefined,
  };
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["CacheNodeStatus"] !== undefined) {
    contents.CacheNodeStatus = __expectString(output["CacheNodeStatus"]);
  }
  if (output["CacheNodeCreateTime"] !== undefined) {
    contents.CacheNodeCreateTime = __expectNonNull(__parseRfc3339DateTime(output["CacheNodeCreateTime"]));
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
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

const deserializeAws_queryCacheNodeIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCacheNodeList = (output: any, context: __SerdeContext): CacheNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheNode(entry, context);
    });
};

const deserializeAws_queryCacheNodeTypeSpecificParameter = (
  output: any,
  context: __SerdeContext
): CacheNodeTypeSpecificParameter => {
  const contents: any = {
    ParameterName: undefined,
    Description: undefined,
    Source: undefined,
    DataType: undefined,
    AllowedValues: undefined,
    IsModifiable: undefined,
    MinimumEngineVersion: undefined,
    CacheNodeTypeSpecificValues: undefined,
    ChangeType: undefined,
  };
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
    contents.CacheNodeTypeSpecificValues = deserializeAws_queryCacheNodeTypeSpecificValueList(
      __getArrayIfSingleItem(output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]),
      context
    );
  }
  if (output["ChangeType"] !== undefined) {
    contents.ChangeType = __expectString(output["ChangeType"]);
  }
  return contents;
};

const deserializeAws_queryCacheNodeTypeSpecificParametersList = (
  output: any,
  context: __SerdeContext
): CacheNodeTypeSpecificParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheNodeTypeSpecificParameter(entry, context);
    });
};

const deserializeAws_queryCacheNodeTypeSpecificValue = (
  output: any,
  context: __SerdeContext
): CacheNodeTypeSpecificValue => {
  const contents: any = {
    CacheNodeType: undefined,
    Value: undefined,
  };
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = __expectString(output["CacheNodeType"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryCacheNodeTypeSpecificValueList = (
  output: any,
  context: __SerdeContext
): CacheNodeTypeSpecificValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheNodeTypeSpecificValue(entry, context);
    });
};

const deserializeAws_queryCacheNodeUpdateStatus = (output: any, context: __SerdeContext): CacheNodeUpdateStatus => {
  const contents: any = {
    CacheNodeId: undefined,
    NodeUpdateStatus: undefined,
    NodeDeletionDate: undefined,
    NodeUpdateStartDate: undefined,
    NodeUpdateEndDate: undefined,
    NodeUpdateInitiatedBy: undefined,
    NodeUpdateInitiatedDate: undefined,
    NodeUpdateStatusModifiedDate: undefined,
  };
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["NodeUpdateStatus"] !== undefined) {
    contents.NodeUpdateStatus = __expectString(output["NodeUpdateStatus"]);
  }
  if (output["NodeDeletionDate"] !== undefined) {
    contents.NodeDeletionDate = __expectNonNull(__parseRfc3339DateTime(output["NodeDeletionDate"]));
  }
  if (output["NodeUpdateStartDate"] !== undefined) {
    contents.NodeUpdateStartDate = __expectNonNull(__parseRfc3339DateTime(output["NodeUpdateStartDate"]));
  }
  if (output["NodeUpdateEndDate"] !== undefined) {
    contents.NodeUpdateEndDate = __expectNonNull(__parseRfc3339DateTime(output["NodeUpdateEndDate"]));
  }
  if (output["NodeUpdateInitiatedBy"] !== undefined) {
    contents.NodeUpdateInitiatedBy = __expectString(output["NodeUpdateInitiatedBy"]);
  }
  if (output["NodeUpdateInitiatedDate"] !== undefined) {
    contents.NodeUpdateInitiatedDate = __expectNonNull(__parseRfc3339DateTime(output["NodeUpdateInitiatedDate"]));
  }
  if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
    contents.NodeUpdateStatusModifiedDate = __expectNonNull(
      __parseRfc3339DateTime(output["NodeUpdateStatusModifiedDate"])
    );
  }
  return contents;
};

const deserializeAws_queryCacheNodeUpdateStatusList = (
  output: any,
  context: __SerdeContext
): CacheNodeUpdateStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheNodeUpdateStatus(entry, context);
    });
};

const deserializeAws_queryCacheParameterGroup = (output: any, context: __SerdeContext): CacheParameterGroup => {
  const contents: any = {
    CacheParameterGroupName: undefined,
    CacheParameterGroupFamily: undefined,
    Description: undefined,
    IsGlobal: undefined,
    ARN: undefined,
  };
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

const deserializeAws_queryCacheParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupDetails = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupDetails => {
  const contents: any = {
    Marker: undefined,
    Parameters: undefined,
    CacheNodeTypeSpecificParameters: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
      context
    );
  }
  if (output.CacheNodeTypeSpecificParameters === "") {
    contents.CacheNodeTypeSpecificParameters = [];
  } else if (
    output["CacheNodeTypeSpecificParameters"] !== undefined &&
    output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined
  ) {
    contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(
      __getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupList = (output: any, context: __SerdeContext): CacheParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheParameterGroup(entry, context);
    });
};

const deserializeAws_queryCacheParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupNameMessage => {
  const contents: any = {
    CacheParameterGroupName: undefined,
  };
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = __expectString(output["CacheParameterGroupName"]);
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupsMessage = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupsMessage => {
  const contents: any = {
    Marker: undefined,
    CacheParameterGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheParameterGroups === "") {
    contents.CacheParameterGroups = [];
  } else if (
    output["CacheParameterGroups"] !== undefined &&
    output["CacheParameterGroups"]["CacheParameterGroup"] !== undefined
  ) {
    contents.CacheParameterGroups = deserializeAws_queryCacheParameterGroupList(
      __getArrayIfSingleItem(output["CacheParameterGroups"]["CacheParameterGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupStatus = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupStatus => {
  const contents: any = {
    CacheParameterGroupName: undefined,
    ParameterApplyStatus: undefined,
    CacheNodeIdsToReboot: undefined,
  };
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
    contents.CacheNodeIdsToReboot = deserializeAws_queryCacheNodeIdsList(
      __getArrayIfSingleItem(output["CacheNodeIdsToReboot"]["CacheNodeId"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroup = (output: any, context: __SerdeContext): CacheSecurityGroup => {
  const contents: any = {
    OwnerId: undefined,
    CacheSecurityGroupName: undefined,
    Description: undefined,
    EC2SecurityGroups: undefined,
    ARN: undefined,
  };
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
    contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(
      __getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]),
      context
    );
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupMembership => {
  const contents: any = {
    CacheSecurityGroupName: undefined,
    Status: undefined,
  };
  if (output["CacheSecurityGroupName"] !== undefined) {
    contents.CacheSecurityGroupName = __expectString(output["CacheSecurityGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheSecurityGroupMembership(entry, context);
    });
};

const deserializeAws_queryCacheSecurityGroupMessage = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupMessage => {
  const contents: any = {
    Marker: undefined,
    CacheSecurityGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheSecurityGroups === "") {
    contents.CacheSecurityGroups = [];
  } else if (
    output["CacheSecurityGroups"] !== undefined &&
    output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined
  ) {
    contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroups(
      __getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroups = (output: any, context: __SerdeContext): CacheSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheSecurityGroup(entry, context);
    });
};

const deserializeAws_queryCacheSubnetGroup = (output: any, context: __SerdeContext): CacheSubnetGroup => {
  const contents: any = {
    CacheSubnetGroupName: undefined,
    CacheSubnetGroupDescription: undefined,
    VpcId: undefined,
    Subnets: undefined,
    ARN: undefined,
    SupportedNetworkTypes: undefined,
  };
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
    contents.Subnets = deserializeAws_querySubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output.SupportedNetworkTypes === "") {
    contents.SupportedNetworkTypes = [];
  } else if (output["SupportedNetworkTypes"] !== undefined && output["SupportedNetworkTypes"]["member"] !== undefined) {
    contents.SupportedNetworkTypes = deserializeAws_queryNetworkTypeList(
      __getArrayIfSingleItem(output["SupportedNetworkTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupInUse = (output: any, context: __SerdeContext): CacheSubnetGroupInUse => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupMessage = (output: any, context: __SerdeContext): CacheSubnetGroupMessage => {
  const contents: any = {
    Marker: undefined,
    CacheSubnetGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.CacheSubnetGroups === "") {
    contents.CacheSubnetGroups = [];
  } else if (
    output["CacheSubnetGroups"] !== undefined &&
    output["CacheSubnetGroups"]["CacheSubnetGroup"] !== undefined
  ) {
    contents.CacheSubnetGroups = deserializeAws_queryCacheSubnetGroups(
      __getArrayIfSingleItem(output["CacheSubnetGroups"]["CacheSubnetGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroups = (output: any, context: __SerdeContext): CacheSubnetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCacheSubnetGroup(entry, context);
    });
};

const deserializeAws_queryCacheSubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCloudWatchLogsDestinationDetails = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDestinationDetails => {
  const contents: any = {
    LogGroup: undefined,
  };
  if (output["LogGroup"] !== undefined) {
    contents.LogGroup = __expectString(output["LogGroup"]);
  }
  return contents;
};

const deserializeAws_queryClusterIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCompleteMigrationResponse = (
  output: any,
  context: __SerdeContext
): CompleteMigrationResponse => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCopySnapshotResult = (output: any, context: __SerdeContext): CopySnapshotResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryCreateCacheClusterResult = (
  output: any,
  context: __SerdeContext
): CreateCacheClusterResult => {
  const contents: any = {
    CacheCluster: undefined,
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
  }
  return contents;
};

const deserializeAws_queryCreateCacheParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateCacheParameterGroupResult => {
  const contents: any = {
    CacheParameterGroup: undefined,
  };
  if (output["CacheParameterGroup"] !== undefined) {
    contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroup(output["CacheParameterGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateCacheSecurityGroupResult = (
  output: any,
  context: __SerdeContext
): CreateCacheSecurityGroupResult => {
  const contents: any = {
    CacheSecurityGroup: undefined,
  };
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateCacheSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): CreateCacheSubnetGroupResult => {
  const contents: any = {
    CacheSubnetGroup: undefined,
  };
  if (output["CacheSubnetGroup"] !== undefined) {
    contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): CreateGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): CreateReplicationGroupResult => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateSnapshotResult = (output: any, context: __SerdeContext): CreateSnapshotResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DecreaseNodeGroupsInGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDecreaseReplicaCountResult = (
  output: any,
  context: __SerdeContext
): DecreaseReplicaCountResult => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryDefaultUserAssociatedToUserGroupFault = (
  output: any,
  context: __SerdeContext
): DefaultUserAssociatedToUserGroupFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDefaultUserRequired = (output: any, context: __SerdeContext): DefaultUserRequired => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDeleteCacheClusterResult = (
  output: any,
  context: __SerdeContext
): DeleteCacheClusterResult => {
  const contents: any = {
    CacheCluster: undefined,
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DeleteGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DeleteReplicationGroupResult => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteSnapshotResult = (output: any, context: __SerdeContext): DeleteSnapshotResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeEngineDefaultParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeEngineDefaultParametersResult => {
  const contents: any = {
    EngineDefaults: undefined,
  };
  if (output["EngineDefaults"] !== undefined) {
    contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeGlobalReplicationGroupsResult = (
  output: any,
  context: __SerdeContext
): DescribeGlobalReplicationGroupsResult => {
  const contents: any = {
    Marker: undefined,
    GlobalReplicationGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.GlobalReplicationGroups === "") {
    contents.GlobalReplicationGroups = [];
  } else if (
    output["GlobalReplicationGroups"] !== undefined &&
    output["GlobalReplicationGroups"]["GlobalReplicationGroup"] !== undefined
  ) {
    contents.GlobalReplicationGroups = deserializeAws_queryGlobalReplicationGroupList(
      __getArrayIfSingleItem(output["GlobalReplicationGroups"]["GlobalReplicationGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeSnapshotsListMessage = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotsListMessage => {
  const contents: any = {
    Marker: undefined,
    Snapshots: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Snapshots === "") {
    contents.Snapshots = [];
  } else if (output["Snapshots"] !== undefined && output["Snapshots"]["Snapshot"] !== undefined) {
    contents.Snapshots = deserializeAws_querySnapshotList(
      __getArrayIfSingleItem(output["Snapshots"]["Snapshot"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeUserGroupsResult = (
  output: any,
  context: __SerdeContext
): DescribeUserGroupsResult => {
  const contents: any = {
    UserGroups: undefined,
    Marker: undefined,
  };
  if (output.UserGroups === "") {
    contents.UserGroups = [];
  } else if (output["UserGroups"] !== undefined && output["UserGroups"]["member"] !== undefined) {
    contents.UserGroups = deserializeAws_queryUserGroupList(
      __getArrayIfSingleItem(output["UserGroups"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeUsersResult = (output: any, context: __SerdeContext): DescribeUsersResult => {
  const contents: any = {
    Users: undefined,
    Marker: undefined,
  };
  if (output.Users === "") {
    contents.Users = [];
  } else if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
    contents.Users = deserializeAws_queryUserList(__getArrayIfSingleItem(output["Users"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDestinationDetails = (output: any, context: __SerdeContext): DestinationDetails => {
  const contents: any = {
    CloudWatchLogsDetails: undefined,
    KinesisFirehoseDetails: undefined,
  };
  if (output["CloudWatchLogsDetails"] !== undefined) {
    contents.CloudWatchLogsDetails = deserializeAws_queryCloudWatchLogsDestinationDetails(
      output["CloudWatchLogsDetails"],
      context
    );
  }
  if (output["KinesisFirehoseDetails"] !== undefined) {
    contents.KinesisFirehoseDetails = deserializeAws_queryKinesisFirehoseDestinationDetails(
      output["KinesisFirehoseDetails"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDisassociateGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DisassociateGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDuplicateUserNameFault = (output: any, context: __SerdeContext): DuplicateUserNameFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {
    Status: undefined,
    EC2SecurityGroupName: undefined,
    EC2SecurityGroupOwnerId: undefined,
  };
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

const deserializeAws_queryEC2SecurityGroupList = (output: any, context: __SerdeContext): EC2SecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEC2SecurityGroup(entry, context);
    });
};

const deserializeAws_queryEndpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {
    Address: undefined,
    Port: undefined,
  };
  if (output["Address"] !== undefined) {
    contents.Address = __expectString(output["Address"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  return contents;
};

const deserializeAws_queryEngineDefaults = (output: any, context: __SerdeContext): EngineDefaults => {
  const contents: any = {
    CacheParameterGroupFamily: undefined,
    Marker: undefined,
    Parameters: undefined,
    CacheNodeTypeSpecificParameters: undefined,
  };
  if (output["CacheParameterGroupFamily"] !== undefined) {
    contents.CacheParameterGroupFamily = __expectString(output["CacheParameterGroupFamily"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
      context
    );
  }
  if (output.CacheNodeTypeSpecificParameters === "") {
    contents.CacheNodeTypeSpecificParameters = [];
  } else if (
    output["CacheNodeTypeSpecificParameters"] !== undefined &&
    output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined
  ) {
    contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(
      __getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEvent = (output: any, context: __SerdeContext): Event => {
  const contents: any = {
    SourceIdentifier: undefined,
    SourceType: undefined,
    Message: undefined,
    Date: undefined,
  };
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
    contents.Date = __expectNonNull(__parseRfc3339DateTime(output["Date"]));
  }
  return contents;
};

const deserializeAws_queryEventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEvent(entry, context);
    });
};

const deserializeAws_queryEventsMessage = (output: any, context: __SerdeContext): EventsMessage => {
  const contents: any = {
    Marker: undefined,
    Events: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["Event"] !== undefined) {
    contents.Events = deserializeAws_queryEventList(__getArrayIfSingleItem(output["Events"]["Event"]), context);
  }
  return contents;
};

const deserializeAws_queryFailoverGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): FailoverGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryGlobalNodeGroup = (output: any, context: __SerdeContext): GlobalNodeGroup => {
  const contents: any = {
    GlobalNodeGroupId: undefined,
    Slots: undefined,
  };
  if (output["GlobalNodeGroupId"] !== undefined) {
    contents.GlobalNodeGroupId = __expectString(output["GlobalNodeGroupId"]);
  }
  if (output["Slots"] !== undefined) {
    contents.Slots = __expectString(output["Slots"]);
  }
  return contents;
};

const deserializeAws_queryGlobalNodeGroupList = (output: any, context: __SerdeContext): GlobalNodeGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryGlobalNodeGroup(entry, context);
    });
};

const deserializeAws_queryGlobalReplicationGroup = (output: any, context: __SerdeContext): GlobalReplicationGroup => {
  const contents: any = {
    GlobalReplicationGroupId: undefined,
    GlobalReplicationGroupDescription: undefined,
    Status: undefined,
    CacheNodeType: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    Members: undefined,
    ClusterEnabled: undefined,
    GlobalNodeGroups: undefined,
    AuthTokenEnabled: undefined,
    TransitEncryptionEnabled: undefined,
    AtRestEncryptionEnabled: undefined,
    ARN: undefined,
  };
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
    contents.Members = deserializeAws_queryGlobalReplicationGroupMemberList(
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
    contents.GlobalNodeGroups = deserializeAws_queryGlobalNodeGroupList(
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

const deserializeAws_queryGlobalReplicationGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryGlobalReplicationGroupInfo = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroupInfo => {
  const contents: any = {
    GlobalReplicationGroupId: undefined,
    GlobalReplicationGroupMemberRole: undefined,
  };
  if (output["GlobalReplicationGroupId"] !== undefined) {
    contents.GlobalReplicationGroupId = __expectString(output["GlobalReplicationGroupId"]);
  }
  if (output["GlobalReplicationGroupMemberRole"] !== undefined) {
    contents.GlobalReplicationGroupMemberRole = __expectString(output["GlobalReplicationGroupMemberRole"]);
  }
  return contents;
};

const deserializeAws_queryGlobalReplicationGroupList = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryGlobalReplicationGroup(entry, context);
    });
};

const deserializeAws_queryGlobalReplicationGroupMember = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroupMember => {
  const contents: any = {
    ReplicationGroupId: undefined,
    ReplicationGroupRegion: undefined,
    Role: undefined,
    AutomaticFailover: undefined,
    Status: undefined,
  };
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

const deserializeAws_queryGlobalReplicationGroupMemberList = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroupMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryGlobalReplicationGroupMember(entry, context);
    });
};

const deserializeAws_queryGlobalReplicationGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): GlobalReplicationGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): IncreaseNodeGroupsInGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryIncreaseReplicaCountResult = (
  output: any,
  context: __SerdeContext
): IncreaseReplicaCountResult => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryInsufficientCacheClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientCacheClusterCapacityFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidARNFault = (output: any, context: __SerdeContext): InvalidARNFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidCacheClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheClusterStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidCacheParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheParameterGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidCacheSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheSecurityGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidGlobalReplicationGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidGlobalReplicationGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidKMSKeyFault = (output: any, context: __SerdeContext): InvalidKMSKeyFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidReplicationGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidReplicationGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidSnapshotStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidUserGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidUserGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidUserStateFault = (output: any, context: __SerdeContext): InvalidUserStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidVPCNetworkStateFault = (
  output: any,
  context: __SerdeContext
): InvalidVPCNetworkStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKinesisFirehoseDestinationDetails = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestinationDetails => {
  const contents: any = {
    DeliveryStream: undefined,
  };
  if (output["DeliveryStream"] !== undefined) {
    contents.DeliveryStream = __expectString(output["DeliveryStream"]);
  }
  return contents;
};

const deserializeAws_queryLogDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): LogDeliveryConfiguration => {
  const contents: any = {
    LogType: undefined,
    DestinationType: undefined,
    DestinationDetails: undefined,
    LogFormat: undefined,
    Status: undefined,
    Message: undefined,
  };
  if (output["LogType"] !== undefined) {
    contents.LogType = __expectString(output["LogType"]);
  }
  if (output["DestinationType"] !== undefined) {
    contents.DestinationType = __expectString(output["DestinationType"]);
  }
  if (output["DestinationDetails"] !== undefined) {
    contents.DestinationDetails = deserializeAws_queryDestinationDetails(output["DestinationDetails"], context);
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

const deserializeAws_queryLogDeliveryConfigurationList = (
  output: any,
  context: __SerdeContext
): LogDeliveryConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLogDeliveryConfiguration(entry, context);
    });
};

const deserializeAws_queryModifyCacheClusterResult = (
  output: any,
  context: __SerdeContext
): ModifyCacheClusterResult => {
  const contents: any = {
    CacheCluster: undefined,
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
  }
  return contents;
};

const deserializeAws_queryModifyCacheSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyCacheSubnetGroupResult => {
  const contents: any = {
    CacheSubnetGroup: undefined,
  };
  if (output["CacheSubnetGroup"] !== undefined) {
    contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
  }
  return contents;
};

const deserializeAws_queryModifyGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyReplicationGroupResult => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryModifyReplicationGroupShardConfigurationResult = (
  output: any,
  context: __SerdeContext
): ModifyReplicationGroupShardConfigurationResult => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryNetworkTypeList = (output: any, context: __SerdeContext): (NetworkType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryNodeGroup = (output: any, context: __SerdeContext): NodeGroup => {
  const contents: any = {
    NodeGroupId: undefined,
    Status: undefined,
    PrimaryEndpoint: undefined,
    ReaderEndpoint: undefined,
    Slots: undefined,
    NodeGroupMembers: undefined,
  };
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = __expectString(output["NodeGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["PrimaryEndpoint"] !== undefined) {
    contents.PrimaryEndpoint = deserializeAws_queryEndpoint(output["PrimaryEndpoint"], context);
  }
  if (output["ReaderEndpoint"] !== undefined) {
    contents.ReaderEndpoint = deserializeAws_queryEndpoint(output["ReaderEndpoint"], context);
  }
  if (output["Slots"] !== undefined) {
    contents.Slots = __expectString(output["Slots"]);
  }
  if (output.NodeGroupMembers === "") {
    contents.NodeGroupMembers = [];
  } else if (output["NodeGroupMembers"] !== undefined && output["NodeGroupMembers"]["NodeGroupMember"] !== undefined) {
    contents.NodeGroupMembers = deserializeAws_queryNodeGroupMemberList(
      __getArrayIfSingleItem(output["NodeGroupMembers"]["NodeGroupMember"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroupConfiguration = (output: any, context: __SerdeContext): NodeGroupConfiguration => {
  const contents: any = {
    NodeGroupId: undefined,
    Slots: undefined,
    ReplicaCount: undefined,
    PrimaryAvailabilityZone: undefined,
    ReplicaAvailabilityZones: undefined,
    PrimaryOutpostArn: undefined,
    ReplicaOutpostArns: undefined,
  };
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
    contents.ReplicaAvailabilityZones = deserializeAws_queryAvailabilityZonesList(
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
    contents.ReplicaOutpostArns = deserializeAws_queryOutpostArnsList(
      __getArrayIfSingleItem(output["ReplicaOutpostArns"]["OutpostArn"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroupList = (output: any, context: __SerdeContext): NodeGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNodeGroup(entry, context);
    });
};

const deserializeAws_queryNodeGroupMember = (output: any, context: __SerdeContext): NodeGroupMember => {
  const contents: any = {
    CacheClusterId: undefined,
    CacheNodeId: undefined,
    ReadEndpoint: undefined,
    PreferredAvailabilityZone: undefined,
    PreferredOutpostArn: undefined,
    CurrentRole: undefined,
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = __expectString(output["CacheClusterId"]);
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = __expectString(output["CacheNodeId"]);
  }
  if (output["ReadEndpoint"] !== undefined) {
    contents.ReadEndpoint = deserializeAws_queryEndpoint(output["ReadEndpoint"], context);
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

const deserializeAws_queryNodeGroupMemberList = (output: any, context: __SerdeContext): NodeGroupMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNodeGroupMember(entry, context);
    });
};

const deserializeAws_queryNodeGroupMemberUpdateStatus = (
  output: any,
  context: __SerdeContext
): NodeGroupMemberUpdateStatus => {
  const contents: any = {
    CacheClusterId: undefined,
    CacheNodeId: undefined,
    NodeUpdateStatus: undefined,
    NodeDeletionDate: undefined,
    NodeUpdateStartDate: undefined,
    NodeUpdateEndDate: undefined,
    NodeUpdateInitiatedBy: undefined,
    NodeUpdateInitiatedDate: undefined,
    NodeUpdateStatusModifiedDate: undefined,
  };
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
    contents.NodeDeletionDate = __expectNonNull(__parseRfc3339DateTime(output["NodeDeletionDate"]));
  }
  if (output["NodeUpdateStartDate"] !== undefined) {
    contents.NodeUpdateStartDate = __expectNonNull(__parseRfc3339DateTime(output["NodeUpdateStartDate"]));
  }
  if (output["NodeUpdateEndDate"] !== undefined) {
    contents.NodeUpdateEndDate = __expectNonNull(__parseRfc3339DateTime(output["NodeUpdateEndDate"]));
  }
  if (output["NodeUpdateInitiatedBy"] !== undefined) {
    contents.NodeUpdateInitiatedBy = __expectString(output["NodeUpdateInitiatedBy"]);
  }
  if (output["NodeUpdateInitiatedDate"] !== undefined) {
    contents.NodeUpdateInitiatedDate = __expectNonNull(__parseRfc3339DateTime(output["NodeUpdateInitiatedDate"]));
  }
  if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
    contents.NodeUpdateStatusModifiedDate = __expectNonNull(
      __parseRfc3339DateTime(output["NodeUpdateStatusModifiedDate"])
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroupMemberUpdateStatusList = (
  output: any,
  context: __SerdeContext
): NodeGroupMemberUpdateStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNodeGroupMemberUpdateStatus(entry, context);
    });
};

const deserializeAws_queryNodeGroupNotFoundFault = (output: any, context: __SerdeContext): NodeGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): NodeGroupsPerReplicationGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNodeGroupUpdateStatus = (output: any, context: __SerdeContext): NodeGroupUpdateStatus => {
  const contents: any = {
    NodeGroupId: undefined,
    NodeGroupMemberUpdateStatus: undefined,
  };
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = __expectString(output["NodeGroupId"]);
  }
  if (output.NodeGroupMemberUpdateStatus === "") {
    contents.NodeGroupMemberUpdateStatus = [];
  } else if (
    output["NodeGroupMemberUpdateStatus"] !== undefined &&
    output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"] !== undefined
  ) {
    contents.NodeGroupMemberUpdateStatus = deserializeAws_queryNodeGroupMemberUpdateStatusList(
      __getArrayIfSingleItem(output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroupUpdateStatusList = (
  output: any,
  context: __SerdeContext
): NodeGroupUpdateStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNodeGroupUpdateStatus(entry, context);
    });
};

const deserializeAws_queryNodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNodeSnapshot = (output: any, context: __SerdeContext): NodeSnapshot => {
  const contents: any = {
    CacheClusterId: undefined,
    NodeGroupId: undefined,
    CacheNodeId: undefined,
    NodeGroupConfiguration: undefined,
    CacheSize: undefined,
    CacheNodeCreateTime: undefined,
    SnapshotCreateTime: undefined,
  };
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
    contents.NodeGroupConfiguration = deserializeAws_queryNodeGroupConfiguration(
      output["NodeGroupConfiguration"],
      context
    );
  }
  if (output["CacheSize"] !== undefined) {
    contents.CacheSize = __expectString(output["CacheSize"]);
  }
  if (output["CacheNodeCreateTime"] !== undefined) {
    contents.CacheNodeCreateTime = __expectNonNull(__parseRfc3339DateTime(output["CacheNodeCreateTime"]));
  }
  if (output["SnapshotCreateTime"] !== undefined) {
    contents.SnapshotCreateTime = __expectNonNull(__parseRfc3339DateTime(output["SnapshotCreateTime"]));
  }
  return contents;
};

const deserializeAws_queryNodeSnapshotList = (output: any, context: __SerdeContext): NodeSnapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNodeSnapshot(entry, context);
    });
};

const deserializeAws_queryNodeTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryNoOperationFault = (output: any, context: __SerdeContext): NoOperationFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  const contents: any = {
    TopicArn: undefined,
    TopicStatus: undefined,
  };
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["TopicStatus"] !== undefined) {
    contents.TopicStatus = __expectString(output["TopicStatus"]);
  }
  return contents;
};

const deserializeAws_queryOutpostArnsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryParameter = (output: any, context: __SerdeContext): Parameter => {
  const contents: any = {
    ParameterName: undefined,
    ParameterValue: undefined,
    Description: undefined,
    Source: undefined,
    DataType: undefined,
    AllowedValues: undefined,
    IsModifiable: undefined,
    MinimumEngineVersion: undefined,
    ChangeType: undefined,
  };
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

const deserializeAws_queryParametersList = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryParameter(entry, context);
    });
};

const deserializeAws_queryPendingLogDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): PendingLogDeliveryConfiguration => {
  const contents: any = {
    LogType: undefined,
    DestinationType: undefined,
    DestinationDetails: undefined,
    LogFormat: undefined,
  };
  if (output["LogType"] !== undefined) {
    contents.LogType = __expectString(output["LogType"]);
  }
  if (output["DestinationType"] !== undefined) {
    contents.DestinationType = __expectString(output["DestinationType"]);
  }
  if (output["DestinationDetails"] !== undefined) {
    contents.DestinationDetails = deserializeAws_queryDestinationDetails(output["DestinationDetails"], context);
  }
  if (output["LogFormat"] !== undefined) {
    contents.LogFormat = __expectString(output["LogFormat"]);
  }
  return contents;
};

const deserializeAws_queryPendingLogDeliveryConfigurationList = (
  output: any,
  context: __SerdeContext
): PendingLogDeliveryConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPendingLogDeliveryConfiguration(entry, context);
    });
};

const deserializeAws_queryPendingModifiedValues = (output: any, context: __SerdeContext): PendingModifiedValues => {
  const contents: any = {
    NumCacheNodes: undefined,
    CacheNodeIdsToRemove: undefined,
    EngineVersion: undefined,
    CacheNodeType: undefined,
    AuthTokenStatus: undefined,
    LogDeliveryConfigurations: undefined,
    TransitEncryptionEnabled: undefined,
    TransitEncryptionMode: undefined,
  };
  if (output["NumCacheNodes"] !== undefined) {
    contents.NumCacheNodes = __strictParseInt32(output["NumCacheNodes"]) as number;
  }
  if (output.CacheNodeIdsToRemove === "") {
    contents.CacheNodeIdsToRemove = [];
  } else if (
    output["CacheNodeIdsToRemove"] !== undefined &&
    output["CacheNodeIdsToRemove"]["CacheNodeId"] !== undefined
  ) {
    contents.CacheNodeIdsToRemove = deserializeAws_queryCacheNodeIdsList(
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
    contents.LogDeliveryConfigurations = deserializeAws_queryPendingLogDeliveryConfigurationList(
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

const deserializeAws_queryProcessedUpdateAction = (output: any, context: __SerdeContext): ProcessedUpdateAction => {
  const contents: any = {
    ReplicationGroupId: undefined,
    CacheClusterId: undefined,
    ServiceUpdateName: undefined,
    UpdateActionStatus: undefined,
  };
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

const deserializeAws_queryProcessedUpdateActionList = (
  output: any,
  context: __SerdeContext
): ProcessedUpdateAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryProcessedUpdateAction(entry, context);
    });
};

const deserializeAws_queryPurchaseReservedCacheNodesOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedCacheNodesOfferingResult => {
  const contents: any = {
    ReservedCacheNode: undefined,
  };
  if (output["ReservedCacheNode"] !== undefined) {
    contents.ReservedCacheNode = deserializeAws_queryReservedCacheNode(output["ReservedCacheNode"], context);
  }
  return contents;
};

const deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): RebalanceSlotsInGlobalReplicationGroupResult => {
  const contents: any = {
    GlobalReplicationGroup: undefined,
  };
  if (output["GlobalReplicationGroup"] !== undefined) {
    contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(
      output["GlobalReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryRebootCacheClusterResult = (
  output: any,
  context: __SerdeContext
): RebootCacheClusterResult => {
  const contents: any = {
    CacheCluster: undefined,
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
  }
  return contents;
};

const deserializeAws_queryRecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {
    RecurringChargeAmount: undefined,
    RecurringChargeFrequency: undefined,
  };
  if (output["RecurringChargeAmount"] !== undefined) {
    contents.RecurringChargeAmount = __strictParseFloat(output["RecurringChargeAmount"]) as number;
  }
  if (output["RecurringChargeFrequency"] !== undefined) {
    contents.RecurringChargeFrequency = __expectString(output["RecurringChargeFrequency"]);
  }
  return contents;
};

const deserializeAws_queryRecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryRecurringCharge(entry, context);
    });
};

const deserializeAws_queryReplicationGroup = (output: any, context: __SerdeContext): ReplicationGroup => {
  const contents: any = {
    ReplicationGroupId: undefined,
    Description: undefined,
    GlobalReplicationGroupInfo: undefined,
    Status: undefined,
    PendingModifiedValues: undefined,
    MemberClusters: undefined,
    NodeGroups: undefined,
    SnapshottingClusterId: undefined,
    AutomaticFailover: undefined,
    MultiAZ: undefined,
    ConfigurationEndpoint: undefined,
    SnapshotRetentionLimit: undefined,
    SnapshotWindow: undefined,
    ClusterEnabled: undefined,
    CacheNodeType: undefined,
    AuthTokenEnabled: undefined,
    AuthTokenLastModifiedDate: undefined,
    TransitEncryptionEnabled: undefined,
    AtRestEncryptionEnabled: undefined,
    MemberClustersOutpostArns: undefined,
    KmsKeyId: undefined,
    ARN: undefined,
    UserGroupIds: undefined,
    LogDeliveryConfigurations: undefined,
    ReplicationGroupCreateTime: undefined,
    DataTiering: undefined,
    AutoMinorVersionUpgrade: undefined,
    NetworkType: undefined,
    IpDiscovery: undefined,
    TransitEncryptionMode: undefined,
  };
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = __expectString(output["ReplicationGroupId"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["GlobalReplicationGroupInfo"] !== undefined) {
    contents.GlobalReplicationGroupInfo = deserializeAws_queryGlobalReplicationGroupInfo(
      output["GlobalReplicationGroupInfo"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = deserializeAws_queryReplicationGroupPendingModifiedValues(
      output["PendingModifiedValues"],
      context
    );
  }
  if (output.MemberClusters === "") {
    contents.MemberClusters = [];
  } else if (output["MemberClusters"] !== undefined && output["MemberClusters"]["ClusterId"] !== undefined) {
    contents.MemberClusters = deserializeAws_queryClusterIdList(
      __getArrayIfSingleItem(output["MemberClusters"]["ClusterId"]),
      context
    );
  }
  if (output.NodeGroups === "") {
    contents.NodeGroups = [];
  } else if (output["NodeGroups"] !== undefined && output["NodeGroups"]["NodeGroup"] !== undefined) {
    contents.NodeGroups = deserializeAws_queryNodeGroupList(
      __getArrayIfSingleItem(output["NodeGroups"]["NodeGroup"]),
      context
    );
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
    contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(output["ConfigurationEndpoint"], context);
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
    contents.AuthTokenLastModifiedDate = __expectNonNull(__parseRfc3339DateTime(output["AuthTokenLastModifiedDate"]));
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
    contents.MemberClustersOutpostArns = deserializeAws_queryReplicationGroupOutpostArnList(
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
    contents.UserGroupIds = deserializeAws_queryUserGroupIdList(
      __getArrayIfSingleItem(output["UserGroupIds"]["member"]),
      context
    );
  }
  if (output.LogDeliveryConfigurations === "") {
    contents.LogDeliveryConfigurations = [];
  } else if (
    output["LogDeliveryConfigurations"] !== undefined &&
    output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"] !== undefined
  ) {
    contents.LogDeliveryConfigurations = deserializeAws_queryLogDeliveryConfigurationList(
      __getArrayIfSingleItem(output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"]),
      context
    );
  }
  if (output["ReplicationGroupCreateTime"] !== undefined) {
    contents.ReplicationGroupCreateTime = __expectNonNull(__parseRfc3339DateTime(output["ReplicationGroupCreateTime"]));
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
  return contents;
};

const deserializeAws_queryReplicationGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupAlreadyUnderMigrationFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReplicationGroupList = (output: any, context: __SerdeContext): ReplicationGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReplicationGroup(entry, context);
    });
};

const deserializeAws_queryReplicationGroupMessage = (output: any, context: __SerdeContext): ReplicationGroupMessage => {
  const contents: any = {
    Marker: undefined,
    ReplicationGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReplicationGroups === "") {
    contents.ReplicationGroups = [];
  } else if (
    output["ReplicationGroups"] !== undefined &&
    output["ReplicationGroups"]["ReplicationGroup"] !== undefined
  ) {
    contents.ReplicationGroups = deserializeAws_queryReplicationGroupList(
      __getArrayIfSingleItem(output["ReplicationGroups"]["ReplicationGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReplicationGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReplicationGroupNotUnderMigrationFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupNotUnderMigrationFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReplicationGroupOutpostArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryReplicationGroupPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): ReplicationGroupPendingModifiedValues => {
  const contents: any = {
    PrimaryClusterId: undefined,
    AutomaticFailoverStatus: undefined,
    Resharding: undefined,
    AuthTokenStatus: undefined,
    UserGroups: undefined,
    LogDeliveryConfigurations: undefined,
    TransitEncryptionEnabled: undefined,
    TransitEncryptionMode: undefined,
  };
  if (output["PrimaryClusterId"] !== undefined) {
    contents.PrimaryClusterId = __expectString(output["PrimaryClusterId"]);
  }
  if (output["AutomaticFailoverStatus"] !== undefined) {
    contents.AutomaticFailoverStatus = __expectString(output["AutomaticFailoverStatus"]);
  }
  if (output["Resharding"] !== undefined) {
    contents.Resharding = deserializeAws_queryReshardingStatus(output["Resharding"], context);
  }
  if (output["AuthTokenStatus"] !== undefined) {
    contents.AuthTokenStatus = __expectString(output["AuthTokenStatus"]);
  }
  if (output["UserGroups"] !== undefined) {
    contents.UserGroups = deserializeAws_queryUserGroupsUpdateStatus(output["UserGroups"], context);
  }
  if (output.LogDeliveryConfigurations === "") {
    contents.LogDeliveryConfigurations = [];
  } else if (
    output["LogDeliveryConfigurations"] !== undefined &&
    output["LogDeliveryConfigurations"]["member"] !== undefined
  ) {
    contents.LogDeliveryConfigurations = deserializeAws_queryPendingLogDeliveryConfigurationList(
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

const deserializeAws_queryReservedCacheNode = (output: any, context: __SerdeContext): ReservedCacheNode => {
  const contents: any = {
    ReservedCacheNodeId: undefined,
    ReservedCacheNodesOfferingId: undefined,
    CacheNodeType: undefined,
    StartTime: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    UsagePrice: undefined,
    CacheNodeCount: undefined,
    ProductDescription: undefined,
    OfferingType: undefined,
    State: undefined,
    RecurringCharges: undefined,
    ReservationARN: undefined,
  };
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
    contents.StartTime = __expectNonNull(__parseRfc3339DateTime(output["StartTime"]));
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
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  if (output["ReservationARN"] !== undefined) {
    contents.ReservationARN = __expectString(output["ReservationARN"]);
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeList = (output: any, context: __SerdeContext): ReservedCacheNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedCacheNode(entry, context);
    });
};

const deserializeAws_queryReservedCacheNodeMessage = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedCacheNodes: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedCacheNodes === "") {
    contents.ReservedCacheNodes = [];
  } else if (
    output["ReservedCacheNodes"] !== undefined &&
    output["ReservedCacheNodes"]["ReservedCacheNode"] !== undefined
  ) {
    contents.ReservedCacheNodes = deserializeAws_queryReservedCacheNodeList(
      __getArrayIfSingleItem(output["ReservedCacheNodes"]["ReservedCacheNode"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodesOffering = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOffering => {
  const contents: any = {
    ReservedCacheNodesOfferingId: undefined,
    CacheNodeType: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    UsagePrice: undefined,
    ProductDescription: undefined,
    OfferingType: undefined,
    RecurringCharges: undefined,
  };
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
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodesOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOffering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedCacheNodesOffering(entry, context);
    });
};

const deserializeAws_queryReservedCacheNodesOfferingMessage = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOfferingMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedCacheNodesOfferings: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedCacheNodesOfferings === "") {
    contents.ReservedCacheNodesOfferings = [];
  } else if (
    output["ReservedCacheNodesOfferings"] !== undefined &&
    output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"] !== undefined
  ) {
    contents.ReservedCacheNodesOfferings = deserializeAws_queryReservedCacheNodesOfferingList(
      __getArrayIfSingleItem(output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodesOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOfferingNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReshardingStatus = (output: any, context: __SerdeContext): ReshardingStatus => {
  const contents: any = {
    SlotMigration: undefined,
  };
  if (output["SlotMigration"] !== undefined) {
    contents.SlotMigration = deserializeAws_querySlotMigration(output["SlotMigration"], context);
  }
  return contents;
};

const deserializeAws_queryRevokeCacheSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): RevokeCacheSecurityGroupIngressResult => {
  const contents: any = {
    CacheSecurityGroup: undefined,
  };
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_querySecurityGroupMembership = (output: any, context: __SerdeContext): SecurityGroupMembership => {
  const contents: any = {
    SecurityGroupId: undefined,
    Status: undefined,
  };
  if (output["SecurityGroupId"] !== undefined) {
    contents.SecurityGroupId = __expectString(output["SecurityGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_querySecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySecurityGroupMembership(entry, context);
    });
};

const deserializeAws_queryServiceLinkedRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryServiceUpdate = (output: any, context: __SerdeContext): ServiceUpdate => {
  const contents: any = {
    ServiceUpdateName: undefined,
    ServiceUpdateReleaseDate: undefined,
    ServiceUpdateEndDate: undefined,
    ServiceUpdateSeverity: undefined,
    ServiceUpdateRecommendedApplyByDate: undefined,
    ServiceUpdateStatus: undefined,
    ServiceUpdateDescription: undefined,
    ServiceUpdateType: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    AutoUpdateAfterRecommendedApplyByDate: undefined,
    EstimatedUpdateTime: undefined,
  };
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = __expectString(output["ServiceUpdateName"]);
  }
  if (output["ServiceUpdateReleaseDate"] !== undefined) {
    contents.ServiceUpdateReleaseDate = __expectNonNull(__parseRfc3339DateTime(output["ServiceUpdateReleaseDate"]));
  }
  if (output["ServiceUpdateEndDate"] !== undefined) {
    contents.ServiceUpdateEndDate = __expectNonNull(__parseRfc3339DateTime(output["ServiceUpdateEndDate"]));
  }
  if (output["ServiceUpdateSeverity"] !== undefined) {
    contents.ServiceUpdateSeverity = __expectString(output["ServiceUpdateSeverity"]);
  }
  if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
    contents.ServiceUpdateRecommendedApplyByDate = __expectNonNull(
      __parseRfc3339DateTime(output["ServiceUpdateRecommendedApplyByDate"])
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

const deserializeAws_queryServiceUpdateList = (output: any, context: __SerdeContext): ServiceUpdate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryServiceUpdate(entry, context);
    });
};

const deserializeAws_queryServiceUpdateNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceUpdateNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryServiceUpdatesMessage = (output: any, context: __SerdeContext): ServiceUpdatesMessage => {
  const contents: any = {
    Marker: undefined,
    ServiceUpdates: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ServiceUpdates === "") {
    contents.ServiceUpdates = [];
  } else if (output["ServiceUpdates"] !== undefined && output["ServiceUpdates"]["ServiceUpdate"] !== undefined) {
    contents.ServiceUpdates = deserializeAws_queryServiceUpdateList(
      __getArrayIfSingleItem(output["ServiceUpdates"]["ServiceUpdate"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySlotMigration = (output: any, context: __SerdeContext): SlotMigration => {
  const contents: any = {
    ProgressPercentage: undefined,
  };
  if (output["ProgressPercentage"] !== undefined) {
    contents.ProgressPercentage = __strictParseFloat(output["ProgressPercentage"]) as number;
  }
  return contents;
};

const deserializeAws_querySnapshot = (output: any, context: __SerdeContext): Snapshot => {
  const contents: any = {
    SnapshotName: undefined,
    ReplicationGroupId: undefined,
    ReplicationGroupDescription: undefined,
    CacheClusterId: undefined,
    SnapshotStatus: undefined,
    SnapshotSource: undefined,
    CacheNodeType: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    NumCacheNodes: undefined,
    PreferredAvailabilityZone: undefined,
    PreferredOutpostArn: undefined,
    CacheClusterCreateTime: undefined,
    PreferredMaintenanceWindow: undefined,
    TopicArn: undefined,
    Port: undefined,
    CacheParameterGroupName: undefined,
    CacheSubnetGroupName: undefined,
    VpcId: undefined,
    AutoMinorVersionUpgrade: undefined,
    SnapshotRetentionLimit: undefined,
    SnapshotWindow: undefined,
    NumNodeGroups: undefined,
    AutomaticFailover: undefined,
    NodeSnapshots: undefined,
    KmsKeyId: undefined,
    ARN: undefined,
    DataTiering: undefined,
  };
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
    contents.CacheClusterCreateTime = __expectNonNull(__parseRfc3339DateTime(output["CacheClusterCreateTime"]));
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
    contents.NodeSnapshots = deserializeAws_queryNodeSnapshotList(
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

const deserializeAws_querySnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SnapshotAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotFeatureNotSupportedFault = (
  output: any,
  context: __SerdeContext
): SnapshotFeatureNotSupportedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySnapshot(entry, context);
    });
};

const deserializeAws_querySnapshotNotFoundFault = (output: any, context: __SerdeContext): SnapshotNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SnapshotQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryStartMigrationResponse = (output: any, context: __SerdeContext): StartMigrationResponse => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_querySubnet = (output: any, context: __SerdeContext): Subnet => {
  const contents: any = {
    SubnetIdentifier: undefined,
    SubnetAvailabilityZone: undefined,
    SubnetOutpost: undefined,
    SupportedNetworkTypes: undefined,
  };
  if (output["SubnetIdentifier"] !== undefined) {
    contents.SubnetIdentifier = __expectString(output["SubnetIdentifier"]);
  }
  if (output["SubnetAvailabilityZone"] !== undefined) {
    contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
  }
  if (output["SubnetOutpost"] !== undefined) {
    contents.SubnetOutpost = deserializeAws_querySubnetOutpost(output["SubnetOutpost"], context);
  }
  if (output.SupportedNetworkTypes === "") {
    contents.SupportedNetworkTypes = [];
  } else if (output["SupportedNetworkTypes"] !== undefined && output["SupportedNetworkTypes"]["member"] !== undefined) {
    contents.SupportedNetworkTypes = deserializeAws_queryNetworkTypeList(
      __getArrayIfSingleItem(output["SupportedNetworkTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySubnetInUse = (output: any, context: __SerdeContext): SubnetInUse => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySubnet(entry, context);
    });
};

const deserializeAws_querySubnetNotAllowedFault = (output: any, context: __SerdeContext): SubnetNotAllowedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubnetOutpost = (output: any, context: __SerdeContext): SubnetOutpost => {
  const contents: any = {
    SubnetOutpostArn: undefined,
  };
  if (output["SubnetOutpostArn"] !== undefined) {
    contents.SubnetOutpostArn = __expectString(output["SubnetOutpostArn"]);
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTagListMessage = (output: any, context: __SerdeContext): TagListMessage => {
  const contents: any = {
    TagList: undefined,
  };
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryTagNotFoundFault = (output: any, context: __SerdeContext): TagNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTagQuotaPerResourceExceeded = (
  output: any,
  context: __SerdeContext
): TagQuotaPerResourceExceeded => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTestFailoverNotAvailableFault = (
  output: any,
  context: __SerdeContext
): TestFailoverNotAvailableFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTestFailoverResult = (output: any, context: __SerdeContext): TestFailoverResult => {
  const contents: any = {
    ReplicationGroup: undefined,
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
  }
  return contents;
};

const deserializeAws_queryUGReplicationGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryUnprocessedUpdateAction = (output: any, context: __SerdeContext): UnprocessedUpdateAction => {
  const contents: any = {
    ReplicationGroupId: undefined,
    CacheClusterId: undefined,
    ServiceUpdateName: undefined,
    ErrorType: undefined,
    ErrorMessage: undefined,
  };
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

const deserializeAws_queryUnprocessedUpdateActionList = (
  output: any,
  context: __SerdeContext
): UnprocessedUpdateAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUnprocessedUpdateAction(entry, context);
    });
};

const deserializeAws_queryUpdateAction = (output: any, context: __SerdeContext): UpdateAction => {
  const contents: any = {
    ReplicationGroupId: undefined,
    CacheClusterId: undefined,
    ServiceUpdateName: undefined,
    ServiceUpdateReleaseDate: undefined,
    ServiceUpdateSeverity: undefined,
    ServiceUpdateStatus: undefined,
    ServiceUpdateRecommendedApplyByDate: undefined,
    ServiceUpdateType: undefined,
    UpdateActionAvailableDate: undefined,
    UpdateActionStatus: undefined,
    NodesUpdated: undefined,
    UpdateActionStatusModifiedDate: undefined,
    SlaMet: undefined,
    NodeGroupUpdateStatus: undefined,
    CacheNodeUpdateStatus: undefined,
    EstimatedUpdateTime: undefined,
    Engine: undefined,
  };
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
    contents.ServiceUpdateReleaseDate = __expectNonNull(__parseRfc3339DateTime(output["ServiceUpdateReleaseDate"]));
  }
  if (output["ServiceUpdateSeverity"] !== undefined) {
    contents.ServiceUpdateSeverity = __expectString(output["ServiceUpdateSeverity"]);
  }
  if (output["ServiceUpdateStatus"] !== undefined) {
    contents.ServiceUpdateStatus = __expectString(output["ServiceUpdateStatus"]);
  }
  if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
    contents.ServiceUpdateRecommendedApplyByDate = __expectNonNull(
      __parseRfc3339DateTime(output["ServiceUpdateRecommendedApplyByDate"])
    );
  }
  if (output["ServiceUpdateType"] !== undefined) {
    contents.ServiceUpdateType = __expectString(output["ServiceUpdateType"]);
  }
  if (output["UpdateActionAvailableDate"] !== undefined) {
    contents.UpdateActionAvailableDate = __expectNonNull(__parseRfc3339DateTime(output["UpdateActionAvailableDate"]));
  }
  if (output["UpdateActionStatus"] !== undefined) {
    contents.UpdateActionStatus = __expectString(output["UpdateActionStatus"]);
  }
  if (output["NodesUpdated"] !== undefined) {
    contents.NodesUpdated = __expectString(output["NodesUpdated"]);
  }
  if (output["UpdateActionStatusModifiedDate"] !== undefined) {
    contents.UpdateActionStatusModifiedDate = __expectNonNull(
      __parseRfc3339DateTime(output["UpdateActionStatusModifiedDate"])
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
    contents.NodeGroupUpdateStatus = deserializeAws_queryNodeGroupUpdateStatusList(
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
    contents.CacheNodeUpdateStatus = deserializeAws_queryCacheNodeUpdateStatusList(
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

const deserializeAws_queryUpdateActionList = (output: any, context: __SerdeContext): UpdateAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUpdateAction(entry, context);
    });
};

const deserializeAws_queryUpdateActionResultsMessage = (
  output: any,
  context: __SerdeContext
): UpdateActionResultsMessage => {
  const contents: any = {
    ProcessedUpdateActions: undefined,
    UnprocessedUpdateActions: undefined,
  };
  if (output.ProcessedUpdateActions === "") {
    contents.ProcessedUpdateActions = [];
  } else if (
    output["ProcessedUpdateActions"] !== undefined &&
    output["ProcessedUpdateActions"]["ProcessedUpdateAction"] !== undefined
  ) {
    contents.ProcessedUpdateActions = deserializeAws_queryProcessedUpdateActionList(
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
    contents.UnprocessedUpdateActions = deserializeAws_queryUnprocessedUpdateActionList(
      __getArrayIfSingleItem(output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryUpdateActionsMessage = (output: any, context: __SerdeContext): UpdateActionsMessage => {
  const contents: any = {
    Marker: undefined,
    UpdateActions: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.UpdateActions === "") {
    contents.UpdateActions = [];
  } else if (output["UpdateActions"] !== undefined && output["UpdateActions"]["UpdateAction"] !== undefined) {
    contents.UpdateActions = deserializeAws_queryUpdateActionList(
      __getArrayIfSingleItem(output["UpdateActions"]["UpdateAction"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryUser = (output: any, context: __SerdeContext): User => {
  const contents: any = {
    UserId: undefined,
    UserName: undefined,
    Status: undefined,
    Engine: undefined,
    MinimumEngineVersion: undefined,
    AccessString: undefined,
    UserGroupIds: undefined,
    Authentication: undefined,
    ARN: undefined,
  };
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
    contents.UserGroupIds = deserializeAws_queryUserGroupIdList(
      __getArrayIfSingleItem(output["UserGroupIds"]["member"]),
      context
    );
  }
  if (output["Authentication"] !== undefined) {
    contents.Authentication = deserializeAws_queryAuthentication(output["Authentication"], context);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  return contents;
};

const deserializeAws_queryUserAlreadyExistsFault = (output: any, context: __SerdeContext): UserAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUserGroup = (output: any, context: __SerdeContext): UserGroup => {
  const contents: any = {
    UserGroupId: undefined,
    Status: undefined,
    Engine: undefined,
    UserIds: undefined,
    MinimumEngineVersion: undefined,
    PendingChanges: undefined,
    ReplicationGroups: undefined,
    ARN: undefined,
  };
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
    contents.UserIds = deserializeAws_queryUserIdList(__getArrayIfSingleItem(output["UserIds"]["member"]), context);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
  }
  if (output["PendingChanges"] !== undefined) {
    contents.PendingChanges = deserializeAws_queryUserGroupPendingChanges(output["PendingChanges"], context);
  }
  if (output.ReplicationGroups === "") {
    contents.ReplicationGroups = [];
  } else if (output["ReplicationGroups"] !== undefined && output["ReplicationGroups"]["member"] !== undefined) {
    contents.ReplicationGroups = deserializeAws_queryUGReplicationGroupIdList(
      __getArrayIfSingleItem(output["ReplicationGroups"]["member"]),
      context
    );
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  return contents;
};

const deserializeAws_queryUserGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): UserGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUserGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryUserGroupList = (output: any, context: __SerdeContext): UserGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUserGroup(entry, context);
    });
};

const deserializeAws_queryUserGroupNotFoundFault = (output: any, context: __SerdeContext): UserGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUserGroupPendingChanges = (output: any, context: __SerdeContext): UserGroupPendingChanges => {
  const contents: any = {
    UserIdsToRemove: undefined,
    UserIdsToAdd: undefined,
  };
  if (output.UserIdsToRemove === "") {
    contents.UserIdsToRemove = [];
  } else if (output["UserIdsToRemove"] !== undefined && output["UserIdsToRemove"]["member"] !== undefined) {
    contents.UserIdsToRemove = deserializeAws_queryUserIdList(
      __getArrayIfSingleItem(output["UserIdsToRemove"]["member"]),
      context
    );
  }
  if (output.UserIdsToAdd === "") {
    contents.UserIdsToAdd = [];
  } else if (output["UserIdsToAdd"] !== undefined && output["UserIdsToAdd"]["member"] !== undefined) {
    contents.UserIdsToAdd = deserializeAws_queryUserIdList(
      __getArrayIfSingleItem(output["UserIdsToAdd"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryUserGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): UserGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUserGroupsUpdateStatus = (output: any, context: __SerdeContext): UserGroupsUpdateStatus => {
  const contents: any = {
    UserGroupIdsToAdd: undefined,
    UserGroupIdsToRemove: undefined,
  };
  if (output.UserGroupIdsToAdd === "") {
    contents.UserGroupIdsToAdd = [];
  } else if (output["UserGroupIdsToAdd"] !== undefined && output["UserGroupIdsToAdd"]["member"] !== undefined) {
    contents.UserGroupIdsToAdd = deserializeAws_queryUserGroupIdList(
      __getArrayIfSingleItem(output["UserGroupIdsToAdd"]["member"]),
      context
    );
  }
  if (output.UserGroupIdsToRemove === "") {
    contents.UserGroupIdsToRemove = [];
  } else if (output["UserGroupIdsToRemove"] !== undefined && output["UserGroupIdsToRemove"]["member"] !== undefined) {
    contents.UserGroupIdsToRemove = deserializeAws_queryUserGroupIdList(
      __getArrayIfSingleItem(output["UserGroupIdsToRemove"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryUserIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryUserList = (output: any, context: __SerdeContext): User[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUser(entry, context);
    });
};

const deserializeAws_queryUserNotFoundFault = (output: any, context: __SerdeContext): UserNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUserQuotaExceededFault = (output: any, context: __SerdeContext): UserQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
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
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
