// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ApplicationDiscoveryServiceClient } from "./ApplicationDiscoveryServiceClient";
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

/**
 * <fullname>Amazon Web Services Application Discovery Service</fullname>
 *
 *          <p>Amazon Web Services Application Discovery Service helps you plan application migration projects. It
 *       automatically identifies servers, virtual machines (VMs), and network dependencies in your
 *       on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>.
 *       Application Discovery Service offers three ways of performing discovery and
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
 *           than agentless discovery by using the Amazon Web Services Application Discovery Agent, which you install
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
 *                   <b>Amazon Web Services Partner Network (APN) solutions</b> integrate with
 *           Application Discovery Service, enabling you to import details of your on-premises
 *           environment directly into Migration Hub without using the discovery connector or discovery
 *           agent.</p>
 *
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
 *       API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services
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
 *          <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application
 *         Discovery Service User Guide</a>.</p>
 *
 *          <important>
 *             <p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">Amazon Web Services
 *           Privacy Policy</a>. You can operate Application Discovery Service offline to inspect
 *         collected data before it is shared with the service.</p>
 *          </important>
 */
export class ApplicationDiscoveryService extends ApplicationDiscoveryServiceClient {
  /**
   * <p>Associates one or more configuration items with an application.</p>
   */
  public associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateConfigurationItemsToApplicationCommandOutput>;
  public associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationCommandInput,
    cb: (err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void
  ): void;
  public associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void
  ): void;
  public associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void),
    cb?: (err: any, data?: AssociateConfigurationItemsToApplicationCommandOutput) => void
  ): Promise<AssociateConfigurationItemsToApplicationCommandOutput> | void {
    const command = new AssociateConfigurationItemsToApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has
   *       a number of records that can identify servers or applications. </p>
   *
   *          <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when
   *       discovered servers match existing entries that you've previously discovered, the information
   *       for the already-existing discovered server is updated. When you delete an import task that
   *       contains records that were used to match, the information in those matched records that comes
   *       from the deleted records will also be deleted.</p>
   */
  public batchDeleteImportData(
    args: BatchDeleteImportDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteImportDataCommandOutput>;
  public batchDeleteImportData(
    args: BatchDeleteImportDataCommandInput,
    cb: (err: any, data?: BatchDeleteImportDataCommandOutput) => void
  ): void;
  public batchDeleteImportData(
    args: BatchDeleteImportDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteImportDataCommandOutput) => void
  ): void;
  public batchDeleteImportData(
    args: BatchDeleteImportDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteImportDataCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteImportDataCommandOutput) => void
  ): Promise<BatchDeleteImportDataCommandOutput> | void {
    const command = new BatchDeleteImportDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an application with the given name and description.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates one or more tags for configuration items. Tags are metadata that help you
   *       categorize IT assets. This API accepts a list of multiple configuration items.</p>
   *
   *          <important>
   *             <p>Do not store sensitive information (like personal data) in tags.</p>
   *          </important>
   */
  public createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  public createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  public createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateTagsCommandOutput) => void
  ): Promise<CreateTagsCommandOutput> | void {
    const command = new CreateTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a list of applications and their associations with configuration
   *       items.</p>
   */
  public deleteApplications(
    args: DeleteApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationsCommandOutput>;
  public deleteApplications(
    args: DeleteApplicationsCommandInput,
    cb: (err: any, data?: DeleteApplicationsCommandOutput) => void
  ): void;
  public deleteApplications(
    args: DeleteApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationsCommandOutput) => void
  ): void;
  public deleteApplications(
    args: DeleteApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationsCommandOutput) => void
  ): Promise<DeleteApplicationsCommandOutput> | void {
    const command = new DeleteApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the association between configuration items and one or more tags. This API
   *       accepts a list of multiple configuration items.</p>
   */
  public deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  public deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists agents or connectors as specified by ID or other filters. All agents/connectors
   *       associated with your user account can be listed if you call <code>DescribeAgents</code> as is
   *       without passing any parameters.</p>
   */
  public describeAgents(
    args: DescribeAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentsCommandOutput>;
  public describeAgents(
    args: DescribeAgentsCommandInput,
    cb: (err: any, data?: DescribeAgentsCommandOutput) => void
  ): void;
  public describeAgents(
    args: DescribeAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentsCommandOutput) => void
  ): void;
  public describeAgents(
    args: DescribeAgentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAgentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAgentsCommandOutput) => void
  ): Promise<DescribeAgentsCommandOutput> | void {
    const command = new DescribeAgentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
   *             <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application
   *           Discovery Service User Guide</i>.</p>
   *          </note>
   */
  public describeConfigurations(
    args: DescribeConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationsCommandOutput>;
  public describeConfigurations(
    args: DescribeConfigurationsCommandInput,
    cb: (err: any, data?: DescribeConfigurationsCommandOutput) => void
  ): void;
  public describeConfigurations(
    args: DescribeConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationsCommandOutput) => void
  ): void;
  public describeConfigurations(
    args: DescribeConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationsCommandOutput) => void
  ): Promise<DescribeConfigurationsCommandOutput> | void {
    const command = new DescribeConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists exports as specified by ID. All continuous exports associated with your user
   *       account can be listed if you call <code>DescribeContinuousExports</code> as is without passing
   *       any parameters.</p>
   */
  public describeContinuousExports(
    args: DescribeContinuousExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContinuousExportsCommandOutput>;
  public describeContinuousExports(
    args: DescribeContinuousExportsCommandInput,
    cb: (err: any, data?: DescribeContinuousExportsCommandOutput) => void
  ): void;
  public describeContinuousExports(
    args: DescribeContinuousExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContinuousExportsCommandOutput) => void
  ): void;
  public describeContinuousExports(
    args: DescribeContinuousExportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeContinuousExportsCommandOutput) => void),
    cb?: (err: any, data?: DescribeContinuousExportsCommandOutput) => void
  ): Promise<DescribeContinuousExportsCommandOutput> | void {
    const command = new DescribeContinuousExportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>
   *             <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.</p>
   */
  public describeExportConfigurations(
    args: DescribeExportConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportConfigurationsCommandOutput>;
  public describeExportConfigurations(
    args: DescribeExportConfigurationsCommandInput,
    cb: (err: any, data?: DescribeExportConfigurationsCommandOutput) => void
  ): void;
  public describeExportConfigurations(
    args: DescribeExportConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportConfigurationsCommandOutput) => void
  ): void;
  public describeExportConfigurations(
    args: DescribeExportConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExportConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeExportConfigurationsCommandOutput) => void
  ): Promise<DescribeExportConfigurationsCommandOutput> | void {
    const command = new DescribeExportConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve status of one or more export tasks. You can retrieve the status of up to 100
   *       export tasks.</p>
   */
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExportTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): Promise<DescribeExportTasksCommandOutput> | void {
    const command = new DescribeExportTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an array of import tasks for your account, including status information, times,
   *       IDs, the Amazon S3 Object URL for the import file, and more.</p>
   */
  public describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportTasksCommandOutput>;
  public describeImportTasks(
    args: DescribeImportTasksCommandInput,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;
  public describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;
  public describeImportTasks(
    args: DescribeImportTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImportTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): Promise<DescribeImportTasksCommandOutput> | void {
    const command = new DescribeImportTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates one or more configuration items from an application.</p>
   */
  public disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput>;
  public disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationCommandInput,
    cb: (err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void
  ): void;
  public disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void
  ): void;
  public disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void),
    cb?: (err: any, data?: DisassociateConfigurationItemsFromApplicationCommandOutput) => void
  ): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> | void {
    const command = new DisassociateConfigurationItemsFromApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Deprecated. Use <code>StartExportTask</code> instead.</p>
   *          <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that
   *       enables you to view and evaluate the data. Data includes tags and tag associations, processes,
   *       connections, servers, and system performance. This API returns an export ID that you can query
   *       using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of
   *       two configuration exports in six hours.</p>
   */
  public exportConfigurations(
    args: ExportConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportConfigurationsCommandOutput>;
  public exportConfigurations(
    args: ExportConfigurationsCommandInput,
    cb: (err: any, data?: ExportConfigurationsCommandOutput) => void
  ): void;
  public exportConfigurations(
    args: ExportConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportConfigurationsCommandOutput) => void
  ): void;
  public exportConfigurations(
    args: ExportConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ExportConfigurationsCommandOutput) => void
  ): Promise<ExportConfigurationsCommandOutput> | void {
    const command = new ExportConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a short summary of discovered assets.</p>
   *          <p>This API operation takes no request parameters and is called as is at the command
   *       prompt as shown in the example.</p>
   */
  public getDiscoverySummary(
    args: GetDiscoverySummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiscoverySummaryCommandOutput>;
  public getDiscoverySummary(
    args: GetDiscoverySummaryCommandInput,
    cb: (err: any, data?: GetDiscoverySummaryCommandOutput) => void
  ): void;
  public getDiscoverySummary(
    args: GetDiscoverySummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiscoverySummaryCommandOutput) => void
  ): void;
  public getDiscoverySummary(
    args: GetDiscoverySummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDiscoverySummaryCommandOutput) => void),
    cb?: (err: any, data?: GetDiscoverySummaryCommandOutput) => void
  ): Promise<GetDiscoverySummaryCommandOutput> | void {
    const command = new GetDiscoverySummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of configuration items as specified by the value passed to the
   *       required parameter <code>configurationType</code>. Optional filtering may be applied to refine
   *       search results.</p>
   */
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationsCommandOutput>;
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): Promise<ListConfigurationsCommandOutput> | void {
    const command = new ListConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of servers that are one network hop away from a specified
   *       server.</p>
   */
  public listServerNeighbors(
    args: ListServerNeighborsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerNeighborsCommandOutput>;
  public listServerNeighbors(
    args: ListServerNeighborsCommandInput,
    cb: (err: any, data?: ListServerNeighborsCommandOutput) => void
  ): void;
  public listServerNeighbors(
    args: ListServerNeighborsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerNeighborsCommandOutput) => void
  ): void;
  public listServerNeighbors(
    args: ListServerNeighborsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServerNeighborsCommandOutput) => void),
    cb?: (err: any, data?: ListServerNeighborsCommandOutput) => void
  ): Promise<ListServerNeighborsCommandOutput> | void {
    const command = new ListServerNeighborsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Start the continuous flow of agent's discovered data into Amazon Athena.</p>
   */
  public startContinuousExport(
    args: StartContinuousExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContinuousExportCommandOutput>;
  public startContinuousExport(
    args: StartContinuousExportCommandInput,
    cb: (err: any, data?: StartContinuousExportCommandOutput) => void
  ): void;
  public startContinuousExport(
    args: StartContinuousExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContinuousExportCommandOutput) => void
  ): void;
  public startContinuousExport(
    args: StartContinuousExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartContinuousExportCommandOutput) => void),
    cb?: (err: any, data?: StartContinuousExportCommandOutput) => void
  ): Promise<StartContinuousExportCommandOutput> | void {
    const command = new StartContinuousExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Instructs the specified agents or connectors to start collecting data.</p>
   */
  public startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataCollectionByAgentIdsCommandOutput>;
  public startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsCommandInput,
    cb: (err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void
  ): void;
  public startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void
  ): void;
  public startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void),
    cb?: (err: any, data?: StartDataCollectionByAgentIdsCommandOutput) => void
  ): Promise<StartDataCollectionByAgentIdsCommandOutput> | void {
    const command = new StartDataCollectionByAgentIdsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Begins the export of discovered data to an S3 bucket.</p>
   *          <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of
   *       detailed data collected by the identified Application Discovery Agent, including network,
   *       process, and performance details. A time range for exported agent data may be set by using
   *         <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to
   *       five concurrently running exports. </p>
   *          <p> If you do not include an <code>agentIds</code> filter, summary data is exported that
   *       includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery
   *       Agents. Export of summary data is limited to two exports per day. </p>
   */
  public startExportTask(
    args: StartExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportTaskCommandOutput>;
  public startExportTask(
    args: StartExportTaskCommandInput,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;
  public startExportTask(
    args: StartExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;
  public startExportTask(
    args: StartExportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExportTaskCommandOutput) => void),
    cb?: (err: any, data?: StartExportTaskCommandOutput) => void
  ): Promise<StartExportTaskCommandOutput> | void {
    const command = new StartExportTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an import task, which allows you to import details of your on-premises environment
   *       directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS)
   *       tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform
   *       migration assessment and planning directly from your imported data, including the ability to
   *       group your devices as applications and track their migration status.</p>
   *
   *          <p>To start an import request, do this:</p>
   *
   *          <ol>
   *             <li>
   *                <p>Download the specially formatted comma separated value (CSV) import template, which
   *           you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p>
   *             </li>
   *             <li>
   *                <p>Fill out the template with your server and application data.</p>
   *             </li>
   *             <li>
   *                <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL.
   *           Your import file must be in the CSV format.</p>
   *             </li>
   *             <li>
   *                <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of
   *           the Amazon Web Services SDKs to import the records from your file.</p>
   *             </li>
   *          </ol>
   *
   *          <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub
   *         Import</a> in the <i>Amazon Web Services Application Discovery Service User
   *       Guide</i>.</p>
   *
   *          <note>
   *             <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services
   *         account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application
   *           Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User
   *           Guide</i>.</p>
   *          </note>
   */
  public startImportTask(
    args: StartImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportTaskCommandOutput>;
  public startImportTask(
    args: StartImportTaskCommandInput,
    cb: (err: any, data?: StartImportTaskCommandOutput) => void
  ): void;
  public startImportTask(
    args: StartImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportTaskCommandOutput) => void
  ): void;
  public startImportTask(
    args: StartImportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImportTaskCommandOutput) => void),
    cb?: (err: any, data?: StartImportTaskCommandOutput) => void
  ): Promise<StartImportTaskCommandOutput> | void {
    const command = new StartImportTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stop the continuous flow of agent's discovered data into Amazon Athena.</p>
   */
  public stopContinuousExport(
    args: StopContinuousExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContinuousExportCommandOutput>;
  public stopContinuousExport(
    args: StopContinuousExportCommandInput,
    cb: (err: any, data?: StopContinuousExportCommandOutput) => void
  ): void;
  public stopContinuousExport(
    args: StopContinuousExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContinuousExportCommandOutput) => void
  ): void;
  public stopContinuousExport(
    args: StopContinuousExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopContinuousExportCommandOutput) => void),
    cb?: (err: any, data?: StopContinuousExportCommandOutput) => void
  ): Promise<StopContinuousExportCommandOutput> | void {
    const command = new StopContinuousExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Instructs the specified agents or connectors to stop collecting data.</p>
   */
  public stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDataCollectionByAgentIdsCommandOutput>;
  public stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsCommandInput,
    cb: (err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void
  ): void;
  public stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void
  ): void;
  public stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void),
    cb?: (err: any, data?: StopDataCollectionByAgentIdsCommandOutput) => void
  ): Promise<StopDataCollectionByAgentIdsCommandOutput> | void {
    const command = new StopDataCollectionByAgentIdsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates metadata about an application.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
