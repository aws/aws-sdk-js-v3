import {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput
} from "../commands/AddTagsToResourceCommand";
import {
  AuthorizeCacheSecurityGroupIngressCommandInput,
  AuthorizeCacheSecurityGroupIngressCommandOutput
} from "../commands/AuthorizeCacheSecurityGroupIngressCommand";
import {
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput
} from "../commands/BatchApplyUpdateActionCommand";
import {
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput
} from "../commands/BatchStopUpdateActionCommand";
import {
  CompleteMigrationCommandInput,
  CompleteMigrationCommandOutput
} from "../commands/CompleteMigrationCommand";
import {
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput
} from "../commands/CopySnapshotCommand";
import {
  CreateCacheClusterCommandInput,
  CreateCacheClusterCommandOutput
} from "../commands/CreateCacheClusterCommand";
import {
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput
} from "../commands/CreateCacheParameterGroupCommand";
import {
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput
} from "../commands/CreateCacheSecurityGroupCommand";
import {
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput
} from "../commands/CreateCacheSubnetGroupCommand";
import {
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput
} from "../commands/CreateReplicationGroupCommand";
import {
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput
} from "../commands/CreateSnapshotCommand";
import {
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput
} from "../commands/DecreaseReplicaCountCommand";
import {
  DeleteCacheClusterCommandInput,
  DeleteCacheClusterCommandOutput
} from "../commands/DeleteCacheClusterCommand";
import {
  DeleteCacheParameterGroupCommandInput,
  DeleteCacheParameterGroupCommandOutput
} from "../commands/DeleteCacheParameterGroupCommand";
import {
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput
} from "../commands/DeleteCacheSecurityGroupCommand";
import {
  DeleteCacheSubnetGroupCommandInput,
  DeleteCacheSubnetGroupCommandOutput
} from "../commands/DeleteCacheSubnetGroupCommand";
import {
  DeleteReplicationGroupCommandInput,
  DeleteReplicationGroupCommandOutput
} from "../commands/DeleteReplicationGroupCommand";
import {
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput
} from "../commands/DeleteSnapshotCommand";
import {
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput
} from "../commands/DescribeCacheClustersCommand";
import {
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput
} from "../commands/DescribeCacheEngineVersionsCommand";
import {
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput
} from "../commands/DescribeCacheParameterGroupsCommand";
import {
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput
} from "../commands/DescribeCacheParametersCommand";
import {
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput
} from "../commands/DescribeCacheSecurityGroupsCommand";
import {
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput
} from "../commands/DescribeCacheSubnetGroupsCommand";
import {
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput
} from "../commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "../commands/DescribeEventsCommand";
import {
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput
} from "../commands/DescribeReplicationGroupsCommand";
import {
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput
} from "../commands/DescribeReservedCacheNodesCommand";
import {
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput
} from "../commands/DescribeReservedCacheNodesOfferingsCommand";
import {
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput
} from "../commands/DescribeServiceUpdatesCommand";
import {
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput
} from "../commands/DescribeSnapshotsCommand";
import {
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput
} from "../commands/DescribeUpdateActionsCommand";
import {
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput
} from "../commands/IncreaseReplicaCountCommand";
import {
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput
} from "../commands/ListAllowedNodeTypeModificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyCacheClusterCommandInput,
  ModifyCacheClusterCommandOutput
} from "../commands/ModifyCacheClusterCommand";
import {
  ModifyCacheParameterGroupCommandInput,
  ModifyCacheParameterGroupCommandOutput
} from "../commands/ModifyCacheParameterGroupCommand";
import {
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput
} from "../commands/ModifyCacheSubnetGroupCommand";
import {
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput
} from "../commands/ModifyReplicationGroupCommand";
import {
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput
} from "../commands/ModifyReplicationGroupShardConfigurationCommand";
import {
  PurchaseReservedCacheNodesOfferingCommandInput,
  PurchaseReservedCacheNodesOfferingCommandOutput
} from "../commands/PurchaseReservedCacheNodesOfferingCommand";
import {
  RebootCacheClusterCommandInput,
  RebootCacheClusterCommandOutput
} from "../commands/RebootCacheClusterCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput
} from "../commands/RemoveTagsFromResourceCommand";
import {
  ResetCacheParameterGroupCommandInput,
  ResetCacheParameterGroupCommandOutput
} from "../commands/ResetCacheParameterGroupCommand";
import {
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput
} from "../commands/RevokeCacheSecurityGroupIngressCommand";
import {
  StartMigrationCommandInput,
  StartMigrationCommandOutput
} from "../commands/StartMigrationCommand";
import {
  TestFailoverCommandInput,
  TestFailoverCommandOutput
} from "../commands/TestFailoverCommand";
import {
  APICallRateForCustomerExceededFault,
  AddTagsToResourceMessage,
  AllowedNodeTypeModificationsMessage,
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
  CacheParameterGroupStatus,
  CacheParameterGroupsMessage,
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
  CreateReplicationGroupMessage,
  CreateReplicationGroupResult,
  CreateSnapshotMessage,
  CreateSnapshotResult,
  CustomerNodeEndpoint,
  DecreaseReplicaCountMessage,
  DecreaseReplicaCountResult,
  DeleteCacheClusterMessage,
  DeleteCacheClusterResult,
  DeleteCacheParameterGroupMessage,
  DeleteCacheSecurityGroupMessage,
  DeleteCacheSubnetGroupMessage,
  DeleteReplicationGroupMessage,
  DeleteReplicationGroupResult,
  DeleteSnapshotMessage,
  DeleteSnapshotResult,
  DescribeCacheClustersMessage,
  DescribeCacheEngineVersionsMessage,
  DescribeCacheParameterGroupsMessage,
  DescribeCacheParametersMessage,
  DescribeCacheSecurityGroupsMessage,
  DescribeCacheSubnetGroupsMessage,
  DescribeEngineDefaultParametersMessage,
  DescribeEngineDefaultParametersResult,
  DescribeEventsMessage,
  DescribeReplicationGroupsMessage,
  DescribeReservedCacheNodesMessage,
  DescribeReservedCacheNodesOfferingsMessage,
  DescribeServiceUpdatesMessage,
  DescribeSnapshotsListMessage,
  DescribeSnapshotsMessage,
  DescribeUpdateActionsMessage,
  EC2SecurityGroup,
  Endpoint,
  EngineDefaults,
  Event,
  EventsMessage,
  IncreaseReplicaCountMessage,
  IncreaseReplicaCountResult,
  InsufficientCacheClusterCapacityFault,
  InvalidARNFault,
  InvalidCacheClusterStateFault,
  InvalidCacheParameterGroupStateFault,
  InvalidCacheSecurityGroupStateFault,
  InvalidKMSKeyFault,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  InvalidReplicationGroupStateFault,
  InvalidSnapshotStateFault,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  ListAllowedNodeTypeModificationsMessage,
  ListTagsForResourceMessage,
  ModifyCacheClusterMessage,
  ModifyCacheClusterResult,
  ModifyCacheParameterGroupMessage,
  ModifyCacheSubnetGroupMessage,
  ModifyCacheSubnetGroupResult,
  ModifyReplicationGroupMessage,
  ModifyReplicationGroupResult,
  ModifyReplicationGroupShardConfigurationMessage,
  ModifyReplicationGroupShardConfigurationResult,
  NoOperationFault,
  NodeGroup,
  NodeGroupConfiguration,
  NodeGroupMember,
  NodeGroupMemberUpdateStatus,
  NodeGroupNotFoundFault,
  NodeGroupUpdateStatus,
  NodeGroupsPerReplicationGroupQuotaExceededFault,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NodeSnapshot,
  NotificationConfiguration,
  Parameter,
  ParameterNameValue,
  PendingModifiedValues,
  ProcessedUpdateAction,
  PurchaseReservedCacheNodesOfferingMessage,
  PurchaseReservedCacheNodesOfferingResult,
  RebootCacheClusterMessage,
  RebootCacheClusterResult,
  RecurringCharge,
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
  ServiceUpdateStatus,
  ServiceUpdatesMessage,
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
  UpdateActionStatus,
  UpdateActionsMessage
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export async function serializeAws_queryAddTagsToResourceCommand(
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAddTagsToResourceMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AddTagsToResource",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(
  input: AuthorizeCacheSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AuthorizeCacheSecurityGroupIngress",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryBatchApplyUpdateActionCommand(
  input: BatchApplyUpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryBatchApplyUpdateActionMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "BatchApplyUpdateAction",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryBatchStopUpdateActionCommand(
  input: BatchStopUpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryBatchStopUpdateActionMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "BatchStopUpdateAction",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCompleteMigrationCommand(
  input: CompleteMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCompleteMigrationMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CompleteMigration",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCopySnapshotCommand(
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCopySnapshotMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CopySnapshot",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateCacheClusterCommand(
  input: CreateCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateCacheClusterMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateCacheCluster",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateCacheParameterGroupCommand(
  input: CreateCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateCacheParameterGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateCacheParameterGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateCacheSecurityGroupCommand(
  input: CreateCacheSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateCacheSecurityGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateCacheSecurityGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateCacheSubnetGroupCommand(
  input: CreateCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateCacheSubnetGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateCacheSubnetGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateReplicationGroupCommand(
  input: CreateReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateReplicationGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateReplicationGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateSnapshotCommand(
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateSnapshotMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateSnapshot",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDecreaseReplicaCountCommand(
  input: DecreaseReplicaCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDecreaseReplicaCountMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DecreaseReplicaCount",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteCacheClusterCommand(
  input: DeleteCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteCacheClusterMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteCacheCluster",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteCacheParameterGroupCommand(
  input: DeleteCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteCacheParameterGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteCacheParameterGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteCacheSecurityGroupCommand(
  input: DeleteCacheSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteCacheSecurityGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteCacheSecurityGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteCacheSubnetGroupCommand(
  input: DeleteCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteCacheSubnetGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteCacheSubnetGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteReplicationGroupCommand(
  input: DeleteReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteReplicationGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteReplicationGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteSnapshotCommand(
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteSnapshotMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteSnapshot",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeCacheClustersCommand(
  input: DescribeCacheClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeCacheClustersMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeCacheClusters",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeCacheEngineVersionsCommand(
  input: DescribeCacheEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeCacheEngineVersionsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeCacheEngineVersions",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeCacheParameterGroupsCommand(
  input: DescribeCacheParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeCacheParameterGroupsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeCacheParameterGroups",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeCacheParametersCommand(
  input: DescribeCacheParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeCacheParametersMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeCacheParameters",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeCacheSecurityGroupsCommand(
  input: DescribeCacheSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeCacheSecurityGroupsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeCacheSecurityGroups",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeCacheSubnetGroupsCommand(
  input: DescribeCacheSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeCacheSubnetGroupsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeCacheSubnetGroups",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEngineDefaultParametersCommand(
  input: DescribeEngineDefaultParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEngineDefaultParametersMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEngineDefaultParameters",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEventsCommand(
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEventsMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEvents",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeReplicationGroupsCommand(
  input: DescribeReplicationGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeReplicationGroupsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeReplicationGroups",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeReservedCacheNodesCommand(
  input: DescribeReservedCacheNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeReservedCacheNodesMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeReservedCacheNodes",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeReservedCacheNodesOfferingsCommand(
  input: DescribeReservedCacheNodesOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeReservedCacheNodesOfferingsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeReservedCacheNodesOfferings",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeServiceUpdatesCommand(
  input: DescribeServiceUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeServiceUpdatesMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeServiceUpdates",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeSnapshotsCommand(
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeSnapshotsMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeSnapshots",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeUpdateActionsCommand(
  input: DescribeUpdateActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeUpdateActionsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeUpdateActions",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryIncreaseReplicaCountCommand(
  input: IncreaseReplicaCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryIncreaseReplicaCountMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "IncreaseReplicaCount",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListAllowedNodeTypeModificationsCommand(
  input: ListAllowedNodeTypeModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListAllowedNodeTypeModificationsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListAllowedNodeTypeModifications",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListTagsForResourceMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListTagsForResource",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyCacheClusterCommand(
  input: ModifyCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyCacheClusterMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyCacheCluster",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyCacheParameterGroupCommand(
  input: ModifyCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyCacheParameterGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyCacheParameterGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyCacheSubnetGroupCommand(
  input: ModifyCacheSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyCacheSubnetGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyCacheSubnetGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyReplicationGroupCommand(
  input: ModifyReplicationGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyReplicationGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyReplicationGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyReplicationGroupShardConfigurationCommand(
  input: ModifyReplicationGroupShardConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyReplicationGroupShardConfigurationMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyReplicationGroupShardConfiguration",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryPurchaseReservedCacheNodesOfferingCommand(
  input: PurchaseReservedCacheNodesOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryPurchaseReservedCacheNodesOfferingMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "PurchaseReservedCacheNodesOffering",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRebootCacheClusterCommand(
  input: RebootCacheClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRebootCacheClusterMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RebootCacheCluster",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRemoveTagsFromResourceCommand(
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRemoveTagsFromResourceMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RemoveTagsFromResource",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryResetCacheParameterGroupCommand(
  input: ResetCacheParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryResetCacheParameterGroupMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ResetCacheParameterGroup",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRevokeCacheSecurityGroupIngressCommand(
  input: RevokeCacheSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRevokeCacheSecurityGroupIngressMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RevokeCacheSecurityGroupIngress",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryStartMigrationCommand(
  input: StartMigrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryStartMigrationMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "StartMigration",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryTestFailoverCommand(
  input: TestFailoverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryTestFailoverMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "TestFailover",
    Version: "2015-02-02"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_queryAddTagsToResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagListMessage(
    data.AddTagsToResourceResult,
    context
  );
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagListMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAddTagsToResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidARNFault":
    case "elmo.admin#InvalidARNFault":
      response = {
        ...(await deserializeAws_queryInvalidARNFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotNotFoundFault":
    case "elmo.admin#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_querySnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "elmo.admin#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult(
    data.AuthorizeCacheSecurityGroupIngressResult,
    context
  );
  const response: AuthorizeCacheSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AuthorizeCacheSecurityGroupIngressResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationAlreadyExistsFault":
    case "elmo.admin#AuthorizationAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheSecurityGroupStateFault":
    case "elmo.admin#InvalidCacheSecurityGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryBatchApplyUpdateActionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchApplyUpdateActionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryBatchApplyUpdateActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateActionResultsMessage(
    data.BatchApplyUpdateActionResult,
    context
  );
  const response: BatchApplyUpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateActionResultsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryBatchApplyUpdateActionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchApplyUpdateActionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUpdateNotFoundFault":
    case "elmo.admin#ServiceUpdateNotFoundFault":
      response = {
        ...(await deserializeAws_queryServiceUpdateNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryBatchStopUpdateActionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopUpdateActionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryBatchStopUpdateActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateActionResultsMessage(
    data.BatchStopUpdateActionResult,
    context
  );
  const response: BatchStopUpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateActionResultsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryBatchStopUpdateActionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopUpdateActionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUpdateNotFoundFault":
    case "elmo.admin#ServiceUpdateNotFoundFault":
      response = {
        ...(await deserializeAws_queryServiceUpdateNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCompleteMigrationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMigrationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCompleteMigrationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCompleteMigrationResponse(
    data.CompleteMigrationResult,
    context
  );
  const response: CompleteMigrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CompleteMigrationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCompleteMigrationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMigrationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotUnderMigrationFault":
    case "elmo.admin#ReplicationGroupNotUnderMigrationFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCopySnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopySnapshotResult(
    data.CopySnapshotResult,
    context
  );
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopySnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCopySnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSnapshotStateFault":
    case "elmo.admin#InvalidSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotAlreadyExistsFault":
    case "elmo.admin#SnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotNotFoundFault":
    case "elmo.admin#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_querySnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "elmo.admin#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateCacheClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheClusterResult(
    data.CreateCacheClusterResult,
    context
  );
  const response: CreateCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCacheClusterResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateCacheClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterAlreadyExistsFault":
    case "elmo.admin#CacheClusterAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryCacheClusterAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSubnetGroupNotFoundFault":
    case "elmo.admin#CacheSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "elmo.admin#ClusterQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCacheClusterCapacityFault":
    case "elmo.admin#InsufficientCacheClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "elmo.admin#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "elmo.admin#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateCacheParameterGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheParameterGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateCacheParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheParameterGroupResult(
    data.CreateCacheParameterGroupResult,
    context
  );
  const response: CreateCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCacheParameterGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateCacheParameterGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheParameterGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupAlreadyExistsFault":
    case "elmo.admin#CacheParameterGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupQuotaExceededFault":
    case "elmo.admin#CacheParameterGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheParameterGroupStateFault":
    case "elmo.admin#InvalidCacheParameterGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateCacheSecurityGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSecurityGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateCacheSecurityGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheSecurityGroupResult(
    data.CreateCacheSecurityGroupResult,
    context
  );
  const response: CreateCacheSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCacheSecurityGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateCacheSecurityGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSecurityGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupAlreadyExistsFault":
    case "elmo.admin#CacheSecurityGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupQuotaExceededFault":
    case "elmo.admin#CacheSecurityGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateCacheSubnetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSubnetGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateCacheSubnetGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateCacheSubnetGroupResult(
    data.CreateCacheSubnetGroupResult,
    context
  );
  const response: CreateCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCacheSubnetGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateCacheSubnetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCacheSubnetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSubnetGroupAlreadyExistsFault":
    case "elmo.admin#CacheSubnetGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSubnetGroupQuotaExceededFault":
    case "elmo.admin#CacheSubnetGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSubnetQuotaExceededFault":
    case "elmo.admin#CacheSubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "elmo.admin#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateReplicationGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateReplicationGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateReplicationGroupResult(
    data.CreateReplicationGroupResult,
    context
  );
  const response: CreateReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateReplicationGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateReplicationGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSubnetGroupNotFoundFault":
    case "elmo.admin#CacheSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "elmo.admin#ClusterQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCacheClusterCapacityFault":
    case "elmo.admin#InsufficientCacheClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeGroupsPerReplicationGroupQuotaExceededFault":
    case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "elmo.admin#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupAlreadyExistsFault":
    case "elmo.admin#ReplicationGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "elmo.admin#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateSnapshotResult(
    data.CreateSnapshotResult,
    context
  );
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotAlreadyExistsFault":
    case "elmo.admin#SnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotFeatureNotSupportedFault":
    case "elmo.admin#SnapshotFeatureNotSupportedFault":
      response = {
        ...(await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "elmo.admin#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDecreaseReplicaCountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicaCountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDecreaseReplicaCountCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDecreaseReplicaCountResult(
    data.DecreaseReplicaCountResult,
    context
  );
  const response: DecreaseReplicaCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DecreaseReplicaCountResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDecreaseReplicaCountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicaCountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "elmo.admin#ClusterQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCacheClusterCapacityFault":
    case "elmo.admin#InsufficientCacheClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoOperationFault":
    case "elmo.admin#NoOperationFault":
      response = {
        ...(await deserializeAws_queryNoOperationFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeGroupsPerReplicationGroupQuotaExceededFault":
    case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteCacheClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteCacheClusterResult(
    data.DeleteCacheClusterResult,
    context
  );
  const response: DeleteCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCacheClusterResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteCacheClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotAlreadyExistsFault":
    case "elmo.admin#SnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotFeatureNotSupportedFault":
    case "elmo.admin#SnapshotFeatureNotSupportedFault":
      response = {
        ...(await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "elmo.admin#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteCacheParameterGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheParameterGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteCacheParameterGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteCacheParameterGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheParameterGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheParameterGroupStateFault":
    case "elmo.admin#InvalidCacheParameterGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteCacheSecurityGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSecurityGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteCacheSecurityGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteCacheSecurityGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSecurityGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheSecurityGroupStateFault":
    case "elmo.admin#InvalidCacheSecurityGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteCacheSubnetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSubnetGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteCacheSubnetGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteCacheSubnetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheSubnetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSubnetGroupInUse":
    case "elmo.admin#CacheSubnetGroupInUse":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupInUseResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSubnetGroupNotFoundFault":
    case "elmo.admin#CacheSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteReplicationGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteReplicationGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteReplicationGroupResult(
    data.DeleteReplicationGroupResult,
    context
  );
  const response: DeleteReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteReplicationGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteReplicationGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotAlreadyExistsFault":
    case "elmo.admin#SnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotFeatureNotSupportedFault":
    case "elmo.admin#SnapshotFeatureNotSupportedFault":
      response = {
        ...(await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "elmo.admin#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteSnapshotResult(
    data.DeleteSnapshotResult,
    context
  );
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSnapshotStateFault":
    case "elmo.admin#InvalidSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotNotFoundFault":
    case "elmo.admin#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_querySnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeCacheClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheClustersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeCacheClustersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheClusterMessage(
    data.DescribeCacheClustersResult,
    context
  );
  const response: DescribeCacheClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheClusterMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeCacheClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheClustersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeCacheEngineVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheEngineVersionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeCacheEngineVersionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheEngineVersionMessage(
    data.DescribeCacheEngineVersionsResult,
    context
  );
  const response: DescribeCacheEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheEngineVersionMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeCacheEngineVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheEngineVersionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeCacheParameterGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParameterGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeCacheParameterGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupsMessage(
    data.DescribeCacheParameterGroupsResult,
    context
  );
  const response: DescribeCacheParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheParameterGroupsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeCacheParameterGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParameterGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeCacheParametersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParametersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeCacheParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupDetails(
    data.DescribeCacheParametersResult,
    context
  );
  const response: DescribeCacheParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheParameterGroupDetails",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeCacheParametersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheParametersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeCacheSecurityGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSecurityGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeCacheSecurityGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheSecurityGroupMessage(
    data.DescribeCacheSecurityGroupsResult,
    context
  );
  const response: DescribeCacheSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheSecurityGroupMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeCacheSecurityGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSecurityGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeCacheSubnetGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSubnetGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeCacheSubnetGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheSubnetGroupMessage(
    data.DescribeCacheSubnetGroupsResult,
    context
  );
  const response: DescribeCacheSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheSubnetGroupMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeCacheSubnetGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheSubnetGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSubnetGroupNotFoundFault":
    case "elmo.admin#CacheSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEngineDefaultParametersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultParametersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEngineDefaultParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEngineDefaultParametersResult(
    data.DescribeEngineDefaultParametersResult,
    context
  );
  const response: DescribeEngineDefaultParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEngineDefaultParametersResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEngineDefaultParametersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultParametersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventsMessage(
    data.DescribeEventsResult,
    context
  );
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EventsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeReplicationGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeReplicationGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReplicationGroupMessage(
    data.DescribeReplicationGroupsResult,
    context
  );
  const response: DescribeReplicationGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReplicationGroupMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeReplicationGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeReservedCacheNodesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeReservedCacheNodesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedCacheNodeMessage(
    data.DescribeReservedCacheNodesResult,
    context
  );
  const response: DescribeReservedCacheNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReservedCacheNodeMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeReservedCacheNodesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedCacheNodeNotFoundFault":
    case "elmo.admin#ReservedCacheNodeNotFoundFault":
      response = {
        ...(await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedCacheNodesOfferingMessage(
    data.DescribeReservedCacheNodesOfferingsResult,
    context
  );
  const response: DescribeReservedCacheNodesOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReservedCacheNodesOfferingMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedCacheNodesOfferingNotFoundFault":
    case "elmo.admin#ReservedCacheNodesOfferingNotFoundFault":
      response = {
        ...(await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeServiceUpdatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeServiceUpdatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryServiceUpdatesMessage(
    data.DescribeServiceUpdatesResult,
    context
  );
  const response: DescribeServiceUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ServiceUpdatesMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeServiceUpdatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceUpdatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUpdateNotFoundFault":
    case "elmo.admin#ServiceUpdateNotFoundFault":
      response = {
        ...(await deserializeAws_queryServiceUpdateNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeSnapshotsListMessage(
    data.DescribeSnapshotsResult,
    context
  );
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSnapshotsListMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotNotFoundFault":
    case "elmo.admin#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_querySnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeUpdateActionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateActionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeUpdateActionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateActionsMessage(
    data.DescribeUpdateActionsResult,
    context
  );
  const response: DescribeUpdateActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateActionsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeUpdateActionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateActionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryIncreaseReplicaCountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicaCountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryIncreaseReplicaCountCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryIncreaseReplicaCountResult(
    data.IncreaseReplicaCountResult,
    context
  );
  const response: IncreaseReplicaCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IncreaseReplicaCountResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryIncreaseReplicaCountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicaCountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "elmo.admin#ClusterQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCacheClusterCapacityFault":
    case "elmo.admin#InsufficientCacheClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSKeyFault":
    case "elmo.admin#InvalidKMSKeyFault":
      response = {
        ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoOperationFault":
    case "elmo.admin#NoOperationFault":
      response = {
        ...(await deserializeAws_queryNoOperationFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeGroupsPerReplicationGroupQuotaExceededFault":
    case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListAllowedNodeTypeModificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeModificationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListAllowedNodeTypeModificationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAllowedNodeTypeModificationsMessage(
    data.ListAllowedNodeTypeModificationsResult,
    context
  );
  const response: ListAllowedNodeTypeModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AllowedNodeTypeModificationsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListAllowedNodeTypeModificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedNodeTypeModificationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagListMessage(
    data.ListTagsForResourceResult,
    context
  );
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagListMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidARNFault":
    case "elmo.admin#InvalidARNFault":
      response = {
        ...(await deserializeAws_queryInvalidARNFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotNotFoundFault":
    case "elmo.admin#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_querySnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyCacheClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyCacheClusterResult(
    data.ModifyCacheClusterResult,
    context
  );
  const response: ModifyCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyCacheClusterResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyCacheClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCacheClusterCapacityFault":
    case "elmo.admin#InsufficientCacheClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheSecurityGroupStateFault":
    case "elmo.admin#InvalidCacheSecurityGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "elmo.admin#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyCacheParameterGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheParameterGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyCacheParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupNameMessage(
    data.ModifyCacheParameterGroupResult,
    context
  );
  const response: ModifyCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheParameterGroupNameMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyCacheParameterGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheParameterGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheParameterGroupStateFault":
    case "elmo.admin#InvalidCacheParameterGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyCacheSubnetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheSubnetGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyCacheSubnetGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyCacheSubnetGroupResult(
    data.ModifyCacheSubnetGroupResult,
    context
  );
  const response: ModifyCacheSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyCacheSubnetGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyCacheSubnetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCacheSubnetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheSubnetGroupNotFoundFault":
    case "elmo.admin#CacheSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSubnetQuotaExceededFault":
    case "elmo.admin#CacheSubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "elmo.admin#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetInUse":
    case "elmo.admin#SubnetInUse":
      response = {
        ...(await deserializeAws_querySubnetInUseResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyReplicationGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyReplicationGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyReplicationGroupResult(
    data.ModifyReplicationGroupResult,
    context
  );
  const response: ModifyReplicationGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyReplicationGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyReplicationGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCacheClusterCapacityFault":
    case "elmo.admin#InsufficientCacheClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheSecurityGroupStateFault":
    case "elmo.admin#InvalidCacheSecurityGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSKeyFault":
    case "elmo.admin#InvalidKMSKeyFault":
      response = {
        ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "elmo.admin#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyReplicationGroupShardConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyReplicationGroupShardConfigurationResult(
    data.ModifyReplicationGroupShardConfigurationResult,
    context
  );
  const response: ModifyReplicationGroupShardConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyReplicationGroupShardConfigurationResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientCacheClusterCapacityFault":
    case "elmo.admin#InsufficientCacheClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSKeyFault":
    case "elmo.admin#InvalidKMSKeyFault":
      response = {
        ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeGroupsPerReplicationGroupQuotaExceededFault":
    case "elmo.admin#NodeGroupsPerReplicationGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPurchaseReservedCacheNodesOfferingResult(
    data.PurchaseReservedCacheNodesOfferingResult,
    context
  );
  const response: PurchaseReservedCacheNodesOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PurchaseReservedCacheNodesOfferingResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedCacheNodeAlreadyExistsFault":
    case "elmo.admin#ReservedCacheNodeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedCacheNodeQuotaExceededFault":
    case "elmo.admin#ReservedCacheNodeQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedCacheNodesOfferingNotFoundFault":
    case "elmo.admin#ReservedCacheNodesOfferingNotFoundFault":
      response = {
        ...(await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRebootCacheClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootCacheClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRebootCacheClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRebootCacheClusterResult(
    data.RebootCacheClusterResult,
    context
  );
  const response: RebootCacheClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootCacheClusterResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRebootCacheClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootCacheClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRemoveTagsFromResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveTagsFromResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagListMessage(
    data.RemoveTagsFromResourceResult,
    context
  );
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagListMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRemoveTagsFromResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CacheClusterNotFoundFault":
    case "elmo.admin#CacheClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidARNFault":
    case "elmo.admin#InvalidARNFault":
      response = {
        ...(await deserializeAws_queryInvalidARNFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotNotFoundFault":
    case "elmo.admin#SnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_querySnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagNotFoundFault":
    case "elmo.admin#TagNotFoundFault":
      response = {
        ...(await deserializeAws_queryTagNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryResetCacheParameterGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheParameterGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryResetCacheParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCacheParameterGroupNameMessage(
    data.ResetCacheParameterGroupResult,
    context
  );
  const response: ResetCacheParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CacheParameterGroupNameMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryResetCacheParameterGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheParameterGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheParameterGroupNotFoundFault":
    case "elmo.admin#CacheParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheParameterGroupStateFault":
    case "elmo.admin#InvalidCacheParameterGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRevokeCacheSecurityGroupIngressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCacheSecurityGroupIngressCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRevokeCacheSecurityGroupIngressResult(
    data.RevokeCacheSecurityGroupIngressResult,
    context
  );
  const response: RevokeCacheSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RevokeCacheSecurityGroupIngressResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCacheSecurityGroupIngressCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationNotFoundFault":
    case "elmo.admin#AuthorizationNotFoundFault":
      response = {
        ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CacheSecurityGroupNotFoundFault":
    case "elmo.admin#CacheSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheSecurityGroupStateFault":
    case "elmo.admin#InvalidCacheSecurityGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryStartMigrationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryStartMigrationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartMigrationResponse(
    data.StartMigrationResult,
    context
  );
  const response: StartMigrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartMigrationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryStartMigrationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMigrationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupAlreadyUnderMigrationFault":
    case "elmo.admin#ReplicationGroupAlreadyUnderMigrationFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryTestFailoverCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFailoverCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryTestFailoverCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTestFailoverResult(
    data.TestFailoverResult,
    context
  );
  const response: TestFailoverCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestFailoverResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryTestFailoverCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFailoverCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "APICallRateForCustomerExceededFault":
    case "elmo.admin#APICallRateForCustomerExceededFault":
      response = {
        ...(await deserializeAws_queryAPICallRateForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCacheClusterStateFault":
    case "elmo.admin#InvalidCacheClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSKeyFault":
    case "elmo.admin#InvalidKMSKeyFault":
      response = {
        ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidReplicationGroupStateFault":
    case "elmo.admin#InvalidReplicationGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeGroupNotFoundFault":
    case "elmo.admin#NodeGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryNodeGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicationGroupNotFoundFault":
    case "elmo.admin#ReplicationGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TestFailoverNotAvailableFault":
    case "elmo.admin#TestFailoverNotAvailableFault":
      response = {
        ...(await deserializeAws_queryTestFailoverNotAvailableFaultResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_queryInvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterCombinationException(
    body.Error,
    context
  );
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterValueException(
    body.Error,
    context
  );
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryAPICallRateForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<APICallRateForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAPICallRateForCustomerExceededFault(
    body.Error,
    context
  );
  const contents: APICallRateForCustomerExceededFault = {
    name: "APICallRateForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryAuthorizationAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: AuthorizationAlreadyExistsFault = {
    name: "AuthorizationAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryAuthorizationNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationNotFoundFault(
    body.Error,
    context
  );
  const contents: AuthorizationNotFoundFault = {
    name: "AuthorizationNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheClusterAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: CacheClusterAlreadyExistsFault = {
    name: "CacheClusterAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheClusterNotFoundFault(
    body.Error,
    context
  );
  const contents: CacheClusterNotFoundFault = {
    name: "CacheClusterNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheParameterGroupAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: CacheParameterGroupAlreadyExistsFault = {
    name: "CacheParameterGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheParameterGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: CacheParameterGroupNotFoundFault = {
    name: "CacheParameterGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheParameterGroupQuotaExceededFault(
    body.Error,
    context
  );
  const contents: CacheParameterGroupQuotaExceededFault = {
    name: "CacheParameterGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSecurityGroupAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: CacheSecurityGroupAlreadyExistsFault = {
    name: "CacheSecurityGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSecurityGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: CacheSecurityGroupNotFoundFault = {
    name: "CacheSecurityGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSecurityGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSecurityGroupQuotaExceededFault(
    body.Error,
    context
  );
  const contents: CacheSecurityGroupQuotaExceededFault = {
    name: "CacheSecurityGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: CacheSubnetGroupAlreadyExistsFault = {
    name: "CacheSubnetGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSubnetGroupInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupInUse(
    body.Error,
    context
  );
  const contents: CacheSubnetGroupInUse = {
    name: "CacheSubnetGroupInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: CacheSubnetGroupNotFoundFault = {
    name: "CacheSubnetGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetGroupQuotaExceededFault(
    body.Error,
    context
  );
  const contents: CacheSubnetGroupQuotaExceededFault = {
    name: "CacheSubnetGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCacheSubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CacheSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCacheSubnetQuotaExceededFault(
    body.Error,
    context
  );
  const contents: CacheSubnetQuotaExceededFault = {
    name: "CacheSubnetQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterQuotaForCustomerExceededFault(
    body.Error,
    context
  );
  const contents: ClusterQuotaForCustomerExceededFault = {
    name: "ClusterQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCacheClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientCacheClusterCapacityFault(
    body.Error,
    context
  );
  const contents: InsufficientCacheClusterCapacityFault = {
    name: "InsufficientCacheClusterCapacityFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidARNFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidARNFault(
    body.Error,
    context
  );
  const contents: InvalidARNFault = {
    name: "InvalidARNFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidCacheClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCacheClusterStateFault(
    body.Error,
    context
  );
  const contents: InvalidCacheClusterStateFault = {
    name: "InvalidCacheClusterStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCacheParameterGroupStateFault(
    body.Error,
    context
  );
  const contents: InvalidCacheParameterGroupStateFault = {
    name: "InvalidCacheParameterGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCacheSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCacheSecurityGroupStateFault(
    body.Error,
    context
  );
  const contents: InvalidCacheSecurityGroupStateFault = {
    name: "InvalidCacheSecurityGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidKMSKeyFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidKMSKeyFault(
    body.Error,
    context
  );
  const contents: InvalidKMSKeyFault = {
    name: "InvalidKMSKeyFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidReplicationGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplicationGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidReplicationGroupStateFault(
    body.Error,
    context
  );
  const contents: InvalidReplicationGroupStateFault = {
    name: "InvalidReplicationGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSnapshotStateFault(
    body.Error,
    context
  );
  const contents: InvalidSnapshotStateFault = {
    name: "InvalidSnapshotStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnet(
    body.Error,
    context
  );
  const contents: InvalidSubnet = {
    name: "InvalidSubnet",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidVPCNetworkStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidVPCNetworkStateFault(
    body.Error,
    context
  );
  const contents: InvalidVPCNetworkStateFault = {
    name: "InvalidVPCNetworkStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryNoOperationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNoOperationFault(
    body.Error,
    context
  );
  const contents: NoOperationFault = {
    name: "NoOperationFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryNodeGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: NodeGroupNotFoundFault = {
    name: "NodeGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeGroupsPerReplicationGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault(
    body.Error,
    context
  );
  const contents: NodeGroupsPerReplicationGroupQuotaExceededFault = {
    name: "NodeGroupsPerReplicationGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryNodeQuotaForClusterExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeQuotaForClusterExceededFault(
    body.Error,
    context
  );
  const contents: NodeQuotaForClusterExceededFault = {
    name: "NodeQuotaForClusterExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNodeQuotaForCustomerExceededFault(
    body.Error,
    context
  );
  const contents: NodeQuotaForCustomerExceededFault = {
    name: "NodeQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: ReplicationGroupAlreadyExistsFault = {
    name: "ReplicationGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupAlreadyUnderMigrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault(
    body.Error,
    context
  );
  const contents: ReplicationGroupAlreadyUnderMigrationFault = {
    name: "ReplicationGroupAlreadyUnderMigrationFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReplicationGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: ReplicationGroupNotFoundFault = {
    name: "ReplicationGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationGroupNotUnderMigrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReplicationGroupNotUnderMigrationFault(
    body.Error,
    context
  );
  const contents: ReplicationGroupNotUnderMigrationFault = {
    name: "ReplicationGroupNotUnderMigrationFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodeAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: ReservedCacheNodeAlreadyExistsFault = {
    name: "ReservedCacheNodeAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReservedCacheNodeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodeNotFoundFault(
    body.Error,
    context
  );
  const contents: ReservedCacheNodeNotFoundFault = {
    name: "ReservedCacheNodeNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodeQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodeQuotaExceededFault(
    body.Error,
    context
  );
  const contents: ReservedCacheNodeQuotaExceededFault = {
    name: "ReservedCacheNodeQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedCacheNodesOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedCacheNodesOfferingNotFoundFault(
    body.Error,
    context
  );
  const contents: ReservedCacheNodesOfferingNotFoundFault = {
    name: "ReservedCacheNodesOfferingNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceLinkedRoleNotFoundFault(
    body.Error,
    context
  );
  const contents: ServiceLinkedRoleNotFoundFault = {
    name: "ServiceLinkedRoleNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryServiceUpdateNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUpdateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceUpdateNotFoundFault(
    body.Error,
    context
  );
  const contents: ServiceUpdateNotFoundFault = {
    name: "ServiceUpdateNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: SnapshotAlreadyExistsFault = {
    name: "SnapshotAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySnapshotFeatureNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotFeatureNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotFeatureNotSupportedFault(
    body.Error,
    context
  );
  const contents: SnapshotFeatureNotSupportedFault = {
    name: "SnapshotFeatureNotSupportedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotNotFoundFault(
    body.Error,
    context
  );
  const contents: SnapshotNotFoundFault = {
    name: "SnapshotNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySnapshotQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotQuotaExceededFault(
    body.Error,
    context
  );
  const contents: SnapshotQuotaExceededFault = {
    name: "SnapshotQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySubnetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetInUse(
    body.Error,
    context
  );
  const contents: SubnetInUse = {
    name: "SubnetInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTagNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagNotFoundFault(
    body.Error,
    context
  );
  const contents: TagNotFoundFault = {
    name: "TagNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTagQuotaPerResourceExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagQuotaPerResourceExceeded(
    body.Error,
    context
  );
  const contents: TagQuotaPerResourceExceeded = {
    name: "TagQuotaPerResourceExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTestFailoverNotAvailableFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TestFailoverNotAvailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTestFailoverNotAvailableFault(
    body.Error,
    context
  );
  const contents: TestFailoverNotAvailableFault = {
    name: "TestFailoverNotAvailableFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryAddTagsToResourceMessage = (
  input: AddTagsToResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceName !== undefined) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage = (
  input: AuthorizeCacheSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSecurityGroupName !== undefined) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.EC2SecurityGroupName !== undefined) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupOwnerId !== undefined) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
  }
  return entries;
};

const serializeAws_queryAvailabilityZonesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.CacheClusterIds !== undefined) {
    const memberEntries = serializeAws_queryCacheClusterIdList(
      input.CacheClusterIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicationGroupIds !== undefined) {
    const memberEntries = serializeAws_queryReplicationGroupIdList(
      input.ReplicationGroupIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ServiceUpdateName !== undefined) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  return entries;
};

const serializeAws_queryBatchStopUpdateActionMessage = (
  input: BatchStopUpdateActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterIds !== undefined) {
    const memberEntries = serializeAws_queryCacheClusterIdList(
      input.CacheClusterIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicationGroupIds !== undefined) {
    const memberEntries = serializeAws_queryReplicationGroupIdList(
      input.ReplicationGroupIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ServiceUpdateName !== undefined) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  return entries;
};

const serializeAws_queryCacheClusterIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryCacheNodeIdsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`CacheNodeId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryCacheSecurityGroupNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`CacheSecurityGroupName.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryCompleteMigrationMessage = (
  input: CompleteMigrationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Force !== undefined) {
    entries["Force"] = input.Force;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

const serializeAws_queryConfigureShard = (
  input: ConfigureShard,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NewReplicaCount !== undefined) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.NodeGroupId !== undefined) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.PreferredAvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(
      input.PreferredAvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryCopySnapshotMessage = (
  input: CopySnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.KmsKeyId !== undefined) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.SourceSnapshotName !== undefined) {
    entries["SourceSnapshotName"] = input.SourceSnapshotName;
  }
  if (input.TargetBucket !== undefined) {
    entries["TargetBucket"] = input.TargetBucket;
  }
  if (input.TargetSnapshotName !== undefined) {
    entries["TargetSnapshotName"] = input.TargetSnapshotName;
  }
  return entries;
};

const serializeAws_queryCreateCacheClusterMessage = (
  input: CreateCacheClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AZMode !== undefined) {
    entries["AZMode"] = input.AZMode;
  }
  if (input.AuthToken !== undefined) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.AutoMinorVersionUpgrade !== undefined) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.CacheNodeType !== undefined) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.CacheSecurityGroupNames !== undefined) {
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(
      input.CacheSecurityGroupNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.CacheSubnetGroupName !== undefined) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.Engine !== undefined) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion !== undefined) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.NotificationTopicArn !== undefined) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.NumCacheNodes !== undefined) {
    entries["NumCacheNodes"] = input.NumCacheNodes;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.PreferredAvailabilityZone !== undefined) {
    entries["PreferredAvailabilityZone"] = input.PreferredAvailabilityZone;
  }
  if (input.PreferredAvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(
      input.PreferredAvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.SecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(
      input.SecurityGroupIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SnapshotArns !== undefined) {
    const memberEntries = serializeAws_querySnapshotArnsList(
      input.SnapshotArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SnapshotArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SnapshotName !== undefined) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  if (input.SnapshotRetentionLimit !== undefined) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow !== undefined) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryCreateCacheParameterGroupMessage = (
  input: CreateCacheParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupFamily !== undefined) {
    entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
  }
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  return entries;
};

const serializeAws_queryCreateCacheSecurityGroupMessage = (
  input: CreateCacheSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSecurityGroupName !== undefined) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  return entries;
};

const serializeAws_queryCreateCacheSubnetGroupMessage = (
  input: CreateCacheSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupDescription !== undefined) {
    entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
  }
  if (input.CacheSubnetGroupName !== undefined) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.SubnetIds !== undefined) {
    const memberEntries = serializeAws_querySubnetIdentifierList(
      input.SubnetIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryCreateReplicationGroupMessage = (
  input: CreateReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AtRestEncryptionEnabled !== undefined) {
    entries["AtRestEncryptionEnabled"] = input.AtRestEncryptionEnabled;
  }
  if (input.AuthToken !== undefined) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.AutoMinorVersionUpgrade !== undefined) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.AutomaticFailoverEnabled !== undefined) {
    entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
  }
  if (input.CacheNodeType !== undefined) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.CacheSecurityGroupNames !== undefined) {
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(
      input.CacheSecurityGroupNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.CacheSubnetGroupName !== undefined) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.Engine !== undefined) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion !== undefined) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.KmsKeyId !== undefined) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.NodeGroupConfiguration !== undefined) {
    const memberEntries = serializeAws_queryNodeGroupConfigurationList(
      input.NodeGroupConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `NodeGroupConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.NotificationTopicArn !== undefined) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.NumCacheClusters !== undefined) {
    entries["NumCacheClusters"] = input.NumCacheClusters;
  }
  if (input.NumNodeGroups !== undefined) {
    entries["NumNodeGroups"] = input.NumNodeGroups;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.PreferredCacheClusterAZs !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZonesList(
      input.PreferredCacheClusterAZs,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PreferredCacheClusterAZs.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.PrimaryClusterId !== undefined) {
    entries["PrimaryClusterId"] = input.PrimaryClusterId;
  }
  if (input.ReplicasPerNodeGroup !== undefined) {
    entries["ReplicasPerNodeGroup"] = input.ReplicasPerNodeGroup;
  }
  if (input.ReplicationGroupDescription !== undefined) {
    entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.SecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(
      input.SecurityGroupIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SnapshotArns !== undefined) {
    const memberEntries = serializeAws_querySnapshotArnsList(
      input.SnapshotArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SnapshotArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SnapshotName !== undefined) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  if (input.SnapshotRetentionLimit !== undefined) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow !== undefined) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TransitEncryptionEnabled !== undefined) {
    entries["TransitEncryptionEnabled"] = input.TransitEncryptionEnabled;
  }
  return entries;
};

const serializeAws_queryCreateSnapshotMessage = (
  input: CreateSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.KmsKeyId !== undefined) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.SnapshotName !== undefined) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  return entries;
};

const serializeAws_queryCustomerNodeEndpoint = (
  input: CustomerNodeEndpoint,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Address !== undefined) {
    entries["Address"] = input.Address;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  return entries;
};

const serializeAws_queryCustomerNodeEndpointList = (
  input: Array<CustomerNodeEndpoint>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryCustomerNodeEndpoint(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDecreaseReplicaCountMessage = (
  input: DecreaseReplicaCountMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplyImmediately !== undefined) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.NewReplicaCount !== undefined) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.ReplicaConfiguration !== undefined) {
    const memberEntries = serializeAws_queryReplicaConfigurationList(
      input.ReplicaConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReplicaConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicasToRemove !== undefined) {
    const memberEntries = serializeAws_queryRemoveReplicasList(
      input.ReplicasToRemove,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReplicasToRemove.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

const serializeAws_queryDeleteCacheClusterMessage = (
  input: DeleteCacheClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.FinalSnapshotIdentifier !== undefined) {
    entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteCacheParameterGroupMessage = (
  input: DeleteCacheParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteCacheSecurityGroupMessage = (
  input: DeleteCacheSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSecurityGroupName !== undefined) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteCacheSubnetGroupMessage = (
  input: DeleteCacheSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupName !== undefined) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteReplicationGroupMessage = (
  input: DeleteReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.FinalSnapshotIdentifier !== undefined) {
    entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.RetainPrimaryCluster !== undefined) {
    entries["RetainPrimaryCluster"] = input.RetainPrimaryCluster;
  }
  return entries;
};

const serializeAws_queryDeleteSnapshotMessage = (
  input: DeleteSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotName !== undefined) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  return entries;
};

const serializeAws_queryDescribeCacheClustersMessage = (
  input: DescribeCacheClustersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.ShowCacheClustersNotInReplicationGroups !== undefined) {
    entries["ShowCacheClustersNotInReplicationGroups"] =
      input.ShowCacheClustersNotInReplicationGroups;
  }
  if (input.ShowCacheNodeInfo !== undefined) {
    entries["ShowCacheNodeInfo"] = input.ShowCacheNodeInfo;
  }
  return entries;
};

const serializeAws_queryDescribeCacheEngineVersionsMessage = (
  input: DescribeCacheEngineVersionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupFamily !== undefined) {
    entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
  }
  if (input.DefaultOnly !== undefined) {
    entries["DefaultOnly"] = input.DefaultOnly;
  }
  if (input.Engine !== undefined) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion !== undefined) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeCacheParameterGroupsMessage = (
  input: DescribeCacheParameterGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeCacheParametersMessage = (
  input: DescribeCacheParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Source !== undefined) {
    entries["Source"] = input.Source;
  }
  return entries;
};

const serializeAws_queryDescribeCacheSecurityGroupsMessage = (
  input: DescribeCacheSecurityGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSecurityGroupName !== undefined) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeCacheSubnetGroupsMessage = (
  input: DescribeCacheSubnetGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupName !== undefined) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeEngineDefaultParametersMessage = (
  input: DescribeEngineDefaultParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupFamily !== undefined) {
    entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeEventsMessage = (
  input: DescribeEventsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Duration !== undefined) {
    entries["Duration"] = input.Duration;
  }
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString();
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.SourceIdentifier !== undefined) {
    entries["SourceIdentifier"] = input.SourceIdentifier;
  }
  if (input.SourceType !== undefined) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString();
  }
  return entries;
};

const serializeAws_queryDescribeReplicationGroupsMessage = (
  input: DescribeReplicationGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

const serializeAws_queryDescribeReservedCacheNodesMessage = (
  input: DescribeReservedCacheNodesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheNodeType !== undefined) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.Duration !== undefined) {
    entries["Duration"] = input.Duration;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.OfferingType !== undefined) {
    entries["OfferingType"] = input.OfferingType;
  }
  if (input.ProductDescription !== undefined) {
    entries["ProductDescription"] = input.ProductDescription;
  }
  if (input.ReservedCacheNodeId !== undefined) {
    entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
  }
  if (input.ReservedCacheNodesOfferingId !== undefined) {
    entries["ReservedCacheNodesOfferingId"] =
      input.ReservedCacheNodesOfferingId;
  }
  return entries;
};

const serializeAws_queryDescribeReservedCacheNodesOfferingsMessage = (
  input: DescribeReservedCacheNodesOfferingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheNodeType !== undefined) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.Duration !== undefined) {
    entries["Duration"] = input.Duration;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.OfferingType !== undefined) {
    entries["OfferingType"] = input.OfferingType;
  }
  if (input.ProductDescription !== undefined) {
    entries["ProductDescription"] = input.ProductDescription;
  }
  if (input.ReservedCacheNodesOfferingId !== undefined) {
    entries["ReservedCacheNodesOfferingId"] =
      input.ReservedCacheNodesOfferingId;
  }
  return entries;
};

const serializeAws_queryDescribeServiceUpdatesMessage = (
  input: DescribeServiceUpdatesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.ServiceUpdateName !== undefined) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  if (input.ServiceUpdateStatus !== undefined) {
    const memberEntries = serializeAws_queryServiceUpdateStatusList(
      input.ServiceUpdateStatus,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ServiceUpdateStatus.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeSnapshotsMessage = (
  input: DescribeSnapshotsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.ShowNodeGroupConfig !== undefined) {
    entries["ShowNodeGroupConfig"] = input.ShowNodeGroupConfig;
  }
  if (input.SnapshotName !== undefined) {
    entries["SnapshotName"] = input.SnapshotName;
  }
  if (input.SnapshotSource !== undefined) {
    entries["SnapshotSource"] = input.SnapshotSource;
  }
  return entries;
};

const serializeAws_queryDescribeUpdateActionsMessage = (
  input: DescribeUpdateActionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterIds !== undefined) {
    const memberEntries = serializeAws_queryCacheClusterIdList(
      input.CacheClusterIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheClusterIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Engine !== undefined) {
    entries["Engine"] = input.Engine;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.ReplicationGroupIds !== undefined) {
    const memberEntries = serializeAws_queryReplicationGroupIdList(
      input.ReplicationGroupIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReplicationGroupIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ServiceUpdateName !== undefined) {
    entries["ServiceUpdateName"] = input.ServiceUpdateName;
  }
  if (input.ServiceUpdateStatus !== undefined) {
    const memberEntries = serializeAws_queryServiceUpdateStatusList(
      input.ServiceUpdateStatus,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ServiceUpdateStatus.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ServiceUpdateTimeRange !== undefined) {
    const memberEntries = serializeAws_queryTimeRangeFilter(
      input.ServiceUpdateTimeRange,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ServiceUpdateTimeRange.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ShowNodeLevelUpdateStatus !== undefined) {
    entries["ShowNodeLevelUpdateStatus"] = input.ShowNodeLevelUpdateStatus;
  }
  if (input.UpdateActionStatus !== undefined) {
    const memberEntries = serializeAws_queryUpdateActionStatusList(
      input.UpdateActionStatus,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `UpdateActionStatus.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryIncreaseReplicaCountMessage = (
  input: IncreaseReplicaCountMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplyImmediately !== undefined) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.NewReplicaCount !== undefined) {
    entries["NewReplicaCount"] = input.NewReplicaCount;
  }
  if (input.ReplicaConfiguration !== undefined) {
    const memberEntries = serializeAws_queryReplicaConfigurationList(
      input.ReplicaConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReplicaConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

const serializeAws_queryKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryListAllowedNodeTypeModificationsMessage = (
  input: ListAllowedNodeTypeModificationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

const serializeAws_queryListTagsForResourceMessage = (
  input: ListTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceName !== undefined) {
    entries["ResourceName"] = input.ResourceName;
  }
  return entries;
};

const serializeAws_queryModifyCacheClusterMessage = (
  input: ModifyCacheClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AZMode !== undefined) {
    entries["AZMode"] = input.AZMode;
  }
  if (input.ApplyImmediately !== undefined) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.AuthToken !== undefined) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.AuthTokenUpdateStrategy !== undefined) {
    entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
  }
  if (input.AutoMinorVersionUpgrade !== undefined) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.CacheNodeIdsToRemove !== undefined) {
    const memberEntries = serializeAws_queryCacheNodeIdsList(
      input.CacheNodeIdsToRemove,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheNodeIdsToRemove.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.CacheNodeType !== undefined) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.CacheSecurityGroupNames !== undefined) {
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(
      input.CacheSecurityGroupNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.EngineVersion !== undefined) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.NewAvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(
      input.NewAvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `NewAvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.NotificationTopicArn !== undefined) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.NotificationTopicStatus !== undefined) {
    entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
  }
  if (input.NumCacheNodes !== undefined) {
    entries["NumCacheNodes"] = input.NumCacheNodes;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.SecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(
      input.SecurityGroupIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SnapshotRetentionLimit !== undefined) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow !== undefined) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  return entries;
};

const serializeAws_queryModifyCacheParameterGroupMessage = (
  input: ModifyCacheParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.ParameterNameValues !== undefined) {
    const memberEntries = serializeAws_queryParameterNameValueList(
      input.ParameterNameValues,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ParameterNameValues.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryModifyCacheSubnetGroupMessage = (
  input: ModifyCacheSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheSubnetGroupDescription !== undefined) {
    entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
  }
  if (input.CacheSubnetGroupName !== undefined) {
    entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
  }
  if (input.SubnetIds !== undefined) {
    const memberEntries = serializeAws_querySubnetIdentifierList(
      input.SubnetIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryModifyReplicationGroupMessage = (
  input: ModifyReplicationGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplyImmediately !== undefined) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.AuthToken !== undefined) {
    entries["AuthToken"] = input.AuthToken;
  }
  if (input.AuthTokenUpdateStrategy !== undefined) {
    entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
  }
  if (input.AutoMinorVersionUpgrade !== undefined) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.AutomaticFailoverEnabled !== undefined) {
    entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
  }
  if (input.CacheNodeType !== undefined) {
    entries["CacheNodeType"] = input.CacheNodeType;
  }
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.CacheSecurityGroupNames !== undefined) {
    const memberEntries = serializeAws_queryCacheSecurityGroupNameList(
      input.CacheSecurityGroupNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheSecurityGroupNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.EngineVersion !== undefined) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.NodeGroupId !== undefined) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.NotificationTopicArn !== undefined) {
    entries["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.NotificationTopicStatus !== undefined) {
    entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.PrimaryClusterId !== undefined) {
    entries["PrimaryClusterId"] = input.PrimaryClusterId;
  }
  if (input.ReplicationGroupDescription !== undefined) {
    entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.SecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_querySecurityGroupIdsList(
      input.SecurityGroupIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroupIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SnapshotRetentionLimit !== undefined) {
    entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
  }
  if (input.SnapshotWindow !== undefined) {
    entries["SnapshotWindow"] = input.SnapshotWindow;
  }
  if (input.SnapshottingClusterId !== undefined) {
    entries["SnapshottingClusterId"] = input.SnapshottingClusterId;
  }
  return entries;
};

const serializeAws_queryModifyReplicationGroupShardConfigurationMessage = (
  input: ModifyReplicationGroupShardConfigurationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplyImmediately !== undefined) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.NodeGroupCount !== undefined) {
    entries["NodeGroupCount"] = input.NodeGroupCount;
  }
  if (input.NodeGroupsToRemove !== undefined) {
    const memberEntries = serializeAws_queryNodeGroupsToRemoveList(
      input.NodeGroupsToRemove,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `NodeGroupsToRemove.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.NodeGroupsToRetain !== undefined) {
    const memberEntries = serializeAws_queryNodeGroupsToRetainList(
      input.NodeGroupsToRetain,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `NodeGroupsToRetain.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  if (input.ReshardingConfiguration !== undefined) {
    const memberEntries = serializeAws_queryReshardingConfigurationList(
      input.ReshardingConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReshardingConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryNodeGroupConfiguration = (
  input: NodeGroupConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NodeGroupId !== undefined) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.PrimaryAvailabilityZone !== undefined) {
    entries["PrimaryAvailabilityZone"] = input.PrimaryAvailabilityZone;
  }
  if (input.ReplicaAvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZonesList(
      input.ReplicaAvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ReplicaAvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicaCount !== undefined) {
    entries["ReplicaCount"] = input.ReplicaCount;
  }
  if (input.Slots !== undefined) {
    entries["Slots"] = input.Slots;
  }
  return entries;
};

const serializeAws_queryNodeGroupConfigurationList = (
  input: Array<NodeGroupConfiguration>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryNodeGroupConfiguration(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`NodeGroupConfiguration.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryNodeGroupsToRemoveList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`NodeGroupToRemove.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryNodeGroupsToRetainList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`NodeGroupToRetain.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryParameterNameValue = (
  input: ParameterNameValue,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterName !== undefined) {
    entries["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue !== undefined) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  return entries;
};

const serializeAws_queryParameterNameValueList = (
  input: Array<ParameterNameValue>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryParameterNameValue(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`ParameterNameValue.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPreferredAvailabilityZoneList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`PreferredAvailabilityZone.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPurchaseReservedCacheNodesOfferingMessage = (
  input: PurchaseReservedCacheNodesOfferingMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheNodeCount !== undefined) {
    entries["CacheNodeCount"] = input.CacheNodeCount;
  }
  if (input.ReservedCacheNodeId !== undefined) {
    entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
  }
  if (input.ReservedCacheNodesOfferingId !== undefined) {
    entries["ReservedCacheNodesOfferingId"] =
      input.ReservedCacheNodesOfferingId;
  }
  return entries;
};

const serializeAws_queryRebootCacheClusterMessage = (
  input: RebootCacheClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CacheClusterId !== undefined) {
    entries["CacheClusterId"] = input.CacheClusterId;
  }
  if (input.CacheNodeIdsToReboot !== undefined) {
    const memberEntries = serializeAws_queryCacheNodeIdsList(
      input.CacheNodeIdsToReboot,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CacheNodeIdsToReboot.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryRemoveReplicasList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.ResourceName !== undefined) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.TagKeys !== undefined) {
    const memberEntries = serializeAws_queryKeyList(input.TagKeys, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `TagKeys.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryReplicaConfigurationList = (
  input: Array<ConfigureShard>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryConfigureShard(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`ConfigureShard.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryReplicationGroupIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.CacheParameterGroupName !== undefined) {
    entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
  }
  if (input.ParameterNameValues !== undefined) {
    const memberEntries = serializeAws_queryParameterNameValueList(
      input.ParameterNameValues,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ParameterNameValues.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ResetAllParameters !== undefined) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  return entries;
};

const serializeAws_queryReshardingConfiguration = (
  input: ReshardingConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NodeGroupId !== undefined) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.PreferredAvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZonesList(
      input.PreferredAvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PreferredAvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryReshardingConfigurationList = (
  input: Array<ReshardingConfiguration>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryReshardingConfiguration(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`ReshardingConfiguration.${counter}.${key}`] = memberEntries[key];
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
  if (input.CacheSecurityGroupName !== undefined) {
    entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
  }
  if (input.EC2SecurityGroupName !== undefined) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupOwnerId !== undefined) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
  }
  return entries;
};

const serializeAws_querySecurityGroupIdsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`SecurityGroupId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryServiceUpdateStatusList = (
  input: Array<ServiceUpdateStatus | string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySnapshotArnsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`SnapshotArn.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStartMigrationMessage = (
  input: StartMigrationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CustomerNodeEndpointList !== undefined) {
    const memberEntries = serializeAws_queryCustomerNodeEndpointList(
      input.CustomerNodeEndpointList,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CustomerNodeEndpointList.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

const serializeAws_querySubnetIdentifierList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`SubnetIdentifier.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`Tag.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTestFailoverMessage = (
  input: TestFailoverMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NodeGroupId !== undefined) {
    entries["NodeGroupId"] = input.NodeGroupId;
  }
  if (input.ReplicationGroupId !== undefined) {
    entries["ReplicationGroupId"] = input.ReplicationGroupId;
  }
  return entries;
};

const serializeAws_queryTimeRangeFilter = (
  input: TimeRangeFilter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString();
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString();
  }
  return entries;
};

const serializeAws_queryUpdateActionStatusList = (
  input: Array<UpdateActionStatus | string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const deserializeAws_queryInvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  let contents: any = {
    __type: "InvalidParameterCombinationException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryAPICallRateForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): APICallRateForCustomerExceededFault => {
  let contents: any = {
    __type: "APICallRateForCustomerExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryAuthorizationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): AuthorizationAlreadyExistsFault => {
  let contents: any = {
    __type: "AuthorizationAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryAuthorizationNotFoundFault = (
  output: any,
  context: __SerdeContext
): AuthorizationNotFoundFault => {
  let contents: any = {
    __type: "AuthorizationNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheClusterAlreadyExistsFault => {
  let contents: any = {
    __type: "CacheClusterAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheClusterNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheClusterNotFoundFault => {
  let contents: any = {
    __type: "CacheClusterNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "CacheParameterGroupAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupNotFoundFault => {
  let contents: any = {
    __type: "CacheParameterGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupQuotaExceededFault => {
  let contents: any = {
    __type: "CacheParameterGroupQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "CacheSecurityGroupAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupNotFoundFault => {
  let contents: any = {
    __type: "CacheSecurityGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupQuotaExceededFault => {
  let contents: any = {
    __type: "CacheSecurityGroupQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "CacheSubnetGroupAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupInUse = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupInUse => {
  let contents: any = {
    __type: "CacheSubnetGroupInUse",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupNotFoundFault => {
  let contents: any = {
    __type: "CacheSubnetGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupQuotaExceededFault => {
  let contents: any = {
    __type: "CacheSubnetGroupQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCacheSubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CacheSubnetQuotaExceededFault => {
  let contents: any = {
    __type: "CacheSubnetQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  let contents: any = {
    __type: "ClusterQuotaForCustomerExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInsufficientCacheClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientCacheClusterCapacityFault => {
  let contents: any = {
    __type: "InsufficientCacheClusterCapacityFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidARNFault = (
  output: any,
  context: __SerdeContext
): InvalidARNFault => {
  let contents: any = {
    __type: "InvalidARNFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidCacheClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheClusterStateFault => {
  let contents: any = {
    __type: "InvalidCacheClusterStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidCacheParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheParameterGroupStateFault => {
  let contents: any = {
    __type: "InvalidCacheParameterGroupStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidCacheSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCacheSecurityGroupStateFault => {
  let contents: any = {
    __type: "InvalidCacheSecurityGroupStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidKMSKeyFault = (
  output: any,
  context: __SerdeContext
): InvalidKMSKeyFault => {
  let contents: any = {
    __type: "InvalidKMSKeyFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidReplicationGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidReplicationGroupStateFault => {
  let contents: any = {
    __type: "InvalidReplicationGroupStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidSnapshotStateFault => {
  let contents: any = {
    __type: "InvalidSnapshotStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSubnet = (
  output: any,
  context: __SerdeContext
): InvalidSubnet => {
  let contents: any = {
    __type: "InvalidSubnet",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidVPCNetworkStateFault = (
  output: any,
  context: __SerdeContext
): InvalidVPCNetworkStateFault => {
  let contents: any = {
    __type: "InvalidVPCNetworkStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryNoOperationFault = (
  output: any,
  context: __SerdeContext
): NoOperationFault => {
  let contents: any = {
    __type: "NoOperationFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryNodeGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): NodeGroupNotFoundFault => {
  let contents: any = {
    __type: "NodeGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): NodeGroupsPerReplicationGroupQuotaExceededFault => {
  let contents: any = {
    __type: "NodeGroupsPerReplicationGroupQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryNodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  let contents: any = {
    __type: "NodeQuotaForClusterExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryNodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  let contents: any = {
    __type: "NodeQuotaForCustomerExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReplicationGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "ReplicationGroupAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupAlreadyUnderMigrationFault => {
  let contents: any = {
    __type: "ReplicationGroupAlreadyUnderMigrationFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReplicationGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupNotFoundFault => {
  let contents: any = {
    __type: "ReplicationGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReplicationGroupNotUnderMigrationFault = (
  output: any,
  context: __SerdeContext
): ReplicationGroupNotUnderMigrationFault => {
  let contents: any = {
    __type: "ReplicationGroupNotUnderMigrationFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeAlreadyExistsFault => {
  let contents: any = {
    __type: "ReservedCacheNodeAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeNotFoundFault => {
  let contents: any = {
    __type: "ReservedCacheNodeNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeQuotaExceededFault => {
  let contents: any = {
    __type: "ReservedCacheNodeQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodesOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOfferingNotFoundFault => {
  let contents: any = {
    __type: "ReservedCacheNodesOfferingNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryServiceLinkedRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleNotFoundFault => {
  let contents: any = {
    __type: "ServiceLinkedRoleNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryServiceUpdateNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceUpdateNotFoundFault => {
  let contents: any = {
    __type: "ServiceUpdateNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SnapshotAlreadyExistsFault => {
  let contents: any = {
    __type: "SnapshotAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySnapshotFeatureNotSupportedFault = (
  output: any,
  context: __SerdeContext
): SnapshotFeatureNotSupportedFault => {
  let contents: any = {
    __type: "SnapshotFeatureNotSupportedFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySnapshotNotFoundFault = (
  output: any,
  context: __SerdeContext
): SnapshotNotFoundFault => {
  let contents: any = {
    __type: "SnapshotNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SnapshotQuotaExceededFault => {
  let contents: any = {
    __type: "SnapshotQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySubnetInUse = (
  output: any,
  context: __SerdeContext
): SubnetInUse => {
  let contents: any = {
    __type: "SubnetInUse",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTagNotFoundFault = (
  output: any,
  context: __SerdeContext
): TagNotFoundFault => {
  let contents: any = {
    __type: "TagNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTagQuotaPerResourceExceeded = (
  output: any,
  context: __SerdeContext
): TagQuotaPerResourceExceeded => {
  let contents: any = {
    __type: "TagQuotaPerResourceExceeded",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTestFailoverNotAvailableFault = (
  output: any,
  context: __SerdeContext
): TestFailoverNotAvailableFault => {
  let contents: any = {
    __type: "TestFailoverNotAvailableFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryAllowedNodeTypeModificationsMessage = (
  output: any,
  context: __SerdeContext
): AllowedNodeTypeModificationsMessage => {
  let contents: any = {
    __type: "AllowedNodeTypeModificationsMessage",
    ScaleDownModifications: undefined,
    ScaleUpModifications: undefined
  };
  if (output.ScaleDownModifications === "") {
    contents.ScaleDownModifications = [];
  }
  if (
    output["ScaleDownModifications"] !== undefined &&
    output["ScaleDownModifications"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ScaleDownModifications"]["member"] instanceof Array
        ? output["ScaleDownModifications"]["member"]
        : [output["ScaleDownModifications"]["member"]];
    contents.ScaleDownModifications = deserializeAws_queryNodeTypeList(
      wrappedItem,
      context
    );
  }
  if (output.ScaleUpModifications === "") {
    contents.ScaleUpModifications = [];
  }
  if (
    output["ScaleUpModifications"] !== undefined &&
    output["ScaleUpModifications"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ScaleUpModifications"]["member"] instanceof Array
        ? output["ScaleUpModifications"]["member"]
        : [output["ScaleUpModifications"]["member"]];
    contents.ScaleUpModifications = deserializeAws_queryNodeTypeList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): AuthorizeCacheSecurityGroupIngressResult => {
  let contents: any = {
    __type: "AuthorizeCacheSecurityGroupIngressResult",
    CacheSecurityGroup: undefined
  };
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(
      output["CacheSecurityGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryAvailabilityZone = (
  output: any,
  context: __SerdeContext
): AvailabilityZone => {
  let contents: any = {
    __type: "AvailabilityZone",
    Name: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_queryAvailabilityZonesList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCacheCluster = (
  output: any,
  context: __SerdeContext
): CacheCluster => {
  let contents: any = {
    __type: "CacheCluster",
    AtRestEncryptionEnabled: undefined,
    AuthTokenEnabled: undefined,
    AuthTokenLastModifiedDate: undefined,
    AutoMinorVersionUpgrade: undefined,
    CacheClusterCreateTime: undefined,
    CacheClusterId: undefined,
    CacheClusterStatus: undefined,
    CacheNodeType: undefined,
    CacheNodes: undefined,
    CacheParameterGroup: undefined,
    CacheSecurityGroups: undefined,
    CacheSubnetGroupName: undefined,
    ClientDownloadLandingPage: undefined,
    ConfigurationEndpoint: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    NotificationConfiguration: undefined,
    NumCacheNodes: undefined,
    PendingModifiedValues: undefined,
    PreferredAvailabilityZone: undefined,
    PreferredMaintenanceWindow: undefined,
    ReplicationGroupId: undefined,
    SecurityGroups: undefined,
    SnapshotRetentionLimit: undefined,
    SnapshotWindow: undefined,
    TransitEncryptionEnabled: undefined
  };
  if (output["AtRestEncryptionEnabled"] !== undefined) {
    contents.AtRestEncryptionEnabled =
      output["AtRestEncryptionEnabled"] == "true";
  }
  if (output["AuthTokenEnabled"] !== undefined) {
    contents.AuthTokenEnabled = output["AuthTokenEnabled"] == "true";
  }
  if (output["AuthTokenLastModifiedDate"] !== undefined) {
    contents.AuthTokenLastModifiedDate = new Date(
      output["AuthTokenLastModifiedDate"]
    );
  }
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade =
      output["AutoMinorVersionUpgrade"] == "true";
  }
  if (output["CacheClusterCreateTime"] !== undefined) {
    contents.CacheClusterCreateTime = new Date(
      output["CacheClusterCreateTime"]
    );
  }
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output["CacheClusterStatus"] !== undefined) {
    contents.CacheClusterStatus = output["CacheClusterStatus"];
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = output["CacheNodeType"];
  }
  if (output.CacheNodes === "") {
    contents.CacheNodes = [];
  }
  if (
    output["CacheNodes"] !== undefined &&
    output["CacheNodes"]["CacheNode"] !== undefined
  ) {
    const wrappedItem =
      output["CacheNodes"]["CacheNode"] instanceof Array
        ? output["CacheNodes"]["CacheNode"]
        : [output["CacheNodes"]["CacheNode"]];
    contents.CacheNodes = deserializeAws_queryCacheNodeList(
      wrappedItem,
      context
    );
  }
  if (output["CacheParameterGroup"] !== undefined) {
    contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroupStatus(
      output["CacheParameterGroup"],
      context
    );
  }
  if (output.CacheSecurityGroups === "") {
    contents.CacheSecurityGroups = [];
  }
  if (
    output["CacheSecurityGroups"] !== undefined &&
    output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined
  ) {
    const wrappedItem =
      output["CacheSecurityGroups"]["CacheSecurityGroup"] instanceof Array
        ? output["CacheSecurityGroups"]["CacheSecurityGroup"]
        : [output["CacheSecurityGroups"]["CacheSecurityGroup"]];
    contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroupMembershipList(
      wrappedItem,
      context
    );
  }
  if (output["CacheSubnetGroupName"] !== undefined) {
    contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
  }
  if (output["ClientDownloadLandingPage"] !== undefined) {
    contents.ClientDownloadLandingPage = output["ClientDownloadLandingPage"];
  }
  if (output["ConfigurationEndpoint"] !== undefined) {
    contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(
      output["ConfigurationEndpoint"],
      context
    );
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["NotificationConfiguration"] !== undefined) {
    contents.NotificationConfiguration = deserializeAws_queryNotificationConfiguration(
      output["NotificationConfiguration"],
      context
    );
  }
  if (output["NumCacheNodes"] !== undefined) {
    contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(
      output["PendingModifiedValues"],
      context
    );
  }
  if (output["PreferredAvailabilityZone"] !== undefined) {
    contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = output["ReplicationGroupId"];
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  }
  if (
    output["SecurityGroups"] !== undefined &&
    output["SecurityGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SecurityGroups"]["member"] instanceof Array
        ? output["SecurityGroups"]["member"]
        : [output["SecurityGroups"]["member"]];
    contents.SecurityGroups = deserializeAws_querySecurityGroupMembershipList(
      wrappedItem,
      context
    );
  }
  if (output["SnapshotRetentionLimit"] !== undefined) {
    contents.SnapshotRetentionLimit = parseInt(
      output["SnapshotRetentionLimit"]
    );
  }
  if (output["SnapshotWindow"] !== undefined) {
    contents.SnapshotWindow = output["SnapshotWindow"];
  }
  if (output["TransitEncryptionEnabled"] !== undefined) {
    contents.TransitEncryptionEnabled =
      output["TransitEncryptionEnabled"] == "true";
  }
  return contents;
};

const deserializeAws_queryCacheClusterList = (
  output: any,
  context: __SerdeContext
): Array<CacheCluster> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheCluster(entry, context)
  );
};

const deserializeAws_queryCacheClusterMessage = (
  output: any,
  context: __SerdeContext
): CacheClusterMessage => {
  let contents: any = {
    __type: "CacheClusterMessage",
    CacheClusters: undefined,
    Marker: undefined
  };
  if (output.CacheClusters === "") {
    contents.CacheClusters = [];
  }
  if (
    output["CacheClusters"] !== undefined &&
    output["CacheClusters"]["CacheCluster"] !== undefined
  ) {
    const wrappedItem =
      output["CacheClusters"]["CacheCluster"] instanceof Array
        ? output["CacheClusters"]["CacheCluster"]
        : [output["CacheClusters"]["CacheCluster"]];
    contents.CacheClusters = deserializeAws_queryCacheClusterList(
      wrappedItem,
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryCacheEngineVersion = (
  output: any,
  context: __SerdeContext
): CacheEngineVersion => {
  let contents: any = {
    __type: "CacheEngineVersion",
    CacheEngineDescription: undefined,
    CacheEngineVersionDescription: undefined,
    CacheParameterGroupFamily: undefined,
    Engine: undefined,
    EngineVersion: undefined
  };
  if (output["CacheEngineDescription"] !== undefined) {
    contents.CacheEngineDescription = output["CacheEngineDescription"];
  }
  if (output["CacheEngineVersionDescription"] !== undefined) {
    contents.CacheEngineVersionDescription =
      output["CacheEngineVersionDescription"];
  }
  if (output["CacheParameterGroupFamily"] !== undefined) {
    contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  return contents;
};

const deserializeAws_queryCacheEngineVersionList = (
  output: any,
  context: __SerdeContext
): Array<CacheEngineVersion> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheEngineVersion(entry, context)
  );
};

const deserializeAws_queryCacheEngineVersionMessage = (
  output: any,
  context: __SerdeContext
): CacheEngineVersionMessage => {
  let contents: any = {
    __type: "CacheEngineVersionMessage",
    CacheEngineVersions: undefined,
    Marker: undefined
  };
  if (output.CacheEngineVersions === "") {
    contents.CacheEngineVersions = [];
  }
  if (
    output["CacheEngineVersions"] !== undefined &&
    output["CacheEngineVersions"]["CacheEngineVersion"] !== undefined
  ) {
    const wrappedItem =
      output["CacheEngineVersions"]["CacheEngineVersion"] instanceof Array
        ? output["CacheEngineVersions"]["CacheEngineVersion"]
        : [output["CacheEngineVersions"]["CacheEngineVersion"]];
    contents.CacheEngineVersions = deserializeAws_queryCacheEngineVersionList(
      wrappedItem,
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryCacheNode = (
  output: any,
  context: __SerdeContext
): CacheNode => {
  let contents: any = {
    __type: "CacheNode",
    CacheNodeCreateTime: undefined,
    CacheNodeId: undefined,
    CacheNodeStatus: undefined,
    CustomerAvailabilityZone: undefined,
    Endpoint: undefined,
    ParameterGroupStatus: undefined,
    SourceCacheNodeId: undefined
  };
  if (output["CacheNodeCreateTime"] !== undefined) {
    contents.CacheNodeCreateTime = new Date(output["CacheNodeCreateTime"]);
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = output["CacheNodeId"];
  }
  if (output["CacheNodeStatus"] !== undefined) {
    contents.CacheNodeStatus = output["CacheNodeStatus"];
  }
  if (output["CustomerAvailabilityZone"] !== undefined) {
    contents.CustomerAvailabilityZone = output["CustomerAvailabilityZone"];
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = deserializeAws_queryEndpoint(
      output["Endpoint"],
      context
    );
  }
  if (output["ParameterGroupStatus"] !== undefined) {
    contents.ParameterGroupStatus = output["ParameterGroupStatus"];
  }
  if (output["SourceCacheNodeId"] !== undefined) {
    contents.SourceCacheNodeId = output["SourceCacheNodeId"];
  }
  return contents;
};

const deserializeAws_queryCacheNodeIdsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCacheNodeList = (
  output: any,
  context: __SerdeContext
): Array<CacheNode> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheNode(entry, context)
  );
};

const deserializeAws_queryCacheNodeTypeSpecificParameter = (
  output: any,
  context: __SerdeContext
): CacheNodeTypeSpecificParameter => {
  let contents: any = {
    __type: "CacheNodeTypeSpecificParameter",
    AllowedValues: undefined,
    CacheNodeTypeSpecificValues: undefined,
    ChangeType: undefined,
    DataType: undefined,
    Description: undefined,
    IsModifiable: undefined,
    MinimumEngineVersion: undefined,
    ParameterName: undefined,
    Source: undefined
  };
  if (output["AllowedValues"] !== undefined) {
    contents.AllowedValues = output["AllowedValues"];
  }
  if (output.CacheNodeTypeSpecificValues === "") {
    contents.CacheNodeTypeSpecificValues = [];
  }
  if (
    output["CacheNodeTypeSpecificValues"] !== undefined &&
    output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"] !==
      undefined
  ) {
    const wrappedItem =
      output["CacheNodeTypeSpecificValues"][
        "CacheNodeTypeSpecificValue"
      ] instanceof Array
        ? output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]
        : [output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]];
    contents.CacheNodeTypeSpecificValues = deserializeAws_queryCacheNodeTypeSpecificValueList(
      wrappedItem,
      context
    );
  }
  if (output["ChangeType"] !== undefined) {
    contents.ChangeType = output["ChangeType"];
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = output["DataType"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["IsModifiable"] !== undefined) {
    contents.IsModifiable = output["IsModifiable"] == "true";
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = output["MinimumEngineVersion"];
  }
  if (output["ParameterName"] !== undefined) {
    contents.ParameterName = output["ParameterName"];
  }
  if (output["Source"] !== undefined) {
    contents.Source = output["Source"];
  }
  return contents;
};

const deserializeAws_queryCacheNodeTypeSpecificParametersList = (
  output: any,
  context: __SerdeContext
): Array<CacheNodeTypeSpecificParameter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheNodeTypeSpecificParameter(entry, context)
  );
};

const deserializeAws_queryCacheNodeTypeSpecificValue = (
  output: any,
  context: __SerdeContext
): CacheNodeTypeSpecificValue => {
  let contents: any = {
    __type: "CacheNodeTypeSpecificValue",
    CacheNodeType: undefined,
    Value: undefined
  };
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = output["CacheNodeType"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryCacheNodeTypeSpecificValueList = (
  output: any,
  context: __SerdeContext
): Array<CacheNodeTypeSpecificValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheNodeTypeSpecificValue(entry, context)
  );
};

const deserializeAws_queryCacheNodeUpdateStatus = (
  output: any,
  context: __SerdeContext
): CacheNodeUpdateStatus => {
  let contents: any = {
    __type: "CacheNodeUpdateStatus",
    CacheNodeId: undefined,
    NodeDeletionDate: undefined,
    NodeUpdateEndDate: undefined,
    NodeUpdateInitiatedBy: undefined,
    NodeUpdateInitiatedDate: undefined,
    NodeUpdateStartDate: undefined,
    NodeUpdateStatus: undefined,
    NodeUpdateStatusModifiedDate: undefined
  };
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = output["CacheNodeId"];
  }
  if (output["NodeDeletionDate"] !== undefined) {
    contents.NodeDeletionDate = new Date(output["NodeDeletionDate"]);
  }
  if (output["NodeUpdateEndDate"] !== undefined) {
    contents.NodeUpdateEndDate = new Date(output["NodeUpdateEndDate"]);
  }
  if (output["NodeUpdateInitiatedBy"] !== undefined) {
    contents.NodeUpdateInitiatedBy = output["NodeUpdateInitiatedBy"];
  }
  if (output["NodeUpdateInitiatedDate"] !== undefined) {
    contents.NodeUpdateInitiatedDate = new Date(
      output["NodeUpdateInitiatedDate"]
    );
  }
  if (output["NodeUpdateStartDate"] !== undefined) {
    contents.NodeUpdateStartDate = new Date(output["NodeUpdateStartDate"]);
  }
  if (output["NodeUpdateStatus"] !== undefined) {
    contents.NodeUpdateStatus = output["NodeUpdateStatus"];
  }
  if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
    contents.NodeUpdateStatusModifiedDate = new Date(
      output["NodeUpdateStatusModifiedDate"]
    );
  }
  return contents;
};

const deserializeAws_queryCacheNodeUpdateStatusList = (
  output: any,
  context: __SerdeContext
): Array<CacheNodeUpdateStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheNodeUpdateStatus(entry, context)
  );
};

const deserializeAws_queryCacheParameterGroup = (
  output: any,
  context: __SerdeContext
): CacheParameterGroup => {
  let contents: any = {
    __type: "CacheParameterGroup",
    CacheParameterGroupFamily: undefined,
    CacheParameterGroupName: undefined,
    Description: undefined
  };
  if (output["CacheParameterGroupFamily"] !== undefined) {
    contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
  }
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = output["CacheParameterGroupName"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupDetails = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupDetails => {
  let contents: any = {
    __type: "CacheParameterGroupDetails",
    CacheNodeTypeSpecificParameters: undefined,
    Marker: undefined,
    Parameters: undefined
  };
  if (output.CacheNodeTypeSpecificParameters === "") {
    contents.CacheNodeTypeSpecificParameters = [];
  }
  if (
    output["CacheNodeTypeSpecificParameters"] !== undefined &&
    output["CacheNodeTypeSpecificParameters"][
      "CacheNodeTypeSpecificParameter"
    ] !== undefined
  ) {
    const wrappedItem =
      output["CacheNodeTypeSpecificParameters"][
        "CacheNodeTypeSpecificParameter"
      ] instanceof Array
        ? output["CacheNodeTypeSpecificParameters"][
            "CacheNodeTypeSpecificParameter"
          ]
        : [
            output["CacheNodeTypeSpecificParameters"][
              "CacheNodeTypeSpecificParameter"
            ]
          ];
    contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(
      wrappedItem,
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (
    output["Parameters"] !== undefined &&
    output["Parameters"]["Parameter"] !== undefined
  ) {
    const wrappedItem =
      output["Parameters"]["Parameter"] instanceof Array
        ? output["Parameters"]["Parameter"]
        : [output["Parameters"]["Parameter"]];
    contents.Parameters = deserializeAws_queryParametersList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupList = (
  output: any,
  context: __SerdeContext
): Array<CacheParameterGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheParameterGroup(entry, context)
  );
};

const deserializeAws_queryCacheParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupNameMessage => {
  let contents: any = {
    __type: "CacheParameterGroupNameMessage",
    CacheParameterGroupName: undefined
  };
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = output["CacheParameterGroupName"];
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupStatus = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupStatus => {
  let contents: any = {
    __type: "CacheParameterGroupStatus",
    CacheNodeIdsToReboot: undefined,
    CacheParameterGroupName: undefined,
    ParameterApplyStatus: undefined
  };
  if (output.CacheNodeIdsToReboot === "") {
    contents.CacheNodeIdsToReboot = [];
  }
  if (
    output["CacheNodeIdsToReboot"] !== undefined &&
    output["CacheNodeIdsToReboot"]["CacheNodeId"] !== undefined
  ) {
    const wrappedItem =
      output["CacheNodeIdsToReboot"]["CacheNodeId"] instanceof Array
        ? output["CacheNodeIdsToReboot"]["CacheNodeId"]
        : [output["CacheNodeIdsToReboot"]["CacheNodeId"]];
    contents.CacheNodeIdsToReboot = deserializeAws_queryCacheNodeIdsList(
      wrappedItem,
      context
    );
  }
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = output["CacheParameterGroupName"];
  }
  if (output["ParameterApplyStatus"] !== undefined) {
    contents.ParameterApplyStatus = output["ParameterApplyStatus"];
  }
  return contents;
};

const deserializeAws_queryCacheParameterGroupsMessage = (
  output: any,
  context: __SerdeContext
): CacheParameterGroupsMessage => {
  let contents: any = {
    __type: "CacheParameterGroupsMessage",
    CacheParameterGroups: undefined,
    Marker: undefined
  };
  if (output.CacheParameterGroups === "") {
    contents.CacheParameterGroups = [];
  }
  if (
    output["CacheParameterGroups"] !== undefined &&
    output["CacheParameterGroups"]["CacheParameterGroup"] !== undefined
  ) {
    const wrappedItem =
      output["CacheParameterGroups"]["CacheParameterGroup"] instanceof Array
        ? output["CacheParameterGroups"]["CacheParameterGroup"]
        : [output["CacheParameterGroups"]["CacheParameterGroup"]];
    contents.CacheParameterGroups = deserializeAws_queryCacheParameterGroupList(
      wrappedItem,
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroup = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroup => {
  let contents: any = {
    __type: "CacheSecurityGroup",
    CacheSecurityGroupName: undefined,
    Description: undefined,
    EC2SecurityGroups: undefined,
    OwnerId: undefined
  };
  if (output["CacheSecurityGroupName"] !== undefined) {
    contents.CacheSecurityGroupName = output["CacheSecurityGroupName"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.EC2SecurityGroups === "") {
    contents.EC2SecurityGroups = [];
  }
  if (
    output["EC2SecurityGroups"] !== undefined &&
    output["EC2SecurityGroups"]["EC2SecurityGroup"] !== undefined
  ) {
    const wrappedItem =
      output["EC2SecurityGroups"]["EC2SecurityGroup"] instanceof Array
        ? output["EC2SecurityGroups"]["EC2SecurityGroup"]
        : [output["EC2SecurityGroups"]["EC2SecurityGroup"]];
    contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(
      wrappedItem,
      context
    );
  }
  if (output["OwnerId"] !== undefined) {
    contents.OwnerId = output["OwnerId"];
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupMembership => {
  let contents: any = {
    __type: "CacheSecurityGroupMembership",
    CacheSecurityGroupName: undefined,
    Status: undefined
  };
  if (output["CacheSecurityGroupName"] !== undefined) {
    contents.CacheSecurityGroupName = output["CacheSecurityGroupName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): Array<CacheSecurityGroupMembership> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheSecurityGroupMembership(entry, context)
  );
};

const deserializeAws_queryCacheSecurityGroupMessage = (
  output: any,
  context: __SerdeContext
): CacheSecurityGroupMessage => {
  let contents: any = {
    __type: "CacheSecurityGroupMessage",
    CacheSecurityGroups: undefined,
    Marker: undefined
  };
  if (output.CacheSecurityGroups === "") {
    contents.CacheSecurityGroups = [];
  }
  if (
    output["CacheSecurityGroups"] !== undefined &&
    output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined
  ) {
    const wrappedItem =
      output["CacheSecurityGroups"]["CacheSecurityGroup"] instanceof Array
        ? output["CacheSecurityGroups"]["CacheSecurityGroup"]
        : [output["CacheSecurityGroups"]["CacheSecurityGroup"]];
    contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroups(
      wrappedItem,
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryCacheSecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<CacheSecurityGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheSecurityGroup(entry, context)
  );
};

const deserializeAws_queryCacheSubnetGroup = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroup => {
  let contents: any = {
    __type: "CacheSubnetGroup",
    CacheSubnetGroupDescription: undefined,
    CacheSubnetGroupName: undefined,
    Subnets: undefined,
    VpcId: undefined
  };
  if (output["CacheSubnetGroupDescription"] !== undefined) {
    contents.CacheSubnetGroupDescription =
      output["CacheSubnetGroupDescription"];
  }
  if (output["CacheSubnetGroupName"] !== undefined) {
    contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  }
  if (
    output["Subnets"] !== undefined &&
    output["Subnets"]["Subnet"] !== undefined
  ) {
    const wrappedItem =
      output["Subnets"]["Subnet"] instanceof Array
        ? output["Subnets"]["Subnet"]
        : [output["Subnets"]["Subnet"]];
    contents.Subnets = deserializeAws_querySubnetList(wrappedItem, context);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroupMessage = (
  output: any,
  context: __SerdeContext
): CacheSubnetGroupMessage => {
  let contents: any = {
    __type: "CacheSubnetGroupMessage",
    CacheSubnetGroups: undefined,
    Marker: undefined
  };
  if (output.CacheSubnetGroups === "") {
    contents.CacheSubnetGroups = [];
  }
  if (
    output["CacheSubnetGroups"] !== undefined &&
    output["CacheSubnetGroups"]["CacheSubnetGroup"] !== undefined
  ) {
    const wrappedItem =
      output["CacheSubnetGroups"]["CacheSubnetGroup"] instanceof Array
        ? output["CacheSubnetGroups"]["CacheSubnetGroup"]
        : [output["CacheSubnetGroups"]["CacheSubnetGroup"]];
    contents.CacheSubnetGroups = deserializeAws_queryCacheSubnetGroups(
      wrappedItem,
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryCacheSubnetGroups = (
  output: any,
  context: __SerdeContext
): Array<CacheSubnetGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCacheSubnetGroup(entry, context)
  );
};

const deserializeAws_queryClusterIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCompleteMigrationResponse = (
  output: any,
  context: __SerdeContext
): CompleteMigrationResponse => {
  let contents: any = {
    __type: "CompleteMigrationResponse",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCopySnapshotResult = (
  output: any,
  context: __SerdeContext
): CopySnapshotResult => {
  let contents: any = {
    __type: "CopySnapshotResult",
    Snapshot: undefined
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(
      output["Snapshot"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateCacheClusterResult = (
  output: any,
  context: __SerdeContext
): CreateCacheClusterResult => {
  let contents: any = {
    __type: "CreateCacheClusterResult",
    CacheCluster: undefined
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(
      output["CacheCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateCacheParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateCacheParameterGroupResult => {
  let contents: any = {
    __type: "CreateCacheParameterGroupResult",
    CacheParameterGroup: undefined
  };
  if (output["CacheParameterGroup"] !== undefined) {
    contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroup(
      output["CacheParameterGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateCacheSecurityGroupResult = (
  output: any,
  context: __SerdeContext
): CreateCacheSecurityGroupResult => {
  let contents: any = {
    __type: "CreateCacheSecurityGroupResult",
    CacheSecurityGroup: undefined
  };
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(
      output["CacheSecurityGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateCacheSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): CreateCacheSubnetGroupResult => {
  let contents: any = {
    __type: "CreateCacheSubnetGroupResult",
    CacheSubnetGroup: undefined
  };
  if (output["CacheSubnetGroup"] !== undefined) {
    contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(
      output["CacheSubnetGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): CreateReplicationGroupResult => {
  let contents: any = {
    __type: "CreateReplicationGroupResult",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateSnapshotResult => {
  let contents: any = {
    __type: "CreateSnapshotResult",
    Snapshot: undefined
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(
      output["Snapshot"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDecreaseReplicaCountResult = (
  output: any,
  context: __SerdeContext
): DecreaseReplicaCountResult => {
  let contents: any = {
    __type: "DecreaseReplicaCountResult",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteCacheClusterResult = (
  output: any,
  context: __SerdeContext
): DeleteCacheClusterResult => {
  let contents: any = {
    __type: "DeleteCacheClusterResult",
    CacheCluster: undefined
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(
      output["CacheCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): DeleteReplicationGroupResult => {
  let contents: any = {
    __type: "DeleteReplicationGroupResult",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteSnapshotResult => {
  let contents: any = {
    __type: "DeleteSnapshotResult",
    Snapshot: undefined
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(
      output["Snapshot"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeEngineDefaultParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeEngineDefaultParametersResult => {
  let contents: any = {
    __type: "DescribeEngineDefaultParametersResult",
    EngineDefaults: undefined
  };
  if (output["EngineDefaults"] !== undefined) {
    contents.EngineDefaults = deserializeAws_queryEngineDefaults(
      output["EngineDefaults"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeSnapshotsListMessage = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotsListMessage => {
  let contents: any = {
    __type: "DescribeSnapshotsListMessage",
    Marker: undefined,
    Snapshots: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Snapshots === "") {
    contents.Snapshots = [];
  }
  if (
    output["Snapshots"] !== undefined &&
    output["Snapshots"]["Snapshot"] !== undefined
  ) {
    const wrappedItem =
      output["Snapshots"]["Snapshot"] instanceof Array
        ? output["Snapshots"]["Snapshot"]
        : [output["Snapshots"]["Snapshot"]];
    contents.Snapshots = deserializeAws_querySnapshotList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryEC2SecurityGroup = (
  output: any,
  context: __SerdeContext
): EC2SecurityGroup => {
  let contents: any = {
    __type: "EC2SecurityGroup",
    EC2SecurityGroupName: undefined,
    EC2SecurityGroupOwnerId: undefined,
    Status: undefined
  };
  if (output["EC2SecurityGroupName"] !== undefined) {
    contents.EC2SecurityGroupName = output["EC2SecurityGroupName"];
  }
  if (output["EC2SecurityGroupOwnerId"] !== undefined) {
    contents.EC2SecurityGroupOwnerId = output["EC2SecurityGroupOwnerId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryEC2SecurityGroupList = (
  output: any,
  context: __SerdeContext
): Array<EC2SecurityGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEC2SecurityGroup(entry, context)
  );
};

const deserializeAws_queryEndpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  let contents: any = {
    __type: "Endpoint",
    Address: undefined,
    Port: undefined
  };
  if (output["Address"] !== undefined) {
    contents.Address = output["Address"];
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  return contents;
};

const deserializeAws_queryEngineDefaults = (
  output: any,
  context: __SerdeContext
): EngineDefaults => {
  let contents: any = {
    __type: "EngineDefaults",
    CacheNodeTypeSpecificParameters: undefined,
    CacheParameterGroupFamily: undefined,
    Marker: undefined,
    Parameters: undefined
  };
  if (output.CacheNodeTypeSpecificParameters === "") {
    contents.CacheNodeTypeSpecificParameters = [];
  }
  if (
    output["CacheNodeTypeSpecificParameters"] !== undefined &&
    output["CacheNodeTypeSpecificParameters"][
      "CacheNodeTypeSpecificParameter"
    ] !== undefined
  ) {
    const wrappedItem =
      output["CacheNodeTypeSpecificParameters"][
        "CacheNodeTypeSpecificParameter"
      ] instanceof Array
        ? output["CacheNodeTypeSpecificParameters"][
            "CacheNodeTypeSpecificParameter"
          ]
        : [
            output["CacheNodeTypeSpecificParameters"][
              "CacheNodeTypeSpecificParameter"
            ]
          ];
    contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(
      wrappedItem,
      context
    );
  }
  if (output["CacheParameterGroupFamily"] !== undefined) {
    contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (
    output["Parameters"] !== undefined &&
    output["Parameters"]["Parameter"] !== undefined
  ) {
    const wrappedItem =
      output["Parameters"]["Parameter"] instanceof Array
        ? output["Parameters"]["Parameter"]
        : [output["Parameters"]["Parameter"]];
    contents.Parameters = deserializeAws_queryParametersList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryEvent = (
  output: any,
  context: __SerdeContext
): Event => {
  let contents: any = {
    __type: "Event",
    Date: undefined,
    Message: undefined,
    SourceIdentifier: undefined,
    SourceType: undefined
  };
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["SourceIdentifier"] !== undefined) {
    contents.SourceIdentifier = output["SourceIdentifier"];
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = output["SourceType"];
  }
  return contents;
};

const deserializeAws_queryEventList = (
  output: any,
  context: __SerdeContext
): Array<Event> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEvent(entry, context)
  );
};

const deserializeAws_queryEventsMessage = (
  output: any,
  context: __SerdeContext
): EventsMessage => {
  let contents: any = {
    __type: "EventsMessage",
    Events: undefined,
    Marker: undefined
  };
  if (output.Events === "") {
    contents.Events = [];
  }
  if (
    output["Events"] !== undefined &&
    output["Events"]["Event"] !== undefined
  ) {
    const wrappedItem =
      output["Events"]["Event"] instanceof Array
        ? output["Events"]["Event"]
        : [output["Events"]["Event"]];
    contents.Events = deserializeAws_queryEventList(wrappedItem, context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryIncreaseReplicaCountResult = (
  output: any,
  context: __SerdeContext
): IncreaseReplicaCountResult => {
  let contents: any = {
    __type: "IncreaseReplicaCountResult",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyCacheClusterResult = (
  output: any,
  context: __SerdeContext
): ModifyCacheClusterResult => {
  let contents: any = {
    __type: "ModifyCacheClusterResult",
    CacheCluster: undefined
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(
      output["CacheCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyCacheSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyCacheSubnetGroupResult => {
  let contents: any = {
    __type: "ModifyCacheSubnetGroupResult",
    CacheSubnetGroup: undefined
  };
  if (output["CacheSubnetGroup"] !== undefined) {
    contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(
      output["CacheSubnetGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyReplicationGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyReplicationGroupResult => {
  let contents: any = {
    __type: "ModifyReplicationGroupResult",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyReplicationGroupShardConfigurationResult = (
  output: any,
  context: __SerdeContext
): ModifyReplicationGroupShardConfigurationResult => {
  let contents: any = {
    __type: "ModifyReplicationGroupShardConfigurationResult",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroup = (
  output: any,
  context: __SerdeContext
): NodeGroup => {
  let contents: any = {
    __type: "NodeGroup",
    NodeGroupId: undefined,
    NodeGroupMembers: undefined,
    PrimaryEndpoint: undefined,
    ReaderEndpoint: undefined,
    Slots: undefined,
    Status: undefined
  };
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = output["NodeGroupId"];
  }
  if (output.NodeGroupMembers === "") {
    contents.NodeGroupMembers = [];
  }
  if (
    output["NodeGroupMembers"] !== undefined &&
    output["NodeGroupMembers"]["NodeGroupMember"] !== undefined
  ) {
    const wrappedItem =
      output["NodeGroupMembers"]["NodeGroupMember"] instanceof Array
        ? output["NodeGroupMembers"]["NodeGroupMember"]
        : [output["NodeGroupMembers"]["NodeGroupMember"]];
    contents.NodeGroupMembers = deserializeAws_queryNodeGroupMemberList(
      wrappedItem,
      context
    );
  }
  if (output["PrimaryEndpoint"] !== undefined) {
    contents.PrimaryEndpoint = deserializeAws_queryEndpoint(
      output["PrimaryEndpoint"],
      context
    );
  }
  if (output["ReaderEndpoint"] !== undefined) {
    contents.ReaderEndpoint = deserializeAws_queryEndpoint(
      output["ReaderEndpoint"],
      context
    );
  }
  if (output["Slots"] !== undefined) {
    contents.Slots = output["Slots"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryNodeGroupConfiguration = (
  output: any,
  context: __SerdeContext
): NodeGroupConfiguration => {
  let contents: any = {
    __type: "NodeGroupConfiguration",
    NodeGroupId: undefined,
    PrimaryAvailabilityZone: undefined,
    ReplicaAvailabilityZones: undefined,
    ReplicaCount: undefined,
    Slots: undefined
  };
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = output["NodeGroupId"];
  }
  if (output["PrimaryAvailabilityZone"] !== undefined) {
    contents.PrimaryAvailabilityZone = output["PrimaryAvailabilityZone"];
  }
  if (output.ReplicaAvailabilityZones === "") {
    contents.ReplicaAvailabilityZones = [];
  }
  if (
    output["ReplicaAvailabilityZones"] !== undefined &&
    output["ReplicaAvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    const wrappedItem =
      output["ReplicaAvailabilityZones"]["AvailabilityZone"] instanceof Array
        ? output["ReplicaAvailabilityZones"]["AvailabilityZone"]
        : [output["ReplicaAvailabilityZones"]["AvailabilityZone"]];
    contents.ReplicaAvailabilityZones = deserializeAws_queryAvailabilityZonesList(
      wrappedItem,
      context
    );
  }
  if (output["ReplicaCount"] !== undefined) {
    contents.ReplicaCount = parseInt(output["ReplicaCount"]);
  }
  if (output["Slots"] !== undefined) {
    contents.Slots = output["Slots"];
  }
  return contents;
};

const deserializeAws_queryNodeGroupList = (
  output: any,
  context: __SerdeContext
): Array<NodeGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryNodeGroup(entry, context)
  );
};

const deserializeAws_queryNodeGroupMember = (
  output: any,
  context: __SerdeContext
): NodeGroupMember => {
  let contents: any = {
    __type: "NodeGroupMember",
    CacheClusterId: undefined,
    CacheNodeId: undefined,
    CurrentRole: undefined,
    PreferredAvailabilityZone: undefined,
    ReadEndpoint: undefined
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = output["CacheNodeId"];
  }
  if (output["CurrentRole"] !== undefined) {
    contents.CurrentRole = output["CurrentRole"];
  }
  if (output["PreferredAvailabilityZone"] !== undefined) {
    contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
  }
  if (output["ReadEndpoint"] !== undefined) {
    contents.ReadEndpoint = deserializeAws_queryEndpoint(
      output["ReadEndpoint"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroupMemberList = (
  output: any,
  context: __SerdeContext
): Array<NodeGroupMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryNodeGroupMember(entry, context)
  );
};

const deserializeAws_queryNodeGroupMemberUpdateStatus = (
  output: any,
  context: __SerdeContext
): NodeGroupMemberUpdateStatus => {
  let contents: any = {
    __type: "NodeGroupMemberUpdateStatus",
    CacheClusterId: undefined,
    CacheNodeId: undefined,
    NodeDeletionDate: undefined,
    NodeUpdateEndDate: undefined,
    NodeUpdateInitiatedBy: undefined,
    NodeUpdateInitiatedDate: undefined,
    NodeUpdateStartDate: undefined,
    NodeUpdateStatus: undefined,
    NodeUpdateStatusModifiedDate: undefined
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = output["CacheNodeId"];
  }
  if (output["NodeDeletionDate"] !== undefined) {
    contents.NodeDeletionDate = new Date(output["NodeDeletionDate"]);
  }
  if (output["NodeUpdateEndDate"] !== undefined) {
    contents.NodeUpdateEndDate = new Date(output["NodeUpdateEndDate"]);
  }
  if (output["NodeUpdateInitiatedBy"] !== undefined) {
    contents.NodeUpdateInitiatedBy = output["NodeUpdateInitiatedBy"];
  }
  if (output["NodeUpdateInitiatedDate"] !== undefined) {
    contents.NodeUpdateInitiatedDate = new Date(
      output["NodeUpdateInitiatedDate"]
    );
  }
  if (output["NodeUpdateStartDate"] !== undefined) {
    contents.NodeUpdateStartDate = new Date(output["NodeUpdateStartDate"]);
  }
  if (output["NodeUpdateStatus"] !== undefined) {
    contents.NodeUpdateStatus = output["NodeUpdateStatus"];
  }
  if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
    contents.NodeUpdateStatusModifiedDate = new Date(
      output["NodeUpdateStatusModifiedDate"]
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroupMemberUpdateStatusList = (
  output: any,
  context: __SerdeContext
): Array<NodeGroupMemberUpdateStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryNodeGroupMemberUpdateStatus(entry, context)
  );
};

const deserializeAws_queryNodeGroupUpdateStatus = (
  output: any,
  context: __SerdeContext
): NodeGroupUpdateStatus => {
  let contents: any = {
    __type: "NodeGroupUpdateStatus",
    NodeGroupId: undefined,
    NodeGroupMemberUpdateStatus: undefined
  };
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = output["NodeGroupId"];
  }
  if (output.NodeGroupMemberUpdateStatus === "") {
    contents.NodeGroupMemberUpdateStatus = [];
  }
  if (
    output["NodeGroupMemberUpdateStatus"] !== undefined &&
    output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"] !==
      undefined
  ) {
    const wrappedItem =
      output["NodeGroupMemberUpdateStatus"][
        "NodeGroupMemberUpdateStatus"
      ] instanceof Array
        ? output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]
        : [
            output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]
          ];
    contents.NodeGroupMemberUpdateStatus = deserializeAws_queryNodeGroupMemberUpdateStatusList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryNodeGroupUpdateStatusList = (
  output: any,
  context: __SerdeContext
): Array<NodeGroupUpdateStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryNodeGroupUpdateStatus(entry, context)
  );
};

const deserializeAws_queryNodeSnapshot = (
  output: any,
  context: __SerdeContext
): NodeSnapshot => {
  let contents: any = {
    __type: "NodeSnapshot",
    CacheClusterId: undefined,
    CacheNodeCreateTime: undefined,
    CacheNodeId: undefined,
    CacheSize: undefined,
    NodeGroupConfiguration: undefined,
    NodeGroupId: undefined,
    SnapshotCreateTime: undefined
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output["CacheNodeCreateTime"] !== undefined) {
    contents.CacheNodeCreateTime = new Date(output["CacheNodeCreateTime"]);
  }
  if (output["CacheNodeId"] !== undefined) {
    contents.CacheNodeId = output["CacheNodeId"];
  }
  if (output["CacheSize"] !== undefined) {
    contents.CacheSize = output["CacheSize"];
  }
  if (output["NodeGroupConfiguration"] !== undefined) {
    contents.NodeGroupConfiguration = deserializeAws_queryNodeGroupConfiguration(
      output["NodeGroupConfiguration"],
      context
    );
  }
  if (output["NodeGroupId"] !== undefined) {
    contents.NodeGroupId = output["NodeGroupId"];
  }
  if (output["SnapshotCreateTime"] !== undefined) {
    contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
  }
  return contents;
};

const deserializeAws_queryNodeSnapshotList = (
  output: any,
  context: __SerdeContext
): Array<NodeSnapshot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryNodeSnapshot(entry, context)
  );
};

const deserializeAws_queryNodeTypeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryNotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  let contents: any = {
    __type: "NotificationConfiguration",
    TopicArn: undefined,
    TopicStatus: undefined
  };
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = output["TopicArn"];
  }
  if (output["TopicStatus"] !== undefined) {
    contents.TopicStatus = output["TopicStatus"];
  }
  return contents;
};

const deserializeAws_queryParameter = (
  output: any,
  context: __SerdeContext
): Parameter => {
  let contents: any = {
    __type: "Parameter",
    AllowedValues: undefined,
    ChangeType: undefined,
    DataType: undefined,
    Description: undefined,
    IsModifiable: undefined,
    MinimumEngineVersion: undefined,
    ParameterName: undefined,
    ParameterValue: undefined,
    Source: undefined
  };
  if (output["AllowedValues"] !== undefined) {
    contents.AllowedValues = output["AllowedValues"];
  }
  if (output["ChangeType"] !== undefined) {
    contents.ChangeType = output["ChangeType"];
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = output["DataType"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["IsModifiable"] !== undefined) {
    contents.IsModifiable = output["IsModifiable"] == "true";
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = output["MinimumEngineVersion"];
  }
  if (output["ParameterName"] !== undefined) {
    contents.ParameterName = output["ParameterName"];
  }
  if (output["ParameterValue"] !== undefined) {
    contents.ParameterValue = output["ParameterValue"];
  }
  if (output["Source"] !== undefined) {
    contents.Source = output["Source"];
  }
  return contents;
};

const deserializeAws_queryParametersList = (
  output: any,
  context: __SerdeContext
): Array<Parameter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryParameter(entry, context)
  );
};

const deserializeAws_queryPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): PendingModifiedValues => {
  let contents: any = {
    __type: "PendingModifiedValues",
    AuthTokenStatus: undefined,
    CacheNodeIdsToRemove: undefined,
    CacheNodeType: undefined,
    EngineVersion: undefined,
    NumCacheNodes: undefined
  };
  if (output["AuthTokenStatus"] !== undefined) {
    contents.AuthTokenStatus = output["AuthTokenStatus"];
  }
  if (output.CacheNodeIdsToRemove === "") {
    contents.CacheNodeIdsToRemove = [];
  }
  if (
    output["CacheNodeIdsToRemove"] !== undefined &&
    output["CacheNodeIdsToRemove"]["CacheNodeId"] !== undefined
  ) {
    const wrappedItem =
      output["CacheNodeIdsToRemove"]["CacheNodeId"] instanceof Array
        ? output["CacheNodeIdsToRemove"]["CacheNodeId"]
        : [output["CacheNodeIdsToRemove"]["CacheNodeId"]];
    contents.CacheNodeIdsToRemove = deserializeAws_queryCacheNodeIdsList(
      wrappedItem,
      context
    );
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = output["CacheNodeType"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["NumCacheNodes"] !== undefined) {
    contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
  }
  return contents;
};

const deserializeAws_queryProcessedUpdateAction = (
  output: any,
  context: __SerdeContext
): ProcessedUpdateAction => {
  let contents: any = {
    __type: "ProcessedUpdateAction",
    CacheClusterId: undefined,
    ReplicationGroupId: undefined,
    ServiceUpdateName: undefined,
    UpdateActionStatus: undefined
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = output["ReplicationGroupId"];
  }
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = output["ServiceUpdateName"];
  }
  if (output["UpdateActionStatus"] !== undefined) {
    contents.UpdateActionStatus = output["UpdateActionStatus"];
  }
  return contents;
};

const deserializeAws_queryProcessedUpdateActionList = (
  output: any,
  context: __SerdeContext
): Array<ProcessedUpdateAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryProcessedUpdateAction(entry, context)
  );
};

const deserializeAws_queryPurchaseReservedCacheNodesOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedCacheNodesOfferingResult => {
  let contents: any = {
    __type: "PurchaseReservedCacheNodesOfferingResult",
    ReservedCacheNode: undefined
  };
  if (output["ReservedCacheNode"] !== undefined) {
    contents.ReservedCacheNode = deserializeAws_queryReservedCacheNode(
      output["ReservedCacheNode"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryRebootCacheClusterResult = (
  output: any,
  context: __SerdeContext
): RebootCacheClusterResult => {
  let contents: any = {
    __type: "RebootCacheClusterResult",
    CacheCluster: undefined
  };
  if (output["CacheCluster"] !== undefined) {
    contents.CacheCluster = deserializeAws_queryCacheCluster(
      output["CacheCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryRecurringCharge = (
  output: any,
  context: __SerdeContext
): RecurringCharge => {
  let contents: any = {
    __type: "RecurringCharge",
    RecurringChargeAmount: undefined,
    RecurringChargeFrequency: undefined
  };
  if (output["RecurringChargeAmount"] !== undefined) {
    contents.RecurringChargeAmount = parseFloat(
      output["RecurringChargeAmount"]
    );
  }
  if (output["RecurringChargeFrequency"] !== undefined) {
    contents.RecurringChargeFrequency = output["RecurringChargeFrequency"];
  }
  return contents;
};

const deserializeAws_queryRecurringChargeList = (
  output: any,
  context: __SerdeContext
): Array<RecurringCharge> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryRecurringCharge(entry, context)
  );
};

const deserializeAws_queryReplicationGroup = (
  output: any,
  context: __SerdeContext
): ReplicationGroup => {
  let contents: any = {
    __type: "ReplicationGroup",
    AtRestEncryptionEnabled: undefined,
    AuthTokenEnabled: undefined,
    AuthTokenLastModifiedDate: undefined,
    AutomaticFailover: undefined,
    CacheNodeType: undefined,
    ClusterEnabled: undefined,
    ConfigurationEndpoint: undefined,
    Description: undefined,
    KmsKeyId: undefined,
    MemberClusters: undefined,
    NodeGroups: undefined,
    PendingModifiedValues: undefined,
    ReplicationGroupId: undefined,
    SnapshotRetentionLimit: undefined,
    SnapshotWindow: undefined,
    SnapshottingClusterId: undefined,
    Status: undefined,
    TransitEncryptionEnabled: undefined
  };
  if (output["AtRestEncryptionEnabled"] !== undefined) {
    contents.AtRestEncryptionEnabled =
      output["AtRestEncryptionEnabled"] == "true";
  }
  if (output["AuthTokenEnabled"] !== undefined) {
    contents.AuthTokenEnabled = output["AuthTokenEnabled"] == "true";
  }
  if (output["AuthTokenLastModifiedDate"] !== undefined) {
    contents.AuthTokenLastModifiedDate = new Date(
      output["AuthTokenLastModifiedDate"]
    );
  }
  if (output["AutomaticFailover"] !== undefined) {
    contents.AutomaticFailover = output["AutomaticFailover"];
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = output["CacheNodeType"];
  }
  if (output["ClusterEnabled"] !== undefined) {
    contents.ClusterEnabled = output["ClusterEnabled"] == "true";
  }
  if (output["ConfigurationEndpoint"] !== undefined) {
    contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(
      output["ConfigurationEndpoint"],
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = output["KmsKeyId"];
  }
  if (output.MemberClusters === "") {
    contents.MemberClusters = [];
  }
  if (
    output["MemberClusters"] !== undefined &&
    output["MemberClusters"]["ClusterId"] !== undefined
  ) {
    const wrappedItem =
      output["MemberClusters"]["ClusterId"] instanceof Array
        ? output["MemberClusters"]["ClusterId"]
        : [output["MemberClusters"]["ClusterId"]];
    contents.MemberClusters = deserializeAws_queryClusterIdList(
      wrappedItem,
      context
    );
  }
  if (output.NodeGroups === "") {
    contents.NodeGroups = [];
  }
  if (
    output["NodeGroups"] !== undefined &&
    output["NodeGroups"]["NodeGroup"] !== undefined
  ) {
    const wrappedItem =
      output["NodeGroups"]["NodeGroup"] instanceof Array
        ? output["NodeGroups"]["NodeGroup"]
        : [output["NodeGroups"]["NodeGroup"]];
    contents.NodeGroups = deserializeAws_queryNodeGroupList(
      wrappedItem,
      context
    );
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = deserializeAws_queryReplicationGroupPendingModifiedValues(
      output["PendingModifiedValues"],
      context
    );
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = output["ReplicationGroupId"];
  }
  if (output["SnapshotRetentionLimit"] !== undefined) {
    contents.SnapshotRetentionLimit = parseInt(
      output["SnapshotRetentionLimit"]
    );
  }
  if (output["SnapshotWindow"] !== undefined) {
    contents.SnapshotWindow = output["SnapshotWindow"];
  }
  if (output["SnapshottingClusterId"] !== undefined) {
    contents.SnapshottingClusterId = output["SnapshottingClusterId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["TransitEncryptionEnabled"] !== undefined) {
    contents.TransitEncryptionEnabled =
      output["TransitEncryptionEnabled"] == "true";
  }
  return contents;
};

const deserializeAws_queryReplicationGroupList = (
  output: any,
  context: __SerdeContext
): Array<ReplicationGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryReplicationGroup(entry, context)
  );
};

const deserializeAws_queryReplicationGroupMessage = (
  output: any,
  context: __SerdeContext
): ReplicationGroupMessage => {
  let contents: any = {
    __type: "ReplicationGroupMessage",
    Marker: undefined,
    ReplicationGroups: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.ReplicationGroups === "") {
    contents.ReplicationGroups = [];
  }
  if (
    output["ReplicationGroups"] !== undefined &&
    output["ReplicationGroups"]["ReplicationGroup"] !== undefined
  ) {
    const wrappedItem =
      output["ReplicationGroups"]["ReplicationGroup"] instanceof Array
        ? output["ReplicationGroups"]["ReplicationGroup"]
        : [output["ReplicationGroups"]["ReplicationGroup"]];
    contents.ReplicationGroups = deserializeAws_queryReplicationGroupList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryReplicationGroupPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): ReplicationGroupPendingModifiedValues => {
  let contents: any = {
    __type: "ReplicationGroupPendingModifiedValues",
    AuthTokenStatus: undefined,
    AutomaticFailoverStatus: undefined,
    PrimaryClusterId: undefined,
    Resharding: undefined
  };
  if (output["AuthTokenStatus"] !== undefined) {
    contents.AuthTokenStatus = output["AuthTokenStatus"];
  }
  if (output["AutomaticFailoverStatus"] !== undefined) {
    contents.AutomaticFailoverStatus = output["AutomaticFailoverStatus"];
  }
  if (output["PrimaryClusterId"] !== undefined) {
    contents.PrimaryClusterId = output["PrimaryClusterId"];
  }
  if (output["Resharding"] !== undefined) {
    contents.Resharding = deserializeAws_queryReshardingStatus(
      output["Resharding"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedCacheNode = (
  output: any,
  context: __SerdeContext
): ReservedCacheNode => {
  let contents: any = {
    __type: "ReservedCacheNode",
    CacheNodeCount: undefined,
    CacheNodeType: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    OfferingType: undefined,
    ProductDescription: undefined,
    RecurringCharges: undefined,
    ReservationARN: undefined,
    ReservedCacheNodeId: undefined,
    ReservedCacheNodesOfferingId: undefined,
    StartTime: undefined,
    State: undefined,
    UsagePrice: undefined
  };
  if (output["CacheNodeCount"] !== undefined) {
    contents.CacheNodeCount = parseInt(output["CacheNodeCount"]);
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = output["CacheNodeType"];
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = parseInt(output["Duration"]);
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = parseFloat(output["FixedPrice"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = output["OfferingType"];
  }
  if (output["ProductDescription"] !== undefined) {
    contents.ProductDescription = output["ProductDescription"];
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  }
  if (
    output["RecurringCharges"] !== undefined &&
    output["RecurringCharges"]["RecurringCharge"] !== undefined
  ) {
    const wrappedItem =
      output["RecurringCharges"]["RecurringCharge"] instanceof Array
        ? output["RecurringCharges"]["RecurringCharge"]
        : [output["RecurringCharges"]["RecurringCharge"]];
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
      wrappedItem,
      context
    );
  }
  if (output["ReservationARN"] !== undefined) {
    contents.ReservationARN = output["ReservationARN"];
  }
  if (output["ReservedCacheNodeId"] !== undefined) {
    contents.ReservedCacheNodeId = output["ReservedCacheNodeId"];
  }
  if (output["ReservedCacheNodesOfferingId"] !== undefined) {
    contents.ReservedCacheNodesOfferingId =
      output["ReservedCacheNodesOfferingId"];
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = parseFloat(output["UsagePrice"]);
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodeList = (
  output: any,
  context: __SerdeContext
): Array<ReservedCacheNode> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryReservedCacheNode(entry, context)
  );
};

const deserializeAws_queryReservedCacheNodeMessage = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodeMessage => {
  let contents: any = {
    __type: "ReservedCacheNodeMessage",
    Marker: undefined,
    ReservedCacheNodes: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.ReservedCacheNodes === "") {
    contents.ReservedCacheNodes = [];
  }
  if (
    output["ReservedCacheNodes"] !== undefined &&
    output["ReservedCacheNodes"]["ReservedCacheNode"] !== undefined
  ) {
    const wrappedItem =
      output["ReservedCacheNodes"]["ReservedCacheNode"] instanceof Array
        ? output["ReservedCacheNodes"]["ReservedCacheNode"]
        : [output["ReservedCacheNodes"]["ReservedCacheNode"]];
    contents.ReservedCacheNodes = deserializeAws_queryReservedCacheNodeList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodesOffering = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOffering => {
  let contents: any = {
    __type: "ReservedCacheNodesOffering",
    CacheNodeType: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    OfferingType: undefined,
    ProductDescription: undefined,
    RecurringCharges: undefined,
    ReservedCacheNodesOfferingId: undefined,
    UsagePrice: undefined
  };
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = output["CacheNodeType"];
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = parseInt(output["Duration"]);
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = parseFloat(output["FixedPrice"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = output["OfferingType"];
  }
  if (output["ProductDescription"] !== undefined) {
    contents.ProductDescription = output["ProductDescription"];
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  }
  if (
    output["RecurringCharges"] !== undefined &&
    output["RecurringCharges"]["RecurringCharge"] !== undefined
  ) {
    const wrappedItem =
      output["RecurringCharges"]["RecurringCharge"] instanceof Array
        ? output["RecurringCharges"]["RecurringCharge"]
        : [output["RecurringCharges"]["RecurringCharge"]];
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
      wrappedItem,
      context
    );
  }
  if (output["ReservedCacheNodesOfferingId"] !== undefined) {
    contents.ReservedCacheNodesOfferingId =
      output["ReservedCacheNodesOfferingId"];
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = parseFloat(output["UsagePrice"]);
  }
  return contents;
};

const deserializeAws_queryReservedCacheNodesOfferingList = (
  output: any,
  context: __SerdeContext
): Array<ReservedCacheNodesOffering> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryReservedCacheNodesOffering(entry, context)
  );
};

const deserializeAws_queryReservedCacheNodesOfferingMessage = (
  output: any,
  context: __SerdeContext
): ReservedCacheNodesOfferingMessage => {
  let contents: any = {
    __type: "ReservedCacheNodesOfferingMessage",
    Marker: undefined,
    ReservedCacheNodesOfferings: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.ReservedCacheNodesOfferings === "") {
    contents.ReservedCacheNodesOfferings = [];
  }
  if (
    output["ReservedCacheNodesOfferings"] !== undefined &&
    output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"] !==
      undefined
  ) {
    const wrappedItem =
      output["ReservedCacheNodesOfferings"][
        "ReservedCacheNodesOffering"
      ] instanceof Array
        ? output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]
        : [output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]];
    contents.ReservedCacheNodesOfferings = deserializeAws_queryReservedCacheNodesOfferingList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryReshardingStatus = (
  output: any,
  context: __SerdeContext
): ReshardingStatus => {
  let contents: any = {
    __type: "ReshardingStatus",
    SlotMigration: undefined
  };
  if (output["SlotMigration"] !== undefined) {
    contents.SlotMigration = deserializeAws_querySlotMigration(
      output["SlotMigration"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryRevokeCacheSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): RevokeCacheSecurityGroupIngressResult => {
  let contents: any = {
    __type: "RevokeCacheSecurityGroupIngressResult",
    CacheSecurityGroup: undefined
  };
  if (output["CacheSecurityGroup"] !== undefined) {
    contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(
      output["CacheSecurityGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_querySecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership => {
  let contents: any = {
    __type: "SecurityGroupMembership",
    SecurityGroupId: undefined,
    Status: undefined
  };
  if (output["SecurityGroupId"] !== undefined) {
    contents.SecurityGroupId = output["SecurityGroupId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_querySecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): Array<SecurityGroupMembership> => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySecurityGroupMembership(entry, context)
  );
};

const deserializeAws_queryServiceUpdate = (
  output: any,
  context: __SerdeContext
): ServiceUpdate => {
  let contents: any = {
    __type: "ServiceUpdate",
    AutoUpdateAfterRecommendedApplyByDate: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    EstimatedUpdateTime: undefined,
    ServiceUpdateDescription: undefined,
    ServiceUpdateEndDate: undefined,
    ServiceUpdateName: undefined,
    ServiceUpdateRecommendedApplyByDate: undefined,
    ServiceUpdateReleaseDate: undefined,
    ServiceUpdateSeverity: undefined,
    ServiceUpdateStatus: undefined,
    ServiceUpdateType: undefined
  };
  if (output["AutoUpdateAfterRecommendedApplyByDate"] !== undefined) {
    contents.AutoUpdateAfterRecommendedApplyByDate =
      output["AutoUpdateAfterRecommendedApplyByDate"] == "true";
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["EstimatedUpdateTime"] !== undefined) {
    contents.EstimatedUpdateTime = output["EstimatedUpdateTime"];
  }
  if (output["ServiceUpdateDescription"] !== undefined) {
    contents.ServiceUpdateDescription = output["ServiceUpdateDescription"];
  }
  if (output["ServiceUpdateEndDate"] !== undefined) {
    contents.ServiceUpdateEndDate = new Date(output["ServiceUpdateEndDate"]);
  }
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = output["ServiceUpdateName"];
  }
  if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
    contents.ServiceUpdateRecommendedApplyByDate = new Date(
      output["ServiceUpdateRecommendedApplyByDate"]
    );
  }
  if (output["ServiceUpdateReleaseDate"] !== undefined) {
    contents.ServiceUpdateReleaseDate = new Date(
      output["ServiceUpdateReleaseDate"]
    );
  }
  if (output["ServiceUpdateSeverity"] !== undefined) {
    contents.ServiceUpdateSeverity = output["ServiceUpdateSeverity"];
  }
  if (output["ServiceUpdateStatus"] !== undefined) {
    contents.ServiceUpdateStatus = output["ServiceUpdateStatus"];
  }
  if (output["ServiceUpdateType"] !== undefined) {
    contents.ServiceUpdateType = output["ServiceUpdateType"];
  }
  return contents;
};

const deserializeAws_queryServiceUpdateList = (
  output: any,
  context: __SerdeContext
): Array<ServiceUpdate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryServiceUpdate(entry, context)
  );
};

const deserializeAws_queryServiceUpdatesMessage = (
  output: any,
  context: __SerdeContext
): ServiceUpdatesMessage => {
  let contents: any = {
    __type: "ServiceUpdatesMessage",
    Marker: undefined,
    ServiceUpdates: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.ServiceUpdates === "") {
    contents.ServiceUpdates = [];
  }
  if (
    output["ServiceUpdates"] !== undefined &&
    output["ServiceUpdates"]["ServiceUpdate"] !== undefined
  ) {
    const wrappedItem =
      output["ServiceUpdates"]["ServiceUpdate"] instanceof Array
        ? output["ServiceUpdates"]["ServiceUpdate"]
        : [output["ServiceUpdates"]["ServiceUpdate"]];
    contents.ServiceUpdates = deserializeAws_queryServiceUpdateList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_querySlotMigration = (
  output: any,
  context: __SerdeContext
): SlotMigration => {
  let contents: any = {
    __type: "SlotMigration",
    ProgressPercentage: undefined
  };
  if (output["ProgressPercentage"] !== undefined) {
    contents.ProgressPercentage = parseFloat(output["ProgressPercentage"]);
  }
  return contents;
};

const deserializeAws_querySnapshot = (
  output: any,
  context: __SerdeContext
): Snapshot => {
  let contents: any = {
    __type: "Snapshot",
    AutoMinorVersionUpgrade: undefined,
    AutomaticFailover: undefined,
    CacheClusterCreateTime: undefined,
    CacheClusterId: undefined,
    CacheNodeType: undefined,
    CacheParameterGroupName: undefined,
    CacheSubnetGroupName: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    KmsKeyId: undefined,
    NodeSnapshots: undefined,
    NumCacheNodes: undefined,
    NumNodeGroups: undefined,
    Port: undefined,
    PreferredAvailabilityZone: undefined,
    PreferredMaintenanceWindow: undefined,
    ReplicationGroupDescription: undefined,
    ReplicationGroupId: undefined,
    SnapshotName: undefined,
    SnapshotRetentionLimit: undefined,
    SnapshotSource: undefined,
    SnapshotStatus: undefined,
    SnapshotWindow: undefined,
    TopicArn: undefined,
    VpcId: undefined
  };
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade =
      output["AutoMinorVersionUpgrade"] == "true";
  }
  if (output["AutomaticFailover"] !== undefined) {
    contents.AutomaticFailover = output["AutomaticFailover"];
  }
  if (output["CacheClusterCreateTime"] !== undefined) {
    contents.CacheClusterCreateTime = new Date(
      output["CacheClusterCreateTime"]
    );
  }
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output["CacheNodeType"] !== undefined) {
    contents.CacheNodeType = output["CacheNodeType"];
  }
  if (output["CacheParameterGroupName"] !== undefined) {
    contents.CacheParameterGroupName = output["CacheParameterGroupName"];
  }
  if (output["CacheSubnetGroupName"] !== undefined) {
    contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = output["KmsKeyId"];
  }
  if (output.NodeSnapshots === "") {
    contents.NodeSnapshots = [];
  }
  if (
    output["NodeSnapshots"] !== undefined &&
    output["NodeSnapshots"]["NodeSnapshot"] !== undefined
  ) {
    const wrappedItem =
      output["NodeSnapshots"]["NodeSnapshot"] instanceof Array
        ? output["NodeSnapshots"]["NodeSnapshot"]
        : [output["NodeSnapshots"]["NodeSnapshot"]];
    contents.NodeSnapshots = deserializeAws_queryNodeSnapshotList(
      wrappedItem,
      context
    );
  }
  if (output["NumCacheNodes"] !== undefined) {
    contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
  }
  if (output["NumNodeGroups"] !== undefined) {
    contents.NumNodeGroups = parseInt(output["NumNodeGroups"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  if (output["PreferredAvailabilityZone"] !== undefined) {
    contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
  }
  if (output["ReplicationGroupDescription"] !== undefined) {
    contents.ReplicationGroupDescription =
      output["ReplicationGroupDescription"];
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = output["ReplicationGroupId"];
  }
  if (output["SnapshotName"] !== undefined) {
    contents.SnapshotName = output["SnapshotName"];
  }
  if (output["SnapshotRetentionLimit"] !== undefined) {
    contents.SnapshotRetentionLimit = parseInt(
      output["SnapshotRetentionLimit"]
    );
  }
  if (output["SnapshotSource"] !== undefined) {
    contents.SnapshotSource = output["SnapshotSource"];
  }
  if (output["SnapshotStatus"] !== undefined) {
    contents.SnapshotStatus = output["SnapshotStatus"];
  }
  if (output["SnapshotWindow"] !== undefined) {
    contents.SnapshotWindow = output["SnapshotWindow"];
  }
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = output["TopicArn"];
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
};

const deserializeAws_querySnapshotList = (
  output: any,
  context: __SerdeContext
): Array<Snapshot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySnapshot(entry, context)
  );
};

const deserializeAws_queryStartMigrationResponse = (
  output: any,
  context: __SerdeContext
): StartMigrationResponse => {
  let contents: any = {
    __type: "StartMigrationResponse",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_querySubnet = (
  output: any,
  context: __SerdeContext
): Subnet => {
  let contents: any = {
    __type: "Subnet",
    SubnetAvailabilityZone: undefined,
    SubnetIdentifier: undefined
  };
  if (output["SubnetAvailabilityZone"] !== undefined) {
    contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(
      output["SubnetAvailabilityZone"],
      context
    );
  }
  if (output["SubnetIdentifier"] !== undefined) {
    contents.SubnetIdentifier = output["SubnetIdentifier"];
  }
  return contents;
};

const deserializeAws_querySubnetList = (
  output: any,
  context: __SerdeContext
): Array<Subnet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySubnet(entry, context)
  );
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryTagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTag(entry, context)
  );
};

const deserializeAws_queryTagListMessage = (
  output: any,
  context: __SerdeContext
): TagListMessage => {
  let contents: any = {
    __type: "TagListMessage",
    TagList: undefined
  };
  if (output.TagList === "") {
    contents.TagList = [];
  }
  if (
    output["TagList"] !== undefined &&
    output["TagList"]["Tag"] !== undefined
  ) {
    const wrappedItem =
      output["TagList"]["Tag"] instanceof Array
        ? output["TagList"]["Tag"]
        : [output["TagList"]["Tag"]];
    contents.TagList = deserializeAws_queryTagList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryTestFailoverResult = (
  output: any,
  context: __SerdeContext
): TestFailoverResult => {
  let contents: any = {
    __type: "TestFailoverResult",
    ReplicationGroup: undefined
  };
  if (output["ReplicationGroup"] !== undefined) {
    contents.ReplicationGroup = deserializeAws_queryReplicationGroup(
      output["ReplicationGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryUnprocessedUpdateAction = (
  output: any,
  context: __SerdeContext
): UnprocessedUpdateAction => {
  let contents: any = {
    __type: "UnprocessedUpdateAction",
    CacheClusterId: undefined,
    ErrorMessage: undefined,
    ErrorType: undefined,
    ReplicationGroupId: undefined,
    ServiceUpdateName: undefined
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output["ErrorMessage"] !== undefined) {
    contents.ErrorMessage = output["ErrorMessage"];
  }
  if (output["ErrorType"] !== undefined) {
    contents.ErrorType = output["ErrorType"];
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = output["ReplicationGroupId"];
  }
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = output["ServiceUpdateName"];
  }
  return contents;
};

const deserializeAws_queryUnprocessedUpdateActionList = (
  output: any,
  context: __SerdeContext
): Array<UnprocessedUpdateAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryUnprocessedUpdateAction(entry, context)
  );
};

const deserializeAws_queryUpdateAction = (
  output: any,
  context: __SerdeContext
): UpdateAction => {
  let contents: any = {
    __type: "UpdateAction",
    CacheClusterId: undefined,
    CacheNodeUpdateStatus: undefined,
    Engine: undefined,
    EstimatedUpdateTime: undefined,
    NodeGroupUpdateStatus: undefined,
    NodesUpdated: undefined,
    ReplicationGroupId: undefined,
    ServiceUpdateName: undefined,
    ServiceUpdateRecommendedApplyByDate: undefined,
    ServiceUpdateReleaseDate: undefined,
    ServiceUpdateSeverity: undefined,
    ServiceUpdateStatus: undefined,
    ServiceUpdateType: undefined,
    SlaMet: undefined,
    UpdateActionAvailableDate: undefined,
    UpdateActionStatus: undefined,
    UpdateActionStatusModifiedDate: undefined
  };
  if (output["CacheClusterId"] !== undefined) {
    contents.CacheClusterId = output["CacheClusterId"];
  }
  if (output.CacheNodeUpdateStatus === "") {
    contents.CacheNodeUpdateStatus = [];
  }
  if (
    output["CacheNodeUpdateStatus"] !== undefined &&
    output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"] !== undefined
  ) {
    const wrappedItem =
      output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"] instanceof Array
        ? output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"]
        : [output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"]];
    contents.CacheNodeUpdateStatus = deserializeAws_queryCacheNodeUpdateStatusList(
      wrappedItem,
      context
    );
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EstimatedUpdateTime"] !== undefined) {
    contents.EstimatedUpdateTime = output["EstimatedUpdateTime"];
  }
  if (output.NodeGroupUpdateStatus === "") {
    contents.NodeGroupUpdateStatus = [];
  }
  if (
    output["NodeGroupUpdateStatus"] !== undefined &&
    output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"] !== undefined
  ) {
    const wrappedItem =
      output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"] instanceof Array
        ? output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"]
        : [output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"]];
    contents.NodeGroupUpdateStatus = deserializeAws_queryNodeGroupUpdateStatusList(
      wrappedItem,
      context
    );
  }
  if (output["NodesUpdated"] !== undefined) {
    contents.NodesUpdated = output["NodesUpdated"];
  }
  if (output["ReplicationGroupId"] !== undefined) {
    contents.ReplicationGroupId = output["ReplicationGroupId"];
  }
  if (output["ServiceUpdateName"] !== undefined) {
    contents.ServiceUpdateName = output["ServiceUpdateName"];
  }
  if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
    contents.ServiceUpdateRecommendedApplyByDate = new Date(
      output["ServiceUpdateRecommendedApplyByDate"]
    );
  }
  if (output["ServiceUpdateReleaseDate"] !== undefined) {
    contents.ServiceUpdateReleaseDate = new Date(
      output["ServiceUpdateReleaseDate"]
    );
  }
  if (output["ServiceUpdateSeverity"] !== undefined) {
    contents.ServiceUpdateSeverity = output["ServiceUpdateSeverity"];
  }
  if (output["ServiceUpdateStatus"] !== undefined) {
    contents.ServiceUpdateStatus = output["ServiceUpdateStatus"];
  }
  if (output["ServiceUpdateType"] !== undefined) {
    contents.ServiceUpdateType = output["ServiceUpdateType"];
  }
  if (output["SlaMet"] !== undefined) {
    contents.SlaMet = output["SlaMet"];
  }
  if (output["UpdateActionAvailableDate"] !== undefined) {
    contents.UpdateActionAvailableDate = new Date(
      output["UpdateActionAvailableDate"]
    );
  }
  if (output["UpdateActionStatus"] !== undefined) {
    contents.UpdateActionStatus = output["UpdateActionStatus"];
  }
  if (output["UpdateActionStatusModifiedDate"] !== undefined) {
    contents.UpdateActionStatusModifiedDate = new Date(
      output["UpdateActionStatusModifiedDate"]
    );
  }
  return contents;
};

const deserializeAws_queryUpdateActionList = (
  output: any,
  context: __SerdeContext
): Array<UpdateAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryUpdateAction(entry, context)
  );
};

const deserializeAws_queryUpdateActionResultsMessage = (
  output: any,
  context: __SerdeContext
): UpdateActionResultsMessage => {
  let contents: any = {
    __type: "UpdateActionResultsMessage",
    ProcessedUpdateActions: undefined,
    UnprocessedUpdateActions: undefined
  };
  if (output.ProcessedUpdateActions === "") {
    contents.ProcessedUpdateActions = [];
  }
  if (
    output["ProcessedUpdateActions"] !== undefined &&
    output["ProcessedUpdateActions"]["ProcessedUpdateAction"] !== undefined
  ) {
    const wrappedItem =
      output["ProcessedUpdateActions"]["ProcessedUpdateAction"] instanceof Array
        ? output["ProcessedUpdateActions"]["ProcessedUpdateAction"]
        : [output["ProcessedUpdateActions"]["ProcessedUpdateAction"]];
    contents.ProcessedUpdateActions = deserializeAws_queryProcessedUpdateActionList(
      wrappedItem,
      context
    );
  }
  if (output.UnprocessedUpdateActions === "") {
    contents.UnprocessedUpdateActions = [];
  }
  if (
    output["UnprocessedUpdateActions"] !== undefined &&
    output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"] !== undefined
  ) {
    const wrappedItem =
      output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"] instanceof
      Array
        ? output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]
        : [output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]];
    contents.UnprocessedUpdateActions = deserializeAws_queryUnprocessedUpdateActionList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryUpdateActionsMessage = (
  output: any,
  context: __SerdeContext
): UpdateActionsMessage => {
  let contents: any = {
    __type: "UpdateActionsMessage",
    Marker: undefined,
    UpdateActions: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.UpdateActions === "") {
    contents.UpdateActions = [];
  }
  if (
    output["UpdateActions"] !== undefined &&
    output["UpdateActions"]["UpdateAction"] !== undefined
  ) {
    const wrappedItem =
      output["UpdateActions"]["UpdateAction"] instanceof Array
        ? output["UpdateActions"]["UpdateAction"]
        : [output["UpdateActions"]["UpdateAction"]];
    contents.UpdateActions = deserializeAws_queryUpdateActionList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const buildFormUrlencodedString = (entries: any): string => {
  return Object.keys(entries)
    .map(
      key =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(entries[key])
    )
    .join("&");
};

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
