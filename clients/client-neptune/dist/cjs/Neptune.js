"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NeptuneClient_1 = require("./NeptuneClient");
const AddRoleToDBClusterCommand_1 = require("./commands/AddRoleToDBClusterCommand");
const AddSourceIdentifierToSubscriptionCommand_1 = require("./commands/AddSourceIdentifierToSubscriptionCommand");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const ApplyPendingMaintenanceActionCommand_1 = require("./commands/ApplyPendingMaintenanceActionCommand");
const CopyDBClusterParameterGroupCommand_1 = require("./commands/CopyDBClusterParameterGroupCommand");
const CopyDBClusterSnapshotCommand_1 = require("./commands/CopyDBClusterSnapshotCommand");
const CopyDBParameterGroupCommand_1 = require("./commands/CopyDBParameterGroupCommand");
const CreateDBClusterCommand_1 = require("./commands/CreateDBClusterCommand");
const CreateDBClusterParameterGroupCommand_1 = require("./commands/CreateDBClusterParameterGroupCommand");
const CreateDBClusterSnapshotCommand_1 = require("./commands/CreateDBClusterSnapshotCommand");
const CreateDBInstanceCommand_1 = require("./commands/CreateDBInstanceCommand");
const CreateDBParameterGroupCommand_1 = require("./commands/CreateDBParameterGroupCommand");
const CreateDBSubnetGroupCommand_1 = require("./commands/CreateDBSubnetGroupCommand");
const CreateEventSubscriptionCommand_1 = require("./commands/CreateEventSubscriptionCommand");
const DeleteDBClusterCommand_1 = require("./commands/DeleteDBClusterCommand");
const DeleteDBClusterParameterGroupCommand_1 = require("./commands/DeleteDBClusterParameterGroupCommand");
const DeleteDBClusterSnapshotCommand_1 = require("./commands/DeleteDBClusterSnapshotCommand");
const DeleteDBInstanceCommand_1 = require("./commands/DeleteDBInstanceCommand");
const DeleteDBParameterGroupCommand_1 = require("./commands/DeleteDBParameterGroupCommand");
const DeleteDBSubnetGroupCommand_1 = require("./commands/DeleteDBSubnetGroupCommand");
const DeleteEventSubscriptionCommand_1 = require("./commands/DeleteEventSubscriptionCommand");
const DescribeDBClusterParameterGroupsCommand_1 = require("./commands/DescribeDBClusterParameterGroupsCommand");
const DescribeDBClusterParametersCommand_1 = require("./commands/DescribeDBClusterParametersCommand");
const DescribeDBClusterSnapshotAttributesCommand_1 = require("./commands/DescribeDBClusterSnapshotAttributesCommand");
const DescribeDBClusterSnapshotsCommand_1 = require("./commands/DescribeDBClusterSnapshotsCommand");
const DescribeDBClustersCommand_1 = require("./commands/DescribeDBClustersCommand");
const DescribeDBEngineVersionsCommand_1 = require("./commands/DescribeDBEngineVersionsCommand");
const DescribeDBInstancesCommand_1 = require("./commands/DescribeDBInstancesCommand");
const DescribeDBParameterGroupsCommand_1 = require("./commands/DescribeDBParameterGroupsCommand");
const DescribeDBParametersCommand_1 = require("./commands/DescribeDBParametersCommand");
const DescribeDBSubnetGroupsCommand_1 = require("./commands/DescribeDBSubnetGroupsCommand");
const DescribeEngineDefaultClusterParametersCommand_1 = require("./commands/DescribeEngineDefaultClusterParametersCommand");
const DescribeEngineDefaultParametersCommand_1 = require("./commands/DescribeEngineDefaultParametersCommand");
const DescribeEventCategoriesCommand_1 = require("./commands/DescribeEventCategoriesCommand");
const DescribeEventSubscriptionsCommand_1 = require("./commands/DescribeEventSubscriptionsCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeOrderableDBInstanceOptionsCommand_1 = require("./commands/DescribeOrderableDBInstanceOptionsCommand");
const DescribePendingMaintenanceActionsCommand_1 = require("./commands/DescribePendingMaintenanceActionsCommand");
const DescribeValidDBInstanceModificationsCommand_1 = require("./commands/DescribeValidDBInstanceModificationsCommand");
const FailoverDBClusterCommand_1 = require("./commands/FailoverDBClusterCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ModifyDBClusterCommand_1 = require("./commands/ModifyDBClusterCommand");
const ModifyDBClusterParameterGroupCommand_1 = require("./commands/ModifyDBClusterParameterGroupCommand");
const ModifyDBClusterSnapshotAttributeCommand_1 = require("./commands/ModifyDBClusterSnapshotAttributeCommand");
const ModifyDBInstanceCommand_1 = require("./commands/ModifyDBInstanceCommand");
const ModifyDBParameterGroupCommand_1 = require("./commands/ModifyDBParameterGroupCommand");
const ModifyDBSubnetGroupCommand_1 = require("./commands/ModifyDBSubnetGroupCommand");
const ModifyEventSubscriptionCommand_1 = require("./commands/ModifyEventSubscriptionCommand");
const PromoteReadReplicaDBClusterCommand_1 = require("./commands/PromoteReadReplicaDBClusterCommand");
const RebootDBInstanceCommand_1 = require("./commands/RebootDBInstanceCommand");
const RemoveRoleFromDBClusterCommand_1 = require("./commands/RemoveRoleFromDBClusterCommand");
const RemoveSourceIdentifierFromSubscriptionCommand_1 = require("./commands/RemoveSourceIdentifierFromSubscriptionCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const ResetDBClusterParameterGroupCommand_1 = require("./commands/ResetDBClusterParameterGroupCommand");
const ResetDBParameterGroupCommand_1 = require("./commands/ResetDBParameterGroupCommand");
const RestoreDBClusterFromSnapshotCommand_1 = require("./commands/RestoreDBClusterFromSnapshotCommand");
const RestoreDBClusterToPointInTimeCommand_1 = require("./commands/RestoreDBClusterToPointInTimeCommand");
/**
 * <fullname>Amazon Neptune</fullname>
 *          <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it
 *       easy to build and run applications that work with highly connected datasets. The core of
 *       Amazon Neptune is a purpose-built, high-performance graph database engine optimized for
 *       storing billions of relationships and querying the graph with milliseconds latency. Amazon
 *       Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query
 *       languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that
 *       efficiently navigate highly connected datasets. Neptune powers graph use cases such as
 *       recommendation engines, fraud detection, knowledge graphs, drug discovery, and network
 *       security.</p>
 *
 *          <p>This interface reference for Amazon Neptune contains documentation for a programming or
 *       command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is
 *       asynchronous, which means that some interfaces might require techniques such as polling or
 *       callback functions to determine when a command has been applied. In this reference, the
 *       parameter descriptions indicate whether a command is applied immediately, on the next instance
 *       reboot, or during the maintenance window. The reference structure is as follows, and we list
 *       following some related topics from the user guide.</p>
 */
class Neptune extends NeptuneClient_1.NeptuneClient {
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
}
exports.Neptune = Neptune;
//# sourceMappingURL=Neptune.js.map