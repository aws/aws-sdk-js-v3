"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ElastiCacheClient_1 = require("./ElastiCacheClient");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const AuthorizeCacheSecurityGroupIngressCommand_1 = require("./commands/AuthorizeCacheSecurityGroupIngressCommand");
const BatchApplyUpdateActionCommand_1 = require("./commands/BatchApplyUpdateActionCommand");
const BatchStopUpdateActionCommand_1 = require("./commands/BatchStopUpdateActionCommand");
const CompleteMigrationCommand_1 = require("./commands/CompleteMigrationCommand");
const CopySnapshotCommand_1 = require("./commands/CopySnapshotCommand");
const CreateCacheClusterCommand_1 = require("./commands/CreateCacheClusterCommand");
const CreateCacheParameterGroupCommand_1 = require("./commands/CreateCacheParameterGroupCommand");
const CreateCacheSecurityGroupCommand_1 = require("./commands/CreateCacheSecurityGroupCommand");
const CreateCacheSubnetGroupCommand_1 = require("./commands/CreateCacheSubnetGroupCommand");
const CreateReplicationGroupCommand_1 = require("./commands/CreateReplicationGroupCommand");
const CreateSnapshotCommand_1 = require("./commands/CreateSnapshotCommand");
const DecreaseReplicaCountCommand_1 = require("./commands/DecreaseReplicaCountCommand");
const DeleteCacheClusterCommand_1 = require("./commands/DeleteCacheClusterCommand");
const DeleteCacheParameterGroupCommand_1 = require("./commands/DeleteCacheParameterGroupCommand");
const DeleteCacheSecurityGroupCommand_1 = require("./commands/DeleteCacheSecurityGroupCommand");
const DeleteCacheSubnetGroupCommand_1 = require("./commands/DeleteCacheSubnetGroupCommand");
const DeleteReplicationGroupCommand_1 = require("./commands/DeleteReplicationGroupCommand");
const DeleteSnapshotCommand_1 = require("./commands/DeleteSnapshotCommand");
const DescribeCacheClustersCommand_1 = require("./commands/DescribeCacheClustersCommand");
const DescribeCacheEngineVersionsCommand_1 = require("./commands/DescribeCacheEngineVersionsCommand");
const DescribeCacheParameterGroupsCommand_1 = require("./commands/DescribeCacheParameterGroupsCommand");
const DescribeCacheParametersCommand_1 = require("./commands/DescribeCacheParametersCommand");
const DescribeCacheSecurityGroupsCommand_1 = require("./commands/DescribeCacheSecurityGroupsCommand");
const DescribeCacheSubnetGroupsCommand_1 = require("./commands/DescribeCacheSubnetGroupsCommand");
const DescribeEngineDefaultParametersCommand_1 = require("./commands/DescribeEngineDefaultParametersCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeReplicationGroupsCommand_1 = require("./commands/DescribeReplicationGroupsCommand");
const DescribeReservedCacheNodesCommand_1 = require("./commands/DescribeReservedCacheNodesCommand");
const DescribeReservedCacheNodesOfferingsCommand_1 = require("./commands/DescribeReservedCacheNodesOfferingsCommand");
const DescribeServiceUpdatesCommand_1 = require("./commands/DescribeServiceUpdatesCommand");
const DescribeSnapshotsCommand_1 = require("./commands/DescribeSnapshotsCommand");
const DescribeUpdateActionsCommand_1 = require("./commands/DescribeUpdateActionsCommand");
const IncreaseReplicaCountCommand_1 = require("./commands/IncreaseReplicaCountCommand");
const ListAllowedNodeTypeModificationsCommand_1 = require("./commands/ListAllowedNodeTypeModificationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ModifyCacheClusterCommand_1 = require("./commands/ModifyCacheClusterCommand");
const ModifyCacheParameterGroupCommand_1 = require("./commands/ModifyCacheParameterGroupCommand");
const ModifyCacheSubnetGroupCommand_1 = require("./commands/ModifyCacheSubnetGroupCommand");
const ModifyReplicationGroupCommand_1 = require("./commands/ModifyReplicationGroupCommand");
const ModifyReplicationGroupShardConfigurationCommand_1 = require("./commands/ModifyReplicationGroupShardConfigurationCommand");
const PurchaseReservedCacheNodesOfferingCommand_1 = require("./commands/PurchaseReservedCacheNodesOfferingCommand");
const RebootCacheClusterCommand_1 = require("./commands/RebootCacheClusterCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const ResetCacheParameterGroupCommand_1 = require("./commands/ResetCacheParameterGroupCommand");
const RevokeCacheSecurityGroupIngressCommand_1 = require("./commands/RevokeCacheSecurityGroupIngressCommand");
const StartMigrationCommand_1 = require("./commands/StartMigrationCommand");
const TestFailoverCommand_1 = require("./commands/TestFailoverCommand");
/**
 * <fullname>Amazon ElastiCache</fullname>
 *         <p>Amazon ElastiCache is a web service that makes it easier to set up, operate,
 *             and scale a distributed cache in the cloud.</p>
 *         <p>With ElastiCache, customers get all of the benefits of a high-performance,
 *             in-memory cache with less of the administrative burden involved in launching and managing a distributed cache.
 *             The service makes setup, scaling,
 *             and cluster failure handling much simpler than in a self-managed cache deployment.</p>
 *         <p>In addition, through integration with Amazon CloudWatch,
 *             customers get enhanced visibility into the key performance statistics
 *             associated with their cache and can receive alarms if a part of their cache runs hot.</p>
 */
class ElastiCache extends ElastiCacheClient_1.ElastiCacheClient {
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
    authorizeCacheSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new AuthorizeCacheSecurityGroupIngressCommand_1.AuthorizeCacheSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchApplyUpdateAction(args, optionsOrCb, cb) {
        const command = new BatchApplyUpdateActionCommand_1.BatchApplyUpdateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchStopUpdateAction(args, optionsOrCb, cb) {
        const command = new BatchStopUpdateActionCommand_1.BatchStopUpdateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    completeMigration(args, optionsOrCb, cb) {
        const command = new CompleteMigrationCommand_1.CompleteMigrationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copySnapshot(args, optionsOrCb, cb) {
        const command = new CopySnapshotCommand_1.CopySnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCacheCluster(args, optionsOrCb, cb) {
        const command = new CreateCacheClusterCommand_1.CreateCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCacheParameterGroup(args, optionsOrCb, cb) {
        const command = new CreateCacheParameterGroupCommand_1.CreateCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCacheSecurityGroup(args, optionsOrCb, cb) {
        const command = new CreateCacheSecurityGroupCommand_1.CreateCacheSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCacheSubnetGroup(args, optionsOrCb, cb) {
        const command = new CreateCacheSubnetGroupCommand_1.CreateCacheSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReplicationGroup(args, optionsOrCb, cb) {
        const command = new CreateReplicationGroupCommand_1.CreateReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSnapshot(args, optionsOrCb, cb) {
        const command = new CreateSnapshotCommand_1.CreateSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    decreaseReplicaCount(args, optionsOrCb, cb) {
        const command = new DecreaseReplicaCountCommand_1.DecreaseReplicaCountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCacheCluster(args, optionsOrCb, cb) {
        const command = new DeleteCacheClusterCommand_1.DeleteCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCacheParameterGroup(args, optionsOrCb, cb) {
        const command = new DeleteCacheParameterGroupCommand_1.DeleteCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCacheSecurityGroup(args, optionsOrCb, cb) {
        const command = new DeleteCacheSecurityGroupCommand_1.DeleteCacheSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCacheSubnetGroup(args, optionsOrCb, cb) {
        const command = new DeleteCacheSubnetGroupCommand_1.DeleteCacheSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReplicationGroup(args, optionsOrCb, cb) {
        const command = new DeleteReplicationGroupCommand_1.DeleteReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteSnapshotCommand_1.DeleteSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCacheClusters(args, optionsOrCb, cb) {
        const command = new DescribeCacheClustersCommand_1.DescribeCacheClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCacheEngineVersions(args, optionsOrCb, cb) {
        const command = new DescribeCacheEngineVersionsCommand_1.DescribeCacheEngineVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCacheParameterGroups(args, optionsOrCb, cb) {
        const command = new DescribeCacheParameterGroupsCommand_1.DescribeCacheParameterGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCacheParameters(args, optionsOrCb, cb) {
        const command = new DescribeCacheParametersCommand_1.DescribeCacheParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCacheSecurityGroups(args, optionsOrCb, cb) {
        const command = new DescribeCacheSecurityGroupsCommand_1.DescribeCacheSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCacheSubnetGroups(args, optionsOrCb, cb) {
        const command = new DescribeCacheSubnetGroupsCommand_1.DescribeCacheSubnetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    describeReplicationGroups(args, optionsOrCb, cb) {
        const command = new DescribeReplicationGroupsCommand_1.DescribeReplicationGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedCacheNodes(args, optionsOrCb, cb) {
        const command = new DescribeReservedCacheNodesCommand_1.DescribeReservedCacheNodesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedCacheNodesOfferings(args, optionsOrCb, cb) {
        const command = new DescribeReservedCacheNodesOfferingsCommand_1.DescribeReservedCacheNodesOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeServiceUpdates(args, optionsOrCb, cb) {
        const command = new DescribeServiceUpdatesCommand_1.DescribeServiceUpdatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSnapshots(args, optionsOrCb, cb) {
        const command = new DescribeSnapshotsCommand_1.DescribeSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUpdateActions(args, optionsOrCb, cb) {
        const command = new DescribeUpdateActionsCommand_1.DescribeUpdateActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    increaseReplicaCount(args, optionsOrCb, cb) {
        const command = new IncreaseReplicaCountCommand_1.IncreaseReplicaCountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAllowedNodeTypeModifications(args, optionsOrCb, cb) {
        const command = new ListAllowedNodeTypeModificationsCommand_1.ListAllowedNodeTypeModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    modifyCacheCluster(args, optionsOrCb, cb) {
        const command = new ModifyCacheClusterCommand_1.ModifyCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyCacheParameterGroup(args, optionsOrCb, cb) {
        const command = new ModifyCacheParameterGroupCommand_1.ModifyCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyCacheSubnetGroup(args, optionsOrCb, cb) {
        const command = new ModifyCacheSubnetGroupCommand_1.ModifyCacheSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyReplicationGroup(args, optionsOrCb, cb) {
        const command = new ModifyReplicationGroupCommand_1.ModifyReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyReplicationGroupShardConfiguration(args, optionsOrCb, cb) {
        const command = new ModifyReplicationGroupShardConfigurationCommand_1.ModifyReplicationGroupShardConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseReservedCacheNodesOffering(args, optionsOrCb, cb) {
        const command = new PurchaseReservedCacheNodesOfferingCommand_1.PurchaseReservedCacheNodesOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rebootCacheCluster(args, optionsOrCb, cb) {
        const command = new RebootCacheClusterCommand_1.RebootCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    resetCacheParameterGroup(args, optionsOrCb, cb) {
        const command = new ResetCacheParameterGroupCommand_1.ResetCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    revokeCacheSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new RevokeCacheSecurityGroupIngressCommand_1.RevokeCacheSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startMigration(args, optionsOrCb, cb) {
        const command = new StartMigrationCommand_1.StartMigrationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    testFailover(args, optionsOrCb, cb) {
        const command = new TestFailoverCommand_1.TestFailoverCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.ElastiCache = ElastiCache;
//# sourceMappingURL=ElastiCache.js.map