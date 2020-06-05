import {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput
} from "../commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput
} from "../commands/ApplyPendingMaintenanceActionCommand";
import {
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput
} from "../commands/CopyDBClusterParameterGroupCommand";
import {
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput
} from "../commands/CopyDBClusterSnapshotCommand";
import {
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput
} from "../commands/CreateDBClusterCommand";
import {
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput
} from "../commands/CreateDBClusterParameterGroupCommand";
import {
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput
} from "../commands/CreateDBClusterSnapshotCommand";
import {
  CreateDBInstanceCommandInput,
  CreateDBInstanceCommandOutput
} from "../commands/CreateDBInstanceCommand";
import {
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput
} from "../commands/CreateDBSubnetGroupCommand";
import {
  DeleteDBClusterCommandInput,
  DeleteDBClusterCommandOutput
} from "../commands/DeleteDBClusterCommand";
import {
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput
} from "../commands/DeleteDBClusterParameterGroupCommand";
import {
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput
} from "../commands/DeleteDBClusterSnapshotCommand";
import {
  DeleteDBInstanceCommandInput,
  DeleteDBInstanceCommandOutput
} from "../commands/DeleteDBInstanceCommand";
import {
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput
} from "../commands/DeleteDBSubnetGroupCommand";
import {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput
} from "../commands/DescribeCertificatesCommand";
import {
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput
} from "../commands/DescribeDBClusterParameterGroupsCommand";
import {
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput
} from "../commands/DescribeDBClusterParametersCommand";
import {
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput
} from "../commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput
} from "../commands/DescribeDBClusterSnapshotsCommand";
import {
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput
} from "../commands/DescribeDBClustersCommand";
import {
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput
} from "../commands/DescribeDBEngineVersionsCommand";
import {
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput
} from "../commands/DescribeDBInstancesCommand";
import {
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput
} from "../commands/DescribeDBSubnetGroupsCommand";
import {
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput
} from "../commands/DescribeEngineDefaultClusterParametersCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput
} from "../commands/DescribeEventCategoriesCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "../commands/DescribeEventsCommand";
import {
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput
} from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput
} from "../commands/DescribePendingMaintenanceActionsCommand";
import {
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput
} from "../commands/FailoverDBClusterCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyDBClusterCommandInput,
  ModifyDBClusterCommandOutput
} from "../commands/ModifyDBClusterCommand";
import {
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput
} from "../commands/ModifyDBClusterParameterGroupCommand";
import {
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput
} from "../commands/ModifyDBClusterSnapshotAttributeCommand";
import {
  ModifyDBInstanceCommandInput,
  ModifyDBInstanceCommandOutput
} from "../commands/ModifyDBInstanceCommand";
import {
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput
} from "../commands/ModifyDBSubnetGroupCommand";
import {
  RebootDBInstanceCommandInput,
  RebootDBInstanceCommandOutput
} from "../commands/RebootDBInstanceCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput
} from "../commands/RemoveTagsFromResourceCommand";
import {
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput
} from "../commands/ResetDBClusterParameterGroupCommand";
import {
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput
} from "../commands/RestoreDBClusterFromSnapshotCommand";
import {
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput
} from "../commands/RestoreDBClusterToPointInTimeCommand";
import {
  StartDBClusterCommandInput,
  StartDBClusterCommandOutput
} from "../commands/StartDBClusterCommand";
import {
  StopDBClusterCommandInput,
  StopDBClusterCommandOutput
} from "../commands/StopDBClusterCommand";
import {
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResult,
  AuthorizationNotFoundFault,
  AvailabilityZone,
  Certificate,
  CertificateMessage,
  CertificateNotFoundFault,
  CloudwatchLogsExportConfiguration,
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
  DescribeCertificatesMessage,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParametersMessage,
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
  DescribeDBClusterSnapshotsMessage,
  DescribeDBClustersMessage,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstancesMessage,
  DescribeDBSubnetGroupsMessage,
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
  DescribeEventCategoriesMessage,
  DescribeEventsMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
  Endpoint,
  EngineDefaults,
  Event,
  EventCategoriesMap,
  EventCategoriesMessage,
  EventsMessage,
  FailoverDBClusterMessage,
  FailoverDBClusterResult,
  Filter,
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
  OrderableDBInstanceOption,
  OrderableDBInstanceOptionsMessage,
  Parameter,
  PendingCloudwatchLogsExports,
  PendingMaintenanceAction,
  PendingMaintenanceActionsMessage,
  PendingModifiedValues,
  RebootDBInstanceMessage,
  RebootDBInstanceResult,
  RemoveTagsFromResourceMessage,
  ResetDBClusterParameterGroupMessage,
  ResourceNotFoundFault,
  ResourcePendingMaintenanceActions,
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterFromSnapshotResult,
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBClusterToPointInTimeResult,
  SharedSnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault,
  StartDBClusterMessage,
  StartDBClusterResult,
  StopDBClusterMessage,
  StopDBClusterResult,
  StorageQuotaExceededFault,
  StorageTypeNotSupportedFault,
  Subnet,
  SubnetAlreadyInUse,
  Tag,
  TagListMessage,
  UpgradeTarget,
  VpcSecurityGroupMembership
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryAddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddTagsToResourceMessage(input, context),
    Action: "AddTagsToResource",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryApplyPendingMaintenanceActionCommand = async (
  input: ApplyPendingMaintenanceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryApplyPendingMaintenanceActionMessage(input, context),
    Action: "ApplyPendingMaintenanceAction",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopyDBClusterParameterGroupCommand = async (
  input: CopyDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyDBClusterParameterGroupMessage(input, context),
    Action: "CopyDBClusterParameterGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopyDBClusterSnapshotCommand = async (
  input: CopyDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyDBClusterSnapshotMessage(input, context),
    Action: "CopyDBClusterSnapshot",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBClusterCommand = async (
  input: CreateDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBClusterMessage(input, context),
    Action: "CreateDBCluster",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBClusterParameterGroupCommand = async (
  input: CreateDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBClusterParameterGroupMessage(input, context),
    Action: "CreateDBClusterParameterGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBClusterSnapshotCommand = async (
  input: CreateDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBClusterSnapshotMessage(input, context),
    Action: "CreateDBClusterSnapshot",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBInstanceCommand = async (
  input: CreateDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBInstanceMessage(input, context),
    Action: "CreateDBInstance",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBSubnetGroupCommand = async (
  input: CreateDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBSubnetGroupMessage(input, context),
    Action: "CreateDBSubnetGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBClusterCommand = async (
  input: DeleteDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBClusterMessage(input, context),
    Action: "DeleteDBCluster",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBClusterParameterGroupCommand = async (
  input: DeleteDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBClusterParameterGroupMessage(input, context),
    Action: "DeleteDBClusterParameterGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBClusterSnapshotCommand = async (
  input: DeleteDBClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBClusterSnapshotMessage(input, context),
    Action: "DeleteDBClusterSnapshot",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBInstanceCommand = async (
  input: DeleteDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBInstanceMessage(input, context),
    Action: "DeleteDBInstance",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBSubnetGroupCommand = async (
  input: DeleteDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBSubnetGroupMessage(input, context),
    Action: "DeleteDBSubnetGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCertificatesCommand = async (
  input: DescribeCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCertificatesMessage(input, context),
    Action: "DescribeCertificates",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterParameterGroupsCommand = async (
  input: DescribeDBClusterParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterParameterGroupsMessage(
      input,
      context
    ),
    Action: "DescribeDBClusterParameterGroups",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterParametersCommand = async (
  input: DescribeDBClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterParametersMessage(input, context),
    Action: "DescribeDBClusterParameters",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClustersCommand = async (
  input: DescribeDBClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClustersMessage(input, context),
    Action: "DescribeDBClusters",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = async (
  input: DescribeDBClusterSnapshotAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterSnapshotAttributesMessage(
      input,
      context
    ),
    Action: "DescribeDBClusterSnapshotAttributes",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterSnapshotsCommand = async (
  input: DescribeDBClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterSnapshotsMessage(input, context),
    Action: "DescribeDBClusterSnapshots",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBEngineVersionsCommand = async (
  input: DescribeDBEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBEngineVersionsMessage(input, context),
    Action: "DescribeDBEngineVersions",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBInstancesCommand = async (
  input: DescribeDBInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBInstancesMessage(input, context),
    Action: "DescribeDBInstances",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBSubnetGroupsCommand = async (
  input: DescribeDBSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBSubnetGroupsMessage(input, context),
    Action: "DescribeDBSubnetGroups",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEngineDefaultClusterParametersCommand = async (
  input: DescribeEngineDefaultClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEngineDefaultClusterParametersMessage(
      input,
      context
    ),
    Action: "DescribeEngineDefaultClusterParameters",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventCategoriesCommand = async (
  input: DescribeEventCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventCategoriesMessage(input, context),
    Action: "DescribeEventCategories",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventsMessage(input, context),
    Action: "DescribeEvents",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = async (
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeOrderableDBInstanceOptionsMessage(
      input,
      context
    ),
    Action: "DescribeOrderableDBInstanceOptions",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribePendingMaintenanceActionsCommand = async (
  input: DescribePendingMaintenanceActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePendingMaintenanceActionsMessage(
      input,
      context
    ),
    Action: "DescribePendingMaintenanceActions",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryFailoverDBClusterCommand = async (
  input: FailoverDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryFailoverDBClusterMessage(input, context),
    Action: "FailoverDBCluster",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTagsForResourceMessage(input, context),
    Action: "ListTagsForResource",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBClusterCommand = async (
  input: ModifyDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBClusterMessage(input, context),
    Action: "ModifyDBCluster",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBClusterParameterGroupCommand = async (
  input: ModifyDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBClusterParameterGroupMessage(input, context),
    Action: "ModifyDBClusterParameterGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBClusterSnapshotAttributeCommand = async (
  input: ModifyDBClusterSnapshotAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBClusterSnapshotAttributeMessage(
      input,
      context
    ),
    Action: "ModifyDBClusterSnapshotAttribute",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBInstanceCommand = async (
  input: ModifyDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBInstanceMessage(input, context),
    Action: "ModifyDBInstance",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBSubnetGroupCommand = async (
  input: ModifyDBSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBSubnetGroupMessage(input, context),
    Action: "ModifyDBSubnetGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRebootDBInstanceCommand = async (
  input: RebootDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRebootDBInstanceMessage(input, context),
    Action: "RebootDBInstance",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveTagsFromResourceMessage(input, context),
    Action: "RemoveTagsFromResource",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResetDBClusterParameterGroupCommand = async (
  input: ResetDBClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResetDBClusterParameterGroupMessage(input, context),
    Action: "ResetDBClusterParameterGroup",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreDBClusterFromSnapshotCommand = async (
  input: RestoreDBClusterFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBClusterFromSnapshotMessage(input, context),
    Action: "RestoreDBClusterFromSnapshot",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreDBClusterToPointInTimeCommand = async (
  input: RestoreDBClusterToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBClusterToPointInTimeMessage(input, context),
    Action: "RestoreDBClusterToPointInTime",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartDBClusterCommand = async (
  input: StartDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartDBClusterMessage(input, context),
    Action: "StartDBCluster",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStopDBClusterCommand = async (
  input: StopDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopDBClusterMessage(input, context),
    Action: "StopDBCluster",
    Version: "2014-10-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddTagsToResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryApplyPendingMaintenanceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryApplyPendingMaintenanceActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplyPendingMaintenanceActionResult(
    data.ApplyPendingMaintenanceActionResult,
    context
  );
  const response: ApplyPendingMaintenanceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplyPendingMaintenanceActionResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryApplyPendingMaintenanceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundFault":
    case "com.amazonaws.docdb#ResourceNotFoundFault":
      response = {
        ...(await deserializeAws_queryResourceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryCopyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCopyDBClusterParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyDBClusterParameterGroupResult(
    data.CopyDBClusterParameterGroupResult,
    context
  );
  const response: CopyDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyDBClusterParameterGroupResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupAlreadyExistsFault":
    case "com.amazonaws.docdb#DBParameterGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBParameterGroupQuotaExceededFault":
    case "com.amazonaws.docdb#DBParameterGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryCopyDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCopyDBClusterSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyDBClusterSnapshotResult(
    data.CopyDBClusterSnapshotResult,
    context
  );
  const response: CopyDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyDBClusterSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyDBClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterSnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.docdb#KMSKeyNotAccessibleFault":
      response = {
        ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.docdb#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryCreateDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBClusterResult(
    data.CreateDBClusterResult,
    context
  );
  const response: CreateDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDBClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBClusterParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.docdb#DBClusterQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.docdb#DBSubnetGroupDoesNotCoverEnoughAZs":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientStorageClusterCapacityFault":
    case "com.amazonaws.docdb#InsufficientStorageClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBSubnetGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.docdb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.docdb#KMSKeyNotAccessibleFault":
      response = {
        ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageQuotaExceededFault":
    case "com.amazonaws.docdb#StorageQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryCreateDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateDBClusterParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBClusterParameterGroupResult(
    data.CreateDBClusterParameterGroupResult,
    context
  );
  const response: CreateDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDBClusterParameterGroupResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupAlreadyExistsFault":
    case "com.amazonaws.docdb#DBParameterGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBParameterGroupQuotaExceededFault":
    case "com.amazonaws.docdb#DBParameterGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryCreateDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateDBClusterSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBClusterSnapshotResult(
    data.CreateDBClusterSnapshotResult,
    context
  );
  const response: CreateDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDBClusterSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterSnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.docdb#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryCreateDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBInstanceResult(
    data.CreateDBInstanceResult,
    context
  );
  const response: CreateDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDBInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFoundFault":
    case "com.amazonaws.docdb#AuthorizationNotFoundFault":
      response = {
        ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBInstanceAlreadyExistsFault":
    case "com.amazonaws.docdb#DBInstanceAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSecurityGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.docdb#DBSubnetGroupDoesNotCoverEnoughAZs":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceQuotaExceededFault":
    case "com.amazonaws.docdb#InstanceQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryInstanceQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientDBInstanceCapacityFault":
    case "com.amazonaws.docdb#InsufficientDBInstanceCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.docdb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.docdb#KMSKeyNotAccessibleFault":
      response = {
        ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageQuotaExceededFault":
    case "com.amazonaws.docdb#StorageQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageTypeNotSupportedFault":
    case "com.amazonaws.docdb#StorageTypeNotSupportedFault":
      response = {
        ...(await deserializeAws_queryStorageTypeNotSupportedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryCreateDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateDBSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBSubnetGroupResult(
    data.CreateDBSubnetGroupResult,
    context
  );
  const response: CreateDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDBSubnetGroupResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupAlreadyExistsFault":
    case "com.amazonaws.docdb#DBSubnetGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.docdb#DBSubnetGroupDoesNotCoverEnoughAZs":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupQuotaExceededFault":
    case "com.amazonaws.docdb#DBSubnetGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.docdb#DBSubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDeleteDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBClusterResult(
    data.DeleteDBClusterResult,
    context
  );
  const response: DeleteDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDBClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterSnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.docdb#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDeleteDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteDBClusterParameterGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBParameterGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBParameterGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDeleteDBClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteDBClusterSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBClusterSnapshotResult(
    data.DeleteDBClusterSnapshotResult,
    context
  );
  const response: DeleteDBClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDBClusterSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDeleteDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBInstanceResult(
    data.DeleteDBInstanceResult,
    context
  );
  const response: DeleteDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDBInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSnapshotAlreadyExistsFault":
    case "com.amazonaws.docdb#DBSnapshotAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SnapshotQuotaExceededFault":
    case "com.amazonaws.docdb#SnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDeleteDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteDBSubnetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBSubnetGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSubnetStateFault":
    case "com.amazonaws.docdb#InvalidDBSubnetStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSubnetStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeCertificatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCertificateMessage(
    data.DescribeCertificatesResult,
    context
  );
  const response: DescribeCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CertificateMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFoundFault":
    case "com.amazonaws.docdb#CertificateNotFoundFault":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeDBClusterParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBClusterParameterGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupsMessage(
    data.DescribeDBClusterParameterGroupsResult,
    context
  );
  const response: DescribeDBClusterParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBClusterParameterGroupsMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeDBClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParametersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBClusterParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupDetails(
    data.DescribeDBClusterParametersResult,
    context
  );
  const response: DescribeDBClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBClusterParameterGroupDetails",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeDBClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClustersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterMessage(
    data.DescribeDBClustersResult,
    context
  );
  const response: DescribeDBClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBClusterMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBClusterSnapshotAttributesResult(
    data.DescribeDBClusterSnapshotAttributesResult,
    context
  );
  const response: DescribeDBClusterSnapshotAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDBClusterSnapshotAttributesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeDBClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBClusterSnapshotsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterSnapshotMessage(
    data.DescribeDBClusterSnapshotsResult,
    context
  );
  const response: DescribeDBClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBClusterSnapshotMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeDBEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBEngineVersionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBEngineVersionMessage(
    data.DescribeDBEngineVersionsResult,
    context
  );
  const response: DescribeDBEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBEngineVersionMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
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
};

export const deserializeAws_queryDescribeDBInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstancesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBInstanceMessage(
    data.DescribeDBInstancesResult,
    context
  );
  const response: DescribeDBInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBInstanceMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeDBSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDBSubnetGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBSubnetGroupMessage(
    data.DescribeDBSubnetGroupsResult,
    context
  );
  const response: DescribeDBSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBSubnetGroupMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultClusterParametersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEngineDefaultClusterParametersResult(
    data.DescribeEngineDefaultClusterParametersResult,
    context
  );
  const response: DescribeEngineDefaultClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEngineDefaultClusterParametersResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngineDefaultClusterParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
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
};

export const deserializeAws_queryDescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEventCategoriesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventCategoriesMessage(
    data.DescribeEventCategoriesResult,
    context
  );
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EventCategoriesMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
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
};

export const deserializeAws_queryDescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
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
};

const deserializeAws_queryDescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
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
};

export const deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryOrderableDBInstanceOptionsMessage(
    data.DescribeOrderableDBInstanceOptionsResult,
    context
  );
  const response: DescribeOrderableDBInstanceOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "OrderableDBInstanceOptionsMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
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
};

export const deserializeAws_queryDescribePendingMaintenanceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribePendingMaintenanceActionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPendingMaintenanceActionsMessage(
    data.DescribePendingMaintenanceActionsResult,
    context
  );
  const response: DescribePendingMaintenanceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PendingMaintenanceActionsMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribePendingMaintenanceActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.docdb#ResourceNotFoundFault":
      response = {
        ...(await deserializeAws_queryResourceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryFailoverDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverDBClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryFailoverDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryFailoverDBClusterResult(
    data.FailoverDBClusterResult,
    context
  );
  const response: FailoverDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FailoverDBClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryFailoverDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
};

const deserializeAws_queryListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryModifyDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBClusterResult(
    data.ModifyDBClusterResult,
    context
  );
  const response: ModifyDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyDBClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBClusterParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSecurityGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBSecurityGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBSubnetGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.docdb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageQuotaExceededFault":
    case "com.amazonaws.docdb#StorageQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryModifyDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyDBClusterParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupNameMessage(
    data.ModifyDBClusterParameterGroupResult,
    context
  );
  const response: ModifyDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBClusterParameterGroupNameMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBParameterGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBParameterGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBClusterSnapshotAttributeResult(
    data.ModifyDBClusterSnapshotAttributeResult,
    context
  );
  const response: ModifyDBClusterSnapshotAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyDBClusterSnapshotAttributeResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SharedSnapshotQuotaExceededFault":
    case "com.amazonaws.docdb#SharedSnapshotQuotaExceededFault":
      response = {
        ...(await deserializeAws_querySharedSnapshotQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryModifyDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBInstanceResult(
    data.ModifyDBInstanceResult,
    context
  );
  const response: ModifyDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyDBInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFoundFault":
    case "com.amazonaws.docdb#AuthorizationNotFoundFault":
      response = {
        ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CertificateNotFoundFault":
    case "com.amazonaws.docdb#CertificateNotFoundFault":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBInstanceAlreadyExistsFault":
    case "com.amazonaws.docdb#DBInstanceAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSecurityGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSecurityGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBUpgradeDependencyFailureFault":
    case "com.amazonaws.docdb#DBUpgradeDependencyFailureFault":
      response = {
        ...(await deserializeAws_queryDBUpgradeDependencyFailureFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientDBInstanceCapacityFault":
    case "com.amazonaws.docdb#InsufficientDBInstanceCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSecurityGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBSecurityGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.docdb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageQuotaExceededFault":
    case "com.amazonaws.docdb#StorageQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageTypeNotSupportedFault":
    case "com.amazonaws.docdb#StorageTypeNotSupportedFault":
      response = {
        ...(await deserializeAws_queryStorageTypeNotSupportedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryModifyDBSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSubnetGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyDBSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBSubnetGroupResult(
    data.ModifyDBSubnetGroupResult,
    context
  );
  const response: ModifyDBSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyDBSubnetGroupResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.docdb#DBSubnetGroupDoesNotCoverEnoughAZs":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.docdb#DBSubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetAlreadyInUse":
    case "com.amazonaws.docdb#SubnetAlreadyInUse":
      response = {
        ...(await deserializeAws_querySubnetAlreadyInUseResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryRebootDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRebootDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRebootDBInstanceResult(
    data.RebootDBInstanceResult,
    context
  );
  const response: RebootDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootDBInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRebootDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryRemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveTagsFromResourceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBInstanceNotFoundFault":
    case "com.amazonaws.docdb#DBInstanceNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryResetDBClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryResetDBClusterParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterParameterGroupNameMessage(
    data.ResetDBClusterParameterGroupResult,
    context
  );
  const response: ResetDBClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DBClusterParameterGroupNameMessage",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResetDBClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBParameterGroupNotFoundFault":
    case "com.amazonaws.docdb#DBParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBParameterGroupStateFault":
    case "com.amazonaws.docdb#InvalidDBParameterGroupStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryRestoreDBClusterFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRestoreDBClusterFromSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBClusterFromSnapshotResult(
    data.RestoreDBClusterFromSnapshotResult,
    context
  );
  const response: RestoreDBClusterFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreDBClusterFromSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBClusterFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.docdb#DBClusterQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.docdb#InsufficientDBClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientStorageClusterCapacityFault":
    case "com.amazonaws.docdb#InsufficientStorageClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRestoreFault":
    case "com.amazonaws.docdb#InvalidRestoreFault":
      response = {
        ...(await deserializeAws_queryInvalidRestoreFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.docdb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.docdb#KMSKeyNotAccessibleFault":
      response = {
        ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageQuotaExceededFault":
    case "com.amazonaws.docdb#StorageQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryRestoreDBClusterToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterToPointInTimeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRestoreDBClusterToPointInTimeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBClusterToPointInTimeResult(
    data.RestoreDBClusterToPointInTimeResult,
    context
  );
  const response: RestoreDBClusterToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreDBClusterToPointInTimeResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBClusterToPointInTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterToPointInTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.docdb#DBClusterAlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.docdb#DBClusterQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.docdb#DBSubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.docdb#InsufficientDBClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientStorageClusterCapacityFault":
    case "com.amazonaws.docdb#InsufficientStorageClusterCapacityFault":
      response = {
        ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBSnapshotStateFault":
    case "com.amazonaws.docdb#InvalidDBSnapshotStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRestoreFault":
    case "com.amazonaws.docdb#InvalidRestoreFault":
      response = {
        ...(await deserializeAws_queryInvalidRestoreFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnet":
    case "com.amazonaws.docdb#InvalidSubnet":
      response = {
        ...(await deserializeAws_queryInvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.docdb#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.docdb#KMSKeyNotAccessibleFault":
      response = {
        ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageQuotaExceededFault":
    case "com.amazonaws.docdb#StorageQuotaExceededFault":
      response = {
        ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryStartDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryStartDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartDBClusterResult(
    data.StartDBClusterResult,
    context
  );
  const response: StartDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDBClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_queryStopDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryStopDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopDBClusterResult(
    data.StopDBClusterResult,
    context
  );
  const response: StopDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDBClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStopDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.docdb#DBClusterNotFoundFault":
      response = {
        ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.docdb#InvalidDBClusterStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDBInstanceStateFault":
    case "com.amazonaws.docdb#InvalidDBInstanceStateFault":
      response = {
        ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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

const deserializeAws_queryCertificateNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCertificateNotFoundFault(
    body.Error,
    context
  );
  const contents: CertificateNotFoundFault = {
    name: "CertificateNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: DBClusterAlreadyExistsFault = {
    name: "DBClusterAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterNotFoundFault(
    body.Error,
    context
  );
  const contents: DBClusterNotFoundFault = {
    name: "DBClusterNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterParameterGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: DBClusterParameterGroupNotFoundFault = {
    name: "DBClusterParameterGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBClusterQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterQuotaExceededFault(
    body.Error,
    context
  );
  const contents: DBClusterQuotaExceededFault = {
    name: "DBClusterQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterSnapshotAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: DBClusterSnapshotAlreadyExistsFault = {
    name: "DBClusterSnapshotAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterSnapshotNotFoundFault(
    body.Error,
    context
  );
  const contents: DBClusterSnapshotNotFoundFault = {
    name: "DBClusterSnapshotNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBInstanceAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: DBInstanceAlreadyExistsFault = {
    name: "DBInstanceAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBInstanceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceNotFoundFault(
    body.Error,
    context
  );
  const contents: DBInstanceNotFoundFault = {
    name: "DBInstanceNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBParameterGroupAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: DBParameterGroupAlreadyExistsFault = {
    name: "DBParameterGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBParameterGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: DBParameterGroupNotFoundFault = {
    name: "DBParameterGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBParameterGroupQuotaExceededFault(
    body.Error,
    context
  );
  const contents: DBParameterGroupQuotaExceededFault = {
    name: "DBParameterGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSecurityGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSecurityGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: DBSecurityGroupNotFoundFault = {
    name: "DBSecurityGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSnapshotAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: DBSnapshotAlreadyExistsFault = {
    name: "DBSnapshotAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSnapshotNotFoundFault(
    body.Error,
    context
  );
  const contents: DBSnapshotNotFoundFault = {
    name: "DBSnapshotNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: DBSubnetGroupAlreadyExistsFault = {
    name: "DBSubnetGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupDoesNotCoverEnoughAZs> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs(
    body.Error,
    context
  );
  const contents: DBSubnetGroupDoesNotCoverEnoughAZs = {
    name: "DBSubnetGroupDoesNotCoverEnoughAZs",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupNotFoundFault(
    body.Error,
    context
  );
  const contents: DBSubnetGroupNotFoundFault = {
    name: "DBSubnetGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupQuotaExceededFault(
    body.Error,
    context
  );
  const contents: DBSubnetGroupQuotaExceededFault = {
    name: "DBSubnetGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBSubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetQuotaExceededFault(
    body.Error,
    context
  );
  const contents: DBSubnetQuotaExceededFault = {
    name: "DBSubnetQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDBUpgradeDependencyFailureFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBUpgradeDependencyFailureFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBUpgradeDependencyFailureFault(
    body.Error,
    context
  );
  const contents: DBUpgradeDependencyFailureFault = {
    name: "DBUpgradeDependencyFailureFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInstanceQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInstanceQuotaExceededFault(
    body.Error,
    context
  );
  const contents: InstanceQuotaExceededFault = {
    name: "InstanceQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInsufficientDBClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDBClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientDBClusterCapacityFault(
    body.Error,
    context
  );
  const contents: InsufficientDBClusterCapacityFault = {
    name: "InsufficientDBClusterCapacityFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDBInstanceCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientDBInstanceCapacityFault(
    body.Error,
    context
  );
  const contents: InsufficientDBInstanceCapacityFault = {
    name: "InsufficientDBInstanceCapacityFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientStorageClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientStorageClusterCapacityFault(
    body.Error,
    context
  );
  const contents: InsufficientStorageClusterCapacityFault = {
    name: "InsufficientStorageClusterCapacityFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBClusterSnapshotStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBClusterSnapshotStateFault = {
    name: "InvalidDBClusterSnapshotStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBClusterStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBClusterStateFault = {
    name: "InvalidDBClusterStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBInstanceStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBInstanceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBInstanceStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBInstanceStateFault = {
    name: "InvalidDBInstanceStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBParameterGroupStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBParameterGroupStateFault = {
    name: "InvalidDBParameterGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSecurityGroupStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBSecurityGroupStateFault = {
    name: "InvalidDBSecurityGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSnapshotStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBSnapshotStateFault = {
    name: "InvalidDBSnapshotStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSubnetGroupStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBSubnetGroupStateFault = {
    name: "InvalidDBSubnetGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidDBSubnetStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSubnetStateFault(
    body.Error,
    context
  );
  const contents: InvalidDBSubnetStateFault = {
    name: "InvalidDBSubnetStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidRestoreFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRestoreFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidRestoreFault(
    body.Error,
    context
  );
  const contents: InvalidRestoreFault = {
    name: "InvalidRestoreFault",
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

const deserializeAws_queryKMSKeyNotAccessibleFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSKeyNotAccessibleFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSKeyNotAccessibleFault(
    body.Error,
    context
  );
  const contents: KMSKeyNotAccessibleFault = {
    name: "KMSKeyNotAccessibleFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundFault(
    body.Error,
    context
  );
  const contents: ResourceNotFoundFault = {
    name: "ResourceNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySharedSnapshotQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SharedSnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySharedSnapshotQuotaExceededFault(
    body.Error,
    context
  );
  const contents: SharedSnapshotQuotaExceededFault = {
    name: "SharedSnapshotQuotaExceededFault",
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

const deserializeAws_queryStorageQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStorageQuotaExceededFault(
    body.Error,
    context
  );
  const contents: StorageQuotaExceededFault = {
    name: "StorageQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryStorageTypeNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageTypeNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStorageTypeNotSupportedFault(
    body.Error,
    context
  );
  const contents: StorageTypeNotSupportedFault = {
    name: "StorageTypeNotSupportedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySubnetAlreadyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetAlreadyInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetAlreadyInUse(
    body.Error,
    context
  );
  const contents: SubnetAlreadyInUse = {
    name: "SubnetAlreadyInUse",
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
  if (input.ApplyAction !== undefined) {
    entries["ApplyAction"] = input.ApplyAction;
  }
  if (input.OptInType !== undefined) {
    entries["OptInType"] = input.OptInType;
  }
  if (input.ResourceIdentifier !== undefined) {
    entries["ResourceIdentifier"] = input.ResourceIdentifier;
  }
  return entries;
};

const serializeAws_queryAttributeValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`AttributeValue.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAvailabilityZones = (
  input: string[],
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

const serializeAws_queryCloudwatchLogsExportConfiguration = (
  input: CloudwatchLogsExportConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DisableLogTypes !== undefined) {
    const memberEntries = serializeAws_queryLogTypeList(
      input.DisableLogTypes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DisableLogTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EnableLogTypes !== undefined) {
    const memberEntries = serializeAws_queryLogTypeList(
      input.EnableLogTypes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableLogTypes.${key}`;
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
  if (input.SourceDBClusterParameterGroupIdentifier !== undefined) {
    entries["SourceDBClusterParameterGroupIdentifier"] =
      input.SourceDBClusterParameterGroupIdentifier;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetDBClusterParameterGroupDescription !== undefined) {
    entries["TargetDBClusterParameterGroupDescription"] =
      input.TargetDBClusterParameterGroupDescription;
  }
  if (input.TargetDBClusterParameterGroupIdentifier !== undefined) {
    entries["TargetDBClusterParameterGroupIdentifier"] =
      input.TargetDBClusterParameterGroupIdentifier;
  }
  return entries;
};

const serializeAws_queryCopyDBClusterSnapshotMessage = (
  input: CopyDBClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CopyTags !== undefined) {
    entries["CopyTags"] = input.CopyTags;
  }
  if (input.KmsKeyId !== undefined) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.PreSignedUrl !== undefined) {
    entries["PreSignedUrl"] = input.PreSignedUrl;
  }
  if (input.SourceDBClusterSnapshotIdentifier !== undefined) {
    entries["SourceDBClusterSnapshotIdentifier"] =
      input.SourceDBClusterSnapshotIdentifier;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetDBClusterSnapshotIdentifier !== undefined) {
    entries["TargetDBClusterSnapshotIdentifier"] =
      input.TargetDBClusterSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryCreateDBClusterMessage = (
  input: CreateDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZones(
      input.AvailabilityZones,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BackupRetentionPeriod !== undefined) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.DBSubnetGroupName !== undefined) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DeletionProtection !== undefined) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.EnableCloudwatchLogsExports !== undefined) {
    const memberEntries = serializeAws_queryLogTypeList(
      input.EnableCloudwatchLogsExports,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
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
  if (input.MasterUserPassword !== undefined) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.MasterUsername !== undefined) {
    entries["MasterUsername"] = input.MasterUsername;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.PreferredBackupWindow !== undefined) {
    entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.StorageEncrypted !== undefined) {
    entries["StorageEncrypted"] = input.StorageEncrypted;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(
      input.VpcSecurityGroupIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateDBClusterParameterGroupMessage = (
  input: CreateDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.DBParameterGroupFamily !== undefined) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterSnapshotIdentifier !== undefined) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateDBInstanceMessage = (
  input: CreateDBInstanceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoMinorVersionUpgrade !== undefined) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.AvailabilityZone !== undefined) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBInstanceClass !== undefined) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.DBInstanceIdentifier !== undefined) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.Engine !== undefined) {
    entries["Engine"] = input.Engine;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.PromotionTier !== undefined) {
    entries["PromotionTier"] = input.PromotionTier;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
  if (input.DBSubnetGroupDescription !== undefined) {
    entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
  }
  if (input.DBSubnetGroupName !== undefined) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.SubnetIds !== undefined) {
    const memberEntries = serializeAws_querySubnetIdentifierList(
      input.SubnetIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteDBClusterMessage = (
  input: DeleteDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.FinalDBSnapshotIdentifier !== undefined) {
    entries["FinalDBSnapshotIdentifier"] = input.FinalDBSnapshotIdentifier;
  }
  if (input.SkipFinalSnapshot !== undefined) {
    entries["SkipFinalSnapshot"] = input.SkipFinalSnapshot;
  }
  return entries;
};

const serializeAws_queryDeleteDBClusterParameterGroupMessage = (
  input: DeleteDBClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteDBClusterSnapshotMessage = (
  input: DeleteDBClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier !== undefined) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteDBInstanceMessage = (
  input: DeleteDBInstanceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier !== undefined) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteDBSubnetGroupMessage = (
  input: DeleteDBSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName !== undefined) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  return entries;
};

const serializeAws_queryDescribeCertificatesMessage = (
  input: DescribeCertificatesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateIdentifier !== undefined) {
    entries["CertificateIdentifier"] = input.CertificateIdentifier;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeDBClusterParameterGroupsMessage = (
  input: DescribeDBClusterParameterGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeDBClusterParametersMessage = (
  input: DescribeDBClusterParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
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

const serializeAws_queryDescribeDBClustersMessage = (
  input: DescribeDBClustersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeDBClusterSnapshotAttributesMessage = (
  input: DescribeDBClusterSnapshotAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterSnapshotIdentifier !== undefined) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryDescribeDBClusterSnapshotsMessage = (
  input: DescribeDBClusterSnapshotsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterSnapshotIdentifier !== undefined) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IncludePublic !== undefined) {
    entries["IncludePublic"] = input.IncludePublic;
  }
  if (input.IncludeShared !== undefined) {
    entries["IncludeShared"] = input.IncludeShared;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.SnapshotType !== undefined) {
    entries["SnapshotType"] = input.SnapshotType;
  }
  return entries;
};

const serializeAws_queryDescribeDBEngineVersionsMessage = (
  input: DescribeDBEngineVersionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupFamily !== undefined) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ListSupportedCharacterSets !== undefined) {
    entries["ListSupportedCharacterSets"] = input.ListSupportedCharacterSets;
  }
  if (input.ListSupportedTimezones !== undefined) {
    entries["ListSupportedTimezones"] = input.ListSupportedTimezones;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeDBInstancesMessage = (
  input: DescribeDBInstancesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier !== undefined) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeDBSubnetGroupsMessage = (
  input: DescribeDBSubnetGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSubnetGroupName !== undefined) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeEngineDefaultClusterParametersMessage = (
  input: DescribeEngineDefaultClusterParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBParameterGroupFamily !== undefined) {
    entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeEventCategoriesMessage = (
  input: DescribeEventCategoriesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceType !== undefined) {
    entries["SourceType"] = input.SourceType;
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
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EventCategories !== undefined) {
    const memberEntries = serializeAws_queryEventCategoriesList(
      input.EventCategories,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
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
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryDescribeOrderableDBInstanceOptionsMessage = (
  input: DescribeOrderableDBInstanceOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceClass !== undefined) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.Engine !== undefined) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion !== undefined) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LicenseModel !== undefined) {
    entries["LicenseModel"] = input.LicenseModel;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Vpc !== undefined) {
    entries["Vpc"] = input.Vpc;
  }
  return entries;
};

const serializeAws_queryDescribePendingMaintenanceActionsMessage = (
  input: DescribePendingMaintenanceActionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.ResourceIdentifier !== undefined) {
    entries["ResourceIdentifier"] = input.ResourceIdentifier;
  }
  return entries;
};

const serializeAws_queryEventCategoriesList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`EventCategory.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryFailoverDBClusterMessage = (
  input: FailoverDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.TargetDBInstanceIdentifier !== undefined) {
    entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
  }
  return entries;
};

const serializeAws_queryFilter = (
  input: Filter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryFilterValueList(
      input.Values,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryFilterList = (
  input: Filter[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Filter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryFilterValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`Value.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryKeyList = (
  input: string[],
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

const serializeAws_queryListTagsForResourceMessage = (
  input: ListTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilterList(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceName !== undefined) {
    entries["ResourceName"] = input.ResourceName;
  }
  return entries;
};

const serializeAws_queryLogTypeList = (
  input: string[],
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

const serializeAws_queryModifyDBClusterMessage = (
  input: ModifyDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplyImmediately !== undefined) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.BackupRetentionPeriod !== undefined) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.CloudwatchLogsExportConfiguration !== undefined) {
    const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(
      input.CloudwatchLogsExportConfiguration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudwatchLogsExportConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.DeletionProtection !== undefined) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.EngineVersion !== undefined) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.MasterUserPassword !== undefined) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.NewDBClusterIdentifier !== undefined) {
    entries["NewDBClusterIdentifier"] = input.NewDBClusterIdentifier;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.PreferredBackupWindow !== undefined) {
    entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.VpcSecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(
      input.VpcSecurityGroupIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParametersList(
      input.Parameters,
      context
    );
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
  if (input.AttributeName !== undefined) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.DBClusterSnapshotIdentifier !== undefined) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.ValuesToAdd !== undefined) {
    const memberEntries = serializeAws_queryAttributeValueList(
      input.ValuesToAdd,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ValuesToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ValuesToRemove !== undefined) {
    const memberEntries = serializeAws_queryAttributeValueList(
      input.ValuesToRemove,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ValuesToRemove.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyDBInstanceMessage = (
  input: ModifyDBInstanceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplyImmediately !== undefined) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.AutoMinorVersionUpgrade !== undefined) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.CACertificateIdentifier !== undefined) {
    entries["CACertificateIdentifier"] = input.CACertificateIdentifier;
  }
  if (input.DBInstanceClass !== undefined) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.DBInstanceIdentifier !== undefined) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.NewDBInstanceIdentifier !== undefined) {
    entries["NewDBInstanceIdentifier"] = input.NewDBInstanceIdentifier;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.PromotionTier !== undefined) {
    entries["PromotionTier"] = input.PromotionTier;
  }
  return entries;
};

const serializeAws_queryModifyDBSubnetGroupMessage = (
  input: ModifyDBSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSubnetGroupDescription !== undefined) {
    entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
  }
  if (input.DBSubnetGroupName !== undefined) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.SubnetIds !== undefined) {
    const memberEntries = serializeAws_querySubnetIdentifierList(
      input.SubnetIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryParameter = (
  input: Parameter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AllowedValues !== undefined) {
    entries["AllowedValues"] = input.AllowedValues;
  }
  if (input.ApplyMethod !== undefined) {
    entries["ApplyMethod"] = input.ApplyMethod;
  }
  if (input.ApplyType !== undefined) {
    entries["ApplyType"] = input.ApplyType;
  }
  if (input.DataType !== undefined) {
    entries["DataType"] = input.DataType;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.IsModifiable !== undefined) {
    entries["IsModifiable"] = input.IsModifiable;
  }
  if (input.MinimumEngineVersion !== undefined) {
    entries["MinimumEngineVersion"] = input.MinimumEngineVersion;
  }
  if (input.ParameterName !== undefined) {
    entries["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue !== undefined) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.Source !== undefined) {
    entries["Source"] = input.Source;
  }
  return entries;
};

const serializeAws_queryParametersList = (
  input: Parameter[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryParameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Parameter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRebootDBInstanceMessage = (
  input: RebootDBInstanceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier !== undefined) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.ForceFailover !== undefined) {
    entries["ForceFailover"] = input.ForceFailover;
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
  if (input.DBClusterParameterGroupName !== undefined) {
    entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
  }
  if (input.Parameters !== undefined) {
    const memberEntries = serializeAws_queryParametersList(
      input.Parameters,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResetAllParameters !== undefined) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  return entries;
};

const serializeAws_queryRestoreDBClusterFromSnapshotMessage = (
  input: RestoreDBClusterFromSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZones(
      input.AvailabilityZones,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBSubnetGroupName !== undefined) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DeletionProtection !== undefined) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.EnableCloudwatchLogsExports !== undefined) {
    const memberEntries = serializeAws_queryLogTypeList(
      input.EnableCloudwatchLogsExports,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
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
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.SnapshotIdentifier !== undefined) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(
      input.VpcSecurityGroupIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
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
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.DBSubnetGroupName !== undefined) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.DeletionProtection !== undefined) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.EnableCloudwatchLogsExports !== undefined) {
    const memberEntries = serializeAws_queryLogTypeList(
      input.EnableCloudwatchLogsExports,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.KmsKeyId !== undefined) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.RestoreToTime !== undefined) {
    entries["RestoreToTime"] =
      input.RestoreToTime.toISOString().split(".")[0] + "Z";
  }
  if (input.SourceDBClusterIdentifier !== undefined) {
    entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UseLatestRestorableTime !== undefined) {
    entries["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
  }
  if (input.VpcSecurityGroupIds !== undefined) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(
      input.VpcSecurityGroupIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryStartDBClusterMessage = (
  input: StartDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryStopDBClusterMessage = (
  input: StopDBClusterMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier !== undefined) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

const serializeAws_querySubnetIdentifierList = (
  input: string[],
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
  input: Tag[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Tag.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryVpcSecurityGroupIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`VpcSecurityGroupId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const deserializeAws_queryApplyPendingMaintenanceActionResult = (
  output: any,
  context: __SerdeContext
): ApplyPendingMaintenanceActionResult => {
  let contents: any = {
    __type: "ApplyPendingMaintenanceActionResult",
    ResourcePendingMaintenanceActions: undefined
  };
  if (output["ResourcePendingMaintenanceActions"] !== undefined) {
    contents.ResourcePendingMaintenanceActions = deserializeAws_queryResourcePendingMaintenanceActions(
      output["ResourcePendingMaintenanceActions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryAttributeValueList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
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

const deserializeAws_queryAvailabilityZoneList = (
  output: any,
  context: __SerdeContext
): AvailabilityZone[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAvailabilityZone(entry, context)
  );
};

const deserializeAws_queryAvailabilityZones = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCertificate = (
  output: any,
  context: __SerdeContext
): Certificate => {
  let contents: any = {
    __type: "Certificate",
    CertificateArn: undefined,
    CertificateIdentifier: undefined,
    CertificateType: undefined,
    Thumbprint: undefined,
    ValidFrom: undefined,
    ValidTill: undefined
  };
  if (output["CertificateArn"] !== undefined) {
    contents.CertificateArn = output["CertificateArn"];
  }
  if (output["CertificateIdentifier"] !== undefined) {
    contents.CertificateIdentifier = output["CertificateIdentifier"];
  }
  if (output["CertificateType"] !== undefined) {
    contents.CertificateType = output["CertificateType"];
  }
  if (output["Thumbprint"] !== undefined) {
    contents.Thumbprint = output["Thumbprint"];
  }
  if (output["ValidFrom"] !== undefined) {
    contents.ValidFrom = new Date(output["ValidFrom"]);
  }
  if (output["ValidTill"] !== undefined) {
    contents.ValidTill = new Date(output["ValidTill"]);
  }
  return contents;
};

const deserializeAws_queryCertificateList = (
  output: any,
  context: __SerdeContext
): Certificate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCertificate(entry, context)
  );
};

const deserializeAws_queryCertificateMessage = (
  output: any,
  context: __SerdeContext
): CertificateMessage => {
  let contents: any = {
    __type: "CertificateMessage",
    Certificates: undefined,
    Marker: undefined
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (
    output["Certificates"] !== undefined &&
    output["Certificates"]["Certificate"] !== undefined
  ) {
    contents.Certificates = deserializeAws_queryCertificateList(
      __getArrayIfSingleItem(output["Certificates"]["Certificate"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryCertificateNotFoundFault = (
  output: any,
  context: __SerdeContext
): CertificateNotFoundFault => {
  let contents: any = {
    __type: "CertificateNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCopyDBClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CopyDBClusterParameterGroupResult => {
  let contents: any = {
    __type: "CopyDBClusterParameterGroupResult",
    DBClusterParameterGroup: undefined
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
  let contents: any = {
    __type: "CopyDBClusterSnapshotResult",
    DBClusterSnapshot: undefined
  };
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(
      output["DBClusterSnapshot"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDBClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateDBClusterParameterGroupResult => {
  let contents: any = {
    __type: "CreateDBClusterParameterGroupResult",
    DBClusterParameterGroup: undefined
  };
  if (output["DBClusterParameterGroup"] !== undefined) {
    contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(
      output["DBClusterParameterGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDBClusterResult = (
  output: any,
  context: __SerdeContext
): CreateDBClusterResult => {
  let contents: any = {
    __type: "CreateDBClusterResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDBClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDBClusterSnapshotResult => {
  let contents: any = {
    __type: "CreateDBClusterSnapshotResult",
    DBClusterSnapshot: undefined
  };
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(
      output["DBClusterSnapshot"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDBInstanceResult = (
  output: any,
  context: __SerdeContext
): CreateDBInstanceResult => {
  let contents: any = {
    __type: "CreateDBInstanceResult",
    DBInstance: undefined
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(
      output["DBInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDBSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): CreateDBSubnetGroupResult => {
  let contents: any = {
    __type: "CreateDBSubnetGroupResult",
    DBSubnetGroup: undefined
  };
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(
      output["DBSubnetGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBCluster = (
  output: any,
  context: __SerdeContext
): DBCluster => {
  let contents: any = {
    __type: "DBCluster",
    AssociatedRoles: undefined,
    AvailabilityZones: undefined,
    BackupRetentionPeriod: undefined,
    ClusterCreateTime: undefined,
    DBClusterArn: undefined,
    DBClusterIdentifier: undefined,
    DBClusterMembers: undefined,
    DBClusterParameterGroup: undefined,
    DBSubnetGroup: undefined,
    DbClusterResourceId: undefined,
    DeletionProtection: undefined,
    EarliestRestorableTime: undefined,
    EnabledCloudwatchLogsExports: undefined,
    Endpoint: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    HostedZoneId: undefined,
    KmsKeyId: undefined,
    LatestRestorableTime: undefined,
    MasterUsername: undefined,
    MultiAZ: undefined,
    PercentProgress: undefined,
    Port: undefined,
    PreferredBackupWindow: undefined,
    PreferredMaintenanceWindow: undefined,
    ReaderEndpoint: undefined,
    Status: undefined,
    StorageEncrypted: undefined,
    VpcSecurityGroups: undefined
  };
  if (output.AssociatedRoles === "") {
    contents.AssociatedRoles = [];
  }
  if (
    output["AssociatedRoles"] !== undefined &&
    output["AssociatedRoles"]["DBClusterRole"] !== undefined
  ) {
    contents.AssociatedRoles = deserializeAws_queryDBClusterRoles(
      __getArrayIfSingleItem(output["AssociatedRoles"]["DBClusterRole"]),
      context
    );
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
  }
  if (output["ClusterCreateTime"] !== undefined) {
    contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
  }
  if (output["DBClusterArn"] !== undefined) {
    contents.DBClusterArn = output["DBClusterArn"];
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = output["DBClusterIdentifier"];
  }
  if (output.DBClusterMembers === "") {
    contents.DBClusterMembers = [];
  }
  if (
    output["DBClusterMembers"] !== undefined &&
    output["DBClusterMembers"]["DBClusterMember"] !== undefined
  ) {
    contents.DBClusterMembers = deserializeAws_queryDBClusterMemberList(
      __getArrayIfSingleItem(output["DBClusterMembers"]["DBClusterMember"]),
      context
    );
  }
  if (output["DBClusterParameterGroup"] !== undefined) {
    contents.DBClusterParameterGroup = output["DBClusterParameterGroup"];
  }
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = output["DBSubnetGroup"];
  }
  if (output["DbClusterResourceId"] !== undefined) {
    contents.DbClusterResourceId = output["DbClusterResourceId"];
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = output["DeletionProtection"] == "true";
  }
  if (output["EarliestRestorableTime"] !== undefined) {
    contents.EarliestRestorableTime = new Date(
      output["EarliestRestorableTime"]
    );
  }
  if (output.EnabledCloudwatchLogsExports === "") {
    contents.EnabledCloudwatchLogsExports = [];
  }
  if (
    output["EnabledCloudwatchLogsExports"] !== undefined &&
    output["EnabledCloudwatchLogsExports"]["member"] !== undefined
  ) {
    contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]),
      context
    );
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = output["Endpoint"];
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = output["HostedZoneId"];
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = output["KmsKeyId"];
  }
  if (output["LatestRestorableTime"] !== undefined) {
    contents.LatestRestorableTime = new Date(output["LatestRestorableTime"]);
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = output["MasterUsername"];
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = output["MultiAZ"] == "true";
  }
  if (output["PercentProgress"] !== undefined) {
    contents.PercentProgress = output["PercentProgress"];
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  if (output["PreferredBackupWindow"] !== undefined) {
    contents.PreferredBackupWindow = output["PreferredBackupWindow"];
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
  }
  if (output["ReaderEndpoint"] !== undefined) {
    contents.ReaderEndpoint = output["ReaderEndpoint"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = output["StorageEncrypted"] == "true";
  }
  if (output.VpcSecurityGroups === "") {
    contents.VpcSecurityGroups = [];
  }
  if (
    output["VpcSecurityGroups"] !== undefined &&
    output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined
  ) {
    contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]
      ),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterAlreadyExistsFault => {
  let contents: any = {
    __type: "DBClusterAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBClusterList = (
  output: any,
  context: __SerdeContext
): DBCluster[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBCluster(entry, context)
  );
};

const deserializeAws_queryDBClusterMember = (
  output: any,
  context: __SerdeContext
): DBClusterMember => {
  let contents: any = {
    __type: "DBClusterMember",
    DBClusterParameterGroupStatus: undefined,
    DBInstanceIdentifier: undefined,
    IsClusterWriter: undefined,
    PromotionTier: undefined
  };
  if (output["DBClusterParameterGroupStatus"] !== undefined) {
    contents.DBClusterParameterGroupStatus =
      output["DBClusterParameterGroupStatus"];
  }
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
  }
  if (output["IsClusterWriter"] !== undefined) {
    contents.IsClusterWriter = output["IsClusterWriter"] == "true";
  }
  if (output["PromotionTier"] !== undefined) {
    contents.PromotionTier = parseInt(output["PromotionTier"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterMemberList = (
  output: any,
  context: __SerdeContext
): DBClusterMember[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBClusterMember(entry, context)
  );
};

const deserializeAws_queryDBClusterMessage = (
  output: any,
  context: __SerdeContext
): DBClusterMessage => {
  let contents: any = {
    __type: "DBClusterMessage",
    DBClusters: undefined,
    Marker: undefined
  };
  if (output.DBClusters === "") {
    contents.DBClusters = [];
  }
  if (
    output["DBClusters"] !== undefined &&
    output["DBClusters"]["DBCluster"] !== undefined
  ) {
    contents.DBClusters = deserializeAws_queryDBClusterList(
      __getArrayIfSingleItem(output["DBClusters"]["DBCluster"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryDBClusterNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterNotFoundFault => {
  let contents: any = {
    __type: "DBClusterNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroup = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroup => {
  let contents: any = {
    __type: "DBClusterParameterGroup",
    DBClusterParameterGroupArn: undefined,
    DBClusterParameterGroupName: undefined,
    DBParameterGroupFamily: undefined,
    Description: undefined
  };
  if (output["DBClusterParameterGroupArn"] !== undefined) {
    contents.DBClusterParameterGroupArn = output["DBClusterParameterGroupArn"];
  }
  if (output["DBClusterParameterGroupName"] !== undefined) {
    contents.DBClusterParameterGroupName =
      output["DBClusterParameterGroupName"];
  }
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupDetails = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupDetails => {
  let contents: any = {
    __type: "DBClusterParameterGroupDetails",
    Marker: undefined,
    Parameters: undefined
  };
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
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupList = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBClusterParameterGroup(entry, context)
  );
};

const deserializeAws_queryDBClusterParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupNameMessage => {
  let contents: any = {
    __type: "DBClusterParameterGroupNameMessage",
    DBClusterParameterGroupName: undefined
  };
  if (output["DBClusterParameterGroupName"] !== undefined) {
    contents.DBClusterParameterGroupName =
      output["DBClusterParameterGroupName"];
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupNotFoundFault => {
  let contents: any = {
    __type: "DBClusterParameterGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBClusterParameterGroupsMessage = (
  output: any,
  context: __SerdeContext
): DBClusterParameterGroupsMessage => {
  let contents: any = {
    __type: "DBClusterParameterGroupsMessage",
    DBClusterParameterGroups: undefined,
    Marker: undefined
  };
  if (output.DBClusterParameterGroups === "") {
    contents.DBClusterParameterGroups = [];
  }
  if (
    output["DBClusterParameterGroups"] !== undefined &&
    output["DBClusterParameterGroups"]["DBClusterParameterGroup"] !== undefined
  ) {
    contents.DBClusterParameterGroups = deserializeAws_queryDBClusterParameterGroupList(
      __getArrayIfSingleItem(
        output["DBClusterParameterGroups"]["DBClusterParameterGroup"]
      ),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryDBClusterQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBClusterQuotaExceededFault => {
  let contents: any = {
    __type: "DBClusterQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBClusterRole = (
  output: any,
  context: __SerdeContext
): DBClusterRole => {
  let contents: any = {
    __type: "DBClusterRole",
    RoleArn: undefined,
    Status: undefined
  };
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = output["RoleArn"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryDBClusterRoles = (
  output: any,
  context: __SerdeContext
): DBClusterRole[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBClusterRole(entry, context)
  );
};

const deserializeAws_queryDBClusterSnapshot = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshot => {
  let contents: any = {
    __type: "DBClusterSnapshot",
    AvailabilityZones: undefined,
    ClusterCreateTime: undefined,
    DBClusterIdentifier: undefined,
    DBClusterSnapshotArn: undefined,
    DBClusterSnapshotIdentifier: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    KmsKeyId: undefined,
    MasterUsername: undefined,
    PercentProgress: undefined,
    Port: undefined,
    SnapshotCreateTime: undefined,
    SnapshotType: undefined,
    SourceDBClusterSnapshotArn: undefined,
    Status: undefined,
    StorageEncrypted: undefined,
    VpcId: undefined
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  if (output["ClusterCreateTime"] !== undefined) {
    contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = output["DBClusterIdentifier"];
  }
  if (output["DBClusterSnapshotArn"] !== undefined) {
    contents.DBClusterSnapshotArn = output["DBClusterSnapshotArn"];
  }
  if (output["DBClusterSnapshotIdentifier"] !== undefined) {
    contents.DBClusterSnapshotIdentifier =
      output["DBClusterSnapshotIdentifier"];
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
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = output["MasterUsername"];
  }
  if (output["PercentProgress"] !== undefined) {
    contents.PercentProgress = parseInt(output["PercentProgress"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  if (output["SnapshotCreateTime"] !== undefined) {
    contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
  }
  if (output["SnapshotType"] !== undefined) {
    contents.SnapshotType = output["SnapshotType"];
  }
  if (output["SourceDBClusterSnapshotArn"] !== undefined) {
    contents.SourceDBClusterSnapshotArn = output["SourceDBClusterSnapshotArn"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = output["StorageEncrypted"] == "true";
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAlreadyExistsFault => {
  let contents: any = {
    __type: "DBClusterSnapshotAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotAttribute = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAttribute => {
  let contents: any = {
    __type: "DBClusterSnapshotAttribute",
    AttributeName: undefined,
    AttributeValues: undefined
  };
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = output["AttributeName"];
  }
  if (output.AttributeValues === "") {
    contents.AttributeValues = [];
  }
  if (
    output["AttributeValues"] !== undefined &&
    output["AttributeValues"]["AttributeValue"] !== undefined
  ) {
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
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBClusterSnapshotAttribute(entry, context)
  );
};

const deserializeAws_queryDBClusterSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotAttributesResult => {
  let contents: any = {
    __type: "DBClusterSnapshotAttributesResult",
    DBClusterSnapshotAttributes: undefined,
    DBClusterSnapshotIdentifier: undefined
  };
  if (output.DBClusterSnapshotAttributes === "") {
    contents.DBClusterSnapshotAttributes = [];
  }
  if (
    output["DBClusterSnapshotAttributes"] !== undefined &&
    output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"] !==
      undefined
  ) {
    contents.DBClusterSnapshotAttributes = deserializeAws_queryDBClusterSnapshotAttributeList(
      __getArrayIfSingleItem(
        output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"]
      ),
      context
    );
  }
  if (output["DBClusterSnapshotIdentifier"] !== undefined) {
    contents.DBClusterSnapshotIdentifier =
      output["DBClusterSnapshotIdentifier"];
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotList = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshot[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBClusterSnapshot(entry, context)
  );
};

const deserializeAws_queryDBClusterSnapshotMessage = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotMessage => {
  let contents: any = {
    __type: "DBClusterSnapshotMessage",
    DBClusterSnapshots: undefined,
    Marker: undefined
  };
  if (output.DBClusterSnapshots === "") {
    contents.DBClusterSnapshots = [];
  }
  if (
    output["DBClusterSnapshots"] !== undefined &&
    output["DBClusterSnapshots"]["DBClusterSnapshot"] !== undefined
  ) {
    contents.DBClusterSnapshots = deserializeAws_queryDBClusterSnapshotList(
      __getArrayIfSingleItem(output["DBClusterSnapshots"]["DBClusterSnapshot"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryDBClusterSnapshotNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterSnapshotNotFoundFault => {
  let contents: any = {
    __type: "DBClusterSnapshotNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBEngineVersion = (
  output: any,
  context: __SerdeContext
): DBEngineVersion => {
  let contents: any = {
    __type: "DBEngineVersion",
    DBEngineDescription: undefined,
    DBEngineVersionDescription: undefined,
    DBParameterGroupFamily: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    ExportableLogTypes: undefined,
    SupportsLogExportsToCloudwatchLogs: undefined,
    ValidUpgradeTarget: undefined
  };
  if (output["DBEngineDescription"] !== undefined) {
    contents.DBEngineDescription = output["DBEngineDescription"];
  }
  if (output["DBEngineVersionDescription"] !== undefined) {
    contents.DBEngineVersionDescription = output["DBEngineVersionDescription"];
  }
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output.ExportableLogTypes === "") {
    contents.ExportableLogTypes = [];
  }
  if (
    output["ExportableLogTypes"] !== undefined &&
    output["ExportableLogTypes"]["member"] !== undefined
  ) {
    contents.ExportableLogTypes = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["ExportableLogTypes"]["member"]),
      context
    );
  }
  if (output["SupportsLogExportsToCloudwatchLogs"] !== undefined) {
    contents.SupportsLogExportsToCloudwatchLogs =
      output["SupportsLogExportsToCloudwatchLogs"] == "true";
  }
  if (output.ValidUpgradeTarget === "") {
    contents.ValidUpgradeTarget = [];
  }
  if (
    output["ValidUpgradeTarget"] !== undefined &&
    output["ValidUpgradeTarget"]["UpgradeTarget"] !== undefined
  ) {
    contents.ValidUpgradeTarget = deserializeAws_queryValidUpgradeTargetList(
      __getArrayIfSingleItem(output["ValidUpgradeTarget"]["UpgradeTarget"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBEngineVersionList = (
  output: any,
  context: __SerdeContext
): DBEngineVersion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBEngineVersion(entry, context)
  );
};

const deserializeAws_queryDBEngineVersionMessage = (
  output: any,
  context: __SerdeContext
): DBEngineVersionMessage => {
  let contents: any = {
    __type: "DBEngineVersionMessage",
    DBEngineVersions: undefined,
    Marker: undefined
  };
  if (output.DBEngineVersions === "") {
    contents.DBEngineVersions = [];
  }
  if (
    output["DBEngineVersions"] !== undefined &&
    output["DBEngineVersions"]["DBEngineVersion"] !== undefined
  ) {
    contents.DBEngineVersions = deserializeAws_queryDBEngineVersionList(
      __getArrayIfSingleItem(output["DBEngineVersions"]["DBEngineVersion"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryDBInstance = (
  output: any,
  context: __SerdeContext
): DBInstance => {
  let contents: any = {
    __type: "DBInstance",
    AutoMinorVersionUpgrade: undefined,
    AvailabilityZone: undefined,
    BackupRetentionPeriod: undefined,
    CACertificateIdentifier: undefined,
    DBClusterIdentifier: undefined,
    DBInstanceArn: undefined,
    DBInstanceClass: undefined,
    DBInstanceIdentifier: undefined,
    DBInstanceStatus: undefined,
    DBSubnetGroup: undefined,
    DbiResourceId: undefined,
    EnabledCloudwatchLogsExports: undefined,
    Endpoint: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    InstanceCreateTime: undefined,
    KmsKeyId: undefined,
    LatestRestorableTime: undefined,
    PendingModifiedValues: undefined,
    PreferredBackupWindow: undefined,
    PreferredMaintenanceWindow: undefined,
    PromotionTier: undefined,
    PubliclyAccessible: undefined,
    StatusInfos: undefined,
    StorageEncrypted: undefined,
    VpcSecurityGroups: undefined
  };
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade =
      output["AutoMinorVersionUpgrade"] == "true";
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = output["AvailabilityZone"];
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
  }
  if (output["CACertificateIdentifier"] !== undefined) {
    contents.CACertificateIdentifier = output["CACertificateIdentifier"];
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = output["DBClusterIdentifier"];
  }
  if (output["DBInstanceArn"] !== undefined) {
    contents.DBInstanceArn = output["DBInstanceArn"];
  }
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = output["DBInstanceClass"];
  }
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
  }
  if (output["DBInstanceStatus"] !== undefined) {
    contents.DBInstanceStatus = output["DBInstanceStatus"];
  }
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(
      output["DBSubnetGroup"],
      context
    );
  }
  if (output["DbiResourceId"] !== undefined) {
    contents.DbiResourceId = output["DbiResourceId"];
  }
  if (output.EnabledCloudwatchLogsExports === "") {
    contents.EnabledCloudwatchLogsExports = [];
  }
  if (
    output["EnabledCloudwatchLogsExports"] !== undefined &&
    output["EnabledCloudwatchLogsExports"]["member"] !== undefined
  ) {
    contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]),
      context
    );
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = deserializeAws_queryEndpoint(
      output["Endpoint"],
      context
    );
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["InstanceCreateTime"] !== undefined) {
    contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = output["KmsKeyId"];
  }
  if (output["LatestRestorableTime"] !== undefined) {
    contents.LatestRestorableTime = new Date(output["LatestRestorableTime"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(
      output["PendingModifiedValues"],
      context
    );
  }
  if (output["PreferredBackupWindow"] !== undefined) {
    contents.PreferredBackupWindow = output["PreferredBackupWindow"];
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
  }
  if (output["PromotionTier"] !== undefined) {
    contents.PromotionTier = parseInt(output["PromotionTier"]);
  }
  if (output["PubliclyAccessible"] !== undefined) {
    contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
  }
  if (output.StatusInfos === "") {
    contents.StatusInfos = [];
  }
  if (
    output["StatusInfos"] !== undefined &&
    output["StatusInfos"]["DBInstanceStatusInfo"] !== undefined
  ) {
    contents.StatusInfos = deserializeAws_queryDBInstanceStatusInfoList(
      __getArrayIfSingleItem(output["StatusInfos"]["DBInstanceStatusInfo"]),
      context
    );
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = output["StorageEncrypted"] == "true";
  }
  if (output.VpcSecurityGroups === "") {
    contents.VpcSecurityGroups = [];
  }
  if (
    output["VpcSecurityGroups"] !== undefined &&
    output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined
  ) {
    contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]
      ),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBInstanceAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBInstanceAlreadyExistsFault => {
  let contents: any = {
    __type: "DBInstanceAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBInstanceList = (
  output: any,
  context: __SerdeContext
): DBInstance[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBInstance(entry, context)
  );
};

const deserializeAws_queryDBInstanceMessage = (
  output: any,
  context: __SerdeContext
): DBInstanceMessage => {
  let contents: any = {
    __type: "DBInstanceMessage",
    DBInstances: undefined,
    Marker: undefined
  };
  if (output.DBInstances === "") {
    contents.DBInstances = [];
  }
  if (
    output["DBInstances"] !== undefined &&
    output["DBInstances"]["DBInstance"] !== undefined
  ) {
    contents.DBInstances = deserializeAws_queryDBInstanceList(
      __getArrayIfSingleItem(output["DBInstances"]["DBInstance"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryDBInstanceNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBInstanceNotFoundFault => {
  let contents: any = {
    __type: "DBInstanceNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBInstanceStatusInfo = (
  output: any,
  context: __SerdeContext
): DBInstanceStatusInfo => {
  let contents: any = {
    __type: "DBInstanceStatusInfo",
    Message: undefined,
    Normal: undefined,
    Status: undefined,
    StatusType: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["Normal"] !== undefined) {
    contents.Normal = output["Normal"] == "true";
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusType"] !== undefined) {
    contents.StatusType = output["StatusType"];
  }
  return contents;
};

const deserializeAws_queryDBInstanceStatusInfoList = (
  output: any,
  context: __SerdeContext
): DBInstanceStatusInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBInstanceStatusInfo(entry, context)
  );
};

const deserializeAws_queryDBParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "DBParameterGroupAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupNotFoundFault => {
  let contents: any = {
    __type: "DBParameterGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBParameterGroupQuotaExceededFault => {
  let contents: any = {
    __type: "DBParameterGroupQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSecurityGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupNotFoundFault => {
  let contents: any = {
    __type: "DBSecurityGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBSnapshotAlreadyExistsFault => {
  let contents: any = {
    __type: "DBSnapshotAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSnapshotNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBSnapshotNotFoundFault => {
  let contents: any = {
    __type: "DBSnapshotNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroup = (
  output: any,
  context: __SerdeContext
): DBSubnetGroup => {
  let contents: any = {
    __type: "DBSubnetGroup",
    DBSubnetGroupArn: undefined,
    DBSubnetGroupDescription: undefined,
    DBSubnetGroupName: undefined,
    SubnetGroupStatus: undefined,
    Subnets: undefined,
    VpcId: undefined
  };
  if (output["DBSubnetGroupArn"] !== undefined) {
    contents.DBSubnetGroupArn = output["DBSubnetGroupArn"];
  }
  if (output["DBSubnetGroupDescription"] !== undefined) {
    contents.DBSubnetGroupDescription = output["DBSubnetGroupDescription"];
  }
  if (output["DBSubnetGroupName"] !== undefined) {
    contents.DBSubnetGroupName = output["DBSubnetGroupName"];
  }
  if (output["SubnetGroupStatus"] !== undefined) {
    contents.SubnetGroupStatus = output["SubnetGroupStatus"];
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  }
  if (
    output["Subnets"] !== undefined &&
    output["Subnets"]["Subnet"] !== undefined
  ) {
    contents.Subnets = deserializeAws_querySubnetList(
      __getArrayIfSingleItem(output["Subnets"]["Subnet"]),
      context
    );
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "DBSubnetGroupAlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupDoesNotCoverEnoughAZs => {
  let contents: any = {
    __type: "DBSubnetGroupDoesNotCoverEnoughAZs",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupMessage = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupMessage => {
  let contents: any = {
    __type: "DBSubnetGroupMessage",
    DBSubnetGroups: undefined,
    Marker: undefined
  };
  if (output.DBSubnetGroups === "") {
    contents.DBSubnetGroups = [];
  }
  if (
    output["DBSubnetGroups"] !== undefined &&
    output["DBSubnetGroups"]["DBSubnetGroup"] !== undefined
  ) {
    contents.DBSubnetGroups = deserializeAws_queryDBSubnetGroups(
      __getArrayIfSingleItem(output["DBSubnetGroups"]["DBSubnetGroup"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupNotFoundFault => {
  let contents: any = {
    __type: "DBSubnetGroupNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupQuotaExceededFault => {
  let contents: any = {
    __type: "DBSubnetGroupQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBSubnetGroups = (
  output: any,
  context: __SerdeContext
): DBSubnetGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDBSubnetGroup(entry, context)
  );
};

const deserializeAws_queryDBSubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBSubnetQuotaExceededFault => {
  let contents: any = {
    __type: "DBSubnetQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDBUpgradeDependencyFailureFault = (
  output: any,
  context: __SerdeContext
): DBUpgradeDependencyFailureFault => {
  let contents: any = {
    __type: "DBUpgradeDependencyFailureFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDeleteDBClusterResult = (
  output: any,
  context: __SerdeContext
): DeleteDBClusterResult => {
  let contents: any = {
    __type: "DeleteDBClusterResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteDBClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteDBClusterSnapshotResult => {
  let contents: any = {
    __type: "DeleteDBClusterSnapshotResult",
    DBClusterSnapshot: undefined
  };
  if (output["DBClusterSnapshot"] !== undefined) {
    contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(
      output["DBClusterSnapshot"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteDBInstanceResult = (
  output: any,
  context: __SerdeContext
): DeleteDBInstanceResult => {
  let contents: any = {
    __type: "DeleteDBInstanceResult",
    DBInstance: undefined
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(
      output["DBInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeDBClusterSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeDBClusterSnapshotAttributesResult => {
  let contents: any = {
    __type: "DescribeDBClusterSnapshotAttributesResult",
    DBClusterSnapshotAttributesResult: undefined
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
  let contents: any = {
    __type: "DescribeEngineDefaultClusterParametersResult",
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

const deserializeAws_queryEndpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  let contents: any = {
    __type: "Endpoint",
    Address: undefined,
    HostedZoneId: undefined,
    Port: undefined
  };
  if (output["Address"] !== undefined) {
    contents.Address = output["Address"];
  }
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = output["HostedZoneId"];
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
    DBParameterGroupFamily: undefined,
    Marker: undefined,
    Parameters: undefined
  };
  if (output["DBParameterGroupFamily"] !== undefined) {
    contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
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
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
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
    EventCategories: undefined,
    Message: undefined,
    SourceArn: undefined,
    SourceIdentifier: undefined,
    SourceType: undefined
  };
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  }
  if (
    output["EventCategories"] !== undefined &&
    output["EventCategories"]["EventCategory"] !== undefined
  ) {
    contents.EventCategories = deserializeAws_queryEventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["SourceArn"] !== undefined) {
    contents.SourceArn = output["SourceArn"];
  }
  if (output["SourceIdentifier"] !== undefined) {
    contents.SourceIdentifier = output["SourceIdentifier"];
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = output["SourceType"];
  }
  return contents;
};

const deserializeAws_queryEventCategoriesList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryEventCategoriesMap = (
  output: any,
  context: __SerdeContext
): EventCategoriesMap => {
  let contents: any = {
    __type: "EventCategoriesMap",
    EventCategories: undefined,
    SourceType: undefined
  };
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  }
  if (
    output["EventCategories"] !== undefined &&
    output["EventCategories"]["EventCategory"] !== undefined
  ) {
    contents.EventCategories = deserializeAws_queryEventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = output["SourceType"];
  }
  return contents;
};

const deserializeAws_queryEventCategoriesMapList = (
  output: any,
  context: __SerdeContext
): EventCategoriesMap[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEventCategoriesMap(entry, context)
  );
};

const deserializeAws_queryEventCategoriesMessage = (
  output: any,
  context: __SerdeContext
): EventCategoriesMessage => {
  let contents: any = {
    __type: "EventCategoriesMessage",
    EventCategoriesMapList: undefined
  };
  if (output.EventCategoriesMapList === "") {
    contents.EventCategoriesMapList = [];
  }
  if (
    output["EventCategoriesMapList"] !== undefined &&
    output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined
  ) {
    contents.EventCategoriesMapList = deserializeAws_queryEventCategoriesMapList(
      __getArrayIfSingleItem(
        output["EventCategoriesMapList"]["EventCategoriesMap"]
      ),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEventList = (
  output: any,
  context: __SerdeContext
): Event[] => {
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
    contents.Events = deserializeAws_queryEventList(
      __getArrayIfSingleItem(output["Events"]["Event"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryFailoverDBClusterResult = (
  output: any,
  context: __SerdeContext
): FailoverDBClusterResult => {
  let contents: any = {
    __type: "FailoverDBClusterResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryInstanceQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): InstanceQuotaExceededFault => {
  let contents: any = {
    __type: "InstanceQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInsufficientDBClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientDBClusterCapacityFault => {
  let contents: any = {
    __type: "InsufficientDBClusterCapacityFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInsufficientDBInstanceCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientDBInstanceCapacityFault => {
  let contents: any = {
    __type: "InsufficientDBInstanceCapacityFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInsufficientStorageClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientStorageClusterCapacityFault => {
  let contents: any = {
    __type: "InsufficientStorageClusterCapacityFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBClusterSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterSnapshotStateFault => {
  let contents: any = {
    __type: "InvalidDBClusterSnapshotStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterStateFault => {
  let contents: any = {
    __type: "InvalidDBClusterStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBInstanceStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBInstanceStateFault => {
  let contents: any = {
    __type: "InvalidDBInstanceStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBParameterGroupStateFault => {
  let contents: any = {
    __type: "InvalidDBParameterGroupStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSecurityGroupStateFault => {
  let contents: any = {
    __type: "InvalidDBSecurityGroupStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSnapshotStateFault => {
  let contents: any = {
    __type: "InvalidDBSnapshotStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBSubnetGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSubnetGroupStateFault => {
  let contents: any = {
    __type: "InvalidDBSubnetGroupStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidDBSubnetStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSubnetStateFault => {
  let contents: any = {
    __type: "InvalidDBSubnetStateFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidRestoreFault = (
  output: any,
  context: __SerdeContext
): InvalidRestoreFault => {
  let contents: any = {
    __type: "InvalidRestoreFault",
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

const deserializeAws_queryKMSKeyNotAccessibleFault = (
  output: any,
  context: __SerdeContext
): KMSKeyNotAccessibleFault => {
  let contents: any = {
    __type: "KMSKeyNotAccessibleFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryLogTypeList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryModifyDBClusterResult = (
  output: any,
  context: __SerdeContext
): ModifyDBClusterResult => {
  let contents: any = {
    __type: "ModifyDBClusterResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyDBClusterSnapshotAttributeResult = (
  output: any,
  context: __SerdeContext
): ModifyDBClusterSnapshotAttributeResult => {
  let contents: any = {
    __type: "ModifyDBClusterSnapshotAttributeResult",
    DBClusterSnapshotAttributesResult: undefined
  };
  if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
    contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(
      output["DBClusterSnapshotAttributesResult"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyDBInstanceResult = (
  output: any,
  context: __SerdeContext
): ModifyDBInstanceResult => {
  let contents: any = {
    __type: "ModifyDBInstanceResult",
    DBInstance: undefined
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(
      output["DBInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyDBSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyDBSubnetGroupResult => {
  let contents: any = {
    __type: "ModifyDBSubnetGroupResult",
    DBSubnetGroup: undefined
  };
  if (output["DBSubnetGroup"] !== undefined) {
    contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(
      output["DBSubnetGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryOrderableDBInstanceOption = (
  output: any,
  context: __SerdeContext
): OrderableDBInstanceOption => {
  let contents: any = {
    __type: "OrderableDBInstanceOption",
    AvailabilityZones: undefined,
    DBInstanceClass: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    LicenseModel: undefined,
    Vpc: undefined
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = output["DBInstanceClass"];
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["LicenseModel"] !== undefined) {
    contents.LicenseModel = output["LicenseModel"];
  }
  if (output["Vpc"] !== undefined) {
    contents.Vpc = output["Vpc"] == "true";
  }
  return contents;
};

const deserializeAws_queryOrderableDBInstanceOptionsList = (
  output: any,
  context: __SerdeContext
): OrderableDBInstanceOption[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryOrderableDBInstanceOption(entry, context)
  );
};

const deserializeAws_queryOrderableDBInstanceOptionsMessage = (
  output: any,
  context: __SerdeContext
): OrderableDBInstanceOptionsMessage => {
  let contents: any = {
    __type: "OrderableDBInstanceOptionsMessage",
    Marker: undefined,
    OrderableDBInstanceOptions: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.OrderableDBInstanceOptions === "") {
    contents.OrderableDBInstanceOptions = [];
  }
  if (
    output["OrderableDBInstanceOptions"] !== undefined &&
    output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"] !==
      undefined
  ) {
    contents.OrderableDBInstanceOptions = deserializeAws_queryOrderableDBInstanceOptionsList(
      __getArrayIfSingleItem(
        output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"]
      ),
      context
    );
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
    ApplyMethod: undefined,
    ApplyType: undefined,
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
  if (output["ApplyMethod"] !== undefined) {
    contents.ApplyMethod = output["ApplyMethod"];
  }
  if (output["ApplyType"] !== undefined) {
    contents.ApplyType = output["ApplyType"];
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
): Parameter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryParameter(entry, context)
  );
};

const deserializeAws_queryPendingCloudwatchLogsExports = (
  output: any,
  context: __SerdeContext
): PendingCloudwatchLogsExports => {
  let contents: any = {
    __type: "PendingCloudwatchLogsExports",
    LogTypesToDisable: undefined,
    LogTypesToEnable: undefined
  };
  if (output.LogTypesToDisable === "") {
    contents.LogTypesToDisable = [];
  }
  if (
    output["LogTypesToDisable"] !== undefined &&
    output["LogTypesToDisable"]["member"] !== undefined
  ) {
    contents.LogTypesToDisable = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["LogTypesToDisable"]["member"]),
      context
    );
  }
  if (output.LogTypesToEnable === "") {
    contents.LogTypesToEnable = [];
  }
  if (
    output["LogTypesToEnable"] !== undefined &&
    output["LogTypesToEnable"]["member"] !== undefined
  ) {
    contents.LogTypesToEnable = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["LogTypesToEnable"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPendingMaintenanceAction = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction => {
  let contents: any = {
    __type: "PendingMaintenanceAction",
    Action: undefined,
    AutoAppliedAfterDate: undefined,
    CurrentApplyDate: undefined,
    Description: undefined,
    ForcedApplyDate: undefined,
    OptInStatus: undefined
  };
  if (output["Action"] !== undefined) {
    contents.Action = output["Action"];
  }
  if (output["AutoAppliedAfterDate"] !== undefined) {
    contents.AutoAppliedAfterDate = new Date(output["AutoAppliedAfterDate"]);
  }
  if (output["CurrentApplyDate"] !== undefined) {
    contents.CurrentApplyDate = new Date(output["CurrentApplyDate"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["ForcedApplyDate"] !== undefined) {
    contents.ForcedApplyDate = new Date(output["ForcedApplyDate"]);
  }
  if (output["OptInStatus"] !== undefined) {
    contents.OptInStatus = output["OptInStatus"];
  }
  return contents;
};

const deserializeAws_queryPendingMaintenanceActionDetails = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryPendingMaintenanceAction(entry, context)
  );
};

const deserializeAws_queryPendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryResourcePendingMaintenanceActions(entry, context)
  );
};

const deserializeAws_queryPendingMaintenanceActionsMessage = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceActionsMessage => {
  let contents: any = {
    __type: "PendingMaintenanceActionsMessage",
    Marker: undefined,
    PendingMaintenanceActions: undefined
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.PendingMaintenanceActions === "") {
    contents.PendingMaintenanceActions = [];
  }
  if (
    output["PendingMaintenanceActions"] !== undefined &&
    output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"] !==
      undefined
  ) {
    contents.PendingMaintenanceActions = deserializeAws_queryPendingMaintenanceActions(
      __getArrayIfSingleItem(
        output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"]
      ),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): PendingModifiedValues => {
  let contents: any = {
    __type: "PendingModifiedValues",
    AllocatedStorage: undefined,
    BackupRetentionPeriod: undefined,
    CACertificateIdentifier: undefined,
    DBInstanceClass: undefined,
    DBInstanceIdentifier: undefined,
    DBSubnetGroupName: undefined,
    EngineVersion: undefined,
    Iops: undefined,
    LicenseModel: undefined,
    MasterUserPassword: undefined,
    MultiAZ: undefined,
    PendingCloudwatchLogsExports: undefined,
    Port: undefined,
    StorageType: undefined
  };
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
  }
  if (output["CACertificateIdentifier"] !== undefined) {
    contents.CACertificateIdentifier = output["CACertificateIdentifier"];
  }
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = output["DBInstanceClass"];
  }
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
  }
  if (output["DBSubnetGroupName"] !== undefined) {
    contents.DBSubnetGroupName = output["DBSubnetGroupName"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = parseInt(output["Iops"]);
  }
  if (output["LicenseModel"] !== undefined) {
    contents.LicenseModel = output["LicenseModel"];
  }
  if (output["MasterUserPassword"] !== undefined) {
    contents.MasterUserPassword = output["MasterUserPassword"];
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = output["MultiAZ"] == "true";
  }
  if (output["PendingCloudwatchLogsExports"] !== undefined) {
    contents.PendingCloudwatchLogsExports = deserializeAws_queryPendingCloudwatchLogsExports(
      output["PendingCloudwatchLogsExports"],
      context
    );
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = output["StorageType"];
  }
  return contents;
};

const deserializeAws_queryRebootDBInstanceResult = (
  output: any,
  context: __SerdeContext
): RebootDBInstanceResult => {
  let contents: any = {
    __type: "RebootDBInstanceResult",
    DBInstance: undefined
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(
      output["DBInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundFault = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundFault => {
  let contents: any = {
    __type: "ResourceNotFoundFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryResourcePendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions => {
  let contents: any = {
    __type: "ResourcePendingMaintenanceActions",
    PendingMaintenanceActionDetails: undefined,
    ResourceIdentifier: undefined
  };
  if (output.PendingMaintenanceActionDetails === "") {
    contents.PendingMaintenanceActionDetails = [];
  }
  if (
    output["PendingMaintenanceActionDetails"] !== undefined &&
    output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"] !==
      undefined
  ) {
    contents.PendingMaintenanceActionDetails = deserializeAws_queryPendingMaintenanceActionDetails(
      __getArrayIfSingleItem(
        output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"]
      ),
      context
    );
  }
  if (output["ResourceIdentifier"] !== undefined) {
    contents.ResourceIdentifier = output["ResourceIdentifier"];
  }
  return contents;
};

const deserializeAws_queryRestoreDBClusterFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreDBClusterFromSnapshotResult => {
  let contents: any = {
    __type: "RestoreDBClusterFromSnapshotResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryRestoreDBClusterToPointInTimeResult = (
  output: any,
  context: __SerdeContext
): RestoreDBClusterToPointInTimeResult => {
  let contents: any = {
    __type: "RestoreDBClusterToPointInTimeResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_querySharedSnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SharedSnapshotQuotaExceededFault => {
  let contents: any = {
    __type: "SharedSnapshotQuotaExceededFault",
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

const deserializeAws_queryStartDBClusterResult = (
  output: any,
  context: __SerdeContext
): StartDBClusterResult => {
  let contents: any = {
    __type: "StartDBClusterResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryStopDBClusterResult = (
  output: any,
  context: __SerdeContext
): StopDBClusterResult => {
  let contents: any = {
    __type: "StopDBClusterResult",
    DBCluster: undefined
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(
      output["DBCluster"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryStorageQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): StorageQuotaExceededFault => {
  let contents: any = {
    __type: "StorageQuotaExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryStorageTypeNotSupportedFault = (
  output: any,
  context: __SerdeContext
): StorageTypeNotSupportedFault => {
  let contents: any = {
    __type: "StorageTypeNotSupportedFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
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
    SubnetIdentifier: undefined,
    SubnetStatus: undefined
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
  if (output["SubnetStatus"] !== undefined) {
    contents.SubnetStatus = output["SubnetStatus"];
  }
  return contents;
};

const deserializeAws_querySubnetAlreadyInUse = (
  output: any,
  context: __SerdeContext
): SubnetAlreadyInUse => {
  let contents: any = {
    __type: "SubnetAlreadyInUse",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySubnetList = (
  output: any,
  context: __SerdeContext
): Subnet[] => {
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
): Tag[] => {
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
    contents.TagList = deserializeAws_queryTagList(
      __getArrayIfSingleItem(output["TagList"]["Tag"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryUpgradeTarget = (
  output: any,
  context: __SerdeContext
): UpgradeTarget => {
  let contents: any = {
    __type: "UpgradeTarget",
    AutoUpgrade: undefined,
    Description: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    IsMajorVersionUpgrade: undefined
  };
  if (output["AutoUpgrade"] !== undefined) {
    contents.AutoUpgrade = output["AutoUpgrade"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = output["Engine"];
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = output["EngineVersion"];
  }
  if (output["IsMajorVersionUpgrade"] !== undefined) {
    contents.IsMajorVersionUpgrade = output["IsMajorVersionUpgrade"] == "true";
  }
  return contents;
};

const deserializeAws_queryValidUpgradeTargetList = (
  output: any,
  context: __SerdeContext
): UpgradeTarget[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryUpgradeTarget(entry, context)
  );
};

const deserializeAws_queryVpcSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership => {
  let contents: any = {
    __type: "VpcSecurityGroupMembership",
    Status: undefined,
    VpcSecurityGroupId: undefined
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["VpcSecurityGroupId"] !== undefined) {
    contents.VpcSecurityGroupId = output["VpcSecurityGroupId"];
  }
  return contents;
};

const deserializeAws_queryVpcSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryVpcSecurityGroupMembership(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
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
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const buildFormUrlencodedString = (formEntries: {
  [key: string]: string;
}): string =>
  Object.entries(formEntries)
    .map(
      ([key, value]) =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(value)
    )
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
