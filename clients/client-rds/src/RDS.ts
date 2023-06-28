// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddRoleToDBClusterCommand,
  AddRoleToDBClusterCommandInput,
  AddRoleToDBClusterCommandOutput,
} from "./commands/AddRoleToDBClusterCommand";
import {
  AddRoleToDBInstanceCommand,
  AddRoleToDBInstanceCommandInput,
  AddRoleToDBInstanceCommandOutput,
} from "./commands/AddRoleToDBInstanceCommand";
import {
  AddSourceIdentifierToSubscriptionCommand,
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
} from "./commands/AddSourceIdentifierToSubscriptionCommand";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  AuthorizeDBSecurityGroupIngressCommand,
  AuthorizeDBSecurityGroupIngressCommandInput,
  AuthorizeDBSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeDBSecurityGroupIngressCommand";
import {
  BacktrackDBClusterCommand,
  BacktrackDBClusterCommandInput,
  BacktrackDBClusterCommandOutput,
} from "./commands/BacktrackDBClusterCommand";
import {
  CancelExportTaskCommand,
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
} from "./commands/CancelExportTaskCommand";
import {
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
} from "./commands/CopyDBClusterParameterGroupCommand";
import {
  CopyDBClusterSnapshotCommand,
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
} from "./commands/CopyDBClusterSnapshotCommand";
import {
  CopyDBParameterGroupCommand,
  CopyDBParameterGroupCommandInput,
  CopyDBParameterGroupCommandOutput,
} from "./commands/CopyDBParameterGroupCommand";
import {
  CopyDBSnapshotCommand,
  CopyDBSnapshotCommandInput,
  CopyDBSnapshotCommandOutput,
} from "./commands/CopyDBSnapshotCommand";
import {
  CopyOptionGroupCommand,
  CopyOptionGroupCommandInput,
  CopyOptionGroupCommandOutput,
} from "./commands/CopyOptionGroupCommand";
import {
  CreateBlueGreenDeploymentCommand,
  CreateBlueGreenDeploymentCommandInput,
  CreateBlueGreenDeploymentCommandOutput,
} from "./commands/CreateBlueGreenDeploymentCommand";
import {
  CreateCustomDBEngineVersionCommand,
  CreateCustomDBEngineVersionCommandInput,
  CreateCustomDBEngineVersionCommandOutput,
} from "./commands/CreateCustomDBEngineVersionCommand";
import {
  CreateDBClusterCommand,
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput,
} from "./commands/CreateDBClusterCommand";
import {
  CreateDBClusterEndpointCommand,
  CreateDBClusterEndpointCommandInput,
  CreateDBClusterEndpointCommandOutput,
} from "./commands/CreateDBClusterEndpointCommand";
import {
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
} from "./commands/CreateDBClusterParameterGroupCommand";
import {
  CreateDBClusterSnapshotCommand,
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput,
} from "./commands/CreateDBClusterSnapshotCommand";
import {
  CreateDBInstanceCommand,
  CreateDBInstanceCommandInput,
  CreateDBInstanceCommandOutput,
} from "./commands/CreateDBInstanceCommand";
import {
  CreateDBInstanceReadReplicaCommand,
  CreateDBInstanceReadReplicaCommandInput,
  CreateDBInstanceReadReplicaCommandOutput,
} from "./commands/CreateDBInstanceReadReplicaCommand";
import {
  CreateDBParameterGroupCommand,
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
} from "./commands/CreateDBParameterGroupCommand";
import {
  CreateDBProxyCommand,
  CreateDBProxyCommandInput,
  CreateDBProxyCommandOutput,
} from "./commands/CreateDBProxyCommand";
import {
  CreateDBProxyEndpointCommand,
  CreateDBProxyEndpointCommandInput,
  CreateDBProxyEndpointCommandOutput,
} from "./commands/CreateDBProxyEndpointCommand";
import {
  CreateDBSecurityGroupCommand,
  CreateDBSecurityGroupCommandInput,
  CreateDBSecurityGroupCommandOutput,
} from "./commands/CreateDBSecurityGroupCommand";
import {
  CreateDBSnapshotCommand,
  CreateDBSnapshotCommandInput,
  CreateDBSnapshotCommandOutput,
} from "./commands/CreateDBSnapshotCommand";
import {
  CreateDBSubnetGroupCommand,
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
} from "./commands/CreateDBSubnetGroupCommand";
import {
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateGlobalClusterCommand,
  CreateGlobalClusterCommandInput,
  CreateGlobalClusterCommandOutput,
} from "./commands/CreateGlobalClusterCommand";
import {
  CreateOptionGroupCommand,
  CreateOptionGroupCommandInput,
  CreateOptionGroupCommandOutput,
} from "./commands/CreateOptionGroupCommand";
import {
  DeleteBlueGreenDeploymentCommand,
  DeleteBlueGreenDeploymentCommandInput,
  DeleteBlueGreenDeploymentCommandOutput,
} from "./commands/DeleteBlueGreenDeploymentCommand";
import {
  DeleteCustomDBEngineVersionCommand,
  DeleteCustomDBEngineVersionCommandInput,
  DeleteCustomDBEngineVersionCommandOutput,
} from "./commands/DeleteCustomDBEngineVersionCommand";
import {
  DeleteDBClusterCommand,
  DeleteDBClusterCommandInput,
  DeleteDBClusterCommandOutput,
} from "./commands/DeleteDBClusterCommand";
import {
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterEndpointCommandInput,
  DeleteDBClusterEndpointCommandOutput,
} from "./commands/DeleteDBClusterEndpointCommand";
import {
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
} from "./commands/DeleteDBClusterParameterGroupCommand";
import {
  DeleteDBClusterSnapshotCommand,
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
} from "./commands/DeleteDBClusterSnapshotCommand";
import {
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBInstanceAutomatedBackupCommandInput,
  DeleteDBInstanceAutomatedBackupCommandOutput,
} from "./commands/DeleteDBInstanceAutomatedBackupCommand";
import {
  DeleteDBInstanceCommand,
  DeleteDBInstanceCommandInput,
  DeleteDBInstanceCommandOutput,
} from "./commands/DeleteDBInstanceCommand";
import {
  DeleteDBParameterGroupCommand,
  DeleteDBParameterGroupCommandInput,
  DeleteDBParameterGroupCommandOutput,
} from "./commands/DeleteDBParameterGroupCommand";
import {
  DeleteDBProxyCommand,
  DeleteDBProxyCommandInput,
  DeleteDBProxyCommandOutput,
} from "./commands/DeleteDBProxyCommand";
import {
  DeleteDBProxyEndpointCommand,
  DeleteDBProxyEndpointCommandInput,
  DeleteDBProxyEndpointCommandOutput,
} from "./commands/DeleteDBProxyEndpointCommand";
import {
  DeleteDBSecurityGroupCommand,
  DeleteDBSecurityGroupCommandInput,
  DeleteDBSecurityGroupCommandOutput,
} from "./commands/DeleteDBSecurityGroupCommand";
import {
  DeleteDBSnapshotCommand,
  DeleteDBSnapshotCommandInput,
  DeleteDBSnapshotCommandOutput,
} from "./commands/DeleteDBSnapshotCommand";
import {
  DeleteDBSubnetGroupCommand,
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
} from "./commands/DeleteDBSubnetGroupCommand";
import {
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteGlobalClusterCommand,
  DeleteGlobalClusterCommandInput,
  DeleteGlobalClusterCommandOutput,
} from "./commands/DeleteGlobalClusterCommand";
import {
  DeleteOptionGroupCommand,
  DeleteOptionGroupCommandInput,
  DeleteOptionGroupCommandOutput,
} from "./commands/DeleteOptionGroupCommand";
import {
  DeregisterDBProxyTargetsCommand,
  DeregisterDBProxyTargetsCommandInput,
  DeregisterDBProxyTargetsCommandOutput,
} from "./commands/DeregisterDBProxyTargetsCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeBlueGreenDeploymentsCommand,
  DescribeBlueGreenDeploymentsCommandInput,
  DescribeBlueGreenDeploymentsCommandOutput,
} from "./commands/DescribeBlueGreenDeploymentsCommand";
import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
} from "./commands/DescribeDBClusterBacktracksCommand";
import {
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "./commands/DescribeDBClusterEndpointsCommand";
import {
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "./commands/DescribeDBClusterParameterGroupsCommand";
import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "./commands/DescribeDBClusterParametersCommand";
import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "./commands/DescribeDBClustersCommand";
import {
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "./commands/DescribeDBClusterSnapshotsCommand";
import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "./commands/DescribeDBEngineVersionsCommand";
import {
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
} from "./commands/DescribeDBInstanceAutomatedBackupsCommand";
import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "./commands/DescribeDBInstancesCommand";
import {
  DescribeDBLogFilesCommand,
  DescribeDBLogFilesCommandInput,
  DescribeDBLogFilesCommandOutput,
} from "./commands/DescribeDBLogFilesCommand";
import {
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "./commands/DescribeDBParameterGroupsCommand";
import {
  DescribeDBParametersCommand,
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "./commands/DescribeDBParametersCommand";
import {
  DescribeDBProxiesCommand,
  DescribeDBProxiesCommandInput,
  DescribeDBProxiesCommandOutput,
} from "./commands/DescribeDBProxiesCommand";
import {
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
} from "./commands/DescribeDBProxyEndpointsCommand";
import {
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput,
} from "./commands/DescribeDBProxyTargetGroupsCommand";
import {
  DescribeDBProxyTargetsCommand,
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput,
} from "./commands/DescribeDBProxyTargetsCommand";
import {
  DescribeDBSecurityGroupsCommand,
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "./commands/DescribeDBSecurityGroupsCommand";
import {
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotAttributesCommandInput,
  DescribeDBSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBSnapshotAttributesCommand";
import {
  DescribeDBSnapshotsCommand,
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
} from "./commands/DescribeDBSnapshotsCommand";
import {
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "./commands/DescribeDBSubnetGroupsCommand";
import {
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "./commands/DescribeEngineDefaultClusterParametersCommand";
import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "./commands/DescribeGlobalClustersCommand";
import {
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
} from "./commands/DescribeOptionGroupOptionsCommand";
import {
  DescribeOptionGroupsCommand,
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
} from "./commands/DescribeOptionGroupsCommand";
import {
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
} from "./commands/DescribeReservedDBInstancesCommand";
import {
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
} from "./commands/DescribeReservedDBInstancesOfferingsCommand";
import {
  DescribeSourceRegionsCommand,
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
} from "./commands/DescribeSourceRegionsCommand";
import {
  DescribeValidDBInstanceModificationsCommand,
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "./commands/DescribeValidDBInstanceModificationsCommand";
import {
  DownloadDBLogFilePortionCommand,
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "./commands/DownloadDBLogFilePortionCommand";
import {
  FailoverDBClusterCommand,
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
} from "./commands/FailoverDBClusterCommand";
import {
  FailoverGlobalClusterCommand,
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
} from "./commands/FailoverGlobalClusterCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyActivityStreamCommand,
  ModifyActivityStreamCommandInput,
  ModifyActivityStreamCommandOutput,
} from "./commands/ModifyActivityStreamCommand";
import {
  ModifyCertificatesCommand,
  ModifyCertificatesCommandInput,
  ModifyCertificatesCommandOutput,
} from "./commands/ModifyCertificatesCommand";
import {
  ModifyCurrentDBClusterCapacityCommand,
  ModifyCurrentDBClusterCapacityCommandInput,
  ModifyCurrentDBClusterCapacityCommandOutput,
} from "./commands/ModifyCurrentDBClusterCapacityCommand";
import {
  ModifyCustomDBEngineVersionCommand,
  ModifyCustomDBEngineVersionCommandInput,
  ModifyCustomDBEngineVersionCommandOutput,
} from "./commands/ModifyCustomDBEngineVersionCommand";
import {
  ModifyDBClusterCommand,
  ModifyDBClusterCommandInput,
  ModifyDBClusterCommandOutput,
} from "./commands/ModifyDBClusterCommand";
import {
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
} from "./commands/ModifyDBClusterEndpointCommand";
import {
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
} from "./commands/ModifyDBClusterParameterGroupCommand";
import {
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
} from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import {
  ModifyDBInstanceCommand,
  ModifyDBInstanceCommandInput,
  ModifyDBInstanceCommandOutput,
} from "./commands/ModifyDBInstanceCommand";
import {
  ModifyDBParameterGroupCommand,
  ModifyDBParameterGroupCommandInput,
  ModifyDBParameterGroupCommandOutput,
} from "./commands/ModifyDBParameterGroupCommand";
import {
  ModifyDBProxyCommand,
  ModifyDBProxyCommandInput,
  ModifyDBProxyCommandOutput,
} from "./commands/ModifyDBProxyCommand";
import {
  ModifyDBProxyEndpointCommand,
  ModifyDBProxyEndpointCommandInput,
  ModifyDBProxyEndpointCommandOutput,
} from "./commands/ModifyDBProxyEndpointCommand";
import {
  ModifyDBProxyTargetGroupCommand,
  ModifyDBProxyTargetGroupCommandInput,
  ModifyDBProxyTargetGroupCommandOutput,
} from "./commands/ModifyDBProxyTargetGroupCommand";
import {
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSnapshotAttributeCommandInput,
  ModifyDBSnapshotAttributeCommandOutput,
} from "./commands/ModifyDBSnapshotAttributeCommand";
import {
  ModifyDBSnapshotCommand,
  ModifyDBSnapshotCommandInput,
  ModifyDBSnapshotCommandOutput,
} from "./commands/ModifyDBSnapshotCommand";
import {
  ModifyDBSubnetGroupCommand,
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
} from "./commands/ModifyDBSubnetGroupCommand";
import {
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyGlobalClusterCommand,
  ModifyGlobalClusterCommandInput,
  ModifyGlobalClusterCommandOutput,
} from "./commands/ModifyGlobalClusterCommand";
import {
  ModifyOptionGroupCommand,
  ModifyOptionGroupCommandInput,
  ModifyOptionGroupCommandOutput,
} from "./commands/ModifyOptionGroupCommand";
import {
  PromoteReadReplicaCommand,
  PromoteReadReplicaCommandInput,
  PromoteReadReplicaCommandOutput,
} from "./commands/PromoteReadReplicaCommand";
import {
  PromoteReadReplicaDBClusterCommand,
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
} from "./commands/PromoteReadReplicaDBClusterCommand";
import {
  PurchaseReservedDBInstancesOfferingCommand,
  PurchaseReservedDBInstancesOfferingCommandInput,
  PurchaseReservedDBInstancesOfferingCommandOutput,
} from "./commands/PurchaseReservedDBInstancesOfferingCommand";
import {
  RebootDBClusterCommand,
  RebootDBClusterCommandInput,
  RebootDBClusterCommandOutput,
} from "./commands/RebootDBClusterCommand";
import {
  RebootDBInstanceCommand,
  RebootDBInstanceCommandInput,
  RebootDBInstanceCommandOutput,
} from "./commands/RebootDBInstanceCommand";
import {
  RegisterDBProxyTargetsCommand,
  RegisterDBProxyTargetsCommandInput,
  RegisterDBProxyTargetsCommandOutput,
} from "./commands/RegisterDBProxyTargetsCommand";
import {
  RemoveFromGlobalClusterCommand,
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
} from "./commands/RemoveFromGlobalClusterCommand";
import {
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
} from "./commands/RemoveRoleFromDBClusterCommand";
import {
  RemoveRoleFromDBInstanceCommand,
  RemoveRoleFromDBInstanceCommandInput,
  RemoveRoleFromDBInstanceCommandOutput,
} from "./commands/RemoveRoleFromDBInstanceCommand";
import {
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
} from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetDBClusterParameterGroupCommand,
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
} from "./commands/ResetDBClusterParameterGroupCommand";
import {
  ResetDBParameterGroupCommand,
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
} from "./commands/ResetDBParameterGroupCommand";
import {
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromS3CommandInput,
  RestoreDBClusterFromS3CommandOutput,
} from "./commands/RestoreDBClusterFromS3Command";
import {
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
} from "./commands/RestoreDBClusterFromSnapshotCommand";
import {
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
} from "./commands/RestoreDBClusterToPointInTimeCommand";
import {
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromDBSnapshotCommandInput,
  RestoreDBInstanceFromDBSnapshotCommandOutput,
} from "./commands/RestoreDBInstanceFromDBSnapshotCommand";
import {
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceFromS3CommandInput,
  RestoreDBInstanceFromS3CommandOutput,
} from "./commands/RestoreDBInstanceFromS3Command";
import {
  RestoreDBInstanceToPointInTimeCommand,
  RestoreDBInstanceToPointInTimeCommandInput,
  RestoreDBInstanceToPointInTimeCommandOutput,
} from "./commands/RestoreDBInstanceToPointInTimeCommand";
import {
  RevokeDBSecurityGroupIngressCommand,
  RevokeDBSecurityGroupIngressCommandInput,
  RevokeDBSecurityGroupIngressCommandOutput,
} from "./commands/RevokeDBSecurityGroupIngressCommand";
import {
  StartActivityStreamCommand,
  StartActivityStreamCommandInput,
  StartActivityStreamCommandOutput,
} from "./commands/StartActivityStreamCommand";
import {
  StartDBClusterCommand,
  StartDBClusterCommandInput,
  StartDBClusterCommandOutput,
} from "./commands/StartDBClusterCommand";
import {
  StartDBInstanceAutomatedBackupsReplicationCommand,
  StartDBInstanceAutomatedBackupsReplicationCommandInput,
  StartDBInstanceAutomatedBackupsReplicationCommandOutput,
} from "./commands/StartDBInstanceAutomatedBackupsReplicationCommand";
import {
  StartDBInstanceCommand,
  StartDBInstanceCommandInput,
  StartDBInstanceCommandOutput,
} from "./commands/StartDBInstanceCommand";
import {
  StartExportTaskCommand,
  StartExportTaskCommandInput,
  StartExportTaskCommandOutput,
} from "./commands/StartExportTaskCommand";
import {
  StopActivityStreamCommand,
  StopActivityStreamCommandInput,
  StopActivityStreamCommandOutput,
} from "./commands/StopActivityStreamCommand";
import {
  StopDBClusterCommand,
  StopDBClusterCommandInput,
  StopDBClusterCommandOutput,
} from "./commands/StopDBClusterCommand";
import {
  StopDBInstanceAutomatedBackupsReplicationCommand,
  StopDBInstanceAutomatedBackupsReplicationCommandInput,
  StopDBInstanceAutomatedBackupsReplicationCommandOutput,
} from "./commands/StopDBInstanceAutomatedBackupsReplicationCommand";
import {
  StopDBInstanceCommand,
  StopDBInstanceCommandInput,
  StopDBInstanceCommandOutput,
} from "./commands/StopDBInstanceCommand";
import {
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverBlueGreenDeploymentCommandInput,
  SwitchoverBlueGreenDeploymentCommandOutput,
} from "./commands/SwitchoverBlueGreenDeploymentCommand";
import {
  SwitchoverReadReplicaCommand,
  SwitchoverReadReplicaCommandInput,
  SwitchoverReadReplicaCommandOutput,
} from "./commands/SwitchoverReadReplicaCommand";
import { RDSClient, RDSClientConfig } from "./RDSClient";

const commands = {
  AddRoleToDBClusterCommand,
  AddRoleToDBInstanceCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  AuthorizeDBSecurityGroupIngressCommand,
  BacktrackDBClusterCommand,
  CancelExportTaskCommand,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CopyDBSnapshotCommand,
  CopyOptionGroupCommand,
  CreateBlueGreenDeploymentCommand,
  CreateCustomDBEngineVersionCommand,
  CreateDBClusterCommand,
  CreateDBClusterEndpointCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBInstanceReadReplicaCommand,
  CreateDBParameterGroupCommand,
  CreateDBProxyCommand,
  CreateDBProxyEndpointCommand,
  CreateDBSecurityGroupCommand,
  CreateDBSnapshotCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  CreateOptionGroupCommand,
  DeleteBlueGreenDeploymentCommand,
  DeleteCustomDBEngineVersionCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBProxyCommand,
  DeleteDBProxyEndpointCommand,
  DeleteDBSecurityGroupCommand,
  DeleteDBSnapshotCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DeleteOptionGroupCommand,
  DeregisterDBProxyTargetsCommand,
  DescribeAccountAttributesCommand,
  DescribeBlueGreenDeploymentsCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClustersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstancesCommand,
  DescribeDBLogFilesCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBProxiesCommand,
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetsCommand,
  DescribeDBSecurityGroupsCommand,
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotsCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventsCommand,
  DescribeEventSubscriptionsCommand,
  DescribeExportTasksCommand,
  DescribeGlobalClustersCommand,
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupsCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeSourceRegionsCommand,
  DescribeValidDBInstanceModificationsCommand,
  DownloadDBLogFilePortionCommand,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  ListTagsForResourceCommand,
  ModifyActivityStreamCommand,
  ModifyCertificatesCommand,
  ModifyCurrentDBClusterCapacityCommand,
  ModifyCustomDBEngineVersionCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBParameterGroupCommand,
  ModifyDBProxyCommand,
  ModifyDBProxyEndpointCommand,
  ModifyDBProxyTargetGroupCommand,
  ModifyDBSnapshotCommand,
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  ModifyOptionGroupCommand,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBClusterCommand,
  PurchaseReservedDBInstancesOfferingCommand,
  RebootDBClusterCommand,
  RebootDBInstanceCommand,
  RegisterDBProxyTargetsCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBInstanceCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceToPointInTimeCommand,
  RevokeDBSecurityGroupIngressCommand,
  StartActivityStreamCommand,
  StartDBClusterCommand,
  StartDBInstanceCommand,
  StartDBInstanceAutomatedBackupsReplicationCommand,
  StartExportTaskCommand,
  StopActivityStreamCommand,
  StopDBClusterCommand,
  StopDBInstanceCommand,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverReadReplicaCommand,
};

export interface RDS {
  /**
   * @see {@link AddRoleToDBClusterCommand}
   */
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToDBClusterCommandOutput>;
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link AddRoleToDBInstanceCommand}
   */
  addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToDBInstanceCommandOutput>;
  addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void
  ): void;
  addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link AddSourceIdentifierToSubscriptionCommand}
   */
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeDBSecurityGroupIngressCommand}
   */
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput>;
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link BacktrackDBClusterCommand}
   */
  backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BacktrackDBClusterCommandOutput>;
  backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void
  ): void;
  backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportTaskCommandOutput>;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterParameterGroupCommand}
   */
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterParameterGroupCommandOutput>;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterSnapshotCommand}
   */
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterSnapshotCommandOutput>;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBParameterGroupCommand}
   */
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBParameterGroupCommandOutput>;
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBSnapshotCommand}
   */
  copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBSnapshotCommandOutput>;
  copyDBSnapshot(args: CopyDBSnapshotCommandInput, cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void): void;
  copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyOptionGroupCommand}
   */
  copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyOptionGroupCommandOutput>;
  copyOptionGroup(args: CopyOptionGroupCommandInput, cb: (err: any, data?: CopyOptionGroupCommandOutput) => void): void;
  copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBlueGreenDeploymentCommand}
   */
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBlueGreenDeploymentCommandOutput>;
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void
  ): void;
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomDBEngineVersionCommand}
   */
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomDBEngineVersionCommandOutput>;
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void
  ): void;
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterCommand}
   */
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterCommandOutput>;
  createDBCluster(args: CreateDBClusterCommandInput, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterEndpointCommand}
   */
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterEndpointCommandOutput>;
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterParameterGroupCommand}
   */
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterParameterGroupCommandOutput>;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterSnapshotCommand}
   */
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterSnapshotCommandOutput>;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBInstanceCommand}
   */
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBInstanceCommandOutput>;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBInstanceReadReplicaCommand}
   */
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBInstanceReadReplicaCommandOutput>;
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void
  ): void;
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBParameterGroupCommand}
   */
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBParameterGroupCommandOutput>;
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBProxyCommand}
   */
  createDBProxy(args: CreateDBProxyCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBProxyCommandOutput>;
  createDBProxy(args: CreateDBProxyCommandInput, cb: (err: any, data?: CreateDBProxyCommandOutput) => void): void;
  createDBProxy(
    args: CreateDBProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBProxyEndpointCommand}
   */
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBProxyEndpointCommandOutput>;
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    cb: (err: any, data?: CreateDBProxyEndpointCommandOutput) => void
  ): void;
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBProxyEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSecurityGroupCommand}
   */
  createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSecurityGroupCommandOutput>;
  createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void
  ): void;
  createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSnapshotCommand}
   */
  createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSnapshotCommandOutput>;
  createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void
  ): void;
  createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSubnetGroupCommand}
   */
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSubnetGroupCommandOutput>;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalClusterCommand}
   */
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalClusterCommandOutput>;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOptionGroupCommand}
   */
  createOptionGroup(
    args: CreateOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOptionGroupCommandOutput>;
  createOptionGroup(
    args: CreateOptionGroupCommandInput,
    cb: (err: any, data?: CreateOptionGroupCommandOutput) => void
  ): void;
  createOptionGroup(
    args: CreateOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBlueGreenDeploymentCommand}
   */
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBlueGreenDeploymentCommandOutput>;
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void
  ): void;
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomDBEngineVersionCommand}
   */
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomDBEngineVersionCommandOutput>;
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void
  ): void;
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterCommand}
   */
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterCommandOutput>;
  deleteDBCluster(args: DeleteDBClusterCommandInput, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterEndpointCommand}
   */
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterEndpointCommandOutput>;
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterParameterGroupCommand}
   */
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterParameterGroupCommandOutput>;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterSnapshotCommand}
   */
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterSnapshotCommandOutput>;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBInstanceCommand}
   */
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBInstanceCommandOutput>;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBInstanceAutomatedBackupCommand}
   */
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBInstanceAutomatedBackupCommandOutput>;
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void
  ): void;
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBParameterGroupCommand}
   */
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBParameterGroupCommandOutput>;
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBProxyCommand}
   */
  deleteDBProxy(args: DeleteDBProxyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBProxyCommandOutput>;
  deleteDBProxy(args: DeleteDBProxyCommandInput, cb: (err: any, data?: DeleteDBProxyCommandOutput) => void): void;
  deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBProxyEndpointCommand}
   */
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBProxyEndpointCommandOutput>;
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    cb: (err: any, data?: DeleteDBProxyEndpointCommandOutput) => void
  ): void;
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBProxyEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSecurityGroupCommand}
   */
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSecurityGroupCommandOutput>;
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void
  ): void;
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSnapshotCommand}
   */
  deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSnapshotCommandOutput>;
  deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void
  ): void;
  deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSubnetGroupCommand}
   */
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSubnetGroupCommandOutput>;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalClusterCommand}
   */
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalClusterCommandOutput>;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOptionGroupCommand}
   */
  deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOptionGroupCommandOutput>;
  deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void
  ): void;
  deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterDBProxyTargetsCommand}
   */
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterDBProxyTargetsCommandOutput>;
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void
  ): void;
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBlueGreenDeploymentsCommand}
   */
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBlueGreenDeploymentsCommandOutput>;
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    cb: (err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void
  ): void;
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificatesCommand}
   */
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificatesCommandOutput>;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterBacktracksCommand}
   */
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterBacktracksCommandOutput>;
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void
  ): void;
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   */
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterEndpointsCommandOutput>;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   */
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   */
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParametersCommandOutput>;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClustersCommand}
   */
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClustersCommandOutput>;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotAttributesCommand}
   */
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   */
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   */
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBEngineVersionsCommandOutput>;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBInstanceAutomatedBackupsCommand}
   */
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput>;
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void
  ): void;
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBInstancesCommand}
   */
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBInstancesCommandOutput>;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBLogFilesCommand}
   */
  describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBLogFilesCommandOutput>;
  describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void
  ): void;
  describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   */
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBParameterGroupsCommandOutput>;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBParametersCommand}
   */
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBParametersCommandOutput>;
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxiesCommand}
   */
  describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxiesCommandOutput>;
  describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void
  ): void;
  describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxyEndpointsCommand}
   */
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxyEndpointsCommandOutput>;
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void
  ): void;
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxyTargetGroupsCommand}
   */
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxyTargetGroupsCommandOutput>;
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void
  ): void;
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxyTargetsCommand}
   */
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxyTargetsCommandOutput>;
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void
  ): void;
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSecurityGroupsCommand}
   */
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSecurityGroupsCommandOutput>;
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void
  ): void;
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSnapshotAttributesCommand}
   */
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSnapshotAttributesCommandOutput>;
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void
  ): void;
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   */
  describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSnapshotsCommandOutput>;
  describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void
  ): void;
  describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   */
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSubnetGroupsCommandOutput>;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   */
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultParametersCommandOutput>;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   */
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalClustersCommandOutput>;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOptionGroupOptionsCommand}
   */
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptionGroupOptionsCommandOutput>;
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void
  ): void;
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOptionGroupsCommand}
   */
  describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptionGroupsCommandOutput>;
  describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void
  ): void;
  describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   */
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedDBInstancesCommand}
   */
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedDBInstancesCommandOutput>;
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void
  ): void;
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedDBInstancesOfferingsCommand}
   */
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedDBInstancesOfferingsCommandOutput>;
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void
  ): void;
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceRegionsCommand}
   */
  describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSourceRegionsCommandOutput>;
  describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void
  ): void;
  describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeValidDBInstanceModificationsCommand}
   */
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput>;
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DownloadDBLogFilePortionCommand}
   */
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DownloadDBLogFilePortionCommandOutput>;
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void
  ): void;
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverDBClusterCommand}
   */
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverDBClusterCommandOutput>;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverGlobalClusterCommand}
   */
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverGlobalClusterCommandOutput>;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyActivityStreamCommand}
   */
  modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyActivityStreamCommandOutput>;
  modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    cb: (err: any, data?: ModifyActivityStreamCommandOutput) => void
  ): void;
  modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyActivityStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCertificatesCommand}
   */
  modifyCertificates(
    args: ModifyCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCertificatesCommandOutput>;
  modifyCertificates(
    args: ModifyCertificatesCommandInput,
    cb: (err: any, data?: ModifyCertificatesCommandOutput) => void
  ): void;
  modifyCertificates(
    args: ModifyCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCurrentDBClusterCapacityCommand}
   */
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCurrentDBClusterCapacityCommandOutput>;
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void
  ): void;
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCustomDBEngineVersionCommand}
   */
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCustomDBEngineVersionCommandOutput>;
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void
  ): void;
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterCommand}
   */
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterCommandOutput>;
  modifyDBCluster(args: ModifyDBClusterCommandInput, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterEndpointCommand}
   */
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterEndpointCommandOutput>;
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterParameterGroupCommand}
   */
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterParameterGroupCommandOutput>;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterSnapshotAttributeCommand}
   */
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBInstanceCommand}
   */
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBInstanceCommandOutput>;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBParameterGroupCommand}
   */
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBParameterGroupCommandOutput>;
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBProxyCommand}
   */
  modifyDBProxy(args: ModifyDBProxyCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBProxyCommandOutput>;
  modifyDBProxy(args: ModifyDBProxyCommandInput, cb: (err: any, data?: ModifyDBProxyCommandOutput) => void): void;
  modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBProxyEndpointCommand}
   */
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBProxyEndpointCommandOutput>;
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    cb: (err: any, data?: ModifyDBProxyEndpointCommandOutput) => void
  ): void;
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBProxyEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBProxyTargetGroupCommand}
   */
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBProxyTargetGroupCommandOutput>;
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void
  ): void;
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSnapshotCommand}
   */
  modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSnapshotCommandOutput>;
  modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void
  ): void;
  modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSnapshotAttributeCommand}
   */
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSnapshotAttributeCommandOutput>;
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void
  ): void;
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSubnetGroupCommand}
   */
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSubnetGroupCommandOutput>;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyGlobalClusterCommand}
   */
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyGlobalClusterCommandOutput>;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyOptionGroupCommand}
   */
  modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyOptionGroupCommandOutput>;
  modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void
  ): void;
  modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteReadReplicaCommand}
   */
  promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteReadReplicaCommandOutput>;
  promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void
  ): void;
  promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteReadReplicaDBClusterCommand}
   */
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteReadReplicaDBClusterCommandOutput>;
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedDBInstancesOfferingCommand}
   */
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedDBInstancesOfferingCommandOutput>;
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void
  ): void;
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDBClusterCommand}
   */
  rebootDBCluster(
    args: RebootDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDBClusterCommandOutput>;
  rebootDBCluster(args: RebootDBClusterCommandInput, cb: (err: any, data?: RebootDBClusterCommandOutput) => void): void;
  rebootDBCluster(
    args: RebootDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDBInstanceCommand}
   */
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDBInstanceCommandOutput>;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDBProxyTargetsCommand}
   */
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDBProxyTargetsCommandOutput>;
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void
  ): void;
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFromGlobalClusterCommand}
   */
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFromGlobalClusterCommandOutput>;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRoleFromDBClusterCommand}
   */
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromDBClusterCommandOutput>;
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRoleFromDBInstanceCommand}
   */
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromDBInstanceCommandOutput>;
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void
  ): void;
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveSourceIdentifierFromSubscriptionCommand}
   */
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDBClusterParameterGroupCommand}
   */
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDBClusterParameterGroupCommandOutput>;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDBParameterGroupCommand}
   */
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDBParameterGroupCommandOutput>;
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterFromS3Command}
   */
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterFromS3CommandOutput>;
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void
  ): void;
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterFromSnapshotCommand}
   */
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterToPointInTimeCommand}
   */
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBInstanceFromDBSnapshotCommand}
   */
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput>;
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void
  ): void;
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBInstanceFromS3Command}
   */
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBInstanceFromS3CommandOutput>;
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void
  ): void;
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBInstanceToPointInTimeCommand}
   */
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBInstanceToPointInTimeCommandOutput>;
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void
  ): void;
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeDBSecurityGroupIngressCommand}
   */
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeDBSecurityGroupIngressCommandOutput>;
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link StartActivityStreamCommand}
   */
  startActivityStream(
    args: StartActivityStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartActivityStreamCommandOutput>;
  startActivityStream(
    args: StartActivityStreamCommandInput,
    cb: (err: any, data?: StartActivityStreamCommandOutput) => void
  ): void;
  startActivityStream(
    args: StartActivityStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartActivityStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBClusterCommand}
   */
  startDBCluster(
    args: StartDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBClusterCommandOutput>;
  startDBCluster(args: StartDBClusterCommandInput, cb: (err: any, data?: StartDBClusterCommandOutput) => void): void;
  startDBCluster(
    args: StartDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBInstanceCommand}
   */
  startDBInstance(
    args: StartDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBInstanceCommandOutput>;
  startDBInstance(args: StartDBInstanceCommandInput, cb: (err: any, data?: StartDBInstanceCommandOutput) => void): void;
  startDBInstance(
    args: StartDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBInstanceAutomatedBackupsReplicationCommand}
   */
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput>;
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    cb: (err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExportTaskCommand}
   */
  startExportTask(
    args: StartExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportTaskCommandOutput>;
  startExportTask(args: StartExportTaskCommandInput, cb: (err: any, data?: StartExportTaskCommandOutput) => void): void;
  startExportTask(
    args: StartExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopActivityStreamCommand}
   */
  stopActivityStream(
    args: StopActivityStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopActivityStreamCommandOutput>;
  stopActivityStream(
    args: StopActivityStreamCommandInput,
    cb: (err: any, data?: StopActivityStreamCommandOutput) => void
  ): void;
  stopActivityStream(
    args: StopActivityStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopActivityStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBClusterCommand}
   */
  stopDBCluster(args: StopDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<StopDBClusterCommandOutput>;
  stopDBCluster(args: StopDBClusterCommandInput, cb: (err: any, data?: StopDBClusterCommandOutput) => void): void;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBInstanceCommand}
   */
  stopDBInstance(
    args: StopDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDBInstanceCommandOutput>;
  stopDBInstance(args: StopDBInstanceCommandInput, cb: (err: any, data?: StopDBInstanceCommandOutput) => void): void;
  stopDBInstance(
    args: StopDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBInstanceAutomatedBackupsReplicationCommand}
   */
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput>;
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    cb: (err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverBlueGreenDeploymentCommand}
   */
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwitchoverBlueGreenDeploymentCommandOutput>;
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void
  ): void;
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverReadReplicaCommand}
   */
  switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwitchoverReadReplicaCommandOutput>;
  switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    cb: (err: any, data?: SwitchoverReadReplicaCommandOutput) => void
  ): void;
  switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwitchoverReadReplicaCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Relational Database Service</fullname>
 *          <p></p>
 *          <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and
 *           scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational
 *           database and manages common database administration tasks, freeing up developers to focus on what makes their applications
 *           and businesses unique.</p>
 *          <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server,
 *           Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools
 *           you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS
 *           automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS
 *           is flexible: you can scale your DB instance's compute resources and storage capacity to meet your
 *           application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for
 *           the resources you use.</p>
 *          <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface
 *           you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might
 *           require techniques such as polling or callback functions to determine when a command has been applied. In this
 *           reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot,
 *           or during the maintenance window. The reference structure is as follows, and we list following some related topics
 *           from the user guide.</p>
 *          <p>
 *             <b>Amazon RDS API Reference</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For the alphabetical list of API actions, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p>
 *             </li>
 *             <li>
 *                <p>For the alphabetical list of data types, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p>
 *             </li>
 *             <li>
 *                <p>For a list of common query parameters, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p>
 *             </li>
 *             <li>
 *                <p>For descriptions of the error codes, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon RDS User Guide</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For a summary of the Amazon RDS interfaces, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p>
 *             </li>
 *             <li>
 *                <p>For more information about how to use the Query API, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p>
 *             </li>
 *          </ul>
 */
export class RDS extends RDSClient implements RDS {}
createAggregatedClient(commands, RDS);
