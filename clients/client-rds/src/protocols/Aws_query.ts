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
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeFloat as __serializeFloat,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
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
  DBInstanceAutomatedBackupMessage,
  DBInstanceAutomatedBackupNotFoundFault,
  DBInstanceAutomatedBackupQuotaExceededFault,
  DBInstanceAutomatedBackupsReplication,
  DBInstanceMessage,
  DBInstanceNotFoundFault,
  DBInstanceRole,
  DBInstanceRoleAlreadyExistsFault,
  DBInstanceRoleQuotaExceededFault,
  DBInstanceStatusInfo,
  DBParameterGroup,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupDetails,
  DBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault,
  DBParameterGroupsMessage,
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
  DescribeDBParameterGroupsMessage,
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
  DBInstanceRoleNotFoundFault,
  DBLogFileNotFoundFault,
  DBParameterGroupNameMessage,
  DBProxyTarget,
  DBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetGroup,
  DBSecurityGroupMessage,
  DBSnapshotAttribute,
  DBSnapshotAttributesResult,
  DBSnapshotMessage,
  DBSubnetGroupMessage,
  DBUpgradeDependencyFailureFault,
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
  SubnetAlreadyInUse,
  SwitchoverBlueGreenDeploymentRequest,
  SwitchoverBlueGreenDeploymentResponse,
  SwitchoverReadReplicaMessage,
  SwitchoverReadReplicaResult,
  TagListMessage,
  TargetHealth,
  ValidDBInstanceModificationsMessage,
  ValidStorageOptions,
} from "../models/models_1";
import { RDSServiceException as __BaseException } from "../models/RDSServiceException";

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

export const serializeAws_queryAddRoleToDBInstanceCommand = async (
  input: AddRoleToDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddRoleToDBInstanceMessage(input, context),
    Action: "AddRoleToDBInstance",
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

export const serializeAws_queryAuthorizeDBSecurityGroupIngressCommand = async (
  input: AuthorizeDBSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAuthorizeDBSecurityGroupIngressMessage(input, context),
    Action: "AuthorizeDBSecurityGroupIngress",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBacktrackDBClusterCommand = async (
  input: BacktrackDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBacktrackDBClusterMessage(input, context),
    Action: "BacktrackDBCluster",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCancelExportTaskCommand = async (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCancelExportTaskMessage(input, context),
    Action: "CancelExportTask",
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

export const serializeAws_queryCopyDBSnapshotCommand = async (
  input: CopyDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyDBSnapshotMessage(input, context),
    Action: "CopyDBSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopyOptionGroupCommand = async (
  input: CopyOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyOptionGroupMessage(input, context),
    Action: "CopyOptionGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateBlueGreenDeploymentCommand = async (
  input: CreateBlueGreenDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateBlueGreenDeploymentRequest(input, context),
    Action: "CreateBlueGreenDeployment",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateCustomDBEngineVersionCommand = async (
  input: CreateCustomDBEngineVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateCustomDBEngineVersionMessage(input, context),
    Action: "CreateCustomDBEngineVersion",
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

export const serializeAws_queryCreateDBInstanceReadReplicaCommand = async (
  input: CreateDBInstanceReadReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBInstanceReadReplicaMessage(input, context),
    Action: "CreateDBInstanceReadReplica",
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

export const serializeAws_queryCreateDBProxyCommand = async (
  input: CreateDBProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBProxyRequest(input, context),
    Action: "CreateDBProxy",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBProxyEndpointCommand = async (
  input: CreateDBProxyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBProxyEndpointRequest(input, context),
    Action: "CreateDBProxyEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBSecurityGroupCommand = async (
  input: CreateDBSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBSecurityGroupMessage(input, context),
    Action: "CreateDBSecurityGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDBSnapshotCommand = async (
  input: CreateDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDBSnapshotMessage(input, context),
    Action: "CreateDBSnapshot",
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

export const serializeAws_queryCreateOptionGroupCommand = async (
  input: CreateOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateOptionGroupMessage(input, context),
    Action: "CreateOptionGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteBlueGreenDeploymentCommand = async (
  input: DeleteBlueGreenDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteBlueGreenDeploymentRequest(input, context),
    Action: "DeleteBlueGreenDeployment",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteCustomDBEngineVersionCommand = async (
  input: DeleteCustomDBEngineVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteCustomDBEngineVersionMessage(input, context),
    Action: "DeleteCustomDBEngineVersion",
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

export const serializeAws_queryDeleteDBInstanceAutomatedBackupCommand = async (
  input: DeleteDBInstanceAutomatedBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBInstanceAutomatedBackupMessage(input, context),
    Action: "DeleteDBInstanceAutomatedBackup",
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

export const serializeAws_queryDeleteDBProxyCommand = async (
  input: DeleteDBProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBProxyRequest(input, context),
    Action: "DeleteDBProxy",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBProxyEndpointCommand = async (
  input: DeleteDBProxyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBProxyEndpointRequest(input, context),
    Action: "DeleteDBProxyEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBSecurityGroupCommand = async (
  input: DeleteDBSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBSecurityGroupMessage(input, context),
    Action: "DeleteDBSecurityGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDBSnapshotCommand = async (
  input: DeleteDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDBSnapshotMessage(input, context),
    Action: "DeleteDBSnapshot",
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

export const serializeAws_queryDeleteOptionGroupCommand = async (
  input: DeleteOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteOptionGroupMessage(input, context),
    Action: "DeleteOptionGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeregisterDBProxyTargetsCommand = async (
  input: DeregisterDBProxyTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeregisterDBProxyTargetsRequest(input, context),
    Action: "DeregisterDBProxyTargets",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAccountAttributesMessage(input, context),
    Action: "DescribeAccountAttributes",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeBlueGreenDeploymentsCommand = async (
  input: DescribeBlueGreenDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeBlueGreenDeploymentsRequest(input, context),
    Action: "DescribeBlueGreenDeployments",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeCertificatesCommand = async (
  input: DescribeCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeCertificatesMessage(input, context),
    Action: "DescribeCertificates",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBClusterBacktracksCommand = async (
  input: DescribeDBClusterBacktracksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBClusterBacktracksMessage(input, context),
    Action: "DescribeDBClusterBacktracks",
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

export const serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = async (
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBInstanceAutomatedBackupsMessage(input, context),
    Action: "DescribeDBInstanceAutomatedBackups",
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

export const serializeAws_queryDescribeDBLogFilesCommand = async (
  input: DescribeDBLogFilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBLogFilesMessage(input, context),
    Action: "DescribeDBLogFiles",
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

export const serializeAws_queryDescribeDBProxiesCommand = async (
  input: DescribeDBProxiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBProxiesRequest(input, context),
    Action: "DescribeDBProxies",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBProxyEndpointsCommand = async (
  input: DescribeDBProxyEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBProxyEndpointsRequest(input, context),
    Action: "DescribeDBProxyEndpoints",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBProxyTargetGroupsCommand = async (
  input: DescribeDBProxyTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBProxyTargetGroupsRequest(input, context),
    Action: "DescribeDBProxyTargetGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBProxyTargetsCommand = async (
  input: DescribeDBProxyTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBProxyTargetsRequest(input, context),
    Action: "DescribeDBProxyTargets",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBSecurityGroupsCommand = async (
  input: DescribeDBSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBSecurityGroupsMessage(input, context),
    Action: "DescribeDBSecurityGroups",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBSnapshotAttributesCommand = async (
  input: DescribeDBSnapshotAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBSnapshotAttributesMessage(input, context),
    Action: "DescribeDBSnapshotAttributes",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDBSnapshotsCommand = async (
  input: DescribeDBSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDBSnapshotsMessage(input, context),
    Action: "DescribeDBSnapshots",
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

export const serializeAws_queryDescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeExportTasksMessage(input, context),
    Action: "DescribeExportTasks",
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

export const serializeAws_queryDescribeOptionGroupOptionsCommand = async (
  input: DescribeOptionGroupOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeOptionGroupOptionsMessage(input, context),
    Action: "DescribeOptionGroupOptions",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeOptionGroupsCommand = async (
  input: DescribeOptionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeOptionGroupsMessage(input, context),
    Action: "DescribeOptionGroups",
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

export const serializeAws_queryDescribeReservedDBInstancesCommand = async (
  input: DescribeReservedDBInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReservedDBInstancesMessage(input, context),
    Action: "DescribeReservedDBInstances",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReservedDBInstancesOfferingsCommand = async (
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReservedDBInstancesOfferingsMessage(input, context),
    Action: "DescribeReservedDBInstancesOfferings",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeSourceRegionsCommand = async (
  input: DescribeSourceRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeSourceRegionsMessage(input, context),
    Action: "DescribeSourceRegions",
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

export const serializeAws_queryDownloadDBLogFilePortionCommand = async (
  input: DownloadDBLogFilePortionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDownloadDBLogFilePortionMessage(input, context),
    Action: "DownloadDBLogFilePortion",
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

export const serializeAws_queryModifyActivityStreamCommand = async (
  input: ModifyActivityStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyActivityStreamRequest(input, context),
    Action: "ModifyActivityStream",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyCertificatesCommand = async (
  input: ModifyCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyCertificatesMessage(input, context),
    Action: "ModifyCertificates",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyCurrentDBClusterCapacityCommand = async (
  input: ModifyCurrentDBClusterCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyCurrentDBClusterCapacityMessage(input, context),
    Action: "ModifyCurrentDBClusterCapacity",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyCustomDBEngineVersionCommand = async (
  input: ModifyCustomDBEngineVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyCustomDBEngineVersionMessage(input, context),
    Action: "ModifyCustomDBEngineVersion",
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

export const serializeAws_queryModifyDBProxyCommand = async (
  input: ModifyDBProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBProxyRequest(input, context),
    Action: "ModifyDBProxy",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBProxyEndpointCommand = async (
  input: ModifyDBProxyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBProxyEndpointRequest(input, context),
    Action: "ModifyDBProxyEndpoint",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBProxyTargetGroupCommand = async (
  input: ModifyDBProxyTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBProxyTargetGroupRequest(input, context),
    Action: "ModifyDBProxyTargetGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBSnapshotCommand = async (
  input: ModifyDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBSnapshotMessage(input, context),
    Action: "ModifyDBSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyDBSnapshotAttributeCommand = async (
  input: ModifyDBSnapshotAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyDBSnapshotAttributeMessage(input, context),
    Action: "ModifyDBSnapshotAttribute",
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

export const serializeAws_queryModifyOptionGroupCommand = async (
  input: ModifyOptionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyOptionGroupMessage(input, context),
    Action: "ModifyOptionGroup",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPromoteReadReplicaCommand = async (
  input: PromoteReadReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPromoteReadReplicaMessage(input, context),
    Action: "PromoteReadReplica",
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

export const serializeAws_queryPurchaseReservedDBInstancesOfferingCommand = async (
  input: PurchaseReservedDBInstancesOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPurchaseReservedDBInstancesOfferingMessage(input, context),
    Action: "PurchaseReservedDBInstancesOffering",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRebootDBClusterCommand = async (
  input: RebootDBClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRebootDBClusterMessage(input, context),
    Action: "RebootDBCluster",
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

export const serializeAws_queryRegisterDBProxyTargetsCommand = async (
  input: RegisterDBProxyTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRegisterDBProxyTargetsRequest(input, context),
    Action: "RegisterDBProxyTargets",
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

export const serializeAws_queryRemoveRoleFromDBInstanceCommand = async (
  input: RemoveRoleFromDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveRoleFromDBInstanceMessage(input, context),
    Action: "RemoveRoleFromDBInstance",
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

export const serializeAws_queryRestoreDBClusterFromS3Command = async (
  input: RestoreDBClusterFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBClusterFromS3Message(input, context),
    Action: "RestoreDBClusterFromS3",
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

export const serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = async (
  input: RestoreDBInstanceFromDBSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBInstanceFromDBSnapshotMessage(input, context),
    Action: "RestoreDBInstanceFromDBSnapshot",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreDBInstanceFromS3Command = async (
  input: RestoreDBInstanceFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBInstanceFromS3Message(input, context),
    Action: "RestoreDBInstanceFromS3",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreDBInstanceToPointInTimeCommand = async (
  input: RestoreDBInstanceToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreDBInstanceToPointInTimeMessage(input, context),
    Action: "RestoreDBInstanceToPointInTime",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRevokeDBSecurityGroupIngressCommand = async (
  input: RevokeDBSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRevokeDBSecurityGroupIngressMessage(input, context),
    Action: "RevokeDBSecurityGroupIngress",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartActivityStreamCommand = async (
  input: StartActivityStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartActivityStreamRequest(input, context),
    Action: "StartActivityStream",
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

export const serializeAws_queryStartDBInstanceCommand = async (
  input: StartDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartDBInstanceMessage(input, context),
    Action: "StartDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = async (
  input: StartDBInstanceAutomatedBackupsReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartDBInstanceAutomatedBackupsReplicationMessage(input, context),
    Action: "StartDBInstanceAutomatedBackupsReplication",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartExportTaskCommand = async (
  input: StartExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartExportTaskMessage(input, context),
    Action: "StartExportTask",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStopActivityStreamCommand = async (
  input: StopActivityStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopActivityStreamRequest(input, context),
    Action: "StopActivityStream",
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

export const serializeAws_queryStopDBInstanceCommand = async (
  input: StopDBInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopDBInstanceMessage(input, context),
    Action: "StopDBInstance",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = async (
  input: StopDBInstanceAutomatedBackupsReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopDBInstanceAutomatedBackupsReplicationMessage(input, context),
    Action: "StopDBInstanceAutomatedBackupsReplication",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySwitchoverBlueGreenDeploymentCommand = async (
  input: SwitchoverBlueGreenDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySwitchoverBlueGreenDeploymentRequest(input, context),
    Action: "SwitchoverBlueGreenDeployment",
    Version: "2014-10-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySwitchoverReadReplicaCommand = async (
  input: SwitchoverReadReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySwitchoverReadReplicaMessage(input, context),
    Action: "SwitchoverReadReplica",
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterRoleAlreadyExists":
    case "com.amazonaws.rds#DBClusterRoleAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterRoleQuotaExceeded":
    case "com.amazonaws.rds#DBClusterRoleQuotaExceededFault":
      throw await deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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

export const deserializeAws_queryAddRoleToDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddRoleToDBInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddRoleToDBInstanceCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceRoleAlreadyExists":
    case "com.amazonaws.rds#DBInstanceRoleAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceRoleAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBInstanceRoleQuotaExceeded":
    case "com.amazonaws.rds#DBInstanceRoleQuotaExceededFault":
      throw await deserializeAws_queryDBInstanceRoleQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#SourceNotFoundFault":
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await deserializeAws_queryBlueGreenDeploymentNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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

export const deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAuthorizeDBSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAuthorizeDBSecurityGroupIngressResult(
    data.AuthorizeDBSecurityGroupIngressResult,
    context
  );
  const response: AuthorizeDBSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAuthorizeDBSecurityGroupIngressCommandError = async (
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
      throw await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context);
    case "AuthorizationQuotaExceeded":
    case "com.amazonaws.rds#AuthorizationQuotaExceededFault":
      throw await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryBacktrackDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BacktrackDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBacktrackDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterBacktrack(data.BacktrackDBClusterResult, context);
  const response: BacktrackDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBacktrackDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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

export const deserializeAws_queryCancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCancelExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryExportTask(data.CancelExportTaskResult, context);
  const response: CancelExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCancelExportTaskCommandError = async (
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
      throw await deserializeAws_queryExportTaskNotFoundFaultResponse(parsedOutput, context);
    case "InvalidExportTaskStateFault":
    case "com.amazonaws.rds#InvalidExportTaskStateFault":
      throw await deserializeAws_queryInvalidExportTaskStateFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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

export const deserializeAws_queryCopyDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCopyDBSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyDBSnapshotResult(data.CopyDBSnapshotResult, context);
  const response: CopyDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyDBSnapshotCommandError = async (
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
      throw await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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

export const deserializeAws_queryCopyOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCopyOptionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyOptionGroupResult(data.CopyOptionGroupResult, context);
  const response: CopyOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyOptionGroupCommandError = async (
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
      throw await deserializeAws_queryOptionGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "OptionGroupQuotaExceededFault":
    case "com.amazonaws.rds#OptionGroupQuotaExceededFault":
      throw await deserializeAws_queryOptionGroupQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateBlueGreenDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateBlueGreenDeploymentResponse(data.CreateBlueGreenDeploymentResult, context);
  const response: CreateBlueGreenDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateBlueGreenDeploymentCommandError = async (
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
      throw await deserializeAws_queryBlueGreenDeploymentAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "SourceClusterNotSupportedFault":
    case "com.amazonaws.rds#SourceClusterNotSupportedFault":
      throw await deserializeAws_querySourceClusterNotSupportedFaultResponse(parsedOutput, context);
    case "SourceDatabaseNotSupportedFault":
    case "com.amazonaws.rds#SourceDatabaseNotSupportedFault":
      throw await deserializeAws_querySourceDatabaseNotSupportedFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateCustomDBEngineVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBEngineVersion(data.CreateCustomDBEngineVersionResult, context);
  const response: CreateCustomDBEngineVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateCustomDBEngineVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDBEngineVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomDBEngineVersionAlreadyExistsFault":
    case "com.amazonaws.rds#CustomDBEngineVersionAlreadyExistsFault":
      throw await deserializeAws_queryCustomDBEngineVersionAlreadyExistsFaultResponse(parsedOutput, context);
    case "CustomDBEngineVersionQuotaExceededFault":
    case "com.amazonaws.rds#CustomDBEngineVersionQuotaExceededFault":
      throw await deserializeAws_queryCustomDBEngineVersionQuotaExceededFaultResponse(parsedOutput, context);
    case "Ec2ImagePropertiesNotSupportedFault":
    case "com.amazonaws.rds#Ec2ImagePropertiesNotSupportedFault":
      throw await deserializeAws_queryEc2ImagePropertiesNotSupportedFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
      throw await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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
  contents = deserializeAws_queryDBClusterEndpoint(data.CreateDBClusterEndpointResult, context);
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
    case "com.amazonaws.rds#DBClusterEndpointAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterEndpointQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterEndpointQuotaExceededFault":
      throw await deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.rds#CertificateNotFoundFault":
      throw await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await deserializeAws_queryNetworkTypeNotSupportedResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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

export const deserializeAws_queryCreateDBInstanceReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBInstanceReadReplicaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBInstanceReadReplicaResult(data.CreateDBInstanceReadReplicaResult, context);
  const response: CreateDBInstanceReadReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBInstanceReadReplicaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBInstanceReadReplicaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotAllowedFault":
    case "com.amazonaws.rds#DBSubnetGroupNotAllowedFault":
      throw await deserializeAws_queryDBSubnetGroupNotAllowedFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await deserializeAws_queryNetworkTypeNotSupportedResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
    case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
      throw await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupQuotaExceeded":
    case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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

export const deserializeAws_queryCreateDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBProxyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBProxyResponse(data.CreateDBProxyResult, context);
  const response: CreateDBProxyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBProxyCommandError = async (
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
      throw await deserializeAws_queryDBProxyAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBProxyQuotaExceededFault":
    case "com.amazonaws.rds#DBProxyQuotaExceededFault":
      throw await deserializeAws_queryDBProxyQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
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

export const deserializeAws_queryCreateDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBProxyEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBProxyEndpointResponse(data.CreateDBProxyEndpointResult, context);
  const response: CreateDBProxyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBProxyEndpointCommandError = async (
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
      throw await deserializeAws_queryDBProxyEndpointAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBProxyEndpointQuotaExceededFault":
    case "com.amazonaws.rds#DBProxyEndpointQuotaExceededFault":
      throw await deserializeAws_queryDBProxyEndpointQuotaExceededFaultResponse(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
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

export const deserializeAws_queryCreateDBSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBSecurityGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBSecurityGroupResult(data.CreateDBSecurityGroupResult, context);
  const response: CreateDBSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBSecurityGroupCommandError = async (
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
      throw await deserializeAws_queryDBSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotSupported":
    case "com.amazonaws.rds#DBSecurityGroupNotSupportedFault":
      throw await deserializeAws_queryDBSecurityGroupNotSupportedFaultResponse(parsedOutput, context);
    case "QuotaExceeded.DBSecurityGroup":
    case "com.amazonaws.rds#DBSecurityGroupQuotaExceededFault":
      throw await deserializeAws_queryDBSecurityGroupQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDBSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDBSnapshotResult(data.CreateDBSnapshotResult, context);
  const response: CreateDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDBSnapshotCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#DBSubnetGroupAlreadyExistsFault":
      throw await deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupQuotaExceeded":
    case "com.amazonaws.rds#DBSubnetGroupQuotaExceededFault":
      throw await deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.rds#DBSubnetQuotaExceededFault":
      throw await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
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
    case "com.amazonaws.rds#EventSubscriptionQuotaExceededFault":
      throw await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.rds#SNSInvalidTopicFault":
      throw await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.rds#SNSNoAuthorizationFault":
      throw await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.rds#SNSTopicArnNotFoundFault":
      throw await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.rds#SourceNotFoundFault":
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.rds#SubscriptionAlreadyExistFault":
      throw await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.rds#SubscriptionCategoryNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterAlreadyExistsFault":
    case "com.amazonaws.rds#GlobalClusterAlreadyExistsFault":
      throw await deserializeAws_queryGlobalClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "GlobalClusterQuotaExceededFault":
    case "com.amazonaws.rds#GlobalClusterQuotaExceededFault":
      throw await deserializeAws_queryGlobalClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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

export const deserializeAws_queryCreateOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateOptionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateOptionGroupResult(data.CreateOptionGroupResult, context);
  const response: CreateOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateOptionGroupCommandError = async (
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
      throw await deserializeAws_queryOptionGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "OptionGroupQuotaExceededFault":
    case "com.amazonaws.rds#OptionGroupQuotaExceededFault":
      throw await deserializeAws_queryOptionGroupQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteBlueGreenDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteBlueGreenDeploymentResponse(data.DeleteBlueGreenDeploymentResult, context);
  const response: DeleteBlueGreenDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteBlueGreenDeploymentCommandError = async (
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
      throw await deserializeAws_queryBlueGreenDeploymentNotFoundFaultResponse(parsedOutput, context);
    case "InvalidBlueGreenDeploymentStateFault":
    case "com.amazonaws.rds#InvalidBlueGreenDeploymentStateFault":
      throw await deserializeAws_queryInvalidBlueGreenDeploymentStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteCustomDBEngineVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBEngineVersion(data.DeleteCustomDBEngineVersionResult, context);
  const response: DeleteCustomDBEngineVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteCustomDBEngineVersionCommandError = async (
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
      throw await deserializeAws_queryCustomDBEngineVersionNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCustomDBEngineVersionStateFault":
    case "com.amazonaws.rds#InvalidCustomDBEngineVersionStateFault":
      throw await deserializeAws_queryInvalidCustomDBEngineVersionStateFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotAlreadyExistsFault":
    case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
  contents = deserializeAws_queryDBClusterEndpoint(data.DeleteDBClusterEndpointResult, context);
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
    case "com.amazonaws.rds#DBClusterEndpointNotFoundFault":
      throw await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBClusterEndpointStateFault":
      throw await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
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
    case "DBInstanceAutomatedBackupQuotaExceeded":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupQuotaExceededFault":
      throw await deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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

export const deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBInstanceAutomatedBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBInstanceAutomatedBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBInstanceAutomatedBackupResult(
    data.DeleteDBInstanceAutomatedBackupResult,
    context
  );
  const response: DeleteDBInstanceAutomatedBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBInstanceAutomatedBackupCommandError = async (
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
      throw await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceAutomatedBackupState":
    case "com.amazonaws.rds#InvalidDBInstanceAutomatedBackupStateFault":
      throw await deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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

export const deserializeAws_queryDeleteDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBProxyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBProxyResponse(data.DeleteDBProxyResult, context);
  const response: DeleteDBProxyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBProxyCommandError = async (
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
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBProxyEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBProxyEndpointResponse(data.DeleteDBProxyEndpointResult, context);
  const response: DeleteDBProxyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBProxyEndpointCommandError = async (
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
      throw await deserializeAws_queryDBProxyEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBProxyEndpointStateFault":
      throw await deserializeAws_queryInvalidDBProxyEndpointStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBSecurityGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDBSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBSecurityGroupCommandError = async (
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
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDBSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDBSnapshotResult(data.DeleteDBSnapshotResult, context);
  const response: DeleteDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDBSnapshotCommandError = async (
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
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetStateFault":
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
    case "com.amazonaws.rds#InvalidEventSubscriptionStateFault":
      throw await deserializeAws_queryInvalidEventSubscriptionStateFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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

export const deserializeAws_queryDeleteOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteOptionGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteOptionGroupCommandError = async (
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
      throw await deserializeAws_queryInvalidOptionGroupStateFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDeregisterDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeregisterDBProxyTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeregisterDBProxyTargetsResponse(data.DeregisterDBProxyTargetsResult, context);
  const response: DeregisterDBProxyTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeregisterDBProxyTargetsCommandError = async (
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
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAccountAttributesMessage(data.DescribeAccountAttributesResult, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
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

export const deserializeAws_queryDescribeBlueGreenDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBlueGreenDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeBlueGreenDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeBlueGreenDeploymentsResponse(data.DescribeBlueGreenDeploymentsResult, context);
  const response: DescribeBlueGreenDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeBlueGreenDeploymentsCommandError = async (
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
      throw await deserializeAws_queryBlueGreenDeploymentNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCertificateMessage(data.DescribeCertificatesResult, context);
  const response: DescribeCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeCertificatesCommandError = async (
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
      throw await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBClusterBacktracksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBClusterBacktracksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBClusterBacktracksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterBacktrackMessage(data.DescribeDBClusterBacktracksResult, context);
  const response: DescribeDBClusterBacktracksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBClusterBacktracksCommandError = async (
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
      throw await deserializeAws_queryDBClusterBacktrackNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
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

export const deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBInstanceAutomatedBackupMessage(
    data.DescribeDBInstanceAutomatedBackupsResult,
    context
  );
  const response: DescribeDBInstanceAutomatedBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommandError = async (
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
      throw await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
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

export const deserializeAws_queryDescribeDBLogFilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBLogFilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBLogFilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBLogFilesResponse(data.DescribeDBLogFilesResult, context);
  const response: DescribeDBLogFilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBLogFilesCommandError = async (
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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

export const deserializeAws_queryDescribeDBProxiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBProxiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBProxiesResponse(data.DescribeDBProxiesResult, context);
  const response: DescribeDBProxiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBProxiesCommandError = async (
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
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBProxyEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBProxyEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBProxyEndpointsResponse(data.DescribeDBProxyEndpointsResult, context);
  const response: DescribeDBProxyEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBProxyEndpointsCommandError = async (
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
      throw await deserializeAws_queryDBProxyEndpointNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBProxyTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBProxyTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBProxyTargetGroupsResponse(data.DescribeDBProxyTargetGroupsResult, context);
  const response: DescribeDBProxyTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBProxyTargetGroupsCommandError = async (
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
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBProxyTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBProxyTargetsResponse(data.DescribeDBProxyTargetsResult, context);
  const response: DescribeDBProxyTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBProxyTargetsCommandError = async (
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
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBSecurityGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBSecurityGroupMessage(data.DescribeDBSecurityGroupsResult, context);
  const response: DescribeDBSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBSecurityGroupsCommandError = async (
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
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeDBSnapshotAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBSnapshotAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDBSnapshotAttributesResult(data.DescribeDBSnapshotAttributesResult, context);
  const response: DescribeDBSnapshotAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBSnapshotAttributesCommandError = async (
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

export const deserializeAws_queryDescribeDBSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDBSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDBSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBSnapshotMessage(data.DescribeDBSnapshotsResult, context);
  const response: DescribeDBSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDBSnapshotsCommandError = async (
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
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
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
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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

export const deserializeAws_queryDescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeExportTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryExportTasksMessage(data.DescribeExportTasksResult, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeExportTasksCommandError = async (
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
      throw await deserializeAws_queryExportTaskNotFoundFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
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

export const deserializeAws_queryDescribeOptionGroupOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeOptionGroupOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryOptionGroupOptionsMessage(data.DescribeOptionGroupOptionsResult, context);
  const response: DescribeOptionGroupOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeOptionGroupOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupOptionsCommandOutput> => {
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

export const deserializeAws_queryDescribeOptionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptionGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeOptionGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryOptionGroups(data.DescribeOptionGroupsResult, context);
  const response: DescribeOptionGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeOptionGroupsCommandError = async (
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
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#ResourceNotFoundFault":
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

export const deserializeAws_queryDescribeReservedDBInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReservedDBInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedDBInstanceMessage(data.DescribeReservedDBInstancesResult, context);
  const response: DescribeReservedDBInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReservedDBInstancesCommandError = async (
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
      throw await deserializeAws_queryReservedDBInstanceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReservedDBInstancesOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedDBInstancesOfferingMessage(
    data.DescribeReservedDBInstancesOfferingsResult,
    context
  );
  const response: DescribeReservedDBInstancesOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReservedDBInstancesOfferingsCommandError = async (
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
      throw await deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryDescribeSourceRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeSourceRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySourceRegionMessage(data.DescribeSourceRegionsResult, context);
  const response: DescribeSourceRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeSourceRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceRegionsCommandOutput> => {
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
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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

export const deserializeAws_queryDownloadDBLogFilePortionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDownloadDBLogFilePortionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDownloadDBLogFilePortionDetails(data.DownloadDBLogFilePortionResult, context);
  const response: DownloadDBLogFilePortionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDownloadDBLogFilePortionCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBLogFileNotFoundFault":
    case "com.amazonaws.rds#DBLogFileNotFoundFault":
      throw await deserializeAws_queryDBLogFileNotFoundFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await deserializeAws_queryBlueGreenDeploymentNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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

export const deserializeAws_queryModifyActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyActivityStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyActivityStreamResponse(data.ModifyActivityStreamResult, context);
  const response: ModifyActivityStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyActivityStreamCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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

export const deserializeAws_queryModifyCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyCertificatesResult(data.ModifyCertificatesResult, context);
  const response: ModifyCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyCertificatesCommandError = async (
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
      throw await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyCurrentDBClusterCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCurrentDBClusterCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyCurrentDBClusterCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBClusterCapacityInfo(data.ModifyCurrentDBClusterCapacityResult, context);
  const response: ModifyCurrentDBClusterCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyCurrentDBClusterCapacityCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterCapacityFault":
    case "com.amazonaws.rds#InvalidDBClusterCapacityFault":
      throw await deserializeAws_queryInvalidDBClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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

export const deserializeAws_queryModifyCustomDBEngineVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCustomDBEngineVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyCustomDBEngineVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDBEngineVersion(data.ModifyCustomDBEngineVersionResult, context);
  const response: ModifyCustomDBEngineVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyCustomDBEngineVersionCommandError = async (
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
      throw await deserializeAws_queryCustomDBEngineVersionNotFoundFaultResponse(parsedOutput, context);
    case "InvalidCustomDBEngineVersionStateFault":
    case "com.amazonaws.rds#InvalidCustomDBEngineVersionStateFault":
      throw await deserializeAws_queryInvalidCustomDBEngineVersionStateFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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
  contents = deserializeAws_queryDBClusterEndpoint(data.ModifyDBClusterEndpointResult, context);
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
    case "com.amazonaws.rds#DBClusterEndpointNotFoundFault":
      throw await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBClusterEndpointStateFault":
      throw await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.rds#SharedSnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#AuthorizationNotFoundFault":
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.rds#CertificateNotFoundFault":
      throw await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBUpgradeDependencyFailure":
    case "com.amazonaws.rds#DBUpgradeDependencyFailureFault":
      throw await deserializeAws_queryDBUpgradeDependencyFailureFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await deserializeAws_queryNetworkTypeNotSupportedResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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

export const deserializeAws_queryModifyDBProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBProxyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBProxyResponse(data.ModifyDBProxyResult, context);
  const response: ModifyDBProxyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBProxyCommandError = async (
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
      throw await deserializeAws_queryDBProxyAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBProxyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBProxyEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBProxyEndpointResponse(data.ModifyDBProxyEndpointResult, context);
  const response: ModifyDBProxyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBProxyEndpointCommandError = async (
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
      throw await deserializeAws_queryDBProxyEndpointAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBProxyEndpointNotFoundFault":
    case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
      throw await deserializeAws_queryDBProxyEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyEndpointStateFault":
    case "com.amazonaws.rds#InvalidDBProxyEndpointStateFault":
      throw await deserializeAws_queryInvalidDBProxyEndpointStateFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBProxyTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBProxyTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBProxyTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBProxyTargetGroupResponse(data.ModifyDBProxyTargetGroupResult, context);
  const response: ModifyDBProxyTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBProxyTargetGroupCommandError = async (
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
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryModifyDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBSnapshotResult(data.ModifyDBSnapshotResult, context);
  const response: ModifyDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBSnapshotCommandError = async (
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

export const deserializeAws_queryModifyDBSnapshotAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyDBSnapshotAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyDBSnapshotAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyDBSnapshotAttributeResult(data.ModifyDBSnapshotAttributeResult, context);
  const response: ModifyDBSnapshotAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyDBSnapshotAttributeCommandError = async (
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
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
    case "SharedSnapshotQuotaExceeded":
    case "com.amazonaws.rds#SharedSnapshotQuotaExceededFault":
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
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetQuotaExceededFault":
    case "com.amazonaws.rds#DBSubnetQuotaExceededFault":
      throw await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.rds#SubnetAlreadyInUse":
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
    case "com.amazonaws.rds#EventSubscriptionQuotaExceededFault":
      throw await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.rds#SNSInvalidTopicFault":
      throw await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.rds#SNSNoAuthorizationFault":
      throw await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.rds#SNSTopicArnNotFoundFault":
      throw await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.rds#SubscriptionCategoryNotFoundFault":
      throw await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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

export const deserializeAws_queryModifyOptionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyOptionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyOptionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyOptionGroupResult(data.ModifyOptionGroupResult, context);
  const response: ModifyOptionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyOptionGroupCommandError = async (
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
      throw await deserializeAws_queryInvalidOptionGroupStateFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryPromoteReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPromoteReadReplicaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPromoteReadReplicaResult(data.PromoteReadReplicaResult, context);
  const response: PromoteReadReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPromoteReadReplicaCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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

export const deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPurchaseReservedDBInstancesOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPurchaseReservedDBInstancesOfferingResult(
    data.PurchaseReservedDBInstancesOfferingResult,
    context
  );
  const response: PurchaseReservedDBInstancesOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPurchaseReservedDBInstancesOfferingCommandError = async (
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
      throw await deserializeAws_queryReservedDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ReservedDBInstanceQuotaExceeded":
    case "com.amazonaws.rds#ReservedDBInstanceQuotaExceededFault":
      throw await deserializeAws_queryReservedDBInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "ReservedDBInstancesOfferingNotFound":
    case "com.amazonaws.rds#ReservedDBInstancesOfferingNotFoundFault":
      throw await deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryRebootDBClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDBClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRebootDBClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRebootDBClusterResult(data.RebootDBClusterResult, context);
  const response: RebootDBClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRebootDBClusterCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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

export const deserializeAws_queryRegisterDBProxyTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDBProxyTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRegisterDBProxyTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterDBProxyTargetsResponse(data.RegisterDBProxyTargetsResult, context);
  const response: RegisterDBProxyTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRegisterDBProxyTargetsCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetAlreadyRegisteredFault":
    case "com.amazonaws.rds#DBProxyTargetAlreadyRegisteredFault":
      throw await deserializeAws_queryDBProxyTargetAlreadyRegisteredFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientAvailableIPsInSubnetFault":
    case "com.amazonaws.rds#InsufficientAvailableIPsInSubnetFault":
      throw await deserializeAws_queryInsufficientAvailableIPsInSubnetFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBProxyStateFault":
    case "com.amazonaws.rds#InvalidDBProxyStateFault":
      throw await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context);
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "GlobalClusterNotFoundFault":
    case "com.amazonaws.rds#GlobalClusterNotFoundFault":
      throw await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidGlobalClusterStateFault":
    case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterRoleNotFound":
    case "com.amazonaws.rds#DBClusterRoleNotFoundFault":
      throw await deserializeAws_queryDBClusterRoleNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
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

export const deserializeAws_queryRemoveRoleFromDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveRoleFromDBInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveRoleFromDBInstanceCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceRoleNotFound":
    case "com.amazonaws.rds#DBInstanceRoleNotFoundFault":
      throw await deserializeAws_queryDBInstanceRoleNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
    case "com.amazonaws.rds#SourceNotFoundFault":
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
    case "BlueGreenDeploymentNotFoundFault":
    case "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault":
      throw await deserializeAws_queryBlueGreenDeploymentNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyNotFoundFault":
    case "com.amazonaws.rds#DBProxyNotFoundFault":
      throw await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context);
    case "DBProxyTargetGroupNotFoundFault":
    case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
      throw await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBParameterGroupState":
    case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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

export const deserializeAws_queryRestoreDBClusterFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBClusterFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreDBClusterFromS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBClusterFromS3Result(data.RestoreDBClusterFromS3Result, context);
  const response: RestoreDBClusterFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBClusterFromS3CommandError = async (
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
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBSubnetGroupStateFault":
    case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidS3BucketFault":
    case "com.amazonaws.rds#InvalidS3BucketFault":
      throw await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.rds#InsufficientDBClusterCapacityFault":
      throw await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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
    case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
      throw await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterParameterGroupNotFound":
    case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterQuotaExceededFault":
    case "com.amazonaws.rds#DBClusterQuotaExceededFault":
      throw await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientDBClusterCapacityFault":
    case "com.amazonaws.rds#InsufficientDBClusterCapacityFault":
      throw await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context);
    case "InsufficientStorageClusterCapacity":
    case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
      throw await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterSnapshotStateFault":
    case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
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

export const deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult(
    data.RestoreDBInstanceFromDBSnapshotResult,
    context
  );
  const response: RestoreDBInstanceFromDBSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBSnapshotState":
    case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
      throw await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await deserializeAws_queryNetworkTypeNotSupportedResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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

export const deserializeAws_queryRestoreDBInstanceFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreDBInstanceFromS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBInstanceFromS3Result(data.RestoreDBInstanceFromS3Result, context);
  const response: RestoreDBInstanceFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBInstanceFromS3CommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidS3BucketFault":
    case "com.amazonaws.rds#InvalidS3BucketFault":
      throw await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await deserializeAws_queryNetworkTypeNotSupportedResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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

export const deserializeAws_queryRestoreDBInstanceToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDBInstanceToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreDBInstanceToPointInTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreDBInstanceToPointInTimeResult(
    data.RestoreDBInstanceToPointInTimeResult,
    context
  );
  const response: RestoreDBInstanceToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreDBInstanceToPointInTimeCommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "BackupPolicyNotFoundFault":
    case "com.amazonaws.rds#BackupPolicyNotFoundFault":
      throw await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceAlreadyExists":
    case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
      throw await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context);
    case "DBInstanceAutomatedBackupNotFound":
    case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
      throw await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBParameterGroupNotFound":
    case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
      throw await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DomainNotFoundFault":
    case "com.amazonaws.rds#DomainNotFoundFault":
      throw await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context);
    case "InstanceQuotaExceeded":
    case "com.amazonaws.rds#InstanceQuotaExceededFault":
      throw await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidRestoreFault":
    case "com.amazonaws.rds#InvalidRestoreFault":
      throw await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "NetworkTypeNotSupported":
    case "com.amazonaws.rds#NetworkTypeNotSupported":
      throw await deserializeAws_queryNetworkTypeNotSupportedResponse(parsedOutput, context);
    case "OptionGroupNotFoundFault":
    case "com.amazonaws.rds#OptionGroupNotFoundFault":
      throw await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context);
    case "PointInTimeRestoreNotEnabled":
    case "com.amazonaws.rds#PointInTimeRestoreNotEnabledFault":
      throw await deserializeAws_queryPointInTimeRestoreNotEnabledFaultResponse(parsedOutput, context);
    case "ProvisionedIopsNotAvailableInAZFault":
    case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
      throw await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context);
    case "StorageQuotaExceeded":
    case "com.amazonaws.rds#StorageQuotaExceededFault":
      throw await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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

export const deserializeAws_queryRevokeDBSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDBSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRevokeDBSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRevokeDBSecurityGroupIngressResult(data.RevokeDBSecurityGroupIngressResult, context);
  const response: RevokeDBSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRevokeDBSecurityGroupIngressCommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "DBSecurityGroupNotFound":
    case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
      throw await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBSecurityGroupState":
    case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryStartActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartActivityStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartActivityStreamResponse(data.StartActivityStreamResult, context);
  const response: StartActivityStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartActivityStreamCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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

export const deserializeAws_queryStartDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartDBInstanceResult(data.StartDBInstanceResult, context);
  const response: StartDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartDBInstanceCommandError = async (
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
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterNotFoundFault":
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "DBSubnetGroupNotFoundFault":
    case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
      throw await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientDBInstanceCapacity":
    case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
      throw await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.rds#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationResult(
    data.StartDBInstanceAutomatedBackupsReplicationResult,
    context
  );
  const response: StartDBInstanceAutomatedBackupsReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommandError = async (
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
      throw await deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "StorageTypeNotSupported":
    case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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

export const deserializeAws_queryStartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryExportTask(data.StartExportTaskResult, context);
  const response: StartExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartExportTaskCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBClusterSnapshotNotFoundFault":
    case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotNotFound":
    case "com.amazonaws.rds#DBSnapshotNotFoundFault":
      throw await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "ExportTaskAlreadyExists":
    case "com.amazonaws.rds#ExportTaskAlreadyExistsFault":
      throw await deserializeAws_queryExportTaskAlreadyExistsFaultResponse(parsedOutput, context);
    case "IamRoleMissingPermissions":
    case "com.amazonaws.rds#IamRoleMissingPermissionsFault":
      throw await deserializeAws_queryIamRoleMissingPermissionsFaultResponse(parsedOutput, context);
    case "IamRoleNotFound":
    case "com.amazonaws.rds#IamRoleNotFoundFault":
      throw await deserializeAws_queryIamRoleNotFoundFaultResponse(parsedOutput, context);
    case "InvalidExportOnly":
    case "com.amazonaws.rds#InvalidExportOnlyFault":
      throw await deserializeAws_queryInvalidExportOnlyFaultResponse(parsedOutput, context);
    case "InvalidExportSourceState":
    case "com.amazonaws.rds#InvalidExportSourceStateFault":
      throw await deserializeAws_queryInvalidExportSourceStateFaultResponse(parsedOutput, context);
    case "InvalidS3BucketFault":
    case "com.amazonaws.rds#InvalidS3BucketFault":
      throw await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
      throw await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context);
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

export const deserializeAws_queryStopActivityStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopActivityStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStopActivityStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopActivityStreamResponse(data.StopActivityStreamResult, context);
  const response: StopActivityStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStopActivityStreamCommandError = async (
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
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "DBInstanceNotFound":
    case "com.amazonaws.rds#DBInstanceNotFoundFault":
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.rds#ResourceNotFoundFault":
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
    case "com.amazonaws.rds#DBClusterNotFoundFault":
      throw await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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

export const deserializeAws_queryStopDBInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStopDBInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopDBInstanceResult(data.StopDBInstanceResult, context);
  const response: StopDBInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStopDBInstanceCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "DBSnapshotAlreadyExists":
    case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidDBClusterStateFault":
    case "com.amazonaws.rds#InvalidDBClusterStateFault":
      throw await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
      throw await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context);
    case "SnapshotQuotaExceeded":
    case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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

export const deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationResult(
    data.StopDBInstanceAutomatedBackupsReplicationResult,
    context
  );
  const response: StopDBInstanceAutomatedBackupsReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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

export const deserializeAws_querySwitchoverBlueGreenDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverBlueGreenDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySwitchoverBlueGreenDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySwitchoverBlueGreenDeploymentResponse(
    data.SwitchoverBlueGreenDeploymentResult,
    context
  );
  const response: SwitchoverBlueGreenDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySwitchoverBlueGreenDeploymentCommandError = async (
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
      throw await deserializeAws_queryBlueGreenDeploymentNotFoundFaultResponse(parsedOutput, context);
    case "InvalidBlueGreenDeploymentStateFault":
    case "com.amazonaws.rds#InvalidBlueGreenDeploymentStateFault":
      throw await deserializeAws_queryInvalidBlueGreenDeploymentStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_querySwitchoverReadReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwitchoverReadReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySwitchoverReadReplicaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySwitchoverReadReplicaResult(data.SwitchoverReadReplicaResult, context);
  const response: SwitchoverReadReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySwitchoverReadReplicaCommandError = async (
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
      throw await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context);
    case "InvalidDBInstanceState":
    case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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

const deserializeAws_queryAuthorizationAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationAlreadyExistsFault(body.Error, context);
  const exception = new AuthorizationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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

const deserializeAws_queryAuthorizationQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationQuotaExceededFault(body.Error, context);
  const exception = new AuthorizationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBackupPolicyNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupPolicyNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBackupPolicyNotFoundFault(body.Error, context);
  const exception = new BackupPolicyNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBlueGreenDeploymentAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlueGreenDeploymentAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBlueGreenDeploymentAlreadyExistsFault(body.Error, context);
  const exception = new BlueGreenDeploymentAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBlueGreenDeploymentNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlueGreenDeploymentNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBlueGreenDeploymentNotFoundFault(body.Error, context);
  const exception = new BlueGreenDeploymentNotFoundFault({
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

const deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomAvailabilityZoneNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomAvailabilityZoneNotFoundFault(body.Error, context);
  const exception = new CustomAvailabilityZoneNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCustomDBEngineVersionAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomDBEngineVersionAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomDBEngineVersionAlreadyExistsFault(body.Error, context);
  const exception = new CustomDBEngineVersionAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCustomDBEngineVersionNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomDBEngineVersionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomDBEngineVersionNotFoundFault(body.Error, context);
  const exception = new CustomDBEngineVersionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCustomDBEngineVersionQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomDBEngineVersionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomDBEngineVersionQuotaExceededFault(body.Error, context);
  const exception = new CustomDBEngineVersionQuotaExceededFault({
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

const deserializeAws_queryDBClusterBacktrackNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBClusterBacktrackNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBClusterBacktrackNotFoundFault(body.Error, context);
  const exception = new DBClusterBacktrackNotFoundFault({
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

const deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceAutomatedBackupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceAutomatedBackupNotFoundFault(body.Error, context);
  const exception = new DBInstanceAutomatedBackupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceAutomatedBackupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFault(body.Error, context);
  const exception = new DBInstanceAutomatedBackupQuotaExceededFault({
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

const deserializeAws_queryDBInstanceRoleAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceRoleAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceRoleAlreadyExistsFault(body.Error, context);
  const exception = new DBInstanceRoleAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBInstanceRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceRoleNotFoundFault(body.Error, context);
  const exception = new DBInstanceRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBInstanceRoleQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBInstanceRoleQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBInstanceRoleQuotaExceededFault(body.Error, context);
  const exception = new DBInstanceRoleQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBLogFileNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBLogFileNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBLogFileNotFoundFault(body.Error, context);
  const exception = new DBLogFileNotFoundFault({
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

const deserializeAws_queryDBProxyAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyAlreadyExistsFault(body.Error, context);
  const exception = new DBProxyAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyEndpointAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyEndpointAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyEndpointAlreadyExistsFault(body.Error, context);
  const exception = new DBProxyEndpointAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyEndpointNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyEndpointNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyEndpointNotFoundFault(body.Error, context);
  const exception = new DBProxyEndpointNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyEndpointQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyEndpointQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyEndpointQuotaExceededFault(body.Error, context);
  const exception = new DBProxyEndpointQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyNotFoundFault(body.Error, context);
  const exception = new DBProxyNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyQuotaExceededFault(body.Error, context);
  const exception = new DBProxyQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyTargetAlreadyRegisteredFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyTargetAlreadyRegisteredFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyTargetAlreadyRegisteredFault(body.Error, context);
  const exception = new DBProxyTargetAlreadyRegisteredFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyTargetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyTargetGroupNotFoundFault(body.Error, context);
  const exception = new DBProxyTargetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBProxyTargetNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBProxyTargetNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBProxyTargetNotFoundFault(body.Error, context);
  const exception = new DBProxyTargetNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSecurityGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSecurityGroupAlreadyExistsFault(body.Error, context);
  const exception = new DBSecurityGroupAlreadyExistsFault({
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

const deserializeAws_queryDBSecurityGroupNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSecurityGroupNotSupportedFault(body.Error, context);
  const exception = new DBSecurityGroupNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDBSecurityGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSecurityGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSecurityGroupQuotaExceededFault(body.Error, context);
  const exception = new DBSecurityGroupQuotaExceededFault({
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

const deserializeAws_queryDBSubnetGroupNotAllowedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DBSubnetGroupNotAllowedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDBSubnetGroupNotAllowedFault(body.Error, context);
  const exception = new DBSubnetGroupNotAllowedFault({
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

const deserializeAws_queryEc2ImagePropertiesNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<Ec2ImagePropertiesNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEc2ImagePropertiesNotSupportedFault(body.Error, context);
  const exception = new Ec2ImagePropertiesNotSupportedFault({
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

const deserializeAws_queryExportTaskAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportTaskAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryExportTaskAlreadyExistsFault(body.Error, context);
  const exception = new ExportTaskAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryExportTaskNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportTaskNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryExportTaskNotFoundFault(body.Error, context);
  const exception = new ExportTaskNotFoundFault({
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

const deserializeAws_queryIamRoleMissingPermissionsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamRoleMissingPermissionsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIamRoleMissingPermissionsFault(body.Error, context);
  const exception = new IamRoleMissingPermissionsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryIamRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIamRoleNotFoundFault(body.Error, context);
  const exception = new IamRoleNotFoundFault({
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

const deserializeAws_queryInsufficientAvailableIPsInSubnetFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientAvailableIPsInSubnetFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientAvailableIPsInSubnetFault(body.Error, context);
  const exception = new InsufficientAvailableIPsInSubnetFault({
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

const deserializeAws_queryInvalidBlueGreenDeploymentStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlueGreenDeploymentStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidBlueGreenDeploymentStateFault(body.Error, context);
  const exception = new InvalidBlueGreenDeploymentStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidCustomDBEngineVersionStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCustomDBEngineVersionStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCustomDBEngineVersionStateFault(body.Error, context);
  const exception = new InvalidCustomDBEngineVersionStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBClusterCapacityFault(body.Error, context);
  const exception = new InvalidDBClusterCapacityFault({
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

const deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBInstanceAutomatedBackupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault(body.Error, context);
  const exception = new InvalidDBInstanceAutomatedBackupStateFault({
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

const deserializeAws_queryInvalidDBProxyEndpointStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBProxyEndpointStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBProxyEndpointStateFault(body.Error, context);
  const exception = new InvalidDBProxyEndpointStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDBProxyStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBProxyStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBProxyStateFault(body.Error, context);
  const exception = new InvalidDBProxyStateFault({
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

const deserializeAws_queryInvalidDBSubnetGroupFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDBSubnetGroupFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDBSubnetGroupFault(body.Error, context);
  const exception = new InvalidDBSubnetGroupFault({
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

const deserializeAws_queryInvalidExportOnlyFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportOnlyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidExportOnlyFault(body.Error, context);
  const exception = new InvalidExportOnlyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidExportSourceStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportSourceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidExportSourceStateFault(body.Error, context);
  const exception = new InvalidExportSourceStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidExportTaskStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportTaskStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidExportTaskStateFault(body.Error, context);
  const exception = new InvalidExportTaskStateFault({
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

const deserializeAws_queryInvalidOptionGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOptionGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidOptionGroupStateFault(body.Error, context);
  const exception = new InvalidOptionGroupStateFault({
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

const deserializeAws_queryInvalidS3BucketFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidS3BucketFault(body.Error, context);
  const exception = new InvalidS3BucketFault({
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

const deserializeAws_queryNetworkTypeNotSupportedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NetworkTypeNotSupported> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNetworkTypeNotSupported(body.Error, context);
  const exception = new NetworkTypeNotSupported({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryOptionGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptionGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOptionGroupAlreadyExistsFault(body.Error, context);
  const exception = new OptionGroupAlreadyExistsFault({
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

const deserializeAws_queryOptionGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptionGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOptionGroupQuotaExceededFault(body.Error, context);
  const exception = new OptionGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPointInTimeRestoreNotEnabledFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PointInTimeRestoreNotEnabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPointInTimeRestoreNotEnabledFault(body.Error, context);
  const exception = new PointInTimeRestoreNotEnabledFault({
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

const deserializeAws_queryReservedDBInstanceAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstanceAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedDBInstanceAlreadyExistsFault(body.Error, context);
  const exception = new ReservedDBInstanceAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedDBInstanceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstanceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedDBInstanceNotFoundFault(body.Error, context);
  const exception = new ReservedDBInstanceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedDBInstanceQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstanceQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedDBInstanceQuotaExceededFault(body.Error, context);
  const exception = new ReservedDBInstanceQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedDBInstancesOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedDBInstancesOfferingNotFoundFault(body.Error, context);
  const exception = new ReservedDBInstancesOfferingNotFoundFault({
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

const deserializeAws_querySourceClusterNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceClusterNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySourceClusterNotSupportedFault(body.Error, context);
  const exception = new SourceClusterNotSupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySourceDatabaseNotSupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceDatabaseNotSupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySourceDatabaseNotSupportedFault(body.Error, context);
  const exception = new SourceDatabaseNotSupportedFault({
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

const serializeAws_queryAddRoleToDBInstanceMessage = (
  input: AddRoleToDBInstanceMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryAuthorizeDBSecurityGroupIngressMessage = (
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

const serializeAws_queryBacktrackDBClusterMessage = (
  input: BacktrackDBClusterMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryCancelExportTaskMessage = (input: CancelExportTaskMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExportTaskIdentifier != null) {
    entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
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

const serializeAws_queryConnectionPoolConfiguration = (
  input: ConnectionPoolConfiguration,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryStringList(input.SessionPinningFilters, context);
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

const serializeAws_queryCopyDBSnapshotMessage = (input: CopyDBSnapshotMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCopyOptionGroupMessage = (input: CopyOptionGroupMessage, context: __SerdeContext): any => {
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

const serializeAws_queryCreateBlueGreenDeploymentRequest = (
  input: CreateBlueGreenDeploymentRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_queryCreateCustomDBEngineVersionMessage = (
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.EngineMode != null) {
    entries["EngineMode"] = input.EngineMode;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
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
  if (input.NcharCharacterSetName != null) {
    entries["NcharCharacterSetName"] = input.NcharCharacterSetName;
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
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
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
  return entries;
};

const serializeAws_queryCreateDBInstanceReadReplicaMessage = (
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
    if (input.EnableCloudwatchLogsExports?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ProcessorFeatures != null) {
    const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
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

const serializeAws_queryCreateDBProxyEndpointRequest = (
  input: CreateDBProxyEndpointRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
  }
  if (input.VpcSubnetIds != null) {
    const memberEntries = serializeAws_queryStringList(input.VpcSubnetIds, context);
    if (input.VpcSubnetIds?.length === 0) {
      entries.VpcSubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryStringList(input.VpcSecurityGroupIds, context);
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

const serializeAws_queryCreateDBProxyRequest = (input: CreateDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.EngineFamily != null) {
    entries["EngineFamily"] = input.EngineFamily;
  }
  if (input.Auth != null) {
    const memberEntries = serializeAws_queryUserAuthConfigList(input.Auth, context);
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
    const memberEntries = serializeAws_queryStringList(input.VpcSubnetIds, context);
    if (input.VpcSubnetIds?.length === 0) {
      entries.VpcSubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryStringList(input.VpcSecurityGroupIds, context);
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

const serializeAws_queryCreateDBSecurityGroupMessage = (
  input: CreateDBSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
  }
  if (input.DBSecurityGroupDescription != null) {
    entries["DBSecurityGroupDescription"] = input.DBSecurityGroupDescription;
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

const serializeAws_queryCreateDBSnapshotMessage = (input: CreateDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
  }
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
  if (input.DatabaseName != null) {
    entries["DatabaseName"] = input.DatabaseName;
  }
  if (input.StorageEncrypted != null) {
    entries["StorageEncrypted"] = input.StorageEncrypted;
  }
  return entries;
};

const serializeAws_queryCreateOptionGroupMessage = (input: CreateOptionGroupMessage, context: __SerdeContext): any => {
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

const serializeAws_queryDeleteBlueGreenDeploymentRequest = (
  input: DeleteBlueGreenDeploymentRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.BlueGreenDeploymentIdentifier != null) {
    entries["BlueGreenDeploymentIdentifier"] = input.BlueGreenDeploymentIdentifier;
  }
  if (input.DeleteTarget != null) {
    entries["DeleteTarget"] = input.DeleteTarget;
  }
  return entries;
};

const serializeAws_queryDeleteCustomDBEngineVersionMessage = (
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

const serializeAws_queryDeleteDBInstanceAutomatedBackupMessage = (
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
  if (input.DeleteAutomatedBackups != null) {
    entries["DeleteAutomatedBackups"] = input.DeleteAutomatedBackups;
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

const serializeAws_queryDeleteDBProxyEndpointRequest = (
  input: DeleteDBProxyEndpointRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
  }
  return entries;
};

const serializeAws_queryDeleteDBProxyRequest = (input: DeleteDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  return entries;
};

const serializeAws_queryDeleteDBSecurityGroupMessage = (
  input: DeleteDBSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteDBSnapshotMessage = (input: DeleteDBSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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

const serializeAws_queryDeleteOptionGroupMessage = (input: DeleteOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  return entries;
};

const serializeAws_queryDeregisterDBProxyTargetsRequest = (
  input: DeregisterDBProxyTargetsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
  }
  if (input.DBInstanceIdentifiers != null) {
    const memberEntries = serializeAws_queryStringList(input.DBInstanceIdentifiers, context);
    if (input.DBInstanceIdentifiers?.length === 0) {
      entries.DBInstanceIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBInstanceIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterIdentifiers != null) {
    const memberEntries = serializeAws_queryStringList(input.DBClusterIdentifiers, context);
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

const serializeAws_queryDescribeAccountAttributesMessage = (
  input: DescribeAccountAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryDescribeBlueGreenDeploymentsRequest = (
  input: DescribeBlueGreenDeploymentsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.BlueGreenDeploymentIdentifier != null) {
    entries["BlueGreenDeploymentIdentifier"] = input.BlueGreenDeploymentIdentifier;
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

const serializeAws_queryDescribeCertificatesMessage = (
  input: DescribeCertificatesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateIdentifier != null) {
    entries["CertificateIdentifier"] = input.CertificateIdentifier;
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

const serializeAws_queryDescribeDBClusterBacktracksMessage = (
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
  if (input.IncludeShared != null) {
    entries["IncludeShared"] = input.IncludeShared;
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
  if (input.IncludeAll != null) {
    entries["IncludeAll"] = input.IncludeAll;
  }
  return entries;
};

const serializeAws_queryDescribeDBInstanceAutomatedBackupsMessage = (
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
  if (input.DBInstanceAutomatedBackupsArn != null) {
    entries["DBInstanceAutomatedBackupsArn"] = input.DBInstanceAutomatedBackupsArn;
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

const serializeAws_queryDescribeDBLogFilesMessage = (
  input: DescribeDBLogFilesMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeDBProxiesRequest = (input: DescribeDBProxiesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
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

const serializeAws_queryDescribeDBProxyEndpointsRequest = (
  input: DescribeDBProxyEndpointsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
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

const serializeAws_queryDescribeDBProxyTargetGroupsRequest = (
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

const serializeAws_queryDescribeDBProxyTargetsRequest = (
  input: DescribeDBProxyTargetsRequest,
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

const serializeAws_queryDescribeDBSecurityGroupsMessage = (
  input: DescribeDBSecurityGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSecurityGroupName != null) {
    entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
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

const serializeAws_queryDescribeDBSnapshotAttributesMessage = (
  input: DescribeDBSnapshotAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
  }
  return entries;
};

const serializeAws_queryDescribeDBSnapshotsMessage = (
  input: DescribeDBSnapshotsMessage,
  context: __SerdeContext
): any => {
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
  if (input.DbiResourceId != null) {
    entries["DbiResourceId"] = input.DbiResourceId;
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

const serializeAws_queryDescribeExportTasksMessage = (
  input: DescribeExportTasksMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ExportTaskIdentifier != null) {
    entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
  }
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
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
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
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

const serializeAws_queryDescribeOptionGroupOptionsMessage = (
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

const serializeAws_queryDescribeOptionGroupsMessage = (
  input: DescribeOptionGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
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
  if (input.EngineName != null) {
    entries["EngineName"] = input.EngineName;
  }
  if (input.MajorEngineVersion != null) {
    entries["MajorEngineVersion"] = input.MajorEngineVersion;
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
  if (input.AvailabilityZoneGroup != null) {
    entries["AvailabilityZoneGroup"] = input.AvailabilityZoneGroup;
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

const serializeAws_queryDescribeReservedDBInstancesMessage = (
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

const serializeAws_queryDescribeReservedDBInstancesOfferingsMessage = (
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

const serializeAws_queryDescribeSourceRegionsMessage = (
  input: DescribeSourceRegionsMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDownloadDBLogFilePortionMessage = (
  input: DownloadDBLogFilePortionMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryEngineModeList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryModifyActivityStreamRequest = (
  input: ModifyActivityStreamRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.AuditPolicyState != null) {
    entries["AuditPolicyState"] = input.AuditPolicyState;
  }
  return entries;
};

const serializeAws_queryModifyCertificatesMessage = (
  input: ModifyCertificatesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateIdentifier != null) {
    entries["CertificateIdentifier"] = input.CertificateIdentifier;
  }
  if (input.RemoveCustomerOverride != null) {
    entries["RemoveCustomerOverride"] = input.RemoveCustomerOverride;
  }
  return entries;
};

const serializeAws_queryModifyCurrentDBClusterCapacityMessage = (
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

const serializeAws_queryModifyCustomDBEngineVersionMessage = (
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
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
  if (input.PerformanceInsightsRetentionPeriod != null) {
    entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
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

const serializeAws_queryModifyDBProxyEndpointRequest = (
  input: ModifyDBProxyEndpointRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBProxyEndpointName != null) {
    entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
  }
  if (input.NewDBProxyEndpointName != null) {
    entries["NewDBProxyEndpointName"] = input.NewDBProxyEndpointName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryStringList(input.VpcSecurityGroupIds, context);
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

const serializeAws_queryModifyDBProxyRequest = (input: ModifyDBProxyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.NewDBProxyName != null) {
    entries["NewDBProxyName"] = input.NewDBProxyName;
  }
  if (input.Auth != null) {
    const memberEntries = serializeAws_queryUserAuthConfigList(input.Auth, context);
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
    const memberEntries = serializeAws_queryStringList(input.SecurityGroups, context);
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

const serializeAws_queryModifyDBProxyTargetGroupRequest = (
  input: ModifyDBProxyTargetGroupRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
  }
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.ConnectionPoolConfig != null) {
    const memberEntries = serializeAws_queryConnectionPoolConfiguration(input.ConnectionPoolConfig, context);
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

const serializeAws_queryModifyDBSnapshotAttributeMessage = (
  input: ModifyDBSnapshotAttributeMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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

const serializeAws_queryModifyDBSnapshotMessage = (input: ModifyDBSnapshotMessage, context: __SerdeContext): any => {
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

const serializeAws_queryModifyOptionGroupMessage = (input: ModifyOptionGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OptionGroupName != null) {
    entries["OptionGroupName"] = input.OptionGroupName;
  }
  if (input.OptionsToInclude != null) {
    const memberEntries = serializeAws_queryOptionConfigurationList(input.OptionsToInclude, context);
    if (input.OptionsToInclude?.length === 0) {
      entries.OptionsToInclude = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToInclude.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = serializeAws_queryOptionNamesList(input.OptionsToRemove, context);
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

const serializeAws_queryOptionConfiguration = (input: OptionConfiguration, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroupMemberships, context);
    if (input.DBSecurityGroupMemberships?.length === 0) {
      entries.DBSecurityGroupMemberships = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBSecurityGroupMemberships.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupMemberships != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupMemberships, context);
    if (input.VpcSecurityGroupMemberships?.length === 0) {
      entries.VpcSecurityGroupMemberships = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupMemberships.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionSettings != null) {
    const memberEntries = serializeAws_queryOptionSettingsList(input.OptionSettings, context);
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

const serializeAws_queryOptionConfigurationList = (input: OptionConfiguration[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryOptionConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`OptionConfiguration.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryOptionNamesList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryOptionSetting = (input: OptionSetting, context: __SerdeContext): any => {
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

const serializeAws_queryOptionSettingsList = (input: OptionSetting[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryOptionSetting(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`OptionSetting.${counter}.${key}`] = value;
    });
    counter++;
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
  if (input.SupportedEngineModes != null) {
    const memberEntries = serializeAws_queryEngineModeList(input.SupportedEngineModes, context);
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

const serializeAws_queryProcessorFeature = (input: ProcessorFeature, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryProcessorFeatureList = (input: ProcessorFeature[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryProcessorFeature(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ProcessorFeature.${counter}.${key}`] = value;
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

const serializeAws_queryPromoteReadReplicaMessage = (
  input: PromoteReadReplicaMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryPurchaseReservedDBInstancesOfferingMessage = (
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

const serializeAws_queryRebootDBClusterMessage = (input: RebootDBClusterMessage, context: __SerdeContext): any => {
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

const serializeAws_queryRegisterDBProxyTargetsRequest = (
  input: RegisterDBProxyTargetsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBProxyName != null) {
    entries["DBProxyName"] = input.DBProxyName;
  }
  if (input.TargetGroupName != null) {
    entries["TargetGroupName"] = input.TargetGroupName;
  }
  if (input.DBInstanceIdentifiers != null) {
    const memberEntries = serializeAws_queryStringList(input.DBInstanceIdentifiers, context);
    if (input.DBInstanceIdentifiers?.length === 0) {
      entries.DBInstanceIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DBInstanceIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DBClusterIdentifiers != null) {
    const memberEntries = serializeAws_queryStringList(input.DBClusterIdentifiers, context);
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

const serializeAws_queryRemoveRoleFromDBInstanceMessage = (
  input: RemoveRoleFromDBInstanceMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryRestoreDBClusterFromS3Message = (
  input: RestoreDBClusterFromS3Message,
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.EngineMode != null) {
    entries["EngineMode"] = input.EngineMode;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
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
  if (input.BacktrackWindow != null) {
    entries["BacktrackWindow"] = input.BacktrackWindow;
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  if (input.DomainIAMRoleName != null) {
    entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
  }
  if (input.ScalingConfiguration != null) {
    const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
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
    const memberEntries = serializeAws_queryServerlessV2ScalingConfiguration(
      input.ServerlessV2ScalingConfiguration,
      context
    );
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

const serializeAws_queryRestoreDBInstanceFromDBSnapshotMessage = (
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
    if (input.EnableCloudwatchLogsExports?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ProcessorFeatures != null) {
    const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
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
  return entries;
};

const serializeAws_queryRestoreDBInstanceFromS3Message = (
  input: RestoreDBInstanceFromS3Message,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
    if (input.EnableCloudwatchLogsExports?.length === 0) {
      entries.EnableCloudwatchLogsExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnableCloudwatchLogsExports.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ProcessorFeatures != null) {
    const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
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
  return entries;
};

const serializeAws_queryRestoreDBInstanceToPointInTimeMessage = (
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
  if (input.ProcessorFeatures != null) {
    const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
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
  return entries;
};

const serializeAws_queryRevokeDBSecurityGroupIngressMessage = (
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

const serializeAws_queryScalingConfiguration = (input: ScalingConfiguration, context: __SerdeContext): any => {
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

const serializeAws_queryStartActivityStreamRequest = (
  input: StartActivityStreamRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_queryStartDBClusterMessage = (input: StartDBClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBClusterIdentifier != null) {
    entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryStartDBInstanceAutomatedBackupsReplicationMessage = (
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

const serializeAws_queryStartDBInstanceMessage = (input: StartDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  return entries;
};

const serializeAws_queryStartExportTaskMessage = (input: StartExportTaskMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryStringList(input.ExportOnly, context);
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

const serializeAws_queryStopActivityStreamRequest = (
  input: StopActivityStreamRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.ApplyImmediately != null) {
    entries["ApplyImmediately"] = input.ApplyImmediately;
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

const serializeAws_queryStopDBInstanceAutomatedBackupsReplicationMessage = (
  input: StopDBInstanceAutomatedBackupsReplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceDBInstanceArn != null) {
    entries["SourceDBInstanceArn"] = input.SourceDBInstanceArn;
  }
  return entries;
};

const serializeAws_queryStopDBInstanceMessage = (input: StopDBInstanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
  }
  if (input.DBSnapshotIdentifier != null) {
    entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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

const serializeAws_querySwitchoverBlueGreenDeploymentRequest = (
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

const serializeAws_querySwitchoverReadReplicaMessage = (
  input: SwitchoverReadReplicaMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DBInstanceIdentifier != null) {
    entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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

const serializeAws_queryUserAuthConfig = (input: UserAuthConfig, context: __SerdeContext): any => {
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

const serializeAws_queryUserAuthConfigList = (input: UserAuthConfig[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryUserAuthConfig(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
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

const deserializeAws_queryAccountAttributesMessage = (
  output: any,
  context: __SerdeContext
): AccountAttributesMessage => {
  const contents: any = {
    AccountQuotas: undefined,
  };
  if (output.AccountQuotas === "") {
    contents.AccountQuotas = [];
  } else if (output["AccountQuotas"] !== undefined && output["AccountQuotas"]["AccountQuota"] !== undefined) {
    contents.AccountQuotas = deserializeAws_queryAccountQuotaList(
      __getArrayIfSingleItem(output["AccountQuotas"]["AccountQuota"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAccountQuota = (output: any, context: __SerdeContext): AccountQuota => {
  const contents: any = {
    AccountQuotaName: undefined,
    Used: undefined,
    Max: undefined,
  };
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

const deserializeAws_queryAccountQuotaList = (output: any, context: __SerdeContext): AccountQuota[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAccountQuota(entry, context);
    });
};

const deserializeAws_queryActivityStreamModeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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

const deserializeAws_queryAuthorizationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): AuthorizationAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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

const deserializeAws_queryAuthorizationQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): AuthorizationQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthorizeDBSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): AuthorizeDBSecurityGroupIngressResult => {
  const contents: any = {
    DBSecurityGroup: undefined,
  };
  if (output["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
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

const deserializeAws_queryAvailableProcessorFeature = (
  output: any,
  context: __SerdeContext
): AvailableProcessorFeature => {
  const contents: any = {
    Name: undefined,
    DefaultValue: undefined,
    AllowedValues: undefined,
  };
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

const deserializeAws_queryAvailableProcessorFeatureList = (
  output: any,
  context: __SerdeContext
): AvailableProcessorFeature[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAvailableProcessorFeature(entry, context);
    });
};

const deserializeAws_queryBackupPolicyNotFoundFault = (
  output: any,
  context: __SerdeContext
): BackupPolicyNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBlueGreenDeployment = (output: any, context: __SerdeContext): BlueGreenDeployment => {
  const contents: any = {
    BlueGreenDeploymentIdentifier: undefined,
    BlueGreenDeploymentName: undefined,
    Source: undefined,
    Target: undefined,
    SwitchoverDetails: undefined,
    Tasks: undefined,
    Status: undefined,
    StatusDetails: undefined,
    CreateTime: undefined,
    DeleteTime: undefined,
    TagList: undefined,
  };
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
    contents.SwitchoverDetails = deserializeAws_querySwitchoverDetailList(
      __getArrayIfSingleItem(output["SwitchoverDetails"]["member"]),
      context
    );
  }
  if (output.Tasks === "") {
    contents.Tasks = [];
  } else if (output["Tasks"] !== undefined && output["Tasks"]["member"] !== undefined) {
    contents.Tasks = deserializeAws_queryBlueGreenDeploymentTaskList(
      __getArrayIfSingleItem(output["Tasks"]["member"]),
      context
    );
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
    contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryBlueGreenDeploymentAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBlueGreenDeploymentList = (output: any, context: __SerdeContext): BlueGreenDeployment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryBlueGreenDeployment(entry, context);
    });
};

const deserializeAws_queryBlueGreenDeploymentNotFoundFault = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBlueGreenDeploymentTask = (output: any, context: __SerdeContext): BlueGreenDeploymentTask => {
  const contents: any = {
    Name: undefined,
    Status: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryBlueGreenDeploymentTaskList = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentTask[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryBlueGreenDeploymentTask(entry, context);
    });
};

const deserializeAws_queryCACertificateIdentifiersList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCertificate = (output: any, context: __SerdeContext): Certificate => {
  const contents: any = {
    CertificateIdentifier: undefined,
    CertificateType: undefined,
    Thumbprint: undefined,
    ValidFrom: undefined,
    ValidTill: undefined,
    CertificateArn: undefined,
    CustomerOverride: undefined,
    CustomerOverrideValidTill: undefined,
  };
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

const deserializeAws_queryCertificateDetails = (output: any, context: __SerdeContext): CertificateDetails => {
  const contents: any = {
    CAIdentifier: undefined,
    ValidTill: undefined,
  };
  if (output["CAIdentifier"] !== undefined) {
    contents.CAIdentifier = __expectString(output["CAIdentifier"]);
  }
  if (output["ValidTill"] !== undefined) {
    contents.ValidTill = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ValidTill"]));
  }
  return contents;
};

const deserializeAws_queryCertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCertificate(entry, context);
    });
};

const deserializeAws_queryCertificateMessage = (output: any, context: __SerdeContext): CertificateMessage => {
  const contents: any = {
    Certificates: undefined,
    Marker: undefined,
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["Certificate"] !== undefined) {
    contents.Certificates = deserializeAws_queryCertificateList(
      __getArrayIfSingleItem(output["Certificates"]["Certificate"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
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

const deserializeAws_queryClusterPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): ClusterPendingModifiedValues => {
  const contents: any = {
    PendingCloudwatchLogsExports: undefined,
    DBClusterIdentifier: undefined,
    MasterUserPassword: undefined,
    IAMDatabaseAuthenticationEnabled: undefined,
    EngineVersion: undefined,
    BackupRetentionPeriod: undefined,
    AllocatedStorage: undefined,
    Iops: undefined,
  };
  if (output["PendingCloudwatchLogsExports"] !== undefined) {
    contents.PendingCloudwatchLogsExports = deserializeAws_queryPendingCloudwatchLogsExports(
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
  return contents;
};

const deserializeAws_queryConnectionPoolConfigurationInfo = (
  output: any,
  context: __SerdeContext
): ConnectionPoolConfigurationInfo => {
  const contents: any = {
    MaxConnectionsPercent: undefined,
    MaxIdleConnectionsPercent: undefined,
    ConnectionBorrowTimeout: undefined,
    SessionPinningFilters: undefined,
    InitQuery: undefined,
  };
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
    contents.SessionPinningFilters = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["SessionPinningFilters"]["member"]),
      context
    );
  }
  if (output["InitQuery"] !== undefined) {
    contents.InitQuery = __expectString(output["InitQuery"]);
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

const deserializeAws_queryCopyDBSnapshotResult = (output: any, context: __SerdeContext): CopyDBSnapshotResult => {
  const contents: any = {
    DBSnapshot: undefined,
  };
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
  }
  return contents;
};

const deserializeAws_queryCopyOptionGroupResult = (output: any, context: __SerdeContext): CopyOptionGroupResult => {
  const contents: any = {
    OptionGroup: undefined,
  };
  if (output["OptionGroup"] !== undefined) {
    contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): CreateBlueGreenDeploymentResponse => {
  const contents: any = {
    BlueGreenDeployment: undefined,
  };
  if (output["BlueGreenDeployment"] !== undefined) {
    contents.BlueGreenDeployment = deserializeAws_queryBlueGreenDeployment(output["BlueGreenDeployment"], context);
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

const deserializeAws_queryCreateDBInstanceReadReplicaResult = (
  output: any,
  context: __SerdeContext
): CreateDBInstanceReadReplicaResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
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

const deserializeAws_queryCreateDBProxyEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateDBProxyEndpointResponse => {
  const contents: any = {
    DBProxyEndpoint: undefined,
  };
  if (output["DBProxyEndpoint"] !== undefined) {
    contents.DBProxyEndpoint = deserializeAws_queryDBProxyEndpoint(output["DBProxyEndpoint"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBProxyResponse = (output: any, context: __SerdeContext): CreateDBProxyResponse => {
  const contents: any = {
    DBProxy: undefined,
  };
  if (output["DBProxy"] !== undefined) {
    contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBSecurityGroupResult = (
  output: any,
  context: __SerdeContext
): CreateDBSecurityGroupResult => {
  const contents: any = {
    DBSecurityGroup: undefined,
  };
  if (output["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateDBSnapshotResult = (output: any, context: __SerdeContext): CreateDBSnapshotResult => {
  const contents: any = {
    DBSnapshot: undefined,
  };
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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

const deserializeAws_queryCreateOptionGroupResult = (output: any, context: __SerdeContext): CreateOptionGroupResult => {
  const contents: any = {
    OptionGroup: undefined,
  };
  if (output["OptionGroup"] !== undefined) {
    contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCustomAvailabilityZoneNotFoundFault = (
  output: any,
  context: __SerdeContext
): CustomAvailabilityZoneNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCustomDBEngineVersionAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): CustomDBEngineVersionAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCustomDBEngineVersionAMI = (
  output: any,
  context: __SerdeContext
): CustomDBEngineVersionAMI => {
  const contents: any = {
    ImageId: undefined,
    Status: undefined,
  };
  if (output["ImageId"] !== undefined) {
    contents.ImageId = __expectString(output["ImageId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryCustomDBEngineVersionNotFoundFault = (
  output: any,
  context: __SerdeContext
): CustomDBEngineVersionNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCustomDBEngineVersionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): CustomDBEngineVersionQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
    AutomaticRestartTime: undefined,
    PercentProgress: undefined,
    EarliestRestorableTime: undefined,
    Endpoint: undefined,
    ReaderEndpoint: undefined,
    CustomEndpoints: undefined,
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
    EarliestBacktrackTime: undefined,
    BacktrackWindow: undefined,
    BacktrackConsumedChangeRecords: undefined,
    EnabledCloudwatchLogsExports: undefined,
    Capacity: undefined,
    EngineMode: undefined,
    ScalingConfigurationInfo: undefined,
    DeletionProtection: undefined,
    HttpEndpointEnabled: undefined,
    ActivityStreamMode: undefined,
    ActivityStreamStatus: undefined,
    ActivityStreamKmsKeyId: undefined,
    ActivityStreamKinesisStreamName: undefined,
    CopyTagsToSnapshot: undefined,
    CrossAccountClone: undefined,
    DomainMemberships: undefined,
    TagList: undefined,
    GlobalWriteForwardingStatus: undefined,
    GlobalWriteForwardingRequested: undefined,
    PendingModifiedValues: undefined,
    DBClusterInstanceClass: undefined,
    StorageType: undefined,
    Iops: undefined,
    PubliclyAccessible: undefined,
    AutoMinorVersionUpgrade: undefined,
    MonitoringInterval: undefined,
    MonitoringRoleArn: undefined,
    PerformanceInsightsEnabled: undefined,
    PerformanceInsightsKMSKeyId: undefined,
    PerformanceInsightsRetentionPeriod: undefined,
    ServerlessV2ScalingConfiguration: undefined,
    NetworkType: undefined,
    DBSystemId: undefined,
    MasterUserSecret: undefined,
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
    contents.CustomEndpoints = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["CustomEndpoints"]["member"]),
      context
    );
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
    contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(
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
    contents.ScalingConfigurationInfo = deserializeAws_queryScalingConfigurationInfo(
      output["ScalingConfigurationInfo"],
      context
    );
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
    contents.DomainMemberships = deserializeAws_queryDomainMembershipList(
      __getArrayIfSingleItem(output["DomainMemberships"]["DomainMembership"]),
      context
    );
  }
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output["GlobalWriteForwardingStatus"] !== undefined) {
    contents.GlobalWriteForwardingStatus = __expectString(output["GlobalWriteForwardingStatus"]);
  }
  if (output["GlobalWriteForwardingRequested"] !== undefined) {
    contents.GlobalWriteForwardingRequested = __parseBoolean(output["GlobalWriteForwardingRequested"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = deserializeAws_queryClusterPendingModifiedValues(
      output["PendingModifiedValues"],
      context
    );
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
    contents.ServerlessV2ScalingConfiguration = deserializeAws_queryServerlessV2ScalingConfigurationInfo(
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
    contents.MasterUserSecret = deserializeAws_queryMasterUserSecret(output["MasterUserSecret"], context);
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

const deserializeAws_queryDBClusterBacktrack = (output: any, context: __SerdeContext): DBClusterBacktrack => {
  const contents: any = {
    DBClusterIdentifier: undefined,
    BacktrackIdentifier: undefined,
    BacktrackTo: undefined,
    BacktrackedFrom: undefined,
    BacktrackRequestCreationTime: undefined,
    Status: undefined,
  };
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

const deserializeAws_queryDBClusterBacktrackList = (output: any, context: __SerdeContext): DBClusterBacktrack[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBClusterBacktrack(entry, context);
    });
};

const deserializeAws_queryDBClusterBacktrackMessage = (
  output: any,
  context: __SerdeContext
): DBClusterBacktrackMessage => {
  const contents: any = {
    Marker: undefined,
    DBClusterBacktracks: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBClusterBacktracks === "") {
    contents.DBClusterBacktracks = [];
  } else if (
    output["DBClusterBacktracks"] !== undefined &&
    output["DBClusterBacktracks"]["DBClusterBacktrack"] !== undefined
  ) {
    contents.DBClusterBacktracks = deserializeAws_queryDBClusterBacktrackList(
      __getArrayIfSingleItem(output["DBClusterBacktracks"]["DBClusterBacktrack"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBClusterBacktrackNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBClusterBacktrackNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBClusterCapacityInfo = (output: any, context: __SerdeContext): DBClusterCapacityInfo => {
  const contents: any = {
    DBClusterIdentifier: undefined,
    PendingCapacity: undefined,
    CurrentCapacity: undefined,
    SecondsBeforeTimeout: undefined,
    TimeoutAction: undefined,
  };
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
    EngineMode: undefined,
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
    TagList: undefined,
    DBSystemId: undefined,
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
    contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output["DBSystemId"] !== undefined) {
    contents.DBSystemId = __expectString(output["DBSystemId"]);
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
    Image: undefined,
    DBEngineMediaType: undefined,
    SupportedCharacterSets: undefined,
    SupportedNcharCharacterSets: undefined,
    ValidUpgradeTarget: undefined,
    SupportedTimezones: undefined,
    ExportableLogTypes: undefined,
    SupportsLogExportsToCloudwatchLogs: undefined,
    SupportsReadReplica: undefined,
    SupportedEngineModes: undefined,
    SupportedFeatureNames: undefined,
    Status: undefined,
    SupportsParallelQuery: undefined,
    SupportsGlobalDatabases: undefined,
    MajorEngineVersion: undefined,
    DatabaseInstallationFilesS3BucketName: undefined,
    DatabaseInstallationFilesS3Prefix: undefined,
    DBEngineVersionArn: undefined,
    KMSKeyId: undefined,
    CreateTime: undefined,
    TagList: undefined,
    SupportsBabelfish: undefined,
    CustomDBEngineVersionManifest: undefined,
    SupportsCertificateRotationWithoutRestart: undefined,
    SupportedCACertificateIdentifiers: undefined,
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
  if (output["Image"] !== undefined) {
    contents.Image = deserializeAws_queryCustomDBEngineVersionAMI(output["Image"], context);
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
    contents.SupportedCharacterSets = deserializeAws_querySupportedCharacterSetsList(
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
    contents.SupportedNcharCharacterSets = deserializeAws_querySupportedCharacterSetsList(
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
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = deserializeAws_queryEngineModeList(
      __getArrayIfSingleItem(output["SupportedEngineModes"]["member"]),
      context
    );
  }
  if (output.SupportedFeatureNames === "") {
    contents.SupportedFeatureNames = [];
  } else if (output["SupportedFeatureNames"] !== undefined && output["SupportedFeatureNames"]["member"] !== undefined) {
    contents.SupportedFeatureNames = deserializeAws_queryFeatureNameList(
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
    contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
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
    contents.SupportedCACertificateIdentifiers = deserializeAws_queryCACertificateIdentifiersList(
      __getArrayIfSingleItem(output["SupportedCACertificateIdentifiers"]["member"]),
      context
    );
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
    AutomaticRestartTime: undefined,
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
    ReplicaMode: undefined,
    LicenseModel: undefined,
    Iops: undefined,
    OptionGroupMemberships: undefined,
    CharacterSetName: undefined,
    NcharCharacterSetName: undefined,
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
    PerformanceInsightsRetentionPeriod: undefined,
    EnabledCloudwatchLogsExports: undefined,
    ProcessorFeatures: undefined,
    DeletionProtection: undefined,
    AssociatedRoles: undefined,
    ListenerEndpoint: undefined,
    MaxAllocatedStorage: undefined,
    TagList: undefined,
    DBInstanceAutomatedBackupsReplications: undefined,
    CustomerOwnedIpEnabled: undefined,
    AwsBackupRecoveryPointArn: undefined,
    ActivityStreamStatus: undefined,
    ActivityStreamKmsKeyId: undefined,
    ActivityStreamKinesisStreamName: undefined,
    ActivityStreamMode: undefined,
    ActivityStreamEngineNativeAuditFieldsIncluded: undefined,
    AutomationMode: undefined,
    ResumeFullAutomationModeTime: undefined,
    CustomIamInstanceProfile: undefined,
    BackupTarget: undefined,
    NetworkType: undefined,
    ActivityStreamPolicyStatus: undefined,
    StorageThroughput: undefined,
    DBSystemId: undefined,
    MasterUserSecret: undefined,
    CertificateDetails: undefined,
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
    contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
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
    contents.OptionGroupMemberships = deserializeAws_queryOptionGroupMembershipList(
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
    contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(
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
    contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(
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
    contents.AssociatedRoles = deserializeAws_queryDBInstanceRoles(
      __getArrayIfSingleItem(output["AssociatedRoles"]["DBInstanceRole"]),
      context
    );
  }
  if (output["ListenerEndpoint"] !== undefined) {
    contents.ListenerEndpoint = deserializeAws_queryEndpoint(output["ListenerEndpoint"], context);
  }
  if (output["MaxAllocatedStorage"] !== undefined) {
    contents.MaxAllocatedStorage = __strictParseInt32(output["MaxAllocatedStorage"]) as number;
  }
  if (output.TagList === "") {
    contents.TagList = [];
  } else if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
    contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
  }
  if (output.DBInstanceAutomatedBackupsReplications === "") {
    contents.DBInstanceAutomatedBackupsReplications = [];
  } else if (
    output["DBInstanceAutomatedBackupsReplications"] !== undefined &&
    output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"] !== undefined
  ) {
    contents.DBInstanceAutomatedBackupsReplications = deserializeAws_queryDBInstanceAutomatedBackupsReplicationList(
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
    contents.MasterUserSecret = deserializeAws_queryMasterUserSecret(output["MasterUserSecret"], context);
  }
  if (output["CertificateDetails"] !== undefined) {
    contents.CertificateDetails = deserializeAws_queryCertificateDetails(output["CertificateDetails"], context);
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

const deserializeAws_queryDBInstanceAutomatedBackup = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackup => {
  const contents: any = {
    DBInstanceArn: undefined,
    DbiResourceId: undefined,
    Region: undefined,
    DBInstanceIdentifier: undefined,
    RestoreWindow: undefined,
    AllocatedStorage: undefined,
    Status: undefined,
    Port: undefined,
    AvailabilityZone: undefined,
    VpcId: undefined,
    InstanceCreateTime: undefined,
    MasterUsername: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    LicenseModel: undefined,
    Iops: undefined,
    OptionGroupName: undefined,
    TdeCredentialArn: undefined,
    Encrypted: undefined,
    StorageType: undefined,
    KmsKeyId: undefined,
    Timezone: undefined,
    IAMDatabaseAuthenticationEnabled: undefined,
    BackupRetentionPeriod: undefined,
    DBInstanceAutomatedBackupsArn: undefined,
    DBInstanceAutomatedBackupsReplications: undefined,
    BackupTarget: undefined,
    StorageThroughput: undefined,
  };
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
    contents.RestoreWindow = deserializeAws_queryRestoreWindow(output["RestoreWindow"], context);
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
    contents.DBInstanceAutomatedBackupsReplications = deserializeAws_queryDBInstanceAutomatedBackupsReplicationList(
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
  return contents;
};

const deserializeAws_queryDBInstanceAutomatedBackupList = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBInstanceAutomatedBackup(entry, context);
    });
};

const deserializeAws_queryDBInstanceAutomatedBackupMessage = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupMessage => {
  const contents: any = {
    Marker: undefined,
    DBInstanceAutomatedBackups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBInstanceAutomatedBackups === "") {
    contents.DBInstanceAutomatedBackups = [];
  } else if (
    output["DBInstanceAutomatedBackups"] !== undefined &&
    output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"] !== undefined
  ) {
    contents.DBInstanceAutomatedBackups = deserializeAws_queryDBInstanceAutomatedBackupList(
      __getArrayIfSingleItem(output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBInstanceAutomatedBackupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceAutomatedBackupsReplication = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupsReplication => {
  const contents: any = {
    DBInstanceAutomatedBackupsArn: undefined,
  };
  if (output["DBInstanceAutomatedBackupsArn"] !== undefined) {
    contents.DBInstanceAutomatedBackupsArn = __expectString(output["DBInstanceAutomatedBackupsArn"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceAutomatedBackupsReplicationList = (
  output: any,
  context: __SerdeContext
): DBInstanceAutomatedBackupsReplication[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBInstanceAutomatedBackupsReplication(entry, context);
    });
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

const deserializeAws_queryDBInstanceRole = (output: any, context: __SerdeContext): DBInstanceRole => {
  const contents: any = {
    RoleArn: undefined,
    FeatureName: undefined,
    Status: undefined,
  };
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

const deserializeAws_queryDBInstanceRoleAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBInstanceRoleAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBInstanceRoleNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceRoleQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBInstanceRoleQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBInstanceRoles = (output: any, context: __SerdeContext): DBInstanceRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBInstanceRole(entry, context);
    });
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

const deserializeAws_queryDBLogFileNotFoundFault = (output: any, context: __SerdeContext): DBLogFileNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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

const deserializeAws_queryDBProxy = (output: any, context: __SerdeContext): DBProxy => {
  const contents: any = {
    DBProxyName: undefined,
    DBProxyArn: undefined,
    Status: undefined,
    EngineFamily: undefined,
    VpcId: undefined,
    VpcSecurityGroupIds: undefined,
    VpcSubnetIds: undefined,
    Auth: undefined,
    RoleArn: undefined,
    Endpoint: undefined,
    RequireTLS: undefined,
    IdleClientTimeout: undefined,
    DebugLogging: undefined,
    CreatedDate: undefined,
    UpdatedDate: undefined,
  };
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
    contents.VpcSecurityGroupIds = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["VpcSecurityGroupIds"]["member"]),
      context
    );
  }
  if (output.VpcSubnetIds === "") {
    contents.VpcSubnetIds = [];
  } else if (output["VpcSubnetIds"] !== undefined && output["VpcSubnetIds"]["member"] !== undefined) {
    contents.VpcSubnetIds = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["VpcSubnetIds"]["member"]),
      context
    );
  }
  if (output.Auth === "") {
    contents.Auth = [];
  } else if (output["Auth"] !== undefined && output["Auth"]["member"] !== undefined) {
    contents.Auth = deserializeAws_queryUserAuthConfigInfoList(
      __getArrayIfSingleItem(output["Auth"]["member"]),
      context
    );
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

const deserializeAws_queryDBProxyAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBProxyAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyEndpoint = (output: any, context: __SerdeContext): DBProxyEndpoint => {
  const contents: any = {
    DBProxyEndpointName: undefined,
    DBProxyEndpointArn: undefined,
    DBProxyName: undefined,
    Status: undefined,
    VpcId: undefined,
    VpcSecurityGroupIds: undefined,
    VpcSubnetIds: undefined,
    Endpoint: undefined,
    CreatedDate: undefined,
    TargetRole: undefined,
    IsDefault: undefined,
  };
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
    contents.VpcSecurityGroupIds = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["VpcSecurityGroupIds"]["member"]),
      context
    );
  }
  if (output.VpcSubnetIds === "") {
    contents.VpcSubnetIds = [];
  } else if (output["VpcSubnetIds"] !== undefined && output["VpcSubnetIds"]["member"] !== undefined) {
    contents.VpcSubnetIds = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["VpcSubnetIds"]["member"]),
      context
    );
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

const deserializeAws_queryDBProxyEndpointAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBProxyEndpointAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyEndpointList = (output: any, context: __SerdeContext): DBProxyEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBProxyEndpoint(entry, context);
    });
};

const deserializeAws_queryDBProxyEndpointNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBProxyEndpointNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyEndpointQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBProxyEndpointQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyList = (output: any, context: __SerdeContext): DBProxy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBProxy(entry, context);
    });
};

const deserializeAws_queryDBProxyNotFoundFault = (output: any, context: __SerdeContext): DBProxyNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBProxyQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyTarget = (output: any, context: __SerdeContext): DBProxyTarget => {
  const contents: any = {
    TargetArn: undefined,
    Endpoint: undefined,
    TrackedClusterId: undefined,
    RdsResourceId: undefined,
    Port: undefined,
    Type: undefined,
    Role: undefined,
    TargetHealth: undefined,
  };
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
    contents.TargetHealth = deserializeAws_queryTargetHealth(output["TargetHealth"], context);
  }
  return contents;
};

const deserializeAws_queryDBProxyTargetAlreadyRegisteredFault = (
  output: any,
  context: __SerdeContext
): DBProxyTargetAlreadyRegisteredFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyTargetGroup = (output: any, context: __SerdeContext): DBProxyTargetGroup => {
  const contents: any = {
    DBProxyName: undefined,
    TargetGroupName: undefined,
    TargetGroupArn: undefined,
    IsDefault: undefined,
    Status: undefined,
    ConnectionPoolConfig: undefined,
    CreatedDate: undefined,
    UpdatedDate: undefined,
  };
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
    contents.ConnectionPoolConfig = deserializeAws_queryConnectionPoolConfigurationInfo(
      output["ConnectionPoolConfig"],
      context
    );
  }
  if (output["CreatedDate"] !== undefined) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedDate"]));
  }
  if (output["UpdatedDate"] !== undefined) {
    contents.UpdatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdatedDate"]));
  }
  return contents;
};

const deserializeAws_queryDBProxyTargetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBProxyTargetGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBProxyTargetNotFoundFault = (
  output: any,
  context: __SerdeContext
): DBProxyTargetNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSecurityGroup = (output: any, context: __SerdeContext): DBSecurityGroup => {
  const contents: any = {
    OwnerId: undefined,
    DBSecurityGroupName: undefined,
    DBSecurityGroupDescription: undefined,
    VpcId: undefined,
    EC2SecurityGroups: undefined,
    IPRanges: undefined,
    DBSecurityGroupArn: undefined,
  };
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
    contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(
      __getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]),
      context
    );
  }
  if (output.IPRanges === "") {
    contents.IPRanges = [];
  } else if (output["IPRanges"] !== undefined && output["IPRanges"]["IPRange"] !== undefined) {
    contents.IPRanges = deserializeAws_queryIPRangeList(__getArrayIfSingleItem(output["IPRanges"]["IPRange"]), context);
  }
  if (output["DBSecurityGroupArn"] !== undefined) {
    contents.DBSecurityGroupArn = __expectString(output["DBSecurityGroupArn"]);
  }
  return contents;
};

const deserializeAws_queryDBSecurityGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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

const deserializeAws_queryDBSecurityGroupMessage = (output: any, context: __SerdeContext): DBSecurityGroupMessage => {
  const contents: any = {
    Marker: undefined,
    DBSecurityGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBSecurityGroups === "") {
    contents.DBSecurityGroups = [];
  } else if (output["DBSecurityGroups"] !== undefined && output["DBSecurityGroups"]["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroups = deserializeAws_queryDBSecurityGroups(
      __getArrayIfSingleItem(output["DBSecurityGroups"]["DBSecurityGroup"]),
      context
    );
  }
  return contents;
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

const deserializeAws_queryDBSecurityGroupNotSupportedFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupNotSupportedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSecurityGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): DBSecurityGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDBSecurityGroups = (output: any, context: __SerdeContext): DBSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBSecurityGroup(entry, context);
    });
};

const deserializeAws_queryDBSnapshot = (output: any, context: __SerdeContext): DBSnapshot => {
  const contents: any = {
    DBSnapshotIdentifier: undefined,
    DBInstanceIdentifier: undefined,
    SnapshotCreateTime: undefined,
    Engine: undefined,
    AllocatedStorage: undefined,
    Status: undefined,
    Port: undefined,
    AvailabilityZone: undefined,
    VpcId: undefined,
    InstanceCreateTime: undefined,
    MasterUsername: undefined,
    EngineVersion: undefined,
    LicenseModel: undefined,
    SnapshotType: undefined,
    Iops: undefined,
    OptionGroupName: undefined,
    PercentProgress: undefined,
    SourceRegion: undefined,
    SourceDBSnapshotIdentifier: undefined,
    StorageType: undefined,
    TdeCredentialArn: undefined,
    Encrypted: undefined,
    KmsKeyId: undefined,
    DBSnapshotArn: undefined,
    Timezone: undefined,
    IAMDatabaseAuthenticationEnabled: undefined,
    ProcessorFeatures: undefined,
    DbiResourceId: undefined,
    TagList: undefined,
    OriginalSnapshotCreateTime: undefined,
    SnapshotDatabaseTime: undefined,
    SnapshotTarget: undefined,
    StorageThroughput: undefined,
  };
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
    contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(
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
    contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
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

const deserializeAws_queryDBSnapshotAttribute = (output: any, context: __SerdeContext): DBSnapshotAttribute => {
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

const deserializeAws_queryDBSnapshotAttributeList = (output: any, context: __SerdeContext): DBSnapshotAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBSnapshotAttribute(entry, context);
    });
};

const deserializeAws_queryDBSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DBSnapshotAttributesResult => {
  const contents: any = {
    DBSnapshotIdentifier: undefined,
    DBSnapshotAttributes: undefined,
  };
  if (output["DBSnapshotIdentifier"] !== undefined) {
    contents.DBSnapshotIdentifier = __expectString(output["DBSnapshotIdentifier"]);
  }
  if (output.DBSnapshotAttributes === "") {
    contents.DBSnapshotAttributes = [];
  } else if (
    output["DBSnapshotAttributes"] !== undefined &&
    output["DBSnapshotAttributes"]["DBSnapshotAttribute"] !== undefined
  ) {
    contents.DBSnapshotAttributes = deserializeAws_queryDBSnapshotAttributeList(
      __getArrayIfSingleItem(output["DBSnapshotAttributes"]["DBSnapshotAttribute"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDBSnapshotList = (output: any, context: __SerdeContext): DBSnapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBSnapshot(entry, context);
    });
};

const deserializeAws_queryDBSnapshotMessage = (output: any, context: __SerdeContext): DBSnapshotMessage => {
  const contents: any = {
    Marker: undefined,
    DBSnapshots: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.DBSnapshots === "") {
    contents.DBSnapshots = [];
  } else if (output["DBSnapshots"] !== undefined && output["DBSnapshots"]["DBSnapshot"] !== undefined) {
    contents.DBSnapshots = deserializeAws_queryDBSnapshotList(
      __getArrayIfSingleItem(output["DBSnapshots"]["DBSnapshot"]),
      context
    );
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
    SupportedNetworkTypes: undefined,
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
  if (output.SupportedNetworkTypes === "") {
    contents.SupportedNetworkTypes = [];
  } else if (output["SupportedNetworkTypes"] !== undefined && output["SupportedNetworkTypes"]["member"] !== undefined) {
    contents.SupportedNetworkTypes = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["SupportedNetworkTypes"]["member"]),
      context
    );
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

const deserializeAws_queryDBSubnetGroupNotAllowedFault = (
  output: any,
  context: __SerdeContext
): DBSubnetGroupNotAllowedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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

const deserializeAws_queryDeleteBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): DeleteBlueGreenDeploymentResponse => {
  const contents: any = {
    BlueGreenDeployment: undefined,
  };
  if (output["BlueGreenDeployment"] !== undefined) {
    contents.BlueGreenDeployment = deserializeAws_queryBlueGreenDeployment(output["BlueGreenDeployment"], context);
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

const deserializeAws_queryDeleteDBInstanceAutomatedBackupResult = (
  output: any,
  context: __SerdeContext
): DeleteDBInstanceAutomatedBackupResult => {
  const contents: any = {
    DBInstanceAutomatedBackup: undefined,
  };
  if (output["DBInstanceAutomatedBackup"] !== undefined) {
    contents.DBInstanceAutomatedBackup = deserializeAws_queryDBInstanceAutomatedBackup(
      output["DBInstanceAutomatedBackup"],
      context
    );
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

const deserializeAws_queryDeleteDBProxyEndpointResponse = (
  output: any,
  context: __SerdeContext
): DeleteDBProxyEndpointResponse => {
  const contents: any = {
    DBProxyEndpoint: undefined,
  };
  if (output["DBProxyEndpoint"] !== undefined) {
    contents.DBProxyEndpoint = deserializeAws_queryDBProxyEndpoint(output["DBProxyEndpoint"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteDBProxyResponse = (output: any, context: __SerdeContext): DeleteDBProxyResponse => {
  const contents: any = {
    DBProxy: undefined,
  };
  if (output["DBProxy"] !== undefined) {
    contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteDBSnapshotResult = (output: any, context: __SerdeContext): DeleteDBSnapshotResult => {
  const contents: any = {
    DBSnapshot: undefined,
  };
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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

const deserializeAws_queryDeregisterDBProxyTargetsResponse = (
  output: any,
  context: __SerdeContext
): DeregisterDBProxyTargetsResponse => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDescribeBlueGreenDeploymentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBlueGreenDeploymentsResponse => {
  const contents: any = {
    BlueGreenDeployments: undefined,
    Marker: undefined,
  };
  if (output.BlueGreenDeployments === "") {
    contents.BlueGreenDeployments = [];
  } else if (output["BlueGreenDeployments"] !== undefined && output["BlueGreenDeployments"]["member"] !== undefined) {
    contents.BlueGreenDeployments = deserializeAws_queryBlueGreenDeploymentList(
      __getArrayIfSingleItem(output["BlueGreenDeployments"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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

const deserializeAws_queryDescribeDBLogFilesDetails = (
  output: any,
  context: __SerdeContext
): DescribeDBLogFilesDetails => {
  const contents: any = {
    LogFileName: undefined,
    LastWritten: undefined,
    Size: undefined,
  };
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

const deserializeAws_queryDescribeDBLogFilesList = (
  output: any,
  context: __SerdeContext
): DescribeDBLogFilesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDescribeDBLogFilesDetails(entry, context);
    });
};

const deserializeAws_queryDescribeDBLogFilesResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBLogFilesResponse => {
  const contents: any = {
    DescribeDBLogFiles: undefined,
    Marker: undefined,
  };
  if (output.DescribeDBLogFiles === "") {
    contents.DescribeDBLogFiles = [];
  } else if (
    output["DescribeDBLogFiles"] !== undefined &&
    output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"] !== undefined
  ) {
    contents.DescribeDBLogFiles = deserializeAws_queryDescribeDBLogFilesList(
      __getArrayIfSingleItem(output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDBProxiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBProxiesResponse => {
  const contents: any = {
    DBProxies: undefined,
    Marker: undefined,
  };
  if (output.DBProxies === "") {
    contents.DBProxies = [];
  } else if (output["DBProxies"] !== undefined && output["DBProxies"]["member"] !== undefined) {
    contents.DBProxies = deserializeAws_queryDBProxyList(
      __getArrayIfSingleItem(output["DBProxies"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDBProxyEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBProxyEndpointsResponse => {
  const contents: any = {
    DBProxyEndpoints: undefined,
    Marker: undefined,
  };
  if (output.DBProxyEndpoints === "") {
    contents.DBProxyEndpoints = [];
  } else if (output["DBProxyEndpoints"] !== undefined && output["DBProxyEndpoints"]["member"] !== undefined) {
    contents.DBProxyEndpoints = deserializeAws_queryDBProxyEndpointList(
      __getArrayIfSingleItem(output["DBProxyEndpoints"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDBProxyTargetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBProxyTargetGroupsResponse => {
  const contents: any = {
    TargetGroups: undefined,
    Marker: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = deserializeAws_queryTargetGroupList(
      __getArrayIfSingleItem(output["TargetGroups"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDBProxyTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDBProxyTargetsResponse => {
  const contents: any = {
    Targets: undefined,
    Marker: undefined,
  };
  if (output.Targets === "") {
    contents.Targets = [];
  } else if (output["Targets"] !== undefined && output["Targets"]["member"] !== undefined) {
    contents.Targets = deserializeAws_queryTargetList(__getArrayIfSingleItem(output["Targets"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDBSnapshotAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeDBSnapshotAttributesResult => {
  const contents: any = {
    DBSnapshotAttributesResult: undefined,
  };
  if (output["DBSnapshotAttributesResult"] !== undefined) {
    contents.DBSnapshotAttributesResult = deserializeAws_queryDBSnapshotAttributesResult(
      output["DBSnapshotAttributesResult"],
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

const deserializeAws_queryDownloadDBLogFilePortionDetails = (
  output: any,
  context: __SerdeContext
): DownloadDBLogFilePortionDetails => {
  const contents: any = {
    LogFileData: undefined,
    Marker: undefined,
    AdditionalDataPending: undefined,
  };
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

const deserializeAws_queryEc2ImagePropertiesNotSupportedFault = (
  output: any,
  context: __SerdeContext
): Ec2ImagePropertiesNotSupportedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {
    Status: undefined,
    EC2SecurityGroupName: undefined,
    EC2SecurityGroupId: undefined,
    EC2SecurityGroupOwnerId: undefined,
  };
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

const deserializeAws_queryEC2SecurityGroupList = (output: any, context: __SerdeContext): EC2SecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEC2SecurityGroup(entry, context);
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

const deserializeAws_queryEngineModeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
    contents.Date = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Date"]));
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

const deserializeAws_queryExportTask = (output: any, context: __SerdeContext): ExportTask => {
  const contents: any = {
    ExportTaskIdentifier: undefined,
    SourceArn: undefined,
    ExportOnly: undefined,
    SnapshotTime: undefined,
    TaskStartTime: undefined,
    TaskEndTime: undefined,
    S3Bucket: undefined,
    S3Prefix: undefined,
    IamRoleArn: undefined,
    KmsKeyId: undefined,
    Status: undefined,
    PercentProgress: undefined,
    TotalExtractedDataInGB: undefined,
    FailureCause: undefined,
    WarningMessage: undefined,
    SourceType: undefined,
  };
  if (output["ExportTaskIdentifier"] !== undefined) {
    contents.ExportTaskIdentifier = __expectString(output["ExportTaskIdentifier"]);
  }
  if (output["SourceArn"] !== undefined) {
    contents.SourceArn = __expectString(output["SourceArn"]);
  }
  if (output.ExportOnly === "") {
    contents.ExportOnly = [];
  } else if (output["ExportOnly"] !== undefined && output["ExportOnly"]["member"] !== undefined) {
    contents.ExportOnly = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["ExportOnly"]["member"]),
      context
    );
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

const deserializeAws_queryExportTaskAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ExportTaskAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryExportTaskNotFoundFault = (output: any, context: __SerdeContext): ExportTaskNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryExportTasksList = (output: any, context: __SerdeContext): ExportTask[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryExportTask(entry, context);
    });
};

const deserializeAws_queryExportTasksMessage = (output: any, context: __SerdeContext): ExportTasksMessage => {
  const contents: any = {
    Marker: undefined,
    ExportTasks: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ExportTasks === "") {
    contents.ExportTasks = [];
  } else if (output["ExportTasks"] !== undefined && output["ExportTasks"]["ExportTask"] !== undefined) {
    contents.ExportTasks = deserializeAws_queryExportTasksList(
      __getArrayIfSingleItem(output["ExportTasks"]["ExportTask"]),
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

const deserializeAws_queryFailoverState = (output: any, context: __SerdeContext): FailoverState => {
  const contents: any = {
    Status: undefined,
    FromDbClusterArn: undefined,
    ToDbClusterArn: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["FromDbClusterArn"] !== undefined) {
    contents.FromDbClusterArn = __expectString(output["FromDbClusterArn"]);
  }
  if (output["ToDbClusterArn"] !== undefined) {
    contents.ToDbClusterArn = __expectString(output["ToDbClusterArn"]);
  }
  return contents;
};

const deserializeAws_queryFeatureNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryGlobalCluster = (output: any, context: __SerdeContext): GlobalCluster => {
  const contents: any = {
    GlobalClusterIdentifier: undefined,
    GlobalClusterResourceId: undefined,
    GlobalClusterArn: undefined,
    Status: undefined,
    Engine: undefined,
    EngineVersion: undefined,
    DatabaseName: undefined,
    StorageEncrypted: undefined,
    DeletionProtection: undefined,
    GlobalClusterMembers: undefined,
    FailoverState: undefined,
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
    contents.GlobalClusterMembers = deserializeAws_queryGlobalClusterMemberList(
      __getArrayIfSingleItem(output["GlobalClusterMembers"]["GlobalClusterMember"]),
      context
    );
  }
  if (output["FailoverState"] !== undefined) {
    contents.FailoverState = deserializeAws_queryFailoverState(output["FailoverState"], context);
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
    GlobalWriteForwardingStatus: undefined,
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
  if (output["GlobalWriteForwardingStatus"] !== undefined) {
    contents.GlobalWriteForwardingStatus = __expectString(output["GlobalWriteForwardingStatus"]);
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

const deserializeAws_queryIamRoleMissingPermissionsFault = (
  output: any,
  context: __SerdeContext
): IamRoleMissingPermissionsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryIamRoleNotFoundFault = (output: any, context: __SerdeContext): IamRoleNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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

const deserializeAws_queryInsufficientAvailableIPsInSubnetFault = (
  output: any,
  context: __SerdeContext
): InsufficientAvailableIPsInSubnetFault => {
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

const deserializeAws_queryInvalidBlueGreenDeploymentStateFault = (
  output: any,
  context: __SerdeContext
): InvalidBlueGreenDeploymentStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidCustomDBEngineVersionStateFault = (
  output: any,
  context: __SerdeContext
): InvalidCustomDBEngineVersionStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InvalidDBClusterCapacityFault => {
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

const deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBInstanceAutomatedBackupStateFault => {
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

const deserializeAws_queryInvalidDBProxyEndpointStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBProxyEndpointStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDBProxyStateFault = (
  output: any,
  context: __SerdeContext
): InvalidDBProxyStateFault => {
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

const deserializeAws_queryInvalidDBSubnetGroupFault = (
  output: any,
  context: __SerdeContext
): InvalidDBSubnetGroupFault => {
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

const deserializeAws_queryInvalidExportOnlyFault = (output: any, context: __SerdeContext): InvalidExportOnlyFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidExportSourceStateFault = (
  output: any,
  context: __SerdeContext
): InvalidExportSourceStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidExportTaskStateFault = (
  output: any,
  context: __SerdeContext
): InvalidExportTaskStateFault => {
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

const deserializeAws_queryInvalidOptionGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidOptionGroupStateFault => {
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

const deserializeAws_queryInvalidS3BucketFault = (output: any, context: __SerdeContext): InvalidS3BucketFault => {
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

const deserializeAws_queryIPRange = (output: any, context: __SerdeContext): IPRange => {
  const contents: any = {
    Status: undefined,
    CIDRIP: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CIDRIP"] !== undefined) {
    contents.CIDRIP = __expectString(output["CIDRIP"]);
  }
  return contents;
};

const deserializeAws_queryIPRangeList = (output: any, context: __SerdeContext): IPRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryIPRange(entry, context);
    });
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

const deserializeAws_queryMasterUserSecret = (output: any, context: __SerdeContext): MasterUserSecret => {
  const contents: any = {
    SecretArn: undefined,
    SecretStatus: undefined,
    KmsKeyId: undefined,
  };
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

const deserializeAws_queryMinimumEngineVersionPerAllowedValue = (
  output: any,
  context: __SerdeContext
): MinimumEngineVersionPerAllowedValue => {
  const contents: any = {
    AllowedValue: undefined,
    MinimumEngineVersion: undefined,
  };
  if (output["AllowedValue"] !== undefined) {
    contents.AllowedValue = __expectString(output["AllowedValue"]);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
  }
  return contents;
};

const deserializeAws_queryMinimumEngineVersionPerAllowedValueList = (
  output: any,
  context: __SerdeContext
): MinimumEngineVersionPerAllowedValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryMinimumEngineVersionPerAllowedValue(entry, context);
    });
};

const deserializeAws_queryModifyActivityStreamResponse = (
  output: any,
  context: __SerdeContext
): ModifyActivityStreamResponse => {
  const contents: any = {
    KmsKeyId: undefined,
    KinesisStreamName: undefined,
    Status: undefined,
    Mode: undefined,
    EngineNativeAuditFieldsIncluded: undefined,
    PolicyStatus: undefined,
  };
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

const deserializeAws_queryModifyCertificatesResult = (
  output: any,
  context: __SerdeContext
): ModifyCertificatesResult => {
  const contents: any = {
    Certificate: undefined,
  };
  if (output["Certificate"] !== undefined) {
    contents.Certificate = deserializeAws_queryCertificate(output["Certificate"], context);
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

const deserializeAws_queryModifyDBProxyEndpointResponse = (
  output: any,
  context: __SerdeContext
): ModifyDBProxyEndpointResponse => {
  const contents: any = {
    DBProxyEndpoint: undefined,
  };
  if (output["DBProxyEndpoint"] !== undefined) {
    contents.DBProxyEndpoint = deserializeAws_queryDBProxyEndpoint(output["DBProxyEndpoint"], context);
  }
  return contents;
};

const deserializeAws_queryModifyDBProxyResponse = (output: any, context: __SerdeContext): ModifyDBProxyResponse => {
  const contents: any = {
    DBProxy: undefined,
  };
  if (output["DBProxy"] !== undefined) {
    contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
  }
  return contents;
};

const deserializeAws_queryModifyDBProxyTargetGroupResponse = (
  output: any,
  context: __SerdeContext
): ModifyDBProxyTargetGroupResponse => {
  const contents: any = {
    DBProxyTargetGroup: undefined,
  };
  if (output["DBProxyTargetGroup"] !== undefined) {
    contents.DBProxyTargetGroup = deserializeAws_queryDBProxyTargetGroup(output["DBProxyTargetGroup"], context);
  }
  return contents;
};

const deserializeAws_queryModifyDBSnapshotAttributeResult = (
  output: any,
  context: __SerdeContext
): ModifyDBSnapshotAttributeResult => {
  const contents: any = {
    DBSnapshotAttributesResult: undefined,
  };
  if (output["DBSnapshotAttributesResult"] !== undefined) {
    contents.DBSnapshotAttributesResult = deserializeAws_queryDBSnapshotAttributesResult(
      output["DBSnapshotAttributesResult"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyDBSnapshotResult = (output: any, context: __SerdeContext): ModifyDBSnapshotResult => {
  const contents: any = {
    DBSnapshot: undefined,
  };
  if (output["DBSnapshot"] !== undefined) {
    contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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

const deserializeAws_queryModifyOptionGroupResult = (output: any, context: __SerdeContext): ModifyOptionGroupResult => {
  const contents: any = {
    OptionGroup: undefined,
  };
  if (output["OptionGroup"] !== undefined) {
    contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
  }
  return contents;
};

const deserializeAws_queryNetworkTypeNotSupported = (output: any, context: __SerdeContext): NetworkTypeNotSupported => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryOption = (output: any, context: __SerdeContext): Option => {
  const contents: any = {
    OptionName: undefined,
    OptionDescription: undefined,
    Persistent: undefined,
    Permanent: undefined,
    Port: undefined,
    OptionVersion: undefined,
    OptionSettings: undefined,
    DBSecurityGroupMemberships: undefined,
    VpcSecurityGroupMemberships: undefined,
  };
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
    contents.OptionSettings = deserializeAws_queryOptionSettingConfigurationList(
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
    contents.DBSecurityGroupMemberships = deserializeAws_queryDBSecurityGroupMembershipList(
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
    contents.VpcSecurityGroupMemberships = deserializeAws_queryVpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryOptionGroup = (output: any, context: __SerdeContext): OptionGroup => {
  const contents: any = {
    OptionGroupName: undefined,
    OptionGroupDescription: undefined,
    EngineName: undefined,
    MajorEngineVersion: undefined,
    Options: undefined,
    AllowsVpcAndNonVpcInstanceMemberships: undefined,
    VpcId: undefined,
    OptionGroupArn: undefined,
    SourceOptionGroup: undefined,
    SourceAccountId: undefined,
    CopyTimestamp: undefined,
  };
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
    contents.Options = deserializeAws_queryOptionsList(__getArrayIfSingleItem(output["Options"]["Option"]), context);
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

const deserializeAws_queryOptionGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): OptionGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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

const deserializeAws_queryOptionGroupOption = (output: any, context: __SerdeContext): OptionGroupOption => {
  const contents: any = {
    Name: undefined,
    Description: undefined,
    EngineName: undefined,
    MajorEngineVersion: undefined,
    MinimumRequiredMinorEngineVersion: undefined,
    PortRequired: undefined,
    DefaultPort: undefined,
    OptionsDependedOn: undefined,
    OptionsConflictsWith: undefined,
    Persistent: undefined,
    Permanent: undefined,
    RequiresAutoMinorEngineVersionUpgrade: undefined,
    VpcOnly: undefined,
    SupportsOptionVersionDowngrade: undefined,
    OptionGroupOptionSettings: undefined,
    OptionGroupOptionVersions: undefined,
    CopyableCrossAccount: undefined,
  };
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
    contents.OptionsDependedOn = deserializeAws_queryOptionsDependedOn(
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
    contents.OptionsConflictsWith = deserializeAws_queryOptionsConflictsWith(
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
    contents.OptionGroupOptionSettings = deserializeAws_queryOptionGroupOptionSettingsList(
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
    contents.OptionGroupOptionVersions = deserializeAws_queryOptionGroupOptionVersionsList(
      __getArrayIfSingleItem(output["OptionGroupOptionVersions"]["OptionVersion"]),
      context
    );
  }
  if (output["CopyableCrossAccount"] !== undefined) {
    contents.CopyableCrossAccount = __parseBoolean(output["CopyableCrossAccount"]);
  }
  return contents;
};

const deserializeAws_queryOptionGroupOptionSetting = (
  output: any,
  context: __SerdeContext
): OptionGroupOptionSetting => {
  const contents: any = {
    SettingName: undefined,
    SettingDescription: undefined,
    DefaultValue: undefined,
    ApplyType: undefined,
    AllowedValues: undefined,
    IsModifiable: undefined,
    IsRequired: undefined,
    MinimumEngineVersionPerAllowedValue: undefined,
  };
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
    contents.MinimumEngineVersionPerAllowedValue = deserializeAws_queryMinimumEngineVersionPerAllowedValueList(
      __getArrayIfSingleItem(output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryOptionGroupOptionSettingsList = (
  output: any,
  context: __SerdeContext
): OptionGroupOptionSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOptionGroupOptionSetting(entry, context);
    });
};

const deserializeAws_queryOptionGroupOptionsList = (output: any, context: __SerdeContext): OptionGroupOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOptionGroupOption(entry, context);
    });
};

const deserializeAws_queryOptionGroupOptionsMessage = (
  output: any,
  context: __SerdeContext
): OptionGroupOptionsMessage => {
  const contents: any = {
    OptionGroupOptions: undefined,
    Marker: undefined,
  };
  if (output.OptionGroupOptions === "") {
    contents.OptionGroupOptions = [];
  } else if (
    output["OptionGroupOptions"] !== undefined &&
    output["OptionGroupOptions"]["OptionGroupOption"] !== undefined
  ) {
    contents.OptionGroupOptions = deserializeAws_queryOptionGroupOptionsList(
      __getArrayIfSingleItem(output["OptionGroupOptions"]["OptionGroupOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryOptionGroupOptionVersionsList = (output: any, context: __SerdeContext): OptionVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOptionVersion(entry, context);
    });
};

const deserializeAws_queryOptionGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): OptionGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryOptionGroups = (output: any, context: __SerdeContext): OptionGroups => {
  const contents: any = {
    OptionGroupsList: undefined,
    Marker: undefined,
  };
  if (output.OptionGroupsList === "") {
    contents.OptionGroupsList = [];
  } else if (output["OptionGroupsList"] !== undefined && output["OptionGroupsList"]["OptionGroup"] !== undefined) {
    contents.OptionGroupsList = deserializeAws_queryOptionGroupsList(
      __getArrayIfSingleItem(output["OptionGroupsList"]["OptionGroup"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryOptionGroupsList = (output: any, context: __SerdeContext): OptionGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOptionGroup(entry, context);
    });
};

const deserializeAws_queryOptionsConflictsWith = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryOptionsDependedOn = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryOptionSetting = (output: any, context: __SerdeContext): OptionSetting => {
  const contents: any = {
    Name: undefined,
    Value: undefined,
    DefaultValue: undefined,
    Description: undefined,
    ApplyType: undefined,
    DataType: undefined,
    AllowedValues: undefined,
    IsModifiable: undefined,
    IsCollection: undefined,
  };
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

const deserializeAws_queryOptionSettingConfigurationList = (output: any, context: __SerdeContext): OptionSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOptionSetting(entry, context);
    });
};

const deserializeAws_queryOptionsList = (output: any, context: __SerdeContext): Option[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOption(entry, context);
    });
};

const deserializeAws_queryOptionVersion = (output: any, context: __SerdeContext): OptionVersion => {
  const contents: any = {
    Version: undefined,
    IsDefault: undefined,
  };
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
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
    AvailabilityZoneGroup: undefined,
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
    AvailableProcessorFeatures: undefined,
    SupportedEngineModes: undefined,
    SupportsStorageAutoscaling: undefined,
    SupportsKerberosAuthentication: undefined,
    OutpostCapable: undefined,
    SupportedActivityStreamModes: undefined,
    SupportsGlobalDatabases: undefined,
    SupportsClusters: undefined,
    SupportedNetworkTypes: undefined,
    SupportsStorageThroughput: undefined,
    MinStorageThroughputPerDbInstance: undefined,
    MaxStorageThroughputPerDbInstance: undefined,
    MinStorageThroughputPerIops: undefined,
    MaxStorageThroughputPerIops: undefined,
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
  if (output["AvailabilityZoneGroup"] !== undefined) {
    contents.AvailabilityZoneGroup = __expectString(output["AvailabilityZoneGroup"]);
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
  if (output.AvailableProcessorFeatures === "") {
    contents.AvailableProcessorFeatures = [];
  } else if (
    output["AvailableProcessorFeatures"] !== undefined &&
    output["AvailableProcessorFeatures"]["AvailableProcessorFeature"] !== undefined
  ) {
    contents.AvailableProcessorFeatures = deserializeAws_queryAvailableProcessorFeatureList(
      __getArrayIfSingleItem(output["AvailableProcessorFeatures"]["AvailableProcessorFeature"]),
      context
    );
  }
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = deserializeAws_queryEngineModeList(
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
    contents.SupportedActivityStreamModes = deserializeAws_queryActivityStreamModeList(
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
    contents.SupportedNetworkTypes = deserializeAws_queryStringList(
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

const deserializeAws_queryOutpost = (output: any, context: __SerdeContext): Outpost => {
  const contents: any = {
    Arn: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
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
    SupportedEngineModes: undefined,
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
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = deserializeAws_queryEngineModeList(
      __getArrayIfSingleItem(output["SupportedEngineModes"]["member"]),
      context
    );
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
    ProcessorFeatures: undefined,
    IAMDatabaseAuthenticationEnabled: undefined,
    AutomationMode: undefined,
    ResumeFullAutomationModeTime: undefined,
    StorageThroughput: undefined,
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
  if (output.ProcessorFeatures === "") {
    contents.ProcessorFeatures = [];
  } else if (
    output["ProcessorFeatures"] !== undefined &&
    output["ProcessorFeatures"]["ProcessorFeature"] !== undefined
  ) {
    contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(
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
  return contents;
};

const deserializeAws_queryPointInTimeRestoreNotEnabledFault = (
  output: any,
  context: __SerdeContext
): PointInTimeRestoreNotEnabledFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryProcessorFeature = (output: any, context: __SerdeContext): ProcessorFeature => {
  const contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryProcessorFeatureList = (output: any, context: __SerdeContext): ProcessorFeature[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryProcessorFeature(entry, context);
    });
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

const deserializeAws_queryPromoteReadReplicaResult = (
  output: any,
  context: __SerdeContext
): PromoteReadReplicaResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
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

const deserializeAws_queryPurchaseReservedDBInstancesOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedDBInstancesOfferingResult => {
  const contents: any = {
    ReservedDBInstance: undefined,
  };
  if (output["ReservedDBInstance"] !== undefined) {
    contents.ReservedDBInstance = deserializeAws_queryReservedDBInstance(output["ReservedDBInstance"], context);
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

const deserializeAws_queryRebootDBClusterResult = (output: any, context: __SerdeContext): RebootDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
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

const deserializeAws_queryRecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {
    RecurringChargeAmount: undefined,
    RecurringChargeFrequency: undefined,
  };
  if (output["RecurringChargeAmount"] !== undefined) {
    contents.RecurringChargeAmount = __strictParseFloat(output["RecurringChargeAmount"]) as number;
  }
  if (output["RecurringChargeFrequency"] !== undefined) {
    contents.RecurringChargeFrequency = __expectString(output["RecurringChargeFrequency"]);
  }
  return contents;
};

const deserializeAws_queryRecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryRecurringCharge(entry, context);
    });
};

const deserializeAws_queryRegisterDBProxyTargetsResponse = (
  output: any,
  context: __SerdeContext
): RegisterDBProxyTargetsResponse => {
  const contents: any = {
    DBProxyTargets: undefined,
  };
  if (output.DBProxyTargets === "") {
    contents.DBProxyTargets = [];
  } else if (output["DBProxyTargets"] !== undefined && output["DBProxyTargets"]["member"] !== undefined) {
    contents.DBProxyTargets = deserializeAws_queryTargetList(
      __getArrayIfSingleItem(output["DBProxyTargets"]["member"]),
      context
    );
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

const deserializeAws_queryReservedDBInstance = (output: any, context: __SerdeContext): ReservedDBInstance => {
  const contents: any = {
    ReservedDBInstanceId: undefined,
    ReservedDBInstancesOfferingId: undefined,
    DBInstanceClass: undefined,
    StartTime: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    UsagePrice: undefined,
    CurrencyCode: undefined,
    DBInstanceCount: undefined,
    ProductDescription: undefined,
    OfferingType: undefined,
    MultiAZ: undefined,
    State: undefined,
    RecurringCharges: undefined,
    ReservedDBInstanceArn: undefined,
    LeaseId: undefined,
  };
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
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
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

const deserializeAws_queryReservedDBInstanceAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReservedDBInstanceAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedDBInstanceList = (output: any, context: __SerdeContext): ReservedDBInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedDBInstance(entry, context);
    });
};

const deserializeAws_queryReservedDBInstanceMessage = (
  output: any,
  context: __SerdeContext
): ReservedDBInstanceMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedDBInstances: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedDBInstances === "") {
    contents.ReservedDBInstances = [];
  } else if (
    output["ReservedDBInstances"] !== undefined &&
    output["ReservedDBInstances"]["ReservedDBInstance"] !== undefined
  ) {
    contents.ReservedDBInstances = deserializeAws_queryReservedDBInstanceList(
      __getArrayIfSingleItem(output["ReservedDBInstances"]["ReservedDBInstance"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedDBInstanceNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedDBInstanceNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedDBInstanceQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ReservedDBInstanceQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedDBInstancesOffering = (
  output: any,
  context: __SerdeContext
): ReservedDBInstancesOffering => {
  const contents: any = {
    ReservedDBInstancesOfferingId: undefined,
    DBInstanceClass: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    UsagePrice: undefined,
    CurrencyCode: undefined,
    ProductDescription: undefined,
    OfferingType: undefined,
    MultiAZ: undefined,
    RecurringCharges: undefined,
  };
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
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedDBInstancesOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedDBInstancesOffering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedDBInstancesOffering(entry, context);
    });
};

const deserializeAws_queryReservedDBInstancesOfferingMessage = (
  output: any,
  context: __SerdeContext
): ReservedDBInstancesOfferingMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedDBInstancesOfferings: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedDBInstancesOfferings === "") {
    contents.ReservedDBInstancesOfferings = [];
  } else if (
    output["ReservedDBInstancesOfferings"] !== undefined &&
    output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"] !== undefined
  ) {
    contents.ReservedDBInstancesOfferings = deserializeAws_queryReservedDBInstancesOfferingList(
      __getArrayIfSingleItem(output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedDBInstancesOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedDBInstancesOfferingNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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

const deserializeAws_queryRestoreDBClusterFromS3Result = (
  output: any,
  context: __SerdeContext
): RestoreDBClusterFromS3Result => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
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

const deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreDBInstanceFromDBSnapshotResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryRestoreDBInstanceFromS3Result = (
  output: any,
  context: __SerdeContext
): RestoreDBInstanceFromS3Result => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryRestoreDBInstanceToPointInTimeResult = (
  output: any,
  context: __SerdeContext
): RestoreDBInstanceToPointInTimeResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryRestoreWindow = (output: any, context: __SerdeContext): RestoreWindow => {
  const contents: any = {
    EarliestTime: undefined,
    LatestTime: undefined,
  };
  if (output["EarliestTime"] !== undefined) {
    contents.EarliestTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EarliestTime"]));
  }
  if (output["LatestTime"] !== undefined) {
    contents.LatestTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LatestTime"]));
  }
  return contents;
};

const deserializeAws_queryRevokeDBSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): RevokeDBSecurityGroupIngressResult => {
  const contents: any = {
    DBSecurityGroup: undefined,
  };
  if (output["DBSecurityGroup"] !== undefined) {
    contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_queryScalingConfigurationInfo = (
  output: any,
  context: __SerdeContext
): ScalingConfigurationInfo => {
  const contents: any = {
    MinCapacity: undefined,
    MaxCapacity: undefined,
    AutoPause: undefined,
    SecondsUntilAutoPause: undefined,
    TimeoutAction: undefined,
    SecondsBeforeTimeout: undefined,
  };
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

const deserializeAws_querySourceClusterNotSupportedFault = (
  output: any,
  context: __SerdeContext
): SourceClusterNotSupportedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySourceDatabaseNotSupportedFault = (
  output: any,
  context: __SerdeContext
): SourceDatabaseNotSupportedFault => {
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

const deserializeAws_querySourceRegion = (output: any, context: __SerdeContext): SourceRegion => {
  const contents: any = {
    RegionName: undefined,
    Endpoint: undefined,
    Status: undefined,
    SupportsDBInstanceAutomatedBackupsReplication: undefined,
  };
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

const deserializeAws_querySourceRegionList = (output: any, context: __SerdeContext): SourceRegion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySourceRegion(entry, context);
    });
};

const deserializeAws_querySourceRegionMessage = (output: any, context: __SerdeContext): SourceRegionMessage => {
  const contents: any = {
    Marker: undefined,
    SourceRegions: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.SourceRegions === "") {
    contents.SourceRegions = [];
  } else if (output["SourceRegions"] !== undefined && output["SourceRegions"]["SourceRegion"] !== undefined) {
    contents.SourceRegions = deserializeAws_querySourceRegionList(
      __getArrayIfSingleItem(output["SourceRegions"]["SourceRegion"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryStartActivityStreamResponse = (
  output: any,
  context: __SerdeContext
): StartActivityStreamResponse => {
  const contents: any = {
    KmsKeyId: undefined,
    KinesisStreamName: undefined,
    Status: undefined,
    Mode: undefined,
    ApplyImmediately: undefined,
    EngineNativeAuditFieldsIncluded: undefined,
  };
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

const deserializeAws_queryStartDBClusterResult = (output: any, context: __SerdeContext): StartDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationResult = (
  output: any,
  context: __SerdeContext
): StartDBInstanceAutomatedBackupsReplicationResult => {
  const contents: any = {
    DBInstanceAutomatedBackup: undefined,
  };
  if (output["DBInstanceAutomatedBackup"] !== undefined) {
    contents.DBInstanceAutomatedBackup = deserializeAws_queryDBInstanceAutomatedBackup(
      output["DBInstanceAutomatedBackup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryStartDBInstanceResult = (output: any, context: __SerdeContext): StartDBInstanceResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
};

const deserializeAws_queryStopActivityStreamResponse = (
  output: any,
  context: __SerdeContext
): StopActivityStreamResponse => {
  const contents: any = {
    KmsKeyId: undefined,
    KinesisStreamName: undefined,
    Status: undefined,
  };
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

const deserializeAws_queryStopDBClusterResult = (output: any, context: __SerdeContext): StopDBClusterResult => {
  const contents: any = {
    DBCluster: undefined,
  };
  if (output["DBCluster"] !== undefined) {
    contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
  }
  return contents;
};

const deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationResult = (
  output: any,
  context: __SerdeContext
): StopDBInstanceAutomatedBackupsReplicationResult => {
  const contents: any = {
    DBInstanceAutomatedBackup: undefined,
  };
  if (output["DBInstanceAutomatedBackup"] !== undefined) {
    contents.DBInstanceAutomatedBackup = deserializeAws_queryDBInstanceAutomatedBackup(
      output["DBInstanceAutomatedBackup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryStopDBInstanceResult = (output: any, context: __SerdeContext): StopDBInstanceResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
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
    SubnetOutpost: undefined,
    SubnetStatus: undefined,
  };
  if (output["SubnetIdentifier"] !== undefined) {
    contents.SubnetIdentifier = __expectString(output["SubnetIdentifier"]);
  }
  if (output["SubnetAvailabilityZone"] !== undefined) {
    contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
  }
  if (output["SubnetOutpost"] !== undefined) {
    contents.SubnetOutpost = deserializeAws_queryOutpost(output["SubnetOutpost"], context);
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

const deserializeAws_querySwitchoverBlueGreenDeploymentResponse = (
  output: any,
  context: __SerdeContext
): SwitchoverBlueGreenDeploymentResponse => {
  const contents: any = {
    BlueGreenDeployment: undefined,
  };
  if (output["BlueGreenDeployment"] !== undefined) {
    contents.BlueGreenDeployment = deserializeAws_queryBlueGreenDeployment(output["BlueGreenDeployment"], context);
  }
  return contents;
};

const deserializeAws_querySwitchoverDetail = (output: any, context: __SerdeContext): SwitchoverDetail => {
  const contents: any = {
    SourceMember: undefined,
    TargetMember: undefined,
    Status: undefined,
  };
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

const deserializeAws_querySwitchoverDetailList = (output: any, context: __SerdeContext): SwitchoverDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySwitchoverDetail(entry, context);
    });
};

const deserializeAws_querySwitchoverReadReplicaResult = (
  output: any,
  context: __SerdeContext
): SwitchoverReadReplicaResult => {
  const contents: any = {
    DBInstance: undefined,
  };
  if (output["DBInstance"] !== undefined) {
    contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
  }
  return contents;
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

const deserializeAws_queryTargetGroupList = (output: any, context: __SerdeContext): DBProxyTargetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBProxyTargetGroup(entry, context);
    });
};

const deserializeAws_queryTargetHealth = (output: any, context: __SerdeContext): TargetHealth => {
  const contents: any = {
    State: undefined,
    Reason: undefined,
    Description: undefined,
  };
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

const deserializeAws_queryTargetList = (output: any, context: __SerdeContext): DBProxyTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDBProxyTarget(entry, context);
    });
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
    SupportedEngineModes: undefined,
    SupportsParallelQuery: undefined,
    SupportsGlobalDatabases: undefined,
    SupportsBabelfish: undefined,
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
  if (output.SupportedEngineModes === "") {
    contents.SupportedEngineModes = [];
  } else if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
    contents.SupportedEngineModes = deserializeAws_queryEngineModeList(
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
  return contents;
};

const deserializeAws_queryUserAuthConfigInfo = (output: any, context: __SerdeContext): UserAuthConfigInfo => {
  const contents: any = {
    Description: undefined,
    UserName: undefined,
    AuthScheme: undefined,
    SecretArn: undefined,
    IAMAuth: undefined,
    ClientPasswordAuthType: undefined,
  };
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

const deserializeAws_queryUserAuthConfigInfoList = (output: any, context: __SerdeContext): UserAuthConfigInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUserAuthConfigInfo(entry, context);
    });
};

const deserializeAws_queryValidDBInstanceModificationsMessage = (
  output: any,
  context: __SerdeContext
): ValidDBInstanceModificationsMessage => {
  const contents: any = {
    Storage: undefined,
    ValidProcessorFeatures: undefined,
  };
  if (output.Storage === "") {
    contents.Storage = [];
  } else if (output["Storage"] !== undefined && output["Storage"]["ValidStorageOptions"] !== undefined) {
    contents.Storage = deserializeAws_queryValidStorageOptionsList(
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
    contents.ValidProcessorFeatures = deserializeAws_queryAvailableProcessorFeatureList(
      __getArrayIfSingleItem(output["ValidProcessorFeatures"]["AvailableProcessorFeature"]),
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
    SupportsStorageAutoscaling: undefined,
    ProvisionedStorageThroughput: undefined,
    StorageThroughputToIopsRatio: undefined,
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
  if (output["SupportsStorageAutoscaling"] !== undefined) {
    contents.SupportsStorageAutoscaling = __parseBoolean(output["SupportsStorageAutoscaling"]);
  }
  if (output.ProvisionedStorageThroughput === "") {
    contents.ProvisionedStorageThroughput = [];
  } else if (
    output["ProvisionedStorageThroughput"] !== undefined &&
    output["ProvisionedStorageThroughput"]["Range"] !== undefined
  ) {
    contents.ProvisionedStorageThroughput = deserializeAws_queryRangeList(
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
    contents.StorageThroughputToIopsRatio = deserializeAws_queryDoubleRangeList(
      __getArrayIfSingleItem(output["StorageThroughputToIopsRatio"]["DoubleRange"]),
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
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
