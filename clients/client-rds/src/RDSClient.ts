// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
import { CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput } from "./commands/CreateOptionGroupCommand";
import {
  DeleteBlueGreenDeploymentCommandInput,
  DeleteBlueGreenDeploymentCommandOutput,
} from "./commands/DeleteBlueGreenDeploymentCommand";
import {
  DeleteCustomDBEngineVersionCommandInput,
  DeleteCustomDBEngineVersionCommandOutput,
} from "./commands/DeleteCustomDBEngineVersionCommand";
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
import { DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput } from "./commands/DeleteOptionGroupCommand";
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
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "./commands/DescribeDBSecurityGroupsCommand";
import {
  DescribeDBSnapshotAttributesCommandInput,
  DescribeDBSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBSnapshotAttributesCommand";
import {
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
} from "./commands/DescribeDBSnapshotsCommand";
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
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "./commands/DescribeValidDBInstanceModificationsCommand";
import {
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "./commands/DownloadDBLogFilePortionCommand";
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
import { ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput } from "./commands/ModifyOptionGroupCommand";
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
  | CreateDBSnapshotCommandInput
  | CreateDBSubnetGroupCommandInput
  | CreateEventSubscriptionCommandInput
  | CreateGlobalClusterCommandInput
  | CreateOptionGroupCommandInput
  | DeleteBlueGreenDeploymentCommandInput
  | DeleteCustomDBEngineVersionCommandInput
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
  | DeleteDBSnapshotCommandInput
  | DeleteDBSubnetGroupCommandInput
  | DeleteEventSubscriptionCommandInput
  | DeleteGlobalClusterCommandInput
  | DeleteOptionGroupCommandInput
  | DeregisterDBProxyTargetsCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeBlueGreenDeploymentsCommandInput
  | DescribeCertificatesCommandInput
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
  | DescribeDBParameterGroupsCommandInput
  | DescribeDBParametersCommandInput
  | DescribeDBProxiesCommandInput
  | DescribeDBProxyEndpointsCommandInput
  | DescribeDBProxyTargetGroupsCommandInput
  | DescribeDBProxyTargetsCommandInput
  | DescribeDBSecurityGroupsCommandInput
  | DescribeDBSnapshotAttributesCommandInput
  | DescribeDBSnapshotsCommandInput
  | DescribeDBSubnetGroupsCommandInput
  | DescribeEngineDefaultClusterParametersCommandInput
  | DescribeEngineDefaultParametersCommandInput
  | DescribeEventCategoriesCommandInput
  | DescribeEventSubscriptionsCommandInput
  | DescribeEventsCommandInput
  | DescribeExportTasksCommandInput
  | DescribeGlobalClustersCommandInput
  | DescribeOptionGroupOptionsCommandInput
  | DescribeOptionGroupsCommandInput
  | DescribeOrderableDBInstanceOptionsCommandInput
  | DescribePendingMaintenanceActionsCommandInput
  | DescribeReservedDBInstancesCommandInput
  | DescribeReservedDBInstancesOfferingsCommandInput
  | DescribeSourceRegionsCommandInput
  | DescribeValidDBInstanceModificationsCommandInput
  | DownloadDBLogFilePortionCommandInput
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
  | ModifyDBSnapshotAttributeCommandInput
  | ModifyDBSnapshotCommandInput
  | ModifyDBSubnetGroupCommandInput
  | ModifyEventSubscriptionCommandInput
  | ModifyGlobalClusterCommandInput
  | ModifyOptionGroupCommandInput
  | PromoteReadReplicaCommandInput
  | PromoteReadReplicaDBClusterCommandInput
  | PurchaseReservedDBInstancesOfferingCommandInput
  | RebootDBClusterCommandInput
  | RebootDBInstanceCommandInput
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
  | SwitchoverReadReplicaCommandInput;

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
  | CreateDBSnapshotCommandOutput
  | CreateDBSubnetGroupCommandOutput
  | CreateEventSubscriptionCommandOutput
  | CreateGlobalClusterCommandOutput
  | CreateOptionGroupCommandOutput
  | DeleteBlueGreenDeploymentCommandOutput
  | DeleteCustomDBEngineVersionCommandOutput
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
  | DeleteDBSnapshotCommandOutput
  | DeleteDBSubnetGroupCommandOutput
  | DeleteEventSubscriptionCommandOutput
  | DeleteGlobalClusterCommandOutput
  | DeleteOptionGroupCommandOutput
  | DeregisterDBProxyTargetsCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeBlueGreenDeploymentsCommandOutput
  | DescribeCertificatesCommandOutput
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
  | DescribeDBParameterGroupsCommandOutput
  | DescribeDBParametersCommandOutput
  | DescribeDBProxiesCommandOutput
  | DescribeDBProxyEndpointsCommandOutput
  | DescribeDBProxyTargetGroupsCommandOutput
  | DescribeDBProxyTargetsCommandOutput
  | DescribeDBSecurityGroupsCommandOutput
  | DescribeDBSnapshotAttributesCommandOutput
  | DescribeDBSnapshotsCommandOutput
  | DescribeDBSubnetGroupsCommandOutput
  | DescribeEngineDefaultClusterParametersCommandOutput
  | DescribeEngineDefaultParametersCommandOutput
  | DescribeEventCategoriesCommandOutput
  | DescribeEventSubscriptionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeExportTasksCommandOutput
  | DescribeGlobalClustersCommandOutput
  | DescribeOptionGroupOptionsCommandOutput
  | DescribeOptionGroupsCommandOutput
  | DescribeOrderableDBInstanceOptionsCommandOutput
  | DescribePendingMaintenanceActionsCommandOutput
  | DescribeReservedDBInstancesCommandOutput
  | DescribeReservedDBInstancesOfferingsCommandOutput
  | DescribeSourceRegionsCommandOutput
  | DescribeValidDBInstanceModificationsCommandOutput
  | DownloadDBLogFilePortionCommandOutput
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
  | ModifyDBSnapshotAttributeCommandOutput
  | ModifyDBSnapshotCommandOutput
  | ModifyDBSubnetGroupCommandOutput
  | ModifyEventSubscriptionCommandOutput
  | ModifyGlobalClusterCommandOutput
  | ModifyOptionGroupCommandOutput
  | PromoteReadReplicaCommandOutput
  | PromoteReadReplicaDBClusterCommandOutput
  | PurchaseReservedDBInstancesOfferingCommandOutput
  | RebootDBClusterCommandOutput
  | RebootDBInstanceCommandOutput
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
  | SwitchoverReadReplicaCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type RDSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of RDSClient class constructor that set the region, credentials and other options.
 */
export interface RDSClientConfig extends RDSClientConfigType {}

type RDSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of RDSClient class. This is resolved and normalized from the {@link RDSClientConfig | constructor configuration interface}.
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

  constructor(configuration: RDSClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
