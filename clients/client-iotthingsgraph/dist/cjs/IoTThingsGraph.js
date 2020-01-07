"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IoTThingsGraphClient_1 = require("./IoTThingsGraphClient");
const AssociateEntityToThingCommand_1 = require("./commands/AssociateEntityToThingCommand");
const CreateFlowTemplateCommand_1 = require("./commands/CreateFlowTemplateCommand");
const CreateSystemInstanceCommand_1 = require("./commands/CreateSystemInstanceCommand");
const CreateSystemTemplateCommand_1 = require("./commands/CreateSystemTemplateCommand");
const DeleteFlowTemplateCommand_1 = require("./commands/DeleteFlowTemplateCommand");
const DeleteNamespaceCommand_1 = require("./commands/DeleteNamespaceCommand");
const DeleteSystemInstanceCommand_1 = require("./commands/DeleteSystemInstanceCommand");
const DeleteSystemTemplateCommand_1 = require("./commands/DeleteSystemTemplateCommand");
const DeploySystemInstanceCommand_1 = require("./commands/DeploySystemInstanceCommand");
const DeprecateFlowTemplateCommand_1 = require("./commands/DeprecateFlowTemplateCommand");
const DeprecateSystemTemplateCommand_1 = require("./commands/DeprecateSystemTemplateCommand");
const DescribeNamespaceCommand_1 = require("./commands/DescribeNamespaceCommand");
const DissociateEntityFromThingCommand_1 = require("./commands/DissociateEntityFromThingCommand");
const GetEntitiesCommand_1 = require("./commands/GetEntitiesCommand");
const GetFlowTemplateCommand_1 = require("./commands/GetFlowTemplateCommand");
const GetFlowTemplateRevisionsCommand_1 = require("./commands/GetFlowTemplateRevisionsCommand");
const GetNamespaceDeletionStatusCommand_1 = require("./commands/GetNamespaceDeletionStatusCommand");
const GetSystemInstanceCommand_1 = require("./commands/GetSystemInstanceCommand");
const GetSystemTemplateCommand_1 = require("./commands/GetSystemTemplateCommand");
const GetSystemTemplateRevisionsCommand_1 = require("./commands/GetSystemTemplateRevisionsCommand");
const GetUploadStatusCommand_1 = require("./commands/GetUploadStatusCommand");
const ListFlowExecutionMessagesCommand_1 = require("./commands/ListFlowExecutionMessagesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const SearchEntitiesCommand_1 = require("./commands/SearchEntitiesCommand");
const SearchFlowExecutionsCommand_1 = require("./commands/SearchFlowExecutionsCommand");
const SearchFlowTemplatesCommand_1 = require("./commands/SearchFlowTemplatesCommand");
const SearchSystemInstancesCommand_1 = require("./commands/SearchSystemInstancesCommand");
const SearchSystemTemplatesCommand_1 = require("./commands/SearchSystemTemplatesCommand");
const SearchThingsCommand_1 = require("./commands/SearchThingsCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UndeploySystemInstanceCommand_1 = require("./commands/UndeploySystemInstanceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateFlowTemplateCommand_1 = require("./commands/UpdateFlowTemplateCommand");
const UpdateSystemTemplateCommand_1 = require("./commands/UpdateSystemTemplateCommand");
const UploadEntityDefinitionsCommand_1 = require("./commands/UploadEntityDefinitionsCommand");
/**
 * <fullname>AWS IoT Things Graph</fullname>
 *          <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards,
 *        such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services
 *        and defining how they interact at an abstract level.</p>
 *          <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p>
 */
class IoTThingsGraph extends IoTThingsGraphClient_1.IoTThingsGraphClient {
    associateEntityToThing(args, optionsOrCb, cb) {
        const command = new AssociateEntityToThingCommand_1.AssociateEntityToThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFlowTemplate(args, optionsOrCb, cb) {
        const command = new CreateFlowTemplateCommand_1.CreateFlowTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSystemInstance(args, optionsOrCb, cb) {
        const command = new CreateSystemInstanceCommand_1.CreateSystemInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSystemTemplate(args, optionsOrCb, cb) {
        const command = new CreateSystemTemplateCommand_1.CreateSystemTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFlowTemplate(args, optionsOrCb, cb) {
        const command = new DeleteFlowTemplateCommand_1.DeleteFlowTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNamespace(args, optionsOrCb, cb) {
        const command = new DeleteNamespaceCommand_1.DeleteNamespaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSystemInstance(args, optionsOrCb, cb) {
        const command = new DeleteSystemInstanceCommand_1.DeleteSystemInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSystemTemplate(args, optionsOrCb, cb) {
        const command = new DeleteSystemTemplateCommand_1.DeleteSystemTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deploySystemInstance(args, optionsOrCb, cb) {
        const command = new DeploySystemInstanceCommand_1.DeploySystemInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deprecateFlowTemplate(args, optionsOrCb, cb) {
        const command = new DeprecateFlowTemplateCommand_1.DeprecateFlowTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deprecateSystemTemplate(args, optionsOrCb, cb) {
        const command = new DeprecateSystemTemplateCommand_1.DeprecateSystemTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNamespace(args, optionsOrCb, cb) {
        const command = new DescribeNamespaceCommand_1.DescribeNamespaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    dissociateEntityFromThing(args, optionsOrCb, cb) {
        const command = new DissociateEntityFromThingCommand_1.DissociateEntityFromThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getEntities(args, optionsOrCb, cb) {
        const command = new GetEntitiesCommand_1.GetEntitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFlowTemplate(args, optionsOrCb, cb) {
        const command = new GetFlowTemplateCommand_1.GetFlowTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFlowTemplateRevisions(args, optionsOrCb, cb) {
        const command = new GetFlowTemplateRevisionsCommand_1.GetFlowTemplateRevisionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getNamespaceDeletionStatus(args, optionsOrCb, cb) {
        const command = new GetNamespaceDeletionStatusCommand_1.GetNamespaceDeletionStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSystemInstance(args, optionsOrCb, cb) {
        const command = new GetSystemInstanceCommand_1.GetSystemInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSystemTemplate(args, optionsOrCb, cb) {
        const command = new GetSystemTemplateCommand_1.GetSystemTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSystemTemplateRevisions(args, optionsOrCb, cb) {
        const command = new GetSystemTemplateRevisionsCommand_1.GetSystemTemplateRevisionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUploadStatus(args, optionsOrCb, cb) {
        const command = new GetUploadStatusCommand_1.GetUploadStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFlowExecutionMessages(args, optionsOrCb, cb) {
        const command = new ListFlowExecutionMessagesCommand_1.ListFlowExecutionMessagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    searchEntities(args, optionsOrCb, cb) {
        const command = new SearchEntitiesCommand_1.SearchEntitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchFlowExecutions(args, optionsOrCb, cb) {
        const command = new SearchFlowExecutionsCommand_1.SearchFlowExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchFlowTemplates(args, optionsOrCb, cb) {
        const command = new SearchFlowTemplatesCommand_1.SearchFlowTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchSystemInstances(args, optionsOrCb, cb) {
        const command = new SearchSystemInstancesCommand_1.SearchSystemInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchSystemTemplates(args, optionsOrCb, cb) {
        const command = new SearchSystemTemplatesCommand_1.SearchSystemTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchThings(args, optionsOrCb, cb) {
        const command = new SearchThingsCommand_1.SearchThingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    undeploySystemInstance(args, optionsOrCb, cb) {
        const command = new UndeploySystemInstanceCommand_1.UndeploySystemInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    updateFlowTemplate(args, optionsOrCb, cb) {
        const command = new UpdateFlowTemplateCommand_1.UpdateFlowTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSystemTemplate(args, optionsOrCb, cb) {
        const command = new UpdateSystemTemplateCommand_1.UpdateSystemTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    uploadEntityDefinitions(args, optionsOrCb, cb) {
        const command = new UploadEntityDefinitionsCommand_1.UploadEntityDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.IoTThingsGraph = IoTThingsGraph;
//# sourceMappingURL=IoTThingsGraph.js.map