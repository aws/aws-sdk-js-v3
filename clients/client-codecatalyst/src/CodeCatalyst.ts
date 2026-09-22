// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CodeCatalystClient } from "./CodeCatalystClient";
import {
  type CreateAccessTokenCommandInput,
  type CreateAccessTokenCommandOutput,
  CreateAccessTokenCommand,
} from "./commands/CreateAccessTokenCommand";
import {
  type CreateDevEnvironmentCommandInput,
  type CreateDevEnvironmentCommandOutput,
  CreateDevEnvironmentCommand,
} from "./commands/CreateDevEnvironmentCommand";
import {
  type CreateProjectCommandInput,
  type CreateProjectCommandOutput,
  CreateProjectCommand,
} from "./commands/CreateProjectCommand";
import {
  type CreateSourceRepositoryBranchCommandInput,
  type CreateSourceRepositoryBranchCommandOutput,
  CreateSourceRepositoryBranchCommand,
} from "./commands/CreateSourceRepositoryBranchCommand";
import {
  type CreateSourceRepositoryCommandInput,
  type CreateSourceRepositoryCommandOutput,
  CreateSourceRepositoryCommand,
} from "./commands/CreateSourceRepositoryCommand";
import {
  type DeleteAccessTokenCommandInput,
  type DeleteAccessTokenCommandOutput,
  DeleteAccessTokenCommand,
} from "./commands/DeleteAccessTokenCommand";
import {
  type DeleteDevEnvironmentCommandInput,
  type DeleteDevEnvironmentCommandOutput,
  DeleteDevEnvironmentCommand,
} from "./commands/DeleteDevEnvironmentCommand";
import {
  type DeleteProjectCommandInput,
  type DeleteProjectCommandOutput,
  DeleteProjectCommand,
} from "./commands/DeleteProjectCommand";
import {
  type DeleteSourceRepositoryCommandInput,
  type DeleteSourceRepositoryCommandOutput,
  DeleteSourceRepositoryCommand,
} from "./commands/DeleteSourceRepositoryCommand";
import {
  type DeleteSpaceCommandInput,
  type DeleteSpaceCommandOutput,
  DeleteSpaceCommand,
} from "./commands/DeleteSpaceCommand";
import {
  type GetDevEnvironmentCommandInput,
  type GetDevEnvironmentCommandOutput,
  GetDevEnvironmentCommand,
} from "./commands/GetDevEnvironmentCommand";
import {
  type GetProjectCommandInput,
  type GetProjectCommandOutput,
  GetProjectCommand,
} from "./commands/GetProjectCommand";
import {
  type GetSourceRepositoryCloneUrlsCommandInput,
  type GetSourceRepositoryCloneUrlsCommandOutput,
  GetSourceRepositoryCloneUrlsCommand,
} from "./commands/GetSourceRepositoryCloneUrlsCommand";
import {
  type GetSourceRepositoryCommandInput,
  type GetSourceRepositoryCommandOutput,
  GetSourceRepositoryCommand,
} from "./commands/GetSourceRepositoryCommand";
import { type GetSpaceCommandInput, type GetSpaceCommandOutput, GetSpaceCommand } from "./commands/GetSpaceCommand";
import {
  type GetSubscriptionCommandInput,
  type GetSubscriptionCommandOutput,
  GetSubscriptionCommand,
} from "./commands/GetSubscriptionCommand";
import {
  type GetUserDetailsCommandInput,
  type GetUserDetailsCommandOutput,
  GetUserDetailsCommand,
} from "./commands/GetUserDetailsCommand";
import {
  type GetWorkflowCommandInput,
  type GetWorkflowCommandOutput,
  GetWorkflowCommand,
} from "./commands/GetWorkflowCommand";
import {
  type GetWorkflowRunCommandInput,
  type GetWorkflowRunCommandOutput,
  GetWorkflowRunCommand,
} from "./commands/GetWorkflowRunCommand";
import {
  type ListAccessTokensCommandInput,
  type ListAccessTokensCommandOutput,
  ListAccessTokensCommand,
} from "./commands/ListAccessTokensCommand";
import {
  type ListDevEnvironmentsCommandInput,
  type ListDevEnvironmentsCommandOutput,
  ListDevEnvironmentsCommand,
} from "./commands/ListDevEnvironmentsCommand";
import {
  type ListDevEnvironmentSessionsCommandInput,
  type ListDevEnvironmentSessionsCommandOutput,
  ListDevEnvironmentSessionsCommand,
} from "./commands/ListDevEnvironmentSessionsCommand";
import {
  type ListEventLogsCommandInput,
  type ListEventLogsCommandOutput,
  ListEventLogsCommand,
} from "./commands/ListEventLogsCommand";
import {
  type ListProjectsCommandInput,
  type ListProjectsCommandOutput,
  ListProjectsCommand,
} from "./commands/ListProjectsCommand";
import {
  type ListSourceRepositoriesCommandInput,
  type ListSourceRepositoriesCommandOutput,
  ListSourceRepositoriesCommand,
} from "./commands/ListSourceRepositoriesCommand";
import {
  type ListSourceRepositoryBranchesCommandInput,
  type ListSourceRepositoryBranchesCommandOutput,
  ListSourceRepositoryBranchesCommand,
} from "./commands/ListSourceRepositoryBranchesCommand";
import {
  type ListSpacesCommandInput,
  type ListSpacesCommandOutput,
  ListSpacesCommand,
} from "./commands/ListSpacesCommand";
import {
  type ListWorkflowRunsCommandInput,
  type ListWorkflowRunsCommandOutput,
  ListWorkflowRunsCommand,
} from "./commands/ListWorkflowRunsCommand";
import {
  type ListWorkflowsCommandInput,
  type ListWorkflowsCommandOutput,
  ListWorkflowsCommand,
} from "./commands/ListWorkflowsCommand";
import {
  type StartDevEnvironmentCommandInput,
  type StartDevEnvironmentCommandOutput,
  StartDevEnvironmentCommand,
} from "./commands/StartDevEnvironmentCommand";
import {
  type StartDevEnvironmentSessionCommandInput,
  type StartDevEnvironmentSessionCommandOutput,
  StartDevEnvironmentSessionCommand,
} from "./commands/StartDevEnvironmentSessionCommand";
import {
  type StartWorkflowRunCommandInput,
  type StartWorkflowRunCommandOutput,
  StartWorkflowRunCommand,
} from "./commands/StartWorkflowRunCommand";
import {
  type StopDevEnvironmentCommandInput,
  type StopDevEnvironmentCommandOutput,
  StopDevEnvironmentCommand,
} from "./commands/StopDevEnvironmentCommand";
import {
  type StopDevEnvironmentSessionCommandInput,
  type StopDevEnvironmentSessionCommandOutput,
  StopDevEnvironmentSessionCommand,
} from "./commands/StopDevEnvironmentSessionCommand";
import {
  type UpdateDevEnvironmentCommandInput,
  type UpdateDevEnvironmentCommandOutput,
  UpdateDevEnvironmentCommand,
} from "./commands/UpdateDevEnvironmentCommand";
import {
  type UpdateProjectCommandInput,
  type UpdateProjectCommandOutput,
  UpdateProjectCommand,
} from "./commands/UpdateProjectCommand";
import {
  type UpdateSpaceCommandInput,
  type UpdateSpaceCommandOutput,
  UpdateSpaceCommand,
} from "./commands/UpdateSpaceCommand";
import {
  type VerifySessionCommandInput,
  type VerifySessionCommandOutput,
  VerifySessionCommand,
} from "./commands/VerifySessionCommand";
import { paginateListAccessTokens } from "./pagination/ListAccessTokensPaginator";
import { paginateListDevEnvironmentSessions } from "./pagination/ListDevEnvironmentSessionsPaginator";
import { paginateListDevEnvironments } from "./pagination/ListDevEnvironmentsPaginator";
import { paginateListEventLogs } from "./pagination/ListEventLogsPaginator";
import { paginateListProjects } from "./pagination/ListProjectsPaginator";
import { paginateListSourceRepositories } from "./pagination/ListSourceRepositoriesPaginator";
import { paginateListSourceRepositoryBranches } from "./pagination/ListSourceRepositoryBranchesPaginator";
import { paginateListSpaces } from "./pagination/ListSpacesPaginator";
import { paginateListWorkflowRuns } from "./pagination/ListWorkflowRunsPaginator";
import { paginateListWorkflows } from "./pagination/ListWorkflowsPaginator";

const commands = {
  CreateAccessTokenCommand,
  CreateDevEnvironmentCommand,
  CreateProjectCommand,
  CreateSourceRepositoryCommand,
  CreateSourceRepositoryBranchCommand,
  DeleteAccessTokenCommand,
  DeleteDevEnvironmentCommand,
  DeleteProjectCommand,
  DeleteSourceRepositoryCommand,
  DeleteSpaceCommand,
  GetDevEnvironmentCommand,
  GetProjectCommand,
  GetSourceRepositoryCommand,
  GetSourceRepositoryCloneUrlsCommand,
  GetSpaceCommand,
  GetSubscriptionCommand,
  GetUserDetailsCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  ListAccessTokensCommand,
  ListDevEnvironmentsCommand,
  ListDevEnvironmentSessionsCommand,
  ListEventLogsCommand,
  ListProjectsCommand,
  ListSourceRepositoriesCommand,
  ListSourceRepositoryBranchesCommand,
  ListSpacesCommand,
  ListWorkflowRunsCommand,
  ListWorkflowsCommand,
  StartDevEnvironmentCommand,
  StartDevEnvironmentSessionCommand,
  StartWorkflowRunCommand,
  StopDevEnvironmentCommand,
  StopDevEnvironmentSessionCommand,
  UpdateDevEnvironmentCommand,
  UpdateProjectCommand,
  UpdateSpaceCommand,
  VerifySessionCommand,
};
const paginators = {
  paginateListAccessTokens,
  paginateListDevEnvironments,
  paginateListDevEnvironmentSessions,
  paginateListEventLogs,
  paginateListProjects,
  paginateListSourceRepositories,
  paginateListSourceRepositoryBranches,
  paginateListSpaces,
  paginateListWorkflowRuns,
  paginateListWorkflows,
};

/**
 * @public
 */
export interface CodeCatalystRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CodeCatalyst {
  /**
   * @see {@link CreateAccessTokenCommand}
   */
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<CreateAccessTokenCommandOutput>;
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDevEnvironmentCommand}
   */
  createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<CreateDevEnvironmentCommandOutput>;
  createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    cb: (err: any, data?: CreateDevEnvironmentCommandOutput) => void
  ): void;
  createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: CreateDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(
    args: CreateProjectCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<CreateProjectCommandOutput>;
  createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  createProject(
    args: CreateProjectCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSourceRepositoryCommand}
   */
  createSourceRepository(
    args: CreateSourceRepositoryCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<CreateSourceRepositoryCommandOutput>;
  createSourceRepository(
    args: CreateSourceRepositoryCommandInput,
    cb: (err: any, data?: CreateSourceRepositoryCommandOutput) => void
  ): void;
  createSourceRepository(
    args: CreateSourceRepositoryCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: CreateSourceRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSourceRepositoryBranchCommand}
   */
  createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<CreateSourceRepositoryBranchCommandOutput>;
  createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    cb: (err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void
  ): void;
  createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessTokenCommand}
   */
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<DeleteAccessTokenCommandOutput>;
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDevEnvironmentCommand}
   */
  deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<DeleteDevEnvironmentCommandOutput>;
  deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    cb: (err: any, data?: DeleteDevEnvironmentCommandOutput) => void
  ): void;
  deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: DeleteDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(
    args: DeleteProjectCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<DeleteProjectCommandOutput>;
  deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceRepositoryCommand}
   */
  deleteSourceRepository(
    args: DeleteSourceRepositoryCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<DeleteSourceRepositoryCommandOutput>;
  deleteSourceRepository(
    args: DeleteSourceRepositoryCommandInput,
    cb: (err: any, data?: DeleteSourceRepositoryCommandOutput) => void
  ): void;
  deleteSourceRepository(
    args: DeleteSourceRepositoryCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: DeleteSourceRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpaceCommand}
   */
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<DeleteSpaceCommandOutput>;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevEnvironmentCommand}
   */
  getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetDevEnvironmentCommandOutput>;
  getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    cb: (err: any, data?: GetDevEnvironmentCommandOutput) => void
  ): void;
  getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProjectCommand}
   */
  getProject(
    args: GetProjectCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetProjectCommandOutput>;
  getProject(
    args: GetProjectCommandInput,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;
  getProject(
    args: GetProjectCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSourceRepositoryCommand}
   */
  getSourceRepository(
    args: GetSourceRepositoryCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetSourceRepositoryCommandOutput>;
  getSourceRepository(
    args: GetSourceRepositoryCommandInput,
    cb: (err: any, data?: GetSourceRepositoryCommandOutput) => void
  ): void;
  getSourceRepository(
    args: GetSourceRepositoryCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetSourceRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSourceRepositoryCloneUrlsCommand}
   */
  getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetSourceRepositoryCloneUrlsCommandOutput>;
  getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    cb: (err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void
  ): void;
  getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpaceCommand}
   */
  getSpace(
    args: GetSpaceCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetSpaceCommandOutput>;
  getSpace(
    args: GetSpaceCommandInput,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;
  getSpace(
    args: GetSpaceCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionCommand}
   */
  getSubscription(
    args: GetSubscriptionCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetSubscriptionCommandOutput>;
  getSubscription(
    args: GetSubscriptionCommandInput,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;
  getSubscription(
    args: GetSubscriptionCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserDetailsCommand}
   */
  getUserDetails(): Promise<GetUserDetailsCommandOutput>;
  getUserDetails(
    args: GetUserDetailsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetUserDetailsCommandOutput>;
  getUserDetails(
    args: GetUserDetailsCommandInput,
    cb: (err: any, data?: GetUserDetailsCommandOutput) => void
  ): void;
  getUserDetails(
    args: GetUserDetailsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetUserDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(
    args: GetWorkflowCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetWorkflowCommandOutput>;
  getWorkflow(
    args: GetWorkflowCommandInput,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunCommand}
   */
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<GetWorkflowRunCommandOutput>;
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessTokensCommand}
   */
  listAccessTokens(): Promise<ListAccessTokensCommandOutput>;
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListAccessTokensCommandOutput>;
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevEnvironmentsCommand}
   */
  listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListDevEnvironmentsCommandOutput>;
  listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    cb: (err: any, data?: ListDevEnvironmentsCommandOutput) => void
  ): void;
  listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListDevEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevEnvironmentSessionsCommand}
   */
  listDevEnvironmentSessions(
    args: ListDevEnvironmentSessionsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListDevEnvironmentSessionsCommandOutput>;
  listDevEnvironmentSessions(
    args: ListDevEnvironmentSessionsCommandInput,
    cb: (err: any, data?: ListDevEnvironmentSessionsCommandOutput) => void
  ): void;
  listDevEnvironmentSessions(
    args: ListDevEnvironmentSessionsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListDevEnvironmentSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventLogsCommand}
   */
  listEventLogs(
    args: ListEventLogsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListEventLogsCommandOutput>;
  listEventLogs(
    args: ListEventLogsCommandInput,
    cb: (err: any, data?: ListEventLogsCommandOutput) => void
  ): void;
  listEventLogs(
    args: ListEventLogsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListEventLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(
    args: ListProjectsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceRepositoriesCommand}
   */
  listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListSourceRepositoriesCommandOutput>;
  listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    cb: (err: any, data?: ListSourceRepositoriesCommandOutput) => void
  ): void;
  listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListSourceRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceRepositoryBranchesCommand}
   */
  listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListSourceRepositoryBranchesCommandOutput>;
  listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    cb: (err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void
  ): void;
  listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpacesCommand}
   */
  listSpaces(): Promise<ListSpacesCommandOutput>;
  listSpaces(
    args: ListSpacesCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListSpacesCommandOutput>;
  listSpaces(
    args: ListSpacesCommandInput,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;
  listSpaces(
    args: ListSpacesCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowRunsCommand}
   */
  listWorkflowRuns(
    args: ListWorkflowRunsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListWorkflowRunsCommandOutput>;
  listWorkflowRuns(
    args: ListWorkflowRunsCommandInput,
    cb: (err: any, data?: ListWorkflowRunsCommandOutput) => void
  ): void;
  listWorkflowRuns(
    args: ListWorkflowRunsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListWorkflowRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDevEnvironmentCommand}
   */
  startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<StartDevEnvironmentCommandOutput>;
  startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    cb: (err: any, data?: StartDevEnvironmentCommandOutput) => void
  ): void;
  startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: StartDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDevEnvironmentSessionCommand}
   */
  startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<StartDevEnvironmentSessionCommandOutput>;
  startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    cb: (err: any, data?: StartDevEnvironmentSessionCommandOutput) => void
  ): void;
  startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: StartDevEnvironmentSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkflowRunCommand}
   */
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<StartWorkflowRunCommandOutput>;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDevEnvironmentCommand}
   */
  stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<StopDevEnvironmentCommandOutput>;
  stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    cb: (err: any, data?: StopDevEnvironmentCommandOutput) => void
  ): void;
  stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: StopDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDevEnvironmentSessionCommand}
   */
  stopDevEnvironmentSession(
    args: StopDevEnvironmentSessionCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<StopDevEnvironmentSessionCommandOutput>;
  stopDevEnvironmentSession(
    args: StopDevEnvironmentSessionCommandInput,
    cb: (err: any, data?: StopDevEnvironmentSessionCommandOutput) => void
  ): void;
  stopDevEnvironmentSession(
    args: StopDevEnvironmentSessionCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: StopDevEnvironmentSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDevEnvironmentCommand}
   */
  updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<UpdateDevEnvironmentCommandOutput>;
  updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    cb: (err: any, data?: UpdateDevEnvironmentCommandOutput) => void
  ): void;
  updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: UpdateDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(
    args: UpdateProjectCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<UpdateProjectCommandOutput>;
  updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpaceCommand}
   */
  updateSpace(
    args: UpdateSpaceCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<UpdateSpaceCommandOutput>;
  updateSpace(
    args: UpdateSpaceCommandInput,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;
  updateSpace(
    args: UpdateSpaceCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifySessionCommand}
   */
  verifySession(): Promise<VerifySessionCommandOutput>;
  verifySession(
    args: VerifySessionCommandInput,
    options?: CodeCatalystRequestOptions
  ): Promise<VerifySessionCommandOutput>;
  verifySession(
    args: VerifySessionCommandInput,
    cb: (err: any, data?: VerifySessionCommandOutput) => void
  ): void;
  verifySession(
    args: VerifySessionCommandInput,
    options: CodeCatalystRequestOptions,
    cb: (err: any, data?: VerifySessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessTokensCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessTokensCommandOutput}.
   */
  paginateListAccessTokens(
    args?: ListAccessTokensCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessTokensCommandOutput>;

  /**
   * @see {@link ListDevEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevEnvironmentsCommandOutput}.
   */
  paginateListDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevEnvironmentsCommandOutput>;

  /**
   * @see {@link ListDevEnvironmentSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevEnvironmentSessionsCommandOutput}.
   */
  paginateListDevEnvironmentSessions(
    args: ListDevEnvironmentSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevEnvironmentSessionsCommandOutput>;

  /**
   * @see {@link ListEventLogsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventLogsCommandOutput}.
   */
  paginateListEventLogs(
    args: ListEventLogsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventLogsCommandOutput>;

  /**
   * @see {@link ListProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectsCommandOutput}.
   */
  paginateListProjects(
    args: ListProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectsCommandOutput>;

  /**
   * @see {@link ListSourceRepositoriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourceRepositoriesCommandOutput}.
   */
  paginateListSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourceRepositoriesCommandOutput>;

  /**
   * @see {@link ListSourceRepositoryBranchesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourceRepositoryBranchesCommandOutput}.
   */
  paginateListSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourceRepositoryBranchesCommandOutput>;

  /**
   * @see {@link ListSpacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSpacesCommandOutput}.
   */
  paginateListSpaces(
    args?: ListSpacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSpacesCommandOutput>;

  /**
   * @see {@link ListWorkflowRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowRunsCommandOutput}.
   */
  paginateListWorkflowRuns(
    args: ListWorkflowRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowRunsCommandOutput>;

  /**
   * @see {@link ListWorkflowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowsCommandOutput}.
   */
  paginateListWorkflows(
    args: ListWorkflowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowsCommandOutput>;
}

/**
 * <p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst
 *       API to work with the following objects. </p>
 *          <p>Spaces, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteSpace</a>, which deletes a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSpace</a>, which returns information about a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes
 *         and the billing plan for the space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSpaces</a>, which retrieves a list of spaces.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateSpace</a>, which changes one or more values for a space.</p>
 *             </li>
 *          </ul>
 *          <p>Projects, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateProject</a> which creates a project in a specified space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetProject</a>, which returns information about a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListProjects</a>, which retrieves a list of projects in a space.</p>
 *             </li>
 *          </ul>
 *          <p>Users, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p>
 *             </li>
 *          </ul>
 *          <p>Source repositories, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateSourceRepository</a>, which creates an empty Git-based source repository in a specified project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSourceRepository</a>, which deletes a source repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSourceRepository</a>, which returns information about a source repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source
 *         repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p>
 *             </li>
 *          </ul>
 *          <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDevEnvironment</a>, which creates a Dev Environment,
 *        where you can quickly work on the code stored in the source repositories of your project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDevEnvironments</a>, which retrieves a list of Dev Environments in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDevEnvironmentSessions</a>, which retrieves a list of active Dev Environment sessions in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p>
 *             </li>
 *          </ul>
 *          <p>Workflows, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetWorkflow</a>, which returns information about a workflow.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetWorkflowRun</a>, which returns information about a specified run of a workflow.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListWorkflowRuns</a>, which retrieves a list of runs of a specified workflow.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListWorkflows</a>, which retrieves a list of workflows in a specified project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartWorkflowRun</a>, which starts a run of a specified workflow.</p>
 *             </li>
 *          </ul>
 *          <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO).
 *         For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html">Setting up to use the CLI with Amazon CodeCatalyst</a>
 *       and the SSO documentation for your SDK.</p>
 *          </note>
 * @public
 */
export class CodeCatalyst extends CodeCatalystClient implements CodeCatalyst {}
createAggregatedClient(commands, CodeCatalyst, { paginators });
