// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { AmplifyClient } from "./AmplifyClient";
import { type CreateAppCommandInput, type CreateAppCommandOutput, CreateAppCommand } from "./commands/CreateAppCommand";
import {
  type CreateBackendEnvironmentCommandInput,
  type CreateBackendEnvironmentCommandOutput,
  CreateBackendEnvironmentCommand,
} from "./commands/CreateBackendEnvironmentCommand";
import {
  type CreateBranchCommandInput,
  type CreateBranchCommandOutput,
  CreateBranchCommand,
} from "./commands/CreateBranchCommand";
import {
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentCommand,
} from "./commands/CreateDeploymentCommand";
import {
  type CreateDomainAssociationCommandInput,
  type CreateDomainAssociationCommandOutput,
  CreateDomainAssociationCommand,
} from "./commands/CreateDomainAssociationCommand";
import {
  type CreateWebhookCommandInput,
  type CreateWebhookCommandOutput,
  CreateWebhookCommand,
} from "./commands/CreateWebhookCommand";
import { type DeleteAppCommandInput, type DeleteAppCommandOutput, DeleteAppCommand } from "./commands/DeleteAppCommand";
import {
  type DeleteBackendEnvironmentCommandInput,
  type DeleteBackendEnvironmentCommandOutput,
  DeleteBackendEnvironmentCommand,
} from "./commands/DeleteBackendEnvironmentCommand";
import {
  type DeleteBranchCommandInput,
  type DeleteBranchCommandOutput,
  DeleteBranchCommand,
} from "./commands/DeleteBranchCommand";
import {
  type DeleteDomainAssociationCommandInput,
  type DeleteDomainAssociationCommandOutput,
  DeleteDomainAssociationCommand,
} from "./commands/DeleteDomainAssociationCommand";
import { type DeleteJobCommandInput, type DeleteJobCommandOutput, DeleteJobCommand } from "./commands/DeleteJobCommand";
import {
  type DeleteWebhookCommandInput,
  type DeleteWebhookCommandOutput,
  DeleteWebhookCommand,
} from "./commands/DeleteWebhookCommand";
import {
  type GenerateAccessLogsCommandInput,
  type GenerateAccessLogsCommandOutput,
  GenerateAccessLogsCommand,
} from "./commands/GenerateAccessLogsCommand";
import { type GetAppCommandInput, type GetAppCommandOutput, GetAppCommand } from "./commands/GetAppCommand";
import {
  type GetArtifactUrlCommandInput,
  type GetArtifactUrlCommandOutput,
  GetArtifactUrlCommand,
} from "./commands/GetArtifactUrlCommand";
import {
  type GetBackendEnvironmentCommandInput,
  type GetBackendEnvironmentCommandOutput,
  GetBackendEnvironmentCommand,
} from "./commands/GetBackendEnvironmentCommand";
import { type GetBranchCommandInput, type GetBranchCommandOutput, GetBranchCommand } from "./commands/GetBranchCommand";
import {
  type GetDomainAssociationCommandInput,
  type GetDomainAssociationCommandOutput,
  GetDomainAssociationCommand,
} from "./commands/GetDomainAssociationCommand";
import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "./commands/GetJobCommand";
import {
  type GetWebhookCommandInput,
  type GetWebhookCommandOutput,
  GetWebhookCommand,
} from "./commands/GetWebhookCommand";
import { type ListAppsCommandInput, type ListAppsCommandOutput, ListAppsCommand } from "./commands/ListAppsCommand";
import {
  type ListArtifactsCommandInput,
  type ListArtifactsCommandOutput,
  ListArtifactsCommand,
} from "./commands/ListArtifactsCommand";
import {
  type ListBackendEnvironmentsCommandInput,
  type ListBackendEnvironmentsCommandOutput,
  ListBackendEnvironmentsCommand,
} from "./commands/ListBackendEnvironmentsCommand";
import {
  type ListBranchesCommandInput,
  type ListBranchesCommandOutput,
  ListBranchesCommand,
} from "./commands/ListBranchesCommand";
import {
  type ListDomainAssociationsCommandInput,
  type ListDomainAssociationsCommandOutput,
  ListDomainAssociationsCommand,
} from "./commands/ListDomainAssociationsCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWebhooksCommandInput,
  type ListWebhooksCommandOutput,
  ListWebhooksCommand,
} from "./commands/ListWebhooksCommand";
import {
  type StartDeploymentCommandInput,
  type StartDeploymentCommandOutput,
  StartDeploymentCommand,
} from "./commands/StartDeploymentCommand";
import { type StartJobCommandInput, type StartJobCommandOutput, StartJobCommand } from "./commands/StartJobCommand";
import { type StopJobCommandInput, type StopJobCommandOutput, StopJobCommand } from "./commands/StopJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { type UpdateAppCommandInput, type UpdateAppCommandOutput, UpdateAppCommand } from "./commands/UpdateAppCommand";
import {
  type UpdateBranchCommandInput,
  type UpdateBranchCommandOutput,
  UpdateBranchCommand,
} from "./commands/UpdateBranchCommand";
import {
  type UpdateDomainAssociationCommandInput,
  type UpdateDomainAssociationCommandOutput,
  UpdateDomainAssociationCommand,
} from "./commands/UpdateDomainAssociationCommand";
import {
  type UpdateWebhookCommandInput,
  type UpdateWebhookCommandOutput,
  UpdateWebhookCommand,
} from "./commands/UpdateWebhookCommand";
import { paginateListApps } from "./pagination/ListAppsPaginator";
import { paginateListBranches } from "./pagination/ListBranchesPaginator";
import { paginateListDomainAssociations } from "./pagination/ListDomainAssociationsPaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";

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
const paginators = {
  paginateListApps,
  paginateListBranches,
  paginateListDomainAssociations,
  paginateListJobs,
};

/**
 * @public
 */
export interface AmplifyRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Amplify {
  /**
   * @see {@link CreateAppCommand}
   */
  createApp(
    args: CreateAppCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<CreateAppCommandOutput>;
  createApp(
    args: CreateAppCommandInput,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  createApp(
    args: CreateAppCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackendEnvironmentCommand}
   */
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<CreateBackendEnvironmentCommandOutput>;
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBranchCommand}
   */
  createBranch(
    args: CreateBranchCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<CreateBranchCommandOutput>;
  createBranch(
    args: CreateBranchCommandInput,
    cb: (err: any, data?: CreateBranchCommandOutput) => void
  ): void;
  createBranch(
    args: CreateBranchCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: CreateBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainAssociationCommand}
   */
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<CreateDomainAssociationCommandOutput>;
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebhookCommand}
   */
  createWebhook(
    args: CreateWebhookCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<CreateWebhookCommandOutput>;
  createWebhook(
    args: CreateWebhookCommandInput,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  createWebhook(
    args: CreateWebhookCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(
    args: DeleteAppCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<DeleteAppCommandOutput>;
  deleteApp(
    args: DeleteAppCommandInput,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackendEnvironmentCommand}
   */
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<DeleteBackendEnvironmentCommandOutput>;
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBranchCommand}
   */
  deleteBranch(
    args: DeleteBranchCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<DeleteBranchCommandOutput>;
  deleteBranch(
    args: DeleteBranchCommandInput,
    cb: (err: any, data?: DeleteBranchCommandOutput) => void
  ): void;
  deleteBranch(
    args: DeleteBranchCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: DeleteBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainAssociationCommand}
   */
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<DeleteDomainAssociationCommandOutput>;
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(
    args: DeleteJobCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<DeleteJobCommandOutput>;
  deleteJob(
    args: DeleteJobCommandInput,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebhookCommand}
   */
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<DeleteWebhookCommandOutput>;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateAccessLogsCommand}
   */
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GenerateAccessLogsCommandOutput>;
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): void;
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppCommand}
   */
  getApp(
    args: GetAppCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GetAppCommandOutput>;
  getApp(
    args: GetAppCommandInput,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;
  getApp(
    args: GetAppCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArtifactUrlCommand}
   */
  getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GetArtifactUrlCommandOutput>;
  getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    cb: (err: any, data?: GetArtifactUrlCommandOutput) => void
  ): void;
  getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GetArtifactUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendEnvironmentCommand}
   */
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GetBackendEnvironmentCommandOutput>;
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBranchCommand}
   */
  getBranch(
    args: GetBranchCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GetBranchCommandOutput>;
  getBranch(
    args: GetBranchCommandInput,
    cb: (err: any, data?: GetBranchCommandOutput) => void
  ): void;
  getBranch(
    args: GetBranchCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GetBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainAssociationCommand}
   */
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GetDomainAssociationCommandOutput>;
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebhookCommand}
   */
  getWebhook(
    args: GetWebhookCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<GetWebhookCommandOutput>;
  getWebhook(
    args: GetWebhookCommandInput,
    cb: (err: any, data?: GetWebhookCommandOutput) => void
  ): void;
  getWebhook(
    args: GetWebhookCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: GetWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsCommand}
   */
  listApps(): Promise<ListAppsCommandOutput>;
  listApps(
    args: ListAppsCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListAppsCommandOutput>;
  listApps(
    args: ListAppsCommandInput,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  listApps(
    args: ListAppsCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArtifactsCommand}
   */
  listArtifacts(
    args: ListArtifactsCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListArtifactsCommandOutput>;
  listArtifacts(
    args: ListArtifactsCommandInput,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackendEnvironmentsCommand}
   */
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListBackendEnvironmentsCommandOutput>;
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBranchesCommand}
   */
  listBranches(
    args: ListBranchesCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListBranchesCommandOutput>;
  listBranches(
    args: ListBranchesCommandInput,
    cb: (err: any, data?: ListBranchesCommandOutput) => void
  ): void;
  listBranches(
    args: ListBranchesCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListBranchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainAssociationsCommand}
   */
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListDomainAssociationsCommandOutput>;
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebhooksCommand}
   */
  listWebhooks(
    args: ListWebhooksCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<ListWebhooksCommandOutput>;
  listWebhooks(
    args: ListWebhooksCommandInput,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;
  listWebhooks(
    args: ListWebhooksCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeploymentCommand}
   */
  startDeployment(
    args: StartDeploymentCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<StartDeploymentCommandOutput>;
  startDeployment(
    args: StartDeploymentCommandInput,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  startDeployment(
    args: StartDeploymentCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartJobCommand}
   */
  startJob(
    args: StartJobCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<StartJobCommandOutput>;
  startJob(
    args: StartJobCommandInput,
    cb: (err: any, data?: StartJobCommandOutput) => void
  ): void;
  startJob(
    args: StartJobCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: StartJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopJobCommand}
   */
  stopJob(
    args: StopJobCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<StopJobCommandOutput>;
  stopJob(
    args: StopJobCommandInput,
    cb: (err: any, data?: StopJobCommandOutput) => void
  ): void;
  stopJob(
    args: StopJobCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: StopJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppCommand}
   */
  updateApp(
    args: UpdateAppCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<UpdateAppCommandOutput>;
  updateApp(
    args: UpdateAppCommandInput,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;
  updateApp(
    args: UpdateAppCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBranchCommand}
   */
  updateBranch(
    args: UpdateBranchCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<UpdateBranchCommandOutput>;
  updateBranch(
    args: UpdateBranchCommandInput,
    cb: (err: any, data?: UpdateBranchCommandOutput) => void
  ): void;
  updateBranch(
    args: UpdateBranchCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: UpdateBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainAssociationCommand}
   */
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<UpdateDomainAssociationCommandOutput>;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebhookCommand}
   */
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options?: AmplifyRequestOptions
  ): Promise<UpdateWebhookCommandOutput>;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options: AmplifyRequestOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppsCommandOutput}.
   */
  paginateListApps(
    args?: ListAppsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppsCommandOutput>;

  /**
   * @see {@link ListBranchesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBranchesCommandOutput}.
   */
  paginateListBranches(
    args: ListBranchesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBranchesCommandOutput>;

  /**
   * @see {@link ListDomainAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainAssociationsCommandOutput}.
   */
  paginateListDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainAssociationsCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;
}

/**
 * <p>Amplify enables developers to develop and deploy cloud-powered mobile and web apps.
 *             Amplify Hosting provides a continuous delivery and hosting service for web applications.
 *             For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Hosting User Guide</a>. The
 *             Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation
 *             for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a>
 *          </p>
 * @public
 */
export class Amplify extends AmplifyClient implements Amplify {}
createAggregatedClient(commands, Amplify, { paginators });
