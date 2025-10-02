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
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput } from "../commands/AddRoleToDBClusterCommand";
import {
  AddRoleToDBInstanceCommandInput,
  AddRoleToDBInstanceCommandOutput,
} from "../commands/AddRoleToDBInstanceCommand";
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
  AuthorizeDBSecurityGroupIngressCommandInput,
  AuthorizeDBSecurityGroupIngressCommandOutput,
} from "../commands/AuthorizeDBSecurityGroupIngressCommand";
import { BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput } from "../commands/BacktrackDBClusterCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "../commands/CancelExportTaskCommand";
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
import { CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput } from "../commands/CopyDBSnapshotCommand";
import { CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput } from "../commands/CopyOptionGroupCommand";
import {
  CreateBlueGreenDeploymentCommandInput,
  CreateBlueGreenDeploymentCommandOutput,
} from "../commands/CreateBlueGreenDeploymentCommand";
import {
  CreateCustomDBEngineVersionCommandInput,
  CreateCustomDBEngineVersionCommandOutput,
} from "../commands/CreateCustomDBEngineVersionCommand";
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
  CreateDBInstanceReadReplicaCommandInput,
  CreateDBInstanceReadReplicaCommandOutput,
} from "../commands/CreateDBInstanceReadReplicaCommand";
import {
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
} from "../commands/CreateDBParameterGroupCommand";
import { CreateDBProxyCommandInput, CreateDBProxyCommandOutput } from "../commands/CreateDBProxyCommand";
import {
  CreateDBProxyEndpointCommandInput,
  CreateDBProxyEndpointCommandOutput,
} from "../commands/CreateDBProxyEndpointCommand";
import {
  CreateDBSecurityGroupCommandInput,
  CreateDBSecurityGroupCommandOutput,
} from "../commands/CreateDBSecurityGroupCommand";
import { CreateDBShardGroupCommandInput, CreateDBShardGroupCommandOutput } from "../commands/CreateDBShardGroupCommand";
import { CreateDBSnapshotCommandInput, CreateDBSnapshotCommandOutput } from "../commands/CreateDBSnapshotCommand";
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
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "../commands/CreateIntegrationCommand";
import { CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput } from "../commands/CreateOptionGroupCommand";
import {
  CreateTenantDatabaseCommandInput,
  CreateTenantDatabaseCommandOutput,
} from "../commands/CreateTenantDatabaseCommand";
import {
  DeleteBlueGreenDeploymentCommandInput,
  DeleteBlueGreenDeploymentCommandOutput,
} from "../commands/DeleteBlueGreenDeploymentCommand";
import {
  DeleteCustomDBEngineVersionCommandInput,
  DeleteCustomDBEngineVersionCommandOutput,
} from "../commands/DeleteCustomDBEngineVersionCommand";
import {
  DeleteDBClusterAutomatedBackupCommandInput,
  DeleteDBClusterAutomatedBackupCommandOutput,
} from "../commands/DeleteDBClusterAutomatedBackupCommand";
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
import {
  DeleteDBInstanceAutomatedBackupCommandInput,
  DeleteDBInstanceAutomatedBackupCommandOutput,
} from "../commands/DeleteDBInstanceAutomatedBackupCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "../commands/DeleteDBInstanceCommand";
import {
  DeleteDBParameterGroupCommandInput,
  DeleteDBParameterGroupCommandOutput,
} from "../commands/DeleteDBParameterGroupCommand";
import { DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput } from "../commands/DeleteDBProxyCommand";
import {
  DeleteDBProxyEndpointCommandInput,
  DeleteDBProxyEndpointCommandOutput,
} from "../commands/DeleteDBProxyEndpointCommand";
import {
  DeleteDBSecurityGroupCommandInput,
  DeleteDBSecurityGroupCommandOutput,
} from "../commands/DeleteDBSecurityGroupCommand";
import { DeleteDBShardGroupCommandInput, DeleteDBShardGroupCommandOutput } from "../commands/DeleteDBShardGroupCommand";
import { DeleteDBSnapshotCommandInput, DeleteDBSnapshotCommandOutput } from "../commands/DeleteDBSnapshotCommand";
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
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import { DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput } from "../commands/DeleteOptionGroupCommand";
import {
  DeleteTenantDatabaseCommandInput,
  DeleteTenantDatabaseCommandOutput,
} from "../commands/DeleteTenantDatabaseCommand";
import {
  DeregisterDBProxyTargetsCommandInput,
  DeregisterDBProxyTargetsCommandOutput,
} from "../commands/DeregisterDBProxyTargetsCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "../commands/DescribeAccountAttributesCommand";
import {
  DescribeBlueGreenDeploymentsCommandInput,
  DescribeBlueGreenDeploymentsCommandOutput,
} from "../commands/DescribeBlueGreenDeploymentsCommand";
import {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
import {
  DescribeDBClusterAutomatedBackupsCommandInput,
  DescribeDBClusterAutomatedBackupsCommandOutput,
} from "../commands/DescribeDBClusterAutomatedBackupsCommand";
import {
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
} from "../commands/DescribeDBClusterBacktracksCommand";
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
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
} from "../commands/DescribeDBInstanceAutomatedBackupsCommand";
import {
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand";
import { DescribeDBLogFilesCommandInput, DescribeDBLogFilesCommandOutput } from "../commands/DescribeDBLogFilesCommand";
import {
  DescribeDBMajorEngineVersionsCommandInput,
  DescribeDBMajorEngineVersionsCommandOutput,
} from "../commands/DescribeDBMajorEngineVersionsCommand";
import {
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand";
import {
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "../commands/DescribeDBParametersCommand";
import { DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput } from "../commands/DescribeDBProxiesCommand";
import {
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
} from "../commands/DescribeDBProxyEndpointsCommand";
import {
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput,
} from "../commands/DescribeDBProxyTargetGroupsCommand";
import {
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput,
} from "../commands/DescribeDBProxyTargetsCommand";
import {
  DescribeDBRecommendationsCommandInput,
  DescribeDBRecommendationsCommandOutput,
} from "../commands/DescribeDBRecommendationsCommand";
import {
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "../commands/DescribeDBSecurityGroupsCommand";
import {
  DescribeDBShardGroupsCommandInput,
  DescribeDBShardGroupsCommandOutput,
} from "../commands/DescribeDBShardGroupsCommand";
import {
  DescribeDBSnapshotAttributesCommandInput,
  DescribeDBSnapshotAttributesCommandOutput,
} from "../commands/DescribeDBSnapshotAttributesCommand";
import {
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
} from "../commands/DescribeDBSnapshotsCommand";
import {
  DescribeDBSnapshotTenantDatabasesCommandInput,
  DescribeDBSnapshotTenantDatabasesCommandOutput,
} from "../commands/DescribeDBSnapshotTenantDatabasesCommand";
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
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import {
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import {
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "../commands/DescribeIntegrationsCommand";
import {
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
} from "../commands/DescribeOptionGroupOptionsCommand";
import {
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
} from "../commands/DescribeOptionGroupsCommand";
import {
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
} from "../commands/DescribeReservedDBInstancesCommand";
import {
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
} from "../commands/DescribeReservedDBInstancesOfferingsCommand";
import {
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
} from "../commands/DescribeSourceRegionsCommand";
import {
  DescribeTenantDatabasesCommandInput,
  DescribeTenantDatabasesCommandOutput,
} from "../commands/DescribeTenantDatabasesCommand";
import {
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "../commands/DescribeValidDBInstanceModificationsCommand";
import {
  DisableHttpEndpointCommandInput,
  DisableHttpEndpointCommandOutput,
} from "../commands/DisableHttpEndpointCommand";
import {
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "../commands/DownloadDBLogFilePortionCommand";
import { EnableHttpEndpointCommandInput, EnableHttpEndpointCommandOutput } from "../commands/EnableHttpEndpointCommand";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "../commands/FailoverDBClusterCommand";
import {
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
} from "../commands/FailoverGlobalClusterCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyActivityStreamCommandInput,
  ModifyActivityStreamCommandOutput,
} from "../commands/ModifyActivityStreamCommand";
import { ModifyCertificatesCommandInput, ModifyCertificatesCommandOutput } from "../commands/ModifyCertificatesCommand";
import {
  ModifyCurrentDBClusterCapacityCommandInput,
  ModifyCurrentDBClusterCapacityCommandOutput,
} from "../commands/ModifyCurrentDBClusterCapacityCommand";
import {
  ModifyCustomDBEngineVersionCommandInput,
  ModifyCustomDBEngineVersionCommandOutput,
} from "../commands/ModifyCustomDBEngineVersionCommand";
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
import { ModifyDBProxyCommandInput, ModifyDBProxyCommandOutput } from "../commands/ModifyDBProxyCommand";
import {
  ModifyDBProxyEndpointCommandInput,
  ModifyDBProxyEndpointCommandOutput,
} from "../commands/ModifyDBProxyEndpointCommand";
import {
  ModifyDBProxyTargetGroupCommandInput,
  ModifyDBProxyTargetGroupCommandOutput,
} from "../commands/ModifyDBProxyTargetGroupCommand";
import {
  ModifyDBRecommendationCommandInput,
  ModifyDBRecommendationCommandOutput,
} from "../commands/ModifyDBRecommendationCommand";
import { ModifyDBShardGroupCommandInput, ModifyDBShardGroupCommandOutput } from "../commands/ModifyDBShardGroupCommand";
import {
  ModifyDBSnapshotAttributeCommandInput,
  ModifyDBSnapshotAttributeCommandOutput,
} from "../commands/ModifyDBSnapshotAttributeCommand";
import { ModifyDBSnapshotCommandInput, ModifyDBSnapshotCommandOutput } from "../commands/ModifyDBSnapshotCommand";
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
import { ModifyIntegrationCommandInput, ModifyIntegrationCommandOutput } from "../commands/ModifyIntegrationCommand";
import { ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput } from "../commands/ModifyOptionGroupCommand";
import {
  ModifyTenantDatabaseCommandInput,
  ModifyTenantDatabaseCommandOutput,
} from "../commands/ModifyTenantDatabaseCommand";
import { PromoteReadReplicaCommandInput, PromoteReadReplicaCommandOutput } from "../commands/PromoteReadReplicaCommand";
import {
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
} from "../commands/PromoteReadReplicaDBClusterCommand";
import {
  PurchaseReservedDBInstancesOfferingCommandInput,
  PurchaseReservedDBInstancesOfferingCommandOutput,
} from "../commands/PurchaseReservedDBInstancesOfferingCommand";
import { RebootDBClusterCommandInput, RebootDBClusterCommandOutput } from "../commands/RebootDBClusterCommand";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "../commands/RebootDBInstanceCommand";
import { RebootDBShardGroupCommandInput, RebootDBShardGroupCommandOutput } from "../commands/RebootDBShardGroupCommand";
import {
  RegisterDBProxyTargetsCommandInput,
  RegisterDBProxyTargetsCommandOutput,
} from "../commands/RegisterDBProxyTargetsCommand";
import {
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
} from "../commands/RemoveFromGlobalClusterCommand";
import {
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
} from "../commands/RemoveRoleFromDBClusterCommand";
import {
  RemoveRoleFromDBInstanceCommandInput,
  RemoveRoleFromDBInstanceCommandOutput,
} from "../commands/RemoveRoleFromDBInstanceCommand";
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
  RestoreDBClusterFromS3CommandInput,
  RestoreDBClusterFromS3CommandOutput,
} from "../commands/RestoreDBClusterFromS3Command";
import {
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
} from "../commands/RestoreDBClusterFromSnapshotCommand";
import {
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
} from "../commands/RestoreDBClusterToPointInTimeCommand";
import {
  RestoreDBInstanceFromDBSnapshotCommandInput,
  RestoreDBInstanceFromDBSnapshotCommandOutput,
} from "../commands/RestoreDBInstanceFromDBSnapshotCommand";
import {
  RestoreDBInstanceFromS3CommandInput,
  RestoreDBInstanceFromS3CommandOutput,
} from "../commands/RestoreDBInstanceFromS3Command";
import {
  RestoreDBInstanceToPointInTimeCommandInput,
  RestoreDBInstanceToPointInTimeCommandOutput,
} from "../commands/RestoreDBInstanceToPointInTimeCommand";
import {
  RevokeDBSecurityGroupIngressCommandInput,
  RevokeDBSecurityGroupIngressCommandOutput,
} from "../commands/RevokeDBSecurityGroupIngressCommand";
import {
  StartActivityStreamCommandInput,
  StartActivityStreamCommandOutput,
} from "../commands/StartActivityStreamCommand";
import { StartDBClusterCommandInput, StartDBClusterCommandOutput } from "../commands/StartDBClusterCommand";
import {
  StartDBInstanceAutomatedBackupsReplicationCommandInput,
  StartDBInstanceAutomatedBackupsReplicationCommandOutput,
} from "../commands/StartDBInstanceAutomatedBackupsReplicationCommand";
import { StartDBInstanceCommandInput, StartDBInstanceCommandOutput } from "../commands/StartDBInstanceCommand";
import { StartExportTaskCommandInput, StartExportTaskCommandOutput } from "../commands/StartExportTaskCommand";
import { StopActivityStreamCommandInput, StopActivityStreamCommandOutput } from "../commands/StopActivityStreamCommand";
import { StopDBClusterCommandInput, StopDBClusterCommandOutput } from "../commands/StopDBClusterCommand";
import {
  StopDBInstanceAutomatedBackupsReplicationCommandInput,
  StopDBInstanceAutomatedBackupsReplicationCommandOutput,
} from "../commands/StopDBInstanceAutomatedBackupsReplicationCommand";
import { StopDBInstanceCommandInput, StopDBInstanceCommandOutput } from "../commands/StopDBInstanceCommand";
import {
  SwitchoverBlueGreenDeploymentCommandInput,
  SwitchoverBlueGreenDeploymentCommandOutput,
} from "../commands/SwitchoverBlueGreenDeploymentCommand";
import {
  SwitchoverGlobalClusterCommandInput,
  SwitchoverGlobalClusterCommandOutput,
} from "../commands/SwitchoverGlobalClusterCommand";
import {
  SwitchoverReadReplicaCommandInput,
  SwitchoverReadReplicaCommandOutput,
} from "../commands/SwitchoverReadReplicaCommand";
import {
  AccountAttributesMessage,
  AccountQuota,
  AddRoleToDBClusterMessage,
  AddRoleToDBInstanceMessage,
  AddSourceIdentifierToSubscriptionMessage,
  AddSourceIdentifierToSubscriptionResult,
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResult,
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  AuthorizationQuotaExceededFault,
  AuthorizeDBSecurityGroupIngressMessage,
  AuthorizeDBSecurityGroupIngressResult,
  AvailabilityZone,
  BacktrackDBClusterMessage,
  BackupPolicyNotFoundFault,
  BlueGreenDeployment,
  BlueGreenDeploymentAlreadyExistsFault,
  BlueGreenDeploymentNotFoundFault,
  BlueGreenDeploymentTask,
  CancelExportTaskMessage,
  CertificateDetails,
  CertificateNotFoundFault,
  CharacterSet,
  ClusterPendingModifiedValues,
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterParameterGroupResult,
  CopyDBClusterSnapshotMessage,
  CopyDBClusterSnapshotResult,
  CopyDBParameterGroupMessage,
  CopyDBParameterGroupResult,
  CopyDBSnapshotMessage,
  CopyDBSnapshotResult,
  CopyOptionGroupMessage,
  CopyOptionGroupResult,
  CreateBlueGreenDeploymentRequest,
  CreateBlueGreenDeploymentResponse,
  CreateCustomDBEngineVersionFault,
  CreateCustomDBEngineVersionMessage,
  CreateDBClusterEndpointMessage,
  CreateDBClusterMessage,
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterParameterGroupResult,
  CreateDBClusterResult,
  CreateDBClusterSnapshotMessage,
  CreateDBClusterSnapshotResult,
  CreateDBInstanceMessage,
  CreateDBInstanceReadReplicaMessage,
  CreateDBInstanceReadReplicaResult,
  CreateDBInstanceResult,
  CreateDBParameterGroupMessage,
  CreateDBParameterGroupResult,
  CreateDBProxyEndpointRequest,
  CreateDBProxyEndpointResponse,
  CreateDBProxyRequest,
  CreateDBProxyResponse,
  CreateDBSecurityGroupMessage,
  CreateDBSecurityGroupResult,
  CreateDBShardGroupMessage,
  CreateDBSnapshotMessage,
  CreateDBSnapshotResult,
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupResult,
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResult,
  CreateGlobalClusterMessage,
  CreateGlobalClusterResult,
  CreateIntegrationMessage,
  CreateOptionGroupMessage,
  CreateOptionGroupResult,
  CreateTenantDatabaseMessage,
  CreateTenantDatabaseResult,
  CustomAvailabilityZoneNotFoundFault,
  CustomDBEngineVersionAlreadyExistsFault,
  CustomDBEngineVersionAMI,
  CustomDBEngineVersionNotFoundFault,
  CustomDBEngineVersionQuotaExceededFault,
  DBCluster,
  DBClusterAlreadyExistsFault,
  DBClusterAutomatedBackup,
  DBClusterAutomatedBackupNotFoundFault,
  DBClusterAutomatedBackupQuotaExceededFault,
  DBClusterBacktrack,
  DBClusterEndpoint,
  DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointNotFoundFault,
  DBClusterEndpointQuotaExceededFault,
  DBClusterMember,
  DBClusterNotFoundFault,
  DBClusterOptionGroupStatus,
  DBClusterParameterGroup,
  DBClusterParameterGroupNotFoundFault,
  DBClusterQuotaExceededFault,
  DBClusterRole,
  DBClusterRoleAlreadyExistsFault,
  DBClusterRoleQuotaExceededFault,
  DBClusterSnapshot,
  DBClusterSnapshotAlreadyExistsFault,
  DBClusterSnapshotNotFoundFault,
  DBClusterStatusInfo,
  DBEngineVersion,
  DBInstance,
  DBInstanceAlreadyExistsFault,
  DBInstanceAutomatedBackup,
  DBInstanceAutomatedBackupNotFoundFault,
  DBInstanceAutomatedBackupQuotaExceededFault,
  DBInstanceAutomatedBackupsReplication,
  DBInstanceNotFoundFault,
  DBInstanceRole,
  DBInstanceRoleAlreadyExistsFault,
  DBInstanceRoleQuotaExceededFault,
  DBInstanceStatusInfo,
  DBParameterGroup,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault,
  DBParameterGroupStatus,
  DBProxy,
  DBProxyAlreadyExistsFault,
  DBProxyEndpoint,
  DBProxyEndpointAlreadyExistsFault,
  DBProxyEndpointNotFoundFault,
  DBProxyEndpointQuotaExceededFault,
  DBProxyNotFoundFault,
  DBProxyQuotaExceededFault,
  DBProxyTargetGroupNotFoundFault,
  DBSecurityGroup,
  DBSecurityGroupAlreadyExistsFault,
  DBSecurityGroupMembership,
  DBSecurityGroupNotFoundFault,
  DBSecurityGroupNotSupportedFault,
  DBSecurityGroupQuotaExceededFault,
  DBShardGroup,
  DBShardGroupAlreadyExistsFault,
  DBShardGroupNotFoundFault,
  DBSnapshot,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotNotFoundFault,
  DBSnapshotTenantDatabaseNotFoundFault,
  DBSubnetGroup,
  DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupNotAllowedFault,
  DBSubnetGroupNotFoundFault,
  DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault,
  DeleteBlueGreenDeploymentRequest,
  DeleteBlueGreenDeploymentResponse,
  DeleteCustomDBEngineVersionMessage,
  DeleteDBClusterAutomatedBackupMessage,
  DeleteDBClusterAutomatedBackupResult,
  DeleteDBClusterEndpointMessage,
  DeleteDBClusterMessage,
  DeleteDBClusterParameterGroupMessage,
  DeleteDBClusterResult,
  DeleteDBClusterSnapshotMessage,
  DeleteDBClusterSnapshotResult,
  DeleteDBInstanceAutomatedBackupMessage,
  DeleteDBInstanceAutomatedBackupResult,
  DeleteDBInstanceMessage,
  DeleteDBInstanceResult,
  DeleteDBParameterGroupMessage,
  DeleteDBProxyEndpointRequest,
  DeleteDBProxyEndpointResponse,
  DeleteDBProxyRequest,
  DeleteDBProxyResponse,
  DeleteDBSecurityGroupMessage,
  DeleteDBShardGroupMessage,
  DeleteDBSnapshotMessage,
  DeleteDBSnapshotResult,
  DeleteDBSubnetGroupMessage,
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResult,
  DeleteGlobalClusterMessage,
  DomainMembership,
  DomainNotFoundFault,
  Ec2ImagePropertiesNotSupportedFault,
  EC2SecurityGroup,
  Endpoint,
  EventSubscription,
  EventSubscriptionQuotaExceededFault,
  ExportTask,
  ExportTaskNotFoundFault,
  FailoverState,
  GlobalCluster,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterMember,
  GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault,
  InstanceQuotaExceededFault,
  InsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault,
  Integration,
  IntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault,
  IntegrationError,
  IntegrationNotFoundFault,
  IntegrationQuotaExceededFault,
  InvalidBlueGreenDeploymentStateFault,
  InvalidCustomDBEngineVersionStateFault,
  InvalidDBClusterAutomatedBackupStateFault,
  InvalidDBClusterEndpointStateFault,
  InvalidDBClusterSnapshotStateFault,
  InvalidDBClusterStateFault,
  InvalidDBInstanceAutomatedBackupStateFault,
  InvalidDBInstanceStateFault,
  InvalidDBParameterGroupStateFault,
  InvalidDBProxyEndpointStateFault,
  InvalidDBProxyStateFault,
  InvalidDBSecurityGroupStateFault,
  InvalidDBShardGroupStateFault,
  InvalidDBSnapshotStateFault,
  InvalidDBSubnetGroupFault,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault,
  InvalidEventSubscriptionStateFault,
  InvalidExportTaskStateFault,
  InvalidGlobalClusterStateFault,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  IPRange,
  KMSKeyNotAccessibleFault,
  LimitlessDatabase,
  MasterUserSecret,
  MaxDBShardGroupLimitReached,
  NetworkTypeNotSupported,
  Option,
  OptionGroup,
  OptionGroupAlreadyExistsFault,
  OptionGroupMembership,
  OptionGroupNotFoundFault,
  OptionGroupQuotaExceededFault,
  OptionSetting,
  Outpost,
  PendingCloudwatchLogsExports,
  PendingMaintenanceAction,
  PendingModifiedValues,
  ProcessorFeature,
  ProvisionedIopsNotAvailableInAZFault,
  RdsCustomClusterConfiguration,
  ResourceNotFoundFault,
  ResourcePendingMaintenanceActions,
  RestoreWindow,
  ScalingConfiguration,
  ScalingConfigurationInfo,
  ServerlessV2FeaturesSupport,
  ServerlessV2ScalingConfiguration,
  ServerlessV2ScalingConfigurationInfo,
  SnapshotQuotaExceededFault,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault,
  SourceClusterNotSupportedFault,
  SourceDatabaseNotSupportedFault,
  SourceNotFoundFault,
  StorageQuotaExceededFault,
  StorageTypeNotSupportedFault,
  Subnet,
  SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault,
  SubscriptionNotFoundFault,
  SwitchoverDetail,
  Tag,
  TenantDatabase,
  TenantDatabaseAlreadyExistsFault,
  TenantDatabaseNotFoundFault,
  TenantDatabasePendingModifiedValues,
  TenantDatabaseQuotaExceededFault,
  Timezone,
  UnsupportedDBEngineVersionFault,
  UpgradeTarget,
  UserAuthConfig,
  UserAuthConfigInfo,
  VpcSecurityGroupMembership,
} from "../models/models_0";
import {
  AvailableProcessorFeature,
  Certificate,
  CertificateMessage,
  CloudwatchLogsExportConfiguration,
  ConnectionPoolConfiguration,
  ConnectionPoolConfigurationInfo,
  ContextAttribute,
  DBClusterAutomatedBackupMessage,
  DBClusterBacktrackMessage,
  DBClusterBacktrackNotFoundFault,
  DBClusterCapacityInfo,
  DBClusterEndpointMessage,
  DBClusterMessage,
  DBClusterParameterGroupDetails,
  DBClusterParameterGroupNameMessage,
  DBClusterParameterGroupsMessage,
  DBClusterRoleNotFoundFault,
  DBClusterSnapshotAttribute,
  DBClusterSnapshotAttributesResult,
  DBClusterSnapshotMessage,
  DBEngineVersionMessage,
  DBInstanceAutomatedBackupMessage,
  DBInstanceMessage,
  DBInstanceNotReadyFault,
  DBInstanceRoleNotFoundFault,
  DBLogFileNotFoundFault,
  DBMajorEngineVersion,
  DBParameterGroupDetails,
  DBParameterGroupNameMessage,
  DBParameterGroupsMessage,
  DBProxyTarget,
  DBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetGroup,
  DBProxyTargetNotFoundFault,
  DBRecommendation,
  DBRecommendationMessage,
  DBRecommendationsMessage,
  DBSecurityGroupMessage,
  DBSnapshotAttribute,
  DBSnapshotAttributesResult,
  DBSnapshotMessage,
  DBSnapshotTenantDatabase,
  DBSnapshotTenantDatabasesMessage,
  DBSubnetGroupMessage,
  DBUpgradeDependencyFailureFault,
  DeleteGlobalClusterResult,
  DeleteIntegrationMessage,
  DeleteOptionGroupMessage,
  DeleteTenantDatabaseMessage,
  DeleteTenantDatabaseResult,
  DeregisterDBProxyTargetsRequest,
  DeregisterDBProxyTargetsResponse,
  DescribeAccountAttributesMessage,
  DescribeBlueGreenDeploymentsRequest,
  DescribeBlueGreenDeploymentsResponse,
  DescribeCertificatesMessage,
  DescribeDBClusterAutomatedBackupsMessage,
  DescribeDBClusterBacktracksMessage,
  DescribeDBClusterEndpointsMessage,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParametersMessage,
  DescribeDBClustersMessage,
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
  DescribeDBClusterSnapshotsMessage,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstanceAutomatedBackupsMessage,
  DescribeDBInstancesMessage,
  DescribeDBLogFilesDetails,
  DescribeDBLogFilesMessage,
  DescribeDBLogFilesResponse,
  DescribeDBMajorEngineVersionsRequest,
  DescribeDBMajorEngineVersionsResponse,
  DescribeDBParameterGroupsMessage,
  DescribeDBParametersMessage,
  DescribeDBProxiesRequest,
  DescribeDBProxiesResponse,
  DescribeDBProxyEndpointsRequest,
  DescribeDBProxyEndpointsResponse,
  DescribeDBProxyTargetGroupsRequest,
  DescribeDBProxyTargetGroupsResponse,
  DescribeDBProxyTargetsRequest,
  DescribeDBProxyTargetsResponse,
  DescribeDBRecommendationsMessage,
  DescribeDBSecurityGroupsMessage,
  DescribeDBShardGroupsMessage,
  DescribeDBShardGroupsResponse,
  DescribeDBSnapshotAttributesMessage,
  DescribeDBSnapshotAttributesResult,
  DescribeDBSnapshotsMessage,
  DescribeDBSnapshotTenantDatabasesMessage,
  DescribeDBSubnetGroupsMessage,
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
  DescribeEngineDefaultParametersMessage,
  DescribeEngineDefaultParametersResult,
  DescribeEventCategoriesMessage,
  DescribeEventsMessage,
  DescribeEventSubscriptionsMessage,
  DescribeExportTasksMessage,
  DescribeGlobalClustersMessage,
  DescribeIntegrationsMessage,
  DescribeIntegrationsResponse,
  DescribeOptionGroupOptionsMessage,
  DescribeOptionGroupsMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
  DescribeReservedDBInstancesMessage,
  DescribeReservedDBInstancesOfferingsMessage,
  DescribeSourceRegionsMessage,
  DescribeTenantDatabasesMessage,
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
  DisableHttpEndpointRequest,
  DisableHttpEndpointResponse,
  DocLink,
  DoubleRange,
  DownloadDBLogFilePortionDetails,
  DownloadDBLogFilePortionMessage,
  EnableHttpEndpointRequest,
  EnableHttpEndpointResponse,
  EngineDefaults,
  Event,
  EventCategoriesMap,
  EventCategoriesMessage,
  EventsMessage,
  EventSubscriptionsMessage,
  ExportTaskAlreadyExistsFault,
  ExportTasksMessage,
  FailoverDBClusterMessage,
  FailoverDBClusterResult,
  FailoverGlobalClusterMessage,
  FailoverGlobalClusterResult,
  Filter,
  GlobalClustersMessage,
  IamRoleMissingPermissionsFault,
  IamRoleNotFoundFault,
  InsufficientAvailableIPsInSubnetFault,
  InsufficientDBClusterCapacityFault,
  InvalidDBClusterCapacityFault,
  InvalidExportOnlyFault,
  InvalidExportSourceStateFault,
  InvalidIntegrationStateFault,
  InvalidOptionGroupStateFault,
  InvalidResourceStateFault,
  InvalidRestoreFault,
  InvalidS3BucketFault,
  IssueDetails,
  ListTagsForResourceMessage,
  Metric,
  MetricQuery,
  MetricReference,
  MinimumEngineVersionPerAllowedValue,
  ModifyActivityStreamRequest,
  ModifyActivityStreamResponse,
  ModifyCertificatesMessage,
  ModifyCertificatesResult,
  ModifyCurrentDBClusterCapacityMessage,
  ModifyCustomDBEngineVersionMessage,
  ModifyDBClusterEndpointMessage,
  ModifyDBClusterMessage,
  ModifyDBClusterParameterGroupMessage,
  ModifyDBClusterResult,
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeResult,
  ModifyDBInstanceMessage,
  ModifyDBInstanceResult,
  ModifyDBParameterGroupMessage,
  ModifyDBProxyEndpointRequest,
  ModifyDBProxyEndpointResponse,
  ModifyDBProxyRequest,
  ModifyDBProxyResponse,
  ModifyDBProxyTargetGroupRequest,
  ModifyDBProxyTargetGroupResponse,
  ModifyDBRecommendationMessage,
  ModifyDBShardGroupMessage,
  ModifyDBSnapshotAttributeMessage,
  ModifyDBSnapshotAttributeResult,
  ModifyDBSnapshotMessage,
  ModifyDBSnapshotResult,
  ModifyDBSubnetGroupMessage,
  ModifyDBSubnetGroupResult,
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResult,
  ModifyGlobalClusterMessage,
  ModifyGlobalClusterResult,
  ModifyIntegrationMessage,
  ModifyOptionGroupMessage,
  ModifyOptionGroupResult,
  ModifyTenantDatabaseMessage,
  ModifyTenantDatabaseResult,
  OptionConfiguration,
  OptionGroupOption,
  OptionGroupOptionSetting,
  OptionGroupOptionsMessage,
  OptionGroups,
  OptionVersion,
  OrderableDBInstanceOption,
  OrderableDBInstanceOptionsMessage,
  Parameter,
  PendingMaintenanceActionsMessage,
  PerformanceInsightsMetricDimensionGroup,
  PerformanceInsightsMetricQuery,
  PerformanceIssueDetails,
  PointInTimeRestoreNotEnabledFault,
  PromoteReadReplicaDBClusterMessage,
  PromoteReadReplicaDBClusterResult,
  PromoteReadReplicaMessage,
  PromoteReadReplicaResult,
  PurchaseReservedDBInstancesOfferingMessage,
  PurchaseReservedDBInstancesOfferingResult,
  Range,
  RebootDBClusterMessage,
  RebootDBClusterResult,
  RebootDBInstanceMessage,
  RebootDBInstanceResult,
  RebootDBShardGroupMessage,
  RecommendedAction,
  RecommendedActionParameter,
  RecommendedActionUpdate,
  RecurringCharge,
  ReferenceDetails,
  RegisterDBProxyTargetsRequest,
  RegisterDBProxyTargetsResponse,
  RemoveFromGlobalClusterMessage,
  RemoveFromGlobalClusterResult,
  RemoveRoleFromDBClusterMessage,
  RemoveRoleFromDBInstanceMessage,
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
  RemoveTagsFromResourceMessage,
  ReservedDBInstance,
  ReservedDBInstanceAlreadyExistsFault,
  ReservedDBInstanceMessage,
  ReservedDBInstanceNotFoundFault,
  ReservedDBInstanceQuotaExceededFault,
  ReservedDBInstancesOffering,
  ReservedDBInstancesOfferingMessage,
  ReservedDBInstancesOfferingNotFoundFault,
  ResetDBClusterParameterGroupMessage,
  ResetDBParameterGroupMessage,
  RestoreDBClusterFromS3Message,
  RestoreDBClusterFromS3Result,
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterFromSnapshotResult,
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBClusterToPointInTimeResult,
  RestoreDBInstanceFromDBSnapshotMessage,
  RestoreDBInstanceFromDBSnapshotResult,
  RestoreDBInstanceFromS3Message,
  RestoreDBInstanceFromS3Result,
  RestoreDBInstanceToPointInTimeMessage,
  RestoreDBInstanceToPointInTimeResult,
  RevokeDBSecurityGroupIngressMessage,
  RevokeDBSecurityGroupIngressResult,
  ScalarReferenceDetails,
  SharedSnapshotQuotaExceededFault,
  SourceRegion,
  SourceRegionMessage,
  StartActivityStreamRequest,
  StartActivityStreamResponse,
  StartDBClusterMessage,
  StartDBClusterResult,
  StartDBInstanceAutomatedBackupsReplicationMessage,
  StartDBInstanceAutomatedBackupsReplicationResult,
  StartDBInstanceMessage,
  StartDBInstanceResult,
  StartExportTaskMessage,
  StopActivityStreamRequest,
  StopActivityStreamResponse,
  StopDBClusterMessage,
  StopDBClusterResult,
  StopDBInstanceAutomatedBackupsReplicationMessage,
  StopDBInstanceAutomatedBackupsReplicationResult,
  StopDBInstanceMessage,
  StopDBInstanceResult,
  StorageTypeNotAvailableFault,
  SubnetAlreadyInUse,
  SupportedEngineLifecycle,
  SwitchoverBlueGreenDeploymentRequest,
  SwitchoverBlueGreenDeploymentResponse,
  SwitchoverGlobalClusterMessage,
  SwitchoverGlobalClusterResult,
  SwitchoverReadReplicaMessage,
  SwitchoverReadReplicaResult,
  TagListMessage,
  TargetHealth,
  TenantDatabasesMessage,
  ValidDBInstanceModificationsMessage,
  ValidStorageOptions,
} from "../models/models_1";
import { RDSServiceException as __BaseException } from "../models/RDSServiceException";

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
    [_A]: _ARTDBC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAddRoleToDBInstanceCommand
 */
export const se_AddRoleToDBInstanceCommand = async (
  input: AddRoleToDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddRoleToDBInstanceMessage(input, context),
    [_A]: _ARTDBI,
    [_V]: _,
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
 * serializeAws_queryAuthorizeDBSecurityGroupIngressCommand
 */
export const se_AuthorizeDBSecurityGroupIngressCommand = async (
  input: AuthorizeDBSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AuthorizeDBSecurityGroupIngressMessage(input, context),
    [_A]: _ADBSGI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBacktrackDBClusterCommand
 */
export const se_BacktrackDBClusterCommand = async (
  input: BacktrackDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BacktrackDBClusterMessage(input, context),
    [_A]: _BDBC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCancelExportTaskCommand
 */
export const se_CancelExportTaskCommand = async (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CancelExportTaskMessage(input, context),
    [_A]: _CET,
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
    [_A]: _CDBPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopyDBSnapshotCommand
 */
export const se_CopyDBSnapshotCommand = async (
  input: CopyDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopyDBSnapshotMessage(input, context),
    [_A]: _CDBS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopyOptionGroupCommand
 */
export const se_CopyOptionGroupCommand = async (
  input: CopyOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopyOptionGroupMessage(input, context),
    [_A]: _COG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateBlueGreenDeploymentCommand
 */
export const se_CreateBlueGreenDeploymentCommand = async (
  input: CreateBlueGreenDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateBlueGreenDeploymentRequest(input, context),
    [_A]: _CBGD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateCustomDBEngineVersionCommand
 */
export const se_CreateCustomDBEngineVersionCommand = async (
  input: CreateCustomDBEngineVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateCustomDBEngineVersionMessage(input, context),
    [_A]: _CCDBEV,
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
    [_A]: _CDBCE,
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
 * serializeAws_queryCreateDBInstanceReadReplicaCommand
 */
export const se_CreateDBInstanceReadReplicaCommand = async (
  input: CreateDBInstanceReadReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBInstanceReadReplicaMessage(input, context),
    [_A]: _CDBIRR,
    [_V]: _,
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
    [_A]: _CDBPGr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBProxyCommand
 */
export const se_CreateDBProxyCommand = async (
  input: CreateDBProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBProxyRequest(input, context),
    [_A]: _CDBP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBProxyEndpointCommand
 */
export const se_CreateDBProxyEndpointCommand = async (
  input: CreateDBProxyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBProxyEndpointRequest(input, context),
    [_A]: _CDBPE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBSecurityGroupCommand
 */
export const se_CreateDBSecurityGroupCommand = async (
  input: CreateDBSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBSecurityGroupMessage(input, context),
    [_A]: _CDBSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBShardGroupCommand
 */
export const se_CreateDBShardGroupCommand = async (
  input: CreateDBShardGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBShardGroupMessage(input, context),
    [_A]: _CDBSGr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDBSnapshotCommand
 */
export const se_CreateDBSnapshotCommand = async (
  input: CreateDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDBSnapshotMessage(input, context),
    [_A]: _CDBSr,
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
    [_A]: _CDBSGre,
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
 * serializeAws_queryCreateIntegrationCommand
 */
export const se_CreateIntegrationCommand = async (
  input: CreateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateIntegrationMessage(input, context),
    [_A]: _CI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateOptionGroupCommand
 */
export const se_CreateOptionGroupCommand = async (
  input: CreateOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateOptionGroupMessage(input, context),
    [_A]: _COGr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateTenantDatabaseCommand
 */
export const se_CreateTenantDatabaseCommand = async (
  input: CreateTenantDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateTenantDatabaseMessage(input, context),
    [_A]: _CTD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteBlueGreenDeploymentCommand
 */
export const se_DeleteBlueGreenDeploymentCommand = async (
  input: DeleteBlueGreenDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteBlueGreenDeploymentRequest(input, context),
    [_A]: _DBGD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteCustomDBEngineVersionCommand
 */
export const se_DeleteCustomDBEngineVersionCommand = async (
  input: DeleteCustomDBEngineVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteCustomDBEngineVersionMessage(input, context),
    [_A]: _DCDBEV,
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
 * serializeAws_queryDeleteDBClusterAutomatedBackupCommand
 */
export const se_DeleteDBClusterAutomatedBackupCommand = async (
  input: DeleteDBClusterAutomatedBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBClusterAutomatedBackupMessage(input, context),
    [_A]: _DDBCAB,
    [_V]: _,
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
    [_A]: _DDBCE,
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
 * serializeAws_queryDeleteDBInstanceAutomatedBackupCommand
 */
export const se_DeleteDBInstanceAutomatedBackupCommand = async (
  input: DeleteDBInstanceAutomatedBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBInstanceAutomatedBackupMessage(input, context),
    [_A]: _DDBIAB,
    [_V]: _,
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
    [_A]: _DDBPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBProxyCommand
 */
export const se_DeleteDBProxyCommand = async (
  input: DeleteDBProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBProxyRequest(input, context),
    [_A]: _DDBP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBProxyEndpointCommand
 */
export const se_DeleteDBProxyEndpointCommand = async (
  input: DeleteDBProxyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBProxyEndpointRequest(input, context),
    [_A]: _DDBPE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBSecurityGroupCommand
 */
export const se_DeleteDBSecurityGroupCommand = async (
  input: DeleteDBSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBSecurityGroupMessage(input, context),
    [_A]: _DDBSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBShardGroupCommand
 */
export const se_DeleteDBShardGroupCommand = async (
  input: DeleteDBShardGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBShardGroupMessage(input, context),
    [_A]: _DDBSGe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDBSnapshotCommand
 */
export const se_DeleteDBSnapshotCommand = async (
  input: DeleteDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDBSnapshotMessage(input, context),
    [_A]: _DDBS,
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
    [_A]: _DDBSGel,
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
 * serializeAws_queryDeleteIntegrationCommand
 */
export const se_DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteIntegrationMessage(input, context),
    [_A]: _DI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteOptionGroupCommand
 */
export const se_DeleteOptionGroupCommand = async (
  input: DeleteOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteOptionGroupMessage(input, context),
    [_A]: _DOG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTenantDatabaseCommand
 */
export const se_DeleteTenantDatabaseCommand = async (
  input: DeleteTenantDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTenantDatabaseMessage(input, context),
    [_A]: _DTD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeregisterDBProxyTargetsCommand
 */
export const se_DeregisterDBProxyTargetsCommand = async (
  input: DeregisterDBProxyTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeregisterDBProxyTargetsRequest(input, context),
    [_A]: _DDBPT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAccountAttributesCommand
 */
export const se_DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAccountAttributesMessage(input, context),
    [_A]: _DAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeBlueGreenDeploymentsCommand
 */
export const se_DescribeBlueGreenDeploymentsCommand = async (
  input: DescribeBlueGreenDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeBlueGreenDeploymentsRequest(input, context),
    [_A]: _DBGDe,
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
 * serializeAws_queryDescribeDBClusterAutomatedBackupsCommand
 */
export const se_DescribeDBClusterAutomatedBackupsCommand = async (
  input: DescribeDBClusterAutomatedBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClusterAutomatedBackupsMessage(input, context),
    [_A]: _DDBCABe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBClusterBacktracksCommand
 */
export const se_DescribeDBClusterBacktracksCommand = async (
  input: DescribeDBClusterBacktracksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBClusterBacktracksMessage(input, context),
    [_A]: _DDBCB,
    [_V]: _,
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
    [_A]: _DDBCEe,
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
 * serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand
 */
export const se_DescribeDBInstanceAutomatedBackupsCommand = async (
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBInstanceAutomatedBackupsMessage(input, context),
    [_A]: _DDBIABe,
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
 * serializeAws_queryDescribeDBLogFilesCommand
 */
export const se_DescribeDBLogFilesCommand = async (
  input: DescribeDBLogFilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBLogFilesMessage(input, context),
    [_A]: _DDBLF,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBMajorEngineVersionsCommand
 */
export const se_DescribeDBMajorEngineVersionsCommand = async (
  input: DescribeDBMajorEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBMajorEngineVersionsRequest(input, context),
    [_A]: _DDBMEV,
    [_V]: _,
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
    [_A]: _DDBPGe,
    [_V]: _,
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
    [_A]: _DDBPe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBProxiesCommand
 */
export const se_DescribeDBProxiesCommand = async (
  input: DescribeDBProxiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBProxiesRequest(input, context),
    [_A]: _DDBPes,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBProxyEndpointsCommand
 */
export const se_DescribeDBProxyEndpointsCommand = async (
  input: DescribeDBProxyEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBProxyEndpointsRequest(input, context),
    [_A]: _DDBPEe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBProxyTargetGroupsCommand
 */
export const se_DescribeDBProxyTargetGroupsCommand = async (
  input: DescribeDBProxyTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBProxyTargetGroupsRequest(input, context),
    [_A]: _DDBPTG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBProxyTargetsCommand
 */
export const se_DescribeDBProxyTargetsCommand = async (
  input: DescribeDBProxyTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBProxyTargetsRequest(input, context),
    [_A]: _DDBPTe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBRecommendationsCommand
 */
export const se_DescribeDBRecommendationsCommand = async (
  input: DescribeDBRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBRecommendationsMessage(input, context),
    [_A]: _DDBR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBSecurityGroupsCommand
 */
export const se_DescribeDBSecurityGroupsCommand = async (
  input: DescribeDBSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBSecurityGroupsMessage(input, context),
    [_A]: _DDBSGes,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBShardGroupsCommand
 */
export const se_DescribeDBShardGroupsCommand = async (
  input: DescribeDBShardGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBShardGroupsMessage(input, context),
    [_A]: _DDBSGesc,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBSnapshotAttributesCommand
 */
export const se_DescribeDBSnapshotAttributesCommand = async (
  input: DescribeDBSnapshotAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBSnapshotAttributesMessage(input, context),
    [_A]: _DDBSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBSnapshotsCommand
 */
export const se_DescribeDBSnapshotsCommand = async (
  input: DescribeDBSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBSnapshotsMessage(input, context),
    [_A]: _DDBSe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDBSnapshotTenantDatabasesCommand
 */
export const se_DescribeDBSnapshotTenantDatabasesCommand = async (
  input: DescribeDBSnapshotTenantDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDBSnapshotTenantDatabasesMessage(input, context),
    [_A]: _DDBSTD,
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
    [_A]: _DDBSGescr,
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
 * serializeAws_queryDescribeExportTasksCommand
 */
export const se_DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeExportTasksMessage(input, context),
    [_A]: _DET,
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
 * serializeAws_queryDescribeIntegrationsCommand
 */
export const se_DescribeIntegrationsCommand = async (
  input: DescribeIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeIntegrationsMessage(input, context),
    [_A]: _DIe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeOptionGroupOptionsCommand
 */
export const se_DescribeOptionGroupOptionsCommand = async (
  input: DescribeOptionGroupOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeOptionGroupOptionsMessage(input, context),
    [_A]: _DOGO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeOptionGroupsCommand
 */
export const se_DescribeOptionGroupsCommand = async (
  input: DescribeOptionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeOptionGroupsMessage(input, context),
    [_A]: _DOGe,
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
 * serializeAws_queryDescribeReservedDBInstancesCommand
 */
export const se_DescribeReservedDBInstancesCommand = async (
  input: DescribeReservedDBInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReservedDBInstancesMessage(input, context),
    [_A]: _DRDBI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReservedDBInstancesOfferingsCommand
 */
export const se_DescribeReservedDBInstancesOfferingsCommand = async (
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReservedDBInstancesOfferingsMessage(input, context),
    [_A]: _DRDBIO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeSourceRegionsCommand
 */
export const se_DescribeSourceRegionsCommand = async (
  input: DescribeSourceRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeSourceRegionsMessage(input, context),
    [_A]: _DSR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTenantDatabasesCommand
 */
export const se_DescribeTenantDatabasesCommand = async (
  input: DescribeTenantDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTenantDatabasesMessage(input, context),
    [_A]: _DTDe,
    [_V]: _,
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
    [_A]: _DVDBIM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableHttpEndpointCommand
 */
export const se_DisableHttpEndpointCommand = async (
  input: DisableHttpEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableHttpEndpointRequest(input, context),
    [_A]: _DHE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDownloadDBLogFilePortionCommand
 */
export const se_DownloadDBLogFilePortionCommand = async (
  input: DownloadDBLogFilePortionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DownloadDBLogFilePortionMessage(input, context),
    [_A]: _DDBLFP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableHttpEndpointCommand
 */
export const se_EnableHttpEndpointCommand = async (
  input: EnableHttpEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableHttpEndpointRequest(input, context),
    [_A]: _EHE,
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
 * serializeAws_queryModifyActivityStreamCommand
 */
export const se_ModifyActivityStreamCommand = async (
  input: ModifyActivityStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyActivityStreamRequest(input, context),
    [_A]: _MAS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCertificatesCommand
 */
export const se_ModifyCertificatesCommand = async (
  input: ModifyCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCertificatesMessage(input, context),
    [_A]: _MC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCurrentDBClusterCapacityCommand
 */
export const se_ModifyCurrentDBClusterCapacityCommand = async (
  input: ModifyCurrentDBClusterCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCurrentDBClusterCapacityMessage(input, context),
    [_A]: _MCDBCC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCustomDBEngineVersionCommand
 */
export const se_ModifyCustomDBEngineVersionCommand = async (
  input: ModifyCustomDBEngineVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCustomDBEngineVersionMessage(input, context),
    [_A]: _MCDBEV,
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
    [_A]: _MDBCE,
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
    [_A]: _MDBPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBProxyCommand
 */
export const se_ModifyDBProxyCommand = async (
  input: ModifyDBProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBProxyRequest(input, context),
    [_A]: _MDBP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBProxyEndpointCommand
 */
export const se_ModifyDBProxyEndpointCommand = async (
  input: ModifyDBProxyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBProxyEndpointRequest(input, context),
    [_A]: _MDBPE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBProxyTargetGroupCommand
 */
export const se_ModifyDBProxyTargetGroupCommand = async (
  input: ModifyDBProxyTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBProxyTargetGroupRequest(input, context),
    [_A]: _MDBPTG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBRecommendationCommand
 */
export const se_ModifyDBRecommendationCommand = async (
  input: ModifyDBRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBRecommendationMessage(input, context),
    [_A]: _MDBR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBShardGroupCommand
 */
export const se_ModifyDBShardGroupCommand = async (
  input: ModifyDBShardGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBShardGroupMessage(input, context),
    [_A]: _MDBSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBSnapshotCommand
 */
export const se_ModifyDBSnapshotCommand = async (
  input: ModifyDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBSnapshotMessage(input, context),
    [_A]: _MDBS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyDBSnapshotAttributeCommand
 */
export const se_ModifyDBSnapshotAttributeCommand = async (
  input: ModifyDBSnapshotAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyDBSnapshotAttributeMessage(input, context),
    [_A]: _MDBSA,
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
    [_A]: _MDBSGo,
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
 * serializeAws_queryModifyIntegrationCommand
 */
export const se_ModifyIntegrationCommand = async (
  input: ModifyIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyIntegrationMessage(input, context),
    [_A]: _MI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyOptionGroupCommand
 */
export const se_ModifyOptionGroupCommand = async (
  input: ModifyOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyOptionGroupMessage(input, context),
    [_A]: _MOG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyTenantDatabaseCommand
 */
export const se_ModifyTenantDatabaseCommand = async (
  input: ModifyTenantDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyTenantDatabaseMessage(input, context),
    [_A]: _MTD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPromoteReadReplicaCommand
 */
export const se_PromoteReadReplicaCommand = async (
  input: PromoteReadReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PromoteReadReplicaMessage(input, context),
    [_A]: _PRR,
    [_V]: _,
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
    [_A]: _PRRDBC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPurchaseReservedDBInstancesOfferingCommand
 */
export const se_PurchaseReservedDBInstancesOfferingCommand = async (
  input: PurchaseReservedDBInstancesOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PurchaseReservedDBInstancesOfferingMessage(input, context),
    [_A]: _PRDBIO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRebootDBClusterCommand
 */
export const se_RebootDBClusterCommand = async (
  input: RebootDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RebootDBClusterMessage(input, context),
    [_A]: _RDBC,
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
 * serializeAws_queryRebootDBShardGroupCommand
 */
export const se_RebootDBShardGroupCommand = async (
  input: RebootDBShardGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RebootDBShardGroupMessage(input, context),
    [_A]: _RDBSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRegisterDBProxyTargetsCommand
 */
export const se_RegisterDBProxyTargetsCommand = async (
  input: RegisterDBProxyTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RegisterDBProxyTargetsRequest(input, context),
    [_A]: _RDBPT,
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
    [_A]: _RRFDBC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveRoleFromDBInstanceCommand
 */
export const se_RemoveRoleFromDBInstanceCommand = async (
  input: RemoveRoleFromDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveRoleFromDBInstanceMessage(input, context),
    [_A]: _RRFDBI,
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
    [_A]: _RDBPG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestoreDBClusterFromS3Command
 */
export const se_RestoreDBClusterFromS3Command = async (
  input: RestoreDBClusterFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreDBClusterFromS3Message(input, context),
    [_A]: _RDBCFS,
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
    [_A]: _RDBCFSe,
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
 * serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand
 */
export const se_RestoreDBInstanceFromDBSnapshotCommand = async (
  input: RestoreDBInstanceFromDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreDBInstanceFromDBSnapshotMessage(input, context),
    [_A]: _RDBIFDBS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestoreDBInstanceFromS3Command
 */
export const se_RestoreDBInstanceFromS3Command = async (
  input: RestoreDBInstanceFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreDBInstanceFromS3Message(input, context),
    [_A]: _RDBIFS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestoreDBInstanceToPointInTimeCommand
 */
export const se_RestoreDBInstanceToPointInTimeCommand = async (
  input: RestoreDBInstanceToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreDBInstanceToPointInTimeMessage(input, context),
    [_A]: _RDBITPIT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRevokeDBSecurityGroupIngressCommand
 */
export const se_RevokeDBSecurityGroupIngressCommand = async (
  input: RevokeDBSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RevokeDBSecurityGroupIngressMessage(input, context),
    [_A]: _RDBSGI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartActivityStreamCommand
 */
export const se_StartActivityStreamCommand = async (
  input: StartActivityStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartActivityStreamRequest(input, context),
    [_A]: _SAS,
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
 * serializeAws_queryStartDBInstanceCommand
 */
export const se_StartDBInstanceCommand = async (
  input: StartDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartDBInstanceMessage(input, context),
    [_A]: _SDBI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand
 */
export const se_StartDBInstanceAutomatedBackupsReplicationCommand = async (
  input: StartDBInstanceAutomatedBackupsReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartDBInstanceAutomatedBackupsReplicationMessage(input, context),
    [_A]: _SDBIABR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartExportTaskCommand
 */
export const se_StartExportTaskCommand = async (
  input: StartExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartExportTaskMessage(input, context),
    [_A]: _SET,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStopActivityStreamCommand
 */
export const se_StopActivityStreamCommand = async (
  input: StopActivityStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StopActivityStreamRequest(input, context),
    [_A]: _SASt,
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
 * serializeAws_queryStopDBInstanceCommand
 */
export const se_StopDBInstanceCommand = async (
  input: StopDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StopDBInstanceMessage(input, context),
    [_A]: _SDBIt,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand
 */
export const se_StopDBInstanceAutomatedBackupsReplicationCommand = async (
  input: StopDBInstanceAutomatedBackupsReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StopDBInstanceAutomatedBackupsReplicationMessage(input, context),
    [_A]: _SDBIABRt,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySwitchoverBlueGreenDeploymentCommand
 */
export const se_SwitchoverBlueGreenDeploymentCommand = async (
  input: SwitchoverBlueGreenDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SwitchoverBlueGreenDeploymentRequest(input, context),
    [_A]: _SBGD,
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
 * serializeAws_querySwitchoverReadReplicaCommand
 */
export const se_SwitchoverReadReplicaCommand = async (
  input: SwitchoverReadReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SwitchoverReadReplicaMessage(input, context),
    [_A]: _SRR,
    [_V]: _,
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
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddRoleToDBInstanceCommand
 */
export const de_AddRoleToDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
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
 * deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand
 */
export const de_AuthorizeDBSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AuthorizeDBSecurityGroupIngressResult(data.AuthorizeDBSecurityGroupIngressResult, context);
  const response: AuthorizeDBSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBacktrackDBClusterCommand
 */
export const de_BacktrackDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BacktrackDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterBacktrack(data.BacktrackDBClusterResult, context);
  const response: BacktrackDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCancelExportTaskCommand
 */
export const de_CancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportTask(data.CancelExportTaskResult, context);
  const response: CancelExportTaskCommandOutput = {
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
 * deserializeAws_queryCopyDBParameterGroupCommand
 */
export const de_CopyDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCopyDBSnapshotCommand
 */
export const de_CopyDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyDBSnapshotResult(data.CopyDBSnapshotResult, context);
  const response: CopyDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopyOptionGroupCommand
 */
export const de_CopyOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyOptionGroupResult(data.CopyOptionGroupResult, context);
  const response: CopyOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateBlueGreenDeploymentCommand
 */
export const de_CreateBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBlueGreenDeploymentResponse(data.CreateBlueGreenDeploymentResult, context);
  const response: CreateBlueGreenDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateCustomDBEngineVersionCommand
 */
export const de_CreateCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBEngineVersion(data.CreateCustomDBEngineVersionResult, context);
  const response: CreateCustomDBEngineVersionCommandOutput = {
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
 * deserializeAws_queryCreateDBClusterEndpointCommand
 */
export const de_CreateDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterEndpoint(data.CreateDBClusterEndpointResult, context);
  const response: CreateDBClusterEndpointCommandOutput = {
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
 * deserializeAws_queryCreateDBInstanceReadReplicaCommand
 */
export const de_CreateDBInstanceReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBInstanceReadReplicaResult(data.CreateDBInstanceReadReplicaResult, context);
  const response: CreateDBInstanceReadReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBParameterGroupCommand
 */
export const de_CreateDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateDBProxyCommand
 */
export const de_CreateDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBProxyResponse(data.CreateDBProxyResult, context);
  const response: CreateDBProxyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBProxyEndpointCommand
 */
export const de_CreateDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBProxyEndpointResponse(data.CreateDBProxyEndpointResult, context);
  const response: CreateDBProxyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBSecurityGroupCommand
 */
export const de_CreateDBSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBSecurityGroupResult(data.CreateDBSecurityGroupResult, context);
  const response: CreateDBSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBShardGroupCommand
 */
export const de_CreateDBShardGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBShardGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBShardGroup(data.CreateDBShardGroupResult, context);
  const response: CreateDBShardGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDBSnapshotCommand
 */
export const de_CreateDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDBSnapshotResult(data.CreateDBSnapshotResult, context);
  const response: CreateDBSnapshotCommandOutput = {
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
 * deserializeAws_queryCreateIntegrationCommand
 */
export const de_CreateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Integration(data.CreateIntegrationResult, context);
  const response: CreateIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateOptionGroupCommand
 */
export const de_CreateOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOptionGroupResult(data.CreateOptionGroupResult, context);
  const response: CreateOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateTenantDatabaseCommand
 */
export const de_CreateTenantDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTenantDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTenantDatabaseResult(data.CreateTenantDatabaseResult, context);
  const response: CreateTenantDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteBlueGreenDeploymentCommand
 */
export const de_DeleteBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBlueGreenDeploymentResponse(data.DeleteBlueGreenDeploymentResult, context);
  const response: DeleteBlueGreenDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCustomDBEngineVersionCommand
 */
export const de_DeleteCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBEngineVersion(data.DeleteCustomDBEngineVersionResult, context);
  const response: DeleteCustomDBEngineVersionCommandOutput = {
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
 * deserializeAws_queryDeleteDBClusterAutomatedBackupCommand
 */
export const de_DeleteDBClusterAutomatedBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterAutomatedBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBClusterAutomatedBackupResult(data.DeleteDBClusterAutomatedBackupResult, context);
  const response: DeleteDBClusterAutomatedBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBClusterEndpointCommand
 */
export const de_DeleteDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterEndpoint(data.DeleteDBClusterEndpointResult, context);
  const response: DeleteDBClusterEndpointCommandOutput = {
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
 * deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand
 */
export const de_DeleteDBInstanceAutomatedBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceAutomatedBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBInstanceAutomatedBackupResult(data.DeleteDBInstanceAutomatedBackupResult, context);
  const response: DeleteDBInstanceAutomatedBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBParameterGroupCommand
 */
export const de_DeleteDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBProxyCommand
 */
export const de_DeleteDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBProxyResponse(data.DeleteDBProxyResult, context);
  const response: DeleteDBProxyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBProxyEndpointCommand
 */
export const de_DeleteDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBProxyEndpointResponse(data.DeleteDBProxyEndpointResult, context);
  const response: DeleteDBProxyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBSecurityGroupCommand
 */
export const de_DeleteDBSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBShardGroupCommand
 */
export const de_DeleteDBShardGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBShardGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBShardGroup(data.DeleteDBShardGroupResult, context);
  const response: DeleteDBShardGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBSnapshotCommand
 */
export const de_DeleteDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDBSnapshotResult(data.DeleteDBSnapshotResult, context);
  const response: DeleteDBSnapshotCommandOutput = {
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
 * deserializeAws_queryDeleteIntegrationCommand
 */
export const de_DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Integration(data.DeleteIntegrationResult, context);
  const response: DeleteIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteOptionGroupCommand
 */
export const de_DeleteOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTenantDatabaseCommand
 */
export const de_DeleteTenantDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTenantDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTenantDatabaseResult(data.DeleteTenantDatabaseResult, context);
  const response: DeleteTenantDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeregisterDBProxyTargetsCommand
 */
export const de_DeregisterDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterDBProxyTargetsResponse(data.DeregisterDBProxyTargetsResult, context);
  const response: DeregisterDBProxyTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AccountAttributesMessage(data.DescribeAccountAttributesResult, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeBlueGreenDeploymentsCommand
 */
export const de_DescribeBlueGreenDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBlueGreenDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBlueGreenDeploymentsResponse(data.DescribeBlueGreenDeploymentsResult, context);
  const response: DescribeBlueGreenDeploymentsCommandOutput = {
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
 * deserializeAws_queryDescribeDBClusterAutomatedBackupsCommand
 */
export const de_DescribeDBClusterAutomatedBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterAutomatedBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterAutomatedBackupMessage(data.DescribeDBClusterAutomatedBackupsResult, context);
  const response: DescribeDBClusterAutomatedBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterBacktracksCommand
 */
export const de_DescribeDBClusterBacktracksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterBacktracksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterBacktrackMessage(data.DescribeDBClusterBacktracksResult, context);
  const response: DescribeDBClusterBacktracksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBClusterEndpointsCommand
 */
export const de_DescribeDBClusterEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand
 */
export const de_DescribeDBInstanceAutomatedBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBInstanceAutomatedBackupMessage(data.DescribeDBInstanceAutomatedBackupsResult, context);
  const response: DescribeDBInstanceAutomatedBackupsCommandOutput = {
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
 * deserializeAws_queryDescribeDBLogFilesCommand
 */
export const de_DescribeDBLogFilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBLogFilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBLogFilesResponse(data.DescribeDBLogFilesResult, context);
  const response: DescribeDBLogFilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBMajorEngineVersionsCommand
 */
export const de_DescribeDBMajorEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBMajorEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBMajorEngineVersionsResponse(data.DescribeDBMajorEngineVersionsResult, context);
  const response: DescribeDBMajorEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBParameterGroupsCommand
 */
export const de_DescribeDBParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBParametersCommand
 */
export const de_DescribeDBParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDBProxiesCommand
 */
export const de_DescribeDBProxiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBProxiesResponse(data.DescribeDBProxiesResult, context);
  const response: DescribeDBProxiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBProxyEndpointsCommand
 */
export const de_DescribeDBProxyEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBProxyEndpointsResponse(data.DescribeDBProxyEndpointsResult, context);
  const response: DescribeDBProxyEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBProxyTargetGroupsCommand
 */
export const de_DescribeDBProxyTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBProxyTargetGroupsResponse(data.DescribeDBProxyTargetGroupsResult, context);
  const response: DescribeDBProxyTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBProxyTargetsCommand
 */
export const de_DescribeDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBProxyTargetsResponse(data.DescribeDBProxyTargetsResult, context);
  const response: DescribeDBProxyTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBRecommendationsCommand
 */
export const de_DescribeDBRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBRecommendationsMessage(data.DescribeDBRecommendationsResult, context);
  const response: DescribeDBRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBSecurityGroupsCommand
 */
export const de_DescribeDBSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBSecurityGroupMessage(data.DescribeDBSecurityGroupsResult, context);
  const response: DescribeDBSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBShardGroupsCommand
 */
export const de_DescribeDBShardGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBShardGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBShardGroupsResponse(data.DescribeDBShardGroupsResult, context);
  const response: DescribeDBShardGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBSnapshotAttributesCommand
 */
export const de_DescribeDBSnapshotAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDBSnapshotAttributesResult(data.DescribeDBSnapshotAttributesResult, context);
  const response: DescribeDBSnapshotAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBSnapshotsCommand
 */
export const de_DescribeDBSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBSnapshotMessage(data.DescribeDBSnapshotsResult, context);
  const response: DescribeDBSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDBSnapshotTenantDatabasesCommand
 */
export const de_DescribeDBSnapshotTenantDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotTenantDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBSnapshotTenantDatabasesMessage(data.DescribeDBSnapshotTenantDatabasesResult, context);
  const response: DescribeDBSnapshotTenantDatabasesCommandOutput = {
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
 * deserializeAws_queryDescribeExportTasksCommand
 */
export const de_DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportTasksMessage(data.DescribeExportTasksResult, context);
  const response: DescribeExportTasksCommandOutput = {
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
 * deserializeAws_queryDescribeIntegrationsCommand
 */
export const de_DescribeIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIntegrationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeIntegrationsResponse(data.DescribeIntegrationsResult, context);
  const response: DescribeIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeOptionGroupOptionsCommand
 */
export const de_DescribeOptionGroupOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OptionGroupOptionsMessage(data.DescribeOptionGroupOptionsResult, context);
  const response: DescribeOptionGroupOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeOptionGroupsCommand
 */
export const de_DescribeOptionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OptionGroups(data.DescribeOptionGroupsResult, context);
  const response: DescribeOptionGroupsCommandOutput = {
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
 * deserializeAws_queryDescribeReservedDBInstancesCommand
 */
export const de_DescribeReservedDBInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReservedDBInstanceMessage(data.DescribeReservedDBInstancesResult, context);
  const response: DescribeReservedDBInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand
 */
export const de_DescribeReservedDBInstancesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReservedDBInstancesOfferingMessage(data.DescribeReservedDBInstancesOfferingsResult, context);
  const response: DescribeReservedDBInstancesOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSourceRegionsCommand
 */
export const de_DescribeSourceRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SourceRegionMessage(data.DescribeSourceRegionsResult, context);
  const response: DescribeSourceRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTenantDatabasesCommand
 */
export const de_DescribeTenantDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTenantDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TenantDatabasesMessage(data.DescribeTenantDatabasesResult, context);
  const response: DescribeTenantDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeValidDBInstanceModificationsCommand
 */
export const de_DescribeValidDBInstanceModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeValidDBInstanceModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDisableHttpEndpointCommand
 */
export const de_DisableHttpEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHttpEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableHttpEndpointResponse(data.DisableHttpEndpointResult, context);
  const response: DisableHttpEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDownloadDBLogFilePortionCommand
 */
export const de_DownloadDBLogFilePortionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DownloadDBLogFilePortionDetails(data.DownloadDBLogFilePortionResult, context);
  const response: DownloadDBLogFilePortionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnableHttpEndpointCommand
 */
export const de_EnableHttpEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHttpEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableHttpEndpointResponse(data.EnableHttpEndpointResult, context);
  const response: EnableHttpEndpointCommandOutput = {
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
 * deserializeAws_queryModifyActivityStreamCommand
 */
export const de_ModifyActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyActivityStreamResponse(data.ModifyActivityStreamResult, context);
  const response: ModifyActivityStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCertificatesCommand
 */
export const de_ModifyCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyCertificatesResult(data.ModifyCertificatesResult, context);
  const response: ModifyCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCurrentDBClusterCapacityCommand
 */
export const de_ModifyCurrentDBClusterCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCurrentDBClusterCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterCapacityInfo(data.ModifyCurrentDBClusterCapacityResult, context);
  const response: ModifyCurrentDBClusterCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCustomDBEngineVersionCommand
 */
export const de_ModifyCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBEngineVersion(data.ModifyCustomDBEngineVersionResult, context);
  const response: ModifyCustomDBEngineVersionCommandOutput = {
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
 * deserializeAws_queryModifyDBClusterEndpointCommand
 */
export const de_ModifyDBClusterEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBClusterEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBClusterEndpoint(data.ModifyDBClusterEndpointResult, context);
  const response: ModifyDBClusterEndpointCommandOutput = {
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
 * deserializeAws_queryModifyDBParameterGroupCommand
 */
export const de_ModifyDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyDBProxyCommand
 */
export const de_ModifyDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBProxyResponse(data.ModifyDBProxyResult, context);
  const response: ModifyDBProxyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBProxyEndpointCommand
 */
export const de_ModifyDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBProxyEndpointResponse(data.ModifyDBProxyEndpointResult, context);
  const response: ModifyDBProxyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBProxyTargetGroupCommand
 */
export const de_ModifyDBProxyTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBProxyTargetGroupResponse(data.ModifyDBProxyTargetGroupResult, context);
  const response: ModifyDBProxyTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBRecommendationCommand
 */
export const de_ModifyDBRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBRecommendationMessage(data.ModifyDBRecommendationResult, context);
  const response: ModifyDBRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBShardGroupCommand
 */
export const de_ModifyDBShardGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBShardGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBShardGroup(data.ModifyDBShardGroupResult, context);
  const response: ModifyDBShardGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBSnapshotCommand
 */
export const de_ModifyDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBSnapshotResult(data.ModifyDBSnapshotResult, context);
  const response: ModifyDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyDBSnapshotAttributeCommand
 */
export const de_ModifyDBSnapshotAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyDBSnapshotAttributeResult(data.ModifyDBSnapshotAttributeResult, context);
  const response: ModifyDBSnapshotAttributeCommandOutput = {
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
 * deserializeAws_queryModifyIntegrationCommand
 */
export const de_ModifyIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Integration(data.ModifyIntegrationResult, context);
  const response: ModifyIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyOptionGroupCommand
 */
export const de_ModifyOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyOptionGroupResult(data.ModifyOptionGroupResult, context);
  const response: ModifyOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyTenantDatabaseCommand
 */
export const de_ModifyTenantDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTenantDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyTenantDatabaseResult(data.ModifyTenantDatabaseResult, context);
  const response: ModifyTenantDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPromoteReadReplicaCommand
 */
export const de_PromoteReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PromoteReadReplicaResult(data.PromoteReadReplicaResult, context);
  const response: PromoteReadReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPromoteReadReplicaDBClusterCommand
 */
export const de_PromoteReadReplicaDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand
 */
export const de_PurchaseReservedDBInstancesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PurchaseReservedDBInstancesOfferingResult(data.PurchaseReservedDBInstancesOfferingResult, context);
  const response: PurchaseReservedDBInstancesOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRebootDBClusterCommand
 */
export const de_RebootDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootDBClusterResult(data.RebootDBClusterResult, context);
  const response: RebootDBClusterCommandOutput = {
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
 * deserializeAws_queryRebootDBShardGroupCommand
 */
export const de_RebootDBShardGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBShardGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DBShardGroup(data.RebootDBShardGroupResult, context);
  const response: RebootDBShardGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRegisterDBProxyTargetsCommand
 */
export const de_RegisterDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterDBProxyTargetsResponse(data.RegisterDBProxyTargetsResult, context);
  const response: RegisterDBProxyTargetsCommandOutput = {
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
 * deserializeAws_queryRemoveRoleFromDBClusterCommand
 */
export const de_RemoveRoleFromDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveRoleFromDBInstanceCommand
 */
export const de_RemoveRoleFromDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
 * deserializeAws_queryResetDBParameterGroupCommand
 */
export const de_ResetDBParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDBParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRestoreDBClusterFromS3Command
 */
export const de_RestoreDBClusterFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreDBClusterFromS3Result(data.RestoreDBClusterFromS3Result, context);
  const response: RestoreDBClusterFromS3CommandOutput = {
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
 * deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand
 */
export const de_RestoreDBInstanceFromDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreDBInstanceFromDBSnapshotResult(data.RestoreDBInstanceFromDBSnapshotResult, context);
  const response: RestoreDBInstanceFromDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRestoreDBInstanceFromS3Command
 */
export const de_RestoreDBInstanceFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreDBInstanceFromS3Result(data.RestoreDBInstanceFromS3Result, context);
  const response: RestoreDBInstanceFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRestoreDBInstanceToPointInTimeCommand
 */
export const de_RestoreDBInstanceToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreDBInstanceToPointInTimeResult(data.RestoreDBInstanceToPointInTimeResult, context);
  const response: RestoreDBInstanceToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRevokeDBSecurityGroupIngressCommand
 */
export const de_RevokeDBSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDBSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RevokeDBSecurityGroupIngressResult(data.RevokeDBSecurityGroupIngressResult, context);
  const response: RevokeDBSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStartActivityStreamCommand
 */
export const de_StartActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartActivityStreamResponse(data.StartActivityStreamResult, context);
  const response: StartActivityStreamCommandOutput = {
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
 * deserializeAws_queryStartDBInstanceCommand
 */
export const de_StartDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDBInstanceResult(data.StartDBInstanceResult, context);
  const response: StartDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand
 */
export const de_StartDBInstanceAutomatedBackupsReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDBInstanceAutomatedBackupsReplicationResult(
    data.StartDBInstanceAutomatedBackupsReplicationResult,
    context
  );
  const response: StartDBInstanceAutomatedBackupsReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStartExportTaskCommand
 */
export const de_StartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportTask(data.StartExportTaskResult, context);
  const response: StartExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStopActivityStreamCommand
 */
export const de_StopActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopActivityStreamResponse(data.StopActivityStreamResult, context);
  const response: StopActivityStreamCommandOutput = {
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
 * deserializeAws_queryStopDBInstanceCommand
 */
export const de_StopDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopDBInstanceResult(data.StopDBInstanceResult, context);
  const response: StopDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand
 */
export const de_StopDBInstanceAutomatedBackupsReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopDBInstanceAutomatedBackupsReplicationResult(
    data.StopDBInstanceAutomatedBackupsReplicationResult,
    context
  );
  const response: StopDBInstanceAutomatedBackupsReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySwitchoverBlueGreenDeploymentCommand
 */
export const de_SwitchoverBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SwitchoverBlueGreenDeploymentResponse(data.SwitchoverBlueGreenDeploymentResult, context);
  const response: SwitchoverBlueGreenDeploymentCommandOutput = {
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
 * deserializeAws_querySwitchoverReadReplicaCommand
 */
export const de_SwitchoverReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SwitchoverReadReplicaResult(data.SwitchoverReadReplicaResult, context);
  const response: SwitchoverReadReplicaCommandOutput = {
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
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterRoleAlreadyExists":
    case "com.amazonaws.rds#DBClusterRoleAlreadyExistsFault":
      throw await de_DBClusterRoleAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterRoleQuotaExceeded":
    case "com.amazonaws.rds#DBClusterRoleQuotaExceededFault":
      throw await de_DBClusterRoleQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceRoleAlreadyExists":
    case "com.amazonaws.rds#DBInstanceRoleAlreadyExistsFault":
      throw await de_DBInstanceRoleAlreadyExistsFaultRes(parsedOutput, context);
    case "DBInstanceRoleQuotaExceeded":
    case "com.amazonaws.rds#DBInstanceRoleQuotaExceededFault":
      throw await de_DBInstanceRoleQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.rds#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await de_BlueGreenDeploymentNotFoundFaultRes(parsedOutput, context);
    case "DBProxyEndpointNotFoundFault":
    case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
      throw await de_DBProxyEndpointNotFoundFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBShardGroupNotFound":
    case "com.amazonaws.rds#DBShardGroupNotFoundFault":
      throw await de_DBShardGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotTenantDatabaseNotFoundFault":
    case "com.amazonaws.rds#DBSnapshotTenantDatabaseNotFoundFault":
      throw await de_DBSnapshotTenantDatabaseNotFoundFaultRes(parsedOutput, context);
    case "IntegrationNotFoundFault":
    case "com.amazonaws.rds#IntegrationNotFoundFault":
      throw await de_IntegrationNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBClusterEndpointStateFault":
      throw await de_InvalidDBClusterEndpointStateFaultRes(parsedOutput, context);
    case "TenantDatabaseNotFound":
    case "com.amazonaws.rds#TenantDatabaseNotFoundFault":
      throw await de_TenantDatabaseNotFoundFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "AuthorizationAlreadyExists":
    case "com.amazonaws.rds#AuthorizationAlreadyExistsFault":
      throw await de_AuthorizationAlreadyExistsFaultRes(parsedOutput, context);
    case "AuthorizationQuotaExceeded":
    case "com.amazonaws.rds#AuthorizationQuotaExceededFault":
      throw await de_AuthorizationQuotaExceededFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
    case "ExportTaskNotFound":
    case "com.amazonaws.rds#ExportTaskNotFoundFault":
      throw await de_ExportTaskNotFoundFaultRes(parsedOutput, context);
    case "InvalidExportTaskStateFault":
    case "com.amazonaws.rds#InvalidExportTaskStateFault":
      throw await de_InvalidExportTaskStateFaultRes(parsedOutput, context);
    case "DBParameterGroupAlreadyExists":
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
      throw await de_DBParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
      throw await de_SnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "CustomAvailabilityZoneNotFound":
    case "com.amazonaws.rds#CustomAvailabilityZoneNotFoundFault":
      throw await de_CustomAvailabilityZoneNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await de_DBSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "OptionGroupAlreadyExistsFault":
    case "com.amazonaws.rds#OptionGroupAlreadyExistsFault":
      throw await de_OptionGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "OptionGroupQuotaExceededFault":
    case "com.amazonaws.rds#OptionGroupQuotaExceededFault":
      throw await de_OptionGroupQuotaExceededFaultRes(parsedOutput, context);
    case "BlueGreenDeploymentAlreadyExistsFault":
    case "com.amazonaws.rds#BlueGreenDeploymentAlreadyExistsFault":
      throw await de_BlueGreenDeploymentAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "SourceClusterNotSupportedFault":
    case "com.amazonaws.rds#SourceClusterNotSupportedFault":
      throw await de_SourceClusterNotSupportedFaultRes(parsedOutput, context);
    case "SourceDatabaseNotSupportedFault":
    case "com.amazonaws.rds#SourceDatabaseNotSupportedFault":
      throw await de_SourceDatabaseNotSupportedFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "CreateCustomDBEngineVersionFault":
    case "com.amazonaws.rds#CreateCustomDBEngineVersionFault":
      throw await de_CreateCustomDBEngineVersionFaultRes(parsedOutput, context);
    case "CustomDBEngineVersionAlreadyExistsFault":
    case "com.amazonaws.rds#CustomDBEngineVersionAlreadyExistsFault":
      throw await de_CustomDBEngineVersionAlreadyExistsFaultRes(parsedOutput, context);
    case "CustomDBEngineVersionNotFoundFault":
    case "com.amazonaws.rds#CustomDBEngineVersionNotFoundFault":
      throw await de_CustomDBEngineVersionNotFoundFaultRes(parsedOutput, context);
    case "CustomDBEngineVersionQuotaExceededFault":
    case "com.amazonaws.rds#CustomDBEngineVersionQuotaExceededFault":
      throw await de_CustomDBEngineVersionQuotaExceededFaultRes(parsedOutput, context);
    case "Ec2ImagePropertiesNotSupportedFault":
    case "com.amazonaws.rds#Ec2ImagePropertiesNotSupportedFault":
      throw await de_Ec2ImagePropertiesNotSupportedFaultRes(parsedOutput, context);
    case "InvalidCustomDBEngineVersionStateFault":
    case "com.amazonaws.rds#InvalidCustomDBEngineVersionStateFault":
      throw await de_InvalidCustomDBEngineVersionStateFaultRes(parsedOutput, context);
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupFault":
      throw await de_InvalidDBSubnetGroupFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
      throw await de_InvalidGlobalClusterStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await de_NetworkTypeNotSupportedRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
      throw await de_StorageTypeNotSupportedFaultRes(parsedOutput, context);
    case "DBClusterEndpointAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterEndpointAlreadyExistsFault":
      throw await de_DBClusterEndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterEndpointQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterEndpointQuotaExceededFault":
      throw await de_DBClusterEndpointQuotaExceededFaultRes(parsedOutput, context);
    case "AuthorizationNotFound":
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await de_BackupPolicyNotFoundFaultRes(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.rds#CertificateNotFoundFault":
      throw await de_CertificateNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "TenantDatabaseQuotaExceeded":
    case "com.amazonaws.rds#TenantDatabaseQuotaExceededFault":
      throw await de_TenantDatabaseQuotaExceededFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotAllowedFault":
    case "com.amazonaws.rds#DBSubnetGroupNotAllowedFault":
      throw await de_DBSubnetGroupNotAllowedFaultRes(parsedOutput, context);
    case "DBProxyAlreadyExistsFault":
    case "com.amazonaws.rds#DBProxyAlreadyExistsFault":
      throw await de_DBProxyAlreadyExistsFaultRes(parsedOutput, context);
    case "DBProxyQuotaExceededFault":
    case "com.amazonaws.rds#DBProxyQuotaExceededFault":
      throw await de_DBProxyQuotaExceededFaultRes(parsedOutput, context);
    case "DBProxyEndpointAlreadyExistsFault":
    case "com.amazonaws.rds#DBProxyEndpointAlreadyExistsFault":
      throw await de_DBProxyEndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "DBProxyEndpointQuotaExceededFault":
    case "com.amazonaws.rds#DBProxyEndpointQuotaExceededFault":
      throw await de_DBProxyEndpointQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
    case "DBSecurityGroupAlreadyExists":
    case "com.amazonaws.rds#DBSecurityGroupAlreadyExistsFault":
      throw await de_DBSecurityGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotSupported":
    case "com.amazonaws.rds#DBSecurityGroupNotSupportedFault":
      throw await de_DBSecurityGroupNotSupportedFaultRes(parsedOutput, context);
    case "QuotaExceeded.DBSecurityGroup":
    case "com.amazonaws.rds#DBSecurityGroupQuotaExceededFault":
      throw await de_DBSecurityGroupQuotaExceededFaultRes(parsedOutput, context);
    case "DBShardGroupAlreadyExists":
    case "com.amazonaws.rds#DBShardGroupAlreadyExistsFault":
      throw await de_DBShardGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "MaxDBShardGroupLimitReached":
    case "com.amazonaws.rds#MaxDBShardGroupLimitReached":
      throw await de_MaxDBShardGroupLimitReachedRes(parsedOutput, context);
    case "UnsupportedDBEngineVersion":
    case "com.amazonaws.rds#UnsupportedDBEngineVersionFault":
      throw await de_UnsupportedDBEngineVersionFaultRes(parsedOutput, context);
    case "DBSubnetGroupAlreadyExists":
    case "com.amazonaws.rds#DBSubnetGroupAlreadyExistsFault":
      throw await de_DBSubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSubnetGroupQuotaExceeded":
    case "com.amazonaws.rds#DBSubnetGroupQuotaExceededFault":
      throw await de_DBSubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.rds#DBSubnetQuotaExceededFault":
      throw await de_DBSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "EventSubscriptionQuotaExceeded":
    case "com.amazonaws.rds#EventSubscriptionQuotaExceededFault":
      throw await de_EventSubscriptionQuotaExceededFaultRes(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.rds#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.rds#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.rds#SNSTopicArnNotFoundFault":
      throw await de_SNSTopicArnNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.rds#SubscriptionAlreadyExistFault":
      throw await de_SubscriptionAlreadyExistFaultRes(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.rds#SubscriptionCategoryNotFoundFault":
      throw await de_SubscriptionCategoryNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterAlreadyExistsFault":
    case "com.amazonaws.rds#GlobalClusterAlreadyExistsFault":
      throw await de_GlobalClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "GlobalClusterQuotaExceededFault":
    case "com.amazonaws.rds#GlobalClusterQuotaExceededFault":
      throw await de_GlobalClusterQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBShardGroupState":
    case "com.amazonaws.rds#InvalidDBShardGroupStateFault":
      throw await de_InvalidDBShardGroupStateFaultRes(parsedOutput, context);
    case "IntegrationAlreadyExistsFault":
    case "com.amazonaws.rds#IntegrationAlreadyExistsFault":
      throw await de_IntegrationAlreadyExistsFaultRes(parsedOutput, context);
    case "IntegrationConflictOperationFault":
    case "com.amazonaws.rds#IntegrationConflictOperationFault":
      throw await de_IntegrationConflictOperationFaultRes(parsedOutput, context);
    case "IntegrationQuotaExceededFault":
    case "com.amazonaws.rds#IntegrationQuotaExceededFault":
      throw await de_IntegrationQuotaExceededFaultRes(parsedOutput, context);
    case "TenantDatabaseAlreadyExists":
    case "com.amazonaws.rds#TenantDatabaseAlreadyExistsFault":
      throw await de_TenantDatabaseAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidBlueGreenDeploymentStateFault":
    case "com.amazonaws.rds#InvalidBlueGreenDeploymentStateFault":
      throw await de_InvalidBlueGreenDeploymentStateFaultRes(parsedOutput, context);
    case "DBClusterAutomatedBackupQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterAutomatedBackupQuotaExceededFault":
      throw await de_DBClusterAutomatedBackupQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterAutomatedBackupNotFoundFault":
    case "com.amazonaws.rds#DBClusterAutomatedBackupNotFoundFault":
      throw await de_DBClusterAutomatedBackupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterAutomatedBackupStateFault":
    case "com.amazonaws.rds#InvalidDBClusterAutomatedBackupStateFault":
      throw await de_InvalidDBClusterAutomatedBackupStateFaultRes(parsedOutput, context);
    case "DBClusterEndpointNotFoundFault":
    case "com.amazonaws.rds#DBClusterEndpointNotFoundFault":
      throw await de_DBClusterEndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
      throw await de_InvalidDBParameterGroupStateFaultRes(parsedOutput, context);
    case "DBInstanceAutomatedBackupQuotaExceeded":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupQuotaExceededFault":
      throw await de_DBInstanceAutomatedBackupQuotaExceededFaultRes(parsedOutput, context);
    case "DBInstanceAutomatedBackupNotFound":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
      throw await de_DBInstanceAutomatedBackupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceAutomatedBackupState":
    case "com.amazonaws.rds#InvalidDBInstanceAutomatedBackupStateFault":
      throw await de_InvalidDBInstanceAutomatedBackupStateFaultRes(parsedOutput, context);
    case "InvalidDBProxyEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBProxyEndpointStateFault":
      throw await de_InvalidDBProxyEndpointStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetStateFault":
      throw await de_InvalidDBSubnetStateFaultRes(parsedOutput, context);
    case "InvalidEventSubscriptionState":
    case "com.amazonaws.rds#InvalidEventSubscriptionStateFault":
      throw await de_InvalidEventSubscriptionStateFaultRes(parsedOutput, context);
    case "InvalidIntegrationStateFault":
    case "com.amazonaws.rds#InvalidIntegrationStateFault":
      throw await de_InvalidIntegrationStateFaultRes(parsedOutput, context);
    case "InvalidOptionGroupStateFault":
    case "com.amazonaws.rds#InvalidOptionGroupStateFault":
      throw await de_InvalidOptionGroupStateFaultRes(parsedOutput, context);
    case "DBProxyTargetNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetNotFoundFault":
      throw await de_DBProxyTargetNotFoundFaultRes(parsedOutput, context);
    case "DBClusterBacktrackNotFoundFault":
    case "com.amazonaws.rds#DBClusterBacktrackNotFoundFault":
      throw await de_DBClusterBacktrackNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotReady":
    case "com.amazonaws.rds#DBInstanceNotReadyFault":
      throw await de_DBInstanceNotReadyFaultRes(parsedOutput, context);
    case "ReservedDBInstanceNotFound":
    case "com.amazonaws.rds#ReservedDBInstanceNotFoundFault":
      throw await de_ReservedDBInstanceNotFoundFaultRes(parsedOutput, context);
    case "ReservedDBInstancesOfferingNotFound":
    case "com.amazonaws.rds#ReservedDBInstancesOfferingNotFoundFault":
      throw await de_ReservedDBInstancesOfferingNotFoundFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.rds#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "DBLogFileNotFoundFault":
    case "com.amazonaws.rds#DBLogFileNotFoundFault":
      throw await de_DBLogFileNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterCapacityFault":
    case "com.amazonaws.rds#InvalidDBClusterCapacityFault":
      throw await de_InvalidDBClusterCapacityFaultRes(parsedOutput, context);
    case "StorageTypeNotAvailableFault":
    case "com.amazonaws.rds#StorageTypeNotAvailableFault":
      throw await de_StorageTypeNotAvailableFaultRes(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.rds#SharedSnapshotQuotaExceededFault":
      throw await de_SharedSnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "DBUpgradeDependencyFailure":
    case "com.amazonaws.rds#DBUpgradeDependencyFailureFault":
      throw await de_DBUpgradeDependencyFailureFaultRes(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.rds#SubnetAlreadyInUse":
      throw await de_SubnetAlreadyInUseRes(parsedOutput, context);
    case "ReservedDBInstanceAlreadyExists":
    case "com.amazonaws.rds#ReservedDBInstanceAlreadyExistsFault":
      throw await de_ReservedDBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedDBInstanceQuotaExceeded":
    case "com.amazonaws.rds#ReservedDBInstanceQuotaExceededFault":
      throw await de_ReservedDBInstanceQuotaExceededFaultRes(parsedOutput, context);
    case "DBProxyTargetAlreadyRegisteredFault":
    case "com.amazonaws.rds#DBProxyTargetAlreadyRegisteredFault":
      throw await de_DBProxyTargetAlreadyRegisteredFaultRes(parsedOutput, context);
    case "InsufficientAvailableIPsInSubnetFault":
    case "com.amazonaws.rds#InsufficientAvailableIPsInSubnetFault":
      throw await de_InsufficientAvailableIPsInSubnetFaultRes(parsedOutput, context);
    case "DBClusterRoleNotFound":
    case "com.amazonaws.rds#DBClusterRoleNotFoundFault":
      throw await de_DBClusterRoleNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceRoleNotFound":
    case "com.amazonaws.rds#DBInstanceRoleNotFoundFault":
      throw await de_DBInstanceRoleNotFoundFaultRes(parsedOutput, context);
    case "InvalidS3BucketFault":
    case "com.amazonaws.rds#InvalidS3BucketFault":
      throw await de_InvalidS3BucketFaultRes(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.rds#InsufficientDBClusterCapacityFault":
      throw await de_InsufficientDBClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "PointInTimeRestoreNotEnabled":
    case "com.amazonaws.rds#PointInTimeRestoreNotEnabledFault":
      throw await de_PointInTimeRestoreNotEnabledFaultRes(parsedOutput, context);
    case "ExportTaskAlreadyExists":
    case "com.amazonaws.rds#ExportTaskAlreadyExistsFault":
      throw await de_ExportTaskAlreadyExistsFaultRes(parsedOutput, context);
    case "IamRoleMissingPermissions":
    case "com.amazonaws.rds#IamRoleMissingPermissionsFault":
      throw await de_IamRoleMissingPermissionsFaultRes(parsedOutput, context);
    case "IamRoleNotFound":
    case "com.amazonaws.rds#IamRoleNotFoundFault":
      throw await de_IamRoleNotFoundFaultRes(parsedOutput, context);
    case "InvalidExportOnly":
    case "com.amazonaws.rds#InvalidExportOnlyFault":
      throw await de_InvalidExportOnlyFaultRes(parsedOutput, context);
    case "InvalidExportSourceState":
    case "com.amazonaws.rds#InvalidExportSourceStateFault":
      throw await de_InvalidExportSourceStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryAuthorizationQuotaExceededFaultRes
 */
const de_AuthorizationQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationQuotaExceededFault(body.Error, context);
  const exception = new AuthorizationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBackupPolicyNotFoundFaultRes
 */
const de_BackupPolicyNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupPolicyNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BackupPolicyNotFoundFault(body.Error, context);
  const exception = new BackupPolicyNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBlueGreenDeploymentAlreadyExistsFaultRes
 */
const de_BlueGreenDeploymentAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlueGreenDeploymentAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BlueGreenDeploymentAlreadyExistsFault(body.Error, context);
  const exception = new BlueGreenDeploymentAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBlueGreenDeploymentNotFoundFaultRes
 */
const de_BlueGreenDeploymentNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlueGreenDeploymentNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BlueGreenDeploymentNotFoundFault(body.Error, context);
  const exception = new BlueGreenDeploymentNotFoundFault({
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
 * deserializeAws_queryCreateCustomDBEngineVersionFaultRes
 */
const de_CreateCustomDBEngineVersionFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateCustomDBEngineVersionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CreateCustomDBEngineVersionFault(body.Error, context);
  const exception = new CreateCustomDBEngineVersionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomAvailabilityZoneNotFoundFaultRes
 */
const de_CustomAvailabilityZoneNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomAvailabilityZoneNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomAvailabilityZoneNotFoundFault(body.Error, context);
  const exception = new CustomAvailabilityZoneNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomDBEngineVersionAlreadyExistsFaultRes
 */
const de_CustomDBEngineVersionAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomDBEngineVersionAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomDBEngineVersionAlreadyExistsFault(body.Error, context);
  const exception = new CustomDBEngineVersionAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomDBEngineVersionNotFoundFaultRes
 */
const de_CustomDBEngineVersionNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomDBEngineVersionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomDBEngineVersionNotFoundFault(body.Error, context);
  const exception = new CustomDBEngineVersionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomDBEngineVersionQuotaExceededFaultRes
 */
const de_CustomDBEngineVersionQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomDBEngineVersionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomDBEngineVersionQuotaExceededFault(body.Error, context);
  const exception = new CustomDBEngineVersionQuotaExceededFault({
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
 * deserializeAws_queryDBClusterAutomatedBackupNotFoundFaultRes
 */
const de_DBClusterAutomatedBackupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterAutomatedBackupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterAutomatedBackupNotFoundFault(body.Error, context);
  const exception = new DBClusterAutomatedBackupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterAutomatedBackupQuotaExceededFaultRes
 */
const de_DBClusterAutomatedBackupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterAutomatedBackupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterAutomatedBackupQuotaExceededFault(body.Error, context);
  const exception = new DBClusterAutomatedBackupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBClusterBacktrackNotFoundFaultRes
 */
const de_DBClusterBacktrackNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterBacktrackNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBClusterBacktrackNotFoundFault(body.Error, context);
  const exception = new DBClusterBacktrackNotFoundFault({
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
 * deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultRes
 */
const de_DBInstanceAutomatedBackupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceAutomatedBackupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceAutomatedBackupNotFoundFault(body.Error, context);
  const exception = new DBInstanceAutomatedBackupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultRes
 */
const de_DBInstanceAutomatedBackupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceAutomatedBackupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceAutomatedBackupQuotaExceededFault(body.Error, context);
  const exception = new DBInstanceAutomatedBackupQuotaExceededFault({
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
 * deserializeAws_queryDBInstanceNotReadyFaultRes
 */
const de_DBInstanceNotReadyFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceNotReadyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceNotReadyFault(body.Error, context);
  const exception = new DBInstanceNotReadyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBInstanceRoleAlreadyExistsFaultRes
 */
const de_DBInstanceRoleAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceRoleAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceRoleAlreadyExistsFault(body.Error, context);
  const exception = new DBInstanceRoleAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBInstanceRoleNotFoundFaultRes
 */
const de_DBInstanceRoleNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceRoleNotFoundFault(body.Error, context);
  const exception = new DBInstanceRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBInstanceRoleQuotaExceededFaultRes
 */
const de_DBInstanceRoleQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceRoleQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBInstanceRoleQuotaExceededFault(body.Error, context);
  const exception = new DBInstanceRoleQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBLogFileNotFoundFaultRes
 */
const de_DBLogFileNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBLogFileNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBLogFileNotFoundFault(body.Error, context);
  const exception = new DBLogFileNotFoundFault({
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
 * deserializeAws_queryDBProxyAlreadyExistsFaultRes
 */
const de_DBProxyAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyAlreadyExistsFault(body.Error, context);
  const exception = new DBProxyAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyEndpointAlreadyExistsFaultRes
 */
const de_DBProxyEndpointAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyEndpointAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyEndpointAlreadyExistsFault(body.Error, context);
  const exception = new DBProxyEndpointAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyEndpointNotFoundFaultRes
 */
const de_DBProxyEndpointNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyEndpointNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyEndpointNotFoundFault(body.Error, context);
  const exception = new DBProxyEndpointNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyEndpointQuotaExceededFaultRes
 */
const de_DBProxyEndpointQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyEndpointQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyEndpointQuotaExceededFault(body.Error, context);
  const exception = new DBProxyEndpointQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyNotFoundFaultRes
 */
const de_DBProxyNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyNotFoundFault(body.Error, context);
  const exception = new DBProxyNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyQuotaExceededFaultRes
 */
const de_DBProxyQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyQuotaExceededFault(body.Error, context);
  const exception = new DBProxyQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyTargetAlreadyRegisteredFaultRes
 */
const de_DBProxyTargetAlreadyRegisteredFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyTargetAlreadyRegisteredFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyTargetAlreadyRegisteredFault(body.Error, context);
  const exception = new DBProxyTargetAlreadyRegisteredFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyTargetGroupNotFoundFaultRes
 */
const de_DBProxyTargetGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyTargetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyTargetGroupNotFoundFault(body.Error, context);
  const exception = new DBProxyTargetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBProxyTargetNotFoundFaultRes
 */
const de_DBProxyTargetNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyTargetNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBProxyTargetNotFoundFault(body.Error, context);
  const exception = new DBProxyTargetNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSecurityGroupAlreadyExistsFaultRes
 */
const de_DBSecurityGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSecurityGroupAlreadyExistsFault(body.Error, context);
  const exception = new DBSecurityGroupAlreadyExistsFault({
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
 * deserializeAws_queryDBSecurityGroupNotSupportedFaultRes
 */
const de_DBSecurityGroupNotSupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSecurityGroupNotSupportedFault(body.Error, context);
  const exception = new DBSecurityGroupNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBSecurityGroupQuotaExceededFaultRes
 */
const de_DBSecurityGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSecurityGroupQuotaExceededFault(body.Error, context);
  const exception = new DBSecurityGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBShardGroupAlreadyExistsFaultRes
 */
const de_DBShardGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBShardGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBShardGroupAlreadyExistsFault(body.Error, context);
  const exception = new DBShardGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDBShardGroupNotFoundFaultRes
 */
const de_DBShardGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBShardGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBShardGroupNotFoundFault(body.Error, context);
  const exception = new DBShardGroupNotFoundFault({
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
 * deserializeAws_queryDBSnapshotTenantDatabaseNotFoundFaultRes
 */
const de_DBSnapshotTenantDatabaseNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSnapshotTenantDatabaseNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSnapshotTenantDatabaseNotFoundFault(body.Error, context);
  const exception = new DBSnapshotTenantDatabaseNotFoundFault({
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
 * deserializeAws_queryDBSubnetGroupNotAllowedFaultRes
 */
const de_DBSubnetGroupNotAllowedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupNotAllowedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DBSubnetGroupNotAllowedFault(body.Error, context);
  const exception = new DBSubnetGroupNotAllowedFault({
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
 * deserializeAws_queryEc2ImagePropertiesNotSupportedFaultRes
 */
const de_Ec2ImagePropertiesNotSupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<Ec2ImagePropertiesNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_Ec2ImagePropertiesNotSupportedFault(body.Error, context);
  const exception = new Ec2ImagePropertiesNotSupportedFault({
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
 * deserializeAws_queryExportTaskAlreadyExistsFaultRes
 */
const de_ExportTaskAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportTaskAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExportTaskAlreadyExistsFault(body.Error, context);
  const exception = new ExportTaskAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryExportTaskNotFoundFaultRes
 */
const de_ExportTaskNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportTaskNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExportTaskNotFoundFault(body.Error, context);
  const exception = new ExportTaskNotFoundFault({
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
 * deserializeAws_queryIamRoleMissingPermissionsFaultRes
 */
const de_IamRoleMissingPermissionsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamRoleMissingPermissionsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IamRoleMissingPermissionsFault(body.Error, context);
  const exception = new IamRoleMissingPermissionsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIamRoleNotFoundFaultRes
 */
const de_IamRoleNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IamRoleNotFoundFault(body.Error, context);
  const exception = new IamRoleNotFoundFault({
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
 * deserializeAws_queryInsufficientAvailableIPsInSubnetFaultRes
 */
const de_InsufficientAvailableIPsInSubnetFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientAvailableIPsInSubnetFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientAvailableIPsInSubnetFault(body.Error, context);
  const exception = new InsufficientAvailableIPsInSubnetFault({
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
 * deserializeAws_queryIntegrationAlreadyExistsFaultRes
 */
const de_IntegrationAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationAlreadyExistsFault(body.Error, context);
  const exception = new IntegrationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationConflictOperationFaultRes
 */
const de_IntegrationConflictOperationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationConflictOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationConflictOperationFault(body.Error, context);
  const exception = new IntegrationConflictOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationNotFoundFaultRes
 */
const de_IntegrationNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationNotFoundFault(body.Error, context);
  const exception = new IntegrationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationQuotaExceededFaultRes
 */
const de_IntegrationQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationQuotaExceededFault(body.Error, context);
  const exception = new IntegrationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidBlueGreenDeploymentStateFaultRes
 */
const de_InvalidBlueGreenDeploymentStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlueGreenDeploymentStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidBlueGreenDeploymentStateFault(body.Error, context);
  const exception = new InvalidBlueGreenDeploymentStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCustomDBEngineVersionStateFaultRes
 */
const de_InvalidCustomDBEngineVersionStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCustomDBEngineVersionStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCustomDBEngineVersionStateFault(body.Error, context);
  const exception = new InvalidCustomDBEngineVersionStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBClusterAutomatedBackupStateFaultRes
 */
const de_InvalidDBClusterAutomatedBackupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterAutomatedBackupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBClusterAutomatedBackupStateFault(body.Error, context);
  const exception = new InvalidDBClusterAutomatedBackupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBClusterCapacityFaultRes
 */
const de_InvalidDBClusterCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBClusterCapacityFault(body.Error, context);
  const exception = new InvalidDBClusterCapacityFault({
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
 * deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFaultRes
 */
const de_InvalidDBInstanceAutomatedBackupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBInstanceAutomatedBackupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBInstanceAutomatedBackupStateFault(body.Error, context);
  const exception = new InvalidDBInstanceAutomatedBackupStateFault({
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
 * deserializeAws_queryInvalidDBProxyEndpointStateFaultRes
 */
const de_InvalidDBProxyEndpointStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBProxyEndpointStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBProxyEndpointStateFault(body.Error, context);
  const exception = new InvalidDBProxyEndpointStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDBProxyStateFaultRes
 */
const de_InvalidDBProxyStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBProxyStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBProxyStateFault(body.Error, context);
  const exception = new InvalidDBProxyStateFault({
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
 * deserializeAws_queryInvalidDBShardGroupStateFaultRes
 */
const de_InvalidDBShardGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBShardGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBShardGroupStateFault(body.Error, context);
  const exception = new InvalidDBShardGroupStateFault({
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
 * deserializeAws_queryInvalidDBSubnetGroupFaultRes
 */
const de_InvalidDBSubnetGroupFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetGroupFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDBSubnetGroupFault(body.Error, context);
  const exception = new InvalidDBSubnetGroupFault({
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
 * deserializeAws_queryInvalidExportOnlyFaultRes
 */
const de_InvalidExportOnlyFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportOnlyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidExportOnlyFault(body.Error, context);
  const exception = new InvalidExportOnlyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidExportSourceStateFaultRes
 */
const de_InvalidExportSourceStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportSourceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidExportSourceStateFault(body.Error, context);
  const exception = new InvalidExportSourceStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidExportTaskStateFaultRes
 */
const de_InvalidExportTaskStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportTaskStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidExportTaskStateFault(body.Error, context);
  const exception = new InvalidExportTaskStateFault({
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
 * deserializeAws_queryInvalidIntegrationStateFaultRes
 */
const de_InvalidIntegrationStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIntegrationStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidIntegrationStateFault(body.Error, context);
  const exception = new InvalidIntegrationStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidOptionGroupStateFaultRes
 */
const de_InvalidOptionGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOptionGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOptionGroupStateFault(body.Error, context);
  const exception = new InvalidOptionGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidResourceStateFaultRes
 */
const de_InvalidResourceStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResourceStateFault(body.Error, context);
  const exception = new InvalidResourceStateFault({
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
 * deserializeAws_queryInvalidS3BucketFaultRes
 */
const de_InvalidS3BucketFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3BucketFault(body.Error, context);
  const exception = new InvalidS3BucketFault({
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
 * deserializeAws_queryMaxDBShardGroupLimitReachedRes
 */
const de_MaxDBShardGroupLimitReachedRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxDBShardGroupLimitReached> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxDBShardGroupLimitReached(body.Error, context);
  const exception = new MaxDBShardGroupLimitReached({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNetworkTypeNotSupportedRes
 */
const de_NetworkTypeNotSupportedRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NetworkTypeNotSupported> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NetworkTypeNotSupported(body.Error, context);
  const exception = new NetworkTypeNotSupported({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOptionGroupAlreadyExistsFaultRes
 */
const de_OptionGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptionGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OptionGroupAlreadyExistsFault(body.Error, context);
  const exception = new OptionGroupAlreadyExistsFault({
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
 * deserializeAws_queryOptionGroupQuotaExceededFaultRes
 */
const de_OptionGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptionGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OptionGroupQuotaExceededFault(body.Error, context);
  const exception = new OptionGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPointInTimeRestoreNotEnabledFaultRes
 */
const de_PointInTimeRestoreNotEnabledFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PointInTimeRestoreNotEnabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PointInTimeRestoreNotEnabledFault(body.Error, context);
  const exception = new PointInTimeRestoreNotEnabledFault({
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
 * deserializeAws_queryReservedDBInstanceAlreadyExistsFaultRes
 */
const de_ReservedDBInstanceAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstanceAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedDBInstanceAlreadyExistsFault(body.Error, context);
  const exception = new ReservedDBInstanceAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedDBInstanceNotFoundFaultRes
 */
const de_ReservedDBInstanceNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstanceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedDBInstanceNotFoundFault(body.Error, context);
  const exception = new ReservedDBInstanceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedDBInstanceQuotaExceededFaultRes
 */
const de_ReservedDBInstanceQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstanceQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedDBInstanceQuotaExceededFault(body.Error, context);
  const exception = new ReservedDBInstanceQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultRes
 */
const de_ReservedDBInstancesOfferingNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstancesOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedDBInstancesOfferingNotFoundFault(body.Error, context);
  const exception = new ReservedDBInstancesOfferingNotFoundFault({
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
 * deserializeAws_querySourceClusterNotSupportedFaultRes
 */
const de_SourceClusterNotSupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceClusterNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SourceClusterNotSupportedFault(body.Error, context);
  const exception = new SourceClusterNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySourceDatabaseNotSupportedFaultRes
 */
const de_SourceDatabaseNotSupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceDatabaseNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SourceDatabaseNotSupportedFault(body.Error, context);
  const exception = new SourceDatabaseNotSupportedFault({
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
 * deserializeAws_queryStorageTypeNotAvailableFaultRes
 */
const de_StorageTypeNotAvailableFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageTypeNotAvailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StorageTypeNotAvailableFault(body.Error, context);
  const exception = new StorageTypeNotAvailableFault({
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
 * deserializeAws_queryTenantDatabaseAlreadyExistsFaultRes
 */
const de_TenantDatabaseAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TenantDatabaseAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TenantDatabaseAlreadyExistsFault(body.Error, context);
  const exception = new TenantDatabaseAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTenantDatabaseNotFoundFaultRes
 */
const de_TenantDatabaseNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TenantDatabaseNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TenantDatabaseNotFoundFault(body.Error, context);
  const exception = new TenantDatabaseNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTenantDatabaseQuotaExceededFaultRes
 */
const de_TenantDatabaseQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TenantDatabaseQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TenantDatabaseQuotaExceededFault(body.Error, context);
  const exception = new TenantDatabaseQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnsupportedDBEngineVersionFaultRes
 */
const de_UnsupportedDBEngineVersionFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDBEngineVersionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedDBEngineVersionFault(body.Error, context);
  const exception = new UnsupportedDBEngineVersionFault({
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
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_FN] != null) {
    entries[_FN] = input[_FN];
  }
  return entries;
};

/**
 * serializeAws_queryAddRoleToDBInstanceMessage
 */
const se_AddRoleToDBInstanceMessage = (input: AddRoleToDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_FN] != null) {
    entries[_FN] = input[_FN];
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
 * serializeAws_queryAuthorizeDBSecurityGroupIngressMessage
 */
const se_AuthorizeDBSecurityGroupIngressMessage = (
  input: AuthorizeDBSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_CIDRIP] != null) {
    entries[_CIDRIP] = input[_CIDRIP];
  }
  if (input[_ECSGN] != null) {
    entries[_ECSGN] = input[_ECSGN];
  }
  if (input[_ECSGI] != null) {
    entries[_ECSGI] = input[_ECSGI];
  }
  if (input[_ECSGOI] != null) {
    entries[_ECSGOI] = input[_ECSGOI];
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
 * serializeAws_queryBacktrackDBClusterMessage
 */
const se_BacktrackDBClusterMessage = (input: BacktrackDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_BT] != null) {
    entries[_BT] = __serializeDateTime(input[_BT]);
  }
  if (input[_F] != null) {
    entries[_F] = input[_F];
  }
  if (input[_UETOPITU] != null) {
    entries[_UETOPITU] = input[_UETOPITU];
  }
  return entries;
};

/**
 * serializeAws_queryCancelExportTaskMessage
 */
const se_CancelExportTaskMessage = (input: CancelExportTaskMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ETI] != null) {
    entries[_ETI] = input[_ETI];
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
 * serializeAws_queryConnectionPoolConfiguration
 */
const se_ConnectionPoolConfiguration = (input: ConnectionPoolConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MCP] != null) {
    entries[_MCP] = input[_MCP];
  }
  if (input[_MICP] != null) {
    entries[_MICP] = input[_MICP];
  }
  if (input[_CBT] != null) {
    entries[_CBT] = input[_CBT];
  }
  if (input[_SPF] != null) {
    const memberEntries = se_StringList(input[_SPF], context);
    if (input[_SPF]?.length === 0) {
      entries.SessionPinningFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SessionPinningFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IQ] != null) {
    entries[_IQ] = input[_IQ];
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
 * serializeAws_queryCopyDBParameterGroupMessage
 */
const se_CopyDBParameterGroupMessage = (input: CopyDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SDBPGI] != null) {
    entries[_SDBPGI] = input[_SDBPGI];
  }
  if (input[_TDBPGI] != null) {
    entries[_TDBPGI] = input[_TDBPGI];
  }
  if (input[_TDBPGD] != null) {
    entries[_TDBPGD] = input[_TDBPGD];
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
 * serializeAws_queryCopyDBSnapshotMessage
 */
const se_CopyDBSnapshotMessage = (input: CopyDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SDBSI] != null) {
    entries[_SDBSI] = input[_SDBSI];
  }
  if (input[_TDBSI] != null) {
    entries[_TDBSI] = input[_TDBSI];
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
  if (input[_CT] != null) {
    entries[_CT] = input[_CT];
  }
  if (input[_PSU] != null) {
    entries[_PSU] = input[_PSU];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_TCAZ] != null) {
    entries[_TCAZ] = input[_TCAZ];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_COG] != null) {
    entries[_COG] = input[_COG];
  }
  if (input[_SAZ] != null) {
    entries[_SAZ] = input[_SAZ];
  }
  return entries;
};

/**
 * serializeAws_queryCopyOptionGroupMessage
 */
const se_CopyOptionGroupMessage = (input: CopyOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SOGI] != null) {
    entries[_SOGI] = input[_SOGI];
  }
  if (input[_TOGI] != null) {
    entries[_TOGI] = input[_TOGI];
  }
  if (input[_TOGD] != null) {
    entries[_TOGD] = input[_TOGD];
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
 * serializeAws_queryCreateBlueGreenDeploymentRequest
 */
const se_CreateBlueGreenDeploymentRequest = (input: CreateBlueGreenDeploymentRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_BGDN] != null) {
    entries[_BGDN] = input[_BGDN];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_TEV] != null) {
    entries[_TEV] = input[_TEV];
  }
  if (input[_TDBPGN] != null) {
    entries[_TDBPGN] = input[_TDBPGN];
  }
  if (input[_TDBCPGN] != null) {
    entries[_TDBCPGN] = input[_TDBCPGN];
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
  if (input[_TDBIC] != null) {
    entries[_TDBIC] = input[_TDBIC];
  }
  if (input[_UTSC] != null) {
    entries[_UTSC] = input[_UTSC];
  }
  if (input[_TI] != null) {
    entries[_TI] = input[_TI];
  }
  if (input[_TST] != null) {
    entries[_TST] = input[_TST];
  }
  if (input[_TAS] != null) {
    entries[_TAS] = input[_TAS];
  }
  if (input[_TSTa] != null) {
    entries[_TSTa] = input[_TSTa];
  }
  return entries;
};

/**
 * serializeAws_queryCreateCustomDBEngineVersionMessage
 */
const se_CreateCustomDBEngineVersionMessage = (
  input: CreateCustomDBEngineVersionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_DIFSBN] != null) {
    entries[_DIFSBN] = input[_DIFSBN];
  }
  if (input[_DIFSP] != null) {
    entries[_DIFSP] = input[_DIFSP];
  }
  if (input[_II] != null) {
    entries[_II] = input[_II];
  }
  if (input[_KMSKI] != null) {
    entries[_KMSKI] = input[_KMSKI];
  }
  if (input[_SCDEVI] != null) {
    entries[_SCDEVI] = input[_SCDEVI];
  }
  if (input[_UAPLI] != null) {
    entries[_UAPLI] = input[_UAPLI];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
 * serializeAws_queryCreateDBClusterEndpointMessage
 */
const se_CreateDBClusterEndpointMessage = (input: CreateDBClusterEndpointMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_DBCEI] != null) {
    entries[_DBCEI] = input[_DBCEI];
  }
  if (input[_ET] != null) {
    entries[_ET] = input[_ET];
  }
  if (input[_SM] != null) {
    const memberEntries = se_StringList(input[_SM], context);
    if (input[_SM]?.length === 0) {
      entries.StaticMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StaticMembers.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EM] != null) {
    const memberEntries = se_StringList(input[_EM], context);
    if (input[_EM]?.length === 0) {
      entries.ExcludedMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedMembers.${key}`;
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
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
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
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
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
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_RSI] != null) {
    entries[_RSI] = input[_RSI];
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
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_BW] != null) {
    entries[_BW] = input[_BW];
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
  if (input[_EMn] != null) {
    entries[_EMn] = input[_EMn];
  }
  if (input[_SC] != null) {
    const memberEntries = se_ScalingConfiguration(input[_SC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RCCC] != null) {
    const memberEntries = se_RdsCustomClusterConfiguration(input[_RCCC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RdsCustomClusterConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DBCIC] != null) {
    entries[_DBCIC] = input[_DBCIC];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_GCI] != null) {
    entries[_GCI] = input[_GCI];
  }
  if (input[_EHE] != null) {
    entries[_EHE] = input[_EHE];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_EGWF] != null) {
    entries[_EGWF] = input[_EGWF];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_DIM] != null) {
    entries[_DIM] = input[_DIM];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
  }
  if (input[_ELD] != null) {
    entries[_ELD] = input[_ELD];
  }
  if (input[_CST] != null) {
    entries[_CST] = input[_CST];
  }
  if (input[_DBSI] != null) {
    entries[_DBSI] = input[_DBSI];
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_ELWF] != null) {
    entries[_ELWF] = input[_ELWF];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
  }
  if (input[_MUAT] != null) {
    entries[_MUAT] = input[_MUAT];
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
  if (input[_DBN] != null) {
    entries[_DBN] = input[_DBN];
  }
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MU] != null) {
    entries[_MU] = input[_MU];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_DBSG] != null) {
    const memberEntries = se_DBSecurityGroupNameList(input[_DBSG], context);
    if (input[_DBSG]?.length === 0) {
      entries.DBSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroups.${key}`;
      entries[loc] = value;
    });
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
  if (input[_AZv] != null) {
    entries[_AZv] = input[_AZv];
  }
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  if (input[_BRP] != null) {
    entries[_BRP] = input[_BRP];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_LM] != null) {
    entries[_LM] = input[_LM];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_STto] != null) {
    entries[_STto] = input[_STto];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_NCSN] != null) {
    entries[_NCSN] = input[_NCSN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
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
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_TCA] != null) {
    entries[_TCA] = input[_TCA];
  }
  if (input[_TCP] != null) {
    entries[_TCP] = input[_TCP];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DF] != null) {
    entries[_DF] = input[_DF];
  }
  if (input[_DO] != null) {
    entries[_DO] = input[_DO];
  }
  if (input[_DASA] != null) {
    entries[_DASA] = input[_DASA];
  }
  if (input[_DDI] != null) {
    const memberEntries = se_StringList(input[_DDI], context);
    if (input[_DDI]?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_PT] != null) {
    entries[_PT] = input[_PT];
  }
  if (input[_Ti] != null) {
    entries[_Ti] = input[_Ti];
  }
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_DIM] != null) {
    entries[_DIM] = input[_DIM];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
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
  if (input[_PF] != null) {
    const memberEntries = se_ProcessorFeatureList(input[_PF], context);
    if (input[_PF]?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_MASa] != null) {
    entries[_MASa] = input[_MASa];
  }
  if (input[_ECOI] != null) {
    entries[_ECOI] = input[_ECOI];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_BTa] != null) {
    entries[_BTa] = input[_BTa];
  }
  if (input[_CIIP] != null) {
    entries[_CIIP] = input[_CIIP];
  }
  if (input[_DBSI] != null) {
    entries[_DBSI] = input[_DBSI];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
  }
  if (input[_MT] != null) {
    entries[_MT] = input[_MT];
  }
  if (input[_DLV] != null) {
    entries[_DLV] = input[_DLV];
  }
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
  }
  if (input[_MUAT] != null) {
    entries[_MUAT] = input[_MUAT];
  }
  return entries;
};

/**
 * serializeAws_queryCreateDBInstanceReadReplicaMessage
 */
const se_CreateDBInstanceReadReplicaMessage = (
  input: CreateDBInstanceReadReplicaMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_SDBII] != null) {
    entries[_SDBII] = input[_SDBII];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_AZv] != null) {
    entries[_AZv] = input[_AZv];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_STto] != null) {
    entries[_STto] = input[_STto];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
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
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
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
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_PSU] != null) {
    entries[_PSU] = input[_PSU];
  }
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_DIM] != null) {
    entries[_DIM] = input[_DIM];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
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
  if (input[_PF] != null) {
    const memberEntries = se_ProcessorFeatureList(input[_PF], context);
    if (input[_PF]?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UDPF] != null) {
    entries[_UDPF] = input[_UDPF];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_DF] != null) {
    entries[_DF] = input[_DF];
  }
  if (input[_DO] != null) {
    entries[_DO] = input[_DO];
  }
  if (input[_DASA] != null) {
    entries[_DASA] = input[_DASA];
  }
  if (input[_DDI] != null) {
    const memberEntries = se_StringList(input[_DDI], context);
    if (input[_DDI]?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RM] != null) {
    entries[_RM] = input[_RM];
  }
  if (input[_ECOI] != null) {
    entries[_ECOI] = input[_ECOI];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MASa] != null) {
    entries[_MASa] = input[_MASa];
  }
  if (input[_BTa] != null) {
    entries[_BTa] = input[_BTa];
  }
  if (input[_CIIP] != null) {
    entries[_CIIP] = input[_CIIP];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_SDBCI] != null) {
    entries[_SDBCI] = input[_SDBCI];
  }
  if (input[_DLV] != null) {
    entries[_DLV] = input[_DLV];
  }
  if (input[_USC] != null) {
    entries[_USC] = input[_USC];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  return entries;
};

/**
 * serializeAws_queryCreateDBParameterGroupMessage
 */
const se_CreateDBParameterGroupMessage = (input: CreateDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
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
 * serializeAws_queryCreateDBProxyEndpointRequest
 */
const se_CreateDBProxyEndpointRequest = (input: CreateDBProxyEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_DBPEN] != null) {
    entries[_DBPEN] = input[_DBPEN];
  }
  if (input[_VSI] != null) {
    const memberEntries = se_StringList(input[_VSI], context);
    if (input[_VSI]?.length === 0) {
      entries.VpcSubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_StringList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TR] != null) {
    entries[_TR] = input[_TR];
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
  if (input[_ENT] != null) {
    entries[_ENT] = input[_ENT];
  }
  return entries;
};

/**
 * serializeAws_queryCreateDBProxyRequest
 */
const se_CreateDBProxyRequest = (input: CreateDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_EF] != null) {
    entries[_EF] = input[_EF];
  }
  if (input[_DAS] != null) {
    entries[_DAS] = input[_DAS];
  }
  if (input[_Au] != null) {
    const memberEntries = se_UserAuthConfigList(input[_Au], context);
    if (input[_Au]?.length === 0) {
      entries.Auth = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Auth.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_VSI] != null) {
    const memberEntries = se_StringList(input[_VSI], context);
    if (input[_VSI]?.length === 0) {
      entries.VpcSubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_StringList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTLS] != null) {
    entries[_RTLS] = input[_RTLS];
  }
  if (input[_ICT] != null) {
    entries[_ICT] = input[_ICT];
  }
  if (input[_DL] != null) {
    entries[_DL] = input[_DL];
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
  if (input[_ENT] != null) {
    entries[_ENT] = input[_ENT];
  }
  if (input[_TCNT] != null) {
    entries[_TCNT] = input[_TCNT];
  }
  return entries;
};

/**
 * serializeAws_queryCreateDBSecurityGroupMessage
 */
const se_CreateDBSecurityGroupMessage = (input: CreateDBSecurityGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_DBSGD] != null) {
    entries[_DBSGD] = input[_DBSGD];
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
 * serializeAws_queryCreateDBShardGroupMessage
 */
const se_CreateDBShardGroupMessage = (input: CreateDBShardGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGI] != null) {
    entries[_DBSGI] = input[_DBSGI];
  }
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_CR] != null) {
    entries[_CR] = input[_CR];
  }
  if (input[_MACU] != null) {
    entries[_MACU] = __serializeFloat(input[_MACU]);
  }
  if (input[_MACUi] != null) {
    entries[_MACUi] = __serializeFloat(input[_MACUi]);
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
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
 * serializeAws_queryCreateDBSnapshotMessage
 */
const se_CreateDBSnapshotMessage = (input: CreateDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
  }
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
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
 * serializeAws_queryCreateDBSubnetGroupMessage
 */
const se_CreateDBSubnetGroupMessage = (input: CreateDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_DBSGDu] != null) {
    entries[_DBSGDu] = input[_DBSGDu];
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
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
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
 * serializeAws_queryCreateIntegrationMessage
 */
const se_CreateIntegrationMessage = (input: CreateIntegrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_IN] != null) {
    entries[_IN] = input[_IN];
  }
  if (input[_KMSKI] != null) {
    entries[_KMSKI] = input[_KMSKI];
  }
  if (input[_AEC] != null) {
    const memberEntries = se_EncryptionContextMap(input[_AEC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AdditionalEncryptionContext.${key}`;
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
  if (input[_DFa] != null) {
    entries[_DFa] = input[_DFa];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryCreateOptionGroupMessage
 */
const se_CreateOptionGroupMessage = (input: CreateOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
  }
  if (input[_OGD] != null) {
    entries[_OGD] = input[_OGD];
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
 * serializeAws_queryCreateTenantDatabaseMessage
 */
const se_CreateTenantDatabaseMessage = (input: CreateTenantDatabaseMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_TDBN] != null) {
    entries[_TDBN] = input[_TDBN];
  }
  if (input[_MU] != null) {
    entries[_MU] = input[_MU];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_NCSN] != null) {
    entries[_NCSN] = input[_NCSN];
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
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
 * serializeAws_queryDeleteBlueGreenDeploymentRequest
 */
const se_DeleteBlueGreenDeploymentRequest = (input: DeleteBlueGreenDeploymentRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_BGDI] != null) {
    entries[_BGDI] = input[_BGDI];
  }
  if (input[_DT] != null) {
    entries[_DT] = input[_DT];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCustomDBEngineVersionMessage
 */
const se_DeleteCustomDBEngineVersionMessage = (
  input: DeleteCustomDBEngineVersionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterAutomatedBackupMessage
 */
const se_DeleteDBClusterAutomatedBackupMessage = (
  input: DeleteDBClusterAutomatedBackupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DCRI] != null) {
    entries[_DCRI] = input[_DCRI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBClusterEndpointMessage
 */
const se_DeleteDBClusterEndpointMessage = (input: DeleteDBClusterEndpointMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCEI] != null) {
    entries[_DBCEI] = input[_DBCEI];
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
  if (input[_DAB] != null) {
    entries[_DAB] = input[_DAB];
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
 * serializeAws_queryDeleteDBInstanceAutomatedBackupMessage
 */
const se_DeleteDBInstanceAutomatedBackupMessage = (
  input: DeleteDBInstanceAutomatedBackupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DRI] != null) {
    entries[_DRI] = input[_DRI];
  }
  if (input[_DBIABA] != null) {
    entries[_DBIABA] = input[_DBIABA];
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
  if (input[_SFS] != null) {
    entries[_SFS] = input[_SFS];
  }
  if (input[_FDBSI] != null) {
    entries[_FDBSI] = input[_FDBSI];
  }
  if (input[_DAB] != null) {
    entries[_DAB] = input[_DAB];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBParameterGroupMessage
 */
const se_DeleteDBParameterGroupMessage = (input: DeleteDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBProxyEndpointRequest
 */
const se_DeleteDBProxyEndpointRequest = (input: DeleteDBProxyEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPEN] != null) {
    entries[_DBPEN] = input[_DBPEN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBProxyRequest
 */
const se_DeleteDBProxyRequest = (input: DeleteDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBSecurityGroupMessage
 */
const se_DeleteDBSecurityGroupMessage = (input: DeleteDBSecurityGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBShardGroupMessage
 */
const se_DeleteDBShardGroupMessage = (input: DeleteDBShardGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGI] != null) {
    entries[_DBSGI] = input[_DBSGI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBSnapshotMessage
 */
const se_DeleteDBSnapshotMessage = (input: DeleteDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBSubnetGroupMessage
 */
const se_DeleteDBSubnetGroupMessage = (input: DeleteDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
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
 * serializeAws_queryDeleteIntegrationMessage
 */
const se_DeleteIntegrationMessage = (input: DeleteIntegrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteOptionGroupMessage
 */
const se_DeleteOptionGroupMessage = (input: DeleteOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTenantDatabaseMessage
 */
const se_DeleteTenantDatabaseMessage = (input: DeleteTenantDatabaseMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_TDBN] != null) {
    entries[_TDBN] = input[_TDBN];
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
 * serializeAws_queryDeregisterDBProxyTargetsRequest
 */
const se_DeregisterDBProxyTargetsRequest = (input: DeregisterDBProxyTargetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_TGN] != null) {
    entries[_TGN] = input[_TGN];
  }
  if (input[_DBIIn] != null) {
    const memberEntries = se_StringList(input[_DBIIn], context);
    if (input[_DBIIn]?.length === 0) {
      entries.DBInstanceIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBInstanceIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DBCIl] != null) {
    const memberEntries = se_StringList(input[_DBCIl], context);
    if (input[_DBCIl]?.length === 0) {
      entries.DBClusterIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBClusterIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountAttributesMessage
 */
const se_DescribeAccountAttributesMessage = (input: DescribeAccountAttributesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryDescribeBlueGreenDeploymentsRequest
 */
const se_DescribeBlueGreenDeploymentsRequest = (
  input: DescribeBlueGreenDeploymentsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_BGDI] != null) {
    entries[_BGDI] = input[_BGDI];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCertificatesMessage
 */
const se_DescribeCertificatesMessage = (input: DescribeCertificatesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIe] != null) {
    entries[_CIe] = input[_CIe];
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
 * serializeAws_queryDescribeDBClusterAutomatedBackupsMessage
 */
const se_DescribeDBClusterAutomatedBackupsMessage = (
  input: DescribeDBClusterAutomatedBackupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DCRI] != null) {
    entries[_DCRI] = input[_DCRI];
  }
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
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
 * serializeAws_queryDescribeDBClusterBacktracksMessage
 */
const se_DescribeDBClusterBacktracksMessage = (
  input: DescribeDBClusterBacktracksMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_BI] != null) {
    entries[_BI] = input[_BI];
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
 * serializeAws_queryDescribeDBClusterEndpointsMessage
 */
const se_DescribeDBClusterEndpointsMessage = (
  input: DescribeDBClusterEndpointsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_DBCEI] != null) {
    entries[_DBCEI] = input[_DBCEI];
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
 * serializeAws_queryDescribeDBClustersMessage
 */
const se_DescribeDBClustersMessage = (input: DescribeDBClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
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
  if (input[_IS] != null) {
    entries[_IS] = input[_IS];
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
  if (input[_IS] != null) {
    entries[_IS] = input[_IS];
  }
  if (input[_IP] != null) {
    entries[_IP] = input[_IP];
  }
  if (input[_DCRI] != null) {
    entries[_DCRI] = input[_DCRI];
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
  if (input[_DOe] != null) {
    entries[_DOe] = input[_DOe];
  }
  if (input[_LSCS] != null) {
    entries[_LSCS] = input[_LSCS];
  }
  if (input[_LST] != null) {
    entries[_LST] = input[_LST];
  }
  if (input[_IA] != null) {
    entries[_IA] = input[_IA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBInstanceAutomatedBackupsMessage
 */
const se_DescribeDBInstanceAutomatedBackupsMessage = (
  input: DescribeDBInstanceAutomatedBackupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DRI] != null) {
    entries[_DRI] = input[_DRI];
  }
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
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
  if (input[_DBIABA] != null) {
    entries[_DBIABA] = input[_DBIABA];
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
 * serializeAws_queryDescribeDBLogFilesMessage
 */
const se_DescribeDBLogFilesMessage = (input: DescribeDBLogFilesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_FC] != null) {
    entries[_FC] = input[_FC];
  }
  if (input[_FLW] != null) {
    entries[_FLW] = input[_FLW];
  }
  if (input[_FS] != null) {
    entries[_FS] = input[_FS];
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
 * serializeAws_queryDescribeDBMajorEngineVersionsRequest
 */
const se_DescribeDBMajorEngineVersionsRequest = (
  input: DescribeDBMajorEngineVersionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBParameterGroupsMessage
 */
const se_DescribeDBParameterGroupsMessage = (input: DescribeDBParameterGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
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
 * serializeAws_queryDescribeDBParametersMessage
 */
const se_DescribeDBParametersMessage = (input: DescribeDBParametersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
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
 * serializeAws_queryDescribeDBProxiesRequest
 */
const se_DescribeDBProxiesRequest = (input: DescribeDBProxiesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBProxyEndpointsRequest
 */
const se_DescribeDBProxyEndpointsRequest = (input: DescribeDBProxyEndpointsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_DBPEN] != null) {
    entries[_DBPEN] = input[_DBPEN];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBProxyTargetGroupsRequest
 */
const se_DescribeDBProxyTargetGroupsRequest = (
  input: DescribeDBProxyTargetGroupsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_TGN] != null) {
    entries[_TGN] = input[_TGN];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBProxyTargetsRequest
 */
const se_DescribeDBProxyTargetsRequest = (input: DescribeDBProxyTargetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_TGN] != null) {
    entries[_TGN] = input[_TGN];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBRecommendationsMessage
 */
const se_DescribeDBRecommendationsMessage = (input: DescribeDBRecommendationsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LUA] != null) {
    entries[_LUA] = __serializeDateTime(input[_LUA]);
  }
  if (input[_LUB] != null) {
    entries[_LUB] = __serializeDateTime(input[_LUB]);
  }
  if (input[_L] != null) {
    entries[_L] = input[_L];
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
 * serializeAws_queryDescribeDBSecurityGroupsMessage
 */
const se_DescribeDBSecurityGroupsMessage = (input: DescribeDBSecurityGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
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
 * serializeAws_queryDescribeDBShardGroupsMessage
 */
const se_DescribeDBShardGroupsMessage = (input: DescribeDBShardGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGI] != null) {
    entries[_DBSGI] = input[_DBSGI];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBSnapshotAttributesMessage
 */
const se_DescribeDBSnapshotAttributesMessage = (
  input: DescribeDBSnapshotAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBSnapshotsMessage
 */
const se_DescribeDBSnapshotsMessage = (input: DescribeDBSnapshotsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
  }
  if (input[_STn] != null) {
    entries[_STn] = input[_STn];
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
  if (input[_IS] != null) {
    entries[_IS] = input[_IS];
  }
  if (input[_IP] != null) {
    entries[_IP] = input[_IP];
  }
  if (input[_DRI] != null) {
    entries[_DRI] = input[_DRI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBSnapshotTenantDatabasesMessage
 */
const se_DescribeDBSnapshotTenantDatabasesMessage = (
  input: DescribeDBSnapshotTenantDatabasesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
  }
  if (input[_STn] != null) {
    entries[_STn] = input[_STn];
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
  if (input[_DRI] != null) {
    entries[_DRI] = input[_DRI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBSubnetGroupsMessage
 */
const se_DescribeDBSubnetGroupsMessage = (input: DescribeDBSubnetGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
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
 * serializeAws_queryDescribeEngineDefaultParametersMessage
 */
const se_DescribeEngineDefaultParametersMessage = (
  input: DescribeEngineDefaultParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBPGF] != null) {
    entries[_DBPGF] = input[_DBPGF];
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
 * serializeAws_queryDescribeEventCategoriesMessage
 */
const se_DescribeEventCategoriesMessage = (input: DescribeEventCategoriesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_STo] != null) {
    entries[_STo] = input[_STo];
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
  if (input[_STta] != null) {
    entries[_STta] = __serializeDateTime(input[_STta]);
  }
  if (input[_ETn] != null) {
    entries[_ETn] = __serializeDateTime(input[_ETn]);
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
 * serializeAws_queryDescribeExportTasksMessage
 */
const se_DescribeExportTasksMessage = (input: DescribeExportTasksMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ETI] != null) {
    entries[_ETI] = input[_ETI];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_STo] != null) {
    entries[_STo] = input[_STo];
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
 * serializeAws_queryDescribeIntegrationsMessage
 */
const se_DescribeIntegrationsMessage = (input: DescribeIntegrationsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
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
 * serializeAws_queryDescribeOptionGroupOptionsMessage
 */
const se_DescribeOptionGroupOptionsMessage = (
  input: DescribeOptionGroupOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
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
 * serializeAws_queryDescribeOptionGroupsMessage
 */
const se_DescribeOptionGroupsMessage = (input: DescribeOptionGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
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
  if (input[_AZG] != null) {
    entries[_AZG] = input[_AZG];
  }
  if (input[_Vp] != null) {
    entries[_Vp] = input[_Vp];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReservedDBInstancesMessage
 */
const se_DescribeReservedDBInstancesMessage = (
  input: DescribeReservedDBInstancesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RDBII] != null) {
    entries[_RDBII] = input[_RDBII];
  }
  if (input[_RDBIOI] != null) {
    entries[_RDBIOI] = input[_RDBIOI];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
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
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_LI] != null) {
    entries[_LI] = input[_LI];
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
 * serializeAws_queryDescribeReservedDBInstancesOfferingsMessage
 */
const se_DescribeReservedDBInstancesOfferingsMessage = (
  input: DescribeReservedDBInstancesOfferingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RDBIOI] != null) {
    entries[_RDBIOI] = input[_RDBIOI];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
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
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
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
 * serializeAws_queryDescribeSourceRegionsMessage
 */
const se_DescribeSourceRegionsMessage = (input: DescribeSourceRegionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RNe] != null) {
    entries[_RNe] = input[_RNe];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
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
  return entries;
};

/**
 * serializeAws_queryDescribeTenantDatabasesMessage
 */
const se_DescribeTenantDatabasesMessage = (input: DescribeTenantDatabasesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_TDBN] != null) {
    entries[_TDBN] = input[_TDBN];
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
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
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
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  return entries;
};

/**
 * serializeAws_queryDisableHttpEndpointRequest
 */
const se_DisableHttpEndpointRequest = (input: DisableHttpEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAe] != null) {
    entries[_RAe] = input[_RAe];
  }
  return entries;
};

/**
 * serializeAws_queryDownloadDBLogFilePortionMessage
 */
const se_DownloadDBLogFilePortionMessage = (input: DownloadDBLogFilePortionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_LFN] != null) {
    entries[_LFN] = input[_LFN];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_NOL] != null) {
    entries[_NOL] = input[_NOL];
  }
  return entries;
};

/**
 * serializeAws_queryEnableHttpEndpointRequest
 */
const se_EnableHttpEndpointRequest = (input: EnableHttpEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAe] != null) {
    entries[_RAe] = input[_RAe];
  }
  return entries;
};

/**
 * serializeAws_queryEncryptionContextMap
 */
const se_EncryptionContextMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryEngineModeList
 */
const se_EngineModeList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryModifyActivityStreamRequest
 */
const se_ModifyActivityStreamRequest = (input: ModifyActivityStreamRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAe] != null) {
    entries[_RAe] = input[_RAe];
  }
  if (input[_APS] != null) {
    entries[_APS] = input[_APS];
  }
  return entries;
};

/**
 * serializeAws_queryModifyCertificatesMessage
 */
const se_ModifyCertificatesMessage = (input: ModifyCertificatesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIe] != null) {
    entries[_CIe] = input[_CIe];
  }
  if (input[_RCO] != null) {
    entries[_RCO] = input[_RCO];
  }
  return entries;
};

/**
 * serializeAws_queryModifyCurrentDBClusterCapacityMessage
 */
const se_ModifyCurrentDBClusterCapacityMessage = (
  input: ModifyCurrentDBClusterCapacityMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_C] != null) {
    entries[_C] = input[_C];
  }
  if (input[_SBT] != null) {
    entries[_SBT] = input[_SBT];
  }
  if (input[_TAi] != null) {
    entries[_TAi] = input[_TAi];
  }
  return entries;
};

/**
 * serializeAws_queryModifyCustomDBEngineVersionMessage
 */
const se_ModifyCustomDBEngineVersionMessage = (
  input: ModifyCustomDBEngineVersionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBClusterEndpointMessage
 */
const se_ModifyDBClusterEndpointMessage = (input: ModifyDBClusterEndpointMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCEI] != null) {
    entries[_DBCEI] = input[_DBCEI];
  }
  if (input[_ET] != null) {
    entries[_ET] = input[_ET];
  }
  if (input[_SM] != null) {
    const memberEntries = se_StringList(input[_SM], context);
    if (input[_SM]?.length === 0) {
      entries.StaticMembers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StaticMembers.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EM] != null) {
    const memberEntries = se_StringList(input[_EM], context);
    if (input[_EM]?.length === 0) {
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
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_BW] != null) {
    entries[_BW] = input[_BW];
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
  if (input[_DBIPGN] != null) {
    entries[_DBIPGN] = input[_DBIPGN];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_SC] != null) {
    const memberEntries = se_ScalingConfiguration(input[_SC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_EHE] != null) {
    entries[_EHE] = input[_EHE];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_EGWF] != null) {
    entries[_EGWF] = input[_EGWF];
  }
  if (input[_DBCIC] != null) {
    entries[_DBCIC] = input[_DBCIC];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_DIM] != null) {
    entries[_DIM] = input[_DIM];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_RMUP] != null) {
    entries[_RMUP] = input[_RMUP];
  }
  if (input[_ELWF] != null) {
    entries[_ELWF] = input[_ELWF];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
  }
  if (input[_EMn] != null) {
    entries[_EMn] = input[_EMn];
  }
  if (input[_AEMC] != null) {
    entries[_AEMC] = input[_AEMC];
  }
  if (input[_ABRPA] != null) {
    entries[_ABRPA] = input[_ABRPA];
  }
  if (input[_ELD] != null) {
    entries[_ELD] = input[_ELD];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_MUAT] != null) {
    entries[_MUAT] = input[_MUAT];
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
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_DBSG] != null) {
    const memberEntries = se_DBSecurityGroupNameList(input[_DBSG], context);
    if (input[_DBSG]?.length === 0) {
      entries.DBSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroups.${key}`;
      entries[loc] = value;
    });
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
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  if (input[_BRP] != null) {
    entries[_BRP] = input[_BRP];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_AMVUl] != null) {
    entries[_AMVUl] = input[_AMVUl];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_LM] != null) {
    entries[_LM] = input[_LM];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_STto] != null) {
    entries[_STto] = input[_STto];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_NDBII] != null) {
    entries[_NDBII] = input[_NDBII];
  }
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_TCA] != null) {
    entries[_TCA] = input[_TCA];
  }
  if (input[_TCP] != null) {
    entries[_TCP] = input[_TCP];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DF] != null) {
    entries[_DF] = input[_DF];
  }
  if (input[_DO] != null) {
    entries[_DO] = input[_DO];
  }
  if (input[_DASA] != null) {
    entries[_DASA] = input[_DASA];
  }
  if (input[_DDI] != null) {
    const memberEntries = se_StringList(input[_DDI], context);
    if (input[_DDI]?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DD] != null) {
    entries[_DD] = input[_DD];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_DBPNo] != null) {
    entries[_DBPNo] = input[_DBPNo];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_PT] != null) {
    entries[_PT] = input[_PT];
  }
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_DIM] != null) {
    entries[_DIM] = input[_DIM];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
  }
  if (input[_CLEC] != null) {
    const memberEntries = se_CloudwatchLogsExportConfiguration(input[_CLEC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudwatchLogsExportConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PF] != null) {
    const memberEntries = se_ProcessorFeatureList(input[_PF], context);
    if (input[_PF]?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UDPF] != null) {
    entries[_UDPF] = input[_UDPF];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_MASa] != null) {
    entries[_MASa] = input[_MASa];
  }
  if (input[_CRR] != null) {
    entries[_CRR] = input[_CRR];
  }
  if (input[_RM] != null) {
    entries[_RM] = input[_RM];
  }
  if (input[_AM] != null) {
    entries[_AM] = input[_AM];
  }
  if (input[_RFAMM] != null) {
    entries[_RFAMM] = input[_RFAMM];
  }
  if (input[_ECOI] != null) {
    entries[_ECOI] = input[_ECOI];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_ABRPA] != null) {
    entries[_ABRPA] = input[_ABRPA];
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_RMUP] != null) {
    entries[_RMUP] = input[_RMUP];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
  }
  if (input[_MT] != null) {
    entries[_MT] = input[_MT];
  }
  if (input[_DLV] != null) {
    entries[_DLV] = input[_DLV];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MUAT] != null) {
    entries[_MUAT] = input[_MUAT];
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBParameterGroupMessage
 */
const se_ModifyDBParameterGroupMessage = (input: ModifyDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
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
 * serializeAws_queryModifyDBProxyEndpointRequest
 */
const se_ModifyDBProxyEndpointRequest = (input: ModifyDBProxyEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPEN] != null) {
    entries[_DBPEN] = input[_DBPEN];
  }
  if (input[_NDBPEN] != null) {
    entries[_NDBPEN] = input[_NDBPEN];
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_StringList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBProxyRequest
 */
const se_ModifyDBProxyRequest = (input: ModifyDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_NDBPN] != null) {
    entries[_NDBPN] = input[_NDBPN];
  }
  if (input[_DAS] != null) {
    entries[_DAS] = input[_DAS];
  }
  if (input[_Au] != null) {
    const memberEntries = se_UserAuthConfigList(input[_Au], context);
    if (input[_Au]?.length === 0) {
      entries.Auth = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Auth.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTLS] != null) {
    entries[_RTLS] = input[_RTLS];
  }
  if (input[_ICT] != null) {
    entries[_ICT] = input[_ICT];
  }
  if (input[_DL] != null) {
    entries[_DL] = input[_DL];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_SG] != null) {
    const memberEntries = se_StringList(input[_SG], context);
    if (input[_SG]?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBProxyTargetGroupRequest
 */
const se_ModifyDBProxyTargetGroupRequest = (input: ModifyDBProxyTargetGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGN] != null) {
    entries[_TGN] = input[_TGN];
  }
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_CPC] != null) {
    const memberEntries = se_ConnectionPoolConfiguration(input[_CPC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionPoolConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NN] != null) {
    entries[_NN] = input[_NN];
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBRecommendationMessage
 */
const se_ModifyDBRecommendationMessage = (input: ModifyDBRecommendationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RIe] != null) {
    entries[_RIe] = input[_RIe];
  }
  if (input[_L] != null) {
    entries[_L] = input[_L];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_RAU] != null) {
    const memberEntries = se_RecommendedActionUpdateList(input[_RAU], context);
    if (input[_RAU]?.length === 0) {
      entries.RecommendedActionUpdates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecommendedActionUpdates.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBShardGroupMessage
 */
const se_ModifyDBShardGroupMessage = (input: ModifyDBShardGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGI] != null) {
    entries[_DBSGI] = input[_DBSGI];
  }
  if (input[_MACU] != null) {
    entries[_MACU] = __serializeFloat(input[_MACU]);
  }
  if (input[_MACUi] != null) {
    entries[_MACUi] = __serializeFloat(input[_MACUi]);
  }
  if (input[_CR] != null) {
    entries[_CR] = input[_CR];
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBSnapshotAttributeMessage
 */
const se_ModifyDBSnapshotAttributeMessage = (input: ModifyDBSnapshotAttributeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
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
 * serializeAws_queryModifyDBSnapshotMessage
 */
const se_ModifyDBSnapshotMessage = (input: ModifyDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBSubnetGroupMessage
 */
const se_ModifyDBSubnetGroupMessage = (input: ModifyDBSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_DBSGDu] != null) {
    entries[_DBSGDu] = input[_DBSGDu];
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
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_AMVUl] != null) {
    entries[_AMVUl] = input[_AMVUl];
  }
  return entries;
};

/**
 * serializeAws_queryModifyIntegrationMessage
 */
const se_ModifyIntegrationMessage = (input: ModifyIntegrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  if (input[_IN] != null) {
    entries[_IN] = input[_IN];
  }
  if (input[_DFa] != null) {
    entries[_DFa] = input[_DFa];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryModifyOptionGroupMessage
 */
const se_ModifyOptionGroupMessage = (input: ModifyOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_OTI] != null) {
    const memberEntries = se_OptionConfigurationList(input[_OTI], context);
    if (input[_OTI]?.length === 0) {
      entries.OptionsToInclude = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToInclude.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OTR] != null) {
    const memberEntries = se_OptionNamesList(input[_OTR], context);
    if (input[_OTR]?.length === 0) {
      entries.OptionsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryModifyTenantDatabaseMessage
 */
const se_ModifyTenantDatabaseMessage = (input: ModifyTenantDatabaseMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_TDBN] != null) {
    entries[_TDBN] = input[_TDBN];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_NTDBN] != null) {
    entries[_NTDBN] = input[_NTDBN];
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_RMUP] != null) {
    entries[_RMUP] = input[_RMUP];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
  }
  return entries;
};

/**
 * serializeAws_queryOptionConfiguration
 */
const se_OptionConfiguration = (input: OptionConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ON] != null) {
    entries[_ON] = input[_ON];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_OV] != null) {
    entries[_OV] = input[_OV];
  }
  if (input[_DBSGM] != null) {
    const memberEntries = se_DBSecurityGroupNameList(input[_DBSGM], context);
    if (input[_DBSGM]?.length === 0) {
      entries.DBSecurityGroupMemberships = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroupMemberships.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VSGM] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGM], context);
    if (input[_VSGM]?.length === 0) {
      entries.VpcSecurityGroupMemberships = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupMemberships.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OS] != null) {
    const memberEntries = se_OptionSettingsList(input[_OS], context);
    if (input[_OS]?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryOptionConfigurationList
 */
const se_OptionConfigurationList = (input: OptionConfiguration[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_OptionConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`OptionConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryOptionNamesList
 */
const se_OptionNamesList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryOptionSetting
 */
const se_OptionSetting = (input: OptionSetting, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_DTa] != null) {
    entries[_DTa] = input[_DTa];
  }
  if (input[_AV] != null) {
    entries[_AV] = input[_AV];
  }
  if (input[_IM] != null) {
    entries[_IM] = input[_IM];
  }
  if (input[_IC] != null) {
    entries[_IC] = input[_IC];
  }
  return entries;
};

/**
 * serializeAws_queryOptionSettingsList
 */
const se_OptionSettingsList = (input: OptionSetting[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_OptionSetting(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`OptionSetting.${counter}.${key}`] = value;
    });
    counter++;
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
  if (input[_DTa] != null) {
    entries[_DTa] = input[_DTa];
  }
  if (input[_AV] != null) {
    entries[_AV] = input[_AV];
  }
  if (input[_IM] != null) {
    entries[_IM] = input[_IM];
  }
  if (input[_MEVi] != null) {
    entries[_MEVi] = input[_MEVi];
  }
  if (input[_AMp] != null) {
    entries[_AMp] = input[_AMp];
  }
  if (input[_SEM] != null) {
    const memberEntries = se_EngineModeList(input[_SEM], context);
    if (input[_SEM]?.length === 0) {
      entries.SupportedEngineModes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SupportedEngineModes.${key}`;
      entries[loc] = value;
    });
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
 * serializeAws_queryProcessorFeature
 */
const se_ProcessorFeature = (input: ProcessorFeature, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  return entries;
};

/**
 * serializeAws_queryProcessorFeatureList
 */
const se_ProcessorFeatureList = (input: ProcessorFeature[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ProcessorFeature(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ProcessorFeature.${counter}.${key}`] = value;
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
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  return entries;
};

/**
 * serializeAws_queryPromoteReadReplicaMessage
 */
const se_PromoteReadReplicaMessage = (input: PromoteReadReplicaMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_BRP] != null) {
    entries[_BRP] = input[_BRP];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  return entries;
};

/**
 * serializeAws_queryPurchaseReservedDBInstancesOfferingMessage
 */
const se_PurchaseReservedDBInstancesOfferingMessage = (
  input: PurchaseReservedDBInstancesOfferingMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RDBIOI] != null) {
    entries[_RDBIOI] = input[_RDBIOI];
  }
  if (input[_RDBII] != null) {
    entries[_RDBII] = input[_RDBII];
  }
  if (input[_DBICn] != null) {
    entries[_DBICn] = input[_DBICn];
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
 * serializeAws_queryRdsCustomClusterConfiguration
 */
const se_RdsCustomClusterConfiguration = (input: RdsCustomClusterConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ISI] != null) {
    entries[_ISI] = input[_ISI];
  }
  if (input[_TGMDI] != null) {
    entries[_TGMDI] = input[_TGMDI];
  }
  if (input[_RM] != null) {
    entries[_RM] = input[_RM];
  }
  return entries;
};

/**
 * serializeAws_queryRebootDBClusterMessage
 */
const se_RebootDBClusterMessage = (input: RebootDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
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
 * serializeAws_queryRebootDBShardGroupMessage
 */
const se_RebootDBShardGroupMessage = (input: RebootDBShardGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBSGI] != null) {
    entries[_DBSGI] = input[_DBSGI];
  }
  return entries;
};

/**
 * serializeAws_queryRecommendedActionUpdate
 */
const se_RecommendedActionUpdate = (input: RecommendedActionUpdate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AIc] != null) {
    entries[_AIc] = input[_AIc];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  return entries;
};

/**
 * serializeAws_queryRecommendedActionUpdateList
 */
const se_RecommendedActionUpdateList = (input: RecommendedActionUpdate[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RecommendedActionUpdate(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRegisterDBProxyTargetsRequest
 */
const se_RegisterDBProxyTargetsRequest = (input: RegisterDBProxyTargetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPN] != null) {
    entries[_DBPN] = input[_DBPN];
  }
  if (input[_TGN] != null) {
    entries[_TGN] = input[_TGN];
  }
  if (input[_DBIIn] != null) {
    const memberEntries = se_StringList(input[_DBIIn], context);
    if (input[_DBIIn]?.length === 0) {
      entries.DBInstanceIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBInstanceIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DBCIl] != null) {
    const memberEntries = se_StringList(input[_DBCIl], context);
    if (input[_DBCIl]?.length === 0) {
      entries.DBClusterIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBClusterIdentifiers.${key}`;
      entries[loc] = value;
    });
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
 * serializeAws_queryRemoveRoleFromDBClusterMessage
 */
const se_RemoveRoleFromDBClusterMessage = (input: RemoveRoleFromDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBCI] != null) {
    entries[_DBCI] = input[_DBCI];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_FN] != null) {
    entries[_FN] = input[_FN];
  }
  return entries;
};

/**
 * serializeAws_queryRemoveRoleFromDBInstanceMessage
 */
const se_RemoveRoleFromDBInstanceMessage = (input: RemoveRoleFromDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_FN] != null) {
    entries[_FN] = input[_FN];
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
 * serializeAws_queryResetDBParameterGroupMessage
 */
const se_ResetDBParameterGroupMessage = (input: ResetDBParameterGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
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
 * serializeAws_queryRestoreDBClusterFromS3Message
 */
const se_RestoreDBClusterFromS3Message = (input: RestoreDBClusterFromS3Message, context: __SerdeContext): any => {
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
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
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
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
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
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
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
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
  }
  if (input[_SEV] != null) {
    entries[_SEV] = input[_SEV];
  }
  if (input[_SBN] != null) {
    entries[_SBN] = input[_SBN];
  }
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_SIRA] != null) {
    entries[_SIRA] = input[_SIRA];
  }
  if (input[_BW] != null) {
    entries[_BW] = input[_BW];
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
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
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
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
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
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
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
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_BW] != null) {
    entries[_BW] = input[_BW];
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
  if (input[_EMn] != null) {
    entries[_EMn] = input[_EMn];
  }
  if (input[_SC] != null) {
    const memberEntries = se_ScalingConfiguration(input[_SC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_DBCIC] != null) {
    entries[_DBCIC] = input[_DBCIC];
  }
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RCCC] != null) {
    const memberEntries = se_RdsCustomClusterConfiguration(input[_RCCC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RdsCustomClusterConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
  }
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
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
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
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
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_BW] != null) {
    entries[_BW] = input[_BW];
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
  if (input[_DBCPGN] != null) {
    entries[_DBCPGN] = input[_DBCPGN];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_DBCIC] != null) {
    entries[_DBCIC] = input[_DBCIC];
  }
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SDCRI] != null) {
    entries[_SDCRI] = input[_SDCRI];
  }
  if (input[_SVSC] != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input[_SVSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SC] != null) {
    const memberEntries = se_ScalingConfiguration(input[_SC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EMn] != null) {
    entries[_EMn] = input[_EMn];
  }
  if (input[_RCCC] != null) {
    const memberEntries = se_RdsCustomClusterConfiguration(input[_RCCC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RdsCustomClusterConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
  }
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
  }
  return entries;
};

/**
 * serializeAws_queryRestoreDBInstanceFromDBSnapshotMessage
 */
const se_RestoreDBInstanceFromDBSnapshotMessage = (
  input: RestoreDBInstanceFromDBSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_AZv] != null) {
    entries[_AZv] = input[_AZv];
  }
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_LM] != null) {
    entries[_LM] = input[_LM];
  }
  if (input[_DBN] != null) {
    entries[_DBN] = input[_DBN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_STto] != null) {
    entries[_STto] = input[_STto];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
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
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_TCA] != null) {
    entries[_TCA] = input[_TCA];
  }
  if (input[_TCP] != null) {
    entries[_TCP] = input[_TCP];
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
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DF] != null) {
    entries[_DF] = input[_DF];
  }
  if (input[_DO] != null) {
    entries[_DO] = input[_DO];
  }
  if (input[_DASA] != null) {
    entries[_DASA] = input[_DASA];
  }
  if (input[_DDI] != null) {
    const memberEntries = se_StringList(input[_DDI], context);
    if (input[_DDI]?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
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
  if (input[_PF] != null) {
    const memberEntries = se_ProcessorFeatureList(input[_PF], context);
    if (input[_PF]?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UDPF] != null) {
    entries[_UDPF] = input[_UDPF];
  }
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_ECOI] != null) {
    entries[_ECOI] = input[_ECOI];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_BTa] != null) {
    entries[_BTa] = input[_BTa];
  }
  if (input[_CIIP] != null) {
    entries[_CIIP] = input[_CIIP];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_DBCSI] != null) {
    entries[_DBCSI] = input[_DBCSI];
  }
  if (input[_DLV] != null) {
    entries[_DLV] = input[_DLV];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
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
 * serializeAws_queryRestoreDBInstanceFromS3Message
 */
const se_RestoreDBInstanceFromS3Message = (input: RestoreDBInstanceFromS3Message, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBN] != null) {
    entries[_DBN] = input[_DBN];
  }
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MU] != null) {
    entries[_MU] = input[_MU];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_DBSG] != null) {
    const memberEntries = se_DBSecurityGroupNameList(input[_DBSG], context);
    if (input[_DBSG]?.length === 0) {
      entries.DBSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroups.${key}`;
      entries[loc] = value;
    });
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
  if (input[_AZv] != null) {
    entries[_AZv] = input[_AZv];
  }
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  if (input[_BRP] != null) {
    entries[_BRP] = input[_BRP];
  }
  if (input[_PBW] != null) {
    entries[_PBW] = input[_PBW];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_LM] != null) {
    entries[_LM] = input[_LM];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_STto] != null) {
    entries[_STto] = input[_STto];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
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
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
  }
  if (input[_MIo] != null) {
    entries[_MIo] = input[_MIo];
  }
  if (input[_MRA] != null) {
    entries[_MRA] = input[_MRA];
  }
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
  }
  if (input[_SEV] != null) {
    entries[_SEV] = input[_SEV];
  }
  if (input[_SBN] != null) {
    entries[_SBN] = input[_SBN];
  }
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_SIRA] != null) {
    entries[_SIRA] = input[_SIRA];
  }
  if (input[_DIM] != null) {
    entries[_DIM] = input[_DIM];
  }
  if (input[_EPI] != null) {
    entries[_EPI] = input[_EPI];
  }
  if (input[_PIKMSKI] != null) {
    entries[_PIKMSKI] = input[_PIKMSKI];
  }
  if (input[_PIRP] != null) {
    entries[_PIRP] = input[_PIRP];
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
  if (input[_PF] != null) {
    const memberEntries = se_ProcessorFeatureList(input[_PF], context);
    if (input[_PF]?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UDPF] != null) {
    entries[_UDPF] = input[_UDPF];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_MASa] != null) {
    entries[_MASa] = input[_MASa];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MMUP] != null) {
    entries[_MMUP] = input[_MMUP];
  }
  if (input[_MUSKKI] != null) {
    entries[_MUSKKI] = input[_MUSKKI];
  }
  if (input[_DLV] != null) {
    entries[_DLV] = input[_DLV];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
  }
  return entries;
};

/**
 * serializeAws_queryRestoreDBInstanceToPointInTimeMessage
 */
const se_RestoreDBInstanceToPointInTimeMessage = (
  input: RestoreDBInstanceToPointInTimeMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SDBII] != null) {
    entries[_SDBII] = input[_SDBII];
  }
  if (input[_TDBII] != null) {
    entries[_TDBII] = input[_TDBII];
  }
  if (input[_RTe] != null) {
    entries[_RTe] = __serializeDateTime(input[_RTe]);
  }
  if (input[_ULRT] != null) {
    entries[_ULRT] = input[_ULRT];
  }
  if (input[_DBIC] != null) {
    entries[_DBIC] = input[_DBIC];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_AZv] != null) {
    entries[_AZv] = input[_AZv];
  }
  if (input[_DBSGNu] != null) {
    entries[_DBSGNu] = input[_DBSGNu];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_AMVU] != null) {
    entries[_AMVU] = input[_AMVU];
  }
  if (input[_LM] != null) {
    entries[_LM] = input[_LM];
  }
  if (input[_DBN] != null) {
    entries[_DBN] = input[_DBN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_STto] != null) {
    entries[_STto] = input[_STto];
  }
  if (input[_OGN] != null) {
    entries[_OGN] = input[_OGN];
  }
  if (input[_CTTS] != null) {
    entries[_CTTS] = input[_CTTS];
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
  if (input[_STt] != null) {
    entries[_STt] = input[_STt];
  }
  if (input[_TCA] != null) {
    entries[_TCA] = input[_TCA];
  }
  if (input[_TCP] != null) {
    entries[_TCP] = input[_TCP];
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
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  if (input[_DIAMRN] != null) {
    entries[_DIAMRN] = input[_DIAMRN];
  }
  if (input[_DF] != null) {
    entries[_DF] = input[_DF];
  }
  if (input[_DO] != null) {
    entries[_DO] = input[_DO];
  }
  if (input[_DASA] != null) {
    entries[_DASA] = input[_DASA];
  }
  if (input[_DDI] != null) {
    const memberEntries = se_StringList(input[_DDI], context);
    if (input[_DDI]?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EIAMDA] != null) {
    entries[_EIAMDA] = input[_EIAMDA];
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
  if (input[_PF] != null) {
    const memberEntries = se_ProcessorFeatureList(input[_PF], context);
    if (input[_PF]?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UDPF] != null) {
    entries[_UDPF] = input[_UDPF];
  }
  if (input[_DBPGN] != null) {
    entries[_DBPGN] = input[_DBPGN];
  }
  if (input[_DP] != null) {
    entries[_DP] = input[_DP];
  }
  if (input[_SDRI] != null) {
    entries[_SDRI] = input[_SDRI];
  }
  if (input[_MASa] != null) {
    entries[_MASa] = input[_MASa];
  }
  if (input[_ECOI] != null) {
    entries[_ECOI] = input[_ECOI];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SDBIABA] != null) {
    entries[_SDBIABA] = input[_SDBIABA];
  }
  if (input[_BTa] != null) {
    entries[_BTa] = input[_BTa];
  }
  if (input[_CIIP] != null) {
    entries[_CIIP] = input[_CIIP];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_DLV] != null) {
    entries[_DLV] = input[_DLV];
  }
  if (input[_CACI] != null) {
    entries[_CACI] = input[_CACI];
  }
  if (input[_ELS] != null) {
    entries[_ELS] = input[_ELS];
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
 * serializeAws_queryRevokeDBSecurityGroupIngressMessage
 */
const se_RevokeDBSecurityGroupIngressMessage = (
  input: RevokeDBSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DBSGN] != null) {
    entries[_DBSGN] = input[_DBSGN];
  }
  if (input[_CIDRIP] != null) {
    entries[_CIDRIP] = input[_CIDRIP];
  }
  if (input[_ECSGN] != null) {
    entries[_ECSGN] = input[_ECSGN];
  }
  if (input[_ECSGI] != null) {
    entries[_ECSGI] = input[_ECSGI];
  }
  if (input[_ECSGOI] != null) {
    entries[_ECSGOI] = input[_ECSGOI];
  }
  return entries;
};

/**
 * serializeAws_queryScalingConfiguration
 */
const se_ScalingConfiguration = (input: ScalingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MCi] != null) {
    entries[_MCi] = input[_MCi];
  }
  if (input[_MCa] != null) {
    entries[_MCa] = input[_MCa];
  }
  if (input[_AP] != null) {
    entries[_AP] = input[_AP];
  }
  if (input[_SUAP] != null) {
    entries[_SUAP] = input[_SUAP];
  }
  if (input[_TAi] != null) {
    entries[_TAi] = input[_TAi];
  }
  if (input[_SBT] != null) {
    entries[_SBT] = input[_SBT];
  }
  return entries;
};

/**
 * serializeAws_queryServerlessV2ScalingConfiguration
 */
const se_ServerlessV2ScalingConfiguration = (input: ServerlessV2ScalingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MCi] != null) {
    entries[_MCi] = __serializeFloat(input[_MCi]);
  }
  if (input[_MCa] != null) {
    entries[_MCa] = __serializeFloat(input[_MCa]);
  }
  if (input[_SUAP] != null) {
    entries[_SUAP] = input[_SUAP];
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
 * serializeAws_queryStartActivityStreamRequest
 */
const se_StartActivityStreamRequest = (input: StartActivityStreamRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAe] != null) {
    entries[_RAe] = input[_RAe];
  }
  if (input[_Mo] != null) {
    entries[_Mo] = input[_Mo];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_ENAFI] != null) {
    entries[_ENAFI] = input[_ENAFI];
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
 * serializeAws_queryStartDBInstanceAutomatedBackupsReplicationMessage
 */
const se_StartDBInstanceAutomatedBackupsReplicationMessage = (
  input: StartDBInstanceAutomatedBackupsReplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SDBIA] != null) {
    entries[_SDBIA] = input[_SDBIA];
  }
  if (input[_BRP] != null) {
    entries[_BRP] = input[_BRP];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_PSU] != null) {
    entries[_PSU] = input[_PSU];
  }
  return entries;
};

/**
 * serializeAws_queryStartDBInstanceMessage
 */
const se_StartDBInstanceMessage = (input: StartDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  return entries;
};

/**
 * serializeAws_queryStartExportTaskMessage
 */
const se_StartExportTaskMessage = (input: StartExportTaskMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ETI] != null) {
    entries[_ETI] = input[_ETI];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_SBN] != null) {
    entries[_SBN] = input[_SBN];
  }
  if (input[_IRA] != null) {
    entries[_IRA] = input[_IRA];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_EO] != null) {
    const memberEntries = se_StringList(input[_EO], context);
    if (input[_EO]?.length === 0) {
      entries.ExportOnly = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExportOnly.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryStopActivityStreamRequest
 */
const se_StopActivityStreamRequest = (input: StopActivityStreamRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAe] != null) {
    entries[_RAe] = input[_RAe];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
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
 * serializeAws_queryStopDBInstanceAutomatedBackupsReplicationMessage
 */
const se_StopDBInstanceAutomatedBackupsReplicationMessage = (
  input: StopDBInstanceAutomatedBackupsReplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SDBIA] != null) {
    entries[_SDBIA] = input[_SDBIA];
  }
  return entries;
};

/**
 * serializeAws_queryStopDBInstanceMessage
 */
const se_StopDBInstanceMessage = (input: StopDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
  }
  if (input[_DBSIn] != null) {
    entries[_DBSIn] = input[_DBSIn];
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
 * serializeAws_querySwitchoverBlueGreenDeploymentRequest
 */
const se_SwitchoverBlueGreenDeploymentRequest = (
  input: SwitchoverBlueGreenDeploymentRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_BGDI] != null) {
    entries[_BGDI] = input[_BGDI];
  }
  if (input[_STw] != null) {
    entries[_STw] = input[_STw];
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
 * serializeAws_querySwitchoverReadReplicaMessage
 */
const se_SwitchoverReadReplicaMessage = (input: SwitchoverReadReplicaMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBII] != null) {
    entries[_DBII] = input[_DBII];
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
 * serializeAws_queryUserAuthConfig
 */
const se_UserAuthConfig = (input: UserAuthConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_ASu] != null) {
    entries[_ASu] = input[_ASu];
  }
  if (input[_SAe] != null) {
    entries[_SAe] = input[_SAe];
  }
  if (input[_IAMA] != null) {
    entries[_IAMA] = input[_IAMA];
  }
  if (input[_CPAT] != null) {
    entries[_CPAT] = input[_CPAT];
  }
  return entries;
};

/**
 * serializeAws_queryUserAuthConfigList
 */
const se_UserAuthConfigList = (input: UserAuthConfig[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_UserAuthConfig(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
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
 * deserializeAws_queryAccountAttributesMessage
 */
const de_AccountAttributesMessage = (output: any, context: __SerdeContext): AccountAttributesMessage => {
  const contents: any = {};
  if (String(output.AccountQuotas).trim() === "") {
    contents[_AQ] = [];
  } else if (output[_AQ] != null && output[_AQ][_AQc] != null) {
    contents[_AQ] = de_AccountQuotaList(__getArrayIfSingleItem(output[_AQ][_AQc]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAccountQuota
 */
const de_AccountQuota = (output: any, context: __SerdeContext): AccountQuota => {
  const contents: any = {};
  if (output[_AQN] != null) {
    contents[_AQN] = __expectString(output[_AQN]);
  }
  if (output[_U] != null) {
    contents[_U] = __strictParseLong(output[_U]) as number;
  }
  if (output[_Max] != null) {
    contents[_Max] = __strictParseLong(output[_Max]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAccountQuotaList
 */
const de_AccountQuotaList = (output: any, context: __SerdeContext): AccountQuota[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountQuota(entry, context);
    });
};

/**
 * deserializeAws_queryActivityStreamModeList
 */
const de_ActivityStreamModeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
 * deserializeAws_queryAuthorizationAlreadyExistsFault
 */
const de_AuthorizationAlreadyExistsFault = (output: any, context: __SerdeContext): AuthorizationAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
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
 * deserializeAws_queryAuthorizationQuotaExceededFault
 */
const de_AuthorizationQuotaExceededFault = (output: any, context: __SerdeContext): AuthorizationQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizeDBSecurityGroupIngressResult
 */
const de_AuthorizeDBSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): AuthorizeDBSecurityGroupIngressResult => {
  const contents: any = {};
  if (output[_DBSGe] != null) {
    contents[_DBSGe] = de_DBSecurityGroup(output[_DBSGe], context);
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
 * deserializeAws_queryAvailableProcessorFeature
 */
const de_AvailableProcessorFeature = (output: any, context: __SerdeContext): AvailableProcessorFeature => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __expectString(output[_AV]);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailableProcessorFeatureList
 */
const de_AvailableProcessorFeatureList = (output: any, context: __SerdeContext): AvailableProcessorFeature[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AvailableProcessorFeature(entry, context);
    });
};

/**
 * deserializeAws_queryBackupPolicyNotFoundFault
 */
const de_BackupPolicyNotFoundFault = (output: any, context: __SerdeContext): BackupPolicyNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryBlueGreenDeployment
 */
const de_BlueGreenDeployment = (output: any, context: __SerdeContext): BlueGreenDeployment => {
  const contents: any = {};
  if (output[_BGDI] != null) {
    contents[_BGDI] = __expectString(output[_BGDI]);
  }
  if (output[_BGDN] != null) {
    contents[_BGDN] = __expectString(output[_BGDN]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_Ta] != null) {
    contents[_Ta] = __expectString(output[_Ta]);
  }
  if (String(output.SwitchoverDetails).trim() === "") {
    contents[_SD] = [];
  } else if (output[_SD] != null && output[_SD][_me] != null) {
    contents[_SD] = de_SwitchoverDetailList(__getArrayIfSingleItem(output[_SD][_me]), context);
  }
  if (String(output.Tasks).trim() === "") {
    contents[_Tas] = [];
  } else if (output[_Tas] != null && output[_Tas][_me] != null) {
    contents[_Tas] = de_BlueGreenDeploymentTaskList(__getArrayIfSingleItem(output[_Tas][_me]), context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SDt] != null) {
    contents[_SDt] = __expectString(output[_SDt]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_DTe] != null) {
    contents[_DTe] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DTe]));
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryBlueGreenDeploymentAlreadyExistsFault
 */
const de_BlueGreenDeploymentAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryBlueGreenDeploymentList
 */
const de_BlueGreenDeploymentList = (output: any, context: __SerdeContext): BlueGreenDeployment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BlueGreenDeployment(entry, context);
    });
};

/**
 * deserializeAws_queryBlueGreenDeploymentNotFoundFault
 */
const de_BlueGreenDeploymentNotFoundFault = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryBlueGreenDeploymentTask
 */
const de_BlueGreenDeploymentTask = (output: any, context: __SerdeContext): BlueGreenDeploymentTask => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryBlueGreenDeploymentTaskList
 */
const de_BlueGreenDeploymentTaskList = (output: any, context: __SerdeContext): BlueGreenDeploymentTask[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BlueGreenDeploymentTask(entry, context);
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
  if (output[_CIe] != null) {
    contents[_CIe] = __expectString(output[_CIe]);
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
  if (output[_CO] != null) {
    contents[_CO] = __parseBoolean(output[_CO]);
  }
  if (output[_COVT] != null) {
    contents[_COVT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_COVT]));
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
  if (output[_DCFNL] != null) {
    contents[_DCFNL] = __expectString(output[_DCFNL]);
  }
  if (String(output.Certificates).trim() === "") {
    contents[_Ce] = [];
  } else if (output[_Ce] != null && output[_Ce][_Cer] != null) {
    contents[_Ce] = de_CertificateList(__getArrayIfSingleItem(output[_Ce][_Cer]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
 * deserializeAws_queryCharacterSet
 */
const de_CharacterSet = (output: any, context: __SerdeContext): CharacterSet => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_CSD] != null) {
    contents[_CSD] = __expectString(output[_CSD]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterPendingModifiedValues
 */
const de_ClusterPendingModifiedValues = (output: any, context: __SerdeContext): ClusterPendingModifiedValues => {
  const contents: any = {};
  if (output[_PCLE] != null) {
    contents[_PCLE] = de_PendingCloudwatchLogsExports(output[_PCLE], context);
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_MUP] != null) {
    contents[_MUP] = __expectString(output[_MUP]);
  }
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
  }
  if (output[_RCCC] != null) {
    contents[_RCCC] = de_RdsCustomClusterConfiguration(output[_RCCC], context);
  }
  if (output[_I] != null) {
    contents[_I] = __strictParseInt32(output[_I]) as number;
  }
  if (output[_CD] != null) {
    contents[_CD] = de_CertificateDetails(output[_CD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryConnectionPoolConfigurationInfo
 */
const de_ConnectionPoolConfigurationInfo = (output: any, context: __SerdeContext): ConnectionPoolConfigurationInfo => {
  const contents: any = {};
  if (output[_MCP] != null) {
    contents[_MCP] = __strictParseInt32(output[_MCP]) as number;
  }
  if (output[_MICP] != null) {
    contents[_MICP] = __strictParseInt32(output[_MICP]) as number;
  }
  if (output[_CBT] != null) {
    contents[_CBT] = __strictParseInt32(output[_CBT]) as number;
  }
  if (String(output.SessionPinningFilters).trim() === "") {
    contents[_SPF] = [];
  } else if (output[_SPF] != null && output[_SPF][_me] != null) {
    contents[_SPF] = de_StringList(__getArrayIfSingleItem(output[_SPF][_me]), context);
  }
  if (output[_IQ] != null) {
    contents[_IQ] = __expectString(output[_IQ]);
  }
  return contents;
};

/**
 * deserializeAws_queryContextAttribute
 */
const de_ContextAttribute = (output: any, context: __SerdeContext): ContextAttribute => {
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
 * deserializeAws_queryContextAttributeList
 */
const de_ContextAttributeList = (output: any, context: __SerdeContext): ContextAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContextAttribute(entry, context);
    });
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
 * deserializeAws_queryCopyDBParameterGroupResult
 */
const de_CopyDBParameterGroupResult = (output: any, context: __SerdeContext): CopyDBParameterGroupResult => {
  const contents: any = {};
  if (output[_DBPG] != null) {
    contents[_DBPG] = de_DBParameterGroup(output[_DBPG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyDBSnapshotResult
 */
const de_CopyDBSnapshotResult = (output: any, context: __SerdeContext): CopyDBSnapshotResult => {
  const contents: any = {};
  if (output[_DBS] != null) {
    contents[_DBS] = de_DBSnapshot(output[_DBS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyOptionGroupResult
 */
const de_CopyOptionGroupResult = (output: any, context: __SerdeContext): CopyOptionGroupResult => {
  const contents: any = {};
  if (output[_OG] != null) {
    contents[_OG] = de_OptionGroup(output[_OG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateBlueGreenDeploymentResponse
 */
const de_CreateBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): CreateBlueGreenDeploymentResponse => {
  const contents: any = {};
  if (output[_BGD] != null) {
    contents[_BGD] = de_BlueGreenDeployment(output[_BGD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCustomDBEngineVersionFault
 */
const de_CreateCustomDBEngineVersionFault = (
  output: any,
  context: __SerdeContext
): CreateCustomDBEngineVersionFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryCreateDBInstanceReadReplicaResult
 */
const de_CreateDBInstanceReadReplicaResult = (
  output: any,
  context: __SerdeContext
): CreateDBInstanceReadReplicaResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
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
 * deserializeAws_queryCreateDBParameterGroupResult
 */
const de_CreateDBParameterGroupResult = (output: any, context: __SerdeContext): CreateDBParameterGroupResult => {
  const contents: any = {};
  if (output[_DBPG] != null) {
    contents[_DBPG] = de_DBParameterGroup(output[_DBPG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBProxyEndpointResponse
 */
const de_CreateDBProxyEndpointResponse = (output: any, context: __SerdeContext): CreateDBProxyEndpointResponse => {
  const contents: any = {};
  if (output[_DBPE] != null) {
    contents[_DBPE] = de_DBProxyEndpoint(output[_DBPE], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBProxyResponse
 */
const de_CreateDBProxyResponse = (output: any, context: __SerdeContext): CreateDBProxyResponse => {
  const contents: any = {};
  if (output[_DBP] != null) {
    contents[_DBP] = de_DBProxy(output[_DBP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBSecurityGroupResult
 */
const de_CreateDBSecurityGroupResult = (output: any, context: __SerdeContext): CreateDBSecurityGroupResult => {
  const contents: any = {};
  if (output[_DBSGe] != null) {
    contents[_DBSGe] = de_DBSecurityGroup(output[_DBSGe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBSnapshotResult
 */
const de_CreateDBSnapshotResult = (output: any, context: __SerdeContext): CreateDBSnapshotResult => {
  const contents: any = {};
  if (output[_DBS] != null) {
    contents[_DBS] = de_DBSnapshot(output[_DBS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBSubnetGroupResult
 */
const de_CreateDBSubnetGroupResult = (output: any, context: __SerdeContext): CreateDBSubnetGroupResult => {
  const contents: any = {};
  if (output[_DBSGu] != null) {
    contents[_DBSGu] = de_DBSubnetGroup(output[_DBSGu], context);
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
 * deserializeAws_queryCreateOptionGroupResult
 */
const de_CreateOptionGroupResult = (output: any, context: __SerdeContext): CreateOptionGroupResult => {
  const contents: any = {};
  if (output[_OG] != null) {
    contents[_OG] = de_OptionGroup(output[_OG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateTenantDatabaseResult
 */
const de_CreateTenantDatabaseResult = (output: any, context: __SerdeContext): CreateTenantDatabaseResult => {
  const contents: any = {};
  if (output[_TD] != null) {
    contents[_TD] = de_TenantDatabase(output[_TD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomAvailabilityZoneNotFoundFault
 */
const de_CustomAvailabilityZoneNotFoundFault = (
  output: any,
  context: __SerdeContext
): CustomAvailabilityZoneNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDBEngineVersionAlreadyExistsFault
 */
const de_CustomDBEngineVersionAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CustomDBEngineVersionAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDBEngineVersionAMI
 */
const de_CustomDBEngineVersionAMI = (output: any, context: __SerdeContext): CustomDBEngineVersionAMI => {
  const contents: any = {};
  if (output[_II] != null) {
    contents[_II] = __expectString(output[_II]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDBEngineVersionNotFoundFault
 */
const de_CustomDBEngineVersionNotFoundFault = (
  output: any,
  context: __SerdeContext
): CustomDBEngineVersionNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDBEngineVersionQuotaExceededFault
 */
const de_CustomDBEngineVersionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CustomDBEngineVersionQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBCluster
 */
const de_DBCluster = (output: any, context: __SerdeContext): DBCluster => {
  const contents: any = {};
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
  }
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_AZv] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_AZv]), context);
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_DBCPG] != null) {
    contents[_DBCPG] = __expectString(output[_DBCPG]);
  }
  if (output[_DBSGu] != null) {
    contents[_DBSGu] = __expectString(output[_DBSGu]);
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
  if (String(output.CustomEndpoints).trim() === "") {
    contents[_CE] = [];
  } else if (output[_CE] != null && output[_CE][_me] != null) {
    contents[_CE] = de_StringList(__getArrayIfSingleItem(output[_CE][_me]), context);
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
  if (String(output.DBClusterOptionGroupMemberships).trim() === "") {
    contents[_DBCOGM] = [];
  } else if (output[_DBCOGM] != null && output[_DBCOGM][_DBCOG] != null) {
    contents[_DBCOGM] = de_DBClusterOptionGroupMemberships(__getArrayIfSingleItem(output[_DBCOGM][_DBCOG]), context);
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
  if (String(output.StatusInfos).trim() === "") {
    contents[_SIt] = [];
  } else if (output[_SIt] != null && output[_SIt][_DBCSIl] != null) {
    contents[_SIt] = de_DBClusterStatusInfoList(__getArrayIfSingleItem(output[_SIt][_DBCSIl]), context);
  }
  if (String(output.DBClusterMembers).trim() === "") {
    contents[_DBCM] = [];
  } else if (output[_DBCM] != null && output[_DBCM][_DBCMl] != null) {
    contents[_DBCM] = de_DBClusterMemberList(__getArrayIfSingleItem(output[_DBCM][_DBCMl]), context);
  }
  if (String(output.VpcSecurityGroups).trim() === "") {
    contents[_VSG] = [];
  } else if (output[_VSG] != null && output[_VSG][_VSGMp] != null) {
    contents[_VSG] = de_VpcSecurityGroupMembershipList(__getArrayIfSingleItem(output[_VSG][_VSGMp]), context);
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
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (output[_CGI] != null) {
    contents[_CGI] = __expectString(output[_CGI]);
  }
  if (output[_CCT] != null) {
    contents[_CCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCT]));
  }
  if (output[_EBT] != null) {
    contents[_EBT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EBT]));
  }
  if (output[_BW] != null) {
    contents[_BW] = __strictParseLong(output[_BW]) as number;
  }
  if (output[_BCCR] != null) {
    contents[_BCCR] = __strictParseLong(output[_BCCR]) as number;
  }
  if (String(output.EnabledCloudwatchLogsExports).trim() === "") {
    contents[_ECLEn] = [];
  } else if (output[_ECLEn] != null && output[_ECLEn][_me] != null) {
    contents[_ECLEn] = de_LogTypeList(__getArrayIfSingleItem(output[_ECLEn][_me]), context);
  }
  if (output[_C] != null) {
    contents[_C] = __strictParseInt32(output[_C]) as number;
  }
  if (output[_PMV] != null) {
    contents[_PMV] = de_ClusterPendingModifiedValues(output[_PMV], context);
  }
  if (output[_EMn] != null) {
    contents[_EMn] = __expectString(output[_EMn]);
  }
  if (output[_SCI] != null) {
    contents[_SCI] = de_ScalingConfigurationInfo(output[_SCI], context);
  }
  if (output[_RCCC] != null) {
    contents[_RCCC] = de_RdsCustomClusterConfiguration(output[_RCCC], context);
  }
  if (output[_DBCIC] != null) {
    contents[_DBCIC] = __expectString(output[_DBCIC]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_I] != null) {
    contents[_I] = __strictParseInt32(output[_I]) as number;
  }
  if (output[_STto] != null) {
    contents[_STto] = __strictParseInt32(output[_STto]) as number;
  }
  if (output[_IOONAMT] != null) {
    contents[_IOONAMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_IOONAMT]));
  }
  if (output[_PA] != null) {
    contents[_PA] = __parseBoolean(output[_PA]);
  }
  if (output[_AMVU] != null) {
    contents[_AMVU] = __parseBoolean(output[_AMVU]);
  }
  if (output[_DP] != null) {
    contents[_DP] = __parseBoolean(output[_DP]);
  }
  if (output[_HEE] != null) {
    contents[_HEE] = __parseBoolean(output[_HEE]);
  }
  if (output[_ASM] != null) {
    contents[_ASM] = __expectString(output[_ASM]);
  }
  if (output[_ASS] != null) {
    contents[_ASS] = __expectString(output[_ASS]);
  }
  if (output[_ASKKI] != null) {
    contents[_ASKKI] = __expectString(output[_ASKKI]);
  }
  if (output[_ASKSN] != null) {
    contents[_ASKSN] = __expectString(output[_ASKSN]);
  }
  if (output[_CTTS] != null) {
    contents[_CTTS] = __parseBoolean(output[_CTTS]);
  }
  if (output[_CAC] != null) {
    contents[_CAC] = __parseBoolean(output[_CAC]);
  }
  if (String(output.DomainMemberships).trim() === "") {
    contents[_DM] = [];
  } else if (output[_DM] != null && output[_DM][_DMo] != null) {
    contents[_DM] = de_DomainMembershipList(__getArrayIfSingleItem(output[_DM][_DMo]), context);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  if (output[_GCI] != null) {
    contents[_GCI] = __expectString(output[_GCI]);
  }
  if (output[_GWFS] != null) {
    contents[_GWFS] = __expectString(output[_GWFS]);
  }
  if (output[_GWFR] != null) {
    contents[_GWFR] = __parseBoolean(output[_GWFR]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_ART] != null) {
    contents[_ART] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ART]));
  }
  if (output[_SVSC] != null) {
    contents[_SVSC] = de_ServerlessV2ScalingConfigurationInfo(output[_SVSC], context);
  }
  if (output[_SVPV] != null) {
    contents[_SVPV] = __expectString(output[_SVPV]);
  }
  if (output[_MIo] != null) {
    contents[_MIo] = __strictParseInt32(output[_MIo]) as number;
  }
  if (output[_MRA] != null) {
    contents[_MRA] = __expectString(output[_MRA]);
  }
  if (output[_DIM] != null) {
    contents[_DIM] = __expectString(output[_DIM]);
  }
  if (output[_PIE] != null) {
    contents[_PIE] = __parseBoolean(output[_PIE]);
  }
  if (output[_PIKMSKI] != null) {
    contents[_PIKMSKI] = __expectString(output[_PIKMSKI]);
  }
  if (output[_PIRP] != null) {
    contents[_PIRP] = __strictParseInt32(output[_PIRP]) as number;
  }
  if (output[_DBSI] != null) {
    contents[_DBSI] = __expectString(output[_DBSI]);
  }
  if (output[_MUS] != null) {
    contents[_MUS] = de_MasterUserSecret(output[_MUS], context);
  }
  if (output[_LWFS] != null) {
    contents[_LWFS] = __expectString(output[_LWFS]);
  }
  if (output[_ABRPA] != null) {
    contents[_ABRPA] = __expectString(output[_ABRPA]);
  }
  if (output[_LD] != null) {
    contents[_LD] = de_LimitlessDatabase(output[_LD], context);
  }
  if (output[_CST] != null) {
    contents[_CST] = __expectString(output[_CST]);
  }
  if (output[_CD] != null) {
    contents[_CD] = de_CertificateDetails(output[_CD], context);
  }
  if (output[_ELS] != null) {
    contents[_ELS] = __expectString(output[_ELS]);
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
 * deserializeAws_queryDBClusterAutomatedBackup
 */
const de_DBClusterAutomatedBackup = (output: any, context: __SerdeContext): DBClusterAutomatedBackup => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_DBCABA] != null) {
    contents[_DBCABA] = __expectString(output[_DBCABA]);
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_RW] != null) {
    contents[_RW] = de_RestoreWindow(output[_RW], context);
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_DCRI] != null) {
    contents[_DCRI] = __expectString(output[_DCRI]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectString(output[_LM]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (output[_CCT] != null) {
    contents[_CCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCT]));
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_DBCA] != null) {
    contents[_DBCA] = __expectString(output[_DBCA]);
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (output[_EMn] != null) {
    contents[_EMn] = __expectString(output[_EMn]);
  }
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_AZv] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_AZv]), context);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_I] != null) {
    contents[_I] = __strictParseInt32(output[_I]) as number;
  }
  if (output[_STto] != null) {
    contents[_STto] = __strictParseInt32(output[_STto]) as number;
  }
  if (output[_ABRPA] != null) {
    contents[_ABRPA] = __expectString(output[_ABRPA]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterAutomatedBackupList
 */
const de_DBClusterAutomatedBackupList = (output: any, context: __SerdeContext): DBClusterAutomatedBackup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterAutomatedBackup(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterAutomatedBackupMessage
 */
const de_DBClusterAutomatedBackupMessage = (output: any, context: __SerdeContext): DBClusterAutomatedBackupMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBClusterAutomatedBackups).trim() === "") {
    contents[_DBCAB] = [];
  } else if (output[_DBCAB] != null && output[_DBCAB][_DBCABl] != null) {
    contents[_DBCAB] = de_DBClusterAutomatedBackupList(__getArrayIfSingleItem(output[_DBCAB][_DBCABl]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterAutomatedBackupNotFoundFault
 */
const de_DBClusterAutomatedBackupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterAutomatedBackupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterAutomatedBackupQuotaExceededFault
 */
const de_DBClusterAutomatedBackupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBClusterAutomatedBackupQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterBacktrack
 */
const de_DBClusterBacktrack = (output: any, context: __SerdeContext): DBClusterBacktrack => {
  const contents: any = {};
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_BI] != null) {
    contents[_BI] = __expectString(output[_BI]);
  }
  if (output[_BT] != null) {
    contents[_BT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_BT]));
  }
  if (output[_BF] != null) {
    contents[_BF] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_BF]));
  }
  if (output[_BRCT] != null) {
    contents[_BRCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_BRCT]));
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterBacktrackList
 */
const de_DBClusterBacktrackList = (output: any, context: __SerdeContext): DBClusterBacktrack[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterBacktrack(entry, context);
    });
};

/**
 * deserializeAws_queryDBClusterBacktrackMessage
 */
const de_DBClusterBacktrackMessage = (output: any, context: __SerdeContext): DBClusterBacktrackMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBClusterBacktracks).trim() === "") {
    contents[_DBCB] = [];
  } else if (output[_DBCB] != null && output[_DBCB][_DBCBl] != null) {
    contents[_DBCB] = de_DBClusterBacktrackList(__getArrayIfSingleItem(output[_DBCB][_DBCBl]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterBacktrackNotFoundFault
 */
const de_DBClusterBacktrackNotFoundFault = (output: any, context: __SerdeContext): DBClusterBacktrackNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterCapacityInfo
 */
const de_DBClusterCapacityInfo = (output: any, context: __SerdeContext): DBClusterCapacityInfo => {
  const contents: any = {};
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_PC] != null) {
    contents[_PC] = __strictParseInt32(output[_PC]) as number;
  }
  if (output[_CC] != null) {
    contents[_CC] = __strictParseInt32(output[_CC]) as number;
  }
  if (output[_SBT] != null) {
    contents[_SBT] = __strictParseInt32(output[_SBT]) as number;
  }
  if (output[_TAi] != null) {
    contents[_TAi] = __expectString(output[_TAi]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterEndpoint
 */
const de_DBClusterEndpoint = (output: any, context: __SerdeContext): DBClusterEndpoint => {
  const contents: any = {};
  if (output[_DBCEI] != null) {
    contents[_DBCEI] = __expectString(output[_DBCEI]);
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_DBCERI] != null) {
    contents[_DBCERI] = __expectString(output[_DBCERI]);
  }
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectString(output[_ET]);
  }
  if (output[_CETu] != null) {
    contents[_CETu] = __expectString(output[_CETu]);
  }
  if (String(output.StaticMembers).trim() === "") {
    contents[_SM] = [];
  } else if (output[_SM] != null && output[_SM][_me] != null) {
    contents[_SM] = de_StringList(__getArrayIfSingleItem(output[_SM][_me]), context);
  }
  if (String(output.ExcludedMembers).trim() === "") {
    contents[_EM] = [];
  } else if (output[_EM] != null && output[_EM][_me] != null) {
    contents[_EM] = de_StringList(__getArrayIfSingleItem(output[_EM][_me]), context);
  }
  if (output[_DBCEA] != null) {
    contents[_DBCEA] = __expectString(output[_DBCEA]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBClusterEndpoints).trim() === "") {
    contents[_DBCE] = [];
  } else if (output[_DBCE] != null && output[_DBCE][_DBCEL] != null) {
    contents[_DBCE] = de_DBClusterEndpointList(__getArrayIfSingleItem(output[_DBCE][_DBCEL]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterEndpointNotFoundFault
 */
const de_DBClusterEndpointNotFoundFault = (output: any, context: __SerdeContext): DBClusterEndpointNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
  if (output[_DBCOGN] != null) {
    contents[_DBCOGN] = __expectString(output[_DBCOGN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
  if (output[_FN] != null) {
    contents[_FN] = __expectString(output[_FN]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRoleAlreadyExistsFault
 */
const de_DBClusterRoleAlreadyExistsFault = (output: any, context: __SerdeContext): DBClusterRoleAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRoleNotFoundFault
 */
const de_DBClusterRoleNotFoundFault = (output: any, context: __SerdeContext): DBClusterRoleNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterRoleQuotaExceededFault
 */
const de_DBClusterRoleQuotaExceededFault = (output: any, context: __SerdeContext): DBClusterRoleQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_EMn] != null) {
    contents[_EMn] = __expectString(output[_EMn]);
  }
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
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
  if (output[_LM] != null) {
    contents[_LM] = __expectString(output[_LM]);
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
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_STto] != null) {
    contents[_STto] = __strictParseInt32(output[_STto]) as number;
  }
  if (output[_DCRI] != null) {
    contents[_DCRI] = __expectString(output[_DCRI]);
  }
  if (output[_DBSI] != null) {
    contents[_DBSI] = __expectString(output[_DBSI]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
 * deserializeAws_queryDBClusterStatusInfo
 */
const de_DBClusterStatusInfo = (output: any, context: __SerdeContext): DBClusterStatusInfo => {
  const contents: any = {};
  if (output[_STtat] != null) {
    contents[_STtat] = __expectString(output[_STtat]);
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
 * deserializeAws_queryDBClusterStatusInfoList
 */
const de_DBClusterStatusInfoList = (output: any, context: __SerdeContext): DBClusterStatusInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBClusterStatusInfo(entry, context);
    });
};

/**
 * deserializeAws_queryDBEngineVersion
 */
const de_DBEngineVersion = (output: any, context: __SerdeContext): DBEngineVersion => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_DIFSBN] != null) {
    contents[_DIFSBN] = __expectString(output[_DIFSBN]);
  }
  if (output[_DIFSP] != null) {
    contents[_DIFSP] = __expectString(output[_DIFSP]);
  }
  if (output[_CDBEVM] != null) {
    contents[_CDBEVM] = __expectString(output[_CDBEVM]);
  }
  if (output[_DBPGF] != null) {
    contents[_DBPGF] = __expectString(output[_DBPGF]);
  }
  if (output[_DBED] != null) {
    contents[_DBED] = __expectString(output[_DBED]);
  }
  if (output[_DBEVA] != null) {
    contents[_DBEVA] = __expectString(output[_DBEVA]);
  }
  if (output[_DBEVD] != null) {
    contents[_DBEVD] = __expectString(output[_DBEVD]);
  }
  if (output[_DCS] != null) {
    contents[_DCS] = de_CharacterSet(output[_DCS], context);
  }
  if (output[_Im] != null) {
    contents[_Im] = de_CustomDBEngineVersionAMI(output[_Im], context);
  }
  if (output[_DBEMT] != null) {
    contents[_DBEMT] = __expectString(output[_DBEMT]);
  }
  if (output[_KMSKI] != null) {
    contents[_KMSKI] = __expectString(output[_KMSKI]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (String(output.SupportedCharacterSets).trim() === "") {
    contents[_SCS] = [];
  } else if (output[_SCS] != null && output[_SCS][_CS] != null) {
    contents[_SCS] = de_SupportedCharacterSetsList(__getArrayIfSingleItem(output[_SCS][_CS]), context);
  }
  if (String(output.SupportedNcharCharacterSets).trim() === "") {
    contents[_SNCS] = [];
  } else if (output[_SNCS] != null && output[_SNCS][_CS] != null) {
    contents[_SNCS] = de_SupportedCharacterSetsList(__getArrayIfSingleItem(output[_SNCS][_CS]), context);
  }
  if (String(output.ValidUpgradeTarget).trim() === "") {
    contents[_VUT] = [];
  } else if (output[_VUT] != null && output[_VUT][_UT] != null) {
    contents[_VUT] = de_ValidUpgradeTargetList(__getArrayIfSingleItem(output[_VUT][_UT]), context);
  }
  if (String(output.SupportedTimezones).trim() === "") {
    contents[_STu] = [];
  } else if (output[_STu] != null && output[_STu][_Ti] != null) {
    contents[_STu] = de_SupportedTimezonesList(__getArrayIfSingleItem(output[_STu][_Ti]), context);
  }
  if (String(output.ExportableLogTypes).trim() === "") {
    contents[_ELTx] = [];
  } else if (output[_ELTx] != null && output[_ELTx][_me] != null) {
    contents[_ELTx] = de_LogTypeList(__getArrayIfSingleItem(output[_ELTx][_me]), context);
  }
  if (output[_SLETCL] != null) {
    contents[_SLETCL] = __parseBoolean(output[_SLETCL]);
  }
  if (output[_SRRu] != null) {
    contents[_SRRu] = __parseBoolean(output[_SRRu]);
  }
  if (String(output.SupportedEngineModes).trim() === "") {
    contents[_SEM] = [];
  } else if (output[_SEM] != null && output[_SEM][_me] != null) {
    contents[_SEM] = de_EngineModeList(__getArrayIfSingleItem(output[_SEM][_me]), context);
  }
  if (String(output.SupportedFeatureNames).trim() === "") {
    contents[_SFN] = [];
  } else if (output[_SFN] != null && output[_SFN][_me] != null) {
    contents[_SFN] = de_FeatureNameList(__getArrayIfSingleItem(output[_SFN][_me]), context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SPQ] != null) {
    contents[_SPQ] = __parseBoolean(output[_SPQ]);
  }
  if (output[_SGD] != null) {
    contents[_SGD] = __parseBoolean(output[_SGD]);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  if (output[_SB] != null) {
    contents[_SB] = __parseBoolean(output[_SB]);
  }
  if (output[_SLD] != null) {
    contents[_SLD] = __parseBoolean(output[_SLD]);
  }
  if (output[_SCRWR] != null) {
    contents[_SCRWR] = __parseBoolean(output[_SCRWR]);
  }
  if (String(output.SupportedCACertificateIdentifiers).trim() === "") {
    contents[_SCACI] = [];
  } else if (output[_SCACI] != null && output[_SCACI][_me] != null) {
    contents[_SCACI] = de_CACertificateIdentifiersList(__getArrayIfSingleItem(output[_SCACI][_me]), context);
  }
  if (output[_SLWF] != null) {
    contents[_SLWF] = __parseBoolean(output[_SLWF]);
  }
  if (output[_SIup] != null) {
    contents[_SIup] = __parseBoolean(output[_SIup]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_DBN] != null) {
    contents[_DBN] = __expectString(output[_DBN]);
  }
  if (output[_End] != null) {
    contents[_End] = de_Endpoint(output[_End], context);
  }
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
  }
  if (output[_ICTn] != null) {
    contents[_ICTn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ICTn]));
  }
  if (output[_PBW] != null) {
    contents[_PBW] = __expectString(output[_PBW]);
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (String(output.DBSecurityGroups).trim() === "") {
    contents[_DBSG] = [];
  } else if (output[_DBSG] != null && output[_DBSG][_DBSGe] != null) {
    contents[_DBSG] = de_DBSecurityGroupMembershipList(__getArrayIfSingleItem(output[_DBSG][_DBSGe]), context);
  }
  if (String(output.VpcSecurityGroups).trim() === "") {
    contents[_VSG] = [];
  } else if (output[_VSG] != null && output[_VSG][_VSGMp] != null) {
    contents[_VSG] = de_VpcSecurityGroupMembershipList(__getArrayIfSingleItem(output[_VSG][_VSGMp]), context);
  }
  if (String(output.DBParameterGroups).trim() === "") {
    contents[_DBPGa] = [];
  } else if (output[_DBPGa] != null && output[_DBPGa][_DBPG] != null) {
    contents[_DBPGa] = de_DBParameterGroupStatusList(__getArrayIfSingleItem(output[_DBPGa][_DBPG]), context);
  }
  if (output[_AZv] != null) {
    contents[_AZv] = __expectString(output[_AZv]);
  }
  if (output[_DBSGu] != null) {
    contents[_DBSGu] = de_DBSubnetGroup(output[_DBSGu], context);
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
  if (output[_MAZ] != null) {
    contents[_MAZ] = __parseBoolean(output[_MAZ]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_AMVU] != null) {
    contents[_AMVU] = __parseBoolean(output[_AMVU]);
  }
  if (output[_RRSDBII] != null) {
    contents[_RRSDBII] = __expectString(output[_RRSDBII]);
  }
  if (String(output.ReadReplicaDBInstanceIdentifiers).trim() === "") {
    contents[_RRDBII] = [];
  } else if (output[_RRDBII] != null && output[_RRDBII][_RRDBIIe] != null) {
    contents[_RRDBII] = de_ReadReplicaDBInstanceIdentifierList(
      __getArrayIfSingleItem(output[_RRDBII][_RRDBIIe]),
      context
    );
  }
  if (String(output.ReadReplicaDBClusterIdentifiers).trim() === "") {
    contents[_RRDBCI] = [];
  } else if (output[_RRDBCI] != null && output[_RRDBCI][_RRDBCIe] != null) {
    contents[_RRDBCI] = de_ReadReplicaDBClusterIdentifierList(
      __getArrayIfSingleItem(output[_RRDBCI][_RRDBCIe]),
      context
    );
  }
  if (output[_RM] != null) {
    contents[_RM] = __expectString(output[_RM]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectString(output[_LM]);
  }
  if (output[_I] != null) {
    contents[_I] = __strictParseInt32(output[_I]) as number;
  }
  if (output[_STto] != null) {
    contents[_STto] = __strictParseInt32(output[_STto]) as number;
  }
  if (String(output.OptionGroupMemberships).trim() === "") {
    contents[_OGM] = [];
  } else if (output[_OGM] != null && output[_OGM][_OGMp] != null) {
    contents[_OGM] = de_OptionGroupMembershipList(__getArrayIfSingleItem(output[_OGM][_OGMp]), context);
  }
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_NCSN] != null) {
    contents[_NCSN] = __expectString(output[_NCSN]);
  }
  if (output[_SAZe] != null) {
    contents[_SAZe] = __expectString(output[_SAZe]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __parseBoolean(output[_PA]);
  }
  if (String(output.StatusInfos).trim() === "") {
    contents[_SIt] = [];
  } else if (output[_SIt] != null && output[_SIt][_DBISI] != null) {
    contents[_SIt] = de_DBInstanceStatusInfoList(__getArrayIfSingleItem(output[_SIt][_DBISI]), context);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_TCA] != null) {
    contents[_TCA] = __expectString(output[_TCA]);
  }
  if (output[_DIP] != null) {
    contents[_DIP] = __strictParseInt32(output[_DIP]) as number;
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
  if (String(output.DomainMemberships).trim() === "") {
    contents[_DM] = [];
  } else if (output[_DM] != null && output[_DM][_DMo] != null) {
    contents[_DM] = de_DomainMembershipList(__getArrayIfSingleItem(output[_DM][_DMo]), context);
  }
  if (output[_CTTS] != null) {
    contents[_CTTS] = __parseBoolean(output[_CTTS]);
  }
  if (output[_MIo] != null) {
    contents[_MIo] = __strictParseInt32(output[_MIo]) as number;
  }
  if (output[_EMRA] != null) {
    contents[_EMRA] = __expectString(output[_EMRA]);
  }
  if (output[_MRA] != null) {
    contents[_MRA] = __expectString(output[_MRA]);
  }
  if (output[_PT] != null) {
    contents[_PT] = __strictParseInt32(output[_PT]) as number;
  }
  if (output[_DBIA] != null) {
    contents[_DBIA] = __expectString(output[_DBIA]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectString(output[_Ti]);
  }
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (output[_DIM] != null) {
    contents[_DIM] = __expectString(output[_DIM]);
  }
  if (output[_PIE] != null) {
    contents[_PIE] = __parseBoolean(output[_PIE]);
  }
  if (output[_PIKMSKI] != null) {
    contents[_PIKMSKI] = __expectString(output[_PIKMSKI]);
  }
  if (output[_PIRP] != null) {
    contents[_PIRP] = __strictParseInt32(output[_PIRP]) as number;
  }
  if (String(output.EnabledCloudwatchLogsExports).trim() === "") {
    contents[_ECLEn] = [];
  } else if (output[_ECLEn] != null && output[_ECLEn][_me] != null) {
    contents[_ECLEn] = de_LogTypeList(__getArrayIfSingleItem(output[_ECLEn][_me]), context);
  }
  if (String(output.ProcessorFeatures).trim() === "") {
    contents[_PF] = [];
  } else if (output[_PF] != null && output[_PF][_PFr] != null) {
    contents[_PF] = de_ProcessorFeatureList(__getArrayIfSingleItem(output[_PF][_PFr]), context);
  }
  if (output[_DP] != null) {
    contents[_DP] = __parseBoolean(output[_DP]);
  }
  if (String(output.AssociatedRoles).trim() === "") {
    contents[_AR] = [];
  } else if (output[_AR] != null && output[_AR][_DBIR] != null) {
    contents[_AR] = de_DBInstanceRoles(__getArrayIfSingleItem(output[_AR][_DBIR]), context);
  }
  if (output[_LE] != null) {
    contents[_LE] = de_Endpoint(output[_LE], context);
  }
  if (output[_MASa] != null) {
    contents[_MASa] = __strictParseInt32(output[_MASa]) as number;
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  if (output[_AM] != null) {
    contents[_AM] = __expectString(output[_AM]);
  }
  if (output[_RFAMT] != null) {
    contents[_RFAMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RFAMT]));
  }
  if (output[_COIE] != null) {
    contents[_COIE] = __parseBoolean(output[_COIE]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_ASS] != null) {
    contents[_ASS] = __expectString(output[_ASS]);
  }
  if (output[_ASKKI] != null) {
    contents[_ASKKI] = __expectString(output[_ASKKI]);
  }
  if (output[_ASKSN] != null) {
    contents[_ASKSN] = __expectString(output[_ASKSN]);
  }
  if (output[_ASM] != null) {
    contents[_ASM] = __expectString(output[_ASM]);
  }
  if (output[_ASENAFI] != null) {
    contents[_ASENAFI] = __parseBoolean(output[_ASENAFI]);
  }
  if (output[_ABRPA] != null) {
    contents[_ABRPA] = __expectString(output[_ABRPA]);
  }
  if (String(output.DBInstanceAutomatedBackupsReplications).trim() === "") {
    contents[_DBIABR] = [];
  } else if (output[_DBIABR] != null && output[_DBIABR][_DBIABRn] != null) {
    contents[_DBIABR] = de_DBInstanceAutomatedBackupsReplicationList(
      __getArrayIfSingleItem(output[_DBIABR][_DBIABRn]),
      context
    );
  }
  if (output[_BTa] != null) {
    contents[_BTa] = __expectString(output[_BTa]);
  }
  if (output[_ART] != null) {
    contents[_ART] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ART]));
  }
  if (output[_CIIP] != null) {
    contents[_CIIP] = __expectString(output[_CIIP]);
  }
  if (output[_ASPS] != null) {
    contents[_ASPS] = __expectString(output[_ASPS]);
  }
  if (output[_CD] != null) {
    contents[_CD] = de_CertificateDetails(output[_CD], context);
  }
  if (output[_DBSI] != null) {
    contents[_DBSI] = __expectString(output[_DBSI]);
  }
  if (output[_MUS] != null) {
    contents[_MUS] = de_MasterUserSecret(output[_MUS], context);
  }
  if (output[_RRSDBCI] != null) {
    contents[_RRSDBCI] = __expectString(output[_RRSDBCI]);
  }
  if (output[_PP] != null) {
    contents[_PP] = __expectString(output[_PP]);
  }
  if (output[_MT] != null) {
    contents[_MT] = __parseBoolean(output[_MT]);
  }
  if (output[_DLV] != null) {
    contents[_DLV] = __parseBoolean(output[_DLV]);
  }
  if (output[_ISCUA] != null) {
    contents[_ISCUA] = __parseBoolean(output[_ISCUA]);
  }
  if (output[_ELS] != null) {
    contents[_ELS] = __expectString(output[_ELS]);
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
 * deserializeAws_queryDBInstanceAutomatedBackup
 */
const de_DBInstanceAutomatedBackup = (output: any, context: __SerdeContext): DBInstanceAutomatedBackup => {
  const contents: any = {};
  if (output[_DBIA] != null) {
    contents[_DBIA] = __expectString(output[_DBIA]);
  }
  if (output[_DRI] != null) {
    contents[_DRI] = __expectString(output[_DRI]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_RW] != null) {
    contents[_RW] = de_RestoreWindow(output[_RW], context);
  }
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_AZv] != null) {
    contents[_AZv] = __expectString(output[_AZv]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_ICTn] != null) {
    contents[_ICTn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ICTn]));
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
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
  if (output[_STto] != null) {
    contents[_STto] = __strictParseInt32(output[_STto]) as number;
  }
  if (output[_OGN] != null) {
    contents[_OGN] = __expectString(output[_OGN]);
  }
  if (output[_TCA] != null) {
    contents[_TCA] = __expectString(output[_TCA]);
  }
  if (output[_Enc] != null) {
    contents[_Enc] = __parseBoolean(output[_Enc]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectString(output[_Ti]);
  }
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (output[_BRP] != null) {
    contents[_BRP] = __strictParseInt32(output[_BRP]) as number;
  }
  if (output[_DBIABA] != null) {
    contents[_DBIABA] = __expectString(output[_DBIABA]);
  }
  if (String(output.DBInstanceAutomatedBackupsReplications).trim() === "") {
    contents[_DBIABR] = [];
  } else if (output[_DBIABR] != null && output[_DBIABR][_DBIABRn] != null) {
    contents[_DBIABR] = de_DBInstanceAutomatedBackupsReplicationList(
      __getArrayIfSingleItem(output[_DBIABR][_DBIABRn]),
      context
    );
  }
  if (output[_BTa] != null) {
    contents[_BTa] = __expectString(output[_BTa]);
  }
  if (output[_MT] != null) {
    contents[_MT] = __parseBoolean(output[_MT]);
  }
  if (output[_ABRPA] != null) {
    contents[_ABRPA] = __expectString(output[_ABRPA]);
  }
  if (output[_DLV] != null) {
    contents[_DLV] = __parseBoolean(output[_DLV]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceAutomatedBackupList
 */
const de_DBInstanceAutomatedBackupList = (output: any, context: __SerdeContext): DBInstanceAutomatedBackup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBInstanceAutomatedBackup(entry, context);
    });
};

/**
 * deserializeAws_queryDBInstanceAutomatedBackupMessage
 */
const de_DBInstanceAutomatedBackupMessage = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBInstanceAutomatedBackups).trim() === "") {
    contents[_DBIAB] = [];
  } else if (output[_DBIAB] != null && output[_DBIAB][_DBIABn] != null) {
    contents[_DBIAB] = de_DBInstanceAutomatedBackupList(__getArrayIfSingleItem(output[_DBIAB][_DBIABn]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceAutomatedBackupNotFoundFault
 */
const de_DBInstanceAutomatedBackupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFault
 */
const de_DBInstanceAutomatedBackupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceAutomatedBackupsReplication
 */
const de_DBInstanceAutomatedBackupsReplication = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupsReplication => {
  const contents: any = {};
  if (output[_DBIABA] != null) {
    contents[_DBIABA] = __expectString(output[_DBIABA]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceAutomatedBackupsReplicationList
 */
const de_DBInstanceAutomatedBackupsReplicationList = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupsReplication[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBInstanceAutomatedBackupsReplication(entry, context);
    });
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
 * deserializeAws_queryDBInstanceNotReadyFault
 */
const de_DBInstanceNotReadyFault = (output: any, context: __SerdeContext): DBInstanceNotReadyFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceRole
 */
const de_DBInstanceRole = (output: any, context: __SerdeContext): DBInstanceRole => {
  const contents: any = {};
  if (output[_RA] != null) {
    contents[_RA] = __expectString(output[_RA]);
  }
  if (output[_FN] != null) {
    contents[_FN] = __expectString(output[_FN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceRoleAlreadyExistsFault
 */
const de_DBInstanceRoleAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBInstanceRoleAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceRoleNotFoundFault
 */
const de_DBInstanceRoleNotFoundFault = (output: any, context: __SerdeContext): DBInstanceRoleNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceRoleQuotaExceededFault
 */
const de_DBInstanceRoleQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBInstanceRoleQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceRoles
 */
const de_DBInstanceRoles = (output: any, context: __SerdeContext): DBInstanceRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBInstanceRole(entry, context);
    });
};

/**
 * deserializeAws_queryDBInstanceStatusInfo
 */
const de_DBInstanceStatusInfo = (output: any, context: __SerdeContext): DBInstanceStatusInfo => {
  const contents: any = {};
  if (output[_STtat] != null) {
    contents[_STtat] = __expectString(output[_STtat]);
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
 * deserializeAws_queryDBLogFileNotFoundFault
 */
const de_DBLogFileNotFoundFault = (output: any, context: __SerdeContext): DBLogFileNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBMajorEngineVersion
 */
const de_DBMajorEngineVersion = (output: any, context: __SerdeContext): DBMajorEngineVersion => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
  }
  if (String(output.SupportedEngineLifecycles).trim() === "") {
    contents[_SEL] = [];
  } else if (output[_SEL] != null && output[_SEL][_SELu] != null) {
    contents[_SEL] = de_SupportedEngineLifecycleList(__getArrayIfSingleItem(output[_SEL][_SELu]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBMajorEngineVersionsList
 */
const de_DBMajorEngineVersionsList = (output: any, context: __SerdeContext): DBMajorEngineVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBMajorEngineVersion(entry, context);
    });
};

/**
 * deserializeAws_queryDBParameterGroup
 */
const de_DBParameterGroup = (output: any, context: __SerdeContext): DBParameterGroup => {
  const contents: any = {};
  if (output[_DBPGN] != null) {
    contents[_DBPGN] = __expectString(output[_DBPGN]);
  }
  if (output[_DBPGF] != null) {
    contents[_DBPGF] = __expectString(output[_DBPGF]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_DBPGA] != null) {
    contents[_DBPGA] = __expectString(output[_DBPGA]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupDetails
 */
const de_DBParameterGroupDetails = (output: any, context: __SerdeContext): DBParameterGroupDetails => {
  const contents: any = {};
  if (String(output.Parameters).trim() === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
  if (output[_DBPGN] != null) {
    contents[_DBPGN] = __expectString(output[_DBPGN]);
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
 * deserializeAws_queryDBParameterGroupsMessage
 */
const de_DBParameterGroupsMessage = (output: any, context: __SerdeContext): DBParameterGroupsMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBParameterGroups).trim() === "") {
    contents[_DBPGa] = [];
  } else if (output[_DBPGa] != null && output[_DBPGa][_DBPG] != null) {
    contents[_DBPGa] = de_DBParameterGroupList(__getArrayIfSingleItem(output[_DBPGa][_DBPG]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBParameterGroupStatus
 */
const de_DBParameterGroupStatus = (output: any, context: __SerdeContext): DBParameterGroupStatus => {
  const contents: any = {};
  if (output[_DBPGN] != null) {
    contents[_DBPGN] = __expectString(output[_DBPGN]);
  }
  if (output[_PAS] != null) {
    contents[_PAS] = __expectString(output[_PAS]);
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
 * deserializeAws_queryDBProxy
 */
const de_DBProxy = (output: any, context: __SerdeContext): DBProxy => {
  const contents: any = {};
  if (output[_DBPN] != null) {
    contents[_DBPN] = __expectString(output[_DBPN]);
  }
  if (output[_DBPA] != null) {
    contents[_DBPA] = __expectString(output[_DBPA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_EF] != null) {
    contents[_EF] = __expectString(output[_EF]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (String(output.VpcSecurityGroupIds).trim() === "") {
    contents[_VSGI] = [];
  } else if (output[_VSGI] != null && output[_VSGI][_me] != null) {
    contents[_VSGI] = de_StringList(__getArrayIfSingleItem(output[_VSGI][_me]), context);
  }
  if (String(output.VpcSubnetIds).trim() === "") {
    contents[_VSI] = [];
  } else if (output[_VSI] != null && output[_VSI][_me] != null) {
    contents[_VSI] = de_StringList(__getArrayIfSingleItem(output[_VSI][_me]), context);
  }
  if (output[_DAS] != null) {
    contents[_DAS] = __expectString(output[_DAS]);
  }
  if (String(output.Auth).trim() === "") {
    contents[_Au] = [];
  } else if (output[_Au] != null && output[_Au][_me] != null) {
    contents[_Au] = de_UserAuthConfigInfoList(__getArrayIfSingleItem(output[_Au][_me]), context);
  }
  if (output[_RA] != null) {
    contents[_RA] = __expectString(output[_RA]);
  }
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_RTLS] != null) {
    contents[_RTLS] = __parseBoolean(output[_RTLS]);
  }
  if (output[_ICT] != null) {
    contents[_ICT] = __strictParseInt32(output[_ICT]) as number;
  }
  if (output[_DL] != null) {
    contents[_DL] = __parseBoolean(output[_DL]);
  }
  if (output[_CDr] != null) {
    contents[_CDr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CDr]));
  }
  if (output[_UD] != null) {
    contents[_UD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UD]));
  }
  if (output[_ENT] != null) {
    contents[_ENT] = __expectString(output[_ENT]);
  }
  if (output[_TCNT] != null) {
    contents[_TCNT] = __expectString(output[_TCNT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyAlreadyExistsFault
 */
const de_DBProxyAlreadyExistsFault = (output: any, context: __SerdeContext): DBProxyAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyEndpoint
 */
const de_DBProxyEndpoint = (output: any, context: __SerdeContext): DBProxyEndpoint => {
  const contents: any = {};
  if (output[_DBPEN] != null) {
    contents[_DBPEN] = __expectString(output[_DBPEN]);
  }
  if (output[_DBPEA] != null) {
    contents[_DBPEA] = __expectString(output[_DBPEA]);
  }
  if (output[_DBPN] != null) {
    contents[_DBPN] = __expectString(output[_DBPN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (String(output.VpcSecurityGroupIds).trim() === "") {
    contents[_VSGI] = [];
  } else if (output[_VSGI] != null && output[_VSGI][_me] != null) {
    contents[_VSGI] = de_StringList(__getArrayIfSingleItem(output[_VSGI][_me]), context);
  }
  if (String(output.VpcSubnetIds).trim() === "") {
    contents[_VSI] = [];
  } else if (output[_VSI] != null && output[_VSI][_me] != null) {
    contents[_VSI] = de_StringList(__getArrayIfSingleItem(output[_VSI][_me]), context);
  }
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_CDr] != null) {
    contents[_CDr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CDr]));
  }
  if (output[_TR] != null) {
    contents[_TR] = __expectString(output[_TR]);
  }
  if (output[_ID] != null) {
    contents[_ID] = __parseBoolean(output[_ID]);
  }
  if (output[_ENT] != null) {
    contents[_ENT] = __expectString(output[_ENT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyEndpointAlreadyExistsFault
 */
const de_DBProxyEndpointAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBProxyEndpointAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyEndpointList
 */
const de_DBProxyEndpointList = (output: any, context: __SerdeContext): DBProxyEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBProxyEndpoint(entry, context);
    });
};

/**
 * deserializeAws_queryDBProxyEndpointNotFoundFault
 */
const de_DBProxyEndpointNotFoundFault = (output: any, context: __SerdeContext): DBProxyEndpointNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyEndpointQuotaExceededFault
 */
const de_DBProxyEndpointQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBProxyEndpointQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyList
 */
const de_DBProxyList = (output: any, context: __SerdeContext): DBProxy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBProxy(entry, context);
    });
};

/**
 * deserializeAws_queryDBProxyNotFoundFault
 */
const de_DBProxyNotFoundFault = (output: any, context: __SerdeContext): DBProxyNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyQuotaExceededFault
 */
const de_DBProxyQuotaExceededFault = (output: any, context: __SerdeContext): DBProxyQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTarget
 */
const de_DBProxyTarget = (output: any, context: __SerdeContext): DBProxyTarget => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_TCI] != null) {
    contents[_TCI] = __expectString(output[_TCI]);
  }
  if (output[_RRId] != null) {
    contents[_RRId] = __expectString(output[_RRId]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_Ty] != null) {
    contents[_Ty] = __expectString(output[_Ty]);
  }
  if (output[_Ro] != null) {
    contents[_Ro] = __expectString(output[_Ro]);
  }
  if (output[_TH] != null) {
    contents[_TH] = de_TargetHealth(output[_TH], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTargetAlreadyRegisteredFault
 */
const de_DBProxyTargetAlreadyRegisteredFault = (
  output: any,
  context: __SerdeContext
): DBProxyTargetAlreadyRegisteredFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTargetGroup
 */
const de_DBProxyTargetGroup = (output: any, context: __SerdeContext): DBProxyTargetGroup => {
  const contents: any = {};
  if (output[_DBPN] != null) {
    contents[_DBPN] = __expectString(output[_DBPN]);
  }
  if (output[_TGN] != null) {
    contents[_TGN] = __expectString(output[_TGN]);
  }
  if (output[_TGA] != null) {
    contents[_TGA] = __expectString(output[_TGA]);
  }
  if (output[_ID] != null) {
    contents[_ID] = __parseBoolean(output[_ID]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CPC] != null) {
    contents[_CPC] = de_ConnectionPoolConfigurationInfo(output[_CPC], context);
  }
  if (output[_CDr] != null) {
    contents[_CDr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CDr]));
  }
  if (output[_UD] != null) {
    contents[_UD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UD]));
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTargetGroupNotFoundFault
 */
const de_DBProxyTargetGroupNotFoundFault = (output: any, context: __SerdeContext): DBProxyTargetGroupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTargetNotFoundFault
 */
const de_DBProxyTargetNotFoundFault = (output: any, context: __SerdeContext): DBProxyTargetNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBRecommendation
 */
const de_DBRecommendation = (output: any, context: __SerdeContext): DBRecommendation => {
  const contents: any = {};
  if (output[_RIe] != null) {
    contents[_RIe] = __expectString(output[_RIe]);
  }
  if (output[_TIy] != null) {
    contents[_TIy] = __expectString(output[_TIy]);
  }
  if (output[_Se] != null) {
    contents[_Se] = __expectString(output[_Se]);
  }
  if (output[_RAe] != null) {
    contents[_RAe] = __expectString(output[_RAe]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CTre] != null) {
    contents[_CTre] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTre]));
  }
  if (output[_UTp] != null) {
    contents[_UTp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UTp]));
  }
  if (output[_De] != null) {
    contents[_De] = __expectString(output[_De]);
  }
  if (output[_Re] != null) {
    contents[_Re] = __expectString(output[_Re]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_Rea] != null) {
    contents[_Rea] = __expectString(output[_Rea]);
  }
  if (String(output.RecommendedActions).trim() === "") {
    contents[_RAec] = [];
  } else if (output[_RAec] != null && output[_RAec][_me] != null) {
    contents[_RAec] = de_RecommendedActionList(__getArrayIfSingleItem(output[_RAec][_me]), context);
  }
  if (output[_Ca] != null) {
    contents[_Ca] = __expectString(output[_Ca]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_TDy] != null) {
    contents[_TDy] = __expectString(output[_TDy]);
  }
  if (output[_TRy] != null) {
    contents[_TRy] = __expectString(output[_TRy]);
  }
  if (output[_Imp] != null) {
    contents[_Imp] = __expectString(output[_Imp]);
  }
  if (output[_AId] != null) {
    contents[_AId] = __expectString(output[_AId]);
  }
  if (String(output.Links).trim() === "") {
    contents[_Li] = [];
  } else if (output[_Li] != null && output[_Li][_me] != null) {
    contents[_Li] = de_DocLinkList(__getArrayIfSingleItem(output[_Li][_me]), context);
  }
  if (output[_IDs] != null) {
    contents[_IDs] = de_IssueDetails(output[_IDs], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBRecommendationList
 */
const de_DBRecommendationList = (output: any, context: __SerdeContext): DBRecommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBRecommendation(entry, context);
    });
};

/**
 * deserializeAws_queryDBRecommendationMessage
 */
const de_DBRecommendationMessage = (output: any, context: __SerdeContext): DBRecommendationMessage => {
  const contents: any = {};
  if (output[_DBR] != null) {
    contents[_DBR] = de_DBRecommendation(output[_DBR], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBRecommendationsMessage
 */
const de_DBRecommendationsMessage = (output: any, context: __SerdeContext): DBRecommendationsMessage => {
  const contents: any = {};
  if (String(output.DBRecommendations).trim() === "") {
    contents[_DBRe] = [];
  } else if (output[_DBRe] != null && output[_DBRe][_me] != null) {
    contents[_DBRe] = de_DBRecommendationList(__getArrayIfSingleItem(output[_DBRe][_me]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroup
 */
const de_DBSecurityGroup = (output: any, context: __SerdeContext): DBSecurityGroup => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (output[_DBSGN] != null) {
    contents[_DBSGN] = __expectString(output[_DBSGN]);
  }
  if (output[_DBSGD] != null) {
    contents[_DBSGD] = __expectString(output[_DBSGD]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (String(output.EC2SecurityGroups).trim() === "") {
    contents[_ECSG] = [];
  } else if (output[_ECSG] != null && output[_ECSG][_ECSGe] != null) {
    contents[_ECSG] = de_EC2SecurityGroupList(__getArrayIfSingleItem(output[_ECSG][_ECSGe]), context);
  }
  if (String(output.IPRanges).trim() === "") {
    contents[_IPR] = [];
  } else if (output[_IPR] != null && output[_IPR][_IPRa] != null) {
    contents[_IPR] = de_IPRangeList(__getArrayIfSingleItem(output[_IPR][_IPRa]), context);
  }
  if (output[_DBSGA] != null) {
    contents[_DBSGA] = __expectString(output[_DBSGA]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroupAlreadyExistsFault
 */
const de_DBSecurityGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroupMembership
 */
const de_DBSecurityGroupMembership = (output: any, context: __SerdeContext): DBSecurityGroupMembership => {
  const contents: any = {};
  if (output[_DBSGN] != null) {
    contents[_DBSGN] = __expectString(output[_DBSGN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
 * deserializeAws_queryDBSecurityGroupMessage
 */
const de_DBSecurityGroupMessage = (output: any, context: __SerdeContext): DBSecurityGroupMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBSecurityGroups).trim() === "") {
    contents[_DBSG] = [];
  } else if (output[_DBSG] != null && output[_DBSG][_DBSGe] != null) {
    contents[_DBSG] = de_DBSecurityGroups(__getArrayIfSingleItem(output[_DBSG][_DBSGe]), context);
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
 * deserializeAws_queryDBSecurityGroupNotSupportedFault
 */
const de_DBSecurityGroupNotSupportedFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupNotSupportedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroupQuotaExceededFault
 */
const de_DBSecurityGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroups
 */
const de_DBSecurityGroups = (output: any, context: __SerdeContext): DBSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBSecurityGroup(entry, context);
    });
};

/**
 * deserializeAws_queryDBShardGroup
 */
const de_DBShardGroup = (output: any, context: __SerdeContext): DBShardGroup => {
  const contents: any = {};
  if (output[_DBSGRI] != null) {
    contents[_DBSGRI] = __expectString(output[_DBSGRI]);
  }
  if (output[_DBSGI] != null) {
    contents[_DBSGI] = __expectString(output[_DBSGI]);
  }
  if (output[_DBCI] != null) {
    contents[_DBCI] = __expectString(output[_DBCI]);
  }
  if (output[_MACU] != null) {
    contents[_MACU] = __strictParseFloat(output[_MACU]) as number;
  }
  if (output[_MACUi] != null) {
    contents[_MACUi] = __strictParseFloat(output[_MACUi]) as number;
  }
  if (output[_CR] != null) {
    contents[_CR] = __strictParseInt32(output[_CR]) as number;
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __parseBoolean(output[_PA]);
  }
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_DBSGAh] != null) {
    contents[_DBSGAh] = __expectString(output[_DBSGAh]);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBShardGroupAlreadyExistsFault
 */
const de_DBShardGroupAlreadyExistsFault = (output: any, context: __SerdeContext): DBShardGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBShardGroupNotFoundFault
 */
const de_DBShardGroupNotFoundFault = (output: any, context: __SerdeContext): DBShardGroupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBShardGroupsList
 */
const de_DBShardGroupsList = (output: any, context: __SerdeContext): DBShardGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBShardGroup(entry, context);
    });
};

/**
 * deserializeAws_queryDBSnapshot
 */
const de_DBSnapshot = (output: any, context: __SerdeContext): DBSnapshot => {
  const contents: any = {};
  if (output[_DBSIn] != null) {
    contents[_DBSIn] = __expectString(output[_DBSIn]);
  }
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_SCT] != null) {
    contents[_SCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SCT]));
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_AS] != null) {
    contents[_AS] = __strictParseInt32(output[_AS]) as number;
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_AZv] != null) {
    contents[_AZv] = __expectString(output[_AZv]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_ICTn] != null) {
    contents[_ICTn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ICTn]));
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectString(output[_LM]);
  }
  if (output[_STn] != null) {
    contents[_STn] = __expectString(output[_STn]);
  }
  if (output[_I] != null) {
    contents[_I] = __strictParseInt32(output[_I]) as number;
  }
  if (output[_STto] != null) {
    contents[_STto] = __strictParseInt32(output[_STto]) as number;
  }
  if (output[_OGN] != null) {
    contents[_OGN] = __expectString(output[_OGN]);
  }
  if (output[_PP] != null) {
    contents[_PP] = __strictParseInt32(output[_PP]) as number;
  }
  if (output[_SR] != null) {
    contents[_SR] = __expectString(output[_SR]);
  }
  if (output[_SDBSI] != null) {
    contents[_SDBSI] = __expectString(output[_SDBSI]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_TCA] != null) {
    contents[_TCA] = __expectString(output[_TCA]);
  }
  if (output[_Enc] != null) {
    contents[_Enc] = __parseBoolean(output[_Enc]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_DBSA] != null) {
    contents[_DBSA] = __expectString(output[_DBSA]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectString(output[_Ti]);
  }
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (String(output.ProcessorFeatures).trim() === "") {
    contents[_PF] = [];
  } else if (output[_PF] != null && output[_PF][_PFr] != null) {
    contents[_PF] = de_ProcessorFeatureList(__getArrayIfSingleItem(output[_PF][_PFr]), context);
  }
  if (output[_DRI] != null) {
    contents[_DRI] = __expectString(output[_DRI]);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_OSCT] != null) {
    contents[_OSCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_OSCT]));
  }
  if (output[_SDT] != null) {
    contents[_SDT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SDT]));
  }
  if (output[_DBSI] != null) {
    contents[_DBSI] = __expectString(output[_DBSI]);
  }
  if (output[_MT] != null) {
    contents[_MT] = __parseBoolean(output[_MT]);
  }
  if (output[_DLV] != null) {
    contents[_DLV] = __parseBoolean(output[_DLV]);
  }
  if (output[_SAZ] != null) {
    contents[_SAZ] = __expectString(output[_SAZ]);
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
 * deserializeAws_queryDBSnapshotAttribute
 */
const de_DBSnapshotAttribute = (output: any, context: __SerdeContext): DBSnapshotAttribute => {
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
 * deserializeAws_queryDBSnapshotAttributeList
 */
const de_DBSnapshotAttributeList = (output: any, context: __SerdeContext): DBSnapshotAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBSnapshotAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryDBSnapshotAttributesResult
 */
const de_DBSnapshotAttributesResult = (output: any, context: __SerdeContext): DBSnapshotAttributesResult => {
  const contents: any = {};
  if (output[_DBSIn] != null) {
    contents[_DBSIn] = __expectString(output[_DBSIn]);
  }
  if (String(output.DBSnapshotAttributes).trim() === "") {
    contents[_DBSAn] = [];
  } else if (output[_DBSAn] != null && output[_DBSAn][_DBSAna] != null) {
    contents[_DBSAn] = de_DBSnapshotAttributeList(__getArrayIfSingleItem(output[_DBSAn][_DBSAna]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSnapshotList
 */
const de_DBSnapshotList = (output: any, context: __SerdeContext): DBSnapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBSnapshot(entry, context);
    });
};

/**
 * deserializeAws_queryDBSnapshotMessage
 */
const de_DBSnapshotMessage = (output: any, context: __SerdeContext): DBSnapshotMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBSnapshots).trim() === "") {
    contents[_DBSn] = [];
  } else if (output[_DBSn] != null && output[_DBSn][_DBS] != null) {
    contents[_DBSn] = de_DBSnapshotList(__getArrayIfSingleItem(output[_DBSn][_DBS]), context);
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
 * deserializeAws_queryDBSnapshotTenantDatabase
 */
const de_DBSnapshotTenantDatabase = (output: any, context: __SerdeContext): DBSnapshotTenantDatabase => {
  const contents: any = {};
  if (output[_DBSIn] != null) {
    contents[_DBSIn] = __expectString(output[_DBSIn]);
  }
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_DRI] != null) {
    contents[_DRI] = __expectString(output[_DRI]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_STn] != null) {
    contents[_STn] = __expectString(output[_STn]);
  }
  if (output[_TDCT] != null) {
    contents[_TDCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TDCT]));
  }
  if (output[_TDBN] != null) {
    contents[_TDBN] = __expectString(output[_TDBN]);
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_TDRI] != null) {
    contents[_TDRI] = __expectString(output[_TDRI]);
  }
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_DBSTDARN] != null) {
    contents[_DBSTDARN] = __expectString(output[_DBSTDARN]);
  }
  if (output[_NCSN] != null) {
    contents[_NCSN] = __expectString(output[_NCSN]);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSnapshotTenantDatabaseNotFoundFault
 */
const de_DBSnapshotTenantDatabaseNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBSnapshotTenantDatabaseNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSnapshotTenantDatabasesList
 */
const de_DBSnapshotTenantDatabasesList = (output: any, context: __SerdeContext): DBSnapshotTenantDatabase[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBSnapshotTenantDatabase(entry, context);
    });
};

/**
 * deserializeAws_queryDBSnapshotTenantDatabasesMessage
 */
const de_DBSnapshotTenantDatabasesMessage = (
  output: any,
  context: __SerdeContext
): DBSnapshotTenantDatabasesMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBSnapshotTenantDatabases).trim() === "") {
    contents[_DBSTD] = [];
  } else if (output[_DBSTD] != null && output[_DBSTD][_DBSTDn] != null) {
    contents[_DBSTD] = de_DBSnapshotTenantDatabasesList(__getArrayIfSingleItem(output[_DBSTD][_DBSTDn]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroup
 */
const de_DBSubnetGroup = (output: any, context: __SerdeContext): DBSubnetGroup => {
  const contents: any = {};
  if (output[_DBSGNu] != null) {
    contents[_DBSGNu] = __expectString(output[_DBSGNu]);
  }
  if (output[_DBSGDu] != null) {
    contents[_DBSGDu] = __expectString(output[_DBSGDu]);
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
  if (output[_DBSGAu] != null) {
    contents[_DBSGAu] = __expectString(output[_DBSGAu]);
  }
  if (String(output.SupportedNetworkTypes).trim() === "") {
    contents[_SNT] = [];
  } else if (output[_SNT] != null && output[_SNT][_me] != null) {
    contents[_SNT] = de_StringList(__getArrayIfSingleItem(output[_SNT][_me]), context);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.DBSubnetGroups).trim() === "") {
    contents[_DBSGub] = [];
  } else if (output[_DBSGub] != null && output[_DBSGub][_DBSGu] != null) {
    contents[_DBSGub] = de_DBSubnetGroups(__getArrayIfSingleItem(output[_DBSGub][_DBSGu]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSubnetGroupNotAllowedFault
 */
const de_DBSubnetGroupNotAllowedFault = (output: any, context: __SerdeContext): DBSubnetGroupNotAllowedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryDeleteBlueGreenDeploymentResponse
 */
const de_DeleteBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): DeleteBlueGreenDeploymentResponse => {
  const contents: any = {};
  if (output[_BGD] != null) {
    contents[_BGD] = de_BlueGreenDeployment(output[_BGD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBClusterAutomatedBackupResult
 */
const de_DeleteDBClusterAutomatedBackupResult = (
  output: any,
  context: __SerdeContext
): DeleteDBClusterAutomatedBackupResult => {
  const contents: any = {};
  if (output[_DBCABl] != null) {
    contents[_DBCABl] = de_DBClusterAutomatedBackup(output[_DBCABl], context);
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
 * deserializeAws_queryDeleteDBInstanceAutomatedBackupResult
 */
const de_DeleteDBInstanceAutomatedBackupResult = (
  output: any,
  context: __SerdeContext
): DeleteDBInstanceAutomatedBackupResult => {
  const contents: any = {};
  if (output[_DBIABn] != null) {
    contents[_DBIABn] = de_DBInstanceAutomatedBackup(output[_DBIABn], context);
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
 * deserializeAws_queryDeleteDBProxyEndpointResponse
 */
const de_DeleteDBProxyEndpointResponse = (output: any, context: __SerdeContext): DeleteDBProxyEndpointResponse => {
  const contents: any = {};
  if (output[_DBPE] != null) {
    contents[_DBPE] = de_DBProxyEndpoint(output[_DBPE], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBProxyResponse
 */
const de_DeleteDBProxyResponse = (output: any, context: __SerdeContext): DeleteDBProxyResponse => {
  const contents: any = {};
  if (output[_DBP] != null) {
    contents[_DBP] = de_DBProxy(output[_DBP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBSnapshotResult
 */
const de_DeleteDBSnapshotResult = (output: any, context: __SerdeContext): DeleteDBSnapshotResult => {
  const contents: any = {};
  if (output[_DBS] != null) {
    contents[_DBS] = de_DBSnapshot(output[_DBS], context);
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
 * deserializeAws_queryDeleteTenantDatabaseResult
 */
const de_DeleteTenantDatabaseResult = (output: any, context: __SerdeContext): DeleteTenantDatabaseResult => {
  const contents: any = {};
  if (output[_TD] != null) {
    contents[_TD] = de_TenantDatabase(output[_TD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeregisterDBProxyTargetsResponse
 */
const de_DeregisterDBProxyTargetsResponse = (
  output: any,
  context: __SerdeContext
): DeregisterDBProxyTargetsResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDescribeBlueGreenDeploymentsResponse
 */
const de_DescribeBlueGreenDeploymentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBlueGreenDeploymentsResponse => {
  const contents: any = {};
  if (String(output.BlueGreenDeployments).trim() === "") {
    contents[_BGDl] = [];
  } else if (output[_BGDl] != null && output[_BGDl][_me] != null) {
    contents[_BGDl] = de_BlueGreenDeploymentList(__getArrayIfSingleItem(output[_BGDl][_me]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
 * deserializeAws_queryDescribeDBLogFilesDetails
 */
const de_DescribeDBLogFilesDetails = (output: any, context: __SerdeContext): DescribeDBLogFilesDetails => {
  const contents: any = {};
  if (output[_LFN] != null) {
    contents[_LFN] = __expectString(output[_LFN]);
  }
  if (output[_LW] != null) {
    contents[_LW] = __strictParseLong(output[_LW]) as number;
  }
  if (output[_Si] != null) {
    contents[_Si] = __strictParseLong(output[_Si]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBLogFilesList
 */
const de_DescribeDBLogFilesList = (output: any, context: __SerdeContext): DescribeDBLogFilesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DescribeDBLogFilesDetails(entry, context);
    });
};

/**
 * deserializeAws_queryDescribeDBLogFilesResponse
 */
const de_DescribeDBLogFilesResponse = (output: any, context: __SerdeContext): DescribeDBLogFilesResponse => {
  const contents: any = {};
  if (String(output.DescribeDBLogFiles).trim() === "") {
    contents[_DDBLF] = [];
  } else if (output[_DDBLF] != null && output[_DDBLF][_DDBLFD] != null) {
    contents[_DDBLF] = de_DescribeDBLogFilesList(__getArrayIfSingleItem(output[_DDBLF][_DDBLFD]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBMajorEngineVersionsResponse
 */
const de_DescribeDBMajorEngineVersionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBMajorEngineVersionsResponse => {
  const contents: any = {};
  if (String(output.DBMajorEngineVersions).trim() === "") {
    contents[_DBMEV] = [];
  } else if (output[_DBMEV] != null && output[_DBMEV][_DBMEVa] != null) {
    contents[_DBMEV] = de_DBMajorEngineVersionsList(__getArrayIfSingleItem(output[_DBMEV][_DBMEVa]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBProxiesResponse
 */
const de_DescribeDBProxiesResponse = (output: any, context: __SerdeContext): DescribeDBProxiesResponse => {
  const contents: any = {};
  if (String(output.DBProxies).trim() === "") {
    contents[_DBPr] = [];
  } else if (output[_DBPr] != null && output[_DBPr][_me] != null) {
    contents[_DBPr] = de_DBProxyList(__getArrayIfSingleItem(output[_DBPr][_me]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBProxyEndpointsResponse
 */
const de_DescribeDBProxyEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBProxyEndpointsResponse => {
  const contents: any = {};
  if (String(output.DBProxyEndpoints).trim() === "") {
    contents[_DBPEr] = [];
  } else if (output[_DBPEr] != null && output[_DBPEr][_me] != null) {
    contents[_DBPEr] = de_DBProxyEndpointList(__getArrayIfSingleItem(output[_DBPEr][_me]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBProxyTargetGroupsResponse
 */
const de_DescribeDBProxyTargetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBProxyTargetGroupsResponse => {
  const contents: any = {};
  if (String(output.TargetGroups).trim() === "") {
    contents[_TG] = [];
  } else if (output[_TG] != null && output[_TG][_me] != null) {
    contents[_TG] = de_TargetGroupList(__getArrayIfSingleItem(output[_TG][_me]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBProxyTargetsResponse
 */
const de_DescribeDBProxyTargetsResponse = (output: any, context: __SerdeContext): DescribeDBProxyTargetsResponse => {
  const contents: any = {};
  if (String(output.Targets).trim() === "") {
    contents[_Tar] = [];
  } else if (output[_Tar] != null && output[_Tar][_me] != null) {
    contents[_Tar] = de_TargetList(__getArrayIfSingleItem(output[_Tar][_me]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBShardGroupsResponse
 */
const de_DescribeDBShardGroupsResponse = (output: any, context: __SerdeContext): DescribeDBShardGroupsResponse => {
  const contents: any = {};
  if (String(output.DBShardGroups).trim() === "") {
    contents[_DBSGh] = [];
  } else if (output[_DBSGh] != null && output[_DBSGh][_DBSGha] != null) {
    contents[_DBSGh] = de_DBShardGroupsList(__getArrayIfSingleItem(output[_DBSGh][_DBSGha]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBSnapshotAttributesResult
 */
const de_DescribeDBSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeDBSnapshotAttributesResult => {
  const contents: any = {};
  if (output[_DBSAR] != null) {
    contents[_DBSAR] = de_DBSnapshotAttributesResult(output[_DBSAR], context);
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
 * deserializeAws_queryDescribeIntegrationsResponse
 */
const de_DescribeIntegrationsResponse = (output: any, context: __SerdeContext): DescribeIntegrationsResponse => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.Integrations).trim() === "") {
    contents[_In] = [];
  } else if (output[_In] != null && output[_In][_Int] != null) {
    contents[_In] = de_IntegrationList(__getArrayIfSingleItem(output[_In][_Int]), context);
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
  if (output[_VDBIMM] != null) {
    contents[_VDBIMM] = de_ValidDBInstanceModificationsMessage(output[_VDBIMM], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDisableHttpEndpointResponse
 */
const de_DisableHttpEndpointResponse = (output: any, context: __SerdeContext): DisableHttpEndpointResponse => {
  const contents: any = {};
  if (output[_RAe] != null) {
    contents[_RAe] = __expectString(output[_RAe]);
  }
  if (output[_HEE] != null) {
    contents[_HEE] = __parseBoolean(output[_HEE]);
  }
  return contents;
};

/**
 * deserializeAws_queryDocLink
 */
const de_DocLink = (output: any, context: __SerdeContext): DocLink => {
  const contents: any = {};
  if (output[_Te] != null) {
    contents[_Te] = __expectString(output[_Te]);
  }
  if (output[_Ur] != null) {
    contents[_Ur] = __expectString(output[_Ur]);
  }
  return contents;
};

/**
 * deserializeAws_queryDocLinkList
 */
const de_DocLinkList = (output: any, context: __SerdeContext): DocLink[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocLink(entry, context);
    });
};

/**
 * deserializeAws_queryDomainMembership
 */
const de_DomainMembership = (output: any, context: __SerdeContext): DomainMembership => {
  const contents: any = {};
  if (output[_Do] != null) {
    contents[_Do] = __expectString(output[_Do]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_FQDN] != null) {
    contents[_FQDN] = __expectString(output[_FQDN]);
  }
  if (output[_IAMRN] != null) {
    contents[_IAMRN] = __expectString(output[_IAMRN]);
  }
  if (output[_OU] != null) {
    contents[_OU] = __expectString(output[_OU]);
  }
  if (output[_ASA] != null) {
    contents[_ASA] = __expectString(output[_ASA]);
  }
  if (String(output.DnsIps).trim() === "") {
    contents[_DIn] = [];
  } else if (output[_DIn] != null && output[_DIn][_me] != null) {
    contents[_DIn] = de_StringList(__getArrayIfSingleItem(output[_DIn][_me]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDoubleRange
 */
const de_DoubleRange = (output: any, context: __SerdeContext): DoubleRange => {
  const contents: any = {};
  if (output[_Fr] != null) {
    contents[_Fr] = __strictParseFloat(output[_Fr]) as number;
  }
  if (output[_To] != null) {
    contents[_To] = __strictParseFloat(output[_To]) as number;
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
 * deserializeAws_queryDownloadDBLogFilePortionDetails
 */
const de_DownloadDBLogFilePortionDetails = (output: any, context: __SerdeContext): DownloadDBLogFilePortionDetails => {
  const contents: any = {};
  if (output[_LFD] != null) {
    contents[_LFD] = __expectString(output[_LFD]);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (output[_ADP] != null) {
    contents[_ADP] = __parseBoolean(output[_ADP]);
  }
  return contents;
};

/**
 * deserializeAws_queryEc2ImagePropertiesNotSupportedFault
 */
const de_Ec2ImagePropertiesNotSupportedFault = (
  output: any,
  context: __SerdeContext
): Ec2ImagePropertiesNotSupportedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_ECSGI] != null) {
    contents[_ECSGI] = __expectString(output[_ECSGI]);
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
 * deserializeAws_queryEnableHttpEndpointResponse
 */
const de_EnableHttpEndpointResponse = (output: any, context: __SerdeContext): EnableHttpEndpointResponse => {
  const contents: any = {};
  if (output[_RAe] != null) {
    contents[_RAe] = __expectString(output[_RAe]);
  }
  if (output[_HEE] != null) {
    contents[_HEE] = __parseBoolean(output[_HEE]);
  }
  return contents;
};

/**
 * deserializeAws_queryEncryptionContextMap
 */
const de_EncryptionContextMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.Parameters).trim() === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEngineModeList
 */
const de_EngineModeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.EventSubscriptionsList).trim() === "") {
    contents[_ESL] = [];
  } else if (output[_ESL] != null && output[_ESL][_ES] != null) {
    contents[_ESL] = de_EventSubscriptionsList(__getArrayIfSingleItem(output[_ESL][_ES]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryExportTask
 */
const de_ExportTask = (output: any, context: __SerdeContext): ExportTask => {
  const contents: any = {};
  if (output[_ETI] != null) {
    contents[_ETI] = __expectString(output[_ETI]);
  }
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
  }
  if (String(output.ExportOnly).trim() === "") {
    contents[_EO] = [];
  } else if (output[_EO] != null && output[_EO][_me] != null) {
    contents[_EO] = de_StringList(__getArrayIfSingleItem(output[_EO][_me]), context);
  }
  if (output[_STna] != null) {
    contents[_STna] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STna]));
  }
  if (output[_TSTas] != null) {
    contents[_TSTas] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TSTas]));
  }
  if (output[_TET] != null) {
    contents[_TET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TET]));
  }
  if (output[_SBu] != null) {
    contents[_SBu] = __expectString(output[_SBu]);
  }
  if (output[_SP] != null) {
    contents[_SP] = __expectString(output[_SP]);
  }
  if (output[_IRA] != null) {
    contents[_IRA] = __expectString(output[_IRA]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_PP] != null) {
    contents[_PP] = __strictParseInt32(output[_PP]) as number;
  }
  if (output[_TEDIGB] != null) {
    contents[_TEDIGB] = __strictParseInt32(output[_TEDIGB]) as number;
  }
  if (output[_FCa] != null) {
    contents[_FCa] = __expectString(output[_FCa]);
  }
  if (output[_WM] != null) {
    contents[_WM] = __expectString(output[_WM]);
  }
  if (output[_STo] != null) {
    contents[_STo] = __expectString(output[_STo]);
  }
  return contents;
};

/**
 * deserializeAws_queryExportTaskAlreadyExistsFault
 */
const de_ExportTaskAlreadyExistsFault = (output: any, context: __SerdeContext): ExportTaskAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryExportTaskNotFoundFault
 */
const de_ExportTaskNotFoundFault = (output: any, context: __SerdeContext): ExportTaskNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryExportTasksList
 */
const de_ExportTasksList = (output: any, context: __SerdeContext): ExportTask[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportTask(entry, context);
    });
};

/**
 * deserializeAws_queryExportTasksMessage
 */
const de_ExportTasksMessage = (output: any, context: __SerdeContext): ExportTasksMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.ExportTasks).trim() === "") {
    contents[_ETx] = [];
  } else if (output[_ETx] != null && output[_ETx][_ETxp] != null) {
    contents[_ETx] = de_ExportTasksList(__getArrayIfSingleItem(output[_ETx][_ETxp]), context);
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
 * deserializeAws_queryFailoverState
 */
const de_FailoverState = (output: any, context: __SerdeContext): FailoverState => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_FDCA] != null) {
    contents[_FDCA] = __expectString(output[_FDCA]);
  }
  if (output[_TDCA] != null) {
    contents[_TDCA] = __expectString(output[_TDCA]);
  }
  if (output[_IDLA] != null) {
    contents[_IDLA] = __parseBoolean(output[_IDLA]);
  }
  return contents;
};

/**
 * deserializeAws_queryFeatureNameList
 */
const de_FeatureNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
  if (output[_ELS] != null) {
    contents[_ELS] = __expectString(output[_ELS]);
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
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_FSa] != null) {
    contents[_FSa] = de_FailoverState(output[_FSa], context);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
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
    contents[_Read] = [];
  } else if (output[_Read] != null && output[_Read][_me] != null) {
    contents[_Read] = de_ReadersArnList(__getArrayIfSingleItem(output[_Read][_me]), context);
  }
  if (output[_IW] != null) {
    contents[_IW] = __parseBoolean(output[_IW]);
  }
  if (output[_GWFS] != null) {
    contents[_GWFS] = __expectString(output[_GWFS]);
  }
  if (output[_SS] != null) {
    contents[_SS] = __expectString(output[_SS]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.GlobalClusters).trim() === "") {
    contents[_GCl] = [];
  } else if (output[_GCl] != null && output[_GCl][_GCMl] != null) {
    contents[_GCl] = de_GlobalClusterList(__getArrayIfSingleItem(output[_GCl][_GCMl]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIamRoleMissingPermissionsFault
 */
const de_IamRoleMissingPermissionsFault = (output: any, context: __SerdeContext): IamRoleMissingPermissionsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIamRoleNotFoundFault
 */
const de_IamRoleNotFoundFault = (output: any, context: __SerdeContext): IamRoleNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryInsufficientAvailableIPsInSubnetFault
 */
const de_InsufficientAvailableIPsInSubnetFault = (
  output: any,
  context: __SerdeContext
): InsufficientAvailableIPsInSubnetFault => {
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
 * deserializeAws_queryIntegration
 */
const de_Integration = (output: any, context: __SerdeContext): Integration => {
  const contents: any = {};
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_IN] != null) {
    contents[_IN] = __expectString(output[_IN]);
  }
  if (output[_IAn] != null) {
    contents[_IAn] = __expectString(output[_IAn]);
  }
  if (output[_KMSKI] != null) {
    contents[_KMSKI] = __expectString(output[_KMSKI]);
  }
  if (String(output.AdditionalEncryptionContext).trim() === "") {
    contents[_AEC] = {};
  } else if (output[_AEC] != null && output[_AEC][_e] != null) {
    contents[_AEC] = de_EncryptionContextMap(__getArrayIfSingleItem(output[_AEC][_e]), context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Tag] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Tag]), context);
  }
  if (output[_DFa] != null) {
    contents[_DFa] = __expectString(output[_DFa]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (String(output.Errors).trim() === "") {
    contents[_Er] = [];
  } else if (output[_Er] != null && output[_Er][_IE] != null) {
    contents[_Er] = de_IntegrationErrorList(__getArrayIfSingleItem(output[_Er][_IE]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationAlreadyExistsFault
 */
const de_IntegrationAlreadyExistsFault = (output: any, context: __SerdeContext): IntegrationAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationConflictOperationFault
 */
const de_IntegrationConflictOperationFault = (
  output: any,
  context: __SerdeContext
): IntegrationConflictOperationFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationError
 */
const de_IntegrationError = (output: any, context: __SerdeContext): IntegrationError => {
  const contents: any = {};
  if (output[_ECr] != null) {
    contents[_ECr] = __expectString(output[_ECr]);
  }
  if (output[_EMr] != null) {
    contents[_EMr] = __expectString(output[_EMr]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationErrorList
 */
const de_IntegrationErrorList = (output: any, context: __SerdeContext): IntegrationError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IntegrationError(entry, context);
    });
};

/**
 * deserializeAws_queryIntegrationList
 */
const de_IntegrationList = (output: any, context: __SerdeContext): Integration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Integration(entry, context);
    });
};

/**
 * deserializeAws_queryIntegrationNotFoundFault
 */
const de_IntegrationNotFoundFault = (output: any, context: __SerdeContext): IntegrationNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationQuotaExceededFault
 */
const de_IntegrationQuotaExceededFault = (output: any, context: __SerdeContext): IntegrationQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidBlueGreenDeploymentStateFault
 */
const de_InvalidBlueGreenDeploymentStateFault = (
  output: any,
  context: __SerdeContext
): InvalidBlueGreenDeploymentStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCustomDBEngineVersionStateFault
 */
const de_InvalidCustomDBEngineVersionStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCustomDBEngineVersionStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBClusterAutomatedBackupStateFault
 */
const de_InvalidDBClusterAutomatedBackupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterAutomatedBackupStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBClusterCapacityFault
 */
const de_InvalidDBClusterCapacityFault = (output: any, context: __SerdeContext): InvalidDBClusterCapacityFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault
 */
const de_InvalidDBInstanceAutomatedBackupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBInstanceAutomatedBackupStateFault => {
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
 * deserializeAws_queryInvalidDBProxyEndpointStateFault
 */
const de_InvalidDBProxyEndpointStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBProxyEndpointStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBProxyStateFault
 */
const de_InvalidDBProxyStateFault = (output: any, context: __SerdeContext): InvalidDBProxyStateFault => {
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
 * deserializeAws_queryInvalidDBShardGroupStateFault
 */
const de_InvalidDBShardGroupStateFault = (output: any, context: __SerdeContext): InvalidDBShardGroupStateFault => {
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
 * deserializeAws_queryInvalidDBSubnetGroupFault
 */
const de_InvalidDBSubnetGroupFault = (output: any, context: __SerdeContext): InvalidDBSubnetGroupFault => {
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
 * deserializeAws_queryInvalidExportOnlyFault
 */
const de_InvalidExportOnlyFault = (output: any, context: __SerdeContext): InvalidExportOnlyFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidExportSourceStateFault
 */
const de_InvalidExportSourceStateFault = (output: any, context: __SerdeContext): InvalidExportSourceStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidExportTaskStateFault
 */
const de_InvalidExportTaskStateFault = (output: any, context: __SerdeContext): InvalidExportTaskStateFault => {
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
 * deserializeAws_queryInvalidIntegrationStateFault
 */
const de_InvalidIntegrationStateFault = (output: any, context: __SerdeContext): InvalidIntegrationStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidOptionGroupStateFault
 */
const de_InvalidOptionGroupStateFault = (output: any, context: __SerdeContext): InvalidOptionGroupStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidResourceStateFault
 */
const de_InvalidResourceStateFault = (output: any, context: __SerdeContext): InvalidResourceStateFault => {
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
 * deserializeAws_queryInvalidS3BucketFault
 */
const de_InvalidS3BucketFault = (output: any, context: __SerdeContext): InvalidS3BucketFault => {
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
 * deserializeAws_queryIPRange
 */
const de_IPRange = (output: any, context: __SerdeContext): IPRange => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CIDRIP] != null) {
    contents[_CIDRIP] = __expectString(output[_CIDRIP]);
  }
  return contents;
};

/**
 * deserializeAws_queryIPRangeList
 */
const de_IPRangeList = (output: any, context: __SerdeContext): IPRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IPRange(entry, context);
    });
};

/**
 * deserializeAws_queryIssueDetails
 */
const de_IssueDetails = (output: any, context: __SerdeContext): IssueDetails => {
  const contents: any = {};
  if (output[_PID] != null) {
    contents[_PID] = de_PerformanceIssueDetails(output[_PID], context);
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
 * deserializeAws_queryLimitlessDatabase
 */
const de_LimitlessDatabase = (output: any, context: __SerdeContext): LimitlessDatabase => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_MRACU] != null) {
    contents[_MRACU] = __strictParseFloat(output[_MRACU]) as number;
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
 * deserializeAws_queryMasterUserSecret
 */
const de_MasterUserSecret = (output: any, context: __SerdeContext): MasterUserSecret => {
  const contents: any = {};
  if (output[_SAe] != null) {
    contents[_SAe] = __expectString(output[_SAe]);
  }
  if (output[_SSe] != null) {
    contents[_SSe] = __expectString(output[_SSe]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  return contents;
};

/**
 * deserializeAws_queryMaxDBShardGroupLimitReached
 */
const de_MaxDBShardGroupLimitReached = (output: any, context: __SerdeContext): MaxDBShardGroupLimitReached => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (String(output.References).trim() === "") {
    contents[_Ref] = [];
  } else if (output[_Ref] != null && output[_Ref][_me] != null) {
    contents[_Ref] = de_MetricReferenceList(__getArrayIfSingleItem(output[_Ref][_me]), context);
  }
  if (output[_SDta] != null) {
    contents[_SDta] = __expectString(output[_SDta]);
  }
  if (output[_MQ] != null) {
    contents[_MQ] = de_MetricQuery(output[_MQ], context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricList
 */
const de_MetricList = (output: any, context: __SerdeContext): Metric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Metric(entry, context);
    });
};

/**
 * deserializeAws_queryMetricQuery
 */
const de_MetricQuery = (output: any, context: __SerdeContext): MetricQuery => {
  const contents: any = {};
  if (output[_PIMQ] != null) {
    contents[_PIMQ] = de_PerformanceInsightsMetricQuery(output[_PIMQ], context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricReference
 */
const de_MetricReference = (output: any, context: __SerdeContext): MetricReference => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_RD] != null) {
    contents[_RD] = de_ReferenceDetails(output[_RD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricReferenceList
 */
const de_MetricReferenceList = (output: any, context: __SerdeContext): MetricReference[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricReference(entry, context);
    });
};

/**
 * deserializeAws_queryMinimumEngineVersionPerAllowedValue
 */
const de_MinimumEngineVersionPerAllowedValue = (
  output: any,
  context: __SerdeContext
): MinimumEngineVersionPerAllowedValue => {
  const contents: any = {};
  if (output[_AVl] != null) {
    contents[_AVl] = __expectString(output[_AVl]);
  }
  if (output[_MEVi] != null) {
    contents[_MEVi] = __expectString(output[_MEVi]);
  }
  return contents;
};

/**
 * deserializeAws_queryMinimumEngineVersionPerAllowedValueList
 */
const de_MinimumEngineVersionPerAllowedValueList = (
  output: any,
  context: __SerdeContext
): MinimumEngineVersionPerAllowedValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MinimumEngineVersionPerAllowedValue(entry, context);
    });
};

/**
 * deserializeAws_queryModifyActivityStreamResponse
 */
const de_ModifyActivityStreamResponse = (output: any, context: __SerdeContext): ModifyActivityStreamResponse => {
  const contents: any = {};
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_KSN] != null) {
    contents[_KSN] = __expectString(output[_KSN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
  }
  if (output[_ENAFI] != null) {
    contents[_ENAFI] = __parseBoolean(output[_ENAFI]);
  }
  if (output[_PS] != null) {
    contents[_PS] = __expectString(output[_PS]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyCertificatesResult
 */
const de_ModifyCertificatesResult = (output: any, context: __SerdeContext): ModifyCertificatesResult => {
  const contents: any = {};
  if (output[_Cer] != null) {
    contents[_Cer] = de_Certificate(output[_Cer], context);
  }
  return contents;
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
 * deserializeAws_queryModifyDBProxyEndpointResponse
 */
const de_ModifyDBProxyEndpointResponse = (output: any, context: __SerdeContext): ModifyDBProxyEndpointResponse => {
  const contents: any = {};
  if (output[_DBPE] != null) {
    contents[_DBPE] = de_DBProxyEndpoint(output[_DBPE], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBProxyResponse
 */
const de_ModifyDBProxyResponse = (output: any, context: __SerdeContext): ModifyDBProxyResponse => {
  const contents: any = {};
  if (output[_DBP] != null) {
    contents[_DBP] = de_DBProxy(output[_DBP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBProxyTargetGroupResponse
 */
const de_ModifyDBProxyTargetGroupResponse = (
  output: any,
  context: __SerdeContext
): ModifyDBProxyTargetGroupResponse => {
  const contents: any = {};
  if (output[_DBPTG] != null) {
    contents[_DBPTG] = de_DBProxyTargetGroup(output[_DBPTG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBSnapshotAttributeResult
 */
const de_ModifyDBSnapshotAttributeResult = (output: any, context: __SerdeContext): ModifyDBSnapshotAttributeResult => {
  const contents: any = {};
  if (output[_DBSAR] != null) {
    contents[_DBSAR] = de_DBSnapshotAttributesResult(output[_DBSAR], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBSnapshotResult
 */
const de_ModifyDBSnapshotResult = (output: any, context: __SerdeContext): ModifyDBSnapshotResult => {
  const contents: any = {};
  if (output[_DBS] != null) {
    contents[_DBS] = de_DBSnapshot(output[_DBS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBSubnetGroupResult
 */
const de_ModifyDBSubnetGroupResult = (output: any, context: __SerdeContext): ModifyDBSubnetGroupResult => {
  const contents: any = {};
  if (output[_DBSGu] != null) {
    contents[_DBSGu] = de_DBSubnetGroup(output[_DBSGu], context);
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
 * deserializeAws_queryModifyOptionGroupResult
 */
const de_ModifyOptionGroupResult = (output: any, context: __SerdeContext): ModifyOptionGroupResult => {
  const contents: any = {};
  if (output[_OG] != null) {
    contents[_OG] = de_OptionGroup(output[_OG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyTenantDatabaseResult
 */
const de_ModifyTenantDatabaseResult = (output: any, context: __SerdeContext): ModifyTenantDatabaseResult => {
  const contents: any = {};
  if (output[_TD] != null) {
    contents[_TD] = de_TenantDatabase(output[_TD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkTypeNotSupported
 */
const de_NetworkTypeNotSupported = (output: any, context: __SerdeContext): NetworkTypeNotSupported => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOption
 */
const de_Option = (output: any, context: __SerdeContext): Option => {
  const contents: any = {};
  if (output[_ON] != null) {
    contents[_ON] = __expectString(output[_ON]);
  }
  if (output[_OD] != null) {
    contents[_OD] = __expectString(output[_OD]);
  }
  if (output[_Pe] != null) {
    contents[_Pe] = __parseBoolean(output[_Pe]);
  }
  if (output[_Per] != null) {
    contents[_Per] = __parseBoolean(output[_Per]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_OV] != null) {
    contents[_OV] = __expectString(output[_OV]);
  }
  if (String(output.OptionSettings).trim() === "") {
    contents[_OS] = [];
  } else if (output[_OS] != null && output[_OS][_OSp] != null) {
    contents[_OS] = de_OptionSettingConfigurationList(__getArrayIfSingleItem(output[_OS][_OSp]), context);
  }
  if (String(output.DBSecurityGroupMemberships).trim() === "") {
    contents[_DBSGM] = [];
  } else if (output[_DBSGM] != null && output[_DBSGM][_DBSGe] != null) {
    contents[_DBSGM] = de_DBSecurityGroupMembershipList(__getArrayIfSingleItem(output[_DBSGM][_DBSGe]), context);
  }
  if (String(output.VpcSecurityGroupMemberships).trim() === "") {
    contents[_VSGM] = [];
  } else if (output[_VSGM] != null && output[_VSGM][_VSGMp] != null) {
    contents[_VSGM] = de_VpcSecurityGroupMembershipList(__getArrayIfSingleItem(output[_VSGM][_VSGMp]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroup
 */
const de_OptionGroup = (output: any, context: __SerdeContext): OptionGroup => {
  const contents: any = {};
  if (output[_OGN] != null) {
    contents[_OGN] = __expectString(output[_OGN]);
  }
  if (output[_OGD] != null) {
    contents[_OGD] = __expectString(output[_OGD]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
  }
  if (String(output.Options).trim() === "") {
    contents[_O] = [];
  } else if (output[_O] != null && output[_O][_Op] != null) {
    contents[_O] = de_OptionsList(__getArrayIfSingleItem(output[_O][_Op]), context);
  }
  if (output[_AVANVIM] != null) {
    contents[_AVANVIM] = __parseBoolean(output[_AVANVIM]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_OGA] != null) {
    contents[_OGA] = __expectString(output[_OGA]);
  }
  if (output[_SOG] != null) {
    contents[_SOG] = __expectString(output[_SOG]);
  }
  if (output[_SAI] != null) {
    contents[_SAI] = __expectString(output[_SAI]);
  }
  if (output[_CTo] != null) {
    contents[_CTo] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTo]));
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupAlreadyExistsFault
 */
const de_OptionGroupAlreadyExistsFault = (output: any, context: __SerdeContext): OptionGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupMembership
 */
const de_OptionGroupMembership = (output: any, context: __SerdeContext): OptionGroupMembership => {
  const contents: any = {};
  if (output[_OGN] != null) {
    contents[_OGN] = __expectString(output[_OGN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupOption
 */
const de_OptionGroupOption = (output: any, context: __SerdeContext): OptionGroupOption => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
  }
  if (output[_MRMEV] != null) {
    contents[_MRMEV] = __expectString(output[_MRMEV]);
  }
  if (output[_PR] != null) {
    contents[_PR] = __parseBoolean(output[_PR]);
  }
  if (output[_DPe] != null) {
    contents[_DPe] = __strictParseInt32(output[_DPe]) as number;
  }
  if (String(output.OptionsDependedOn).trim() === "") {
    contents[_ODO] = [];
  } else if (output[_ODO] != null && output[_ODO][_ON] != null) {
    contents[_ODO] = de_OptionsDependedOn(__getArrayIfSingleItem(output[_ODO][_ON]), context);
  }
  if (String(output.OptionsConflictsWith).trim() === "") {
    contents[_OCW] = [];
  } else if (output[_OCW] != null && output[_OCW][_OCN] != null) {
    contents[_OCW] = de_OptionsConflictsWith(__getArrayIfSingleItem(output[_OCW][_OCN]), context);
  }
  if (output[_Pe] != null) {
    contents[_Pe] = __parseBoolean(output[_Pe]);
  }
  if (output[_Per] != null) {
    contents[_Per] = __parseBoolean(output[_Per]);
  }
  if (output[_RAMEVU] != null) {
    contents[_RAMEVU] = __parseBoolean(output[_RAMEVU]);
  }
  if (output[_VO] != null) {
    contents[_VO] = __parseBoolean(output[_VO]);
  }
  if (output[_SOVD] != null) {
    contents[_SOVD] = __parseBoolean(output[_SOVD]);
  }
  if (String(output.OptionGroupOptionSettings).trim() === "") {
    contents[_OGOS] = [];
  } else if (output[_OGOS] != null && output[_OGOS][_OGOSp] != null) {
    contents[_OGOS] = de_OptionGroupOptionSettingsList(__getArrayIfSingleItem(output[_OGOS][_OGOSp]), context);
  }
  if (String(output.OptionGroupOptionVersions).trim() === "") {
    contents[_OGOV] = [];
  } else if (output[_OGOV] != null && output[_OGOV][_OV] != null) {
    contents[_OGOV] = de_OptionGroupOptionVersionsList(__getArrayIfSingleItem(output[_OGOV][_OV]), context);
  }
  if (output[_CCA] != null) {
    contents[_CCA] = __parseBoolean(output[_CCA]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupOptionSetting
 */
const de_OptionGroupOptionSetting = (output: any, context: __SerdeContext): OptionGroupOptionSetting => {
  const contents: any = {};
  if (output[_SNe] != null) {
    contents[_SNe] = __expectString(output[_SNe]);
  }
  if (output[_SDe] != null) {
    contents[_SDe] = __expectString(output[_SDe]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_AT] != null) {
    contents[_AT] = __expectString(output[_AT]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __expectString(output[_AV]);
  }
  if (output[_IM] != null) {
    contents[_IM] = __parseBoolean(output[_IM]);
  }
  if (output[_IR] != null) {
    contents[_IR] = __parseBoolean(output[_IR]);
  }
  if (String(output.MinimumEngineVersionPerAllowedValue).trim() === "") {
    contents[_MEVPAV] = [];
  } else if (output[_MEVPAV] != null && output[_MEVPAV][_MEVPAV] != null) {
    contents[_MEVPAV] = de_MinimumEngineVersionPerAllowedValueList(
      __getArrayIfSingleItem(output[_MEVPAV][_MEVPAV]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupOptionSettingsList
 */
const de_OptionGroupOptionSettingsList = (output: any, context: __SerdeContext): OptionGroupOptionSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptionGroupOptionSetting(entry, context);
    });
};

/**
 * deserializeAws_queryOptionGroupOptionsList
 */
const de_OptionGroupOptionsList = (output: any, context: __SerdeContext): OptionGroupOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptionGroupOption(entry, context);
    });
};

/**
 * deserializeAws_queryOptionGroupOptionsMessage
 */
const de_OptionGroupOptionsMessage = (output: any, context: __SerdeContext): OptionGroupOptionsMessage => {
  const contents: any = {};
  if (String(output.OptionGroupOptions).trim() === "") {
    contents[_OGO] = [];
  } else if (output[_OGO] != null && output[_OGO][_OGOp] != null) {
    contents[_OGO] = de_OptionGroupOptionsList(__getArrayIfSingleItem(output[_OGO][_OGOp]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupOptionVersionsList
 */
const de_OptionGroupOptionVersionsList = (output: any, context: __SerdeContext): OptionVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptionVersion(entry, context);
    });
};

/**
 * deserializeAws_queryOptionGroupQuotaExceededFault
 */
const de_OptionGroupQuotaExceededFault = (output: any, context: __SerdeContext): OptionGroupQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroups
 */
const de_OptionGroups = (output: any, context: __SerdeContext): OptionGroups => {
  const contents: any = {};
  if (String(output.OptionGroupsList).trim() === "") {
    contents[_OGL] = [];
  } else if (output[_OGL] != null && output[_OGL][_OG] != null) {
    contents[_OGL] = de_OptionGroupsList(__getArrayIfSingleItem(output[_OGL][_OG]), context);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupsList
 */
const de_OptionGroupsList = (output: any, context: __SerdeContext): OptionGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptionGroup(entry, context);
    });
};

/**
 * deserializeAws_queryOptionsConflictsWith
 */
const de_OptionsConflictsWith = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryOptionsDependedOn
 */
const de_OptionsDependedOn = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryOptionSetting
 */
const de_OptionSetting = (output: any, context: __SerdeContext): OptionSetting => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_AT] != null) {
    contents[_AT] = __expectString(output[_AT]);
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
  if (output[_IC] != null) {
    contents[_IC] = __parseBoolean(output[_IC]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionSettingConfigurationList
 */
const de_OptionSettingConfigurationList = (output: any, context: __SerdeContext): OptionSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptionSetting(entry, context);
    });
};

/**
 * deserializeAws_queryOptionsList
 */
const de_OptionsList = (output: any, context: __SerdeContext): Option[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Option(entry, context);
    });
};

/**
 * deserializeAws_queryOptionVersion
 */
const de_OptionVersion = (output: any, context: __SerdeContext): OptionVersion => {
  const contents: any = {};
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  if (output[_ID] != null) {
    contents[_ID] = __parseBoolean(output[_ID]);
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
  if (output[_AZG] != null) {
    contents[_AZG] = __expectString(output[_AZG]);
  }
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_AZv] != null) {
    contents[_AZ] = de_AvailabilityZoneList(__getArrayIfSingleItem(output[_AZ][_AZv]), context);
  }
  if (output[_MAZC] != null) {
    contents[_MAZC] = __parseBoolean(output[_MAZC]);
  }
  if (output[_RRC] != null) {
    contents[_RRC] = __parseBoolean(output[_RRC]);
  }
  if (output[_Vp] != null) {
    contents[_Vp] = __parseBoolean(output[_Vp]);
  }
  if (output[_SSE] != null) {
    contents[_SSE] = __parseBoolean(output[_SSE]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_SIupp] != null) {
    contents[_SIupp] = __parseBoolean(output[_SIupp]);
  }
  if (output[_SST] != null) {
    contents[_SST] = __parseBoolean(output[_SST]);
  }
  if (output[_SEMu] != null) {
    contents[_SEMu] = __parseBoolean(output[_SEMu]);
  }
  if (output[_SIAMDA] != null) {
    contents[_SIAMDA] = __parseBoolean(output[_SIAMDA]);
  }
  if (output[_SPI] != null) {
    contents[_SPI] = __parseBoolean(output[_SPI]);
  }
  if (output[_MSS] != null) {
    contents[_MSS] = __strictParseInt32(output[_MSS]) as number;
  }
  if (output[_MSSa] != null) {
    contents[_MSSa] = __strictParseInt32(output[_MSSa]) as number;
  }
  if (output[_MIPDI] != null) {
    contents[_MIPDI] = __strictParseInt32(output[_MIPDI]) as number;
  }
  if (output[_MIPDIa] != null) {
    contents[_MIPDIa] = __strictParseInt32(output[_MIPDIa]) as number;
  }
  if (output[_MIPG] != null) {
    contents[_MIPG] = __strictParseFloat(output[_MIPG]) as number;
  }
  if (output[_MIPGa] != null) {
    contents[_MIPGa] = __strictParseFloat(output[_MIPGa]) as number;
  }
  if (output[_MSTPDI] != null) {
    contents[_MSTPDI] = __strictParseInt32(output[_MSTPDI]) as number;
  }
  if (output[_MSTPDIa] != null) {
    contents[_MSTPDIa] = __strictParseInt32(output[_MSTPDIa]) as number;
  }
  if (output[_MSTPI] != null) {
    contents[_MSTPI] = __strictParseFloat(output[_MSTPI]) as number;
  }
  if (output[_MSTPIa] != null) {
    contents[_MSTPIa] = __strictParseFloat(output[_MSTPIa]) as number;
  }
  if (String(output.AvailableProcessorFeatures).trim() === "") {
    contents[_APF] = [];
  } else if (output[_APF] != null && output[_APF][_APFv] != null) {
    contents[_APF] = de_AvailableProcessorFeatureList(__getArrayIfSingleItem(output[_APF][_APFv]), context);
  }
  if (String(output.SupportedEngineModes).trim() === "") {
    contents[_SEM] = [];
  } else if (output[_SEM] != null && output[_SEM][_me] != null) {
    contents[_SEM] = de_EngineModeList(__getArrayIfSingleItem(output[_SEM][_me]), context);
  }
  if (output[_SSA] != null) {
    contents[_SSA] = __parseBoolean(output[_SSA]);
  }
  if (output[_SKA] != null) {
    contents[_SKA] = __parseBoolean(output[_SKA]);
  }
  if (output[_OC] != null) {
    contents[_OC] = __parseBoolean(output[_OC]);
  }
  if (String(output.SupportedActivityStreamModes).trim() === "") {
    contents[_SASM] = [];
  } else if (output[_SASM] != null && output[_SASM][_me] != null) {
    contents[_SASM] = de_ActivityStreamModeList(__getArrayIfSingleItem(output[_SASM][_me]), context);
  }
  if (output[_SGD] != null) {
    contents[_SGD] = __parseBoolean(output[_SGD]);
  }
  if (String(output.SupportedNetworkTypes).trim() === "") {
    contents[_SNT] = [];
  } else if (output[_SNT] != null && output[_SNT][_me] != null) {
    contents[_SNT] = de_StringList(__getArrayIfSingleItem(output[_SNT][_me]), context);
  }
  if (output[_SCu] != null) {
    contents[_SCu] = __parseBoolean(output[_SCu]);
  }
  if (output[_SDLV] != null) {
    contents[_SDLV] = __parseBoolean(output[_SDLV]);
  }
  if (output[_SHE] != null) {
    contents[_SHE] = __parseBoolean(output[_SHE]);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  return contents;
};

/**
 * deserializeAws_queryOutpost
 */
const de_Outpost = (output: any, context: __SerdeContext): Outpost => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
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
  if (output[_AMp] != null) {
    contents[_AMp] = __expectString(output[_AMp]);
  }
  if (String(output.SupportedEngineModes).trim() === "") {
    contents[_SEM] = [];
  } else if (output[_SEM] != null && output[_SEM][_me] != null) {
    contents[_SEM] = de_EngineModeList(__getArrayIfSingleItem(output[_SEM][_me]), context);
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
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
  if (output[_STto] != null) {
    contents[_STto] = __strictParseInt32(output[_STto]) as number;
  }
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (output[_CACI] != null) {
    contents[_CACI] = __expectString(output[_CACI]);
  }
  if (output[_DBSGNu] != null) {
    contents[_DBSGNu] = __expectString(output[_DBSGNu]);
  }
  if (output[_PCLE] != null) {
    contents[_PCLE] = de_PendingCloudwatchLogsExports(output[_PCLE], context);
  }
  if (String(output.ProcessorFeatures).trim() === "") {
    contents[_PF] = [];
  } else if (output[_PF] != null && output[_PF][_PFr] != null) {
    contents[_PF] = de_ProcessorFeatureList(__getArrayIfSingleItem(output[_PF][_PFr]), context);
  }
  if (output[_AM] != null) {
    contents[_AM] = __expectString(output[_AM]);
  }
  if (output[_RFAMT] != null) {
    contents[_RFAMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RFAMT]));
  }
  if (output[_MT] != null) {
    contents[_MT] = __parseBoolean(output[_MT]);
  }
  if (output[_IAMDAE] != null) {
    contents[_IAMDAE] = __parseBoolean(output[_IAMDAE]);
  }
  if (output[_DLV] != null) {
    contents[_DLV] = __parseBoolean(output[_DLV]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  return contents;
};

/**
 * deserializeAws_queryPerformanceInsightsMetricDimensionGroup
 */
const de_PerformanceInsightsMetricDimensionGroup = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricDimensionGroup => {
  const contents: any = {};
  if (String(output.Dimensions).trim() === "") {
    contents[_Di] = [];
  } else if (output[_Di] != null && output[_Di][_me] != null) {
    contents[_Di] = de_StringList(__getArrayIfSingleItem(output[_Di][_me]), context);
  }
  if (output[_G] != null) {
    contents[_G] = __expectString(output[_G]);
  }
  if (output[_Lim] != null) {
    contents[_Lim] = __strictParseInt32(output[_Lim]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryPerformanceInsightsMetricQuery
 */
const de_PerformanceInsightsMetricQuery = (output: any, context: __SerdeContext): PerformanceInsightsMetricQuery => {
  const contents: any = {};
  if (output[_GB] != null) {
    contents[_GB] = de_PerformanceInsightsMetricDimensionGroup(output[_GB], context);
  }
  if (output[_Met] != null) {
    contents[_Met] = __expectString(output[_Met]);
  }
  return contents;
};

/**
 * deserializeAws_queryPerformanceIssueDetails
 */
const de_PerformanceIssueDetails = (output: any, context: __SerdeContext): PerformanceIssueDetails => {
  const contents: any = {};
  if (output[_STta] != null) {
    contents[_STta] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STta]));
  }
  if (output[_ETn] != null) {
    contents[_ETn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ETn]));
  }
  if (String(output.Metrics).trim() === "") {
    contents[_Metr] = [];
  } else if (output[_Metr] != null && output[_Metr][_me] != null) {
    contents[_Metr] = de_MetricList(__getArrayIfSingleItem(output[_Metr][_me]), context);
  }
  if (output[_An] != null) {
    contents[_An] = __expectString(output[_An]);
  }
  return contents;
};

/**
 * deserializeAws_queryPointInTimeRestoreNotEnabledFault
 */
const de_PointInTimeRestoreNotEnabledFault = (
  output: any,
  context: __SerdeContext
): PointInTimeRestoreNotEnabledFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessorFeature
 */
const de_ProcessorFeature = (output: any, context: __SerdeContext): ProcessorFeature => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessorFeatureList
 */
const de_ProcessorFeatureList = (output: any, context: __SerdeContext): ProcessorFeature[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProcessorFeature(entry, context);
    });
};

/**
 * deserializeAws_queryPromoteReadReplicaDBClusterResult
 */
const de_PromoteReadReplicaDBClusterResult = (
  output: any,
  context: __SerdeContext
): PromoteReadReplicaDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryPromoteReadReplicaResult
 */
const de_PromoteReadReplicaResult = (output: any, context: __SerdeContext): PromoteReadReplicaResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPurchaseReservedDBInstancesOfferingResult
 */
const de_PurchaseReservedDBInstancesOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedDBInstancesOfferingResult => {
  const contents: any = {};
  if (output[_RDBIe] != null) {
    contents[_RDBIe] = de_ReservedDBInstance(output[_RDBIe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRange
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  const contents: any = {};
  if (output[_Fr] != null) {
    contents[_Fr] = __strictParseInt32(output[_Fr]) as number;
  }
  if (output[_To] != null) {
    contents[_To] = __strictParseInt32(output[_To]) as number;
  }
  if (output[_Ste] != null) {
    contents[_Ste] = __strictParseInt32(output[_Ste]) as number;
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
 * deserializeAws_queryRdsCustomClusterConfiguration
 */
const de_RdsCustomClusterConfiguration = (output: any, context: __SerdeContext): RdsCustomClusterConfiguration => {
  const contents: any = {};
  if (output[_ISI] != null) {
    contents[_ISI] = __expectString(output[_ISI]);
  }
  if (output[_TGMDI] != null) {
    contents[_TGMDI] = __expectString(output[_TGMDI]);
  }
  if (output[_RM] != null) {
    contents[_RM] = __expectString(output[_RM]);
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
 * deserializeAws_queryRebootDBClusterResult
 */
const de_RebootDBClusterResult = (output: any, context: __SerdeContext): RebootDBClusterResult => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
  }
  return contents;
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
 * deserializeAws_queryRecommendedAction
 */
const de_RecommendedAction = (output: any, context: __SerdeContext): RecommendedAction => {
  const contents: any = {};
  if (output[_AIc] != null) {
    contents[_AIc] = __expectString(output[_AIc]);
  }
  if (output[_Tit] != null) {
    contents[_Tit] = __expectString(output[_Tit]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_Ope] != null) {
    contents[_Ope] = __expectString(output[_Ope]);
  }
  if (String(output.Parameters).trim() === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_me] != null) {
    contents[_Pa] = de_RecommendedActionParameterList(__getArrayIfSingleItem(output[_Pa][_me]), context);
  }
  if (String(output.ApplyModes).trim() === "") {
    contents[_AMpp] = [];
  } else if (output[_AMpp] != null && output[_AMpp][_me] != null) {
    contents[_AMpp] = de_StringList(__getArrayIfSingleItem(output[_AMpp][_me]), context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_IDs] != null) {
    contents[_IDs] = de_IssueDetails(output[_IDs], context);
  }
  if (String(output.ContextAttributes).trim() === "") {
    contents[_CAo] = [];
  } else if (output[_CAo] != null && output[_CAo][_me] != null) {
    contents[_CAo] = de_ContextAttributeList(__getArrayIfSingleItem(output[_CAo][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecommendedActionList
 */
const de_RecommendedActionList = (output: any, context: __SerdeContext): RecommendedAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendedAction(entry, context);
    });
};

/**
 * deserializeAws_queryRecommendedActionParameter
 */
const de_RecommendedActionParameter = (output: any, context: __SerdeContext): RecommendedActionParameter => {
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
 * deserializeAws_queryRecommendedActionParameterList
 */
const de_RecommendedActionParameterList = (output: any, context: __SerdeContext): RecommendedActionParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendedActionParameter(entry, context);
    });
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
 * deserializeAws_queryReferenceDetails
 */
const de_ReferenceDetails = (output: any, context: __SerdeContext): ReferenceDetails => {
  const contents: any = {};
  if (output[_SRD] != null) {
    contents[_SRD] = de_ScalarReferenceDetails(output[_SRD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRegisterDBProxyTargetsResponse
 */
const de_RegisterDBProxyTargetsResponse = (output: any, context: __SerdeContext): RegisterDBProxyTargetsResponse => {
  const contents: any = {};
  if (String(output.DBProxyTargets).trim() === "") {
    contents[_DBPT] = [];
  } else if (output[_DBPT] != null && output[_DBPT][_me] != null) {
    contents[_DBPT] = de_TargetList(__getArrayIfSingleItem(output[_DBPT][_me]), context);
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
 * deserializeAws_queryReservedDBInstance
 */
const de_ReservedDBInstance = (output: any, context: __SerdeContext): ReservedDBInstance => {
  const contents: any = {};
  if (output[_RDBII] != null) {
    contents[_RDBII] = __expectString(output[_RDBII]);
  }
  if (output[_RDBIOI] != null) {
    contents[_RDBIOI] = __expectString(output[_RDBIOI]);
  }
  if (output[_DBIC] != null) {
    contents[_DBIC] = __expectString(output[_DBIC]);
  }
  if (output[_STta] != null) {
    contents[_STta] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STta]));
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
  if (output[_CCu] != null) {
    contents[_CCu] = __expectString(output[_CCu]);
  }
  if (output[_DBICn] != null) {
    contents[_DBICn] = __strictParseInt32(output[_DBICn]) as number;
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  if (output[_OT] != null) {
    contents[_OT] = __expectString(output[_OT]);
  }
  if (output[_MAZ] != null) {
    contents[_MAZ] = __parseBoolean(output[_MAZ]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (String(output.RecurringCharges).trim() === "") {
    contents[_RC] = [];
  } else if (output[_RC] != null && output[_RC][_RCe] != null) {
    contents[_RC] = de_RecurringChargeList(__getArrayIfSingleItem(output[_RC][_RCe]), context);
  }
  if (output[_RDBIA] != null) {
    contents[_RDBIA] = __expectString(output[_RDBIA]);
  }
  if (output[_LI] != null) {
    contents[_LI] = __expectString(output[_LI]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstanceAlreadyExistsFault
 */
const de_ReservedDBInstanceAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReservedDBInstanceAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstanceList
 */
const de_ReservedDBInstanceList = (output: any, context: __SerdeContext): ReservedDBInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedDBInstance(entry, context);
    });
};

/**
 * deserializeAws_queryReservedDBInstanceMessage
 */
const de_ReservedDBInstanceMessage = (output: any, context: __SerdeContext): ReservedDBInstanceMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.ReservedDBInstances).trim() === "") {
    contents[_RDBIes] = [];
  } else if (output[_RDBIes] != null && output[_RDBIes][_RDBIe] != null) {
    contents[_RDBIes] = de_ReservedDBInstanceList(__getArrayIfSingleItem(output[_RDBIes][_RDBIe]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstanceNotFoundFault
 */
const de_ReservedDBInstanceNotFoundFault = (output: any, context: __SerdeContext): ReservedDBInstanceNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstanceQuotaExceededFault
 */
const de_ReservedDBInstanceQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ReservedDBInstanceQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstancesOffering
 */
const de_ReservedDBInstancesOffering = (output: any, context: __SerdeContext): ReservedDBInstancesOffering => {
  const contents: any = {};
  if (output[_RDBIOI] != null) {
    contents[_RDBIOI] = __expectString(output[_RDBIOI]);
  }
  if (output[_DBIC] != null) {
    contents[_DBIC] = __expectString(output[_DBIC]);
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
  if (output[_CCu] != null) {
    contents[_CCu] = __expectString(output[_CCu]);
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  if (output[_OT] != null) {
    contents[_OT] = __expectString(output[_OT]);
  }
  if (output[_MAZ] != null) {
    contents[_MAZ] = __parseBoolean(output[_MAZ]);
  }
  if (String(output.RecurringCharges).trim() === "") {
    contents[_RC] = [];
  } else if (output[_RC] != null && output[_RC][_RCe] != null) {
    contents[_RC] = de_RecurringChargeList(__getArrayIfSingleItem(output[_RC][_RCe]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstancesOfferingList
 */
const de_ReservedDBInstancesOfferingList = (output: any, context: __SerdeContext): ReservedDBInstancesOffering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedDBInstancesOffering(entry, context);
    });
};

/**
 * deserializeAws_queryReservedDBInstancesOfferingMessage
 */
const de_ReservedDBInstancesOfferingMessage = (
  output: any,
  context: __SerdeContext
): ReservedDBInstancesOfferingMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.ReservedDBInstancesOfferings).trim() === "") {
    contents[_RDBIO] = [];
  } else if (output[_RDBIO] != null && output[_RDBIO][_RDBIOe] != null) {
    contents[_RDBIO] = de_ReservedDBInstancesOfferingList(__getArrayIfSingleItem(output[_RDBIO][_RDBIOe]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstancesOfferingNotFoundFault
 */
const de_ReservedDBInstancesOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedDBInstancesOfferingNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryRestoreDBClusterFromS3Result
 */
const de_RestoreDBClusterFromS3Result = (output: any, context: __SerdeContext): RestoreDBClusterFromS3Result => {
  const contents: any = {};
  if (output[_DBC] != null) {
    contents[_DBC] = de_DBCluster(output[_DBC], context);
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
 * deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult
 */
const de_RestoreDBInstanceFromDBSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreDBInstanceFromDBSnapshotResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreDBInstanceFromS3Result
 */
const de_RestoreDBInstanceFromS3Result = (output: any, context: __SerdeContext): RestoreDBInstanceFromS3Result => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreDBInstanceToPointInTimeResult
 */
const de_RestoreDBInstanceToPointInTimeResult = (
  output: any,
  context: __SerdeContext
): RestoreDBInstanceToPointInTimeResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreWindow
 */
const de_RestoreWindow = (output: any, context: __SerdeContext): RestoreWindow => {
  const contents: any = {};
  if (output[_ETa] != null) {
    contents[_ETa] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ETa]));
  }
  if (output[_LT] != null) {
    contents[_LT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LT]));
  }
  return contents;
};

/**
 * deserializeAws_queryRevokeDBSecurityGroupIngressResult
 */
const de_RevokeDBSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): RevokeDBSecurityGroupIngressResult => {
  const contents: any = {};
  if (output[_DBSGe] != null) {
    contents[_DBSGe] = de_DBSecurityGroup(output[_DBSGe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryScalarReferenceDetails
 */
const de_ScalarReferenceDetails = (output: any, context: __SerdeContext): ScalarReferenceDetails => {
  const contents: any = {};
  if (output[_Val] != null) {
    contents[_Val] = __strictParseFloat(output[_Val]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryScalingConfigurationInfo
 */
const de_ScalingConfigurationInfo = (output: any, context: __SerdeContext): ScalingConfigurationInfo => {
  const contents: any = {};
  if (output[_MCi] != null) {
    contents[_MCi] = __strictParseInt32(output[_MCi]) as number;
  }
  if (output[_MCa] != null) {
    contents[_MCa] = __strictParseInt32(output[_MCa]) as number;
  }
  if (output[_AP] != null) {
    contents[_AP] = __parseBoolean(output[_AP]);
  }
  if (output[_SUAP] != null) {
    contents[_SUAP] = __strictParseInt32(output[_SUAP]) as number;
  }
  if (output[_TAi] != null) {
    contents[_TAi] = __expectString(output[_TAi]);
  }
  if (output[_SBT] != null) {
    contents[_SBT] = __strictParseInt32(output[_SBT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryServerlessV2FeaturesSupport
 */
const de_ServerlessV2FeaturesSupport = (output: any, context: __SerdeContext): ServerlessV2FeaturesSupport => {
  const contents: any = {};
  if (output[_MCi] != null) {
    contents[_MCi] = __strictParseFloat(output[_MCi]) as number;
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
  if (output[_MCi] != null) {
    contents[_MCi] = __strictParseFloat(output[_MCi]) as number;
  }
  if (output[_MCa] != null) {
    contents[_MCa] = __strictParseFloat(output[_MCa]) as number;
  }
  if (output[_SUAP] != null) {
    contents[_SUAP] = __strictParseInt32(output[_SUAP]) as number;
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
 * deserializeAws_querySourceClusterNotSupportedFault
 */
const de_SourceClusterNotSupportedFault = (output: any, context: __SerdeContext): SourceClusterNotSupportedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceDatabaseNotSupportedFault
 */
const de_SourceDatabaseNotSupportedFault = (output: any, context: __SerdeContext): SourceDatabaseNotSupportedFault => {
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
 * deserializeAws_querySourceRegion
 */
const de_SourceRegion = (output: any, context: __SerdeContext): SourceRegion => {
  const contents: any = {};
  if (output[_RNe] != null) {
    contents[_RNe] = __expectString(output[_RNe]);
  }
  if (output[_End] != null) {
    contents[_End] = __expectString(output[_End]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SDBIABRu] != null) {
    contents[_SDBIABRu] = __parseBoolean(output[_SDBIABRu]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceRegionList
 */
const de_SourceRegionList = (output: any, context: __SerdeContext): SourceRegion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SourceRegion(entry, context);
    });
};

/**
 * deserializeAws_querySourceRegionMessage
 */
const de_SourceRegionMessage = (output: any, context: __SerdeContext): SourceRegionMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.SourceRegions).trim() === "") {
    contents[_SRo] = [];
  } else if (output[_SRo] != null && output[_SRo][_SR] != null) {
    contents[_SRo] = de_SourceRegionList(__getArrayIfSingleItem(output[_SRo][_SR]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryStartActivityStreamResponse
 */
const de_StartActivityStreamResponse = (output: any, context: __SerdeContext): StartActivityStreamResponse => {
  const contents: any = {};
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_KSN] != null) {
    contents[_KSN] = __expectString(output[_KSN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
  }
  if (output[_ENAFI] != null) {
    contents[_ENAFI] = __parseBoolean(output[_ENAFI]);
  }
  if (output[_AI] != null) {
    contents[_AI] = __parseBoolean(output[_AI]);
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
 * deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationResult
 */
const de_StartDBInstanceAutomatedBackupsReplicationResult = (
  output: any,
  context: __SerdeContext
): StartDBInstanceAutomatedBackupsReplicationResult => {
  const contents: any = {};
  if (output[_DBIABn] != null) {
    contents[_DBIABn] = de_DBInstanceAutomatedBackup(output[_DBIABn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStartDBInstanceResult
 */
const de_StartDBInstanceResult = (output: any, context: __SerdeContext): StartDBInstanceResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStopActivityStreamResponse
 */
const de_StopActivityStreamResponse = (output: any, context: __SerdeContext): StopActivityStreamResponse => {
  const contents: any = {};
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_KSN] != null) {
    contents[_KSN] = __expectString(output[_KSN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
 * deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationResult
 */
const de_StopDBInstanceAutomatedBackupsReplicationResult = (
  output: any,
  context: __SerdeContext
): StopDBInstanceAutomatedBackupsReplicationResult => {
  const contents: any = {};
  if (output[_DBIABn] != null) {
    contents[_DBIABn] = de_DBInstanceAutomatedBackup(output[_DBIABn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStopDBInstanceResult
 */
const de_StopDBInstanceResult = (output: any, context: __SerdeContext): StopDBInstanceResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
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
 * deserializeAws_queryStorageTypeNotAvailableFault
 */
const de_StorageTypeNotAvailableFault = (output: any, context: __SerdeContext): StorageTypeNotAvailableFault => {
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
  if (output[_SIub] != null) {
    contents[_SIub] = __expectString(output[_SIub]);
  }
  if (output[_SAZu] != null) {
    contents[_SAZu] = de_AvailabilityZone(output[_SAZu], context);
  }
  if (output[_SO] != null) {
    contents[_SO] = de_Outpost(output[_SO], context);
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
 * deserializeAws_querySupportedEngineLifecycle
 */
const de_SupportedEngineLifecycle = (output: any, context: __SerdeContext): SupportedEngineLifecycle => {
  const contents: any = {};
  if (output[_LSN] != null) {
    contents[_LSN] = __expectString(output[_LSN]);
  }
  if (output[_LSSD] != null) {
    contents[_LSSD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LSSD]));
  }
  if (output[_LSED] != null) {
    contents[_LSED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LSED]));
  }
  return contents;
};

/**
 * deserializeAws_querySupportedEngineLifecycleList
 */
const de_SupportedEngineLifecycleList = (output: any, context: __SerdeContext): SupportedEngineLifecycle[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SupportedEngineLifecycle(entry, context);
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
 * deserializeAws_querySwitchoverBlueGreenDeploymentResponse
 */
const de_SwitchoverBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): SwitchoverBlueGreenDeploymentResponse => {
  const contents: any = {};
  if (output[_BGD] != null) {
    contents[_BGD] = de_BlueGreenDeployment(output[_BGD], context);
  }
  return contents;
};

/**
 * deserializeAws_querySwitchoverDetail
 */
const de_SwitchoverDetail = (output: any, context: __SerdeContext): SwitchoverDetail => {
  const contents: any = {};
  if (output[_SMo] != null) {
    contents[_SMo] = __expectString(output[_SMo]);
  }
  if (output[_TM] != null) {
    contents[_TM] = __expectString(output[_TM]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_querySwitchoverDetailList
 */
const de_SwitchoverDetailList = (output: any, context: __SerdeContext): SwitchoverDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SwitchoverDetail(entry, context);
    });
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
 * deserializeAws_querySwitchoverReadReplicaResult
 */
const de_SwitchoverReadReplicaResult = (output: any, context: __SerdeContext): SwitchoverReadReplicaResult => {
  const contents: any = {};
  if (output[_DBI] != null) {
    contents[_DBI] = de_DBInstance(output[_DBI], context);
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
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupList
 */
const de_TargetGroupList = (output: any, context: __SerdeContext): DBProxyTargetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBProxyTargetGroup(entry, context);
    });
};

/**
 * deserializeAws_queryTargetHealth
 */
const de_TargetHealth = (output: any, context: __SerdeContext): TargetHealth => {
  const contents: any = {};
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_Rea] != null) {
    contents[_Rea] = __expectString(output[_Rea]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetList
 */
const de_TargetList = (output: any, context: __SerdeContext): DBProxyTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DBProxyTarget(entry, context);
    });
};

/**
 * deserializeAws_queryTenantDatabase
 */
const de_TenantDatabase = (output: any, context: __SerdeContext): TenantDatabase => {
  const contents: any = {};
  if (output[_TDCT] != null) {
    contents[_TDCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TDCT]));
  }
  if (output[_DBII] != null) {
    contents[_DBII] = __expectString(output[_DBII]);
  }
  if (output[_TDBN] != null) {
    contents[_TDBN] = __expectString(output[_TDBN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_DRI] != null) {
    contents[_DRI] = __expectString(output[_DRI]);
  }
  if (output[_TDRI] != null) {
    contents[_TDRI] = __expectString(output[_TDRI]);
  }
  if (output[_TDARN] != null) {
    contents[_TDARN] = __expectString(output[_TDARN]);
  }
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_NCSN] != null) {
    contents[_NCSN] = __expectString(output[_NCSN]);
  }
  if (output[_DP] != null) {
    contents[_DP] = __parseBoolean(output[_DP]);
  }
  if (output[_PMV] != null) {
    contents[_PMV] = de_TenantDatabasePendingModifiedValues(output[_PMV], context);
  }
  if (output[_MUS] != null) {
    contents[_MUS] = de_MasterUserSecret(output[_MUS], context);
  }
  if (String(output.TagList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_Tag] != null) {
    contents[_TL] = de_TagList(__getArrayIfSingleItem(output[_TL][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTenantDatabaseAlreadyExistsFault
 */
const de_TenantDatabaseAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): TenantDatabaseAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTenantDatabaseNotFoundFault
 */
const de_TenantDatabaseNotFoundFault = (output: any, context: __SerdeContext): TenantDatabaseNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTenantDatabasePendingModifiedValues
 */
const de_TenantDatabasePendingModifiedValues = (
  output: any,
  context: __SerdeContext
): TenantDatabasePendingModifiedValues => {
  const contents: any = {};
  if (output[_MUP] != null) {
    contents[_MUP] = __expectString(output[_MUP]);
  }
  if (output[_TDBN] != null) {
    contents[_TDBN] = __expectString(output[_TDBN]);
  }
  return contents;
};

/**
 * deserializeAws_queryTenantDatabaseQuotaExceededFault
 */
const de_TenantDatabaseQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): TenantDatabaseQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTenantDatabasesList
 */
const de_TenantDatabasesList = (output: any, context: __SerdeContext): TenantDatabase[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TenantDatabase(entry, context);
    });
};

/**
 * deserializeAws_queryTenantDatabasesMessage
 */
const de_TenantDatabasesMessage = (output: any, context: __SerdeContext): TenantDatabasesMessage => {
  const contents: any = {};
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (String(output.TenantDatabases).trim() === "") {
    contents[_TDe] = [];
  } else if (output[_TDe] != null && output[_TDe][_TD] != null) {
    contents[_TDe] = de_TenantDatabasesList(__getArrayIfSingleItem(output[_TDe][_TD]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTimezone
 */
const de_Timezone = (output: any, context: __SerdeContext): Timezone => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedDBEngineVersionFault
 */
const de_UnsupportedDBEngineVersionFault = (output: any, context: __SerdeContext): UnsupportedDBEngineVersionFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (String(output.SupportedEngineModes).trim() === "") {
    contents[_SEM] = [];
  } else if (output[_SEM] != null && output[_SEM][_me] != null) {
    contents[_SEM] = de_EngineModeList(__getArrayIfSingleItem(output[_SEM][_me]), context);
  }
  if (output[_SPQ] != null) {
    contents[_SPQ] = __parseBoolean(output[_SPQ]);
  }
  if (output[_SGD] != null) {
    contents[_SGD] = __parseBoolean(output[_SGD]);
  }
  if (output[_SB] != null) {
    contents[_SB] = __parseBoolean(output[_SB]);
  }
  if (output[_SLD] != null) {
    contents[_SLD] = __parseBoolean(output[_SLD]);
  }
  if (output[_SLWF] != null) {
    contents[_SLWF] = __parseBoolean(output[_SLWF]);
  }
  if (output[_SIup] != null) {
    contents[_SIup] = __parseBoolean(output[_SIup]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserAuthConfigInfo
 */
const de_UserAuthConfigInfo = (output: any, context: __SerdeContext): UserAuthConfigInfo => {
  const contents: any = {};
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_ASu] != null) {
    contents[_ASu] = __expectString(output[_ASu]);
  }
  if (output[_SAe] != null) {
    contents[_SAe] = __expectString(output[_SAe]);
  }
  if (output[_IAMA] != null) {
    contents[_IAMA] = __expectString(output[_IAMA]);
  }
  if (output[_CPAT] != null) {
    contents[_CPAT] = __expectString(output[_CPAT]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserAuthConfigInfoList
 */
const de_UserAuthConfigInfoList = (output: any, context: __SerdeContext): UserAuthConfigInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserAuthConfigInfo(entry, context);
    });
};

/**
 * deserializeAws_queryValidDBInstanceModificationsMessage
 */
const de_ValidDBInstanceModificationsMessage = (
  output: any,
  context: __SerdeContext
): ValidDBInstanceModificationsMessage => {
  const contents: any = {};
  if (String(output.Storage).trim() === "") {
    contents[_Sto] = [];
  } else if (output[_Sto] != null && output[_Sto][_VSO] != null) {
    contents[_Sto] = de_ValidStorageOptionsList(__getArrayIfSingleItem(output[_Sto][_VSO]), context);
  }
  if (String(output.ValidProcessorFeatures).trim() === "") {
    contents[_VPF] = [];
  } else if (output[_VPF] != null && output[_VPF][_APFv] != null) {
    contents[_VPF] = de_AvailableProcessorFeatureList(__getArrayIfSingleItem(output[_VPF][_APFv]), context);
  }
  if (output[_SDLV] != null) {
    contents[_SDLV] = __parseBoolean(output[_SDLV]);
  }
  return contents;
};

/**
 * deserializeAws_queryValidStorageOptions
 */
const de_ValidStorageOptions = (output: any, context: __SerdeContext): ValidStorageOptions => {
  const contents: any = {};
  if (output[_STt] != null) {
    contents[_STt] = __expectString(output[_STt]);
  }
  if (String(output.StorageSize).trim() === "") {
    contents[_SSt] = [];
  } else if (output[_SSt] != null && output[_SSt][_Ra] != null) {
    contents[_SSt] = de_RangeList(__getArrayIfSingleItem(output[_SSt][_Ra]), context);
  }
  if (String(output.ProvisionedIops).trim() === "") {
    contents[_PI] = [];
  } else if (output[_PI] != null && output[_PI][_Ra] != null) {
    contents[_PI] = de_RangeList(__getArrayIfSingleItem(output[_PI][_Ra]), context);
  }
  if (String(output.IopsToStorageRatio).trim() === "") {
    contents[_ITSR] = [];
  } else if (output[_ITSR] != null && output[_ITSR][_DR] != null) {
    contents[_ITSR] = de_DoubleRangeList(__getArrayIfSingleItem(output[_ITSR][_DR]), context);
  }
  if (String(output.ProvisionedStorageThroughput).trim() === "") {
    contents[_PST] = [];
  } else if (output[_PST] != null && output[_PST][_Ra] != null) {
    contents[_PST] = de_RangeList(__getArrayIfSingleItem(output[_PST][_Ra]), context);
  }
  if (String(output.StorageThroughputToIopsRatio).trim() === "") {
    contents[_STTIR] = [];
  } else if (output[_STTIR] != null && output[_STTIR][_DR] != null) {
    contents[_STTIR] = de_DoubleRangeList(__getArrayIfSingleItem(output[_STTIR][_DR]), context);
  }
  if (output[_SSA] != null) {
    contents[_SSA] = __parseBoolean(output[_SSA]);
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
const _ABRPA = "AwsBackupRecoveryPointArn";
const _ADBSGI = "AuthorizeDBSecurityGroupIngress";
const _ADL = "AllowDataLoss";
const _ADP = "AdditionalDataPending";
const _AEC = "AdditionalEncryptionContext";
const _AEMC = "AllowEngineModeChange";
const _AI = "ApplyImmediately";
const _AIc = "ActionId";
const _AId = "AdditionalInfo";
const _AM = "AutomationMode";
const _AMVU = "AutoMinorVersionUpgrade";
const _AMVUl = "AllowMajorVersionUpgrade";
const _AMp = "ApplyMethod";
const _AMpp = "ApplyModes";
const _AN = "AttributeName";
const _AP = "AutoPause";
const _APF = "AvailableProcessorFeatures";
const _APFv = "AvailableProcessorFeature";
const _APMA = "ApplyPendingMaintenanceAction";
const _APS = "AuditPolicyState";
const _AQ = "AccountQuotas";
const _AQN = "AccountQuotaName";
const _AQc = "AccountQuota";
const _AR = "AssociatedRoles";
const _ART = "AutomaticRestartTime";
const _ARTDBC = "AddRoleToDBCluster";
const _ARTDBI = "AddRoleToDBInstance";
const _AS = "AllocatedStorage";
const _ASA = "AuthSecretArn";
const _ASENAFI = "ActivityStreamEngineNativeAuditFieldsIncluded";
const _ASITS = "AddSourceIdentifierToSubscription";
const _ASKKI = "ActivityStreamKmsKeyId";
const _ASKSN = "ActivityStreamKinesisStreamName";
const _ASM = "ActivityStreamMode";
const _ASPS = "ActivityStreamPolicyStatus";
const _ASS = "ActivityStreamStatus";
const _ASu = "AuthScheme";
const _AT = "ApplyType";
const _ATTR = "AddTagsToResource";
const _AU = "AutoUpgrade";
const _AV = "AllowedValues";
const _AVANVIM = "AllowsVpcAndNonVpcInstanceMemberships";
const _AVl = "AllowedValue";
const _AVt = "AttributeValues";
const _AVtt = "AttributeValue";
const _AZ = "AvailabilityZones";
const _AZG = "AvailabilityZoneGroup";
const _AZv = "AvailabilityZone";
const _Ad = "Address";
const _An = "Analysis";
const _Ar = "Arn";
const _Au = "Auth";
const _BCCR = "BacktrackConsumedChangeRecords";
const _BDBC = "BacktrackDBCluster";
const _BF = "BacktrackedFrom";
const _BGD = "BlueGreenDeployment";
const _BGDI = "BlueGreenDeploymentIdentifier";
const _BGDN = "BlueGreenDeploymentName";
const _BGDl = "BlueGreenDeployments";
const _BI = "BacktrackIdentifier";
const _BRCT = "BacktrackRequestCreationTime";
const _BRP = "BackupRetentionPeriod";
const _BT = "BacktrackTo";
const _BTa = "BackupTarget";
const _BW = "BacktrackWindow";
const _C = "Capacity";
const _CA = "CertificateArn";
const _CAC = "CrossAccountClone";
const _CACI = "CACertificateIdentifier";
const _CAD = "CurrentApplyDate";
const _CAI = "CAIdentifier";
const _CAIu = "CustomerAwsId";
const _CAo = "ContextAttributes";
const _CBGD = "CreateBlueGreenDeployment";
const _CBT = "ConnectionBorrowTimeout";
const _CC = "CurrentCapacity";
const _CCA = "CopyableCrossAccount";
const _CCDBEV = "CreateCustomDBEngineVersion";
const _CCT = "ClusterCreateTime";
const _CCu = "CurrencyCode";
const _CD = "CertificateDetails";
const _CDBC = "CreateDBCluster";
const _CDBCE = "CreateDBClusterEndpoint";
const _CDBCPG = "CopyDBClusterParameterGroup";
const _CDBCPGr = "CreateDBClusterParameterGroup";
const _CDBCS = "CopyDBClusterSnapshot";
const _CDBCSr = "CreateDBClusterSnapshot";
const _CDBEVM = "CustomDBEngineVersionManifest";
const _CDBI = "CreateDBInstance";
const _CDBIRR = "CreateDBInstanceReadReplica";
const _CDBP = "CreateDBProxy";
const _CDBPE = "CreateDBProxyEndpoint";
const _CDBPG = "CopyDBParameterGroup";
const _CDBPGr = "CreateDBParameterGroup";
const _CDBS = "CopyDBSnapshot";
const _CDBSG = "CreateDBSecurityGroup";
const _CDBSGr = "CreateDBShardGroup";
const _CDBSGre = "CreateDBSubnetGroup";
const _CDBSr = "CreateDBSnapshot";
const _CDr = "CreatedDate";
const _CE = "CustomEndpoints";
const _CES = "CreateEventSubscription";
const _CET = "CancelExportTask";
const _CETu = "CustomEndpointType";
const _CGC = "CreateGlobalCluster";
const _CGI = "CloneGroupId";
const _CI = "CreateIntegration";
const _CIDRIP = "CIDRIP";
const _CIIP = "CustomIamInstanceProfile";
const _CIe = "CertificateIdentifier";
const _CLEC = "CloudwatchLogsExportConfiguration";
const _CO = "CustomerOverride";
const _COG = "CopyOptionGroup";
const _COGr = "CreateOptionGroup";
const _COIE = "CustomerOwnedIpEnabled";
const _COVT = "CustomerOverrideValidTill";
const _CPAT = "ClientPasswordAuthType";
const _CPC = "ConnectionPoolConfig";
const _CR = "ComputeRedundancy";
const _CRR = "CertificateRotationRestart";
const _CS = "CharacterSet";
const _CSD = "CharacterSetDescription";
const _CSI = "CustSubscriptionId";
const _CSN = "CharacterSetName";
const _CST = "ClusterScalabilityType";
const _CT = "CopyTags";
const _CTD = "CreateTenantDatabase";
const _CTTS = "CopyTagsToSnapshot";
const _CTe = "CertificateType";
const _CTo = "CopyTimestamp";
const _CTr = "CreateTime";
const _CTre = "CreatedTime";
const _Ca = "Category";
const _Ce = "Certificates";
const _Cer = "Certificate";
const _D = "Description";
const _DAA = "DescribeAccountAttributes";
const _DAB = "DeleteAutomatedBackups";
const _DAS = "DefaultAuthScheme";
const _DASA = "DomainAuthSecretArn";
const _DBC = "DBCluster";
const _DBCA = "DBClusterArn";
const _DBCAB = "DBClusterAutomatedBackups";
const _DBCABA = "DBClusterAutomatedBackupsArn";
const _DBCABl = "DBClusterAutomatedBackup";
const _DBCB = "DBClusterBacktracks";
const _DBCBl = "DBClusterBacktrack";
const _DBCE = "DBClusterEndpoints";
const _DBCEA = "DBClusterEndpointArn";
const _DBCEI = "DBClusterEndpointIdentifier";
const _DBCEL = "DBClusterEndpointList";
const _DBCERI = "DBClusterEndpointResourceIdentifier";
const _DBCI = "DBClusterIdentifier";
const _DBCIC = "DBClusterInstanceClass";
const _DBCIl = "DBClusterIdentifiers";
const _DBCM = "DBClusterMembers";
const _DBCMl = "DBClusterMember";
const _DBCOG = "DBClusterOptionGroup";
const _DBCOGM = "DBClusterOptionGroupMemberships";
const _DBCOGN = "DBClusterOptionGroupName";
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
const _DBCSIl = "DBClusterStatusInfo";
const _DBCSl = "DBClusterSnapshots";
const _DBCl = "DBClusters";
const _DBED = "DBEngineDescription";
const _DBEMT = "DBEngineMediaType";
const _DBEV = "DBEngineVersions";
const _DBEVA = "DBEngineVersionArn";
const _DBEVD = "DBEngineVersionDescription";
const _DBEVn = "DBEngineVersion";
const _DBGD = "DeleteBlueGreenDeployment";
const _DBGDe = "DescribeBlueGreenDeployments";
const _DBI = "DBInstance";
const _DBIA = "DBInstanceArn";
const _DBIAB = "DBInstanceAutomatedBackups";
const _DBIABA = "DBInstanceAutomatedBackupsArn";
const _DBIABR = "DBInstanceAutomatedBackupsReplications";
const _DBIABRn = "DBInstanceAutomatedBackupsReplication";
const _DBIABn = "DBInstanceAutomatedBackup";
const _DBIC = "DBInstanceClass";
const _DBICn = "DBInstanceCount";
const _DBII = "DBInstanceIdentifier";
const _DBIIn = "DBInstanceIdentifiers";
const _DBIPGN = "DBInstanceParameterGroupName";
const _DBIR = "DBInstanceRole";
const _DBIS = "DBInstanceStatus";
const _DBISI = "DBInstanceStatusInfo";
const _DBIn = "DBInstances";
const _DBMEV = "DBMajorEngineVersions";
const _DBMEVa = "DBMajorEngineVersion";
const _DBN = "DBName";
const _DBP = "DBProxy";
const _DBPA = "DBProxyArn";
const _DBPE = "DBProxyEndpoint";
const _DBPEA = "DBProxyEndpointArn";
const _DBPEN = "DBProxyEndpointName";
const _DBPEr = "DBProxyEndpoints";
const _DBPG = "DBParameterGroup";
const _DBPGA = "DBParameterGroupArn";
const _DBPGF = "DBParameterGroupFamily";
const _DBPGN = "DBParameterGroupName";
const _DBPGa = "DBParameterGroups";
const _DBPN = "DBProxyName";
const _DBPNo = "DBPortNumber";
const _DBPT = "DBProxyTargets";
const _DBPTG = "DBProxyTargetGroup";
const _DBPr = "DBProxies";
const _DBR = "DBRecommendation";
const _DBRe = "DBRecommendations";
const _DBS = "DBSnapshot";
const _DBSA = "DBSnapshotArn";
const _DBSAR = "DBSnapshotAttributesResult";
const _DBSAn = "DBSnapshotAttributes";
const _DBSAna = "DBSnapshotAttribute";
const _DBSG = "DBSecurityGroups";
const _DBSGA = "DBSecurityGroupArn";
const _DBSGAh = "DBShardGroupArn";
const _DBSGAu = "DBSubnetGroupArn";
const _DBSGD = "DBSecurityGroupDescription";
const _DBSGDu = "DBSubnetGroupDescription";
const _DBSGI = "DBShardGroupIdentifier";
const _DBSGM = "DBSecurityGroupMemberships";
const _DBSGN = "DBSecurityGroupName";
const _DBSGNu = "DBSubnetGroupName";
const _DBSGRI = "DBShardGroupResourceId";
const _DBSGe = "DBSecurityGroup";
const _DBSGh = "DBShardGroups";
const _DBSGha = "DBShardGroup";
const _DBSGu = "DBSubnetGroup";
const _DBSGub = "DBSubnetGroups";
const _DBSI = "DBSystemId";
const _DBSIn = "DBSnapshotIdentifier";
const _DBSTD = "DBSnapshotTenantDatabases";
const _DBSTDARN = "DBSnapshotTenantDatabaseARN";
const _DBSTDn = "DBSnapshotTenantDatabase";
const _DBSn = "DBSnapshots";
const _DC = "DescribeCertificates";
const _DCDBEV = "DeleteCustomDBEngineVersion";
const _DCFNL = "DefaultCertificateForNewLaunches";
const _DCI = "DbClusterIdentifier";
const _DCRI = "DbClusterResourceId";
const _DCS = "DefaultCharacterSet";
const _DD = "DisableDomain";
const _DDBC = "DeleteDBCluster";
const _DDBCAB = "DeleteDBClusterAutomatedBackup";
const _DDBCABe = "DescribeDBClusterAutomatedBackups";
const _DDBCB = "DescribeDBClusterBacktracks";
const _DDBCE = "DeleteDBClusterEndpoint";
const _DDBCEe = "DescribeDBClusterEndpoints";
const _DDBCP = "DescribeDBClusterParameters";
const _DDBCPG = "DeleteDBClusterParameterGroup";
const _DDBCPGe = "DescribeDBClusterParameterGroups";
const _DDBCS = "DeleteDBClusterSnapshot";
const _DDBCSA = "DescribeDBClusterSnapshotAttributes";
const _DDBCSe = "DescribeDBClusterSnapshots";
const _DDBCe = "DescribeDBClusters";
const _DDBEV = "DescribeDBEngineVersions";
const _DDBI = "DeleteDBInstance";
const _DDBIAB = "DeleteDBInstanceAutomatedBackup";
const _DDBIABe = "DescribeDBInstanceAutomatedBackups";
const _DDBIe = "DescribeDBInstances";
const _DDBLF = "DescribeDBLogFiles";
const _DDBLFD = "DescribeDBLogFilesDetails";
const _DDBLFP = "DownloadDBLogFilePortion";
const _DDBMEV = "DescribeDBMajorEngineVersions";
const _DDBP = "DeleteDBProxy";
const _DDBPE = "DeleteDBProxyEndpoint";
const _DDBPEe = "DescribeDBProxyEndpoints";
const _DDBPG = "DeleteDBParameterGroup";
const _DDBPGe = "DescribeDBParameterGroups";
const _DDBPT = "DeregisterDBProxyTargets";
const _DDBPTG = "DescribeDBProxyTargetGroups";
const _DDBPTe = "DescribeDBProxyTargets";
const _DDBPe = "DescribeDBParameters";
const _DDBPes = "DescribeDBProxies";
const _DDBR = "DescribeDBRecommendations";
const _DDBS = "DeleteDBSnapshot";
const _DDBSA = "DescribeDBSnapshotAttributes";
const _DDBSG = "DeleteDBSecurityGroup";
const _DDBSGe = "DeleteDBShardGroup";
const _DDBSGel = "DeleteDBSubnetGroup";
const _DDBSGes = "DescribeDBSecurityGroups";
const _DDBSGesc = "DescribeDBShardGroups";
const _DDBSGescr = "DescribeDBSubnetGroups";
const _DDBSTD = "DescribeDBSnapshotTenantDatabases";
const _DDBSe = "DescribeDBSnapshots";
const _DDI = "DomainDnsIps";
const _DE = "DescribeEvents";
const _DEC = "DescribeEventCategories";
const _DEDCP = "DescribeEngineDefaultClusterParameters";
const _DEDP = "DescribeEngineDefaultParameters";
const _DES = "DeleteEventSubscription";
const _DESe = "DescribeEventSubscriptions";
const _DET = "DescribeExportTasks";
const _DF = "DomainFqdn";
const _DFa = "DataFilter";
const _DGC = "DeleteGlobalCluster";
const _DGCe = "DescribeGlobalClusters";
const _DHE = "DisableHttpEndpoint";
const _DI = "DeleteIntegration";
const _DIAMRN = "DomainIAMRoleName";
const _DIFSBN = "DatabaseInstallationFilesS3BucketName";
const _DIFSP = "DatabaseInstallationFilesS3Prefix";
const _DIM = "DatabaseInsightsMode";
const _DIP = "DbInstancePort";
const _DIe = "DescribeIntegrations";
const _DIn = "DnsIps";
const _DL = "DebugLogging";
const _DLT = "DisableLogTypes";
const _DLV = "DedicatedLogVolume";
const _DM = "DomainMemberships";
const _DMo = "DomainMembership";
const _DN = "DatabaseName";
const _DO = "DomainOu";
const _DODBIO = "DescribeOrderableDBInstanceOptions";
const _DOG = "DeleteOptionGroup";
const _DOGO = "DescribeOptionGroupOptions";
const _DOGe = "DescribeOptionGroups";
const _DOe = "DefaultOnly";
const _DP = "DeletionProtection";
const _DPMA = "DescribePendingMaintenanceActions";
const _DPe = "DefaultPort";
const _DR = "DoubleRange";
const _DRDBI = "DescribeReservedDBInstances";
const _DRDBIO = "DescribeReservedDBInstancesOfferings";
const _DRI = "DbiResourceId";
const _DSR = "DescribeSourceRegions";
const _DT = "DeleteTarget";
const _DTD = "DeleteTenantDatabase";
const _DTDe = "DescribeTenantDatabases";
const _DTa = "DataType";
const _DTe = "DeleteTime";
const _DV = "DefaultValue";
const _DVDBIM = "DescribeValidDBInstanceModifications";
const _Da = "Date";
const _De = "Detection";
const _Di = "Dimensions";
const _Do = "Domain";
const _Du = "Duration";
const _E = "Engine";
const _EBT = "EarliestBacktrackTime";
const _EC = "EventCategories";
const _ECL = "EventCategoriesList";
const _ECLE = "EnableCloudwatchLogsExports";
const _ECLEn = "EnabledCloudwatchLogsExports";
const _ECM = "EventCategoriesMap";
const _ECML = "EventCategoriesMapList";
const _ECOI = "EnableCustomerOwnedIp";
const _ECSG = "EC2SecurityGroups";
const _ECSGI = "EC2SecurityGroupId";
const _ECSGN = "EC2SecurityGroupName";
const _ECSGOI = "EC2SecurityGroupOwnerId";
const _ECSGe = "EC2SecurityGroup";
const _ECr = "ErrorCode";
const _ECv = "EventCategory";
const _ED = "EngineDefaults";
const _EF = "EngineFamily";
const _EGWF = "EnableGlobalWriteForwarding";
const _EHE = "EnableHttpEndpoint";
const _EIAMDA = "EnableIAMDatabaseAuthentication";
const _ELD = "EnableLimitlessDatabase";
const _ELS = "EngineLifecycleSupport";
const _ELT = "EnableLogTypes";
const _ELTx = "ExportableLogTypes";
const _ELWF = "EnableLocalWriteForwarding";
const _EM = "ExcludedMembers";
const _EMRA = "EnhancedMonitoringResourceArn";
const _EMn = "EngineMode";
const _EMr = "ErrorMessage";
const _EN = "EngineName";
const _ENAFI = "EngineNativeAuditFieldsIncluded";
const _ENT = "EndpointNetworkType";
const _EO = "ExportOnly";
const _EPI = "EnablePerformanceInsights";
const _ERT = "EarliestRestorableTime";
const _ES = "EventSubscription";
const _ESA = "EventSubscriptionArn";
const _ESL = "EventSubscriptionsList";
const _ET = "EndpointType";
const _ETI = "ExportTaskIdentifier";
const _ETa = "EarliestTime";
const _ETn = "EndTime";
const _ETx = "ExportTasks";
const _ETxp = "ExportTask";
const _EV = "EngineVersion";
const _En = "Enabled";
const _Enc = "Encrypted";
const _End = "Endpoint";
const _Er = "Errors";
const _Ev = "Events";
const _Eve = "Event";
const _F = "Force";
const _FAD = "ForcedApplyDate";
const _FC = "FilenameContains";
const _FCa = "FailureCause";
const _FDBC = "FailoverDBCluster";
const _FDBSI = "FinalDBSnapshotIdentifier";
const _FDCA = "FromDbClusterArn";
const _FF = "ForceFailover";
const _FGC = "FailoverGlobalCluster";
const _FLW = "FileLastWritten";
const _FN = "FeatureName";
const _FP = "FixedPrice";
const _FQDN = "FQDN";
const _FS = "FileSize";
const _FSa = "FailoverState";
const _Fi = "Filters";
const _Fr = "From";
const _G = "Group";
const _GB = "GroupBy";
const _GC = "GlobalCluster";
const _GCA = "GlobalClusterArn";
const _GCI = "GlobalClusterIdentifier";
const _GCM = "GlobalClusterMembers";
const _GCMl = "GlobalClusterMember";
const _GCRI = "GlobalClusterResourceId";
const _GCl = "GlobalClusters";
const _GWFR = "GlobalWriteForwardingRequested";
const _GWFS = "GlobalWriteForwardingStatus";
const _HEE = "HttpEndpointEnabled";
const _HZI = "HostedZoneId";
const _I = "Iops";
const _IA = "IncludeAll";
const _IAMA = "IAMAuth";
const _IAMDAE = "IAMDatabaseAuthenticationEnabled";
const _IAMRN = "IAMRoleName";
const _IAn = "IntegrationArn";
const _IC = "IsCollection";
const _ICT = "IdleClientTimeout";
const _ICTn = "InstanceCreateTime";
const _ICW = "IsClusterWriter";
const _ID = "IsDefault";
const _IDLA = "IsDataLossAllowed";
const _IDs = "IssueDetails";
const _IE = "IntegrationError";
const _II = "ImageId";
const _IIn = "IntegrationIdentifier";
const _IM = "IsModifiable";
const _IMVU = "IsMajorVersionUpgrade";
const _IN = "IntegrationName";
const _IOONAMT = "IOOptimizedNextAllowedModificationTime";
const _IP = "IncludePublic";
const _IPR = "IPRanges";
const _IPRa = "IPRange";
const _IQ = "InitQuery";
const _IR = "IsRequired";
const _IRA = "IamRoleArn";
const _IS = "IncludeShared";
const _ISCUA = "IsStorageConfigUpgradeAvailable";
const _ISI = "InterconnectSubnetId";
const _ITSR = "IopsToStorageRatio";
const _IW = "IsWriter";
const _Im = "Image";
const _Imp = "Impact";
const _In = "Integrations";
const _Int = "Integration";
const _K = "Key";
const _KKI = "KmsKeyId";
const _KMSKI = "KMSKeyId";
const _KSN = "KinesisStreamName";
const _L = "Locale";
const _LD = "LimitlessDatabase";
const _LE = "ListenerEndpoint";
const _LFD = "LogFileData";
const _LFN = "LogFileName";
const _LI = "LeaseId";
const _LM = "LicenseModel";
const _LRT = "LatestRestorableTime";
const _LSCS = "ListSupportedCharacterSets";
const _LSED = "LifecycleSupportEndDate";
const _LSN = "LifecycleSupportName";
const _LSSD = "LifecycleSupportStartDate";
const _LST = "ListSupportedTimezones";
const _LT = "LatestTime";
const _LTFR = "ListTagsForResource";
const _LTTD = "LogTypesToDisable";
const _LTTE = "LogTypesToEnable";
const _LUA = "LastUpdatedAfter";
const _LUB = "LastUpdatedBefore";
const _LW = "LastWritten";
const _LWFS = "LocalWriteForwardingStatus";
const _Li = "Links";
const _Lim = "Limit";
const _M = "Manifest";
const _MACU = "MaxACU";
const _MACUi = "MinACU";
const _MAS = "ModifyActivityStream";
const _MASa = "MaxAllocatedStorage";
const _MAZ = "MultiAZ";
const _MAZC = "MultiAZCapable";
const _MC = "ModifyCertificates";
const _MCDBCC = "ModifyCurrentDBClusterCapacity";
const _MCDBEV = "ModifyCustomDBEngineVersion";
const _MCP = "MaxConnectionsPercent";
const _MCa = "MaxCapacity";
const _MCi = "MinCapacity";
const _MDBC = "ModifyDBCluster";
const _MDBCE = "ModifyDBClusterEndpoint";
const _MDBCPG = "ModifyDBClusterParameterGroup";
const _MDBCSA = "ModifyDBClusterSnapshotAttribute";
const _MDBI = "ModifyDBInstance";
const _MDBP = "ModifyDBProxy";
const _MDBPE = "ModifyDBProxyEndpoint";
const _MDBPG = "ModifyDBParameterGroup";
const _MDBPTG = "ModifyDBProxyTargetGroup";
const _MDBR = "ModifyDBRecommendation";
const _MDBS = "ModifyDBSnapshot";
const _MDBSA = "ModifyDBSnapshotAttribute";
const _MDBSG = "ModifyDBShardGroup";
const _MDBSGo = "ModifyDBSubnetGroup";
const _MES = "ModifyEventSubscription";
const _MEV = "MajorEngineVersion";
const _MEVPAV = "MinimumEngineVersionPerAllowedValue";
const _MEVi = "MinimumEngineVersion";
const _MGC = "ModifyGlobalCluster";
const _MI = "ModifyIntegration";
const _MICP = "MaxIdleConnectionsPercent";
const _MIPDI = "MinIopsPerDbInstance";
const _MIPDIa = "MaxIopsPerDbInstance";
const _MIPG = "MinIopsPerGib";
const _MIPGa = "MaxIopsPerGib";
const _MIo = "MonitoringInterval";
const _MMUP = "ManageMasterUserPassword";
const _MOG = "ModifyOptionGroup";
const _MQ = "MetricQuery";
const _MR = "MaxRecords";
const _MRA = "MonitoringRoleArn";
const _MRACU = "MinRequiredACU";
const _MRMEV = "MinimumRequiredMinorEngineVersion";
const _MSS = "MinStorageSize";
const _MSSa = "MaxStorageSize";
const _MSTPDI = "MinStorageThroughputPerDbInstance";
const _MSTPDIa = "MaxStorageThroughputPerDbInstance";
const _MSTPI = "MinStorageThroughputPerIops";
const _MSTPIa = "MaxStorageThroughputPerIops";
const _MT = "MultiTenant";
const _MTD = "ModifyTenantDatabase";
const _MU = "MasterUsername";
const _MUAT = "MasterUserAuthenticationType";
const _MUP = "MasterUserPassword";
const _MUS = "MasterUserSecret";
const _MUSKKI = "MasterUserSecretKmsKeyId";
const _Ma = "Marker";
const _Max = "Max";
const _Me = "Message";
const _Met = "Metric";
const _Metr = "Metrics";
const _Mo = "Mode";
const _N = "Name";
const _NCSN = "NcharCharacterSetName";
const _NDBCI = "NewDBClusterIdentifier";
const _NDBII = "NewDBInstanceIdentifier";
const _NDBPEN = "NewDBProxyEndpointName";
const _NDBPN = "NewDBProxyName";
const _NGCI = "NewGlobalClusterIdentifier";
const _NN = "NewName";
const _NOL = "NumberOfLines";
const _NT = "NetworkType";
const _NTDBN = "NewTenantDBName";
const _No = "Normal";
const _O = "Options";
const _OC = "OutpostCapable";
const _OCN = "OptionConflictName";
const _OCW = "OptionsConflictsWith";
const _OD = "OptionDescription";
const _ODBIO = "OrderableDBInstanceOptions";
const _ODBIOr = "OrderableDBInstanceOption";
const _ODO = "OptionsDependedOn";
const _OG = "OptionGroup";
const _OGA = "OptionGroupArn";
const _OGD = "OptionGroupDescription";
const _OGL = "OptionGroupsList";
const _OGM = "OptionGroupMemberships";
const _OGMp = "OptionGroupMembership";
const _OGN = "OptionGroupName";
const _OGO = "OptionGroupOptions";
const _OGOS = "OptionGroupOptionSettings";
const _OGOSp = "OptionGroupOptionSetting";
const _OGOV = "OptionGroupOptionVersions";
const _OGOp = "OptionGroupOption";
const _OI = "OwnerId";
const _OIS = "OptInStatus";
const _OIT = "OptInType";
const _ON = "OptionName";
const _OS = "OptionSettings";
const _OSCT = "OriginalSnapshotCreateTime";
const _OSp = "OptionSetting";
const _OT = "OfferingType";
const _OTI = "OptionsToInclude";
const _OTR = "OptionsToRemove";
const _OU = "OU";
const _OV = "OptionVersion";
const _Op = "Option";
const _Ope = "Operation";
const _P = "Port";
const _PA = "PubliclyAccessible";
const _PAS = "ParameterApplyStatus";
const _PBW = "PreferredBackupWindow";
const _PC = "PendingCapacity";
const _PCLE = "PendingCloudwatchLogsExports";
const _PD = "ProductDescription";
const _PF = "ProcessorFeatures";
const _PFr = "ProcessorFeature";
const _PI = "ProvisionedIops";
const _PID = "PerformanceIssueDetails";
const _PIE = "PerformanceInsightsEnabled";
const _PIKMSKI = "PerformanceInsightsKMSKeyId";
const _PIMQ = "PerformanceInsightsMetricQuery";
const _PIRP = "PerformanceInsightsRetentionPeriod";
const _PMA = "PendingMaintenanceActions";
const _PMAD = "PendingMaintenanceActionDetails";
const _PMAe = "PendingMaintenanceAction";
const _PMV = "PendingModifiedValues";
const _PMW = "PreferredMaintenanceWindow";
const _PN = "ParameterName";
const _PP = "PercentProgress";
const _PR = "PortRequired";
const _PRDBIO = "PurchaseReservedDBInstancesOffering";
const _PRR = "PromoteReadReplica";
const _PRRDBC = "PromoteReadReplicaDBCluster";
const _PS = "PolicyStatus";
const _PST = "ProvisionedStorageThroughput";
const _PSU = "PreSignedUrl";
const _PT = "PromotionTier";
const _PV = "ParameterValue";
const _Pa = "Parameters";
const _Par = "Parameter";
const _Pe = "Persistent";
const _Per = "Permanent";
const _R = "Region";
const _RA = "RoleArn";
const _RAMEVU = "RequiresAutoMinorEngineVersionUpgrade";
const _RAP = "ResetAllParameters";
const _RAU = "RecommendedActionUpdates";
const _RAe = "ResourceArn";
const _RAec = "RecommendedActions";
const _RC = "RecurringCharges";
const _RCA = "RecurringChargeAmount";
const _RCCC = "RdsCustomClusterConfiguration";
const _RCF = "RecurringChargeFrequency";
const _RCO = "RemoveCustomerOverride";
const _RCe = "RecurringCharge";
const _RD = "ReferenceDetails";
const _RDBC = "RebootDBCluster";
const _RDBCFS = "RestoreDBClusterFromS3";
const _RDBCFSe = "RestoreDBClusterFromSnapshot";
const _RDBCPG = "ResetDBClusterParameterGroup";
const _RDBCTPIT = "RestoreDBClusterToPointInTime";
const _RDBI = "RebootDBInstance";
const _RDBIA = "ReservedDBInstanceArn";
const _RDBIFDBS = "RestoreDBInstanceFromDBSnapshot";
const _RDBIFS = "RestoreDBInstanceFromS3";
const _RDBII = "ReservedDBInstanceId";
const _RDBIO = "ReservedDBInstancesOfferings";
const _RDBIOI = "ReservedDBInstancesOfferingId";
const _RDBIOe = "ReservedDBInstancesOffering";
const _RDBITPIT = "RestoreDBInstanceToPointInTime";
const _RDBIe = "ReservedDBInstance";
const _RDBIes = "ReservedDBInstances";
const _RDBPG = "ResetDBParameterGroup";
const _RDBPT = "RegisterDBProxyTargets";
const _RDBSG = "RebootDBShardGroup";
const _RDBSGI = "RevokeDBSecurityGroupIngress";
const _RE = "ReaderEndpoint";
const _RFAMM = "ResumeFullAutomationModeMinutes";
const _RFAMT = "ResumeFullAutomationModeTime";
const _RFGC = "RemoveFromGlobalCluster";
const _RI = "ResourceIdentifier";
const _RIe = "RecommendationId";
const _RM = "ReplicaMode";
const _RMUP = "RotateMasterUserPassword";
const _RN = "ResourceName";
const _RNe = "RegionName";
const _RPMA = "ResourcePendingMaintenanceActions";
const _RRC = "ReadReplicaCapable";
const _RRDBCI = "ReadReplicaDBClusterIdentifiers";
const _RRDBCIe = "ReadReplicaDBClusterIdentifier";
const _RRDBII = "ReadReplicaDBInstanceIdentifiers";
const _RRDBIIe = "ReadReplicaDBInstanceIdentifier";
const _RRFDBC = "RemoveRoleFromDBCluster";
const _RRFDBI = "RemoveRoleFromDBInstance";
const _RRI = "ReadReplicaIdentifiers";
const _RRId = "RdsResourceId";
const _RRIe = "ReadReplicaIdentifier";
const _RRSDBCI = "ReadReplicaSourceDBClusterIdentifier";
const _RRSDBII = "ReadReplicaSourceDBInstanceIdentifier";
const _RSI = "ReplicationSourceIdentifier";
const _RSIFS = "RemoveSourceIdentifierFromSubscription";
const _RT = "RestoreType";
const _RTFR = "RemoveTagsFromResource";
const _RTLS = "RequireTLS";
const _RTT = "RestoreToTime";
const _RTe = "RestoreTime";
const _RW = "RestoreWindow";
const _Ra = "Range";
const _Re = "Recommendation";
const _Rea = "Reason";
const _Read = "Readers";
const _Ref = "References";
const _Ro = "Role";
const _S = "Source";
const _SA = "SourceArn";
const _SAI = "SourceAccountId";
const _SAS = "StartActivityStream";
const _SASM = "SupportedActivityStreamModes";
const _SASt = "StopActivityStream";
const _SAZ = "SnapshotAvailabilityZone";
const _SAZe = "SecondaryAvailabilityZone";
const _SAZu = "SubnetAvailabilityZone";
const _SAe = "SecretArn";
const _SB = "SupportsBabelfish";
const _SBGD = "SwitchoverBlueGreenDeployment";
const _SBN = "S3BucketName";
const _SBT = "SecondsBeforeTimeout";
const _SBu = "S3Bucket";
const _SC = "ScalingConfiguration";
const _SCACI = "SupportedCACertificateIdentifiers";
const _SCDEVI = "SourceCustomDbEngineVersionIdentifier";
const _SCI = "ScalingConfigurationInfo";
const _SCRWR = "SupportsCertificateRotationWithoutRestart";
const _SCS = "SupportedCharacterSets";
const _SCT = "SnapshotCreateTime";
const _SCTu = "SubscriptionCreationTime";
const _SCu = "SupportsClusters";
const _SD = "SwitchoverDetails";
const _SDBC = "StartDBCluster";
const _SDBCI = "SourceDBClusterIdentifier";
const _SDBCPGI = "SourceDBClusterParameterGroupIdentifier";
const _SDBCSA = "SourceDBClusterSnapshotArn";
const _SDBCSI = "SourceDBClusterSnapshotIdentifier";
const _SDBCt = "StopDBCluster";
const _SDBI = "StartDBInstance";
const _SDBIA = "SourceDBInstanceArn";
const _SDBIABA = "SourceDBInstanceAutomatedBackupsArn";
const _SDBIABR = "StartDBInstanceAutomatedBackupsReplication";
const _SDBIABRt = "StopDBInstanceAutomatedBackupsReplication";
const _SDBIABRu = "SupportsDBInstanceAutomatedBackupsReplication";
const _SDBII = "SourceDBInstanceIdentifier";
const _SDBIt = "StopDBInstance";
const _SDBPGI = "SourceDBParameterGroupIdentifier";
const _SDBSI = "SourceDBSnapshotIdentifier";
const _SDCRI = "SourceDbClusterResourceId";
const _SDLV = "SupportsDedicatedLogVolume";
const _SDRI = "SourceDbiResourceId";
const _SDT = "SnapshotDatabaseTime";
const _SDe = "SettingDescription";
const _SDt = "StatusDetails";
const _SDta = "StatisticsDetails";
const _SE = "StorageEncrypted";
const _SEL = "SupportedEngineLifecycles";
const _SELu = "SupportedEngineLifecycle";
const _SEM = "SupportedEngineModes";
const _SEMu = "SupportsEnhancedMonitoring";
const _SET = "StartExportTask";
const _SEV = "SourceEngineVersion";
const _SEo = "SourceEngine";
const _SFN = "SupportedFeatureNames";
const _SFS = "SkipFinalSnapshot";
const _SG = "SecurityGroups";
const _SGC = "SwitchoverGlobalCluster";
const _SGD = "SupportsGlobalDatabases";
const _SGS = "SubnetGroupStatus";
const _SHE = "SupportsHttpEndpoint";
const _SI = "SourceIdentifier";
const _SIAMDA = "SupportsIAMDatabaseAuthentication";
const _SIL = "SourceIdsList";
const _SIRA = "S3IngestionRoleArn";
const _SIn = "SnapshotIdentifier";
const _SIo = "SourceIds";
const _SIou = "SourceId";
const _SIt = "StatusInfos";
const _SIu = "SubnetIds";
const _SIub = "SubnetIdentifier";
const _SIup = "SupportsIntegrations";
const _SIupp = "SupportsIops";
const _SKA = "SupportsKerberosAuthentication";
const _SLD = "SupportsLimitlessDatabase";
const _SLETCL = "SupportsLogExportsToCloudwatchLogs";
const _SLWF = "SupportsLocalWriteForwarding";
const _SM = "StaticMembers";
const _SMo = "SourceMember";
const _SN = "SubscriptionName";
const _SNCS = "SupportedNcharCharacterSets";
const _SNT = "SupportedNetworkTypes";
const _SNe = "SettingName";
const _SO = "SubnetOutpost";
const _SOG = "SourceOptionGroup";
const _SOGI = "SourceOptionGroupIdentifier";
const _SOVD = "SupportsOptionVersionDowngrade";
const _SP = "S3Prefix";
const _SPF = "SessionPinningFilters";
const _SPI = "SupportsPerformanceInsights";
const _SPQ = "SupportsParallelQuery";
const _SR = "SourceRegion";
const _SRD = "ScalarReferenceDetails";
const _SRR = "SwitchoverReadReplica";
const _SRRu = "SupportsReadReplica";
const _SRo = "SourceRegions";
const _SS = "SynchronizationStatus";
const _SSA = "SupportsStorageAutoscaling";
const _SSE = "SupportsStorageEncryption";
const _SST = "SupportsStorageThroughput";
const _SSe = "SecretStatus";
const _SSt = "StorageSize";
const _SSu = "SubnetStatus";
const _ST = "SnapshotTarget";
const _STA = "SnsTopicArn";
const _STTIR = "StorageThroughputToIopsRatio";
const _STn = "SnapshotType";
const _STna = "SnapshotTime";
const _STo = "SourceType";
const _STt = "StorageType";
const _STta = "StartTime";
const _STtat = "StatusType";
const _STto = "StorageThroughput";
const _STu = "SupportedTimezones";
const _STw = "SwitchoverTimeout";
const _SUAP = "SecondsUntilAutoPause";
const _SVFS = "ServerlessV2FeaturesSupport";
const _SVPV = "ServerlessV2PlatformVersion";
const _SVSC = "ServerlessV2ScalingConfiguration";
const _Se = "Severity";
const _Si = "Size";
const _St = "Status";
const _Sta = "State";
const _Ste = "Step";
const _Sto = "Storage";
const _Su = "Subnets";
const _Sub = "Subnet";
const _Sw = "Switchover";
const _T = "Tags";
const _TA = "TargetArn";
const _TAS = "TargetAllocatedStorage";
const _TAi = "TimeoutAction";
const _TCA = "TdeCredentialArn";
const _TCAZ = "TargetCustomAvailabilityZone";
const _TCI = "TrackedClusterId";
const _TCNT = "TargetConnectionNetworkType";
const _TCP = "TdeCredentialPassword";
const _TD = "TenantDatabase";
const _TDARN = "TenantDatabaseARN";
const _TDBCPGD = "TargetDBClusterParameterGroupDescription";
const _TDBCPGI = "TargetDBClusterParameterGroupIdentifier";
const _TDBCPGN = "TargetDBClusterParameterGroupName";
const _TDBCSI = "TargetDBClusterSnapshotIdentifier";
const _TDBIC = "TargetDBInstanceClass";
const _TDBII = "TargetDBInstanceIdentifier";
const _TDBN = "TenantDBName";
const _TDBPGD = "TargetDBParameterGroupDescription";
const _TDBPGI = "TargetDBParameterGroupIdentifier";
const _TDBPGN = "TargetDBParameterGroupName";
const _TDBSI = "TargetDBSnapshotIdentifier";
const _TDCA = "ToDbClusterArn";
const _TDCI = "TargetDbClusterIdentifier";
const _TDCT = "TenantDatabaseCreateTime";
const _TDRI = "TenantDatabaseResourceId";
const _TDe = "TenantDatabases";
const _TDy = "TypeDetection";
const _TEDIGB = "TotalExtractedDataInGB";
const _TET = "TaskEndTime";
const _TEV = "TargetEngineVersion";
const _TG = "TargetGroups";
const _TGA = "TargetGroupArn";
const _TGMDI = "TransitGatewayMulticastDomainId";
const _TGN = "TargetGroupName";
const _TH = "TargetHealth";
const _TI = "TargetIops";
const _TIy = "TypeId";
const _TK = "TagKeys";
const _TL = "TagList";
const _TM = "TargetMember";
const _TN = "TimezoneName";
const _TOGD = "TargetOptionGroupDescription";
const _TOGI = "TargetOptionGroupIdentifier";
const _TR = "TargetRole";
const _TRy = "TypeRecommendation";
const _TST = "TargetStorageType";
const _TSTa = "TargetStorageThroughput";
const _TSTas = "TaskStartTime";
const _Ta = "Target";
const _Tag = "Tag";
const _Tar = "Targets";
const _Tas = "Tasks";
const _Te = "Text";
const _Th = "Thumbprint";
const _Ti = "Timezone";
const _Tit = "Title";
const _To = "To";
const _Ty = "Type";
const _U = "Used";
const _UAPLI = "UseAwsProvidedLatestImage";
const _UD = "UpdatedDate";
const _UDPF = "UseDefaultProcessorFeatures";
const _UETOPITU = "UseEarliestTimeOnPointInTimeUnavailable";
const _ULRT = "UseLatestRestorableTime";
const _UN = "UserName";
const _UP = "UsagePrice";
const _USC = "UpgradeStorageConfig";
const _UT = "UpgradeTarget";
const _UTSC = "UpgradeTargetStorageConfig";
const _UTp = "UpdatedTime";
const _Ur = "Url";
const _V = "Version";
const _VDBIMM = "ValidDBInstanceModificationsMessage";
const _VF = "ValidFrom";
const _VI = "VpcId";
const _VO = "VpcOnly";
const _VPF = "ValidProcessorFeatures";
const _VSG = "VpcSecurityGroups";
const _VSGI = "VpcSecurityGroupIds";
const _VSGIp = "VpcSecurityGroupId";
const _VSGM = "VpcSecurityGroupMemberships";
const _VSGMp = "VpcSecurityGroupMembership";
const _VSI = "VpcSubnetIds";
const _VSO = "ValidStorageOptions";
const _VT = "ValidTill";
const _VTA = "ValuesToAdd";
const _VTR = "ValuesToRemove";
const _VUT = "ValidUpgradeTarget";
const _Va = "Values";
const _Val = "Value";
const _Vp = "Vpc";
const _WM = "WarningMessage";
const _e = "entry";
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
