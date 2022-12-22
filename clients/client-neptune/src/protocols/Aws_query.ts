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
  serializeFloat as __serializeFloat,
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

export const serializeAws_queryAddRoleToDBClusterCommand = async (
  input: AddRoleToDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddRoleToDBClusterMessage(input, context),
    Action: "AddRoleToDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAddSourceIdentifierToSubscriptionCommand = async (
  input: AddSourceIdentifierToSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddSourceIdentifierToSubscriptionMessage(input, context),
    Action: "AddSourceIdentifierToSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryApplyPendingMaintenanceActionCommand = async (
  input: ApplyPendingMaintenanceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryApplyPendingMaintenanceActionMessage(input, context),
    Action: "ApplyPendingMaintenanceAction",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopyDBClusterParameterGroupCommand = async (
  input: CopyDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyDBClusterParameterGroupMessage(input, context),
    Action: "CopyDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopyDBClusterSnapshotCommand = async (
  input: CopyDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyDBClusterSnapshotMessage(input, context),
    Action: "CopyDBClusterSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopyDBParameterGroupCommand = async (
  input: CopyDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyDBParameterGroupMessage(input, context),
    Action: "CopyDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBClusterCommand = async (
  input: CreateDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBClusterMessage(input, context),
    Action: "CreateDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBClusterEndpointCommand = async (
  input: CreateDBClusterEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBClusterEndpointMessage(input, context),
    Action: "CreateDBClusterEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBClusterParameterGroupCommand = async (
  input: CreateDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBClusterParameterGroupMessage(input, context),
    Action: "CreateDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBClusterSnapshotCommand = async (
  input: CreateDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBClusterSnapshotMessage(input, context),
    Action: "CreateDBClusterSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBInstanceCommand = async (
  input: CreateDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBInstanceMessage(input, context),
    Action: "CreateDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBParameterGroupCommand = async (
  input: CreateDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBParameterGroupMessage(input, context),
    Action: "CreateDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBSubnetGroupCommand = async (
  input: CreateDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBSubnetGroupMessage(input, context),
    Action: "CreateDBSubnetGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateEventSubscriptionCommand = async (
  input: CreateEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateEventSubscriptionMessage(input, context),
    Action: "CreateEventSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateGlobalClusterCommand = async (
  input: CreateGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateGlobalClusterMessage(input, context),
    Action: "CreateGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBClusterCommand = async (
  input: DeleteDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBClusterMessage(input, context),
    Action: "DeleteDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBClusterEndpointCommand = async (
  input: DeleteDBClusterEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBClusterEndpointMessage(input, context),
    Action: "DeleteDBClusterEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBClusterParameterGroupCommand = async (
  input: DeleteDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBClusterParameterGroupMessage(input, context),
    Action: "DeleteDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBClusterSnapshotCommand = async (
  input: DeleteDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBClusterSnapshotMessage(input, context),
    Action: "DeleteDBClusterSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBInstanceCommand = async (
  input: DeleteDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBInstanceMessage(input, context),
    Action: "DeleteDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBParameterGroupCommand = async (
  input: DeleteDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBParameterGroupMessage(input, context),
    Action: "DeleteDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBSubnetGroupCommand = async (
  input: DeleteDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBSubnetGroupMessage(input, context),
    Action: "DeleteDBSubnetGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteEventSubscriptionCommand = async (
  input: DeleteEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteEventSubscriptionMessage(input, context),
    Action: "DeleteEventSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteGlobalClusterCommand = async (
  input: DeleteGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteGlobalClusterMessage(input, context),
    Action: "DeleteGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterEndpointsCommand = async (
  input: DescribeDBClusterEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterEndpointsMessage(input, context),
    Action: "DescribeDBClusterEndpoints",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterParameterGroupsCommand = async (
  input: DescribeDBClusterParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterParameterGroupsMessage(input, context),
    Action: "DescribeDBClusterParameterGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterParametersCommand = async (
  input: DescribeDBClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterParametersMessage(input, context),
    Action: "DescribeDBClusterParameters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClustersCommand = async (
  input: DescribeDBClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClustersMessage(input, context),
    Action: "DescribeDBClusters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = async (
  input: DescribeDBClusterSnapshotAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterSnapshotAttributesMessage(input, context),
    Action: "DescribeDBClusterSnapshotAttributes",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterSnapshotsCommand = async (
  input: DescribeDBClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterSnapshotsMessage(input, context),
    Action: "DescribeDBClusterSnapshots",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBEngineVersionsCommand = async (
  input: DescribeDBEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBEngineVersionsMessage(input, context),
    Action: "DescribeDBEngineVersions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBInstancesCommand = async (
  input: DescribeDBInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBInstancesMessage(input, context),
    Action: "DescribeDBInstances",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBParameterGroupsCommand = async (
  input: DescribeDBParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBParameterGroupsMessage(input, context),
    Action: "DescribeDBParameterGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBParametersCommand = async (
  input: DescribeDBParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBParametersMessage(input, context),
    Action: "DescribeDBParameters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBSubnetGroupsCommand = async (
  input: DescribeDBSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBSubnetGroupsMessage(input, context),
    Action: "DescribeDBSubnetGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEngineDefaultClusterParametersCommand = async (
  input: DescribeEngineDefaultClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEngineDefaultClusterParametersMessage(input, context),
    Action: "DescribeEngineDefaultClusterParameters",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventCategoriesCommand = async (
  input: DescribeEventCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventCategoriesMessage(input, context),
    Action: "DescribeEventCategories",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventSubscriptionsCommand = async (
  input: DescribeEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventSubscriptionsMessage(input, context),
    Action: "DescribeEventSubscriptions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeGlobalClustersCommand = async (
  input: DescribeGlobalClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeGlobalClustersMessage(input, context),
    Action: "DescribeGlobalClusters",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = async (
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeOrderableDBInstanceOptionsMessage(input, context),
    Action: "DescribeOrderableDBInstanceOptions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribePendingMaintenanceActionsCommand = async (
  input: DescribePendingMaintenanceActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePendingMaintenanceActionsMessage(input, context),
    Action: "DescribePendingMaintenanceActions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeValidDBInstanceModificationsCommand = async (
  input: DescribeValidDBInstanceModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeValidDBInstanceModificationsMessage(input, context),
    Action: "DescribeValidDBInstanceModifications",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryFailoverDBClusterCommand = async (
  input: FailoverDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryFailoverDBClusterMessage(input, context),
    Action: "FailoverDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryFailoverGlobalClusterCommand = async (
  input: FailoverGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryFailoverGlobalClusterMessage(input, context),
    Action: "FailoverGlobalCluster",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBClusterCommand = async (
  input: ModifyDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBClusterMessage(input, context),
    Action: "ModifyDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBClusterEndpointCommand = async (
  input: ModifyDBClusterEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBClusterEndpointMessage(input, context),
    Action: "ModifyDBClusterEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBClusterParameterGroupCommand = async (
  input: ModifyDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBClusterParameterGroupMessage(input, context),
    Action: "ModifyDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBClusterSnapshotAttributeCommand = async (
  input: ModifyDBClusterSnapshotAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBClusterSnapshotAttributeMessage(input, context),
    Action: "ModifyDBClusterSnapshotAttribute",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBInstanceCommand = async (
  input: ModifyDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBInstanceMessage(input, context),
    Action: "ModifyDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBParameterGroupCommand = async (
  input: ModifyDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBParameterGroupMessage(input, context),
    Action: "ModifyDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBSubnetGroupCommand = async (
  input: ModifyDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBSubnetGroupMessage(input, context),
    Action: "ModifyDBSubnetGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyEventSubscriptionCommand = async (
  input: ModifyEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyEventSubscriptionMessage(input, context),
    Action: "ModifyEventSubscription",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyGlobalClusterCommand = async (
  input: ModifyGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyGlobalClusterMessage(input, context),
    Action: "ModifyGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPromoteReadReplicaDBClusterCommand = async (
  input: PromoteReadReplicaDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPromoteReadReplicaDBClusterMessage(input, context),
    Action: "PromoteReadReplicaDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRebootDBInstanceCommand = async (
  input: RebootDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRebootDBInstanceMessage(input, context),
    Action: "RebootDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveFromGlobalClusterCommand = async (
  input: RemoveFromGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveFromGlobalClusterMessage(input, context),
    Action: "RemoveFromGlobalCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveRoleFromDBClusterCommand = async (
  input: RemoveRoleFromDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveRoleFromDBClusterMessage(input, context),
    Action: "RemoveRoleFromDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = async (
  input: RemoveSourceIdentifierFromSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage(input, context),
    Action: "RemoveSourceIdentifierFromSubscription",
    Version: "2014-10-31",
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
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResetDBClusterParameterGroupCommand = async (
  input: ResetDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResetDBClusterParameterGroupMessage(input, context),
    Action: "ResetDBClusterParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResetDBParameterGroupCommand = async (
  input: ResetDBParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResetDBParameterGroupMessage(input, context),
    Action: "ResetDBParameterGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreDBClusterFromSnapshotCommand = async (
  input: RestoreDBClusterFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBClusterFromSnapshotMessage(input, context),
    Action: "RestoreDBClusterFromSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreDBClusterToPointInTimeCommand = async (
  input: RestoreDBClusterToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBClusterToPointInTimeMessage(input, context),
    Action: "RestoreDBClusterToPointInTime",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartDBClusterCommand = async (
  input: StartDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartDBClusterMessage(input, context),
    Action: "StartDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStopDBClusterCommand = async (
  input: StopDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopDBClusterMessage(input, context),
    Action: "StopDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddRoleToDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddRoleToDBClusterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddRoleToDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterRoleAlreadyExists":
    case "com.amazonaws.neptune#DBClusterRoleAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterRoleQuotaExceeded":
    case "com.amazonaws.neptune#DBClusterRoleQuotaExceededFault":
      throw await deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryAddSourceIdentifierToSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddSourceIdentifierToSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddSourceIdentifierToSubscriptionResult(
    data.AddSourceIdentifierToSubscriptionResult,
    context
  );
  const response: AddSourceIdentifierToSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError = async (
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
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryAddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddTagsToResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryApplyPendingMaintenanceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryApplyPendingMaintenanceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplyPendingMaintenanceActionResult(data.ApplyPendingMaintenanceActionResult, context);
  const response: ApplyPendingMaintenanceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryApplyPendingMaintenanceActionCommandError = async (
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
      throw await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCopyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCopyDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyDBClusterParameterGroupResult(data.CopyDBClusterParameterGroupResult, context);
  const response: CopyDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyDBClusterParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCopyDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCopyDBClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyDBClusterSnapshotResult(data.CopyDBClusterSnapshotResult, context);
  const response: CopyDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyDBClusterSnapshotCommandError = async (
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
      throw await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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

export const deserializeAws_queryCopyDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCopyDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyDBParameterGroupResult(data.CopyDBParameterGroupResult, context);
  const response: CopyDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyDBParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBClusterResult(data.CreateDBClusterResult, context);
  const response: CreateDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
      throw await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBClusterEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBClusterEndpointOutput(data.CreateDBClusterEndpointResult, context);
  const response: CreateDBClusterEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBClusterEndpointCommandError = async (
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
      throw await deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterEndpointQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterEndpointQuotaExceededFault":
      throw await deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBClusterParameterGroupResult(data.CreateDBClusterParameterGroupResult, context);
  const response: CreateDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBClusterParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBClusterSnapshotResult(data.CreateDBClusterSnapshotResult, context);
  const response: CreateDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBClusterSnapshotCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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

export const deserializeAws_queryCreateDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBInstanceResult(data.CreateDBInstanceResult, context);
  const response: CreateDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBInstanceCommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.neptune#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.neptune#InstanceQuotaExceededFault":
      throw await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.neptune#StorageTypeNotSupportedFault":
      throw await deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBParameterGroupResult(data.CreateDBParameterGroupResult, context);
  const response: CreateDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
      throw await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBSubnetGroupResult(data.CreateDBSubnetGroupResult, context);
  const response: CreateDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBSubnetGroupCommandError = async (
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
      throw await deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupQuotaExceeded":
    case "com.amazonaws.neptune#DBSubnetGroupQuotaExceededFault":
      throw await deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.neptune#DBSubnetQuotaExceededFault":
      throw await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateEventSubscriptionResult(data.CreateEventSubscriptionResult, context);
  const response: CreateEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateEventSubscriptionCommandError = async (
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
      throw await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.neptune#SNSInvalidTopicFault":
      throw await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.neptune#SNSNoAuthorizationFault":
      throw await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.neptune#SNSTopicArnNotFoundFault":
      throw await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.neptune#SourceNotFoundFault":
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.neptune#SubscriptionAlreadyExistFault":
      throw await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault":
      throw await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateGlobalClusterResult(data.CreateGlobalClusterResult, context);
  const response: CreateGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateGlobalClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterAlreadyExistsFault":
    case "com.amazonaws.neptune#GlobalClusterAlreadyExistsFault":
      throw await deserializeAws_queryGlobalClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "GlobalClusterQuotaExceededFault":
    case "com.amazonaws.neptune#GlobalClusterQuotaExceededFault":
      throw await deserializeAws_queryGlobalClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBClusterResult(data.DeleteDBClusterResult, context);
  const response: DeleteDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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

export const deserializeAws_queryDeleteDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBClusterEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBClusterEndpointOutput(data.DeleteDBClusterEndpointResult, context);
  const response: DeleteDBClusterEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBClusterEndpointCommandError = async (
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
      throw await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault":
      throw await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBClusterParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBClusterParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBClusterSnapshotResult(data.DeleteDBClusterSnapshotResult, context);
  const response: DeleteDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBClusterSnapshotCommandError = async (
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
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBInstanceResult(data.DeleteDBInstanceResult, context);
  const response: DeleteDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBInstanceCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.neptune#DBSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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

export const deserializeAws_queryDeleteDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBSubnetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBSubnetGroupCommandError = async (
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
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetStateFault":
      throw await deserializeAws_queryInvalidDBSubnetStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteEventSubscriptionResult(data.DeleteEventSubscriptionResult, context);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteEventSubscriptionCommandError = async (
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
      throw await deserializeAws_queryInvalidEventSubscriptionStateFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteGlobalClusterResult(data.DeleteGlobalClusterResult, context);
  const response: DeleteGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteGlobalClusterCommandError = async (
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
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBClusterEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBClusterEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterEndpointMessage(data.DescribeDBClusterEndpointsResult, context);
  const response: DescribeDBClusterEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterEndpointsCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBClusterParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBClusterParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupsMessage(data.DescribeDBClusterParameterGroupsResult, context);
  const response: DescribeDBClusterParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterParameterGroupsCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupDetails(data.DescribeDBClusterParametersResult, context);
  const response: DescribeDBClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterParametersCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterMessage(data.DescribeDBClustersResult, context);
  const response: DescribeDBClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClustersCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBClusterSnapshotAttributesResult(
    data.DescribeDBClusterSnapshotAttributesResult,
    context
  );
  const response: DescribeDBClusterSnapshotAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError = async (
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
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterSnapshotMessage(data.DescribeDBClusterSnapshotsResult, context);
  const response: DescribeDBClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterSnapshotsCommandError = async (
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
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBEngineVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBEngineVersionMessage(data.DescribeDBEngineVersionsResult, context);
  const response: DescribeDBEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBEngineVersionsCommandOutput> => {
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

export const deserializeAws_queryDescribeDBInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBInstanceMessage(data.DescribeDBInstancesResult, context);
  const response: DescribeDBInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBInstancesCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBParameterGroupsMessage(data.DescribeDBParameterGroupsResult, context);
  const response: DescribeDBParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBParameterGroupsCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBParameterGroupDetails(data.DescribeDBParametersResult, context);
  const response: DescribeDBParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBParametersCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBSubnetGroupMessage(data.DescribeDBSubnetGroupsResult, context);
  const response: DescribeDBSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBSubnetGroupsCommandError = async (
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
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEngineDefaultClusterParametersResult(
    data.DescribeEngineDefaultClusterParametersResult,
    context
  );
  const response: DescribeEngineDefaultClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultClusterParametersCommandOutput> => {
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEventCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventCategoriesMessage(data.DescribeEventCategoriesResult, context);
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventSubscriptionsMessage(data.DescribeEventSubscriptionsResult, context);
  const response: DescribeEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventSubscriptionsCommandError = async (
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
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeGlobalClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeGlobalClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGlobalClustersMessage(data.DescribeGlobalClustersResult, context);
  const response: DescribeGlobalClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeGlobalClustersCommandError = async (
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
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryOrderableDBInstanceOptionsMessage(
    data.DescribeOrderableDBInstanceOptionsResult,
    context
  );
  const response: DescribeOrderableDBInstanceOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
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

export const deserializeAws_queryDescribePendingMaintenanceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribePendingMaintenanceActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPendingMaintenanceActionsMessage(
    data.DescribePendingMaintenanceActionsResult,
    context
  );
  const response: DescribePendingMaintenanceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribePendingMaintenanceActionsCommandError = async (
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
      throw await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeValidDBInstanceModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeValidDBInstanceModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeValidDBInstanceModificationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeValidDBInstanceModificationsResult(
    data.DescribeValidDBInstanceModificationsResult,
    context
  );
  const response: DescribeValidDBInstanceModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeValidDBInstanceModificationsCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryFailoverDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryFailoverDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryFailoverDBClusterResult(data.FailoverDBClusterResult, context);
  const response: FailoverDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryFailoverDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryFailoverGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryFailoverGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryFailoverGlobalClusterResult(data.FailoverGlobalClusterResult, context);
  const response: FailoverGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryFailoverGlobalClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context);
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
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBClusterResult(data.ModifyDBClusterResult, context);
  const response: ModifyDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBClusterEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBClusterEndpointOutput(data.ModifyDBClusterEndpointResult, context);
  const response: ModifyDBClusterEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBClusterEndpointCommandError = async (
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
      throw await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault":
      throw await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ModifyDBClusterParameterGroupResult, context);
  const response: ModifyDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBClusterParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBClusterSnapshotAttributeResult(
    data.ModifyDBClusterSnapshotAttributeResult,
    context
  );
  const response: ModifyDBClusterSnapshotAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError = async (
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
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.neptune#SharedSnapshotQuotaExceededFault":
      throw await deserializeAws_querySharedSnapshotQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBInstanceResult(data.ModifyDBInstanceResult, context);
  const response: ModifyDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBInstanceCommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.neptune#CertificateNotFoundFault":
      throw await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBUpgradeDependencyFailure":
    case "com.amazonaws.neptune#DBUpgradeDependencyFailureFault":
      throw await deserializeAws_queryDBUpgradeDependencyFailureFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.neptune#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.neptune#StorageTypeNotSupportedFault":
      throw await deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBParameterGroupNameMessage(data.ModifyDBParameterGroupResult, context);
  const response: ModifyDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBSubnetGroupResult(data.ModifyDBSubnetGroupResult, context);
  const response: ModifyDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBSubnetGroupCommandError = async (
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
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.neptune#DBSubnetQuotaExceededFault":
      throw await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.neptune#SubnetAlreadyInUse":
      throw await deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyEventSubscriptionResult(data.ModifyEventSubscriptionResult, context);
  const response: ModifyEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyEventSubscriptionCommandError = async (
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
      throw await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.neptune#SNSInvalidTopicFault":
      throw await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.neptune#SNSNoAuthorizationFault":
      throw await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.neptune#SNSTopicArnNotFoundFault":
      throw await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault":
      throw await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyGlobalClusterResult(data.ModifyGlobalClusterResult, context);
  const response: ModifyGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyGlobalClusterCommandError = async (
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
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryPromoteReadReplicaDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPromoteReadReplicaDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPromoteReadReplicaDBClusterResult(data.PromoteReadReplicaDBClusterResult, context);
  const response: PromoteReadReplicaDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPromoteReadReplicaDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryRebootDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRebootDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRebootDBInstanceResult(data.RebootDBInstanceResult, context);
  const response: RebootDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRebootDBInstanceCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryRemoveFromGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFromGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveFromGlobalClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveFromGlobalClusterResult(data.RemoveFromGlobalClusterResult, context);
  const response: RemoveFromGlobalClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveFromGlobalClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.neptune#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.neptune#InvalidGlobalClusterStateFault":
      throw await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryRemoveRoleFromDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveRoleFromDBClusterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveRoleFromDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterRoleNotFound":
    case "com.amazonaws.neptune#DBClusterRoleNotFoundFault":
      throw await deserializeAws_queryDBClusterRoleNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult(
    data.RemoveSourceIdentifierFromSubscriptionResult,
    context
  );
  const response: RemoveSourceIdentifierFromSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError = async (
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
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.neptune#SubscriptionNotFoundFault":
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
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
  await collectBody(output.body, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.neptune#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryResetDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResetDBClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ResetDBClusterParameterGroupResult, context);
  const response: ResetDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResetDBClusterParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryResetDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResetDBParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBParameterGroupNameMessage(data.ResetDBParameterGroupResult, context);
  const response: ResetDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResetDBParameterGroupCommandError = async (
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
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
      throw await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryRestoreDBClusterFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreDBClusterFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBClusterFromSnapshotResult(data.RestoreDBClusterFromSnapshotResult, context);
  const response: RestoreDBClusterFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBClusterFromSnapshotCommandError = async (
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
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault":
      throw await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
      throw await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.neptune#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.neptune#InvalidRestoreFault":
      throw await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryRestoreDBClusterToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreDBClusterToPointInTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBClusterToPointInTimeResult(data.RestoreDBClusterToPointInTimeResult, context);
  const response: RestoreDBClusterToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBClusterToPointInTimeCommandError = async (
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
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.neptune#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault":
      throw await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
      throw await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.neptune#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.neptune#InvalidRestoreFault":
      throw await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.neptune#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.neptune#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.neptune#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryStartDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartDBClusterResult(data.StartDBClusterResult, context);
  const response: StartDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryStopDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStopDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopDBClusterResult(data.StopDBClusterResult, context);
  const response: StopDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStopDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.neptune#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
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

const deserializeAws_queryCertificateNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCertificateNotFoundFault(body.Error, context);
  const exception = new CertificateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterEndpointAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterEndpointAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterEndpointAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterEndpointNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterEndpointNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterEndpointNotFoundFault(body.Error, context);
  const exception = new DBClusterEndpointNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterEndpointQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterEndpointQuotaExceededFault(body.Error, context);
  const exception = new DBClusterEndpointQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterNotFoundFault(body.Error, context);
  const exception = new DBClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterParameterGroupNotFoundFault(body.Error, context);
  const exception = new DBClusterParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterQuotaExceededFault(body.Error, context);
  const exception = new DBClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterRoleAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterRoleAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterRoleAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterRoleNotFoundFault(body.Error, context);
  const exception = new DBClusterRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterRoleQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterRoleQuotaExceededFault(body.Error, context);
  const exception = new DBClusterRoleQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterSnapshotAlreadyExistsFault(body.Error, context);
  const exception = new DBClusterSnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterSnapshotNotFoundFault(body.Error, context);
  const exception = new DBClusterSnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBInstanceAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceAlreadyExistsFault(body.Error, context);
  const exception = new DBInstanceAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBInstanceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceNotFoundFault(body.Error, context);
  const exception = new DBInstanceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBParameterGroupAlreadyExistsFault(body.Error, context);
  const exception = new DBParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBParameterGroupNotFoundFault(body.Error, context);
  const exception = new DBParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBParameterGroupQuotaExceededFault(body.Error, context);
  const exception = new DBParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSecurityGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSecurityGroupNotFoundFault(body.Error, context);
  const exception = new DBSecurityGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSnapshotAlreadyExistsFault(body.Error, context);
  const exception = new DBSnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSnapshotNotFoundFault(body.Error, context);
  const exception = new DBSnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupAlreadyExistsFault(body.Error, context);
  const exception = new DBSubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupDoesNotCoverEnoughAZs> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs(body.Error, context);
  const exception = new DBSubnetGroupDoesNotCoverEnoughAZs({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupNotFoundFault(body.Error, context);
  const exception = new DBSubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupQuotaExceededFault(body.Error, context);
  const exception = new DBSubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetQuotaExceededFault(body.Error, context);
  const exception = new DBSubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBUpgradeDependencyFailureFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBUpgradeDependencyFailureFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBUpgradeDependencyFailureFault(body.Error, context);
  const exception = new DBUpgradeDependencyFailureFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDomainNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDomainNotFoundFault(body.Error, context);
  const exception = new DomainNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventSubscriptionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEventSubscriptionQuotaExceededFault(body.Error, context);
  const exception = new EventSubscriptionQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryGlobalClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryGlobalClusterAlreadyExistsFault(body.Error, context);
  const exception = new GlobalClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryGlobalClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryGlobalClusterNotFoundFault(body.Error, context);
  const exception = new GlobalClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryGlobalClusterQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryGlobalClusterQuotaExceededFault(body.Error, context);
  const exception = new GlobalClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInstanceQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInstanceQuotaExceededFault(body.Error, context);
  const exception = new InstanceQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInsufficientDBClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDBClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientDBClusterCapacityFault(body.Error, context);
  const exception = new InsufficientDBClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDBInstanceCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientDBInstanceCapacityFault(body.Error, context);
  const exception = new InsufficientDBInstanceCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientStorageClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientStorageClusterCapacityFault(body.Error, context);
  const exception = new InsufficientStorageClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterEndpointStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBClusterEndpointStateFault(body.Error, context);
  const exception = new InvalidDBClusterEndpointStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBClusterSnapshotStateFault(body.Error, context);
  const exception = new InvalidDBClusterSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBClusterStateFault(body.Error, context);
  const exception = new InvalidDBClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBInstanceStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBInstanceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBInstanceStateFault(body.Error, context);
  const exception = new InvalidDBInstanceStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBParameterGroupStateFault(body.Error, context);
  const exception = new InvalidDBParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSecurityGroupStateFault(body.Error, context);
  const exception = new InvalidDBSecurityGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSnapshotStateFault(body.Error, context);
  const exception = new InvalidDBSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSubnetGroupStateFault(body.Error, context);
  const exception = new InvalidDBSubnetGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBSubnetStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSubnetStateFault(body.Error, context);
  const exception = new InvalidDBSubnetStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidEventSubscriptionStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventSubscriptionStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidEventSubscriptionStateFault(body.Error, context);
  const exception = new InvalidEventSubscriptionStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidGlobalClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGlobalClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidGlobalClusterStateFault(body.Error, context);
  const exception = new InvalidGlobalClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidRestoreFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRestoreFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidRestoreFault(body.Error, context);
  const exception = new InvalidRestoreFault({
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

const deserializeAws_queryKMSKeyNotAccessibleFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSKeyNotAccessibleFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSKeyNotAccessibleFault(body.Error, context);
  const exception = new KMSKeyNotAccessibleFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryOptionGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptionGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOptionGroupNotFoundFault(body.Error, context);
  const exception = new OptionGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedIopsNotAvailableInAZFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryProvisionedIopsNotAvailableInAZFault(body.Error, context);
  const exception = new ProvisionedIopsNotAvailableInAZFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundFault(body.Error, context);
  const exception = new ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySharedSnapshotQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SharedSnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySharedSnapshotQuotaExceededFault(body.Error, context);
  const exception = new SharedSnapshotQuotaExceededFault({
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

const deserializeAws_querySNSInvalidTopicFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSInvalidTopicFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySNSInvalidTopicFault(body.Error, context);
  const exception = new SNSInvalidTopicFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySNSNoAuthorizationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSNoAuthorizationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySNSNoAuthorizationFault(body.Error, context);
  const exception = new SNSNoAuthorizationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySNSTopicArnNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSTopicArnNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySNSTopicArnNotFoundFault(body.Error, context);
  const exception = new SNSTopicArnNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySourceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySourceNotFoundFault(body.Error, context);
  const exception = new SourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryStorageQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStorageQuotaExceededFault(body.Error, context);
  const exception = new StorageQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryStorageTypeNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageTypeNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStorageTypeNotSupportedFault(body.Error, context);
  const exception = new StorageTypeNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubnetAlreadyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetAlreadyInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetAlreadyInUse(body.Error, context);
  const exception = new SubnetAlreadyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionAlreadyExistFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionAlreadyExistFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionAlreadyExistFault(body.Error, context);
  const exception = new SubscriptionAlreadyExistFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionCategoryNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionCategoryNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionCategoryNotFoundFault(body.Error, context);
  const exception = new SubscriptionCategoryNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionNotFoundFault(body.Error, context);
  const exception = new SubscriptionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryAddRoleToDBClusterMessage = (
  input: AddRoleToDBClusterMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryAddSourceIdentifierToSubscriptionMessage = (
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

const serializeAws_queryApplyPendingMaintenanceActionMessage = (
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

const serializeAws_queryAttributeValueList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAvailabilityZones = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryCloudwatchLogsExportConfiguration = (
  input: CloudwatchLogsExportConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnableLogTypes != null) {
    const memberEntries = serializeAws_queryLogTypeList(input.EnableLogTypes, context);
    if (input.EnableLogTypes?.length === 0) {
      entries.EnableLogTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableLogTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DisableLogTypes != null) {
    const memberEntries = serializeAws_queryLogTypeList(input.DisableLogTypes, context);
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

const serializeAws_queryCopyDBClusterParameterGroupMessage = (
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

const serializeAws_queryCopyDBClusterSnapshotMessage = (
  input: CopyDBClusterSnapshotMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryCopyDBParameterGroupMessage = (
  input: CopyDBParameterGroupMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryCreateDBClusterEndpointMessage = (
  input: CreateDBClusterEndpointMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
    if (input.StaticMembers?.length === 0) {
      entries.StaticMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StaticMembers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludedMembers != null) {
    const memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
    if (input.ExcludedMembers?.length === 0) {
      entries.ExcludedMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedMembers.${key}`;
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

const serializeAws_queryCreateDBClusterMessage = (input: CreateDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AvailabilityZones != null) {
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
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
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
    const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
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

const serializeAws_queryCreateDBClusterParameterGroupMessage = (
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

const serializeAws_queryCreateDBClusterSnapshotMessage = (
  input: CreateDBClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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

const serializeAws_queryCreateDBInstanceMessage = (input: CreateDBInstanceMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
    if (input.DBSecurityGroups?.length === 0) {
      entries.DBSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
    const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
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

const serializeAws_queryCreateDBParameterGroupMessage = (
  input: CreateDBParameterGroupMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryCreateDBSubnetGroupMessage = (
  input: CreateDBSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DBSubnetGroupDescription != null) {
    entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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

const serializeAws_queryCreateEventSubscriptionMessage = (
  input: CreateEventSubscriptionMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
    if (input.EventCategories?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceIds != null) {
    const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
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

const serializeAws_queryCreateGlobalClusterMessage = (
  input: CreateGlobalClusterMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDBSecurityGroupNameList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryDeleteDBClusterEndpointMessage = (
  input: DeleteDBClusterEndpointMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterEndpointIdentifier != null) {
    entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteDBClusterMessage = (input: DeleteDBClusterMessage, context: __SerdeContext): any => {
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

const serializeAws_queryDeleteDBClusterParameterGroupMessage = (
  input: DeleteDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteDBClusterSnapshotMessage = (
  input: DeleteDBClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteDBInstanceMessage = (input: DeleteDBInstanceMessage, context: __SerdeContext): any => {
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

const serializeAws_queryDeleteDBParameterGroupMessage = (
  input: DeleteDBParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteDBSubnetGroupMessage = (
  input: DeleteDBSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteEventSubscriptionMessage = (
  input: DeleteEventSubscriptionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  return entries;
};

const serializeAws_queryDeleteGlobalClusterMessage = (
  input: DeleteGlobalClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryDescribeDBClusterEndpointsMessage = (
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

const serializeAws_queryDescribeDBClusterParameterGroupsMessage = (
  input: DescribeDBClusterParameterGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
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

const serializeAws_queryDescribeDBClusterParametersMessage = (
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

const serializeAws_queryDescribeDBClustersMessage = (
  input: DescribeDBClustersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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

const serializeAws_queryDescribeDBClusterSnapshotAttributesMessage = (
  input: DescribeDBClusterSnapshotAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryDescribeDBClusterSnapshotsMessage = (
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
  if (input.IncludeShared != null) {
    entries["IncludeShared"] = input.IncludeShared;
  }
  if (input.IncludePublic != null) {
    entries["IncludePublic"] = input.IncludePublic;
  }
  return entries;
};

const serializeAws_queryDescribeDBEngineVersionsMessage = (
  input: DescribeDBEngineVersionsMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeDBInstancesMessage = (
  input: DescribeDBInstancesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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

const serializeAws_queryDescribeDBParameterGroupsMessage = (
  input: DescribeDBParameterGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
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

const serializeAws_queryDescribeDBParametersMessage = (
  input: DescribeDBParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
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

const serializeAws_queryDescribeDBSubnetGroupsMessage = (
  input: DescribeDBSubnetGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
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

const serializeAws_queryDescribeEngineDefaultClusterParametersMessage = (
  input: DescribeEngineDefaultClusterParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupFamily != null) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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

const serializeAws_queryDescribeEngineDefaultParametersMessage = (
  input: DescribeEngineDefaultParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupFamily != null) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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

const serializeAws_queryDescribeEventCategoriesMessage = (
  input: DescribeEventCategoriesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
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
  if (input.EventCategories != null) {
    const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
    if (input.EventCategories?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
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

const serializeAws_queryDescribeEventSubscriptionsMessage = (
  input: DescribeEventSubscriptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
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

const serializeAws_queryDescribeGlobalClustersMessage = (
  input: DescribeGlobalClustersMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeOrderableDBInstanceOptionsMessage = (
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

const serializeAws_queryDescribePendingMaintenanceActionsMessage = (
  input: DescribePendingMaintenanceActionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceIdentifier != null) {
    entries["ResourceIdentifier"] = input.ResourceIdentifier;
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
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeValidDBInstanceModificationsMessage = (
  input: DescribeValidDBInstanceModificationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  return entries;
};

const serializeAws_queryEventCategoriesList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryFailoverDBClusterMessage = (input: FailoverDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.TargetDBInstanceIdentifier != null) {
    entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
  }
  return entries;
};

const serializeAws_queryFailoverGlobalClusterMessage = (
  input: FailoverGlobalClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  if (input.TargetDbClusterIdentifier != null) {
    entries["TargetDbClusterIdentifier"] = input.TargetDbClusterIdentifier;
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
      entries[`Filter.${counter}.${key}`] = value;
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
    entries[`Value.${counter}`] = entry;
    counter++;
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

const serializeAws_queryListTagsForResourceMessage = (
  input: ListTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
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
  return entries;
};

const serializeAws_queryLogTypeList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryModifyDBClusterEndpointMessage = (
  input: ModifyDBClusterEndpointMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterEndpointIdentifier != null) {
    entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
  }
  if (input.EndpointType != null) {
    entries["EndpointType"] = input.EndpointType;
  }
  if (input.StaticMembers != null) {
    const memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
    if (input.StaticMembers?.length === 0) {
      entries.StaticMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StaticMembers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludedMembers != null) {
    const memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
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

const serializeAws_queryModifyDBClusterMessage = (input: ModifyDBClusterMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(
      input.CloudwatchLogsExportConfiguration,
      context
    );
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyDBClusterParameterGroupMessage = (
  input: ModifyDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName != null) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.Parameters != null) {
    const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
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

const serializeAws_queryModifyDBClusterSnapshotAttributeMessage = (
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
    const memberEntries = serializeAws_queryAttributeValueList(input.ValuesToAdd, context);
    if (input.ValuesToAdd?.length === 0) {
      entries.ValuesToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ValuesToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ValuesToRemove != null) {
    const memberEntries = serializeAws_queryAttributeValueList(input.ValuesToRemove, context);
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

const serializeAws_queryModifyDBInstanceMessage = (input: ModifyDBInstanceMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
    if (input.DBSecurityGroups?.length === 0) {
      entries.DBSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(
      input.CloudwatchLogsExportConfiguration,
      context
    );
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

const serializeAws_queryModifyDBParameterGroupMessage = (
  input: ModifyDBParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.Parameters != null) {
    const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
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

const serializeAws_queryModifyDBSubnetGroupMessage = (
  input: ModifyDBSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DBSubnetGroupDescription != null) {
    entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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

const serializeAws_queryModifyEventSubscriptionMessage = (
  input: ModifyEventSubscriptionMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
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

const serializeAws_queryModifyGlobalClusterMessage = (
  input: ModifyGlobalClusterMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryParameter = (input: Parameter, context: __SerdeContext): any => {
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

const serializeAws_queryParametersList = (input: Parameter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryParameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Parameter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPromoteReadReplicaDBClusterMessage = (
  input: PromoteReadReplicaDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryRebootDBInstanceMessage = (input: RebootDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.ForceFailover != null) {
    entries["ForceFailover"] = input.ForceFailover;
  }
  return entries;
};

const serializeAws_queryRemoveFromGlobalClusterMessage = (
  input: RemoveFromGlobalClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  if (input.DbClusterIdentifier != null) {
    entries["DbClusterIdentifier"] = input.DbClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryRemoveRoleFromDBClusterMessage = (
  input: RemoveRoleFromDBClusterMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage = (
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

const serializeAws_queryResetDBClusterParameterGroupMessage = (
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
    const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
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

const serializeAws_queryResetDBParameterGroupMessage = (
  input: ResetDBParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.ResetAllParameters != null) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  if (input.Parameters != null) {
    const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
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

const serializeAws_queryRestoreDBClusterFromSnapshotMessage = (
  input: RestoreDBClusterFromSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZones != null) {
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
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
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.EnableCloudwatchLogsExports != null) {
    const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryRestoreDBClusterToPointInTimeMessage = (
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
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.EnableCloudwatchLogsExports != null) {
    const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryServerlessV2ScalingConfiguration = (
  input: ServerlessV2ScalingConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MinCapacity != null) {
    entries["MinCapacity"] = __serializeFloat(input.MinCapacity);
  }
  if (input.MaxCapacity != null) {
    entries["MaxCapacity"] = __serializeFloat(input.MaxCapacity);
  }
  return entries;
};

const serializeAws_querySourceIdsList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryStartDBClusterMessage = (input: StartDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryStopDBClusterMessage = (input: StopDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryStringList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryVpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
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

const deserializeAws_queryAddSourceIdentifierToSubscriptionResult = (
  output: any,
  context: __SerdeContext
): AddSourceIdentifierToSubscriptionResult => {
  const contents: any = {
    EventSubscription: undefined,
  };
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

const deserializeAws_queryApplyPendingMaintenanceActionResult = (
  output: any,
  context: __SerdeContext
): ApplyPendingMaintenanceActionResult => {
  const contents: any = {
    ResourcePendingMaintenanceActions: undefined,
  };
  if (output["ResourcePendingMaintenanceActions"] !== undefined) {
    contents.ResourcePendingMaintenanceActions = deserializeAws_queryResourcePendingMaintenanceActions(
      output["ResourcePendingMaintenanceActions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryAttributeValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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

const deserializeAws_queryAvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_queryAvailabilityZoneList = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAvailabilityZone(entry, context);
    });
};

const deserializeAws_queryAvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCertificateNotFoundFault = (
  output: any,
  context: __SerdeContext
): CertificateNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCharacterSet = (output: any, context: __SerdeContext): CharacterSet => {
  const contents: any = {
    CharacterSetName: undefined,
    CharacterSetDescription: undefined,
  };
  if (output["CharacterSetName"] !== undefined) {
    contents.CharacterSetName = __expectString(output["CharacterSetName"]);
  }
  if (output["CharacterSetDescription"] !== undefined) {
    contents.CharacterSetDescription = __expectString(output["CharacterSetDescription"]);
  }
  return contents;
};

const deserializeAws_queryCopyDBClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CopyDBClusterParameterGroupResult => {
  const contents: any = {
    DBClusterParameterGroup: undefined,
  };
  if (output["DBClusterParameterGroup"] !== undefined) {
    contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(
      output["DBClusterParameterGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCopyDBClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): CopyDBClusterSnapshotResult => {
  const contents: any = {
    DBClusterSnapshot: undefined,
  };
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
  }
  return contents;
};

const deserializeAws_queryCopyDBParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CopyDBParameterGroupResult => {
  const contents: any = {
    DBParameterGroup: undefined,
  };
  if (output["DBParameterGroup"] !== undefined) {
    contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBClusterEndpointOutput = (
  output: any,
  context: __SerdeContext
): CreateDBClusterEndpointOutput => {
  const contents: any = {
    DBClusterEndpointIdentifier: undefined,
    DBClusterIdentifier: undefined,
    DBClusterEndpointResourceIdentifier: undefined,
    Endpoint: undefined,
    Status: undefined,
    EndpointType: undefined,
    CustomEndpointType: undefined,
    StaticMembers: undefined,
    ExcludedMembers: undefined,
    DBClusterEndpointArn: undefined,
  };
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
    contents.StaticMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["StaticMembers"]["member"]),
      context
    );
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["ExcludedMembers"]["member"]),
      context
    );
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

const deserializeAws_queryCreateDBClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateDBClusterParameterGroupResult => {
  const contents: any = {
    DBClusterParameterGroup: undefined,
  };
  if (output["DBClusterParameterGroup"] !== undefined) {
    contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(
      output["DBClusterParameterGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDBClusterResult = (output: any, context: __SerdeContext): CreateDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDBClusterSnapshotResult => {
  const contents: any = {
    DBClusterSnapshot: undefined,
  };
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBInstanceResult = (output: any, context: __SerdeContext): CreateDBInstanceResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateDBParameterGroupResult => {
  const contents: any = {
    DBParameterGroup: undefined,
  };
  if (output["DBParameterGroup"] !== undefined) {
    contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): CreateDBSubnetGroupResult => {
  const contents: any = {
    DBSubnetGroup: undefined,
  };
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateEventSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateEventSubscriptionResult => {
  const contents: any = {
    EventSubscription: undefined,
  };
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

const deserializeAws_queryCreateGlobalClusterResult = (
  output: any,
  context: __SerdeContext
): CreateGlobalClusterResult => {
  const contents: any = {
    GlobalCluster: undefined,
  };
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

const deserializeAws_queryDBCluster = (output: any, context: __SerdeContext): DBCluster => {
  const contents: any = {
    AllocatedStorage: undefined,
    AvailabilityZones: undefined,
    BackupRetentionPeriod: undefined,
    CharacterSetName: undefined,
    DatabaseName: undefined,
    DBClusterIdentifier: undefined,
    DBClusterParameterGroup: undefined,
    DBSubnetGroup: undefined,
    Status: undefined,
    PercentProgress: undefined,
    EarliestRestorableTime: undefined,
    Endpoint: undefined,
    ReaderEndpoint: undefined,
    MultiAZ: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    LatestRestorableTime: undefined,
    Port: undefined,
    MasterUsername: undefined,
    DBClusterOptionGroupMemberships: undefined,
    PreferredBackupWindow: undefined,
    PreferredMaintenanceWindow: undefined,
    ReplicationSourceIdentifier: undefined,
    ReadReplicaIdentifiers: undefined,
    DBClusterMembers: undefined,
    VpcSecurityGroups: undefined,
    HostedZoneId: undefined,
    StorageEncrypted: undefined,
    KmsKeyId: undefined,
    DbClusterResourceId: undefined,
    DBClusterArn: undefined,
    AssociatedRoles: undefined,
    IAMDatabaseAuthenticationEnabled: undefined,
    CloneGroupId: undefined,
    ClusterCreateTime: undefined,
    CopyTagsToSnapshot: undefined,
    EnabledCloudwatchLogsExports: undefined,
    DeletionProtection: undefined,
    CrossAccountClone: undefined,
    AutomaticRestartTime: undefined,
    ServerlessV2ScalingConfiguration: undefined,
  };
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
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
    contents.EarliestRestorableTime = __expectNonNull(__parseRfc3339DateTime(output["EarliestRestorableTime"]));
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
    contents.LatestRestorableTime = __expectNonNull(__parseRfc3339DateTime(output["LatestRestorableTime"]));
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
    contents.DBClusterOptionGroupMemberships = deserializeAws_queryDBClusterOptionGroupMemberships(
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
    contents.ReadReplicaIdentifiers = deserializeAws_queryReadReplicaIdentifierList(
      __getArrayIfSingleItem(output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"]),
      context
    );
  }
  if (output.DBClusterMembers === "") {
    contents.DBClusterMembers = [];
  } else if (output["DBClusterMembers"] !== undefined && output["DBClusterMembers"]["DBClusterMember"] !== undefined) {
    contents.DBClusterMembers = deserializeAws_queryDBClusterMemberList(
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
    contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(
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
    contents.AssociatedRoles = deserializeAws_queryDBClusterRoles(
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
    contents.ClusterCreateTime = __expectNonNull(__parseRfc3339DateTime(output["ClusterCreateTime"]));
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
    contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]),
      context
    );
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = __parseBoolean(output["DeletionProtection"]);
  }
  if (output["CrossAccountClone"] !== undefined) {
    contents.CrossAccountClone = __parseBoolean(output["CrossAccountClone"]);
  }
  if (output["AutomaticRestartTime"] !== undefined) {
    contents.AutomaticRestartTime = __expectNonNull(__parseRfc3339DateTime(output["AutomaticRestartTime"]));
  }
  if (output["ServerlessV2ScalingConfiguration"] !== undefined) {
    contents.ServerlessV2ScalingConfiguration = deserializeAws_queryServerlessV2ScalingConfigurationInfo(
      output["ServerlessV2ScalingConfiguration"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterEndpoint = (output: any, context: __SerdeContext): DBClusterEndpoint => {
  const contents: any = {
    DBClusterEndpointIdentifier: undefined,
    DBClusterIdentifier: undefined,
    DBClusterEndpointResourceIdentifier: undefined,
    Endpoint: undefined,
    Status: undefined,
    EndpointType: undefined,
    CustomEndpointType: undefined,
    StaticMembers: undefined,
    ExcludedMembers: undefined,
    DBClusterEndpointArn: undefined,
  };
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
    contents.StaticMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["StaticMembers"]["member"]),
      context
    );
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["ExcludedMembers"]["member"]),
      context
    );
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterEndpointAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterEndpointAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterEndpointList = (output: any, context: __SerdeContext): DBClusterEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterEndpoint(entry, context);
    });
};

const deserializeAws_queryDBClusterEndpointMessage = (
  output: any,
  context: __SerdeContext
): DBClusterEndpointMessage => {
  const contents: any = {
    Marker: undefined,
    DBClusterEndpoints: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterEndpoints === "") {
    contents.DBClusterEndpoints = [];
  } else if (
    output["DBClusterEndpoints"] !== undefined &&
    output["DBClusterEndpoints"]["DBClusterEndpointList"] !== undefined
  ) {
    contents.DBClusterEndpoints = deserializeAws_queryDBClusterEndpointList(
      __getArrayIfSingleItem(output["DBClusterEndpoints"]["DBClusterEndpointList"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterEndpointNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterEndpointNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterEndpointQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBClusterEndpointQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterList = (output: any, context: __SerdeContext): DBCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBCluster(entry, context);
    });
};

const deserializeAws_queryDBClusterMember = (output: any, context: __SerdeContext): DBClusterMember => {
  const contents: any = {
    DBInstanceIdentifier: undefined,
    IsClusterWriter: undefined,
    DBClusterParameterGroupStatus: undefined,
    PromotionTier: undefined,
  };
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

const deserializeAws_queryDBClusterMemberList = (output: any, context: __SerdeContext): DBClusterMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterMember(entry, context);
    });
};

const deserializeAws_queryDBClusterMessage = (output: any, context: __SerdeContext): DBClusterMessage => {
  const contents: any = {
    Marker: undefined,
    DBClusters: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusters === "") {
    contents.DBClusters = [];
  } else if (output["DBClusters"] !== undefined && output["DBClusters"]["DBCluster"] !== undefined) {
    contents.DBClusters = deserializeAws_queryDBClusterList(
      __getArrayIfSingleItem(output["DBClusters"]["DBCluster"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterNotFoundFault = (output: any, context: __SerdeContext): DBClusterNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterOptionGroupMemberships = (
  output: any,
  context: __SerdeContext
): DBClusterOptionGroupStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterOptionGroupStatus(entry, context);
    });
};

const deserializeAws_queryDBClusterOptionGroupStatus = (
  output: any,
  context: __SerdeContext
): DBClusterOptionGroupStatus => {
  const contents: any = {
    DBClusterOptionGroupName: undefined,
    Status: undefined,
  };
  if (output["DBClusterOptionGroupName"] !== undefined) {
    contents.DBClusterOptionGroupName = __expectString(output["DBClusterOptionGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroup = (output: any, context: __SerdeContext): DBClusterParameterGroup => {
  const contents: any = {
    DBClusterParameterGroupName: undefined,
    DBParameterGroupFamily: undefined,
    Description: undefined,
    DBClusterParameterGroupArn: undefined,
  };
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

const deserializeAws_queryDBClusterParameterGroupDetails = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupDetails => {
  const contents: any = {
    Parameters: undefined,
    Marker: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupList = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterParameterGroup(entry, context);
    });
};

const deserializeAws_queryDBClusterParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupNameMessage => {
  const contents: any = {
    DBClusterParameterGroupName: undefined,
  };
  if (output["DBClusterParameterGroupName"] !== undefined) {
    contents.DBClusterParameterGroupName = __expectString(output["DBClusterParameterGroupName"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupsMessage = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupsMessage => {
  const contents: any = {
    Marker: undefined,
    DBClusterParameterGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterParameterGroups === "") {
    contents.DBClusterParameterGroups = [];
  } else if (
    output["DBClusterParameterGroups"] !== undefined &&
    output["DBClusterParameterGroups"]["DBClusterParameterGroup"] !== undefined
  ) {
    contents.DBClusterParameterGroups = deserializeAws_queryDBClusterParameterGroupList(
      __getArrayIfSingleItem(output["DBClusterParameterGroups"]["DBClusterParameterGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBClusterQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterRole = (output: any, context: __SerdeContext): DBClusterRole => {
  const contents: any = {
    RoleArn: undefined,
    Status: undefined,
    FeatureName: undefined,
  };
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

const deserializeAws_queryDBClusterRoleAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterRoleAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterRoleNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterRoleQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBClusterRoleQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterRoles = (output: any, context: __SerdeContext): DBClusterRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterRole(entry, context);
    });
};

const deserializeAws_queryDBClusterSnapshot = (output: any, context: __SerdeContext): DBClusterSnapshot => {
  const contents: any = {
    AvailabilityZones: undefined,
    DBClusterSnapshotIdentifier: undefined,
    DBClusterIdentifier: undefined,
    SnapshotCreateTime: undefined,
    Engine: undefined,
    AllocatedStorage: undefined,
    Status: undefined,
    Port: undefined,
    VpcId: undefined,
    ClusterCreateTime: undefined,
    MasterUsername: undefined,
    EngineVersion: undefined,
    LicenseModel: undefined,
    SnapshotType: undefined,
    PercentProgress: undefined,
    StorageEncrypted: undefined,
    KmsKeyId: undefined,
    DBClusterSnapshotArn: undefined,
    SourceDBClusterSnapshotArn: undefined,
    IAMDatabaseAuthenticationEnabled: undefined,
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
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
    contents.SnapshotCreateTime = __expectNonNull(__parseRfc3339DateTime(output["SnapshotCreateTime"]));
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
    contents.ClusterCreateTime = __expectNonNull(__parseRfc3339DateTime(output["ClusterCreateTime"]));
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

const deserializeAws_queryDBClusterSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotAttribute = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAttribute => {
  const contents: any = {
    AttributeName: undefined,
    AttributeValues: undefined,
  };
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = __expectString(output["AttributeName"]);
  }
  if (output.AttributeValues === "") {
    contents.AttributeValues = [];
  } else if (output["AttributeValues"] !== undefined && output["AttributeValues"]["AttributeValue"] !== undefined) {
    contents.AttributeValues = deserializeAws_queryAttributeValueList(
      __getArrayIfSingleItem(output["AttributeValues"]["AttributeValue"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotAttributeList = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterSnapshotAttribute(entry, context);
    });
};

const deserializeAws_queryDBClusterSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAttributesResult => {
  const contents: any = {
    DBClusterSnapshotIdentifier: undefined,
    DBClusterSnapshotAttributes: undefined,
  };
  if (output["DBClusterSnapshotIdentifier"] !== undefined) {
    contents.DBClusterSnapshotIdentifier = __expectString(output["DBClusterSnapshotIdentifier"]);
  }
  if (output.DBClusterSnapshotAttributes === "") {
    contents.DBClusterSnapshotAttributes = [];
  } else if (
    output["DBClusterSnapshotAttributes"] !== undefined &&
    output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"] !== undefined
  ) {
    contents.DBClusterSnapshotAttributes = deserializeAws_queryDBClusterSnapshotAttributeList(
      __getArrayIfSingleItem(output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotList = (output: any, context: __SerdeContext): DBClusterSnapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterSnapshot(entry, context);
    });
};

const deserializeAws_queryDBClusterSnapshotMessage = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotMessage => {
  const contents: any = {
    Marker: undefined,
    DBClusterSnapshots: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterSnapshots === "") {
    contents.DBClusterSnapshots = [];
  } else if (
    output["DBClusterSnapshots"] !== undefined &&
    output["DBClusterSnapshots"]["DBClusterSnapshot"] !== undefined
  ) {
    contents.DBClusterSnapshots = deserializeAws_queryDBClusterSnapshotList(
      __getArrayIfSingleItem(output["DBClusterSnapshots"]["DBClusterSnapshot"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBEngineVersion = (output: any, context: __SerdeContext): DBEngineVersion => {
  const contents: any = {
    Engine: undefined,
    EngineVersion: undefined,
    DBParameterGroupFamily: undefined,
    DBEngineDescription: undefined,
    DBEngineVersionDescription: undefined,
    DefaultCharacterSet: undefined,
    SupportedCharacterSets: undefined,
    ValidUpgradeTarget: undefined,
    SupportedTimezones: undefined,
    ExportableLogTypes: undefined,
    SupportsLogExportsToCloudwatchLogs: undefined,
    SupportsReadReplica: undefined,
    SupportsGlobalDatabases: undefined,
  };
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
    contents.DefaultCharacterSet = deserializeAws_queryCharacterSet(output["DefaultCharacterSet"], context);
  }
  if (output.SupportedCharacterSets === "") {
    contents.SupportedCharacterSets = [];
  } else if (
    output["SupportedCharacterSets"] !== undefined &&
    output["SupportedCharacterSets"]["CharacterSet"] !== undefined
  ) {
    contents.SupportedCharacterSets = deserializeAws_querySupportedCharacterSetsList(
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
    contents.ValidUpgradeTarget = deserializeAws_queryValidUpgradeTargetList(
      __getArrayIfSingleItem(output["ValidUpgradeTarget"]["UpgradeTarget"]),
      context
    );
  }
  if (output.SupportedTimezones === "") {
    contents.SupportedTimezones = [];
  } else if (output["SupportedTimezones"] !== undefined && output["SupportedTimezones"]["Timezone"] !== undefined) {
    contents.SupportedTimezones = deserializeAws_querySupportedTimezonesList(
      __getArrayIfSingleItem(output["SupportedTimezones"]["Timezone"]),
      context
    );
  }
  if (output.ExportableLogTypes === "") {
    contents.ExportableLogTypes = [];
  } else if (output["ExportableLogTypes"] !== undefined && output["ExportableLogTypes"]["member"] !== undefined) {
    contents.ExportableLogTypes = deserializeAws_queryLogTypeList(
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

const deserializeAws_queryDBEngineVersionList = (output: any, context: __SerdeContext): DBEngineVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBEngineVersion(entry, context);
    });
};

const deserializeAws_queryDBEngineVersionMessage = (output: any, context: __SerdeContext): DBEngineVersionMessage => {
  const contents: any = {
    Marker: undefined,
    DBEngineVersions: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBEngineVersions === "") {
    contents.DBEngineVersions = [];
  } else if (output["DBEngineVersions"] !== undefined && output["DBEngineVersions"]["DBEngineVersion"] !== undefined) {
    contents.DBEngineVersions = deserializeAws_queryDBEngineVersionList(
      __getArrayIfSingleItem(output["DBEngineVersions"]["DBEngineVersion"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBInstance = (output: any, context: __SerdeContext): DBInstance => {
  const contents: any = {
    DBInstanceIdentifier: undefined,
    DBInstanceClass: undefined,
    Engine: undefined,
    DBInstanceStatus: undefined,
    MasterUsername: undefined,
    DBName: undefined,
    Endpoint: undefined,
    AllocatedStorage: undefined,
    InstanceCreateTime: undefined,
    PreferredBackupWindow: undefined,
    BackupRetentionPeriod: undefined,
    DBSecurityGroups: undefined,
    VpcSecurityGroups: undefined,
    DBParameterGroups: undefined,
    AvailabilityZone: undefined,
    DBSubnetGroup: undefined,
    PreferredMaintenanceWindow: undefined,
    PendingModifiedValues: undefined,
    LatestRestorableTime: undefined,
    MultiAZ: undefined,
    EngineVersion: undefined,
    AutoMinorVersionUpgrade: undefined,
    ReadReplicaSourceDBInstanceIdentifier: undefined,
    ReadReplicaDBInstanceIdentifiers: undefined,
    ReadReplicaDBClusterIdentifiers: undefined,
    LicenseModel: undefined,
    Iops: undefined,
    OptionGroupMemberships: undefined,
    CharacterSetName: undefined,
    SecondaryAvailabilityZone: undefined,
    PubliclyAccessible: undefined,
    StatusInfos: undefined,
    StorageType: undefined,
    TdeCredentialArn: undefined,
    DbInstancePort: undefined,
    DBClusterIdentifier: undefined,
    StorageEncrypted: undefined,
    KmsKeyId: undefined,
    DbiResourceId: undefined,
    CACertificateIdentifier: undefined,
    DomainMemberships: undefined,
    CopyTagsToSnapshot: undefined,
    MonitoringInterval: undefined,
    EnhancedMonitoringResourceArn: undefined,
    MonitoringRoleArn: undefined,
    PromotionTier: undefined,
    DBInstanceArn: undefined,
    Timezone: undefined,
    IAMDatabaseAuthenticationEnabled: undefined,
    PerformanceInsightsEnabled: undefined,
    PerformanceInsightsKMSKeyId: undefined,
    EnabledCloudwatchLogsExports: undefined,
    DeletionProtection: undefined,
  };
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
    contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
  }
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output["InstanceCreateTime"] !== undefined) {
    contents.InstanceCreateTime = __expectNonNull(__parseRfc3339DateTime(output["InstanceCreateTime"]));
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
    contents.DBSecurityGroups = deserializeAws_queryDBSecurityGroupMembershipList(
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
    contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(
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
    contents.DBParameterGroups = deserializeAws_queryDBParameterGroupStatusList(
      __getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]),
      context
    );
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
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
  if (output["LatestRestorableTime"] !== undefined) {
    contents.LatestRestorableTime = __expectNonNull(__parseRfc3339DateTime(output["LatestRestorableTime"]));
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
    contents.ReadReplicaDBInstanceIdentifiers = deserializeAws_queryReadReplicaDBInstanceIdentifierList(
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
    contents.ReadReplicaDBClusterIdentifiers = deserializeAws_queryReadReplicaDBClusterIdentifierList(
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
    contents.OptionGroupMemberships = deserializeAws_queryOptionGroupMembershipList(
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
    contents.StatusInfos = deserializeAws_queryDBInstanceStatusInfoList(
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
    contents.DomainMemberships = deserializeAws_queryDomainMembershipList(
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
    contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]),
      context
    );
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = __parseBoolean(output["DeletionProtection"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBInstanceAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceList = (output: any, context: __SerdeContext): DBInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBInstance(entry, context);
    });
};

const deserializeAws_queryDBInstanceMessage = (output: any, context: __SerdeContext): DBInstanceMessage => {
  const contents: any = {
    Marker: undefined,
    DBInstances: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBInstances === "") {
    contents.DBInstances = [];
  } else if (output["DBInstances"] !== undefined && output["DBInstances"]["DBInstance"] !== undefined) {
    contents.DBInstances = deserializeAws_queryDBInstanceList(
      __getArrayIfSingleItem(output["DBInstances"]["DBInstance"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBInstanceNotFoundFault = (output: any, context: __SerdeContext): DBInstanceNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceStatusInfo = (output: any, context: __SerdeContext): DBInstanceStatusInfo => {
  const contents: any = {
    StatusType: undefined,
    Normal: undefined,
    Status: undefined,
    Message: undefined,
  };
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

const deserializeAws_queryDBInstanceStatusInfoList = (output: any, context: __SerdeContext): DBInstanceStatusInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBInstanceStatusInfo(entry, context);
    });
};

const deserializeAws_queryDBParameterGroup = (output: any, context: __SerdeContext): DBParameterGroup => {
  const contents: any = {
    DBParameterGroupName: undefined,
    DBParameterGroupFamily: undefined,
    Description: undefined,
    DBParameterGroupArn: undefined,
  };
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

const deserializeAws_queryDBParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupDetails = (output: any, context: __SerdeContext): DBParameterGroupDetails => {
  const contents: any = {
    Parameters: undefined,
    Marker: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupList = (output: any, context: __SerdeContext): DBParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBParameterGroup(entry, context);
    });
};

const deserializeAws_queryDBParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): DBParameterGroupNameMessage => {
  const contents: any = {
    DBParameterGroupName: undefined,
  };
  if (output["DBParameterGroupName"] !== undefined) {
    contents.DBParameterGroupName = __expectString(output["DBParameterGroupName"]);
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupsMessage = (
  output: any,
  context: __SerdeContext
): DBParameterGroupsMessage => {
  const contents: any = {
    Marker: undefined,
    DBParameterGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBParameterGroups === "") {
    contents.DBParameterGroups = [];
  } else if (
    output["DBParameterGroups"] !== undefined &&
    output["DBParameterGroups"]["DBParameterGroup"] !== undefined
  ) {
    contents.DBParameterGroups = deserializeAws_queryDBParameterGroupList(
      __getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupStatus = (output: any, context: __SerdeContext): DBParameterGroupStatus => {
  const contents: any = {
    DBParameterGroupName: undefined,
    ParameterApplyStatus: undefined,
  };
  if (output["DBParameterGroupName"] !== undefined) {
    contents.DBParameterGroupName = __expectString(output["DBParameterGroupName"]);
  }
  if (output["ParameterApplyStatus"] !== undefined) {
    contents.ParameterApplyStatus = __expectString(output["ParameterApplyStatus"]);
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupStatusList = (
  output: any,
  context: __SerdeContext
): DBParameterGroupStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBParameterGroupStatus(entry, context);
    });
};

const deserializeAws_queryDBSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupMembership => {
  const contents: any = {
    DBSecurityGroupName: undefined,
    Status: undefined,
  };
  if (output["DBSecurityGroupName"] !== undefined) {
    contents.DBSecurityGroupName = __expectString(output["DBSecurityGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryDBSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBSecurityGroupMembership(entry, context);
    });
};

const deserializeAws_queryDBSecurityGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBSnapshotAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSnapshotNotFoundFault = (output: any, context: __SerdeContext): DBSnapshotNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroup = (output: any, context: __SerdeContext): DBSubnetGroup => {
  const contents: any = {
    DBSubnetGroupName: undefined,
    DBSubnetGroupDescription: undefined,
    VpcId: undefined,
    SubnetGroupStatus: undefined,
    Subnets: undefined,
    DBSubnetGroupArn: undefined,
  };
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
    contents.Subnets = deserializeAws_querySubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
  }
  if (output["DBSubnetGroupArn"] !== undefined) {
    contents.DBSubnetGroupArn = __expectString(output["DBSubnetGroupArn"]);
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupDoesNotCoverEnoughAZs => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupMessage = (output: any, context: __SerdeContext): DBSubnetGroupMessage => {
  const contents: any = {
    Marker: undefined,
    DBSubnetGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBSubnetGroups === "") {
    contents.DBSubnetGroups = [];
  } else if (output["DBSubnetGroups"] !== undefined && output["DBSubnetGroups"]["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroups = deserializeAws_queryDBSubnetGroups(
      __getArrayIfSingleItem(output["DBSubnetGroups"]["DBSubnetGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroups = (output: any, context: __SerdeContext): DBSubnetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBSubnetGroup(entry, context);
    });
};

const deserializeAws_queryDBSubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBSubnetQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBUpgradeDependencyFailureFault = (
  output: any,
  context: __SerdeContext
): DBUpgradeDependencyFailureFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDeleteDBClusterEndpointOutput = (
  output: any,
  context: __SerdeContext
): DeleteDBClusterEndpointOutput => {
  const contents: any = {
    DBClusterEndpointIdentifier: undefined,
    DBClusterIdentifier: undefined,
    DBClusterEndpointResourceIdentifier: undefined,
    Endpoint: undefined,
    Status: undefined,
    EndpointType: undefined,
    CustomEndpointType: undefined,
    StaticMembers: undefined,
    ExcludedMembers: undefined,
    DBClusterEndpointArn: undefined,
  };
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
    contents.StaticMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["StaticMembers"]["member"]),
      context
    );
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["ExcludedMembers"]["member"]),
      context
    );
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

const deserializeAws_queryDeleteDBClusterResult = (output: any, context: __SerdeContext): DeleteDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteDBClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteDBClusterSnapshotResult => {
  const contents: any = {
    DBClusterSnapshot: undefined,
  };
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteDBInstanceResult = (output: any, context: __SerdeContext): DeleteDBInstanceResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteEventSubscriptionResult = (
  output: any,
  context: __SerdeContext
): DeleteEventSubscriptionResult => {
  const contents: any = {
    EventSubscription: undefined,
  };
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteGlobalClusterResult = (
  output: any,
  context: __SerdeContext
): DeleteGlobalClusterResult => {
  const contents: any = {
    GlobalCluster: undefined,
  };
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeDBClusterSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeDBClusterSnapshotAttributesResult => {
  const contents: any = {
    DBClusterSnapshotAttributesResult: undefined,
  };
  if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
    contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(
      output["DBClusterSnapshotAttributesResult"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeEngineDefaultClusterParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeEngineDefaultClusterParametersResult => {
  const contents: any = {
    EngineDefaults: undefined,
  };
  if (output["EngineDefaults"] !== undefined) {
    contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
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

const deserializeAws_queryDescribeValidDBInstanceModificationsResult = (
  output: any,
  context: __SerdeContext
): DescribeValidDBInstanceModificationsResult => {
  const contents: any = {
    ValidDBInstanceModificationsMessage: undefined,
  };
  if (output["ValidDBInstanceModificationsMessage"] !== undefined) {
    contents.ValidDBInstanceModificationsMessage = deserializeAws_queryValidDBInstanceModificationsMessage(
      output["ValidDBInstanceModificationsMessage"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDomainMembership = (output: any, context: __SerdeContext): DomainMembership => {
  const contents: any = {
    Domain: undefined,
    Status: undefined,
    FQDN: undefined,
    IAMRoleName: undefined,
  };
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

const deserializeAws_queryDomainMembershipList = (output: any, context: __SerdeContext): DomainMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDomainMembership(entry, context);
    });
};

const deserializeAws_queryDomainNotFoundFault = (output: any, context: __SerdeContext): DomainNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDoubleRange = (output: any, context: __SerdeContext): DoubleRange => {
  const contents: any = {
    From: undefined,
    To: undefined,
  };
  if (output["From"] !== undefined) {
    contents.From = __strictParseFloat(output["From"]) as number;
  }
  if (output["To"] !== undefined) {
    contents.To = __strictParseFloat(output["To"]) as number;
  }
  return contents;
};

const deserializeAws_queryDoubleRangeList = (output: any, context: __SerdeContext): DoubleRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDoubleRange(entry, context);
    });
};

const deserializeAws_queryEndpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {
    Address: undefined,
    Port: undefined,
    HostedZoneId: undefined,
  };
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

const deserializeAws_queryEngineDefaults = (output: any, context: __SerdeContext): EngineDefaults => {
  const contents: any = {
    DBParameterGroupFamily: undefined,
    Marker: undefined,
    Parameters: undefined,
  };
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = __expectString(output["DBParameterGroupFamily"]);
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
  return contents;
};

const deserializeAws_queryEvent = (output: any, context: __SerdeContext): Event => {
  const contents: any = {
    SourceIdentifier: undefined,
    SourceType: undefined,
    Message: undefined,
    EventCategories: undefined,
    Date: undefined,
    SourceArn: undefined,
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
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  } else if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
    contents.EventCategories = deserializeAws_queryEventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTime(output["Date"]));
  }
  if (output["SourceArn"] !== undefined) {
    contents.SourceArn = __expectString(output["SourceArn"]);
  }
  return contents;
};

const deserializeAws_queryEventCategoriesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryEventCategoriesMap = (output: any, context: __SerdeContext): EventCategoriesMap => {
  const contents: any = {
    SourceType: undefined,
    EventCategories: undefined,
  };
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  } else if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
    contents.EventCategories = deserializeAws_queryEventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEventCategoriesMapList = (output: any, context: __SerdeContext): EventCategoriesMap[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEventCategoriesMap(entry, context);
    });
};

const deserializeAws_queryEventCategoriesMessage = (output: any, context: __SerdeContext): EventCategoriesMessage => {
  const contents: any = {
    EventCategoriesMapList: undefined,
  };
  if (output.EventCategoriesMapList === "") {
    contents.EventCategoriesMapList = [];
  } else if (
    output["EventCategoriesMapList"] !== undefined &&
    output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined
  ) {
    contents.EventCategoriesMapList = deserializeAws_queryEventCategoriesMapList(
      __getArrayIfSingleItem(output["EventCategoriesMapList"]["EventCategoriesMap"]),
      context
    );
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

const deserializeAws_queryEventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  const contents: any = {
    CustomerAwsId: undefined,
    CustSubscriptionId: undefined,
    SnsTopicArn: undefined,
    Status: undefined,
    SubscriptionCreationTime: undefined,
    SourceType: undefined,
    SourceIdsList: undefined,
    EventCategoriesList: undefined,
    Enabled: undefined,
    EventSubscriptionArn: undefined,
  };
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
    contents.SourceIdsList = deserializeAws_querySourceIdsList(
      __getArrayIfSingleItem(output["SourceIdsList"]["SourceId"]),
      context
    );
  }
  if (output.EventCategoriesList === "") {
    contents.EventCategoriesList = [];
  } else if (
    output["EventCategoriesList"] !== undefined &&
    output["EventCategoriesList"]["EventCategory"] !== undefined
  ) {
    contents.EventCategoriesList = deserializeAws_queryEventCategoriesList(
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

const deserializeAws_queryEventSubscriptionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): EventSubscriptionQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEventSubscriptionsList = (output: any, context: __SerdeContext): EventSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEventSubscription(entry, context);
    });
};

const deserializeAws_queryEventSubscriptionsMessage = (
  output: any,
  context: __SerdeContext
): EventSubscriptionsMessage => {
  const contents: any = {
    Marker: undefined,
    EventSubscriptionsList: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.EventSubscriptionsList === "") {
    contents.EventSubscriptionsList = [];
  } else if (
    output["EventSubscriptionsList"] !== undefined &&
    output["EventSubscriptionsList"]["EventSubscription"] !== undefined
  ) {
    contents.EventSubscriptionsList = deserializeAws_queryEventSubscriptionsList(
      __getArrayIfSingleItem(output["EventSubscriptionsList"]["EventSubscription"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryFailoverDBClusterResult = (output: any, context: __SerdeContext): FailoverDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryFailoverGlobalClusterResult = (
  output: any,
  context: __SerdeContext
): FailoverGlobalClusterResult => {
  const contents: any = {
    GlobalCluster: undefined,
  };
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

const deserializeAws_queryGlobalCluster = (output: any, context: __SerdeContext): GlobalCluster => {
  const contents: any = {
    GlobalClusterIdentifier: undefined,
    GlobalClusterResourceId: undefined,
    GlobalClusterArn: undefined,
    Status: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    StorageEncrypted: undefined,
    DeletionProtection: undefined,
    GlobalClusterMembers: undefined,
  };
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
    contents.GlobalClusterMembers = deserializeAws_queryGlobalClusterMemberList(
      __getArrayIfSingleItem(output["GlobalClusterMembers"]["GlobalClusterMember"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGlobalClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): GlobalClusterAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryGlobalClusterList = (output: any, context: __SerdeContext): GlobalCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryGlobalCluster(entry, context);
    });
};

const deserializeAws_queryGlobalClusterMember = (output: any, context: __SerdeContext): GlobalClusterMember => {
  const contents: any = {
    DBClusterArn: undefined,
    Readers: undefined,
    IsWriter: undefined,
  };
  if (output["DBClusterArn"] !== undefined) {
    contents.DBClusterArn = __expectString(output["DBClusterArn"]);
  }
  if (output.Readers === "") {
    contents.Readers = [];
  } else if (output["Readers"] !== undefined && output["Readers"]["member"] !== undefined) {
    contents.Readers = deserializeAws_queryReadersArnList(__getArrayIfSingleItem(output["Readers"]["member"]), context);
  }
  if (output["IsWriter"] !== undefined) {
    contents.IsWriter = __parseBoolean(output["IsWriter"]);
  }
  return contents;
};

const deserializeAws_queryGlobalClusterMemberList = (output: any, context: __SerdeContext): GlobalClusterMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryGlobalClusterMember(entry, context);
    });
};

const deserializeAws_queryGlobalClusterNotFoundFault = (
  output: any,
  context: __SerdeContext
): GlobalClusterNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryGlobalClusterQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): GlobalClusterQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryGlobalClustersMessage = (output: any, context: __SerdeContext): GlobalClustersMessage => {
  const contents: any = {
    Marker: undefined,
    GlobalClusters: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.GlobalClusters === "") {
    contents.GlobalClusters = [];
  } else if (output["GlobalClusters"] !== undefined && output["GlobalClusters"]["GlobalClusterMember"] !== undefined) {
    contents.GlobalClusters = deserializeAws_queryGlobalClusterList(
      __getArrayIfSingleItem(output["GlobalClusters"]["GlobalClusterMember"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryInstanceQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): InstanceQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInsufficientDBClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientDBClusterCapacityFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInsufficientDBInstanceCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientDBInstanceCapacityFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInsufficientStorageClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientStorageClusterCapacityFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBClusterEndpointStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterEndpointStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBClusterSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterSnapshotStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBInstanceStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBInstanceStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBParameterGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSecurityGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSnapshotStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBSubnetGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSubnetGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBSubnetStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSubnetStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidEventSubscriptionStateFault = (
  output: any,
  context: __SerdeContext
): InvalidEventSubscriptionStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidGlobalClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidGlobalClusterStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidRestoreFault = (output: any, context: __SerdeContext): InvalidRestoreFault => {
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

const deserializeAws_queryKMSKeyNotAccessibleFault = (
  output: any,
  context: __SerdeContext
): KMSKeyNotAccessibleFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryLogTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryModifyDBClusterEndpointOutput = (
  output: any,
  context: __SerdeContext
): ModifyDBClusterEndpointOutput => {
  const contents: any = {
    DBClusterEndpointIdentifier: undefined,
    DBClusterIdentifier: undefined,
    DBClusterEndpointResourceIdentifier: undefined,
    Endpoint: undefined,
    Status: undefined,
    EndpointType: undefined,
    CustomEndpointType: undefined,
    StaticMembers: undefined,
    ExcludedMembers: undefined,
    DBClusterEndpointArn: undefined,
  };
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
    contents.StaticMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["StaticMembers"]["member"]),
      context
    );
  }
  if (output.ExcludedMembers === "") {
    contents.ExcludedMembers = [];
  } else if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
    contents.ExcludedMembers = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["ExcludedMembers"]["member"]),
      context
    );
  }
  if (output["DBClusterEndpointArn"] !== undefined) {
    contents.DBClusterEndpointArn = __expectString(output["DBClusterEndpointArn"]);
  }
  return contents;
};

const deserializeAws_queryModifyDBClusterResult = (output: any, context: __SerdeContext): ModifyDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryModifyDBClusterSnapshotAttributeResult = (
  output: any,
  context: __SerdeContext
): ModifyDBClusterSnapshotAttributeResult => {
  const contents: any = {
    DBClusterSnapshotAttributesResult: undefined,
  };
  if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
    contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(
      output["DBClusterSnapshotAttributesResult"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyDBInstanceResult = (output: any, context: __SerdeContext): ModifyDBInstanceResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryModifyDBSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyDBSubnetGroupResult => {
  const contents: any = {
    DBSubnetGroup: undefined,
  };
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
  }
  return contents;
};

const deserializeAws_queryModifyEventSubscriptionResult = (
  output: any,
  context: __SerdeContext
): ModifyEventSubscriptionResult => {
  const contents: any = {
    EventSubscription: undefined,
  };
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

const deserializeAws_queryModifyGlobalClusterResult = (
  output: any,
  context: __SerdeContext
): ModifyGlobalClusterResult => {
  const contents: any = {
    GlobalCluster: undefined,
  };
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

const deserializeAws_queryOptionGroupMembership = (output: any, context: __SerdeContext): OptionGroupMembership => {
  const contents: any = {
    OptionGroupName: undefined,
    Status: undefined,
  };
  if (output["OptionGroupName"] !== undefined) {
    contents.OptionGroupName = __expectString(output["OptionGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryOptionGroupMembershipList = (
  output: any,
  context: __SerdeContext
): OptionGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOptionGroupMembership(entry, context);
    });
};

const deserializeAws_queryOptionGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): OptionGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryOrderableDBInstanceOption = (
  output: any,
  context: __SerdeContext
): OrderableDBInstanceOption => {
  const contents: any = {
    Engine: undefined,
    EngineVersion: undefined,
    DBInstanceClass: undefined,
    LicenseModel: undefined,
    AvailabilityZones: undefined,
    MultiAZCapable: undefined,
    ReadReplicaCapable: undefined,
    Vpc: undefined,
    SupportsStorageEncryption: undefined,
    StorageType: undefined,
    SupportsIops: undefined,
    SupportsEnhancedMonitoring: undefined,
    SupportsIAMDatabaseAuthentication: undefined,
    SupportsPerformanceInsights: undefined,
    MinStorageSize: undefined,
    MaxStorageSize: undefined,
    MinIopsPerDbInstance: undefined,
    MaxIopsPerDbInstance: undefined,
    MinIopsPerGib: undefined,
    MaxIopsPerGib: undefined,
    SupportsGlobalDatabases: undefined,
  };
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
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(
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

const deserializeAws_queryOrderableDBInstanceOptionsList = (
  output: any,
  context: __SerdeContext
): OrderableDBInstanceOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOrderableDBInstanceOption(entry, context);
    });
};

const deserializeAws_queryOrderableDBInstanceOptionsMessage = (
  output: any,
  context: __SerdeContext
): OrderableDBInstanceOptionsMessage => {
  const contents: any = {
    OrderableDBInstanceOptions: undefined,
    Marker: undefined,
  };
  if (output.OrderableDBInstanceOptions === "") {
    contents.OrderableDBInstanceOptions = [];
  } else if (
    output["OrderableDBInstanceOptions"] !== undefined &&
    output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"] !== undefined
  ) {
    contents.OrderableDBInstanceOptions = deserializeAws_queryOrderableDBInstanceOptionsList(
      __getArrayIfSingleItem(output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryParameter = (output: any, context: __SerdeContext): Parameter => {
  const contents: any = {
    ParameterName: undefined,
    ParameterValue: undefined,
    Description: undefined,
    Source: undefined,
    ApplyType: undefined,
    DataType: undefined,
    AllowedValues: undefined,
    IsModifiable: undefined,
    MinimumEngineVersion: undefined,
    ApplyMethod: undefined,
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

const deserializeAws_queryParametersList = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryParameter(entry, context);
    });
};

const deserializeAws_queryPendingCloudwatchLogsExports = (
  output: any,
  context: __SerdeContext
): PendingCloudwatchLogsExports => {
  const contents: any = {
    LogTypesToEnable: undefined,
    LogTypesToDisable: undefined,
  };
  if (output.LogTypesToEnable === "") {
    contents.LogTypesToEnable = [];
  } else if (output["LogTypesToEnable"] !== undefined && output["LogTypesToEnable"]["member"] !== undefined) {
    contents.LogTypesToEnable = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["LogTypesToEnable"]["member"]),
      context
    );
  }
  if (output.LogTypesToDisable === "") {
    contents.LogTypesToDisable = [];
  } else if (output["LogTypesToDisable"] !== undefined && output["LogTypesToDisable"]["member"] !== undefined) {
    contents.LogTypesToDisable = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["LogTypesToDisable"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPendingMaintenanceAction = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction => {
  const contents: any = {
    Action: undefined,
    AutoAppliedAfterDate: undefined,
    ForcedApplyDate: undefined,
    OptInStatus: undefined,
    CurrentApplyDate: undefined,
    Description: undefined,
  };
  if (output["Action"] !== undefined) {
    contents.Action = __expectString(output["Action"]);
  }
  if (output["AutoAppliedAfterDate"] !== undefined) {
    contents.AutoAppliedAfterDate = __expectNonNull(__parseRfc3339DateTime(output["AutoAppliedAfterDate"]));
  }
  if (output["ForcedApplyDate"] !== undefined) {
    contents.ForcedApplyDate = __expectNonNull(__parseRfc3339DateTime(output["ForcedApplyDate"]));
  }
  if (output["OptInStatus"] !== undefined) {
    contents.OptInStatus = __expectString(output["OptInStatus"]);
  }
  if (output["CurrentApplyDate"] !== undefined) {
    contents.CurrentApplyDate = __expectNonNull(__parseRfc3339DateTime(output["CurrentApplyDate"]));
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

const deserializeAws_queryPendingMaintenanceActionDetails = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPendingMaintenanceAction(entry, context);
    });
};

const deserializeAws_queryPendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryResourcePendingMaintenanceActions(entry, context);
    });
};

const deserializeAws_queryPendingMaintenanceActionsMessage = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceActionsMessage => {
  const contents: any = {
    PendingMaintenanceActions: undefined,
    Marker: undefined,
  };
  if (output.PendingMaintenanceActions === "") {
    contents.PendingMaintenanceActions = [];
  } else if (
    output["PendingMaintenanceActions"] !== undefined &&
    output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"] !== undefined
  ) {
    contents.PendingMaintenanceActions = deserializeAws_queryPendingMaintenanceActions(
      __getArrayIfSingleItem(output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryPendingModifiedValues = (output: any, context: __SerdeContext): PendingModifiedValues => {
  const contents: any = {
    DBInstanceClass: undefined,
    AllocatedStorage: undefined,
    MasterUserPassword: undefined,
    Port: undefined,
    BackupRetentionPeriod: undefined,
    MultiAZ: undefined,
    EngineVersion: undefined,
    LicenseModel: undefined,
    Iops: undefined,
    DBInstanceIdentifier: undefined,
    StorageType: undefined,
    CACertificateIdentifier: undefined,
    DBSubnetGroupName: undefined,
    PendingCloudwatchLogsExports: undefined,
  };
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
    contents.PendingCloudwatchLogsExports = deserializeAws_queryPendingCloudwatchLogsExports(
      output["PendingCloudwatchLogsExports"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryPromoteReadReplicaDBClusterResult = (
  output: any,
  context: __SerdeContext
): PromoteReadReplicaDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryProvisionedIopsNotAvailableInAZFault = (
  output: any,
  context: __SerdeContext
): ProvisionedIopsNotAvailableInAZFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryRange = (output: any, context: __SerdeContext): Range => {
  const contents: any = {
    From: undefined,
    To: undefined,
    Step: undefined,
  };
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

const deserializeAws_queryRangeList = (output: any, context: __SerdeContext): Range[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryRange(entry, context);
    });
};

const deserializeAws_queryReadersArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryReadReplicaDBClusterIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryReadReplicaDBInstanceIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryReadReplicaIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryRebootDBInstanceResult = (output: any, context: __SerdeContext): RebootDBInstanceResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryRemoveFromGlobalClusterResult = (
  output: any,
  context: __SerdeContext
): RemoveFromGlobalClusterResult => {
  const contents: any = {
    GlobalCluster: undefined,
  };
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

const deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult = (
  output: any,
  context: __SerdeContext
): RemoveSourceIdentifierFromSubscriptionResult => {
  const contents: any = {
    EventSubscription: undefined,
  };
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryResourcePendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions => {
  const contents: any = {
    ResourceIdentifier: undefined,
    PendingMaintenanceActionDetails: undefined,
  };
  if (output["ResourceIdentifier"] !== undefined) {
    contents.ResourceIdentifier = __expectString(output["ResourceIdentifier"]);
  }
  if (output.PendingMaintenanceActionDetails === "") {
    contents.PendingMaintenanceActionDetails = [];
  } else if (
    output["PendingMaintenanceActionDetails"] !== undefined &&
    output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"] !== undefined
  ) {
    contents.PendingMaintenanceActionDetails = deserializeAws_queryPendingMaintenanceActionDetails(
      __getArrayIfSingleItem(output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryRestoreDBClusterFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreDBClusterFromSnapshotResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryRestoreDBClusterToPointInTimeResult = (
  output: any,
  context: __SerdeContext
): RestoreDBClusterToPointInTimeResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryServerlessV2ScalingConfigurationInfo = (
  output: any,
  context: __SerdeContext
): ServerlessV2ScalingConfigurationInfo => {
  const contents: any = {
    MinCapacity: undefined,
    MaxCapacity: undefined,
  };
  if (output["MinCapacity"] !== undefined) {
    contents.MinCapacity = __strictParseFloat(output["MinCapacity"]) as number;
  }
  if (output["MaxCapacity"] !== undefined) {
    contents.MaxCapacity = __strictParseFloat(output["MaxCapacity"]) as number;
  }
  return contents;
};

const deserializeAws_querySharedSnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SharedSnapshotQuotaExceededFault => {
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

const deserializeAws_querySNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySNSNoAuthorizationFault = (output: any, context: __SerdeContext): SNSNoAuthorizationFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySNSTopicArnNotFoundFault = (
  output: any,
  context: __SerdeContext
): SNSTopicArnNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySourceIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySourceNotFoundFault = (output: any, context: __SerdeContext): SourceNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryStartDBClusterResult = (output: any, context: __SerdeContext): StartDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryStopDBClusterResult = (output: any, context: __SerdeContext): StopDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryStorageQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): StorageQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryStorageTypeNotSupportedFault = (
  output: any,
  context: __SerdeContext
): StorageTypeNotSupportedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySubnet = (output: any, context: __SerdeContext): Subnet => {
  const contents: any = {
    SubnetIdentifier: undefined,
    SubnetAvailabilityZone: undefined,
    SubnetStatus: undefined,
  };
  if (output["SubnetIdentifier"] !== undefined) {
    contents.SubnetIdentifier = __expectString(output["SubnetIdentifier"]);
  }
  if (output["SubnetAvailabilityZone"] !== undefined) {
    contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
  }
  if (output["SubnetStatus"] !== undefined) {
    contents.SubnetStatus = __expectString(output["SubnetStatus"]);
  }
  return contents;
};

const deserializeAws_querySubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
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

const deserializeAws_querySubscriptionAlreadyExistFault = (
  output: any,
  context: __SerdeContext
): SubscriptionAlreadyExistFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscriptionCategoryNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionCategoryNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscriptionNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySupportedCharacterSetsList = (output: any, context: __SerdeContext): CharacterSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCharacterSet(entry, context);
    });
};

const deserializeAws_querySupportedTimezonesList = (output: any, context: __SerdeContext): Timezone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTimezone(entry, context);
    });
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

const deserializeAws_queryTimezone = (output: any, context: __SerdeContext): Timezone => {
  const contents: any = {
    TimezoneName: undefined,
  };
  if (output["TimezoneName"] !== undefined) {
    contents.TimezoneName = __expectString(output["TimezoneName"]);
  }
  return contents;
};

const deserializeAws_queryUpgradeTarget = (output: any, context: __SerdeContext): UpgradeTarget => {
  const contents: any = {
    Engine: undefined,
    EngineVersion: undefined,
    Description: undefined,
    AutoUpgrade: undefined,
    IsMajorVersionUpgrade: undefined,
    SupportsGlobalDatabases: undefined,
  };
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

const deserializeAws_queryValidDBInstanceModificationsMessage = (
  output: any,
  context: __SerdeContext
): ValidDBInstanceModificationsMessage => {
  const contents: any = {
    Storage: undefined,
  };
  if (output.Storage === "") {
    contents.Storage = [];
  } else if (output["Storage"] !== undefined && output["Storage"]["ValidStorageOptions"] !== undefined) {
    contents.Storage = deserializeAws_queryValidStorageOptionsList(
      __getArrayIfSingleItem(output["Storage"]["ValidStorageOptions"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryValidStorageOptions = (output: any, context: __SerdeContext): ValidStorageOptions => {
  const contents: any = {
    StorageType: undefined,
    StorageSize: undefined,
    ProvisionedIops: undefined,
    IopsToStorageRatio: undefined,
  };
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output.StorageSize === "") {
    contents.StorageSize = [];
  } else if (output["StorageSize"] !== undefined && output["StorageSize"]["Range"] !== undefined) {
    contents.StorageSize = deserializeAws_queryRangeList(
      __getArrayIfSingleItem(output["StorageSize"]["Range"]),
      context
    );
  }
  if (output.ProvisionedIops === "") {
    contents.ProvisionedIops = [];
  } else if (output["ProvisionedIops"] !== undefined && output["ProvisionedIops"]["Range"] !== undefined) {
    contents.ProvisionedIops = deserializeAws_queryRangeList(
      __getArrayIfSingleItem(output["ProvisionedIops"]["Range"]),
      context
    );
  }
  if (output.IopsToStorageRatio === "") {
    contents.IopsToStorageRatio = [];
  } else if (output["IopsToStorageRatio"] !== undefined && output["IopsToStorageRatio"]["DoubleRange"] !== undefined) {
    contents.IopsToStorageRatio = deserializeAws_queryDoubleRangeList(
      __getArrayIfSingleItem(output["IopsToStorageRatio"]["DoubleRange"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryValidStorageOptionsList = (output: any, context: __SerdeContext): ValidStorageOptions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryValidStorageOptions(entry, context);
    });
};

const deserializeAws_queryValidUpgradeTargetList = (output: any, context: __SerdeContext): UpgradeTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUpgradeTarget(entry, context);
    });
};

const deserializeAws_queryVpcSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership => {
  const contents: any = {
    VpcSecurityGroupId: undefined,
    Status: undefined,
  };
  if (output["VpcSecurityGroupId"] !== undefined) {
    contents.VpcSecurityGroupId = __expectString(output["VpcSecurityGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryVpcSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryVpcSecurityGroupMembership(entry, context);
    });
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
