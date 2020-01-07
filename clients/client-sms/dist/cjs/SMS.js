"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SMSClient_1 = require("./SMSClient");
const CreateAppCommand_1 = require("./commands/CreateAppCommand");
const CreateReplicationJobCommand_1 = require("./commands/CreateReplicationJobCommand");
const DeleteAppCommand_1 = require("./commands/DeleteAppCommand");
const DeleteAppLaunchConfigurationCommand_1 = require("./commands/DeleteAppLaunchConfigurationCommand");
const DeleteAppReplicationConfigurationCommand_1 = require("./commands/DeleteAppReplicationConfigurationCommand");
const DeleteReplicationJobCommand_1 = require("./commands/DeleteReplicationJobCommand");
const DeleteServerCatalogCommand_1 = require("./commands/DeleteServerCatalogCommand");
const DisassociateConnectorCommand_1 = require("./commands/DisassociateConnectorCommand");
const GenerateChangeSetCommand_1 = require("./commands/GenerateChangeSetCommand");
const GenerateTemplateCommand_1 = require("./commands/GenerateTemplateCommand");
const GetAppCommand_1 = require("./commands/GetAppCommand");
const GetAppLaunchConfigurationCommand_1 = require("./commands/GetAppLaunchConfigurationCommand");
const GetAppReplicationConfigurationCommand_1 = require("./commands/GetAppReplicationConfigurationCommand");
const GetConnectorsCommand_1 = require("./commands/GetConnectorsCommand");
const GetReplicationJobsCommand_1 = require("./commands/GetReplicationJobsCommand");
const GetReplicationRunsCommand_1 = require("./commands/GetReplicationRunsCommand");
const GetServersCommand_1 = require("./commands/GetServersCommand");
const ImportServerCatalogCommand_1 = require("./commands/ImportServerCatalogCommand");
const LaunchAppCommand_1 = require("./commands/LaunchAppCommand");
const ListAppsCommand_1 = require("./commands/ListAppsCommand");
const PutAppLaunchConfigurationCommand_1 = require("./commands/PutAppLaunchConfigurationCommand");
const PutAppReplicationConfigurationCommand_1 = require("./commands/PutAppReplicationConfigurationCommand");
const StartAppReplicationCommand_1 = require("./commands/StartAppReplicationCommand");
const StartOnDemandReplicationRunCommand_1 = require("./commands/StartOnDemandReplicationRunCommand");
const StopAppReplicationCommand_1 = require("./commands/StopAppReplicationCommand");
const TerminateAppCommand_1 = require("./commands/TerminateAppCommand");
const UpdateAppCommand_1 = require("./commands/UpdateAppCommand");
const UpdateReplicationJobCommand_1 = require("./commands/UpdateReplicationJobCommand");
/**
 * <fullname>AAWS Sever Migration Service</fullname>
 *         <p>This is the <i>AWS Sever Migration Service API Reference</i>. It provides descriptions,
 *             syntax, and usage examples for each of the actions and data types for the AWS Sever Migration Service
 *             (AWS SMS). The topic for each action shows the Query API request parameters and the XML
 *             response. You can also view the XML request elements in the WSDL.</p>
 *         <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the
 *             programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 *         <p>To learn more about the Server Migration Service, see the following resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://aws.amazon.com/server-migration-service/">AWS Sever Migration Service
 *                         product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html">AWS Sever Migration Service User Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
class SMS extends SMSClient_1.SMSClient {
    createApp(args, optionsOrCb, cb) {
        const command = new CreateAppCommand_1.CreateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReplicationJob(args, optionsOrCb, cb) {
        const command = new CreateReplicationJobCommand_1.CreateReplicationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteApp(args, optionsOrCb, cb) {
        const command = new DeleteAppCommand_1.DeleteAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAppLaunchConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteAppLaunchConfigurationCommand_1.DeleteAppLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAppReplicationConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteAppReplicationConfigurationCommand_1.DeleteAppReplicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReplicationJob(args, optionsOrCb, cb) {
        const command = new DeleteReplicationJobCommand_1.DeleteReplicationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteServerCatalog(args, optionsOrCb, cb) {
        const command = new DeleteServerCatalogCommand_1.DeleteServerCatalogCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateConnector(args, optionsOrCb, cb) {
        const command = new DisassociateConnectorCommand_1.DisassociateConnectorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    generateChangeSet(args, optionsOrCb, cb) {
        const command = new GenerateChangeSetCommand_1.GenerateChangeSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    generateTemplate(args, optionsOrCb, cb) {
        const command = new GenerateTemplateCommand_1.GenerateTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getApp(args, optionsOrCb, cb) {
        const command = new GetAppCommand_1.GetAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAppLaunchConfiguration(args, optionsOrCb, cb) {
        const command = new GetAppLaunchConfigurationCommand_1.GetAppLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAppReplicationConfiguration(args, optionsOrCb, cb) {
        const command = new GetAppReplicationConfigurationCommand_1.GetAppReplicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConnectors(args, optionsOrCb, cb) {
        const command = new GetConnectorsCommand_1.GetConnectorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getReplicationJobs(args, optionsOrCb, cb) {
        const command = new GetReplicationJobsCommand_1.GetReplicationJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getReplicationRuns(args, optionsOrCb, cb) {
        const command = new GetReplicationRunsCommand_1.GetReplicationRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getServers(args, optionsOrCb, cb) {
        const command = new GetServersCommand_1.GetServersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importServerCatalog(args, optionsOrCb, cb) {
        const command = new ImportServerCatalogCommand_1.ImportServerCatalogCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    launchApp(args, optionsOrCb, cb) {
        const command = new LaunchAppCommand_1.LaunchAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApps(args, optionsOrCb, cb) {
        const command = new ListAppsCommand_1.ListAppsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAppLaunchConfiguration(args, optionsOrCb, cb) {
        const command = new PutAppLaunchConfigurationCommand_1.PutAppLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAppReplicationConfiguration(args, optionsOrCb, cb) {
        const command = new PutAppReplicationConfigurationCommand_1.PutAppReplicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startAppReplication(args, optionsOrCb, cb) {
        const command = new StartAppReplicationCommand_1.StartAppReplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startOnDemandReplicationRun(args, optionsOrCb, cb) {
        const command = new StartOnDemandReplicationRunCommand_1.StartOnDemandReplicationRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopAppReplication(args, optionsOrCb, cb) {
        const command = new StopAppReplicationCommand_1.StopAppReplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    terminateApp(args, optionsOrCb, cb) {
        const command = new TerminateAppCommand_1.TerminateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateApp(args, optionsOrCb, cb) {
        const command = new UpdateAppCommand_1.UpdateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateReplicationJob(args, optionsOrCb, cb) {
        const command = new UpdateReplicationJobCommand_1.UpdateReplicationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.SMS = SMS;
//# sourceMappingURL=SMS.js.map