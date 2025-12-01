// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultRDSHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput } from "./commands/AddRoleToDBClusterCommand";
import {
  AddRoleToDBInstanceCommandInput,
  AddRoleToDBInstanceCommandOutput,
} from "./commands/AddRoleToDBInstanceCommand";
import {
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
} from "./commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  AuthorizeDBSecurityGroupIngressCommandInput,
  AuthorizeDBSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeDBSecurityGroupIngressCommand";
import { BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput } from "./commands/BacktrackDBClusterCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "./commands/CancelExportTaskCommand";
import {
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
} from "./commands/CopyDBClusterParameterGroupCommand";
import {
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
} from "./commands/CopyDBClusterSnapshotCommand";
import {
  CopyDBParameterGroupCommandInput,
  CopyDBParameterGroupCommandOutput,
} from "./commands/CopyDBParameterGroupCommand";
import { CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput } from "./commands/CopyDBSnapshotCommand";
import { CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput } from "./commands/CopyOptionGroupCommand";
import {
  CreateBlueGreenDeploymentCommandInput,
  CreateBlueGreenDeploymentCommandOutput,
} from "./commands/CreateBlueGreenDeploymentCommand";
import {
  CreateCustomDBEngineVersionCommandInput,
  CreateCustomDBEngineVersionCommandOutput,
} from "./commands/CreateCustomDBEngineVersionCommand";
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "./commands/CreateDBClusterCommand";
import {
  CreateDBClusterEndpointCommandInput,
  CreateDBClusterEndpointCommandOutput,
} from "./commands/CreateDBClusterEndpointCommand";
import {
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
} from "./commands/CreateDBClusterParameterGroupCommand";
import {
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput,
} from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput } from "./commands/CreateDBInstanceCommand";
import {
  CreateDBInstanceReadReplicaCommandInput,
  CreateDBInstanceReadReplicaCommandOutput,
} from "./commands/CreateDBInstanceReadReplicaCommand";
import {
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
} from "./commands/CreateDBParameterGroupCommand";
import { CreateDBProxyCommandInput, CreateDBProxyCommandOutput } from "./commands/CreateDBProxyCommand";
import {
  CreateDBProxyEndpointCommandInput,
  CreateDBProxyEndpointCommandOutput,
} from "./commands/CreateDBProxyEndpointCommand";
import {
  CreateDBSecurityGroupCommandInput,
  CreateDBSecurityGroupCommandOutput,
} from "./commands/CreateDBSecurityGroupCommand";
import { CreateDBShardGroupCommandInput, CreateDBShardGroupCommandOutput } from "./commands/CreateDBShardGroupCommand";
import { CreateDBSnapshotCommandInput, CreateDBSnapshotCommandOutput } from "./commands/CreateDBSnapshotCommand";
import {
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
} from "./commands/CreateDBSubnetGroupCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateGlobalClusterCommandInput,
  CreateGlobalClusterCommandOutput,
} from "./commands/CreateGlobalClusterCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "./commands/CreateIntegrationCommand";
import { CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput } from "./commands/CreateOptionGroupCommand";
import {
  CreateTenantDatabaseCommandInput,
  CreateTenantDatabaseCommandOutput,
} from "./commands/CreateTenantDatabaseCommand";
import {
  DeleteBlueGreenDeploymentCommandInput,
  DeleteBlueGreenDeploymentCommandOutput,
} from "./commands/DeleteBlueGreenDeploymentCommand";
import {
  DeleteCustomDBEngineVersionCommandInput,
  DeleteCustomDBEngineVersionCommandOutput,
} from "./commands/DeleteCustomDBEngineVersionCommand";
import {
  DeleteDBClusterAutomatedBackupCommandInput,
  DeleteDBClusterAutomatedBackupCommandOutput,
} from "./commands/DeleteDBClusterAutomatedBackupCommand";
import { DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput } from "./commands/DeleteDBClusterCommand";
import {
  DeleteDBClusterEndpointCommandInput,
  DeleteDBClusterEndpointCommandOutput,
} from "./commands/DeleteDBClusterEndpointCommand";
import {
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
} from "./commands/DeleteDBClusterParameterGroupCommand";
import {
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
} from "./commands/DeleteDBClusterSnapshotCommand";
import {
  DeleteDBInstanceAutomatedBackupCommandInput,
  DeleteDBInstanceAutomatedBackupCommandOutput,
} from "./commands/DeleteDBInstanceAutomatedBackupCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "./commands/DeleteDBInstanceCommand";
import {
  DeleteDBParameterGroupCommandInput,
  DeleteDBParameterGroupCommandOutput,
} from "./commands/DeleteDBParameterGroupCommand";
import { DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput } from "./commands/DeleteDBProxyCommand";
import {
  DeleteDBProxyEndpointCommandInput,
  DeleteDBProxyEndpointCommandOutput,
} from "./commands/DeleteDBProxyEndpointCommand";
import {
  DeleteDBSecurityGroupCommandInput,
  DeleteDBSecurityGroupCommandOutput,
} from "./commands/DeleteDBSecurityGroupCommand";
import { DeleteDBShardGroupCommandInput, DeleteDBShardGroupCommandOutput } from "./commands/DeleteDBShardGroupCommand";
import { DeleteDBSnapshotCommandInput, DeleteDBSnapshotCommandOutput } from "./commands/DeleteDBSnapshotCommand";
import {
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
} from "./commands/DeleteDBSubnetGroupCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteGlobalClusterCommandInput,
  DeleteGlobalClusterCommandOutput,
} from "./commands/DeleteGlobalClusterCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import { DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput } from "./commands/DeleteOptionGroupCommand";
import {
  DeleteTenantDatabaseCommandInput,
  DeleteTenantDatabaseCommandOutput,
} from "./commands/DeleteTenantDatabaseCommand";
import {
  DeregisterDBProxyTargetsCommandInput,
  DeregisterDBProxyTargetsCommandOutput,
} from "./commands/DeregisterDBProxyTargetsCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeBlueGreenDeploymentsCommandInput,
  DescribeBlueGreenDeploymentsCommandOutput,
} from "./commands/DescribeBlueGreenDeploymentsCommand";
import {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeDBClusterAutomatedBackupsCommandInput,
  DescribeDBClusterAutomatedBackupsCommandOutput,
} from "./commands/DescribeDBClusterAutomatedBackupsCommand";
import {
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
} from "./commands/DescribeDBClusterBacktracksCommand";
import {
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "./commands/DescribeDBClusterEndpointsCommand";
import {
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "./commands/DescribeDBClusterParameterGroupsCommand";
import {
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "./commands/DescribeDBClustersCommand";
import {
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "./commands/DescribeDBClusterSnapshotsCommand";
import {
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "./commands/DescribeDBEngineVersionsCommand";
import {
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
} from "./commands/DescribeDBInstanceAutomatedBackupsCommand";
import {
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "./commands/DescribeDBInstancesCommand";
import { DescribeDBLogFilesCommandInput, DescribeDBLogFilesCommandOutput } from "./commands/DescribeDBLogFilesCommand";
import {
  DescribeDBMajorEngineVersionsCommandInput,
  DescribeDBMajorEngineVersionsCommandOutput,
} from "./commands/DescribeDBMajorEngineVersionsCommand";
import {
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "./commands/DescribeDBParameterGroupsCommand";
import {
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "./commands/DescribeDBParametersCommand";
import { DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput } from "./commands/DescribeDBProxiesCommand";
import {
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
} from "./commands/DescribeDBProxyEndpointsCommand";
import {
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput,
} from "./commands/DescribeDBProxyTargetGroupsCommand";
import {
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput,
} from "./commands/DescribeDBProxyTargetsCommand";
import {
  DescribeDBRecommendationsCommandInput,
  DescribeDBRecommendationsCommandOutput,
} from "./commands/DescribeDBRecommendationsCommand";
import {
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "./commands/DescribeDBSecurityGroupsCommand";
import {
  DescribeDBShardGroupsCommandInput,
  DescribeDBShardGroupsCommandOutput,
} from "./commands/DescribeDBShardGroupsCommand";
import {
  DescribeDBSnapshotAttributesCommandInput,
  DescribeDBSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBSnapshotAttributesCommand";
import {
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
} from "./commands/DescribeDBSnapshotsCommand";
import {
  DescribeDBSnapshotTenantDatabasesCommandInput,
  DescribeDBSnapshotTenantDatabasesCommandOutput,
} from "./commands/DescribeDBSnapshotTenantDatabasesCommand";
import {
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "./commands/DescribeDBSubnetGroupsCommand";
import {
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "./commands/DescribeEngineDefaultClusterParametersCommand";
import {
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "./commands/DescribeGlobalClustersCommand";
import {
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "./commands/DescribeIntegrationsCommand";
import {
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
} from "./commands/DescribeOptionGroupOptionsCommand";
import {
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
} from "./commands/DescribeOptionGroupsCommand";
import {
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
} from "./commands/DescribeReservedDBInstancesCommand";
import {
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
} from "./commands/DescribeReservedDBInstancesOfferingsCommand";
import {
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
} from "./commands/DescribeSourceRegionsCommand";
import {
  DescribeTenantDatabasesCommandInput,
  DescribeTenantDatabasesCommandOutput,
} from "./commands/DescribeTenantDatabasesCommand";
import {
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "./commands/DescribeValidDBInstanceModificationsCommand";
import {
  DisableHttpEndpointCommandInput,
  DisableHttpEndpointCommandOutput,
} from "./commands/DisableHttpEndpointCommand";
import {
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "./commands/DownloadDBLogFilePortionCommand";
import { EnableHttpEndpointCommandInput, EnableHttpEndpointCommandOutput } from "./commands/EnableHttpEndpointCommand";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "./commands/FailoverDBClusterCommand";
import {
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
} from "./commands/FailoverGlobalClusterCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyActivityStreamCommandInput,
  ModifyActivityStreamCommandOutput,
} from "./commands/ModifyActivityStreamCommand";
import { ModifyCertificatesCommandInput, ModifyCertificatesCommandOutput } from "./commands/ModifyCertificatesCommand";
import {
  ModifyCurrentDBClusterCapacityCommandInput,
  ModifyCurrentDBClusterCapacityCommandOutput,
} from "./commands/ModifyCurrentDBClusterCapacityCommand";
import {
  ModifyCustomDBEngineVersionCommandInput,
  ModifyCustomDBEngineVersionCommandOutput,
} from "./commands/ModifyCustomDBEngineVersionCommand";
import { ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput } from "./commands/ModifyDBClusterCommand";
import {
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
} from "./commands/ModifyDBClusterEndpointCommand";
import {
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
} from "./commands/ModifyDBClusterParameterGroupCommand";
import {
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
} from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "./commands/ModifyDBInstanceCommand";
import {
  ModifyDBParameterGroupCommandInput,
  ModifyDBParameterGroupCommandOutput,
} from "./commands/ModifyDBParameterGroupCommand";
import { ModifyDBProxyCommandInput, ModifyDBProxyCommandOutput } from "./commands/ModifyDBProxyCommand";
import {
  ModifyDBProxyEndpointCommandInput,
  ModifyDBProxyEndpointCommandOutput,
} from "./commands/ModifyDBProxyEndpointCommand";
import {
  ModifyDBProxyTargetGroupCommandInput,
  ModifyDBProxyTargetGroupCommandOutput,
} from "./commands/ModifyDBProxyTargetGroupCommand";
import {
  ModifyDBRecommendationCommandInput,
  ModifyDBRecommendationCommandOutput,
} from "./commands/ModifyDBRecommendationCommand";
import { ModifyDBShardGroupCommandInput, ModifyDBShardGroupCommandOutput } from "./commands/ModifyDBShardGroupCommand";
import {
  ModifyDBSnapshotAttributeCommandInput,
  ModifyDBSnapshotAttributeCommandOutput,
} from "./commands/ModifyDBSnapshotAttributeCommand";
import { ModifyDBSnapshotCommandInput, ModifyDBSnapshotCommandOutput } from "./commands/ModifyDBSnapshotCommand";
import {
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
} from "./commands/ModifyDBSubnetGroupCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyGlobalClusterCommandInput,
  ModifyGlobalClusterCommandOutput,
} from "./commands/ModifyGlobalClusterCommand";
import { ModifyIntegrationCommandInput, ModifyIntegrationCommandOutput } from "./commands/ModifyIntegrationCommand";
import { ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput } from "./commands/ModifyOptionGroupCommand";
import {
  ModifyTenantDatabaseCommandInput,
  ModifyTenantDatabaseCommandOutput,
} from "./commands/ModifyTenantDatabaseCommand";
import { PromoteReadReplicaCommandInput, PromoteReadReplicaCommandOutput } from "./commands/PromoteReadReplicaCommand";
import {
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
} from "./commands/PromoteReadReplicaDBClusterCommand";
import {
  PurchaseReservedDBInstancesOfferingCommandInput,
  PurchaseReservedDBInstancesOfferingCommandOutput,
} from "./commands/PurchaseReservedDBInstancesOfferingCommand";
import { RebootDBClusterCommandInput, RebootDBClusterCommandOutput } from "./commands/RebootDBClusterCommand";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "./commands/RebootDBInstanceCommand";
import { RebootDBShardGroupCommandInput, RebootDBShardGroupCommandOutput } from "./commands/RebootDBShardGroupCommand";
import {
  RegisterDBProxyTargetsCommandInput,
  RegisterDBProxyTargetsCommandOutput,
} from "./commands/RegisterDBProxyTargetsCommand";
import {
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
} from "./commands/RemoveFromGlobalClusterCommand";
import {
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
} from "./commands/RemoveRoleFromDBClusterCommand";
import {
  RemoveRoleFromDBInstanceCommandInput,
  RemoveRoleFromDBInstanceCommandOutput,
} from "./commands/RemoveRoleFromDBInstanceCommand";
import {
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
} from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
} from "./commands/ResetDBClusterParameterGroupCommand";
import {
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
} from "./commands/ResetDBParameterGroupCommand";
import {
  RestoreDBClusterFromS3CommandInput,
  RestoreDBClusterFromS3CommandOutput,
} from "./commands/RestoreDBClusterFromS3Command";
import {
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
} from "./commands/RestoreDBClusterFromSnapshotCommand";
import {
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
} from "./commands/RestoreDBClusterToPointInTimeCommand";
import {
  RestoreDBInstanceFromDBSnapshotCommandInput,
  RestoreDBInstanceFromDBSnapshotCommandOutput,
} from "./commands/RestoreDBInstanceFromDBSnapshotCommand";
import {
  RestoreDBInstanceFromS3CommandInput,
  RestoreDBInstanceFromS3CommandOutput,
} from "./commands/RestoreDBInstanceFromS3Command";
import {
  RestoreDBInstanceToPointInTimeCommandInput,
  RestoreDBInstanceToPointInTimeCommandOutput,
} from "./commands/RestoreDBInstanceToPointInTimeCommand";
import {
  RevokeDBSecurityGroupIngressCommandInput,
  RevokeDBSecurityGroupIngressCommandOutput,
} from "./commands/RevokeDBSecurityGroupIngressCommand";
import {
  StartActivityStreamCommandInput,
  StartActivityStreamCommandOutput,
} from "./commands/StartActivityStreamCommand";
import { StartDBClusterCommandInput, StartDBClusterCommandOutput } from "./commands/StartDBClusterCommand";
import {
  StartDBInstanceAutomatedBackupsReplicationCommandInput,
  StartDBInstanceAutomatedBackupsReplicationCommandOutput,
} from "./commands/StartDBInstanceAutomatedBackupsReplicationCommand";
import { StartDBInstanceCommandInput, StartDBInstanceCommandOutput } from "./commands/StartDBInstanceCommand";
import { StartExportTaskCommandInput, StartExportTaskCommandOutput } from "./commands/StartExportTaskCommand";
import { StopActivityStreamCommandInput, StopActivityStreamCommandOutput } from "./commands/StopActivityStreamCommand";
import { StopDBClusterCommandInput, StopDBClusterCommandOutput } from "./commands/StopDBClusterCommand";
import {
  StopDBInstanceAutomatedBackupsReplicationCommandInput,
  StopDBInstanceAutomatedBackupsReplicationCommandOutput,
} from "./commands/StopDBInstanceAutomatedBackupsReplicationCommand";
import { StopDBInstanceCommandInput, StopDBInstanceCommandOutput } from "./commands/StopDBInstanceCommand";
import {
  SwitchoverBlueGreenDeploymentCommandInput,
  SwitchoverBlueGreenDeploymentCommandOutput,
} from "./commands/SwitchoverBlueGreenDeploymentCommand";
import {
  SwitchoverGlobalClusterCommandInput,
  SwitchoverGlobalClusterCommandOutput,
} from "./commands/SwitchoverGlobalClusterCommand";
import {
  SwitchoverReadReplicaCommandInput,
  SwitchoverReadReplicaCommandOutput,
} from "./commands/SwitchoverReadReplicaCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddRoleToDBClusterCommandInput
  | AddRoleToDBInstanceCommandInput
  | AddSourceIdentifierToSubscriptionCommandInput
  | AddTagsToResourceCommandInput
  | ApplyPendingMaintenanceActionCommandInput
  | AuthorizeDBSecurityGroupIngressCommandInput
  | BacktrackDBClusterCommandInput
  | CancelExportTaskCommandInput
  | CopyDBClusterParameterGroupCommandInput
  | CopyDBClusterSnapshotCommandInput
  | CopyDBParameterGroupCommandInput
  | CopyDBSnapshotCommandInput
  | CopyOptionGroupCommandInput
  | CreateBlueGreenDeploymentCommandInput
  | CreateCustomDBEngineVersionCommandInput
  | CreateDBClusterCommandInput
  | CreateDBClusterEndpointCommandInput
  | CreateDBClusterParameterGroupCommandInput
  | CreateDBClusterSnapshotCommandInput
  | CreateDBInstanceCommandInput
  | CreateDBInstanceReadReplicaCommandInput
  | CreateDBParameterGroupCommandInput
  | CreateDBProxyCommandInput
  | CreateDBProxyEndpointCommandInput
  | CreateDBSecurityGroupCommandInput
  | CreateDBShardGroupCommandInput
  | CreateDBSnapshotCommandInput
  | CreateDBSubnetGroupCommandInput
  | CreateEventSubscriptionCommandInput
  | CreateGlobalClusterCommandInput
  | CreateIntegrationCommandInput
  | CreateOptionGroupCommandInput
  | CreateTenantDatabaseCommandInput
  | DeleteBlueGreenDeploymentCommandInput
  | DeleteCustomDBEngineVersionCommandInput
  | DeleteDBClusterAutomatedBackupCommandInput
  | DeleteDBClusterCommandInput
  | DeleteDBClusterEndpointCommandInput
  | DeleteDBClusterParameterGroupCommandInput
  | DeleteDBClusterSnapshotCommandInput
  | DeleteDBInstanceAutomatedBackupCommandInput
  | DeleteDBInstanceCommandInput
  | DeleteDBParameterGroupCommandInput
  | DeleteDBProxyCommandInput
  | DeleteDBProxyEndpointCommandInput
  | DeleteDBSecurityGroupCommandInput
  | DeleteDBShardGroupCommandInput
  | DeleteDBSnapshotCommandInput
  | DeleteDBSubnetGroupCommandInput
  | DeleteEventSubscriptionCommandInput
  | DeleteGlobalClusterCommandInput
  | DeleteIntegrationCommandInput
  | DeleteOptionGroupCommandInput
  | DeleteTenantDatabaseCommandInput
  | DeregisterDBProxyTargetsCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeBlueGreenDeploymentsCommandInput
  | DescribeCertificatesCommandInput
  | DescribeDBClusterAutomatedBackupsCommandInput
  | DescribeDBClusterBacktracksCommandInput
  | DescribeDBClusterEndpointsCommandInput
  | DescribeDBClusterParameterGroupsCommandInput
  | DescribeDBClusterParametersCommandInput
  | DescribeDBClusterSnapshotAttributesCommandInput
  | DescribeDBClusterSnapshotsCommandInput
  | DescribeDBClustersCommandInput
  | DescribeDBEngineVersionsCommandInput
  | DescribeDBInstanceAutomatedBackupsCommandInput
  | DescribeDBInstancesCommandInput
  | DescribeDBLogFilesCommandInput
  | DescribeDBMajorEngineVersionsCommandInput
  | DescribeDBParameterGroupsCommandInput
  | DescribeDBParametersCommandInput
  | DescribeDBProxiesCommandInput
  | DescribeDBProxyEndpointsCommandInput
  | DescribeDBProxyTargetGroupsCommandInput
  | DescribeDBProxyTargetsCommandInput
  | DescribeDBRecommendationsCommandInput
  | DescribeDBSecurityGroupsCommandInput
  | DescribeDBShardGroupsCommandInput
  | DescribeDBSnapshotAttributesCommandInput
  | DescribeDBSnapshotTenantDatabasesCommandInput
  | DescribeDBSnapshotsCommandInput
  | DescribeDBSubnetGroupsCommandInput
  | DescribeEngineDefaultClusterParametersCommandInput
  | DescribeEngineDefaultParametersCommandInput
  | DescribeEventCategoriesCommandInput
  | DescribeEventSubscriptionsCommandInput
  | DescribeEventsCommandInput
  | DescribeExportTasksCommandInput
  | DescribeGlobalClustersCommandInput
  | DescribeIntegrationsCommandInput
  | DescribeOptionGroupOptionsCommandInput
  | DescribeOptionGroupsCommandInput
  | DescribeOrderableDBInstanceOptionsCommandInput
  | DescribePendingMaintenanceActionsCommandInput
  | DescribeReservedDBInstancesCommandInput
  | DescribeReservedDBInstancesOfferingsCommandInput
  | DescribeSourceRegionsCommandInput
  | DescribeTenantDatabasesCommandInput
  | DescribeValidDBInstanceModificationsCommandInput
  | DisableHttpEndpointCommandInput
  | DownloadDBLogFilePortionCommandInput
  | EnableHttpEndpointCommandInput
  | FailoverDBClusterCommandInput
  | FailoverGlobalClusterCommandInput
  | ListTagsForResourceCommandInput
  | ModifyActivityStreamCommandInput
  | ModifyCertificatesCommandInput
  | ModifyCurrentDBClusterCapacityCommandInput
  | ModifyCustomDBEngineVersionCommandInput
  | ModifyDBClusterCommandInput
  | ModifyDBClusterEndpointCommandInput
  | ModifyDBClusterParameterGroupCommandInput
  | ModifyDBClusterSnapshotAttributeCommandInput
  | ModifyDBInstanceCommandInput
  | ModifyDBParameterGroupCommandInput
  | ModifyDBProxyCommandInput
  | ModifyDBProxyEndpointCommandInput
  | ModifyDBProxyTargetGroupCommandInput
  | ModifyDBRecommendationCommandInput
  | ModifyDBShardGroupCommandInput
  | ModifyDBSnapshotAttributeCommandInput
  | ModifyDBSnapshotCommandInput
  | ModifyDBSubnetGroupCommandInput
  | ModifyEventSubscriptionCommandInput
  | ModifyGlobalClusterCommandInput
  | ModifyIntegrationCommandInput
  | ModifyOptionGroupCommandInput
  | ModifyTenantDatabaseCommandInput
  | PromoteReadReplicaCommandInput
  | PromoteReadReplicaDBClusterCommandInput
  | PurchaseReservedDBInstancesOfferingCommandInput
  | RebootDBClusterCommandInput
  | RebootDBInstanceCommandInput
  | RebootDBShardGroupCommandInput
  | RegisterDBProxyTargetsCommandInput
  | RemoveFromGlobalClusterCommandInput
  | RemoveRoleFromDBClusterCommandInput
  | RemoveRoleFromDBInstanceCommandInput
  | RemoveSourceIdentifierFromSubscriptionCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetDBClusterParameterGroupCommandInput
  | ResetDBParameterGroupCommandInput
  | RestoreDBClusterFromS3CommandInput
  | RestoreDBClusterFromSnapshotCommandInput
  | RestoreDBClusterToPointInTimeCommandInput
  | RestoreDBInstanceFromDBSnapshotCommandInput
  | RestoreDBInstanceFromS3CommandInput
  | RestoreDBInstanceToPointInTimeCommandInput
  | RevokeDBSecurityGroupIngressCommandInput
  | StartActivityStreamCommandInput
  | StartDBClusterCommandInput
  | StartDBInstanceAutomatedBackupsReplicationCommandInput
  | StartDBInstanceCommandInput
  | StartExportTaskCommandInput
  | StopActivityStreamCommandInput
  | StopDBClusterCommandInput
  | StopDBInstanceAutomatedBackupsReplicationCommandInput
  | StopDBInstanceCommandInput
  | SwitchoverBlueGreenDeploymentCommandInput
  | SwitchoverGlobalClusterCommandInput
  | SwitchoverReadReplicaCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddRoleToDBClusterCommandOutput
  | AddRoleToDBInstanceCommandOutput
  | AddSourceIdentifierToSubscriptionCommandOutput
  | AddTagsToResourceCommandOutput
  | ApplyPendingMaintenanceActionCommandOutput
  | AuthorizeDBSecurityGroupIngressCommandOutput
  | BacktrackDBClusterCommandOutput
  | CancelExportTaskCommandOutput
  | CopyDBClusterParameterGroupCommandOutput
  | CopyDBClusterSnapshotCommandOutput
  | CopyDBParameterGroupCommandOutput
  | CopyDBSnapshotCommandOutput
  | CopyOptionGroupCommandOutput
  | CreateBlueGreenDeploymentCommandOutput
  | CreateCustomDBEngineVersionCommandOutput
  | CreateDBClusterCommandOutput
  | CreateDBClusterEndpointCommandOutput
  | CreateDBClusterParameterGroupCommandOutput
  | CreateDBClusterSnapshotCommandOutput
  | CreateDBInstanceCommandOutput
  | CreateDBInstanceReadReplicaCommandOutput
  | CreateDBParameterGroupCommandOutput
  | CreateDBProxyCommandOutput
  | CreateDBProxyEndpointCommandOutput
  | CreateDBSecurityGroupCommandOutput
  | CreateDBShardGroupCommandOutput
  | CreateDBSnapshotCommandOutput
  | CreateDBSubnetGroupCommandOutput
  | CreateEventSubscriptionCommandOutput
  | CreateGlobalClusterCommandOutput
  | CreateIntegrationCommandOutput
  | CreateOptionGroupCommandOutput
  | CreateTenantDatabaseCommandOutput
  | DeleteBlueGreenDeploymentCommandOutput
  | DeleteCustomDBEngineVersionCommandOutput
  | DeleteDBClusterAutomatedBackupCommandOutput
  | DeleteDBClusterCommandOutput
  | DeleteDBClusterEndpointCommandOutput
  | DeleteDBClusterParameterGroupCommandOutput
  | DeleteDBClusterSnapshotCommandOutput
  | DeleteDBInstanceAutomatedBackupCommandOutput
  | DeleteDBInstanceCommandOutput
  | DeleteDBParameterGroupCommandOutput
  | DeleteDBProxyCommandOutput
  | DeleteDBProxyEndpointCommandOutput
  | DeleteDBSecurityGroupCommandOutput
  | DeleteDBShardGroupCommandOutput
  | DeleteDBSnapshotCommandOutput
  | DeleteDBSubnetGroupCommandOutput
  | DeleteEventSubscriptionCommandOutput
  | DeleteGlobalClusterCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteOptionGroupCommandOutput
  | DeleteTenantDatabaseCommandOutput
  | DeregisterDBProxyTargetsCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeBlueGreenDeploymentsCommandOutput
  | DescribeCertificatesCommandOutput
  | DescribeDBClusterAutomatedBackupsCommandOutput
  | DescribeDBClusterBacktracksCommandOutput
  | DescribeDBClusterEndpointsCommandOutput
  | DescribeDBClusterParameterGroupsCommandOutput
  | DescribeDBClusterParametersCommandOutput
  | DescribeDBClusterSnapshotAttributesCommandOutput
  | DescribeDBClusterSnapshotsCommandOutput
  | DescribeDBClustersCommandOutput
  | DescribeDBEngineVersionsCommandOutput
  | DescribeDBInstanceAutomatedBackupsCommandOutput
  | DescribeDBInstancesCommandOutput
  | DescribeDBLogFilesCommandOutput
  | DescribeDBMajorEngineVersionsCommandOutput
  | DescribeDBParameterGroupsCommandOutput
  | DescribeDBParametersCommandOutput
  | DescribeDBProxiesCommandOutput
  | DescribeDBProxyEndpointsCommandOutput
  | DescribeDBProxyTargetGroupsCommandOutput
  | DescribeDBProxyTargetsCommandOutput
  | DescribeDBRecommendationsCommandOutput
  | DescribeDBSecurityGroupsCommandOutput
  | DescribeDBShardGroupsCommandOutput
  | DescribeDBSnapshotAttributesCommandOutput
  | DescribeDBSnapshotTenantDatabasesCommandOutput
  | DescribeDBSnapshotsCommandOutput
  | DescribeDBSubnetGroupsCommandOutput
  | DescribeEngineDefaultClusterParametersCommandOutput
  | DescribeEngineDefaultParametersCommandOutput
  | DescribeEventCategoriesCommandOutput
  | DescribeEventSubscriptionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeExportTasksCommandOutput
  | DescribeGlobalClustersCommandOutput
  | DescribeIntegrationsCommandOutput
  | DescribeOptionGroupOptionsCommandOutput
  | DescribeOptionGroupsCommandOutput
  | DescribeOrderableDBInstanceOptionsCommandOutput
  | DescribePendingMaintenanceActionsCommandOutput
  | DescribeReservedDBInstancesCommandOutput
  | DescribeReservedDBInstancesOfferingsCommandOutput
  | DescribeSourceRegionsCommandOutput
  | DescribeTenantDatabasesCommandOutput
  | DescribeValidDBInstanceModificationsCommandOutput
  | DisableHttpEndpointCommandOutput
  | DownloadDBLogFilePortionCommandOutput
  | EnableHttpEndpointCommandOutput
  | FailoverDBClusterCommandOutput
  | FailoverGlobalClusterCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyActivityStreamCommandOutput
  | ModifyCertificatesCommandOutput
  | ModifyCurrentDBClusterCapacityCommandOutput
  | ModifyCustomDBEngineVersionCommandOutput
  | ModifyDBClusterCommandOutput
  | ModifyDBClusterEndpointCommandOutput
  | ModifyDBClusterParameterGroupCommandOutput
  | ModifyDBClusterSnapshotAttributeCommandOutput
  | ModifyDBInstanceCommandOutput
  | ModifyDBParameterGroupCommandOutput
  | ModifyDBProxyCommandOutput
  | ModifyDBProxyEndpointCommandOutput
  | ModifyDBProxyTargetGroupCommandOutput
  | ModifyDBRecommendationCommandOutput
  | ModifyDBShardGroupCommandOutput
  | ModifyDBSnapshotAttributeCommandOutput
  | ModifyDBSnapshotCommandOutput
  | ModifyDBSubnetGroupCommandOutput
  | ModifyEventSubscriptionCommandOutput
  | ModifyGlobalClusterCommandOutput
  | ModifyIntegrationCommandOutput
  | ModifyOptionGroupCommandOutput
  | ModifyTenantDatabaseCommandOutput
  | PromoteReadReplicaCommandOutput
  | PromoteReadReplicaDBClusterCommandOutput
  | PurchaseReservedDBInstancesOfferingCommandOutput
  | RebootDBClusterCommandOutput
  | RebootDBInstanceCommandOutput
  | RebootDBShardGroupCommandOutput
  | RegisterDBProxyTargetsCommandOutput
  | RemoveFromGlobalClusterCommandOutput
  | RemoveRoleFromDBClusterCommandOutput
  | RemoveRoleFromDBInstanceCommandOutput
  | RemoveSourceIdentifierFromSubscriptionCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetDBClusterParameterGroupCommandOutput
  | ResetDBParameterGroupCommandOutput
  | RestoreDBClusterFromS3CommandOutput
  | RestoreDBClusterFromSnapshotCommandOutput
  | RestoreDBClusterToPointInTimeCommandOutput
  | RestoreDBInstanceFromDBSnapshotCommandOutput
  | RestoreDBInstanceFromS3CommandOutput
  | RestoreDBInstanceToPointInTimeCommandOutput
  | RevokeDBSecurityGroupIngressCommandOutput
  | StartActivityStreamCommandOutput
  | StartDBClusterCommandOutput
  | StartDBInstanceAutomatedBackupsReplicationCommandOutput
  | StartDBInstanceCommandOutput
  | StartExportTaskCommandOutput
  | StopActivityStreamCommandOutput
  | StopDBClusterCommandOutput
  | StopDBInstanceAutomatedBackupsReplicationCommandOutput
  | StopDBInstanceCommandOutput
  | SwitchoverBlueGreenDeploymentCommandOutput
  | SwitchoverGlobalClusterCommandOutput
  | SwitchoverReadReplicaCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type RDSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of RDSClient class constructor that set the region, credentials and other options.
 */
export interface RDSClientConfig extends RDSClientConfigType {}

/**
 * @public
 */
export type RDSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of RDSClient class. This is resolved and normalized from the {@link RDSClientConfig | constructor configuration interface}.
 */
export interface RDSClientResolvedConfig extends RDSClientResolvedConfigType {}

/**
 * <fullname>Amazon Relational Database Service</fullname>
 *          <p></p>
 *          <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and
 *           scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational
 *           database and manages common database administration tasks, freeing up developers to focus on what makes their applications
 *           and businesses unique.</p>
 *          <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server,
 *           Oracle, Db2, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools
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
 * @public
 */
export class RDSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RDSClientResolvedConfig
> {
  /**
   * The resolved configuration of RDSClient class. This is resolved and normalized from the {@link RDSClientConfig | constructor configuration interface}.
   */
  readonly config: RDSClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RDSClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultRDSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RDSClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
