// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AmplifyClient } from "./AmplifyClient";
import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateBackendEnvironmentCommand,
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput,
} from "./commands/CreateBackendEnvironmentCommand";
import {
  CreateBranchCommand,
  CreateBranchCommandInput,
  CreateBranchCommandOutput,
} from "./commands/CreateBranchCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDomainAssociationCommand,
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput,
} from "./commands/CreateDomainAssociationCommand";
import {
  CreateWebhookCommand,
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput,
} from "./commands/CreateWebhookCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteBackendEnvironmentCommand,
  DeleteBackendEnvironmentCommandInput,
  DeleteBackendEnvironmentCommandOutput,
} from "./commands/DeleteBackendEnvironmentCommand";
import {
  DeleteBranchCommand,
  DeleteBranchCommandInput,
  DeleteBranchCommandOutput,
} from "./commands/DeleteBranchCommand";
import {
  DeleteDomainAssociationCommand,
  DeleteDomainAssociationCommandInput,
  DeleteDomainAssociationCommandOutput,
} from "./commands/DeleteDomainAssociationCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteWebhookCommand,
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
} from "./commands/DeleteWebhookCommand";
import {
  GenerateAccessLogsCommand,
  GenerateAccessLogsCommandInput,
  GenerateAccessLogsCommandOutput,
} from "./commands/GenerateAccessLogsCommand";
import { GetAppCommand, GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import {
  GetArtifactUrlCommand,
  GetArtifactUrlCommandInput,
  GetArtifactUrlCommandOutput,
} from "./commands/GetArtifactUrlCommand";
import {
  GetBackendEnvironmentCommand,
  GetBackendEnvironmentCommandInput,
  GetBackendEnvironmentCommandOutput,
} from "./commands/GetBackendEnvironmentCommand";
import { GetBranchCommand, GetBranchCommandInput, GetBranchCommandOutput } from "./commands/GetBranchCommand";
import {
  GetDomainAssociationCommand,
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput,
} from "./commands/GetDomainAssociationCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetWebhookCommand, GetWebhookCommandInput, GetWebhookCommandOutput } from "./commands/GetWebhookCommand";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "./commands/ListArtifactsCommand";
import {
  ListBackendEnvironmentsCommand,
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput,
} from "./commands/ListBackendEnvironmentsCommand";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "./commands/ListBranchesCommand";
import {
  ListDomainAssociationsCommand,
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
} from "./commands/ListDomainAssociationsCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWebhooksCommand,
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput,
} from "./commands/ListWebhooksCommand";
import {
  StartDeploymentCommand,
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput,
} from "./commands/StartDeploymentCommand";
import { StartJobCommand, StartJobCommandInput, StartJobCommandOutput } from "./commands/StartJobCommand";
import { StopJobCommand, StopJobCommandInput, StopJobCommandOutput } from "./commands/StopJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAppCommand, UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateBranchCommand,
  UpdateBranchCommandInput,
  UpdateBranchCommandOutput,
} from "./commands/UpdateBranchCommand";
import {
  UpdateDomainAssociationCommand,
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
} from "./commands/UpdateDomainAssociationCommand";
import {
  UpdateWebhookCommand,
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput,
} from "./commands/UpdateWebhookCommand";

/**
 * <p>Amplify enables developers to develop and deploy cloud-powered mobile and web apps.
 *             The Amplify Console provides a continuous delivery and hosting service for web
 *             applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The
 *             Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation
 *             for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a>
 *          </p>
 */
export class Amplify extends AmplifyClient {
  /**
   * <p> Creates a new Amplify app. </p>
   */
  public createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  public createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  public createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  public createApp(
    args: CreateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppCommandOutput) => void),
    cb?: (err: any, data?: CreateAppCommandOutput) => void
  ): Promise<CreateAppCommandOutput> | void {
    const command = new CreateAppCommand(args);
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
   * <p> Creates a new backend environment for an Amplify app. </p>
   */
  public createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendEnvironmentCommandOutput>;
  public createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;
  public createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;
  public createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackendEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): Promise<CreateBackendEnvironmentCommandOutput> | void {
    const command = new CreateBackendEnvironmentCommand(args);
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
   * <p> Creates a new branch for an Amplify app. </p>
   */
  public createBranch(
    args: CreateBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBranchCommandOutput>;
  public createBranch(args: CreateBranchCommandInput, cb: (err: any, data?: CreateBranchCommandOutput) => void): void;
  public createBranch(
    args: CreateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBranchCommandOutput) => void
  ): void;
  public createBranch(
    args: CreateBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBranchCommandOutput) => void),
    cb?: (err: any, data?: CreateBranchCommandOutput) => void
  ): Promise<CreateBranchCommandOutput> | void {
    const command = new CreateBranchCommand(args);
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
   * <p> Creates a deployment for a manually deployed Amplify app. Manually deployed apps are
   *             not connected to a repository. </p>
   */
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): Promise<CreateDeploymentCommandOutput> | void {
    const command = new CreateDeploymentCommand(args);
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
   * <p> Creates a new domain association for an Amplify app. This action associates a custom
   *             domain with the Amplify app </p>
   */
  public createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainAssociationCommandOutput>;
  public createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;
  public createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;
  public createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): Promise<CreateDomainAssociationCommandOutput> | void {
    const command = new CreateDomainAssociationCommand(args);
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
   * <p> Creates a new webhook on an Amplify app. </p>
   */
  public createWebhook(
    args: CreateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebhookCommandOutput>;
  public createWebhook(
    args: CreateWebhookCommandInput,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWebhookCommandOutput) => void),
    cb?: (err: any, data?: CreateWebhookCommandOutput) => void
  ): Promise<CreateWebhookCommandOutput> | void {
    const command = new CreateWebhookCommand(args);
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
   * <p> Deletes an existing Amplify app specified by an app ID. </p>
   */
  public deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  public deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppCommandOutput) => void
  ): Promise<DeleteAppCommandOutput> | void {
    const command = new DeleteAppCommand(args);
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
   * <p> Deletes a backend environment for an Amplify app. </p>
   */
  public deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendEnvironmentCommandOutput>;
  public deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;
  public deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;
  public deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackendEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): Promise<DeleteBackendEnvironmentCommandOutput> | void {
    const command = new DeleteBackendEnvironmentCommand(args);
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
   * <p> Deletes a branch for an Amplify app. </p>
   */
  public deleteBranch(
    args: DeleteBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBranchCommandOutput>;
  public deleteBranch(args: DeleteBranchCommandInput, cb: (err: any, data?: DeleteBranchCommandOutput) => void): void;
  public deleteBranch(
    args: DeleteBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBranchCommandOutput) => void
  ): void;
  public deleteBranch(
    args: DeleteBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBranchCommandOutput) => void),
    cb?: (err: any, data?: DeleteBranchCommandOutput) => void
  ): Promise<DeleteBranchCommandOutput> | void {
    const command = new DeleteBranchCommand(args);
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
   * <p> Deletes a domain association for an Amplify app. </p>
   */
  public deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainAssociationCommandOutput>;
  public deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;
  public deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;
  public deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): Promise<DeleteDomainAssociationCommandOutput> | void {
    const command = new DeleteDomainAssociationCommand(args);
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
   * <p> Deletes a job for a branch of an Amplify app. </p>
   */
  public deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  public deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobCommandOutput) => void
  ): Promise<DeleteJobCommandOutput> | void {
    const command = new DeleteJobCommand(args);
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
   * <p> Deletes a webhook. </p>
   */
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebhookCommandOutput>;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWebhookCommandOutput) => void),
    cb?: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): Promise<DeleteWebhookCommandOutput> | void {
    const command = new DeleteWebhookCommand(args);
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
   * <p> Returns the website access logs for a specific time range using a presigned URL.
   *         </p>
   */
  public generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateAccessLogsCommandOutput>;
  public generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): void;
  public generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): void;
  public generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateAccessLogsCommandOutput) => void),
    cb?: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): Promise<GenerateAccessLogsCommandOutput> | void {
    const command = new GenerateAccessLogsCommand(args);
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
   * <p> Returns an existing Amplify app by appID. </p>
   */
  public getApp(args: GetAppCommandInput, options?: __HttpHandlerOptions): Promise<GetAppCommandOutput>;
  public getApp(args: GetAppCommandInput, cb: (err: any, data?: GetAppCommandOutput) => void): void;
  public getApp(
    args: GetAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;
  public getApp(
    args: GetAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppCommandOutput) => void),
    cb?: (err: any, data?: GetAppCommandOutput) => void
  ): Promise<GetAppCommandOutput> | void {
    const command = new GetAppCommand(args);
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
   * <p> Returns the artifact info that corresponds to an artifact id. </p>
   */
  public getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArtifactUrlCommandOutput>;
  public getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    cb: (err: any, data?: GetArtifactUrlCommandOutput) => void
  ): void;
  public getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArtifactUrlCommandOutput) => void
  ): void;
  public getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetArtifactUrlCommandOutput) => void),
    cb?: (err: any, data?: GetArtifactUrlCommandOutput) => void
  ): Promise<GetArtifactUrlCommandOutput> | void {
    const command = new GetArtifactUrlCommand(args);
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
   * <p> Returns a backend environment for an Amplify app. </p>
   */
  public getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendEnvironmentCommandOutput>;
  public getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;
  public getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;
  public getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackendEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): Promise<GetBackendEnvironmentCommandOutput> | void {
    const command = new GetBackendEnvironmentCommand(args);
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
   * <p> Returns a branch for an Amplify app. </p>
   */
  public getBranch(args: GetBranchCommandInput, options?: __HttpHandlerOptions): Promise<GetBranchCommandOutput>;
  public getBranch(args: GetBranchCommandInput, cb: (err: any, data?: GetBranchCommandOutput) => void): void;
  public getBranch(
    args: GetBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBranchCommandOutput) => void
  ): void;
  public getBranch(
    args: GetBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBranchCommandOutput) => void),
    cb?: (err: any, data?: GetBranchCommandOutput) => void
  ): Promise<GetBranchCommandOutput> | void {
    const command = new GetBranchCommand(args);
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
   * <p> Returns the domain information for an Amplify app. </p>
   */
  public getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainAssociationCommandOutput>;
  public getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;
  public getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;
  public getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): Promise<GetDomainAssociationCommandOutput> | void {
    const command = new GetDomainAssociationCommand(args);
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
   * <p> Returns a job for a branch of an Amplify app. </p>
   */
  public getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  public getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  public getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  public getJob(
    args: GetJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobCommandOutput) => void),
    cb?: (err: any, data?: GetJobCommandOutput) => void
  ): Promise<GetJobCommandOutput> | void {
    const command = new GetJobCommand(args);
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
   * <p> Returns the webhook information that corresponds to a specified webhook ID. </p>
   */
  public getWebhook(args: GetWebhookCommandInput, options?: __HttpHandlerOptions): Promise<GetWebhookCommandOutput>;
  public getWebhook(args: GetWebhookCommandInput, cb: (err: any, data?: GetWebhookCommandOutput) => void): void;
  public getWebhook(
    args: GetWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebhookCommandOutput) => void
  ): void;
  public getWebhook(
    args: GetWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWebhookCommandOutput) => void),
    cb?: (err: any, data?: GetWebhookCommandOutput) => void
  ): Promise<GetWebhookCommandOutput> | void {
    const command = new GetWebhookCommand(args);
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
   * <p> Returns a list of the existing Amplify apps. </p>
   */
  public listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  public listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  public listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  public listApps(
    args: ListAppsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppsCommandOutput) => void),
    cb?: (err: any, data?: ListAppsCommandOutput) => void
  ): Promise<ListAppsCommandOutput> | void {
    const command = new ListAppsCommand(args);
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
   * <p> Returns a list of artifacts for a specified app, branch, and job. </p>
   */
  public listArtifacts(
    args: ListArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArtifactsCommandOutput>;
  public listArtifacts(
    args: ListArtifactsCommandInput,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  public listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  public listArtifacts(
    args: ListArtifactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListArtifactsCommandOutput) => void),
    cb?: (err: any, data?: ListArtifactsCommandOutput) => void
  ): Promise<ListArtifactsCommandOutput> | void {
    const command = new ListArtifactsCommand(args);
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
   * <p> Lists the backend environments for an Amplify app. </p>
   */
  public listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackendEnvironmentsCommandOutput>;
  public listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;
  public listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;
  public listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackendEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): Promise<ListBackendEnvironmentsCommandOutput> | void {
    const command = new ListBackendEnvironmentsCommand(args);
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
   * <p> Lists the branches of an Amplify app. </p>
   */
  public listBranches(
    args: ListBranchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBranchesCommandOutput>;
  public listBranches(args: ListBranchesCommandInput, cb: (err: any, data?: ListBranchesCommandOutput) => void): void;
  public listBranches(
    args: ListBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBranchesCommandOutput) => void
  ): void;
  public listBranches(
    args: ListBranchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBranchesCommandOutput) => void),
    cb?: (err: any, data?: ListBranchesCommandOutput) => void
  ): Promise<ListBranchesCommandOutput> | void {
    const command = new ListBranchesCommand(args);
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
   * <p> Returns the domain associations for an Amplify app. </p>
   */
  public listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainAssociationsCommandOutput>;
  public listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;
  public listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;
  public listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): Promise<ListDomainAssociationsCommandOutput> | void {
    const command = new ListDomainAssociationsCommand(args);
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
   * <p> Lists the jobs for a branch of an Amplify app. </p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * <p> Returns a list of tags for a specified Amazon Resource Name (ARN). </p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p> Returns a list of webhooks for an Amplify app. </p>
   */
  public listWebhooks(
    args: ListWebhooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebhooksCommandOutput>;
  public listWebhooks(args: ListWebhooksCommandInput, cb: (err: any, data?: ListWebhooksCommandOutput) => void): void;
  public listWebhooks(
    args: ListWebhooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;
  public listWebhooks(
    args: ListWebhooksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWebhooksCommandOutput) => void),
    cb?: (err: any, data?: ListWebhooksCommandOutput) => void
  ): Promise<ListWebhooksCommandOutput> | void {
    const command = new ListWebhooksCommand(args);
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
   * <p> Starts a deployment for a manually deployed app. Manually deployed apps are not
   *             connected to a repository. </p>
   */
  public startDeployment(
    args: StartDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeploymentCommandOutput>;
  public startDeployment(
    args: StartDeploymentCommandInput,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  public startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  public startDeployment(
    args: StartDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StartDeploymentCommandOutput) => void
  ): Promise<StartDeploymentCommandOutput> | void {
    const command = new StartDeploymentCommand(args);
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
   * <p> Starts a new job for a branch of an Amplify app. </p>
   */
  public startJob(args: StartJobCommandInput, options?: __HttpHandlerOptions): Promise<StartJobCommandOutput>;
  public startJob(args: StartJobCommandInput, cb: (err: any, data?: StartJobCommandOutput) => void): void;
  public startJob(
    args: StartJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobCommandOutput) => void
  ): void;
  public startJob(
    args: StartJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartJobCommandOutput) => void),
    cb?: (err: any, data?: StartJobCommandOutput) => void
  ): Promise<StartJobCommandOutput> | void {
    const command = new StartJobCommand(args);
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
   * <p> Stops a job that is in progress for a branch of an Amplify app. </p>
   */
  public stopJob(args: StopJobCommandInput, options?: __HttpHandlerOptions): Promise<StopJobCommandOutput>;
  public stopJob(args: StopJobCommandInput, cb: (err: any, data?: StopJobCommandOutput) => void): void;
  public stopJob(
    args: StopJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopJobCommandOutput) => void
  ): void;
  public stopJob(
    args: StopJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopJobCommandOutput) => void),
    cb?: (err: any, data?: StopJobCommandOutput) => void
  ): Promise<StopJobCommandOutput> | void {
    const command = new StopJobCommand(args);
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
   * <p> Tags the resource with a tag key and value. </p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p> Untags a resource with a specified Amazon Resource Name (ARN). </p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p> Updates an existing Amplify app. </p>
   */
  public updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
  public updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
  public updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;
  public updateApp(
    args: UpdateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppCommandOutput) => void
  ): Promise<UpdateAppCommandOutput> | void {
    const command = new UpdateAppCommand(args);
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
   * <p> Updates a branch for an Amplify app. </p>
   */
  public updateBranch(
    args: UpdateBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBranchCommandOutput>;
  public updateBranch(args: UpdateBranchCommandInput, cb: (err: any, data?: UpdateBranchCommandOutput) => void): void;
  public updateBranch(
    args: UpdateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBranchCommandOutput) => void
  ): void;
  public updateBranch(
    args: UpdateBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBranchCommandOutput) => void),
    cb?: (err: any, data?: UpdateBranchCommandOutput) => void
  ): Promise<UpdateBranchCommandOutput> | void {
    const command = new UpdateBranchCommand(args);
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
   * <p> Creates a new domain association for an Amplify app.</p>
   */
  public updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainAssociationCommandOutput>;
  public updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  public updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  public updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): Promise<UpdateDomainAssociationCommandOutput> | void {
    const command = new UpdateDomainAssociationCommand(args);
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
   * <p> Updates a webhook. </p>
   */
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWebhookCommandOutput>;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWebhookCommandOutput) => void),
    cb?: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): Promise<UpdateWebhookCommandOutput> | void {
    const command = new UpdateWebhookCommand(args);
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
