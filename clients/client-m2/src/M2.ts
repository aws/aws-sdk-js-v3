// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelBatchJobExecutionCommand,
  CancelBatchJobExecutionCommandInput,
  CancelBatchJobExecutionCommandOutput,
} from "./commands/CancelBatchJobExecutionCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateDataSetImportTaskCommand,
  CreateDataSetImportTaskCommandInput,
  CreateDataSetImportTaskCommandOutput,
} from "./commands/CreateDataSetImportTaskCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationFromEnvironmentCommand,
  DeleteApplicationFromEnvironmentCommandInput,
  DeleteApplicationFromEnvironmentCommandOutput,
} from "./commands/DeleteApplicationFromEnvironmentCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetApplicationVersionCommand,
  GetApplicationVersionCommandInput,
  GetApplicationVersionCommandOutput,
} from "./commands/GetApplicationVersionCommand";
import {
  GetBatchJobExecutionCommand,
  GetBatchJobExecutionCommandInput,
  GetBatchJobExecutionCommandOutput,
} from "./commands/GetBatchJobExecutionCommand";
import {
  GetDataSetDetailsCommand,
  GetDataSetDetailsCommandInput,
  GetDataSetDetailsCommandOutput,
} from "./commands/GetDataSetDetailsCommand";
import {
  GetDataSetImportTaskCommand,
  GetDataSetImportTaskCommandInput,
  GetDataSetImportTaskCommandOutput,
} from "./commands/GetDataSetImportTaskCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "./commands/ListApplicationVersionsCommand";
import {
  ListBatchJobDefinitionsCommand,
  ListBatchJobDefinitionsCommandInput,
  ListBatchJobDefinitionsCommandOutput,
} from "./commands/ListBatchJobDefinitionsCommand";
import {
  ListBatchJobExecutionsCommand,
  ListBatchJobExecutionsCommandInput,
  ListBatchJobExecutionsCommandOutput,
} from "./commands/ListBatchJobExecutionsCommand";
import {
  ListDataSetImportHistoryCommand,
  ListDataSetImportHistoryCommandInput,
  ListDataSetImportHistoryCommandOutput,
} from "./commands/ListDataSetImportHistoryCommand";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "./commands/ListDataSetsCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "./commands/ListEngineVersionsCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartApplicationCommand,
  StartApplicationCommandInput,
  StartApplicationCommandOutput,
} from "./commands/StartApplicationCommand";
import {
  StartBatchJobCommand,
  StartBatchJobCommandInput,
  StartBatchJobCommandOutput,
} from "./commands/StartBatchJobCommand";
import {
  StopApplicationCommand,
  StopApplicationCommandInput,
  StopApplicationCommandOutput,
} from "./commands/StopApplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import { M2Client, M2ClientConfig } from "./M2Client";

const commands = {
  CancelBatchJobExecutionCommand,
  CreateApplicationCommand,
  CreateDataSetImportTaskCommand,
  CreateDeploymentCommand,
  CreateEnvironmentCommand,
  DeleteApplicationCommand,
  DeleteApplicationFromEnvironmentCommand,
  DeleteEnvironmentCommand,
  GetApplicationCommand,
  GetApplicationVersionCommand,
  GetBatchJobExecutionCommand,
  GetDataSetDetailsCommand,
  GetDataSetImportTaskCommand,
  GetDeploymentCommand,
  GetEnvironmentCommand,
  ListApplicationsCommand,
  ListApplicationVersionsCommand,
  ListBatchJobDefinitionsCommand,
  ListBatchJobExecutionsCommand,
  ListDataSetImportHistoryCommand,
  ListDataSetsCommand,
  ListDeploymentsCommand,
  ListEngineVersionsCommand,
  ListEnvironmentsCommand,
  ListTagsForResourceCommand,
  StartApplicationCommand,
  StartBatchJobCommand,
  StopApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateEnvironmentCommand,
};

export interface M2 {
  /**
   * @see {@link CancelBatchJobExecutionCommand}
   */
  cancelBatchJobExecution(
    args: CancelBatchJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBatchJobExecutionCommandOutput>;
  cancelBatchJobExecution(
    args: CancelBatchJobExecutionCommandInput,
    cb: (err: any, data?: CancelBatchJobExecutionCommandOutput) => void
  ): void;
  cancelBatchJobExecution(
    args: CancelBatchJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBatchJobExecutionCommandOutput) => void
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
   * @see {@link CreateDataSetImportTaskCommand}
   */
  createDataSetImportTask(
    args: CreateDataSetImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSetImportTaskCommandOutput>;
  createDataSetImportTask(
    args: CreateDataSetImportTaskCommandInput,
    cb: (err: any, data?: CreateDataSetImportTaskCommandOutput) => void
  ): void;
  createDataSetImportTask(
    args: CreateDataSetImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSetImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationFromEnvironmentCommand}
   */
  deleteApplicationFromEnvironment(
    args: DeleteApplicationFromEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationFromEnvironmentCommandOutput>;
  deleteApplicationFromEnvironment(
    args: DeleteApplicationFromEnvironmentCommandInput,
    cb: (err: any, data?: DeleteApplicationFromEnvironmentCommandOutput) => void
  ): void;
  deleteApplicationFromEnvironment(
    args: DeleteApplicationFromEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationFromEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationVersionCommand}
   */
  getApplicationVersion(
    args: GetApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationVersionCommandOutput>;
  getApplicationVersion(
    args: GetApplicationVersionCommandInput,
    cb: (err: any, data?: GetApplicationVersionCommandOutput) => void
  ): void;
  getApplicationVersion(
    args: GetApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchJobExecutionCommand}
   */
  getBatchJobExecution(
    args: GetBatchJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchJobExecutionCommandOutput>;
  getBatchJobExecution(
    args: GetBatchJobExecutionCommandInput,
    cb: (err: any, data?: GetBatchJobExecutionCommandOutput) => void
  ): void;
  getBatchJobExecution(
    args: GetBatchJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSetDetailsCommand}
   */
  getDataSetDetails(
    args: GetDataSetDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSetDetailsCommandOutput>;
  getDataSetDetails(
    args: GetDataSetDetailsCommandInput,
    cb: (err: any, data?: GetDataSetDetailsCommandOutput) => void
  ): void;
  getDataSetDetails(
    args: GetDataSetDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSetDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSetImportTaskCommand}
   */
  getDataSetImportTask(
    args: GetDataSetImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSetImportTaskCommandOutput>;
  getDataSetImportTask(
    args: GetDataSetImportTaskCommandInput,
    cb: (err: any, data?: GetDataSetImportTaskCommandOutput) => void
  ): void;
  getDataSetImportTask(
    args: GetDataSetImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSetImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
  getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationVersionsCommand}
   */
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationVersionsCommandOutput>;
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBatchJobDefinitionsCommand}
   */
  listBatchJobDefinitions(
    args: ListBatchJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchJobDefinitionsCommandOutput>;
  listBatchJobDefinitions(
    args: ListBatchJobDefinitionsCommandInput,
    cb: (err: any, data?: ListBatchJobDefinitionsCommandOutput) => void
  ): void;
  listBatchJobDefinitions(
    args: ListBatchJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchJobDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBatchJobExecutionsCommand}
   */
  listBatchJobExecutions(
    args: ListBatchJobExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchJobExecutionsCommandOutput>;
  listBatchJobExecutions(
    args: ListBatchJobExecutionsCommandInput,
    cb: (err: any, data?: ListBatchJobExecutionsCommandOutput) => void
  ): void;
  listBatchJobExecutions(
    args: ListBatchJobExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchJobExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSetImportHistoryCommand}
   */
  listDataSetImportHistory(
    args: ListDataSetImportHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetImportHistoryCommandOutput>;
  listDataSetImportHistory(
    args: ListDataSetImportHistoryCommandInput,
    cb: (err: any, data?: ListDataSetImportHistoryCommandOutput) => void
  ): void;
  listDataSetImportHistory(
    args: ListDataSetImportHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetImportHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSetsCommand}
   */
  listDataSets(args: ListDataSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSetsCommandOutput>;
  listDataSets(args: ListDataSetsCommandInput, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
  listDataSets(
    args: ListDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(args: ListDeploymentsCommandInput, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngineVersionsCommand}
   */
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngineVersionsCommandOutput>;
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartApplicationCommand}
   */
  startApplication(
    args: StartApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartApplicationCommandOutput>;
  startApplication(
    args: StartApplicationCommandInput,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;
  startApplication(
    args: StartApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBatchJobCommand}
   */
  startBatchJob(args: StartBatchJobCommandInput, options?: __HttpHandlerOptions): Promise<StartBatchJobCommandOutput>;
  startBatchJob(args: StartBatchJobCommandInput, cb: (err: any, data?: StartBatchJobCommandOutput) => void): void;
  startBatchJob(
    args: StartBatchJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBatchJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopApplicationCommand}
   */
  stopApplication(
    args: StopApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopApplicationCommandOutput>;
  stopApplication(args: StopApplicationCommandInput, cb: (err: any, data?: StopApplicationCommandOutput) => void): void;
  stopApplication(
    args: StopApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
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

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and
 *          modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for
 *          analyzing existing mainframe applications, developing or updating mainframe applications
 *          using COBOL or PL/I, and implementing an automated pipeline for continuous integration and
 *          continuous delivery (CI/CD) of the applications.</p>
 */
export class M2 extends M2Client implements M2 {}
createAggregatedClient(commands, M2);
