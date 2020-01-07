"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BatchDeleteDocumentCommand_1 = require("./commands/BatchDeleteDocumentCommand");
const BatchPutDocumentCommand_1 = require("./commands/BatchPutDocumentCommand");
const CreateDataSourceCommand_1 = require("./commands/CreateDataSourceCommand");
const CreateFaqCommand_1 = require("./commands/CreateFaqCommand");
const CreateIndexCommand_1 = require("./commands/CreateIndexCommand");
const DeleteFaqCommand_1 = require("./commands/DeleteFaqCommand");
const DeleteIndexCommand_1 = require("./commands/DeleteIndexCommand");
const DescribeDataSourceCommand_1 = require("./commands/DescribeDataSourceCommand");
const DescribeFaqCommand_1 = require("./commands/DescribeFaqCommand");
const DescribeIndexCommand_1 = require("./commands/DescribeIndexCommand");
const ListDataSourceSyncJobsCommand_1 = require("./commands/ListDataSourceSyncJobsCommand");
const ListDataSourcesCommand_1 = require("./commands/ListDataSourcesCommand");
const ListFaqsCommand_1 = require("./commands/ListFaqsCommand");
const ListIndicesCommand_1 = require("./commands/ListIndicesCommand");
const QueryCommand_1 = require("./commands/QueryCommand");
const StartDataSourceSyncJobCommand_1 = require("./commands/StartDataSourceSyncJobCommand");
const StopDataSourceSyncJobCommand_1 = require("./commands/StopDataSourceSyncJobCommand");
const SubmitFeedbackCommand_1 = require("./commands/SubmitFeedbackCommand");
const UpdateDataSourceCommand_1 = require("./commands/UpdateDataSourceCommand");
const UpdateIndexCommand_1 = require("./commands/UpdateIndexCommand");
const kendraClient_1 = require("./kendraClient");
/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 */
class kendra extends kendraClient_1.kendraClient {
    batchDeleteDocument(args, optionsOrCb, cb) {
        const command = new BatchDeleteDocumentCommand_1.BatchDeleteDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchPutDocument(args, optionsOrCb, cb) {
        const command = new BatchPutDocumentCommand_1.BatchPutDocumentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDataSource(args, optionsOrCb, cb) {
        const command = new CreateDataSourceCommand_1.CreateDataSourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFaq(args, optionsOrCb, cb) {
        const command = new CreateFaqCommand_1.CreateFaqCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createIndex(args, optionsOrCb, cb) {
        const command = new CreateIndexCommand_1.CreateIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFaq(args, optionsOrCb, cb) {
        const command = new DeleteFaqCommand_1.DeleteFaqCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIndex(args, optionsOrCb, cb) {
        const command = new DeleteIndexCommand_1.DeleteIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDataSource(args, optionsOrCb, cb) {
        const command = new DescribeDataSourceCommand_1.DescribeDataSourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFaq(args, optionsOrCb, cb) {
        const command = new DescribeFaqCommand_1.DescribeFaqCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIndex(args, optionsOrCb, cb) {
        const command = new DescribeIndexCommand_1.DescribeIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDataSourceSyncJobs(args, optionsOrCb, cb) {
        const command = new ListDataSourceSyncJobsCommand_1.ListDataSourceSyncJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDataSources(args, optionsOrCb, cb) {
        const command = new ListDataSourcesCommand_1.ListDataSourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFaqs(args, optionsOrCb, cb) {
        const command = new ListFaqsCommand_1.ListFaqsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIndices(args, optionsOrCb, cb) {
        const command = new ListIndicesCommand_1.ListIndicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    startDataSourceSyncJob(args, optionsOrCb, cb) {
        const command = new StartDataSourceSyncJobCommand_1.StartDataSourceSyncJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopDataSourceSyncJob(args, optionsOrCb, cb) {
        const command = new StopDataSourceSyncJobCommand_1.StopDataSourceSyncJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    submitFeedback(args, optionsOrCb, cb) {
        const command = new SubmitFeedbackCommand_1.SubmitFeedbackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDataSource(args, optionsOrCb, cb) {
        const command = new UpdateDataSourceCommand_1.UpdateDataSourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateIndex(args, optionsOrCb, cb) {
        const command = new UpdateIndexCommand_1.UpdateIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.kendra = kendra;
//# sourceMappingURL=kendra.js.map