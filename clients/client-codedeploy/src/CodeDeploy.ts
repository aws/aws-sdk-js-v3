// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import { CodeDeployClient } from "./CodeDeployClient";
import {
  type AddTagsToOnPremisesInstancesCommandInput,
  type AddTagsToOnPremisesInstancesCommandOutput,
  AddTagsToOnPremisesInstancesCommand,
} from "./commands/AddTagsToOnPremisesInstancesCommand";
import {
  type BatchGetApplicationRevisionsCommandInput,
  type BatchGetApplicationRevisionsCommandOutput,
  BatchGetApplicationRevisionsCommand,
} from "./commands/BatchGetApplicationRevisionsCommand";
import {
  type BatchGetApplicationsCommandInput,
  type BatchGetApplicationsCommandOutput,
  BatchGetApplicationsCommand,
} from "./commands/BatchGetApplicationsCommand";
import {
  type BatchGetDeploymentGroupsCommandInput,
  type BatchGetDeploymentGroupsCommandOutput,
  BatchGetDeploymentGroupsCommand,
} from "./commands/BatchGetDeploymentGroupsCommand";
import {
  type BatchGetDeploymentInstancesCommandInput,
  type BatchGetDeploymentInstancesCommandOutput,
  BatchGetDeploymentInstancesCommand,
} from "./commands/BatchGetDeploymentInstancesCommand";
import {
  type BatchGetDeploymentsCommandInput,
  type BatchGetDeploymentsCommandOutput,
  BatchGetDeploymentsCommand,
} from "./commands/BatchGetDeploymentsCommand";
import {
  type BatchGetDeploymentTargetsCommandInput,
  type BatchGetDeploymentTargetsCommandOutput,
  BatchGetDeploymentTargetsCommand,
} from "./commands/BatchGetDeploymentTargetsCommand";
import {
  type BatchGetOnPremisesInstancesCommandInput,
  type BatchGetOnPremisesInstancesCommandOutput,
  BatchGetOnPremisesInstancesCommand,
} from "./commands/BatchGetOnPremisesInstancesCommand";
import {
  type ContinueDeploymentCommandInput,
  type ContinueDeploymentCommandOutput,
  ContinueDeploymentCommand,
} from "./commands/ContinueDeploymentCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentCommand,
} from "./commands/CreateDeploymentCommand";
import {
  type CreateDeploymentConfigCommandInput,
  type CreateDeploymentConfigCommandOutput,
  CreateDeploymentConfigCommand,
} from "./commands/CreateDeploymentConfigCommand";
import {
  type CreateDeploymentGroupCommandInput,
  type CreateDeploymentGroupCommandOutput,
  CreateDeploymentGroupCommand,
} from "./commands/CreateDeploymentGroupCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteDeploymentConfigCommandInput,
  type DeleteDeploymentConfigCommandOutput,
  DeleteDeploymentConfigCommand,
} from "./commands/DeleteDeploymentConfigCommand";
import {
  type DeleteDeploymentGroupCommandInput,
  type DeleteDeploymentGroupCommandOutput,
  DeleteDeploymentGroupCommand,
} from "./commands/DeleteDeploymentGroupCommand";
import {
  type DeleteGitHubAccountTokenCommandInput,
  type DeleteGitHubAccountTokenCommandOutput,
  DeleteGitHubAccountTokenCommand,
} from "./commands/DeleteGitHubAccountTokenCommand";
import {
  type DeleteResourcesByExternalIdCommandInput,
  type DeleteResourcesByExternalIdCommandOutput,
  DeleteResourcesByExternalIdCommand,
} from "./commands/DeleteResourcesByExternalIdCommand";
import {
  type DeregisterOnPremisesInstanceCommandInput,
  type DeregisterOnPremisesInstanceCommandOutput,
  DeregisterOnPremisesInstanceCommand,
} from "./commands/DeregisterOnPremisesInstanceCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetApplicationRevisionCommandInput,
  type GetApplicationRevisionCommandOutput,
  GetApplicationRevisionCommand,
} from "./commands/GetApplicationRevisionCommand";
import {
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentCommand,
} from "./commands/GetDeploymentCommand";
import {
  type GetDeploymentConfigCommandInput,
  type GetDeploymentConfigCommandOutput,
  GetDeploymentConfigCommand,
} from "./commands/GetDeploymentConfigCommand";
import {
  type GetDeploymentGroupCommandInput,
  type GetDeploymentGroupCommandOutput,
  GetDeploymentGroupCommand,
} from "./commands/GetDeploymentGroupCommand";
import {
  type GetDeploymentInstanceCommandInput,
  type GetDeploymentInstanceCommandOutput,
  GetDeploymentInstanceCommand,
} from "./commands/GetDeploymentInstanceCommand";
import {
  type GetDeploymentTargetCommandInput,
  type GetDeploymentTargetCommandOutput,
  GetDeploymentTargetCommand,
} from "./commands/GetDeploymentTargetCommand";
import {
  type GetOnPremisesInstanceCommandInput,
  type GetOnPremisesInstanceCommandOutput,
  GetOnPremisesInstanceCommand,
} from "./commands/GetOnPremisesInstanceCommand";
import {
  type ListApplicationRevisionsCommandInput,
  type ListApplicationRevisionsCommandOutput,
  ListApplicationRevisionsCommand,
} from "./commands/ListApplicationRevisionsCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListDeploymentConfigsCommandInput,
  type ListDeploymentConfigsCommandOutput,
  ListDeploymentConfigsCommand,
} from "./commands/ListDeploymentConfigsCommand";
import {
  type ListDeploymentGroupsCommandInput,
  type ListDeploymentGroupsCommandOutput,
  ListDeploymentGroupsCommand,
} from "./commands/ListDeploymentGroupsCommand";
import {
  type ListDeploymentInstancesCommandInput,
  type ListDeploymentInstancesCommandOutput,
  ListDeploymentInstancesCommand,
} from "./commands/ListDeploymentInstancesCommand";
import {
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentsCommand,
} from "./commands/ListDeploymentsCommand";
import {
  type ListDeploymentTargetsCommandInput,
  type ListDeploymentTargetsCommandOutput,
  ListDeploymentTargetsCommand,
} from "./commands/ListDeploymentTargetsCommand";
import {
  type ListGitHubAccountTokenNamesCommandInput,
  type ListGitHubAccountTokenNamesCommandOutput,
  ListGitHubAccountTokenNamesCommand,
} from "./commands/ListGitHubAccountTokenNamesCommand";
import {
  type ListOnPremisesInstancesCommandInput,
  type ListOnPremisesInstancesCommandOutput,
  ListOnPremisesInstancesCommand,
} from "./commands/ListOnPremisesInstancesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutLifecycleEventHookExecutionStatusCommandInput,
  type PutLifecycleEventHookExecutionStatusCommandOutput,
  PutLifecycleEventHookExecutionStatusCommand,
} from "./commands/PutLifecycleEventHookExecutionStatusCommand";
import {
  type RegisterApplicationRevisionCommandInput,
  type RegisterApplicationRevisionCommandOutput,
  RegisterApplicationRevisionCommand,
} from "./commands/RegisterApplicationRevisionCommand";
import {
  type RegisterOnPremisesInstanceCommandInput,
  type RegisterOnPremisesInstanceCommandOutput,
  RegisterOnPremisesInstanceCommand,
} from "./commands/RegisterOnPremisesInstanceCommand";
import {
  type RemoveTagsFromOnPremisesInstancesCommandInput,
  type RemoveTagsFromOnPremisesInstancesCommandOutput,
  RemoveTagsFromOnPremisesInstancesCommand,
} from "./commands/RemoveTagsFromOnPremisesInstancesCommand";
import {
  type SkipWaitTimeForInstanceTerminationCommandInput,
  type SkipWaitTimeForInstanceTerminationCommandOutput,
  SkipWaitTimeForInstanceTerminationCommand,
} from "./commands/SkipWaitTimeForInstanceTerminationCommand";
import {
  type StopDeploymentCommandInput,
  type StopDeploymentCommandOutput,
  StopDeploymentCommand,
} from "./commands/StopDeploymentCommand";
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
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateDeploymentGroupCommandInput,
  type UpdateDeploymentGroupCommandOutput,
  UpdateDeploymentGroupCommand,
} from "./commands/UpdateDeploymentGroupCommand";
import { paginateListApplicationRevisions } from "./pagination/ListApplicationRevisionsPaginator";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListDeploymentConfigs } from "./pagination/ListDeploymentConfigsPaginator";
import { paginateListDeploymentGroups } from "./pagination/ListDeploymentGroupsPaginator";
import { paginateListDeploymentInstances } from "./pagination/ListDeploymentInstancesPaginator";
import { paginateListDeployments } from "./pagination/ListDeploymentsPaginator";
import { waitUntilDeploymentSuccessful } from "./waiters/waitForDeploymentSuccessful";

const commands = {
  AddTagsToOnPremisesInstancesCommand,
  BatchGetApplicationRevisionsCommand,
  BatchGetApplicationsCommand,
  BatchGetDeploymentGroupsCommand,
  BatchGetDeploymentInstancesCommand,
  BatchGetDeploymentsCommand,
  BatchGetDeploymentTargetsCommand,
  BatchGetOnPremisesInstancesCommand,
  ContinueDeploymentCommand,
  CreateApplicationCommand,
  CreateDeploymentCommand,
  CreateDeploymentConfigCommand,
  CreateDeploymentGroupCommand,
  DeleteApplicationCommand,
  DeleteDeploymentConfigCommand,
  DeleteDeploymentGroupCommand,
  DeleteGitHubAccountTokenCommand,
  DeleteResourcesByExternalIdCommand,
  DeregisterOnPremisesInstanceCommand,
  GetApplicationCommand,
  GetApplicationRevisionCommand,
  GetDeploymentCommand,
  GetDeploymentConfigCommand,
  GetDeploymentGroupCommand,
  GetDeploymentInstanceCommand,
  GetDeploymentTargetCommand,
  GetOnPremisesInstanceCommand,
  ListApplicationRevisionsCommand,
  ListApplicationsCommand,
  ListDeploymentConfigsCommand,
  ListDeploymentGroupsCommand,
  ListDeploymentInstancesCommand,
  ListDeploymentsCommand,
  ListDeploymentTargetsCommand,
  ListGitHubAccountTokenNamesCommand,
  ListOnPremisesInstancesCommand,
  ListTagsForResourceCommand,
  PutLifecycleEventHookExecutionStatusCommand,
  RegisterApplicationRevisionCommand,
  RegisterOnPremisesInstanceCommand,
  RemoveTagsFromOnPremisesInstancesCommand,
  SkipWaitTimeForInstanceTerminationCommand,
  StopDeploymentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateDeploymentGroupCommand,
};
const paginators = {
  paginateListApplicationRevisions,
  paginateListApplications,
  paginateListDeploymentConfigs,
  paginateListDeploymentGroups,
  paginateListDeploymentInstances,
  paginateListDeployments,
};
const waiters = {
  waitUntilDeploymentSuccessful,
};

export interface CodeDeploy {
  /**
   * @see {@link AddTagsToOnPremisesInstancesCommand}
   */
  addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToOnPremisesInstancesCommandOutput>;
  addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    cb: (err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void
  ): void;
  addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetApplicationRevisionsCommand}
   */
  batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetApplicationRevisionsCommandOutput>;
  batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    cb: (err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void
  ): void;
  batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetApplicationsCommand}
   */
  batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetApplicationsCommandOutput>;
  batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    cb: (err: any, data?: BatchGetApplicationsCommandOutput) => void
  ): void;
  batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDeploymentGroupsCommand}
   */
  batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentGroupsCommandOutput>;
  batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    cb: (err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void
  ): void;
  batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDeploymentInstancesCommand}
   */
  batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentInstancesCommandOutput>;
  batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    cb: (err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void
  ): void;
  batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDeploymentsCommand}
   */
  batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentsCommandOutput>;
  batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    cb: (err: any, data?: BatchGetDeploymentsCommandOutput) => void
  ): void;
  batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDeploymentTargetsCommand}
   */
  batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentTargetsCommandOutput>;
  batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    cb: (err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void
  ): void;
  batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetOnPremisesInstancesCommand}
   */
  batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetOnPremisesInstancesCommandOutput>;
  batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    cb: (err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void
  ): void;
  batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ContinueDeploymentCommand}
   */
  continueDeployment(): Promise<ContinueDeploymentCommandOutput>;
  continueDeployment(
    args: ContinueDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ContinueDeploymentCommandOutput>;
  continueDeployment(
    args: ContinueDeploymentCommandInput,
    cb: (err: any, data?: ContinueDeploymentCommandOutput) => void
  ): void;
  continueDeployment(
    args: ContinueDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ContinueDeploymentCommandOutput) => void
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
   * @see {@link CreateDeploymentConfigCommand}
   */
  createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentConfigCommandOutput>;
  createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    cb: (err: any, data?: CreateDeploymentConfigCommandOutput) => void
  ): void;
  createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentGroupCommand}
   */
  createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentGroupCommandOutput>;
  createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    cb: (err: any, data?: CreateDeploymentGroupCommandOutput) => void
  ): void;
  createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentGroupCommandOutput) => void
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
   * @see {@link DeleteDeploymentConfigCommand}
   */
  deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentConfigCommandOutput>;
  deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    cb: (err: any, data?: DeleteDeploymentConfigCommandOutput) => void
  ): void;
  deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentGroupCommand}
   */
  deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentGroupCommandOutput>;
  deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    cb: (err: any, data?: DeleteDeploymentGroupCommandOutput) => void
  ): void;
  deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGitHubAccountTokenCommand}
   */
  deleteGitHubAccountToken(): Promise<DeleteGitHubAccountTokenCommandOutput>;
  deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGitHubAccountTokenCommandOutput>;
  deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    cb: (err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void
  ): void;
  deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcesByExternalIdCommand}
   */
  deleteResourcesByExternalId(): Promise<DeleteResourcesByExternalIdCommandOutput>;
  deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcesByExternalIdCommandOutput>;
  deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    cb: (err: any, data?: DeleteResourcesByExternalIdCommandOutput) => void
  ): void;
  deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcesByExternalIdCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterOnPremisesInstanceCommand}
   */
  deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterOnPremisesInstanceCommandOutput>;
  deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    cb: (err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void
  ): void;
  deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationRevisionCommand}
   */
  getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationRevisionCommandOutput>;
  getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    cb: (err: any, data?: GetApplicationRevisionCommandOutput) => void
  ): void;
  getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentConfigCommand}
   */
  getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentConfigCommandOutput>;
  getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    cb: (err: any, data?: GetDeploymentConfigCommandOutput) => void
  ): void;
  getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentGroupCommand}
   */
  getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentGroupCommandOutput>;
  getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    cb: (err: any, data?: GetDeploymentGroupCommandOutput) => void
  ): void;
  getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentInstanceCommand}
   */
  getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentInstanceCommandOutput>;
  getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    cb: (err: any, data?: GetDeploymentInstanceCommandOutput) => void
  ): void;
  getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentTargetCommand}
   */
  getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentTargetCommandOutput>;
  getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    cb: (err: any, data?: GetDeploymentTargetCommandOutput) => void
  ): void;
  getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOnPremisesInstanceCommand}
   */
  getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOnPremisesInstanceCommandOutput>;
  getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    cb: (err: any, data?: GetOnPremisesInstanceCommandOutput) => void
  ): void;
  getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOnPremisesInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationRevisionsCommand}
   */
  listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationRevisionsCommandOutput>;
  listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    cb: (err: any, data?: ListApplicationRevisionsCommandOutput) => void
  ): void;
  listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
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
   * @see {@link ListDeploymentConfigsCommand}
   */
  listDeploymentConfigs(): Promise<ListDeploymentConfigsCommandOutput>;
  listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentConfigsCommandOutput>;
  listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    cb: (err: any, data?: ListDeploymentConfigsCommandOutput) => void
  ): void;
  listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentGroupsCommand}
   */
  listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentGroupsCommandOutput>;
  listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    cb: (err: any, data?: ListDeploymentGroupsCommandOutput) => void
  ): void;
  listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentInstancesCommand}
   */
  listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentInstancesCommandOutput>;
  listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    cb: (err: any, data?: ListDeploymentInstancesCommandOutput) => void
  ): void;
  listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentTargetsCommand}
   */
  listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentTargetsCommandOutput>;
  listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    cb: (err: any, data?: ListDeploymentTargetsCommandOutput) => void
  ): void;
  listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGitHubAccountTokenNamesCommand}
   */
  listGitHubAccountTokenNames(): Promise<ListGitHubAccountTokenNamesCommandOutput>;
  listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGitHubAccountTokenNamesCommandOutput>;
  listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    cb: (err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void
  ): void;
  listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOnPremisesInstancesCommand}
   */
  listOnPremisesInstances(): Promise<ListOnPremisesInstancesCommandOutput>;
  listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOnPremisesInstancesCommandOutput>;
  listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    cb: (err: any, data?: ListOnPremisesInstancesCommandOutput) => void
  ): void;
  listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOnPremisesInstancesCommandOutput) => void
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
   * @see {@link PutLifecycleEventHookExecutionStatusCommand}
   */
  putLifecycleEventHookExecutionStatus(): Promise<PutLifecycleEventHookExecutionStatusCommandOutput>;
  putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecycleEventHookExecutionStatusCommandOutput>;
  putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    cb: (err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void
  ): void;
  putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterApplicationRevisionCommand}
   */
  registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterApplicationRevisionCommandOutput>;
  registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    cb: (err: any, data?: RegisterApplicationRevisionCommandOutput) => void
  ): void;
  registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterApplicationRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterOnPremisesInstanceCommand}
   */
  registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOnPremisesInstanceCommandOutput>;
  registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    cb: (err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void
  ): void;
  registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromOnPremisesInstancesCommand}
   */
  removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput>;
  removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    cb: (err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void
  ): void;
  removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link SkipWaitTimeForInstanceTerminationCommand}
   */
  skipWaitTimeForInstanceTermination(): Promise<SkipWaitTimeForInstanceTerminationCommandOutput>;
  skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SkipWaitTimeForInstanceTerminationCommandOutput>;
  skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    cb: (err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void
  ): void;
  skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDeploymentCommand}
   */
  stopDeployment(
    args: StopDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDeploymentCommandOutput>;
  stopDeployment(
    args: StopDeploymentCommandInput,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;
  stopDeployment(
    args: StopDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(): Promise<UpdateApplicationCommandOutput>;
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
   * @see {@link UpdateDeploymentGroupCommand}
   */
  updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentGroupCommandOutput>;
  updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    cb: (err: any, data?: UpdateDeploymentGroupCommandOutput) => void
  ): void;
  updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationRevisionsCommandOutput}.
   */
  paginateListApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationRevisionsCommandOutput>;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListDeploymentConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentConfigsCommandOutput}.
   */
  paginateListDeploymentConfigs(
    args?: ListDeploymentConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentConfigsCommandOutput>;

  /**
   * @see {@link ListDeploymentGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentGroupsCommandOutput}.
   */
  paginateListDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentGroupsCommandOutput>;

  /**
   * @see {@link ListDeploymentInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentInstancesCommandOutput}.
   */
  paginateListDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentInstancesCommandOutput>;

  /**
   * @see {@link ListDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentsCommandOutput}.
   */
  paginateListDeployments(
    args?: ListDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentsCommandOutput>;

  /**
   * @see {@link GetDeploymentCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDeploymentSuccessful(
    args: GetDeploymentCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<CodeDeploy>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>CodeDeploy is a deployment service that automates application deployments
 *             to Amazon EC2 instances, on-premises instances running in your own facility,
 *             serverless Lambda functions, or applications in an Amazon ECS
 *             service.</p>
 *          <p>You can deploy a nearly unlimited variety of application content, such as an updated
 *                 Lambda function, updated applications in an Amazon ECS service,
 *             code, web and configuration files, executables, packages, scripts, multimedia files, and
 *             so on. CodeDeploy can deploy application content stored in Amazon S3
 *             buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes
 *             to your existing code before you can use CodeDeploy.</p>
 *          <p>CodeDeploy makes it easier for you to rapidly release new features, helps
 *             you avoid downtime during application deployment, and handles the complexity of updating
 *             your applications, without many of the risks associated with error-prone manual
 *             deployments.</p>
 *          <p>
 *             <b>CodeDeploy Components</b>
 *          </p>
 *          <p>Use the information in this guide to help you work with the following CodeDeploy components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Application</b>: A name that uniquely identifies
 *                     the application you want to deploy. CodeDeploy uses this name, which
 *                     functions as a container, to ensure the correct combination of revision,
 *                     deployment configuration, and deployment group are referenced during a
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Deployment group</b>: A set of individual
 *                     instances, CodeDeploy
 *                     Lambda deployment configuration settings, or an Amazon ECS
 *                     service and network details. A Lambda deployment group specifies how
 *                     to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production
 *                     traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All
 *                     deployment groups can specify optional trigger, alarm, and rollback
 *                     settings.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Deployment configuration</b>: A set of deployment
 *                     rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Deployment</b>: The process and the components used
 *                     when updating a Lambda function, a containerized application in an
 *                         Amazon ECS service, or of installing content on one or more
 *                     instances. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the
 *                         Lambda function to be updated and one or more functions to
 *                     validate deployment lifecycle events. For an Amazon ECS deployment, this
 *                     is an AppSpec file that specifies the Amazon ECS task definition,
 *                     container, and port where production traffic is rerouted. For an EC2/On-premises
 *                     deployment, this is an archive file that contains source content—source code,
 *                     webpages, executable files, and deployment scripts—along with an AppSpec file.
 *                     Revisions are stored in Amazon S3 buckets or GitHub repositories. For
 *                         Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely
 *                     identified by its commit ID.</p>
 *             </li>
 *          </ul>
 *          <p>This guide also contains information to help you get details about the instances in
 *             your deployments, to make on-premises instances available for CodeDeploy
 *             deployments, to get details about a Lambda function deployment, and to get
 *             details about Amazon ECS service deployments.</p>
 *          <p>
 *             <b>CodeDeploy Information Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class CodeDeploy extends CodeDeployClient implements CodeDeploy {}
createAggregatedClient(commands, CodeDeploy, { paginators, waiters });
