// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AddRoleToDBClusterCommandInput,
  type AddRoleToDBClusterCommandOutput,
  AddRoleToDBClusterCommand,
} from "./commands/AddRoleToDBClusterCommand";
import {
  type AddRoleToDBInstanceCommandInput,
  type AddRoleToDBInstanceCommandOutput,
  AddRoleToDBInstanceCommand,
} from "./commands/AddRoleToDBInstanceCommand";
import {
  type AddSourceIdentifierToSubscriptionCommandInput,
  type AddSourceIdentifierToSubscriptionCommandOutput,
  AddSourceIdentifierToSubscriptionCommand,
} from "./commands/AddSourceIdentifierToSubscriptionCommand";
import {
  type AddTagsToResourceCommandInput,
  type AddTagsToResourceCommandOutput,
  AddTagsToResourceCommand,
} from "./commands/AddTagsToResourceCommand";
import {
  type ApplyPendingMaintenanceActionCommandInput,
  type ApplyPendingMaintenanceActionCommandOutput,
  ApplyPendingMaintenanceActionCommand,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  type AuthorizeDBSecurityGroupIngressCommandInput,
  type AuthorizeDBSecurityGroupIngressCommandOutput,
  AuthorizeDBSecurityGroupIngressCommand,
} from "./commands/AuthorizeDBSecurityGroupIngressCommand";
import {
  type BacktrackDBClusterCommandInput,
  type BacktrackDBClusterCommandOutput,
  BacktrackDBClusterCommand,
} from "./commands/BacktrackDBClusterCommand";
import {
  type CancelExportTaskCommandInput,
  type CancelExportTaskCommandOutput,
  CancelExportTaskCommand,
} from "./commands/CancelExportTaskCommand";
import {
  type CopyDBClusterParameterGroupCommandInput,
  type CopyDBClusterParameterGroupCommandOutput,
  CopyDBClusterParameterGroupCommand,
} from "./commands/CopyDBClusterParameterGroupCommand";
import {
  type CopyDBClusterSnapshotCommandInput,
  type CopyDBClusterSnapshotCommandOutput,
  CopyDBClusterSnapshotCommand,
} from "./commands/CopyDBClusterSnapshotCommand";
import {
  type CopyDBParameterGroupCommandInput,
  type CopyDBParameterGroupCommandOutput,
  CopyDBParameterGroupCommand,
} from "./commands/CopyDBParameterGroupCommand";
import {
  type CopyDBSnapshotCommandInput,
  type CopyDBSnapshotCommandOutput,
  CopyDBSnapshotCommand,
} from "./commands/CopyDBSnapshotCommand";
import {
  type CopyOptionGroupCommandInput,
  type CopyOptionGroupCommandOutput,
  CopyOptionGroupCommand,
} from "./commands/CopyOptionGroupCommand";
import {
  type CreateBlueGreenDeploymentCommandInput,
  type CreateBlueGreenDeploymentCommandOutput,
  CreateBlueGreenDeploymentCommand,
} from "./commands/CreateBlueGreenDeploymentCommand";
import {
  type CreateCustomDBEngineVersionCommandInput,
  type CreateCustomDBEngineVersionCommandOutput,
  CreateCustomDBEngineVersionCommand,
} from "./commands/CreateCustomDBEngineVersionCommand";
import {
  type CreateDBClusterCommandInput,
  type CreateDBClusterCommandOutput,
  CreateDBClusterCommand,
} from "./commands/CreateDBClusterCommand";
import {
  type CreateDBClusterEndpointCommandInput,
  type CreateDBClusterEndpointCommandOutput,
  CreateDBClusterEndpointCommand,
} from "./commands/CreateDBClusterEndpointCommand";
import {
  type CreateDBClusterParameterGroupCommandInput,
  type CreateDBClusterParameterGroupCommandOutput,
  CreateDBClusterParameterGroupCommand,
} from "./commands/CreateDBClusterParameterGroupCommand";
import {
  type CreateDBClusterSnapshotCommandInput,
  type CreateDBClusterSnapshotCommandOutput,
  CreateDBClusterSnapshotCommand,
} from "./commands/CreateDBClusterSnapshotCommand";
import {
  type CreateDBInstanceCommandInput,
  type CreateDBInstanceCommandOutput,
  CreateDBInstanceCommand,
} from "./commands/CreateDBInstanceCommand";
import {
  type CreateDBInstanceReadReplicaCommandInput,
  type CreateDBInstanceReadReplicaCommandOutput,
  CreateDBInstanceReadReplicaCommand,
} from "./commands/CreateDBInstanceReadReplicaCommand";
import {
  type CreateDBParameterGroupCommandInput,
  type CreateDBParameterGroupCommandOutput,
  CreateDBParameterGroupCommand,
} from "./commands/CreateDBParameterGroupCommand";
import {
  type CreateDBProxyCommandInput,
  type CreateDBProxyCommandOutput,
  CreateDBProxyCommand,
} from "./commands/CreateDBProxyCommand";
import {
  type CreateDBProxyEndpointCommandInput,
  type CreateDBProxyEndpointCommandOutput,
  CreateDBProxyEndpointCommand,
} from "./commands/CreateDBProxyEndpointCommand";
import {
  type CreateDBSecurityGroupCommandInput,
  type CreateDBSecurityGroupCommandOutput,
  CreateDBSecurityGroupCommand,
} from "./commands/CreateDBSecurityGroupCommand";
import {
  type CreateDBShardGroupCommandInput,
  type CreateDBShardGroupCommandOutput,
  CreateDBShardGroupCommand,
} from "./commands/CreateDBShardGroupCommand";
import {
  type CreateDBSnapshotCommandInput,
  type CreateDBSnapshotCommandOutput,
  CreateDBSnapshotCommand,
} from "./commands/CreateDBSnapshotCommand";
import {
  type CreateDBSubnetGroupCommandInput,
  type CreateDBSubnetGroupCommandOutput,
  CreateDBSubnetGroupCommand,
} from "./commands/CreateDBSubnetGroupCommand";
import {
  type CreateEventSubscriptionCommandInput,
  type CreateEventSubscriptionCommandOutput,
  CreateEventSubscriptionCommand,
} from "./commands/CreateEventSubscriptionCommand";
import {
  type CreateGlobalClusterCommandInput,
  type CreateGlobalClusterCommandOutput,
  CreateGlobalClusterCommand,
} from "./commands/CreateGlobalClusterCommand";
import {
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationCommand,
} from "./commands/CreateIntegrationCommand";
import {
  type CreateOptionGroupCommandInput,
  type CreateOptionGroupCommandOutput,
  CreateOptionGroupCommand,
} from "./commands/CreateOptionGroupCommand";
import {
  type CreateTenantDatabaseCommandInput,
  type CreateTenantDatabaseCommandOutput,
  CreateTenantDatabaseCommand,
} from "./commands/CreateTenantDatabaseCommand";
import {
  type DeleteBlueGreenDeploymentCommandInput,
  type DeleteBlueGreenDeploymentCommandOutput,
  DeleteBlueGreenDeploymentCommand,
} from "./commands/DeleteBlueGreenDeploymentCommand";
import {
  type DeleteCustomDBEngineVersionCommandInput,
  type DeleteCustomDBEngineVersionCommandOutput,
  DeleteCustomDBEngineVersionCommand,
} from "./commands/DeleteCustomDBEngineVersionCommand";
import {
  type DeleteDBClusterAutomatedBackupCommandInput,
  type DeleteDBClusterAutomatedBackupCommandOutput,
  DeleteDBClusterAutomatedBackupCommand,
} from "./commands/DeleteDBClusterAutomatedBackupCommand";
import {
  type DeleteDBClusterCommandInput,
  type DeleteDBClusterCommandOutput,
  DeleteDBClusterCommand,
} from "./commands/DeleteDBClusterCommand";
import {
  type DeleteDBClusterEndpointCommandInput,
  type DeleteDBClusterEndpointCommandOutput,
  DeleteDBClusterEndpointCommand,
} from "./commands/DeleteDBClusterEndpointCommand";
import {
  type DeleteDBClusterParameterGroupCommandInput,
  type DeleteDBClusterParameterGroupCommandOutput,
  DeleteDBClusterParameterGroupCommand,
} from "./commands/DeleteDBClusterParameterGroupCommand";
import {
  type DeleteDBClusterSnapshotCommandInput,
  type DeleteDBClusterSnapshotCommandOutput,
  DeleteDBClusterSnapshotCommand,
} from "./commands/DeleteDBClusterSnapshotCommand";
import {
  type DeleteDBInstanceAutomatedBackupCommandInput,
  type DeleteDBInstanceAutomatedBackupCommandOutput,
  DeleteDBInstanceAutomatedBackupCommand,
} from "./commands/DeleteDBInstanceAutomatedBackupCommand";
import {
  type DeleteDBInstanceCommandInput,
  type DeleteDBInstanceCommandOutput,
  DeleteDBInstanceCommand,
} from "./commands/DeleteDBInstanceCommand";
import {
  type DeleteDBParameterGroupCommandInput,
  type DeleteDBParameterGroupCommandOutput,
  DeleteDBParameterGroupCommand,
} from "./commands/DeleteDBParameterGroupCommand";
import {
  type DeleteDBProxyCommandInput,
  type DeleteDBProxyCommandOutput,
  DeleteDBProxyCommand,
} from "./commands/DeleteDBProxyCommand";
import {
  type DeleteDBProxyEndpointCommandInput,
  type DeleteDBProxyEndpointCommandOutput,
  DeleteDBProxyEndpointCommand,
} from "./commands/DeleteDBProxyEndpointCommand";
import {
  type DeleteDBSecurityGroupCommandInput,
  type DeleteDBSecurityGroupCommandOutput,
  DeleteDBSecurityGroupCommand,
} from "./commands/DeleteDBSecurityGroupCommand";
import {
  type DeleteDBShardGroupCommandInput,
  type DeleteDBShardGroupCommandOutput,
  DeleteDBShardGroupCommand,
} from "./commands/DeleteDBShardGroupCommand";
import {
  type DeleteDBSnapshotCommandInput,
  type DeleteDBSnapshotCommandOutput,
  DeleteDBSnapshotCommand,
} from "./commands/DeleteDBSnapshotCommand";
import {
  type DeleteDBSubnetGroupCommandInput,
  type DeleteDBSubnetGroupCommandOutput,
  DeleteDBSubnetGroupCommand,
} from "./commands/DeleteDBSubnetGroupCommand";
import {
  type DeleteEventSubscriptionCommandInput,
  type DeleteEventSubscriptionCommandOutput,
  DeleteEventSubscriptionCommand,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  type DeleteGlobalClusterCommandInput,
  type DeleteGlobalClusterCommandOutput,
  DeleteGlobalClusterCommand,
} from "./commands/DeleteGlobalClusterCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeleteOptionGroupCommandInput,
  type DeleteOptionGroupCommandOutput,
  DeleteOptionGroupCommand,
} from "./commands/DeleteOptionGroupCommand";
import {
  type DeleteTenantDatabaseCommandInput,
  type DeleteTenantDatabaseCommandOutput,
  DeleteTenantDatabaseCommand,
} from "./commands/DeleteTenantDatabaseCommand";
import {
  type DeregisterDBProxyTargetsCommandInput,
  type DeregisterDBProxyTargetsCommandOutput,
  DeregisterDBProxyTargetsCommand,
} from "./commands/DeregisterDBProxyTargetsCommand";
import {
  type DescribeAccountAttributesCommandInput,
  type DescribeAccountAttributesCommandOutput,
  DescribeAccountAttributesCommand,
} from "./commands/DescribeAccountAttributesCommand";
import {
  type DescribeBlueGreenDeploymentsCommandInput,
  type DescribeBlueGreenDeploymentsCommandOutput,
  DescribeBlueGreenDeploymentsCommand,
} from "./commands/DescribeBlueGreenDeploymentsCommand";
import {
  type DescribeCertificatesCommandInput,
  type DescribeCertificatesCommandOutput,
  DescribeCertificatesCommand,
} from "./commands/DescribeCertificatesCommand";
import {
  type DescribeDBClusterAutomatedBackupsCommandInput,
  type DescribeDBClusterAutomatedBackupsCommandOutput,
  DescribeDBClusterAutomatedBackupsCommand,
} from "./commands/DescribeDBClusterAutomatedBackupsCommand";
import {
  type DescribeDBClusterBacktracksCommandInput,
  type DescribeDBClusterBacktracksCommandOutput,
  DescribeDBClusterBacktracksCommand,
} from "./commands/DescribeDBClusterBacktracksCommand";
import {
  type DescribeDBClusterEndpointsCommandInput,
  type DescribeDBClusterEndpointsCommandOutput,
  DescribeDBClusterEndpointsCommand,
} from "./commands/DescribeDBClusterEndpointsCommand";
import {
  type DescribeDBClusterParameterGroupsCommandInput,
  type DescribeDBClusterParameterGroupsCommandOutput,
  DescribeDBClusterParameterGroupsCommand,
} from "./commands/DescribeDBClusterParameterGroupsCommand";
import {
  type DescribeDBClusterParametersCommandInput,
  type DescribeDBClusterParametersCommandOutput,
  DescribeDBClusterParametersCommand,
} from "./commands/DescribeDBClusterParametersCommand";
import {
  type DescribeDBClustersCommandInput,
  type DescribeDBClustersCommandOutput,
  DescribeDBClustersCommand,
} from "./commands/DescribeDBClustersCommand";
import {
  type DescribeDBClusterSnapshotAttributesCommandInput,
  type DescribeDBClusterSnapshotAttributesCommandOutput,
  DescribeDBClusterSnapshotAttributesCommand,
} from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  type DescribeDBClusterSnapshotsCommandInput,
  type DescribeDBClusterSnapshotsCommandOutput,
  DescribeDBClusterSnapshotsCommand,
} from "./commands/DescribeDBClusterSnapshotsCommand";
import {
  type DescribeDBEngineVersionsCommandInput,
  type DescribeDBEngineVersionsCommandOutput,
  DescribeDBEngineVersionsCommand,
} from "./commands/DescribeDBEngineVersionsCommand";
import {
  type DescribeDBInstanceAutomatedBackupsCommandInput,
  type DescribeDBInstanceAutomatedBackupsCommandOutput,
  DescribeDBInstanceAutomatedBackupsCommand,
} from "./commands/DescribeDBInstanceAutomatedBackupsCommand";
import {
  type DescribeDBInstancesCommandInput,
  type DescribeDBInstancesCommandOutput,
  DescribeDBInstancesCommand,
} from "./commands/DescribeDBInstancesCommand";
import {
  type DescribeDBLogFilesCommandInput,
  type DescribeDBLogFilesCommandOutput,
  DescribeDBLogFilesCommand,
} from "./commands/DescribeDBLogFilesCommand";
import {
  type DescribeDBMajorEngineVersionsCommandInput,
  type DescribeDBMajorEngineVersionsCommandOutput,
  DescribeDBMajorEngineVersionsCommand,
} from "./commands/DescribeDBMajorEngineVersionsCommand";
import {
  type DescribeDBParameterGroupsCommandInput,
  type DescribeDBParameterGroupsCommandOutput,
  DescribeDBParameterGroupsCommand,
} from "./commands/DescribeDBParameterGroupsCommand";
import {
  type DescribeDBParametersCommandInput,
  type DescribeDBParametersCommandOutput,
  DescribeDBParametersCommand,
} from "./commands/DescribeDBParametersCommand";
import {
  type DescribeDBProxiesCommandInput,
  type DescribeDBProxiesCommandOutput,
  DescribeDBProxiesCommand,
} from "./commands/DescribeDBProxiesCommand";
import {
  type DescribeDBProxyEndpointsCommandInput,
  type DescribeDBProxyEndpointsCommandOutput,
  DescribeDBProxyEndpointsCommand,
} from "./commands/DescribeDBProxyEndpointsCommand";
import {
  type DescribeDBProxyTargetGroupsCommandInput,
  type DescribeDBProxyTargetGroupsCommandOutput,
  DescribeDBProxyTargetGroupsCommand,
} from "./commands/DescribeDBProxyTargetGroupsCommand";
import {
  type DescribeDBProxyTargetsCommandInput,
  type DescribeDBProxyTargetsCommandOutput,
  DescribeDBProxyTargetsCommand,
} from "./commands/DescribeDBProxyTargetsCommand";
import {
  type DescribeDBRecommendationsCommandInput,
  type DescribeDBRecommendationsCommandOutput,
  DescribeDBRecommendationsCommand,
} from "./commands/DescribeDBRecommendationsCommand";
import {
  type DescribeDBSecurityGroupsCommandInput,
  type DescribeDBSecurityGroupsCommandOutput,
  DescribeDBSecurityGroupsCommand,
} from "./commands/DescribeDBSecurityGroupsCommand";
import {
  type DescribeDBShardGroupsCommandInput,
  type DescribeDBShardGroupsCommandOutput,
  DescribeDBShardGroupsCommand,
} from "./commands/DescribeDBShardGroupsCommand";
import {
  type DescribeDBSnapshotAttributesCommandInput,
  type DescribeDBSnapshotAttributesCommandOutput,
  DescribeDBSnapshotAttributesCommand,
} from "./commands/DescribeDBSnapshotAttributesCommand";
import {
  type DescribeDBSnapshotsCommandInput,
  type DescribeDBSnapshotsCommandOutput,
  DescribeDBSnapshotsCommand,
} from "./commands/DescribeDBSnapshotsCommand";
import {
  type DescribeDBSnapshotTenantDatabasesCommandInput,
  type DescribeDBSnapshotTenantDatabasesCommandOutput,
  DescribeDBSnapshotTenantDatabasesCommand,
} from "./commands/DescribeDBSnapshotTenantDatabasesCommand";
import {
  type DescribeDBSubnetGroupsCommandInput,
  type DescribeDBSubnetGroupsCommandOutput,
  DescribeDBSubnetGroupsCommand,
} from "./commands/DescribeDBSubnetGroupsCommand";
import {
  type DescribeEngineDefaultClusterParametersCommandInput,
  type DescribeEngineDefaultClusterParametersCommandOutput,
  DescribeEngineDefaultClusterParametersCommand,
} from "./commands/DescribeEngineDefaultClusterParametersCommand";
import {
  type DescribeEngineDefaultParametersCommandInput,
  type DescribeEngineDefaultParametersCommandOutput,
  DescribeEngineDefaultParametersCommand,
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  type DescribeEventCategoriesCommandInput,
  type DescribeEventCategoriesCommandOutput,
  DescribeEventCategoriesCommand,
} from "./commands/DescribeEventCategoriesCommand";
import {
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventsCommand,
} from "./commands/DescribeEventsCommand";
import {
  type DescribeEventSubscriptionsCommandInput,
  type DescribeEventSubscriptionsCommandOutput,
  DescribeEventSubscriptionsCommand,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  type DescribeExportTasksCommandInput,
  type DescribeExportTasksCommandOutput,
  DescribeExportTasksCommand,
} from "./commands/DescribeExportTasksCommand";
import {
  type DescribeGlobalClustersCommandInput,
  type DescribeGlobalClustersCommandOutput,
  DescribeGlobalClustersCommand,
} from "./commands/DescribeGlobalClustersCommand";
import {
  type DescribeIntegrationsCommandInput,
  type DescribeIntegrationsCommandOutput,
  DescribeIntegrationsCommand,
} from "./commands/DescribeIntegrationsCommand";
import {
  type DescribeOptionGroupOptionsCommandInput,
  type DescribeOptionGroupOptionsCommandOutput,
  DescribeOptionGroupOptionsCommand,
} from "./commands/DescribeOptionGroupOptionsCommand";
import {
  type DescribeOptionGroupsCommandInput,
  type DescribeOptionGroupsCommandOutput,
  DescribeOptionGroupsCommand,
} from "./commands/DescribeOptionGroupsCommand";
import {
  type DescribeOrderableDBInstanceOptionsCommandInput,
  type DescribeOrderableDBInstanceOptionsCommandOutput,
  DescribeOrderableDBInstanceOptionsCommand,
} from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  type DescribePendingMaintenanceActionsCommandInput,
  type DescribePendingMaintenanceActionsCommandOutput,
  DescribePendingMaintenanceActionsCommand,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  type DescribeReservedDBInstancesCommandInput,
  type DescribeReservedDBInstancesCommandOutput,
  DescribeReservedDBInstancesCommand,
} from "./commands/DescribeReservedDBInstancesCommand";
import {
  type DescribeReservedDBInstancesOfferingsCommandInput,
  type DescribeReservedDBInstancesOfferingsCommandOutput,
  DescribeReservedDBInstancesOfferingsCommand,
} from "./commands/DescribeReservedDBInstancesOfferingsCommand";
import {
  type DescribeServerlessV2PlatformVersionsCommandInput,
  type DescribeServerlessV2PlatformVersionsCommandOutput,
  DescribeServerlessV2PlatformVersionsCommand,
} from "./commands/DescribeServerlessV2PlatformVersionsCommand";
import {
  type DescribeSourceRegionsCommandInput,
  type DescribeSourceRegionsCommandOutput,
  DescribeSourceRegionsCommand,
} from "./commands/DescribeSourceRegionsCommand";
import {
  type DescribeTenantDatabasesCommandInput,
  type DescribeTenantDatabasesCommandOutput,
  DescribeTenantDatabasesCommand,
} from "./commands/DescribeTenantDatabasesCommand";
import {
  type DescribeValidDBInstanceModificationsCommandInput,
  type DescribeValidDBInstanceModificationsCommandOutput,
  DescribeValidDBInstanceModificationsCommand,
} from "./commands/DescribeValidDBInstanceModificationsCommand";
import {
  type DisableHttpEndpointCommandInput,
  type DisableHttpEndpointCommandOutput,
  DisableHttpEndpointCommand,
} from "./commands/DisableHttpEndpointCommand";
import {
  type DownloadDBLogFilePortionCommandInput,
  type DownloadDBLogFilePortionCommandOutput,
  DownloadDBLogFilePortionCommand,
} from "./commands/DownloadDBLogFilePortionCommand";
import {
  type EnableHttpEndpointCommandInput,
  type EnableHttpEndpointCommandOutput,
  EnableHttpEndpointCommand,
} from "./commands/EnableHttpEndpointCommand";
import {
  type FailoverDBClusterCommandInput,
  type FailoverDBClusterCommandOutput,
  FailoverDBClusterCommand,
} from "./commands/FailoverDBClusterCommand";
import {
  type FailoverGlobalClusterCommandInput,
  type FailoverGlobalClusterCommandOutput,
  FailoverGlobalClusterCommand,
} from "./commands/FailoverGlobalClusterCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ModifyActivityStreamCommandInput,
  type ModifyActivityStreamCommandOutput,
  ModifyActivityStreamCommand,
} from "./commands/ModifyActivityStreamCommand";
import {
  type ModifyCertificatesCommandInput,
  type ModifyCertificatesCommandOutput,
  ModifyCertificatesCommand,
} from "./commands/ModifyCertificatesCommand";
import {
  type ModifyCurrentDBClusterCapacityCommandInput,
  type ModifyCurrentDBClusterCapacityCommandOutput,
  ModifyCurrentDBClusterCapacityCommand,
} from "./commands/ModifyCurrentDBClusterCapacityCommand";
import {
  type ModifyCustomDBEngineVersionCommandInput,
  type ModifyCustomDBEngineVersionCommandOutput,
  ModifyCustomDBEngineVersionCommand,
} from "./commands/ModifyCustomDBEngineVersionCommand";
import {
  type ModifyDBClusterCommandInput,
  type ModifyDBClusterCommandOutput,
  ModifyDBClusterCommand,
} from "./commands/ModifyDBClusterCommand";
import {
  type ModifyDBClusterEndpointCommandInput,
  type ModifyDBClusterEndpointCommandOutput,
  ModifyDBClusterEndpointCommand,
} from "./commands/ModifyDBClusterEndpointCommand";
import {
  type ModifyDBClusterParameterGroupCommandInput,
  type ModifyDBClusterParameterGroupCommandOutput,
  ModifyDBClusterParameterGroupCommand,
} from "./commands/ModifyDBClusterParameterGroupCommand";
import {
  type ModifyDBClusterSnapshotAttributeCommandInput,
  type ModifyDBClusterSnapshotAttributeCommandOutput,
  ModifyDBClusterSnapshotAttributeCommand,
} from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import {
  type ModifyDBInstanceCommandInput,
  type ModifyDBInstanceCommandOutput,
  ModifyDBInstanceCommand,
} from "./commands/ModifyDBInstanceCommand";
import {
  type ModifyDBParameterGroupCommandInput,
  type ModifyDBParameterGroupCommandOutput,
  ModifyDBParameterGroupCommand,
} from "./commands/ModifyDBParameterGroupCommand";
import {
  type ModifyDBProxyCommandInput,
  type ModifyDBProxyCommandOutput,
  ModifyDBProxyCommand,
} from "./commands/ModifyDBProxyCommand";
import {
  type ModifyDBProxyEndpointCommandInput,
  type ModifyDBProxyEndpointCommandOutput,
  ModifyDBProxyEndpointCommand,
} from "./commands/ModifyDBProxyEndpointCommand";
import {
  type ModifyDBProxyTargetGroupCommandInput,
  type ModifyDBProxyTargetGroupCommandOutput,
  ModifyDBProxyTargetGroupCommand,
} from "./commands/ModifyDBProxyTargetGroupCommand";
import {
  type ModifyDBRecommendationCommandInput,
  type ModifyDBRecommendationCommandOutput,
  ModifyDBRecommendationCommand,
} from "./commands/ModifyDBRecommendationCommand";
import {
  type ModifyDBShardGroupCommandInput,
  type ModifyDBShardGroupCommandOutput,
  ModifyDBShardGroupCommand,
} from "./commands/ModifyDBShardGroupCommand";
import {
  type ModifyDBSnapshotAttributeCommandInput,
  type ModifyDBSnapshotAttributeCommandOutput,
  ModifyDBSnapshotAttributeCommand,
} from "./commands/ModifyDBSnapshotAttributeCommand";
import {
  type ModifyDBSnapshotCommandInput,
  type ModifyDBSnapshotCommandOutput,
  ModifyDBSnapshotCommand,
} from "./commands/ModifyDBSnapshotCommand";
import {
  type ModifyDBSubnetGroupCommandInput,
  type ModifyDBSubnetGroupCommandOutput,
  ModifyDBSubnetGroupCommand,
} from "./commands/ModifyDBSubnetGroupCommand";
import {
  type ModifyEventSubscriptionCommandInput,
  type ModifyEventSubscriptionCommandOutput,
  ModifyEventSubscriptionCommand,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  type ModifyGlobalClusterCommandInput,
  type ModifyGlobalClusterCommandOutput,
  ModifyGlobalClusterCommand,
} from "./commands/ModifyGlobalClusterCommand";
import {
  type ModifyIntegrationCommandInput,
  type ModifyIntegrationCommandOutput,
  ModifyIntegrationCommand,
} from "./commands/ModifyIntegrationCommand";
import {
  type ModifyOptionGroupCommandInput,
  type ModifyOptionGroupCommandOutput,
  ModifyOptionGroupCommand,
} from "./commands/ModifyOptionGroupCommand";
import {
  type ModifyTenantDatabaseCommandInput,
  type ModifyTenantDatabaseCommandOutput,
  ModifyTenantDatabaseCommand,
} from "./commands/ModifyTenantDatabaseCommand";
import {
  type PromoteReadReplicaCommandInput,
  type PromoteReadReplicaCommandOutput,
  PromoteReadReplicaCommand,
} from "./commands/PromoteReadReplicaCommand";
import {
  type PromoteReadReplicaDBClusterCommandInput,
  type PromoteReadReplicaDBClusterCommandOutput,
  PromoteReadReplicaDBClusterCommand,
} from "./commands/PromoteReadReplicaDBClusterCommand";
import {
  type PurchaseReservedDBInstancesOfferingCommandInput,
  type PurchaseReservedDBInstancesOfferingCommandOutput,
  PurchaseReservedDBInstancesOfferingCommand,
} from "./commands/PurchaseReservedDBInstancesOfferingCommand";
import {
  type RebootDBClusterCommandInput,
  type RebootDBClusterCommandOutput,
  RebootDBClusterCommand,
} from "./commands/RebootDBClusterCommand";
import {
  type RebootDBInstanceCommandInput,
  type RebootDBInstanceCommandOutput,
  RebootDBInstanceCommand,
} from "./commands/RebootDBInstanceCommand";
import {
  type RebootDBShardGroupCommandInput,
  type RebootDBShardGroupCommandOutput,
  RebootDBShardGroupCommand,
} from "./commands/RebootDBShardGroupCommand";
import {
  type RegisterDBProxyTargetsCommandInput,
  type RegisterDBProxyTargetsCommandOutput,
  RegisterDBProxyTargetsCommand,
} from "./commands/RegisterDBProxyTargetsCommand";
import {
  type RemoveFromGlobalClusterCommandInput,
  type RemoveFromGlobalClusterCommandOutput,
  RemoveFromGlobalClusterCommand,
} from "./commands/RemoveFromGlobalClusterCommand";
import {
  type RemoveRoleFromDBClusterCommandInput,
  type RemoveRoleFromDBClusterCommandOutput,
  RemoveRoleFromDBClusterCommand,
} from "./commands/RemoveRoleFromDBClusterCommand";
import {
  type RemoveRoleFromDBInstanceCommandInput,
  type RemoveRoleFromDBInstanceCommandOutput,
  RemoveRoleFromDBInstanceCommand,
} from "./commands/RemoveRoleFromDBInstanceCommand";
import {
  type RemoveSourceIdentifierFromSubscriptionCommandInput,
  type RemoveSourceIdentifierFromSubscriptionCommandOutput,
  RemoveSourceIdentifierFromSubscriptionCommand,
} from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import {
  type RemoveTagsFromResourceCommandInput,
  type RemoveTagsFromResourceCommandOutput,
  RemoveTagsFromResourceCommand,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  type ResetDBClusterParameterGroupCommandInput,
  type ResetDBClusterParameterGroupCommandOutput,
  ResetDBClusterParameterGroupCommand,
} from "./commands/ResetDBClusterParameterGroupCommand";
import {
  type ResetDBParameterGroupCommandInput,
  type ResetDBParameterGroupCommandOutput,
  ResetDBParameterGroupCommand,
} from "./commands/ResetDBParameterGroupCommand";
import {
  type RestoreDBClusterFromS3CommandInput,
  type RestoreDBClusterFromS3CommandOutput,
  RestoreDBClusterFromS3Command,
} from "./commands/RestoreDBClusterFromS3Command";
import {
  type RestoreDBClusterFromSnapshotCommandInput,
  type RestoreDBClusterFromSnapshotCommandOutput,
  RestoreDBClusterFromSnapshotCommand,
} from "./commands/RestoreDBClusterFromSnapshotCommand";
import {
  type RestoreDBClusterToPointInTimeCommandInput,
  type RestoreDBClusterToPointInTimeCommandOutput,
  RestoreDBClusterToPointInTimeCommand,
} from "./commands/RestoreDBClusterToPointInTimeCommand";
import {
  type RestoreDBInstanceFromDBSnapshotCommandInput,
  type RestoreDBInstanceFromDBSnapshotCommandOutput,
  RestoreDBInstanceFromDBSnapshotCommand,
} from "./commands/RestoreDBInstanceFromDBSnapshotCommand";
import {
  type RestoreDBInstanceFromS3CommandInput,
  type RestoreDBInstanceFromS3CommandOutput,
  RestoreDBInstanceFromS3Command,
} from "./commands/RestoreDBInstanceFromS3Command";
import {
  type RestoreDBInstanceToPointInTimeCommandInput,
  type RestoreDBInstanceToPointInTimeCommandOutput,
  RestoreDBInstanceToPointInTimeCommand,
} from "./commands/RestoreDBInstanceToPointInTimeCommand";
import {
  type RevokeDBSecurityGroupIngressCommandInput,
  type RevokeDBSecurityGroupIngressCommandOutput,
  RevokeDBSecurityGroupIngressCommand,
} from "./commands/RevokeDBSecurityGroupIngressCommand";
import {
  type StartActivityStreamCommandInput,
  type StartActivityStreamCommandOutput,
  StartActivityStreamCommand,
} from "./commands/StartActivityStreamCommand";
import {
  type StartDBClusterCommandInput,
  type StartDBClusterCommandOutput,
  StartDBClusterCommand,
} from "./commands/StartDBClusterCommand";
import {
  type StartDBInstanceAutomatedBackupsReplicationCommandInput,
  type StartDBInstanceAutomatedBackupsReplicationCommandOutput,
  StartDBInstanceAutomatedBackupsReplicationCommand,
} from "./commands/StartDBInstanceAutomatedBackupsReplicationCommand";
import {
  type StartDBInstanceCommandInput,
  type StartDBInstanceCommandOutput,
  StartDBInstanceCommand,
} from "./commands/StartDBInstanceCommand";
import {
  type StartExportTaskCommandInput,
  type StartExportTaskCommandOutput,
  StartExportTaskCommand,
} from "./commands/StartExportTaskCommand";
import {
  type StopActivityStreamCommandInput,
  type StopActivityStreamCommandOutput,
  StopActivityStreamCommand,
} from "./commands/StopActivityStreamCommand";
import {
  type StopDBClusterCommandInput,
  type StopDBClusterCommandOutput,
  StopDBClusterCommand,
} from "./commands/StopDBClusterCommand";
import {
  type StopDBInstanceAutomatedBackupsReplicationCommandInput,
  type StopDBInstanceAutomatedBackupsReplicationCommandOutput,
  StopDBInstanceAutomatedBackupsReplicationCommand,
} from "./commands/StopDBInstanceAutomatedBackupsReplicationCommand";
import {
  type StopDBInstanceCommandInput,
  type StopDBInstanceCommandOutput,
  StopDBInstanceCommand,
} from "./commands/StopDBInstanceCommand";
import {
  type SwitchoverBlueGreenDeploymentCommandInput,
  type SwitchoverBlueGreenDeploymentCommandOutput,
  SwitchoverBlueGreenDeploymentCommand,
} from "./commands/SwitchoverBlueGreenDeploymentCommand";
import {
  type SwitchoverGlobalClusterCommandInput,
  type SwitchoverGlobalClusterCommandOutput,
  SwitchoverGlobalClusterCommand,
} from "./commands/SwitchoverGlobalClusterCommand";
import {
  type SwitchoverReadReplicaCommandInput,
  type SwitchoverReadReplicaCommandOutput,
  SwitchoverReadReplicaCommand,
} from "./commands/SwitchoverReadReplicaCommand";
import type {
  DBClusterNotFoundFault,
  DBClusterSnapshotNotFoundFault,
  DBInstanceNotFoundFault,
  DBSnapshotNotFoundFault,
} from "./models/errors";
import type { RDSServiceException } from "./models/RDSServiceException";
import { paginateDescribeBlueGreenDeployments } from "./pagination/DescribeBlueGreenDeploymentsPaginator";
import { paginateDescribeCertificates } from "./pagination/DescribeCertificatesPaginator";
import { paginateDescribeDBClusterAutomatedBackups } from "./pagination/DescribeDBClusterAutomatedBackupsPaginator";
import { paginateDescribeDBClusterBacktracks } from "./pagination/DescribeDBClusterBacktracksPaginator";
import { paginateDescribeDBClusterEndpoints } from "./pagination/DescribeDBClusterEndpointsPaginator";
import { paginateDescribeDBClusterParameterGroups } from "./pagination/DescribeDBClusterParameterGroupsPaginator";
import { paginateDescribeDBClusterParameters } from "./pagination/DescribeDBClusterParametersPaginator";
import { paginateDescribeDBClusterSnapshots } from "./pagination/DescribeDBClusterSnapshotsPaginator";
import { paginateDescribeDBClusters } from "./pagination/DescribeDBClustersPaginator";
import { paginateDescribeDBEngineVersions } from "./pagination/DescribeDBEngineVersionsPaginator";
import { paginateDescribeDBInstanceAutomatedBackups } from "./pagination/DescribeDBInstanceAutomatedBackupsPaginator";
import { paginateDescribeDBInstances } from "./pagination/DescribeDBInstancesPaginator";
import { paginateDescribeDBLogFiles } from "./pagination/DescribeDBLogFilesPaginator";
import { paginateDescribeDBMajorEngineVersions } from "./pagination/DescribeDBMajorEngineVersionsPaginator";
import { paginateDescribeDBParameterGroups } from "./pagination/DescribeDBParameterGroupsPaginator";
import { paginateDescribeDBParameters } from "./pagination/DescribeDBParametersPaginator";
import { paginateDescribeDBProxies } from "./pagination/DescribeDBProxiesPaginator";
import { paginateDescribeDBProxyEndpoints } from "./pagination/DescribeDBProxyEndpointsPaginator";
import { paginateDescribeDBProxyTargetGroups } from "./pagination/DescribeDBProxyTargetGroupsPaginator";
import { paginateDescribeDBProxyTargets } from "./pagination/DescribeDBProxyTargetsPaginator";
import { paginateDescribeDBRecommendations } from "./pagination/DescribeDBRecommendationsPaginator";
import { paginateDescribeDBSecurityGroups } from "./pagination/DescribeDBSecurityGroupsPaginator";
import { paginateDescribeDBSnapshots } from "./pagination/DescribeDBSnapshotsPaginator";
import { paginateDescribeDBSnapshotTenantDatabases } from "./pagination/DescribeDBSnapshotTenantDatabasesPaginator";
import { paginateDescribeDBSubnetGroups } from "./pagination/DescribeDBSubnetGroupsPaginator";
import {
  paginateDescribeEngineDefaultClusterParameters,
} from "./pagination/DescribeEngineDefaultClusterParametersPaginator";
import { paginateDescribeEngineDefaultParameters } from "./pagination/DescribeEngineDefaultParametersPaginator";
import { paginateDescribeEvents } from "./pagination/DescribeEventsPaginator";
import { paginateDescribeEventSubscriptions } from "./pagination/DescribeEventSubscriptionsPaginator";
import { paginateDescribeExportTasks } from "./pagination/DescribeExportTasksPaginator";
import { paginateDescribeGlobalClusters } from "./pagination/DescribeGlobalClustersPaginator";
import { paginateDescribeIntegrations } from "./pagination/DescribeIntegrationsPaginator";
import { paginateDescribeOptionGroupOptions } from "./pagination/DescribeOptionGroupOptionsPaginator";
import { paginateDescribeOptionGroups } from "./pagination/DescribeOptionGroupsPaginator";
import { paginateDescribeOrderableDBInstanceOptions } from "./pagination/DescribeOrderableDBInstanceOptionsPaginator";
import { paginateDescribePendingMaintenanceActions } from "./pagination/DescribePendingMaintenanceActionsPaginator";
import {
  paginateDescribeReservedDBInstancesOfferings,
} from "./pagination/DescribeReservedDBInstancesOfferingsPaginator";
import { paginateDescribeReservedDBInstances } from "./pagination/DescribeReservedDBInstancesPaginator";
import {
  paginateDescribeServerlessV2PlatformVersions,
} from "./pagination/DescribeServerlessV2PlatformVersionsPaginator";
import { paginateDescribeSourceRegions } from "./pagination/DescribeSourceRegionsPaginator";
import { paginateDescribeTenantDatabases } from "./pagination/DescribeTenantDatabasesPaginator";
import { paginateDownloadDBLogFilePortion } from "./pagination/DownloadDBLogFilePortionPaginator";
import { RDSClient } from "./RDSClient";
import { waitUntilDBClusterAvailable } from "./waiters/waitForDBClusterAvailable";
import { waitUntilDBClusterDeleted } from "./waiters/waitForDBClusterDeleted";
import { waitUntilDBClusterSnapshotAvailable } from "./waiters/waitForDBClusterSnapshotAvailable";
import { waitUntilDBClusterSnapshotDeleted } from "./waiters/waitForDBClusterSnapshotDeleted";
import { waitUntilDBInstanceAvailable } from "./waiters/waitForDBInstanceAvailable";
import { waitUntilDBInstanceDeleted } from "./waiters/waitForDBInstanceDeleted";
import { waitUntilDBSnapshotAvailable } from "./waiters/waitForDBSnapshotAvailable";
import { waitUntilDBSnapshotDeleted } from "./waiters/waitForDBSnapshotDeleted";
import { waitUntilTenantDatabaseAvailable } from "./waiters/waitForTenantDatabaseAvailable";
import { waitUntilTenantDatabaseDeleted } from "./waiters/waitForTenantDatabaseDeleted";

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
  CreateDBShardGroupCommand,
  CreateDBSnapshotCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  CreateIntegrationCommand,
  CreateOptionGroupCommand,
  CreateTenantDatabaseCommand,
  DeleteBlueGreenDeploymentCommand,
  DeleteCustomDBEngineVersionCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterAutomatedBackupCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBProxyCommand,
  DeleteDBProxyEndpointCommand,
  DeleteDBSecurityGroupCommand,
  DeleteDBShardGroupCommand,
  DeleteDBSnapshotCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DeleteIntegrationCommand,
  DeleteOptionGroupCommand,
  DeleteTenantDatabaseCommand,
  DeregisterDBProxyTargetsCommand,
  DescribeAccountAttributesCommand,
  DescribeBlueGreenDeploymentsCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterAutomatedBackupsCommand,
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
  DescribeDBMajorEngineVersionsCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBProxiesCommand,
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetsCommand,
  DescribeDBRecommendationsCommand,
  DescribeDBSecurityGroupsCommand,
  DescribeDBShardGroupsCommand,
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotsCommand,
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventsCommand,
  DescribeEventSubscriptionsCommand,
  DescribeExportTasksCommand,
  DescribeGlobalClustersCommand,
  DescribeIntegrationsCommand,
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupsCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeServerlessV2PlatformVersionsCommand,
  DescribeSourceRegionsCommand,
  DescribeTenantDatabasesCommand,
  DescribeValidDBInstanceModificationsCommand,
  DisableHttpEndpointCommand,
  DownloadDBLogFilePortionCommand,
  EnableHttpEndpointCommand,
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
  ModifyDBRecommendationCommand,
  ModifyDBShardGroupCommand,
  ModifyDBSnapshotCommand,
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  ModifyIntegrationCommand,
  ModifyOptionGroupCommand,
  ModifyTenantDatabaseCommand,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBClusterCommand,
  PurchaseReservedDBInstancesOfferingCommand,
  RebootDBClusterCommand,
  RebootDBInstanceCommand,
  RebootDBShardGroupCommand,
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
  SwitchoverGlobalClusterCommand,
  SwitchoverReadReplicaCommand,
};
const paginators = {
  paginateDescribeBlueGreenDeployments,
  paginateDescribeCertificates,
  paginateDescribeDBClusterAutomatedBackups,
  paginateDescribeDBClusterBacktracks,
  paginateDescribeDBClusterEndpoints,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstanceAutomatedBackups,
  paginateDescribeDBInstances,
  paginateDescribeDBLogFiles,
  paginateDescribeDBMajorEngineVersions,
  paginateDescribeDBParameterGroups,
  paginateDescribeDBParameters,
  paginateDescribeDBProxies,
  paginateDescribeDBProxyEndpoints,
  paginateDescribeDBProxyTargetGroups,
  paginateDescribeDBProxyTargets,
  paginateDescribeDBRecommendations,
  paginateDescribeDBSecurityGroups,
  paginateDescribeDBSnapshots,
  paginateDescribeDBSnapshotTenantDatabases,
  paginateDescribeDBSubnetGroups,
  paginateDescribeEngineDefaultClusterParameters,
  paginateDescribeEngineDefaultParameters,
  paginateDescribeEvents,
  paginateDescribeEventSubscriptions,
  paginateDescribeExportTasks,
  paginateDescribeGlobalClusters,
  paginateDescribeIntegrations,
  paginateDescribeOptionGroupOptions,
  paginateDescribeOptionGroups,
  paginateDescribeOrderableDBInstanceOptions,
  paginateDescribePendingMaintenanceActions,
  paginateDescribeReservedDBInstances,
  paginateDescribeReservedDBInstancesOfferings,
  paginateDescribeServerlessV2PlatformVersions,
  paginateDescribeSourceRegions,
  paginateDescribeTenantDatabases,
  paginateDownloadDBLogFilePortion,
};
const waiters = {
  waitUntilDBClusterAvailable,
  waitUntilDBClusterDeleted,
  waitUntilDBClusterSnapshotAvailable,
  waitUntilDBClusterSnapshotDeleted,
  waitUntilDBInstanceAvailable,
  waitUntilDBInstanceDeleted,
  waitUntilDBSnapshotAvailable,
  waitUntilDBSnapshotDeleted,
  waitUntilTenantDatabaseAvailable,
  waitUntilTenantDatabaseDeleted,
};

/**
 * @public
 */
export interface RDSRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface RDS {
  /**
   * @see {@link AddRoleToDBClusterCommand}
   */
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<AddRoleToDBClusterCommandOutput>;
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link AddRoleToDBInstanceCommand}
   */
  addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<AddRoleToDBInstanceCommandOutput>;
  addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void
  ): void;
  addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link AddSourceIdentifierToSubscriptionCommand}
   */
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: RDSRequestOptions
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: RDSRequestOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: RDSRequestOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeDBSecurityGroupIngressCommand}
   */
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options?: RDSRequestOptions
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput>;
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link BacktrackDBClusterCommand}
   */
  backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<BacktrackDBClusterCommandOutput>;
  backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void
  ): void;
  backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: RDSRequestOptions
  ): Promise<CancelExportTaskCommandOutput>;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterParameterGroupCommand}
   */
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CopyDBClusterParameterGroupCommandOutput>;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterSnapshotCommand}
   */
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<CopyDBClusterSnapshotCommandOutput>;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBParameterGroupCommand}
   */
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CopyDBParameterGroupCommandOutput>;
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBSnapshotCommand}
   */
  copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<CopyDBSnapshotCommandOutput>;
  copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void
  ): void;
  copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyOptionGroupCommand}
   */
  copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CopyOptionGroupCommandOutput>;
  copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    cb: (err: any, data?: CopyOptionGroupCommandOutput) => void
  ): void;
  copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CopyOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBlueGreenDeploymentCommand}
   */
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateBlueGreenDeploymentCommandOutput>;
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void
  ): void;
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomDBEngineVersionCommand}
   */
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateCustomDBEngineVersionCommandOutput>;
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void
  ): void;
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterCommand}
   */
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBClusterCommandOutput>;
  createDBCluster(
    args: CreateDBClusterCommandInput,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterEndpointCommand}
   */
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBClusterEndpointCommandOutput>;
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterParameterGroupCommand}
   */
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBClusterParameterGroupCommandOutput>;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterSnapshotCommand}
   */
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBClusterSnapshotCommandOutput>;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBInstanceCommand}
   */
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBInstanceCommandOutput>;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBInstanceReadReplicaCommand}
   */
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBInstanceReadReplicaCommandOutput>;
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void
  ): void;
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBParameterGroupCommand}
   */
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBParameterGroupCommandOutput>;
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBProxyCommand}
   */
  createDBProxy(
    args: CreateDBProxyCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBProxyCommandOutput>;
  createDBProxy(
    args: CreateDBProxyCommandInput,
    cb: (err: any, data?: CreateDBProxyCommandOutput) => void
  ): void;
  createDBProxy(
    args: CreateDBProxyCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBProxyEndpointCommand}
   */
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBProxyEndpointCommandOutput>;
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    cb: (err: any, data?: CreateDBProxyEndpointCommandOutput) => void
  ): void;
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBProxyEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSecurityGroupCommand}
   */
  createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBSecurityGroupCommandOutput>;
  createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void
  ): void;
  createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBShardGroupCommand}
   */
  createDBShardGroup(
    args: CreateDBShardGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBShardGroupCommandOutput>;
  createDBShardGroup(
    args: CreateDBShardGroupCommandInput,
    cb: (err: any, data?: CreateDBShardGroupCommandOutput) => void
  ): void;
  createDBShardGroup(
    args: CreateDBShardGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBShardGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSnapshotCommand}
   */
  createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBSnapshotCommandOutput>;
  createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void
  ): void;
  createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSubnetGroupCommand}
   */
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateDBSubnetGroupCommandOutput>;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalClusterCommand}
   */
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateGlobalClusterCommandOutput>;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOptionGroupCommand}
   */
  createOptionGroup(
    args: CreateOptionGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateOptionGroupCommandOutput>;
  createOptionGroup(
    args: CreateOptionGroupCommandInput,
    cb: (err: any, data?: CreateOptionGroupCommandOutput) => void
  ): void;
  createOptionGroup(
    args: CreateOptionGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTenantDatabaseCommand}
   */
  createTenantDatabase(
    args: CreateTenantDatabaseCommandInput,
    options?: RDSRequestOptions
  ): Promise<CreateTenantDatabaseCommandOutput>;
  createTenantDatabase(
    args: CreateTenantDatabaseCommandInput,
    cb: (err: any, data?: CreateTenantDatabaseCommandOutput) => void
  ): void;
  createTenantDatabase(
    args: CreateTenantDatabaseCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: CreateTenantDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBlueGreenDeploymentCommand}
   */
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteBlueGreenDeploymentCommandOutput>;
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void
  ): void;
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomDBEngineVersionCommand}
   */
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteCustomDBEngineVersionCommandOutput>;
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void
  ): void;
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterCommand}
   */
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBClusterCommandOutput>;
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterAutomatedBackupCommand}
   */
  deleteDBClusterAutomatedBackup(
    args: DeleteDBClusterAutomatedBackupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBClusterAutomatedBackupCommandOutput>;
  deleteDBClusterAutomatedBackup(
    args: DeleteDBClusterAutomatedBackupCommandInput,
    cb: (err: any, data?: DeleteDBClusterAutomatedBackupCommandOutput) => void
  ): void;
  deleteDBClusterAutomatedBackup(
    args: DeleteDBClusterAutomatedBackupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBClusterAutomatedBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterEndpointCommand}
   */
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBClusterEndpointCommandOutput>;
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterParameterGroupCommand}
   */
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBClusterParameterGroupCommandOutput>;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterSnapshotCommand}
   */
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBClusterSnapshotCommandOutput>;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBInstanceCommand}
   */
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBInstanceCommandOutput>;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBInstanceAutomatedBackupCommand}
   */
  deleteDBInstanceAutomatedBackup(): Promise<DeleteDBInstanceAutomatedBackupCommandOutput>;
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBInstanceAutomatedBackupCommandOutput>;
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void
  ): void;
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBParameterGroupCommand}
   */
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBParameterGroupCommandOutput>;
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBProxyCommand}
   */
  deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBProxyCommandOutput>;
  deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    cb: (err: any, data?: DeleteDBProxyCommandOutput) => void
  ): void;
  deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBProxyEndpointCommand}
   */
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBProxyEndpointCommandOutput>;
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    cb: (err: any, data?: DeleteDBProxyEndpointCommandOutput) => void
  ): void;
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBProxyEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSecurityGroupCommand}
   */
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBSecurityGroupCommandOutput>;
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void
  ): void;
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBShardGroupCommand}
   */
  deleteDBShardGroup(
    args: DeleteDBShardGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBShardGroupCommandOutput>;
  deleteDBShardGroup(
    args: DeleteDBShardGroupCommandInput,
    cb: (err: any, data?: DeleteDBShardGroupCommandOutput) => void
  ): void;
  deleteDBShardGroup(
    args: DeleteDBShardGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBShardGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSnapshotCommand}
   */
  deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBSnapshotCommandOutput>;
  deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void
  ): void;
  deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSubnetGroupCommand}
   */
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteDBSubnetGroupCommandOutput>;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalClusterCommand}
   */
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteGlobalClusterCommandOutput>;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOptionGroupCommand}
   */
  deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteOptionGroupCommandOutput>;
  deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void
  ): void;
  deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTenantDatabaseCommand}
   */
  deleteTenantDatabase(
    args: DeleteTenantDatabaseCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeleteTenantDatabaseCommandOutput>;
  deleteTenantDatabase(
    args: DeleteTenantDatabaseCommandInput,
    cb: (err: any, data?: DeleteTenantDatabaseCommandOutput) => void
  ): void;
  deleteTenantDatabase(
    args: DeleteTenantDatabaseCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeleteTenantDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterDBProxyTargetsCommand}
   */
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DeregisterDBProxyTargetsCommandOutput>;
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void
  ): void;
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBlueGreenDeploymentsCommand}
   */
  describeBlueGreenDeployments(): Promise<DescribeBlueGreenDeploymentsCommandOutput>;
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeBlueGreenDeploymentsCommandOutput>;
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    cb: (err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void
  ): void;
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificatesCommand}
   */
  describeCertificates(): Promise<DescribeCertificatesCommandOutput>;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeCertificatesCommandOutput>;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterAutomatedBackupsCommand}
   */
  describeDBClusterAutomatedBackups(): Promise<DescribeDBClusterAutomatedBackupsCommandOutput>;
  describeDBClusterAutomatedBackups(
    args: DescribeDBClusterAutomatedBackupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClusterAutomatedBackupsCommandOutput>;
  describeDBClusterAutomatedBackups(
    args: DescribeDBClusterAutomatedBackupsCommandInput,
    cb: (err: any, data?: DescribeDBClusterAutomatedBackupsCommandOutput) => void
  ): void;
  describeDBClusterAutomatedBackups(
    args: DescribeDBClusterAutomatedBackupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClusterAutomatedBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterBacktracksCommand}
   */
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClusterBacktracksCommandOutput>;
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void
  ): void;
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   */
  describeDBClusterEndpoints(): Promise<DescribeDBClusterEndpointsCommandOutput>;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClusterEndpointsCommandOutput>;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   */
  describeDBClusterParameterGroups(): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   */
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClusterParametersCommandOutput>;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClustersCommand}
   */
  describeDBClusters(): Promise<DescribeDBClustersCommandOutput>;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClustersCommandOutput>;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotAttributesCommand}
   */
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   */
  describeDBClusterSnapshots(): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   */
  describeDBEngineVersions(): Promise<DescribeDBEngineVersionsCommandOutput>;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBEngineVersionsCommandOutput>;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBInstanceAutomatedBackupsCommand}
   */
  describeDBInstanceAutomatedBackups(): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput>;
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput>;
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void
  ): void;
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBInstancesCommand}
   */
  describeDBInstances(): Promise<DescribeDBInstancesCommandOutput>;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBInstancesCommandOutput>;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBLogFilesCommand}
   */
  describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBLogFilesCommandOutput>;
  describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void
  ): void;
  describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBMajorEngineVersionsCommand}
   */
  describeDBMajorEngineVersions(): Promise<DescribeDBMajorEngineVersionsCommandOutput>;
  describeDBMajorEngineVersions(
    args: DescribeDBMajorEngineVersionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBMajorEngineVersionsCommandOutput>;
  describeDBMajorEngineVersions(
    args: DescribeDBMajorEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeDBMajorEngineVersionsCommandOutput) => void
  ): void;
  describeDBMajorEngineVersions(
    args: DescribeDBMajorEngineVersionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBMajorEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   */
  describeDBParameterGroups(): Promise<DescribeDBParameterGroupsCommandOutput>;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBParameterGroupsCommandOutput>;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBParametersCommand}
   */
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBParametersCommandOutput>;
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxiesCommand}
   */
  describeDBProxies(): Promise<DescribeDBProxiesCommandOutput>;
  describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBProxiesCommandOutput>;
  describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void
  ): void;
  describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxyEndpointsCommand}
   */
  describeDBProxyEndpoints(): Promise<DescribeDBProxyEndpointsCommandOutput>;
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBProxyEndpointsCommandOutput>;
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void
  ): void;
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxyTargetGroupsCommand}
   */
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBProxyTargetGroupsCommandOutput>;
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void
  ): void;
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBProxyTargetsCommand}
   */
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBProxyTargetsCommandOutput>;
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void
  ): void;
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBRecommendationsCommand}
   */
  describeDBRecommendations(): Promise<DescribeDBRecommendationsCommandOutput>;
  describeDBRecommendations(
    args: DescribeDBRecommendationsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBRecommendationsCommandOutput>;
  describeDBRecommendations(
    args: DescribeDBRecommendationsCommandInput,
    cb: (err: any, data?: DescribeDBRecommendationsCommandOutput) => void
  ): void;
  describeDBRecommendations(
    args: DescribeDBRecommendationsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSecurityGroupsCommand}
   */
  describeDBSecurityGroups(): Promise<DescribeDBSecurityGroupsCommandOutput>;
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBSecurityGroupsCommandOutput>;
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void
  ): void;
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBShardGroupsCommand}
   */
  describeDBShardGroups(): Promise<DescribeDBShardGroupsCommandOutput>;
  describeDBShardGroups(
    args: DescribeDBShardGroupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBShardGroupsCommandOutput>;
  describeDBShardGroups(
    args: DescribeDBShardGroupsCommandInput,
    cb: (err: any, data?: DescribeDBShardGroupsCommandOutput) => void
  ): void;
  describeDBShardGroups(
    args: DescribeDBShardGroupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBShardGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSnapshotAttributesCommand}
   */
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBSnapshotAttributesCommandOutput>;
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void
  ): void;
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   */
  describeDBSnapshots(): Promise<DescribeDBSnapshotsCommandOutput>;
  describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBSnapshotsCommandOutput>;
  describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void
  ): void;
  describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSnapshotTenantDatabasesCommand}
   */
  describeDBSnapshotTenantDatabases(): Promise<DescribeDBSnapshotTenantDatabasesCommandOutput>;
  describeDBSnapshotTenantDatabases(
    args: DescribeDBSnapshotTenantDatabasesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBSnapshotTenantDatabasesCommandOutput>;
  describeDBSnapshotTenantDatabases(
    args: DescribeDBSnapshotTenantDatabasesCommandInput,
    cb: (err: any, data?: DescribeDBSnapshotTenantDatabasesCommandOutput) => void
  ): void;
  describeDBSnapshotTenantDatabases(
    args: DescribeDBSnapshotTenantDatabasesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBSnapshotTenantDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   */
  describeDBSubnetGroups(): Promise<DescribeDBSubnetGroupsCommandOutput>;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeDBSubnetGroupsCommandOutput>;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   */
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeEngineDefaultParametersCommandOutput>;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   */
  describeGlobalClusters(): Promise<DescribeGlobalClustersCommandOutput>;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeGlobalClustersCommandOutput>;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOptionGroupOptionsCommand}
   */
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeOptionGroupOptionsCommandOutput>;
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void
  ): void;
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOptionGroupsCommand}
   */
  describeOptionGroups(): Promise<DescribeOptionGroupsCommandOutput>;
  describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeOptionGroupsCommandOutput>;
  describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void
  ): void;
  describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   */
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  describePendingMaintenanceActions(): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedDBInstancesCommand}
   */
  describeReservedDBInstances(): Promise<DescribeReservedDBInstancesCommandOutput>;
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeReservedDBInstancesCommandOutput>;
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void
  ): void;
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedDBInstancesOfferingsCommand}
   */
  describeReservedDBInstancesOfferings(): Promise<DescribeReservedDBInstancesOfferingsCommandOutput>;
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeReservedDBInstancesOfferingsCommandOutput>;
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void
  ): void;
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServerlessV2PlatformVersionsCommand}
   */
  describeServerlessV2PlatformVersions(): Promise<DescribeServerlessV2PlatformVersionsCommandOutput>;
  describeServerlessV2PlatformVersions(
    args: DescribeServerlessV2PlatformVersionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeServerlessV2PlatformVersionsCommandOutput>;
  describeServerlessV2PlatformVersions(
    args: DescribeServerlessV2PlatformVersionsCommandInput,
    cb: (err: any, data?: DescribeServerlessV2PlatformVersionsCommandOutput) => void
  ): void;
  describeServerlessV2PlatformVersions(
    args: DescribeServerlessV2PlatformVersionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeServerlessV2PlatformVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceRegionsCommand}
   */
  describeSourceRegions(): Promise<DescribeSourceRegionsCommandOutput>;
  describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeSourceRegionsCommandOutput>;
  describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void
  ): void;
  describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTenantDatabasesCommand}
   */
  describeTenantDatabases(): Promise<DescribeTenantDatabasesCommandOutput>;
  describeTenantDatabases(
    args: DescribeTenantDatabasesCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeTenantDatabasesCommandOutput>;
  describeTenantDatabases(
    args: DescribeTenantDatabasesCommandInput,
    cb: (err: any, data?: DescribeTenantDatabasesCommandOutput) => void
  ): void;
  describeTenantDatabases(
    args: DescribeTenantDatabasesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeTenantDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeValidDBInstanceModificationsCommand}
   */
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options?: RDSRequestOptions
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput>;
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableHttpEndpointCommand}
   */
  disableHttpEndpoint(
    args: DisableHttpEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<DisableHttpEndpointCommandOutput>;
  disableHttpEndpoint(
    args: DisableHttpEndpointCommandInput,
    cb: (err: any, data?: DisableHttpEndpointCommandOutput) => void
  ): void;
  disableHttpEndpoint(
    args: DisableHttpEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DisableHttpEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DownloadDBLogFilePortionCommand}
   */
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    options?: RDSRequestOptions
  ): Promise<DownloadDBLogFilePortionCommandOutput>;
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void
  ): void;
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableHttpEndpointCommand}
   */
  enableHttpEndpoint(
    args: EnableHttpEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<EnableHttpEndpointCommandOutput>;
  enableHttpEndpoint(
    args: EnableHttpEndpointCommandInput,
    cb: (err: any, data?: EnableHttpEndpointCommandOutput) => void
  ): void;
  enableHttpEndpoint(
    args: EnableHttpEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: EnableHttpEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverDBClusterCommand}
   */
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<FailoverDBClusterCommandOutput>;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverGlobalClusterCommand}
   */
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<FailoverGlobalClusterCommandOutput>;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: RDSRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyActivityStreamCommand}
   */
  modifyActivityStream(): Promise<ModifyActivityStreamCommandOutput>;
  modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyActivityStreamCommandOutput>;
  modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    cb: (err: any, data?: ModifyActivityStreamCommandOutput) => void
  ): void;
  modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyActivityStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCertificatesCommand}
   */
  modifyCertificates(): Promise<ModifyCertificatesCommandOutput>;
  modifyCertificates(
    args: ModifyCertificatesCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyCertificatesCommandOutput>;
  modifyCertificates(
    args: ModifyCertificatesCommandInput,
    cb: (err: any, data?: ModifyCertificatesCommandOutput) => void
  ): void;
  modifyCertificates(
    args: ModifyCertificatesCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCurrentDBClusterCapacityCommand}
   */
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyCurrentDBClusterCapacityCommandOutput>;
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void
  ): void;
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCustomDBEngineVersionCommand}
   */
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyCustomDBEngineVersionCommandOutput>;
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void
  ): void;
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterCommand}
   */
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBClusterCommandOutput>;
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterEndpointCommand}
   */
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBClusterEndpointCommandOutput>;
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterParameterGroupCommand}
   */
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBClusterParameterGroupCommandOutput>;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterSnapshotAttributeCommand}
   */
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBInstanceCommand}
   */
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBInstanceCommandOutput>;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBParameterGroupCommand}
   */
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBParameterGroupCommandOutput>;
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBProxyCommand}
   */
  modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBProxyCommandOutput>;
  modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    cb: (err: any, data?: ModifyDBProxyCommandOutput) => void
  ): void;
  modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBProxyEndpointCommand}
   */
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBProxyEndpointCommandOutput>;
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    cb: (err: any, data?: ModifyDBProxyEndpointCommandOutput) => void
  ): void;
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBProxyEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBProxyTargetGroupCommand}
   */
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBProxyTargetGroupCommandOutput>;
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void
  ): void;
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBRecommendationCommand}
   */
  modifyDBRecommendation(
    args: ModifyDBRecommendationCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBRecommendationCommandOutput>;
  modifyDBRecommendation(
    args: ModifyDBRecommendationCommandInput,
    cb: (err: any, data?: ModifyDBRecommendationCommandOutput) => void
  ): void;
  modifyDBRecommendation(
    args: ModifyDBRecommendationCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBShardGroupCommand}
   */
  modifyDBShardGroup(
    args: ModifyDBShardGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBShardGroupCommandOutput>;
  modifyDBShardGroup(
    args: ModifyDBShardGroupCommandInput,
    cb: (err: any, data?: ModifyDBShardGroupCommandOutput) => void
  ): void;
  modifyDBShardGroup(
    args: ModifyDBShardGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBShardGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSnapshotCommand}
   */
  modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBSnapshotCommandOutput>;
  modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void
  ): void;
  modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSnapshotAttributeCommand}
   */
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBSnapshotAttributeCommandOutput>;
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void
  ): void;
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSubnetGroupCommand}
   */
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyDBSubnetGroupCommandOutput>;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyGlobalClusterCommand}
   */
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyGlobalClusterCommandOutput>;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyIntegrationCommandOutput>;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyOptionGroupCommand}
   */
  modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyOptionGroupCommandOutput>;
  modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void
  ): void;
  modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTenantDatabaseCommand}
   */
  modifyTenantDatabase(
    args: ModifyTenantDatabaseCommandInput,
    options?: RDSRequestOptions
  ): Promise<ModifyTenantDatabaseCommandOutput>;
  modifyTenantDatabase(
    args: ModifyTenantDatabaseCommandInput,
    cb: (err: any, data?: ModifyTenantDatabaseCommandOutput) => void
  ): void;
  modifyTenantDatabase(
    args: ModifyTenantDatabaseCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ModifyTenantDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteReadReplicaCommand}
   */
  promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    options?: RDSRequestOptions
  ): Promise<PromoteReadReplicaCommandOutput>;
  promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void
  ): void;
  promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteReadReplicaDBClusterCommand}
   */
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<PromoteReadReplicaDBClusterCommandOutput>;
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedDBInstancesOfferingCommand}
   */
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options?: RDSRequestOptions
  ): Promise<PurchaseReservedDBInstancesOfferingCommandOutput>;
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void
  ): void;
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDBClusterCommand}
   */
  rebootDBCluster(
    args: RebootDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<RebootDBClusterCommandOutput>;
  rebootDBCluster(
    args: RebootDBClusterCommandInput,
    cb: (err: any, data?: RebootDBClusterCommandOutput) => void
  ): void;
  rebootDBCluster(
    args: RebootDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RebootDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDBInstanceCommand}
   */
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<RebootDBInstanceCommandOutput>;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDBShardGroupCommand}
   */
  rebootDBShardGroup(
    args: RebootDBShardGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<RebootDBShardGroupCommandOutput>;
  rebootDBShardGroup(
    args: RebootDBShardGroupCommandInput,
    cb: (err: any, data?: RebootDBShardGroupCommandOutput) => void
  ): void;
  rebootDBShardGroup(
    args: RebootDBShardGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RebootDBShardGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDBProxyTargetsCommand}
   */
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    options?: RDSRequestOptions
  ): Promise<RegisterDBProxyTargetsCommandOutput>;
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void
  ): void;
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFromGlobalClusterCommand}
   */
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<RemoveFromGlobalClusterCommandOutput>;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRoleFromDBClusterCommand}
   */
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<RemoveRoleFromDBClusterCommandOutput>;
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRoleFromDBInstanceCommand}
   */
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<RemoveRoleFromDBInstanceCommandOutput>;
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void
  ): void;
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveSourceIdentifierFromSubscriptionCommand}
   */
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: RDSRequestOptions
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: RDSRequestOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDBClusterParameterGroupCommand}
   */
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ResetDBClusterParameterGroupCommandOutput>;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDBParameterGroupCommand}
   */
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options?: RDSRequestOptions
  ): Promise<ResetDBParameterGroupCommandOutput>;
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterFromS3Command}
   */
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    options?: RDSRequestOptions
  ): Promise<RestoreDBClusterFromS3CommandOutput>;
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void
  ): void;
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterFromSnapshotCommand}
   */
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterToPointInTimeCommand}
   */
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: RDSRequestOptions
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBInstanceFromDBSnapshotCommand}
   */
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options?: RDSRequestOptions
  ): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput>;
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void
  ): void;
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBInstanceFromS3Command}
   */
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    options?: RDSRequestOptions
  ): Promise<RestoreDBInstanceFromS3CommandOutput>;
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void
  ): void;
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBInstanceToPointInTimeCommand}
   */
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options?: RDSRequestOptions
  ): Promise<RestoreDBInstanceToPointInTimeCommandOutput>;
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void
  ): void;
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeDBSecurityGroupIngressCommand}
   */
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    options?: RDSRequestOptions
  ): Promise<RevokeDBSecurityGroupIngressCommandOutput>;
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link StartActivityStreamCommand}
   */
  startActivityStream(
    args: StartActivityStreamCommandInput,
    options?: RDSRequestOptions
  ): Promise<StartActivityStreamCommandOutput>;
  startActivityStream(
    args: StartActivityStreamCommandInput,
    cb: (err: any, data?: StartActivityStreamCommandOutput) => void
  ): void;
  startActivityStream(
    args: StartActivityStreamCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StartActivityStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBClusterCommand}
   */
  startDBCluster(
    args: StartDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<StartDBClusterCommandOutput>;
  startDBCluster(
    args: StartDBClusterCommandInput,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;
  startDBCluster(
    args: StartDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBInstanceCommand}
   */
  startDBInstance(
    args: StartDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<StartDBInstanceCommandOutput>;
  startDBInstance(
    args: StartDBInstanceCommandInput,
    cb: (err: any, data?: StartDBInstanceCommandOutput) => void
  ): void;
  startDBInstance(
    args: StartDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StartDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBInstanceAutomatedBackupsReplicationCommand}
   */
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: RDSRequestOptions
  ): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput>;
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    cb: (err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExportTaskCommand}
   */
  startExportTask(
    args: StartExportTaskCommandInput,
    options?: RDSRequestOptions
  ): Promise<StartExportTaskCommandOutput>;
  startExportTask(
    args: StartExportTaskCommandInput,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;
  startExportTask(
    args: StartExportTaskCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopActivityStreamCommand}
   */
  stopActivityStream(
    args: StopActivityStreamCommandInput,
    options?: RDSRequestOptions
  ): Promise<StopActivityStreamCommandOutput>;
  stopActivityStream(
    args: StopActivityStreamCommandInput,
    cb: (err: any, data?: StopActivityStreamCommandOutput) => void
  ): void;
  stopActivityStream(
    args: StopActivityStreamCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StopActivityStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBClusterCommand}
   */
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<StopDBClusterCommandOutput>;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBInstanceCommand}
   */
  stopDBInstance(
    args: StopDBInstanceCommandInput,
    options?: RDSRequestOptions
  ): Promise<StopDBInstanceCommandOutput>;
  stopDBInstance(
    args: StopDBInstanceCommandInput,
    cb: (err: any, data?: StopDBInstanceCommandOutput) => void
  ): void;
  stopDBInstance(
    args: StopDBInstanceCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StopDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBInstanceAutomatedBackupsReplicationCommand}
   */
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: RDSRequestOptions
  ): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput>;
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    cb: (err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverBlueGreenDeploymentCommand}
   */
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options?: RDSRequestOptions
  ): Promise<SwitchoverBlueGreenDeploymentCommandOutput>;
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void
  ): void;
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverGlobalClusterCommand}
   */
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    options?: RDSRequestOptions
  ): Promise<SwitchoverGlobalClusterCommandOutput>;
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    cb: (err: any, data?: SwitchoverGlobalClusterCommandOutput) => void
  ): void;
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: SwitchoverGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverReadReplicaCommand}
   */
  switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    options?: RDSRequestOptions
  ): Promise<SwitchoverReadReplicaCommandOutput>;
  switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    cb: (err: any, data?: SwitchoverReadReplicaCommandOutput) => void
  ): void;
  switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    options: RDSRequestOptions,
    cb: (err: any, data?: SwitchoverReadReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBlueGreenDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeBlueGreenDeploymentsCommandOutput}.
   */
  paginateDescribeBlueGreenDeployments(
    args?: DescribeBlueGreenDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeBlueGreenDeploymentsCommandOutput>;

  /**
   * @see {@link DescribeCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeCertificatesCommandOutput}.
   */
  paginateDescribeCertificates(
    args?: DescribeCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeCertificatesCommandOutput>;

  /**
   * @see {@link DescribeDBClusterAutomatedBackupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterAutomatedBackupsCommandOutput}.
   */
  paginateDescribeDBClusterAutomatedBackups(
    args?: DescribeDBClusterAutomatedBackupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterAutomatedBackupsCommandOutput>;

  /**
   * @see {@link DescribeDBClusterBacktracksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterBacktracksCommandOutput}.
   */
  paginateDescribeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterBacktracksCommandOutput>;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterEndpointsCommandOutput}.
   */
  paginateDescribeDBClusterEndpoints(
    args?: DescribeDBClusterEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterEndpointsCommandOutput>;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterParameterGroupsCommandOutput}.
   */
  paginateDescribeDBClusterParameterGroups(
    args?: DescribeDBClusterParameterGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterParameterGroupsCommandOutput>;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterParametersCommandOutput}.
   */
  paginateDescribeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterParametersCommandOutput>;

  /**
   * @see {@link DescribeDBClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClustersCommandOutput}.
   */
  paginateDescribeDBClusters(
    args?: DescribeDBClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClustersCommandOutput>;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterSnapshotsCommandOutput}.
   */
  paginateDescribeDBClusterSnapshots(
    args?: DescribeDBClusterSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterSnapshotsCommandOutput>;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBEngineVersionsCommandOutput}.
   */
  paginateDescribeDBEngineVersions(
    args?: DescribeDBEngineVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBEngineVersionsCommandOutput>;

  /**
   * @see {@link DescribeDBInstanceAutomatedBackupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBInstanceAutomatedBackupsCommandOutput}.
   */
  paginateDescribeDBInstanceAutomatedBackups(
    args?: DescribeDBInstanceAutomatedBackupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBInstanceAutomatedBackupsCommandOutput>;

  /**
   * @see {@link DescribeDBInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBInstancesCommandOutput}.
   */
  paginateDescribeDBInstances(
    args?: DescribeDBInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBInstancesCommandOutput>;

  /**
   * @see {@link DescribeDBLogFilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBLogFilesCommandOutput}.
   */
  paginateDescribeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBLogFilesCommandOutput>;

  /**
   * @see {@link DescribeDBMajorEngineVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBMajorEngineVersionsCommandOutput}.
   */
  paginateDescribeDBMajorEngineVersions(
    args?: DescribeDBMajorEngineVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBMajorEngineVersionsCommandOutput>;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBParameterGroupsCommandOutput}.
   */
  paginateDescribeDBParameterGroups(
    args?: DescribeDBParameterGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBParameterGroupsCommandOutput>;

  /**
   * @see {@link DescribeDBParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBParametersCommandOutput}.
   */
  paginateDescribeDBParameters(
    args: DescribeDBParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBParametersCommandOutput>;

  /**
   * @see {@link DescribeDBProxiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBProxiesCommandOutput}.
   */
  paginateDescribeDBProxies(
    args?: DescribeDBProxiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBProxiesCommandOutput>;

  /**
   * @see {@link DescribeDBProxyEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBProxyEndpointsCommandOutput}.
   */
  paginateDescribeDBProxyEndpoints(
    args?: DescribeDBProxyEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBProxyEndpointsCommandOutput>;

  /**
   * @see {@link DescribeDBProxyTargetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBProxyTargetGroupsCommandOutput}.
   */
  paginateDescribeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBProxyTargetGroupsCommandOutput>;

  /**
   * @see {@link DescribeDBProxyTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBProxyTargetsCommandOutput}.
   */
  paginateDescribeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBProxyTargetsCommandOutput>;

  /**
   * @see {@link DescribeDBRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBRecommendationsCommandOutput}.
   */
  paginateDescribeDBRecommendations(
    args?: DescribeDBRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBRecommendationsCommandOutput>;

  /**
   * @see {@link DescribeDBSecurityGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBSecurityGroupsCommandOutput}.
   */
  paginateDescribeDBSecurityGroups(
    args?: DescribeDBSecurityGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBSecurityGroupsCommandOutput>;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBSnapshotsCommandOutput}.
   */
  paginateDescribeDBSnapshots(
    args?: DescribeDBSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBSnapshotsCommandOutput>;

  /**
   * @see {@link DescribeDBSnapshotTenantDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBSnapshotTenantDatabasesCommandOutput}.
   */
  paginateDescribeDBSnapshotTenantDatabases(
    args?: DescribeDBSnapshotTenantDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBSnapshotTenantDatabasesCommandOutput>;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBSubnetGroupsCommandOutput}.
   */
  paginateDescribeDBSubnetGroups(
    args?: DescribeDBSubnetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBSubnetGroupsCommandOutput>;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEngineDefaultClusterParametersCommandOutput}.
   */
  paginateDescribeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEngineDefaultClusterParametersCommandOutput>;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEngineDefaultParametersCommandOutput}.
   */
  paginateDescribeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEngineDefaultParametersCommandOutput>;

  /**
   * @see {@link DescribeEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventsCommandOutput}.
   */
  paginateDescribeEvents(
    args?: DescribeEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventsCommandOutput>;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventSubscriptionsCommandOutput}.
   */
  paginateDescribeEventSubscriptions(
    args?: DescribeEventSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventSubscriptionsCommandOutput>;

  /**
   * @see {@link DescribeExportTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeExportTasksCommandOutput}.
   */
  paginateDescribeExportTasks(
    args?: DescribeExportTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeExportTasksCommandOutput>;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeGlobalClustersCommandOutput}.
   */
  paginateDescribeGlobalClusters(
    args?: DescribeGlobalClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeGlobalClustersCommandOutput>;

  /**
   * @see {@link DescribeIntegrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeIntegrationsCommandOutput}.
   */
  paginateDescribeIntegrations(
    args?: DescribeIntegrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeIntegrationsCommandOutput>;

  /**
   * @see {@link DescribeOptionGroupOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOptionGroupOptionsCommandOutput}.
   */
  paginateDescribeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOptionGroupOptionsCommandOutput>;

  /**
   * @see {@link DescribeOptionGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOptionGroupsCommandOutput}.
   */
  paginateDescribeOptionGroups(
    args?: DescribeOptionGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOptionGroupsCommandOutput>;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrderableDBInstanceOptionsCommandOutput}.
   */
  paginateDescribeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrderableDBInstanceOptionsCommandOutput>;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePendingMaintenanceActionsCommandOutput}.
   */
  paginateDescribePendingMaintenanceActions(
    args?: DescribePendingMaintenanceActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePendingMaintenanceActionsCommandOutput>;

  /**
   * @see {@link DescribeReservedDBInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedDBInstancesCommandOutput}.
   */
  paginateDescribeReservedDBInstances(
    args?: DescribeReservedDBInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedDBInstancesCommandOutput>;

  /**
   * @see {@link DescribeReservedDBInstancesOfferingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedDBInstancesOfferingsCommandOutput}.
   */
  paginateDescribeReservedDBInstancesOfferings(
    args?: DescribeReservedDBInstancesOfferingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedDBInstancesOfferingsCommandOutput>;

  /**
   * @see {@link DescribeServerlessV2PlatformVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeServerlessV2PlatformVersionsCommandOutput}.
   */
  paginateDescribeServerlessV2PlatformVersions(
    args?: DescribeServerlessV2PlatformVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeServerlessV2PlatformVersionsCommandOutput>;

  /**
   * @see {@link DescribeSourceRegionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSourceRegionsCommandOutput}.
   */
  paginateDescribeSourceRegions(
    args?: DescribeSourceRegionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSourceRegionsCommandOutput>;

  /**
   * @see {@link DescribeTenantDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTenantDatabasesCommandOutput}.
   */
  paginateDescribeTenantDatabases(
    args?: DescribeTenantDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTenantDatabasesCommandOutput>;

  /**
   * @see {@link DownloadDBLogFilePortionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DownloadDBLogFilePortionCommandOutput}.
   */
  paginateDownloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DownloadDBLogFilePortionCommandOutput>;

  /**
   * @see {@link DescribeDBClustersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBClusterAvailable(
    args: DescribeDBClustersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBClustersCommandOutput>>;

  /**
   * @see {@link DescribeDBClustersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBClusterDeleted(
    args: DescribeDBClustersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBClustersCommandOutput | DBClusterNotFoundFault>>;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBClusterSnapshotAvailable(
    args: DescribeDBClusterSnapshotsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBClusterSnapshotsCommandOutput>>;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBClusterSnapshotDeleted(
    args: DescribeDBClusterSnapshotsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBClusterSnapshotsCommandOutput | DBClusterSnapshotNotFoundFault>>;

  /**
   * @see {@link DescribeDBInstancesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBInstanceAvailable(
    args: DescribeDBInstancesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBInstancesCommandOutput>>;

  /**
   * @see {@link DescribeDBInstancesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBInstanceDeleted(
    args: DescribeDBInstancesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBInstancesCommandOutput | DBInstanceNotFoundFault>>;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBSnapshotAvailable(
    args: DescribeDBSnapshotsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBSnapshotsCommandOutput>>;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBSnapshotDeleted(
    args: DescribeDBSnapshotsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeDBSnapshotsCommandOutput | DBSnapshotNotFoundFault>>;

  /**
   * @see {@link DescribeTenantDatabasesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTenantDatabaseAvailable(
    args: DescribeTenantDatabasesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeTenantDatabasesCommandOutput>>;

  /**
   * @see {@link DescribeTenantDatabasesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTenantDatabaseDeleted(
    args: DescribeTenantDatabasesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RDS>, "client">
  ): Promise<WaiterResult<DescribeTenantDatabasesCommandOutput | DBInstanceNotFoundFault>>;
}

/**
 * <fullname>Amazon Relational Database Service</fullname> <p/> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, Db2, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>
 * @public
 */
export class RDS extends RDSClient implements RDS {}
createAggregatedClient(commands, RDS, { paginators, waiters });
