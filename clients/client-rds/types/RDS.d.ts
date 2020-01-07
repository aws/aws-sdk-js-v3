import { RDSClient } from "./RDSClient";
import { AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput } from "./commands/AddRoleToDBClusterCommand";
import { AddRoleToDBInstanceCommandInput, AddRoleToDBInstanceCommandOutput } from "./commands/AddRoleToDBInstanceCommand";
import { AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput } from "./commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput } from "./commands/ApplyPendingMaintenanceActionCommand";
import { AuthorizeDBSecurityGroupIngressCommandInput, AuthorizeDBSecurityGroupIngressCommandOutput } from "./commands/AuthorizeDBSecurityGroupIngressCommand";
import { BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput } from "./commands/BacktrackDBClusterCommand";
import { CopyDBClusterParameterGroupCommandInput, CopyDBClusterParameterGroupCommandOutput } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput } from "./commands/CopyDBClusterSnapshotCommand";
import { CopyDBParameterGroupCommandInput, CopyDBParameterGroupCommandOutput } from "./commands/CopyDBParameterGroupCommand";
import { CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput } from "./commands/CopyDBSnapshotCommand";
import { CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput } from "./commands/CopyOptionGroupCommand";
import { CreateCustomAvailabilityZoneCommandInput, CreateCustomAvailabilityZoneCommandOutput } from "./commands/CreateCustomAvailabilityZoneCommand";
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput } from "./commands/CreateDBClusterEndpointCommand";
import { CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommandInput, CreateDBClusterSnapshotCommandOutput } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput } from "./commands/CreateDBInstanceCommand";
import { CreateDBInstanceReadReplicaCommandInput, CreateDBInstanceReadReplicaCommandOutput } from "./commands/CreateDBInstanceReadReplicaCommand";
import { CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput } from "./commands/CreateDBParameterGroupCommand";
import { CreateDBProxyCommandInput, CreateDBProxyCommandOutput } from "./commands/CreateDBProxyCommand";
import { CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput } from "./commands/CreateDBSecurityGroupCommand";
import { CreateDBSnapshotCommandInput, CreateDBSnapshotCommandOutput } from "./commands/CreateDBSnapshotCommand";
import { CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput } from "./commands/CreateDBSubnetGroupCommand";
import { CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput } from "./commands/CreateEventSubscriptionCommand";
import { CreateGlobalClusterCommandInput, CreateGlobalClusterCommandOutput } from "./commands/CreateGlobalClusterCommand";
import { CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput } from "./commands/CreateOptionGroupCommand";
import { DeleteCustomAvailabilityZoneCommandInput, DeleteCustomAvailabilityZoneCommandOutput } from "./commands/DeleteCustomAvailabilityZoneCommand";
import { DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterEndpointCommandInput, DeleteDBClusterEndpointCommandOutput } from "./commands/DeleteDBClusterEndpointCommand";
import { DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceAutomatedBackupCommandInput, DeleteDBInstanceAutomatedBackupCommandOutput } from "./commands/DeleteDBInstanceAutomatedBackupCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBParameterGroupCommandInput, DeleteDBParameterGroupCommandOutput } from "./commands/DeleteDBParameterGroupCommand";
import { DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput } from "./commands/DeleteDBProxyCommand";
import { DeleteDBSecurityGroupCommandInput, DeleteDBSecurityGroupCommandOutput } from "./commands/DeleteDBSecurityGroupCommand";
import { DeleteDBSnapshotCommandInput, DeleteDBSnapshotCommandOutput } from "./commands/DeleteDBSnapshotCommand";
import { DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput } from "./commands/DeleteDBSubnetGroupCommand";
import { DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteGlobalClusterCommandInput, DeleteGlobalClusterCommandOutput } from "./commands/DeleteGlobalClusterCommand";
import { DeleteInstallationMediaCommandInput, DeleteInstallationMediaCommandOutput } from "./commands/DeleteInstallationMediaCommand";
import { DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput } from "./commands/DeleteOptionGroupCommand";
import { DeregisterDBProxyTargetsCommandInput, DeregisterDBProxyTargetsCommandOutput } from "./commands/DeregisterDBProxyTargetsCommand";
import { DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput } from "./commands/DescribeAccountAttributesCommand";
import { DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput } from "./commands/DescribeCertificatesCommand";
import { DescribeCustomAvailabilityZonesCommandInput, DescribeCustomAvailabilityZonesCommandOutput } from "./commands/DescribeCustomAvailabilityZonesCommand";
import { DescribeDBClusterBacktracksCommandInput, DescribeDBClusterBacktracksCommandOutput } from "./commands/DescribeDBClusterBacktracksCommand";
import { DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput } from "./commands/DescribeDBClusterEndpointsCommand";
import { DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstanceAutomatedBackupsCommandInput, DescribeDBInstanceAutomatedBackupsCommandOutput } from "./commands/DescribeDBInstanceAutomatedBackupsCommand";
import { DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBLogFilesCommandInput, DescribeDBLogFilesCommandOutput } from "./commands/DescribeDBLogFilesCommand";
import { DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput } from "./commands/DescribeDBParameterGroupsCommand";
import { DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput } from "./commands/DescribeDBParametersCommand";
import { DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput } from "./commands/DescribeDBProxiesCommand";
import { DescribeDBProxyTargetGroupsCommandInput, DescribeDBProxyTargetGroupsCommandOutput } from "./commands/DescribeDBProxyTargetGroupsCommand";
import { DescribeDBProxyTargetsCommandInput, DescribeDBProxyTargetsCommandOutput } from "./commands/DescribeDBProxyTargetsCommand";
import { DescribeDBSecurityGroupsCommandInput, DescribeDBSecurityGroupsCommandOutput } from "./commands/DescribeDBSecurityGroupsCommand";
import { DescribeDBSnapshotAttributesCommandInput, DescribeDBSnapshotAttributesCommandOutput } from "./commands/DescribeDBSnapshotAttributesCommand";
import { DescribeDBSnapshotsCommandInput, DescribeDBSnapshotsCommandOutput } from "./commands/DescribeDBSnapshotsCommand";
import { DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommandInput, DescribeEngineDefaultClusterParametersCommandOutput } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput } from "./commands/DescribeGlobalClustersCommand";
import { DescribeInstallationMediaCommandInput, DescribeInstallationMediaCommandOutput } from "./commands/DescribeInstallationMediaCommand";
import { DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput } from "./commands/DescribeOptionGroupOptionsCommand";
import { DescribeOptionGroupsCommandInput, DescribeOptionGroupsCommandOutput } from "./commands/DescribeOptionGroupsCommand";
import { DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeReservedDBInstancesCommandInput, DescribeReservedDBInstancesCommandOutput } from "./commands/DescribeReservedDBInstancesCommand";
import { DescribeReservedDBInstancesOfferingsCommandInput, DescribeReservedDBInstancesOfferingsCommandOutput } from "./commands/DescribeReservedDBInstancesOfferingsCommand";
import { DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput } from "./commands/DescribeSourceRegionsCommand";
import { DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput } from "./commands/DescribeValidDBInstanceModificationsCommand";
import { DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput } from "./commands/DownloadDBLogFilePortionCommand";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "./commands/FailoverDBClusterCommand";
import { ImportInstallationMediaCommandInput, ImportInstallationMediaCommandOutput } from "./commands/ImportInstallationMediaCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyCertificatesCommandInput, ModifyCertificatesCommandOutput } from "./commands/ModifyCertificatesCommand";
import { ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput } from "./commands/ModifyCurrentDBClusterCapacityCommand";
import { ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput } from "./commands/ModifyDBClusterEndpointCommand";
import { ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput } from "./commands/ModifyDBParameterGroupCommand";
import { ModifyDBProxyCommandInput, ModifyDBProxyCommandOutput } from "./commands/ModifyDBProxyCommand";
import { ModifyDBProxyTargetGroupCommandInput, ModifyDBProxyTargetGroupCommandOutput } from "./commands/ModifyDBProxyTargetGroupCommand";
import { ModifyDBSnapshotAttributeCommandInput, ModifyDBSnapshotAttributeCommandOutput } from "./commands/ModifyDBSnapshotAttributeCommand";
import { ModifyDBSnapshotCommandInput, ModifyDBSnapshotCommandOutput } from "./commands/ModifyDBSnapshotCommand";
import { ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput } from "./commands/ModifyDBSubnetGroupCommand";
import { ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyGlobalClusterCommandInput, ModifyGlobalClusterCommandOutput } from "./commands/ModifyGlobalClusterCommand";
import { ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput } from "./commands/ModifyOptionGroupCommand";
import { PromoteReadReplicaCommandInput, PromoteReadReplicaCommandOutput } from "./commands/PromoteReadReplicaCommand";
import { PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput } from "./commands/PromoteReadReplicaDBClusterCommand";
import { PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput } from "./commands/PurchaseReservedDBInstancesOfferingCommand";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "./commands/RebootDBInstanceCommand";
import { RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput } from "./commands/RegisterDBProxyTargetsCommand";
import { RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput } from "./commands/RemoveFromGlobalClusterCommand";
import { RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput } from "./commands/RemoveRoleFromDBClusterCommand";
import { RemoveRoleFromDBInstanceCommandInput, RemoveRoleFromDBInstanceCommandOutput } from "./commands/RemoveRoleFromDBInstanceCommand";
import { RemoveSourceIdentifierFromSubscriptionCommandInput, RemoveSourceIdentifierFromSubscriptionCommandOutput } from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput } from "./commands/ResetDBClusterParameterGroupCommand";
import { ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput } from "./commands/ResetDBParameterGroupCommand";
import { RestoreDBClusterFromS3CommandInput, RestoreDBClusterFromS3CommandOutput } from "./commands/RestoreDBClusterFromS3Command";
import { RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput } from "./commands/RestoreDBClusterToPointInTimeCommand";
import { RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput } from "./commands/RestoreDBInstanceFromDBSnapshotCommand";
import { RestoreDBInstanceFromS3CommandInput, RestoreDBInstanceFromS3CommandOutput } from "./commands/RestoreDBInstanceFromS3Command";
import { RestoreDBInstanceToPointInTimeCommandInput, RestoreDBInstanceToPointInTimeCommandOutput } from "./commands/RestoreDBInstanceToPointInTimeCommand";
import { RevokeDBSecurityGroupIngressCommandInput, RevokeDBSecurityGroupIngressCommandOutput } from "./commands/RevokeDBSecurityGroupIngressCommand";
import { StartActivityStreamCommandInput, StartActivityStreamCommandOutput } from "./commands/StartActivityStreamCommand";
import { StartDBClusterCommandInput, StartDBClusterCommandOutput } from "./commands/StartDBClusterCommand";
import { StartDBInstanceCommandInput, StartDBInstanceCommandOutput } from "./commands/StartDBInstanceCommand";
import { StopActivityStreamCommandInput, StopActivityStreamCommandOutput } from "./commands/StopActivityStreamCommand";
import { StopDBClusterCommandInput, StopDBClusterCommandOutput } from "./commands/StopDBClusterCommand";
import { StopDBInstanceCommandInput, StopDBInstanceCommandOutput } from "./commands/StopDBInstanceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Relational Database Service</fullname>
 *         <p> </p>
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
 *           you can use to manage Amazon RDS. Note that Amazon RDS is asynchronous, which means that some interfaces might
 *           require techniques such as polling or callback functions to determine when a command has been applied. In this
 *           reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot,
 *           or during the maintenance window. The reference structure is as follows, and we list following some related topics
 *           from the user guide.</p>
 *
 *          <p>
 *             <b>Amazon RDS API Reference</b>
 *          </p>
 *
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
 *
 *          <p>
 *             <b>Amazon RDS User Guide</b>
 *          </p>
 *
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
export declare class RDS extends RDSClient {
    /**
     * <p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster.
     *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL
     *                   to Access Other AWS Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    addRoleToDBCluster(args: AddRoleToDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<AddRoleToDBClusterCommandOutput>;
    addRoleToDBCluster(args: AddRoleToDBClusterCommandInput, cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void): void;
    addRoleToDBCluster(args: AddRoleToDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void): void;
    /**
     * <p>Associates an AWS Identity and Access Management (IAM) role with a DB instance.</p>
     *         <note>
     *             <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p>
     *         </note>
     */
    addRoleToDBInstance(args: AddRoleToDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<AddRoleToDBInstanceCommandOutput>;
    addRoleToDBInstance(args: AddRoleToDBInstanceCommandInput, cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void): void;
    addRoleToDBInstance(args: AddRoleToDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddRoleToDBInstanceCommandOutput) => void): void;
    /**
     * <p>Adds a source identifier to an existing RDS event notification subscription.</p>
     */
    addSourceIdentifierToSubscription(args: AddSourceIdentifierToSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
    addSourceIdentifierToSubscription(args: AddSourceIdentifierToSubscriptionCommandInput, cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void): void;
    addSourceIdentifierToSubscription(args: AddSourceIdentifierToSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void): void;
    /**
     * <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p>
     *          <p>For an overview on tagging Amazon RDS resources,
     *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
     */
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options?: __HttpHandlerOptions): Promise<ApplyPendingMaintenanceActionCommandOutput>;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    /**
     * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security
     *           groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC
     *           instances. Second, IP ranges are available if the application accessing your database is running on the Internet.
     *           Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId
     *           and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p>
     *          <note>
     *             <p>You can't authorize ingress from an EC2 security group in one AWS Region to an Amazon RDS DB instance in
     *              another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p>
     *          </note>
     *          <p>For an overview of CIDR ranges, go to the
     *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.
     *         </p>
     */
    authorizeDBSecurityGroupIngress(args: AuthorizeDBSecurityGroupIngressCommandInput, options?: __HttpHandlerOptions): Promise<AuthorizeDBSecurityGroupIngressCommandOutput>;
    authorizeDBSecurityGroupIngress(args: AuthorizeDBSecurityGroupIngressCommandInput, cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void): void;
    authorizeDBSecurityGroupIngress(args: AuthorizeDBSecurityGroupIngressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AuthorizeDBSecurityGroupIngressCommandOutput) => void): void;
    /**
     * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
     *         <p>For more information on backtracking, see
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
     *                 Backtracking an Aurora DB Cluster</a> in the
     *             <i>Amazon Aurora User Guide.</i>
     *         </p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    backtrackDBCluster(args: BacktrackDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<BacktrackDBClusterCommandOutput>;
    backtrackDBCluster(args: BacktrackDBClusterCommandInput, cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void): void;
    backtrackDBCluster(args: BacktrackDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BacktrackDBClusterCommandOutput) => void): void;
    /**
     * <p>Copies the specified DB cluster parameter group.</p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBClusterParameterGroupCommandOutput>;
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void): void;
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Copies a snapshot of a DB cluster.</p>
     *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code>
     *           must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
     *
     *          <p>You can copy an encrypted DB cluster snapshot from another AWS Region. In that case, the AWS Region where you call the <code>CopyDBClusterSnapshot</code> action
     *           is the destination AWS Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another AWS Region,
     *           you must provide the following values:</p>
     *
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>KmsKeyId</code> - The AWS Key Management System (AWS KMS) key identifier for the key to use to
     *               encrypt the copy of the DB cluster snapshot in the destination AWS Region.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>PreSignedUrl</code> -  A URL that contains a Signature Version 4 signed request for the
     *               <code>CopyDBClusterSnapshot</code> action to be called in the source AWS Region where the DB cluster snapshot is copied from.
     *               The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the
     *               source AWS Region that contains the encrypted DB cluster snapshot to be copied.</p>
     *               <p>The pre-signed URL request must contain the following parameter values:</p>
     *               <ul>
     *                   <li>
     *                      <p>
     *                         <code>KmsKeyId</code> - The KMS key identifier for the key to use to encrypt the copy of the DB
     *                       cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code>
     *                       action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster
     *                       snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example,
     *                       if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code>
     *                       looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p>
     *                   </li>
     *                </ul>
     *               <p>To learn how to generate a Signature Version 4 signed request, see
     *
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
     *                       Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
     *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
     *                       Signature Version 4 Signing Process</a>.</p>
     *               <note>
     *                   <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
     *                       instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
     *                       request for the operation that can be executed in the source AWS Region.</p>
     *               </note>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination AWS Region.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied.
     *               This identifier must be in the ARN format for the source AWS Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p>
     *             </li>
     *          </ul>
     *          <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified
     *           by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p>
     *          <p>For more information on copying encrypted DB cluster snapshots from one AWS Region to another, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html">
     *               Copying a Snapshot</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBClusterSnapshotCommandOutput>;
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void): void;
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Copies the specified DB parameter group.</p>
     */
    copyDBParameterGroup(args: CopyDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBParameterGroupCommandOutput>;
    copyDBParameterGroup(args: CopyDBParameterGroupCommandInput, cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void): void;
    copyDBParameterGroup(args: CopyDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void): void;
    /**
     * <p>Copies the specified DB snapshot. The source DB snapshot must be in the "available" state.</p>
     *
     *         <p>You can copy a snapshot from one AWS Region to another. In that case, the AWS Region
     *             where you call the <code>CopyDBSnapshot</code> action is the destination AWS Region for the
     *             DB snapshot copy. </p>
     *
     *         <p>For more information about copying snapshots, see
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i>
     *         </p>
     */
    copyDBSnapshot(args: CopyDBSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBSnapshotCommandOutput>;
    copyDBSnapshot(args: CopyDBSnapshotCommandInput, cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void): void;
    copyDBSnapshot(args: CopyDBSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBSnapshotCommandOutput) => void): void;
    /**
     * <p>Copies the specified option group.</p>
     */
    copyOptionGroup(args: CopyOptionGroupCommandInput, options?: __HttpHandlerOptions): Promise<CopyOptionGroupCommandOutput>;
    copyOptionGroup(args: CopyOptionGroupCommandInput, cb: (err: any, data?: CopyOptionGroupCommandOutput) => void): void;
    copyOptionGroup(args: CopyOptionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyOptionGroupCommandOutput) => void): void;
    /**
     * <p>Creates a custom Availability Zone (AZ).</p>
     *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
     *         <p>For more information about RDS on VMware, see the
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
     *                 <i>RDS on VMware User Guide.</i>
     *             </a>
     *          </p>
     */
    createCustomAvailabilityZone(args: CreateCustomAvailabilityZoneCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomAvailabilityZoneCommandOutput>;
    createCustomAvailabilityZone(args: CreateCustomAvailabilityZoneCommandInput, cb: (err: any, data?: CreateCustomAvailabilityZoneCommandOutput) => void): void;
    createCustomAvailabilityZone(args: CreateCustomAvailabilityZoneCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomAvailabilityZoneCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon Aurora DB cluster.</p>
     *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a
     *           Read Replica of another DB cluster or Amazon RDS MySQL DB instance. For cross-region replication
     *           where the DB cluster identified by <code>ReplicationSourceIdentifier</code> is encrypted,
     *       you must also specify the <code>PreSignedUrl</code> parameter.</p>
     *
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    createDBCluster(args: CreateDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterCommandOutput>;
    createDBCluster(args: CreateDBClusterCommandInput, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
    createDBCluster(args: CreateDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    createDBClusterEndpoint(args: CreateDBClusterEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterEndpointCommandOutput>;
    createDBClusterEndpoint(args: CreateDBClusterEndpointCommandInput, cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void): void;
    createDBClusterEndpoint(args: CreateDBClusterEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void): void;
    /**
     * <p>Creates a new DB cluster parameter group.</p>
     *          <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p>
     *         <p>
     *             A DB cluster parameter group is initially created with the default parameters for the
     *             database engine used by instances in the DB cluster. To provide custom values for any of the
     *             parameters, you must modify the group after creating it using
     *             <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to
     *             associate it with your DB cluster using <code>ModifyDBCluster</code>. When you associate
     *             a new DB cluster parameter group with a running DB cluster, you need to reboot the DB
     *             instances in the DB cluster without failover for the new DB cluster parameter group and
     *             associated settings to take effect.
     *         </p>
     *         <important>
     *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
     *                 before creating your first DB cluster
     *                 that uses that DB cluster parameter group as the default parameter
     *                 group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter
     *                 group is used as the default for a new DB cluster. This is especially important for parameters
     *                 that are critical when creating the default database for a DB cluster, such as the character set
     *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
     *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
     *                 <code>DescribeDBClusterParameters</code> action to verify
     *                 that your DB cluster parameter group has been created or modified.</p>
     *         </important>
     *
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterParameterGroupCommandOutput>;
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void): void;
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterSnapshotCommandOutput>;
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void): void;
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new DB instance.</p>
     */
    createDBInstance(args: CreateDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBInstanceCommandOutput>;
    createDBInstance(args: CreateDBInstanceCommandInput, cb: (err: any, data?: CreateDBInstanceCommandOutput) => void): void;
    createDBInstance(args: CreateDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBInstanceCommandOutput) => void): void;
    /**
     * <p>Creates a new DB instance that acts as a Read Replica for an existing source DB instance.
     *           You can create a Read Replica for a DB instance running MySQL, MariaDB, Oracle, or PostgreSQL.
     *           For more information, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read Replicas</a> in the <i>Amazon RDS User Guide</i>.
     *       </p>
     *
     *          <p>Amazon Aurora doesn't support this action. You must call the <code>CreateDBInstance</code> action to create a DB instance for an Aurora DB cluster.
     *       </p>
     *
     *          <p>All Read Replica DB instances are created with backups disabled.
     *           All other DB instance attributes (including DB security groups and DB parameter groups)
     *           are inherited from the source DB instance, except as specified following.
     *       </p>
     *
     *          <important>
     *             <p>Your source DB instance must have backup retention enabled.
     *          </p>
     *          </important>
     */
    createDBInstanceReadReplica(args: CreateDBInstanceReadReplicaCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBInstanceReadReplicaCommandOutput>;
    createDBInstanceReadReplica(args: CreateDBInstanceReadReplicaCommandInput, cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void): void;
    createDBInstanceReadReplica(args: CreateDBInstanceReadReplicaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBInstanceReadReplicaCommandOutput) => void): void;
    /**
     * <p>Creates a new DB parameter group.</p>
     *          <p>
     *             A DB parameter group is initially created with the default parameters for the
     *             database engine used by the DB instance. To provide custom values for any of the
     *             parameters, you must modify the group after creating it using
     *             <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to
     *             associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate
     *             a new DB parameter group with a running DB instance, you need to reboot the DB
     *             instance without failover for the new DB parameter group and associated settings to take effect.
     *         </p>
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
    createDBParameterGroup(args: CreateDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBParameterGroupCommandOutput>;
    createDBParameterGroup(args: CreateDBParameterGroupCommandInput, cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void): void;
    createDBParameterGroup(args: CreateDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Creates a new DB proxy.</p>
     */
    createDBProxy(args: CreateDBProxyCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBProxyCommandOutput>;
    createDBProxy(args: CreateDBProxyCommandInput, cb: (err: any, data?: CreateDBProxyCommandOutput) => void): void;
    createDBProxy(args: CreateDBProxyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBProxyCommandOutput) => void): void;
    /**
     * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p>
     *          <note>
     *             <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p>
     *          </note>
     */
    createDBSecurityGroup(args: CreateDBSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBSecurityGroupCommandOutput>;
    createDBSecurityGroup(args: CreateDBSecurityGroupCommandInput, cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void): void;
    createDBSecurityGroup(args: CreateDBSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBSecurityGroupCommandOutput) => void): void;
    /**
     * <p>Creates a DBSnapshot. The source DBInstance must be in "available" state.</p>
     */
    createDBSnapshot(args: CreateDBSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBSnapshotCommandOutput>;
    createDBSnapshot(args: CreateDBSnapshotCommandInput, cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void): void;
    createDBSnapshot(args: CreateDBSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>
     */
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBSubnetGroupCommandOutput>;
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void): void;
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Creates an RDS event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by
     *           either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in
     *           Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p>
     *          <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of RDS sources
     *           (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to
     *           be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and
     *           EventCategories = Availability, Backup.</p>
     *          <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1,
     *           you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify
     *           a SourceIdentifier, you receive notice of the events for that source type for all your RDS sources. If you do not specify
     *           either the SourceType nor the SourceIdentifier, you are notified of events generated from all RDS sources belonging to
     *           your customer account.</p>
     *          <note>
     *             <p>RDS event notification is only available for unencrypted SNS topics. If you specify an
     *               encrypted SNS topic, event notifications aren't sent for the topic.</p>
     *          </note>
     */
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventSubscriptionCommandOutput>;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>
     *       </p>
     *          <p>
     *         Creates an Aurora global database
     *         spread across multiple regions. The global database
     *         contains a single primary cluster with read-write capability,
     *         and a read-only secondary cluster that receives
     *         data from the primary cluster through high-speed replication
     *         performed by the Aurora storage subsystem.
     *       </p>
     *          <p>
     *         You can create a global database that is initially empty, and then
     *         add a primary cluster and a secondary cluster to it.
     *         Or you can specify an existing Aurora cluster during the create operation,
     *         and this cluster becomes the primary cluster of the global database.
     *       </p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    createGlobalCluster(args: CreateGlobalClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateGlobalClusterCommandOutput>;
    createGlobalCluster(args: CreateGlobalClusterCommandInput, cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void): void;
    createGlobalCluster(args: CreateGlobalClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new option group. You can create up to 20 option groups.</p>
     */
    createOptionGroup(args: CreateOptionGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateOptionGroupCommandOutput>;
    createOptionGroup(args: CreateOptionGroupCommandInput, cb: (err: any, data?: CreateOptionGroupCommandOutput) => void): void;
    createOptionGroup(args: CreateOptionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOptionGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a custom Availability Zone (AZ).</p>
     *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
     *         <p>For more information about RDS on VMware, see the
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
     *                 <i>RDS on VMware User Guide.</i>
     *             </a>
     *          </p>
     */
    deleteCustomAvailabilityZone(args: DeleteCustomAvailabilityZoneCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomAvailabilityZoneCommandOutput>;
    deleteCustomAvailabilityZone(args: DeleteCustomAvailabilityZoneCommandInput, cb: (err: any, data?: DeleteCustomAvailabilityZoneCommandOutput) => void): void;
    deleteCustomAvailabilityZone(args: DeleteCustomAvailabilityZoneCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomAvailabilityZoneCommandOutput) => void): void;
    /**
     * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster.
     *           When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
     *           Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
     *          <p></p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    deleteDBCluster(args: DeleteDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterCommandOutput>;
    deleteDBCluster(args: DeleteDBClusterCommandInput, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
    deleteDBCluster(args: DeleteDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
    /**
     * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    deleteDBClusterEndpoint(args: DeleteDBClusterEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterEndpointCommandOutput>;
    deleteDBClusterEndpoint(args: DeleteDBClusterEndpointCommandInput, cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void): void;
    deleteDBClusterEndpoint(args: DeleteDBClusterEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterParameterGroupCommandOutput>;
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void): void;
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p>
     *          <note>
     *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
     *             deleted.</p>
     *          </note>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterSnapshotCommandOutput>;
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void): void;
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>The DeleteDBInstance action deletes a previously provisioned DB instance.
     *           When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered.
     *           Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p>
     *          <p>
     *         If you request a final DB snapshot
     *         the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code>
     *         is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.
     *         </p>
     *          <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>,
     *           or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p>
     *
     *          <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following
     *       conditions are true:</p>
     *          <ul>
     *             <li>
     *                <p>The DB cluster is a Read Replica of another Amazon Aurora DB cluster.</p>
     *             </li>
     *             <li>
     *                <p>The DB instance is the only instance in the DB cluster.</p>
     *             </li>
     *          </ul>
     *          <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to
     *       promote the DB cluster so it's no longer a Read Replica. After the promotion completes, then call the <code>DeleteDBInstance</code>
     *       API action to delete the final instance in the DB cluster.</p>
     */
    deleteDBInstance(args: DeleteDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBInstanceCommandOutput>;
    deleteDBInstance(args: DeleteDBInstanceCommandInput, cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void): void;
    deleteDBInstance(args: DeleteDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes automated backups based on the source instance's <code>DbiResourceId</code>
     *             value or the restorable instance's resource ID.</p>
     */
    deleteDBInstanceAutomatedBackup(args: DeleteDBInstanceAutomatedBackupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBInstanceAutomatedBackupCommandOutput>;
    deleteDBInstanceAutomatedBackup(args: DeleteDBInstanceAutomatedBackupCommandInput, cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void): void;
    deleteDBInstanceAutomatedBackup(args: DeleteDBInstanceAutomatedBackupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBInstanceAutomatedBackupCommandOutput) => void): void;
    /**
     * <p>Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.</p>
     */
    deleteDBParameterGroup(args: DeleteDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBParameterGroupCommandOutput>;
    deleteDBParameterGroup(args: DeleteDBParameterGroupCommandInput, cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void): void;
    deleteDBParameterGroup(args: DeleteDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Deletes an existing proxy.</p>
     */
    deleteDBProxy(args: DeleteDBProxyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBProxyCommandOutput>;
    deleteDBProxy(args: DeleteDBProxyCommandInput, cb: (err: any, data?: DeleteDBProxyCommandOutput) => void): void;
    deleteDBProxy(args: DeleteDBProxyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBProxyCommandOutput) => void): void;
    /**
     * <p>Deletes a DB security group.</p>
     *          <note>
     *             <p>The specified DB security group must not be associated with any DB instances.</p>
     *          </note>
     */
    deleteDBSecurityGroup(args: DeleteDBSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBSecurityGroupCommandOutput>;
    deleteDBSecurityGroup(args: DeleteDBSecurityGroupCommandInput, cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void): void;
    deleteDBSecurityGroup(args: DeleteDBSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBSecurityGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is
     *             terminated.</p>
     *          <note>
     *             <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p>
     *          </note>
     */
    deleteDBSnapshot(args: DeleteDBSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBSnapshotCommandOutput>;
    deleteDBSnapshot(args: DeleteDBSnapshotCommandInput, cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void): void;
    deleteDBSnapshot(args: DeleteDBSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes a DB subnet group.</p>
     *          <note>
     *             <p>The specified database subnet group must not be associated with any DB instances.</p>
     *          </note>
     */
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBSubnetGroupCommandOutput>;
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void): void;
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an RDS event notification subscription.</p>
     */
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventSubscriptionCommandOutput>;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>
     *         Deletes a global database cluster. The primary and secondary clusters must already be detached or
     *         destroyed first.
     *       </p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    deleteGlobalCluster(args: DeleteGlobalClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGlobalClusterCommandOutput>;
    deleteGlobalCluster(args: DeleteGlobalClusterCommandInput, cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void): void;
    deleteGlobalCluster(args: DeleteGlobalClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void): void;
    /**
     * <p>Deletes the installation medium for a DB engine that requires an on-premises customer provided license,
     *             such as Microsoft SQL Server.</p>
     */
    deleteInstallationMedia(args: DeleteInstallationMediaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstallationMediaCommandOutput>;
    deleteInstallationMedia(args: DeleteInstallationMediaCommandInput, cb: (err: any, data?: DeleteInstallationMediaCommandOutput) => void): void;
    deleteInstallationMedia(args: DeleteInstallationMediaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstallationMediaCommandOutput) => void): void;
    /**
     * <p>Deletes an existing option group.</p>
     */
    deleteOptionGroup(args: DeleteOptionGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOptionGroupCommandOutput>;
    deleteOptionGroup(args: DeleteOptionGroupCommandInput, cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void): void;
    deleteOptionGroup(args: DeleteOptionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOptionGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.</p>
     */
    deregisterDBProxyTargets(args: DeregisterDBProxyTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterDBProxyTargetsCommandOutput>;
    deregisterDBProxyTargets(args: DeregisterDBProxyTargetsCommandInput, cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void): void;
    deregisterDBProxyTargets(args: DeregisterDBProxyTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterDBProxyTargetsCommandOutput) => void): void;
    /**
     * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p>
     *          <p>This command doesn't take any parameters.</p>
     */
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAttributesCommandOutput>;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    /**
     * <p>Lists the set of CA certificates provided by Amazon RDS for this AWS account.</p>
     */
    describeCertificates(args: DescribeCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCertificatesCommandOutput>;
    describeCertificates(args: DescribeCertificatesCommandInput, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    describeCertificates(args: DescribeCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    /**
     * <p>Returns information about custom Availability Zones (AZs).</p>
     *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
     *         <p>For more information about RDS on VMware, see the
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
     *                 <i>RDS on VMware User Guide.</i>
     *             </a>
     *          </p>
     */
    describeCustomAvailabilityZones(args: DescribeCustomAvailabilityZonesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCustomAvailabilityZonesCommandOutput>;
    describeCustomAvailabilityZones(args: DescribeCustomAvailabilityZonesCommandInput, cb: (err: any, data?: DescribeCustomAvailabilityZonesCommandOutput) => void): void;
    describeCustomAvailabilityZones(args: DescribeCustomAvailabilityZonesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCustomAvailabilityZonesCommandOutput) => void): void;
    /**
     * <p>Returns information about backtracks for a DB cluster.</p>
     *         <p>For more information on Amazon Aurora, see
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *                 What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *         </p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    describeDBClusterBacktracks(args: DescribeDBClusterBacktracksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterBacktracksCommandOutput>;
    describeDBClusterBacktracks(args: DescribeDBClusterBacktracksCommandInput, cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void): void;
    describeDBClusterBacktracks(args: DescribeDBClusterBacktracksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterBacktracksCommandOutput) => void): void;
    /**
     * <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    describeDBClusterEndpoints(args: DescribeDBClusterEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterEndpointsCommandOutput>;
    describeDBClusterEndpoints(args: DescribeDBClusterEndpointsCommandInput, cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void): void;
    describeDBClusterEndpoints(args: DescribeDBClusterEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void): void;
    /**
     * <p>
     *             Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
     *             <code>DBClusterParameterGroupName</code> parameter is specified,
     *             the list will contain only the description of the specified DB cluster parameter group.
     *         </p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void): void;
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterParametersCommandOutput>;
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void): void;
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void): void;
    /**
     * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p>
     *         <p>When sharing snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code>
     *             returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are
     *             authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of
     *             values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and
     *             can be copied or restored by all AWS accounts.</p>
     *         <p>To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the
     *             manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void): void;
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void): void;
    /**
     * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterSnapshotsCommandOutput>;
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void): void;
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns information about provisioned Aurora DB clusters. This API supports pagination.</p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
     *          </note>
     */
    describeDBClusters(args: DescribeDBClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClustersCommandOutput>;
    describeDBClusters(args: DescribeDBClustersCommandInput, cb: (err: any, data?: DescribeDBClustersCommandOutput) => void): void;
    describeDBClusters(args: DescribeDBClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClustersCommandOutput) => void): void;
    /**
     * <p>Returns a list of the available DB engines.</p>
     */
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBEngineVersionsCommandOutput>;
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void): void;
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void): void;
    /**
     * <p>Displays backups for both current and deleted
     *             instances. For example, use this operation to
     *             find details about automated backups for previously deleted instances. Current instances
     *             with retention periods greater than zero (0) are returned for both the
     *             <code>DescribeDBInstanceAutomatedBackups</code> and
     *             <code>DescribeDBInstances</code> operations.</p>
     * 	        <p>All parameters are optional.</p>
     */
    describeDBInstanceAutomatedBackups(args: DescribeDBInstanceAutomatedBackupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput>;
    describeDBInstanceAutomatedBackups(args: DescribeDBInstanceAutomatedBackupsCommandInput, cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void): void;
    describeDBInstanceAutomatedBackups(args: DescribeDBInstanceAutomatedBackupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsCommandOutput) => void): void;
    /**
     * <p>Returns information about provisioned RDS instances. This API supports pagination.</p>
     *          <note>
     *             <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
     *          </note>
     */
    describeDBInstances(args: DescribeDBInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBInstancesCommandOutput>;
    describeDBInstances(args: DescribeDBInstancesCommandInput, cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void): void;
    describeDBInstances(args: DescribeDBInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void): void;
    /**
     * <p>Returns a list of DB log files for the DB instance.</p>
     */
    describeDBLogFiles(args: DescribeDBLogFilesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBLogFilesCommandOutput>;
    describeDBLogFiles(args: DescribeDBLogFilesCommandInput, cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void): void;
    describeDBLogFiles(args: DescribeDBLogFilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBLogFilesCommandOutput) => void): void;
    /**
     * <p>
     *         Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified,
     *             the list will contain only the description of the specified DB parameter group.
     *         </p>
     */
    describeDBParameterGroups(args: DescribeDBParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBParameterGroupsCommandOutput>;
    describeDBParameterGroups(args: DescribeDBParameterGroupsCommandInput, cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void): void;
    describeDBParameterGroups(args: DescribeDBParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
     */
    describeDBParameters(args: DescribeDBParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBParametersCommandOutput>;
    describeDBParameters(args: DescribeDBParametersCommandInput, cb: (err: any, data?: DescribeDBParametersCommandOutput) => void): void;
    describeDBParameters(args: DescribeDBParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBParametersCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Returns information about DB proxies.</p>
     */
    describeDBProxies(args: DescribeDBProxiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBProxiesCommandOutput>;
    describeDBProxies(args: DescribeDBProxiesCommandInput, cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void): void;
    describeDBProxies(args: DescribeDBProxiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBProxiesCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.</p>
     */
    describeDBProxyTargetGroups(args: DescribeDBProxyTargetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBProxyTargetGroupsCommandOutput>;
    describeDBProxyTargetGroups(args: DescribeDBProxyTargetGroupsCommandInput, cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void): void;
    describeDBProxyTargetGroups(args: DescribeDBProxyTargetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBProxyTargetGroupsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.</p>
     */
    describeDBProxyTargets(args: DescribeDBProxyTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBProxyTargetsCommandOutput>;
    describeDBProxyTargets(args: DescribeDBProxyTargetsCommandInput, cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void): void;
    describeDBProxyTargets(args: DescribeDBProxyTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBProxyTargetsCommandOutput) => void): void;
    /**
     * <p>
     *         Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified,
     *             the list will contain only the descriptions of the specified DB security group.
     *         </p>
     */
    describeDBSecurityGroups(args: DescribeDBSecurityGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBSecurityGroupsCommandOutput>;
    describeDBSecurityGroups(args: DescribeDBSecurityGroupsCommandInput, cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void): void;
    describeDBSecurityGroups(args: DescribeDBSecurityGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBSecurityGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p>
     *          <p>When sharing snapshots with other AWS accounts, <code>DescribeDBSnapshotAttributes</code>
     *       returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are
     *       authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of
     *       values for the <code>restore</code> attribute, then the manual DB snapshot is public and
     *       can be copied or restored by all AWS accounts.</p>
     *          <p>To add or remove access for an AWS account to copy or restore a manual DB snapshot, or to make the
     *       manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
     */
    describeDBSnapshotAttributes(args: DescribeDBSnapshotAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBSnapshotAttributesCommandOutput>;
    describeDBSnapshotAttributes(args: DescribeDBSnapshotAttributesCommandInput, cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void): void;
    describeDBSnapshotAttributes(args: DescribeDBSnapshotAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBSnapshotAttributesCommandOutput) => void): void;
    /**
     * <p>Returns information about DB snapshots. This API action supports pagination.</p>
     */
    describeDBSnapshots(args: DescribeDBSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBSnapshotsCommandOutput>;
    describeDBSnapshots(args: DescribeDBSnapshotsCommandInput, cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void): void;
    describeDBSnapshots(args: DescribeDBSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p>
     *          <p>For an overview of CIDR ranges, go to the
     *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.
     *         </p>
     */
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBSubnetGroupsCommandOutput>;
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void): void;
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the default engine and system parameter information for the cluster database engine.</p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     */
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void): void;
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void): void;
    /**
     * <p>Returns the default engine and system parameter information for the specified database engine.</p>
     */
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEngineDefaultParametersCommandOutput>;
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void): void;
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void): void;
    /**
     * <p>Displays a list of categories for all event source types, or, if specified, for a specified source type.
     *             You can see a list of the event categories and source types
     *             in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">
     *                 Events</a> topic in the <i>Amazon RDS User Guide.</i>
     *          </p>
     */
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventCategoriesCommandOutput>;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    /**
     * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p>
     *          <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
     */
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventSubscriptionsCommandOutput>;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    /**
     * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.</p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>
     *         Returns information about Aurora global database clusters. This API supports pagination.
     *       </p>
     *          <p>
     *         For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the
     *         <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    describeGlobalClusters(args: DescribeGlobalClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGlobalClustersCommandOutput>;
    describeGlobalClusters(args: DescribeGlobalClustersCommandInput, cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void): void;
    describeGlobalClusters(args: DescribeGlobalClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void): void;
    /**
     * <p>Describes the available installation media for a DB engine that requires an
     *           on-premises customer provided license, such as Microsoft SQL Server.</p>
     */
    describeInstallationMedia(args: DescribeInstallationMediaCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstallationMediaCommandOutput>;
    describeInstallationMedia(args: DescribeInstallationMediaCommandInput, cb: (err: any, data?: DescribeInstallationMediaCommandOutput) => void): void;
    describeInstallationMedia(args: DescribeInstallationMediaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstallationMediaCommandOutput) => void): void;
    /**
     * <p>Describes all available options.</p>
     */
    describeOptionGroupOptions(args: DescribeOptionGroupOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOptionGroupOptionsCommandOutput>;
    describeOptionGroupOptions(args: DescribeOptionGroupOptionsCommandInput, cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void): void;
    describeOptionGroupOptions(args: DescribeOptionGroupOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOptionGroupOptionsCommandOutput) => void): void;
    /**
     * <p>Describes the available option groups.</p>
     */
    describeOptionGroups(args: DescribeOptionGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOptionGroupsCommandOutput>;
    describeOptionGroups(args: DescribeOptionGroupsCommandInput, cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void): void;
    describeOptionGroups(args: DescribeOptionGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOptionGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of orderable DB instance options for the specified engine.</p>
     */
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void): void;
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>
     */
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePendingMaintenanceActionsCommandOutput>;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    /**
     * <p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>
     */
    describeReservedDBInstances(args: DescribeReservedDBInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedDBInstancesCommandOutput>;
    describeReservedDBInstances(args: DescribeReservedDBInstancesCommandInput, cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void): void;
    describeReservedDBInstances(args: DescribeReservedDBInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedDBInstancesCommandOutput) => void): void;
    /**
     * <p>Lists available reserved DB instance offerings.</p>
     */
    describeReservedDBInstancesOfferings(args: DescribeReservedDBInstancesOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedDBInstancesOfferingsCommandOutput>;
    describeReservedDBInstancesOfferings(args: DescribeReservedDBInstancesOfferingsCommandInput, cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void): void;
    describeReservedDBInstancesOfferings(args: DescribeReservedDBInstancesOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedDBInstancesOfferingsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the source AWS Regions where the current AWS Region can create a Read Replica
     *             or copy a DB snapshot from. This API action supports pagination.</p>
     */
    describeSourceRegions(args: DescribeSourceRegionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSourceRegionsCommandOutput>;
    describeSourceRegions(args: DescribeSourceRegionsCommandInput, cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void): void;
    describeSourceRegions(args: DescribeSourceRegionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSourceRegionsCommandOutput) => void): void;
    /**
     * <p>You can call <code>DescribeValidDBInstanceModifications</code>
     *             to learn what modifications you can make to your DB instance.
     *             You can use this information when you call
     *             <code>ModifyDBInstance</code>.
     *         </p>
     */
    describeValidDBInstanceModifications(args: DescribeValidDBInstanceModificationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeValidDBInstanceModificationsCommandOutput>;
    describeValidDBInstanceModifications(args: DescribeValidDBInstanceModificationsCommandInput, cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void): void;
    describeValidDBInstanceModifications(args: DescribeValidDBInstanceModificationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void): void;
    /**
     * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
     */
    downloadDBLogFilePortion(args: DownloadDBLogFilePortionCommandInput, options?: __HttpHandlerOptions): Promise<DownloadDBLogFilePortionCommandOutput>;
    downloadDBLogFilePortion(args: DownloadDBLogFilePortionCommandInput, cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void): void;
    downloadDBLogFilePortion(args: DownloadDBLogFilePortionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DownloadDBLogFilePortionCommandOutput) => void): void;
    /**
     * <p>Forces a failover for a DB cluster.</p>
     *          <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances)
     *           in the DB cluster to be the primary instance (the cluster writer).</p>
     *          <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists,
     *           when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing.
     *           Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing
     *           connections that use those endpoint addresses when the failover is complete.</p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    failoverDBCluster(args: FailoverDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<FailoverDBClusterCommandOutput>;
    failoverDBCluster(args: FailoverDBClusterCommandInput, cb: (err: any, data?: FailoverDBClusterCommandOutput) => void): void;
    failoverDBCluster(args: FailoverDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FailoverDBClusterCommandOutput) => void): void;
    /**
     * <p>Imports the installation media for a DB engine that requires an on-premises
     *           customer provided license, such as SQL Server.</p>
     */
    importInstallationMedia(args: ImportInstallationMediaCommandInput, options?: __HttpHandlerOptions): Promise<ImportInstallationMediaCommandOutput>;
    importInstallationMedia(args: ImportInstallationMediaCommandInput, cb: (err: any, data?: ImportInstallationMediaCommandOutput) => void): void;
    importInstallationMedia(args: ImportInstallationMediaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportInstallationMediaCommandOutput) => void): void;
    /**
     * <p>Lists all tags on an Amazon RDS resource.</p>
     *          <p>For an overview on tagging an Amazon RDS resource,
     *           see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>
     *           in the <i>Amazon RDS User Guide</i>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
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
     *               <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet
     *                   the RDS default CA certificate for the specified AWS Region.</p>
     *             </li>
     *             <li>
     *               <p>RDS has already moved to a new default CA certificate for the specified AWS
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
    modifyCertificates(args: ModifyCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyCertificatesCommandOutput>;
    modifyCertificates(args: ModifyCertificatesCommandInput, cb: (err: any, data?: ModifyCertificatesCommandOutput) => void): void;
    modifyCertificates(args: ModifyCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyCertificatesCommandOutput) => void): void;
    /**
     * <p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p>
     *          <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale
     *         fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code>
     *         to set the capacity explicitly.</p>
     *          <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale
     *             the DB cluster based on the cooldown period for scaling up and the cooldown period
     *             for scaling down.</p>
     *          <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
     *           <i>Amazon Aurora User Guide</i>.</p>
     *          <important>
     *             <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that
     *               prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points,
     *               see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
     *                   Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
     *          </important>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    modifyCurrentDBClusterCapacity(args: ModifyCurrentDBClusterCapacityCommandInput, options?: __HttpHandlerOptions): Promise<ModifyCurrentDBClusterCapacityCommandOutput>;
    modifyCurrentDBClusterCapacity(args: ModifyCurrentDBClusterCapacityCommandInput, cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void): void;
    modifyCurrentDBClusterCapacity(args: ModifyCurrentDBClusterCapacityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyCurrentDBClusterCapacityCommandOutput) => void): void;
    /**
     * <p>Modify a setting for an Amazon Aurora DB cluster.
     *            You can change one
     *            or more database configuration parameters by specifying these parameters and the new values in the
     *            request. For more information on Amazon Aurora, see
     *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    modifyDBCluster(args: ModifyDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterCommandOutput>;
    modifyDBCluster(args: ModifyDBClusterCommandInput, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
    modifyDBCluster(args: ModifyDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
    /**
     * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    modifyDBClusterEndpoint(args: ModifyDBClusterEndpointCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterEndpointCommandOutput>;
    modifyDBClusterEndpoint(args: ModifyDBClusterEndpointCommandInput, cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void): void;
    modifyDBClusterEndpoint(args: ModifyDBClusterEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void): void;
    /**
     * <p>
     *             Modifies the parameters of a DB cluster parameter group. To modify more than one parameter,
     *             submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>,
     *             and <code>ApplyMethod</code>. A maximum of 20
     *             parameters can be modified in a single request.
     *         </p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *         <note>
     *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p>
     *         </note>
     *         <important>
     *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
     *                 before creating your first DB cluster that uses that DB cluster parameter group as the default parameter
     *                 group. This allows Amazon RDS to fully complete the create action before the parameter
     *                 group is used as the default for a new DB cluster. This is especially important for parameters
     *                 that are critical when creating the default database for a DB cluster, such as the character set
     *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
     *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
     *                 <code>DescribeDBClusterParameters</code> action to verify
     *                 that your DB cluster parameter group has been created or modified.</p>
     *             <p>If the modified DB cluster parameter group is used by an Aurora Serverless cluster, Aurora
     *                applies the update immediately. The cluster restart might interrupt your workload. In that case,
     *                your application must reopen any connections and retry any transactions that were active
     *                when the parameter changes took effect.</p>
     *         </important>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterParameterGroupCommandOutput>;
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void): void;
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p>
     *         <p>To share a manual DB cluster snapshot with other AWS accounts, specify <code>restore</code>
     *             as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add
     *             a list of IDs of the AWS accounts that are
     *             authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to
     *             make the manual DB cluster snapshot public, which means that it can be copied or
     *             restored by all AWS accounts. Do not add the <code>all</code> value for any
     *             manual DB cluster snapshots that contain private information that you don't want available
     *             to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying
     *             a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use
     *             <code>all</code> as a value for that parameter in this case.</p>
     *         <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or whether a
     *             manual DB cluster snapshot public or private, use the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void): void;
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void): void;
    /**
     * <p>Modifies settings for a DB instance.
     *           You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
     *             To learn what modifications you can make to your DB instance,
     *             call <code>DescribeValidDBInstanceModifications</code>
     *             before you call <code>ModifyDBInstance</code>.
     *       </p>
     */
    modifyDBInstance(args: ModifyDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBInstanceCommandOutput>;
    modifyDBInstance(args: ModifyDBInstanceCommandInput, cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void): void;
    modifyDBInstance(args: ModifyDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void): void;
    /**
     * <p>
     *         Modifies the parameters of a DB parameter group. To modify more than one parameter,
     *         submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and
     *         <code>ApplyMethod</code>. A maximum of 20
     *         parameters can be modified in a single request.
     *         </p>
     *          <note>
     *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p>
     *          </note>
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
    modifyDBParameterGroup(args: ModifyDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBParameterGroupCommandOutput>;
    modifyDBParameterGroup(args: ModifyDBParameterGroupCommandInput, cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void): void;
    modifyDBParameterGroup(args: ModifyDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Changes the settings for an existing DB proxy.</p>
     */
    modifyDBProxy(args: ModifyDBProxyCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBProxyCommandOutput>;
    modifyDBProxy(args: ModifyDBProxyCommandInput, cb: (err: any, data?: ModifyDBProxyCommandOutput) => void): void;
    modifyDBProxy(args: ModifyDBProxyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBProxyCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
     */
    modifyDBProxyTargetGroup(args: ModifyDBProxyTargetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBProxyTargetGroupCommandOutput>;
    modifyDBProxyTargetGroup(args: ModifyDBProxyTargetGroupCommandInput, cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void): void;
    modifyDBProxyTargetGroup(args: ModifyDBProxyTargetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBProxyTargetGroupCommandOutput) => void): void;
    /**
     * <p>Updates a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version.
     *
     *       </p>
     *
     *          <p>Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL.
     *       </p>
     */
    modifyDBSnapshot(args: ModifyDBSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBSnapshotCommandOutput>;
    modifyDBSnapshot(args: ModifyDBSnapshotCommandInput, cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void): void;
    modifyDBSnapshot(args: ModifyDBSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBSnapshotCommandOutput) => void): void;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p>
     *          <p>To share a manual DB snapshot with other AWS accounts, specify <code>restore</code>
     *       as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add
     *       a list of IDs of the AWS accounts that are
     *       authorized to restore the manual DB snapshot. Uses the value <code>all</code> to
     *       make the manual DB snapshot public, which means it can be copied or
     *       restored by all AWS accounts. Do not add the <code>all</code> value for any
     *       manual DB snapshots that contain private information that you don't want available
     *       to all AWS accounts. If the manual DB snapshot is encrypted, it can be shared, but only by specifying
     *       a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use
     *           <code>all</code> as a value for that parameter in this case.</p>
     *          <p>To view which AWS accounts have access to copy or restore a manual DB snapshot, or whether a
     *       manual DB snapshot public or private, use the <code>DescribeDBSnapshotAttributes</code> API action.</p>
     */
    modifyDBSnapshotAttribute(args: ModifyDBSnapshotAttributeCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBSnapshotAttributeCommandOutput>;
    modifyDBSnapshotAttribute(args: ModifyDBSnapshotAttributeCommandInput, cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void): void;
    modifyDBSnapshotAttribute(args: ModifyDBSnapshotAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBSnapshotAttributeCommandOutput) => void): void;
    /**
     * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>
     */
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBSubnetGroupCommandOutput>;
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void): void;
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Modifies an existing RDS event notification subscription. Note that you can't modify the source identifiers using this call; to change
     *         source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p>
     *          <p>You can see a list of the event categories for a given SourceType
     *           in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic  in the <i>Amazon RDS User Guide</i>
     *             or by using the <b>DescribeEventCategories</b> action.</p>
     */
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyEventSubscriptionCommandOutput>;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>
     *         Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration
     *         parameters by specifying these parameters and the new values in the request. For more information on
     *         Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the
     *         <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    modifyGlobalCluster(args: ModifyGlobalClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyGlobalClusterCommandOutput>;
    modifyGlobalCluster(args: ModifyGlobalClusterCommandInput, cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void): void;
    modifyGlobalCluster(args: ModifyGlobalClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void): void;
    /**
     * <p>Modifies an existing option group.</p>
     */
    modifyOptionGroup(args: ModifyOptionGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyOptionGroupCommandOutput>;
    modifyOptionGroup(args: ModifyOptionGroupCommandInput, cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void): void;
    modifyOptionGroup(args: ModifyOptionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyOptionGroupCommandOutput) => void): void;
    /**
     * <p>Promotes a Read Replica DB instance to a standalone DB instance.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>Backup duration is a function of the amount of changes to the database since the previous backup.
     *                   If you plan to promote a Read Replica to a standalone instance, we recommend that you enable backups
     *                   and complete at least one backup prior to promotion. In addition, a Read Replica cannot be promoted
     *                   to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups
     *                   on your Read Replica, configure the automated backup window so that daily backups do not
     *                   interfere with Read Replica promotion.</p>
     *                </li>
     *                <li>
     *                   <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p>
     *                </li>
     *             </ul>
     *
     *          </note>
     */
    promoteReadReplica(args: PromoteReadReplicaCommandInput, options?: __HttpHandlerOptions): Promise<PromoteReadReplicaCommandOutput>;
    promoteReadReplica(args: PromoteReadReplicaCommandInput, cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void): void;
    promoteReadReplica(args: PromoteReadReplicaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PromoteReadReplicaCommandOutput) => void): void;
    /**
     * <p>Promotes a Read Replica DB cluster to a standalone DB cluster.</p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    promoteReadReplicaDBCluster(args: PromoteReadReplicaDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<PromoteReadReplicaDBClusterCommandOutput>;
    promoteReadReplicaDBCluster(args: PromoteReadReplicaDBClusterCommandInput, cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void): void;
    promoteReadReplicaDBCluster(args: PromoteReadReplicaDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void): void;
    /**
     * <p>Purchases a reserved DB instance offering.</p>
     */
    purchaseReservedDBInstancesOffering(args: PurchaseReservedDBInstancesOfferingCommandInput, options?: __HttpHandlerOptions): Promise<PurchaseReservedDBInstancesOfferingCommandOutput>;
    purchaseReservedDBInstancesOffering(args: PurchaseReservedDBInstancesOfferingCommandInput, cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void): void;
    purchaseReservedDBInstancesOffering(args: PurchaseReservedDBInstancesOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurchaseReservedDBInstancesOfferingCommandOutput) => void): void;
    /**
     * <p>You might need to reboot your DB instance, usually for maintenance reasons.
     *         For example, if you make certain modifications,
     *         or if you change the DB parameter group associated with the DB instance,
     *         you must reboot the instance for the changes to take effect.
     *     </p>
     *
     *          <p>Rebooting a DB instance restarts the database engine service.
     *         Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.
     *     </p>
     *
     *          <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i>
     *          </p>
     */
    rebootDBInstance(args: RebootDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootDBInstanceCommandOutput>;
    rebootDBInstance(args: RebootDBInstanceCommandInput, cb: (err: any, data?: RebootDBInstanceCommandOutput) => void): void;
    rebootDBInstance(args: RebootDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootDBInstanceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
     *          </note>
     *
     *          <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
     */
    registerDBProxyTargets(args: RegisterDBProxyTargetsCommandInput, options?: __HttpHandlerOptions): Promise<RegisterDBProxyTargetsCommandOutput>;
    registerDBProxyTargets(args: RegisterDBProxyTargetsCommandInput, cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void): void;
    registerDBProxyTargets(args: RegisterDBProxyTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterDBProxyTargetsCommandOutput) => void): void;
    /**
     * <p>
     *         Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a
     *         standalone cluster with read-write capability instead of being read-only and receiving data from a
     *         primary cluster in a different region.
     *       </p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    removeFromGlobalCluster(args: RemoveFromGlobalClusterCommandInput, options?: __HttpHandlerOptions): Promise<RemoveFromGlobalClusterCommandOutput>;
    removeFromGlobalCluster(args: RemoveFromGlobalClusterCommandInput, cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void): void;
    removeFromGlobalCluster(args: RemoveFromGlobalClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void): void;
    /**
     * <p>Disassociates an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster.
     *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL
     *                 to Access Other AWS Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    removeRoleFromDBCluster(args: RemoveRoleFromDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<RemoveRoleFromDBClusterCommandOutput>;
    removeRoleFromDBCluster(args: RemoveRoleFromDBClusterCommandInput, cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void): void;
    removeRoleFromDBCluster(args: RemoveRoleFromDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void): void;
    /**
     * <p>Disassociates an AWS Identity and Access Management (IAM) role from a DB instance.</p>
     */
    removeRoleFromDBInstance(args: RemoveRoleFromDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveRoleFromDBInstanceCommandOutput>;
    removeRoleFromDBInstance(args: RemoveRoleFromDBInstanceCommandInput, cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void): void;
    removeRoleFromDBInstance(args: RemoveRoleFromDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveRoleFromDBInstanceCommandOutput) => void): void;
    /**
     * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
     */
    removeSourceIdentifierFromSubscription(args: RemoveSourceIdentifierFromSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
    removeSourceIdentifierFromSubscription(args: RemoveSourceIdentifierFromSubscriptionCommandInput, cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void): void;
    removeSourceIdentifierFromSubscription(args: RemoveSourceIdentifierFromSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from an Amazon RDS resource.</p>
     *          <p>For an overview on tagging an Amazon RDS resource,
     *           see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>
     *           in the <i>Amazon RDS User Guide.</i>
     *          </p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>
     *             Modifies the parameters of a DB cluster parameter group to the default value. To
     *             reset specific parameters submit a list of the following: <code>ParameterName</code>
     *             and <code>ApplyMethod</code>. To reset the
     *             entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code>
     *             and <code>ResetAllParameters</code> parameters.
     *         </p>
     *             <p>
     *             When resetting the entire group, dynamic parameters are updated immediately and static parameters
     *             are set to <code>pending-reboot</code> to take effect on the next DB instance restart
     *             or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every
     *             DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
     *
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ResetDBClusterParameterGroupCommandOutput>;
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void): void;
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the parameters of a DB parameter group to the engine/system default value.
     *             To reset specific parameters, provide a list of the following:
     *                 <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB
     *             parameter group, specify the <code>DBParameterGroup</code> name and
     *                 <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic
     *             parameters are updated immediately and static parameters are set to
     *                 <code>pending-reboot</code> to take effect on the next DB instance restart or
     *                 <code>RebootDBInstance</code> request. </p>
     */
    resetDBParameterGroup(args: ResetDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ResetDBParameterGroupCommandOutput>;
    resetDBParameterGroup(args: ResetDBParameterGroupCommandInput, cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void): void;
    resetDBParameterGroup(args: ResetDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket. Amazon RDS must be
     *         authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as
     *         described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.html">
     *             Migrating Data to an Amazon Aurora MySQL DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
     *         <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *         </note>
     */
    restoreDBClusterFromS3(args: RestoreDBClusterFromS3CommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBClusterFromS3CommandOutput>;
    restoreDBClusterFromS3(args: RestoreDBClusterFromS3CommandInput, cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void): void;
    restoreDBClusterFromS3(args: RestoreDBClusterFromS3CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBClusterFromS3CommandOutput) => void): void;
    /**
     * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
     *         <p>If a DB snapshot is specified, the target DB cluster is created from the source DB
     *             snapshot with a default configuration and default security group.</p>
     *          <p>If a DB cluster snapshot is specified, the target DB
     *             cluster is created from the source DB cluster restore point with the same configuration
     *             as the original source DB cluster. If you don't specify a security group, the new DB cluster
     *             is associated with the default security group.</p>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void): void;
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point
     *             in time before <code>LatestRestorableTime</code> for up to
     *                 <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the
     *             source DB cluster with the same configuration as the original DB cluster, except that
     *             the new DB cluster is created with the default DB security group. </p>
     *          <note>
     *             <p>This action only restores the DB cluster, not the DB instances for that DB
     *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
     *                 instances for the restored DB cluster, specifying the identifier of the restored DB
     *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
     *                 the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB
     *                 cluster is available.</p>
     *          </note>
     *          <p>For more information on Amazon Aurora, see
     *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
     *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *             <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void): void;
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void): void;
    /**
     * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with the most of original configuration with the default security group and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored AZ deployment and not a single-AZ deployment.</p>
     *          <p>If your intent is to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. Once you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you will replace the original DB instance with the DB instance created from the snapshot.</p>
     *          <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
     *       must be the ARN of the shared DB snapshot.</p>
     *          <note>
     *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p>
     *          </note>
     */
    restoreDBInstanceFromDBSnapshot(args: RestoreDBInstanceFromDBSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput>;
    restoreDBInstanceFromDBSnapshot(args: RestoreDBInstanceFromDBSnapshotCommandInput, cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void): void;
    restoreDBInstanceFromDBSnapshot(args: RestoreDBInstanceFromDBSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotCommandOutput) => void): void;
    /**
     * <p>Amazon Relational Database Service (Amazon RDS)
     *             supports importing MySQL databases by using backup files.
     *             You can create a backup of your on-premises database,
     *             store it on Amazon Simple Storage Service (Amazon S3),
     *             and then restore the backup file onto a new Amazon RDS DB instance running MySQL.
     *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a>
     *             in the <i>Amazon RDS User Guide.</i>
     *         </p>
     */
    restoreDBInstanceFromS3(args: RestoreDBInstanceFromS3CommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBInstanceFromS3CommandOutput>;
    restoreDBInstanceFromS3(args: RestoreDBInstanceFromS3CommandInput, cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void): void;
    restoreDBInstanceFromS3(args: RestoreDBInstanceFromS3CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBInstanceFromS3CommandOutput) => void): void;
    /**
     * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p>
     * 	        <p>The target database is created with most of the original configuration, but in a
     *             system-selected Availability Zone, with the default security group, the default subnet
     *             group, and the default DB parameter group. By default, the new DB instance is created as
     *             a single-AZ deployment except when the instance is a SQL Server instance that has an
     *             option group that is associated with mirroring; in this case, the instance becomes a
     *             mirrored deployment and not a single-AZ deployment.</p>
     *          <note>
     *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p>
     *          </note>
     */
    restoreDBInstanceToPointInTime(args: RestoreDBInstanceToPointInTimeCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBInstanceToPointInTimeCommandOutput>;
    restoreDBInstanceToPointInTime(args: RestoreDBInstanceToPointInTimeCommandInput, cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void): void;
    restoreDBInstanceToPointInTime(args: RestoreDBInstanceToPointInTimeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBInstanceToPointInTimeCommandOutput) => void): void;
    /**
     * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p>
     */
    revokeDBSecurityGroupIngress(args: RevokeDBSecurityGroupIngressCommandInput, options?: __HttpHandlerOptions): Promise<RevokeDBSecurityGroupIngressCommandOutput>;
    revokeDBSecurityGroupIngress(args: RevokeDBSecurityGroupIngressCommandInput, cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void): void;
    revokeDBSecurityGroupIngress(args: RevokeDBSecurityGroupIngressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeDBSecurityGroupIngressCommandOutput) => void): void;
    /**
     * <p>Starts a database activity stream to monitor activity on the database.
     *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
     *             in the <i>Amazon Aurora User Guide</i>.</p>
     */
    startActivityStream(args: StartActivityStreamCommandInput, options?: __HttpHandlerOptions): Promise<StartActivityStreamCommandOutput>;
    startActivityStream(args: StartActivityStreamCommandInput, cb: (err: any, data?: StartActivityStreamCommandOutput) => void): void;
    startActivityStream(args: StartActivityStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartActivityStreamCommandOutput) => void): void;
    /**
     * <p>Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster
     *        AWS CLI command, or the StopDBCluster action.</p>
     *
     *          <p>For more information, see
     *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
     *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    startDBCluster(args: StartDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<StartDBClusterCommandOutput>;
    startDBCluster(args: StartDBClusterCommandInput, cb: (err: any, data?: StartDBClusterCommandOutput) => void): void;
    startDBCluster(args: StartDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDBClusterCommandOutput) => void): void;
    /**
     * <p>
     *             Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action.
     *         </p>
     *
     *         <p>For more information, see
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html">
     *                 Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the
     *             <i>Amazon RDS User Guide.</i>
     *          </p>
     *
     *         <note>
     *             <p>
     *             This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.
     *             For Aurora DB clusters, use <code>StartDBCluster</code> instead.
     *           </p>
     *         </note>
     */
    startDBInstance(args: StartDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartDBInstanceCommandOutput>;
    startDBInstance(args: StartDBInstanceCommandInput, cb: (err: any, data?: StartDBInstanceCommandOutput) => void): void;
    startDBInstance(args: StartDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDBInstanceCommandOutput) => void): void;
    /**
     * <p>Stops a database activity stream that was started using the AWS console,
     *             the <code>start-activity-stream</code> AWS CLI command, or the <code>StartActivityStream</code> action.</p>
     *         <p>For more information, see
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
     *             in the <i>Amazon Aurora User Guide</i>.</p>
     */
    stopActivityStream(args: StopActivityStreamCommandInput, options?: __HttpHandlerOptions): Promise<StopActivityStreamCommandOutput>;
    stopActivityStream(args: StopActivityStreamCommandInput, cb: (err: any, data?: StopActivityStreamCommandOutput) => void): void;
    stopActivityStream(args: StopActivityStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopActivityStreamCommandOutput) => void): void;
    /**
     * <p>
     *        Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's
     *        metadata, including its endpoints and DB parameter groups. Aurora also
     *        retains the transaction logs so you can do a point-in-time restore if necessary.
     *      </p>
     *
     *          <p>For more information, see
     *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
     *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i>
     *          </p>
     *          <note>
     *            <p>This action only applies to Aurora DB clusters.</p>
     *          </note>
     */
    stopDBCluster(args: StopDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<StopDBClusterCommandOutput>;
    stopDBCluster(args: StopDBClusterCommandInput, cb: (err: any, data?: StopDBClusterCommandOutput) => void): void;
    stopDBCluster(args: StopDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDBClusterCommandOutput) => void): void;
    /**
     * <p>
     *             Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint,
     *             DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if
     *             necessary.
     *         </p>
     *
     *         <p>For more information, see
     *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html">
     *                 Stopping an Amazon RDS DB Instance Temporarily</a> in the
     *             <i>Amazon RDS User Guide.</i>
     *          </p>
     *
     *         <note>
     *             <p>
     *             This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.
     *             For Aurora clusters, use <code>StopDBCluster</code> instead.
     *           </p>
     *         </note>
     */
    stopDBInstance(args: StopDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopDBInstanceCommandOutput>;
    stopDBInstance(args: StopDBInstanceCommandInput, cb: (err: any, data?: StopDBInstanceCommandOutput) => void): void;
    stopDBInstance(args: StopDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDBInstanceCommandOutput) => void): void;
}
