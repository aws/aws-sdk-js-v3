// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CodeBuildClient } from "./CodeBuildClient";
import {
  type BatchDeleteBuildsCommandInput,
  type BatchDeleteBuildsCommandOutput,
  BatchDeleteBuildsCommand,
} from "./commands/BatchDeleteBuildsCommand";
import {
  type BatchGetBuildBatchesCommandInput,
  type BatchGetBuildBatchesCommandOutput,
  BatchGetBuildBatchesCommand,
} from "./commands/BatchGetBuildBatchesCommand";
import {
  type BatchGetBuildsCommandInput,
  type BatchGetBuildsCommandOutput,
  BatchGetBuildsCommand,
} from "./commands/BatchGetBuildsCommand";
import {
  type BatchGetCommandExecutionsCommandInput,
  type BatchGetCommandExecutionsCommandOutput,
  BatchGetCommandExecutionsCommand,
} from "./commands/BatchGetCommandExecutionsCommand";
import {
  type BatchGetFleetsCommandInput,
  type BatchGetFleetsCommandOutput,
  BatchGetFleetsCommand,
} from "./commands/BatchGetFleetsCommand";
import {
  type BatchGetProjectsCommandInput,
  type BatchGetProjectsCommandOutput,
  BatchGetProjectsCommand,
} from "./commands/BatchGetProjectsCommand";
import {
  type BatchGetReportGroupsCommandInput,
  type BatchGetReportGroupsCommandOutput,
  BatchGetReportGroupsCommand,
} from "./commands/BatchGetReportGroupsCommand";
import {
  type BatchGetReportsCommandInput,
  type BatchGetReportsCommandOutput,
  BatchGetReportsCommand,
} from "./commands/BatchGetReportsCommand";
import {
  type BatchGetSandboxesCommandInput,
  type BatchGetSandboxesCommandOutput,
  BatchGetSandboxesCommand,
} from "./commands/BatchGetSandboxesCommand";
import {
  type CreateFleetCommandInput,
  type CreateFleetCommandOutput,
  CreateFleetCommand,
} from "./commands/CreateFleetCommand";
import {
  type CreateProjectCommandInput,
  type CreateProjectCommandOutput,
  CreateProjectCommand,
} from "./commands/CreateProjectCommand";
import {
  type CreateReportGroupCommandInput,
  type CreateReportGroupCommandOutput,
  CreateReportGroupCommand,
} from "./commands/CreateReportGroupCommand";
import {
  type CreateWebhookCommandInput,
  type CreateWebhookCommandOutput,
  CreateWebhookCommand,
} from "./commands/CreateWebhookCommand";
import {
  type DeleteBuildBatchCommandInput,
  type DeleteBuildBatchCommandOutput,
  DeleteBuildBatchCommand,
} from "./commands/DeleteBuildBatchCommand";
import {
  type DeleteFleetCommandInput,
  type DeleteFleetCommandOutput,
  DeleteFleetCommand,
} from "./commands/DeleteFleetCommand";
import {
  type DeleteProjectCommandInput,
  type DeleteProjectCommandOutput,
  DeleteProjectCommand,
} from "./commands/DeleteProjectCommand";
import {
  type DeleteReportCommandInput,
  type DeleteReportCommandOutput,
  DeleteReportCommand,
} from "./commands/DeleteReportCommand";
import {
  type DeleteReportGroupCommandInput,
  type DeleteReportGroupCommandOutput,
  DeleteReportGroupCommand,
} from "./commands/DeleteReportGroupCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteSourceCredentialsCommandInput,
  type DeleteSourceCredentialsCommandOutput,
  DeleteSourceCredentialsCommand,
} from "./commands/DeleteSourceCredentialsCommand";
import {
  type DeleteWebhookCommandInput,
  type DeleteWebhookCommandOutput,
  DeleteWebhookCommand,
} from "./commands/DeleteWebhookCommand";
import {
  type DescribeCodeCoveragesCommandInput,
  type DescribeCodeCoveragesCommandOutput,
  DescribeCodeCoveragesCommand,
} from "./commands/DescribeCodeCoveragesCommand";
import {
  type DescribeTestCasesCommandInput,
  type DescribeTestCasesCommandOutput,
  DescribeTestCasesCommand,
} from "./commands/DescribeTestCasesCommand";
import {
  type GetReportGroupTrendCommandInput,
  type GetReportGroupTrendCommandOutput,
  GetReportGroupTrendCommand,
} from "./commands/GetReportGroupTrendCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ImportSourceCredentialsCommandInput,
  type ImportSourceCredentialsCommandOutput,
  ImportSourceCredentialsCommand,
} from "./commands/ImportSourceCredentialsCommand";
import {
  type InvalidateProjectCacheCommandInput,
  type InvalidateProjectCacheCommandOutput,
  InvalidateProjectCacheCommand,
} from "./commands/InvalidateProjectCacheCommand";
import {
  type ListBuildBatchesCommandInput,
  type ListBuildBatchesCommandOutput,
  ListBuildBatchesCommand,
} from "./commands/ListBuildBatchesCommand";
import {
  type ListBuildBatchesForProjectCommandInput,
  type ListBuildBatchesForProjectCommandOutput,
  ListBuildBatchesForProjectCommand,
} from "./commands/ListBuildBatchesForProjectCommand";
import {
  type ListBuildsCommandInput,
  type ListBuildsCommandOutput,
  ListBuildsCommand,
} from "./commands/ListBuildsCommand";
import {
  type ListBuildsForProjectCommandInput,
  type ListBuildsForProjectCommandOutput,
  ListBuildsForProjectCommand,
} from "./commands/ListBuildsForProjectCommand";
import {
  type ListCommandExecutionsForSandboxCommandInput,
  type ListCommandExecutionsForSandboxCommandOutput,
  ListCommandExecutionsForSandboxCommand,
} from "./commands/ListCommandExecutionsForSandboxCommand";
import {
  type ListCuratedEnvironmentImagesCommandInput,
  type ListCuratedEnvironmentImagesCommandOutput,
  ListCuratedEnvironmentImagesCommand,
} from "./commands/ListCuratedEnvironmentImagesCommand";
import {
  type ListFleetsCommandInput,
  type ListFleetsCommandOutput,
  ListFleetsCommand,
} from "./commands/ListFleetsCommand";
import {
  type ListProjectsCommandInput,
  type ListProjectsCommandOutput,
  ListProjectsCommand,
} from "./commands/ListProjectsCommand";
import {
  type ListReportGroupsCommandInput,
  type ListReportGroupsCommandOutput,
  ListReportGroupsCommand,
} from "./commands/ListReportGroupsCommand";
import {
  type ListReportsCommandInput,
  type ListReportsCommandOutput,
  ListReportsCommand,
} from "./commands/ListReportsCommand";
import {
  type ListReportsForReportGroupCommandInput,
  type ListReportsForReportGroupCommandOutput,
  ListReportsForReportGroupCommand,
} from "./commands/ListReportsForReportGroupCommand";
import {
  type ListSandboxesCommandInput,
  type ListSandboxesCommandOutput,
  ListSandboxesCommand,
} from "./commands/ListSandboxesCommand";
import {
  type ListSandboxesForProjectCommandInput,
  type ListSandboxesForProjectCommandOutput,
  ListSandboxesForProjectCommand,
} from "./commands/ListSandboxesForProjectCommand";
import {
  type ListSharedProjectsCommandInput,
  type ListSharedProjectsCommandOutput,
  ListSharedProjectsCommand,
} from "./commands/ListSharedProjectsCommand";
import {
  type ListSharedReportGroupsCommandInput,
  type ListSharedReportGroupsCommandOutput,
  ListSharedReportGroupsCommand,
} from "./commands/ListSharedReportGroupsCommand";
import {
  type ListSourceCredentialsCommandInput,
  type ListSourceCredentialsCommandOutput,
  ListSourceCredentialsCommand,
} from "./commands/ListSourceCredentialsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RetryBuildBatchCommandInput,
  type RetryBuildBatchCommandOutput,
  RetryBuildBatchCommand,
} from "./commands/RetryBuildBatchCommand";
import {
  type RetryBuildCommandInput,
  type RetryBuildCommandOutput,
  RetryBuildCommand,
} from "./commands/RetryBuildCommand";
import {
  type StartBuildBatchCommandInput,
  type StartBuildBatchCommandOutput,
  StartBuildBatchCommand,
} from "./commands/StartBuildBatchCommand";
import {
  type StartBuildCommandInput,
  type StartBuildCommandOutput,
  StartBuildCommand,
} from "./commands/StartBuildCommand";
import {
  type StartCommandExecutionCommandInput,
  type StartCommandExecutionCommandOutput,
  StartCommandExecutionCommand,
} from "./commands/StartCommandExecutionCommand";
import {
  type StartSandboxCommandInput,
  type StartSandboxCommandOutput,
  StartSandboxCommand,
} from "./commands/StartSandboxCommand";
import {
  type StartSandboxConnectionCommandInput,
  type StartSandboxConnectionCommandOutput,
  StartSandboxConnectionCommand,
} from "./commands/StartSandboxConnectionCommand";
import {
  type StopBuildBatchCommandInput,
  type StopBuildBatchCommandOutput,
  StopBuildBatchCommand,
} from "./commands/StopBuildBatchCommand";
import { type StopBuildCommandInput, type StopBuildCommandOutput, StopBuildCommand } from "./commands/StopBuildCommand";
import {
  type StopSandboxCommandInput,
  type StopSandboxCommandOutput,
  StopSandboxCommand,
} from "./commands/StopSandboxCommand";
import {
  type UpdateFleetCommandInput,
  type UpdateFleetCommandOutput,
  UpdateFleetCommand,
} from "./commands/UpdateFleetCommand";
import {
  type UpdateProjectCommandInput,
  type UpdateProjectCommandOutput,
  UpdateProjectCommand,
} from "./commands/UpdateProjectCommand";
import {
  type UpdateProjectVisibilityCommandInput,
  type UpdateProjectVisibilityCommandOutput,
  UpdateProjectVisibilityCommand,
} from "./commands/UpdateProjectVisibilityCommand";
import {
  type UpdateReportGroupCommandInput,
  type UpdateReportGroupCommandOutput,
  UpdateReportGroupCommand,
} from "./commands/UpdateReportGroupCommand";
import {
  type UpdateWebhookCommandInput,
  type UpdateWebhookCommandOutput,
  UpdateWebhookCommand,
} from "./commands/UpdateWebhookCommand";
import { paginateDescribeCodeCoverages } from "./pagination/DescribeCodeCoveragesPaginator";
import { paginateDescribeTestCases } from "./pagination/DescribeTestCasesPaginator";
import { paginateListBuildBatchesForProject } from "./pagination/ListBuildBatchesForProjectPaginator";
import { paginateListBuildBatches } from "./pagination/ListBuildBatchesPaginator";
import { paginateListBuildsForProject } from "./pagination/ListBuildsForProjectPaginator";
import { paginateListBuilds } from "./pagination/ListBuildsPaginator";
import { paginateListCommandExecutionsForSandbox } from "./pagination/ListCommandExecutionsForSandboxPaginator";
import { paginateListFleets } from "./pagination/ListFleetsPaginator";
import { paginateListProjects } from "./pagination/ListProjectsPaginator";
import { paginateListReportGroups } from "./pagination/ListReportGroupsPaginator";
import { paginateListReportsForReportGroup } from "./pagination/ListReportsForReportGroupPaginator";
import { paginateListReports } from "./pagination/ListReportsPaginator";
import { paginateListSandboxesForProject } from "./pagination/ListSandboxesForProjectPaginator";
import { paginateListSandboxes } from "./pagination/ListSandboxesPaginator";
import { paginateListSharedProjects } from "./pagination/ListSharedProjectsPaginator";
import { paginateListSharedReportGroups } from "./pagination/ListSharedReportGroupsPaginator";

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
const paginators = {
  paginateDescribeCodeCoverages,
  paginateDescribeTestCases,
  paginateListBuildBatches,
  paginateListBuildBatchesForProject,
  paginateListBuilds,
  paginateListBuildsForProject,
  paginateListCommandExecutionsForSandbox,
  paginateListFleets,
  paginateListProjects,
  paginateListReportGroups,
  paginateListReports,
  paginateListReportsForReportGroup,
  paginateListSandboxes,
  paginateListSandboxesForProject,
  paginateListSharedProjects,
  paginateListSharedReportGroups,
};

/**
 * @public
 */
export interface CodeBuildRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CodeBuild {
  /**
   * @see {@link BatchDeleteBuildsCommand}
   */
  batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchDeleteBuildsCommandOutput>;
  batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;
  batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetBuildBatchesCommand}
   */
  batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetBuildBatchesCommandOutput>;
  batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    cb: (err: any, data?: BatchGetBuildBatchesCommandOutput) => void
  ): void;
  batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetBuildBatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetBuildsCommand}
   */
  batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetBuildsCommandOutput>;
  batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;
  batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCommandExecutionsCommand}
   */
  batchGetCommandExecutions(
    args: BatchGetCommandExecutionsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetCommandExecutionsCommandOutput>;
  batchGetCommandExecutions(
    args: BatchGetCommandExecutionsCommandInput,
    cb: (err: any, data?: BatchGetCommandExecutionsCommandOutput) => void
  ): void;
  batchGetCommandExecutions(
    args: BatchGetCommandExecutionsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetCommandExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFleetsCommand}
   */
  batchGetFleets(
    args: BatchGetFleetsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetFleetsCommandOutput>;
  batchGetFleets(
    args: BatchGetFleetsCommandInput,
    cb: (err: any, data?: BatchGetFleetsCommandOutput) => void
  ): void;
  batchGetFleets(
    args: BatchGetFleetsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetProjectsCommand}
   */
  batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetProjectsCommandOutput>;
  batchGetProjects(
    args: BatchGetProjectsCommandInput,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;
  batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetReportGroupsCommand}
   */
  batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetReportGroupsCommandOutput>;
  batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;
  batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetReportsCommand}
   */
  batchGetReports(
    args: BatchGetReportsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetReportsCommandOutput>;
  batchGetReports(
    args: BatchGetReportsCommandInput,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;
  batchGetReports(
    args: BatchGetReportsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSandboxesCommand}
   */
  batchGetSandboxes(
    args: BatchGetSandboxesCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<BatchGetSandboxesCommandOutput>;
  batchGetSandboxes(
    args: BatchGetSandboxesCommandInput,
    cb: (err: any, data?: BatchGetSandboxesCommandOutput) => void
  ): void;
  batchGetSandboxes(
    args: BatchGetSandboxesCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: BatchGetSandboxesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(
    args: CreateFleetCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<CreateFleetCommandOutput>;
  createFleet(
    args: CreateFleetCommandInput,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(
    args: CreateProjectCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<CreateProjectCommandOutput>;
  createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  createProject(
    args: CreateProjectCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReportGroupCommand}
   */
  createReportGroup(
    args: CreateReportGroupCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<CreateReportGroupCommandOutput>;
  createReportGroup(
    args: CreateReportGroupCommandInput,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;
  createReportGroup(
    args: CreateReportGroupCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebhookCommand}
   */
  createWebhook(
    args: CreateWebhookCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<CreateWebhookCommandOutput>;
  createWebhook(
    args: CreateWebhookCommandInput,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  createWebhook(
    args: CreateWebhookCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBuildBatchCommand}
   */
  deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteBuildBatchCommandOutput>;
  deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    cb: (err: any, data?: DeleteBuildBatchCommandOutput) => void
  ): void;
  deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(
    args: DeleteFleetCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteFleetCommandOutput>;
  deleteFleet(
    args: DeleteFleetCommandInput,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(
    args: DeleteProjectCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteProjectCommandOutput>;
  deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReportCommand}
   */
  deleteReport(
    args: DeleteReportCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteReportCommandOutput>;
  deleteReport(
    args: DeleteReportCommandInput,
    cb: (err: any, data?: DeleteReportCommandOutput) => void
  ): void;
  deleteReport(
    args: DeleteReportCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReportGroupCommand}
   */
  deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteReportGroupCommandOutput>;
  deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;
  deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceCredentialsCommand}
   */
  deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteSourceCredentialsCommandOutput>;
  deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;
  deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebhookCommand}
   */
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DeleteWebhookCommandOutput>;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCodeCoveragesCommand}
   */
  describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DescribeCodeCoveragesCommandOutput>;
  describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    cb: (err: any, data?: DescribeCodeCoveragesCommandOutput) => void
  ): void;
  describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DescribeCodeCoveragesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestCasesCommand}
   */
  describeTestCases(
    args: DescribeTestCasesCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<DescribeTestCasesCommandOutput>;
  describeTestCases(
    args: DescribeTestCasesCommandInput,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;
  describeTestCases(
    args: DescribeTestCasesCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReportGroupTrendCommand}
   */
  getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<GetReportGroupTrendCommandOutput>;
  getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    cb: (err: any, data?: GetReportGroupTrendCommandOutput) => void
  ): void;
  getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: GetReportGroupTrendCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportSourceCredentialsCommand}
   */
  importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ImportSourceCredentialsCommandOutput>;
  importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;
  importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link InvalidateProjectCacheCommand}
   */
  invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<InvalidateProjectCacheCommandOutput>;
  invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;
  invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildBatchesCommand}
   */
  listBuildBatches(): Promise<ListBuildBatchesCommandOutput>;
  listBuildBatches(
    args: ListBuildBatchesCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListBuildBatchesCommandOutput>;
  listBuildBatches(
    args: ListBuildBatchesCommandInput,
    cb: (err: any, data?: ListBuildBatchesCommandOutput) => void
  ): void;
  listBuildBatches(
    args: ListBuildBatchesCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListBuildBatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildBatchesForProjectCommand}
   */
  listBuildBatchesForProject(): Promise<ListBuildBatchesForProjectCommandOutput>;
  listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListBuildBatchesForProjectCommandOutput>;
  listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    cb: (err: any, data?: ListBuildBatchesForProjectCommandOutput) => void
  ): void;
  listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListBuildBatchesForProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildsCommand}
   */
  listBuilds(): Promise<ListBuildsCommandOutput>;
  listBuilds(
    args: ListBuildsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListBuildsCommandOutput>;
  listBuilds(
    args: ListBuildsCommandInput,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;
  listBuilds(
    args: ListBuildsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildsForProjectCommand}
   */
  listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListBuildsForProjectCommandOutput>;
  listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;
  listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCommandExecutionsForSandboxCommand}
   */
  listCommandExecutionsForSandbox(
    args: ListCommandExecutionsForSandboxCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListCommandExecutionsForSandboxCommandOutput>;
  listCommandExecutionsForSandbox(
    args: ListCommandExecutionsForSandboxCommandInput,
    cb: (err: any, data?: ListCommandExecutionsForSandboxCommandOutput) => void
  ): void;
  listCommandExecutionsForSandbox(
    args: ListCommandExecutionsForSandboxCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListCommandExecutionsForSandboxCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCuratedEnvironmentImagesCommand}
   */
  listCuratedEnvironmentImages(): Promise<ListCuratedEnvironmentImagesCommandOutput>;
  listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListCuratedEnvironmentImagesCommandOutput>;
  listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;
  listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(): Promise<ListFleetsCommandOutput>;
  listFleets(
    args: ListFleetsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListFleetsCommandOutput>;
  listFleets(
    args: ListFleetsCommandInput,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportGroupsCommand}
   */
  listReportGroups(): Promise<ListReportGroupsCommandOutput>;
  listReportGroups(
    args: ListReportGroupsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListReportGroupsCommandOutput>;
  listReportGroups(
    args: ListReportGroupsCommandInput,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;
  listReportGroups(
    args: ListReportGroupsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportsCommand}
   */
  listReports(): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;
  listReports(
    args: ListReportsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportsForReportGroupCommand}
   */
  listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListReportsForReportGroupCommandOutput>;
  listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;
  listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSandboxesCommand}
   */
  listSandboxes(): Promise<ListSandboxesCommandOutput>;
  listSandboxes(
    args: ListSandboxesCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListSandboxesCommandOutput>;
  listSandboxes(
    args: ListSandboxesCommandInput,
    cb: (err: any, data?: ListSandboxesCommandOutput) => void
  ): void;
  listSandboxes(
    args: ListSandboxesCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListSandboxesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSandboxesForProjectCommand}
   */
  listSandboxesForProject(
    args: ListSandboxesForProjectCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListSandboxesForProjectCommandOutput>;
  listSandboxesForProject(
    args: ListSandboxesForProjectCommandInput,
    cb: (err: any, data?: ListSandboxesForProjectCommandOutput) => void
  ): void;
  listSandboxesForProject(
    args: ListSandboxesForProjectCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListSandboxesForProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharedProjectsCommand}
   */
  listSharedProjects(): Promise<ListSharedProjectsCommandOutput>;
  listSharedProjects(
    args: ListSharedProjectsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListSharedProjectsCommandOutput>;
  listSharedProjects(
    args: ListSharedProjectsCommandInput,
    cb: (err: any, data?: ListSharedProjectsCommandOutput) => void
  ): void;
  listSharedProjects(
    args: ListSharedProjectsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListSharedProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharedReportGroupsCommand}
   */
  listSharedReportGroups(): Promise<ListSharedReportGroupsCommandOutput>;
  listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListSharedReportGroupsCommandOutput>;
  listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void
  ): void;
  listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceCredentialsCommand}
   */
  listSourceCredentials(): Promise<ListSourceCredentialsCommandOutput>;
  listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<ListSourceCredentialsCommandOutput>;
  listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;
  listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryBuildCommand}
   */
  retryBuild(): Promise<RetryBuildCommandOutput>;
  retryBuild(
    args: RetryBuildCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<RetryBuildCommandOutput>;
  retryBuild(
    args: RetryBuildCommandInput,
    cb: (err: any, data?: RetryBuildCommandOutput) => void
  ): void;
  retryBuild(
    args: RetryBuildCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: RetryBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryBuildBatchCommand}
   */
  retryBuildBatch(): Promise<RetryBuildBatchCommandOutput>;
  retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<RetryBuildBatchCommandOutput>;
  retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    cb: (err: any, data?: RetryBuildBatchCommandOutput) => void
  ): void;
  retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: RetryBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBuildCommand}
   */
  startBuild(
    args: StartBuildCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StartBuildCommandOutput>;
  startBuild(
    args: StartBuildCommandInput,
    cb: (err: any, data?: StartBuildCommandOutput) => void
  ): void;
  startBuild(
    args: StartBuildCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StartBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBuildBatchCommand}
   */
  startBuildBatch(
    args: StartBuildBatchCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StartBuildBatchCommandOutput>;
  startBuildBatch(
    args: StartBuildBatchCommandInput,
    cb: (err: any, data?: StartBuildBatchCommandOutput) => void
  ): void;
  startBuildBatch(
    args: StartBuildBatchCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StartBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCommandExecutionCommand}
   */
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StartCommandExecutionCommandOutput>;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSandboxCommand}
   */
  startSandbox(): Promise<StartSandboxCommandOutput>;
  startSandbox(
    args: StartSandboxCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StartSandboxCommandOutput>;
  startSandbox(
    args: StartSandboxCommandInput,
    cb: (err: any, data?: StartSandboxCommandOutput) => void
  ): void;
  startSandbox(
    args: StartSandboxCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StartSandboxCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSandboxConnectionCommand}
   */
  startSandboxConnection(
    args: StartSandboxConnectionCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StartSandboxConnectionCommandOutput>;
  startSandboxConnection(
    args: StartSandboxConnectionCommandInput,
    cb: (err: any, data?: StartSandboxConnectionCommandOutput) => void
  ): void;
  startSandboxConnection(
    args: StartSandboxConnectionCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StartSandboxConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBuildCommand}
   */
  stopBuild(
    args: StopBuildCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StopBuildCommandOutput>;
  stopBuild(
    args: StopBuildCommandInput,
    cb: (err: any, data?: StopBuildCommandOutput) => void
  ): void;
  stopBuild(
    args: StopBuildCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StopBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBuildBatchCommand}
   */
  stopBuildBatch(
    args: StopBuildBatchCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StopBuildBatchCommandOutput>;
  stopBuildBatch(
    args: StopBuildBatchCommandInput,
    cb: (err: any, data?: StopBuildBatchCommandOutput) => void
  ): void;
  stopBuildBatch(
    args: StopBuildBatchCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StopBuildBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSandboxCommand}
   */
  stopSandbox(
    args: StopSandboxCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<StopSandboxCommandOutput>;
  stopSandbox(
    args: StopSandboxCommandInput,
    cb: (err: any, data?: StopSandboxCommandOutput) => void
  ): void;
  stopSandbox(
    args: StopSandboxCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: StopSandboxCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCommand}
   */
  updateFleet(
    args: UpdateFleetCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<UpdateFleetCommandOutput>;
  updateFleet(
    args: UpdateFleetCommandInput,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;
  updateFleet(
    args: UpdateFleetCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(
    args: UpdateProjectCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<UpdateProjectCommandOutput>;
  updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectVisibilityCommand}
   */
  updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<UpdateProjectVisibilityCommandOutput>;
  updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    cb: (err: any, data?: UpdateProjectVisibilityCommandOutput) => void
  ): void;
  updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: UpdateProjectVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReportGroupCommand}
   */
  updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<UpdateReportGroupCommandOutput>;
  updateReportGroup(
    args: UpdateReportGroupCommandInput,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;
  updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebhookCommand}
   */
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options?: CodeBuildRequestOptions
  ): Promise<UpdateWebhookCommandOutput>;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options: CodeBuildRequestOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCodeCoveragesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeCodeCoveragesCommandOutput}.
   */
  paginateDescribeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeCodeCoveragesCommandOutput>;

  /**
   * @see {@link DescribeTestCasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTestCasesCommandOutput}.
   */
  paginateDescribeTestCases(
    args: DescribeTestCasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTestCasesCommandOutput>;

  /**
   * @see {@link ListBuildBatchesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBuildBatchesCommandOutput}.
   */
  paginateListBuildBatches(
    args?: ListBuildBatchesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBuildBatchesCommandOutput>;

  /**
   * @see {@link ListBuildBatchesForProjectCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBuildBatchesForProjectCommandOutput}.
   */
  paginateListBuildBatchesForProject(
    args?: ListBuildBatchesForProjectCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBuildBatchesForProjectCommandOutput>;

  /**
   * @see {@link ListBuildsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBuildsCommandOutput}.
   */
  paginateListBuilds(
    args?: ListBuildsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBuildsCommandOutput>;

  /**
   * @see {@link ListBuildsForProjectCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBuildsForProjectCommandOutput}.
   */
  paginateListBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBuildsForProjectCommandOutput>;

  /**
   * @see {@link ListCommandExecutionsForSandboxCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCommandExecutionsForSandboxCommandOutput}.
   */
  paginateListCommandExecutionsForSandbox(
    args: ListCommandExecutionsForSandboxCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCommandExecutionsForSandboxCommandOutput>;

  /**
   * @see {@link ListFleetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFleetsCommandOutput}.
   */
  paginateListFleets(
    args?: ListFleetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFleetsCommandOutput>;

  /**
   * @see {@link ListProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectsCommandOutput}.
   */
  paginateListProjects(
    args?: ListProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectsCommandOutput>;

  /**
   * @see {@link ListReportGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportGroupsCommandOutput}.
   */
  paginateListReportGroups(
    args?: ListReportGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportGroupsCommandOutput>;

  /**
   * @see {@link ListReportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportsCommandOutput}.
   */
  paginateListReports(
    args?: ListReportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportsCommandOutput>;

  /**
   * @see {@link ListReportsForReportGroupCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportsForReportGroupCommandOutput}.
   */
  paginateListReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportsForReportGroupCommandOutput>;

  /**
   * @see {@link ListSandboxesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSandboxesCommandOutput}.
   */
  paginateListSandboxes(
    args?: ListSandboxesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSandboxesCommandOutput>;

  /**
   * @see {@link ListSandboxesForProjectCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSandboxesForProjectCommandOutput}.
   */
  paginateListSandboxesForProject(
    args: ListSandboxesForProjectCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSandboxesForProjectCommandOutput>;

  /**
   * @see {@link ListSharedProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSharedProjectsCommandOutput}.
   */
  paginateListSharedProjects(
    args?: ListSharedProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSharedProjectsCommandOutput>;

  /**
   * @see {@link ListSharedReportGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSharedReportGroupsCommandOutput}.
   */
  paginateListSharedReportGroups(
    args?: ListSharedReportGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSharedReportGroupsCommandOutput>;
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
createAggregatedClient(commands, CodeBuild, { paginators });
