// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodeBuildClient } from "./CodeBuildClient";
import {
  BatchDeleteBuildsCommand,
  BatchDeleteBuildsCommandInput,
  BatchDeleteBuildsCommandOutput,
} from "./commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildBatchesCommand,
  BatchGetBuildBatchesCommandInput,
  BatchGetBuildBatchesCommandOutput,
} from "./commands/BatchGetBuildBatchesCommand";
import {
  BatchGetBuildsCommand,
  BatchGetBuildsCommandInput,
  BatchGetBuildsCommandOutput,
} from "./commands/BatchGetBuildsCommand";
import {
  BatchGetCommandExecutionsCommand,
  BatchGetCommandExecutionsCommandInput,
  BatchGetCommandExecutionsCommandOutput,
} from "./commands/BatchGetCommandExecutionsCommand";
import {
  BatchGetFleetsCommand,
  BatchGetFleetsCommandInput,
  BatchGetFleetsCommandOutput,
} from "./commands/BatchGetFleetsCommand";
import {
  BatchGetProjectsCommand,
  BatchGetProjectsCommandInput,
  BatchGetProjectsCommandOutput,
} from "./commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommand,
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput,
} from "./commands/BatchGetReportGroupsCommand";
import {
  BatchGetReportsCommand,
  BatchGetReportsCommandInput,
  BatchGetReportsCommandOutput,
} from "./commands/BatchGetReportsCommand";
import {
  BatchGetSandboxesCommand,
  BatchGetSandboxesCommandInput,
  BatchGetSandboxesCommandOutput,
} from "./commands/BatchGetSandboxesCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateReportGroupCommand,
  CreateReportGroupCommandInput,
  CreateReportGroupCommandOutput,
} from "./commands/CreateReportGroupCommand";
import {
  CreateWebhookCommand,
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput,
} from "./commands/CreateWebhookCommand";
import {
  DeleteBuildBatchCommand,
  DeleteBuildBatchCommandInput,
  DeleteBuildBatchCommandOutput,
} from "./commands/DeleteBuildBatchCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteReportCommand,
  DeleteReportCommandInput,
  DeleteReportCommandOutput,
} from "./commands/DeleteReportCommand";
import {
  DeleteReportGroupCommand,
  DeleteReportGroupCommandInput,
  DeleteReportGroupCommandOutput,
} from "./commands/DeleteReportGroupCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSourceCredentialsCommand,
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput,
} from "./commands/DeleteSourceCredentialsCommand";
import {
  DeleteWebhookCommand,
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
} from "./commands/DeleteWebhookCommand";
import {
  DescribeCodeCoveragesCommand,
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "./commands/DescribeCodeCoveragesCommand";
import {
  DescribeTestCasesCommand,
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput,
} from "./commands/DescribeTestCasesCommand";
import {
  GetReportGroupTrendCommand,
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
} from "./commands/GetReportGroupTrendCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ImportSourceCredentialsCommand,
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput,
} from "./commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommand,
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput,
} from "./commands/InvalidateProjectCacheCommand";
import {
  ListBuildBatchesCommand,
  ListBuildBatchesCommandInput,
  ListBuildBatchesCommandOutput,
} from "./commands/ListBuildBatchesCommand";
import {
  ListBuildBatchesForProjectCommand,
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "./commands/ListBuildBatchesForProjectCommand";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommand,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "./commands/ListBuildsForProjectCommand";
import {
  ListCommandExecutionsForSandboxCommand,
  ListCommandExecutionsForSandboxCommandInput,
  ListCommandExecutionsForSandboxCommandOutput,
} from "./commands/ListCommandExecutionsForSandboxCommand";
import {
  ListCuratedEnvironmentImagesCommand,
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
} from "./commands/ListCuratedEnvironmentImagesCommand";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListReportGroupsCommand,
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput,
} from "./commands/ListReportGroupsCommand";
import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "./commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommand,
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "./commands/ListReportsForReportGroupCommand";
import {
  ListSandboxesCommand,
  ListSandboxesCommandInput,
  ListSandboxesCommandOutput,
} from "./commands/ListSandboxesCommand";
import {
  ListSandboxesForProjectCommand,
  ListSandboxesForProjectCommandInput,
  ListSandboxesForProjectCommandOutput,
} from "./commands/ListSandboxesForProjectCommand";
import {
  ListSharedProjectsCommand,
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput,
} from "./commands/ListSharedProjectsCommand";
import {
  ListSharedReportGroupsCommand,
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
} from "./commands/ListSharedReportGroupsCommand";
import {
  ListSourceCredentialsCommand,
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput,
} from "./commands/ListSourceCredentialsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RetryBuildBatchCommand,
  RetryBuildBatchCommandInput,
  RetryBuildBatchCommandOutput,
} from "./commands/RetryBuildBatchCommand";
import { RetryBuildCommand, RetryBuildCommandInput, RetryBuildCommandOutput } from "./commands/RetryBuildCommand";
import {
  StartBuildBatchCommand,
  StartBuildBatchCommandInput,
  StartBuildBatchCommandOutput,
} from "./commands/StartBuildBatchCommand";
import { StartBuildCommand, StartBuildCommandInput, StartBuildCommandOutput } from "./commands/StartBuildCommand";
import {
  StartCommandExecutionCommand,
  StartCommandExecutionCommandInput,
  StartCommandExecutionCommandOutput,
} from "./commands/StartCommandExecutionCommand";
import {
  StartSandboxCommand,
  StartSandboxCommandInput,
  StartSandboxCommandOutput,
} from "./commands/StartSandboxCommand";
import {
  StartSandboxConnectionCommand,
  StartSandboxConnectionCommandInput,
  StartSandboxConnectionCommandOutput,
} from "./commands/StartSandboxConnectionCommand";
import {
  StopBuildBatchCommand,
  StopBuildBatchCommandInput,
  StopBuildBatchCommandOutput,
} from "./commands/StopBuildBatchCommand";
import { StopBuildCommand, StopBuildCommandInput, StopBuildCommandOutput } from "./commands/StopBuildCommand";
import { StopSandboxCommand, StopSandboxCommandInput, StopSandboxCommandOutput } from "./commands/StopSandboxCommand";
import { UpdateFleetCommand, UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateProjectVisibilityCommand,
  UpdateProjectVisibilityCommandInput,
  UpdateProjectVisibilityCommandOutput,
} from "./commands/UpdateProjectVisibilityCommand";
import {
  UpdateReportGroupCommand,
  UpdateReportGroupCommandInput,
  UpdateReportGroupCommandOutput,
} from "./commands/UpdateReportGroupCommand";
import {
  UpdateWebhookCommand,
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput,
} from "./commands/UpdateWebhookCommand";

const commands = {
  BatchDeleteBuildsCommand,
  BatchGetBuildBatchesCommand,
  BatchGetBuildsCommand,
  BatchGetCommandExecutionsCommand,
  BatchGetFleetsCommand,
  BatchGetProjectsCommand,
  BatchGetReportGroupsCommand,
  BatchGetReportsCommand,
  BatchGetSandboxesCommand,
  CreateFleetCommand,
  CreateProjectCommand,
  CreateReportGroupCommand,
  CreateWebhookCommand,
  DeleteBuildBatchCommand,
  DeleteFleetCommand,
  DeleteProjectCommand,
  DeleteReportCommand,
  DeleteReportGroupCommand,
  DeleteResourcePolicyCommand,
  DeleteSourceCredentialsCommand,
  DeleteWebhookCommand,
  DescribeCodeCoveragesCommand,
  DescribeTestCasesCommand,
  GetReportGroupTrendCommand,
  GetResourcePolicyCommand,
  ImportSourceCredentialsCommand,
  InvalidateProjectCacheCommand,
  ListBuildBatchesCommand,
  ListBuildBatchesForProjectCommand,
  ListBuildsCommand,
  ListBuildsForProjectCommand,
  ListCommandExecutionsForSandboxCommand,
  ListCuratedEnvironmentImagesCommand,
  ListFleetsCommand,
  ListProjectsCommand,
  ListReportGroupsCommand,
  ListReportsCommand,
  ListReportsForReportGroupCommand,
  ListSandboxesCommand,
  ListSandboxesForProjectCommand,
  ListSharedProjectsCommand,
  ListSharedReportGroupsCommand,
  ListSourceCredentialsCommand,
  PutResourcePolicyCommand,
  RetryBuildCommand,
  RetryBuildBatchCommand,
  StartBuildCommand,
  StartBuildBatchCommand,
  StartCommandExecutionCommand,
  StartSandboxCommand,
  StartSandboxConnectionCommand,
  StopBuildCommand,
  StopBuildBatchCommand,
  StopSandboxCommand,
  UpdateFleetCommand,
  UpdateProjectCommand,
  UpdateProjectVisibilityCommand,
  UpdateReportGroupCommand,
  UpdateWebhookCommand,
};

export interface CodeBuild {
  /**
   * @see {@link BatchDeleteBuildsCommand}
   */
  batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteBuildsCommandOutput>;
  batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;
  batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetBuildBatchesCommand}
   */
  batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetBuildBatchesCommandOutput>;
  batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    cb: (err: any, data?: BatchGetBuildBatchesCommandOutput) => void
  ): void;
  batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetBuildBatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetBuildsCommand}
   */
  batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetBuildsCommandOutput>;
  batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;
  batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCommandExecutionsCommand}
   */
  batchGetCommandExecutions(
    args: BatchGetCommandExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCommandExecutionsCommandOutput>;
  batchGetCommandExecutions(
    args: BatchGetCommandExecutionsCommandInput,
    cb: (err: any, data?: BatchGetCommandExecutionsCommandOutput) => void
  ): void;
  batchGetCommandExecutions(
    args: BatchGetCommandExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCommandExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFleetsCommand}
   */
  batchGetFleets(
    args: BatchGetFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFleetsCommandOutput>;
  batchGetFleets(
    args: BatchGetFleetsCommandInput,
    cb: (err: any, data?: BatchGetFleetsCommandOutput) => void
  ): void;
  batchGetFleets(
    args: BatchGetFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetProjectsCommand}
   */
  batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetProjectsCommandOutput>;
  batchGetProjects(
    args: BatchGetProjectsCommandInput,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;
  batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetReportGroupsCommand}
   */
  batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetReportGroupsCommandOutput>;
  batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;
  batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetReportsCommand}
   */
  batchGetReports(
    args: BatchGetReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetReportsCommandOutput>;
  batchGetReports(
    args: BatchGetReportsCommandInput,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;
  batchGetReports(
    args: BatchGetReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSandboxesCommand}
   */
  batchGetSandboxes(
    args: BatchGetSandboxesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetSandboxesCommandOutput>;
  batchGetSandboxes(
    args: BatchGetSandboxesCommandInput,
    cb: (err: any, data?: BatchGetSandboxesCommandOutput) => void
  ): void;
  batchGetSandboxes(
    args: BatchGetSandboxesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetSandboxesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(
    args: CreateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetCommandOutput>;
  createFleet(
    args: CreateFleetCommandInput,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReportGroupCommand}
   */
  createReportGroup(
    args: CreateReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReportGroupCommandOutput>;
  createReportGroup(
    args: CreateReportGroupCommandInput,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;
  createReportGroup(
    args: CreateReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebhookCommand}
   */
  createWebhook(
    args: CreateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebhookCommandOutput>;
  createWebhook(
    args: CreateWebhookCommandInput,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  createWebhook(
    args: CreateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBuildBatchCommand}
   */
  deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBuildBatchCommandOutput>;
  deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    cb: (err: any, data?: DeleteBuildBatchCommandOutput) => void
  ): void;
  deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(
    args: DeleteFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetCommandOutput>;
  deleteFleet(
    args: DeleteFleetCommandInput,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReportCommand}
   */
  deleteReport(
    args: DeleteReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportCommandOutput>;
  deleteReport(
    args: DeleteReportCommandInput,
    cb: (err: any, data?: DeleteReportCommandOutput) => void
  ): void;
  deleteReport(
    args: DeleteReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReportGroupCommand}
   */
  deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportGroupCommandOutput>;
  deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;
  deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceCredentialsCommand}
   */
  deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceCredentialsCommandOutput>;
  deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;
  deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebhookCommand}
   */
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebhookCommandOutput>;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCodeCoveragesCommand}
   */
  describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeCoveragesCommandOutput>;
  describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    cb: (err: any, data?: DescribeCodeCoveragesCommandOutput) => void
  ): void;
  describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeCoveragesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestCasesCommand}
   */
  describeTestCases(
    args: DescribeTestCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestCasesCommandOutput>;
  describeTestCases(
    args: DescribeTestCasesCommandInput,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;
  describeTestCases(
    args: DescribeTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReportGroupTrendCommand}
   */
  getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReportGroupTrendCommandOutput>;
  getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    cb: (err: any, data?: GetReportGroupTrendCommandOutput) => void
  ): void;
  getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReportGroupTrendCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportSourceCredentialsCommand}
   */
  importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSourceCredentialsCommandOutput>;
  importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;
  importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link InvalidateProjectCacheCommand}
   */
  invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvalidateProjectCacheCommandOutput>;
  invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;
  invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildBatchesCommand}
   */
  listBuildBatches(): Promise<ListBuildBatchesCommandOutput>;
  listBuildBatches(
    args: ListBuildBatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildBatchesCommandOutput>;
  listBuildBatches(
    args: ListBuildBatchesCommandInput,
    cb: (err: any, data?: ListBuildBatchesCommandOutput) => void
  ): void;
  listBuildBatches(
    args: ListBuildBatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildBatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildBatchesForProjectCommand}
   */
  listBuildBatchesForProject(): Promise<ListBuildBatchesForProjectCommandOutput>;
  listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildBatchesForProjectCommandOutput>;
  listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    cb: (err: any, data?: ListBuildBatchesForProjectCommandOutput) => void
  ): void;
  listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildBatchesForProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildsCommand}
   */
  listBuilds(): Promise<ListBuildsCommandOutput>;
  listBuilds(
    args: ListBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildsCommandOutput>;
  listBuilds(
    args: ListBuildsCommandInput,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;
  listBuilds(
    args: ListBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildsForProjectCommand}
   */
  listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildsForProjectCommandOutput>;
  listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;
  listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCommandExecutionsForSandboxCommand}
   */
  listCommandExecutionsForSandbox(
    args: ListCommandExecutionsForSandboxCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCommandExecutionsForSandboxCommandOutput>;
  listCommandExecutionsForSandbox(
    args: ListCommandExecutionsForSandboxCommandInput,
    cb: (err: any, data?: ListCommandExecutionsForSandboxCommandOutput) => void
  ): void;
  listCommandExecutionsForSandbox(
    args: ListCommandExecutionsForSandboxCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommandExecutionsForSandboxCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCuratedEnvironmentImagesCommand}
   */
  listCuratedEnvironmentImages(): Promise<ListCuratedEnvironmentImagesCommandOutput>;
  listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCuratedEnvironmentImagesCommandOutput>;
  listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;
  listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(): Promise<ListFleetsCommandOutput>;
  listFleets(
    args: ListFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetsCommandOutput>;
  listFleets(
    args: ListFleetsCommandInput,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportGroupsCommand}
   */
  listReportGroups(): Promise<ListReportGroupsCommandOutput>;
  listReportGroups(
    args: ListReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportGroupsCommandOutput>;
  listReportGroups(
    args: ListReportGroupsCommandInput,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;
  listReportGroups(
    args: ListReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportsCommand}
   */
  listReports(): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;
  listReports(
    args: ListReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportsForReportGroupCommand}
   */
  listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportsForReportGroupCommandOutput>;
  listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;
  listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSandboxesCommand}
   */
  listSandboxes(): Promise<ListSandboxesCommandOutput>;
  listSandboxes(
    args: ListSandboxesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSandboxesCommandOutput>;
  listSandboxes(
    args: ListSandboxesCommandInput,
    cb: (err: any, data?: ListSandboxesCommandOutput) => void
  ): void;
  listSandboxes(
    args: ListSandboxesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSandboxesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSandboxesForProjectCommand}
   */
  listSandboxesForProject(
    args: ListSandboxesForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSandboxesForProjectCommandOutput>;
  listSandboxesForProject(
    args: ListSandboxesForProjectCommandInput,
    cb: (err: any, data?: ListSandboxesForProjectCommandOutput) => void
  ): void;
  listSandboxesForProject(
    args: ListSandboxesForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSandboxesForProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharedProjectsCommand}
   */
  listSharedProjects(): Promise<ListSharedProjectsCommandOutput>;
  listSharedProjects(
    args: ListSharedProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSharedProjectsCommandOutput>;
  listSharedProjects(
    args: ListSharedProjectsCommandInput,
    cb: (err: any, data?: ListSharedProjectsCommandOutput) => void
  ): void;
  listSharedProjects(
    args: ListSharedProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSharedProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharedReportGroupsCommand}
   */
  listSharedReportGroups(): Promise<ListSharedReportGroupsCommandOutput>;
  listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSharedReportGroupsCommandOutput>;
  listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void
  ): void;
  listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceCredentialsCommand}
   */
  listSourceCredentials(): Promise<ListSourceCredentialsCommandOutput>;
  listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceCredentialsCommandOutput>;
  listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;
  listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryBuildCommand}
   */
  retryBuild(): Promise<RetryBuildCommandOutput>;
  retryBuild(
    args: RetryBuildCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryBuildCommandOutput>;
  retryBuild(
    args: RetryBuildCommandInput,
    cb: (err: any, data?: RetryBuildCommandOutput) => void
  ): void;
  retryBuild(
    args: RetryBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryBuildBatchCommand}
   */
  retryBuildBatch(): Promise<RetryBuildBatchCommandOutput>;
  retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryBuildBatchCommandOutput>;
  retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    cb: (err: any, data?: RetryBuildBatchCommandOutput) => void
  ): void;
  retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBuildCommand}
   */
  startBuild(
    args: StartBuildCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBuildCommandOutput>;
  startBuild(
    args: StartBuildCommandInput,
    cb: (err: any, data?: StartBuildCommandOutput) => void
  ): void;
  startBuild(
    args: StartBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBuildBatchCommand}
   */
  startBuildBatch(
    args: StartBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBuildBatchCommandOutput>;
  startBuildBatch(
    args: StartBuildBatchCommandInput,
    cb: (err: any, data?: StartBuildBatchCommandOutput) => void
  ): void;
  startBuildBatch(
    args: StartBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCommandExecutionCommand}
   */
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCommandExecutionCommandOutput>;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSandboxCommand}
   */
  startSandbox(): Promise<StartSandboxCommandOutput>;
  startSandbox(
    args: StartSandboxCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSandboxCommandOutput>;
  startSandbox(
    args: StartSandboxCommandInput,
    cb: (err: any, data?: StartSandboxCommandOutput) => void
  ): void;
  startSandbox(
    args: StartSandboxCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSandboxCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSandboxConnectionCommand}
   */
  startSandboxConnection(
    args: StartSandboxConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSandboxConnectionCommandOutput>;
  startSandboxConnection(
    args: StartSandboxConnectionCommandInput,
    cb: (err: any, data?: StartSandboxConnectionCommandOutput) => void
  ): void;
  startSandboxConnection(
    args: StartSandboxConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSandboxConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBuildCommand}
   */
  stopBuild(
    args: StopBuildCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBuildCommandOutput>;
  stopBuild(
    args: StopBuildCommandInput,
    cb: (err: any, data?: StopBuildCommandOutput) => void
  ): void;
  stopBuild(
    args: StopBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBuildBatchCommand}
   */
  stopBuildBatch(
    args: StopBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBuildBatchCommandOutput>;
  stopBuildBatch(
    args: StopBuildBatchCommandInput,
    cb: (err: any, data?: StopBuildBatchCommandOutput) => void
  ): void;
  stopBuildBatch(
    args: StopBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSandboxCommand}
   */
  stopSandbox(
    args: StopSandboxCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSandboxCommandOutput>;
  stopSandbox(
    args: StopSandboxCommandInput,
    cb: (err: any, data?: StopSandboxCommandOutput) => void
  ): void;
  stopSandbox(
    args: StopSandboxCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSandboxCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCommand}
   */
  updateFleet(
    args: UpdateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetCommandOutput>;
  updateFleet(
    args: UpdateFleetCommandInput,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;
  updateFleet(
    args: UpdateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectVisibilityCommand}
   */
  updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectVisibilityCommandOutput>;
  updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    cb: (err: any, data?: UpdateProjectVisibilityCommandOutput) => void
  ): void;
  updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReportGroupCommand}
   */
  updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportGroupCommandOutput>;
  updateReportGroup(
    args: UpdateReportGroupCommandInput,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;
  updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebhookCommand}
   */
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWebhookCommandOutput>;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
}

/**
 * <fullname>CodeBuild</fullname>
 *          <p>CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code,
 *             runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the
 *             need to provision, manage, and scale your own build servers. It provides prepackaged
 *             build environments for the most popular programming languages and build tools, such as
 *             Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild
 *             to use your own build tools. CodeBuild scales automatically to meet peak build requests. You
 *             pay only for the build time you consume. For more information about CodeBuild, see the <i>
 *                <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">CodeBuild User
 *                     Guide</a>.</i>
 *          </p>
 * @public
 */
export class CodeBuild extends CodeBuildClient implements CodeBuild {}
createAggregatedClient(commands, CodeBuild);
