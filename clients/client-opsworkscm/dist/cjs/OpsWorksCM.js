"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OpsWorksCMClient_1 = require("./OpsWorksCMClient");
const AssociateNodeCommand_1 = require("./commands/AssociateNodeCommand");
const CreateBackupCommand_1 = require("./commands/CreateBackupCommand");
const CreateServerCommand_1 = require("./commands/CreateServerCommand");
const DeleteBackupCommand_1 = require("./commands/DeleteBackupCommand");
const DeleteServerCommand_1 = require("./commands/DeleteServerCommand");
const DescribeAccountAttributesCommand_1 = require("./commands/DescribeAccountAttributesCommand");
const DescribeBackupsCommand_1 = require("./commands/DescribeBackupsCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeNodeAssociationStatusCommand_1 = require("./commands/DescribeNodeAssociationStatusCommand");
const DescribeServersCommand_1 = require("./commands/DescribeServersCommand");
const DisassociateNodeCommand_1 = require("./commands/DisassociateNodeCommand");
const ExportServerEngineAttributeCommand_1 = require("./commands/ExportServerEngineAttributeCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const RestoreServerCommand_1 = require("./commands/RestoreServerCommand");
const StartMaintenanceCommand_1 = require("./commands/StartMaintenanceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateServerCommand_1 = require("./commands/UpdateServerCommand");
const UpdateServerEngineAttributesCommand_1 = require("./commands/UpdateServerEngineAttributesCommand");
/**
 * <fullname>AWS OpsWorks CM</fullname>
 *          <p>AWS OpsWorks for configuration management (CM) is a service that runs and manages
 *       configuration management servers. You can use AWS OpsWorks CM to create and manage AWS
 *       OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove
 *       nodes for the servers to manage.</p>
 *          <p>
 *             <b>Glossary of terms</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Server</b>: A configuration management server that can be
 *         highly-available. The configuration management server runs on
 *       an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational
 *       Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration
 *       manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start
 *       or stop servers. After you create servers, they continue to run until they are deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Engine</b>: The engine is the specific configuration manager
 *         that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Backup</b>: This
 *       is an application-level backup of the data that the configuration manager
 *       stores. AWS OpsWorks CM
 *       creates an S3 bucket for backups when you launch the first
 *       server. A backup maintains a snapshot of a server's configuration-related
 *       attributes at the time the backup starts.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Events</b>:
 *       Events are always related to a server. Events are written
 *       during server creation, when health checks run, when backups
 *       are created, when system maintenance is performed, etc. When you delete a server, the server's events are
 *       also deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Account attributes</b>:
 *       Every account has attributes that are assigned in the AWS OpsWorks CM
 *       database. These attributes store information about configuration limits (servers,
 *       backups, etc.) and your customer account.
 *       </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers
 *       can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks-cm.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-west-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Throttling limits</b>
 *          </p>
 *          <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>
 */
class OpsWorksCM extends OpsWorksCMClient_1.OpsWorksCMClient {
    associateNode(args, optionsOrCb, cb) {
        const command = new AssociateNodeCommand_1.AssociateNodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    createServer(args, optionsOrCb, cb) {
        const command = new CreateServerCommand_1.CreateServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    deleteServer(args, optionsOrCb, cb) {
        const command = new DeleteServerCommand_1.DeleteServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    describeBackups(args, optionsOrCb, cb) {
        const command = new DescribeBackupsCommand_1.DescribeBackupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    describeNodeAssociationStatus(args, optionsOrCb, cb) {
        const command = new DescribeNodeAssociationStatusCommand_1.DescribeNodeAssociationStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeServers(args, optionsOrCb, cb) {
        const command = new DescribeServersCommand_1.DescribeServersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateNode(args, optionsOrCb, cb) {
        const command = new DisassociateNodeCommand_1.DisassociateNodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    exportServerEngineAttribute(args, optionsOrCb, cb) {
        const command = new ExportServerEngineAttributeCommand_1.ExportServerEngineAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    restoreServer(args, optionsOrCb, cb) {
        const command = new RestoreServerCommand_1.RestoreServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startMaintenance(args, optionsOrCb, cb) {
        const command = new StartMaintenanceCommand_1.StartMaintenanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    updateServer(args, optionsOrCb, cb) {
        const command = new UpdateServerCommand_1.UpdateServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateServerEngineAttributes(args, optionsOrCb, cb) {
        const command = new UpdateServerEngineAttributesCommand_1.UpdateServerEngineAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.OpsWorksCM = OpsWorksCM;
//# sourceMappingURL=OpsWorksCM.js.map