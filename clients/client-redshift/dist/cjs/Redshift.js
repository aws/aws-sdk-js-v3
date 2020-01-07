"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RedshiftClient_1 = require("./RedshiftClient");
const AcceptReservedNodeExchangeCommand_1 = require("./commands/AcceptReservedNodeExchangeCommand");
const AuthorizeClusterSecurityGroupIngressCommand_1 = require("./commands/AuthorizeClusterSecurityGroupIngressCommand");
const AuthorizeSnapshotAccessCommand_1 = require("./commands/AuthorizeSnapshotAccessCommand");
const BatchDeleteClusterSnapshotsCommand_1 = require("./commands/BatchDeleteClusterSnapshotsCommand");
const BatchModifyClusterSnapshotsCommand_1 = require("./commands/BatchModifyClusterSnapshotsCommand");
const CancelResizeCommand_1 = require("./commands/CancelResizeCommand");
const CopyClusterSnapshotCommand_1 = require("./commands/CopyClusterSnapshotCommand");
const CreateClusterCommand_1 = require("./commands/CreateClusterCommand");
const CreateClusterParameterGroupCommand_1 = require("./commands/CreateClusterParameterGroupCommand");
const CreateClusterSecurityGroupCommand_1 = require("./commands/CreateClusterSecurityGroupCommand");
const CreateClusterSnapshotCommand_1 = require("./commands/CreateClusterSnapshotCommand");
const CreateClusterSubnetGroupCommand_1 = require("./commands/CreateClusterSubnetGroupCommand");
const CreateEventSubscriptionCommand_1 = require("./commands/CreateEventSubscriptionCommand");
const CreateHsmClientCertificateCommand_1 = require("./commands/CreateHsmClientCertificateCommand");
const CreateHsmConfigurationCommand_1 = require("./commands/CreateHsmConfigurationCommand");
const CreateScheduledActionCommand_1 = require("./commands/CreateScheduledActionCommand");
const CreateSnapshotCopyGrantCommand_1 = require("./commands/CreateSnapshotCopyGrantCommand");
const CreateSnapshotScheduleCommand_1 = require("./commands/CreateSnapshotScheduleCommand");
const CreateTagsCommand_1 = require("./commands/CreateTagsCommand");
const DeleteClusterCommand_1 = require("./commands/DeleteClusterCommand");
const DeleteClusterParameterGroupCommand_1 = require("./commands/DeleteClusterParameterGroupCommand");
const DeleteClusterSecurityGroupCommand_1 = require("./commands/DeleteClusterSecurityGroupCommand");
const DeleteClusterSnapshotCommand_1 = require("./commands/DeleteClusterSnapshotCommand");
const DeleteClusterSubnetGroupCommand_1 = require("./commands/DeleteClusterSubnetGroupCommand");
const DeleteEventSubscriptionCommand_1 = require("./commands/DeleteEventSubscriptionCommand");
const DeleteHsmClientCertificateCommand_1 = require("./commands/DeleteHsmClientCertificateCommand");
const DeleteHsmConfigurationCommand_1 = require("./commands/DeleteHsmConfigurationCommand");
const DeleteScheduledActionCommand_1 = require("./commands/DeleteScheduledActionCommand");
const DeleteSnapshotCopyGrantCommand_1 = require("./commands/DeleteSnapshotCopyGrantCommand");
const DeleteSnapshotScheduleCommand_1 = require("./commands/DeleteSnapshotScheduleCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DescribeAccountAttributesCommand_1 = require("./commands/DescribeAccountAttributesCommand");
const DescribeClusterDbRevisionsCommand_1 = require("./commands/DescribeClusterDbRevisionsCommand");
const DescribeClusterParameterGroupsCommand_1 = require("./commands/DescribeClusterParameterGroupsCommand");
const DescribeClusterParametersCommand_1 = require("./commands/DescribeClusterParametersCommand");
const DescribeClusterSecurityGroupsCommand_1 = require("./commands/DescribeClusterSecurityGroupsCommand");
const DescribeClusterSnapshotsCommand_1 = require("./commands/DescribeClusterSnapshotsCommand");
const DescribeClusterSubnetGroupsCommand_1 = require("./commands/DescribeClusterSubnetGroupsCommand");
const DescribeClusterTracksCommand_1 = require("./commands/DescribeClusterTracksCommand");
const DescribeClusterVersionsCommand_1 = require("./commands/DescribeClusterVersionsCommand");
const DescribeClustersCommand_1 = require("./commands/DescribeClustersCommand");
const DescribeDefaultClusterParametersCommand_1 = require("./commands/DescribeDefaultClusterParametersCommand");
const DescribeEventCategoriesCommand_1 = require("./commands/DescribeEventCategoriesCommand");
const DescribeEventSubscriptionsCommand_1 = require("./commands/DescribeEventSubscriptionsCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeHsmClientCertificatesCommand_1 = require("./commands/DescribeHsmClientCertificatesCommand");
const DescribeHsmConfigurationsCommand_1 = require("./commands/DescribeHsmConfigurationsCommand");
const DescribeLoggingStatusCommand_1 = require("./commands/DescribeLoggingStatusCommand");
const DescribeNodeConfigurationOptionsCommand_1 = require("./commands/DescribeNodeConfigurationOptionsCommand");
const DescribeOrderableClusterOptionsCommand_1 = require("./commands/DescribeOrderableClusterOptionsCommand");
const DescribeReservedNodeOfferingsCommand_1 = require("./commands/DescribeReservedNodeOfferingsCommand");
const DescribeReservedNodesCommand_1 = require("./commands/DescribeReservedNodesCommand");
const DescribeResizeCommand_1 = require("./commands/DescribeResizeCommand");
const DescribeScheduledActionsCommand_1 = require("./commands/DescribeScheduledActionsCommand");
const DescribeSnapshotCopyGrantsCommand_1 = require("./commands/DescribeSnapshotCopyGrantsCommand");
const DescribeSnapshotSchedulesCommand_1 = require("./commands/DescribeSnapshotSchedulesCommand");
const DescribeStorageCommand_1 = require("./commands/DescribeStorageCommand");
const DescribeTableRestoreStatusCommand_1 = require("./commands/DescribeTableRestoreStatusCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DisableLoggingCommand_1 = require("./commands/DisableLoggingCommand");
const DisableSnapshotCopyCommand_1 = require("./commands/DisableSnapshotCopyCommand");
const EnableLoggingCommand_1 = require("./commands/EnableLoggingCommand");
const EnableSnapshotCopyCommand_1 = require("./commands/EnableSnapshotCopyCommand");
const GetClusterCredentialsCommand_1 = require("./commands/GetClusterCredentialsCommand");
const GetReservedNodeExchangeOfferingsCommand_1 = require("./commands/GetReservedNodeExchangeOfferingsCommand");
const ModifyClusterCommand_1 = require("./commands/ModifyClusterCommand");
const ModifyClusterDbRevisionCommand_1 = require("./commands/ModifyClusterDbRevisionCommand");
const ModifyClusterIamRolesCommand_1 = require("./commands/ModifyClusterIamRolesCommand");
const ModifyClusterMaintenanceCommand_1 = require("./commands/ModifyClusterMaintenanceCommand");
const ModifyClusterParameterGroupCommand_1 = require("./commands/ModifyClusterParameterGroupCommand");
const ModifyClusterSnapshotCommand_1 = require("./commands/ModifyClusterSnapshotCommand");
const ModifyClusterSnapshotScheduleCommand_1 = require("./commands/ModifyClusterSnapshotScheduleCommand");
const ModifyClusterSubnetGroupCommand_1 = require("./commands/ModifyClusterSubnetGroupCommand");
const ModifyEventSubscriptionCommand_1 = require("./commands/ModifyEventSubscriptionCommand");
const ModifyScheduledActionCommand_1 = require("./commands/ModifyScheduledActionCommand");
const ModifySnapshotCopyRetentionPeriodCommand_1 = require("./commands/ModifySnapshotCopyRetentionPeriodCommand");
const ModifySnapshotScheduleCommand_1 = require("./commands/ModifySnapshotScheduleCommand");
const PurchaseReservedNodeOfferingCommand_1 = require("./commands/PurchaseReservedNodeOfferingCommand");
const RebootClusterCommand_1 = require("./commands/RebootClusterCommand");
const ResetClusterParameterGroupCommand_1 = require("./commands/ResetClusterParameterGroupCommand");
const ResizeClusterCommand_1 = require("./commands/ResizeClusterCommand");
const RestoreFromClusterSnapshotCommand_1 = require("./commands/RestoreFromClusterSnapshotCommand");
const RestoreTableFromClusterSnapshotCommand_1 = require("./commands/RestoreTableFromClusterSnapshotCommand");
const RevokeClusterSecurityGroupIngressCommand_1 = require("./commands/RevokeClusterSecurityGroupIngressCommand");
const RevokeSnapshotAccessCommand_1 = require("./commands/RevokeSnapshotAccessCommand");
const RotateEncryptionKeyCommand_1 = require("./commands/RotateEncryptionKeyCommand");
/**
 * <fullname>Amazon Redshift</fullname>
 *         <p>
 *             <b>Overview</b>
 *         </p>
 *         <p>This is an interface reference for Amazon Redshift. It contains documentation for one of
 *             the programming or command line interfaces you can use to manage Amazon Redshift clusters.
 *             Note that Amazon Redshift is asynchronous, which means that some interfaces may require
 *             techniques, such as polling or asynchronous callback handlers, to determine when a
 *             command has been applied. In this reference, the parameter descriptions indicate whether
 *             a change is applied immediately, on the next instance reboot, or during the next
 *             maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to
 *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the
 *                 Amazon Redshift Management Interfaces</a>.</p>
 *         <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data
 *             warehouse: provisioning capacity, monitoring and backing up the cluster, and applying
 *             patches and upgrades to the Amazon Redshift engine. You can focus on using your data to
 *             acquire new insights for your business and customers.</p>
 *         <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading
 *             the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p>
 *
 *         <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design,
 *             build, query, and maintain the databases that make up your data warehouse. </p>
 */
class Redshift extends RedshiftClient_1.RedshiftClient {
    acceptReservedNodeExchange(args, optionsOrCb, cb) {
        const command = new AcceptReservedNodeExchangeCommand_1.AcceptReservedNodeExchangeCommand(args);
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
    authorizeClusterSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new AuthorizeClusterSecurityGroupIngressCommand_1.AuthorizeClusterSecurityGroupIngressCommand(args);
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
    authorizeSnapshotAccess(args, optionsOrCb, cb) {
        const command = new AuthorizeSnapshotAccessCommand_1.AuthorizeSnapshotAccessCommand(args);
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
    batchDeleteClusterSnapshots(args, optionsOrCb, cb) {
        const command = new BatchDeleteClusterSnapshotsCommand_1.BatchDeleteClusterSnapshotsCommand(args);
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
    batchModifyClusterSnapshots(args, optionsOrCb, cb) {
        const command = new BatchModifyClusterSnapshotsCommand_1.BatchModifyClusterSnapshotsCommand(args);
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
    cancelResize(args, optionsOrCb, cb) {
        const command = new CancelResizeCommand_1.CancelResizeCommand(args);
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
    copyClusterSnapshot(args, optionsOrCb, cb) {
        const command = new CopyClusterSnapshotCommand_1.CopyClusterSnapshotCommand(args);
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
    createCluster(args, optionsOrCb, cb) {
        const command = new CreateClusterCommand_1.CreateClusterCommand(args);
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
    createClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new CreateClusterParameterGroupCommand_1.CreateClusterParameterGroupCommand(args);
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
    createClusterSecurityGroup(args, optionsOrCb, cb) {
        const command = new CreateClusterSecurityGroupCommand_1.CreateClusterSecurityGroupCommand(args);
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
    createClusterSnapshot(args, optionsOrCb, cb) {
        const command = new CreateClusterSnapshotCommand_1.CreateClusterSnapshotCommand(args);
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
    createClusterSubnetGroup(args, optionsOrCb, cb) {
        const command = new CreateClusterSubnetGroupCommand_1.CreateClusterSubnetGroupCommand(args);
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
    createHsmClientCertificate(args, optionsOrCb, cb) {
        const command = new CreateHsmClientCertificateCommand_1.CreateHsmClientCertificateCommand(args);
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
    createHsmConfiguration(args, optionsOrCb, cb) {
        const command = new CreateHsmConfigurationCommand_1.CreateHsmConfigurationCommand(args);
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
    createScheduledAction(args, optionsOrCb, cb) {
        const command = new CreateScheduledActionCommand_1.CreateScheduledActionCommand(args);
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
    createSnapshotCopyGrant(args, optionsOrCb, cb) {
        const command = new CreateSnapshotCopyGrantCommand_1.CreateSnapshotCopyGrantCommand(args);
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
    createSnapshotSchedule(args, optionsOrCb, cb) {
        const command = new CreateSnapshotScheduleCommand_1.CreateSnapshotScheduleCommand(args);
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
    createTags(args, optionsOrCb, cb) {
        const command = new CreateTagsCommand_1.CreateTagsCommand(args);
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
    deleteCluster(args, optionsOrCb, cb) {
        const command = new DeleteClusterCommand_1.DeleteClusterCommand(args);
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
    deleteClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new DeleteClusterParameterGroupCommand_1.DeleteClusterParameterGroupCommand(args);
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
    deleteClusterSecurityGroup(args, optionsOrCb, cb) {
        const command = new DeleteClusterSecurityGroupCommand_1.DeleteClusterSecurityGroupCommand(args);
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
    deleteClusterSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteClusterSnapshotCommand_1.DeleteClusterSnapshotCommand(args);
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
    deleteClusterSubnetGroup(args, optionsOrCb, cb) {
        const command = new DeleteClusterSubnetGroupCommand_1.DeleteClusterSubnetGroupCommand(args);
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
    deleteHsmClientCertificate(args, optionsOrCb, cb) {
        const command = new DeleteHsmClientCertificateCommand_1.DeleteHsmClientCertificateCommand(args);
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
    deleteHsmConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteHsmConfigurationCommand_1.DeleteHsmConfigurationCommand(args);
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
    deleteScheduledAction(args, optionsOrCb, cb) {
        const command = new DeleteScheduledActionCommand_1.DeleteScheduledActionCommand(args);
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
    deleteSnapshotCopyGrant(args, optionsOrCb, cb) {
        const command = new DeleteSnapshotCopyGrantCommand_1.DeleteSnapshotCopyGrantCommand(args);
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
    deleteSnapshotSchedule(args, optionsOrCb, cb) {
        const command = new DeleteSnapshotScheduleCommand_1.DeleteSnapshotScheduleCommand(args);
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
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
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
    describeClusterDbRevisions(args, optionsOrCb, cb) {
        const command = new DescribeClusterDbRevisionsCommand_1.DescribeClusterDbRevisionsCommand(args);
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
    describeClusterParameterGroups(args, optionsOrCb, cb) {
        const command = new DescribeClusterParameterGroupsCommand_1.DescribeClusterParameterGroupsCommand(args);
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
    describeClusterParameters(args, optionsOrCb, cb) {
        const command = new DescribeClusterParametersCommand_1.DescribeClusterParametersCommand(args);
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
    describeClusterSecurityGroups(args, optionsOrCb, cb) {
        const command = new DescribeClusterSecurityGroupsCommand_1.DescribeClusterSecurityGroupsCommand(args);
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
    describeClusterSnapshots(args, optionsOrCb, cb) {
        const command = new DescribeClusterSnapshotsCommand_1.DescribeClusterSnapshotsCommand(args);
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
    describeClusterSubnetGroups(args, optionsOrCb, cb) {
        const command = new DescribeClusterSubnetGroupsCommand_1.DescribeClusterSubnetGroupsCommand(args);
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
    describeClusterTracks(args, optionsOrCb, cb) {
        const command = new DescribeClusterTracksCommand_1.DescribeClusterTracksCommand(args);
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
    describeClusterVersions(args, optionsOrCb, cb) {
        const command = new DescribeClusterVersionsCommand_1.DescribeClusterVersionsCommand(args);
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
    describeClusters(args, optionsOrCb, cb) {
        const command = new DescribeClustersCommand_1.DescribeClustersCommand(args);
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
    describeDefaultClusterParameters(args, optionsOrCb, cb) {
        const command = new DescribeDefaultClusterParametersCommand_1.DescribeDefaultClusterParametersCommand(args);
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
    describeHsmClientCertificates(args, optionsOrCb, cb) {
        const command = new DescribeHsmClientCertificatesCommand_1.DescribeHsmClientCertificatesCommand(args);
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
    describeHsmConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeHsmConfigurationsCommand_1.DescribeHsmConfigurationsCommand(args);
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
    describeLoggingStatus(args, optionsOrCb, cb) {
        const command = new DescribeLoggingStatusCommand_1.DescribeLoggingStatusCommand(args);
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
    describeNodeConfigurationOptions(args, optionsOrCb, cb) {
        const command = new DescribeNodeConfigurationOptionsCommand_1.DescribeNodeConfigurationOptionsCommand(args);
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
    describeOrderableClusterOptions(args, optionsOrCb, cb) {
        const command = new DescribeOrderableClusterOptionsCommand_1.DescribeOrderableClusterOptionsCommand(args);
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
    describeReservedNodeOfferings(args, optionsOrCb, cb) {
        const command = new DescribeReservedNodeOfferingsCommand_1.DescribeReservedNodeOfferingsCommand(args);
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
    describeReservedNodes(args, optionsOrCb, cb) {
        const command = new DescribeReservedNodesCommand_1.DescribeReservedNodesCommand(args);
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
    describeResize(args, optionsOrCb, cb) {
        const command = new DescribeResizeCommand_1.DescribeResizeCommand(args);
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
    describeScheduledActions(args, optionsOrCb, cb) {
        const command = new DescribeScheduledActionsCommand_1.DescribeScheduledActionsCommand(args);
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
    describeSnapshotCopyGrants(args, optionsOrCb, cb) {
        const command = new DescribeSnapshotCopyGrantsCommand_1.DescribeSnapshotCopyGrantsCommand(args);
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
    describeSnapshotSchedules(args, optionsOrCb, cb) {
        const command = new DescribeSnapshotSchedulesCommand_1.DescribeSnapshotSchedulesCommand(args);
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
    describeStorage(args, optionsOrCb, cb) {
        const command = new DescribeStorageCommand_1.DescribeStorageCommand(args);
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
    describeTableRestoreStatus(args, optionsOrCb, cb) {
        const command = new DescribeTableRestoreStatusCommand_1.DescribeTableRestoreStatusCommand(args);
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
    describeTags(args, optionsOrCb, cb) {
        const command = new DescribeTagsCommand_1.DescribeTagsCommand(args);
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
    disableLogging(args, optionsOrCb, cb) {
        const command = new DisableLoggingCommand_1.DisableLoggingCommand(args);
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
    disableSnapshotCopy(args, optionsOrCb, cb) {
        const command = new DisableSnapshotCopyCommand_1.DisableSnapshotCopyCommand(args);
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
    enableLogging(args, optionsOrCb, cb) {
        const command = new EnableLoggingCommand_1.EnableLoggingCommand(args);
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
    enableSnapshotCopy(args, optionsOrCb, cb) {
        const command = new EnableSnapshotCopyCommand_1.EnableSnapshotCopyCommand(args);
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
    getClusterCredentials(args, optionsOrCb, cb) {
        const command = new GetClusterCredentialsCommand_1.GetClusterCredentialsCommand(args);
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
    getReservedNodeExchangeOfferings(args, optionsOrCb, cb) {
        const command = new GetReservedNodeExchangeOfferingsCommand_1.GetReservedNodeExchangeOfferingsCommand(args);
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
    modifyCluster(args, optionsOrCb, cb) {
        const command = new ModifyClusterCommand_1.ModifyClusterCommand(args);
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
    modifyClusterDbRevision(args, optionsOrCb, cb) {
        const command = new ModifyClusterDbRevisionCommand_1.ModifyClusterDbRevisionCommand(args);
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
    modifyClusterIamRoles(args, optionsOrCb, cb) {
        const command = new ModifyClusterIamRolesCommand_1.ModifyClusterIamRolesCommand(args);
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
    modifyClusterMaintenance(args, optionsOrCb, cb) {
        const command = new ModifyClusterMaintenanceCommand_1.ModifyClusterMaintenanceCommand(args);
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
    modifyClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new ModifyClusterParameterGroupCommand_1.ModifyClusterParameterGroupCommand(args);
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
    modifyClusterSnapshot(args, optionsOrCb, cb) {
        const command = new ModifyClusterSnapshotCommand_1.ModifyClusterSnapshotCommand(args);
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
    modifyClusterSnapshotSchedule(args, optionsOrCb, cb) {
        const command = new ModifyClusterSnapshotScheduleCommand_1.ModifyClusterSnapshotScheduleCommand(args);
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
    modifyClusterSubnetGroup(args, optionsOrCb, cb) {
        const command = new ModifyClusterSubnetGroupCommand_1.ModifyClusterSubnetGroupCommand(args);
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
    modifyScheduledAction(args, optionsOrCb, cb) {
        const command = new ModifyScheduledActionCommand_1.ModifyScheduledActionCommand(args);
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
    modifySnapshotCopyRetentionPeriod(args, optionsOrCb, cb) {
        const command = new ModifySnapshotCopyRetentionPeriodCommand_1.ModifySnapshotCopyRetentionPeriodCommand(args);
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
    modifySnapshotSchedule(args, optionsOrCb, cb) {
        const command = new ModifySnapshotScheduleCommand_1.ModifySnapshotScheduleCommand(args);
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
    purchaseReservedNodeOffering(args, optionsOrCb, cb) {
        const command = new PurchaseReservedNodeOfferingCommand_1.PurchaseReservedNodeOfferingCommand(args);
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
    rebootCluster(args, optionsOrCb, cb) {
        const command = new RebootClusterCommand_1.RebootClusterCommand(args);
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
    resetClusterParameterGroup(args, optionsOrCb, cb) {
        const command = new ResetClusterParameterGroupCommand_1.ResetClusterParameterGroupCommand(args);
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
    resizeCluster(args, optionsOrCb, cb) {
        const command = new ResizeClusterCommand_1.ResizeClusterCommand(args);
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
    restoreFromClusterSnapshot(args, optionsOrCb, cb) {
        const command = new RestoreFromClusterSnapshotCommand_1.RestoreFromClusterSnapshotCommand(args);
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
    restoreTableFromClusterSnapshot(args, optionsOrCb, cb) {
        const command = new RestoreTableFromClusterSnapshotCommand_1.RestoreTableFromClusterSnapshotCommand(args);
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
    revokeClusterSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new RevokeClusterSecurityGroupIngressCommand_1.RevokeClusterSecurityGroupIngressCommand(args);
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
    revokeSnapshotAccess(args, optionsOrCb, cb) {
        const command = new RevokeSnapshotAccessCommand_1.RevokeSnapshotAccessCommand(args);
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
    rotateEncryptionKey(args, optionsOrCb, cb) {
        const command = new RotateEncryptionKeyCommand_1.RotateEncryptionKeyCommand(args);
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
exports.Redshift = Redshift;
//# sourceMappingURL=Redshift.js.map