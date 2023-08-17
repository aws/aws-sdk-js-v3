// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AmplifyClient, AmplifyClientConfig } from "./AmplifyClient";
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

const commands = {
  CreateAppCommand,
  CreateBackendEnvironmentCommand,
  CreateBranchCommand,
  CreateDeploymentCommand,
  CreateDomainAssociationCommand,
  CreateWebhookCommand,
  DeleteAppCommand,
  DeleteBackendEnvironmentCommand,
  DeleteBranchCommand,
  DeleteDomainAssociationCommand,
  DeleteJobCommand,
  DeleteWebhookCommand,
  GenerateAccessLogsCommand,
  GetAppCommand,
  GetArtifactUrlCommand,
  GetBackendEnvironmentCommand,
  GetBranchCommand,
  GetDomainAssociationCommand,
  GetJobCommand,
  GetWebhookCommand,
  ListAppsCommand,
  ListArtifactsCommand,
  ListBackendEnvironmentsCommand,
  ListBranchesCommand,
  ListDomainAssociationsCommand,
  ListJobsCommand,
  ListTagsForResourceCommand,
  ListWebhooksCommand,
  StartDeploymentCommand,
  StartJobCommand,
  StopJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppCommand,
  UpdateBranchCommand,
  UpdateDomainAssociationCommand,
  UpdateWebhookCommand,
};

export interface Amplify {
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
   * @see {@link CreateBackendEnvironmentCommand}
   */
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendEnvironmentCommandOutput>;
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBranchCommand}
   */
  createBranch(args: CreateBranchCommandInput, options?: __HttpHandlerOptions): Promise<CreateBranchCommandOutput>;
  createBranch(args: CreateBranchCommandInput, cb: (err: any, data?: CreateBranchCommandOutput) => void): void;
  createBranch(
    args: CreateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBranchCommandOutput) => void
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
   * @see {@link CreateDomainAssociationCommand}
   */
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainAssociationCommandOutput>;
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebhookCommand}
   */
  createWebhook(args: CreateWebhookCommandInput, options?: __HttpHandlerOptions): Promise<CreateWebhookCommandOutput>;
  createWebhook(args: CreateWebhookCommandInput, cb: (err: any, data?: CreateWebhookCommandOutput) => void): void;
  createWebhook(
    args: CreateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
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
   * @see {@link DeleteBackendEnvironmentCommand}
   */
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendEnvironmentCommandOutput>;
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBranchCommand}
   */
  deleteBranch(args: DeleteBranchCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBranchCommandOutput>;
  deleteBranch(args: DeleteBranchCommandInput, cb: (err: any, data?: DeleteBranchCommandOutput) => void): void;
  deleteBranch(
    args: DeleteBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainAssociationCommand}
   */
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainAssociationCommandOutput>;
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebhookCommand}
   */
  deleteWebhook(args: DeleteWebhookCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWebhookCommandOutput>;
  deleteWebhook(args: DeleteWebhookCommandInput, cb: (err: any, data?: DeleteWebhookCommandOutput) => void): void;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateAccessLogsCommand}
   */
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateAccessLogsCommandOutput>;
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): void;
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
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
   * @see {@link GetArtifactUrlCommand}
   */
  getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArtifactUrlCommandOutput>;
  getArtifactUrl(args: GetArtifactUrlCommandInput, cb: (err: any, data?: GetArtifactUrlCommandOutput) => void): void;
  getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArtifactUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendEnvironmentCommand}
   */
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendEnvironmentCommandOutput>;
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBranchCommand}
   */
  getBranch(args: GetBranchCommandInput, options?: __HttpHandlerOptions): Promise<GetBranchCommandOutput>;
  getBranch(args: GetBranchCommandInput, cb: (err: any, data?: GetBranchCommandOutput) => void): void;
  getBranch(
    args: GetBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainAssociationCommand}
   */
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainAssociationCommandOutput>;
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebhookCommand}
   */
  getWebhook(args: GetWebhookCommandInput, options?: __HttpHandlerOptions): Promise<GetWebhookCommandOutput>;
  getWebhook(args: GetWebhookCommandInput, cb: (err: any, data?: GetWebhookCommandOutput) => void): void;
  getWebhook(
    args: GetWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebhookCommandOutput) => void
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
   * @see {@link ListArtifactsCommand}
   */
  listArtifacts(args: ListArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListArtifactsCommandOutput>;
  listArtifacts(args: ListArtifactsCommandInput, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackendEnvironmentsCommand}
   */
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackendEnvironmentsCommandOutput>;
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBranchesCommand}
   */
  listBranches(args: ListBranchesCommandInput, options?: __HttpHandlerOptions): Promise<ListBranchesCommandOutput>;
  listBranches(args: ListBranchesCommandInput, cb: (err: any, data?: ListBranchesCommandOutput) => void): void;
  listBranches(
    args: ListBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBranchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainAssociationsCommand}
   */
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainAssociationsCommandOutput>;
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
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
   * @see {@link ListWebhooksCommand}
   */
  listWebhooks(args: ListWebhooksCommandInput, options?: __HttpHandlerOptions): Promise<ListWebhooksCommandOutput>;
  listWebhooks(args: ListWebhooksCommandInput, cb: (err: any, data?: ListWebhooksCommandOutput) => void): void;
  listWebhooks(
    args: ListWebhooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeploymentCommand}
   */
  startDeployment(
    args: StartDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeploymentCommandOutput>;
  startDeployment(args: StartDeploymentCommandInput, cb: (err: any, data?: StartDeploymentCommandOutput) => void): void;
  startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartJobCommand}
   */
  startJob(args: StartJobCommandInput, options?: __HttpHandlerOptions): Promise<StartJobCommandOutput>;
  startJob(args: StartJobCommandInput, cb: (err: any, data?: StartJobCommandOutput) => void): void;
  startJob(
    args: StartJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopJobCommand}
   */
  stopJob(args: StopJobCommandInput, options?: __HttpHandlerOptions): Promise<StopJobCommandOutput>;
  stopJob(args: StopJobCommandInput, cb: (err: any, data?: StopJobCommandOutput) => void): void;
  stopJob(
    args: StopJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopJobCommandOutput) => void
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
   * @see {@link UpdateBranchCommand}
   */
  updateBranch(args: UpdateBranchCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBranchCommandOutput>;
  updateBranch(args: UpdateBranchCommandInput, cb: (err: any, data?: UpdateBranchCommandOutput) => void): void;
  updateBranch(
    args: UpdateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainAssociationCommand}
   */
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainAssociationCommandOutput>;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebhookCommand}
   */
  updateWebhook(args: UpdateWebhookCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWebhookCommandOutput>;
  updateWebhook(args: UpdateWebhookCommandInput, cb: (err: any, data?: UpdateWebhookCommandOutput) => void): void;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amplify enables developers to develop and deploy cloud-powered mobile and web apps.
 *             The Amplify Console provides a continuous delivery and hosting service for web
 *             applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The
 *             Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation
 *             for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a>
 *          </p>
 */
export class Amplify extends AmplifyClient implements Amplify {}
createAggregatedClient(commands, Amplify);
