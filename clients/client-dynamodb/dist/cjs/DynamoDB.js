"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DynamoDBClient_1 = require("./DynamoDBClient");
const BatchGetItemCommand_1 = require("./commands/BatchGetItemCommand");
const BatchWriteItemCommand_1 = require("./commands/BatchWriteItemCommand");
const CreateBackupCommand_1 = require("./commands/CreateBackupCommand");
const CreateGlobalTableCommand_1 = require("./commands/CreateGlobalTableCommand");
const CreateTableCommand_1 = require("./commands/CreateTableCommand");
const DeleteBackupCommand_1 = require("./commands/DeleteBackupCommand");
const DeleteItemCommand_1 = require("./commands/DeleteItemCommand");
const DeleteTableCommand_1 = require("./commands/DeleteTableCommand");
const DescribeBackupCommand_1 = require("./commands/DescribeBackupCommand");
const DescribeContinuousBackupsCommand_1 = require("./commands/DescribeContinuousBackupsCommand");
const DescribeContributorInsightsCommand_1 = require("./commands/DescribeContributorInsightsCommand");
const DescribeEndpointsCommand_1 = require("./commands/DescribeEndpointsCommand");
const DescribeGlobalTableCommand_1 = require("./commands/DescribeGlobalTableCommand");
const DescribeGlobalTableSettingsCommand_1 = require("./commands/DescribeGlobalTableSettingsCommand");
const DescribeLimitsCommand_1 = require("./commands/DescribeLimitsCommand");
const DescribeTableCommand_1 = require("./commands/DescribeTableCommand");
const DescribeTableReplicaAutoScalingCommand_1 = require("./commands/DescribeTableReplicaAutoScalingCommand");
const DescribeTimeToLiveCommand_1 = require("./commands/DescribeTimeToLiveCommand");
const GetItemCommand_1 = require("./commands/GetItemCommand");
const ListBackupsCommand_1 = require("./commands/ListBackupsCommand");
const ListContributorInsightsCommand_1 = require("./commands/ListContributorInsightsCommand");
const ListGlobalTablesCommand_1 = require("./commands/ListGlobalTablesCommand");
const ListTablesCommand_1 = require("./commands/ListTablesCommand");
const ListTagsOfResourceCommand_1 = require("./commands/ListTagsOfResourceCommand");
const PutItemCommand_1 = require("./commands/PutItemCommand");
const QueryCommand_1 = require("./commands/QueryCommand");
const RestoreTableFromBackupCommand_1 = require("./commands/RestoreTableFromBackupCommand");
const RestoreTableToPointInTimeCommand_1 = require("./commands/RestoreTableToPointInTimeCommand");
const ScanCommand_1 = require("./commands/ScanCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TransactGetItemsCommand_1 = require("./commands/TransactGetItemsCommand");
const TransactWriteItemsCommand_1 = require("./commands/TransactWriteItemsCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateContinuousBackupsCommand_1 = require("./commands/UpdateContinuousBackupsCommand");
const UpdateContributorInsightsCommand_1 = require("./commands/UpdateContributorInsightsCommand");
const UpdateGlobalTableCommand_1 = require("./commands/UpdateGlobalTableCommand");
const UpdateGlobalTableSettingsCommand_1 = require("./commands/UpdateGlobalTableSettingsCommand");
const UpdateItemCommand_1 = require("./commands/UpdateItemCommand");
const UpdateTableCommand_1 = require("./commands/UpdateTableCommand");
const UpdateTableReplicaAutoScalingCommand_1 = require("./commands/UpdateTableReplicaAutoScalingCommand");
const UpdateTimeToLiveCommand_1 = require("./commands/UpdateTimeToLiveCommand");
/**
 * <fullname>Amazon DynamoDB</fullname>
 *
 *
 *          <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and
 *       predictable performance with seamless scalability. DynamoDB lets you offload the
 *       administrative burdens of operating and scaling a distributed database, so that you don't have
 *       to worry about hardware provisioning, setup and configuration, replication, software patching,
 *       or cluster scaling.</p>
 *
 *          <p>With DynamoDB, you can create database tables that can store and retrieve any amount of
 *       data, and serve any level of request traffic. You can scale up or scale down your tables'
 *       throughput capacity without downtime or performance degradation, and use the AWS Management
 *       Console to monitor resource utilization and performance metrics.</p>
 *
 *          <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient
 *       number of servers to handle your throughput and storage requirements, while maintaining
 *       consistent and fast performance. All of your data is stored on solid state disks (SSDs) and
 *       automatically replicated across multiple Availability Zones in an AWS region, providing
 *       built-in high availability and data durability. </p>
 */
class DynamoDB extends DynamoDBClient_1.DynamoDBClient {
    describeEndpoints(args, optionsOrCb, cb) {
        const command = new DescribeEndpointsCommand_1.DescribeEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchGetItem(args, optionsOrCb, cb) {
        const command = new BatchGetItemCommand_1.BatchGetItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchWriteItem(args, optionsOrCb, cb) {
        const command = new BatchWriteItemCommand_1.BatchWriteItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createBackup(args, optionsOrCb, cb) {
        const command = new CreateBackupCommand_1.CreateBackupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGlobalTable(args, optionsOrCb, cb) {
        const command = new CreateGlobalTableCommand_1.CreateGlobalTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTable(args, optionsOrCb, cb) {
        const command = new CreateTableCommand_1.CreateTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteBackup(args, optionsOrCb, cb) {
        const command = new DeleteBackupCommand_1.DeleteBackupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteItem(args, optionsOrCb, cb) {
        const command = new DeleteItemCommand_1.DeleteItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTable(args, optionsOrCb, cb) {
        const command = new DeleteTableCommand_1.DeleteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeBackup(args, optionsOrCb, cb) {
        const command = new DescribeBackupCommand_1.DescribeBackupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeContinuousBackups(args, optionsOrCb, cb) {
        const command = new DescribeContinuousBackupsCommand_1.DescribeContinuousBackupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeContributorInsights(args, optionsOrCb, cb) {
        const command = new DescribeContributorInsightsCommand_1.DescribeContributorInsightsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGlobalTable(args, optionsOrCb, cb) {
        const command = new DescribeGlobalTableCommand_1.DescribeGlobalTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGlobalTableSettings(args, optionsOrCb, cb) {
        const command = new DescribeGlobalTableSettingsCommand_1.DescribeGlobalTableSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLimits(args, optionsOrCb, cb) {
        const command = new DescribeLimitsCommand_1.DescribeLimitsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTable(args, optionsOrCb, cb) {
        const command = new DescribeTableCommand_1.DescribeTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTableReplicaAutoScaling(args, optionsOrCb, cb) {
        const command = new DescribeTableReplicaAutoScalingCommand_1.DescribeTableReplicaAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTimeToLive(args, optionsOrCb, cb) {
        const command = new DescribeTimeToLiveCommand_1.DescribeTimeToLiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getItem(args, optionsOrCb, cb) {
        const command = new GetItemCommand_1.GetItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listBackups(args, optionsOrCb, cb) {
        const command = new ListBackupsCommand_1.ListBackupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listContributorInsights(args, optionsOrCb, cb) {
        const command = new ListContributorInsightsCommand_1.ListContributorInsightsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGlobalTables(args, optionsOrCb, cb) {
        const command = new ListGlobalTablesCommand_1.ListGlobalTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTables(args, optionsOrCb, cb) {
        const command = new ListTablesCommand_1.ListTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsOfResource(args, optionsOrCb, cb) {
        const command = new ListTagsOfResourceCommand_1.ListTagsOfResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putItem(args, optionsOrCb, cb) {
        const command = new PutItemCommand_1.PutItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    query(args, optionsOrCb, cb) {
        const command = new QueryCommand_1.QueryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreTableFromBackup(args, optionsOrCb, cb) {
        const command = new RestoreTableFromBackupCommand_1.RestoreTableFromBackupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreTableToPointInTime(args, optionsOrCb, cb) {
        const command = new RestoreTableToPointInTimeCommand_1.RestoreTableToPointInTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    scan(args, optionsOrCb, cb) {
        const command = new ScanCommand_1.ScanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    transactGetItems(args, optionsOrCb, cb) {
        const command = new TransactGetItemsCommand_1.TransactGetItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    transactWriteItems(args, optionsOrCb, cb) {
        const command = new TransactWriteItemsCommand_1.TransactWriteItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContinuousBackups(args, optionsOrCb, cb) {
        const command = new UpdateContinuousBackupsCommand_1.UpdateContinuousBackupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContributorInsights(args, optionsOrCb, cb) {
        const command = new UpdateContributorInsightsCommand_1.UpdateContributorInsightsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGlobalTable(args, optionsOrCb, cb) {
        const command = new UpdateGlobalTableCommand_1.UpdateGlobalTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGlobalTableSettings(args, optionsOrCb, cb) {
        const command = new UpdateGlobalTableSettingsCommand_1.UpdateGlobalTableSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateItem(args, optionsOrCb, cb) {
        const command = new UpdateItemCommand_1.UpdateItemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTable(args, optionsOrCb, cb) {
        const command = new UpdateTableCommand_1.UpdateTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTableReplicaAutoScaling(args, optionsOrCb, cb) {
        const command = new UpdateTableReplicaAutoScalingCommand_1.UpdateTableReplicaAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTimeToLive(args, optionsOrCb, cb) {
        const command = new UpdateTimeToLiveCommand_1.UpdateTimeToLiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.DynamoDB = DynamoDB;
//# sourceMappingURL=DynamoDB.js.map