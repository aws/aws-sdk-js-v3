// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateReplicationJobCommand,
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput,
} from "./commands/CreateReplicationJobCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteAppLaunchConfigurationCommand,
  DeleteAppLaunchConfigurationCommandInput,
  DeleteAppLaunchConfigurationCommandOutput,
} from "./commands/DeleteAppLaunchConfigurationCommand";
import {
  DeleteAppReplicationConfigurationCommand,
  DeleteAppReplicationConfigurationCommandInput,
  DeleteAppReplicationConfigurationCommandOutput,
} from "./commands/DeleteAppReplicationConfigurationCommand";
import {
  DeleteAppValidationConfigurationCommand,
  DeleteAppValidationConfigurationCommandInput,
  DeleteAppValidationConfigurationCommandOutput,
} from "./commands/DeleteAppValidationConfigurationCommand";
import {
  DeleteReplicationJobCommand,
  DeleteReplicationJobCommandInput,
  DeleteReplicationJobCommandOutput,
} from "./commands/DeleteReplicationJobCommand";
import {
  DeleteServerCatalogCommand,
  DeleteServerCatalogCommandInput,
  DeleteServerCatalogCommandOutput,
} from "./commands/DeleteServerCatalogCommand";
import {
  DisassociateConnectorCommand,
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput,
} from "./commands/DisassociateConnectorCommand";
import {
  GenerateChangeSetCommand,
  GenerateChangeSetCommandInput,
  GenerateChangeSetCommandOutput,
} from "./commands/GenerateChangeSetCommand";
import {
  GenerateTemplateCommand,
  GenerateTemplateCommandInput,
  GenerateTemplateCommandOutput,
} from "./commands/GenerateTemplateCommand";
import { GetAppCommand, GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import {
  GetAppLaunchConfigurationCommand,
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput,
} from "./commands/GetAppLaunchConfigurationCommand";
import {
  GetAppReplicationConfigurationCommand,
  GetAppReplicationConfigurationCommandInput,
  GetAppReplicationConfigurationCommandOutput,
} from "./commands/GetAppReplicationConfigurationCommand";
import {
  GetAppValidationConfigurationCommand,
  GetAppValidationConfigurationCommandInput,
  GetAppValidationConfigurationCommandOutput,
} from "./commands/GetAppValidationConfigurationCommand";
import {
  GetAppValidationOutputCommand,
  GetAppValidationOutputCommandInput,
  GetAppValidationOutputCommandOutput,
} from "./commands/GetAppValidationOutputCommand";
import {
  GetConnectorsCommand,
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput,
} from "./commands/GetConnectorsCommand";
import {
  GetReplicationJobsCommand,
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput,
} from "./commands/GetReplicationJobsCommand";
import {
  GetReplicationRunsCommand,
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput,
} from "./commands/GetReplicationRunsCommand";
import { GetServersCommand, GetServersCommandInput, GetServersCommandOutput } from "./commands/GetServersCommand";
import {
  ImportAppCatalogCommand,
  ImportAppCatalogCommandInput,
  ImportAppCatalogCommandOutput,
} from "./commands/ImportAppCatalogCommand";
import {
  ImportServerCatalogCommand,
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput,
} from "./commands/ImportServerCatalogCommand";
import { LaunchAppCommand, LaunchAppCommandInput, LaunchAppCommandOutput } from "./commands/LaunchAppCommand";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  NotifyAppValidationOutputCommand,
  NotifyAppValidationOutputCommandInput,
  NotifyAppValidationOutputCommandOutput,
} from "./commands/NotifyAppValidationOutputCommand";
import {
  PutAppLaunchConfigurationCommand,
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput,
} from "./commands/PutAppLaunchConfigurationCommand";
import {
  PutAppReplicationConfigurationCommand,
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
} from "./commands/PutAppReplicationConfigurationCommand";
import {
  PutAppValidationConfigurationCommand,
  PutAppValidationConfigurationCommandInput,
  PutAppValidationConfigurationCommandOutput,
} from "./commands/PutAppValidationConfigurationCommand";
import {
  StartAppReplicationCommand,
  StartAppReplicationCommandInput,
  StartAppReplicationCommandOutput,
} from "./commands/StartAppReplicationCommand";
import {
  StartOnDemandAppReplicationCommand,
  StartOnDemandAppReplicationCommandInput,
  StartOnDemandAppReplicationCommandOutput,
} from "./commands/StartOnDemandAppReplicationCommand";
import {
  StartOnDemandReplicationRunCommand,
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
} from "./commands/StartOnDemandReplicationRunCommand";
import {
  StopAppReplicationCommand,
  StopAppReplicationCommandInput,
  StopAppReplicationCommandOutput,
} from "./commands/StopAppReplicationCommand";
import {
  TerminateAppCommand,
  TerminateAppCommandInput,
  TerminateAppCommandOutput,
} from "./commands/TerminateAppCommand";
import { UpdateAppCommand, UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateReplicationJobCommand,
  UpdateReplicationJobCommandInput,
  UpdateReplicationJobCommandOutput,
} from "./commands/UpdateReplicationJobCommand";
import { SMSClient, SMSClientConfig } from "./SMSClient";

const commands = {
  CreateAppCommand,
  CreateReplicationJobCommand,
  DeleteAppCommand,
  DeleteAppLaunchConfigurationCommand,
  DeleteAppReplicationConfigurationCommand,
  DeleteAppValidationConfigurationCommand,
  DeleteReplicationJobCommand,
  DeleteServerCatalogCommand,
  DisassociateConnectorCommand,
  GenerateChangeSetCommand,
  GenerateTemplateCommand,
  GetAppCommand,
  GetAppLaunchConfigurationCommand,
  GetAppReplicationConfigurationCommand,
  GetAppValidationConfigurationCommand,
  GetAppValidationOutputCommand,
  GetConnectorsCommand,
  GetReplicationJobsCommand,
  GetReplicationRunsCommand,
  GetServersCommand,
  ImportAppCatalogCommand,
  ImportServerCatalogCommand,
  LaunchAppCommand,
  ListAppsCommand,
  NotifyAppValidationOutputCommand,
  PutAppLaunchConfigurationCommand,
  PutAppReplicationConfigurationCommand,
  PutAppValidationConfigurationCommand,
  StartAppReplicationCommand,
  StartOnDemandAppReplicationCommand,
  StartOnDemandReplicationRunCommand,
  StopAppReplicationCommand,
  TerminateAppCommand,
  UpdateAppCommand,
  UpdateReplicationJobCommand,
};

export interface SMS {
  /**
   * @see {@link CreateAppCommand}
   */
  createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationJobCommand}
   */
  createReplicationJob(
    args: CreateReplicationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationJobCommandOutput>;
  createReplicationJob(
    args: CreateReplicationJobCommandInput,
    cb: (err: any, data?: CreateReplicationJobCommandOutput) => void
  ): void;
  createReplicationJob(
    args: CreateReplicationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppLaunchConfigurationCommand}
   */
  deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppLaunchConfigurationCommandOutput>;
  deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationCommandInput,
    cb: (err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void
  ): void;
  deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppReplicationConfigurationCommand}
   */
  deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppReplicationConfigurationCommandOutput>;
  deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationCommandInput,
    cb: (err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void
  ): void;
  deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppValidationConfigurationCommand}
   */
  deleteAppValidationConfiguration(
    args: DeleteAppValidationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppValidationConfigurationCommandOutput>;
  deleteAppValidationConfiguration(
    args: DeleteAppValidationConfigurationCommandInput,
    cb: (err: any, data?: DeleteAppValidationConfigurationCommandOutput) => void
  ): void;
  deleteAppValidationConfiguration(
    args: DeleteAppValidationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppValidationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationJobCommand}
   */
  deleteReplicationJob(
    args: DeleteReplicationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationJobCommandOutput>;
  deleteReplicationJob(
    args: DeleteReplicationJobCommandInput,
    cb: (err: any, data?: DeleteReplicationJobCommandOutput) => void
  ): void;
  deleteReplicationJob(
    args: DeleteReplicationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServerCatalogCommand}
   */
  deleteServerCatalog(
    args: DeleteServerCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCatalogCommandOutput>;
  deleteServerCatalog(
    args: DeleteServerCatalogCommandInput,
    cb: (err: any, data?: DeleteServerCatalogCommandOutput) => void
  ): void;
  deleteServerCatalog(
    args: DeleteServerCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateConnectorCommand}
   */
  disassociateConnector(
    args: DisassociateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConnectorCommandOutput>;
  disassociateConnector(
    args: DisassociateConnectorCommandInput,
    cb: (err: any, data?: DisassociateConnectorCommandOutput) => void
  ): void;
  disassociateConnector(
    args: DisassociateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateChangeSetCommand}
   */
  generateChangeSet(
    args: GenerateChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateChangeSetCommandOutput>;
  generateChangeSet(
    args: GenerateChangeSetCommandInput,
    cb: (err: any, data?: GenerateChangeSetCommandOutput) => void
  ): void;
  generateChangeSet(
    args: GenerateChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateTemplateCommand}
   */
  generateTemplate(
    args: GenerateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateTemplateCommandOutput>;
  generateTemplate(
    args: GenerateTemplateCommandInput,
    cb: (err: any, data?: GenerateTemplateCommandOutput) => void
  ): void;
  generateTemplate(
    args: GenerateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppCommand}
   */
  getApp(args: GetAppCommandInput, options?: __HttpHandlerOptions): Promise<GetAppCommandOutput>;
  getApp(args: GetAppCommandInput, cb: (err: any, data?: GetAppCommandOutput) => void): void;
  getApp(
    args: GetAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppLaunchConfigurationCommand}
   */
  getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppLaunchConfigurationCommandOutput>;
  getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationCommandInput,
    cb: (err: any, data?: GetAppLaunchConfigurationCommandOutput) => void
  ): void;
  getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppReplicationConfigurationCommand}
   */
  getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppReplicationConfigurationCommandOutput>;
  getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetAppReplicationConfigurationCommandOutput) => void
  ): void;
  getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppValidationConfigurationCommand}
   */
  getAppValidationConfiguration(
    args: GetAppValidationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppValidationConfigurationCommandOutput>;
  getAppValidationConfiguration(
    args: GetAppValidationConfigurationCommandInput,
    cb: (err: any, data?: GetAppValidationConfigurationCommandOutput) => void
  ): void;
  getAppValidationConfiguration(
    args: GetAppValidationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppValidationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppValidationOutputCommand}
   */
  getAppValidationOutput(
    args: GetAppValidationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppValidationOutputCommandOutput>;
  getAppValidationOutput(
    args: GetAppValidationOutputCommandInput,
    cb: (err: any, data?: GetAppValidationOutputCommandOutput) => void
  ): void;
  getAppValidationOutput(
    args: GetAppValidationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppValidationOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectorsCommand}
   */
  getConnectors(args: GetConnectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectorsCommandOutput>;
  getConnectors(args: GetConnectorsCommandInput, cb: (err: any, data?: GetConnectorsCommandOutput) => void): void;
  getConnectors(
    args: GetConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReplicationJobsCommand}
   */
  getReplicationJobs(
    args: GetReplicationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationJobsCommandOutput>;
  getReplicationJobs(
    args: GetReplicationJobsCommandInput,
    cb: (err: any, data?: GetReplicationJobsCommandOutput) => void
  ): void;
  getReplicationJobs(
    args: GetReplicationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReplicationRunsCommand}
   */
  getReplicationRuns(
    args: GetReplicationRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationRunsCommandOutput>;
  getReplicationRuns(
    args: GetReplicationRunsCommandInput,
    cb: (err: any, data?: GetReplicationRunsCommandOutput) => void
  ): void;
  getReplicationRuns(
    args: GetReplicationRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServersCommand}
   */
  getServers(args: GetServersCommandInput, options?: __HttpHandlerOptions): Promise<GetServersCommandOutput>;
  getServers(args: GetServersCommandInput, cb: (err: any, data?: GetServersCommandOutput) => void): void;
  getServers(
    args: GetServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportAppCatalogCommand}
   */
  importAppCatalog(
    args: ImportAppCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportAppCatalogCommandOutput>;
  importAppCatalog(
    args: ImportAppCatalogCommandInput,
    cb: (err: any, data?: ImportAppCatalogCommandOutput) => void
  ): void;
  importAppCatalog(
    args: ImportAppCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportAppCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportServerCatalogCommand}
   */
  importServerCatalog(
    args: ImportServerCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportServerCatalogCommandOutput>;
  importServerCatalog(
    args: ImportServerCatalogCommandInput,
    cb: (err: any, data?: ImportServerCatalogCommandOutput) => void
  ): void;
  importServerCatalog(
    args: ImportServerCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportServerCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link LaunchAppCommand}
   */
  launchApp(args: LaunchAppCommandInput, options?: __HttpHandlerOptions): Promise<LaunchAppCommandOutput>;
  launchApp(args: LaunchAppCommandInput, cb: (err: any, data?: LaunchAppCommandOutput) => void): void;
  launchApp(
    args: LaunchAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LaunchAppCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsCommand}
   */
  listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyAppValidationOutputCommand}
   */
  notifyAppValidationOutput(
    args: NotifyAppValidationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyAppValidationOutputCommandOutput>;
  notifyAppValidationOutput(
    args: NotifyAppValidationOutputCommandInput,
    cb: (err: any, data?: NotifyAppValidationOutputCommandOutput) => void
  ): void;
  notifyAppValidationOutput(
    args: NotifyAppValidationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyAppValidationOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAppLaunchConfigurationCommand}
   */
  putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppLaunchConfigurationCommandOutput>;
  putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationCommandInput,
    cb: (err: any, data?: PutAppLaunchConfigurationCommandOutput) => void
  ): void;
  putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAppReplicationConfigurationCommand}
   */
  putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppReplicationConfigurationCommandOutput>;
  putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationCommandInput,
    cb: (err: any, data?: PutAppReplicationConfigurationCommandOutput) => void
  ): void;
  putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAppValidationConfigurationCommand}
   */
  putAppValidationConfiguration(
    args: PutAppValidationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppValidationConfigurationCommandOutput>;
  putAppValidationConfiguration(
    args: PutAppValidationConfigurationCommandInput,
    cb: (err: any, data?: PutAppValidationConfigurationCommandOutput) => void
  ): void;
  putAppValidationConfiguration(
    args: PutAppValidationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppValidationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAppReplicationCommand}
   */
  startAppReplication(
    args: StartAppReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAppReplicationCommandOutput>;
  startAppReplication(
    args: StartAppReplicationCommandInput,
    cb: (err: any, data?: StartAppReplicationCommandOutput) => void
  ): void;
  startAppReplication(
    args: StartAppReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAppReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOnDemandAppReplicationCommand}
   */
  startOnDemandAppReplication(
    args: StartOnDemandAppReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOnDemandAppReplicationCommandOutput>;
  startOnDemandAppReplication(
    args: StartOnDemandAppReplicationCommandInput,
    cb: (err: any, data?: StartOnDemandAppReplicationCommandOutput) => void
  ): void;
  startOnDemandAppReplication(
    args: StartOnDemandAppReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOnDemandAppReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOnDemandReplicationRunCommand}
   */
  startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOnDemandReplicationRunCommandOutput>;
  startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunCommandInput,
    cb: (err: any, data?: StartOnDemandReplicationRunCommandOutput) => void
  ): void;
  startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOnDemandReplicationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAppReplicationCommand}
   */
  stopAppReplication(
    args: StopAppReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAppReplicationCommandOutput>;
  stopAppReplication(
    args: StopAppReplicationCommandInput,
    cb: (err: any, data?: StopAppReplicationCommandOutput) => void
  ): void;
  stopAppReplication(
    args: StopAppReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAppReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateAppCommand}
   */
  terminateApp(args: TerminateAppCommandInput, options?: __HttpHandlerOptions): Promise<TerminateAppCommandOutput>;
  terminateApp(args: TerminateAppCommandInput, cb: (err: any, data?: TerminateAppCommandOutput) => void): void;
  terminateApp(
    args: TerminateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppCommand}
   */
  updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
  updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
  updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationJobCommand}
   */
  updateReplicationJob(
    args: UpdateReplicationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationJobCommandOutput>;
  updateReplicationJob(
    args: UpdateReplicationJobCommandInput,
    cb: (err: any, data?: UpdateReplicationJobCommandOutput) => void
  ): void;
  updateReplicationJob(
    args: UpdateReplicationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationJobCommandOutput) => void
  ): void;
}

/**
 * @public
 * @deprecated
 *
 * <important>
 *             <p>
 *                <b>Product update</b>
 *             </p>
 *             <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services
 *                 MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is
 *                 unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March
 *                 2023.</p>
 *          </important>
 *          <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your
 *             on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following
 *             resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service
 *                     product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class SMS extends SMSClient implements SMS {}
createAggregatedClient(commands, SMS);
