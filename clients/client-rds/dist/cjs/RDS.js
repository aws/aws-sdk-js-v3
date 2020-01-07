"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RDSClient_1 = require("./RDSClient");
const AddRoleToDBClusterCommand_1 = require("./commands/AddRoleToDBClusterCommand");
const AddRoleToDBInstanceCommand_1 = require("./commands/AddRoleToDBInstanceCommand");
const AddSourceIdentifierToSubscriptionCommand_1 = require("./commands/AddSourceIdentifierToSubscriptionCommand");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const ApplyPendingMaintenanceActionCommand_1 = require("./commands/ApplyPendingMaintenanceActionCommand");
const AuthorizeDBSecurityGroupIngressCommand_1 = require("./commands/AuthorizeDBSecurityGroupIngressCommand");
const BacktrackDBClusterCommand_1 = require("./commands/BacktrackDBClusterCommand");
const CopyDBClusterParameterGroupCommand_1 = require("./commands/CopyDBClusterParameterGroupCommand");
const CopyDBClusterSnapshotCommand_1 = require("./commands/CopyDBClusterSnapshotCommand");
const CopyDBParameterGroupCommand_1 = require("./commands/CopyDBParameterGroupCommand");
const CopyDBSnapshotCommand_1 = require("./commands/CopyDBSnapshotCommand");
const CopyOptionGroupCommand_1 = require("./commands/CopyOptionGroupCommand");
const CreateCustomAvailabilityZoneCommand_1 = require("./commands/CreateCustomAvailabilityZoneCommand");
const CreateDBClusterCommand_1 = require("./commands/CreateDBClusterCommand");
const CreateDBClusterEndpointCommand_1 = require("./commands/CreateDBClusterEndpointCommand");
const CreateDBClusterParameterGroupCommand_1 = require("./commands/CreateDBClusterParameterGroupCommand");
const CreateDBClusterSnapshotCommand_1 = require("./commands/CreateDBClusterSnapshotCommand");
const CreateDBInstanceCommand_1 = require("./commands/CreateDBInstanceCommand");
const CreateDBInstanceReadReplicaCommand_1 = require("./commands/CreateDBInstanceReadReplicaCommand");
const CreateDBParameterGroupCommand_1 = require("./commands/CreateDBParameterGroupCommand");
const CreateDBProxyCommand_1 = require("./commands/CreateDBProxyCommand");
const CreateDBSecurityGroupCommand_1 = require("./commands/CreateDBSecurityGroupCommand");
const CreateDBSnapshotCommand_1 = require("./commands/CreateDBSnapshotCommand");
const CreateDBSubnetGroupCommand_1 = require("./commands/CreateDBSubnetGroupCommand");
const CreateEventSubscriptionCommand_1 = require("./commands/CreateEventSubscriptionCommand");
const CreateGlobalClusterCommand_1 = require("./commands/CreateGlobalClusterCommand");
const CreateOptionGroupCommand_1 = require("./commands/CreateOptionGroupCommand");
const DeleteCustomAvailabilityZoneCommand_1 = require("./commands/DeleteCustomAvailabilityZoneCommand");
const DeleteDBClusterCommand_1 = require("./commands/DeleteDBClusterCommand");
const DeleteDBClusterEndpointCommand_1 = require("./commands/DeleteDBClusterEndpointCommand");
const DeleteDBClusterParameterGroupCommand_1 = require("./commands/DeleteDBClusterParameterGroupCommand");
const DeleteDBClusterSnapshotCommand_1 = require("./commands/DeleteDBClusterSnapshotCommand");
const DeleteDBInstanceAutomatedBackupCommand_1 = require("./commands/DeleteDBInstanceAutomatedBackupCommand");
const DeleteDBInstanceCommand_1 = require("./commands/DeleteDBInstanceCommand");
const DeleteDBParameterGroupCommand_1 = require("./commands/DeleteDBParameterGroupCommand");
const DeleteDBProxyCommand_1 = require("./commands/DeleteDBProxyCommand");
const DeleteDBSecurityGroupCommand_1 = require("./commands/DeleteDBSecurityGroupCommand");
const DeleteDBSnapshotCommand_1 = require("./commands/DeleteDBSnapshotCommand");
const DeleteDBSubnetGroupCommand_1 = require("./commands/DeleteDBSubnetGroupCommand");
const DeleteEventSubscriptionCommand_1 = require("./commands/DeleteEventSubscriptionCommand");
const DeleteGlobalClusterCommand_1 = require("./commands/DeleteGlobalClusterCommand");
const DeleteInstallationMediaCommand_1 = require("./commands/DeleteInstallationMediaCommand");
const DeleteOptionGroupCommand_1 = require("./commands/DeleteOptionGroupCommand");
const DeregisterDBProxyTargetsCommand_1 = require("./commands/DeregisterDBProxyTargetsCommand");
const DescribeAccountAttributesCommand_1 = require("./commands/DescribeAccountAttributesCommand");
const DescribeCertificatesCommand_1 = require("./commands/DescribeCertificatesCommand");
const DescribeCustomAvailabilityZonesCommand_1 = require("./commands/DescribeCustomAvailabilityZonesCommand");
const DescribeDBClusterBacktracksCommand_1 = require("./commands/DescribeDBClusterBacktracksCommand");
const DescribeDBClusterEndpointsCommand_1 = require("./commands/DescribeDBClusterEndpointsCommand");
const DescribeDBClusterParameterGroupsCommand_1 = require("./commands/DescribeDBClusterParameterGroupsCommand");
const DescribeDBClusterParametersCommand_1 = require("./commands/DescribeDBClusterParametersCommand");
const DescribeDBClusterSnapshotAttributesCommand_1 = require("./commands/DescribeDBClusterSnapshotAttributesCommand");
const DescribeDBClusterSnapshotsCommand_1 = require("./commands/DescribeDBClusterSnapshotsCommand");
const DescribeDBClustersCommand_1 = require("./commands/DescribeDBClustersCommand");
const DescribeDBEngineVersionsCommand_1 = require("./commands/DescribeDBEngineVersionsCommand");
const DescribeDBInstanceAutomatedBackupsCommand_1 = require("./commands/DescribeDBInstanceAutomatedBackupsCommand");
const DescribeDBInstancesCommand_1 = require("./commands/DescribeDBInstancesCommand");
const DescribeDBLogFilesCommand_1 = require("./commands/DescribeDBLogFilesCommand");
const DescribeDBParameterGroupsCommand_1 = require("./commands/DescribeDBParameterGroupsCommand");
const DescribeDBParametersCommand_1 = require("./commands/DescribeDBParametersCommand");
const DescribeDBProxiesCommand_1 = require("./commands/DescribeDBProxiesCommand");
const DescribeDBProxyTargetGroupsCommand_1 = require("./commands/DescribeDBProxyTargetGroupsCommand");
const DescribeDBProxyTargetsCommand_1 = require("./commands/DescribeDBProxyTargetsCommand");
const DescribeDBSecurityGroupsCommand_1 = require("./commands/DescribeDBSecurityGroupsCommand");
const DescribeDBSnapshotAttributesCommand_1 = require("./commands/DescribeDBSnapshotAttributesCommand");
const DescribeDBSnapshotsCommand_1 = require("./commands/DescribeDBSnapshotsCommand");
const DescribeDBSubnetGroupsCommand_1 = require("./commands/DescribeDBSubnetGroupsCommand");
const DescribeEngineDefaultClusterParametersCommand_1 = require("./commands/DescribeEngineDefaultClusterParametersCommand");
const DescribeEngineDefaultParametersCommand_1 = require("./commands/DescribeEngineDefaultParametersCommand");
const DescribeEventCategoriesCommand_1 = require("./commands/DescribeEventCategoriesCommand");
const DescribeEventSubscriptionsCommand_1 = require("./commands/DescribeEventSubscriptionsCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeGlobalClustersCommand_1 = require("./commands/DescribeGlobalClustersCommand");
const DescribeInstallationMediaCommand_1 = require("./commands/DescribeInstallationMediaCommand");
const DescribeOptionGroupOptionsCommand_1 = require("./commands/DescribeOptionGroupOptionsCommand");
const DescribeOptionGroupsCommand_1 = require("./commands/DescribeOptionGroupsCommand");
const DescribeOrderableDBInstanceOptionsCommand_1 = require("./commands/DescribeOrderableDBInstanceOptionsCommand");
const DescribePendingMaintenanceActionsCommand_1 = require("./commands/DescribePendingMaintenanceActionsCommand");
const DescribeReservedDBInstancesCommand_1 = require("./commands/DescribeReservedDBInstancesCommand");
const DescribeReservedDBInstancesOfferingsCommand_1 = require("./commands/DescribeReservedDBInstancesOfferingsCommand");
const DescribeSourceRegionsCommand_1 = require("./commands/DescribeSourceRegionsCommand");
const DescribeValidDBInstanceModificationsCommand_1 = require("./commands/DescribeValidDBInstanceModificationsCommand");
const DownloadDBLogFilePortionCommand_1 = require("./commands/DownloadDBLogFilePortionCommand");
const FailoverDBClusterCommand_1 = require("./commands/FailoverDBClusterCommand");
const ImportInstallationMediaCommand_1 = require("./commands/ImportInstallationMediaCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ModifyCertificatesCommand_1 = require("./commands/ModifyCertificatesCommand");
const ModifyCurrentDBClusterCapacityCommand_1 = require("./commands/ModifyCurrentDBClusterCapacityCommand");
const ModifyDBClusterCommand_1 = require("./commands/ModifyDBClusterCommand");
const ModifyDBClusterEndpointCommand_1 = require("./commands/ModifyDBClusterEndpointCommand");
const ModifyDBClusterParameterGroupCommand_1 = require("./commands/ModifyDBClusterParameterGroupCommand");
const ModifyDBClusterSnapshotAttributeCommand_1 = require("./commands/ModifyDBClusterSnapshotAttributeCommand");
const ModifyDBInstanceCommand_1 = require("./commands/ModifyDBInstanceCommand");
const ModifyDBParameterGroupCommand_1 = require("./commands/ModifyDBParameterGroupCommand");
const ModifyDBProxyCommand_1 = require("./commands/ModifyDBProxyCommand");
const ModifyDBProxyTargetGroupCommand_1 = require("./commands/ModifyDBProxyTargetGroupCommand");
const ModifyDBSnapshotAttributeCommand_1 = require("./commands/ModifyDBSnapshotAttributeCommand");
const ModifyDBSnapshotCommand_1 = require("./commands/ModifyDBSnapshotCommand");
const ModifyDBSubnetGroupCommand_1 = require("./commands/ModifyDBSubnetGroupCommand");
const ModifyEventSubscriptionCommand_1 = require("./commands/ModifyEventSubscriptionCommand");
const ModifyGlobalClusterCommand_1 = require("./commands/ModifyGlobalClusterCommand");
const ModifyOptionGroupCommand_1 = require("./commands/ModifyOptionGroupCommand");
const PromoteReadReplicaCommand_1 = require("./commands/PromoteReadReplicaCommand");
const PromoteReadReplicaDBClusterCommand_1 = require("./commands/PromoteReadReplicaDBClusterCommand");
const PurchaseReservedDBInstancesOfferingCommand_1 = require("./commands/PurchaseReservedDBInstancesOfferingCommand");
const RebootDBInstanceCommand_1 = require("./commands/RebootDBInstanceCommand");
const RegisterDBProxyTargetsCommand_1 = require("./commands/RegisterDBProxyTargetsCommand");
const RemoveFromGlobalClusterCommand_1 = require("./commands/RemoveFromGlobalClusterCommand");
const RemoveRoleFromDBClusterCommand_1 = require("./commands/RemoveRoleFromDBClusterCommand");
const RemoveRoleFromDBInstanceCommand_1 = require("./commands/RemoveRoleFromDBInstanceCommand");
const RemoveSourceIdentifierFromSubscriptionCommand_1 = require("./commands/RemoveSourceIdentifierFromSubscriptionCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const ResetDBClusterParameterGroupCommand_1 = require("./commands/ResetDBClusterParameterGroupCommand");
const ResetDBParameterGroupCommand_1 = require("./commands/ResetDBParameterGroupCommand");
const RestoreDBClusterFromS3Command_1 = require("./commands/RestoreDBClusterFromS3Command");
const RestoreDBClusterFromSnapshotCommand_1 = require("./commands/RestoreDBClusterFromSnapshotCommand");
const RestoreDBClusterToPointInTimeCommand_1 = require("./commands/RestoreDBClusterToPointInTimeCommand");
const RestoreDBInstanceFromDBSnapshotCommand_1 = require("./commands/RestoreDBInstanceFromDBSnapshotCommand");
const RestoreDBInstanceFromS3Command_1 = require("./commands/RestoreDBInstanceFromS3Command");
const RestoreDBInstanceToPointInTimeCommand_1 = require("./commands/RestoreDBInstanceToPointInTimeCommand");
const RevokeDBSecurityGroupIngressCommand_1 = require("./commands/RevokeDBSecurityGroupIngressCommand");
const StartActivityStreamCommand_1 = require("./commands/StartActivityStreamCommand");
const StartDBClusterCommand_1 = require("./commands/StartDBClusterCommand");
const StartDBInstanceCommand_1 = require("./commands/StartDBInstanceCommand");
const StopActivityStreamCommand_1 = require("./commands/StopActivityStreamCommand");
const StopDBClusterCommand_1 = require("./commands/StopDBClusterCommand");
const StopDBInstanceCommand_1 = require("./commands/StopDBInstanceCommand");
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
class RDS extends RDSClient_1.RDSClient {
    addRoleToDBCluster(args, optionsOrCb, cb) {
        const command = new AddRoleToDBClusterCommand_1.AddRoleToDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addRoleToDBInstance(args, optionsOrCb, cb) {
        const command = new AddRoleToDBInstanceCommand_1.AddRoleToDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addSourceIdentifierToSubscription(args, optionsOrCb, cb) {
        const command = new AddSourceIdentifierToSubscriptionCommand_1.AddSourceIdentifierToSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addTagsToResource(args, optionsOrCb, cb) {
        const command = new AddTagsToResourceCommand_1.AddTagsToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    applyPendingMaintenanceAction(args, optionsOrCb, cb) {
        const command = new ApplyPendingMaintenanceActionCommand_1.ApplyPendingMaintenanceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    authorizeDBSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new AuthorizeDBSecurityGroupIngressCommand_1.AuthorizeDBSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    backtrackDBCluster(args, optionsOrCb, cb) {
        const command = new BacktrackDBClusterCommand_1.BacktrackDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyDBClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new CopyDBClusterParameterGroupCommand_1.CopyDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyDBClusterSnapshot(args, optionsOrCb, cb) {
        const command = new CopyDBClusterSnapshotCommand_1.CopyDBClusterSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyDBParameterGroup(args, optionsOrCb, cb) {
        const command = new CopyDBParameterGroupCommand_1.CopyDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyDBSnapshot(args, optionsOrCb, cb) {
        const command = new CopyDBSnapshotCommand_1.CopyDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyOptionGroup(args, optionsOrCb, cb) {
        const command = new CopyOptionGroupCommand_1.CopyOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomAvailabilityZone(args, optionsOrCb, cb) {
        const command = new CreateCustomAvailabilityZoneCommand_1.CreateCustomAvailabilityZoneCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBCluster(args, optionsOrCb, cb) {
        const command = new CreateDBClusterCommand_1.CreateDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBClusterEndpoint(args, optionsOrCb, cb) {
        const command = new CreateDBClusterEndpointCommand_1.CreateDBClusterEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new CreateDBClusterParameterGroupCommand_1.CreateDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBClusterSnapshot(args, optionsOrCb, cb) {
        const command = new CreateDBClusterSnapshotCommand_1.CreateDBClusterSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBInstance(args, optionsOrCb, cb) {
        const command = new CreateDBInstanceCommand_1.CreateDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBInstanceReadReplica(args, optionsOrCb, cb) {
        const command = new CreateDBInstanceReadReplicaCommand_1.CreateDBInstanceReadReplicaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBParameterGroup(args, optionsOrCb, cb) {
        const command = new CreateDBParameterGroupCommand_1.CreateDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBProxy(args, optionsOrCb, cb) {
        const command = new CreateDBProxyCommand_1.CreateDBProxyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBSecurityGroup(args, optionsOrCb, cb) {
        const command = new CreateDBSecurityGroupCommand_1.CreateDBSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBSnapshot(args, optionsOrCb, cb) {
        const command = new CreateDBSnapshotCommand_1.CreateDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDBSubnetGroup(args, optionsOrCb, cb) {
        const command = new CreateDBSubnetGroupCommand_1.CreateDBSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEventSubscription(args, optionsOrCb, cb) {
        const command = new CreateEventSubscriptionCommand_1.CreateEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGlobalCluster(args, optionsOrCb, cb) {
        const command = new CreateGlobalClusterCommand_1.CreateGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createOptionGroup(args, optionsOrCb, cb) {
        const command = new CreateOptionGroupCommand_1.CreateOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomAvailabilityZone(args, optionsOrCb, cb) {
        const command = new DeleteCustomAvailabilityZoneCommand_1.DeleteCustomAvailabilityZoneCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBCluster(args, optionsOrCb, cb) {
        const command = new DeleteDBClusterCommand_1.DeleteDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBClusterEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteDBClusterEndpointCommand_1.DeleteDBClusterEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new DeleteDBClusterParameterGroupCommand_1.DeleteDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBClusterSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteDBClusterSnapshotCommand_1.DeleteDBClusterSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBInstance(args, optionsOrCb, cb) {
        const command = new DeleteDBInstanceCommand_1.DeleteDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBInstanceAutomatedBackup(args, optionsOrCb, cb) {
        const command = new DeleteDBInstanceAutomatedBackupCommand_1.DeleteDBInstanceAutomatedBackupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBParameterGroup(args, optionsOrCb, cb) {
        const command = new DeleteDBParameterGroupCommand_1.DeleteDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBProxy(args, optionsOrCb, cb) {
        const command = new DeleteDBProxyCommand_1.DeleteDBProxyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBSecurityGroup(args, optionsOrCb, cb) {
        const command = new DeleteDBSecurityGroupCommand_1.DeleteDBSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteDBSnapshotCommand_1.DeleteDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDBSubnetGroup(args, optionsOrCb, cb) {
        const command = new DeleteDBSubnetGroupCommand_1.DeleteDBSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEventSubscription(args, optionsOrCb, cb) {
        const command = new DeleteEventSubscriptionCommand_1.DeleteEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGlobalCluster(args, optionsOrCb, cb) {
        const command = new DeleteGlobalClusterCommand_1.DeleteGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInstallationMedia(args, optionsOrCb, cb) {
        const command = new DeleteInstallationMediaCommand_1.DeleteInstallationMediaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteOptionGroup(args, optionsOrCb, cb) {
        const command = new DeleteOptionGroupCommand_1.DeleteOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterDBProxyTargets(args, optionsOrCb, cb) {
        const command = new DeregisterDBProxyTargetsCommand_1.DeregisterDBProxyTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAccountAttributes(args, optionsOrCb, cb) {
        const command = new DescribeAccountAttributesCommand_1.DescribeAccountAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCertificates(args, optionsOrCb, cb) {
        const command = new DescribeCertificatesCommand_1.DescribeCertificatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCustomAvailabilityZones(args, optionsOrCb, cb) {
        const command = new DescribeCustomAvailabilityZonesCommand_1.DescribeCustomAvailabilityZonesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBClusterBacktracks(args, optionsOrCb, cb) {
        const command = new DescribeDBClusterBacktracksCommand_1.DescribeDBClusterBacktracksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBClusterEndpoints(args, optionsOrCb, cb) {
        const command = new DescribeDBClusterEndpointsCommand_1.DescribeDBClusterEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBClusterParameterGroups(args, optionsOrCb, cb) {
        const command = new DescribeDBClusterParameterGroupsCommand_1.DescribeDBClusterParameterGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBClusterParameters(args, optionsOrCb, cb) {
        const command = new DescribeDBClusterParametersCommand_1.DescribeDBClusterParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBClusterSnapshotAttributes(args, optionsOrCb, cb) {
        const command = new DescribeDBClusterSnapshotAttributesCommand_1.DescribeDBClusterSnapshotAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBClusterSnapshots(args, optionsOrCb, cb) {
        const command = new DescribeDBClusterSnapshotsCommand_1.DescribeDBClusterSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBClusters(args, optionsOrCb, cb) {
        const command = new DescribeDBClustersCommand_1.DescribeDBClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBEngineVersions(args, optionsOrCb, cb) {
        const command = new DescribeDBEngineVersionsCommand_1.DescribeDBEngineVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBInstanceAutomatedBackups(args, optionsOrCb, cb) {
        const command = new DescribeDBInstanceAutomatedBackupsCommand_1.DescribeDBInstanceAutomatedBackupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBInstances(args, optionsOrCb, cb) {
        const command = new DescribeDBInstancesCommand_1.DescribeDBInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBLogFiles(args, optionsOrCb, cb) {
        const command = new DescribeDBLogFilesCommand_1.DescribeDBLogFilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBParameterGroups(args, optionsOrCb, cb) {
        const command = new DescribeDBParameterGroupsCommand_1.DescribeDBParameterGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBParameters(args, optionsOrCb, cb) {
        const command = new DescribeDBParametersCommand_1.DescribeDBParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBProxies(args, optionsOrCb, cb) {
        const command = new DescribeDBProxiesCommand_1.DescribeDBProxiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBProxyTargetGroups(args, optionsOrCb, cb) {
        const command = new DescribeDBProxyTargetGroupsCommand_1.DescribeDBProxyTargetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBProxyTargets(args, optionsOrCb, cb) {
        const command = new DescribeDBProxyTargetsCommand_1.DescribeDBProxyTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBSecurityGroups(args, optionsOrCb, cb) {
        const command = new DescribeDBSecurityGroupsCommand_1.DescribeDBSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBSnapshotAttributes(args, optionsOrCb, cb) {
        const command = new DescribeDBSnapshotAttributesCommand_1.DescribeDBSnapshotAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBSnapshots(args, optionsOrCb, cb) {
        const command = new DescribeDBSnapshotsCommand_1.DescribeDBSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDBSubnetGroups(args, optionsOrCb, cb) {
        const command = new DescribeDBSubnetGroupsCommand_1.DescribeDBSubnetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEngineDefaultClusterParameters(args, optionsOrCb, cb) {
        const command = new DescribeEngineDefaultClusterParametersCommand_1.DescribeEngineDefaultClusterParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEngineDefaultParameters(args, optionsOrCb, cb) {
        const command = new DescribeEngineDefaultParametersCommand_1.DescribeEngineDefaultParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventCategories(args, optionsOrCb, cb) {
        const command = new DescribeEventCategoriesCommand_1.DescribeEventCategoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventSubscriptions(args, optionsOrCb, cb) {
        const command = new DescribeEventSubscriptionsCommand_1.DescribeEventSubscriptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEvents(args, optionsOrCb, cb) {
        const command = new DescribeEventsCommand_1.DescribeEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGlobalClusters(args, optionsOrCb, cb) {
        const command = new DescribeGlobalClustersCommand_1.DescribeGlobalClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstallationMedia(args, optionsOrCb, cb) {
        const command = new DescribeInstallationMediaCommand_1.DescribeInstallationMediaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOptionGroupOptions(args, optionsOrCb, cb) {
        const command = new DescribeOptionGroupOptionsCommand_1.DescribeOptionGroupOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOptionGroups(args, optionsOrCb, cb) {
        const command = new DescribeOptionGroupsCommand_1.DescribeOptionGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOrderableDBInstanceOptions(args, optionsOrCb, cb) {
        const command = new DescribeOrderableDBInstanceOptionsCommand_1.DescribeOrderableDBInstanceOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePendingMaintenanceActions(args, optionsOrCb, cb) {
        const command = new DescribePendingMaintenanceActionsCommand_1.DescribePendingMaintenanceActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedDBInstances(args, optionsOrCb, cb) {
        const command = new DescribeReservedDBInstancesCommand_1.DescribeReservedDBInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedDBInstancesOfferings(args, optionsOrCb, cb) {
        const command = new DescribeReservedDBInstancesOfferingsCommand_1.DescribeReservedDBInstancesOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSourceRegions(args, optionsOrCb, cb) {
        const command = new DescribeSourceRegionsCommand_1.DescribeSourceRegionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeValidDBInstanceModifications(args, optionsOrCb, cb) {
        const command = new DescribeValidDBInstanceModificationsCommand_1.DescribeValidDBInstanceModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    downloadDBLogFilePortion(args, optionsOrCb, cb) {
        const command = new DownloadDBLogFilePortionCommand_1.DownloadDBLogFilePortionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    failoverDBCluster(args, optionsOrCb, cb) {
        const command = new FailoverDBClusterCommand_1.FailoverDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importInstallationMedia(args, optionsOrCb, cb) {
        const command = new ImportInstallationMediaCommand_1.ImportInstallationMediaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyCertificates(args, optionsOrCb, cb) {
        const command = new ModifyCertificatesCommand_1.ModifyCertificatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyCurrentDBClusterCapacity(args, optionsOrCb, cb) {
        const command = new ModifyCurrentDBClusterCapacityCommand_1.ModifyCurrentDBClusterCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBCluster(args, optionsOrCb, cb) {
        const command = new ModifyDBClusterCommand_1.ModifyDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBClusterEndpoint(args, optionsOrCb, cb) {
        const command = new ModifyDBClusterEndpointCommand_1.ModifyDBClusterEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new ModifyDBClusterParameterGroupCommand_1.ModifyDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBClusterSnapshotAttribute(args, optionsOrCb, cb) {
        const command = new ModifyDBClusterSnapshotAttributeCommand_1.ModifyDBClusterSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBInstance(args, optionsOrCb, cb) {
        const command = new ModifyDBInstanceCommand_1.ModifyDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBParameterGroup(args, optionsOrCb, cb) {
        const command = new ModifyDBParameterGroupCommand_1.ModifyDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBProxy(args, optionsOrCb, cb) {
        const command = new ModifyDBProxyCommand_1.ModifyDBProxyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBProxyTargetGroup(args, optionsOrCb, cb) {
        const command = new ModifyDBProxyTargetGroupCommand_1.ModifyDBProxyTargetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBSnapshot(args, optionsOrCb, cb) {
        const command = new ModifyDBSnapshotCommand_1.ModifyDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBSnapshotAttribute(args, optionsOrCb, cb) {
        const command = new ModifyDBSnapshotAttributeCommand_1.ModifyDBSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDBSubnetGroup(args, optionsOrCb, cb) {
        const command = new ModifyDBSubnetGroupCommand_1.ModifyDBSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyEventSubscription(args, optionsOrCb, cb) {
        const command = new ModifyEventSubscriptionCommand_1.ModifyEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyGlobalCluster(args, optionsOrCb, cb) {
        const command = new ModifyGlobalClusterCommand_1.ModifyGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyOptionGroup(args, optionsOrCb, cb) {
        const command = new ModifyOptionGroupCommand_1.ModifyOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    promoteReadReplica(args, optionsOrCb, cb) {
        const command = new PromoteReadReplicaCommand_1.PromoteReadReplicaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    promoteReadReplicaDBCluster(args, optionsOrCb, cb) {
        const command = new PromoteReadReplicaDBClusterCommand_1.PromoteReadReplicaDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseReservedDBInstancesOffering(args, optionsOrCb, cb) {
        const command = new PurchaseReservedDBInstancesOfferingCommand_1.PurchaseReservedDBInstancesOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rebootDBInstance(args, optionsOrCb, cb) {
        const command = new RebootDBInstanceCommand_1.RebootDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerDBProxyTargets(args, optionsOrCb, cb) {
        const command = new RegisterDBProxyTargetsCommand_1.RegisterDBProxyTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeFromGlobalCluster(args, optionsOrCb, cb) {
        const command = new RemoveFromGlobalClusterCommand_1.RemoveFromGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeRoleFromDBCluster(args, optionsOrCb, cb) {
        const command = new RemoveRoleFromDBClusterCommand_1.RemoveRoleFromDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeRoleFromDBInstance(args, optionsOrCb, cb) {
        const command = new RemoveRoleFromDBInstanceCommand_1.RemoveRoleFromDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeSourceIdentifierFromSubscription(args, optionsOrCb, cb) {
        const command = new RemoveSourceIdentifierFromSubscriptionCommand_1.RemoveSourceIdentifierFromSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTagsFromResource(args, optionsOrCb, cb) {
        const command = new RemoveTagsFromResourceCommand_1.RemoveTagsFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetDBClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new ResetDBClusterParameterGroupCommand_1.ResetDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetDBParameterGroup(args, optionsOrCb, cb) {
        const command = new ResetDBParameterGroupCommand_1.ResetDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreDBClusterFromS3(args, optionsOrCb, cb) {
        const command = new RestoreDBClusterFromS3Command_1.RestoreDBClusterFromS3Command(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreDBClusterFromSnapshot(args, optionsOrCb, cb) {
        const command = new RestoreDBClusterFromSnapshotCommand_1.RestoreDBClusterFromSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreDBClusterToPointInTime(args, optionsOrCb, cb) {
        const command = new RestoreDBClusterToPointInTimeCommand_1.RestoreDBClusterToPointInTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreDBInstanceFromDBSnapshot(args, optionsOrCb, cb) {
        const command = new RestoreDBInstanceFromDBSnapshotCommand_1.RestoreDBInstanceFromDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreDBInstanceFromS3(args, optionsOrCb, cb) {
        const command = new RestoreDBInstanceFromS3Command_1.RestoreDBInstanceFromS3Command(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreDBInstanceToPointInTime(args, optionsOrCb, cb) {
        const command = new RestoreDBInstanceToPointInTimeCommand_1.RestoreDBInstanceToPointInTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    revokeDBSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new RevokeDBSecurityGroupIngressCommand_1.RevokeDBSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startActivityStream(args, optionsOrCb, cb) {
        const command = new StartActivityStreamCommand_1.StartActivityStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startDBCluster(args, optionsOrCb, cb) {
        const command = new StartDBClusterCommand_1.StartDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startDBInstance(args, optionsOrCb, cb) {
        const command = new StartDBInstanceCommand_1.StartDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopActivityStream(args, optionsOrCb, cb) {
        const command = new StopActivityStreamCommand_1.StopActivityStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopDBCluster(args, optionsOrCb, cb) {
        const command = new StopDBClusterCommand_1.StopDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopDBInstance(args, optionsOrCb, cb) {
        const command = new StopDBInstanceCommand_1.StopDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.RDS = RDS;
//# sourceMappingURL=RDS.js.map