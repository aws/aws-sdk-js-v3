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
  serializeFloat as __serializeFloat,
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

import { AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput } from "../commands/AddRoleToDBClusterCommand";
import {
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
} from "../commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "../commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "../commands/ApplyPendingMaintenanceActionCommand";
import {
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
} from "../commands/CopyDBClusterParameterGroupCommand";
import {
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
} from "../commands/CopyDBClusterSnapshotCommand";
import {
  CopyDBParameterGroupCommandInput,
  CopyDBParameterGroupCommandOutput,
} from "../commands/CopyDBParameterGroupCommand";
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "../commands/CreateDBClusterCommand";
import {
  CreateDBClusterEndpointCommandInput,
  CreateDBClusterEndpointCommandOutput,
} from "../commands/CreateDBClusterEndpointCommand";
import {
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
} from "../commands/CreateDBClusterParameterGroupCommand";
import {
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput,
} from "../commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput } from "../commands/CreateDBInstanceCommand";
import {
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
} from "../commands/CreateDBParameterGroupCommand";
import {
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
} from "../commands/CreateDBSubnetGroupCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "../commands/CreateEventSubscriptionCommand";
import {
  CreateGlobalClusterCommandInput,
  CreateGlobalClusterCommandOutput,
} from "../commands/CreateGlobalClusterCommand";
import { DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput } from "../commands/DeleteDBClusterCommand";
import {
  DeleteDBClusterEndpointCommandInput,
  DeleteDBClusterEndpointCommandOutput,
} from "../commands/DeleteDBClusterEndpointCommand";
import {
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
} from "../commands/DeleteDBClusterParameterGroupCommand";
import {
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
} from "../commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "../commands/DeleteDBInstanceCommand";
import {
  DeleteDBParameterGroupCommandInput,
  DeleteDBParameterGroupCommandOutput,
} from "../commands/DeleteDBParameterGroupCommand";
import {
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
} from "../commands/DeleteDBSubnetGroupCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "../commands/DeleteEventSubscriptionCommand";
import {
  DeleteGlobalClusterCommandInput,
  DeleteGlobalClusterCommandOutput,
} from "../commands/DeleteGlobalClusterCommand";
import {
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "../commands/DescribeDBClusterEndpointsCommand";
import {
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "../commands/DescribeDBClusterParameterGroupsCommand";
import {
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "../commands/DescribeDBClusterParametersCommand";
import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "../commands/DescribeDBClustersCommand";
import {
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
} from "../commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "../commands/DescribeDBClusterSnapshotsCommand";
import {
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "../commands/DescribeDBEngineVersionsCommand";
import {
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand";
import {
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand";
import {
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "../commands/DescribeDBParametersCommand";
import {
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "../commands/DescribeDBSubnetGroupsCommand";
import {
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "../commands/DescribeEngineDefaultClusterParametersCommand";
import {
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "../commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import {
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import {
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "../commands/DescribeValidDBInstanceModificationsCommand";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "../commands/FailoverDBClusterCommand";
import {
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
} from "../commands/FailoverGlobalClusterCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput } from "../commands/ModifyDBClusterCommand";
import {
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
} from "../commands/ModifyDBClusterEndpointCommand";
import {
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
} from "../commands/ModifyDBClusterParameterGroupCommand";
import {
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
} from "../commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "../commands/ModifyDBInstanceCommand";
import {
  ModifyDBParameterGroupCommandInput,
  ModifyDBParameterGroupCommandOutput,
} from "../commands/ModifyDBParameterGroupCommand";
import {
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
} from "../commands/ModifyDBSubnetGroupCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "../commands/ModifyEventSubscriptionCommand";
import {
  ModifyGlobalClusterCommandInput,
  ModifyGlobalClusterCommandOutput,
} from "../commands/ModifyGlobalClusterCommand";
import {
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
} from "../commands/PromoteReadReplicaDBClusterCommand";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "../commands/RebootDBInstanceCommand";
import {
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
} from "../commands/RemoveFromGlobalClusterCommand";
import {
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
} from "../commands/RemoveRoleFromDBClusterCommand";
import {
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
} from "../commands/RemoveSourceIdentifierFromSubscriptionCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "../commands/RemoveTagsFromResourceCommand";
import {
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
} from "../commands/ResetDBClusterParameterGroupCommand";
import {
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
} from "../commands/ResetDBParameterGroupCommand";
import {
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
} from "../commands/RestoreDBClusterFromSnapshotCommand";
import {
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
} from "../commands/RestoreDBClusterToPointInTimeCommand";
import { StartDBClusterCommandInput, StartDBClusterCommandOutput } from "../commands/StartDBClusterCommand";
import { StopDBClusterCommandInput, StopDBClusterCommandOutput } from "../commands/StopDBClusterCommand";
import {
  AddRoleToDBClusterMessage,
  AddSourceIdentifierToSubscriptionMessage,
  AddSourceIdentifierToSubscriptionResult,
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResult,
  AuthorizationNotFoundFault,
  AvailabilityZone,
  CertificateNotFoundFault,
  CharacterSet,
  CloudwatchLogsExportConfiguration,
  ClusterPendingModifiedValues,
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterParameterGroupResult,
  CopyDBClusterSnapshotMessage,
  CopyDBClusterSnapshotResult,
  CopyDBParameterGroupMessage,
  CopyDBParameterGroupResult,
  CreateDBClusterEndpointMessage,
  CreateDBClusterEndpointOutput,
  CreateDBClusterMessage,
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterParameterGroupResult,
  CreateDBClusterResult,
  CreateDBClusterSnapshotMessage,
  CreateDBClusterSnapshotResult,
  CreateDBInstanceMessage,
  CreateDBInstanceResult,
  CreateDBParameterGroupMessage,
  CreateDBParameterGroupResult,
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupResult,
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResult,
  CreateGlobalClusterMessage,
  CreateGlobalClusterResult,
  DBCluster,
  DBClusterAlreadyExistsFault,
  DBClusterEndpoint,
  DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointMessage,
  DBClusterEndpointNotFoundFault,
  DBClusterEndpointQuotaExceededFault,
  DBClusterMember,
  DBClusterMessage,
  DBClusterNotFoundFault,
  DBClusterOptionGroupStatus,
  DBClusterParameterGroup,
  DBClusterParameterGroupDetails,
  DBClusterParameterGroupNameMessage,
  DBClusterParameterGroupNotFoundFault,
  DBClusterParameterGroupsMessage,
  DBClusterQuotaExceededFault,
  DBClusterRole,
  DBClusterRoleAlreadyExistsFault,
  DBClusterRoleNotFoundFault,
  DBClusterRoleQuotaExceededFault,
  DBClusterSnapshot,
  DBClusterSnapshotAlreadyExistsFault,
  DBClusterSnapshotAttribute,
  DBClusterSnapshotAttributesResult,
  DBClusterSnapshotMessage,
  DBClusterSnapshotNotFoundFault,
  DBEngineVersion,
  DBEngineVersionMessage,
  DBInstance,
  DBInstanceAlreadyExistsFault,
  DBInstanceMessage,
  DBInstanceNotFoundFault,
  DBInstanceStatusInfo,
  DBParameterGroup,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupDetails,
  DBParameterGroupNameMessage,
  DBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault,
  DBParameterGroupsMessage,
  DBParameterGroupStatus,
  DBSecurityGroupMembership,
  DBSecurityGroupNotFoundFault,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotNotFoundFault,
  DBSubnetGroup,
  DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupMessage,
  DBSubnetGroupNotFoundFault,
  DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault,
  DBUpgradeDependencyFailureFault,
  DeleteDBClusterEndpointMessage,
  DeleteDBClusterEndpointOutput,
  DeleteDBClusterMessage,
  DeleteDBClusterParameterGroupMessage,
  DeleteDBClusterResult,
  DeleteDBClusterSnapshotMessage,
  DeleteDBClusterSnapshotResult,
  DeleteDBInstanceMessage,
  DeleteDBInstanceResult,
  DeleteDBParameterGroupMessage,
  DeleteDBSubnetGroupMessage,
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResult,
  DeleteGlobalClusterMessage,
  DeleteGlobalClusterResult,
  DescribeDBClusterEndpointsMessage,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParametersMessage,
  DescribeDBClustersMessage,
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
  DescribeDBClusterSnapshotsMessage,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstancesMessage,
  DescribeDBParameterGroupsMessage,
  DescribeDBParametersMessage,
  DescribeDBSubnetGroupsMessage,
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
  DescribeEngineDefaultParametersMessage,
  DescribeEngineDefaultParametersResult,
  DescribeEventCategoriesMessage,
  DescribeEventsMessage,
  DescribeEventSubscriptionsMessage,
  DescribeGlobalClustersMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
  DomainMembership,
  DomainNotFoundFault,
  DoubleRange,
  Endpoint,
  EngineDefaults,
  Event,
  EventCategoriesMap,
  EventCategoriesMessage,
  EventsMessage,
  EventSubscription,
  EventSubscriptionQuotaExceededFault,
  EventSubscriptionsMessage,
  FailoverDBClusterMessage,
  FailoverDBClusterResult,
  FailoverGlobalClusterMessage,
  FailoverGlobalClusterResult,
  Filter,
  GlobalCluster,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterMember,
  GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault,
  GlobalClustersMessage,
  InstanceQuotaExceededFault,
  InsufficientDBClusterCapacityFault,
  InsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault,
  InvalidDBClusterEndpointStateFault,
  InvalidDBClusterSnapshotStateFault,
  InvalidDBClusterStateFault,
  InvalidDBInstanceStateFault,
  InvalidDBParameterGroupStateFault,
  InvalidDBSecurityGroupStateFault,
  InvalidDBSnapshotStateFault,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault,
  InvalidEventSubscriptionStateFault,
  InvalidGlobalClusterStateFault,
  InvalidRestoreFault,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  KMSKeyNotAccessibleFault,
  ListTagsForResourceMessage,
  ModifyDBClusterEndpointMessage,
  ModifyDBClusterEndpointOutput,
  ModifyDBClusterMessage,
  ModifyDBClusterParameterGroupMessage,
  ModifyDBClusterResult,
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeResult,
  ModifyDBInstanceMessage,
  ModifyDBInstanceResult,
  ModifyDBParameterGroupMessage,
  ModifyDBSubnetGroupMessage,
  ModifyDBSubnetGroupResult,
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResult,
  ModifyGlobalClusterMessage,
  ModifyGlobalClusterResult,
  OptionGroupMembership,
  OptionGroupNotFoundFault,
  OrderableDBInstanceOption,
  OrderableDBInstanceOptionsMessage,
  Parameter,
  PendingCloudwatchLogsExports,
  PendingMaintenanceAction,
  PendingMaintenanceActionsMessage,
  PendingModifiedValues,
  PromoteReadReplicaDBClusterMessage,
  PromoteReadReplicaDBClusterResult,
  ProvisionedIopsNotAvailableInAZFault,
  Range,
  RebootDBInstanceMessage,
  RebootDBInstanceResult,
  RemoveFromGlobalClusterMessage,
  RemoveFromGlobalClusterResult,
  RemoveRoleFromDBClusterMessage,
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
  RemoveTagsFromResourceMessage,
  ResetDBClusterParameterGroupMessage,
  ResetDBParameterGroupMessage,
  ResourceNotFoundFault,
  ResourcePendingMaintenanceActions,
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterFromSnapshotResult,
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBClusterToPointInTimeResult,
  ServerlessV2ScalingConfiguration,
  ServerlessV2ScalingConfigurationInfo,
  SharedSnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault,
  SourceNotFoundFault,
  StartDBClusterMessage,
  StartDBClusterResult,
  StopDBClusterMessage,
  StopDBClusterResult,
  StorageQuotaExceededFault,
  StorageTypeNotSupportedFault,
  Subnet,
  SubnetAlreadyInUse,
  SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault,
  SubscriptionNotFoundFault,
  Tag,
  TagListMessage,
  Timezone,
  UpgradeTarget,
  ValidDBInstanceModificationsMessage,
  ValidStorageOptions,
  VpcSecurityGroupMembership,
} from "../models/models_0";
import { NeptuneServiceException as __BaseException } from "../models/NeptuneServiceException";

/**
 * serializeAws_queryAddRoleToDBClusterCommand
 */
export const se_AddRoleToDBClusterCommand = async (
  input: AddRoleToDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddRoleToDBClusterMessage(input, context),
    Action: "AddRoleToDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAddSourceIdentifierToSubscriptionCommand
 */
export const se_AddSourceIdentifierToSubscriptionCommand = async (
  input: AddSourceIdentifierToSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddSourceIdentifierToSubscriptionMessage(input, context),
    Action: "AddSourceIdentifierToSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryApplyPendingMaintenanceActionCommand
 */
export const se_ApplyPendingMaintenanceActionCommand = async (
  input: ApplyPendingMaintenanceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ApplyPendingMaintenanceActionMessage(input, context),
    Action: "ApplyPendingMaintenanceAction",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopyDBClusterParameterGroupCommand
 */
export const se_CopyDBClusterParameterGroupCommand = async (
  input: CopyDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopyDBClusterParameterGroupMessage(input, context),
    Action: "CopyDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopyDBClusterSnapshotCommand
 */
export const se_CopyDBClusterSnapshotCommand = async (
  input: CopyDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopyDBClusterSnapshotMessage(input, context),
    Action: "CopyDBClusterSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopyDBParameterGroupCommand
 */
export const se_CopyDBParameterGroupCommand = async (
  input: CopyDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopyDBParameterGroupMessage(input, context),
    Action: "CopyDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBClusterCommand
 */
export const se_CreateDBClusterCommand = async (
  input: CreateDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBClusterMessage(input, context),
    Action: "CreateDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBClusterEndpointCommand
 */
export const se_CreateDBClusterEndpointCommand = async (
  input: CreateDBClusterEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBClusterEndpointMessage(input, context),
    Action: "CreateDBClusterEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBClusterParameterGroupCommand
 */
export const se_CreateDBClusterParameterGroupCommand = async (
  input: CreateDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBClusterParameterGroupMessage(input, context),
    Action: "CreateDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBClusterSnapshotCommand
 */
export const se_CreateDBClusterSnapshotCommand = async (
  input: CreateDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBClusterSnapshotMessage(input, context),
    Action: "CreateDBClusterSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBInstanceCommand
 */
export const se_CreateDBInstanceCommand = async (
  input: CreateDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBInstanceMessage(input, context),
    Action: "CreateDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBParameterGroupCommand
 */
export const se_CreateDBParameterGroupCommand = async (
  input: CreateDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBParameterGroupMessage(input, context),
    Action: "CreateDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBSubnetGroupCommand
 */
export const se_CreateDBSubnetGroupCommand = async (
  input: CreateDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBSubnetGroupMessage(input, context),
    Action: "CreateDBSubnetGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateEventSubscriptionCommand
 */
export const se_CreateEventSubscriptionCommand = async (
  input: CreateEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateEventSubscriptionMessage(input, context),
    Action: "CreateEventSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateGlobalClusterCommand
 */
export const se_CreateGlobalClusterCommand = async (
  input: CreateGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateGlobalClusterMessage(input, context),
    Action: "CreateGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBClusterCommand
 */
export const se_DeleteDBClusterCommand = async (
  input: DeleteDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBClusterMessage(input, context),
    Action: "DeleteDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBClusterEndpointCommand
 */
export const se_DeleteDBClusterEndpointCommand = async (
  input: DeleteDBClusterEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBClusterEndpointMessage(input, context),
    Action: "DeleteDBClusterEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBClusterParameterGroupCommand
 */
export const se_DeleteDBClusterParameterGroupCommand = async (
  input: DeleteDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBClusterParameterGroupMessage(input, context),
    Action: "DeleteDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBClusterSnapshotCommand
 */
export const se_DeleteDBClusterSnapshotCommand = async (
  input: DeleteDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBClusterSnapshotMessage(input, context),
    Action: "DeleteDBClusterSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBInstanceCommand
 */
export const se_DeleteDBInstanceCommand = async (
  input: DeleteDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBInstanceMessage(input, context),
    Action: "DeleteDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBParameterGroupCommand
 */
export const se_DeleteDBParameterGroupCommand = async (
  input: DeleteDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBParameterGroupMessage(input, context),
    Action: "DeleteDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBSubnetGroupCommand
 */
export const se_DeleteDBSubnetGroupCommand = async (
  input: DeleteDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBSubnetGroupMessage(input, context),
    Action: "DeleteDBSubnetGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteEventSubscriptionCommand
 */
export const se_DeleteEventSubscriptionCommand = async (
  input: DeleteEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteEventSubscriptionMessage(input, context),
    Action: "DeleteEventSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteGlobalClusterCommand
 */
export const se_DeleteGlobalClusterCommand = async (
  input: DeleteGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteGlobalClusterMessage(input, context),
    Action: "DeleteGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBClusterEndpointsCommand
 */
export const se_DescribeDBClusterEndpointsCommand = async (
  input: DescribeDBClusterEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClusterEndpointsMessage(input, context),
    Action: "DescribeDBClusterEndpoints",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBClusterParameterGroupsCommand
 */
export const se_DescribeDBClusterParameterGroupsCommand = async (
  input: DescribeDBClusterParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClusterParameterGroupsMessage(input, context),
    Action: "DescribeDBClusterParameterGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBClusterParametersCommand
 */
export const se_DescribeDBClusterParametersCommand = async (
  input: DescribeDBClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClusterParametersMessage(input, context),
    Action: "DescribeDBClusterParameters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBClustersCommand
 */
export const se_DescribeDBClustersCommand = async (
  input: DescribeDBClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClustersMessage(input, context),
    Action: "DescribeDBClusters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBClusterSnapshotAttributesCommand
 */
export const se_DescribeDBClusterSnapshotAttributesCommand = async (
  input: DescribeDBClusterSnapshotAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClusterSnapshotAttributesMessage(input, context),
    Action: "DescribeDBClusterSnapshotAttributes",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBClusterSnapshotsCommand
 */
export const se_DescribeDBClusterSnapshotsCommand = async (
  input: DescribeDBClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClusterSnapshotsMessage(input, context),
    Action: "DescribeDBClusterSnapshots",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBEngineVersionsCommand
 */
export const se_DescribeDBEngineVersionsCommand = async (
  input: DescribeDBEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBEngineVersionsMessage(input, context),
    Action: "DescribeDBEngineVersions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBInstancesCommand
 */
export const se_DescribeDBInstancesCommand = async (
  input: DescribeDBInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBInstancesMessage(input, context),
    Action: "DescribeDBInstances",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBParameterGroupsCommand
 */
export const se_DescribeDBParameterGroupsCommand = async (
  input: DescribeDBParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBParameterGroupsMessage(input, context),
    Action: "DescribeDBParameterGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBParametersCommand
 */
export const se_DescribeDBParametersCommand = async (
  input: DescribeDBParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBParametersMessage(input, context),
    Action: "DescribeDBParameters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBSubnetGroupsCommand
 */
export const se_DescribeDBSubnetGroupsCommand = async (
  input: DescribeDBSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBSubnetGroupsMessage(input, context),
    Action: "DescribeDBSubnetGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEngineDefaultClusterParametersCommand
 */
export const se_DescribeEngineDefaultClusterParametersCommand = async (
  input: DescribeEngineDefaultClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEngineDefaultClusterParametersMessage(input, context),
    Action: "DescribeEngineDefaultClusterParameters",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEventCategoriesCommand
 */
export const se_DescribeEventCategoriesCommand = async (
  input: DescribeEventCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEventCategoriesMessage(input, context),
    Action: "DescribeEventCategories",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEventSubscriptionsCommand
 */
export const se_DescribeEventSubscriptionsCommand = async (
  input: DescribeEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEventSubscriptionsMessage(input, context),
    Action: "DescribeEventSubscriptions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeGlobalClustersCommand
 */
export const se_DescribeGlobalClustersCommand = async (
  input: DescribeGlobalClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeGlobalClustersMessage(input, context),
    Action: "DescribeGlobalClusters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeOrderableDBInstanceOptionsCommand
 */
export const se_DescribeOrderableDBInstanceOptionsCommand = async (
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeOrderableDBInstanceOptionsMessage(input, context),
    Action: "DescribeOrderableDBInstanceOptions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribePendingMaintenanceActionsCommand
 */
export const se_DescribePendingMaintenanceActionsCommand = async (
  input: DescribePendingMaintenanceActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribePendingMaintenanceActionsMessage(input, context),
    Action: "DescribePendingMaintenanceActions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeValidDBInstanceModificationsCommand
 */
export const se_DescribeValidDBInstanceModificationsCommand = async (
  input: DescribeValidDBInstanceModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeValidDBInstanceModificationsMessage(input, context),
    Action: "DescribeValidDBInstanceModifications",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryFailoverDBClusterCommand
 */
export const se_FailoverDBClusterCommand = async (
  input: FailoverDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_FailoverDBClusterMessage(input, context),
    Action: "FailoverDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryFailoverGlobalClusterCommand
 */
export const se_FailoverGlobalClusterCommand = async (
  input: FailoverGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_FailoverGlobalClusterMessage(input, context),
    Action: "FailoverGlobalCluster",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBClusterCommand
 */
export const se_ModifyDBClusterCommand = async (
  input: ModifyDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBClusterMessage(input, context),
    Action: "ModifyDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBClusterEndpointCommand
 */
export const se_ModifyDBClusterEndpointCommand = async (
  input: ModifyDBClusterEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBClusterEndpointMessage(input, context),
    Action: "ModifyDBClusterEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBClusterParameterGroupCommand
 */
export const se_ModifyDBClusterParameterGroupCommand = async (
  input: ModifyDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBClusterParameterGroupMessage(input, context),
    Action: "ModifyDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBClusterSnapshotAttributeCommand
 */
export const se_ModifyDBClusterSnapshotAttributeCommand = async (
  input: ModifyDBClusterSnapshotAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBClusterSnapshotAttributeMessage(input, context),
    Action: "ModifyDBClusterSnapshotAttribute",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBInstanceCommand
 */
export const se_ModifyDBInstanceCommand = async (
  input: ModifyDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBInstanceMessage(input, context),
    Action: "ModifyDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBParameterGroupCommand
 */
export const se_ModifyDBParameterGroupCommand = async (
  input: ModifyDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBParameterGroupMessage(input, context),
    Action: "ModifyDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBSubnetGroupCommand
 */
export const se_ModifyDBSubnetGroupCommand = async (
  input: ModifyDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBSubnetGroupMessage(input, context),
    Action: "ModifyDBSubnetGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyEventSubscriptionCommand
 */
export const se_ModifyEventSubscriptionCommand = async (
  input: ModifyEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyEventSubscriptionMessage(input, context),
    Action: "ModifyEventSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyGlobalClusterCommand
 */
export const se_ModifyGlobalClusterCommand = async (
  input: ModifyGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyGlobalClusterMessage(input, context),
    Action: "ModifyGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPromoteReadReplicaDBClusterCommand
 */
export const se_PromoteReadReplicaDBClusterCommand = async (
  input: PromoteReadReplicaDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PromoteReadReplicaDBClusterMessage(input, context),
    Action: "PromoteReadReplicaDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRebootDBInstanceCommand
 */
export const se_RebootDBInstanceCommand = async (
  input: RebootDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RebootDBInstanceMessage(input, context),
    Action: "RebootDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveFromGlobalClusterCommand
 */
export const se_RemoveFromGlobalClusterCommand = async (
  input: RemoveFromGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveFromGlobalClusterMessage(input, context),
    Action: "RemoveFromGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveRoleFromDBClusterCommand
 */
export const se_RemoveRoleFromDBClusterCommand = async (
  input: RemoveRoleFromDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveRoleFromDBClusterMessage(input, context),
    Action: "RemoveRoleFromDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand
 */
export const se_RemoveSourceIdentifierFromSubscriptionCommand = async (
  input: RemoveSourceIdentifierFromSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveSourceIdentifierFromSubscriptionMessage(input, context),
    Action: "RemoveSourceIdentifierFromSubscription",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResetDBClusterParameterGroupCommand
 */
export const se_ResetDBClusterParameterGroupCommand = async (
  input: ResetDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResetDBClusterParameterGroupMessage(input, context),
    Action: "ResetDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResetDBParameterGroupCommand
 */
export const se_ResetDBParameterGroupCommand = async (
  input: ResetDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResetDBParameterGroupMessage(input, context),
    Action: "ResetDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestoreDBClusterFromSnapshotCommand
 */
export const se_RestoreDBClusterFromSnapshotCommand = async (
  input: RestoreDBClusterFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreDBClusterFromSnapshotMessage(input, context),
    Action: "RestoreDBClusterFromSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestoreDBClusterToPointInTimeCommand
 */
export const se_RestoreDBClusterToPointInTimeCommand = async (
  input: RestoreDBClusterToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreDBClusterToPointInTimeMessage(input, context),
    Action: "RestoreDBClusterToPointInTime",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartDBClusterCommand
 */
export const se_StartDBClusterCommand = async (
  input: StartDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartDBClusterMessage(input, context),
    Action: "StartDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStopDBClusterCommand
 */
export const se_StopDBClusterCommand = async (
  input: StopDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StopDBClusterMessage(input, context),
    Action: "StopDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddRoleToDBClusterCommand
 */
export const de_AddRoleToDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddRoleToDBClusterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddRoleToDBClusterCommandError
 */
const de_AddRoleToDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterRoleAlreadyExists":
    case "com.amazonaws.neptune#DBClusterRoleAlreadyExistsFault":
      throw await de_DBClusterRoleAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterRoleQuotaExceeded":
    case "com.amazonaws.neptune#DBClusterRoleQuotaExceededFault":
      throw await de_DBClusterRoleQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryAddSourceIdentifierToSubscriptionCommand
 */
export const de_AddSourceIdentifierToSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddSourceIdentifierToSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddSourceIdentifierToSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddSourceIdentifierToSubscriptionResult(data.AddSourceIdentifierToSubscriptionResult, context);
  const response: AddSourceIdentifierToSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError
 */
const de_AddSourceIdentifierToSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddSourceIdentifierToSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SourceNotFound":
    case "com.amazonaws.neptune#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryAddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryApplyPendingMaintenanceActionCommand
 */
export const de_ApplyPendingMaintenanceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ApplyPendingMaintenanceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplyPendingMaintenanceActionResult(data.ApplyPendingMaintenanceActionResult, context);
  const response: ApplyPendingMaintenanceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryApplyPendingMaintenanceActionCommandError
 */
const de_ApplyPendingMaintenanceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.neptune#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCopyDBClusterParameterGroupCommand
 */
export const de_CopyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyDBClusterParameterGroupResult(data.CopyDBClusterParameterGroupResult, context);
  const response: CopyDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopyDBClusterParameterGroupCommandError
 */
const de_CopyDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupAlreadyExists":
    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await de_DBParameterGroupQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCopyDBClusterSnapshotCommand
 */
export const de_CopyDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyDBClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyDBClusterSnapshotResult(data.CopyDBClusterSnapshotResult, context);
  const response: CopyDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopyDBClusterSnapshotCommandError
 */
const de_CopyDBClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryCopyDBParameterGroupCommand
 */
export const de_CopyDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyDBParameterGroupResult(data.CopyDBParameterGroupResult, context);
  const response: CopyDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopyDBParameterGroupCommandError
 */
const de_CopyDBParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupAlreadyExists":
    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await de_DBParameterGroupQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateDBClusterCommand
 */
export const de_CreateDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBClusterResult(data.CreateDBClusterResult, context);
  const response: CreateDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBClusterCommandError
 */
const de_CreateDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await de_InvalidGlobalClusterStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateDBClusterEndpointCommand
 */
export const de_CreateDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBClusterEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBClusterEndpointOutput(data.CreateDBClusterEndpointResult, context);
  const response: CreateDBClusterEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBClusterEndpointCommandError
 */
const de_CreateDBClusterEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterEndpointAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterEndpointAlreadyExistsFault":
      throw await de_DBClusterEndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterEndpointQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterEndpointQuotaExceededFault":
      throw await de_DBClusterEndpointQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateDBClusterParameterGroupCommand
 */
export const de_CreateDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBClusterParameterGroupResult(data.CreateDBClusterParameterGroupResult, context);
  const response: CreateDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBClusterParameterGroupCommandError
 */
const de_CreateDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupAlreadyExists":
    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await de_DBParameterGroupQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateDBClusterSnapshotCommand
 */
export const de_CreateDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBClusterSnapshotResult(data.CreateDBClusterSnapshotResult, context);
  const response: CreateDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBClusterSnapshotCommandError
 */
const de_CreateDBClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryCreateDBInstanceCommand
 */
export const de_CreateDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBInstanceResult(data.CreateDBInstanceResult, context);
  const response: CreateDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBInstanceCommandError
 */
const de_CreateDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.neptune#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.neptune#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.neptune#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.neptune#StorageTypeNotSupportedFault":
      throw await de_StorageTypeNotSupportedFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateDBParameterGroupCommand
 */
export const de_CreateDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBParameterGroupResult(data.CreateDBParameterGroupResult, context);
  const response: CreateDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBParameterGroupCommandError
 */
const de_CreateDBParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupAlreadyExists":
    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await de_DBParameterGroupQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateDBSubnetGroupCommand
 */
export const de_CreateDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBSubnetGroupResult(data.CreateDBSubnetGroupResult, context);
  const response: CreateDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBSubnetGroupCommandError
 */
const de_CreateDBSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupAlreadyExists":
    case "com.amazonaws.neptune#DBSubnetGroupAlreadyExistsFault":
      throw await de_DBSubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBSubnetGroupQuotaExceededFault":
      throw await de_DBSubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.neptune#DBSubnetQuotaExceededFault":
      throw await de_DBSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
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
 * deserializeAws_queryCreateEventSubscriptionCommand
 */
export const de_CreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEventSubscriptionResult(data.CreateEventSubscriptionResult, context);
  const response: CreateEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateEventSubscriptionCommandError
 */
const de_CreateEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventSubscriptionQuotaExceeded":
    case "com.amazonaws.neptune#EventSubscriptionQuotaExceededFault":
      throw await de_EventSubscriptionQuotaExceededFaultRes(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.neptune#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.neptune#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.neptune#SNSTopicArnNotFoundFault":
      throw await de_SNSTopicArnNotFoundFaultRes(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.neptune#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.neptune#SubscriptionAlreadyExistFault":
      throw await de_SubscriptionAlreadyExistFaultRes(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault":
      throw await de_SubscriptionCategoryNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateGlobalClusterCommand
 */
export const de_CreateGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGlobalClusterResult(data.CreateGlobalClusterResult, context);
  const response: CreateGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateGlobalClusterCommandError
 */
const de_CreateGlobalClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterAlreadyExistsFault":
    case "com.amazonaws.neptune#GlobalClusterAlreadyExistsFault":
      throw await de_GlobalClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "GlobalClusterQuotaExceededFault":
    case "com.amazonaws.neptune#GlobalClusterQuotaExceededFault":
      throw await de_GlobalClusterQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBClusterCommand
 */
export const de_DeleteDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBClusterResult(data.DeleteDBClusterResult, context);
  const response: DeleteDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBClusterCommandError
 */
const de_DeleteDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryDeleteDBClusterEndpointCommand
 */
export const de_DeleteDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBClusterEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBClusterEndpointOutput(data.DeleteDBClusterEndpointResult, context);
  const response: DeleteDBClusterEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBClusterEndpointCommandError
 */
const de_DeleteDBClusterEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterEndpointNotFoundFault":
    case "com.amazonaws.neptune#DBClusterEndpointNotFoundFault":
      throw await de_DBClusterEndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault":
      throw await de_InvalidDBClusterEndpointStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBClusterParameterGroupCommand
 */
export const de_DeleteDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBClusterParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBClusterParameterGroupCommandError
 */
const de_DeleteDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBClusterSnapshotCommand
 */
export const de_DeleteDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBClusterSnapshotResult(data.DeleteDBClusterSnapshotResult, context);
  const response: DeleteDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBClusterSnapshotCommandError
 */
const de_DeleteDBClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBInstanceCommand
 */
export const de_DeleteDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBInstanceResult(data.DeleteDBInstanceResult, context);
  const response: DeleteDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBInstanceCommandError
 */
const de_DeleteDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.neptune#DBSnapshotAlreadyExistsFault":
      throw await de_DBSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryDeleteDBParameterGroupCommand
 */
export const de_DeleteDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBParameterGroupCommandError
 */
const de_DeleteDBParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBSubnetGroupCommand
 */
export const de_DeleteDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBSubnetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBSubnetGroupCommandError
 */
const de_DeleteDBSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetStateFault":
      throw await de_InvalidDBSubnetStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteEventSubscriptionCommand
 */
export const de_DeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEventSubscriptionResult(data.DeleteEventSubscriptionResult, context);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEventSubscriptionCommandError
 */
const de_DeleteEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidEventSubscriptionState":
    case "com.amazonaws.neptune#InvalidEventSubscriptionStateFault":
      throw await de_InvalidEventSubscriptionStateFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteGlobalClusterCommand
 */
export const de_DeleteGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGlobalClusterResult(data.DeleteGlobalClusterResult, context);
  const response: DeleteGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteGlobalClusterCommandError
 */
const de_DeleteGlobalClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await de_InvalidGlobalClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClusterEndpointsCommand
 */
export const de_DescribeDBClusterEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClusterEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterEndpointMessage(data.DescribeDBClusterEndpointsResult, context);
  const response: DescribeDBClusterEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterEndpointsCommandError
 */
const de_DescribeDBClusterEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClusterParameterGroupsCommand
 */
export const de_DescribeDBClusterParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClusterParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterParameterGroupsMessage(data.DescribeDBClusterParameterGroupsResult, context);
  const response: DescribeDBClusterParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterParameterGroupsCommandError
 */
const de_DescribeDBClusterParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClusterParametersCommand
 */
export const de_DescribeDBClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterParameterGroupDetails(data.DescribeDBClusterParametersResult, context);
  const response: DescribeDBClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterParametersCommandError
 */
const de_DescribeDBClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClustersCommand
 */
export const de_DescribeDBClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterMessage(data.DescribeDBClustersResult, context);
  const response: DescribeDBClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClustersCommandError
 */
const de_DescribeDBClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand
 */
export const de_DescribeDBClusterSnapshotAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClusterSnapshotAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBClusterSnapshotAttributesResult(data.DescribeDBClusterSnapshotAttributesResult, context);
  const response: DescribeDBClusterSnapshotAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError
 */
const de_DescribeDBClusterSnapshotAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClusterSnapshotsCommand
 */
export const de_DescribeDBClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterSnapshotMessage(data.DescribeDBClusterSnapshotsResult, context);
  const response: DescribeDBClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterSnapshotsCommandError
 */
const de_DescribeDBClusterSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBEngineVersionsCommand
 */
export const de_DescribeDBEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBEngineVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBEngineVersionMessage(data.DescribeDBEngineVersionsResult, context);
  const response: DescribeDBEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBEngineVersionsCommandError
 */
const de_DescribeDBEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBEngineVersionsCommandOutput> => {
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
 * deserializeAws_queryDescribeDBInstancesCommand
 */
export const de_DescribeDBInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBInstanceMessage(data.DescribeDBInstancesResult, context);
  const response: DescribeDBInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBInstancesCommandError
 */
const de_DescribeDBInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBParameterGroupsCommand
 */
export const de_DescribeDBParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBParameterGroupsMessage(data.DescribeDBParameterGroupsResult, context);
  const response: DescribeDBParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBParameterGroupsCommandError
 */
const de_DescribeDBParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBParametersCommand
 */
export const de_DescribeDBParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBParameterGroupDetails(data.DescribeDBParametersResult, context);
  const response: DescribeDBParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBParametersCommandError
 */
const de_DescribeDBParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBSubnetGroupsCommand
 */
export const de_DescribeDBSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBSubnetGroupMessage(data.DescribeDBSubnetGroupsResult, context);
  const response: DescribeDBSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBSubnetGroupsCommandError
 */
const de_DescribeDBSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeEngineDefaultClusterParametersCommand
 */
export const de_DescribeEngineDefaultClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEngineDefaultClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEngineDefaultClusterParametersResult(
    data.DescribeEngineDefaultClusterParametersResult,
    context
  );
  const response: DescribeEngineDefaultClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError
 */
const de_DescribeEngineDefaultClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultClusterParametersCommandOutput> => {
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeEventCategoriesCommand
 */
export const de_DescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EventCategoriesMessage(data.DescribeEventCategoriesResult, context);
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventCategoriesCommandError
 */
const de_DescribeEventCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeEventSubscriptionsCommand
 */
export const de_DescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EventSubscriptionsMessage(data.DescribeEventSubscriptionsResult, context);
  const response: DescribeEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventSubscriptionsCommandError
 */
const de_DescribeEventSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeGlobalClustersCommand
 */
export const de_DescribeGlobalClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGlobalClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GlobalClustersMessage(data.DescribeGlobalClustersResult, context);
  const response: DescribeGlobalClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeGlobalClustersCommandError
 */
const de_DescribeGlobalClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand
 */
export const de_DescribeOrderableDBInstanceOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrderableDBInstanceOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OrderableDBInstanceOptionsMessage(data.DescribeOrderableDBInstanceOptionsResult, context);
  const response: DescribeOrderableDBInstanceOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError
 */
const de_DescribeOrderableDBInstanceOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
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
 * deserializeAws_queryDescribePendingMaintenanceActionsCommand
 */
export const de_DescribePendingMaintenanceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePendingMaintenanceActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PendingMaintenanceActionsMessage(data.DescribePendingMaintenanceActionsResult, context);
  const response: DescribePendingMaintenanceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribePendingMaintenanceActionsCommandError
 */
const de_DescribePendingMaintenanceActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.neptune#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeValidDBInstanceModificationsCommand
 */
export const de_DescribeValidDBInstanceModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeValidDBInstanceModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeValidDBInstanceModificationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeValidDBInstanceModificationsResult(data.DescribeValidDBInstanceModificationsResult, context);
  const response: DescribeValidDBInstanceModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeValidDBInstanceModificationsCommandError
 */
const de_DescribeValidDBInstanceModificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeValidDBInstanceModificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryFailoverDBClusterCommand
 */
export const de_FailoverDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FailoverDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FailoverDBClusterResult(data.FailoverDBClusterResult, context);
  const response: FailoverDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryFailoverDBClusterCommandError
 */
const de_FailoverDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryFailoverGlobalClusterCommand
 */
export const de_FailoverGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FailoverGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FailoverGlobalClusterResult(data.FailoverGlobalClusterResult, context);
  const response: FailoverGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryFailoverGlobalClusterCommandError
 */
const de_FailoverGlobalClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await de_InvalidGlobalClusterStateFaultRes(parsedOutput, context);
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
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBClusterCommand
 */
export const de_ModifyDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBClusterResult(data.ModifyDBClusterResult, context);
  const response: ModifyDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBClusterCommandError
 */
const de_ModifyDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBClusterEndpointCommand
 */
export const de_ModifyDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBClusterEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBClusterEndpointOutput(data.ModifyDBClusterEndpointResult, context);
  const response: ModifyDBClusterEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBClusterEndpointCommandError
 */
const de_ModifyDBClusterEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterEndpointNotFoundFault":
    case "com.amazonaws.neptune#DBClusterEndpointNotFoundFault":
      throw await de_DBClusterEndpointNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault":
      throw await de_InvalidDBClusterEndpointStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBClusterParameterGroupCommand
 */
export const de_ModifyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterParameterGroupNameMessage(data.ModifyDBClusterParameterGroupResult, context);
  const response: ModifyDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBClusterParameterGroupCommandError
 */
const de_ModifyDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBClusterSnapshotAttributeCommand
 */
export const de_ModifyDBClusterSnapshotAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBClusterSnapshotAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBClusterSnapshotAttributeResult(data.ModifyDBClusterSnapshotAttributeResult, context);
  const response: ModifyDBClusterSnapshotAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError
 */
const de_ModifyDBClusterSnapshotAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SharedSnapshotQuotaExceededFault":
      throw await de_SharedSnapshotQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBInstanceCommand
 */
export const de_ModifyDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBInstanceResult(data.ModifyDBInstanceResult, context);
  const response: ModifyDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBInstanceCommandError
 */
const de_ModifyDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.neptune#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.neptune#CertificateNotFoundFault":
      throw await de_CertificateNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBUpgradeDependencyFailure":
    case "com.amazonaws.neptune#DBUpgradeDependencyFailureFault":
      throw await de_DBUpgradeDependencyFailureFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.neptune#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.neptune#StorageTypeNotSupportedFault":
      throw await de_StorageTypeNotSupportedFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBParameterGroupCommand
 */
export const de_ModifyDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBParameterGroupNameMessage(data.ModifyDBParameterGroupResult, context);
  const response: ModifyDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBParameterGroupCommandError
 */
const de_ModifyDBParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBSubnetGroupCommand
 */
export const de_ModifyDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBSubnetGroupResult(data.ModifyDBSubnetGroupResult, context);
  const response: ModifyDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBSubnetGroupCommandError
 */
const de_ModifyDBSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.neptune#DBSubnetQuotaExceededFault":
      throw await de_DBSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.neptune#SubnetAlreadyInUse":
      throw await de_SubnetAlreadyInUseRes(parsedOutput, context);
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
 * deserializeAws_queryModifyEventSubscriptionCommand
 */
export const de_ModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyEventSubscriptionResult(data.ModifyEventSubscriptionResult, context);
  const response: ModifyEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyEventSubscriptionCommandError
 */
const de_ModifyEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventSubscriptionQuotaExceeded":
    case "com.amazonaws.neptune#EventSubscriptionQuotaExceededFault":
      throw await de_EventSubscriptionQuotaExceededFaultRes(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.neptune#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.neptune#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.neptune#SNSTopicArnNotFoundFault":
      throw await de_SNSTopicArnNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault":
      throw await de_SubscriptionCategoryNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyGlobalClusterCommand
 */
export const de_ModifyGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyGlobalClusterResult(data.ModifyGlobalClusterResult, context);
  const response: ModifyGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyGlobalClusterCommandError
 */
const de_ModifyGlobalClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await de_InvalidGlobalClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryPromoteReadReplicaDBClusterCommand
 */
export const de_PromoteReadReplicaDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PromoteReadReplicaDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PromoteReadReplicaDBClusterResult(data.PromoteReadReplicaDBClusterResult, context);
  const response: PromoteReadReplicaDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPromoteReadReplicaDBClusterCommandError
 */
const de_PromoteReadReplicaDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryRebootDBInstanceCommand
 */
export const de_RebootDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootDBInstanceResult(data.RebootDBInstanceResult, context);
  const response: RebootDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRebootDBInstanceCommandError
 */
const de_RebootDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryRemoveFromGlobalClusterCommand
 */
export const de_RemoveFromGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFromGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveFromGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveFromGlobalClusterResult(data.RemoveFromGlobalClusterResult, context);
  const response: RemoveFromGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRemoveFromGlobalClusterCommandError
 */
const de_RemoveFromGlobalClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFromGlobalClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await de_InvalidGlobalClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryRemoveRoleFromDBClusterCommand
 */
export const de_RemoveRoleFromDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveRoleFromDBClusterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveRoleFromDBClusterCommandError
 */
const de_RemoveRoleFromDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterRoleNotFound":
    case "com.amazonaws.neptune#DBClusterRoleNotFoundFault":
      throw await de_DBClusterRoleNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand
 */
export const de_RemoveSourceIdentifierFromSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveSourceIdentifierFromSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveSourceIdentifierFromSubscriptionResult(
    data.RemoveSourceIdentifierFromSubscriptionResult,
    context
  );
  const response: RemoveSourceIdentifierFromSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError
 */
const de_RemoveSourceIdentifierFromSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SourceNotFound":
    case "com.amazonaws.neptune#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
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
  await collectBody(output.body, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryResetDBClusterParameterGroupCommand
 */
export const de_ResetDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterParameterGroupNameMessage(data.ResetDBClusterParameterGroupResult, context);
  const response: ResetDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryResetDBClusterParameterGroupCommandError
 */
const de_ResetDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryResetDBParameterGroupCommand
 */
export const de_ResetDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBParameterGroupNameMessage(data.ResetDBParameterGroupResult, context);
  const response: ResetDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryResetDBParameterGroupCommandError
 */
const de_ResetDBParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryRestoreDBClusterFromSnapshotCommand
 */
export const de_RestoreDBClusterFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreDBClusterFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreDBClusterFromSnapshotResult(data.RestoreDBClusterFromSnapshotResult, context);
  const response: RestoreDBClusterFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRestoreDBClusterFromSnapshotCommandError
 */
const de_RestoreDBClusterFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault":
      throw await de_InsufficientDBClusterCapacityFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.neptune#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.neptune#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryRestoreDBClusterToPointInTimeCommand
 */
export const de_RestoreDBClusterToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreDBClusterToPointInTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreDBClusterToPointInTimeResult(data.RestoreDBClusterToPointInTimeResult, context);
  const response: RestoreDBClusterToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRestoreDBClusterToPointInTimeCommandError
 */
const de_RestoreDBClusterToPointInTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterToPointInTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault":
      throw await de_InsufficientDBClusterCapacityFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.neptune#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.neptune#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryStartDBClusterCommand
 */
export const de_StartDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDBClusterResult(data.StartDBClusterResult, context);
  const response: StartDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStartDBClusterCommandError
 */
const de_StartDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryStopDBClusterCommand
 */
export const de_StopDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopDBClusterResult(data.StopDBClusterResult, context);
  const response: StopDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStopDBClusterCommandError
 */
const de_StopDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCertificateNotFoundFaultRes
 */
const de_CertificateNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateNotFoundFault(body.Error, context);
  const exception = new CertificateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterAlreadyExistsFaultRes
 */
const de_DBClusterAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterEndpointAlreadyExistsFaultRes
 */
const de_DBClusterEndpointAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterEndpointAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterEndpointAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterEndpointAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterEndpointNotFoundFaultRes
 */
const de_DBClusterEndpointNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterEndpointNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterEndpointNotFoundFault(body.Error, context);
  const exception = new DBClusterEndpointNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterEndpointQuotaExceededFaultRes
 */
const de_DBClusterEndpointQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterEndpointQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterEndpointQuotaExceededFault(body.Error, context);
  const exception = new DBClusterEndpointQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterNotFoundFaultRes
 */
const de_DBClusterNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterNotFoundFault(body.Error, context);
  const exception = new DBClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterParameterGroupNotFoundFaultRes
 */
const de_DBClusterParameterGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterParameterGroupNotFoundFault(body.Error, context);
  const exception = new DBClusterParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterQuotaExceededFaultRes
 */
const de_DBClusterQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterQuotaExceededFault(body.Error, context);
  const exception = new DBClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterRoleAlreadyExistsFaultRes
 */
const de_DBClusterRoleAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterRoleAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterRoleAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterRoleAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterRoleNotFoundFaultRes
 */
const de_DBClusterRoleNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterRoleNotFoundFault(body.Error, context);
  const exception = new DBClusterRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterRoleQuotaExceededFaultRes
 */
const de_DBClusterRoleQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterRoleQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterRoleQuotaExceededFault(body.Error, context);
  const exception = new DBClusterRoleQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultRes
 */
const de_DBClusterSnapshotAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterSnapshotAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterSnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterSnapshotNotFoundFaultRes
 */
const de_DBClusterSnapshotNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterSnapshotNotFoundFault(body.Error, context);
  const exception = new DBClusterSnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBInstanceAlreadyExistsFaultRes
 */
const de_DBInstanceAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceAlreadyExistsFault(body.Error, context);
  const exception = new DBInstanceAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBInstanceNotFoundFaultRes
 */
const de_DBInstanceNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceNotFoundFault(body.Error, context);
  const exception = new DBInstanceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBParameterGroupAlreadyExistsFaultRes
 */
const de_DBParameterGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBParameterGroupAlreadyExistsFault(body.Error, context);
  const exception = new DBParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBParameterGroupNotFoundFaultRes
 */
const de_DBParameterGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBParameterGroupNotFoundFault(body.Error, context);
  const exception = new DBParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBParameterGroupQuotaExceededFaultRes
 */
const de_DBParameterGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBParameterGroupQuotaExceededFault(body.Error, context);
  const exception = new DBParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSecurityGroupNotFoundFaultRes
 */
const de_DBSecurityGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSecurityGroupNotFoundFault(body.Error, context);
  const exception = new DBSecurityGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSnapshotAlreadyExistsFaultRes
 */
const de_DBSnapshotAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSnapshotAlreadyExistsFault(body.Error, context);
  const exception = new DBSnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSnapshotNotFoundFaultRes
 */
const de_DBSnapshotNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSnapshotNotFoundFault(body.Error, context);
  const exception = new DBSnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSubnetGroupAlreadyExistsFaultRes
 */
const de_DBSubnetGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSubnetGroupAlreadyExistsFault(body.Error, context);
  const exception = new DBSubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsRes
 */
const de_DBSubnetGroupDoesNotCoverEnoughAZsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupDoesNotCoverEnoughAZs> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSubnetGroupDoesNotCoverEnoughAZs(body.Error, context);
  const exception = new DBSubnetGroupDoesNotCoverEnoughAZs({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSubnetGroupNotFoundFaultRes
 */
const de_DBSubnetGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSubnetGroupNotFoundFault(body.Error, context);
  const exception = new DBSubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSubnetGroupQuotaExceededFaultRes
 */
const de_DBSubnetGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSubnetGroupQuotaExceededFault(body.Error, context);
  const exception = new DBSubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSubnetQuotaExceededFaultRes
 */
const de_DBSubnetQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSubnetQuotaExceededFault(body.Error, context);
  const exception = new DBSubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBUpgradeDependencyFailureFaultRes
 */
const de_DBUpgradeDependencyFailureFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBUpgradeDependencyFailureFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBUpgradeDependencyFailureFault(body.Error, context);
  const exception = new DBUpgradeDependencyFailureFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDomainNotFoundFaultRes
 */
const de_DomainNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<DomainNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DomainNotFoundFault(body.Error, context);
  const exception = new DomainNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEventSubscriptionQuotaExceededFaultRes
 */
const de_EventSubscriptionQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventSubscriptionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventSubscriptionQuotaExceededFault(body.Error, context);
  const exception = new EventSubscriptionQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryGlobalClusterAlreadyExistsFaultRes
 */
const de_GlobalClusterAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GlobalClusterAlreadyExistsFault(body.Error, context);
  const exception = new GlobalClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryGlobalClusterNotFoundFaultRes
 */
const de_GlobalClusterNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GlobalClusterNotFoundFault(body.Error, context);
  const exception = new GlobalClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryGlobalClusterQuotaExceededFaultRes
 */
const de_GlobalClusterQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GlobalClusterQuotaExceededFault(body.Error, context);
  const exception = new GlobalClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInstanceQuotaExceededFaultRes
 */
const de_InstanceQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceQuotaExceededFault(body.Error, context);
  const exception = new InstanceQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientDBClusterCapacityFaultRes
 */
const de_InsufficientDBClusterCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDBClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientDBClusterCapacityFault(body.Error, context);
  const exception = new InsufficientDBClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientDBInstanceCapacityFaultRes
 */
const de_InsufficientDBInstanceCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDBInstanceCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientDBInstanceCapacityFault(body.Error, context);
  const exception = new InsufficientDBInstanceCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientStorageClusterCapacityFaultRes
 */
const de_InsufficientStorageClusterCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientStorageClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientStorageClusterCapacityFault(body.Error, context);
  const exception = new InsufficientStorageClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBClusterEndpointStateFaultRes
 */
const de_InvalidDBClusterEndpointStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterEndpointStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBClusterEndpointStateFault(body.Error, context);
  const exception = new InvalidDBClusterEndpointStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBClusterSnapshotStateFaultRes
 */
const de_InvalidDBClusterSnapshotStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBClusterSnapshotStateFault(body.Error, context);
  const exception = new InvalidDBClusterSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBClusterStateFaultRes
 */
const de_InvalidDBClusterStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBClusterStateFault(body.Error, context);
  const exception = new InvalidDBClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBInstanceStateFaultRes
 */
const de_InvalidDBInstanceStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBInstanceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBInstanceStateFault(body.Error, context);
  const exception = new InvalidDBInstanceStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBParameterGroupStateFaultRes
 */
const de_InvalidDBParameterGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBParameterGroupStateFault(body.Error, context);
  const exception = new InvalidDBParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBSecurityGroupStateFaultRes
 */
const de_InvalidDBSecurityGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBSecurityGroupStateFault(body.Error, context);
  const exception = new InvalidDBSecurityGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBSnapshotStateFaultRes
 */
const de_InvalidDBSnapshotStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBSnapshotStateFault(body.Error, context);
  const exception = new InvalidDBSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBSubnetGroupStateFaultRes
 */
const de_InvalidDBSubnetGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBSubnetGroupStateFault(body.Error, context);
  const exception = new InvalidDBSubnetGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBSubnetStateFaultRes
 */
const de_InvalidDBSubnetStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBSubnetStateFault(body.Error, context);
  const exception = new InvalidDBSubnetStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidEventSubscriptionStateFaultRes
 */
const de_InvalidEventSubscriptionStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventSubscriptionStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEventSubscriptionStateFault(body.Error, context);
  const exception = new InvalidEventSubscriptionStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidGlobalClusterStateFaultRes
 */
const de_InvalidGlobalClusterStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGlobalClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGlobalClusterStateFault(body.Error, context);
  const exception = new InvalidGlobalClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidRestoreFaultRes
 */
const de_InvalidRestoreFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidRestoreFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRestoreFault(body.Error, context);
  const exception = new InvalidRestoreFault({
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
 * deserializeAws_queryKMSKeyNotAccessibleFaultRes
 */
const de_KMSKeyNotAccessibleFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSKeyNotAccessibleFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSKeyNotAccessibleFault(body.Error, context);
  const exception = new KMSKeyNotAccessibleFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOptionGroupNotFoundFaultRes
 */
const de_OptionGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptionGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OptionGroupNotFoundFault(body.Error, context);
  const exception = new OptionGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryProvisionedIopsNotAvailableInAZFaultRes
 */
const de_ProvisionedIopsNotAvailableInAZFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedIopsNotAvailableInAZFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ProvisionedIopsNotAvailableInAZFault(body.Error, context);
  const exception = new ProvisionedIopsNotAvailableInAZFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundFaultRes
 */
const de_ResourceNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundFault(body.Error, context);
  const exception = new ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySharedSnapshotQuotaExceededFaultRes
 */
const de_SharedSnapshotQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SharedSnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SharedSnapshotQuotaExceededFault(body.Error, context);
  const exception = new SharedSnapshotQuotaExceededFault({
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
 * deserializeAws_querySNSInvalidTopicFaultRes
 */
const de_SNSInvalidTopicFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSInvalidTopicFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SNSInvalidTopicFault(body.Error, context);
  const exception = new SNSInvalidTopicFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySNSNoAuthorizationFaultRes
 */
const de_SNSNoAuthorizationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSNoAuthorizationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SNSNoAuthorizationFault(body.Error, context);
  const exception = new SNSNoAuthorizationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySNSTopicArnNotFoundFaultRes
 */
const de_SNSTopicArnNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSTopicArnNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SNSTopicArnNotFoundFault(body.Error, context);
  const exception = new SNSTopicArnNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySourceNotFoundFaultRes
 */
const de_SourceNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<SourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SourceNotFoundFault(body.Error, context);
  const exception = new SourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryStorageQuotaExceededFaultRes
 */
const de_StorageQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StorageQuotaExceededFault(body.Error, context);
  const exception = new StorageQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryStorageTypeNotSupportedFaultRes
 */
const de_StorageTypeNotSupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageTypeNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StorageTypeNotSupportedFault(body.Error, context);
  const exception = new StorageTypeNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubnetAlreadyInUseRes
 */
const de_SubnetAlreadyInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<SubnetAlreadyInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetAlreadyInUse(body.Error, context);
  const exception = new SubnetAlreadyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionAlreadyExistFaultRes
 */
const de_SubscriptionAlreadyExistFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionAlreadyExistFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionAlreadyExistFault(body.Error, context);
  const exception = new SubscriptionAlreadyExistFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionCategoryNotFoundFaultRes
 */
const de_SubscriptionCategoryNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionCategoryNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionCategoryNotFoundFault(body.Error, context);
  const exception = new SubscriptionCategoryNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionNotFoundFaultRes
 */
const de_SubscriptionNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionNotFoundFault(body.Error, context);
  const exception = new SubscriptionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAddRoleToDBClusterMessage
 */
const se_AddRoleToDBClusterMessage = (input: AddRoleToDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.FeatureName != null) {
    entries["FeatureName"] = input.FeatureName;
  }
  return entries;
};

/**
 * serializeAws_queryAddSourceIdentifierToSubscriptionMessage
 */
const se_AddSourceIdentifierToSubscriptionMessage = (
  input: AddSourceIdentifierToSubscriptionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  if (input.SourceIdentifier != null) {
    entries["SourceIdentifier"] = input.SourceIdentifier;
  }
  return entries;
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
 * serializeAws_queryApplyPendingMaintenanceActionMessage
 */
const se_ApplyPendingMaintenanceActionMessage = (
  input: ApplyPendingMaintenanceActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceIdentifier != null) {
    entries["ResourceIdentifier"] = input.ResourceIdentifier;
  }
  if (input.ApplyAction != null) {
    entries["ApplyAction"] = input.ApplyAction;
  }
  if (input.OptInType != null) {
    entries["OptInType"] = input.OptInType;
  }
  return entries;
};

/**
 * serializeAws_queryAttributeValueList
 */
const se_AttributeValueList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`AttributeValue.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAvailabilityZones
 */
const se_AvailabilityZones = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryCloudwatchLogsExportConfiguration
 */
const se_CloudwatchLogsExportConfiguration = (
  input: CloudwatchLogsExportConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnableLogTypes != null) {
    const memberEntries = se_LogTypeList(input.EnableLogTypes, context);
    if (input.EnableLogTypes?.length === 0) {
      entries.EnableLogTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableLogTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DisableLogTypes != null) {
    const memberEntries = se_LogTypeList(input.DisableLogTypes, context);
    if (input.DisableLogTypes?.length === 0) {
      entries.DisableLogTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DisableLogTypes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCopyDBClusterParameterGroupMessage
 */
const se_CopyDBClusterParameterGroupMessage = (
  input: CopyDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceDBClusterParameterGroupIdentifier != null) {
    entries["SourceDBClusterParameterGroupIdentifier"] = input.SourceDBClusterParameterGroupIdentifier;
  }
  if (input.TargetDBClusterParameterGroupIdentifier != null) {
    entries["TargetDBClusterParameterGroupIdentifier"] = input.TargetDBClusterParameterGroupIdentifier;
  }
  if (input.TargetDBClusterParameterGroupDescription != null) {
    entries["TargetDBClusterParameterGroupDescription"] = input.TargetDBClusterParameterGroupDescription;
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
 * serializeAws_queryCopyDBClusterSnapshotMessage
 */
const se_CopyDBClusterSnapshotMessage = (input: CopyDBClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceDBClusterSnapshotIdentifier != null) {
    entries["SourceDBClusterSnapshotIdentifier"] = input.SourceDBClusterSnapshotIdentifier;
  }
  if (input.TargetDBClusterSnapshotIdentifier != null) {
    entries["TargetDBClusterSnapshotIdentifier"] = input.TargetDBClusterSnapshotIdentifier;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.PreSignedUrl != null) {
    entries["PreSignedUrl"] = input.PreSignedUrl;
  }
  if (input.CopyTags != null) {
    entries["CopyTags"] = input.CopyTags;
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
 * serializeAws_queryCopyDBParameterGroupMessage
 */
const se_CopyDBParameterGroupMessage = (input: CopyDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceDBParameterGroupIdentifier != null) {
    entries["SourceDBParameterGroupIdentifier"] = input.SourceDBParameterGroupIdentifier;
  }
  if (input.TargetDBParameterGroupIdentifier != null) {
    entries["TargetDBParameterGroupIdentifier"] = input.TargetDBParameterGroupIdentifier;
  }
  if (input.TargetDBParameterGroupDescription != null) {
    entries["TargetDBParameterGroupDescription"] = input.TargetDBParameterGroupDescription;
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
 * serializeAws_queryCreateDBClusterEndpointMessage
 */
const se_CreateDBClusterEndpointMessage = (input: CreateDBClusterEndpointMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterEndpointIdentifier != null) {
    entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
  }
  if (input.EndpointType != null) {
    entries["EndpointType"] = input.EndpointType;
  }
  if (input.StaticMembers != null) {
    const memberEntries = se_StringList(input.StaticMembers, context);
    if (input.StaticMembers?.length === 0) {
      entries.StaticMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StaticMembers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludedMembers != null) {
    const memberEntries = se_StringList(input.ExcludedMembers, context);
    if (input.ExcludedMembers?.length === 0) {
      entries.ExcludedMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedMembers.${key}`;
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
 * serializeAws_queryCreateDBClusterMessage
 */
const se_CreateDBClusterMessage = (input: CreateDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AvailabilityZones != null) {
    const memberEntries = se_AvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BackupRetentionPeriod != null) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.CharacterSetName != null) {
    entries["CharacterSetName"] = input.CharacterSetName;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.DatabaseName != null) {
    entries["DatabaseName"] = input.DatabaseName;
  }
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.MasterUsername != null) {
    entries["MasterUsername"] = input.MasterUsername;
  }
  if (input.MasterUserPassword != null) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.PreferredBackupWindow != null) {
    entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.ReplicationSourceIdentifier != null) {
    entries["ReplicationSourceIdentifier"] = input.ReplicationSourceIdentifier;
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
  if (input.StorageEncrypted != null) {
    entries["StorageEncrypted"] = input.StorageEncrypted;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.PreSignedUrl != null) {
    entries["PreSignedUrl"] = input.PreSignedUrl;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.EnableCloudwatchLogsExports != null) {
    const memberEntries = se_LogTypeList(input.EnableCloudwatchLogsExports, context);
    if (input.EnableCloudwatchLogsExports?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryCreateDBClusterParameterGroupMessage
 */
const se_CreateDBClusterParameterGroupMessage = (
  input: CreateDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.DBParameterGroupFamily != null) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
 * serializeAws_queryCreateDBClusterSnapshotMessage
 */
const se_CreateDBClusterSnapshotMessage = (input: CreateDBClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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
 * serializeAws_queryCreateDBInstanceMessage
 */
const se_CreateDBInstanceMessage = (input: CreateDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBName != null) {
    entries["DBName"] = input.DBName;
  }
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.AllocatedStorage != null) {
    entries["AllocatedStorage"] = input.AllocatedStorage;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.MasterUsername != null) {
    entries["MasterUsername"] = input.MasterUsername;
  }
  if (input.MasterUserPassword != null) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.DBSecurityGroups != null) {
    const memberEntries = se_DBSecurityGroupNameList(input.DBSecurityGroups, context);
    if (input.DBSecurityGroups?.length === 0) {
      entries.DBSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.BackupRetentionPeriod != null) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.PreferredBackupWindow != null) {
    entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.LicenseModel != null) {
    entries["LicenseModel"] = input.LicenseModel;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.CharacterSetName != null) {
    entries["CharacterSetName"] = input.CharacterSetName;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
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
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.TdeCredentialArn != null) {
    entries["TdeCredentialArn"] = input.TdeCredentialArn;
  }
  if (input.TdeCredentialPassword != null) {
    entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
  }
  if (input.StorageEncrypted != null) {
    entries["StorageEncrypted"] = input.StorageEncrypted;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.MonitoringInterval != null) {
    entries["MonitoringInterval"] = input.MonitoringInterval;
  }
  if (input.MonitoringRoleArn != null) {
    entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.PromotionTier != null) {
    entries["PromotionTier"] = input.PromotionTier;
  }
  if (input.Timezone != null) {
    entries["Timezone"] = input.Timezone;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.EnablePerformanceInsights != null) {
    entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
  }
  if (input.PerformanceInsightsKMSKeyId != null) {
    entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
  }
  if (input.EnableCloudwatchLogsExports != null) {
    const memberEntries = se_LogTypeList(input.EnableCloudwatchLogsExports, context);
    if (input.EnableCloudwatchLogsExports?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  return entries;
};

/**
 * serializeAws_queryCreateDBParameterGroupMessage
 */
const se_CreateDBParameterGroupMessage = (input: CreateDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.DBParameterGroupFamily != null) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
 * serializeAws_queryCreateDBSubnetGroupMessage
 */
const se_CreateDBSubnetGroupMessage = (input: CreateDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DBSubnetGroupDescription != null) {
    entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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
 * serializeAws_queryCreateEventSubscriptionMessage
 */
const se_CreateEventSubscriptionMessage = (input: CreateEventSubscriptionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  if (input.SnsTopicArn != null) {
    entries["SnsTopicArn"] = input.SnsTopicArn;
  }
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.EventCategories != null) {
    const memberEntries = se_EventCategoriesList(input.EventCategories, context);
    if (input.EventCategories?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceIds != null) {
    const memberEntries = se_SourceIdsList(input.SourceIds, context);
    if (input.SourceIds?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
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
 * serializeAws_queryCreateGlobalClusterMessage
 */
const se_CreateGlobalClusterMessage = (input: CreateGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  if (input.SourceDBClusterIdentifier != null) {
    entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.StorageEncrypted != null) {
    entries["StorageEncrypted"] = input.StorageEncrypted;
  }
  return entries;
};

/**
 * serializeAws_queryDBSecurityGroupNameList
 */
const se_DBSecurityGroupNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`DBSecurityGroupName.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterEndpointMessage
 */
const se_DeleteDBClusterEndpointMessage = (input: DeleteDBClusterEndpointMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterEndpointIdentifier != null) {
    entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterMessage
 */
const se_DeleteDBClusterMessage = (input: DeleteDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.SkipFinalSnapshot != null) {
    entries["SkipFinalSnapshot"] = input.SkipFinalSnapshot;
  }
  if (input.FinalDBSnapshotIdentifier != null) {
    entries["FinalDBSnapshotIdentifier"] = input.FinalDBSnapshotIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterParameterGroupMessage
 */
const se_DeleteDBClusterParameterGroupMessage = (
  input: DeleteDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterSnapshotMessage
 */
const se_DeleteDBClusterSnapshotMessage = (input: DeleteDBClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBInstanceMessage
 */
const se_DeleteDBInstanceMessage = (input: DeleteDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.SkipFinalSnapshot != null) {
    entries["SkipFinalSnapshot"] = input.SkipFinalSnapshot;
  }
  if (input.FinalDBSnapshotIdentifier != null) {
    entries["FinalDBSnapshotIdentifier"] = input.FinalDBSnapshotIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBParameterGroupMessage
 */
const se_DeleteDBParameterGroupMessage = (input: DeleteDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBSubnetGroupMessage
 */
const se_DeleteDBSubnetGroupMessage = (input: DeleteDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteEventSubscriptionMessage
 */
const se_DeleteEventSubscriptionMessage = (input: DeleteEventSubscriptionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteGlobalClusterMessage
 */
const se_DeleteGlobalClusterMessage = (input: DeleteGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBClusterEndpointsMessage
 */
const se_DescribeDBClusterEndpointsMessage = (
  input: DescribeDBClusterEndpointsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterEndpointIdentifier != null) {
    entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
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
 * serializeAws_queryDescribeDBClusterParameterGroupsMessage
 */
const se_DescribeDBClusterParameterGroupsMessage = (
  input: DescribeDBClusterParameterGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
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
 * serializeAws_queryDescribeDBClusterParametersMessage
 */
const se_DescribeDBClusterParametersMessage = (
  input: DescribeDBClusterParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
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
 * serializeAws_queryDescribeDBClustersMessage
 */
const se_DescribeDBClustersMessage = (input: DescribeDBClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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
 * serializeAws_queryDescribeDBClusterSnapshotAttributesMessage
 */
const se_DescribeDBClusterSnapshotAttributesMessage = (
  input: DescribeDBClusterSnapshotAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBClusterSnapshotsMessage
 */
const se_DescribeDBClusterSnapshotsMessage = (
  input: DescribeDBClusterSnapshotsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.SnapshotType != null) {
    entries["SnapshotType"] = input.SnapshotType;
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
  if (input.IncludeShared != null) {
    entries["IncludeShared"] = input.IncludeShared;
  }
  if (input.IncludePublic != null) {
    entries["IncludePublic"] = input.IncludePublic;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBEngineVersionsMessage
 */
const se_DescribeDBEngineVersionsMessage = (input: DescribeDBEngineVersionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.DBParameterGroupFamily != null) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
  if (input.DefaultOnly != null) {
    entries["DefaultOnly"] = input.DefaultOnly;
  }
  if (input.ListSupportedCharacterSets != null) {
    entries["ListSupportedCharacterSets"] = input.ListSupportedCharacterSets;
  }
  if (input.ListSupportedTimezones != null) {
    entries["ListSupportedTimezones"] = input.ListSupportedTimezones;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBInstancesMessage
 */
const se_DescribeDBInstancesMessage = (input: DescribeDBInstancesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
 * serializeAws_queryDescribeDBParameterGroupsMessage
 */
const se_DescribeDBParameterGroupsMessage = (input: DescribeDBParameterGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
 * serializeAws_queryDescribeDBParametersMessage
 */
const se_DescribeDBParametersMessage = (input: DescribeDBParametersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
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
 * serializeAws_queryDescribeDBSubnetGroupsMessage
 */
const se_DescribeDBSubnetGroupsMessage = (input: DescribeDBSubnetGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
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
 * serializeAws_queryDescribeEngineDefaultClusterParametersMessage
 */
const se_DescribeEngineDefaultClusterParametersMessage = (
  input: DescribeEngineDefaultClusterParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupFamily != null) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
 * serializeAws_queryDescribeEngineDefaultParametersMessage
 */
const se_DescribeEngineDefaultParametersMessage = (
  input: DescribeEngineDefaultParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupFamily != null) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
 * serializeAws_queryDescribeEventCategoriesMessage
 */
const se_DescribeEventCategoriesMessage = (input: DescribeEventCategoriesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
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
  if (input.EventCategories != null) {
    const memberEntries = se_EventCategoriesList(input.EventCategories, context);
    if (input.EventCategories?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
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
 * serializeAws_queryDescribeEventSubscriptionsMessage
 */
const se_DescribeEventSubscriptionsMessage = (
  input: DescribeEventSubscriptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
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
 * serializeAws_queryDescribeGlobalClustersMessage
 */
const se_DescribeGlobalClustersMessage = (input: DescribeGlobalClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
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
 * serializeAws_queryDescribeOrderableDBInstanceOptionsMessage
 */
const se_DescribeOrderableDBInstanceOptionsMessage = (
  input: DescribeOrderableDBInstanceOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.LicenseModel != null) {
    entries["LicenseModel"] = input.LicenseModel;
  }
  if (input.Vpc != null) {
    entries["Vpc"] = input.Vpc;
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
 * serializeAws_queryDescribePendingMaintenanceActionsMessage
 */
const se_DescribePendingMaintenanceActionsMessage = (
  input: DescribePendingMaintenanceActionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceIdentifier != null) {
    entries["ResourceIdentifier"] = input.ResourceIdentifier;
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
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeValidDBInstanceModificationsMessage
 */
const se_DescribeValidDBInstanceModificationsMessage = (
  input: DescribeValidDBInstanceModificationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryEventCategoriesList
 */
const se_EventCategoriesList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`EventCategory.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryFailoverDBClusterMessage
 */
const se_FailoverDBClusterMessage = (input: FailoverDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.TargetDBInstanceIdentifier != null) {
    entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryFailoverGlobalClusterMessage
 */
const se_FailoverGlobalClusterMessage = (input: FailoverGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  if (input.TargetDbClusterIdentifier != null) {
    entries["TargetDbClusterIdentifier"] = input.TargetDbClusterIdentifier;
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
      entries[`Filter.${counter}.${key}`] = value;
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
    entries[`Value.${counter}`] = entry;
    counter++;
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
 * serializeAws_queryListTagsForResourceMessage
 */
const se_ListTagsForResourceMessage = (input: ListTagsForResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
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
  return entries;
};

/**
 * serializeAws_queryLogTypeList
 */
const se_LogTypeList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryModifyDBClusterEndpointMessage
 */
const se_ModifyDBClusterEndpointMessage = (input: ModifyDBClusterEndpointMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterEndpointIdentifier != null) {
    entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
  }
  if (input.EndpointType != null) {
    entries["EndpointType"] = input.EndpointType;
  }
  if (input.StaticMembers != null) {
    const memberEntries = se_StringList(input.StaticMembers, context);
    if (input.StaticMembers?.length === 0) {
      entries.StaticMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StaticMembers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludedMembers != null) {
    const memberEntries = se_StringList(input.ExcludedMembers, context);
    if (input.ExcludedMembers?.length === 0) {
      entries.ExcludedMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedMembers.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBClusterMessage
 */
const se_ModifyDBClusterMessage = (input: ModifyDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.NewDBClusterIdentifier != null) {
    entries["NewDBClusterIdentifier"] = input.NewDBClusterIdentifier;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.BackupRetentionPeriod != null) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.MasterUserPassword != null) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.PreferredBackupWindow != null) {
    entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.CloudwatchLogsExportConfiguration != null) {
    const memberEntries = se_CloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudwatchLogsExportConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.AllowMajorVersionUpgrade != null) {
    entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
  }
  if (input.DBInstanceParameterGroupName != null) {
    entries["DBInstanceParameterGroupName"] = input.DBInstanceParameterGroupName;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBClusterParameterGroupMessage
 */
const se_ModifyDBClusterParameterGroupMessage = (
  input: ModifyDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.Parameters != null) {
    const memberEntries = se_ParametersList(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBClusterSnapshotAttributeMessage
 */
const se_ModifyDBClusterSnapshotAttributeMessage = (
  input: ModifyDBClusterSnapshotAttributeMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.AttributeName != null) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.ValuesToAdd != null) {
    const memberEntries = se_AttributeValueList(input.ValuesToAdd, context);
    if (input.ValuesToAdd?.length === 0) {
      entries.ValuesToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ValuesToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ValuesToRemove != null) {
    const memberEntries = se_AttributeValueList(input.ValuesToRemove, context);
    if (input.ValuesToRemove?.length === 0) {
      entries.ValuesToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ValuesToRemove.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBInstanceMessage
 */
const se_ModifyDBInstanceMessage = (input: ModifyDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.AllocatedStorage != null) {
    entries["AllocatedStorage"] = input.AllocatedStorage;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DBSecurityGroups != null) {
    const memberEntries = se_DBSecurityGroupNameList(input.DBSecurityGroups, context);
    if (input.DBSecurityGroups?.length === 0) {
      entries.DBSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.MasterUserPassword != null) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.BackupRetentionPeriod != null) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.PreferredBackupWindow != null) {
    entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.AllowMajorVersionUpgrade != null) {
    entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.LicenseModel != null) {
    entries["LicenseModel"] = input.LicenseModel;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.NewDBInstanceIdentifier != null) {
    entries["NewDBInstanceIdentifier"] = input.NewDBInstanceIdentifier;
  }
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.TdeCredentialArn != null) {
    entries["TdeCredentialArn"] = input.TdeCredentialArn;
  }
  if (input.TdeCredentialPassword != null) {
    entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
  }
  if (input.CACertificateIdentifier != null) {
    entries["CACertificateIdentifier"] = input.CACertificateIdentifier;
  }
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.MonitoringInterval != null) {
    entries["MonitoringInterval"] = input.MonitoringInterval;
  }
  if (input.DBPortNumber != null) {
    entries["DBPortNumber"] = input.DBPortNumber;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.MonitoringRoleArn != null) {
    entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.PromotionTier != null) {
    entries["PromotionTier"] = input.PromotionTier;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.EnablePerformanceInsights != null) {
    entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
  }
  if (input.PerformanceInsightsKMSKeyId != null) {
    entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
  }
  if (input.CloudwatchLogsExportConfiguration != null) {
    const memberEntries = se_CloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudwatchLogsExportConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBParameterGroupMessage
 */
const se_ModifyDBParameterGroupMessage = (input: ModifyDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.Parameters != null) {
    const memberEntries = se_ParametersList(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBSubnetGroupMessage
 */
const se_ModifyDBSubnetGroupMessage = (input: ModifyDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DBSubnetGroupDescription != null) {
    entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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
 * serializeAws_queryModifyEventSubscriptionMessage
 */
const se_ModifyEventSubscriptionMessage = (input: ModifyEventSubscriptionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  if (input.SnsTopicArn != null) {
    entries["SnsTopicArn"] = input.SnsTopicArn;
  }
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.EventCategories != null) {
    const memberEntries = se_EventCategoriesList(input.EventCategories, context);
    if (input.EventCategories?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

/**
 * serializeAws_queryModifyGlobalClusterMessage
 */
const se_ModifyGlobalClusterMessage = (input: ModifyGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  if (input.NewGlobalClusterIdentifier != null) {
    entries["NewGlobalClusterIdentifier"] = input.NewGlobalClusterIdentifier;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.AllowMajorVersionUpgrade != null) {
    entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
  }
  return entries;
};

/**
 * serializeAws_queryParameter
 */
const se_Parameter = (input: Parameter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ParameterName != null) {
    entries["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue != null) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.ApplyType != null) {
    entries["ApplyType"] = input.ApplyType;
  }
  if (input.DataType != null) {
    entries["DataType"] = input.DataType;
  }
  if (input.AllowedValues != null) {
    entries["AllowedValues"] = input.AllowedValues;
  }
  if (input.IsModifiable != null) {
    entries["IsModifiable"] = input.IsModifiable;
  }
  if (input.MinimumEngineVersion != null) {
    entries["MinimumEngineVersion"] = input.MinimumEngineVersion;
  }
  if (input.ApplyMethod != null) {
    entries["ApplyMethod"] = input.ApplyMethod;
  }
  return entries;
};

/**
 * serializeAws_queryParametersList
 */
const se_ParametersList = (input: Parameter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Parameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Parameter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPromoteReadReplicaDBClusterMessage
 */
const se_PromoteReadReplicaDBClusterMessage = (
  input: PromoteReadReplicaDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryRebootDBInstanceMessage
 */
const se_RebootDBInstanceMessage = (input: RebootDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.ForceFailover != null) {
    entries["ForceFailover"] = input.ForceFailover;
  }
  return entries;
};

/**
 * serializeAws_queryRemoveFromGlobalClusterMessage
 */
const se_RemoveFromGlobalClusterMessage = (input: RemoveFromGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  if (input.DbClusterIdentifier != null) {
    entries["DbClusterIdentifier"] = input.DbClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryRemoveRoleFromDBClusterMessage
 */
const se_RemoveRoleFromDBClusterMessage = (input: RemoveRoleFromDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.FeatureName != null) {
    entries["FeatureName"] = input.FeatureName;
  }
  return entries;
};

/**
 * serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage
 */
const se_RemoveSourceIdentifierFromSubscriptionMessage = (
  input: RemoveSourceIdentifierFromSubscriptionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  if (input.SourceIdentifier != null) {
    entries["SourceIdentifier"] = input.SourceIdentifier;
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
 * serializeAws_queryResetDBClusterParameterGroupMessage
 */
const se_ResetDBClusterParameterGroupMessage = (
  input: ResetDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.ResetAllParameters != null) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  if (input.Parameters != null) {
    const memberEntries = se_ParametersList(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryResetDBParameterGroupMessage
 */
const se_ResetDBParameterGroupMessage = (input: ResetDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.ResetAllParameters != null) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  if (input.Parameters != null) {
    const memberEntries = se_ParametersList(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRestoreDBClusterFromSnapshotMessage
 */
const se_RestoreDBClusterFromSnapshotMessage = (
  input: RestoreDBClusterFromSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZones != null) {
    const memberEntries = se_AvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DatabaseName != null) {
    entries["DatabaseName"] = input.DatabaseName;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.EnableCloudwatchLogsExports != null) {
    const memberEntries = se_LogTypeList(input.EnableCloudwatchLogsExports, context);
    if (input.EnableCloudwatchLogsExports?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRestoreDBClusterToPointInTimeMessage
 */
const se_RestoreDBClusterToPointInTimeMessage = (
  input: RestoreDBClusterToPointInTimeMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.RestoreType != null) {
    entries["RestoreType"] = input.RestoreType;
  }
  if (input.SourceDBClusterIdentifier != null) {
    entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
  }
  if (input.RestoreToTime != null) {
    entries["RestoreToTime"] = input.RestoreToTime.toISOString().split(".")[0] + "Z";
  }
  if (input.UseLatestRestorableTime != null) {
    entries["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.EnableCloudwatchLogsExports != null) {
    const memberEntries = se_LogTypeList(input.EnableCloudwatchLogsExports, context);
    if (input.EnableCloudwatchLogsExports?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryServerlessV2ScalingConfiguration
 */
const se_ServerlessV2ScalingConfiguration = (input: ServerlessV2ScalingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MinCapacity != null) {
    entries["MinCapacity"] = __serializeFloat(input.MinCapacity);
  }
  if (input.MaxCapacity != null) {
    entries["MaxCapacity"] = __serializeFloat(input.MaxCapacity);
  }
  return entries;
};

/**
 * serializeAws_querySourceIdsList
 */
const se_SourceIdsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`SourceId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryStartDBClusterMessage
 */
const se_StartDBClusterMessage = (input: StartDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryStopDBClusterMessage
 */
const se_StopDBClusterMessage = (input: StopDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryStringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryVpcSecurityGroupIdList
 */
const se_VpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`VpcSecurityGroupId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * deserializeAws_queryAddSourceIdentifierToSubscriptionResult
 */
const de_AddSourceIdentifierToSubscriptionResult = (
  output: any,
  context: __SerdeContext
): AddSourceIdentifierToSubscriptionResult => {
  const contents: any = {};
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = de_EventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplyPendingMaintenanceActionResult
 */
const de_ApplyPendingMaintenanceActionResult = (
  output: any,
  context: __SerdeContext
): ApplyPendingMaintenanceActionResult => {
  const contents: any = {};
  if (output["ResourcePendingMaintenanceActions"] !== undefined) {
    contents.ResourcePendingMaintenanceActions = de_ResourcePendingMaintenanceActions(
      output["ResourcePendingMaintenanceActions"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAttributeValueList
 */
const de_AttributeValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
 * deserializeAws_queryAvailabilityZoneList
 */
const de_AvailabilityZoneList = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AvailabilityZone(entry, context);
    });
};

/**
 * deserializeAws_queryAvailabilityZones
 */
const de_AvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCertificateNotFoundFault
 */
const de_CertificateNotFoundFault = (output: any, context: __SerdeContext): CertificateNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCharacterSet
 */
const de_CharacterSet = (output: any, context: __SerdeContext): CharacterSet => {
  const contents: any = {};
  if (output["CharacterSetName"] !== undefined) {
    contents.CharacterSetName = __expectString(output["CharacterSetName"]);
  }
  if (output["CharacterSetDescription"] !== undefined) {
    contents.CharacterSetDescription = __expectString(output["CharacterSetDescription"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterPendingModifiedValues
 */
const de_ClusterPendingModifiedValues = (output: any, context: __SerdeContext): ClusterPendingModifiedValues => {
  const contents: any = {};
  if (output["PendingCloudwatchLogsExports"] !== undefined) {
    contents.PendingCloudwatchLogsExports = de_PendingCloudwatchLogsExports(
      output["PendingCloudwatchLogsExports"],
      context
    );
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = __strictParseInt32(output["BackupRetentionPeriod"]) as number;
  }
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = __strictParseInt32(output["Iops"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCopyDBClusterParameterGroupResult
 */
const de_CopyDBClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CopyDBClusterParameterGroupResult => {
  const contents: any = {};
  if (output["DBClusterParameterGroup"] !== undefined) {
    contents.DBClusterParameterGroup = de_DBClusterParameterGroup(output["DBClusterParameterGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyDBClusterSnapshotResult
 */
const de_CopyDBClusterSnapshotResult = (output: any, context: __SerdeContext): CopyDBClusterSnapshotResult => {
  const contents: any = {};
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = de_DBClusterSnapshot(output["DBClusterSnapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyDBParameterGroupResult
 */
const de_CopyDBParameterGroupResult = (output: any, context: __SerdeContext): CopyDBParameterGroupResult => {
  const contents: any = {};
  if (output["DBParameterGroup"] !== undefined) {
    contents.DBParameterGroup = de_DBParameterGroup(output["DBParameterGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBClusterEndpointOutput
 */
const de_CreateDBClusterEndpointOutput = (output: any, context: __SerdeContext): CreateDBClusterEndpointOutput => {
  const contents: any = {};
  if (output["DBClusterEndpointIdentifier"] !== undefined) {
    contents.DBClusterEndpointIdentifier = __expectString(output["DBClusterEndpointIdentifier"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
    contents.DBClusterEndpointResourceIdentifier = __expectString(output["DBClusterEndpointResourceIdentifier"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EndpointType"] !== undefined) {
    contents.EndpointType = __expectString(output["EndpointType"]);
  }
  if (output["CustomEndpointType"] !== undefined) {
    contents.CustomEndpointType = __expectString(output["CustomEndpointType"]);
  }
  if (output.StaticMembers === "") {
    contents.StaticMembers = [];
  } else if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
    contents.StaticMembers = de_StringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = de_StringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBClusterParameterGroupResult
 */
const de_CreateDBClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateDBClusterParameterGroupResult => {
  const contents: any = {};
  if (output["DBClusterParameterGroup"] !== undefined) {
    contents.DBClusterParameterGroup = de_DBClusterParameterGroup(output["DBClusterParameterGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBClusterResult
 */
const de_CreateDBClusterResult = (output: any, context: __SerdeContext): CreateDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBClusterSnapshotResult
 */
const de_CreateDBClusterSnapshotResult = (output: any, context: __SerdeContext): CreateDBClusterSnapshotResult => {
  const contents: any = {};
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = de_DBClusterSnapshot(output["DBClusterSnapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBInstanceResult
 */
const de_CreateDBInstanceResult = (output: any, context: __SerdeContext): CreateDBInstanceResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBParameterGroupResult
 */
const de_CreateDBParameterGroupResult = (output: any, context: __SerdeContext): CreateDBParameterGroupResult => {
  const contents: any = {};
  if (output["DBParameterGroup"] !== undefined) {
    contents.DBParameterGroup = de_DBParameterGroup(output["DBParameterGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBSubnetGroupResult
 */
const de_CreateDBSubnetGroupResult = (output: any, context: __SerdeContext): CreateDBSubnetGroupResult => {
  const contents: any = {};
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = de_DBSubnetGroup(output["DBSubnetGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateEventSubscriptionResult
 */
const de_CreateEventSubscriptionResult = (output: any, context: __SerdeContext): CreateEventSubscriptionResult => {
  const contents: any = {};
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = de_EventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateGlobalClusterResult
 */
const de_CreateGlobalClusterResult = (output: any, context: __SerdeContext): CreateGlobalClusterResult => {
  const contents: any = {};
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = de_GlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBCluster
 */
const de_DBCluster = (output: any, context: __SerdeContext): DBCluster => {
  const contents: any = {};
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = __strictParseInt32(output["BackupRetentionPeriod"]) as number;
  }
  if (output["CharacterSetName"] !== undefined) {
    contents.CharacterSetName = __expectString(output["CharacterSetName"]);
  }
  if (output["DatabaseName"] !== undefined) {
    contents.DatabaseName = __expectString(output["DatabaseName"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["DBClusterParameterGroup"] !== undefined) {
    contents.DBClusterParameterGroup = __expectString(output["DBClusterParameterGroup"]);
  }
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = __expectString(output["DBSubnetGroup"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["PercentProgress"] !== undefined) {
    contents.PercentProgress = __expectString(output["PercentProgress"]);
  }
  if (output["EarliestRestorableTime"] !== undefined) {
    contents.EarliestRestorableTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["EarliestRestorableTime"])
    );
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["ReaderEndpoint"] !== undefined) {
    contents.ReaderEndpoint = __expectString(output["ReaderEndpoint"]);
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = __parseBoolean(output["MultiAZ"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["LatestRestorableTime"] !== undefined) {
    contents.LatestRestorableTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LatestRestorableTime"]));
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = __expectString(output["MasterUsername"]);
  }
  if (output.DBClusterOptionGroupMemberships === "") {
    contents.DBClusterOptionGroupMemberships = [];
  } else if (
    output["DBClusterOptionGroupMemberships"] !== undefined &&
    output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"] !== undefined
  ) {
    contents.DBClusterOptionGroupMemberships = de_DBClusterOptionGroupMemberships(
      __getArrayIfSingleItem(output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"]),
      context
    );
  }
  if (output["PreferredBackupWindow"] !== undefined) {
    contents.PreferredBackupWindow = __expectString(output["PreferredBackupWindow"]);
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = __expectString(output["PreferredMaintenanceWindow"]);
  }
  if (output["ReplicationSourceIdentifier"] !== undefined) {
    contents.ReplicationSourceIdentifier = __expectString(output["ReplicationSourceIdentifier"]);
  }
  if (output.ReadReplicaIdentifiers === "") {
    contents.ReadReplicaIdentifiers = [];
  } else if (
    output["ReadReplicaIdentifiers"] !== undefined &&
    output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"] !== undefined
  ) {
    contents.ReadReplicaIdentifiers = de_ReadReplicaIdentifierList(
      __getArrayIfSingleItem(output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"]),
      context
    );
  }
  if (output.DBClusterMembers === "") {
    contents.DBClusterMembers = [];
  } else if (output["DBClusterMembers"] !== undefined && output["DBClusterMembers"]["DBClusterMember"] !== undefined) {
    contents.DBClusterMembers = de_DBClusterMemberList(
      __getArrayIfSingleItem(output["DBClusterMembers"]["DBClusterMember"]),
      context
    );
  }
  if (output.VpcSecurityGroups === "") {
    contents.VpcSecurityGroups = [];
  } else if (
    output["VpcSecurityGroups"] !== undefined &&
    output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined
  ) {
    contents.VpcSecurityGroups = de_VpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]),
      context
    );
  }
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(output["HostedZoneId"]);
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = __parseBoolean(output["StorageEncrypted"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["DbClusterResourceId"] !== undefined) {
    contents.DbClusterResourceId = __expectString(output["DbClusterResourceId"]);
  }
  if (output["DBClusterArn"] !== undefined) {
    contents.DBClusterArn = __expectString(output["DBClusterArn"]);
  }
  if (output.AssociatedRoles === "") {
    contents.AssociatedRoles = [];
  } else if (output["AssociatedRoles"] !== undefined && output["AssociatedRoles"]["DBClusterRole"] !== undefined) {
    contents.AssociatedRoles = de_DBClusterRoles(
      __getArrayIfSingleItem(output["AssociatedRoles"]["DBClusterRole"]),
      context
    );
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  if (output["CloneGroupId"] !== undefined) {
    contents.CloneGroupId = __expectString(output["CloneGroupId"]);
  }
  if (output["ClusterCreateTime"] !== undefined) {
    contents.ClusterCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ClusterCreateTime"]));
  }
  if (output["CopyTagsToSnapshot"] !== undefined) {
    contents.CopyTagsToSnapshot = __parseBoolean(output["CopyTagsToSnapshot"]);
  }
  if (output.EnabledCloudwatchLogsExports === "") {
    contents.EnabledCloudwatchLogsExports = [];
  } else if (
    output["EnabledCloudwatchLogsExports"] !== undefined &&
    output["EnabledCloudwatchLogsExports"]["member"] !== undefined
  ) {
    contents.EnabledCloudwatchLogsExports = de_LogTypeList(
      __getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]),
      context
    );
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = de_ClusterPendingModifiedValues(output["PendingModifiedValues"], context);
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = __parseBoolean(output["DeletionProtection"]);
  }
  if (output["CrossAccountClone"] !== undefined) {
    contents.CrossAccountClone = __parseBoolean(output["CrossAccountClone"]);
  }
  if (output["AutomaticRestartTime"] !== undefined) {
    contents.AutomaticRestartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["AutomaticRestartTime"]));
  }
  if (output["ServerlessV2ScalingConfiguration"] !== undefined) {
    contents.ServerlessV2ScalingConfiguration = de_ServerlessV2ScalingConfigurationInfo(
      output["ServerlessV2ScalingConfiguration"],
      context
    );
  }
  if (output["GlobalClusterIdentifier"] !== undefined) {
    contents.GlobalClusterIdentifier = __expectString(output["GlobalClusterIdentifier"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterAlreadyExistsFault
 */
const de_DBClusterAlreadyExistsFault = (output: any, context: __SerdeContext): DBClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterEndpoint
 */
const de_DBClusterEndpoint = (output: any, context: __SerdeContext): DBClusterEndpoint => {
  const contents: any = {};
  if (output["DBClusterEndpointIdentifier"] !== undefined) {
    contents.DBClusterEndpointIdentifier = __expectString(output["DBClusterEndpointIdentifier"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
    contents.DBClusterEndpointResourceIdentifier = __expectString(output["DBClusterEndpointResourceIdentifier"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EndpointType"] !== undefined) {
    contents.EndpointType = __expectString(output["EndpointType"]);
  }
  if (output["CustomEndpointType"] !== undefined) {
    contents.CustomEndpointType = __expectString(output["CustomEndpointType"]);
  }
  if (output.StaticMembers === "") {
    contents.StaticMembers = [];
  } else if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
    contents.StaticMembers = de_StringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = de_StringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterEndpointAlreadyExistsFault
 */
const de_DBClusterEndpointAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterEndpointAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterEndpointList
 */
const de_DBClusterEndpointList = (output: any, context: __SerdeContext): DBClusterEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterEndpoint(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterEndpointMessage
 */
const de_DBClusterEndpointMessage = (output: any, context: __SerdeContext): DBClusterEndpointMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterEndpoints === "") {
    contents.DBClusterEndpoints = [];
  } else if (
    output["DBClusterEndpoints"] !== undefined &&
    output["DBClusterEndpoints"]["DBClusterEndpointList"] !== undefined
  ) {
    contents.DBClusterEndpoints = de_DBClusterEndpointList(
      __getArrayIfSingleItem(output["DBClusterEndpoints"]["DBClusterEndpointList"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterEndpointNotFoundFault
 */
const de_DBClusterEndpointNotFoundFault = (output: any, context: __SerdeContext): DBClusterEndpointNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterEndpointQuotaExceededFault
 */
const de_DBClusterEndpointQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBClusterEndpointQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterList
 */
const de_DBClusterList = (output: any, context: __SerdeContext): DBCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBCluster(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterMember
 */
const de_DBClusterMember = (output: any, context: __SerdeContext): DBClusterMember => {
  const contents: any = {};
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = __expectString(output["DBInstanceIdentifier"]);
  }
  if (output["IsClusterWriter"] !== undefined) {
    contents.IsClusterWriter = __parseBoolean(output["IsClusterWriter"]);
  }
  if (output["DBClusterParameterGroupStatus"] !== undefined) {
    contents.DBClusterParameterGroupStatus = __expectString(output["DBClusterParameterGroupStatus"]);
  }
  if (output["PromotionTier"] !== undefined) {
    contents.PromotionTier = __strictParseInt32(output["PromotionTier"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterMemberList
 */
const de_DBClusterMemberList = (output: any, context: __SerdeContext): DBClusterMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterMember(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterMessage
 */
const de_DBClusterMessage = (output: any, context: __SerdeContext): DBClusterMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusters === "") {
    contents.DBClusters = [];
  } else if (output["DBClusters"] !== undefined && output["DBClusters"]["DBCluster"] !== undefined) {
    contents.DBClusters = de_DBClusterList(__getArrayIfSingleItem(output["DBClusters"]["DBCluster"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterNotFoundFault
 */
const de_DBClusterNotFoundFault = (output: any, context: __SerdeContext): DBClusterNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterOptionGroupMemberships
 */
const de_DBClusterOptionGroupMemberships = (output: any, context: __SerdeContext): DBClusterOptionGroupStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterOptionGroupStatus(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterOptionGroupStatus
 */
const de_DBClusterOptionGroupStatus = (output: any, context: __SerdeContext): DBClusterOptionGroupStatus => {
  const contents: any = {};
  if (output["DBClusterOptionGroupName"] !== undefined) {
    contents.DBClusterOptionGroupName = __expectString(output["DBClusterOptionGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroup
 */
const de_DBClusterParameterGroup = (output: any, context: __SerdeContext): DBClusterParameterGroup => {
  const contents: any = {};
  if (output["DBClusterParameterGroupName"] !== undefined) {
    contents.DBClusterParameterGroupName = __expectString(output["DBClusterParameterGroupName"]);
  }
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = __expectString(output["DBParameterGroupFamily"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["DBClusterParameterGroupArn"] !== undefined) {
    contents.DBClusterParameterGroupArn = __expectString(output["DBClusterParameterGroupArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroupDetails
 */
const de_DBClusterParameterGroupDetails = (output: any, context: __SerdeContext): DBClusterParameterGroupDetails => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = de_ParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroupList
 */
const de_DBClusterParameterGroupList = (output: any, context: __SerdeContext): DBClusterParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterParameterGroup(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterParameterGroupNameMessage
 */
const de_DBClusterParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupNameMessage => {
  const contents: any = {};
  if (output["DBClusterParameterGroupName"] !== undefined) {
    contents.DBClusterParameterGroupName = __expectString(output["DBClusterParameterGroupName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroupNotFoundFault
 */
const de_DBClusterParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroupsMessage
 */
const de_DBClusterParameterGroupsMessage = (output: any, context: __SerdeContext): DBClusterParameterGroupsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterParameterGroups === "") {
    contents.DBClusterParameterGroups = [];
  } else if (
    output["DBClusterParameterGroups"] !== undefined &&
    output["DBClusterParameterGroups"]["DBClusterParameterGroup"] !== undefined
  ) {
    contents.DBClusterParameterGroups = de_DBClusterParameterGroupList(
      __getArrayIfSingleItem(output["DBClusterParameterGroups"]["DBClusterParameterGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterQuotaExceededFault
 */
const de_DBClusterQuotaExceededFault = (output: any, context: __SerdeContext): DBClusterQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRole
 */
const de_DBClusterRole = (output: any, context: __SerdeContext): DBClusterRole => {
  const contents: any = {};
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = __expectString(output["RoleArn"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["FeatureName"] !== undefined) {
    contents.FeatureName = __expectString(output["FeatureName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRoleAlreadyExistsFault
 */
const de_DBClusterRoleAlreadyExistsFault = (output: any, context: __SerdeContext): DBClusterRoleAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRoleNotFoundFault
 */
const de_DBClusterRoleNotFoundFault = (output: any, context: __SerdeContext): DBClusterRoleNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRoleQuotaExceededFault
 */
const de_DBClusterRoleQuotaExceededFault = (output: any, context: __SerdeContext): DBClusterRoleQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRoles
 */
const de_DBClusterRoles = (output: any, context: __SerdeContext): DBClusterRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterRole(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterSnapshot
 */
const de_DBClusterSnapshot = (output: any, context: __SerdeContext): DBClusterSnapshot => {
  const contents: any = {};
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  if (output["DBClusterSnapshotIdentifier"] !== undefined) {
    contents.DBClusterSnapshotIdentifier = __expectString(output["DBClusterSnapshotIdentifier"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["SnapshotCreateTime"] !== undefined) {
    contents.SnapshotCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SnapshotCreateTime"]));
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["ClusterCreateTime"] !== undefined) {
    contents.ClusterCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ClusterCreateTime"]));
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = __expectString(output["MasterUsername"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["LicenseModel"] !== undefined) {
    contents.LicenseModel = __expectString(output["LicenseModel"]);
  }
  if (output["SnapshotType"] !== undefined) {
    contents.SnapshotType = __expectString(output["SnapshotType"]);
  }
  if (output["PercentProgress"] !== undefined) {
    contents.PercentProgress = __strictParseInt32(output["PercentProgress"]) as number;
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = __parseBoolean(output["StorageEncrypted"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["DBClusterSnapshotArn"] !== undefined) {
    contents.DBClusterSnapshotArn = __expectString(output["DBClusterSnapshotArn"]);
  }
  if (output["SourceDBClusterSnapshotArn"] !== undefined) {
    contents.SourceDBClusterSnapshotArn = __expectString(output["SourceDBClusterSnapshotArn"]);
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterSnapshotAlreadyExistsFault
 */
const de_DBClusterSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterSnapshotAttribute
 */
const de_DBClusterSnapshotAttribute = (output: any, context: __SerdeContext): DBClusterSnapshotAttribute => {
  const contents: any = {};
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = __expectString(output["AttributeName"]);
  }
  if (output.AttributeValues === "") {
    contents.AttributeValues = [];
  } else if (output["AttributeValues"] !== undefined && output["AttributeValues"]["AttributeValue"] !== undefined) {
    contents.AttributeValues = de_AttributeValueList(
      __getArrayIfSingleItem(output["AttributeValues"]["AttributeValue"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterSnapshotAttributeList
 */
const de_DBClusterSnapshotAttributeList = (output: any, context: __SerdeContext): DBClusterSnapshotAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterSnapshotAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterSnapshotAttributesResult
 */
const de_DBClusterSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAttributesResult => {
  const contents: any = {};
  if (output["DBClusterSnapshotIdentifier"] !== undefined) {
    contents.DBClusterSnapshotIdentifier = __expectString(output["DBClusterSnapshotIdentifier"]);
  }
  if (output.DBClusterSnapshotAttributes === "") {
    contents.DBClusterSnapshotAttributes = [];
  } else if (
    output["DBClusterSnapshotAttributes"] !== undefined &&
    output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"] !== undefined
  ) {
    contents.DBClusterSnapshotAttributes = de_DBClusterSnapshotAttributeList(
      __getArrayIfSingleItem(output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterSnapshotList
 */
const de_DBClusterSnapshotList = (output: any, context: __SerdeContext): DBClusterSnapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterSnapshot(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterSnapshotMessage
 */
const de_DBClusterSnapshotMessage = (output: any, context: __SerdeContext): DBClusterSnapshotMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterSnapshots === "") {
    contents.DBClusterSnapshots = [];
  } else if (
    output["DBClusterSnapshots"] !== undefined &&
    output["DBClusterSnapshots"]["DBClusterSnapshot"] !== undefined
  ) {
    contents.DBClusterSnapshots = de_DBClusterSnapshotList(
      __getArrayIfSingleItem(output["DBClusterSnapshots"]["DBClusterSnapshot"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterSnapshotNotFoundFault
 */
const de_DBClusterSnapshotNotFoundFault = (output: any, context: __SerdeContext): DBClusterSnapshotNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBEngineVersion
 */
const de_DBEngineVersion = (output: any, context: __SerdeContext): DBEngineVersion => {
  const contents: any = {};
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = __expectString(output["DBParameterGroupFamily"]);
  }
  if (output["DBEngineDescription"] !== undefined) {
    contents.DBEngineDescription = __expectString(output["DBEngineDescription"]);
  }
  if (output["DBEngineVersionDescription"] !== undefined) {
    contents.DBEngineVersionDescription = __expectString(output["DBEngineVersionDescription"]);
  }
  if (output["DefaultCharacterSet"] !== undefined) {
    contents.DefaultCharacterSet = de_CharacterSet(output["DefaultCharacterSet"], context);
  }
  if (output.SupportedCharacterSets === "") {
    contents.SupportedCharacterSets = [];
  } else if (
    output["SupportedCharacterSets"] !== undefined &&
    output["SupportedCharacterSets"]["CharacterSet"] !== undefined
  ) {
    contents.SupportedCharacterSets = de_SupportedCharacterSetsList(
      __getArrayIfSingleItem(output["SupportedCharacterSets"]["CharacterSet"]),
      context
    );
  }
  if (output.ValidUpgradeTarget === "") {
    contents.ValidUpgradeTarget = [];
  } else if (
    output["ValidUpgradeTarget"] !== undefined &&
    output["ValidUpgradeTarget"]["UpgradeTarget"] !== undefined
  ) {
    contents.ValidUpgradeTarget = de_ValidUpgradeTargetList(
      __getArrayIfSingleItem(output["ValidUpgradeTarget"]["UpgradeTarget"]),
      context
    );
  }
  if (output.SupportedTimezones === "") {
    contents.SupportedTimezones = [];
  } else if (output["SupportedTimezones"] !== undefined && output["SupportedTimezones"]["Timezone"] !== undefined) {
    contents.SupportedTimezones = de_SupportedTimezonesList(
      __getArrayIfSingleItem(output["SupportedTimezones"]["Timezone"]),
      context
    );
  }
  if (output.ExportableLogTypes === "") {
    contents.ExportableLogTypes = [];
  } else if (output["ExportableLogTypes"] !== undefined && output["ExportableLogTypes"]["member"] !== undefined) {
    contents.ExportableLogTypes = de_LogTypeList(
      __getArrayIfSingleItem(output["ExportableLogTypes"]["member"]),
      context
    );
  }
  if (output["SupportsLogExportsToCloudwatchLogs"] !== undefined) {
    contents.SupportsLogExportsToCloudwatchLogs = __parseBoolean(output["SupportsLogExportsToCloudwatchLogs"]);
  }
  if (output["SupportsReadReplica"] !== undefined) {
    contents.SupportsReadReplica = __parseBoolean(output["SupportsReadReplica"]);
  }
  if (output["SupportsGlobalDatabases"] !== undefined) {
    contents.SupportsGlobalDatabases = __parseBoolean(output["SupportsGlobalDatabases"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBEngineVersionList
 */
const de_DBEngineVersionList = (output: any, context: __SerdeContext): DBEngineVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBEngineVersion(entry, context);
    });
};

/**
 * deserializeAws_queryDBEngineVersionMessage
 */
const de_DBEngineVersionMessage = (output: any, context: __SerdeContext): DBEngineVersionMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBEngineVersions === "") {
    contents.DBEngineVersions = [];
  } else if (output["DBEngineVersions"] !== undefined && output["DBEngineVersions"]["DBEngineVersion"] !== undefined) {
    contents.DBEngineVersions = de_DBEngineVersionList(
      __getArrayIfSingleItem(output["DBEngineVersions"]["DBEngineVersion"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstance
 */
const de_DBInstance = (output: any, context: __SerdeContext): DBInstance => {
  const contents: any = {};
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = __expectString(output["DBInstanceIdentifier"]);
  }
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = __expectString(output["DBInstanceClass"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["DBInstanceStatus"] !== undefined) {
    contents.DBInstanceStatus = __expectString(output["DBInstanceStatus"]);
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = __expectString(output["MasterUsername"]);
  }
  if (output["DBName"] !== undefined) {
    contents.DBName = __expectString(output["DBName"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = de_Endpoint(output["Endpoint"], context);
  }
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output["InstanceCreateTime"] !== undefined) {
    contents.InstanceCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["InstanceCreateTime"]));
  }
  if (output["PreferredBackupWindow"] !== undefined) {
    contents.PreferredBackupWindow = __expectString(output["PreferredBackupWindow"]);
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = __strictParseInt32(output["BackupRetentionPeriod"]) as number;
  }
  if (output.DBSecurityGroups === "") {
    contents.DBSecurityGroups = [];
  } else if (output["DBSecurityGroups"] !== undefined && output["DBSecurityGroups"]["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroups = de_DBSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["DBSecurityGroups"]["DBSecurityGroup"]),
      context
    );
  }
  if (output.VpcSecurityGroups === "") {
    contents.VpcSecurityGroups = [];
  } else if (
    output["VpcSecurityGroups"] !== undefined &&
    output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined
  ) {
    contents.VpcSecurityGroups = de_VpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]),
      context
    );
  }
  if (output.DBParameterGroups === "") {
    contents.DBParameterGroups = [];
  } else if (
    output["DBParameterGroups"] !== undefined &&
    output["DBParameterGroups"]["DBParameterGroup"] !== undefined
  ) {
    contents.DBParameterGroups = de_DBParameterGroupStatusList(
      __getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]),
      context
    );
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = de_DBSubnetGroup(output["DBSubnetGroup"], context);
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = __expectString(output["PreferredMaintenanceWindow"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = de_PendingModifiedValues(output["PendingModifiedValues"], context);
  }
  if (output["LatestRestorableTime"] !== undefined) {
    contents.LatestRestorableTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LatestRestorableTime"]));
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = __parseBoolean(output["MultiAZ"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade = __parseBoolean(output["AutoMinorVersionUpgrade"]);
  }
  if (output["ReadReplicaSourceDBInstanceIdentifier"] !== undefined) {
    contents.ReadReplicaSourceDBInstanceIdentifier = __expectString(output["ReadReplicaSourceDBInstanceIdentifier"]);
  }
  if (output.ReadReplicaDBInstanceIdentifiers === "") {
    contents.ReadReplicaDBInstanceIdentifiers = [];
  } else if (
    output["ReadReplicaDBInstanceIdentifiers"] !== undefined &&
    output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"] !== undefined
  ) {
    contents.ReadReplicaDBInstanceIdentifiers = de_ReadReplicaDBInstanceIdentifierList(
      __getArrayIfSingleItem(output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"]),
      context
    );
  }
  if (output.ReadReplicaDBClusterIdentifiers === "") {
    contents.ReadReplicaDBClusterIdentifiers = [];
  } else if (
    output["ReadReplicaDBClusterIdentifiers"] !== undefined &&
    output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"] !== undefined
  ) {
    contents.ReadReplicaDBClusterIdentifiers = de_ReadReplicaDBClusterIdentifierList(
      __getArrayIfSingleItem(output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"]),
      context
    );
  }
  if (output["LicenseModel"] !== undefined) {
    contents.LicenseModel = __expectString(output["LicenseModel"]);
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = __strictParseInt32(output["Iops"]) as number;
  }
  if (output.OptionGroupMemberships === "") {
    contents.OptionGroupMemberships = [];
  } else if (
    output["OptionGroupMemberships"] !== undefined &&
    output["OptionGroupMemberships"]["OptionGroupMembership"] !== undefined
  ) {
    contents.OptionGroupMemberships = de_OptionGroupMembershipList(
      __getArrayIfSingleItem(output["OptionGroupMemberships"]["OptionGroupMembership"]),
      context
    );
  }
  if (output["CharacterSetName"] !== undefined) {
    contents.CharacterSetName = __expectString(output["CharacterSetName"]);
  }
  if (output["SecondaryAvailabilityZone"] !== undefined) {
    contents.SecondaryAvailabilityZone = __expectString(output["SecondaryAvailabilityZone"]);
  }
  if (output["PubliclyAccessible"] !== undefined) {
    contents.PubliclyAccessible = __parseBoolean(output["PubliclyAccessible"]);
  }
  if (output.StatusInfos === "") {
    contents.StatusInfos = [];
  } else if (output["StatusInfos"] !== undefined && output["StatusInfos"]["DBInstanceStatusInfo"] !== undefined) {
    contents.StatusInfos = de_DBInstanceStatusInfoList(
      __getArrayIfSingleItem(output["StatusInfos"]["DBInstanceStatusInfo"]),
      context
    );
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["TdeCredentialArn"] !== undefined) {
    contents.TdeCredentialArn = __expectString(output["TdeCredentialArn"]);
  }
  if (output["DbInstancePort"] !== undefined) {
    contents.DbInstancePort = __strictParseInt32(output["DbInstancePort"]) as number;
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = __parseBoolean(output["StorageEncrypted"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["DbiResourceId"] !== undefined) {
    contents.DbiResourceId = __expectString(output["DbiResourceId"]);
  }
  if (output["CACertificateIdentifier"] !== undefined) {
    contents.CACertificateIdentifier = __expectString(output["CACertificateIdentifier"]);
  }
  if (output.DomainMemberships === "") {
    contents.DomainMemberships = [];
  } else if (
    output["DomainMemberships"] !== undefined &&
    output["DomainMemberships"]["DomainMembership"] !== undefined
  ) {
    contents.DomainMemberships = de_DomainMembershipList(
      __getArrayIfSingleItem(output["DomainMemberships"]["DomainMembership"]),
      context
    );
  }
  if (output["CopyTagsToSnapshot"] !== undefined) {
    contents.CopyTagsToSnapshot = __parseBoolean(output["CopyTagsToSnapshot"]);
  }
  if (output["MonitoringInterval"] !== undefined) {
    contents.MonitoringInterval = __strictParseInt32(output["MonitoringInterval"]) as number;
  }
  if (output["EnhancedMonitoringResourceArn"] !== undefined) {
    contents.EnhancedMonitoringResourceArn = __expectString(output["EnhancedMonitoringResourceArn"]);
  }
  if (output["MonitoringRoleArn"] !== undefined) {
    contents.MonitoringRoleArn = __expectString(output["MonitoringRoleArn"]);
  }
  if (output["PromotionTier"] !== undefined) {
    contents.PromotionTier = __strictParseInt32(output["PromotionTier"]) as number;
  }
  if (output["DBInstanceArn"] !== undefined) {
    contents.DBInstanceArn = __expectString(output["DBInstanceArn"]);
  }
  if (output["Timezone"] !== undefined) {
    contents.Timezone = __expectString(output["Timezone"]);
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  if (output["PerformanceInsightsEnabled"] !== undefined) {
    contents.PerformanceInsightsEnabled = __parseBoolean(output["PerformanceInsightsEnabled"]);
  }
  if (output["PerformanceInsightsKMSKeyId"] !== undefined) {
    contents.PerformanceInsightsKMSKeyId = __expectString(output["PerformanceInsightsKMSKeyId"]);
  }
  if (output.EnabledCloudwatchLogsExports === "") {
    contents.EnabledCloudwatchLogsExports = [];
  } else if (
    output["EnabledCloudwatchLogsExports"] !== undefined &&
    output["EnabledCloudwatchLogsExports"]["member"] !== undefined
  ) {
    contents.EnabledCloudwatchLogsExports = de_LogTypeList(
      __getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]),
      context
    );
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = __parseBoolean(output["DeletionProtection"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceAlreadyExistsFault
 */
const de_DBInstanceAlreadyExistsFault = (output: any, context: __SerdeContext): DBInstanceAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceList
 */
const de_DBInstanceList = (output: any, context: __SerdeContext): DBInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBInstance(entry, context);
    });
};

/**
 * deserializeAws_queryDBInstanceMessage
 */
const de_DBInstanceMessage = (output: any, context: __SerdeContext): DBInstanceMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBInstances === "") {
    contents.DBInstances = [];
  } else if (output["DBInstances"] !== undefined && output["DBInstances"]["DBInstance"] !== undefined) {
    contents.DBInstances = de_DBInstanceList(__getArrayIfSingleItem(output["DBInstances"]["DBInstance"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceNotFoundFault
 */
const de_DBInstanceNotFoundFault = (output: any, context: __SerdeContext): DBInstanceNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceStatusInfo
 */
const de_DBInstanceStatusInfo = (output: any, context: __SerdeContext): DBInstanceStatusInfo => {
  const contents: any = {};
  if (output["StatusType"] !== undefined) {
    contents.StatusType = __expectString(output["StatusType"]);
  }
  if (output["Normal"] !== undefined) {
    contents.Normal = __parseBoolean(output["Normal"]);
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
 * deserializeAws_queryDBInstanceStatusInfoList
 */
const de_DBInstanceStatusInfoList = (output: any, context: __SerdeContext): DBInstanceStatusInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBInstanceStatusInfo(entry, context);
    });
};

/**
 * deserializeAws_queryDBParameterGroup
 */
const de_DBParameterGroup = (output: any, context: __SerdeContext): DBParameterGroup => {
  const contents: any = {};
  if (output["DBParameterGroupName"] !== undefined) {
    contents.DBParameterGroupName = __expectString(output["DBParameterGroupName"]);
  }
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = __expectString(output["DBParameterGroupFamily"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["DBParameterGroupArn"] !== undefined) {
    contents.DBParameterGroupArn = __expectString(output["DBParameterGroupArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupAlreadyExistsFault
 */
const de_DBParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupDetails
 */
const de_DBParameterGroupDetails = (output: any, context: __SerdeContext): DBParameterGroupDetails => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = de_ParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupList
 */
const de_DBParameterGroupList = (output: any, context: __SerdeContext): DBParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBParameterGroup(entry, context);
    });
};

/**
 * deserializeAws_queryDBParameterGroupNameMessage
 */
const de_DBParameterGroupNameMessage = (output: any, context: __SerdeContext): DBParameterGroupNameMessage => {
  const contents: any = {};
  if (output["DBParameterGroupName"] !== undefined) {
    contents.DBParameterGroupName = __expectString(output["DBParameterGroupName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupNotFoundFault
 */
const de_DBParameterGroupNotFoundFault = (output: any, context: __SerdeContext): DBParameterGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupQuotaExceededFault
 */
const de_DBParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupsMessage
 */
const de_DBParameterGroupsMessage = (output: any, context: __SerdeContext): DBParameterGroupsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBParameterGroups === "") {
    contents.DBParameterGroups = [];
  } else if (
    output["DBParameterGroups"] !== undefined &&
    output["DBParameterGroups"]["DBParameterGroup"] !== undefined
  ) {
    contents.DBParameterGroups = de_DBParameterGroupList(
      __getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupStatus
 */
const de_DBParameterGroupStatus = (output: any, context: __SerdeContext): DBParameterGroupStatus => {
  const contents: any = {};
  if (output["DBParameterGroupName"] !== undefined) {
    contents.DBParameterGroupName = __expectString(output["DBParameterGroupName"]);
  }
  if (output["ParameterApplyStatus"] !== undefined) {
    contents.ParameterApplyStatus = __expectString(output["ParameterApplyStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupStatusList
 */
const de_DBParameterGroupStatusList = (output: any, context: __SerdeContext): DBParameterGroupStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBParameterGroupStatus(entry, context);
    });
};

/**
 * deserializeAws_queryDBSecurityGroupMembership
 */
const de_DBSecurityGroupMembership = (output: any, context: __SerdeContext): DBSecurityGroupMembership => {
  const contents: any = {};
  if (output["DBSecurityGroupName"] !== undefined) {
    contents.DBSecurityGroupName = __expectString(output["DBSecurityGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroupMembershipList
 */
const de_DBSecurityGroupMembershipList = (output: any, context: __SerdeContext): DBSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBSecurityGroupMembership(entry, context);
    });
};

/**
 * deserializeAws_queryDBSecurityGroupNotFoundFault
 */
const de_DBSecurityGroupNotFoundFault = (output: any, context: __SerdeContext): DBSecurityGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSnapshotAlreadyExistsFault
 */
const de_DBSnapshotAlreadyExistsFault = (output: any, context: __SerdeContext): DBSnapshotAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSnapshotNotFoundFault
 */
const de_DBSnapshotNotFoundFault = (output: any, context: __SerdeContext): DBSnapshotNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroup
 */
const de_DBSubnetGroup = (output: any, context: __SerdeContext): DBSubnetGroup => {
  const contents: any = {};
  if (output["DBSubnetGroupName"] !== undefined) {
    contents.DBSubnetGroupName = __expectString(output["DBSubnetGroupName"]);
  }
  if (output["DBSubnetGroupDescription"] !== undefined) {
    contents.DBSubnetGroupDescription = __expectString(output["DBSubnetGroupDescription"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["SubnetGroupStatus"] !== undefined) {
    contents.SubnetGroupStatus = __expectString(output["SubnetGroupStatus"]);
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["Subnet"] !== undefined) {
    contents.Subnets = de_SubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
  }
  if (output["DBSubnetGroupArn"] !== undefined) {
    contents.DBSubnetGroupArn = __expectString(output["DBSubnetGroupArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupAlreadyExistsFault
 */
const de_DBSubnetGroupAlreadyExistsFault = (output: any, context: __SerdeContext): DBSubnetGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs
 */
const de_DBSubnetGroupDoesNotCoverEnoughAZs = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupDoesNotCoverEnoughAZs => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupMessage
 */
const de_DBSubnetGroupMessage = (output: any, context: __SerdeContext): DBSubnetGroupMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBSubnetGroups === "") {
    contents.DBSubnetGroups = [];
  } else if (output["DBSubnetGroups"] !== undefined && output["DBSubnetGroups"]["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroups = de_DBSubnetGroups(
      __getArrayIfSingleItem(output["DBSubnetGroups"]["DBSubnetGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupNotFoundFault
 */
const de_DBSubnetGroupNotFoundFault = (output: any, context: __SerdeContext): DBSubnetGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupQuotaExceededFault
 */
const de_DBSubnetGroupQuotaExceededFault = (output: any, context: __SerdeContext): DBSubnetGroupQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroups
 */
const de_DBSubnetGroups = (output: any, context: __SerdeContext): DBSubnetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBSubnetGroup(entry, context);
    });
};

/**
 * deserializeAws_queryDBSubnetQuotaExceededFault
 */
const de_DBSubnetQuotaExceededFault = (output: any, context: __SerdeContext): DBSubnetQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBUpgradeDependencyFailureFault
 */
const de_DBUpgradeDependencyFailureFault = (output: any, context: __SerdeContext): DBUpgradeDependencyFailureFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBClusterEndpointOutput
 */
const de_DeleteDBClusterEndpointOutput = (output: any, context: __SerdeContext): DeleteDBClusterEndpointOutput => {
  const contents: any = {};
  if (output["DBClusterEndpointIdentifier"] !== undefined) {
    contents.DBClusterEndpointIdentifier = __expectString(output["DBClusterEndpointIdentifier"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
    contents.DBClusterEndpointResourceIdentifier = __expectString(output["DBClusterEndpointResourceIdentifier"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EndpointType"] !== undefined) {
    contents.EndpointType = __expectString(output["EndpointType"]);
  }
  if (output["CustomEndpointType"] !== undefined) {
    contents.CustomEndpointType = __expectString(output["CustomEndpointType"]);
  }
  if (output.StaticMembers === "") {
    contents.StaticMembers = [];
  } else if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
    contents.StaticMembers = de_StringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = de_StringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBClusterResult
 */
const de_DeleteDBClusterResult = (output: any, context: __SerdeContext): DeleteDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBClusterSnapshotResult
 */
const de_DeleteDBClusterSnapshotResult = (output: any, context: __SerdeContext): DeleteDBClusterSnapshotResult => {
  const contents: any = {};
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = de_DBClusterSnapshot(output["DBClusterSnapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBInstanceResult
 */
const de_DeleteDBInstanceResult = (output: any, context: __SerdeContext): DeleteDBInstanceResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteEventSubscriptionResult
 */
const de_DeleteEventSubscriptionResult = (output: any, context: __SerdeContext): DeleteEventSubscriptionResult => {
  const contents: any = {};
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = de_EventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteGlobalClusterResult
 */
const de_DeleteGlobalClusterResult = (output: any, context: __SerdeContext): DeleteGlobalClusterResult => {
  const contents: any = {};
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = de_GlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBClusterSnapshotAttributesResult
 */
const de_DescribeDBClusterSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeDBClusterSnapshotAttributesResult => {
  const contents: any = {};
  if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
    contents.DBClusterSnapshotAttributesResult = de_DBClusterSnapshotAttributesResult(
      output["DBClusterSnapshotAttributesResult"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEngineDefaultClusterParametersResult
 */
const de_DescribeEngineDefaultClusterParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeEngineDefaultClusterParametersResult => {
  const contents: any = {};
  if (output["EngineDefaults"] !== undefined) {
    contents.EngineDefaults = de_EngineDefaults(output["EngineDefaults"], context);
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
 * deserializeAws_queryDescribeValidDBInstanceModificationsResult
 */
const de_DescribeValidDBInstanceModificationsResult = (
  output: any,
  context: __SerdeContext
): DescribeValidDBInstanceModificationsResult => {
  const contents: any = {};
  if (output["ValidDBInstanceModificationsMessage"] !== undefined) {
    contents.ValidDBInstanceModificationsMessage = de_ValidDBInstanceModificationsMessage(
      output["ValidDBInstanceModificationsMessage"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDomainMembership
 */
const de_DomainMembership = (output: any, context: __SerdeContext): DomainMembership => {
  const contents: any = {};
  if (output["Domain"] !== undefined) {
    contents.Domain = __expectString(output["Domain"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["FQDN"] !== undefined) {
    contents.FQDN = __expectString(output["FQDN"]);
  }
  if (output["IAMRoleName"] !== undefined) {
    contents.IAMRoleName = __expectString(output["IAMRoleName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDomainMembershipList
 */
const de_DomainMembershipList = (output: any, context: __SerdeContext): DomainMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainMembership(entry, context);
    });
};

/**
 * deserializeAws_queryDomainNotFoundFault
 */
const de_DomainNotFoundFault = (output: any, context: __SerdeContext): DomainNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDoubleRange
 */
const de_DoubleRange = (output: any, context: __SerdeContext): DoubleRange => {
  const contents: any = {};
  if (output["From"] !== undefined) {
    contents.From = __strictParseFloat(output["From"]) as number;
  }
  if (output["To"] !== undefined) {
    contents.To = __strictParseFloat(output["To"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDoubleRangeList
 */
const de_DoubleRangeList = (output: any, context: __SerdeContext): DoubleRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DoubleRange(entry, context);
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
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(output["HostedZoneId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEngineDefaults
 */
const de_EngineDefaults = (output: any, context: __SerdeContext): EngineDefaults => {
  const contents: any = {};
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = __expectString(output["DBParameterGroupFamily"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = de_ParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
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
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  } else if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
    contents.EventCategories = de_EventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Date"]));
  }
  if (output["SourceArn"] !== undefined) {
    contents.SourceArn = __expectString(output["SourceArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventCategoriesList
 */
const de_EventCategoriesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryEventCategoriesMap
 */
const de_EventCategoriesMap = (output: any, context: __SerdeContext): EventCategoriesMap => {
  const contents: any = {};
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  } else if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
    contents.EventCategories = de_EventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryEventCategoriesMapList
 */
const de_EventCategoriesMapList = (output: any, context: __SerdeContext): EventCategoriesMap[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventCategoriesMap(entry, context);
    });
};

/**
 * deserializeAws_queryEventCategoriesMessage
 */
const de_EventCategoriesMessage = (output: any, context: __SerdeContext): EventCategoriesMessage => {
  const contents: any = {};
  if (output.EventCategoriesMapList === "") {
    contents.EventCategoriesMapList = [];
  } else if (
    output["EventCategoriesMapList"] !== undefined &&
    output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined
  ) {
    contents.EventCategoriesMapList = de_EventCategoriesMapList(
      __getArrayIfSingleItem(output["EventCategoriesMapList"]["EventCategoriesMap"]),
      context
    );
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
 * deserializeAws_queryEventSubscription
 */
const de_EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  const contents: any = {};
  if (output["CustomerAwsId"] !== undefined) {
    contents.CustomerAwsId = __expectString(output["CustomerAwsId"]);
  }
  if (output["CustSubscriptionId"] !== undefined) {
    contents.CustSubscriptionId = __expectString(output["CustSubscriptionId"]);
  }
  if (output["SnsTopicArn"] !== undefined) {
    contents.SnsTopicArn = __expectString(output["SnsTopicArn"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SubscriptionCreationTime"] !== undefined) {
    contents.SubscriptionCreationTime = __expectString(output["SubscriptionCreationTime"]);
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output.SourceIdsList === "") {
    contents.SourceIdsList = [];
  } else if (output["SourceIdsList"] !== undefined && output["SourceIdsList"]["SourceId"] !== undefined) {
    contents.SourceIdsList = de_SourceIdsList(__getArrayIfSingleItem(output["SourceIdsList"]["SourceId"]), context);
  }
  if (output.EventCategoriesList === "") {
    contents.EventCategoriesList = [];
  } else if (
    output["EventCategoriesList"] !== undefined &&
    output["EventCategoriesList"]["EventCategory"] !== undefined
  ) {
    contents.EventCategoriesList = de_EventCategoriesList(
      __getArrayIfSingleItem(output["EventCategoriesList"]["EventCategory"]),
      context
    );
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["EventSubscriptionArn"] !== undefined) {
    contents.EventSubscriptionArn = __expectString(output["EventSubscriptionArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventSubscriptionQuotaExceededFault
 */
const de_EventSubscriptionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): EventSubscriptionQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventSubscriptionsList
 */
const de_EventSubscriptionsList = (output: any, context: __SerdeContext): EventSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventSubscription(entry, context);
    });
};

/**
 * deserializeAws_queryEventSubscriptionsMessage
 */
const de_EventSubscriptionsMessage = (output: any, context: __SerdeContext): EventSubscriptionsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.EventSubscriptionsList === "") {
    contents.EventSubscriptionsList = [];
  } else if (
    output["EventSubscriptionsList"] !== undefined &&
    output["EventSubscriptionsList"]["EventSubscription"] !== undefined
  ) {
    contents.EventSubscriptionsList = de_EventSubscriptionsList(
      __getArrayIfSingleItem(output["EventSubscriptionsList"]["EventSubscription"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryFailoverDBClusterResult
 */
const de_FailoverDBClusterResult = (output: any, context: __SerdeContext): FailoverDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryFailoverGlobalClusterResult
 */
const de_FailoverGlobalClusterResult = (output: any, context: __SerdeContext): FailoverGlobalClusterResult => {
  const contents: any = {};
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = de_GlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalCluster
 */
const de_GlobalCluster = (output: any, context: __SerdeContext): GlobalCluster => {
  const contents: any = {};
  if (output["GlobalClusterIdentifier"] !== undefined) {
    contents.GlobalClusterIdentifier = __expectString(output["GlobalClusterIdentifier"]);
  }
  if (output["GlobalClusterResourceId"] !== undefined) {
    contents.GlobalClusterResourceId = __expectString(output["GlobalClusterResourceId"]);
  }
  if (output["GlobalClusterArn"] !== undefined) {
    contents.GlobalClusterArn = __expectString(output["GlobalClusterArn"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = __parseBoolean(output["StorageEncrypted"]);
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = __parseBoolean(output["DeletionProtection"]);
  }
  if (output.GlobalClusterMembers === "") {
    contents.GlobalClusterMembers = [];
  } else if (
    output["GlobalClusterMembers"] !== undefined &&
    output["GlobalClusterMembers"]["GlobalClusterMember"] !== undefined
  ) {
    contents.GlobalClusterMembers = de_GlobalClusterMemberList(
      __getArrayIfSingleItem(output["GlobalClusterMembers"]["GlobalClusterMember"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClusterAlreadyExistsFault
 */
const de_GlobalClusterAlreadyExistsFault = (output: any, context: __SerdeContext): GlobalClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClusterList
 */
const de_GlobalClusterList = (output: any, context: __SerdeContext): GlobalCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GlobalCluster(entry, context);
    });
};

/**
 * deserializeAws_queryGlobalClusterMember
 */
const de_GlobalClusterMember = (output: any, context: __SerdeContext): GlobalClusterMember => {
  const contents: any = {};
  if (output["DBClusterArn"] !== undefined) {
    contents.DBClusterArn = __expectString(output["DBClusterArn"]);
  }
  if (output.Readers === "") {
    contents.Readers = [];
  } else if (output["Readers"] !== undefined && output["Readers"]["member"] !== undefined) {
    contents.Readers = de_ReadersArnList(__getArrayIfSingleItem(output["Readers"]["member"]), context);
  }
  if (output["IsWriter"] !== undefined) {
    contents.IsWriter = __parseBoolean(output["IsWriter"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClusterMemberList
 */
const de_GlobalClusterMemberList = (output: any, context: __SerdeContext): GlobalClusterMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GlobalClusterMember(entry, context);
    });
};

/**
 * deserializeAws_queryGlobalClusterNotFoundFault
 */
const de_GlobalClusterNotFoundFault = (output: any, context: __SerdeContext): GlobalClusterNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClusterQuotaExceededFault
 */
const de_GlobalClusterQuotaExceededFault = (output: any, context: __SerdeContext): GlobalClusterQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClustersMessage
 */
const de_GlobalClustersMessage = (output: any, context: __SerdeContext): GlobalClustersMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.GlobalClusters === "") {
    contents.GlobalClusters = [];
  } else if (output["GlobalClusters"] !== undefined && output["GlobalClusters"]["GlobalClusterMember"] !== undefined) {
    contents.GlobalClusters = de_GlobalClusterList(
      __getArrayIfSingleItem(output["GlobalClusters"]["GlobalClusterMember"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceQuotaExceededFault
 */
const de_InstanceQuotaExceededFault = (output: any, context: __SerdeContext): InstanceQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientDBClusterCapacityFault
 */
const de_InsufficientDBClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientDBClusterCapacityFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientDBInstanceCapacityFault
 */
const de_InsufficientDBInstanceCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientDBInstanceCapacityFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientStorageClusterCapacityFault
 */
const de_InsufficientStorageClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientStorageClusterCapacityFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBClusterEndpointStateFault
 */
const de_InvalidDBClusterEndpointStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterEndpointStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBClusterSnapshotStateFault
 */
const de_InvalidDBClusterSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterSnapshotStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBClusterStateFault
 */
const de_InvalidDBClusterStateFault = (output: any, context: __SerdeContext): InvalidDBClusterStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBInstanceStateFault
 */
const de_InvalidDBInstanceStateFault = (output: any, context: __SerdeContext): InvalidDBInstanceStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBParameterGroupStateFault
 */
const de_InvalidDBParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBParameterGroupStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBSecurityGroupStateFault
 */
const de_InvalidDBSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSecurityGroupStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBSnapshotStateFault
 */
const de_InvalidDBSnapshotStateFault = (output: any, context: __SerdeContext): InvalidDBSnapshotStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBSubnetGroupStateFault
 */
const de_InvalidDBSubnetGroupStateFault = (output: any, context: __SerdeContext): InvalidDBSubnetGroupStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBSubnetStateFault
 */
const de_InvalidDBSubnetStateFault = (output: any, context: __SerdeContext): InvalidDBSubnetStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidEventSubscriptionStateFault
 */
const de_InvalidEventSubscriptionStateFault = (
  output: any,
  context: __SerdeContext
): InvalidEventSubscriptionStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidGlobalClusterStateFault
 */
const de_InvalidGlobalClusterStateFault = (output: any, context: __SerdeContext): InvalidGlobalClusterStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRestoreFault
 */
const de_InvalidRestoreFault = (output: any, context: __SerdeContext): InvalidRestoreFault => {
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
 * deserializeAws_queryKMSKeyNotAccessibleFault
 */
const de_KMSKeyNotAccessibleFault = (output: any, context: __SerdeContext): KMSKeyNotAccessibleFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLogTypeList
 */
const de_LogTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryModifyDBClusterEndpointOutput
 */
const de_ModifyDBClusterEndpointOutput = (output: any, context: __SerdeContext): ModifyDBClusterEndpointOutput => {
  const contents: any = {};
  if (output["DBClusterEndpointIdentifier"] !== undefined) {
    contents.DBClusterEndpointIdentifier = __expectString(output["DBClusterEndpointIdentifier"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
    contents.DBClusterEndpointResourceIdentifier = __expectString(output["DBClusterEndpointResourceIdentifier"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EndpointType"] !== undefined) {
    contents.EndpointType = __expectString(output["EndpointType"]);
  }
  if (output["CustomEndpointType"] !== undefined) {
    contents.CustomEndpointType = __expectString(output["CustomEndpointType"]);
  }
  if (output.StaticMembers === "") {
    contents.StaticMembers = [];
  } else if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
    contents.StaticMembers = de_StringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = de_StringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBClusterResult
 */
const de_ModifyDBClusterResult = (output: any, context: __SerdeContext): ModifyDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBClusterSnapshotAttributeResult
 */
const de_ModifyDBClusterSnapshotAttributeResult = (
  output: any,
  context: __SerdeContext
): ModifyDBClusterSnapshotAttributeResult => {
  const contents: any = {};
  if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
    contents.DBClusterSnapshotAttributesResult = de_DBClusterSnapshotAttributesResult(
      output["DBClusterSnapshotAttributesResult"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBInstanceResult
 */
const de_ModifyDBInstanceResult = (output: any, context: __SerdeContext): ModifyDBInstanceResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBSubnetGroupResult
 */
const de_ModifyDBSubnetGroupResult = (output: any, context: __SerdeContext): ModifyDBSubnetGroupResult => {
  const contents: any = {};
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = de_DBSubnetGroup(output["DBSubnetGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyEventSubscriptionResult
 */
const de_ModifyEventSubscriptionResult = (output: any, context: __SerdeContext): ModifyEventSubscriptionResult => {
  const contents: any = {};
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = de_EventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyGlobalClusterResult
 */
const de_ModifyGlobalClusterResult = (output: any, context: __SerdeContext): ModifyGlobalClusterResult => {
  const contents: any = {};
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = de_GlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupMembership
 */
const de_OptionGroupMembership = (output: any, context: __SerdeContext): OptionGroupMembership => {
  const contents: any = {};
  if (output["OptionGroupName"] !== undefined) {
    contents.OptionGroupName = __expectString(output["OptionGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupMembershipList
 */
const de_OptionGroupMembershipList = (output: any, context: __SerdeContext): OptionGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptionGroupMembership(entry, context);
    });
};

/**
 * deserializeAws_queryOptionGroupNotFoundFault
 */
const de_OptionGroupNotFoundFault = (output: any, context: __SerdeContext): OptionGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrderableDBInstanceOption
 */
const de_OrderableDBInstanceOption = (output: any, context: __SerdeContext): OrderableDBInstanceOption => {
  const contents: any = {};
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = __expectString(output["DBInstanceClass"]);
  }
  if (output["LicenseModel"] !== undefined) {
    contents.LicenseModel = __expectString(output["LicenseModel"]);
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = de_AvailabilityZoneList(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  if (output["MultiAZCapable"] !== undefined) {
    contents.MultiAZCapable = __parseBoolean(output["MultiAZCapable"]);
  }
  if (output["ReadReplicaCapable"] !== undefined) {
    contents.ReadReplicaCapable = __parseBoolean(output["ReadReplicaCapable"]);
  }
  if (output["Vpc"] !== undefined) {
    contents.Vpc = __parseBoolean(output["Vpc"]);
  }
  if (output["SupportsStorageEncryption"] !== undefined) {
    contents.SupportsStorageEncryption = __parseBoolean(output["SupportsStorageEncryption"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["SupportsIops"] !== undefined) {
    contents.SupportsIops = __parseBoolean(output["SupportsIops"]);
  }
  if (output["SupportsEnhancedMonitoring"] !== undefined) {
    contents.SupportsEnhancedMonitoring = __parseBoolean(output["SupportsEnhancedMonitoring"]);
  }
  if (output["SupportsIAMDatabaseAuthentication"] !== undefined) {
    contents.SupportsIAMDatabaseAuthentication = __parseBoolean(output["SupportsIAMDatabaseAuthentication"]);
  }
  if (output["SupportsPerformanceInsights"] !== undefined) {
    contents.SupportsPerformanceInsights = __parseBoolean(output["SupportsPerformanceInsights"]);
  }
  if (output["MinStorageSize"] !== undefined) {
    contents.MinStorageSize = __strictParseInt32(output["MinStorageSize"]) as number;
  }
  if (output["MaxStorageSize"] !== undefined) {
    contents.MaxStorageSize = __strictParseInt32(output["MaxStorageSize"]) as number;
  }
  if (output["MinIopsPerDbInstance"] !== undefined) {
    contents.MinIopsPerDbInstance = __strictParseInt32(output["MinIopsPerDbInstance"]) as number;
  }
  if (output["MaxIopsPerDbInstance"] !== undefined) {
    contents.MaxIopsPerDbInstance = __strictParseInt32(output["MaxIopsPerDbInstance"]) as number;
  }
  if (output["MinIopsPerGib"] !== undefined) {
    contents.MinIopsPerGib = __strictParseFloat(output["MinIopsPerGib"]) as number;
  }
  if (output["MaxIopsPerGib"] !== undefined) {
    contents.MaxIopsPerGib = __strictParseFloat(output["MaxIopsPerGib"]) as number;
  }
  if (output["SupportsGlobalDatabases"] !== undefined) {
    contents.SupportsGlobalDatabases = __parseBoolean(output["SupportsGlobalDatabases"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrderableDBInstanceOptionsList
 */
const de_OrderableDBInstanceOptionsList = (output: any, context: __SerdeContext): OrderableDBInstanceOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OrderableDBInstanceOption(entry, context);
    });
};

/**
 * deserializeAws_queryOrderableDBInstanceOptionsMessage
 */
const de_OrderableDBInstanceOptionsMessage = (
  output: any,
  context: __SerdeContext
): OrderableDBInstanceOptionsMessage => {
  const contents: any = {};
  if (output.OrderableDBInstanceOptions === "") {
    contents.OrderableDBInstanceOptions = [];
  } else if (
    output["OrderableDBInstanceOptions"] !== undefined &&
    output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"] !== undefined
  ) {
    contents.OrderableDBInstanceOptions = de_OrderableDBInstanceOptionsList(
      __getArrayIfSingleItem(output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
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
  if (output["ApplyType"] !== undefined) {
    contents.ApplyType = __expectString(output["ApplyType"]);
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
  if (output["ApplyMethod"] !== undefined) {
    contents.ApplyMethod = __expectString(output["ApplyMethod"]);
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
 * deserializeAws_queryPendingCloudwatchLogsExports
 */
const de_PendingCloudwatchLogsExports = (output: any, context: __SerdeContext): PendingCloudwatchLogsExports => {
  const contents: any = {};
  if (output.LogTypesToEnable === "") {
    contents.LogTypesToEnable = [];
  } else if (output["LogTypesToEnable"] !== undefined && output["LogTypesToEnable"]["member"] !== undefined) {
    contents.LogTypesToEnable = de_LogTypeList(__getArrayIfSingleItem(output["LogTypesToEnable"]["member"]), context);
  }
  if (output.LogTypesToDisable === "") {
    contents.LogTypesToDisable = [];
  } else if (output["LogTypesToDisable"] !== undefined && output["LogTypesToDisable"]["member"] !== undefined) {
    contents.LogTypesToDisable = de_LogTypeList(__getArrayIfSingleItem(output["LogTypesToDisable"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPendingMaintenanceAction
 */
const de_PendingMaintenanceAction = (output: any, context: __SerdeContext): PendingMaintenanceAction => {
  const contents: any = {};
  if (output["Action"] !== undefined) {
    contents.Action = __expectString(output["Action"]);
  }
  if (output["AutoAppliedAfterDate"] !== undefined) {
    contents.AutoAppliedAfterDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["AutoAppliedAfterDate"]));
  }
  if (output["ForcedApplyDate"] !== undefined) {
    contents.ForcedApplyDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ForcedApplyDate"]));
  }
  if (output["OptInStatus"] !== undefined) {
    contents.OptInStatus = __expectString(output["OptInStatus"]);
  }
  if (output["CurrentApplyDate"] !== undefined) {
    contents.CurrentApplyDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CurrentApplyDate"]));
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPendingMaintenanceActionDetails
 */
const de_PendingMaintenanceActionDetails = (output: any, context: __SerdeContext): PendingMaintenanceAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PendingMaintenanceAction(entry, context);
    });
};

/**
 * deserializeAws_queryPendingMaintenanceActions
 */
const de_PendingMaintenanceActions = (output: any, context: __SerdeContext): ResourcePendingMaintenanceActions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourcePendingMaintenanceActions(entry, context);
    });
};

/**
 * deserializeAws_queryPendingMaintenanceActionsMessage
 */
const de_PendingMaintenanceActionsMessage = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceActionsMessage => {
  const contents: any = {};
  if (output.PendingMaintenanceActions === "") {
    contents.PendingMaintenanceActions = [];
  } else if (
    output["PendingMaintenanceActions"] !== undefined &&
    output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"] !== undefined
  ) {
    contents.PendingMaintenanceActions = de_PendingMaintenanceActions(
      __getArrayIfSingleItem(output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPendingModifiedValues
 */
const de_PendingModifiedValues = (output: any, context: __SerdeContext): PendingModifiedValues => {
  const contents: any = {};
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = __expectString(output["DBInstanceClass"]);
  }
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output["MasterUserPassword"] !== undefined) {
    contents.MasterUserPassword = __expectString(output["MasterUserPassword"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = __strictParseInt32(output["BackupRetentionPeriod"]) as number;
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = __parseBoolean(output["MultiAZ"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["LicenseModel"] !== undefined) {
    contents.LicenseModel = __expectString(output["LicenseModel"]);
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = __strictParseInt32(output["Iops"]) as number;
  }
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = __expectString(output["DBInstanceIdentifier"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["CACertificateIdentifier"] !== undefined) {
    contents.CACertificateIdentifier = __expectString(output["CACertificateIdentifier"]);
  }
  if (output["DBSubnetGroupName"] !== undefined) {
    contents.DBSubnetGroupName = __expectString(output["DBSubnetGroupName"]);
  }
  if (output["PendingCloudwatchLogsExports"] !== undefined) {
    contents.PendingCloudwatchLogsExports = de_PendingCloudwatchLogsExports(
      output["PendingCloudwatchLogsExports"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryPromoteReadReplicaDBClusterResult
 */
const de_PromoteReadReplicaDBClusterResult = (
  output: any,
  context: __SerdeContext
): PromoteReadReplicaDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryProvisionedIopsNotAvailableInAZFault
 */
const de_ProvisionedIopsNotAvailableInAZFault = (
  output: any,
  context: __SerdeContext
): ProvisionedIopsNotAvailableInAZFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRange
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  const contents: any = {};
  if (output["From"] !== undefined) {
    contents.From = __strictParseInt32(output["From"]) as number;
  }
  if (output["To"] !== undefined) {
    contents.To = __strictParseInt32(output["To"]) as number;
  }
  if (output["Step"] !== undefined) {
    contents.Step = __strictParseInt32(output["Step"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryRangeList
 */
const de_RangeList = (output: any, context: __SerdeContext): Range[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Range(entry, context);
    });
};

/**
 * deserializeAws_queryReadersArnList
 */
const de_ReadersArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryReadReplicaDBClusterIdentifierList
 */
const de_ReadReplicaDBClusterIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryReadReplicaDBInstanceIdentifierList
 */
const de_ReadReplicaDBInstanceIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryReadReplicaIdentifierList
 */
const de_ReadReplicaIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryRebootDBInstanceResult
 */
const de_RebootDBInstanceResult = (output: any, context: __SerdeContext): RebootDBInstanceResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRemoveFromGlobalClusterResult
 */
const de_RemoveFromGlobalClusterResult = (output: any, context: __SerdeContext): RemoveFromGlobalClusterResult => {
  const contents: any = {};
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = de_GlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult
 */
const de_RemoveSourceIdentifierFromSubscriptionResult = (
  output: any,
  context: __SerdeContext
): RemoveSourceIdentifierFromSubscriptionResult => {
  const contents: any = {};
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = de_EventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundFault
 */
const de_ResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourcePendingMaintenanceActions
 */
const de_ResourcePendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions => {
  const contents: any = {};
  if (output["ResourceIdentifier"] !== undefined) {
    contents.ResourceIdentifier = __expectString(output["ResourceIdentifier"]);
  }
  if (output.PendingMaintenanceActionDetails === "") {
    contents.PendingMaintenanceActionDetails = [];
  } else if (
    output["PendingMaintenanceActionDetails"] !== undefined &&
    output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"] !== undefined
  ) {
    contents.PendingMaintenanceActionDetails = de_PendingMaintenanceActionDetails(
      __getArrayIfSingleItem(output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreDBClusterFromSnapshotResult
 */
const de_RestoreDBClusterFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreDBClusterFromSnapshotResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreDBClusterToPointInTimeResult
 */
const de_RestoreDBClusterToPointInTimeResult = (
  output: any,
  context: __SerdeContext
): RestoreDBClusterToPointInTimeResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessV2ScalingConfigurationInfo
 */
const de_ServerlessV2ScalingConfigurationInfo = (
  output: any,
  context: __SerdeContext
): ServerlessV2ScalingConfigurationInfo => {
  const contents: any = {};
  if (output["MinCapacity"] !== undefined) {
    contents.MinCapacity = __strictParseFloat(output["MinCapacity"]) as number;
  }
  if (output["MaxCapacity"] !== undefined) {
    contents.MaxCapacity = __strictParseFloat(output["MaxCapacity"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_querySharedSnapshotQuotaExceededFault
 */
const de_SharedSnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SharedSnapshotQuotaExceededFault => {
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
 * deserializeAws_querySNSInvalidTopicFault
 */
const de_SNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSNoAuthorizationFault
 */
const de_SNSNoAuthorizationFault = (output: any, context: __SerdeContext): SNSNoAuthorizationFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSTopicArnNotFoundFault
 */
const de_SNSTopicArnNotFoundFault = (output: any, context: __SerdeContext): SNSTopicArnNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceIdsList
 */
const de_SourceIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySourceNotFoundFault
 */
const de_SourceNotFoundFault = (output: any, context: __SerdeContext): SourceNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStartDBClusterResult
 */
const de_StartDBClusterResult = (output: any, context: __SerdeContext): StartDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStopDBClusterResult
 */
const de_StopDBClusterResult = (output: any, context: __SerdeContext): StopDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStorageQuotaExceededFault
 */
const de_StorageQuotaExceededFault = (output: any, context: __SerdeContext): StorageQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStorageTypeNotSupportedFault
 */
const de_StorageTypeNotSupportedFault = (output: any, context: __SerdeContext): StorageTypeNotSupportedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
  if (output["SubnetStatus"] !== undefined) {
    contents.SubnetStatus = __expectString(output["SubnetStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetAlreadyInUse
 */
const de_SubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
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
 * deserializeAws_querySubscriptionAlreadyExistFault
 */
const de_SubscriptionAlreadyExistFault = (output: any, context: __SerdeContext): SubscriptionAlreadyExistFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionCategoryNotFoundFault
 */
const de_SubscriptionCategoryNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionCategoryNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionNotFoundFault
 */
const de_SubscriptionNotFoundFault = (output: any, context: __SerdeContext): SubscriptionNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySupportedCharacterSetsList
 */
const de_SupportedCharacterSetsList = (output: any, context: __SerdeContext): CharacterSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CharacterSet(entry, context);
    });
};

/**
 * deserializeAws_querySupportedTimezonesList
 */
const de_SupportedTimezonesList = (output: any, context: __SerdeContext): Timezone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Timezone(entry, context);
    });
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
 * deserializeAws_queryTimezone
 */
const de_Timezone = (output: any, context: __SerdeContext): Timezone => {
  const contents: any = {};
  if (output["TimezoneName"] !== undefined) {
    contents.TimezoneName = __expectString(output["TimezoneName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpgradeTarget
 */
const de_UpgradeTarget = (output: any, context: __SerdeContext): UpgradeTarget => {
  const contents: any = {};
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["AutoUpgrade"] !== undefined) {
    contents.AutoUpgrade = __parseBoolean(output["AutoUpgrade"]);
  }
  if (output["IsMajorVersionUpgrade"] !== undefined) {
    contents.IsMajorVersionUpgrade = __parseBoolean(output["IsMajorVersionUpgrade"]);
  }
  if (output["SupportsGlobalDatabases"] !== undefined) {
    contents.SupportsGlobalDatabases = __parseBoolean(output["SupportsGlobalDatabases"]);
  }
  return contents;
};

/**
 * deserializeAws_queryValidDBInstanceModificationsMessage
 */
const de_ValidDBInstanceModificationsMessage = (
  output: any,
  context: __SerdeContext
): ValidDBInstanceModificationsMessage => {
  const contents: any = {};
  if (output.Storage === "") {
    contents.Storage = [];
  } else if (output["Storage"] !== undefined && output["Storage"]["ValidStorageOptions"] !== undefined) {
    contents.Storage = de_ValidStorageOptionsList(
      __getArrayIfSingleItem(output["Storage"]["ValidStorageOptions"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryValidStorageOptions
 */
const de_ValidStorageOptions = (output: any, context: __SerdeContext): ValidStorageOptions => {
  const contents: any = {};
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output.StorageSize === "") {
    contents.StorageSize = [];
  } else if (output["StorageSize"] !== undefined && output["StorageSize"]["Range"] !== undefined) {
    contents.StorageSize = de_RangeList(__getArrayIfSingleItem(output["StorageSize"]["Range"]), context);
  }
  if (output.ProvisionedIops === "") {
    contents.ProvisionedIops = [];
  } else if (output["ProvisionedIops"] !== undefined && output["ProvisionedIops"]["Range"] !== undefined) {
    contents.ProvisionedIops = de_RangeList(__getArrayIfSingleItem(output["ProvisionedIops"]["Range"]), context);
  }
  if (output.IopsToStorageRatio === "") {
    contents.IopsToStorageRatio = [];
  } else if (output["IopsToStorageRatio"] !== undefined && output["IopsToStorageRatio"]["DoubleRange"] !== undefined) {
    contents.IopsToStorageRatio = de_DoubleRangeList(
      __getArrayIfSingleItem(output["IopsToStorageRatio"]["DoubleRange"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryValidStorageOptionsList
 */
const de_ValidStorageOptionsList = (output: any, context: __SerdeContext): ValidStorageOptions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidStorageOptions(entry, context);
    });
};

/**
 * deserializeAws_queryValidUpgradeTargetList
 */
const de_ValidUpgradeTargetList = (output: any, context: __SerdeContext): UpgradeTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UpgradeTarget(entry, context);
    });
};

/**
 * deserializeAws_queryVpcSecurityGroupMembership
 */
const de_VpcSecurityGroupMembership = (output: any, context: __SerdeContext): VpcSecurityGroupMembership => {
  const contents: any = {};
  if (output["VpcSecurityGroupId"] !== undefined) {
    contents.VpcSecurityGroupId = __expectString(output["VpcSecurityGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryVpcSecurityGroupMembershipList
 */
const de_VpcSecurityGroupMembershipList = (output: any, context: __SerdeContext): VpcSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VpcSecurityGroupMembership(entry, context);
    });
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
