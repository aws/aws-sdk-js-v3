import { ApplicationDiscoveryServiceClient } from "./ApplicationDiscoveryServiceClient";
import { AssociateConfigurationItemsToApplicationCommandInput, AssociateConfigurationItemsToApplicationCommandOutput } from "./commands/AssociateConfigurationItemsToApplicationCommand";
import { BatchDeleteImportDataCommandInput, BatchDeleteImportDataCommandOutput } from "./commands/BatchDeleteImportDataCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput } from "./commands/DeleteApplicationsCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DescribeAgentsCommandInput, DescribeAgentsCommandOutput } from "./commands/DescribeAgentsCommand";
import { DescribeConfigurationsCommandInput, DescribeConfigurationsCommandOutput } from "./commands/DescribeConfigurationsCommand";
import { DescribeContinuousExportsCommandInput, DescribeContinuousExportsCommandOutput } from "./commands/DescribeContinuousExportsCommand";
import { DescribeExportConfigurationsCommandInput, DescribeExportConfigurationsCommandOutput } from "./commands/DescribeExportConfigurationsCommand";
import { DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput } from "./commands/DescribeExportTasksCommand";
import { DescribeImportTasksCommandInput, DescribeImportTasksCommandOutput } from "./commands/DescribeImportTasksCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { DisassociateConfigurationItemsFromApplicationCommandInput, DisassociateConfigurationItemsFromApplicationCommandOutput } from "./commands/DisassociateConfigurationItemsFromApplicationCommand";
import { ExportConfigurationsCommandInput, ExportConfigurationsCommandOutput } from "./commands/ExportConfigurationsCommand";
import { GetDiscoverySummaryCommandInput, GetDiscoverySummaryCommandOutput } from "./commands/GetDiscoverySummaryCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import { ListServerNeighborsCommandInput, ListServerNeighborsCommandOutput } from "./commands/ListServerNeighborsCommand";
import { StartContinuousExportCommandInput, StartContinuousExportCommandOutput } from "./commands/StartContinuousExportCommand";
import { StartDataCollectionByAgentIdsCommandInput, StartDataCollectionByAgentIdsCommandOutput } from "./commands/StartDataCollectionByAgentIdsCommand";
import { StartExportTaskCommandInput, StartExportTaskCommandOutput } from "./commands/StartExportTaskCommand";
import { StartImportTaskCommandInput, StartImportTaskCommandOutput } from "./commands/StartImportTaskCommand";
import { StopContinuousExportCommandInput, StopContinuousExportCommandOutput } from "./commands/StopContinuousExportCommand";
import { StopDataCollectionByAgentIdsCommandInput, StopDataCollectionByAgentIdsCommandOutput } from "./commands/StopDataCollectionByAgentIdsCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class ApplicationDiscoveryService extends ApplicationDiscoveryServiceClient {
    /**
     * <p>Associates one or more configuration items with an application.</p>
     */
    associateConfigurationItemsToApplication(args: AssociateConfigurationItemsToApplicationCommandInput, options?: __HttpHandlerOptions): Promise<AssociateConfigurationItemsToApplicationCommandOutput>;
    associateConfigurationItemsToApplication(args: AssociateConfigurationItemsToApplicationCommandInput, cb: (err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void): void;
    associateConfigurationItemsToApplication(args: AssociateConfigurationItemsToApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has
     *       a number of records that can identify servers or applications. </p>
     *
     *          <p>AWS Application Discovery Service has built-in matching logic that will identify when
     *       discovered servers match existing entries that you've previously discovered, the information
     *       for the already-existing discovered server is updated. When you delete an import task that
     *       contains records that were used to match, the information in those matched records that comes
     *       from the deleted records will also be deleted.</p>
     */
    batchDeleteImportData(args: BatchDeleteImportDataCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteImportDataCommandOutput>;
    batchDeleteImportData(args: BatchDeleteImportDataCommandInput, cb: (err: any, data?: BatchDeleteImportDataCommandOutput) => void): void;
    batchDeleteImportData(args: BatchDeleteImportDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteImportDataCommandOutput) => void): void;
    /**
     * <p>Creates an application with the given name and description.</p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Creates one or more tags for configuration items. Tags are metadata that help you
     *       categorize IT assets. This API accepts a list of multiple configuration items.</p>
     */
    createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
    createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    createTags(args: CreateTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    /**
     * <p>Deletes a list of applications and their associations with configuration
     *       items.</p>
     */
    deleteApplications(args: DeleteApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationsCommandOutput>;
    deleteApplications(args: DeleteApplicationsCommandInput, cb: (err: any, data?: DeleteApplicationsCommandOutput) => void): void;
    deleteApplications(args: DeleteApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationsCommandOutput) => void): void;
    /**
     * <p>Deletes the association between configuration items and one or more tags. This API
     *       accepts a list of multiple configuration items.</p>
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * <p>Lists agents or connectors as specified by ID or other filters. All agents/connectors
     *       associated with your user account can be listed if you call <code>DescribeAgents</code> as is
     *       without passing any parameters.</p>
     */
    describeAgents(args: DescribeAgentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAgentsCommandOutput>;
    describeAgents(args: DescribeAgentsCommandInput, cb: (err: any, data?: DescribeAgentsCommandOutput) => void): void;
    describeAgents(args: DescribeAgentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAgentsCommandOutput) => void): void;
    /**
     * <p>Retrieves attributes for a list of configuration item IDs.</p>
     *
     *          <note>
     *             <p>All of the supplied IDs must be for the same asset type from one of the
     *         following:</p>
     *             <ul>
     *                <li>
     *                   <p>server</p>
     *                </li>
     *                <li>
     *                   <p>application</p>
     *                </li>
     *                <li>
     *                   <p>process</p>
     *                </li>
     *                <li>
     *                   <p>connection</p>
     *                </li>
     *             </ul>
     *
     *             <p>Output fields are specific to the asset type specified. For example, the output for a
     *           <i>server</i> configuration item includes a list of attributes about the
     *         server, such as host name, operating system, number of network cards, etc.</p>
     *             <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>AWS Application
     *           Discovery Service User Guide</i>.</p>
     *          </note>
     */
    describeConfigurations(args: DescribeConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationsCommandOutput>;
    describeConfigurations(args: DescribeConfigurationsCommandInput, cb: (err: any, data?: DescribeConfigurationsCommandOutput) => void): void;
    describeConfigurations(args: DescribeConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationsCommandOutput) => void): void;
    /**
     * <p>Lists exports as specified by ID. All continuous exports associated with your user
     *       account can be listed if you call <code>DescribeContinuousExports</code> as is without passing
     *       any parameters.</p>
     */
    describeContinuousExports(args: DescribeContinuousExportsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeContinuousExportsCommandOutput>;
    describeContinuousExports(args: DescribeContinuousExportsCommandInput, cb: (err: any, data?: DescribeContinuousExportsCommandOutput) => void): void;
    describeContinuousExports(args: DescribeContinuousExportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeContinuousExportsCommandOutput) => void): void;
    /**
     * <p>
     *             <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.</p>
     */
    describeExportConfigurations(args: DescribeExportConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExportConfigurationsCommandOutput>;
    describeExportConfigurations(args: DescribeExportConfigurationsCommandInput, cb: (err: any, data?: DescribeExportConfigurationsCommandOutput) => void): void;
    describeExportConfigurations(args: DescribeExportConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExportConfigurationsCommandOutput) => void): void;
    /**
     * <p>Retrieve status of one or more export tasks. You can retrieve the status of up to 100
     *       export tasks.</p>
     */
    describeExportTasks(args: DescribeExportTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExportTasksCommandOutput>;
    describeExportTasks(args: DescribeExportTasksCommandInput, cb: (err: any, data?: DescribeExportTasksCommandOutput) => void): void;
    describeExportTasks(args: DescribeExportTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExportTasksCommandOutput) => void): void;
    /**
     * <p>Returns an array of import tasks for your account, including status information, times,
     *       IDs, the Amazon S3 Object URL for the import file, and more.</p>
     */
    describeImportTasks(args: DescribeImportTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImportTasksCommandOutput>;
    describeImportTasks(args: DescribeImportTasksCommandInput, cb: (err: any, data?: DescribeImportTasksCommandOutput) => void): void;
    describeImportTasks(args: DescribeImportTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImportTasksCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of configuration items that have tags as specified by the key-value
     *       pairs, name and value, passed to the optional parameter <code>filters</code>.</p>
     *          <p>There are three valid tag filter names:</p>
     *          <ul>
     *             <li>
     *                <p>tagKey</p>
     *             </li>
     *             <li>
     *                <p>tagValue</p>
     *             </li>
     *             <li>
     *                <p>configurationId</p>
     *             </li>
     *          </ul>
     *          <p>Also, all configuration items associated with your user account that have tags can be
     *       listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
     */
    describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
    describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    describeTags(args: DescribeTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    /**
     * <p>Disassociates one or more configuration items from an application.</p>
     */
    disassociateConfigurationItemsFromApplication(args: DisassociateConfigurationItemsFromApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput>;
    disassociateConfigurationItemsFromApplication(args: DisassociateConfigurationItemsFromApplicationCommandInput, cb: (err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void): void;
    disassociateConfigurationItemsFromApplication(args: DisassociateConfigurationItemsFromApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use <code>StartExportTask</code> instead.</p>
     *          <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that
     *       enables you to view and evaluate the data. Data includes tags and tag associations, processes,
     *       connections, servers, and system performance. This API returns an export ID that you can query
     *       using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of
     *       two configuration exports in six hours.</p>
     */
    exportConfigurations(args: ExportConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ExportConfigurationsCommandOutput>;
    exportConfigurations(args: ExportConfigurationsCommandInput, cb: (err: any, data?: ExportConfigurationsCommandOutput) => void): void;
    exportConfigurations(args: ExportConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportConfigurationsCommandOutput) => void): void;
    /**
     * <p>Retrieves a short summary of discovered assets.</p>
     *          <p>This API operation takes no request parameters and is called as is at the command
     *       prompt as shown in the example.</p>
     */
    getDiscoverySummary(args: GetDiscoverySummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetDiscoverySummaryCommandOutput>;
    getDiscoverySummary(args: GetDiscoverySummaryCommandInput, cb: (err: any, data?: GetDiscoverySummaryCommandOutput) => void): void;
    getDiscoverySummary(args: GetDiscoverySummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiscoverySummaryCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of configuration items as specified by the value passed to the
     *       required parameter <code>configurationType</code>. Optional filtering may be applied to refine
     *       search results.</p>
     */
    listConfigurations(args: ListConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationsCommandOutput>;
    listConfigurations(args: ListConfigurationsCommandInput, cb: (err: any, data?: ListConfigurationsCommandOutput) => void): void;
    listConfigurations(args: ListConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of servers that are one network hop away from a specified
     *       server.</p>
     */
    listServerNeighbors(args: ListServerNeighborsCommandInput, options?: __HttpHandlerOptions): Promise<ListServerNeighborsCommandOutput>;
    listServerNeighbors(args: ListServerNeighborsCommandInput, cb: (err: any, data?: ListServerNeighborsCommandOutput) => void): void;
    listServerNeighbors(args: ListServerNeighborsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServerNeighborsCommandOutput) => void): void;
    /**
     * <p>Start the continuous flow of agent's discovered data into Amazon Athena.</p>
     */
    startContinuousExport(args: StartContinuousExportCommandInput, options?: __HttpHandlerOptions): Promise<StartContinuousExportCommandOutput>;
    startContinuousExport(args: StartContinuousExportCommandInput, cb: (err: any, data?: StartContinuousExportCommandOutput) => void): void;
    startContinuousExport(args: StartContinuousExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartContinuousExportCommandOutput) => void): void;
    /**
     * <p>Instructs the specified agents or connectors to start collecting data.</p>
     */
    startDataCollectionByAgentIds(args: StartDataCollectionByAgentIdsCommandInput, options?: __HttpHandlerOptions): Promise<StartDataCollectionByAgentIdsCommandOutput>;
    startDataCollectionByAgentIds(args: StartDataCollectionByAgentIdsCommandInput, cb: (err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void): void;
    startDataCollectionByAgentIds(args: StartDataCollectionByAgentIdsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void): void;
    /**
     * <p> Begins the export of discovered data to an S3 bucket.</p>
     *          <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of
     *       detailed data collected by the identified Application Discovery Agent, including network,
     *       process, and performance details. A time range for exported agent data may be set by using
     *         <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to
     *       five concurrently running exports. </p>
     *          <p> If you do not include an <code>agentIds</code> filter, summary data is exported that
     *       includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery
     *       Agents. Export of summary data is limited to two exports per day. </p>
     */
    startExportTask(args: StartExportTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartExportTaskCommandOutput>;
    startExportTask(args: StartExportTaskCommandInput, cb: (err: any, data?: StartExportTaskCommandOutput) => void): void;
    startExportTask(args: StartExportTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartExportTaskCommandOutput) => void): void;
    /**
     * <p>Starts an import task, which allows you to import details of your on-premises environment
     *       directly into AWS Migration Hub without having to use the Application Discovery Service (ADS)
     *       tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform
     *       migration assessment and planning directly from your imported data, including the ability to
     *       group your devices as applications and track their migration status.</p>
     *
     *          <p>To start an import request, do this:</p>
     *
     *          <ol>
     *             <li>
     *                <p>Download the specially formatted comma separated value (CSV) import template, which
     *           you can find here: <a href="https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p>
     *             </li>
     *             <li>
     *                <p>Fill out the template with your server and application data.</p>
     *             </li>
     *             <li>
     *                <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL.
     *           Your import file must be in the CSV format.</p>
     *             </li>
     *             <li>
     *                <p>Use the console or the <code>StartImportTask</code> command with the AWS CLI or one of
     *           the AWS SDKs to import the records from your file.</p>
     *             </li>
     *          </ol>
     *
     *          <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub
     *         Import</a> in the <i>AWS Application Discovery Service User
     *       Guide</i>.</p>
     *
     *          <note>
     *             <p>There are limits to the number of import tasks you can create (and delete) in an AWS
     *         account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">AWS Application
     *           Discovery Service Limits</a> in the <i>AWS Application Discovery Service User
     *           Guide</i>.</p>
     *          </note>
     */
    startImportTask(args: StartImportTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartImportTaskCommandOutput>;
    startImportTask(args: StartImportTaskCommandInput, cb: (err: any, data?: StartImportTaskCommandOutput) => void): void;
    startImportTask(args: StartImportTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartImportTaskCommandOutput) => void): void;
    /**
     * <p>Stop the continuous flow of agent's discovered data into Amazon Athena.</p>
     */
    stopContinuousExport(args: StopContinuousExportCommandInput, options?: __HttpHandlerOptions): Promise<StopContinuousExportCommandOutput>;
    stopContinuousExport(args: StopContinuousExportCommandInput, cb: (err: any, data?: StopContinuousExportCommandOutput) => void): void;
    stopContinuousExport(args: StopContinuousExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopContinuousExportCommandOutput) => void): void;
    /**
     * <p>Instructs the specified agents or connectors to stop collecting data.</p>
     */
    stopDataCollectionByAgentIds(args: StopDataCollectionByAgentIdsCommandInput, options?: __HttpHandlerOptions): Promise<StopDataCollectionByAgentIdsCommandOutput>;
    stopDataCollectionByAgentIds(args: StopDataCollectionByAgentIdsCommandInput, cb: (err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void): void;
    stopDataCollectionByAgentIds(args: StopDataCollectionByAgentIdsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void): void;
    /**
     * <p>Updates metadata about an application.</p>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
}
