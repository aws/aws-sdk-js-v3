// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodeCatalystClient, CodeCatalystClientConfig } from "./CodeCatalystClient";
import {
  CreateAccessTokenCommand,
  CreateAccessTokenCommandInput,
  CreateAccessTokenCommandOutput,
} from "./commands/CreateAccessTokenCommand";
import {
  CreateDevEnvironmentCommand,
  CreateDevEnvironmentCommandInput,
  CreateDevEnvironmentCommandOutput,
} from "./commands/CreateDevEnvironmentCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateSourceRepositoryBranchCommand,
  CreateSourceRepositoryBranchCommandInput,
  CreateSourceRepositoryBranchCommandOutput,
} from "./commands/CreateSourceRepositoryBranchCommand";
import {
  CreateSourceRepositoryCommand,
  CreateSourceRepositoryCommandInput,
  CreateSourceRepositoryCommandOutput,
} from "./commands/CreateSourceRepositoryCommand";
import {
  DeleteAccessTokenCommand,
  DeleteAccessTokenCommandInput,
  DeleteAccessTokenCommandOutput,
} from "./commands/DeleteAccessTokenCommand";
import {
  DeleteDevEnvironmentCommand,
  DeleteDevEnvironmentCommandInput,
  DeleteDevEnvironmentCommandOutput,
} from "./commands/DeleteDevEnvironmentCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteSourceRepositoryCommand,
  DeleteSourceRepositoryCommandInput,
  DeleteSourceRepositoryCommandOutput,
} from "./commands/DeleteSourceRepositoryCommand";
import { DeleteSpaceCommand, DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import {
  GetDevEnvironmentCommand,
  GetDevEnvironmentCommandInput,
  GetDevEnvironmentCommandOutput,
} from "./commands/GetDevEnvironmentCommand";
import { GetProjectCommand, GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import {
  GetSourceRepositoryCloneUrlsCommand,
  GetSourceRepositoryCloneUrlsCommandInput,
  GetSourceRepositoryCloneUrlsCommandOutput,
} from "./commands/GetSourceRepositoryCloneUrlsCommand";
import {
  GetSourceRepositoryCommand,
  GetSourceRepositoryCommandInput,
  GetSourceRepositoryCommandOutput,
} from "./commands/GetSourceRepositoryCommand";
import { GetSpaceCommand, GetSpaceCommandInput, GetSpaceCommandOutput } from "./commands/GetSpaceCommand";
import {
  GetSubscriptionCommand,
  GetSubscriptionCommandInput,
  GetSubscriptionCommandOutput,
} from "./commands/GetSubscriptionCommand";
import {
  GetUserDetailsCommand,
  GetUserDetailsCommandInput,
  GetUserDetailsCommandOutput,
} from "./commands/GetUserDetailsCommand";
import {
  ListAccessTokensCommand,
  ListAccessTokensCommandInput,
  ListAccessTokensCommandOutput,
} from "./commands/ListAccessTokensCommand";
import {
  ListDevEnvironmentsCommand,
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
} from "./commands/ListDevEnvironmentsCommand";
import {
  ListDevEnvironmentSessionsCommand,
  ListDevEnvironmentSessionsCommandInput,
  ListDevEnvironmentSessionsCommandOutput,
} from "./commands/ListDevEnvironmentSessionsCommand";
import {
  ListEventLogsCommand,
  ListEventLogsCommandInput,
  ListEventLogsCommandOutput,
} from "./commands/ListEventLogsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListSourceRepositoriesCommand,
  ListSourceRepositoriesCommandInput,
  ListSourceRepositoriesCommandOutput,
} from "./commands/ListSourceRepositoriesCommand";
import {
  ListSourceRepositoryBranchesCommand,
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput,
} from "./commands/ListSourceRepositoryBranchesCommand";
import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import {
  StartDevEnvironmentCommand,
  StartDevEnvironmentCommandInput,
  StartDevEnvironmentCommandOutput,
} from "./commands/StartDevEnvironmentCommand";
import {
  StartDevEnvironmentSessionCommand,
  StartDevEnvironmentSessionCommandInput,
  StartDevEnvironmentSessionCommandOutput,
} from "./commands/StartDevEnvironmentSessionCommand";
import {
  StopDevEnvironmentCommand,
  StopDevEnvironmentCommandInput,
  StopDevEnvironmentCommandOutput,
} from "./commands/StopDevEnvironmentCommand";
import {
  StopDevEnvironmentSessionCommand,
  StopDevEnvironmentSessionCommandInput,
  StopDevEnvironmentSessionCommandOutput,
} from "./commands/StopDevEnvironmentSessionCommand";
import {
  UpdateDevEnvironmentCommand,
  UpdateDevEnvironmentCommandInput,
  UpdateDevEnvironmentCommandOutput,
} from "./commands/UpdateDevEnvironmentCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import { UpdateSpaceCommand, UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import {
  VerifySessionCommand,
  VerifySessionCommandInput,
  VerifySessionCommandOutput,
} from "./commands/VerifySessionCommand";

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
  ListAccessTokensCommand,
  ListDevEnvironmentsCommand,
  ListDevEnvironmentSessionsCommand,
  ListEventLogsCommand,
  ListProjectsCommand,
  ListSourceRepositoriesCommand,
  ListSourceRepositoryBranchesCommand,
  ListSpacesCommand,
  StartDevEnvironmentCommand,
  StartDevEnvironmentSessionCommand,
  StopDevEnvironmentCommand,
  StopDevEnvironmentSessionCommand,
  UpdateDevEnvironmentCommand,
  UpdateProjectCommand,
  UpdateSpaceCommand,
  VerifySessionCommand,
};

export interface CodeCatalyst {
  /**
   * @see {@link CreateAccessTokenCommand}
   */
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessTokenCommandOutput>;
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDevEnvironmentCommand}
   */
  createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDevEnvironmentCommandOutput>;
  createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    cb: (err: any, data?: CreateDevEnvironmentCommandOutput) => void
  ): void;
  createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSourceRepositoryCommand}
   */
  createSourceRepository(
    args: CreateSourceRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSourceRepositoryCommandOutput>;
  createSourceRepository(
    args: CreateSourceRepositoryCommandInput,
    cb: (err: any, data?: CreateSourceRepositoryCommandOutput) => void
  ): void;
  createSourceRepository(
    args: CreateSourceRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSourceRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSourceRepositoryBranchCommand}
   */
  createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSourceRepositoryBranchCommandOutput>;
  createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    cb: (err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void
  ): void;
  createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessTokenCommand}
   */
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessTokenCommandOutput>;
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDevEnvironmentCommand}
   */
  deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDevEnvironmentCommandOutput>;
  deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    cb: (err: any, data?: DeleteDevEnvironmentCommandOutput) => void
  ): void;
  deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceRepositoryCommand}
   */
  deleteSourceRepository(
    args: DeleteSourceRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceRepositoryCommandOutput>;
  deleteSourceRepository(
    args: DeleteSourceRepositoryCommandInput,
    cb: (err: any, data?: DeleteSourceRepositoryCommandOutput) => void
  ): void;
  deleteSourceRepository(
    args: DeleteSourceRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpaceCommand}
   */
  deleteSpace(args: DeleteSpaceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSpaceCommandOutput>;
  deleteSpace(args: DeleteSpaceCommandInput, cb: (err: any, data?: DeleteSpaceCommandOutput) => void): void;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevEnvironmentCommand}
   */
  getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEnvironmentCommandOutput>;
  getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    cb: (err: any, data?: GetDevEnvironmentCommandOutput) => void
  ): void;
  getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProjectCommand}
   */
  getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
  getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
  getProject(
    args: GetProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSourceRepositoryCommand}
   */
  getSourceRepository(
    args: GetSourceRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSourceRepositoryCommandOutput>;
  getSourceRepository(
    args: GetSourceRepositoryCommandInput,
    cb: (err: any, data?: GetSourceRepositoryCommandOutput) => void
  ): void;
  getSourceRepository(
    args: GetSourceRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSourceRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSourceRepositoryCloneUrlsCommand}
   */
  getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSourceRepositoryCloneUrlsCommandOutput>;
  getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    cb: (err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void
  ): void;
  getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpaceCommand}
   */
  getSpace(args: GetSpaceCommandInput, options?: __HttpHandlerOptions): Promise<GetSpaceCommandOutput>;
  getSpace(args: GetSpaceCommandInput, cb: (err: any, data?: GetSpaceCommandOutput) => void): void;
  getSpace(
    args: GetSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionCommand}
   */
  getSubscription(
    args: GetSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionCommandOutput>;
  getSubscription(args: GetSubscriptionCommandInput, cb: (err: any, data?: GetSubscriptionCommandOutput) => void): void;
  getSubscription(
    args: GetSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserDetailsCommand}
   */
  getUserDetails(
    args: GetUserDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDetailsCommandOutput>;
  getUserDetails(args: GetUserDetailsCommandInput, cb: (err: any, data?: GetUserDetailsCommandOutput) => void): void;
  getUserDetails(
    args: GetUserDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessTokensCommand}
   */
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessTokensCommandOutput>;
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevEnvironmentsCommand}
   */
  listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevEnvironmentsCommandOutput>;
  listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    cb: (err: any, data?: ListDevEnvironmentsCommandOutput) => void
  ): void;
  listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevEnvironmentSessionsCommand}
   */
  listDevEnvironmentSessions(
    args: ListDevEnvironmentSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevEnvironmentSessionsCommandOutput>;
  listDevEnvironmentSessions(
    args: ListDevEnvironmentSessionsCommandInput,
    cb: (err: any, data?: ListDevEnvironmentSessionsCommandOutput) => void
  ): void;
  listDevEnvironmentSessions(
    args: ListDevEnvironmentSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevEnvironmentSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventLogsCommand}
   */
  listEventLogs(args: ListEventLogsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventLogsCommandOutput>;
  listEventLogs(args: ListEventLogsCommandInput, cb: (err: any, data?: ListEventLogsCommandOutput) => void): void;
  listEventLogs(
    args: ListEventLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceRepositoriesCommand}
   */
  listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceRepositoriesCommandOutput>;
  listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    cb: (err: any, data?: ListSourceRepositoriesCommandOutput) => void
  ): void;
  listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceRepositoryBranchesCommand}
   */
  listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceRepositoryBranchesCommandOutput>;
  listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    cb: (err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void
  ): void;
  listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpacesCommand}
   */
  listSpaces(args: ListSpacesCommandInput, options?: __HttpHandlerOptions): Promise<ListSpacesCommandOutput>;
  listSpaces(args: ListSpacesCommandInput, cb: (err: any, data?: ListSpacesCommandOutput) => void): void;
  listSpaces(
    args: ListSpacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDevEnvironmentCommand}
   */
  startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDevEnvironmentCommandOutput>;
  startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    cb: (err: any, data?: StartDevEnvironmentCommandOutput) => void
  ): void;
  startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDevEnvironmentSessionCommand}
   */
  startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDevEnvironmentSessionCommandOutput>;
  startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    cb: (err: any, data?: StartDevEnvironmentSessionCommandOutput) => void
  ): void;
  startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDevEnvironmentSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDevEnvironmentCommand}
   */
  stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDevEnvironmentCommandOutput>;
  stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    cb: (err: any, data?: StopDevEnvironmentCommandOutput) => void
  ): void;
  stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDevEnvironmentSessionCommand}
   */
  stopDevEnvironmentSession(
    args: StopDevEnvironmentSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDevEnvironmentSessionCommandOutput>;
  stopDevEnvironmentSession(
    args: StopDevEnvironmentSessionCommandInput,
    cb: (err: any, data?: StopDevEnvironmentSessionCommandOutput) => void
  ): void;
  stopDevEnvironmentSession(
    args: StopDevEnvironmentSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDevEnvironmentSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDevEnvironmentCommand}
   */
  updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevEnvironmentCommandOutput>;
  updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    cb: (err: any, data?: UpdateDevEnvironmentCommandOutput) => void
  ): void;
  updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpaceCommand}
   */
  updateSpace(args: UpdateSpaceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSpaceCommandOutput>;
  updateSpace(args: UpdateSpaceCommandInput, cb: (err: any, data?: UpdateSpaceCommandOutput) => void): void;
  updateSpace(
    args: UpdateSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifySessionCommand}
   */
  verifySession(args: VerifySessionCommandInput, options?: __HttpHandlerOptions): Promise<VerifySessionCommandOutput>;
  verifySession(args: VerifySessionCommandInput, cb: (err: any, data?: VerifySessionCommandOutput) => void): void;
  verifySession(
    args: VerifySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifySessionCommandOutput) => void
  ): void;
}

/**
 * @public
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
 *                   <a>UpdateSpace</a>, which hanges one or more values for a space.</p>
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
 */
export class CodeCatalyst extends CodeCatalystClient implements CodeCatalyst {}
createAggregatedClient(commands, CodeCatalyst);
