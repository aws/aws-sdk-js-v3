"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MigrationHubClient_1 = require("./MigrationHubClient");
const AssociateCreatedArtifactCommand_1 = require("./commands/AssociateCreatedArtifactCommand");
const AssociateDiscoveredResourceCommand_1 = require("./commands/AssociateDiscoveredResourceCommand");
const CreateProgressUpdateStreamCommand_1 = require("./commands/CreateProgressUpdateStreamCommand");
const DeleteProgressUpdateStreamCommand_1 = require("./commands/DeleteProgressUpdateStreamCommand");
const DescribeApplicationStateCommand_1 = require("./commands/DescribeApplicationStateCommand");
const DescribeMigrationTaskCommand_1 = require("./commands/DescribeMigrationTaskCommand");
const DisassociateCreatedArtifactCommand_1 = require("./commands/DisassociateCreatedArtifactCommand");
const DisassociateDiscoveredResourceCommand_1 = require("./commands/DisassociateDiscoveredResourceCommand");
const ImportMigrationTaskCommand_1 = require("./commands/ImportMigrationTaskCommand");
const ListApplicationStatesCommand_1 = require("./commands/ListApplicationStatesCommand");
const ListCreatedArtifactsCommand_1 = require("./commands/ListCreatedArtifactsCommand");
const ListDiscoveredResourcesCommand_1 = require("./commands/ListDiscoveredResourcesCommand");
const ListMigrationTasksCommand_1 = require("./commands/ListMigrationTasksCommand");
const ListProgressUpdateStreamsCommand_1 = require("./commands/ListProgressUpdateStreamsCommand");
const NotifyApplicationStateCommand_1 = require("./commands/NotifyApplicationStateCommand");
const NotifyMigrationTaskStateCommand_1 = require("./commands/NotifyMigrationTaskStateCommand");
const PutResourceAttributesCommand_1 = require("./commands/PutResourceAttributesCommand");
/**
 * <p>The AWS Migration Hub API methods help to obtain server and application migration status
 *          and integrate your resource-specific migration tool by providing a programmatic interface
 *          to Migration Hub.</p>
 *          <p>Remember that you must set your AWS Migration Hub home region before you call any of
 *          these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you
 *          must make the API calls while in your home region.</p>
 */
class MigrationHub extends MigrationHubClient_1.MigrationHubClient {
    associateCreatedArtifact(args, optionsOrCb, cb) {
        const command = new AssociateCreatedArtifactCommand_1.AssociateCreatedArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateDiscoveredResource(args, optionsOrCb, cb) {
        const command = new AssociateDiscoveredResourceCommand_1.AssociateDiscoveredResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProgressUpdateStream(args, optionsOrCb, cb) {
        const command = new CreateProgressUpdateStreamCommand_1.CreateProgressUpdateStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProgressUpdateStream(args, optionsOrCb, cb) {
        const command = new DeleteProgressUpdateStreamCommand_1.DeleteProgressUpdateStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeApplicationState(args, optionsOrCb, cb) {
        const command = new DescribeApplicationStateCommand_1.DescribeApplicationStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMigrationTask(args, optionsOrCb, cb) {
        const command = new DescribeMigrationTaskCommand_1.DescribeMigrationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateCreatedArtifact(args, optionsOrCb, cb) {
        const command = new DisassociateCreatedArtifactCommand_1.DisassociateCreatedArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateDiscoveredResource(args, optionsOrCb, cb) {
        const command = new DisassociateDiscoveredResourceCommand_1.DisassociateDiscoveredResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importMigrationTask(args, optionsOrCb, cb) {
        const command = new ImportMigrationTaskCommand_1.ImportMigrationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApplicationStates(args, optionsOrCb, cb) {
        const command = new ListApplicationStatesCommand_1.ListApplicationStatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCreatedArtifacts(args, optionsOrCb, cb) {
        const command = new ListCreatedArtifactsCommand_1.ListCreatedArtifactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDiscoveredResources(args, optionsOrCb, cb) {
        const command = new ListDiscoveredResourcesCommand_1.ListDiscoveredResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMigrationTasks(args, optionsOrCb, cb) {
        const command = new ListMigrationTasksCommand_1.ListMigrationTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProgressUpdateStreams(args, optionsOrCb, cb) {
        const command = new ListProgressUpdateStreamsCommand_1.ListProgressUpdateStreamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    notifyApplicationState(args, optionsOrCb, cb) {
        const command = new NotifyApplicationStateCommand_1.NotifyApplicationStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    notifyMigrationTaskState(args, optionsOrCb, cb) {
        const command = new NotifyMigrationTaskStateCommand_1.NotifyMigrationTaskStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putResourceAttributes(args, optionsOrCb, cb) {
        const command = new PutResourceAttributesCommand_1.PutResourceAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.MigrationHub = MigrationHub;
//# sourceMappingURL=MigrationHub.js.map