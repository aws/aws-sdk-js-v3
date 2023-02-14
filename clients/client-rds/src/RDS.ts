// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { RDSClient } from "./RDSClient";

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
export class RDS extends RDSClient {
  /**
   * <p>Associates an Identity and Access Management (IAM) role with a DB cluster.</p>
   */
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToDBClusterCommandOutput>;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddRoleToDBClusterCommandOutput) => void),
    cb?: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): Promise<AddRoleToDBClusterCommandOutput> | void {
    const command = new AddRoleToDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p>
   *          <note>
   *             <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p>
   *          </note>
   *          <p>This command doesn't apply to RDS Custom.</p>
   */
  public addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToDBInstanceCommandOutput>;
  public addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void
  ): void;
  public addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void
  ): void;
  public addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddRoleToDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void
  ): Promise<AddRoleToDBInstanceCommandOutput> | void {
    const command = new AddRoleToDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a source identifier to an existing RDS event notification subscription.</p>
   */
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput> | void {
    const command = new AddSourceIdentifierToSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p>
   *          <p>For an overview on tagging Amazon RDS resources,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
   */
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void),
    cb?: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> | void {
    const command = new ApplyPendingMaintenanceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security
   *           groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC
   *           instances. Second, IP ranges are available if the application accessing your database is running on the internet.
   *           Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId
   *           and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p>
   *          <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in
   *             another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p>
   *          <p>For an overview of CIDR ranges, go to the
   *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
   *          <note>
   *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
   *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
   *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
   *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
   *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          </note>
   */
  public authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput>;
  public authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> | void {
    const command = new AuthorizeDBSecurityGroupIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
   *          <p>For more information on backtracking, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
   *                 Backtracking an Aurora DB Cluster</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action applies only to Aurora MySQL DB clusters.</p>
   *          </note>
   */
  public backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BacktrackDBClusterCommandOutput>;
  public backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void
  ): void;
  public backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void
  ): void;
  public backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BacktrackDBClusterCommandOutput) => void),
    cb?: (err: any, data?: BacktrackDBClusterCommandOutput) => void
  ): Promise<BacktrackDBClusterCommandOutput> | void {
    const command = new BacktrackDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels an export task in progress that is exporting a snapshot to Amazon S3.
   *             Any data that has already been written to the S3 bucket isn't removed.</p>
   */
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportTaskCommandOutput>;
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelExportTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): Promise<CancelExportTaskCommandOutput> | void {
    const command = new CancelExportTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified DB cluster parameter group.</p>
   */
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterParameterGroupCommandOutput>;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): Promise<CopyDBClusterParameterGroupCommandOutput> | void {
    const command = new CopyDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies a snapshot of a DB cluster.</p>
   *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code>
   *           must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
   *          <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case,
   *             the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the
   *             destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy
   *             an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to
   *               encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot
   *                     identifier for the encrypted DB cluster snapshot to be copied. This identifier
   *                     must be in the ARN format for the source Amazon Web Services Region and is the same value as
   *                     the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p>
   *             </li>
   *          </ul>
   *          <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified
   *           by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p>
   *          <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html">
   *               Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *                 Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterSnapshotCommandOutput>;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDBClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): Promise<CopyDBClusterSnapshotCommandOutput> | void {
    const command = new CopyDBClusterSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified DB parameter group.</p>
   */
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBParameterGroupCommandOutput>;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): Promise<CopyDBParameterGroupCommandOutput> | void {
    const command = new CopyDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p>
   *          <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the
   *             Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination
   *             Amazon Web Services Region for the DB snapshot copy.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   *          <p>For more information about copying snapshots, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBSnapshotCommandOutput>;
  public copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void
  ): void;
  public copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void
  ): void;
  public copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDBSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopyDBSnapshotCommandOutput) => void
  ): Promise<CopyDBSnapshotCommandOutput> | void {
    const command = new CopyDBSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified option group.</p>
   */
  public copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyOptionGroupCommandOutput>;
  public copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    cb: (err: any, data?: CopyOptionGroupCommandOutput) => void
  ): void;
  public copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyOptionGroupCommandOutput) => void
  ): void;
  public copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyOptionGroupCommandOutput) => void),
    cb?: (err: any, data?: CopyOptionGroupCommandOutput) => void
  ): Promise<CopyOptionGroupCommandOutput> | void {
    const command = new CopyOptionGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a blue/green deployment.</p>
   *          <p>A blue/green deployment creates a staging environment that copies the production environment.
   *             In a blue/green deployment, the blue environment is the current production environment.
   *             The green environment is the staging environment. The staging environment stays in sync
   *             with the current production environment using logical replication.</p>
   *          <p>You can make changes to the databases in the green environment without affecting
   *             production workloads. For example, you can upgrade the major or minor DB engine version, change
   *             database parameters, or make schema changes in the staging environment. You can thoroughly test
   *             changes in the green environment. When ready, you can switch over the environments to promote the
   *             green environment to be the new production environment. The switchover typically takes under a minute.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
   *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
   *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   */
  public createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBlueGreenDeploymentCommandOutput>;
  public createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void
  ): void;
  public createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void
  ): void;
  public createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateBlueGreenDeploymentCommandOutput) => void
  ): Promise<CreateBlueGreenDeploymentCommandOutput> | void {
    const command = new CreateBlueGreenDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a custom DB engine version (CEV).</p>
   */
  public createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomDBEngineVersionCommandOutput>;
  public createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void
  ): void;
  public createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void
  ): void;
  public createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomDBEngineVersionCommandOutput) => void
  ): Promise<CreateCustomDBEngineVersionCommandOutput> | void {
    const command = new CreateCustomDBEngineVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p>
   *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon
   *             Aurora DB cluster as a read replica of another DB cluster or Amazon RDS MySQL or
   *             PostgreSQL DB instance.</p>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterCommandOutput>;
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): Promise<CreateDBClusterCommandOutput> | void {
    const command = new CreateDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p>
   *          <note>
   *             <p>This action applies only to Aurora DB clusters.</p>
   *          </note>
   */
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterEndpointCommandOutput>;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): Promise<CreateDBClusterEndpointCommandOutput> | void {
    const command = new CreateDBClusterEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB cluster parameter group.</p>
   *          <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p>
   *          <p>A DB cluster parameter group is initially created with the default parameters for the
   *             database engine used by instances in the DB cluster. To provide custom values for any of the
   *             parameters, you must modify the group after creating it using
   *             <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to
   *             associate it with your DB cluster using <code>ModifyDBCluster</code>.</p>
   *          <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB
   *             instances in the DB cluster without failover for the new DB cluster parameter group and
   *             associated settings to take effect.</p>
   *          <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB
   *           cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p>
   *          <important>
   *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
   *                 before creating your first DB cluster that uses that DB cluster parameter group as
   *                 the default parameter group. This allows Amazon RDS to fully complete the create
   *                 action before the DB cluster parameter group is used as the default for a new DB
   *                 cluster. This is especially important for parameters that are critical when creating
   *                 the default database for a DB cluster, such as the character set for the default
   *                 database defined by the <code>character_set_database</code> parameter. You can use
   *                 the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
   *                     <code>DescribeDBClusterParameters</code> operation to verify that your DB
   *                 cluster parameter group has been created or modified.</p>
   *          </important>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterParameterGroupCommandOutput>;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): Promise<CreateDBClusterParameterGroupCommandOutput> | void {
    const command = new CreateDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a snapshot of a DB cluster.</p>
   *          <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon
   *                 Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterSnapshotCommandOutput>;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): Promise<CreateDBClusterSnapshotCommandOutput> | void {
    const command = new CreateDBClusterSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB instance.</p>
   *          <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.
   *            For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance
   *            to the cluster.</p>
   *          <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html">
   *             Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about creating a DB instance in an Aurora DB cluster, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html">
   *             Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBInstanceCommandOutput>;
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): Promise<CreateDBInstanceCommandOutput> | void {
    const command = new CreateDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB instance that acts as a read replica for an existing source DB
   *             instance. You can create a read replica for a DB instance running MySQL, MariaDB,
   *             Oracle, PostgreSQL, or SQL Server. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read
   *                 Replicas</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code>
   *             operation to create a DB instance for an Aurora DB cluster.</p>
   *          <p>All read replica DB instances are created with backups disabled. All other DB
   *             instance attributes (including DB security groups and DB parameter groups) are inherited
   *             from the source DB instance, except as specified.</p>
   *          <important>
   *             <p>Your source DB instance must have backup retention enabled.</p>
   *          </important>
   */
  public createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBInstanceReadReplicaCommandOutput>;
  public createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void
  ): void;
  public createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void
  ): void;
  public createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void),
    cb?: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void
  ): Promise<CreateDBInstanceReadReplicaCommandOutput> | void {
    const command = new CreateDBInstanceReadReplicaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB parameter group.</p>
   *          <p>A DB parameter group is initially created with the default parameters for the
   *             database engine used by the DB instance. To provide custom values for any of the
   *             parameters, you must modify the group after creating it using
   *             <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to
   *             associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate
   *             a new DB parameter group with a running DB instance, you need to reboot the DB
   *             instance without failover for the new DB parameter group and associated settings to take effect.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   *          <important>
   *             <p>After you create a DB parameter group, you should wait at least 5 minutes
   *                 before creating your first DB instance that uses that DB parameter group as the default parameter
   *                 group. This allows Amazon RDS to fully complete the create action before the parameter
   *                 group is used as the default for a new DB instance. This is especially important for parameters
   *                 that are critical when creating the default database for a DB instance, such as the character set
   *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
   *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
   *                 <i>DescribeDBParameters</i> command to verify
   *                 that your DB parameter group has been created or modified.</p>
   *          </important>
   */
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBParameterGroupCommandOutput>;
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): Promise<CreateDBParameterGroupCommandOutput> | void {
    const command = new CreateDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB proxy.</p>
   */
  public createDBProxy(
    args: CreateDBProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBProxyCommandOutput>;
  public createDBProxy(
    args: CreateDBProxyCommandInput,
    cb: (err: any, data?: CreateDBProxyCommandOutput) => void
  ): void;
  public createDBProxy(
    args: CreateDBProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBProxyCommandOutput) => void
  ): void;
  public createDBProxy(
    args: CreateDBProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBProxyCommandOutput) => void),
    cb?: (err: any, data?: CreateDBProxyCommandOutput) => void
  ): Promise<CreateDBProxyCommandOutput> | void {
    const command = new CreateDBProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters.
   *         You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use
   *         DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.</p>
   */
  public createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBProxyEndpointCommandOutput>;
  public createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    cb: (err: any, data?: CreateDBProxyEndpointCommandOutput) => void
  ): void;
  public createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBProxyEndpointCommandOutput) => void
  ): void;
  public createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBProxyEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateDBProxyEndpointCommandOutput) => void
  ): Promise<CreateDBProxyEndpointCommandOutput> | void {
    const command = new CreateDBProxyEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p>
   *          <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p>
   *          <note>
   *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
   *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
   *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
   *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
   *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          </note>
   */
  public createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSecurityGroupCommandOutput>;
  public createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void
  ): void;
  public createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void
  ): void;
  public createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void
  ): Promise<CreateDBSecurityGroupCommandOutput> | void {
    const command = new CreateDBSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or
   *                 <code>storage-optimization</code> state.</p>
   */
  public createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSnapshotCommandOutput>;
  public createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void
  ): void;
  public createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void
  ): void;
  public createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateDBSnapshotCommandOutput) => void
  ): Promise<CreateDBSnapshotCommandOutput> | void {
    const command = new CreateDBSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.</p>
   */
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSubnetGroupCommandOutput>;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): Promise<CreateDBSubnetGroupCommandOutput> | void {
    const command = new CreateDBSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an RDS event notification subscription. This operation requires a topic Amazon
   *             Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API.
   *             To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the
   *             topic. The ARN is displayed in the SNS console.</p>
   *          <p>You can specify the type of source (<code>SourceType</code>) that you want to be
   *             notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the
   *             events. You can also provide a list of event categories (<code>EventCategories</code>)
   *             for events that you want to be notified of. For example, you can specify
   *                 <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> =
   *                 <code>mydbinstance1</code>, <code>mydbinstance2</code> and
   *                 <code>EventCategories</code> = <code>Availability</code>,
   *             <code>Backup</code>.</p>
   *          <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code>
   *           and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for
   *           the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>,
   *           you receive notice of the events for that source type for all your RDS sources. If you
   *           don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events
   *           generated from all RDS sources belonging to your customer account.</p>
   *          <p>For more information about subscribing to an event for RDS DB engines, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html">
   *                 Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about subscribing to an event for Aurora DB engines, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html">
   *                 Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): Promise<CreateEventSubscriptionCommandOutput> | void {
    const command = new CreateEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Aurora global database
   *         spread across multiple Amazon Web Services Regions. The global database
   *         contains a single primary cluster with read-write capability,
   *         and a read-only secondary cluster that receives
   *         data from the primary cluster through high-speed replication
   *         performed by the Aurora storage subsystem.</p>
   *          <p>You can create a global database that is initially empty, and then
   *         add a primary cluster and a secondary cluster to it.
   *         Or you can specify an existing Aurora cluster during the create operation,
   *         and this cluster becomes the primary cluster of the global database.</p>
   *          <note>
   *             <p>This action applies only to Aurora DB clusters.</p>
   *          </note>
   */
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalClusterCommandOutput>;
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): Promise<CreateGlobalClusterCommandOutput> | void {
    const command = new CreateGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new option group. You can create up to 20 option groups.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   */
  public createOptionGroup(
    args: CreateOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOptionGroupCommandOutput>;
  public createOptionGroup(
    args: CreateOptionGroupCommandInput,
    cb: (err: any, data?: CreateOptionGroupCommandOutput) => void
  ): void;
  public createOptionGroup(
    args: CreateOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOptionGroupCommandOutput) => void
  ): void;
  public createOptionGroup(
    args: CreateOptionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOptionGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateOptionGroupCommandOutput) => void
  ): Promise<CreateOptionGroupCommandOutput> | void {
    const command = new CreateOptionGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a blue/green deployment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
   *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
   *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   */
  public deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBlueGreenDeploymentCommandOutput>;
  public deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void
  ): void;
  public deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void
  ): void;
  public deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void),
    cb?: (err: any, data?: DeleteBlueGreenDeploymentCommandOutput) => void
  ): Promise<DeleteBlueGreenDeploymentCommandOutput> | void {
    const command = new DeleteBlueGreenDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p>
   *          <ul>
   *             <li>
   *                <p>The CEV must not be the default for RDS Custom. If it is, change the default
   *                 before running this command.</p>
   *             </li>
   *             <li>
   *                <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot,
   *                 or automated backup of your RDS Custom instance.</p>
   *             </li>
   *          </ul>
   *          <p>Typically, deletion takes a few minutes.</p>
   *          <note>
   *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
   *             Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
   *             <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
   *             API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
   *             the <code>DeleteCustomDbEngineVersion</code> event.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">
   *             Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomDBEngineVersionCommandOutput>;
  public deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void
  ): void;
  public deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void
  ): void;
  public deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomDBEngineVersionCommandOutput) => void
  ): Promise<DeleteCustomDBEngineVersionCommandOutput> | void {
    const command = new DeleteCustomDBEngineVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster.
   *           When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
   *           Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterCommandOutput>;
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): Promise<DeleteDBClusterCommandOutput> | void {
    const command = new DeleteDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterEndpointCommandOutput>;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): Promise<DeleteDBClusterEndpointCommandOutput> | void {
    const command = new DeleteDBClusterEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterParameterGroupCommandOutput>;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): Promise<DeleteDBClusterParameterGroupCommandOutput> | void {
    const command = new DeleteDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p>
   *          <note>
   *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
   *             deleted.</p>
   *          </note>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterSnapshotCommandOutput>;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): Promise<DeleteDBClusterSnapshotCommandOutput> | void {
    const command = new DeleteDBClusterSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The DeleteDBInstance action deletes a previously provisioned DB instance.
   *           When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered.
   *           Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p>
   *          <p>If you request a final DB snapshot
   *         the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code>
   *         is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p>
   *          <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>,
   *           or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p>
   *          <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following
   *       conditions are true:</p>
   *          <ul>
   *             <li>
   *                <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>The DB instance is the only instance in the DB cluster.</p>
   *             </li>
   *          </ul>
   *          <p>To delete a DB instance in this case, first call the
   *                 <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so
   *             it's no longer a read replica. After the promotion completes, then call the
   *                 <code>DeleteDBInstance</code> API action to delete the final instance in the DB
   *             cluster.</p>
   */
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBInstanceCommandOutput>;
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): Promise<DeleteDBInstanceCommandOutput> | void {
    const command = new DeleteDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.</p>
   */
  public deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBInstanceAutomatedBackupCommandOutput>;
  public deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void
  ): void;
  public deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void
  ): void;
  public deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void
  ): Promise<DeleteDBInstanceAutomatedBackupCommandOutput> | void {
    const command = new DeleteDBInstanceAutomatedBackupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.</p>
   */
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBParameterGroupCommandOutput>;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): Promise<DeleteDBParameterGroupCommandOutput> | void {
    const command = new DeleteDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing DB proxy.</p>
   */
  public deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBProxyCommandOutput>;
  public deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    cb: (err: any, data?: DeleteDBProxyCommandOutput) => void
  ): void;
  public deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBProxyCommandOutput) => void
  ): void;
  public deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBProxyCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBProxyCommandOutput) => void
  ): Promise<DeleteDBProxyCommandOutput> | void {
    const command = new DeleteDBProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the
   *         endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write
   *         or read-only operations, or using a different VPC than the DB proxy's default VPC.</p>
   */
  public deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBProxyEndpointCommandOutput>;
  public deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    cb: (err: any, data?: DeleteDBProxyEndpointCommandOutput) => void
  ): void;
  public deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBProxyEndpointCommandOutput) => void
  ): void;
  public deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBProxyEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBProxyEndpointCommandOutput) => void
  ): Promise<DeleteDBProxyEndpointCommandOutput> | void {
    const command = new DeleteDBProxyEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a DB security group.</p>
   *          <p>The specified DB security group must not be associated with any DB instances.</p>
   *          <note>
   *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
   *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
   *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
   *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
   *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          </note>
   */
  public deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSecurityGroupCommandOutput>;
  public deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void
  ): void;
  public deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void
  ): void;
  public deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void
  ): Promise<DeleteDBSecurityGroupCommandOutput> | void {
    const command = new DeleteDBSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is
   *             terminated.</p>
   *          <note>
   *             <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p>
   *          </note>
   */
  public deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSnapshotCommandOutput>;
  public deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void
  ): void;
  public deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void
  ): void;
  public deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBSnapshotCommandOutput) => void
  ): Promise<DeleteDBSnapshotCommandOutput> | void {
    const command = new DeleteDBSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a DB subnet group.</p>
   *          <note>
   *             <p>The specified database subnet group must not be associated with any DB instances.</p>
   *          </note>
   */
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSubnetGroupCommandOutput>;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): Promise<DeleteDBSubnetGroupCommandOutput> | void {
    const command = new DeleteDBSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an RDS event notification subscription.</p>
   */
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): Promise<DeleteEventSubscriptionCommandOutput> | void {
    const command = new DeleteEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or
   *         destroyed first.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalClusterCommandOutput>;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): Promise<DeleteGlobalClusterCommandOutput> | void {
    const command = new DeleteGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing option group.</p>
   */
  public deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOptionGroupCommandOutput>;
  public deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void
  ): void;
  public deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void
  ): void;
  public deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOptionGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteOptionGroupCommandOutput) => void
  ): Promise<DeleteOptionGroupCommandOutput> | void {
    const command = new DeleteOptionGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.</p>
   */
  public deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterDBProxyTargetsCommandOutput>;
  public deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void
  ): void;
  public deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void
  ): void;
  public deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void),
    cb?: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void
  ): Promise<DeregisterDBProxyTargetsCommandOutput> | void {
    const command = new DeregisterDBProxyTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p>
   *          <p>This command doesn't take any parameters.</p>
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): Promise<DescribeAccountAttributesCommandOutput> | void {
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about blue/green deployments.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
   *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
   *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   */
  public describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBlueGreenDeploymentsCommandOutput>;
  public describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    cb: (err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void
  ): void;
  public describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void
  ): void;
  public describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeBlueGreenDeploymentsCommandOutput) => void
  ): Promise<DescribeBlueGreenDeploymentsCommandOutput> | void {
    const command = new DescribeBlueGreenDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   */
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificatesCommandOutput>;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCertificatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): Promise<DescribeCertificatesCommandOutput> | void {
    const command = new DescribeCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about backtracks for a DB cluster.</p>
   *          <p>For more information on Amazon Aurora, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action only applies to Aurora MySQL DB clusters.</p>
   *          </note>
   */
  public describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterBacktracksCommandOutput>;
  public describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void
  ): void;
  public describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void
  ): void;
  public describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void
  ): Promise<DescribeDBClusterBacktracksCommandOutput> | void {
    const command = new DescribeDBClusterBacktracksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterEndpointsCommandOutput>;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): Promise<DescribeDBClusterEndpointsCommandOutput> | void {
    const command = new DescribeDBClusterEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
   *             <code>DBClusterParameterGroupName</code> parameter is specified,
   *             the list will contain only the description of the specified DB cluster parameter group.</p>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput> | void {
    const command = new DescribeDBClusterParameterGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParametersCommandOutput>;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): Promise<DescribeDBClusterParametersCommandOutput> | void {
    const command = new DescribeDBClusterParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
   */
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClustersCommandOutput>;
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): Promise<DescribeDBClustersCommandOutput> | void {
    const command = new DescribeDBClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p>
   *          <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code>
   *             returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are
   *             authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of
   *             values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and
   *             can be copied or restored by all Amazon Web Services accounts.</p>
   *          <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the
   *             manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
   */
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> | void {
    const command = new DescribeDBClusterSnapshotAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): Promise<DescribeDBClusterSnapshotsCommandOutput> | void {
    const command = new DescribeDBClusterSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the available DB engines.</p>
   */
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBEngineVersionsCommandOutput>;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBEngineVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): Promise<DescribeDBEngineVersionsCommandOutput> | void {
    const command = new DescribeDBEngineVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays backups for both current and deleted
   *             instances. For example, use this operation to
   *             find details about automated backups for previously deleted instances. Current instances
   *             with retention periods greater than zero (0) are returned for both the
   *             <code>DescribeDBInstanceAutomatedBackups</code> and
   *             <code>DescribeDBInstances</code> operations.</p>
   *          <p>All parameters are optional.</p>
   */
  public describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput>;
  public describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void
  ): void;
  public describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void
  ): void;
  public describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void
  ): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> | void {
    const command = new DescribeDBInstanceAutomatedBackupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about provisioned RDS instances. This API supports pagination.</p>
   *          <note>
   *             <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
   *          </note>
   */
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBInstancesCommandOutput>;
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): Promise<DescribeDBInstancesCommandOutput> | void {
    const command = new DescribeDBInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of DB log files for the DB instance.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   */
  public describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBLogFilesCommandOutput>;
  public describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void
  ): void;
  public describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void
  ): void;
  public describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBLogFilesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBLogFilesCommandOutput) => void
  ): Promise<DescribeDBLogFilesCommandOutput> | void {
    const command = new DescribeDBLogFilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified,
   *             the list will contain only the description of the specified DB parameter group.</p>
   */
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBParameterGroupsCommandOutput>;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBParameterGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): Promise<DescribeDBParameterGroupsCommandOutput> | void {
    const command = new DescribeDBParameterGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
   */
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBParametersCommandOutput>;
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): Promise<DescribeDBParametersCommandOutput> | void {
    const command = new DescribeDBParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about DB proxies.</p>
   */
  public describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxiesCommandOutput>;
  public describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void
  ): void;
  public describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void
  ): void;
  public describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBProxiesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBProxiesCommandOutput) => void
  ): Promise<DescribeDBProxiesCommandOutput> | void {
    const command = new DescribeDBProxiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about DB proxy endpoints.</p>
   */
  public describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxyEndpointsCommandOutput>;
  public describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void
  ): void;
  public describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void
  ): void;
  public describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBProxyEndpointsCommandOutput) => void
  ): Promise<DescribeDBProxyEndpointsCommandOutput> | void {
    const command = new DescribeDBProxyEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.</p>
   */
  public describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxyTargetGroupsCommandOutput>;
  public describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void
  ): void;
  public describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void
  ): void;
  public describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void
  ): Promise<DescribeDBProxyTargetGroupsCommandOutput> | void {
    const command = new DescribeDBProxyTargetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.</p>
   */
  public describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBProxyTargetsCommandOutput>;
  public describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void
  ): void;
  public describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void
  ): void;
  public describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBProxyTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void
  ): Promise<DescribeDBProxyTargetsCommandOutput> | void {
    const command = new DescribeDBProxyTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified,
   *             the list will contain only the descriptions of the specified DB security group.</p>
   *          <note>
   *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
   *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
   *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
   *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
   *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          </note>
   */
  public describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSecurityGroupsCommandOutput>;
  public describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void
  ): void;
  public describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void
  ): void;
  public describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void
  ): Promise<DescribeDBSecurityGroupsCommandOutput> | void {
    const command = new DescribeDBSecurityGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p>
   *          <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code>
   *       returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are
   *       authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of
   *       values for the <code>restore</code> attribute, then the manual DB snapshot is public and
   *       can be copied or restored by all Amazon Web Services accounts.</p>
   *          <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the
   *       manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
   */
  public describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSnapshotAttributesCommandOutput>;
  public describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void
  ): void;
  public describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void
  ): void;
  public describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void
  ): Promise<DescribeDBSnapshotAttributesCommandOutput> | void {
    const command = new DescribeDBSnapshotAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about DB snapshots. This API action supports pagination.</p>
   */
  public describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSnapshotsCommandOutput>;
  public describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void
  ): void;
  public describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void
  ): void;
  public describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void
  ): Promise<DescribeDBSnapshotsCommandOutput> | void {
    const command = new DescribeDBSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p>
   *          <p>For an overview of CIDR ranges, go to the
   *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
   */
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSubnetGroupsCommandOutput>;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): Promise<DescribeDBSubnetGroupsCommandOutput> | void {
    const command = new DescribeDBSubnetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the cluster database engine.</p>
   *          <p>For more information on Amazon Aurora, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput> | void {
    const command = new DescribeEngineDefaultClusterParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the specified database engine.</p>
   */
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultParametersCommandOutput>;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): Promise<DescribeEngineDefaultParametersCommandOutput> | void {
    const command = new DescribeEngineDefaultParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays a list of categories for all event source types, or, if specified, for a specified source type.
   *             You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html">
   *                <i>Amazon RDS User Guide</i>
   *             </a> or the
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html">
   *                <i>Amazon Aurora User Guide</i>
   *             </a>.</p>
   */
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventCategoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): Promise<DescribeEventCategoriesCommandOutput> | void {
    const command = new DescribeEventCategoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days.
   *           Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be
   *           obtained by providing the name as a parameter.</p>
   *          <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring  Amazon Aurora
   *                 events</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>By default, RDS returns events that were generated in the past hour.</p>
   *          </note>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes
   *           <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p>
   *          <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
   */
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): Promise<DescribeEventSubscriptionsCommandOutput> | void {
    const command = new DescribeEventSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a snapshot export to Amazon S3. This API operation supports
   *             pagination.</p>
   */
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExportTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): Promise<DescribeExportTasksCommandOutput> | void {
    const command = new DescribeExportTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about Aurora global database clusters. This API supports pagination.</p>
   *          <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the
   *         <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalClustersCommandOutput>;
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGlobalClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): Promise<DescribeGlobalClustersCommandOutput> | void {
    const command = new DescribeGlobalClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes all available options.</p>
   */
  public describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptionGroupOptionsCommandOutput>;
  public describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void
  ): void;
  public describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void
  ): void;
  public describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void
  ): Promise<DescribeOptionGroupOptionsCommandOutput> | void {
    const command = new DescribeOptionGroupOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the available option groups.</p>
   */
  public describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptionGroupsCommandOutput>;
  public describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void
  ): void;
  public describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void
  ): void;
  public describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOptionGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOptionGroupsCommandOutput) => void
  ): Promise<DescribeOptionGroupsCommandOutput> | void {
    const command = new DescribeOptionGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.</p>
   */
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> | void {
    const command = new DescribeOrderableDBInstanceOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>
   */
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void),
    cb?: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> | void {
    const command = new DescribePendingMaintenanceActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>
   */
  public describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedDBInstancesCommandOutput>;
  public describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void
  ): void;
  public describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void
  ): void;
  public describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedDBInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void
  ): Promise<DescribeReservedDBInstancesCommandOutput> | void {
    const command = new DescribeReservedDBInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists available reserved DB instance offerings.</p>
   */
  public describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedDBInstancesOfferingsCommandOutput>;
  public describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void
  ): void;
  public describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void
  ): void;
  public describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void
  ): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> | void {
    const command = new DescribeReservedDBInstancesOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica,
   *          copy a DB snapshot from, or replicate automated backups from.</p>
   *          <p>Use this operation to determine whether cross-Region features are supported between other Regions
   *             and your current Region. This operation supports pagination.</p>
   *          <p>To return information about the Regions that are enabled for your account, or all Regions,
   *             use the EC2 operation <code>DescribeRegions</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html">
   *                 DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>
   */
  public describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSourceRegionsCommandOutput>;
  public describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void
  ): void;
  public describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void
  ): void;
  public describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSourceRegionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSourceRegionsCommandOutput) => void
  ): Promise<DescribeSourceRegionsCommandOutput> | void {
    const command = new DescribeSourceRegionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to
   *             your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   */
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput>;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput> | void {
    const command = new DescribeValidDBInstanceModificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   */
  public downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DownloadDBLogFilePortionCommandOutput>;
  public downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void
  ): void;
  public downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void
  ): void;
  public downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DownloadDBLogFilePortionCommandOutput) => void),
    cb?: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void
  ): Promise<DownloadDBLogFilePortionCommandOutput> | void {
    const command = new DownloadDBLogFilePortionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Forces a failover for a DB cluster.</p>
   *          <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances)
   *           in the DB cluster to be the primary DB instance (the cluster writer).</p>
   *          <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances)
   *           in the DB cluster to be the primary DB instance (the cluster writer).</p>
   *          <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists,
   *           when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby
   *           DB instance when the primary DB instance fails.</p>
   *          <p>To simulate a failure of a primary instance for testing, you can force a failover.
   *           Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing
   *           connections that use those endpoint addresses when the failover is complete.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverDBClusterCommandOutput>;
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FailoverDBClusterCommandOutput) => void),
    cb?: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): Promise<FailoverDBClusterCommandOutput> | void {
    const command = new FailoverDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p>
   *          <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be
   *        the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words,
   *      the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected
   *      secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p>
   *          <p>For more information about failing over an Amazon Aurora global database, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global
   *         databases</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on
   *        healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to
   *         reconfigure your Aurora global database topology.</p>
   *          </note>
   */
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverGlobalClusterCommandOutput>;
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FailoverGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): Promise<FailoverGlobalClusterCommandOutput> | void {
    const command = new FailoverGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all tags on an Amazon RDS resource.</p>
   *          <p>For an overview on tagging an Amazon RDS resource,
   *           see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only,
   *             whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy,
   *             and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the
   *                 <i>Amazon RDS User Guide</i>. </p>
   *          <p>This operation is supported for RDS for Oracle only.</p>
   */
  public modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyActivityStreamCommandOutput>;
  public modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    cb: (err: any, data?: ModifyActivityStreamCommandOutput) => void
  ): void;
  public modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyActivityStreamCommandOutput) => void
  ): void;
  public modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyActivityStreamCommandOutput) => void),
    cb?: (err: any, data?: ModifyActivityStreamCommandOutput) => void
  ): Promise<ModifyActivityStreamCommandOutput> | void {
    const command = new ModifyActivityStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS)
   *           certificate for Amazon RDS for new DB instances, or remove the override.</p>
   *          <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB
   *             instances that is different from the default certificate provided by RDS. You can also
   *             use this operation to remove the override, so that new DB instances use the default
   *             certificate provided by RDS.</p>
   *          <p>You might need to override the default certificate in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet
   *                   the RDS default CA certificate for the specified Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services
   *                     Region, but you are still in the process of supporting the new CA certificate.
   *                     In this case, you temporarily need additional time to finish your application
   *                     changes.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  public modifyCertificates(
    args: ModifyCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCertificatesCommandOutput>;
  public modifyCertificates(
    args: ModifyCertificatesCommandInput,
    cb: (err: any, data?: ModifyCertificatesCommandOutput) => void
  ): void;
  public modifyCertificates(
    args: ModifyCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCertificatesCommandOutput) => void
  ): void;
  public modifyCertificates(
    args: ModifyCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ModifyCertificatesCommandOutput) => void
  ): Promise<ModifyCertificatesCommandOutput> | void {
    const command = new ModifyCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p>
   *          <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale
   *         fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code>
   *         to set the capacity explicitly.</p>
   *          <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale
   *             the DB cluster based on the cooldown period for scaling up and the cooldown period
   *             for scaling down.</p>
   *          <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   *          <important>
   *             <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that
   *               prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points,
   *               see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
   *                   Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          </important>
   *          <note>
   *             <p>This action only applies to Aurora Serverless v1 DB clusters.</p>
   *          </note>
   */
  public modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCurrentDBClusterCapacityCommandOutput>;
  public modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void
  ): void;
  public modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void
  ): void;
  public modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void),
    cb?: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void
  ): Promise<ModifyCurrentDBClusterCapacityCommandOutput> | void {
    const command = new ModifyCurrentDBClusterCapacityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling
   *             <code>DescribeDBEngineVersions</code>.</p>
   *          <note>
   *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
   *                 Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
   *                 <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
   *                 API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
   *                 the <code>ModifyCustomDbEngineVersion</code> event.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  public modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCustomDBEngineVersionCommandOutput>;
  public modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    cb: (err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void
  ): void;
  public modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void
  ): void;
  public modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void),
    cb?: (err: any, data?: ModifyCustomDBEngineVersionCommandOutput) => void
  ): Promise<ModifyCustomDBEngineVersionCommandOutput> | void {
    const command = new ModifyCustomDBEngineVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster.
   *            You can change one or more settings by specifying these parameters and the new values in the
   *            request.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterCommandOutput>;
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): Promise<ModifyDBClusterCommandOutput> | void {
    const command = new ModifyDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterEndpointCommandOutput>;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterEndpointCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): Promise<ModifyDBClusterEndpointCommandOutput> | void {
    const command = new ModifyDBClusterEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter,
   *             submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>,
   *             and <code>ApplyMethod</code>. A maximum of 20
   *             parameters can be modified in a single request.</p>
   *          <important>
   *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
   *                 before creating your first DB cluster that uses that DB cluster parameter group as the default parameter
   *                 group. This allows Amazon RDS to fully complete the create action before the parameter
   *                 group is used as the default for a new DB cluster. This is especially important for parameters
   *                 that are critical when creating the default database for a DB cluster, such as the character set
   *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
   *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
   *                 <code>DescribeDBClusterParameters</code> operation to verify
   *                 that your DB cluster parameter group has been created or modified.</p>
   *             <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora
   *                applies the update immediately. The cluster restart might interrupt your workload. In that case,
   *                your application must reopen any connections and retry any transactions that were active
   *                when the parameter changes took effect.</p>
   *          </important>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterParameterGroupCommandOutput>;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): Promise<ModifyDBClusterParameterGroupCommandOutput> | void {
    const command = new ModifyDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p>
   *          <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify
   *                 <code>restore</code> as the <code>AttributeName</code> and use the
   *                 <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are
   *             authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to
   *             make the manual DB cluster snapshot public, which means that it can be copied or
   *             restored by all Amazon Web Services accounts.</p>
   *          <note>
   *             <p>Don't add the <code>all</code> value for any manual DB cluster snapshots
   *                 that contain private information that you don't want available to all Amazon Web Services
   *                 accounts.</p>
   *          </note>
   *          <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by
   *             specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code>
   *             parameter. You can't use <code>all</code> as a value for that parameter in this
   *             case.</p>
   *          <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster
   *             snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are
   *             returned as values for the <code>restore</code> attribute.</p>
   */
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> | void {
    const command = new ModifyDBClusterSnapshotAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies settings for a DB instance.
   *           You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
   *             To learn what modifications you can make to your DB instance,
   *             call <code>DescribeValidDBInstanceModifications</code>
   *             before you call <code>ModifyDBInstance</code>.</p>
   */
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBInstanceCommandOutput>;
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): Promise<ModifyDBInstanceCommandOutput> | void {
    const command = new ModifyDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter,
   *         submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and
   *         <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p>
   *          <important>
   *             <p>After you modify a DB parameter group, you should wait at least 5 minutes
   *             before creating your first DB instance that uses that DB parameter group as the default parameter
   *             group. This allows Amazon RDS to fully complete the modify action before the parameter
   *             group is used as the default for a new DB instance. This is especially important for parameters
   *             that are critical when creating the default database for a DB instance, such as the character set
   *             for the default database defined by the <code>character_set_database</code> parameter. You can use the
   *             <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
   *             <i>DescribeDBParameters</i> command to verify
   *             that your DB parameter group has been created or modified.</p>
   *          </important>
   */
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBParameterGroupCommandOutput>;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): Promise<ModifyDBParameterGroupCommandOutput> | void {
    const command = new ModifyDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the settings for an existing DB proxy.</p>
   */
  public modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBProxyCommandOutput>;
  public modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    cb: (err: any, data?: ModifyDBProxyCommandOutput) => void
  ): void;
  public modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBProxyCommandOutput) => void
  ): void;
  public modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBProxyCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBProxyCommandOutput) => void
  ): Promise<ModifyDBProxyCommandOutput> | void {
    const command = new ModifyDBProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the settings for an existing DB proxy endpoint.</p>
   */
  public modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBProxyEndpointCommandOutput>;
  public modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    cb: (err: any, data?: ModifyDBProxyEndpointCommandOutput) => void
  ): void;
  public modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBProxyEndpointCommandOutput) => void
  ): void;
  public modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBProxyEndpointCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBProxyEndpointCommandOutput) => void
  ): Promise<ModifyDBProxyEndpointCommandOutput> | void {
    const command = new ModifyDBProxyEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
   */
  public modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBProxyTargetGroupCommandOutput>;
  public modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void
  ): void;
  public modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void
  ): void;
  public modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void
  ): Promise<ModifyDBProxyTargetGroupCommandOutput> | void {
    const command = new ModifyDBProxyTargetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted
   *             or unencrypted, but not shared or public.
   *
   *     </p>
   *          <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command
   *           doesn't apply to RDS Custom.</p>
   */
  public modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSnapshotCommandOutput>;
  public modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void
  ): void;
  public modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void
  ): void;
  public modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBSnapshotCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBSnapshotCommandOutput) => void
  ): Promise<ModifyDBSnapshotCommandOutput> | void {
    const command = new ModifyDBSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p>
   *          <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code>
   *             as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add
   *             a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot.
   *             Uses the value <code>all</code> to make the manual DB snapshot public, which means it
   *             can be copied or restored by all Amazon Web Services accounts.</p>
   *          <note>
   *             <p>Don't add the <code>all</code> value for any manual DB snapshots that
   *                 contain private information that you don't want available to all Amazon Web Services
   *                 accounts.</p>
   *          </note>
   *          <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a
   *             list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You
   *             can't use <code>all</code> as a value for that parameter in this case.</p>
   *          <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or
   *             whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as
   *             values for the <code>restore</code> attribute.</p>
   */
  public modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSnapshotAttributeCommandOutput>;
  public modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void
  ): void;
  public modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void
  ): void;
  public modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void
  ): Promise<ModifyDBSnapshotAttributeCommandOutput> | void {
    const command = new ModifyDBSnapshotAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.</p>
   */
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSubnetGroupCommandOutput>;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): Promise<ModifyDBSubnetGroupCommandOutput> | void {
    const command = new ModifyDBSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change
   *         source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p>
   *          <p>You can see a list of the event categories for a given source type (<code>SourceType</code>)
   *           in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i>
   *             or by using the <code>DescribeEventCategories</code> operation.</p>
   */
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): Promise<ModifyEventSubscriptionCommandOutput> | void {
    const command = new ModifyEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration
   *         parameters by specifying these parameters and the new values in the request. For more information on
   *         Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the
   *         <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyGlobalClusterCommandOutput>;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): Promise<ModifyGlobalClusterCommandOutput> | void {
    const command = new ModifyGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing option group.</p>
   */
  public modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyOptionGroupCommandOutput>;
  public modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void
  ): void;
  public modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void
  ): void;
  public modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyOptionGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyOptionGroupCommandOutput) => void
  ): Promise<ModifyOptionGroupCommandOutput> | void {
    const command = new ModifyOptionGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Promotes a read replica DB instance to a standalone DB instance.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Backup duration is a function of the amount of changes to the database since the previous
   *                         backup. If you plan to promote a read replica to a standalone instance, we
   *                         recommend that you enable backups and complete at least one backup prior to
   *                         promotion. In addition, a read replica cannot be promoted to a standalone
   *                         instance when it is in the <code>backing-up</code> status. If you have
   *                         enabled backups on your read replica, configure the automated backup window
   *                         so that daily backups do not interfere with read replica
   *                         promotion.</p>
   *                </li>
   *                <li>
   *                   <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteReadReplicaCommandOutput>;
  public promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void
  ): void;
  public promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void
  ): void;
  public promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PromoteReadReplicaCommandOutput) => void),
    cb?: (err: any, data?: PromoteReadReplicaCommandOutput) => void
  ): Promise<PromoteReadReplicaCommandOutput> | void {
    const command = new PromoteReadReplicaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Promotes a read replica DB cluster to a standalone DB cluster.</p>
   */
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteReadReplicaDBClusterCommandOutput>;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void),
    cb?: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): Promise<PromoteReadReplicaDBClusterCommandOutput> | void {
    const command = new PromoteReadReplicaDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Purchases a reserved DB instance offering.</p>
   */
  public purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedDBInstancesOfferingCommandOutput>;
  public purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void
  ): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> | void {
    const command = new PurchaseReservedDBInstancesOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>You might need to reboot your DB cluster, usually for maintenance reasons.
   *           For example, if you make certain modifications,
   *           or if you change the DB cluster parameter group associated with the DB cluster,
   *           reboot the DB cluster for the changes to take effect.</p>
   *          <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB
   *           cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p>
   *          <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public rebootDBCluster(
    args: RebootDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDBClusterCommandOutput>;
  public rebootDBCluster(
    args: RebootDBClusterCommandInput,
    cb: (err: any, data?: RebootDBClusterCommandOutput) => void
  ): void;
  public rebootDBCluster(
    args: RebootDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDBClusterCommandOutput) => void
  ): void;
  public rebootDBCluster(
    args: RebootDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootDBClusterCommandOutput) => void),
    cb?: (err: any, data?: RebootDBClusterCommandOutput) => void
  ): Promise<RebootDBClusterCommandOutput> | void {
    const command = new RebootDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>You might need to reboot your DB instance, usually for maintenance reasons.
   *         For example, if you make certain modifications,
   *         or if you change the DB parameter group associated with the DB instance,
   *         you must reboot the instance for the changes to take effect.</p>
   *          <p>Rebooting a DB instance restarts the database engine service.
   *         Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
   *          <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   *          <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
   */
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDBInstanceCommandOutput>;
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): Promise<RebootDBInstanceCommandOutput> | void {
    const command = new RebootDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
   */
  public registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDBProxyTargetsCommandOutput>;
  public registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void
  ): void;
  public registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void
  ): void;
  public registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterDBProxyTargetsCommandOutput) => void),
    cb?: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void
  ): Promise<RegisterDBProxyTargetsCommandOutput> | void {
    const command = new RegisterDBProxyTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a
   *         standalone cluster with read-write capability instead of being read-only and receiving data from a
   *         primary cluster in a different Region.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFromGlobalClusterCommandOutput>;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFromGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): Promise<RemoveFromGlobalClusterCommandOutput> | void {
    const command = new RemoveFromGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a
   *             DB cluster.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *                 Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromDBClusterCommandOutput>;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void),
    cb?: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): Promise<RemoveRoleFromDBClusterCommandOutput> | void {
    const command = new RemoveRoleFromDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.</p>
   */
  public removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromDBInstanceCommandOutput>;
  public removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void
  ): void;
  public removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void
  ): void;
  public removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void
  ): Promise<RemoveRoleFromDBInstanceCommandOutput> | void {
    const command = new RemoveRoleFromDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
   */
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> | void {
    const command = new RemoveSourceIdentifierFromSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes metadata tags from an Amazon RDS resource.</p>
   *          <p>For an overview on tagging an Amazon RDS resource,
   *           see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a DB cluster parameter group to the default value. To
   *             reset specific parameters submit a list of the following: <code>ParameterName</code>
   *             and <code>ApplyMethod</code>. To reset the
   *             entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code>
   *             and <code>ResetAllParameters</code> parameters.</p>
   *          <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters
   *             are set to <code>pending-reboot</code> to take effect on the next DB instance restart
   *             or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every
   *             DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDBClusterParameterGroupCommandOutput>;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): Promise<ResetDBClusterParameterGroupCommandOutput> | void {
    const command = new ResetDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a DB parameter group to the engine/system default value.
   *             To reset specific parameters, provide a list of the following:
   *                 <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB
   *             parameter group, specify the <code>DBParameterGroup</code> name and
   *                 <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic
   *             parameters are updated immediately and static parameters are set to
   *                 <code>pending-reboot</code> to take effect on the next DB instance restart or
   *                 <code>RebootDBInstance</code> request.</p>
   */
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDBParameterGroupCommandOutput>;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): Promise<ResetDBParameterGroupCommandOutput> | void {
    const command = new ResetDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket.
   *             Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be
   *             created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the
   *                 <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action only restores the DB cluster, not the DB instances for that DB
   *                   cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
   *                   instances for the restored DB cluster, specifying the identifier of the restored DB
   *                   cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
   *                   the <code>RestoreDBClusterFromS3</code> action has completed and the DB
   *                   cluster is available.</p>
   *          </note>
   *          <p>For more information on Amazon Aurora, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters. The source DB engine must be
   *                 MySQL.</p>
   *          </note>
   */
  public restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterFromS3CommandOutput>;
  public restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void
  ): void;
  public restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void
  ): void;
  public restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBClusterFromS3CommandOutput) => void),
    cb?: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void
  ): Promise<RestoreDBClusterFromS3CommandOutput> | void {
    const command = new RestoreDBClusterFromS3Command(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
   *          <p>The target DB cluster is created from the source snapshot with a default
   *             configuration. If you don't specify a security group, the new DB cluster is
   *             associated with the default security group.</p>
   *          <note>
   *             <p>This action only restores the DB cluster, not the DB instances for that DB
   *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
   *                 instances for the restored DB cluster, specifying the identifier of the restored DB
   *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
   *                 the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB
   *                 cluster is available.</p>
   *          </note>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput> | void {
    const command = new RestoreDBClusterFromSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point
   *             in time before <code>LatestRestorableTime</code> for up to
   *                 <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the
   *             source DB cluster with the same configuration as the original DB cluster, except that
   *             the new DB cluster is created with the default DB security group.</p>
   *          <note>
   *             <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB
   *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
   *                 instances for the restored DB cluster, specifying the identifier of the restored DB
   *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
   *                 the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB
   *                 cluster is available.</p>
   *          </note>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void),
    cb?: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput> | void {
    const command = new RestoreDBClusterToPointInTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most
   *             of the source's original configuration, including the default security group and DB parameter group. By default, the new DB
   *             instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group
   *             associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p>
   *          <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance
   *             before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you
   *             have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as
   *             the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original
   *             DB instance with the DB instance created from the snapshot.</p>
   *          <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
   *       must be the ARN of the shared DB snapshot.</p>
   *          <note>
   *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p>
   *          </note>
   */
  public restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput>;
  public restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void
  ): void;
  public restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void
  ): void;
  public restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void
  ): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> | void {
    const command = new RestoreDBInstanceFromDBSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Amazon Relational Database Service (Amazon RDS)
   *             supports importing MySQL databases by using backup files.
   *             You can create a backup of your on-premises database,
   *             store it on Amazon Simple Storage Service (Amazon S3),
   *             and then restore the backup file onto a new Amazon RDS DB instance running MySQL.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   */
  public restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBInstanceFromS3CommandOutput>;
  public restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void
  ): void;
  public restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void
  ): void;
  public restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void),
    cb?: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void
  ): Promise<RestoreDBInstanceFromS3CommandOutput> | void {
    const command = new RestoreDBInstanceFromS3Command(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p>
   *          <p>The target database is created with most of the original configuration, but in a
   *             system-selected Availability Zone, with the default security group, the default subnet
   *             group, and the default DB parameter group. By default, the new DB instance is created as
   *             a single-AZ deployment except when the instance is a SQL Server instance that has an
   *             option group that is associated with mirroring; in this case, the instance becomes a
   *             mirrored deployment and not a single-AZ deployment.</p>
   *          <note>
   *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p>
   *          </note>
   */
  public restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBInstanceToPointInTimeCommandOutput>;
  public restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void
  ): void;
  public restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void
  ): void;
  public restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void),
    cb?: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void
  ): Promise<RestoreDBInstanceToPointInTimeCommandOutput> | void {
    const command = new RestoreDBInstanceToPointInTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required
   *             parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either
   *             EC2SecurityGroupName or EC2SecurityGroupId).</p>
   *          <note>
   *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
   *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
   *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
   *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
   *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          </note>
   */
  public revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeDBSecurityGroupIngressCommandOutput>;
  public revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void
  ): Promise<RevokeDBSecurityGroupIngressCommandOutput> | void {
    const command = new RevokeDBSecurityGroupIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a database activity stream to monitor activity on the database.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">
   *                 Monitoring Amazon Aurora with Database Activity Streams</a>
   *             in the <i>Amazon Aurora User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html">
   *                 Monitoring Amazon RDS with Database Activity Streams</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  public startActivityStream(
    args: StartActivityStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartActivityStreamCommandOutput>;
  public startActivityStream(
    args: StartActivityStreamCommandInput,
    cb: (err: any, data?: StartActivityStreamCommandOutput) => void
  ): void;
  public startActivityStream(
    args: StartActivityStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartActivityStreamCommandOutput) => void
  ): void;
  public startActivityStream(
    args: StartActivityStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartActivityStreamCommandOutput) => void),
    cb?: (err: any, data?: StartActivityStreamCommandOutput) => void
  ): Promise<StartActivityStreamCommandOutput> | void {
    const command = new StartActivityStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster
   *        CLI command, or the StopDBCluster action.</p>
   *          <p>For more information, see
   *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
   *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public startDBCluster(
    args: StartDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBClusterCommandOutput>;
  public startDBCluster(
    args: StartDBClusterCommandInput,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;
  public startDBCluster(
    args: StartDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;
  public startDBCluster(
    args: StartDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDBClusterCommandOutput) => void),
    cb?: (err: any, data?: StartDBClusterCommandOutput) => void
  ): Promise<StartDBClusterCommandOutput> | void {
    const command = new StartDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html">
   *                 Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <note>
   *             <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.
   *             For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p>
   *          </note>
   */
  public startDBInstance(
    args: StartDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBInstanceCommandOutput>;
  public startDBInstance(
    args: StartDBInstanceCommandInput,
    cb: (err: any, data?: StartDBInstanceCommandOutput) => void
  ): void;
  public startDBInstance(
    args: StartDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBInstanceCommandOutput) => void
  ): void;
  public startDBInstance(
    args: StartDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: StartDBInstanceCommandOutput) => void
  ): Promise<StartDBInstanceCommandOutput> | void {
    const command = new StartDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables replication of automated backups to a different Amazon Web Services Region.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
   *             Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput>;
  public startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    cb: (err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  public startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  public startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void),
    cb?: (err: any, data?: StartDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput> | void {
    const command = new StartDBInstanceAutomatedBackupsReplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an export of a snapshot to Amazon S3.
   *             The provided IAM role must have access to the S3 bucket.</p>
   *          <p>This command doesn't apply to RDS Custom.</p>
   */
  public startExportTask(
    args: StartExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportTaskCommandOutput>;
  public startExportTask(
    args: StartExportTaskCommandInput,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;
  public startExportTask(
    args: StartExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;
  public startExportTask(
    args: StartExportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExportTaskCommandOutput) => void),
    cb?: (err: any, data?: StartExportTaskCommandOutput) => void
  ): Promise<StartExportTaskCommandOutput> | void {
    const command = new StartExportTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a database activity stream that was started using the Amazon Web Services console,
   *             the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">
   *                 Monitoring Amazon Aurora with Database Activity Streams</a>
   *             in the <i>Amazon Aurora User Guide</i>
   *             or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html">
   *                 Monitoring Amazon RDS with Database Activity Streams</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  public stopActivityStream(
    args: StopActivityStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopActivityStreamCommandOutput>;
  public stopActivityStream(
    args: StopActivityStreamCommandInput,
    cb: (err: any, data?: StopActivityStreamCommandOutput) => void
  ): void;
  public stopActivityStream(
    args: StopActivityStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopActivityStreamCommandOutput) => void
  ): void;
  public stopActivityStream(
    args: StopActivityStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopActivityStreamCommandOutput) => void),
    cb?: (err: any, data?: StopActivityStreamCommandOutput) => void
  ): Promise<StopActivityStreamCommandOutput> | void {
    const command = new StopActivityStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's
   *        metadata, including its endpoints and DB parameter groups. Aurora also
   *        retains the transaction logs so you can do a point-in-time restore if necessary.</p>
   *          <p>For more information, see
   *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
   *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This action only applies to Aurora DB clusters.</p>
   *          </note>
   */
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDBClusterCommandOutput>;
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDBClusterCommandOutput) => void),
    cb?: (err: any, data?: StopDBClusterCommandOutput) => void
  ): Promise<StopDBClusterCommandOutput> | void {
    const command = new StopDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint,
   *             DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if
   *             necessary.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html">
   *                 Stopping an Amazon RDS DB Instance Temporarily</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <note>
   *             <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.
   *             For Aurora clusters, use <code>StopDBCluster</code> instead.</p>
   *          </note>
   */
  public stopDBInstance(
    args: StopDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDBInstanceCommandOutput>;
  public stopDBInstance(
    args: StopDBInstanceCommandInput,
    cb: (err: any, data?: StopDBInstanceCommandOutput) => void
  ): void;
  public stopDBInstance(
    args: StopDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBInstanceCommandOutput) => void
  ): void;
  public stopDBInstance(
    args: StopDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: StopDBInstanceCommandOutput) => void
  ): Promise<StopDBInstanceCommandOutput> | void {
    const command = new StopDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops automated backup replication for a DB instance.</p>
   *          <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
   *             Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  public stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput>;
  public stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    cb: (err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  public stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): void;
  public stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void),
    cb?: (err: any, data?: StopDBInstanceAutomatedBackupsReplicationCommandOutput) => void
  ): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> | void {
    const command = new StopDBInstanceAutomatedBackupsReplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Switches over a blue/green deployment.</p>
   *          <p>Before you switch over, production traffic is routed to the databases in the blue environment.
   *             After you switch over, production traffic is routed to the databases in the green environment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
   *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
   *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   */
  public switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwitchoverBlueGreenDeploymentCommandOutput>;
  public switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    cb: (err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void
  ): void;
  public switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void
  ): void;
  public switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void),
    cb?: (err: any, data?: SwitchoverBlueGreenDeploymentCommandOutput) => void
  ): Promise<SwitchoverBlueGreenDeploymentCommandOutput> | void {
    const command = new SwitchoverBlueGreenDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new
   *             primary database. Issue this command in the Region that hosts the current standby database.</p>
   */
  public switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwitchoverReadReplicaCommandOutput>;
  public switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    cb: (err: any, data?: SwitchoverReadReplicaCommandOutput) => void
  ): void;
  public switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwitchoverReadReplicaCommandOutput) => void
  ): void;
  public switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SwitchoverReadReplicaCommandOutput) => void),
    cb?: (err: any, data?: SwitchoverReadReplicaCommandOutput) => void
  ): Promise<SwitchoverReadReplicaCommandOutput> | void {
    const command = new SwitchoverReadReplicaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
