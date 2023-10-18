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
  strictParseLong as __strictParseLong,
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
import { CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput } from "../commands/CreateOptionGroupCommand";
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
import { DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput } from "../commands/DeleteOptionGroupCommand";
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
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "../commands/DescribeDBSecurityGroupsCommand";
import {
  DescribeDBSnapshotAttributesCommandInput,
  DescribeDBSnapshotAttributesCommandOutput,
} from "../commands/DescribeDBSnapshotAttributesCommand";
import {
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
} from "../commands/DescribeDBSnapshotsCommand";
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
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "../commands/DescribeValidDBInstanceModificationsCommand";
import {
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "../commands/DownloadDBLogFilePortionCommand";
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
import { ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput } from "../commands/ModifyOptionGroupCommand";
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
  Certificate,
  CertificateDetails,
  CertificateMessage,
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
  CreateDBSnapshotMessage,
  CreateDBSnapshotResult,
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupResult,
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResult,
  CreateGlobalClusterMessage,
  CreateGlobalClusterResult,
  CreateOptionGroupMessage,
  CreateOptionGroupResult,
  CustomAvailabilityZoneNotFoundFault,
  CustomDBEngineVersionAlreadyExistsFault,
  CustomDBEngineVersionAMI,
  CustomDBEngineVersionNotFoundFault,
  CustomDBEngineVersionQuotaExceededFault,
  DBCluster,
  DBClusterAlreadyExistsFault,
  DBClusterAutomatedBackup,
  DBClusterAutomatedBackupMessage,
  DBClusterAutomatedBackupNotFoundFault,
  DBClusterAutomatedBackupQuotaExceededFault,
  DBClusterBacktrack,
  DBClusterBacktrackMessage,
  DBClusterBacktrackNotFoundFault,
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
  DBClusterParameterGroupNotFoundFault,
  DBClusterParameterGroupsMessage,
  DBClusterQuotaExceededFault,
  DBClusterRole,
  DBClusterRoleAlreadyExistsFault,
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
  DBProxyTargetNotFoundFault,
  DBSecurityGroup,
  DBSecurityGroupAlreadyExistsFault,
  DBSecurityGroupMembership,
  DBSecurityGroupNotFoundFault,
  DBSecurityGroupNotSupportedFault,
  DBSecurityGroupQuotaExceededFault,
  DBSnapshot,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotNotFoundFault,
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
  DeleteDBSnapshotMessage,
  DeleteDBSnapshotResult,
  DeleteDBSubnetGroupMessage,
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResult,
  DeleteGlobalClusterMessage,
  DeleteGlobalClusterResult,
  DeleteOptionGroupMessage,
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
  Filter,
  GlobalCluster,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterMember,
  GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault,
  InstanceQuotaExceededFault,
  InsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault,
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
  InvalidDBSnapshotStateFault,
  InvalidDBSubnetGroupFault,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault,
  InvalidEventSubscriptionStateFault,
  InvalidExportTaskStateFault,
  InvalidGlobalClusterStateFault,
  InvalidOptionGroupStateFault,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  IPRange,
  KMSKeyNotAccessibleFault,
  MasterUserSecret,
  NetworkTypeNotSupported,
  Option,
  OptionGroup,
  OptionGroupAlreadyExistsFault,
  OptionGroupMembership,
  OptionGroupNotFoundFault,
  OptionGroupQuotaExceededFault,
  OptionSetting,
  Outpost,
  Parameter,
  PendingCloudwatchLogsExports,
  PendingMaintenanceAction,
  PendingModifiedValues,
  ProcessorFeature,
  ProvisionedIopsNotAvailableInAZFault,
  ResourceNotFoundFault,
  ResourcePendingMaintenanceActions,
  RestoreWindow,
  ScalingConfiguration,
  ScalingConfigurationInfo,
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
  Timezone,
  UpgradeTarget,
  UserAuthConfig,
  UserAuthConfigInfo,
  VpcSecurityGroupMembership,
} from "../models/models_0";
import {
  AvailableProcessorFeature,
  CloudwatchLogsExportConfiguration,
  ConnectionPoolConfiguration,
  ConnectionPoolConfigurationInfo,
  DBClusterCapacityInfo,
  DBClusterParameterGroupNameMessage,
  DBClusterRoleNotFoundFault,
  DBInstanceAutomatedBackupMessage,
  DBInstanceMessage,
  DBInstanceRoleNotFoundFault,
  DBLogFileNotFoundFault,
  DBParameterGroupDetails,
  DBParameterGroupNameMessage,
  DBParameterGroupsMessage,
  DBProxyTarget,
  DBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetGroup,
  DBSecurityGroupMessage,
  DBSnapshotAttribute,
  DBSnapshotAttributesResult,
  DBSnapshotMessage,
  DBSubnetGroupMessage,
  DBUpgradeDependencyFailureFault,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstanceAutomatedBackupsMessage,
  DescribeDBInstancesMessage,
  DescribeDBLogFilesDetails,
  DescribeDBLogFilesMessage,
  DescribeDBLogFilesResponse,
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
  DescribeDBSecurityGroupsMessage,
  DescribeDBSnapshotAttributesMessage,
  DescribeDBSnapshotAttributesResult,
  DescribeDBSnapshotsMessage,
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
  DescribeOptionGroupOptionsMessage,
  DescribeOptionGroupsMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
  DescribeReservedDBInstancesMessage,
  DescribeReservedDBInstancesOfferingsMessage,
  DescribeSourceRegionsMessage,
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
  DoubleRange,
  DownloadDBLogFilePortionDetails,
  DownloadDBLogFilePortionMessage,
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
  GlobalClustersMessage,
  IamRoleMissingPermissionsFault,
  IamRoleNotFoundFault,
  InsufficientAvailableIPsInSubnetFault,
  InsufficientDBClusterCapacityFault,
  InvalidDBClusterCapacityFault,
  InvalidExportOnlyFault,
  InvalidExportSourceStateFault,
  InvalidRestoreFault,
  InvalidS3BucketFault,
  ListTagsForResourceMessage,
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
  ModifyOptionGroupMessage,
  ModifyOptionGroupResult,
  OptionConfiguration,
  OptionGroupOption,
  OptionGroupOptionSetting,
  OptionGroupOptionsMessage,
  OptionGroups,
  OptionVersion,
  OrderableDBInstanceOption,
  OrderableDBInstanceOptionsMessage,
  PendingMaintenanceActionsMessage,
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
  RecurringCharge,
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
  SwitchoverBlueGreenDeploymentRequest,
  SwitchoverBlueGreenDeploymentResponse,
  SwitchoverGlobalClusterMessage,
  SwitchoverGlobalClusterResult,
  SwitchoverReadReplicaMessage,
  SwitchoverReadReplicaResult,
  TagListMessage,
  TargetHealth,
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
    Action: "AddRoleToDBCluster",
    Version: "2014-10-31",
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
    Action: "AddRoleToDBInstance",
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
    Action: "AuthorizeDBSecurityGroupIngress",
    Version: "2014-10-31",
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
    Action: "BacktrackDBCluster",
    Version: "2014-10-31",
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
    Action: "CancelExportTask",
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
    Action: "CopyDBSnapshot",
    Version: "2014-10-31",
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
    Action: "CopyOptionGroup",
    Version: "2014-10-31",
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
    Action: "CreateBlueGreenDeployment",
    Version: "2014-10-31",
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
    Action: "CreateCustomDBEngineVersion",
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
    Action: "CreateDBInstanceReadReplica",
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
    Action: "CreateDBProxy",
    Version: "2014-10-31",
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
    Action: "CreateDBProxyEndpoint",
    Version: "2014-10-31",
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
    Action: "CreateDBSecurityGroup",
    Version: "2014-10-31",
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
    Action: "CreateDBSnapshot",
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
    Action: "CreateOptionGroup",
    Version: "2014-10-31",
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
    Action: "DeleteBlueGreenDeployment",
    Version: "2014-10-31",
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
    Action: "DeleteCustomDBEngineVersion",
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
    Action: "DeleteDBClusterAutomatedBackup",
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
    Action: "DeleteDBInstanceAutomatedBackup",
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
    Action: "DeleteDBProxy",
    Version: "2014-10-31",
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
    Action: "DeleteDBProxyEndpoint",
    Version: "2014-10-31",
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
    Action: "DeleteDBSecurityGroup",
    Version: "2014-10-31",
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
    Action: "DeleteDBSnapshot",
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
    Action: "DeleteOptionGroup",
    Version: "2014-10-31",
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
    Action: "DeregisterDBProxyTargets",
    Version: "2014-10-31",
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
    Action: "DescribeAccountAttributes",
    Version: "2014-10-31",
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
    Action: "DescribeBlueGreenDeployments",
    Version: "2014-10-31",
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
    Action: "DescribeCertificates",
    Version: "2014-10-31",
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
    Action: "DescribeDBClusterAutomatedBackups",
    Version: "2014-10-31",
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
    Action: "DescribeDBClusterBacktracks",
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
    Action: "DescribeDBInstanceAutomatedBackups",
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
    Action: "DescribeDBLogFiles",
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
    Action: "DescribeDBProxies",
    Version: "2014-10-31",
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
    Action: "DescribeDBProxyEndpoints",
    Version: "2014-10-31",
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
    Action: "DescribeDBProxyTargetGroups",
    Version: "2014-10-31",
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
    Action: "DescribeDBProxyTargets",
    Version: "2014-10-31",
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
    Action: "DescribeDBSecurityGroups",
    Version: "2014-10-31",
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
    Action: "DescribeDBSnapshotAttributes",
    Version: "2014-10-31",
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
    Action: "DescribeDBSnapshots",
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
    Action: "DescribeExportTasks",
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
    Action: "DescribeOptionGroupOptions",
    Version: "2014-10-31",
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
    Action: "DescribeOptionGroups",
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
    Action: "DescribeReservedDBInstances",
    Version: "2014-10-31",
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
    Action: "DescribeReservedDBInstancesOfferings",
    Version: "2014-10-31",
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
    Action: "DescribeSourceRegions",
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
    Action: "DownloadDBLogFilePortion",
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
    Action: "ModifyActivityStream",
    Version: "2014-10-31",
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
    Action: "ModifyCertificates",
    Version: "2014-10-31",
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
    Action: "ModifyCurrentDBClusterCapacity",
    Version: "2014-10-31",
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
    Action: "ModifyCustomDBEngineVersion",
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
    Action: "ModifyDBProxy",
    Version: "2014-10-31",
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
    Action: "ModifyDBProxyEndpoint",
    Version: "2014-10-31",
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
    Action: "ModifyDBProxyTargetGroup",
    Version: "2014-10-31",
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
    Action: "ModifyDBSnapshot",
    Version: "2014-10-31",
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
    Action: "ModifyDBSnapshotAttribute",
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
    Action: "ModifyOptionGroup",
    Version: "2014-10-31",
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
    Action: "PromoteReadReplica",
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
    Action: "PurchaseReservedDBInstancesOffering",
    Version: "2014-10-31",
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
    Action: "RebootDBCluster",
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
    Action: "RegisterDBProxyTargets",
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
    Action: "RemoveRoleFromDBInstance",
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
    Action: "RestoreDBClusterFromS3",
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
    Action: "RestoreDBInstanceFromDBSnapshot",
    Version: "2014-10-31",
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
    Action: "RestoreDBInstanceFromS3",
    Version: "2014-10-31",
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
    Action: "RestoreDBInstanceToPointInTime",
    Version: "2014-10-31",
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
    Action: "RevokeDBSecurityGroupIngress",
    Version: "2014-10-31",
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
    Action: "StartActivityStream",
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
    Action: "StartDBInstance",
    Version: "2014-10-31",
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
    Action: "StartDBInstanceAutomatedBackupsReplication",
    Version: "2014-10-31",
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
    Action: "StartExportTask",
    Version: "2014-10-31",
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
    Action: "StopActivityStream",
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
    Action: "StopDBInstance",
    Version: "2014-10-31",
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
    Action: "StopDBInstanceAutomatedBackupsReplication",
    Version: "2014-10-31",
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
    Action: "SwitchoverBlueGreenDeployment",
    Version: "2014-10-31",
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
    Action: "SwitchoverGlobalCluster",
    Version: "2014-10-31",
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
    Action: "SwitchoverReadReplica",
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
 * deserializeAws_queryAddRoleToDBInstanceCommand
 */
export const de_AddRoleToDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddRoleToDBInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddRoleToDBInstanceCommandError
 */
const de_AddRoleToDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    case "com.amazonaws.rds#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await de_BlueGreenDeploymentNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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
 * deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand
 */
export const de_AuthorizeDBSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AuthorizeDBSecurityGroupIngressCommandError(output, context);
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
 * deserializeAws_queryAuthorizeDBSecurityGroupIngressCommandError
 */
const de_AuthorizeDBSecurityGroupIngressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
 * deserializeAws_queryBacktrackDBClusterCommand
 */
export const de_BacktrackDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BacktrackDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BacktrackDBClusterCommandError(output, context);
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
 * deserializeAws_queryBacktrackDBClusterCommandError
 */
const de_BacktrackDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BacktrackDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
 * deserializeAws_queryCancelExportTaskCommand
 */
export const de_CancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelExportTaskCommandError(output, context);
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
 * deserializeAws_queryCancelExportTaskCommandError
 */
const de_CancelExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExportTaskNotFound":
    case "com.amazonaws.rds#ExportTaskNotFoundFault":
      throw await de_ExportTaskNotFoundFaultRes(parsedOutput, context);
    case "InvalidExportTaskStateFault":
    case "com.amazonaws.rds#InvalidExportTaskStateFault":
      throw await de_InvalidExportTaskStateFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
 * deserializeAws_queryCopyDBSnapshotCommand
 */
export const de_CopyDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyDBSnapshotCommandError(output, context);
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
 * deserializeAws_queryCopyDBSnapshotCommandError
 */
const de_CopyDBSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomAvailabilityZoneNotFound":
    case "com.amazonaws.rds#CustomAvailabilityZoneNotFoundFault":
      throw await de_CustomAvailabilityZoneNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await de_DBSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryCopyOptionGroupCommand
 */
export const de_CopyOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyOptionGroupCommandError(output, context);
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
 * deserializeAws_queryCopyOptionGroupCommandError
 */
const de_CopyOptionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyOptionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OptionGroupAlreadyExistsFault":
    case "com.amazonaws.rds#OptionGroupAlreadyExistsFault":
      throw await de_OptionGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "OptionGroupQuotaExceededFault":
    case "com.amazonaws.rds#OptionGroupQuotaExceededFault":
      throw await de_OptionGroupQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateBlueGreenDeploymentCommand
 */
export const de_CreateBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBlueGreenDeploymentCommandError(output, context);
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
 * deserializeAws_queryCreateBlueGreenDeploymentCommandError
 */
const de_CreateBlueGreenDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueGreenDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BlueGreenDeploymentAlreadyExistsFault":
    case "com.amazonaws.rds#BlueGreenDeploymentAlreadyExistsFault":
      throw await de_BlueGreenDeploymentAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "SourceClusterNotSupportedFault":
    case "com.amazonaws.rds#SourceClusterNotSupportedFault":
      throw await de_SourceClusterNotSupportedFaultRes(parsedOutput, context);
    case "SourceDatabaseNotSupportedFault":
    case "com.amazonaws.rds#SourceDatabaseNotSupportedFault":
      throw await de_SourceDatabaseNotSupportedFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateCustomDBEngineVersionCommand
 */
export const de_CreateCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomDBEngineVersionCommandError(output, context);
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
 * deserializeAws_queryCreateCustomDBEngineVersionCommandError
 */
const de_CreateCustomDBEngineVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDBEngineVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CreateCustomDBEngineVersionFault":
    case "com.amazonaws.rds#CreateCustomDBEngineVersionFault":
      throw await de_CreateCustomDBEngineVersionFaultRes(parsedOutput, context);
    case "CustomDBEngineVersionAlreadyExistsFault":
    case "com.amazonaws.rds#CustomDBEngineVersionAlreadyExistsFault":
      throw await de_CustomDBEngineVersionAlreadyExistsFaultRes(parsedOutput, context);
    case "CustomDBEngineVersionQuotaExceededFault":
    case "com.amazonaws.rds#CustomDBEngineVersionQuotaExceededFault":
      throw await de_CustomDBEngineVersionQuotaExceededFaultRes(parsedOutput, context);
    case "Ec2ImagePropertiesNotSupportedFault":
    case "com.amazonaws.rds#Ec2ImagePropertiesNotSupportedFault":
      throw await de_Ec2ImagePropertiesNotSupportedFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
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
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
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
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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
  contents = de_DBClusterEndpoint(data.CreateDBClusterEndpointResult, context);
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
    case "com.amazonaws.rds#DBClusterEndpointAlreadyExistsFault":
      throw await de_DBClusterEndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterEndpointQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterEndpointQuotaExceededFault":
      throw await de_DBClusterEndpointQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await de_BackupPolicyNotFoundFaultRes(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.rds#CertificateNotFoundFault":
      throw await de_CertificateNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await de_NetworkTypeNotSupportedRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
 * deserializeAws_queryCreateDBInstanceReadReplicaCommand
 */
export const de_CreateDBInstanceReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBInstanceReadReplicaCommandError(output, context);
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
 * deserializeAws_queryCreateDBInstanceReadReplicaCommandError
 */
const de_CreateDBInstanceReadReplicaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceReadReplicaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotAllowedFault":
    case "com.amazonaws.rds#DBSubnetGroupNotAllowedFault":
      throw await de_DBSubnetGroupNotAllowedFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupFault":
      throw await de_InvalidDBSubnetGroupFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await de_NetworkTypeNotSupportedRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await de_DBParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
 * deserializeAws_queryCreateDBProxyCommand
 */
export const de_CreateDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBProxyCommandError(output, context);
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
 * deserializeAws_queryCreateDBProxyCommandError
 */
const de_CreateDBProxyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyAlreadyExistsFault":
    case "com.amazonaws.rds#DBProxyAlreadyExistsFault":
      throw await de_DBProxyAlreadyExistsFaultRes(parsedOutput, context);
    case "DBProxyQuotaExceededFault":
    case "com.amazonaws.rds#DBProxyQuotaExceededFault":
      throw await de_DBProxyQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
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
 * deserializeAws_queryCreateDBProxyEndpointCommand
 */
export const de_CreateDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBProxyEndpointCommandError(output, context);
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
 * deserializeAws_queryCreateDBProxyEndpointCommandError
 */
const de_CreateDBProxyEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyEndpointAlreadyExistsFault":
    case "com.amazonaws.rds#DBProxyEndpointAlreadyExistsFault":
      throw await de_DBProxyEndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "DBProxyEndpointQuotaExceededFault":
    case "com.amazonaws.rds#DBProxyEndpointQuotaExceededFault":
      throw await de_DBProxyEndpointQuotaExceededFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
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
 * deserializeAws_queryCreateDBSecurityGroupCommand
 */
export const de_CreateDBSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBSecurityGroupCommandError(output, context);
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
 * deserializeAws_queryCreateDBSecurityGroupCommandError
 */
const de_CreateDBSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSecurityGroupAlreadyExists":
    case "com.amazonaws.rds#DBSecurityGroupAlreadyExistsFault":
      throw await de_DBSecurityGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotSupported":
    case "com.amazonaws.rds#DBSecurityGroupNotSupportedFault":
      throw await de_DBSecurityGroupNotSupportedFaultRes(parsedOutput, context);
    case "QuotaExceeded.DBSecurityGroup":
    case "com.amazonaws.rds#DBSecurityGroupQuotaExceededFault":
      throw await de_DBSecurityGroupQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryCreateDBSnapshotCommand
 */
export const de_CreateDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDBSnapshotCommandError(output, context);
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
 * deserializeAws_queryCreateDBSnapshotCommandError
 */
const de_CreateDBSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await de_DBSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#DBSubnetGroupAlreadyExistsFault":
      throw await de_DBSubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupQuotaExceeded":
    case "com.amazonaws.rds#DBSubnetGroupQuotaExceededFault":
      throw await de_DBSubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.rds#DBSubnetQuotaExceededFault":
      throw await de_DBSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
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
    case "SourceNotFound":
    case "com.amazonaws.rds#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.rds#SubscriptionAlreadyExistFault":
      throw await de_SubscriptionAlreadyExistFaultRes(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.rds#SubscriptionCategoryNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterAlreadyExistsFault":
    case "com.amazonaws.rds#GlobalClusterAlreadyExistsFault":
      throw await de_GlobalClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "GlobalClusterQuotaExceededFault":
    case "com.amazonaws.rds#GlobalClusterQuotaExceededFault":
      throw await de_GlobalClusterQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
 * deserializeAws_queryCreateOptionGroupCommand
 */
export const de_CreateOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOptionGroupCommandError(output, context);
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
 * deserializeAws_queryCreateOptionGroupCommandError
 */
const de_CreateOptionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OptionGroupAlreadyExistsFault":
    case "com.amazonaws.rds#OptionGroupAlreadyExistsFault":
      throw await de_OptionGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "OptionGroupQuotaExceededFault":
    case "com.amazonaws.rds#OptionGroupQuotaExceededFault":
      throw await de_OptionGroupQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteBlueGreenDeploymentCommand
 */
export const de_DeleteBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBlueGreenDeploymentCommandError(output, context);
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
 * deserializeAws_queryDeleteBlueGreenDeploymentCommandError
 */
const de_DeleteBlueGreenDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueGreenDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await de_BlueGreenDeploymentNotFoundFaultRes(parsedOutput, context);
    case "InvalidBlueGreenDeploymentStateFault":
    case "com.amazonaws.rds#InvalidBlueGreenDeploymentStateFault":
      throw await de_InvalidBlueGreenDeploymentStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteCustomDBEngineVersionCommand
 */
export const de_DeleteCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomDBEngineVersionCommandError(output, context);
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
 * deserializeAws_queryDeleteCustomDBEngineVersionCommandError
 */
const de_DeleteCustomDBEngineVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDBEngineVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomDBEngineVersionNotFoundFault":
    case "com.amazonaws.rds#CustomDBEngineVersionNotFoundFault":
      throw await de_CustomDBEngineVersionNotFoundFaultRes(parsedOutput, context);
    case "InvalidCustomDBEngineVersionStateFault":
    case "com.amazonaws.rds#InvalidCustomDBEngineVersionStateFault":
      throw await de_InvalidCustomDBEngineVersionStateFaultRes(parsedOutput, context);
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
    case "DBClusterAutomatedBackupQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterAutomatedBackupQuotaExceededFault":
      throw await de_DBClusterAutomatedBackupQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
      throw await de_DBClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryDeleteDBClusterAutomatedBackupCommand
 */
export const de_DeleteDBClusterAutomatedBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterAutomatedBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBClusterAutomatedBackupCommandError(output, context);
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
 * deserializeAws_queryDeleteDBClusterAutomatedBackupCommandError
 */
const de_DeleteDBClusterAutomatedBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBClusterAutomatedBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAutomatedBackupNotFoundFault":
    case "com.amazonaws.rds#DBClusterAutomatedBackupNotFoundFault":
      throw await de_DBClusterAutomatedBackupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterAutomatedBackupStateFault":
    case "com.amazonaws.rds#InvalidDBClusterAutomatedBackupStateFault":
      throw await de_InvalidDBClusterAutomatedBackupStateFaultRes(parsedOutput, context);
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
  contents = de_DBClusterEndpoint(data.DeleteDBClusterEndpointResult, context);
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
    case "com.amazonaws.rds#DBClusterEndpointNotFoundFault":
      throw await de_DBClusterEndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBClusterEndpointStateFault":
      throw await de_InvalidDBClusterEndpointStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
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
    case "DBInstanceAutomatedBackupQuotaExceeded":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupQuotaExceededFault":
      throw await de_DBInstanceAutomatedBackupQuotaExceededFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await de_DBSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand
 */
export const de_DeleteDBInstanceAutomatedBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceAutomatedBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBInstanceAutomatedBackupCommandError(output, context);
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
 * deserializeAws_queryDeleteDBInstanceAutomatedBackupCommandError
 */
const de_DeleteDBInstanceAutomatedBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceAutomatedBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceAutomatedBackupNotFound":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
      throw await de_DBInstanceAutomatedBackupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceAutomatedBackupState":
    case "com.amazonaws.rds#InvalidDBInstanceAutomatedBackupStateFault":
      throw await de_InvalidDBInstanceAutomatedBackupStateFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
 * deserializeAws_queryDeleteDBProxyCommand
 */
export const de_DeleteDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBProxyCommandError(output, context);
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
 * deserializeAws_queryDeleteDBProxyCommandError
 */
const de_DeleteDBProxyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBProxyEndpointCommand
 */
export const de_DeleteDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBProxyEndpointCommandError(output, context);
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
 * deserializeAws_queryDeleteDBProxyEndpointCommandError
 */
const de_DeleteDBProxyEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyEndpointNotFoundFault":
    case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
      throw await de_DBProxyEndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBProxyEndpointStateFault":
      throw await de_InvalidDBProxyEndpointStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBSecurityGroupCommand
 */
export const de_DeleteDBSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBSecurityGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDBSecurityGroupCommandError
 */
const de_DeleteDBSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteDBSnapshotCommand
 */
export const de_DeleteDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDBSnapshotCommandError(output, context);
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
 * deserializeAws_queryDeleteDBSnapshotCommandError
 */
const de_DeleteDBSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetStateFault":
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
    case "com.amazonaws.rds#InvalidEventSubscriptionStateFault":
      throw await de_InvalidEventSubscriptionStateFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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
 * deserializeAws_queryDeleteOptionGroupCommand
 */
export const de_DeleteOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOptionGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteOptionGroupCommandError
 */
const de_DeleteOptionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOptionGroupStateFault":
    case "com.amazonaws.rds#InvalidOptionGroupStateFault":
      throw await de_InvalidOptionGroupStateFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDeregisterDBProxyTargetsCommand
 */
export const de_DeregisterDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterDBProxyTargetsCommandError(output, context);
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
 * deserializeAws_queryDeregisterDBProxyTargetsCommandError
 */
const de_DeregisterDBProxyTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDBProxyTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetNotFoundFault":
      throw await de_DBProxyTargetNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAttributesCommandError(output, context);
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
 * deserializeAws_queryDescribeAccountAttributesCommandError
 */
const de_DescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
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
 * deserializeAws_queryDescribeBlueGreenDeploymentsCommand
 */
export const de_DescribeBlueGreenDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBlueGreenDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBlueGreenDeploymentsCommandError(output, context);
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
 * deserializeAws_queryDescribeBlueGreenDeploymentsCommandError
 */
const de_DescribeBlueGreenDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBlueGreenDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await de_BlueGreenDeploymentNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeCertificatesCommand
 */
export const de_DescribeCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCertificatesCommandError(output, context);
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
 * deserializeAws_queryDescribeCertificatesCommandError
 */
const de_DescribeCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFound":
    case "com.amazonaws.rds#CertificateNotFoundFault":
      throw await de_CertificateNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClusterAutomatedBackupsCommand
 */
export const de_DescribeDBClusterAutomatedBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterAutomatedBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClusterAutomatedBackupsCommandError(output, context);
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
 * deserializeAws_queryDescribeDBClusterAutomatedBackupsCommandError
 */
const de_DescribeDBClusterAutomatedBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterAutomatedBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAutomatedBackupNotFoundFault":
    case "com.amazonaws.rds#DBClusterAutomatedBackupNotFoundFault":
      throw await de_DBClusterAutomatedBackupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBClusterBacktracksCommand
 */
export const de_DescribeDBClusterBacktracksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterBacktracksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBClusterBacktracksCommandError(output, context);
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
 * deserializeAws_queryDescribeDBClusterBacktracksCommandError
 */
const de_DescribeDBClusterBacktracksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterBacktracksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterBacktrackNotFoundFault":
    case "com.amazonaws.rds#DBClusterBacktrackNotFoundFault":
      throw await de_DBClusterBacktrackNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
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
 * deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand
 */
export const de_DescribeDBInstanceAutomatedBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBInstanceAutomatedBackupsCommandError(output, context);
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
 * deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommandError
 */
const de_DescribeDBInstanceAutomatedBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceAutomatedBackupNotFound":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
      throw await de_DBInstanceAutomatedBackupNotFoundFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
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
 * deserializeAws_queryDescribeDBLogFilesCommand
 */
export const de_DescribeDBLogFilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBLogFilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBLogFilesCommandError(output, context);
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
 * deserializeAws_queryDescribeDBLogFilesCommandError
 */
const de_DescribeDBLogFilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBLogFilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
 * deserializeAws_queryDescribeDBProxiesCommand
 */
export const de_DescribeDBProxiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBProxiesCommandError(output, context);
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
 * deserializeAws_queryDescribeDBProxiesCommandError
 */
const de_DescribeDBProxiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBProxyEndpointsCommand
 */
export const de_DescribeDBProxyEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBProxyEndpointsCommandError(output, context);
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
 * deserializeAws_queryDescribeDBProxyEndpointsCommandError
 */
const de_DescribeDBProxyEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyEndpointNotFoundFault":
    case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
      throw await de_DBProxyEndpointNotFoundFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBProxyTargetGroupsCommand
 */
export const de_DescribeDBProxyTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBProxyTargetGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeDBProxyTargetGroupsCommandError
 */
const de_DescribeDBProxyTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBProxyTargetsCommand
 */
export const de_DescribeDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBProxyTargetsCommandError(output, context);
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
 * deserializeAws_queryDescribeDBProxyTargetsCommandError
 */
const de_DescribeDBProxyTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetNotFoundFault":
      throw await de_DBProxyTargetNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBSecurityGroupsCommand
 */
export const de_DescribeDBSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBSecurityGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeDBSecurityGroupsCommandError
 */
const de_DescribeDBSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeDBSnapshotAttributesCommand
 */
export const de_DescribeDBSnapshotAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBSnapshotAttributesCommandError(output, context);
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
 * deserializeAws_queryDescribeDBSnapshotAttributesCommandError
 */
const de_DescribeDBSnapshotAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
 * deserializeAws_queryDescribeDBSnapshotsCommand
 */
export const de_DescribeDBSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDBSnapshotsCommandError(output, context);
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
 * deserializeAws_queryDescribeDBSnapshotsCommandError
 */
const de_DescribeDBSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
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
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
 * deserializeAws_queryDescribeExportTasksCommand
 */
export const de_DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExportTasksCommandError(output, context);
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
 * deserializeAws_queryDescribeExportTasksCommandError
 */
const de_DescribeExportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExportTaskNotFound":
    case "com.amazonaws.rds#ExportTaskNotFoundFault":
      throw await de_ExportTaskNotFoundFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
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
 * deserializeAws_queryDescribeOptionGroupOptionsCommand
 */
export const de_DescribeOptionGroupOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOptionGroupOptionsCommandError(output, context);
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
 * deserializeAws_queryDescribeOptionGroupOptionsCommandError
 */
const de_DescribeOptionGroupOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupOptionsCommandOutput> => {
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
 * deserializeAws_queryDescribeOptionGroupsCommand
 */
export const de_DescribeOptionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOptionGroupsCommandError(output, context);
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
 * deserializeAws_queryDescribeOptionGroupsCommandError
 */
const de_DescribeOptionGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#ResourceNotFoundFault":
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
 * deserializeAws_queryDescribeReservedDBInstancesCommand
 */
export const de_DescribeReservedDBInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedDBInstancesCommandError(output, context);
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
 * deserializeAws_queryDescribeReservedDBInstancesCommandError
 */
const de_DescribeReservedDBInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReservedDBInstanceNotFound":
    case "com.amazonaws.rds#ReservedDBInstanceNotFoundFault":
      throw await de_ReservedDBInstanceNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand
 */
export const de_DescribeReservedDBInstancesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedDBInstancesOfferingsCommandError(output, context);
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
 * deserializeAws_queryDescribeReservedDBInstancesOfferingsCommandError
 */
const de_DescribeReservedDBInstancesOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReservedDBInstancesOfferingNotFound":
    case "com.amazonaws.rds#ReservedDBInstancesOfferingNotFoundFault":
      throw await de_ReservedDBInstancesOfferingNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeSourceRegionsCommand
 */
export const de_DescribeSourceRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSourceRegionsCommandError(output, context);
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
 * deserializeAws_queryDescribeSourceRegionsCommandError
 */
const de_DescribeSourceRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceRegionsCommandOutput> => {
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
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
 * deserializeAws_queryDownloadDBLogFilePortionCommand
 */
export const de_DownloadDBLogFilePortionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DownloadDBLogFilePortionCommandError(output, context);
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
 * deserializeAws_queryDownloadDBLogFilePortionCommandError
 */
const de_DownloadDBLogFilePortionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBLogFileNotFoundFault":
    case "com.amazonaws.rds#DBLogFileNotFoundFault":
      throw await de_DBLogFileNotFoundFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await de_BlueGreenDeploymentNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
 * deserializeAws_queryModifyActivityStreamCommand
 */
export const de_ModifyActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyActivityStreamCommandError(output, context);
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
 * deserializeAws_queryModifyActivityStreamCommandError
 */
const de_ModifyActivityStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyActivityStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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
 * deserializeAws_queryModifyCertificatesCommand
 */
export const de_ModifyCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCertificatesCommandError(output, context);
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
 * deserializeAws_queryModifyCertificatesCommandError
 */
const de_ModifyCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFound":
    case "com.amazonaws.rds#CertificateNotFoundFault":
      throw await de_CertificateNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyCurrentDBClusterCapacityCommand
 */
export const de_ModifyCurrentDBClusterCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCurrentDBClusterCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCurrentDBClusterCapacityCommandError(output, context);
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
 * deserializeAws_queryModifyCurrentDBClusterCapacityCommandError
 */
const de_ModifyCurrentDBClusterCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCurrentDBClusterCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterCapacityFault":
    case "com.amazonaws.rds#InvalidDBClusterCapacityFault":
      throw await de_InvalidDBClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
 * deserializeAws_queryModifyCustomDBEngineVersionCommand
 */
export const de_ModifyCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCustomDBEngineVersionCommandError(output, context);
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
 * deserializeAws_queryModifyCustomDBEngineVersionCommandError
 */
const de_ModifyCustomDBEngineVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCustomDBEngineVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomDBEngineVersionNotFoundFault":
    case "com.amazonaws.rds#CustomDBEngineVersionNotFoundFault":
      throw await de_CustomDBEngineVersionNotFoundFaultRes(parsedOutput, context);
    case "InvalidCustomDBEngineVersionStateFault":
    case "com.amazonaws.rds#InvalidCustomDBEngineVersionStateFault":
      throw await de_InvalidCustomDBEngineVersionStateFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotAvailableFault":
    case "com.amazonaws.rds#StorageTypeNotAvailableFault":
      throw await de_StorageTypeNotAvailableFaultRes(parsedOutput, context);
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
  contents = de_DBClusterEndpoint(data.ModifyDBClusterEndpointResult, context);
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
    case "com.amazonaws.rds#DBClusterEndpointNotFoundFault":
      throw await de_DBClusterEndpointNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBClusterEndpointStateFault":
      throw await de_InvalidDBClusterEndpointStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.rds#SharedSnapshotQuotaExceededFault":
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
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBUpgradeDependencyFailure":
    case "com.amazonaws.rds#DBUpgradeDependencyFailureFault":
      throw await de_DBUpgradeDependencyFailureFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await de_NetworkTypeNotSupportedRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
 * deserializeAws_queryModifyDBProxyCommand
 */
export const de_ModifyDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBProxyCommandError(output, context);
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
 * deserializeAws_queryModifyDBProxyCommandError
 */
const de_ModifyDBProxyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyAlreadyExistsFault":
    case "com.amazonaws.rds#DBProxyAlreadyExistsFault":
      throw await de_DBProxyAlreadyExistsFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBProxyEndpointCommand
 */
export const de_ModifyDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBProxyEndpointCommandError(output, context);
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
 * deserializeAws_queryModifyDBProxyEndpointCommandError
 */
const de_ModifyDBProxyEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyEndpointAlreadyExistsFault":
    case "com.amazonaws.rds#DBProxyEndpointAlreadyExistsFault":
      throw await de_DBProxyEndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "DBProxyEndpointNotFoundFault":
    case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
      throw await de_DBProxyEndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBProxyEndpointStateFault":
      throw await de_InvalidDBProxyEndpointStateFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBProxyTargetGroupCommand
 */
export const de_ModifyDBProxyTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBProxyTargetGroupCommandError(output, context);
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
 * deserializeAws_queryModifyDBProxyTargetGroupCommandError
 */
const de_ModifyDBProxyTargetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyTargetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryModifyDBSnapshotCommand
 */
export const de_ModifyDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBSnapshotCommandError(output, context);
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
 * deserializeAws_queryModifyDBSnapshotCommandError
 */
const de_ModifyDBSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
 * deserializeAws_queryModifyDBSnapshotAttributeCommand
 */
export const de_ModifyDBSnapshotAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyDBSnapshotAttributeCommandError(output, context);
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
 * deserializeAws_queryModifyDBSnapshotAttributeCommandError
 */
const de_ModifyDBSnapshotAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.rds#SharedSnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.rds#DBSubnetQuotaExceededFault":
      throw await de_DBSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.rds#SubnetAlreadyInUse":
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
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.rds#SubscriptionCategoryNotFoundFault":
      throw await de_SubscriptionCategoryNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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
 * deserializeAws_queryModifyOptionGroupCommand
 */
export const de_ModifyOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyOptionGroupCommandError(output, context);
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
 * deserializeAws_queryModifyOptionGroupCommandError
 */
const de_ModifyOptionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyOptionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOptionGroupStateFault":
    case "com.amazonaws.rds#InvalidOptionGroupStateFault":
      throw await de_InvalidOptionGroupStateFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryPromoteReadReplicaCommand
 */
export const de_PromoteReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PromoteReadReplicaCommandError(output, context);
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
 * deserializeAws_queryPromoteReadReplicaCommandError
 */
const de_PromoteReadReplicaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
 * deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand
 */
export const de_PurchaseReservedDBInstancesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PurchaseReservedDBInstancesOfferingCommandError(output, context);
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
 * deserializeAws_queryPurchaseReservedDBInstancesOfferingCommandError
 */
const de_PurchaseReservedDBInstancesOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReservedDBInstanceAlreadyExists":
    case "com.amazonaws.rds#ReservedDBInstanceAlreadyExistsFault":
      throw await de_ReservedDBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedDBInstanceQuotaExceeded":
    case "com.amazonaws.rds#ReservedDBInstanceQuotaExceededFault":
      throw await de_ReservedDBInstanceQuotaExceededFaultRes(parsedOutput, context);
    case "ReservedDBInstancesOfferingNotFound":
    case "com.amazonaws.rds#ReservedDBInstancesOfferingNotFoundFault":
      throw await de_ReservedDBInstancesOfferingNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_queryRebootDBClusterCommand
 */
export const de_RebootDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootDBClusterCommandError(output, context);
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
 * deserializeAws_queryRebootDBClusterCommandError
 */
const de_RebootDBClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
 * deserializeAws_queryRegisterDBProxyTargetsCommand
 */
export const de_RegisterDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterDBProxyTargetsCommandError(output, context);
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
 * deserializeAws_queryRegisterDBProxyTargetsCommandError
 */
const de_RegisterDBProxyTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDBProxyTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetAlreadyRegisteredFault":
    case "com.amazonaws.rds#DBProxyTargetAlreadyRegisteredFault":
      throw await de_DBProxyTargetAlreadyRegisteredFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "InsufficientAvailableIPsInSubnetFault":
    case "com.amazonaws.rds#InsufficientAvailableIPsInSubnetFault":
      throw await de_InsufficientAvailableIPsInSubnetFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await de_InvalidDBProxyStateFaultRes(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterRoleNotFound":
    case "com.amazonaws.rds#DBClusterRoleNotFoundFault":
      throw await de_DBClusterRoleNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
 * deserializeAws_queryRemoveRoleFromDBInstanceCommand
 */
export const de_RemoveRoleFromDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveRoleFromDBInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveRoleFromDBInstanceCommandError
 */
const de_RemoveRoleFromDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceRoleNotFound":
    case "com.amazonaws.rds#DBInstanceRoleNotFoundFault":
      throw await de_DBInstanceRoleNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await de_BlueGreenDeploymentNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await de_DBProxyNotFoundFaultRes(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await de_DBProxyTargetGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
 * deserializeAws_queryRestoreDBClusterFromS3Command
 */
export const de_RestoreDBClusterFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreDBClusterFromS3CommandError(output, context);
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
 * deserializeAws_queryRestoreDBClusterFromS3CommandError
 */
const de_RestoreDBClusterFromS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await de_InvalidDBSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidS3BucketFault":
    case "com.amazonaws.rds#InvalidS3BucketFault":
      throw await de_InvalidS3BucketFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.rds#InsufficientDBClusterCapacityFault":
      throw await de_InsufficientDBClusterCapacityFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await de_DBClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "DBClusterAutomatedBackupNotFoundFault":
    case "com.amazonaws.rds#DBClusterAutomatedBackupNotFoundFault":
      throw await de_DBClusterAutomatedBackupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await de_DBClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await de_DBClusterQuotaExceededFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.rds#InsufficientDBClusterCapacityFault":
      throw await de_InsufficientDBClusterCapacityFaultRes(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await de_InsufficientStorageClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await de_InvalidDBClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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
 * deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand
 */
export const de_RestoreDBInstanceFromDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreDBInstanceFromDBSnapshotCommandError(output, context);
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
 * deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommandError
 */
const de_RestoreDBInstanceFromDBSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await de_BackupPolicyNotFoundFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await de_InvalidDBSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await de_NetworkTypeNotSupportedRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
 * deserializeAws_queryRestoreDBInstanceFromS3Command
 */
export const de_RestoreDBInstanceFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreDBInstanceFromS3CommandError(output, context);
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
 * deserializeAws_queryRestoreDBInstanceFromS3CommandError
 */
const de_RestoreDBInstanceFromS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await de_BackupPolicyNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidS3BucketFault":
    case "com.amazonaws.rds#InvalidS3BucketFault":
      throw await de_InvalidS3BucketFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await de_NetworkTypeNotSupportedRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
 * deserializeAws_queryRestoreDBInstanceToPointInTimeCommand
 */
export const de_RestoreDBInstanceToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreDBInstanceToPointInTimeCommandError(output, context);
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
 * deserializeAws_queryRestoreDBInstanceToPointInTimeCommandError
 */
const de_RestoreDBInstanceToPointInTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceToPointInTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await de_BackupPolicyNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await de_DBInstanceAlreadyExistsFaultRes(parsedOutput, context);
    case "DBInstanceAutomatedBackupNotFound":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
      throw await de_DBInstanceAutomatedBackupNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await de_DBParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await de_DomainNotFoundFaultRes(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await de_InstanceQuotaExceededFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await de_NetworkTypeNotSupportedRes(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await de_OptionGroupNotFoundFaultRes(parsedOutput, context);
    case "PointInTimeRestoreNotEnabled":
    case "com.amazonaws.rds#PointInTimeRestoreNotEnabledFault":
      throw await de_PointInTimeRestoreNotEnabledFaultRes(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await de_ProvisionedIopsNotAvailableInAZFaultRes(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
 * deserializeAws_queryRevokeDBSecurityGroupIngressCommand
 */
export const de_RevokeDBSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDBSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeDBSecurityGroupIngressCommandError(output, context);
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
 * deserializeAws_queryRevokeDBSecurityGroupIngressCommandError
 */
const de_RevokeDBSecurityGroupIngressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDBSecurityGroupIngressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await de_DBSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await de_InvalidDBSecurityGroupStateFaultRes(parsedOutput, context);
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
 * deserializeAws_queryStartActivityStreamCommand
 */
export const de_StartActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartActivityStreamCommandError(output, context);
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
 * deserializeAws_queryStartActivityStreamCommandError
 */
const de_StartActivityStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartActivityStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
 * deserializeAws_queryStartDBInstanceCommand
 */
export const de_StartDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDBInstanceCommandError(output, context);
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
 * deserializeAws_queryStartDBInstanceCommandError
 */
const de_StartDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_DBSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await de_DBSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await de_InsufficientDBInstanceCapacityFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
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
 * deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand
 */
export const de_StartDBInstanceAutomatedBackupsReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDBInstanceAutomatedBackupsReplicationCommandError(output, context);
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
 * deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommandError
 */
const de_StartDBInstanceAutomatedBackupsReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceAutomatedBackupQuotaExceeded":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupQuotaExceededFault":
      throw await de_DBInstanceAutomatedBackupQuotaExceededFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
 * deserializeAws_queryStartExportTaskCommand
 */
export const de_StartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartExportTaskCommandError(output, context);
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
 * deserializeAws_queryStartExportTaskCommandError
 */
const de_StartExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await de_DBClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await de_DBSnapshotNotFoundFaultRes(parsedOutput, context);
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
    case "InvalidS3BucketFault":
    case "com.amazonaws.rds#InvalidS3BucketFault":
      throw await de_InvalidS3BucketFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
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
 * deserializeAws_queryStopActivityStreamCommand
 */
export const de_StopActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopActivityStreamCommandError(output, context);
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
 * deserializeAws_queryStopActivityStreamCommandError
 */
const de_StopActivityStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopActivityStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
 * deserializeAws_queryStopDBInstanceCommand
 */
export const de_StopDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDBInstanceCommandError(output, context);
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
 * deserializeAws_queryStopDBInstanceCommandError
 */
const de_StopDBInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await de_DBSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await de_InvalidDBInstanceStateFaultRes(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
 * deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand
 */
export const de_StopDBInstanceAutomatedBackupsReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDBInstanceAutomatedBackupsReplicationCommandError(output, context);
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
 * deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommandError
 */
const de_StopDBInstanceAutomatedBackupsReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
 * deserializeAws_querySwitchoverBlueGreenDeploymentCommand
 */
export const de_SwitchoverBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SwitchoverBlueGreenDeploymentCommandError(output, context);
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
 * deserializeAws_querySwitchoverBlueGreenDeploymentCommandError
 */
const de_SwitchoverBlueGreenDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverBlueGreenDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await de_BlueGreenDeploymentNotFoundFaultRes(parsedOutput, context);
    case "InvalidBlueGreenDeploymentStateFault":
    case "com.amazonaws.rds#InvalidBlueGreenDeploymentStateFault":
      throw await de_InvalidBlueGreenDeploymentStateFaultRes(parsedOutput, context);
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
 * deserializeAws_querySwitchoverGlobalClusterCommand
 */
export const de_SwitchoverGlobalClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverGlobalClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SwitchoverGlobalClusterCommandError(output, context);
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
 * deserializeAws_querySwitchoverGlobalClusterCommandError
 */
const de_SwitchoverGlobalClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverGlobalClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await de_DBClusterNotFoundFaultRes(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await de_GlobalClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await de_InvalidDBClusterStateFaultRes(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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
 * deserializeAws_querySwitchoverReadReplicaCommand
 */
export const de_SwitchoverReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SwitchoverReadReplicaCommandError(output, context);
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
 * deserializeAws_querySwitchoverReadReplicaCommandError
 */
const de_SwitchoverReadReplicaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverReadReplicaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await de_DBInstanceNotFoundFaultRes(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
 * serializeAws_queryAddRoleToDBInstanceMessage
 */
const se_AddRoleToDBInstanceMessage = (input: AddRoleToDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
 * serializeAws_queryAuthorizeDBSecurityGroupIngressMessage
 */
const se_AuthorizeDBSecurityGroupIngressMessage = (
  input: AuthorizeDBSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
  }
  if (input.CIDRIP != null) {
    entries["CIDRIP"] = input.CIDRIP;
  }
  if (input.EC2SecurityGroupName != null) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupId != null) {
    entries["EC2SecurityGroupId"] = input.EC2SecurityGroupId;
  }
  if (input.EC2SecurityGroupOwnerId != null) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
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
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.BacktrackTo != null) {
    entries["BacktrackTo"] = input.BacktrackTo.toISOString().split(".")[0] + "Z";
  }
  if (input.Force != null) {
    entries["Force"] = input.Force;
  }
  if (input.UseEarliestTimeOnPointInTimeUnavailable != null) {
    entries["UseEarliestTimeOnPointInTimeUnavailable"] = input.UseEarliestTimeOnPointInTimeUnavailable;
  }
  return entries;
};

/**
 * serializeAws_queryCancelExportTaskMessage
 */
const se_CancelExportTaskMessage = (input: CancelExportTaskMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExportTaskIdentifier != null) {
    entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
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
 * serializeAws_queryConnectionPoolConfiguration
 */
const se_ConnectionPoolConfiguration = (input: ConnectionPoolConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MaxConnectionsPercent != null) {
    entries["MaxConnectionsPercent"] = input.MaxConnectionsPercent;
  }
  if (input.MaxIdleConnectionsPercent != null) {
    entries["MaxIdleConnectionsPercent"] = input.MaxIdleConnectionsPercent;
  }
  if (input.ConnectionBorrowTimeout != null) {
    entries["ConnectionBorrowTimeout"] = input.ConnectionBorrowTimeout;
  }
  if (input.SessionPinningFilters != null) {
    const memberEntries = se_StringList(input.SessionPinningFilters, context);
    if (input.SessionPinningFilters?.length === 0) {
      entries.SessionPinningFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SessionPinningFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InitQuery != null) {
    entries["InitQuery"] = input.InitQuery;
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
 * serializeAws_queryCopyDBSnapshotMessage
 */
const se_CopyDBSnapshotMessage = (input: CopyDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceDBSnapshotIdentifier != null) {
    entries["SourceDBSnapshotIdentifier"] = input.SourceDBSnapshotIdentifier;
  }
  if (input.TargetDBSnapshotIdentifier != null) {
    entries["TargetDBSnapshotIdentifier"] = input.TargetDBSnapshotIdentifier;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
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
  if (input.CopyTags != null) {
    entries["CopyTags"] = input.CopyTags;
  }
  if (input.PreSignedUrl != null) {
    entries["PreSignedUrl"] = input.PreSignedUrl;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.TargetCustomAvailabilityZone != null) {
    entries["TargetCustomAvailabilityZone"] = input.TargetCustomAvailabilityZone;
  }
  if (input.CopyOptionGroup != null) {
    entries["CopyOptionGroup"] = input.CopyOptionGroup;
  }
  return entries;
};

/**
 * serializeAws_queryCopyOptionGroupMessage
 */
const se_CopyOptionGroupMessage = (input: CopyOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceOptionGroupIdentifier != null) {
    entries["SourceOptionGroupIdentifier"] = input.SourceOptionGroupIdentifier;
  }
  if (input.TargetOptionGroupIdentifier != null) {
    entries["TargetOptionGroupIdentifier"] = input.TargetOptionGroupIdentifier;
  }
  if (input.TargetOptionGroupDescription != null) {
    entries["TargetOptionGroupDescription"] = input.TargetOptionGroupDescription;
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
 * serializeAws_queryCreateBlueGreenDeploymentRequest
 */
const se_CreateBlueGreenDeploymentRequest = (input: CreateBlueGreenDeploymentRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.BlueGreenDeploymentName != null) {
    entries["BlueGreenDeploymentName"] = input.BlueGreenDeploymentName;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.TargetEngineVersion != null) {
    entries["TargetEngineVersion"] = input.TargetEngineVersion;
  }
  if (input.TargetDBParameterGroupName != null) {
    entries["TargetDBParameterGroupName"] = input.TargetDBParameterGroupName;
  }
  if (input.TargetDBClusterParameterGroupName != null) {
    entries["TargetDBClusterParameterGroupName"] = input.TargetDBClusterParameterGroupName;
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
  if (input.TargetDBInstanceClass != null) {
    entries["TargetDBInstanceClass"] = input.TargetDBInstanceClass;
  }
  if (input.UpgradeTargetStorageConfig != null) {
    entries["UpgradeTargetStorageConfig"] = input.UpgradeTargetStorageConfig;
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
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.DatabaseInstallationFilesS3BucketName != null) {
    entries["DatabaseInstallationFilesS3BucketName"] = input.DatabaseInstallationFilesS3BucketName;
  }
  if (input.DatabaseInstallationFilesS3Prefix != null) {
    entries["DatabaseInstallationFilesS3Prefix"] = input.DatabaseInstallationFilesS3Prefix;
  }
  if (input.ImageId != null) {
    entries["ImageId"] = input.ImageId;
  }
  if (input.KMSKeyId != null) {
    entries["KMSKeyId"] = input.KMSKeyId;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Manifest != null) {
    entries["Manifest"] = input.Manifest;
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
  if (input.SourceCustomDbEngineVersionIdentifier != null) {
    entries["SourceCustomDbEngineVersionIdentifier"] = input.SourceCustomDbEngineVersionIdentifier;
  }
  if (input.UseAwsProvidedLatestImage != null) {
    entries["UseAwsProvidedLatestImage"] = input.UseAwsProvidedLatestImage;
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.EngineMode != null) {
    entries["EngineMode"] = input.EngineMode;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = se_ScalingConfiguration(input.ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.GlobalClusterIdentifier != null) {
    entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
  }
  if (input.EnableHttpEndpoint != null) {
    entries["EnableHttpEndpoint"] = input.EnableHttpEndpoint;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.EnableGlobalWriteForwarding != null) {
    entries["EnableGlobalWriteForwarding"] = input.EnableGlobalWriteForwarding;
  }
  if (input.DBClusterInstanceClass != null) {
    entries["DBClusterInstanceClass"] = input.DBClusterInstanceClass;
  }
  if (input.AllocatedStorage != null) {
    entries["AllocatedStorage"] = input.AllocatedStorage;
  }
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.MonitoringInterval != null) {
    entries["MonitoringInterval"] = input.MonitoringInterval;
  }
  if (input.MonitoringRoleArn != null) {
    entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
  }
  if (input.EnablePerformanceInsights != null) {
    entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
  }
  if (input.PerformanceInsightsKMSKeyId != null) {
    entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
  }
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.DBSystemId != null) {
    entries["DBSystemId"] = input.DBSystemId;
  }
  if (input.ManageMasterUserPassword != null) {
    entries["ManageMasterUserPassword"] = input.ManageMasterUserPassword;
  }
  if (input.MasterUserSecretKmsKeyId != null) {
    entries["MasterUserSecretKmsKeyId"] = input.MasterUserSecretKmsKeyId;
  }
  if (input.EnableLocalWriteForwarding != null) {
    entries["EnableLocalWriteForwarding"] = input.EnableLocalWriteForwarding;
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
  if (input.NcharCharacterSetName != null) {
    entries["NcharCharacterSetName"] = input.NcharCharacterSetName;
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
  if (input.DomainFqdn != null) {
    entries["DomainFqdn"] = input.DomainFqdn;
  }
  if (input.DomainOu != null) {
    entries["DomainOu"] = input.DomainOu;
  }
  if (input.DomainAuthSecretArn != null) {
    entries["DomainAuthSecretArn"] = input.DomainAuthSecretArn;
  }
  if (input.DomainDnsIps != null) {
    const memberEntries = se_StringList(input.DomainDnsIps, context);
    if (input.DomainDnsIps?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
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
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = se_ProcessorFeatureList(input.ProcessorFeatures, context);
    if (input.ProcessorFeatures?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.MaxAllocatedStorage != null) {
    entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
  }
  if (input.EnableCustomerOwnedIp != null) {
    entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
  }
  if (input.CustomIamInstanceProfile != null) {
    entries["CustomIamInstanceProfile"] = input.CustomIamInstanceProfile;
  }
  if (input.BackupTarget != null) {
    entries["BackupTarget"] = input.BackupTarget;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.StorageThroughput != null) {
    entries["StorageThroughput"] = input.StorageThroughput;
  }
  if (input.ManageMasterUserPassword != null) {
    entries["ManageMasterUserPassword"] = input.ManageMasterUserPassword;
  }
  if (input.MasterUserSecretKmsKeyId != null) {
    entries["MasterUserSecretKmsKeyId"] = input.MasterUserSecretKmsKeyId;
  }
  if (input.CACertificateIdentifier != null) {
    entries["CACertificateIdentifier"] = input.CACertificateIdentifier;
  }
  if (input.DBSystemId != null) {
    entries["DBSystemId"] = input.DBSystemId;
  }
  if (input.DedicatedLogVolume != null) {
    entries["DedicatedLogVolume"] = input.DedicatedLogVolume;
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
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.SourceDBInstanceIdentifier != null) {
    entries["SourceDBInstanceIdentifier"] = input.SourceDBInstanceIdentifier;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
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
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
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
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.PreSignedUrl != null) {
    entries["PreSignedUrl"] = input.PreSignedUrl;
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
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = se_ProcessorFeatureList(input.ProcessorFeatures, context);
    if (input.ProcessorFeatures?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UseDefaultProcessorFeatures != null) {
    entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.DomainFqdn != null) {
    entries["DomainFqdn"] = input.DomainFqdn;
  }
  if (input.DomainOu != null) {
    entries["DomainOu"] = input.DomainOu;
  }
  if (input.DomainAuthSecretArn != null) {
    entries["DomainAuthSecretArn"] = input.DomainAuthSecretArn;
  }
  if (input.DomainDnsIps != null) {
    const memberEntries = se_StringList(input.DomainDnsIps, context);
    if (input.DomainDnsIps?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplicaMode != null) {
    entries["ReplicaMode"] = input.ReplicaMode;
  }
  if (input.MaxAllocatedStorage != null) {
    entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
  }
  if (input.CustomIamInstanceProfile != null) {
    entries["CustomIamInstanceProfile"] = input.CustomIamInstanceProfile;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.StorageThroughput != null) {
    entries["StorageThroughput"] = input.StorageThroughput;
  }
  if (input.EnableCustomerOwnedIp != null) {
    entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
  }
  if (input.AllocatedStorage != null) {
    entries["AllocatedStorage"] = input.AllocatedStorage;
  }
  if (input.SourceDBClusterIdentifier != null) {
    entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
  }
  if (input.DedicatedLogVolume != null) {
    entries["DedicatedLogVolume"] = input.DedicatedLogVolume;
  }
  if (input.UpgradeStorageConfig != null) {
    entries["UpgradeStorageConfig"] = input.UpgradeStorageConfig;
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
 * serializeAws_queryCreateDBProxyEndpointRequest
 */
const se_CreateDBProxyEndpointRequest = (input: CreateDBProxyEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
  }
  if (input.VpcSubnetIds != null) {
    const memberEntries = se_StringList(input.VpcSubnetIds, context);
    if (input.VpcSubnetIds?.length === 0) {
      entries.VpcSubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_StringList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetRole != null) {
    entries["TargetRole"] = input.TargetRole;
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
 * serializeAws_queryCreateDBProxyRequest
 */
const se_CreateDBProxyRequest = (input: CreateDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.EngineFamily != null) {
    entries["EngineFamily"] = input.EngineFamily;
  }
  if (input.Auth != null) {
    const memberEntries = se_UserAuthConfigList(input.Auth, context);
    if (input.Auth?.length === 0) {
      entries.Auth = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Auth.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.VpcSubnetIds != null) {
    const memberEntries = se_StringList(input.VpcSubnetIds, context);
    if (input.VpcSubnetIds?.length === 0) {
      entries.VpcSubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_StringList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RequireTLS != null) {
    entries["RequireTLS"] = input.RequireTLS;
  }
  if (input.IdleClientTimeout != null) {
    entries["IdleClientTimeout"] = input.IdleClientTimeout;
  }
  if (input.DebugLogging != null) {
    entries["DebugLogging"] = input.DebugLogging;
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
 * serializeAws_queryCreateDBSecurityGroupMessage
 */
const se_CreateDBSecurityGroupMessage = (input: CreateDBSecurityGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
  }
  if (input.DBSecurityGroupDescription != null) {
    entries["DBSecurityGroupDescription"] = input.DBSecurityGroupDescription;
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
 * serializeAws_queryCreateDBSnapshotMessage
 */
const se_CreateDBSnapshotMessage = (input: CreateDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
  }
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
  if (input.DatabaseName != null) {
    entries["DatabaseName"] = input.DatabaseName;
  }
  if (input.StorageEncrypted != null) {
    entries["StorageEncrypted"] = input.StorageEncrypted;
  }
  return entries;
};

/**
 * serializeAws_queryCreateOptionGroupMessage
 */
const se_CreateOptionGroupMessage = (input: CreateOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.EngineName != null) {
    entries["EngineName"] = input.EngineName;
  }
  if (input.MajorEngineVersion != null) {
    entries["MajorEngineVersion"] = input.MajorEngineVersion;
  }
  if (input.OptionGroupDescription != null) {
    entries["OptionGroupDescription"] = input.OptionGroupDescription;
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
  if (input.BlueGreenDeploymentIdentifier != null) {
    entries["BlueGreenDeploymentIdentifier"] = input.BlueGreenDeploymentIdentifier;
  }
  if (input.DeleteTarget != null) {
    entries["DeleteTarget"] = input.DeleteTarget;
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
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
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
  if (input.DbClusterResourceId != null) {
    entries["DbClusterResourceId"] = input.DbClusterResourceId;
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
  if (input.DeleteAutomatedBackups != null) {
    entries["DeleteAutomatedBackups"] = input.DeleteAutomatedBackups;
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
 * serializeAws_queryDeleteDBInstanceAutomatedBackupMessage
 */
const se_DeleteDBInstanceAutomatedBackupMessage = (
  input: DeleteDBInstanceAutomatedBackupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DbiResourceId != null) {
    entries["DbiResourceId"] = input.DbiResourceId;
  }
  if (input.DBInstanceAutomatedBackupsArn != null) {
    entries["DBInstanceAutomatedBackupsArn"] = input.DBInstanceAutomatedBackupsArn;
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
  if (input.DeleteAutomatedBackups != null) {
    entries["DeleteAutomatedBackups"] = input.DeleteAutomatedBackups;
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
 * serializeAws_queryDeleteDBProxyEndpointRequest
 */
const se_DeleteDBProxyEndpointRequest = (input: DeleteDBProxyEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBProxyRequest
 */
const se_DeleteDBProxyRequest = (input: DeleteDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBSecurityGroupMessage
 */
const se_DeleteDBSecurityGroupMessage = (input: DeleteDBSecurityGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDBSnapshotMessage
 */
const se_DeleteDBSnapshotMessage = (input: DeleteDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
 * serializeAws_queryDeleteOptionGroupMessage
 */
const se_DeleteOptionGroupMessage = (input: DeleteOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterDBProxyTargetsRequest
 */
const se_DeregisterDBProxyTargetsRequest = (input: DeregisterDBProxyTargetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
  }
  if (input.DBInstanceIdentifiers != null) {
    const memberEntries = se_StringList(input.DBInstanceIdentifiers, context);
    if (input.DBInstanceIdentifiers?.length === 0) {
      entries.DBInstanceIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBInstanceIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterIdentifiers != null) {
    const memberEntries = se_StringList(input.DBClusterIdentifiers, context);
    if (input.DBClusterIdentifiers?.length === 0) {
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
  if (input.BlueGreenDeploymentIdentifier != null) {
    entries["BlueGreenDeploymentIdentifier"] = input.BlueGreenDeploymentIdentifier;
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
 * serializeAws_queryDescribeCertificatesMessage
 */
const se_DescribeCertificatesMessage = (input: DescribeCertificatesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CertificateIdentifier != null) {
    entries["CertificateIdentifier"] = input.CertificateIdentifier;
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
 * serializeAws_queryDescribeDBClusterAutomatedBackupsMessage
 */
const se_DescribeDBClusterAutomatedBackupsMessage = (
  input: DescribeDBClusterAutomatedBackupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DbClusterResourceId != null) {
    entries["DbClusterResourceId"] = input.DbClusterResourceId;
  }
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
 * serializeAws_queryDescribeDBClusterBacktracksMessage
 */
const se_DescribeDBClusterBacktracksMessage = (
  input: DescribeDBClusterBacktracksMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.BacktrackIdentifier != null) {
    entries["BacktrackIdentifier"] = input.BacktrackIdentifier;
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
  if (input.IncludeShared != null) {
    entries["IncludeShared"] = input.IncludeShared;
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
  if (input.DbClusterResourceId != null) {
    entries["DbClusterResourceId"] = input.DbClusterResourceId;
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
  if (input.IncludeAll != null) {
    entries["IncludeAll"] = input.IncludeAll;
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
  if (input.DbiResourceId != null) {
    entries["DbiResourceId"] = input.DbiResourceId;
  }
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
  if (input.DBInstanceAutomatedBackupsArn != null) {
    entries["DBInstanceAutomatedBackupsArn"] = input.DBInstanceAutomatedBackupsArn;
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
 * serializeAws_queryDescribeDBLogFilesMessage
 */
const se_DescribeDBLogFilesMessage = (input: DescribeDBLogFilesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.FilenameContains != null) {
    entries["FilenameContains"] = input.FilenameContains;
  }
  if (input.FileLastWritten != null) {
    entries["FileLastWritten"] = input.FileLastWritten;
  }
  if (input.FileSize != null) {
    entries["FileSize"] = input.FileSize;
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
 * serializeAws_queryDescribeDBProxiesRequest
 */
const se_DescribeDBProxiesRequest = (input: DescribeDBProxiesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
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
 * serializeAws_queryDescribeDBProxyEndpointsRequest
 */
const se_DescribeDBProxyEndpointsRequest = (input: DescribeDBProxyEndpointsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
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
 * serializeAws_queryDescribeDBProxyTargetGroupsRequest
 */
const se_DescribeDBProxyTargetGroupsRequest = (
  input: DescribeDBProxyTargetGroupsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
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
 * serializeAws_queryDescribeDBProxyTargetsRequest
 */
const se_DescribeDBProxyTargetsRequest = (input: DescribeDBProxyTargetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
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
 * serializeAws_queryDescribeDBSecurityGroupsMessage
 */
const se_DescribeDBSecurityGroupsMessage = (input: DescribeDBSecurityGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
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
 * serializeAws_queryDescribeDBSnapshotAttributesMessage
 */
const se_DescribeDBSnapshotAttributesMessage = (
  input: DescribeDBSnapshotAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDBSnapshotsMessage
 */
const se_DescribeDBSnapshotsMessage = (input: DescribeDBSnapshotsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
  if (input.DbiResourceId != null) {
    entries["DbiResourceId"] = input.DbiResourceId;
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
 * serializeAws_queryDescribeExportTasksMessage
 */
const se_DescribeExportTasksMessage = (input: DescribeExportTasksMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExportTaskIdentifier != null) {
    entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
  }
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
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
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
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
 * serializeAws_queryDescribeOptionGroupOptionsMessage
 */
const se_DescribeOptionGroupOptionsMessage = (
  input: DescribeOptionGroupOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EngineName != null) {
    entries["EngineName"] = input.EngineName;
  }
  if (input.MajorEngineVersion != null) {
    entries["MajorEngineVersion"] = input.MajorEngineVersion;
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
 * serializeAws_queryDescribeOptionGroupsMessage
 */
const se_DescribeOptionGroupsMessage = (input: DescribeOptionGroupsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
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
  if (input.EngineName != null) {
    entries["EngineName"] = input.EngineName;
  }
  if (input.MajorEngineVersion != null) {
    entries["MajorEngineVersion"] = input.MajorEngineVersion;
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
  if (input.AvailabilityZoneGroup != null) {
    entries["AvailabilityZoneGroup"] = input.AvailabilityZoneGroup;
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
 * serializeAws_queryDescribeReservedDBInstancesMessage
 */
const se_DescribeReservedDBInstancesMessage = (
  input: DescribeReservedDBInstancesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedDBInstanceId != null) {
    entries["ReservedDBInstanceId"] = input.ReservedDBInstanceId;
  }
  if (input.ReservedDBInstancesOfferingId != null) {
    entries["ReservedDBInstancesOfferingId"] = input.ReservedDBInstancesOfferingId;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.Duration != null) {
    entries["Duration"] = input.Duration;
  }
  if (input.ProductDescription != null) {
    entries["ProductDescription"] = input.ProductDescription;
  }
  if (input.OfferingType != null) {
    entries["OfferingType"] = input.OfferingType;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  if (input.LeaseId != null) {
    entries["LeaseId"] = input.LeaseId;
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
 * serializeAws_queryDescribeReservedDBInstancesOfferingsMessage
 */
const se_DescribeReservedDBInstancesOfferingsMessage = (
  input: DescribeReservedDBInstancesOfferingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedDBInstancesOfferingId != null) {
    entries["ReservedDBInstancesOfferingId"] = input.ReservedDBInstancesOfferingId;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.Duration != null) {
    entries["Duration"] = input.Duration;
  }
  if (input.ProductDescription != null) {
    entries["ProductDescription"] = input.ProductDescription;
  }
  if (input.OfferingType != null) {
    entries["OfferingType"] = input.OfferingType;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
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
 * serializeAws_queryDescribeSourceRegionsMessage
 */
const se_DescribeSourceRegionsMessage = (input: DescribeSourceRegionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RegionName != null) {
    entries["RegionName"] = input.RegionName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
 * serializeAws_queryDownloadDBLogFilePortionMessage
 */
const se_DownloadDBLogFilePortionMessage = (input: DownloadDBLogFilePortionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.LogFileName != null) {
    entries["LogFileName"] = input.LogFileName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.NumberOfLines != null) {
    entries["NumberOfLines"] = input.NumberOfLines;
  }
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
  if (input.AllowDataLoss != null) {
    entries["AllowDataLoss"] = input.AllowDataLoss;
  }
  if (input.Switchover != null) {
    entries["Switchover"] = input.Switchover;
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
 * serializeAws_queryModifyActivityStreamRequest
 */
const se_ModifyActivityStreamRequest = (input: ModifyActivityStreamRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.AuditPolicyState != null) {
    entries["AuditPolicyState"] = input.AuditPolicyState;
  }
  return entries;
};

/**
 * serializeAws_queryModifyCertificatesMessage
 */
const se_ModifyCertificatesMessage = (input: ModifyCertificatesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CertificateIdentifier != null) {
    entries["CertificateIdentifier"] = input.CertificateIdentifier;
  }
  if (input.RemoveCustomerOverride != null) {
    entries["RemoveCustomerOverride"] = input.RemoveCustomerOverride;
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
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  if (input.Capacity != null) {
    entries["Capacity"] = input.Capacity;
  }
  if (input.SecondsBeforeTimeout != null) {
    entries["SecondsBeforeTimeout"] = input.SecondsBeforeTimeout;
  }
  if (input.TimeoutAction != null) {
    entries["TimeoutAction"] = input.TimeoutAction;
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
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = se_ScalingConfiguration(input.ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.EnableHttpEndpoint != null) {
    entries["EnableHttpEndpoint"] = input.EnableHttpEndpoint;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.EnableGlobalWriteForwarding != null) {
    entries["EnableGlobalWriteForwarding"] = input.EnableGlobalWriteForwarding;
  }
  if (input.DBClusterInstanceClass != null) {
    entries["DBClusterInstanceClass"] = input.DBClusterInstanceClass;
  }
  if (input.AllocatedStorage != null) {
    entries["AllocatedStorage"] = input.AllocatedStorage;
  }
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.MonitoringInterval != null) {
    entries["MonitoringInterval"] = input.MonitoringInterval;
  }
  if (input.MonitoringRoleArn != null) {
    entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
  }
  if (input.EnablePerformanceInsights != null) {
    entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
  }
  if (input.PerformanceInsightsKMSKeyId != null) {
    entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
  }
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.ManageMasterUserPassword != null) {
    entries["ManageMasterUserPassword"] = input.ManageMasterUserPassword;
  }
  if (input.RotateMasterUserPassword != null) {
    entries["RotateMasterUserPassword"] = input.RotateMasterUserPassword;
  }
  if (input.MasterUserSecretKmsKeyId != null) {
    entries["MasterUserSecretKmsKeyId"] = input.MasterUserSecretKmsKeyId;
  }
  if (input.EngineMode != null) {
    entries["EngineMode"] = input.EngineMode;
  }
  if (input.AllowEngineModeChange != null) {
    entries["AllowEngineModeChange"] = input.AllowEngineModeChange;
  }
  if (input.EnableLocalWriteForwarding != null) {
    entries["EnableLocalWriteForwarding"] = input.EnableLocalWriteForwarding;
  }
  if (input.AwsBackupRecoveryPointArn != null) {
    entries["AwsBackupRecoveryPointArn"] = input.AwsBackupRecoveryPointArn;
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
  if (input.DomainFqdn != null) {
    entries["DomainFqdn"] = input.DomainFqdn;
  }
  if (input.DomainOu != null) {
    entries["DomainOu"] = input.DomainOu;
  }
  if (input.DomainAuthSecretArn != null) {
    entries["DomainAuthSecretArn"] = input.DomainAuthSecretArn;
  }
  if (input.DomainDnsIps != null) {
    const memberEntries = se_StringList(input.DomainDnsIps, context);
    if (input.DomainDnsIps?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
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
  if (input.DisableDomain != null) {
    entries["DisableDomain"] = input.DisableDomain;
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
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
  }
  if (input.CloudwatchLogsExportConfiguration != null) {
    const memberEntries = se_CloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudwatchLogsExportConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ProcessorFeatures != null) {
    const memberEntries = se_ProcessorFeatureList(input.ProcessorFeatures, context);
    if (input.ProcessorFeatures?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UseDefaultProcessorFeatures != null) {
    entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.MaxAllocatedStorage != null) {
    entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
  }
  if (input.CertificateRotationRestart != null) {
    entries["CertificateRotationRestart"] = input.CertificateRotationRestart;
  }
  if (input.ReplicaMode != null) {
    entries["ReplicaMode"] = input.ReplicaMode;
  }
  if (input.EnableCustomerOwnedIp != null) {
    entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
  }
  if (input.AwsBackupRecoveryPointArn != null) {
    entries["AwsBackupRecoveryPointArn"] = input.AwsBackupRecoveryPointArn;
  }
  if (input.AutomationMode != null) {
    entries["AutomationMode"] = input.AutomationMode;
  }
  if (input.ResumeFullAutomationModeMinutes != null) {
    entries["ResumeFullAutomationModeMinutes"] = input.ResumeFullAutomationModeMinutes;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.StorageThroughput != null) {
    entries["StorageThroughput"] = input.StorageThroughput;
  }
  if (input.ManageMasterUserPassword != null) {
    entries["ManageMasterUserPassword"] = input.ManageMasterUserPassword;
  }
  if (input.RotateMasterUserPassword != null) {
    entries["RotateMasterUserPassword"] = input.RotateMasterUserPassword;
  }
  if (input.MasterUserSecretKmsKeyId != null) {
    entries["MasterUserSecretKmsKeyId"] = input.MasterUserSecretKmsKeyId;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.DedicatedLogVolume != null) {
    entries["DedicatedLogVolume"] = input.DedicatedLogVolume;
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
 * serializeAws_queryModifyDBProxyEndpointRequest
 */
const se_ModifyDBProxyEndpointRequest = (input: ModifyDBProxyEndpointRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
  }
  if (input.NewDBProxyEndpointName != null) {
    entries["NewDBProxyEndpointName"] = input.NewDBProxyEndpointName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_StringList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
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
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.NewDBProxyName != null) {
    entries["NewDBProxyName"] = input.NewDBProxyName;
  }
  if (input.Auth != null) {
    const memberEntries = se_UserAuthConfigList(input.Auth, context);
    if (input.Auth?.length === 0) {
      entries.Auth = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Auth.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RequireTLS != null) {
    entries["RequireTLS"] = input.RequireTLS;
  }
  if (input.IdleClientTimeout != null) {
    entries["IdleClientTimeout"] = input.IdleClientTimeout;
  }
  if (input.DebugLogging != null) {
    entries["DebugLogging"] = input.DebugLogging;
  }
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.SecurityGroups != null) {
    const memberEntries = se_StringList(input.SecurityGroups, context);
    if (input.SecurityGroups?.length === 0) {
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
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
  }
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.ConnectionPoolConfig != null) {
    const memberEntries = se_ConnectionPoolConfiguration(input.ConnectionPoolConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionPoolConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NewName != null) {
    entries["NewName"] = input.NewName;
  }
  return entries;
};

/**
 * serializeAws_queryModifyDBSnapshotAttributeMessage
 */
const se_ModifyDBSnapshotAttributeMessage = (input: ModifyDBSnapshotAttributeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
 * serializeAws_queryModifyDBSnapshotMessage
 */
const se_ModifyDBSnapshotMessage = (input: ModifyDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
  }
  if (input.EngineVersion != null) {
    entries["EngineVersion"] = input.EngineVersion;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
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
 * serializeAws_queryModifyOptionGroupMessage
 */
const se_ModifyOptionGroupMessage = (input: ModifyOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.OptionsToInclude != null) {
    const memberEntries = se_OptionConfigurationList(input.OptionsToInclude, context);
    if (input.OptionsToInclude?.length === 0) {
      entries.OptionsToInclude = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToInclude.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = se_OptionNamesList(input.OptionsToRemove, context);
    if (input.OptionsToRemove?.length === 0) {
      entries.OptionsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  return entries;
};

/**
 * serializeAws_queryOptionConfiguration
 */
const se_OptionConfiguration = (input: OptionConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OptionName != null) {
    entries["OptionName"] = input.OptionName;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.OptionVersion != null) {
    entries["OptionVersion"] = input.OptionVersion;
  }
  if (input.DBSecurityGroupMemberships != null) {
    const memberEntries = se_DBSecurityGroupNameList(input.DBSecurityGroupMemberships, context);
    if (input.DBSecurityGroupMemberships?.length === 0) {
      entries.DBSecurityGroupMemberships = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroupMemberships.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupMemberships != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupMemberships, context);
    if (input.VpcSecurityGroupMemberships?.length === 0) {
      entries.VpcSecurityGroupMemberships = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupMemberships.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionSettings != null) {
    const memberEntries = se_OptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
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
  if (input.IsCollection != null) {
    entries["IsCollection"] = input.IsCollection;
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
  if (input.SupportedEngineModes != null) {
    const memberEntries = se_EngineModeList(input.SupportedEngineModes, context);
    if (input.SupportedEngineModes?.length === 0) {
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryPromoteReadReplicaMessage
 */
const se_PromoteReadReplicaMessage = (input: PromoteReadReplicaMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.BackupRetentionPeriod != null) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.PreferredBackupWindow != null) {
    entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
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
  if (input.ReservedDBInstancesOfferingId != null) {
    entries["ReservedDBInstancesOfferingId"] = input.ReservedDBInstancesOfferingId;
  }
  if (input.ReservedDBInstanceId != null) {
    entries["ReservedDBInstanceId"] = input.ReservedDBInstanceId;
  }
  if (input.DBInstanceCount != null) {
    entries["DBInstanceCount"] = input.DBInstanceCount;
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
 * serializeAws_queryRebootDBClusterMessage
 */
const se_RebootDBClusterMessage = (input: RebootDBClusterMessage, context: __SerdeContext): any => {
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
 * serializeAws_queryRegisterDBProxyTargetsRequest
 */
const se_RegisterDBProxyTargetsRequest = (input: RegisterDBProxyTargetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
  }
  if (input.DBInstanceIdentifiers != null) {
    const memberEntries = se_StringList(input.DBInstanceIdentifiers, context);
    if (input.DBInstanceIdentifiers?.length === 0) {
      entries.DBInstanceIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBInstanceIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterIdentifiers != null) {
    const memberEntries = se_StringList(input.DBClusterIdentifiers, context);
    if (input.DBClusterIdentifiers?.length === 0) {
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
 * serializeAws_queryRemoveRoleFromDBInstanceMessage
 */
const se_RemoveRoleFromDBInstanceMessage = (input: RemoveRoleFromDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
 * serializeAws_queryRestoreDBClusterFromS3Message
 */
const se_RestoreDBClusterFromS3Message = (input: RestoreDBClusterFromS3Message, context: __SerdeContext): any => {
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
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.SourceEngine != null) {
    entries["SourceEngine"] = input.SourceEngine;
  }
  if (input.SourceEngineVersion != null) {
    entries["SourceEngineVersion"] = input.SourceEngineVersion;
  }
  if (input.S3BucketName != null) {
    entries["S3BucketName"] = input.S3BucketName;
  }
  if (input.S3Prefix != null) {
    entries["S3Prefix"] = input.S3Prefix;
  }
  if (input.S3IngestionRoleArn != null) {
    entries["S3IngestionRoleArn"] = input.S3IngestionRoleArn;
  }
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.ManageMasterUserPassword != null) {
    entries["ManageMasterUserPassword"] = input.ManageMasterUserPassword;
  }
  if (input.MasterUserSecretKmsKeyId != null) {
    entries["MasterUserSecretKmsKeyId"] = input.MasterUserSecretKmsKeyId;
  }
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.EngineMode != null) {
    entries["EngineMode"] = input.EngineMode;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = se_ScalingConfiguration(input.ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.DBClusterInstanceClass != null) {
    entries["DBClusterInstanceClass"] = input.DBClusterInstanceClass;
  }
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = se_ScalingConfiguration(input.ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EngineMode != null) {
    entries["EngineMode"] = input.EngineMode;
  }
  if (input.DBClusterInstanceClass != null) {
    entries["DBClusterInstanceClass"] = input.DBClusterInstanceClass;
  }
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.ServerlessV2ScalingConfiguration != null) {
    const memberEntries = se_ServerlessV2ScalingConfiguration(input.ServerlessV2ScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServerlessV2ScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.SourceDbClusterResourceId != null) {
    entries["SourceDbClusterResourceId"] = input.SourceDbClusterResourceId;
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
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.LicenseModel != null) {
    entries["LicenseModel"] = input.LicenseModel;
  }
  if (input.DBName != null) {
    entries["DBName"] = input.DBName;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
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
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.TdeCredentialArn != null) {
    entries["TdeCredentialArn"] = input.TdeCredentialArn;
  }
  if (input.TdeCredentialPassword != null) {
    entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainFqdn != null) {
    entries["DomainFqdn"] = input.DomainFqdn;
  }
  if (input.DomainOu != null) {
    entries["DomainOu"] = input.DomainOu;
  }
  if (input.DomainAuthSecretArn != null) {
    entries["DomainAuthSecretArn"] = input.DomainAuthSecretArn;
  }
  if (input.DomainDnsIps != null) {
    const memberEntries = se_StringList(input.DomainDnsIps, context);
    if (input.DomainDnsIps?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = se_ProcessorFeatureList(input.ProcessorFeatures, context);
    if (input.ProcessorFeatures?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UseDefaultProcessorFeatures != null) {
    entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
  }
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.EnableCustomerOwnedIp != null) {
    entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
  }
  if (input.CustomIamInstanceProfile != null) {
    entries["CustomIamInstanceProfile"] = input.CustomIamInstanceProfile;
  }
  if (input.BackupTarget != null) {
    entries["BackupTarget"] = input.BackupTarget;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.StorageThroughput != null) {
    entries["StorageThroughput"] = input.StorageThroughput;
  }
  if (input.DBClusterSnapshotIdentifier != null) {
    entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
  }
  if (input.AllocatedStorage != null) {
    entries["AllocatedStorage"] = input.AllocatedStorage;
  }
  if (input.DedicatedLogVolume != null) {
    entries["DedicatedLogVolume"] = input.DedicatedLogVolume;
  }
  return entries;
};

/**
 * serializeAws_queryRestoreDBInstanceFromS3Message
 */
const se_RestoreDBInstanceFromS3Message = (input: RestoreDBInstanceFromS3Message, context: __SerdeContext): any => {
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
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.StorageEncrypted != null) {
    entries["StorageEncrypted"] = input.StorageEncrypted;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
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
  if (input.EnableIAMDatabaseAuthentication != null) {
    entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
  }
  if (input.SourceEngine != null) {
    entries["SourceEngine"] = input.SourceEngine;
  }
  if (input.SourceEngineVersion != null) {
    entries["SourceEngineVersion"] = input.SourceEngineVersion;
  }
  if (input.S3BucketName != null) {
    entries["S3BucketName"] = input.S3BucketName;
  }
  if (input.S3Prefix != null) {
    entries["S3Prefix"] = input.S3Prefix;
  }
  if (input.S3IngestionRoleArn != null) {
    entries["S3IngestionRoleArn"] = input.S3IngestionRoleArn;
  }
  if (input.EnablePerformanceInsights != null) {
    entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
  }
  if (input.PerformanceInsightsKMSKeyId != null) {
    entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
  }
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = se_ProcessorFeatureList(input.ProcessorFeatures, context);
    if (input.ProcessorFeatures?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UseDefaultProcessorFeatures != null) {
    entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.MaxAllocatedStorage != null) {
    entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.StorageThroughput != null) {
    entries["StorageThroughput"] = input.StorageThroughput;
  }
  if (input.ManageMasterUserPassword != null) {
    entries["ManageMasterUserPassword"] = input.ManageMasterUserPassword;
  }
  if (input.MasterUserSecretKmsKeyId != null) {
    entries["MasterUserSecretKmsKeyId"] = input.MasterUserSecretKmsKeyId;
  }
  if (input.DedicatedLogVolume != null) {
    entries["DedicatedLogVolume"] = input.DedicatedLogVolume;
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
  if (input.SourceDBInstanceIdentifier != null) {
    entries["SourceDBInstanceIdentifier"] = input.SourceDBInstanceIdentifier;
  }
  if (input.TargetDBInstanceIdentifier != null) {
    entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
  }
  if (input.RestoreTime != null) {
    entries["RestoreTime"] = input.RestoreTime.toISOString().split(".")[0] + "Z";
  }
  if (input.UseLatestRestorableTime != null) {
    entries["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
  }
  if (input.DBInstanceClass != null) {
    entries["DBInstanceClass"] = input.DBInstanceClass;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.DBSubnetGroupName != null) {
    entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.AutoMinorVersionUpgrade != null) {
    entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.LicenseModel != null) {
    entries["LicenseModel"] = input.LicenseModel;
  }
  if (input.DBName != null) {
    entries["DBName"] = input.DBName;
  }
  if (input.Engine != null) {
    entries["Engine"] = input.Engine;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.CopyTagsToSnapshot != null) {
    entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
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
  if (input.StorageType != null) {
    entries["StorageType"] = input.StorageType;
  }
  if (input.TdeCredentialArn != null) {
    entries["TdeCredentialArn"] = input.TdeCredentialArn;
  }
  if (input.TdeCredentialPassword != null) {
    entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.DomainFqdn != null) {
    entries["DomainFqdn"] = input.DomainFqdn;
  }
  if (input.DomainOu != null) {
    entries["DomainOu"] = input.DomainOu;
  }
  if (input.DomainAuthSecretArn != null) {
    entries["DomainAuthSecretArn"] = input.DomainAuthSecretArn;
  }
  if (input.DomainDnsIps != null) {
    const memberEntries = se_StringList(input.DomainDnsIps, context);
    if (input.DomainDnsIps?.length === 0) {
      entries.DomainDnsIps = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainDnsIps.${key}`;
      entries[loc] = value;
    });
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = se_ProcessorFeatureList(input.ProcessorFeatures, context);
    if (input.ProcessorFeatures?.length === 0) {
      entries.ProcessorFeatures = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProcessorFeatures.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UseDefaultProcessorFeatures != null) {
    entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
  }
  if (input.DBParameterGroupName != null) {
    entries["DBParameterGroupName"] = input.DBParameterGroupName;
  }
  if (input.DeletionProtection != null) {
    entries["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.SourceDbiResourceId != null) {
    entries["SourceDbiResourceId"] = input.SourceDbiResourceId;
  }
  if (input.MaxAllocatedStorage != null) {
    entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
  }
  if (input.SourceDBInstanceAutomatedBackupsArn != null) {
    entries["SourceDBInstanceAutomatedBackupsArn"] = input.SourceDBInstanceAutomatedBackupsArn;
  }
  if (input.EnableCustomerOwnedIp != null) {
    entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
  }
  if (input.CustomIamInstanceProfile != null) {
    entries["CustomIamInstanceProfile"] = input.CustomIamInstanceProfile;
  }
  if (input.BackupTarget != null) {
    entries["BackupTarget"] = input.BackupTarget;
  }
  if (input.NetworkType != null) {
    entries["NetworkType"] = input.NetworkType;
  }
  if (input.StorageThroughput != null) {
    entries["StorageThroughput"] = input.StorageThroughput;
  }
  if (input.AllocatedStorage != null) {
    entries["AllocatedStorage"] = input.AllocatedStorage;
  }
  if (input.DedicatedLogVolume != null) {
    entries["DedicatedLogVolume"] = input.DedicatedLogVolume;
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
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
  }
  if (input.CIDRIP != null) {
    entries["CIDRIP"] = input.CIDRIP;
  }
  if (input.EC2SecurityGroupName != null) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupId != null) {
    entries["EC2SecurityGroupId"] = input.EC2SecurityGroupId;
  }
  if (input.EC2SecurityGroupOwnerId != null) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
  }
  return entries;
};

/**
 * serializeAws_queryScalingConfiguration
 */
const se_ScalingConfiguration = (input: ScalingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MinCapacity != null) {
    entries["MinCapacity"] = input.MinCapacity;
  }
  if (input.MaxCapacity != null) {
    entries["MaxCapacity"] = input.MaxCapacity;
  }
  if (input.AutoPause != null) {
    entries["AutoPause"] = input.AutoPause;
  }
  if (input.SecondsUntilAutoPause != null) {
    entries["SecondsUntilAutoPause"] = input.SecondsUntilAutoPause;
  }
  if (input.TimeoutAction != null) {
    entries["TimeoutAction"] = input.TimeoutAction;
  }
  if (input.SecondsBeforeTimeout != null) {
    entries["SecondsBeforeTimeout"] = input.SecondsBeforeTimeout;
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
 * serializeAws_queryStartActivityStreamRequest
 */
const se_StartActivityStreamRequest = (input: StartActivityStreamRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.Mode != null) {
    entries["Mode"] = input.Mode;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
  }
  if (input.EngineNativeAuditFieldsIncluded != null) {
    entries["EngineNativeAuditFieldsIncluded"] = input.EngineNativeAuditFieldsIncluded;
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
 * serializeAws_queryStartDBInstanceAutomatedBackupsReplicationMessage
 */
const se_StartDBInstanceAutomatedBackupsReplicationMessage = (
  input: StartDBInstanceAutomatedBackupsReplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceDBInstanceArn != null) {
    entries["SourceDBInstanceArn"] = input.SourceDBInstanceArn;
  }
  if (input.BackupRetentionPeriod != null) {
    entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.PreSignedUrl != null) {
    entries["PreSignedUrl"] = input.PreSignedUrl;
  }
  return entries;
};

/**
 * serializeAws_queryStartDBInstanceMessage
 */
const se_StartDBInstanceMessage = (input: StartDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryStartExportTaskMessage
 */
const se_StartExportTaskMessage = (input: StartExportTaskMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExportTaskIdentifier != null) {
    entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
  }
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.S3BucketName != null) {
    entries["S3BucketName"] = input.S3BucketName;
  }
  if (input.IamRoleArn != null) {
    entries["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.S3Prefix != null) {
    entries["S3Prefix"] = input.S3Prefix;
  }
  if (input.ExportOnly != null) {
    const memberEntries = se_StringList(input.ExportOnly, context);
    if (input.ExportOnly?.length === 0) {
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
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
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
 * serializeAws_queryStopDBInstanceAutomatedBackupsReplicationMessage
 */
const se_StopDBInstanceAutomatedBackupsReplicationMessage = (
  input: StopDBInstanceAutomatedBackupsReplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceDBInstanceArn != null) {
    entries["SourceDBInstanceArn"] = input.SourceDBInstanceArn;
  }
  return entries;
};

/**
 * serializeAws_queryStopDBInstanceMessage
 */
const se_StopDBInstanceMessage = (input: StopDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
  if (input.BlueGreenDeploymentIdentifier != null) {
    entries["BlueGreenDeploymentIdentifier"] = input.BlueGreenDeploymentIdentifier;
  }
  if (input.SwitchoverTimeout != null) {
    entries["SwitchoverTimeout"] = input.SwitchoverTimeout;
  }
  return entries;
};

/**
 * serializeAws_querySwitchoverGlobalClusterMessage
 */
const se_SwitchoverGlobalClusterMessage = (input: SwitchoverGlobalClusterMessage, context: __SerdeContext): any => {
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
 * serializeAws_querySwitchoverReadReplicaMessage
 */
const se_SwitchoverReadReplicaMessage = (input: SwitchoverReadReplicaMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
 * serializeAws_queryUserAuthConfig
 */
const se_UserAuthConfig = (input: UserAuthConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.AuthScheme != null) {
    entries["AuthScheme"] = input.AuthScheme;
  }
  if (input.SecretArn != null) {
    entries["SecretArn"] = input.SecretArn;
  }
  if (input.IAMAuth != null) {
    entries["IAMAuth"] = input.IAMAuth;
  }
  if (input.ClientPasswordAuthType != null) {
    entries["ClientPasswordAuthType"] = input.ClientPasswordAuthType;
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
  if (output.AccountQuotas === "") {
    contents.AccountQuotas = [];
  } else if (output["AccountQuotas"] !== undefined && output["AccountQuotas"]["AccountQuota"] !== undefined) {
    contents.AccountQuotas = de_AccountQuotaList(
      __getArrayIfSingleItem(output["AccountQuotas"]["AccountQuota"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAccountQuota
 */
const de_AccountQuota = (output: any, context: __SerdeContext): AccountQuota => {
  const contents: any = {};
  if (output["AccountQuotaName"] !== undefined) {
    contents.AccountQuotaName = __expectString(output["AccountQuotaName"]);
  }
  if (output["Used"] !== undefined) {
    contents.Used = __strictParseLong(output["Used"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseLong(output["Max"]) as number;
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
 * deserializeAws_queryAuthorizationAlreadyExistsFault
 */
const de_AuthorizationAlreadyExistsFault = (output: any, context: __SerdeContext): AuthorizationAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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
 * deserializeAws_queryAuthorizationQuotaExceededFault
 */
const de_AuthorizationQuotaExceededFault = (output: any, context: __SerdeContext): AuthorizationQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroup = de_DBSecurityGroup(output["DBSecurityGroup"], context);
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
 * deserializeAws_queryAvailableProcessorFeature
 */
const de_AvailableProcessorFeature = (output: any, context: __SerdeContext): AvailableProcessorFeature => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["AllowedValues"] !== undefined) {
    contents.AllowedValues = __expectString(output["AllowedValues"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBlueGreenDeployment
 */
const de_BlueGreenDeployment = (output: any, context: __SerdeContext): BlueGreenDeployment => {
  const contents: any = {};
  if (output["BlueGreenDeploymentIdentifier"] !== undefined) {
    contents.BlueGreenDeploymentIdentifier = __expectString(output["BlueGreenDeploymentIdentifier"]);
  }
  if (output["BlueGreenDeploymentName"] !== undefined) {
    contents.BlueGreenDeploymentName = __expectString(output["BlueGreenDeploymentName"]);
  }
  if (output["Source"] !== undefined) {
    contents.Source = __expectString(output["Source"]);
  }
  if (output["Target"] !== undefined) {
    contents.Target = __expectString(output["Target"]);
  }
  if (output.SwitchoverDetails === "") {
    contents.SwitchoverDetails = [];
  } else if (output["SwitchoverDetails"] !== undefined && output["SwitchoverDetails"]["member"] !== undefined) {
    contents.SwitchoverDetails = de_SwitchoverDetailList(
      __getArrayIfSingleItem(output["SwitchoverDetails"]["member"]),
      context
    );
  }
  if (output.Tasks === "") {
    contents.Tasks = [];
  } else if (output["Tasks"] !== undefined && output["Tasks"]["member"] !== undefined) {
    contents.Tasks = de_BlueGreenDeploymentTaskList(__getArrayIfSingleItem(output["Tasks"]["member"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusDetails"] !== undefined) {
    contents.StatusDetails = __expectString(output["StatusDetails"]);
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateTime"]));
  }
  if (output["DeleteTime"] !== undefined) {
    contents.DeleteTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DeleteTime"]));
  }
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = de_TagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBlueGreenDeploymentTask
 */
const de_BlueGreenDeploymentTask = (output: any, context: __SerdeContext): BlueGreenDeploymentTask => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["CertificateIdentifier"] !== undefined) {
    contents.CertificateIdentifier = __expectString(output["CertificateIdentifier"]);
  }
  if (output["CertificateType"] !== undefined) {
    contents.CertificateType = __expectString(output["CertificateType"]);
  }
  if (output["Thumbprint"] !== undefined) {
    contents.Thumbprint = __expectString(output["Thumbprint"]);
  }
  if (output["ValidFrom"] !== undefined) {
    contents.ValidFrom = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ValidFrom"]));
  }
  if (output["ValidTill"] !== undefined) {
    contents.ValidTill = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ValidTill"]));
  }
  if (output["CertificateArn"] !== undefined) {
    contents.CertificateArn = __expectString(output["CertificateArn"]);
  }
  if (output["CustomerOverride"] !== undefined) {
    contents.CustomerOverride = __parseBoolean(output["CustomerOverride"]);
  }
  if (output["CustomerOverrideValidTill"] !== undefined) {
    contents.CustomerOverrideValidTill = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["CustomerOverrideValidTill"])
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateDetails
 */
const de_CertificateDetails = (output: any, context: __SerdeContext): CertificateDetails => {
  const contents: any = {};
  if (output["CAIdentifier"] !== undefined) {
    contents.CAIdentifier = __expectString(output["CAIdentifier"]);
  }
  if (output["ValidTill"] !== undefined) {
    contents.ValidTill = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ValidTill"]));
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
  if (output["DefaultCertificateForNewLaunches"] !== undefined) {
    contents.DefaultCertificateForNewLaunches = __expectString(output["DefaultCertificateForNewLaunches"]);
  }
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["Certificate"] !== undefined) {
    contents.Certificates = de_CertificateList(__getArrayIfSingleItem(output["Certificates"]["Certificate"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
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
  if (output["MasterUserPassword"] !== undefined) {
    contents.MasterUserPassword = __expectString(output["MasterUserPassword"]);
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
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryConnectionPoolConfigurationInfo
 */
const de_ConnectionPoolConfigurationInfo = (output: any, context: __SerdeContext): ConnectionPoolConfigurationInfo => {
  const contents: any = {};
  if (output["MaxConnectionsPercent"] !== undefined) {
    contents.MaxConnectionsPercent = __strictParseInt32(output["MaxConnectionsPercent"]) as number;
  }
  if (output["MaxIdleConnectionsPercent"] !== undefined) {
    contents.MaxIdleConnectionsPercent = __strictParseInt32(output["MaxIdleConnectionsPercent"]) as number;
  }
  if (output["ConnectionBorrowTimeout"] !== undefined) {
    contents.ConnectionBorrowTimeout = __strictParseInt32(output["ConnectionBorrowTimeout"]) as number;
  }
  if (output.SessionPinningFilters === "") {
    contents.SessionPinningFilters = [];
  } else if (output["SessionPinningFilters"] !== undefined && output["SessionPinningFilters"]["member"] !== undefined) {
    contents.SessionPinningFilters = de_StringList(
      __getArrayIfSingleItem(output["SessionPinningFilters"]["member"]),
      context
    );
  }
  if (output["InitQuery"] !== undefined) {
    contents.InitQuery = __expectString(output["InitQuery"]);
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
 * deserializeAws_queryCopyDBSnapshotResult
 */
const de_CopyDBSnapshotResult = (output: any, context: __SerdeContext): CopyDBSnapshotResult => {
  const contents: any = {};
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = de_DBSnapshot(output["DBSnapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyOptionGroupResult
 */
const de_CopyOptionGroupResult = (output: any, context: __SerdeContext): CopyOptionGroupResult => {
  const contents: any = {};
  if (output["OptionGroup"] !== undefined) {
    contents.OptionGroup = de_OptionGroup(output["OptionGroup"], context);
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
  if (output["BlueGreenDeployment"] !== undefined) {
    contents.BlueGreenDeployment = de_BlueGreenDeployment(output["BlueGreenDeployment"], context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
 * deserializeAws_queryCreateDBInstanceReadReplicaResult
 */
const de_CreateDBInstanceReadReplicaResult = (
  output: any,
  context: __SerdeContext
): CreateDBInstanceReadReplicaResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
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
 * deserializeAws_queryCreateDBProxyEndpointResponse
 */
const de_CreateDBProxyEndpointResponse = (output: any, context: __SerdeContext): CreateDBProxyEndpointResponse => {
  const contents: any = {};
  if (output["DBProxyEndpoint"] !== undefined) {
    contents.DBProxyEndpoint = de_DBProxyEndpoint(output["DBProxyEndpoint"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBProxyResponse
 */
const de_CreateDBProxyResponse = (output: any, context: __SerdeContext): CreateDBProxyResponse => {
  const contents: any = {};
  if (output["DBProxy"] !== undefined) {
    contents.DBProxy = de_DBProxy(output["DBProxy"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBSecurityGroupResult
 */
const de_CreateDBSecurityGroupResult = (output: any, context: __SerdeContext): CreateDBSecurityGroupResult => {
  const contents: any = {};
  if (output["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroup = de_DBSecurityGroup(output["DBSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDBSnapshotResult
 */
const de_CreateDBSnapshotResult = (output: any, context: __SerdeContext): CreateDBSnapshotResult => {
  const contents: any = {};
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = de_DBSnapshot(output["DBSnapshot"], context);
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
 * deserializeAws_queryCreateOptionGroupResult
 */
const de_CreateOptionGroupResult = (output: any, context: __SerdeContext): CreateOptionGroupResult => {
  const contents: any = {};
  if (output["OptionGroup"] !== undefined) {
    contents.OptionGroup = de_OptionGroup(output["OptionGroup"], context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDBEngineVersionAMI
 */
const de_CustomDBEngineVersionAMI = (output: any, context: __SerdeContext): CustomDBEngineVersionAMI => {
  const contents: any = {};
  if (output["ImageId"] !== undefined) {
    contents.ImageId = __expectString(output["ImageId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["AutomaticRestartTime"] !== undefined) {
    contents.AutomaticRestartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["AutomaticRestartTime"]));
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
  if (output.CustomEndpoints === "") {
    contents.CustomEndpoints = [];
  } else if (output["CustomEndpoints"] !== undefined && output["CustomEndpoints"]["member"] !== undefined) {
    contents.CustomEndpoints = de_StringList(__getArrayIfSingleItem(output["CustomEndpoints"]["member"]), context);
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
  if (output["EarliestBacktrackTime"] !== undefined) {
    contents.EarliestBacktrackTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EarliestBacktrackTime"]));
  }
  if (output["BacktrackWindow"] !== undefined) {
    contents.BacktrackWindow = __strictParseLong(output["BacktrackWindow"]) as number;
  }
  if (output["BacktrackConsumedChangeRecords"] !== undefined) {
    contents.BacktrackConsumedChangeRecords = __strictParseLong(output["BacktrackConsumedChangeRecords"]) as number;
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
  if (output["Capacity"] !== undefined) {
    contents.Capacity = __strictParseInt32(output["Capacity"]) as number;
  }
  if (output["EngineMode"] !== undefined) {
    contents.EngineMode = __expectString(output["EngineMode"]);
  }
  if (output["ScalingConfigurationInfo"] !== undefined) {
    contents.ScalingConfigurationInfo = de_ScalingConfigurationInfo(output["ScalingConfigurationInfo"], context);
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = __parseBoolean(output["DeletionProtection"]);
  }
  if (output["HttpEndpointEnabled"] !== undefined) {
    contents.HttpEndpointEnabled = __parseBoolean(output["HttpEndpointEnabled"]);
  }
  if (output["ActivityStreamMode"] !== undefined) {
    contents.ActivityStreamMode = __expectString(output["ActivityStreamMode"]);
  }
  if (output["ActivityStreamStatus"] !== undefined) {
    contents.ActivityStreamStatus = __expectString(output["ActivityStreamStatus"]);
  }
  if (output["ActivityStreamKmsKeyId"] !== undefined) {
    contents.ActivityStreamKmsKeyId = __expectString(output["ActivityStreamKmsKeyId"]);
  }
  if (output["ActivityStreamKinesisStreamName"] !== undefined) {
    contents.ActivityStreamKinesisStreamName = __expectString(output["ActivityStreamKinesisStreamName"]);
  }
  if (output["CopyTagsToSnapshot"] !== undefined) {
    contents.CopyTagsToSnapshot = __parseBoolean(output["CopyTagsToSnapshot"]);
  }
  if (output["CrossAccountClone"] !== undefined) {
    contents.CrossAccountClone = __parseBoolean(output["CrossAccountClone"]);
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
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = de_TagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output["GlobalWriteForwardingStatus"] !== undefined) {
    contents.GlobalWriteForwardingStatus = __expectString(output["GlobalWriteForwardingStatus"]);
  }
  if (output["GlobalWriteForwardingRequested"] !== undefined) {
    contents.GlobalWriteForwardingRequested = __parseBoolean(output["GlobalWriteForwardingRequested"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = de_ClusterPendingModifiedValues(output["PendingModifiedValues"], context);
  }
  if (output["DBClusterInstanceClass"] !== undefined) {
    contents.DBClusterInstanceClass = __expectString(output["DBClusterInstanceClass"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = __strictParseInt32(output["Iops"]) as number;
  }
  if (output["PubliclyAccessible"] !== undefined) {
    contents.PubliclyAccessible = __parseBoolean(output["PubliclyAccessible"]);
  }
  if (output["AutoMinorVersionUpgrade"] !== undefined) {
    contents.AutoMinorVersionUpgrade = __parseBoolean(output["AutoMinorVersionUpgrade"]);
  }
  if (output["MonitoringInterval"] !== undefined) {
    contents.MonitoringInterval = __strictParseInt32(output["MonitoringInterval"]) as number;
  }
  if (output["MonitoringRoleArn"] !== undefined) {
    contents.MonitoringRoleArn = __expectString(output["MonitoringRoleArn"]);
  }
  if (output["PerformanceInsightsEnabled"] !== undefined) {
    contents.PerformanceInsightsEnabled = __parseBoolean(output["PerformanceInsightsEnabled"]);
  }
  if (output["PerformanceInsightsKMSKeyId"] !== undefined) {
    contents.PerformanceInsightsKMSKeyId = __expectString(output["PerformanceInsightsKMSKeyId"]);
  }
  if (output["PerformanceInsightsRetentionPeriod"] !== undefined) {
    contents.PerformanceInsightsRetentionPeriod = __strictParseInt32(
      output["PerformanceInsightsRetentionPeriod"]
    ) as number;
  }
  if (output["ServerlessV2ScalingConfiguration"] !== undefined) {
    contents.ServerlessV2ScalingConfiguration = de_ServerlessV2ScalingConfigurationInfo(
      output["ServerlessV2ScalingConfiguration"],
      context
    );
  }
  if (output["NetworkType"] !== undefined) {
    contents.NetworkType = __expectString(output["NetworkType"]);
  }
  if (output["DBSystemId"] !== undefined) {
    contents.DBSystemId = __expectString(output["DBSystemId"]);
  }
  if (output["MasterUserSecret"] !== undefined) {
    contents.MasterUserSecret = de_MasterUserSecret(output["MasterUserSecret"], context);
  }
  if (output["IOOptimizedNextAllowedModificationTime"] !== undefined) {
    contents.IOOptimizedNextAllowedModificationTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["IOOptimizedNextAllowedModificationTime"])
    );
  }
  if (output["LocalWriteForwardingStatus"] !== undefined) {
    contents.LocalWriteForwardingStatus = __expectString(output["LocalWriteForwardingStatus"]);
  }
  if (output["AwsBackupRecoveryPointArn"] !== undefined) {
    contents.AwsBackupRecoveryPointArn = __expectString(output["AwsBackupRecoveryPointArn"]);
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
 * deserializeAws_queryDBClusterAutomatedBackup
 */
const de_DBClusterAutomatedBackup = (output: any, context: __SerdeContext): DBClusterAutomatedBackup => {
  const contents: any = {};
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["DBClusterAutomatedBackupsArn"] !== undefined) {
    contents.DBClusterAutomatedBackupsArn = __expectString(output["DBClusterAutomatedBackupsArn"]);
  }
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["RestoreWindow"] !== undefined) {
    contents.RestoreWindow = de_RestoreWindow(output["RestoreWindow"], context);
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = __expectString(output["MasterUsername"]);
  }
  if (output["DbClusterResourceId"] !== undefined) {
    contents.DbClusterResourceId = __expectString(output["DbClusterResourceId"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["LicenseModel"] !== undefined) {
    contents.LicenseModel = __expectString(output["LicenseModel"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  if (output["ClusterCreateTime"] !== undefined) {
    contents.ClusterCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ClusterCreateTime"]));
  }
  if (output["StorageEncrypted"] !== undefined) {
    contents.StorageEncrypted = __parseBoolean(output["StorageEncrypted"]);
  }
  if (output["AllocatedStorage"] !== undefined) {
    contents.AllocatedStorage = __strictParseInt32(output["AllocatedStorage"]) as number;
  }
  if (output["EngineVersion"] !== undefined) {
    contents.EngineVersion = __expectString(output["EngineVersion"]);
  }
  if (output["DBClusterArn"] !== undefined) {
    contents.DBClusterArn = __expectString(output["DBClusterArn"]);
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = __strictParseInt32(output["BackupRetentionPeriod"]) as number;
  }
  if (output["EngineMode"] !== undefined) {
    contents.EngineMode = __expectString(output["EngineMode"]);
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
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = __strictParseInt32(output["Iops"]) as number;
  }
  if (output["AwsBackupRecoveryPointArn"] !== undefined) {
    contents.AwsBackupRecoveryPointArn = __expectString(output["AwsBackupRecoveryPointArn"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterAutomatedBackups === "") {
    contents.DBClusterAutomatedBackups = [];
  } else if (
    output["DBClusterAutomatedBackups"] !== undefined &&
    output["DBClusterAutomatedBackups"]["DBClusterAutomatedBackup"] !== undefined
  ) {
    contents.DBClusterAutomatedBackups = de_DBClusterAutomatedBackupList(
      __getArrayIfSingleItem(output["DBClusterAutomatedBackups"]["DBClusterAutomatedBackup"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterBacktrack
 */
const de_DBClusterBacktrack = (output: any, context: __SerdeContext): DBClusterBacktrack => {
  const contents: any = {};
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["BacktrackIdentifier"] !== undefined) {
    contents.BacktrackIdentifier = __expectString(output["BacktrackIdentifier"]);
  }
  if (output["BacktrackTo"] !== undefined) {
    contents.BacktrackTo = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["BacktrackTo"]));
  }
  if (output["BacktrackedFrom"] !== undefined) {
    contents.BacktrackedFrom = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["BacktrackedFrom"]));
  }
  if (output["BacktrackRequestCreationTime"] !== undefined) {
    contents.BacktrackRequestCreationTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["BacktrackRequestCreationTime"])
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterBacktracks === "") {
    contents.DBClusterBacktracks = [];
  } else if (
    output["DBClusterBacktracks"] !== undefined &&
    output["DBClusterBacktracks"]["DBClusterBacktrack"] !== undefined
  ) {
    contents.DBClusterBacktracks = de_DBClusterBacktrackList(
      __getArrayIfSingleItem(output["DBClusterBacktracks"]["DBClusterBacktrack"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterBacktrackNotFoundFault
 */
const de_DBClusterBacktrackNotFoundFault = (output: any, context: __SerdeContext): DBClusterBacktrackNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBClusterCapacityInfo
 */
const de_DBClusterCapacityInfo = (output: any, context: __SerdeContext): DBClusterCapacityInfo => {
  const contents: any = {};
  if (output["DBClusterIdentifier"] !== undefined) {
    contents.DBClusterIdentifier = __expectString(output["DBClusterIdentifier"]);
  }
  if (output["PendingCapacity"] !== undefined) {
    contents.PendingCapacity = __strictParseInt32(output["PendingCapacity"]) as number;
  }
  if (output["CurrentCapacity"] !== undefined) {
    contents.CurrentCapacity = __strictParseInt32(output["CurrentCapacity"]) as number;
  }
  if (output["SecondsBeforeTimeout"] !== undefined) {
    contents.SecondsBeforeTimeout = __strictParseInt32(output["SecondsBeforeTimeout"]) as number;
  }
  if (output["TimeoutAction"] !== undefined) {
    contents.TimeoutAction = __expectString(output["TimeoutAction"]);
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
  if (output["EngineMode"] !== undefined) {
    contents.EngineMode = __expectString(output["EngineMode"]);
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
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = de_TagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output["DBSystemId"] !== undefined) {
    contents.DBSystemId = __expectString(output["DBSystemId"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["DbClusterResourceId"] !== undefined) {
    contents.DbClusterResourceId = __expectString(output["DbClusterResourceId"]);
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
  if (output["Image"] !== undefined) {
    contents.Image = de_CustomDBEngineVersionAMI(output["Image"], context);
  }
  if (output["DBEngineMediaType"] !== undefined) {
    contents.DBEngineMediaType = __expectString(output["DBEngineMediaType"]);
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
  if (output.SupportedNcharCharacterSets === "") {
    contents.SupportedNcharCharacterSets = [];
  } else if (
    output["SupportedNcharCharacterSets"] !== undefined &&
    output["SupportedNcharCharacterSets"]["CharacterSet"] !== undefined
  ) {
    contents.SupportedNcharCharacterSets = de_SupportedCharacterSetsList(
      __getArrayIfSingleItem(output["SupportedNcharCharacterSets"]["CharacterSet"]),
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
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = de_EngineModeList(
      __getArrayIfSingleItem(output["SupportedEngineModes"]["member"]),
      context
    );
  }
  if (output.SupportedFeatureNames === "") {
    contents.SupportedFeatureNames = [];
  } else if (output["SupportedFeatureNames"] !== undefined && output["SupportedFeatureNames"]["member"] !== undefined) {
    contents.SupportedFeatureNames = de_FeatureNameList(
      __getArrayIfSingleItem(output["SupportedFeatureNames"]["member"]),
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SupportsParallelQuery"] !== undefined) {
    contents.SupportsParallelQuery = __parseBoolean(output["SupportsParallelQuery"]);
  }
  if (output["SupportsGlobalDatabases"] !== undefined) {
    contents.SupportsGlobalDatabases = __parseBoolean(output["SupportsGlobalDatabases"]);
  }
  if (output["MajorEngineVersion"] !== undefined) {
    contents.MajorEngineVersion = __expectString(output["MajorEngineVersion"]);
  }
  if (output["DatabaseInstallationFilesS3BucketName"] !== undefined) {
    contents.DatabaseInstallationFilesS3BucketName = __expectString(output["DatabaseInstallationFilesS3BucketName"]);
  }
  if (output["DatabaseInstallationFilesS3Prefix"] !== undefined) {
    contents.DatabaseInstallationFilesS3Prefix = __expectString(output["DatabaseInstallationFilesS3Prefix"]);
  }
  if (output["DBEngineVersionArn"] !== undefined) {
    contents.DBEngineVersionArn = __expectString(output["DBEngineVersionArn"]);
  }
  if (output["KMSKeyId"] !== undefined) {
    contents.KMSKeyId = __expectString(output["KMSKeyId"]);
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateTime"]));
  }
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = de_TagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output["SupportsBabelfish"] !== undefined) {
    contents.SupportsBabelfish = __parseBoolean(output["SupportsBabelfish"]);
  }
  if (output["CustomDBEngineVersionManifest"] !== undefined) {
    contents.CustomDBEngineVersionManifest = __expectString(output["CustomDBEngineVersionManifest"]);
  }
  if (output["SupportsCertificateRotationWithoutRestart"] !== undefined) {
    contents.SupportsCertificateRotationWithoutRestart = __parseBoolean(
      output["SupportsCertificateRotationWithoutRestart"]
    );
  }
  if (output.SupportedCACertificateIdentifiers === "") {
    contents.SupportedCACertificateIdentifiers = [];
  } else if (
    output["SupportedCACertificateIdentifiers"] !== undefined &&
    output["SupportedCACertificateIdentifiers"]["member"] !== undefined
  ) {
    contents.SupportedCACertificateIdentifiers = de_CACertificateIdentifiersList(
      __getArrayIfSingleItem(output["SupportedCACertificateIdentifiers"]["member"]),
      context
    );
  }
  if (output["SupportsLocalWriteForwarding"] !== undefined) {
    contents.SupportsLocalWriteForwarding = __parseBoolean(output["SupportsLocalWriteForwarding"]);
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
  if (output["AutomaticRestartTime"] !== undefined) {
    contents.AutomaticRestartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["AutomaticRestartTime"]));
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
  if (output["ReplicaMode"] !== undefined) {
    contents.ReplicaMode = __expectString(output["ReplicaMode"]);
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
  if (output["NcharCharacterSetName"] !== undefined) {
    contents.NcharCharacterSetName = __expectString(output["NcharCharacterSetName"]);
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
  if (output["PerformanceInsightsRetentionPeriod"] !== undefined) {
    contents.PerformanceInsightsRetentionPeriod = __strictParseInt32(
      output["PerformanceInsightsRetentionPeriod"]
    ) as number;
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
  if (output.ProcessorFeatures === "") {
    contents.ProcessorFeatures = [];
  } else if (
    output["ProcessorFeatures"] !== undefined &&
    output["ProcessorFeatures"]["ProcessorFeature"] !== undefined
  ) {
    contents.ProcessorFeatures = de_ProcessorFeatureList(
      __getArrayIfSingleItem(output["ProcessorFeatures"]["ProcessorFeature"]),
      context
    );
  }
  if (output["DeletionProtection"] !== undefined) {
    contents.DeletionProtection = __parseBoolean(output["DeletionProtection"]);
  }
  if (output.AssociatedRoles === "") {
    contents.AssociatedRoles = [];
  } else if (output["AssociatedRoles"] !== undefined && output["AssociatedRoles"]["DBInstanceRole"] !== undefined) {
    contents.AssociatedRoles = de_DBInstanceRoles(
      __getArrayIfSingleItem(output["AssociatedRoles"]["DBInstanceRole"]),
      context
    );
  }
  if (output["ListenerEndpoint"] !== undefined) {
    contents.ListenerEndpoint = de_Endpoint(output["ListenerEndpoint"], context);
  }
  if (output["MaxAllocatedStorage"] !== undefined) {
    contents.MaxAllocatedStorage = __strictParseInt32(output["MaxAllocatedStorage"]) as number;
  }
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = de_TagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output.DBInstanceAutomatedBackupsReplications === "") {
    contents.DBInstanceAutomatedBackupsReplications = [];
  } else if (
    output["DBInstanceAutomatedBackupsReplications"] !== undefined &&
    output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"] !== undefined
  ) {
    contents.DBInstanceAutomatedBackupsReplications = de_DBInstanceAutomatedBackupsReplicationList(
      __getArrayIfSingleItem(output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"]),
      context
    );
  }
  if (output["CustomerOwnedIpEnabled"] !== undefined) {
    contents.CustomerOwnedIpEnabled = __parseBoolean(output["CustomerOwnedIpEnabled"]);
  }
  if (output["AwsBackupRecoveryPointArn"] !== undefined) {
    contents.AwsBackupRecoveryPointArn = __expectString(output["AwsBackupRecoveryPointArn"]);
  }
  if (output["ActivityStreamStatus"] !== undefined) {
    contents.ActivityStreamStatus = __expectString(output["ActivityStreamStatus"]);
  }
  if (output["ActivityStreamKmsKeyId"] !== undefined) {
    contents.ActivityStreamKmsKeyId = __expectString(output["ActivityStreamKmsKeyId"]);
  }
  if (output["ActivityStreamKinesisStreamName"] !== undefined) {
    contents.ActivityStreamKinesisStreamName = __expectString(output["ActivityStreamKinesisStreamName"]);
  }
  if (output["ActivityStreamMode"] !== undefined) {
    contents.ActivityStreamMode = __expectString(output["ActivityStreamMode"]);
  }
  if (output["ActivityStreamEngineNativeAuditFieldsIncluded"] !== undefined) {
    contents.ActivityStreamEngineNativeAuditFieldsIncluded = __parseBoolean(
      output["ActivityStreamEngineNativeAuditFieldsIncluded"]
    );
  }
  if (output["AutomationMode"] !== undefined) {
    contents.AutomationMode = __expectString(output["AutomationMode"]);
  }
  if (output["ResumeFullAutomationModeTime"] !== undefined) {
    contents.ResumeFullAutomationModeTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ResumeFullAutomationModeTime"])
    );
  }
  if (output["CustomIamInstanceProfile"] !== undefined) {
    contents.CustomIamInstanceProfile = __expectString(output["CustomIamInstanceProfile"]);
  }
  if (output["BackupTarget"] !== undefined) {
    contents.BackupTarget = __expectString(output["BackupTarget"]);
  }
  if (output["NetworkType"] !== undefined) {
    contents.NetworkType = __expectString(output["NetworkType"]);
  }
  if (output["ActivityStreamPolicyStatus"] !== undefined) {
    contents.ActivityStreamPolicyStatus = __expectString(output["ActivityStreamPolicyStatus"]);
  }
  if (output["StorageThroughput"] !== undefined) {
    contents.StorageThroughput = __strictParseInt32(output["StorageThroughput"]) as number;
  }
  if (output["DBSystemId"] !== undefined) {
    contents.DBSystemId = __expectString(output["DBSystemId"]);
  }
  if (output["MasterUserSecret"] !== undefined) {
    contents.MasterUserSecret = de_MasterUserSecret(output["MasterUserSecret"], context);
  }
  if (output["CertificateDetails"] !== undefined) {
    contents.CertificateDetails = de_CertificateDetails(output["CertificateDetails"], context);
  }
  if (output["ReadReplicaSourceDBClusterIdentifier"] !== undefined) {
    contents.ReadReplicaSourceDBClusterIdentifier = __expectString(output["ReadReplicaSourceDBClusterIdentifier"]);
  }
  if (output["PercentProgress"] !== undefined) {
    contents.PercentProgress = __expectString(output["PercentProgress"]);
  }
  if (output["DedicatedLogVolume"] !== undefined) {
    contents.DedicatedLogVolume = __parseBoolean(output["DedicatedLogVolume"]);
  }
  if (output["IsStorageConfigUpgradeAvailable"] !== undefined) {
    contents.IsStorageConfigUpgradeAvailable = __parseBoolean(output["IsStorageConfigUpgradeAvailable"]);
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
 * deserializeAws_queryDBInstanceAutomatedBackup
 */
const de_DBInstanceAutomatedBackup = (output: any, context: __SerdeContext): DBInstanceAutomatedBackup => {
  const contents: any = {};
  if (output["DBInstanceArn"] !== undefined) {
    contents.DBInstanceArn = __expectString(output["DBInstanceArn"]);
  }
  if (output["DbiResourceId"] !== undefined) {
    contents.DbiResourceId = __expectString(output["DbiResourceId"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = __expectString(output["DBInstanceIdentifier"]);
  }
  if (output["RestoreWindow"] !== undefined) {
    contents.RestoreWindow = de_RestoreWindow(output["RestoreWindow"], context);
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
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["InstanceCreateTime"] !== undefined) {
    contents.InstanceCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["InstanceCreateTime"]));
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = __expectString(output["MasterUsername"]);
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
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
  if (output["OptionGroupName"] !== undefined) {
    contents.OptionGroupName = __expectString(output["OptionGroupName"]);
  }
  if (output["TdeCredentialArn"] !== undefined) {
    contents.TdeCredentialArn = __expectString(output["TdeCredentialArn"]);
  }
  if (output["Encrypted"] !== undefined) {
    contents.Encrypted = __parseBoolean(output["Encrypted"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["Timezone"] !== undefined) {
    contents.Timezone = __expectString(output["Timezone"]);
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  if (output["BackupRetentionPeriod"] !== undefined) {
    contents.BackupRetentionPeriod = __strictParseInt32(output["BackupRetentionPeriod"]) as number;
  }
  if (output["DBInstanceAutomatedBackupsArn"] !== undefined) {
    contents.DBInstanceAutomatedBackupsArn = __expectString(output["DBInstanceAutomatedBackupsArn"]);
  }
  if (output.DBInstanceAutomatedBackupsReplications === "") {
    contents.DBInstanceAutomatedBackupsReplications = [];
  } else if (
    output["DBInstanceAutomatedBackupsReplications"] !== undefined &&
    output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"] !== undefined
  ) {
    contents.DBInstanceAutomatedBackupsReplications = de_DBInstanceAutomatedBackupsReplicationList(
      __getArrayIfSingleItem(output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"]),
      context
    );
  }
  if (output["BackupTarget"] !== undefined) {
    contents.BackupTarget = __expectString(output["BackupTarget"]);
  }
  if (output["StorageThroughput"] !== undefined) {
    contents.StorageThroughput = __strictParseInt32(output["StorageThroughput"]) as number;
  }
  if (output["AwsBackupRecoveryPointArn"] !== undefined) {
    contents.AwsBackupRecoveryPointArn = __expectString(output["AwsBackupRecoveryPointArn"]);
  }
  if (output["DedicatedLogVolume"] !== undefined) {
    contents.DedicatedLogVolume = __parseBoolean(output["DedicatedLogVolume"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBInstanceAutomatedBackups === "") {
    contents.DBInstanceAutomatedBackups = [];
  } else if (
    output["DBInstanceAutomatedBackups"] !== undefined &&
    output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"] !== undefined
  ) {
    contents.DBInstanceAutomatedBackups = de_DBInstanceAutomatedBackupList(
      __getArrayIfSingleItem(output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["DBInstanceAutomatedBackupsArn"] !== undefined) {
    contents.DBInstanceAutomatedBackupsArn = __expectString(output["DBInstanceAutomatedBackupsArn"]);
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
 * deserializeAws_queryDBInstanceRole
 */
const de_DBInstanceRole = (output: any, context: __SerdeContext): DBInstanceRole => {
  const contents: any = {};
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = __expectString(output["RoleArn"]);
  }
  if (output["FeatureName"] !== undefined) {
    contents.FeatureName = __expectString(output["FeatureName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBInstanceRoleNotFoundFault
 */
const de_DBInstanceRoleNotFoundFault = (output: any, context: __SerdeContext): DBInstanceRoleNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
 * deserializeAws_queryDBLogFileNotFoundFault
 */
const de_DBLogFileNotFoundFault = (output: any, context: __SerdeContext): DBLogFileNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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
 * deserializeAws_queryDBProxy
 */
const de_DBProxy = (output: any, context: __SerdeContext): DBProxy => {
  const contents: any = {};
  if (output["DBProxyName"] !== undefined) {
    contents.DBProxyName = __expectString(output["DBProxyName"]);
  }
  if (output["DBProxyArn"] !== undefined) {
    contents.DBProxyArn = __expectString(output["DBProxyArn"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EngineFamily"] !== undefined) {
    contents.EngineFamily = __expectString(output["EngineFamily"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output.VpcSecurityGroupIds === "") {
    contents.VpcSecurityGroupIds = [];
  } else if (output["VpcSecurityGroupIds"] !== undefined && output["VpcSecurityGroupIds"]["member"] !== undefined) {
    contents.VpcSecurityGroupIds = de_StringList(
      __getArrayIfSingleItem(output["VpcSecurityGroupIds"]["member"]),
      context
    );
  }
  if (output.VpcSubnetIds === "") {
    contents.VpcSubnetIds = [];
  } else if (output["VpcSubnetIds"] !== undefined && output["VpcSubnetIds"]["member"] !== undefined) {
    contents.VpcSubnetIds = de_StringList(__getArrayIfSingleItem(output["VpcSubnetIds"]["member"]), context);
  }
  if (output.Auth === "") {
    contents.Auth = [];
  } else if (output["Auth"] !== undefined && output["Auth"]["member"] !== undefined) {
    contents.Auth = de_UserAuthConfigInfoList(__getArrayIfSingleItem(output["Auth"]["member"]), context);
  }
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = __expectString(output["RoleArn"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["RequireTLS"] !== undefined) {
    contents.RequireTLS = __parseBoolean(output["RequireTLS"]);
  }
  if (output["IdleClientTimeout"] !== undefined) {
    contents.IdleClientTimeout = __strictParseInt32(output["IdleClientTimeout"]) as number;
  }
  if (output["DebugLogging"] !== undefined) {
    contents.DebugLogging = __parseBoolean(output["DebugLogging"]);
  }
  if (output["CreatedDate"] !== undefined) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedDate"]));
  }
  if (output["UpdatedDate"] !== undefined) {
    contents.UpdatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdatedDate"]));
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyAlreadyExistsFault
 */
const de_DBProxyAlreadyExistsFault = (output: any, context: __SerdeContext): DBProxyAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyEndpoint
 */
const de_DBProxyEndpoint = (output: any, context: __SerdeContext): DBProxyEndpoint => {
  const contents: any = {};
  if (output["DBProxyEndpointName"] !== undefined) {
    contents.DBProxyEndpointName = __expectString(output["DBProxyEndpointName"]);
  }
  if (output["DBProxyEndpointArn"] !== undefined) {
    contents.DBProxyEndpointArn = __expectString(output["DBProxyEndpointArn"]);
  }
  if (output["DBProxyName"] !== undefined) {
    contents.DBProxyName = __expectString(output["DBProxyName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output.VpcSecurityGroupIds === "") {
    contents.VpcSecurityGroupIds = [];
  } else if (output["VpcSecurityGroupIds"] !== undefined && output["VpcSecurityGroupIds"]["member"] !== undefined) {
    contents.VpcSecurityGroupIds = de_StringList(
      __getArrayIfSingleItem(output["VpcSecurityGroupIds"]["member"]),
      context
    );
  }
  if (output.VpcSubnetIds === "") {
    contents.VpcSubnetIds = [];
  } else if (output["VpcSubnetIds"] !== undefined && output["VpcSubnetIds"]["member"] !== undefined) {
    contents.VpcSubnetIds = de_StringList(__getArrayIfSingleItem(output["VpcSubnetIds"]["member"]), context);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["CreatedDate"] !== undefined) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedDate"]));
  }
  if (output["TargetRole"] !== undefined) {
    contents.TargetRole = __expectString(output["TargetRole"]);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyQuotaExceededFault
 */
const de_DBProxyQuotaExceededFault = (output: any, context: __SerdeContext): DBProxyQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTarget
 */
const de_DBProxyTarget = (output: any, context: __SerdeContext): DBProxyTarget => {
  const contents: any = {};
  if (output["TargetArn"] !== undefined) {
    contents.TargetArn = __expectString(output["TargetArn"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["TrackedClusterId"] !== undefined) {
    contents.TrackedClusterId = __expectString(output["TrackedClusterId"]);
  }
  if (output["RdsResourceId"] !== undefined) {
    contents.RdsResourceId = __expectString(output["RdsResourceId"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Role"] !== undefined) {
    contents.Role = __expectString(output["Role"]);
  }
  if (output["TargetHealth"] !== undefined) {
    contents.TargetHealth = de_TargetHealth(output["TargetHealth"], context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTargetGroup
 */
const de_DBProxyTargetGroup = (output: any, context: __SerdeContext): DBProxyTargetGroup => {
  const contents: any = {};
  if (output["DBProxyName"] !== undefined) {
    contents.DBProxyName = __expectString(output["DBProxyName"]);
  }
  if (output["TargetGroupName"] !== undefined) {
    contents.TargetGroupName = __expectString(output["TargetGroupName"]);
  }
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = __expectString(output["TargetGroupArn"]);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["ConnectionPoolConfig"] !== undefined) {
    contents.ConnectionPoolConfig = de_ConnectionPoolConfigurationInfo(output["ConnectionPoolConfig"], context);
  }
  if (output["CreatedDate"] !== undefined) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedDate"]));
  }
  if (output["UpdatedDate"] !== undefined) {
    contents.UpdatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdatedDate"]));
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTargetGroupNotFoundFault
 */
const de_DBProxyTargetGroupNotFoundFault = (output: any, context: __SerdeContext): DBProxyTargetGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBProxyTargetNotFoundFault
 */
const de_DBProxyTargetNotFoundFault = (output: any, context: __SerdeContext): DBProxyTargetNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDBSecurityGroup
 */
const de_DBSecurityGroup = (output: any, context: __SerdeContext): DBSecurityGroup => {
  const contents: any = {};
  if (output["OwnerId"] !== undefined) {
    contents.OwnerId = __expectString(output["OwnerId"]);
  }
  if (output["DBSecurityGroupName"] !== undefined) {
    contents.DBSecurityGroupName = __expectString(output["DBSecurityGroupName"]);
  }
  if (output["DBSecurityGroupDescription"] !== undefined) {
    contents.DBSecurityGroupDescription = __expectString(output["DBSecurityGroupDescription"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output.EC2SecurityGroups === "") {
    contents.EC2SecurityGroups = [];
  } else if (
    output["EC2SecurityGroups"] !== undefined &&
    output["EC2SecurityGroups"]["EC2SecurityGroup"] !== undefined
  ) {
    contents.EC2SecurityGroups = de_EC2SecurityGroupList(
      __getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]),
      context
    );
  }
  if (output.IPRanges === "") {
    contents.IPRanges = [];
  } else if (output["IPRanges"] !== undefined && output["IPRanges"]["IPRange"] !== undefined) {
    contents.IPRanges = de_IPRangeList(__getArrayIfSingleItem(output["IPRanges"]["IPRange"]), context);
  }
  if (output["DBSecurityGroupArn"] !== undefined) {
    contents.DBSecurityGroupArn = __expectString(output["DBSecurityGroupArn"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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
 * deserializeAws_queryDBSecurityGroupMessage
 */
const de_DBSecurityGroupMessage = (output: any, context: __SerdeContext): DBSecurityGroupMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBSecurityGroups === "") {
    contents.DBSecurityGroups = [];
  } else if (output["DBSecurityGroups"] !== undefined && output["DBSecurityGroups"]["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroups = de_DBSecurityGroups(
      __getArrayIfSingleItem(output["DBSecurityGroups"]["DBSecurityGroup"]),
      context
    );
  }
  return contents;
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
 * deserializeAws_queryDBSecurityGroupNotSupportedFault
 */
const de_DBSecurityGroupNotSupportedFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupNotSupportedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
 * deserializeAws_queryDBSnapshot
 */
const de_DBSnapshot = (output: any, context: __SerdeContext): DBSnapshot => {
  const contents: any = {};
  if (output["DBSnapshotIdentifier"] !== undefined) {
    contents.DBSnapshotIdentifier = __expectString(output["DBSnapshotIdentifier"]);
  }
  if (output["DBInstanceIdentifier"] !== undefined) {
    contents.DBInstanceIdentifier = __expectString(output["DBInstanceIdentifier"]);
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
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["InstanceCreateTime"] !== undefined) {
    contents.InstanceCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["InstanceCreateTime"]));
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
  if (output["Iops"] !== undefined) {
    contents.Iops = __strictParseInt32(output["Iops"]) as number;
  }
  if (output["OptionGroupName"] !== undefined) {
    contents.OptionGroupName = __expectString(output["OptionGroupName"]);
  }
  if (output["PercentProgress"] !== undefined) {
    contents.PercentProgress = __strictParseInt32(output["PercentProgress"]) as number;
  }
  if (output["SourceRegion"] !== undefined) {
    contents.SourceRegion = __expectString(output["SourceRegion"]);
  }
  if (output["SourceDBSnapshotIdentifier"] !== undefined) {
    contents.SourceDBSnapshotIdentifier = __expectString(output["SourceDBSnapshotIdentifier"]);
  }
  if (output["StorageType"] !== undefined) {
    contents.StorageType = __expectString(output["StorageType"]);
  }
  if (output["TdeCredentialArn"] !== undefined) {
    contents.TdeCredentialArn = __expectString(output["TdeCredentialArn"]);
  }
  if (output["Encrypted"] !== undefined) {
    contents.Encrypted = __parseBoolean(output["Encrypted"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["DBSnapshotArn"] !== undefined) {
    contents.DBSnapshotArn = __expectString(output["DBSnapshotArn"]);
  }
  if (output["Timezone"] !== undefined) {
    contents.Timezone = __expectString(output["Timezone"]);
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  if (output.ProcessorFeatures === "") {
    contents.ProcessorFeatures = [];
  } else if (
    output["ProcessorFeatures"] !== undefined &&
    output["ProcessorFeatures"]["ProcessorFeature"] !== undefined
  ) {
    contents.ProcessorFeatures = de_ProcessorFeatureList(
      __getArrayIfSingleItem(output["ProcessorFeatures"]["ProcessorFeature"]),
      context
    );
  }
  if (output["DbiResourceId"] !== undefined) {
    contents.DbiResourceId = __expectString(output["DbiResourceId"]);
  }
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = de_TagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output["OriginalSnapshotCreateTime"] !== undefined) {
    contents.OriginalSnapshotCreateTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["OriginalSnapshotCreateTime"])
    );
  }
  if (output["SnapshotDatabaseTime"] !== undefined) {
    contents.SnapshotDatabaseTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SnapshotDatabaseTime"]));
  }
  if (output["SnapshotTarget"] !== undefined) {
    contents.SnapshotTarget = __expectString(output["SnapshotTarget"]);
  }
  if (output["StorageThroughput"] !== undefined) {
    contents.StorageThroughput = __strictParseInt32(output["StorageThroughput"]) as number;
  }
  if (output["DBSystemId"] !== undefined) {
    contents.DBSystemId = __expectString(output["DBSystemId"]);
  }
  if (output["DedicatedLogVolume"] !== undefined) {
    contents.DedicatedLogVolume = __parseBoolean(output["DedicatedLogVolume"]);
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
 * deserializeAws_queryDBSnapshotAttribute
 */
const de_DBSnapshotAttribute = (output: any, context: __SerdeContext): DBSnapshotAttribute => {
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
  if (output["DBSnapshotIdentifier"] !== undefined) {
    contents.DBSnapshotIdentifier = __expectString(output["DBSnapshotIdentifier"]);
  }
  if (output.DBSnapshotAttributes === "") {
    contents.DBSnapshotAttributes = [];
  } else if (
    output["DBSnapshotAttributes"] !== undefined &&
    output["DBSnapshotAttributes"]["DBSnapshotAttribute"] !== undefined
  ) {
    contents.DBSnapshotAttributes = de_DBSnapshotAttributeList(
      __getArrayIfSingleItem(output["DBSnapshotAttributes"]["DBSnapshotAttribute"]),
      context
    );
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBSnapshots === "") {
    contents.DBSnapshots = [];
  } else if (output["DBSnapshots"] !== undefined && output["DBSnapshots"]["DBSnapshot"] !== undefined) {
    contents.DBSnapshots = de_DBSnapshotList(__getArrayIfSingleItem(output["DBSnapshots"]["DBSnapshot"]), context);
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
  if (output.SupportedNetworkTypes === "") {
    contents.SupportedNetworkTypes = [];
  } else if (output["SupportedNetworkTypes"] !== undefined && output["SupportedNetworkTypes"]["member"] !== undefined) {
    contents.SupportedNetworkTypes = de_StringList(
      __getArrayIfSingleItem(output["SupportedNetworkTypes"]["member"]),
      context
    );
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
 * deserializeAws_queryDBSubnetGroupNotAllowedFault
 */
const de_DBSubnetGroupNotAllowedFault = (output: any, context: __SerdeContext): DBSubnetGroupNotAllowedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
 * deserializeAws_queryDeleteBlueGreenDeploymentResponse
 */
const de_DeleteBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): DeleteBlueGreenDeploymentResponse => {
  const contents: any = {};
  if (output["BlueGreenDeployment"] !== undefined) {
    contents.BlueGreenDeployment = de_BlueGreenDeployment(output["BlueGreenDeployment"], context);
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
  if (output["DBClusterAutomatedBackup"] !== undefined) {
    contents.DBClusterAutomatedBackup = de_DBClusterAutomatedBackup(output["DBClusterAutomatedBackup"], context);
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
 * deserializeAws_queryDeleteDBInstanceAutomatedBackupResult
 */
const de_DeleteDBInstanceAutomatedBackupResult = (
  output: any,
  context: __SerdeContext
): DeleteDBInstanceAutomatedBackupResult => {
  const contents: any = {};
  if (output["DBInstanceAutomatedBackup"] !== undefined) {
    contents.DBInstanceAutomatedBackup = de_DBInstanceAutomatedBackup(output["DBInstanceAutomatedBackup"], context);
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
 * deserializeAws_queryDeleteDBProxyEndpointResponse
 */
const de_DeleteDBProxyEndpointResponse = (output: any, context: __SerdeContext): DeleteDBProxyEndpointResponse => {
  const contents: any = {};
  if (output["DBProxyEndpoint"] !== undefined) {
    contents.DBProxyEndpoint = de_DBProxyEndpoint(output["DBProxyEndpoint"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBProxyResponse
 */
const de_DeleteDBProxyResponse = (output: any, context: __SerdeContext): DeleteDBProxyResponse => {
  const contents: any = {};
  if (output["DBProxy"] !== undefined) {
    contents.DBProxy = de_DBProxy(output["DBProxy"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDBSnapshotResult
 */
const de_DeleteDBSnapshotResult = (output: any, context: __SerdeContext): DeleteDBSnapshotResult => {
  const contents: any = {};
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = de_DBSnapshot(output["DBSnapshot"], context);
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
  if (output.BlueGreenDeployments === "") {
    contents.BlueGreenDeployments = [];
  } else if (output["BlueGreenDeployments"] !== undefined && output["BlueGreenDeployments"]["member"] !== undefined) {
    contents.BlueGreenDeployments = de_BlueGreenDeploymentList(
      __getArrayIfSingleItem(output["BlueGreenDeployments"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
 * deserializeAws_queryDescribeDBLogFilesDetails
 */
const de_DescribeDBLogFilesDetails = (output: any, context: __SerdeContext): DescribeDBLogFilesDetails => {
  const contents: any = {};
  if (output["LogFileName"] !== undefined) {
    contents.LogFileName = __expectString(output["LogFileName"]);
  }
  if (output["LastWritten"] !== undefined) {
    contents.LastWritten = __strictParseLong(output["LastWritten"]) as number;
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseLong(output["Size"]) as number;
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
  if (output.DescribeDBLogFiles === "") {
    contents.DescribeDBLogFiles = [];
  } else if (
    output["DescribeDBLogFiles"] !== undefined &&
    output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"] !== undefined
  ) {
    contents.DescribeDBLogFiles = de_DescribeDBLogFilesList(
      __getArrayIfSingleItem(output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBProxiesResponse
 */
const de_DescribeDBProxiesResponse = (output: any, context: __SerdeContext): DescribeDBProxiesResponse => {
  const contents: any = {};
  if (output.DBProxies === "") {
    contents.DBProxies = [];
  } else if (output["DBProxies"] !== undefined && output["DBProxies"]["member"] !== undefined) {
    contents.DBProxies = de_DBProxyList(__getArrayIfSingleItem(output["DBProxies"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.DBProxyEndpoints === "") {
    contents.DBProxyEndpoints = [];
  } else if (output["DBProxyEndpoints"] !== undefined && output["DBProxyEndpoints"]["member"] !== undefined) {
    contents.DBProxyEndpoints = de_DBProxyEndpointList(
      __getArrayIfSingleItem(output["DBProxyEndpoints"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = de_TargetGroupList(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDBProxyTargetsResponse
 */
const de_DescribeDBProxyTargetsResponse = (output: any, context: __SerdeContext): DescribeDBProxyTargetsResponse => {
  const contents: any = {};
  if (output.Targets === "") {
    contents.Targets = [];
  } else if (output["Targets"] !== undefined && output["Targets"]["member"] !== undefined) {
    contents.Targets = de_TargetList(__getArrayIfSingleItem(output["Targets"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output["DBSnapshotAttributesResult"] !== undefined) {
    contents.DBSnapshotAttributesResult = de_DBSnapshotAttributesResult(output["DBSnapshotAttributesResult"], context);
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
  if (output["OU"] !== undefined) {
    contents.OU = __expectString(output["OU"]);
  }
  if (output["AuthSecretArn"] !== undefined) {
    contents.AuthSecretArn = __expectString(output["AuthSecretArn"]);
  }
  if (output.DnsIps === "") {
    contents.DnsIps = [];
  } else if (output["DnsIps"] !== undefined && output["DnsIps"]["member"] !== undefined) {
    contents.DnsIps = de_StringList(__getArrayIfSingleItem(output["DnsIps"]["member"]), context);
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
 * deserializeAws_queryDownloadDBLogFilePortionDetails
 */
const de_DownloadDBLogFilePortionDetails = (output: any, context: __SerdeContext): DownloadDBLogFilePortionDetails => {
  const contents: any = {};
  if (output["LogFileData"] !== undefined) {
    contents.LogFileData = __expectString(output["LogFileData"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["AdditionalDataPending"] !== undefined) {
    contents.AdditionalDataPending = __parseBoolean(output["AdditionalDataPending"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEC2SecurityGroup
 */
const de_EC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EC2SecurityGroupName"] !== undefined) {
    contents.EC2SecurityGroupName = __expectString(output["EC2SecurityGroupName"]);
  }
  if (output["EC2SecurityGroupId"] !== undefined) {
    contents.EC2SecurityGroupId = __expectString(output["EC2SecurityGroupId"]);
  }
  if (output["EC2SecurityGroupOwnerId"] !== undefined) {
    contents.EC2SecurityGroupOwnerId = __expectString(output["EC2SecurityGroupOwnerId"]);
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
 * deserializeAws_queryExportTask
 */
const de_ExportTask = (output: any, context: __SerdeContext): ExportTask => {
  const contents: any = {};
  if (output["ExportTaskIdentifier"] !== undefined) {
    contents.ExportTaskIdentifier = __expectString(output["ExportTaskIdentifier"]);
  }
  if (output["SourceArn"] !== undefined) {
    contents.SourceArn = __expectString(output["SourceArn"]);
  }
  if (output.ExportOnly === "") {
    contents.ExportOnly = [];
  } else if (output["ExportOnly"] !== undefined && output["ExportOnly"]["member"] !== undefined) {
    contents.ExportOnly = de_StringList(__getArrayIfSingleItem(output["ExportOnly"]["member"]), context);
  }
  if (output["SnapshotTime"] !== undefined) {
    contents.SnapshotTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SnapshotTime"]));
  }
  if (output["TaskStartTime"] !== undefined) {
    contents.TaskStartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["TaskStartTime"]));
  }
  if (output["TaskEndTime"] !== undefined) {
    contents.TaskEndTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["TaskEndTime"]));
  }
  if (output["S3Bucket"] !== undefined) {
    contents.S3Bucket = __expectString(output["S3Bucket"]);
  }
  if (output["S3Prefix"] !== undefined) {
    contents.S3Prefix = __expectString(output["S3Prefix"]);
  }
  if (output["IamRoleArn"] !== undefined) {
    contents.IamRoleArn = __expectString(output["IamRoleArn"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["PercentProgress"] !== undefined) {
    contents.PercentProgress = __strictParseInt32(output["PercentProgress"]) as number;
  }
  if (output["TotalExtractedDataInGB"] !== undefined) {
    contents.TotalExtractedDataInGB = __strictParseInt32(output["TotalExtractedDataInGB"]) as number;
  }
  if (output["FailureCause"] !== undefined) {
    contents.FailureCause = __expectString(output["FailureCause"]);
  }
  if (output["WarningMessage"] !== undefined) {
    contents.WarningMessage = __expectString(output["WarningMessage"]);
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryExportTaskAlreadyExistsFault
 */
const de_ExportTaskAlreadyExistsFault = (output: any, context: __SerdeContext): ExportTaskAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryExportTaskNotFoundFault
 */
const de_ExportTaskNotFoundFault = (output: any, context: __SerdeContext): ExportTaskNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ExportTasks === "") {
    contents.ExportTasks = [];
  } else if (output["ExportTasks"] !== undefined && output["ExportTasks"]["ExportTask"] !== undefined) {
    contents.ExportTasks = de_ExportTasksList(__getArrayIfSingleItem(output["ExportTasks"]["ExportTask"]), context);
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
 * deserializeAws_queryFailoverState
 */
const de_FailoverState = (output: any, context: __SerdeContext): FailoverState => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["FromDbClusterArn"] !== undefined) {
    contents.FromDbClusterArn = __expectString(output["FromDbClusterArn"]);
  }
  if (output["ToDbClusterArn"] !== undefined) {
    contents.ToDbClusterArn = __expectString(output["ToDbClusterArn"]);
  }
  if (output["IsDataLossAllowed"] !== undefined) {
    contents.IsDataLossAllowed = __parseBoolean(output["IsDataLossAllowed"]);
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
  if (output["DatabaseName"] !== undefined) {
    contents.DatabaseName = __expectString(output["DatabaseName"]);
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
  if (output["FailoverState"] !== undefined) {
    contents.FailoverState = de_FailoverState(output["FailoverState"], context);
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
  if (output["GlobalWriteForwardingStatus"] !== undefined) {
    contents.GlobalWriteForwardingStatus = __expectString(output["GlobalWriteForwardingStatus"]);
  }
  if (output["SynchronizationStatus"] !== undefined) {
    contents.SynchronizationStatus = __expectString(output["SynchronizationStatus"]);
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
 * deserializeAws_queryIamRoleMissingPermissionsFault
 */
const de_IamRoleMissingPermissionsFault = (output: any, context: __SerdeContext): IamRoleMissingPermissionsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIamRoleNotFoundFault
 */
const de_IamRoleNotFoundFault = (output: any, context: __SerdeContext): IamRoleNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
 * deserializeAws_queryInsufficientAvailableIPsInSubnetFault
 */
const de_InsufficientAvailableIPsInSubnetFault = (
  output: any,
  context: __SerdeContext
): InsufficientAvailableIPsInSubnetFault => {
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
 * deserializeAws_queryInvalidBlueGreenDeploymentStateFault
 */
const de_InvalidBlueGreenDeploymentStateFault = (
  output: any,
  context: __SerdeContext
): InvalidBlueGreenDeploymentStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBClusterCapacityFault
 */
const de_InvalidDBClusterCapacityFault = (output: any, context: __SerdeContext): InvalidDBClusterCapacityFault => {
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
 * deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault
 */
const de_InvalidDBInstanceAutomatedBackupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBInstanceAutomatedBackupStateFault => {
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
 * deserializeAws_queryInvalidDBProxyEndpointStateFault
 */
const de_InvalidDBProxyEndpointStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBProxyEndpointStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDBProxyStateFault
 */
const de_InvalidDBProxyStateFault = (output: any, context: __SerdeContext): InvalidDBProxyStateFault => {
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
 * deserializeAws_queryInvalidDBSubnetGroupFault
 */
const de_InvalidDBSubnetGroupFault = (output: any, context: __SerdeContext): InvalidDBSubnetGroupFault => {
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
 * deserializeAws_queryInvalidExportOnlyFault
 */
const de_InvalidExportOnlyFault = (output: any, context: __SerdeContext): InvalidExportOnlyFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidExportSourceStateFault
 */
const de_InvalidExportSourceStateFault = (output: any, context: __SerdeContext): InvalidExportSourceStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidExportTaskStateFault
 */
const de_InvalidExportTaskStateFault = (output: any, context: __SerdeContext): InvalidExportTaskStateFault => {
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
 * deserializeAws_queryInvalidOptionGroupStateFault
 */
const de_InvalidOptionGroupStateFault = (output: any, context: __SerdeContext): InvalidOptionGroupStateFault => {
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
 * deserializeAws_queryInvalidS3BucketFault
 */
const de_InvalidS3BucketFault = (output: any, context: __SerdeContext): InvalidS3BucketFault => {
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
 * deserializeAws_queryIPRange
 */
const de_IPRange = (output: any, context: __SerdeContext): IPRange => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CIDRIP"] !== undefined) {
    contents.CIDRIP = __expectString(output["CIDRIP"]);
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
 * deserializeAws_queryMasterUserSecret
 */
const de_MasterUserSecret = (output: any, context: __SerdeContext): MasterUserSecret => {
  const contents: any = {};
  if (output["SecretArn"] !== undefined) {
    contents.SecretArn = __expectString(output["SecretArn"]);
  }
  if (output["SecretStatus"] !== undefined) {
    contents.SecretStatus = __expectString(output["SecretStatus"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMinimumEngineVersionPerAllowedValue
 */
const de_MinimumEngineVersionPerAllowedValue = (
  output: any,
  context: __SerdeContext
): MinimumEngineVersionPerAllowedValue => {
  const contents: any = {};
  if (output["AllowedValue"] !== undefined) {
    contents.AllowedValue = __expectString(output["AllowedValue"]);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
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
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["KinesisStreamName"] !== undefined) {
    contents.KinesisStreamName = __expectString(output["KinesisStreamName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  if (output["EngineNativeAuditFieldsIncluded"] !== undefined) {
    contents.EngineNativeAuditFieldsIncluded = __parseBoolean(output["EngineNativeAuditFieldsIncluded"]);
  }
  if (output["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = __expectString(output["PolicyStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyCertificatesResult
 */
const de_ModifyCertificatesResult = (output: any, context: __SerdeContext): ModifyCertificatesResult => {
  const contents: any = {};
  if (output["Certificate"] !== undefined) {
    contents.Certificate = de_Certificate(output["Certificate"], context);
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
 * deserializeAws_queryModifyDBProxyEndpointResponse
 */
const de_ModifyDBProxyEndpointResponse = (output: any, context: __SerdeContext): ModifyDBProxyEndpointResponse => {
  const contents: any = {};
  if (output["DBProxyEndpoint"] !== undefined) {
    contents.DBProxyEndpoint = de_DBProxyEndpoint(output["DBProxyEndpoint"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBProxyResponse
 */
const de_ModifyDBProxyResponse = (output: any, context: __SerdeContext): ModifyDBProxyResponse => {
  const contents: any = {};
  if (output["DBProxy"] !== undefined) {
    contents.DBProxy = de_DBProxy(output["DBProxy"], context);
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
  if (output["DBProxyTargetGroup"] !== undefined) {
    contents.DBProxyTargetGroup = de_DBProxyTargetGroup(output["DBProxyTargetGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBSnapshotAttributeResult
 */
const de_ModifyDBSnapshotAttributeResult = (output: any, context: __SerdeContext): ModifyDBSnapshotAttributeResult => {
  const contents: any = {};
  if (output["DBSnapshotAttributesResult"] !== undefined) {
    contents.DBSnapshotAttributesResult = de_DBSnapshotAttributesResult(output["DBSnapshotAttributesResult"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyDBSnapshotResult
 */
const de_ModifyDBSnapshotResult = (output: any, context: __SerdeContext): ModifyDBSnapshotResult => {
  const contents: any = {};
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = de_DBSnapshot(output["DBSnapshot"], context);
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
 * deserializeAws_queryModifyOptionGroupResult
 */
const de_ModifyOptionGroupResult = (output: any, context: __SerdeContext): ModifyOptionGroupResult => {
  const contents: any = {};
  if (output["OptionGroup"] !== undefined) {
    contents.OptionGroup = de_OptionGroup(output["OptionGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkTypeNotSupported
 */
const de_NetworkTypeNotSupported = (output: any, context: __SerdeContext): NetworkTypeNotSupported => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOption
 */
const de_Option = (output: any, context: __SerdeContext): Option => {
  const contents: any = {};
  if (output["OptionName"] !== undefined) {
    contents.OptionName = __expectString(output["OptionName"]);
  }
  if (output["OptionDescription"] !== undefined) {
    contents.OptionDescription = __expectString(output["OptionDescription"]);
  }
  if (output["Persistent"] !== undefined) {
    contents.Persistent = __parseBoolean(output["Persistent"]);
  }
  if (output["Permanent"] !== undefined) {
    contents.Permanent = __parseBoolean(output["Permanent"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["OptionVersion"] !== undefined) {
    contents.OptionVersion = __expectString(output["OptionVersion"]);
  }
  if (output.OptionSettings === "") {
    contents.OptionSettings = [];
  } else if (output["OptionSettings"] !== undefined && output["OptionSettings"]["OptionSetting"] !== undefined) {
    contents.OptionSettings = de_OptionSettingConfigurationList(
      __getArrayIfSingleItem(output["OptionSettings"]["OptionSetting"]),
      context
    );
  }
  if (output.DBSecurityGroupMemberships === "") {
    contents.DBSecurityGroupMemberships = [];
  } else if (
    output["DBSecurityGroupMemberships"] !== undefined &&
    output["DBSecurityGroupMemberships"]["DBSecurityGroup"] !== undefined
  ) {
    contents.DBSecurityGroupMemberships = de_DBSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["DBSecurityGroupMemberships"]["DBSecurityGroup"]),
      context
    );
  }
  if (output.VpcSecurityGroupMemberships === "") {
    contents.VpcSecurityGroupMemberships = [];
  } else if (
    output["VpcSecurityGroupMemberships"] !== undefined &&
    output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"] !== undefined
  ) {
    contents.VpcSecurityGroupMemberships = de_VpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroup
 */
const de_OptionGroup = (output: any, context: __SerdeContext): OptionGroup => {
  const contents: any = {};
  if (output["OptionGroupName"] !== undefined) {
    contents.OptionGroupName = __expectString(output["OptionGroupName"]);
  }
  if (output["OptionGroupDescription"] !== undefined) {
    contents.OptionGroupDescription = __expectString(output["OptionGroupDescription"]);
  }
  if (output["EngineName"] !== undefined) {
    contents.EngineName = __expectString(output["EngineName"]);
  }
  if (output["MajorEngineVersion"] !== undefined) {
    contents.MajorEngineVersion = __expectString(output["MajorEngineVersion"]);
  }
  if (output.Options === "") {
    contents.Options = [];
  } else if (output["Options"] !== undefined && output["Options"]["Option"] !== undefined) {
    contents.Options = de_OptionsList(__getArrayIfSingleItem(output["Options"]["Option"]), context);
  }
  if (output["AllowsVpcAndNonVpcInstanceMemberships"] !== undefined) {
    contents.AllowsVpcAndNonVpcInstanceMemberships = __parseBoolean(output["AllowsVpcAndNonVpcInstanceMemberships"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["OptionGroupArn"] !== undefined) {
    contents.OptionGroupArn = __expectString(output["OptionGroupArn"]);
  }
  if (output["SourceOptionGroup"] !== undefined) {
    contents.SourceOptionGroup = __expectString(output["SourceOptionGroup"]);
  }
  if (output["SourceAccountId"] !== undefined) {
    contents.SourceAccountId = __expectString(output["SourceAccountId"]);
  }
  if (output["CopyTimestamp"] !== undefined) {
    contents.CopyTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CopyTimestamp"]));
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupAlreadyExistsFault
 */
const de_OptionGroupAlreadyExistsFault = (output: any, context: __SerdeContext): OptionGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
 * deserializeAws_queryOptionGroupOption
 */
const de_OptionGroupOption = (output: any, context: __SerdeContext): OptionGroupOption => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["EngineName"] !== undefined) {
    contents.EngineName = __expectString(output["EngineName"]);
  }
  if (output["MajorEngineVersion"] !== undefined) {
    contents.MajorEngineVersion = __expectString(output["MajorEngineVersion"]);
  }
  if (output["MinimumRequiredMinorEngineVersion"] !== undefined) {
    contents.MinimumRequiredMinorEngineVersion = __expectString(output["MinimumRequiredMinorEngineVersion"]);
  }
  if (output["PortRequired"] !== undefined) {
    contents.PortRequired = __parseBoolean(output["PortRequired"]);
  }
  if (output["DefaultPort"] !== undefined) {
    contents.DefaultPort = __strictParseInt32(output["DefaultPort"]) as number;
  }
  if (output.OptionsDependedOn === "") {
    contents.OptionsDependedOn = [];
  } else if (output["OptionsDependedOn"] !== undefined && output["OptionsDependedOn"]["OptionName"] !== undefined) {
    contents.OptionsDependedOn = de_OptionsDependedOn(
      __getArrayIfSingleItem(output["OptionsDependedOn"]["OptionName"]),
      context
    );
  }
  if (output.OptionsConflictsWith === "") {
    contents.OptionsConflictsWith = [];
  } else if (
    output["OptionsConflictsWith"] !== undefined &&
    output["OptionsConflictsWith"]["OptionConflictName"] !== undefined
  ) {
    contents.OptionsConflictsWith = de_OptionsConflictsWith(
      __getArrayIfSingleItem(output["OptionsConflictsWith"]["OptionConflictName"]),
      context
    );
  }
  if (output["Persistent"] !== undefined) {
    contents.Persistent = __parseBoolean(output["Persistent"]);
  }
  if (output["Permanent"] !== undefined) {
    contents.Permanent = __parseBoolean(output["Permanent"]);
  }
  if (output["RequiresAutoMinorEngineVersionUpgrade"] !== undefined) {
    contents.RequiresAutoMinorEngineVersionUpgrade = __parseBoolean(output["RequiresAutoMinorEngineVersionUpgrade"]);
  }
  if (output["VpcOnly"] !== undefined) {
    contents.VpcOnly = __parseBoolean(output["VpcOnly"]);
  }
  if (output["SupportsOptionVersionDowngrade"] !== undefined) {
    contents.SupportsOptionVersionDowngrade = __parseBoolean(output["SupportsOptionVersionDowngrade"]);
  }
  if (output.OptionGroupOptionSettings === "") {
    contents.OptionGroupOptionSettings = [];
  } else if (
    output["OptionGroupOptionSettings"] !== undefined &&
    output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"] !== undefined
  ) {
    contents.OptionGroupOptionSettings = de_OptionGroupOptionSettingsList(
      __getArrayIfSingleItem(output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"]),
      context
    );
  }
  if (output.OptionGroupOptionVersions === "") {
    contents.OptionGroupOptionVersions = [];
  } else if (
    output["OptionGroupOptionVersions"] !== undefined &&
    output["OptionGroupOptionVersions"]["OptionVersion"] !== undefined
  ) {
    contents.OptionGroupOptionVersions = de_OptionGroupOptionVersionsList(
      __getArrayIfSingleItem(output["OptionGroupOptionVersions"]["OptionVersion"]),
      context
    );
  }
  if (output["CopyableCrossAccount"] !== undefined) {
    contents.CopyableCrossAccount = __parseBoolean(output["CopyableCrossAccount"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroupOptionSetting
 */
const de_OptionGroupOptionSetting = (output: any, context: __SerdeContext): OptionGroupOptionSetting => {
  const contents: any = {};
  if (output["SettingName"] !== undefined) {
    contents.SettingName = __expectString(output["SettingName"]);
  }
  if (output["SettingDescription"] !== undefined) {
    contents.SettingDescription = __expectString(output["SettingDescription"]);
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["ApplyType"] !== undefined) {
    contents.ApplyType = __expectString(output["ApplyType"]);
  }
  if (output["AllowedValues"] !== undefined) {
    contents.AllowedValues = __expectString(output["AllowedValues"]);
  }
  if (output["IsModifiable"] !== undefined) {
    contents.IsModifiable = __parseBoolean(output["IsModifiable"]);
  }
  if (output["IsRequired"] !== undefined) {
    contents.IsRequired = __parseBoolean(output["IsRequired"]);
  }
  if (output.MinimumEngineVersionPerAllowedValue === "") {
    contents.MinimumEngineVersionPerAllowedValue = [];
  } else if (
    output["MinimumEngineVersionPerAllowedValue"] !== undefined &&
    output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"] !== undefined
  ) {
    contents.MinimumEngineVersionPerAllowedValue = de_MinimumEngineVersionPerAllowedValueList(
      __getArrayIfSingleItem(output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"]),
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
  if (output.OptionGroupOptions === "") {
    contents.OptionGroupOptions = [];
  } else if (
    output["OptionGroupOptions"] !== undefined &&
    output["OptionGroupOptions"]["OptionGroupOption"] !== undefined
  ) {
    contents.OptionGroupOptions = de_OptionGroupOptionsList(
      __getArrayIfSingleItem(output["OptionGroupOptions"]["OptionGroupOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionGroups
 */
const de_OptionGroups = (output: any, context: __SerdeContext): OptionGroups => {
  const contents: any = {};
  if (output.OptionGroupsList === "") {
    contents.OptionGroupsList = [];
  } else if (output["OptionGroupsList"] !== undefined && output["OptionGroupsList"]["OptionGroup"] !== undefined) {
    contents.OptionGroupsList = de_OptionGroupsList(
      __getArrayIfSingleItem(output["OptionGroupsList"]["OptionGroup"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
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
  if (output["IsCollection"] !== undefined) {
    contents.IsCollection = __parseBoolean(output["IsCollection"]);
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
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
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
  if (output["AvailabilityZoneGroup"] !== undefined) {
    contents.AvailabilityZoneGroup = __expectString(output["AvailabilityZoneGroup"]);
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
  if (output.AvailableProcessorFeatures === "") {
    contents.AvailableProcessorFeatures = [];
  } else if (
    output["AvailableProcessorFeatures"] !== undefined &&
    output["AvailableProcessorFeatures"]["AvailableProcessorFeature"] !== undefined
  ) {
    contents.AvailableProcessorFeatures = de_AvailableProcessorFeatureList(
      __getArrayIfSingleItem(output["AvailableProcessorFeatures"]["AvailableProcessorFeature"]),
      context
    );
  }
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = de_EngineModeList(
      __getArrayIfSingleItem(output["SupportedEngineModes"]["member"]),
      context
    );
  }
  if (output["SupportsStorageAutoscaling"] !== undefined) {
    contents.SupportsStorageAutoscaling = __parseBoolean(output["SupportsStorageAutoscaling"]);
  }
  if (output["SupportsKerberosAuthentication"] !== undefined) {
    contents.SupportsKerberosAuthentication = __parseBoolean(output["SupportsKerberosAuthentication"]);
  }
  if (output["OutpostCapable"] !== undefined) {
    contents.OutpostCapable = __parseBoolean(output["OutpostCapable"]);
  }
  if (output.SupportedActivityStreamModes === "") {
    contents.SupportedActivityStreamModes = [];
  } else if (
    output["SupportedActivityStreamModes"] !== undefined &&
    output["SupportedActivityStreamModes"]["member"] !== undefined
  ) {
    contents.SupportedActivityStreamModes = de_ActivityStreamModeList(
      __getArrayIfSingleItem(output["SupportedActivityStreamModes"]["member"]),
      context
    );
  }
  if (output["SupportsGlobalDatabases"] !== undefined) {
    contents.SupportsGlobalDatabases = __parseBoolean(output["SupportsGlobalDatabases"]);
  }
  if (output["SupportsClusters"] !== undefined) {
    contents.SupportsClusters = __parseBoolean(output["SupportsClusters"]);
  }
  if (output.SupportedNetworkTypes === "") {
    contents.SupportedNetworkTypes = [];
  } else if (output["SupportedNetworkTypes"] !== undefined && output["SupportedNetworkTypes"]["member"] !== undefined) {
    contents.SupportedNetworkTypes = de_StringList(
      __getArrayIfSingleItem(output["SupportedNetworkTypes"]["member"]),
      context
    );
  }
  if (output["SupportsStorageThroughput"] !== undefined) {
    contents.SupportsStorageThroughput = __parseBoolean(output["SupportsStorageThroughput"]);
  }
  if (output["MinStorageThroughputPerDbInstance"] !== undefined) {
    contents.MinStorageThroughputPerDbInstance = __strictParseInt32(
      output["MinStorageThroughputPerDbInstance"]
    ) as number;
  }
  if (output["MaxStorageThroughputPerDbInstance"] !== undefined) {
    contents.MaxStorageThroughputPerDbInstance = __strictParseInt32(
      output["MaxStorageThroughputPerDbInstance"]
    ) as number;
  }
  if (output["MinStorageThroughputPerIops"] !== undefined) {
    contents.MinStorageThroughputPerIops = __strictParseFloat(output["MinStorageThroughputPerIops"]) as number;
  }
  if (output["MaxStorageThroughputPerIops"] !== undefined) {
    contents.MaxStorageThroughputPerIops = __strictParseFloat(output["MaxStorageThroughputPerIops"]) as number;
  }
  if (output["SupportsDedicatedLogVolume"] !== undefined) {
    contents.SupportsDedicatedLogVolume = __parseBoolean(output["SupportsDedicatedLogVolume"]);
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
 * deserializeAws_queryOutpost
 */
const de_Outpost = (output: any, context: __SerdeContext): Outpost => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
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
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = de_EngineModeList(
      __getArrayIfSingleItem(output["SupportedEngineModes"]["member"]),
      context
    );
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
  if (output.ProcessorFeatures === "") {
    contents.ProcessorFeatures = [];
  } else if (
    output["ProcessorFeatures"] !== undefined &&
    output["ProcessorFeatures"]["ProcessorFeature"] !== undefined
  ) {
    contents.ProcessorFeatures = de_ProcessorFeatureList(
      __getArrayIfSingleItem(output["ProcessorFeatures"]["ProcessorFeature"]),
      context
    );
  }
  if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
    contents.IAMDatabaseAuthenticationEnabled = __parseBoolean(output["IAMDatabaseAuthenticationEnabled"]);
  }
  if (output["AutomationMode"] !== undefined) {
    contents.AutomationMode = __expectString(output["AutomationMode"]);
  }
  if (output["ResumeFullAutomationModeTime"] !== undefined) {
    contents.ResumeFullAutomationModeTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ResumeFullAutomationModeTime"])
    );
  }
  if (output["StorageThroughput"] !== undefined) {
    contents.StorageThroughput = __strictParseInt32(output["StorageThroughput"]) as number;
  }
  if (output["Engine"] !== undefined) {
    contents.Engine = __expectString(output["Engine"]);
  }
  if (output["DedicatedLogVolume"] !== undefined) {
    contents.DedicatedLogVolume = __parseBoolean(output["DedicatedLogVolume"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessorFeature
 */
const de_ProcessorFeature = (output: any, context: __SerdeContext): ProcessorFeature => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryPromoteReadReplicaResult
 */
const de_PromoteReadReplicaResult = (output: any, context: __SerdeContext): PromoteReadReplicaResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
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
 * deserializeAws_queryPurchaseReservedDBInstancesOfferingResult
 */
const de_PurchaseReservedDBInstancesOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedDBInstancesOfferingResult => {
  const contents: any = {};
  if (output["ReservedDBInstance"] !== undefined) {
    contents.ReservedDBInstance = de_ReservedDBInstance(output["ReservedDBInstance"], context);
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
 * deserializeAws_queryRebootDBClusterResult
 */
const de_RebootDBClusterResult = (output: any, context: __SerdeContext): RebootDBClusterResult => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
  }
  return contents;
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
 * deserializeAws_queryRecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {};
  if (output["RecurringChargeAmount"] !== undefined) {
    contents.RecurringChargeAmount = __strictParseFloat(output["RecurringChargeAmount"]) as number;
  }
  if (output["RecurringChargeFrequency"] !== undefined) {
    contents.RecurringChargeFrequency = __expectString(output["RecurringChargeFrequency"]);
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
 * deserializeAws_queryRegisterDBProxyTargetsResponse
 */
const de_RegisterDBProxyTargetsResponse = (output: any, context: __SerdeContext): RegisterDBProxyTargetsResponse => {
  const contents: any = {};
  if (output.DBProxyTargets === "") {
    contents.DBProxyTargets = [];
  } else if (output["DBProxyTargets"] !== undefined && output["DBProxyTargets"]["member"] !== undefined) {
    contents.DBProxyTargets = de_TargetList(__getArrayIfSingleItem(output["DBProxyTargets"]["member"]), context);
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
 * deserializeAws_queryReservedDBInstance
 */
const de_ReservedDBInstance = (output: any, context: __SerdeContext): ReservedDBInstance => {
  const contents: any = {};
  if (output["ReservedDBInstanceId"] !== undefined) {
    contents.ReservedDBInstanceId = __expectString(output["ReservedDBInstanceId"]);
  }
  if (output["ReservedDBInstancesOfferingId"] !== undefined) {
    contents.ReservedDBInstancesOfferingId = __expectString(output["ReservedDBInstancesOfferingId"]);
  }
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = __expectString(output["DBInstanceClass"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = __strictParseFloat(output["FixedPrice"]) as number;
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = __strictParseFloat(output["UsagePrice"]) as number;
  }
  if (output["CurrencyCode"] !== undefined) {
    contents.CurrencyCode = __expectString(output["CurrencyCode"]);
  }
  if (output["DBInstanceCount"] !== undefined) {
    contents.DBInstanceCount = __strictParseInt32(output["DBInstanceCount"]) as number;
  }
  if (output["ProductDescription"] !== undefined) {
    contents.ProductDescription = __expectString(output["ProductDescription"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = __expectString(output["OfferingType"]);
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = __parseBoolean(output["MultiAZ"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  } else if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
    contents.RecurringCharges = de_RecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  if (output["ReservedDBInstanceArn"] !== undefined) {
    contents.ReservedDBInstanceArn = __expectString(output["ReservedDBInstanceArn"]);
  }
  if (output["LeaseId"] !== undefined) {
    contents.LeaseId = __expectString(output["LeaseId"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedDBInstances === "") {
    contents.ReservedDBInstances = [];
  } else if (
    output["ReservedDBInstances"] !== undefined &&
    output["ReservedDBInstances"]["ReservedDBInstance"] !== undefined
  ) {
    contents.ReservedDBInstances = de_ReservedDBInstanceList(
      __getArrayIfSingleItem(output["ReservedDBInstances"]["ReservedDBInstance"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstanceNotFoundFault
 */
const de_ReservedDBInstanceNotFoundFault = (output: any, context: __SerdeContext): ReservedDBInstanceNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedDBInstancesOffering
 */
const de_ReservedDBInstancesOffering = (output: any, context: __SerdeContext): ReservedDBInstancesOffering => {
  const contents: any = {};
  if (output["ReservedDBInstancesOfferingId"] !== undefined) {
    contents.ReservedDBInstancesOfferingId = __expectString(output["ReservedDBInstancesOfferingId"]);
  }
  if (output["DBInstanceClass"] !== undefined) {
    contents.DBInstanceClass = __expectString(output["DBInstanceClass"]);
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = __strictParseFloat(output["FixedPrice"]) as number;
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = __strictParseFloat(output["UsagePrice"]) as number;
  }
  if (output["CurrencyCode"] !== undefined) {
    contents.CurrencyCode = __expectString(output["CurrencyCode"]);
  }
  if (output["ProductDescription"] !== undefined) {
    contents.ProductDescription = __expectString(output["ProductDescription"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = __expectString(output["OfferingType"]);
  }
  if (output["MultiAZ"] !== undefined) {
    contents.MultiAZ = __parseBoolean(output["MultiAZ"]);
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  } else if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
    contents.RecurringCharges = de_RecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedDBInstancesOfferings === "") {
    contents.ReservedDBInstancesOfferings = [];
  } else if (
    output["ReservedDBInstancesOfferings"] !== undefined &&
    output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"] !== undefined
  ) {
    contents.ReservedDBInstancesOfferings = de_ReservedDBInstancesOfferingList(
      __getArrayIfSingleItem(output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
 * deserializeAws_queryRestoreDBClusterFromS3Result
 */
const de_RestoreDBClusterFromS3Result = (output: any, context: __SerdeContext): RestoreDBClusterFromS3Result => {
  const contents: any = {};
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = de_DBCluster(output["DBCluster"], context);
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
 * deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult
 */
const de_RestoreDBInstanceFromDBSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreDBInstanceFromDBSnapshotResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreDBInstanceFromS3Result
 */
const de_RestoreDBInstanceFromS3Result = (output: any, context: __SerdeContext): RestoreDBInstanceFromS3Result => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
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
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreWindow
 */
const de_RestoreWindow = (output: any, context: __SerdeContext): RestoreWindow => {
  const contents: any = {};
  if (output["EarliestTime"] !== undefined) {
    contents.EarliestTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EarliestTime"]));
  }
  if (output["LatestTime"] !== undefined) {
    contents.LatestTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LatestTime"]));
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
  if (output["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroup = de_DBSecurityGroup(output["DBSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryScalingConfigurationInfo
 */
const de_ScalingConfigurationInfo = (output: any, context: __SerdeContext): ScalingConfigurationInfo => {
  const contents: any = {};
  if (output["MinCapacity"] !== undefined) {
    contents.MinCapacity = __strictParseInt32(output["MinCapacity"]) as number;
  }
  if (output["MaxCapacity"] !== undefined) {
    contents.MaxCapacity = __strictParseInt32(output["MaxCapacity"]) as number;
  }
  if (output["AutoPause"] !== undefined) {
    contents.AutoPause = __parseBoolean(output["AutoPause"]);
  }
  if (output["SecondsUntilAutoPause"] !== undefined) {
    contents.SecondsUntilAutoPause = __strictParseInt32(output["SecondsUntilAutoPause"]) as number;
  }
  if (output["TimeoutAction"] !== undefined) {
    contents.TimeoutAction = __expectString(output["TimeoutAction"]);
  }
  if (output["SecondsBeforeTimeout"] !== undefined) {
    contents.SecondsBeforeTimeout = __strictParseInt32(output["SecondsBeforeTimeout"]) as number;
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
 * deserializeAws_querySourceClusterNotSupportedFault
 */
const de_SourceClusterNotSupportedFault = (output: any, context: __SerdeContext): SourceClusterNotSupportedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceDatabaseNotSupportedFault
 */
const de_SourceDatabaseNotSupportedFault = (output: any, context: __SerdeContext): SourceDatabaseNotSupportedFault => {
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
 * deserializeAws_querySourceRegion
 */
const de_SourceRegion = (output: any, context: __SerdeContext): SourceRegion => {
  const contents: any = {};
  if (output["RegionName"] !== undefined) {
    contents.RegionName = __expectString(output["RegionName"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SupportsDBInstanceAutomatedBackupsReplication"] !== undefined) {
    contents.SupportsDBInstanceAutomatedBackupsReplication = __parseBoolean(
      output["SupportsDBInstanceAutomatedBackupsReplication"]
    );
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.SourceRegions === "") {
    contents.SourceRegions = [];
  } else if (output["SourceRegions"] !== undefined && output["SourceRegions"]["SourceRegion"] !== undefined) {
    contents.SourceRegions = de_SourceRegionList(
      __getArrayIfSingleItem(output["SourceRegions"]["SourceRegion"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryStartActivityStreamResponse
 */
const de_StartActivityStreamResponse = (output: any, context: __SerdeContext): StartActivityStreamResponse => {
  const contents: any = {};
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["KinesisStreamName"] !== undefined) {
    contents.KinesisStreamName = __expectString(output["KinesisStreamName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  if (output["ApplyImmediately"] !== undefined) {
    contents.ApplyImmediately = __parseBoolean(output["ApplyImmediately"]);
  }
  if (output["EngineNativeAuditFieldsIncluded"] !== undefined) {
    contents.EngineNativeAuditFieldsIncluded = __parseBoolean(output["EngineNativeAuditFieldsIncluded"]);
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
 * deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationResult
 */
const de_StartDBInstanceAutomatedBackupsReplicationResult = (
  output: any,
  context: __SerdeContext
): StartDBInstanceAutomatedBackupsReplicationResult => {
  const contents: any = {};
  if (output["DBInstanceAutomatedBackup"] !== undefined) {
    contents.DBInstanceAutomatedBackup = de_DBInstanceAutomatedBackup(output["DBInstanceAutomatedBackup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStartDBInstanceResult
 */
const de_StartDBInstanceResult = (output: any, context: __SerdeContext): StartDBInstanceResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStopActivityStreamResponse
 */
const de_StopActivityStreamResponse = (output: any, context: __SerdeContext): StopActivityStreamResponse => {
  const contents: any = {};
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["KinesisStreamName"] !== undefined) {
    contents.KinesisStreamName = __expectString(output["KinesisStreamName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
 * deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationResult
 */
const de_StopDBInstanceAutomatedBackupsReplicationResult = (
  output: any,
  context: __SerdeContext
): StopDBInstanceAutomatedBackupsReplicationResult => {
  const contents: any = {};
  if (output["DBInstanceAutomatedBackup"] !== undefined) {
    contents.DBInstanceAutomatedBackup = de_DBInstanceAutomatedBackup(output["DBInstanceAutomatedBackup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStopDBInstanceResult
 */
const de_StopDBInstanceResult = (output: any, context: __SerdeContext): StopDBInstanceResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
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
 * deserializeAws_queryStorageTypeNotAvailableFault
 */
const de_StorageTypeNotAvailableFault = (output: any, context: __SerdeContext): StorageTypeNotAvailableFault => {
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
  if (output["SubnetOutpost"] !== undefined) {
    contents.SubnetOutpost = de_Outpost(output["SubnetOutpost"], context);
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
 * deserializeAws_querySwitchoverBlueGreenDeploymentResponse
 */
const de_SwitchoverBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): SwitchoverBlueGreenDeploymentResponse => {
  const contents: any = {};
  if (output["BlueGreenDeployment"] !== undefined) {
    contents.BlueGreenDeployment = de_BlueGreenDeployment(output["BlueGreenDeployment"], context);
  }
  return contents;
};

/**
 * deserializeAws_querySwitchoverDetail
 */
const de_SwitchoverDetail = (output: any, context: __SerdeContext): SwitchoverDetail => {
  const contents: any = {};
  if (output["SourceMember"] !== undefined) {
    contents.SourceMember = __expectString(output["SourceMember"]);
  }
  if (output["TargetMember"] !== undefined) {
    contents.TargetMember = __expectString(output["TargetMember"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["GlobalCluster"] !== undefined) {
    contents.GlobalCluster = de_GlobalCluster(output["GlobalCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_querySwitchoverReadReplicaResult
 */
const de_SwitchoverReadReplicaResult = (output: any, context: __SerdeContext): SwitchoverReadReplicaResult => {
  const contents: any = {};
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = de_DBInstance(output["DBInstance"], context);
  }
  return contents;
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
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["Reason"] !== undefined) {
    contents.Reason = __expectString(output["Reason"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
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
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = de_EngineModeList(
      __getArrayIfSingleItem(output["SupportedEngineModes"]["member"]),
      context
    );
  }
  if (output["SupportsParallelQuery"] !== undefined) {
    contents.SupportsParallelQuery = __parseBoolean(output["SupportsParallelQuery"]);
  }
  if (output["SupportsGlobalDatabases"] !== undefined) {
    contents.SupportsGlobalDatabases = __parseBoolean(output["SupportsGlobalDatabases"]);
  }
  if (output["SupportsBabelfish"] !== undefined) {
    contents.SupportsBabelfish = __parseBoolean(output["SupportsBabelfish"]);
  }
  if (output["SupportsLocalWriteForwarding"] !== undefined) {
    contents.SupportsLocalWriteForwarding = __parseBoolean(output["SupportsLocalWriteForwarding"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUserAuthConfigInfo
 */
const de_UserAuthConfigInfo = (output: any, context: __SerdeContext): UserAuthConfigInfo => {
  const contents: any = {};
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["AuthScheme"] !== undefined) {
    contents.AuthScheme = __expectString(output["AuthScheme"]);
  }
  if (output["SecretArn"] !== undefined) {
    contents.SecretArn = __expectString(output["SecretArn"]);
  }
  if (output["IAMAuth"] !== undefined) {
    contents.IAMAuth = __expectString(output["IAMAuth"]);
  }
  if (output["ClientPasswordAuthType"] !== undefined) {
    contents.ClientPasswordAuthType = __expectString(output["ClientPasswordAuthType"]);
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
  if (output.Storage === "") {
    contents.Storage = [];
  } else if (output["Storage"] !== undefined && output["Storage"]["ValidStorageOptions"] !== undefined) {
    contents.Storage = de_ValidStorageOptionsList(
      __getArrayIfSingleItem(output["Storage"]["ValidStorageOptions"]),
      context
    );
  }
  if (output.ValidProcessorFeatures === "") {
    contents.ValidProcessorFeatures = [];
  } else if (
    output["ValidProcessorFeatures"] !== undefined &&
    output["ValidProcessorFeatures"]["AvailableProcessorFeature"] !== undefined
  ) {
    contents.ValidProcessorFeatures = de_AvailableProcessorFeatureList(
      __getArrayIfSingleItem(output["ValidProcessorFeatures"]["AvailableProcessorFeature"]),
      context
    );
  }
  if (output["SupportsDedicatedLogVolume"] !== undefined) {
    contents.SupportsDedicatedLogVolume = __parseBoolean(output["SupportsDedicatedLogVolume"]);
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
  if (output["SupportsStorageAutoscaling"] !== undefined) {
    contents.SupportsStorageAutoscaling = __parseBoolean(output["SupportsStorageAutoscaling"]);
  }
  if (output.ProvisionedStorageThroughput === "") {
    contents.ProvisionedStorageThroughput = [];
  } else if (
    output["ProvisionedStorageThroughput"] !== undefined &&
    output["ProvisionedStorageThroughput"]["Range"] !== undefined
  ) {
    contents.ProvisionedStorageThroughput = de_RangeList(
      __getArrayIfSingleItem(output["ProvisionedStorageThroughput"]["Range"]),
      context
    );
  }
  if (output.StorageThroughputToIopsRatio === "") {
    contents.StorageThroughputToIopsRatio = [];
  } else if (
    output["StorageThroughputToIopsRatio"] !== undefined &&
    output["StorageThroughputToIopsRatio"]["DoubleRange"] !== undefined
  ) {
    contents.StorageThroughputToIopsRatio = de_DoubleRangeList(
      __getArrayIfSingleItem(output["StorageThroughputToIopsRatio"]["DoubleRange"]),
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
