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
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "../commands/CreateDBClusterCommand";
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
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
} from "../commands/DeleteDBClusterParameterGroupCommand";
import {
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
} from "../commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "../commands/DeleteDBInstanceCommand";
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
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
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
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "../commands/DescribeDBSubnetGroupsCommand";
import {
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "../commands/DescribeEngineDefaultClusterParametersCommand";
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
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
} from "../commands/ModifyDBClusterParameterGroupCommand";
import {
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
} from "../commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "../commands/ModifyDBInstanceCommand";
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
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "../commands/RebootDBInstanceCommand";
import {
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
} from "../commands/RemoveFromGlobalClusterCommand";
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
  SwitchoverGlobalClusterCommandInput,
  SwitchoverGlobalClusterCommandOutput,
} from "../commands/SwitchoverGlobalClusterCommand";
import { DocDBServiceException as __BaseException } from "../models/DocDBServiceException";
import {
  AddSourceIdentifierToSubscriptionMessage,
  AddSourceIdentifierToSubscriptionResult,
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResult,
  AuthorizationNotFoundFault,
  AvailabilityZone,
  Certificate,
  CertificateDetails,
  CertificateMessage,
  CertificateNotFoundFault,
  CloudwatchLogsExportConfiguration,
  ClusterMasterUserSecret,
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterParameterGroupResult,
  CopyDBClusterSnapshotMessage,
  CopyDBClusterSnapshotResult,
  CreateDBClusterMessage,
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterParameterGroupResult,
  CreateDBClusterResult,
  CreateDBClusterSnapshotMessage,
  CreateDBClusterSnapshotResult,
  CreateDBInstanceMessage,
  CreateDBInstanceResult,
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupResult,
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResult,
  CreateGlobalClusterMessage,
  CreateGlobalClusterResult,
  DBCluster,
  DBClusterAlreadyExistsFault,
  DBClusterMember,
  DBClusterMessage,
  DBClusterNotFoundFault,
  DBClusterParameterGroup,
  DBClusterParameterGroupDetails,
  DBClusterParameterGroupNameMessage,
  DBClusterParameterGroupNotFoundFault,
  DBClusterParameterGroupsMessage,
  DBClusterQuotaExceededFault,
  DBClusterRole,
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
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault,
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
  DeleteDBClusterMessage,
  DeleteDBClusterParameterGroupMessage,
  DeleteDBClusterResult,
  DeleteDBClusterSnapshotMessage,
  DeleteDBClusterSnapshotResult,
  DeleteDBInstanceMessage,
  DeleteDBInstanceResult,
  DeleteDBSubnetGroupMessage,
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResult,
  DeleteGlobalClusterMessage,
  DeleteGlobalClusterResult,
  DescribeCertificatesMessage,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParametersMessage,
  DescribeDBClustersMessage,
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
  DescribeDBClusterSnapshotsMessage,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstancesMessage,
  DescribeDBSubnetGroupsMessage,
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
  DescribeEventCategoriesMessage,
  DescribeEventsMessage,
  DescribeEventSubscriptionsMessage,
  DescribeGlobalClustersMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
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
  ModifyDBClusterMessage,
  ModifyDBClusterParameterGroupMessage,
  ModifyDBClusterResult,
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeResult,
  ModifyDBInstanceMessage,
  ModifyDBInstanceResult,
  ModifyDBSubnetGroupMessage,
  ModifyDBSubnetGroupResult,
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResult,
  ModifyGlobalClusterMessage,
  ModifyGlobalClusterResult,
  OrderableDBInstanceOption,
  OrderableDBInstanceOptionsMessage,
  Parameter,
  PendingCloudwatchLogsExports,
  PendingMaintenanceAction,
  PendingMaintenanceActionsMessage,
  PendingModifiedValues,
  RebootDBInstanceMessage,
  RebootDBInstanceResult,
  RemoveFromGlobalClusterMessage,
  RemoveFromGlobalClusterResult,
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
  RemoveTagsFromResourceMessage,
  ResetDBClusterParameterGroupMessage,
  ResourceNotFoundFault,
  ResourcePendingMaintenanceActions,
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterFromSnapshotResult,
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBClusterToPointInTimeResult,
  ServerlessV2FeaturesSupport,
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
  SwitchoverGlobalClusterMessage,
  SwitchoverGlobalClusterResult,
  Tag,
  TagListMessage,
  UpgradeTarget,
  VpcSecurityGroupMembership,
} from "../models/models_0";

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
    [_A]: _ASITS,
    [_V]: _,
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
    [_A]: _ATTR,
    [_V]: _,
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
    [_A]: _APMA,
    [_V]: _,
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
    [_A]: _CDBCPG,
    [_V]: _,
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
    [_A]: _CDBCS,
    [_V]: _,
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
    [_A]: _CDBC,
    [_V]: _,
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
    [_A]: _CDBCPGr,
    [_V]: _,
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
    [_A]: _CDBCSr,
    [_V]: _,
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
    [_A]: _CDBI,
    [_V]: _,
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
    [_A]: _CDBSG,
    [_V]: _,
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
    [_A]: _CES,
    [_V]: _,
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
    [_A]: _CGC,
    [_V]: _,
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
    [_A]: _DDBC,
    [_V]: _,
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
    [_A]: _DDBCPG,
    [_V]: _,
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
    [_A]: _DDBCS,
    [_V]: _,
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
    [_A]: _DDBI,
    [_V]: _,
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
    [_A]: _DDBSG,
    [_V]: _,
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
    [_A]: _DES,
    [_V]: _,
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
    [_A]: _DGC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCertificatesCommand
 */
export const se_DescribeCertificatesCommand = async (
  input: DescribeCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCertificatesMessage(input, context),
    [_A]: _DC,
    [_V]: _,
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
    [_A]: _DDBCPGe,
    [_V]: _,
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
    [_A]: _DDBCP,
    [_V]: _,
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
    [_A]: _DDBCe,
    [_V]: _,
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
    [_A]: _DDBCSA,
    [_V]: _,
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
    [_A]: _DDBCSe,
    [_V]: _,
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
    [_A]: _DDBEV,
    [_V]: _,
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
    [_A]: _DDBIe,
    [_V]: _,
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
    [_A]: _DDBSGe,
    [_V]: _,
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
    [_A]: _DEDCP,
    [_V]: _,
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
    [_A]: _DEC,
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
    [_A]: _DESe,
    [_V]: _,
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
    [_A]: _DGCe,
    [_V]: _,
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
    [_A]: _DODBIO,
    [_V]: _,
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
    [_A]: _DPMA,
    [_V]: _,
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
    [_A]: _FDBC,
    [_V]: _,
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
    [_A]: _FGC,
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
    [_A]: _MDBC,
    [_V]: _,
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
    [_A]: _MDBCPG,
    [_V]: _,
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
    [_A]: _MDBCSA,
    [_V]: _,
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
    [_A]: _MDBI,
    [_V]: _,
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
    [_A]: _MDBSG,
    [_V]: _,
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
    [_A]: _MES,
    [_V]: _,
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
    [_A]: _MGC,
    [_V]: _,
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
    [_A]: _RDBI,
    [_V]: _,
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
    [_A]: _RFGC,
    [_V]: _,
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
    [_A]: _RSIFS,
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
    [_A]: _RDBCPG,
    [_V]: _,
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
    [_A]: _RDBCFS,
    [_V]: _,
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
    [_A]: _RDBCTPIT,
    [_V]: _,
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
    [_A]: _SDBC,
    [_V]: _,
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
    [_A]: _SDBCt,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySwitchoverGlobalClusterCommand
 */
export const se_SwitchoverGlobalClusterCommand = async (
  input: SwitchoverGlobalClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SwitchoverGlobalClusterMessage(input, context),
    [_A]: _SGC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddSourceIdentifierToSubscriptionCommand
 */
export const de_AddSourceIdentifierToSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddSourceIdentifierToSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryApplyPendingMaintenanceActionCommand
 */
export const de_ApplyPendingMaintenanceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCopyDBClusterParameterGroupCommand
 */
export const de_CopyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCopyDBClusterSnapshotCommand
 */
export const de_CopyDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateDBClusterCommand
 */
export const de_CreateDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateDBClusterParameterGroupCommand
 */
export const de_CreateDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateDBClusterSnapshotCommand
 */
export const de_CreateDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateDBInstanceCommand
 */
export const de_CreateDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateDBSubnetGroupCommand
 */
export const de_CreateDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateEventSubscriptionCommand
 */
export const de_CreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateGlobalClusterCommand
 */
export const de_CreateGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteDBClusterCommand
 */
export const de_DeleteDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteDBClusterParameterGroupCommand
 */
export const de_DeleteDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBClusterSnapshotCommand
 */
export const de_DeleteDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteDBInstanceCommand
 */
export const de_DeleteDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteDBSubnetGroupCommand
 */
export const de_DeleteDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEventSubscriptionCommand
 */
export const de_DeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteGlobalClusterCommand
 */
export const de_DeleteGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeCertificatesCommand
 */
export const de_DescribeCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CertificateMessage(data.DescribeCertificatesResult, context);
  const response: DescribeCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterParameterGroupsCommand
 */
export const de_DescribeDBClusterParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBClusterParametersCommand
 */
export const de_DescribeDBClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBClustersCommand
 */
export const de_DescribeDBClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand
 */
export const de_DescribeDBClusterSnapshotAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBClusterSnapshotsCommand
 */
export const de_DescribeDBClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBEngineVersionsCommand
 */
export const de_DescribeDBEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBInstancesCommand
 */
export const de_DescribeDBInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBSubnetGroupsCommand
 */
export const de_DescribeDBSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEngineDefaultClusterParametersCommand
 */
export const de_DescribeEngineDefaultClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEventCategoriesCommand
 */
export const de_DescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEventSubscriptionsCommand
 */
export const de_DescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeGlobalClustersCommand
 */
export const de_DescribeGlobalClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand
 */
export const de_DescribeOrderableDBInstanceOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribePendingMaintenanceActionsCommand
 */
export const de_DescribePendingMaintenanceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryFailoverDBClusterCommand
 */
export const de_FailoverDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryFailoverGlobalClusterCommand
 */
export const de_FailoverGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyDBClusterCommand
 */
export const de_ModifyDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyDBClusterParameterGroupCommand
 */
export const de_ModifyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyDBClusterSnapshotAttributeCommand
 */
export const de_ModifyDBClusterSnapshotAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyDBInstanceCommand
 */
export const de_ModifyDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyDBSubnetGroupCommand
 */
export const de_ModifyDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyEventSubscriptionCommand
 */
export const de_ModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyGlobalClusterCommand
 */
export const de_ModifyGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRebootDBInstanceCommand
 */
export const de_RebootDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRemoveFromGlobalClusterCommand
 */
export const de_RemoveFromGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFromGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand
 */
export const de_RemoveSourceIdentifierFromSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryResetDBClusterParameterGroupCommand
 */
export const de_ResetDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRestoreDBClusterFromSnapshotCommand
 */
export const de_RestoreDBClusterFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRestoreDBClusterToPointInTimeCommand
 */
export const de_RestoreDBClusterToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryStartDBClusterCommand
 */
export const de_StartDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryStopDBClusterCommand
 */
export const de_StopDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_querySwitchoverGlobalClusterCommand
 */
export const de_SwitchoverGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SwitchoverGlobalClusterResult(data.SwitchoverGlobalClusterResult, context);
  const response: SwitchoverGlobalClusterCommandOutput = {
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
    case "SourceNotFound":
    case "com.amazonaws.docdb#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.docdb#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.docdb#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.docdb#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupAlreadyExists":
    case "com.amazonaws.docdb#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.docdb#DBParameterGroupQuotaExceededFault":
      throw await de_DBParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.docdb#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.docdb#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.docdb#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.docdb#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.docdb#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.docdb#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.docdb#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.docdb#InvalidGlobalClusterStateFault":
      throw await de_InvalidGlobalClusterStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.docdb#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.docdb#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "AuthorizationNotFound":
    case "com.amazonaws.docdb#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.docdb#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.docdb#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.docdb#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.docdb#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.docdb#StorageTypeNotSupportedFault":
      throw await de_StorageTypeNotSupportedFaultRes(parsedOutput, context);
    case "DBSubnetGroupAlreadyExists":
    case "com.amazonaws.docdb#DBSubnetGroupAlreadyExistsFault":
      throw await de_DBSubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSubnetGroupQuotaExceeded":
    case "com.amazonaws.docdb#DBSubnetGroupQuotaExceededFault":
      throw await de_DBSubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.docdb#DBSubnetQuotaExceededFault":
      throw await de_DBSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "EventSubscriptionQuotaExceeded":
    case "com.amazonaws.docdb#EventSubscriptionQuotaExceededFault":
      throw await de_EventSubscriptionQuotaExceededFaultRes(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.docdb#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.docdb#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.docdb#SNSTopicArnNotFoundFault":
      throw await de_SNSTopicArnNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.docdb#SubscriptionAlreadyExistFault":
      throw await de_SubscriptionAlreadyExistFaultRes(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.docdb#SubscriptionCategoryNotFoundFault":
      throw await de_SubscriptionCategoryNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterAlreadyExistsFault":
    case "com.amazonaws.docdb#GlobalClusterAlreadyExistsFault":
      throw await de_GlobalClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "GlobalClusterQuotaExceededFault":
    case "com.amazonaws.docdb#GlobalClusterQuotaExceededFault":
      throw await de_GlobalClusterQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.docdb#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.docdb#DBSnapshotAlreadyExistsFault":
      throw await de_DBSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBSubnetStateFault":
    case "com.amazonaws.docdb#InvalidDBSubnetStateFault":
      throw await de_InvalidDBSubnetStateFaultRes(parsedOutput, context);
    case "InvalidEventSubscriptionState":
    case "com.amazonaws.docdb#InvalidEventSubscriptionStateFault":
      throw await de_InvalidEventSubscriptionStateFaultRes(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.docdb#CertificateNotFoundFault":
      throw await de_CertificateNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.docdb#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.docdb#SharedSnapshotQuotaExceededFault":
      throw await de_SharedSnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "DBUpgradeDependencyFailure":
    case "com.amazonaws.docdb#DBUpgradeDependencyFailureFault":
      throw await de_DBUpgradeDependencyFailureFaultRes(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.docdb#SubnetAlreadyInUse":
      throw await de_SubnetAlreadyInUseRes(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.docdb#InsufficientDBClusterCapacityFault":
      throw await de_InsufficientDBClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.docdb#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.docdb#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
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
 * serializeAws_queryAddSourceIdentifierToSubscriptionMessage
 */
const se_AddSourceIdentifierToSubscriptionMessage = (
  input: AddSourceIdentifierToSubscriptionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  return entries;
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
 * serializeAws_queryApplyPendingMaintenanceActionMessage
 */
const se_ApplyPendingMaintenanceActionMessage = (
  input: ApplyPendingMaintenanceActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RI] != null) {
    entries[_RI] = input[_RI];
  }
  if (input[_AA] != null) {
    entries[_AA] = input[_AA];
  }
  if (input[_OIT] != null) {
    entries[_OIT] = input[_OIT];
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
  if (input[_ELT] != null) {
    const memberEntries = se_LogTypeList(input[_ELT], context);
    if (input[_ELT]?.length === 0) {
      entries.EnableLogTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableLogTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DLT] != null) {
    const memberEntries = se_LogTypeList(input[_DLT], context);
    if (input[_DLT]?.length === 0) {
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
  if (input[_SDBCPGI] != null) {
    entries[_SDBCPGI] = input[_SDBCPGI];
  }
  if (input[_TDBCPGI] != null) {
    entries[_TDBCPGI] = input[_TDBCPGI];
  }
  if (input[_TDBCPGD] != null) {
    entries[_TDBCPGD] = input[_TDBCPGD];
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
 * serializeAws_queryCopyDBClusterSnapshotMessage
 */
const se_CopyDBClusterSnapshotMessage = (input: CopyDBClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SDBCSI] != null) {
    entries[_SDBCSI] = input[_SDBCSI];
  }
  if (input[_TDBCSI] != null) {
    entries[_TDBCSI] = input[_TDBCSI];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_PSU] != null) {
    entries[_PSU] = input[_PSU];
  }
  if (input[_CT] != null) {
    entries[_CT] = input[_CT];
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
 * serializeAws_queryCreateDBClusterMessage
 */
const se_CreateDBClusterMessage = (input: CreateDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AZ] != null) {
    const memberEntries = se_AvailabilityZones(input[_AZ], context);
    if (input[_AZ]?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BRP] != null) {
    entries[_BRP] = input[_BRP];
  }
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_MU] != null) {
    entries[_MU] = input[_MU];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
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
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_PSU] != null) {
    entries[_PSU] = input[_PSU];
  }
  if (input[_ECLE] != null) {
    const memberEntries = se_LogTypeList(input[_ECLE], context);
    if (input[_ECLE]?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
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
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_DBPGF] != null) {
    entries[_DBPGF] = input[_DBPGF];
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
 * serializeAws_queryCreateDBClusterSnapshotMessage
 */
const se_CreateDBClusterSnapshotMessage = (input: CreateDBClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCSI] != null) {
    entries[_DBCSI] = input[_DBCSI];
  }
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
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
 * serializeAws_queryCreateDBInstanceMessage
 */
const se_CreateDBInstanceMessage = (input: CreateDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_AZv] != null) {
    entries[_AZv] = input[_AZv];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
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
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_PT] != null) {
    entries[_PT] = input[_PT];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  return entries;
};

/**
 * serializeAws_queryCreateDBSubnetGroupMessage
 */
const se_CreateDBSubnetGroupMessage = (input: CreateDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_DBSGD] != null) {
    entries[_DBSGD] = input[_DBSGD];
  }
  if (input[_SIu] != null) {
    const memberEntries = se_SubnetIdentifierList(input[_SIu], context);
    if (input[_SIu]?.length === 0) {
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
 * serializeAws_queryCreateEventSubscriptionMessage
 */
const se_CreateEventSubscriptionMessage = (input: CreateEventSubscriptionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_STA] != null) {
    entries[_STA] = input[_STA];
  }
  if (input[_STo] != null) {
    entries[_STo] = input[_STo];
  }
  if (input[_EC] != null) {
    const memberEntries = se_EventCategoriesList(input[_EC], context);
    if (input[_EC]?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIo] != null) {
    const memberEntries = se_SourceIdsList(input[_SIo], context);
    if (input[_SIo]?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
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
 * serializeAws_queryCreateGlobalClusterMessage
 */
const se_CreateGlobalClusterMessage = (input: CreateGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_SDBCI] != null) {
    entries[_SDBCI] = input[_SDBCI];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterMessage
 */
const se_DeleteDBClusterMessage = (input: DeleteDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_SFS] != null) {
    entries[_SFS] = input[_SFS];
  }
  if (input[_FDBSI] != null) {
    entries[_FDBSI] = input[_FDBSI];
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
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterSnapshotMessage
 */
const se_DeleteDBClusterSnapshotMessage = (input: DeleteDBClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCSI] != null) {
    entries[_DBCSI] = input[_DBCSI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBInstanceMessage
 */
const se_DeleteDBInstanceMessage = (input: DeleteDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBSubnetGroupMessage
 */
const se_DeleteDBSubnetGroupMessage = (input: DeleteDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteEventSubscriptionMessage
 */
const se_DeleteEventSubscriptionMessage = (input: DeleteEventSubscriptionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteGlobalClusterMessage
 */
const se_DeleteGlobalClusterMessage = (input: DeleteGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCertificatesMessage
 */
const se_DescribeCertificatesMessage = (input: DescribeCertificatesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CI] != null) {
    entries[_CI] = input[_CI];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBClustersMessage
 */
const se_DescribeDBClustersMessage = (input: DescribeDBClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_DBCSI] != null) {
    entries[_DBCSI] = input[_DBCSI];
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
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_DBCSI] != null) {
    entries[_DBCSI] = input[_DBCSI];
  }
  if (input[_STn] != null) {
    entries[_STn] = input[_STn];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_IS] != null) {
    entries[_IS] = input[_IS];
  }
  if (input[_IP] != null) {
    entries[_IP] = input[_IP];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBEngineVersionsMessage
 */
const se_DescribeDBEngineVersionsMessage = (input: DescribeDBEngineVersionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_DBPGF] != null) {
    entries[_DBPGF] = input[_DBPGF];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_DO] != null) {
    entries[_DO] = input[_DO];
  }
  if (input[_LSCS] != null) {
    entries[_LSCS] = input[_LSCS];
  }
  if (input[_LST] != null) {
    entries[_LST] = input[_LST];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBInstancesMessage
 */
const se_DescribeDBInstancesMessage = (input: DescribeDBInstancesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBSubnetGroupsMessage
 */
const se_DescribeDBSubnetGroupsMessage = (input: DescribeDBSubnetGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_DBPGF] != null) {
    entries[_DBPGF] = input[_DBPGF];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEventCategoriesMessage
 */
const se_DescribeEventCategoriesMessage = (input: DescribeEventCategoriesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_STo] != null) {
    entries[_STo] = input[_STo];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_STo] != null) {
    entries[_STo] = input[_STo];
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
  if (input[_EC] != null) {
    const memberEntries = se_EventCategoriesList(input[_EC], context);
    if (input[_EC]?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeGlobalClustersMessage
 */
const se_DescribeGlobalClustersMessage = (input: DescribeGlobalClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_LM] != null) {
    entries[_LM] = input[_LM];
  }
  if (input[_Vp] != null) {
    entries[_Vp] = input[_Vp];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_RI] != null) {
    entries[_RI] = input[_RI];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
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
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_TDBII] != null) {
    entries[_TDBII] = input[_TDBII];
  }
  return entries;
};

/**
 * serializeAws_queryFailoverGlobalClusterMessage
 */
const se_FailoverGlobalClusterMessage = (input: FailoverGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_TDCI] != null) {
    entries[_TDCI] = input[_TDCI];
  }
  if (input[_ADL] != null) {
    entries[_ADL] = input[_ADL];
  }
  if (input[_Sw] != null) {
    entries[_Sw] = input[_Sw];
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
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_F] != null) {
    const memberEntries = se_FilterList(input[_F], context);
    if (input[_F]?.length === 0) {
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
 * serializeAws_queryModifyDBClusterMessage
 */
const se_ModifyDBClusterMessage = (input: ModifyDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_NDBCI] != null) {
    entries[_NDBCI] = input[_NDBCI];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_BRP] != null) {
    entries[_BRP] = input[_BRP];
  }
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_CLEC] != null) {
    const memberEntries = se_CloudwatchLogsExportConfiguration(input[_CLEC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudwatchLogsExportConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_AMVUl] != null) {
    entries[_AMVUl] = input[_AMVUl];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
  }
  if (input[_RMUP] != null) {
    entries[_RMUP] = input[_RMUP];
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
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_Pa] != null) {
    const memberEntries = se_ParametersList(input[_Pa], context);
    if (input[_Pa]?.length === 0) {
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
  if (input[_DBCSI] != null) {
    entries[_DBCSI] = input[_DBCSI];
  }
  if (input[_AN] != null) {
    entries[_AN] = input[_AN];
  }
  if (input[_VTA] != null) {
    const memberEntries = se_AttributeValueList(input[_VTA], context);
    if (input[_VTA]?.length === 0) {
      entries.ValuesToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ValuesToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VTR] != null) {
    const memberEntries = se_AttributeValueList(input[_VTR], context);
    if (input[_VTR]?.length === 0) {
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
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_NDBII] != null) {
    entries[_NDBII] = input[_NDBII];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_PT] != null) {
    entries[_PT] = input[_PT];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_CRR] != null) {
    entries[_CRR] = input[_CRR];
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBSubnetGroupMessage
 */
const se_ModifyDBSubnetGroupMessage = (input: ModifyDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_DBSGD] != null) {
    entries[_DBSGD] = input[_DBSGD];
  }
  if (input[_SIu] != null) {
    const memberEntries = se_SubnetIdentifierList(input[_SIu], context);
    if (input[_SIu]?.length === 0) {
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_STA] != null) {
    entries[_STA] = input[_STA];
  }
  if (input[_STo] != null) {
    entries[_STo] = input[_STo];
  }
  if (input[_EC] != null) {
    const memberEntries = se_EventCategoriesList(input[_EC], context);
    if (input[_EC]?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
  }
  return entries;
};

/**
 * serializeAws_queryModifyGlobalClusterMessage
 */
const se_ModifyGlobalClusterMessage = (input: ModifyGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_NGCI] != null) {
    entries[_NGCI] = input[_NGCI];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  return entries;
};

/**
 * serializeAws_queryParameter
 */
const se_Parameter = (input: Parameter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PV] != null) {
    entries[_PV] = input[_PV];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_DT] != null) {
    entries[_DT] = input[_DT];
  }
  if (input[_AV] != null) {
    entries[_AV] = input[_AV];
  }
  if (input[_IM] != null) {
    entries[_IM] = input[_IM];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
  }
  if (input[_AM] != null) {
    entries[_AM] = input[_AM];
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
 * serializeAws_queryRebootDBInstanceMessage
 */
const se_RebootDBInstanceMessage = (input: RebootDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_FF] != null) {
    entries[_FF] = input[_FF];
  }
  return entries;
};

/**
 * serializeAws_queryRemoveFromGlobalClusterMessage
 */
const se_RemoveFromGlobalClusterMessage = (input: RemoveFromGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_DCI] != null) {
    entries[_DCI] = input[_DCI];
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
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
 * serializeAws_queryResetDBClusterParameterGroupMessage
 */
const se_ResetDBClusterParameterGroupMessage = (
  input: ResetDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_RAP] != null) {
    entries[_RAP] = input[_RAP];
  }
  if (input[_Pa] != null) {
    const memberEntries = se_ParametersList(input[_Pa], context);
    if (input[_Pa]?.length === 0) {
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
  if (input[_AZ] != null) {
    const memberEntries = se_AvailabilityZones(input[_AZ], context);
    if (input[_AZ]?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_SIn] != null) {
    entries[_SIn] = input[_SIn];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_ECLE] != null) {
    const memberEntries = se_LogTypeList(input[_ECLE], context);
    if (input[_ECLE]?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
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
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_RT] != null) {
    entries[_RT] = input[_RT];
  }
  if (input[_SDBCI] != null) {
    entries[_SDBCI] = input[_SDBCI];
  }
  if (input[_RTT] != null) {
    entries[_RTT] = __serializeDateTime(input[_RTT]);
  }
  if (input[_ULRT] != null) {
    entries[_ULRT] = input[_ULRT];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_ECLE] != null) {
    const memberEntries = se_LogTypeList(input[_ECLE], context);
    if (input[_ECLE]?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  return entries;
};

/**
 * serializeAws_queryServerlessV2ScalingConfiguration
 */
const se_ServerlessV2ScalingConfiguration = (input: ServerlessV2ScalingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MC] != null) {
    entries[_MC] = __serializeFloat(input[_MC]);
  }
  if (input[_MCa] != null) {
    entries[_MCa] = __serializeFloat(input[_MCa]);
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
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  return entries;
};

/**
 * serializeAws_queryStopDBClusterMessage
 */
const se_StopDBClusterMessage = (input: StopDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
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
 * serializeAws_querySwitchoverGlobalClusterMessage
 */
const se_SwitchoverGlobalClusterMessage = (input: SwitchoverGlobalClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_TDCI] != null) {
    entries[_TDCI] = input[_TDCI];
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
  if (output[_ES] != null) {
    contents[_ES] = de_EventSubscription(output[_ES], context);
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
  if (output[_RPMA] != null) {
    contents[_RPMA] = de_ResourcePendingMaintenanceActions(output[_RPMA], context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryCACertificateIdentifiersList
 */
const de_CACertificateIdentifiersList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCertificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  const contents: any = {};
  if (output[_CI] != null) {
    contents[_CI] = __expectString(output[_CI]);
  }
  if (output[_CTe] != null) {
    contents[_CTe] = __expectString(output[_CTe]);
  }
  if (output[_Th] != null) {
    contents[_Th] = __expectString(output[_Th]);
  }
  if (output[_VF] != null) {
    contents[_VF] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_VF]));
  }
  if (output[_VT] != null) {
    contents[_VT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_VT]));
  }
  if (output[_CA] != null) {
    contents[_CA] = __expectString(output[_CA]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateDetails
 */
const de_CertificateDetails = (output: any, context: __SerdeContext): CertificateDetails => {
  const contents: any = {};
  if (output[_CAI] != null) {
    contents[_CAI] = __expectString(output[_CAI]);
  }
  if (output[_VT] != null) {
    contents[_VT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_VT]));
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateList
 */
const de_CertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Certificate(entry, context);
    });
};

/**
 * deserializeAws_queryCertificateMessage
 */
const de_CertificateMessage = (output: any, context: __SerdeContext): CertificateMessage => {
  const contents: any = {};
  if (String(output.Certificates).trim() === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_Ce] != null) {
    contents[_C] = de_CertificateList(__getArrayIfSingleItem(output[_C][_Ce]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateNotFoundFault
 */
const de_CertificateNotFoundFault = (output: any, context: __SerdeContext): CertificateNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterMasterUserSecret
 */
const de_ClusterMasterUserSecret = (output: any, context: __SerdeContext): ClusterMasterUserSecret => {
  const contents: any = {};
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
  }
  if (output[_SS] != null) {
    contents[_SS] = __expectString(output[_SS]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
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
  if (output[_DBCPG] != null) {
    contents[_DBCPG] = de_DBClusterParameterGroup(output[_DBCPG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyDBClusterSnapshotResult
 */
const de_CopyDBClusterSnapshotResult = (output: any, context: __SerdeContext): CopyDBClusterSnapshotResult => {
  const contents: any = {};
  if (output[_DBCS] != null) {
    contents[_DBCS] = de_DBClusterSnapshot(output[_DBCS], context);
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
  if (output[_DBCPG] != null) {
    contents[_DBCPG] = de_DBClusterParameterGroup(output[_DBCPG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBClusterResult
 */
const de_CreateDBClusterResult = (output: any, context: __SerdeContext): CreateDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBClusterSnapshotResult
 */
const de_CreateDBClusterSnapshotResult = (output: any, context: __SerdeContext): CreateDBClusterSnapshotResult => {
  const contents: any = {};
  if (output[_DBCS] != null) {
    contents[_DBCS] = de_DBClusterSnapshot(output[_DBCS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBInstanceResult
 */
const de_CreateDBInstanceResult = (output: any, context: __SerdeContext): CreateDBInstanceResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBSubnetGroupResult
 */
const de_CreateDBSubnetGroupResult = (output: any, context: __SerdeContext): CreateDBSubnetGroupResult => {
  const contents: any = {};
  if (output[_DBSG] != null) {
    contents[_DBSG] = de_DBSubnetGroup(output[_DBSG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateEventSubscriptionResult
 */
const de_CreateEventSubscriptionResult = (output: any, context: __SerdeContext): CreateEventSubscriptionResult => {
  const contents: any = {};
  if (output[_ES] != null) {
    contents[_ES] = de_EventSubscription(output[_ES], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateGlobalClusterResult
 */
const de_CreateGlobalClusterResult = (output: any, context: __SerdeContext): CreateGlobalClusterResult => {
  const contents: any = {};
  if (output[_GC] != null) {
    contents[_GC] = de_GlobalCluster(output[_GC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBCluster
 */
const de_DBCluster = (output: any, context: __SerdeContext): DBCluster => {
  const contents: any = {};
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_AZv] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_AZv]), context);
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_DBCPG] != null) {
    contents[_DBCPG] = __expectString(output[_DBCPG]);
  }
  if (output[_DBSG] != null) {
    contents[_DBSG] = __expectString(output[_DBSG]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_PP] != null) {
    contents[_PP] = __expectString(output[_PP]);
  }
  if (output[_ERT] != null) {
    contents[_ERT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ERT]));
  }
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __expectString(output[_RE]);
  }
  if (output[_MAZ] != null) {
    contents[_MAZ] = __parseBoolean(output[_MAZ]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_LRT] != null) {
    contents[_LRT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LRT]));
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_PBW] != null) {
    contents[_PBW] = __expectString(output[_PBW]);
  }
  if (output[_PMW] != null) {
    contents[_PMW] = __expectString(output[_PMW]);
  }
  if (output[_RSI] != null) {
    contents[_RSI] = __expectString(output[_RSI]);
  }
  if (String(output.ReadReplicaIdentifiers).trim() === "") {
    contents[_RRI] = [];
  } else if (output[_RRI] != null && output[_RRI][_RRIe] != null) {
    contents[_RRI] = de_ReadReplicaIdentifierList(__getArrayIfSingleItem(output[_RRI][_RRIe]), context);
  }
  if (String(output.DBClusterMembers).trim() === "") {
    contents[_DBCM] = [];
  } else if (output[_DBCM] != null && output[_DBCM][_DBCMl] != null) {
    contents[_DBCM] = de_DBClusterMemberList(__getArrayIfSingleItem(output[_DBCM][_DBCMl]), context);
  }
  if (String(output.VpcSecurityGroups).trim() === "") {
    contents[_VSG] = [];
  } else if (output[_VSG] != null && output[_VSG][_VSGM] != null) {
    contents[_VSG] = de_VpcSecurityGroupMembershipList(__getArrayIfSingleItem(output[_VSG][_VSGM]), context);
  }
  if (output[_HZI] != null) {
    contents[_HZI] = __expectString(output[_HZI]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_DCRI] != null) {
    contents[_DCRI] = __expectString(output[_DCRI]);
  }
  if (output[_DBCA] != null) {
    contents[_DBCA] = __expectString(output[_DBCA]);
  }
  if (String(output.AssociatedRoles).trim() === "") {
    contents[_AR] = [];
  } else if (output[_AR] != null && output[_AR][_DBCR] != null) {
    contents[_AR] = de_DBClusterRoles(__getArrayIfSingleItem(output[_AR][_DBCR]), context);
  }
  if (output[_CGI] != null) {
    contents[_CGI] = __expectString(output[_CGI]);
  }
  if (output[_CCT] != null) {
    contents[_CCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCT]));
  }
  if (String(output.EnabledCloudwatchLogsExports).trim() === "") {
    contents[_ECLEn] = [];
  } else if (output[_ECLEn] != null && output[_ECLEn][_me] != null) {
    contents[_ECLEn] = de_LogTypeList(__getArrayIfSingleItem(output[_ECLEn][_me]), context);
  }
  if (output[_DP] != null) {
    contents[_DP] = __parseBoolean(output[_DP]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_SVSC] != null) {
    contents[_SVSC] = de_ServerlessV2ScalingConfigurationInfo(output[_SVSC], context);
  }
  if (output[_MUS] != null) {
    contents[_MUS] = de_ClusterMasterUserSecret(output[_MUS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterAlreadyExistsFault
 */
const de_DBClusterAlreadyExistsFault = (output: any, context: __SerdeContext): DBClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_ICW] != null) {
    contents[_ICW] = __parseBoolean(output[_ICW]);
  }
  if (output[_DBCPGS] != null) {
    contents[_DBCPGS] = __expectString(output[_DBCPGS]);
  }
  if (output[_PT] != null) {
    contents[_PT] = __strictParseInt32(output[_PT]) as number;
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.DBClusters).trim() === "") {
    contents[_DBCl] = [];
  } else if (output[_DBCl] != null && output[_DBCl][_DBC] != null) {
    contents[_DBCl] = de_DBClusterList(__getArrayIfSingleItem(output[_DBCl][_DBC]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterNotFoundFault
 */
const de_DBClusterNotFoundFault = (output: any, context: __SerdeContext): DBClusterNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroup
 */
const de_DBClusterParameterGroup = (output: any, context: __SerdeContext): DBClusterParameterGroup => {
  const contents: any = {};
  if (output[_DBCPGN] != null) {
    contents[_DBCPGN] = __expectString(output[_DBCPGN]);
  }
  if (output[_DBPGF] != null) {
    contents[_DBPGF] = __expectString(output[_DBPGF]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_DBCPGA] != null) {
    contents[_DBCPGA] = __expectString(output[_DBCPGA]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroupDetails
 */
const de_DBClusterParameterGroupDetails = (output: any, context: __SerdeContext): DBClusterParameterGroupDetails => {
  const contents: any = {};
  if (String(output.Parameters).trim() === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_DBCPGN] != null) {
    contents[_DBCPGN] = __expectString(output[_DBCPGN]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterParameterGroupsMessage
 */
const de_DBClusterParameterGroupsMessage = (output: any, context: __SerdeContext): DBClusterParameterGroupsMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.DBClusterParameterGroups).trim() === "") {
    contents[_DBCPGl] = [];
  } else if (output[_DBCPGl] != null && output[_DBCPGl][_DBCPG] != null) {
    contents[_DBCPGl] = de_DBClusterParameterGroupList(__getArrayIfSingleItem(output[_DBCPGl][_DBCPG]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterQuotaExceededFault
 */
const de_DBClusterQuotaExceededFault = (output: any, context: __SerdeContext): DBClusterQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRole
 */
const de_DBClusterRole = (output: any, context: __SerdeContext): DBClusterRole => {
  const contents: any = {};
  if (output[_RA] != null) {
    contents[_RA] = __expectString(output[_RA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_AZv] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_AZv]), context);
  }
  if (output[_DBCSI] != null) {
    contents[_DBCSI] = __expectString(output[_DBCSI]);
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_SCT] != null) {
    contents[_SCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SCT]));
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_CCT] != null) {
    contents[_CCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCT]));
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_STn] != null) {
    contents[_STn] = __expectString(output[_STn]);
  }
  if (output[_PP] != null) {
    contents[_PP] = __strictParseInt32(output[_PP]) as number;
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_DBCSA] != null) {
    contents[_DBCSA] = __expectString(output[_DBCSA]);
  }
  if (output[_SDBCSA] != null) {
    contents[_SDBCSA] = __expectString(output[_SDBCSA]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterSnapshotAttribute
 */
const de_DBClusterSnapshotAttribute = (output: any, context: __SerdeContext): DBClusterSnapshotAttribute => {
  const contents: any = {};
  if (output[_AN] != null) {
    contents[_AN] = __expectString(output[_AN]);
  }
  if (String(output.AttributeValues).trim() === "") {
    contents[_AVt] = [];
  } else if (output[_AVt] != null && output[_AVt][_AVtt] != null) {
    contents[_AVt] = de_AttributeValueList(__getArrayIfSingleItem(output[_AVt][_AVtt]), context);
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
  if (output[_DBCSI] != null) {
    contents[_DBCSI] = __expectString(output[_DBCSI]);
  }
  if (String(output.DBClusterSnapshotAttributes).trim() === "") {
    contents[_DBCSAl] = [];
  } else if (output[_DBCSAl] != null && output[_DBCSAl][_DBCSAlu] != null) {
    contents[_DBCSAl] = de_DBClusterSnapshotAttributeList(__getArrayIfSingleItem(output[_DBCSAl][_DBCSAlu]), context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.DBClusterSnapshots).trim() === "") {
    contents[_DBCSl] = [];
  } else if (output[_DBCSl] != null && output[_DBCSl][_DBCS] != null) {
    contents[_DBCSl] = de_DBClusterSnapshotList(__getArrayIfSingleItem(output[_DBCSl][_DBCS]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterSnapshotNotFoundFault
 */
const de_DBClusterSnapshotNotFoundFault = (output: any, context: __SerdeContext): DBClusterSnapshotNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBEngineVersion
 */
const de_DBEngineVersion = (output: any, context: __SerdeContext): DBEngineVersion => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_DBPGF] != null) {
    contents[_DBPGF] = __expectString(output[_DBPGF]);
  }
  if (output[_DBED] != null) {
    contents[_DBED] = __expectString(output[_DBED]);
  }
  if (output[_DBEVD] != null) {
    contents[_DBEVD] = __expectString(output[_DBEVD]);
  }
  if (String(output.ValidUpgradeTarget).trim() === "") {
    contents[_VUT] = [];
  } else if (output[_VUT] != null && output[_VUT][_UT] != null) {
    contents[_VUT] = de_ValidUpgradeTargetList(__getArrayIfSingleItem(output[_VUT][_UT]), context);
  }
  if (String(output.ExportableLogTypes).trim() === "") {
    contents[_ELTx] = [];
  } else if (output[_ELTx] != null && output[_ELTx][_me] != null) {
    contents[_ELTx] = de_LogTypeList(__getArrayIfSingleItem(output[_ELTx][_me]), context);
  }
  if (output[_SLETCL] != null) {
    contents[_SLETCL] = __parseBoolean(output[_SLETCL]);
  }
  if (String(output.SupportedCACertificateIdentifiers).trim() === "") {
    contents[_SCACI] = [];
  } else if (output[_SCACI] != null && output[_SCACI][_me] != null) {
    contents[_SCACI] = de_CACertificateIdentifiersList(__getArrayIfSingleItem(output[_SCACI][_me]), context);
  }
  if (output[_SCRWR] != null) {
    contents[_SCRWR] = __parseBoolean(output[_SCRWR]);
  }
  if (output[_SVFS] != null) {
    contents[_SVFS] = de_ServerlessV2FeaturesSupport(output[_SVFS], context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.DBEngineVersions).trim() === "") {
    contents[_DBEV] = [];
  } else if (output[_DBEV] != null && output[_DBEV][_DBEVn] != null) {
    contents[_DBEV] = de_DBEngineVersionList(__getArrayIfSingleItem(output[_DBEV][_DBEVn]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstance
 */
const de_DBInstance = (output: any, context: __SerdeContext): DBInstance => {
  const contents: any = {};
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_DBIC] != null) {
    contents[_DBIC] = __expectString(output[_DBIC]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_DBIS] != null) {
    contents[_DBIS] = __expectString(output[_DBIS]);
  }
  if (output[_End] != null) {
    contents[_End] = de_Endpoint(output[_End], context);
  }
  if (output[_ICT] != null) {
    contents[_ICT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ICT]));
  }
  if (output[_PBW] != null) {
    contents[_PBW] = __expectString(output[_PBW]);
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (String(output.VpcSecurityGroups).trim() === "") {
    contents[_VSG] = [];
  } else if (output[_VSG] != null && output[_VSG][_VSGM] != null) {
    contents[_VSG] = de_VpcSecurityGroupMembershipList(__getArrayIfSingleItem(output[_VSG][_VSGM]), context);
  }
  if (output[_AZv] != null) {
    contents[_AZv] = __expectString(output[_AZv]);
  }
  if (output[_DBSG] != null) {
    contents[_DBSG] = de_DBSubnetGroup(output[_DBSG], context);
  }
  if (output[_PMW] != null) {
    contents[_PMW] = __expectString(output[_PMW]);
  }
  if (output[_PMV] != null) {
    contents[_PMV] = de_PendingModifiedValues(output[_PMV], context);
  }
  if (output[_LRT] != null) {
    contents[_LRT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LRT]));
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_AMVU] != null) {
    contents[_AMVU] = __parseBoolean(output[_AMVU]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __parseBoolean(output[_PA]);
  }
  if (String(output.StatusInfos).trim() === "") {
    contents[_SIt] = [];
  } else if (output[_SIt] != null && output[_SIt][_DBISI] != null) {
    contents[_SIt] = de_DBInstanceStatusInfoList(__getArrayIfSingleItem(output[_SIt][_DBISI]), context);
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_DRI] != null) {
    contents[_DRI] = __expectString(output[_DRI]);
  }
  if (output[_CACI] != null) {
    contents[_CACI] = __expectString(output[_CACI]);
  }
  if (output[_CTTS] != null) {
    contents[_CTTS] = __parseBoolean(output[_CTTS]);
  }
  if (output[_PT] != null) {
    contents[_PT] = __strictParseInt32(output[_PT]) as number;
  }
  if (output[_DBIA] != null) {
    contents[_DBIA] = __expectString(output[_DBIA]);
  }
  if (String(output.EnabledCloudwatchLogsExports).trim() === "") {
    contents[_ECLEn] = [];
  } else if (output[_ECLEn] != null && output[_ECLEn][_me] != null) {
    contents[_ECLEn] = de_LogTypeList(__getArrayIfSingleItem(output[_ECLEn][_me]), context);
  }
  if (output[_CD] != null) {
    contents[_CD] = de_CertificateDetails(output[_CD], context);
  }
  if (output[_PIE] != null) {
    contents[_PIE] = __parseBoolean(output[_PIE]);
  }
  if (output[_PIKMSKI] != null) {
    contents[_PIKMSKI] = __expectString(output[_PIKMSKI]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceAlreadyExistsFault
 */
const de_DBInstanceAlreadyExistsFault = (output: any, context: __SerdeContext): DBInstanceAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.DBInstances).trim() === "") {
    contents[_DBIn] = [];
  } else if (output[_DBIn] != null && output[_DBIn][_DBI] != null) {
    contents[_DBIn] = de_DBInstanceList(__getArrayIfSingleItem(output[_DBIn][_DBI]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceNotFoundFault
 */
const de_DBInstanceNotFoundFault = (output: any, context: __SerdeContext): DBInstanceNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceStatusInfo
 */
const de_DBInstanceStatusInfo = (output: any, context: __SerdeContext): DBInstanceStatusInfo => {
  const contents: any = {};
  if (output[_STta] != null) {
    contents[_STta] = __expectString(output[_STta]);
  }
  if (output[_No] != null) {
    contents[_No] = __parseBoolean(output[_No]);
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
 * deserializeAws_queryDBParameterGroupAlreadyExistsFault
 */
const de_DBParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupNotFoundFault
 */
const de_DBParameterGroupNotFoundFault = (output: any, context: __SerdeContext): DBParameterGroupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroupNotFoundFault
 */
const de_DBSecurityGroupNotFoundFault = (output: any, context: __SerdeContext): DBSecurityGroupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSnapshotAlreadyExistsFault
 */
const de_DBSnapshotAlreadyExistsFault = (output: any, context: __SerdeContext): DBSnapshotAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSnapshotNotFoundFault
 */
const de_DBSnapshotNotFoundFault = (output: any, context: __SerdeContext): DBSnapshotNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroup
 */
const de_DBSubnetGroup = (output: any, context: __SerdeContext): DBSubnetGroup => {
  const contents: any = {};
  if (output[_DBSGN] != null) {
    contents[_DBSGN] = __expectString(output[_DBSGN]);
  }
  if (output[_DBSGD] != null) {
    contents[_DBSGD] = __expectString(output[_DBSGD]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_SGS] != null) {
    contents[_SGS] = __expectString(output[_SGS]);
  }
  if (String(output.Subnets).trim() === "") {
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_Sub] != null) {
    contents[_Su] = de_SubnetList(__getArrayIfSingleItem(output[_Su][_Sub]), context);
  }
  if (output[_DBSGA] != null) {
    contents[_DBSGA] = __expectString(output[_DBSGA]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupAlreadyExistsFault
 */
const de_DBSubnetGroupAlreadyExistsFault = (output: any, context: __SerdeContext): DBSubnetGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupMessage
 */
const de_DBSubnetGroupMessage = (output: any, context: __SerdeContext): DBSubnetGroupMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.DBSubnetGroups).trim() === "") {
    contents[_DBSGu] = [];
  } else if (output[_DBSGu] != null && output[_DBSGu][_DBSG] != null) {
    contents[_DBSGu] = de_DBSubnetGroups(__getArrayIfSingleItem(output[_DBSGu][_DBSG]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupNotFoundFault
 */
const de_DBSubnetGroupNotFoundFault = (output: any, context: __SerdeContext): DBSubnetGroupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupQuotaExceededFault
 */
const de_DBSubnetGroupQuotaExceededFault = (output: any, context: __SerdeContext): DBSubnetGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBUpgradeDependencyFailureFault
 */
const de_DBUpgradeDependencyFailureFault = (output: any, context: __SerdeContext): DBUpgradeDependencyFailureFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBClusterResult
 */
const de_DeleteDBClusterResult = (output: any, context: __SerdeContext): DeleteDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBClusterSnapshotResult
 */
const de_DeleteDBClusterSnapshotResult = (output: any, context: __SerdeContext): DeleteDBClusterSnapshotResult => {
  const contents: any = {};
  if (output[_DBCS] != null) {
    contents[_DBCS] = de_DBClusterSnapshot(output[_DBCS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBInstanceResult
 */
const de_DeleteDBInstanceResult = (output: any, context: __SerdeContext): DeleteDBInstanceResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteEventSubscriptionResult
 */
const de_DeleteEventSubscriptionResult = (output: any, context: __SerdeContext): DeleteEventSubscriptionResult => {
  const contents: any = {};
  if (output[_ES] != null) {
    contents[_ES] = de_EventSubscription(output[_ES], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteGlobalClusterResult
 */
const de_DeleteGlobalClusterResult = (output: any, context: __SerdeContext): DeleteGlobalClusterResult => {
  const contents: any = {};
  if (output[_GC] != null) {
    contents[_GC] = de_GlobalCluster(output[_GC], context);
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
  if (output[_DBCSAR] != null) {
    contents[_DBCSAR] = de_DBClusterSnapshotAttributesResult(output[_DBCSAR], context);
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
  if (output[_ED] != null) {
    contents[_ED] = de_EngineDefaults(output[_ED], context);
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
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_HZI] != null) {
    contents[_HZI] = __expectString(output[_HZI]);
  }
  return contents;
};

/**
 * deserializeAws_queryEngineDefaults
 */
const de_EngineDefaults = (output: any, context: __SerdeContext): EngineDefaults => {
  const contents: any = {};
  if (output[_DBPGF] != null) {
    contents[_DBPGF] = __expectString(output[_DBPGF]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.Parameters).trim() === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEvent
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_STo] != null) {
    contents[_STo] = __expectString(output[_STo]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (String(output.EventCategories).trim() === "") {
    contents[_EC] = [];
  } else if (output[_EC] != null && output[_EC][_ECv] != null) {
    contents[_EC] = de_EventCategoriesList(__getArrayIfSingleItem(output[_EC][_ECv]), context);
  }
  if (output[_Da] != null) {
    contents[_Da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Da]));
  }
  if (output[_SAo] != null) {
    contents[_SAo] = __expectString(output[_SAo]);
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
  if (output[_STo] != null) {
    contents[_STo] = __expectString(output[_STo]);
  }
  if (String(output.EventCategories).trim() === "") {
    contents[_EC] = [];
  } else if (output[_EC] != null && output[_EC][_ECv] != null) {
    contents[_EC] = de_EventCategoriesList(__getArrayIfSingleItem(output[_EC][_ECv]), context);
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
  if (String(output.EventCategoriesMapList).trim() === "") {
    contents[_ECML] = [];
  } else if (output[_ECML] != null && output[_ECML][_ECM] != null) {
    contents[_ECML] = de_EventCategoriesMapList(__getArrayIfSingleItem(output[_ECML][_ECM]), context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.Events).trim() === "") {
    contents[_Ev] = [];
  } else if (output[_Ev] != null && output[_Ev][_Eve] != null) {
    contents[_Ev] = de_EventList(__getArrayIfSingleItem(output[_Ev][_Eve]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEventSubscription
 */
const de_EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  const contents: any = {};
  if (output[_CAIu] != null) {
    contents[_CAIu] = __expectString(output[_CAIu]);
  }
  if (output[_CSI] != null) {
    contents[_CSI] = __expectString(output[_CSI]);
  }
  if (output[_STA] != null) {
    contents[_STA] = __expectString(output[_STA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SCTu] != null) {
    contents[_SCTu] = __expectString(output[_SCTu]);
  }
  if (output[_STo] != null) {
    contents[_STo] = __expectString(output[_STo]);
  }
  if (String(output.SourceIdsList).trim() === "") {
    contents[_SIL] = [];
  } else if (output[_SIL] != null && output[_SIL][_SIou] != null) {
    contents[_SIL] = de_SourceIdsList(__getArrayIfSingleItem(output[_SIL][_SIou]), context);
  }
  if (String(output.EventCategoriesList).trim() === "") {
    contents[_ECL] = [];
  } else if (output[_ECL] != null && output[_ECL][_ECv] != null) {
    contents[_ECL] = de_EventCategoriesList(__getArrayIfSingleItem(output[_ECL][_ECv]), context);
  }
  if (output[_En] != null) {
    contents[_En] = __parseBoolean(output[_En]);
  }
  if (output[_ESA] != null) {
    contents[_ESA] = __expectString(output[_ESA]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.EventSubscriptionsList).trim() === "") {
    contents[_ESL] = [];
  } else if (output[_ESL] != null && output[_ESL][_ES] != null) {
    contents[_ESL] = de_EventSubscriptionsList(__getArrayIfSingleItem(output[_ESL][_ES]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryFailoverDBClusterResult
 */
const de_FailoverDBClusterResult = (output: any, context: __SerdeContext): FailoverDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryFailoverGlobalClusterResult
 */
const de_FailoverGlobalClusterResult = (output: any, context: __SerdeContext): FailoverGlobalClusterResult => {
  const contents: any = {};
  if (output[_GC] != null) {
    contents[_GC] = de_GlobalCluster(output[_GC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalCluster
 */
const de_GlobalCluster = (output: any, context: __SerdeContext): GlobalCluster => {
  const contents: any = {};
  if (output[_GCI] != null) {
    contents[_GCI] = __expectString(output[_GCI]);
  }
  if (output[_GCRI] != null) {
    contents[_GCRI] = __expectString(output[_GCRI]);
  }
  if (output[_GCA] != null) {
    contents[_GCA] = __expectString(output[_GCA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_DP] != null) {
    contents[_DP] = __parseBoolean(output[_DP]);
  }
  if (String(output.GlobalClusterMembers).trim() === "") {
    contents[_GCM] = [];
  } else if (output[_GCM] != null && output[_GCM][_GCMl] != null) {
    contents[_GCM] = de_GlobalClusterMemberList(__getArrayIfSingleItem(output[_GCM][_GCMl]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClusterAlreadyExistsFault
 */
const de_GlobalClusterAlreadyExistsFault = (output: any, context: __SerdeContext): GlobalClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_DBCA] != null) {
    contents[_DBCA] = __expectString(output[_DBCA]);
  }
  if (String(output.Readers).trim() === "") {
    contents[_R] = [];
  } else if (output[_R] != null && output[_R][_me] != null) {
    contents[_R] = de_ReadersArnList(__getArrayIfSingleItem(output[_R][_me]), context);
  }
  if (output[_IW] != null) {
    contents[_IW] = __parseBoolean(output[_IW]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClusterQuotaExceededFault
 */
const de_GlobalClusterQuotaExceededFault = (output: any, context: __SerdeContext): GlobalClusterQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryGlobalClustersMessage
 */
const de_GlobalClustersMessage = (output: any, context: __SerdeContext): GlobalClustersMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (String(output.GlobalClusters).trim() === "") {
    contents[_GCl] = [];
  } else if (output[_GCl] != null && output[_GCl][_GCMl] != null) {
    contents[_GCl] = de_GlobalClusterList(__getArrayIfSingleItem(output[_GCl][_GCMl]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceQuotaExceededFault
 */
const de_InstanceQuotaExceededFault = (output: any, context: __SerdeContext): InstanceQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBClusterStateFault
 */
const de_InvalidDBClusterStateFault = (output: any, context: __SerdeContext): InvalidDBClusterStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBInstanceStateFault
 */
const de_InvalidDBInstanceStateFault = (output: any, context: __SerdeContext): InvalidDBInstanceStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBSnapshotStateFault
 */
const de_InvalidDBSnapshotStateFault = (output: any, context: __SerdeContext): InvalidDBSnapshotStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBSubnetGroupStateFault
 */
const de_InvalidDBSubnetGroupStateFault = (output: any, context: __SerdeContext): InvalidDBSubnetGroupStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBSubnetStateFault
 */
const de_InvalidDBSubnetStateFault = (output: any, context: __SerdeContext): InvalidDBSubnetStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidGlobalClusterStateFault
 */
const de_InvalidGlobalClusterStateFault = (output: any, context: __SerdeContext): InvalidGlobalClusterStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRestoreFault
 */
const de_InvalidRestoreFault = (output: any, context: __SerdeContext): InvalidRestoreFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidVPCNetworkStateFault
 */
const de_InvalidVPCNetworkStateFault = (output: any, context: __SerdeContext): InvalidVPCNetworkStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSKeyNotAccessibleFault
 */
const de_KMSKeyNotAccessibleFault = (output: any, context: __SerdeContext): KMSKeyNotAccessibleFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryModifyDBClusterResult
 */
const de_ModifyDBClusterResult = (output: any, context: __SerdeContext): ModifyDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
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
  if (output[_DBCSAR] != null) {
    contents[_DBCSAR] = de_DBClusterSnapshotAttributesResult(output[_DBCSAR], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBInstanceResult
 */
const de_ModifyDBInstanceResult = (output: any, context: __SerdeContext): ModifyDBInstanceResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBSubnetGroupResult
 */
const de_ModifyDBSubnetGroupResult = (output: any, context: __SerdeContext): ModifyDBSubnetGroupResult => {
  const contents: any = {};
  if (output[_DBSG] != null) {
    contents[_DBSG] = de_DBSubnetGroup(output[_DBSG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyEventSubscriptionResult
 */
const de_ModifyEventSubscriptionResult = (output: any, context: __SerdeContext): ModifyEventSubscriptionResult => {
  const contents: any = {};
  if (output[_ES] != null) {
    contents[_ES] = de_EventSubscription(output[_ES], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyGlobalClusterResult
 */
const de_ModifyGlobalClusterResult = (output: any, context: __SerdeContext): ModifyGlobalClusterResult => {
  const contents: any = {};
  if (output[_GC] != null) {
    contents[_GC] = de_GlobalCluster(output[_GC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryOrderableDBInstanceOption
 */
const de_OrderableDBInstanceOption = (output: any, context: __SerdeContext): OrderableDBInstanceOption => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_DBIC] != null) {
    contents[_DBIC] = __expectString(output[_DBIC]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectString(output[_LM]);
  }
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_AZv] != null) {
    contents[_AZ] = de_AvailabilityZoneList(__getArrayIfSingleItem(output[_AZ][_AZv]), context);
  }
  if (output[_Vp] != null) {
    contents[_Vp] = __parseBoolean(output[_Vp]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
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
  if (String(output.OrderableDBInstanceOptions).trim() === "") {
    contents[_ODBIO] = [];
  } else if (output[_ODBIO] != null && output[_ODBIO][_ODBIOr] != null) {
    contents[_ODBIO] = de_OrderableDBInstanceOptionsList(__getArrayIfSingleItem(output[_ODBIO][_ODBIOr]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
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
  if (output[_AT] != null) {
    contents[_AT] = __expectString(output[_AT]);
  }
  if (output[_DT] != null) {
    contents[_DT] = __expectString(output[_DT]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __expectString(output[_AV]);
  }
  if (output[_IM] != null) {
    contents[_IM] = __parseBoolean(output[_IM]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
  }
  if (output[_AM] != null) {
    contents[_AM] = __expectString(output[_AM]);
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
  if (String(output.LogTypesToEnable).trim() === "") {
    contents[_LTTE] = [];
  } else if (output[_LTTE] != null && output[_LTTE][_me] != null) {
    contents[_LTTE] = de_LogTypeList(__getArrayIfSingleItem(output[_LTTE][_me]), context);
  }
  if (String(output.LogTypesToDisable).trim() === "") {
    contents[_LTTD] = [];
  } else if (output[_LTTD] != null && output[_LTTD][_me] != null) {
    contents[_LTTD] = de_LogTypeList(__getArrayIfSingleItem(output[_LTTD][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPendingMaintenanceAction
 */
const de_PendingMaintenanceAction = (output: any, context: __SerdeContext): PendingMaintenanceAction => {
  const contents: any = {};
  if (output[_A] != null) {
    contents[_A] = __expectString(output[_A]);
  }
  if (output[_AAAD] != null) {
    contents[_AAAD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_AAAD]));
  }
  if (output[_FAD] != null) {
    contents[_FAD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_FAD]));
  }
  if (output[_OIS] != null) {
    contents[_OIS] = __expectString(output[_OIS]);
  }
  if (output[_CAD] != null) {
    contents[_CAD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CAD]));
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
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
  if (String(output.PendingMaintenanceActions).trim() === "") {
    contents[_PMA] = [];
  } else if (output[_PMA] != null && output[_PMA][_RPMA] != null) {
    contents[_PMA] = de_PendingMaintenanceActions(__getArrayIfSingleItem(output[_PMA][_RPMA]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryPendingModifiedValues
 */
const de_PendingModifiedValues = (output: any, context: __SerdeContext): PendingModifiedValues => {
  const contents: any = {};
  if (output[_DBIC] != null) {
    contents[_DBIC] = __expectString(output[_DBIC]);
  }
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
  }
  if (output[_MUP] != null) {
    contents[_MUP] = __expectString(output[_MUP]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (output[_MAZ] != null) {
    contents[_MAZ] = __parseBoolean(output[_MAZ]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectString(output[_LM]);
  }
  if (output[_I] != null) {
    contents[_I] = __strictParseInt32(output[_I]) as number;
  }
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_CACI] != null) {
    contents[_CACI] = __expectString(output[_CACI]);
  }
  if (output[_DBSGN] != null) {
    contents[_DBSGN] = __expectString(output[_DBSGN]);
  }
  if (output[_PCLE] != null) {
    contents[_PCLE] = de_PendingCloudwatchLogsExports(output[_PCLE], context);
  }
  return contents;
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
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRemoveFromGlobalClusterResult
 */
const de_RemoveFromGlobalClusterResult = (output: any, context: __SerdeContext): RemoveFromGlobalClusterResult => {
  const contents: any = {};
  if (output[_GC] != null) {
    contents[_GC] = de_GlobalCluster(output[_GC], context);
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
  if (output[_ES] != null) {
    contents[_ES] = de_EventSubscription(output[_ES], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundFault
 */
const de_ResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  if (String(output.PendingMaintenanceActionDetails).trim() === "") {
    contents[_PMAD] = [];
  } else if (output[_PMAD] != null && output[_PMAD][_PMAe] != null) {
    contents[_PMAD] = de_PendingMaintenanceActionDetails(__getArrayIfSingleItem(output[_PMAD][_PMAe]), context);
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
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
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
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessV2FeaturesSupport
 */
const de_ServerlessV2FeaturesSupport = (output: any, context: __SerdeContext): ServerlessV2FeaturesSupport => {
  const contents: any = {};
  if (output[_MC] != null) {
    contents[_MC] = __strictParseFloat(output[_MC]) as number;
  }
  if (output[_MCa] != null) {
    contents[_MCa] = __strictParseFloat(output[_MCa]) as number;
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
  if (output[_MC] != null) {
    contents[_MC] = __strictParseFloat(output[_MC]) as number;
  }
  if (output[_MCa] != null) {
    contents[_MCa] = __strictParseFloat(output[_MCa]) as number;
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotQuotaExceededFault
 */
const de_SnapshotQuotaExceededFault = (output: any, context: __SerdeContext): SnapshotQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSInvalidTopicFault
 */
const de_SNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSNoAuthorizationFault
 */
const de_SNSNoAuthorizationFault = (output: any, context: __SerdeContext): SNSNoAuthorizationFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSTopicArnNotFoundFault
 */
const de_SNSTopicArnNotFoundFault = (output: any, context: __SerdeContext): SNSTopicArnNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryStartDBClusterResult
 */
const de_StartDBClusterResult = (output: any, context: __SerdeContext): StartDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStopDBClusterResult
 */
const de_StopDBClusterResult = (output: any, context: __SerdeContext): StopDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStorageQuotaExceededFault
 */
const de_StorageQuotaExceededFault = (output: any, context: __SerdeContext): StorageQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryStorageTypeNotSupportedFault
 */
const de_StorageTypeNotSupportedFault = (output: any, context: __SerdeContext): StorageTypeNotSupportedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_SSu] != null) {
    contents[_SSu] = __expectString(output[_SSu]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetAlreadyInUse
 */
const de_SubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionNotFoundFault
 */
const de_SubscriptionNotFoundFault = (output: any, context: __SerdeContext): SubscriptionNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySwitchoverGlobalClusterResult
 */
const de_SwitchoverGlobalClusterResult = (output: any, context: __SerdeContext): SwitchoverGlobalClusterResult => {
  const contents: any = {};
  if (output[_GC] != null) {
    contents[_GC] = de_GlobalCluster(output[_GC], context);
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
 * deserializeAws_queryUpgradeTarget
 */
const de_UpgradeTarget = (output: any, context: __SerdeContext): UpgradeTarget => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_AU] != null) {
    contents[_AU] = __parseBoolean(output[_AU]);
  }
  if (output[_IMVU] != null) {
    contents[_IMVU] = __parseBoolean(output[_IMVU]);
  }
  return contents;
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
  if (output[_VSGIp] != null) {
    contents[_VSGIp] = __expectString(output[_VSGIp]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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

const _ = "2014-10-31";
const _A = "Action";
const _AA = "ApplyAction";
const _AAAD = "AutoAppliedAfterDate";
const _ADL = "AllowDataLoss";
const _AI = "ApplyImmediately";
const _AM = "ApplyMethod";
const _AMVU = "AutoMinorVersionUpgrade";
const _AMVUl = "AllowMajorVersionUpgrade";
const _AN = "AttributeName";
const _APMA = "ApplyPendingMaintenanceAction";
const _AR = "AssociatedRoles";
const _AS = "AllocatedStorage";
const _ASITS = "AddSourceIdentifierToSubscription";
const _AT = "ApplyType";
const _ATTR = "AddTagsToResource";
const _AU = "AutoUpgrade";
const _AV = "AllowedValues";
const _AVt = "AttributeValues";
const _AVtt = "AttributeValue";
const _AZ = "AvailabilityZones";
const _AZv = "AvailabilityZone";
const _Ad = "Address";
const _BRP = "BackupRetentionPeriod";
const _C = "Certificates";
const _CA = "CertificateArn";
const _CACI = "CACertificateIdentifier";
const _CAD = "CurrentApplyDate";
const _CAI = "CAIdentifier";
const _CAIu = "CustomerAwsId";
const _CCT = "ClusterCreateTime";
const _CD = "CertificateDetails";
const _CDBC = "CreateDBCluster";
const _CDBCPG = "CopyDBClusterParameterGroup";
const _CDBCPGr = "CreateDBClusterParameterGroup";
const _CDBCS = "CopyDBClusterSnapshot";
const _CDBCSr = "CreateDBClusterSnapshot";
const _CDBI = "CreateDBInstance";
const _CDBSG = "CreateDBSubnetGroup";
const _CES = "CreateEventSubscription";
const _CGC = "CreateGlobalCluster";
const _CGI = "CloneGroupId";
const _CI = "CertificateIdentifier";
const _CLEC = "CloudwatchLogsExportConfiguration";
const _CRR = "CertificateRotationRestart";
const _CSI = "CustSubscriptionId";
const _CT = "CopyTags";
const _CTTS = "CopyTagsToSnapshot";
const _CTe = "CertificateType";
const _Ce = "Certificate";
const _D = "Description";
const _DBC = "DBCluster";
const _DBCA = "DBClusterArn";
const _DBCI = "DBClusterIdentifier";
const _DBCM = "DBClusterMembers";
const _DBCMl = "DBClusterMember";
const _DBCPG = "DBClusterParameterGroup";
const _DBCPGA = "DBClusterParameterGroupArn";
const _DBCPGN = "DBClusterParameterGroupName";
const _DBCPGS = "DBClusterParameterGroupStatus";
const _DBCPGl = "DBClusterParameterGroups";
const _DBCR = "DBClusterRole";
const _DBCS = "DBClusterSnapshot";
const _DBCSA = "DBClusterSnapshotArn";
const _DBCSAR = "DBClusterSnapshotAttributesResult";
const _DBCSAl = "DBClusterSnapshotAttributes";
const _DBCSAlu = "DBClusterSnapshotAttribute";
const _DBCSI = "DBClusterSnapshotIdentifier";
const _DBCSl = "DBClusterSnapshots";
const _DBCl = "DBClusters";
const _DBED = "DBEngineDescription";
const _DBEV = "DBEngineVersions";
const _DBEVD = "DBEngineVersionDescription";
const _DBEVn = "DBEngineVersion";
const _DBI = "DBInstance";
const _DBIA = "DBInstanceArn";
const _DBIC = "DBInstanceClass";
const _DBII = "DBInstanceIdentifier";
const _DBIS = "DBInstanceStatus";
const _DBISI = "DBInstanceStatusInfo";
const _DBIn = "DBInstances";
const _DBPGF = "DBParameterGroupFamily";
const _DBSG = "DBSubnetGroup";
const _DBSGA = "DBSubnetGroupArn";
const _DBSGD = "DBSubnetGroupDescription";
const _DBSGN = "DBSubnetGroupName";
const _DBSGu = "DBSubnetGroups";
const _DC = "DescribeCertificates";
const _DCI = "DbClusterIdentifier";
const _DCRI = "DbClusterResourceId";
const _DDBC = "DeleteDBCluster";
const _DDBCP = "DescribeDBClusterParameters";
const _DDBCPG = "DeleteDBClusterParameterGroup";
const _DDBCPGe = "DescribeDBClusterParameterGroups";
const _DDBCS = "DeleteDBClusterSnapshot";
const _DDBCSA = "DescribeDBClusterSnapshotAttributes";
const _DDBCSe = "DescribeDBClusterSnapshots";
const _DDBCe = "DescribeDBClusters";
const _DDBEV = "DescribeDBEngineVersions";
const _DDBI = "DeleteDBInstance";
const _DDBIe = "DescribeDBInstances";
const _DDBSG = "DeleteDBSubnetGroup";
const _DDBSGe = "DescribeDBSubnetGroups";
const _DE = "DescribeEvents";
const _DEC = "DescribeEventCategories";
const _DEDCP = "DescribeEngineDefaultClusterParameters";
const _DES = "DeleteEventSubscription";
const _DESe = "DescribeEventSubscriptions";
const _DGC = "DeleteGlobalCluster";
const _DGCe = "DescribeGlobalClusters";
const _DLT = "DisableLogTypes";
const _DN = "DatabaseName";
const _DO = "DefaultOnly";
const _DODBIO = "DescribeOrderableDBInstanceOptions";
const _DP = "DeletionProtection";
const _DPMA = "DescribePendingMaintenanceActions";
const _DRI = "DbiResourceId";
const _DT = "DataType";
const _Da = "Date";
const _Du = "Duration";
const _E = "Engine";
const _EC = "EventCategories";
const _ECL = "EventCategoriesList";
const _ECLE = "EnableCloudwatchLogsExports";
const _ECLEn = "EnabledCloudwatchLogsExports";
const _ECM = "EventCategoriesMap";
const _ECML = "EventCategoriesMapList";
const _ECv = "EventCategory";
const _ED = "EngineDefaults";
const _ELT = "EnableLogTypes";
const _ELTx = "ExportableLogTypes";
const _EPI = "EnablePerformanceInsights";
const _ERT = "EarliestRestorableTime";
const _ES = "EventSubscription";
const _ESA = "EventSubscriptionArn";
const _ESL = "EventSubscriptionsList";
const _ET = "EndTime";
const _EV = "EngineVersion";
const _En = "Enabled";
const _End = "Endpoint";
const _Ev = "Events";
const _Eve = "Event";
const _F = "Filters";
const _FAD = "ForcedApplyDate";
const _FDBC = "FailoverDBCluster";
const _FDBSI = "FinalDBSnapshotIdentifier";
const _FF = "ForceFailover";
const _FGC = "FailoverGlobalCluster";
const _GC = "GlobalCluster";
const _GCA = "GlobalClusterArn";
const _GCI = "GlobalClusterIdentifier";
const _GCM = "GlobalClusterMembers";
const _GCMl = "GlobalClusterMember";
const _GCRI = "GlobalClusterResourceId";
const _GCl = "GlobalClusters";
const _HZI = "HostedZoneId";
const _I = "Iops";
const _ICT = "InstanceCreateTime";
const _ICW = "IsClusterWriter";
const _IM = "IsModifiable";
const _IMVU = "IsMajorVersionUpgrade";
const _IP = "IncludePublic";
const _IS = "IncludeShared";
const _IW = "IsWriter";
const _K = "Key";
const _KKI = "KmsKeyId";
const _LM = "LicenseModel";
const _LRT = "LatestRestorableTime";
const _LSCS = "ListSupportedCharacterSets";
const _LST = "ListSupportedTimezones";
const _LTFR = "ListTagsForResource";
const _LTTD = "LogTypesToDisable";
const _LTTE = "LogTypesToEnable";
const _M = "Marker";
const _MAZ = "MultiAZ";
const _MC = "MinCapacity";
const _MCa = "MaxCapacity";
const _MDBC = "ModifyDBCluster";
const _MDBCPG = "ModifyDBClusterParameterGroup";
const _MDBCSA = "ModifyDBClusterSnapshotAttribute";
const _MDBI = "ModifyDBInstance";
const _MDBSG = "ModifyDBSubnetGroup";
const _MES = "ModifyEventSubscription";
const _MEV = "MinimumEngineVersion";
const _MGC = "ModifyGlobalCluster";
const _MMUP = "ManageMasterUserPassword";
const _MR = "MaxRecords";
const _MU = "MasterUsername";
const _MUP = "MasterUserPassword";
const _MUS = "MasterUserSecret";
const _MUSKKI = "MasterUserSecretKmsKeyId";
const _Me = "Message";
const _N = "Name";
const _NDBCI = "NewDBClusterIdentifier";
const _NDBII = "NewDBInstanceIdentifier";
const _NGCI = "NewGlobalClusterIdentifier";
const _No = "Normal";
const _ODBIO = "OrderableDBInstanceOptions";
const _ODBIOr = "OrderableDBInstanceOption";
const _OIS = "OptInStatus";
const _OIT = "OptInType";
const _P = "Port";
const _PA = "PubliclyAccessible";
const _PBW = "PreferredBackupWindow";
const _PCLE = "PendingCloudwatchLogsExports";
const _PIE = "PerformanceInsightsEnabled";
const _PIKMSKI = "PerformanceInsightsKMSKeyId";
const _PMA = "PendingMaintenanceActions";
const _PMAD = "PendingMaintenanceActionDetails";
const _PMAe = "PendingMaintenanceAction";
const _PMV = "PendingModifiedValues";
const _PMW = "PreferredMaintenanceWindow";
const _PN = "ParameterName";
const _PP = "PercentProgress";
const _PSU = "PreSignedUrl";
const _PT = "PromotionTier";
const _PV = "ParameterValue";
const _Pa = "Parameters";
const _Par = "Parameter";
const _R = "Readers";
const _RA = "RoleArn";
const _RAP = "ResetAllParameters";
const _RDBCFS = "RestoreDBClusterFromSnapshot";
const _RDBCPG = "ResetDBClusterParameterGroup";
const _RDBCTPIT = "RestoreDBClusterToPointInTime";
const _RDBI = "RebootDBInstance";
const _RE = "ReaderEndpoint";
const _RFGC = "RemoveFromGlobalCluster";
const _RI = "ResourceIdentifier";
const _RMUP = "RotateMasterUserPassword";
const _RN = "ResourceName";
const _RPMA = "ResourcePendingMaintenanceActions";
const _RRI = "ReadReplicaIdentifiers";
const _RRIe = "ReadReplicaIdentifier";
const _RSI = "ReplicationSourceIdentifier";
const _RSIFS = "RemoveSourceIdentifierFromSubscription";
const _RT = "RestoreType";
const _RTFR = "RemoveTagsFromResource";
const _RTT = "RestoreToTime";
const _S = "Source";
const _SA = "SecretArn";
const _SAZ = "SubnetAvailabilityZone";
const _SAo = "SourceArn";
const _SCACI = "SupportedCACertificateIdentifiers";
const _SCRWR = "SupportsCertificateRotationWithoutRestart";
const _SCT = "SnapshotCreateTime";
const _SCTu = "SubscriptionCreationTime";
const _SDBC = "StartDBCluster";
const _SDBCI = "SourceDBClusterIdentifier";
const _SDBCPGI = "SourceDBClusterParameterGroupIdentifier";
const _SDBCSA = "SourceDBClusterSnapshotArn";
const _SDBCSI = "SourceDBClusterSnapshotIdentifier";
const _SDBCt = "StopDBCluster";
const _SE = "StorageEncrypted";
const _SFS = "SkipFinalSnapshot";
const _SGC = "SwitchoverGlobalCluster";
const _SGS = "SubnetGroupStatus";
const _SI = "SourceIdentifier";
const _SIL = "SourceIdsList";
const _SIn = "SnapshotIdentifier";
const _SIo = "SourceIds";
const _SIou = "SourceId";
const _SIt = "StatusInfos";
const _SIu = "SubnetIds";
const _SIub = "SubnetIdentifier";
const _SLETCL = "SupportsLogExportsToCloudwatchLogs";
const _SN = "SubscriptionName";
const _SS = "SecretStatus";
const _SSu = "SubnetStatus";
const _ST = "StorageType";
const _STA = "SnsTopicArn";
const _STn = "SnapshotType";
const _STo = "SourceType";
const _STt = "StartTime";
const _STta = "StatusType";
const _SVFS = "ServerlessV2FeaturesSupport";
const _SVSC = "ServerlessV2ScalingConfiguration";
const _St = "Status";
const _Su = "Subnets";
const _Sub = "Subnet";
const _Sw = "Switchover";
const _T = "Tags";
const _TDBCPGD = "TargetDBClusterParameterGroupDescription";
const _TDBCPGI = "TargetDBClusterParameterGroupIdentifier";
const _TDBCSI = "TargetDBClusterSnapshotIdentifier";
const _TDBII = "TargetDBInstanceIdentifier";
const _TDCI = "TargetDbClusterIdentifier";
const _TK = "TagKeys";
const _TL = "TagList";
const _Ta = "Tag";
const _Th = "Thumbprint";
const _ULRT = "UseLatestRestorableTime";
const _UT = "UpgradeTarget";
const _V = "Version";
const _VF = "ValidFrom";
const _VI = "VpcId";
const _VSG = "VpcSecurityGroups";
const _VSGI = "VpcSecurityGroupIds";
const _VSGIp = "VpcSecurityGroupId";
const _VSGM = "VpcSecurityGroupMembership";
const _VT = "ValidTill";
const _VTA = "ValuesToAdd";
const _VTR = "ValuesToRemove";
const _VUT = "ValidUpgradeTarget";
const _Va = "Values";
const _Val = "Value";
const _Vp = "Vpc";
const _m = "message";
const _me = "member";

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
