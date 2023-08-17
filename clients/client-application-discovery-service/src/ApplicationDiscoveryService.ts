// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClient,
  ApplicationDiscoveryServiceClientConfig,
} from "./ApplicationDiscoveryServiceClient";
import {
  AssociateConfigurationItemsToApplicationCommand,
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput,
} from "./commands/AssociateConfigurationItemsToApplicationCommand";
import {
  BatchDeleteImportDataCommand,
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput,
} from "./commands/BatchDeleteImportDataCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  DeleteApplicationsCommand,
  DeleteApplicationsCommandInput,
  DeleteApplicationsCommandOutput,
} from "./commands/DeleteApplicationsCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeAgentsCommand,
  DescribeAgentsCommandInput,
  DescribeAgentsCommandOutput,
} from "./commands/DescribeAgentsCommand";
import {
  DescribeConfigurationsCommand,
  DescribeConfigurationsCommandInput,
  DescribeConfigurationsCommandOutput,
} from "./commands/DescribeConfigurationsCommand";
import {
  DescribeContinuousExportsCommand,
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "./commands/DescribeContinuousExportsCommand";
import {
  DescribeExportConfigurationsCommand,
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput,
} from "./commands/DescribeExportConfigurationsCommand";
import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeImportTasksCommand,
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "./commands/DescribeImportTasksCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DisassociateConfigurationItemsFromApplicationCommand,
  DisassociateConfigurationItemsFromApplicationCommandInput,
  DisassociateConfigurationItemsFromApplicationCommandOutput,
} from "./commands/DisassociateConfigurationItemsFromApplicationCommand";
import {
  ExportConfigurationsCommand,
  ExportConfigurationsCommandInput,
  ExportConfigurationsCommandOutput,
} from "./commands/ExportConfigurationsCommand";
import {
  GetDiscoverySummaryCommand,
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput,
} from "./commands/GetDiscoverySummaryCommand";
import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "./commands/ListConfigurationsCommand";
import {
  ListServerNeighborsCommand,
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput,
} from "./commands/ListServerNeighborsCommand";
import {
  StartContinuousExportCommand,
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput,
} from "./commands/StartContinuousExportCommand";
import {
  StartDataCollectionByAgentIdsCommand,
  StartDataCollectionByAgentIdsCommandInput,
  StartDataCollectionByAgentIdsCommandOutput,
} from "./commands/StartDataCollectionByAgentIdsCommand";
import {
  StartExportTaskCommand,
  StartExportTaskCommandInput,
  StartExportTaskCommandOutput,
} from "./commands/StartExportTaskCommand";
import {
  StartImportTaskCommand,
  StartImportTaskCommandInput,
  StartImportTaskCommandOutput,
} from "./commands/StartImportTaskCommand";
import {
  StopContinuousExportCommand,
  StopContinuousExportCommandInput,
  StopContinuousExportCommandOutput,
} from "./commands/StopContinuousExportCommand";
import {
  StopDataCollectionByAgentIdsCommand,
  StopDataCollectionByAgentIdsCommandInput,
  StopDataCollectionByAgentIdsCommandOutput,
} from "./commands/StopDataCollectionByAgentIdsCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";

const commands = {
  AssociateConfigurationItemsToApplicationCommand,
  BatchDeleteImportDataCommand,
  CreateApplicationCommand,
  CreateTagsCommand,
  DeleteApplicationsCommand,
  DeleteTagsCommand,
  DescribeAgentsCommand,
  DescribeConfigurationsCommand,
  DescribeContinuousExportsCommand,
  DescribeExportConfigurationsCommand,
  DescribeExportTasksCommand,
  DescribeImportTasksCommand,
  DescribeTagsCommand,
  DisassociateConfigurationItemsFromApplicationCommand,
  ExportConfigurationsCommand,
  GetDiscoverySummaryCommand,
  ListConfigurationsCommand,
  ListServerNeighborsCommand,
  StartContinuousExportCommand,
  StartDataCollectionByAgentIdsCommand,
  StartExportTaskCommand,
  StartImportTaskCommand,
  StopContinuousExportCommand,
  StopDataCollectionByAgentIdsCommand,
  UpdateApplicationCommand,
};

export interface ApplicationDiscoveryService {
  /**
   * @see {@link AssociateConfigurationItemsToApplicationCommand}
   */
  associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateConfigurationItemsToApplicationCommandOutput>;
  associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationCommandInput,
    cb: (err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void
  ): void;
  associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteImportDataCommand}
   */
  batchDeleteImportData(
    args: BatchDeleteImportDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteImportDataCommandOutput>;
  batchDeleteImportData(
    args: BatchDeleteImportDataCommandInput,
    cb: (err: any, data?: BatchDeleteImportDataCommandOutput) => void
  ): void;
  batchDeleteImportData(
    args: BatchDeleteImportDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteImportDataCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationsCommand}
   */
  deleteApplications(
    args: DeleteApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationsCommandOutput>;
  deleteApplications(
    args: DeleteApplicationsCommandInput,
    cb: (err: any, data?: DeleteApplicationsCommandOutput) => void
  ): void;
  deleteApplications(
    args: DeleteApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgentsCommand}
   */
  describeAgents(
    args: DescribeAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentsCommandOutput>;
  describeAgents(args: DescribeAgentsCommandInput, cb: (err: any, data?: DescribeAgentsCommandOutput) => void): void;
  describeAgents(
    args: DescribeAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationsCommand}
   */
  describeConfigurations(
    args: DescribeConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationsCommandOutput>;
  describeConfigurations(
    args: DescribeConfigurationsCommandInput,
    cb: (err: any, data?: DescribeConfigurationsCommandOutput) => void
  ): void;
  describeConfigurations(
    args: DescribeConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContinuousExportsCommand}
   */
  describeContinuousExports(
    args: DescribeContinuousExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContinuousExportsCommandOutput>;
  describeContinuousExports(
    args: DescribeContinuousExportsCommandInput,
    cb: (err: any, data?: DescribeContinuousExportsCommandOutput) => void
  ): void;
  describeContinuousExports(
    args: DescribeContinuousExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContinuousExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportConfigurationsCommand}
   */
  describeExportConfigurations(
    args: DescribeExportConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportConfigurationsCommandOutput>;
  describeExportConfigurations(
    args: DescribeExportConfigurationsCommandInput,
    cb: (err: any, data?: DescribeExportConfigurationsCommandOutput) => void
  ): void;
  describeExportConfigurations(
    args: DescribeExportConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportTasksCommand}
   */
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportTasksCommandOutput>;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateConfigurationItemsFromApplicationCommand}
   */
  disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput>;
  disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationCommandInput,
    cb: (err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void
  ): void;
  disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportConfigurationsCommand}
   */
  exportConfigurations(
    args: ExportConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportConfigurationsCommandOutput>;
  exportConfigurations(
    args: ExportConfigurationsCommandInput,
    cb: (err: any, data?: ExportConfigurationsCommandOutput) => void
  ): void;
  exportConfigurations(
    args: ExportConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDiscoverySummaryCommand}
   */
  getDiscoverySummary(
    args: GetDiscoverySummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiscoverySummaryCommandOutput>;
  getDiscoverySummary(
    args: GetDiscoverySummaryCommandInput,
    cb: (err: any, data?: GetDiscoverySummaryCommandOutput) => void
  ): void;
  getDiscoverySummary(
    args: GetDiscoverySummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiscoverySummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServerNeighborsCommand}
   */
  listServerNeighbors(
    args: ListServerNeighborsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerNeighborsCommandOutput>;
  listServerNeighbors(
    args: ListServerNeighborsCommandInput,
    cb: (err: any, data?: ListServerNeighborsCommandOutput) => void
  ): void;
  listServerNeighbors(
    args: ListServerNeighborsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerNeighborsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContinuousExportCommand}
   */
  startContinuousExport(
    args: StartContinuousExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContinuousExportCommandOutput>;
  startContinuousExport(
    args: StartContinuousExportCommandInput,
    cb: (err: any, data?: StartContinuousExportCommandOutput) => void
  ): void;
  startContinuousExport(
    args: StartContinuousExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContinuousExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataCollectionByAgentIdsCommand}
   */
  startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataCollectionByAgentIdsCommandOutput>;
  startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsCommandInput,
    cb: (err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void
  ): void;
  startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExportTaskCommand}
   */
  startExportTask(
    args: StartExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportTaskCommandOutput>;
  startExportTask(args: StartExportTaskCommandInput, cb: (err: any, data?: StartExportTaskCommandOutput) => void): void;
  startExportTask(
    args: StartExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportTaskCommand}
   */
  startImportTask(
    args: StartImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportTaskCommandOutput>;
  startImportTask(args: StartImportTaskCommandInput, cb: (err: any, data?: StartImportTaskCommandOutput) => void): void;
  startImportTask(
    args: StartImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopContinuousExportCommand}
   */
  stopContinuousExport(
    args: StopContinuousExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContinuousExportCommandOutput>;
  stopContinuousExport(
    args: StopContinuousExportCommandInput,
    cb: (err: any, data?: StopContinuousExportCommandOutput) => void
  ): void;
  stopContinuousExport(
    args: StopContinuousExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContinuousExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDataCollectionByAgentIdsCommand}
   */
  stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDataCollectionByAgentIdsCommandOutput>;
  stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsCommandInput,
    cb: (err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void
  ): void;
  stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Web Services Application Discovery Service</fullname>
 *          <p>Amazon Web Services Application Discovery Service (Application Discovery Service) helps you plan application migration projects. It automatically
 *       identifies servers, virtual machines (VMs), and network dependencies in your on-premises data
 *       centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>. </p>
 *          <p>Application Discovery Service offers three ways of performing discovery and collecting
 *       data about your on-premises servers:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agentless discovery</b> using
 *           Amazon Web Services Application Discovery Service Agentless Collector (Agentless Collector), which doesn't require you
 *           to install an agent on each host.</p>
 *                <ul>
 *                   <li>
 *                      <p>Agentless Collector gathers server information regardless of the
 *               operating systems, which minimizes the time required for initial on-premises
 *               infrastructure assessment.</p>
 *                   </li>
 *                   <li>
 *                      <p>Agentless Collector doesn't collect information about network
 *               dependencies, only agent-based discovery collects that information.
 *               </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agent-based discovery</b> using the Amazon Web Services Application
 *           Discovery Agent (Application Discovery Agent) collects a richer set of data than agentless
 *           discovery, which you install on one or more hosts in your data center.</p>
 *                <ul>
 *                   <li>
 *                      <p> The agent captures infrastructure and application information, including an
 *               inventory of running processes, system performance information, resource utilization,
 *               and network dependencies.</p>
 *                   </li>
 *                   <li>
 *                      <p>The information collected by agents is secured at rest and in transit to the
 *               Application Discovery Service database in the Amazon Web Services cloud. For more information, see
 *                 <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html">Amazon Web Services Application
 *                 Discovery Agent</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Amazon Web Services Partner Network (APN) solutions</b> integrate with
 *           Application Discovery Service, enabling you to import details of your on-premises
 *           environment directly into Amazon Web Services Migration Hub (Migration Hub) without using
 *           Agentless Collector or Application Discovery Agent.</p>
 *                <ul>
 *                   <li>
 *                      <p>Third-party application discovery tools can query Amazon Web Services Application Discovery
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
 *          <p>
 *             <b>Working With This Guide</b>
 *          </p>
 *          <p>This API reference provides descriptions, syntax, and usage examples for each of the
 *       actions and data types for Application Discovery Service. The topic for each action shows the
 *       API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Remember that you must set your Migration Hub home Region before you call any of
 *             these APIs.</p>
 *                </li>
 *                <li>
 *                   <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *             import, or put) while in your home Region, or a <code>HomeRegionNotSetException</code>
 *             error is returned.</p>
 *                </li>
 *                <li>
 *                   <p>API calls for read actions (list, describe, stop, and delete) are permitted outside
 *             of your home Region.</p>
 *                </li>
 *                <li>
 *                   <p>Although it is unlikely, the Migration Hub home Region could change. If you call
 *             APIs outside the home Region, an <code>InvalidInputException</code> is returned.</p>
 *                </li>
 *                <li>
 *                   <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home
 *             Region.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>This guide is intended for use with the <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application Discovery Service User
 *         Guide</a>.</p>
 *          <important>
 *             <p>All data is handled according to the <a href="https://aws.amazon.com/privacy/">Amazon Web Services Privacy Policy</a>. You can operate Application Discovery Service offline to
 *         inspect collected data before it is shared with the service.</p>
 *          </important>
 */
export class ApplicationDiscoveryService
  extends ApplicationDiscoveryServiceClient
  implements ApplicationDiscoveryService {}
createAggregatedClient(commands, ApplicationDiscoveryService);
