"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationDiscoveryServiceClient_1 = require("./ApplicationDiscoveryServiceClient");
const AssociateConfigurationItemsToApplicationCommand_1 = require("./commands/AssociateConfigurationItemsToApplicationCommand");
const BatchDeleteImportDataCommand_1 = require("./commands/BatchDeleteImportDataCommand");
const CreateApplicationCommand_1 = require("./commands/CreateApplicationCommand");
const CreateTagsCommand_1 = require("./commands/CreateTagsCommand");
const DeleteApplicationsCommand_1 = require("./commands/DeleteApplicationsCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DescribeAgentsCommand_1 = require("./commands/DescribeAgentsCommand");
const DescribeConfigurationsCommand_1 = require("./commands/DescribeConfigurationsCommand");
const DescribeContinuousExportsCommand_1 = require("./commands/DescribeContinuousExportsCommand");
const DescribeExportConfigurationsCommand_1 = require("./commands/DescribeExportConfigurationsCommand");
const DescribeExportTasksCommand_1 = require("./commands/DescribeExportTasksCommand");
const DescribeImportTasksCommand_1 = require("./commands/DescribeImportTasksCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DisassociateConfigurationItemsFromApplicationCommand_1 = require("./commands/DisassociateConfigurationItemsFromApplicationCommand");
const ExportConfigurationsCommand_1 = require("./commands/ExportConfigurationsCommand");
const GetDiscoverySummaryCommand_1 = require("./commands/GetDiscoverySummaryCommand");
const ListConfigurationsCommand_1 = require("./commands/ListConfigurationsCommand");
const ListServerNeighborsCommand_1 = require("./commands/ListServerNeighborsCommand");
const StartContinuousExportCommand_1 = require("./commands/StartContinuousExportCommand");
const StartDataCollectionByAgentIdsCommand_1 = require("./commands/StartDataCollectionByAgentIdsCommand");
const StartExportTaskCommand_1 = require("./commands/StartExportTaskCommand");
const StartImportTaskCommand_1 = require("./commands/StartImportTaskCommand");
const StopContinuousExportCommand_1 = require("./commands/StopContinuousExportCommand");
const StopDataCollectionByAgentIdsCommand_1 = require("./commands/StopDataCollectionByAgentIdsCommand");
const UpdateApplicationCommand_1 = require("./commands/UpdateApplicationCommand");
/**
 * <fullname>AWS Application Discovery Service</fullname>
 *
 *          <p>AWS Application Discovery Service helps you plan application migration projects. It
 *       automatically identifies servers, virtual machines (VMs), and network dependencies in your
 *       on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">AWS Application Discovery Service
 *         FAQ</a>. Application Discovery Service offers three ways of performing discovery and
 *       collecting data about your on-premises servers:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agentless discovery</b> is recommended for environments
 *           that use VMware vCenter Server. This mode doesn't require you to install an agent on each
 *           host. It does not work in non-VMware environments.</p>
 *
 *                <ul>
 *                   <li>
 *                      <p>Agentless discovery gathers server information regardless of the operating
 *               systems, which minimizes the time required for initial on-premises infrastructure
 *               assessment.</p>
 *                   </li>
 *                   <li>
 *                      <p>Agentless discovery doesn't collect information about network dependencies, only
 *               agent-based discovery collects that information.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agent-based discovery</b> collects a richer set of data
 *           than agentless discovery by using the AWS Application Discovery Agent, which you install
 *           on one or more hosts in your data center.</p>
 *
 *                <ul>
 *                   <li>
 *                      <p> The agent captures infrastructure and application information, including an
 *               inventory of running processes, system performance information, resource utilization,
 *               and network dependencies.</p>
 *                   </li>
 *                   <li>
 *                      <p>The information collected by agents is secured at rest and in transit to the
 *               Application Discovery Service database in the cloud. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>AWS Partner Network (APN) solutions</b> integrate with
 *           Application Discovery Service, enabling you to import details of your on-premises
 *           environment directly into Migration Hub without using the discovery connector or discovery
 *           agent.</p>
 *
 *                <ul>
 *                   <li>
 *                      <p>Third-party application discovery tools can query AWS Application Discovery
 *               Service, and they can write to the Application Discovery Service database using the
 *               public API.</p>
 *                   </li>
 *                   <li>
 *                      <p>In this way, you can import data into Migration Hub and view it, so that you can
 *               associate applications with servers and track migrations.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *
 *          <p>
 *             <b>Recommendations</b>
 *          </p>
 *          <p>We recommend that you use agent-based discovery for non-VMware environments, and
 *       whenever you want to collect information about network dependencies. You can run agent-based
 *       and agentless discovery simultaneously. Use agentless discovery to complete the initial
 *       infrastructure assessment quickly, and then install agents on select hosts to collect
 *       additional information.</p>
 *
 *          <p>
 *             <b>Working With This Guide</b>
 *          </p>
 *
 *          <p>This API reference provides descriptions, syntax, and usage examples for each of the
 *       actions and data types for Application Discovery Service. The topic for each action shows the
 *       API request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS
 *       SDKs</a>.</p>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Remember that you must set your Migration Hub home region before you call any of
 *             these APIs.</p>
 *                </li>
 *                <li>
 *                   <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *             import, or put) while in your home region, or a <code>HomeRegionNotSetException</code>
 *             error is returned.</p>
 *                </li>
 *                <li>
 *                   <p>API calls for read actions (list, describe, stop, and delete) are permitted outside
 *             of your home region.</p>
 *                </li>
 *                <li>
 *                   <p>Although it is unlikely, the Migration Hub home region could change. If you call
 *             APIs outside the home region, an <code>InvalidInputException</code> is returned.</p>
 *                </li>
 *                <li>
 *                   <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home
 *             region.</p>
 *                </li>
 *             </ul>
 *          </note>
 *
 *          <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">AWS Application
 *         Discovery Service User Guide</a>.</p>
 *
 *          <important>
 *             <p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">AWS
 *           Privacy Policy</a>. You can operate Application Discovery Service offline to inspect
 *         collected data before it is shared with the service.</p>
 *          </important>
 */
class ApplicationDiscoveryService extends ApplicationDiscoveryServiceClient_1.ApplicationDiscoveryServiceClient {
    associateConfigurationItemsToApplication(args, optionsOrCb, cb) {
        const command = new AssociateConfigurationItemsToApplicationCommand_1.AssociateConfigurationItemsToApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchDeleteImportData(args, optionsOrCb, cb) {
        const command = new BatchDeleteImportDataCommand_1.BatchDeleteImportDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createApplication(args, optionsOrCb, cb) {
        const command = new CreateApplicationCommand_1.CreateApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    deleteApplications(args, optionsOrCb, cb) {
        const command = new DeleteApplicationsCommand_1.DeleteApplicationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    describeAgents(args, optionsOrCb, cb) {
        const command = new DescribeAgentsCommand_1.DescribeAgentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationsCommand_1.DescribeConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeContinuousExports(args, optionsOrCb, cb) {
        const command = new DescribeContinuousExportsCommand_1.DescribeContinuousExportsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExportConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeExportConfigurationsCommand_1.DescribeExportConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExportTasks(args, optionsOrCb, cb) {
        const command = new DescribeExportTasksCommand_1.DescribeExportTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeImportTasks(args, optionsOrCb, cb) {
        const command = new DescribeImportTasksCommand_1.DescribeImportTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    disassociateConfigurationItemsFromApplication(args, optionsOrCb, cb) {
        const command = new DisassociateConfigurationItemsFromApplicationCommand_1.DisassociateConfigurationItemsFromApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    exportConfigurations(args, optionsOrCb, cb) {
        const command = new ExportConfigurationsCommand_1.ExportConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDiscoverySummary(args, optionsOrCb, cb) {
        const command = new GetDiscoverySummaryCommand_1.GetDiscoverySummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listConfigurations(args, optionsOrCb, cb) {
        const command = new ListConfigurationsCommand_1.ListConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listServerNeighbors(args, optionsOrCb, cb) {
        const command = new ListServerNeighborsCommand_1.ListServerNeighborsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startContinuousExport(args, optionsOrCb, cb) {
        const command = new StartContinuousExportCommand_1.StartContinuousExportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startDataCollectionByAgentIds(args, optionsOrCb, cb) {
        const command = new StartDataCollectionByAgentIdsCommand_1.StartDataCollectionByAgentIdsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startExportTask(args, optionsOrCb, cb) {
        const command = new StartExportTaskCommand_1.StartExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startImportTask(args, optionsOrCb, cb) {
        const command = new StartImportTaskCommand_1.StartImportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopContinuousExport(args, optionsOrCb, cb) {
        const command = new StopContinuousExportCommand_1.StopContinuousExportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopDataCollectionByAgentIds(args, optionsOrCb, cb) {
        const command = new StopDataCollectionByAgentIdsCommand_1.StopDataCollectionByAgentIdsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateApplication(args, optionsOrCb, cb) {
        const command = new UpdateApplicationCommand_1.UpdateApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.ApplicationDiscoveryService = ApplicationDiscoveryService;
//# sourceMappingURL=ApplicationDiscoveryService.js.map