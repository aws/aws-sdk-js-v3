// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeCatalystClient } from "./CodeCatalystClient";
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
  UpdateDevEnvironmentCommand,
  UpdateDevEnvironmentCommandInput,
  UpdateDevEnvironmentCommandOutput,
} from "./commands/UpdateDevEnvironmentCommand";
import {
  VerifySessionCommand,
  VerifySessionCommandInput,
  VerifySessionCommandOutput,
} from "./commands/VerifySessionCommand";

/**
 * <note>
 *             <p>
 *                <b>Amazon CodeCatalyst is in preview release and subject to change.</b>
 *             </p>
 *          </note>
 *          <p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst
 *       API to work with the following objects. </p>
 *          <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateDevEnvironment</a>, which creates a Dev Environment,
 *        where you can quickly work on the code stored in the source repositories of your project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateProject</a> which creates a project in a specified space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p>
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
 *                   <a>GetProject</a>, which returns information about a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source
 *        repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes
 *        and the billing plan for the space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDevEnvironments</a>, which retrives a list of Dev Environments in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListProjects</a>, which retrieves a list of projects in a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSpaces</a>, which retrieves a list of spaces.</p>
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
 *                   <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p>
 *             </li>
 *          </ul>
 *          <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p>
 *          <ul>
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
 *          </ul>
 */
export class CodeCatalyst extends CodeCatalystClient {
  /**
   * <p>Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password.
   *       It is associated with your user account. You use PATs to access Amazon CodeCatalyst resources such as source repositories from third-party applications
   *       like Git and integrated development environments (IDEs). For more information, see
   *       <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.</p>
   */
  public createAccessToken(
    args: CreateAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessTokenCommandOutput>;
  public createAccessToken(
    args: CreateAccessTokenCommandInput,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;
  public createAccessToken(
    args: CreateAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;
  public createAccessToken(
    args: CreateAccessTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessTokenCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): Promise<CreateAccessTokenCommandOutput> | void {
    const command = new CreateAccessTokenCommand(args);
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
   * <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development Dev Environment that you can use to quickly work on the code stored in the source repositories of your project.
   *       By default, a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. </p>
   */
  public createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDevEnvironmentCommandOutput>;
  public createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    cb: (err: any, data?: CreateDevEnvironmentCommandOutput) => void
  ): void;
  public createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDevEnvironmentCommandOutput) => void
  ): void;
  public createDevEnvironment(
    args: CreateDevEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDevEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: CreateDevEnvironmentCommandOutput) => void
  ): Promise<CreateDevEnvironmentCommandOutput> | void {
    const command = new CreateDevEnvironmentCommand(args);
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
   * <p>Creates a project in a specified space.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
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
   * <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p>
   *          <note>
   *             <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p>
   *          </note>
   */
  public createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSourceRepositoryBranchCommandOutput>;
  public createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    cb: (err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void
  ): void;
  public createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void
  ): void;
  public createSourceRepositoryBranch(
    args: CreateSourceRepositoryBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void),
    cb?: (err: any, data?: CreateSourceRepositoryBranchCommandOutput) => void
  ): Promise<CreateSourceRepositoryBranchCommandOutput> | void {
    const command = new CreateSourceRepositoryBranchCommand(args);
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
   * <p>Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.</p>
   */
  public deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessTokenCommandOutput>;
  public deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;
  public deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;
  public deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessTokenCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): Promise<DeleteAccessTokenCommandOutput> | void {
    const command = new DeleteAccessTokenCommand(args);
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
   * <p>Deletes a Dev Environment.  </p>
   */
  public deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDevEnvironmentCommandOutput>;
  public deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    cb: (err: any, data?: DeleteDevEnvironmentCommandOutput) => void
  ): void;
  public deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDevEnvironmentCommandOutput) => void
  ): void;
  public deleteDevEnvironment(
    args: DeleteDevEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDevEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteDevEnvironmentCommandOutput) => void
  ): Promise<DeleteDevEnvironmentCommandOutput> | void {
    const command = new DeleteDevEnvironmentCommand(args);
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
   * <p>Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.</p>
   */
  public getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEnvironmentCommandOutput>;
  public getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    cb: (err: any, data?: GetDevEnvironmentCommandOutput) => void
  ): void;
  public getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEnvironmentCommandOutput) => void
  ): void;
  public getDevEnvironment(
    args: GetDevEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: GetDevEnvironmentCommandOutput) => void
  ): Promise<GetDevEnvironmentCommandOutput> | void {
    const command = new GetDevEnvironmentCommand(args);
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
   * <p>Returns information about a project.</p>
   */
  public getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
  public getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
  public getProject(
    args: GetProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;
  public getProject(
    args: GetProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProjectCommandOutput) => void),
    cb?: (err: any, data?: GetProjectCommandOutput) => void
  ): Promise<GetProjectCommandOutput> | void {
    const command = new GetProjectCommand(args);
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
   * <p>Returns information about the URLs that can be used with a Git client to clone a source
   *       repository.</p>
   */
  public getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSourceRepositoryCloneUrlsCommandOutput>;
  public getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    cb: (err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void
  ): void;
  public getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void
  ): void;
  public getSourceRepositoryCloneUrls(
    args: GetSourceRepositoryCloneUrlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void),
    cb?: (err: any, data?: GetSourceRepositoryCloneUrlsCommandOutput) => void
  ): Promise<GetSourceRepositoryCloneUrlsCommandOutput> | void {
    const command = new GetSourceRepositoryCloneUrlsCommand(args);
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
   * <p>Returns information about an space.</p>
   */
  public getSpace(args: GetSpaceCommandInput, options?: __HttpHandlerOptions): Promise<GetSpaceCommandOutput>;
  public getSpace(args: GetSpaceCommandInput, cb: (err: any, data?: GetSpaceCommandOutput) => void): void;
  public getSpace(
    args: GetSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;
  public getSpace(
    args: GetSpaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSpaceCommandOutput) => void),
    cb?: (err: any, data?: GetSpaceCommandOutput) => void
  ): Promise<GetSpaceCommandOutput> | void {
    const command = new GetSpaceCommand(args);
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
   * <p>Returns information about the Amazon Web Services account used for billing purposes
   *       and the billing plan for the space.</p>
   */
  public getSubscription(
    args: GetSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionCommandOutput>;
  public getSubscription(
    args: GetSubscriptionCommandInput,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;
  public getSubscription(
    args: GetSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;
  public getSubscription(
    args: GetSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): Promise<GetSubscriptionCommandOutput> | void {
    const command = new GetSubscriptionCommand(args);
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
   * <p>Returns information about a user. </p>
   */
  public getUserDetails(
    args: GetUserDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDetailsCommandOutput>;
  public getUserDetails(
    args: GetUserDetailsCommandInput,
    cb: (err: any, data?: GetUserDetailsCommandOutput) => void
  ): void;
  public getUserDetails(
    args: GetUserDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDetailsCommandOutput) => void
  ): void;
  public getUserDetails(
    args: GetUserDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetUserDetailsCommandOutput) => void
  ): Promise<GetUserDetailsCommandOutput> | void {
    const command = new GetUserDetailsCommand(args);
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
   * <p>Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your user account.</p>
   */
  public listAccessTokens(
    args: ListAccessTokensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessTokensCommandOutput>;
  public listAccessTokens(
    args: ListAccessTokensCommandInput,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;
  public listAccessTokens(
    args: ListAccessTokensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;
  public listAccessTokens(
    args: ListAccessTokensCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessTokensCommandOutput) => void),
    cb?: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): Promise<ListAccessTokensCommandOutput> | void {
    const command = new ListAccessTokensCommand(args);
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
   * <p>Retrives a list of Dev Environments in a project.</p>
   */
  public listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevEnvironmentsCommandOutput>;
  public listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    cb: (err: any, data?: ListDevEnvironmentsCommandOutput) => void
  ): void;
  public listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevEnvironmentsCommandOutput) => void
  ): void;
  public listDevEnvironments(
    args: ListDevEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ListDevEnvironmentsCommandOutput) => void
  ): Promise<ListDevEnvironmentsCommandOutput> | void {
    const command = new ListDevEnvironmentsCommand(args);
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
   * <p>Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.</p>
   */
  public listEventLogs(
    args: ListEventLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventLogsCommandOutput>;
  public listEventLogs(
    args: ListEventLogsCommandInput,
    cb: (err: any, data?: ListEventLogsCommandOutput) => void
  ): void;
  public listEventLogs(
    args: ListEventLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventLogsCommandOutput) => void
  ): void;
  public listEventLogs(
    args: ListEventLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventLogsCommandOutput) => void),
    cb?: (err: any, data?: ListEventLogsCommandOutput) => void
  ): Promise<ListEventLogsCommandOutput> | void {
    const command = new ListEventLogsCommand(args);
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
   * <p>Retrieves a list of projects.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
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
   * <p>Retrieves a list of source repositories in a project.</p>
   */
  public listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceRepositoriesCommandOutput>;
  public listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    cb: (err: any, data?: ListSourceRepositoriesCommandOutput) => void
  ): void;
  public listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceRepositoriesCommandOutput) => void
  ): void;
  public listSourceRepositories(
    args: ListSourceRepositoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSourceRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: ListSourceRepositoriesCommandOutput) => void
  ): Promise<ListSourceRepositoriesCommandOutput> | void {
    const command = new ListSourceRepositoriesCommand(args);
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
   * <p>Retrieves a list of branches in a specified source repository.</p>
   */
  public listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceRepositoryBranchesCommandOutput>;
  public listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    cb: (err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void
  ): void;
  public listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void
  ): void;
  public listSourceRepositoryBranches(
    args: ListSourceRepositoryBranchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void),
    cb?: (err: any, data?: ListSourceRepositoryBranchesCommandOutput) => void
  ): Promise<ListSourceRepositoryBranchesCommandOutput> | void {
    const command = new ListSourceRepositoryBranchesCommand(args);
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
   * <p>Retrieves a list of spaces.</p>
   */
  public listSpaces(args: ListSpacesCommandInput, options?: __HttpHandlerOptions): Promise<ListSpacesCommandOutput>;
  public listSpaces(args: ListSpacesCommandInput, cb: (err: any, data?: ListSpacesCommandOutput) => void): void;
  public listSpaces(
    args: ListSpacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;
  public listSpaces(
    args: ListSpacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSpacesCommandOutput) => void),
    cb?: (err: any, data?: ListSpacesCommandOutput) => void
  ): Promise<ListSpacesCommandOutput> | void {
    const command = new ListSpacesCommand(args);
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
   * <p>Starts a specified Dev Environment and puts it into an active state. </p>
   */
  public startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDevEnvironmentCommandOutput>;
  public startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    cb: (err: any, data?: StartDevEnvironmentCommandOutput) => void
  ): void;
  public startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDevEnvironmentCommandOutput) => void
  ): void;
  public startDevEnvironment(
    args: StartDevEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDevEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: StartDevEnvironmentCommandOutput) => void
  ): Promise<StartDevEnvironmentCommandOutput> | void {
    const command = new StartDevEnvironmentCommand(args);
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
   * <p>Starts a session for a specified Dev Environment.</p>
   */
  public startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDevEnvironmentSessionCommandOutput>;
  public startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    cb: (err: any, data?: StartDevEnvironmentSessionCommandOutput) => void
  ): void;
  public startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDevEnvironmentSessionCommandOutput) => void
  ): void;
  public startDevEnvironmentSession(
    args: StartDevEnvironmentSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDevEnvironmentSessionCommandOutput) => void),
    cb?: (err: any, data?: StartDevEnvironmentSessionCommandOutput) => void
  ): Promise<StartDevEnvironmentSessionCommandOutput> | void {
    const command = new StartDevEnvironmentSessionCommand(args);
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
   * <p>Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.</p>
   */
  public stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDevEnvironmentCommandOutput>;
  public stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    cb: (err: any, data?: StopDevEnvironmentCommandOutput) => void
  ): void;
  public stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDevEnvironmentCommandOutput) => void
  ): void;
  public stopDevEnvironment(
    args: StopDevEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDevEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: StopDevEnvironmentCommandOutput) => void
  ): Promise<StopDevEnvironmentCommandOutput> | void {
    const command = new StopDevEnvironmentCommand(args);
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
   * <p>Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.</p>
   */
  public updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevEnvironmentCommandOutput>;
  public updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    cb: (err: any, data?: UpdateDevEnvironmentCommandOutput) => void
  ): void;
  public updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevEnvironmentCommandOutput) => void
  ): void;
  public updateDevEnvironment(
    args: UpdateDevEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDevEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateDevEnvironmentCommandOutput) => void
  ): Promise<UpdateDevEnvironmentCommandOutput> | void {
    const command = new UpdateDevEnvironmentCommand(args);
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
   * <p>Verifies whether the calling user has a valid Amazon CodeCatalyst login and session.  If successful, this returns the ID of the user in Amazon CodeCatalyst.</p>
   */
  public verifySession(
    args: VerifySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifySessionCommandOutput>;
  public verifySession(
    args: VerifySessionCommandInput,
    cb: (err: any, data?: VerifySessionCommandOutput) => void
  ): void;
  public verifySession(
    args: VerifySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifySessionCommandOutput) => void
  ): void;
  public verifySession(
    args: VerifySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifySessionCommandOutput) => void),
    cb?: (err: any, data?: VerifySessionCommandOutput) => void
  ): Promise<VerifySessionCommandOutput> | void {
    const command = new VerifySessionCommand(args);
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
